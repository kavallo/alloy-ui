YUI.add("aui-form-builder-field-list",function(e,t){var n=e.getClassName("form","builder","field","list"),r=e.getClassName("form","builder","field","list","add","button"),i=e.getClassName("form","builder","field","list","add","button","icon"),s=e.getClassName("form","builder","field","list","add","button","label"),o=e.getClassName("form","builder","field","list","add","button","large"),u=e.getClassName("form","builder","field","list","add","button","plus","icon"),a=e.getClassName("form","builder","field","list","add","button","visible"),f=e.getClassName("form","builder","field","list","add","container"),l=e.getClassName("form","builder","field","list","container"),c=e.getClassName("form","builder","field","list","empty"),h=e.getClassName("form","builder","field","move","target"),p=e.getClassName("form","builder","field","move","target","label"),d=e.getClassName("form","builder","list","move","target");e.FormBuilderFieldList=e.Base.create("form-builder-field-list",e.Base,[],{TPL_ADD_FIELD:'<div class="'+f+'">'+'<a class="'+r+'" href="javascript:;">'+'<span class="'+i+" "+u+'">+</span>'+'<label class="'+s+'">'+"ADD FIELD"+"</label>"+"</a></div>",TPL_FIELD_LIST:'<div class="'+n+'">'+'<div class="'+l+'"></div>'+"</div>",TPL_FIELD_MOVE_TARGET:'<button type="button" class="'+h+" "+d+' layout-builder-move-target layout-builder-move-col-target">'+'<label class="'+p+'">{pasteHere}</label></button>',initializer:function(){var t=this.get("content");this._uiSetFields(this.get("fields")),t.delegate("click",this._onClickAddField,"."+r,this),t.delegate("mouseenter",this._onMouseEnterAddButton,"."+f,this),t.delegate("mouseleave",this._onMouseLeaveAddButton,"."+f,this),this.after("fieldsChange",e.bind(this._afterFieldsChange,this))},addField:function(t,n){var r=this.get("fields");e.Lang.isNumber(n)?r.splice(n,0,t):r.splice(this._newFieldIndex,0,t),this.set("fields",r)},removeField:function(e){var t=this.get("fields"),n=t.indexOf(e);t.splice(n,1),this.set("fields",t)},_afterFieldsChange:function(){var e=this.get("fields");this._uiSetFields(e),this._updateRemovableLayoutColProperty()},_appendAddFieldNode:function(t,n){var r,i;r=e.Node.create(this.TPL_ADD_FIELD),i=e.Node.create(e.Lang.sub(this.TPL_FIELD_MOVE_TARGET,{pasteHere:this.get("strings").pasteHere})),i.setData("field-list-index",n),t.append(r),t.append(i)},_onClickAddField:function(e){var t=this.get("content").all("."+r);this._newFieldIndex=t.indexOf(e.currentTarget)},_onMouseEnterAddButton:function(e){var t=e.currentTarget;this.get("fields").length>0&&t.addClass(a)},_onMouseLeaveAddButton:function(e){var t=e.currentTarget;this.get("fields").length>0&&t.removeClass(a)},_uiSetFields:function(e){var t=this.get("content"),n=t.one("."+l),i;n.empty();for(i=0;i<e.length;i++)this._appendAddFieldNode(n,i),n.append(e[i].get("content"));this._appendAddFieldNode(n,i),t.toggleClass(c,!e.length),e.length===0&&(t.one("."+f).addClass(a),t.one("."+r).addClass(o))},_updateRemovableLayoutColProperty:function(){var e=this.get("fields"),t=this.get("content"),n=t.ancestor(".col"),r;n&&(r=n.getData("layout-col"),r.set("removable",e.length===0))}},{ATTRS:{content:{validator:function(t){return e.instanceOf(t,e.Node)},valueFn:function(){return e.Node.create(this.TPL_FIELD_LIST)},writeOnce:"initOnly"},fields:{value:[]},strings:{value:{pasteHere:"Paste here"},writeOnce:!0}}})},"3.0.3-deprecated.20",{requires:["aui-form-builder-field-type","aui-form-builder-field-types","aui-form-builder-layout-builder"],skinnable:!0});
