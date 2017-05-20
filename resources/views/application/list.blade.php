@extends("layouts.blank")

@section('content')

    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 应用管理 <span class="c-gray en">&gt;</span> 应用列表 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="page-container">

        <div class="cl pd-5 bg-1 bk-gray mt-20"> <span class="l">
                <a href="javascript:;" onclick="admin_add('申请新应用','/application/add','800','500')" class="btn btn-primary radius"><i class="Hui-iconfont">&#xe600;</i> 添加新应用</a></span>
            <span class="r">共有数据：<strong>
                    @if(null == $applications)
                        0
                    @else
                        {{ count($applications) }}
                    @endif
                </strong> 条</span> </div>
        <table class="table table-border table-bordered table-bg">
            <thead>
            <tr>
                <th scope="col" colspan="12">应用列表</th>
            </tr>
            <tr class="text-c">
                <th width="25"><input type="checkbox" name="" value=""></th>
                <th width="35">应用ID</th>
                <th width="60">应用名</th>
                <th width="60">client_id</th>
                <th width="80">创建者</th>
                <th width="100">Git</th>
                <th width="50">镜像</th>
                <th width="50">状态</th>
                <th width="70">是否接入小组OAuth</th>
                <th width="120">简介</th>
                <th width="120">加入时间</th>
                <th width="120">更新时间</th>
                <th width="80">操作</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($applications as $application)
            <tr class="text-c">
                <td><input type="checkbox" value="{{ $application->id }}" name="application_id"></td>
                <td>{{ $application->id }}</td>
                <td>{{ $application->name }}</td>
                <td>{{ $application->client_id }}</td>
                <td>{{ $application->user->name }}</td>
                <td>{{ $application->git_url }}</td>
                <td>{{ $application->docker_image or '' }}</td>
                <td>
                    @php
                    switch ($application->status)
                    {
                        case -1: echo '未通过审核';break;
                        case  0: echo '审核中';break;
                        case  1: echo '开发中';break;
                        case  2: echo '已上线';break;
                        case  3: echo '已下线';break;
                        default: echo '未知状态';break;
                    }
                    @endphp
                 </td>

                <td>
                    <i class="Hui-iconfont {{ $application->use_xyoauth?'Hui-iconfont-xuanze':'Hui-iconfont-close' }}"></i>
                </td>
                <td>{{ $application->description }}</td>
                <td>{{ $application->created_at }}</td>
                <td>{{ $application->updated_at }}</td>
                <td class="td-manage">
                    <a title="编辑" href="javascript:;" onclick="admin_edit('编辑','/application/{{ $application->id }}','1','800','500')" class="ml-5" style="text-decoration:none">
                        <i class="Hui-iconfont">&#xe6df;</i>
                    </a>
                    <a title="删除" href="javascript:;" onclick="admin_del(this,'{{ $application->id }}')" class="ml-5" style="text-decoration:none">
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
                    url: '{{ url('/application') }}/'+id,
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