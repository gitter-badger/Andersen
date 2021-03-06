/*! layer-v2.4 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
;!function(a,b){"use strict";var c,d,e={getPath:function(){var a=document.scripts,b=a[a.length-1],c=b.src;if(!b.getAttribute("merge"))return c.substring(0,c.lastIndexOf("/")+1)}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},f={v:"2.4",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(a,b){var d=0;return a=a||{},f.cache=e.config=c.extend(e.config,a),f.path=e.config.path||f.path,"string"==typeof a.extend&&(a.extend=[a.extend]),f.use("skin/layer.css",a.extend&&a.extend.length>0?function g(){var c=a.extend;f.use(c[c[d]?d:d-1],d<c.length?function(){return++d,g}():b)}():b),this},use:function(a,b,d){var e=c("head")[0],a=a.replace(/\s/g,""),g=/\.css$/.test(a),h=document.createElement(g?"link":"script"),i="layui_layer_"+a.replace(/\.|\//g,"");return f.path?(g&&(h.rel="stylesheet"),h[g?"href":"src"]=/^http:\/\//.test(a)?a:f.path+a,h.id=i,c("#"+i)[0]||e.appendChild(h),function j(){(g?1989===parseInt(c("#"+i).css("width")):f[d||i])?function(){b&&b();try{g||e.removeChild(h)}catch(a){}}():setTimeout(j,100)}(),this):void 0},ready:function(a,b){var d="function"==typeof a;return d&&(b=a),f.config(c.extend(e.config,function(){return d?{}:{path:a}}()),b),this},alert:function(a,b,d){var e="function"==typeof b;return e&&(d=b),f.open(c.extend({content:a,yes:d},e?{}:b))},confirm:function(a,b,d,g){var h="function"==typeof b;return h&&(g=d,d=b),f.open(c.extend({content:a,btn:e.btn,yes:d,btn2:g},h?{}:b))},msg:function(a,d,g){var i="function"==typeof d,j=e.config.skin,k=(j?j+" "+j+"-msg":"")||"layui-layer-msg",l=h.anim.length-1;return i&&(g=d),f.open(c.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,end:g},i&&!e.config.skin?{skin:k+" layui-layer-hui",shift:l}:function(){return d=d||{},(-1===d.icon||d.icon===b&&!e.config.skin)&&(d.skin=k+" "+(d.skin||"layui-layer-hui")),d}()))},load:function(a,b){return f.open(c.extend({type:3,icon:a||0,shade:.01},b))},tips:function(a,b,d){return f.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,shade:!1,fix:!1,maxWidth:210},d))}},g=function(a){var b=this;b.index=++f.index,b.config=c.extend({},b.config,e.config,a),b.creat()};g.pt=g.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],g.pt.config={type:0,shade:.3,fix:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},g.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,g=f.zIndex+d,i="object"==typeof f.title,j=f.maxmin&&(1===f.type||2===f.type),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=g,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(g-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+h[0]+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+h[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+g+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div id="'+(f.id||"")+'" class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=j?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;c>b;b++)a+='<a class="'+h[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+h[6]+'">'+a+"</div>"}():"")+"</div>"],k),c},g.pt.creat=function(){var a=this,b=a.config,g=a.index,i=b.content,j="object"==typeof i;if(!c("#"+b.id)[0]){switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],f.closeAll("dialog");break;case 2:var i=b.content=j?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+g+'" name="'+h[4]+g+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,f.closeAll("loading");break;case 4:j||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||f.closeAll("tips")}a.vessel(j,function(d,e){c("body").append(d[0]),j?function(){2==b.type||4==b.type?function(){c("body").append(d[1])}():function(){i.parents("."+h[0])[0]||(i.show().addClass("layui-layer-wrap").wrap(d[1]),c("#"+h[0]+g).find("."+h[5]).before(e))}()}():c("body").append(d[1]),a.layero=c("#"+h[0]+g),b.scrollbar||h.html.css("overflow","hidden").attr("layer-full",g)}).auto(g),2==b.type&&f.ie6&&a.layero.find("iframe").attr("src",i[0]),c(document).off("keydown",e.enter).on("keydown",e.enter),a.layero.on("keydown",function(a){c(document).off("keydown",e.enter)}),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(g),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){f.close(a.index)},b.time),a.move().callback(),h.anim[b.shift]&&a.layero.addClass(h.anim[b.shift])}},g.pt.auto=function(a){function b(a){a=g.find(a),a.height(i[1]-j-k-2*(0|parseFloat(a.css("padding"))))}var e=this,f=e.config,g=c("#"+h[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&g.width(g.innerWidth()),g.outerWidth()>f.maxWidth&&g.width(f.maxWidth));var i=[g.innerWidth(),g.innerHeight()],j=g.find(h[1]).outerHeight()||0,k=g.find("."+h[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fix&&i[1]>=d.height()&&(i[1]=d.height(),b("."+h[5])):b("."+h[5])}return e},g.pt.offset=function(){var a=this,b=a.config,c=a.layero,e=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(d.height()-e[1])/2,a.offsetLeft=(d.width()-e[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&(a.offsetTop=b.offset,"rb"===b.offset&&(a.offsetTop=d.height()-e[1],a.offsetLeft=d.width()-e[0])),b.fix||(a.offsetTop=/%$/.test(a.offsetTop)?d.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?d.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=d.scrollTop(),a.offsetLeft+=d.scrollLeft()),c.css({top:a.offsetTop,left:a.offsetLeft})},g.pt.tips=function(){var a=this,b=a.config,e=a.layero,f=[e.outerWidth(),e.outerHeight()],g=c(b.follow);g[0]||(g=c("body"));var i={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},j=e.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||j.remove(),i.autoLeft=function(){i.left+f[0]-d.width()>0?(i.tipLeft=i.left+i.width-f[0],j.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left-f[0]-10,i.tipTop=i.top,j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],i.where[k-1](),1===k?i.top-(d.scrollTop()+f[1]+16)<0&&i.where[2]():2===k?d.width()-(i.left+i.width+f[0]+16)>0||i.where[3]():3===k?i.top-d.scrollTop()+i.height+f[1]+16-d.height()>0&&i.where[0]():4===k&&f[0]+16-i.left>0&&i.where[1](),e.find("."+h[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),e.css({left:i.tipLeft-(b.fix?d.scrollLeft():0),top:i.tipTop-(b.fix?d.scrollTop():0)})},g.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){var a=e.layero,b=parseInt(a.css("margin-left")),c=parseInt(e.move.css("left"));0===b||(c-=b),"fixed"!==a.css("position")&&(c-=a.parent().offset().left,e.setY=0),a.css({left:c,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layero.find(b.move);return b.move&&f.attr("move","ok"),f.css({cursor:b.move?"move":"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layero=c(this).parents("."+h[0]);var f=e.layero.offset().left,g=e.layero.offset().top,i=e.layero.outerWidth()-6,j=e.layero.outerHeight()-6;c("#layui-layer-moves")[0]||c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+g+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#layui-layer-moves"),b.moveType&&e.move.css({visibility:"hidden"}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layero.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth(),h=e.setY;0>c&&(c=0),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()+e.setY&&(f=d.height()-e.move.outerHeight()+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=f=g=h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove(),b.moveEnd&&b.moveEnd()),e.ismove=!1}catch(a){e.ismove=!1}}),a},g.pt.callback=function(){function a(){var a=g.cancel&&g.cancel(b.index,d);a===!1||f.close(b.index)}var b=this,d=b.layero,g=b.config;b.openLayer(),g.success&&(2==g.type?d.find("iframe").on("load",function(){g.success(d,b.index)}):g.success(d,b.index)),f.ie6&&b.IE6(d),d.find("."+h[6]).children("a").on("click",function(){var a=c(this).index();if(0===a)g.yes?g.yes(b.index,d):g.btn1?g.btn1(b.index,d):f.close(b.index);else{var e=g["btn"+(a+1)]&&g["btn"+(a+1)](b.index,d);e===!1||f.close(b.index)}}),d.find("."+h[7]).on("click",a),g.shadeClose&&c("#layui-layer-shade"+b.index).on("click",function(){f.close(b.index)}),d.find(".layui-layer-min").on("click",function(){var a=g.min&&g.min(d);a===!1||f.min(b.index,g)}),d.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(f.restore(b.index),g.restore&&g.restore(d)):(f.full(b.index,g),setTimeout(function(){g.full&&g.full(d)},100))}),g.end&&(e.end[b.index]=g.end)},e.reselect=function(){c.each(c("select"),function(a,b){var d=c(this);d.parents("."+h[0])[0]||1==d.attr("layer")&&c("."+h[0]).length<1&&d.removeAttr("layer").show(),d=null})},g.pt.IE6=function(a){function b(){a.css({top:f+(e.config.fix?d.scrollTop():0)})}var e=this,f=a.offset().top;b(),d.scroll(b),c("select").each(function(a,b){var d=c(this);d.parents("."+h[0])[0]||"none"===d.css("display")||d.attr({layer:"1"}).hide(),d=null})},g.pt.openLayer=function(){var a=this;f.zIndex=a.config.zIndex,f.setTop=function(a){var b=function(){f.zIndex++,a.css("z-index",f.zIndex+1)};return f.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),f.zIndex}},e.record=function(a){var b=[a.width(),a.height(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},e.rescollbar=function(a){h.html.attr("layer-full")==a&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},a.layer=f,f.getChildFrame=function(a,b){return b=b||c("."+h[4]).attr("times"),c("#"+h[0]+b).find("iframe").contents().find(a)},f.getFrameIndex=function(a){return c("#"+a).parents("."+h[4]).attr("times")},f.iframeAuto=function(a){if(a){var b=f.getChildFrame("html",a).outerHeight(),d=c("#"+h[0]+a),e=d.find(h[1]).outerHeight()||0,g=d.find("."+h[6]).outerHeight()||0;d.css({height:b+e+g}),d.find("iframe").css({height:b})}},f.iframeSrc=function(a,b){c("#"+h[0]+a).find("iframe").attr("src",b)},f.style=function(a,b){var d=c("#"+h[0]+a),f=d.attr("type"),g=d.find(h[1]).outerHeight()||0,i=d.find("."+h[6]).outerHeight()||0;(f===e.type[1]||f===e.type[2])&&(d.css(b),f===e.type[2]&&d.find("iframe").css({height:parseFloat(b.height)-g-i}))},f.min=function(a,b){var d=c("#"+h[0]+a),g=d.find(h[1]).outerHeight()||0;e.record(d),f.style(a,{width:180,height:g,overflow:"hidden"}),d.find(".layui-layer-min").hide(),"page"===d.attr("type")&&d.find(h[4]).hide(),e.rescollbar(a)},f.restore=function(a){var b=c("#"+h[0]+a),d=b.attr("area").split(",");b.attr("type");f.style(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3]),overflow:"visible"}),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(h[4]).show(),e.rescollbar(a)},f.full=function(a){var b,g=c("#"+h[0]+a);e.record(g),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===g.css("position");f.style(a,{top:b?0:d.scrollTop(),left:b?0:d.scrollLeft(),width:d.width(),height:d.height()}),g.find(".layui-layer-min").hide()},100)},f.title=function(a,b){var d=c("#"+h[0]+(b||f.index)).find(h[1]);d.html(a)},f.close=function(a){var b=c("#"+h[0]+a),d=b.attr("type");if(b[0]){if(d===e.type[1]&&"object"===b.attr("conType")){b.children(":not(."+h[5]+")").remove();for(var g=0;2>g;g++)b.find(".layui-layer-wrap").unwrap().hide()}else{if(d===e.type[2])try{var i=c("#"+h[4]+a)[0];i.contentWindow.document.write(""),i.contentWindow.close(),b.find("."+h[5])[0].removeChild(i)}catch(j){}b[0].innerHTML="",b.remove()}c("#layui-layer-moves, #layui-layer-shade"+a).remove(),f.ie6&&e.reselect(),e.rescollbar(a),c(document).off("keydown",e.enter),"function"==typeof e.end[a]&&e.end[a](),delete e.end[a]}},f.closeAll=function(a){c.each(c("."+h[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&f.close(b.attr("times")),d=null})};var i=f.cache||{},j=function(a){return i.skin?" "+i.skin+" "+i.skin+"-"+a:""};f.prompt=function(a,b){a=a||{},"function"==typeof a&&(b=a);var d,e=2==a.formType?'<textarea class="layui-layer-input">'+(a.value||"")+"</textarea>":function(){return'<input type="'+(1==a.formType?"password":"text")+'" class="layui-layer-input" value="'+(a.value||"")+'">'}();return f.open(c.extend({btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:e,skin:"layui-layer-prompt"+j("prompt"),success:function(a){d=a.find(".layui-layer-input"),d.focus()},yes:function(c){var e=d.val();""===e?d.focus():e.length>(a.maxlength||500)?f.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(a.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",d,{tips:1}):b&&b(e,c,d)}},a))},f.tab=function(a){a=a||{};var b=a.tab||{};return f.open(c.extend({type:1,skin:"layui-layer-tab"+j("tab"),title:function(){var a=b.length,c=1,d="";if(a>0)for(d='<span class="layui-layer-tabnow">'+b[0].title+"</span>";a>c;c++)d+="<span>"+b[c].title+"</span>";return d}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=b.length,c=1,d="";if(a>0)for(d='<li class="layui-layer-tabli xubox_tab_layer">'+(b[0].content||"no content")+"</li>";a>c;c++)d+='<li class="layui-layer-tabli">'+(b[c].content||"no  content")+"</li>";return d}()+"</ul>",success:function(b){var d=b.find(".layui-layer-title").children(),e=b.find(".layui-layer-tabmain").children();d.on("mousedown",function(b){b.stopPropagation?b.stopPropagation():b.cancelBubble=!0;var d=c(this),f=d.index();d.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),e.eq(f).show().siblings().hide(),"function"==typeof a.change&&a.change(f)})}},a))},f.photos=function(b,d,e){function g(a,b,c){var d=new Image;return d.src=a,d.complete?b(d):(d.onload=function(){d.onload=null,b(d)},void(d.onerror=function(a){d.onerror=null,c(a)}))}var h={};if(b=b||{},b.photos){var i=b.photos.constructor===Object,k=i?b.photos:{},l=k.data||[],m=k.start||0;if(h.imgIndex=(0|m)+1,b.img=b.img||"img",i){if(0===l.length)return f.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var n=c(b.photos),o=function(){l=[],n.find(b.img).each(function(a){var b=c(this);b.attr("layer-index",a),l.push({alt:b.attr("alt"),pid:b.attr("layer-pid"),src:b.attr("layer-src")||b.attr("src"),thumb:b.attr("src")})})};if(o(),0===l.length)return;if(d||n.on("click",b.img,function(){var a=c(this),d=a.attr("layer-index");f.photos(c.extend(b,{photos:{start:d,data:l,tab:b.tab},full:b.full}),!0),o()}),!d)return}h.imgprev=function(a){h.imgIndex--,h.imgIndex<1&&(h.imgIndex=l.length),h.tabimg(a)},h.imgnext=function(a,b){h.imgIndex++,h.imgIndex>l.length&&(h.imgIndex=1,b)||h.tabimg(a)},h.keyup=function(a){if(!h.end){var b=a.keyCode;a.preventDefault(),37===b?h.imgprev(!0):39===b?h.imgnext(!0):27===b&&f.close(h.index)}},h.tabimg=function(a){l.length<=1||(k.start=h.imgIndex-1,f.close(h.index),f.photos(b,!0,a))},h.event=function(){h.bigimg.hover(function(){h.imgsee.show()},function(){h.imgsee.hide()}),h.bigimg.find(".layui-layer-imgprev").on("click",function(a){a.preventDefault(),h.imgprev()}),h.bigimg.find(".layui-layer-imgnext").on("click",function(a){a.preventDefault(),h.imgnext()}),c(document).on("keyup",h.keyup)},h.loadi=f.load(1,{shade:"shade"in b?!1:.9,scrollbar:!1}),g(l[m].src,function(d){f.close(h.loadi),h.index=f.open(c.extend({type:1,area:function(){var e=[d.width,d.height],f=[c(a).width()-50,c(a).height()-50];return!b.full&&e[0]>f[0]&&(e[0]=f[0],e[1]=e[0]*d.height/d.width),[e[0]+"px",e[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,shift:5*Math.random()|0,skin:"layui-layer-photos"+j("photos"),content:'<div class="layui-layer-phimg"><img src="'+l[m].src+'" alt="'+(l[m].alt||"")+'" layer-pid="'+l[m].pid+'"><div class="layui-layer-imgsee">'+(l.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(e?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(l[m].alt||"")+"</a><em>"+h.imgIndex+"/"+l.length+"</em></span></div></div></div>",success:function(a,c){h.bigimg=a.find(".layui-layer-phimg"),h.imgsee=a.find(".layui-layer-imguide,.layui-layer-imgbar"),h.event(a),b.tab&&b.tab(l[m],a)},end:function(){h.end=!0,c(document).off("keyup",h.keyup)}},b))},function(){f.close(h.loadi),f.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){l.length>1&&h.imgnext(!0,!0)}})})}},e.run=function(){c=jQuery,d=c(a),h.html=c("html"),f.open=function(a){var b=new g(a);return b.index}},"function"==typeof define?define(function(){return e.run(),f}):function(){e.run(),f.use("skin/layer.css")}()}(window);
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));
/*****************************************************************
 * jQuery Validate扩展验证方法  (linjq)    
 * Modified by guojunhui
 * Date modified:01/01/2017  
*****************************************************************/
$(function(){
    // 判断整数value是否等于0 
    jQuery.validator.addMethod("isIntEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value==0;       
    }, "整数必须为0"); 
      
    // 判断整数value是否大于0
    jQuery.validator.addMethod("isIntGtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>0;       
    }, "整数必须大于0"); 
      
    // 判断整数value是否大于或等于0
    jQuery.validator.addMethod("isIntGteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value>=0;       
    }, "整数必须大于或等于0");   
    
    // 判断整数value是否不等于0 
    jQuery.validator.addMethod("isIntNEqZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value!=0;       
    }, "整数必须不等于0");  
    
    // 判断整数value是否小于0 
    jQuery.validator.addMethod("isIntLtZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<0;       
    }, "整数必须小于0");  
    
    // 判断整数value是否小于或等于0 
    jQuery.validator.addMethod("isIntLteZero", function(value, element) { 
         value=parseInt(value);      
         return this.optional(element) || value<=0;       
    }, "整数必须小于或等于0");  
    
    // 判断浮点数value是否等于0 
    jQuery.validator.addMethod("isFloatEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value==0;       
    }, "浮点数必须为0"); 
      
    // 判断浮点数value是否大于0
    jQuery.validator.addMethod("isFloatGtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>0;       
    }, "浮点数必须大于0"); 
      
    // 判断浮点数value是否大于或等于0
    jQuery.validator.addMethod("isFloatGteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value>=0;       
    }, "浮点数必须大于或等于0");   
    
    // 判断浮点数value是否不等于0 
    jQuery.validator.addMethod("isFloatNEqZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value!=0;       
    }, "浮点数必须不等于0");  
    
    // 判断浮点数value是否小于0 
    jQuery.validator.addMethod("isFloatLtZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<0;       
    }, "浮点数必须小于0");  
    
    // 判断浮点数value是否小于或等于0 
    jQuery.validator.addMethod("isFloatLteZero", function(value, element) { 
         value=parseFloat(value);      
         return this.optional(element) || value<=0;       
    }, "浮点数必须小于或等于0");  
    
    // 判断浮点型  
    jQuery.validator.addMethod("isFloat", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "只能包含数字、小数点等字符"); 
     
    // 匹配integer
    jQuery.validator.addMethod("isInteger", function(value, element) {       
         return this.optional(element) || (/^[-\+]?\d+$/.test(value) && parseInt(value)>=0);       
    }, "匹配integer");  
     
    // 判断数值类型，包括整数和浮点数
    jQuery.validator.addMethod("isNumber", function(value, element) {       
         return this.optional(element) || /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);       
    }, "匹配数值类型，包括整数和浮点数");  
    
    // 只能输入[0-9]数字
    jQuery.validator.addMethod("isDigits", function(value, element) {       
         return this.optional(element) || /^\d+$/.test(value);       
    }, "只能输入0-9数字");  
    
    // 判断中文字符 
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "只能包含中文字符。");   
 
    // 判断英文字符 
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "只能包含英文字符。");   
 
     // 手机号码验证    
    jQuery.validator.addMethod("isMobile", function(value, element) {    
      var length = value.length;    
      return this.optional(element) || (length == 11 && /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value));    
    }, "手机号码格式不正确。");

    // 电话号码验证    
    jQuery.validator.addMethod("isPhone", function(value, element) {    
      var tel = /^(\d{3,4}-?)?\d{7,9}$/g;    
      return this.optional(element) || (tel.test(value));    
    }, "电话号码格式不正确");

    // 联系电话(手机/电话皆可)验证   
    jQuery.validator.addMethod("isTel", function(value,element) {   
        var length = value.length;   
        var mobile = /^(((13[0-9]{1})|(15[0-35-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var tel = /^(\d{3,4}-?)?\d{7,9}$/g;       
        return this.optional(element) || tel.test(value) || (length==11 && mobile.test(value));   
    }, "请输入正确手机号码或电话号码"); 
 
     // 匹配qq      
    jQuery.validator.addMethod("isQq", function(value, element) {       
         return this.optional(element) || /^[1-9]\d{4,12}$/;       
    }, "QQ号码不合法");   
 
     // 邮政编码验证    
    jQuery.validator.addMethod("isZipCode", function(value, element) {    
      var zip = /^[0-9]{6}$/;    
      return this.optional(element) || (zip.test(value));    
    }, "邮政编码不正确");  
    
    // 匹配密码，以字母开头，长度在6-16之间，只能包含字符、数字和下划线。      
    jQuery.validator.addMethod("isPwd", function(value, element) {       
         return this.optional(element) || /^[a-zA-Z]\\w{6,16}$/.test(value);       
    }, "以字母开头，长度在6-12之间，只能包含字符、数字和下划线。");  
    
    // 身份证号码验证
    jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
      //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
      return this.optional(element) || isIdCardNo(value);    
    }, "身份证号码不正确"); 

    // IP地址验证   
    jQuery.validator.addMethod("ip", function(value, element) {    
      return this.optional(element) || /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(value);    
    }, "请填写正确的IP地址");
   
    // 字符验证，只能包含中文、英文、数字、下划线等字符。    
    jQuery.validator.addMethod("stringCheck", function(value, element) {       
         return this.optional(element) || /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);       
    }, "只能包含中文、英文、数字、下划线等字符");   
   
    // 匹配english  
    jQuery.validator.addMethod("isEnglish", function(value, element) {       
         return this.optional(element) || /^[A-Za-z]+$/.test(value);       
    }, "必须输入英文");   
    
    // 匹配汉字  
    jQuery.validator.addMethod("isChinese", function(value, element) {       
         return this.optional(element) || /^[\u4e00-\u9fa5]+$/.test(value);       
    }, "只能输入汉字");   
    
    // 匹配中文(包括汉字和字符) 
    jQuery.validator.addMethod("isChineseChar", function(value, element) {       
         return this.optional(element) || /^[\u0391-\uFFE5]+$/.test(value);       
    }, "匹配中文(包括汉字和字符) "); 
      
    // 判断是否为合法字符(a-zA-Z0-9-_)
    jQuery.validator.addMethod("isRightfulString", function(value, element) {       
         return this.optional(element) || /^[A-Za-z0-9_-]+$/.test(value);       
    }, "判断是否为合法字符(a-zA-Z0-9-_)");   
    
    // 判断是否包含中英文特殊字符，除英文"-_"字符外
    jQuery.validator.addMethod("isContainsSpecialChar", function(value, element) {  
         var reg = RegExp(/[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/);   
         return this.optional(element) || !reg.test(value);       
    }, "含有中英文特殊字符");
	
	//车牌号校验
	jQuery.validator.addMethod("isPlateNo", function(value, element) {
		var reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
		return this.optional(element) || (tel.test(value)); 
	},"请输入正确车牌号");
});
//身份证号码的验证规则
function isIdCardNo(num){ 
　   //if (isNaN(num)) {alert("输入的不是数字！"); return false;} 
　　 var len = num.length, re; 
　　 if (len == 15) 
　　 re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/); 
　　 else if (len == 18) 
　　 re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/); 
　　 else {
		//alert("输入的数字位数不对。"); 
		return false;
	} 
　　 var a = num.match(re); 
　　 if (a != null) 
　　 { 
　　 if (len==15) 
　　 { 
　　 var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 else 
　　 { 
　　 var D = new Date(a[3]+"/"+a[4]+"/"+a[5]); 
　　 var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5]; 
　　 } 
　　 if (!B) {
		//alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); 
		return false;
	} 
　　 } 
　　 if(!re.test(num)){
		//alert("身份证最后一位只能是数字和字母。");
		return false;
	}
　　 return true; 
}
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
$.extend($.validator.messages, {
	required: "这是必填字段",
	remote: "请修正此字段",
	email: "请输入有效的电子邮件地址",
	url: "请输入有效的网址",
	date: "请输入有效的日期",
	dateISO: "请输入有效的日期 (YYYY-MM-DD)",
	number: "请输入有效的数字",
	digits: "只能输入数字",
	creditcard: "请输入有效的信用卡号码",
	equalTo: "你的输入不相同",
	extension: "请输入有效的后缀",
	maxlength: $.validator.format("最多可以输入 {0} 个字符"),
	minlength: $.validator.format("最少要输入 {0} 个字符"),
	rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
	range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
	max: $.validator.format("请输入不大于 {0} 的数值"),
	min: $.validator.format("请输入不小于 {0} 的数值")
});

}));
/*-----------H-ui前端框架-------------
* H-ui.min.js v3.0.2
* http://www.h-ui.net/
* Created & Modified by guojunhui
* Date modified 2017-01.19
*
* Copyright 2013-2017 北京颖杰联创科技有限公司 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
!function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));document.getElementsByTagName("head")[0].appendChild(msViewportStyle)}}();function stopDefault(e){if(e&&e.preventDefault){e.preventDefault()}else{window.event.returnValue=false}return false}!(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports==="object"){module.exports=factory(require("jquery"))}else{factory(jQuery)}}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(arguments.length>1&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date();t.setMilliseconds(t.getMilliseconds()+days*86400000)}return(document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join(""))}var result=key?undefined:{},cookies=document.cookie?document.cookie.split("; "):[],i=0,l=cookies.length;for(;i<l;i++){var parts=cookies[i].split("="),name=decode(parts.shift()),cookie=parts.join("=");if(key===name){result=read(cookie,value);break}if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie}}return result};config.defaults={};$.removeCookie=function(key,options){$.cookie(key,"",$.extend({},options,{expires:-1}));return !$.cookie(key)}}));(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{factory((typeof(jQuery)!="undefined")?jQuery:window.Zepto)}}(function($){var feature={};feature.fileapi=$("<input type='file'/>").get(0).files!==undefined;feature.formdata=window.FormData!==undefined;var hasProp=!!$.fn.prop;$.fn.attr2=function(){if(!hasProp){return this.attr.apply(this,arguments)}var val=this.prop.apply(this,arguments);if((val&&val.jquery)||typeof val==="string"){return val}return this.attr.apply(this,arguments)};$.fn.ajaxSubmit=function(options){if(!this.length){log("ajaxSubmit: skipping submit process - no element selected");return this}var method,action,url,$form=this;if(typeof options=="function"){options={success:options}}else{if(options===undefined){options={}}}method=options.type||this.attr2("method");action=options.url||this.attr2("action");url=(typeof action==="string")?$.trim(action):"";url=url||window.location.href||"";if(url){url=(url.match(/^([^#]+)/)||[])[1]}options=$.extend(true,{url:url,success:$.ajaxSettings.success,type:method||$.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},options);var veto={};this.trigger("form-pre-serialize",[this,options,veto]);if(veto.veto){log("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){log("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var traditional=options.traditional;if(traditional===undefined){traditional=$.ajaxSettings.traditional}var elements=[];var qx,a=this.formToArray(options.semantic,elements);if(options.data){options.extraData=options.data;qx=$.param(options.data,traditional)}if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){log("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[a,this,options,veto]);if(veto.veto){log("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var q=$.param(a,traditional);if(qx){q=(q?(q+"&"+qx):qx)}if(options.type.toUpperCase()=="GET"){options.url+=(options.url.indexOf("?")>=0?"&":"?")+q;options.data=null}else{options.data=q}var callbacks=[];if(options.resetForm){callbacks.push(function(){$form.resetForm()})}if(options.clearForm){callbacks.push(function(){$form.clearForm(options.includeHidden)})}if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){var fn=options.replaceTarget?"replaceWith":"html";$(options.target)[fn](data).each(oldSuccess,arguments)})}else{if(options.success){callbacks.push(options.success)}}options.success=function(data,status,xhr){var context=options.context||this;for(var i=0,max=callbacks.length;i<max;i++){callbacks[i].apply(context,[data,status,xhr||$form,$form])}};if(options.error){var oldError=options.error;options.error=function(xhr,status,error){var context=options.context||this;oldError.apply(context,[xhr,status,error,$form])}}if(options.complete){var oldComplete=options.complete;options.complete=function(xhr,status){var context=options.context||this;oldComplete.apply(context,[xhr,status,$form])}}var fileInputs=$("input[type=file]:enabled",this).filter(function(){return $(this).val()!==""});var hasFileInputs=fileInputs.length>0;var mp="multipart/form-data";var multipart=($form.attr("enctype")==mp||$form.attr("encoding")==mp);var fileAPI=feature.fileapi&&feature.formdata;log("fileAPI :"+fileAPI);var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;var jqxhr;if(options.iframe!==false&&(options.iframe||shouldUseFrame)){if(options.closeKeepAlive){$.get(options.closeKeepAlive,function(){jqxhr=fileUploadIframe(a)})}else{jqxhr=fileUploadIframe(a)}}else{if((hasFileInputs||multipart)&&fileAPI){jqxhr=fileUploadXhr(a)}else{jqxhr=$.ajax(options)}}$form.removeData("jqxhr").data("jqxhr",jqxhr);for(var k=0;k<elements.length;k++){elements[k]=null}this.trigger("form-submit-notify",[this,options]);return this;function deepSerialize(extraData){var serialized=$.param(extraData,options.traditional).split("&");var len=serialized.length;var result=[];var i,part;for(i=0;i<len;i++){serialized[i]=serialized[i].replace(/\+/g," ");part=serialized[i].split("=");result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])])}return result}function fileUploadXhr(a){var formdata=new FormData();for(var i=0;i<a.length;i++){formdata.append(a[i].name,a[i].value)}if(options.extraData){var serializedData=deepSerialize(options.extraData);for(i=0;i<serializedData.length;i++){if(serializedData[i]){formdata.append(serializedData[i][0],serializedData[i][1])}}}options.data=null;var s=$.extend(true,{},$.ajaxSettings,options,{contentType:false,processData:false,cache:false,type:method||"POST"});if(options.uploadProgress){s.xhr=function(){var xhr=$.ajaxSettings.xhr();if(xhr.upload){xhr.upload.addEventListener("progress",function(event){var percent=0;var position=event.loaded||event.position;var total=event.total;if(event.lengthComputable){percent=Math.ceil(position/total*100)}options.uploadProgress(event,position,total,percent)},false)}return xhr}}s.data=null;var beforeSend=s.beforeSend;s.beforeSend=function(xhr,o){if(options.formData){o.data=options.formData}else{o.data=formdata}if(beforeSend){beforeSend.call(this,xhr,o)}};return $.ajax(s)}function fileUploadIframe(a){var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;var deferred=$.Deferred();deferred.abort=function(status){xhr.abort(status)};if(a){for(i=0;i<elements.length;i++){el=$(elements[i]);if(hasProp){el.prop("disabled",false)}else{el.removeAttr("disabled")}}}s=$.extend(true,{},$.ajaxSettings,options);s.context=s.context||s;id="jqFormIO"+(new Date().getTime());if(s.iframeTarget){$io=$(s.iframeTarget);n=$io.attr2("name");if(!n){$io.attr2("name",id)}else{id=n}}else{$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />');$io.css({position:"absolute",top:"-1000px",left:"-1000px"})}io=$io[0];xhr={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(status){var e=(status==="timeout"?"timeout":"aborted");log("aborting upload... "+e);this.aborted=1;try{if(io.contentWindow.document.execCommand){io.contentWindow.document.execCommand("Stop")}}catch(ignore){}$io.attr("src",s.iframeSrc);xhr.error=e;if(s.error){s.error.call(s.context,xhr,e,status)}if(g){$.event.trigger("ajaxError",[xhr,s,e])}if(s.complete){s.complete.call(s.context,xhr,e)}}};g=s.global;if(g&&0===$.active++){$.event.trigger("ajaxStart")}if(g){$.event.trigger("ajaxSend",[xhr,s])}if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){if(s.global){$.active--}deferred.reject();return deferred}if(xhr.aborted){deferred.reject();return deferred}sub=form.clk;if(sub){n=sub.name;if(n&&!sub.disabled){s.extraData=s.extraData||{};s.extraData[n]=sub.value;if(sub.type=="image"){s.extraData[n+".x"]=form.clk_x;s.extraData[n+".y"]=form.clk_y}}}var CLIENT_TIMEOUT_ABORT=1;var SERVER_ABORT=2;function getDoc(frame){var doc=null;try{if(frame.contentWindow){doc=frame.contentWindow.document}}catch(err){log("cannot get iframe.contentWindow document: "+err)}if(doc){return doc}try{doc=frame.contentDocument?frame.contentDocument:frame.document}catch(err){log("cannot get iframe.contentDocument: "+err);doc=frame.document}return doc}var csrf_token=$("meta[name=csrf-token]").attr("content");var csrf_param=$("meta[name=csrf-param]").attr("content");if(csrf_param&&csrf_token){s.extraData=s.extraData||{};s.extraData[csrf_param]=csrf_token}function doSubmit(){var t=$form.attr2("target"),a=$form.attr2("action"),mp="multipart/form-data",et=$form.attr("enctype")||$form.attr("encoding")||mp;form.setAttribute("target",id);if(!method||/post/i.test(method)){form.setAttribute("method","POST")}if(a!=s.url){form.setAttribute("action",s.url)}if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){$form.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(s.timeout){timeoutHandle=setTimeout(function(){timedOut=true;cb(CLIENT_TIMEOUT_ABORT)},s.timeout)}function checkState(){try{var state=getDoc(io).readyState;log("state = "+state);if(state&&state.toLowerCase()=="uninitialized"){setTimeout(checkState,50)}}catch(e){log("Server abort: ",e," (",e.name,")");cb(SERVER_ABORT);if(timeoutHandle){clearTimeout(timeoutHandle)}timeoutHandle=undefined}}var extraInputs=[];try{if(s.extraData){for(var n in s.extraData){if(s.extraData.hasOwnProperty(n)){if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty("name")&&s.extraData[n].hasOwnProperty("value")){extraInputs.push($('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value).appendTo(form)[0])}else{extraInputs.push($('<input type="hidden" name="'+n+'">').val(s.extraData[n]).appendTo(form)[0])}}}}if(!s.iframeTarget){$io.appendTo("body")}if(io.attachEvent){io.attachEvent("onload",cb)}else{io.addEventListener("load",cb,false)}setTimeout(checkState,15);try{form.submit()}catch(err){var submitFn=document.createElement("form").submit;submitFn.apply(form)}}finally{form.setAttribute("action",a);form.setAttribute("enctype",et);if(t){form.setAttribute("target",t)}else{$form.removeAttr("target")}$(extraInputs).remove()}}if(s.forceSync){doSubmit()}else{setTimeout(doSubmit,10)}var data,doc,domCheckCount=50,callbackProcessed;function cb(e){if(xhr.aborted||callbackProcessed){return}doc=getDoc(io);if(!doc){log("cannot access response document");e=SERVER_ABORT}if(e===CLIENT_TIMEOUT_ABORT&&xhr){xhr.abort("timeout");deferred.reject(xhr,"timeout");return}else{if(e==SERVER_ABORT&&xhr){xhr.abort("server abort");deferred.reject(xhr,"error","server abort");return}}if(!doc||doc.location.href==s.iframeSrc){if(!timedOut){return}}if(io.detachEvent){io.detachEvent("onload",cb)}else{io.removeEventListener("load",cb,false)}var status="success",errMsg;try{if(timedOut){throw"timeout"}var isXml=s.dataType=="xml"||doc.XMLDocument||$.isXMLDoc(doc);log("isXml="+isXml);if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){if(--domCheckCount){log("requeing onLoad callback, DOM not available");setTimeout(cb,250);return}}var docRoot=doc.body?doc.body:doc.documentElement;xhr.responseText=docRoot?docRoot.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;if(isXml){s.dataType="xml"}xhr.getResponseHeader=function(header){var headers={"content-type":s.dataType};return headers[header.toLowerCase()]};if(docRoot){xhr.status=Number(docRoot.getAttribute("status"))||xhr.status;xhr.statusText=docRoot.getAttribute("statusText")||xhr.statusText}var dt=(s.dataType||"").toLowerCase();var scr=/(json|script|text)/.test(dt);if(scr||s.textarea){var ta=doc.getElementsByTagName("textarea")[0];if(ta){xhr.responseText=ta.value;xhr.status=Number(ta.getAttribute("status"))||xhr.status;xhr.statusText=ta.getAttribute("statusText")||xhr.statusText}else{if(scr){var pre=doc.getElementsByTagName("pre")[0];var b=doc.getElementsByTagName("body")[0];if(pre){xhr.responseText=pre.textContent?pre.textContent:pre.innerText}else{if(b){xhr.responseText=b.textContent?b.textContent:b.innerText}}}}}else{if(dt=="xml"&&!xhr.responseXML&&xhr.responseText){xhr.responseXML=toXml(xhr.responseText)}}try{data=httpData(xhr,dt,s)}catch(err){status="parsererror";xhr.error=errMsg=(err||status)}}catch(err){log("error caught: ",err);status="error";xhr.error=errMsg=(err||status)}if(xhr.aborted){log("upload aborted");status=null}if(xhr.status){status=(xhr.status>=200&&xhr.status<300||xhr.status===304)?"success":"error"}if(status==="success"){if(s.success){s.success.call(s.context,data,"success",xhr)}deferred.resolve(xhr.responseText,"success",xhr);if(g){$.event.trigger("ajaxSuccess",[xhr,s])}}else{if(status){if(errMsg===undefined){errMsg=xhr.statusText}if(s.error){s.error.call(s.context,xhr,status,errMsg)}deferred.reject(xhr,"error",errMsg);if(g){$.event.trigger("ajaxError",[xhr,s,errMsg])}}}if(g){$.event.trigger("ajaxComplete",[xhr,s])}if(g&&!--$.active){$.event.trigger("ajaxStop")}if(s.complete){s.complete.call(s.context,xhr,status)}callbackProcessed=true;if(s.timeout){clearTimeout(timeoutHandle)}setTimeout(function(){if(!s.iframeTarget){$io.remove()}else{$io.attr("src",s.iframeSrc)}xhr.responseXML=null},100)}var toXml=$.parseXML||function(s,doc){if(window.ActiveXObject){doc=new ActiveXObject("Microsoft.XMLDOM");doc.async="false";doc.loadXML(s)}else{doc=(new DOMParser()).parseFromString(s,"text/xml")}return(doc&&doc.documentElement&&doc.documentElement.nodeName!="parsererror")?doc:null};var parseJSON=$.parseJSON||function(s){return window["eval"]("("+s+")")};var httpData=function(xhr,type,s){var ct=xhr.getResponseHeader("content-type")||"",xml=type==="xml"||!type&&ct.indexOf("xml")>=0,data=xml?xhr.responseXML:xhr.responseText;if(xml&&data.documentElement.nodeName==="parsererror"){if($.error){$.error("parsererror")}}if(s&&s.dataFilter){data=s.dataFilter(data,type)}if(typeof data==="string"){if(type==="json"||!type&&ct.indexOf("json")>=0){data=parseJSON(data)}else{if(type==="script"||!type&&ct.indexOf("javascript")>=0){$.globalEval(data)}}}return data};return deferred}};$.fn.ajaxForm=function(options){options=options||{};options.delegation=options.delegation&&$.isFunction($.fn.on);if(!options.delegation&&this.length===0){var o={s:this.selector,c:this.context};if(!$.isReady&&o.s){log("DOM not ready, queuing ajaxForm");$(function(){$(o.s,o.c).ajaxForm(options)});return this}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this}if(options.delegation){$(document).off("submit.form-plugin",this.selector,doAjaxSubmit).off("click.form-plugin",this.selector,captureSubmittingElement).on("submit.form-plugin",this.selector,options,doAjaxSubmit).on("click.form-plugin",this.selector,options,captureSubmittingElement);return this}return this.ajaxFormUnbind().on("submit.form-plugin",options,doAjaxSubmit).on("click.form-plugin",options,captureSubmittingElement)};function doAjaxSubmit(e){var options=e.data;if(!e.isDefaultPrevented()){e.preventDefault();$(e.target).ajaxSubmit(options)}}function captureSubmittingElement(e){var target=e.target;var $el=$(target);if(!($el.is("[type=submit],[type=image]"))){var t=$el.closest("[type=submit]");if(t.length===0){return}target=t[0]}var form=this;form.clk=target;if(target.type=="image"){if(e.offsetX!==undefined){form.clk_x=e.offsetX;form.clk_y=e.offsetY}else{if(typeof $.fn.offset=="function"){var offset=$el.offset();form.clk_x=e.pageX-offset.left;form.clk_y=e.pageY-offset.top}else{form.clk_x=e.pageX-target.offsetLeft;form.clk_y=e.pageY-target.offsetTop}}}setTimeout(function(){form.clk=form.clk_x=form.clk_y=null},100)}$.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};$.fn.formToArray=function(semantic,elements){var a=[];if(this.length===0){return a}var form=this[0];var formId=this.attr("id");var els=semantic?form.getElementsByTagName("*"):form.elements;var els2;if(els&&!/MSIE [678]/.test(navigator.userAgent)){els=$(els).get()}if(formId){els2=$(':input[form="'+formId+'"]').get();if(els2.length){els=(els||[]).concat(els2)}}if(!els||!els.length){return a}var i,j,n,v,el,max,jmax;for(i=0,max=els.length;i<max;i++){el=els[i];n=el.name;if(!n||el.disabled){continue}if(semantic&&form.clk&&el.type=="image"){if(form.clk==el){a.push({name:n,value:$(el).val(),type:el.type});a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y})}continue}v=$.fieldValue(el,true);if(v&&v.constructor==Array){if(elements){elements.push(el)}for(j=0,jmax=v.length;j<jmax;j++){a.push({name:n,value:v[j]})}}else{if(feature.fileapi&&el.type=="file"){if(elements){elements.push(el)}var files=el.files;if(files.length){for(j=0;j<files.length;j++){a.push({name:n,value:files[j],type:el.type})}}else{a.push({name:n,value:"",type:el.type})}}else{if(v!==null&&typeof v!="undefined"){if(elements){elements.push(el)}a.push({name:n,value:v,type:el.type,required:el.required})}}}}if(!semantic&&form.clk){var $input=$(form.clk),input=$input[0];n=input.name;if(n&&!input.disabled&&input.type=="image"){a.push({name:n,value:$input.val()});a.push({name:n+".x",value:form.clk_x},{name:n+".y",value:form.clk_y})}}return a};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic))};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n){return}var v=$.fieldValue(this,successful);if(v&&v.constructor==Array){for(var i=0,max=v.length;i<max;i++){a.push({name:n,value:v[i]})}}else{if(v!==null&&typeof v!="undefined"){a.push({name:this.name,value:v})}}});return $.param(a)};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=="undefined"||(v.constructor==Array&&!v.length)){continue}if(v.constructor==Array){$.merge(val,v)}else{val.push(v)}}return val};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(successful===undefined){successful=true}if(successful&&(!n||el.disabled||t=="reset"||t=="button"||(t=="checkbox"||t=="radio")&&!el.checked||(t=="submit"||t=="image")&&el.form&&el.form.clk!=el||tag=="select"&&el.selectedIndex==-1)){return null}if(tag=="select"){var index=el.selectedIndex;if(index<0){return null}var a=[],ops=el.options;var one=(t=="select-one");var max=(one?index+1:ops.length);for(var i=(one?index:0);i<max;i++){var op=ops[i];if(op.selected){var v=op.value;if(!v){v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value}if(one){return v}a.push(v)}}return a}return $(el).val()};$.fn.clearForm=function(includeHidden){return this.each(function(){$("input,select,textarea",this).clearFields(includeHidden)})};$.fn.clearFields=$.fn.clearInputs=function(includeHidden){var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(re.test(t)||tag=="textarea"){this.value=""}else{if(t=="checkbox"||t=="radio"){this.checked=false}else{if(tag=="select"){this.selectedIndex=-1}else{if(t=="file"){if(/MSIE/.test(navigator.userAgent)){$(this).replaceWith($(this).clone(true))}else{$(this).val("")}}else{if(includeHidden){if((includeHidden===true&&/hidden/.test(t))||(typeof includeHidden=="string"&&$(this).is(includeHidden))){this.value=""}}}}}}})};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||(typeof this.reset=="object"&&!this.reset.nodeType)){this.reset()}})};$.fn.enable=function(b){if(b===undefined){b=true}return this.each(function(){this.disabled=!b})};$.fn.selected=function(select){if(select===undefined){select=true}return this.each(function(){var t=this.type;if(t=="checkbox"||t=="radio"){this.checked=select}else{if(this.tagName.toLowerCase()=="option"){var $sel=$(this).parent("select");if(select&&$sel[0]&&$sel[0].type=="select-one"){$sel.find("option").selected(false)}this.selected=select}}})};$.fn.ajaxSubmit.debug=false;function log(){if(!$.fn.ajaxSubmit.debug){return}var msg="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(msg)}else{if(window.opera&&window.opera.postError){window.opera.postError(msg)}}}}));!(function($,window,document,undefined){var $window=$(window);$.fn.lazyload=function(options){var elements=this;var $container;var settings={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:window,data_attribute:"original",skip_invisible:true,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};function update(){var counter=0;elements.each(function(){var $this=$(this);if(settings.skip_invisible&&!$this.is(":visible")){return}if($.abovethetop(this,settings)||$.leftofbegin(this,settings)){}else{if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$this.trigger("appear");counter=0}else{if(++counter>settings.failure_limit){return false}}}})}if(options){if(undefined!==options.failurelimit){options.failure_limit=options.failurelimit;delete options.failurelimit}if(undefined!==options.effectspeed){options.effect_speed=options.effectspeed;delete options.effectspeed}$.extend(settings,options)}$container=(settings.container===undefined||settings.container===window)?$window:$(settings.container);if(0===settings.event.indexOf("scroll")){$container.on(settings.event,function(){return update()})}this.each(function(){var self=this;var $self=$(self);self.loaded=false;if($self.attr("src")===undefined||$self.attr("src")===false){if($self.is("img")){$self.attr("src",settings.placeholder)}}$self.one("appear",function(){if(!this.loaded){if(settings.appear){var elements_left=elements.length;settings.appear.call(self,elements_left,settings)}$("<img />").on("load",function(){var original=$self.attr("data-"+settings.data_attribute);$self.hide();if($self.is("img")){$self.attr("src",original)}else{$self.css("background-image","url('"+original+"')")}$self[settings.effect](settings.effect_speed);self.loaded=true;var temp=$.grep(elements,function(element){return !element.loaded});elements=$(temp);if(settings.load){var elements_left=elements.length;settings.load.call(self,elements_left,settings)}}).attr("src",$self.attr("data-"+settings.data_attribute))}});if(0!==settings.event.indexOf("scroll")){$self.on(settings.event,function(){if(!self.loaded){$self.trigger("appear")}})}});$window.on("resize",function(){update()});if((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)){$window.on("pageshow",function(event){if(event.originalEvent&&event.originalEvent.persisted){elements.each(function(){$(this).trigger("appear")})}})}$(document).ready(function(){update()});return this};$.belowthefold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=(window.innerHeight?window.innerHeight:$window.height())+$window.scrollTop()}else{fold=$(settings.container).offset().top+$(settings.container).height()}return fold<=$(element).offset().top-settings.threshold};$.rightoffold=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.width()+$window.scrollLeft()}else{fold=$(settings.container).offset().left+$(settings.container).width()}return fold<=$(element).offset().left-settings.threshold};$.abovethetop=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollTop()}else{fold=$(settings.container).offset().top}return fold>=$(element).offset().top+settings.threshold+$(element).height()};$.leftofbegin=function(element,settings){var fold;if(settings.container===undefined||settings.container===window){fold=$window.scrollLeft()}else{fold=$(settings.container).offset().left}return fold>=$(element).offset().left+settings.threshold+$(element).width()};$.inviewport=function(element,settings){return !$.rightoffold(element,settings)&&!$.leftofbegin(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings)};$.extend($.expr[":"],{"below-the-fold":function(a){return $.belowthefold(a,{threshold:0})},"above-the-top":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-screen":function(a){return $.rightoffold(a,{threshold:0})},"left-of-screen":function(a){return !$.rightoffold(a,{threshold:0})},"in-viewport":function(a){return $.inviewport(a,{threshold:0})},"above-the-fold":function(a){return !$.belowthefold(a,{threshold:0})},"right-of-fold":function(a){return $.rightoffold(a,{threshold:0})},"left-of-fold":function(a){return !$.rightoffold(a,{threshold:0})}})})(jQuery,window,document);(function(document,window,index){var responsiveNav=function(el,options){var computed=!!window.getComputedStyle;if(!computed){window.getComputedStyle=function(el){this.el=el;this.getPropertyValue=function(prop){var re=/(\-([a-z]){1})/g;if(prop==="float"){prop="styleFloat"}if(re.test(prop)){prop=prop.replace(re,function(){return arguments[2].toUpperCase()})}return el.currentStyle[prop]?el.currentStyle[prop]:null};return this}}var addEvent=function(el,evt,fn,bubble){if("addEventListener" in el){try{el.addEventListener(evt,fn,bubble)}catch(e){if(typeof fn==="object"&&fn.handleEvent){el.addEventListener(evt,function(e){fn.handleEvent.call(fn,e)},bubble)}else{throw e}}}else{if("attachEvent" in el){if(typeof fn==="object"&&fn.handleEvent){el.attachEvent("on"+evt,function(){fn.handleEvent.call(fn)})}else{el.attachEvent("on"+evt,fn)}}}},removeEvent=function(el,evt,fn,bubble){if("removeEventListener" in el){try{el.removeEventListener(evt,fn,bubble)}catch(e){if(typeof fn==="object"&&fn.handleEvent){el.removeEventListener(evt,function(e){fn.handleEvent.call(fn,e)},bubble)}else{throw e}}}else{if("detachEvent" in el){if(typeof fn==="object"&&fn.handleEvent){el.detachEvent("on"+evt,function(){fn.handleEvent.call(fn)})}else{el.detachEvent("on"+evt,fn)}}}},getChildren=function(e){if(e.children.length<1){throw new Error("The Nav container has no containing elements")}var children=[];for(var i=0;i<e.children.length;i++){if(e.children[i].nodeType===1){children.push(e.children[i])}}return children},setAttributes=function(el,attrs){for(var key in attrs){el.setAttribute(key,attrs[key])}},addClass=function(el,cls){if(el.className.indexOf(cls)!==0){el.className+=" "+cls;el.className=el.className.replace(/(^\s*)|(\s*$)/g,"")}},removeClass=function(el,cls){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");el.className=el.className.replace(reg," ").replace(/(^\s*)|(\s*$)/g,"")},forEach=function(array,callback,scope){for(var i=0;i<array.length;i++){callback.call(scope,i,array[i])}};var nav,opts,navToggle,styleElement=document.createElement("style"),htmlEl=document.documentElement,hasAnimFinished,isMobile,navOpen;var ResponsiveNav=function(el,options){var i;this.options={animate:true,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:false,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in options){this.options[i]=options[i]}addClass(htmlEl,this.options.jsClass);this.wrapperEl=el.replace("#","");if(document.getElementById(this.wrapperEl)){this.wrapper=document.getElementById(this.wrapperEl)}else{if(document.querySelector(this.wrapperEl)){this.wrapper=document.querySelector(this.wrapperEl)}else{throw new Error("The nav element you are trying to select doesn't exist")}}this.wrapper.inner=getChildren(this.wrapper);opts=this.options;nav=this.wrapper;this._init(this)};ResponsiveNav.prototype={destroy:function(){this._removeStyles();removeClass(nav,"closed");removeClass(nav,"opened");removeClass(nav,opts.navClass);removeClass(nav,opts.navClass+"-"+this.index);removeClass(htmlEl,opts.navActiveClass);nav.removeAttribute("style");nav.removeAttribute("aria-hidden");removeEvent(window,"resize",this,false);removeEvent(window,"focus",this,false);removeEvent(document.body,"touchmove",this,false);removeEvent(navToggle,"touchstart",this,false);removeEvent(navToggle,"touchend",this,false);removeEvent(navToggle,"mouseup",this,false);removeEvent(navToggle,"keyup",this,false);removeEvent(navToggle,"click",this,false);if(!opts.customToggle){navToggle.parentNode.removeChild(navToggle)}else{navToggle.removeAttribute("aria-hidden")}},toggle:function(){if(hasAnimFinished===true){if(!navOpen){this.open()}else{this.close()}}},open:function(){if(!navOpen){removeClass(nav,"closed");addClass(nav,"opened");addClass(htmlEl,opts.navActiveClass);addClass(navToggle,"active");nav.style.position=opts.openPos;setAttributes(nav,{"aria-hidden":"false"});navOpen=true;opts.open()}},close:function(){if(navOpen){addClass(nav,"closed");removeClass(nav,"opened");removeClass(htmlEl,opts.navActiveClass);removeClass(navToggle,"active");setAttributes(nav,{"aria-hidden":"true"});if(opts.animate){hasAnimFinished=false;setTimeout(function(){nav.style.position="absolute";hasAnimFinished=true},opts.transition+10)}else{nav.style.position="absolute"}navOpen=false;opts.close()}},resize:function(){if(window.getComputedStyle(navToggle,null).getPropertyValue("display")!=="none"){isMobile=true;setAttributes(navToggle,{"aria-hidden":"false"});if(nav.className.match(/(^|\s)closed(\s|$)/)){setAttributes(nav,{"aria-hidden":"true"});nav.style.position="absolute"}this._createStyles();this._calcHeight()}else{isMobile=false;setAttributes(navToggle,{"aria-hidden":"true"});setAttributes(nav,{"aria-hidden":"false"});nav.style.position=opts.openPos;this._removeStyles()}},handleEvent:function(e){var evt=e||window.event;switch(evt.type){case"touchstart":this._onTouchStart(evt);break;case"touchmove":this._onTouchMove(evt);break;case"touchend":case"mouseup":this._onTouchEnd(evt);break;case"click":this._preventDefault(evt);break;case"keyup":this._onKeyUp(evt);break;case"focus":case"resize":this.resize(evt);break}},_init:function(){this.index=index++;addClass(nav,opts.navClass);addClass(nav,opts.navClass+"-"+this.index);addClass(nav,"closed");hasAnimFinished=true;navOpen=false;this._closeOnNavClick();this._createToggle();this._transitions();this.resize();var self=this;setTimeout(function(){self.resize()},20);addEvent(window,"resize",this,false);addEvent(window,"focus",this,false);addEvent(document.body,"touchmove",this,false);addEvent(navToggle,"touchstart",this,false);addEvent(navToggle,"touchend",this,false);addEvent(navToggle,"mouseup",this,false);addEvent(navToggle,"keyup",this,false);addEvent(navToggle,"click",this,false);opts.init()},_createStyles:function(){if(!styleElement.parentNode){styleElement.type="text/css";document.getElementsByTagName("head")[0].appendChild(styleElement)}},_removeStyles:function(){if(styleElement.parentNode){styleElement.parentNode.removeChild(styleElement)}},_createToggle:function(){if(!opts.customToggle){var toggle=document.createElement("a");toggle.innerHTML=opts.label;setAttributes(toggle,{"href":"#","class":"nav-toggle"});if(opts.insert==="after"){nav.parentNode.insertBefore(toggle,nav.nextSibling)}else{nav.parentNode.insertBefore(toggle,nav)}navToggle=toggle}else{var toggleEl=opts.customToggle.replace("#","");if(document.getElementById(toggleEl)){navToggle=document.getElementById(toggleEl)}else{if(document.querySelector(toggleEl)){navToggle=document.querySelector(toggleEl)}else{throw new Error("The custom nav toggle you are trying to select doesn't exist")}}}},_closeOnNavClick:function(){if(opts.closeOnNavClick){var links=nav.getElementsByTagName("a"),self=this;forEach(links,function(i,el){addEvent(links[i],"click",function(){if(isMobile){self.toggle()}},false)})}},_preventDefault:function(e){if(e.preventDefault){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}e.preventDefault();e.stopPropagation();return false}else{e.returnValue=false}},_onTouchStart:function(e){if(!Event.prototype.stopImmediatePropagation){this._preventDefault(e)}this.startX=e.touches[0].clientX;this.startY=e.touches[0].clientY;this.touchHasMoved=false;removeEvent(navToggle,"mouseup",this,false)},_onTouchMove:function(e){if(Math.abs(e.touches[0].clientX-this.startX)>10||Math.abs(e.touches[0].clientY-this.startY)>10){this.touchHasMoved=true}},_onTouchEnd:function(e){this._preventDefault(e);if(!isMobile){return}if(!this.touchHasMoved){if(e.type==="touchend"){this.toggle();return}else{var evt=e||window.event;if(!(evt.which===3||evt.button===2)){this.toggle()}}}},_onKeyUp:function(e){var evt=e||window.event;if(evt.keyCode===13){this.toggle()}},_transitions:function(){if(opts.animate){var objStyle=nav.style,transition="max-height "+opts.transition+"ms";objStyle.WebkitTransition=objStyle.MozTransition=objStyle.OTransition=objStyle.transition=transition}},_calcHeight:function(){var savedHeight=0;for(var i=0;i<nav.inner.length;i++){savedHeight+=nav.inner[i].offsetHeight}var innerStyles="."+opts.jsClass+" ."+opts.navClass+"-"+this.index+".opened{max-height:"+savedHeight+"px !important} ."+opts.jsClass+" ."+opts.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";if(styleElement.styleSheet){styleElement.styleSheet.cssText=innerStyles}else{styleElement.innerHTML=innerStyles}innerStyles=""}};return new ResponsiveNav(el,options)};if(typeof module!=="undefined"&&module.exports){module.exports=responsiveNav}else{window.responsiveNav=responsiveNav}}(document,window,0));!function(window,document,$){var isInputSupported="placeholder" in document.createElement("input");var isTextareaSupported="placeholder" in document.createElement("textarea");var prototype=$.fn;var valHooks=$.valHooks;var propHooks=$.propHooks;var hooks;var placeholder;if(isInputSupported&&isTextareaSupported){placeholder=prototype.placeholder=function(){return this};placeholder.input=placeholder.textarea=true}else{placeholder=prototype.placeholder=function(){var $this=this;$this.filter((isInputSupported?"textarea":":input")+"[placeholder]").not(".placeholder").on({"focus.placeholder":clearPlaceholder,"blur.placeholder":setPlaceholder}).data("placeholder-enabled",true).trigger("blur.placeholder");return $this};placeholder.input=isInputSupported;placeholder.textarea=isTextareaSupported;hooks={"get":function(element){var $element=$(element);var $passwordInput=$element.data("placeholder-password");if($passwordInput){return $passwordInput[0].value}return $element.data("placeholder-enabled")&&$element.hasClass("placeholder")?"":element.value},"set":function(element,value){var $element=$(element);var $passwordInput=$element.data("placeholder-password");if($passwordInput){return $passwordInput[0].value=value}if(!$element.data("placeholder-enabled")){return element.value=value}if(value==""){element.value=value;if(element!=safeActiveElement()){setPlaceholder.call(element)}}else{if($element.hasClass("placeholder")){clearPlaceholder.call(element,true,value)||(element.value=value)}else{element.value=value}}return $element}};if(!isInputSupported){valHooks.input=hooks;propHooks.value=hooks}if(!isTextareaSupported){valHooks.textarea=hooks;propHooks.value=hooks}$(function(){$(document).delegate("form","submit.placeholder",function(){var $inputs=$(".placeholder",this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder)},10)})});$(window).on("beforeunload.placeholder",function(){$(".placeholder").each(function(){this.value=""})})}function args(elem){var newAttrs={};var rinlinejQuery=/^jQuery\d+$/;$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value}});return newAttrs}function clearPlaceholder(event,value){var input=this;var $input=$(input);if(input.value==$input.attr("placeholder")&&$input.hasClass("placeholder")){if($input.data("placeholder-password")){$input=$input.hide().next().show().attr("id",$input.removeAttr("id").data("placeholder-id"));if(event===true){return $input[0].value=value}$input.focus()}else{input.value="";$input.removeClass("placeholder");input==safeActiveElement()&&input.select()}}}function setPlaceholder(){var $replacement;var input=this;var $input=$(input);var id=this.id;if(input.value==""){if(input.type=="password"){if(!$input.data("placeholder-textinput")){try{$replacement=$input.clone().prop("type","text")}catch(e){$replacement=$("<input>").prop($.extend(args(this),{"type":"text"}))}$replacement.removeAttr("name").data({"placeholder-password":$input,"placeholder-id":id}).on("focus.placeholder",clearPlaceholder);$input.data({"placeholder-textinput":$replacement,"placeholder-id":id}).before($replacement)}$input=$input.removeAttr("id").hide().prev().attr("id",id).show()}$input.addClass("placeholder");$input[0].value=$input.attr("placeholder")}else{$input.removeClass("placeholder")}}function safeActiveElement(){try{return document.activeElement}catch(exception){}}}(this,document,jQuery);!function($){var plugin="emailsuggest",defaults={sugClass:"emailSug",domains:["163.com","126.com","sohu.com","139.com","sina.com","qq.com","gmail.com"]};function EmailSug(elem,options){this.$field=$(elem);this.options=$.extend(true,{},defaults,options);this._defaults=defaults;this._domains=this.options.domains;this.selectedIndex=0;this.init()}EmailSug.prototype={init:function(){this.addEvent()},addEvent:function(){var that=this,value;this.$field.on("keyup.ema",function(e){value=$.trim(this.value);if(value){that.create(this,value);that.doSelect(e.keyCode)}else{that.hide()}}).on("blur.ema",function(){setTimeout(function(){that.hide()},200)})},create:function(elem,value){var that=this,arr,len,fragment,ul=[],offset,left,top,width,height,style,borderWidth=2;elem=$(elem);offset=elem.offset();width=elem.outerWidth(true)-borderWidth;height=elem.outerHeight(true);left=offset.left;top=offset.top+height;style="left: "+left+"px; top: "+top+"px; width: "+width+"px; border: 1px solid #e2e2e2; border-top: 0; display: none";fragment=$('<div class="'+this.options.sugClass+'-wrapper" style="'+style+'" />');ul.push('<ul class="'+this.options.sugClass+'-list">');arr=this.filter(value,this._domains);len=arr.length;$.each(arr,function(i,domain){var _class=that.options.sugClass+"-item";if(that.selectedIndex>len-1){if(i===0){_class+=" active";that.selectedIndex=0}}else{if(i===that.selectedIndex){_class+=" active"}}ul.push('<li class="'+_class+'" data-index="'+i+'">'+value.replace(/@.*/,"")+"@"+domain+"</li>")});ul.push("</ul>");ul=ul.join("");if(this.$suggest){this.$suggest.empty();this.$suggest.append(ul)}else{fragment.append(ul);$("body").append(fragment);this.$suggest=fragment;this.$suggest.on("mouseenter click","."+this.options.sugClass+"-item",function(e){var lis,li;li=$(this);lis=li.parent().children();if(e.type==="mouseenter"){li.addClass("active").siblings().removeClass("active");that.selectedIndex=$.inArray(this,lis)}else{that.$field.val(lis.eq(that.selectedIndex).text());that.hide()}})}this.show()},doSelect:function(keyCode){var elems=$("."+this.options.sugClass+"-item",this.$suggest),min=0,max=elems.length-1;switch(keyCode){case 13:$("li.active",this.$suggest).trigger("click");this.selectedIndex=0;break;case 38:this.selectedIndex--;if(this.selectedIndex<min){this.selectedIndex=max}elems.removeClass("active").eq(this.selectedIndex).addClass("active");break;case 40:this.selectedIndex++;if(this.selectedIndex>max){this.selectedIndex=min}elems.removeClass("active").eq(this.selectedIndex).addClass("active");break;default:break}},filter:function(value,arr){var start,suffix,r=[];start=value.indexOf("@");if(start>-1){suffix=value.substring(start+1);$.each(arr,function(i,str){if(str.indexOf(suffix)>-1){r.push(str)}})}else{r=arr}return r},show:function(){if(this.$suggest){this.$suggest.show()}},hide:function(){if(this.$suggest){this.$suggest.hide()}}};$.fn[plugin]=function(options){return this.each(function(){if(!$.data(this,plugin)){$.data(this,plugin,new EmailSug(this,options))}})}}(window.jQuery);!function($){$.fn.Spinner=function(opts){var defaults={value:1,min:1,len:3,max:99};var options=$.extend(defaults,opts);var keyCodes={up:38,down:40};return this.each(function(){var a=$("<a></a>");f(a,0,"decrease","-");var c=$("<a></a>");f(c,0,"increase","+");var b=$("<input/>");f(b,1,"amount input-text");cv(0);$(this).append(a).append(b).append(c);a.click(function(){cv(-1)});b.keyup(function(){cv(0)});c.click(function(){cv(+1)});b.on("keyup paste change",function(e){e.keyCode==keyCodes.up&&cv(+1);e.keyCode==keyCodes.down&&cv(-1)});function cv(n){b.val(b.val().replace(/[^\d]/g,""));bv=parseInt(b.val()||options.min)+n;bv>=options.min&&bv<=options.max&&b.val(bv);if(bv<=options.min){b.val(options.min);f(a,2,"disDe","decrease")}else{f(a,2,"decrease","disDe")}if(bv>=options.max){b.val(options.max);f(c,2,"disIn","Increase")}else{f(c,2,"increase","disIn")}}});function f(o,t,c,s){t==0&&o.addClass(c).attr("href","javascript:void(0)").append("<i></i>").find("i").append(s);t==1&&o.addClass(c).attr({"value":options.value,"autocomplete":"off","maxlength":options.len});t==2&&o.addClass(c).removeClass(s)}}}(window.jQuery);!function($){$.extend({format:function(str,step,splitor){str=str.toString();var len=str.length;if(len>step){var l1=len%step,l2=parseInt(len/step),arr=[],first=str.substr(0,l1);if(first!=""){arr.push(first)}for(var i=0;i<l2;i++){arr.push(str.substr(l1+i*step,step))}str=arr.join(splitor)}return str}})}(window.jQuery);!function($){$.fn.togglePassword=function(options){var s=$.extend($.fn.togglePassword.defaults,options),input=$(this);$(s.el).on(s.ev,function(){"password"==$(input).attr("type")?$(input).attr("type","text"):$(input).attr("type","password")})};$.fn.togglePassword.defaults={ev:"click"}}(window.jQuery);!(function($){var _iCheck="iCheck",_iCheckHelper=_iCheck+"-helper",_checkbox="checkbox",_radio="radio",_checked="checked",_unchecked="un"+_checked,_disabled="disabled",_determinate="determinate",_indeterminate="in"+_determinate,_update="update",_type="type",_click="click",_touch="touchbegin.i touchend.i",_add="addClass",_remove="removeClass",_callback="trigger",_label="label",_cursor="cursor",_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);$.fn[_iCheck]=function(options,fire){var handle='input[type="'+_checkbox+'"], input[type="'+_radio+'"]',stack=$(),walker=function(object){object.each(function(){var self=$(this);if(self.is(handle)){stack=stack.add(self)}else{stack=stack.add(self.find(handle))}})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(options)){options=options.toLowerCase();walker(this);return stack.each(function(){var self=$(this);if(options=="destroy"){tidy(self,"ifDestroyed")}else{operate(self,true,options)}if($.isFunction(fire)){fire()}})}else{if(typeof options=="object"||!options){var settings=$.extend({checkedClass:_checked,disabledClass:_disabled,indeterminateClass:_indeterminate,labelHover:true},options),selector=settings.handle,hoverClass=settings.hoverClass||"hover",focusClass=settings.focusClass||"focus",activeClass=settings.activeClass||"active",labelHover=!!settings.labelHover,labelHoverClass=settings.labelHoverClass||"hover",area=(""+settings.increaseArea).replace("%","")|0;if(selector==_checkbox||selector==_radio){handle='input[type="'+selector+'"]'}if(area<-50){area=-50}walker(this);return stack.each(function(){var self=$(this);tidy(self);var node=this,id=node.id,offset=-area+"%",size=100+(area*2)+"%",layer={position:"absolute",top:offset,left:offset,display:"block",width:size,height:size,margin:0,padding:0,background:"#fff",border:0,opacity:0},hide=_mobile?{position:"absolute",visibility:"hidden"}:area?layer:{position:"absolute",opacity:0},className=node[_type]==_checkbox?settings.checkboxClass||"i"+_checkbox:settings.radioClass||"i"+_radio,label=$(_label+'[for="'+id+'"]').add(self.closest(_label)),aria=!!settings.aria,ariaID=_iCheck+"-"+Math.random().toString(36).substr(2,6),parent='<div class="'+className+'" '+(aria?'role="'+node[_type]+'" ':""),helper;if(aria){label.each(function(){parent+='aria-labelledby="';if(this.id){parent+=this.id}else{this.id=ariaID;parent+=ariaID}parent+='"'})}parent=self.wrap(parent+"/>")[_callback]("ifCreated").parent().append(settings.insert);helper=$('<ins class="'+_iCheckHelper+'"/>').css(layer).appendTo(parent);self.data(_iCheck,{o:settings,s:self.attr("style")}).css(hide);!!settings.inheritClass&&parent[_add](node.className||"");!!settings.inheritID&&id&&parent.attr("id",_iCheck+"-"+id);parent.css("position")=="static"&&parent.css("position","relative");operate(self,true,_update);if(label.length){label.on(_click+".i mouseover.i mouseout.i "+_touch,function(event){var type=event[_type],item=$(this);if(!node[_disabled]){if(type==_click){if($(event.target).is("a")){return}operate(self,false,true)}else{if(labelHover){if(/ut|nd/.test(type)){parent[_remove](hoverClass);item[_remove](labelHoverClass)}else{parent[_add](hoverClass);item[_add](labelHoverClass)}}}if(_mobile){event.stopPropagation()}else{return false}}})}self.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(event){var type=event[_type],key=event.keyCode;if(type==_click){return false}else{if(type=="keydown"&&key==32){if(!(node[_type]==_radio&&node[_checked])){if(node[_checked]){off(self,_checked)}else{on(self,_checked)}}return false}else{if(type=="keyup"&&node[_type]==_radio){!node[_checked]&&on(self,_checked)}else{if(/us|ur/.test(type)){parent[type=="blur"?_remove:_add](focusClass)}}}}});helper.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(event){var type=event[_type],toggle=/wn|up/.test(type)?activeClass:hoverClass;if(!node[_disabled]){if(type==_click){operate(self,false,true)}else{if(/wn|er|in/.test(type)){parent[_add](toggle)}else{parent[_remove](toggle+" "+activeClass)}if(label.length&&labelHover&&toggle==hoverClass){label[/ut|nd/.test(type)?_remove:_add](labelHoverClass)}}if(_mobile){event.stopPropagation()}else{return false}}})})}else{return this}}};function operate(input,direct,method){var node=input[0],state=/er/.test(method)?_indeterminate:/bl/.test(method)?_disabled:_checked,active=method==_update?{checked:node[_checked],disabled:node[_disabled],indeterminate:input.attr(_indeterminate)=="true"||input.attr(_determinate)=="false"}:node[state];if(/^(ch|di|in)/.test(method)&&!active){on(input,state)}else{if(/^(un|en|de)/.test(method)&&active){off(input,state)}else{if(method==_update){for(var each in active){if(active[each]){on(input,each,true)}else{off(input,each,true)}}}else{if(!direct||method=="toggle"){if(!direct){input[_callback]("ifClicked")}if(active){if(node[_type]!==_radio){off(input,state)}}else{on(input,state)}}}}}}function on(input,state,keep){var node=input[0],parent=input.parent(),checked=state==_checked,indeterminate=state==_indeterminate,disabled=state==_disabled,callback=indeterminate?_determinate:checked?_unchecked:"enabled",regular=option(input,callback+capitalize(node[_type])),specific=option(input,state+capitalize(node[_type]));if(node[state]!==true){if(!keep&&state==_checked&&node[_type]==_radio&&node.name){var form=input.closest("form"),inputs='input[name="'+node.name+'"]';inputs=form.length?form.find(inputs):$(inputs);inputs.each(function(){if(this!==node&&$(this).data(_iCheck)){off($(this),state)}})}if(indeterminate){node[state]=true;if(node[_checked]){off(input,_checked,"force")}}else{if(!keep){node[state]=true}if(checked&&node[_indeterminate]){off(input,_indeterminate,false)}}callbacks(input,checked,state,keep)}if(node[_disabled]&&!!option(input,_cursor,true)){parent.find("."+_iCheckHelper).css(_cursor,"default")}parent[_add](specific||option(input,state)||"");if(!!parent.attr("role")&&!indeterminate){parent.attr("aria-"+(disabled?_disabled:_checked),"true")}parent[_remove](regular||option(input,callback)||"")}function off(input,state,keep){var node=input[0],parent=input.parent(),checked=state==_checked,indeterminate=state==_indeterminate,disabled=state==_disabled,callback=indeterminate?_determinate:checked?_unchecked:"enabled",regular=option(input,callback+capitalize(node[_type])),specific=option(input,state+capitalize(node[_type]));if(node[state]!==false){if(indeterminate||!keep||keep=="force"){node[state]=false}callbacks(input,checked,callback,keep)}if(!node[_disabled]&&!!option(input,_cursor,true)){parent.find("."+_iCheckHelper).css(_cursor,"pointer")}parent[_remove](specific||option(input,state)||"");if(!!parent.attr("role")&&!indeterminate){parent.attr("aria-"+(disabled?_disabled:_checked),"false")}parent[_add](regular||option(input,callback)||"")}function tidy(input,callback){if(input.data(_iCheck)){input.parent().html(input.attr("style",input.data(_iCheck).s||""));if(callback){input[_callback](callback)}input.off(".i").unwrap();$(_label+'[for="'+input[0].id+'"]').add(input.closest(_label)).off(".i")}}function option(input,state,regular){if(input.data(_iCheck)){return input.data(_iCheck).o[state+(regular?"":"Class")]}}function capitalize(string){return string.charAt(0).toUpperCase()+string.slice(1)}function callbacks(input,checked,callback,keep){if(!keep){if(checked){input[_callback]("ifToggled")}input[_callback]("ifChanged")[_callback]("if"+capitalize(callback))}}})(window.jQuery||window.Zepto);!(function($){var methods={init:function(settings){return this.each(function(){var self=this,$this=$(self).empty();self.opt=$.extend(true,{},$.fn.raty.defaults,settings);$this.data("settings",self.opt);self.opt.number=methods.between(self.opt.number,0,20);if(self.opt.path.substring(self.opt.path.length-1,self.opt.path.length)!="/"){self.opt.path+="/"}if(typeof self.opt.score=="function"){self.opt.score=self.opt.score.call(self)}if(self.opt.score){self.opt.score=methods.between(self.opt.score,0,self.opt.number)}for(var i=1;i<=self.opt.number;i++){$("<img />",{src:self.opt.path+((!self.opt.score||self.opt.score<i)?self.opt.starOff:self.opt.starOn),alt:i,title:(i<=self.opt.hints.length&&self.opt.hints[i-1]!==null)?self.opt.hints[i-1]:i}).appendTo(self);if(self.opt.space){$this.append((i<self.opt.number)?"":"")}}self.stars=$this.children('img:not(".raty-cancel")');self.score=$("<input />",{type:"hidden",name:self.opt.scoreName}).appendTo(self);if(self.opt.score&&self.opt.score>0){self.score.val(self.opt.score);methods.roundStar.call(self,self.opt.score)}if(self.opt.iconRange){methods.fill.call(self,self.opt.score)}methods.setTarget.call(self,self.opt.score,self.opt.targetKeep);var space=self.opt.space?4:0,width=self.opt.width||(self.opt.number*self.opt.size+self.opt.number*space);if(self.opt.cancel){self.cancel=$("<img />",{src:self.opt.path+self.opt.cancelOff,alt:"x",title:self.opt.cancelHint,"class":"raty-cancel"});if(self.opt.cancelPlace=="left"){}else{}width+=(self.opt.size+space)}if(self.opt.readOnly){methods.fixHint.call(self);if(self.cancel){self.cancel.hide()}}else{$this.css("cursor","pointer");methods.bindAction.call(self)}})},between:function(value,min,max){return Math.min(Math.max(parseFloat(value),min),max)},bindAction:function(){var self=this,$this=$(self);$this.mouseleave(function(){var score=self.score.val()||undefined;methods.initialize.call(self,score);methods.setTarget.call(self,score,self.opt.targetKeep);if(self.opt.mouseover){self.opt.mouseover.call(self,score)}});var action=self.opt.half?"mousemove":"mouseover";if(self.opt.cancel){self.cancel.mouseenter(function(){$(this).attr("src",self.opt.path+self.opt.cancelOn);self.stars.attr("src",self.opt.path+self.opt.starOff);methods.setTarget.call(self,null,true);if(self.opt.mouseover){self.opt.mouseover.call(self,null)}}).mouseleave(function(){$(this).attr("src",self.opt.path+self.opt.cancelOff);if(self.opt.mouseover){self.opt.mouseover.call(self,self.score.val()||null)}}).click(function(evt){self.score.removeAttr("value");if(self.opt.click){self.opt.click.call(self,null,evt)}})}self.stars.bind(action,function(evt){var value=parseInt(this.alt,10);if(self.opt.half){var position=parseFloat((evt.pageX-$(this).offset().left)/self.opt.size),diff=(position>0.5)?1:0.5;value=parseFloat(this.alt)-1+diff;methods.fill.call(self,value);if(self.opt.precision){value=value-diff+position}methods.showHalf.call(self,value)}else{methods.fill.call(self,value)}$this.data("score",value);methods.setTarget.call(self,value,true);if(self.opt.mouseover){self.opt.mouseover.call(self,value,evt)}}).click(function(evt){self.score.val((self.opt.half||self.opt.precision)?$this.data("score"):this.alt);if(self.opt.click){self.opt.click.call(self,self.score.val(),evt)}})},cancel:function(isClick){return $(this).each(function(){var self=this,$this=$(self);if($this.data("readonly")===true){return this}if(isClick){methods.click.call(self,null)}else{methods.score.call(self,null)}self.score.removeAttr("value")})},click:function(score){return $(this).each(function(){if($(this).data("readonly")===true){return this}methods.initialize.call(this,score);if(this.opt.click){this.opt.click.call(this,score)}else{methods.error.call(this,'you must add the "click: function(score, evt) { }" callback.')}methods.setTarget.call(this,score,true)})},error:function(message){$(this).html(message);$.error(message)},fill:function(score){var self=this,number=self.stars.length,count=0,$star,star,icon;for(var i=1;i<=number;i++){$star=self.stars.eq(i-1);if(self.opt.iconRange&&self.opt.iconRange.length>count){star=self.opt.iconRange[count];if(self.opt.single){icon=(i==score)?(star.on||self.opt.starOn):(star.off||self.opt.starOff)}else{icon=(i<=score)?(star.on||self.opt.starOn):(star.off||self.opt.starOff)}if(i<=star.range){$star.attr("src",self.opt.path+icon)}if(i==star.range){count++}}else{if(self.opt.single){icon=(i==score)?self.opt.starOn:self.opt.starOff}else{icon=(i<=score)?self.opt.starOn:self.opt.starOff}$star.attr("src",self.opt.path+icon)}}},fixHint:function(){var $this=$(this),score=parseInt(this.score.val(),10),hint=this.opt.noRatedMsg;if(!isNaN(score)&&score>0){hint=(score<=this.opt.hints.length&&this.opt.hints[score-1]!==null)?this.opt.hints[score-1]:score}$this.data("readonly",true).css("cursor","default").attr("title",hint);this.score.attr("readonly","readonly");this.stars.attr("title",hint)},getScore:function(){var score=[],value;$(this).each(function(){value=this.score.val();score.push(value?parseFloat(value):undefined)});return(score.length>1)?score:score[0]},readOnly:function(isReadOnly){return this.each(function(){var $this=$(this);if($this.data("readonly")===isReadOnly){return this}if(this.cancel){if(isReadOnly){this.cancel.hide()}else{this.cancel.show()}}if(isReadOnly){$this.unbind();$this.children("img").unbind();methods.fixHint.call(this)}else{methods.bindAction.call(this);methods.unfixHint.call(this)}$this.data("readonly",isReadOnly)})},reload:function(){return methods.set.call(this,{})},roundStar:function(score){var diff=(score-Math.floor(score)).toFixed(2);if(diff>this.opt.round.down){var icon=this.opt.starOn;if(diff<this.opt.round.up&&this.opt.halfShow){icon=this.opt.starHalf}else{if(diff<this.opt.round.full){icon=this.opt.starOff}}this.stars.eq(Math.ceil(score)-1).attr("src",this.opt.path+icon)}},score:function(){return arguments.length?methods.setScore.apply(this,arguments):methods.getScore.call(this)},set:function(settings){this.each(function(){var $this=$(this),actual=$this.data("settings"),clone=$this.clone().removeAttr("style").insertBefore($this);$this.remove();clone.raty($.extend(actual,settings))});return $(this.selector)},setScore:function(score){return $(this).each(function(){if($(this).data("readonly")===true){return this}methods.initialize.call(this,score);methods.setTarget.call(this,score,true)})},setTarget:function(value,isKeep){if(this.opt.target){var $target=$(this.opt.target);if($target.length==0){methods.error.call(this,"目标选择器无效或丢失!")}var score=value;if(!isKeep||score===undefined){score=this.opt.targetText}else{if(this.opt.targetType=="hint"){score=(score===null&&this.opt.cancel)?this.opt.cancelHint:this.opt.hints[Math.ceil(score-1)]}else{score=this.opt.precision?parseFloat(score).toFixed(1):parseInt(score,10)}}if(this.opt.targetFormat.indexOf("{score}")<0){methods.error.call(this,'模版 "{score}" 找不到!')}if(value!==null){score=this.opt.targetFormat.toString().replace("{score}",score)}if($target.is(":input")){$target.val(score)}else{$target.html(score)}}},showHalf:function(score){var diff=(score-Math.floor(score)).toFixed(1);if(diff>0&&diff<0.6){this.stars.eq(Math.ceil(score)-1).attr("src",this.opt.path+this.opt.starHalf)}},initialize:function(score){score=!score?0:methods.between(score,0,this.opt.number);methods.fill.call(this,score);if(score>0){if(this.opt.halfShow){methods.roundStar.call(this,score)}this.score.val(score)}},unfixHint:function(){for(var i=0;i<this.opt.number;i++){this.stars.eq(i).attr("title",(i<this.opt.hints.length&&this.opt.hints[i]!==null)?this.opt.hints[i]:i)}$(this).data("readonly",false).css("cursor","pointer").removeAttr("title");this.score.attr("readonly","readonly")}};$.fn.raty=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("方法 "+method+" 不存在!")}}};$.fn.raty.defaults={cancel:false,cancelHint:"取消评级!",cancelOff:"cancel-off.png",cancelOn:"cancel-on.png",cancelPlace:"left",click:undefined,half:false,halfShow:true,hints:["10","20","30","40","50","60","70","80","90","100"],iconRange:undefined,mouseover:undefined,noRatedMsg:"没有额定",number:10,path:"images/",precision:false,round:{down:0.25,full:0.6,up:0.76},readOnly:false,score:undefined,scoreName:"score",single:false,size:16,space:true,starHalf:"star-half.png",starOff:"star-off.png",starOn:"star-on.png",target:undefined,targetFormat:"{score}",targetKeep:false,targetText:"",targetType:"hint",width:undefined}})(jQuery);!(function($){$.fn.onePageNav=function(options){var opts=$.extend({},$.fn.onePageNav.defaults,options),onePageNav={};onePageNav.sections={};onePageNav.bindNav=function($el,$this,o){var $par=$el.parent(),newLoc=$el.attr("href"),$win=$(window);if(!$par.hasClass(o.currentClass)){if(o.begin){o.begin()}onePageNav.adjustNav($this,$par,o.currentClass);$win.unbind(".onePageNav");$.scrollTo(newLoc,o.scrollSpeed,{easing:o.easing,offset:{top:-o.scrollOffset},onAfter:function(){if(o.changeHash){window.location.hash=newLoc}$win.bind("scroll.onePageNav",function(){onePageNav.scrollChange($this,o)});if(o.end){o.end()}}})}};onePageNav.adjustNav=function($this,$el,curClass){$this.find("."+curClass).removeClass(curClass);$el.addClass(curClass)};onePageNav.getPositions=function($this,o){var $nav=$this.find("a");if(o.filter!==""){$nav=$nav.filter(o.filter)}$nav.each(function(){var linkHref=$(this).attr("href"),divPos=$(linkHref).offset(),topPos=divPos.top;onePageNav.sections[linkHref.substr(1)]=Math.round(topPos)-o.scrollOffset})};onePageNav.getSection=function(windowPos,o){var returnValue="",windowHeight=Math.round($(window).height()*o.scrollThreshold);for(var section in onePageNav.sections){if((onePageNav.sections[section]-windowHeight)<windowPos){returnValue=section}}return returnValue};onePageNav.scrollChange=function($this,o){onePageNav.getPositions($this,o);var windowTop=$(window).scrollTop(),position=onePageNav.getSection(windowTop,o);if(position!==""){onePageNav.adjustNav($this,$this.find("a[href=#"+position+"]").parent(),o.currentClass)}};onePageNav.init=function($this,o){var didScroll=false,$nav=$this.find("a");if(o.filter!==""){$nav=$nav.filter(o.filter)}$nav.bind("click",function(e){onePageNav.bindNav($(this),$this,o);e.preventDefault()});onePageNav.getPositions($this,o);$(window).bind("scroll.onePageNav",function(){didScroll=true});setInterval(function(){if(didScroll){didScroll=false;onePageNav.scrollChange($this,o)}},250)};return this.each(function(){var $this=$(this),o=$.meta?$.extend({},opts,$this.data()):opts;onePageNav.init($this,o)})};$.fn.onePageNav.defaults={currentClass:"current",changeHash:false,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:0.5,begin:false,end:false}})(jQuery);function HuiaddFavorite(obj){obj.site=obj.site||window.location.href;obj.name=obj.name||document.title;try{window.external.addFavorite(obj.site,obj.name)}catch(e){try{window.sidebar.addPanel(name,site,"")}catch(e){$.Huimodalalert("加入收藏失败，请使用Ctrl+D进行添加",2000)}}}function Huisethome(obj){try{obj.style.behavior="url(#default#homepage)";obj.setHomePage(webSite)}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(e){$.Huimodalalert("此操作被浏览器拒绝！\n请在浏览器地址栏输入\"about:config\"并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。",2000)}var prefs=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref("browser.startup.homepage",url)}}}function displaynavbar(obj){if($(obj).hasClass("open")){$(obj).removeClass("open");$("body").removeClass("big-page")}else{$(obj).addClass("open");$("body").addClass("big-page")}}!function($){$.Huihover=function(obj){$(obj).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")})}}(window.jQuery);!function($){$.Huifocusblur=function(obj){$(obj).focus(function(){$(this).addClass("focus").removeClass("inputError")});$(obj).blur(function(){$(this).removeClass("focus")})}}(window.jQuery);$(function(){$.Huifocusblur(".input-text,.textarea")});!function($){$.Huiselect=function(divselectid,inputselectid){var inputselect=$(inputselectid);$(divselectid+" cite").click(function(){var ul=$(divselectid+" ul");ul.slideToggle()});$(divselectid+" ul li a").click(function(){var txt=$(this).text();$(divselectid+" cite").html(txt);var value=$(this).attr("selectid");inputselect.val(value);$(divselectid+" ul").hide()});$(document).click(function(){$(divselectid+" ul").hide()})}}(window.jQuery);!function($){$.Huitab=function(tabBar,tabCon,class_name,tabEvent,i){var $tab_menu=$(tabBar);$tab_menu.removeClass(class_name);$(tabBar).eq(i).addClass(class_name);$(tabCon).hide();$(tabCon).eq(i).show();$tab_menu.on(tabEvent,function(){$tab_menu.removeClass(class_name);$(this).addClass(class_name);var index=$tab_menu.index(this);$(tabCon).hide();$(tabCon).eq(index).show()})}}(window.jQuery);!function($){$.Huifold=function(obj,obj_c,speed,obj_type,Event){if(obj_type==2){$(obj+":first").find("b").html("-");$(obj_c+":first").show()}$(obj).on(Event,function(){if($(this).next().is(":visible")){if(obj_type==2){return false}else{$(this).next().slideUp(speed).end().removeClass("selected");if($(this).find("b")){$(this).find("b").html("+")}}}else{if(obj_type==3){$(this).next().slideDown(speed).end().addClass("selected");if($(this).find("b")){$(this).find("b").html("-")}}else{$(obj_c).slideUp(speed);$(obj).removeClass("selected");if($(this).find("b")){$(obj).find("b").html("+")}$(this).next().slideDown(speed).end().addClass("selected");if($(this).find("b")){$(this).find("b").html("-")}}}})}}(window.jQuery);!function($){var time1;$(".Hui-tags-lable").show();$(".Hui-tags-input").val("");$(document).on("blur",".Hui-tags-input",function(){time1=setTimeout(function(){$(this).parents(".Hui-tags").find(".Hui-tags-list").slideUp()},400)});$(document).on("focus",".Hui-tags-input",function(){clearTimeout(time1)});$(document).on("click",".Hui-tags-input",function(){$(this).find(".Hui-tags-input").focus();$(this).find(".Hui-tags-list").slideDown()});function gettagval(obj){var str="";var token=$(obj).parents(".Hui-tags").find(".Hui-tags-token");if(token.length<1){$(obj).parents(".Hui-tags").find(".Hui-tags-val").val("");return false}for(var i=0;i<token.length;i++){str+=token.eq(i).text()+",";$(obj).parents(".Hui-tags").find(".Hui-tags-val").val(str)}}$(document).on("keydown",".Hui-tags-input",function(event){$(this).next().hide();var v=$(this).val().replace(/\s+/g,"");var reg=/^,|,$/gi;v=v.replace(reg,"");v=$.trim(v);var token=$(this).parents(".Hui-tags").find(".Hui-tags-token");if(v!=""){if(event.keyCode==13||event.keyCode==108||event.keyCode==32){$('<span class="Hui-tags-token">'+v+"</span>").insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));$(this).val("");gettagval(this)}}else{if(event.keyCode==8){if(token.length>=1){$(this).parents(".Hui-tags").find(".Hui-tags-token:last").remove();gettagval(this)}else{$(this).parents(".Hui-tags").find(".Hui-tags-lable").show();return false}}}});$(document).on("click",".Hui-tags-has span",function(){var taghasV=$(this).text();taghasV=taghasV.replace(/(^\s*)|(\s*$)/g,"");$('<span class="Hui-tags-token">'+taghasV+"</span>").insertBefore($(this).parents(".Hui-tags").find(".Hui-tags-iptwrap"));gettagval(this);$(this).parents(".Hui-tags").find(".Hui-tags-input").focus()});$(document).on("click",".Hui-tags-token",function(){var token=$(this).parents(".Hui-tags").find(".Hui-tags-token");var it=$(this).parents(".Hui-tags");$(this).remove();switch(token.length){case 1:it.find(".Hui-tags-lable").show();break}var str="";var token=it.find(".Hui-tags-token");if(token.length<1){it.find(".Hui-tags-val").val("");return false}for(var i=0;i<token.length;i++){str+=token.eq(i).text()+",";it.find(".Hui-tags-val").val(str)}})}(window.jQuery);!function($){$.Huitagsmixed=function(obj){$(obj).each(function(){var x=9;var y=0;var rand=parseInt(Math.random()*(x-y+1)+y);$(this).addClass("tags"+rand)})}}(window.jQuery);!function($){$.Huitextarealength=function(obj,maxlength){var v=$(obj).val();var l=v.length;if(l>maxlength){v=v.substring(0,maxlength);$(obj).val(v)}$(obj).parent().find(".textarea-length").text(v.length)}}(window.jQuery);!function($){$.Huipreview=function(obj){$(obj).hover(function(){$(this).addClass("active");$("#tooltip-preview").remove();var winW=$(window).width();var winW5=winW/2;this.myTitle=this.title;this.title="";var midimg=$(this).attr("data-preview");if(midimg==""){return false}else{var imgT=$(this).parents(".imgItem").offset().top;var imgL=$(this).parents(".imgItem").offset().left;var imgW=$(this).parents(".imgItem").width();var imgH=$(this).parents(".imgItem").height();var ww=(imgL+imgW/2);if(ww<winW5){var tooltipLeft=(imgW+imgL)+"px"}else{var tooltipRight=(winW-imgL)+"px"}var tooltip_keleyi_com="<div id='tooltip-preview' style='top:"+imgT+"px;right:"+tooltipRight+";left:"+tooltipLeft+"'><span id='tooltip-keleyi-div' class='loading' style='width:50px; height:50px'></span></div>";$("body").append(tooltip_keleyi_com);var midimgW=$(this).attr("data-width");var midimgH=$(this).attr("data-height");var imgTitle=this.myTitle?"<br />"+this.myTitle+" 产品预览图":"";var image=new Image();image.onload=function(){if($("a.preview.active").attr("data-preview")==midimg){var midingW2=this.width;var midingH2=this.height;$("#tooltip-keleyi-div").css({"width":midingW2+"px","height":midingH2+"px"});$("#tooltip-keleyi-div").append(this)}};image.src=midimg}},function(){$(this).removeClass("active");this.title=this.myTitle;$("#tooltip-preview").remove()})}}(window.jQuery);!function($){$.Huimodalalert=function(info,speed){if($(".modal-alert").length>0){$(".modal-alert").remove()}if(speed==0||typeof(speed)=="undefined"){$(document.body).append('<div id="modal-alert" class="modal modal-alert radius">'+'<div class="modal-alert-info">'+info+"</div>"+'<div class="modal-footer"> <button class="btn btn-primary radius" onClick="$.Huimodal_alert.hide()">确定</button></div>'+"</div>");$("#modal-alert").fadeIn()}else{$(document.body).append('<div id="modal-alert" class="modal modal-alert radius">'+'<div class="modal-alert-info">'+info+"</div>"+"</div>");$("#modal-alert").fadeIn();setTimeout($.Huimodalalert.hide,speed)}};$.Huimodalalert.hide=function(){$("#modal-alert").fadeOut("normal",function(){$("#modal-alert").remove()})}}(window.jQuery);!function($){$.Huialert=function(){$.Huihover(".Huialert i");$(".Huialert i").on("click",function(){var Huialert=$(this).parents(".Huialert");Huialert.fadeOut("normal",function(){Huialert.remove()})})};$.Huialert()}(window.jQuery);var $backToTopEle=$('<a href="javascript:void(0)" class="tools-right toTop Hui-iconfont" title="返回顶部" alt="返回顶部" style="display:none">&#xe684;</a>').appendTo($("body")).click(function(){$("html, body").animate({scrollTop:0},120)});var backToTopFun=function(){var st=$(document).scrollTop(),winh=$(window).height();(st>0)?$backToTopEle.show():$backToTopEle.hide();if(!window.XMLHttpRequest){$backToTopEle.css("top",st+winh-166)}};!function($){$.Huimarquee=function(height,speed,delay){var scrollT;var pause=false;var ScrollBox=document.getElementById("marquee");if(document.getElementById("holder").offsetHeight<=height){return}var _tmp=ScrollBox.innerHTML.replace("holder","holder2");ScrollBox.innerHTML+=_tmp;ScrollBox.onmouseover=function(){pause=true};ScrollBox.onmouseout=function(){pause=false};ScrollBox.scrollTop=0;var start=function(){scrollT=setInterval(scrolling,speed);if(!pause){ScrollBox.scrollTop+=2}};var scrolling=function(){if(ScrollBox.scrollTop%height!=0){ScrollBox.scrollTop+=2;if(ScrollBox.scrollTop>=ScrollBox.scrollHeight/2){ScrollBox.scrollTop=0}}else{clearInterval(scrollT);setTimeout(start,delay)}};setTimeout(start,delay)}}(window.jQuery);$(function(){$("table thead th input:checkbox").on("click",function(){$(this).closest("table").find("tr > td:first-child input:checkbox").prop("checked",$("table thead th input:checkbox").prop("checked"))});$(document).on("change",".input-file",function(){var uploadVal=$(this).val();$(this).parent().find(".upload-url").val(uploadVal).focus().blur()})});!function($){var Button=function(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false};Button.VERSION="3.3.0";Button.DEFAULTS={loadingText:"loading..."};Button.prototype.setState=function(state){var d="disabled";var $el=this.$element;var val=$el.is("input")?"val":"html";var data=$el.data();state=state+"Text";if(data.resetText==null){$el.data("resetText",$el[val]())}setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state]);if(state=="loadingText"){this.isLoading=true;$el.addClass(d).attr(d,d)}else{if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d)}}},this),0)};Button.prototype.toggle=function(){var changed=true;var $parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find("input");if($input.prop("type")=="radio"){if($input.prop("checked")&&this.$element.hasClass("active")){changed=false}else{$parent.find(".active").removeClass("active")}}if(changed){$input.prop("checked",!this.$element.hasClass("active")).trigger("change")}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))}if(changed){this.$element.toggleClass("active")}};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.button");var options=typeof option=="object"&&option;if(!data){$this.data("bs.button",(data=new Button(this,options)))}if(option=="toggle"){data.toggle()}else{if(option){data.setState(option)}}})}var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;$.fn.button.noConflict=function(){$.fn.button=old;return this};$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var $btn=$(e.target);if(!$btn.hasClass("btn")){}$btn=$btn.closest(".btn");Plugin.call($btn,"toggle");e.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){$(e.target).closest(".btn").toggleClass("focus",e.type=="focus")})}(jQuery);jQuery(function($){$(document).ready(function(){var contentButton=[];var contentTop=[];var content=[];var lastScrollTop=0;var scrollDir="";var itemClass="";var itemHover="";var menuSize=null;var stickyHeight=0;var stickyMarginB=0;var currentMarginT=0;var topMargin=0;var vartop=0;$(window).scroll(function(event){var st=$(this).scrollTop();if(st>lastScrollTop){scrollDir="down"}else{scrollDir="up"}lastScrollTop=st});$.fn.stickUp=function(options){$(this).addClass("stuckMenu");var objn=0;if(options!=null){for(var o in options.parts){if(options.parts.hasOwnProperty(o)){content[objn]=options.parts[objn];objn++}}if(objn==0){console.log("error:needs arguments")}itemClass=options.itemClass;itemHover=options.itemHover;if(options.topMargin!=null){if(options.topMargin=="auto"){topMargin=parseInt($(".stuckMenu").css("margin-top"))}else{if(isNaN(options.topMargin)&&options.topMargin.search("px")>0){topMargin=parseInt(options.topMargin.replace("px",""))}else{if(!isNaN(parseInt(options.topMargin))){topMargin=parseInt(options.topMargin)}else{console.log("incorrect argument, ignored.");topMargin=0}}}}else{topMargin=0}menuSize=$("."+itemClass).size()}stickyHeight=parseInt($(this).height());stickyMarginB=parseInt($(this).css("margin-bottom"));currentMarginT=parseInt($(this).next().closest("div").css("margin-top"));vartop=parseInt($(this).offset().top)};$(document).on("scroll",function(){varscroll=parseInt($(document).scrollTop());if(menuSize!=null){for(var i=0;i<menuSize;i++){contentTop[i]=$("#"+content[i]+"").offset().top;function bottomView(i){contentView=$("#"+content[i]+"").height()*0.4;testView=contentTop[i]-contentView;if(varscroll>testView){$("."+itemClass).removeClass(itemHover);$("."+itemClass+":eq("+i+")").addClass(itemHover)}else{if(varscroll<50){$("."+itemClass).removeClass(itemHover);$("."+itemClass+":eq(0)").addClass(itemHover)}}}if(scrollDir=="down"&&varscroll>contentTop[i]-50&&varscroll<contentTop[i]+50){$("."+itemClass).removeClass(itemHover);$("."+itemClass+":eq("+i+")").addClass(itemHover)}if(scrollDir=="up"){bottomView(i)}}}if(vartop<varscroll+topMargin){$(".stuckMenu").addClass("isStuck");$(".stuckMenu").next().closest("div").css({"margin-top":stickyHeight+stickyMarginB+currentMarginT+"px"},10);$(".stuckMenu").css("position","fixed");$(".isStuck").css({top:"0px"},10,function(){})}if(varscroll+topMargin<vartop){$(".stuckMenu").removeClass("isStuck");$(".stuckMenu").next().closest("div").css({"margin-top":currentMarginT+"px"},10);$(".stuckMenu").css("position","relative")}})})});!function($){var Modal=function(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$backdrop=this.isShown=null;this.scrollbarWidth=0;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};Modal.VERSION="3.3.0";Modal.TRANSITION_DURATION=300;Modal.BACKDROP_TRANSITION_DURATION=150;Modal.DEFAULTS={backdrop:true,keyboard:true,show:true,};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)};Modal.prototype.show=function(_relatedTarget){var that=this;var e=$.Event("show.bs.modal",{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented()){return}this.isShown=true;this.checkScrollbar();this.$body.addClass("modal-open");this.setScrollbar();this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this));this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass("fade");if(!that.$element.parent().length){that.$element.appendTo(that.$body)}that.$element.show().scrollTop(0);if(transition){that.$element[0].offsetWidth}that.$element.addClass("in").attr("aria-hidden",false);that.enforceFocus();var e=$.Event("shown.bs.modal",{relatedTarget:_relatedTarget});transition?that.$element.find(".modal-dialog").one("bsTransitionEnd",function(){that.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger("focus").trigger(e)})};Modal.prototype.hide=function(e){if(e){e.preventDefault()}e=$.Event("hide.bs.modal");this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented()){return}this.isShown=false;this.escape();$(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()};Modal.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger("focus")}},this))};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",$.proxy(function(e){e.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass("modal-open");that.resetScrollbar();that.$element.trigger("hidden.bs.modal")})};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};Modal.prototype.backdrop=function(callback){var that=this;var animate=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",$.proxy(function(e){if(e.target!==e.currentTarget){return this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)}},this));if(doAnimate){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!callback){return}doAnimate?this.$backdrop.one("bsTransitionEnd",callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var callbackRemove=function(){that.removeBackdrop();callback&&callback()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else{if(callback){callback()}}}};Modal.prototype.checkScrollbar=function(){this.scrollbarWidth=this.measureScrollbar()};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css("padding-right")||0),10);if(this.scrollbarWidth){this.$body.css("padding-right",bodyPad+this.scrollbarWidth)}};Modal.prototype.resetScrollbar=function(){this.$body.css("padding-right","")};Modal.prototype.measureScrollbar=function(){if(document.body.clientWidth>=window.innerWidth){return 0}var scrollDiv=document.createElement("div");scrollDiv.className="modal-scrollbar-measure";this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth};function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this);var data=$this.data("bs.modal");var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=="object"&&option);if(!data){$this.data("bs.modal",(data=new Modal(this,options)))}if(typeof option=="string"){data[option](_relatedTarget)}else{if(options.show){data.show(_relatedTarget)}}})}var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this};$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this);var href=$this.attr("href");var $target=$($this.attr("data-target")||(href&&href.replace(/.*(?=#[^\s]+$)/,"")));var option=$target.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is("a")){e.preventDefault()}$target.one("show.bs.modal",function(showEvent){if(showEvent.isDefaultPrevented()){return}$target.one("hidden.bs.modal",function(){$this.is(":visible")&&$this.trigger("focus")})});Plugin.call($target,option,this)})}(window.jQuery);!function($){var backdrop=".dropdown-backdrop";var toggle='[data-toggle="dropdown"]';var Dropdown=function(element){$(element).on("click.bs.dropdown",this.toggle)};Dropdown.VERSION="3.3.5";function getParent($this){var selector=$this.attr("data-target");if(!selector){selector=$this.attr("href");selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,"")}var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}function clearMenus(e){if(e&&e.which===3){return $(backdrop).remove()}$(toggle).each(function(){var $this=$(this);var $parent=getParent($this);var relatedTarget={relatedTarget:this};if(!$parent.hasClass("open")){return}if(e&&e.type=="click"&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target)){return $parent.trigger(e=$.Event("hide.bs.dropdown",relatedTarget))}if(e.isDefaultPrevented()){return}$this.attr("aria-expanded","false");$parent.removeClass("open").trigger("hidden.bs.dropdown",relatedTarget)})}Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is(".disabled, :disabled")){return}var $parent=getParent($this);var isActive=$parent.hasClass("open");clearMenus();if(!isActive){if("ontouchstart" in document.documentElement&&!$parent.closest(".navbar-nav").length){$(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click",clearMenus)}var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event("show.bs.dropdown",relatedTarget));if(e.isDefaultPrevented()){return $this.trigger("focus").attr("aria-expanded","true")}$parent.toggleClass("open").trigger("shown.bs.dropdown",relatedTarget)}return false};Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName)){return}var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is(".disabled, :disabled")){return}var $parent=getParent($this);var isActive=$parent.hasClass("open");if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27){$parent.find(toggle).trigger("focus")}return;$this.trigger("click")}var desc=" li:not(.disabled):visible a";var $items=$parent.find(".dropdown-menu"+desc);if(!$items.length){return}var index=$items.index(e.target);if(e.which==38&&index>0){index--}if(e.which==40&&index<$items.length-1){index++}if(!~index){index=0}$items.eq(index).trigger("focus")};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.dropdown");if(!data){$this.data("bs.dropdown",(data=new Dropdown(this)))}if(typeof option=="string"){data[option].call($this)}})}var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this};$(document).on("click.bs.dropdown.data-api",clearMenus).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",toggle,Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api",toggle,Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",Dropdown.prototype.keydown)}(window.jQuery);$(function(){$(document).on("mouseenter",".dropDown",function(){$(this).addClass("hover")});$(document).on("mouseleave",".dropDown",function(){$(this).removeClass("hover")});$(document).on("mouseenter",".dropDown_hover",function(){$(this).addClass("open")});$(document).on("mouseleave",".dropDown_hover",function(){$(this).removeClass("open")});$(document).on("click",".dropDown-menu li a",function(){$(".dropDown").removeClass("open")});$(document).on("mouseenter",".menu > li",function(){$(this).addClass("open")});$(document).on("mouseleave",".menu > li",function(){$(this).removeClass("open")})});!function($){function transitionEnd(){var el=document.createElement("bootstrap");var transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}return false}$.fn.emulateTransitionEnd=function(duration){var called=false;var $el=this;$(this).one("bsTransitionEnd",function(){called=true});var callback=function(){if(!called){$($el).trigger($.support.transition.end)}};setTimeout(callback,duration);return this};$(function(){$.support.transition=transitionEnd();if(!$.support.transition){return}$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this)){return e.handleObj.handler.apply(this,arguments)}}}})}(window.jQuery);!function($){var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",element,options)};Tooltip.VERSION="3.3.0";Tooltip.TRANSITION_DURATION=150;Tooltip.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false,viewport:{selector:"body",padding:0}};Tooltip.prototype.init=function(type,element,options){this.enabled=true;this.type=type;this.$element=$(element);this.options=this.getOptions(options);this.$viewport=this.options.viewport&&$(this.options.viewport.selector||this.options.viewport);var triggers=this.options.trigger.split(" ");for(var i=triggers.length;i--;){var trigger=triggers[i];if(trigger=="click"){this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this))}else{if(trigger!="manual"){var eventIn=trigger=="hover"?"mouseenter":"focusin";var eventOut=trigger=="hover"?"mouseleave":"focusout";this.$element.on(eventIn+"."+this.type,this.options.selector,$.proxy(this.enter,this));this.$element.on(eventOut+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}}this.options.selector?(this._options=$.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS};Tooltip.prototype.getOptions=function(options){options=$.extend({},this.getDefaults(),this.$element.data(),options);if(options.delay&&typeof options.delay=="number"){options.delay={show:options.delay,hide:options.delay}}return options};Tooltip.prototype.getDelegateOptions=function(){var options={};var defaults=this.getDefaults();this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value){options[key]=value}});return options};Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data("bs."+this.type);if(self&&self.$tip&&self.$tip.is(":visible")){self.hoverState="in";return}if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data("bs."+this.type,self)}clearTimeout(self.timeout);self.hoverState="in";if(!self.options.delay||!self.options.delay.show){return self.show()}self.timeout=setTimeout(function(){if(self.hoverState=="in"){self.show()}},self.options.delay.show)};Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget).data("bs."+this.type);if(!self){self=new this.constructor(obj.currentTarget,this.getDelegateOptions());$(obj.currentTarget).data("bs."+this.type,self)}clearTimeout(self.timeout);self.hoverState="out";if(!self.options.delay||!self.options.delay.hide){return self.hide()}self.timeout=setTimeout(function(){if(self.hoverState=="out"){self.hide()}},self.options.delay.hide)};Tooltip.prototype.show=function(){var e=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var inDom=$.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!inDom){return}var that=this;var $tip=this.tip();var tipId=this.getUID(this.type);this.setContent();$tip.attr("id",tipId);this.$element.attr("aria-describedby",tipId);if(this.options.animation){$tip.addClass("fade")}var placement=typeof this.options.placement=="function"?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement;var autoToken=/\s?auto?\s?/i;var autoPlace=autoToken.test(placement);if(autoPlace){placement=placement.replace(autoToken,"")||"top"}$tip.detach().css({top:0,left:0,display:"block"}).addClass(placement).data("bs."+this.type,this);this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition();var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(autoPlace){var orgPlacement=placement;var $container=this.options.container?$(this.options.container):this.$element.parent();var containerDim=this.getPosition($container);placement=placement=="bottom"&&pos.bottom+actualHeight>containerDim.bottom?"top":placement=="top"&&pos.top-actualHeight<containerDim.top?"bottom":placement=="right"&&pos.right+actualWidth>containerDim.width?"left":placement=="left"&&pos.left-actualWidth<containerDim.left?"right":placement;$tip.removeClass(orgPlacement).addClass(placement)}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement);var complete=function(){var prevHoverState=that.hoverState;that.$element.trigger("shown.bs."+that.type);that.hoverState=null;if(prevHoverState=="out"){that.leave(that)}};$.support.transition&&this.$tip.hasClass("fade")?$tip.one("bsTransitionEnd",complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete()}};Tooltip.prototype.applyPlacement=function(offset,placement){var $tip=this.tip();var width=$tip[0].offsetWidth;var height=$tip[0].offsetHeight;var marginTop=parseInt($tip.css("margin-top"),10);var marginLeft=parseInt($tip.css("margin-left"),10);if(isNaN(marginTop)){marginTop=0}if(isNaN(marginLeft)){marginLeft=0}offset.top=offset.top+marginTop;offset.left=offset.left+marginLeft;$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0);$tip.addClass("in");var actualWidth=$tip[0].offsetWidth;var actualHeight=$tip[0].offsetHeight;if(placement=="top"&&actualHeight!=height){offset.top=offset.top+height-actualHeight}var delta=this.getViewportAdjustedDelta(placement,offset,actualWidth,actualHeight);if(delta.left){offset.left+=delta.left}else{offset.top+=delta.top}var isVertical=/top|bottom/.test(placement);var arrowDelta=isVertical?delta.left*2-width+actualWidth:delta.top*2-height+actualHeight;var arrowOffsetPosition=isVertical?"offsetWidth":"offsetHeight";$tip.offset(offset);this.replaceArrow(arrowDelta,$tip[0][arrowOffsetPosition],isVertical)};Tooltip.prototype.replaceArrow=function(delta,dimension,isHorizontal){this.arrow().css(isHorizontal?"left":"top",50*(1-delta/dimension)+"%").css(isHorizontal?"top":"left","")};Tooltip.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();$tip.find(".tooltip-inner")[this.options.html?"html":"text"](title);$tip.removeClass("fade in top bottom left right")};Tooltip.prototype.hide=function(callback){var that=this;var $tip=this.tip();var e=$.Event("hide.bs."+this.type);function complete(){if(that.hoverState!="in"){$tip.detach()}that.$element.removeAttr("aria-describedby").trigger("hidden.bs."+that.type);callback&&callback()}this.$element.trigger(e);if(e.isDefaultPrevented()){return}$tip.removeClass("in");$.support.transition&&this.$tip.hasClass("fade")?$tip.one("bsTransitionEnd",complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION):complete();this.hoverState=null;return this};Tooltip.prototype.fixTitle=function(){var $e=this.$element;if($e.attr("title")||typeof($e.attr("data-original-title"))!="string"){$e.attr("data-original-title",$e.attr("title")||"").attr("title","")}};Tooltip.prototype.hasContent=function(){return this.getTitle()};Tooltip.prototype.getPosition=function($element){$element=$element||this.$element;var el=$element[0];var isBody=el.tagName=="BODY";var elRect=el.getBoundingClientRect();if(elRect.width==null){elRect=$.extend({},elRect,{width:elRect.right-elRect.left,height:elRect.bottom-elRect.top})}var elOffset=isBody?{top:0,left:0}:$element.offset();var scroll={scroll:isBody?document.documentElement.scrollTop||document.body.scrollTop:$element.scrollTop()};var outerDims=isBody?{width:$(window).width(),height:$(window).height()}:null;return $.extend({},elRect,scroll,outerDims,elOffset)};Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return placement=="bottom"?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:placement=="top"?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:placement=="left"?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}};Tooltip.prototype.getViewportAdjustedDelta=function(placement,pos,actualWidth,actualHeight){var delta={top:0,left:0};if(!this.$viewport){return delta}var viewportPadding=this.options.viewport&&this.options.viewport.padding||0;var viewportDimensions=this.getPosition(this.$viewport);if(/right|left/.test(placement)){var topEdgeOffset=pos.top-viewportPadding-viewportDimensions.scroll;var bottomEdgeOffset=pos.top+viewportPadding-viewportDimensions.scroll+actualHeight;if(topEdgeOffset<viewportDimensions.top){delta.top=viewportDimensions.top-topEdgeOffset}else{if(bottomEdgeOffset>viewportDimensions.top+viewportDimensions.height){delta.top=viewportDimensions.top+viewportDimensions.height-bottomEdgeOffset}}}else{var leftEdgeOffset=pos.left-viewportPadding;var rightEdgeOffset=pos.left+viewportPadding+actualWidth;if(leftEdgeOffset<viewportDimensions.left){delta.left=viewportDimensions.left-leftEdgeOffset}else{if(rightEdgeOffset>viewportDimensions.width){delta.left=viewportDimensions.left+viewportDimensions.width-rightEdgeOffset}}}return delta};Tooltip.prototype.getTitle=function(){var title;var $e=this.$element;var o=this.options;title=$e.attr("data-original-title")||(typeof o.title=="function"?o.title.call($e[0]):o.title);return title};Tooltip.prototype.getUID=function(prefix){do{prefix+=~~(Math.random()*1000000)}while(document.getElementById(prefix));return prefix};Tooltip.prototype.tip=function(){return(this.$tip=this.$tip||$(this.options.template))};Tooltip.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow"))};Tooltip.prototype.enable=function(){this.enabled=true};Tooltip.prototype.disable=function(){this.enabled=false};Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled};Tooltip.prototype.toggle=function(e){var self=this;if(e){self=$(e.currentTarget).data("bs."+this.type);if(!self){self=new this.constructor(e.currentTarget,this.getDelegateOptions());$(e.currentTarget).data("bs."+this.type,self)}}self.tip().hasClass("in")?self.leave(self):self.enter(self)};Tooltip.prototype.destroy=function(){var that=this;clearTimeout(this.timeout);this.hide(function(){that.$element.off("."+that.type).removeData("bs."+that.type)})};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.tooltip");var options=typeof option=="object"&&option;var selector=options&&options.selector;if(!data&&option=="destroy"){return}if(selector){if(!data){$this.data("bs.tooltip",(data={}))}if(!data[selector]){data[selector]=new Tooltip(this,options)}}else{if(!data){$this.data("bs.tooltip",(data=new Tooltip(this,options)))}}if(typeof option=="string"){data[option]()}})}var old=$.fn.tooltip;$.fn.tooltip=Plugin;$.fn.tooltip.Constructor=Tooltip;$.fn.tooltip.noConflict=function(){$.fn.tooltip=old;return this}}(window.jQuery);$(function(){$("[data-toggle='tooltip']").tooltip()});!function($){var Popover=function(element,options){this.init("popover",element,options)};if(!$.fn.tooltip){throw new Error("Popover requires tooltip.js")}Popover.VERSION="3.3.0";Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype);Popover.prototype.constructor=Popover;Popover.prototype.getDefaults=function(){return Popover.DEFAULTS};Popover.prototype.setContent=function(){var $tip=this.tip();var title=this.getTitle();var content=this.getContent();$tip.find(".popover-title")[this.options.html?"html":"text"](title);$tip.find(".popover-content").children().detach().end()[this.options.html?(typeof content=="string"?"html":"append"):"text"](content);$tip.removeClass("fade top bottom left right in");if(!$tip.find(".popover-title").html()){$tip.find(".popover-title").hide()}};Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()};Popover.prototype.getContent=function(){var $e=this.$element;var o=this.options;return $e.attr("data-content")||(typeof o.content=="function"?o.content.call($e[0]):o.content)};Popover.prototype.arrow=function(){return(this.$arrow=this.$arrow||this.tip().find(".arrow"))};Popover.prototype.tip=function(){if(!this.$tip){this.$tip=$(this.options.template)}return this.$tip};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.popover");var options=typeof option=="object"&&option;var selector=options&&options.selector;if(!data&&option=="destroy"){return}if(selector){if(!data){$this.data("bs.popover",(data={}))}if(!data[selector]){data[selector]=new Popover(this,options)}}else{if(!data){$this.data("bs.popover",(data=new Popover(this,options)))}}if(typeof option=="string"){data[option]()}})}var old=$.fn.popover;$.fn.popover=Plugin;$.fn.popover.Constructor=Popover;$.fn.popover.noConflict=function(){$.fn.popover=old;return this}}(window.jQuery);$(function(){$("[data-toggle='popover']").popover()});!function($){var dismiss='[data-dismiss="alert"]';var Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.VERSION="3.3.0";Alert.TRANSITION_DURATION=150;Alert.prototype.close=function(e){var $this=$(this);var selector=$this.attr("data-target");if(!selector){selector=$this.attr("href");selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")}var $parent=$(selector);if(e){e.preventDefault()}if(!$parent.length){$parent=$this.closest(".alert")}$parent.trigger(e=$.Event("close.bs.alert"));if(e.isDefaultPrevented()){return}$parent.removeClass("in");function removeElement(){$parent.detach().trigger("closed.bs.alert").remove()}$.support.transition&&$parent.hasClass("fade")?$parent.one("bsTransitionEnd",removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION):removeElement()};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.alert");if(!data){$this.data("bs.alert",(data=new Alert(this)))}if(typeof option=="string"){data[option].call($this)}})}var old=$.fn.alert;$.fn.alert=Plugin;$.fn.alert.Constructor=Alert;$.fn.alert.noConflict=function(){$.fn.alert=old;return this};$(document).on("click.bs.alert.data-api",dismiss,Alert.prototype.close)}(window.jQuery);(function(root,factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof module==="object"&&module.exports){var jQuery;try{jQuery=require("jquery")}catch(err){jQuery=null}module.exports=factory(jQuery)}else{root.Slider=factory(root.jQuery)}}}(this,function($){var Slider;(function($){var slice=Array.prototype.slice;function noop(){}function defineBridget($){if(!$){return}function addOptionMethod(PluginClass){if(PluginClass.prototype.option){return}PluginClass.prototype.option=function(opts){if(!$.isPlainObject(opts)){return}this.options=$.extend(true,this.options,opts)}}var logError=typeof console==="undefined"?noop:function(message){console.error(message)};function bridge(namespace,PluginClass){$.fn[namespace]=function(options){if(typeof options==="string"){var args=slice.call(arguments,1);for(var i=0,len=this.length;i<len;i++){var elem=this[i];var instance=$.data(elem,namespace);if(!instance){logError("cannot call methods on "+namespace+" prior to initialization; "+"attempted to call '"+options+"'");continue}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for "+namespace+" instance");continue}var returnValue=instance[options].apply(instance,args);if(returnValue!==undefined&&returnValue!==instance){return returnValue}}return this}else{var objects=this.map(function(){var instance=$.data(this,namespace);if(instance){instance.option(options);instance._init()}else{instance=new PluginClass(this,options);$.data(this,namespace,instance)}return $(this)});if(!objects||objects.length>1){return objects}else{return objects[0]}}}}$.bridget=function(namespace,PluginClass){addOptionMethod(PluginClass);bridge(namespace,PluginClass)};return $.bridget}defineBridget($)})($);(function($){var ErrorMsgs={formatInvalidInputErrorMsg:function(input){return"Invalid input value '"+input+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"};Slider=function(element,options){createNewSlider.call(this,element,options);return this};function createNewSlider(element,options){if(typeof element==="string"){this.element=document.querySelector(element)}else{if(element instanceof HTMLElement){this.element=element}}var origWidth=this.element.style.width;var updateSlider=false;var parent=this.element.parentNode;var sliderTrackSelection;var sliderMinHandle;var sliderMaxHandle;if(this.sliderElem){updateSlider=true}else{this.sliderElem=document.createElement("div");this.sliderElem.className="slider";var sliderTrack=document.createElement("div");sliderTrack.className="slider-track";sliderTrackSelection=document.createElement("div");sliderTrackSelection.className="slider-selection";sliderMinHandle=document.createElement("div");sliderMinHandle.className="slider-handle min-slider-handle";sliderMaxHandle=document.createElement("div");sliderMaxHandle.className="slider-handle max-slider-handle";sliderTrack.appendChild(sliderTrackSelection);sliderTrack.appendChild(sliderMinHandle);sliderTrack.appendChild(sliderMaxHandle);var createAndAppendTooltipSubElements=function(tooltipElem){var arrow=document.createElement("div");arrow.className="tooltip-arrow";var inner=document.createElement("div");inner.className="tooltip-inner";tooltipElem.appendChild(arrow);tooltipElem.appendChild(inner)};var sliderTooltip=document.createElement("div");sliderTooltip.className="tooltip tooltip-main";createAndAppendTooltipSubElements(sliderTooltip);var sliderTooltipMin=document.createElement("div");sliderTooltipMin.className="tooltip tooltip-min";createAndAppendTooltipSubElements(sliderTooltipMin);var sliderTooltipMax=document.createElement("div");sliderTooltipMax.className="tooltip tooltip-max";createAndAppendTooltipSubElements(sliderTooltipMax);this.sliderElem.appendChild(sliderTrack);this.sliderElem.appendChild(sliderTooltip);this.sliderElem.appendChild(sliderTooltipMin);this.sliderElem.appendChild(sliderTooltipMax);parent.insertBefore(this.sliderElem,this.element);this.element.style.display="none"}if($){this.$element=$(this.element);this.$sliderElem=$(this.sliderElem)}options=options?options:{};var optionTypes=Object.keys(this.defaultOptions);for(var i=0;i<optionTypes.length;i++){var optName=optionTypes[i];var val=options[optName];val=(typeof val!=="undefined")?val:getDataAttrib(this.element,optName);val=(val!==null)?val:this.defaultOptions[optName];if(!this.options){this.options={}}this.options[optName]=val}function getDataAttrib(element,optName){var dataName="data-slider-"+optName;var dataValString=element.getAttribute(dataName);try{return JSON.parse(dataValString)}catch(err){return dataValString}}this.eventToCallbackMap={};this.sliderElem.id=this.options.id;this.touchCapable="ontouchstart" in window||(window.DocumentTouch&&document instanceof window.DocumentTouch);this.tooltip=this.sliderElem.querySelector(".tooltip-main");this.tooltipInner=this.tooltip.querySelector(".tooltip-inner");this.tooltip_min=this.sliderElem.querySelector(".tooltip-min");this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner");this.tooltip_max=this.sliderElem.querySelector(".tooltip-max");this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner");if(updateSlider===true){this._removeClass(this.sliderElem,"slider-horizontal");this._removeClass(this.sliderElem,"slider-vertical");this._removeClass(this.tooltip,"hide");this._removeClass(this.tooltip_min,"hide");this._removeClass(this.tooltip_max,"hide");["left","top","width","height"].forEach(function(prop){this._removeProperty(this.trackSelection,prop)},this);[this.handle1,this.handle2].forEach(function(handle){this._removeProperty(handle,"left");this._removeProperty(handle,"top")},this);[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(tooltip){this._removeProperty(tooltip,"left");this._removeProperty(tooltip,"top");this._removeProperty(tooltip,"margin-left");this._removeProperty(tooltip,"margin-top");this._removeClass(tooltip,"right");this._removeClass(tooltip,"top")},this)}if(this.options.orientation==="vertical"){this._addClass(this.sliderElem,"slider-vertical");this.stylePos="top";this.mousePos="pageY";this.sizePos="offsetHeight";this._addClass(this.tooltip,"right");this.tooltip.style.left="100%";this._addClass(this.tooltip_min,"right");this.tooltip_min.style.left="100%";this._addClass(this.tooltip_max,"right");this.tooltip_max.style.left="100%"}else{this._addClass(this.sliderElem,"slider-horizontal");this.sliderElem.style.width=origWidth;this.options.orientation="horizontal";this.stylePos="left";this.mousePos="pageX";this.sizePos="offsetWidth";this._addClass(this.tooltip,"top");this.tooltip.style.top=-this.tooltip.outerHeight-14+"px";this._addClass(this.tooltip_min,"top");this.tooltip_min.style.top=-this.tooltip_min.outerHeight-14+"px";this._addClass(this.tooltip_max,"top");this.tooltip_max.style.top=-this.tooltip_max.outerHeight-14+"px"}if(this.options.value instanceof Array){this.options.range=true}else{if(this.options.range){this.options.value=[this.options.value,this.options.max]}}this.trackSelection=sliderTrackSelection||this.trackSelection;if(this.options.selection==="none"){this._addClass(this.trackSelection,"hide")}this.handle1=sliderMinHandle||this.handle1;this.handle2=sliderMaxHandle||this.handle2;if(updateSlider===true){this._removeClass(this.handle1,"round triangle");this._removeClass(this.handle2,"round triangle hide")}var availableHandleModifiers=["round","triangle","custom"];var isValidHandleType=availableHandleModifiers.indexOf(this.options.handle)!==-1;if(isValidHandleType){this._addClass(this.handle1,this.options.handle);this._addClass(this.handle2,this.options.handle)}this.offset=this._offset(this.sliderElem);this.size=this.sliderElem[this.sizePos];this.setValue(this.options.value);this.handle1Keydown=this._keydown.bind(this,0);this.handle1.addEventListener("keydown",this.handle1Keydown,false);this.handle2Keydown=this._keydown.bind(this,1);this.handle2.addEventListener("keydown",this.handle2Keydown,false);if(this.touchCapable){this.mousedown=this._mousedown.bind(this);this.sliderElem.addEventListener("touchstart",this.mousedown,false)}else{this.mousedown=this._mousedown.bind(this);this.sliderElem.addEventListener("mousedown",this.mousedown,false)}if(this.options.tooltip==="hide"){this._addClass(this.tooltip,"hide");this._addClass(this.tooltip_min,"hide");this._addClass(this.tooltip_max,"hide")}else{if(this.options.tooltip==="always"){this._showTooltip();this._alwaysShowTooltip=true}else{this.showTooltip=this._showTooltip.bind(this);this.hideTooltip=this._hideTooltip.bind(this);this.sliderElem.addEventListener("mouseenter",this.showTooltip,false);this.sliderElem.addEventListener("mouseleave",this.hideTooltip,false);this.handle1.addEventListener("focus",this.showTooltip,false);this.handle1.addEventListener("blur",this.hideTooltip,false);this.handle2.addEventListener("focus",this.showTooltip,false);this.handle2.addEventListener("blur",this.hideTooltip,false)}}if(this.options.enabled){this.enable()}else{this.disable()}}Slider.prototype={_init:function(){},constructor:Slider,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:false,selection:"before",tooltip:"show",tooltip_split:false,handle:"round",reversed:false,enabled:true,formatter:function(val){if(val instanceof Array){return val[0]+" : "+val[1]}else{return val}},natural_arrow_keys:false},over:false,inDrag:false,getValue:function(){if(this.options.range){return this.options.value}return this.options.value[0]},setValue:function(val,triggerSlideEvent){if(!val){val=0}var oldValue=this.getValue();this.options.value=this._validateInputValue(val);var applyPrecision=this._applyPrecision.bind(this);if(this.options.range){this.options.value[0]=applyPrecision(this.options.value[0]);this.options.value[1]=applyPrecision(this.options.value[1]);this.options.value[0]=Math.max(this.options.min,Math.min(this.options.max,this.options.value[0]));this.options.value[1]=Math.max(this.options.min,Math.min(this.options.max,this.options.value[1]))}else{this.options.value=applyPrecision(this.options.value);this.options.value=[Math.max(this.options.min,Math.min(this.options.max,this.options.value))];this._addClass(this.handle2,"hide");if(this.options.selection==="after"){this.options.value[1]=this.options.max}else{this.options.value[1]=this.options.min}}this.diff=this.options.max-this.options.min;if(this.diff>0){this.percentage=[(this.options.value[0]-this.options.min)*100/this.diff,(this.options.value[1]-this.options.min)*100/this.diff,this.options.step*100/this.diff]}else{this.percentage=[0,0,100]}this._layout();var newValue=this.options.range?this.options.value:this.options.value[0];if(triggerSlideEvent===true){this._trigger("slide",newValue)}if(oldValue!==newValue){this._trigger("change",{oldValue:oldValue,newValue:newValue})}this._setDataVal(newValue);return this},destroy:function(){this._removeSliderEventHandlers();this.sliderElem.parentNode.removeChild(this.sliderElem);this.element.style.display="";this._cleanUpEventCallbacksMap();this.element.removeAttribute("data");if($){this._unbindJQueryEventHandlers();this.$element.removeData("slider")}},disable:function(){this.options.enabled=false;this.handle1.removeAttribute("tabindex");this.handle2.removeAttribute("tabindex");this._addClass(this.sliderElem,"slider-disabled");this._trigger("slideDisabled");return this},enable:function(){this.options.enabled=true;this.handle1.setAttribute("tabindex",0);this.handle2.setAttribute("tabindex",0);this._removeClass(this.sliderElem,"slider-disabled");this._trigger("slideEnabled");return this},toggle:function(){if(this.options.enabled){this.disable()}else{this.enable()}return this},isEnabled:function(){return this.options.enabled},on:function(evt,callback){if($){this.$element.on(evt,callback);this.$sliderElem.on(evt,callback)}else{this._bindNonQueryEventHandler(evt,callback)}return this},getAttribute:function(attribute){if(attribute){return this.options[attribute]}else{return this.options}},setAttribute:function(attribute,value){this.options[attribute]=value;return this},refresh:function(){this._removeSliderEventHandlers();createNewSlider.call(this,this.element,this.options);if($){$.data(this.element,"slider",this)}return this},relayout:function(){this._layout();return this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,false);this.handle1.removeEventListener("focus",this.showTooltip,false);this.handle1.removeEventListener("blur",this.hideTooltip,false);this.handle2.removeEventListener("keydown",this.handle2Keydown,false);this.handle2.removeEventListener("focus",this.handle2Keydown,false);this.handle2.removeEventListener("blur",this.handle2Keydown,false);this.sliderElem.removeEventListener("mouseenter",this.showTooltip,false);this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,false);this.sliderElem.removeEventListener("touchstart",this.mousedown,false);this.sliderElem.removeEventListener("mousedown",this.mousedown,false)},_bindNonQueryEventHandler:function(evt,callback){if(this.eventToCallbackMap[evt]===undefined){this.eventToCallbackMap[evt]=[]}this.eventToCallbackMap[evt].push(callback)},_cleanUpEventCallbacksMap:function(){var eventNames=Object.keys(this.eventToCallbackMap);for(var i=0;i<eventNames.length;i++){var eventName=eventNames[i];this.eventToCallbackMap[eventName]=null}},_showTooltip:function(){if(this.options.tooltip_split===false){this._addClass(this.tooltip,"in")}else{this._addClass(this.tooltip_min,"in");this._addClass(this.tooltip_max,"in")}this.over=true},_hideTooltip:function(){if(this.inDrag===false&&this.alwaysShowTooltip!==true){this._removeClass(this.tooltip,"in");this._removeClass(this.tooltip_min,"in");this._removeClass(this.tooltip_max,"in")}this.over=false},_layout:function(){var positionPercentages;if(this.options.reversed){positionPercentages=[100-this.percentage[0],this.percentage[1]]}else{positionPercentages=[this.percentage[0],this.percentage[1]]}this.handle1.style[this.stylePos]=positionPercentages[0]+"%";this.handle2.style[this.stylePos]=positionPercentages[1]+"%";if(this.options.orientation==="vertical"){this.trackSelection.style.top=Math.min(positionPercentages[0],positionPercentages[1])+"%";this.trackSelection.style.height=Math.abs(positionPercentages[0]-positionPercentages[1])+"%"}else{this.trackSelection.style.left=Math.min(positionPercentages[0],positionPercentages[1])+"%";this.trackSelection.style.width=Math.abs(positionPercentages[0]-positionPercentages[1])+"%";var offset_min=this.tooltip_min.getBoundingClientRect();var offset_max=this.tooltip_max.getBoundingClientRect();if(offset_min.right>offset_max.left){this._removeClass(this.tooltip_max,"top");this._addClass(this.tooltip_max,"bottom");this.tooltip_max.style.top=18+"px"}else{this._removeClass(this.tooltip_max,"bottom");this._addClass(this.tooltip_max,"top");this.tooltip_max.style.top=this.tooltip_min.style.top}}var formattedTooltipVal;if(this.options.range){formattedTooltipVal=this.options.formatter(this.options.value);this._setText(this.tooltipInner,formattedTooltipVal);this.tooltip.style[this.stylePos]=(positionPercentages[1]+positionPercentages[0])/2+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}var innerTooltipMinText=this.options.formatter(this.options.value[0]);this._setText(this.tooltipInner_min,innerTooltipMinText);var innerTooltipMaxText=this.options.formatter(this.options.value[1]);this._setText(this.tooltipInner_max,innerTooltipMaxText);this.tooltip_min.style[this.stylePos]=positionPercentages[0]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px")}else{this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px")}this.tooltip_max.style[this.stylePos]=positionPercentages[1]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px")}else{this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}}else{formattedTooltipVal=this.options.formatter(this.options.value[0]);this._setText(this.tooltipInner,formattedTooltipVal);this.tooltip.style[this.stylePos]=positionPercentages[0]+"%";if(this.options.orientation==="vertical"){this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px")}else{this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px")}}},_removeProperty:function(element,prop){if(element.style.removeProperty){element.style.removeProperty(prop)}else{element.style.removeAttribute(prop)}},_mousedown:function(ev){if(!this.options.enabled){return false}this._triggerFocusOnHandle();this.offset=this._offset(this.sliderElem);this.size=this.sliderElem[this.sizePos];var percentage=this._getPercentage(ev);if(this.options.range){var diff1=Math.abs(this.percentage[0]-percentage);var diff2=Math.abs(this.percentage[1]-percentage);this.dragged=(diff1<diff2)?0:1}else{this.dragged=0}this.percentage[this.dragged]=this.options.reversed?100-percentage:percentage;this._layout();if(this.touchCapable){document.removeEventListener("touchmove",this.mousemove,false);document.removeEventListener("touchend",this.mouseup,false)}if(this.mousemove){document.removeEventListener("mousemove",this.mousemove,false)}if(this.mouseup){document.removeEventListener("mouseup",this.mouseup,false)}this.mousemove=this._mousemove.bind(this);this.mouseup=this._mouseup.bind(this);if(this.touchCapable){document.addEventListener("touchmove",this.mousemove,false);document.addEventListener("touchend",this.mouseup,false)}document.addEventListener("mousemove",this.mousemove,false);document.addEventListener("mouseup",this.mouseup,false);this.inDrag=true;var newValue=this._calculateValue();this._trigger("slideStart",newValue);this._setDataVal(newValue);this.setValue(newValue);this._pauseEvent(ev);return true},_triggerFocusOnHandle:function(handleIdx){if(handleIdx===0){this.handle1.focus()}if(handleIdx===1){this.handle2.focus()}},_keydown:function(handleIdx,ev){if(!this.options.enabled){return false}var dir;switch(ev.keyCode){case 37:case 40:dir=-1;break;case 39:case 38:dir=1;break}if(!dir){return}if(this.options.natural_arrow_keys){var ifVerticalAndNotReversed=(this.options.orientation==="vertical"&&!this.options.reversed);var ifHorizontalAndReversed=(this.options.orientation==="horizontal"&&this.options.reversed);if(ifVerticalAndNotReversed||ifHorizontalAndReversed){dir=dir*-1}}var oneStepValuePercentageChange=dir*this.percentage[2];var percentage=this.percentage[handleIdx]+oneStepValuePercentageChange;if(percentage>100){percentage=100}else{if(percentage<0){percentage=0}}this.dragged=handleIdx;this._adjustPercentageForRangeSliders(percentage);this.percentage[this.dragged]=percentage;this._layout();var val=this._calculateValue();this._trigger("slideStart",val);this._setDataVal(val);this.setValue(val,true);this._trigger("slideStop",val);this._setDataVal(val);this._pauseEvent(ev);return false},_pauseEvent:function(ev){if(ev.stopPropagation){ev.stopPropagation()}if(ev.preventDefault){ev.preventDefault()}ev.cancelBubble=true;ev.returnValue=false},_mousemove:function(ev){if(!this.options.enabled){return false}var percentage=this._getPercentage(ev);this._adjustPercentageForRangeSliders(percentage);this.percentage[this.dragged]=this.options.reversed?100-percentage:percentage;this._layout();var val=this._calculateValue();this.setValue(val,true);return false},_adjustPercentageForRangeSliders:function(percentage){if(this.options.range){if(this.dragged===0&&this.percentage[1]<percentage){this.percentage[0]=this.percentage[1];this.dragged=1}else{if(this.dragged===1&&this.percentage[0]>percentage){this.percentage[1]=this.percentage[0];this.dragged=0}}}},_mouseup:function(){if(!this.options.enabled){return false}if(this.touchCapable){document.removeEventListener("touchmove",this.mousemove,false);document.removeEventListener("touchend",this.mouseup,false)}document.removeEventListener("mousemove",this.mousemove,false);document.removeEventListener("mouseup",this.mouseup,false);this.inDrag=false;if(this.over===false){this._hideTooltip()}var val=this._calculateValue();this._layout();this._trigger("slideStop",val);this._setDataVal(val);return false},_calculateValue:function(){var val;if(this.options.range){val=[this.options.min,this.options.max];if(this.percentage[0]!==0){val[0]=(Math.max(this.options.min,this.options.min+Math.round((this.diff*this.percentage[0]/100)/this.options.step)*this.options.step));val[0]=this._applyPrecision(val[0])}if(this.percentage[1]!==100){val[1]=(Math.min(this.options.max,this.options.min+Math.round((this.diff*this.percentage[1]/100)/this.options.step)*this.options.step));val[1]=this._applyPrecision(val[1])}}else{val=(this.options.min+Math.round((this.diff*this.percentage[0]/100)/this.options.step)*this.options.step);if(val<this.options.min){val=this.options.min}else{if(val>this.options.max){val=this.options.max}}val=parseFloat(val);val=this._applyPrecision(val)}return val},_applyPrecision:function(val){var precision=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(val,precision)},_getNumDigitsAfterDecimalPlace:function(num){var match=(""+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);if(!match){return 0}return Math.max(0,(match[1]?match[1].length:0)-(match[2]?+match[2]:0))},_applyToFixedAndParseFloat:function(num,toFixedInput){var truncatedNum=num.toFixed(toFixedInput);return parseFloat(truncatedNum)},_getPercentage:function(ev){if(this.touchCapable&&(ev.type==="touchstart"||ev.type==="touchmove")){ev=ev.touches[0]}var percentage=(ev[this.mousePos]-this.offset[this.stylePos])*100/this.size;percentage=Math.round(percentage/this.percentage[2])*this.percentage[2];return Math.max(0,Math.min(100,percentage))},_validateInputValue:function(val){if(typeof val==="number"){return val}else{if(val instanceof Array){this._validateArray(val);return val}else{throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val))}}},_validateArray:function(val){for(var i=0;i<val.length;i++){var input=val[i];if(typeof input!=="number"){throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input))}}},_setDataVal:function(val){var value="value: '"+val+"'";this.element.setAttribute("data",value);this.element.setAttribute("value",val)},_trigger:function(evt,val){val=(val||val===0)?val:undefined;var callbackFnArray=this.eventToCallbackMap[evt];if(callbackFnArray&&callbackFnArray.length){for(var i=0;i<callbackFnArray.length;i++){var callbackFn=callbackFnArray[i];callbackFn(val)}}if($){this._triggerJQueryEvent(evt,val)}},_triggerJQueryEvent:function(evt,val){var eventData={type:evt,value:val};this.$element.trigger(eventData);this.$sliderElem.trigger(eventData)},_unbindJQueryEventHandlers:function(){this.$element.off();this.$sliderElem.off()},_setText:function(element,text){if(typeof element.innerText!=="undefined"){element.innerText=text}else{if(typeof element.textContent!=="undefined"){element.textContent=text}}},_removeClass:function(element,classString){var classes=classString.split(" ");var newClasses=element.className;for(var i=0;i<classes.length;i++){var classTag=classes[i];var regex=new RegExp("(?:\\s|^)"+classTag+"(?:\\s|$)");newClasses=newClasses.replace(regex," ")}element.className=newClasses.trim()},_addClass:function(element,classString){var classes=classString.split(" ");var newClasses=element.className;for(var i=0;i<classes.length;i++){var classTag=classes[i];var regex=new RegExp("(?:\\s|^)"+classTag+"(?:\\s|$)");var ifClassExists=regex.test(newClasses);if(!ifClassExists){newClasses+=" "+classTag}}element.className=newClasses.trim()},_offset:function(obj){var ol=0;var ot=0;if(obj.offsetParent){do{ol+=obj.offsetLeft;ot+=obj.offsetTop}while(obj=obj.offsetParent)}return{left:ol,top:ot}},_css:function(elementRef,styleName,value){if($){$.style(elementRef,styleName,value)}else{var style=styleName.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(all,letter){return letter.toUpperCase()});elementRef.style[style]=value}}};if($){var namespace=$.fn.slider?"bootstrapSlider":"slider";$.bridget(namespace,Slider)}})($);return Slider}));!(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{if(typeof exports==="object"){factory(require("jquery"))}else{factory(jQuery)}}}(function($,undefined){if(!("indexOf" in Array.prototype)){Array.prototype.indexOf=function(find,i){if(i===undefined){i=0}if(i<0){i+=this.length}if(i<0){i=0}for(var n=this.length;i<n;i++){if(i in this&&this[i]===find){return i}}return -1}}function elementOrParentIsFixed(element){var $element=$(element);var $checkElements=$element.add($element.parents());var isFixed=false;$checkElements.each(function(){if($(this).css("position")==="fixed"){isFixed=true;return false}});return isFixed}function UTCDate(){return new Date(Date.UTC.apply(Date,arguments))}function UTCToday(){var today=new Date();return UTCDate(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate(),today.getUTCHours(),today.getUTCMinutes(),today.getUTCSeconds(),0)}var Datetimepicker=function(element,options){var that=this;this.element=$(element);this.container=options.container||"body";this.language=options.language||this.element.data("date-language")||"en";this.language=this.language in dates?this.language:this.language.split("-")[0];this.language=this.language in dates?this.language:"en";this.isRTL=dates[this.language].rtl||false;this.formatType=options.formatType||this.element.data("format-type")||"standard";this.format=DPGlobal.parseFormat(options.format||this.element.data("date-format")||dates[this.language].format||DPGlobal.getDefaultFormat(this.formatType,"input"),this.formatType);this.isInline=false;this.isVisible=false;this.isInput=this.element.is("input");this.fontAwesome=options.fontAwesome||this.element.data("font-awesome")||false;this.bootcssVer=options.bootcssVer||(this.isInput?(this.element.is(".form-control")?3:2):(this.bootcssVer=this.element.is(".input-group")?3:2));this.component=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent():this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()):false;this.componentReset=this.element.is(".date")?(this.bootcssVer==3?this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()):false;this.hasInput=this.component&&this.element.find("input").length;if(this.component&&this.component.length===0){this.component=false}this.linkField=options.linkField||this.element.data("link-field")||false;this.linkFormat=DPGlobal.parseFormat(options.linkFormat||this.element.data("link-format")||DPGlobal.getDefaultFormat(this.formatType,"link"),this.formatType);this.minuteStep=options.minuteStep||this.element.data("minute-step")||5;this.pickerPosition=options.pickerPosition||this.element.data("picker-position")||"bottom-right";this.showMeridian=options.showMeridian||this.element.data("show-meridian")||false;this.initialDate=options.initialDate||new Date();this.zIndex=options.zIndex||this.element.data("z-index")||undefined;this.title=typeof options.title==="undefined"?false:options.title;this.defaultTimeZone=(new Date).toString().split("(")[1].slice(0,-1);this.timezone=options.timezone||this.defaultTimeZone;this.icons={leftArrow:this.fontAwesome?"fa-arrow-left":(this.bootcssVer===3?"glyphicon-arrow-left":"icon-arrow-left"),rightArrow:this.fontAwesome?"fa-arrow-right":(this.bootcssVer===3?"glyphicon-arrow-right":"icon-arrow-right")};this.icontype=this.fontAwesome?"fa":"glyphicon";this._attachEvents();this.clickedOutside=function(e){if($(e.target).closest(".datetimepicker").length===0){that.hide()}};this.formatViewType="datetime";if("formatViewType" in options){this.formatViewType=options.formatViewType}else{if("formatViewType" in this.element.data()){this.formatViewType=this.element.data("formatViewType")}}this.minView=0;if("minView" in options){this.minView=options.minView}else{if("minView" in this.element.data()){this.minView=this.element.data("min-view")}}this.minView=DPGlobal.convertViewMode(this.minView);this.maxView=DPGlobal.modes.length-1;if("maxView" in options){this.maxView=options.maxView}else{if("maxView" in this.element.data()){this.maxView=this.element.data("max-view")}}this.maxView=DPGlobal.convertViewMode(this.maxView);this.wheelViewModeNavigation=false;if("wheelViewModeNavigation" in options){this.wheelViewModeNavigation=options.wheelViewModeNavigation}else{if("wheelViewModeNavigation" in this.element.data()){this.wheelViewModeNavigation=this.element.data("view-mode-wheel-navigation")}}this.wheelViewModeNavigationInverseDirection=false;if("wheelViewModeNavigationInverseDirection" in options){this.wheelViewModeNavigationInverseDirection=options.wheelViewModeNavigationInverseDirection}else{if("wheelViewModeNavigationInverseDirection" in this.element.data()){this.wheelViewModeNavigationInverseDirection=this.element.data("view-mode-wheel-navigation-inverse-dir")}}this.wheelViewModeNavigationDelay=100;if("wheelViewModeNavigationDelay" in options){this.wheelViewModeNavigationDelay=options.wheelViewModeNavigationDelay}else{if("wheelViewModeNavigationDelay" in this.element.data()){this.wheelViewModeNavigationDelay=this.element.data("view-mode-wheel-navigation-delay")}}this.startViewMode=2;if("startView" in options){this.startViewMode=options.startView}else{if("startView" in this.element.data()){this.startViewMode=this.element.data("start-view")}}this.startViewMode=DPGlobal.convertViewMode(this.startViewMode);this.viewMode=this.startViewMode;this.viewSelect=this.minView;if("viewSelect" in options){this.viewSelect=options.viewSelect}else{if("viewSelect" in this.element.data()){this.viewSelect=this.element.data("view-select")}}this.viewSelect=DPGlobal.convertViewMode(this.viewSelect);this.forceParse=true;if("forceParse" in options){this.forceParse=options.forceParse}else{if("dateForceParse" in this.element.data()){this.forceParse=this.element.data("date-force-parse")}}var template=this.bootcssVer===3?DPGlobal.templateV3:DPGlobal.template;while(template.indexOf("{iconType}")!==-1){template=template.replace("{iconType}",this.icontype)}while(template.indexOf("{leftArrow}")!==-1){template=template.replace("{leftArrow}",this.icons.leftArrow)}while(template.indexOf("{rightArrow}")!==-1){template=template.replace("{rightArrow}",this.icons.rightArrow)}this.picker=$(template).appendTo(this.isInline?this.element:this.container).on({click:$.proxy(this.click,this),mousedown:$.proxy(this.mousedown,this)});if(this.wheelViewModeNavigation){if($.fn.mousewheel){this.picker.on({mousewheel:$.proxy(this.mousewheel,this)})}else{console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")}}if(this.isInline){this.picker.addClass("datetimepicker-inline")}else{this.picker.addClass("datetimepicker-dropdown-"+this.pickerPosition+" dropdown-menu")}if(this.isRTL){this.picker.addClass("datetimepicker-rtl");var selector=this.bootcssVer===3?".prev span, .next span":".prev i, .next i";this.picker.find(selector).toggleClass(this.icons.leftArrow+" "+this.icons.rightArrow)}$(document).on("mousedown",this.clickedOutside);this.autoclose=false;if("autoclose" in options){this.autoclose=options.autoclose}else{if("dateAutoclose" in this.element.data()){this.autoclose=this.element.data("date-autoclose")}}this.keyboardNavigation=true;if("keyboardNavigation" in options){this.keyboardNavigation=options.keyboardNavigation}else{if("dateKeyboardNavigation" in this.element.data()){this.keyboardNavigation=this.element.data("date-keyboard-navigation")}}this.todayBtn=(options.todayBtn||this.element.data("date-today-btn")||false);this.clearBtn=(options.clearBtn||this.element.data("date-clear-btn")||false);this.todayHighlight=(options.todayHighlight||this.element.data("date-today-highlight")||false);this.weekStart=((options.weekStart||this.element.data("date-weekstart")||dates[this.language].weekStart||0)%7);this.weekEnd=((this.weekStart+6)%7);this.startDate=-Infinity;this.endDate=Infinity;this.datesDisabled=[];this.daysOfWeekDisabled=[];this.setStartDate(options.startDate||this.element.data("date-startdate"));this.setEndDate(options.endDate||this.element.data("date-enddate"));this.setDatesDisabled(options.datesDisabled||this.element.data("date-dates-disabled"));this.setDaysOfWeekDisabled(options.daysOfWeekDisabled||this.element.data("date-days-of-week-disabled"));this.setMinutesDisabled(options.minutesDisabled||this.element.data("date-minute-disabled"));this.setHoursDisabled(options.hoursDisabled||this.element.data("date-hour-disabled"));this.fillDow();this.fillMonths();this.update();this.showMode();if(this.isInline){this.show()}};Datetimepicker.prototype={constructor:Datetimepicker,_events:[],_attachEvents:function(){this._detachEvents();if(this.isInput){this._events=[[this.element,{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}]]}else{if(this.component&&this.hasInput){this._events=[[this.element.find("input"),{focus:$.proxy(this.show,this),keyup:$.proxy(this.update,this),keydown:$.proxy(this.keydown,this)}],[this.component,{click:$.proxy(this.show,this)}]];if(this.componentReset){this._events.push([this.componentReset,{click:$.proxy(this.reset,this)}])}}else{if(this.element.is("div")){this.isInline=true}else{this._events=[[this.element,{click:$.proxy(this.show,this)}]]}}}for(var i=0,el,ev;i<this._events.length;i++){el=this._events[i][0];ev=this._events[i][1];el.on(ev)}},_detachEvents:function(){for(var i=0,el,ev;i<this._events.length;i++){el=this._events[i][0];ev=this._events[i][1];el.off(ev)}this._events=[]},show:function(e){this.picker.show();this.height=this.component?this.component.outerHeight():this.element.outerHeight();if(this.forceParse){this.update()}this.place();$(window).on("resize",$.proxy(this.place,this));if(e){e.stopPropagation();e.preventDefault()}this.isVisible=true;this.element.trigger({type:"show",date:this.date})},hide:function(e){if(!this.isVisible){return}if(this.isInline){return}this.picker.hide();$(window).off("resize",this.place);this.viewMode=this.startViewMode;this.showMode();if(!this.isInput){$(document).off("mousedown",this.hide)}if(this.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())){this.setValue()}this.isVisible=false;this.element.trigger({type:"hide",date:this.date})},remove:function(){this._detachEvents();$(document).off("mousedown",this.clickedOutside);this.picker.remove();delete this.picker;delete this.element.data().datetimepicker},getDate:function(){var d=this.getUTCDate();return new Date(d.getTime()+(d.getTimezoneOffset()*60000))},getUTCDate:function(){return this.date},getInitialDate:function(){return this.initialDate},setInitialDate:function(initialDate){this.initialDate=initialDate},setDate:function(d){this.setUTCDate(new Date(d.getTime()-(d.getTimezoneOffset()*60000)))},setUTCDate:function(d){if(d>=this.startDate&&d<=this.endDate){this.date=d;this.setValue();this.viewDate=this.date;this.fill()}else{this.element.trigger({type:"outOfRange",date:d,startDate:this.startDate,endDate:this.endDate})}},setFormat:function(format){this.format=DPGlobal.parseFormat(format,this.formatType);var element;if(this.isInput){element=this.element}else{if(this.component){element=this.element.find("input")}}if(element&&element.val()){this.setValue()}},setValue:function(){var formatted=this.getFormattedDate();if(!this.isInput){if(this.component){this.element.find("input").val(formatted)}this.element.data("date",formatted)}else{this.element.val(formatted)}if(this.linkField){$("#"+this.linkField).val(this.getFormattedDate(this.linkFormat))}},getFormattedDate:function(format){if(format==undefined){format=this.format}return DPGlobal.formatDate(this.date,format,this.language,this.formatType,this.timezone)},setStartDate:function(startDate){this.startDate=startDate||-Infinity;if(this.startDate!==-Infinity){this.startDate=DPGlobal.parseDate(this.startDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setEndDate:function(endDate){this.endDate=endDate||Infinity;if(this.endDate!==Infinity){this.endDate=DPGlobal.parseDate(this.endDate,this.format,this.language,this.formatType,this.timezone)}this.update();this.updateNavArrows()},setDatesDisabled:function(datesDisabled){this.datesDisabled=datesDisabled||[];if(!$.isArray(this.datesDisabled)){this.datesDisabled=this.datesDisabled.split(/,\s*/)}this.datesDisabled=$.map(this.datesDisabled,function(d){return DPGlobal.parseDate(d,this.format,this.language,this.formatType,this.timezone).toDateString()});this.update();this.updateNavArrows()},setTitle:function(selector,value){return this.picker.find(selector).find("th:eq(1)").text(this.title===false?value:this.title)},setDaysOfWeekDisabled:function(daysOfWeekDisabled){this.daysOfWeekDisabled=daysOfWeekDisabled||[];if(!$.isArray(this.daysOfWeekDisabled)){this.daysOfWeekDisabled=this.daysOfWeekDisabled.split(/,\s*/)}this.daysOfWeekDisabled=$.map(this.daysOfWeekDisabled,function(d){return parseInt(d,10)});this.update();this.updateNavArrows()},setMinutesDisabled:function(minutesDisabled){this.minutesDisabled=minutesDisabled||[];if(!$.isArray(this.minutesDisabled)){this.minutesDisabled=this.minutesDisabled.split(/,\s*/)}this.minutesDisabled=$.map(this.minutesDisabled,function(d){return parseInt(d,10)});this.update();this.updateNavArrows()},setHoursDisabled:function(hoursDisabled){this.hoursDisabled=hoursDisabled||[];if(!$.isArray(this.hoursDisabled)){this.hoursDisabled=this.hoursDisabled.split(/,\s*/)}this.hoursDisabled=$.map(this.hoursDisabled,function(d){return parseInt(d,10)});this.update();this.updateNavArrows()},place:function(){if(this.isInline){return}if(!this.zIndex){var index_highest=0;$("div").each(function(){var index_current=parseInt($(this).css("zIndex"),10);if(index_current>index_highest){index_highest=index_current}});this.zIndex=index_highest+10}var offset,top,left,containerOffset;if(this.container instanceof $){containerOffset=this.container.offset()}else{containerOffset=$(this.container).offset()}if(this.component){offset=this.component.offset();left=offset.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){left+=this.component.outerWidth()-this.picker.outerWidth()}}else{offset=this.element.offset();left=offset.left;if(this.pickerPosition=="bottom-left"||this.pickerPosition=="top-left"){left+=this.element.outerWidth()-this.picker.outerWidth()}}var bodyWidth=document.body.clientWidth||window.innerWidth;if(left+220>bodyWidth){left=bodyWidth-220}if(this.pickerPosition=="top-left"||this.pickerPosition=="top-right"){top=offset.top-this.picker.outerHeight()}else{top=offset.top+this.height}top=top-containerOffset.top;left=left-containerOffset.left;this.picker.css({top:top,left:left,zIndex:this.zIndex})},update:function(){var date,fromArgs=false;if(arguments&&arguments.length&&(typeof arguments[0]==="string"||arguments[0] instanceof Date)){date=arguments[0];fromArgs=true}else{date=(this.isInput?this.element.val():this.element.find("input").val())||this.element.data("date")||this.initialDate;if(typeof date=="string"||date instanceof String){date=date.replace(/^\s+|\s+$/g,"")}}if(!date){date=new Date();fromArgs=false}this.date=DPGlobal.parseDate(date,this.format,this.language,this.formatType,this.timezone);if(fromArgs){this.setValue()}if(this.date<this.startDate){this.viewDate=new Date(this.startDate)}else{if(this.date>this.endDate){this.viewDate=new Date(this.endDate)}else{this.viewDate=new Date(this.date)}}this.fill()},fillDow:function(){var dowCnt=this.weekStart,html="<tr>";while(dowCnt<this.weekStart+7){html+='<th class="dow">'+dates[this.language].daysMin[(dowCnt++)%7]+"</th>"}html+="</tr>";this.picker.find(".datetimepicker-days thead").append(html)},fillMonths:function(){var html="",i=0;while(i<12){html+='<span class="month">'+dates[this.language].monthsShort[i++]+"</span>"}this.picker.find(".datetimepicker-months td").html(html)},fill:function(){if(this.date==null||this.viewDate==null){return}var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth(),dayMonth=d.getUTCDate(),hours=d.getUTCHours(),minutes=d.getUTCMinutes(),startYear=this.startDate!==-Infinity?this.startDate.getUTCFullYear():-Infinity,startMonth=this.startDate!==-Infinity?this.startDate.getUTCMonth():-Infinity,endYear=this.endDate!==Infinity?this.endDate.getUTCFullYear():Infinity,endMonth=this.endDate!==Infinity?this.endDate.getUTCMonth()+1:Infinity,currentDate=(new UTCDate(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate())).valueOf(),today=new Date();this.setTitle(".datetimepicker-days",dates[this.language].months[month]+" "+year);if(this.formatViewType=="time"){var formatted=this.getFormattedDate();this.setTitle(".datetimepicker-hours",formatted);this.setTitle(".datetimepicker-minutes",formatted)}else{this.setTitle(".datetimepicker-hours",dayMonth+" "+dates[this.language].months[month]+" "+year);this.setTitle(".datetimepicker-minutes",dayMonth+" "+dates[this.language].months[month]+" "+year)}this.picker.find("tfoot th.today").text(dates[this.language].today||dates["en"].today).toggle(this.todayBtn!==false);this.picker.find("tfoot th.clear").text(dates[this.language].clear||dates["en"].clear).toggle(this.clearBtn!==false);this.updateNavArrows();this.fillMonths();var prevMonth=UTCDate(year,month-1,28,0,0,0,0),day=DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(),prevMonth.getUTCMonth());prevMonth.setUTCDate(day);prevMonth.setUTCDate(day-(prevMonth.getUTCDay()-this.weekStart+7)%7);var nextMonth=new Date(prevMonth);nextMonth.setUTCDate(nextMonth.getUTCDate()+42);nextMonth=nextMonth.valueOf();var html=[];var clsName;while(prevMonth.valueOf()<nextMonth){if(prevMonth.getUTCDay()==this.weekStart){html.push("<tr>")}clsName="";if(prevMonth.getUTCFullYear()<year||(prevMonth.getUTCFullYear()==year&&prevMonth.getUTCMonth()<month)){clsName+=" old"}else{if(prevMonth.getUTCFullYear()>year||(prevMonth.getUTCFullYear()==year&&prevMonth.getUTCMonth()>month)){clsName+=" new"}}if(this.todayHighlight&&prevMonth.getUTCFullYear()==today.getFullYear()&&prevMonth.getUTCMonth()==today.getMonth()&&prevMonth.getUTCDate()==today.getDate()){clsName+=" today"}if(prevMonth.valueOf()==currentDate){clsName+=" active"}if((prevMonth.valueOf()+86400000)<=this.startDate||prevMonth.valueOf()>this.endDate||$.inArray(prevMonth.getUTCDay(),this.daysOfWeekDisabled)!==-1||$.inArray(prevMonth.toDateString(),this.datesDisabled)!==-1){clsName+=" disabled"}html.push('<td class="day'+clsName+'">'+prevMonth.getUTCDate()+"</td>");if(prevMonth.getUTCDay()==this.weekEnd){html.push("</tr>")}prevMonth.setUTCDate(prevMonth.getUTCDate()+1)}this.picker.find(".datetimepicker-days tbody").empty().append(html.join(""));html=[];var txt="",meridian="",meridianOld="";var hoursDisabled=this.hoursDisabled||[];for(var i=0;i<24;i++){if(hoursDisabled.indexOf(i)!==-1){continue}var actual=UTCDate(year,month,dayMonth,i);clsName="";if((actual.valueOf()+3600000)<=this.startDate||actual.valueOf()>this.endDate){clsName+=" disabled"}else{if(hours==i){clsName+=" active"}}if(this.showMeridian&&dates[this.language].meridiem.length==2){meridian=(i<12?dates[this.language].meridiem[0]:dates[this.language].meridiem[1]);if(meridian!=meridianOld){if(meridianOld!=""){html.push("</fieldset>")}html.push('<fieldset class="hour"><legend>'+meridian.toUpperCase()+"</legend>")}meridianOld=meridian;txt=(i%12?i%12:12);html.push('<span class="hour'+clsName+" hour_"+(i<12?"am":"pm")+'">'+txt+"</span>");if(i==23){html.push("</fieldset>")}}else{txt=i+":00";html.push('<span class="hour'+clsName+'">'+txt+"</span>")}}this.picker.find(".datetimepicker-hours td").html(html.join(""));html=[];txt="",meridian="",meridianOld="";var minutesDisabled=this.minutesDisabled||[];for(var i=0;i<60;i+=this.minuteStep){if(minutesDisabled.indexOf(i)!==-1){continue}var actual=UTCDate(year,month,dayMonth,hours,i,0);clsName="";if(actual.valueOf()<this.startDate||actual.valueOf()>this.endDate){clsName+=" disabled"}else{if(Math.floor(minutes/this.minuteStep)==Math.floor(i/this.minuteStep)){clsName+=" active"}}if(this.showMeridian&&dates[this.language].meridiem.length==2){meridian=(hours<12?dates[this.language].meridiem[0]:dates[this.language].meridiem[1]);if(meridian!=meridianOld){if(meridianOld!=""){html.push("</fieldset>")}html.push('<fieldset class="minute"><legend>'+meridian.toUpperCase()+"</legend>")}meridianOld=meridian;txt=(hours%12?hours%12:12);html.push('<span class="minute'+clsName+'">'+txt+":"+(i<10?"0"+i:i)+"</span>");if(i==59){html.push("</fieldset>")}}else{txt=i+":00";html.push('<span class="minute'+clsName+'">'+hours+":"+(i<10?"0"+i:i)+"</span>")}}this.picker.find(".datetimepicker-minutes td").html(html.join(""));var currentYear=this.date.getUTCFullYear();var months=this.setTitle(".datetimepicker-months",year).end().find("span").removeClass("active");if(currentYear==year){var offset=months.length-12;months.eq(this.date.getUTCMonth()+offset).addClass("active")}if(year<startYear||year>endYear){months.addClass("disabled")}if(year==startYear){months.slice(0,startMonth).addClass("disabled")}if(year==endYear){months.slice(endMonth).addClass("disabled")}html="";year=parseInt(year/10,10)*10;var yearCont=this.setTitle(".datetimepicker-years",year+"-"+(year+9)).end().find("td");year-=1;for(var i=-1;i<11;i++){html+='<span class="year'+(i==-1||i==10?" old":"")+(currentYear==year?" active":"")+(year<startYear||year>endYear?" disabled":"")+'">'+year+"</span>";year+=1}yearCont.html(html);this.place()},updateNavArrows:function(){var d=new Date(this.viewDate),year=d.getUTCFullYear(),month=d.getUTCMonth(),day=d.getUTCDate(),hour=d.getUTCHours();switch(this.viewMode){case 0:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()&&month<=this.startDate.getUTCMonth()&&day<=this.startDate.getUTCDate()&&hour<=this.startDate.getUTCHours()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()&&month>=this.endDate.getUTCMonth()&&day>=this.endDate.getUTCDate()&&hour>=this.endDate.getUTCHours()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 1:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()&&month<=this.startDate.getUTCMonth()&&day<=this.startDate.getUTCDate()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()&&month>=this.endDate.getUTCMonth()&&day>=this.endDate.getUTCDate()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 2:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()&&month<=this.startDate.getUTCMonth()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()&&month>=this.endDate.getUTCMonth()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break;case 3:case 4:if(this.startDate!==-Infinity&&year<=this.startDate.getUTCFullYear()){this.picker.find(".prev").css({visibility:"hidden"})}else{this.picker.find(".prev").css({visibility:"visible"})}if(this.endDate!==Infinity&&year>=this.endDate.getUTCFullYear()){this.picker.find(".next").css({visibility:"hidden"})}else{this.picker.find(".next").css({visibility:"visible"})}break}},mousewheel:function(e){e.preventDefault();e.stopPropagation();if(this.wheelPause){return}this.wheelPause=true;var originalEvent=e.originalEvent;var delta=originalEvent.wheelDelta;var mode=delta>0?1:(delta===0)?0:-1;if(this.wheelViewModeNavigationInverseDirection){mode=-mode}this.showMode(mode);setTimeout($.proxy(function(){this.wheelPause=false},this),this.wheelViewModeNavigationDelay)},click:function(e){e.stopPropagation();e.preventDefault();var target=$(e.target).closest("span, td, th, legend");if(target.is("."+this.icontype)){target=$(target).parent().closest("span, td, th, legend")}if(target.length==1){if(target.is(".disabled")){this.element.trigger({type:"outOfRange",date:this.viewDate,startDate:this.startDate,endDate:this.endDate});return}switch(target[0].nodeName.toLowerCase()){case"th":switch(target[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var dir=DPGlobal.modes[this.viewMode].navStep*(target[0].className=="prev"?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveHour(this.viewDate,dir);break;case 1:this.viewDate=this.moveDate(this.viewDate,dir);break;case 2:this.viewDate=this.moveMonth(this.viewDate,dir);break;case 3:case 4:this.viewDate=this.moveYear(this.viewDate,dir);break}this.fill();this.element.trigger({type:target[0].className+":"+this.convertViewModeText(this.viewMode),date:this.viewDate,startDate:this.startDate,endDate:this.endDate});break;case"clear":this.reset();if(this.autoclose){this.hide()}break;case"today":var date=new Date();date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),0);if(date<this.startDate){date=this.startDate}else{if(date>this.endDate){date=this.endDate}}this.viewMode=this.startViewMode;this.showMode(0);this._setDate(date);this.fill();if(this.autoclose){this.hide()}break}break;case"span":if(!target.is(".disabled")){var year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth(),day=this.viewDate.getUTCDate(),hours=this.viewDate.getUTCHours(),minutes=this.viewDate.getUTCMinutes(),seconds=this.viewDate.getUTCSeconds();if(target.is(".month")){this.viewDate.setUTCDate(1);month=target.parent().find("span").index(target);day=this.viewDate.getUTCDate();this.viewDate.setUTCMonth(month);this.element.trigger({type:"changeMonth",date:this.viewDate});if(this.viewSelect>=3){this._setDate(UTCDate(year,month,day,hours,minutes,seconds,0))}}else{if(target.is(".year")){this.viewDate.setUTCDate(1);year=parseInt(target.text(),10)||0;this.viewDate.setUTCFullYear(year);this.element.trigger({type:"changeYear",date:this.viewDate});if(this.viewSelect>=4){this._setDate(UTCDate(year,month,day,hours,minutes,seconds,0))}}else{if(target.is(".hour")){hours=parseInt(target.text(),10)||0;if(target.hasClass("hour_am")||target.hasClass("hour_pm")){if(hours==12&&target.hasClass("hour_am")){hours=0}else{if(hours!=12&&target.hasClass("hour_pm")){hours+=12}}}this.viewDate.setUTCHours(hours);this.element.trigger({type:"changeHour",date:this.viewDate});if(this.viewSelect>=1){this._setDate(UTCDate(year,month,day,hours,minutes,seconds,0))}}else{if(target.is(".minute")){minutes=parseInt(target.text().substr(target.text().indexOf(":")+1),10)||0;this.viewDate.setUTCMinutes(minutes);this.element.trigger({type:"changeMinute",date:this.viewDate});if(this.viewSelect>=0){this._setDate(UTCDate(year,month,day,hours,minutes,seconds,0))}}}}}if(this.viewMode!=0){var oldViewMode=this.viewMode;this.showMode(-1);this.fill();if(oldViewMode==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}}break;case"td":if(target.is(".day")&&!target.is(".disabled")){var day=parseInt(target.text(),10)||1;var year=this.viewDate.getUTCFullYear(),month=this.viewDate.getUTCMonth(),hours=this.viewDate.getUTCHours(),minutes=this.viewDate.getUTCMinutes(),seconds=this.viewDate.getUTCSeconds();if(target.is(".old")){if(month===0){month=11;year-=1}else{month-=1}}else{if(target.is(".new")){if(month==11){month=0;year+=1}else{month+=1}}}this.viewDate.setUTCFullYear(year);this.viewDate.setUTCMonth(month,day);this.element.trigger({type:"changeDay",date:this.viewDate});if(this.viewSelect>=2){this._setDate(UTCDate(year,month,day,hours,minutes,seconds,0))}}var oldViewMode=this.viewMode;this.showMode(-1);this.fill();if(oldViewMode==this.viewMode&&this.autoclose){this.hide()}break}}},_setDate:function(date,which){if(!which||which=="date"){this.date=date}if(!which||which=="view"){this.viewDate=date}this.fill();this.setValue();var element;if(this.isInput){element=this.element}else{if(this.component){element=this.element.find("input")}}if(element){element.change();if(this.autoclose&&(!which||which=="date")){}}this.element.trigger({type:"changeDate",date:this.getDate()});if(date==null){this.date=this.viewDate}},moveMinute:function(date,dir){if(!dir){return date}var new_date=new Date(date.valueOf());new_date.setUTCMinutes(new_date.getUTCMinutes()+(dir*this.minuteStep));return new_date},moveHour:function(date,dir){if(!dir){return date}var new_date=new Date(date.valueOf());new_date.setUTCHours(new_date.getUTCHours()+dir);return new_date},moveDate:function(date,dir){if(!dir){return date}var new_date=new Date(date.valueOf());new_date.setUTCDate(new_date.getUTCDate()+dir);return new_date},moveMonth:function(date,dir){if(!dir){return date}var new_date=new Date(date.valueOf()),day=new_date.getUTCDate(),month=new_date.getUTCMonth(),mag=Math.abs(dir),new_month,test;dir=dir>0?1:-1;if(mag==1){test=dir==-1?function(){return new_date.getUTCMonth()==month}:function(){return new_date.getUTCMonth()!=new_month};new_month=month+dir;new_date.setUTCMonth(new_month);if(new_month<0||new_month>11){new_month=(new_month+12)%12}}else{for(var i=0;i<mag;i++){new_date=this.moveMonth(new_date,dir)}new_month=new_date.getUTCMonth();new_date.setUTCDate(day);test=function(){return new_month!=new_date.getUTCMonth()}}while(test()){new_date.setUTCDate(--day);new_date.setUTCMonth(new_month)}return new_date},moveYear:function(date,dir){return this.moveMonth(date,dir*12)},dateWithinRange:function(date){return date>=this.startDate&&date<=this.endDate},keydown:function(e){if(this.picker.is(":not(:visible)")){if(e.keyCode==27){this.show()}return}var dateChanged=false,dir,day,month,newDate,newViewDate;switch(e.keyCode){case 27:this.hide();e.preventDefault();break;case 37:case 39:if(!this.keyboardNavigation){break}dir=e.keyCode==37?-1:1;viewMode=this.viewMode;if(e.ctrlKey){viewMode+=2}else{if(e.shiftKey){viewMode+=1}}if(viewMode==4){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir)}else{if(viewMode==3){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir)}else{if(viewMode==2){newDate=this.moveDate(this.date,dir);newViewDate=this.moveDate(this.viewDate,dir)}else{if(viewMode==1){newDate=this.moveHour(this.date,dir);newViewDate=this.moveHour(this.viewDate,dir)}else{if(viewMode==0){newDate=this.moveMinute(this.date,dir);newViewDate=this.moveMinute(this.viewDate,dir)}}}}}if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true}break;case 38:case 40:if(!this.keyboardNavigation){break}dir=e.keyCode==38?-1:1;viewMode=this.viewMode;if(e.ctrlKey){viewMode+=2}else{if(e.shiftKey){viewMode+=1}}if(viewMode==4){newDate=this.moveYear(this.date,dir);newViewDate=this.moveYear(this.viewDate,dir)}else{if(viewMode==3){newDate=this.moveMonth(this.date,dir);newViewDate=this.moveMonth(this.viewDate,dir)}else{if(viewMode==2){newDate=this.moveDate(this.date,dir*7);newViewDate=this.moveDate(this.viewDate,dir*7)}else{if(viewMode==1){if(this.showMeridian){newDate=this.moveHour(this.date,dir*6);newViewDate=this.moveHour(this.viewDate,dir*6)}else{newDate=this.moveHour(this.date,dir*4);newViewDate=this.moveHour(this.viewDate,dir*4)}}else{if(viewMode==0){newDate=this.moveMinute(this.date,dir*4);newViewDate=this.moveMinute(this.viewDate,dir*4)}}}}}if(this.dateWithinRange(newDate)){this.date=newDate;this.viewDate=newViewDate;this.setValue();this.update();e.preventDefault();dateChanged=true}break;case 13:if(this.viewMode!=0){var oldViewMode=this.viewMode;this.showMode(-1);this.fill();if(oldViewMode==this.viewMode&&this.autoclose){this.hide()}}else{this.fill();if(this.autoclose){this.hide()}}e.preventDefault();break;case 9:this.hide();break}if(dateChanged){var element;if(this.isInput){element=this.element}else{if(this.component){element=this.element.find("input")}}if(element){element.change()}this.element.trigger({type:"changeDate",date:this.getDate()})}},showMode:function(dir){if(dir){var newViewMode=Math.max(0,Math.min(DPGlobal.modes.length-1,this.viewMode+dir));if(newViewMode>=this.minView&&newViewMode<=this.maxView){this.element.trigger({type:"changeMode",date:this.viewDate,oldViewMode:this.viewMode,newViewMode:newViewMode});this.viewMode=newViewMode}}this.picker.find(">div").hide().filter(".datetimepicker-"+DPGlobal.modes[this.viewMode].clsName).css("display","block");this.updateNavArrows()},reset:function(e){this._setDate(null,"date")},convertViewModeText:function(viewMode){switch(viewMode){case 4:return"decade";case 3:return"year";case 2:return"month";case 1:return"day";case 0:return"hour"}}};var old=$.fn.datetimepicker;$.fn.datetimepicker=function(option){var args=Array.apply(null,arguments);args.shift();var internal_return;this.each(function(){var $this=$(this),data=$this.data("datetimepicker"),options=typeof option=="object"&&option;if(!data){$this.data("datetimepicker",(data=new Datetimepicker(this,$.extend({},$.fn.datetimepicker.defaults,options))))}if(typeof option=="string"&&typeof data[option]=="function"){internal_return=data[option].apply(data,args);if(internal_return!==undefined){return false}}});if(internal_return!==undefined){return internal_return}else{return this}};$.fn.datetimepicker.defaults={};$.fn.datetimepicker.Constructor=Datetimepicker;var dates=$.fn.datetimepicker.dates={en:{days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六","星期日"],daysShort:["日","一","二","三","四","五","六","日"],daysMin:["日","一","二","三","四","五","六","日"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],monthsShort:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],meridiem:["上午","下午"],suffix:["st","nd","rd","th"],today:"今天",clear:"清空"}};var DPGlobal={modes:[{clsName:"minutes",navFnc:"Hours",navStep:1},{clsName:"hours",navFnc:"Date",navStep:1},{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0))},getDaysInMonth:function(year,month){return[31,(DPGlobal.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month]},getDefaultFormat:function(type,field){if(type=="standard"){if(field=="input"){return"yyyy-mm-dd hh:ii"}else{return"yyyy-mm-dd hh:ii:ss"}}else{if(type=="php"){if(field=="input"){return"Y-m-d H:i"}else{return"Y-m-d H:i:s"}}else{throw new Error("Invalid format type.")}}},validParts:function(type){if(type=="standard"){return/t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g}else{if(type=="php"){return/[dDjlNwzFmMnStyYaABgGhHis]/g}else{throw new Error("Invalid format type.")}}},nonpunctuation:/[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,parseFormat:function(format,type){var separators=format.replace(this.validParts(type),"\0").split("\0"),parts=format.match(this.validParts(type));if(!separators||!separators.length||!parts||parts.length==0){throw new Error("Invalid date format.")}return{separators:separators,parts:parts}},parseDate:function(date,format,language,type,timezone){if(date instanceof Date){var dateUTC=new Date(date.valueOf()-date.getTimezoneOffset()*60000);dateUTC.setMilliseconds(0);return dateUTC}if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)){format=this.parseFormat("yyyy-mm-dd",type)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)){format=this.parseFormat("yyyy-mm-dd hh:ii",type)}if(/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)){format=this.parseFormat("yyyy-mm-dd hh:ii:ss",type)}if(/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)){var part_re=/([-+]\d+)([dmwy])/,parts=date.match(/([-+]\d+)([dmwy])/g),part,dir;date=new Date();for(var i=0;i<parts.length;i++){part=part_re.exec(parts[i]);dir=parseInt(part[1]);switch(part[2]){case"d":date.setUTCDate(date.getUTCDate()+dir);break;case"m":date=Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype,date,dir);break;case"w":date.setUTCDate(date.getUTCDate()+dir*7);break;case"y":date=Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype,date,dir);break}}return UTCDate(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),date.getUTCHours(),date.getUTCMinutes(),date.getUTCSeconds(),0)}var parts=date&&date.toString().match(this.nonpunctuation)||[],date=new Date(0,0,0,0,0,0,0),parsed={},setters_order=["hh","h","ii","i","ss","s","yyyy","yy","M","MM","m","mm","D","DD","d","dd","H","HH","p","P","z","Z"],setters_map={hh:function(d,v){return d.setUTCHours(v)},h:function(d,v){return d.setUTCHours(v)},HH:function(d,v){return d.setUTCHours(v==12?0:v)},H:function(d,v){return d.setUTCHours(v==12?0:v)},ii:function(d,v){return d.setUTCMinutes(v)},i:function(d,v){return d.setUTCMinutes(v)},ss:function(d,v){return d.setUTCSeconds(v)},s:function(d,v){return d.setUTCSeconds(v)},yyyy:function(d,v){return d.setUTCFullYear(v)},yy:function(d,v){return d.setUTCFullYear(2000+v)},m:function(d,v){v-=1;while(v<0){v+=12}v%=12;d.setUTCMonth(v);while(d.getUTCMonth()!=v){if(isNaN(d.getUTCMonth())){return d}else{d.setUTCDate(d.getUTCDate()-1)}}return d},d:function(d,v){return d.setUTCDate(v)},p:function(d,v){return d.setUTCHours(v==1?d.getUTCHours()+12:d.getUTCHours())},z:function(){return timezone}},val,filtered,part;setters_map["M"]=setters_map["MM"]=setters_map["mm"]=setters_map["m"];setters_map["dd"]=setters_map["d"];setters_map["P"]=setters_map["p"];setters_map["Z"]=setters_map["z"];date=UTCDate(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds());if(parts.length==format.parts.length){for(var i=0,cnt=format.parts.length;i<cnt;i++){val=parseInt(parts[i],10);part=format.parts[i];if(isNaN(val)){switch(part){case"MM":filtered=$(dates[language].months).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m==p});val=$.inArray(filtered[0],dates[language].months)+1;break;case"M":filtered=$(dates[language].monthsShort).filter(function(){var m=this.slice(0,parts[i].length),p=parts[i].slice(0,m.length);return m.toLowerCase()==p.toLowerCase()});val=$.inArray(filtered[0],dates[language].monthsShort)+1;break;case"p":case"P":val=$.inArray(parts[i].toLowerCase(),dates[language].meridiem);break;case"z":case"Z":timezone;break}}parsed[part]=val}for(var i=0,s;i<setters_order.length;i++){s=setters_order[i];if(s in parsed&&!isNaN(parsed[s])){setters_map[s](date,parsed[s])}}}return date},formatDate:function(date,format,language,type,timezone){if(date==null){return""}var val;if(type=="standard"){val={t:date.getTime(),yy:date.getUTCFullYear().toString().substring(2),yyyy:date.getUTCFullYear(),m:date.getUTCMonth()+1,M:dates[language].monthsShort[date.getUTCMonth()],MM:dates[language].months[date.getUTCMonth()],d:date.getUTCDate(),D:dates[language].daysShort[date.getUTCDay()],DD:dates[language].days[date.getUTCDay()],p:(dates[language].meridiem.length==2?dates[language].meridiem[date.getUTCHours()<12?0:1]:""),h:date.getUTCHours(),i:date.getUTCMinutes(),s:date.getUTCSeconds(),z:timezone};if(dates[language].meridiem.length==2){val.H=(val.h%12==0?12:val.h%12)}else{val.H=val.h}val.HH=(val.H<10?"0":"")+val.H;val.P=val.p.toUpperCase();val.Z=val.z;val.hh=(val.h<10?"0":"")+val.h;val.ii=(val.i<10?"0":"")+val.i;val.ss=(val.s<10?"0":"")+val.s;val.dd=(val.d<10?"0":"")+val.d;val.mm=(val.m<10?"0":"")+val.m}else{if(type=="php"){val={y:date.getUTCFullYear().toString().substring(2),Y:date.getUTCFullYear(),F:dates[language].months[date.getUTCMonth()],M:dates[language].monthsShort[date.getUTCMonth()],n:date.getUTCMonth()+1,t:DPGlobal.getDaysInMonth(date.getUTCFullYear(),date.getUTCMonth()),j:date.getUTCDate(),l:dates[language].days[date.getUTCDay()],D:dates[language].daysShort[date.getUTCDay()],w:date.getUTCDay(),N:(date.getUTCDay()==0?7:date.getUTCDay()),S:(date.getUTCDate()%10<=dates[language].suffix.length?dates[language].suffix[date.getUTCDate()%10-1]:""),a:(dates[language].meridiem.length==2?dates[language].meridiem[date.getUTCHours()<12?0:1]:""),g:(date.getUTCHours()%12==0?12:date.getUTCHours()%12),G:date.getUTCHours(),i:date.getUTCMinutes(),s:date.getUTCSeconds()};val.m=(val.n<10?"0":"")+val.n;val.d=(val.j<10?"0":"")+val.j;val.A=val.a.toString().toUpperCase();val.h=(val.g<10?"0":"")+val.g;val.H=(val.G<10?"0":"")+val.G;val.i=(val.i<10?"0":"")+val.i;val.s=(val.s<10?"0":"")+val.s}else{throw new Error("Invalid format type.")}}var date=[],seps=$.extend([],format.separators);for(var i=0,cnt=format.parts.length;i<cnt;i++){if(seps.length){date.push(seps.shift())}date.push(val[format.parts[i]])}if(seps.length){date.push(seps.shift())}return date.join("")},convertViewMode:function(viewMode){switch(viewMode){case 4:case"decade":viewMode=4;break;case 3:case"year":viewMode=3;break;case 2:case"month":viewMode=2;break;case 1:case"day":viewMode=1;break;case 0:case"hour":viewMode=0;break}return viewMode},headTemplate:"<thead>"+"<tr>"+'<th class="prev"><i class="{iconType} {leftArrow}"/></th>'+'<th colspan="5" class="switch"></th>'+'<th class="next"><i class="{iconType} {rightArrow}"/></th>'+"</tr>"+"</thead>",headTemplateV3:"<thead>"+"<tr>"+'<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>'+'<th colspan="5" class="switch"></th>'+'<th class="next"><span class="{iconType} {rightArrow}"></span> </th>'+"</tr>"+"</thead>",contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:"<tfoot>"+'<tr><th colspan="7" class="today"></th></tr>'+'<tr><th colspan="7" class="clear"></th></tr>'+"</tfoot>"};DPGlobal.template='<div class="datetimepicker">'+'<div class="datetimepicker-minutes">'+'<table class=" table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-hours">'+'<table class=" table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-days">'+'<table class=" table-condensed">'+DPGlobal.headTemplate+"<tbody></tbody>"+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-months">'+'<table class="table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-years">'+'<table class="table-condensed">'+DPGlobal.headTemplate+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+"</div>";DPGlobal.templateV3='<div class="datetimepicker">'+'<div class="datetimepicker-minutes">'+'<table class=" table-condensed">'+DPGlobal.headTemplateV3+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-hours">'+'<table class=" table-condensed">'+DPGlobal.headTemplateV3+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-days">'+'<table class=" table-condensed">'+DPGlobal.headTemplateV3+"<tbody></tbody>"+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-months">'+'<table class="table-condensed">'+DPGlobal.headTemplateV3+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+'<div class="datetimepicker-years">'+'<table class="table-condensed">'+DPGlobal.headTemplateV3+DPGlobal.contTemplate+DPGlobal.footTemplate+"</table>"+"</div>"+"</div>";$.fn.datetimepicker.DPGlobal=DPGlobal;$.fn.datetimepicker.noConflict=function(){$.fn.datetimepicker=old;return this};$(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api",'[data-provide="datetimepicker"]',function(e){var $this=$(this);if($this.data("datetimepicker")){return}e.preventDefault();$this.datetimepicker("show")});$(function(){$('[data-provide="datetimepicker-inline"]').datetimepicker()})}));!function($){$.fn["bootstrapSwitch"]=function(method){var methods={init:function(){return this.each(function(){var $element=$(this),$div,$switchLeft,$switchRight,$label,myClasses="",classes=$element.attr("class"),color,moving,onLabel="ON",offLabel="OFF",icon=false;$.each(["size-MINI","size-S","size-L"],function(i,el){if(classes.indexOf(el)>=0){myClasses=el}});$element.addClass("has-switch");if($element.data("on")!==undefined){color="switch-"+$element.data("on")}if($element.data("on-label")!==undefined){onLabel=$element.data("on-label")}if($element.data("off-label")!==undefined){offLabel=$element.data("off-label")}if($element.data("icon")!==undefined){icon=$element.data("icon")}$switchLeft=$("<span>").addClass("switch-left").addClass(myClasses).addClass(color).html(onLabel);color="";if($element.data("off")!==undefined){color="switch-"+$element.data("off")}$switchRight=$("<span>").addClass("switch-right").addClass(myClasses).addClass(color).html(offLabel);$label=$("<label>").html("&nbsp;").addClass(myClasses).attr("for",$element.find("input").attr("id"));if(icon){$label.html('<i class="icon icon-'+icon+'"></i>')}$div=$element.find(":checkbox").wrap($("<div>")).parent().data("animated",false);if($element.data("animated")!==false){$div.addClass("switch-animate").data("animated",true)}$div.append($switchLeft).append($label).append($switchRight);$element.find(">div").addClass($element.find("input").is(":checked")?"switch-on":"switch-off");if($element.find("input").is(":disabled")){$(this).addClass("deactivate")}var changeStatus=function($this){$this.siblings("label").trigger("mousedown").trigger("mouseup").trigger("click")};$element.on("keydown",function(e){if(e.keyCode===32){e.stopImmediatePropagation();e.preventDefault();changeStatus($(e.target).find("span:first"))}});$switchLeft.on("click",function(e){changeStatus($(this))});$switchRight.on("click",function(e){changeStatus($(this))});$element.find("input").on("change",function(e){var $this=$(this),$element=$this.parent(),thisState=$this.is(":checked"),state=$element.is(".switch-off");e.preventDefault();$element.css("left","");if(state===thisState){if(thisState){$element.removeClass("switch-off").addClass("switch-on")}else{$element.removeClass("switch-on").addClass("switch-off")}if($element.data("animated")!==false){$element.addClass("switch-animate")}$element.parent().trigger("switch-change",{"el":$this,"value":thisState})}});$element.find("label").on("mousedown touchstart",function(e){var $this=$(this);moving=false;e.preventDefault();e.stopImmediatePropagation();$this.closest("div").removeClass("switch-animate");if($this.closest(".has-switch").is(".deactivate")){$this.unbind("click")}else{$this.on("mousemove touchmove",function(e){var $element=$(this).closest(".switch"),relativeX=(e.pageX||e.originalEvent.targetTouches[0].pageX)-$element.offset().left,percent=(relativeX/$element.width())*100,left=25,right=75;moving=true;if(percent<left){percent=left}else{if(percent>right){percent=right}}$element.find(">div").css("left",(percent-right)+"%")});$this.on("click touchend",function(e){var $this=$(this),$target=$(e.target),$myCheckBox=$target.siblings("input");e.stopImmediatePropagation();e.preventDefault();$this.unbind("mouseleave");if(moving){$myCheckBox.prop("checked",!(parseInt($this.parent().css("left"))<-25))}else{$myCheckBox.prop("checked",!$myCheckBox.is(":checked"))}moving=false;$myCheckBox.trigger("change")});$this.on("mouseleave",function(e){var $this=$(this),$myCheckBox=$this.siblings("input");e.preventDefault();e.stopImmediatePropagation();$this.unbind("mouseleave");$this.trigger("mouseup");$myCheckBox.prop("checked",!(parseInt($this.parent().css("left"))<-25)).trigger("change")});$this.on("mouseup",function(e){e.stopImmediatePropagation();e.preventDefault();$(this).unbind("mousemove")})}})})},toggleActivation:function(){$(this).toggleClass("deactivate")},isActive:function(){return !$(this).hasClass("deactivate")},setActive:function(active){if(active){$(this).removeClass("deactivate")}else{$(this).addClass("deactivate")}},toggleState:function(skipOnChange){var $input=$(this).find("input:checkbox");$input.prop("checked",!$input.is(":checked")).trigger("change",skipOnChange)},setState:function(value,skipOnChange){$(this).find("input:checkbox").prop("checked",value).trigger("change",skipOnChange)},status:function(){return $(this).find("input:checkbox").is(":checked")},destroy:function(){var $div=$(this).find("div"),$checkbox;$div.find(":not(input:checkbox)").remove();$checkbox=$div.children();$checkbox.unwrap().unwrap();$checkbox.unbind("change");return $checkbox}};if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof method==="object"||!method){return methods.init.apply(this,arguments)}else{$.error("Method "+method+" does not exist!")}}}}(jQuery);$(function(){$(".switch")["bootstrapSwitch"]()});
/* -----------H-ui前端框架-------------
* H-ui.admin.js v3.0
* http://www.h-ui.net/
* Created & Modified by guojunhui
* Date modified 2017.02.03
* Copyright 2013-2017 北京颖杰联创科技有限公司 All rights reserved.
* Licensed under MIT license.
* http://opensource.org/licenses/MIT
*/
var num=0,oUl=$("#min_title_list"),hide_nav=$("#Hui-tabNav");

/*获取顶部选项卡总长度*/
function tabNavallwidth(){
	var taballwidth=0,
		$tabNav = hide_nav.find(".acrossTab"),
		$tabNavWp = hide_nav.find(".Hui-tabNav-wp"),
		$tabNavitem = hide_nav.find(".acrossTab li"),
		$tabNavmore =hide_nav.find(".Hui-tabNav-more");
	if (!$tabNav[0]){return}
	$tabNavitem.each(function(index, element) {
        taballwidth += Number(parseFloat($(this).width()+60))
    });
	$tabNav.width(taballwidth+25);
	var w = $tabNavWp.width();
	if(taballwidth+25>w){
		$tabNavmore.show()}
	else{
		$tabNavmore.hide();
		$tabNav.css({left:0})
	}
}

/*左侧菜单响应式*/
function Huiasidedisplay(){
	if($(window).width()>=768){
		$(".Hui-aside").show()
	} 
}
/*获取皮肤cookie*/
function getskincookie(){
	var v = $.cookie("Huiskin");
	var hrefStr=$("#skin").attr("href");
	if(v==null||v==""){
		v="default";
	}
	if(hrefStr!=undefined){
		var hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+v+'/skin.css';
		$("#skin").attr("href",hrefRes);
	}
}
/*菜单导航*/
function Hui_admin_tab(obj){
	var bStop = false,
		bStopIndex = 0,
		href = $(obj).attr('data-href'),
		title = $(obj).attr("data-title"),
		topWindow = $(window.parent.document),
		show_navLi = topWindow.find("#min_title_list li"),
		iframe_box = topWindow.find("#iframe_box");
	//console.log(topWindow);
	if(!href||href==""){
		alert("data-href不存在，v2.5版本之前用_href属性，升级后请改为data-href属性");
		return false;
	}if(!title){
		alert("v2.5版本之后使用data-title属性");
		return false;
	}
	if(title==""){
		alert("data-title属性不能为空");
		return false;
	}
	show_navLi.each(function() {
		if($(this).find('span').attr("data-href")==href){
			bStop=true;
			bStopIndex=show_navLi.index($(this));
			return false;
		}
	});
	if(!bStop){
		creatIframe(href,title);
		min_titleList();
	}
	else{
		show_navLi.removeClass("active").eq(bStopIndex).addClass("active");			
		iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr("src",href);
	}	
}

/*最新tab标题栏列表*/
function min_titleList(){
	var topWindow = $(window.parent.document),
		show_nav = topWindow.find("#min_title_list"),
		aLi = show_nav.find("li");
}

/*创建iframe*/
function creatIframe(href,titleName){
	var topWindow=$(window.parent.document),
		show_nav=topWindow.find('#min_title_list'),
		iframe_box=topWindow.find('#iframe_box'),
		iframeBox=iframe_box.find('.show_iframe'),
		$tabNav = topWindow.find(".acrossTab"),
		$tabNavWp = topWindow.find(".Hui-tabNav-wp"),
		$tabNavmore =topWindow.find(".Hui-tabNav-more");
	var taballwidth=0;
		
	show_nav.find('li').removeClass("active");	
	show_nav.append('<li class="active"><span data-href="'+href+'">'+titleName+'</span><i></i><em></em></li>');
	if('function'==typeof $('#min_title_list li').contextMenu){
		$("#min_title_list li").contextMenu('Huiadminmenu', {
			bindings: {
				'closethis': function(t) {
					var $t = $(t);				
					if($t.find("i")){
						$t.find("i").trigger("click");
					}
				},
				'closeall': function(t) {
					$("#min_title_list li i").trigger("click");
				},
			}
		});
	}else {
		
	}	
	var $tabNavitem = topWindow.find(".acrossTab li");
	if (!$tabNav[0]){return}
	$tabNavitem.each(function(index, element) {
        taballwidth+=Number(parseFloat($(this).width()+60))
    });
	$tabNav.width(taballwidth+25);
	var w = $tabNavWp.width();
	if(taballwidth+25>w){
		$tabNavmore.show()}
	else{
		$tabNavmore.hide();
		$tabNav.css({left:0})
	}	
	iframeBox.hide();
	iframe_box.append('<div class="show_iframe"><div class="loading"></div><iframe frameborder="0" src='+href+'></iframe></div>');
	var showBox=iframe_box.find('.show_iframe:visible');
	showBox.find('iframe').load(function(){
		showBox.find('.loading').hide();
	});
}



/*关闭iframe*/
function removeIframe(){
	var topWindow = $(window.parent.document),
		iframe = topWindow.find('#iframe_box .show_iframe'),
		tab = topWindow.find(".acrossTab li"),
		showTab = topWindow.find(".acrossTab li.active"),
		showBox=topWindow.find('.show_iframe:visible'),
		i = showTab.index();
	tab.eq(i-1).addClass("active");
	tab.eq(i).remove();
	iframe.eq(i-1).show();	
	iframe.eq(i).remove();
}

/*关闭所有iframe*/
function removeIframeAll(){
	var topWindow = $(window.parent.document),
		iframe = topWindow.find('#iframe_box .show_iframe'),
		tab = topWindow.find(".acrossTab li");
	for(var i=0;i<tab.length;i++){
		if(tab.eq(i).find("i").length>0){
			tab.eq(i).remove();
			iframe.eq(i).remove();
		}
	}
}

/*弹出层*/
/*
	参数解释：
	title	标题
	url		请求的url
	id		需要操作的数据id
	w		弹出层宽度（缺省调默认值）
	h		弹出层高度（缺省调默认值）
*/
function layer_show(title,url,w,h){
	if (title == null || title == '') {
		title=false;
	};
	if (url == null || url == '') {
		url="/error/404";
	};
	if (w == null || w == '') {
		w=800;
	};
	if (h == null || h == '') {
		h=($(window).height() - 50);
	};
	layer.open({
		type: 2,
		area: [w+'px', h +'px'],
		fix: false, //不固定
		maxmin: true,
		shade:0.4,
		title: title,
		content: url
	});
}
/*关闭弹出框口*/
function layer_close(){
	var index = parent.layer.getFrameIndex(window.name);
	parent.layer.close(index);
}

/*时间*/
function getHTMLDate(obj) {
    var d = new Date();
    var weekday = new Array(7);
    var _mm = "";
    var _dd = "";
    var _ww = "";
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    _yy = d.getFullYear();
    _mm = d.getMonth() + 1;
    _dd = d.getDate();
    _ww = weekday[d.getDay()];
    obj.html(_yy + "年" + _mm + "月" + _dd + "日 " + _ww);
};

$(function(){
	getHTMLDate($("#top_time"));
	getskincookie();
	//layer.config({extend: 'extend/layer.ext.js'});
	Huiasidedisplay();
	var resizeID;
	$(window).resize(function(){
		clearTimeout(resizeID);
		resizeID = setTimeout(function(){
			Huiasidedisplay();
		},500);
	});
	
	$(".nav-toggle").click(function(){
		$(".Hui-aside").slideToggle();
	});
	$(".Hui-aside").on("click",".menu_dropdown dd li a",function(){
		if($(window).width()<768){
			$(".Hui-aside").slideToggle();
		}
	});
	/*左侧菜单*/
	$.Huifold(".menu_dropdown dl dt",".menu_dropdown dl dd","fast",1,"click");
	
	/*选项卡导航*/
	$(".Hui-aside").on("click",".menu_dropdown a",function(){
		Hui_admin_tab(this);
	});
	
	$(document).on("click","#min_title_list li",function(){
		var bStopIndex=$(this).index();
		var iframe_box=$("#iframe_box");
		$("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
		iframe_box.find(".show_iframe").hide().eq(bStopIndex).show();
	});
	$(document).on("click","#min_title_list li i",function(){
		var aCloseIndex=$(this).parents("li").index();
		$(this).parent().remove();
		$('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
		num==0?num=0:num--;
		tabNavallwidth();
	});
	$(document).on("dblclick","#min_title_list li",function(){
		var aCloseIndex=$(this).index();
		var iframe_box=$("#iframe_box");
		if(aCloseIndex>0){
			$(this).remove();
			$('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
			num==0?num=0:num--;
			$("#min_title_list li").removeClass("active").eq(aCloseIndex-1).addClass("active");
			iframe_box.find(".show_iframe").hide().eq(aCloseIndex-1).show();
			tabNavallwidth();
		}else{
			return false;
		}
	});
	tabNavallwidth();
	
	$('#js-tabNav-next').click(function(){
		num==oUl.find('li').length-1?num=oUl.find('li').length-1:num++;
		toNavPos();
	});
	$('#js-tabNav-prev').click(function(){
		num==0?num=0:num--;
		toNavPos();
	});
	
	function toNavPos(){
		oUl.stop().animate({'left':-num*100},100);
	}
	
	/*换肤*/
	$("#Hui-skin .dropDown-menu a").click(function(){
		var v = $(this).attr("data-val");
		$.cookie("Huiskin", v);
		var hrefStr=$("#skin").attr("href");
		var hrefRes=hrefStr.substring(0,hrefStr.lastIndexOf('skin/'))+'skin/'+v+'/skin.css';
		$(window.frames.document).contents().find("#skin").attr("href",hrefRes);
	});
}); 
