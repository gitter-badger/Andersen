@extends('layouts.blank')


@section('content')
<section class="container-fluid page-404 minWP text-c">
	<p class="error-title"><i class="Hui-iconfont va-m" style="font-size:80px">&#xe688;</i>
		<span class="va-m"> 403</span>
	</p>
	<p class="error-description">当前用户没有访问权限</p>
	<p class="error-info">您可以：
		<a href="{{ route('login') }}" class="c-primary">&gt; 使用其他账户登录</a>
		<span class="ml-20">|</span>
		<a href="{{ url('/') }}" class="c-primary ml-20">&lt; 返回首页 </a>
	</p>
</section>
@endsection