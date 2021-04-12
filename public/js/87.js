(self.webpackChunk=self.webpackChunk||[]).push([[87],{3087:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>P});var n=o(5166),r={class:"p-8 max-w-screen-lg"},c={class:"flex flex-col"},a=(0,n.createVNode)("h3",{class:"font-semibold mb-4 text-lg"},"Simple modal",-1),i={class:"mb-4"},l=(0,n.createTextVNode)(" Open simple modal "),d=(0,n.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Simple Modal ",-1),s=(0,n.createVNode)("div",{class:"prose"},[(0,n.createVNode)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. ")],-1),u={class:"flex justify-end items-center space-x-2"},f=(0,n.createTextVNode)("Cancel"),m=(0,n.createTextVNode)(" Save "),x=(0,n.createVNode)("h3",{class:"font-semibold mb-4 text-lg"},"Confirmation modal",-1),C={class:"mb-4"},p=(0,n.createTextVNode)(" Open confirmation modal "),h=(0,n.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Are you sure? ",-1),N=(0,n.createTextVNode)(" Confirming this action will delete all your account data. "),V=(0,n.createVNode)("h3",{class:"font-semibold mb-4 text-lg"},"Fullscreen modal",-1),k={class:"mb-4"},w=(0,n.createTextVNode)(" Open fullscreen modal "),g=(0,n.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Fullscreen Modal ",-1),v={class:"prose max-w-none"},b={class:"flex justify-end items-center space-x-2"},y=(0,n.createTextVNode)("Cancel"),B=(0,n.createTextVNode)(" Save "),T=(0,n.createVNode)("h3",{class:"font-semibold mb-4 text-lg"},"Modal switching",-1),M={class:"mb-4"},_=(0,n.createTextVNode)(" Open initial modal "),X=(0,n.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Initial Modal ",-1),$=(0,n.createVNode)("div",{class:"prose"},[(0,n.createVNode)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. ")],-1),S={class:"flex justify-end items-center space-x-2"},F=(0,n.createTextVNode)("Cancel"),O=(0,n.createTextVNode)(" Open another modal "),L=(0,n.createVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"}," Second Modal ",-1),E=(0,n.createVNode)("div",{class:"prose"},[(0,n.createVNode)("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. ")],-1),j={class:"flex justify-end items-center space-x-2"},q=(0,n.createTextVNode)("Cancel"),A=(0,n.createTextVNode)(" Save ");var H=o(7698);const D={components:{XAlertSuccess:H.Qc,XButtonForm:H.oH,XButtonLink:H.ko,XCard:H.KE,XModal:H.$o,XModalConfirm:H.nx,XModalFullscreen:H.gu,XPageHeader:H.Dn},methods:{submit:function(){this.$inertia.post("modal")},submitFullscreen:function(){this.$inertia.post("modal")},confirm:function(){this.$inertia.delete("confirmation-modal")}},render:function(e,t,o,H,D,P){var I=(0,n.resolveComponent)("XPageHeader"),K=(0,n.resolveComponent)("XAlertSuccess"),Q=(0,n.resolveComponent)("XButtonForm"),z=(0,n.resolveComponent)("XModal"),G=(0,n.resolveComponent)("XModalConfirm"),J=(0,n.resolveComponent)("XModalFullscreen"),R=(0,n.resolveComponent)("XCard");return(0,n.openBlock)(),(0,n.createBlock)("div",r,[(0,n.createVNode)(I,{title:"Modals",breadcrumbs:[{title:"Home",href:"/"},{title:"Modals",href:"/modals"}],onBack:t[1]||(t[1]=function(t){return e.$inertia.get(t)}),onNavigate:t[2]||(t[2]=function(t){return e.$inertia.get(t)})}),e.$page.props.flash.success?((0,n.openBlock)(),(0,n.createBlock)(K,{key:0,class:"mt-4"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.$page.props.flash.success),1)]})),_:1})):(0,n.createCommentVNode)("",!0),(0,n.createVNode)(R,{class:"mt-5"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",c,[a,(0,n.createVNode)("div",i,[(0,n.createVNode)(Q,{onClick:t[3]||(t[3]=function(t){return e.$refs.simpleModal.show()})},{default:(0,n.withCtx)((function(){return[l]})),_:1})]),((0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(z,{ref:"simpleModal"},{header:(0,n.withCtx)((function(){return[d]})),footer:(0,n.withCtx)((function(e){var t=e.close;return[(0,n.createVNode)("div",u,[(0,n.createVNode)(Q,{onClick:t},{default:(0,n.withCtx)((function(){return[f]})),_:2},1032,["onClick"]),(0,n.createVNode)(Q,{color:"gray","text-color":"text-white",onClick:function(e){t(),P.submit()}},{default:(0,n.withCtx)((function(){return[m]})),_:2},1032,["onClick"])])]})),default:(0,n.withCtx)((function(){return[s]})),_:1},512)])),x,(0,n.createVNode)("div",C,[(0,n.createVNode)(Q,{onClick:t[4]||(t[4]=function(t){return e.$refs.confirmationModal.show()})},{default:(0,n.withCtx)((function(){return[p]})),_:1})]),((0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(G,{ref:"confirmationModal",onSubmit:P.confirm},{header:(0,n.withCtx)((function(){return[h]})),default:(0,n.withCtx)((function(){return[N]})),_:1},8,["onSubmit"])])),V,(0,n.createVNode)("div",k,[(0,n.createVNode)(Q,{onClick:t[5]||(t[5]=function(t){return e.$refs.fullscreenModal.show()})},{default:(0,n.withCtx)((function(){return[w]})),_:1})]),((0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(J,{ref:"fullscreenModal",transition:!1},{header:(0,n.withCtx)((function(){return[g]})),footer:(0,n.withCtx)((function(e){var t=e.close;return[(0,n.createVNode)("div",b,[(0,n.createVNode)(Q,{onClick:t},{default:(0,n.withCtx)((function(){return[y]})),_:2},1032,["onClick"]),(0,n.createVNode)(Q,{color:"gray","text-color":"text-white",onClick:function(e){t(),P.submit()}},{default:(0,n.withCtx)((function(){return[B]})),_:2},1032,["onClick"])])]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)("div",v,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(Array(22).keys(),(function(e){return(0,n.openBlock)(),(0,n.createBlock)("p",{key:e}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum. ")})),128))])]})),_:1},512)])),T,(0,n.createVNode)("div",M,[(0,n.createVNode)(Q,{onClick:t[6]||(t[6]=function(t){return e.$refs.modalOne.show()})},{default:(0,n.withCtx)((function(){return[_]})),_:1}),((0,n.openBlock)(),(0,n.createBlock)(n.Teleport,{to:"body"},[(0,n.createVNode)(z,{ref:"modalOne"},{header:(0,n.withCtx)((function(){return[X]})),footer:(0,n.withCtx)((function(t){var o=t.close;return[(0,n.createVNode)("div",S,[(0,n.createVNode)(Q,{onClick:o},{default:(0,n.withCtx)((function(){return[F]})),_:2},1032,["onClick"]),(0,n.createVNode)(Q,{color:"gray","text-color":"text-white",onClick:function(t){o(),e.$refs.modalTwo.show(!1)}},{default:(0,n.withCtx)((function(){return[O]})),_:2},1032,["onClick"])])]})),default:(0,n.withCtx)((function(){return[$]})),_:1},512),(0,n.createVNode)(z,{ref:"modalTwo",transition:!1},{header:(0,n.withCtx)((function(){return[L]})),footer:(0,n.withCtx)((function(e){var t=e.close;return[(0,n.createVNode)("div",j,[(0,n.createVNode)(Q,{onClick:t},{default:(0,n.withCtx)((function(){return[q]})),_:2},1032,["onClick"]),(0,n.createVNode)(Q,{color:"gray","text-color":"text-white",onClick:function(e){t(),P.submit()}},{default:(0,n.withCtx)((function(){return[A]})),_:2},1032,["onClick"])])]})),default:(0,n.withCtx)((function(){return[E]})),_:1},512)]))])])]})),_:1})])}},P=D}}]);