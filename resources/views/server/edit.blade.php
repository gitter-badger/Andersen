@extends("layouts.blank")

@section('content')

<article class="page-container">
	<form class="form form-horizontal" id="form-admin-add">
		{{ csrf_field() }}
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="name"><span class="c-red">*</span>姓名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{ $user->name }}" placeholder="" id="name" name="name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="password"><span class="c-red">*</span>密码：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="password" class="input-text" autocomplete="off" value="" placeholder="密码" id="password" name="password">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="email"><span class="c-red">*</span>邮箱：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" placeholder="@" name="email" id="email" value="{{ $user->email }}">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">角色：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="isadmin" size="1" {{ $user->isadmin?'':'disabled' }}>
                    <option value="0" {{ $user->isadmin?'':'selected' }}>普通用户</option>
                    <option value="1" {{ $user->isadmin?'selected':'' }}>管理员</option>

                </select>
                </span> </div>
        </div>
        <br />
        <div class="row cl">
            <div class="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-3">
                <input class="btn btn-primary radius" type="submit" value="&nbsp;&nbsp;提交&nbsp;&nbsp;">
            </div>
        </div>
    </form>
</article>

@endsection

@section('javascript_load')

<script type="text/javascript">
$(function(){
	$('.skin-minimal input').iCheck({
		checkboxClass: 'icheckbox-blue',
		radioClass: 'iradio-blue',
		increaseArea: '20%'
	});
	
	$("#form-admin-add").validate({
        debug:true,
		rules:{
			name:{
				required:true,
				minlength:4,
				maxlength:16
			},
			password:{
				required:true,
			},
			password2:{
				required:true,
				equalTo: "#password"
			},
//			sex:{
//				required:true,
//			},
//			phone:{
//				required:true,
//				isPhone:true,
//			},
			email:{
				required:true,
				email:true,
			},
			isadmin:{
				required:true,
			},
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({
				type: 'POST',
				url: "/user/add" ,
                timeout:   5000,
                //dateType:'json',
                success: function(data){
				    console.log(data);
					layer.msg('添加成功!',{icon:6,time:1000});
					setTimeout(function () {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.$('.btn-refresh').click();
                        parent.layer.close(index);
                    },1200);
				},
                error: function(XmlHttpRequest, textStatus, errorThrown){
                    debugger;
                    console.log(XmlHttpRequest);
					layer.msg('添加失败!',{icon:5,time:2000});
                    setTimeout(function () {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.$('.btn-refresh').click();
                        parent.layer.close(index);
                    },1200);
				}
			});

		}
	});
});
</script>

@endsection