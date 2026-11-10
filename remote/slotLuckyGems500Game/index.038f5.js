System.register("chunks:///_virtual/slotLuckyGems500_bigWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Model.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Utils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, UITransform, tween, Component, Tween, slotLuckyGems500Model, eSound, slotLuckyGems500Utils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Label = module.Label;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
      Tween = module.Tween;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1ccdanMtjtGlpUFuJEEn1tr", "slotLuckyGems500_bigWin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500_bigWin = exports('default', (_dec = ccclass("slotLuckyGems500_bigWin"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_bigWin"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_bigWin, _Component);
        function slotLuckyGems500_bigWin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bigWin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor3, _assertThisInitialized(_this));
          /////////////////////////
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = slotLuckyGems500_bigWin.prototype;
        /////////////////////////
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //////////////////////
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "clickMask":
              {
                this.isStopBigWin = true;
                break;
              }
          }
        };
        _proto.showBigWin = function showBigWin(destWin, delay) {
          var _this2 = this;
          if (delay === void 0) {
            delay = 0.35;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / slotLuckyGems500Model.instance.curBet;
            if (rate < 6) {
              resolve();
              return;
            }
            _this2.node.getComponent(UITransform).priority = 52;
            var destLv = rate < 20 ? 1 : rate < 35 ? 2 : 3;
            var aniLv = 1;
            _this2.bigWin.node.active = true;
            _this2.bigWin.setCompleteListener(null);
            var skins = _this2.bigWin.skeletonData.getSkinsEnum();
            _this2.bigWin.setSkin("" + skins[1]);
            _this2.bigWin.setAnimation(0, "1intro", false);
            _this2.bigWin.addAnimation(0, "2idle", true);
            slotLuckyGems500Utils.instance.playSound(eSound.Big_Win, true);
            _this2.Label_totalWin.string = "";
            tween(_this2.node).delay(delay).call(function () {
              var totalTime = destLv * 5;
              var dt = 0.05;
              var updateTimes = totalTime / dt;
              var disWin = Math.floor(destWin / updateTimes);
              var curTotalWin = 0;
              tween(_this2.Label_totalWin.node).repeatForever(
              //                                // updateTimes + 1,
              tween(_this2.Label_totalWin.node).delay(dt).call(function () {
                var doEnd = function doEnd() {
                  slotLuckyGems500Utils.instance.stopSound(eSound.Big_Win);
                  slotLuckyGems500Utils.instance.playSound(eSound.BigWin_End);
                  Tween.stopAllByTarget(_this2.Label_totalWin.node);
                  curTotalWin = destWin;
                  _this2.Label_totalWin.string = Common.ChangeMoneyShowFloat(curTotalWin, 2);
                  _this2.scheduleOnce(function () {
                    if (aniLv != destLv) {
                      var _skins = _this2.bigWin.skeletonData.getSkinsEnum();
                      _this2.bigWin.setSkin("" + _skins[destLv]);
                      aniLv = destLv;
                    }
                    _this2.bigWin.setAnimation(0, "2idle", true);
                    _this2.scheduleOnce(function () {
                      _this2.bigWin.setAnimation(0, "3finish", false);
                      _this2.bigWin.setCompleteListener(function () {
                        _this2.bigWin.setCompleteListener(null);
                        _this2.node.active = false;
                        _this2.isStopBigWin = false;
                        _this2.bigWin.node.active = false;
                        resolve();
                        return;
                      });
                    }, 1.5);
                  });
                };
                curTotalWin += disWin;
                var curRate = curTotalWin / slotLuckyGems500Model.instance.curBet;
                var curLv = curRate < 20 ? 1 : curRate < 35 ? 2 : 3;
                if (aniLv != curLv) {
                  var _skins2 = _this2.bigWin.skeletonData.getSkinsEnum();
                  _this2.bigWin.setSkin("" + _skins2[curLv]);
                  _this2.bigWin.setAnimation(0, "1intro", false);
                  _this2.bigWin.addAnimation(0, "2idle", true);
                  aniLv = curLv;
                }
                if (curTotalWin > destWin) {
                  doEnd();
                } else {
                  _this2.Label_totalWin.string = Common.ChangeMoneyShowFloat(curTotalWin, 2);
                }
                if (_this2.isStopBigWin) {
                  //点击停止
                  doEnd();
                }
              })).start();
            }).start();
          });
        };
        return slotLuckyGems500_bigWin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bigWin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, sys, Node, Component, CCClass, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      sp = module.sp;
      sys = module.sys;
      Node = module.Node;
      Component = module.Component;
      CCClass = module.CCClass;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a2029uLEspAuIOWyIuVyV8u", "slotLuckyGems500_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      // import { CoasterUtils } from "../CoasterUtils";

      // import * as CoasterDef from "./../CoasterDef";

      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var setEnumAttr = function setEnumAttr(obj, propName, enumDef) {
        CCClass.Attr.setClassAttr(obj, propName, "type", "Enum");
        CCClass.Attr.setClassAttr(obj, propName, "enumList", Enum.getList(enumDef));
      };
      var slotLuckyGems500_btnEffect = exports('default', (_dec = ccclass("slotLuckyGems500_btnEffect"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec6 = property({
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_btnEffect, _Component);
        function slotLuckyGems500_btnEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_skeletonData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "premultipliedAlpha", _descriptor3, _assertThisInitialized(_this));
          _this.Node_effect = null;
          _this.switchAnimation = null;
          return _this;
        }
        var _proto = slotLuckyGems500_btnEffect.prototype;
        _proto.onLoad = function onLoad() {};
        _proto._getAnimEnum = function _getAnimEnum(skeletonData) {
          var animEnum;
          var sd = skeletonData.getRuntimeData(true);
          if (sd) {
            var enumDef = {
              "<None>": 0
            };
            var anims = sd.animations;
            for (var i = 0; i < anims.length; i++) {
              var name = anims[i].name;

              //@ts-ignore
              enumDef[name] = i + 1;
            }
            animEnum = Enum(enumDef);
            return animEnum;
          }
          return null;
        };
        _proto._updateAnimEnum = function _updateAnimEnum() {
          var animEnum = this._getAnimEnum(this.skeletonData);
          //        // change enum
          setEnumAttr(this, "_animation", animEnum || DefaultAnimsEnum);
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.Node_effect) {
            this.Node_effect.destroyFromParent();
            this.Node_effect = null;
          }
          EventManager.instance.on("onMouseMoveIn" + this.node.name, function (event) {
            if (sys.isMobile) {
              return;
            }

            // CoasterUtils.instance.playOneShot(CoasterDef.eSound.featureBuyHover);
            if (_this2.animation > 0 && _this2.skeletonData) {
              if (!_this2.Node_effect) {
                _this2.Node_effect = new Node();
                _this2.node.addChild(_this2.Node_effect);
                var Skeleton = _this2.Node_effect.addComponent(sp.Skeleton);
                Skeleton.loop = true;
                Skeleton.premultipliedAlpha = _this2.premultipliedAlpha;
              }
              _this2.scheduleOnce(function () {
                if (_this2.Node_effect) {
                  var _Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
                  _Skeleton.skeletonData = _this2.skeletonData;
                  if (_this2.switchAnimation) {
                    _Skeleton.setAnimation(0, _this2.switchAnimation, true);
                  } else {
                    var sd = _this2.skeletonData.getRuntimeData(true);
                    var ani = sd.animations[_this2.animation - 1];
                    _Skeleton.setAnimation(0, ani.name, true);
                  }
                }
              });
            }
          }, this);
          EventManager.instance.on("onMouseMoveOut" + this.node.name, function (event) {
            if (sys.isMobile) {
              return;
            }
            if (_this2.Node_effect && event.type == Node.EventType.MOUSE_LEAVE) {
              _this2.Node_effect.destroyFromParent();
              _this2.Node_effect = null;
            }
          }, this);
          this.node.on("pauseEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = false;
            }
          }, this);
          this.node.on("resumeEffect", function () {
            if (_this2.Node_effect) {
              _this2.Node_effect.active = true;
              var Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);

              // CoasterUtils.instance.playOneShot(CoasterDef.eSound.featurebuyHover);

              if (_this2.switchAnimation) {
                Skeleton.setAnimation(0, _this2.switchAnimation, true);
              } else {
                var sd = _this2.skeletonData.getRuntimeData(true);
                var ani = sd.animations[_this2.animation - 1];
                Skeleton.setAnimation(0, ani.name, true);
              }
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off("onMouseMoveIn" + this.node.name);
          EventManager.instance.off("onMouseMoveOut" + this.node.name);
          this.node.off("pauseEffect");
          this.node.off("resumeEffect");
        };
        _proto.switchAni = function switchAni(animation) {
          if (animation === void 0) {
            animation = null;
          }
          if (this.switchAnimation && !animation) {
            if (this.Node_effect) {
              this.Node_effect.active = true;

              // CoasterUtils.instance.playOneShot(CoasterDef.eSound.featurebuyHover);

              var Skeleton = this.Node_effect.getComponent(sp.Skeleton);
              var sd = this.skeletonData.getRuntimeData(true);
              var ani = sd.animations[this.animation - 1];
              Skeleton.setAnimation(0, ani.name, true);
            }
          }
          this.switchAnimation = animation;
        }
        //    // update (dt) {}
        ;

        _createClass(slotLuckyGems500_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return slotLuckyGems500_btnEffect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeletonData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "skeletonData", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "skeletonData"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return DefaultAnimsEnum["<None>"];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "premultipliedAlpha", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PageView, Button, Sprite, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PageView = module.PageView;
      Button = module.Button;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a511akJQuhO5K7t5ZXkhAfw", "slotLuckyGems500_help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;

      // import i18n from "../../../../i18n/I18n";
      // import DataManager, { UserKey } from "../../../../script/manager/DataManager";
      // import { slotLuckyGems500Ctrl } from "../slotLuckyGems500Ctrl";
      // import { slotLuckyGems500Model } from "../slotLuckyGems500Model";
      // import * as slotLuckyGems500Def from "../slotLuckyGems500Def";
      // import { GameDef } from "../../../../script/GameDef";
      // import ViewManager from "../../../../script/manager/ViewManager";
      // import EventManager from "../../../../script/manager/EventManager";
      // import ConfigManager from "../../../../script/manager/ConfigManager";
      // import { slotLuckyGems500Utils } from "../slotLuckyGems500Utils";
      // import NetManager from "../../../../script/manager/NetManager";
      // import { Common } from "../../../../script/tools/Common";
      // const pageSize = 9;
      // // // @inspector("packages://autoproperty/inspector.js")
      var slotLuckyGems500_help = exports('default', (_dec = ccclass("slotLuckyGems500_help"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_help"), _dec3 = property(PageView), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_help, _Component);
        function slotLuckyGems500_help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pageView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotLuckyGems500_help.prototype;
        _proto.start = function start() {
          this.Button_next.interactable = true;
          this.Button_next.target.getComponent(Sprite).grayscale = !this.Button_next.interactable;
          this.Button_last.interactable = false;
          this.Button_last.target.getComponent(Sprite).grayscale = !this.Button_last.interactable;
        };
        _proto.onBefore = function onBefore() {
          if (this.pageView.curPageIdx > 0) {
            this.pageView.scrollToPage(this.pageView.curPageIdx - 1);
          }
          this.Button_next.interactable = true;
          this.Button_next.target.getComponent(Sprite).grayscale = !this.Button_next.interactable;
          this.Button_last.interactable = this.pageView.curPageIdx > 0;
          this.Button_last.target.getComponent(Sprite).grayscale = !this.Button_last.interactable;
        };
        _proto.onNext = function onNext() {
          if (this.pageView.curPageIdx < 8) {
            this.pageView.scrollToPage(this.pageView.curPageIdx + 1);
          }
          this.Button_next.interactable = this.pageView.curPageIdx < 8;
          this.Button_next.target.getComponent(Sprite).grayscale = !this.Button_next.interactable;
          this.Button_last.interactable = true;
          this.Button_last.target.getComponent(Sprite).grayscale = !this.Button_last.interactable;
        };
        _proto.onScroll = function onScroll(event) {
          this.Button_next.interactable = this.pageView.curPageIdx < 8;
          this.Button_next.target.getComponent(Sprite).grayscale = !this.Button_next.interactable;
          this.Button_last.interactable = this.pageView.curPageIdx > 0;
          this.Button_last.target.getComponent(Sprite).grayscale = !this.Button_last.interactable;
        };
        return slotLuckyGems500_help;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Ctrl.ts', './slotLuckyGems500Def.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, slotLuckyGems500Ctrl, eProto, GameDef, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      slotLuckyGems500Ctrl = module.slotLuckyGems500Ctrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "11d4afsiM5NoaU7Rdv0AoMD", "slotLuckyGems500_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var slotLuckyGems500_history = exports('default', (_dec = ccclass("slotLuckyGems500History"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_history"), _dec3 = property(gts.List), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(slotLuckyGems500_history, _GameDef$BaseView);
        function slotLuckyGems500_history() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor3, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          _this._pageSize = 13;
          return _this;
        }
        var _proto = slotLuckyGems500_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, slotLuckyGems500Ctrl.instance);
          slotLuckyGems500Ctrl.instance.reqHistory();
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onBefore = function onBefore() {};
        _proto.onNext = function onNext() {};
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                Common.closeWait();
                if (!data || !data.BetRecord || data.BetRecord.length == 0) {
                  this._curPage = this._lastPage;
                  return;
                }
                this.scrollView_content.setData(data.BetRecord);
                break;
              }
          }
        };
        return slotLuckyGems500_history;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "d50d2ht0vxGFKqGpaUmo/+O", "slotLuckyGems500_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500_historyItem = exports('default', (_dec = ccclass("slotLuckyGems500HistoryItem"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_historyItem, _Component);
        function slotLuckyGems500_historyItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_date", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_time", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor9, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = slotLuckyGems500_historyItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
        };
        _proto.onDisable = function onDisable() {};
        _proto.start = function start() {
          var _this2 = this;
          //        //将label节点绑定到label root 并跟随原来节点
          AutoChangeParent.Bind(this.Node_label, this.content_label, true).OnUpdateNotify(function (dt) {
            _this2.Node_label.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.Node_label.active = _this2.node.active;
            _this2.Node_label.scale = _this2.node.scale;
          }, this);

          //        //注册item OnDataChangedNotify OnHideNotify 回调
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
              _this2.Node_label.active = false;
            }, this);
            this.UpdateUI();
          }
        }
        //    //item update
        ;

        _proto.UpdateUI = function UpdateUI() {
          var tempData = this.item.data;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);

          //改为开奖结果
          var strResult = Common.getRecordResult(tempData);
          this.Label_gold.string = strResult;
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = Common.ChangeMoneyShowFloat(tempData.BetAmount, 2);
          if (tempData.Income > 0) {
            // let inter = Common.numFormat(tempData.Income / 1000);
            // let digit = slotLuckyGems500Utils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            // str = `+${inter}${digit}K`;

            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            // let inter = Common.numFormat(tempData.Income / 1000);
            // let digit = slotLuckyGems500Utils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            // str = `${inter}${digit}K`;

            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = Common.ChangeMoneyShowFloat(tempData.Income, 2);
        };
        _createClass(slotLuckyGems500_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return slotLuckyGems500_historyItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content_label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_label", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_date", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_time", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_mutBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "aeafb0wGAlK04qNXJKV6aPe", "slotLuckyGems500_mutBtn", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500_mutBtn = exports('slotLuckyGems500_mutBtn', (_dec = ccclass("slotLuckyGems500_mutBtn"), _dec2 = menu("slotLuckyGems500Game/slotLuckyGems500_mutBtn"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_mutBtn, _Component);
        function slotLuckyGems500_mutBtn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_state", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotLuckyGems500_mutBtn.prototype;
        ///////////////////////////
        // start() {}
        // update(deltaTime: number) {}
        _proto.setState = function setState(index) {
          var _this2 = this;
          this.scheduleOnce(function () {
            var btn = _this2.node.getComponent(Button);
            btn.target = _this2.Node_state[index];
            for (var i = 0; i < _this2.Node_state.length; i++) {
              _this2.Node_state[i].active = i == index;
            }
          }, 0.1);
        };
        return slotLuckyGems500_mutBtn;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_state", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Model.ts', './slotLuckyGems500Def.ts', './ViewManager.ts', './EventManager.ts', './slotLuckyGems500Utils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, Label, Toggle, Component, slotLuckyGems500Model, arrBase, cAutoTimes, eEvent, ViewManager, EventManager, slotLuckyGems500Utils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Toggle = module.Toggle;
      Component = module.Component;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      arrBase = module.arrBase;
      cAutoTimes = module.cAutoTimes;
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "b2a85FEdFdPn7sEl9NPcjSI", "slotLuckyGems500_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var slotLuckyGems500_setAuto = exports('default', (_dec = ccclass("slotLuckyGems500SetAuto"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500_setAuto"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_setAuto, _Component);
        function slotLuckyGems500_setAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spinSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoSpin", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_ok", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor6, _assertThisInitialized(_this));
          //////////////////////////
          _this.selNode = null;
          _this.baseBet = 1000;
          return _this;
        }
        var _proto = slotLuckyGems500_setAuto.prototype;
        //cAutoTimes [20, 50, 100, 500, 99999];
        //    ////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.baseBet = slotLuckyGems500Model.instance.curBet;
          this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
          this.Button_add.interactable = this.baseBet < arrBase[arrBase.length - 1];
          this.Button_redus.interactable = this.baseBet > 1000;
          var speedToggle = this.spinSpeed.getChildByName("Toggle" + slotLuckyGems500Model.instance.quickState);
          if (speedToggle) {
            speedToggle.getComponent(Toggle).isChecked = true;
          }
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                ViewManager.instance.closePopView();
                slotLuckyGems500Utils.instance.setBaseBet(slotLuckyGems500Model.instance.curBet);
                EventManager.instance.emit(eEvent.onSetAuto, "close");
                break;
              }
            case "Button_ok":
              {
                slotLuckyGems500Model.instance.quickState = this.spinSpeed.children[0].getComponent(Toggle).isChecked ? 1 : this.spinSpeed.children[1].getComponent(Toggle).isChecked ? 2 : 0;
                for (var _iterator = _createForOfIteratorHelperLoose(this.autoSpin.children), _step; !(_step = _iterator()).done;) {
                  var toggle = _step.value;
                  if (toggle.getComponent(Toggle).isChecked) {
                    var index = parseInt(toggle.name.replace("Toggle", ""));
                    slotLuckyGems500Model.instance.autoTimes = cAutoTimes[index - 1];
                    break;
                  }
                }
                slotLuckyGems500Model.instance.curBet = this.baseBet;
                EventManager.instance.emit(eEvent.onSetAuto, "Button_ok");
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_add":
              {
                this.baseBet = slotLuckyGems500Utils.instance.getAddBet();
                this.Button_add.interactable = slotLuckyGems500Utils.instance.betIndex < 21;
                this.Button_redus.interactable = slotLuckyGems500Utils.instance.betIndex > 0;
                this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
                break;
              }
            case "Button_redus":
              {
                this.baseBet = slotLuckyGems500Utils.instance.getRedusBet();
                this.Button_add.interactable = slotLuckyGems500Utils.instance.betIndex < 21;
                this.Button_redus.interactable = slotLuckyGems500Utils.instance.betIndex > 0;
                this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
                break;
              }
          }
        };
        return slotLuckyGems500_setAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "autoSpin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Model.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Utils.ts', './slotLuckyGems500_symbolItem.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, v3, UIOpacity, Component, tween, slotLuckyGems500Model, eRunStatus, eSymbol, vRate, eConstDef, eEvent, eSound, slotLuckyGems500Utils, slotLuckyGems500_symbolItem, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      tween = module.tween;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      vRate = module.vRate;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      slotLuckyGems500_symbolItem = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "161d591DuRGdZAt20SIHoCB", "slotLuckyGems500_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500_symbol = exports('default', (_dec = ccclass("slotLuckyGems500Symbol"), _dec2 = menu("slotLuckyGems500Game/slotLuckyGems500_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_symbol, _Component);
        function slotLuckyGems500_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isHorizontal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxIndex", _descriptor4, _assertThisInitialized(_this));
          ////////////////////
          _this._symbolList = [];
          _this._curLength = 0;
          _this._iCol = 0;
          _this._speed = 0;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = slotLuckyGems500_symbol.prototype;
        ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.addNewItem = function addNewItem(itemInfo, isEnter) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = this._iCol < 3 ? Math.floor(Math.random() * eSymbol.StoneGreen + 1) : eSymbol.Rate_0 + vRate[Math.floor(Math.random() * vRate.length)];
            itemInfo = {
              Sym: symbol,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);

          //        //POSITON
          var offsetY = (this._curLength + 1 / 2) * eConstDef.cSymbolH;
          newItem.position = v3(this.node.position.x, eConstDef.cSymbolStartY + offsetY, 0);

          //        //
          var com = newItem.getComponent(slotLuckyGems500_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, this.Node_effectRoot, this._runStatus);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += 1;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          var _this2 = this;
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList ? itemInfoList[i] : null, false);
          }
          var _loop = function _loop() {
            var symbolNode = _this2._symbolList[_i].node;
            var toPos = v3(symbolNode.position.x, symbolNode.position.y, symbolNode.position.z);
            symbolNode.setPosition(v3(toPos.x, toPos.y + 525, toPos.z));
            tween(symbolNode).to(0.2, {
              position: toPos
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(toPos.x, toPos.y + 15, toPos.z)
            }, {
              easing: "cubicIn"
            }).to(0.05, {
              position: toPos
            }, {
              easing: "cubicOut"
            }).call(function () {
              var symbol = symbolNode.getComponent(slotLuckyGems500_symbolItem);
              // if (symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.Scatter) {
              //   symbol.changeParent(this.Node_effectRoot);
              // }
            }).start();
          };
          for (var _i = 0; _i < this._symbolList.length; _i++) {
            _loop();
          }
        };
        _proto.showSymbol = function showSymbol(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            symbol.showSymbol(isShow);
          }
        };
        _proto.setSymOpacity = function setSymOpacity(opacity) {
          if (opacity === void 0) {
            opacity = 255;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.itemInfo.Sym != eSymbol.Scatter) {
              symbol.node.getComponent(UIOpacity).opacity = opacity;
            }
          }
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doStart = function doStart(startDelay, stopDelay) {
          var _this3 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this3.scheduleOnce(function () {
              slotLuckyGems500Model.instance.quickState > 0 ? function () {
                _this3.maxIndex = _this3.maxIndex - 1;
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 1500 + 1000 * slotLuckyGems500Model.instance.quickState;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
                _this3.maxIndex = _this3.maxIndex - 1;
              }();
            }, stopDelay);
            _this3._resultInfoList = slotLuckyGems500Utils.instance.getResult(slotLuckyGems500Model.instance.betResult.openResult)[_this3._iCol];
            _this3._resultInfoList = _this3._resultInfoList.reverse();

            //            //
            _this3._runStatus = eRunStatus.START;
            _this3._speed = eConstDef.CSpeedStart;
            _this3.maxIndex = _this3.maxIndex + 1;
            for (var _iterator = _createForOfIteratorHelperLoose(_this3._symbolList), _step; !(_step = _iterator()).done;) {
              var symbol = _step.value;
              symbol.changeParent();
            }
            var scheduleUpdate = function scheduleUpdate(dt) {
              switch (_this3._runStatus) {
                case eRunStatus.NONE:
                  {
                    if (_this3._curLength > _this3.maxIndex) {
                      _this3._curLength = _this3.maxIndex;
                    }
                    return;
                  }
                case eRunStatus.START:
                  {
                    _this3._speed += eConstDef.CSpeedAdd;
                    if (_this3._speed >= eConstDef.cSpeedMax) {
                      _this3._speed = eConstDef.cSpeedMax;
                      _this3._runStatus = eRunStatus.RUNNING;
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this3._speed -= eConstDef.CSpeedReduse;
                    if (_this3._speed < eConstDef.cSpeedMin) {
                      _this3._speed = eConstDef.cSpeedMin;
                      _this3._runStatus = eRunStatus.STOP;
                      // if (!slotLuckyGems500Model.instance.isQuickStop) {
                      //     this.maxIndex = this.maxIndex - 1;
                      // }
                    }

                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this3._symbolList.length - 1; i >= 0; i--) {
                      curLength += 1;
                      if (curLength > _this3.maxIndex) {
                        var symbol = _this3._symbolList.shift();
                        symbol.node.removeFromParent();
                        symbol.node.destroy();
                      }
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            slotLuckyGems500Utils.instance.playOneShot(eSound.Reel_Stop);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol = _step2.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this3.unschedule(scheduleUpdate);
                            if (slotLuckyGems500Model.instance.specialStartCol > 0 && _this3._iCol + 1 >= slotLuckyGems500Model.instance.specialStartCol) {
                              EventManager.instance.emit(eEvent.onSetMask, _this3._iCol + 1, _this3.node.getPosition().x);
                            }
                            resolve();
                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })), 0);
                    return;
                  }
              }
              var offset = _this3._speed * 0.01667;
              var disLength = _this3.isHorizontal ? offset / eConstDef.cSymbolW : offset / eConstDef.cSymbolH;
              _this3._curLength -= disLength;
              var isSide = _this3._curLength <= _this3.maxIndex;
              // if (this._runStatus < slotLuckyGems500Def.eRunStatus.END) {
              //     isSide = this._curLength <= this.maxIndex + 1;
              // }

              if (_this3._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this3.maxIndex - _this3._curLength;
                offset = _this3.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this3._curLength = _this3.maxIndex;
                _this3._runStatus = eRunStatus.END;
              }
              for (var _i2 = _this3._symbolList.length - 1; _i2 >= 0; _i2--) {
                var _symbol2 = _this3._symbolList[_i2];
                if (!_symbol2.doRunning(offset)) {
                  _this3._symbolList.splice(_i2, 1);
                  _symbol2.node.removeFromParent();
                  _symbol2.node.destroy();
                }
              }
              if (isSide) {
                var result = _this3._runStatus == eRunStatus.STOP && _this3._resultInfoList.length > 0 ? _this3._resultInfoList.shift() : null;
                _this3.addNewItem(result);
              }
            };
            _this3.scheduleOnce(function () {
              _this3.schedule(scheduleUpdate);
            }, startDelay);
          });
        };
        _proto.doHideResultEffect = function doHideResultEffect() {
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            symbol.doShowResultEffect(false);
          }
        };
        _proto.doShowResultEffect = function doShowResultEffect(iRow) {
          iRow = this.maxIndex - iRow - 1;
          var symbol = this._symbolList[iRow];
          symbol.doShowResultEffect(true);
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(0.0));
            //            // arrPro.push(symbol.doEffect(slotLuckyGems500_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              slotLuckyGems500_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        }
        // async doScatterBlink() {
        //   let arrPro = [];
        //   for (const symbol of this._symbolList) {
        //     if (symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.Scatter) {
        //       arrPro.push(symbol.doScatterBlink());
        //     } else {
        //       symbol.updateZIndex(slotLuckyGems500Def.eRunStatus.RUNNING);
        //     }
        //   }

        //   return Promise.all(arrPro);
        // }
        // stopScatterBlink() {
        //   for (const symbol of this._symbolList) {
        //     if (symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.Scatter) {
        //       symbol.stopScatterBlink();
        //     }
        //   }
        // }

        // doPearlBlink() {
        //   for (const symbol of this._symbolList) {
        //     if (
        //       symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.whitePearl ||
        //       symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.yellowPearl
        //     ) {
        //       symbol.doPearlBlink();
        //     }
        //   }
        // }
        // stopPearlBlink() {
        //   for (const symbol of this._symbolList) {
        //     if (
        //       symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.whitePearl ||
        //       symbol.itemInfo.Sym == slotLuckyGems500Def.eSymbol.yellowPearl
        //     ) {
        //       symbol.stopPearlBlink();
        //     }
        //   }
        // }
        ;

        return slotLuckyGems500_symbol;
      }(Component), _class3.rewardCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Def.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sp, Component, eEvent, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5670aEsQttCMpE0Mfm/3y3m", "slotLuckyGems500_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500_symbolEffectRoot = exports('default', (_dec = ccclass("slotLuckyGems500_symbolEffectRoot"), _dec2 = menu("slotLuckyGems500Game/slotLuckyGems500_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_symbolEffectRoot, _Component);
        function slotLuckyGems500_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotLuckyGems500_symbolEffectRoot.prototype;
        //    // onLoad () {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.on(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.instance.off(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onAddEffect = function onAddEffect(iRow, iCol, pos) {
          var newNode = instantiate(this.prefab_symbolEffect);
          newNode.name = "symbolEffect_" + iRow + "_" + iCol;
          newNode.position = pos;
          this.node.addChild(newNode);
          var effect = newNode.getComponent(sp.Skeleton);
          effect.setAnimation(0, "boom", false);
          effect.addAnimation(0, "idle", true);
        };
        _proto.onDelEffect = function onDelEffect(iRow, iCol) {
          var delNode = this.node.getChildByName("symbolEffect_" + iRow + "_" + iCol);
          if (delNode) {
            delNode.destroyFromParent();
          }
        };
        return slotLuckyGems500_symbolEffectRoot;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_symbolEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Model.ts', './slotLuckyGems500Def.ts', './EventManager.ts', './slotLuckyGems500Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, sp, Sprite, Label, UITransform, v3, tween, isValid, instantiate, Component, slotLuckyGems500Model, eRunStatus, eSymbol, eConstDef, eZindex, eEvent, eSound, EventManager, slotLuckyGems500Utils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      sp = module.sp;
      Sprite = module.Sprite;
      Label = module.Label;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
      isValid = module.isValid;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5942agp7x5AVpK3DIVMG/Bu", "slotLuckyGems500_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eItemStatus = exports('eItemStatus', {
        NONE: 0,
        RUNNING: 1,
        STOP: 2,
        doChange: 3,
        doEffect: 4,
        CLEAR: 5,
        Blink: 6,
        DROP: 7,
        END: 8
      });
      var slotLuckyGems500_symbolItem = exports('default', (_dec = ccclass("slotLuckyGems500SymbolItem"), _dec2 = menu("slotLuckyGems500Game/slotLuckyGems500_symbolItem"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500_symbolItem, _Component);
        function slotLuckyGems500_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_winEffect", _descriptor, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this.tag = 0;
          _this.itemStatus = eItemStatus.NONE;
          _this.Node_effectRoot = null;
          //    // onLoad () {}
          _this.Node_symbol = null;
          _this.isBreak = false;
          _this._spineEffect_kuang = null;
          return _this;
        }
        var _proto = slotLuckyGems500_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.onDestroy = function onDestroy() {}
        //    ///
        ;

        _proto.initItem = function initItem(info, isHorizontal, iCol, Node_effectRoot, status) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (Node_effectRoot === void 0) {
            Node_effectRoot = null;
          }
          if (status === void 0) {
            status = eRunStatus.NONE;
          }
          this.itemStatus = status > eRunStatus.NONE && status < eRunStatus.STOP ? eItemStatus.RUNNING : eItemStatus.NONE;
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          this._spineEffect_kuang = null;
          this.Node_effectRoot = Node_effectRoot;
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.itemInfo = info;
          this.updateSymbol();
        };
        _proto.updateIcon = function updateIcon(Sym, isSpine) {
          var _this2 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          // let isSpine = !isIdle;

          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var isRunning = _this2.itemStatus == eItemStatus.RUNNING;
              var itemSymbol = slotLuckyGems500Utils.instance.getItemSymbolIcon(Sym, isRunning);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
              var Label_nudgeTimes = _this2.Node_symbol.getChildByName("Label_nudgeTimes");
              if (_this2.itemInfo.Sym == eSymbol.Rate_0) {
                Label_nudgeTimes.active = slotLuckyGems500Model.instance.betResult != null && slotLuckyGems500Model.instance.betResult.openResult != null && slotLuckyGems500Model.instance.betResult.openResult.exNudge != null;
                if (Label_nudgeTimes.active) {
                  Label_nudgeTimes.getComponent(Label).string = "" + (slotLuckyGems500Model.instance.betResult.openResult.exNudge.length - 3);
                }
              } else {
                Label_nudgeTimes.getComponent(Label).string = "";
                Label_nudgeTimes.active = false;
              }
            });

            // this.Node_symbol.scale = v3(0.5, 0.5, 0.5);
          } else {
            // this.Node_symbol.scale = v3(1, 1, 1);
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSpine = _this2.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this2.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.skeletonData = slotLuckyGems500Utils.instance.getSkeletonData(Sym);
              itemSpine.premultipliedAlpha = false;
              // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

              var strAni = slotLuckyGems500Utils.instance.getSkeletonAni(Sym);
              itemSpine.setAnimation(0, strAni, true);
              var Label_nudgeTimes = _this2.Node_symbol.getChildByName("Label_nudgeTimes");
              if (_this2.itemInfo.Sym == eSymbol.Rate_0) {
                Label_nudgeTimes.active = slotLuckyGems500Model.instance.betResult != null && slotLuckyGems500Model.instance.betResult.openResult != null && slotLuckyGems500Model.instance.betResult.openResult.exNudge != null;
                if (Label_nudgeTimes.active) {
                  Label_nudgeTimes.getComponent(Label).string = "" + (slotLuckyGems500Model.instance.betResult.openResult.exNudge.length - 3);
                  itemSpine.sockets = [new sp.SpineSocket("root/Actor/HP_NUM1", Label_nudgeTimes)];
                }
              } else {
                itemSpine.sockets = [];
                Label_nudgeTimes.active = false;
              }
            });
          }
        };
        _proto.showSymbol = function showSymbol(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          this.Node_symbol.active = isShow;
        };
        _proto.changeParent = function changeParent(parent) {
          if (parent === void 0) {
            parent = null;
          }
          parent = parent || this.node;
          if (this.Node_symbol.parent.name != parent.name) {
            var wPos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            wPos = parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            this.Node_symbol.parent = parent;
            this.Node_symbol.position = wPos;
          }
        };
        _proto.updateSymbol = function updateSymbol(isSpine) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.updateIcon(this.itemInfo.Sym, isSpine);
          this.updateZIndex(isSpine);
        };
        _proto.updateZIndex = function updateZIndex(isSpine) {
          var addIndex = Math.floor((-this.node.position.y + eConstDef.cSymbolH * 6) / eConstDef.cSymbolH);
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            // case slotLuckyGems500Def.eSymbol.Scatter: {
            //   _zIndex =
            //     slotLuckyGems500Model.instance.specialStartCol > 0
            //       ? 2 * slotLuckyGems500Def.eZindex.SPECIAL
            //       : slotLuckyGems500Def.eZindex.icon_scatter + addIndex;
            //   break;
            // }
            default:
              {
                _zIndex = eZindex.icon + addIndex;
                break;
              }
          }
          if (isSpine) {
            this.node.getComponent(UITransform).priority = eZindex.iconWin + addIndex;
            if (this._iCol < slotLuckyGems500Model.instance.curSpecialStartCol && this.itemInfo.Sym >= eSymbol.Rate_0) {
              this.node.getComponent(UITransform).priority = _zIndex;
            } else {
              this.Node_symbol.getComponent(UITransform).priority = _zIndex;
            }
          } else {
            _zIndex = slotLuckyGems500Model.instance.specialStartCol > 0 && this._iCol == slotLuckyGems500Model.instance.curSpecialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
            this.node.getComponent(UITransform).priority = _zIndex;
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (slotLuckyGems500Model.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.position = v3(this.node.position.x, this.node.position.y - offset, 0);
          var posSide = -2 * eConstDef.cSymbolH;
          if (this.node.position.y <= posSide) {
            ret = false;
          }
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this3 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            var pos_0 = _this3.node.position.y + 2 + offset;
            var pos_1 = _this3.node.position.y + offset;
            tween(_this3.node).to(0.15, {
              position: v3(_this3.node.position.x, pos_0, 0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this3.node.position.x, pos_1, 0)
            }, {
              easing: "cubicIn"
            }).call(function () {
              switch (_this3.itemInfo.Sym) {
                case eSymbol.Rate_0:
                  {
                    slotLuckyGems500Utils.instance.playOneShot(eSound.Nudge_Appear);
                    break;
                  }
                case eSymbol.Wild:
                  {
                    slotLuckyGems500Utils.instance.playSound(eSound.Wild_Stop);
                    break;
                  }
              }
              resolve();
            }).start();
          });
        };
        _proto.doShowResultEffect = function doShowResultEffect(isShow) {
          if (!isValid(this._spineEffect_kuang) || !this.itemInfo.IsReward) {
            return;
          }
          this._spineEffect_kuang.active = isShow;
          var symAni = this.Node_symbol.getComponent(sp.Skeleton);
          if (symAni) {
            symAni.paused = !isShow;
          }
          this.updateZIndex(isShow);
        };
        _proto.doEffect = function doEffect(delay) {
          var _this4 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            //|| (slotLuckyGems500Model.instance.freeStatus != slotLuckyGems500Def.eRunStatus.NONE && this.itemInfo.Sym > slotLuckyGems500Def.eSymbol.Wild)
            if (_this4.itemInfo.IsReward) {
              _this4.scheduleOnce(function () {
                //中奖图标音效
                switch
                  // case slotLuckyGems500Def.eSymbol.Deer:
                  // case slotLuckyGems500Def.eSymbol.Wolf:
                  // case slotLuckyGems500Def.eSymbol.Bear:
                  // case slotLuckyGems500Def.eSymbol.Eagle:
                  // case slotLuckyGems500Def.eSymbol.Cattle: {
                  //     slotLuckyGems500Utils.instance.playOneShot(`sound/Symbol${6 + slotLuckyGems500Def.eSymbol.Deer - this.itemInfo.Sym}`);
                  //     break;
                  // }
                (_this4.itemInfo.Sym) {}
                if (_this4._iCol == 3 && slotLuckyGems500Model.instance.isNudge) ;
                _this4.updateSymbol(true);
                if (_this4.itemInfo.Sym < eSymbol.Rate_0) {
                  //添加中奖效果
                  _this4._spineEffect_kuang = instantiate(_this4.Node_winEffect);
                  var wPos = _this4.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  wPos = _this4.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                  _this4._spineEffect_kuang.position = wPos;
                  _this4.Node_effectRoot.addChild(_this4._spineEffect_kuang);
                }
                resolve();
              }, delay);
            } else {
              resolve();
            }
          });
        }
        // doPearlBlink() {
        //   this.itemStatus = eItemStatus.Blink;
        //   let itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
        //   if (itemSpine) {
        //     switch (this.itemInfo.Sym) {
        //       case slotLuckyGems500Def.eSymbol.yellowPearl: {
        //         itemSpine.setAnimation(0, "respin_intro", false);
        //         itemSpine.addAnimation(0, "respin_idle", true);
        //         break;
        //       }
        //       case slotLuckyGems500Def.eSymbol.whitePearl: {
        //         itemSpine.setAnimation(0, "respin_idle", true);
        //         break;
        //       }
        //     }
        //   }
        // }
        // stopPearlBlink() {
        //   this.itemStatus = eItemStatus.STOP;
        //   let itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
        //   if (itemSpine) {
        //     switch (this.itemInfo.Sym) {
        //       case slotLuckyGems500Def.eSymbol.yellowPearl: {
        //         itemSpine.setAnimation(0, "normal_idle", true);
        //         break;
        //       }
        //       case slotLuckyGems500Def.eSymbol.whitePearl: {
        //         itemSpine.setAnimation(0, "idle", true);
        //         break;
        //       }
        //     }
        //   }
        // }
        ;

        _proto.doScatterBlink = function doScatterBlink() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            _this5.itemStatus = eItemStatus.Blink;
            var itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.setAnimation(0, "freegame_intro", false);
              itemSpine.addAnimation(0, "normal_idle", true);
              // itemSpine.setCompleteListener(() => {
              //     itemSpine.setCompleteListener(null);
              // });
            }

            resolve();
          });
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, "normal_idle", true);
          }
          var addIndex = Math.floor((-this.node.position.y + eConstDef.cSymbolH * 6) / eConstDef.cSymbolH);
          this.node.getComponent(UITransform).priority = eZindex.icon + addIndex;
        };
        return slotLuckyGems500_symbolItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_winEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './slotLuckyGems500Model.ts', './I18n.ts', './ViewManager.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Utils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, slotLuckyGems500Model, i18n, ViewManager, eProto, eRunStatus, eEvent, eSymbol, vRate, slotLuckyGems500Utils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
      vRate = module.vRate;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "dbed5xV0X5ByalcpvidjQiB", "slotLuckyGems500Ctrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotLuckyGems500Ctrl = exports('slotLuckyGems500Ctrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(slotLuckyGems500Ctrl, _GameDef$BaseCtrl);
        function slotLuckyGems500Ctrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = slotLuckyGems500Model.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = slotLuckyGems500Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete slotLuckyGems500Ctrl._instance;
          slotLuckyGems500Ctrl._instance = null;
          slotLuckyGems500Model.destroy();
          slotLuckyGems500Utils.destroy();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

          //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.onRecvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.reqBet = function reqBet() {
          if (!slotLuckyGems500Model.instance.gameInfo || this.isReqBet) {
            return false;
          }
          if (slotLuckyGems500Model.instance.freeStatus == eRunStatus.NONE && slotLuckyGems500Model.instance.curBalance < slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            EventManager.instance.emit(eEvent.onSetAuto, "cancel");
            return false;
          }
          this.isReqBet = true;
          slotLuckyGems500Model.instance.curTotalBet = slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate;
          var addition = slotLuckyGems500Model.instance.exSelectRate == 1 ? 0 : slotLuckyGems500Model.instance.exSelectRate < 8 ? 1 : 2;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + slotLuckyGems500Model.instance.curBet,
            addition: addition
          });
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          // NetManager.instance.sendOnlineData(slotLuckyGems500Def.eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotLuckyGems500"
          });
        }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 100;
          }
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "slotLuckyGems500"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(slotLuckyGems500Def.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        };
        _proto.reqBetList = function reqBetList() {
          NetManager.instance.sendOnlineData(eProto.HD_BetList, {});
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd == slotLuckyGems500Def.eProto.HD_Bet) {
          //     data.Data = slotLuckyGems500Utils.instance.getTestResult();
          // }

          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            // if (data.cmd == slotLuckyGems500Def.eProto.HD_Enter || (data.Code == 402 && slotLuckyGems500Model.instance.gameState.GameNo != slotLuckyGems500Model.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(slotLuckyGems500Def.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              EventManager.instance.emit(eEvent.onSetAuto, "cancel");
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_BetList:
              {
                slotLuckyGems500Model.instance.gameInfo = data.Data;
                break;
              }
            // case slotLuckyGems500Def.eProto.HD_info: {
            //   ViewManager.instance.closeWait();
            //   slotLuckyGems500Model.instance.gameInfo = data.Data;
            //   slotLuckyGems500Model.instance.betResult = data.Data;

            //   if (slotLuckyGems500Model.instance.betResult.state != slotLuckyGems500Model.instance.betResult.nextState) {
            //     slotLuckyGems500Model.instance.betResult.state = slotLuckyGems500Model.instance.betResult.nextState;
            //   }

            //   if (slotLuckyGems500Model.instance.betResult.state == slotLuckyGems500Def.eGameStateType.seaMonsterState) {
            //     let pearlKeys = Object.keys(slotLuckyGems500Model.instance.betResult.pearl);
            //     let pearlKeysChage = Object.keys(slotLuckyGems500Model.instance.betResult.seaMonsterInfo.changAfterPearl);
            //     for (const key of pearlKeys) {
            //       let vKey = slotLuckyGems500Model.instance.betResult.pearl[key];
            //       switch (vKey) {
            //         case "power": {
            //           if (!pearlKeysChage[key]) {
            //             slotLuckyGems500Model.instance.betResult.openNum[parseInt(key)] =
            //               Math.floor(Math.random() * slotLuckyGems500Def.eSymbol.Q) + 2;
            //             slotLuckyGems500Model.instance.betResult.pearl[key] = null;
            //           }
            //           break;
            //         }
            //         case "pick": {
            //           slotLuckyGems500Model.instance.betResult.openNum[parseInt(key)] =
            //             slotLuckyGems500Def.eSymbol.whitePearl;
            //           slotLuckyGems500Model.instance.betResult.pearl[key] =
            //             slotLuckyGems500Model.instance.betResult.seaMonsterInfo.changAfterPearl[key];
            //           break;
            //         }
            //       }
            //     }
            //   }

            //   // slotLuckyGems500Model.instance.betResult.nextState = slotLuckyGems500Def.eGameStateType.seaMonsterState;

            //   if (
            //     slotLuckyGems500Model.instance.gameInfo.seaMonsterInfo.superFree ||
            //     slotLuckyGems500Model.instance.gameInfo.state == slotLuckyGems500Def.eGameStateType.freeState ||
            //     slotLuckyGems500Model.instance.gameInfo.state == slotLuckyGems500Def.eGameStateType.superFreeState
            //   ) {
            //     slotLuckyGems500Model.instance.remainingCount =
            //       slotLuckyGems500Model.instance.gameInfo.freeInfo.remainingCount;
            //     slotLuckyGems500Model.instance.totalFreeWin = slotLuckyGems500Model.instance.gameInfo.freeInfo.prizeAmount;
            //     slotLuckyGems500Model.instance.totalCount = slotLuckyGems500Model.instance.gameInfo.freeInfo.totalCount;
            //   }

            //   break;
            // }
            // case slotLuckyGems500Def.eProto.HD_Leave: {
            //     break;
            // }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                slotLuckyGems500Model.instance.betResult = data.Data;

                //判断是否有2个胡
                slotLuckyGems500Model.instance.specialStartCol = 0;
                slotLuckyGems500Model.instance.curSpecialStartCol = -1;
                for (var _iterator = _createForOfIteratorHelperLoose(slotLuckyGems500Model.instance.betResult.prizeInfo), _step; !(_step = _iterator()).done;) {
                  var _i4 = _step.value;
                  var PrizeNum = JSON.parse(_i4.PrizeNum);
                  if (PrizeNum.Symbol > 5) {
                    slotLuckyGems500Model.instance.specialStartCol = 3;
                    break;
                  }
                }
                slotLuckyGems500Model.instance.isNudge = slotLuckyGems500Model.instance.betResult.prizeAmount > 0 && slotLuckyGems500Model.instance.betResult.openResult.multiples[1] == eSymbol.Scatter;
                if (slotLuckyGems500Model.instance.isNudge) {
                  slotLuckyGems500Model.instance.odds = 0;
                  for (var _iterator2 = _createForOfIteratorHelperLoose(slotLuckyGems500Model.instance.betResult.openResult.exNudge), _step2; !(_step2 = _iterator2()).done;) {
                    var exNudge = _step2.value;
                    slotLuckyGems500Model.instance.odds += exNudge;
                  }
                  var rateList = slotLuckyGems500Model.instance.exSelectRate < 1.5 ? vRate.slice() : slotLuckyGems500Model.instance.exSelectRate < 8 ? vRate.slice(1) : vRate.slice(4);
                  slotLuckyGems500Model.instance.betResult.openResult.exNudge.unshift(0);
                  for (var i = 0; i < 2; i++) {
                    slotLuckyGems500Model.instance.betResult.openResult.exNudge.push(rateList[Math.floor(Math.random() * rateList.length)]);
                  }
                } else {
                  slotLuckyGems500Model.instance.betResult.openResult.exNudge = slotLuckyGems500Model.instance.betResult.openResult.exNudge || [];
                  var _rateList = slotLuckyGems500Model.instance.exSelectRate < 1.5 ? vRate.slice() : slotLuckyGems500Model.instance.exSelectRate < 8 ? vRate.slice(1) : vRate.slice(4);
                  slotLuckyGems500Model.instance.betResult.openResult.exNudge.unshift(0);
                  for (var _i3 = 0; _i3 < 2; _i3++) {
                    slotLuckyGems500Model.instance.betResult.openResult.exNudge.push(_rateList[Math.floor(Math.random() * _rateList.length)]);
                  }
                  slotLuckyGems500Model.instance.odds = slotLuckyGems500Model.instance.betResult.openResult.multiples[1];
                }

                // if (slotLuckyGems500Model.instance.quickState == 0) {
                //   let checkSpecialRun = () => {
                //     let openResult = slotLuckyGems500Model.instance.betResult.openResult;
                //     let iScatterCounts = 0;
                //     for (let iCol = 0; iCol < 5; iCol++) {
                //       for (let iRow = 0; iRow < slotLuckyGems500Def.eConstDef.CMaxRow; iRow++) {
                //         let index = iCol * slotLuckyGems500Def.eConstDef.CMaxRow + iRow;
                //         let sym = openResult[index];

                //         if (sym == slotLuckyGems500Def.eSymbol.Scatter) {
                //           iScatterCounts++;
                //         }
                //       }

                //       if (iScatterCounts > 1 && iCol < 4) {
                //         slotLuckyGems500Model.instance.specialStartCol = iCol + 1;
                //         slotLuckyGems500Model.instance.curSpecialStartCol = iCol + 1;

                //         slotLuckyGems500Model.instance.specialSymbol = slotLuckyGems500Def.eSymbol.Scatter;
                //         return;
                //       }
                //     }
                //   };
                //   checkSpecialRun();

                //   gts.Debug.LogWarr(
                //     "==slotLuckyGems500Model.instance.specialStartCol==" + slotLuckyGems500Model.instance.specialStartCol,
                //   );
                // }

                // if (slotLuckyGems500Model.instance.freeStatus == slotLuckyGems500Def.eRunStatus.NONE) {
                //   slotLuckyGems500Model.instance.curBalance -= slotLuckyGems500Model.instance.curTotalBet;

                //   slotLuckyGems500Model.instance.remainingCount =
                //     slotLuckyGems500Model.instance.betResult.freeInfo.remainingCount;
                //   slotLuckyGems500Model.instance.totalCount = slotLuckyGems500Model.instance.betResult.freeInfo.totalCount;
                // }

                // if (
                //   slotLuckyGems500Model.instance.betResult.state == slotLuckyGems500Def.eGameStateType.freeState ||
                //   slotLuckyGems500Model.instance.betResult.state == slotLuckyGems500Def.eGameStateType.superFreeState ||
                //   slotLuckyGems500Model.instance.betResult.nextState == slotLuckyGems500Def.eGameStateType.freeState ||
                //   slotLuckyGems500Model.instance.betResult.nextState == slotLuckyGems500Def.eGameStateType.superFreeState
                // ) {
                //   slotLuckyGems500Model.instance.totalFreeWin = slotLuckyGems500Model.instance.betResult.freeInfo.prizeAmount;
                // }

                // gts.Debug.LogWarr(
                //   "==slotLuckyGems500Model.instance.totalFreeTimes==" +
                //     slotLuckyGems500Model.instance.betResult.freeInfo.remainingCount,
                // );

                break;
              }
            // case slotLuckyGems500Def.eProto.HD_BoYiBo:
            case eProto.HD_History:
            case eProto.HD_Rank:
              {
                emitData = data.Data;
                break;
              }

            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==slotLuckyGems500=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (slotLuckyGems500Model.instance.curBalance > 0) {
                  slotLuckyGems500Model.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                slotLuckyGems500Model.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==slotLuckyGems500=pushWallet==" + _HD_Wallet.VndBalance);
                if (slotLuckyGems500Model.instance.curBalance > 0) {
                  slotLuckyGems500Model.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                slotLuckyGems500Model.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                // 断线重连
                Common.closeWait();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return slotLuckyGems500Ctrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Def.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "34281WsCadArKzVqDxJDAHL", "slotLuckyGems500Def", undefined);
      var cBundle = exports('cBundle', "slotLuckyGems500Game");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotLuckyGems500/HD_info";
        eProto["HD_BetList"] = "slotLuckyGems500/HD_BetList";
        eProto["HD_Bet"] = "slotLuckyGems500/HD_Bet";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var cArrPos_0 = exports('cArrPos_0', [{
        pos: v3(-455, -102, 0),
        eulerAngles: v3(0, 0, 28)
      }, {
        pos: v3(-324, -47, 0),
        eulerAngles: v3(0, 0, 20)
      }, {
        pos: v3(-198, -10, 0),
        eulerAngles: v3(0, 0, 12)
      }, {
        pos: v3(-66, 9, 0),
        eulerAngles: v3(0, 0, 4)
      }, {
        pos: v3(66, 9, 0),
        eulerAngles: v3(0, 0, -4)
      }, {
        pos: v3(198, -10, 0),
        eulerAngles: v3(0, 0, -12)
      }, {
        pos: v3(324, -47, 0),
        eulerAngles: v3(0, 0, -20)
      }, {
        pos: v3(455, -102, 0),
        eulerAngles: v3(0, 0, -28)
      }]);
      var cArrPos_1 = exports('cArrPos_1', [{
        pos: v3(-455, 116, 0),
        eulerAngles: v3(0, 0, -28)
      }, {
        pos: v3(-324, 63, 0),
        eulerAngles: v3(0, 0, -20)
      }, {
        pos: v3(-198, 23, 0),
        eulerAngles: v3(0, 0, -12)
      }, {
        pos: v3(-66, 4, 0),
        eulerAngles: v3(0, 0, -4)
      }, {
        pos: v3(66, 4, 0),
        eulerAngles: v3(0, 0, 4)
      }, {
        pos: v3(198, 23, 0),
        eulerAngles: v3(0, 0, 12)
      }, {
        pos: v3(324, 63, 0),
        eulerAngles: v3(0, 0, 20)
      }, {
        pos: v3(455, 116, 0),
        eulerAngles: v3(0, 0, 28)
      }]);
      var cAutoTimes = exports('cAutoTimes', [20, 50, 100, 500, 9999999999999]);
      var eZindex = exports('eZindex', {
        NONE: 0,
        icon: 10,
        icon_cat: 2500,
        icon_scatter: 5000,
        icon_wild: 5000,
        icon_whitePearl: 10000,
        icon_yellowPearl: 20000,
        MASK: 30000,
        iconWin: 50000,
        SPECIAL: 100000
      });
      var eConstDef = exports('eConstDef', {
        CMaxCol: 4,
        CMaxRow: 3,
        cSpecialDuration: 1.5,
        cStartDelay: 0.2,
        cQuickStopStartDelay: 0,
        cQuickStopDelay: 0.1,
        cStopDelay: 0.75,
        cSymbolW: 148,
        cSymbolH: 115,
        cSymbolStartY: -172.5,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 250,
        CSpeedReduse: 250
      }); // cSpeedMax = 800,
      // cSpeedMin = 600,
      // CSpeedStart = 50,
      // CSpeedAdd = 10,
      // CSpeedReduse = 10,
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        RUNNING: 2,
        STOPPING: 3,
        STOP: 4,
        CLEAR: 5,
        SHAKE: 6,
        DROP: 7,
        END: 8
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var vRate = exports('vRate', [1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 500]);
      var eSymbol = exports('eSymbol', {
        Scatter: 0,
        Wild: 1,
        J: 2,
        Q: 3,
        K: 4,
        A: 5,
        StoneRed: 6,
        StoneBlue: 7,
        StoneGreen: 8,
        Rate_0: 100,
        Rate_1: 101,
        Rate_2: 102,
        Rate_3: 103,
        Rate_5: 105,
        Rate_10: 110,
        Rate_15: 115,
        Rate_20: 120,
        Rate_25: 125,
        Rate_50: 150,
        Rate_100: 200,
        Rate_500: 600
      });
      var arrBase = exports('arrBase', [1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2500000]);
      var cMinBase = exports('cMinBase', arrBase[0]);
      var cMaxBase = exports('cMaxBase', arrBase[arrBase.length - 1]);
      // export const cLockBase = arrBase[2];
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eGameStateType = exports('eGameStateType', Enum({
        ordinaryState: 1,
        //正常模式
        freeState: 2,
        //免费 freeInfo
        superFreeState: 3,
        //超级免费 freeInfo
        jackpotState: 4,
        //
        pickState: 5,
        //seaMonsterInfo
        seaMonsterState: 6 //seaMonsterInfo
      }));

      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onSetMask"] = "onSetMask";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onCollectCoin"] = "onCollectCoin";
        eEvent["onCatNumAdd"] = "onCatNumAdd";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        base_bgm: "sound/base_bgm",
        Spin: "sound/Spin",
        Reel_Stop: "sound/Reel_Stop",
        Wild_Stop: "sound/Wild_Stop",
        Fly: "sound/Fly",
        Double: "sound/Double",
        Big_Win: "sound/Big_Win",
        BigWin_End: "sound/BigWin_End",
        ChangeWin: "sound/ChangeWin",
        win1: "sound/win1",
        win2: "sound/win2",
        win1end: "sound/win1end",
        win2end: "sound/win2end",
        Ex_start: "sound/Ex_start",
        Extra_Bet_On: "sound/Extra_Bet_On",
        Nudge_Appear: "sound/Nudge_Appear",
        Nudge_Collect: "sound/Nudge_Collect",
        Nudge_Fly: "sound/Nudge_Fly",
        Nudge_Open: "sound/Nudge_Open",
        Nudge_Reel: "sound/Nudge_Reel",
        nice_win: "sound/nice_win",
        click: "sound/click",
        click_base: "sound/click_base",
        click_chest: "sound/click_chest"
      }); //////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Game", ['./slotLuckyGems500GameView.ts', './slotLuckyGems500Loading.ts', './slotLuckyGems500Ctrl.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Model.ts', './slotLuckyGems500Scene.ts', './slotLuckyGems500Utils.ts', './slotLuckyGems500_bigWin.ts', './slotLuckyGems500_btnEffect.ts', './slotLuckyGems500_help.ts', './slotLuckyGems500_history.ts', './slotLuckyGems500_historyItem.ts', './slotLuckyGems500_mutBtn.ts', './slotLuckyGems500_setAuto.ts', './slotLuckyGems500_symbol.ts', './slotLuckyGems500_symbolEffectRoot.ts', './slotLuckyGems500_symbolItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotLuckyGems500GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Model.ts', './slotLuckyGems500Ctrl.ts', './ViewManager.ts', './slotLuckyGems500Utils.ts', './GUtil.ts', './slotLuckyGems500_symbol.ts', './Common.ts', './AudioManager.ts', './slotLuckyGems500_bigWin.ts', './slotLuckyGems500_mutBtn.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Prefab, Toggle, sp, tween, v3, UITransform, Tween, UIOpacity, Sprite, instantiate, find, sys, macro, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, cMinBase, arrBase, eSymbol, eSound, eConstDef, eProto, slotLuckyGems500Model, slotLuckyGems500Ctrl, ViewManager, slotLuckyGems500Utils, GUtil, slotLuckyGems500_symbol, Common, AudioManager, slotLuckyGems500_bigWin, slotLuckyGems500_mutBtn;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      sp = module.sp;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      find = module.find;
      sys = module.sys;
      macro = module.macro;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      cMinBase = module.cMinBase;
      arrBase = module.arrBase;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }, function (module) {
      slotLuckyGems500Ctrl = module.slotLuckyGems500Ctrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      slotLuckyGems500_symbol = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotLuckyGems500_bigWin = module.default;
    }, function (module) {
      slotLuckyGems500_mutBtn = module.slotLuckyGems500_mutBtn;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36;
      cclegacy._RF.push({}, "bd5d27ttGZAT5a2R8httwSa", "slotLuckyGems500GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotLuckyGems500GameView = exports('default', (_dec = ccclass("slotLuckyGems500GameView"), _dec2 = menu("slotLuckyGems500Game/slotLuckyGems500GameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(slotLuckyGems500_symbol), _dec8 = property(Node), _dec9 = property(Button), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Button), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(slotLuckyGems500_mutBtn), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Toggle), _dec35 = property(sp.Skeleton), _dec36 = property(sp.Skeleton), _dec37 = property(Node), _dec38 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(slotLuckyGems500GameView, _GameDef$BaseView);
        function slotLuckyGems500GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          // @property(Node)
          // Node_loading: Node = null;
          // @property(Sprite)
          // ProgressBar: Sprite = null;
          // @property(Node)
          // Node_gameEnter: Node = null;
          _initializerDefineProperty(_this, "Node_symbolList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolMask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          // @property(Node)
          // Node_colEffect_pearl: Node = null;
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor4, _assertThisInitialized(_this));
          // @property(Node)
          // Node_effectRoot_sub: Node = null;
          // @property(Node)
          // Node_effectRoot_free: Node = null;
          _initializerDefineProperty(_this, "slotLuckyGems500_symbolList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_stop", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor13, _assertThisInitialized(_this));
          /////////////////
          _initializerDefineProperty(_this, "Node_win", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_uiDown", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_line", _descriptor16, _assertThisInitialized(_this));
          /////////////
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bqRoot", _descriptor22, _assertThisInitialized(_this));
          // @property(Node)
          // Node_bqRoot_free: Node = null;
          // @property(Label)
          // Label_freeBaseBet: Label = null;
          // @property(Label)
          // Label_freeTimes: Label = null;
          _initializerDefineProperty(_this, "Prefab_gold", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layer_90_logo", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layer_80_symbol", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_niceWin", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_fastState", _descriptor27, _assertThisInitialized(_this));
          ///////////////
          _initializerDefineProperty(_this, "Node_betWheel", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_clickMask_down", _descriptor29, _assertThisInitialized(_this));
          //ex
          _initializerDefineProperty(_this, "Node_ex", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_exBoard", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_ex", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EX_change", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EXTag", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_exSelect", _descriptor35, _assertThisInitialized(_this));
          //nudge
          _initializerDefineProperty(_this, "Node_exNudge", _descriptor36, _assertThisInitialized(_this));
          _this.loaded = false;
          // //超级免费 珍珠缩放
          // doSuperFreeScale(isEnter = false) {
          //   for (let iCol = 0; iCol < this.slotLuckyGems500_symbolList.length; iCol++) {
          //     let slotLuckyGems500_symbolList = this.slotLuckyGems500_symbolList[iCol];
          //     for (let iRow = 0; iRow < slotLuckyGems500_symbolList._symbolList.length; iRow++) {
          //       let symbolItem = slotLuckyGems500_symbolList._symbolList[iRow];
          //       if (symbolItem.itemInfo.Sym >= slotLuckyGems500Def.eSymbol.whitePearl && !symbolItem.itemInfo.isScale) {
          //         symbolItem.doSuperFreeChange();
          //       }
          //     }
          //   }
          //   for (const info of slotLuckyGems500Model.instance.superFreeList) {
          //     if (!info.isScale) {
          //       info.isScale = true;
          //       let symbolNode: Node = info.node;
          //       let toPos = v3(symbolNode.position.x + 40, symbolNode.position.y - 25, 0);
          //       tween(symbolNode)
          //         .to(0.5, { scale: v3(0.4, 0.4, 0.4), position: toPos })
          //         .start();
          //     }
          //   }
          // }
          // doSuperFreeScaleResum() {
          //   return new Promise<void>((resolve, reject) => {
          //     let isScale = false;
          //     for (const info of slotLuckyGems500Model.instance.superFreeList) {
          //       if (info.isScale) {
          //         isScale = true;
          //         info.isScale = false;
          //         let symbolNode: Node = info.node;
          //         let itemInfo: slotLuckyGems500Def.IPosMsg = info.itemInfo;
          //         let symbolList = this.slotLuckyGems500_symbolList[itemInfo.iCol];
          //         let symbolItem = symbolList._symbolList[itemInfo.iRow];
          //         let toPos = v3(symbolNode.position.x - 40, symbolNode.position.y + 25, 0);
          //         tween(symbolNode)
          //           .to(0.5, { scale: v3(1, 1, 1), position: toPos })
          //           .call(() => {
          //             symbolItem.doSuperFreeChangeResum(itemInfo);
          //             resolve();
          //           })
          //           .destroySelf()
          //           .start();
          //       }
          //     }
          //     if (!isScale) {
          //       resolve();
          //     }
          //     slotLuckyGems500Model.instance.superFreeList = [];
          //   });
          // }
          _this.arrEnableBack = null;
          _this.showIndex = 0;
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          return _this;
        }
        var _proto = slotLuckyGems500GameView.prototype;
        // //BG
        // @property(Node)
        // normal_bg: Node = null;
        // @property(Node)
        // free_bg: Node = null;
        // @property(Node)
        // superfree_bg: Node = null;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, slotLuckyGems500Ctrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});

          // this.Button_add.customSound = {
          //     strPath: slotLuckyGems500Def.eSound.chest_pick1,
          //     bundle: slotLuckyGems500Utils.instance.bundle,
          // };

          Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onCollectCoin, this.onCollectCoin, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSetAuto, this.onSetAuto, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            if (slotLuckyGems500Model.instance.gameStatus == eRunStatus.NONE && !slotLuckyGems500Model.instance.isAuto && slotLuckyGems500Model.instance.freeStatus == eRunStatus.NONE && !slotLuckyGems500Ctrl.instance.isReqBet && slotLuckyGems500Model.instance.remainingCount == 0) {
              slotLuckyGems500Ctrl.instance.reqBet();
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onCollectCoin, this.onCollectCoin, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto, this.onSetAuto, this);
          slotLuckyGems500Model.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.start = function start() {
          var Toggle_music = this.Node_menu.getChildByName("Toggle_music").getComponent(Toggle);
          var Toggle_sound = this.Node_menu.getChildByName("Toggle_sound").getComponent(Toggle);
          Toggle_music.isChecked = AudioManager.instance._soundMusic;
          Toggle_sound.isChecked = AudioManager.instance._soundEffect;

          // this.Node_loading.active = true;
          // this.ProgressBar.fillRange = 0;
          // tween(this.ProgressBar)
          //   .to(1.5, { fillRange: 1.0 })
          //   .call(() => {
          //     this.loaded = true;
          //   })
          //   .start();
        };

        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.gameShow = function gameShow() {
          NetManager.instance.waitServiceSendData();
          this.scheduleOnce(function () {
            Common.showLog("前台");
            if (NetManager.instance._connect == true) {
              if (slotLuckyGems500Model.instance.reLogin && slotLuckyGems500Ctrl.instance.isReqBet) {
                NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
                slotLuckyGems500Ctrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this2 = this;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            _this2.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          // this.Node_effectRoot_sub.getComponent(UITransform).priority = 1000;
          this.Node_effectRoot.getComponent(UITransform).priority = 1000;
          slotLuckyGems500Utils.instance.loadRes(function () {
            slotLuckyGems500Ctrl.instance.reqBetList();
            _this3.Node_symbolMask.getComponent(UITransform).priority = eZindex.MASK;
          });
          slotLuckyGems500Model.instance.curBet = cMinBase;
          this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet, 2);
          this.Label_win.string = "";
          this.updateGold();
        };
        _proto.doScale_haiGuai = function doScale_haiGuai(scale) {
          tween(this.Layer_80_symbol).to(0.5, {
            scale: v3(scale, scale, scale)
          }).start();
        };
        _proto.setBaseBet = function setBaseBet() {
          //1-slotLuckyGems500Def.cMaxBase 2500
          //-0.6~-0.9
          //0~-110
          Tween.stopAllByTarget(this.Node_betWheel.getComponent(UIOpacity));
          tween(this.Node_betWheel.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).delay(2.0).to(0.1, {
            opacity: 0
          }).start();
          var quan_tiao = this.Node_betWheel.getChildByName("quan_tiao").getComponent(Sprite);
          var zhen = this.Node_betWheel.getChildByName("zhen");
          var rate = slotLuckyGems500Utils.instance.betIndex / (arrBase.length - 1);
          var fillRange = -0.6 - 0.3 * rate;
          var rotation = -110 * rate;
          tween(quan_tiao).to(0.1, {
            fillRange: fillRange
          }).start();
          tween(zhen).to(0.1, {
            eulerAngles: v3(0, 0, rotation)
          }).start();
        };
        _proto.changeExModel = function changeExModel(isChange) {
          var _this4 = this;
          if (isChange === void 0) {
            isChange = false;
          }
          if (isChange) {
            var symList = [[1, 1, 1], [6, 6, 6], [7, 7, 7], slotLuckyGems500Model.instance.exSelectRate > 5 ? [eSymbol.Rate_100, eSymbol.Rate_500, eSymbol.Rate_0] : [eSymbol.Rate_10, eSymbol.Rate_15, eSymbol.Rate_5]];
            slotLuckyGems500Model.instance.symbolBack = [];
            for (var iCol = 0; iCol < 4; iCol++) {
              var symbolInfo = [];
              var symbolList = this.slotLuckyGems500_symbolList[iCol];
              var _loop = function _loop() {
                var symbol = symbolList._symbolList[iRow];
                symbolInfo.push(symbol.itemInfo.Sym);
                symbol.itemInfo.Sym = symList[iCol][iRow];
                symbol.updateSymbol();
                if (symbol.itemInfo.Sym == eSymbol.Rate_0) {
                  _this4.scheduleOnce(function () {
                    var Label_nudgeTimes = symbol.Node_symbol.getChildByName("Label_nudgeTimes");
                    Label_nudgeTimes.active = true;
                    Label_nudgeTimes.getComponent(Label).string = "50";
                  }, 0.05);
                }
              };
              for (var iRow = 0; iRow < 3; iRow++) {
                _loop();
              }
              slotLuckyGems500Model.instance.symbolBack.push(symbolInfo);
            }

            //ex标记 亮框
            this.EXTag.node.active = true;
            this.EX_change.node.active = true;
            this.EX_change.setAnimation(0, "animation", false);

            //发送itemSYMBOL
            this.scheduleOnce(function () {
              slotLuckyGems500Utils.instance.playOneShot(eSound.Extra_Bet_On);
              var startPos = _this4.Node_ex.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              startPos = _this4.Node_ex.getComponent(UITransform).convertToNodeSpaceAR(startPos);
              for (var _iRow = 2; _iRow >= 0; _iRow--) {
                var symbol = _this4.slotLuckyGems500_symbolList[3]._symbolList[_iRow];
                var newSymbol = instantiate(symbol.Node_symbol);
                newSymbol.position = startPos;
                _this4.Node_ex.addChild(newSymbol);
                var toPos = symbol.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                toPos = _this4.Node_ex.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                tween(newSymbol).delay((2 - _iRow) * 0.2).to(0.25, {
                  position: toPos
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
            }, 1);
          } else if (slotLuckyGems500Model.instance.symbolBack) {
            for (var _iCol = 0; _iCol < 4; _iCol++) {
              var _symbolList = this.slotLuckyGems500_symbolList[_iCol];
              for (var _iRow2 = 0; _iRow2 < 3; _iRow2++) {
                var symbol = _symbolList._symbolList[_iRow2];
                symbol.itemInfo.Sym = slotLuckyGems500Model.instance.symbolBack[_iCol][_iRow2];
                symbol.updateSymbol();
              }
            }
            slotLuckyGems500Model.instance.symbolBack = null;
            //ex标记
            this.EXTag.node.active = false;
            this.EX_change.node.active = false;
          }
        };
        _proto.doNudgeRunEnd = function doNudgeRunEnd() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var Label_nudgeRate = find("Node_frame/Node_nudgeRun/Label_nudgeRate", _this5.Node_exNudge);
            var newLabel = instantiate(Label_nudgeRate);
            var startPos = Label_nudgeRate.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            startPos = _this5.node.getComponent(UITransform).convertToNodeSpaceAR(startPos);
            newLabel.position = startPos;
            _this5.node.addChild(newLabel);
            var toPos = _this5.Node_win.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            toPos = _this5.node.getComponent(UITransform).convertToNodeSpaceAR(toPos);
            slotLuckyGems500Utils.instance.playOneShot(eSound.Nudge_Fly);
            tween(newLabel).to(0.35, {
              position: toPos
            }, {
              easing: "cubicIn"
            }).call(function () {
              _this5.Node_win.active = true;
              var win_light = _this5.Node_win.getChildByName("win_light");
              win_light.active = true;
              var win_lightAni = win_light.getComponent(sp.Skeleton);
              win_lightAni.setAnimation(0, "idle", false);
              win_lightAni.setCompleteListener(function () {
                win_lightAni.setCompleteListener(null);
                win_light.active = false;
              });
              slotLuckyGems500Utils.instance.playOneShot(eSound.Nudge_Collect);
              var Label_win = _this5.Node_win.getChildByName("Label_win").getComponent(Label);
              Label_win.string = Common.ChangeMoneyShowFloat(slotLuckyGems500Model.instance.betResult.prizeAmount, 2);
              return resolve();
            }).destroySelf().start();
            var Node_symbolList_0 = find("Node_symbol/listMask_0/Node_symbolList", _this5.Node_exNudge);
            Node_symbolList_0.destroyAllChildren();

            //test
            // let ExNudge = null; //slotLuckyGems500Model.instance.betResult.openResult.exNudge;
            // if (!ExNudge) {
            //   ExNudge = [0, 10, 15, 5, 20, 25, 15, 50];
            // }
            var ExNudge = slotLuckyGems500Model.instance.betResult.openResult.exNudge;
            var symList = ExNudge.slice(ExNudge.length - 4, ExNudge.length - 1).reverse();
            for (var i = 0; i < 3; i++) {
              var symbol = _this5.slotLuckyGems500_symbolList[3]._symbolList[i];
              symbol.node.active = true;
              symbol.itemInfo.Sym = 100 + symList[i];
              symbol.itemInfo.IsReward = i == 1;
              symbol.updateSymbol(i == 1);
            }
          });
        };
        _proto.doNudgeRunStart = function doNudgeRunStart() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var ExNudge = slotLuckyGems500Model.instance.betResult.openResult.exNudge.slice();
            var multiples = slotLuckyGems500Model.instance.betResult.openResult.multiples;

            //推杆次数
            var txtFrame = find("Node_frame/txtFrame", _this6.Node_exNudge);
            var Label_nudgeTimes = find("Label_nudgeTimes", txtFrame).getComponent(Label);
            // Label_nudgeTimes.string = `${0}`;
            var curTimes = 0;
            var nudgeRatesCur = 0;
            var totalTimes = ExNudge.length - 3; //头1个  尾2个
            gts.Debug.Log("==totalTimes==" + totalTimes + "==");
            var Node_symbolList_0 = find("Node_symbol/listMask_0/Node_symbolList", _this6.Node_exNudge);
            var Node_symbolList_1 = find("Node_symbol/listMask_1/Node_symbolList", _this6.Node_exNudge);
            var doNudgeRun = function doNudgeRun() {
              if (curTimes >= totalTimes) {
                _this6.unschedule(doNudgeRun);
                resolve();
                return;
              }
              tween(Node_symbolList_0).by(0.5, {
                position: v3(0, 115, 0)
              }, {
                easing: "backIn"
              }).call(function () {
                curTimes++;
                Label_nudgeTimes.string = "" + curTimes;
                slotLuckyGems500Utils.instance.playOneShot(eSound.Nudge_Reel);

                //
                var Node_nudgeRun = find("Node_frame/Node_nudgeRun", _this6.Node_exNudge);
                Node_nudgeRun.active = true;
                var Label_nudgeRate = find("Node_frame/Node_nudgeRun/Label_nudgeRate", _this6.Node_exNudge);
                var FX_Show = find("Node_frame/Node_nudgeRun/FX_Show", _this6.Node_exNudge);
                FX_Show.getComponent(sp.Skeleton).setAnimation(0, "FX_ShowWin", false);
                nudgeRatesCur += ExNudge[curTimes];
                Label_nudgeRate.getComponent(Label).string = "X" + nudgeRatesCur;
                var FX_ShowSymbol = find("Node_symbol/FX_Show", _this6.Node_exNudge);
                FX_ShowSymbol.active = true;
                var FX_ShowSymbolAni = FX_ShowSymbol.getComponent(sp.Skeleton);
                FX_ShowSymbolAni.setAnimation(0, "FX_Spins_Hit", false);
                FX_ShowSymbolAni.setCompleteListener(function () {
                  FX_ShowSymbolAni.setCompleteListener(null);
                  FX_ShowSymbol.active = false;
                });
              }).start();
              tween(Node_symbolList_1).by(0.5, {
                position: v3(0, 47, 0)
              }, {
                easing: "backIn"
              }).start();
            };
            _this6.unschedule(doNudgeRun);
            Node_symbolList_0.position = v3(0, 0, 0);
            Node_symbolList_1.position = v3(0, 0, 0);
            _this6.schedule(doNudgeRun, 1.0, totalTimes);
          });
        };
        _proto.showNudge = function showNudge(isShow, delayTime) {
          var _this7 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (delayTime === void 0) {
            delayTime = 0;
          }
          return new Promise(function (resolve, reject) {
            var txtFrame = find("Node_frame/txtFrame", _this7.Node_exNudge);
            var logoLight = find("Node_frame/logoLight", _this7.Node_exNudge);
            var frameLight = find("Node_frame/frameLight", _this7.Node_exNudge);

            //Node_symbol
            var Node_symbol = find("Node_symbol", _this7.Node_exNudge);
            if (isShow) {
              var symAni = _this7.slotLuckyGems500_symbolList[3]._symbolList[1].Node_symbol.getComponent(sp.Skeleton);
              symAni.setAnimation(0, "Collect", false);
              symAni.addAnimation(0, "Open", true);

              //293
              txtFrame.active = true;
              txtFrame.position = v3(-8, 226, 0);
              tween(txtFrame).delay(0.5).to(0.25, {
                position: v3(-8, 293, 0)
              }).start();
              logoLight.active = true;
              logoLight.getComponent(UIOpacity).opacity = 0;
              tween(logoLight.getComponent(UIOpacity)).to(0.3, {
                opacity: 255
              }).start();
              slotLuckyGems500Utils.instance.playOneShot(eSound.Nudge_Open);
              frameLight.active = true;
              var frameLightAni = frameLight.getComponent(sp.Skeleton);
              frameLightAni.setAnimation(0, "Start", false);
              frameLightAni.setCompleteListener(function () {
                frameLightAni.setCompleteListener(null);
                frameLight.active = false;
              });

              //初始化symbol
              _this7.scheduleOnce(function () {
                for (var i = 0; i < 3; i++) {
                  _this7.slotLuckyGems500_symbolList[3]._symbolList[i].node.active = false;
                }
              }, 0.5);
              var ExNudge = slotLuckyGems500Model.instance.betResult.openResult.exNudge;
              var multiples = slotLuckyGems500Model.instance.betResult.openResult.multiples;

              //推杆次数
              var Label_nudgeTimes = find("Label_nudgeTimes", txtFrame).getComponent(Label);
              var Label_nudgeTotalTimes = find("Label_nudgeTotalTimes", txtFrame).getComponent(Label);
              Label_nudgeTimes.string = "" + 0;
              Label_nudgeTotalTimes.string = "" + (ExNudge.length - 3);
              do {
                var Node_symbolList_0 = find("Node_symbol/listMask_0/Node_symbolList", _this7.Node_exNudge);
                var Node_symbolItemTemp_0 = find("Node_symbol/listMask_0/Node_symbolItemTemp", _this7.Node_exNudge);
                var Node_symbolList_1 = find("Node_symbol/listMask_1/Node_symbolList", _this7.Node_exNudge);
                var Node_symbolItemTemp_1 = find("Node_symbol/listMask_1/Node_symbolItemTemp", _this7.Node_exNudge);
                Node_symbolList_0.position = v3(0);
                Node_symbolList_1.position = v3(0);
                do {
                  var newSymbol_1 = instantiate(Node_symbolItemTemp_1);
                  newSymbol_1.active = true;
                  newSymbol_1.position = v3(0, 2 * 47, 0);
                  Node_symbolList_1.addChild(newSymbol_1);
                  var Node_symbol_1 = newSymbol_1.getChildByName("Node_symbol");
                  Node_symbol_1.getComponent(Sprite).spriteFrame = slotLuckyGems500Utils.instance.getItemSymbolIconSmall(eSymbol.Rate_10);
                } while (false);
                for (var i = 0; i < 3; i++) {
                  var sym = 100 + multiples[i];
                  var newSymbol_0 = instantiate(Node_symbolItemTemp_0);
                  newSymbol_0.active = true;
                  newSymbol_0.position = v3(0, 115 - i * 115, 0);
                  Node_symbolList_0.addChild(newSymbol_0);
                  var Node_symbol_0 = newSymbol_0.getChildByName("Node_symbol");
                  Node_symbol_0.getComponent(Sprite).spriteFrame = slotLuckyGems500Utils.instance.getItemSymbolIcon(sym);
                  if (sym == eSymbol.Rate_0) {
                    var _Label_nudgeTimes = Node_symbol_0.getChildByName("Label_nudgeTimes");
                    _Label_nudgeTimes.active = true;
                    _Label_nudgeTimes.getComponent(Label).string = "" + (slotLuckyGems500Model.instance.betResult.openResult.exNudge.length - 3);
                  }
                  var _newSymbol_ = instantiate(Node_symbolItemTemp_1);
                  _newSymbol_.active = true;
                  _newSymbol_.position = v3(0, 47 - i * 47, 0);
                  Node_symbolList_1.addChild(_newSymbol_);
                  var _Node_symbol_ = _newSymbol_.getChildByName("Node_symbol");
                  _Node_symbol_.getComponent(Sprite).spriteFrame = slotLuckyGems500Utils.instance.getItemSymbolIconSmall(sym);
                }
                for (var _i = 0; _i < ExNudge.length - 2; _i++) {
                  var _sym = 100 + ExNudge[_i + 2];
                  var _newSymbol_2 = instantiate(Node_symbolItemTemp_0);
                  _newSymbol_2.active = true;
                  _newSymbol_2.position = v3(0, -2 * 115 - _i * 115, 0);
                  Node_symbolList_0.addChild(_newSymbol_2);
                  var _Node_symbol_2 = _newSymbol_2.getChildByName("Node_symbol");
                  _Node_symbol_2.getComponent(Sprite).spriteFrame = slotLuckyGems500Utils.instance.getItemSymbolIcon(_sym);
                  var _newSymbol_3 = instantiate(Node_symbolItemTemp_1);
                  _newSymbol_3.active = true;
                  _newSymbol_3.position = v3(0, -2 * 47 - _i * 47, 0);
                  Node_symbolList_1.addChild(_newSymbol_3);
                  var _Node_symbol_3 = _newSymbol_3.getChildByName("Node_symbol");
                  _Node_symbol_3.getComponent(Sprite).spriteFrame = slotLuckyGems500Utils.instance.getItemSymbolIconSmall(_sym);
                }
              } while (false);
              Node_symbol.active = true;
              Node_symbol.getComponent(UIOpacity).opacity = 0;
              tween(Node_symbol.getComponent(UIOpacity)).to(0.5, {
                opacity: 255
              }).start();
              _this7.scheduleOnce(resolve, 0.75);
            } else {
              tween(txtFrame)
              // .delay(0.5)
              .to(0.25, {
                position: v3(-8, 226, 0)
              }).call(function () {
                txtFrame.active = false;
              }).start();
              tween(Node_symbol.getComponent(UIOpacity)).to(0.25, {
                opacity: 0
              }).call(function () {
                Node_symbol.active = false;
              }).start();
              var _logoLight = find("Node_frame/logoLight", _this7.Node_exNudge);
              _logoLight.getComponent(UIOpacity).opacity = 0;
              _logoLight.active = false;
              var Node_nudgeRun = find("Node_frame/Node_nudgeRun", _this7.Node_exNudge);
              Node_nudgeRun.active = false;
              _this7.scheduleOnce(function () {
                var Node_symbolList_0 = find("Node_symbol/listMask_0/Node_symbolList", _this7.Node_exNudge);
                Node_symbolList_0.destroyAllChildren();
                var Node_symbolList_1 = find("Node_symbol/listMask_1/Node_symbolList", _this7.Node_exNudge);
                Node_symbolList_1.destroyAllChildren();
              }, 0.5);
              _this7.scheduleOnce(resolve, delayTime + 0.8);
            }
          });
        };
        _proto.showEx = function showEx(isShow) {
          var _this8 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (isShow) {
            slotLuckyGems500Utils.instance.playOneShot(eSound.Ex_start);
            var exSelect_Label_bet = find("Node_root/Label_bet", this.Node_exSelect).getComponent(Label);
            exSelect_Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet, 2);
            var exSelect_Label_bet_0 = find("Node_root/Label_bet_0", this.Node_exSelect).getComponent(Label);
            exSelect_Label_bet_0.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 1.5, 2);
            var exSelect_Label_bet_1 = find("Node_root/Label_bet_1", this.Node_exSelect).getComponent(Label);
            exSelect_Label_bet_1.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 8, 2);
            var exAni = this.Node_ex.getChildByName("EX").getComponent(sp.Skeleton);
            exAni.setAnimation(0, "animation1", false);
            exAni.addAnimation(0, "animation2", true);
            var EXTemp = this.Node_ex.getChildByName("EX");
            var newExtemp = instantiate(EXTemp);
            newExtemp.active = true;
            this.Node_ex.addChild(newExtemp);
            var toPos = this.Node_symbolList.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            toPos = this.Node_ex.getComponent(UITransform).convertToNodeSpaceAR(toPos);
            tween(newExtemp).to(0.25, {
              position: toPos
            }).call(function () {
              _this8.Node_exSelect.active = true;
              var exSelectAni = _this8.Node_exSelect.getComponent(sp.Skeleton);
              exSelectAni.clearAnimation(1);
              exSelectAni.setAnimation(0, "animation1", false);
              exSelectAni.addAnimation(0, "animation2", true);
            }).destroySelf().start();
          } else {
            this.changeExModel(false);
            slotLuckyGems500Model.instance.exSelectRate = 1;
            var _exAni = this.Node_ex.getChildByName("EX").getComponent(sp.Skeleton);
            _exAni.setAnimation(0, "animation3", false);
            _exAni.addAnimation(0, "animation4", true);
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this9 = this;
          switch (event.target.name) {
            case "Toggle_ex":
              {
                slotLuckyGems500Model.instance.useExp = !slotLuckyGems500Model.instance.useExp;
                this.showEx(slotLuckyGems500Model.instance.useExp);
                if (!slotLuckyGems500Model.instance.useExp) {
                  var children = this.Node_effectRoot.children;
                  for (var i = children.length - 1; i >= 0; i--) {
                    var nodeChild = children[i];
                    if (nodeChild.name != "Node_symbol") {
                      nodeChild.destroyFromParent();
                    }
                  }
                  this.Node_symbolMask.active = false;
                  this.unschedule(this.showResultEffect);
                  this.hideLine();
                  this.updateBaseBet();
                }
                break;
              }
            case "Button_ex":
              {
                if (slotLuckyGems500Model.instance.isAuto || slotLuckyGems500Model.instance.gameStatus != eRunStatus.NONE) {
                  return;
                }
                var exAni = this.Node_ex.getChildByName("EX").getComponent(sp.Skeleton);
                if (!slotLuckyGems500Model.instance.useExp) {
                  exAni.setAnimation(0, "animation5", false);
                  exAni.addAnimation(0, "animation4", true);
                } else {
                  exAni.setAnimation(0, "animation3", false);
                  exAni.addAnimation(0, "animation2", true);
                }
                if (this.Node_exBoard.position.x < -100) {
                  tween(this.Node_exBoard).to(0.25, {
                    position: v3(0, 0, 0)
                  }).call(function () {
                    var board_button_Tip = _this9.Node_ex.getChildByName("board_button_Tip");
                    board_button_Tip.active = true;
                  }).start();
                } else {
                  var board_button_Tip = this.Node_ex.getChildByName("board_button_Tip");
                  board_button_Tip.active = false;
                  tween(this.Node_exBoard).to(0.25, {
                    position: v3(-260, 0, 0)
                  }).start();
                }
                break;
              }

            //返回
            case "Button_menu":
            case "Node_menu_mask":
            case "Button_closeMenu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Toggle_music":
              {
                AudioManager.instance.setMusicStatus(!AudioManager.instance._soundMusic);
                break;
              }
            case "Toggle_sound":
              {
                AudioManager.instance.setSoundStatus(!AudioManager.instance._soundEffect);
                break;
              }
            case "Button_fastState":
              {
                slotLuckyGems500Model.instance.quickState = (slotLuckyGems500Model.instance.quickState + 1) % 3;
                this.Button_fastState.setState(slotLuckyGems500Model.instance.quickState);
                var lightEffect = this.Button_fastState.node.getChildByName("lightEffect").getComponent(sp.Skeleton);
                lightEffect.node.active = true;
                lightEffect.setAnimation(0, "idle", false);
                lightEffect.setCompleteListener(function () {
                  lightEffect.setCompleteListener(null);
                  lightEffect.node.active = false;
                });
                break;
              }
            case "Button_return":
              {
                // slotLuckyGems500Ctrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", slotLuckyGems500Utils.instance.bundle, function () {}, function (help) {
                  var newNode = instantiate(help);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);

                // GUtil.openRecord("slotLuckyGems500");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotLuckyGems500");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", slotLuckyGems500Utils.instance.bundle, function () {}, function (help) {
                  var newNode = instantiate(help);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                this.Node_menu.active = false;
                break;
              }
            case "Button_auto":
              {
                if (slotLuckyGems500Model.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                Common.loadPopBuddle("prefab/Node_setAuto", slotLuckyGems500Utils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                  _this9.doScale_haiGuai(0.9);
                }, true);
                break;
              }
            case "Button_exSelect_add":
            case "Button_add":
              {
                if (slotLuckyGems500Model.instance.gameState > eRunStatus.NONE) {
                  return;
                }
                slotLuckyGems500Model.instance.curBet = slotLuckyGems500Utils.instance.getAddBet();
                this.Button_add.interactable = true;
                this.Button_redus.interactable = true;
                this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                this.setBaseBet();
                if (this.Node_exSelect.active) {
                  var exSelect_Label_bet = find("Node_root/Label_bet", this.Node_exSelect).getComponent(Label);
                  exSelect_Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet, 2);
                  var exSelect_Label_bet_0 = find("Node_root/Label_bet_0", this.Node_exSelect).getComponent(Label);
                  exSelect_Label_bet_0.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 1.5, 2);
                  var exSelect_Label_bet_1 = find("Node_root/Label_bet_1", this.Node_exSelect).getComponent(Label);
                  exSelect_Label_bet_1.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 8, 2);
                }
                break;
              }
            case "Button_exSelect_redus":
            case "Button_redus":
              {
                if (slotLuckyGems500Model.instance.gameState > eRunStatus.NONE) {
                  return;
                }
                slotLuckyGems500Model.instance.curBet = slotLuckyGems500Utils.instance.getRedusBet();
                this.Button_add.interactable = true;
                this.Button_redus.interactable = true;
                this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                this.setBaseBet();
                if (this.Node_exSelect.active) {
                  var _exSelect_Label_bet = find("Node_root/Label_bet", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet, 2);
                  var _exSelect_Label_bet_ = find("Node_root/Label_bet_0", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet_.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 1.5, 2);
                  var _exSelect_Label_bet_2 = find("Node_root/Label_bet_1", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet_2.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 8, 2);
                }
                break;
              }
            case "Button_exSelect_0":
              {
                if (slotLuckyGems500Model.instance.exSelectRate != 1.5) {
                  var Node_exSelectAni = this.Node_exSelect.getComponent(sp.Skeleton);
                  Node_exSelectAni.setAnimation(0, "animation2_1_1", false);
                  Node_exSelectAni.addAnimation(0, "animation2_1_2", true);
                  slotLuckyGems500Model.instance.exSelectRate = 1.5;
                } else {
                  slotLuckyGems500Model.instance.exSelectRate = 1;
                  var _Node_exSelectAni = this.Node_exSelect.getComponent(sp.Skeleton);
                  // Node_exSelectAni.clearAnimation(1);
                  _Node_exSelectAni.setAnimation(0, "animation2", true);
                }
                this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                break;
              }
            case "Button_exSelect_1":
              {
                if (slotLuckyGems500Model.instance.exSelectRate != 8) {
                  var _Node_exSelectAni2 = this.Node_exSelect.getComponent(sp.Skeleton);
                  _Node_exSelectAni2.setAnimation(0, "animation2_2_1", false);
                  _Node_exSelectAni2.addAnimation(0, "animation2_2_2", true);
                  slotLuckyGems500Model.instance.exSelectRate = 8;
                } else {
                  slotLuckyGems500Model.instance.exSelectRate = 1;
                  var _Node_exSelectAni3 = this.Node_exSelect.getComponent(sp.Skeleton);
                  // Node_exSelectAni.clearAnimation(1);
                  _Node_exSelectAni3.setAnimation(0, "animation2", true);
                }
                this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                break;
              }
            case "Button_exSelect_close":
              {
                var _Node_exSelectAni4 = this.Node_exSelect.getComponent(sp.Skeleton);
                _Node_exSelectAni4.clearAnimation(1);
                this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                slotLuckyGems500Utils.instance.setBaseBet(slotLuckyGems500Model.instance.curBet);
                this.setBaseBet();
                if (this.Node_exSelect.active) {
                  var _exSelect_Label_bet2 = find("Node_root/Label_bet", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet2.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                  var _exSelect_Label_bet_3 = find("Node_root/Label_bet_0", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet_3.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 1.5, 2);
                  var _exSelect_Label_bet_4 = find("Node_root/Label_bet_1", this.Node_exSelect).getComponent(Label);
                  _exSelect_Label_bet_4.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * 8, 2);
                }
                this.Node_exSelect.active = false;
                this.Toggle_ex.isChecked = false;
                var _exAni2 = this.Node_ex.getChildByName("EX").getComponent(sp.Skeleton);
                _exAni2.setAnimation(0, "animation3", false);
                _exAni2.addAnimation(0, "animation4", true);
                slotLuckyGems500Model.instance.useExp = false;
                slotLuckyGems500Model.instance.exSelectRate = 1.0;
                break;
              }
            case "Button_exSelect_ok":
              {
                if (slotLuckyGems500Model.instance.exSelectRate == 1) {
                  break;
                }
                var _board_button_Tip = this.Node_ex.getChildByName("board_button_Tip");
                _board_button_Tip.active = false;
                tween(this.Node_exBoard).delay(1).to(0.25, {
                  position: v3(-260, 0, 0)
                }).start();
                var _children = this.Node_effectRoot.children;
                for (var _i2 = _children.length - 1; _i2 >= 0; _i2--) {
                  var _nodeChild = _children[_i2];
                  if (_nodeChild.name != "Node_symbol") {
                    _nodeChild.destroyFromParent();
                  }
                }
                this.Node_exSelect.active = false;
                this.Node_symbolMask.active = false;
                this.unschedule(this.showResultEffect);
                this.hideLine();
                this.changeExModel(true);
                this.updateBaseBet();
                break;
              }
            case "Button_stop":
              {
                slotLuckyGems500Model.instance.isAuto = false;
                this.Button_stop.node.active = false;
                var muBtn_run = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                muBtn_run.setState(0);
                break;
              }
            case "Button_run":
              {
                if (slotLuckyGems500Ctrl.instance.isReqBet || slotLuckyGems500Model.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                this.Button_run.interactable = false;
                var _muBtn_run = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                _muBtn_run.setState(2);
                if (slotLuckyGems500Model.instance.gameStatus == eRunStatus.NONE) {
                  tween(event.target).delay(2).call(function () {
                    if (!slotLuckyGems500Model.instance.isAuto && slotLuckyGems500Model.instance.gameStatus == eRunStatus.NONE) {
                      _this9.Button_run.interactable = true;
                      var _muBtn_run2 = _this9.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                      _muBtn_run2.setState(0);
                    }
                  }).start();
                  slotLuckyGems500Ctrl.instance.reqBet();
                }
                break;
              }
            // case "Button_startFree": {
            //   this.closeFreeEnter();
            // }
            // case "Button_exitFree": {
            //   this.closeFreeEnd();
            // }
          }
        };

        _proto.onSetAuto = function onSetAuto(strCode) {
          if (strCode == "cancel" && slotLuckyGems500Model.instance.isAuto) {
            slotLuckyGems500Model.instance.isAuto = false;

            // this.Button_run.node.active = true;
            this.Button_stop.node.active = false;
            this.Button_run.interactable = true;
            this.Button_auto.interactable = true;
            this.Toggle_ex.interactable = true;
            var _muBtn_run3 = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
            _muBtn_run3.setState(0);
            this.Button_add.interactable = true;
            this.Button_redus.interactable = true;
            return;
          }
          this.doScale_haiGuai(1.0);
          if (strCode == "close") {
            return;
          }
          slotLuckyGems500Model.instance.isAuto = true;
          this.Button_run.interactable = false;
          this.Button_stop.node.active = true;
          var muBtn_run = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
          muBtn_run.setState(1);

          // this.Button_auto.interactable = false;
          // this.Button_add.interactable = false;
          // this.Button_redus.interactable = false;

          this.Label_autoTimes.string = slotLuckyGems500Model.instance.autoTimes > 10000 ? "∞" : "" + slotLuckyGems500Model.instance.autoTimes;
          this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
          this.Button_fastState.setState(slotLuckyGems500Model.instance.quickState);
          if (slotLuckyGems500Model.instance.gameStatus == eRunStatus.NONE) {
            if (!slotLuckyGems500Ctrl.instance.reqBet()) {
              slotLuckyGems500Model.instance.isAuto = false;

              // this.Button_run.node.active = true;
              this.Toggle_ex.interactable = true;
              this.Button_stop.node.active = false;
              this.Button_run.interactable = true;
              this.Button_auto.interactable = true;
              var _muBtn_run4 = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
              _muBtn_run4.setState(0);
              this.Button_add.interactable = true;
              this.Button_redus.interactable = true;
            }
          }
        };
        _proto.onCollectCoin = function onCollectCoin(startPos) {
          // let toPos = this.haiguai_box.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          // toPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          // for (let i = 0; i < 3; i++) {
          //   let newGold = instantiate(this.Prefab_gold);
          //   newGold.position = startPos;
          //   this.Node_effectRoot.addChild(newGold);
          //   tween(newGold)
          //     .to(0.2 + 0.2 * i, { position: toPos })
          //     // .call(() => {
          //     //     this.haiguai_bx_goldshouji.node.active = true;
          //     //     this.haiguai_bx_goldshouji.setAnimation(0, `idle`, false);
          //     // })
          //     .destroySelf()
          //     .start();
          // }
          // slotLuckyGems500Utils.instance.playSound(slotLuckyGems500Def.eSound.wild_collect);
          // if (!this.haiguai_bx_goldshouji.node.active) {
          //   this.scheduleOnce(() => {
          //     this.haiguai_bx_goldshouji.node.active = true;
          //     this.haiguai_bx_goldshouji.setAnimation(0, `idle`, false);
          //     this.haiguai_bx_goldshouji.setCompleteListener(() => {
          //       this.haiguai_bx_goldshouji.setCompleteListener(null);
          //       this.haiguai_bx_goldshouji.node.active = false;
          //     });
          //     if (slotLuckyGems500Model.instance.betResult.nextState == slotLuckyGems500Def.eGameStateType.jackpotState) {
          //       slotLuckyGems500Model.instance.betResult.boxState = 2;
          //     }
          //     /////
          //     let lv_0 = slotLuckyGems500Model.instance.boxState + 1;
          //     let lv_1 = slotLuckyGems500Model.instance.betResult.boxState + 1;
          //     slotLuckyGems500Model.instance.boxState = slotLuckyGems500Model.instance.betResult.boxState;
          //     this.haiguai_box.setAnimation(0, `lv${lv_0}_got`, false);
          //     this.haiguai_box.setCompleteListener(() => {
          //       this.haiguai_box.setCompleteListener(null);
          //       let isJackpot =
          //         slotLuckyGems500Model.instance.betResult.nextState == slotLuckyGems500Def.eGameStateType.jackpotState;
          //       if (lv_1 != lv_0) {
          //         this.haiguai_box.setAnimation(0, `lv${lv_0}tolv${lv_1}`, false);
          //         this.haiguai_box.addAnimation(0, `lv${lv_1}_idle`, !isJackpot);
          //       } else {
          //         this.haiguai_box.setAnimation(0, `lv${lv_1}_idle`, !isJackpot);
          //       }
          //       if (isJackpot) {
          //         this.haiguai_box.addAnimation(0, `lv${lv_1}_qie`, true);
          //       }
          //     });
          //   }, 0.2);
          // }
          // // this.scheduleOnce(() => {
          // //     let lv_0 = slotLuckyGems500Model.instance.boxState + 1;
          // //     let lv_1 = slotLuckyGems500Model.instance.betResult.boxState + 1;
          // //     slotLuckyGems500Model.instance.boxState = slotLuckyGems500Model.instance.betResult.boxState;
          // //     if (this.haiguai_box.animation.indexOf("_idle") != -1) {
          // //         this.haiguai_box.setAnimation(0, `lv${lv_0}_got`, false);
          // //         this.haiguai_box.setCompleteListener(() => {
          // //             this.haiguai_box.setCompleteListener(null);
          // //             if (lv_1 != lv_0) {
          // //                 this.haiguai_box.setAnimation(0, `lv${lv_0}tolv${lv_1}`, false);
          // //                 this.haiguai_box.addAnimation(0, `lv${lv_1}_idle`, true);
          // //             } else {
          // //                 this.haiguai_box.setAnimation(0, `lv${lv_1}_idle`, true);
          // //             }
          // //         });
          // //     }
          // // }, 0.2);
        };
        _proto.onSetMask = function onSetMask(iCol, posX) {
          if (slotLuckyGems500Model.instance.gameStatus > eRunStatus.STOP) {
            return;
          }
          if (iCol > 0) {
            if (slotLuckyGems500Model.instance.specialSymbol == eSymbol.Scatter) {
              if (!this.Node_colEffect.active) {
                slotLuckyGems500Utils.instance.playSound(eSound.ChangeWin);
                this.Node_colEffect.active = true;
                this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
                tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();
                this.Node_symbolList.getComponent(UITransform).height = 345;
              }
              slotLuckyGems500Model.instance.curSpecialStartCol = iCol;
              if (slotLuckyGems500Model.instance.curSpecialStartCol < this.slotLuckyGems500_symbolList.length) {
                slotLuckyGems500Utils.instance.stopSound(eSound.ChangeWin);
                this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 10 * slotLuckyGems500Model.instance.curSpecialStartCol;
                this.Node_colEffect.setPosition(this.slotLuckyGems500_symbolList[slotLuckyGems500Model.instance.curSpecialStartCol].node.getPosition().x, this.Node_colEffect.position.y);
              }
            }
          }
        };
        _proto.hideLine = function hideLine() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_line.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            childNode.active = false;
          }
        };
        _proto.showLine = function showLine(prizeIdx) {
          var lineIndex = slotLuckyGems500Utils.instance.getLine(prizeIdx);
          if (lineIndex) {
            // gts.Debug.LogWarr("==showLine=lineIndex=" + lineIndex);
            var lineName = "line_" + (lineIndex - 1);
            var nodeLine_ = this.Node_line.getChildByName(lineName);
            nodeLine_.active = true;
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this10 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            if (this.Node_symbolMask.active) {
              tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).call(function () {
                _this10.Node_symbolMask.active = false;
              }).start();
            }
            return;
          }
          //        //mask show
          if (!this.Node_symbolMask.active) {
            this.Node_symbolMask.active = true;
            this.Node_symbolMask.getComponent(UITransform).width = 465;
            this.Node_symbolMask.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, {
              opacity: 150
            }).start();
          }
        };
        //[false,false,false];
        _proto.setBtnState_run = function setBtnState_run(enable) {
          if (enable && this.arrEnableBack) {
            this.Button_auto.interactable = this.arrEnableBack[0];
            this.Button_add.interactable = this.arrEnableBack[1];
            this.Button_redus.interactable = this.arrEnableBack[2];
            this.arrEnableBack = null;
          } else if (!enable && !this.arrEnableBack) {
            this.arrEnableBack = [this.Button_auto.interactable, this.Button_add.interactable, this.Button_redus.interactable];
            this.Button_auto.interactable = false;
            this.Button_add.interactable = false;
            this.Button_redus.interactable = false;
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this11 = this;
          if (slotLuckyGems500Model.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          if (slotLuckyGems500Model.instance.isAuto) {
            slotLuckyGems500Utils.instance.playOneShot(eSound.Spin);
          }
          this.showNudge(false);
          this.Toggle_ex.interactable = false;
          gts.Debug.Log("======doStartRun=======");
          slotLuckyGems500Utils.instance.getResult();
          this.unschedule(this.showResultEffect);
          this.showMask(false);
          this.hideLine();
          this.setBtnState_run(false);
          this.Node_win.active = false;
          slotLuckyGems500Model.instance.scatterCounts = 0;
          this.Node_symbolList.getComponent(UITransform).height = 345;
          if (slotLuckyGems500Model.instance.freeStatus != eRunStatus.NONE) {
            this.Label_win.node.active = true;
          } else {
            if (slotLuckyGems500Model.instance.autoTimes <= 500) {
              slotLuckyGems500Model.instance.autoTimes--;
              this.Label_autoTimes.string = "" + slotLuckyGems500Model.instance.autoTimes;
            }
            slotLuckyGems500Model.instance.curTotalWin = 0;
            Tween.stopAllByTarget(this.Label_win.node);
            Tween.stopAllByTarget(this.Label_win.node.getComponent(UIOpacity));
            this.Label_win.string = "";
          }
          this.Button_run.interactable = false;
          var muBtn_run = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
          muBtn_run.setState(2);
          var children = this.Node_effectRoot.children;
          for (var i = children.length - 1; i >= 0; i--) {
            var nodeChild = children[i];
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, _i3, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (_i3 = 0; _i3 < _this11.slotLuckyGems500_symbolList.length; _i3++) {
                    startDelay = slotLuckyGems500Model.instance.quickState > 0 ? _i3 * eConstDef.cQuickStopStartDelay : _i3 * eConstDef.cStartDelay / 5;
                    stopDelay = slotLuckyGems500Model.instance.quickState > 0 ? eConstDef.cQuickStopDelay - (slotLuckyGems500Model.instance.quickState - 1) * 0.5 : eConstDef.cStopDelay + _i3 * eConstDef.cStartDelay;
                    stopDelay += slotLuckyGems500Model.instance.specialStartCol > 0 && _i3 >= slotLuckyGems500Model.instance.specialStartCol ? eConstDef.cSpecialDuration * (_i3 - slotLuckyGems500Model.instance.specialStartCol + 1) : 0;
                    arrPro.push(_this11.slotLuckyGems500_symbolList[_i3].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _context.next = 6;
                  return _this11.doAwait(0.2);
                case 6:
                  if (slotLuckyGems500Model.instance.specialStartCol > 0) ;
                  _this11.scheduleOnce(_this11.doRunEnd, 0);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          slotLuckyGems500Model.instance.gameStatus = eRunStatus.RUNNING;

          // if (slotLuckyGems500Model.instance.freeStatus == slotLuckyGems500Def.eRunStatus.RUNNING) {
          //     this.Label_freeSpine.string = `${slotLuckyGems500Model.instance.remainingCount}`;
          // }
        };

        _proto.showResultEffect = function showResultEffect() {
          var _this12 = this;
          this.hideLine();
          var doResultEffect = function doResultEffect(indexList, isAll) {
            if (isAll === void 0) {
              isAll = false;
            }
            _this12.showLine(indexList);
            if (indexList.length == 3) {
              if (!isAll) {
                for (var i = 0; i < 3; i++) {
                  _this12.slotLuckyGems500_symbolList[i].doHideResultEffect();
                }
              }
              for (var _i4 = 0; _i4 < 3; _i4++) {
                var prizeIdx = indexList[_i4];
                var iRow = Math.floor(prizeIdx / eConstDef.CMaxRow);
                var iCol = prizeIdx % eConstDef.CMaxRow;
                _this12.slotLuckyGems500_symbolList[iCol].doShowResultEffect(iRow);
              }
            }
          };
          this.showIndex++;
          var prizeInfo = slotLuckyGems500Model.instance.betResult.prizeIdx;
          if (this.showIndex == prizeInfo.length) {
            this.showIndex = -1;
            for (var _iterator2 = _createForOfIteratorHelperLoose(prizeInfo), _step2; !(_step2 = _iterator2()).done;) {
              var indexList = _step2.value;
              doResultEffect(indexList, true);
            }
          } else {
            var _indexList = prizeInfo[this.showIndex];
            if (_indexList) {
              doResultEffect(_indexList, false);
              // slotLuckyGems500Utils.instance.playSound(slotLuckyGems500Def.eSound.prizeWinHighlight);
            }
          }
        };

        _proto.showMulRateEffect = function showMulRateEffect() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            var result = slotLuckyGems500Model.instance.betResult;
            if (result.openResult.multiples[1] > 1) {
              //
              var symbolItem = _this13.slotLuckyGems500_symbolList[3]._symbolList[1];
              var nodeTemp = symbolItem.Node_symbol;
              var newNode = instantiate(nodeTemp);
              var wPos = nodeTemp.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              wPos = _this13.node.getComponent(UITransform).convertToNodeSpaceAR(wPos);
              _this13.node.addChild(newNode);
              newNode.position = wPos;
              slotLuckyGems500Utils.instance.playOneShot(eSound.Fly);
              var toPos = _this13.Node_win.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              toPos = _this13.node.getComponent(UITransform).convertToNodeSpaceAR(toPos);
              _this13.scheduleOnce(function () {
                var nodeAni = newNode.getComponent(sp.Skeleton);
                var strAni = slotLuckyGems500Utils.instance.getSkeletonAni(symbolItem.itemInfo.Sym);
                nodeAni.setAnimation(0, strAni, true);
                nodeAni.setAnimation(1, "animation", true);
              });
              tween(newNode).delay(0.3).to(0.4, {
                position: toPos
              }, {
                easing: "cubicOut"
              }).call(function () {
                slotLuckyGems500Utils.instance.playOneShot(eSound.Double);
                var win_light = _this13.Node_win.getChildByName("win_light");
                win_light.active = true;
                var win_lightAni = win_light.getComponent(sp.Skeleton);
                win_lightAni.setAnimation(0, "idle", false);
                win_lightAni.setCompleteListener(function () {
                  win_lightAni.setCompleteListener(null);
                  win_light.active = false;
                });
                var Label_win = _this13.Node_win.getChildByName("Label_win").getComponent(Label);
                Label_win.string = Common.ChangeMoneyShowFloat(result.prizeAmount, 2);
                _this13.scheduleOnce(function () {
                  resolve();
                }, 0.5);
              }).destroySelf().start();
            } else {
              resolve();
            }
          });
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this14 = this;
            var result, totalWin, delayStart, rate, arrPro, i, _iterator3, _step3, indexList, score_light, Label_win, _Label_win, newLabel_win, startPos, muBtn_run, _muBtn_run6;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  slotLuckyGems500Model.instance.gameStatus = eRunStatus.CLEAR;
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this14.Node_colEffect.active = false;
                    }).start();
                  }
                  // if (this.Node_colEffect_pearl.active) {
                  //   tween(this.Node_colEffect_pearl.getComponent(UIOpacity))
                  //     .to(0.2, { opacity: 0 })
                  //     .call(() => {
                  //       this.Node_colEffect_pearl.active = false;
                  //     })
                  //     .start();
                  // }
                  if (this.Node_symbolMask.active) {
                    tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this14.Node_symbolMask.active = false;
                    }).start();
                  }
                  result = slotLuckyGems500Model.instance.betResult; // if (
                  //   slotLuckyGems500Model.instance.freeStatus == slotLuckyGems500Def.eRunStatus.NONE &&
                  //   slotLuckyGems500Model.instance.specialStartCol > 0
                  // ) {
                  //   if (slotLuckyGems500Model.instance.betResult.freeInfo.remainingCount > 0) {
                  //     slotLuckyGems500Model.instance.curSpecialStartCol = -1;
                  //     // slotLuckyGems500Utils.instance.playSound(slotLuckyGems500Def.eSound.Fg_symbol_bell);
                  //     // for (let i = 0; i < this.slotLuckyGems500_symbolList.length; i++) {
                  //     //     this.slotLuckyGems500_symbolList[i].doScatterBlink();
                  //     // }
                  //   } else {
                  //     if (slotLuckyGems500Model.instance.specialSymbol == slotLuckyGems500Def.eSymbol.Scatter) {
                  //       for (let i = 0; i < this.slotLuckyGems500_symbolList.length; i++) {
                  //         this.slotLuckyGems500_symbolList[i].stopScatterBlink();
                  //       }
                  //     }
                  //   }
                  // }
                  this.Node_symbolList.getComponent(UITransform).height = 400;
                  totalWin = 0;
                  delayStart = 0.25;
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 87;
                    break;
                  }
                  rate = result.prizeAmount / (slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate);
                  this.showMask();

                  //doEffect
                  arrPro = [];
                  for (i = 0; i < this.slotLuckyGems500_symbolList.length; i++) {
                    arrPro.push(this.slotLuckyGems500_symbolList[i].doEffect());
                  }
                  _context2.next = 15;
                  return Promise.all(arrPro);
                case 15:
                  if (result.prizeIdx.length > 0) {
                    this.showIndex = -1;
                    this.schedule(this.showResultEffect, 3.0, macro.REPEAT_FOREVER, 3.0);
                    for (_iterator3 = _createForOfIteratorHelperLoose(result.prizeIdx); !(_step3 = _iterator3()).done;) {
                      indexList = _step3.value;
                      this.showLine(indexList);
                    }
                  }
                  this.Node_win.active = true;
                  this.Node_win.getComponent(UIOpacity).opacity = 255;
                  score_light = this.Node_win.getChildByName("score_light").getComponent(sp.Skeleton);
                  Label_win = this.Node_win.getChildByName("Label_win").getComponent(Label);
                  score_light.setAnimation(0, "animation1", false);
                  score_light.addAnimation(0, "animation2", true);
                  Label_win.string = "";
                  slotLuckyGems500Utils.instance.updateLabelAddNf(Label_win, result.prizeAmount / slotLuckyGems500Model.instance.odds, 2);
                  _context2.next = 26;
                  return this.doAwait(1.5);
                case 26:
                  _context2.next = 28;
                  return this.showMulRateEffect();
                case 28:
                  if (!slotLuckyGems500Model.instance.isNudge) {
                    _context2.next = 46;
                    break;
                  }
                  _context2.next = 31;
                  return this.doAwait(0.5);
                case 31:
                  _context2.next = 33;
                  return this.showNudge();
                case 33:
                  _context2.next = 35;
                  return this.doAwait(0.25);
                case 35:
                  _context2.next = 37;
                  return this.doNudgeRunStart();
                case 37:
                  _context2.next = 39;
                  return this.doAwait(0.25);
                case 39:
                  _context2.next = 41;
                  return this.doNudgeRunEnd();
                case 41:
                  _context2.next = 43;
                  return this.doAwait(0.25);
                case 43:
                  slotLuckyGems500Model.instance.isNudge = false;
                  _context2.next = 47;
                  break;
                case 46:
                  tween(this.Node_win.getComponent(UIOpacity)).delay(0.5).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    _this14.Node_win.active = false;
                  }).start();
                case 47:
                  if (slotLuckyGems500Model.instance.freeStatus != eRunStatus.NONE) {
                    // slotLuckyGems500Model.instance.totalFreeWin += result.prizeAmount;
                    totalWin = slotLuckyGems500Model.instance.totalFreeWin;
                  } else {
                    totalWin = result.prizeAmount;
                  }
                  delayStart = 1.5;

                  // await this.doAwait(1.0);
                  if (!(rate > 2 && rate < 6)) {
                    _context2.next = 71;
                    break;
                  }
                  slotLuckyGems500Utils.instance.playSound(eSound.win2);
                  this.Node_niceWin.active = true;
                  this.Node_niceWin.getComponent(UIOpacity).opacity = 0;
                  tween(this.Node_niceWin.getComponent(UIOpacity)).to(0.25, {
                    opacity: 255
                  }).start();
                  _Label_win = this.Node_niceWin.getChildByName("Label_win").getComponent(Label);
                  _Label_win.node.position = v3(0, 195, 0);
                  _Label_win.string = "";
                  slotLuckyGems500Utils.instance.updateLabelAddNf(_Label_win, result.prizeAmount, 2);
                  _context2.next = 60;
                  return this.doAwait(1.75);
                case 60:
                  slotLuckyGems500Utils.instance.stopSound(eSound.win2);
                  slotLuckyGems500Utils.instance.playOneShot(eSound.win2end);
                  tween(this.Node_niceWin.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    _this14.Node_niceWin.active = false;
                  }).start();
                  newLabel_win = instantiate(_Label_win.node);
                  this.Label_win.node.parent.addChild(newLabel_win);
                  startPos = _Label_win.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = this.Label_win.node.parent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newLabel_win.position = startPos;
                  tween(newLabel_win).to(0.3, {
                    position: this.Label_win.node.position
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    slotLuckyGems500Utils.instance.updateLabel(_this14.Label_win, Common.ChangeMoneyShowFloat(result.prizeAmount, 2));
                  }).destroySelf().start();
                  _context2.next = 87;
                  break;
                case 71:
                  if (!(rate >= 6)) {
                    _context2.next = 82;
                    break;
                  }
                  _context2.next = 74;
                  return this.doAwait(1.0);
                case 74:
                  //大奖
                  this.Node_bigWin.active = true;
                  _context2.next = 77;
                  return this.Node_bigWin.getComponent(slotLuckyGems500_bigWin).showBigWin(slotLuckyGems500Model.instance.betResult.prizeAmount, 0.25);
                case 77:
                  this.Node_bigWin.active = false;
                  this.Label_win.string = totalWin > 0 ? Common.ChangeMoneyShowFloat(totalWin, 2) : "";
                  if (this.Node_win.active) {
                    tween(this.Node_win.getComponent(UIOpacity)).delay(0.5).to(0.25, {
                      opacity: 0
                    }).call(function () {
                      _this14.Node_win.active = false;
                    }).start();
                  }
                  _context2.next = 87;
                  break;
                case 82:
                  slotLuckyGems500Utils.instance.playOneShot(eSound.win1);
                  //gengxin
                  slotLuckyGems500Utils.instance.updateLabelAddNf(this.Label_win, totalWin, 1, totalWin - result.prizeAmount);
                  _context2.next = 86;
                  return this.doAwait(1.5);
                case 86:
                  slotLuckyGems500Utils.instance.playOneShot(eSound.win1end);
                // await this.doAwait(1.5);
                case 87:
                  if (slotLuckyGems500Model.instance.endBalance > 0) {
                    slotLuckyGems500Model.instance.curBalance = slotLuckyGems500Model.instance.endBalance;
                    slotLuckyGems500Model.instance.endBalance = 0;
                    this.updateGold();
                  }

                  // if (slotLuckyGems500Model.instance.freeStatus != slotLuckyGems500Def.eRunStatus.NONE) {
                  //   this.Label_freeTimes.string = `${slotLuckyGems500Model.instance.betResult.freeInfo.remainingCount}/${slotLuckyGems500Model.instance.betResult.freeInfo.totalCount}`;
                  //   let addFreeTimes =
                  //     slotLuckyGems500Model.instance.betResult.freeInfo.totalCount - slotLuckyGems500Model.instance.totalCount;
                  //   if (addFreeTimes > 5) {
                  //     await this.showFreeAddTimes(addFreeTimes);
                  //   }
                  //   slotLuckyGems500Model.instance.remainingCount = slotLuckyGems500Model.instance.betResult.freeInfo.remainingCount;
                  //   slotLuckyGems500Model.instance.totalCount = slotLuckyGems500Model.instance.betResult.freeInfo.totalCount;
                  // }

                  if (slotLuckyGems500Model.instance.isAuto && slotLuckyGems500Model.instance.autoTimes == 0) {
                    slotLuckyGems500Model.instance.isAuto = false;
                    this.Toggle_ex.interactable = true;
                    // this.Button_run.node.active = true;
                    this.Button_stop.node.active = false;
                    this.Button_run.interactable = true;
                    this.Button_auto.interactable = true;
                    muBtn_run = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                    muBtn_run.setState(0);
                    this.Button_add.interactable = true;
                    this.Button_redus.interactable = true;
                  }

                  //free and auto
                  if (!(slotLuckyGems500Model.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 102;
                    break;
                  }
                  slotLuckyGems500Model.instance.gameStatus = eRunStatus.NONE;
                  this.Node_bigWin.active = false;
                  if (!(slotLuckyGems500Model.instance.remainingCount > 0)) {
                    _context2.next = 96;
                    break;
                  }
                  this.scheduleOnce(function () {
                    slotLuckyGems500Ctrl.instance.reqBet();
                  }, delayStart);
                  _context2.next = 100;
                  break;
                case 96:
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 99;
                    break;
                  }
                  _context2.next = 99;
                  return this.doAwait(2.5);
                case 99:
                  slotLuckyGems500Model.instance.freeStatus = eRunStatus.END;
                // this.doEndFree();
                case 100:
                  _context2.next = 112;
                  break;
                case 102:
                  if (!(slotLuckyGems500Model.instance.remainingCount > 0)) {
                    _context2.next = 111;
                    break;
                  }
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 106;
                    break;
                  }
                  _context2.next = 106;
                  return this.doAwait(2.0);
                case 106:
                  slotLuckyGems500Model.instance.specialStartCol = 0;
                  slotLuckyGems500Model.instance.curSpecialStartCol = -1;

                  // let arrPro = [];
                  // for (let i = 0; i < this.slotLuckyGems500_symbolList.length; i++) {
                  //   arrPro.push(this.slotLuckyGems500_symbolList[i].doScatterBlink());
                  // }
                  // await Promise.all(arrPro);

                  slotLuckyGems500Model.instance.gameStatus = eRunStatus.NONE;
                  _context2.next = 112;
                  break;
                case 111:
                  if (slotLuckyGems500Model.instance.isAuto) {
                    slotLuckyGems500Model.instance.gameStatus = eRunStatus.NONE;
                    this.scheduleOnce(function () {
                      if (!slotLuckyGems500Ctrl.instance.reqBet()) {
                        slotLuckyGems500Model.instance.isAuto = !slotLuckyGems500Model.instance.isAuto;
                        _this14.Button_run.interactable = !slotLuckyGems500Model.instance.isAuto;
                        var _muBtn_run5 = _this14.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                        _muBtn_run5.setState(_this14.Button_run.interactable ? 0 : 2);
                      }
                    }, delayStart);
                  } else {
                    slotLuckyGems500Model.instance.gameStatus = eRunStatus.NONE;
                    this.Toggle_ex.interactable = true;
                    this.Button_run.interactable = true;
                    _muBtn_run6 = this.Button_run.node.getComponent(slotLuckyGems500_mutBtn);
                    _muBtn_run6.setState(0);
                    this.setBtnState_run(true);
                  }
                case 112:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.doAwait = function doAwait(delay) {
          var _this15 = this;
          return new Promise(function (resolve, reject) {
            _this15.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        }

        ////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(slotLuckyGems500Model.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            slotLuckyGems500Utils.instance.updateLabel(this.Label_gold, strGold);
          }
        }

        //    //net update
        ;

        _proto.updateView = /*#__PURE__*/
        function () {
          var _updateView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event, data) {
            var i;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = event;
                  _context3.next = _context3.t0 === eProto.HD_BetList ? 3 : _context3.t0 === eProto.HD_Bet ? 14 : _context3.t0 === ConfigManager.instance.protocolHall.getWallet ? 19 : _context3.t0 === ConfigManager.instance.protocolHall.pushWallet ? 19 : _context3.t0 === ConfigManager.instance.protocolHall.login ? 21 : 26;
                  break;
                case 3:
                  Common.closeWait();
                  this.Node_clickMask_down.active = false;
                  for (i = 0; i < this.slotLuckyGems500_symbolList.length; i++) {
                    this.slotLuckyGems500_symbolList[i].init();
                  }
                  _context3.next = 8;
                  return this.doAwait(0.3);
                case 8:
                  this.updateGold();
                  slotLuckyGems500Model.instance.curBet = cMinBase;
                  slotLuckyGems500Utils.instance.setBaseBet(slotLuckyGems500Model.instance.curBet);
                  this.setBaseBet();
                  this.Label_bet.string = Common.ChangeMoneyShow(slotLuckyGems500Model.instance.curBet * slotLuckyGems500Model.instance.exSelectRate, 2);
                  return _context3.abrupt("break", 26);
                case 14:
                  Tween.stopAllByTarget(this.Button_run.node);
                  AudioManager.instance.isPlaying() ? null : slotLuckyGems500Utils.instance.playBgMusic(eSound.base_bgm);

                  // slotLuckyGems500Utils.instance.playOneShot(slotLuckyGems500Def.eSound.Spin);

                  this.doStartRun();
                  this.updateGold();
                  return _context3.abrupt("break", 26);
                case 19:
                  this.updateGold();
                  return _context3.abrupt("break", 26);
                case 21:
                  //                //断线重连
                  slotLuckyGems500Model.instance.reLogin = true;
                  Common.closeNetTips();
                  Common.closeWait();
                  this.gameShow();
                  return _context3.abrupt("break", 26);
                case 26:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function updateView(_x, _x2) {
            return _updateView.apply(this, arguments);
          }
          return updateView;
        }();
        return slotLuckyGems500GameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolMask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "slotLuckyGems500_symbolList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_stop", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_win", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_uiDown", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_line", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_bqRoot", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_gold", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Layer_90_logo", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Layer_80_symbol", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_niceWin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Button_fastState", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_betWheel", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_clickMask_down", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_ex", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_exBoard", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_ex", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "EX_change", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "EXTag", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Node_exSelect", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_exNudge", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Loading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotLuckyGems500Utils.ts', './slotLuckyGems500Def.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, v3, Prefab, Component, slotLuckyGems500Utils, eEvent, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Node = module.Node;
      v3 = module.v3;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7f5e7L5QwtLmadEWbjaRSjF", "slotLuckyGems500Loading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotLuckyGems500Loading = exports('slotLuckyGems500Loading', (_dec = ccclass("slotLuckyGems500Loading"), _dec2 = property(Sprite), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500Loading, _Component);
        function slotLuckyGems500Loading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ProgressBar", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tip", _descriptor2, _assertThisInitialized(_this));
          _this.gamePrefab = null;
          _this.fillRange0 = 0;
          _this.fillRange1 = 0;
          _this.fillRangeMax = 0.5;
          return _this;
        }
        var _proto = slotLuckyGems500Loading.prototype;
        _proto.onLoad = function onLoad() {
          this.ProgressBar.fillRange = 0;
        };
        _proto.updateFillRange = function updateFillRange(dt) {
          if (this.ProgressBar.fillRange < 1) {
            if (this.fillRange1 < this.fillRangeMax) {
              this.fillRange1 += 0.016667 * this.fillRangeMax / 1.5;
            } else if (this.fillRange1 != this.fillRangeMax) {
              this.fillRange1 = this.fillRangeMax;
            }
            this.ProgressBar.fillRange = this.fillRange1 + this.fillRange0;
            this.tip.position = v3(-225 + 450 * this.ProgressBar.fillRange, this.tip.position.y, this.tip.position.z);
          } else if (this.gamePrefab) {
            this.unschedule(this.updateFillRange);
            this.ProgressBar.fillRange = 1.0;
            this.tip.position = v3(225, this.tip.position.y, this.tip.position.z);
            EventManager.instance.emit(eEvent.onLoadGame, this.gamePrefab);
          }
        };
        _proto.onDisable = function onDisable() {
          this.unschedule(this.updateFillRange);
          this.fillRange0 = 0;
          this.fillRange1 = 0;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2.gamePrefab = slotLuckyGems500Utils.instance.bundle.get("prefab/slotLuckyGems500GameView", Prefab);
            if (!_this2.gamePrefab) {
              _this2.fillRangeMax = 0.5;
              slotLuckyGems500Utils.instance.bundle.load("prefab/slotLuckyGems500GameView", Prefab, function (cur, total) {
                _this2.fillRange0 = cur / total * 0.5;
              }, function (err, prefab) {
                _this2.fillRange0 = 0.5;
                _this2.gamePrefab = prefab;
              });
            }
            _this2.fillRangeMax = _this2.gamePrefab ? 1.0 : 0.5;
            _this2.schedule(_this2.updateFillRange);
          }, 0.2);
        };
        return slotLuckyGems500Loading;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ProgressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './slotLuckyGems500Def.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus, eSymbol;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }],
    execute: function () {
      cclegacy._RF.push({}, "27251O57P1KPrU31FQqlTHk", "slotLuckyGems500Model", undefined);
      var slotLuckyGems500Model = exports('slotLuckyGems500Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(slotLuckyGems500Model, _GameDef$BaseSington);
        function slotLuckyGems500Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.stopNum = 0;
          _this.isAuto = false;
          _this.autoTimes = 0;
          _this.selAutoIndex = 0;
          _this.curBet = 1000;
          _this.curTotalBet = 1000;
          _this.curTotalWin = 0;
          _this.totalRate = 8;
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.isFreeAdd = false;
          _this.remainingCount = 0;
          _this.totalCount = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.curSpecialStartCol = 0;
          _this.specialSymbol = eSymbol.Scatter;
          _this.freeCount = 0;
          _this.isFirstFree = false;
          _this.gameState = eRunStatus.NONE;
          _this.reLogin = false;
          ////////////////JACKPOT
          _this.boxState = 0;
          _this.boType = "count";
          _this.arrColWild = [];
          //////////////////////////////////////////
          _this.originalPearl = null;
          _this.originalOpenNum = null;
          _this.totalWinSubGame = 0;
          _this.superFreeList = [];
          _this.isSuperScale = false;
          //0:none 1:1x 2:2x
          _this.quickState = 0;
          _this.scatterCounts = 0;
          _this.odds = 1;
          _this.nudgeTimes = 0;
          _this.isNudge = false;
          //推杆
          _this.useExp = false;
          _this.exSelectRate = 1;
          _this.curBetBack = 1000;
          _this.symbolBack = null;
          //收集免费次数满8次进超级免费
          _this.isCollectLock = true;
          _this.isSuperFree = false;
          ///////////////////////////////////////
          _this.gameStatus = eRunStatus.NONE;
          ///////////////////////////////////////
          _this.gameInfo = null;
          _this.betResult = null;
          return _this;
        }
        var _proto = slotLuckyGems500Model.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return slotLuckyGems500Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Scene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './slotLuckyGems500Def.ts', './slotLuckyGems500Utils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eSound, eEvent, slotLuckyGems500Utils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      assetManager = module.assetManager;
      view = module.view;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      cBundle = module.cBundle;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      slotLuckyGems500Utils = module.slotLuckyGems500Utils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8a73bHQXnBJ6Zor6Psdy9Pm", "slotLuckyGems500Scene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var slotLuckyGems500Scene = exports('default', (_dec = ccclass("slotLuckyGems500Scene"), _dec2 = menu("game/slotLuckyGems500Game/slotLuckyGems500Scene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotLuckyGems500Scene, _Component);
        function slotLuckyGems500Scene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          _this._node_loading = null;
          return _this;
        }
        var _proto = slotLuckyGems500Scene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          slotLuckyGems500Utils.instance.bundle = assetManager.getBundle(cBundle);
          slotLuckyGems500Utils.instance.preLoad();
          slotLuckyGems500Utils.instance.playBgMusic(eSound.base_bgm, false);
          this.onLoading();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            //            //////////////////
            if (_this2._node_loading) {
              Common.transformSize(_this2._node_loading);
            }
            if (_this2._node_Game) {
              Common.transformSize(_this2._node_Game);
            }
          }, 0.05);
        };
        _proto.onLoading = function onLoading() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            slotLuckyGems500Utils.instance.bundle.load("prefab/Node_loading", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3._node_loading = instantiate(prefab);
              _this3.node.addChild(_this3._node_loading);
              _this3.scheduleOnce(function () {
                Common.transformSize(_this3._node_loading);
              }, 0.05);
              tween(_this3._node_loading.getComponent(UIOpacity)).stop().to(0.15, {
                opacity: 255
              }).call(function () {
                Common.closeWait();
                if (slotLuckyGems500Utils.instance.isChangeOrientation()) {
                  _this3._node_loading.scale = v3(750 / 1334, 750 / 1334, 1);
                }
              }).start();
            });
          });
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          // if (ViewManager.instance.miniLayer) {
          //     ViewManager.instance.miniLayer.getChildByName("miniGame").rotation = 0;
          // }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame(prefab) {
          var _this4 = this;
          if (prefab === void 0) {
            prefab = null;
          }
          this.prefab_game = prefab;
          if (this._node_loading) {
            tween(this._node_loading).delay(0.4).destroySelf().call(function () {
              _this4._node_loading = null;
            }).start();
            tween(this._node_loading.getComponent(UIOpacity)).to(0.3, {
              opacity: 0
            }).start();
          }

          ///////////////////////
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            slotLuckyGems500Utils.instance.bundle.load("prefab/slotLuckyGems500GameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this5 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }
            this.scheduleOnce(function () {
              if (_this5._node_Game) {
                Common.transformSize(_this5._node_Game);
              }
            }, 0.05);
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              Common.closeWait();
              if (slotLuckyGems500Utils.instance.isChangeOrientation()) {
                _this5._node_Game.scale = v3(750 / 1334, 750 / 1334, 1);
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return slotLuckyGems500Scene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotLuckyGems500Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './slotLuckyGems500Def.ts', './Common.ts', './slotLuckyGems500Model.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, Sprite, sp, sys, SpriteFrame, GameDef, AudioManager, eSymbol, eConstDef, arrBase, eSound, Common, slotLuckyGems500Model;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Sprite = module.Sprite;
      sp = module.sp;
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      arrBase = module.arrBase;
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      slotLuckyGems500Model = module.slotLuckyGems500Model;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a2aaObLrNHn60vwZMcxCDT", "slotLuckyGems500Utils", undefined);
      var symbol_icon = {
        "1": "Symbol_07",
        "2": "Symbol_00",
        "3": "Symbol_01",
        "4": "Symbol_02",
        "5": "Symbol_03",
        "6": "Symbol_06",
        "7": "Symbol_05",
        "8": "Symbol_04",
        "100": "Symbol_19",
        "101": "Symbol_08",
        "102": "Symbol_09",
        "103": "Symbol_10",
        "105": "Symbol_11",
        "110": "Symbol_12",
        "115": "Symbol_13",
        "120": "Symbol_14",
        "125": "Symbol_15",
        "150": "Symbol_16",
        "200": "Symbol_17",
        "600": "Symbol_18"
      };
      var symbol_SkeletonDataName = {
        "1": "icon_wild",
        "2": "icon_JQKA",
        "3": "icon_JQKA",
        "4": "icon_JQKA",
        "5": "icon_JQKA",
        "6": "icon_gem_red",
        "7": "icon_gem_blue",
        "8": "icon_gem_green",
        "100": "Symbol_19",
        "101": "icon_xn",
        "102": "icon_xn",
        "103": "icon_xn",
        "105": "icon_xn",
        "110": "icon_xn",
        "115": "icon_xn",
        "120": "icon_xn",
        "125": "icon_xn",
        "150": "icon_xn",
        "200": "icon_xn",
        "600": "icon_xn"
      };
      var symbol_SkeletonAniName = {
        "0": "Open",
        "1": "idle",
        "2": "J",
        "3": "Q",
        "4": "K",
        "5": "A",
        "6": "idle",
        "7": "idle",
        "8": "idle",
        "100": "Open",
        "101": "Bg_Symbol_08",
        "102": "Bg_Symbol_09",
        "103": "Bg_Symbol_10",
        "105": "Bg_Symbol_11",
        "110": "Bg_Symbol_12",
        "115": "Bg_Symbol_13",
        "120": "Bg_Symbol_14",
        "125": "Bg_Symbol_15",
        "150": "Bg_Symbol_16",
        "200": "Bg_Symbol_17",
        "600": "Bg_Symbol_18"
      };
      var slotLuckyGems500Utils = exports('slotLuckyGems500Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(slotLuckyGems500Utils, _GameDef$BaseSington);
        function slotLuckyGems500Utils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          _this._retList = null;
          _this.betIndex = 0;
          /////////////////
          _this.scheduleList = {};
          return _this;
        }
        var _proto = slotLuckyGems500Utils.prototype;
        // arrIconBoxSpriteFrame: { [index: string]: SpriteFrame } = {};
        // arrIconFrameSpriteFrame: { [index: string]: SpriteFrame } = {};
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/slotLuckyGems500GameView");
          this.bundle.preloadDir("prefab");
          this.bundle.preloadDir("sound");
        };
        _proto.asyncLoad = /*#__PURE__*/function () {
          var _asyncLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, type, onComplete) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.bundle.load(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function asyncLoad(_x, _x2, _x3) {
            return _asyncLoad.apply(this, arguments);
          }
          return asyncLoad;
        }();
        _proto.asyncLoadDir = /*#__PURE__*/function () {
          var _asyncLoadDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(parth, type, onComplete) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.bundle.loadDir(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 1:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function asyncLoadDir(_x4, _x5, _x6) {
            return _asyncLoadDir.apply(this, arguments);
          }
          return asyncLoadDir;
        }();
        _proto.loadRes = /*#__PURE__*/function () {
          var _loadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("textures/icon", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrIconSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  // arrHLoad.push(
                  //     this.asyncLoadDir("textures/iconBox", SpriteFrame, (err, arrSpFrame: SpriteFrame[]) => {
                  //         if (!err) {
                  //             for (const SpriteFrame of arrSpFrame) {
                  //                 this.arrIconBoxSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //             }
                  //         }
                  //     })
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoadDir("textures/iconFrame", SpriteFrame, (err, arrSpFrame: SpriteFrame[]) => {
                  //         if (!err) {
                  //             for (const SpriteFrame of arrSpFrame) {
                  //                 this.arrIconFrameSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //             }
                  //         }
                  //     })
                  // );

                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpineData), _step2; !(_step2 = _iterator2()).done;) {
                        var spineData = _step2.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpineData), _step3; !(_step3 = _iterator3()).done;) {
                        var spineData = _step3.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  // arrHLoad.push(
                  //   this.asyncLoadDir("spine/fish", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //     if (!err) {
                  //       for (const spineData of arrSpineData) {
                  //         this.arrSkeletonData[spineData.name] = spineData;
                  //       }
                  //     }
                  //   }),
                  // );

                  // arrHLoad.push(
                  //   this.asyncLoad("font/theme314_font_respinpick", Font, (err, font: Font) => {
                  //     if (!err) {
                  //       this.arrFontData[font.name] = font;
                  //     }
                  //   }),
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoad("font/yellow", Font, (err, font: Font) => {
                  //         if (!err) {
                  //             this.arrFontData[font.name] = font;
                  //         }
                  //     })
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoad("font/red_01", Font, (err, font: Font) => {
                  //         if (!err) {
                  //             this.arrFontData[font.name] = font;
                  //         }
                  //     })
                  // );
                  _context3.next = 6;
                  return Promise.all(arrHLoad);
                case 6:
                  if (cb) {
                    cb();
                  }
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes(_x7) {
            return _loadRes.apply(this, arguments);
          }
          return loadRes;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this5.bundle.load(path, Prefab, function (cur, total) {
              callback1(cur, total);
            }, function (err, GameLayer) {
              if (isshowWait) {
                Common.closeWait();
              }
              callback2(GameLayer);
              err ? reject(false) : resolve(true);
            });
          });
        };
        _proto.playBgMusic = function playBgMusic(strPath, isLoop) {
          if (strPath === void 0) {
            strPath = eSound.base_bgm;
          }
          if (isLoop === void 0) {
            isLoop = true;
          }
          AudioManager.instance.playGameMusicByPath(strPath, this.bundle, isLoop);
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this6 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this6.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this6.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this6.soundIDList[soundPath] = null;
              delete _this6.soundIDList[soundPath];
              if (cb) {
                cb();
              }
            });

            // audioEngine.setEffectsVolume(1);
          });
        };

        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
          });
        };
        _proto.stopSound = function stopSound(soundPath) {
          var curSoundID = this.soundIDList[soundPath];
          if (curSoundID) {
            AudioManager.instance.stopSound(curSoundID);
            this.soundIDList[soundPath] = null;
            delete this.soundIDList[soundPath];
          }
        };
        _proto.stopAllSound = function stopAllSound() {
          var keys = Object.keys(this.soundIDList);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            AudioManager.instance.stopSound(this.soundIDList[key]);
          }
        };
        _proto.numberFormat = function numberFormat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            rate = "" + arrRate[0];
          } else if (arrRate[1].length < digits) {
            //            // while (arrRate[1].length < digits) {
            //            //     arrRate[1] = arrRate[1].concat("0");
            //            // }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }

          //        // gts.Debug.Log("==numberFormat==" + rate);
          return rate;
        };
        _proto.numberFormatFloat = function numberFormatFloat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            rate = arrRate[0] + ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }
          return rate;
        };
        _proto.FxF = function FxF(f1, f2) {
          f1 += "";
          f2 += "";
          var arrF1 = f1.split(".");
          var arrF2 = f2.split(".");
          var f1Len = arrF1[1] ? arrF1[1].length : 0;
          var f2Len = arrF2[1] ? arrF2[1].length : 0;
          if (f1Len) {
            f1 = f1.replace(".", "");
          }
          if (f2Len) {
            f2 = f2.replace(".", "");
          }
          return f1 * f2 / Math.pow(10, f1Len + f2Len);
        };
        _proto.numberFormatD = function numberFormatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            return "";
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.numberFormatFloatD = function numberFormatFloatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            return ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.updateLabel = function updateLabel(label, num) {
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.numberFormatNf = function numberFormatNf(num, digits) {
          var inter = Common.numFormat(num / 1000);
          var digit = this.numberFormatD(num / 1000, digits);
          return "" + inter + digit + "K";
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, soundIndex, curNums, times) {
          if (soundIndex === void 0) {
            soundIndex = null;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          if (times === void 0) {
            times = 20;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / times;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          if (soundIndex) {
            slotLuckyGems500Utils.instance.playSound("sound/win" + soundIndex);
          }
          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(times + 1, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              if (soundIndex) {
                slotLuckyGems500Utils.instance.stopSound("sound/win" + soundIndex);
                slotLuckyGems500Utils.instance.playSound("sound/win" + soundIndex + "end");
              }
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = Common.ChangeMoneyShowFloat(curWin, 2);
          })).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat, delayTime) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (delayTime === void 0) {
            delayTime = 0.075;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(delayTime).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              // slotLuckyGems500Utils.instance.stopSound(slotLuckyGems500Def.eSound.numAdd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this8.numberFormatFloat(curWin, 0) : "" + _this8.numberFormat(curWin, 0);
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, isRunning) {
          if (isRunning === void 0) {
            isRunning = false;
          }
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_icon["" + symbolIndex];
            symbol = isRunning ? symbol + "_b" : symbol;
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconSmall = function getItemSymbolIconSmall(symbolIndex) {
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_icon["" + symbolIndex];
            symbol = symbol + "_s";
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = symbol_SkeletonDataName["" + index];
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.getSkeletonAni = function getSkeletonAni(index) {
          return symbol_SkeletonAniName["" + index];
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          var sprite = btnNode.getComponent(Sprite);
          if (sprite) {
            sprite.grayscale = isGray;
          } else {
            var spine = btnNode.getComponent(sp.Skeleton);
            if (spine) {
              Common.changeRenderGray(btnNode, isGray);
            }
          }
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        _proto.checkColWild = function checkColWild(openResult) {
          var arrColWild = [];
          var AllPosMsg_7 = openResult.openNum[6];
          for (var iRow = 0; iRow < AllPosMsg_7.length; iRow++) {
            var symbolInfo = AllPosMsg_7[iRow];
            if (symbolInfo && symbolInfo.num >= eSymbol.Wild) {
              var AllPosMsg_8 = openResult.openNum[7];
              var symbolInfo_8 = AllPosMsg_8[iRow];
              if (symbolInfo_8 && symbolInfo_8.num >= eSymbol.Wild) {
                arrColWild.push(iRow + 1);
              }
            }
          }
          return arrColWild;
        };
        _proto.checkScatter = function checkScatter(openResult) {
          // let iHuCounts = 0;
          // for (const openNum of openResult) {
          //     for (const posMsg of openNum) {
          //         if (posMsg.num == slotLuckyGems500Def.eSymbol.SCATTER) {
          //             iHuCounts++;
          //             if (iHuCounts > 2) {
          //                 return iHuCounts;
          //             }
          //         }
          //     }
          // }

          return 0;
        };
        _proto.getInitOpenNums = function getInitOpenNums() {
          var arrNUms = [11, 8, 9, 1, 9, 8, 6, 5, 5, 8, 10, 4, 4, 10, 5, 5, 10, 8, 9, 2];
          return arrNUms;
        };
        _proto.getResult = function getResult(openNums, prizeInfo) {
          if (openNums === void 0) {
            openNums = null;
          }
          if (prizeInfo === void 0) {
            prizeInfo = null;
          }
          if (!openNums) {
            this._retList = null;
            return null;
          }
          if (this._retList) {
            return this._retList;
          }
          this._retList = [];

          // let pearlInfo = slotLuckyGems500Model.instance.betResult.pearl;
          // let whitePearl = slotLuckyGems500Model.instance.betResult.freeInfo
          //   ? slotLuckyGems500Model.instance.betResult.freeInfo.whitePearl
          //   : null;
          // let yellowPearl = slotLuckyGems500Model.instance.betResult.freeInfo
          //   ? slotLuckyGems500Model.instance.betResult.freeInfo.yellowPearl
          //   : null;

          for (var iCol = 0; iCol < eConstDef.CMaxCol; iCol++) {
            var symList = [];
            for (var iRow = 0; iRow < eConstDef.CMaxRow; iRow++) {
              var sym = 0;
              if (iCol < 3) {
                var _index = iRow * 3 + iCol;
                sym = openNums.OpenNums[_index];
              } else {
                sym = eSymbol.Rate_0 + openNums.multiples[iRow];
              }
              symList.push({
                Sym: sym,
                IsReward: false,
                iRow: iRow,
                iCol: iCol
              });
            }
            this._retList.push(symList);
          }
          prizeInfo = prizeInfo || (slotLuckyGems500Model.instance.betResult ? slotLuckyGems500Model.instance.betResult.prizeIdx : null);
          if (prizeInfo && prizeInfo.length > 0) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(prizeInfo), _step4; !(_step4 = _iterator4()).done;) {
              var indexList = _step4.value;
              if (indexList) {
                for (var _iterator5 = _createForOfIteratorHelperLoose(indexList), _step5; !(_step5 = _iterator5()).done;) {
                  var _index2 = _step5.value;
                  var _iRow = Math.floor(_index2 / eConstDef.CMaxRow);
                  var _iCol = _index2 % eConstDef.CMaxRow;
                  this._retList[_iCol][_iRow].IsReward = true;
                }
              }
            }
            this._retList[3][1].IsReward = true;
          }

          // for (const _retList of this._retList) {
          //     _retList.reverse();
          // }
          gts.Debug.Log("==getResult=retList=" + JSON.stringify(this._retList));
          return this._retList;
        };
        _proto.setBaseBet = function setBaseBet(curBet) {
          // if (this.arrBase.length < 5) {
          //     for (let i = 4; i < 22; i++) {
          //         this.arrBase[i] = this.arrBase[i - 1] + this.arrBase[i - 2];
          //     }
          // }
          for (var i = 1; i < arrBase.length; i++) {
            if (arrBase[i] > curBet) {
              this.betIndex = i - 1;
              break;
            }
          }
        };
        _proto.getAddBet = function getAddBet() {
          this.betIndex = (this.betIndex + 1) % arrBase.length;
          return arrBase[this.betIndex];
        };
        _proto.getRedusBet = function getRedusBet() {
          this.betIndex = (this.betIndex + arrBase.length - 1) % arrBase.length;
          return arrBase[this.betIndex];
        };
        _proto.getLine = function getLine(prizeIdx) {
          if (!prizeIdx || prizeIdx.length == 0) {
            return null;
          }
          var lineIndex = {
            "0": {
              "1": {
                "2": 2
              },
              "4": {
                "8": 4
              }
            },
            //012 048
            "2": {
              "4": {
                "6": 5
              }
            },
            "3": {
              "4": {
                "5": 1
              }
            },
            "6": {
              "7": {
                "8": 3
              }
            }
          };
          return lineIndex["" + prizeIdx[0]]["" + prizeIdx[1]]["" + prizeIdx[2]];
        };
        _proto.startSchedule = function startSchedule(delay, interval, fCall, id) {
          if (id === void 0) {
            id = null;
          }
          var scheduleInfo = {
            delay: delay,
            interval: interval,
            fCall: fCall,
            hTimeout: null,
            hInterval: null
          };
          scheduleInfo.hTimeout = setTimeout(function () {
            scheduleInfo.fCall();
            scheduleInfo.hInterval = setInterval(scheduleInfo.fCall, scheduleInfo.interval);
          }, delay);
          var scheduleID = id || Math.random() * 1000000 + 1000000 + "_" + (Math.random() * 3000000 + 3000000);
          this.scheduleList["" + scheduleID] = scheduleInfo;
          return scheduleID;
        };
        _proto.stopSchedule = function stopSchedule(scheduleID, isRestart) {
          if (isRestart === void 0) {
            isRestart = false;
          }
          var scheduleInfo = this.scheduleList["" + scheduleID];
          if (!scheduleInfo) {
            return;
          }
          if (scheduleInfo.hTimeout) {
            clearTimeout(scheduleInfo.hTimeout);
            scheduleInfo.hTimeout = null;
          }
          if (scheduleInfo.hInterval) {
            clearInterval(scheduleInfo.hInterval);
            scheduleInfo.hInterval = null;
          }
          if (isRestart) {
            this.startSchedule(scheduleInfo.delay, scheduleInfo.interval, scheduleInfo.fCall, scheduleID);
          } else {
            scheduleInfo = null;
            delete this.scheduleList["" + scheduleID];
          }
        };
        _createClass(slotLuckyGems500Utils, [{
          key: "resultList",
          get: function get() {
            return this._retList;
          }
        }]);
        return slotLuckyGems500Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/slotLuckyGems500Game', 'chunks:///_virtual/slotLuckyGems500Game'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});