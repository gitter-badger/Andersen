<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
<meta http-equiv="Cache-Control" content="no-siteapp" />

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<!--[if lt IE 9]>
<script type="text/javascript" src="{{ asset('lib/html5shiv.js') }}"></script>
<script type="text/javascript" src="{{ asset('lib/respond.min.js') }}"></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
<![endif]-->
<link href="{{ asset('static/h-ui/css/H-ui.min.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('static/h-ui.admin/css/H-ui.login.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('static/h-ui.admin/css/style.css') }}" rel="stylesheet" type="text/css" />
<link href="{{ asset('lib/Hui-iconfont/1.0.8/iconfont.css') }}" rel="stylesheet" type="text/css" />
<!--[if IE 6]>
<script type="text/javascript" src="{{ asset('lib/DD_belatedPNG_0.0.8a-min.js') }}" ></script>
<script>DD_belatedPNG.fix('*');</script>
<![endif]-->

<script>
    window.Laravel = {!! json_encode([
        'csrfToken' => csrf_token(),
    ]) !!};
</script>
{{--<script language="javascript">
    function newgdcode(obj,url) {
        obj.src = url+ '?nowtime=' + new Date().getTime();
//后面传递一个随机参数，否则在IE7和火狐下，不刷新图片
    }
</script>--}}

    <title>后台登录 - Andersen自动化部署管理平台</title>
<meta name="keywords" content="Andersen自动化部署管理平台">
<meta name="description" content="Andersen自动化部署管理平台">
</head>
<body>
<div class="header"></div>
<div class="loginWraper">
  <div id="loginform" class="loginBox">
    <form class="form form-horizontal" action="{{ route('login') }}" method="post">
      {{ csrf_field() }}

      <div class="row cl">
        <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60d;</i></label>
        <div class="formControls col-xs-8">
          <input id="email" name="email" value="{{ old('email') }}" type="text" placeholder="邮箱" class="input-text size-L">
        </div>
      </div>
      <div class="row cl">
        <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60e;</i></label>
        <div class="formControls col-xs-8">
          <input id="password" name="password" type="password" placeholder="密码" class="input-text size-L">
        </div>
      </div>
      <div class="row cl">
        <div class="formControls col-xs-9 col-xs-offset-3">
          {{--<input class="input-text size-L" type="text" placeholder="验证码"  value="" style="width:150px;">--}}
          {{--<img src="{{captcha_src()}}" onclick="javascript:newgdcode(this,this.src);"> <a id="kanbuq" href="javascript:;">看不清，换一张</a> </div>--}}
            {!! app('captcha')->display(); !!}
      </div>
      <div class="row cl">
        <div class="formControls col-xs-9 col-xs-offset-3">
          <label for="remember">
            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }} id="remember" value="">
            使我保持登录状态
          </label>
            <a class="btn btn-link" href="{{ route('password.request') }}">
                忘记密码
            </a>
        </div>

      </div>
      <div class="row cl">
        <div class="formControls col-xs-2 col-xs-offset-3">
          <input name="" type="submit" class="btn btn-success radius size-L" value="&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;">
       </div>
          <div class="formControls col-xs-6 col-xs-offset-1">
             <input name="" type="reset" class="btn btn-default radius size-L" value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;">
          </div>
      </div>
    </form>
  </div>
</div>
<footer class="footer mt-20">
	<div class="container-fluid">
		<p>Copyright &copy;2017 Xiyou Linux Group All Rights Reserved. <br>
		</p>
	</div>
</footer>
<script type="text/javascript" src="lib/jquery/1.9.1/jquery.min.js"></script> 
<script type="text/javascript" src="static/h-ui/js/H-ui.min.js"></script>

</body>
</html>