layui.define(["table","form"],function(e){var i=(layui.$,layui.admin),t=layui.view,l=layui.table,r=layui.form;l.render({elem:"#LAY-user-manage",url:"./json/useradmin/webuser.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"ID",sort:!0},{field:"username",title:"\u7528\u6237\u540d",minWidth:100},{field:"avatar",title:"\u5934\u50cf",width:100,templet:"#imgTpl"},{field:"phone",title:"\u624b\u673a"},{field:"email",title:"\u90ae\u7bb1"},{field:"sex",width:80,title:"\u6027\u522b"},{field:"ip",title:"IP"},{field:"jointime",title:"\u52a0\u5165\u65f6\u95f4",sort:!0},{title:"\u64cd\u4f5c",width:150,align:"center",fixed:"right",toolbar:"#table-useradmin-webuser"}]],page:!0,limit:30,height:"full-320",text:"\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"}),l.on("tool(LAY-user-manage)",function(e){var l=e.data;"del"===e.event?layer.prompt({formType:1,title:"\u654f\u611f\u64cd\u4f5c\uff0c\u8bf7\u9a8c\u8bc1\u53e3\u4ee4"},function(i,t){layer.close(t),layer.confirm("\u771f\u7684\u5220\u9664\u884c\u4e48",function(i){e.del(),layer.close(i)})}):"edit"===e.event&&i.popup({title:"\u7f16\u8f91\u7528\u6237",area:["500px","450px"],id:"LAY-popup-user-add",success:function(e,i){t(this.id).render("user/user/userform",l).done(function(){r.render(null,"layuiadmin-form-useradmin"),r.on("submit(LAY-user-front-submit)",function(e){e.field;layui.table.reload("LAY-user-manage"),layer.close(i)})})}})}),l.render({elem:"#LAY-user-back-manage",url:"./json/useradmin/mangadmin.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:80,title:"ID",sort:!0},{field:"loginname",title:"\u767b\u5f55\u540d"},{field:"telphone",title:"\u624b\u673a"},{field:"email",title:"\u90ae\u7bb1"},{field:"role",title:"\u89d2\u8272"},{field:"jointime",title:"\u52a0\u5165\u65f6\u95f4",sort:!0},{field:"check",title:"\u5ba1\u6838\u72b6\u6001",templet:"#buttonTpl",minWidth:80,align:"center"},{title:"\u64cd\u4f5c",width:150,align:"center",fixed:"right",toolbar:"#table-useradmin-admin"}]],text:"\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"}),l.on("tool(LAY-user-back-manage)",function(e){var l=e.data;"del"===e.event?layer.prompt({formType:1,title:"\u654f\u611f\u64cd\u4f5c\uff0c\u8bf7\u9a8c\u8bc1\u53e3\u4ee4"},function(i,t){layer.close(t),layer.confirm("\u786e\u5b9a\u5220\u9664\u6b64\u7ba1\u7406\u5458\uff1f",function(i){console.log(e),e.del(),layer.close(i)})}):"edit"===e.event&&i.popup({title:"\u7f16\u8f91\u7ba1\u7406\u5458",area:["420px","450px"],id:"LAY-popup-user-add",success:function(e,i){t(this.id).render("user/administrators/adminform",l).done(function(){r.render(null,"layuiadmin-form-admin"),r.on("submit(LAY-user-back-submit)",function(e){e.field;layui.table.reload("LAY-user-back-manage"),layer.close(i)})})}})}),l.render({elem:"#LAY-user-back-role",url:"./json/useradmin/role.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:80,title:"ID",sort:!0},{field:"rolename",title:"\u89d2\u8272\u540d"},{field:"limits",title:"\u62e5\u6709\u6743\u9650"},{field:"descr",title:"\u5177\u4f53\u63cf\u8ff0"},{title:"\u64cd\u4f5c",width:150,align:"center",fixed:"right",toolbar:"#table-useradmin-admin"}]],text:"\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u51fa\u73b0\u5f02\u5e38\uff01"}),l.on("tool(LAY-user-back-role)",function(e){var l=e.data;"del"===e.event?layer.confirm("\u786e\u5b9a\u5220\u9664\u6b64\u89d2\u8272\uff1f",function(i){e.del(),layer.close(i)}):"edit"===e.event&&i.popup({title:"\u6dfb\u52a0\u65b0\u89d2\u8272",area:["500px","480px"],id:"LAY-popup-user-add",success:function(e,i){t(this.id).render("user/administrators/roleform",l).done(function(){r.render(null,"layuiadmin-form-role"),r.on("submit(LAY-user-role-submit)",function(e){e.field;layui.table.reload("LAY-user-back-role"),layer.close(i)})})}})}),e("useradmin",{})});