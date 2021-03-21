(self.webpackChunk=self.webpackChunk||[]).push([[4],{6004:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>l});const n={methods:{submit:function(){this.$inertia.post("modal")},submitFullscreen:function(){this.$inertia.post("modal")},confirm:function(){this.$inertia.delete("confirmation-modal")}},data:function(){return{examples:{simpleModal:'\x3c!-- button to open the modal --\x3e\n<div>\n    <x-button-form-md @click="$refs.simpleModal.show()">\n    Open simple modal\n    </x-button-form-md>\n</div>\n\n\x3c!-- modal gets portaled to modal portal target --\x3e\n<portal to="modal">\n    <x-modal ref="simpleModal">\n        <template #header>\n            Modal header.\n        </template>\n        <template>\n            Body content.\n        </template>\n        <template #footer="{ close }">\n            <div class="flex justify-end items-center space-x-2">\n                <x-button-form-md @click="close">Cancel</x-button-form-md>\n                <x-button-form-md color="gray" text-color="text-white" @click="close(); submit();">\n                    Save\n                </x-button-form-md>\n            </div>\n        </template>\n    </x-modal>\n</portal>',confirmationModal:'\x3c!-- button to open the modal --\x3e\n<div>\n    <x-button-form-md @click="$refs.confirmationModal.show()">\n        Open confirmation modal\n    </x-button-form-md>\n</div>\n\n\x3c!-- modal gets portaled to modal portal target --\x3e\n<portal to="modal">\n    <x-modal-confirm ref="confirmationModal" @submit="confirm">\n        <template #header>\n            Modal header\n        </template>\n        <template>\n            Confirming this action will delete all your account data.\n        </template>\n    </x-modal-confirm>\n</portal>',fullScreenModal:'\x3c!-- button to open the modal --\x3e\n<div>\n    <x-button-form-md @click="$refs.fullscreenModal.show()">\n        Open fullscreen modal\n    </x-button-form-md>\n</div>\n\n\x3c!-- modal gets portaled to modal portal target --\x3e\n<portal to="modal">\n    <x-modal-fullscreen ref="fullscreenModal">\n        <template #header>\n            Modal header\n        </template>\n        <template>\n            Body.\n        </template>\n        <template #footer="{ close }">\n            <div class="flex justify-end items-center space-x-2">\n                <x-button-form-md @click="close">Cancel</x-button-form-md>\n                <x-button-form-md color="gray" text-color="text-white" @click="close(); submit();">\n                    Save\n                </x-button-form-md>\n            </div>\n        </template>\n    </x-modal-fullscreen>\n</portal>'}}}};const l=(0,o(1900).Z)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-8 max-w-screen-lg"},[o("x-page-header",{attrs:{title:"Modals",breadcrumbs:[{title:"Home",href:"/"},{title:"Modals",href:"/modals"}]},on:{back:function(e){return t.$inertia.get(e)},navigate:function(e){return t.$inertia.get(e)}}}),t._v(" "),t.$page.props.flash.success?o("x-alert-success",{staticClass:"mt-4"},[[t._v("\n      "+t._s(t.$page.props.flash.success)+"\n    ")]],2):t._e(),t._v(" "),o("x-card",{staticClass:"mt-5"},[o("div",{staticClass:"flex flex-col"},[o("h3",{staticClass:"font-semibold mb-4 text-lg"},[t._v("Simple modal")]),t._v(" "),o("div",[o("x-button-form-md",{on:{click:function(e){return t.$refs.simpleModal.show()}}},[t._v("\n          Open simple modal\n        ")])],1),t._v(" "),o("div",{staticClass:"prose mt-4 mb-8"},[o("pre",[t._v(t._s(t.examples.simpleModal))])]),t._v(" "),o("portal",{attrs:{to:"modal"}},[o("x-modal",{ref:"simpleModal",scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Simple Modal\n            ")])]},proxy:!0},{key:"footer",fn:function(e){var n=e.close;return[o("div",{staticClass:"flex justify-end items-center space-x-2"},[o("x-button-form-md",{on:{click:n}},[t._v("Cancel")]),t._v(" "),o("x-button-form-md",{attrs:{color:"gray","text-color":"text-white"},on:{click:function(e){n(),t.submit()}}},[t._v("\n                Save\n              ")])],1)]}}])},[t._v(" "),[o("div",{staticClass:"prose"},[o("p",[t._v("\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Explicabo totam non cumque deserunt officiis ex maiores\n                nostrum.\n              ")])])]],2)],1),t._v(" "),o("h3",{staticClass:"font-semibold mb-4 text-lg"},[t._v("Confirmation modal")]),t._v(" "),o("div",[o("x-button-form-md",{on:{click:function(e){return t.$refs.confirmationModal.show()}}},[t._v("\n          Open confirmation modal\n        ")])],1),t._v(" "),o("div",{staticClass:"prose mt-4 mb-8"},[o("pre",[t._v(t._s(t.examples.confirmationModal))])]),t._v(" "),o("portal",{attrs:{to:"modal"}},[o("x-modal-confirm",{ref:"confirmationModal",on:{submit:t.confirm},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Are you sure?\n            ")])]},proxy:!0}])},[t._v(" "),[t._v("\n            Confirming this action will delete all your account data.\n          ")]],2)],1),t._v(" "),o("h3",{staticClass:"font-semibold mb-4 text-lg"},[t._v("Fullscreen modal")]),t._v(" "),o("div",[o("x-button-form-md",{on:{click:function(e){return t.$refs.fullscreenModal.show()}}},[t._v("\n          Open fullscreen modal\n        ")])],1),t._v(" "),o("div",{staticClass:"prose mt-4 mb-8"},[o("pre",[t._v(t._s(t.examples.fullScreenModal))])]),t._v(" "),o("portal",{attrs:{to:"modal"}},[o("x-modal-fullscreen",{ref:"fullscreenModal",attrs:{transition:!1},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n              Fullscreen Modal\n            ")])]},proxy:!0},{key:"footer",fn:function(e){var n=e.close;return[o("div",{staticClass:"flex justify-end items-center space-x-2"},[o("x-button-form-md",{on:{click:n}},[t._v("Cancel")]),t._v(" "),o("x-button-form-md",{attrs:{color:"gray","text-color":"text-white"},on:{click:function(e){n(),t.submit()}}},[t._v("\n                Save\n              ")])],1)]}}])},[t._v(" "),[o("div",{staticClass:"prose max-w-none"},t._l(Array(22).keys(),(function(e){return o("p",{key:e},[t._v("\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Explicabo totam non cumque deserunt officiis ex maiores\n                nostrum.\n              ")])})),0)]],2)],1),t._v(" "),o("h3",{staticClass:"font-semibold mb-4 text-lg"},[t._v("Modal switching")]),t._v(" "),o("div",[o("x-button-form-md",{on:{click:function(e){return t.$refs.modalOne.show()}}},[t._v("\n          Open initial modal\n        ")]),t._v(" "),o("portal",{attrs:{to:"modal"}},[o("x-modal",{ref:"modalOne",scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                Initial Modal\n              ")])]},proxy:!0},{key:"footer",fn:function(e){var n=e.close;return[o("div",{staticClass:"flex justify-end items-center space-x-2"},[o("x-button-form-md",{on:{click:n}},[t._v("Cancel")]),t._v(" "),o("x-button-form-md",{attrs:{color:"gray","text-color":"text-white"},on:{click:function(e){n(),t.$refs.modalTwo.show(!1)}}},[t._v("\n                  Open another modal\n                ")])],1)]}}])},[t._v(" "),[o("div",{staticClass:"prose"},[o("p",[t._v("\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Explicabo totam non cumque deserunt officiis ex maiores\n                  nostrum.\n                ")])])]],2),t._v(" "),o("x-modal",{ref:"modalTwo",attrs:{transition:!1},scopedSlots:t._u([{key:"header",fn:function(){return[o("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n                Second Modal\n              ")])]},proxy:!0},{key:"footer",fn:function(e){var n=e.close;return[o("div",{staticClass:"flex justify-end items-center space-x-2"},[o("x-button-form-md",{on:{click:n}},[t._v("Cancel")]),t._v(" "),o("x-button-form-md",{attrs:{color:"gray","text-color":"text-white"},on:{click:function(e){n(),t.submit()}}},[t._v("\n                  Save\n                ")])],1)]}}])},[t._v(" "),[o("div",{staticClass:"prose"},[o("p",[t._v("\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Explicabo totam non cumque deserunt officiis ex maiores\n                  nostrum.\n                ")])])]],2)],1)],1)],1)])],1)}),[],!1,null,null,null).exports}}]);