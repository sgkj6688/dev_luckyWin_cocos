System.register("chunks:///_virtual/zcm_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, Node, Component, EventManager;
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
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e857cQuHGRIarg5ajp9FKwy", "zcm_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var zcm_btnEffect = exports('default', (_dec = ccclass("ZcmBtnEffect"), _dec2 = menu("game/ZcmGame/zcm_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_btnEffect, _Component);
        function zcm_btnEffect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_skeletonData", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "animation", _descriptor2, _assertThisInitialized(_this));
          _this.Node_effect = null;
          return _this;
        }
        var _proto = zcm_btnEffect.prototype;
        _proto.onLoad = function onLoad() {
          // if (CC_EDITOR && this._skeletonData) {
          //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
          //     Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
          // }
        };
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

              //                //@ts-ignore
              enumDef[name] = i + 1;
            }
            animEnum = Enum(enumDef);
            return animEnum;
          }
          return null;
        };
        _proto._updateAnimEnum = function _updateAnimEnum() {
          var animEnum = this._getAnimEnum(this.skeletonData);
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.Node_effect) {
            this.Node_effect.destroyFromParent();
            this.Node_effect = null;
          }
          EventManager.instance.on("onMouseMoveIn" + this.node.name, function (event) {
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
                  var _Skeleton = _this2.Node_effect.getComponent(sp.Skeleton);
                  _Skeleton.skeletonData = _this2.skeletonData;
                  var sd = _this2.skeletonData.getRuntimeData(true);
                  var ani = sd.animations[_this2.animation - 1];
                  _Skeleton.setAnimation(0, ani.name, true);
                }
              });
            }
          }, this);
          EventManager.instance.on("onMouseMoveOut" + this.node.name, function (event) {
            if (_this2.Node_effect) {
              _this2.Node_effect.destroyFromParent();
              _this2.Node_effect = null;
            }
          }, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("onMouseMoveIn" + this.node.name);
          this.node.off("onMouseMoveOut" + this.node.name);
        }
        //    // update (dt) {}
        ;

        _createClass(zcm_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
            // if (CC_EDITOR && this._skeletonData) {
            //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
            //     Editor.Utils.refreshSelectedInspector("node", this.node.uuid);
            // }
          }
        }]);

        return zcm_btnEffect;
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

System.register("chunks:///_virtual/zcm_buyReward.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './ZcmCtrl.ts', './ZcmModel.ts', './ZcmUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ViewManager, ZcmCtrl, ZcmModel, ZcmUtils;
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
      ZcmCtrl = module.ZcmCtrl;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "83b0boTI51FrZ7LM6AV+TNB", "zcm_buyReward", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_buyReward = exports('default', (_dec = ccclass("ZcmBuyReward"), _dec2 = menu("game/ZcmGame/zcm_buyReward"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_buyReward, _Component);
        function zcm_buyReward() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = zcm_buyReward.prototype;
        _proto.onLoad = function onLoad() {
          this.Label_gold.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet * 75, 2.0) + "K";
        };
        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_cancel":
              {
                break;
              }
            case "Button_ok":
              {
                ZcmCtrl.instance.reqBet(true);
                break;
              }
          }
          ViewManager.instance.closePopView(this.node);
        };
        return zcm_buyReward;
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

System.register("chunks:///_virtual/zcm_free.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmCtrl.ts', './ZcmModel.ts', './ZcmDef.ts', './ZcmUtils.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, tween, UIOpacity, Component, ZcmCtrl, ZcmModel, eSound, eRunStatus, ZcmUtils, AudioManager;
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
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      ZcmCtrl = module.ZcmCtrl;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "e0e0c6B+ZxFyY8+9nAWcsgQ", "zcm_free", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_free = exports('default', (_dec = ccclass("ZcmFree"), _dec2 = menu("game/ZcmGame/zcm_free"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_free, _Component);
        function zcm_free() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_freeInfo", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_enter", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_end", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = zcm_free.prototype;
        _proto.updateFreeTimes = function updateFreeTimes(freeTimes) {
          freeTimes = freeTimes || ZcmModel.instance.totalFreeTimes;
          var Label_freeTimes = this.Node_freeInfo.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + freeTimes;
        };
        _proto.doEnterFree = function doEnterFree(freeTimes) {
          var _this2 = this;
          freeTimes = freeTimes || ZcmModel.instance.totalFreeTimes;

          //        //enter close
          tween(this.Node_enter.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            _this2.Node_enter.active = false;
            ZcmUtils.instance.stopSound(eSound.startFree);
          }).start();

          //        //免费次数
          this.Node_freeInfo.active = true;
          this.updateFreeTimes(freeTimes);
          var Node_freePartical = this.node.getChildByName("Node_freePartical");
          Node_freePartical.active = true;
          AudioManager.instance.resumeMusic();
          if (ZcmModel.instance.freeStatus == eRunStatus.NONE) {
            ZcmModel.instance.freeStatus = eRunStatus.RUNNING;
            this.scheduleOnce(function () {
              ZcmCtrl.instance.reqBet();
            }, 2.0);
          }
        };
        _proto.doShow = function doShow() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            _this3.node.active = true;
            _this3.node.getComponent(UIOpacity).opacity = 0;

            //            //enter
            _this3.Node_enter.getComponent(UIOpacity).opacity = 255;
            _this3.Node_enter.active = true;

            //            //免费次数
            var Label_freeTimes = _this3.Node_enter.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + ZcmModel.instance.totalFreeTimes;
            ZcmModel.instance.totalFreeWin = 0;
            tween(_this3.node.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(function () {
              _this3.scheduleOnce(_this3.doEnterFree, 3.0);
            }).start();
          });
        };
        _proto.doHide = function doHide() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            AudioManager.instance.resumeMusic();
            ZcmUtils.instance.stopSound(eSound.freeEnd_1);
            tween(_this4.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              _this4.node.active = false;
              _this4.Node_enter.active = false;
              _this4.Node_end.active = false;
              _this4.Node_freeInfo.active = false;
              _this4.Node_bigWin.active = false;
              var Node_freePartical = _this4.node.getChildByName("Node_freePartical");
              Node_freePartical.active = false;
              if (ZcmModel.instance.isAuto) {
                _this4.scheduleOnce(function () {
                  ZcmCtrl.instance.reqBet();
                }, 0.25);
              }
            }).start();
            ZcmModel.instance.freeStatus = eRunStatus.NONE;
          });
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //FREE
            case "Button_enter":
              {
                this.doEnterFree();
                break;
              }
            case "Button_exit":
              {
                this.doHide();
              }
          }
        };
        return zcm_free;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_freeInfo", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_enter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_end", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec6], {
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

System.register("chunks:///_virtual/zcm_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, UITransform, tween, v3, Component;
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
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "112dfHwdI1NkYJ1TuNiuLAv", "zcm_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_helpTip = exports('default', (_dec = ccclass("ZcmHelpTip"), _dec2 = menu("game/ZcmGame/zcm_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_helpTip, _Component);
        function zcm_helpTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_tip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          //    // update (dt) {}
          _this.curIndex = 0;
          return _this;
        }
        var _proto = zcm_helpTip.prototype;
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
        _proto.doShow = function doShow() {
          var _this2 = this;
          var len = this.arrSpriteFrame.length;
          this.curIndex = (this.curIndex + 1) % len;
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.getComponent(UITransform).width) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.getComponent(UITransform).width) / 2.0 + 30;
            this.Sprite_tip.node.setPosition(disX, this.Sprite_tip.node.position.y);
            var toX = disX - this.Sprite_tip.node.getComponent(UITransform).width - 60;
            tween(this.Sprite_tip.node).delay(0.5).to(this.Sprite_tip.node.getComponent(UITransform).width / 200, {
              position: v3(toX, this.Sprite_tip.node.position.y)
            }).call(function () {
              _this2.doShow();
            }).start();
          } else {
            this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
            tween(this.Sprite_tip.node).delay(1.0).call(function () {
              _this2.doShow();
            }).start();
          }
        };
        return zcm_helpTip;
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

System.register("chunks:///_virtual/zcm_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmCtrl.ts', './ZcmDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, ZcmCtrl, eProto, GameDef, Common;
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
      ZcmCtrl = module.ZcmCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bace411v1RBWKgn3Bng7nJh", "zcm_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var zcm_history = exports('default', (_dec = ccclass("ZcmHistory"), _dec2 = menu("game/ZcmGame/zcm_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(zcm_history, _GameDef$BaseView);
        function zcm_history() {
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
        var _proto = zcm_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, ZcmCtrl.instance);
          ZcmCtrl.instance.reqHistory();
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
          ZcmCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          ZcmCtrl.instance.reqHistory(start);
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
        return zcm_history;
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

System.register("chunks:///_virtual/zcm_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './ZcmUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, ZcmUtils, Common;
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
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "608c4hlojJAk7eM+n4ZgHPU", "zcm_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_historyItem = exports('default', (_dec = ccclass("ZcmHistoryItem"), _dec2 = menu("game/ZcmGame/zcm_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_historyItem, _Component);
        function zcm_historyItem() {
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
        var _proto = zcm_historyItem.prototype;
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
          this.Label_bet.string = ZcmUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + ZcmUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + ZcmUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(zcm_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return zcm_historyItem;
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

System.register("chunks:///_virtual/zcm_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmCtrl.ts', './ZcmDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ZcmCtrl, eProto, GameDef, Common;
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
      ZcmCtrl = module.ZcmCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0b9623lp2JKMqHdAMRhwdep", "zcm_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var zcm_rank = exports('default', (_dec = ccclass("ZcmRank"), _dec2 = menu("game/ZcmGame/zcm_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(zcm_rank, _GameDef$BaseView);
        function zcm_rank() {
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
        var _proto = zcm_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, ZcmCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          ZcmCtrl.instance.reqRank();
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
        return zcm_rank;
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

System.register("chunks:///_virtual/zcm_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './ZcmUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, ZcmUtils;
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
      ZcmUtils = module.ZcmUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "54b74E6bYBNC4WNT5OWiKix", "zcm_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_rankItem = exports('default', (_dec = ccclass("ZcmRankItem"), _dec2 = menu("game/ZcmGame/zcm_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_rankItem, _Component);
        function zcm_rankItem() {
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
        var _proto = zcm_rankItem.prototype;
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
          this.Label_win.string = ZcmUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(zcm_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return zcm_rankItem;
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

System.register("chunks:///_virtual/zcm_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmModel.ts', './ZcmDef.ts', './ZcmUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, ZcmModel, eAutoRateType, eEvent, ZcmUtils, EventManager;
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
      ZcmModel = module.ZcmModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "08061RtDy1OAqU8wIXZR7SX", "zcm_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_ScrollView = exports('default', (_dec = ccclass("ZcmScrollView"), _dec2 = menu("game/ZcmGame/zcm_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_ScrollView, _Component);
        function zcm_ScrollView() {
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
        var _proto = zcm_ScrollView.prototype;
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
                this._curIndex = ZcmModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = ZcmModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = ZcmModel.instance._curIndex_baseBet;
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
                var num = index == 0 ? 0.1 : index * 0.5;
                var strNum = ZcmUtils.instance.numberFormat(num, 2);
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
                var _strNum = ZcmUtils.instance.numberFormat((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);

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
        return zcm_ScrollView;
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

System.register("chunks:///_virtual/zcm_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmModel.ts', './ZcmDef.ts', './ViewManager.ts', './EventManager.ts', './ZcmUtils.ts', './zcm_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, ZcmModel, eEvent, eAutoRateType, ViewManager, EventManager, ZcmUtils, zcm_ScrollView, Common;
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
      ZcmModel = module.ZcmModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      zcm_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "1368booaKZHmKwawgu3rrES", "zcm_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var zcm_setBase = exports('default', (_dec = ccclass("ZcmSetBase"), _dec2 = menu("game/ZcmGame/zcm_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_setBase, _Component);
        function zcm_setBase() {
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
        var _proto = zcm_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(ZcmModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (ZcmModel.instance.curTotalWin > 0) {
            this.Label_win.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = ZcmModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = ZcmModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = ZcmModel.instance._curIndex_baseBet;
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
            if (ZcmModel.instance.curTotalWin > 0) {
              this.Label_win.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = ZcmModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            ZcmModel.instance.curTotalWin += disWin;
            if (ZcmModel.instance.curTotalWin > destWin) {
              ZcmModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(zcm_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(zcm_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(zcm_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(zcm_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(zcm_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(zcm_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(zcm_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                ZcmModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                ZcmModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                ZcmModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return zcm_setBase;
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

System.register("chunks:///_virtual/zcm_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "af5019ULHhCEoB/xt/7NRc7", "zcm_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/zcm_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmModel.ts', './ZcmDef.ts', './EventManager.ts', './ZcmUtils.ts', './zcm_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, ZcmModel, eRunStatus, eSymbol, eConstDef, eEvent, eSound, EventManager, ZcmUtils, zcm_symbolItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      zcm_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "548edkxAs9ORIRknWQYE0Hg", "zcm_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_symbol = exports('default', (_dec = ccclass("ZcmSymbol"), _dec2 = menu("game/ZcmGame/zcm_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_symbol, _Component);
        function zcm_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "isHorizontal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxIndex", _descriptor2, _assertThisInitialized(_this));
          _this._speed = 0;
          _initializerDefineProperty(_this, "Node_itemTemp", _descriptor3, _assertThisInitialized(_this));
          _this._symbolList = [];
          _this._curLength = 0;
          _this._iCol = 0;
          //    // update (dt) {}
          _this._resultInfoList = [];
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = zcm_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {};
        _proto.getResult = function getResult(openResult) {
          var _resultInfoList = [];
          var _curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            var leftLength = this.maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //            //test
            //            // let itemInfo = {
            //            //     Sym: Math.floor(Math.random() * ZcmDef.eSymbol.TEN) + 1, //ZcmDef.eSymbol.A,
            //            //     Length: this.isHorizontal ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1,
            //            //     Rim: Math.floor(Math.random() * 3),
            //            // };
            //            //获取结果
            var itemInfo = null;
            if (this._iCol == 0) {
              var InitPosMsg = openResult.AllPosMsg[i + 1];
              itemInfo = InitPosMsg[InitPosMsg.length - 1];
            } else {
              itemInfo = openResult.AllPosMsg[this._iCol - 1][i];
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
          }
          gts.Debug.Log(JSON.stringify(_resultInfoList));
          return _resultInfoList;
        }
        //    ///
        ;

        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength == 0) {
            return null;
          }
          if (!itemInfo) {
            itemInfo = {
              Sym: Math.floor(Math.random() * eSymbol.TEN) + 1,
              //ZcmDef.eSymbol.A,
              Length: this.isHorizontal ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1,
              Rim: Math.floor(Math.random() * 3),
              IsReward: false
            };
            itemInfo.Length = this.isHorizontal ? 1 : Math.floor(Math.random() * 4) + 1;
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (this.isHorizontal) {
            //            //横向
            var offsetX = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolW;
            newItem.setPosition(eConstDef.cSymbolStartX + offsetX, this.isHorizontal ? 0 : this.node.getPosition().y);
          } else {
            var offsetY = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.isHorizontal ? 0 : this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(zcm_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
          this._symbolList.push(com);
          this._curLength += itemInfo.Length;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            if (!this.addNewItem(itemInfoList[i])) {
              break;
            }
          }
          for (var _i = 0; _i < this._symbolList.length; _i++) {
            var symbolNode = this._symbolList[_i].node;
            if (this.isHorizontal) {
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
              tween(symbolNode).delay(0.075 * (this._iCol - 1)).to(0.2, {
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
              ZcmModel.instance.isQuickStop ? function () {
                _this2._runStatus = eRunStatus.STOP;
                _this2._speed = 2500;
              }() : function () {
                _this2._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this2._resultInfoList = _this2.getResult(ZcmModel.instance.betResult.Res[0]);

            //            //
            _this2._runStatus = eRunStatus.START;
            _this2._speed = eConstDef.CSpeedStart;
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
                    _this2._speed += eConstDef.CSpeedAdd;
                    if (_this2._speed >= eConstDef.cSpeedMax) {
                      _this2._speed = eConstDef.cSpeedMax;
                      _this2._runStatus = eRunStatus.RUNNING;
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
                      curLength += symbol.itemInfo.Length;
                      if (curLength > _this2.maxIndex) {
                        var _symbol = _this2._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    _this2._runStatus = eRunStatus.NONE;
                    _this2.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator, _step, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this2.scheduleOnce(function () {
                              ZcmUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step = _iterator()).done;) {
                              _symbol2 = _step.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (ZcmModel.instance.specialStartCol > 0 && (_this2._iCol == 0 || _this2._iCol >= ZcmModel.instance.specialStartCol)) {
                              EventManager.instance.emit(eEvent.onSetMask, _this2._iCol, _this2.node.getPosition().x);
                            }
                            _this2.unschedule(scheduleUpdate);
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
              var disLength = _this2.isHorizontal ? offset / eConstDef.cSymbolW : offset / eConstDef.cSymbolH;
              _this2._curLength -= disLength;
              var isSide = _this2._curLength <= _this2.maxIndex;
              if (_this2._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this2.maxIndex - _this2._curLength;
                offset = _this2.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this2._curLength = _this2.maxIndex;
                _this2._runStatus = eRunStatus.END;
              }
              for (var _i2 = _this2._symbolList.length - 1; _i2 >= 0; _i2--) {
                var _symbol3 = _this2._symbolList[_i2];
                if (!_symbol3.doRunning(offset)) {
                  _this2._symbolList.splice(_i2, 1);
                  _symbol3.node.destroyFromParent();
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
            arrPro.push(symbol.doEffect(zcm_symbol.rewardCount * 0.125));
            if (symbol.itemInfo.IsReward) {
              zcm_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doCatNumCollect = function doCatNumCollect(collectType) {
          if (collectType === void 0) {
            collectType = 0;
          }
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.checkCollect()) {
              arrPro.push(symbol.doCatNumCollect(zcm_symbol.catCount * 0.35, collectType));
              zcm_symbol.catCount++;
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
                  zcm_symbol.catCount = 0;
                  zcm_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator2 = _createForOfIteratorHelperLoose(this._symbolList); !(_step2 = _iterator2()).done;) {
                    symbol = _step2.value;
                    if (symbol.itemInfo.IsReward) {
                      arrPro.push(symbol.doClear());
                    }
                  }
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 5:
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
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(nextReult) {
            var _nextResultInfoList, iRow, symbolItem, _curLength, arrPro, toLength, newFloor, _iRow, _symbolItem, nextInfo;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _nextResultInfoList = this.getResult(nextReult); //        //remove
                  for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                    symbolItem = this._symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._symbolList.splice(iRow, 1);
                      this._curLength -= symbolItem.itemInfo.Length;
                    }
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex;
                  newFloor = 0;
                  _iRow = 0;
                case 7:
                  if (!(_iRow < _nextResultInfoList.length)) {
                    _context3.next = 26;
                    break;
                  }
                  _symbolItem = null;
                  if (!(_iRow < this._symbolList.length)) {
                    _context3.next = 16;
                    break;
                  }
                  _symbolItem = this._symbolList[_iRow];
                  _symbolItem.itemInfo = _nextResultInfoList[_iRow];
                  newFloor += _symbolItem.itemInfo.Length;
                  if (_symbolItem.isChange) {
                    _symbolItem.doEndChange(_symbolItem.itemInfo);
                  }
                  _context3.next = 21;
                  break;
                case 16:
                  nextInfo = _nextResultInfoList[_iRow];
                  _symbolItem = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem) {
                    _context3.next = 20;
                    break;
                  }
                  return _context3.abrupt("continue", 23);
                case 20:
                  toLength += _symbolItem.itemInfo.Length;
                case 21:
                  arrPro.push(_symbolItem.doDrop(_curLength));
                  _curLength += _symbolItem.itemInfo.Length;
                case 23:
                  _iRow++;
                  _context3.next = 7;
                  break;
                case 26:
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 27:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doDrop(_x) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return zcm_symbol;
      }(Component), _class3.rewardCount = 0, _class3.catCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/zcm_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "41463gkUMRNZIEPW427f/5W", "zcm_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_symbolEffectRoot = exports('default', (_dec = ccclass("ZcmSymbolEffectRoot"), _dec2 = menu("game/ZcmGame/zcm_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_symbolEffectRoot, _Component);
        function zcm_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = zcm_symbolEffectRoot.prototype;
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
        return zcm_symbolEffectRoot;
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

System.register("chunks:///_virtual/zcm_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmDef.ts', './zcm_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, Sprite, UITransform, instantiate, UIOpacity, Layout, Component, eSymbol, zcm_symbolItem;
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
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      zcm_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "8ec4crOSQhPPp8QKbccSVgf", "zcm_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // CAT = 2,
      // //     GU = 3,
      // //     DENGLONG = 4,
      // //     SHANZI = 5,
      // //     CISHEN = 6,
      // //     SHOUSI = 7,
      // //     A = 8,
      // //     K = 9,
      // //     Q = 10,
      // //     J = 11,
      // //     TEN = 12,
      var eRate = [[30, 40, 50, 80],
      //CAT
      [20, 25, 30, 50],
      //GU
      [10, 25, 30, 40],
      //DENGLONG
      [8, 15, 20, 30],
      //SHANZI
      [6, 10, 12, 15],
      //CISHEN = 6,
      [6, 10, 12, 15],
      //SHOUSI
      [4, 6, 8, 10],
      //A
      [4, 6, 8, 10],
      //K
      [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
      var zcm_symbolInfo = exports('default', (_dec = ccclass("ZcmSymbolInfo"), _dec2 = menu("game/ZcmGame/zcm_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_symbolInfo, _Component);
        function zcm_symbolInfo() {
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
        var _proto = zcm_symbolInfo.prototype;
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
          //        // EventManager.instance.on(ZcmDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
          //        // EventManager.instance.off(ZcmDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          if (this.Node_info.active) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.Node_item.children), _step; !(_step = _iterator()).done;) {
              var childNode = _step.value;
              childNode.name == "Node_symbol" ? childNode.destroyFromParent() : null;
            }
            this.mask.active = false;
            this.Node_item.active = false;
            this.Node_info.active = false;
            return;
          }
          this.mask.active = true;
          this.Node_item.active = true;
          this.Node_icon.active = true;
          this.Node_info.active = true;
          this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[symbol.Length - 1];
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos));
          pos.x = pos.x - 150 < -372 ? pos.x + 150 : pos.x + 150 > 372 ? pos.x - 150 : pos.x;
          this.Node_info.position = pos;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_item.children), _step2; !(_step2 = _iterator2()).done;) {
            var _childNode = _step2.value;
            _childNode.name == "Node_symbol" ? _childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          this.Node_item.getComponent(zcm_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.WILD:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.CUSTOM;
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 210;
                this.Node_item.getComponent(UITransform).priority = 1;
                this.Node_icon.getComponent(UITransform).priority = 0;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;
                break;
              }
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_item.getComponent(UITransform).priority = 1;
                this.Node_icon.getComponent(UITransform).priority = 0;
                this.Node_icon.active = false;
                this.Label_hu.node.active = true;
                this.Label_wild.node.active = false;
                break;
              }
            default:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                var arrRate = eRate[symbol.Sym - eSymbol.CAT];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
                break;
              }
          }
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.getComponent(Layout).updateLayout(true);
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        return zcm_symbolInfo;
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

System.register("chunks:///_virtual/zcm_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmModel.ts', './ZcmDef.ts', './EventManager.ts', './ZcmUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, UITransform, Sprite, v3, isValid, tween, UIOpacity, v2, Vec2, Tween, Component, ZcmModel, eSymbol, eConstDef, eRunStatus, eZindex, eEvent, eSound, EventManager, ZcmUtils;
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
      v2 = module.v2;
      Vec2 = module.Vec2;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "8bf15G9VrJBRak8Q4CuNMb/", "zcm_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_symbolItem = exports('default', (_dec = ccclass("ZcmSymbolItem"), _dec2 = menu("game/ZcmGame/zcm_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_symbolItem, _Component);
        function zcm_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          //    //moveType:0-正常240， 1：-240（免费模式-本轮没中奖 但有猫
          _this._spineEffect_catNum = null;
          _this.isChange = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = zcm_symbolItem.prototype;
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        }
        //    // update (dt) {}
        //    ///
        ;

        _proto.initItem = function initItem(info, isHorizontal, iCol) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;

          //        //test
          //        // this.node.opacity = this._isHorizontal ? 100 : 255;

          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = ZcmUtils.instance.getSkeletonData("kuang_effect");
            itemSpine.setAnimation(0, "intro" + _this2.itemInfo.Length, false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);

              //                // itemSpine.setAnimation(0, `idle${this.itemInfo.Length}`, true);
              resolve();
            });
            _this2.node.addChild(newNode);
            newNode.getComponent(UITransform).priority = 5;
            var Node_symbol = _this2.node.getChildByName("Node_symbol");
            Node_symbol.getComponent(UITransform).priority = 10;
            _this2._spineEffect_kuang = itemSpine;
          });
        };
        _proto.addEffectKuangLight = function addEffectKuangLight() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = ZcmUtils.instance.getSkeletonData("kuang_light");
            itemSpine.setAnimation(0, "changelight_lv" + _this3.itemInfo.Length, true);
            //            // //图标变化完成后
            //            // itemSpine.addAnimation(0, `lv${this.itemInfo.Length}`, true);
            resolve();
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
          isSpine = Sym < eSymbol.GU ? true : isSpine;

          //        //icon
          var Node_symbol = this.node.getChildByName("Node_symbol");
          Node_symbol.setPosition(0, 0);
          if (!isSpine) {
            var itemSpine = Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = ZcmUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = ZcmUtils.instance.getSkeletonData(Sym);
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, ZcmUtils.instance.getSymbolAniName(Sym, length, isIdle), true);
            });
          }

          //        //tag update
          Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.SCATTER:
              {
                //                // this.node.zIndex = this.node.zIndex > ZcmDef.eZindex.icon_scatter ? this.node.zIndex : ZcmDef.eZindex.icon_scatter;

                var addScatterlight = function addScatterlight(isUp) {
                  var newNode = new Node("newNode" + isUp);
                  newNode.active = true;
                  var itemSpine = newNode.addComponent(sp.Skeleton);
                  itemSpine.premultipliedAlpha = false;
                  _this4.scheduleOnce(function () {
                    itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                    itemSpine.skeletonData = ZcmUtils.instance.getSkeletonData("scatterlight");
                    var ani = isUp ? "up" : "down";
                    itemSpine.setAnimation(0, ani, true);
                  });
                  var pos = length * 0.5 * eConstDef.cSymbolH;
                  newNode.setPosition(newNode.position.x, isUp ? pos : -pos);
                  Node_symbol.addChild(newNode);
                };

                //                //
                if (this._isHorizontal) {
                  addScatterlight(false);
                } else {
                  addScatterlight(true);
                  addScatterlight(false);
                }
                break;
              }
            case eSymbol.CAT:
              {
                //                // this.node.zIndex = this.node.zIndex > ZcmDef.eZindex.icon_cat ? this.node.zIndex : ZcmDef.eZindex.icon_cat;

                var newNode = new Node();
                newNode.name = "catNum";
                newNode.scale = v3(0.65, 0.65, 1);
                newNode.setPosition(0, -eConstDef.cSymbolH * this.itemInfo.Length * 0.5 + 17);
                var _itemSpine = newNode.addComponent(sp.Skeleton);
                _itemSpine.premultipliedAlpha = false;
                _itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                this.scheduleOnce(function () {
                  _itemSpine.skeletonData = ZcmUtils.instance.getSkeletonData("2x");
                  _itemSpine.setAnimation(0, "intro", true);
                });
                Node_symbol.addChild(newNode);
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length) {
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = ZcmUtils.instance.getItemSymbolIconBox(Sym, length);
          //        // this._isHorizontal ? (this.node.width = length * 125) : (this.node.height = length * 104);
        };

        _proto.updateFrame = function updateFrame(rim, length) {
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
            _Sprite_frame.getComponent(Sprite).spriteFrame = ZcmUtils.instance.getItemSymbolIconFrame(rim);
          }
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateBox(this.itemInfo.Sym, this.itemInfo.Length);
          this.updateFrame(this.itemInfo.Rim, this.itemInfo.Length);
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length, isSpine, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                _zIndex = ZcmModel.instance.specialStartCol > 0 ? eZindex.iconWin : eZindex.icon_scatter;
                break;
              }
            case eSymbol.CAT:
              {
                _zIndex = eZindex.icon_cat;
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
                _zIndex = ZcmModel.instance.specialStartCol > 0 && this._iCol > ZcmModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
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
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (ZcmModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var pos = Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var _this5 = this;
          var ret = true;
          this._isHorizontal ? function () {
            _this5.node.setPosition(_this5.node.position.x - offset, _this5.node.position.y);
            var posSide = -186 - 62.5 - _this5.itemInfo.Length / 2 * 125;
            if (_this5.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y - offset);
            var posSide = -208 - 52 - _this5.itemInfo.Length / 2 * 104;
            if (_this5.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this6 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            _this6._isHorizontal ? function () {
              var pos_0 = _this6.node.getPosition().x + 10 + offset;
              var pos_1 = _this6.node.getPosition().x + offset;
              tween(_this6.node).to(0.15, {
                position: v3(pos_0, _this6.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this6.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this6.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }() : function () {
              var pos_0 = _this6.node.getPosition().y + 10 + offset;
              var pos_1 = _this6.node.getPosition().y + offset;
              tween(_this6.node).to(0.15, {
                position: v3(_this6.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(_this6.node.position.x, pos_1)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this6.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            if (_this7.itemInfo.IsReward) {
              _this7.updateSymbol(true, false);
              _this7.scheduleOnce(function () {
                _this7.addEffectKuang();
                _this7.scheduleOnce(resolve, 0.25);
              }, 0.0 + delay);
            } else {
              if (_this7.itemInfo.Sym == eSymbol.SCATTER) {
                _this7.node.getComponent(UITransform).priority = eZindex.icon_scatter;
              }
              resolve();
            }
          });
        };
        _proto.doCatNumMoveTo = function doCatNumMoveTo(collectType) {
          var _this8 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            var Node_symbol = _this8.node.getChildByName("Node_symbol");
            var catNum = Node_symbol.getChildByName("catNum");
            var root = _this8.node.parent.parent.parent.parent;
            var pos = catNum.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            pos = root.getComponent(UITransform).convertToNodeSpaceAR(pos);
            catNum.getComponent(UITransform).priority = 52;
            catNum.parent = root;
            catNum.position = v3(pos);
            _this8._spineEffect_catNum = catNum.getComponent(sp.Skeleton);
            var startPos = v2(catNum.getPosition().x, catNum.getPosition().y);
            var endPos = collectType == 0 ? v2(0, 240) : v2(0, -240);
            var duration = Vec2.distance(startPos, endPos) / 800;
            duration = collectType == 1 ? duration < 0.25 ? 0.25 : duration : duration < 0.4 ? 0.4 : duration;
            tween(catNum).to(0.1, {
              scale: v3(1.25, 1.25, 1)
            }).call(function () {
              if (collectType == 0) {
                EventManager.instance.emit(eEvent.onCatNumMove);
              }
            }).delay(0.5).to(0.1, {
              scale: v3(2, 2, 1)
            }).call(function () {
              _this8._spineEffect_catNum.setAnimation(0, "fly", true);
            }).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -150 : 150), (startPos.y + endPos.y) * 0.5), endPos).call(function () {
              _this8._spineEffect_catNum.node.destroyFromParent();
              _this8._spineEffect_catNum = null;
              EventManager.instance.emit(eEvent.onCatNumAdd, collectType);
              resolve();
            }).start();
          });
        };
        _proto.checkCollect = function checkCollect() {
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var catNum = Node_symbol.getChildByName("catNum");
          return this.itemInfo.Sym == eSymbol.CAT && catNum && isValid(catNum);
        };
        _proto.doCatNumCollect = function doCatNumCollect(delay, collectType) {
          var _this9 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            _this9.scheduleOnce(function () {
              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this9.doCatNumMoveTo(collectType);
                    case 2:
                      resolve();
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }))();
            }, 0.2 + delay);
          });
        };
        _proto.doStartChange = function doStartChange(isWild) {
          var _this10 = this;
          if (isWild === void 0) {
            isWild = false;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          if (!isWild) {
            this.isChange = true;
            ZcmUtils.instance.playOneShot(eSound.frameChange);
            tween(Node_symbol).repeatForever(tween(Node_symbol).delay(0.05).call(function () {
              var sym = Math.floor(Math.random() * eSymbol.Q) + 3;
              _this10.updateBox(sym, _this10.itemInfo.Length);
              _this10.updateIcon(sym, _this10.itemInfo.Length);
            })).start();
            return;
          }
          this.updateIcon(eSymbol.WILD, this.itemInfo.Length);
          if (this._spineEffect_kuangLight) {
            this._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
            this._spineEffect_kuangLight.setAnimation(0, "lv" + this.itemInfo.Length, false);
            this._spineEffect_kuangLight.setCompleteListener(function () {
              _this10._spineEffect_kuangLight.setCompleteListener(null);
              _this10._spineEffect_kuangLight.node.destroyFromParent();
              _this10._spineEffect_kuangLight = null;
            });
          }
        };
        _proto.doEndChange = function doEndChange(newItemInfo) {
          var _this11 = this;
          if (this.isChange) {
            this.scheduleOnce(function () {
              var Node_symbol = _this11.node.getChildByName("Node_symbol");
              Tween.stopAllByTarget(Node_symbol);
              _this11.scheduleOnce(function () {
                _this11.updateBox(newItemInfo.Sym, _this11.itemInfo.Length);
                _this11.updateIcon(newItemInfo.Sym, newItemInfo.Length);
              });
              _this11.node.getComponent(UITransform).priority = eZindex.icon;
              _this11.isChange = false;
              if (_this11._spineEffect_kuangLight) {
                _this11._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
                _this11._spineEffect_kuangLight.setAnimation(0, "lv" + _this11.itemInfo.Length, false);
                _this11._spineEffect_kuangLight.setCompleteListener(function () {
                  _this11._spineEffect_kuangLight.setCompleteListener(null);
                  _this11._spineEffect_kuangLight.node.destroyFromParent();
                  _this11._spineEffect_kuangLight = null;
                });
              }
            }, 0.25);
          }
        };
        _proto.doClear = function doClear() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            if (_this12.itemInfo.IsReward) {
              if (_this12.itemInfo.Rim != 0 && _this12.itemInfo.Sym != eSymbol.WILD) {
                //                    //变换
                if (_this12._spineEffect_kuang) {
                  _this12._spineEffect_kuang.setAnimation(0, "change" + _this12.itemInfo.Length, false);
                  _this12._spineEffect_kuang.setCompleteListener(function () {
                    _this12._spineEffect_kuang.setCompleteListener(null);
                    _this12._spineEffect_kuang.node.destroyFromParent();
                    _this12._spineEffect_kuang = null;
                  });
                  _this12.scheduleOnce(function () {
                    //                            //开始转动
                    _this12.addEffectKuangLight();

                    //                            //替换图标
                    _this12.doStartChange(_this12.itemInfo.Rim == 2);

                    //                            //替换框
                    _this12.itemInfo.Rim = _this12.itemInfo.Rim == 2 ? 0 : 2;
                    _this12.updateFrame(_this12.itemInfo.Rim, _this12.itemInfo.Length);
                  }, 0.1);
                }
                resolve();
              } else {
                //                    // this.addEffectKuang().then(() => {
                if (_this12._spineEffect_kuang) {
                  _this12._spineEffect_kuang.setAnimation(0, "end" + _this12.itemInfo.Length, false);
                  _this12._spineEffect_kuang.setCompleteListener(function () {
                    _this12._spineEffect_kuang.setCompleteListener(null);
                    _this12._spineEffect_kuang.node.destroyFromParent();
                    _this12._spineEffect_kuang = null;
                    _this12.node.getComponent(UIOpacity).opacity = 0;
                    resolve();
                  });
                }
                //                    // });

                var Node_symbol = _this12.node.getChildByName("Node_symbol");
                tween(Node_symbol)
                //                        // .blink(3, 3)
                .to(0.05, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                }).call(function () {
                  tween(Node_symbol.getComponent(UIOpacity)).to(0.1, {
                    opacity: 0
                  }).start();
                }).delay(0.1).call(function () {
                  _this12.isClear = true;
                }).start();
              }
              //                // } else if (this.itemInfo.Sym != ZcmDef.eSymbol.CAT) {
              //                //     // this.addEffectKuang().then(() => {
              //                //     if (this._spineEffect_kuang) {
              //                //         this._spineEffect_kuang.setAnimation(0, `end${this.itemInfo.Length}`, false);
              //                //         this._spineEffect_kuang.setCompleteListener(() => {
              //                //             this._spineEffect_kuang.setCompleteListener(null);

              //                //             this._spineEffect_kuang.node.destroyFromParent();
              //                //             this._spineEffect_kuang = null;

              //                //             this.node.opacity = 0;

              //                //             resolve();
              //                //         });
              //                //     }
              //                //     // });

              //                //     let Node_symbol = this.node.getChildByName("Node_symbol");
              //                //     cc.tween(Node_symbol)
              //                //         // .blink(3, 3)
              //                //         .to(0.05, { scale: 1.2 })
              //                //         .to(0.05, { scale: 1 })
              //                //         .to(0.1, { opacity: 0 })
              //                //         .call(() => {
              //                //             this.isClear = true;
              //                //         })
              //                //         .start();
              //                // } else {
              //                //     resolve();
              //                // }
            } else {
              resolve();
            }
          });
        };
        _proto._doShake = function _doShake() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            _this13.scheduleOnce(function () {
              if (!_this13.isClear) {
                tween(_this13.node).shake(0.5, 1.25, 1.25).call(function () {
                  resolve();
                }).start();
              } else {
                resolve();
              }
            }, 0.25);
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toLength) {
            var _this14 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._doShake();
                case 2:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this14._isHorizontal ? _this14.node.getPosition().x : _this14.node.getPosition().y;
                    var toPos = 0;
                    if (_this14._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + _this14.itemInfo.Length / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + _this14.itemInfo.Length / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset == 0) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    //            // let offset = this._isHorizontal ? dropLength * ZcmDef.eConstDef.cSymbolW : dropLength * ZcmDef.eConstDef.cSymbolH;

                    var duration = offset / dropSpeed;
                    _this14.scheduleOnce(function () {
                      ZcmUtils.instance.playOneShot(eSound.drop_1);
                    }, duration);
                    _this14._isHorizontal ? function () {
                      var pos_1 = _this14.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this14.node).to(duration, {
                        position: v3(pos_1, _this14.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this14.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this14.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this14.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this14.node).to(duration, {
                        position: v3(_this14.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this14.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this14.node.position.x, pos_1)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        resolve();
                      }).start();
                    }();
                  }));
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doDrop(_x) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return zcm_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/zcm_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ZcmUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, ZcmUtils;
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
      ZcmUtils = module.ZcmUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "89f12+oeOBFt5A7+enk0UyQ", "zcm_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var zcm_winTip = exports('default', (_dec = ccclass("ZcmWinTip"), _dec2 = menu("game/ZcmGame/zcm_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(zcm_winTip, _Component);
        function zcm_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = zcm_winTip.prototype;
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
            _this2.Label_win.string = ZcmUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
          if (!isLast) {
            Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
            ZcmUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${ZcmUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
            ZcmUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return zcm_winTip;
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

System.register("chunks:///_virtual/ZcmCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './ZcmModel.ts', './I18n.ts', './ViewManager.ts', './ZcmDef.ts', './ZcmUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, ZcmModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, ZcmUtils, Common;
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
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "65fcfN5sFBIcYS51/e8tfLg", "ZcmCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var ZcmCtrl = exports('ZcmCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(ZcmCtrl, _GameDef$BaseCtrl);
        function ZcmCtrl() {
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
          _this._model = ZcmModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = ZcmCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete ZcmCtrl._instance;
          ZcmCtrl._instance = null;
          ZcmModel.destroy();
          ZcmUtils.destroy();
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
          if (!ZcmModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            ZcmModel.instance.curTotalBet = ZcmModel.instance.curBet * 1000 * 75;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: ZcmModel.instance.curBet * 1000,
              buyFree: true
            });
          } else {
            ZcmModel.instance.curTotalBet = ZcmModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: ZcmModel.instance.curBet * 1000
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
            gameType: "slotCat"
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
            RecordType: "slotCat"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(ZcmDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
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
              Common.showTip(i18n.errTip(data.Code), !ZcmUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == ZcmDef.eProto.HD_Enter || (data.Code == 402 && ZcmModel.instance.gameState.GameNo != ZcmModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(ZcmDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();

                // if (ZcmModel.instance.gameStatus != ZcmDef.eRunStatus.NONE) {
                //     return;
                // }
                ZcmModel.instance.clearGameData();
                ZcmModel.instance.gameInfo = data.Data;
                // for (const InitPosMsg of ZcmModel.instance.gameInfo.InitPosMsg) {
                //     for (const info of InitPosMsg) {
                //         info.IsReward = false;
                //     }
                // }

                ZcmModel.instance.curBet = Math.floor(ZcmModel.instance.gameInfo.BetAmount / 1000);
                ZcmModel.instance.totalRate = ZcmModel.instance.gameInfo.FreeInfo.Multiple;
                ZcmModel.instance.totalFreeWin = ZcmModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
                ZcmModel.instance.totalFreeTimesBack = ZcmModel.instance.gameInfo.FreeInfo.TotalCount;
                ZcmModel.instance.totalFreeTimes = ZcmModel.instance.gameInfo.FreeInfo.Count;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                ZcmModel.instance.betResult = data.Data;

                //test
                // ZcmModel.instance.betResult = this.getResult().Data;

                this.isReqBet = false;

                //判断是否有2个胡
                ZcmModel.instance.specialStartCol = 0;
                if (!ZcmModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = ZcmModel.instance.betResult.Res[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
                      var AllPosMsg = openResult.AllPosMsg[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            ZcmModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==ZcmModel.instance.specialStartCol==" + ZcmModel.instance.specialStartCol);
                  // //specialStartCol test
                  // ZcmModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);
                }

                ZcmModel.instance.totalFreeTimes = ZcmModel.instance.betResult.FreeInfo.Count;

                // //freeTest;
                // if (ZcmModel.instance.totalFreeTimes > 0) {
                //     ZcmModel.instance.totalFreeTimes--;
                // } else {
                //     ZcmModel.instance.totalFreeTimes = 5; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==ZcmModel.instance.totalFreeTimes==" + ZcmModel.instance.totalFreeTimes);
                if (ZcmModel.instance.freeStatus == eRunStatus.NONE) {
                  ZcmModel.instance.curBalance -= ZcmModel.instance.curTotalBet;
                }
                break;
              }
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
                gts.Debug.LogWarr("==Zcm=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (ZcmModel.instance.curBalance > 0) {
                  ZcmModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                ZcmModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Zcm=pushWallet==" + _HD_Wallet.VndBalance);
                if (ZcmModel.instance.curBalance > 0) {
                  ZcmModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                ZcmModel.instance.curBalance = _HD_Wallet.VndBalance;
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
            GameType: "slotCat",
            cmd: "slotCat/HD_Bet"
          };
          var Res = data.Data.Res;
          var newResult = this.getRandReuslt();
          Res.push(newResult);
          while (newResult.RewardMoney > 0) {
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
            AllPosMsg: [],
            ExtraOdd: 0,
            // ExtraPos: [],
            RewardMoney: 0
          };
          if (oldResult == null) {
            var ExtraPos = this.getRandSymbol(4);
            for (var i = 0; i < 6; i++) {
              var AllPosMsg = this.getRandSymbol(5, i == 0);
              if (i > 0 && i < 5) {
                AllPosMsg.push(ExtraPos[i - 1]);
              }
              openResult.AllPosMsg.push(AllPosMsg);
            }
          }
          var mapAllPosMsg = openResult.AllPosMsg;
          var RewardPos = [];
          var firstCol = mapAllPosMsg[0];
          var getRewardPos = function getRewardPos(symbol, col, arrPos) {
            var allPosMsg = mapAllPosMsg[col];
            for (var iRow = 0; iRow < allPosMsg.length; iRow++) {
              var symbolInfo = allPosMsg[iRow];
              if (symbolInfo.Sym == eSymbol.WILD || symbolInfo.Sym == symbol) {
                symbolInfo.IsReward = true;
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
            getRewardPos(firstCol[iRow].Sym, 1, [iRow]);
          }
          gts.Debug.Log("===RewardPos===" + JSON.stringify(RewardPos));
          if (RewardPos.length > 0) {
            // openResult.RewardPos = RewardPos;
            openResult.RewardMoney = 1000;
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
        return ZcmCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZcmDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5ab5fXn2VhLZoASfDuSX1Sd", "ZcmDef", undefined);
      var cBundle = exports('cBundle', "ZcmGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotCat/HD_info";
        eProto["HD_Bet"] = "slotCat/HD_Bet";
        eProto["HD_Leave"] = "slotCat/HD_Leave";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
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
        cStopDelay: 1.25,
        cSymbolW: 125,
        cSymbolH: 104,
        cSymbolStartX: -248.5,
        cSymbolStartY: -260,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200
      });
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
        SCATTER: 0,
        WILD: 1,
        CAT: 2,
        GU: 3,
        DENGLONG: 4,
        SHANZI: 5,
        CISHEN: 6,
        SHOUSI: 7,
        A: 8,
        K: 9,
        Q: 10,
        J: 11,
        TEN: 12
      });
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
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onCatNumMove"] = "onCatNumMove";
        eEvent["onCatNumAdd"] = "onCatNumAdd";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bg",
        numAdd: "sound/numAdd",
        scarret: "sound/scarret",
        "break": "sound/break",
        clear: "sound/clear",
        clear_0: "sound/clear_0",
        drop_0: "sound/drop_0",
        drop_1: "sound/drop_1",
        nice_0: "sound/nice_0",
        nice_1: "sound/nice_1",
        startFree: "sound/startFree",
        startRun: "sound/startRun",
        running: "sound/running",
        freeEnd_0: "sound/freeEnd_0",
        freeEnd_1: "sound/freeEnd_1",
        rateChange: "sound/rateChange",
        frameChange: "sound/frameChange",
        catNumAdd: "sound/catNumAdd",
        free_winEffect: "sound/free_winEffect"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZcmGame", ['./ZcmCtrl.ts', './ZcmDef.ts', './ZcmModel.ts', './ZcmScene.ts', './ZcmUtils.ts', './ZcmGameView.ts', './zcm_ScrollView.ts', './zcm_btnEffect.ts', './zcm_buyReward.ts', './zcm_free.ts', './zcm_helpTip.ts', './zcm_history.ts', './zcm_historyItem.ts', './zcm_rank.ts', './zcm_rankItem.ts', './zcm_setBase.ts', './zcm_shake.ts', './zcm_symbol.ts', './zcm_symbolEffectRoot.ts', './zcm_symbolInfo.ts', './zcm_symbolItem.ts', './zcm_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/ZcmGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ZcmDef.ts', './ZcmModel.ts', './ZcmCtrl.ts', './ViewManager.ts', './ZcmUtils.ts', './zcm_winTip.ts', './zcm_symbol.ts', './zcm_free.ts', './I18n.ts', './zcm_symbolInfo.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Sprite, view, sys, tween, v3, UITransform, instantiate, UIOpacity, find, v2, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, cBundle, eAutoRateType, eZindex, eRunStatus, eSound, eConstDef, eProto, ZcmModel, ZcmCtrl, ViewManager, ZcmUtils, zcm_winTip, zcm_symbol, zcm_free, i18n, zcm_symbolInfo, Common, AudioManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      sp = module.sp;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      view = module.view;
      sys = module.sys;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      find = module.find;
      v2 = module.v2;
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
      cBundle = module.cBundle;
      eAutoRateType = module.eAutoRateType;
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      ZcmModel = module.ZcmModel;
    }, function (module) {
      ZcmCtrl = module.ZcmCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      zcm_winTip = module.default;
    }, function (module) {
      zcm_symbol = module.default;
    }, function (module) {
      zcm_free = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      zcm_symbolInfo = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31;
      cclegacy._RF.push({}, "a6a34xSyvFETrUitzprOVQv", "ZcmGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var ZcmGameView = exports('default', (_dec = ccclass("ZcmGameView"), _dec2 = menu("game/ZcmGame/ZcmGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(zcm_symbol), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(Sprite), _dec29 = property(Sprite), _dec30 = property(Node), _dec31 = property(sp.Skeleton), _dec32 = property(zcm_free), _dec33 = property(zcm_symbolInfo), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(ZcmGameView, _GameDef$BaseView);
        function ZcmGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zcm_symbolList", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_buy", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_symRate", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_catNum", _descriptor19, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrRoomSpFrame", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrCenterSpFrame", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_roomBg", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_centerBg", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_shengzi", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "zcm_free", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor31, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = ZcmGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, ZcmCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!ZcmUtils.instance.isChangeOrientation()) {
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
          EventManager.instance.on(eEvent.onCatNumAdd, this.onCatNumAdd, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onCatNumAdd, this.onCatNumAdd, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          ZcmModel.instance.clearGameData();
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
              //                // ZcmCtrl.instance.reEnterRoom();

              if (ZcmModel.instance.isAuto && ZcmCtrl.instance.isReqBet) {
                ZcmCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", ZcmModel.instance._curIndex_baseScore + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", ZcmModel.instance._curIndex_baseRate + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", ZcmModel.instance._curIndex_baseBet + 1);
          ZcmModel.instance.curBet = (ZcmModel.instance._curIndex_baseScore == 0 ? 0.1 : ZcmModel.instance._curIndex_baseScore * 0.5) * (ZcmModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          this.Button_run.interactable = false;
          var _curIndex_baseScore = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex");
          _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          var _curIndex_baseRate = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex");
          _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          var _curIndex_baseBet = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex");
          _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;
          ZcmModel.instance.curBet = (_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;
          ZcmModel.instance._curIndex_baseScore = _curIndex_baseScore;
          ZcmModel.instance._curIndex_baseRate = _curIndex_baseRate;
          ZcmModel.instance._curIndex_baseBet = _curIndex_baseBet;
          ZcmUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.zcm_symbolList.length; i++) {
            //            //     this.zcm_symbolList[i].init();
            //            // }

            ZcmCtrl.instance.reqEnterRoom();
            _this4.Node_mask_0.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          this.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Button_auto":
              {
                ZcmModel.instance.isAuto = !ZcmModel.instance.isAuto;
                this.Button_run.interactable = !ZcmModel.instance.isAuto;
                //                // ZcmUtils.instance.setBtnBetGray(this.Button_run.node, ZcmModel.instance.isAuto);

                //                // this.doStartRun();

                if (ZcmModel.instance.gameStatus == eRunStatus.NONE && ZcmModel.instance.isAuto) {
                  ZcmCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_fast":
              {
                //                //快速停止
                ZcmModel.instance.isQuickStop = !ZcmModel.instance.isQuickStop;
                //                // ZcmUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !ZcmModel.instance.isQuickStop);

                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_buy":
              {
                if (ZcmModel.instance.gameStatus != eRunStatus.NONE || ZcmModel.instance.isAuto) {
                  return;
                }
                var buyGold = ZcmModel.instance.curBet * 75 * 1000;
                if (ZcmModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !ZcmUtils.instance.isChangeOrientation());
                  return;
                }
                Common.loadPopBuddle("prefab/Node_buyReward", ZcmUtils.instance.bundle, function () {}, function (prefab) {
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
                ZcmCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", ZcmUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", ZcmUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", ZcmUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (ZcmModel.instance.gameStatus != eRunStatus.NONE || ZcmModel.instance.isAuto) {
                  return;
                }
                ZcmModel.instance._curIndex_baseBet--;
                if (ZcmModel.instance._curIndex_baseBet < 0) {
                  ZcmModel.instance._curIndex_baseBet = 0;
                }
                ZcmModel.instance._curIndex_baseScore = Math.floor(ZcmModel.instance._curIndex_baseBet / 10);
                ZcmModel.instance._curIndex_baseRate = ZcmModel.instance._curIndex_baseBet % 10;
                ZcmModel.instance.curBet = (ZcmModel.instance._curIndex_baseScore == 0 ? 0.1 : ZcmModel.instance._curIndex_baseScore * 0.5) * (ZcmModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", ZcmModel.instance._curIndex_baseScore + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", ZcmModel.instance._curIndex_baseRate + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", ZcmModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (ZcmModel.instance.gameStatus != eRunStatus.NONE || ZcmModel.instance.isAuto) {
                  return;
                }
                ZcmModel.instance._curIndex_baseBet++;
                if (ZcmModel.instance._curIndex_baseBet > 29) {
                  ZcmModel.instance._curIndex_baseBet = 29;
                }
                ZcmModel.instance._curIndex_baseScore = Math.floor(ZcmModel.instance._curIndex_baseBet / 10);
                ZcmModel.instance._curIndex_baseRate = ZcmModel.instance._curIndex_baseBet % 10;
                ZcmModel.instance.curBet = (ZcmModel.instance._curIndex_baseScore == 0 ? 0.1 : ZcmModel.instance._curIndex_baseScore * 0.5) * (ZcmModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", ZcmModel.instance._curIndex_baseScore + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", ZcmModel.instance._curIndex_baseRate + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", ZcmModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();

                if (ZcmModel.instance.isAuto) {
                  break;
                }
                if (ZcmModel.instance.gameStatus == eRunStatus.NONE) {
                  event.target.getComponent(Button).interactable = false;
                  //                    // ZcmUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(5).call(function () {
                    if (!ZcmModel.instance.isAuto) {
                      event.target.getComponent(Button).interactable = true;
                      //                                // ZcmUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), false);
                    }
                  }).start();
                  ZcmCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (ZcmModel.instance.gameStatus != eRunStatus.NONE || ZcmModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", ZcmUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  Common.transformSize(setBase);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }

            //            //FREE
            case "Button_enter":
              {
                this.doEnterFree();
                break;
              }
            case "Button_exit":
              {
                this.showFree(false);
              }
          }
        };
        _proto.onSetMask = function onSetMask(iCol, posX) {
          gts.Debug.Log("==onSetMask=posX=" + posX);
          if (iCol == 0) {
            if (!this.Node_mask_0.active) {
              this.Node_mask_0.active = true;
              this.Node_mask_0.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_mask_0.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
            }
          } else {
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
            }
            ZcmUtils.instance.stopSound(eSound.scarret);
            var setCol = iCol + 1;
            if (setCol < this.zcm_symbolList.length) {
              ZcmUtils.instance.playOneShot(eSound.scarret);
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL - 2 * (iCol + 1 - 1);
              this.Node_colEffect.setPosition(this.zcm_symbolList[iCol + 1].node.getPosition().x, this.Node_colEffect.position.y);
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            if (this.Node_mask_0.active) {
              tween(this.Node_mask_0.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this6.Node_mask_0.active = false;
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
          if (!this.Node_mask_0.active) {
            this.Node_mask_0.active = true;
            this.Node_mask_0.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_0.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 180
            }).start();
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
          if (ZcmModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.Node_info.node.active = false;
          this.Label_symRate.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          Common.setButtonEnableWithGray(this.Button_buy, false);
          this.Node_tipEffect.node.active = false;
          var Node_effect = this.Node_tipEffect.node.getChildByName("Node_effect");
          Node_effect.active = false;
          ZcmModel.instance.curTotalWin = 0;
          if (ZcmModel.instance.freeStatus == eRunStatus.NONE) {
            ZcmModel.instance.totalRate = 0;
            this.Label_win.string = "0.00";
            EventManager.instance.emit(eEvent.updateWin, 0);
            this.clearCatNum();
          }
          this.Node_effectRoot.removeAllChildren();
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //            // ZcmModel.instance.specialStartCol = 2;
                  arrPro = [];
                  for (i = 0; i < _this7.zcm_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = ZcmModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = ZcmModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += ZcmModel.instance.specialStartCol > 0 && i > ZcmModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - ZcmModel.instance.specialStartCol) : 0;
                    arrPro.push(_this7.zcm_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _this7.Skeleton_run.setAnimation(0, "idle", true);
                  _this7.scheduleOnce(_this7.doRunEnd, 0);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          ZcmModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "quay") {
            this.Skeleton_run.setAnimation(0, "quay", false);
            this.Skeleton_run.addAnimation(0, "idle", true);
          }
          if (ZcmModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (ZcmModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + ZcmModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            ZcmUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this8 = this;
            var symRate, result, i, resultList, _i, _result, resultNext, arrPro, _i2, _i3, com_zcm_winTip, _com_zcm_winTip, winRate, curTotalWin, _i4, _i5, _symRate, _i6, _arrPro, _i7, delayStart, _com_zcm_winTip2, pos, doContinue, totalRate, Node_bigWinEffect, lv, Label_totalWin;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  ZcmModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_colEffect.active = false;
                    }).start();
                  }
                  symRate = 1;
                  result = ZcmModel.instance.betResult.Res[0];
                  for (i = 0; i < result.AllPosMsg.length; i++) {
                    symRate *= result.AllPosMsg[i].length;
                  }
                  ZcmUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                  ZcmModel.instance.specialStartCol = 0;
                  ZcmModel.instance.curTotalWin = 0;
                  resultList = ZcmModel.instance.betResult.Res;
                  _i = 0;
                case 11:
                  if (!(_i < resultList.length)) {
                    _context2.next = 64;
                    break;
                  }
                  _result = resultList[_i];
                  if (!(_result.RewardMoney > 0)) {
                    _context2.next = 55;
                    break;
                  }
                  resultNext = resultList[_i + 1];
                  this.showMask();

                  //                //
                  ZcmUtils.instance.playOneShot(eSound.clear_0);

                  //                //doEffect
                  arrPro = [];
                  for (_i2 = 0; _i2 < this.zcm_symbolList.length; _i2++) {
                    arrPro.push(this.zcm_symbolList[_i2].doEffect());
                  }
                  _context2.next = 21;
                  return Promise.all(arrPro);
                case 21:
                  //                //doCatNumCollect
                  //                //----start collect
                  arrPro = [];
                  for (_i3 = 0; _i3 < this.zcm_symbolList.length; _i3++) {
                    arrPro.push(this.zcm_symbolList[_i3].doCatNumCollect());
                  }
                  _context2.next = 25;
                  return Promise.all(arrPro);
                case 25:
                  do {
                    //                    //显示得分 tip
                    this.Node_tipEffect.node.active = true;
                    this.Node_tipEffect.setAnimation(0, "boom_purple", false);
                    this.Node_tipEffect.setCompleteListener(function () {
                      _this8.Node_tipEffect.setCompleteListener(null);
                      var Node_effect = _this8.Node_tipEffect.node.getChildByName("Node_effect");
                      Node_effect.active = true;
                      Node_effect.getComponent(UIOpacity).opacity = 0;
                      Node_effect.getComponent(sp.Skeleton).setAnimation(0, "staridle_purple", true);
                      tween(Node_effect.getComponent(UIOpacity)).to(0.2, {
                        opacity: 255
                      }).start();
                    });
                    ZcmModel.instance.curTotalWin += _result.RewardMoney;
                    this.Node_helpTip.active = false;
                    this.Node_winTip.active = true;
                    com_zcm_winTip = this.Node_winTip.getComponent(zcm_winTip);
                    if (!this.Label_catNum.active) {
                      com_zcm_winTip.doShow(_result.RewardMoney);
                    } else {
                      com_zcm_winTip.doShowRate(_result.RewardMoney / _result.ExtraOdd);
                    }
                  } while (false);
                  gts.Debug.LogWarr("==zcm_symbol.catCount==" + zcm_symbol.catCount);
                  if (!this.Label_catNum.active) {
                    _context2.next = 34;
                    break;
                  }
                  this.Button_buy.node.active = false;

                  //                    //----collect end
                  _context2.next = 31;
                  return this.doCatNumDrop();
                case 31:
                  _com_zcm_winTip = this.Node_winTip.getComponent(zcm_winTip);
                  _com_zcm_winTip.doShowRate(_result.RewardMoney);
                  if (zcm_symbol.catCount > 0) {
                    winRate = _result.RewardMoney / (ZcmModel.instance.curBet * 1000);
                    if (winRate < 10) {
                      this.Node_tipEffect.setAnimation(0, "boom_yellow", false);
                    } else if (winRate < 20) {
                      this.Node_tipEffect.setAnimation(0, "k_blue_intro", false);
                      this.Node_tipEffect.addAnimation(0, "k_blue_p", true);
                    } else {
                      this.Node_tipEffect.setAnimation(0, "k_purple_intro", false);
                      this.Node_tipEffect.addAnimation(0, "k_purple_p", true);
                    }
                  } else {
                    this.Node_tipEffect.setAnimation(0, "boom_yellow", false);
                  }
                case 34:
                  zcm_symbol.catCount = 0;
                  if (ZcmModel.instance.freeStatus != eRunStatus.NONE) {
                    ZcmModel.instance.totalFreeWin += _result.RewardMoney;
                  }
                  curTotalWin = ZcmModel.instance.freeStatus != eRunStatus.NONE ? ZcmModel.instance.totalFreeWin : ZcmModel.instance.curTotalWin;
                  ZcmUtils.instance.updateLabelAdd(this.Label_win, curTotalWin, false, curTotalWin - _result.RewardMoney);
                  if (ZcmModel.instance.curTotalWin > 0) {
                    //                    //gengxin
                    EventManager.instance.emit(eEvent.updateWin, curTotalWin);
                  }
                  ZcmUtils.instance.playOneShot(eSound["break"]);
                  arrPro = [];
                  for (_i4 = 0; _i4 < this.zcm_symbolList.length; _i4++) {
                    arrPro.push(this.zcm_symbolList[_i4].doClear());
                  }
                  _context2.next = 44;
                  return Promise.all(arrPro);
                case 44:
                  this.showMask(false);

                  //                //play sound
                  if (_i == 2) {
                    ZcmUtils.instance.playOneShot(eSound.nice_0);
                  } else if (_i > 2) {
                    ZcmUtils.instance.playOneShot(eSound.nice_1);
                  }

                  //                //drop
                  arrPro = [];
                  for (_i5 = 0; _i5 < this.zcm_symbolList.length; _i5++) {
                    arrPro.push(this.zcm_symbolList[_i5].doDrop(resultNext));
                  }
                  _context2.next = 50;
                  return Promise.all(arrPro);
                case 50:
                  _symRate = 1;
                  for (_i6 = 0; _i6 < resultNext.AllPosMsg.length; _i6++) {
                    _symRate *= resultNext.AllPosMsg[_i6].length;
                  }
                  if (parseInt(this.Label_symRate.string) != _symRate) {
                    ZcmUtils.instance.updateLabelNomal(this.Label_symRate, _symRate);
                  }

                  //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                  _context2.next = 61;
                  break;
                case 55:
                  if (!(ZcmModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 61;
                    break;
                  }
                  _arrPro = [];
                  for (_i7 = 0; _i7 < this.zcm_symbolList.length; _i7++) {
                    _arrPro.push(this.zcm_symbolList[_i7].doCatNumCollect(1));
                  }
                  _context2.next = 60;
                  return Promise.all(_arrPro);
                case 60:
                  zcm_symbol.catCount = 0;
                case 61:
                  _i++;
                  _context2.next = 11;
                  break;
                case 64:
                  this.showMask(false);
                  delayStart = 0.25;
                  if (ZcmModel.instance.curTotalWin > 0) {
                    _com_zcm_winTip2 = this.Node_winTip.getComponent(zcm_winTip);
                    _com_zcm_winTip2.doShow(ZcmModel.instance.curTotalWin, true);
                    delayStart = 1.0;
                    if (ZcmModel.instance.endBalance > 0) {
                      ZcmModel.instance.curBalance = ZcmModel.instance.endBalance;
                      ZcmModel.instance.endBalance = 0;
                      this.updateGold();
                    }
                  }
                  if (!ZcmModel.instance.isAuto) {
                    Common.setButtonEnableWithGray(this.Button_buy, true);

                    //            // this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.interactable = true;

                    //            // ZcmUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                  }

                  ZcmModel.instance.gameStatus = eRunStatus.NONE;
                  if (!this.Button_buy.node.active && ZcmModel.instance.freeStatus == eRunStatus.NONE) {
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
                    this.scaleCatNum();
                  }

                  //        //free and auto
                  if (ZcmModel.instance.freeStatus != eRunStatus.NONE) {
                    //            // ZcmModel.instance.totalFreeWin += ZcmModel.instance.curTotalWin;
                    doContinue = function doContinue() {
                      _this8.scheduleOnce(function () {
                        _this8.Node_bigWin.active = false;
                        if (ZcmModel.instance.totalFreeTimes > 0) {
                          ZcmCtrl.instance.reqBet();
                        } else {
                          ZcmModel.instance.freeStatus = eRunStatus.END;
                          _this8.doEndFree();
                        }
                      }, delayStart);
                    };
                    totalRate = ZcmModel.instance.curTotalWin / (ZcmModel.instance.curBet * 1000); //            // //TEST
                    //            // totalRate = ZcmModel.instance.curTotalWin > 0 ? Math.floor(Math.random() * 50 + 10) : 0;
                    if (totalRate >= 20) {
                      //                //大奖显示
                      this.Node_bigWin.parent = this.node;
                      this.Node_bigWin.getComponent(UITransform).priority = 52;
                      Node_bigWinEffect = this.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                      lv = totalRate < 35 ? 1 : totalRate < 50 ? 2 : 3;
                      this.Node_bigWin.active = true;
                      Node_bigWinEffect.setAnimation(0, "lv" + lv + "_win", false);
                      Node_bigWinEffect.addAnimation(0, "lv" + lv + "_idle", true);
                      this.Node_bigWin.scale = v3(0.5, 0.5, 1);
                      Label_totalWin = this.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                      Label_totalWin.string = "";
                      tween(this.Node_bigWin).to(0.1, {
                        scale: v3(1.2, 1.2, 1)
                      }, {
                        easing: "quadOut"
                      }).to(0.05, {
                        scale: v3(1, 1, 1)
                      }, {
                        easing: "quadIn"
                      }).call(function () {
                        var totalTime = lv * 4;
                        var dt = 0.05;
                        var updateTimes = totalTime / dt;
                        var destWin = ZcmModel.instance.curTotalWin;
                        var disWin = Math.floor(ZcmModel.instance.curTotalWin / updateTimes);
                        var curTotalWin = 0;
                        tween(Label_totalWin.node).repeatForever(
                        //                                // updateTimes + 1,
                        tween(Label_totalWin.node).delay(dt).call(function () {
                          curTotalWin += disWin;
                          if (curTotalWin > destWin) {
                            Tween.stopAllByTarget(Label_totalWin.node);
                            curTotalWin = destWin;
                            delayStart = 1.0;
                            doContinue();
                          }
                          Label_totalWin.string = ZcmUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                        })).start();
                      }).start();
                    } else {
                      doContinue();
                    }
                  } else if (ZcmModel.instance.totalFreeTimes > 0) {
                    this.showFree(true);
                  } else if (ZcmModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //                // this.doStartRun();
                      ZcmCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 71:
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
        _proto.showFree = function showFree(isShow, isEnter) {
          var _this9 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!isShow) {
            if (ZcmModel.instance.freeStatus != eRunStatus.NONE) {
              ZcmModel.instance.freeStatus = eRunStatus.NONE;
              AudioManager.instance.resumeMusic();
              ZcmUtils.instance.stopSound(eSound.freeEnd_1);
              tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).call(function () {
                _this9.Node_free.active = false;
                var Node_enter = _this9.Node_free.getChildByName("Node_enter");
                Node_enter.active = false;
                var Node_end = _this9.Node_free.getChildByName("Node_end");
                Node_end.active = false;
                var Node_freeInfo = _this9.Node_free.getChildByName("Node_freeInfo");
                Node_freeInfo.active = false;
                var Node_freePartical = _this9.Node_free.getChildByName("Node_freePartical");
                Node_freePartical.active = false;
                _this9.Node_bigWin.active = false;
                if (ZcmModel.instance.isAuto) {
                  _this9.scheduleOnce(function () {
                    ZcmCtrl.instance.reqBet();
                  }, 0.25);
                }
              }).start();
            }
            return;
          }
          if (!this.Node_free.active) {
            if (!isEnter) {
              this.scheduleOnce(function () {
                //     cc.audioEngine.pauseMusic();
                AudioManager.instance.pauseMusic();
                ZcmUtils.instance.playSound(eSound.startFree);
                _this9.setEnterFree();
              }, 1.0);
            } else {
              this.doEnterFree();
            }
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];

          //        //房子背景
          this.Node_roomBg.spriteFrame = this.arrRoomSpFrame[0];

          //        //格子背景
          this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[0];

          //        //Sprite_freeBg
          var Sprite_freeBg = find("Node_down/Sprite_freeBg", this.node);
          Sprite_freeBg.active = false;

          //        //绳子
          this.Node_shengzi.setAnimation(0, "idle1", true); //idle1

          this.clearCatNum();
          this.Node_public.setPosition(this.Node_public.position.x, -40);
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Button_buy.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this10 = this;
          this.Node_info.node.active = false;

          //        // this.Sprite_tipBg_free.active = true;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 0;
          this.Label_win.string = "0.00";
          EventManager.instance.emit(eEvent.updateWin, 0);

          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          Node_enter.getComponent(UIOpacity).opacity = 255;
          Node_enter.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          Node_enter.getComponent(sp.Skeleton).addAnimation(0, "idle", true);

          //        //免费次数
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + ZcmModel.instance.totalFreeTimes;
          ZcmModel.instance.totalFreeWin = 0;
          tween(this.Node_free.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).call(function () {
            var Node_countDown = Node_enter.getChildByName("Node_countDown");
            Node_countDown.active = true;
            Node_countDown.getComponent(UIOpacity).opacity = 255;
            var Label_tims = Node_countDown.getChildByName("Label_tims");
            var Button_enter = Node_enter.getChildByName("Button_enter");
            Button_enter.active = false;
            var countTimes = 0;
            tween(Label_tims).repeat(100, tween(Label_tims).delay(0.01).call(function () {
              countTimes++;
              Label_tims.getComponent(Label).string = "" + countTimes;
            })).delay(0.25).call(function () {
              tween(Node_countDown.getComponent(UIOpacity)).to(0.25, {
                opacity: 0
              }).call(function () {
                Node_countDown.active = false;
              }).start();
              Button_enter.active = true;
              Button_enter.getComponent(UIOpacity).opacity = 0;
              tween(Button_enter.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).call(function () {
                _this10.scheduleOnce(_this10.doEnterFree, 3.0);
              }).start();
            }).start();
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          if (ZcmModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          ZcmModel.instance.freeStatus = eRunStatus.RUNNING;

          //        //enter close
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          if (Node_enter.active) {
            tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              Node_enter.active = false;
              ZcmUtils.instance.stopSound(eSound.startFree);
            }).start();
          }

          //        //背景
          this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[1];

          //        //房子背景
          this.Node_roomBg.spriteFrame = this.arrRoomSpFrame[1];

          //        //格子背景
          this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[1];

          //        //Sprite_freeBg
          var Sprite_freeBg = find("Node_down/Sprite_freeBg", this.node);
          Sprite_freeBg.active = true;

          //        //绳子
          this.Node_shengzi.setAnimation(0, "idle2", true); //idle1

          if (this.Label_catNum) {
            this.Label_catNum.active = false;
          }
          this.Node_public.setPosition(this.Node_public.position.x, -260);
          this.Node_action.active = false;
          this.Node_menu.active = false;
          this.Button_menu.node.active = false;
          this.Button_run.node.active = false;
          this.Button_buy.node.active = false;

          //        // this.Node_freeFire.active = true;

          if (!this.Node_free.active) {
            this.Node_free.active = true;
            this.Node_free.getComponent(UIOpacity).opacity = 255;
          }
          var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
          Node_freeInfo.active = true;

          //        //免费次数
          var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
          Label_freeTimes.active = true;
          Label_freeTimes.getComponent(Label).string = "" + ZcmModel.instance.totalFreeTimes;
          var Node_freePartical = this.Node_free.getChildByName("Node_freePartical");
          Node_freePartical.active = true;
          var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
          Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
          this.setFreeCatNum();
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            ZcmCtrl.instance.reqBet();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this11 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          var endSpine = Node_end.getComponent(sp.Skeleton);
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);
          Node_end.getChildByName("Label_totalWin").getComponent(Label).string = "";
          this.scheduleOnce(function () {
            //            //免费总得分
            var Label_totalWin = Node_end.getChildByName("Label_totalWin");
            Label_totalWin.scale = v3(1.0, 1.0, 1);
            ZcmUtils.instance.updateLabelAdd(Label_totalWin.getComponent(Label), ZcmModel.instance.totalFreeWin);
          }, 0.5);
          this.scheduleOnce(function () {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = endSpine.skeletonData;
            itemSpine.setAnimation(0, "gold_win", false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              newNode.destroyFromParent();
            });
            Node_end.addChild(newNode);
            var Label_totalWin = Node_end.getChildByName("Label_totalWin");
            tween(Label_totalWin).to(0.25, {
              scale: v3(1.5, 1.5, 1)
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }, 1.25);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();

          // cc.audioEngine.pauseMusic();
          AudioManager.instance.pauseMusic();
          ZcmUtils.instance.playSound(eSound.free_winEffect, true);
          this.setEndFree();

          //        //2.0秒后返回正常
          this.scheduleOnce(function () {
            ZcmUtils.instance.stopSound(eSound.free_winEffect);
            _this11.showFree(false);
          }, 8);
        };
        _proto.onCatNumMove = function onCatNumMove(destPos) {
          if (destPos === void 0) {
            destPos = 260;
          }
          if (!this.Label_catNum.active || this.Label_catNum.getPosition().y == destPos) {
            return;
          }
          tween(this.Label_catNum).to(0.25, {
            position: v3(this.Label_catNum.position.x, destPos),
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.onCatNumAdd = function onCatNumAdd(collectType) {
          var _this12 = this;
          var defaultScale = collectType == 1 ? 0.5 : 1.0;
          var toScale = collectType == 1 ? 0.7 : 1.2;
          var duration = 0.1;
          if (!this.Label_catNum.active) {
            this.Label_catNum.active = true;
            this.Label_catNum.getComponent(UITransform).priority = 51;
            this.Label_catNum.setPosition(this.Label_catNum.position.x, 260);
            this.Label_catNum.getComponent(Label).string = "";
            toScale = 0.8;
          }
          this.Label_catNum.getComponent(UIOpacity).opacity = 255;
          ZcmUtils.instance.playSound(eSound.catNumAdd, false);

          //        //数字心跳
          tween(this.Label_catNum).to(duration, {
            scale: v3(toScale, toScale, 1)
          }, {
            easing: "cubicOut"
          }).call(function () {
            ZcmModel.instance.totalRate += 2;
            _this12.Label_catNum.getComponent(Label).string = "*" + ZcmModel.instance.totalRate;
          }).to(duration, {
            scale: v3(defaultScale, defaultScale, 1)
          }).start();

          //        //光圈动画
          var newNode = new Node();
          var itemSpine = newNode.addComponent(sp.Skeleton);
          itemSpine.premultipliedAlpha = false;
          itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
          itemSpine.skeletonData = ZcmUtils.instance.getSkeletonData("bo");
          itemSpine.setAnimation(0, "big", false);
          itemSpine.setCompleteListener(function () {
            itemSpine.setCompleteListener(null);
            newNode.destroyFromParent();
          });
          newNode.setPosition(newNode.position.x, collectType == 1 ? -240 : 188);
          newNode.getComponent(UITransform).priority = 50;
          this.node.addChild(newNode);
        };
        _proto.setFreeCatNum = function setFreeCatNum() {
          if (!this.Label_catNum.active) {
            this.Label_catNum.active = true;
            ZcmModel.instance.totalRate = ZcmModel.instance.totalRate > 2 ? ZcmModel.instance.totalRate : 2;
          }
          this.Label_catNum.getComponent(UIOpacity).opacity = 255;
          this.Label_catNum.setPosition(this.Label_catNum.position.x, -270);
          this.Label_catNum.scale = v3(0.5, 0.5, 1);
          this.Label_catNum.getComponent(Label).string = "*" + ZcmModel.instance.totalRate;
        };
        _proto.doCatNumDrop = function doCatNumDrop() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            if (_this13.Label_catNum.active) {
              var toPos = v2(0, -70);
              tween(_this13.Label_catNum).delay(0.5).to(0.05, {
                position: v3(_this13.Label_catNum.getPosition().x, _this13.Label_catNum.getPosition().y + 20)
              }).to(0.25, {
                position: v3(_this13.Label_catNum.getPosition().x, toPos.y),
                scale: v3(0.5, 0.5, 1)
              }).call(resolve).call(function () {
                tween(_this13.Label_catNum.getComponent(UIOpacity)).to(0.25, {
                  opacity: 0
                }).start();
              }).to(0.25, {
                scale: v3(1.5, 1.5, 1)
              }).to(0.1, {
                scale: v3(0.5, 0.5, 1)
              }).call(function () {
                tween(_this13.Label_catNum.getComponent(UIOpacity)).to(0.5, {
                  opacity: 255
                }).start();
              }).to(0.5, {
                position: v3(_this13.Label_catNum.getPosition().x, toPos.y - 170)
              }, {
                easing: "quadOut"
              }).start();
            } else {
              resolve();
            }
          });
        };
        _proto.clearCatNum = function clearCatNum() {
          var _this14 = this;
          if (this.Label_catNum.active) {
            tween(this.Label_catNum.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              _this14.Label_catNum.active = false;
            }).start();
          }
        };
        _proto.scaleCatNum = function scaleCatNum() {
          if (this.Label_catNum.active) {
            tween(this.Label_catNum).to(0.2, {
              scale: v3(this.Label_catNum.scale.x * 0.4, this.Label_catNum.scale.y * 0.4, 1),
              position: v3(this.Label_catNum.getPosition().x, this.Label_catNum.getPosition().y + 27)
            }).start();
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(ZcmModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            ZcmUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this15 = this;
          switch (event) {
            case eProto.HD_info:
              {
                var AllPosMsg = ZcmModel.instance.gameInfo.Res[ZcmModel.instance.gameInfo.Res.length - 1].AllPosMsg;
                //                //横向
                var InitExtraPos = [];
                for (var i = 0; i < 4; i++) {
                  var InitPosMsg = AllPosMsg[i + 1];
                  InitExtraPos.push(InitPosMsg[InitPosMsg.length - 1]);
                }
                this.zcm_symbolList[0].init(InitExtraPos);

                //                //纵向
                for (var _i8 = 1; _i8 < this.zcm_symbolList.length; _i8++) {
                  var _InitPosMsg = AllPosMsg[_i8 - 1];
                  this.zcm_symbolList[_i8].init(_InitPosMsg);
                }
                this.scheduleOnce(function () {
                  _this15.Button_run.interactable = true;
                }, 1.0);
                this.Label_bet.string = ZcmUtils.instance.numberFormat(ZcmModel.instance.curBet, 2.0) + "K";
                var symRate = 1;
                for (var _i9 = 0; _i9 < AllPosMsg.length; _i9++) {
                  symRate *= AllPosMsg[_i9].length;
                }
                ZcmUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                var totalWin = 0;
                var resultList = ZcmModel.instance.gameInfo.Res;
                for (var _i10 = 0; _i10 < resultList.length; _i10++) {
                  var result = resultList[_i10];
                  if (result.RewardMoney > 0) {
                    totalWin += result.RewardMoney;
                  }
                }
                if (totalWin > 0) {
                  var ox = ZcmModel.instance.gameInfo.Res[ZcmModel.instance.gameInfo.Res.length - 1].ExtraOdd;
                  if (ox > 1) {
                    this.Label_catNum.active = true;
                    this.Label_catNum.setPosition(this.Label_catNum.position.x, -205);
                    this.Label_catNum.scale = v3(0.25, 0.25, 1);
                    this.Label_catNum.getComponent(Label).string = "*" + ox;
                  }
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  var com_zcm_winTip = this.Node_winTip.getComponent(zcm_winTip);
                  com_zcm_winTip.doShow(totalWin, true);
                  ZcmUtils.instance.updateLabelAdd(this.Label_win, totalWin);
                }
                if (ZcmModel.instance.totalFreeTimes > 0) {
                  this.showFree(true, true);
                }
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                //                // this.Button_run.interactable = true;
                //                // cc.Tween.stopAllByTarget(this.Button_run.node);
                //                // ZcmUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }

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
        return ZcmGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec4], {
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_helpTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "zcm_symbolList", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipEffect", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_buy", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_symRate", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_catNum", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "arrRoomSpFrame", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "arrCenterSpFrame", [_dec26], {
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
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_roomBg", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_centerBg", [_dec29], {
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
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_shengzi", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "zcm_free", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec33], {
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

System.register("chunks:///_virtual/ZcmModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ZcmDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "4bba4nNZxhI3KDjO6ctSXWm", "ZcmModel", undefined);
      var ZcmModel = exports('ZcmModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(ZcmModel, _GameDef$BaseSington);
        function ZcmModel() {
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
          _this.isQuickStop = false;
          _this.curBet = 2.0;
          _this.curBetBase = 0;
          _this.curBetRate = 0;
          _this.curTotalBet = 2.0;
          _this.curTotalWin = 0;
          //    // curRate: number = 0;
          _this.totalRate = 0;
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
          return _this;
        }
        var _proto = ZcmModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return ZcmModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ZcmScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './ZcmDef.ts', './ZcmUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, ZcmUtils, Common;
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
      ZcmUtils = module.ZcmUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6270dZlSdFDCa2wknHJwxdt", "ZcmScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ZcmScene = exports('default', (_dec = ccclass("ZcmScene"), _dec2 = menu("game/ZcmGame/ZcmScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ZcmScene, _Component);
        function ZcmScene() {
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
        var _proto = ZcmScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          ZcmUtils.instance.bundle = assetManager.getBundle(cBundle);
          ZcmUtils.instance.preLoad();
          ZcmUtils.instance.playBgMusic();
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
            //            // if (!ZcmUtils.instance.isChangeOrientation()) {
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
            ZcmUtils.instance.bundle.load("prefab/ZcmGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (ZcmUtils.instance.isChangeOrientation()) {
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
        return ZcmScene;
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

System.register("chunks:///_virtual/ZcmUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './ZcmDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eSound, eSymbol, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Font = module.Font;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b392d+cbxxOnI2buKez1SuD", "ZcmUtils", undefined);
      var symbol_nomal_icon = ["icon_scatter", "icon_wild", "icon_Lucky_Cat", "icon_drum", "icon_Dharma", "icon_fan", "icon_Salmon", "icon_sushi", "icon_A", "icon_K", "icon_Q", "icon_J", "icon_10"];
      var symbol_nomal_iconBox = ["box_scatter_0", "box_wild_0", "box_Lucky_Cat_0", "box_drum_0", "box_Dharma_0", "box_fan_0", "box_Salmon_0", "box_sushi_0", "box_A_0", "box_K_0", "box_Q_0", "box_J_0", "box_10_0"];
      var symbol_spine_info = [{
        data: "icon_scatter",
        ani_idle: ["lv1_idle", "lv2_idle"],
        ani_win: ["lv1_win", "lv2_win"]
      }, {
        data: "icon_wild",
        ani_idle: ["lv1_p", "lv2_p", "lv3_p", "lv4_p"],
        ani_win: ["lv1_idle", "lv2_idle", "lv3_idle", "lv4_idle"]
      }, {
        data: "icon",
        ani_idle: ["p_cat1", "p_cat2"]
      }];
      var symbol_dataName = ["icon_scatter", "icon_wild", "icon", "icon"];
      var symbol_spine_ani = ["gu", "bdw", "sz", "swy", "ss", "a", "k", "q", "j", "10"]; //3-12

      var ZcmUtils = exports('ZcmUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(ZcmUtils, _GameDef$BaseSington);
        function ZcmUtils() {
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
        var _proto = ZcmUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/ZcmGameView");
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
                  arrHLoad.push(this.asyncLoad("spine/icon/icon_scatter", sp.SkeletonData, function (err, spineData) {
                    if (!err) {
                      _this4.arrSkeletonData[spineData.name] = spineData;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("spine/icon/icon_wild", sp.SkeletonData, function (err, spineData) {
                    if (!err) {
                      _this4.arrSkeletonData[spineData.name] = spineData;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("spine/icon/icon", sp.SkeletonData, function (err, spineData) {
                    if (!err) {
                      _this4.arrSkeletonData[spineData.name] = spineData;
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator4 = _createForOfIteratorHelperLoose(arrSpineData), _step4; !(_step4 = _iterator4()).done;) {
                        var spineData = _step4.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/red_01", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  _context3.next = 11;
                  return Promise.all(arrHLoad);
                case 11:
                  if (cb) {
                    cb();
                  }
                case 12:
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
          // cc.audioEngine.setMusicVolume(0.75);
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

            // cc.audioEngine.setEffectsVolume(1);
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
          ZcmUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              ZcmUtils.instance.stopSound(eSound.numAdd);
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
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          ZcmUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              ZcmUtils.instance.stopSound(eSound.numAdd);
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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, isGold) {
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex];
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length) {
          if (length === void 0) {
            length = 0;
          }
          if (this.arrIconBoxSpriteFrame) {
            var symbol = "" + symbol_nomal_iconBox[symbolIndex] + length;
            return this.arrIconBoxSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconFrame = function getItemSymbolIconFrame(frameType) {
          if (frameType == 0) {
            return null;
          }
          if (this.arrIconFrameSpriteFrame) {
            var symbol = frameType == 1 ? "Base_Reel_Silver_frame_02" : "Base_Reel_Gold_frame_02";
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle) {
          if (length === void 0) {
            length = 1;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        // gts.Debug.Log("==getSymbolAniName==" + index);
          if (symbolIndex < eSymbol.GU) {
            var arrInfo = symbol_spine_info[symbolIndex];
            if (symbolIndex == eSymbol.CAT) {
              return arrInfo.ani_idle[length == 1 ? 0 : 1];
            }
            var _index = symbolIndex == eSymbol.SCATTER ? length == 1 ? 0 : 1 : length - 1;
            var aniName = isIdle ? arrInfo.ani_idle[_index] : arrInfo.ani_win[_index];
            return aniName;
          }
          var name = symbol_spine_ani[symbolIndex - eSymbol.GU];
          return isIdle ? "p_" + name : "icon_" + name;
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
          var symbol = index < symbol_dataName.length - 1 ? index : symbol_dataName.length - 1;
          return this.arrSkeletonData[symbol_dataName[symbol]];
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return ZcmUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/ZcmGame', 'chunks:///_virtual/ZcmGame'); 
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