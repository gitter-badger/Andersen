@extends("layouts.blank")

@section('content')

<article class="page-container">
	<form class="form form-horizontal" id="form-admin-add">
		{{ csrf_field() }}
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">服务器：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="server_id" size="1">
                    @foreach ($servers as $server)
                    <option value="{{ $server->id }}">{{ $server->name }}</option>
                    @endforeach
                </select>
                </span> </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">应用：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="application_id" size="1">
                    @foreach ($applications as $application)
                        <option value="{{ $application->id }}">{{ $application->name }}</option>
                    @endforeach
                </select>
                </span> </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="name"><span class="c-red">*</span>实例名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="" id="name" name="name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="server_url"><span class="c-red">*</span>访问端口：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="9000" id="server_url" name="server_url">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="description">说明：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="" placeholder="" id="description" name="description">
            </div>
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
				minlength:2,
				maxlength:16
			},
            server_url:{
				required:true,
			},
            user_id:{
                required:true,
            },
            application_id:{
                required:true,
            }
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({
				type: 'POST',
				url: "/docker/add" ,
                timeout:   5000,
                success: function(data){
					layer.msg('创建成功!',{icon:6,time:1000});
					setTimeout(function () {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.$('.btn-refresh').click();
                        parent.layer.close(index);
                    },1200);
				},
                error: function(XmlHttpRequest, textStatus, errorThrown){
					layer.msg('创建失败!',{icon:5,time:2000});
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