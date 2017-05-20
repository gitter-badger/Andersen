@extends("layouts.blank")

@section('content')

    <nav class="breadcrumb"><i class="Hui-iconfont">&#xe67f;</i> 首页 <span class="c-gray en">&gt;</span> 用户管理 <span class="c-gray en">&gt;</span> 登录日志 <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="page-container">
        <div class="text-c"> 登录日志检索：
            <input type="text" class="input-text" style="width:250px" placeholder="输入姓名" id="" name="username">
            <button type="submit" class="btn btn-success" id="" name=""><i class="Hui-iconfont">&#xe665;</i> 搜日志</button>
        </div>
        <div class="cl pd-5 bg-1 bk-gray mt-20">
            <span class="r">共有数据：<strong>{{ count($signlogs) }}</strong> 条</span>
        </div>
        <table class="table table-border table-bordered table-bg">
            <thead>
            <tr>
                <th scope="col" colspan="7">登录日志</th>
            </tr>
            <tr class="text-c">
                <th width="40">日志ID</th>
                <th width="50">用户ID</th>
                <th width="100">用户名</th>
                <th width="100">IP</th>
                <th width="150">地址</th>
                <th width="130">登录时间</th>
                <th width="130">退出时间</th>
            </tr>
            </thead>
            <tbody>
            @foreach ($signlogs as $signlog)
            <tr class="text-c">
                <td>{{ $signlog->id }}</td>
                <td>{{ $signlog->user->id }}</td>
                <td>{{ $signlog->user->name }}</td>
                <td>{{ $signlog->ip }}</td>
                <td>{{ $signlog->ip_area }}</td>
                <td>{{ $signlog->login_time }}</td>
                <td>{{ $signlog->logout_time }}</td>
            </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@section('javascript_load')

    <script type="text/javascript" src="{{ asset('lib/My97DatePicker/4.8/WdatePicker.js') }}"></script>
    <script type="text/javascript" src="{{ asset('lib/datatables/1.10.0/jquery.dataTables.min.js') }}"></script>

@endsection