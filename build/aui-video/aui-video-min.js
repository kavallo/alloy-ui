YUI.add("aui-video",function(e,t){var n=e.Lang,r=e.UA,i=e.getClassName,s=i("video","node"),o=e.config.base+"aui-video/assets/player.swf?t="+n.now(),u=e.config.doc,a='<video id="{id}" controls="controls" class="'+s+'" {height} {width}></video>',f='<div class="'+s+'"></div>',l=e.Component.create({NAME:"video",ATTRS:{flashPlayerVersion:{validator:n.isString,value:"9,0,0,0"},flashVars:{value:{}},fixedAttributes:{value:{}},ogvUrl:{value:""},poster:{value:""},render:{value:!0},role:{validator:n.isString,value:"application",writeOnce:"initOnly"},swfUrl:{value:o},url:{value:""},useARIA:{validator:n.isBoolean,value:!0,writeOnce:"initOnly"}},BIND_UI_ATTRS:["url","poster","ogvUrl","swfUrl","fixedAttributes","flashVars"],SYNC_UI_ATTRS:["url","poster","ogvUrl"],prototype:{renderUI:function(){var t=this;t._renderVideoTask=e.debounce(t._renderVideo,1,t),t._renderSwfTask=e.debounce(t._renderSwf,1,t),t._renderVideo(!t.get("ogvUrl")),t._video.on("play",function(e){t.fire("play",{cropType:e.type})}),t._video.on("pause",function(e){t.fire("pause",{cropType:e.type})})},bindUI:function(){var e=this;e.publish("videoReady",{fireOnce:!0}),e.publish("play"),e.publish("pause")},syncUI:function(){var t=this;t.get("useARIA")&&t.plug(e.Plugin.Aria,{roleName:t.get("role"),roleNode:t.get("contentBox")})},load:function(){var e=this;e._video.hasMethod("load")&&e._video.invoke("load")},pause:function(){var e=this;e._video.hasMethod("pause")&&e._video.invoke("pause")},play:function(){var e=this;e._video.hasMethod("play")&&e._video.invoke("play")},_createSource:function(t){var n=new e.Node(u.createElement("source"));return n.attr("type",t),n},_renderSwf:function(){var t=this,n=t.get("swfUrl");if(n){var i=t.get("url"),s=t.get("poster"),o=t.get("flashVars");e.mix(o,{controls:!0,src:i,poster:s});var u=e.QueryString.stringify(o);t._swfId?t._video.removeChild(e.one("#"+t._swfId)):t._swfId=e.guid();var a='<object id="'+t._swfId+'" ';r.ie?a+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+t.get("flashPlayerVersion")+'" ':a+='type="application/x-shockwave-flash" data="'+n+'" ',a+='height="100%" width="100%">',r.ie&&(a+='<param name="movie" value="'+n+'"/>');var f=t.get("fixedAttributes");for(var l in f)f.hasOwnProperty(l)&&(a+='<param name="'+l+'" value="'+f[l]+'" />');u&&(a+='<param name="flashVars" value="'+u+'" />'),s!==""&&(a+='<img src="'+s+'" alt="" />'),a+="</object>",t._video.append(a)}},_renderVideo:function(t){var i=this,s,o,u,l,c,h,p;l=a,r.gecko&&t?l=f:(s="",o="",u=i.get("height"),p=i.get("width"),u&&(s='height="'+u+'"'),p&&(o='width="'+p+'"')),c=n.sub(l,{height:s,id:e.guid(),width:o}),h=e.Node.create(c),i.get("contentBox").append(h),i._video=h},_uiSetFixedAttributes:function(){var e=this;e._renderSwfTask()},_uiSetFlashVars:function(){var e=this;e._renderSwfTask()},_uiSetOgvUrl:function(e){var t=this;if(r.gecko||r.opera){var n=t._video,i=t._usingVideo();if(!e&&i||e&&!i)n.remove(!0),t._renderVideoTask(!e);if(!e)t._renderSwfTask();else{var s=t._sourceOgv;s||(s=t._createSource('video/ogg; codecs="theora, vorbis"'),n.append(s),t._sourceOgv=s),s.attr("src",e)}}},_uiSetPoster:function(e){var t=this,n=t._video;t._usingVideo()&&n.setAttribute("poster",e),t._renderSwfTask()},_uiSetSwfUrl:function(){var e=this;e._renderSwfTask()},_uiSetUrl:function(e){var t=this,n=t.get("ogvUrl"),i=t._video,s=t._sourceMp4;if(r.gecko&&!t._usingVideo())s&&(s.remove(!0),t._sourceMp4=null);else if(i||!n)s||(s=t._createSource("video/mp4;"),i.append(s),t._sourceMp4=s),s.attr("src",e);t._renderSwfTask()},_usingVideo:function(){var e=this;return e._video.get("nodeName").toLowerCase()==="video"}}});e.Video=l},"3.0.3-deprecated.20",{requires:["node-event-html5","querystring-stringify-simple","aui-aria","aui-node","aui-component","aui-debounce"],skinnable:!0});
