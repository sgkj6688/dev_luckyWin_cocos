System.register([], function (_export, _context) {
  "use strict";

  var cc, Application;
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  return {
    setters: [],
    execute: function () {
      _export("Application", Application = /*#__PURE__*/function () {
        function Application() {
          _classCallCheck(this, Application);
          // Web 复用 HTML 入口时间，Native 无 performance 时使用 Date.now；此处不改变启动顺序。
          if (typeof window !== 'undefined' && window.__HALL_BOOT_AT__ === undefined) window.__HALL_BOOT_AT__ = typeof performance !== 'undefined' ? performance.now() : Date.now();
          this.settingsPath = 'src/settings.2b8c0.json';
          this.showFPS = true;
        }
        _createClass(Application, [{
          key: "init",
          value: function init(engine) {
            cc = engine;
            cc.game.onPostBaseInitDelegate.add(this.onPostInitBase.bind(this));
            cc.game.onPostSubsystemInitDelegate.add(this.onPostSystemInit.bind(this));
          }
        }, {
          key: "onPostInitBase",
          value: function onPostInitBase() {
            // cc.settings.overrideSettings('assets', 'server', '');
            // do custom logic
          }
        }, {
          key: "onPostSystemInit",
          value: function onPostSystemInit() {
            if (typeof window !== "undefined") window.__HALL_ENGINE_READY_AT__ = typeof performance !== 'undefined' ? performance.now() : Date.now();
            // do custom logic
          }
        }, {
          key: "start",
          value: function start() {
            var loadingStatus;
            try {
              // 在初始化开始时绑定入口和尝试；迟到失败不能暂停后续登录入口。
              var loading = typeof window !== 'undefined' && window.__HALL_LOADING__;
              if (loading && typeof loading.work === 'function') loadingStatus = loading.work('application_init');
            } catch (_) {/* 可选展示桥接不可阻断引擎初始化。 */}
            var notifyLoading = function notifyLoading(state) {
              try {
                if (typeof loadingStatus === 'function') loadingStatus(state);
              } catch (_) {/* 保留引擎原始结果，展示异常不能覆盖启动错误。 */}
            };
            var initializationFailed = function initializationFailed(error) {
              notifyLoading('failed');
              // 仍交给入口原有 catch 记录日志，不吞错、不自动重试。
              throw error;
            };
            try {
              return cc.game.init({
                debugMode: true ? cc.DebugMode.INFO : cc.DebugMode.ERROR,
                settingsPath: this.settingsPath,
                overrideSettings: {
                  // assets: {
                  //      preloadBundles: [{ bundle: 'main', version: 'xxx' }],
                  // }
                  profiling: {
                    showFPS: this.showFPS
                  }
                }
              }).then(function () {
                notifyLoading('done');
                return cc.game.run();
              }, initializationFailed);
            } catch (error) {
              return initializationFailed(error);
            }
          }
        }]);
        return Application;
      }());
    }
  };
});