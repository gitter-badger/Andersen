﻿@extends('layouts.blank')

@section('content')
<section class="container-fluid page-404 minWP text-c">
	<p class="error-title"><i class="Hui-iconfont va-m" style="font-size:80px">&#xe688;</i>
		<span class="va-m"> {{ $error_code }}</span>
	</p>
	<p class="error-description">{{ $error_doc }}</p>
	<p class="error-info">您可以：
		<a href="javascript:;" onclick="history.go(-1)" class="c-primary">&lt; 返回上一页</a>
		<span class="ml-20">|</span>
		<a href="/" class="c-primary ml-20">去首页 &gt;</a>
	</p>
</section>
@endsection