<!DOCTYPE html>
<head>
	<title>后台登录 - Andersen自动化部署管理平台</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
	
	<link href="{{ asset('css/font-awesome.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/bootstrap-theme.min.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/bootstrap-social.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ asset('css/templatemo_style.css') }}" rel="stylesheet" type="text/css">
	<script src="https://www.google.com/recaptcha/api.js" async defer></script>
	{{--<script src='https://www.google.com/recaptcha/api.js'></script>--}}
	<script>
        window.Laravel = {!! json_encode([
        'csrfToken' => csrf_token(),
    ]) !!};
	</script>
</head>
<body class="templatemo-bg-image-1">
	<div class="container">
		<div class="col-md-12">
			<form class="form-horizontal templatemo-login-form-2" role="form" action="{{ route('login') }}" method="post">
				<div class="row">
					<div class="col-md-12">
						<h1>{{ config('app.name', 'Andersen') }}</h1>
					</div>
				</div>
				{{ csrf_field() }}
				<div class="row">
					<div class="templatemo-one-signin col-md-7">
				        <div class="form-group">
				          <div class="col-md-12">		          	
				            <label for="username" class="control-label">Account</label>
				            <div class="templatemo-input-icon-container">
				            	<i class="fa fa-user"></i>
				            	<input type="email" name="email" value="{{ old('email') }}" class="form-control" aria-describedby="mamilStatus" id="email" placeholder="请输入您的邮箱">
								@if ($errors->has('email'))
									<span class="help-error">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
								@endif
							</div>
				          </div>              
				        </div>
				        <div class="form-group">
				          <div class="col-md-12">
				            <label for="password" class="control-label">Password</label>
				            <div class="templatemo-input-icon-container">
				            	<i class="fa fa-lock"></i>
				            	<input type="password" class="form-control" name="password" id="password" placeholder="请输入您的密码">
								@if ($errors->has('password'))
									<span class="help-error">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
								@endif
				            </div>
				          </div>
				        </div>
						<div class="form-group {{ $errors->has('g-recaptcha-response')? 'has-error':'' }}">
                            <div class="col-md-12">
                                <div>
									{!! Captcha::display() !!}
                                </div>
                            @if ($errors->has('g-recaptcha-response'))
                                    <span class="help-error">
                                        <strong>{{ $errors->first('g-recaptcha-response') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12">
                                <div class="checkbox">
                                    <label for="remember">
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }} id="remember"> 记住我的登录状态
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br />
				        <div class="form-group">
				          <div class="col-md-12">
				            <input type="submit" value="登录" class="btn btn-warning">
				          </div>
				        </div>

					</div>
					<div class="templatemo-other-signin col-md-5">
						<label class="margin-bottom-15">
							 使用其他账户登录
						</label>
						<a class="btn btn-block btn-social btn-github margin-bottom-15" href="{{ route('xiyoulinux') }}">
						    <i class="fa fa-linux"></i> Sign in with XiyouLinux
						</a>
						<a class="btn btn-block btn-social btn-bitbucket margin-bottom-15" href="{{ route('github') }}">
							<i class="fa fa-github"></i> Sign in with Github
						</a>
						<a class="btn btn-block btn-social btn-facebook margin-bottom-15" href="#" style="background-color: #00BC0C;">
							<i class="fa fa-weixin"></i> Sign in with Weixin
						</a>
						<a class="btn btn-block btn-social btn-dropbox margin-bottom-15" href="#">
							<i class="fa fa-qq"></i> Sign in with QQ
						</a>
						<a class="btn btn-block btn-social btn-google-plus" href="{{ route('google') }}">
							<i class="fa fa-google-plus"></i> Sign in with Google
						</a>
						<br/>
						<div class="form-group">
							<div class="col-md-11 col-md-offset-1">
								<a href="{{ route('password.request') }}" class="text-center">忘记密码,无法登录</a>
							</div>
						</div>
					</div>
				</div>
		      </form>
		</div>
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<br />
				<p class="footer_content">Copyright &copy; 2017 Xiyou Linux Group All Rights Reserved.</p>
			</div>
		</div>
	</div>
</body>
</html>