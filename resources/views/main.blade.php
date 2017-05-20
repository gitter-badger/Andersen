<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="Bookmark" href="{{  asset('/favicon.ico') }}" >
<link rel="Shortcut Icon" href="{{  asset('/favicon.ico') }}" />
<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<!--[if lt IE 9]>
<script type="text/javascript" src="{{ asset('lib/html5shiv.js') }}"></script>
<script type="text/javascript" src="{{ asset('lib/respond.min.js') }}"></script>
<![endif]-->
<link rel="stylesheet" type="text/css" href="{{ asset('static/h-ui/css/H-ui.min.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('static/h-ui.admin/css/H-ui.admin.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('lib/Hui-iconfont/1.0.8/iconfont.css') }}" />
<link rel="stylesheet" type="text/css" href="{{ asset('static/h-ui.admin/skin/default/skin.css') }}" id="skin" />
<link rel="stylesheet" type="text/css" href="{{ asset('static/h-ui.admin/css/style.css') }}" />
<!--[if IE 6]>
<script type="text/javascript" src="{{ asset('lib/DD_belatedPNG_0.0.8a-min.js') }}" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->
<script>
    window.Laravel = {!! json_encode([
        'csrfToken' => csrf_token(),
    ]) !!};
</script>
<title>{{ config('app.name') }}</title>
</head>
<body>
<header class="navbar-wrapper">
	<div class="navbar navbar-fixed-top">
		<div class="container-fluid cl"> <a class="logo navbar-logo f-l mr-10 hidden-xs" href="{{ url('/home') }}">Andersen</a> <a class="logo navbar-logo-m f-l mr-10 visible-xs" href="{{ url('/') }}}">H-ui</a>
			<span class="logo navbar-slogan f-l mr-10 hidden-xs">v0.1</span>
			<a aria-hidden="false" class="nav-toggle Hui-iconfont visible-xs" href="javascript:;">&#xe667;</a>
			<nav class="nav navbar-nav">
				<ul class="cl">
					<li class="dropDown dropDown_hover"><a href="javascript:;" class="dropDown_A"><i class="Hui-iconfont">&#xe600;</i> 新增 <i class="Hui-iconfont">&#xe6d5;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:;" onclick="member_add('添加应用','/application/add','','510')"><i class="Hui-iconfont">&#xe6c0;</i> 应用</a></li>
							<li><a href="javascript:;" onclick="member_add('添加服务器','/server/add','','510')"><i class="Hui-iconfont">&#xe6b1;</i> 服务</a></li>
							<li><a href="javascript:;" onclick="member_add('添加实例','/docker/add','','510')"><i class="Hui-iconfont">&#xe72b;</i> 实例</a></li>
							<li><a href="javascript:;" onclick="member_add('添加用户','/user/add','','510')"><i class="Hui-iconfont">&#xe60d;</i> 用户</a></li>
						</ul>
					</li>
				</ul>
			</nav>
			<nav id="Hui-userbar" class="nav navbar-nav navbar-userbar hidden-xs">
				<ul class="cl">
					{{ Auth::user()->isadmin ?'<li>管理员</li>':'用户' }}
					<li class="dropDown dropDown_hover">
						<a href="#" class="dropDown_A">{{ Auth::user()->name }}<i class="Hui-iconfont">&#xe6d5;</i></a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:;" onClick="myselfinfo()">个人信息</a></li>
							<li><a href="#">切换账户</a></li>
							<li>
								<a href="{{ route('logout') }}"
								   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
									退出
								</a>

								<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
									{{ csrf_field() }}
								</form>
							</li>
						</ul>
					</li>
					<li id="Hui-msg">
						<a href="#" title="消息">
							<span class="badge badge-danger">0</span>
							<i class="Hui-iconfont" style="font-size:18px">&#xe68a;</i>
						</a>
					</li>
					<li id="Hui-skin" class="dropDown right dropDown_hover">
						<a href="javascript:;" class="dropDown_A" title="换肤">
							<i class="Hui-iconfont" style="font-size:18px">&#xe62a;</i>
						</a>
						<ul class="dropDown-menu menu radius box-shadow">
							<li><a href="javascript:;" data-val="default" title="默认（黑色）">默认（黑色）</a></li>
							<li><a href="javascript:;" data-val="blue" title="蓝色">蓝色</a></li>
							<li><a href="javascript:;" data-val="green" title="绿色">绿色</a></li>
							<li><a href="javascript:;" data-val="red" title="红色">红色</a></li>
							<li><a href="javascript:;" data-val="yellow" title="黄色">黄色</a></li>
							<li><a href="javascript:;" data-val="orange" title="橙色">橙色</a></li>
						</ul>
					</li>
				</ul>
		</nav>
	</div>
</div>
</header>
<aside class="Hui-aside">
	<div class="menu_dropdown bk_2">
		<dl id="menu-article">
			<dt><i class="Hui-iconfont">&#xe6c0;</i> 应用管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					<li><a data-href="{{ url('/applications') }}" data-title="应用管理" href="javascript:void(0)">应用管理</a></li>
                    <li><a data-href="{{ url('/application/add') }}" data-title="添加应用" href="javascript:void(0)">添加应用</a></li>
			</ul>
		</dd>
	</dl>
		<dl id="menu-picture">
			<dt><i class="Hui-iconfont">&#xe72b;</i> Docker管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					<li><a data-href="{{ url('/dockers') }}" data-title="实例管理" href="javascript:void(0)">实例管理</a></li>
                    <li><a data-href="{{ url('/docker/add') }}" data-title="添加实例" href="javascript:void(0)">添加实例</a></li>
			</ul>
		</dd>
	</dl>
		<dl id="menu-product">
			<dt><i class="Hui-iconfont">&#xe6b1;</i> 服务器管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					<li><a data-href="{{ url('/servers') }}" data-title="服务器管理" href="javascript:void(0)">服务器管理</a></li>
					<li><a data-href="{{ url('/server/add') }}" data-title="添加服务器" href="javascript:void(0)">添加服务器</a></li>
			</ul>
		</dd>
	</dl>
        <dl id="menu-tongji">
            <dt><i class="Hui-iconfont">&#xe654;</i> 服务管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
            <dd>
                <ul>
                    <li><a data-href="{{ url('/services') }}" data-title="所有服务" href="javascript:;">服务管理</a></li>
                    <li><a data-href="{{ url('/service/add') }}" data-title="添加服务" href="javascript:void(0)">添加服务</a></li>
                </ul>
            </dd>
        </dl>
        <dl id="menu-member">
			<dt><i class="Hui-iconfont">&#xe60d;</i> 用户管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					<li><a data-href="{{ url('/user/info') }}" data-title="个人信息" href="javascript:;">个人信息</a></li>
					<li><a data-href="{{ url('/siginlog') }}" data-title="登录记录" href="javascript:void(0)">登录记录</a></li>
			</ul>
		</dd>
	</dl>
@if ( Auth::user()->isadmin == true)
		<dl id="menu-system">
			<dt><i class="Hui-iconfont">&#xe63c;</i> 系统管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
			<dd>
				<ul>
					{{--<li><a data-href="{{ url('/#') }}" data-title="系统设置" href="javascript:void(0)">系统设置</a></li>--}}
                    <li><a data-href="{{ url('/users') }}" data-title="用户管理" href="javascript:void(0)">用户管理</a></li>
					<li><a data-href="{{ url('/siginlog/0') }}" data-title="登录日志" href="javascript:void(0)">登录日志</a></li>
			</ul>
		</dd>
	</dl>
@endif
</div>
</aside>
<div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
<section class="Hui-article-box">
	<div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
		<div class="Hui-tabNav-wp">
			<ul id="min_title_list" class="acrossTab cl">
				<li class="active">
					<span title="我的桌面" data-href="{{ url('/welcome') }}">我的桌面</span>
					<em></em>
				</li>
		</ul>
	</div>
		<div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d7;</i></a></div>
	</div>
	<div id="iframe_box" class="Hui-article">
		<div class="show_iframe">
			<div style="display:none" class="loading"></div>
			<iframe scrolling="yes" frameborder="0" src="{{ url('/welcome') }}"></iframe>
		</div>
	</div>
</section>

<div class="contextMenu" id="Huiadminmenu">
	<ul>
		<li id="closethis">关闭当前 </li>
		<li id="closeall">关闭全部 </li>
</ul>
</div>
<!--_footer 作为公共模版分离出去-->
<script type="text/javascript" src="{{ asset('lib/jquery/1.9.1/jquery.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('lib/layer/2.4/layer.js') }}"></script>
<script type="text/javascript" src="{{ asset('static/h-ui/js/H-ui.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('static/h-ui.admin/js/H-ui.admin.js') }}"></script>
<!--/_footer 作为公共模版分离出去-->

<!--请在下方写此页面业务相关的脚本-->
<script type="text/javascript" src="{{ asset('lib/jquery.contextmenu/jquery.contextmenu.r2.js') }}"></script>
<script type="text/javascript">
$(function(){
	/*$("#min_title_list li").contextMenu('Huiadminmenu', {
		bindings: {
			'closethis': function(t) {
				console.log(t);
				if(t.find("i")){
					t.find("i").trigger("click");
				}		
			},
			'closeall': function(t) {
				alert('Trigger was '+t.id+'\nAction was Email');
			},
		}
	});*/
});
/*个人信息*/
function myselfinfo(){
	layer.open({
		type: 1,
		area: ['300px','200px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: '查看信息',
		content: '<div><p>姓名：{{ Auth::user()->name }}</p><p>邮箱：{{ Auth::user()->email }}</p></div>'
	});
}

///*资讯-添加*/
//function article_add(title,url){
//	var index = layer.open({
//		type: 2,
//		title: title,
//		content: url
//	});
//	layer.full(index);
//}
///*图片-添加*/
//function picture_add(title,url){
//	var index = layer.open({
//		type: 2,
//		title: title,
//		content: url
//	});
//	layer.full(index);
//}
/*产品-添加*/
function fram_add(title,url){
	var index = layer.open({
		type: 2,
		title: title,
		content: url
	});
	layer.full(index);
}
/*用户-添加*/
function member_add(title,url,w,h){
	layer_show(title,url,w,h);
}


</script>

</body>
</html>