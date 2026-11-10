System.register("chunks:///_virtual/Coaster_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './CoasterUtils.ts', './CoasterDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, sys, Node, Component, CCClass, EventManager, CoasterUtils, eSound;
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
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      eSound = module.eSound;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ac388NShuNHn54hOcII/Wdd", "Coaster_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var setEnumAttr = function setEnumAttr(obj, propName, enumDef) {
        CCClass.Attr.setClassAttr(obj, propName, "type", "Enum");
        CCClass.Attr.setClassAttr(obj, propName, "enumList", Enum.getList(enumDef));
      };
      var Coaster_btnEffect = exports('default', (_dec = ccclass("CoasterBtnEffect"), _dec2 = menu("game/CoasterGame/Coaster_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec6 = property({
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_btnEffect, _Component);
        function Coaster_btnEffect() {
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
        var _proto = Coaster_btnEffect.prototype;
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
            CoasterUtils.instance.playOneShot(eSound.featureBuyHover);
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
                  // CoasterUtils.instance.playOneShot(CoasterDef.eSound.featurebuyHover);

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

        _createClass(Coaster_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return Coaster_btnEffect;
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

System.register("chunks:///_virtual/Coaster_buyReward.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './CoasterCtrl.ts', './CoasterUtils.ts', './CoasterModel.ts', './CoasterDef.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ViewManager, CoasterCtrl, CoasterUtils, CoasterModel, eSound, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      CoasterCtrl = module.CoasterCtrl;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "fbda4D6f49HeIc92IkfI7iS", "Coaster_buyReward", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_buyReward = exports('default', (_dec = ccclass("CoasterBuyReward"), _dec2 = menu("game/CoasterGame/Coaster_buyReward"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_buyReward, _Component);
        function Coaster_buyReward() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Coaster_buyReward.prototype;
        _proto.onLoad = function onLoad() {
          var gold = CoasterModel.instance.curBet * 75;
          this.Label_gold.string = Common.numFormat(gold) + "K";
        };
        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_cancel":
              {
                CoasterUtils.instance.playOneShot(eSound.featureBuyCancel);
                break;
              }
            case "Button_ok":
              {
                CoasterUtils.instance.playOneShot(eSound.featureBuyStart);
                CoasterCtrl.instance.reqBet(true);
                break;
              }
          }
          ViewManager.instance.closePopView(this.node);
        };
        return Coaster_buyReward;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec3], {
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

System.register("chunks:///_virtual/Coaster_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, tween, v3, UITransform, Component, CoasterModel, eRunStatus;
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
      SpriteFrame = module.SpriteFrame;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b869frdGv5L0rP33dW1UMBR", "Coaster_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_helpTip = exports('default', (_dec = ccclass("CoasterHelpTip"), _dec2 = menu("game/CoasterGame/Coaster_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_helpTip, _Component);
        function Coaster_helpTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_tip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          //    // update (dt) {}
          _this.curIndex = 0;
          _this.runType = 0;
          return _this;
        }
        var _proto = Coaster_helpTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.doShow();
        };
        _proto.onDisable = function onDisable() {
          this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
          Tween.stopAllByTarget(this.Sprite_tip.node);
        };
        _proto.doShow = function doShow(runType) {
          var _this2 = this;
          if (runType === void 0) {
            runType = 0;
          }
          this.runType = runType;
          switch (this.runType) {
            case 1:
              {
                this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
                Tween.stopAllByTarget(this.Sprite_tip.node);
                tween(this.Sprite_tip.node).delay(0.25).to(0.25, {
                  scale: v3(1.2, 1.2, 1.2)
                }).to(0.125, {
                  scale: v3(1.1, 1.1, 1.1)
                }).to(0.125, {
                  scale: v3(1.2, 1.2, 1.2)
                }).to(0.25, {
                  scale: v3(1, 1, 1)
                }).start();
                this.curIndex = 6;
                break;
              }
            case 2:
              {
                this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
                Tween.stopAllByTarget(this.Sprite_tip.node);
                this.curIndex = 7;
                break;
              }
            case 3:
              {
                this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
                Tween.stopAllByTarget(this.Sprite_tip.node);
                this.curIndex = 0;
                break;
              }
            default:
              {
                if (CoasterModel.instance.freeStatus != eRunStatus.NONE || CoasterModel.instance.totalFreeTimes > 0) {
                  //免费
                  Tween.stopAllByTarget(this.Sprite_tip.node);
                  this.curIndex = 5;
                } else {
                  this.curIndex = (this.curIndex + 1) % 5;
                }
                break;
              }
          }
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.getComponent(UITransform).width / 2.0) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.getComponent(UITransform).width) / 2.0 + 30;
            this.Sprite_tip.node.setPosition(disX, this.Sprite_tip.node.position.y);
            var toX = disX - this.Sprite_tip.node.getComponent(UITransform).width - 60;
            tween(this.Sprite_tip.node).delay(0.5).to(this.Sprite_tip.node.getComponent(UITransform).width / 200, {
              position: v3(toX, this.Sprite_tip.node.position.y)
            }).call(function () {
              _this2.doShow(_this2.runType);
            }).start();
          } else {
            this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
            tween(this.Sprite_tip.node).delay(1.0).call(function () {
              _this2.doShow(_this2.runType);
            }).start();
          }
        };
        return Coaster_helpTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coaster_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterCtrl.ts', './CoasterDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, CoasterCtrl, eProto, GameDef, Common;
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
      CoasterCtrl = module.CoasterCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "96accv4p/JJzrSt8x8zje6g", "Coaster_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Coaster_history = exports('default', (_dec = ccclass("CoasterHistory"), _dec2 = menu("game/CoasterGame/Coaster_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Coaster_history, _GameDef$BaseView);
        function Coaster_history() {
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
        var _proto = Coaster_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CoasterCtrl.instance);
          CoasterCtrl.instance.reqHistory();
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          var start = this._curPage * this._pageSize;
          CoasterCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          CoasterCtrl.instance.reqHistory(start);
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                Common.closeWait();
                if (!data || !data.BetRecord || data.BetRecord.length == 0) {
                  this._curPage = this._lastPage;
                  this.Button_next.active = false;
                  return;
                }
                this.Button_last.active = this._curPage > 0;
                this.Button_next.active = data.NextPage;
                this.Label_curPage.string = "Trang:" + (this._curPage + 1);
                this.scrollView_content.setData(data.BetRecord);
                break;
              }
          }
        };
        return Coaster_history;
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

System.register("chunks:///_virtual/Coaster_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './CoasterUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, CoasterUtils, Common;
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
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "38676/yYn5M84htNMbfwg2B", "Coaster_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_historyItem = exports('default', (_dec = ccclass("CoasterHistoryItem"), _dec2 = menu("game/CoasterGame/Coaster_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_historyItem, _Component);
        function Coaster_historyItem() {
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
        var _proto = Coaster_historyItem.prototype;
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
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_gameNo.string = Common.setGameNo(tempData.GameNo);

          //        //改为开奖结果
          var strResult = Common.getRecordResult(tempData);
          this.Label_gold.string = strResult;
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = CoasterUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            var inter = Common.numFormatInt(tempData.Income / 1000);
            var digit = CoasterUtils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            str = "+" + inter + digit + "K";
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            var _inter = Common.numFormatInt(tempData.Income / 1000);
            var _digit = CoasterUtils.instance.numberFormatD(tempData.Income / 1000, 2.0);
            str = "" + _inter + _digit + "K";
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
        };
        _createClass(Coaster_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Coaster_historyItem;
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

System.register("chunks:///_virtual/Coaster_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterCtrl.ts', './CoasterDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, CoasterCtrl, eProto, GameDef, Common;
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
    }, function (module) {
      CoasterCtrl = module.CoasterCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c8f36hOmS5I5JLYU1H+eTS9", "Coaster_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Coaster_rank = exports('default', (_dec = ccclass("CoasterRank"), _dec2 = menu("game/CoasterGame/Coaster_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Coaster_rank, _GameDef$BaseView);
        function Coaster_rank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          return _this;
        }
        var _proto = Coaster_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CoasterCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          CoasterCtrl.instance.reqRank();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_Rank:
              {
                Common.closeWait();
                if (!data.RankList) {
                  return;
                }

                //                // this.Label_curPage.string = `${this._curPage}/${this._totalPage}`;

                this.scrollView_content.setData(data.RankList);
                break;
              }
          }
        };
        return Coaster_rank;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coaster_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './CoasterUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, CoasterUtils, Common;
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
      Sprite = module.Sprite;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "ab47dP2P3RCubY5dpLU0UtL", "Coaster_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_rankItem = exports('default', (_dec = ccclass("CoasterRankItem"), _dec2 = menu("game/CoasterGame/Coaster_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_rankItem, _Component);
        function Coaster_rankItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rankTag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rank", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_nickName", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_rank", _descriptor8, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = Coaster_rankItem.prototype;
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
          var tmpdata = this.item.data;
          if (!tmpdata || tmpdata === undefined) {
            this.node.active = false;
            this.Node_label.active = false;
            return;
          }
          var rankIndex = this.item.itemIndex;
          if (rankIndex < 3) {
            this.Sprite_rankTag.node.active = true;
            this.Label_rank.node.active = false;
            this.Sprite_rankTag.spriteFrame = this.spriteFrame_rank[rankIndex];
          } else {
            this.Sprite_rankTag.node.active = false;
            this.Label_rank.node.active = true;
            this.Label_rank.string = "" + (rankIndex + 1);
          }
          this.Sprite_bg.active = this.item.itemIndex % 2 != 0;
          this.Label_nickName.string = "" + tmpdata.NickName;
          var inter = Common.numFormatInt(tmpdata.Score / 1000);
          var digit = CoasterUtils.instance.numberFormatD(tmpdata.Score / 1000, 2.0);
          this.Label_win.string = "" + inter + digit + "K";
        };
        _createClass(Coaster_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Coaster_rankItem;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rankTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_rank", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_nickName", [_dec8], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_rank", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coaster_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './CoasterUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, CoasterModel, eAutoRateType, cBaseScore, eEvent, CoasterUtils, EventManager;
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
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      cBaseScore = module.cBaseScore;
      eEvent = module.eEvent;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f460884C+JJLrw006ZTIGjx", "Coaster_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_ScrollView = exports('default', (_dec = ccclass("CoasterScrollView"), _dec2 = menu("game/CoasterGame/Coaster_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_ScrollView, _Component);
        function Coaster_ScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCounts", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor3, _assertThisInitialized(_this));
          _this._ScrollViewView = null;
          _this._curIndex = 0;
          _this._maxIndex = 0;
          _this._hTouch = null;
          _this._isLongTouch = false;
          _this.isSetNew = false;
          return _this;
        }
        var _proto = Coaster_ScrollView.prototype;
        //    // protected onEnable(): void {}
        _proto.onDisable = function onDisable() {
          if (this._hTouch) {
            clearTimeout(this._hTouch);
          }
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._ScrollViewView = this.node.getComponent(ScrollView);

          //        //init
          this._maxIndex = this.itemCounts - 1;
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex = CoasterModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = CoasterModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = CoasterModel.instance._curIndex_baseBet;
                break;
              }
          }

          //        // gts.Debug.Log(`=this._curIndex=${this._curIndex}=type=${this.type}`);

          for (var index = 0; index < this.itemCounts; index++) {
            var item = this._ScrollViewView.content.children[index];
            if (!item) {
              item = instantiate(this.item);
              this._ScrollViewView.content.addChild(item);
            }
            item.active = true;
            item.name = "item_" + index;
            item.getComponent(Label).string = this.getDefaultValue(index);
          }

          //        //注册_ScrollViewView滚动效果
          this._ScrollViewView.node.on("touch-up", function () {
            _this2.onScrollTouchUp();
          }, this);
          this._ScrollViewView.node.on("touchcancel", function () {
            _this2.onScrollTouchUp();
          }, this);
          var setItem = function setItem() {
            for (var _index = 0; _index < _this2._ScrollViewView.content.children.length; _index++) {
              var itemNode = _this2._ScrollViewView.content.children[_index];
              var curPos = itemNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
              curPos = _this2._ScrollViewView.node.getComponent(UITransform).convertToNodeSpaceAR(curPos);
              var hW = _this2._ScrollViewView.node.getComponent(UITransform).height / 2.0;
              if (Math.abs(curPos.y) < hW) {
                itemNode.getComponent(UIOpacity).opacity = 255 * (1 - Math.abs(curPos.y) / hW);
                if (Math.abs(curPos.y) < itemNode.getComponent(UITransform).height) {
                  itemNode.scale = v3(1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1);
                } else {
                  itemNode.scale = v3(1, 1, 1);
                }
              } else {
                itemNode.getComponent(UIOpacity).opacity = 0;
                itemNode.scale = v3(1, 1, 1);
              }

              //                // itemNode.color = itemNode.scale > 1.25 ? cc.color(255, 255, 255) : cc.color(100, 120, 180);
              if (itemNode.scale.x > 1.25 && _this2._curIndex != _index) {
                _this2._curIndex = _index;
                if (!_this2.isSetNew) {
                  EventManager.instance.emit(eEvent.onSetBase, _this2.type, _this2._curIndex);
                }
              }
            }
          };
          this._ScrollViewView.node.on("scroll-ended", function () {
            setItem();
            _this2.isSetNew = false;
          }, this);
          this._ScrollViewView.node.on("scrolling", setItem, this);
        };
        _proto.start = function start() {
          var _this3 = this;
          //        //滚动到指定位置
          setTimeout(function () {
            if (_this3._ScrollViewView) {
              _this3._ScrollViewView.scrollToPercentVertical((_this3._maxIndex - _this3._curIndex) / _this3._maxIndex, 0.0001);
            }
          }, 300);
        }
        //    //滚动触摸离开--停止滚动触摸
        ;

        _proto.onScrollTouchUp = function onScrollTouchUp(delay) {
          var _this4 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          this.scheduleOnce(function () {
            var getScrollOffset = _this4._ScrollViewView.getScrollOffset();
            _this4._curIndex = Math.round(Math.abs(getScrollOffset.y) / 76);

            //            // gts.Debug.Log("=this._curIndex==0000=" + this._curIndex);
            _this4._ScrollViewView.stopAutoScroll();
            _this4._curIndex = _this4._curIndex < 0 ? 0 : _this4._curIndex > _this4._maxIndex ? _this4._maxIndex : _this4._curIndex;
            //            //
            //            // gts.Debug.Log("=this._curIndex==1111=" + this._curIndex);
            _this4._ScrollViewView.scrollToPercentVertical((_this4._maxIndex - _this4._curIndex) / _this4._maxIndex, 0.1);
          }, delay);
        };
        _proto.setNewPos = function setNewPos(_curIndex) {
          if (this._curIndex != _curIndex) {
            this._curIndex = _curIndex;
            this.isSetNew = true;
            this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.1);
          }
        };
        _proto.doReset = function doReset() {
          this._curIndex = 0;
          this._ScrollViewView.scrollToPercentVertical((this._maxIndex - this._curIndex) / this._maxIndex, 0.0001);
        };
        _proto.getDefaultValue = function getDefaultValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                var num = cBaseScore[index];
                var strNum = CoasterUtils.instance.numberFormat(num, 2);
                return strNum + "K";
              }
            case eAutoRateType.baseRate:
              {
                return "" + (index + 1);
              }
            case eAutoRateType.basePay:
              {
                return "" + (index + 1) * 20;
              }
            case eAutoRateType.baseBet:
              {
                var baseScore = Math.floor(index / 10);
                var baseRate = index % 10;
                var _strNum = CoasterUtils.instance.numberFormat(cBaseScore[baseScore] * (baseRate + 1) * 20, 2);
                return _strNum + "K";
              }
          }
        };
        _proto.getValue = function getValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                var num = cBaseScore[index];
                return num;
              }
            case eAutoRateType.baseRate:
              {
                return index + 1;
              }
            case eAutoRateType.basePay:
              {
                return (index + 1) * 20;
              }
            case eAutoRateType.baseBet:
              {
                var baseScore = Math.floor(index / 10);
                var baseRate = index % 10;
                return cBaseScore[baseScore] * (baseRate + 1) * 20;
              }
          }
        };
        return Coaster_ScrollView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return eAutoRateType.baseScore;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemCounts", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec5], {
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

System.register("chunks:///_virtual/Coaster_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, CoasterModel, eEvent, ViewManager, EventManager, Common;
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
      Sprite = module.Sprite;
      color = module.color;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b1be6bGOitK35vWlp/O5H3P", "Coaster_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Coaster_setAuto = exports('default', (_dec = ccclass("CoasterSetAuto"), _dec2 = menu("game/CoasterGame/Coaster_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_setAuto, _Component);
        function Coaster_setAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Coaster_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // if (CoasterModel.instance.selAutoIndex != -1) {
          //        //     this.selNode = this.contentRoot.getChildByName(`Node_item_${CoasterModel.instance.selAutoIndex}`);
          //        // } else {
          //        //     this.selNode = this.contentRoot.getChildByName(`Node_item_0`);
          //        // }
          //        // this.selNode.color = cc.color(125, 125, 125, 255);
          //        // this.selNode.getChildByName("Label_times").color = cc.color(255, 152, 0, 255);
          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                EventManager.instance.emit(eEvent.onSetAuto, 0);
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  CoasterModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[CoasterModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = CoasterModel.instance.curBet * 1000 * times;
                  //                    // if (CoasterModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(CoasterModel.instance.curBalance / (CoasterModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(CoasterDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !CoasterUtils.instance.isChangeOrientation());
                  //                    //     }
                  //                    // }
                }

                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                this.Button_ok.interactable = true;
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(255, 152, 0, 255);
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return Coaster_setAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec4], {
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

System.register("chunks:///_virtual/Coaster_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './ViewManager.ts', './EventManager.ts', './CoasterUtils.ts', './Coaster_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, CoasterModel, eEvent, eAutoRateType, ViewManager, EventManager, CoasterUtils, Coaster_ScrollView, Common;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Coaster_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "812781lETpMbKuPK1ely4NZ", "Coaster_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Coaster_setBase = exports('default', (_dec = ccclass("CoasterSetBase"), _dec2 = menu("game/CoasterGame/Coaster_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_setBase, _Component);
        function Coaster_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseRate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_basePay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseBet", _descriptor7, _assertThisInitialized(_this));
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          return _this;
        }
        var _proto = Coaster_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(CoasterModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (CoasterModel.instance.curTotalWin > 0) {
            this.Label_win.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = CoasterModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = CoasterModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = CoasterModel.instance._curIndex_baseBet;
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSetBase, this.onSetBase, this);
          EventManager.instance.on(eEvent.updateWin, this.updateWin, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSetBase, this.onSetBase, this);
          EventManager.instance.off(eEvent.updateWin, this.updateWin, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {
          var _this2 = this;
          if (RewardMoney == 0) {
            if (CoasterModel.instance.curTotalWin > 0) {
              this.Label_win.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = CoasterModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            CoasterModel.instance.curTotalWin += disWin;
            if (CoasterModel.instance.curTotalWin > destWin) {
              CoasterModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Coaster_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Coaster_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Coaster_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Coaster_ScrollView).setNewPos(this._curIndex_baseRate);
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //
            case "Button_reset":
              {
                this._curIndex_baseBet = 0;
                this._curIndex_baseRate = 0;
                this._curIndex_baseScore = 0;
                this.scrollView_baseScore.getComponent(Coaster_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Coaster_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Coaster_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                CoasterModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                CoasterModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                CoasterModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Coaster_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseRate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_basePay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseBet", [_dec9], {
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

System.register("chunks:///_virtual/Coaster_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "a5334fpnOFKv7vjvhTneOCa", "Coaster_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coaster_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './EventManager.ts', './CoasterUtils.ts', './Coaster_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, UITransform, tween, v3, Component, UIOpacity, CoasterModel, eRunStatus, eSymbol, cArrPos_0, cArrPos_1, eConstDef, eSound, eEvent, EventManager, CoasterUtils, Coaster_symbolItem;
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
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      cArrPos_0 = module.cArrPos_0;
      cArrPos_1 = module.cArrPos_1;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Coaster_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3;
      cclegacy._RF.push({}, "f7a96sCi9ROjLaOsEhztO8B", "Coaster_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_symbol = exports('default', (_dec = ccclass("CoasterSymbol"), _dec2 = menu("game/CoasterGame/Coaster_symbol"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_symbol, _Component);
        function Coaster_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isHorizontal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxIndex", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_itemTempH", _descriptor4, _assertThisInitialized(_this));
          _this.symbolList = [];
          _this._speed = 0;
          _this._curLength = 0;
          _this._iCol = 0;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Coaster_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", "")) - 1;
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.getResult = function getResult(openResult) {
          return JSON.parse(JSON.stringify(openResult.openNum[this._iCol]));
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength, addIndex) {
          if (addIndex === void 0) {
            addIndex = -1;
          }
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symLen = this.isHorizontal ? 1 : leftLength >= 3 ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * leftLength) + 1;
            var symbol = this.isHorizontal ? Math.floor(Math.random() * eSymbol.TEN) + 1 : Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              num: symbol,
              count: symLen,
              remove: false
            };
            itemInfo.count = this.isHorizontal ? 1 : Math.floor(Math.random() * 3) + 1;
          }
          var newItem = instantiate(this.isHorizontal ? this.Node_itemTempH : this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          this.setSymbolPos(newItem, toLength, itemInfo.count);
          var com = newItem.getComponent(Coaster_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, this._runStatus);
          if (addIndex != -1) {
            this.symbolList[addIndex] = com;
          } else {
            this.symbolList.push(com);
          }
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += itemInfo.count;
          return com;
        };
        _proto.setSymbolWaitPos = function setSymbolWaitPos(newItem, toLength, length, isSymbol) {
          if (isSymbol === void 0) {
            isSymbol = true;
          }
          if (this.isHorizontal) {
            //横向
            if (toLength >= this.maxIndex) {
              var arrPos = this._iCol == 6 ? cArrPos_0 : cArrPos_1;
              newItem.position = arrPos[arrPos.length - 1].pos;
              newItem.eulerAngles = arrPos[arrPos.length - 1].eulerAngles;
            } else {
              var _arrPos = this._iCol == 6 ? cArrPos_0 : cArrPos_1;
              if (isSymbol) {
                newItem.position = _arrPos[toLength + 2].pos;
                newItem.eulerAngles = _arrPos[toLength + 2].eulerAngles;
              } else {
                var wPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(_arrPos[toLength + 2].pos);
                newItem.position = newItem.parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                newItem.eulerAngles = _arrPos[toLength + 2].eulerAngles;
              }
            }
          } else {
            var offsetY = (toLength + length / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }
        };
        _proto.setSymbolPos = function setSymbolPos(newItem, toLength, length, isSymbol) {
          if (isSymbol === void 0) {
            isSymbol = true;
          }
          if (this.isHorizontal) {
            //横向
            if (toLength >= this.maxIndex) {
              var arrPos = this._iCol == 6 ? cArrPos_0 : cArrPos_1;
              newItem.position = arrPos[arrPos.length - 1].pos;
              newItem.eulerAngles = arrPos[arrPos.length - 1].eulerAngles;
            } else {
              var _arrPos2 = this._iCol == 6 ? cArrPos_0 : cArrPos_1;
              if (isSymbol) {
                newItem.position = _arrPos2[toLength + 2].pos;
                newItem.eulerAngles = _arrPos2[toLength + 2].eulerAngles;
              } else {
                var wPos = this.node.getComponent(UITransform).convertToWorldSpaceAR(_arrPos2[toLength + 2].pos);
                newItem.position = newItem.parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                newItem.eulerAngles = _arrPos2[toLength + 2].eulerAngles;
              }
            }
          } else {
            var offsetY = (toLength + length / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }
        };
        _proto.init = function init(itemInfoList) {
          var _this2 = this;
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i]);
          }
          this.scheduleOnce(function () {
            for (var _i = 0; _i < _this2.symbolList.length; _i++) {
              var symbolNode = _this2.symbolList[_i].node;
              if (_this2.isHorizontal) {
                var toPos = symbolNode.getPosition().x;
                symbolNode.setPosition(symbolNode.position.x + 500, symbolNode.position.y);
                tween(symbolNode).to(0.2, {
                  position: v3(toPos, symbolNode.position.y)
                }, {
                  easing: "cubicOut"
                }).to(0.05, {
                  position: v3(toPos + 15, symbolNode.position.y)
                }, {
                  easing: "cubicIn"
                }).to(0.05, {
                  position: v3(toPos, symbolNode.position.y)
                }, {
                  easing: "cubicOut"
                }).start();
              } else {
                var _toPos = symbolNode.getPosition().y;
                symbolNode.setPosition(symbolNode.position.x, symbolNode.position.y + 525);
                tween(symbolNode).delay(0.075 * _this2._iCol).to(0.2, {
                  position: v3(symbolNode.position.x, _toPos)
                }, {
                  easing: "cubicOut"
                }).to(0.05, {
                  position: v3(symbolNode.position.x, _toPos + 15)
                }, {
                  easing: "cubicIn"
                }).to(0.05, {
                  position: v3(symbolNode.position.x, _toPos)
                }, {
                  easing: "cubicOut"
                }).start();
              }
            }
          });
        };
        _proto.isColWild = function isColWild() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.symbolList), _step; !(_step = _iterator()).done;) {
            var symbol = _step.value;
            if (symbol.itemInfo.num < eSymbol.SCATTER) {
              return false;
            }
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.symbolList), _step2; !(_step2 = _iterator2()).done;) {
            var _symbol = _step2.value;
            if (_symbol.itemInfo.num != eSymbol.SCATTER) {
              return true;
            }
          }
          return false;
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doStart = function doStart(startDelay, stopDelay, stopDelayBack) {
          var _this3 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          if (stopDelayBack === void 0) {
            stopDelayBack = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this3.scheduleOnce(function () {
              CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 3000;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //当前结果是否有整列wild
            var arrColWild = CoasterUtils.instance.checkColWild(CoasterModel.instance.betResult.OpenNums[0]);
            //当前列结果是否整列都是wild
            var isColWild = false;
            if (arrColWild.length > 0) {
              for (var _iterator3 = _createForOfIteratorHelperLoose(arrColWild), _step3; !(_step3 = _iterator3()).done;) {
                var iCol = _step3.value;
                if (iCol == _this3._iCol) {
                  isColWild = true;
                  break;
                }
              }
            }
            var isColWildBeforeStart = _this3.isColWild() && CoasterModel.instance.freeStatus != eRunStatus.NONE && !CoasterModel.instance.isFirstFree;
            var isAllWild = isColWildBeforeStart;
            if (isColWildBeforeStart) {
              for (var i = _this3.symbolList.length - 1; i >= 0; i--) {
                var symbol = _this3.symbolList[i];
                if (symbol.itemInfo.num < eSymbol.WILD) {
                  isAllWild = false;
                  break;
                }
              }
            }
            if (_this3.isHorizontal) {
              _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this3.doStopH();
                    case 2:
                      resolve();
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              })), stopDelayBack > 1 ? 1 : stopDelayBack > 0.1 ? 0.1 : stopDelayBack);
            }
            gts.Debug.LogWarr("==doStart.doStart.betResult==" + JSON.stringify(CoasterModel.instance.betResult));
            //test
            _this3._resultInfoList = _this3.getResult(CoasterModel.instance.betResult.OpenNums[0]);
            var _resultInfoListBack = [];
            var _symbolListBack = [];
            var symbolListBack = [];
            for (var _i2 = 0; _i2 < _this3.symbolList.length; _i2++) {
              _symbolListBack[_i2] = JSON.parse(JSON.stringify(_this3.symbolList[_i2].itemInfo));
            }
            for (var _i3 = 0; _i3 < _this3._resultInfoList.length; _i3++) {
              _resultInfoListBack[_i3] = JSON.parse(JSON.stringify(_this3._resultInfoList[_i3]));
            }
            for (var _i4 = 0; _i4 < _this3.symbolList.length; _i4++) {
              symbolListBack[_i4] = _this3.symbolList[_i4].itemInfo.num < eSymbol.WILD ? null : _this3.symbolList[_i4];
            }

            //
            _this3._runStatus = eRunStatus.START;
            _this3._speed = eConstDef.CSpeedStart;
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
                    }
                    break;
                  }
                case eRunStatus.END:
                  {
                    if (!isColWildBeforeStart || isAllWild) {
                      var curLength = 0;
                      for (var _i5 = _this3.symbolList.length - 1; _i5 >= 0; _i5--) {
                        var _symbol2 = _this3.symbolList[_i5];
                        curLength += _symbol2.itemInfo.count;
                        if (curLength > _this3.maxIndex) {
                          var symboll = _this3.symbolList.shift();
                          symboll.node.destroyFromParent();
                        }
                      }
                      if (isAllWild) {
                        for (var _i6 = 0; _i6 < _resultInfoListBack.length; _i6++) {
                          var _symbol3 = _this3.symbolList[_i6];
                          if (_symbol3) {
                            _symbol3.itemInfo.remove = _resultInfoListBack[_i6].remove;
                          }
                        }
                      }
                    } else {
                      var newList = null;
                      var _curLength2 = 0;
                      for (var _i7 = _this3.symbolList.length - 1; _i7 >= 0; _i7--) {
                        var _symbol4 = _this3.symbolList[_i7];
                        _curLength2 += _symbol4.itemInfo.count;
                        if (_curLength2 > _this3.maxIndex) {
                          newList = _this3.symbolList.slice(_i7 + 1);
                          _this3.symbolList.splice(_i7 + 1);
                          break;
                        }
                      }
                      //旧的 < CoasterDef.eSymbol.WILD 移除
                      for (var iRow = _this3.symbolList.length - 1; iRow >= 0; iRow--) {
                        var symbolItem = _this3.symbolList[iRow];
                        if (symbolItem.itemInfo.num < eSymbol.WILD) {
                          symbolItem.node.getComponent(UIOpacity).opacity = 0;
                          symbolItem.node.destroyFromParent();
                          _this3.symbolList.splice(iRow, 1);
                        }
                      }

                      //根据结果合并新旧
                      var mergeList = [];
                      _curLength2 = 0;
                      var iOld = 0;
                      var iNew = 0;
                      while (_curLength2 < _this3.maxIndex) {
                        var oldInfo = _symbolListBack[iOld];
                        var newInfo = _resultInfoListBack[iNew];
                        if (oldInfo.num == newInfo.num) {
                          mergeList.push(symbolListBack[iOld]);
                          iOld++;
                          iNew++;
                          _curLength2 += oldInfo.count;
                        } else if (oldInfo.count == newInfo.count) {
                          mergeList.push(newList[iNew]);
                          _curLength2 += newList[iNew].itemInfo.count;
                          newList[iNew] = null;
                          iOld++;
                          iNew++;
                        } else if (oldInfo.count > newInfo.count) {
                          var symbolLength = oldInfo.count;
                          while (symbolLength > 0) {
                            mergeList.push(newList[iNew]);
                            symbolLength -= newList[iNew].itemInfo.count;
                            newList[iNew] = null;
                            iNew++;
                          }
                          iOld++;
                          _curLength2 += oldInfo.count;
                        } else {
                          var _symbolLength = newInfo.count;
                          while (_symbolLength > 0) {
                            _symbolLength -= _symbolListBack[iOld].count;
                            iOld++;
                          }
                          mergeList.push(newList[iNew]);
                          _curLength2 += newInfo.count;
                          newList[iNew] = null;
                          iNew++;
                        }
                      }
                      _this3.symbolList = mergeList.slice();
                      for (var _iRow = newList.length - 1; _iRow >= 0; _iRow--) {
                        var _symbolItem = newList[_iRow];
                        if (_symbolItem) {
                          _symbolItem.node.getComponent(UIOpacity).opacity = 0;
                          _symbolItem.node.destroyFromParent();
                          newList.splice(_iRow, 1);
                        }
                      }
                      for (var _i8 = 0; _i8 < _resultInfoListBack.length; _i8++) {
                        var _symbolItem2 = _this3.symbolList[_i8];
                        _symbolItem2.itemInfo.remove = _resultInfoListBack[_i8].remove;
                      }
                    }
                    isColWildBeforeStart = false;
                    isAllWild = false;
                    _resultInfoListBack = [];
                    _symbolListBack = [];
                    symbolListBack = [];
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                      var arrPro, _iterator4, _step4, _symbol5;
                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            CoasterUtils.instance.playOneShot(eSound.spinActiveLoop);
                            arrPro = [];
                            for (_iterator4 = _createForOfIteratorHelperLoose(_this3.symbolList); !(_step4 = _iterator4()).done;) {
                              _symbol5 = _step4.value;
                              arrPro.push(_symbol5.doStop());
                            }
                            _context2.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (CoasterModel.instance.specialStartCol > 0 && (_this3._iCol == 0 || _this3._iCol >= CoasterModel.instance.specialStartCol)) {
                              EventManager.instance.emit(eEvent.onSetMask, _this3._iCol, _this3.node.getPosition().x);
                            }
                            _this3.unschedule(scheduleUpdate);
                            resolve();
                          case 8:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2);
                    })), 0);
                    return;
                  }
              }
              var offset = _this3._speed * 0.01667;
              var disLength = _this3.isHorizontal ? offset / eConstDef.cSymbolW : offset / eConstDef.cSymbolH;
              _this3._curLength -= disLength;
              var isSide = _this3._curLength <= _this3.maxIndex;
              if (_this3._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this3.maxIndex - _this3._curLength;
                offset = _this3.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this3._curLength = _this3.maxIndex;
                _this3._runStatus = eRunStatus.END;
              }
              for (var _i9 = _this3.symbolList.length - 1; _i9 >= 0; _i9--) {
                var _symbol6 = _this3.symbolList[_i9];
                if (!_symbol6.doRunning(offset)) {
                  _this3.symbolList.splice(_i9, 1);
                  _symbol6.node.destroyFromParent();
                }
              }
              if (isSide) {
                var result = _this3._runStatus == eRunStatus.STOP && _this3._resultInfoList.length > 0 ? _this3._resultInfoList.shift() : null;
                if (result) {
                  var _symbol7 = Math.floor(Math.random() * eSymbol.TEN) + 1;
                  result.num = isColWild ? _symbol7 : result.num;
                }
                if (isAllWild) {
                  return;
                }
                _this3.addNewItem(result);
              }
            };
            if (_this3.isHorizontal) {
              _this3.doStartH();
            } else {
              _this3.scheduleOnce(function () {
                _this3.schedule(scheduleUpdate);
              }, startDelay);
            }
          });
        };
        _proto.doStartH = function doStartH() {
          if (!this.isHorizontal) {
            return;
          }
          for (var i = 0; i < this.symbolList.length; i++) {
            var symbol = this.symbolList[i];
            symbol.doStartH(i);
          }
        };
        _proto.doStopH = function doStopH() {
          var arrPro = [];
          for (var i = 0; i < this.symbolList.length; i++) {
            var symbol = this.symbolList[i];
            arrPro.push(symbol.doStopH(i));
          }
          this.scheduleOnce(function () {
            CoasterUtils.instance.playOneShot(eSound.spinStopCoaster);
          }, 0.25);
          return Promise.all(arrPro);
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this.symbolList.length; i++) {
            var symbol = this.symbolList[i];
            arrPro.push(symbol.doEffect(Coaster_symbol.rewardCount * 0.0));
            if (symbol.itemInfo.remove) {
              Coaster_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        }
        // static catCount = 0;
        // doCatNumCollect(collectType = 0) {
        //     let arrPro = [];
        //     for (let i = 0; i < this.symbolList.length; i++) {
        //         let symbol = this.symbolList[i];

        //         if (symbol.checkCollect()) {
        //             arrPro.push(symbol.doCatNumCollect(Coaster_symbol.catCount * 0.35, collectType));
        //             Coaster_symbol.catCount++;
        //         }
        //     }

        //     return Promise.all(arrPro);
        // }
        ;

        _proto.doClear = /*#__PURE__*/
        function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var arrPro, _iterator5, _step5, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // Coaster_symbol.catCount = 0;
                  Coaster_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator5 = _createForOfIteratorHelperLoose(this.symbolList); !(_step5 = _iterator5()).done;) {
                    symbol = _step5.value;
                    if (symbol.itemInfo.remove) {
                      if (symbol.itemInfo.num < eSymbol.WILD) {
                        arrPro.push(symbol.doClear());
                      } else {
                        arrPro.push(symbol.doWildClear(symbol.itemInfo.num));
                      }
                    }
                  }
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doClear() {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        _proto.doScatterAni = /*#__PURE__*/function () {
          var _doScatterAni = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    var arrPro = [];
                    for (var _iterator6 = _createForOfIteratorHelperLoose(_this4.symbolList), _step6; !(_step6 = _iterator6()).done;) {
                      var symbol = _step6.value;
                      arrPro.push(symbol.doScatterAni());
                    }
                    return Promise.all(arrPro);
                  }));
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          function doScatterAni() {
            return _doScatterAni.apply(this, arguments);
          }
          return doScatterAni;
        }() // isSolidWild(iRow) {
        //     if (this.isHorizontal && CoasterModel.instance.arrColWild.length > 0) {
        //         for (const iCol of CoasterModel.instance.arrColWild) {
        //             if (iRow == iCol - 1) {
        //                 return true;
        //             }
        //         }
        //     }
        //     return false;
        // }
        ;

        _proto.doDrop = /*#__PURE__*/
        function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(nextReult, curReult) {
            var _nextResultInfoList, arrColWildNext, isSolidWild, arrOld, arrSolid, iRow, symbolItem, row, _arrPro, _toLength, _row, _symbolItem3, nextInfo, isNew, toDropPos, _iRow2, _symbolItem4, _iRow3, _symbolItem5, _curLength, arrPro, toLength, _row2, _symbolItem6, _isNew, _nextInfo, isColWild, symbol;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _nextResultInfoList = this.getResult(nextReult);
                  gts.Debug.Log("doDrop==_nextResultInfoList==" + JSON.stringify(_nextResultInfoList));

                  //
                  arrColWildNext = CoasterUtils.instance.checkColWild(nextReult);
                  isSolidWild = function isSolidWild(row) {
                    var AllPosMsg_7 = nextReult.openNum[6].slice();
                    var AllPosMsg_8 = nextReult.openNum[7].slice();
                    if (AllPosMsg_7[row].num >= eSymbol.WILD && AllPosMsg_8[row].num >= eSymbol.WILD) {
                      return true;
                    }
                    return false;
                  };
                  if (!this.isHorizontal) {
                    _context5.next = 35;
                    break;
                  }
                  //&& arrColWildNext.length > 0
                  //横向 消除过后还是整列wild  则不能掉落
                  //remove
                  arrOld = [];
                  arrSolid = [null, null, null, null];
                  this.symbolList.length;
                  for (iRow = 0; iRow < this.symbolList.length; iRow++) {
                    symbolItem = this.symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._curLength -= symbolItem.itemInfo.count;
                      this.symbolList[iRow] = null;
                    } else if (isSolidWild(iRow) && symbolItem.itemInfo.num >= eSymbol.WILD) {
                      //
                      arrSolid[iRow] = symbolItem;
                    } else {
                      arrOld.push(symbolItem);
                    }
                  }
                  for (row = 0; row < arrSolid.length; row++) {
                    if (arrSolid[row] == null) {
                      arrSolid[row] = arrOld.shift();
                    }
                  }
                  this.symbolList = arrSolid.slice();

                  //        //add and drop
                  _arrPro = [];
                  _toLength = this.maxIndex; //        // let newFloor = 0;
                  _row = 0;
                case 14:
                  if (!(_row < _nextResultInfoList.length)) {
                    _context5.next = 33;
                    break;
                  }
                  _symbolItem3 = this.symbolList[_row];
                  nextInfo = _nextResultInfoList[_row];
                  isNew = false;
                  if (!_symbolItem3) {
                    _context5.next = 23;
                    break;
                  }
                  _symbolItem3.isChangeSymbol = _symbolItem3.itemInfo.num < eSymbol.SCATTER && _nextResultInfoList[_row].num == eSymbol.WILD;
                  _symbolItem3.itemInfo = _nextResultInfoList[_row];
                  _context5.next = 28;
                  break;
                case 23:
                  isNew = true;
                  _symbolItem3 = this.addNewItem(nextInfo, _toLength, _row);
                  if (_symbolItem3) {
                    _context5.next = 27;
                    break;
                  }
                  return _context5.abrupt("continue", 30);
                case 27:
                  _toLength += _symbolItem3.itemInfo.count;
                case 28:
                  toDropPos = _row;
                  _arrPro.push(_symbolItem3.doDrop(toDropPos, isNew));
                case 30:
                  _row++;
                  _context5.next = 14;
                  break;
                case 33:
                  //remove
                  for (_iRow2 = this.symbolList.length - 1; _iRow2 >= 0; _iRow2--) {
                    _symbolItem4 = this.symbolList[_iRow2];
                    if (_symbolItem4 == null) {
                      this.symbolList.splice(_iRow2, 1);
                    }
                  }
                  return _context5.abrupt("return", Promise.all(_arrPro));
                case 35:
                  //        //remove
                  for (_iRow3 = this.symbolList.length - 1; _iRow3 >= 0; _iRow3--) {
                    _symbolItem5 = this.symbolList[_iRow3];
                    if (_symbolItem5.isClear) {
                      _symbolItem5.node.destroyFromParent();
                      this.symbolList.splice(_iRow3, 1);
                      this._curLength -= _symbolItem5.itemInfo.count;
                    }
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  _row2 = 0;
                case 40:
                  if (!(_row2 < _nextResultInfoList.length)) {
                    _context5.next = 63;
                    break;
                  }
                  _symbolItem6 = null;
                  _isNew = false;
                  if (!(_row2 < this.symbolList.length)) {
                    _context5.next = 49;
                    break;
                  }
                  _symbolItem6 = this.symbolList[_row2];
                  _symbolItem6.isChangeSymbol = _symbolItem6.itemInfo.num < eSymbol.SCATTER && _nextResultInfoList[_row2].num == eSymbol.WILD;
                  if (_symbolItem6.itemInfo.num < eSymbol.SCATTER) {
                    _symbolItem6.itemInfo = _nextResultInfoList[_row2];
                  }
                  // symbolItem.itemInfo = _nextResultInfoList[row];
                  //                // newFloor += symbolItem.itemInfo.Length;

                  // if (symbolItem.isChange) {
                  //     symbolItem.doEndChange(symbolItem.itemInfo);
                  // }
                  _context5.next = 58;
                  break;
                case 49:
                  _isNew = true;
                  _nextInfo = _nextResultInfoList[_row2];
                  isColWild = arrColWildNext.length > 0;
                  symbol = Math.floor(Math.random() * eSymbol.TEN) + 1;
                  isColWild && _nextInfo.num != eSymbol.SCATTER ? symbol : _nextInfo.num;
                  _symbolItem6 = this.addNewItem(_nextInfo, toLength);
                  if (_symbolItem6) {
                    _context5.next = 57;
                    break;
                  }
                  return _context5.abrupt("continue", 60);
                case 57:
                  toLength += _symbolItem6.itemInfo.count;
                case 58:
                  arrPro.push(_symbolItem6.doDrop(_curLength, _isNew));
                  _curLength += _symbolItem6.itemInfo.count;
                case 60:
                  _row2++;
                  _context5.next = 40;
                  break;
                case 63:
                  return _context5.abrupt("return", Promise.all(arrPro));
                case 64:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function doDrop(_x, _x2) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        _proto.doDropFront = /*#__PURE__*/function () {
          var _doDropFront = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(nextReult, dropDelay, isFront, curReult) {
            var _nextResultInfoList, isSolidWild, arrOld, arrSolid, iRow, symbolItem, row, _arrPro2, _toLength2, _row3, _symbolItem7, nextInfo, toDropPos, _toDropPos, _iRow4, _symbolItem8, _curLength, _iRow5, _symbolItem9, _iRow6, _symbolItem10, arrPro, toLength, _iRow7, _symbolItem11, isNew, _nextInfo2;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  if (isFront === void 0) {
                    isFront = true;
                  }
                  _nextResultInfoList = this.getResult(nextReult);
                  CoasterUtils.instance.checkColWild(nextReult);
                  isSolidWild = function isSolidWild(row) {
                    var AllPosMsg_7 = nextReult.openNum[6].slice();
                    var AllPosMsg_8 = nextReult.openNum[7].slice();
                    if (AllPosMsg_7[row].num >= eSymbol.WILD && AllPosMsg_8[row].num >= eSymbol.WILD) {
                      return true;
                    }
                    return false;
                  };
                  if (!this.isHorizontal) {
                    _context6.next = 36;
                    break;
                  }
                  if (isFront) {
                    //&& arrColWildNext.length > 0
                    //横向 消除过后还是整列wild  则不能掉落
                    //remove
                    arrOld = [];
                    arrSolid = [null, null, null, null];
                    this.symbolList.length;
                    for (iRow = 0; iRow < this.symbolList.length; iRow++) {
                      symbolItem = this.symbolList[iRow];
                      if (symbolItem.isClear) {
                        symbolItem.node.destroyFromParent();
                        this._curLength -= symbolItem.itemInfo.count;
                        this.symbolList[iRow] = null;
                      } else if (isSolidWild(iRow) && symbolItem.itemInfo.num >= eSymbol.WILD) {
                        //
                        arrSolid[iRow] = symbolItem;
                      } else {
                        arrOld.push(symbolItem);
                      }
                    }
                    for (row = 0; row < arrSolid.length; row++) {
                      if (arrSolid[row] == null) {
                        arrSolid[row] = arrOld.shift();
                      }
                    }
                    this.symbolList = arrSolid.slice();
                  }

                  //        //add and drop
                  _arrPro2 = [];
                  _toLength2 = this.maxIndex; //        // let newFloor = 0;
                  _row3 = 0;
                case 10:
                  if (!(_row3 < _nextResultInfoList.length)) {
                    _context6.next = 34;
                    break;
                  }
                  _symbolItem7 = this.symbolList[_row3];
                  nextInfo = _nextResultInfoList[_row3];
                  if (!isFront) {
                    _context6.next = 23;
                    break;
                  }
                  if (_symbolItem7) {
                    _context6.next = 16;
                    break;
                  }
                  return _context6.abrupt("continue", 31);
                case 16:
                  _symbolItem7.isChangeSymbol = _symbolItem7.itemInfo.num < eSymbol.SCATTER && _nextResultInfoList[_row3].num == eSymbol.WILD;
                  _symbolItem7.itemInfo = _nextResultInfoList[_row3];
                  toDropPos = _row3;
                  _arrPro2.push(_symbolItem7.doDrop(toDropPos, false, dropDelay * Coaster_symbol.dropCounts));
                  Coaster_symbol.dropCounts++;
                  _context6.next = 31;
                  break;
                case 23:
                  if (!(!_symbolItem7 || _symbolItem7.itemInfo.num != nextInfo.num)) {
                    _context6.next = 31;
                    break;
                  }
                  _toDropPos = _row3;
                  _symbolItem7 = this.addNewItem(nextInfo, _toLength2, _row3);
                  if (_symbolItem7) {
                    _context6.next = 28;
                    break;
                  }
                  return _context6.abrupt("continue", 31);
                case 28:
                  _toLength2 += _symbolItem7.itemInfo.count;
                  _arrPro2.push(_symbolItem7.doDrop(_toDropPos, true, dropDelay * Coaster_symbol.dropCounts));
                  Coaster_symbol.dropCounts++;
                case 31:
                  _row3++;
                  _context6.next = 10;
                  break;
                case 34:
                  if (!isFront) {
                    //remove
                    for (_iRow4 = this.symbolList.length - 1; _iRow4 >= 0; _iRow4--) {
                      _symbolItem8 = this.symbolList[_iRow4];
                      if (_symbolItem8 == null) {
                        this.symbolList.splice(_iRow4, 1);
                      }
                    }
                  }
                  return _context6.abrupt("return", Promise.all(_arrPro2));
                case 36:
                  _curLength = 0; // let dropCounts = 0;
                  if (isFront) {
                    Coaster_symbol.dropCounts = 0;
                    //        //remove
                    for (_iRow5 = this.symbolList.length - 1; _iRow5 >= 0; _iRow5--) {
                      _symbolItem9 = this.symbolList[_iRow5];
                      if (_symbolItem9.isClear) {
                        _symbolItem9.node.destroyFromParent();
                        this.symbolList.splice(_iRow5, 1);
                        this._curLength -= _symbolItem9.itemInfo.count;
                      }
                    }
                  } else {
                    for (_iRow6 = this.symbolList.length - 1; _iRow6 >= 0; _iRow6--) {
                      _symbolItem10 = this.symbolList[_iRow6];
                      _curLength += _symbolItem10.itemInfo.count;
                    }
                  }

                  //////////////////////////////////add and drop
                  arrPro = [];
                  toLength = this.maxIndex;
                  _iRow7 = 0;
                case 41:
                  if (!(_iRow7 < _nextResultInfoList.length)) {
                    _context6.next = 60;
                    break;
                  }
                  _symbolItem11 = null;
                  isNew = false;
                  if (!isFront) {
                    _context6.next = 49;
                    break;
                  }
                  if (_iRow7 < this.symbolList.length) {
                    _symbolItem11 = this.symbolList[_iRow7];
                    _symbolItem11.isChangeSymbol = _symbolItem11.itemInfo.num < eSymbol.SCATTER && _nextResultInfoList[_iRow7].num == eSymbol.WILD;
                    if (_symbolItem11.itemInfo.num < eSymbol.SCATTER) {
                      _symbolItem11.itemInfo = _nextResultInfoList[_iRow7];
                    }
                  }
                  isNew = false;
                  _context6.next = 56;
                  break;
                case 49:
                  if (!(_iRow7 >= this.symbolList.length)) {
                    _context6.next = 56;
                    break;
                  }
                  _nextInfo2 = _nextResultInfoList[_iRow7];
                  _symbolItem11 = this.addNewItem(_nextInfo2, toLength);
                  if (_symbolItem11) {
                    _context6.next = 54;
                    break;
                  }
                  return _context6.abrupt("continue", 57);
                case 54:
                  toLength += _symbolItem11.itemInfo.count;
                  isNew = true;
                case 56:
                  if (_symbolItem11) {
                    arrPro.push(_symbolItem11.doDrop(_curLength, isNew, dropDelay * Coaster_symbol.dropCounts));
                    _curLength += _symbolItem11.itemInfo.count;
                    Coaster_symbol.dropCounts++;
                  }
                case 57:
                  _iRow7++;
                  _context6.next = 41;
                  break;
                case 60:
                  return _context6.abrupt("return", Promise.all(arrPro));
                case 61:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
          function doDropFront(_x3, _x4, _x5, _x6) {
            return _doDropFront.apply(this, arguments);
          }
          return doDropFront;
        }();
        return Coaster_symbol;
      }(Component), _class3.rewardCount = 0, _class3.dropCounts = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTempH", [_dec4], {
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

System.register("chunks:///_virtual/Coaster_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "70cc602VidMXYnWEGlBS0Vk", "Coaster_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_symbolEffectRoot = exports('default', (_dec = ccclass("CoasterSymbolEffectRoot"), _dec2 = menu("game/CoasterGame/Coaster_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_symbolEffectRoot, _Component);
        function Coaster_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Coaster_symbolEffectRoot.prototype;
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
        return Coaster_symbolEffectRoot;
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

System.register("chunks:///_virtual/Coaster_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterDef.ts', './Coaster_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UITransform, instantiate, UIOpacity, Component, eSymbol, Coaster_symbolItem;
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
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Coaster_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "246afaCRkFJUpyNE6antVjt", "Coaster_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // SCATTER = 0,
      // //     WILD = 1,
      // //     SHITOU = 2,
      // //     CHANCHU = 3,
      // //     JINLI = 4,
      // //     HONGBAO = 5,
      // //     LUO = 6,
      // //     BIANPAO = 7,
      // //     A = 8,
      // //     K = 9,
      // //     Q = 10,
      // //     J = 11,
      // //     TEN = 12,
      // //     CAISHEN = 13,
      var eRate = [[30, 40, 60, 80],
      //SHITOU
      [20, 25, 50, 70],
      //CHANCHU
      [10, 25, 40, 60],
      //JINLI
      [8, 15, 20, 30],
      //HONGBAO
      [6, 10, 12, 15],
      //LUO = 6,
      [6, 10, 12, 15],
      //BIANPAO
      [4, 6, 8, 10],
      //A
      [4, 6, 8, 10],
      //K
      [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
      var Coaster_symbolInfo = exports('default', (_dec = ccclass("CoasterSymbolInfo"), _dec2 = menu("game/CoasterGame/Coaster_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_symbolInfo, _Component);
        function Coaster_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Node_rateInfo: cc.Node = null;
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Coaster_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1, 1, 1)
            }).to(0.2, {
              scale: v3(0.25, 0.25, 0.25)
            }).call(function () {
              _this2.Node_item.destroyAllChildren();
              _this2.mask.active = false;
              _this2.Node_info.scale = v3(0, 0, 0);
              _this2.Node_item.active = false;
              _this2.Node_info.active = false;
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {
          // EventManager.instance.on(CoasterDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
          // EventManager.instance.off(CoasterDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          var _this3 = this;
          if (this.Node_info.active) {
            this.Node_item.destroyAllChildren();
            this.mask.active = false;
            this.Node_item.active = false;
            this.Node_info.active = false;
            return;
          }
          this.mask.active = true;
          this.Node_item.active = true;
          this.Node_icon.active = true;
          this.Node_info.active = true;
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos));
          pos.x = pos.x - 150 < -307 ? pos.x + 150 : pos.x + 150 > 307 ? pos.x - 150 : pos.x;
          this.Node_info.position = pos;
          this.Node_item.destroyAllChildren();
          this.scheduleOnce(function () {
            var newSymbol = instantiate(symbolNode);
            newSymbol.position = v3(0);
            newSymbol.name = "Node_box";
            _this3.Node_item.addChild(newSymbol);
            newSymbol.scale = v3(0.7, 0.7, 0.7);

            // this.Node_item.getComponent(Coaster_symbolItem).initItem(symbol, true, 0, 0, false);
            _this3.scheduleOnce(function () {
              if (symbol.num <= eSymbol.WILD) {
                _this3.Node_item.getComponent(Coaster_symbolItem).setSymbolIcon(newSymbol.getChildByName("Node_symbol"), symbol.num, true, false, true);
              } else {
                _this3.Node_item.getComponent(Coaster_symbolItem).doWildEnter(symbol.num, symbol.count, 0.7, newSymbol);
              }
            }, 0.01);
            switch (symbol.num) {
              case eSymbol.SCATTER:
                {
                  // this.Node_info.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                  // this.Node_info.getComponent(cc.Sprite).spriteFrame = this.arrBgSpFrame[1];
                  _this3.Node_item.active = true;
                  _this3.Node_icon.active = false;
                  _this3.Label_hu.node.active = true;
                  _this3.Label_wild.node.active = false;
                  break;
                }
              case eSymbol.WILD:
                {
                  newSymbol.getComponent(UITransform).anchorY = 0.5;
                  var Node_symbol = newSymbol.getChildByName("Node_symbol");
                  Node_symbol.getComponent(UITransform).anchorY = 0.5;
                  Node_symbol.position = v3(0, 0, 0);
                }
              case eSymbol.WILD2:
              case eSymbol.WILD3:
                {
                  newSymbol.scale = v3(0.7, 0.7, 0.7);

                  // this.Node_info.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                  // this.Node_info.getComponent(cc.Sprite).spriteFrame = this.arrBgSpFrame[1];
                  _this3.Node_item.active = true;
                  _this3.Node_icon.active = false;
                  _this3.Label_hu.node.active = false;
                  _this3.Label_wild.node.active = true;
                  break;
                }
              default:
                {
                  gts.Debug.LogWarr("==symbol.Sym==" + symbol.num);
                  _this3.Node_item.getComponent(UITransform).priority = 0;
                  _this3.Node_icon.getComponent(UITransform).priority = 1;
                  _this3.Label_hu.node.active = false;
                  _this3.Label_wild.node.active = false;
                  _this3.Node_icon.active = true;
                  _this3.Node_item.active = true;

                  // this.Node_info.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                  // this.Node_info.getComponent(cc.Sprite).spriteFrame = this.arrBgSpFrame[0];

                  var arrRate = eRate[symbol.num - eSymbol.RollerCoaster];
                  for (var i = 0; i < 4; i++) {
                    var Label_rate = _this3.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                    Label_rate.string = "" + arrRate[i];
                  }
                  break;
                }
            }
            _this3.Node_info.getComponent(UITransform).height = 178 + (symbol.count - 1) * 103;
            _this3.Node_info.getComponent(UIOpacity).opacity = 255;
            _this3.Node_info.scale = v3(0, 0, 0);
            tween(_this3.Node_info).to(0.2, {
              scale: v3(1.1, 1.1, 1.1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, 0.05);
        };
        return Coaster_symbolInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_hu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec9], {
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

System.register("chunks:///_virtual/Coaster_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './EventManager.ts', './CoasterUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, Sprite, v3, UITransform, Label, Tween, tween, UIOpacity, instantiate, Component, CoasterModel, eRunStatus, eSymbol, eZindex, eConstDef, eEvent, cArrPos_0, cArrPos_1, eSound, EventManager, CoasterUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Sprite = module.Sprite;
      v3 = module.v3;
      UITransform = module.UITransform;
      Label = module.Label;
      Tween = module.Tween;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eZindex = module.eZindex;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
      cArrPos_0 = module.cArrPos_0;
      cArrPos_1 = module.cArrPos_1;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "fda215FfIhKc5xWoE9BTGwi", "Coaster_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_symbolItem = exports('default', (_dec = ccclass("CoasterSymbolItem"), _dec2 = menu("game/CoasterGame/Coaster_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_symbolItem, _Component);
        function Coaster_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // @property(Node)
          _this.Node_box = null;
          // @property(Node)
          _this.Node_symbol = null;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this._iRowH = 0;
          _this.tag = 0;
          //    // update (dt) {}
          //    ///
          _this._runStatus = eRunStatus.NONE;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          _this.isClear = false;
          _this.isChangeSymbol = false;
          _this.isDidOpen = false;
          return _this;
        }
        var _proto = Coaster_symbolItem.prototype;
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.initItem = function initItem(info, isHorizontal, iCol, runStatus, isSymbol) {
          var _this2 = this;
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (runStatus === void 0) {
            runStatus = eRunStatus.NONE;
          }
          if (isSymbol === void 0) {
            isSymbol = true;
          }
          this._iCol = iCol;
          // this._iRowH = iRow;
          this._isHorizontal = isHorizontal;
          this._runStatus = runStatus;
          this.itemInfo = info;
          this.Node_box = this.node.getChildByName("Node_box");
          this.Node_symbol = this.Node_box.getChildByName("Node_symbol");
          var isInit = CoasterModel.instance.betResult ? true : false;
          this.updateSymbol(this.itemInfo.remove, isInit);
          if (!isInit || !isSymbol) {
            this.scheduleOnce(function () {
              _this2.doWildEnter(_this2.itemInfo.num, _this2.itemInfo.count);
            }, 0.05);
          }
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            _this3.scheduleOnce(function () {
              itemSpine.skeletonData = CoasterUtils.instance.getSkeletonData("kuang_effect");
              itemSpine.setAnimation(0, "lv" + _this3.itemInfo.count, false);
            });
            _this3.node.addChild(newNode);
            _this3._spineEffect_kuang = itemSpine;
            resolve();
          });
        };
        _proto.addEffectKuangLight = function addEffectKuangLight() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = CoasterUtils.instance.getSkeletonData("kuang_light");
            itemSpine.setAnimation(0, "changelight_lv" + _this4.itemInfo.count, true);
            //            // //图标变化完成后
            //            // itemSpine.addAnimation(0, `lv${this.itemInfo.Length}`, true);
            resolve();
            _this4.node.addChild(newNode);
            _this4._spineEffect_kuangLight = itemSpine;
          });
        };
        _proto.setSymbolIcon = function setSymbolIcon(Node_symbol, Sym, isSpine, isIdle, isLoop) {
          if (isSpine === void 0) {
            isSpine = true;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (isSpine) {
            var itemSprite = Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = CoasterUtils.instance.getSkeletonData(Sym, false);
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = true;
              itemSpine.skeletonData = itemSymbol;
              var strAni = CoasterUtils.instance.getSymbolAniName(Sym, isIdle);
              itemSpine.setAnimation(0, strAni[0], strAni.length > 1 ? false : isLoop);
              if (strAni.length > 1) {
                for (var i = 1; i < strAni.length; i++) {
                  itemSpine.addAnimation(0, strAni[i], i == strAni.length - 1);
                }
              }
            });
          } else {
            var itemSpine = Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = CoasterUtils.instance.getItemSymbolIcon(Sym, true);
              var itemSprite = Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
          }
        };
        _proto.updateIcon = function updateIcon(Sym, isSpine, isIdle) {
          var _this5 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        //test
          //        // isSpine = false;

          isIdle = this._runStatus == eRunStatus.RUNNING && CoasterModel.instance.curSpecialStartCol != this._iCol;
          isSpine = Sym == eSymbol.SCATTER || this._isHorizontal || !isIdle ? true : isSpine;
          if (Sym > eSymbol.WILD) {
            isSpine = false;
            isIdle = false;
          }
          this.Node_symbol.scale = isIdle ? v3(2.0, 2.0, 2.0) : v3(1.0, 1.0, 1.0);
          //icon
          this.Node_symbol.setPosition(0, 0);
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = CoasterUtils.instance.getItemSymbolIcon(Sym, isIdle);
              var itemSprite = _this5.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this5.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;

              //                // gts.Debug.Log(`=updateIcon=Sym=${Sym}=length=${length}=spriteFrame=${itemSymbol.name}`);
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = CoasterUtils.instance.getSkeletonData(Sym);
              var itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this5.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = true;
              // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              var strAni = CoasterUtils.instance.getSymbolAniName(Sym, isIdle);
              itemSpine.setAnimation(0, strAni[0], false);
              if (strAni.length > 1) {
                for (var i = 1; i < strAni.length; i++) {
                  itemSpine.addAnimation(0, strAni[i], i == strAni.length - 1);
                }
              }
            });
          }

          //        //tag update
          this.Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.SCATTER:
              {
                if (this._runStatus == eRunStatus.STOP && CoasterModel.instance.specialStartCol > 0) {
                  this.scheduleOnce(function () {
                    var itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
                    itemSpine.setAnimation(0, "fastspin_idle", true);
                  }, 0.1);
                }
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length) {
          //box
          Sym = this.itemInfo.num >= eSymbol.WILD ? eSymbol.WILD : Sym;
          this.Node_box.getComponent(Sprite).spriteFrame = CoasterUtils.instance.getItemSymbolIconBox(Sym, length);
          this.Node_box.getComponent(UITransform).anchorY = 0.5;
          this.Node_box.position = v3(0, 0, 0);
          this.Node_symbol.position = v3(0, 0, 0);
          this.node.getComponent(UITransform).width = this.Node_box.getComponent(UITransform).width;
          this.node.getComponent(UITransform).height = this.Node_box.getComponent(UITransform).height;
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateBox(this.itemInfo.num, this.itemInfo.count);

          // this.updateFrame(this.itemInfo.count);

          this.updateIcon(this.itemInfo.num, isSpine, isIdle);
          this.updateZIndex(this._runStatus);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          if (!this.itemInfo) {
            return;
          }
          var _zIndex = 0;
          switch (this.itemInfo.num) {
            case eSymbol.WILD:
            case eSymbol.WILD2:
            case eSymbol.WILD3:
              {
                _zIndex = eZindex.icon_wild;
                break;
              }
            case eSymbol.SCATTER:
              {
                _zIndex = CoasterModel.instance.specialStartCol > 0 ? eZindex.SPECIAL : eZindex.icon_scatter;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon;
                break;
              }
          }
          switch (runStatus) {
            case eRunStatus.RUNNING:
              {
                _zIndex = CoasterModel.instance.specialStartCol > 0 && this._iCol > CoasterModel.instance.specialStartCol && this._iCol < eConstDef.CMaxCol - 2 ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                break;
              }
            default:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (CoasterModel.instance.gameStatus != eRunStatus.NONE || CoasterModel.instance.isAuto) {
            return;
          }
          var pos = this.Node_box.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_box, pos);
        };
        _proto.doStartH = function doStartH(index) {
          var _this6 = this;
          //横向 免费内，wild不动
          if (this.itemInfo.num >= eSymbol.WILD && CoasterModel.instance.freeStatus != eRunStatus.NONE && !CoasterModel.instance.isFirstFree) {
            return;
          }
          this._iRowH = index;
          var Label_tag = this.node.getChildByName("Label_tag");
          Label_tag.getComponent(Label).string = "" + index;
          Tween.stopAllByTarget(this.node);
          this.scheduleOnce(function () {
            var _tween;
            var arrPos = _this6._iCol == 6 ? cArrPos_0 : cArrPos_1;
            var maxStep = index + 2;
            var arrTween = [];
            var duration = CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? 0.025 : 0.05;
            for (var i = maxStep - 1; i >= 0; i--) {
              arrTween.push(tween(_this6.node).to(duration, {
                position: arrPos[i].pos,
                eulerAngles: arrPos[i].eulerAngles
              }));
            }
            (_tween = tween(_this6.node)).sequence.apply(_tween, arrTween).call(function () {}).start();
          }, index * (CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? 0 : 0.075));
        };
        _proto.doStopH = function doStopH(index) {
          var _this7 = this;
          this._runStatus = eRunStatus.STOP;
          return new Promise(function (resolve, reject) {
            _this7._iRowH = index;
            if (_this7.itemInfo.num >= eSymbol.WILD && CoasterModel.instance.freeStatus != eRunStatus.NONE && !CoasterModel.instance.isFirstFree) {
              var result = CoasterModel.instance.betResult.OpenNums[0].openNum[_this7._iCol];
              _this7.itemInfo = result[index];
              resolve();
              return;
            }
            var Label_tag = _this7.node.getChildByName("Label_tag");
            Label_tag.getComponent(Label).string = "" + index;
            var arrPos = _this7._iCol == 6 ? cArrPos_0 : cArrPos_1;
            var startPos = arrPos[arrPos.length - 1].pos;
            // let endPos = arrPos[index + 2].pos;
            _this7.node.position = startPos; //v3(startPos.x + (startPos.x - endPos.x), startPos.y, startPos.z);
            _this7.node.eulerAngles = arrPos[arrPos.length - 1].eulerAngles;
            for (var i = _this7.node.children.length - 1; i >= 0; i--) {
              var childNode = _this7.node.children[i];
              if (childNode.name.indexOf("newBox_") != -1) {
                childNode.destroyFromParent();
              }
            }
            var duration = CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? 0.03 : 0.05;
            Tween.stopAllByTarget(_this7.node);
            _this7.scheduleOnce(function () {
              var _tween2;
              var maxStep = arrPos.length - 1;
              var endStep = index + 2;
              var result = CoasterModel.instance.betResult.OpenNums[0].openNum[_this7._iCol];
              _this7.itemInfo = result[index];
              _this7.updateSymbol(true);
              var arrTween = [];
              for (var _i = maxStep - 1; _i >= endStep; _i--) {
                arrTween.push(tween(_this7.node).to(duration, {
                  position: arrPos[_i].pos,
                  eulerAngles: arrPos[_i].eulerAngles
                }));
              }
              (_tween2 = tween(_this7.node)).sequence.apply(_tween2, arrTween).delay(0.5).call(function () {
                switch (_this7.itemInfo.num) {
                  case eSymbol.WILD2:
                  case eSymbol.WILD3:
                    {
                      _this7.doWildEnter(_this7.itemInfo.num, _this7.itemInfo.count);
                      _this7.scheduleOnce(function () {
                        resolve();
                      }, 0.75);
                      break;
                    }
                  default:
                    {
                      resolve();
                      break;
                    }
                }
              }).start();
            }, index * (CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? 0.06 : 0.075));
          });
        };
        _proto.doRunning = function doRunning(offset) {
          var _this8 = this;
          //横向 免费内，wild不动
          if (this.itemInfo.num >= eSymbol.WILD && CoasterModel.instance.freeStatus != eRunStatus.NONE && !CoasterModel.instance.isFirstFree) {
            return true;
          }
          this._runStatus = eRunStatus.RUNNING;
          this.updateZIndex(this._runStatus);
          var ret = true;
          this._isHorizontal ? function () {
            _this8.node.setPosition(_this8.node.position.x - offset, _this8.node.position.y);
            var posSide = -186 - 62.5 - _this8.itemInfo.count / 2 * 125;
            if (_this8.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this8.node.setPosition(_this8.node.position.x, _this8.node.position.y - offset);
            var posSide = -200 - 50 - _this8.itemInfo.count / 2 * 100;
            if (_this8.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this9 = this;
          if (offset === void 0) {
            offset = 0;
          }
          this._runStatus = eRunStatus.STOP;
          return new Promise(function (resolve, reject) {
            _this9._isHorizontal ? function () {
              var pos_0 = _this9.node.getPosition().x + 10 + offset;
              var pos_1 = _this9.node.getPosition().x + offset;
              tween(_this9.node).to(0.15, {
                position: v3(pos_0, _this9.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this9.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this9.updateZIndex(eRunStatus.STOP);
                _this9.setSymbolIcon(_this9.Node_symbol, _this9.itemInfo.num, true, true, false);
                if (_this9.itemInfo.num == eSymbol.SCATTER) {
                  CoasterUtils.instance.playOneShot(eSound.symScatter);
                }
                resolve();
              }).start();
            }() : function () {
              if (CoasterModel.instance.isQuickStop) {
                _this9.updateZIndex(eRunStatus.STOP);
                _this9.setSymbolIcon(_this9.Node_symbol, _this9.itemInfo.num, true, true, false);
                if (_this9.itemInfo.num == eSymbol.SCATTER) {
                  CoasterUtils.instance.playOneShot(eSound.symScatter);
                }
                _this9.node.position = v3(_this9.node.position.x, _this9.node.getPosition().y + offset);
                resolve();
              } else {
                var pos_0 = _this9.node.getPosition().y + 10 + offset;
                var pos_1 = _this9.node.getPosition().y + offset;
                tween(_this9.node).to(0.15, {
                  position: v3(_this9.node.position.x, pos_0)
                }, {
                  easing: "cubicOut"
                }).to(0.05, {
                  position: v3(_this9.node.position.x, pos_1)
                }, {
                  easing: "cubicIn"
                }).call(function () {
                  _this9.updateZIndex(eRunStatus.STOP);
                  if (_this9.itemInfo.num == eSymbol.SCATTER) {
                    CoasterUtils.instance.playOneShot(eSound.symScatter);
                  }
                  resolve();
                }).start();
              }
            }();
          });
        }
        //    // isBreak = false;
        ;

        _proto.doEffect = function doEffect(delay) {
          var _this10 = this;
          this._runStatus = eRunStatus.CLEAR;
          return new Promise(function (resolve, reject) {
            if (_this10.itemInfo.remove) {
              if (_this10.itemInfo.num < eSymbol.WILD) {
                _this10.updateSymbol(true, false);
              }
              _this10.scheduleOnce(function () {
                if (_this10.itemInfo.num >= eSymbol.WILD) {
                  _this10.doWildEffect();
                  _this10.updateZIndex(_this10._runStatus);
                }
                _this10.addEffectKuang();
                _this10.scheduleOnce(resolve, 1);
              }, 0.0 + delay);
              // }
            } else {
              _this10.node.getComponent(UITransform).priority = eZindex.icon;
              resolve();
            }
          });
        };
        _proto.doClear = function doClear() {
          var _this11 = this;
          this._runStatus = eRunStatus.CLEAR;
          return new Promise(function (resolve, reject) {
            if (_this11.itemInfo.remove) {
              if (_this11._spineEffect_kuang) {
                _this11._spineEffect_kuang.setCompleteListener(function () {
                  _this11._spineEffect_kuang.setCompleteListener(null);
                  _this11._spineEffect_kuang.node.destroyFromParent();
                  _this11._spineEffect_kuang = null;
                  if (_this11.itemInfo.num <= eSymbol.WILD) {
                    _this11.node.getComponent(UIOpacity).opacity = 0;
                  }
                  resolve();
                });
              } else {
                resolve();
                return;
              }
              if (_this11.itemInfo.num < eSymbol.WILD) {
                var arrName = ["Node_frame", "Node_box", "Node_frame_f"];
                for (var _i2 = 0, _arrName = arrName; _i2 < _arrName.length; _i2++) {
                  var name = _arrName[_i2];
                  var childNode = _this11.node.getChildByName(name);
                  if (childNode) {
                    tween(childNode)
                    //                        // .blink(3, 3)
                    .to(0.05, {
                      scale: v3(1.2, 1.2, 1)
                    }).to(0.05, {
                      scale: v3(1, 1, 1)
                    }).delay(0.1).call(function () {
                      if (!_this11.isClear) {
                        _this11.isClear = true;
                        CoasterUtils.instance.playOneShot(eSound.symShrink);
                      }
                    }).start();
                    tween(childNode.getComponent(UIOpacity)).to(0.1, {
                      opacity: 0
                    }).start();
                  }
                }
              } else {
                if (CoasterModel.instance.freeStatus == eRunStatus.NONE) {
                  tween(_this11.node).to(0.1, {
                    scale: v3(0.5, 0.5, 0.5)
                  }).start();

                  // let Node_symbol = this.node.getChildByName("Node_symbol");
                  var itemSpine = _this11.Node_symbol.getComponent(sp.Skeleton);
                  itemSpine.setAnimation(0, "exit", false);
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    if (_this11.itemInfo.num > eSymbol.WILD) {
                      Tween.stopAllByTarget(_this11.node);
                      _this11.node.scale = _this11._isHorizontal ? v3(1.0, 1.0, 1.0) : v3(0.7, 0.7, 0.7);
                      _this11.itemInfo.num = _this11.itemInfo.num - 1;
                      _this11.updateSymbol();
                    } else if (!_this11.isClear) {
                      _this11.isClear = true;
                      _this11.node.getComponent(UIOpacity).opacity = 0;
                      CoasterUtils.instance.playOneShot(eSound.symShrink);
                    }
                  });
                }
              }

              // }
            } else {
              resolve();
            }
          });
        };
        _proto._doShake = function _doShake() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            _this12.scheduleOnce(function () {
              if (!_this12.isClear) {
                // this.node.runAction(sequence(Coaster_shake.create(0.5, 1.25, 1.25), callFunc(resolve, this)));
                tween(_this12.node).shake(0.5, 1.25, 1.25).call(function () {
                  resolve();
                }).start();
              } else {
                resolve();
              }
            }, 0.25);
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength, isNew, dropDelay) {
            var _this13 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isNew === void 0) {
                    isNew = false;
                  }
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  // await this._doShake();

                  this._runStatus = eRunStatus.DROP;
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this13.scheduleOnce(function () {
                      var curPos = _this13._isHorizontal ? _this13.node.getPosition().x : _this13.node.getPosition().y;
                      var toPos = 0;
                      if (_this13._isHorizontal) {
                        //横向
                        var arrPos = _this13._iCol == 6 ? cArrPos_0 : cArrPos_1;
                        toPos = arrPos[toLength + 2].pos.x;
                      } else {
                        var offsetY = (toLength + _this13.itemInfo.count / 2) * eConstDef.cSymbolH;
                        toPos = eConstDef.cSymbolStartY + offsetY;
                      }

                      // let irow = this._iRowH;
                      var offset = curPos - toPos;
                      if (toPos >= curPos) {
                        resolve();
                        return;
                      }
                      var dropSpeed = 1000;
                      //            // let offset = this._isHorizontal ? dropLength * CoasterDef.eConstDef.cSymbolW : dropLength * CoasterDef.eConstDef.cSymbolH;

                      var duration = Math.abs(offset) / dropSpeed;
                      // this.scheduleOnce(() => {
                      //     CoasterUtils.instance.playOneShot(CoasterDef.eSound.drop_1);
                      // }, duration);

                      _this13._isHorizontal ? function () {
                        Tween.stopAllByTarget(_this13.node);
                        var duration = 0.1;
                        _this13.scheduleOnce(function () {
                          var _tween3;
                          var arrPos = _this13._iCol == 6 ? cArrPos_0 : cArrPos_1;
                          var maxStep = isNew ? arrPos.length - 1 : _this13._iRowH + 2;
                          var endStep = toLength + 2;
                          _this13._iRowH = toLength;
                          var arrTween = [];
                          for (var i = maxStep - 1; i >= endStep; i--) {
                            arrTween.push(tween(_this13.node).to(duration, {
                              position: arrPos[i].pos,
                              eulerAngles: arrPos[i].eulerAngles
                            }));
                          }
                          (_tween3 = tween(_this13.node)).sequence.apply(_tween3, arrTween).call(function () {
                            if (isNew) {
                              switch (_this13.itemInfo.num) {
                                case eSymbol.WILD2:
                                case eSymbol.WILD3:
                                  {
                                    _this13.doWildEnter(_this13.itemInfo.num, _this13.itemInfo.count);
                                    _this13.scheduleOnce(function () {
                                      resolve();
                                    }, 0.75);
                                    break;
                                  }
                                default:
                                  {
                                    resolve();
                                    break;
                                  }
                              }
                            } else {
                              resolve();
                            }
                          }).start();
                        }, toLength * 0.1);
                      }() : function () {
                        var pos_1 = _this13.node.getPosition().y - offset;
                        var pos_0 = pos_1 + 10;
                        tween(_this13.node).to(duration, {
                          position: v3(_this13.node.position.x, pos_1)
                        }, {
                          easing: "cubicOut"
                        }).to(0.05, {
                          position: v3(_this13.node.position.x, pos_0)
                        }, {
                          easing: "cubicIn"
                        }).to(0.05, {
                          position: v3(_this13.node.position.x, pos_1)
                        }, {
                          easing: "cubicIn"
                        }).call(function () {
                          resolve();
                        }).start();
                      }();
                    }, dropDelay);
                  }));
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doDrop(_x, _x2, _x3) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle, isHorizontal) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          var strAni = null;
          switch (symbolIndex) {
            case eSymbol.SCATTER:
              {
                strAni = isIdle ? "spawn" : "win";
                break;
              }
            case eSymbol.WILD:
            case eSymbol.WILD2:
            case eSymbol.WILD3:
              {
                strAni = isIdle ? "spawn" : "win";
                break;
              }
            default:
              {
                strAni = isIdle ? "spawn" : "win";
                break;
              }
          }
          if (!strAni) {
            return null;
          }
          //        // gts.Debug.Log("==getSymbolAniName=strAni=" + strAni);
          return strAni;
        };
        _proto.doScatterAni = function doScatterAni() {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            if (_this14.itemInfo.num == eSymbol.SCATTER) {
              var itemSpine = _this14.Node_symbol.getComponent(sp.Skeleton);
              itemSpine.setAnimation(0, "win", false);
              itemSpine.addAnimation(0, "win_idle", true);
              _this14.scheduleOnce(resolve, 0.75);
            } else {
              resolve();
            }
          });
        };
        _proto.doScatterEffect = function doScatterEffect() {
          var _this15 = this;
          return new Promise(function (resolve, reject) {
            var isPlay = true;
            if (_this15.itemInfo.num == eSymbol.SCATTER) {
              var playWait = function playWait() {
                if (isPlay) {
                  var itemSpine = _this15.Node_symbol.getComponent(sp.Skeleton);
                  itemSpine.setAnimation(0, "fastspin_start", false);
                  itemSpine.addAnimation(0, "fastspin_idle", false);
                  itemSpine.addAnimation(0, "fastspin_exit", false);
                  itemSpine.setCompleteListener(function () {
                    itemSpine.setCompleteListener(null);
                    playWait();
                  });
                } else {
                  var _itemSpine = _this15.Node_symbol.getComponent(sp.Skeleton);
                  _itemSpine.setAnimation(0, "idle", true);
                }
              };
              playWait();
              _this15.node.getComponent(UITransform).priority = eZindex.iconWin;
              _this15.scheduleOnce(function () {
                isPlay = false;
                resolve();
              }, 2);
            } else {
              _this15.node.getComponent(UITransform).priority = eZindex.icon;
              resolve();
            }
          });
        };
        _proto.doWildEnter = function doWildEnter(symbolIndex, length, scale, Node_box) {
          if (length === void 0) {
            length = 1;
          }
          if (scale === void 0) {
            scale = 1.0;
          }
          if (Node_box === void 0) {
            Node_box = null;
          }
          var maxIndex = symbolIndex - eSymbol.WILD;
          if (maxIndex > 0) {
            CoasterUtils.instance.playOneShot(eSound.symWildSpawn);
            var Node_frame_f = this.node.getChildByName("Node_frame_f");
            if (Node_frame_f) {
              Node_frame_f.getComponent(UITransform).priority = 100;
            }
            var defNode_box = Node_box || this.Node_box;
            var defNode_symbol = defNode_box.getChildByName("Node_symbol");
            defNode_box.getComponent(UITransform).anchorY = 0;
            defNode_box.position = v3(0, -scale * defNode_box.getComponent(UITransform).height / 2.0 + 100);
            defNode_symbol.position = v3(0, scale * defNode_box.getComponent(UITransform).height / 2.0, 0);
            var disAngle = 12;
            var startAngle = maxIndex == 1 ? disAngle / 2 : disAngle;
            var duration = 0.25;
            var defaultEuler = -60;
            defNode_box.eulerAngles = v3(0, 0, defaultEuler);
            defNode_box.scale = v3(scale * 2.0, scale * 2.0, scale * 2.0);
            defNode_box.getComponent(UIOpacity).opacity = 0;
            var toEulerAngles = v3(0, 0, startAngle);
            var toPos = v3(defNode_box.position.x, -scale * defNode_box.getComponent(UITransform).height / 2.0, defNode_box.position.z);
            var toScale = v3(scale, scale, scale);
            tween(defNode_box).to(duration, {
              position: toPos,
              scale: toScale,
              eulerAngles: toEulerAngles
            }).delay(duration).to(duration, {
              eulerAngles: v3(0, 0, toEulerAngles.z / 2.0)
            }).start();
            tween(defNode_box.getComponent(UIOpacity)).to(duration * 2, {
              opacity: 255
            }).start();
            for (var i = 0; i < maxIndex; i++) {
              var newBox = instantiate(defNode_box);
              newBox.name = "newBox_" + i;
              newBox.eulerAngles = v3(0, 0, defaultEuler);
              Tween.stopAllByTarget(newBox);
              Tween.stopAllByTarget(newBox.getComponent(UIOpacity));
              var Sym = eSymbol.WILD + i + 1;
              newBox.getComponent(Sprite).spriteFrame = CoasterUtils.instance.getItemSymbolIconBox(Sym, length);
              newBox.position = v3(0, -newBox.getComponent(UITransform).height / 2.0 + 100, 0);
              this.setSymbolIcon(newBox.getChildByName("Node_symbol"), Sym, i == maxIndex - 1);
              // let itemSymbol = CoasterUtils.instance.getItemSymbolIcon(Sym, true);
              // let itemSprite = newBox.getChildByName("Node_symbol").getComponent(Sprite);
              // if (itemSprite) {
              //     itemSprite.spriteFrame = itemSymbol;
              // }

              newBox.scale = v3(scale * 2.0, scale * 2.0, scale * 2.0);
              newBox.getComponent(UIOpacity).opacity = 0;
              toEulerAngles = v3(0, 0, startAngle - (i + 1) * disAngle);
              toPos = v3(newBox.position.x, -scale * newBox.getComponent(UITransform).height / 2.0, newBox.position.z);
              toScale = v3(scale, scale, scale);
              tween(newBox).delay(i * 0.1 + 0.1).to(duration, {
                position: toPos,
                scale: toScale,
                eulerAngles: toEulerAngles
              }).delay(duration).to(duration * 0.75, {
                eulerAngles: v3(0, 0, toEulerAngles.z / 2.0)
              }).start();
              tween(newBox.getComponent(UIOpacity)).delay(i * 0.1 + 0.1).to(duration * 2, {
                opacity: 255
              }).start();
              this.node.addChild(newBox);
            }
          }
        };
        _proto.doWildOpen = function doWildOpen(symbolIndex, toScale) {
          var _this16 = this;
          if (toScale === void 0) {
            toScale = 1.0;
          }
          return new Promise(function (resolve, reject) {
            var Node_frame_f = _this16.node.getChildByName("Node_frame_f");
            var maxIndex = symbolIndex - eSymbol.WILD;
            if (!_this16.isDidOpen && (maxIndex >= 0 || _this16.isChangeSymbol)) {
              _this16.isDidOpen = true;
              _this16.node.getComponent(UITransform).priority = eZindex.icon_wild;
              if (Node_frame_f) {
                Node_frame_f.getComponent(UITransform).priority = 100;
              }
              _this16.Node_box.getComponent(Sprite).spriteFrame = CoasterUtils.instance.getItemSymbolIconBox(eSymbol.WILD, _this16.itemInfo.count);
              if (_this16.isChangeSymbol) {
                if (symbolIndex == eSymbol.WILD) {
                  _this16.setSymbolIcon(_this16.Node_symbol, symbolIndex, true);
                  _this16.isChangeSymbol = false;
                  _this16.Node_box.eulerAngles = v3(0, 0, 0);
                  _this16.scheduleOnce(function () {
                    resolve();
                  }, 0.5);
                } else {
                  resolve();
                }
              } else {
                var itemSpine = _this16.Node_symbol.getComponent(sp.Skeleton);
                if (itemSpine) {
                  itemSpine.enabled = false;
                  itemSpine.destroy();
                }
                _this16.scheduleOnce(function () {
                  var itemSprite = _this16.Node_symbol.getComponent(Sprite);
                  if (!itemSprite) {
                    itemSprite = _this16.Node_symbol.addComponent(Sprite);
                  }
                  itemSprite.spriteFrame = CoasterUtils.instance.getItemSymbolIcon(eSymbol.WILD, true);
                  _this16.Node_box.getComponent(UITransform).anchorY = 0;
                  _this16.Node_box.position = v3(0, -_this16.Node_box.getComponent(UITransform).height / 2.0);
                  _this16.Node_symbol.position = v3(0, _this16.Node_box.getComponent(UITransform).height / 2.0, 0);
                  _this16.Node_box.eulerAngles = v3(0, 0, 0);
                  var disAngle = 12;
                  var startAngle = maxIndex == 1 ? disAngle / 2 : disAngle;
                  var duration = 0.25;
                  var toEulerAngles = startAngle;
                  _this16.updateZIndex(eRunStatus.STOP);
                  tween(_this16.Node_box).to(duration, {
                    eulerAngles: v3(0, 0, toEulerAngles / 2),
                    scale: v3(toScale * 1.025, toScale * 1.025, toScale * 1.025)
                  }).to(duration, {
                    eulerAngles: v3(0, 0, toEulerAngles),
                    scale: v3(toScale, toScale, toScale)
                  }).to(duration * 3, {
                    eulerAngles: v3(0, 0, toEulerAngles / 4.0)
                  }).start();
                  if (maxIndex == 0) {
                    _this16.scheduleOnce(function () {
                      _this16.setSymbolIcon(_this16.Node_symbol, symbolIndex, true);
                      _this16.Node_box.eulerAngles = v3(0, 0, 0);
                      resolve();
                    }, duration * 5);
                  }
                  for (var i = 0; i < maxIndex; i++) {
                    var newBox = _this16.node.getChildByName("newBox_" + i);
                    if (newBox) {
                      resolve();
                      continue;
                    }
                    newBox = instantiate(_this16.Node_box);
                    newBox.name = "newBox_" + i;
                    newBox.eulerAngles = v3(0, 0, 0);
                    Tween.stopAllByTarget(newBox);
                    Tween.stopAllByTarget(newBox.getComponent(UIOpacity));
                    var Sym = eSymbol.WILD + i + 1;
                    newBox.getComponent(UITransform).anchorY = 0;
                    newBox.getComponent(Sprite).spriteFrame = CoasterUtils.instance.getItemSymbolIconBox(Sym, _this16.itemInfo.count);
                    newBox.position = v3(0, -newBox.getComponent(UITransform).height / 2.0, 0);
                    _this16.setSymbolIcon(newBox.getChildByName("Node_symbol"), Sym, i == maxIndex - 1);
                    // let itemSymbol = CoasterUtils.instance.getItemSymbolIcon(Sym, true);
                    // let itemSprite = newBox.getChildByName("Node_symbol").getComponent(Sprite);
                    // if (itemSprite) {
                    //     itemSprite.spriteFrame = itemSymbol;
                    // }

                    toEulerAngles = startAngle - (i + 1) * disAngle;
                    tween(newBox).to(duration, {
                      eulerAngles: v3(0, 0, toEulerAngles / 2),
                      scale: v3(toScale * 1.025, toScale * 1.025, toScale * 1.025)
                    }).to(duration, {
                      eulerAngles: v3(0, 0, toEulerAngles),
                      scale: v3(toScale, toScale, toScale)
                    }).to(duration * 3, {
                      eulerAngles: v3(0, 0, toEulerAngles / 4.0)
                    }).call(function () {
                      resolve();
                    }).start();
                    _this16.node.addChild(newBox);
                  }
                });
              }
            } else {
              resolve();
            }
          });
        };
        _proto.doWildEffect = function doWildEffect() {
          var maxIndex = this.itemInfo.num - eSymbol.WILD;
          if (maxIndex > 0) {
            var newBox = this.node.getChildByName("newBox_" + (maxIndex - 1));
            tween(newBox).to(0.25, {
              scale: v3(1.2, 1.2, 1)
            }).start();
          } else {
            var arrName = ["Node_frame", "Node_box", "Node_frame_f"];
            for (var _i3 = 0, _arrName2 = arrName; _i3 < _arrName2.length; _i3++) {
              var name = _arrName2[_i3];
              var childNode = this.node.getChildByName(name);
              if (childNode) {
                tween(childNode).to(0.25, {
                  scale: v3(1.2, 1.2, 1)
                }).start();
              }
            }
          }
        };
        _proto.doWildClear = function doWildClear(symbolIndex) {
          var _this17 = this;
          return new Promise(function (resolve, reject) {
            if (_this17.itemInfo.remove) {
              if (_this17._spineEffect_kuang) {
                _this17._spineEffect_kuang.setCompleteListener(function () {
                  _this17._spineEffect_kuang.setCompleteListener(null);
                  _this17._spineEffect_kuang.node.destroyFromParent();
                  _this17._spineEffect_kuang = null;
                  _this17.node.getComponent(UITransform).priority = eZindex.icon_wild;
                  if (_this17.itemInfo.num == eSymbol.WILD) {
                    _this17.node.getComponent(UIOpacity).opacity = 0;
                  } else {
                    _this17.itemInfo.num--;
                    var _maxIndex = _this17.itemInfo.num - eSymbol.WILD;
                    if (_maxIndex == 0) {
                      _this17.setSymbolIcon(_this17.Node_symbol, eSymbol.WILD);
                    } else {
                      var newBox = _this17.node.getChildByName("newBox_" + (_maxIndex - 1));
                      if (newBox) {
                        var Node_symbol = newBox.getChildByName("Node_symbol");
                        _this17.setSymbolIcon(Node_symbol, _this17.itemInfo.num);
                      }
                    }
                  }
                  resolve();
                });
              } else {
                resolve();
                return;
              }
              var maxIndex = symbolIndex - eSymbol.WILD;
              if (maxIndex > 0) {
                var newBox = _this17.node.getChildByName("newBox_" + (maxIndex - 1));
                if (newBox) {
                  tween(newBox).to(0.25, {
                    scale: v3(0.25, 0.25, 0.25)
                  }).destroySelf().start();
                  tween(newBox.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).start();
                } else {
                  gts.Debug.LogWarr("=====newBox==null=============");
                }
                maxIndex--;
                if (maxIndex == 0) {
                  tween(_this17.Node_box).to(0.1, {
                    eulerAngles: v3(0, 0, 0)
                  }).start();
                } else {
                  var disAngle = 12;
                  var startAngle = maxIndex == 1 ? disAngle / 2 : disAngle;
                  for (var i = 0; i < maxIndex; i++) {
                    var toEulerAngles = startAngle - (i + 1) * disAngle;
                    var nnewBox = _this17.node.getChildByName("newBox_" + i);
                    if (nnewBox) {
                      tween(nnewBox).to(0.1, {
                        eulerAngles: v3(0, 0, toEulerAngles / 4)
                      }).start();
                    } else {
                      gts.Debug.LogWarr("====nnnnnnnnewBox==null=============");
                    }
                  }
                }
              } else {
                var arrName = ["Node_frame", "Node_box", "Node_frame_f"];
                for (var _i4 = 0, _arrName3 = arrName; _i4 < _arrName3.length; _i4++) {
                  var name = _arrName3[_i4];
                  var childNode = _this17.node.getChildByName(name);
                  if (childNode) {
                    tween(childNode).to(0.25, {
                      scale: v3(0.25, 0.25, 0.25)
                    })
                    // .delay(0.1)
                    // .call(() => {
                    //     if (!this.isClear) {
                    //         this.isClear = true;
                    //     }
                    // })
                    .start();
                    tween(childNode.getComponent(UIOpacity)).to(0.25, {
                      opacity: 0
                    }).start();
                  }
                }
                _this17.scheduleOnce(function () {
                  _this17.isClear = true;
                }, 0.25);
              }
              // }
            } else {
              resolve();
            }
          });
        };
        return Coaster_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Coaster_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CoasterModel.ts', './CoasterDef.ts', './CoasterUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, instantiate, UIOpacity, Component, CoasterModel, eRunStatus, CoasterUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8be2eFvA4RKubVQ+eciUpEA", "Coaster_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Coaster_winTip = exports('default', (_dec = ccclass("CoasterWinTip"), _dec2 = menu("game/CoasterGame/Coaster_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Coaster_winTip, _Component);
        function Coaster_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Coaster_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          var Node_title = this.node.getChildByName("Node_title").getComponent(Sprite);
          Node_title.spriteFrame = this.arrSpriteFrame[0];
        };
        _proto.onDisable = function onDisable() {
          this.Label_win.string = "";
          Tween.stopAllByTarget(this.node);
        }
        //    // update (dt) {}
        ;

        _proto.doShowRate = function doShowRate(gold) {
          var _this2 = this;
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
          tween(this.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this2.Label_win.string = CoasterUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.doShow = function doShow(gold, state) {
          if (state === void 0) {
            state = 0;
          }
          var Node_title = this.node.getChildByName("Node_title");
          switch (state) {
            case 0:
              {
                Node_title.active = false;
                this.Label_win.string = "" + CoasterUtils.instance.numberFormatNf(gold, 2.0);
                break;
              }
            case 1:
              {
                Node_title.active = true;
                Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
                this.Label_win.string = "" + CoasterUtils.instance.numberFormatNf(gold, 2.0);
                var newNode = instantiate(this.node);
                this.node.parent.addChild(newNode);
                newNode.getComponent(UIOpacity).opacity = 100;
                tween(newNode).to(0.75, {
                  scale: v3(1.5, 1.5, 1.5)
                }).destroySelf().start();
                tween(newNode.getComponent(UIOpacity)).to(0.75, {
                  opacity: 0
                }).start();
                this.node.scale = v3(1.2, 1.2, 1);
                tween(this.node).to(0.5, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                break;
              }
            case 2:
              {
                Node_title.active = true;
                Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[1];
                CoasterUtils.instance.updateLabelAddNf(this.Label_win, gold, true, 0);
                // this.Label_win.string = `${CoasterUtils.instance.numberFormatNf(gold, 2.0)}`;

                if (CoasterModel.instance.freeStatus != eRunStatus.NONE) {
                  var _newNode = instantiate(this.node);
                  this.node.parent.addChild(_newNode);
                  _newNode.getComponent(UIOpacity).opacity = 100;
                  tween(_newNode).to(0.75, {
                    scale: v3(1.5, 1.5, 1.5)
                  }).destroySelf().start();
                  tween(_newNode.getComponent(UIOpacity)).to(0.75, {
                    opacity: 0
                  }).start();
                }
                this.node.scale = v3(1.2, 1.2, 1);
                tween(this.node).to(0.5, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                break;
              }
          }
        };
        return Coaster_winTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoasterCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './CoasterModel.ts', './I18n.ts', './ViewManager.ts', './CoasterDef.ts', './CoasterUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, CoasterModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, CoasterUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      UserKey = module.UserKey;
      DataManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "68ddcntsOVE5K4tSVaJtPRO", "CoasterCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var CoasterCtrl = exports('CoasterCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(CoasterCtrl, _GameDef$BaseCtrl);
        function CoasterCtrl() {
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
          _this._model = CoasterModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = CoasterCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete CoasterCtrl._instance;
          CoasterCtrl._instance = null;
          CoasterModel.destroy();
          CoasterUtils.destroy();
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
        _proto.reqBet = function reqBet(buyFree) {
          if (buyFree === void 0) {
            buyFree = null;
          }
          if (!CoasterModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            CoasterModel.instance.curTotalBet = CoasterModel.instance.curBet * 1000 * 75;
            NetManager.instance.sendOnlineData(eProto.HD_BuyFree, {
              betAmount: "" + CoasterModel.instance.curBet * 1000
            });
          } else {
            CoasterModel.instance.curTotalBet = CoasterModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + CoasterModel.instance.curBet * 1000
            });
          }

          // this.onRecvData(this.getResult());
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotWildCoaster"
          });
        }

        /**
         *搏一搏
         * @param type string "count" && "times"
         */;
        _proto.reqBoYiBo = function reqBoYiBo(type) {
          CoasterModel.instance.boType = type;
          NetManager.instance.sendOnlineData(eProto.HD_BoYiBo, {
            betAmount: CoasterModel.instance.curBet * 1000,
            boType: type
          });
        }

        /**请求历史记录 */;
        _proto.reqHistory = function reqHistory(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "slotWildCoaster"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(CoasterDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: CoasterModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotWildCoaster"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotWildCoaster",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotWildCoaster"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotWildCoaster",
            content: strContent,
            msgId: msgid
          });
        }
        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), !CoasterUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == CoasterDef.eProto.HD_Enter || (data.Code == 402 && CoasterModel.instance.gameState.GameNo != CoasterModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(CoasterDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();

                // if (CoasterModel.instance.gameStatus != CoasterDef.eRunStatus.NONE) {
                //     return;
                // }
                CoasterModel.instance.clearGameData();
                CoasterModel.instance.gameInfo = data.Data;

                // //test
                // CoasterModel.instance.gameInfo = JSON.parse(JSON.stringify(CoasterModel.instance.HD_info.Data));

                CoasterModel.instance.curBet = Math.round(CoasterModel.instance.gameInfo.betAmount / 1000);
                CoasterModel.instance.totalFreeWin = CoasterModel.instance.gameInfo.freeInfo.totalFreePrizeAmount;
                CoasterModel.instance.totalFreeTimesBack = CoasterModel.instance.gameInfo.freeInfo.totalFreePrizeCount;
                CoasterModel.instance.totalFreeTimes = CoasterModel.instance.gameInfo.freeInfo.surplusFreeCount;
                CoasterModel.instance.totalRate = CoasterModel.instance.totalFreeTimes > 0 ? CoasterModel.instance.gameInfo.freeInfo.odds : 1;
                var lastResult = CoasterModel.instance.gameInfo.OpenNums[CoasterModel.instance.gameInfo.OpenNums.length - 1];
                CoasterModel.instance.arrColWild = CoasterUtils.instance.checkColWild(lastResult);
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_BuyFree:
            case eProto.HD_Bet:
              {
                CoasterModel.instance.betResult = data.Data;

                // test
                // CoasterModel.instance.betResult = JSON.parse(JSON.stringify(CoasterModel.instance.onRecvData.Data));

                this.isReqBet = false;

                //判断是否有2个胡
                CoasterModel.instance.specialStartCol = -1;
                CoasterModel.instance.curSpecialStartCol = -1;
                if (!CoasterModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = JSON.parse(JSON.stringify(CoasterModel.instance.betResult.OpenNums[0]));
                    for (var iCol = 1; iCol < 5; iCol++) {
                      openResult.openNum[iCol].push(openResult.openNum[6][iCol - 1]);
                      openResult.openNum[iCol].push(openResult.openNum[7][iCol - 1]);
                    }
                    var iHuCounts = 0;
                    for (var _iCol = 0; _iCol < openResult.openNum.length - 3; _iCol++) {
                      var AllPosMsg = openResult.openNum[_iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.num == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 2) {
                            CoasterModel.instance.specialStartCol = _iCol;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  // CoasterModel.instance.specialStartCol = 4;

                  gts.Debug.LogWarr("==CoasterModel.instance.specialStartCol==" + CoasterModel.instance.specialStartCol);
                }

                // CoasterModel.instance.specialStartCol = 2;
                //freeTest;
                // CoasterModel.instance.totalFreeTimes = 0;

                CoasterModel.instance.totalFreeTimesBack = CoasterModel.instance.betResult.freeInfo.totalFreePrizeCount;
                if (CoasterModel.instance.totalFreeTimes > 0) {
                  if (CoasterModel.instance.totalFreeTimes == CoasterModel.instance.totalFreeTimesBack) {
                    CoasterModel.instance.isFirstFree = true;
                  } else {
                    CoasterModel.instance.isFirstFree = false;
                  }
                  CoasterModel.instance.totalFreeTimes--;
                } else {
                  CoasterModel.instance.isFirstFree = true;
                  CoasterModel.instance.totalFreeTimes = CoasterModel.instance.betResult.freeInfo.surplusFreeCount;
                  CoasterModel.instance.totalRate = CoasterModel.instance.betResult.freeInfo.odds;
                  //specialStartCol test
                  // CoasterModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);
                }

                gts.Debug.LogWarr("==CoasterModel.instance.totalFreeTimes==" + CoasterModel.instance.totalFreeTimes);
                if (CoasterModel.instance.freeStatus == eRunStatus.NONE) {
                  CoasterModel.instance.curBalance -= CoasterModel.instance.curTotalBet;
                }
                break;
              }
            case eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==Coaster=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (CoasterModel.instance.curBalance > 0) {
                  CoasterModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                CoasterModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Coaster=pushWallet==" + _HD_Wallet.VndBalance);
                if (CoasterModel.instance.curBalance > 0) {
                  CoasterModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                CoasterModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        _proto.getResult = function getResult() {
          var data = {
            Action: "HD_Bet",
            Code: 0,
            Data: {
              FreeCount: 0,
              Res: []
            },
            ErrMsg: "Success",
            GameType: "slotWildCoaster",
            cmd: "slotWildCoaster/HD_Bet"
          };
          var Res = data.Data.Res;
          var newResult = this.getRandReuslt();
          Res.push(newResult);
          while (newResult.prizeAmount > 0) {
            newResult = this.getRandReuslt(newResult);
            Res.push(newResult);
          }

          // gts.Debug.LogWarr("==onRecvData=getResult=" + JSON.stringify(data));

          return data;
        };
        _proto.getRandReuslt = function getRandReuslt(oldResult) {
          if (oldResult === void 0) {
            oldResult = null;
          }
          var openResult = {
            openNum: [],
            prizeAmount: 0,
            odds: 0
          };
          if (oldResult == null) {
            var ExtraPos = this.getRandSymbol(4);
            for (var i = 0; i < 6; i++) {
              var AllPosMsg = this.getRandSymbol(5, i == 0);
              if (i > 0 && i < 5) {
                AllPosMsg.push(ExtraPos[i - 1]);
              }
              openResult.openNum.push(AllPosMsg);
            }
          }
          var mapAllPosMsg = openResult.openNum;
          var RewardPos = [];
          var firstCol = mapAllPosMsg[0];
          var getRewardPos = function getRewardPos(symbol, col, arrPos) {
            var allPosMsg = mapAllPosMsg[col];
            for (var iRow = 0; iRow < allPosMsg.length; iRow++) {
              var symbolInfo = allPosMsg[iRow];
              if (symbolInfo.num == eSymbol.WILD || symbolInfo.num == symbol) {
                symbolInfo.remove = true;
                var arrTemp = arrPos.slice();
                arrTemp.push(iRow);
                if (col + 1 < mapAllPosMsg.length) {
                  getRewardPos(symbol, col + 1, arrTemp);
                } else if (arrTemp.length > 2) {
                  RewardPos.push(arrTemp);
                }
              }
            }
            if (arrPos.length > 2) {
              RewardPos.push(arrPos);
            }
          };
          for (var iRow = 0; iRow < firstCol.length; iRow++) {
            getRewardPos(firstCol[iRow].num, 1, [iRow]);
          }
          gts.Debug.Log("===RewardPos===" + JSON.stringify(RewardPos));
          if (RewardPos.length > 0) {
            // openResult.RewardPos = RewardPos;
            openResult.prizeAmount = 1000;
          }
          return openResult;
        };
        _proto.getRandSymbol = function getRandSymbol(maxIndex, isFirst) {
          if (isFirst === void 0) {
            isFirst = false;
          }
          var _resultInfoList = [];
          var _curLength = 0;
          for (var i = 0; i < maxIndex; i++) {
            var leftLength = maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //
            var itemInfo = {
              Sym: isFirst ? Math.floor(Math.random() * (eSymbol.TEN - 2)) + 2 : Math.floor(Math.random() * eSymbol.TEN) + 1,
              Length: maxIndex == 4 ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1,
              Rim: Math.floor(Math.random() * 3),
              IsReward: false
            };
            if (itemInfo.Sym == eSymbol.WILD) {
              itemInfo.Rim = 0;
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
          }
          return _resultInfoList;
        };
        return CoasterCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoasterDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25fe9As5I9Osau3e/tJvCrb", "CoasterDef", undefined);
      var cBundle = exports('cBundle', "CoasterGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotWildCoaster/HD_info";
        eProto["HD_Bet"] = "slotWildCoaster/HD_Bet";
        eProto["HD_BuyFree"] = "slotWildCoaster/HD_BuyFree";
        eProto["HD_Leave"] = "slotWildCoaster/HD_Leave";
        eProto["HD_BoYiBo"] = "slotWildCoaster/HD_BoYiBo";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({})); //betAmount 金额
      // boType 博类型 string
      // if boType != "count" && boType != "times" {
      // return errCode.ErrParams.GetI18nMap(), nil
      // }
      // info := struct {
      //     Win bool json:"win"
      //     }{
      //     Win: win,
      //     }
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
      var eZindex = exports('eZindex', {
        NONE: 0,
        icon: 1,
        icon_cat: 250,
        icon_scatter: 500,
        icon_wild: 500,
        MASK: 1000,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        CMaxCol: 8,
        cSpecialDuration: 1.5,
        cStartDelay: 0.2,
        cQuickStopStartDelay: 0,
        cQuickStopDelay: 0.1,
        cStopDelay: 0.75,
        cSymbolW: 123,
        cSymbolH: 100,
        cSymbolStartX: -246,
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
        RollerCoaster: 1,
        FerrisWheel: 2,
        Tent: 3,
        Store: 4,
        HotGog: 5,
        Drink: 6,
        A: 7,
        K: 8,
        Q: 9,
        J: 10,
        TEN: 11,
        SCATTER: 12,
        WILD: 13,
        WILD2: 14,
        WILD3: 15
      });
      var cBaseScore = exports('cBaseScore', [0.1, 1, 5]);
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onSetMask"] = "onSetMask";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onCatNumMove"] = "onCatNumMove";
        eEvent["onCatNumAdd"] = "onCatNumAdd";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm_mg",
        bgFree: "sound/bgm_fs",
        bigWin: "sound/bgm_bigwin_main",
        bigWinEnd: "sound/bgm_bigwin_end",
        freeEndMain: "sound/bgm_totalwin_main",
        freeEnd: "sound/bgm_totalwin_end",
        fastspinStart: "sound/fastspinStart",
        fastspinStop: "sound/fastspinStop",
        featureBuyBtn: "sound/featureBuyBtn",
        featureBuyStart: "sound/featureBuyStart",
        featureBuyCancel: "sound/featureBuyCancel",
        featureBuyHover: "sound/featureBuyHover",
        fsTrans: "sound/fsTrans",
        fsWonRemainingIncrease: "sound/fsWonRemainingIncrease",
        fsWonTitle: "sound/fsWonTitle",
        heartbeat: "sound/heartbeat",
        heartbeatNoise: "sound/heartbeatNoise",
        heartbeatSlowdrop: "sound/heartbeatSlowdrop",
        multiFly: "sound/multiFly",
        multiUp: "sound/multiUp",
        prizeInfobarTotalwinMedEnd: "sound/prizeInfobarTotalwinMedEnd",
        prizeInfobarTotalwinMedMain: "sound/prizeInfobarTotalwinMedMain",
        prizeSmallwin: "sound/prizeSmallwin",
        scatterWinHighlight: "sound/scatterWinHighlight",
        spinActiveLoop: "sound/spinActiveLoop",
        spinBtn: "sound/spinBtn",
        spinStopCoaster: "sound/spinStopCoaster",
        spinStopQuick: "sound/spinStopQuick",
        symScatter: "sound/symScatter",
        symShrink: "sound/symShrink",
        symWildExpand: "sound/symWildExpand",
        symWildSpawn: "sound/symWildSpawn",
        uiStart: "sound/uiStart"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoasterGame", ['./CoasterCtrl.ts', './CoasterDef.ts', './CoasterModel.ts', './CoasterScene.ts', './CoasterUtils.ts', './CoasterGameView.ts', './Coaster_ScrollView.ts', './Coaster_btnEffect.ts', './Coaster_buyReward.ts', './Coaster_helpTip.ts', './Coaster_history.ts', './Coaster_historyItem.ts', './Coaster_rank.ts', './Coaster_rankItem.ts', './Coaster_setAuto.ts', './Coaster_setBase.ts', './Coaster_shake.ts', './Coaster_symbol.ts', './Coaster_symbolEffectRoot.ts', './Coaster_symbolInfo.ts', './Coaster_symbolItem.ts', './Coaster_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CoasterGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './CoasterDef.ts', './CoasterModel.ts', './CoasterCtrl.ts', './ViewManager.ts', './CoasterUtils.ts', './Coaster_winTip.ts', './Coaster_symbol.ts', './I18n.ts', './Coaster_symbolInfo.ts', './Common.ts', './AudioManager.ts', './Coaster_btnEffect.ts', './Coaster_helpTip.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Button, Label, sp, SpriteFrame, Sprite, view, tween, v3, UIOpacity, UITransform, instantiate, color, find, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, cBaseScore, eZindex, eSound, eConstDef, eProto, CoasterModel, CoasterCtrl, ViewManager, CoasterUtils, Coaster_winTip, Coaster_symbol, i18n, Coaster_symbolInfo, Common, AudioManager, Coaster_btnEffect, Coaster_helpTip;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      color = module.color;
      find = module.find;
      Tween = module.Tween;
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
      cBaseScore = module.cBaseScore;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      CoasterModel = module.CoasterModel;
    }, function (module) {
      CoasterCtrl = module.CoasterCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Coaster_winTip = module.default;
    }, function (module) {
      Coaster_symbol = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Coaster_symbolInfo = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      Coaster_btnEffect = module.default;
    }, function (module) {
      Coaster_helpTip = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44;
      cclegacy._RF.push({}, "39ec8wIzrRE/pa1ViaXmeqz", "CoasterGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var CoasterGameView = exports('default', (_dec = ccclass("CoasterGameView"), _dec2 = menu("game/CoasterGame/CoasterGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Coaster_symbol), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Button), _dec19 = property(sp.Skeleton), _dec20 = property(sp.Skeleton), _dec21 = property(Button), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(SpriteFrame), _dec32 = property(SpriteFrame), _dec33 = property(SpriteFrame), _dec34 = property(SpriteFrame), _dec35 = property(SpriteFrame), _dec36 = property(SpriteFrame), _dec37 = property(SpriteFrame), _dec38 = property(Sprite), _dec39 = property(Sprite), _dec40 = property(Node), _dec41 = property(Coaster_symbolInfo), _dec42 = property(Label), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(CoasterGameView, _GameDef$BaseView);
        function CoasterGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_7", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_8", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Coaster_symbolList", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_buy", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_way", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bglight", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "xn_light", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curRate", _descriptor26, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrRoomSpFrame", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCenterSpFrame", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrFishSpFrame", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTipBgSpFrame", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDownSpFrame", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_roomBg", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWinBig", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_wait_root", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_wait", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeInfo", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addFreeMask", _descriptor44, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.isInit = false;
          _this.cmaskOpacity = 100;
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = CoasterGameView.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CoasterCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!CoasterUtils.instance.isChangeOrientation()) {
            var viewSize = view.getFrameSize();
            if (viewSize.width / viewSize.height > 750 / 1334) {
              this.Node_action.setPosition(this.Node_action.position.x, this.Node_action.position.y + 15);
              this.Node_menu.setPosition(this.Node_menu.position.x, this.Node_menu.position.y + 15);
              this.Button_menu.node.setPosition(this.Button_menu.node.position.x, this.Button_menu.node.position.y + 15);
              this.Button_run.node.setPosition(this.Button_run.node.position.x, this.Button_run.node.position.y + 15);
            }
          }
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              CoasterModel.instance.autoTimes = times;
              CoasterModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(Coaster_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (CoasterModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  CoasterCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !CoasterModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = CoasterModel.instance.isAuto;
            CoasterUtils.instance.updateLabel(_this2.Label_autoTimes, CoasterModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            CoasterModel.instance.autoTimes = 0;
            CoasterModel.instance.isAuto = false;
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(Coaster_btnEffect);
            btnRunEffect.switchAni();

            //                // CoasterUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            CoasterUtils.instance.updateLabel(_this2.Label_autoTimes, CoasterModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          CoasterModel.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        };
        _proto.start = function start() {};
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
              if (CoasterModel.instance.isAuto && CoasterCtrl.instance.isReqBet) {
                CoasterCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          CoasterModel.instance.curBet = cBaseScore[CoasterModel.instance._curIndex_baseScore] * (CoasterModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          this.Button_redus.interactable = CoasterModel.instance.curBet > 2;
          this.Button_add.interactable = CoasterModel.instance.curBet < 1000;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          CoasterCtrl.instance.reqEnterRoom();
          this.Button_run.interactable = false;
          CoasterUtils.instance.loadRes_icon(function () {
            _this4.isInit = true;
            _this4.updateViewInfo();
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_7.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_8.getComponent(UITransform).priority = eZindex.MASK;
          });
          CoasterModel.instance.curBet = 2.0;
          this.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_fast":
              {
                //                //快速停止
                CoasterModel.instance.isQuickStop = !CoasterModel.instance.isQuickStop;
                //                // CoasterUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !CoasterModel.instance.isQuickStop);

                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!CoasterModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_auto":
              {
                if (!CoasterModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", CoasterUtils.instance.bundle, function () {}, function (prefab) {
                    var newNode = instantiate(prefab);
                    Common.transformSize(newNode);
                    ViewManager.instance.popNodeView(newNode, true);
                  }, true);
                } else {
                  this.Button_auto.interactable = true;
                }
                break;
              }
            case "Node_bigWinEffect":
              {
                this.isStopBigWin = true;
                break;
              }
            case "Button_buy":
              {
                if (CoasterModel.instance.gameStatus != eRunStatus.NONE || CoasterModel.instance.isAuto) {
                  return;
                }
                var buyGold = CoasterModel.instance.curBet * 50 * 1000;
                if (CoasterModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !CoasterUtils.instance.isChangeOrientation());
                  return;
                }
                CoasterUtils.instance.playOneShot(eSound.featureBuyBtn);
                Common.loadPopBuddle("prefab/Node_buyReward", CoasterUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  Common.transformSize(newNode);
                  ViewManager.instance.popNodeView(newNode, true);
                }, true);
                break;
              }
            //            //返回
            case "Button_menu":
              {
                this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                CoasterCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", CoasterUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", CoasterUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", CoasterUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (CoasterModel.instance.gameStatus != eRunStatus.NONE || CoasterModel.instance.isAuto) {
                  return;
                }
                CoasterModel.instance._curIndex_baseBet--;
                if (CoasterModel.instance._curIndex_baseBet < 0) {
                  CoasterModel.instance._curIndex_baseBet = 0;
                }
                CoasterModel.instance._curIndex_baseScore = Math.floor(CoasterModel.instance._curIndex_baseBet / 10);
                CoasterModel.instance._curIndex_baseRate = CoasterModel.instance._curIndex_baseBet % 10;
                CoasterModel.instance.curBet = cBaseScore[CoasterModel.instance._curIndex_baseScore] * (CoasterModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                this.Button_redus.interactable = CoasterModel.instance.curBet > 2;
                this.Button_add.interactable = CoasterModel.instance.curBet < 1000;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                break;
              }
            case "Button_add":
              {
                if (CoasterModel.instance.gameStatus != eRunStatus.NONE || CoasterModel.instance.isAuto) {
                  return;
                }
                CoasterModel.instance._curIndex_baseBet++;
                if (CoasterModel.instance._curIndex_baseBet > 29) {
                  CoasterModel.instance._curIndex_baseBet = 29;
                }
                CoasterModel.instance._curIndex_baseScore = Math.floor(CoasterModel.instance._curIndex_baseBet / 10);
                CoasterModel.instance._curIndex_baseRate = CoasterModel.instance._curIndex_baseBet % 10;
                CoasterModel.instance.curBet = cBaseScore[CoasterModel.instance._curIndex_baseScore] * (CoasterModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                this.Button_redus.interactable = CoasterModel.instance.curBet > 2;
                this.Button_add.interactable = CoasterModel.instance.curBet < 1000;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                break;
              }
            case "Button_run":
              {
                if (CoasterModel.instance.isAuto) {
                  CoasterModel.instance.isAuto = false;
                  CoasterModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = CoasterModel.instance.isAuto;
                  CoasterUtils.instance.updateLabel(this.Label_autoTimes, CoasterModel.instance.autoTimes);
                  if (CoasterModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Button_auto.interactable = false;
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(Coaster_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (CoasterCtrl.instance.isReqBet) {
                  break;
                }
                if (CoasterModel.instance.gameStatus == eRunStatus.NONE) {
                  var betGold = CoasterModel.instance.curBet * 1000;
                  if (CoasterModel.instance.curBalance < betGold) {
                    Common.showTip(i18n.lang[10001], !CoasterUtils.instance.isChangeOrientation());
                    return;
                  }
                  this.Skeleton_run.setAnimation(0, "spin", false);
                  this.Skeleton_run.addAnimation(0, "idle", true);
                  CoasterCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (CoasterModel.instance.totalFreeTimes > 0 || CoasterModel.instance.freeStatus != eRunStatus.NONE || CoasterModel.instance.gameStatus != eRunStatus.NONE || CoasterModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", CoasterUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  Common.transformSize(setBase);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }
            case "Button_start":
              {
                CoasterUtils.instance.playOneShot(eSound.uiStart);
                this.doEnterFree();
                break;
              }
            case "Button_exit":
              {
                this.hideFree();
              }
          }
        };
        _proto.onSetMask = function onSetMask(iCol, posX) {
          if (iCol == 0) {
            return;
          }
          gts.Debug.Log("==onSetMask=posX=" + posX);
          var setCol = iCol + 1;
          if (setCol < this.Coaster_symbolList.length - 2) {
            if (!this.Node_colEffect.active) {
              this.Node_colEffect.active = true;
              this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              this.Node_mask_1_6.active = true;
              this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
                opacity: this.cmaskOpacity
              }).start();
              this.Node_mask_7.active = true;
              this.Node_mask_7.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_7.getComponent(UIOpacity)).to(0.2, {
                opacity: this.cmaskOpacity
              }).start();
              this.Node_mask_8.active = true;
              this.Node_mask_8.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_8.getComponent(UIOpacity)).to(0.2, {
                opacity: this.cmaskOpacity
              }).start();

              // this.Node_tipEffect.setAnimation(0, "scatter_quick", true);

              CoasterUtils.instance.playSound(eSound.fastspinStart, true);
              var helpTip = this.Node_helpTip.getComponent(Coaster_helpTip);
              helpTip.doShow(1);
            }
            CoasterModel.instance.curSpecialStartCol = setCol;
            this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL - 2 * (setCol - 1);
            this.Node_colEffect.setPosition(this.Coaster_symbolList[setCol].node.getPosition().x, this.Node_colEffect.position.y);
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            if (this.Node_mask_7.active) {
              tween(this.Node_mask_7.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_7.active = false;
              }).start();
            }
            if (this.Node_mask_8.active) {
              tween(this.Node_mask_8.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_8.active = false;
              }).start();
            }
            if (this.Node_mask_1_6.active) {
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_1_6.active = false;
              }).start();
            }
            return;
          }
          //        //mask show
          if (!this.Node_mask_7.active) {
            this.Node_mask_7.active = true;
            this.Node_mask_7.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_7.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: this.cmaskOpacity
            }).start();
          }
          if (!this.Node_mask_8.active) {
            this.Node_mask_8.active = true;
            this.Node_mask_8.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_8.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: this.cmaskOpacity
            }).start();
          }
          if (!this.Node_mask_1_6.active) {
            this.Node_mask_1_6.active = true;
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: this.cmaskOpacity
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this7 = this;
          if (CoasterModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }

          // if (CoasterModel.instance.freeStatus == CoasterDef.eRunStatus.NONE) {
          //     // this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0]; //
          //     // this.Node_helpTip.getComponent(UITransform).width = 624;
          //     // this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_ELLIPSE;
          // }

          this.Button_auto.interactable = false;
          this.Button_add.interactable = false;
          this.Button_redus.interactable = false;
          this.Button_menu.interactable = false;
          this.Node_info.node.active = false;
          this.Label_way.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.Button_buy.interactable = false;
          this.Button_buy.getComponent(UIOpacity).opacity = this.Button_buy.interactable ? 255 : 100;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
          this.Button_menu.node.getComponent(UIOpacity).opacity = this.Button_menu.interactable ? 255 : 100;
          this.Button_auto.node.getComponent(UIOpacity).opacity = this.Button_auto.interactable ? 255 : 100;
          this.Node_tipEffect.setAnimation(0, "normal_p", true);
          // this.Node_tipEffect.node.active = false;
          // let Node_effect = this.Node_tipEffect.node.getChildByName("Node_effect");
          // Node_effect.active = false;
          CoasterModel.instance.curTotalWin = 0;
          if (CoasterModel.instance.freeStatus == eRunStatus.NONE) {
            this.setRateState();
            this.Label_win.string = "0.00";
            EventManager.instance.emit(eEvent.updateWin, 0);
          } else {
            this.setRateState(true, CoasterModel.instance.totalRate);
          }
          this.Label_gold.color = color(255, 255, 255, 255);
          this.Label_bet.color = color(255, 255, 255, 255);
          this.Label_win.color = color(255, 255, 255, 255);
          this.Node_effectRoot.removeAllChildren();
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay, stopDelayBack;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (i = 0; i < _this7.Coaster_symbolList.length; i++) {
                    startDelay = CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelayBack = stopDelay;
                    stopDelay += CoasterModel.instance.specialStartCol > 0 && i > CoasterModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - CoasterModel.instance.specialStartCol) : 0;
                    arrPro.push(_this7.Coaster_symbolList[i].doStart(startDelay, stopDelay, stopDelayBack));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _this7.scheduleOnce(_this7.doRunEnd, 0);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          CoasterModel.instance.gameStatus = eRunStatus.RUNNING;
          if (!CoasterModel.instance.isAuto && this.Skeleton_run.animation != "start") {
            this.Skeleton_run.setAnimation(0, "start", false);
            this.Skeleton_run.addAnimation(0, "idle", true);
          }
          if (CoasterModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Label_freeTimes = this.Node_freeInfo.getChildByName("Label_freeTimes");
            if (CoasterModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + CoasterModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = this.Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            CoasterUtils.instance.playOneShot(eSound.spinBtn);
            CoasterModel.instance.autoTimes--;
            CoasterUtils.instance.updateLabel(this.Label_autoTimes, CoasterModel.instance.autoTimes);
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            _this8.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.setWays = function setWays(result) {
          var symRate = 1;
          for (var i = 0; i < result.openNum.length - 2; i++) {
            symRate *= i > 0 && i < 5 ? result.openNum[i].length + 2 : result.openNum[i].length;
          }
          if (CoasterModel.instance.isQuickStop && CoasterModel.instance.freeStatus == eRunStatus.NONE) {
            CoasterUtils.instance.playOneShot(eSound.spinStopQuick);
            this.Label_way.string = "" + symRate;
          } else {
            CoasterUtils.instance.updateLabelNomal(this.Label_way, symRate, false, 0.05);
          }
        };
        _proto.setTipEffect = function setTipEffect(winRate, isTotal) {
          if (isTotal === void 0) {
            isTotal = false;
          }
          if (winRate < 5) {
            this.Node_tipEffect.setAnimation(0, "normal_win", false);
            this.Node_tipEffect.addAnimation(0, "normal_p", true);
            CoasterUtils.instance.playOneShot(eSound.prizeSmallwin);
          } else if (winRate < 60) {
            this.Node_tipEffect.setAnimation(0, "bigwin_win", false);
            this.Node_tipEffect.addAnimation(0, "bigwin_p", true);
            if (isTotal && winRate < 20) {
              CoasterUtils.instance.playSound(eSound.prizeInfobarTotalwinMedMain, false, function () {
                CoasterUtils.instance.playOneShot(eSound.prizeInfobarTotalwinMedEnd);
              });
            }
          } else {
            this.Node_tipEffect.setAnimation(0, "bigwin2_win", false);
            this.Node_tipEffect.addAnimation(0, "bigwin2_p", true);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this9 = this;
            var resultList, _loop, i, delayStart, disTimes, free_add, Label_addNum, free_light, addNums, Label_freeTimes, btnRunEffect, com_Coaster_winTip, winRate, pos, helpTip, arrPro, _i, _iterator, _step, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  this.isStopBigWin = false;
                  CoasterModel.instance.gameStatus = eRunStatus.CLEAR;
                  if (!CoasterModel.instance.isAuto) {
                    this.Button_run.interactable = false;

                    // CoasterUtils.instance.playOneShot(CoasterDef.eSound.spinStop);
                    this.Skeleton_run.setAnimation(0, "stop", true);
                  }
                  if (this.Node_colEffect.active) {
                    CoasterUtils.instance.stopSound(eSound.fastspinStart);
                    CoasterUtils.instance.playOneShot(eSound.fastspinStop);
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this9.Node_colEffect.active = false;
                      _this9.Node_tipEffect.setAnimation(0, "normal_p", true);
                      if (CoasterModel.instance.totalFreeTimes == 0) {
                        var helpTip = _this9.Node_helpTip.getComponent(Coaster_helpTip);
                        helpTip.doShow();
                      }
                    }).start();
                  }
                  CoasterModel.instance.specialStartCol = 0;
                  CoasterModel.instance.curTotalWin = 0;
                  resultList = CoasterModel.instance.betResult.OpenNums;
                  this.setWays(resultList[0]);
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, _arrPro, _iterator2, _step2, iCol, symbolList, iRow, _symbol, resultNext, _com_Coaster_winTip, _winRate, _com_Coaster_winTip2, _arrPro2, _i2, curTotalWin, _i3, dropDelay, _loop2, _i4, _i5, _helpTip, _i6, Coaster_symbolList, _iterator3, _step3, _symbol2, _i7, _i8, _Coaster_symbolList, _iterator4, _step4, symbolItem, _i9;
                    return _regeneratorRuntime().wrap(function _loop$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          result = resultList[i]; //转动结束或者消除掉落后检测是否有整列wild 有则打开
                          CoasterModel.instance.arrColWild = CoasterUtils.instance.checkColWild(result);
                          if (!(CoasterModel.instance.arrColWild.length > 0)) {
                            _context4.next = 8;
                            break;
                          }
                          CoasterUtils.instance.playOneShot(eSound.symWildExpand);
                          _arrPro = [];
                          for (_iterator2 = _createForOfIteratorHelperLoose(CoasterModel.instance.arrColWild); !(_step2 = _iterator2()).done;) {
                            iCol = _step2.value;
                            symbolList = _this9.Coaster_symbolList[iCol];
                            for (iRow = 0; iRow < symbolList.symbolList.length; iRow++) {
                              _symbol = symbolList.symbolList[iRow];
                              _symbol.itemInfo.num = result.openNum[iCol][iRow].num;
                              _symbol.itemInfo.remove = result.openNum[iCol][iRow].remove;
                              _symbol.itemInfo.count = result.openNum[iCol][iRow].count;
                              _arrPro.push(_symbol.doWildOpen(_symbol.itemInfo.num));
                            }
                          }
                          _context4.next = 8;
                          return Promise.all(_arrPro);
                        case 8:
                          if (!(result.prizeAmount > 0)) {
                            _context4.next = 77;
                            break;
                          }
                          resultNext = resultList[i + 1]; //                //
                          // CoasterUtils.instance.playOneShot(CoasterDef.eSound.clear_0);
                          _this9.showMask();
                          if (result.odds > 1) {
                            _this9.Node_helpTip.active = false;
                            _this9.Node_winTip.active = true;
                            _com_Coaster_winTip = _this9.Node_winTip.getComponent(Coaster_winTip);
                            _com_Coaster_winTip.doShow(result.prizeAmount / result.odds);
                            _this9.setRateState(true, result.odds, function () {
                              var winRate = result.prizeAmount / (CoasterModel.instance.curBet * 1000);
                              _this9.setTipEffect(winRate);
                              _this9.Node_helpTip.active = false;
                              _this9.Node_winTip.active = true;
                              var com_Coaster_winTip = _this9.Node_winTip.getComponent(Coaster_winTip);
                              com_Coaster_winTip.doShow(result.prizeAmount, 1);
                            });
                          } else {
                            _winRate = result.prizeAmount / (CoasterModel.instance.curBet * 1000);
                            _this9.setTipEffect(_winRate);
                            _this9.Node_helpTip.active = false;
                            _this9.Node_winTip.active = true;
                            _com_Coaster_winTip2 = _this9.Node_winTip.getComponent(Coaster_winTip);
                            _com_Coaster_winTip2.doShow(result.prizeAmount, 1);
                          }

                          //                //doEffect
                          _arrPro2 = [];
                          for (_i2 = 0; _i2 < _this9.Coaster_symbolList.length; _i2++) {
                            _arrPro2.push(_this9.Coaster_symbolList[_i2].doEffect());
                          }
                          _context4.next = 16;
                          return Promise.all(_arrPro2);
                        case 16:
                          CoasterModel.instance.curTotalWin += result.prizeAmount;
                          if (CoasterModel.instance.freeStatus != eRunStatus.NONE) {
                            CoasterModel.instance.totalFreeWin += result.prizeAmount;
                          }
                          curTotalWin = CoasterModel.instance.freeStatus != eRunStatus.NONE ? CoasterModel.instance.totalFreeWin : CoasterModel.instance.curTotalWin; //                //gengxin
                          CoasterUtils.instance.updateLabelAddNf(_this9.Label_win, curTotalWin, false, curTotalWin - result.prizeAmount);
                          EventManager.instance.emit(eEvent.updateWin, curTotalWin);
                          _this9.showMask(false);
                          _arrPro2 = [];
                          for (_i3 = 0; _i3 < _this9.Coaster_symbolList.length; _i3++) {
                            _arrPro2.push(_this9.Coaster_symbolList[_i3].doClear());
                          }
                          _context4.next = 26;
                          return Promise.all(_arrPro2);
                        case 26:
                          dropDelay = 0;
                          if (!(CoasterUtils.instance.checkScatter(result) > 0)) {
                            _context4.next = 69;
                            break;
                          }
                          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                            var Coaster_symbol, curLenth, _iterator5, _step5, _symbol3, leftLength, _loop3, j, newScatterWait;
                            return _regeneratorRuntime().wrap(function _loop2$(_context3) {
                              while (1) switch (_context3.prev = _context3.next) {
                                case 0:
                                  Coaster_symbol = _this9.Coaster_symbolList[_i4];
                                  curLenth = 0;
                                  for (_iterator5 = _createForOfIteratorHelperLoose(Coaster_symbol.symbolList); !(_step5 = _iterator5()).done;) {
                                    _symbol3 = _step5.value;
                                    if (!_symbol3.isClear) {
                                      curLenth += _symbol3.itemInfo.count;
                                    }
                                  }
                                  if (!(curLenth < Coaster_symbol.maxIndex)) {
                                    _context3.next = 20;
                                    break;
                                  }
                                  leftLength = Coaster_symbol.maxIndex - curLenth;
                                  if (!Coaster_symbol.isHorizontal) {
                                    _context3.next = 15;
                                    break;
                                  }
                                  _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                                    var newScatterWait;
                                    return _regeneratorRuntime().wrap(function _loop3$(_context2) {
                                      while (1) switch (_context2.prev = _context2.next) {
                                        case 0:
                                          newScatterWait = _this9.scatter_wait_root.getChildByName("scatter_wait_" + (_i4 * 20 + j));
                                          if (!newScatterWait) {
                                            newScatterWait = instantiate(_this9.scatter_wait);
                                            newScatterWait.name = "scatter_wait_" + (_i4 * 20 + j);
                                            _this9.scatter_wait_root.addChild(newScatterWait);
                                          }
                                          curLenth++;
                                          Coaster_symbol.setSymbolWaitPos(newScatterWait, curLenth - 1, leftLength - j - 1, false);
                                          newScatterWait.active = true;
                                          _this9.scheduleOnce(function () {
                                            var strAni = Coaster_symbol.isHorizontal ? "L" : "lv" + leftLength;
                                            var spine = newScatterWait.getComponent(sp.Skeleton);
                                            spine.setAnimation(0, strAni, true);
                                          });
                                        case 6:
                                        case "end":
                                          return _context2.stop();
                                      }
                                    }, _loop3);
                                  });
                                  j = 0;
                                case 8:
                                  if (!(j < leftLength)) {
                                    _context3.next = 13;
                                    break;
                                  }
                                  return _context3.delegateYield(_loop3(), "t0", 10);
                                case 10:
                                  j++;
                                  _context3.next = 8;
                                  break;
                                case 13:
                                  _context3.next = 20;
                                  break;
                                case 15:
                                  newScatterWait = _this9.scatter_wait_root.getChildByName("scatter_wait_" + _i4);
                                  if (!newScatterWait) {
                                    newScatterWait = instantiate(_this9.scatter_wait);
                                    newScatterWait.name = "scatter_wait_" + _i4;
                                    _this9.scatter_wait_root.addChild(newScatterWait);
                                  }
                                  Coaster_symbol.setSymbolWaitPos(newScatterWait, curLenth, leftLength, false);
                                  newScatterWait.active = true;
                                  _this9.scheduleOnce(function () {
                                    var strAni = Coaster_symbol.isHorizontal ? "L" : "lv" + leftLength;
                                    var spine = newScatterWait.getComponent(sp.Skeleton);
                                    spine.setAnimation(0, strAni, true);
                                  });
                                case 20:
                                case "end":
                                  return _context3.stop();
                              }
                            }, _loop2);
                          });
                          _i4 = 0;
                        case 30:
                          if (!(_i4 < _this9.Coaster_symbolList.length)) {
                            _context4.next = 35;
                            break;
                          }
                          return _context4.delegateYield(_loop2(), "t0", 32);
                        case 32:
                          _i4++;
                          _context4.next = 30;
                          break;
                        case 35:
                          //drop
                          _arrPro2 = [];
                          Coaster_symbol.dropCounts = 0;
                          for (_i5 = 0; _i5 < _this9.Coaster_symbolList.length; _i5++) {
                            _arrPro2.push(_this9.Coaster_symbolList[_i5].doDropFront(resultNext, 0, true, result));
                          }
                          _context4.next = 40;
                          return Promise.all(_arrPro2);
                        case 40:
                          //
                          _this9.showMask(true);
                          _this9.Node_helpTip.active = true;
                          _this9.Node_winTip.active = false;
                          _helpTip = _this9.Node_helpTip.getComponent(Coaster_helpTip);
                          _helpTip.doShow(1);
                          CoasterUtils.instance.playSound(eSound.heartbeat, true);
                          CoasterUtils.instance.playOneShot(eSound.heartbeatNoise);
                          _arrPro2 = [];
                          for (_i6 = 0; _i6 < _this9.Coaster_symbolList.length; _i6++) {
                            Coaster_symbolList = _this9.Coaster_symbolList[_i6];
                            for (_iterator3 = _createForOfIteratorHelperLoose(Coaster_symbolList.symbolList); !(_step3 = _iterator3()).done;) {
                              _symbol2 = _step3.value;
                              if (_symbol2) {
                                _arrPro2.push(_symbol2.doScatterEffect());
                              }
                            }
                          }
                          _context4.next = 51;
                          return Promise.all(_arrPro2);
                        case 51:
                          _context4.next = 53;
                          return _this9.doAwait(1);
                        case 53:
                          _this9.showMask(false);

                          //drop
                          dropDelay = 0.3;
                          Coaster_symbol.dropCounts = 0;
                          _arrPro2 = [];
                          for (_i7 = 0; _i7 < _this9.Coaster_symbolList.length; _i7++) {
                            _arrPro2.push(_this9.Coaster_symbolList[_i7].doDropFront(resultNext, dropDelay, false, result));
                          }
                          _context4.next = 60;
                          return Promise.all(_arrPro2);
                        case 60:
                          _this9.scatter_wait_root.destroyAllChildren();
                          CoasterUtils.instance.playOneShot(eSound.heartbeatSlowdrop);
                          _context4.next = 64;
                          return _this9.doAwait(1);
                        case 64:
                          CoasterUtils.instance.stopSound(eSound.heartbeat);
                          _helpTip.doShow();
                          if (CoasterModel.instance.totalFreeTimes > 0) {
                            for (_i8 = 0; _i8 < _this9.Coaster_symbolList.length; _i8++) {
                              _Coaster_symbolList = _this9.Coaster_symbolList[_i8];
                              for (_iterator4 = _createForOfIteratorHelperLoose(_Coaster_symbolList.symbolList); !(_step4 = _iterator4()).done;) {
                                symbolItem = _step4.value;
                                if (symbolItem) {
                                  symbolItem.doScatterAni();
                                }
                              }
                            }
                          }
                          _context4.next = 73;
                          break;
                        case 69:
                          //                //drop
                          _arrPro2 = [];
                          for (_i9 = 0; _i9 < _this9.Coaster_symbolList.length; _i9++) {
                            _arrPro2.push(_this9.Coaster_symbolList[_i9].doDrop(resultNext, result));
                          }
                          _context4.next = 73;
                          return Promise.all(_arrPro2);
                        case 73:
                          gts.Debug.Log("==========doDrop========");
                          _this9.setWays(resultNext);
                          _context4.next = 78;
                          break;
                        case 77:
                          if (CoasterModel.instance.freeStatus != eRunStatus.NONE) {
                            if (CoasterModel.instance.curTotalWin > 0) {
                              _this9.setRateState(false, result.odds);
                              CoasterModel.instance.totalRate = result.odds;
                            }
                          } else {
                            if (CoasterModel.instance.curTotalWin > 0) {
                              _this9.setRateState(false, result.odds);
                            }
                          }
                        case 78:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 11:
                  if (!(i < resultList.length)) {
                    _context5.next = 16;
                    break;
                  }
                  return _context5.delegateYield(_loop(), "t0", 13);
                case 13:
                  i++;
                  _context5.next = 11;
                  break;
                case 16:
                  this.showMask(false);
                  delayStart = 0.25;
                  if (!(CoasterModel.instance.freeStatus != eRunStatus.NONE && CoasterModel.instance.totalFreeTimes < CoasterModel.instance.betResult.freeInfo.surplusFreeCount)) {
                    _context5.next = 32;
                    break;
                  }
                  disTimes = CoasterModel.instance.betResult.freeInfo.surplusFreeCount - CoasterModel.instance.totalFreeTimes;
                  this.addFreeMask.active = true;
                  free_add = this.addFreeMask.getChildByName("free_add").getComponent(sp.Skeleton);
                  free_add.setAnimation(0, "intro", false);
                  free_add.addAnimation(0, "idle", true);
                  Label_addNum = this.addFreeMask.getChildByName("Label_addNum").getComponent(Label);
                  Label_addNum.string = "" + disTimes;
                  free_light = this.addFreeMask.getChildByName("free_light").getComponent(sp.Skeleton);
                  addNums = 0;
                  Label_freeTimes = this.Node_freeInfo.getChildByName("Label_freeTimes");
                  tween(Label_freeTimes).delay(0.2).to(0.1, {
                    scale: v3(1.2, 1.2, 1)
                  }).call(function () {
                    addNums++;
                    free_light.node.active = true;
                    free_light.setAnimation(0, "idle", false);
                    CoasterUtils.instance.playOneShot(eSound.fsWonRemainingIncrease);
                    Label_freeTimes.getComponent(Label).string = "" + (CoasterModel.instance.totalFreeTimes + addNums);
                  }).to(0.1, {
                    scale: v3(1.0, 1.0, 1)
                  }).union().repeat(disTimes).delay(0.5).call(function () {
                    _this9.addFreeMask.active = false;
                    CoasterModel.instance.totalFreeTimes = CoasterModel.instance.betResult.freeInfo.surplusFreeCount;
                    Label_freeTimes.getComponent(Label).string = "" + CoasterModel.instance.totalFreeTimes;
                  }).start();
                  _context5.next = 32;
                  return this.doAwait(0.4 * disTimes + 0.5);
                case 32:
                  CoasterModel.instance.isAuto = CoasterModel.instance.autoTimes > 0;
                  if (!CoasterModel.instance.isAuto) {
                    this.Skeleton_run.setCompleteListener(null);
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    if (CoasterModel.instance.totalFreeTimes == 0) {
                      this.Button_run.interactable = true;
                      this.Button_run.node.emit("resumeEffect");
                    }
                    this.Button_buy.interactable = true;
                    this.Button_buy.getComponent(UIOpacity).opacity = 255;
                    // this.Button_buy.node.getChildByName("Sprite_text").getComponent(Sprite).color = color(255, 255, 255, 255);
                    btnRunEffect = this.Button_run.node.getComponent(Coaster_btnEffect);
                    btnRunEffect.switchAni();

                    //            // CoasterUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    CoasterUtils.instance.updateLabel(this.Label_autoTimes, CoasterModel.instance.autoTimes);
                  } else {
                    // this.Button_buy.interactable = true;
                    // this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.interactable = true;
                  }

                  // let curTotalWin = CoasterModel.instance.freeStatus != CoasterDef.eRunStatus.NONE ? CoasterModel.instance.totalFreeWin : CoasterModel.instance.curTotalWin;
                  if (!(CoasterModel.instance.curTotalWin > 0)) {
                    _context5.next = 44;
                    break;
                  }
                  _context5.next = 37;
                  return this.doShowBigWin(CoasterModel.instance.curTotalWin);
                case 37:
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  com_Coaster_winTip = this.Node_winTip.getComponent(Coaster_winTip);
                  com_Coaster_winTip.doShow(CoasterModel.instance.curTotalWin, 2);
                  winRate = CoasterModel.instance.curTotalWin / (CoasterModel.instance.curBet * 1000);
                  this.setTipEffect(winRate, true);
                  delayStart = 1.0;
                case 44:
                  if (CoasterModel.instance.endBalance > 0) {
                    CoasterModel.instance.curBalance = CoasterModel.instance.endBalance;
                    CoasterModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  CoasterModel.instance.gameStatus = eRunStatus.NONE;
                  if (!this.Button_buy.node.active && CoasterModel.instance.freeStatus == eRunStatus.NONE) {
                    pos = this.Button_buy.node.getPosition().y;
                    this.Button_buy.node.setPosition(this.Button_buy.node.position.x, this.Button_buy.node.position.y - 30);
                    this.Button_buy.node.getComponent(UIOpacity).opacity = 0;
                    this.Button_buy.node.active = true;
                    tween(this.Button_buy.node).to(0.2, {
                      position: v3(this.Button_buy.node.position.x, pos)
                    }).start();
                    tween(this.Button_buy.node.getComponent(UIOpacity)).to(0.2, {
                      opacity: 255
                    }).start();
                  }

                  //        //free and auto
                  if (!(CoasterModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context5.next = 52;
                    break;
                  }
                  this.Node_bigWin.active = false;
                  if (CoasterModel.instance.totalFreeTimes > 0) {
                    this.scheduleOnce(function () {
                      CoasterCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    CoasterModel.instance.freeStatus = eRunStatus.END;
                    this.doEndFree();
                  }
                  _context5.next = 64;
                  break;
                case 52:
                  if (!(CoasterModel.instance.totalFreeTimes > 0)) {
                    _context5.next = 63;
                    break;
                  }
                  CoasterUtils.instance.playOneShot(eSound.scatterWinHighlight);
                  helpTip = this.Node_helpTip.getComponent(Coaster_helpTip);
                  helpTip.doShow(2);
                  arrPro = [];
                  for (_i = 0; _i < this.Coaster_symbolList.length; _i++) {
                    for (_iterator = _createForOfIteratorHelperLoose(this.Coaster_symbolList[_i].symbolList); !(_step = _iterator()).done;) {
                      symbol = _step.value;
                      arrPro.push(symbol.doScatterAni());
                    }
                  }
                  _context5.next = 60;
                  return Promise.all(arrPro);
                case 60:
                  this.showFree();
                  _context5.next = 64;
                  break;
                case 63:
                  if (CoasterModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //                // this.doStartRun();
                      CoasterCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 64:
                  this.scheduleOnce(function () {
                    if (CoasterModel.instance.isAuto || CoasterModel.instance.freeStatus == eRunStatus.RUNNING) {
                      _this9.Label_gold.color = color(255, 255, 255, 255);
                      _this9.Label_bet.color = color(255, 255, 255, 255);
                      _this9.Label_win.color = color(255, 255, 255, 255);
                    } else {
                      _this9.Label_gold.color = color(150, 220, 255, 255);
                      _this9.Label_bet.color = color(150, 220, 255, 255);
                      _this9.Label_win.color = color(150, 220, 255, 255);
                      _this9.Button_menu.interactable = true;
                      _this9.Button_redus.interactable = CoasterModel.instance.curBet > 2;
                      _this9.Button_add.interactable = CoasterModel.instance.curBet < 1000;
                      _this9.Button_auto.interactable = true;
                      _this9.Button_buy.getComponent(UIOpacity).opacity = _this9.Button_buy.interactable ? 255 : 100;
                      _this9.Button_redus.node.getComponent(UIOpacity).opacity = _this9.Button_redus.interactable ? 255 : 100;
                      _this9.Button_add.node.getComponent(UIOpacity).opacity = _this9.Button_add.interactable ? 255 : 100;
                      _this9.Button_menu.node.getComponent(UIOpacity).opacity = _this9.Button_menu.interactable ? 255 : 100;
                      _this9.Button_auto.node.getComponent(UIOpacity).opacity = _this9.Button_auto.interactable ? 255 : 100;
                    }
                  }, CoasterModel.instance.curTotalWin > 0 ? 0.25 : 0);
                case 65:
                case "end":
                  return _context5.stop();
              }
            }, _callee2, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this10 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (CoasterModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 20) {
              //                //30
              resolve();
              return;
            }
            _this10.scheduleOnce(function () {
              //                //大奖显示
              _this10.Node_bigWin.parent = _this10.node;
              // this.Node_bigWin.getComponent(UITransform).priority = 52;
              _this10.Node_bigWin.getComponent(UITransform).priority = 52;
              _this10.Node_bigWin.active = true;
              _this10.Node_bigWin.scale = v3(0.5, 0.5, 1);
              var Node_bigWinEffect = _this10.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 35 ? 0 : rate < 50 ? 1 : 2;
              var ani = ["bigwin", "megawin", "superwin"];
              var aniIdle = ["bigwin_idle", "megawin_idle", "superwin_idle"];
              var TrackEntry = Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
              Node_bigWinEffect.addAnimation(0, aniIdle[level], true);
              tween(_this10.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                CoasterUtils.instance.playSound(eSound.bigWin);
                var totalTime = TrackEntry.animation.duration;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                tween(_this10.Label_totalWinBig.node).repeatForever(tween(_this10.Label_totalWinBig.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    var ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (_this10.isStopBigWin && Node_bigWinEffect.animation != ani[level]) {
                      Node_bigWinEffect.setAnimation(0, ani[level], true);
                      delay = 2.0;
                    }
                    _this10.isStopBigWin = false;
                    CoasterUtils.instance.stopSound(eSound.bigWin);
                    CoasterUtils.instance.playSound(eSound.bigWinEnd);
                    Tween.stopAllByTarget(_this10.Node_bigWin);
                    Tween.stopAllByTarget(_this10.Label_totalWinBig.node);
                    curTotalWin = destWin;
                    tween(_this10.Node_bigWin).delay(delay).call(function () {
                      _this10.Node_bigWin.active = false;
                      resolve();
                    }).start();
                    var inter = Common.numFormatInt(curTotalWin / 1000);
                    var digit = CoasterUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                    _this10.Label_totalWinBig.string = "" + inter + digit + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(CoasterModel.instance.isAuto || CoasterModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                      var inter = Common.numFormatInt(curTotalWin / 1000);
                      var digit = CoasterUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                      _this10.Label_totalWinBig.string = "" + inter + digit + "K";
                    } else {
                      var _inter = Common.numFormatInt(curTotalWin / 1000);
                      var _digit = CoasterUtils.instance.numberFormatFloatD(curTotalWin / 1000, 2.0);
                      _this10.Label_totalWinBig.string = "" + _inter + _digit + "K";
                    }
                  }
                  if (_this10.isStopBigWin) {
                    //点击停止
                    doEnd();
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.hideFree = function hideFree() {
          var _this11 = this;
          this.unschedule(this.hideFree);

          //        // if (CoasterModel.instance.freeStatus != CoasterDef.eRunStatus.NONE) {
          CoasterModel.instance.freeStatus = eRunStatus.NONE;
          CoasterModel.instance.totalFreeTimes = 0;
          CoasterModel.instance.totalRate = 1;
          AudioManager.instance.resumeMusic();
          CoasterUtils.instance.stopSound(eSound.freeEndMain);
          CoasterUtils.instance.stopSound(eSound.freeEnd);
          if (!CoasterModel.instance.isAuto) {
            this.Button_auto.interactable = true;
            this.Button_menu.interactable = true;
            this.Button_redus.interactable = CoasterModel.instance.curBet > 2;
            this.Button_add.interactable = CoasterModel.instance.curBet < 1000;
            this.Button_buy.getComponent(UIOpacity).opacity = this.Button_buy.interactable ? 255 : 100;
            this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
            this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
            this.Button_menu.node.getComponent(UIOpacity).opacity = this.Button_menu.interactable ? 255 : 100;
            this.Button_auto.node.getComponent(UIOpacity).opacity = this.Button_auto.interactable ? 255 : 100;
          }
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this11.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;
            _this11.Node_public.active = true;
            _this11.Node_public.setPosition(_this11.Node_public.position.x, -400);

            // let Sprite_frame = find("Node_main/Sprite_frame", Node_enter);
            // Sprite_frame.getComponent(UIOpacity).opacity = 255;
            // Sprite_frame.active = false;

            var Node_end = _this11.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            _this11.Node_bigWin.active = false;
            if (CoasterModel.instance.totalFreeWin > 0) {
              _this11.Node_helpTip.active = false;
              _this11.Node_winTip.active = true;
              var com_Coaster_winTip = _this11.Node_winTip.getComponent(Coaster_winTip);
              com_Coaster_winTip.doShow(CoasterModel.instance.totalFreeWin, 2);
              var winRate = CoasterModel.instance.totalFreeWin / (CoasterModel.instance.curBet * 1000);
              _this11.setTipEffect(winRate, true);
            }
          }).delay(0.5).call(function () {
            _this11.Node_free.active = false;
            if (CoasterModel.instance.isAuto) {
              _this11.scheduleOnce(function () {
                CoasterCtrl.instance.reqBet();
              }, 0.25);
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this12 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!this.Node_free.active) {
            this.Node_free.active = true;
            var delayTime = isEnter ? 0 : 1.0;

            // Common.setButtonEnableWithGray(this.Button_enterFree, true);
            if (!isEnter) {
              CoasterUtils.instance.playOneShot(eSound.fsTrans);
            }
            this.scheduleOnce(function () {
              _this12.Label_gold.color = color(255, 255, 255, 255);
              _this12.Label_bet.color = color(255, 255, 255, 255);
              _this12.Label_win.color = color(255, 255, 255, 255);

              // audioEngine.pauseMusic();
              AudioManager.instance.pauseMusic();
              _this12.Node_public.setPosition(_this12.Node_public.position.x, -635);
              if (isEnter) {
                _this12.doEnterFree(1.0);
              } else {
                _this12.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.Sprite_bg.spriteFrame = this.arrBgSpFrame[0];
          this.free_bglight.active = false;
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Button_buy.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this13 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 255;

          //enter
          var Button_start = find("Node_enter/Button_start", this.Node_free);
          Button_start.active = false;
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.getComponent(UIOpacity).opacity = 0;
          Node_enter.scale = v3(0.75, 0.75, 0.75);
          Node_enter.active = true;
          tween(Node_enter).to(0.25, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
          tween(Node_enter.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).start();
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.active = true;
          Label_freeTimes.getComponent(Label).string = "" + CoasterModel.instance.totalFreeTimes;
          var Node_Enterbg = Node_enter.getChildByName("Node_Enterbg");
          Node_Enterbg.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          Node_Enterbg.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          var Node_progress = find("Node_enter/Node_progress", this.Node_free);
          Node_progress.active = true;
          var Label_percent = find("Node_enter/Node_progress/Label_percent", this.Node_free).getComponent(Label);
          Label_percent.string = 0 + "%";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.Node_tipEffect.setAnimation(0, "normal_p", true);
          this.setRateState();
          CoasterUtils.instance.playOneShot(eSound.fsWonTitle);
          var percent = 0;
          var delay = 0.1;
          var duration = 2;
          var times = duration / delay;
          tween(Label_percent).delay(delay).call(function () {
            percent += 100 / times;
            percent = percent > 100 ? 100 : percent;
            Label_percent.string = percent + "%";
          }).union().repeat(times).call(function () {
            Button_start.active = true;
            Button_start.scale = v3(0.25, 0.25, 0.25);
            tween(Button_start).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.15, {
              scale: v3(1, 1, 1)
            }).start();
            Node_progress.active = false;
            _this13.scheduleOnce(_this13.doEnterFree, 3);
          }).start();
          CoasterModel.instance.totalFreeWin = 0;
        };
        _proto.doEnterFree = function doEnterFree(delay) {
          var _this14 = this;
          if (delay === void 0) {
            delay = 0;
          }
          if (CoasterModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          CoasterModel.instance.freeStatus = eRunStatus.RUNNING;
          this.unschedule(this.doEnterFree);
          var helpTip = this.Node_helpTip.getComponent(Coaster_helpTip);
          helpTip.doShow();
          var doEnter = function doEnter() {
            _this14.Node_info.node.active = false;

            //            //背景
            _this14.Sprite_bg.spriteFrame = _this14.arrBgSpFrame[1];
            _this14.free_bglight.active = true;
            _this14.Node_action.active = false;
            _this14.Node_menu.active = false;
            _this14.Button_menu.node.active = false;
            _this14.Button_run.node.active = false;
            _this14.Button_buy.node.active = false;

            // this.Label_way.font = CoasterUtils.instance.getFontData("orange");

            _this14.Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = _this14.Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + CoasterModel.instance.totalFreeTimes;
            var Sprite_title = _this14.Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = _this14.arrTitle[0];
            _this14.Label_curRate.getComponent(Label).string = "x" + CoasterModel.instance.totalRate;
            AudioManager.instance.resumeMusic();
            _this14.scheduleOnce(function () {
              CoasterCtrl.instance.reqBet();
            }, delay);
          };
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = false;
          doEnter();
        };
        _proto.doEndFree = function doEndFree() {
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          var Label_freeTimes = Node_end.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + CoasterModel.instance.totalFreeTimesBack;
          var Label_totalWin = Node_end.getChildByName("Label_totalWin");
          Label_totalWin.getComponent(Label).string = "";
          var endSpine = Node_end.getComponent(sp.Skeleton);
          this.Node_freeInfo.active = false;
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);
          this.Node_public.active = false;
          this.scheduleOnce(function () {
            //            //免费总得分
            Label_totalWin.scale = v3(1.0, 1.0, 1);
            CoasterUtils.instance.updateLabelAddNf(Label_totalWin.getComponent(Label), CoasterModel.instance.totalFreeWin);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(this.setEndFree, 0.2);

          // audioEngine.pauseMusic();
          AudioManager.instance.pauseMusic();
          CoasterUtils.instance.playSound(eSound.freeEndMain, true);
          this.scheduleOnce(function () {
            CoasterUtils.instance.stopSound(eSound.freeEndMain);
            CoasterUtils.instance.playSound(eSound.freeEnd, false);
          }, 3.052);

          //2.0秒后返回正常
          this.scheduleOnce(this.hideFree, 8);
        };
        _proto.onCatNumMove = function onCatNumMove(destPos) {
          if (destPos === void 0) {
            destPos = 260;
          }
          if (!this.Label_curRate.active || this.Label_curRate.getPosition().y == destPos) {
            return;
          }
          tween(this.Label_curRate).to(0.25, {
            position: v3(this.Label_curRate.position.x, destPos),
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.setRateState = function setRateState(isGray, curRate, collectCallBack) {
          if (isGray === void 0) {
            isGray = true;
          }
          if (curRate === void 0) {
            curRate = 1;
          }
          if (collectCallBack === void 0) {
            collectCallBack = null;
          }
          var lightColor = isGray ? color(0, 0, 0, 255) : color(255, 255, 255, 255);
          var labelRateColor = isGray ? color(200, 200, 200, 150) : color(255, 255, 255, 255);
          // this.xn_light.getComponent(sp.Skeleton).color = isGray ? color(0, 0, 0, 255) : color(255, 255, 255, 255);
          // this.Label_curRate.getComponent(Label).color = isGray ? color(200, 200, 200, 150) : color(255, 255, 255, 255);
          var toScale = isGray ? v3(0.75, 0.75, 0.75) : v3(1, 1, 1);
          tween(this.xn_light.getComponent(sp.Skeleton)).to(0.5, {
            color: lightColor
          }).start();
          tween(this.Label_curRate.getComponent(Label)).to(0.5, {
            color: labelRateColor
          }).start();
          this.Label_curRate.getComponent(Label).string = "x" + curRate;
          if (curRate > parseInt(this.Label_curRate.getComponent(Label).string.replace("x", ""))) {
            CoasterUtils.instance.playOneShot(eSound.multiUp);
          }
          if (collectCallBack) {
            var newNode = instantiate(this.Label_curRate);
            this.Node_tipEffect.node.addChild(newNode);
            Tween.stopAllByTarget(newNode);
            newNode.getComponent(Label).color = color(255, 255, 255, 255);
            var startPos = this.Label_curRate.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            startPos = this.Node_tipEffect.node.getComponent(UITransform).convertToNodeSpaceAR(startPos);
            newNode.position = startPos;
            var toPos = v3(0, 0, 0); //this.Node_helpTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            // toPos = this.Node_helpTip.getComponent(UITransform).convertToNodeSpaceAR(toPos);
            tween(newNode).delay(0.2).bezierTo(0.5, startPos, v3((startPos.x + toPos.x) / 2 + 50, (startPos.y + toPos.y) / 2 + 200, 0), toPos).call(collectCallBack).to(0.3, {
              scale: v3(2.5, 2.5, 2.5)
            }).delay(0.1).removeSelf().start();
            tween(newNode.getComponent(UIOpacity)).delay(0.6).to(0.25, {
              opacity: 0
            }).start();
            var sound = ["sound/prizeSmallwinMultiplied", "sound/prizeSmallwinMultipliedVox1", "sound/prizeSmallwinMultipliedVox2", "sound/prizeSmallwinMultipliedVox3"];
            if (curRate > 1) {
              CoasterUtils.instance.playOneShot(sound[curRate - 1]);
            }
          }
          tween(this.Label_curRate).to(0.25, {
            scale: toScale
          }).start();
          if (curRate > 1) {
            this.xn_light.getComponent(sp.Skeleton).setAnimation(0, "win", true);
          } else {
            this.xn_light.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(CoasterModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            CoasterUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateViewInfo = function updateViewInfo() {
          var _this15 = this;
          if (!CoasterModel.instance.gameInfo) {
            return;
          }
          var lastResult = CoasterModel.instance.gameInfo.OpenNums[CoasterModel.instance.gameInfo.OpenNums.length - 1];
          var AllPosMsg = lastResult.openNum;
          this.setWays(lastResult);
          for (var i = 0; i < this.Coaster_symbolList.length; i++) {
            var InitPosMsg = AllPosMsg[i];
            this.Coaster_symbolList[i].init(InitPosMsg);
          }
          this.scheduleOnce(function () {
            _this15.Button_run.interactable = true;
          }, 1.0);
          this.Label_bet.string = CoasterUtils.instance.numberFormat(CoasterModel.instance.curBet, 2.0) + "K";
          this.Label_curRate.getComponent(Label).string = "x" + (lastResult.odds > 0 ? lastResult.odds : 1);
          var totalWin = 0;
          if (CoasterModel.instance.totalFreeTimes > 0) {
            totalWin = CoasterModel.instance.totalFreeWin;
            this.showFree(true);
          } else {
            var resultList = CoasterModel.instance.gameInfo.OpenNums;
            for (var _i10 = 0; _i10 < resultList.length; _i10++) {
              var result = resultList[_i10];
              if (result.prizeAmount > 0) {
                totalWin += result.prizeAmount;
              }
            }
          }
          if (totalWin > 0) {
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_Coaster_winTip = this.Node_winTip.getComponent(Coaster_winTip);
            com_Coaster_winTip.doShow(totalWin, 2);
            CoasterUtils.instance.updateLabelAddNf(this.Label_win, totalWin);
          }
          this.Button_redus.interactable = CoasterModel.instance.curBet > 2;
          this.Button_add.interactable = CoasterModel.instance.curBet < 1000;
          this.Button_buy.getComponent(UIOpacity).opacity = this.Button_buy.interactable ? 255 : 100;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
          this.Button_menu.node.getComponent(UIOpacity).opacity = this.Button_menu.interactable ? 255 : 100;
          this.Button_auto.node.getComponent(UIOpacity).opacity = this.Button_auto.interactable ? 255 : 100;
          var arrIndex = CoasterUtils.instance.getIndexByBaseBet(CoasterModel.instance.curBet);
          CoasterModel.instance._curIndex_baseScore = arrIndex[0];
          CoasterModel.instance._curIndex_baseRate = arrIndex[1];
          CoasterModel.instance._curIndex_baseBet = arrIndex[2];
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                if (!this.isInit) {
                  return;
                }
                this.updateViewInfo();
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_BuyFree:
              {
                var helpTip = this.Node_helpTip.getComponent(Coaster_helpTip);
                helpTip.doShow(3);
              }
            case eProto.HD_Bet:
              {
                //                // this.Button_run.interactable = true;
                //                // Tween.stopAllByTarget(this.Button_run.node);
                //                // CoasterUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }
            // case CoasterDef.eProto.HD_BoYiBo: {
            //     this.doBoYiBoResult(data.win);
            //     break;
            // }

            //            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.gameShow();
                break;
              }
          }
        };
        return CoasterGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_7", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_8", [_dec5], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_helpTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Coaster_symbolList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipEffect", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_buy", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_way", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "free_bglight", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "xn_light", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Label_curRate", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "arrRoomSpFrame", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "arrCenterSpFrame", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "arrFishSpFrame", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "arrTipBgSpFrame", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "arrDownSpFrame", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_roomBg", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWinBig", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "scatter_wait_root", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "scatter_wait", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeInfo", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "addFreeMask", [_dec46], {
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

System.register("chunks:///_virtual/CoasterModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './CoasterDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ee361CanyFBO783PvZo2Oq3", "CoasterModel", undefined);
      var CoasterModel = exports('CoasterModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CoasterModel, _GameDef$BaseSington);
        function CoasterModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.stopNum = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          _this.isAuto = false;
          _this.autoTimes = 0;
          _this.selAutoIndex = 0;
          _this.isQuickStop = false;
          _this.curBet = 2.0;
          _this.curBetBase = 0;
          _this.curBetRate = 0;
          _this.curTotalBet = 2.0;
          _this.curTotalWin = 0;
          //    // curRate: number = 0;
          _this.totalRate = 8;
          _this.betResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeTimesBack = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.curSpecialStartCol = 0;
          _this.isFirstFree = false;
          _this.boType = "count";
          _this.arrColWild = [];
          _this.HD_info = {
            Action: "HD_info",
            Code: 0,
            Data: {
              OpenNums: [{
                odds: 4,
                openNum: [[{
                  count: 1,
                  num: 4,
                  remove: false
                }, {
                  count: 1,
                  num: 3,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }], [{
                  count: 3,
                  num: 5,
                  remove: false
                }, {
                  count: 1,
                  num: 10,
                  remove: false
                }], [{
                  count: 1,
                  num: 5,
                  remove: false
                }, {
                  count: 3,
                  num: 7,
                  remove: false
                }], [{
                  count: 1,
                  num: 10,
                  remove: false
                }, {
                  count: 3,
                  num: 3,
                  remove: false
                }], [{
                  count: 2,
                  num: 12,
                  remove: false
                }, {
                  count: 2,
                  num: 12,
                  remove: false
                }], [{
                  count: 1,
                  num: 8,
                  remove: false
                }, {
                  count: 1,
                  num: 7,
                  remove: false
                }, {
                  count: 1,
                  num: 2,
                  remove: false
                }, {
                  count: 1,
                  num: 7,
                  remove: false
                }], [{
                  count: 1,
                  num: 8,
                  remove: false
                }, {
                  count: 1,
                  num: 6,
                  remove: false
                }, {
                  count: 1,
                  num: 3,
                  remove: false
                }, {
                  count: 1,
                  num: 5,
                  remove: false
                }], [{
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 5,
                  remove: false
                }, {
                  count: 1,
                  num: 11,
                  remove: false
                }, {
                  count: 1,
                  num: 15,
                  remove: false
                }]],
                prizeAmount: 0
              }],
              betAmount: 2000,
              freeInfo: {
                odds: 15,
                surplusFreeCount: 0,
                totalFreePrizeAmount: 2105200,
                totalFreePrizeCount: 2
              },
              freePrize: false,
              prizeAmount: 0
            },
            ErrMsg: "THAO TÁC THÀNH CÔNG",
            GameType: "slotWildCoaster",
            cmd: "slotWildCoaster/HD_info"
          };
          _this.onRecvData = {
            Action: "HD_Bet",
            Code: 0,
            Data: {
              OpenNums: [{
                odds: 14,
                openNum: [[{
                  count: 1,
                  num: 12,
                  remove: false
                }, {
                  count: 1,
                  num: 5,
                  remove: false
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }, {
                  count: 1,
                  num: 2,
                  remove: false
                }], [{
                  count: 3,
                  num: 10,
                  remove: true
                }, {
                  count: 1,
                  num: 12,
                  remove: false
                }], [{
                  count: 1,
                  num: 12,
                  remove: false
                }, {
                  count: 2,
                  num: 10,
                  remove: true
                }, {
                  count: 1,
                  num: 9,
                  remove: false
                }], [{
                  count: 1,
                  num: 14,
                  remove: true
                }, {
                  count: 1,
                  num: 14,
                  remove: true
                }, {
                  count: 1,
                  num: 14,
                  remove: true
                }, {
                  count: 1,
                  num: 14,
                  remove: true
                }], [{
                  count: 3,
                  num: 2,
                  remove: false
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }], [{
                  count: 1,
                  num: 9,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }, {
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }], [{
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }, {
                  count: 1,
                  num: 14,
                  remove: true
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }], [{
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }, {
                  count: 1,
                  num: 14,
                  remove: true
                }, {
                  count: 1,
                  num: 10,
                  remove: true
                }]],
                prizeAmount: 8400
              }, {
                odds: 15,
                openNum: [[{
                  count: 1,
                  num: 12,
                  remove: false
                }, {
                  count: 1,
                  num: 5,
                  remove: false
                }, {
                  count: 1,
                  num: 2,
                  remove: false
                }, {
                  count: 1,
                  num: 5,
                  remove: false
                }], [{
                  count: 1,
                  num: 12,
                  remove: false
                }, {
                  count: 1,
                  num: 11,
                  remove: false
                }, {
                  count: 1,
                  num: 11,
                  remove: false
                }, {
                  count: 1,
                  num: 8,
                  remove: false
                }], [{
                  count: 1,
                  num: 12,
                  remove: false
                }, {
                  count: 1,
                  num: 9,
                  remove: false
                }, {
                  count: 2,
                  num: 7,
                  remove: false
                }], [{
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 13,
                  remove: false
                }], [{
                  count: 3,
                  num: 2,
                  remove: false
                }, {
                  count: 1,
                  num: 7,
                  remove: false
                }], [{
                  count: 1,
                  num: 9,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }, {
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }], [{
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 4,
                  remove: false
                }, {
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 7,
                  remove: false
                }], [{
                  count: 1,
                  num: 1,
                  remove: false
                }, {
                  count: 1,
                  num: 6,
                  remove: false
                }, {
                  count: 1,
                  num: 13,
                  remove: false
                }, {
                  count: 1,
                  num: 9,
                  remove: false
                }]],
                prizeAmount: 0
              }],
              betAmount: 2000,
              freeInfo: {
                odds: 15,
                surplusFreeCount: 0,
                totalFreePrizeAmount: 563600,
                totalFreePrizeCount: 10
              },
              freePrize: false,
              prizeAmount: 138400
            },
            ErrMsg: "THAO TÁC THÀNH CÔNG",
            GameType: "slotWildCoaster",
            cmd: "slotWildCoaster/HD_Bet"
          };
          return _this;
        }
        var _proto = CoasterModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return CoasterModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CoasterScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './CoasterDef.ts', './CoasterUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, CoasterUtils, Common;
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
      eEvent = module.eEvent;
    }, function (module) {
      CoasterUtils = module.CoasterUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "19c6cDVT0lEwYO4mNidR5Xd", "CoasterScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CoasterScene = exports('default', (_dec = ccclass("CoasterScene"), _dec2 = menu("game/CoasterGame/CoasterScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CoasterScene, _Component);
        function CoasterScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          return _this;
        }
        var _proto = CoasterScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          CoasterUtils.instance.bundle = assetManager.getBundle(cBundle);
          CoasterUtils.instance.preLoad();
          CoasterUtils.instance.playBgMusic();
          this.onLoadGame();
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
            //            // let orientation = cc.macro.ORIENTATION_LANDSCAPE;
            //            // let designResolution = cc.size(1334, 750);
            //            // let resolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
            //            // if (!CoasterUtils.instance.isChangeOrientation()) {
            //            //     orientation = cc.macro.ORIENTATION_PORTRAIT;
            //            //     designResolution = cc.size(750, 1334);
            //            //     resolutionPolicy = cc.ResolutionPolicy.FIXED_WIDTH;
            //            //     this._node_Game.scale = 1.0;
            //            // } else {
            //            //     this._node_Game.scale = 750 / 1334;
            //            // }
            //            // cc.view.setDesignResolutionSize(designResolution.width, designResolution.height, resolutionPolicy);
            //            // cc.view.setOrientation(orientation);

            //            //////////////////
            Common.transformSize(_this2._node_Game);
          }, 0.05);
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
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            CoasterUtils.instance.bundle.load("prefab/CoasterGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_game = prefab;
              _this3.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this4 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }
            this.onResize();
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              Common.closeWait();
              if (CoasterUtils.instance.isChangeOrientation()) {
                _this4._node_Game.scale = v3(750 / 1334, 750 / 1334, 1);
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
        return CoasterScene;
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

System.register("chunks:///_virtual/CoasterUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './CoasterDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, Sprite, sp, sys, SpriteFrame, Font, GameDef, AudioManager, eSound, eSymbol, cBaseScore, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      eSound = module.eSound;
      eSymbol = module.eSymbol;
      cBaseScore = module.cBaseScore;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f246MFeCFBG50mx7hDdIIO", "CoasterUtils", undefined);
      var symbol_nomal_icon = ["h_rollercoaster", "h_ferriswheel", "h_tent", "h_counter", "h_hotdog", "h_soda", "l_a", "l_k", "l_q", "l_j", "l_10", "s_scatter", "s_wild", "s_wild2", "s_wild3"];
      var symbol_SkeletonDataName = ["h_rollercoaster_atlas_symbols", "h_ferriswheel_atlas_symbols", "h_tent_atlas_symbols", "h_counter_atlas_symbols", "h_hotdog_atlas_symbols", "h_soda_atlas_symbols", "l_a_atlas_symbols", "l_k_atlas_symbols", "l_q_atlas_symbols", "l_j_atlas_symbols", "l_10_atlas_symbols", "s_scatter_atlas_specials", "s_wild_atlas_specials", "s_wild2_atlas_specials", "s_wild3_atlas_specials"];
      var symbol_boxName = ["h_rollercoaster_frame", "h_ferriswheel_frame", "h_tent_frame", "h_counter_frame", "h_hotdog_frame", "h_soda_frame", "l_frame", "l_frame", "l_frame", "l_frame", "l_frame", "s_scatter_frame", "s_wild_frame_red", "s_wild_frame_yellow", "s_wild_frame_blue"];
      // RollerCoaster = 1, //过山车
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

      var CoasterUtils = exports('CoasterUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CoasterUtils, _GameDef$BaseSington);
        function CoasterUtils() {
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
          _this.arrIconBoxSpriteFrame = {};
          _this.arrIconFrameSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = CoasterUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/CoasterGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/iconBox", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var _SpriteFrame2 = _step2.value;
                        _this4.arrIconBoxSpriteFrame[_SpriteFrame2.name] = _SpriteFrame2;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("textures/iconFrame", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var _SpriteFrame3 = _step3.value;
                        _this4.arrIconFrameSpriteFrame[_SpriteFrame3.name] = _SpriteFrame3;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator4 = _createForOfIteratorHelperLoose(arrSpineData), _step4; !(_step4 = _iterator4()).done;) {
                        var spineData = _step4.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator5 = _createForOfIteratorHelperLoose(arrSpineData), _step5; !(_step5 = _iterator5()).done;) {
                        var spineData = _step5.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/orange", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/yellow", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  // arrHLoad.push(
                  //     this.asyncLoad("font/red_01", Font, (err, font: Font) => {
                  //         if (!err) {
                  //             this.arrFontData[font.name] = font;
                  //         }
                  //     })
                  // );
                  _context3.next = 10;
                  return Promise.all(arrHLoad);
                case 10:
                  if (cb) {
                    cb();
                  }
                case 11:
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
        _proto.playBgMusic = function playBgMusic() {
          AudioManager.instance.playBgMusic(eSound.bg, this.bundle, true);
          // audioEngine.setMusicVolume(0.75);
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
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
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

          //        // AlbbUtils.instance.playSound(AlbbDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // AlbbUtils.instance.stopSound(AlbbDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
          })).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this8 = this;
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
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat, delayTime) {
          var _this9 = this;
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
              // CoasterUtils.instance.stopSound(CoasterDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this9.numberFormatFloat(curWin, 0) : "" + _this9.numberFormat(curWin, 0);
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          if (this.arrIconSpriteFrame) {
            if (symbolIndex >= eSymbol.WILD) {
              if (isIdle) {
                var _symbol = symbol_nomal_icon[symbolIndex - 1];
                return this.arrIconSpriteFrame[_symbol];
              } else {
                symbolIndex = eSymbol.WILD;
              }
            }
            var symbol = isIdle ? symbol_nomal_icon[symbolIndex - 1] + "_blur" : symbol_nomal_icon[symbolIndex - 1];
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length, rim) {
          if (length === void 0) {
            length = 1;
          }
          var strLen = ["a", "b", "c"];
          var symbol = symbol_boxName[symbolIndex - 1] + "_" + strLen[length - 1];
          if (this.arrIconBoxSpriteFrame) {
            var ret = this.arrIconBoxSpriteFrame[symbol];
            if (!ret) {
              return null;
            }
            return ret;
          }
          return null;
        };
        _proto.getItemSymbolIconFrame = function getItemSymbolIconFrame(rim, length) {
          if (rim === void 0) {
            rim = 0;
          }
          if (length === void 0) {
            length = 0;
          }
          if (rim == 0 || length < 2) {
            return null;
          }
          var symbol = rim == 1 ? "Base_Reel_Silver frame_0" + length : "Base_Reel_Gold frame_0" + length;
          if (this.arrIconFrameSpriteFrame) {
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          var strAni = [];
          strAni.push(isIdle ? "spawn" : "win");
          switch (symbolIndex) {
            case eSymbol.SCATTER:
              {
                // isIdle ? strAni.push("idle") : null;
                strAni.push("idle");
                break;
              }
            case eSymbol.WILD:
            case eSymbol.WILD2:
            case eSymbol.WILD3:
              {
                isIdle ? strAni.push("idle") : null;
                break;
              }
          }
          if (!strAni) {
            return null;
          }
          return strAni;
        };
        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index, isWild) {
          if (isWild === void 0) {
            isWild = true;
          }
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          index = index > eSymbol.WILD && isWild ? eSymbol.WILD : index;
          var strAni = symbol_SkeletonDataName[index - 1];

          // gts.Debug.Log("==getSkeletonData=strAni=" + strAni);
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
        _proto.getIndexByBaseBet = function getIndexByBaseBet(inBaseBet) {
          for (var i = 0; i < 30; i++) {
            var baseScore = Math.floor(i / 10);
            var baseRate = i % 10;
            var baseBet = cBaseScore[baseScore] * (baseRate + 1) * 20;
            if (inBaseBet == baseBet) {
              return [baseScore, baseRate, i];
            }
          }
          return null;
        };
        _proto.checkColWild = function checkColWild(openResult) {
          var arrColWild = [];
          var AllPosMsg_7 = openResult.openNum[6];
          for (var iRow = 0; iRow < AllPosMsg_7.length; iRow++) {
            var symbolInfo = AllPosMsg_7[iRow];
            if (symbolInfo && symbolInfo.num >= eSymbol.WILD) {
              var AllPosMsg_8 = openResult.openNum[7];
              var symbolInfo_8 = AllPosMsg_8[iRow];
              if (symbolInfo_8 && symbolInfo_8.num >= eSymbol.WILD) {
                arrColWild.push(iRow + 1);
              }
            }
          }
          return arrColWild;
        };
        _proto.checkScatter = function checkScatter(openResult) {
          var iHuCounts = 0;
          for (var _iterator6 = _createForOfIteratorHelperLoose(openResult.openNum), _step6; !(_step6 = _iterator6()).done;) {
            var openNum = _step6.value;
            for (var _iterator7 = _createForOfIteratorHelperLoose(openNum), _step7; !(_step7 = _iterator7()).done;) {
              var posMsg = _step7.value;
              if (posMsg.num == eSymbol.SCATTER) {
                iHuCounts++;
                if (iHuCounts > 2) {
                  return iHuCounts;
                }
              }
            }
          }
          return 0;
        };
        return CoasterUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/CoasterGame', 'chunks:///_virtual/CoasterGame'); 
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