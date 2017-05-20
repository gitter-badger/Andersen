@extends("layouts.blank")

@section('content')

    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 实例管理 <span class="c-gray en">&gt;</span> 实例列表 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="page-container">

        <div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l">
                <a href="javascript:;" onclick="admin_add('申请新实例','/docker/add','800','500')" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加新实例</a></span>
                <span class="r">共有数据：<strong>
                        @if(null == $dockers)
                            0
                        @else
                            {{ count($dockers) }}
                        @endif
                        </strong> 条</span> </div>
        <table class="table table-border table-bordered table-bg">
            <thead>
            <tr>
                <th scope="col" colspan="11">实例列表</th>
            </tr>
            <tr class="text-c">
                <th width="25"><input type="checkbox" name="" value=""></th>
                <th width="40">实例ID</th>
                <th width="90">uuid</th>
                <th width="100">创建者</th>
                <th width="100">简介</th>
                <th width="50">状态</th>
                <th width="100">应用名</th>
                <th width="70">所在服务器</th>
                <th width="30">端口</th>
                <th width="120">创建时间</th>
                <th width="120">修改时间</th>
                <th width="100">操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($dockers as $docker)
            <tr class="text-c">
                <td><input type="checkbox" value="{{ $docker->id }}" name="docker_id"></td>
                <td>{{ $docker->id }}</td>
                <td>{{ $docker->uuid }}</td>
                <td>{{ $docker->user->name }}</td>
                <td>{{ $docker->description }}</td>
                <td>{{ $docker->status }}</td>
                <td>{{ $docker->application->name }}</td>
                <td>{{ $docker->server->name }}:{{ $docker->server->ip }}</td>
                <td>{{ $docker->server_url }}</td>
                <td>{{ $docker->created_at }}</td>
                <td>{{ $docker->updated_at }}</td>
                <td class="td-manage">
                    <a title="编辑" href="javascript:;" onclick="admin_edit('编辑','/docker/{{ $docker->id }}','1','800','500')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6df;</i>
                    </a>
                    <a title="删除" href="javascript:;" onclick="admin_del(this,'{{ $docker->id }}')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6e2;</i>
                    </a>
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
                    type: 'DELETE',
                    url: '{{ url('/docker') }}/'+id,
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