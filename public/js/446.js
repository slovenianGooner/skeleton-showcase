(self.webpackChunk=self.webpackChunk||[]).push([[446],{3446:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var o=r(5166),n={class:"p-8 max-w-screen-lg"},l=(0,o.createVNode)("h3",{class:"font-semibold mb-4"},"Select Input",-1),u=(0,o.createTextVNode)(" Country "),a={class:"mt-1"},c=(0,o.createVNode)("h3",{class:"mt-8 mb-4 font-semibold"},"Select Input With Error",-1),s=(0,o.createTextVNode)(" Country "),i={class:"mt-1"},d=(0,o.createVNode)("h3",{class:"mt-8 mb-4 font-semibold"},"Select Input With Button",-1),m=(0,o.createTextVNode)(" Language "),p={class:"mt-1"};var f=r(7304);const V={components:{XPageHeader:f.Dn,XInputSelect:f.ft,XInputSelectButton:f.K4,XCard:f.KE,XInputLabel:f.TU,XInputErrors:f.R_},data:function(){return{form:{country:null,language:null},countries:[{value:"AT",title:"Austria"},{value:"AU",title:"Australia"}],languages:["PHP","Javascript","Vue","Laravel"],errors:{country:["The country field is required."]}}},render:function(e,t,r,f,V,v){var N=(0,o.resolveComponent)("XPageHeader"),g=(0,o.resolveComponent)("XInputLabel"),b=(0,o.resolveComponent)("XInputSelect"),C=(0,o.resolveComponent)("x-input-errors"),h=(0,o.resolveComponent)("XInputSelectButton"),y=(0,o.resolveComponent)("x-card");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(N,{title:"Inputs",breadcrumbs:[{title:"Home",href:"/"},{title:"Inputs",href:"/inputs/select"}],onBack:t[1]||(t[1]=function(t){return e.$inertia.get(t)}),onNavigate:t[2]||(t[2]=function(t){return e.$inertia.get(t)})}),(0,o.createVNode)(y,{class:"mt-5",title:"Selects"},{default:(0,o.withCtx)((function(){return[l,(0,o.createVNode)("div",null,[(0,o.createVNode)(g,{for:"country"},{default:(0,o.withCtx)((function(){return[u]})),_:1}),(0,o.createVNode)("div",a,[(0,o.createVNode)(b,{options:V.countries,modelValue:V.form.country,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.form.country=e}),"value-resolver":"value","label-resolver":"title"},null,8,["options","modelValue"])])]),c,(0,o.createVNode)("div",null,[(0,o.createVNode)(g,{for:"Country",errors:V.errors.country},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["errors"]),(0,o.createVNode)("div",i,[(0,o.createVNode)(b,{options:V.countries,modelValue:V.form.country,"onUpdate:modelValue":t[4]||(t[4]=function(e){return V.form.country=e}),"value-resolver":"value","label-resolver":"title",errors:V.errors.country},null,8,["options","modelValue","errors"]),(0,o.createVNode)(C,{errors:V.errors.country},null,8,["errors"])])]),d,(0,o.createVNode)("div",null,[(0,o.createVNode)(g,{for:"language"},{default:(0,o.withCtx)((function(){return[m]})),_:1}),(0,o.createVNode)("div",p,[(0,o.createVNode)(h,{options:V.languages,modelValue:V.form.language,"onUpdate:modelValue":t[5]||(t[5]=function(e){return V.form.language=e}),button:"Submit"},null,8,["options","modelValue"])])])]})),_:1})])}},v=V}}]);