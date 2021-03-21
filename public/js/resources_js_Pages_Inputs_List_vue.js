(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Inputs_List_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      list: [{
        name: "Lovro",
        surname: "Papež",
        toys: ["Demo"]
      }, {
        name: "Irena",
        surname: "Papež"
      }, {
        name: "Ema",
        surname: "Papež"
      }, {
        name: "Filip",
        surname: "Papež"
      }],
      simpleList: ["Lovro", "Irena", "Ema", "Filip"],
      examples: {
        list: "<x-input-list\n    :collapsed=\"false\"\n    v-model=\"list\"\n    :assign-missing-props=\"true\"\n    :default=\"{ name: null, surname: null, toys: [] }\">\n    <template #default=\"{ item, index }\">\n        <div>\n            <x-input-label :for=\"'name' + item.uid\">Name</x-input-label>\n            <div class=\"mt-1\">\n            <x-input-text :id=\"'name' + item.uid\" v-model=\"item.name\" />\n            </div>\n        </div>\n        ... more inputs here\n    </template>\n</x-input-list>",
        simpleList: "<x-input-simple-list :collapsed=\"false\" v-model=\"simpleList\">\n    <template #default=\"{ item, index }\">\n        <x-input-text :id=\"'value' + item.uid\" v-model=\"item.value\" />\n    </template>\n</x-input-simple-list>"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Inputs/List.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Inputs/List.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=5cdb77ea& */ "./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__.render,
  _List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Inputs/List.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5cdb77ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./List.vue?vue&type=template&id=5cdb77ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/List.vue?vue&type=template&id=5cdb77ea& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "p-8" },
    [
      _c("x-page-header", {
        attrs: {
          title: "Inputs",
          breadcrumbs: [
            {
              title: "Home",
              href: "/"
            },
            {
              title: "Inputs",
              href: "/inputs/photo"
            }
          ]
        },
        on: {
          back: function($event) {
            return _vm.$inertia.get($event)
          },
          navigate: function($event) {
            return _vm.$inertia.get($event)
          }
        }
      }),
      _vm._v(" "),
      _c(
        "x-card",
        { staticClass: "mt-8", attrs: { title: "List" } },
        [
          _c("x-input-list", {
            attrs: {
              "assign-missing-props": true,
              default: { name: null, surname: null, toys: [] }
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var index = ref.index
                  return [
                    _c("div", [
                      _c(
                        "div",
                        [
                          _c(
                            "x-input-label",
                            { attrs: { for: "name" + item.uid } },
                            [_vm._v("Name")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-1" },
                            [
                              _c("x-input-text", {
                                attrs: { id: "name" + item.uid },
                                model: {
                                  value: item.name,
                                  callback: function($$v) {
                                    _vm.$set(item, "name", $$v)
                                  },
                                  expression: "item.name"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        [
                          _c(
                            "x-input-label",
                            { attrs: { for: "surname" + item.uid } },
                            [_vm._v("Surname")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-1" },
                            [
                              _c("x-input-text", {
                                attrs: { id: "surname" + item.uid },
                                model: {
                                  value: item.surname,
                                  callback: function($$v) {
                                    _vm.$set(item, "surname", $$v)
                                  },
                                  expression: "item.surname"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "mt-4" },
                        [
                          _c(
                            "x-input-label",
                            { attrs: { for: "toys" + item.uid } },
                            [_vm._v("Toys")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-1" },
                            [
                              _c("x-input-simple-list", {
                                attrs: {
                                  id: "toys" + item.uid,
                                  "extra-data": item
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var item = ref.item
                                        var index = ref.index
                                        var extraData = ref.extraData
                                        return [
                                          _c("x-input-text", {
                                            attrs: { id: "value" + item.uid },
                                            model: {
                                              value: item.value,
                                              callback: function($$v) {
                                                _vm.$set(item, "value", $$v)
                                              },
                                              expression: "item.value"
                                            }
                                          })
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                ),
                                model: {
                                  value: item.toys,
                                  callback: function($$v) {
                                    _vm.$set(item, "toys", $$v)
                                  },
                                  expression: "item.toys"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ]),
            model: {
              value: _vm.list,
              callback: function($$v) {
                _vm.list = $$v
              },
              expression: "list"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 prose max-w-none" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.list))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "x-card",
        { staticClass: "mt-8", attrs: { title: "Simple List" } },
        [
          _c("x-input-simple-list", {
            attrs: { collapsed: false },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var item = ref.item
                  var index = ref.index
                  return [
                    _c("x-input-text", {
                      attrs: { id: "value" + item.uid },
                      model: {
                        value: item.value,
                        callback: function($$v) {
                          _vm.$set(item, "value", $$v)
                        },
                        expression: "item.value"
                      }
                    })
                  ]
                }
              }
            ]),
            model: {
              value: _vm.simpleList,
              callback: function($$v) {
                _vm.simpleList = $$v
              },
              expression: "simpleList"
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 prose max-w-none" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.simpleList))])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);