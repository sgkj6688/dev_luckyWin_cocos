System.register("chunks:///_virtual/Kraken_bigWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, ParticleSystem, Label, UITransform, v3, tween, Component, Tween, KrakenModel, eSound, KrakenUtils, Common;
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
      sp = module.sp;
      ParticleSystem = module.ParticleSystem;
      Label = module.Label;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
      Component = module.Component;
      Tween = module.Tween;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "eea10MJ469LypdjSvKrFYpp", "Kraken_bigWin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Kraken_bigWin = exports('default', (_dec = ccclass("Kraken_bigWin"), _dec2 = menu("game/KrakenGame/Kraken_bigWin"), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(ParticleSystem), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_bigWin, _Component);
        function Kraken_bigWin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_root", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_haiguai", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_light", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_title", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor6, _assertThisInitialized(_this));
          /////////////////////////
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = Kraken_bigWin.prototype;
        /////////////////////////
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //////////////////////
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Node_haiguai":
              {
                this.isStopBigWin = true;
                break;
              }
          }
        };
        _proto.setAnimation = function setAnimation(strName, isStart) {
          var _this2 = this;
          if (strName === void 0) {
            strName = "big";
          }
          if (isStart === void 0) {
            isStart = false;
          }
          if (isStart) {
            this.Node_light.setSkin(strName);
            this.Node_haiguai.setSkin(strName);
            this.Node_light.setAnimation(0, "light_intro", false);
            this.Node_light.setCompleteListener(function () {
              _this2.Node_light.setCompleteListener(null);
              _this2.Node_light.setAnimation(0, "light_idle", true);
            });
            this.Node_haiguai.setAnimation(0, "haiguai_intro", false);
            this.Node_haiguai.setCompleteListener(function () {
              _this2.Node_haiguai.setCompleteListener(null);
              _this2.Node_haiguai.setAnimation(0, "haiguai_idle", true);
            });
          }
          this.Node_title.setSkin(strName);
          this.Node_title.setAnimation(0, "title_intro", false);
          this.Node_title.setCompleteListener(function () {
            _this2.Node_title.setCompleteListener(null);
            _this2.Node_title.setAnimation(0, "title_idle", true);
          });
        };
        _proto.showBigWin = function showBigWin(destWin, delay) {
          var _this3 = this;
          if (delay === void 0) {
            delay = 0.35;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / KrakenModel.instance.curBet;
            if (rate < 6) {
              resolve();
              return;
            }
            _this3.node.getComponent(UITransform).priority = 52;
            _this3.Node_root.scale = v3(0.694, 0.694, 0.694);
            var lv = 0; //rate < 35 ? 1 : rate < 50 ? 2 : 3;

            var destLv = rate < 20 ? 1 : rate < 35 ? 2 : rate < 50 ? 3 : 4;
            var curLv = 1;
            var aniName = ["big", "huge", "legendary", "massive"];
            _this3.setAnimation(aniName[0], true);
            var strPath = [eSound.human_big_win, eSound.human_huge_win, eSound.human_legendary_win, eSound.human_massive_win];
            KrakenUtils.instance.playSound(strPath[0]);
            _this3.Label_totalWin.string = "";
            tween(_this3.node).delay(delay)
            // .to(0.1, { scale: v3(1.2, 1.2, 1) }, { easing: "quadOut" })
            // .to(0.05, { scale: v3(1.0, 1.0, 1) }, { easing: "quadIn" })
            .call(function () {
              KrakenUtils.instance.playSound(eSound.win4);
              var totalTime = destLv * 5;
              var dt = 0.05;
              var updateTimes = totalTime / dt;
              var disWin = Math.floor(destWin / updateTimes);
              var curTotalWin = 0;
              tween(_this3.Label_totalWin.node).repeatForever(
              //                                // updateTimes + 1,
              tween(_this3.Label_totalWin.node).delay(dt).call(function () {
                var doEnd = function doEnd() {
                  // KrakenUtils.instance.stopSound(KrakenDef.eSound.BigWin);
                  // KrakenUtils.instance.playSound(KrakenDef.eSound.bigwin_end);

                  KrakenUtils.instance.playSound(eSound.win4end);
                  Tween.stopAllByTarget(_this3.Label_totalWin.node);
                  curTotalWin = destWin;
                  _this3.setAnimation(aniName[destLv - 1]);
                  _this3.Label_totalWin.string = Common.ChangeMoneyShowFloat(curTotalWin, 2);
                  tween(_this3.Node_root).delay(_this3.isStopBigWin ? 1.0 : 2.0).to(0.25, {
                    scale: v3(0, 0, 0)
                  }).call(function () {
                    _this3.node.active = false;
                    _this3.isStopBigWin = false;
                    resolve();
                  }).start();
                };
                curTotalWin += disWin;
                rate = curTotalWin / KrakenModel.instance.curBet;
                lv = rate < 20 ? 1 : rate < 35 ? 2 : rate < 50 ? 3 : 4; //rate < 35 ? 1 : rate < 50 ? 2 : 3;
                if (curLv < lv) {
                  curLv = lv;
                  KrakenUtils.instance.playSound(strPath[curLv - 1]);
                  _this3.setAnimation(aniName[curLv - 1]);
                }
                if (curTotalWin > destWin) {
                  doEnd();
                } else {
                  _this3.Label_totalWin.string = Common.ChangeMoneyShowFloat(curTotalWin, 2);
                }
                if (_this3.isStopBigWin) {
                  //点击停止
                  doEnd();
                }
              })).start();
            }).start();
          });
        };
        return Kraken_bigWin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_root", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_haiguai", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_light", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_title", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec8], {
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

System.register("chunks:///_virtual/Kraken_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "e5ce4FEqTtEOaLXgqeHOqby", "Kraken_btnEffect", undefined);
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
      var Kraken_btnEffect = exports('default', (_dec = ccclass("Kraken_btnEffect"), _dec2 = menu("game/KrakenGame/Kraken_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec6 = property({
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_btnEffect, _Component);
        function Kraken_btnEffect() {
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
        var _proto = Kraken_btnEffect.prototype;
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

        _createClass(Kraken_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return Kraken_btnEffect;
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

System.register("chunks:///_virtual/Kraken_help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "d4fa2Yes61Onru7W2fhQFPZ", "Kraken_help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;

      // import i18n from "../../../../i18n/I18n";
      // import DataManager, { UserKey } from "../../../../script/manager/DataManager";
      // import { KrakenCtrl } from "../KrakenCtrl";
      // import { KrakenModel } from "../KrakenModel";
      // import * as KrakenDef from "../KrakenDef";
      // import { GameDef } from "../../../../script/GameDef";
      // import ViewManager from "../../../../script/manager/ViewManager";
      // import EventManager from "../../../../script/manager/EventManager";
      // import ConfigManager from "../../../../script/manager/ConfigManager";
      // import { KrakenUtils } from "../KrakenUtils";
      // import NetManager from "../../../../script/manager/NetManager";
      // import { Common } from "../../../../script/tools/Common";
      // const pageSize = 9;
      // // // @inspector("packages://autoproperty/inspector.js")
      var Kraken_help = exports('default', (_dec = ccclass("Kraken_help"), _dec2 = menu("game/KrakenGame/Kraken_help"), _dec3 = property(PageView), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_help, _Component);
        function Kraken_help() {
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
        var _proto = Kraken_help.prototype;
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
        return Kraken_help;
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

System.register("chunks:///_virtual/Kraken_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenCtrl.ts', './KrakenDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, KrakenCtrl, eProto, GameDef, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
    }, function (module) {
      KrakenCtrl = module.KrakenCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0c176KlvNZKtaQy53xgInMf", "Kraken_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Kraken_history = exports('default', (_dec = ccclass("KrakenHistory"), _dec2 = menu("game/KrakenGame/Kraken_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Kraken_history, _GameDef$BaseView);
        function Kraken_history() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor4, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          _this._pageSize = 13;
          return _this;
        }
        var _proto = Kraken_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, KrakenCtrl.instance);
          KrakenCtrl.instance.reqHistory();
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onBefore = function onBefore() {
          // this._lastPage = this._curPage;
          // //        //上一页
          // this._curPage--;
          // if (this._curPage < 0) {
          //     this._curPage = 0;
          // }
          // let start = this._curPage * this._pageSize;
          // KrakenCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          // this._lastPage = this._curPage;
          // this._curPage++;
          // let start = this._curPage * this._pageSize;
          // KrakenCtrl.instance.reqHistory(start);
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                Common.closeWait();
                if (!data || !data.BetRecord || data.BetRecord.length == 0) {
                  this._curPage = this._lastPage;
                  // this.Button_next.active = false;
                  return;
                }

                // this.Button_last.active = this._curPage > 0;
                // this.Button_next.active = data.NextPage;

                this.Label_curPage.string = "Trang:" + (this._curPage + 1);
                this.scrollView_content.setData(data.BetRecord);
                break;
              }
          }
        };
        return Kraken_history;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_last", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec6], {
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

System.register("chunks:///_virtual/Kraken_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "0fc1ah/lLxNxYih3e8/BH1C", "Kraken_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Kraken_historyItem = exports('default', (_dec = ccclass("KrakenHistoryItem"), _dec2 = menu("game/KrakenGame/Kraken_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_historyItem, _Component);
        function Kraken_historyItem() {
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
        var _proto = Kraken_historyItem.prototype;
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
            // let inter = Common.numFormatInt(tempData.Income / 1000);
            // let digit = KrakenUtils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            // str = `+${inter}${digit}K`;

            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            // let inter = Common.numFormatInt(tempData.Income / 1000);
            // let digit = KrakenUtils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            // str = `${inter}${digit}K`;

            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = Common.ChangeMoneyShowFloat(tempData.Income, 2);
        };
        _createClass(Kraken_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Kraken_historyItem;
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

System.register("chunks:///_virtual/Kraken_mutBtn.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "d3cbfL1AjlMHpTM6jhJ8uGr", "Kraken_mutBtn", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Kraken_mutBtn = exports('Kraken_mutBtn', (_dec = ccclass("Kraken_mutBtn"), _dec2 = menu("KrakenGame/Kraken_mutBtn"), _dec3 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_mutBtn, _Component);
        function Kraken_mutBtn() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_state", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Kraken_mutBtn.prototype;
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
        return Kraken_mutBtn;
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

System.register("chunks:///_virtual/Kraken_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './ViewManager.ts', './EventManager.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, Label, Toggle, Component, KrakenModel, arrBase, cAutoTimes, eEvent, ViewManager, EventManager, KrakenUtils, Common;
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
      KrakenModel = module.KrakenModel;
    }, function (module) {
      arrBase = module.arrBase;
      cAutoTimes = module.cAutoTimes;
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "7acc96YHZJH4bHUhjjDFWfI", "Kraken_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Kraken_setAuto = exports('default', (_dec = ccclass("KrakenSetAuto"), _dec2 = menu("game/KrakenGame/Kraken_setAuto"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_setAuto, _Component);
        function Kraken_setAuto() {
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
        var _proto = Kraken_setAuto.prototype;
        //cAutoTimes [20, 50, 100, 500, 99999];
        //    ////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.baseBet = KrakenModel.instance.curBet;
          this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
          this.Button_add.interactable = this.baseBet < arrBase[arrBase.length - 1];
          this.Button_redus.interactable = this.baseBet > 1000;
          var speedToggle = this.spinSpeed.getChildByName("Toggle" + KrakenModel.instance.quickState);
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
                KrakenUtils.instance.setBaseBet(KrakenModel.instance.curBet);
                EventManager.instance.emit(eEvent.onSetAuto, "close");
                break;
              }
            case "Button_ok":
              {
                KrakenModel.instance.quickState = this.spinSpeed.children[0].getComponent(Toggle).isChecked ? 1 : this.spinSpeed.children[1].getComponent(Toggle).isChecked ? 2 : 0;
                for (var _iterator = _createForOfIteratorHelperLoose(this.autoSpin.children), _step; !(_step = _iterator()).done;) {
                  var toggle = _step.value;
                  if (toggle.getComponent(Toggle).isChecked) {
                    var index = parseInt(toggle.name.replace("Toggle", ""));
                    KrakenModel.instance.autoTimes = cAutoTimes[index - 1];
                    break;
                  }
                }
                KrakenModel.instance.curBet = this.baseBet;
                EventManager.instance.emit(eEvent.onSetAuto, "Button_ok");
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_add":
              {
                this.baseBet = KrakenUtils.instance.getAddBet();
                this.Button_add.interactable = KrakenUtils.instance.betIndex < 21;
                this.Button_redus.interactable = KrakenUtils.instance.betIndex > 0;
                this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
                break;
              }
            case "Button_redus":
              {
                this.baseBet = KrakenUtils.instance.getRedusBet();
                this.Button_add.interactable = KrakenUtils.instance.betIndex < 21;
                this.Button_redus.interactable = KrakenUtils.instance.betIndex > 0;
                this.Label_bet.string = Common.ChangeMoneyShow(this.baseBet, 2);
                break;
              }
          }
        };
        return Kraken_setAuto;
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

System.register("chunks:///_virtual/Kraken_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './KrakenUtils.ts', './Kraken_symbolItem.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, instantiate, v3, UIOpacity, Component, tween, KrakenModel, eRunStatus, eConstDef, eSymbol, eEvent, eSound, KrakenUtils, Kraken_symbolItem, EventManager;
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
      KrakenModel = module.KrakenModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Kraken_symbolItem = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "27cdcLlMz1Otragrnc/ym+G", "Kraken_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Kraken_symbol = exports('default', (_dec = ccclass("KrakenSymbol"), _dec2 = menu("KrakenGame/Kraken_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_symbol, _Component);
        function Kraken_symbol() {
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
        var _proto = Kraken_symbol.prototype;
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
          if (isEnter === void 0) {
            isEnter = false;
          }
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = Math.floor(Math.random() * eSymbol.TEN) + 1; //this._iCol < 3 ? Math.floor(Math.random() * KrakenDef.eSymbol.J) : Math.floor(Math.random() * KrakenDef.eSymbol.Bottle) + 4;
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
          var com = newItem.getComponent(Kraken_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, this.Node_effectRoot, isEnter);
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
            this.addNewItem(itemInfoList[i], true);
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
              var symbol = symbolNode.getComponent(Kraken_symbolItem);
              if (symbol.itemInfo.Sym == eSymbol.Scatter) {
                symbol.changeParent(_this2.Node_effectRoot);
              }
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
              KrakenModel.instance.quickState > 0 ? function () {
                _this3.maxIndex = _this3.maxIndex - 1;
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 1500 + 1000 * KrakenModel.instance.quickState;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
                _this3.maxIndex = _this3.maxIndex - 1;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = KrakenUtils.instance.getResult(KrakenModel.instance.betResult.openNum)[_this3._iCol];

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
                      // if (!KrakenModel.instance.isQuickStop) {
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
                            KrakenUtils.instance.playOneShot(eSound.reel_stop);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol = _step2.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this3.unschedule(scheduleUpdate);
                            if (KrakenModel.instance.specialStartCol > 0 && _this3._iCol + 1 >= KrakenModel.instance.specialStartCol) {
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
              // if (this._runStatus < KrakenDef.eRunStatus.END) {
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
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(0.0));
            //            // arrPro.push(symbol.doEffect(Kraken_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Kraken_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doScatterBlink = /*#__PURE__*/function () {
          var _doScatterBlink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator3, _step3, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  arrPro = [];
                  for (_iterator3 = _createForOfIteratorHelperLoose(this._symbolList); !(_step3 = _iterator3()).done;) {
                    symbol = _step3.value;
                    if (symbol.itemInfo.Sym == eSymbol.Scatter) {
                      arrPro.push(symbol.doScatterBlink());
                    } else {
                      symbol.updateZIndex(eRunStatus.RUNNING);
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doScatterBlink() {
            return _doScatterBlink.apply(this, arguments);
          }
          return doScatterBlink;
        }();
        _proto.stopScatterBlink = function stopScatterBlink() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._symbolList), _step4; !(_step4 = _iterator4()).done;) {
            var symbol = _step4.value;
            if (symbol.itemInfo.Sym == eSymbol.Scatter) {
              symbol.stopScatterBlink();
            }
          }
        };
        _proto.doPearlBlink = function doPearlBlink() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._symbolList), _step5; !(_step5 = _iterator5()).done;) {
            var symbol = _step5.value;
            if (symbol.itemInfo.Sym == eSymbol.whitePearl || symbol.itemInfo.Sym == eSymbol.yellowPearl) {
              symbol.doPearlBlink();
            }
          }
        };
        _proto.stopPearlBlink = function stopPearlBlink() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._symbolList), _step6; !(_step6 = _iterator6()).done;) {
            var symbol = _step6.value;
            if (symbol.itemInfo.Sym == eSymbol.whitePearl || symbol.itemInfo.Sym == eSymbol.yellowPearl) {
              symbol.stopPearlBlink();
            }
          }
        };
        return Kraken_symbol;
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
          return 5;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Kraken_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b4bd30TPDlJz4QmzjCqcnAp", "Kraken_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Kraken_symbolEffectRoot = exports('default', (_dec = ccclass("Kraken_symbolEffectRoot"), _dec2 = menu("KrakenGame/Kraken_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_symbolEffectRoot, _Component);
        function Kraken_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Kraken_symbolEffectRoot.prototype;
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
        return Kraken_symbolEffectRoot;
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

System.register("chunks:///_virtual/Kraken_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './EventManager.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, sp, Sprite, v3, Node, Label, UITransform, instantiate, tween, Component, KrakenModel, eSymbol, eConstDef, eZindex, eRunStatus, eEvent, EventManager, KrakenUtils, Common;
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
      v3 = module.v3;
      Node = module.Node;
      Label = module.Label;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b91d2xr1WNDlJs0X616pB79", "Kraken_symbolItem", undefined);
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
      var Kraken_symbolItem = exports('default', (_dec = ccclass("KrakenSymbolItem"), _dec2 = menu("KrakenGame/Kraken_symbolItem"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_symbolItem, _Component);
        function Kraken_symbolItem() {
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
          return _this;
        }
        var _proto = Kraken_symbolItem.prototype;
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

        _proto.initItem = function initItem(info, isHorizontal, iCol, Node_effectRoot, isEnter) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (Node_effectRoot === void 0) {
            Node_effectRoot = null;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          this.itemStatus = eItemStatus.NONE;
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          this.Node_effectRoot = Node_effectRoot;
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.itemInfo = info;
          var isSpecial = isEnter && (info.Sym < eSymbol.Wild || info.Sym >= eSymbol.whitePearl);
          this.updateSymbol(this.itemInfo.IsReward || isSpecial);
          if (isSpecial) {
            this.changeParent(this.Node_effectRoot);
          }
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
              var itemSymbol = KrakenUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
            this.Node_symbol.scale = v3(0.5, 0.5, 0.5);
            switch (Sym) {
              case eSymbol.whitePearl:
                {
                  if (this.itemInfo.pearl) {
                    switch (this.itemInfo.pearl) {
                      case "mini":
                        {
                          var newNode = this.Node_symbol.getChildByName("rate");
                          if (!newNode) {
                            newNode = new Node("rate");
                            var sprite = newNode.addComponent(Sprite);
                            sprite.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp4"];
                            this.Node_symbol.addChild(newNode);
                          }
                          break;
                        }
                      case "minor":
                        {
                          var _newNode = this.Node_symbol.getChildByName("rate");
                          if (!_newNode) {
                            _newNode = new Node("rate");
                            var _sprite = _newNode.addComponent(Sprite);
                            _sprite.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp3"];
                            this.Node_symbol.addChild(_newNode);
                          }
                          break;
                        }
                      case "major":
                        {
                          var _newNode2 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode2) {
                            _newNode2 = new Node("rate");
                            var _sprite2 = _newNode2.addComponent(Sprite);
                            _sprite2.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp2"];
                            this.Node_symbol.addChild(_newNode2);
                          }
                          break;
                        }
                      case "grand":
                        {
                          var _newNode3 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode3) {
                            _newNode3 = new Node("rate");
                            var _sprite3 = _newNode3.addComponent(Sprite);
                            _sprite3.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp1"];
                            this.Node_symbol.addChild(_newNode3);
                          }
                          break;
                        }
                      default:
                        {
                          var _newNode4 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode4) {
                            _newNode4 = new Node("rate");
                            var labelRate = _newNode4.addComponent(Label);
                            labelRate.font = KrakenUtils.instance.arrFontData["theme314_font_respinpick"];
                            labelRate.fontSize = 50;
                            labelRate.string = Common.ChangeMoneyShow(parseFloat(this.itemInfo.pearl), 2);
                            this.Node_symbol.addChild(_newNode4);
                          }
                          break;
                        }
                    }
                  }
                  break;
                }
              case eSymbol.yellowPearl:
                {
                  // this.Node_symbol.scale = v3(1, 1, 1);

                  if (this.itemInfo.pearl) {
                    switch (this.itemInfo.pearl) {
                      case "2":
                      case "5":
                      case "10":
                      case "20":
                        {
                          var _newNode5 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode5) {
                            _newNode5 = new Node("rate");
                            var _sprite4 = _newNode5.addComponent(Sprite);
                            _sprite4.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_mult" + this.itemInfo.pearl];
                            this.Node_symbol.addChild(_newNode5);
                          }
                          break;
                        }
                      case "pick":
                        {
                          var _newNode6 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode6) {
                            _newNode6 = new Node("rate");
                            var spine = _newNode6.addComponent(sp.Skeleton);
                            spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                            spine.premultipliedAlpha = false;
                            this.Node_symbol.addChild(_newNode6);
                          }
                          this.scheduleOnce(function () {
                            var spine0 = _newNode6.getComponent(sp.Skeleton);
                            spine0.setAnimation(0, "ocean_intro", false);
                            spine0.addAnimation(0, "ocean_idle", true);
                          });
                          break;
                        }
                      case "power":
                        {
                          var _newNode7 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode7) {
                            _newNode7 = new Node("rate");
                            var _spine = _newNode7.addComponent(sp.Skeleton);
                            _spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                            _spine.premultipliedAlpha = false;
                            this.Node_symbol.addChild(_newNode7);
                          }
                          this.scheduleOnce(function () {
                            var spine0 = _newNode7.getComponent(sp.Skeleton);
                            spine0.setAnimation(0, "krakens_intro", false);
                            spine0.addAnimation(0, "krakens_idle", true);
                          });
                          break;
                        }
                    }
                  }
                  break;
                }
            }
          } else {
            this.Node_symbol.scale = v3(1, 1, 1);
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
              itemSpine.skeletonData = KrakenUtils.instance.getSkeletonData(Sym);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              switch (Sym) {
                case eSymbol.Scatter:
                  {
                    if (_this2._iCol < KrakenModel.instance.curSpecialStartCol && KrakenModel.instance.specialSymbol == eSymbol.Scatter) {
                      itemSpine.setAnimation(0, "special_idle", true);
                    } else {
                      itemSpine.setAnimation(0, "normal_intro", false);
                      itemSpine.addAnimation(0, "normal_idle", true);
                    }
                    break;
                  }
                case eSymbol.whitePearl:
                  {
                    // this.Node_symbol.scale = v3(1, 1, 1);

                    itemSpine.setAnimation(0, "intro", false);
                    itemSpine.addAnimation(0, "idle", true);
                    if (_this2.itemInfo.pearl) {
                      switch (_this2.itemInfo.pearl) {
                        case "mini":
                          {
                            var _newNode8 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode8) {
                              _newNode8 = new Node("rate");
                              var _sprite5 = _newNode8.addComponent(Sprite);
                              _sprite5.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp4"];
                              _this2.Node_symbol.addChild(_newNode8);
                            }
                            var scale = 110 / _newNode8.getComponent(UITransform).width;
                            _newNode8.scale = v3(scale, scale, scale);
                            break;
                          }
                        case "minor":
                          {
                            var _newNode9 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode9) {
                              _newNode9 = new Node("rate");
                              var _sprite6 = _newNode9.addComponent(Sprite);
                              _sprite6.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp3"];
                              _this2.Node_symbol.addChild(_newNode9);
                            }
                            var _scale = 110 / _newNode9.getComponent(UITransform).width;
                            _newNode9.scale = v3(_scale, _scale, _scale);
                            break;
                          }
                        case "major":
                          {
                            var _newNode10 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode10) {
                              _newNode10 = new Node("rate");
                              var _sprite7 = _newNode10.addComponent(Sprite);
                              _sprite7.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp2"];
                              _this2.Node_symbol.addChild(_newNode10);
                            }
                            var _scale2 = 110 / _newNode10.getComponent(UITransform).width;
                            _newNode10.scale = v3(_scale2, _scale2, _scale2);
                            break;
                          }
                        case "grand":
                          {
                            var _newNode11 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode11) {
                              _newNode11 = new Node("rate");
                              var _sprite8 = _newNode11.addComponent(Sprite);
                              _sprite8.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp1"];
                              _this2.Node_symbol.addChild(_newNode11);
                            }
                            var _scale3 = 110 / _newNode11.getComponent(UITransform).width;
                            _newNode11.scale = v3(_scale3, _scale3, _scale3);
                            break;
                          }
                        default:
                          {
                            var _newNode12 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode12) {
                              _newNode12 = new Node("rate");
                              var _labelRate = _newNode12.addComponent(Label);
                              _labelRate.font = KrakenUtils.instance.arrFontData["theme314_font_respinpick"];
                              _labelRate.fontSize = 50;
                              _labelRate.string = Common.ChangeMoneyShow(parseFloat(_this2.itemInfo.pearl), 2);
                              _this2.Node_symbol.addChild(_newNode12);
                            }
                            _newNode12.scale = v3(1, 1, 1);
                            break;
                          }
                      }
                    }
                    break;
                  }
                case eSymbol.yellowPearl:
                  {
                    // this.Node_symbol.scale = v3(1, 1, 1);

                    itemSpine.setAnimation(0, "normal_intro", false);
                    itemSpine.addAnimation(0, "normal_idle", true);
                    if (_this2.itemInfo.pearl) {
                      switch (_this2.itemInfo.pearl) {
                        case "2":
                        case "5":
                        case "10":
                        case "20":
                          {
                            var _newNode13 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode13) {
                              _newNode13 = new Node("rate");
                              var _sprite9 = _newNode13.addComponent(Sprite);
                              _sprite9.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_mult" + _this2.itemInfo.pearl];
                              _this2.Node_symbol.addChild(_newNode13);
                            }
                            var _scale4 = 80 / _newNode13.getComponent(UITransform).width;
                            _newNode13.scale = v3(_scale4, _scale4, _scale4);
                            break;
                          }
                        case "pick":
                          {
                            var _newNode14 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode14) {
                              _newNode14 = new Node("rate");
                              var _spine2 = _newNode14.addComponent(sp.Skeleton);
                              _spine2.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                              _spine2.premultipliedAlpha = false;
                              _this2.Node_symbol.addChild(_newNode14);
                            }
                            _newNode14.scale = v3(1, 1, 1);
                            _this2.scheduleOnce(function () {
                              var spine0 = _newNode14.getComponent(sp.Skeleton);
                              spine0.setAnimation(0, "ocean_intro", false);
                              spine0.addAnimation(0, "ocean_idle", true);
                            });
                            break;
                          }
                        case "power":
                          {
                            var _newNode15 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode15) {
                              _newNode15 = new Node("rate");
                              var _spine3 = _newNode15.addComponent(sp.Skeleton);
                              _spine3.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                              _spine3.premultipliedAlpha = false;
                              _this2.Node_symbol.addChild(_newNode15);
                            }
                            _newNode15.scale = v3(1, 1, 1);
                            _this2.scheduleOnce(function () {
                              var spine0 = _newNode15.getComponent(sp.Skeleton);
                              spine0.setAnimation(0, "krakens_intro", false);
                              spine0.addAnimation(0, "krakens_idle", true);
                            });
                            break;
                          }
                      }
                    }
                    break;
                  }
                default:
                  {
                    itemSpine.setAnimation(0, "idle", true);
                    break;
                  }
              }
            });
          }
        };
        _proto.doSuperFreeChangeResum = function doSuperFreeChangeResum(resumInfo) {
          this.itemInfo = {
            Sym: resumInfo.Sym,
            IsReward: false,
            pearl: resumInfo.pearl
          };
          this.updateIcon(this.itemInfo.Sym, true);
          this.changeParent(this.Node_effectRoot);
          this.updateZIndex(true);
        };
        _proto.doSuperFreeChange = function doSuperFreeChange(symbol) {
          var _this3 = this;
          if (symbol === void 0) {
            symbol = null;
          }
          var Node_effectRoot_free = this.Node_effectRoot.parent.getChildByName("Node_effectRoot_free");
          var newSymbol = instantiate(this.Node_symbol);
          var iCol = this._iCol;
          var iRow = Math.floor((this.node.position.y - eConstDef.cSymbolStartY) / eConstDef.cSymbolH);
          newSymbol.name = "superFree_" + iCol + "_" + iRow;
          Node_effectRoot_free.addChild(newSymbol);
          KrakenModel.instance.superFreeList.push({
            node: newSymbol,
            itemInfo: {
              Sym: this.itemInfo.Sym,
              IsReward: this.itemInfo.IsReward,
              iRow: iRow,
              pearl: this.itemInfo.pearl,
              iCol: iCol,
              isScale: false
            }
          });
          var curSym = this.itemInfo.Sym;
          newSymbol.scale = v3(1, 1, 1);
          var itemSprite = newSymbol.getComponent(Sprite);
          if (itemSprite) {
            itemSprite.enabled = false;
            itemSprite.destroy();
          }
          this.scheduleOnce(function () {
            var itemSpine = newSymbol.getComponent(sp.Skeleton);
            if (!itemSpine) {
              itemSpine = newSymbol.addComponent(sp.Skeleton);
            }
            itemSpine.skeletonData = KrakenUtils.instance.getSkeletonData(curSym);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            switch (curSym) {
              case eSymbol.yellowPearl:
                {
                  itemSpine.setAnimation(0, "normal_intro", false);
                  itemSpine.addAnimation(0, "normal_idle", true);
                  break;
                }
              case eSymbol.whitePearl:
                {
                  itemSpine.setAnimation(0, "intro", false);
                  itemSpine.addAnimation(0, "idle", true);
                  break;
                }
            }
          });
          this.scheduleOnce(function () {
            _this3.changeParent();
            var newSym = symbol ? symbol : Math.floor(Math.random() * eSymbol.Q) + 2;
            _this3.itemInfo = {
              Sym: newSym,
              IsReward: false,
              iRow: iRow,
              iCol: iCol,
              pearl: null
            };
            var nodeRate = _this3.Node_symbol.getChildByName("rate");
            if (nodeRate) {
              nodeRate.destroyFromParent();
            }
            _this3.updateIcon(newSym, false);
          }, 0.1);
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
            case eSymbol.Scatter:
              {
                _zIndex = KrakenModel.instance.specialStartCol > 0 ? 2 * eZindex.SPECIAL : eZindex.icon_scatter + addIndex;
                break;
              }
            case eSymbol.whitePearl:
            case eSymbol.yellowPearl:
              {
                _zIndex = eZindex.icon_scatter + addIndex;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon + addIndex;
                break;
              }
          }
          if (isSpine) {
            this.node.getComponent(UITransform).priority = eZindex.iconWin + addIndex;
            if (this._iCol < KrakenModel.instance.curSpecialStartCol && (this.itemInfo.Sym == eSymbol.Scatter || this.itemInfo.Sym >= eSymbol.whitePearl)) {
              this.node.getComponent(UITransform).priority = _zIndex;
            } else {
              this.Node_symbol.getComponent(UITransform).priority = _zIndex;
            }
          } else {
            _zIndex = KrakenModel.instance.specialStartCol > 0 && this._iCol == KrakenModel.instance.curSpecialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
            this.node.getComponent(UITransform).priority = _zIndex;
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (KrakenModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.position = v3(this.node.position.x, this.node.position.y - offset, 0);
          var posSide = -2.5 * eConstDef.cSymbolH;
          if (this.node.position.y <= posSide) {
            ret = false;
          }
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this4 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this.itemStatus = eItemStatus.STOP;
          return new Promise(function (resolve, reject) {
            var pos_0 = _this4.node.position.y + 2 + offset;
            var pos_1 = _this4.node.position.y + offset;
            tween(_this4.node).to(0.15, {
              position: v3(_this4.node.position.x, pos_0, 0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this4.node.position.x, pos_1, 0)
            }, {
              easing: "cubicIn"
            }).call(function () {
              var isSpine = _this4.itemInfo.Sym < eSymbol.Wild || _this4.itemInfo.Sym >= eSymbol.whitePearl;
              _this4.updateIcon(_this4.itemInfo.Sym, isSpine);
              _this4.updateZIndex(true);
              switch (_this4.itemInfo.Sym) {
                case eSymbol.Scatter:
                  {
                    KrakenModel.instance.scatterCounts++;
                    KrakenUtils.instance.playOneShot("sound/scatter_land" + KrakenModel.instance.scatterCounts);
                    _this4.changeParent(_this4.Node_effectRoot);
                    break;
                  }
                case eSymbol.whitePearl:
                  {
                    KrakenUtils.instance.playOneShot("sound/bonus_land1");
                    _this4.changeParent(_this4.Node_effectRoot);
                    break;
                  }
                case eSymbol.yellowPearl:
                  {
                    KrakenUtils.instance.playOneShot("sound/bonus_land2");
                    _this4.changeParent(_this4.Node_effectRoot);
                    break;
                  }
                case eSymbol.Wild:
                  {
                    var wPos = _this4.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                    wPos = _this4.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                    EventManager.instance.emit(eEvent.onCollectCoin, wPos);
                    break;
                  }
              }
              resolve();
            }).start();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this5 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            //|| (KrakenModel.instance.freeStatus != KrakenDef.eRunStatus.NONE && this.itemInfo.Sym > KrakenDef.eSymbol.Wild)
            if (_this5.itemInfo.IsReward) {
              _this5.scheduleOnce(function () {
                //中奖图标音效
                switch
                  // case KrakenDef.eSymbol.Deer:
                  // case KrakenDef.eSymbol.Wolf:
                  // case KrakenDef.eSymbol.Bear:
                  // case KrakenDef.eSymbol.Eagle:
                  // case KrakenDef.eSymbol.Cattle: {
                  //     KrakenUtils.instance.playOneShot(`sound/Symbol${6 + KrakenDef.eSymbol.Deer - this.itemInfo.Sym}`);
                  //     break;
                  // }
                (_this5.itemInfo.Sym) {}
                _this5.updateSymbol(true);

                //添加中奖效果
                var newWinEffect = instantiate(_this5.Node_winEffect);
                var wPos = _this5.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                wPos = _this5.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                newWinEffect.position = wPos;
                _this5.Node_effectRoot.addChild(newWinEffect);
                resolve();
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doPearlBlink = function doPearlBlink() {
          this.itemStatus = eItemStatus.Blink;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            switch (this.itemInfo.Sym) {
              case eSymbol.yellowPearl:
                {
                  itemSpine.setAnimation(0, "respin_intro", false);
                  itemSpine.addAnimation(0, "respin_idle", true);
                  break;
                }
              case eSymbol.whitePearl:
                {
                  itemSpine.setAnimation(0, "respin_idle", true);
                  break;
                }
            }
          }
        };
        _proto.stopPearlBlink = function stopPearlBlink() {
          this.itemStatus = eItemStatus.STOP;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            switch (this.itemInfo.Sym) {
              case eSymbol.yellowPearl:
                {
                  itemSpine.setAnimation(0, "normal_idle", true);
                  break;
                }
              case eSymbol.whitePearl:
                {
                  itemSpine.setAnimation(0, "idle", true);
                  break;
                }
            }
          }
        };
        _proto.doScatterBlink = function doScatterBlink() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.itemStatus = eItemStatus.Blink;
            var itemSpine = _this6.Node_symbol.getComponent(sp.Skeleton);
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
        return Kraken_symbolItem;
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

System.register("chunks:///_virtual/Kraken_symbolItemSeaMonster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './EventManager.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, sp, Sprite, v3, Node, Label, UITransform, tween, instantiate, Component, KrakenModel, eSymbol, eZindex, eRunStatus, eEvent, eConstDef, EventManager, KrakenUtils, Common;
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
      v3 = module.v3;
      Node = module.Node;
      Label = module.Label;
      UITransform = module.UITransform;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eConstDef = module.eConstDef;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "315eek9EBVCV6mDiB2mLIuF", "Kraken_symbolItemSeaMonster", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eItemStatus = exports('eItemStatus', {
        NONE: 0,
        STOP: 1,
        doChange: 2,
        doEffect: 3,
        CLEAR: 4,
        Blink: 5,
        DROP: 6,
        END: 7
      });
      var Kraken_symbolItemSeaMonster = exports('default', (_dec = ccclass("Kraken_symbolItemSeaMonster"), _dec2 = menu("KrakenGame/Kraken_symbolItemSeaMonster"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_symbolItemSeaMonster, _Component);
        function Kraken_symbolItemSeaMonster() {
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
          return _this;
        }
        var _proto = Kraken_symbolItemSeaMonster.prototype;
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

        _proto.initItem = function initItem(info, isHorizontal, iCol, Node_effectRoot, isEnter) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (Node_effectRoot === void 0) {
            Node_effectRoot = null;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          this.itemStatus = eItemStatus.NONE;
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          this.Node_effectRoot = Node_effectRoot;
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          this.itemInfo = info;
          var isSpecial = info.Sym < eSymbol.Wild || info.Sym >= eSymbol.whitePearl;
          this.updateSymbol(isSpecial, isEnter);
          if (isEnter && isSpecial) {
            this.changeParent(this.Node_effectRoot);
          }
        };
        _proto.updateIcon = function updateIcon(Sym, isSpine, isEnter) {
          var _this2 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          isSpine = Sym < eSymbol.Wild || Sym >= eSymbol.whitePearl;
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = KrakenUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
            this.Node_symbol.scale = v3(0.5, 0.5, 0.5);
            switch (Sym) {
              case eSymbol.whitePearl:
                {
                  if (this.itemInfo.pearl) {
                    switch (this.itemInfo.pearl) {
                      case "mini":
                        {
                          var newNode = this.Node_symbol.getChildByName("rate");
                          if (!newNode) {
                            newNode = new Node("rate");
                            var sprite = newNode.addComponent(Sprite);
                            sprite.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp4"];
                            this.Node_symbol.addChild(newNode);
                          }
                          break;
                        }
                      case "minor":
                        {
                          var _newNode = this.Node_symbol.getChildByName("rate");
                          if (!_newNode) {
                            _newNode = new Node("rate");
                            var _sprite = _newNode.addComponent(Sprite);
                            _sprite.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp3"];
                            this.Node_symbol.addChild(_newNode);
                          }
                          break;
                        }
                      case "major":
                        {
                          var _newNode2 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode2) {
                            _newNode2 = new Node("rate");
                            var _sprite2 = _newNode2.addComponent(Sprite);
                            _sprite2.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp2"];
                            this.Node_symbol.addChild(_newNode2);
                          }
                          break;
                        }
                      case "grand":
                        {
                          var _newNode3 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode3) {
                            _newNode3 = new Node("rate");
                            var _sprite3 = _newNode3.addComponent(Sprite);
                            _sprite3.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp1"];
                            this.Node_symbol.addChild(_newNode3);
                          }
                          break;
                        }
                      default:
                        {
                          var _newNode4 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode4) {
                            _newNode4 = new Node("rate");
                            var labelRate = _newNode4.addComponent(Label);
                            labelRate.font = KrakenUtils.instance.arrFontData["theme314_font_respinpick"];
                            labelRate.fontSize = 50;
                            labelRate.string = Common.ChangeMoneyShow(parseFloat(this.itemInfo.pearl), 2);
                            this.Node_symbol.addChild(_newNode4);
                          }
                          break;
                        }
                    }
                  }
                  break;
                }
              case eSymbol.yellowPearl:
                {
                  if (this.itemInfo.pearl) {
                    switch (this.itemInfo.pearl) {
                      case "2":
                      case "5":
                      case "10":
                      case "20":
                        {
                          var _newNode5 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode5) {
                            _newNode5 = new Node("rate");
                            var _sprite4 = _newNode5.addComponent(Sprite);
                            _sprite4.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_mult" + this.itemInfo.pearl];
                            this.Node_symbol.addChild(_newNode5);
                          }
                          break;
                        }
                      case "pick":
                        {
                          var _newNode6 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode6) {
                            _newNode6 = new Node("rate");
                            var spine = _newNode6.addComponent(sp.Skeleton);
                            spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                            spine.premultipliedAlpha = false;
                            this.Node_symbol.addChild(_newNode6);
                          }
                          this.scheduleOnce(function () {
                            var spine0 = _newNode6.getComponent(sp.Skeleton);
                            // if (isEnter) {
                            //     spine0.setAnimation(0, "ocean_idle", true);
                            // } else {
                            //     spine0.setAnimation(0, "ocean_intro", false);
                            //     spine0.addAnimation(0, "ocean_idle", true);
                            // }

                            spine0.setAnimation(0, "ocean_idle", true);
                          });
                          break;
                        }
                      case "power":
                        {
                          var _newNode7 = this.Node_symbol.getChildByName("rate");
                          if (!_newNode7) {
                            _newNode7 = new Node("rate");
                            var _spine = _newNode7.addComponent(sp.Skeleton);
                            _spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                            _spine.premultipliedAlpha = false;
                            this.Node_symbol.addChild(_newNode7);
                          }
                          this.scheduleOnce(function () {
                            var spine0 = _newNode7.getComponent(sp.Skeleton);
                            spine0.setAnimation(0, "krakens_idle", true);
                          });
                          break;
                        }
                    }
                  }
                  break;
                }
            }
          } else {
            this.Node_symbol.scale = v3(1, 1, 1);
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
              itemSpine.skeletonData = KrakenUtils.instance.getSkeletonData(Sym);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              switch (Sym) {
                case eSymbol.Scatter:
                  {
                    if (_this2._iCol < KrakenModel.instance.curSpecialStartCol) {
                      itemSpine.setAnimation(0, "special_idle", true);
                    } else {
                      itemSpine.setAnimation(0, "normal_intro", false);
                      itemSpine.addAnimation(0, "normal_idle", true);
                    }
                    break;
                  }
                case eSymbol.whitePearl:
                  {
                    // this.Node_symbol.scale = v3(1, 1, 1);

                    // if (isEnter) {
                    //     itemSpine.setAnimation(0, "idle", true);
                    // } else {
                    //     itemSpine.setAnimation(0, "intro", false);
                    //     itemSpine.addAnimation(0, "idle", true);
                    // }
                    itemSpine.setAnimation(0, "idle", true);
                    if (_this2.itemInfo.pearl) {
                      switch (_this2.itemInfo.pearl) {
                        case "mini":
                          {
                            var _newNode8 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode8) {
                              _newNode8 = new Node("rate");
                              var _sprite5 = _newNode8.addComponent(Sprite);
                              _sprite5.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp4"];
                              _this2.Node_symbol.addChild(_newNode8);
                            }
                            var scale = 110 / _newNode8.getComponent(UITransform).width;
                            _newNode8.scale = v3(scale, scale, scale);
                            break;
                          }
                        case "minor":
                          {
                            var _newNode9 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode9) {
                              _newNode9 = new Node("rate");
                              var _sprite6 = _newNode9.addComponent(Sprite);
                              _sprite6.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp3"];
                              _this2.Node_symbol.addChild(_newNode9);
                            }
                            var _scale = 110 / _newNode9.getComponent(UITransform).width;
                            _newNode9.scale = v3(_scale, _scale, _scale);
                            break;
                          }
                        case "major":
                          {
                            var _newNode10 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode10) {
                              _newNode10 = new Node("rate");
                              var _sprite7 = _newNode10.addComponent(Sprite);
                              _sprite7.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp2"];
                              _this2.Node_symbol.addChild(_newNode10);
                            }
                            var _scale2 = 110 / _newNode10.getComponent(UITransform).width;
                            _newNode10.scale = v3(_scale2, _scale2, _scale2);
                            break;
                          }
                        case "grand":
                          {
                            var _newNode11 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode11) {
                              _newNode11 = new Node("rate");
                              var _sprite8 = _newNode11.addComponent(Sprite);
                              _sprite8.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_jp1"];
                              _this2.Node_symbol.addChild(_newNode11);
                            }
                            var _scale3 = 110 / _newNode11.getComponent(UITransform).width;
                            _newNode11.scale = v3(_scale3, _scale3, _scale3);
                            break;
                          }
                        default:
                          {
                            var _newNode12 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode12) {
                              _newNode12 = new Node("rate");
                              var _labelRate = _newNode12.addComponent(Label);
                              _labelRate.font = KrakenUtils.instance.arrFontData["theme314_font_respinpick"];
                              _labelRate.fontSize = 50;
                              _labelRate.string = Common.ChangeMoneyShow(parseFloat(_this2.itemInfo.pearl), 2);
                              _this2.Node_symbol.addChild(_newNode12);
                            }
                            _newNode12.scale = v3(1, 1, 1);
                            break;
                          }
                      }
                    }
                    break;
                  }
                case eSymbol.yellowPearl:
                  {
                    // this.Node_symbol.scale = v3(1, 1, 1);
                    // if (isEnter) {
                    //     itemSpine.setAnimation(0, "normal_idle", true);
                    // } else {
                    //     itemSpine.setAnimation(0, "normal_intro", false);
                    //     itemSpine.addAnimation(0, "normal_idle", true);
                    // }
                    itemSpine.setAnimation(0, "normal_idle", true);
                    if (_this2.itemInfo.pearl) {
                      switch (_this2.itemInfo.pearl) {
                        case "2":
                        case "5":
                        case "10":
                        case "20":
                          {
                            var _newNode13 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode13) {
                              _newNode13 = new Node("rate");
                              var _sprite9 = _newNode13.addComponent(Sprite);
                              _sprite9.spriteFrame = KrakenUtils.instance.arrIconSpriteFrame["symbols_symbol_mult" + _this2.itemInfo.pearl];
                              _this2.Node_symbol.addChild(_newNode13);
                            }
                            var _scale4 = 80 / _newNode13.getComponent(UITransform).width;
                            _newNode13.scale = v3(_scale4, _scale4, _scale4);
                            break;
                          }
                        case "pick":
                          {
                            var _newNode14 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode14) {
                              _newNode14 = new Node("rate");
                              var _spine2 = _newNode14.addComponent(sp.Skeleton);
                              _spine2.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                              _spine2.premultipliedAlpha = false;
                              _this2.Node_symbol.addChild(_newNode14);
                            }
                            _newNode14.scale = v3(1, 1, 1);
                            _this2.scheduleOnce(function () {
                              var spine0 = _newNode14.getComponent(sp.Skeleton);
                              // if (isEnter) {
                              //     spine0.setAnimation(0, "ocean_idle", true);
                              // } else {
                              //     spine0.setAnimation(0, "ocean_intro", false);
                              //     spine0.addAnimation(0, "ocean_idle", true);
                              // }
                              spine0.setAnimation(0, "ocean_idle", true);
                            });
                            break;
                          }
                        case "power":
                          {
                            var _newNode15 = _this2.Node_symbol.getChildByName("rate");
                            if (!_newNode15) {
                              _newNode15 = new Node("rate");
                              var _spine3 = _newNode15.addComponent(sp.Skeleton);
                              _spine3.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus_tittle"];
                              _spine3.premultipliedAlpha = false;
                              _this2.Node_symbol.addChild(_newNode15);
                            }
                            _newNode15.scale = v3(1, 1, 1);
                            _this2.scheduleOnce(function () {
                              var spine0 = _newNode15.getComponent(sp.Skeleton);
                              spine0.setAnimation(0, "krakens_idle", true);
                            });
                            break;
                          }
                      }
                    }
                    break;
                  }
                default:
                  {
                    itemSpine.setAnimation(0, "idle", true);
                    break;
                  }
              }
            });
          }
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
        _proto.updateSymbol = function updateSymbol(isSpine, isEnter) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          this.updateIcon(this.itemInfo.Sym, isSpine, isEnter);
          this.updateZIndex(isSpine);
        };
        _proto.updateZIndex = function updateZIndex(isSpine) {
          var wPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          wPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
          var addIndex = Math.floor(-wPos.y + 1000);
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.Scatter:
              {
                _zIndex = KrakenModel.instance.specialStartCol > 0 ? 2 * eZindex.SPECIAL : eZindex.icon_scatter + addIndex;
                break;
              }
            case eSymbol.whitePearl:
              {
                _zIndex = eZindex.icon_whitePearl + addIndex;
                break;
              }
            case eSymbol.yellowPearl:
              {
                _zIndex = eZindex.icon_yellowPearl + addIndex;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon + addIndex;
                break;
              }
          }
          if (isSpine) {
            this.node.getComponent(UITransform).priority = eZindex.iconWin + addIndex;
            if (this.itemInfo.Sym == eSymbol.Scatter && this._iCol < KrakenModel.instance.curSpecialStartCol) {
              this.node.getComponent(UITransform).priority = _zIndex;
            } else if (this.itemInfo.Sym >= eSymbol.whitePearl) {
              this.Node_symbol.getComponent(UITransform).priority = _zIndex;
            }
          } else {
            _zIndex = KrakenModel.instance.specialStartCol > 0 && this._iCol == KrakenModel.instance.curSpecialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
            this.node.getComponent(UITransform).priority = _zIndex;
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (KrakenModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.position = v3(this.node.position.x, this.node.position.y - offset, 0);
          var posSide = -250;
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
              var isIdle = _this3.itemInfo.Sym > eSymbol.Wild;
              _this3.updateIcon(_this3.itemInfo.Sym, isIdle);
              switch (_this3.itemInfo.Sym) {
                case eSymbol.Scatter:
                  {
                    KrakenModel.instance.scatterCounts++;
                    KrakenUtils.instance.playOneShot("sound/scatter_land" + KrakenModel.instance.scatterCounts);
                    _this3.changeParent(_this3.Node_effectRoot);
                    break;
                  }
                case eSymbol.whitePearl:
                  {
                    KrakenUtils.instance.playOneShot("sound/bonus_land1");
                    _this3.changeParent(_this3.Node_effectRoot);
                    break;
                  }
                case eSymbol.yellowPearl:
                  {
                    KrakenUtils.instance.playOneShot("sound/bonus_land2");
                    _this3.changeParent(_this3.Node_effectRoot);
                    break;
                  }
              }
              _this3.updateZIndex(eRunStatus.STOP);
              resolve();
            }).start();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this4 = this;
          this.itemStatus = eItemStatus.doEffect;
          return new Promise(function (resolve, reject) {
            //|| (KrakenModel.instance.freeStatus != KrakenDef.eRunStatus.NONE && this.itemInfo.Sym > KrakenDef.eSymbol.Wild)
            if (_this4.itemInfo.IsReward) {
              _this4.scheduleOnce(function () {
                //中奖图标音效
                switch (_this4.itemInfo.Sym) {
                  // case KrakenDef.eSymbol.Deer:
                  // case KrakenDef.eSymbol.Wolf:
                  // case KrakenDef.eSymbol.Bear:
                  // case KrakenDef.eSymbol.Eagle:
                  // case KrakenDef.eSymbol.Cattle: {
                  //     KrakenUtils.instance.playOneShot(`sound/Symbol${6 + KrakenDef.eSymbol.Deer - this.itemInfo.Sym}`);
                  //     break;
                  // }
                  default:
                    {
                      KrakenUtils.instance.playOneShot("sound/Symbol12");
                      break;
                    }
                }
                _this4.updateSymbol(false);
                var newWinEffect = instantiate(_this4.Node_winEffect);
                _this4.node.addChild(newWinEffect);
                resolve();
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doScatterBlink = function doScatterBlink() {
          this.itemStatus = eItemStatus.Blink;
          this.updateIcon(this.itemInfo.Sym, false);
          this.updateZIndex(eRunStatus.CLEAR);
        };
        _proto.stopScatterBlink = function stopScatterBlink() {
          this.itemStatus = eItemStatus.STOP;
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, "scatter_idle", true);
          }
          var addIndex = Math.floor((-this.node.position.y + eConstDef.cSymbolH * 6) / eConstDef.cSymbolH);
          this.node.getComponent(UITransform).priority = eZindex.icon + addIndex;
        };
        _proto.doEndPearlEffect = function doEndPearlEffect() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            //添加白珍珠被收取闪光
            var newNode = new Node("fanbei");
            var spine = newNode.addComponent(sp.Skeleton);
            spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus2_fanbei"];
            spine.premultipliedAlpha = false;
            _this5.Node_symbol.addChild(newNode);
            _this5.scheduleOnce(function () {
              var spine = newNode.getComponent(sp.Skeleton);
              spine.setAnimation(0, "intro", false);
              spine.addAnimation(0, "finish", false);
              spine.setCompleteListener(function () {
                spine.setCompleteListener(null);
                newNode.destroyFromParent();
              });
            });
            _this5.scheduleOnce(function () {
              resolve();
            }, 0.5);
          });
        };
        _proto.doPearlEffect = function doPearlEffect(strPearl) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            switch (_this6.itemInfo.Sym) {
              case eSymbol.whitePearl:
                {
                  //白色珍珠被拾取
                  switch (_this6.itemInfo.pearl) {
                    case "grand":
                    case "mini":
                    case "minor":
                    case "major":
                      {
                        resolve();
                        break;
                      }
                    default:
                      {
                        //添加白珍珠被收取闪光
                        var newNode = new Node("fanbei");
                        var spine = newNode.addComponent(sp.Skeleton);
                        spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus2_fanbei"];
                        spine.premultipliedAlpha = false;
                        _this6.Node_symbol.addChild(newNode);
                        _this6.scheduleOnce(function () {
                          var spine = newNode.getComponent(sp.Skeleton);
                          spine.setAnimation(0, "intro", false);
                          spine.addAnimation(0, "finish", false);
                          spine.setCompleteListener(function () {
                            spine.setCompleteListener(null);
                            newNode.destroyFromParent();
                          });
                        });
                        _this6.scheduleOnce(function () {
                          resolve();
                        }, 0.5);
                        _this6.scheduleOnce(function () {
                          if (strPearl == "2" || strPearl == "5" || strPearl == "10" || strPearl == "20") {
                            var labelRate = _this6.Node_symbol.getChildByName("rate").getComponent(Label);
                            _this6.itemInfo.pearl = "" + parseFloat(strPearl) * parseFloat(_this6.itemInfo.pearl);
                            labelRate.string = Common.ChangeMoneyShow(parseFloat(_this6.itemInfo.pearl), 2);
                          }
                        }, 0.25);
                        break;
                      }
                  }
                  break;
                }
              case eSymbol.yellowPearl:
                {
                  //黄珍珠闪动 开始拾取白珍珠
                  var itemSpine = _this6.Node_symbol.getComponent(sp.Skeleton);
                  itemSpine.setAnimation(0, "respin_intro", false);
                  itemSpine.addAnimation(0, "respin_idle", true);
                  switch (_this6.itemInfo.pearl) {
                    case "pick":
                    case "power":
                      {
                        var rateSpine = _this6.Node_symbol.getChildByName("rate").getComponent(sp.Skeleton);
                        var strAni = _this6.itemInfo.pearl == "power" ? "krakens" : "ocean";
                        rateSpine.setAnimation(0, strAni + "_light", false);
                        rateSpine.addAnimation(0, strAni + "_idle", true);
                        break;
                      }
                  }
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    resolve();
                  });
                  break;
                }
              default:
                {
                  resolve();
                  break;
                }
            }
          });
        };
        _proto.doPearlChange = function doPearlChange(score) {
          var _this7 = this;
          if (score === void 0) {
            score = null;
          }
          var newNode = new Node("fanbei");
          var spine = newNode.addComponent(sp.Skeleton);
          spine.skeletonData = KrakenUtils.instance.arrSkeletonData["icon_bonus2_fanbei"];
          spine.premultipliedAlpha = false;
          this.Node_symbol.addChild(newNode);
          this.scheduleOnce(function () {
            var spine = newNode.getComponent(sp.Skeleton);
            spine.setAnimation(0, "finish", false);
            spine.setCompleteListener(function () {
              spine.setCompleteListener(null);
              newNode.destroyFromParent();
              if (score != null) {
                var sym = Math.floor(Math.random() * eSymbol.Q) + 2;
                _this7.itemInfo = score != null ? {
                  Sym: eSymbol.whitePearl,
                  IsReward: false,
                  iRow: _this7.itemInfo.iRow,
                  pearl: score
                } : {
                  Sym: sym,
                  IsReward: false,
                  iRow: _this7.itemInfo.iRow,
                  pearl: null
                };
                _this7.updateIcon(_this7.itemInfo.Sym, score != null);
              }
            });
            _this7.scheduleOnce(function () {
              var Node_rate = _this7.Node_symbol.getChildByName("rate");
              if (Node_rate) {
                Node_rate.destroyFromParent();
              }
            }, 0.2);
            if (score == null) {
              _this7.scheduleOnce(function () {
                var sym = Math.floor(Math.random() * eSymbol.Q) + 2;
                _this7.itemInfo = score != null ? {
                  Sym: eSymbol.whitePearl,
                  IsReward: false,
                  iRow: _this7.itemInfo.iRow,
                  pearl: score
                } : {
                  Sym: sym,
                  IsReward: false,
                  iRow: _this7.itemInfo.iRow,
                  pearl: null
                };
                _this7.updateIcon(_this7.itemInfo.Sym, score != null);
              }, 0.3);
            }
          }, 0.25);

          // this.scheduleOnce(() => {}, 0.25);
        };

        _proto.playWin = function playWin(isPlay) {
          var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine && this.itemInfo.Sym <= eSymbol.Wild) {
            itemSpine.setAnimation(0, "idle", true);
            // let aniList = KrakenUtils.instance.getSymbolAniName(this.itemInfo.Sym, !isPlay);
            // if (this.itemInfo.Sym == KrakenDef.eSymbol.Wild) {
            //     aniList[0] = "wild_win";
            // }
            // if (itemSpine.animation != aniList[0]) {
            //     itemSpine.setAnimation(0, aniList[0], true);
            // }
          }
        };

        _proto.doWildChange = function doWildChange() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            if (!_this8.Node_symbol.getChildByName("rate")) {
              // let itemSpine = this.Node_symbol.getComponent(sp.Skeleton);

              // itemSpine.setCompleteListener(null);

              // itemSpine.setAnimation(0, "wild_xn", false);
              // itemSpine.addAnimation(0, "wild_xn_idle", true);
              // let newNode = new Node("rate");

              // let labelRate = newNode.addComponent(cc.Label);
              // labelRate.font = KrakenUtils.instance.arrFontData["Add_Fg"];
              // labelRate.fontSize = 70;

              // let rate = [2, 3, 5];
              // labelRate.string = `${rate[this.itemInfo.Sym - KrakenDef.eSymbol.Wild2]}x`;

              // newNode.scale = v3(0.25, 0.25, 0.25);
              // this.Node_symbol.addChild(newNode);

              // KrakenUtils.instance.playOneShot(KrakenDef.eSound.double);

              // tween(newNode)
              //     .to(0.25, { scale: v3(1.25, 1.25, 1.25) }, { easing: "cubicOut" })
              //     .delay(0.25)
              //     .to(0.25, { scale: v3(1, 1, 1) }, { easing: "cubicOut" })
              //     .start();

              _this8.scheduleOnce(function () {
                resolve();
              }, 2);
            } else {
              resolve();
            }
          });
        };
        return Kraken_symbolItemSeaMonster;
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

System.register("chunks:///_virtual/Kraken_symbolSeaMonster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './KrakenDef.ts', './KrakenUtils.ts', './EventManager.ts', './Kraken_symbolItemSeaMonster.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, v3, UIOpacity, Component, KrakenModel, eRunStatus, eConstDef, eSymbol, eEvent, eSound, KrakenUtils, EventManager, Kraken_symbolItemSeaMonster;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Kraken_symbolItemSeaMonster = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "9ae2cpj/JFFppuHBsPVHkl8", "Kraken_symbolSeaMonster", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var speedScale = 0.3;
      var Kraken_symbolSeaMonster = exports('default', (_dec = ccclass("Kraken_symbolSeaMonster"), _dec2 = menu("KrakenGame/Kraken_symbolSeaMonster"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Kraken_symbolSeaMonster, _Component);
        function Kraken_symbolSeaMonster() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "isHorizontal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxIndex", _descriptor3, _assertThisInitialized(_this));
          ////////////////////
          _this.Node_effectRoot = null;
          _this._symbolList = [];
          _this._curLength = 0;
          _this._iCol = 0;
          _this._speed = 0;
          _this.vPearl = 0;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Kraken_symbolSeaMonster.prototype;
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
          if (isEnter === void 0) {
            isEnter = false;
          }
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = Math.floor(Math.random() * eSymbol.TEN) + 1; //this._iCol < 3 ? Math.floor(Math.random() * KrakenDef.eSymbol.J) : Math.floor(Math.random() * KrakenDef.eSymbol.Bottle) + 4;
            itemInfo = {
              Sym: symbol,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.node.addChild(newItem);

          //        //POSITON
          var offsetY = (this._curLength + 1 / 2) * eConstDef.cSymbolH;
          newItem.position = v3(0, -50 + offsetY, 0);

          //        //
          var com = newItem.getComponent(Kraken_symbolItemSeaMonster);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, this.Node_effectRoot, isEnter);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += 1;
          return com;
        };
        _proto.init = function init(itemInfo, Node_effectRoot) {
          if (Node_effectRoot === void 0) {
            Node_effectRoot = null;
          }
          this.Node_effectRoot = Node_effectRoot;
          this._curLength = 0;
          this.addNewItem(itemInfo, true);

          // for (let i = 0; i < this._symbolList.length; i++) {
          //     let symbolNode = this._symbolList[i].node;
          //     let toPos = v3(symbolNode.position.x, symbolNode.position.y, symbolNode.position.z);
          //     symbolNode.setPosition(v3(toPos.x, toPos.y + 375, toPos.z));
          //     tween(symbolNode)
          //         .to(0.2, { position: toPos }, { easing: "cubicOut" })
          //         .to(0.05, { position: v3(toPos.x, toPos.y + 15, toPos.z) }, { easing: "cubicIn" })
          //         .to(0.05, { position: toPos }, { easing: "cubicOut" })
          //         .call(() => {
          //             let symbol = symbolNode.getComponent(Kraken_symbolSeaMonster);
          //             if (symbol.itemInfo.Sym == KrakenDef.eSymbol.Scatter) {
          //                 symbol.changeParent(this.Node_effectRoot);
          //             }
          //         })
          //         .start();
          // }
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
          var _this2 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this2.scheduleOnce(function () {
              _this2._runStatus = eRunStatus.STOPPING;
              _this2.maxIndex = _this2.maxIndex - 1;
            }, stopDelay);

            //            //test
            _this2._resultInfoList = [KrakenUtils.instance.getResult_seaMonster(KrakenModel.instance.betResult.openNum)[_this2._iCol]];

            //            //
            _this2._runStatus = eRunStatus.START;
            _this2._speed = eConstDef.CSpeedStart * speedScale;
            _this2.maxIndex = _this2.maxIndex + 1;
            for (var _iterator = _createForOfIteratorHelperLoose(_this2._symbolList), _step; !(_step = _iterator()).done;) {
              var symbol = _step.value;
              symbol.changeParent();
            }
            var scheduleUpdate = function scheduleUpdate(dt) {
              switch (_this2._runStatus) {
                case eRunStatus.NONE:
                  {
                    if (_this2._curLength > _this2.maxIndex) {
                      _this2._curLength = _this2.maxIndex;
                    }
                    return;
                  }
                case eRunStatus.START:
                  {
                    _this2._speed += eConstDef.CSpeedAdd * speedScale;
                    if (_this2._speed >= eConstDef.cSpeedMax * speedScale) {
                      _this2._speed = eConstDef.cSpeedMax * speedScale;
                      _this2._runStatus = eRunStatus.RUNNING;
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this2._speed -= eConstDef.CSpeedReduse * speedScale;
                    if (_this2._speed < eConstDef.cSpeedMin * speedScale) {
                      _this2._speed = eConstDef.cSpeedMin * speedScale;
                      _this2._runStatus = eRunStatus.STOP;
                      // if (!KrakenModel.instance.isQuickStop) {
                      //     this.maxIndex = this.maxIndex - 1;
                      // }
                    }

                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this2._symbolList.length - 1; i >= 0; i--) {
                      curLength += 1;
                      if (curLength > _this2.maxIndex) {
                        var symbol = _this2._symbolList.shift();
                        symbol.node.removeFromParent();
                        symbol.node.destroy();
                      }
                    }
                    _this2._runStatus = eRunStatus.NONE;
                    _this2.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            KrakenUtils.instance.playOneShot(eSound.reel_stop);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol = _step2.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this2.unschedule(scheduleUpdate);
                            if (KrakenModel.instance.specialStartCol > 0 && _this2._iCol + 1 >= KrakenModel.instance.specialStartCol) {
                              EventManager.instance.emit(eEvent.onSetMask, _this2._iCol + 1, _this2.node.getPosition().x);
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
              var offset = _this2._speed * 0.01667;
              var disLength = offset / eConstDef.cSymbolH;
              _this2._curLength -= disLength;
              var isSide = _this2._curLength <= _this2.maxIndex;
              if (_this2._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this2.maxIndex - _this2._curLength;
                offset = disLength * eConstDef.cSymbolH;
                _this2._curLength = _this2.maxIndex;
                _this2._runStatus = eRunStatus.END;
              }
              for (var _i = _this2._symbolList.length - 1; _i >= 0; _i--) {
                var _symbol2 = _this2._symbolList[_i];
                _symbol2.node.position = v3(_symbol2.node.position.x, _symbol2.node.position.y - offset, 0);
                var posSide = -250;
                if (_this2.node.position.y <= posSide) {
                  _this2._symbolList.splice(_i, 1);
                  _symbol2.node.removeFromParent();
                  _symbol2.node.destroy();
                }
              }
              if (isSide) {
                var result = _this2._runStatus == eRunStatus.STOP && _this2._resultInfoList.length > 0 ? _this2._resultInfoList.shift() : null;
                _this2.addNewItem(result);
              }
            };
            _this2.scheduleOnce(function () {
              _this2.schedule(scheduleUpdate);
            }, startDelay);
          });
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(0.0));
            //            // arrPro.push(symbol.doEffect(Kraken_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Kraken_symbolSeaMonster.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doScatterBlink = /*#__PURE__*/function () {
          var _doScatterBlink = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator3, _step3, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  arrPro = [];
                  for (_iterator3 = _createForOfIteratorHelperLoose(this._symbolList); !(_step3 = _iterator3()).done;) {
                    symbol = _step3.value;
                    if (symbol.itemInfo.Sym == eSymbol.Scatter) {
                      arrPro.push(symbol.doScatterBlink());
                    } else {
                      symbol.updateZIndex(eRunStatus.RUNNING);
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doScatterBlink() {
            return _doScatterBlink.apply(this, arguments);
          }
          return doScatterBlink;
        }();
        _proto.stopScatterBlink = function stopScatterBlink() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._symbolList), _step4; !(_step4 = _iterator4()).done;) {
            var symbol = _step4.value;
            if (symbol.itemInfo.Sym == eSymbol.Scatter) {
              symbol.stopScatterBlink();
            }
          }
        };
        _proto.doWildChange = function doWildChange() {
          var arrPro = [];
          for (var _iterator5 = _createForOfIteratorHelperLoose(this._symbolList), _step5; !(_step5 = _iterator5()).done;) {
            var symbol = _step5.value;
            if (symbol.itemInfo.IsReward && symbol.itemInfo.Sym > eSymbol.Wild) {
              arrPro.push(symbol.doWildChange());
            }
          }
          return Promise.all(arrPro);
        };
        _proto.checkPearlPick = function checkPearlPick() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this._symbolList), _step6; !(_step6 = _iterator6()).done;) {
            var symbol = _step6.value;
            if (symbol.itemInfo.Sym == eSymbol.yellowPearl) {
              return true;
            }
          }
          return false;
        };
        return Kraken_symbolSeaMonster;
      }(Component), _class3.rewardCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KrakenCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './KrakenModel.ts', './I18n.ts', './ViewManager.ts', './KrakenDef.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, KrakenModel, i18n, ViewManager, eProto, eRunStatus, eEvent, eGameStateType, eSymbol, eConstDef, KrakenUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      KrakenModel = module.KrakenModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eGameStateType = module.eGameStateType;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "bca607JiG9J+Z+gje2bwqAy", "KrakenCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KrakenCtrl = exports('KrakenCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(KrakenCtrl, _GameDef$BaseCtrl);
        function KrakenCtrl() {
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
          _this._model = KrakenModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = KrakenCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete KrakenCtrl._instance;
          KrakenCtrl._instance = null;
          KrakenModel.destroy();
          KrakenUtils.destroy();
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
          if (!KrakenModel.instance.gameInfo) {
            return false;
          }
          if (KrakenModel.instance.freeStatus == eRunStatus.NONE && KrakenModel.instance.curBalance < KrakenModel.instance.curBet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            EventManager.instance.emit(eEvent.onSetAuto, "cancel");
            return false;
          }
          gts.Debug.LogWarr("=====reqBet==========");
          this.isReqBet = true;
          KrakenModel.instance.curTotalBet = KrakenModel.instance.curBet;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + KrakenModel.instance.curBet
          });
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          // NetManager.instance.sendOnlineData(KrakenDef.eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotKraken"
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
            RecordType: "slotKraken"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(KrakenDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd == KrakenDef.eProto.HD_Bet) {
          //     data.Data = KrakenUtils.instance.getTestResult();
          // }

          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            // if (data.cmd == KrakenDef.eProto.HD_Enter || (data.Code == 402 && KrakenModel.instance.gameState.GameNo != KrakenModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(KrakenDef.eEvent.onLoadHall);
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
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();
                KrakenModel.instance.gameInfo = data.Data;
                KrakenModel.instance.betResult = data.Data;
                if (KrakenModel.instance.betResult.state != KrakenModel.instance.betResult.nextState) {
                  KrakenModel.instance.betResult.state = KrakenModel.instance.betResult.nextState;
                }
                if (KrakenModel.instance.betResult.state == eGameStateType.seaMonsterState) {
                  var pearlKeys = Object.keys(KrakenModel.instance.betResult.pearl);
                  var pearlKeysChage = Object.keys(KrakenModel.instance.betResult.seaMonsterInfo.changAfterPearl);
                  for (var _i3 = 0, _pearlKeys = pearlKeys; _i3 < _pearlKeys.length; _i3++) {
                    var key = _pearlKeys[_i3];
                    var vKey = KrakenModel.instance.betResult.pearl[key];
                    switch (vKey) {
                      case "power":
                        {
                          if (!pearlKeysChage[key]) {
                            KrakenModel.instance.betResult.openNum[parseInt(key)] = Math.floor(Math.random() * eSymbol.Q) + 2;
                            KrakenModel.instance.betResult.pearl[key] = null;
                          }
                          break;
                        }
                      case "pick":
                        {
                          KrakenModel.instance.betResult.openNum[parseInt(key)] = eSymbol.whitePearl;
                          KrakenModel.instance.betResult.pearl[key] = KrakenModel.instance.betResult.seaMonsterInfo.changAfterPearl[key];
                          break;
                        }
                    }
                  }
                }

                // KrakenModel.instance.betResult.nextState = KrakenDef.eGameStateType.seaMonsterState;

                if (KrakenModel.instance.gameInfo.seaMonsterInfo.superFree || KrakenModel.instance.gameInfo.state == eGameStateType.freeState || KrakenModel.instance.gameInfo.state == eGameStateType.superFreeState) {
                  KrakenModel.instance.remainingCount = KrakenModel.instance.gameInfo.freeInfo.remainingCount;
                  KrakenModel.instance.totalFreeWin = KrakenModel.instance.gameInfo.freeInfo.prizeAmount;
                  KrakenModel.instance.totalCount = KrakenModel.instance.gameInfo.freeInfo.totalCount;
                }
                break;
              }
            // case KrakenDef.eProto.HD_Leave: {
            //     break;
            // }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                KrakenModel.instance.betResult = data.Data;
                if (KrakenModel.instance.betResult.state > eGameStateType.superFreeState) {
                  break;
                }

                //判断是否有2个胡
                KrakenModel.instance.specialStartCol = 0;
                KrakenModel.instance.curSpecialStartCol = -1;
                if (KrakenModel.instance.quickState == 0) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = KrakenModel.instance.betResult.openNum;
                    var iScatterCounts = 0;
                    for (var iCol = 0; iCol < 5; iCol++) {
                      for (var iRow = 0; iRow < eConstDef.CMaxRow; iRow++) {
                        var index = iCol * eConstDef.CMaxRow + iRow;
                        var sym = openResult[index];
                        if (sym == eSymbol.Scatter) {
                          iScatterCounts++;
                        }
                      }
                      if (iScatterCounts > 1 && iCol < 4) {
                        KrakenModel.instance.specialStartCol = iCol + 1;
                        KrakenModel.instance.curSpecialStartCol = iCol + 1;
                        KrakenModel.instance.specialSymbol = eSymbol.Scatter;
                        return;
                      }
                    }
                    if (KrakenModel.instance.specialStartCol == 0 && KrakenModel.instance.betResult.state < eGameStateType.superFreeState) {
                      var iPearCounts = 0;
                      for (var _iCol = 0; _iCol < 5; _iCol++) {
                        for (var _iRow = 0; _iRow < eConstDef.CMaxRow; _iRow++) {
                          var _index = _iCol * eConstDef.CMaxRow + _iRow;
                          var _sym = openResult[_index];
                          if (_sym >= eSymbol.whitePearl) {
                            iPearCounts++;
                          }
                        }
                        if (iPearCounts > 4 && _iCol < 4) {
                          KrakenModel.instance.specialStartCol = _iCol + 1;
                          KrakenModel.instance.curSpecialStartCol = _iCol + 1;
                          KrakenModel.instance.specialSymbol = eSymbol.whitePearl;
                          return;
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==KrakenModel.instance.specialStartCol==" + KrakenModel.instance.specialStartCol);
                }
                if (KrakenModel.instance.freeStatus == eRunStatus.NONE) {
                  KrakenModel.instance.curBalance -= KrakenModel.instance.curTotalBet;
                  KrakenModel.instance.remainingCount = KrakenModel.instance.betResult.freeInfo.remainingCount;
                  KrakenModel.instance.totalCount = KrakenModel.instance.betResult.freeInfo.totalCount;
                }
                if (KrakenModel.instance.betResult.state == eGameStateType.freeState || KrakenModel.instance.betResult.state == eGameStateType.superFreeState || KrakenModel.instance.betResult.nextState == eGameStateType.freeState || KrakenModel.instance.betResult.nextState == eGameStateType.superFreeState) {
                  KrakenModel.instance.totalFreeWin = KrakenModel.instance.betResult.freeInfo.prizeAmount;
                }
                gts.Debug.LogWarr("==KrakenModel.instance.totalFreeTimes==" + KrakenModel.instance.betResult.freeInfo.remainingCount);
                break;
              }
            // case KrakenDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==Kraken=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (KrakenModel.instance.curBalance > 0) {
                  KrakenModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                KrakenModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Kraken=pushWallet==" + _HD_Wallet.VndBalance);
                if (KrakenModel.instance.curBalance > 0) {
                  KrakenModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                KrakenModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return KrakenCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KrakenDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e0e7bhEGdFKzpxf4szOX5I1", "KrakenDef", undefined);
      var cBundle = exports('cBundle', "slotKrakenGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotKraken/HD_info";
        eProto["HD_Bet"] = "slotKraken/HD_Bet";
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
        CMaxCol: 5,
        CMaxRow: 4,
        cSpecialDuration: 1.5,
        cStartDelay: 0.2,
        cQuickStopStartDelay: 0,
        cQuickStopDelay: 0.1,
        cStopDelay: 0.75,
        cSymbolW: 134,
        cSymbolH: 100,
        cSymbolStartY: -200,
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
      var eSymbol = exports('eSymbol', {
        Scatter: 0,
        Wild: 1,
        shaYu: 2,
        anKangYu: 3,
        wuGui: 4,
        shuiMu: 5,
        haiXing: 6,
        beike: 7,
        A: 8,
        K: 9,
        Q: 10,
        J: 11,
        TEN: 12,
        whitePearl: 13,
        yellowPearl: 14
      });
      var arrBase = exports('arrBase', [1000, 2000, 5000, 10000, 20000, 30000, 50000, 100000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2500000]);
      var cMinBase = exports('cMinBase', arrBase[0]);
      var cMaxBase = exports('cMaxBase', arrBase[arrBase.length - 1]);
      var cLockBase = exports('cLockBase', arrBase[2]);
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
        free_bgm: "sound/free_bgm",
        super_bgm: "sound/super_bgm",
        jp_lock: "sound/jp_lock",
        jp_unlock: "sound/jp_unlock",
        nice_win: "sound/nice_win",
        human_big_win: "sound/human_big_win",
        human_huge_win: "sound/human_huge_win",
        human_legendary_win: "sound/human_legendary_win",
        human_massive_win: "sound/human_massive_win",
        wild_collect: "sound/wild_collect",
        reel_stop: "sound/reel_stop",
        water_loop: "sound/water_loop",
        bell: "sound/bell",
        click: "sound/click",
        click_base: "sound/click_base",
        click_chest: "sound/click_chest",
        bonus_land1: "sound/bonus_land1",
        bonus_land2: "sound/bonus_land2",
        bonus_collect: "sound/bonus_collect",
        bonus_notify: "sound/bonus_notify",
        bonus_upgrade: "sound/bonus_upgrade",
        scatter_land1: "sound/scatter_land1",
        scatter_land2: "sound/scatter_land2",
        scatter_land3: "sound/scatter_land3",
        scatter_notify: "sound/scatter_notify",
        transition_free: "sound/transition_free",
        transition_op_respin: "sound/transition_op_respin",
        transition_pick: "sound/transition_pick",
        transition_respin: "sound/transition_respin",
        transition_respin_op: "sound/transition_respin_op",
        chest_pick1: "sound/chest_pick1",
        chest_pick2: "sound/chest_pick2",
        chest_trigger: "sound/chest_trigger",
        chest_upgrade: "sound/chest_upgrade",
        win1: "sound/win1",
        win2: "sound/win2",
        win4: "sound/win4",
        win1end: "sound/win1end",
        win2end: "sound/win2end",
        win4end: "sound/win4end",
        animation_cele: "sound/animation_cele",
        animation_notify: "sound/animation_notify",
        free_start: "sound/free_start",
        free_collect: "sound/free_collect",
        sp_free_start: "sound/sp_free_start",
        sp_free_collect: "sound/sp_free_collect",
        kraken_raise: "sound/kraken_raise",
        respin_bgm: "sound/respin_bgm",
        respin_start: "sound/respin_collect",
        respin_collect: "sound/respin_collect",
        respin_trigger: "sound/respin_collect",
        sp_respin_start: "sound/sp_respin_start",
        pick_bgm: "sound/pick_bgm",
        pick_start: "sound/pick_start",
        fish_collect: "sound/fish_collect",
        fish_pick1: "sound/fish_pick1",
        sp_pick_start: "sound/sp_pick_start",
        jp_trigger: "sound/jp_trigger"
      }); // bigWin = "sound/bgm_bigwin_main",
      // bigWinEnd = "sound/bgm_bigwin_end",
      // freeEndMain = "sound/bgm_totalwin_main",
      // freeEnd = "sound/bgm_totalwin_end",
      // fastspinStart = "sound/fastspinStart",
      // fastspinStop = "sound/fastspinStop",
      // featureBuyBtn = "sound/featureBuyBtn",
      // featureBuyStart = "sound/featureBuyStart",
      // featureBuyCancel = "sound/featureBuyCancel",
      // featureBuyHover = "sound/featureBuyHover",
      // fsTrans = "sound/fsTrans",
      // fsWonRemainingIncrease = "sound/fsWonRemainingIncrease",
      // fsWonTitle = "sound/fsWonTitle",
      // heartbeat = "sound/heartbeat", //期待光效循环播放
      // heartbeatNoise = "sound/heartbeatNoise", //期待光效播放
      // heartbeatSlowdrop = "sound/heartbeatSlowdrop", //期待符号落下
      // multiFly = "sound/multiFly",
      // multiUp = "sound/multiUp",
      // prizeInfobarTotalwinMedEnd = "sound/prizeInfobarTotalwinMedEnd",
      // prizeInfobarTotalwinMedMain = "sound/prizeInfobarTotalwinMedMain",
      // prizeSmallwin = "sound/prizeSmallwin",
      // scatterWinHighlight = "sound/scatterWinHighlight",
      // spinActiveLoop = "sound/spinActiveLoop",
      // spinBtn = "sound/spinBtn",
      // spinStopKraken = "sound/spinStopKraken",
      // spinStopQuick = "sound/spinStopQuick",
      // symScatter = "sound/symScatter",
      // symShrink = "sound/symShrink",
      // symWildExpand = "sound/symWildExpand",
      // symWildSpawn = "sound/symWildSpawn",

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KrakenGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './KrakenDef.ts', './KrakenModel.ts', './KrakenCtrl.ts', './ViewManager.ts', './KrakenUtils.ts', './GUtil.ts', './Kraken_symbol.ts', './Common.ts', './AudioManager.ts', './subGame_jackpot.ts', './Kraken_bigWin.ts', './Kraken_mutBtn.ts', './subGame_seaMonster.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, sp, Prefab, Toggle, tween, v3, UITransform, Tween, UIOpacity, Sprite, find, instantiate, sys, director, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eGameStateType, eZindex, cMinBase, arrBase, eSound, cLockBase, eSymbol, eConstDef, eProto, KrakenModel, KrakenCtrl, ViewManager, KrakenUtils, GUtil, Kraken_symbol, Common, AudioManager, subGame_jackpot, Kraken_bigWin, Kraken_mutBtn, subGame_seaMonster;
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
      sp = module.sp;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      find = module.find;
      instantiate = module.instantiate;
      sys = module.sys;
      director = module.director;
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
      eGameStateType = module.eGameStateType;
      eZindex = module.eZindex;
      cMinBase = module.cMinBase;
      arrBase = module.arrBase;
      eSound = module.eSound;
      cLockBase = module.cLockBase;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      KrakenCtrl = module.KrakenCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Kraken_symbol = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      subGame_jackpot = module.subGame_jackpot;
    }, function (module) {
      Kraken_bigWin = module.default;
    }, function (module) {
      Kraken_mutBtn = module.Kraken_mutBtn;
    }, function (module) {
      subGame_seaMonster = module.subGame_seaMonster;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54;
      cclegacy._RF.push({}, "ed4f26LC2tNRLwp781FDgnV", "KrakenGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var KrakenGameView = exports('default', (_dec = ccclass("KrakenGameView"), _dec2 = menu("KrakenGame/KrakenGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Kraken_symbol), _dec12 = property(Node), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(sp.Skeleton), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Button), _dec26 = property(Button), _dec27 = property(Button), _dec28 = property(Label), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Label), _dec32 = property(Label), _dec33 = property(Prefab), _dec34 = property(sp.Skeleton), _dec35 = property(sp.Skeleton), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Kraken_mutBtn), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Prefab), _dec46 = property(Prefab), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec50 = property(sp.Skeleton), _dec51 = property(sp.Skeleton), _dec52 = property(Node), _dec53 = property(Node), _dec54 = property(Node), _dec55 = property(Node), _dec56 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(KrakenGameView, _GameDef$BaseView);
        function KrakenGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          // @property(Node)
          // Node_loading: Node = null;
          // @property(Sprite)
          // ProgressBar: Sprite = null;
          _initializerDefineProperty(_this, "Node_gameEnter", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolList", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolMask", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect_pearl", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot_sub", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot_free", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Kraken_symbolList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_stop", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_lock", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor18, _assertThisInitialized(_this));
          /////////////////
          _initializerDefineProperty(_this, "Node_uiDown", _descriptor19, _assertThisInitialized(_this));
          /////////////free
          _initializerDefineProperty(_this, "respin_qipao_free", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_free", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bqRoot", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bqRoot_free", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeBaseBet", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_freeTimes", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_gold", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haiguai_bx_goldshouji", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haiguai_box", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dianji_effect2", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dianji_effect3", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layer_0_bg", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layer_90_logo", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layer_80_symbol", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_niceWin", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_fastState", _descriptor40, _assertThisInitialized(_this));
          ///////////////
          //解锁
          _initializerDefineProperty(_this, "Node_lockInfo", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_collectContent", _descriptor42, _assertThisInitialized(_this));
          ////////////////////////////////////////
          _initializerDefineProperty(_this, "Node_jackpotGame", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_seaMonster", _descriptor44, _assertThisInitialized(_this));
          //////////////////
          ///public
          _initializerDefineProperty(_this, "Node_zhuZhi", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolContent", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_freeTimesBg", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haiguai_main", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "haiguai_hand", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betWheel", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_clickMask_down", _descriptor51, _assertThisInitialized(_this));
          //BG
          _initializerDefineProperty(_this, "normal_bg", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bg", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "superfree_bg", _descriptor54, _assertThisInitialized(_this));
          _this.loaded = false;
          _this.arrEnableBack = null;
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isFreeEnter = false;
          _this.isFreeEnd = false;
          _this.minBonus = {
            minor: KrakenModel.instance.curBet * 10 * 0.95,
            major: KrakenModel.instance.curBet * 50 * 0.95,
            mini: KrakenModel.instance.curBet * 5 * 0.95,
            grand: KrakenModel.instance.curBet * 100 * 0.95
          };
          _this.maxBonus = {
            minor: KrakenModel.instance.curBet * 10 * 1.05,
            major: KrakenModel.instance.curBet * 50 * 1.05,
            mini: KrakenModel.instance.curBet * 5 * 1.05,
            grand: KrakenModel.instance.curBet * 100 * 1.05
          };
          _this.bonus = null;
          return _this;
        }
        var _proto = KrakenGameView.prototype;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, KrakenCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});

          // this.Button_add.customSound = {
          //     strPath: KrakenDef.eSound.chest_pick1,
          //     bundle: KrakenUtils.instance.bundle,
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
            if (KrakenModel.instance.gameStatus == eRunStatus.NONE && !KrakenModel.instance.isAuto && KrakenModel.instance.freeStatus == eRunStatus.NONE && !KrakenCtrl.instance.isReqBet && KrakenModel.instance.remainingCount == 0) {
              KrakenCtrl.instance.reqBet();
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
          KrakenModel.instance.clearGameData();
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
              if (KrakenCtrl.instance.isReqBet && KrakenModel.instance.betResult.state != eGameStateType.jackpotState) {
                NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
                KrakenCtrl.instance.reqBet();
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
            _this2.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          this.Node_effectRoot_sub.getComponent(UITransform).priority = 1000;
          this.Node_effectRoot.getComponent(UITransform).priority = 1000;
          KrakenUtils.instance.loadRes_icon(function () {
            KrakenCtrl.instance.reqEnterRoom();
            _this3.Node_symbolMask.getComponent(UITransform).priority = eZindex.MASK;
          });
          KrakenModel.instance.curBet = cMinBase;
          this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
          this.Label_win.string = "";
          this.updateGold();
        };
        _proto.doScale_haiGuai = function doScale_haiGuai(scale) {
          tween(this.Layer_80_symbol).to(0.5, {
            scale: v3(scale, scale, scale)
          }).start();
        };
        _proto.setBaseBet = function setBaseBet() {
          //1-KrakenDef.cMaxBase 2500
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
          var rate = KrakenUtils.instance.betIndex / (arrBase.length - 1);
          var fillRange = -0.6 - 0.3 * rate;
          var rotation = -110 * rate;
          tween(quan_tiao).to(0.1, {
            fillRange: fillRange
          }).start();
          tween(zhen).to(0.1, {
            eulerAngles: v3(0, 0, rotation)
          }).start();
        };
        _proto.showCollectLock = function showCollectLock(isLock) {
          var _this4 = this;
          if (isLock === void 0) {
            isLock = false;
          }
          KrakenModel.instance.isCollectLock = isLock;
          if (!isLock) {
            //解锁
            var betup_lock = this.Node_lockInfo.getChildByName("betup_lock");
            var ani = betup_lock.getComponent(sp.Skeleton);
            ani.setAnimation(0, "3finish", false);
            ani.setCompleteListener(function () {
              ani.setCompleteListener(null);
              _this4.Node_lockInfo.active = false;
            });
            var base_tip1 = find("Node_click_unlock/base_tip1", this.Node_zhuZhi);
            base_tip1.active = true;
            base_tip1.scale = v3(0, 0, 0);
            Tween.stopAllByTarget(base_tip1);
            tween(base_tip1).to(0.35, {
              scale: v3(1, 1, 1)
            }).delay(2).to(0.35, {
              scale: v3(0, 0, 0)
            }).call(function () {
              base_tip1.active = false;
            }).start();
          } else {
            //枷锁
            this.Node_lockInfo.active = true;
            var _betup_lock = this.Node_lockInfo.getChildByName("betup_lock");
            var _ani = _betup_lock.getComponent(sp.Skeleton);
            _ani.setAnimation(0, "1intro", false);
            _ani.setCompleteListener(function () {
              _ani.setCompleteListener(null);
              _ani.setAnimation(0, "2idle", true);
            });
            KrakenUtils.instance.playSound(eSound.jp_lock);
            var _base_tip = find("Node_click_unlock/base_tip1", this.Node_zhuZhi);
            if (_base_tip.active) {
              Tween.stopAllByTarget(_base_tip);
              tween(_base_tip).to(0.35, {
                scale: v3(0, 0, 0)
              }).call(function () {
                _base_tip.active = false;
              }).start();
            }
          }
        }
        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Node_click_unlock":
              {
                if (KrakenModel.instance.betResult.state > eGameStateType.ordinaryState) {
                  return;
                }
                if (KrakenModel.instance.isCollectLock) {
                  KrakenUtils.instance.betIndex = 2;
                  KrakenModel.instance.curBet = cLockBase;
                  this.Button_add.interactable = true;
                  this.Button_redus.interactable = true;
                  this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);

                  //解锁
                  this.showCollectLock(false);
                  this.setBaseBet();
                }
                break;
              }
            case "Node_touch_haiguai_main":
              {
                this.haiguai_main.setAnimation(0, "animation3", false);
                this.haiguai_main.addAnimation(0, "animation1", true);
                KrakenUtils.instance.playOneShot(eSound.animation_cele);
                break;
              }
            case "Layer_0_bg":
              {
                this.dianji_effect2.active = true;
                var newEffectAni = this.dianji_effect2.getComponent(sp.Skeleton);
                newEffectAni.setAnimation(0, "paopao", false);
                var pos = event.getLocation();
                var wPos = v3(0);
                director.getScene().renderScene.cameras[0].screenToWorld(wPos, v3(pos.x, pos.y, 0));
                wPos = this.Layer_0_bg.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                this.dianji_effect2.position = wPos;
                KrakenUtils.instance.playOneShot(eSound.click_base);
                break;
              }
            case "Node_touch_box":
              {
                var _pos = event.getLocation();
                var _wPos = v3(0);
                director.getScene().renderScene.cameras[0].screenToWorld(_wPos, v3(_pos.x, _pos.y, 0));
                _wPos = event.target.getComponent(UITransform).convertToNodeSpaceAR(_wPos);
                this.haiguai_box.setAnimation(0, "lv" + (KrakenModel.instance.betResult.boxState + 1) + "_got", false);
                this.haiguai_box.addAnimation(0, "lv" + (KrakenModel.instance.betResult.boxState + 1) + "_idle", true);
                if (this.dianji_effect3) {
                  this.dianji_effect3.active = true;
                  this.dianji_effect3.position = _wPos;
                  var _newEffectAni = this.dianji_effect3.getComponent(sp.Skeleton);
                  if (_newEffectAni) {
                    _newEffectAni.setAnimation(0, "idle", false);
                  }
                }
                KrakenUtils.instance.playOneShot(eSound.click_chest);
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
                KrakenModel.instance.quickState = (KrakenModel.instance.quickState + 1) % 3;
                this.Button_fastState.setState(KrakenModel.instance.quickState);
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
                // KrakenCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", KrakenUtils.instance.bundle, function () {}, function (help) {
                  var newNode = instantiate(help);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);

                // GUtil.openRecord("slotKraken");
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("slotKraken");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", KrakenUtils.instance.bundle, function () {}, function (help) {
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
                if (KrakenModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                Common.loadPopBuddle("prefab/Node_setAuto", KrakenUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                  _this5.doScale_haiGuai(0.9);
                }, true);
                break;
              }
            case "Button_add":
              {
                if (KrakenModel.instance.betResult.state > eGameStateType.ordinaryState) {
                  return;
                }
                KrakenModel.instance.curBet = KrakenUtils.instance.getAddBet();
                this.Button_add.interactable = true;
                this.Button_redus.interactable = true;
                this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
                if (KrakenModel.instance.curBet >= cLockBase && KrakenModel.instance.isCollectLock) {
                  //解锁
                  this.showCollectLock(false);
                } else if (KrakenModel.instance.curBet < cLockBase && !KrakenModel.instance.isCollectLock) {
                  //加锁
                  this.showCollectLock(true);
                }
                this.setBaseBet();
                break;
              }
            case "Button_redus":
              {
                if (KrakenModel.instance.betResult.state > eGameStateType.ordinaryState) {
                  return;
                }
                KrakenModel.instance.curBet = KrakenUtils.instance.getRedusBet();
                this.Button_add.interactable = true;
                this.Button_redus.interactable = true;
                this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
                if (KrakenModel.instance.curBet >= cLockBase && KrakenModel.instance.isCollectLock) {
                  //解锁
                  this.showCollectLock(false);
                } else if (KrakenModel.instance.curBet < cLockBase && !KrakenModel.instance.isCollectLock) {
                  //加锁
                  this.showCollectLock(true);
                }
                this.setBaseBet();
                break;
              }
            case "Button_stop":
              {
                KrakenModel.instance.isAuto = false;
                this.Button_stop.node.active = false;
                var muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
                muBtn_run.setState(0);
                // this.Button_run.node.active = true;
                // this.Button_run.interactable = true;
                // this.Button_auto.interactable = true;

                // this.Button_add.interactable = true;
                // this.Button_redus.interactable = true;
                break;
              }
            case "Button_run":
              {
                if (KrakenCtrl.instance.isReqBet || KrakenModel.instance.freeStatus != eRunStatus.NONE) {
                  break;
                }
                this.Button_run.interactable = false;
                var _muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
                _muBtn_run.setState(2);
                if (KrakenModel.instance.gameStatus == eRunStatus.NONE) {
                  tween(event.target).delay(2).call(function () {
                    if (!KrakenModel.instance.isAuto && KrakenModel.instance.gameStatus == eRunStatus.NONE) {
                      _this5.Button_run.interactable = true;
                      var _muBtn_run2 = _this5.Button_run.node.getComponent(Kraken_mutBtn);
                      _muBtn_run2.setState(0);
                    }
                  }).start();
                  KrakenCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_startFree":
              {
                this.closeFreeEnter();
              }
            case "Button_exitFree":
              {
                this.closeFreeEnd();
              }
          }
        };
        _proto.onSetAuto = function onSetAuto(strCode) {
          var _this6 = this;
          if (strCode == "cancel" && KrakenModel.instance.isAuto) {
            KrakenModel.instance.isAuto = false;

            // this.Button_run.node.active = true;
            this.Button_stop.node.active = false;
            this.Button_run.interactable = true;
            this.Button_auto.interactable = true;
            var _muBtn_run3 = this.Button_run.node.getComponent(Kraken_mutBtn);
            _muBtn_run3.setState(0);
            this.Button_add.interactable = true;
            this.Button_redus.interactable = true;
            return;
          }
          this.doScale_haiGuai(1.0);
          if (strCode == "close") {
            return;
          }
          KrakenModel.instance.isAuto = true;
          this.Button_run.interactable = false;
          this.Button_stop.node.active = true;
          var muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
          muBtn_run.setState(1);

          // this.Button_auto.interactable = false;
          // this.Button_add.interactable = false;
          // this.Button_redus.interactable = false;

          this.Label_autoTimes.string = KrakenModel.instance.autoTimes > 10000 ? "∞" : "" + KrakenModel.instance.autoTimes;
          this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
          this.Button_fastState.setState(KrakenModel.instance.quickState);
          if (KrakenModel.instance.isCollectLock && KrakenModel.instance.curBet >= cLockBase) {
            //解锁
            KrakenModel.instance.isCollectLock = false;
            var betup_lock = this.Node_lockInfo.getChildByName("betup_lock");
            var ani = betup_lock.getComponent(sp.Skeleton);
            ani.setAnimation(0, "3finish", false);
            ani.setCompleteListener(function () {
              ani.setCompleteListener(null);
              _this6.Node_lockInfo.active = false;
            });
            KrakenUtils.instance.playSound(eSound.jp_unlock);
          } else if (!KrakenModel.instance.isCollectLock && KrakenModel.instance.curBet < cLockBase) {
            //加锁
            KrakenModel.instance.isCollectLock = true;
            this.Node_lockInfo.active = true;
            var _betup_lock2 = this.Node_lockInfo.getChildByName("betup_lock");
            var _ani2 = _betup_lock2.getComponent(sp.Skeleton);
            _ani2.setAnimation(0, "1intro", false);
            _ani2.setCompleteListener(function () {
              _ani2.setCompleteListener(null);
              _ani2.setAnimation(0, "2idle", true);
            });
            KrakenUtils.instance.playSound(eSound.jp_lock);
          }
          if (KrakenModel.instance.gameStatus == eRunStatus.NONE) {
            if (!KrakenCtrl.instance.reqBet()) {
              KrakenModel.instance.isAuto = false;

              // this.Button_run.node.active = true;
              this.Button_stop.node.active = false;
              this.Button_run.interactable = true;
              this.Button_auto.interactable = true;
              var _muBtn_run4 = this.Button_run.node.getComponent(Kraken_mutBtn);
              _muBtn_run4.setState(0);
              this.Button_add.interactable = true;
              this.Button_redus.interactable = true;
            }
          }
        };
        _proto.onCollectCoin = function onCollectCoin(startPos) {
          var _this7 = this;
          var toPos = this.haiguai_box.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          toPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          for (var i = 0; i < 3; i++) {
            var newGold = instantiate(this.Prefab_gold);
            newGold.position = startPos;
            this.Node_effectRoot.addChild(newGold);
            tween(newGold).to(0.2 + 0.2 * i, {
              position: toPos
            })
            // .call(() => {
            //     this.haiguai_bx_goldshouji.node.active = true;
            //     this.haiguai_bx_goldshouji.setAnimation(0, `idle`, false);
            // })
            .destroySelf().start();
          }
          KrakenUtils.instance.playSound(eSound.wild_collect);
          if (!this.haiguai_bx_goldshouji.node.active) {
            this.scheduleOnce(function () {
              _this7.haiguai_bx_goldshouji.node.active = true;
              _this7.haiguai_bx_goldshouji.setAnimation(0, "idle", false);
              _this7.haiguai_bx_goldshouji.setCompleteListener(function () {
                _this7.haiguai_bx_goldshouji.setCompleteListener(null);
                _this7.haiguai_bx_goldshouji.node.active = false;
              });
              if (KrakenModel.instance.betResult.nextState == eGameStateType.jackpotState) {
                KrakenModel.instance.betResult.boxState = 2;
              }

              /////
              var lv_0 = KrakenModel.instance.boxState + 1;
              var lv_1 = KrakenModel.instance.betResult.boxState + 1;
              KrakenModel.instance.boxState = KrakenModel.instance.betResult.boxState;
              _this7.haiguai_box.setAnimation(0, "lv" + lv_0 + "_got", false);
              _this7.haiguai_box.setCompleteListener(function () {
                _this7.haiguai_box.setCompleteListener(null);
                var isJackpot = KrakenModel.instance.betResult.nextState == eGameStateType.jackpotState;
                if (lv_1 != lv_0) {
                  _this7.haiguai_box.setAnimation(0, "lv" + lv_0 + "tolv" + lv_1, false);
                  _this7.haiguai_box.addAnimation(0, "lv" + lv_1 + "_idle", !isJackpot);
                } else {
                  _this7.haiguai_box.setAnimation(0, "lv" + lv_1 + "_idle", !isJackpot);
                }
                if (isJackpot) {
                  _this7.haiguai_box.addAnimation(0, "lv" + lv_1 + "_qie", true);
                }
              });
            }, 0.2);
          }
          // this.scheduleOnce(() => {
          //     let lv_0 = KrakenModel.instance.boxState + 1;
          //     let lv_1 = KrakenModel.instance.betResult.boxState + 1;
          //     KrakenModel.instance.boxState = KrakenModel.instance.betResult.boxState;

          //     if (this.haiguai_box.animation.indexOf("_idle") != -1) {
          //         this.haiguai_box.setAnimation(0, `lv${lv_0}_got`, false);
          //         this.haiguai_box.setCompleteListener(() => {
          //             this.haiguai_box.setCompleteListener(null);

          //             if (lv_1 != lv_0) {
          //                 this.haiguai_box.setAnimation(0, `lv${lv_0}tolv${lv_1}`, false);
          //                 this.haiguai_box.addAnimation(0, `lv${lv_1}_idle`, true);
          //             } else {
          //                 this.haiguai_box.setAnimation(0, `lv${lv_1}_idle`, true);
          //             }
          //         });
          //     }
          // }, 0.2);
        };

        _proto.onSetMask = function onSetMask(iCol, posX) {
          if (KrakenModel.instance.gameStatus > eRunStatus.STOP) {
            return;
          }
          if (iCol > 0) {
            if (KrakenModel.instance.specialSymbol == eSymbol.Scatter) {
              if (!this.Node_colEffect.active) {
                this.Node_colEffect.active = true;
                this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
                tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();

                // this.Node_symbolMask.active = true;
                // this.Node_symbolMask.getComponent(UIOpacity).opacity = 0;
                // tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, { opacity: 180 }).start();

                this.Node_symbolList.getComponent(UITransform).height = 400;
              }
              KrakenModel.instance.curSpecialStartCol = iCol;
              if (KrakenModel.instance.curSpecialStartCol < this.Kraken_symbolList.length) {
                KrakenUtils.instance.stopSound(eSound.scatter_notify);
                KrakenUtils.instance.playSound(eSound.scatter_notify);
                this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 10 * KrakenModel.instance.curSpecialStartCol;
                this.Node_colEffect.setPosition(this.Kraken_symbolList[KrakenModel.instance.curSpecialStartCol].node.getPosition().x, this.Node_colEffect.position.y);

                // this.Node_symbolMask.getComponent(UITransform).width = (iCol + 1) * 168 + 2 * iCol;
              }
            } else {
              if (!this.Node_colEffect_pearl.active) {
                this.Node_colEffect_pearl.active = true;
                this.Node_colEffect_pearl.getComponent(UIOpacity).opacity = 0;
                tween(this.Node_colEffect_pearl.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();

                // this.Node_symbolMask.active = true;
                // this.Node_symbolMask.getComponent(UIOpacity).opacity = 0;
                // tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, { opacity: 180 }).start();

                this.Node_symbolList.getComponent(UITransform).height = 400;
              }
              KrakenModel.instance.curSpecialStartCol = iCol;
              if (KrakenModel.instance.curSpecialStartCol < this.Kraken_symbolList.length) {
                KrakenUtils.instance.stopSound(eSound.bonus_notify);
                KrakenUtils.instance.playSound(eSound.bonus_notify);
                this.Node_colEffect_pearl.getComponent(UITransform).priority = eZindex.SPECIAL + 10 * KrakenModel.instance.curSpecialStartCol;
                this.Node_colEffect_pearl.setPosition(this.Kraken_symbolList[KrakenModel.instance.curSpecialStartCol].node.getPosition().x, this.Node_colEffect_pearl.position.y);

                // this.Node_symbolMask.getComponent(UITransform).width = (iCol + 1) * 168 + 2 * iCol;
              }
            }
          }
        };

        _proto.showMask = function showMask(isShow) {} // if (!isShow) {
        //     if (this.Node_symbolMask.active) {
        //         tween(this.Node_symbolMask.getComponent(UIOpacity))
        //             .to(0.2, { opacity: 0 })
        //             .call(() => {
        //                 this.Node_symbolMask.active = false;
        //             })
        //             .start();
        //     }
        //     return;
        // }
        // //        //mask show
        // if (!this.Node_symbolMask.active) {
        //     this.Node_symbolMask.active = true;
        //     this.Node_symbolMask.getComponent(UITransform).width = 916;
        //     this.Node_symbolMask.getComponent(UIOpacity).opacity = 0;
        //     tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, { opacity: 150 }).start();
        // }
        //超级免费 珍珠缩放
        ;

        _proto.doSuperFreeScale = function doSuperFreeScale(isEnter) {
          for (var iCol = 0; iCol < this.Kraken_symbolList.length; iCol++) {
            var Kraken_symbolList = this.Kraken_symbolList[iCol];
            for (var iRow = 0; iRow < Kraken_symbolList._symbolList.length; iRow++) {
              var symbolItem = Kraken_symbolList._symbolList[iRow];
              if (symbolItem.itemInfo.Sym >= eSymbol.whitePearl && !symbolItem.itemInfo.isScale) {
                symbolItem.doSuperFreeChange();
              }
            }
          }
          for (var _iterator = _createForOfIteratorHelperLoose(KrakenModel.instance.superFreeList), _step; !(_step = _iterator()).done;) {
            var info = _step.value;
            if (!info.isScale) {
              info.isScale = true;
              var symbolNode = info.node;
              var toPos = v3(symbolNode.position.x + 40, symbolNode.position.y - 25, 0);
              tween(symbolNode).to(0.5, {
                scale: v3(0.4, 0.4, 0.4),
                position: toPos
              }).start();
            }
          }
        };
        _proto.doSuperFreeScaleResum = function doSuperFreeScaleResum() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var isScale = false;
            var _loop = function _loop() {
              var info = _step2.value;
              if (info.isScale) {
                isScale = true;
                info.isScale = false;
                var symbolNode = info.node;
                var itemInfo = info.itemInfo;
                var symbolList = _this8.Kraken_symbolList[itemInfo.iCol];
                var symbolItem = symbolList._symbolList[itemInfo.iRow];
                var toPos = v3(symbolNode.position.x - 40, symbolNode.position.y + 25, 0);
                tween(symbolNode).to(0.5, {
                  scale: v3(1, 1, 1),
                  position: toPos
                }).call(function () {
                  symbolItem.doSuperFreeChangeResum(itemInfo);
                  resolve();
                }).destroySelf().start();
              }
            };
            for (var _iterator2 = _createForOfIteratorHelperLoose(KrakenModel.instance.superFreeList), _step2; !(_step2 = _iterator2()).done;) {
              _loop();
            }
            if (!isScale) {
              resolve();
            }
            KrakenModel.instance.superFreeList = [];
          });
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
          var _this9 = this;
          if (KrakenModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          gts.Debug.Log("======doStartRun=======");
          KrakenUtils.instance.getResult();
          this.showMask(false);
          this.setBtnState_run(false);
          KrakenModel.instance.scatterCounts = 0;
          this.Node_symbolList.getComponent(UITransform).height = 400;
          gts.Debug.Log("==state==" + KrakenModel.instance.betResult.state + "==isSuperScale:" + KrakenModel.instance.isSuperScale);
          if (KrakenModel.instance.betResult.state == eGameStateType.superFreeState && KrakenModel.instance.isSuperScale) {
            this.doSuperFreeScale();
          }
          if (KrakenModel.instance.freeStatus != eRunStatus.NONE) {
            this.Label_win.node.active = true;
          } else {
            if (KrakenModel.instance.autoTimes <= 500) {
              KrakenModel.instance.autoTimes--;
              this.Label_autoTimes.string = "" + KrakenModel.instance.autoTimes;
            }
            KrakenModel.instance.curTotalWin = 0;
            Tween.stopAllByTarget(this.Label_win.node);
            Tween.stopAllByTarget(this.Label_win.node.getComponent(UIOpacity));
            this.Label_win.string = "";
          }
          this.Button_run.interactable = false;
          var muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
          muBtn_run.setState(2);
          var children = this.Node_effectRoot.children;
          for (var i = children.length - 1; i >= 0; i--) {
            var nodeChild = children[i];
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, _i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (_i = 0; _i < _this9.Kraken_symbolList.length; _i++) {
                    startDelay = KrakenModel.instance.quickState > 0 ? _i * eConstDef.cQuickStopStartDelay : _i * eConstDef.cStartDelay / 5;
                    stopDelay = KrakenModel.instance.quickState > 0 ? eConstDef.cQuickStopDelay - (KrakenModel.instance.quickState - 1) * 0.5 : eConstDef.cStopDelay + _i * eConstDef.cStartDelay;
                    stopDelay += KrakenModel.instance.specialStartCol > 0 && _i >= KrakenModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (_i - KrakenModel.instance.specialStartCol + 1) : 0;
                    arrPro.push(_this9.Kraken_symbolList[_i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _context.next = 6;
                  return _this9.doAwait(0.2);
                case 6:
                  if (KrakenModel.instance.specialStartCol > 0) ;
                  _this9.scheduleOnce(_this9.doRunEnd, 0);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          KrakenModel.instance.gameStatus = eRunStatus.RUNNING;

          // if (KrakenModel.instance.freeStatus == KrakenDef.eRunStatus.RUNNING) {
          //     this.Label_freeSpine.string = `${KrakenModel.instance.remainingCount}`;
          // }
        };

        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this10 = this;
            var result, i, totalWin, delayStart, rate, arrPro, _i2, Label_win, newLabel_win, startPos, addFreeTimes, _rate, muBtn_run, _arrPro, _i3, _muBtn_run6;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  KrakenModel.instance.gameStatus = eRunStatus.CLEAR;
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this10.Node_colEffect.active = false;
                    }).start();
                  }
                  if (this.Node_colEffect_pearl.active) {
                    tween(this.Node_colEffect_pearl.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this10.Node_colEffect_pearl.active = false;
                    }).start();
                  }
                  if (this.Node_symbolMask.active) {
                    tween(this.Node_symbolMask.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this10.Node_symbolMask.active = false;
                    }).start();
                  }
                  result = KrakenModel.instance.betResult;
                  if (KrakenModel.instance.freeStatus == eRunStatus.NONE && KrakenModel.instance.specialStartCol > 0) {
                    if (KrakenModel.instance.betResult.freeInfo.remainingCount > 0) {
                      KrakenModel.instance.curSpecialStartCol = -1;

                      // KrakenUtils.instance.playSound(KrakenDef.eSound.Fg_symbol_bell);

                      // for (let i = 0; i < this.Kraken_symbolList.length; i++) {
                      //     this.Kraken_symbolList[i].doScatterBlink();
                      // }
                    } else {
                      if (KrakenModel.instance.specialSymbol == eSymbol.Scatter) {
                        for (i = 0; i < this.Kraken_symbolList.length; i++) {
                          this.Kraken_symbolList[i].stopScatterBlink();
                        }
                      }
                    }
                  }
                  this.Node_symbolList.getComponent(UITransform).height = 400;
                  totalWin = 0;
                  delayStart = 0.25;
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 49;
                    break;
                  }
                  rate = result.prizeAmount / KrakenModel.instance.curBet; //doEffect
                  arrPro = [];
                  for (_i2 = 0; _i2 < this.Kraken_symbolList.length; _i2++) {
                    arrPro.push(this.Kraken_symbolList[_i2].doEffect());
                  }
                  _context2.next = 16;
                  return Promise.all(arrPro);
                case 16:
                  if (KrakenModel.instance.freeStatus != eRunStatus.NONE) {
                    // KrakenModel.instance.totalFreeWin += result.prizeAmount;
                    totalWin = KrakenModel.instance.totalFreeWin;
                  } else {
                    totalWin = result.prizeAmount;
                  }
                  delayStart = 1.5;

                  // await this.doAwait(1.0);
                  if (!(rate > 2 && rate < 6)) {
                    _context2.next = 38;
                    break;
                  }
                  // KrakenUtils.instance.playOneShot(KrakenDef.eSound.smallWin);

                  KrakenUtils.instance.playSound(eSound.nice_win);
                  this.Node_niceWin.active = true;
                  this.Node_niceWin.getComponent(UIOpacity).opacity = 0;
                  tween(this.Node_niceWin.getComponent(UIOpacity)).to(0.25, {
                    opacity: 255
                  }).start();
                  Label_win = this.Node_niceWin.getChildByName("Label_win").getComponent(Label);
                  Label_win.node.position = v3(0, 195, 0);
                  Label_win.string = "";
                  KrakenUtils.instance.updateLabelAddNf(Label_win, result.prizeAmount, 2);
                  _context2.next = 29;
                  return this.doAwait(1.75);
                case 29:
                  tween(this.Node_niceWin.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    _this10.Node_niceWin.active = false;
                  }).start();
                  newLabel_win = instantiate(Label_win.node);
                  this.Label_win.node.parent.addChild(newLabel_win);
                  startPos = Label_win.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = this.Label_win.node.parent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newLabel_win.position = startPos;
                  tween(newLabel_win).to(0.3, {
                    position: this.Label_win.node.position
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    KrakenUtils.instance.updateLabel(_this10.Label_win, Common.ChangeMoneyShowFloat(result.prizeAmount, 2));
                  }).destroySelf().start();
                  _context2.next = 49;
                  break;
                case 38:
                  if (!(rate >= 6)) {
                    _context2.next = 48;
                    break;
                  }
                  _context2.next = 41;
                  return this.doAwait(1.0);
                case 41:
                  //大奖
                  this.Node_bigWin.active = true;
                  _context2.next = 44;
                  return this.Node_bigWin.getComponent(Kraken_bigWin).showBigWin(KrakenModel.instance.betResult.prizeAmount, 0.25);
                case 44:
                  this.Node_bigWin.active = false;
                  this.Label_win.string = totalWin > 0 ? Common.ChangeMoneyShowFloat(totalWin, 2) : "";
                  _context2.next = 49;
                  break;
                case 48:
                  //gengxin
                  KrakenUtils.instance.updateLabelAddNf(this.Label_win, totalWin, 1, totalWin - result.prizeAmount);

                // await this.doAwait(1.5);
                case 49:
                  if (KrakenModel.instance.endBalance > 0) {
                    KrakenModel.instance.curBalance = KrakenModel.instance.endBalance;
                    KrakenModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  if (!(KrakenModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 58;
                    break;
                  }
                  this.Label_freeTimes.string = KrakenModel.instance.betResult.freeInfo.remainingCount + "/" + KrakenModel.instance.betResult.freeInfo.totalCount;
                  addFreeTimes = KrakenModel.instance.betResult.freeInfo.totalCount - KrakenModel.instance.totalCount;
                  if (!(addFreeTimes > 5)) {
                    _context2.next = 56;
                    break;
                  }
                  _context2.next = 56;
                  return this.showFreeAddTimes(addFreeTimes);
                case 56:
                  KrakenModel.instance.remainingCount = KrakenModel.instance.betResult.freeInfo.remainingCount;
                  KrakenModel.instance.totalCount = KrakenModel.instance.betResult.freeInfo.totalCount;
                case 58:
                  if (!(KrakenModel.instance.betResult.nextState != KrakenModel.instance.betResult.state && KrakenModel.instance.betResult.nextState > eGameStateType.superFreeState)) {
                    _context2.next = 80;
                    break;
                  }
                  if (!(KrakenModel.instance.betResult.state == eGameStateType.superFreeState && (KrakenModel.instance.betResult.nextState == eGameStateType.seaMonsterState || KrakenModel.instance.betResult.nextState == eGameStateType.pickState))) {
                    _context2.next = 62;
                    break;
                  }
                  _context2.next = 62;
                  return this.doSuperFreeScaleResum();
                case 62:
                  _context2.next = 64;
                  return this.doAwait(1.0);
                case 64:
                  _context2.next = 66;
                  return this.doCheckSubGame();
                case 66:
                  _rate = KrakenModel.instance.totalWinSubGame / KrakenModel.instance.curBet;
                  if (!(KrakenModel.instance.totalWinSubGame > 0)) {
                    _context2.next = 77;
                    break;
                  }
                  if (!(_rate > 6)) {
                    _context2.next = 73;
                    break;
                  }
                  this.Node_bigWin.active = true;
                  _context2.next = 72;
                  return this.Node_bigWin.getComponent(Kraken_bigWin).showBigWin(KrakenModel.instance.totalWinSubGame, 0.0);
                case 72:
                  this.Node_bigWin.active = false;
                case 73:
                  this.Label_win.node.active = true;
                  this.Label_win.string = Common.ChangeMoneyShowFloat(KrakenModel.instance.totalWinSubGame, 2);
                  KrakenModel.instance.totalWinSubGame = 0;
                  if (KrakenModel.instance.endBalance > 0) {
                    KrakenModel.instance.curBalance = KrakenModel.instance.endBalance;
                    KrakenModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                case 77:
                  delayStart = 0.25;
                  _context2.next = 81;
                  break;
                case 80:
                  if (KrakenModel.instance.betResult.state == eGameStateType.superFreeState) {
                    KrakenModel.instance.isSuperScale = true;
                  }
                case 81:
                  if (KrakenModel.instance.isAuto && KrakenModel.instance.autoTimes == 0) {
                    KrakenModel.instance.isAuto = false;

                    // this.Button_run.node.active = true;
                    this.Button_stop.node.active = false;
                    this.Button_run.interactable = true;
                    this.Button_auto.interactable = true;
                    muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
                    muBtn_run.setState(0);
                    this.Button_add.interactable = true;
                    this.Button_redus.interactable = true;
                  }

                  //free and auto
                  if (!(KrakenModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 96;
                    break;
                  }
                  KrakenModel.instance.gameStatus = eRunStatus.NONE;
                  this.Node_bigWin.active = false;
                  if (!(KrakenModel.instance.remainingCount > 0)) {
                    _context2.next = 89;
                    break;
                  }
                  this.scheduleOnce(function () {
                    KrakenCtrl.instance.reqBet();
                  }, delayStart);
                  _context2.next = 94;
                  break;
                case 89:
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 92;
                    break;
                  }
                  _context2.next = 92;
                  return this.doAwait(2.5);
                case 92:
                  KrakenModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 94:
                  _context2.next = 112;
                  break;
                case 96:
                  if (!(KrakenModel.instance.remainingCount > 0)) {
                    _context2.next = 111;
                    break;
                  }
                  this.doUpdateCollectLight();
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 101;
                    break;
                  }
                  _context2.next = 101;
                  return this.doAwait(2.0);
                case 101:
                  KrakenModel.instance.specialStartCol = 0;
                  KrakenModel.instance.curSpecialStartCol = -1;
                  _arrPro = [];
                  for (_i3 = 0; _i3 < this.Kraken_symbolList.length; _i3++) {
                    _arrPro.push(this.Kraken_symbolList[_i3].doScatterBlink());
                  }
                  _context2.next = 107;
                  return Promise.all(_arrPro);
                case 107:
                  KrakenModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    _this10.showFree();
                  }, 2.25);
                  _context2.next = 112;
                  break;
                case 111:
                  if (KrakenModel.instance.isAuto) {
                    KrakenModel.instance.gameStatus = eRunStatus.NONE;
                    this.scheduleOnce(function () {
                      if (!KrakenCtrl.instance.reqBet()) {
                        KrakenModel.instance.isAuto = !KrakenModel.instance.isAuto;
                        _this10.Button_run.interactable = !KrakenModel.instance.isAuto;
                        var _muBtn_run5 = _this10.Button_run.node.getComponent(Kraken_mutBtn);
                        _muBtn_run5.setState(_this10.Button_run.interactable ? 0 : 2);
                      }
                    }, delayStart);
                  } else {
                    KrakenModel.instance.gameStatus = eRunStatus.NONE;
                    this.Button_run.interactable = true;
                    _muBtn_run6 = this.Button_run.node.getComponent(Kraken_mutBtn);
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
        _proto.resetCollectLight = function resetCollectLight() {
          KrakenModel.instance.freeCount = 0;
          for (var i = 0; i < 8; i++) {
            var light = this.Node_collectContent.children[i];
            light.active = false;
          }
        };
        _proto.doUpdateCollectLight = function doUpdateCollectLight() {
          KrakenModel.instance.freeCount = KrakenModel.instance.betResult.freeCount % 8;
          if (KrakenModel.instance.betResult.nextState == eGameStateType.superFreeState || KrakenModel.instance.betResult.state == eGameStateType.superFreeState) {
            KrakenModel.instance.freeCount = 8;
          }
          for (var i = 0; i < 8; i++) {
            var light = this.Node_collectContent.children[i];
            if (!light) {
              continue;
            }
            if (i >= KrakenModel.instance.freeCount) {
              light.active = false;
            } else if (!light.active) {
              light.active = true;
              var lightAni = light.getComponent(sp.Skeleton);
              lightAni.setAnimation(0, "intro", false);
              lightAni.addAnimation(0, "idle", true);
            }
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            _this11.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.doCheckSubGame = function doCheckSubGame(isEnter) {
          var _this12 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          return new Promise(function (resolve, reject) {
            switch (KrakenModel.instance.betResult.nextState) {
              case eGameStateType.jackpotState:
                {
                  if (_this12.node.getChildByName("Node_jackpotGame")) {
                    break;
                  }
                  _this12.Node_clickMask_down.active = true;
                  _this12.Label_win.node.active = false;
                  var subGame = instantiate(_this12.Node_jackpotGame);
                  _this12.node.addChild(subGame);
                  var comGame = subGame.getComponent(subGame_jackpot);
                  _this12.haiguai_box.setAnimation(0, "lv3_qie", true);
                  _this12.Layer_90_logo.active = false;
                  _this12.doScale_haiGuai(0.9);
                  comGame.cFinish = function () {
                    KrakenModel.instance.boxState = 0;
                    KrakenModel.instance.betResult.boxState = 0;
                    _this12.haiguai_box.setAnimation(0, "lv1_idle", true);
                    _this12.Layer_90_logo.active = true;
                    _this12.doScale_haiGuai(1.0);
                    KrakenUtils.instance.playBgMusic(eSound.base_bgm);
                    KrakenModel.instance.betResult.state = eGameStateType.ordinaryState;
                    _this12.Node_clickMask_down.active = false;
                    _this12.scheduleOnce(resolve, 1.5);
                    if (KrakenModel.instance.betResult.nextState == eGameStateType.superFreeState) {
                      KrakenModel.instance.isSuperScale = true;
                    }
                  };
                  break;
                }
              case eGameStateType.seaMonsterState:
                {
                  if (KrakenModel.instance.betResult.seaMonsterInfo.remainingCount > 0) {
                    var children = _this12.Node_effectRoot.children;
                    for (var i = children.length - 1; i >= 0; i--) {
                      var nodeChild = children[i];
                      if (nodeChild.name != "Node_symbol") {
                        nodeChild.destroyFromParent();
                      }
                    }
                    _this12.Node_clickMask_down.active = true;
                    _this12.Label_win.node.active = false;
                    var nodeSeaMonster = instantiate(_this12.Node_seaMonster);
                    nodeSeaMonster.getComponent(UITransform).priority = 100;
                    _this12.Node_symbolContent.addChild(nodeSeaMonster);
                    var seaMonster = nodeSeaMonster.getComponent(subGame_seaMonster);
                    seaMonster.Sprite_freeTimesBg = _this12.Sprite_freeTimesBg;
                    _this12.Sprite_freeTimesBg.getComponent(UITransform).priority = 2000;
                    seaMonster.init(function () {
                      KrakenModel.instance.betResult.state = KrakenModel.instance.betResult.nextState;
                      _this12.Node_effectRoot.active = true;
                      KrakenUtils.instance.playBgMusic(eSound.base_bgm);
                      _this12.Node_clickMask_down.active = false;
                      _this12.Sprite_freeTimesBg.active = false;
                      KrakenModel.instance.isSuperScale = false;
                      _this12.scheduleOnce(resolve, 0);
                    }, isEnter);
                  }
                  break;
                }
              case eGameStateType.pickState:
                {
                  var _children = _this12.Node_effectRoot.children;
                  for (var _i4 = _children.length - 1; _i4 >= 0; _i4--) {
                    var _nodeChild = _children[_i4];
                    if (_nodeChild.name != "Node_symbol") {
                      _nodeChild.destroyFromParent();
                    }
                  }
                  _this12.Node_clickMask_down.active = true;
                  _this12.Label_win.node.active = false;
                  var _nodeSeaMonster = instantiate(_this12.Node_seaMonster);
                  _nodeSeaMonster.getComponent(UITransform).priority = 100;
                  _this12.Node_symbolContent.addChild(_nodeSeaMonster);
                  var _seaMonster = _nodeSeaMonster.getComponent(subGame_seaMonster);
                  _seaMonster.Sprite_freeTimesBg = _this12.Sprite_freeTimesBg;
                  _this12.Sprite_freeTimesBg.getComponent(UITransform).priority = 2000;
                  _seaMonster.init(function () {
                    KrakenModel.instance.betResult.state = KrakenModel.instance.betResult.nextState;
                    _this12.Node_effectRoot.active = true;
                    KrakenUtils.instance.playBgMusic(eSound.base_bgm);
                    _this12.Node_clickMask_down.active = false;
                    _this12.Sprite_freeTimesBg.active = false;
                    KrakenModel.instance.isSuperScale = false;
                    _this12.scheduleOnce(resolve, 0);
                  }, isEnter);
                  break;
                }
              default:
                {
                  resolve();
                  break;
                }
            }
          });
        };
        _proto.hideFree = function hideFree() {
          var _this13 = this;
          this.unschedule(this.hideFree);

          // this.Node_logo.active = true;

          KrakenModel.instance.freeStatus = eRunStatus.NONE;
          KrakenModel.instance.remainingCount = 0;
          KrakenModel.instance.totalCount = 0;
          gts.Debug.LogWarr("==totalCount==" + KrakenModel.instance.totalCount);
          this.Button_run.interactable = !KrakenModel.instance.isAuto;
          var muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
          muBtn_run.setState(this.Button_run.interactable ? 0 : 2);
          AudioManager.instance.resumeMusic();
          var Node_end = this.Node_free.getChildByName("Node_end");
          this.Node_bqRoot.active = true;
          this.Node_bqRoot_free.active = false;
          this.normal_bg.active = true;
          this.normal_bg.getComponent(UIOpacity).opacity = 0;
          tween(this.normal_bg.getComponent(UIOpacity)).to(1, {
            opacity: 255
          }).call(function () {
            var mask = _this13.Node_free.getChildByName("mask");
            mask.active = false;
          }).start();
          var youwin_wave = Node_end.getChildByName("youwin_wave").getComponent(sp.Skeleton);
          youwin_wave.setAnimation(0, "finish", false);
          this.respin_qipao_free.node.active = true;
          this.respin_qipao_free.setAnimation(0, "idle", false);
          this.respin_qipao_free.setCompleteListener(function () {
            _this13.respin_qipao_free.setCompleteListener(null);
            _this13.respin_qipao_free.node.active = false;
            Node_end.active = false;
          });
          tween(this.node).shake(2, 3, 3).call(function () {
            _this13.node.position = v3(0);
          }).start();
          if (this.free_bg.active) {
            tween(this.free_bg.getComponent(UIOpacity)).to(1, {
              opacity: 0
            }).call(function () {
              _this13.free_bg.active = false;
            }).start();
          }
          if (this.superfree_bg.active) {
            tween(this.superfree_bg.getComponent(UIOpacity)).to(1, {
              opacity: 0
            }).call(function () {
              _this13.superfree_bg.active = false;
            }).start();
          }
          switch (KrakenModel.instance.betResult.state) {
            case eGameStateType.freeState:
              {
                this.haiguai_main.setAnimation(0, "animation3", false);
                this.haiguai_main.addAnimation(0, "animation1", true);
                break;
              }
            case eGameStateType.superFreeState:
              {
                break;
              }
          }
          tween(this.Node_free).delay(0.3).call(function () {
            var Node_zhuZiRoot = _this13.Node_zhuZhi.getChildByName("Node_zhuZiRoot");
            var left_qipao = _this13.Node_zhuZhi.getChildByName("left_qipao");
            left_qipao.active = true;
            var left_qipaoAni = left_qipao.getComponent(sp.Skeleton);
            left_qipaoAni.setAnimation(0, "idle", false);
            left_qipaoAni.setCompleteListener(function () {
              left_qipaoAni.setCompleteListener(null);
              left_qipao.active = false;
            });
            Node_zhuZiRoot.active = true;
            Node_zhuZiRoot.getComponent(UIOpacity).opacity = 0;
            tween(Node_zhuZiRoot.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).start();
          }).delay(3).call(function () {
            KrakenUtils.instance.playBgMusic(eSound.base_bgm, false);
            _this13.Node_free.active = false;
            _this13.Node_clickMask_down.active = false;
            if (KrakenModel.instance.isAuto) {
              _this13.scheduleOnce(function () {
                KrakenCtrl.instance.reqBet();
              }, 0.25);
            } else {
              _this13.setBtnState_run(true);
              _this13.Button_run.interactable = true;
              var _muBtn_run7 = _this13.Button_run.node.getComponent(Kraken_mutBtn);
              _muBtn_run7.setState(0);
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this14 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!this.Node_free.active) {
            this.Node_clickMask_down.active = true;
            this.Node_free.active = true;
            this.Node_free.getComponent(UIOpacity).opacity = 255;
            var delayTime = isEnter ? 0 : 0;
            this.Node_menu.active = false;
            if (isEnter) {
              this.Label_win.string = KrakenModel.instance.totalFreeWin > 0 ? Common.ChangeMoneyShow(KrakenModel.instance.totalFreeWin, 2) : "";

              //                //免费次数
              // this.Label_freeSpine.string = `${KrakenModel.instance.remainingCount}`;
            } else {
              KrakenModel.instance.curTotalWin = 0;
              KrakenModel.instance.totalFreeWin = 0;
              KrakenModel.instance.totalCount = KrakenModel.instance.remainingCount;
            }
            this.scheduleOnce(function () {
              if (isEnter) {
                _this14.doEnterFree();
              } else {
                _this14.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.showFreeAddTimes = function showFreeAddTimes(freeTimes) {
          var _this15 = this;
          if (freeTimes === void 0) {
            freeTimes = 6;
          }
          return new Promise(function (resolve, reject) {
            _this15.Node_free.active = true;
            _this15.Node_free.getComponent(UIOpacity).opacity = 255;

            //enter
            var mask = _this15.Node_free.getChildByName("mask");
            mask.active = true;
            var Node_enter = _this15.Node_free.getChildByName("Node_enter");
            Node_enter.getComponent(UIOpacity).opacity = 255;
            Node_enter.active = true;
            switch (KrakenModel.instance.betResult.nextState) {
              case eGameStateType.freeState:
                {
                  KrakenUtils.instance.playSound(eSound.free_start);
                  break;
                }
              case eGameStateType.superFreeState:
                {
                  KrakenUtils.instance.playSound(eSound.sp_free_start);
                  break;
                }
            }
            var spEnter = Node_enter.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
            var youwin_wave = Node_enter.getChildByName("youwin_wave").getComponent(sp.Skeleton);
            _this15.scheduleOnce(function () {
              spEnter.setAnimation(0, "freegame_intro", false);
              spEnter.addAnimation(0, "freegame_idle", true);
              youwin_wave.setAnimation(0, "intro", false);
              youwin_wave.addAnimation(0, "idle", true);
            });
            var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + freeTimes;
            _this15.scheduleOnce(function () {
              _this15.isFreeEnter = false;
              var mask = _this15.Node_free.getChildByName("mask");
              mask.active = false;
              var Node_enter = _this15.Node_free.getChildByName("Node_enter");
              var youwin_wave = Node_enter.getChildByName("youwin_wave").getComponent(sp.Skeleton);
              var spEnter = Node_enter.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
              youwin_wave.setAnimation(0, "finish", false);
              spEnter.setAnimation(0, "freegame_finish", false);
              spEnter.setCompleteListener(function () {
                spEnter.setCompleteListener(null);
                Node_enter.active = false;
                mask.active = false;
                _this15.Node_free.active = false;
                resolve();
              });
            }, 3);
          });
        };
        _proto.setEnterFree = function setEnterFree() {
          this.isFreeEnter = true;

          //enter
          var mask = this.Node_free.getChildByName("mask");
          mask.active = true;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.getComponent(UIOpacity).opacity = 255;
          Node_enter.active = true;
          var spEnter = Node_enter.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
          var youwin_wave = Node_enter.getChildByName("youwin_wave").getComponent(sp.Skeleton);
          switch (KrakenModel.instance.betResult.nextState) {
            case eGameStateType.freeState:
              {
                KrakenUtils.instance.playSound(eSound.free_start);
                this.scheduleOnce(function () {
                  spEnter.setAnimation(0, "freegame_intro", false);
                  spEnter.addAnimation(0, "freegame_idle", true);
                  youwin_wave.setAnimation(0, "intro", false);
                  youwin_wave.addAnimation(0, "idle", true);
                });
                break;
              }
            case eGameStateType.superFreeState:
              {
                KrakenUtils.instance.playSound(eSound.sp_free_start);
                this.scheduleOnce(function () {
                  spEnter.setAnimation(0, "abyss_intro", false);
                  spEnter.addAnimation(0, "abyss_idle", true);
                  youwin_wave.setAnimation(0, "intro", false);
                  youwin_wave.addAnimation(0, "idle", true);
                });
                break;
              }
          }
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + KrakenModel.instance.totalCount;
          this.scheduleOnce(this.closeFreeEnter, 3);
        };
        _proto.closeFreeEnter = function closeFreeEnter() {
          var _this16 = this;
          if (!this.isFreeEnter) {
            return;
          }
          this.isFreeEnter = false;
          var mask = this.Node_free.getChildByName("mask");
          this.Label_win.string = "";
          mask.active = false;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          var youwin_wave = Node_enter.getChildByName("youwin_wave").getComponent(sp.Skeleton);
          var spEnter = Node_enter.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
          switch (KrakenModel.instance.betResult.nextState) {
            case eGameStateType.freeState:
              {
                youwin_wave.setAnimation(0, "finish", false);
                spEnter.setAnimation(0, "freegame_finish", false);
                spEnter.setCompleteListener(function () {
                  spEnter.setCompleteListener(null);
                  Node_enter.active = false;
                  _this16.doEnterFree();
                });
                break;
              }
            case eGameStateType.superFreeState:
              {
                youwin_wave.setAnimation(0, "finish", false);
                spEnter.setAnimation(0, "abyss_finish", false);
                spEnter.setCompleteListener(function () {
                  spEnter.setCompleteListener(null);
                  Node_enter.active = false;
                  _this16.doEnterFree();
                });
                break;
              }
          }
        };
        _proto.closeFreeEnd = function closeFreeEnd() {
          var _this17 = this;
          if (!this.isFreeEnd) {
            return;
          }
          this.isFreeEnd = false;
          var Node_end = this.Node_free.getChildByName("Node_end");
          KrakenModel.instance.totalFreeWin = 0;
          var mask = this.Node_free.getChildByName("mask");
          mask.active = false;
          if (KrakenModel.instance.superFreeList.length > 0) {
            this.doSuperFreeScaleResum();
          }
          KrakenModel.instance.isSuperScale = false;
          if (KrakenModel.instance.betResult.state == eGameStateType.superFreeState) {
            this.resetCollectLight();
          } else {
            this.doUpdateCollectLight();
          }
          var winLevel = KrakenModel.instance.betResult.state == eGameStateType.freeState ? "" : "2";
          var spEnd = Node_end.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
          spEnd.setAnimation(0, "youwin" + winLevel + "_finish", false);
          spEnd.setCompleteListener(function () {
            spEnd.setCompleteListener(null);
            _this17.hideFree();
          });
        };
        _proto.setFreeView = function setFreeView(nextState) {
          var _this18 = this;
          KrakenModel.instance.totalFreeWin = KrakenModel.instance.betResult.freeInfo.prizeAmount;
          this.Label_win.node.active = true;
          this.Label_win.string = KrakenModel.instance.totalFreeWin > 0 ? Common.ChangeMoneyShow(KrakenModel.instance.totalFreeWin, 2) : "";
          this.Label_freeBaseBet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
          this.Label_freeTimes.string = KrakenModel.instance.betResult.freeInfo.remainingCount + "/" + KrakenModel.instance.betResult.freeInfo.totalCount;
          this.Node_bqRoot.active = false;
          this.Node_bqRoot_free.active = true;
          var Node_zhuZiRoot = this.Node_zhuZhi.getChildByName("Node_zhuZiRoot");
          var left_qipao = this.Node_zhuZhi.getChildByName("left_qipao");
          Node_zhuZiRoot.active = false;
          left_qipao.active = false;
          switch (nextState) {
            case eGameStateType.freeState:
              {
                tween(this.normal_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 0
                }).call(function () {
                  _this18.normal_bg.active = false;
                }).start();
                this.free_bg.active = true;
                this.free_bg.getComponent(UIOpacity).opacity = 0;
                tween(this.free_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 255
                }).start();
                break;
              }
            case eGameStateType.superFreeState:
              {
                tween(this.normal_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 0
                }).call(function () {
                  _this18.normal_bg.active = false;
                }).start();
                this.superfree_bg.active = true;
                this.superfree_bg.getComponent(UIOpacity).opacity = 0;
                tween(this.superfree_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 255
                }).start();
                break;
              }
          }
        }

        // freeRate = 1;
        ;

        _proto.doEnterFree = function doEnterFree() {
          var _this19 = this;
          if (KrakenModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }

          // for (let i = 0; i < this.Kraken_symbolList.length; i++) {
          //     this.Kraken_symbolList[i].stopScatterBlink();
          // }

          this.Node_free.active = false;
          KrakenModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Button_run.interactable = false;
          var muBtn_run = this.Button_run.node.getComponent(Kraken_mutBtn);
          muBtn_run.setState(2);
          KrakenModel.instance.totalFreeWin = KrakenModel.instance.betResult.freeInfo.prizeAmount;
          this.Label_win.node.active = true;
          this.Label_win.string = KrakenModel.instance.totalFreeWin > 0 ? Common.ChangeMoneyShow(KrakenModel.instance.totalFreeWin, 2) : "";
          this.Label_freeBaseBet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
          this.Label_freeTimes.string = KrakenModel.instance.betResult.freeInfo.remainingCount + "/" + KrakenModel.instance.betResult.freeInfo.totalCount;
          this.Node_bqRoot.active = false;
          this.Node_bqRoot_free.active = true;
          tween(this.normal_bg.getComponent(UIOpacity)).to(1.5, {
            opacity: 0
          }).call(function () {
            _this19.normal_bg.active = false;
          }).start();
          tween(this.node).shake(2, 3, 3).call(function () {
            _this19.node.position = v3(0);
          }).start();
          switch (KrakenModel.instance.betResult.nextState) {
            case eGameStateType.freeState:
              {
                KrakenUtils.instance.playBgMusic(eSound.free_bgm);
                this.free_bg.active = true;
                this.free_bg.getComponent(UIOpacity).opacity = 0;
                tween(this.free_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 255
                }).start();
                KrakenUtils.instance.playSound(eSound.kraken_raise);
                this.haiguai_main.setAnimation(0, "animation3", false);
                this.haiguai_main.addAnimation(0, "animation1", true);
                var Node_zhuZiRoot = this.Node_zhuZhi.getChildByName("Node_zhuZiRoot");
                var left_qipao = this.Node_zhuZhi.getChildByName("left_qipao");
                left_qipao.active = true;
                var left_qipaoAni = left_qipao.getComponent(sp.Skeleton);
                left_qipaoAni.setAnimation(0, "idle", false);
                left_qipaoAni.setCompleteListener(function () {
                  left_qipaoAni.setCompleteListener(null);
                  left_qipao.active = false;
                });
                tween(Node_zhuZiRoot.getComponent(UIOpacity)).to(0.5, {
                  opacity: 0
                }).call(function () {
                  Node_zhuZiRoot.active = false;
                }).start();
                break;
              }
            case eGameStateType.superFreeState:
              {
                KrakenUtils.instance.playBgMusic(eSound.super_bgm);
                this.superfree_bg.active = true;
                this.superfree_bg.getComponent(UIOpacity).opacity = 0;
                tween(this.superfree_bg.getComponent(UIOpacity)).to(1.5, {
                  opacity: 255
                }).start();
                this.haiguai_main.setAnimation(0, "animation0", false);
                this.haiguai_main.addAnimation(0, "animation1", true);

                //
                var left_win = this.Node_zhuZhi.getChildByName("left_win");
                left_win.active = true;
                var left_winAni = left_win.getComponent(sp.Skeleton);
                left_winAni.setAnimation(0, "idle", false);
                left_winAni.setCompleteListener(function () {
                  left_winAni.setCompleteListener(null);
                  left_win.active = false;
                  var Node_zhuZiRoot = _this19.Node_zhuZhi.getChildByName("Node_zhuZiRoot");
                  var left_qipao = _this19.Node_zhuZhi.getChildByName("left_qipao");
                  left_qipao.active = true;
                  var left_qipaoAni = left_qipao.getComponent(sp.Skeleton);
                  left_qipaoAni.setAnimation(0, "idle", false);
                  left_qipaoAni.setCompleteListener(function () {
                    left_qipaoAni.setCompleteListener(null);
                    left_qipao.active = false;
                    Node_zhuZiRoot.active = false;
                  });
                });
                break;
              }
          }
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            KrakenCtrl.instance.reqBet();
          }, 5);
        };
        _proto.doEndFree = function doEndFree() {
          this.isFreeEnd = true;
          this.Node_free.active = true;
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          var mask = this.Node_free.getChildByName("mask");
          mask.active = true;
          var youwin_wave = Node_end.getChildByName("youwin_wave").getComponent(sp.Skeleton);
          var Button_exitFree = Node_end.getChildByName("Button_exitFree").getComponent(Button);
          Button_exitFree.interactable = true;
          var winLevel = KrakenModel.instance.betResult.state == eGameStateType.freeState ? "" : "2";
          var spEnd = Node_end.getChildByName("Node_spineBg").getComponent(sp.Skeleton);
          spEnd.node.active = true;
          this.scheduleOnce(function () {
            spEnd.setAnimation(0, "youwin" + winLevel + "_intro", false);
            spEnd.addAnimation(0, "youwin" + winLevel + "_idle", true);
            youwin_wave.setAnimation(0, "intro", false);
            youwin_wave.addAnimation(0, "idle", true);
          });
          this.scheduleOnce(function () {
            switch (KrakenModel.instance.betResult.nextState) {
              case eGameStateType.freeState:
                {
                  KrakenUtils.instance.playSound(eSound.free_collect);
                  break;
                }
              case eGameStateType.superFreeState:
                {
                  KrakenUtils.instance.playSound(eSound.sp_free_collect);
                  break;
                }
            }
            var Label_totalWin = Node_end.getChildByName("Label_totalWin");
            KrakenUtils.instance.updateLabelAddNf(Label_totalWin.getComponent(Label), KrakenModel.instance.totalFreeWin, 4);
          }, 0.25);
          AudioManager.instance.pauseMusic();
          this.scheduleOnce(this.closeFreeEnd, 3.0);
        }

        ////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(KrakenModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            KrakenUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        };
        _proto.setBonus = function setBonus(bonus) {
          if (bonus === void 0) {
            bonus = null;
          }
          var arrType = ["minor", "major", "mini", "grand"];
          if (!bonus) {
            this.bonus = {};
            this.bonus["minor"] = this.minBonus.minor;
            this.bonus["major"] = this.minBonus.major;
            this.bonus["mini"] = this.minBonus.mini;
            this.bonus["grand"] = this.minBonus.grand;
            for (var i = 0; i < 4; i++) {
              var type = arrType[i];
              this.updateBonus(type);
            }
          } else {
            this.bonus = bonus;
            for (var _i5 = 0; _i5 < 4; _i5++) {
              var _type = arrType[_i5];
              var Label_counts = find("Node_gmRoot/Node_" + _type + "/Label_counts", this.Layer_90_logo).getComponent(Label);
              Tween.stopAllByTarget(Label_counts);
              Label_counts.string = Common.ChangeMoneyShow(this.bonus["" + _type], 2);
            }
          }
        };
        _proto.updateBonus = function updateBonus(type) {
          var _this20 = this;
          var Label_counts = find("Node_gmRoot/Node_" + type + "/Label_counts", this.Layer_90_logo).getComponent(Label);
          Label_counts.string = Common.ChangeMoneyShow(this.bonus["" + type], 2);
          Tween.stopAllByTarget(Label_counts);
          var delay = type == "grand" ? Math.random() * 3 + 0.5 : Math.random() * 10 + 3;
          tween(Label_counts).repeatForever(tween(Label_counts).delay(delay).call(function () {
            _this20.bonus["" + type] += 1;
            if (_this20.bonus["" + type] > _this20.maxBonus["" + type]) {
              _this20.bonus["" + type] = _this20.minBonus["" + type];
            }
            Label_counts.string = Common.ChangeMoneyShow(_this20.bonus["" + type], 2);
          })).start();
        }

        //    //net update
        ;

        _proto.updateView = /*#__PURE__*/
        function () {
          var _updateView = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(event, data) {
            var _this21 = this;
            var symList, i, arrPro, _i6, bonus, rate, _bonus;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = event;
                  _context3.next = _context3.t0 === eProto.HD_info ? 3 : _context3.t0 === eProto.HD_History ? 63 : _context3.t0 === eProto.HD_Bet ? 64 : _context3.t0 === ConfigManager.instance.protocolHall.getWallet ? 81 : _context3.t0 === ConfigManager.instance.protocolHall.pushWallet ? 81 : _context3.t0 === ConfigManager.instance.protocolHall.login ? 83 : 88;
                  break;
                case 3:
                  if (!KrakenModel.instance.gameInfo.openNum) {
                    KrakenModel.instance.gameInfo.openNum = KrakenUtils.instance.getInitOpenNums();
                  }
                  Common.closeWait();
                  this.Node_clickMask_down.active = false;
                  this.Label_lock.string = Common.ChangeMoneyShow(5000, 2);
                  if (KrakenModel.instance.betResult.freeInfo.remainingCount > 0) {
                    this.setFreeView(KrakenModel.instance.betResult.seaMonsterInfo.superFree ? eGameStateType.superFreeState : eGameStateType.freeState);
                  }
                  symList = null;
                  symList = KrakenUtils.instance.getResultByFreeInfo(KrakenModel.instance.betResult.openNum, KrakenModel.instance.betResult.prizeInfo);
                  for (i = 0; i < this.Kraken_symbolList.length; i++) {
                    this.Kraken_symbolList[i].init(symList[i]);
                  }
                  _context3.next = 13;
                  return this.doAwait(0.3);
                case 13:
                  if (!(KrakenModel.instance.gameInfo.prizeAmount > 0)) {
                    _context3.next = 18;
                    break;
                  }
                  //doEffect
                  arrPro = [];
                  for (_i6 = 0; _i6 < this.Kraken_symbolList.length; _i6++) {
                    arrPro.push(this.Kraken_symbolList[_i6].doEffect());
                  }
                  _context3.next = 18;
                  return Promise.all(arrPro);
                case 18:
                  this.updateGold();
                  this.haiguai_box.setAnimation(0, "lv" + (KrakenModel.instance.betResult.boxState + 1) + "_idle", true);

                  //gengxin
                  this.Label_win.string = KrakenModel.instance.gameInfo.prizeAmount > 0 ? Common.ChangeMoneyShow(KrakenModel.instance.gameInfo.prizeAmount, 2) : "";
                  if (KrakenModel.instance.gameInfo.baseBetAmount > 0) {
                    KrakenModel.instance.curBet = KrakenModel.instance.gameInfo.baseBetAmount;
                  } else {
                    KrakenModel.instance.curBet = cMinBase;
                  }
                  KrakenUtils.instance.setBaseBet(KrakenModel.instance.curBet);
                  this.setBaseBet();
                  this.Label_bet.string = Common.ChangeMoneyShow(KrakenModel.instance.curBet, 2);
                  this.doUpdateCollectLight();
                  if (KrakenModel.instance.isCollectLock && KrakenModel.instance.curBet >= cLockBase) {
                    this.showCollectLock(false);
                  }

                  // await (() => {
                  //   return new Promise<boolean>((resolve, rejects) => {
                  //     let id = setInterval(() => {
                  //       if (this.loaded) {
                  //         clearInterval(id);

                  //         tween(this.Node_loading.getComponent(UIOpacity))
                  //           .to(0.25, { opacity: 0 })
                  //           .call(() => {
                  //             this.Node_loading.active = false;
                  //             return resolve(true);
                  //           })
                  //           .start();
                  //       }
                  //     }, 0.5);
                  //   });
                  // })();
                  _context3.next = 29;
                  return function () {
                    return new Promise(function (resolve, rejects) {
                      _this21.Node_gameEnter.active = true;
                      var youwin_wave = _this21.Node_gameEnter.getChildByName("youwin_wave").getComponent(sp.Skeleton);
                      var game_intro = _this21.Node_gameEnter.getChildByName("game_intro").getComponent(sp.Skeleton);
                      game_intro.node.active = true;
                      youwin_wave.node.active = true;
                      game_intro.setAnimation(0, "intro", false);
                      game_intro.addAnimation(0, "idle", false);
                      youwin_wave.setAnimation(0, "intro", false);
                      youwin_wave.addAnimation(0, "idle", false);
                      _this21.scheduleOnce(function () {
                        game_intro.setAnimation(0, "finish", false);
                        youwin_wave.setAnimation(0, "finish", false);
                        game_intro.setCompleteListener(function () {
                          game_intro.setCompleteListener(null);
                          _this21.Node_gameEnter.active = false;
                          return resolve(true);
                        });
                      }, 1.0);
                    });
                  }();
                case 29:
                  bonus = null;
                  _context3.t1 = KrakenModel.instance.betResult.state;
                  _context3.next = _context3.t1 === eGameStateType.jackpotState ? 33 : _context3.t1 === eGameStateType.seaMonsterState ? 35 : 37;
                  break;
                case 33:
                  bonus = KrakenModel.instance.betResult.jackpotInfo.bonus;
                  return _context3.abrupt("break", 37);
                case 35:
                  bonus = KrakenModel.instance.betResult.seaMonsterInfo.bonus;
                  return _context3.abrupt("break", 37);
                case 37:
                  this.setBonus(bonus);
                  KrakenModel.instance.isSuperScale = false;
                  if (!(KrakenModel.instance.betResult.state > eGameStateType.superFreeState || KrakenModel.instance.betResult.nextState > eGameStateType.superFreeState)) {
                    _context3.next = 55;
                    break;
                  }
                  _context3.next = 42;
                  return this.doCheckSubGame(true);
                case 42:
                  this.setBonus();
                  rate = KrakenModel.instance.totalWinSubGame / KrakenModel.instance.curBet;
                  if (!(KrakenModel.instance.totalWinSubGame > 0)) {
                    _context3.next = 53;
                    break;
                  }
                  if (!(rate > 6)) {
                    _context3.next = 50;
                    break;
                  }
                  this.Node_bigWin.active = true;
                  _context3.next = 49;
                  return this.Node_bigWin.getComponent(Kraken_bigWin).showBigWin(KrakenModel.instance.totalWinSubGame, 0.0);
                case 49:
                  this.Node_bigWin.active = false;
                case 50:
                  this.Label_win.node.active = true;
                  this.Label_win.string = Common.ChangeMoneyShowFloat(KrakenModel.instance.totalWinSubGame, 2);
                  KrakenModel.instance.totalWinSubGame = 0;
                case 53:
                  _context3.next = 60;
                  break;
                case 55:
                  if (!(KrakenModel.instance.betResult.state == eGameStateType.superFreeState && KrakenModel.instance.betResult.freeInfo.totalCount - KrakenModel.instance.betResult.freeInfo.remainingCount > 0 && KrakenModel.instance.betResult.freeInfo.remainingCount > 0)) {
                    _context3.next = 60;
                    break;
                  }
                  _context3.next = 58;
                  return this.doAwait(1);
                case 58:
                  this.doSuperFreeScale(true);
                  KrakenModel.instance.isSuperScale = true;
                case 60:
                  if (KrakenModel.instance.betResult.freeInfo.remainingCount > 0) {
                    this.showFree(true);
                  }
                  if (KrakenModel.instance.endBalance > 0) {
                    KrakenModel.instance.curBalance = KrakenModel.instance.endBalance;
                    KrakenModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  return _context3.abrupt("break", 88);
                case 63:
                  return _context3.abrupt("break", 88);
                case 64:
                  Tween.stopAllByTarget(this.Button_run.node);
                  if (!(KrakenModel.instance.betResult.state > eGameStateType.superFreeState)) {
                    _context3.next = 77;
                    break;
                  }
                  _bonus = null;
                  _context3.t2 = KrakenModel.instance.betResult.state;
                  _context3.next = _context3.t2 === eGameStateType.jackpotState ? 70 : _context3.t2 === eGameStateType.seaMonsterState ? 72 : 74;
                  break;
                case 70:
                  _bonus = KrakenModel.instance.betResult.jackpotInfo.bonus;
                  return _context3.abrupt("break", 74);
                case 72:
                  _bonus = KrakenModel.instance.betResult.seaMonsterInfo.bonus;
                  return _context3.abrupt("break", 74);
                case 74:
                  this.setBonus(_bonus);
                  _context3.next = 80;
                  break;
                case 77:
                  AudioManager.instance.isPlaying() ? null : KrakenUtils.instance.playBgMusic(eSound.base_bgm);
                  this.doStartRun();
                  this.updateGold();
                case 80:
                  return _context3.abrupt("break", 88);
                case 81:
                  this.updateGold();
                  return _context3.abrupt("break", 88);
                case 83:
                  //                //断线重连
                  KrakenModel.instance.reLogin = true;
                  Common.closeNetTips();
                  Common.closeWait();
                  this.gameShow();
                  return _context3.abrupt("break", 88);
                case 88:
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
        return KrakenGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_gameEnter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolMask", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect_pearl", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot_sub", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot_free", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Kraken_symbolList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_stop", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_lock", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_uiDown", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "respin_qipao_free", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_bqRoot", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_bqRoot_free", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeBaseBet", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Label_freeTimes", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_gold", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "haiguai_bx_goldshouji", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "haiguai_box", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "dianji_effect2", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "dianji_effect3", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Layer_0_bg", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Layer_90_logo", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Layer_80_symbol", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Node_niceWin", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "Button_fastState", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "Node_lockInfo", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "Node_collectContent", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "Node_jackpotGame", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "Node_seaMonster", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "Node_zhuZhi", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolContent", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_freeTimesBg", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "haiguai_main", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "haiguai_hand", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "Node_betWheel", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "Node_clickMask_down", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "normal_bg", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "free_bg", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "superfree_bg", [_dec56], {
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

System.register("chunks:///_virtual/KrakenLoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenUtils.ts', './KrakenDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Prefab, Component, KrakenUtils, eEvent, EventManager;
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
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "845bcvzAR1J8KLFOwybzhKq", "KrakenLoading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var KrakenLoading = exports('KrakenLoading', (_dec = ccclass("KrakenLoading"), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KrakenLoading, _Component);
        function KrakenLoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ProgressBar", _descriptor, _assertThisInitialized(_this));
          _this.gamePrefab = null;
          _this.fillRange0 = 0;
          _this.fillRange1 = 0;
          _this.fillRangeMax = 0.5;
          return _this;
        }
        var _proto = KrakenLoading.prototype;
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
          } else if (this.gamePrefab) {
            this.unschedule(this.updateFillRange);
            this.ProgressBar.fillRange = 1.0;
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
            _this2.gamePrefab = KrakenUtils.instance.bundle.get("prefab/KrakenGameView", Prefab);
            if (!_this2.gamePrefab) {
              _this2.fillRangeMax = 0.5;
              KrakenUtils.instance.bundle.load("prefab/KrakenGameView", Prefab, function (cur, total) {
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
        return KrakenLoading;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "ProgressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KrakenModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './KrakenDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus, eSymbol, eGameStateType;
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
      eGameStateType = module.eGameStateType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f0a4ib6UdJRIFjL12dhQvf", "KrakenModel", undefined);
      var KrakenModel = exports('KrakenModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(KrakenModel, _GameDef$BaseSington);
        function KrakenModel() {
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
          // isQuickStop: boolean = false;
          _this.curBet = 1000;
          // curBetBase: number = 0;
          // curBetRate: number = 0;
          _this.curTotalBet = 1000;
          _this.curTotalWin = 0;
          //    // curRate: number = 0;
          _this.totalRate = 8;
          //    //baseSet
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
          _this.gameStateType = eGameStateType.ordinaryState;
          _this.reLogin = false;
          ////////////////JACKPOT
          _this.boxState = 0;
          _this.boType = "count";
          _this.arrColWild = [];
          //////////////////////////////////////////
          _this.gameInfo = null;
          _this.betResult = null;
          _this.originalPearl = null;
          _this.originalOpenNum = null;
          _this.totalWinSubGame = 0;
          _this.superFreeList = [];
          _this.isSuperScale = false;
          //0:none 1:1x 2:2x
          _this.quickState = 0;
          _this.scatterCounts = 0;
          _this.isPick = false;
          //收集免费次数满8次进超级免费
          _this.isCollectLock = true;
          _this.isSuperFree = false;
          ///////////////////////////////////////
          _this.gameStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = KrakenModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {} ///////////////////////////////////////
        ;

        return KrakenModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/KrakenScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './KrakenDef.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eSound, eEvent, KrakenUtils, Common;
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
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "04352qssWBCLLVr2OzPbUxh", "KrakenScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var KrakenScene = exports('default', (_dec = ccclass("KrakenScene"), _dec2 = menu("game/KrakenGame/KrakenScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(KrakenScene, _Component);
        function KrakenScene() {
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
        var _proto = KrakenScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          KrakenUtils.instance.bundle = assetManager.getBundle(cBundle);
          KrakenUtils.instance.preLoad();
          KrakenUtils.instance.playBgMusic(eSound.base_bgm, false);
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
            KrakenUtils.instance.bundle.load("prefab/Node_loading", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3._node_loading = instantiate(prefab);
              _this3.node.addChild(_this3._node_loading);
              _this3.scheduleOnce(function () {
                Common.transformSize(_this3._node_loading);
              }, 0.05);
              tween(_this3._node_loading.getComponent(UIOpacity)).stop().to(0.15, {
                opacity: 255
              }).call(function () {
                Common.closeWait();
                if (KrakenUtils.instance.isChangeOrientation()) {
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
            KrakenUtils.instance.bundle.load("prefab/KrakenGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (KrakenUtils.instance.isChangeOrientation()) {
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
        return KrakenScene;
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

System.register("chunks:///_virtual/KrakenUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './KrakenDef.ts', './Common.ts', './KrakenModel.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _extends, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, Sprite, sp, sys, SpriteFrame, Font, GameDef, AudioManager, eSymbol, eConstDef, arrBase, eSound, Common, KrakenModel, i18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
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
      Font = module.Font;
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
      KrakenModel = module.KrakenModel;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b8087mfRJZLvpNGq9OTM0Vk", "KrakenUtils", undefined);
      var symbol_nomal_icon = ["symbols_13", "symbols_1", "symbols_2", "symbols_3", "symbols_4", "symbols_5", "symbols_6", "symbols_7", "symbols_8", "symbols_9", "symbols_10", "symbols_11", "symbols_12", "symbols_15", "symbols_14"];
      var symbol_SkeletonDataName = ["icon_scatter", "icon_wild", "icon_shark", "icon_redfish", "icon_wugui", "icon_shuimu", "icon_seastar", "icon_beike", "icon_A", "icon_K", "icon_Q", "icon_J",
      //icon_J
      "icon_10", "icon_bonus2", "icon_bonus1", "icon_bonus_tittle", "icon_bonus2", "icon_bonus2"];
      // RollerKraken = 1, //过山车
      //     FerrisWheel = 2, //摩天轮
      //     Tent = 3, //帐篷
      //     Store = 4, //商店
      //     HotGog = 5, //热狗
      //     Drink = 6, //饮料
      //     A = 7,
      //     K = 8,
      //     Q = 9,
      //     J = 10,
      //     TEN = 11,
      //     SCATTER = 12,
      //     WILD = 13,
      //     WILD2 = 14,
      //     WILD3 = 15,

      var KrakenUtils = exports('KrakenUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(KrakenUtils, _GameDef$BaseSington);
        function KrakenUtils() {
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
        var _proto = KrakenUtils.prototype;
        // arrIconBoxSpriteFrame: { [index: string]: SpriteFrame } = {};
        // arrIconFrameSpriteFrame: { [index: string]: SpriteFrame } = {};
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/KrakenGameView");
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
        _proto.loadRes_icon = /*#__PURE__*/function () {
          var _loadRes_icon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
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
                  arrHLoad.push(this.asyncLoadDir("I18n/" + i18n.LangKey + "/dynamic/spine", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator4 = _createForOfIteratorHelperLoose(arrSpineData), _step4; !(_step4 = _iterator4()).done;) {
                        var spineData = _step4.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/fish", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator5 = _createForOfIteratorHelperLoose(arrSpineData), _step5; !(_step5 = _iterator5()).done;) {
                        var spineData = _step5.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/theme314_font_respinpick", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
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
                  _context3.next = 9;
                  return Promise.all(arrHLoad);
                case 9:
                  if (cb) {
                    cb();
                  }
                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
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
          var inter = Common.numFormatInt(num / 1000);
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
            KrakenUtils.instance.playSound("sound/win" + soundIndex);
          }
          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(times + 1, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              if (soundIndex) {
                KrakenUtils.instance.stopSound("sound/win" + soundIndex);
                KrakenUtils.instance.playSound("sound/win" + soundIndex + "end");
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
              // KrakenUtils.instance.stopSound(KrakenDef.eSound.numAdd);

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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex) {
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex];
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        }
        // getItemSymbolIconBox(symbolIndex, length = 1, rim = 0) {
        //     let strLen = ["a", "b", "c"];
        //     let symbol = `${symbol_boxName[symbolIndex - 1]}_${strLen[length - 1]}`;

        //     if (this.arrIconBoxSpriteFrame) {
        //         let ret = this.arrIconBoxSpriteFrame[symbol];
        //         if (!ret) {
        //             return null;
        //         }
        //         return ret;
        //     }

        //     return null;
        // }
        // getItemSymbolIconFrame(rim = 0, length = 0) {
        //     if (rim == 0 || length < 2) {
        //         return null;
        //     }

        //     let symbol = rim == 1 ? `Base_Reel_Silver frame_0${length}` : `Base_Reel_Gold frame_0${length}`;
        //     if (this.arrIconFrameSpriteFrame) {
        //         return this.arrIconFrameSpriteFrame[symbol];
        //     }
        //     return null;
        // }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     let strAni = [];

        //     strAni.push(isIdle ? "spawn" : "win");
        //     switch (symbolIndex) {
        //         case KrakenDef.eSymbol.Scatter: {
        //             // isIdle ? strAni.push("idle") : null;
        //             strAni.push("idle");
        //             break;
        //         }
        //         case KrakenDef.eSymbol.Wild: {
        //             isIdle ? strAni.push("idle") : null;
        //             break;
        //         }
        //         default: {
        //             break;
        //         }
        //     }
        //     if (!strAni) {
        //         return null;
        //     }
        //     return strAni;
        // }
        ;

        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = symbol_SkeletonDataName[index];
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
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
          //         if (posMsg.num == KrakenDef.eSymbol.SCATTER) {
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
          var pearlInfo = KrakenModel.instance.betResult.pearl;
          var whitePearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.whitePearl : null;
          var yellowPearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.yellowPearl : null;
          for (var iCol = 0; iCol < eConstDef.CMaxCol; iCol++) {
            var symList = [];
            for (var iRow = 0; iRow < eConstDef.CMaxRow; iRow++) {
              var _index = iCol * eConstDef.CMaxRow + iRow;
              var sym = openNums[_index];
              var pearl = pearlInfo ? pearlInfo["" + _index] : null;
              if (!pearl && sym >= eSymbol.whitePearl) {
                pearl = yellowPearl && yellowPearl["" + _index] ? yellowPearl["" + _index] : whitePearl && whitePearl["" + _index] ? whitePearl["" + _index] : null;
              }
              symList.push({
                Sym: sym,
                IsReward: false,
                iRow: iRow,
                pearl: pearl
              });
            }
            this._retList.push(symList);
          }
          prizeInfo = prizeInfo || (KrakenModel.instance.betResult ? KrakenModel.instance.betResult.prizeInfo : null);
          if (prizeInfo) {
            for (var _iterator6 = _createForOfIteratorHelperLoose(prizeInfo), _step6; !(_step6 = _iterator6()).done;) {
              var indexList = _step6.value;
              if (indexList) {
                for (var _iterator7 = _createForOfIteratorHelperLoose(indexList.index), _step7; !(_step7 = _iterator7()).done;) {
                  var _index2 = _step7.value;
                  var _iRow = _index2 % eConstDef.CMaxRow;
                  var _iCol = Math.floor(_index2 / eConstDef.CMaxRow);
                  this._retList[_iCol][_iRow].IsReward = true;
                }
              }
            }
          }

          // for (const _retList of this._retList) {
          //     _retList.reverse();
          // }
          gts.Debug.Log("==getResult=retList=" + JSON.stringify(this._retList));
          return this._retList;
        };
        _proto.getResultByFreeInfo = function getResultByFreeInfo(openNums, prizeInfo) {
          if (openNums === void 0) {
            openNums = null;
          }
          if (prizeInfo === void 0) {
            prizeInfo = null;
          }
          var retList = [];
          var pearlInfo = KrakenModel.instance.betResult.pearl || {};
          pearlInfo = _extends({}, pearlInfo, KrakenModel.instance.betResult.freeInfo.whitePearl, KrakenModel.instance.betResult.freeInfo.yellowPearl);
          var whitePearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.whitePearl : null;
          var yellowPearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.yellowPearl : null;
          for (var iCol = 0; iCol < eConstDef.CMaxCol; iCol++) {
            var symList = [];
            for (var iRow = 0; iRow < eConstDef.CMaxRow; iRow++) {
              var _index3 = iCol * eConstDef.CMaxRow + iRow;
              var sym = yellowPearl && yellowPearl["" + _index3] ? eSymbol.yellowPearl : whitePearl && whitePearl["" + _index3] ? eSymbol.whitePearl : openNums[_index3];
              symList.push({
                Sym: sym,
                IsReward: false,
                iRow: iRow,
                pearl: pearlInfo ? pearlInfo["" + _index3] : null
              });
            }
            retList.push(symList);
          }
          prizeInfo = prizeInfo || (KrakenModel.instance.betResult ? KrakenModel.instance.betResult.prizeInfo : null);
          if (prizeInfo) {
            for (var _iterator8 = _createForOfIteratorHelperLoose(prizeInfo), _step8; !(_step8 = _iterator8()).done;) {
              var indexList = _step8.value;
              if (indexList) {
                for (var _iterator9 = _createForOfIteratorHelperLoose(indexList.index), _step9; !(_step9 = _iterator9()).done;) {
                  var _index4 = _step9.value;
                  var _iRow2 = _index4 % eConstDef.CMaxRow;
                  var _iCol2 = Math.floor(_index4 / eConstDef.CMaxRow);
                  retList[_iCol2][_iRow2].IsReward = true;
                }
              }
            }
          }
          gts.Debug.Log("==getResult=retList=" + JSON.stringify(retList));
          return retList;
        };
        _proto.getPealInfo = function getPealInfo(isSuper) {
          if (isSuper === void 0) {
            isSuper = false;
          }
          if (!isSuper) {
            return KrakenModel.instance.betResult.pearl;
          }
          var pearlInfo = KrakenModel.instance.betResult.pearl || {};
          pearlInfo = _extends({}, pearlInfo, KrakenModel.instance.betResult.freeInfo.whitePearl ? KrakenModel.instance.betResult.freeInfo.whitePearl : {}, KrakenModel.instance.betResult.freeInfo.yellowPearl ? KrakenModel.instance.betResult.freeInfo.yellowPearl : {});
          return pearlInfo;
        };
        _proto.getResult_seaMonster = function getResult_seaMonster(openNums, pearlInfo, isAddFreeInfo) {
          if (openNums === void 0) {
            openNums = null;
          }
          if (pearlInfo === void 0) {
            pearlInfo = null;
          }
          if (isAddFreeInfo === void 0) {
            isAddFreeInfo = false;
          }
          if (!openNums) {
            return null;
          }
          var retList = [];
          var whitePearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.whitePearl : null;
          var yellowPearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.yellowPearl : null;
          pearlInfo = pearlInfo || KrakenModel.instance.betResult.pearl;
          for (var i = 0; i < openNums.length; i++) {
            var sym = openNums[i];
            if (isAddFreeInfo) {
              sym = yellowPearl && yellowPearl["" + i] ? eSymbol.yellowPearl : whitePearl && whitePearl["" + i] ? eSymbol.whitePearl : sym;
            }

            // let iRow = i % 5;
            // let iCol = Math.floor(i / 4);
            retList[i] = {
              Sym: sym,
              IsReward: false,
              iRow: 0,
              pearl: pearlInfo ? pearlInfo["" + i] : null
            };
          }

          // prizeInfo = prizeInfo || (KrakenModel.instance.betResult ? KrakenModel.instance.betResult.prizeInfo : null);
          // if (prizeInfo) {
          //     for (const indexList of prizeInfo) {
          //         if (indexList) {
          //             for (const index of indexList.index) {
          //                 retList[index].IsReward = true;
          //             }
          //         }
          //     }
          // }

          gts.Debug.Log("==getResult=retList=" + JSON.stringify(retList));
          return retList;
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
        _createClass(KrakenUtils, [{
          key: "resultList",
          get: function get() {
            return this._retList;
          }
        }]);
        return KrakenUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotKrakenGame", ['./KrakenCtrl.ts', './KrakenDef.ts', './KrakenModel.ts', './KrakenScene.ts', './KrakenUtils.ts', './KrakenGameView.ts', './KrakenLoading.ts', './subGame_jackpot.ts', './subGame_oceanPick.ts', './subGame_seaMonster.ts', './Kraken_bigWin.ts', './Kraken_btnEffect.ts', './Kraken_help.ts', './Kraken_history.ts', './Kraken_historyItem.ts', './Kraken_mutBtn.ts', './Kraken_setAuto.ts', './Kraken_symbol.ts', './Kraken_symbolEffectRoot.ts', './Kraken_symbolItem.ts', './Kraken_symbolItemSeaMonster.ts', './Kraken_symbolSeaMonster.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/subGame_jackpot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './NetManager.ts', './KrakenCtrl.ts', './KrakenDef.ts', './EventManager.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, Label, find, UIRenderer, color, Button, UIOpacity, tween, Tween, v3, isValid, Component, instantiate, KrakenModel, NetManager, KrakenCtrl, eProto, eGameStateType, EventManager, KrakenUtils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Label = module.Label;
      find = module.find;
      UIRenderer = module.UIRenderer;
      color = module.color;
      Button = module.Button;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      v3 = module.v3;
      isValid = module.isValid;
      Component = module.Component;
      instantiate = module.instantiate;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      KrakenCtrl = module.KrakenCtrl;
    }, function (module) {
      eProto = module.eProto;
      eGameStateType = module.eGameStateType;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "49b8cixQq9OQYCoSIaDRXf/", "subGame_jackpot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var subGame_jackpot = exports('subGame_jackpot', (_dec = ccclass("subGame_jackpot"), _dec2 = menu("KrakenGame/subGame_jackpot"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(subGame_jackpot, _Component);
        function subGame_jackpot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._cFinish = null;
          _this.mWinNode = {};
          _this.mWinType = [];
          ///////
          _initializerDefineProperty(_this, "Node_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_logo", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_boxRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_bx_0", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pike_qieping_texiao", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_intro_effect", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_tip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipMask", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_end", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endAni", _descriptor11, _assertThisInitialized(_this));
          _this.scheduleID = null;
          _this.hsetInterval = null;
          _this.isEnd = false;
          _this.startClick = false;
          _this.isCollectClick = false;
          return _this;
        }
        var _proto = subGame_jackpot.prototype;
        ///////////////
        _proto.start = function start() {
          this.initValue();
          this.doEnter();
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_Bet, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          if (this.hsetInterval) {
            clearInterval(this.hsetInterval);
          }
          EventManager.instance.off(eProto.HD_Bet, this.onRecvData, this);
          if (this.scheduleID) {
            KrakenUtils.instance.stopSchedule(this.scheduleID);
          }
        }

        // doAutoSel() {
        //   if (KrakenModel.instance.isAuto && KrakenModel.instance.betResult.nextState == KrakenDef.eGameStateType.jackpotState) {
        //     this.reqBetBox();

        //     this.scheduleOnce(() => {
        //       this.doAutoSel();
        //     }, 1.0);
        //   }
        // }
        ;

        _proto.initValue = function initValue() {
          this.initBonus();
        };
        _proto.initBonus = function initBonus() {
          // let value_minor = 1;
          // let value_major = 2;
          // let value_mini = 3;
          // let value_grand = 0;

          var value_minor = KrakenModel.instance.betResult.jackpotInfo.bonus["minor"];
          var value_major = KrakenModel.instance.betResult.jackpotInfo.bonus["major"];
          var value_mini = KrakenModel.instance.betResult.jackpotInfo.bonus["mini"];
          var value_grand = KrakenModel.instance.betResult.jackpotInfo.bonus["grand"];
          var Label_counts = find("Node_gmRoot/Node_minor/Label_counts", this.Node_logo).getComponent(Label);
          Label_counts.string = Common.ChangeMoneyShow(value_minor, 2);
          Label_counts = find("Node_gmRoot/Node_major/Label_counts", this.Node_logo).getComponent(Label);
          Label_counts.string = Common.ChangeMoneyShow(value_major, 2);
          Label_counts = find("Node_gmRoot/Node_mini/Label_counts", this.Node_logo).getComponent(Label);
          Label_counts.string = Common.ChangeMoneyShow(value_mini, 2);
          Label_counts = find("Node_gmRoot/Node_grand/Label_counts", this.Node_logo).getComponent(Label);
          Label_counts.string = Common.ChangeMoneyShow(value_grand, 2);
        };
        _proto.doEnter = /*#__PURE__*/function () {
          var _doEnter = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  KrakenModel.instance.totalWinSubGame = 0;
                  this.pike_qieping_texiao.node.active = true;
                  this.pike_qieping_texiao.setAnimation(0, "animation1", false);
                  this.pike_qieping_texiao.setCompleteListener(function () {
                    _this2.pike_qieping_texiao.setCompleteListener(null);
                    _this2.pike_qieping_texiao.node.active = false;
                  });
                  this.scheduleOnce(function () {
                    KrakenUtils.instance.playSound("sound/jp_trigger");
                  }, 0.5);
                  this.scheduleOnce(function () {
                    _this2.scatter_intro_effect.node.active = true;
                    _this2.scatter_intro_effect.setAnimation(0, "idle", false);
                    _this2.scatter_intro_effect.setCompleteListener(function () {
                      _this2.scatter_intro_effect.setCompleteListener(null);
                      _this2.scatter_intro_effect.node.active = false;
                    });
                  }, 1);
                  this.scheduleOnce(function () {
                    var LOGO = _this2.Node_logo.getChildByName("LOGO");
                    tween(LOGO.getComponent(UIOpacity)).to(0.25, {
                      opacity: 0
                    }).start();
                    var Node_collectRoot = find("Node_gmRoot/Node_minor/Node_collectRoot", _this2.Node_logo);
                    Node_collectRoot.active = true;
                    Node_collectRoot = find("Node_gmRoot/Node_major/Node_collectRoot", _this2.Node_logo);
                    Node_collectRoot.active = true;
                    Node_collectRoot = find("Node_gmRoot/Node_mini/Node_collectRoot", _this2.Node_logo);
                    Node_collectRoot.active = true;
                    Node_collectRoot = find("Node_gmRoot/Node_grand/Node_collectRoot", _this2.Node_logo);
                    Node_collectRoot.active = true;
                    var Node_minor = find("Node_gmRoot/Node_minor", _this2.Node_logo);
                    var Node_major = find("Node_gmRoot/Node_major", _this2.Node_logo);
                    var Node_mini = find("Node_gmRoot/Node_mini", _this2.Node_logo);
                    var Node_grand = find("Node_gmRoot/Node_grand", _this2.Node_logo);
                    tween(Node_minor).delay(0.25).to(0.5, {
                      position: v3(Node_minor.position.x, Node_minor.position.y + 10, Node_minor.position.z)
                    }).start();
                    tween(Node_major).delay(0.25).to(0.5, {
                      position: v3(Node_major.position.x, Node_major.position.y + 10, Node_major.position.z)
                    }).start();
                    tween(Node_mini).delay(0.25).to(0.5, {
                      position: v3(Node_mini.position.x, Node_mini.position.y + 10, Node_mini.position.z)
                    }).start();
                    tween(Node_grand).delay(0.25).to(0.5, {
                      position: v3(Node_grand.position.x, Node_grand.position.y + 35, Node_grand.position.z)
                    }).start();
                    tween(_this2.Node_bg.getComponent(UIOpacity)).delay(0.5).to(0.5, {
                      opacity: 255
                    }).start();
                  }, 1.5);

                  //宝箱落下
                  this.scheduleOnce(this.doDropBox, 2.0);
                  this.scheduleOnce(function () {
                    // KrakenUtils.instance.stopSound(`sound/cheat_land1`);

                    _this2.Node_tipMask.active = true;
                    tween(_this2.Node_tipMask.getComponent(UIOpacity)).delay(0.5).to(0.5, {
                      opacity: 255
                    }).start();
                    _this2.scatter_tip.node.active = true;
                    _this2.scatter_tip.setAnimation(0, "normal_intro", false);
                    _this2.scatter_tip.addAnimation(0, "normal_idle", true);
                    _this2.scheduleOnce(function () {
                      _this2.scatter_tip.setAnimation(0, "normal_finish", false);
                      _this2.scatter_tip.setCompleteListener(function () {
                        _this2.scatter_tip.setCompleteListener(null);
                        _this2.Node_tipMask.active = false;
                        _this2.scatter_tip.node.active = false;
                        _this2.startClick = true;

                        // this.scheduleOnce(this.doAutoSel, 3.0);

                        if (KrakenModel.instance.isAuto) {
                          _this2.scheduleID = KrakenUtils.instance.startSchedule(10000, 2000, function () {
                            if (KrakenModel.instance.betResult.nextState == eGameStateType.jackpotState) {
                              _this2.reqBetBox();
                            }
                          });
                        }
                      });
                    }, 2.0);
                  }, 3.5 + KrakenModel.instance.betResult.jackpotInfo.boxNum * 0.25);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doEnter() {
            return _doEnter.apply(this, arguments);
          }
          return doEnter;
        }();
        _proto.showWaitEffect = function showWaitEffect(winType) {
          if (winType === void 0) {
            winType = null;
          }
          if (winType == null) {
            var boxCounts = KrakenModel.instance.betResult.jackpotInfo.boxNum;
            for (var i = 0; i < boxCounts; i++) {
              var nodeBox = this.Node_boxRoot.getChildByName("scatter_bx_" + i);
              var box_result = nodeBox.getChildByName("box_result");
              if (box_result.active) {
                var boxAni = nodeBox.getComponent(sp.Skeleton);
                var box_resultAni = box_result.getComponent(sp.Skeleton);
                if (boxAni.animation != "5openidle") {
                  boxAni.setAnimation(0, "5openidle", true);
                }
                if (box_resultAni.animation != "idle") {
                  box_resultAni.setAnimation(0, "idle", true);
                }
              }
            }
            return;
          }
          var arrNode = this.mWinNode[winType];
          if (arrNode.length == 2) {
            for (var _iterator = _createForOfIteratorHelperLoose(arrNode), _step; !(_step = _iterator()).done;) {
              var _nodeBox = _step.value;
              var _box_result = _nodeBox.getChildByName("box_result");
              var _boxAni = _nodeBox.getComponent(sp.Skeleton);
              var _box_resultAni = _box_result.getComponent(sp.Skeleton);
              if (_boxAni.animation != "6grayopentip") {
                _boxAni.setAnimation(0, "6grayopentip", true);
              }
              if (_box_resultAni.animation != "win_idle") {
                _box_resultAni.setAnimation(0, "win_idle", true);
              }
            }
          }
        };
        _proto.showWin = function showWin(spine, label, vWin, winType, isEndShow, isTen) {
          var _this3 = this;
          if (isEndShow === void 0) {
            isEndShow = false;
          }
          if (isTen === void 0) {
            isTen = false;
          }
          return new Promise(function (resolve, reject) {
            _this3.isCollectClick = false;
            if (_this3.hsetInterval) {
              clearInterval(_this3.hsetInterval);
            }
            var boxCounts = KrakenModel.instance.betResult.jackpotInfo.boxNum;
            var _loop = function _loop() {
              var nodeBox = _this3.Node_boxRoot.getChildByName("scatter_bx_" + i);
              var box_result = nodeBox.getChildByName("box_result");
              if (!box_result.active) {
                //未开
                box_result.active = true;
                var _box_resultAni2 = box_result.getComponent(sp.Skeleton);
                var arrStr = ["jackpot", "mini", "minor", "grand", "major"];
                var strType = arrStr[Math.floor(Math.random() * 4)];
                var dataName = strType == "jackpot" ? "scatter_bx_wild" : "scatter_bx_" + strType;
                _box_resultAni2.skeletonData = KrakenUtils.instance.getSkeletonData(dataName);
                _this3.scheduleOnce(function () {
                  _box_resultAni2.setAnimation(0, "idle", true);
                });
              }
              nodeBox.getComponent(UIRenderer).color = color(150, 150, 150, 255);
              box_result.getComponent(UIRenderer).color = color(150, 150, 150, 255);
            };
            for (var i = 0; i < boxCounts; i++) {
              _loop();
            }
            var keys = Object.keys(_this3.mWinNode);
            var arrNode = _this3.mWinNode[winType];
            if (arrNode.length == 3) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(arrNode), _step2; !(_step2 = _iterator2()).done;) {
                var nodeBox = _step2.value;
                var boxAni = nodeBox.getComponent(sp.Skeleton);
                boxAni.setAnimation(0, "7opentip", true);
                nodeBox.getComponent(UIRenderer).color = color(255, 255, 255, 255);
                var box_result = nodeBox.getChildByName("box_result");
                box_result.getComponent(UIRenderer).color = color(255, 255, 255, 255);
                var box_resultAni = box_result.getComponent(sp.Skeleton);
                box_resultAni.setAnimation(0, "win_intro", false);
                box_resultAni.addAnimation(0, "win_idle", true);
              }
            }
            _this3.scheduleOnce(function () {
              //显示得分
              _this3.Node_end.active = true;
              var Node_root = _this3.Node_end.getChildByName("Node_root");
              Node_root.active = true;
              var Button_collect = find("Node_btn/Button_collect", Node_root).getComponent(Button);
              Button_collect.interactable = true;
              Node_root.getComponent(UIOpacity).opacity = 0;
              tween(Node_root.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).start();
              _this3.Node_endAni.skeletonData = KrakenUtils.instance.getSkeletonData("respin_bonus2_" + winType);
              label.string = "";
              var strAni = isTen ? "10x" : winType;
              KrakenUtils.instance.playSound("sound/bell");
              KrakenUtils.instance.playSound("sound/dialog_" + winType + "1");
              spine.setAnimation(0, strAni + "_intro", false);
              spine.addAnimation(0, strAni + "_idle", true);
              spine.setCompleteListener(function () {
                spine.setCompleteListener(null);
              });
              _this3.scheduleOnce(function () {
                KrakenUtils.instance.playSound("sound/chest_trigger");
                KrakenUtils.instance.updateLabelAddNf(label, vWin, 4);
              }, 0.25);
              var doCloseAni = function doCloseAni() {
                if (_this3.hsetInterval) {
                  clearInterval(_this3.hsetInterval);
                }
                spine.setAnimation(0, strAni + "_finish", false);
                spine.setCompleteListener(function () {
                  spine.setCompleteListener(null);
                  _this3.Node_end.getChildByName("Node_root").active = false;
                  _this3.Node_end.active = false;
                  resolve();
                });
              };
              if (!isEndShow) {
                _this3.hsetInterval = setInterval(function () {
                  if (_this3.isCollectClick) {
                    Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
                    label.string = Common.ChangeMoneyShowFloat(vWin, 2);
                    _this3.unschedule(doCloseAni);
                    doCloseAni();
                  }
                }, 100);
                _this3.scheduleOnce(doCloseAni, 2.0);
              } else {
                resolve();
              }
            }, 1.5);
          });
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var i, winType, vWin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!KrakenModel.instance.betResult.jackpotInfo.bonus) {
                    _context2.next = 11;
                    break;
                  }
                  i = 0;
                case 2:
                  if (!(i < this.mWinType.length)) {
                    _context2.next = 11;
                    break;
                  }
                  winType = this.mWinType[i];
                  vWin = KrakenModel.instance.betResult.jackpotInfo.bonus["" + winType];
                  KrakenModel.instance.totalWinSubGame += vWin;
                  _context2.next = 8;
                  return this.showWin(this.Node_endAni, this.Label_win, vWin, winType, i == this.mWinType.length - 1, false);
                case 8:
                  i++;
                  _context2.next = 2;
                  break;
                case 11:
                  this.isEnd = true;
                  if (KrakenModel.instance.isAuto) {
                    this.scheduleOnce(this.close, 3);
                  }
                case 13:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd() {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.close = function close() {
          var _this4 = this;
          this.unschedule(this.close);
          this.Node_end.active = true;
          var arrStr = this.Node_endAni.animation.split("_");
          this.Node_endAni.setAnimation(0, arrStr[0] + "_finish", false);
          this.Node_endAni.setCompleteListener(function () {
            _this4.Node_endAni.setCompleteListener(null);
            _this4.Node_end.active = false;
          });
          this.scheduleOnce(function () {
            _this4.scatter_intro_effect.node.parent = _this4.node.parent;
            _this4.scatter_intro_effect.node.active = true;
            _this4.scatter_intro_effect.setAnimation(0, "idle", false);
            _this4.scatter_intro_effect.setCompleteListener(function () {
              _this4.scatter_intro_effect.node.destroyFromParent();
              _this4.node.destroyFromParent();
            });
            KrakenUtils.instance.playSound("sound/jp_trigger");
          }, 0.5);
          this.scheduleOnce(function () {
            var LOGO = _this4.Node_logo.getChildByName("LOGO");
            tween(LOGO.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            var Node_collectRoot = find("Node_gmRoot/Node_minor/Node_collectRoot", _this4.Node_logo);
            Node_collectRoot.active = false;
            for (var i = 0; i < 3; i++) {
              Node_collectRoot.getChildByName("Sprite_zhu_" + i).active = false;
            }
            Node_collectRoot = find("Node_gmRoot/Node_major/Node_collectRoot", _this4.Node_logo);
            Node_collectRoot.active = false;
            for (var _i = 0; _i < 3; _i++) {
              Node_collectRoot.getChildByName("Sprite_zhu_" + _i).active = false;
            }
            Node_collectRoot = find("Node_gmRoot/Node_mini/Node_collectRoot", _this4.Node_logo);
            Node_collectRoot.active = false;
            for (var _i2 = 0; _i2 < 3; _i2++) {
              Node_collectRoot.getChildByName("Sprite_zhu_" + _i2).active = false;
            }
            Node_collectRoot = find("Node_gmRoot/Node_grand/Node_collectRoot", _this4.Node_logo);
            Node_collectRoot.active = false;
            for (var _i3 = 0; _i3 < 3; _i3++) {
              Node_collectRoot.getChildByName("Sprite_zhu_" + _i3).active = false;
            }
            var Node_minor = find("Node_gmRoot/Node_minor", _this4.Node_logo);
            var Node_major = find("Node_gmRoot/Node_major", _this4.Node_logo);
            var Node_mini = find("Node_gmRoot/Node_mini", _this4.Node_logo);
            var Node_grand = find("Node_gmRoot/Node_grand", _this4.Node_logo);
            tween(Node_minor).delay(0.25).to(0.5, {
              position: v3(Node_minor.position.x, Node_minor.position.y - 10, Node_minor.position.z)
            }).start();
            tween(Node_major).delay(0.25).to(0.5, {
              position: v3(Node_major.position.x, Node_major.position.y - 10, Node_major.position.z)
            }).start();
            tween(Node_mini).delay(0.25).to(0.5, {
              position: v3(Node_mini.position.x, Node_mini.position.y - 10, Node_mini.position.z)
            }).start();
            tween(Node_grand).delay(0.25).to(0.5, {
              position: v3(Node_grand.position.x, Node_grand.position.y - 35, Node_grand.position.z)
            }).start();
            tween(_this4.node.getComponent(UIOpacity)).delay(0.5).call(function () {
              _this4._cFinish();
            }).to(0.5, {
              opacity: 0
            }).start();
          }, 0.5);
        };
        _proto.initLight = function initLight(strType, nodeBox) {
          var _this5 = this;
          var Node_collectRoot = find("Node_gmRoot/Node_" + strType + "/Node_collectRoot", this.Node_logo);
          var _loop2 = function _loop2() {
            var light = Node_collectRoot.getChildByName("Sprite_zhu_" + i);
            if (!light.active || light.getComponent(sp.Skeleton).skeletonData.name == "scatter_zhuzi_fire") {
              light.active = true;
              var ani = light.getComponent(sp.Skeleton);
              if (!ani.skeletonData || ani.skeletonData.name != "scatter_zhuzi") {
                ani.skeletonData = KrakenUtils.instance.getSkeletonData("scatter_zhuzi");
              }
              var mAniName = {
                mini: "green",
                minor: "blue",
                major: "purple",
                grand: "red"
              };
              _this5.scheduleOnce(function () {
                ani.setAnimation(0, mAniName["" + strType] + "_intro", false);
                ani.addAnimation(0, mAniName["" + strType] + "_idle", true);
              });
              _this5.mWinNode["" + strType] = _this5.mWinNode["" + strType] || [];
              _this5.mWinNode["" + strType].push(nodeBox);
              if (i == 1) {
                //将第3个点亮期待
                var light_2 = Node_collectRoot.getChildByName("Sprite_zhu_" + 2);
                light_2.active = true;
                var ani_2 = light_2.getComponent(sp.Skeleton);
                ani_2.skeletonData = KrakenUtils.instance.getSkeletonData("scatter_zhuzi_fire");
                _this5.scheduleOnce(function () {
                  ani_2.setAnimation(0, mAniName["" + strType] + "_fire", true);
                });
                _this5.showWaitEffect(strType);
              } else if (i == 2) {
                _this5.mWinType.push(strType);
              }
              KrakenUtils.instance.playSound("sound/chest_upgrade");
              return 1; // break
            }
          };

          for (var i = 0; i < 3; i++) {
            if (_loop2()) break;
          }
        };
        _proto.setResult = function setResult(nodeBox, strType) {
          var boxAni = nodeBox.getComponent(sp.Skeleton);
          boxAni.setAnimation(0, "3open", false);
          boxAni.addAnimation(0, "5openidle", true);
          var box_result = nodeBox.getChildByName("box_result");
          box_result.active = true;
          var box_resultAni = box_result.getComponent(sp.Skeleton);
          if (box_resultAni) {
            var dataName = strType == "jackpot" ? "scatter_bx_wild" : "scatter_bx_" + strType;
            box_resultAni.skeletonData = KrakenUtils.instance.getSkeletonData(dataName);
            this.scheduleOnce(function () {
              if (box_resultAni && isValid(box_resultAni) && KrakenModel.instance.betResult.state == eGameStateType.jackpotState) {
                box_resultAni.setAnimation(0, "intro", false);
                box_resultAni.addAnimation(0, "idle", true);
              }
            });
          }
        };
        _proto.doDropBox = function doDropBox() {
          var _this6 = this;
          var boxCounts = KrakenModel.instance.betResult.jackpotInfo.boxNum;

          // this.scheduleOnce(() => {
          //     KrakenUtils.instance.playSound(`sound/cheat_land2`, true);
          // }, 1.0);

          var startX = [0, -227, 227];
          var startY = [-370, boxCounts == 13 ? -310 : -370, boxCounts == 13 ? -310 : -370];
          var disY = 180;
          var _loop3 = function _loop3(i) {
            var newBox = _this6.Node_boxRoot.getChildByName("scatter_bx_" + i);
            if (!newBox) {
              newBox = instantiate(_this6.scatter_bx_0);
              newBox.active = true;
              newBox.name = "scatter_bx_" + i;
              _this6.Node_boxRoot.addChild(newBox);
            }
            var index_x = i % 3;
            var index_y = Math.floor(i / 3);
            var startPos = v3(startX[index_x], startY[index_x] + index_y * disY, 0);
            newBox.position = v3(startPos.x, startPos.y + 1920, startPos.z);
            Tween.stopAllByTarget(newBox);
            tween(newBox).delay(1.0 + i * 0.25).to(0.5, {
              position: startPos
            }, {
              easing: "circOut"
            }).call(function () {
              if (i % 5 == 0) {
                KrakenUtils.instance.stopSound("sound/cheat_land1");
                KrakenUtils.instance.playSound("sound/cheat_land1", false);
              } else if (i == boxCounts - 1) {
                KrakenUtils.instance.stopSound("sound/cheat_land1");
              }
            }).call(function () {
              var resultType = KrakenModel.instance.betResult.jackpotInfo.boxes && KrakenModel.instance.betResult.jackpotInfo.boxes["" + i] || null;
              if (resultType) {
                newBox.getComponent(sp.Skeleton).setAnimation(0, "5openidle", true);
                var btn = newBox.getComponent(Button);
                btn.interactable = false;
                _this6.setResult(newBox, resultType);
                if (resultType == "jackpot") {
                  _this6.initLight("mini", newBox);
                  _this6.initLight("minor", newBox);
                  _this6.initLight("major", newBox);
                  _this6.initLight("grand", newBox);
                } else {
                  _this6.initLight(resultType, newBox);
                }
              } else {
                newBox.getComponent(sp.Skeleton).setAnimation(0, "1fall", false);
                newBox.getComponent(sp.Skeleton).addAnimation(0, "2idle", true);
              }
            }).start();
          };
          for (var i = 0; i < boxCounts; i++) {
            _loop3(i);
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "Button_collect":
              {
                event.target.getComponent(Button).interactable = false;
                if (this.isEnd) {
                  this.close();
                } else {
                  this.isCollectClick = true;
                }
                break;
              }
            default:
              {
                if (!this.startClick) {
                  break;
                }
                if (this.scheduleID) {
                  KrakenUtils.instance.stopSchedule(this.scheduleID, true);
                }
                this.startClick = false;
                var index = parseInt(strName.replace("scatter_bx_", ""));
                this.reqBetBox(index);
                this.delayInteractable(event.target.getComponent(Button));
                break;
              }
          }
        };
        _proto.delayInteractable = function delayInteractable(btn) {
          btn.interactable = false;
          tween(btn).delay(0.5).call(function () {
            btn.interactable = true;
          }).start();
        }
        //////////////
        ;

        _proto.reqBetBox = function reqBetBox(index) {
          if (index === void 0) {
            index = -1;
          }
          if (!KrakenModel.instance.gameInfo) {
            return false;
          }
          if (index < 0) {
            var boxCounts = KrakenModel.instance.betResult.jackpotInfo.boxNum;
            do {
              index = Math.floor(Math.random() * boxCounts);
            } while (KrakenModel.instance.betResult.jackpotInfo.boxes["" + index]);
          }
          KrakenCtrl.instance.isReqBet = true;
          KrakenModel.instance.curTotalBet = KrakenModel.instance.curBet;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + KrakenModel.instance.curBet,
            boxIndex: "" + index
          });
          return true;
        };
        _proto.onRecvData = function onRecvData(data) {
          var _this7 = this;
          if (data.Code && data.Code != 0) {
            return;
          }
          switch (data.cmd) {
            case eProto.HD_Bet:
              {
                if (!KrakenModel.instance.betResult.jackpotInfo.boxes) {
                  return;
                }
                this.startClick = true;

                //显示开箱子结果
                var boxIndex = KrakenModel.instance.betResult.jackpotInfo.boxIndex;
                var Node_box = this.Node_boxRoot.getChildByName("scatter_bx_" + boxIndex);
                if (!Node_box || !isValid(Node_box)) {
                  return;
                }
                var btn = Node_box.getComponent(Button);
                Tween.stopAllByTarget(btn);
                btn.interactable = false;

                //点灯
                var resultType = KrakenModel.instance.betResult.jackpotInfo.boxes["" + boxIndex];
                this.setResult(Node_box, resultType);
                if (resultType == "jackpot") {
                  KrakenUtils.instance.playSound("sound/chest_pick2");
                  this.scheduleOnce(function () {
                    _this7.initLight("mini", Node_box);
                    _this7.initLight("minor", Node_box);
                    _this7.initLight("major", Node_box);
                    _this7.initLight("grand", Node_box);
                  }, 0.3);
                } else {
                  KrakenUtils.instance.playSound("sound/chest_pick1");
                  this.scheduleOnce(function () {
                    _this7.initLight(resultType, Node_box);
                  }, 0.3);
                }
                this.initBonus();
                if (KrakenModel.instance.betResult.nextState != eGameStateType.jackpotState) {
                  if (this.scheduleID) {
                    KrakenUtils.instance.stopSchedule(this.scheduleID);
                  }

                  // this.unschedule(this.doAutoSel);

                  this.startClick = false;
                  this.showWaitEffect(null);
                  this.scheduleOnce(function () {
                    _this7.doEnd();
                  }, 1.0);
                  return;
                }
                break;
              }
          }
        };
        _createClass(subGame_jackpot, [{
          key: "cFinish",
          get: function get() {
            return this._cFinish;
          },
          set: function set(cf) {
            this._cFinish = cf;
          }
        }]);
        return subGame_jackpot;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_logo", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_boxRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scatter_bx_0", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pike_qieping_texiao", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scatter_intro_effect", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scatter_tip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipMask", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_end", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_endAni", [_dec13], {
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

System.register("chunks:///_virtual/subGame_oceanPick.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './NetManager.ts', './KrakenCtrl.ts', './KrakenDef.ts', './EventManager.ts', './KrakenUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, Label, instantiate, v3, UITransform, tween, Tween, isValid, Button, Component, KrakenModel, NetManager, KrakenCtrl, eProto, eSound, eGameStateType, EventManager, KrakenUtils, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Label = module.Label;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      Tween = module.Tween;
      isValid = module.isValid;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      KrakenCtrl = module.KrakenCtrl;
    }, function (module) {
      eProto = module.eProto;
      eSound = module.eSound;
      eGameStateType = module.eGameStateType;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "c83de6rL9ZF/4AeKZ5B57uO", "subGame_oceanPick", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var subGame_oceanPick = exports('subGame_oceanPick', (_dec = ccclass("subGame_oceanPick"), _dec2 = menu("KrakenGame/subGame_oceanPick"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(subGame_oceanPick, _Component);
        function subGame_oceanPick() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_fishTemp", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "respin_opbonus", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_fishRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_pick", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_fishPick", _descriptor6, _assertThisInitialized(_this));
          //////////////////////////////////////////////
          _this._cFinish = null;
          _this.catchFishList = {};
          _this.pickAmount = 0;
          _this.wPickPos = null;
          // isAutoPick = false;
          // curTimes = 0;
          _this.scheduleID = null;
          _this.strFishID = ["a", "b", "c", "d", "e"];
          return _this;
        }
        var _proto = subGame_oceanPick.prototype;
        /////////////////////////////////////
        ///////////////
        _proto.start = function start() {
          var _this2 = this;
          this.scheduleID = KrakenUtils.instance.startSchedule(15000, 3000, function () {
            if (!_this2.Node_fishRoot) {
              return;
            }
            var fishNode = _this2.Node_fishRoot.children[0];
            if (fishNode && Math.abs(fishNode.position.x) < 300) {
              _this2.catchFishList[fishNode.name] = fishNode;
              _this2.reqBetPick();
            }
          });
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_Bet, this.onRecvData, this);
          KrakenModel.instance.isPick = true;
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_Bet, this.onRecvData, this);
          if (this.scheduleID) {
            KrakenUtils.instance.stopSchedule(this.scheduleID);
          }
          KrakenModel.instance.isPick = false;
          this.unschedule(this.createFish);
        }

        // protected update(dt: number): void {
        //   this.curTimes += dt;
        //   if (this.isAutoPick) {
        //     if (this.curTimes > 1000) {
        //       this.curTimes = 0;
        //     }
        //     return;
        //   }

        //   if (this.curTimes > 10000) {
        //     this.isAutoPick = true;
        //     this.curTimes = 0;
        //   }
        // }
        ;

        _proto.init = function init(cFinish, wPickPos) {
          KrakenUtils.instance.playBgMusic(eSound.pick_bgm);
          this.Node_fishRoot.destroyAllChildren();
          this.catchFishList = {};
          this.cFinish = cFinish;
          this.Node_fishRoot.active = false;
          this.wPickPos = wPickPos;
          this.pickAmount = KrakenModel.instance.betResult.seaMonsterInfo.pickAmount;
          this.doStart();
        };
        _proto.doStart = /*#__PURE__*/function () {
          var _doStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (KrakenModel.instance.betResult.seaMonsterInfo.superFree) {
                    KrakenUtils.instance.playSound(eSound.sp_pick_start);
                  } else {
                    KrakenUtils.instance.playSound(eSound.pick_start);
                  }
                  _context.next = 3;
                  return this.doEnter();
                case 3:
                  if (this.pickAmount > 0) {
                    this.Label_pick.node.active = true;
                    KrakenUtils.instance.updateLabel(this.Label_pick, Common.ChangeMoneyShow(this.pickAmount, 2));
                  }
                  this.Node_fishRoot.active = true;
                  this.createFish();
                  this.schedule(this.createFish, 2.5);
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doStart() {
            return _doStart.apply(this, arguments);
          }
          return doStart;
        }();
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this3 = this;
            var toPos, trackTime;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.bg.active = false;
                  this.Node_fishRoot.destroyAllChildren();
                  this.Node_fishRoot.active = false;
                  this.pickAmount = KrakenModel.instance.betResult.seaMonsterInfo.pickAmount;
                  if (this.pickAmount > 0) {
                    this.Label_pick.node.active = true;
                    this.Label_pick.string = Common.ChangeMoneyShow(this.pickAmount, 2);
                  }

                  //-300
                  toPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(this.wPickPos);
                  tween(this.respin_opbonus.node).to(1.0, {
                    position: v3(toPos.x, toPos.y + 300, toPos.z)
                  }).call(function () {
                    KrakenUtils.instance.playSound(eSound.fish_collect);
                  }).start();
                  this.respin_opbonus.setAnimation(0, "6tip_finish", false);
                  this.respin_opbonus.setCompleteListener(function () {
                    _this3.respin_opbonus.setCompleteListener(null);
                    _this3.node.destroyFromParent();

                    // this.cFinish(this.pickAmount);
                  });

                  trackTime = this.respin_opbonus.getCurrent(0).trackTime;
                  this.scheduleOnce(function () {
                    var youwin_wave = _this3.node.getChildByName("youwin_wave");
                    youwin_wave.active = false;
                    _this3.cFinish(_this3.pickAmount);
                  }, 1 * trackTime);
                case 11:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd() {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.doEnter = function doEnter() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            _this4.respin_opbonus.node.active = true;
            _this4.respin_opbonus.setAnimation(0, "1intro", false);
            _this4.respin_opbonus.addAnimation(0, "2idle", true);
            _this4.scheduleOnce(function () {
              _this4.respin_opbonus.setAnimation(0, "3finish", false);
              _this4.respin_opbonus.addAnimation(0, "4gaming", true);
            }, 2.5);
            _this4.scheduleOnce(resolve, 3.5);
          });
        };
        _proto.createFish = function createFish() {
          var _this5 = this;
          if (KrakenModel.instance.betResult.nextState != eGameStateType.pickState || this.Node_fishRoot.children.length > 0) {
            return;
          }
          var fishID = Math.floor(Math.random() * 5);
          var newFish = instantiate(this.Node_fishTemp);
          newFish.name = "Node_fish_" + (this.Node_fishRoot.children.length + 1) + "_" + fishID;
          var fishAni = newFish.getChildByName("fishAni").getComponent(sp.Skeleton);
          fishAni.skeletonData = KrakenUtils.instance.getSkeletonData("opbonus_fish_" + this.strFishID[fishID]);
          fishAni.node.active = true;
          this.scheduleOnce(function () {
            fishAni.setAnimation(0, "idle", true);
            var dirFish = [1, -1, 1, -1, 1];
            //方向 起点 终点 运动路径
            var isRight = Math.random() > 0.5;
            var startPos = v3(isRight ? -500 - fishAni.node.getComponent(UITransform).width / 2.0 : 500 + fishAni.node.getComponent(UITransform).width / 2.0, -Math.random() * 500, 0);
            var endPos = v3(-startPos.x, startPos.y, 0);
            newFish.position = startPos;
            var scaleX = isRight ? 1 : -1;
            newFish.scale = v3(scaleX * dirFish[fishID], 1, 1);
            tween(newFish).to(4, {
              position: endPos
            }).call(function () {
              _this5.scheduleOnce(_this5.createFish);
            }).destroySelf().start();
          });
          this.Node_fishRoot.addChild(newFish);
        };
        _proto.pickScore = function pickScore(pickAmount, score, wPos) {
          var _this6 = this;
          var newScore = instantiate(this.Label_fishPick.node);
          newScore.active = true;
          var startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(wPos);
          if (startPos.x < -(this.node.getComponent(UITransform).width / 2.0 - 100)) {
            startPos = v3(-(this.node.getComponent(UITransform).width / 2.0 - 100), startPos.y, startPos.z);
          } else if (startPos.x > this.node.getComponent(UITransform).width / 2.0 - 100) {
            startPos = v3(this.node.getComponent(UITransform).width / 2.0 - 100, startPos.y, startPos.z);
          }
          newScore.position = startPos;
          this.node.addChild(newScore);
          newScore.getComponent(Label).string = Common.ChangeMoneyShow(score, 2);

          // KrakenUtils.instance.playSound(KrakenDef.eSound.fish_collect);

          var toPos = this.Label_pick.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          toPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          tween(newScore).delay(0.3).to(0.5, {
            position: toPos
          }, {
            easing: "circOut"
          })
          // .call(() => {})
          .destroySelf().start();
          this.scheduleOnce(function () {
            KrakenUtils.instance.playSound(eSound.fish_pick1);
            _this6.Label_pick.node.active = true;
            _this6.pickAmount = pickAmount;
            KrakenUtils.instance.updateLabel(_this6.Label_pick, Common.ChangeMoneyShow(_this6.pickAmount, 2));
            _this6.respin_opbonus.setAnimation(0, "5tip_scorepick", false);
            _this6.respin_opbonus.addAnimation(0, "4gaming", true);
          }, 0.8);
        };
        _proto.fishDie = function fishDie(fishNode) {
          Tween.stopAllByTarget(fishNode);
          var fishAni = fishNode.getChildByName("fishAni").getComponent(sp.Skeleton);
          fishAni.setAnimation(0, "death1", false);
          fishAni.setCompleteListener(function () {
            fishAni.setCompleteListener(null);
            fishNode.destroyFromParent();
          });
        };
        _proto.doCatchFish = function doCatchFish(fishNode) {
          var _this7 = this;
          Tween.pauseAllByTarget(fishNode);

          //Node_fish_${this.Node_fishRoot.children.length + 1}_${this.strFishID[fishID]}`;

          KrakenUtils.instance.playOneShot(eSound.water_loop);
          var strFishName = fishNode.name;
          var arrFishName = strFishName.split("_");
          var fishID = arrFishName[3];
          if (!fishNode || !isValid(fishNode)) {
            return;
          }
          var fishAni = fishNode.getChildByName("fishAni").getComponent(sp.Skeleton);
          var isBig = KrakenModel.instance.betResult.seaMonsterInfo.prizeAmount / KrakenModel.instance.curBet > 20;
          var strAni = isBig ? "death2" : "death1";
          fishAni.setAnimation(0, strAni, false);

          // let trackTime = fishAni.getCurrent(0).trackTime;

          this.scheduleOnce(function () {
            var wPos = fishNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            _this7.pickScore(KrakenModel.instance.betResult.seaMonsterInfo.pickAmount, KrakenModel.instance.betResult.seaMonsterInfo.prizeAmount, wPos);
          }, isBig ? 0.7 : 0);
          fishAni.setCompleteListener(function () {
            fishAni.setCompleteListener(null);
            fishNode.destroyFromParent();
          });
          this.scheduleOnce(this.createFish);
          var fishState = fishNode.getChildByName("fishState").getComponent(sp.Skeleton);
          fishState.node.active = true;
          this.scheduleOnce(function () {
            fishState.setAnimation(0, "light" + (parseInt(fishID) + 1), true);
          });
        };
        _proto.doAwait = function doAwait(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            _this8.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "fishAni":
              {
                var fishNode = event.target.parent;
                event.target.getComponent(Button).interactable = false;
                if (this.catchFishList[fishNode.name]) {
                  break;
                }
                if (this.scheduleID) {
                  KrakenUtils.instance.stopSchedule(this.scheduleID, true);
                }
                Tween.pauseAllByTarget(fishNode);
                this.catchFishList[fishNode.name] = fishNode;
                this.reqBetPick();
                break;
              }
          }
        };
        _proto.delayInteractable = function delayInteractable(btn) {
          btn.interactable = false;
          tween(btn).delay(0.5).call(function () {
            btn.interactable = true;
          }).start();
        }
        //////////////
        ;

        _proto.reqBetPick = function reqBetPick() {
          if (!KrakenModel.instance.gameInfo) {
            return false;
          }
          KrakenCtrl.instance.isReqBet = true;
          KrakenModel.instance.curTotalBet = KrakenModel.instance.curBet;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + KrakenModel.instance.curBet
          });
          return true;
        };
        _proto.onRecvData = function onRecvData(data) {
          var _this9 = this;
          if (data.Code && data.Code != 0) {
            return;
          }
          switch (data.cmd) {
            case eProto.HD_Bet:
              {
                if (KrakenModel.instance.betResult.state != eGameStateType.pickState) {
                  return;
                }
                var keys = Object.keys(this.catchFishList);
                var fishNode = this.catchFishList[keys[0]];
                this.doCatchFish(fishNode);
                delete this.catchFishList[keys[0]];
                if (KrakenModel.instance.betResult.nextState != eGameStateType.pickState) {
                  if (this.scheduleID) {
                    KrakenUtils.instance.stopSchedule(this.scheduleID);
                  }
                  this.scheduleOnce(function () {
                    _this9.doEnd();
                  }, 3);
                }
                break;
              }
          }
        };
        _createClass(subGame_oceanPick, [{
          key: "cFinish",
          get: function get() {
            return this._cFinish;
          },
          set: function set(cf) {
            this._cFinish = cf;
          }
        }]);
        return subGame_oceanPick;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_fishTemp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "respin_opbonus", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_fishRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_pick", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_fishPick", [_dec8], {
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

System.register("chunks:///_virtual/subGame_seaMonster.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './KrakenModel.ts', './NetManager.ts', './KrakenCtrl.ts', './KrakenDef.ts', './EventManager.ts', './ConfigManager.ts', './KrakenUtils.ts', './Kraken_symbolSeaMonster.ts', './Kraken_symbol.ts', './Common.ts', './subGame_oceanPick.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, Node, Label, sp, instantiate, director, tween, v3, UIOpacity, Component, find, UITransform, KrakenModel, NetManager, KrakenCtrl, eProto, eSound, eGameStateType, eRunStatus, eSymbol, eConstDef, EventManager, ConfigManager, KrakenUtils, Kraken_symbolSeaMonster, Kraken_symbol, Common, subGame_oceanPick;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      sp = module.sp;
      instantiate = module.instantiate;
      director = module.director;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
      find = module.find;
      UITransform = module.UITransform;
    }, function (module) {
      KrakenModel = module.KrakenModel;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      KrakenCtrl = module.KrakenCtrl;
    }, function (module) {
      eProto = module.eProto;
      eSound = module.eSound;
      eGameStateType = module.eGameStateType;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      KrakenUtils = module.KrakenUtils;
    }, function (module) {
      Kraken_symbolSeaMonster = module.default;
    }, function (module) {
      Kraken_symbol = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      subGame_oceanPick = module.subGame_oceanPick;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "c833aS7S9RKDo8596Vxpy8H", "subGame_seaMonster", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var subGame_seaMonster = exports('subGame_seaMonster', (_dec = ccclass("subGame_seaMonster"), _dec2 = menu("KrakenGame/subGame_seaMonster"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(sp.Skeleton), _dec12 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(subGame_seaMonster, _Component);
        function subGame_seaMonster() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefabSeaMonsterEnter", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefabOceanPick", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolRoot", _descriptor3, _assertThisInitialized(_this));
          //Bonus
          _initializerDefineProperty(_this, "Label_winBonus", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bonus", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bonusAni", _descriptor6, _assertThisInitialized(_this));
          //end
          _initializerDefineProperty(_this, "Label_winEnd", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_end", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_endAni", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "respin_qipao", _descriptor10, _assertThisInitialized(_this));
          //////////////////////////////////////////////
          _this._cFinish = null;
          _this.Label_timesSpins = null;
          _this.Label_timesTotal = null;
          _this.Sprite_freeTimesBg = null;
          _this.Node_symbolContent = null;
          _this.Node_seaMonsterEnter = null;
          _this.symbolList_sub = [];
          //子滚动列表
          _this.Node_seaMonsterWin = null;
          _this.Label_seaMonster = null;
          _this.Node_oceanPick = null;
          /////////////////////////////////////
          _this.haiguai_box = null;
          _this.haiguai_main = null;
          _this.haiguai_hand = null;
          _this.Node_zhuZhi = null;
          /////////////////
          _this.totalTimes = 0;
          _this.runTimes = 0;
          return _this;
        }
        var _proto = subGame_seaMonster.prototype;
        ///////////////
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_Bet, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_Bet, this.onRecvData, this);
        };
        _proto.onDestroy = function onDestroy() {
          if (this.Node_seaMonsterEnter) {
            this.Node_seaMonsterEnter.destroyFromParent();
          }
        };
        _proto.doMonsterEnter = function doMonsterEnter() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            _this2.scheduleOnce(function () {
              var Node_symbolList = _this2.Node_symbolContent.getChildByName("Node_symbolList");
              for (var i = 0; i < 5; i++) {
                var KrakenSymbol = Node_symbolList.getChildByName("Node_symbol_" + i).getComponent(Kraken_symbol);
                KrakenSymbol.doPearlBlink();
              }
            }, 0);
            _this2.scheduleOnce(function () {
              var Node_symbolList = _this2.Node_symbolContent.getChildByName("Node_symbolList");
              for (var i = 0; i < 5; i++) {
                var KrakenSymbol = Node_symbolList.getChildByName("Node_symbol_" + i).getComponent(Kraken_symbol);
                KrakenSymbol.stopPearlBlink();
              }
              _this2.Node_seaMonsterEnter = instantiate(_this2.prefabSeaMonsterEnter);
              var gameView = director.getScene().getChildByName("Canvas").getChildByName("KrakenGameView");
              gameView.addChild(_this2.Node_seaMonsterEnter);
              _this2.scheduleOnce(function () {
                var respin_intro = _this2.Node_seaMonsterEnter.getChildByName("respin_intro").getComponent(sp.Skeleton);
                if (KrakenModel.instance.betResult.seaMonsterInfo.superFree) {
                  respin_intro.setAnimation(0, "super_intro", false);
                  respin_intro.addAnimation(0, "super_dile", true);
                } else {
                  respin_intro.setAnimation(0, "respin_intro", false);
                  respin_intro.addAnimation(0, "respin_dile", true);
                }
              });
            }, 3.0);
            _this2.scheduleOnce(function () {
              var respin_intro = _this2.Node_seaMonsterEnter.getChildByName("respin_intro").getComponent(sp.Skeleton);
              if (KrakenModel.instance.betResult.seaMonsterInfo.superFree) {
                respin_intro.setAnimation(0, "super_finish", false);
              } else {
                respin_intro.setAnimation(0, "respin_finish", false);
              }
              respin_intro.setCompleteListener(function () {
                respin_intro.setCompleteListener(null);
                _this2.Node_seaMonsterEnter.active = false;
                resolve();
              });
            }, 6.0);
          });
        };
        _proto.doShakeEffect = function doShakeEffect(isStart) {
          var _this3 = this;
          if (isStart === void 0) {
            isStart = true;
          }
          return new Promise(function (resolve, reject) {
            //海怪抓滚动盘 效果
            if (isStart) {
              var lv_0 = KrakenModel.instance.boxState + 1;
              _this3.haiguai_box.setAnimation(0, "lv" + lv_0 + "_finish", false);
              _this3.haiguai_box.setCompleteListener(function () {
                _this3.haiguai_box.setCompleteListener(null);
                var haiguai_bx_looplight = _this3.haiguai_box.node.getChildByName("haiguai_bx_looplight");
                haiguai_bx_looplight.active = false;
                _this3.haiguai_box.node.active = false;
              });
            }
            KrakenUtils.instance.playSound(eSound.kraken_raise);
            _this3.haiguai_main.setAnimation(0, "animation6", false);
            _this3.haiguai_main.addAnimation(0, "animation1", true);
            _this3.haiguai_hand.node.active = true;
            _this3.haiguai_hand.setAnimation(0, "animation6", false);
            _this3.haiguai_hand.setCompleteListener(function () {
              _this3.haiguai_hand.setCompleteListener(null);
              _this3.haiguai_hand.node.active = false;
            });
            tween(_this3.Node_symbolContent).delay(0.25).to(1.9, {
              position: v3(2, -30, 0)
            }, {
              easing: "circOut"
            }).to(0.25, {
              position: v3(2, 0, 0)
            }, {
              easing: "circOut"
            }).to(1.0, {
              position: v3(2, -250, 0)
            }, {
              easing: "elasticOut"
            }).call(function () {
              resolve();
            }).start();
            if (isStart) {
              //隐藏原来滚动盘
              var Node_symbolList = _this3.Node_symbolContent.getChildByName("Node_symbolList");
              Node_symbolList.active = false;
              for (var i = 0; i < 5; i++) {
                var KrakenSymbol = Node_symbolList.getChildByName("Node_symbol_" + i).getComponent(Kraken_symbol);
                KrakenSymbol.showSymbol(false);
              }
              //显示子滚动列表
              _this3.initView();
            }
          });
        }
        //气泡  柱子消失
        ;

        _proto.showZhuZi = function showZhuZi(isShow, isEnter) {
          if (isShow === void 0) {
            isShow = false;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          var Node_zhuZiRoot = this.Node_zhuZhi.getChildByName("Node_zhuZiRoot");
          if (!isShow) {
            if (!isEnter) {
              var left_qipao = this.Node_zhuZhi.getChildByName("left_qipao");
              left_qipao.active = true;
              var left_qipaoAni = left_qipao.getComponent(sp.Skeleton);
              left_qipaoAni.setAnimation(0, "idle", false);
              left_qipaoAni.setCompleteListener(function () {
                left_qipaoAni.setCompleteListener(null);
                left_qipao.active = false;
              });
              this.scheduleOnce(function () {
                Node_zhuZiRoot.active = false;
              }, 0.4);
            }
          } else {
            this.scheduleOnce(function () {
              Node_zhuZiRoot.active = true;
            }, 0.4);
          }
        };
        _proto.init = /*#__PURE__*/function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cFinish, isEnter) {
            var Layer_80_symbol;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isEnter === void 0) {
                    isEnter = false;
                  }
                  KrakenModel.instance.totalWinSubGame = KrakenModel.instance.betResult.seaMonsterInfo.totalPrizeAmount;
                  this.cFinish = cFinish;
                  this.Node_symbolContent = this.node.parent;
                  Layer_80_symbol = this.node.parent.parent.parent;
                  this.haiguai_main = find("Node_haiGuai/haiguai_main", Layer_80_symbol).getComponent(sp.Skeleton);
                  this.haiguai_box = find("Node_haiGuai/haiguai_box", Layer_80_symbol).getComponent(sp.Skeleton);
                  this.haiguai_hand = Layer_80_symbol.getChildByName("haiguai_hand").getComponent(sp.Skeleton);
                  this.Node_zhuZhi = Layer_80_symbol.getChildByName("Node_zhuZhi");
                  this.Node_seaMonsterWin = this.haiguai_box.node.getChildByName("Node_seaMonsterWin");
                  this.Label_seaMonster = this.Node_seaMonsterWin.getChildByName("Label_seaMonster").getComponent(Label);
                  this.Label_timesSpins = find("Label_timesSpins", this.Sprite_freeTimesBg).getComponent(Label);
                  this.Label_timesTotal = find("Label_timesTotal", this.Sprite_freeTimesBg).getComponent(Label);
                  this.totalTimes = KrakenModel.instance.betResult.seaMonsterInfo.totalCount;
                  this.runTimes = KrakenModel.instance.betResult.seaMonsterInfo.totalCount - KrakenModel.instance.betResult.seaMonsterInfo.remainingCount;
                  this.Label_timesSpins.string = "" + this.runTimes;
                  this.Label_timesTotal.string = "" + this.totalTimes;
                  if (KrakenModel.instance.betResult.seaMonsterInfo.superFree) {
                    KrakenUtils.instance.playSound(eSound.sp_respin_start);
                  } else {
                    KrakenUtils.instance.playSound(eSound.respin_start);
                  }
                  _context.next = 20;
                  return this.doMonsterEnter();
                case 20:
                  if (KrakenModel.instance.freeStatus == eRunStatus.NONE) {
                    this.showZhuZi(false, isEnter);
                  }
                  _context.next = 23;
                  return this.doShakeEffect();
                case 23:
                  this.Sprite_freeTimesBg.active = true;
                  KrakenModel.instance.totalWinSubGame = KrakenModel.instance.betResult.seaMonsterInfo.totalPrizeAmount;
                  this.Node_seaMonsterWin.active = KrakenModel.instance.totalWinSubGame > 0;
                  if (this.Node_seaMonsterWin.active) {
                    this.Label_seaMonster.string = Common.ChangeMoneyShow(KrakenModel.instance.totalWinSubGame, 2);
                    this.haiguai_box.node.active = true;
                    this.haiguai_box.setAnimation(0, "respin_bar_intro", false);
                    this.haiguai_box.addAnimation(0, "respin_bar_idle", true);
                  }
                  this.doStart();
                case 28:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function init(_x, _x2) {
            return _init.apply(this, arguments);
          }
          return init;
        }();
        _proto.doStart = /*#__PURE__*/function () {
          var _doStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(delay) {
            var _this4 = this;
            var _loop, i;
            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (delay === void 0) {
                    delay = 0;
                  }
                  KrakenUtils.instance.playBgMusic(eSound.respin_bgm);
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var symbolList, symbolItem, pearType, gameView, oceanPick, _loop2, j;
                    return _regeneratorRuntime().wrap(function _loop$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          symbolList = _this4.symbolList_sub[i];
                          symbolItem = symbolList._symbolList[0];
                          if (!(symbolItem.itemInfo.Sym == eSymbol.yellowPearl)) {
                            _context3.next = 27;
                            break;
                          }
                          pearType = symbolItem.itemInfo.pearl;
                          _context3.next = 6;
                          return symbolItem.doPearlEffect(pearType);
                        case 6:
                          if (!_this4.Node_seaMonsterWin.active && pearType == "power") {
                            _this4.haiguai_box.node.active = true;
                            _this4.haiguai_box.setAnimation(0, "respin_bar_intro", false);
                            _this4.haiguai_box.addAnimation(0, "respin_bar_idle", true);
                            _this4.Node_seaMonsterWin.active = true;
                            _this4.Label_seaMonster.string = "";
                          }
                          _context3.t0 = pearType;
                          _context3.next = _context3.t0 === "pick" ? 10 : 15;
                          break;
                        case 10:
                          //进入选择珍珠模式--捕鱼
                          if (!_this4.Node_oceanPick) {
                            _this4.Node_oceanPick = instantiate(_this4.prefabOceanPick);
                            gameView = director.getScene().getChildByName("Canvas").getChildByName("KrakenGameView");
                            gameView.addChild(_this4.Node_oceanPick);
                          }
                          oceanPick = _this4.Node_oceanPick.getComponent(subGame_oceanPick);
                          _context3.next = 14;
                          return function () {
                            return new Promise(function (resolve, reject) {
                              var wPickPos = symbolItem.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                              oceanPick.init(function (score) {
                                score = score == 0 ? 1 : score;
                                //变成白珍珠
                                symbolItem.doPearlChange(score);
                                symbolList.vPearl = score;
                                _this4.Node_oceanPick = null;
                                _this4.scheduleOnce(function () {
                                  symbolItem.updateZIndex(true);
                                  resolve();
                                }, 2.0);
                              }, wPickPos);
                            });
                          }();
                        case 14:
                          return _context3.abrupt("break", 27);
                        case 15:
                          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                            var symbolListJ, symbolItemJ, pickAmount, newLabel, resipn_scorelight;
                            return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                              while (1) switch (_context2.prev = _context2.next) {
                                case 0:
                                  symbolListJ = _this4.symbolList_sub[j];
                                  symbolItemJ = symbolListJ._symbolList[0];
                                  if (!(symbolItemJ.itemInfo.Sym == eSymbol.whitePearl && symbolItemJ.itemInfo.pearl != "grand" && symbolItemJ.itemInfo.pearl != "mini" && symbolItemJ.itemInfo.pearl != "minor" && symbolItemJ.itemInfo.pearl != "major")) {
                                    _context2.next = 7;
                                    break;
                                  }
                                  if (_this4.Node_seaMonsterWin.active && pearType == "power") {
                                    pickAmount = parseFloat(symbolItemJ.itemInfo.pearl);
                                    KrakenModel.instance.totalWinSubGame += pickAmount;
                                    _this4.Label_seaMonster.string = Common.ChangeMoneyShow(KrakenModel.instance.totalWinSubGame, 2);
                                    newLabel = instantiate(_this4.Label_seaMonster.node);
                                    _this4.Node_seaMonsterWin.addChild(newLabel);
                                    newLabel.scale = v3(0, 0, 0), tween(newLabel).to(0.5, {
                                      scale: v3(1.5, 1.5, 1.5),
                                      position: v3(newLabel.position.x, newLabel.position.y + 30, newLabel.position.z)
                                    }).destroySelf().start();
                                    resipn_scorelight = _this4.Node_seaMonsterWin.getChildByName("resipn_scorelight").getComponent(sp.Skeleton);
                                    resipn_scorelight.node.active = true;
                                    resipn_scorelight.setAnimation(0, "animation", false);
                                    resipn_scorelight.setCompleteListener(function () {
                                      resipn_scorelight.setCompleteListener(null);
                                      resipn_scorelight.node.active = false;
                                    });
                                  }
                                  KrakenUtils.instance.playOneShot(eSound.chest_pick1);
                                  _context2.next = 7;
                                  return symbolItemJ.doPearlEffect(pearType);
                                case 7:
                                case "end":
                                  return _context2.stop();
                              }
                            }, _loop2);
                          });
                          j = 0;
                        case 17:
                          if (!(j < _this4.symbolList_sub.length)) {
                            _context3.next = 22;
                            break;
                          }
                          return _context3.delegateYield(_loop2(), "t1", 19);
                        case 19:
                          j++;
                          _context3.next = 17;
                          break;
                        case 22:
                          // if (this.Node_seaMonsterWin.active&&pearType == "power") {
                          //     this.Node_seaMonsterWin.active = false;
                          // }
                          KrakenUtils.instance.playOneShot(eSound.chest_pick2);
                          symbolItem.doPearlChange();
                          symbolItem.updateZIndex(false);
                          symbolList.vPearl = 0;
                          return _context3.abrupt("break", 27);
                        case 27:
                        case "end":
                          return _context3.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 4:
                  if (!(i < this.symbolList_sub.length)) {
                    _context4.next = 9;
                    break;
                  }
                  return _context4.delegateYield(_loop(), "t0", 6);
                case 6:
                  i++;
                  _context4.next = 4;
                  break;
                case 9:
                  _context4.next = 11;
                  return this.doAwait(0.5);
                case 11:
                  if (KrakenModel.instance.betResult.nextState == eGameStateType.seaMonsterState) {
                    this.scheduleOnce(function () {
                      _this4.reqBetPearl();
                    }, delay);
                  } else if (KrakenModel.instance.betResult.nextState < eGameStateType.pickState) {
                    this.doEnd();
                  }
                case 12:
                case "end":
                  return _context4.stop();
              }
            }, _callee2, this);
          }));
          function doStart(_x3) {
            return _doStart.apply(this, arguments);
          }
          return doStart;
        }();
        _proto.showBonusWin = function showBonusWin(vWin, winType, isTen) {
          var _this5 = this;
          if (isTen === void 0) {
            isTen = false;
          }
          return new Promise(function (resolve, reject) {
            //显示得分
            _this5.Node_bonus.active = true;
            var gameView = director.getScene().getChildByName("Canvas").getChildByName("KrakenGameView");
            _this5.Node_bonus.parent = gameView;
            var Node_root = _this5.Node_bonus.getChildByName("Node_root");
            Node_root.active = true;
            Node_root.getComponent(UIOpacity).opacity = 0;
            var Node_btn = Node_root.getChildByName("Node_btn");
            Node_btn.active = false;
            tween(Node_root.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            _this5.Node_bonusAni.skeletonData = KrakenUtils.instance.getSkeletonData("respin_bonus2_" + winType);
            _this5.Label_winBonus.string = "";
            KrakenUtils.instance.playSound("sound/bell");
            KrakenUtils.instance.playSound("sound/dialog_" + winType + "1");
            var strAni = isTen ? "10x" : winType;
            _this5.Node_bonusAni.setAnimation(0, strAni + "_intro", false);
            _this5.Node_bonusAni.addAnimation(0, strAni + "_idle", true);
            _this5.Node_bonusAni.setCompleteListener(function () {
              _this5.Node_bonusAni.setCompleteListener(null);
            });
            _this5.scheduleOnce(function () {
              Node_btn.active = true;
              KrakenUtils.instance.updateLabelAddNf(_this5.Label_winBonus, vWin, 4);
            }, 0.25);
            _this5.scheduleOnce(function () {
              Node_btn.active = false;
              _this5.Label_winBonus.string = "";
              _this5.Node_bonusAni.setAnimation(0, strAni + "_finish", false);
              _this5.Node_bonusAni.setCompleteListener(function () {
                _this5.Node_bonusAni.setCompleteListener(null);
                _this5.Node_bonus.getChildByName("Node_root").active = false;
                _this5.Node_bonus.active = false;
                resolve();
              });
            }, 2.0);
          });
        };
        _proto.showEndWin = function showEndWin(vWin) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            //显示得分

            _this6.Node_end.active = true;
            var gameView = director.getScene().getChildByName("Canvas").getChildByName("KrakenGameView");
            _this6.Node_end.parent = gameView;
            var Node_root = _this6.Node_end.getChildByName("Node_root");
            Node_root.active = true;
            var youwin_wave = _this6.Node_end.getChildByName("youwin_wave").getComponent(sp.Skeleton);
            youwin_wave.node.active = true;
            youwin_wave.setAnimation(0, "intro", false);
            youwin_wave.addAnimation(0, "idle", true);
            Node_root.getComponent(UIOpacity).opacity = 0;
            tween(Node_root.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            _this6.Label_winEnd.string = "";
            _this6.Node_endAni.setAnimation(0, "intro", false);
            _this6.Node_endAni.addAnimation(0, "idle", true);
            _this6.Node_endAni.setCompleteListener(function () {
              _this6.Node_endAni.setCompleteListener(null);
            });
            _this6.scheduleOnce(function () {
              KrakenUtils.instance.updateLabelAddNf(_this6.Label_winEnd, vWin, false);
            }, 0.25);
            _this6.scheduleOnce(function () {
              youwin_wave.setAnimation(0, "finish", false);
              _this6.Node_endAni.setAnimation(0, "finish", false);
              _this6.Node_endAni.setCompleteListener(function () {
                _this6.Node_endAni.setCompleteListener(null);
                _this6.Node_end.getChildByName("Node_root").active = false;
                _this6.Node_end.active = false;
                youwin_wave.node.active = false;
                resolve();
              });
            }, 3.0);
          });
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this7 = this;
            var _loop3, j, gameView;
            return _regeneratorRuntime().wrap(function _callee3$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                    var symbolListJ, symbolItemJ, vPick, newLabel, resipn_scorelight;
                    return _regeneratorRuntime().wrap(function _loop3$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          symbolListJ = _this7.symbolList_sub[j];
                          symbolItemJ = symbolListJ._symbolList[0];
                          if (!(symbolItemJ.itemInfo.Sym == eSymbol.whitePearl)) {
                            _context5.next = 29;
                            break;
                          }
                          if (!_this7.Node_seaMonsterWin.active) {
                            _this7.haiguai_box.node.active = true;
                            _this7.haiguai_box.setAnimation(0, "respin_bar_intro", false);
                            _this7.haiguai_box.addAnimation(0, "respin_bar_idle", true);
                            _this7.Node_seaMonsterWin.active = true;
                            _this7.Label_seaMonster.string = "";
                          }
                          vPick = 0;
                          _context5.t0 = symbolItemJ.itemInfo.pearl;
                          _context5.next = _context5.t0 === "mini" ? 8 : _context5.t0 === "major" ? 8 : _context5.t0 === "minor" ? 8 : _context5.t0 === "grand" ? 8 : 14;
                          break;
                        case 8:
                          vPick = KrakenModel.instance.betResult.seaMonsterInfo.bonus["" + symbolItemJ.itemInfo.pearl];
                          _context5.next = 11;
                          return _this7.showBonusWin(vPick, symbolItemJ.itemInfo.pearl);
                        case 11:
                          _context5.next = 13;
                          return _this7.doAwait(0.25);
                        case 13:
                          return _context5.abrupt("break", 16);
                        case 14:
                          vPick = parseFloat(symbolItemJ.itemInfo.pearl);
                          return _context5.abrupt("break", 16);
                        case 16:
                          KrakenModel.instance.totalWinSubGame += vPick;
                          _this7.Label_seaMonster.string = Common.ChangeMoneyShow(KrakenModel.instance.totalWinSubGame, 2);
                          newLabel = instantiate(_this7.Label_seaMonster.node);
                          _this7.Node_seaMonsterWin.addChild(newLabel);
                          newLabel.scale = v3(0, 0, 0);
                          tween(newLabel).to(0.5, {
                            scale: v3(1.5, 1.5, 1.5),
                            position: v3(newLabel.position.x, newLabel.position.y + 30, newLabel.position.z)
                          }).destroySelf().start();
                          resipn_scorelight = _this7.Node_seaMonsterWin.getChildByName("resipn_scorelight").getComponent(sp.Skeleton);
                          _this7.Node_seaMonsterWin.active = true;
                          resipn_scorelight.node.active = true;
                          _this7.scheduleOnce(function () {
                            resipn_scorelight.setAnimation(0, "animation", false);
                            resipn_scorelight.setCompleteListener(function () {
                              resipn_scorelight.setCompleteListener(null);
                              resipn_scorelight.node.active = false;
                            });
                          });
                          KrakenUtils.instance.playOneShot(eSound.chest_pick1);
                          _context5.next = 29;
                          return symbolItemJ.doEndPearlEffect();
                        case 29:
                        case "end":
                          return _context5.stop();
                      }
                    }, _loop3);
                  });
                  j = 0;
                case 2:
                  if (!(j < this.symbolList_sub.length)) {
                    _context6.next = 7;
                    break;
                  }
                  return _context6.delegateYield(_loop3(), "t0", 4);
                case 4:
                  j++;
                  _context6.next = 2;
                  break;
                case 7:
                  _context6.next = 9;
                  return this.doAwait(1);
                case 9:
                  this.haiguai_box.node.active = true;
                  this.haiguai_box.setAnimation(0, "respin_bar_finish", false);
                  this.haiguai_box.setCompleteListener(function () {
                    _this7.haiguai_box.setCompleteListener(null);
                    _this7.haiguai_box.node.active = false;
                    _this7.Node_seaMonsterWin.active = false;
                    _this7.Label_seaMonster.string = "";
                  });
                  _context6.next = 14;
                  return this.doAwait(1);
                case 14:
                  KrakenModel.instance.totalWinSubGame = KrakenModel.instance.betResult.seaMonsterInfo.totalPrizeAmount;
                  _context6.next = 17;
                  return this.showEndWin(KrakenModel.instance.totalWinSubGame);
                case 17:
                  _context6.next = 19;
                  return this.doShakeEffect(false);
                case 19:
                  //结束动画
                  this.respin_qipao.node.active = true;
                  this.Node_seaMonsterWin.active = false;
                  if (this.Label_seaMonster) {
                    this.Label_seaMonster.string = "";
                  }
                  gameView = director.getScene().getChildByName("Canvas").getChildByName("KrakenGameView");
                  this.respin_qipao.node.parent = gameView;
                  this.respin_qipao.setAnimation(0, "idle", false);
                  this.respin_qipao.setCompleteListener(function () {
                    _this7.respin_qipao.setCompleteListener(null);
                    _this7.respin_qipao.node.active = false;
                    _this7.node.destroyFromParent();
                  });

                  // this.scheduleOnce(() => {}, 3.0);

                  //切换滚动盘
                  this.scheduleOnce(function () {
                    var lv_0 = KrakenModel.instance.boxState + 1;
                    _this7.haiguai_box.node.active = true;
                    _this7.haiguai_box.setAnimation(0, "lv" + lv_0 + "_intro", false);
                    _this7.haiguai_box.setAnimation(0, "lv" + lv_0 + "_idle", true);
                    var haiguai_bx_looplight = _this7.haiguai_box.node.getChildByName("haiguai_bx_looplight");
                    haiguai_bx_looplight.active = true;
                    var Node_effectRootMain = _this7.Node_symbolContent.getChildByName("Node_effectRoot");
                    Node_effectRootMain.active = false;
                    var Node_effectRoot = _this7.Node_symbolContent.getChildByName("Node_effectRoot_sub");
                    Node_effectRoot.destroyAllChildren();
                    _this7.Node_symbolRoot.active = false;
                    if (KrakenModel.instance.freeStatus == eRunStatus.NONE) {
                      _this7.showZhuZi(true);
                    }
                    var Node_symbolList = _this7.Node_symbolContent.getChildByName("Node_symbolList");
                    Node_symbolList.active = true;
                    for (var i = 0; i < 5; i++) {
                      var KrakenSymbol = Node_symbolList.getChildByName("Node_symbol_" + i).getComponent(Kraken_symbol);
                      KrakenSymbol.showSymbol(true);
                    }
                    _this7.cFinish();
                  }, 1);
                case 27:
                case "end":
                  return _context6.stop();
              }
            }, _callee3, this);
          }));
          function doEnd() {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.doAwait = function doAwait(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            _this8.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.initView = function initView() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            _this9.Node_symbolRoot.active = true;
            var Node_effectRoot_sub = _this9.Node_symbolContent.getChildByName("Node_effectRoot_sub");
            var openNum = KrakenModel.instance.betResult.openNum;
            var whitePearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.whitePearl : null;
            var yellowPearl = KrakenModel.instance.betResult.freeInfo ? KrakenModel.instance.betResult.freeInfo.yellowPearl : null;
            var pearlInfo = KrakenUtils.instance.getPealInfo(whitePearl != null || yellowPearl != null);
            var symList = KrakenUtils.instance.getResult_seaMonster(openNum, pearlInfo, whitePearl != null || yellowPearl != null);
            for (var i = 0; i < _this9.Node_symbolRoot.children.length; i++) {
              var symbolList = _this9.Node_symbolRoot.children[i].getComponent(Kraken_symbolSeaMonster);
              if (symbolList) {
                symbolList.init(symList[i], Node_effectRoot_sub);
                _this9.symbolList_sub[i] = symbolList;
              }
            }
            for (var _i = 0; _i < _this9.symbolList_sub.length; _i++) {
              if (_this9.symbolList_sub[_i].vPearl == 0) {
                _this9.symbolList_sub[_i].vPearl = pearlInfo && pearlInfo["" + _i] ? pearlInfo["" + _i] : 0;
              }
            }
            _this9.scheduleOnce(function () {
              resolve();
            }, 0.25);
          });
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var arrPro, i, delayIndex, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee4$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  KrakenModel.instance.gameStatus = eRunStatus.RUNNING;
                  this.runTimes++;
                  this.Label_timesSpins.string = "" + this.runTimes;
                  this.Label_timesTotal.string = "" + this.totalTimes;
                  arrPro = [];
                  for (i = 0; i < this.symbolList_sub.length; i++) {
                    delayIndex = Math.floor(i / 5);
                    startDelay = delayIndex * eConstDef.cStartDelay / 5;
                    stopDelay = eConstDef.cStopDelay + delayIndex * eConstDef.cStartDelay;
                    if (this.symbolList_sub[i].vPearl == 0) {
                      arrPro.push(this.symbolList_sub[i].doStart(startDelay, stopDelay));
                    }
                  }
                  _context7.next = 8;
                  return Promise.all(arrPro);
                case 8:
                  this.scheduleOnce(this.doRunEnd, 0);
                case 9:
                case "end":
                  return _context7.stop();
              }
            }, _callee4, this);
          }));
          function doStartRun() {
            return _doStartRun.apply(this, arguments);
          }
          return doStartRun;
        }();
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var delayStart, pearlInfo, i, respin_numberlight;
            return _regeneratorRuntime().wrap(function _callee5$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  delayStart = 0.25; // 标记珍珠
                  pearlInfo = KrakenModel.instance.betResult.pearl;
                  for (i = 0; i < this.symbolList_sub.length; i++) {
                    if (this.symbolList_sub[i].vPearl == 0) {
                      this.symbolList_sub[i].vPearl = pearlInfo && pearlInfo["" + i] ? pearlInfo["" + i] : 0;
                    }
                  }
                  if (KrakenModel.instance.betResult.seaMonsterInfo.totalCount != this.totalTimes) {
                    this.totalTimes = KrakenModel.instance.betResult.seaMonsterInfo.totalCount;
                    this.Label_timesTotal.string = "" + this.totalTimes;
                    respin_numberlight = this.Label_timesTotal.node.getChildByName("respin_numberlight").getComponent(sp.Skeleton);
                    respin_numberlight.node.active = true;
                    this.scheduleOnce(function () {
                      respin_numberlight.setAnimation(0, "idle", false);
                      respin_numberlight.setCompleteListener(function () {
                        respin_numberlight.setCompleteListener(null);
                        respin_numberlight.node.active = false;
                      });
                    }, 0);
                  }
                  KrakenModel.instance.gameStatus = eRunStatus.NONE;
                  this.doStart(delayStart);
                case 6:
                case "end":
                  return _context8.stop();
              }
            }, _callee5, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.close = function close() {};
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "Button_collect":
              {
                this.close();
                break;
              }
          }
        };
        _proto.delayInteractable = function delayInteractable(btn) {
          btn.interactable = false;
          tween(btn).delay(0.5).call(function () {
            btn.interactable = true;
          }).start();
        }
        //////////////
        //重转模式请求
        ;

        _proto.reqBetPearl = function reqBetPearl() {
          if (!KrakenModel.instance.gameInfo) {
            return false;
          }
          KrakenCtrl.instance.isReqBet = true;
          KrakenModel.instance.curTotalBet = KrakenModel.instance.curBet;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + KrakenModel.instance.curBet
          });
          return true;
        }
        //pick 模式请求
        ;

        _proto.reqBetPick = function reqBetPick(index) {
          if (!KrakenModel.instance.gameInfo) {
            return false;
          }
          KrakenCtrl.instance.isReqBet = true;
          KrakenModel.instance.curTotalBet = KrakenModel.instance.curBet;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + KrakenModel.instance.curBet,
            boxIndex: "" + index
          });
          return true;
        };
        _proto.onRecvData = function onRecvData(data) {
          if (data.Code && data.Code != 0) {
            return;
          }
          switch (data.cmd) {
            case eProto.HD_Bet:
              {
                if (KrakenModel.instance.betResult.state != eGameStateType.seaMonsterState) {
                  return;
                }
                this.doStartRun();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                break;
              }
          }
        };
        _createClass(subGame_seaMonster, [{
          key: "cFinish",
          get: function get() {
            return this._cFinish;
          },
          set: function set(cf) {
            this._cFinish = cf;
          }
        }]);
        return subGame_seaMonster;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabSeaMonsterEnter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabOceanPick", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_winBonus", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_bonus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_bonusAni", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_winEnd", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_end", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_endAni", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "respin_qipao", [_dec12], {
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

(function(r) {
  r('virtual:///prerequisite-imports/slotKrakenGame', 'chunks:///_virtual/slotKrakenGame'); 
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