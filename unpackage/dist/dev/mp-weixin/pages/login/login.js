(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ 38:
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 39));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 39:
/*!***************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c& */ 40);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 42);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ 45);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 40:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */ 41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 41:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event, index) {
      var _temp = arguments[arguments.length - 1].currentTarget.dataset,
        _temp2 = _temp.eventParams || _temp["event-params"],
        index = _temp2.index

      var _temp, _temp2

      _vm.loginType = index
    }
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 42:
/*!****************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 43);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, uniCloud) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 23));


























































var _vuex = __webpack_require__(/*! vuex */ 8);




var _univerify = __webpack_require__(/*! @/common/univerify.js */ 28);



var _utils = __webpack_require__(/*! @/common/utils.js */ 44);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var mInput = function mInput() {__webpack_require__.e(/*! require.ensure | components/m-input */ "components/m-input").then((function () {return resolve(__webpack_require__(/*! ../../components/m-input.vue */ 168));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};



var weixinAuthService;
var captchaOptions = {
  deviceId: (0, _utils.getDeviceUUID)(),
  scene: 'login' };var _default =


{
  components: {
    mInput: mInput },

  data: function data() {
    return {
      platform: uni.getSystemInfoSync().platform,
      loginType: 0,
      loginTypeList: ['免密登录', '密码登录'],
      mobile: '',
      code: '',
      providerList: [],
      hasProvider: false,
      username: '',
      password: '',
      positionTop: 0,
      isDevtools: false,
      codeDuration: 0,
      loginBtnLoading: false,
      hasAppleLogin: false,
      needCaptcha: uni.getStorageSync('uni-needCaptcha'),
      captchaing: false,
      captchaBase64: '',
      captchaText: '' };

  },
  computed: (0, _vuex.mapState)(['forcedLogin', 'hasLogin', 'univerifyErrorMsg', 'hideUniverify']),
  onLoad: function onLoad() {










    if (this.needCaptcha) {
      this.captcha('createCaptcha');
    }
  },
  methods: _objectSpread(_objectSpread({},
  (0, _vuex.mapMutations)(['login'])), {}, {
    initProvider: function initProvider() {var _this = this;
      var filters = ['weixin', 'qq', 'sinaweibo', 'univerify'];
      uni.getProvider({
        service: 'oauth',
        success: function success(res) {
          if (res.provider && res.provider.length) {
            if (res.provider.indexOf('apple') !== -1) {
              _this.hasAppleLogin = true;
            }
            for (var i = 0; i < res.provider.length; i++) {
              var curProvider = res.provider[i];
              if (~filters.indexOf(curProvider)) {
                _this.providerList.push({
                  value: curProvider,
                  image: '../../static/img/' + curProvider + '.png' });

              }
            }
            _this.hasProvider = true;
          }
        },
        fail: function fail(err) {
          console.error('获取服务供应商失败：' + JSON.stringify(err));
        } });

    },
    initPosition: function initPosition() {
      /**
                                            * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                                            * 反向使用 top 进行定位，可以避免此问题。
                                            */
      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
    },
    sendSmsCode: function sendSmsCode() {var _this2 = this;
      if (this.codeDuration) {
        uni.showModal({
          content: "\u8BF7\u5728".concat(this.codeDuration, "\u79D2\u540E\u91CD\u8BD5"),
          showCancel: false });

      }
      if (!/^1\d{10}$/.test(this.mobile)) {
        uni.showModal({
          content: '手机号码填写错误',
          showCancel: false });

        return;
      }
      uniCloud.callFunction({
        name: 'user-center',
        data: {
          action: 'sendSmsCode',
          params: {
            mobile: this.mobile,
            type: 'login' } },


        success: function success(e) {
          if (e.result.code == 0) {
            uni.showModal({
              content: '验证码发送成功，请注意查收',
              showCancel: false });

            _this2.codeDuration = 60;
            _this2.codeInterVal = setInterval(function () {
              _this2.codeDuration--;
              if (_this2.codeDuration === 0) {
                if (_this2.codeInterVal) {
                  clearInterval(_this2.codeInterVal);
                  _this2.codeInterVal = null;
                }
              }
            }, 1000);
          } else {
            uni.showModal({
              content: '验证码发送失败：' + e.result.msg,
              showCancel: false });

          }

        },
        fail: function fail(e) {
          uni.showModal({
            content: '验证码发送失败',
            showCancel: false });

        } });

    },
    loginByPwd: function loginByPwd() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var data;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(




                _this3.username.length < 3)) {_context.next = 3;break;}
                uni.showToast({
                  icon: 'none',
                  title: '账号最短为 3 个字符' });return _context.abrupt("return");case 3:if (!(



                _this3.password.length < 6)) {_context.next = 6;break;}
                uni.showToast({
                  icon: 'none',
                  title: '密码最短为 6 个字符' });return _context.abrupt("return");case 6:



                data = _objectSpread({
                  username: _this3.username,
                  password: _this3.password,
                  captcha: _this3.captchaText },
                captchaOptions);

                _this3.loginBtnLoading = true;
                uniCloud.callFunction({
                  name: 'user-center',
                  data: {
                    action: 'login',
                    params: data },

                  success: function success(e) {
                    if (e.result.code == 0) {
                      _this3.needCaptcha = false;
                      uni.setStorageSync('uni-needCaptcha', _this3.needCaptcha);
                      uni.setStorageSync('uni_id_token', e.result.token);
                      uni.setStorageSync('username', e.result.username);
                      uni.setStorageSync('login_type', 'online');
                      uni.setStorageSync('uni_id_has_pwd', true);
                      _this3.toMain(_this3.username);
                    } else {
                      uni.showModal({
                        content: e.result.message,
                        showCancel: false });


                      _this3.needCaptcha = e.result.needCaptcha;
                      uni.setStorageSync('uni-needCaptcha', _this3.needCaptcha);
                      if (_this3.needCaptcha) {
                        _this3.captcha('createCaptcha');
                      }
                    }
                  },
                  fail: function fail(e) {
                    uni.showModal({
                      content: JSON.stringify(e),
                      showCancel: false });

                  },
                  complete: function complete() {
                    _this3.loginBtnLoading = false;
                  } });case 9:case "end":return _context.stop();}}}, _callee);}))();

    },
    loginBySms: function loginBySms() {var _this4 = this;
      if (!/^1\d{10}$/.test(this.mobile)) {
        uni.showModal({
          content: '手机号码填写错误',
          showCancel: false });

        return;
      }
      if (!/^\d{6}$/.test(this.code)) {
        uni.showModal({
          title: '验证码为6位纯数字',
          showCancel: false });

        return;
      }

      uniCloud.callFunction({
        name: 'user-center',
        data: {
          action: 'loginBySms',
          params: {
            mobile: this.mobile,
            code: this.code } },


        success: function success(e) {

          console.log('login success', e);

          if (e.result.code == 0) {
            var username = e.result.username || '新用户';
            uni.setStorageSync('uni_id_token', e.result.token);
            uni.setStorageSync('username', username);
            uni.setStorageSync('login_type', 'online');
            _this4.toMain(username);
          } else {
            uni.showModal({
              content: e.result.msg,
              showCancel: false });

            console.log('登录失败', e);
          }

        },
        fail: function fail(e) {
          uni.showModal({
            content: JSON.stringify(e),
            showCancel: false });

        } });

    },
    bindLogin: function bindLogin() {
      switch (this.loginType) {
        case 0:
          this.loginBySms();
          break;
        case 1:
          this.loginByPwd();
          break;
        default:
          break;}

    },
    oauth: function oauth(value) {
      return new Promise(function (resolve, reject) {









        uni.login({
          provider: 'weixin',
          success: function success(res) {
            resolve(res.code);
          },
          fail: function fail(err) {
            console.error('授权登录失败：' + JSON.stringify(err));
            reject(new Error('微信登录失败'));
          } });


      });
    },
    getUserInfo: function getUserInfo(_ref)

    {var detail = _ref.detail;
      console.log('三方登录只演示登录api能力，暂未关联云端数据');
      if (detail.userInfo) {
        debugger;
        this.loginLocal(detail.userInfo.nickName);
      } else {
        uni.showToast({
          icon: 'none',
          title: '登陆失败' });

      }
    },
    loginLocal: function loginLocal(nickName) {
      uni.setStorageSync('login_type', 'local');
      uni.setStorageSync('username', nickName);
      this.toMain(nickName);
    },
    toMain: function toMain(userName) {
      this.login(userName);
      /**
                             * 强制登录时使用reLaunch方式跳转过来
                             * 返回首页也使用reLaunch方式
                             */
      uni.reLaunch({
        url: '../main/main' });

    },
    toLogin: function toLogin(value) {var _this5 = this;
      if (value === 'apple') {
        this.loginByApple(value);
        return;
      }
      if (value === 'weixin') {
        this.loginByWeixin(value);
        return;
      }
      if (value === 'univerify') {
        (0, _univerify.univerifyLogin)().catch(function (err) {
          if (typeof err === 'boolean') return;
          (0, _univerify.univerifyErrorHandler)(err);
        });
        return;
      }
      uni.showModal({
        content: "".concat(value, "\u767B\u5F55\u53EA\u6F14\u793A\u767B\u5F55api\u80FD\u529B\uFF0C\u6682\u672A\u5173\u8054\u4E91\u7AEF\u6570\u636E"),
        showCancel: false,
        complete: function complete() {
          console.log("".concat(value, "\u767B\u5F55\u53EA\u6F14\u793A\u767B\u5F55api\u80FD\u529B\uFF0C\u6682\u672A\u5173\u8054\u4E91\u7AEF\u6570\u636E"));
          uni.login({
            provider: value,
            success: function success(res) {
              uni.getUserInfo({
                provider: value,
                success: function success(infoRes) {
                  /**
                                                     * 实际开发中，获取用户信息后，需要将信息上报至服务端。
                                                     * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
                                                     */
                  _this5.loginLocal(infoRes.userInfo.nickName);
                },
                fail: function fail() {
                  uni.showToast({
                    icon: 'none',
                    title: '登陆失败' });

                } });

            },
            fail: function fail(err) {
              console.error('授权登录失败：' + JSON.stringify(err));
            } });

        } });

    },
    loginByWeixin: function loginByWeixin(value) {var _this6 = this;
      this.oauth(value).then(function (code) {
        return uniCloud.callFunction({
          name: 'user-center',
          data: {
            action: 'loginByWeixin',
            params: {
              code: code } } });



      }).then(function (res) {
        if (res.result.code === 0) {
          uni.setStorageSync('uni_id_token', res.result.token);
          uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired);
          uni.setStorageSync('login_type', 'online');
          uni.setStorageSync('username', '微信用户');
          _this6.toMain('微信用户');
        }
      }).catch(function (e) {
        console.error(e);
        uni.showModal({
          showCancel: false,
          content: '微信登录失败，请稍后再试' });

      });
    },
    loginByApple: function loginByApple(value) {var _this7 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var Provider, _yield$uni$login, _yield$uni$login2, loginErr, loginData, _yield$uni$getUserInf, _yield$uni$getUserInf2, getUserInfoErr, result, content;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (
                _this7.hasAppleLogin) {_context2.next = 3;break;}
                uni.showModal({
                  showCancel: false,
                  content: "\u6682\u65E0\u6CD5\u4F7F\u7528\u82F9\u679C\u767B\u5F55\uFF0CApple\u767B\u5F55\u96C6\u6210\u6559\u7A0B\uFF1A\nhttps://ask.dcloud.net.cn/article/36651" });return _context2.abrupt("return");case 3:


                ;
                Provider = value;_context2.next = 7;return (
                  uni.login({
                    provider: Provider }));case 7:_yield$uni$login = _context2.sent;_yield$uni$login2 = _slicedToArray(_yield$uni$login, 2);loginErr = _yield$uni$login2[0];loginData = _yield$uni$login2[1];if (!

                loginErr) {_context2.next = 14;break;}
                uni.showModal({
                  showCancel: false,
                  content: '苹果登录失败，请稍后再试' });return _context2.abrupt("return");case 14:_context2.next = 16;return (




                  uni.getUserInfo({
                    provider: Provider }));case 16:_yield$uni$getUserInf = _context2.sent;_yield$uni$getUserInf2 = _slicedToArray(_yield$uni$getUserInf, 2);getUserInfoErr = _yield$uni$getUserInf2[0];result = _yield$uni$getUserInf2[1];if (!

                getUserInfoErr) {_context2.next = 25;break;}
                content = getUserInfoErr.errMsg;
                if (~content.indexOf('uni.login')) {
                  content = '请先完成登录操作';
                }
                uni.showModal({
                  title: '获取用户信息失败',
                  content: '错误原因' + content,
                  showCancel: false });return _context2.abrupt("return");case 25:



                // uni-id 苹果登录
                uniCloud.callFunction({
                  name: 'user-center',
                  data: {
                    action: 'loginByApple',
                    params: result.userInfo },

                  success: function success(e) {
                    console.log('loginByApple success', e);
                    if (!e.success) {
                      uni.showModal({
                        showCancel: false,
                        content: JSON.stringify(e.message) });

                      return;
                    }
                    var username = e.result.username || e.result.nickname;

                    uni.setStorageSync('uni_id_token', e.result.token);
                    uni.setStorageSync('login_type', 'online');

                    _this7.toMain(username);
                  },
                  fail: function fail(e) {
                    uni.showModal({
                      content: "\u82F9\u679C\u767B\u5F55\u5931\u8D25: ".concat(JSON.stringify(e)),
                      showCancel: false });

                  } });case 26:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    captcha: function captcha(action, args) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _yield$uniCloud$callF, res;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!
                _this8.captchaing) {_context3.next = 2;break;}return _context3.abrupt("return");case 2:

                // 验证不loading
                _this8.captchaing = true;_context3.next = 5;return (



                  uniCloud.callFunction({
                    name: 'user-center',
                    data: {
                      action: action,
                      params: _objectSpread(_objectSpread({},
                      captchaOptions),
                      args) } }));case 5:_yield$uniCloud$callF = _context3.sent;res = _yield$uniCloud$callF.result;



                _this8.captchaing = false;
                if (res.code === 0) {
                  _this8.captchaBase64 = res.captchaBase64;
                } else {
                  uni.showToast({
                    icon: 'none',
                    title: res.message,
                    duration: 1000 });

                }return _context3.abrupt("return",
                res);case 10:case "end":return _context3.stop();}}}, _callee3);}))();
    },
    openAppleLoginDoc: function openAppleLoginDoc() {



    } }),

  onReady: function onReady() {
    this.initPosition();
    this.initProvider();

    this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 20)["default"]))

/***/ }),

/***/ 45:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=css& */ 46);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 46:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/HBuilderProjects/uni-yun/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[38,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map