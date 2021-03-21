(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Inputs_CustomSelect_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        country: "AT",
        countries: ["AT"],
        languages: [],
        language: null
      },
      countries: [{
        value: "AT",
        title: "Austria"
      }, {
        value: "AU",
        title: "Australia"
      }],
      languages: ["PHP", "Javascript", "Vue", "Laravel", "Rails", "React", "TailwindCSS"],
      examples: {
        customSelect: "<div>\n    <x-input-label>Country</x-input-label>\n    <div class=\"mt-1\">\n        <x-input-custom-select\n            v-model=\"form.country\"\n            value-resolver=\"value\"\n            label-resolver=\"title\"\n            :options=\"countries\"\n        />\n    </div>\n</div>",
        multipleSelect: "<div>\n    <x-input-label>Languages</x-input-label>\n    <div class=\"mt-1\">\n        <x-input-custom-select\n            multiple\n            v-model=\"form.languages\"\n            :options=\"languages\"\n          />\n    </div>\n</div>",
        customSelectWithSearch: "<div>\n    <x-input-label>Language</x-input-label>\n    <div class=\"mt-1\">\n        <x-input-custom-select\n            v-model=\"form.language\"\n            :options=\"languages\"\n            :value-resolver=\"(item) => item\"\n            :search=\"true\"\n        />\n    </div>\n</div>"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Inputs/CustomSelect.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Inputs/CustomSelect.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomSelect.vue?vue&type=template&id=c8975a8c& */ "./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c&");
/* harmony import */ var _CustomSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSelect.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Inputs/CustomSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_template_id_c8975a8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomSelect.vue?vue&type=template&id=c8975a8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/CustomSelect.vue?vue&type=template&id=c8975a8c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
              href: "/inputs/custom-select"
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
        {
          staticClass: "mt-5",
          attrs: { overflows: false, title: "Custom Select" }
        },
        [
          _c(
            "div",
            [
              _c("x-input-label", [_vm._v("Country")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-1" },
                [
                  _c("x-input-custom-select", {
                    attrs: {
                      "value-resolver": "value",
                      "label-resolver": "title",
                      options: _vm.countries
                    },
                    model: {
                      value: _vm.form.country,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "country", $$v)
                      },
                      expression: "form.country"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.customSelect))])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "x-card",
        {
          staticClass: "mt-5",
          attrs: { overflows: false, title: "Multiselect" }
        },
        [
          _c(
            "div",
            [
              _c("x-input-label", [_vm._v("Languages")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-1" },
                [
                  _c("x-input-custom-select", {
                    attrs: { multiple: "", options: _vm.languages },
                    model: {
                      value: _vm.form.languages,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "languages", $$v)
                      },
                      expression: "form.languages"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.customSelect))])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "x-card",
        {
          staticClass: "mt-5",
          attrs: { overflows: false, title: "Custom select with search" }
        },
        [
          _c(
            "div",
            [
              _c("x-input-label", [_vm._v("Language")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-1" },
                [
                  _c("x-input-custom-select", {
                    attrs: {
                      options: _vm.languages,
                      "value-resolver": "value",
                      "label-resolver": "title",
                      search: true
                    },
                    model: {
                      value: _vm.form.language,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "language", $$v)
                      },
                      expression: "form.language"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "prose max-w-none mt-8" }, [
            _c("pre", [_vm._v(_vm._s(_vm.examples.customSelectWithSearch))])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);