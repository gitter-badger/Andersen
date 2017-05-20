@extends("layouts.blank")

@section('content')

<article class="page-container">
	<form class="form form-horizontal" id="form-admin-add">
		{{ csrf_field() }}
        @if($isedit)
            <div class="row cl">
                <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>实例ID：</label>
                <div class="formControls col-xs-8 col-sm-9">
                    <p>{{ $docker->id }}</p>
                </div>
            </div>
            <div class="row cl">
                <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>UUID：</label>
                <div class="formControls col-xs-8 col-sm-9">
                    <p>{{ $docker->uuid }}</p>
                </div>
            </div>
        @endif
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="name"><span class="c-red">*</span>状态：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$application->name:'' }}" placeholder="" id="name" name="name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="client_id"><span class="c-red">*</span>简介：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$application->client_id:'' }}" placeholder="CLIENT_ID" id="client_id" name="client_id">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="git_url"><span class="c-red">*</span>应用名：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$application->git_url:'' }}" placeholder="Git" id="git_url" name="git_url">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="logo_url"><span class="c-red">*</span>所在服务器：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$application->logo_url:'' }}" placeholder="LOGO" id="logo_url" name="logo_url">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="website"><span class="c-red">*</span>Website：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$application->website:'' }}" placeholder="Website" id="website" name="website">
            </div>
        </div>
        @if($isedit == true)
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">状态：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="status" size="1" {{ Auth::user()->isadmin == false?'disabled':'' }}>
                    <option value="0"  {{ $application->status==0?'selected':'' }}>审核中</option>
                    <option value="1"  {{ $application->status==1?'selected':'' }}>开发中</option>
                    <option value="2"  {{ $application->status==2?'selected':'' }}>上线</option>
                    <option value="3"  {{ $application->status==3?'selected':'' }}>下线</option>
                    <option value="-1" {{ $application->status==-1?'selected':'' }}>未通过审核</option>
                </select>
                </span>
            </div>
        </div>
        @endif
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="description"><span class="c-red">*</span>简介：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <textarea class="textarea" placeholder="简介" id="description" name="description">{{  $isedit?$application->description:'' }}</textarea>
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
				maxlength:32
			},
            client_id:{
				required:true,
                minlength:2,
                maxlength:32
			},
            description:{
                maxlength:512
            },
            git_url:{
                required:true,
                url:true,
			},
            logo_url:{
                url:true,
            },
            website:{
                url:true,
            },
            status:{
				required:true,
                range:[-1,5]
			},
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({
                @if($isedit)
				type: 'PUT',
                url: "/application/{{ $application->id }}" ,
                @else
                type: 'POST',
                url: "/application" ,
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