(self.webpackChunk=self.webpackChunk||[]).push([[721],{3721:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>k});var o=t(5166);var n=t(2574),s={class:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},l={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},a={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},c=(0,o.createTextVNode)(" Username "),i={class:"mt-1"},u={class:"flex items-center justify-between"},d={key:0,class:"text-sm"};var p=t(4774),m=t(7181),f=t(4891),x=t(2942);const y={components:{XAlertFormError:p.Z,XInputLabel:m.Z,XInputText:f.Z,XInputErrors:x.Z},props:{title:{type:String},titleColors:{type:String,default:"text-gray-700"},subtitle:{type:String,default:"Sign in to your account"},subtitleColors:{type:String,default:"text-red-600"},errors:{type:Object,default:function(){return{}}},button:{type:String,default:"Send Reset Password Link"},buttonColors:{type:String,default:"text-white bg-red-600 hover:bg-red-700 focus:ring-red-500"},data:{type:Object,default:function(){return{username:null}}}},data:function(){return{form:this.data}},render:function(e,r,t,n,p,m){var f=(0,o.resolveComponent)("XAlertFormError"),x=(0,o.resolveComponent)("XInputLabel"),y=(0,o.resolveComponent)("XInputText"),g=(0,o.resolveComponent)("XInputErrors");return(0,o.openBlock)(),(0,o.createBlock)("div",s,[(0,o.createVNode)("div",null,[(0,o.renderSlot)(e.$slots,"header",{},(function(){return[(0,o.createVNode)("h1",{class:["text-center text-xl font-extrabold",[t.titleColors]]},(0,o.toDisplayString)(t.title),3),(0,o.createVNode)("h2",{class:["mt-1 text-center text-3xl font-extrabold",[t.subtitleColors]]},(0,o.toDisplayString)(t.subtitle),3)]}))]),(0,o.createVNode)("div",l,[(0,o.createVNode)("div",a,[(0,o.createVNode)("div",null,[(0,o.createVNode)("form",{class:"space-y-2",action:"#",method:"POST",onSubmit:r[2]||(r[2]=(0,o.withModifiers)((function(r){return e.$emit("sent",p.form)}),["prevent"]))},[(0,o.renderSlot)(e.$slots,"form",{},(function(){return[(0,o.renderSlot)(e.$slots,"errors",{},(function(){return[(0,o.createVNode)(f,{errors:t.errors},null,8,["errors"])]})),(0,o.renderSlot)(e.$slots,"username",{},(function(){return[(0,o.createVNode)("div",null,[(0,o.createVNode)(x,{for:"username",errors:t.errors.username},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["errors"]),(0,o.createVNode)("div",i,[(0,o.createVNode)(y,{modelValue:p.form.username,"onUpdate:modelValue":r[1]||(r[1]=function(e){return p.form.username=e}),type:"email",errors:t.errors.username},null,8,["modelValue","errors"]),(0,o.createVNode)(g,{errors:t.errors.username},null,8,["errors"])])])]})),(0,o.createVNode)("div",u,[e.$slots.forgotPassword?((0,o.openBlock)(),(0,o.createBlock)("div",d,[(0,o.renderSlot)(e.$slots,"forgotPassword")])):(0,o.createCommentVNode)("",!0)])]})),(0,o.renderSlot)(e.$slots,"button",{},(function(){return[(0,o.createVNode)("div",null,[(0,o.createVNode)("button",{type:"submit",class:["w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",[t.buttonColors]]},(0,o.toDisplayString)(t.button),3)])]})),(0,o.renderSlot)(e.$slots,"footer")],32)])])])])}},g={components:{XAuthForgotPassword:y},layout:n.Z,render:function(e,r,t,n,s,l){var a=(0,o.resolveComponent)("XAuthForgotPassword");return(0,o.openBlock)(),(0,o.createBlock)(a,{title:"Skelly Showcase",subtitle:"Reset your password"})}},k=g},2574:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var o=t(5166),n=(0,o.createTextVNode)(" This is the guest layout. "),s=(0,o.createTextVNode)(" Back to showcase "),l=(0,o.createVNode)("span",{"aria-hidden":"true"},"→",-1);const a={components:{XAlertBanner:t(7880).Z},render:function(e,r,t,a,c,i){var u=(0,o.resolveComponent)("inertia-link"),d=(0,o.resolveComponent)("XAlertBanner");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)(d,{class:"fixed top-0 w-full",dismissable:!1},{link:(0,o.withCtx)((function(){return[(0,o.createVNode)(u,{href:"/",class:"font-bold underline"},{default:(0,o.withCtx)((function(){return[s,l]})),_:1})]})),default:(0,o.withCtx)((function(){return[n]})),_:1}),(0,o.renderSlot)(e.$slots,"default")])}},c=a},7880:(e,r,t)=>{"use strict";t.d(r,{Z:()=>i});var o=t(5166),n={class:"pr-16 sm:text-center sm:px-16"},s={key:0,class:"block sm:ml-2 sm:inline-block"},l={key:0,class:"absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"},a=(0,o.createVNode)("span",{class:"sr-only"},"Dismiss",-1);const c={components:{XIcon:t(5).b0D},props:{color:{type:String,default:"bg-red-600"},textColor:{type:String,default:"text-white"},bannerClass:{},dismissable:{type:Boolean}},render:function(e,r,t,c,i,u){var d=(0,o.resolveComponent)("XIcon");return(0,o.openBlock)(),(0,o.createBlock)("div",{class:[[t.color],"w-full"]},[(0,o.createVNode)("div",{class:["max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 relative",[t.bannerClass]]},[(0,o.createVNode)("div",n,[(0,o.createVNode)("p",{class:["font-medium",[t.textColor]]},[(0,o.renderSlot)(e.$slots,"default"),e.$slots.link?((0,o.openBlock)(),(0,o.createBlock)("span",s,[(0,o.renderSlot)(e.$slots,"link")])):(0,o.createCommentVNode)("",!0)],2)]),t.dismissable?((0,o.openBlock)(),(0,o.createBlock)("div",l,[(0,o.createVNode)("button",{type:"button",onClick:r[1]||(r[1]=function(r){return e.$emit("dismiss")}),class:"flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white"},[a,(0,o.createVNode)(d,{class:"w-6 h-6 text-white"})])])):(0,o.createCommentVNode)("",!0)],2)],2)}},i=c},4774:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var o=t(5166),n={key:0,class:"rounded-md bg-red-50 p-4"},s={class:"flex items-center"},l={class:"flex-shrink-0"},a={class:"ml-3"},c={class:"text-sm text-red-700"};const i={components:{ExclamationCircleIcon:t(5).$Ow},props:{errors:{type:Object,default:function(){return{}}}},computed:{errorCount:function(){return Object.keys(this.errors).length}},methods:{parseGroup:function(e){return e instanceof Array?e:[e]}},render:function(e,r,t,i,u,d){var p=(0,o.resolveComponent)("ExclamationCircleIcon");return d.errorCount?((0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",l,[(0,o.createVNode)(p,{class:"w-6 h-6 text-red-500"})]),(0,o.createVNode)("div",a,[(0,o.createVNode)("div",c,[(0,o.createVNode)("ul",{class:{"list-disc pl-5 space-y-1":d.errorCount>1}},[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(t.errors,(function(e){return(0,o.openBlock)(),(0,o.createBlock)(o.Fragment,null,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(d.parseGroup(e),(function(e,r){return(0,o.openBlock)(),(0,o.createBlock)("li",{key:r},(0,o.toDisplayString)(e),1)})),128))],64)})),256))],2)])])])])):(0,o.createCommentVNode)("",!0)}},u=i},2942:(e,r,t)=>{"use strict";t.d(r,{Z:()=>l});var o=t(5166),n={key:0,class:"mt-2 text-sm text-red-600"};const s={props:{errors:{type:[Array,String],default:function(){return[]},required:!0}},methods:{parseErrors:function(){return this.errors instanceof Array?this.errors:[this.errors]}},render:function(e,r,t,s,l,a){return a.parseErrors().length?((0,o.openBlock)(),(0,o.createBlock)("p",n,(0,o.toDisplayString)(a.parseErrors()[0]),1)):(0,o.createCommentVNode)("",!0)}},l=s},7181:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var o=t(5166);const n={props:{errors:{type:[Array,String],default:function(){return[]}}},render:function(e,r,t,n,s,l){return(0,o.openBlock)(),(0,o.createBlock)("label",{class:["block text-sm font-medium",{"text-gray-700":0===t.errors.length,"text-red-600":t.errors.length>0}]},[(0,o.renderSlot)(e.$slots,"default")],2)}},s=n},4891:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(5166),n={class:"relative flex-1"},s={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"};const l={components:{ExclamationCircleIcon:t(5).$Ow},inheritAttrs:!1,props:{inputClass:{type:String,default:""},errors:{type:[Array,String],default:function(){return[]}},modelValue:{required:!0}},render:function(e,r,t,l,a,c){var i=(0,o.resolveComponent)("ExclamationCircleIcon");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.withDirectives)((0,o.createVNode)("input",(0,o.mergeProps)({class:["appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm",[t.errors.length?"border-red-300 text-red-900 placeholder-red-300 focus:ring-red-300":"",t.inputClass]],"onUpdate:modelValue":r[1]||(r[1]=function(e){return t.modelValue=e})},e.$attrs),null,16),[[o.vModelDynamic,t.modelValue]]),t.errors.length?((0,o.openBlock)(),(0,o.createBlock)("div",s,[(0,o.createVNode)(i,{class:"w-5 h-5 text-red-500"})])):(0,o.createCommentVNode)("",!0)])}},a=l}}]);