(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Alerts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      bottomBanner: true,
      inlineBanner: true,
      errors: {
        username: ["The username field is required."],
        password: ["Password is not valid."]
      },
      examples: {
        fixedBanner: "<x-alert-banner\n    class=\"bottom-0 left-0 fixed z-20\"\n    dismissable\n    @dismiss=\"bottomBanner = false\"\n    v-if=\"bottomBanner\">\n    This is the banner alert that is fixed to the bottom.\n    <template #link>\n        <inertia-link href=\"/alerts\" class=\"font-bold underline\">\n            This is an optional link that you can provide\n            <span aria-hidden=\"true\">&rarr;</span>\n        </inertia-link>\n    </template>\n</x-alert-banner>",
        inlineBanner: "<x-alert-banner class=\"mt-4 rounded relative\" :dismissable=\"false\">\n    This is the banner alert that is inline.\n    <template #link>\n        <inertia-link href=\"/alerts\" class=\"font-bold underline\">\n            See more\n            <span aria-hidden=\"true\">&rarr;</span>\n        </inertia-link>\n    </template>\n</x-alert-banner>",
        dismissableBanner: "<x-alert-banner\n    class=\"mt-4 rounded\"\n    dismissable\n    @dismiss=\"inlineBanner = false\"\n    v-if=\"inlineBanner\">\n    This is the banner alert that is dismissable.\n    <template #link>\n        <inertia-link href=\"/alerts\" class=\"font-bold underline\">\n            See more\n            <span aria-hidden=\"true\">&rarr;</span>\n        </inertia-link>\n    </template>\n</x-alert-banner>",
        formError: "<x-alert-form-error :errors=\"errors\" />",
        formErrorErrorsObject: "{\n    username: ['The username field is required.'],\n    password: ['Password is not valid.']\n}"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Alerts.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Alerts.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=4403d400& */ "./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400&");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Alerts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__.render,
  _Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Alerts.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Alerts.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Alerts.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alerts_vue_vue_type_template_id_4403d400___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Alerts.vue?vue&type=template&id=4403d400& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Alerts.vue?vue&type=template&id=4403d400& ***!
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
          title: "Alerts",
          breadcrumbs: [
            {
              title: "Home",
              href: "/"
            },
            {
              title: "Alerts",
              href: "alerts"
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
        { staticClass: "mt-5", attrs: { title: "Form" } },
        [
          _c("div", { staticClass: "prose prose-red" }, [
            _c("p", [
              _vm._v(
                "\n        Whenever you post a form you can also display errors. This is done via\n        the "
              ),
              _c("code", [_vm._v("x-alert-form-error")]),
              _vm._v(
                " component. Simply pass in the\n        errors property and the magic happens. "
              ),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v("\n        This HTML:\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.formError))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4 prose prode-red" }, [
            _c("p", [_vm._v("And this errors object:")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.formErrorErrorsObject))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-4 prose prode-red" }, [
            _c("p", [_vm._v("Will render the below error list:")])
          ]),
          _vm._v(" "),
          _c("x-alert-form-error", {
            staticClass: "mt-4",
            attrs: { errors: _vm.errors }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "x-card",
        { staticClass: "mt-5 mb-8", attrs: { title: "Banner" } },
        [
          _c("div", { staticClass: "prose prose-red" }, [
            _c("h4", [_vm._v("Fixed")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        Banner can be fixed to the bottom or the top. To use this, add the\n        appropriate classes. "
              ),
              _c("br"),
              _vm._v("\n        Example: "),
              _c("code", [_vm._v("fixed left-0 bottom-0")]),
              _vm._v(" to position the banner to\n        the bottom or "),
              _c("code", [_vm._v("fixed left-0 top-0")]),
              _vm._v(" for the top. "),
              _c("br"),
              _vm._v(
                "\n        You can see the example of the banner below.\n      "
              )
            ])
          ]),
          _vm._v(" "),
          _vm.bottomBanner
            ? _c(
                "x-alert-banner",
                {
                  staticClass: "bottom-0 left-0 fixed z-20",
                  attrs: { dismissable: "" },
                  on: {
                    dismiss: function($event) {
                      _vm.bottomBanner = false
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "link",
                        fn: function() {
                          return [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "font-bold underline",
                                attrs: { href: "/alerts" }
                              },
                              [
                                _vm._v(
                                  "\n          This is an optional link that you can provide\n          "
                                ),
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("→")]
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    1160092114
                  )
                },
                [
                  _vm._v(
                    "\n      This is the banner alert that is fixed to the bottom.\n      "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.fixedBanner))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 prose prose-red" }, [
            _c("h4", [_vm._v("Inline")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        You can also position the banner inline without any special classes.\n      "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.inlineBanner))])
          ]),
          _vm._v(" "),
          _c(
            "x-alert-banner",
            {
              staticClass: "mt-4 rounded relative",
              attrs: { dismissable: false },
              scopedSlots: _vm._u([
                {
                  key: "link",
                  fn: function() {
                    return [
                      _c(
                        "inertia-link",
                        {
                          staticClass: "font-bold underline",
                          attrs: { href: "/alerts" }
                        },
                        [
                          _vm._v("\n          See more\n          "),
                          _c("span", { attrs: { "aria-hidden": "true" } }, [
                            _vm._v("→")
                          ])
                        ]
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [_vm._v("\n      This is the banner alert that is inline.\n      ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-8 prose prose-red" }, [
            _c("h4", [_vm._v("Dismissable")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "\n        A banner can also be dismissable. This is managed by the\n        "
              ),
              _c("code", [_vm._v("dismissable")]),
              _vm._v(" property. "),
              _c("br"),
              _vm._v(
                "\n        By default the property is set to true, but you can set it to\n        "
              ),
              _c("code", [_vm._v("false")]),
              _vm._v(" to disable the possibility to dismiss it. "),
              _c("br"),
              _vm._v("\n        Clicking on the dismiss button returns a "),
              _c("code", [_vm._v("@dismiss")]),
              _vm._v(
                " event\n        that you can catch and act upon it.\n        "
              ),
              _c("code", [_vm._v('@dismiss="showBanner = false"')])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.dismissableBanner))])
          ]),
          _vm._v(" "),
          _vm.inlineBanner
            ? _c(
                "x-alert-banner",
                {
                  staticClass: "mt-4 rounded",
                  attrs: { dismissable: "" },
                  on: {
                    dismiss: function($event) {
                      _vm.inlineBanner = false
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "link",
                        fn: function() {
                          return [
                            _c(
                              "inertia-link",
                              {
                                staticClass: "font-bold underline",
                                attrs: { href: "/alerts" }
                              },
                              [
                                _vm._v("\n          See more\n          "),
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("→")]
                                )
                              ]
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    2758439452
                  )
                },
                [
                  _vm._v(
                    "\n      This is the banner alert that is dismissable.\n      "
                  )
                ]
              )
            : _vm._e()
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