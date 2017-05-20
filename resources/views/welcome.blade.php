@extends('layouts.blank')

@section('content')

<div class="page-container">
	<p class="f-20 text-success">欢迎使用Andersen <span class="f-14">v{{ config('app.version') }}</span>自动化部署平台</p>
	@if (isset($lastinfo))
		<p>  上次登录时间：{{ $lastinfo->login_time or '未知' }}</p>
		<p>上次登录IP：{{ $lastinfo->ip or '未知'}}  &nbsp;&nbsp;上次登录地点：{{ $lastinfo->ip_area or '未知' }}</p>
	@else
		<p>这是您的第一次登录</p>
	@endif
	{{--<table class="table table-border table-bordered table-bg">--}}
		{{--<thead>--}}
			{{--<tr>--}}
				{{--<th colspan="7" scope="col">信息统计</th>--}}
			{{--</tr>--}}
			{{--<tr class="text-c">--}}
				{{--<th>统计</th>--}}
				{{--<th>应用</th>--}}
				{{--<th>实例</th>--}}
				{{--<th>服务</th>--}}
				{{--<th>服务器</th>--}}
				{{--<th>用户</th>--}}
			{{--</tr>--}}
		{{--</thead>--}}
		{{--<tbody>--}}
			{{--<tr class="text-c">--}}
				{{--<td>总数</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
			{{--</tr>--}}
			{{--<tr class="text-c">--}}
				{{--<td>今日</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
			{{--</tr>--}}
			{{--<tr class="text-c">--}}
				{{--<td>昨日</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
			{{--</tr>--}}
			{{--<tr class="text-c">--}}
				{{--<td>本周</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
			{{--</tr>--}}
			{{--<tr class="text-c">--}}
				{{--<td>本月</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
				{{--<td>0</td>--}}
			{{--</tr>--}}
		{{--</tbody>--}}
	{{--</table>--}}
	<table class="table table-border table-bordered table-bg mt-20">
		<thead>
			<tr>
				<th colspan="2" scope="col">服务器信息</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<th width="30%">服务器计算机名</th>
				<td><span id="lbServerName">{{ $_SERVER['SERVER_NAME'] }}</span></td>
			</tr>
			<tr>
				<td>服务器IP地址</td>
				<td>{{ gethostbyname($_SERVER['SERVER_NAME']) }}</td>
			</tr>
			<tr>
				<td>服务器域名</td>
				<td>{{ $_SERVER["HTTP_HOST"] }}</td>
			</tr>
			<tr>
				<td>服务器端口 </td>
				<td>{{ getenv('SERVER_PORT') }}</td>
			</tr>
			<tr>
				<td>PHP运行方式 </td>
				<td>{{  php_sapi_name() }}</td>
			</tr>
			<tr>
				<td>服务器文档根目录 </td>
				<td>{{ getenv('DOCUMENT_ROOT') }}</td>
			</tr>
			<tr>
				<td>服务器操作系统 </td>
				<td>{{ php_uname() }}</td>
			</tr>
			<tr>
				<td>服务器脚本超时时间 </td>
				<td>{{ ini_get("max_execution_time") }}秒</td>
			</tr>
			<tr>
				<td>Web服务器 </td>
				<td>{{ $_SERVER["SERVER_SOFTWARE"] }}</td>
			</tr>
			<tr>
				<td>PHP 版本 </td>
				<td>{{ PHP_VERSION }}</td>
			</tr>
			<tr>
				<td>ZEND版本 </td>
				<td>{{ zend_version() }}</td>
			</tr>
			<tr>
				<td>服务器当前时间 </td>
				<td>{{ date("Y-m-d H:i:s",time()) }}</td>
			</tr>
			<tr>
				<td>服务器语言 </td>
				<td>{{ $_SERVER['HTTP_ACCEPT_LANGUAGE'] }}</td>
			</tr>
			<tr>
				<td>文件路径 </td>
				<td>{{ str_replace('\\','/',__FILE__)?str_replace('\\','/',__FILE__):$_SERVER['SCRIPT_FILENAME'] }}</td>
			</tr>
			<tr>
				<td>当前系统用户名 </td>
				<td>{{ get_current_user() }}</td>
			</tr>
		</tbody>
	</table>
</div>

<footer class="footer mt-20">
	<div class="container">
		<p>感谢jQuery、layer、laypage、Validform、UEditor、My97DatePicker、iconfont、Datatables、WebUploaded、icheck、highcharts、bootstrap-Switch<br>
			Copyright &copy;2017 Xiyou Linux Group All Rights Reserved.<br>
			本系统由H-ui前端框架提供前端技术支持,由Laravel框架提供后端技术支持</p>
	</div>
</footer>

@endsection