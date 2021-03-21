(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Lists_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Demo_ListCardContent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/Demo/ListCardContent.vue */ "./resources/js/Shared/Demo/ListCardContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ListCardContent: _Shared_Demo_ListCardContent_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      filters: ["type", "job"],
      cardListExample: "<x-list-card :data=\"items\">\n    <template slot=\"header\">\n        <x-list-search\n            class=\"px-4 py-3 sm:px-6\"\n            :value=\"query().search\"\n            @submit=\"\n                $inertia.get(\n                    $route($route().current(), {\n                        ...query(),\n                        search: $event,\n                        page: 1,\n                    }),\n              )\n            \"\n        />\n    </template>\n    <template #default=\"{ item, index }\">\n        // Card contents...\n    </template>\n    <template #footer>\n        <x-list-pagination\n            class=\"px-4 py-3 sm:px-6\"\n            :data=\"items\"\n            @change=\"$inertia.get($event.url)\"\n        />\n    </template>\n</x-list-card>",
      separateCardListExample: "<x-list-separate-card :data=\"items\">\n    <template slot=\"header\">\n        <x-list-search\n            :value=\"query().search\"\n            @submit=\"\n                $inertia.get(\n                    $route($route().current(), {\n                        ...query(),\n                        search: $event,\n                        page: 1,\n                    }),\n              )\n            \"\n        />\n    </template>\n    <template #default=\"{ item, index }\">\n        // Card contents...\n    </template>\n    <template #footer>\n        <x-list-pagination\n            :data=\"items\"\n            @change=\"$inertia.get($event.url)\"\n        />\n    </template>\n</x-list-separate-card>",
      cardWithFilterExampleButton: "<x-button-form-md @click=\"$refs.filter.toggle()\" no-ring>\n    <x-icon-filter\n        class=\"-ml-1.5 mr-1.5 text-gray-400\"\n        size=\"w-5 h-5\"\n    />\n    Filter\n</x-button-form-md>",
      cardWithFilterExample: "<x-list-filter\n    ref=\"filter\"\n    :filters=\"filters\"\n    @clear=\"\n        $inertia.get(\n            $route($route().current(), {\n                ...$event,\n                page: 1,\n            }),\n        )\n    \"\n    class=\"px-4 sm:px-6 border-t py-3\">\n    <div class=\"grid md:grid-cols-3 gap-3 mb-3\">\n        <div>\n            <x-input-label for=\"job\">Job</x-input-label>\n            <div class=\"mt-1\">\n                <x-input-select\n                  id=\"job\"\n                  :value=\"query().job\"\n                  :options=\"['Recruiter', 'Child Care Worker']\"\n                  @input=\"\n                    $inertia.reload({\n                      data: {\n                        ...query(),\n                        job: $event,\n                      },\n                    })\n                  \"\n                />\n            </div>\n        </div>\n    </div>\n</x-list-filter>"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    item: {
      required: true
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Lists.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Lists.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists.vue?vue&type=template&id=1e8d113c& */ "./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c&");
/* harmony import */ var _Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Lists.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Lists.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Demo/ListCardContent.vue":
/*!******************************************************!*\
  !*** ./resources/js/Shared/Demo/ListCardContent.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListCardContent.vue?vue&type=template&id=34faff5b& */ "./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b&");
/* harmony import */ var _ListCardContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListCardContent.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListCardContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Demo/ListCardContent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Lists.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Lists.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lists.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCardContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCardContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCardContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_1e8d113c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lists.vue?vue&type=template&id=1e8d113c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c&");


/***/ }),

/***/ "./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListCardContent_vue_vue_type_template_id_34faff5b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListCardContent.vue?vue&type=template&id=34faff5b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Lists.vue?vue&type=template&id=1e8d113c& ***!
  \************************************************************************************************************************************************************************************************************/
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
          title: "Lists",
          breadcrumbs: [
            {
              title: "Home",
              href: "/"
            },
            {
              title: "Lists",
              href: "/lists"
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
      _c("h2", { staticClass: "mt-8 font-semibold text-2xl" }, [
        _vm._v("Card list")
      ]),
      _vm._v(" "),
      _c(
        "x-list-card",
        {
          staticClass: "mt-4",
          attrs: { data: Object.values(_vm.$page.props.items.data) },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var item = ref.item
                var index = ref.index
                return [_c("list-card-content", { attrs: { item: item } })]
              }
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("x-list-pagination", {
                    staticClass: "px-4 py-3 sm:px-6",
                    attrs: { data: _vm.$page.props.items },
                    on: {
                      change: function($event) {
                        return _vm.$inertia.get($event.url, {
                          preserveScroll: true
                        })
                      }
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "header" },
            [
              _c("x-list-search", {
                staticClass: "px-4 py-3 sm:px-6",
                attrs: { value: _vm.query().search },
                on: {
                  submit: function($event) {
                    return _vm.$inertia.reload({
                      data: {
                        search: $event,
                        page: 1
                      }
                    })
                  }
                }
              })
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 prose" }, [
        _c("pre", [_vm._v(_vm._s(_vm.cardListExample))])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "mt-8 font-semibold text-2xl" }, [
        _vm._v("Separate card list")
      ]),
      _vm._v(" "),
      _c(
        "x-list-separate-card",
        {
          staticClass: "mt-4",
          attrs: { data: Object.values(_vm.$page.props.items.data) },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var item = ref.item
                var index = ref.index
                return [_c("list-card-content", { attrs: { item: item } })]
              }
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("x-list-pagination", {
                    attrs: { data: _vm.$page.props.items },
                    on: {
                      change: function($event) {
                        return _vm.$inertia.get($event.url, {
                          preserveScroll: true
                        })
                      }
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "header" },
            [
              _c("x-list-search", {
                attrs: { value: _vm.query().search },
                on: {
                  submit: function($event) {
                    return _vm.$inertia.reload({
                      data: {
                        search: $event,
                        page: 1
                      }
                    })
                  }
                }
              })
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 prose" }, [
        _c("pre", [_vm._v(_vm._s(_vm.separateCardListExample))])
      ]),
      _vm._v(" "),
      _c("h2", { staticClass: "mt-8 font-semibold text-2xl" }, [
        _vm._v("Card list with filter")
      ]),
      _vm._v(" "),
      _c(
        "x-list-card",
        {
          staticClass: "mt-4",
          attrs: { data: Object.values(_vm.$page.props.items.data) },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var item = ref.item
                var index = ref.index
                return [_c("list-card-content", { attrs: { item: item } })]
              }
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("x-list-pagination", {
                    staticClass: "px-4 py-3 sm:px-6",
                    attrs: { data: _vm.$page.props.items },
                    on: {
                      change: function($event) {
                        return _vm.$inertia.get($event.url, {
                          preserveScroll: true
                        })
                      }
                    }
                  })
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "header" },
            [
              _c(
                "div",
                {
                  staticClass: "flex items-center space-x-4 px-4 py-3 sm:px-6"
                },
                [
                  _c("x-list-search", {
                    staticClass: "flex-1",
                    attrs: { value: _vm.query().search },
                    on: {
                      submit: function($event) {
                        _vm.$inertia.get(
                          _vm.$route(
                            _vm.$route().current(),
                            Object.assign({}, _vm.query(), {
                              search: $event,
                              page: 1
                            })
                          ),
                          {
                            preserveScroll: true
                          }
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "x-button-form-md",
                    {
                      attrs: { "no-ring": "" },
                      on: {
                        click: function($event) {
                          return _vm.$refs.filter.toggle()
                        }
                      }
                    },
                    [
                      _c("x-icon-filter", {
                        staticClass: "-ml-1.5 mr-1.5 text-gray-400",
                        attrs: { size: "w-5 h-5" }
                      }),
                      _vm._v("\n          Filter\n        ")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "x-list-filter",
                {
                  ref: "filter",
                  staticClass: "px-4 sm:px-6 border-t py-3",
                  attrs: { filters: _vm.filters },
                  on: {
                    clear: function($event) {
                      _vm.$inertia.get(
                        _vm.$route(
                          _vm.$route().current(),
                          Object.assign({}, $event, { page: 1 })
                        ),
                        {
                          preserveScroll: true
                        }
                      )
                    }
                  }
                },
                [
                  _c("div", { staticClass: "grid md:grid-cols-3 gap-3 mb-3" }, [
                    _c(
                      "div",
                      [
                        _c("x-input-label", { attrs: { for: "job" } }, [
                          _vm._v("Job")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-1" },
                          [
                            _c("x-input-select", {
                              attrs: {
                                id: "job",
                                value: _vm.query().job,
                                options: ["Recruiter", "Child Care Worker"]
                              },
                              on: {
                                input: function($event) {
                                  _vm.$inertia.reload({
                                    data: Object.assign({}, _vm.query(), {
                                      job: $event
                                    })
                                  })
                                }
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
                      [
                        _c("x-input-label", { attrs: { for: "type" } }, [
                          _vm._v("Type")
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mt-1" },
                          [
                            _c("x-input-select", {
                              attrs: {
                                id: "type",
                                value: _vm.query().type,
                                options: ["Full-time", "Part-time"]
                              },
                              on: {
                                input: function($event) {
                                  _vm.$inertia.reload({
                                    data: Object.assign({}, _vm.query(), {
                                      type: $event
                                    })
                                  })
                                }
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
              )
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 prose" }, [
        _c("p", [
          _vm._v(
            "\n      You can add this button to the header of the card list to toggle the\n      filters.\n    "
          )
        ]),
        _vm._v(" "),
        _c("pre", [_vm._v(_vm._s(_vm.cardWithFilterExampleButton))]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("pre", [_vm._v(_vm._s(_vm.cardWithFilterExample))])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n      Then also in the header section you include the\n      "),
      _c("code", [_vm._v("x-list-filter")]),
      _vm._v(
        "\n      component with inputs that will filter the selection.\n    "
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Shared/Demo/ListCardContent.vue?vue&type=template&id=34faff5b& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "a",
    { staticClass: "block hover:bg-gray-50", attrs: { href: "#" } },
    [
      _c("div", { staticClass: "px-4 py-4 sm:px-6" }, [
        _c("div", { staticClass: "flex items-center justify-between" }, [
          _c(
            "p",
            { staticClass: "text-sm font-medium text-red-600 truncate" },
            [_vm._v("\n        " + _vm._s(_vm.item.name) + "\n      ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ml-2 flex-shrink-0 flex" }, [
            _c(
              "p",
              {
                staticClass:
                  "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
              },
              [_vm._v("\n          " + _vm._s(_vm.item.type) + "\n        ")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-2 sm:flex sm:justify-between" }, [
          _c("div", { staticClass: "text-sm text-gray-500" }, [
            _vm._v(_vm._s(_vm.item.email))
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-2 flex items-center text-sm text-gray-500 sm:mt-0"
            },
            [
              _c("p", [
                _vm._v("\n          Leaving on\n          "),
                _c("time", { attrs: { datetime: _vm.item.expiring } }, [
                  _vm._v(_vm._s(_vm.item.expiring))
                ])
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);