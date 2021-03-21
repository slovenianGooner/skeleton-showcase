(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Inputs_File_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        file: null,
        files: []
      },
      errors: {
        file: ["The file is too big."]
      },
      examples: {
        fileInput: "<div>\n    <x-input-label for=\"file\"> File </x-input-label>\n    <div class=\"mt-1\">\n        <x-input-file v-model=\"form.file\" />\n    </div>\n</div>",
        fileInputWithError: "<div>\n    <x-input-label for=\"file\" :errors=\"errors.file\"> File </x-input-label>\n    <div class=\"mt-1\">\n        <x-input-file v-model=\"form.file\" :errors=\"errors.file\" />\n        <x-input-errors :errors=\"errors.file\" />\n    </div>\n</div>",
        multipleFilesInput: "<div>\n    <x-input-label for=\"file\"> Files </x-input-label>\n    <div class=\"mt-1\">\n        <x-input-files v-model=\"form.files\" />\n    </div>\n</div>"
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Inputs/File.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Inputs/File.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=5585e9e9& */ "./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__.render,
  _File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Inputs/File.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_5585e9e9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./File.vue?vue&type=template&id=5585e9e9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Inputs/File.vue?vue&type=template&id=5585e9e9& ***!
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
              href: "/inputs/file"
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
      _c("x-card", { staticClass: "mt-5", attrs: { title: "File Inputs" } }, [
        _c("h3", { staticClass: "font-semibold" }, [_vm._v("File Input")]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.fileInput))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("x-input-label", { attrs: { for: "file" } }, [_vm._v(" File ")]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-1" },
              [
                _c("x-input-file", {
                  model: {
                    value: _vm.form.file,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "file", $$v)
                    },
                    expression: "form.file"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", { staticClass: "mt-8 font-semibold" }, [
          _vm._v("File Input With Error")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.fileInputWithError))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "x-input-label",
              { attrs: { for: "file", errors: _vm.errors.file } },
              [_vm._v(" File ")]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-1" },
              [
                _c("x-input-file", {
                  attrs: { errors: _vm.errors.file },
                  model: {
                    value: _vm.form.file,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "file", $$v)
                    },
                    expression: "form.file"
                  }
                }),
                _vm._v(" "),
                _c("x-input-errors", { attrs: { errors: _vm.errors.file } })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h3", { staticClass: "font-semibold mt-8" }, [
          _vm._v("Multiple Files Input")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "prose max-w-none mt-2 mb-8" }, [
          _c("pre", [_vm._v(_vm._s(_vm.examples.multipleFilesInput))])
        ]),
        _vm._v(" "),
        _c(
          "div",
          [
            _c("x-input-label", { attrs: { for: "file" } }, [
              _vm._v(" Files ")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-1" },
              [
                _c("x-input-files", {
                  model: {
                    value: _vm.form.files,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "files", $$v)
                    },
                    expression: "form.files"
                  }
                })
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