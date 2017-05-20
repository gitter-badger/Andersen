@extends("layouts.blank")

@section('content')

<article class="page-container">
	<form class="form form-horizontal" id="form-admin-add">
		{{ csrf_field() }}
        @if($isedit)
            <div class="row cl">
                <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>ID：</label>
                <div class="formControls col-xs-8 col-sm-9">
                    <p>{{ $service->id }}</p>
                </div>
            </div>
        @endif
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="name"><span class="c-red">*</span>服务名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$service->name:'' }}" placeholder="服务名" id="name" name="name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="env_name"><span class="c-red">*</span>ENV_NAME：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$service->env_name:'' }}" placeholder="" id="env_name" name="env_name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">服务类型：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="type" size="1"}}>
                    @if($isedit)
                        <option value="1"  {{ $service->status==1?'selected':'' }}>Domain</option>
                        <option value="2"  {{ $service->status==2?'selected':'' }}>MySQL</option>
                    @else
                        <option value="1" selected>Domain</option>
                        <option value="2" >MySQL</option>
                    @endif
                </select>
                </span>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">状态：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="status" size="1"}}>
                    @if($isedit)
                        <option value="0"  {{ $service->status==0?'selected':'' }}>关闭</option>
                        <option value="1"  {{ $service->status==1?'selected':'' }}>开启</option>
                    @else
                        <option value="0" selected>关闭</option>
                        <option value="1" >开启</option>
                    @endif
                </select>
                </span>
            </div>
        </div>
        @if($isedit)
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="client_id"><span class="c-red"></span>服务配置：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <pre class="prettyprint linenums">{{  $service->config or '{}' }}</pre>
            </div>
        </div>
        @endif

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
				maxlength:32
			},
            env_name:{
				required:true,
                minlength:2,
                maxlength:32
			},
            type:{
                required:true,
                range:[0,2]
            },
            status:{
				required:true,
                range:[0,1]
			},
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({
                @if($isedit)
				type: 'PUT',
                url: "/service/{{ $service->id }}" ,
                @else
                type: 'POST',
                url: "/service" ,
                @endif
                timeout:   5000,
                success: function(data){

					layer.msg('添加成功!',{icon:6,time:1000});
					setTimeout(function () {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.$('.btn-refresh').click();
                        parent.layer.close(index);
                    },1200);
				},
                error: function(XmlHttpRequest, textStatus, errorThrown){
                    console.log(XmlHttpRequest);
					layer.msg('添加失败!',{icon:5,time:2000});
//                    setTimeout(function () {
//                        var index = parent.layer.getFrameIndex(window.name);
//                        parent.$('.btn-refresh').click();
//                        parent.layer.close(index);
//                    },1200);
				}
			});

		}
	});
});
</script>

@endsection