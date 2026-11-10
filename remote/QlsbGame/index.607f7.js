System.register("chunks:///_virtual/Qlsb_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './QlsbUtils.ts', './QlsbDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, sys, Node, Component, CCClass, EventManager, QlsbUtils, eSound;
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
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      eSound = module.eSound;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3163f9YlrlPiYuxZdv+7iEa", "Qlsb_btnEffect", undefined);
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
      var Qlsb_btnEffect = exports('default', (_dec = ccclass("QlsbBtnEffect"), _dec2 = menu("game/QlsbGame/Qlsb_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_btnEffect, _Component);
        function Qlsb_btnEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_skeletonData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));
          _this.Node_effect = null;
          _this.switchAnimation = null;
          return _this;
        }
        var _proto = Qlsb_btnEffect.prototype;
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
            if (_this2.animation > 0 && _this2.skeletonData) {
              if (!_this2.Node_effect) {
                _this2.Node_effect = new Node();
                _this2.node.addChild(_this2.Node_effect);
                var Skeleton = _this2.Node_effect.addComponent(sp.Skeleton);
                Skeleton.loop = true;
                Skeleton.premultipliedAlpha = false;
              }
              _this2.scheduleOnce(function () {
                if (_this2.Node_effect) {
                  QlsbUtils.instance.playOneShot(eSound.featurebuyHover);
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
              QlsbUtils.instance.playOneShot(eSound.featurebuyHover);
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
              QlsbUtils.instance.playOneShot(eSound.featurebuyHover);
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

        _createClass(Qlsb_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return Qlsb_btnEffect;
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
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Qlsb_buyReward.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './QlsbCtrl.ts', './QlsbModel.ts', './QlsbUtils.ts', './Common.ts', './QlsbDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ViewManager, QlsbCtrl, QlsbModel, QlsbUtils, Common, eSound;
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
      QlsbCtrl = module.QlsbCtrl;
    }, function (module) {
      QlsbModel = module.QlsbModel;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eSound = module.eSound;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b8d21xrubxO17hDWlLpd9bl", "Qlsb_buyReward", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_buyReward = exports('default', (_dec = ccclass("QlsbBuyReward"), _dec2 = menu("game/QlsbGame/Qlsb_buyReward"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_buyReward, _Component);
        function Qlsb_buyReward() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Qlsb_buyReward.prototype;
        _proto.onLoad = function onLoad() {
          var curBet = QlsbModel.instance.curBet * 75;
          var inter = Common.numFormatInt(curBet);
          var digit = QlsbUtils.instance.numberFormatD(curBet, 2.0);
          this.Label_gold.string = "" + inter + digit + "K";
        };
        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_cancel":
              {
                QlsbUtils.instance.playOneShot(eSound.featurebuyCancel);
                break;
              }
            case "Button_ok":
              {
                QlsbUtils.instance.playOneShot(eSound.featurebuyStart);
                QlsbCtrl.instance.reqBet(true);
                break;
              }
          }
          ViewManager.instance.closePopView(this.node);
        };
        return Qlsb_buyReward;
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

System.register("chunks:///_virtual/Qlsb_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, tween, v3, UITransform, Component, QlsbModel, eRunStatus;
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
      QlsbModel = module.QlsbModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4b7bbFuAPZEFLsfpzMO7TxR", "Qlsb_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_helpTip = exports('default', (_dec = ccclass("QlsbHelpTip"), _dec2 = menu("game/QlsbGame/Qlsb_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_helpTip, _Component);
        function Qlsb_helpTip() {
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
        var _proto = Qlsb_helpTip.prototype;
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
          var len = this.arrSpriteFrame.length;
          this.curIndex = (this.curIndex + 1) % len;
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
                this.curIndex = len - 3;
                break;
              }
            case 2:
              {
                this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
                Tween.stopAllByTarget(this.Sprite_tip.node);
                this.curIndex = len - 2;
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
                if (QlsbModel.instance.freeStatus != eRunStatus.NONE) {
                  Tween.stopAllByTarget(this.Sprite_tip.node);
                  this.curIndex = len - 1;
                }
                break;
              }
          }
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.getComponent(UITransform).width) {
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
        return Qlsb_helpTip;
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

System.register("chunks:///_virtual/Qlsb_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbCtrl.ts', './QlsbDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, QlsbCtrl, eProto, GameDef, Common;
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
      QlsbCtrl = module.QlsbCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "80b96bqKppOga88qtVD4or0", "Qlsb_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Qlsb_history = exports('default', (_dec = ccclass("QlsbHistory"), _dec2 = menu("game/QlsbGame/Qlsb_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Qlsb_history, _GameDef$BaseView);
        function Qlsb_history() {
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
        var _proto = Qlsb_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, QlsbCtrl.instance);
          QlsbCtrl.instance.reqHistory();
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
          QlsbCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          QlsbCtrl.instance.reqHistory(start);
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
        return Qlsb_history;
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

System.register("chunks:///_virtual/Qlsb_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './QlsbUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, QlsbUtils, Common;
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
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "9e14eU7Mo5KPqrl4OnH+XKZ", "Qlsb_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_historyItem = exports('default', (_dec = ccclass("QlsbHistoryItem"), _dec2 = menu("game/QlsbGame/Qlsb_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_historyItem, _Component);
        function Qlsb_historyItem() {
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
        var _proto = Qlsb_historyItem.prototype;
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
          this.Label_bet.string = QlsbUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + QlsbUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + QlsbUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Qlsb_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Qlsb_historyItem;
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

System.register("chunks:///_virtual/Qlsb_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbCtrl.ts', './QlsbDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, QlsbCtrl, eProto, GameDef, Common;
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
      QlsbCtrl = module.QlsbCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "30885uHgDRPgbl9tCf3E7F0", "Qlsb_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Qlsb_rank = exports('default', (_dec = ccclass("QlsbRank"), _dec2 = menu("game/QlsbGame/Qlsb_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Qlsb_rank, _GameDef$BaseView);
        function Qlsb_rank() {
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
        var _proto = Qlsb_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, QlsbCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          QlsbCtrl.instance.reqRank();
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
        return Qlsb_rank;
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

System.register("chunks:///_virtual/Qlsb_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './QlsbUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, QlsbUtils, Common;
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
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "f8fb6tXqMNBaYZc16Hl42Dq", "Qlsb_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_rankItem = exports('default', (_dec = ccclass("QlsbRankItem"), _dec2 = menu("game/QlsbGame/Qlsb_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_rankItem, _Component);
        function Qlsb_rankItem() {
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
        var _proto = Qlsb_rankItem.prototype;
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
          var digit = QlsbUtils.instance.numberFormatD(tmpdata.Score / 1000, 2.0);
          this.Label_win.string = "" + inter + digit + "K";
        };
        _createClass(Qlsb_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Qlsb_rankItem;
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

System.register("chunks:///_virtual/Qlsb_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts', './QlsbUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, QlsbModel, eAutoRateType, eEvent, QlsbUtils, EventManager;
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
      QlsbModel = module.QlsbModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1dda9uK4MJJL51Li2VTpLQ6", "Qlsb_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_ScrollView = exports('default', (_dec = ccclass("QlsbScrollView"), _dec2 = menu("game/QlsbGame/Qlsb_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_ScrollView, _Component);
        function Qlsb_ScrollView() {
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
        var _proto = Qlsb_ScrollView.prototype;
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
                this._curIndex = QlsbModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = QlsbModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = QlsbModel.instance._curIndex_baseBet;
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

              //                // itemNode.color = itemNode.scale > 1.25 ? color(255, 255, 255) : color(100, 120, 180);
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
                var num = index == 0 ? 0.1 : index * 0.5;
                var strNum = QlsbUtils.instance.numberFormat(num, 2);
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
                var _strNum = QlsbUtils.instance.numberFormat((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);

                //                // let strNum = Math.floor((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20) + "K";
                return _strNum + "K";
              }
          }
        };
        _proto.getValue = function getValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                var num = index == 0 ? 0.1 : index * 0.5;
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
                return (baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20;
              }
          }
        };
        return Qlsb_ScrollView;
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

System.register("chunks:///_virtual/Qlsb_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, QlsbModel, eEvent, ViewManager, EventManager, Common;
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
      QlsbModel = module.QlsbModel;
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
      cclegacy._RF.push({}, "8c442VwQUJHMZJwCfQloVKm", "Qlsb_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Qlsb_setAuto = exports('default', (_dec = ccclass("QlsbSetAuto"), _dec2 = menu("game/QlsbGame/Qlsb_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_setAuto, _Component);
        function Qlsb_setAuto() {
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
        var _proto = Qlsb_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // if (QlsbModel.instance.selAutoIndex != -1) {
          //        //     this.selNode = this.contentRoot.getChildByName(`Node_item_${QlsbModel.instance.selAutoIndex}`);
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
                  QlsbModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[QlsbModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = QlsbModel.instance.curBet * 1000 * times;
                  //                    // if (QlsbModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(QlsbModel.instance.curBalance / (QlsbModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(QlsbDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !QlsbUtils.instance.isChangeOrientation());
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
        return Qlsb_setAuto;
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

System.register("chunks:///_virtual/Qlsb_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts', './ViewManager.ts', './EventManager.ts', './QlsbUtils.ts', './Qlsb_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, QlsbModel, eEvent, eAutoRateType, ViewManager, EventManager, QlsbUtils, Qlsb_ScrollView, Common;
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
      QlsbModel = module.QlsbModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Qlsb_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "39fe5d2N9xNerE1CRtrmR+y", "Qlsb_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Qlsb_setBase = exports('default', (_dec = ccclass("QlsbSetBase"), _dec2 = menu("game/QlsbGame/Qlsb_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_setBase, _Component);
        function Qlsb_setBase() {
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
        var _proto = Qlsb_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(QlsbModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (QlsbModel.instance.curTotalWin > 0) {
            this.Label_win.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = QlsbModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = QlsbModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = QlsbModel.instance._curIndex_baseBet;
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
            if (QlsbModel.instance.curTotalWin > 0) {
              this.Label_win.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = QlsbModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            QlsbModel.instance.curTotalWin += disWin;
            if (QlsbModel.instance.curTotalWin > destWin) {
              QlsbModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Qlsb_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Qlsb_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Qlsb_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Qlsb_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Qlsb_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Qlsb_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Qlsb_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                QlsbModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                QlsbModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                QlsbModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Qlsb_setBase;
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

System.register("chunks:///_virtual/Qlsb_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "8924a2UJQlPu7V0/nMS4w7n", "Qlsb_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Qlsb_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts', './EventManager.ts', './QlsbUtils.ts', './Qlsb_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, UITransform, v3, UIOpacity, tween, Component, QlsbModel, eRunStatus, eEvent, eConstDef, eZindex, eSymbol, eSound, EventManager, QlsbUtils, Qlsb_symbolItem;
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
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      QlsbModel = module.QlsbModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eConstDef = module.eConstDef;
      eZindex = module.eZindex;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Qlsb_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "e177bEN+GJHspdzf4l2gMJQ", "Qlsb_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_symbol = exports('default', (_dec = ccclass("QlsbSymbol"), _dec2 = menu("game/QlsbGame/Qlsb_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_symbol, _Component);
        function Qlsb_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "maxIndex", _descriptor, _assertThisInitialized(_this));
          _this._speed = 0;
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor2, _assertThisInitialized(_this));
          _this._symbolList = [];
          _this._curLength = 0;
          _this._iCol = 0;
          _this.isBreak = false;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Qlsb_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onSymbolBreak = function onSymbolBreak(nodeName, pos, length) {
          var startIndex = -1;
          for (var i = 0; i < this._symbolList.length; i++) {
            if (this._symbolList[i].node.name == nodeName) {
              startIndex = i;
              this._symbolList.splice(i, 1);
              break;
            }
          }
          if (startIndex == -1) {
            return;
          }
          var toLength = 0;
          toLength = (pos - eConstDef.cSymbolStartY) / eConstDef.cSymbolH - length / 2;
          for (var _i = 0; _i < length; _i++) {
            var newItem = instantiate(this.Node_itemTemp);
            this.itemTag = (this.itemTag + 1) % 2000;
            newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
            this.node.parent.addChild(newItem);

            //            //POSITON
            var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);

            //            //
            var itemInfo = {
              remove: false,
              count: 1,
              type: 0,
              num: eSymbol.WILD
            };
            var com = newItem.getComponent(Qlsb_symbolItem);
            com.initItem(itemInfo, this._iCol);
            newItem.getComponent(UITransform).priority = eZindex.iconWin + 300;
            newItem.scale = v3(0, 0, 0);
            newItem.getComponent(UIOpacity).opacity = 0;
            tween(newItem.getComponent(UIOpacity)).delay(0.35).to(0.35, {
              opacity: 255
            }).start();
            tween(newItem).delay(0.35).to(0.25, {
              scale: v3(1.2, 1.2, 1.2)
            }, {
              easing: "cubicIn"
            }).to(0.15, {
              scale: v3(0.9, 0.9, 0.9)
            }, {
              easing: "cubicOut"
            }).to(0.075, {
              scale: v3(0.95, 0.95, 0.95)
            }, {
              easing: "cubicOut"
            }).start();
            if (startIndex == 0) {
              this._symbolList.unshift(com);
            } else {
              this._symbolList.splice(startIndex, 0, com);
            }
            startIndex++;
            toLength++;
          }
        };
        _proto.getResult = function getResult(openResult) {
          var _resultInfoList = [];
          var _curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            var leftLength = this.maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //            //获取结果
            var itemInfo = null;
            if (this._iCol == 0) {
              var InitPosMsg = openResult.openNum[i + 1];
              itemInfo = InitPosMsg[InitPosMsg.length - 1];
            } else {
              itemInfo = openResult.openNum[this._iCol - 1][i];
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.count;
          }
          gts.Debug.Log(JSON.stringify(_resultInfoList));
          return _resultInfoList;
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symLen = this._iCol == 1 || this._iCol == 6 ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1;
            var symbol = Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              num: symbol,
              //QlsbDef.eSymbol.A,
              count: symLen,
              type: symLen > 1 ? Math.floor(Math.random() * 3) : 0,
              remove: false
            };

            // itemInfo.count = Math.floor(Math.random() * 4) + 1;
            if (itemInfo.num == eSymbol.WILD) {
              itemInfo.count = 1;
            }
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          var offsetY = (toLength + itemInfo.count / 2) * eConstDef.cSymbolH;
          newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);

          //        //
          var com = newItem.getComponent(Qlsb_symbolItem);
          com.initItem(itemInfo, this._iCol, this._runStatus);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += itemInfo.count;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i]);
          }
          for (var _i2 = 0; _i2 < this._symbolList.length; _i2++) {
            var symbolNode = this._symbolList[_i2].node;
            var toPos = symbolNode.getPosition().y;
            symbolNode.setPosition(symbolNode.position.x, symbolNode.position.y + 525);
            tween(symbolNode).delay(0.075 * (this._iCol - 1)).to(0.2, {
              position: v3(symbolNode.position.x, toPos)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(symbolNode.position.x, toPos + 15)
            }, {
              easing: "cubicIn"
            }).to(0.05, {
              position: v3(symbolNode.position.x, toPos)
            }, {
              easing: "cubicOut"
            }).start();
          }
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doStart = function doStart(startDelay, stopDelay) {
          var _this2 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //定时停止
            _this2.scheduleOnce(function () {
              QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE ? function () {
                _this2._runStatus = eRunStatus.STOP;
                _this2._speed = 2500;
              }() : function () {
                _this2._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this2._resultInfoList = _this2.getResult(QlsbModel.instance.betResult.OpenNums[0]);

            //            //
            _this2._runStatus = eRunStatus.START;
            _this2._speed = eConstDef.CSpeedStart;
            var scheduleUpdate = function scheduleUpdate(dt) {
              switch (_this2._runStatus) {
                case eRunStatus.NONE:
                case eRunStatus.CLEAR:
                  {
                    if (_this2._curLength > _this2.maxIndex) {
                      _this2._curLength = _this2.maxIndex;
                    }
                    return;
                  }
                case eRunStatus.START:
                  {
                    _this2._speed += eConstDef.CSpeedAdd;
                    if (_this2._speed >= eConstDef.cSpeedMax) {
                      _this2._speed = eConstDef.cSpeedMax;
                      _this2._runStatus = eRunStatus.RUNNING;
                      if (!QlsbModel.instance.isQuickStop) {
                        QlsbUtils.instance.playOneShot(eSound.spinReelActiveLoop);
                      }
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this2._speed -= eConstDef.CSpeedReduse;
                    if (_this2._speed < eConstDef.cSpeedMin) {
                      _this2._speed = eConstDef.cSpeedMin;
                      _this2._runStatus = eRunStatus.STOP;
                    }
                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this2._symbolList.length - 1; i >= 0; i--) {
                      var symbol = _this2._symbolList[i];
                      curLength += symbol.itemInfo.count;
                      if (curLength > _this2.maxIndex) {
                        var _symbol = _this2._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    _this2._runStatus = eRunStatus.CLEAR;
                    _this2.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator, _step, _symbol2, result, curNum, endNum;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            arrPro = [];
                            for (_iterator = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step = _iterator()).done;) {
                              _symbol2 = _step.value;
                              _symbol2.updateZIndex(_this2._runStatus);
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 4;
                            return Promise.all(arrPro);
                          case 4:
                            if (QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE) {
                              QlsbUtils.instance.playOneShot(eSound.spinReelstopQuick);
                            } else {
                              QlsbUtils.instance.playOneShot(eSound.spinReelstopNormal);
                            }
                            if (QlsbModel.instance.specialStartCol > 0 && (_this2._iCol == 0 || _this2._iCol >= QlsbModel.instance.specialStartCol)) {
                              EventManager.instance.emit(eEvent.onSetMask, _this2._iCol, _this2.node.getPosition().x);
                            }
                            _this2.unschedule(scheduleUpdate);
                            result = QlsbModel.instance.betResult.OpenNums[0];
                            curNum = QlsbModel.instance.curSystemRate == 1 ? 0 : QlsbModel.instance.curSystemRate;
                            endNum = QlsbModel.instance.curSystemRate * result.openNum[_this2._iCol - 1].length;
                            EventManager.instance.emit(eEvent.updateSystemRate, curNum, endNum);
                            QlsbModel.instance.curSystemRate = endNum;
                            resolve();
                          case 13:
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
              for (var _i3 = _this2._symbolList.length - 1; _i3 >= 0; _i3--) {
                var _symbol3 = _this2._symbolList[_i3];
                if (!_symbol3.doRunning(offset)) {
                  _this2._symbolList.splice(_i3, 1);
                  _symbol3.node.destroyFromParent();
                }
              }
              if (isSide) {
                var result = _this2._runStatus == eRunStatus.STOP && _this2._resultInfoList.length > 0 ? _this2._resultInfoList.shift() : null;
                _this2.addNewItem(result);
              }
            };
            _this2.scheduleOnce(function () {
              QlsbUtils.instance.playOneShot(eSound.spinReelActive);
              _this2.schedule(scheduleUpdate);
            }, startDelay);
          });
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(Qlsb_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.remove) {
              Qlsb_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator2, _step2, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Qlsb_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator2 = _createForOfIteratorHelperLoose(this._symbolList); !(_step2 = _iterator2()).done;) {
                    symbol = _step2.value;
                    if (symbol.itemInfo.remove) {
                      arrPro.push(symbol.doClear());
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doClear() {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        _proto.doScatterCollect = /*#__PURE__*/function () {
          var _doScatterCollect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(root, wPos) {
            var arrPro, _iterator3, _step3, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  Qlsb_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator3 = _createForOfIteratorHelperLoose(this._symbolList); !(_step3 = _iterator3()).done;) {
                    symbol = _step3.value;
                    if (symbol.itemInfo.num > eSymbol.SCATTER && symbol.itemInfo.num < eSymbol.SCATTER_DOUBLE) {
                      arrPro.push(symbol.doScatterCollect(root, wPos));
                    }
                  }
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doScatterCollect(_x, _x2) {
            return _doScatterCollect.apply(this, arguments);
          }
          return doScatterCollect;
        }();
        _proto.doDropFront = /*#__PURE__*/function () {
          var _doDropFront = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(nextReult, dropDelay, isFront) {
            var _nextResultInfoList, _curLength, dropCounts, iRow, symbolItem, _iRow, _symbolItem, arrPro, toLength, _iRow2, _symbolItem2, nextInfo;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  if (isFront === void 0) {
                    isFront = true;
                  }
                  _nextResultInfoList = this.getResult(nextReult);
                  _curLength = 0;
                  dropCounts = 0;
                  if (isFront) {
                    //        //remove
                    for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                      symbolItem = this._symbolList[iRow];
                      if (symbolItem.isClear) {
                        symbolItem.node.destroyFromParent();
                        this._symbolList.splice(iRow, 1);
                        this._curLength -= symbolItem.itemInfo.count;
                      }
                    }
                  } else {
                    for (_iRow = this._symbolList.length - 1; _iRow >= 0; _iRow--) {
                      _symbolItem = this._symbolList[_iRow];
                      _curLength += _symbolItem.itemInfo.count;
                    }
                  }

                  //////////////////////////////////add and drop
                  arrPro = [];
                  toLength = this.maxIndex;
                  _iRow2 = 0;
                case 9:
                  if (!(_iRow2 < _nextResultInfoList.length)) {
                    _context4.next = 25;
                    break;
                  }
                  _symbolItem2 = null;
                  if (!isFront) {
                    _context4.next = 15;
                    break;
                  }
                  if (_iRow2 < this._symbolList.length) {
                    _symbolItem2 = this._symbolList[_iRow2];
                    _symbolItem2.itemInfo = _nextResultInfoList[_iRow2];
                    if (_symbolItem2.isChange) {
                      _symbolItem2.doEndChange(_symbolItem2.itemInfo);
                    }
                  }
                  _context4.next = 21;
                  break;
                case 15:
                  if (!(_iRow2 >= this._symbolList.length)) {
                    _context4.next = 21;
                    break;
                  }
                  nextInfo = _nextResultInfoList[_iRow2];
                  _symbolItem2 = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem2) {
                    _context4.next = 20;
                    break;
                  }
                  return _context4.abrupt("continue", 22);
                case 20:
                  toLength += _symbolItem2.itemInfo.count;
                case 21:
                  if (_symbolItem2) {
                    arrPro.push(_symbolItem2.doDrop(_curLength, dropDelay * dropCounts));
                    _curLength += _symbolItem2.itemInfo.count;
                    dropCounts++;
                  }
                case 22:
                  _iRow2++;
                  _context4.next = 9;
                  break;
                case 25:
                  return _context4.abrupt("return", Promise.all(arrPro));
                case 26:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function doDropFront(_x3, _x4, _x5) {
            return _doDropFront.apply(this, arguments);
          }
          return doDropFront;
        }();
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(nextReult) {
            var _nextResultInfoList, iRow, symbolItem, _curLength, arrPro, toLength, _iRow3, _symbolItem3, nextInfo;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _nextResultInfoList = this.getResult(nextReult); //        //remove
                  for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                    symbolItem = this._symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._symbolList.splice(iRow, 1);
                      this._curLength -= symbolItem.itemInfo.count;
                    }
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  _iRow3 = 0;
                case 6:
                  if (!(_iRow3 < _nextResultInfoList.length)) {
                    _context5.next = 24;
                    break;
                  }
                  _symbolItem3 = null;
                  if (!(_iRow3 < this._symbolList.length)) {
                    _context5.next = 14;
                    break;
                  }
                  _symbolItem3 = this._symbolList[_iRow3];
                  _symbolItem3.itemInfo = _nextResultInfoList[_iRow3];
                  if (_symbolItem3.isChange) {
                    _symbolItem3.doEndChange(_symbolItem3.itemInfo);
                  }
                  _context5.next = 19;
                  break;
                case 14:
                  nextInfo = _nextResultInfoList[_iRow3];
                  _symbolItem3 = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem3) {
                    _context5.next = 18;
                    break;
                  }
                  return _context5.abrupt("continue", 21);
                case 18:
                  toLength += _symbolItem3.itemInfo.count;
                case 19:
                  arrPro.push(_symbolItem3.doDrop(_curLength));
                  _curLength += _symbolItem3.itemInfo.count;
                case 21:
                  _iRow3++;
                  _context5.next = 6;
                  break;
                case 24:
                  return _context5.abrupt("return", Promise.all(arrPro));
                case 25:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function doDrop(_x6) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        _proto.doScatterAni = function doScatterAni(arrAni) {
          if (!arrAni || arrAni.length == 0) {
            return;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            symbol.doScatterAni(arrAni);
          }
        };
        _proto.doScatterEffect = function doScatterEffect() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            for (var _iterator4 = _createForOfIteratorHelperLoose(_this3._symbolList), _step4; !(_step4 = _iterator4()).done;) {
              var symbol = _step4.value;
              switch (symbol.itemInfo.num) {
                case eSymbol.SCATTER:
                  {
                    symbol.doScatterAni([{
                      strAni: "win",
                      isLoop: true
                    }]);
                    break;
                  }
                case eSymbol.WILD:
                  {
                    symbol.updateZIndex(eRunStatus.DROP);
                    break;
                  }
              }
            }
            _this3.scheduleOnce(function () {
              resolve();
            }, 3.0);
          });
        };
        return Qlsb_symbol;
      }(Component), _class3.rewardCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_itemTemp", [_dec3], {
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

System.register("chunks:///_virtual/Qlsb_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "5e2d58oDA1DEKqoJ45g5+uT", "Qlsb_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_symbolEffectRoot = exports('default', (_dec = ccclass("QlsbSymbolEffectRoot"), _dec2 = menu("game/QlsbGame/Qlsb_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_symbolEffectRoot, _Component);
        function Qlsb_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Qlsb_symbolEffectRoot.prototype;
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
        return Qlsb_symbolEffectRoot;
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

System.register("chunks:///_virtual/Qlsb_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbDef.ts', './QlsbUtils.ts', './Qlsb_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UITransform, instantiate, sp, UIOpacity, Component, eSymbol, QlsbUtils, Qlsb_symbolItem;
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
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Qlsb_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "b80cfsJDPNN4bQ/1zadi6dz", "Qlsb_symbolInfo", undefined);
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
      var eRate = [[30, 40, 50, 80],
      //SHITOU
      [20, 25, 30, 50],
      //CHANCHU
      [10, 25, 30, 40],
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
      var Qlsb_symbolInfo = exports('default', (_dec = ccclass("QlsbSymbolInfo"), _dec2 = menu("game/QlsbGame/Qlsb_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_symbolInfo, _Component);
        function Qlsb_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          //    // @property(Node)
          //    // Node_rateInfo: Node = null;
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Qlsb_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this2.mask.active = false;
              _this2.Node_item.active = false;
              _this2.Node_info.active = false;
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {
          //        // EventManager.instance.on(QlsbDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
          //        // EventManager.instance.off(QlsbDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          if (this.Node_info.active) {
            // for (const childNode of this.Node_item.children) {
            //     childNode.name == "Node_symbol" ? childNode.destroyFromParent() : null;
            // }

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
          pos.x = pos.x - 150 < -372 ? pos.x + 150 : pos.x + 150 > 372 ? pos.x - 150 : pos.x;
          this.Node_info.position = pos;

          // for (const childNode of this.Node_item.children) {
          //     childNode.name == "Node_symbol" ? childNode.destroyFromParent() : null;
          // }
          this.Node_item.destroyAllChildren();
          var newSymbol = instantiate(symbolNode);
          newSymbol.position = v3(0);
          newSymbol.scale = v3(1.25, 1.25, 1.25);
          // newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          newSymbol.off("click");

          // let Sprite_frame = newSymbol.getChildByName("Sprite_frame");
          // if (Sprite_frame) {
          //     Sprite_frame.destroyFromParent();
          // }

          // this.Node_item.getComponent(Qlsb_symbolItem).initItem(symbol);

          // this.Node_info.getComponent(UITransform).width = 259;
          // this.Node_info.getComponent(UITransform).height = 146;

          switch (symbol.num) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 250;

                // this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                // this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                // this.Node_item.active = false;

                this.Node_icon.active = false;
                this.Label_hu.node.active = true;
                this.Label_wild.node.active = false;
                var Node_symbol = newSymbol.getChildByName("Node_symbol");
                var itemSpine = Node_symbol.getComponent(sp.Skeleton);
                itemSpine.setAnimation(0, QlsbUtils.instance.getSymbolAniName(eSymbol.SCATTER, 1, true), true);
                break;
              }
            case eSymbol.WILD:
              {
                // this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.CUSTOM;
                // this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 250;
                this.Node_item.getComponent(UITransform).priority = 1;
                this.Node_icon.getComponent(UITransform).priority = 0;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;
                var _Node_symbol = newSymbol.getChildByName("Node_symbol");
                var _itemSpine = _Node_symbol.getComponent(sp.Skeleton);
                _itemSpine.setAnimation(0, QlsbUtils.instance.getSymbolAniName(eSymbol.WILD, 1, true), true);
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.num);
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;

                // this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                // this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[symbol.count - 1];

                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 215 + (symbol.count - 1) * 106 * 1.25;
                var arrRate = eRate[symbol.num - eSymbol.TOAD];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
                newSymbol.getComponent(Qlsb_symbolItem).updateIcon(symbol.num, symbol.count, true);
                break;
              }
          }
          // this.Node_icon.getComponent(Widget).updateAlignment();
          // this.Node_icon.getComponent(Layout).updateLayout();

          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.25, 0.25, 0.25);
          tween(this.Node_info).to(0.2, {
            scale: v3(1, 1, 1)
          }).to(0.1, {
            scale: v3(0.8, 0.8, 0.8)
          }).start();
        };
        return Qlsb_symbolInfo;
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

System.register("chunks:///_virtual/Qlsb_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbModel.ts', './QlsbDef.ts', './EventManager.ts', './QlsbUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, UITransform, Sprite, v3, isValid, tween, UIOpacity, Tween, find, instantiate, Component, QlsbModel, eRunStatus, eSymbol, eConstDef, eSound, eZindex, eEvent, EventManager, QlsbUtils;
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
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      v3 = module.v3;
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      find = module.find;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      QlsbModel = module.QlsbModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "ab02bZ9Io9FTbVC5oJAcZ2J", "Qlsb_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_symbolItem = exports('default', (_dec = ccclass("QlsbSymbolItem"), _dec2 = menu("game/QlsbGame/Qlsb_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_symbolItem, _Component);
        function Qlsb_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._iCol = 0;
          _this.tag = 0;
          _this.status = void 0;
          //    // update (dt) {}
          //    ///
          _this._runStatus = eRunStatus.NONE;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          _this.isChange = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = Qlsb_symbolItem.prototype;
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.initItem = function initItem(info, iCol, _runStatus) {
          if (iCol === void 0) {
            iCol = 0;
          }
          if (_runStatus === void 0) {
            _runStatus = eRunStatus.NONE;
          }
          this._iCol = iCol;
          this.itemInfo = info;
          this._runStatus = _runStatus;
          this.updateSymbol(this.itemInfo.remove);
        };
        _proto.addEffectKuang = function addEffectKuang(isWild) {
          var _this2 = this;
          if (isWild === void 0) {
            isWild = false;
          }
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

            _this2.scheduleOnce(function () {
              itemSpine.skeletonData = QlsbUtils.instance.getSkeletonData("kuang_effect");
              if (!isWild) {
                itemSpine.setAnimation(0, "intro" + _this2.itemInfo.count, false);
                itemSpine.addAnimation(0, "idle" + _this2.itemInfo.count, true);
              } else {
                itemSpine.setAnimation(0, "wild_change" + _this2.itemInfo.count, false);
              }
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                resolve();
              });
            });
            _this2.node.addChild(newNode);
            var Node_symbol = _this2.node.getChildByName("Node_symbol");
            if (isWild) {
              newNode.getComponent(UITransform).priority = 10;
              Node_symbol.getComponent(UITransform).priority = 5;
            } else {
              newNode.getComponent(UITransform).priority = 5;
              Node_symbol.getComponent(UITransform).priority = 10;
            }
            _this2._spineEffect_kuang = itemSpine;
          });
        };
        _proto.addEffectKuangLight = function addEffectKuangLight(isLoop) {
          var _this3 = this;
          if (isLoop === void 0) {
            isLoop = true;
          }
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = QlsbUtils.instance.getSkeletonData("kuang_light");
            itemSpine.setAnimation(0, "changelight_lv" + _this3.itemInfo.count, isLoop);
            //            // //图标变化完成后
            //            // itemSpine.addAnimation(0, `lv${this.itemInfo.Length}`, true);
            if (isLoop) {
              resolve();
            } else {
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                resolve();
              });
            }
            newNode.getComponent(UITransform).priority = 0;
            _this3.node.addChild(newNode);
            var Node_symbol = _this3.node.getChildByName("Node_symbol");
            Node_symbol.getComponent(UITransform).priority = 10;
            _this3._spineEffect_kuangLight = itemSpine;
          });
        };
        _proto.updateIcon = function updateIcon(Sym, length, isSpine, isIdle) {
          var _this4 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        //test
          //        // isSpine = false;
          isSpine = Sym > eSymbol.TEN ? true : isSpine;
          isIdle = this._runStatus != eRunStatus.RUNNING;

          //        //icon
          var Node_symbol = this.node.getChildByName("Node_symbol");
          Node_symbol.setPosition(0, 0);
          if (QlsbModel.instance.freeStatus != eRunStatus.NONE && (Sym == eSymbol.SCATTER_SPINS1 || Sym == eSymbol.SCATTER_SPINS2 || Sym == eSymbol.SCATTER_SPINS3 || Sym == eSymbol.SCATTER_DOUBLE)) {
            isSpine = false;
            var itemSpine = Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.addSpecialScatter(!isIdle);
            return;
          }
          if (!isSpine) {
            var _itemSpine = Node_symbol.getComponent(sp.Skeleton);
            if (_itemSpine) {
              _itemSpine.enabled = false;
              _itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = QlsbUtils.instance.getItemSymbolIcon(Sym, isIdle);
              var itemSprite = Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;

              //                // gts.Debug.Log(`=updateIcon=Sym=${Sym}=length=${length}=spriteFrame=${itemSymbol.name}`);
            });
          } else {
            var itemSprite = Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = QlsbUtils.instance.getSkeletonData(Sym);
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, QlsbUtils.instance.getSymbolAniName(Sym, length, isIdle), false);
              if (Sym == eSymbol.WILD) {
                itemSpine.addAnimation(0, "idle", true);
              }
            });
          }

          //        //tag update
          Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.WILD:
              {
                Node_symbol.getComponent(UITransform).width = eConstDef.cSymbolW;
                Node_symbol.getComponent(UITransform).height = length * eConstDef.cSymbolH;
                Node_symbol.scale = v3(0.7, 0.7, 0.7);
                if (isIdle) {
                  QlsbUtils.instance.playOneShot(eSound.symWild);
                }
                break;
              }
            case eSymbol.SCATTER:
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
              {
                Node_symbol.scale = v3(2, 2, 2);
                var addScatterlight = function addScatterlight() {
                  var newNode = new Node("newNode");
                  newNode.active = true;
                  var itemSpine = newNode.addComponent(sp.Skeleton);
                  itemSpine.premultipliedAlpha = false;
                  itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  itemSpine.skeletonData = QlsbUtils.instance.getSkeletonData("scatterlight");
                  itemSpine.setAnimation(0, "idle", true);
                  newNode.position = v3(0, 0, 0);
                  _this4.node.addChild(newNode);
                  Node_symbol.getComponent(UITransform).priority = 1;
                  newNode.getComponent(UITransform).priority = 0;
                  newNode.scale = v3(0.75, 0.75, 0.75);
                };
                addScatterlight();
                break;
              }
            default:
              {
                Node_symbol.getComponent(UITransform).width = eConstDef.cSymbolW;
                Node_symbol.getComponent(UITransform).height = eConstDef.cSymbolH;
                if (isIdle) {
                  if (Sym < eSymbol.A) {
                    Node_symbol.scale = v3(0.7, 0.7, 0.7);
                  } else {
                    Node_symbol.scale = v3(0.75, 0.75, 0.75);
                  }
                } else {
                  Node_symbol.scale = v3(1.25, 1.25, 1.25);
                }
                if (isSpine) {
                  Node_symbol.scale = v3(1, 1, 1);
                }
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length, isIdle) {
          if (isIdle === void 0) {
            isIdle = false;
          }
          isIdle = this._runStatus != eRunStatus.RUNNING;
          var fBg = this.node.getComponent(Sprite);
          switch (Sym) {
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
            case eSymbol.WILD:
              {
                fBg.spriteFrame = null;
                return;
              }
          }

          // isIdle = this.status == QlsbDef.eRunStatus.RUNNING;
          //box
          fBg.spriteFrame = QlsbUtils.instance.getItemSymbolIconBox(Sym, length, isIdle);
          this.node.getComponent(UITransform).width = eConstDef.cSymbolW;
          this.node.getComponent(UITransform).height = length * eConstDef.cSymbolH;
        };
        _proto.updateFrame = function updateFrame(rim, length, isIdle) {
          if (isIdle === void 0) {
            isIdle = false;
          }
          isIdle = this._runStatus != eRunStatus.RUNNING;

          //        //frame
          if (rim == 0) {
            var Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!isValid(Sprite_frame, true)) {
              return;
            }
            tween(Sprite_frame.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).call(function () {
              Sprite_frame.destroyFromParent();
            }).start();
          } else {
            var _Sprite_frame = this.node.getChildByName("Sprite_frame");
            if (!_Sprite_frame) {
              _Sprite_frame = new Node("Sprite_frame");
              _Sprite_frame.addComponent(UITransform);
              _Sprite_frame.addComponent(UIOpacity);
              this.node.addChild(_Sprite_frame);
              var spr = _Sprite_frame.addComponent(Sprite);
              spr.type = Sprite.Type.SLICED;
              spr.sizeMode = Sprite.SizeMode.CUSTOM;
            }
            _Sprite_frame.getComponent(UITransform).width = this.node.getComponent(UITransform).width;
            _Sprite_frame.getComponent(UITransform).height = this.node.getComponent(UITransform).height;
            _Sprite_frame.getComponent(UIOpacity).opacity = 0;
            tween(_Sprite_frame.getComponent(UIOpacity)).to(0.15, {
              opacity: 255
            }).start();
            _Sprite_frame.getComponent(Sprite).spriteFrame = QlsbUtils.instance.getItemSymbolIconFrame(rim, length, isIdle);

            //            // gts.Debug.Log(`=updateFrame=Sym=rim=${rim}=spriteFrame=${Sprite_frame.getComponent(Sprite).spriteFrame.name}`);
          }
        };

        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateBox(this.itemInfo.num, this.itemInfo.count, this._runStatus == eRunStatus.RUNNING);
          this.updateFrame(this.itemInfo.type, this.itemInfo.count, isIdle);
          this.updateIcon(this.itemInfo.num, this.itemInfo.count, isSpine, isIdle);
          this.updateZIndex(this._runStatus);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.num) {
            case eSymbol.SCATTER:
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
              {
                _zIndex = QlsbModel.instance.specialStartCol > 0 ? 2 * eZindex.SPECIAL : eZindex.icon_scatter;
                break;
              }
            default:
              {
                _zIndex = eZindex.icon;
                break;
              }
          }
          switch (runStatus) {
            case eRunStatus.NONE:
            case eRunStatus.DROP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.RUNNING:
            case eRunStatus.STOPPING:
              {
                _zIndex = QlsbModel.instance.specialStartCol > 0 && this._iCol == QlsbModel.instance.curSpecialStartCol + 1 ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
            case eRunStatus.END:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                if (this.itemInfo.num >= eSymbol.SCATTER && this._iCol - 1 <= QlsbModel.instance.curSpecialStartCol) {
                  this.node.getComponent(UITransform).priority = _zIndex;
                }
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (QlsbModel.instance.gameStatus != eRunStatus.NONE || QlsbModel.instance.isAuto) {
            return;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var pos = Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.node, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.setPosition(this.node.position.x, this.node.position.y - offset);
          var posSide = -208 - 52 - this.itemInfo.count / 2 * 104;
          if (this.node.getPosition().y <= posSide) {
            ret = false;
          }
          this.updateZIndex(eRunStatus.RUNNING);
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this5 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            var pos_0 = _this5.node.getPosition().y + 10 + offset;
            var pos_1 = _this5.node.getPosition().y + offset;
            tween(_this5.node).to(0.15, {
              position: v3(_this5.node.position.x, pos_0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this5.node.position.x, pos_1)
            }, {
              easing: "cubicIn"
            }).call(function () {
              _this5.updateZIndex(eRunStatus.STOP);
              resolve();
            }).start();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (_this6.itemInfo.remove) {
              if (_this6.itemInfo.count > 1 && _this6.itemInfo.type == 2) {
                //                    //分解为多个wild
                _this6.updateZIndex(eRunStatus.CLEAR);
                _this6.scheduleOnce(function () {
                  _this6.addEffectKuang();
                  _this6.scheduleOnce(function () {
                    resolve();

                    // let Node_symbol = this.node.getChildByName("Node_symbol");
                    // Node_symbol.getComponent(UIOpacity).opacity = 0;

                    // tween(this.node)
                    //     .delay(0.5)
                    //     .call(() => {
                    //         QlsbUtils.instance.playOneShot(QlsbDef.eSound.symWildTransform02);
                    //     })
                    //     .delay(0.5)
                    //     .removeSelf()
                    //     .start();

                    // QlsbUtils.instance.playOneShot(QlsbDef.eSound.symWildTransform01);

                    // EventManager.instance.emit(
                    //     QlsbDef.eEvent.onSymbolBreak + this._iCol,
                    //     this.node.name,
                    //     this.node.getPosition().y,
                    //     this.itemInfo.count
                    // );
                  }, 0.25);
                }, 0.0 + delay);
              } else {
                _this6.updateSymbol(true, false);
                _this6.updateZIndex(eRunStatus.CLEAR);
                _this6.scheduleOnce(function () {
                  _this6.addEffectKuang();
                  _this6.scheduleOnce(resolve, 0.25);
                }, 0.0 + delay);
              }
            } else {
              _this6.node.getComponent(UITransform).priority = _this6.itemInfo.num < eSymbol.SCATTER ? eZindex.icon : eZindex.icon_scatter;
              resolve();
            }
          });
        };
        _proto.doStartChange = function doStartChange(isWild) {
          var _this7 = this;
          if (isWild === void 0) {
            isWild = false;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          if (!isWild) {
            this.isChange = true;

            // QlsbUtils.instance.playOneShot(QlsbDef.eSound.frameChange);
            tween(Node_symbol).repeatForever(tween(Node_symbol).delay(0.05).call(function () {
              var sym = Math.floor(Math.random() * eSymbol.Q) + 3;
              _this7.updateBox(sym, _this7.itemInfo.count);
              _this7.updateIcon(sym, _this7.itemInfo.count);
            })).start();
            return;
          }
        };
        _proto.doEndChange = function doEndChange(newItemInfo) {
          var _this8 = this;
          if (this.isChange) {
            this.scheduleOnce(function () {
              var Node_symbol = _this8.node.getChildByName("Node_symbol");
              Tween.stopAllByTarget(Node_symbol);
              QlsbUtils.instance.playOneShot(eSound.fsLoadingTrans);
              _this8.scheduleOnce(function () {
                _this8.updateBox(newItemInfo.num, _this8.itemInfo.count);
                _this8.updateIcon(newItemInfo.num, newItemInfo.count);
              });
              _this8.node.getComponent(UITransform).priority = eZindex.icon;
              _this8.isChange = false;
              if (_this8._spineEffect_kuangLight) {
                _this8._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
                _this8._spineEffect_kuangLight.setAnimation(0, "lv" + _this8.itemInfo.count, false);
                _this8._spineEffect_kuangLight.setCompleteListener(function () {
                  _this8._spineEffect_kuangLight.setCompleteListener(null);
                  _this8._spineEffect_kuangLight.node.destroyFromParent();
                  _this8._spineEffect_kuangLight = null;
                });
              }

              //替换框
              _this8.itemInfo.type = 2;
              _this8.updateFrame(_this8.itemInfo.type, _this8.itemInfo.count);
            });
          }
        };
        _proto.doClear = function doClear() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            if (_this9.itemInfo.remove) {
              if (_this9.itemInfo.count > 1 && _this9.itemInfo.type == 2) {
                //                    //分解为多个wild
                _this9.updateZIndex(eRunStatus.CLEAR);
                _this9.addEffectKuang(true);
                _this9.scheduleOnce(function () {
                  var Node_symbol = _this9.node.getChildByName("Node_symbol");
                  Node_symbol.getComponent(UIOpacity).opacity = 0;
                  tween(_this9.node).delay(0.5).call(function () {
                    QlsbUtils.instance.playOneShot(eSound.symWildTransform02);
                    resolve();
                  }).delay(0.5).removeSelf().start();
                  QlsbUtils.instance.playOneShot(eSound.symWildTransform01);
                  EventManager.instance.emit(eEvent.onSymbolBreak + _this9._iCol, _this9.node.name, _this9.node.getPosition().y, _this9.itemInfo.count);
                }, 0.25);
              } else if (_this9.itemInfo.type != 0 && _this9.itemInfo.num != eSymbol.WILD) {
                //                    //变换
                if (_this9._spineEffect_kuang) {
                  _this9._spineEffect_kuang.setAnimation(0, "change" + _this9.itemInfo.count, false);
                  _this9._spineEffect_kuang.setCompleteListener(function () {
                    _this9._spineEffect_kuang.setCompleteListener(null);
                    _this9._spineEffect_kuang.node.destroyFromParent();
                    _this9._spineEffect_kuang = null;
                  });
                  _this9.scheduleOnce(function () {
                    //开始转动
                    _this9.addEffectKuangLight();

                    //替换图标
                    _this9.doStartChange(_this9.itemInfo.type == 2);

                    //替换框
                    // this.itemInfo.type = this.itemInfo.type == 1 ? 2 : 0;
                    // this.updateFrame(this.itemInfo.type, this.itemInfo.count);

                    if (_this9.itemInfo.type == 2) {
                      _this9.itemInfo.type = 0;
                      _this9.updateFrame(_this9.itemInfo.type, _this9.itemInfo.count);
                    }
                  });
                }
                resolve();
              } else {
                var fBg = _this9.node.getComponent(Sprite);
                fBg.spriteFrame = null;
                if (_this9._spineEffect_kuang) {
                  _this9._spineEffect_kuang.setAnimation(0, "end" + _this9.itemInfo.count, false);
                  _this9._spineEffect_kuang.setCompleteListener(function () {
                    _this9._spineEffect_kuang.setCompleteListener(null);
                    _this9._spineEffect_kuang.node.destroyFromParent();
                    _this9._spineEffect_kuang = null;
                    _this9.node.getComponent(UIOpacity).opacity = 0;
                    _this9.isClear = true;
                    resolve();
                  });
                }
                // this.scheduleOnce(() => {
                //     this.isClear = true;
                //     resolve();
                // }, 0.75);
                var Node_symbol = _this9.node.getChildByName("Node_symbol");
                tween(Node_symbol.getComponent(UIOpacity)).to(0.1, {
                  opacity: 0
                }).start();
              }
            } else {
              resolve();
            }
          });
        };
        _proto._doShake = function _doShake() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            _this10.scheduleOnce(function () {
              if (!_this10.isClear) {
                // this.node.runAction(sequence(Qlsb_shake.create(0.5, 1.25, 1.25), callFunc(resolve, this)));
                tween(_this10.node).shake(0.5, 1.25, 1.25).call(function () {
                  resolve();
                }).start();
              } else {
                resolve();
              }
            }, 0.25);
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength, dropDelay) {
            var _this11 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this11.scheduleOnce(function () {
                      var curPos = _this11.node.getPosition().y;
                      var toPos = 0;
                      var offsetY = (toLength + _this11.itemInfo.count / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                      var offset = curPos - toPos;
                      if (offset == 0) {
                        resolve();
                        return;
                      }
                      var dropSpeed = 1000;
                      //            // let offset = this._isHorizontal ? dropLength * QlsbDef.eConstDef.cSymbolW : dropLength * QlsbDef.eConstDef.cSymbolH;

                      var duration = offset / dropSpeed;
                      _this11.scheduleOnce(function () {
                        // QlsbUtils.instance.playOneShot(QlsbDef.eSound.drop_1);
                      }, duration);
                      var pos_1 = _this11.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this11.node).to(duration, {
                        position: v3(_this11.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this11.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this11.node.position.x, pos_1)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        _this11.updateZIndex(eRunStatus.DROP);
                        resolve();
                      }).start();
                    }, dropDelay);
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function doDrop(_x, _x2) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        _proto.doScatterCollect = function doScatterCollect(root, wPos) {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = QlsbUtils.instance.getSkeletonData("bo");
            var curPos = _this12.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            curPos = root.getComponent(UITransform).convertToNodeSpaceAR(curPos);
            newNode.position = curPos;
            newNode.scale = v3(0.75, 0.75, 0.75);
            root.addChild(newNode);
            var toPos = root.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            var newIcon = find("Node_symbol/Node_specialScatter/newIcon", _this12.node);
            if (newIcon) {
              var uiOpacity = newIcon.getComponent(UIOpacity) || newIcon.addComponent(UIOpacity);
              uiOpacity.opacity = 180;
            }
            QlsbUtils.instance.playOneShot(eSound.symPlus1Highlight);
            itemSpine.setAnimation(0, "ball", true);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              QlsbUtils.instance.playOneShot(eSound.symPlus1Hit);
              tween(newNode).to(1, {
                position: toPos
              }, {
                easing: "cubicIn"
              }).call(function () {
                itemSpine.setAnimation(0, "add", false);
                itemSpine.setCompleteListener(function () {
                  itemSpine.setCompleteListener(null);
                  newNode.destroyFromParent();
                  resolve();
                });
              }).delay(0.2).call(function () {
                QlsbUtils.instance.playSound(eSound.fsMultiHit);
                QlsbModel.instance.totalFreeTimes += _this12.itemInfo.num - eSymbol.SCATTER;
                EventManager.instance.emit(eEvent.updateFreeTimes);
              }).start();
            });
          });
        };
        _proto.doScatterAni = function doScatterAni(arrAni) {
          if (this.itemInfo.num < eSymbol.SCATTER) {
            return;
          }
          QlsbUtils.instance.playSound(eSound.symScatter);
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var itemSpine = Node_symbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, arrAni[0].strAni, arrAni[0].isLoop);
            for (var i = 1; i < arrAni.length; i++) {
              itemSpine.addAnimation(0, arrAni[i].strAni, arrAni[i].isLoop);
            }
            this.node.getComponent(UITransform).priority = 2 * eZindex.SPECIAL;
          }
        };
        _proto.doScatterFlip = function doScatterFlip(root) {
          var _this13 = this;
          if (this.itemInfo.num < eSymbol.SCATTER) {
            return;
          }
          this.scheduleOnce(function () {
            var Node_symbol = _this13.node.getChildByName("Node_symbol");
            var itemSpine = Node_symbol.getComponent(sp.Skeleton);
            _this13.node.getComponent(UITransform).priority = eZindex.iconWin;
            QlsbUtils.instance.playOneShot(eSound.symScatterCharge);
            itemSpine.setAnimation(0, "stamp", false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              // itemSpine.enabled = false;
              // itemSpine.destroy();

              QlsbUtils.instance.playOneShot(eSound.symScatterFlip);
            });
            _this13.scheduleOnce(function () {
              _this13.doChangeScatter(root);
            }, 1.1);
          }, 0.25 * QlsbModel.instance.flipNums + 0.1);
          QlsbModel.instance.flipNums++;
        };
        _proto.addSpecialScatter = function addSpecialScatter(isRunning) {
          if (isRunning === void 0) {
            isRunning = false;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");

          //add box
          var Node_specialScatter = new Node("Node_specialScatter");
          var boxSprite = Node_specialScatter.addComponent(Sprite);
          boxSprite.spriteFrame = QlsbUtils.instance.arrIconBoxSpriteFrame["h_block_feature"];
          Node_specialScatter.scale = v3(1.375, 1.375, 1.375);
          Node_symbol.addChild(Node_specialScatter);
          var uiTransform = Node_specialScatter.addComponent(UITransform);
          boxSprite.type = Sprite.Type.SLICED;
          boxSprite.sizeMode = Sprite.SizeMode.CUSTOM;
          uiTransform.width = this.node.getComponent(UITransform).width;
          uiTransform.height = this.node.getComponent(UITransform).height;

          //add icon
          var newIcon = new Node("newIcon");
          var iconSprite = newIcon.addComponent(Sprite);
          newIcon.scale = v3(0.6, 0.6, 0.6);
          var sprFrame = null;
          switch (this.itemInfo.num) {
            case eSymbol.SCATTER_SPINS1:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame[isRunning ? "spin_plus1_blur" : "spin_plus1"];
                break;
              }
            case eSymbol.SCATTER_SPINS2:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame[isRunning ? "spin_plus2_blur" : "spin_plus2"];
                break;
              }
            case eSymbol.SCATTER_SPINS3:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame[isRunning ? "spin_plus3_blur" : "spin_plus3"];
                break;
              }
            case eSymbol.SCATTER_DOUBLE:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame[isRunning ? "mult_plus1_blur" : "mult_plus1"];
                break;
              }
          }
          iconSprite.spriteFrame = sprFrame;
          Node_specialScatter.addChild(newIcon);
          this.node.getComponent(UITransform).priority = eZindex.icon;
          if (!isRunning) {
            QlsbUtils.instance.playOneShot(eSound.symPlus1);
          }
        };
        _proto.doChangeScatter = function doChangeScatter(root) {
          var _this14 = this;
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var itemSpine = Node_symbol.getComponent(sp.Skeleton);
          itemSpine.enabled = false;

          //add box
          var Node_specialScatter = new Node("Node_specialScatter");
          var boxSprite = Node_specialScatter.addComponent(Sprite);
          boxSprite.spriteFrame = QlsbUtils.instance.arrIconBoxSpriteFrame["h_block_feature"];
          Node_specialScatter.scale = v3(0.5, 0, 0.5);
          Node_symbol.addChild(Node_specialScatter);
          var uiTransform = Node_specialScatter.addComponent(UITransform);
          boxSprite.type = Sprite.Type.SLICED;
          boxSprite.sizeMode = Sprite.SizeMode.CUSTOM;
          uiTransform.width = this.node.getComponent(UITransform).width;
          uiTransform.height = this.node.getComponent(UITransform).height;

          //add icon
          var newIcon = new Node("newIcon");
          var iconSprite = newIcon.addComponent(Sprite);
          newIcon.scale = v3(0.6, 0.6, 0.6);
          var sprFrame = null;
          switch (this.itemInfo.num) {
            case eSymbol.SCATTER_SPINS1:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame["spin_plus1"];
                break;
              }
            case eSymbol.SCATTER_SPINS2:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame["spin_plus2"];
                break;
              }
            case eSymbol.SCATTER_SPINS3:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame["spin_plus3"];
                break;
              }
            case eSymbol.SCATTER_DOUBLE:
              {
                sprFrame = QlsbUtils.instance.arrIconSpriteFrame["mult_plus1"];
                break;
              }
          }
          iconSprite.spriteFrame = sprFrame;
          Node_specialScatter.addChild(newIcon);
          tween(Node_specialScatter).to(0.25, {
            scale: v3(0.5, 0.5, 0.5)
          }).delay(0.5).call(function () {
            _this14.node.getComponent(UITransform).priority = eZindex.icon;
            var newSymbol = instantiate(Node_specialScatter);
            Tween.stopAllByTarget(newSymbol);
            newSymbol.scale = v3(1, 1, 1);
            var pos = Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            newSymbol.position = root.getComponent(UITransform).convertToNodeSpaceAR(pos);
            newSymbol.getComponent(UITransform).priority = _this14.itemInfo.num;
            root.addChild(newSymbol);
          }).start();
        };
        return Qlsb_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Qlsb_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './QlsbDef.ts', './QlsbUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, eSound, QlsbUtils, Common;
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
      Component = module.Component;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e741agLR75BmIRKOfVmDd3o", "Qlsb_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Qlsb_winTip = exports('default', (_dec = ccclass("QlsbWinTip"), _dec2 = menu("game/QlsbGame/Qlsb_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Qlsb_winTip, _Component);
        function Qlsb_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Qlsb_winTip.prototype;
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
            _this2.Label_win.string = QlsbUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.doShow = function doShow(gold, isLast) {
          var _this3 = this;
          if (isLast === void 0) {
            isLast = false;
          }
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.active = true;
          tween(this.node).to(0.15, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            if (!isLast) {
              Node_title.getComponent(Sprite).spriteFrame = _this3.arrSpriteFrame[0];
            } else {
              QlsbUtils.instance.playOneShot(eSound.prizeSmallwinMulti);
              Node_title.getComponent(Sprite).spriteFrame = _this3.arrSpriteFrame[1];
            }
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          if (!isLast) {
            QlsbUtils.instance.updateLabelAddNf(this.Label_win, gold);
          } else {
            var inter = Common.numFormatInt(gold / 1000);
            var digit = QlsbUtils.instance.numberFormatD(gold / 1000, 2.0);
            this.Label_win.string = "" + inter + digit + "K";
          }
        };
        return Qlsb_winTip;
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

System.register("chunks:///_virtual/QlsbCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './QlsbModel.ts', './I18n.ts', './ViewManager.ts', './QlsbDef.ts', './QlsbUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, QlsbModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, QlsbUtils, Common;
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
      QlsbModel = module.QlsbModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "3c099E12HFHQ469GUdx+VET", "QlsbCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var QlsbCtrl = exports('QlsbCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(QlsbCtrl, _GameDef$BaseCtrl);
        function QlsbCtrl() {
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
          _this._model = QlsbModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = QlsbCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete QlsbCtrl._instance;
          QlsbCtrl._instance = null;
          QlsbModel.destroy();
          QlsbUtils.destroy();
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
          if (!QlsbModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            QlsbModel.instance.curTotalBet = QlsbModel.instance.curBet * 1000 * 75;
            NetManager.instance.sendOnlineData(eProto.HD_BuyFree, {
              betAmount: "" + QlsbModel.instance.curBet * 1000
            });
          } else {
            QlsbModel.instance.curTotalBet = QlsbModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + QlsbModel.instance.curBet * 1000
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
            gameType: "slotKylin"
          });
        }

        /**
         *搏一搏
         * @param type string "count" && "times"
         */;
        _proto.reqBoYiBo = function reqBoYiBo(type) {
          QlsbModel.instance.boType = type;
          NetManager.instance.sendOnlineData(eProto.HD_BoYiBo, {
            betAmount: QlsbModel.instance.curBet * 1000,
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
            RecordType: "slotKylin"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(QlsbDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: QlsbModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotKylin"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotKylin",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotKylin"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotKylin",
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
              Common.showTip(i18n.errTip(data.Code), !QlsbUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == QlsbDef.eProto.HD_Enter || (data.Code == 402 && QlsbModel.instance.gameState.GameNo != QlsbModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(QlsbDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();

                // if (QlsbModel.instance.gameStatus != QlsbDef.eRunStatus.NONE) {
                //     return;
                // }

                QlsbModel.instance.clearGameData();
                QlsbModel.instance.gameInfo = data.Data;
                QlsbModel.instance.curBet = Math.round(QlsbModel.instance.gameInfo.betAmount / 1000);
                QlsbModel.instance.totalFreeWin = QlsbModel.instance.gameInfo.freeInfo.totalFreePrizeAmount;
                QlsbModel.instance.totalFreeTimesBack = QlsbModel.instance.gameInfo.freeInfo.totalFreePrizeCount;
                QlsbModel.instance.totalFreeTimes = QlsbModel.instance.gameInfo.freeInfo.surplusFreeCount;
                QlsbModel.instance.totalRate = QlsbModel.instance.gameInfo.freeInfo.odds > 0 ? QlsbModel.instance.gameInfo.freeInfo.odds : 1;
                QlsbModel.instance.baseOdds = QlsbModel.instance.gameInfo.freeInfo.baseOdds;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_BuyFree:
            case eProto.HD_Bet:
              {
                QlsbModel.instance.betResult = data.Data;
                //test
                // QlsbModel.instance.betResult = QlsbModel.instance.onRecvData.Data;

                this.isReqBet = false;

                //判断是否有2个胡
                QlsbModel.instance.specialStartCol = 0;
                if (!QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = QlsbModel.instance.betResult.OpenNums[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.openNum.length - 1; iCol++) {
                      var AllPosMsg = openResult.openNum[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.num >= eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 2) {
                            QlsbModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();

                  // //specialStartCol test
                  // QlsbModel.instance.specialStartCol = 2; //Math.floor(Math.random() * 2 + 2);

                  gts.Debug.LogWarr("==QlsbModel.instance.specialStartCol==" + QlsbModel.instance.specialStartCol);
                }
                QlsbModel.instance.totalFreeTimesBack = QlsbModel.instance.betResult.freeInfo.totalFreePrizeCount;
                QlsbModel.instance.baseOdds = QlsbModel.instance.betResult.freeInfo.baseOdds;
                if (QlsbModel.instance.totalFreeTimes == 0) {
                  QlsbModel.instance.totalFreeTimes = QlsbModel.instance.betResult.freeInfo.surplusFreeCount;
                } else {
                  QlsbModel.instance.totalFreeTimes--;
                }

                //freeTest;
                // if (QlsbModel.instance.totalFreeTimes > 0) {
                //     QlsbModel.instance.totalFreeTimes--;
                // } else {
                //     QlsbModel.instance.totalFreeTimes = 8; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==QlsbModel.instance.totalFreeTimes==" + QlsbModel.instance.totalFreeTimes);
                if (QlsbModel.instance.freeStatus == eRunStatus.NONE) {
                  QlsbModel.instance.curBalance -= QlsbModel.instance.curTotalBet;
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
                gts.Debug.LogWarr("==Qlsb=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (QlsbModel.instance.curBalance > 0) {
                  QlsbModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                QlsbModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Qlsb=pushWallet==" + _HD_Wallet.VndBalance);
                if (QlsbModel.instance.curBalance > 0) {
                  QlsbModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                QlsbModel.instance.curBalance = _HD_Wallet.VndBalance;
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
            GameType: "slotKylin",
            cmd: "slotKylin/HD_Bet"
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
        return QlsbCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QlsbDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum, v3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
      v3 = module.v3;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6421awINP1C67etEeEdaDCq", "QlsbDef", undefined);
      var cBundle = exports('cBundle', "QlsbGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotKylin/HD_info";
        eProto["HD_Bet"] = "slotKylin/HD_Bet";
        eProto["HD_BuyFree"] = "slotKylin/HD_BuyFree";
        eProto["HD_Leave"] = "slotKylin/HD_Leave";
        eProto["HD_BoYiBo"] = "slotKylin/HD_BoYiBo";
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
      var cBaseScore = exports('cBaseScore', [0.1, 0.5, 1]);
      var eZindex = exports('eZindex', {
        NONE: 0,
        icon: 1,
        icon_cat: 250,
        icon_scatter: 500,
        MASK: 1000,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 2,
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 0.5,
        cSymbolW: 123,
        cSymbolH: 106,
        cSymbolStartX: -307.5,
        cSymbolStartY: -320,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 500,
        CSpeedReduse: 200
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
        TOAD: 1,
        BOAT: 2,
        BOWL: 3,
        CABBAGE: 4,
        BAG: 5,
        COPPER: 6,
        A: 7,
        K: 8,
        Q: 9,
        J: 10,
        TEN: 11,
        WILD: 12,
        SCATTER: 13,
        SCATTER_SPINS1: 14,
        SCATTER_SPINS2: 15,
        SCATTER_SPINS3: 16,
        SCATTER_DOUBLE: 17
      });
      // SCATTER BonusSymbol = 0
      // WILD BonusSymbol = 1
      // TOAD BonusSymbol = 2
      // BOAT BonusSymbol = 3
      // BOWL BonusSymbol = 4
      // CABBAGE BonusSymbol = 5
      // BAG BonusSymbol = 6
      // COPPER BonusSymbol = 7
      // A BonusSymbol = 8
      // K BonusSymbol = 9
      // Q BonusSymbol = 10
      // J BonusSymbol = 11
      // TEN BonusSymbol = 12
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var cRateWheelDef = exports('cRateWheelDef', [{
        pos: v3(-378, -102, 0),
        rotation: v3(0, 0, -80)
      }, {
        pos: v3(-287, -225, 0),
        rotation: v3(0, 0, -32)
      }, {
        pos: v3(-165, -277, 0),
        rotation: v3(0, 0, -10)
      }, {
        pos: v3(0, -340, 0),
        rotation: v3(0, 0, 0)
      }, {
        pos: v3(165, -277, 0),
        rotation: v3(0, 0, 10)
      }, {
        pos: v3(287, -225, 0),
        rotation: v3(0, 0, 32)
      }, {
        pos: v3(378, -102, 0),
        rotation: v3(0, 0, 80)
      }]);
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onSetMask"] = "onSetMask";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["updateSystemRate"] = "updateSystemRate";
        eEvent["updateFreeTimes"] = "updateFreeTimes";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onCatNumMove"] = "onCatNumMove";
        eEvent["onCatNumAdd"] = "onCatNumAdd";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm_mg",
        bgFree: "sound/bgm_fs",
        bgmBigwinMain: "sound/general/bgmBigwinMain",
        bgmBigwinEnd: "sound/general/bgmBigwinEnd",
        bgmTotalwinMain: "sound/general/bgmTotalwinMain",
        bgmTotalwinEnd: "sound/general/bgmTotalwinEnd",
        numAdd: "sound/general/numAdd",
        fastspin: "sound/general/fastspin",
        featurebuyHover: "sound/general/featurebuyHover",
        featurebuyBtn: "sound/general/featurebuyBtn",
        featurebuyCancel: "sound/general/featurebuyCancel",
        featurebuyStart: "sound/general/featurebuyStart",
        fsLoadingIncrease: "sound/general/fsLoadingIncrease",
        fsLoadingTrans: "sound/general/fsLoadingTrans",
        fsMultiHit: "sound/general/fsMultiHit",
        fsMultiIncrease: "sound/general/fsMultiIncrease",
        featureHeartbeat: "sound/general/featureHeartbeat",
        featureHeartbeatDrop: "sound/general/featureHeartbeatDrop",
        prizeSmallwin: "sound/general/prizeSmallwin",
        prizeMedwinCounting: "sound/general/prizeMedwinCounting",
        prizeMedwinEnd: "sound/general/prizeMedwinEnd",
        prizeSmallwinMulti: "sound/general/prizeSmallwinMulti",
        prizeTotalwinNormalInfobar: "sound/general/prizeTotalwinNormalInfobar",
        symPlus1: "sound/general/symPlus1",
        symPlus1Hit: "sound/general/symPlus1Hit",
        symPlus1Highlight: "sound/general/symPlus1Highlight",
        symPlus1FsRemain: "sound/general/symPlus1FsRemain",
        spinBtn: "sound/general/spinBtn",
        spinStop: "sound/general/spinStop",
        spinReelActive: "sound/general/spinReelActive",
        spinReelActiveLoop: "sound/general/spinReelActiveLoop",
        spinReelstopNormal: "sound/general/spinReelstopNormal",
        spinReelstopQuick: "sound/general/spinReelstopQuick",
        symScatter: "sound/general/symScatter",
        symWild: "sound/general/symWild",
        symWildTransform01: "sound/general/symWildTransform02",
        symWildTransform02: "sound/general/symWildTransform02",
        symScatterCharge: "sound/general/symScatterCharge",
        symScatterFlip: "sound/general/symScatterFlip",
        uiStart: "sound/general/uiStart"
      }); // scarret = "sound/scarret",
      // break = "sound/break",
      // clear = "sound/clear",
      // clear_0 = "sound/clear_0",
      // drop_0 = "sound/drop_0",
      // drop_1 = "sound/drop_1",
      // nice_0 = "sound/nice_0",
      // nice_1 = "sound/nice_1",
      // bigWin = "sound/startFree",
      // startRun = "sound/startRun",
      // running = "sound/running",
      // freeEnd_0 = "sound/freeEnd_0",
      // freeEnd_1 = "sound/freeEnd_1",
      // rateChange = "sound/rateChange",
      // frameChange = "sound/frameChange",
      // catNumAdd = "sound/catNumAdd",
      // free_winEffect = "sound/free_winEffect",
      // zhuanDong = "sound/zhuanDong",
      // shuZiBianHua = "sound/shuZiBianHua",
      // zhanKai = "sound/zhanKai",
      // zhuanShibai = "sound/zhuanShibai",

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QlsbGame", ['./QlsbCtrl.ts', './QlsbDef.ts', './QlsbModel.ts', './QlsbScene.ts', './QlsbUtils.ts', './QlsbGameView.ts', './Qlsb_ScrollView.ts', './Qlsb_btnEffect.ts', './Qlsb_buyReward.ts', './Qlsb_helpTip.ts', './Qlsb_history.ts', './Qlsb_historyItem.ts', './Qlsb_rank.ts', './Qlsb_rankItem.ts', './Qlsb_setAuto.ts', './Qlsb_setBase.ts', './Qlsb_shake.ts', './Qlsb_symbol.ts', './Qlsb_symbolEffectRoot.ts', './Qlsb_symbolInfo.ts', './Qlsb_symbolItem.ts', './Qlsb_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/QlsbGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './QlsbDef.ts', './QlsbModel.ts', './QlsbCtrl.ts', './ViewManager.ts', './QlsbUtils.ts', './Qlsb_winTip.ts', './Qlsb_symbol.ts', './I18n.ts', './Qlsb_symbolInfo.ts', './Common.ts', './Qlsb_btnEffect.ts', './Qlsb_helpTip.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, sp, SpriteFrame, Sprite, Font, view, Tween, UIOpacity, find, tween, v3, UITransform, instantiate, color, gfx, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, eSound, eConstDef, cRateWheelDef, eProto, eSymbol, QlsbModel, QlsbCtrl, ViewManager, QlsbUtils, Qlsb_winTip, Qlsb_symbol, i18n, Qlsb_symbolInfo, Common, Qlsb_btnEffect, Qlsb_helpTip;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Font = module.Font;
      view = module.view;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      find = module.find;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      color = module.color;
      gfx = module.gfx;
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
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      cRateWheelDef = module.cRateWheelDef;
      eProto = module.eProto;
      eSymbol = module.eSymbol;
    }, function (module) {
      QlsbModel = module.QlsbModel;
    }, function (module) {
      QlsbCtrl = module.QlsbCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Qlsb_winTip = module.default;
    }, function (module) {
      Qlsb_symbol = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Qlsb_symbolInfo = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      Qlsb_btnEffect = module.default;
    }, function (module) {
      Qlsb_helpTip = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39;
      cclegacy._RF.push({}, "0f0ecvbsahP7Z14Y+6QLXKi", "QlsbGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var QlsbGameView = exports('default', (_dec = ccclass("QlsbGameView"), _dec2 = menu("game/QlsbGame/QlsbGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Qlsb_symbol), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Button), _dec12 = property(Label), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(sp.Skeleton), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(sp.Skeleton), _dec19 = property(Button), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(Sprite), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Qlsb_symbolInfo), _dec36 = property(sp.Skeleton), _dec37 = property(sp.Skeleton), _dec38 = property(Font), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(QlsbGameView, _GameDef$BaseView);
        function QlsbGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Qlsb_symbolList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_buy", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_symRate", _descriptor21, _assertThisInitialized(_this));
          // @property(Node)
          // Label_catNum: Node = null;
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effect_freeLight", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_scatterRoot", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeDownBg", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateWheel", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateWheelTemp", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zp_light", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bglight", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rateFont", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_FreeEnd", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_wait_root", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter_wait", _descriptor39, _assertThisInitialized(_this));
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = QlsbGameView.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, QlsbCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!QlsbUtils.instance.isChangeOrientation()) {
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

          // EventManager.instance.on(QlsbDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.updateSystemRate, function (startNum, endNum) {
            Tween.stopAllByTarget(_this2.Label_symRate.node.getComponent(UIOpacity));
            QlsbUtils.instance.updateLabelNomal(_this2.Label_symRate, endNum, false, QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE, startNum);
          }, this);
          EventManager.instance.on(eEvent.updateFreeTimes, function () {
            var Label_freeTimes = find("Node_freeInfo/Label_freeTimes", _this2.Node_free);
            QlsbUtils.instance.updateLabel(Label_freeTimes, "" + QlsbModel.instance.totalFreeTimes);
          }, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              QlsbModel.instance.autoTimes = times;
              QlsbModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(Qlsb_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (QlsbModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  QlsbCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !QlsbModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = QlsbModel.instance.isAuto;
            QlsbUtils.instance.updateLabel(_this2.Label_autoTimes, QlsbModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            QlsbModel.instance.autoTimes = 0;
            QlsbModel.instance.isAuto = false;
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(Qlsb_btnEffect);
            btnRunEffect.switchAni();

            //                // QlsbUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            QlsbUtils.instance.updateLabel(_this2.Label_autoTimes, QlsbModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          // EventManager.instance.off(QlsbDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.updateSystemRate);
          EventManager.instance.off(eEvent.updateFreeTimes);
          QlsbModel.instance.clearGameData();
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
              //                // QlsbCtrl.instance.reEnterRoom();

              if (QlsbModel.instance.isAuto && QlsbCtrl.instance.isReqBet) {
                QlsbCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseScore}_curIndex`, QlsbModel.instance._curIndex_baseScore + 1);
          // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseRate}_curIndex`, QlsbModel.instance._curIndex_baseRate + 1);
          // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseBet}_curIndex`, QlsbModel.instance._curIndex_baseBet + 1);

          QlsbModel.instance.curBet = (QlsbModel.instance._curIndex_baseScore == 0 ? 0.1 : QlsbModel.instance._curIndex_baseScore * 0.5) * (QlsbModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
          this.Button_redus.interactable = QlsbModel.instance.curBet > 2;
          this.Button_add.interactable = QlsbModel.instance.curBet < 200;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          //        // let _curIndex_baseScore = sys.localStorage.getItem(`${QlsbDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = sys.localStorage.getItem(`${QlsbDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = sys.localStorage.getItem(`${QlsbDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          //        // QlsbModel.instance.curBet = (_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // QlsbModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // QlsbModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // QlsbModel.instance._curIndex_baseBet = _curIndex_baseBet;

          Common.showWait();
          this.Button_run.interactable = false;
          QlsbUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.Qlsb_symbolList.length; i++) {
            //            //     this.Qlsb_symbolList[i].init();
            //            // }

            QlsbCtrl.instance.reqEnterRoom();

            // this.Node_mask_0.getComponent(UITransform).priority = QlsbDef.eZindex.MASK;
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          QlsbModel.instance.curBet = 0.1;
          this.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {}
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_fast":
              {
                //                //快速停止
                QlsbModel.instance.isQuickStop = !QlsbModel.instance.isQuickStop;
                //                // QlsbUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !QlsbModel.instance.isQuickStop);

                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!QlsbModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_auto":
              {
                if (!QlsbModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", QlsbUtils.instance.bundle, function () {}, function (prefab) {
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
                if (QlsbModel.instance.gameStatus != eRunStatus.NONE || QlsbModel.instance.isAuto) {
                  return;
                }
                var buyGold = QlsbModel.instance.curBet * 50 * 1000;
                if (QlsbModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !QlsbUtils.instance.isChangeOrientation());
                  return;
                }
                QlsbUtils.instance.playOneShot(eSound.featurebuyBtn);
                Common.loadPopBuddle("prefab/Node_buyReward", QlsbUtils.instance.bundle, function () {}, function (prefab) {
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
                QlsbCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", QlsbUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", QlsbUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", QlsbUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (QlsbModel.instance.gameStatus != eRunStatus.NONE || QlsbModel.instance.isAuto) {
                  return;
                }
                QlsbModel.instance._curIndex_baseBet--;
                if (QlsbModel.instance._curIndex_baseBet < 0) {
                  QlsbModel.instance._curIndex_baseBet = 0;
                }
                QlsbModel.instance._curIndex_baseScore = Math.floor(QlsbModel.instance._curIndex_baseBet / 10);
                QlsbModel.instance._curIndex_baseRate = QlsbModel.instance._curIndex_baseBet % 10;
                QlsbModel.instance.curBet = (QlsbModel.instance._curIndex_baseScore == 0 ? 0.1 : QlsbModel.instance._curIndex_baseScore * 0.5) * (QlsbModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                this.Button_redus.interactable = QlsbModel.instance.curBet > 2;
                this.Button_add.interactable = QlsbModel.instance.curBet < 200;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseScore}_curIndex`, QlsbModel.instance._curIndex_baseScore + 1);
                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseRate}_curIndex`, QlsbModel.instance._curIndex_baseRate + 1);
                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseBet}_curIndex`, QlsbModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (QlsbModel.instance.gameStatus != eRunStatus.NONE || QlsbModel.instance.isAuto) {
                  return;
                }
                QlsbModel.instance._curIndex_baseBet++;
                if (QlsbModel.instance._curIndex_baseBet > 29) {
                  QlsbModel.instance._curIndex_baseBet = 29;
                }
                QlsbModel.instance._curIndex_baseScore = Math.floor(QlsbModel.instance._curIndex_baseBet / 10);
                QlsbModel.instance._curIndex_baseRate = QlsbModel.instance._curIndex_baseBet % 10;
                QlsbModel.instance.curBet = (QlsbModel.instance._curIndex_baseScore == 0 ? 0.1 : QlsbModel.instance._curIndex_baseScore * 0.5) * (QlsbModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseScore}_curIndex`, QlsbModel.instance._curIndex_baseScore + 1);
                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseRate}_curIndex`, QlsbModel.instance._curIndex_baseRate + 1);
                // sys.localStorage.setItem(`${QlsbDef.cBundle}_${QlsbDef.eAutoRateType.baseBet}_curIndex`, QlsbModel.instance._curIndex_baseBet + 1);
                this.Button_redus.interactable = QlsbModel.instance.curBet > 2;
                this.Button_add.interactable = QlsbModel.instance.curBet < 200;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                break;
              }
            case "Button_run":
              {
                if (QlsbModel.instance.isAuto) {
                  QlsbModel.instance.isAuto = false;
                  QlsbModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = QlsbModel.instance.isAuto;
                  QlsbUtils.instance.updateLabel(this.Label_autoTimes, QlsbModel.instance.autoTimes);
                  if (QlsbModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Button_auto.interactable = false;
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(Qlsb_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (QlsbCtrl.instance.isReqBet) {
                  break;
                }
                if (QlsbModel.instance.gameStatus == eRunStatus.NONE) {
                  var betGold = QlsbModel.instance.curBet * 1000;
                  if (QlsbModel.instance.curBalance < betGold) {
                    Common.showTip(i18n.lang[10001], !QlsbUtils.instance.isChangeOrientation());
                    return;
                  }
                  QlsbCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (QlsbModel.instance.gameStatus != eRunStatus.NONE || QlsbModel.instance.isAuto || QlsbModel.instance.freeStatus != eRunStatus.NONE || QlsbModel.instance.totalFreeTimes > 0) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", QlsbUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  Common.transformSize(setBase);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }

            //            //FREE
            case "Button_start":
              {
                QlsbUtils.instance.playOneShot(eSound.uiStart);
                this.doEnterFree();
                break;
              }
            case "Button_times":
              {
                // this.Button_times.interactable = false;
                // this.Button_rate.interactable = false;
                // this.Button_enterFree.interactable = false;
                // Common.setButtonEnableWithGray(this.Button_times, false);
                // Common.setButtonEnableWithGray(this.Button_rate, false);
                // Common.setButtonEnableWithGray(this.Button_enterFree, false);

                this.unschedule(this.doEnterFree);
                QlsbCtrl.instance.reqBoYiBo("count");
                break;
              }
            case "Button_rate":
              {
                // this.Button_times.interactable = false;
                // this.Button_rate.interactable = false;
                // this.Button_enterFree.interactable = false;

                // Common.setButtonEnableWithGray(this.Button_times, false);
                // Common.setButtonEnableWithGray(this.Button_rate, false);
                // Common.setButtonEnableWithGray(this.Button_enterFree, false);

                this.unschedule(this.doEnterFree);
                event.target.getComponent(Button).interactable = false;
                QlsbCtrl.instance.reqBoYiBo("times");
                break;
              }
            case "Button_exit":
              {
                this.hideFree();
              }
          }
        };
        _proto.onSetMask = function onSetMask(iCol, posX) {
          gts.Debug.Log("==onSetMask=posX=" + posX);
          if (iCol > 0) {
            if (!this.Node_colEffect.active) {
              this.Node_colEffect.active = true;
              this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              this.Node_mask_1_6.active = true;
              this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
              var helpTip = this.Node_helpTip.getComponent(Qlsb_helpTip);
              helpTip.doShow(1);
            }
            for (var i = 0; i < this.Qlsb_symbolList.length; i++) {
              var Qlsb_symbolList = this.Qlsb_symbolList[i];
              for (var _iterator = _createForOfIteratorHelperLoose(Qlsb_symbolList._symbolList), _step; !(_step = _iterator()).done;) {
                var symbolItem = _step.value;
                symbolItem.doScatterAni([{
                  strAni: "spawn",
                  isLoop: false
                }, {
                  strAni: "win_idle",
                  isLoop: true
                }]);
              }
            }
            QlsbUtils.instance.stopSound(eSound.fastspin);
            QlsbModel.instance.curSpecialStartCol = iCol;
            if (QlsbModel.instance.curSpecialStartCol < this.Qlsb_symbolList.length) {
              QlsbUtils.instance.playSound(eSound.fastspin);
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 10 * (QlsbModel.instance.curSpecialStartCol - 1);
              this.Node_colEffect.setPosition(this.Qlsb_symbolList[QlsbModel.instance.curSpecialStartCol].node.getPosition().x, this.Node_colEffect.position.y);
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            if (this.Node_mask_1_6.active) {
              tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_1_6.active = false;
              }).start();
              if (QlsbModel.instance.freeStatus != eRunStatus.NONE) {
                this.scheduleOnce(function () {
                  for (var i = 0; i < _this6.Qlsb_symbolList.length; i++) {
                    var Qlsb_symbolList = _this6.Qlsb_symbolList[i];
                    for (var _iterator2 = _createForOfIteratorHelperLoose(Qlsb_symbolList._symbolList), _step2; !(_step2 = _iterator2()).done;) {
                      var symbolItem = _step2.value;
                      symbolItem.doScatterAni([{
                        strAni: "win",
                        isLoop: false
                      }, {
                        strAni: "win_idle",
                        isLoop: true
                      }]);
                    }
                  }
                });
              }
            }
            return;
          }
          if (!this.Node_mask_1_6.active) {
            this.Node_mask_1_6.active = true;
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 180
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this7 = this;
          if (QlsbModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          QlsbModel.instance.flipNums = 0;
          QlsbModel.instance.curSystemRate = 1;
          this.Button_auto.interactable = false;
          this.Button_add.interactable = false;
          this.Button_redus.interactable = false;
          if (QlsbModel.instance.freeStatus == eRunStatus.NONE) {
            // this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0]; //
            this.Node_helpTip.getComponent(UITransform).width = 618;
            // this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_ELLIPSE;
          }

          this.showWinEffect(0);
          this.Node_info.node.active = false;
          Tween.stopAllByTarget(this.Label_symRate.node.getComponent(UIOpacity));
          this.Label_symRate.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.Button_buy.interactable = false;
          this.Button_buy.node.getChildByName("Sprite_text").getComponent(Sprite).color = color(255, 255, 255, 100);
          this.zp_light.node.active = true;
          this.zp_light.setAnimation(0, "spin", false);
          this.zp_light.setCompleteListener(function () {
            _this7.zp_light.setCompleteListener(null);
            _this7.zp_light.node.active = false;
          });
          this.bglight.node.active = true;
          this.bglight.setAnimation(0, QlsbModel.instance.freeStatus == eRunStatus.NONE ? "normal_spin" : "free_spin", false);
          this.bglight.setCompleteListener(function () {
            _this7.bglight.setCompleteListener(null);
            _this7.bglight.node.active = false;
          });

          // this.Node_tipEffect.node.active = false;
          QlsbModel.instance.curTotalWin = 0;
          if (QlsbModel.instance.freeStatus == eRunStatus.NONE) {
            // this.clearCatNum();

            this.Label_win.string = "0.00";
            EventManager.instance.emit(eEvent.updateWin, 0);
          }
          this.Label_gold.color = color(255, 255, 255, 255);
          this.Label_bet.color = color(255, 255, 255, 255);
          this.Label_win.color = color(255, 255, 255, 255);
          this.Button_auto.interactable = false;
          this.Button_auto.node.getComponent(UIOpacity).opacity = 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = 100;
          this.Button_redus.node.getComponent(UIOpacity).opacity = 100;
          this.Button_menu.node.getComponent(UIOpacity).opacity = 100;
          this.Node_effectRoot.removeAllChildren();
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //            // QlsbModel.instance.specialStartCol = 2;
                  arrPro = [];
                  for (i = 0; i < _this7.Qlsb_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += QlsbModel.instance.specialStartCol > 0 && i >= QlsbModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - QlsbModel.instance.specialStartCol + 1) : 0;
                    arrPro.push(_this7.Qlsb_symbolList[i].doStart(startDelay, stopDelay));
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
          QlsbUtils.instance.playOneShot(eSound.spinBtn);
          QlsbModel.instance.gameStatus = eRunStatus.RUNNING;
          if (!QlsbModel.instance.isAuto && this.Skeleton_run.animation != "start") {
            this.Skeleton_run.setAnimation(0, "start", false);
            this.Skeleton_run.addAnimation(0, "idle", true);
          }
          if (QlsbModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            QlsbUtils.instance.playOneShot(eSound.symPlus1FsRemain);
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (QlsbModel.instance.totalFreeTimes > 0) {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
              Label_freeTimes.active = true;
              Label_freeTimes.getComponent(Label).string = "" + QlsbModel.instance.totalFreeTimes;
            } else {
              var _Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              _Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            // QlsbUtils.instance.playOneShot(QlsbDef.eSound.startRun);
            QlsbModel.instance.autoTimes--;
            QlsbUtils.instance.updateLabel(this.Label_autoTimes, QlsbModel.instance.autoTimes);
          }
        };
        _proto.showWinEffect = function showWinEffect(prizeAmount) {
          var rate = prizeAmount / (QlsbModel.instance.curBet * 1000);
          var lv = rate < 35 ? 1 : rate < 50 ? 2 : 3;
          if (prizeAmount > 0) {
            if (lv > 5) {
              QlsbUtils.instance.playOneShot(eSound.prizeMedwinCounting);
              this.scheduleOnce(function () {
                QlsbUtils.instance.playOneShot(eSound.prizeMedwinEnd);
              }, 0.85);
            } else {
              QlsbUtils.instance.playOneShot(eSound.prizeSmallwin);
            }
          }
          if (QlsbModel.instance.freeStatus == eRunStatus.NONE) {
            if (prizeAmount > 0) {
              this.Node_tipEffect.setAnimation(0, "normal_win", false);
              this.Node_tipEffect.addAnimation(0, "normal_idle", true);
            } else {
              this.Node_tipEffect.setAnimation(0, "normal_p", true);
            }
            return;
          }
          if (prizeAmount > 0) {
            this.Node_tipEffect.setAnimation(0, "free" + lv + "_win", false);
            this.Node_tipEffect.addAnimation(0, "free" + lv + "_idle", true);
          } else {
            this.Node_tipEffect.setAnimation(0, "free" + lv + "_p", true);
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
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this9 = this;
            var resultList, _loop, i, delayStart, btnRunEffect, com_Qlsb_winTip, pos, doContinue, Label_freeTimes, wPos, arrPro, _i, _i2, Qlsb_symbolList, _iterator3, _step3, symbolItem, helpTip, lastResult, _i3, _Qlsb_symbolList, j, _symbolItem;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  QlsbModel.instance.gameStatus = eRunStatus.CLEAR;
                  if (!QlsbModel.instance.isAuto) {
                    this.Button_run.interactable = false;
                    QlsbUtils.instance.playOneShot(eSound.spinStop);
                    this.Skeleton_run.setAnimation(0, "stop", true);
                  }
                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.05, {
                      opacity: 0
                    }).call(function () {
                      _this9.Node_colEffect.active = false;
                      if (QlsbModel.instance.totalFreeTimes == 0) {
                        var helpTip = _this9.Node_helpTip.getComponent(Qlsb_helpTip);
                        helpTip.doShow();
                      }
                    }).start();
                  }
                  QlsbModel.instance.specialStartCol = 0;
                  QlsbModel.instance.curTotalWin = 0;
                  resultList = QlsbModel.instance.betResult.OpenNums;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, _arrPro, _i6, curPrizeAmount, _com_Qlsb_winTip, curWin, endWin, Label_freeRate, newFreeRate, _pos, _i7, dropDelay, _i8, _helpTip, _i9, _i10, _Qlsb_symbol, newScatterWait, _i11, _i12, _Qlsb_symbolList2, _iterator4, _step4, _symbolItem2, _i13, symRate, _i14;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          result = resultList[i];
                          if (!(result.prizeAmount > 0)) {
                            _context2.next = 79;
                            break;
                          }
                          resultNext = resultList[i + 1]; //                //
                          // QlsbUtils.instance.playOneShot(QlsbDef.eSound.clear_0);
                          _this9.showMask();

                          //                //doEffect
                          _arrPro = [];
                          for (_i6 = 0; _i6 < _this9.Qlsb_symbolList.length; _i6++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i6].doEffect());
                          }
                          _context2.next = 8;
                          return Promise.all(_arrPro);
                        case 8:
                          curPrizeAmount = result.prizeAmount;
                          if (QlsbModel.instance.freeStatus != eRunStatus.NONE && QlsbModel.instance.totalRate > 1) {
                            curPrizeAmount = curPrizeAmount / QlsbModel.instance.totalRate;
                          }
                          do {
                            _this9.showWinEffect(curPrizeAmount);
                            _this9.Node_helpTip.active = false;
                            _this9.Node_winTip.active = true;
                            _com_Qlsb_winTip = _this9.Node_winTip.getComponent(Qlsb_winTip);
                            _com_Qlsb_winTip.doShow(curPrizeAmount);
                          } while (false);
                          curWin = QlsbModel.instance.curTotalWin;
                          endWin = QlsbModel.instance.curTotalWin + result.prizeAmount;
                          QlsbModel.instance.curTotalWin += result.prizeAmount;
                          if (QlsbModel.instance.freeStatus != eRunStatus.NONE) {
                            curWin = QlsbModel.instance.totalFreeWin;
                            endWin = QlsbModel.instance.totalFreeWin + curPrizeAmount;
                            QlsbModel.instance.totalFreeWin += result.prizeAmount;
                          }
                          //gengxin
                          QlsbUtils.instance.updateLabelAddNf(_this9.Label_win, endWin, false, curWin);
                          EventManager.instance.emit(eEvent.updateWin, curPrizeAmount);
                          _this9.showMask(false);
                          if (!(QlsbModel.instance.freeStatus != eRunStatus.NONE)) {
                            _context2.next = 35;
                            break;
                          }
                          if (!(QlsbModel.instance.totalRate > QlsbModel.instance.baseOdds)) {
                            _context2.next = 35;
                            break;
                          }
                          _context2.next = 22;
                          return _this9.doAwait(0.5);
                        case 22:
                          Label_freeRate = _this9.Node_rateWheel.getChildByName("Label_freeRate_" + QlsbModel.instance.totalRate);
                          newFreeRate = instantiate(Label_freeRate);
                          _pos = Label_freeRate.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                          _pos = _this9.node.getComponent(UITransform).convertToNodeSpaceAR(_pos);
                          newFreeRate.position = _pos;
                          newFreeRate.getComponent(UIOpacity).opacity = 150;
                          newFreeRate.getComponent(UITransform).priority = 200000;
                          _this9.node.addChild(newFreeRate);

                          // newFreeRate["srcBlendFactor"] = gfx.BlendFactor.SRC_ALPHA;
                          newFreeRate["dstBlendFactor"] = gfx.BlendFactor.ONE;
                          QlsbUtils.instance.playOneShot(eSound.fsMultiIncrease);
                          tween(newFreeRate).to(0.2, {
                            position: v3(_pos.x, _pos.y + 200, _pos.z)
                          }).call(function () {
                            //提示效果
                            _this9.showWinEffect(result.prizeAmount);

                            //提示效果金额
                            var com_Qlsb_winTip = _this9.Node_winTip.getComponent(Qlsb_winTip);
                            com_Qlsb_winTip.doShow(result.prizeAmount);

                            //得分金额
                            QlsbUtils.instance.updateLabelAddNf(_this9.Label_win, QlsbModel.instance.totalFreeWin, false, 0);
                            EventManager.instance.emit(eEvent.updateWin, QlsbModel.instance.totalFreeWin);
                            QlsbUtils.instance.playOneShot(eSound.prizeSmallwinMulti);
                          }).to(0.15, {
                            scale: v3(1.2, 1.2, 1.2)
                          }).to(0.1, {
                            scale: v3(1, 1, 1)
                          }).destroySelf().start();
                          _context2.next = 35;
                          return _this9.doAwait(0.5);
                        case 35:
                          _arrPro = [];
                          for (_i7 = 0; _i7 < _this9.Qlsb_symbolList.length; _i7++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i7].doClear());
                          }
                          _context2.next = 39;
                          return Promise.all(_arrPro);
                        case 39:
                          if (QlsbModel.instance.freeStatus != eRunStatus.NONE) {
                            QlsbModel.instance.totalRate += QlsbModel.instance.baseOdds;
                            _this9.updateFreeRateWheel();
                          }
                          dropDelay = 0;
                          if (!(QlsbUtils.instance.checkScatter(result) != 0)) {
                            _context2.next = 69;
                            break;
                          }
                          //drop
                          _arrPro = [];
                          for (_i8 = 0; _i8 < _this9.Qlsb_symbolList.length; _i8++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i8].doDropFront(resultNext, 0, true));
                          }
                          _context2.next = 46;
                          return Promise.all(_arrPro);
                        case 46:
                          //
                          _this9.showMask(true);
                          _this9.Node_helpTip.active = true;
                          _this9.Node_winTip.active = false;
                          _helpTip = _this9.Node_helpTip.getComponent(Qlsb_helpTip);
                          _helpTip.doShow(1);
                          _arrPro = [];
                          for (_i9 = 0; _i9 < _this9.Qlsb_symbolList.length; _i9++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i9].doScatterEffect());
                          }
                          _context2.next = 55;
                          return Promise.all(_arrPro);
                        case 55:
                          _this9.showMask(false);
                          for (_i10 = 0; _i10 < _this9.Qlsb_symbolList.length; _i10++) {
                            _Qlsb_symbol = _this9.Qlsb_symbolList[_i10];
                            if (_Qlsb_symbol._symbolList.length < _Qlsb_symbol.maxIndex) {
                              newScatterWait = _this9.scatter_wait_root.getChildByName("scatter_wait_" + _i10);
                              if (!newScatterWait) {
                                newScatterWait = instantiate(_this9.scatter_wait);
                                newScatterWait.name = "scatter_wait_" + _i10;
                                _this9.scatter_wait_root.addChild(newScatterWait);
                              }
                              newScatterWait.position = v3(_Qlsb_symbol.node.position.x, 0, 0);
                              newScatterWait.active = true;
                            }
                          }
                          _context2.next = 59;
                          return _this9.doAwait(0.5);
                        case 59:
                          //drop
                          dropDelay = 0.2;
                          _arrPro = [];
                          for (_i11 = 0; _i11 < _this9.Qlsb_symbolList.length; _i11++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i11].doDropFront(resultNext, dropDelay, false));
                          }
                          _context2.next = 64;
                          return Promise.all(_arrPro);
                        case 64:
                          _this9.scatter_wait_root.destroyAllChildren();
                          _helpTip.doShow();
                          for (_i12 = 0; _i12 < _this9.Qlsb_symbolList.length; _i12++) {
                            _Qlsb_symbolList2 = _this9.Qlsb_symbolList[_i12];
                            for (_iterator4 = _createForOfIteratorHelperLoose(_Qlsb_symbolList2._symbolList); !(_step4 = _iterator4()).done;) {
                              _symbolItem2 = _step4.value;
                              _symbolItem2.doScatterAni([{
                                strAni: "win_idle",
                                isLoop: true
                              }]);
                            }
                          }
                          _context2.next = 73;
                          break;
                        case 69:
                          //drop
                          _arrPro = [];
                          for (_i13 = 0; _i13 < _this9.Qlsb_symbolList.length; _i13++) {
                            _arrPro.push(_this9.Qlsb_symbolList[_i13].doDrop(resultNext));
                          }
                          _context2.next = 73;
                          return Promise.all(_arrPro);
                        case 73:
                          gts.Debug.Log("==========doDrop========");
                          symRate = 1;
                          for (_i14 = 0; _i14 < resultNext.openNum.length; _i14++) {
                            symRate *= resultNext.openNum[_i14].length;
                          }
                          if (parseInt(_this9.Label_symRate.string) != symRate) {
                            QlsbUtils.instance.updateLabelNomal(_this9.Label_symRate, symRate, false, QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE);
                          }

                          //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                          _context2.next = 79;
                          return _this9.doAwait(0.3);
                        case 79:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 9:
                  if (!(i < resultList.length)) {
                    _context3.next = 14;
                    break;
                  }
                  return _context3.delegateYield(_loop(), "t0", 11);
                case 11:
                  i++;
                  _context3.next = 9;
                  break;
                case 14:
                  this.showMask(false);
                  delayStart = 0.25;
                  QlsbModel.instance.isAuto = QlsbModel.instance.autoTimes > 0;
                  if (!QlsbModel.instance.isAuto) {
                    this.Skeleton_run.setCompleteListener(null);
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    if (QlsbModel.instance.totalFreeTimes == 0) {
                      this.Button_run.interactable = true;
                      this.Button_run.node.emit("resumeEffect");
                    }
                    this.Button_buy.interactable = true;
                    this.Button_buy.node.getChildByName("Sprite_text").getComponent(Sprite).color = color(255, 255, 255, 255);
                    btnRunEffect = this.Button_run.node.getComponent(Qlsb_btnEffect);
                    btnRunEffect.switchAni();

                    //            // QlsbUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    QlsbUtils.instance.updateLabel(this.Label_autoTimes, QlsbModel.instance.autoTimes);
                  } else {
                    this.Button_run.interactable = true;
                  }

                  // let curTotalWin = QlsbModel.instance.freeStatus != QlsbDef.eRunStatus.NONE ? QlsbModel.instance.totalFreeWin : QlsbModel.instance.curTotalWin;
                  if (!(QlsbModel.instance.curTotalWin > 0)) {
                    _context3.next = 27;
                    break;
                  }
                  _context3.next = 21;
                  return this.doShowBigWin(QlsbModel.instance.curTotalWin);
                case 21:
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  com_Qlsb_winTip = this.Node_winTip.getComponent(Qlsb_winTip);
                  com_Qlsb_winTip.doShow(QlsbModel.instance.curTotalWin, true);
                  this.showWinEffect(QlsbModel.instance.curTotalWin);
                  delayStart = 1.0;
                case 27:
                  if (QlsbModel.instance.endBalance > 0) {
                    QlsbModel.instance.curBalance = QlsbModel.instance.endBalance;
                    QlsbModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  QlsbModel.instance.gameStatus = eRunStatus.NONE;
                  if (!this.Button_buy.node.active && QlsbModel.instance.freeStatus == eRunStatus.NONE) {
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
                  QlsbModel.instance.curSpecialStartCol = 0;

                  //        //free and auto
                  if (!(QlsbModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context3.next = 42;
                    break;
                  }
                  doContinue = function doContinue() {
                    _this9.scheduleOnce(function () {
                      _this9.Node_bigWin.active = false;
                      if (QlsbModel.instance.totalFreeTimes > 0) {
                        QlsbCtrl.instance.reqBet();
                      } else {
                        QlsbModel.instance.freeStatus = eRunStatus.END;
                        _this9.doEndFree();
                      }
                    }, delayStart);
                  }; //免费次数-收集
                  Label_freeTimes = find("Node_freeInfo/Label_freeTimes", this.Node_free);
                  wPos = Label_freeTimes.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  arrPro = [];
                  for (_i = 0; _i < this.Qlsb_symbolList.length; _i++) {
                    arrPro.push(this.Qlsb_symbolList[_i].doScatterCollect(this.Node_scatterRoot, wPos));
                  }
                  _context3.next = 39;
                  return Promise.all(arrPro);
                case 39:
                  doContinue();
                  _context3.next = 57;
                  break;
                case 42:
                  if (!(QlsbModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 56;
                    break;
                  }
                  for (_i2 = 0; _i2 < this.Qlsb_symbolList.length; _i2++) {
                    Qlsb_symbolList = this.Qlsb_symbolList[_i2];
                    for (_iterator3 = _createForOfIteratorHelperLoose(Qlsb_symbolList._symbolList); !(_step3 = _iterator3()).done;) {
                      symbolItem = _step3.value;
                      symbolItem.doScatterAni([{
                        strAni: "win",
                        isLoop: false
                      }, {
                        strAni: "win_idle",
                        isLoop: true
                      }]);
                    }
                  }
                  _context3.next = 46;
                  return this.doAwait(1.25);
                case 46:
                  this.showMask();
                  helpTip = this.Node_helpTip.getComponent(Qlsb_helpTip);
                  helpTip.doShow(2);
                  lastResult = resultList[resultList.length - 1];
                  for (_i3 = 0; _i3 < this.Qlsb_symbolList.length; _i3++) {
                    _Qlsb_symbolList = this.Qlsb_symbolList[_i3];
                    for (j = 0; j < _Qlsb_symbolList._symbolList.length; j++) {
                      _symbolItem = _Qlsb_symbolList._symbolList[j];
                      if (_symbolItem.itemInfo.num >= eSymbol.SCATTER) {
                        _symbolItem.itemInfo.num = lastResult.openNum[_i3][j].num;
                        _symbolItem.node.getComponent(UITransform).priority = eZindex.SPECIAL;
                      }
                      _symbolItem.doScatterFlip(this.Node_scatterRoot);
                    }
                  }
                  this.scheduleOnce(function () {
                    var counts = _this9.Node_scatterRoot.children.length;
                    var maxRow = Math.floor(counts / 5) + 1;
                    var startPosY = maxRow % 2 == 0 ? Math.floor(maxRow / 2) * 55 : Math.floor(maxRow / 2) * 110;
                    for (var row = 0; row < maxRow; row++) {
                      var leftCounts = counts - row * 5;
                      var maxCol = leftCounts < 5 ? leftCounts : 5;
                      var startPosX = maxCol % 2 == 0 ? (Math.floor(maxCol / 2) - 0.5) * -135 : Math.floor(maxCol / 2) * -135;
                      for (var col = 0; col < maxCol; col++) {
                        var index = row * 5 + col;
                        var Node_scatter = _this9.Node_scatterRoot.children[index];
                        var toPos = v3(startPosX + col * 135, startPosY - row * 110, 0);
                        tween(Node_scatter).delay(0.2 + 0.1 * index).to(0.5, {
                          position: toPos
                        }).start();
                      }
                    }

                    //
                    _this9.Node_public.setPosition(_this9.Node_public.position.x, -635);
                    _this9.Node_menu.active = false;
                  }, 4);
                  this.scheduleOnce(function () {
                    var Label_freeTimes = find("Node_enter/Label_freeTimes", _this9.Node_free);
                    var Label_freeRate = find("Node_enter/Label_freeRate", _this9.Node_free);
                    var addRate = 1;
                    QlsbModel.instance.totalRate = 1;
                    Label_freeRate.getComponent(Label).string = "x1";
                    Label_freeTimes.getComponent(Label).string = "5";
                    var addList = [];
                    var doubleList = [];
                    for (var index = 0; index < _this9.Node_scatterRoot.children.length; index++) {
                      var Node_scatter = _this9.Node_scatterRoot.children[index];
                      var type = Node_scatter.getComponent(UITransform).priority - eSymbol.SCATTER;
                      if (type == 4) {
                        doubleList.push(index);
                      } else {
                        addList.push(index);
                      }
                    }
                    var _loop2 = function _loop2() {
                      var index = addList[_i4];
                      var Node_scatter = _this9.Node_scatterRoot.children[index];
                      var type = Node_scatter.getComponent(UITransform).priority - eSymbol.SCATTER;
                      QlsbUtils.instance.playOneShot(eSound.fsLoadingIncrease);
                      var toPos = Label_freeTimes.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                      toPos = _this9.Node_scatterRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                      tween(Node_scatter).delay(0.4 * _i4).to(0.4, {
                        position: toPos
                      }).to(0.15, {
                        scale: v3(2.5, 2.5, 2.5)
                      }).call(function () {
                        var Node_enter = _this9.Node_free.getChildByName("Node_enter");
                        var bo = Node_enter.getChildByName("bo");
                        bo.active = true;
                        var boSpine = bo.getComponent(sp.Skeleton);
                        boSpine.setAnimation(0, "add", false);
                        boSpine.setCompleteListener(function () {
                          boSpine.setCompleteListener(null);
                          bo.active = false;
                        });
                        var curRate = parseInt(Label_freeTimes.getComponent(Label).string);
                        QlsbUtils.instance.updateLabel(Label_freeTimes, "" + (curRate + type));
                      }).destroySelf().start();
                      tween(Node_scatter.getComponent(UIOpacity)).delay(0.4 * _i4 + 0.4).to(0.15, {
                        opacity: 50
                      }).start();
                    };
                    for (var _i4 = 0; _i4 < addList.length; _i4++) {
                      _loop2();
                    }
                    for (var _i5 = 0; _i5 < doubleList.length; _i5++) {
                      var _index = doubleList[_i5];
                      var _Node_scatter = _this9.Node_scatterRoot.children[_index];
                      QlsbUtils.instance.playOneShot(eSound.fsLoadingIncrease);

                      //double rate
                      var toPos = Label_freeRate.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                      toPos = _this9.Node_scatterRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                      tween(_Node_scatter).delay(0.4 * (_i5 + addList.length)).to(0.4, {
                        position: toPos
                      }).to(0.15, {
                        scale: v3(2.5, 2.5, 2.5)
                      }).call(function () {
                        addRate += 1;
                        QlsbUtils.instance.updateLabel(Label_freeRate, "x" + addRate);
                      }).destroySelf().start();
                      tween(_Node_scatter.getComponent(UIOpacity)).delay(0.4 * _i5 + 0.4).to(0.15, {
                        opacity: 50
                      }).start();
                    }
                    var maxTimes = addList.length > doubleList.length ? addList.length : doubleList.length;
                    _this9.scheduleOnce(function () {
                      var Node_progress = find("Node_enter/Node_progress", _this9.Node_free);
                      Node_progress.active = true;
                      var Label_percent = find("Node_enter/Node_progress/Label_percent", _this9.Node_free).getComponent(Label);
                      Label_percent.string = 0 + "%";
                      var Button_start = find("Node_enter/Button_start", _this9.Node_free);
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
                        _this9.scheduleOnce(_this9.doEnterFree, 3);
                      }).start();
                    }, (maxTimes + 1) * 0.4 + 0.5);
                  }, 6);
                  this.showFree();
                  _context3.next = 57;
                  break;
                case 56:
                  if (QlsbModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //                // this.doStartRun();
                      QlsbCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 57:
                  this.scheduleOnce(function () {
                    if (QlsbModel.instance.isAuto || QlsbModel.instance.freeStatus == eRunStatus.RUNNING) {
                      _this9.Label_gold.color = color(255, 255, 255, 255);
                      _this9.Label_bet.color = color(255, 255, 255, 255);
                      _this9.Label_win.color = color(255, 255, 255, 255);
                    } else {
                      _this9.Label_gold.color = color(150, 220, 255, 255);
                      _this9.Label_bet.color = color(150, 220, 255, 255);
                      _this9.Label_win.color = color(150, 220, 255, 255);
                      _this9.Button_menu.interactable = true;
                      _this9.Button_redus.interactable = QlsbModel.instance.curBet > 2;
                      _this9.Button_add.interactable = QlsbModel.instance.curBet < 200;
                      _this9.Button_auto.interactable = true;
                      _this9.Button_auto.node.getComponent(UIOpacity).opacity = _this9.Button_auto.interactable ? 255 : 100;
                      _this9.Button_add.node.getComponent(UIOpacity).opacity = _this9.Button_add.interactable ? 255 : 100;
                      _this9.Button_redus.node.getComponent(UIOpacity).opacity = _this9.Button_redus.interactable ? 255 : 100;
                      _this9.Button_menu.node.getComponent(UIOpacity).opacity = 255;
                    }
                  }, QlsbModel.instance.curTotalWin > 0 ? 0.25 : 0);
                case 58:
                case "end":
                  return _context3.stop();
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
          return new Promise(function (resolve, reject) {
            var rate = destWin / (QlsbModel.instance.curBet * 1000);
            if (rate < 20) {
              resolve();
              return;
            }
            _this10.Node_bigWin.getComponent(UITransform).priority = 52;
            _this10.Node_bigWin.active = true;
            _this10.Node_bigWin.scale = v3(0.5, 0.5, 0.5);
            var Node_bigWinEffect = _this10.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
            var lv = 0; //rate < 35 ? 1 : rate < 50 ? 2 : 3;

            var destLv = rate < 35 ? 1 : rate < 50 ? 2 : 3;
            var curLv = 1;
            var aniName = ["bigwin", "megawin", "superwin"];
            Node_bigWinEffect.setAnimation(0, aniName[curLv - 1] + "_intro", false);
            Node_bigWinEffect.addAnimation(0, aniName[curLv - 1] + "_idle", true);
            var Label_totalWin = _this10.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
            Label_totalWin.string = "";
            tween(_this10.Node_bigWin).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }, {
              easing: "quadOut"
            }).to(0.05, {
              scale: v3(1.0, 1.0, 1)
            }, {
              easing: "quadIn"
            }).call(function () {
              QlsbUtils.instance.playSound(eSound.bgmBigwinMain);
              var totalTime = destLv * 5;
              var dt = 0.05;
              var updateTimes = totalTime / dt;
              var destWin = QlsbModel.instance.curTotalWin;
              var disWin = Math.floor(QlsbModel.instance.curTotalWin / updateTimes);
              var curTotalWin = 0;
              tween(Label_totalWin.node).repeatForever(
              //                                // updateTimes + 1,
              tween(Label_totalWin.node).delay(dt).call(function () {
                var doEnd = function doEnd() {
                  QlsbUtils.instance.stopSound(eSound.bgmBigwinMain);
                  QlsbUtils.instance.playSound(eSound.bgmBigwinEnd);
                  Tween.stopAllByTarget(Label_totalWin.node);
                  curTotalWin = destWin;
                  if (Node_bigWinEffect.addAnimation.name != aniName[destLv - 1] + "_idle") {
                    Node_bigWinEffect.setAnimation(0, aniName[destLv - 1] + "_idle", true);
                  }
                  var inter = Common.numFormatInt(curTotalWin / 1000);
                  var digit = QlsbUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                  Label_totalWin.string = "" + inter + digit + "K";
                  tween(_this10.Node_bigWin).delay(1.0).call(function () {
                    _this10.Node_bigWin.active = false;
                    _this10.isStopBigWin = false;
                    resolve();
                  }).start();
                };
                curTotalWin += disWin;
                rate = curTotalWin / (QlsbModel.instance.curBet * 1000);
                lv = rate < 35 ? 1 : rate < 50 ? 2 : 3;
                if (curLv < lv) {
                  curLv = lv;
                  Node_bigWinEffect.setAnimation(0, aniName[curLv - 1] + "_intro", false);
                  Node_bigWinEffect.addAnimation(0, aniName[curLv - 1] + "_idle", true);
                }
                if (curTotalWin > destWin) {
                  doEnd();
                } else {
                  var inter = Common.numFormatInt(curTotalWin / 1000);
                  var digit = QlsbUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                  Label_totalWin.string = "" + inter + digit + "K";
                }
                if (_this10.isStopBigWin) {
                  //点击停止
                  doEnd();
                }
              })).start();
            }).start();
          });
        };
        _proto.hideFree = function hideFree() {
          var _this11 = this;
          this.unschedule(this.hideFree);

          //        // if (QlsbModel.instance.freeStatus != QlsbDef.eRunStatus.NONE) {
          QlsbModel.instance.freeStatus = eRunStatus.NONE;
          QlsbModel.instance.totalFreeTimes = 0;
          QlsbModel.instance.totalRate = 1;
          // AudioManager.instance.resumeMusic();
          // QlsbUtils.instance.stopSound(QlsbDef.eSound.free_winEffect);
          // QlsbUtils.instance.stopSound(QlsbDef.eSound.freeEnd_1);

          QlsbUtils.instance.playBgMusic();
          this.Node_rateWheel.destroyAllChildren();
          if (!QlsbModel.instance.isAuto) {
            this.Button_auto.interactable = true;
            this.Button_menu.interactable = true;
            this.Button_redus.interactable = QlsbModel.instance.curBet > 2;
            this.Button_add.interactable = QlsbModel.instance.curBet < 200;
            this.Button_auto.node.getComponent(UIOpacity).opacity = this.Button_auto.interactable ? 255 : 100;
            this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
            this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
            this.Button_menu.node.getComponent(UIOpacity).opacity = 255;
          }
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this11.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;

            // let Sprite_frame = find("Node_main/Sprite_frame", Node_enter);
            // Sprite_frame.active = false;

            _this11.Node_FreeEnd.active = false;
            _this11.Node_public.setPosition(_this11.Node_public.position.x, -399);
            _this11.Node_public.active = true;
            var Node_freeInfo = _this11.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = false;
            _this11.Node_bigWin.active = false;
            if (QlsbModel.instance.totalFreeWin > 0) {
              _this11.Node_helpTip.active = false;
              _this11.Node_winTip.active = true;
              var com_Qlsb_winTip = _this11.Node_winTip.getComponent(Qlsb_winTip);
              com_Qlsb_winTip.doShow(QlsbModel.instance.totalFreeWin, true);

              //提示效果
              _this11.showWinEffect(QlsbModel.instance.totalFreeWin);

              //得分金额
              QlsbUtils.instance.updateLabelAddNf(_this11.Label_win, QlsbModel.instance.totalFreeWin, false, 0);
              EventManager.instance.emit(eEvent.updateWin, QlsbModel.instance.totalFreeWin);
            }
          }).delay(0.5).call(function () {
            _this11.Node_free.active = false;
            if (QlsbModel.instance.isAuto) {
              _this11.scheduleOnce(function () {
                QlsbCtrl.instance.reqBet();
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
            var delayTime = isEnter ? 0 : 5.5;
            this.scheduleOnce(function () {
              _this12.Label_gold.color = color(255, 255, 255, 255);
              _this12.Label_bet.color = color(255, 255, 255, 255);
              _this12.Label_win.color = color(255, 255, 255, 255);
              var helpTip = _this12.Node_helpTip.getComponent(Qlsb_helpTip);
              helpTip.doShow();
              _this12.Label_win.string = "0.00";
              if (isEnter) {
                _this12.doEnterFree();
              } else {
                _this12.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.Sprite_bg.spriteFrame = this.arrBgSpFrame[0];
          this.Node_effect_freeLight.active = false;
          this.Node_freeDownBg.active = false;

          // this.clearCatNum();

          // this.Label_symRate.font = QlsbUtils.instance.getFontData("golden_04");

          this.Node_helpTip.getComponent(UITransform).width = 618;
          // this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_ELLIPSE;

          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Button_buy.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
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
          var Node_Enterbg = Node_enter.getChildByName("Node_Enterbg");
          Node_Enterbg.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          Node_Enterbg.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          QlsbUtils.instance.playOneShot(eSound.fsLoadingTrans);
          QlsbModel.instance.totalFreeWin = 0;
        };
        _proto.doEnterFree = function doEnterFree() {
          var _this13 = this;
          this.showMask(false);
          if (QlsbModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          QlsbModel.instance.freeStatus = eRunStatus.RUNNING;
          this.unschedule(this.doEnterFree);
          var doEnter = function doEnter() {
            QlsbUtils.instance.playBgMusic(true);
            var Node_enter = _this13.Node_free.getChildByName("Node_enter");
            tween(Node_enter.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).start();
            _this13.Node_info.node.active = false;

            //            //背景
            _this13.Sprite_bg.spriteFrame = _this13.arrBgSpFrame[1];
            _this13.Node_effect_freeLight.active = true;
            _this13.Node_freeDownBg.active = true;
            _this13.updateFreeRateWheel();

            // if (this.Label_catNum) {
            //     this.Label_catNum.active = false;
            // }

            _this13.Node_helpTip.getComponent(UITransform).width = 552; //624
            // this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_RECT;

            _this13.Node_public.setPosition(_this13.Node_public.position.x, -635);
            _this13.Node_action.active = false;
            _this13.Node_menu.active = false;
            _this13.Button_menu.node.active = false;
            _this13.Button_run.node.active = false;
            _this13.Button_buy.node.active = false;

            // this.Label_symRate.font = QlsbUtils.instance.getFontData("golden_03");

            var Node_freeInfo = _this13.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + QlsbModel.instance.totalFreeTimes;
            var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = _this13.arrTitle[0];

            // this.setFreeCatNum();

            // AudioManager.instance.resumeMusic();

            _this13.scheduleOnce(function () {
              QlsbCtrl.instance.reqBet();
            }, 2.0);
          };
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          if (Node_enter.active) {
            // QlsbUtils.instance.playSound(QlsbDef.eSound.zhanKai);

            this.scheduleOnce(doEnter, 0.5);
          } else {
            doEnter();
          }
        };
        _proto.doEndFree = function doEndFree() {
          var _this14 = this;
          //end
          this.Node_FreeEnd.active = true;
          this.Node_FreeEnd.getComponent(UIOpacity).opacity = 0;
          this.Node_public.active = false;
          var Label_totalWin = this.Node_FreeEnd.getChildByName("Label_totalWin");
          Label_totalWin.getComponent(Label).string = "";
          var Label_freeTimes = this.Node_FreeEnd.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + QlsbModel.instance.totalFreeTimesBack;
          var Button_exit = this.Node_FreeEnd.getChildByName("Button_exit");
          Button_exit.active = false;
          var endSpine = this.Node_FreeEnd.getComponent(sp.Skeleton);
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);
          this.scheduleOnce(function () {
            //            //免费总得分
            Label_totalWin.scale = v3(1.0, 1.0, 1);
            QlsbUtils.instance.updateLabelAddNf(Label_totalWin.getComponent(Label), QlsbModel.instance.totalFreeWin);
          }, 0.5);
          this.scheduleOnce(function () {
            var Button_exit = _this14.Node_FreeEnd.getChildByName("Button_exit");
            Button_exit.active = true;
            Button_exit.scale = v3(0.1, 0.1, 0.1);
            QlsbUtils.instance.stopSound(eSound.bgmTotalwinMain);
            QlsbUtils.instance.playSound(eSound.bgmTotalwinEnd);
            tween(Button_exit).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
          }, 1.5);
          tween(this.Node_FreeEnd.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(this.setEndFree, 0.2);

          // audioEngine.pauseMusic();
          // AudioManager.instance.pauseMusic();

          QlsbUtils.instance.playSound(eSound.bgmTotalwinMain);

          //        //2.0秒后返回正常
          this.scheduleOnce(this.hideFree, 8);
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(QlsbModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            QlsbUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        };
        _proto.updateFreeRateWheel = function updateFreeRateWheel() {
          var _this15 = this;
          var startRate = QlsbModel.instance.totalRate - QlsbModel.instance.baseOdds * 3;
          if (this.Node_rateWheel.children.length == 0) {
            for (var i = 0; i < 7; i++) {
              var curRate = startRate + i * QlsbModel.instance.baseOdds;
              if (curRate > 0) {
                var Label_freeRate = this.Node_rateWheel.getChildByName("Label_freeRate_" + curRate);
                if (!Label_freeRate) {
                  Label_freeRate = instantiate(this.Node_rateWheelTemp);
                  Label_freeRate.name = "Label_freeRate_" + curRate;
                  this.Node_rateWheel.addChild(Label_freeRate);
                  Label_freeRate.getComponent(UITransform).priority = i;
                }
                Label_freeRate.active = true;
                Label_freeRate.position = cRateWheelDef[i].pos;
                Label_freeRate.eulerAngles = cRateWheelDef[i].rotation;
                Label_freeRate.getComponent(Label).string = "x" + curRate;
                Label_freeRate.scale = i == 3 ? v3(2.5, 2.5, 2.5) : v3(1, 1, 1);
                Label_freeRate.getComponent(Label).color = i == 3 ? color(255, 255, 255, 255) : color(255, 255, 255, 150);
                Label_freeRate.getComponent(Label).font = this.Label_rateFont[i < 3 ? 1 : 0];
                Label_freeRate.getComponent(UITransform).priority = i == 3 ? 1 : 0;
              }
            }
            return;
          }
          var duration = 0.25;
          var arrTemp = [-1, -1, -1, -1, -1, -1, -1];
          for (var _i15 = 0; _i15 < 7; _i15++) {
            var _curRate = startRate + _i15 * QlsbModel.instance.baseOdds;
            arrTemp[_i15] = _curRate > 0 ? _curRate : -1;
            if (arrTemp[_i15] != -1) {
              var _Label_freeRate = this.Node_rateWheel.getChildByName("Label_freeRate_" + _curRate);
              if (!_Label_freeRate) {
                _Label_freeRate = instantiate(this.Node_rateWheelTemp);
                _Label_freeRate.active = true;
                _Label_freeRate.name = "Label_freeRate_" + _curRate;
                _Label_freeRate.getComponent(Label).string = "x" + _curRate;
                this.Node_rateWheel.addChild(_Label_freeRate);
                _Label_freeRate.getComponent(UITransform).priority = _i15;
                _Label_freeRate.position = cRateWheelDef[6].pos;
                _Label_freeRate.eulerAngles = cRateWheelDef[6].rotation;
              }
              var startPos = _Label_freeRate.position;
              var endPos = cRateWheelDef[_i15].pos;
              var p1 = v3((startPos.x + endPos.x) / 2.0, (startPos.y + endPos.y) / 2.0, 0);
              tween(_Label_freeRate).bezierTo(duration, startPos, p1, endPos).start();
              tween(_Label_freeRate).to(duration, {
                eulerAngles: cRateWheelDef[_i15].rotation
              }).start();
              if (_i15 == 3) {
                QlsbUtils.instance.playOneShot(eSound.fsMultiIncrease);
                _Label_freeRate.scale = v3(0.25, 0.25, 0.25);
                _Label_freeRate.getComponent(UIOpacity).opacity = 0;
                tween(_Label_freeRate).delay(duration).call(function () {
                  var bo = _this15.Node_freeDownBg.getChildByName("bo");
                  bo.active = true;
                  var boSpine = bo.getComponent(sp.Skeleton);
                  boSpine.setAnimation(0, "levelup", false);
                  boSpine.setCompleteListener(function () {
                    boSpine.setCompleteListener(null);
                    bo.active = false;
                  });
                }).to(0.25, {
                  scale: v3(2.5, 2.5, 2.5)
                }, {
                  easing: "circOut"
                }).start();
                tween(_Label_freeRate.getComponent(UIOpacity)).delay(duration).to(0.25, {
                  opacity: 255
                }, {
                  easing: "circOut"
                }).start();
              } else if (_i15 == 2) {
                _Label_freeRate.scale = v3(1, 1, 1);
                _Label_freeRate.getComponent(UIOpacity).opacity = 0;
                tween(_Label_freeRate.getComponent(UIOpacity)).to(duration, {
                  opacity: 255
                }).start();
              }
              _Label_freeRate.getComponent(UITransform).priority = _i15 == 3 ? 1 : 0;
              _Label_freeRate.getComponent(Label).color = _i15 == 3 ? color(255, 255, 255, 255) : color(255, 255, 255, 150);
              _Label_freeRate.getComponent(Label).font = this.Label_rateFont[_i15 < 3 ? 1 : 0];
            }
          }
          if (this.Node_rateWheel.children.length > 7) {
            for (var _i16 = 0; _i16 < this.Node_rateWheel.children.length - 7; _i16++) {
              this.Node_rateWheel.children[_i16].destroy();
            }
          }
          return;
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this16 = this;
          switch (event) {
            case eProto.HD_info:
              {
                var openNum = QlsbModel.instance.gameInfo.OpenNums[QlsbModel.instance.gameInfo.OpenNums.length - 1].openNum;

                //纵向
                for (var i = 0; i < this.Qlsb_symbolList.length; i++) {
                  var InitPosMsg = openNum[i];
                  this.Qlsb_symbolList[i].init(InitPosMsg);
                }
                this.scheduleOnce(function () {
                  _this16.Button_run.interactable = true;
                }, 1.0);
                this.Label_bet.string = QlsbUtils.instance.numberFormat(QlsbModel.instance.curBet, 2.0) + "K";
                var symRate = 1;
                for (var _i17 = 0; _i17 < openNum.length; _i17++) {
                  symRate *= openNum[_i17].length;
                }
                QlsbUtils.instance.updateLabelNomal(this.Label_symRate, symRate, false, QlsbModel.instance.isQuickStop && QlsbModel.instance.freeStatus == eRunStatus.NONE);
                if (QlsbModel.instance.totalFreeTimes > 0) {
                  this.showFree(true);
                }

                ////////////////////
                QlsbModel.instance.curTotalWin = 0;
                for (var _iterator5 = _createForOfIteratorHelperLoose(QlsbModel.instance.gameInfo.OpenNums), _step5; !(_step5 = _iterator5()).done;) {
                  var result = _step5.value;
                  QlsbModel.instance.curTotalWin += result.prizeAmount;
                }
                if (QlsbModel.instance.curTotalWin > 0) {
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  var com_Qlsb_winTip = this.Node_winTip.getComponent(Qlsb_winTip);
                  com_Qlsb_winTip.doShow(QlsbModel.instance.curTotalWin, true);

                  //提示效果
                  this.showWinEffect(QlsbModel.instance.curTotalWin);

                  //得分金额
                  QlsbUtils.instance.updateLabelAddNf(this.Label_win, QlsbModel.instance.curTotalWin, false, 0);
                }
                this.Button_redus.interactable = QlsbModel.instance.curBet > 2;
                this.Button_add.interactable = QlsbModel.instance.curBet < 200;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                var arrIndex = QlsbUtils.instance.getIndexByBaseBet(QlsbModel.instance.curBet);
                QlsbModel.instance._curIndex_baseScore = arrIndex[0];
                QlsbModel.instance._curIndex_baseRate = arrIndex[1];
                QlsbModel.instance._curIndex_baseBet = arrIndex[2];
                Common.closeWait();
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_BuyFree:
              {
                var helpTip = this.Node_helpTip.getComponent(Qlsb_helpTip);
                helpTip.doShow(3);
              }
            case eProto.HD_Bet:
              {
                this.doStartRun();
                this.updateGold();
                break;
              }
            // case QlsbDef.eProto.HD_BoYiBo: {
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
        return QlsbGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_colEffect", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_helpTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Qlsb_symbolList", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec12], {
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
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipEffect", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Button_buy", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Label_symRate", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_effect_freeLight", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_scatterRoot", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeDownBg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateWheel", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateWheelTemp", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "zp_light", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "bglight", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Label_rateFont", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Node_FreeEnd", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "scatter_wait_root", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "scatter_wait", [_dec41], {
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

System.register("chunks:///_virtual/QlsbModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './QlsbDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "af3857HH7RK9YTcIRBO1djX", "QlsbModel", undefined);
      var QlsbModel = exports('QlsbModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(QlsbModel, _GameDef$BaseSington);
        function QlsbModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.selAutoIndex = 0;
          _this.autoTimes = 0;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.stopNum = 0;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          _this.isAuto = false;
          _this.isQuickStop = false;
          _this.curBet = 2.0;
          _this.curBetBase = 0;
          _this.curBetRate = 0;
          _this.curTotalBet = 2.0;
          _this.curTotalWin = 0;
          //    // curRate: number = 0;
          _this.totalRate = 1;
          _this.baseOdds = 1;
          _this.betResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          // totalFreeRate = 1;
          _this.totalFreeTimesBack = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.curSpecialStartCol = 0;
          _this.boType = "count";
          _this.flipNums = 0;
          _this.curSystemRate = 1;
          _this.onRecvData = {
            Action: "HD_Bet",
            Code: 0,
            Data: {
              OpenNums: [{
                odds: 1,
                openNum: [[{
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 10,
                  remove: true,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }], [{
                  count: 1,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 12,
                  remove: true,
                  type: 0
                }, {
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 1
                }], [{
                  count: 4,
                  num: 10,
                  remove: true,
                  type: 1
                }, {
                  count: 1,
                  num: 6,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 3,
                  remove: false,
                  type: 0
                }], [{
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 2,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 11,
                  remove: false,
                  type: 0
                }], [{
                  count: 3,
                  num: 10,
                  remove: false,
                  type: 1
                }, {
                  count: 1,
                  num: 1,
                  remove: false,
                  type: 0
                }, {
                  count: 2,
                  num: 3,
                  remove: false,
                  type: 0
                }], [{
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 9,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }]],
                prizeAmount: 10000
              }, {
                odds: 1,
                openNum: [[{
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 3,
                  remove: true,
                  type: 0
                }], [{
                  count: 1,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 1
                }, {
                  count: 1,
                  num: 3,
                  remove: true,
                  type: 0
                }], [{
                  count: 4,
                  num: 1,
                  remove: false,
                  type: 2
                }, {
                  count: 1,
                  num: 6,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 3,
                  remove: true,
                  type: 0
                }], [{
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 2,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 11,
                  remove: false,
                  type: 0
                }], [{
                  count: 3,
                  num: 10,
                  remove: false,
                  type: 1
                }, {
                  count: 1,
                  num: 1,
                  remove: false,
                  type: 0
                }, {
                  count: 2,
                  num: 3,
                  remove: false,
                  type: 0
                }], [{
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 9,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }]],
                prizeAmount: 100000
              }, {
                odds: 1,
                openNum: [[{
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 4,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 7,
                  remove: false,
                  type: 0
                }], [{
                  count: 1,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 1
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }], [{
                  count: 4,
                  num: 1,
                  remove: false,
                  type: 2
                }, {
                  count: 1,
                  num: 6,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 6,
                  remove: false,
                  type: 0
                }], [{
                  count: 4,
                  num: 5,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 2,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 11,
                  remove: false,
                  type: 0
                }], [{
                  count: 3,
                  num: 10,
                  remove: false,
                  type: 1
                }, {
                  count: 1,
                  num: 1,
                  remove: false,
                  type: 0
                }, {
                  count: 2,
                  num: 3,
                  remove: false,
                  type: 0
                }], [{
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 9,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 8,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 13,
                  remove: false,
                  type: 0
                }, {
                  count: 1,
                  num: 10,
                  remove: false,
                  type: 0
                }]],
                prizeAmount: 0
              }],
              betAmount: 200000,
              freeInfo: {
                baseOdds: 0,
                odds: 0,
                surplusFreeCount: 0,
                totalFreePrizeAmount: 0,
                totalFreePrizeCount: 0
              },
              freePrize: false,
              prizeAmount: 110000
            },
            ErrMsg: "THAO TÁC THÀNH CÔNG",
            GameType: "slotKylin",
            cmd: "slotKylin/HD_Bet"
          };
          return _this;
        }
        var _proto = QlsbModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return QlsbModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/QlsbScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './QlsbDef.ts', './QlsbUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, QlsbUtils, Common;
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
      QlsbUtils = module.QlsbUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "de966ac6K5I8aas+7DtIDzJ", "QlsbScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var QlsbScene = exports('default', (_dec = ccclass("QlsbScene"), _dec2 = menu("game/QlsbGame/QlsbScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(QlsbScene, _Component);
        function QlsbScene() {
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
        var _proto = QlsbScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          QlsbUtils.instance.bundle = assetManager.getBundle(cBundle);
          QlsbUtils.instance.preLoad();
          QlsbUtils.instance.playBgMusic();
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
            //            // let orientation = macro.ORIENTATION_LANDSCAPE;
            //            // let designResolution = size(1334, 750);
            //            // let resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;
            //            // if (!QlsbUtils.instance.isChangeOrientation()) {
            //            //     orientation = macro.ORIENTATION_PORTRAIT;
            //            //     designResolution = size(750, 1334);
            //            //     resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;
            //            //     this._node_Game.scale = 1.0;
            //            // } else {
            //            //     this._node_Game.scale = 750 / 1334;
            //            // }
            //            // view.setDesignResolutionSize(designResolution.width, designResolution.height, resolutionPolicy);
            //            // view.setOrientation(orientation);

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
            QlsbUtils.instance.bundle.load("prefab/QlsbGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (QlsbUtils.instance.isChangeOrientation()) {
                _this4._node_Game.scale = v3(750 / 1334, 750 / 1334, 1);
              }
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return QlsbScene;
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

System.register("chunks:///_virtual/QlsbUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './QlsbDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, Sprite, sp, sys, SpriteFrame, GameDef, AudioManager, eSound, eSymbol, cBaseScore, Common;
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
      cclegacy._RF.push({}, "09e2azALgtCjqOwGAAsbp5t", "QlsbUtils", undefined);
      var symbol_nomal_icon = ["h_toad", "h_ship", "h_urn", "h_vege", "h_pouch", "h_coins", "l_a", "l_k", "l_q", "l_j", "l_10", "s_wild_a", "s_scatter", "s_wild_b_fg", "s_wild_c_fg", "s_wild_d_fg"];

      //TOAD = 2,---TEN = 12,
      var symbol_aniName = ["idle", "idle", "idle", "idle", "idle", "idle", "a_idle", "k_idle", "q_idle", "j_idle", "10_idle"];
      var symbol_skeletonName = ["icon_toad", "icon_ship", "icon_urn", "icon_vege", "icon_pouch", "icon_coins", "icon_a", "icon_k", "icon_q", "icon_j", "icon_10", "icon_wild", "icon_scatter"];
      var QlsbUtils = exports('QlsbUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(QlsbUtils, _GameDef$BaseSington);
        function QlsbUtils() {
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
        var _proto = QlsbUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/QlsbGameView");
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
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator5 = _createForOfIteratorHelperLoose(arrSpineData), _step5; !(_step5 = _iterator5()).done;) {
                        var spineData = _step5.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  _context3.next = 8;
                  return Promise.all(arrHLoad);
                case 8:
                  if (cb) {
                    cb();
                  }
                case 9:
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
        _proto.playBgMusic = function playBgMusic(isFree) {
          if (isFree === void 0) {
            isFree = false;
          }
          AudioManager.instance.playBgMusic(isFree ? eSound.bgFree : eSound.bg, this.bundle, true);
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
          QlsbUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              QlsbUtils.instance.stopSound(eSound.numAdd);
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
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat, isQuick, curNum) {
          var _this9 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (isQuick === void 0) {
            isQuick = false;
          }
          if (curNum === void 0) {
            curNum = 0;
          }
          var destWin = nums;
          var curWin = curNum;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          QlsbUtils.instance.playSound(eSound.numAdd);
          var delay = isQuick ? 0.01 : 0.075;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(delay).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              QlsbUtils.instance.stopSound(eSound.numAdd);
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
            isIdle = false;
          }
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex - 1];
            symbol = isIdle ? symbol : symbol + "_blur";
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length, isIdle) {
          if (length === void 0) {
            length = 0;
          }
          if (isIdle === void 0) {
            isIdle = false;
          }
          var strLen = ["a", "b", "c", "d"];
          var symbol = null;

          //     BOAT = 3,
          // BOWL = 4,
          // CABBAGE = 5,
          // BAG = 6,
          // COPPER = 7,

          switch (symbolIndex) {
            case eSymbol.SCATTER:
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
              {
                symbol = "h_block_feature";
                break;
              }
            case eSymbol.WILD:
              {
                symbol = "s_wild_" + strLen[length - 1] + "_bg";
                isIdle = false;
                break;
              }
            case eSymbol.A:
            case eSymbol.K:
            case eSymbol.Q:
            case eSymbol.J:
            case eSymbol.TEN:
              {
                symbol = "l_block_" + strLen[length - 1];
                break;
              }
            case eSymbol.TOAD:
              {
                symbol = "h_block_toad_" + strLen[length - 1];
                break;
              }
            case eSymbol.BOAT:
              {
                symbol = "h_block_ship_" + strLen[length - 1];
                break;
              }
            case eSymbol.BOWL:
              {
                symbol = "h_block_urn_" + strLen[length - 1];
                break;
              }
            case eSymbol.CABBAGE:
              {
                symbol = "h_block_vege_" + strLen[length - 1];
                break;
              }
            case eSymbol.BAG:
              {
                symbol = "h_block_pouch_" + strLen[length - 1];
                break;
              }
            case eSymbol.COPPER:
              {
                symbol = "h_block_coins_" + strLen[length - 1];
                break;
              }
          }
          symbol = isIdle ? symbol : symbol + "_blur";
          if (this.arrIconBoxSpriteFrame) {
            var ret = this.arrIconBoxSpriteFrame[symbol];
            if (!ret) {
              return null;
            }
            return ret;
          }
          return null;
        };
        _proto.getItemSymbolIconFrame = function getItemSymbolIconFrame(rim, length, isIdle) {
          if (rim === void 0) {
            rim = 0;
          }
          if (length === void 0) {
            length = 0;
          }
          if (isIdle === void 0) {
            isIdle = false;
          }
          if (rim == 0 || length < 2) {
            return null;
          }
          var strLen = ["a", "b", "c", "d"];
          var symbol = rim == 1 ? "silver_block_" + strLen[length - 1] : "gold_block_" + strLen[length - 1];
          symbol = isIdle ? symbol : symbol + "_blur";
          if (this.arrIconFrameSpriteFrame) {
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle) {
          if (isIdle === void 0) {
            isIdle = false;
          }
          var strAni = null;
          switch (symbolIndex) {
            case eSymbol.SCATTER:
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
              {
                strAni = "idle";
                break;
              }
            case eSymbol.WILD:
              {
                strAni = isIdle ? "win" : "idle";
                break;
              }
            default:
              {
                strAni = symbol_aniName[symbolIndex - 1];
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
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = null;
          switch (index) {
            case eSymbol.SCATTER:
            case eSymbol.SCATTER_SPINS1:
            case eSymbol.SCATTER_SPINS2:
            case eSymbol.SCATTER_SPINS3:
            case eSymbol.SCATTER_DOUBLE:
              {
                strAni = "icon_scatter";
                break;
              }
            case eSymbol.WILD:
              {
                strAni = "icon_wild";
                break;
              }
            default:
              {
                strAni = symbol_skeletonName[index - 1];
                break;
              }
          }
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
        return QlsbUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/QlsbGame', 'chunks:///_virtual/QlsbGame'); 
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