(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Modals_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
  methods: {
    submit: function submit() {
      this.$inertia.post("modal");
    },
    submitFullscreen: function submitFullscreen() {
      this.$inertia.post("modal");
    },
    confirm: function confirm() {
      this.$inertia["delete"]("confirmation-modal");
    }
  },
  data: function data() {
    return {
      examples: {
        simpleModal: "<!-- button to open the modal -->\n<div>\n    <x-button-form-md @click=\"$refs.simpleModal.show()\">\n    Open simple modal\n    </x-button-form-md>\n</div>\n\n<!-- modal gets portaled to modal portal target -->\n<portal to=\"modal\">\n    <x-modal ref=\"simpleModal\">\n        <template #header>\n            Modal header.\n        </template>\n        <template>\n            Body content.\n        </template>\n        <template #footer=\"{ close }\">\n            <div class=\"flex justify-end items-center space-x-2\">\n                <x-button-form-md @click=\"close\">Cancel</x-button-form-md>\n                <x-button-form-md color=\"gray\" text-color=\"text-white\" @click=\"close(); submit();\">\n                    Save\n                </x-button-form-md>\n            </div>\n        </template>\n    </x-modal>\n</portal>",
        confirmationModal: "<!-- button to open the modal -->\n<div>\n    <x-button-form-md @click=\"$refs.confirmationModal.show()\">\n        Open confirmation modal\n    </x-button-form-md>\n</div>\n\n<!-- modal gets portaled to modal portal target -->\n<portal to=\"modal\">\n    <x-modal-confirm ref=\"confirmationModal\" @submit=\"confirm\">\n        <template #header>\n            Modal header\n        </template>\n        <template>\n            Confirming this action will delete all your account data.\n        </template>\n    </x-modal-confirm>\n</portal>",
        fullScreenModal: "<!-- button to open the modal -->\n<div>\n    <x-button-form-md @click=\"$refs.fullscreenModal.show()\">\n        Open fullscreen modal\n    </x-button-form-md>\n</div>\n\n<!-- modal gets portaled to modal portal target -->\n<portal to=\"modal\">\n    <x-modal-fullscreen ref=\"fullscreenModal\">\n        <template #header>\n            Modal header\n        </template>\n        <template>\n            Body.\n        </template>\n        <template #footer=\"{ close }\">\n            <div class=\"flex justify-end items-center space-x-2\">\n                <x-button-form-md @click=\"close\">Cancel</x-button-form-md>\n                <x-button-form-md color=\"gray\" text-color=\"text-white\" @click=\"close(); submit();\">\n                    Save\n                </x-button-form-md>\n            </div>\n        </template>\n    </x-modal-fullscreen>\n</portal>"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Modals.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Modals.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.vue?vue&type=template&id=156acf4f& */ "./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f&");
/* harmony import */ var _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modals.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Modals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__.render,
  _Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Modals.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Modals.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Modals.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_156acf4f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modals.vue?vue&type=template&id=156acf4f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Modals.vue?vue&type=template&id=156acf4f& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { staticClass: "p-8 max-w-screen-lg" },
    [
      _c("x-page-header", {
        attrs: {
          title: "Modals",
          breadcrumbs: [
            {
              title: "Home",
              href: "/"
            },
            {
              title: "Modals",
              href: "/modals"
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
      _vm.$page.props.flash.success
        ? _c(
            "x-alert-success",
            { staticClass: "mt-4" },
            [
              [
                _vm._v(
                  "\n      " + _vm._s(_vm.$page.props.flash.success) + "\n    "
                )
              ]
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c("x-card", { staticClass: "mt-5" }, [
        _c(
          "div",
          { staticClass: "flex flex-col" },
          [
            _c("h3", { staticClass: "font-semibold mb-4 text-lg" }, [
              _vm._v("Simple modal")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "x-button-form-md",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$refs.simpleModal.show()
                      }
                    }
                  },
                  [_vm._v("\n          Open simple modal\n        ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "prose mt-4 mb-8" }, [
              _c("pre", [_vm._v(_vm._s(_vm.examples.simpleModal))])
            ]),
            _vm._v(" "),
            _c(
              "portal",
              { attrs: { to: "modal" } },
              [
                _c(
                  "x-modal",
                  {
                    ref: "simpleModal",
                    scopedSlots: _vm._u([
                      {
                        key: "header",
                        fn: function() {
                          return [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-lg leading-6 font-medium text-gray-900"
                              },
                              [
                                _vm._v(
                                  "\n              Simple Modal\n            "
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "footer",
                        fn: function(ref) {
                          var close = ref.close
                          return [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex justify-end items-center space-x-2"
                              },
                              [
                                _c(
                                  "x-button-form-md",
                                  { on: { click: close } },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "x-button-form-md",
                                  {
                                    attrs: {
                                      color: "gray",
                                      "text-color": "text-white"
                                    },
                                    on: {
                                      click: function($event) {
                                        close()
                                        _vm.submit()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Save\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    [
                      _c("div", { staticClass: "prose" }, [
                        _c("p", [
                          _vm._v(
                            "\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Explicabo totam non cumque deserunt officiis ex maiores\n                nostrum.\n              "
                          )
                        ])
                      ])
                    ]
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "font-semibold mb-4 text-lg" }, [
              _vm._v("Confirmation modal")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "x-button-form-md",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$refs.confirmationModal.show()
                      }
                    }
                  },
                  [_vm._v("\n          Open confirmation modal\n        ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "prose mt-4 mb-8" }, [
              _c("pre", [_vm._v(_vm._s(_vm.examples.confirmationModal))])
            ]),
            _vm._v(" "),
            _c(
              "portal",
              { attrs: { to: "modal" } },
              [
                _c(
                  "x-modal-confirm",
                  {
                    ref: "confirmationModal",
                    on: { submit: _vm.confirm },
                    scopedSlots: _vm._u([
                      {
                        key: "header",
                        fn: function() {
                          return [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-lg leading-6 font-medium text-gray-900"
                              },
                              [
                                _vm._v(
                                  "\n              Are you sure?\n            "
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    [
                      _vm._v(
                        "\n            Confirming this action will delete all your account data.\n          "
                      )
                    ]
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "font-semibold mb-4 text-lg" }, [
              _vm._v("Fullscreen modal")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "x-button-form-md",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$refs.fullscreenModal.show()
                      }
                    }
                  },
                  [_vm._v("\n          Open fullscreen modal\n        ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "prose mt-4 mb-8" }, [
              _c("pre", [_vm._v(_vm._s(_vm.examples.fullScreenModal))])
            ]),
            _vm._v(" "),
            _c(
              "portal",
              { attrs: { to: "modal" } },
              [
                _c(
                  "x-modal-fullscreen",
                  {
                    ref: "fullscreenModal",
                    attrs: { transition: false },
                    scopedSlots: _vm._u([
                      {
                        key: "header",
                        fn: function() {
                          return [
                            _c(
                              "h3",
                              {
                                staticClass:
                                  "text-lg leading-6 font-medium text-gray-900"
                              },
                              [
                                _vm._v(
                                  "\n              Fullscreen Modal\n            "
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "footer",
                        fn: function(ref) {
                          var close = ref.close
                          return [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "flex justify-end items-center space-x-2"
                              },
                              [
                                _c(
                                  "x-button-form-md",
                                  { on: { click: close } },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "x-button-form-md",
                                  {
                                    attrs: {
                                      color: "gray",
                                      "text-color": "text-white"
                                    },
                                    on: {
                                      click: function($event) {
                                        close()
                                        _vm.submit()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                Save\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    [
                      _c(
                        "div",
                        { staticClass: "prose max-w-none" },
                        _vm._l(Array(22).keys(), function(number) {
                          return _c("p", { key: number }, [
                            _vm._v(
                              "\n                Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                Explicabo totam non cumque deserunt officiis ex maiores\n                nostrum.\n              "
                            )
                          ])
                        }),
                        0
                      )
                    ]
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("h3", { staticClass: "font-semibold mb-4 text-lg" }, [
              _vm._v("Modal switching")
            ]),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "x-button-form-md",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$refs.modalOne.show()
                      }
                    }
                  },
                  [_vm._v("\n          Open initial modal\n        ")]
                ),
                _vm._v(" "),
                _c(
                  "portal",
                  { attrs: { to: "modal" } },
                  [
                    _c(
                      "x-modal",
                      {
                        ref: "modalOne",
                        scopedSlots: _vm._u([
                          {
                            key: "header",
                            fn: function() {
                              return [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                Initial Modal\n              "
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "footer",
                            fn: function(ref) {
                              var close = ref.close
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-end items-center space-x-2"
                                  },
                                  [
                                    _c(
                                      "x-button-form-md",
                                      { on: { click: close } },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "x-button-form-md",
                                      {
                                        attrs: {
                                          color: "gray",
                                          "text-color": "text-white"
                                        },
                                        on: {
                                          click: function($event) {
                                            close()
                                            _vm.$refs.modalTwo.show(false)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Open another modal\n                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        [
                          _c("div", { staticClass: "prose" }, [
                            _c("p", [
                              _vm._v(
                                "\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Explicabo totam non cumque deserunt officiis ex maiores\n                  nostrum.\n                "
                              )
                            ])
                          ])
                        ]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "x-modal",
                      {
                        ref: "modalTwo",
                        attrs: { transition: false },
                        scopedSlots: _vm._u([
                          {
                            key: "header",
                            fn: function() {
                              return [
                                _c(
                                  "h3",
                                  {
                                    staticClass:
                                      "text-lg leading-6 font-medium text-gray-900"
                                  },
                                  [
                                    _vm._v(
                                      "\n                Second Modal\n              "
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "footer",
                            fn: function(ref) {
                              var close = ref.close
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "flex justify-end items-center space-x-2"
                                  },
                                  [
                                    _c(
                                      "x-button-form-md",
                                      { on: { click: close } },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "x-button-form-md",
                                      {
                                        attrs: {
                                          color: "gray",
                                          "text-color": "text-white"
                                        },
                                        on: {
                                          click: function($event) {
                                            close()
                                            _vm.submit()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  Save\n                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        [
                          _c("div", { staticClass: "prose" }, [
                            _c("p", [
                              _vm._v(
                                "\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit.\n                  Explicabo totam non cumque deserunt officiis ex maiores\n                  nostrum.\n                "
                              )
                            ])
                          ])
                        ]
                      ],
                      2
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);