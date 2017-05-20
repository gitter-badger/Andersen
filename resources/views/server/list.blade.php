@extends("layouts.blank")

@section('content')

    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 服务器管理 <span class="c-gray en">&gt;</span> 服务器列表 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="page-container">

        <div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l">
                <a href="javascript:;" onclick="admin_add('添加服务器','/server/add','800','500')" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加新服务器</a></span>
            <span class="r">共有数据：<strong>
                    @if(null == $servers)
                        0
                    @else
                        {{ count($servers) }}
                    @endif
                    </strong> 条</span> </div>
        <table class="table table-border table-bordered table-bg">
            <thead>
            <tr>
                <th scope="col" colspan=13>服务器列表</th>
            </tr>
            <tr class="text-c">
                <th width="25"><input type="checkbox" name="" value=""></th>
                <th width="40">ID</th>
                <th width="100">服务器名称</th>
                <th width="90">服务器IP</th>
                <th width="90">Docker URI</th>
                <th width="40">SSL</th>
                <th width="70">管理员</th>
                <th width="50">服务器状态</th>
                <th width="150">服务器类型</th>
                <th width="70">说明</th>
                <th width="120">加入时间</th>
                <th width="120">更新时间</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($servers as $server)
            <tr class="text-c">
                <td><input type="checkbox" value="{{ $server->id }}" name="server_id"></td>
                <td>{{ $server->id }}</td>
                <td>{{ $server->name }}</td>
                <td>{{ $server->ip }}</td>
                <td>{{ $server->remote_socket }}</td>
                <td>{{ $server->ssl?'开启':'关闭' }}</td>
                <td>{{ $server->user->name }}</td>
                <td>
                    @php
                        switch ($server->status)
                        {
                            case -1: echo '无法连接';break;
                            case  0: echo '初始化';break;
                            case  1: echo '正常';break;
                            case  2: echo '连接异常';break;
                            default: echo '未知';break;
                        }
                    @endphp
                </td>
                <td>
                    @php
                        switch ($server->type)
                        {
                            case  0: echo '公有';break;
                            case  1: echo '私有';break;
                            case  2: echo '部分';break;
                            default: echo '未知';break;
                        }
                    @endphp
                </td>
                <td>{{ $server->description }}</td>
                <td>{{ $server->created_at }}</td>
                <td>{{ $server->updated_at }}</td>
                <td class="td-manage">
                    @if(Auth::user()->isadmin == true || $server->user->id == Auth::id())
                    <a title="编辑" href="javascript:;" onclick="admin_edit('编辑','/server/{{ $server->id }}','1','800','500')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6df;</i>
                    </a>
                    <a title="删除" href="javascript:;" onclick="admin_del(this,'{{ $server->id }}')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6e2;</i>
                    </a>
                    @endif
                </td>
            </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@section('javascript_load')

    <script type="text/javascript" src="{{ asset('lib/My97DatePicker/4.8/WdatePicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('lib/datatables/1.10.0/jquery.dataTables.min.js') }}"></script>

    <script type="text/javascript">
        /*管理员-增加*/
        function admin_add(title,url,w,h){
            layer_show(title,url,w,h);
        }
        /*管理员-删除*/
        function admin_del(obj,id){
            layer.confirm('确认要删除吗？',function(index){
                $.ajax({
                    type: 'delete',
                    url: '{{ url('/server') }}/'+id,
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    dataType: 'json',
                    success: function(data){
                        $(obj).parents("tr").remove();
                        layer.msg('已删除!',{icon:6,time:1000});
                    },
                    error:function(data) {
                        console.log(data.msg);
                    },
                });
            });
        }

        /*管理员-编辑*/
        function admin_edit(title,url,id,w,h){
            layer_show(title,url,w,h);
        }
    </script>

@endsection