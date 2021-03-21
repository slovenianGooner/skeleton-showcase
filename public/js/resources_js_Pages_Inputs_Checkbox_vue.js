(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Inputs_Checkbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        checked: false,
        checkedItems: [],
        checkedRadio: null
      },
      allItems: ["Will Smith", "Christopher Waltz", "Brad Pitt"],
      errors: {},
      examples: {
        singleToggle: "<x-input-checkbox-toggle\n    id=\"checkedToggle\"\n    label=\"Notify me\"\n    v-model=\"form.checked\"\n/>",
        multipleToggles: "<div v-for=\"(item, index) in allItems\">\n    <x-input-checkbox-toggle\n        :id=\"'checkedItemToggle' + index\"\n        :label=\"item\"\n        v-model=\"form.checkedItems\"\n        :value=\"item\"\n    />\n</div>",
        multipleRadioToggles: "<div v-for=\"(item, index) in allItems\">\n    <x-input-radio-toggle\n        :id=\"'checkedRadioItemToggle' + index\"\n        :label=\"item\"\n        v-model=\"form.checkedRadio\"\n        :value=\"item\"\n    />\n</div>",
        singleCheckbox: "<x-input-checkbox\n    id=\"checked\"\n    label=\"Notify me\"\n    v-model=\"form.checked\"\n/>",
        multipleCheckboxesArray: "[\n    \"Will Smith\",\n    \"Christopher Waltz\",\n    \"Brad Pitt\"\n]",
        multipleCheckboxes: "<div v-for=\"(item, index) in allItems\">\n    <x-input-checkbox\n        :id=\"'checkedItem' + index\"\n        :label=\"item\"\n        v-model=\"form.checkedItems\"\n        :value=\"item\"\n        />\n</div>",
        multipleRadios: "<div v-for=\"(item, index) in allItems\">\n    <x-input-radio\n        :id=\"'checkedRadioItem' + index\"\n        :label=\"item\"\n        v-model=\"form.checkedRadio\"\n        :value=\"item\"\n        />\n</div>"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Inputs/Checkbox.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Inputs/Checkbox.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=036ebba0& */ "./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0&");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Inputs/Checkbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_036ebba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=template&id=036ebba0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/Checkbox.vue?vue&type=template&id=036ebba0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          title: "Inputs",
          breadcrumbs: [
            {
              title: "Home",
              href: "/"
            },
            {
              title: "Inputs",
              href: "/inputs/checkbox"
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
      _c("x-card", { staticClass: "mt-5", attrs: { title: "Checkboxes" } }, [
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Single Checkbox")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.singleCheckbox))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-8" },
          [
            _c("x-input-checkbox", {
              attrs: { id: "checked", label: "Notify me" },
              model: {
                value: _vm.form.checked,
                callback: function($$v) {
                  _vm.$set(_vm.form, "checked", $$v)
                },
                expression: "form.checked"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 text-sm text-gray-700" }, [
              _c("strong", [_vm._v("Checked:")]),
              _vm._v("\n        " + _vm._s(_vm.form.checked) + "\n      ")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Multiple Checkboxes")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleCheckboxes))])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("We are using this array as an example:")]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleCheckboxesArray))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "space-y-2" },
          _vm._l(_vm.allItems, function(item, index) {
            return _c(
              "div",
              [
                _c("x-input-checkbox", {
                  attrs: {
                    id: "checkedItem" + index,
                    label: item,
                    value: item
                  },
                  model: {
                    value: _vm.form.checkedItems,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "checkedItems", $$v)
                    },
                    expression: "form.checkedItems"
                  }
                })
              ],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 text-sm text-gray-700" }, [
          _c("strong", [_vm._v("Selected:")]),
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.form.checkedItems.length > 0
                  ? _vm.form.checkedItems.join(", ")
                  : "None"
              ) +
              "\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("x-card", { staticClass: "mt-5", attrs: { title: "Radios" } }, [
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Multiple Radios")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleRadios))])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("We are using this array as an example:")]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleCheckboxesArray))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "space-y-2" },
          [
            _vm._l(_vm.allItems, function(item, index) {
              return _c(
                "div",
                [
                  _c("x-input-radio", {
                    attrs: {
                      id: "checkedRadioItem" + index,
                      label: item,
                      value: item
                    },
                    model: {
                      value: _vm.form.checkedRadio,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "checkedRadio", $$v)
                      },
                      expression: "form.checkedRadio"
                    }
                  })
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "text-gray-700 underline text-sm",
                on: {
                  click: function($event) {
                    _vm.form.checkedRadio = null
                  }
                }
              },
              [_vm._v("\n        Deselect\n      ")]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 text-sm text-gray-700" }, [
          _c("strong", [_vm._v("Selected:")]),
          _vm._v(
            "\n      " +
              _vm._s(_vm.form.checkedRadio ? _vm.form.checkedRadio : "None") +
              "\n    "
          )
        ])
      ]),
      _vm._v(" "),
      _c("x-card", { staticClass: "mt-5", attrs: { title: "Toggles" } }, [
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Single Checkbox Toggle")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.singleToggle))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mb-8" },
          [
            _c("x-input-checkbox-toggle", {
              attrs: { id: "checkedToggle", label: "Notify me" },
              model: {
                value: _vm.form.checked,
                callback: function($$v) {
                  _vm.$set(_vm.form, "checked", $$v)
                },
                expression: "form.checked"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 text-sm text-gray-700" }, [
              _c("strong", [_vm._v("Checked:")]),
              _vm._v("\n        " + _vm._s(_vm.form.checked) + "\n      ")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Multiple Checkbox Toggles")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleToggles))])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("We are using this array as an example:")]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleCheckboxesArray))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "space-y-2" },
          _vm._l(_vm.allItems, function(item, index) {
            return _c(
              "div",
              [
                _c("x-input-checkbox-toggle", {
                  attrs: {
                    id: "checkedItemToggle" + index,
                    label: item,
                    value: item
                  },
                  model: {
                    value: _vm.form.checkedItems,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "checkedItems", $$v)
                    },
                    expression: "form.checkedItems"
                  }
                })
              ],
              1
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 mb-8 text-sm text-gray-700" }, [
          _c("strong", [_vm._v("Selected:")]),
          _vm._v(
            "\n      " +
              _vm._s(
                _vm.form.checkedItems.length > 0
                  ? _vm.form.checkedItems.join(", ")
                  : "None"
              ) +
              "\n    "
          )
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "text-md font-semibold mb-4" }, [
          _vm._v("Multiple Radio Toggles")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleRadioToggles))])
        ]),
        _vm._v(" "),
        _c("h4", [_vm._v("We are using this array as an example:")]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleCheckboxesArray))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "space-y-2" },
          [
            _vm._l(_vm.allItems, function(item, index) {
              return _c(
                "div",
                [
                  _c("x-input-radio-toggle", {
                    attrs: {
                      id: "checkedRadioItemToggle" + index,
                      label: item,
                      value: item
                    },
                    model: {
                      value: _vm.form.checkedRadio,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "checkedRadio", $$v)
                      },
                      expression: "form.checkedRadio"
                    }
                  })
                ],
                1
              )
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "text-gray-700 underline text-sm",
                on: {
                  click: function($event) {
                    _vm.form.checkedRadio = null
                  }
                }
              },
              [_vm._v("\n        Deselect\n      ")]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "mt-4 text-sm text-gray-700" }, [
          _c("strong", [_vm._v("Selected:")]),
          _vm._v(
            "\n      " +
              _vm._s(_vm.form.checkedRadio ? _vm.form.checkedRadio : "None") +
              "\n    "
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);