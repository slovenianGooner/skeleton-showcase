(self.webpackChunk=self.webpackChunk||[]).push([[341],{7341:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>f});var r=t(5166),n={class:"p-8"},a=(0,r.createTextVNode)(" JSON Params "),d={class:"mt-1"},c={key:0,class:"mt-4 prose"},l={class:"mt-4"},u=(0,r.createTextVNode)(" PHP "),i={class:"mt-1"},m={key:1,class:"mt-4 prose"};var s=t(7980);const p={components:{XPageHeader:s.Dn,XCard:s.KE,XInputErrors:s.R_,XInputLabel:s.TU,XInputCode:s.lx},data:function(){return{form:{code:'{"url": "https://adria-mobil.jp/catalog/", "countries": ["jp"], "title_key": "Download Centre"}',codeTwo:null}}},render:function(e,o,t,s,p,f){var V=(0,r.resolveComponent)("XPageHeader"),C=(0,r.resolveComponent)("XInputLabel"),N=(0,r.resolveComponent)("XInputCode"),v=(0,r.resolveComponent)("XCard");return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)(V,{title:"Code",breadcrumbs:[{title:"Home",href:"/"},{title:"Inputs",href:"/inputs"}],onBack:o[1]||(o[1]=function(o){return e.$inertia.get(o)}),onNavigate:o[2]||(o[2]=function(o){return e.$inertia.get(o)})}),(0,r.createVNode)(v,{class:"mt-8",title:"Code Editor",overflows:!1},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",null,[(0,r.createVNode)(C,{for:"about"},{default:(0,r.withCtx)((function(){return[a]})),_:1}),(0,r.createVNode)("div",d,[(0,r.createVNode)(N,{modelValue:p.form.code,"onUpdate:modelValue":o[3]||(o[3]=function(e){return p.form.code=e})},null,8,["modelValue"])])]),p.form.code?((0,r.openBlock)(),(0,r.createBlock)("div",c,[(0,r.createVNode)("pre",{innerHTML:p.form.code},null,8,["innerHTML"])])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",l,[(0,r.createVNode)(C,{for:"about"},{default:(0,r.withCtx)((function(){return[u]})),_:1}),(0,r.createVNode)("div",i,[(0,r.createVNode)(N,{modelValue:p.form.codeTwo,"onUpdate:modelValue":o[4]||(o[4]=function(e){return p.form.codeTwo=e}),mode:"php"},null,8,["modelValue"])])]),p.form.codeTwo?((0,r.openBlock)(),(0,r.createBlock)("div",m,[(0,r.createVNode)("pre",{innerHTML:p.form.codeTwo},null,8,["innerHTML"])])):(0,r.createCommentVNode)("",!0)]})),_:1})])}},f=p}}]);