@extends("layouts.blank")

@section('content')

<article class="page-container">
	<form class="form form-horizontal" id="form-admin-add">
		{{ csrf_field() }}
        @if($isedit == true)
            <div class="row cl">
                <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>服务器ID：</label>
                <div class="formControls col-xs-8 col-sm-9">
                    <p>{{ $server->id }}</p>
                </div>
            </div>
        @endif
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="name"><span class="c-red">*</span>服务器名称：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$server->name:'' }}" placeholder="服务器名称" id="name" name="name">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="ip"><span class="c-red">*</span>服务器IP：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$server->ip:'' }}" placeholder="服务器IP" id="ip" name="ip">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="remote_socket"><span class="c-red">*</span>Docker URI：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <input type="text" class="input-text" value="{{  $isedit?$server->remote_socket:'' }}" placeholder="Docker URI" id="remote_socket" name="remote_socket">
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>Docker SSL：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="ssl" size="1">
                    @if($isedit)
                        <option value="0"  {{ $server->type== 0?'selected':'' }}>关闭</option>
                        <option value="1"  {{ $server->type== 1?'selected':'' }}>开启</option>
                    @else
                        <option value="0" selected>关闭</option>
                        <option value="1" >开启</option>
                    @endif
                </select>
                </span>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3"><span class="c-red">*</span>服务器类型：</label>
            <div class="formControls col-xs-8 col-sm-9"> <span class="select-box" style="width:150px;">
                <select class="select" name="type" size="1">
                    @if($isedit)
                        <option value="0"  {{ $server->type== 0?'selected':'' }}>开放</option>
                        <option value="1"  {{ $server->type== 1?'selected':'' }}>私有</option>
                        {{--<option value="2"  {{ $isedit&$server->type== 2?'selected':'' }}>指定使用者</option>--}}
                    @else
                        <option value="0" selected>开放</option>
                        <option value="1" >私有</option>
                    @endif
                </select>
                </span>
            </div>
        </div>
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3" for="description">简介：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <textarea class="textarea" placeholder="简介" id="description" name="description">{{  $isedit?$server->description:'' }}</textarea>
            </div>
        </div>
        @if($isedit == true)
        <div class="row cl">
            <label class="form-label col-xs-4 col-sm-3">服务器状态：</label>
            <div class="formControls col-xs-8 col-sm-9">
                <p>
                    @php
                        switch ($server->status)
                        {
                            case -1: echo '无法连接';break;
                            case  0: echo '初始化';break;
                            case  1: echo '正常';break;
                            case  2: echo '连接异常';break;
                            default: echo '未知';break;
                        }
                    @endphp
                </p>
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
            ip:{
                required:true,
            },
            port:{
                required:true,
                range:[1,65525]
            },
            description:{
                maxlength:512
            },
            type:{
				required:true,
                range:[0,2]
			},
		},
		onkeyup:false,
		focusCleanup:true,
		success:"valid",
		submitHandler:function(form){
			$(form).ajaxSubmit({
                @if($isedit == true)
				type: 'PUT',
                url: "/server/{{ $server->id }}" ,
                @else
                type: 'POST',
                url: "/server" ,
                @endif
                timeout:   5000,
                success: function(data){

					layer.msg('操作成功!',{icon:6,time:1000});
					setTimeout(function () {
                        var index = parent.layer.getFrameIndex(window.name);
                        parent.$('.btn-refresh').click();
                        parent.layer.close(index);
                    },1200);
				},
                error: function(XmlHttpRequest, textStatus, errorThrown){
                    console.log(XmlHttpRequest);
					layer.msg('操作失败!',{icon:5,time:2000});
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