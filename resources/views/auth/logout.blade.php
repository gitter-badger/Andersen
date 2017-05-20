<!DOCTYPE HTML>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <link rel="Bookmark" href="/favicon.ico" >
    <link rel="Shortcut Icon" href="/favicon.ico" />

    <!--[if lt IE 9]>
    <script type="text/javascript" src="{{ asset('lib/html5shiv.js') }}"></script>
    <script type="text/javascript" src="{{ asset('lib/respond.min.js') }}"></script>

    <![endif]-->
    <link href="{{ asset('static/h-ui/css/H-ui.min.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('static/h-ui.admin/css/H-ui.admin.css') }}" rel="stylesheet" type="text/css" />
    <link href="{{ asset('lib/Hui-iconfont/1.0.8/iconfont.css') }}" rel="stylesheet" type="text/css" />

    <title>{{ config('app.name', 'Andersen') }}</title>
</head>
<body>

<iframe style="display: none" src="https://sso.xiyoulinux.org/logout"></iframe>
<section class="container-fluid page-404 minWP text-c">
    <p class="error-title"><i class="Hui-iconfont va-m" style="font-size:80px">&#xe606;</i>
        <span class="va-m">Logout</span>
    </p>
    <p class="error-description">正在退出，欢迎再次使用~</p>
</section>

<script language="javascript" type="text/javascript">
    window.onload =function () {
        window.location.href='/';
    };
</script>

</body>
</html>