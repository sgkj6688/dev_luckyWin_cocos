System.register("chunks:///_virtual/Hjc_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "3d1f92T6zNOsaFc5WsbmxK3", "Hjc_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Hjc_btnEffect = exports('default', (_dec = ccclass("HjcBtnEffect"), _dec2 = menu("game/HjcGame/Hjc_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_btnEffect, _Component);
        function Hjc_btnEffect() {
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
        var _proto = Hjc_btnEffect.prototype;
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

        _createClass(Hjc_btnEffect, [{
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

        return Hjc_btnEffect;
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

System.register("chunks:///_virtual/Hjc_buyReward.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './HjcCtrl.ts', './HjcModel.ts', './HjcUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ViewManager, HjcCtrl, HjcModel, HjcUtils;
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
      HjcCtrl = module.HjcCtrl;
    }, function (module) {
      HjcModel = module.HjcModel;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "4672eYAWiNNYaMDM392d5Xu", "Hjc_buyReward", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_buyReward = exports('default', (_dec = ccclass("HjcBuyReward"), _dec2 = menu("game/HjcGame/Hjc_buyReward"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_buyReward, _Component);
        function Hjc_buyReward() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Hjc_buyReward.prototype;
        _proto.onLoad = function onLoad() {
          this.Label_gold.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet * 50, 2.0) + "K";
        };
        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_cancel":
              {
                break;
              }
            case "Button_ok":
              {
                HjcCtrl.instance.reqBet(true);
                break;
              }
          }
          ViewManager.instance.closePopView(this.node);
        };
        return Hjc_buyReward;
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

System.register("chunks:///_virtual/Hjc_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "28673+rsyVNKoy0j5RFviI1", "Hjc_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_helpTip = exports('default', (_dec = ccclass("HjcHelpTip"), _dec2 = menu("game/HjcGame/Hjc_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_helpTip, _Component);
        function Hjc_helpTip() {
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
        var _proto = Hjc_helpTip.prototype;
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
        return Hjc_helpTip;
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

System.register("chunks:///_virtual/Hjc_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcCtrl.ts', './HjcDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, HjcCtrl, eProto, GameDef, Common;
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
      HjcCtrl = module.HjcCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4630eLRGIlH9I9G/ugjPLXK", "Hjc_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Hjc_history = exports('default', (_dec = ccclass("HjcHistory"), _dec2 = menu("game/HjcGame/Hjc_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Hjc_history, _GameDef$BaseView);
        function Hjc_history() {
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
        var _proto = Hjc_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, HjcCtrl.instance);
          HjcCtrl.instance.reqHistory();
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
          HjcCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          HjcCtrl.instance.reqHistory(start);
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
        return Hjc_history;
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

System.register("chunks:///_virtual/Hjc_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './HjcUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, HjcUtils, Common;
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
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "516a1B7ECBN/bcBqw8IHPjQ", "Hjc_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_historyItem = exports('default', (_dec = ccclass("HjcHistoryItem"), _dec2 = menu("game/HjcGame/Hjc_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_historyItem, _Component);
        function Hjc_historyItem() {
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
        var _proto = Hjc_historyItem.prototype;
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
          this.Label_bet.string = HjcUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + HjcUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + HjcUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Hjc_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Hjc_historyItem;
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

System.register("chunks:///_virtual/Hjc_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcCtrl.ts', './HjcDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, HjcCtrl, eProto, GameDef, Common;
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
      HjcCtrl = module.HjcCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "5605dvQhsNOfLsjrViditzY", "Hjc_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Hjc_rank = exports('default', (_dec = ccclass("HjcRank"), _dec2 = menu("game/HjcGame/Hjc_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Hjc_rank, _GameDef$BaseView);
        function Hjc_rank() {
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
        var _proto = Hjc_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, HjcCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          HjcCtrl.instance.reqRank();
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
        return Hjc_rank;
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

System.register("chunks:///_virtual/Hjc_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './HjcUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, HjcUtils;
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
      HjcUtils = module.HjcUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "ce375My0stOaoD8s10D8slB", "Hjc_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_rankItem = exports('default', (_dec = ccclass("HjcRankItem"), _dec2 = menu("game/HjcGame/Hjc_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_rankItem, _Component);
        function Hjc_rankItem() {
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
        var _proto = Hjc_rankItem.prototype;
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
          this.Label_win.string = HjcUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Hjc_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Hjc_rankItem;
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

System.register("chunks:///_virtual/Hjc_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcModel.ts', './HjcDef.ts', './HjcUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, HjcModel, eAutoRateType, eEvent, HjcUtils, EventManager;
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
      HjcModel = module.HjcModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d0c78AF/gdG7YySCxF+MrzV", "Hjc_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_ScrollView = exports('default', (_dec = ccclass("HjcScrollView"), _dec2 = menu("game/HjcGame/Hjc_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_ScrollView, _Component);
        function Hjc_ScrollView() {
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
        var _proto = Hjc_ScrollView.prototype;
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
                this._curIndex = HjcModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = HjcModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = HjcModel.instance._curIndex_baseBet;
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
                var strNum = HjcUtils.instance.numberFormat(num, 2);
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
                var _strNum = HjcUtils.instance.numberFormat((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);

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
        return Hjc_ScrollView;
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

System.register("chunks:///_virtual/Hjc_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcModel.ts', './HjcDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, HjcModel, eEvent, ViewManager, EventManager, Common;
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
      HjcModel = module.HjcModel;
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
      cclegacy._RF.push({}, "e4338VSyzNOWaxHcoT+IUlc", "Hjc_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Hjc_setAuto = exports('default', (_dec = ccclass("HjcSetAuto"), _dec2 = menu("game/HjcGame/Hjc_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_setAuto, _Component);
        function Hjc_setAuto() {
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
        var _proto = Hjc_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // if (HjcModel.instance.selAutoIndex != -1) {
          //        //     this.selNode = this.contentRoot.getChildByName(`Node_item_${HjcModel.instance.selAutoIndex}`);
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
                  HjcModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[HjcModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = HjcModel.instance.curBet * 1000 * times;
                  //                    // if (HjcModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(HjcModel.instance.curBalance / (HjcModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(HjcDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !HjcUtils.instance.isChangeOrientation());
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
        return Hjc_setAuto;
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

System.register("chunks:///_virtual/Hjc_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcModel.ts', './HjcDef.ts', './ViewManager.ts', './EventManager.ts', './HjcUtils.ts', './Hjc_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, HjcModel, eEvent, eAutoRateType, ViewManager, EventManager, HjcUtils, Hjc_ScrollView, Common;
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
      HjcModel = module.HjcModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Hjc_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "99e9dRlYQtEFombRO05z00I", "Hjc_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Hjc_setBase = exports('default', (_dec = ccclass("HjcSetBase"), _dec2 = menu("game/HjcGame/Hjc_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_setBase, _Component);
        function Hjc_setBase() {
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
        var _proto = Hjc_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(HjcModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (HjcModel.instance.curTotalWin > 0) {
            this.Label_win.string = HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = HjcModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = HjcModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = HjcModel.instance._curIndex_baseBet;
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
            if (HjcModel.instance.curTotalWin > 0) {
              this.Label_win.string = HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = HjcModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            HjcModel.instance.curTotalWin += disWin;
            if (HjcModel.instance.curTotalWin > destWin) {
              HjcModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Hjc_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Hjc_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Hjc_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Hjc_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Hjc_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Hjc_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Hjc_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                HjcModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                HjcModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                HjcModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Hjc_setBase;
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

System.register("chunks:///_virtual/Hjc_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "ca66dsoGftIJomGGm9zFvYx", "Hjc_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Hjc_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcModel.ts', './HjcDef.ts', './EventManager.ts', './HjcUtils.ts', './Hjc_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, HjcModel, eRunStatus, eSymbol, eConstDef, eEvent, eSound, EventManager, HjcUtils, Hjc_symbolItem;
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
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      HjcModel = module.HjcModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Hjc_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "c6a66/WIuVMM513Y3+KUGY7", "Hjc_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_symbol = exports('default', (_dec = ccclass("HjcSymbol"), _dec2 = menu("game/HjcGame/Hjc_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_symbol, _Component);
        function Hjc_symbol() {
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
          //    // isBreak = false;
          //    // onSymbolBreak(nodeName, pos, length) {
          //    //     let startIndex = -1;
          //    //     for (let i = 0; i < this._symbolList.length; i++) {
          //    //         if (this._symbolList[i].node.name == nodeName) {
          //    //             startIndex = i;
          //    //             this._symbolList.splice(i, 1);
          //    //             break;
          //    //         }
          //    //     }
          //    //     if (startIndex == -1) {
          //    //         return;
          //    //     }
          //    //     this.isBreak = true;
          //    //     let toLength = 0;
          //    //     if (this.isHorizontal) {
          //    //         //横向
          //    //         toLength = (pos - HjcDef.eConstDef.cSymbolStartX) / HjcDef.eConstDef.cSymbolW - length / 2;
          //    //     } else {
          //    //         toLength = (pos - HjcDef.eConstDef.cSymbolStartY) / HjcDef.eConstDef.cSymbolH - length / 2;
          //    //     }
          //    //     for (let i = 0; i < length; i++) {
          //    //         let newItem = cc.instantiate(this.Node_itemTemp);
          //    //         this.itemTag = (this.itemTag + 1) % 2000;
          //    //         newItem.name = `symbol_col_${this._iCol}_tag_${this.itemTag}`;
          //    //         this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          //    //         //POSITON
          //    //         if (this.isHorizontal) {
          //    //             //横向
          //    //             newItem.y = 0;
          //    //             let offsetX = (toLength + 1 / 2) * HjcDef.eConstDef.cSymbolW;
          //    //             newItem.x = HjcDef.eConstDef.cSymbolStartX + offsetX;
          //    //         } else {
          //    //             newItem.x = this.node.x;
          //    //             let offsetY = (toLength + 1 / 2) * HjcDef.eConstDef.cSymbolH;
          //    //             newItem.y = HjcDef.eConstDef.cSymbolStartY + offsetY;
          //    //         }
          //    //         //
          //    //         let itemInfo = {
          //    //             IsReward: this.isHorizontal ? true : false,
          //    //             Length: 1,
          //    //             Rim: 0,
          //    //             Sym: HjcDef.eSymbol.WILD,
          //    //         } as HjcDef.IPosMsg;
          //    //         let com = newItem.getComponent(Hjc_symbolItem);
          //    //         com.initItem(itemInfo, this.isHorizontal, this._iCol);
          //    //         if (startIndex == 0) {
          //    //             this._symbolList.unshift(com);
          //    //         } else {
          //    //             this._symbolList.splice(startIndex, 0, com);
          //    //         }
          //    //         startIndex++;
          //    //         toLength++;
          //    //     }
          //    // }
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Hjc_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          //        // EventManager.instance.on(HjcDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onDisable = function onDisable() {
          //        // EventManager.instance.off(HjcDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
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
              var InitPosMsg = openResult.AllPosMsg[i + 1];
              itemInfo = InitPosMsg[InitPosMsg.length - 1];
            } else {
              itemInfo = openResult.AllPosMsg[this._iCol - 1][i];
            }
            if (itemInfo == null) {
              gts.Debug.Log("===itemInfo==null===");
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
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
            var symLen = this.isHorizontal ? 1 : leftLength >= 4 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * leftLength) + 1;
            var symbol = this.isHorizontal ? Math.floor(Math.random() * eSymbol.TEN) + 1 : Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              Sym: symbol,
              //HjcDef.eSymbol.A,
              Length: symLen,
              Rim: symLen > 1 ? Math.floor(Math.random() * 3) : 0,
              IsReward: false
            };
            itemInfo.Length = this.isHorizontal ? 1 : Math.floor(Math.random() * 4) + 1;
            if (!this.isHorizontal && itemInfo.Sym == eSymbol.WILD) {
              itemInfo.Length = 1;
            }
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (this.isHorizontal) {
            //            //横向

            var offsetX = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolW;
            newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
          } else {
            var offsetY = (toLength + itemInfo.Length / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(Hjc_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += itemInfo.Length;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          var _this2 = this;
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i]);
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
              }).call(function () {
                for (var _iterator = _createForOfIteratorHelperLoose(_this2._symbolList), _step; !(_step = _iterator()).done;) {
                  var comSymbol = _step.value;
                  comSymbol.doBindToUp();
                }
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
              }).call(function () {
                for (var _iterator2 = _createForOfIteratorHelperLoose(_this2._symbolList), _step2; !(_step2 = _iterator2()).done;) {
                  var comSymbol = _step2.value;
                  comSymbol.doBindToUp();
                }
              }).start();
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
              HjcModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(HjcModel.instance.betResult.Res[0]);

            //            //
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
                    var curLength = 0;
                    for (var i = _this3._symbolList.length - 1; i >= 0; i--) {
                      var symbol = _this3._symbolList[i];
                      curLength += symbol.itemInfo.Length;
                      if (curLength > _this3.maxIndex) {
                        var _symbol = _this3._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator3, _step3, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this3.scheduleOnce(function () {
                              HjcUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator3 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step3 = _iterator3()).done;) {
                              _symbol2 = _step3.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (HjcModel.instance.specialStartCol > 0 && (_this3._iCol == 0 || _this3._iCol >= HjcModel.instance.specialStartCol)) {
                              EventManager.instance.emit(eEvent.onSetMask, _this3._iCol, _this3.node.getPosition().x);
                            }
                            _this3.unschedule(scheduleUpdate);
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
              if (_this3._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this3.maxIndex - _this3._curLength;
                offset = _this3.isHorizontal ? disLength * eConstDef.cSymbolW : disLength * eConstDef.cSymbolH;
                _this3._curLength = _this3.maxIndex;
                _this3._runStatus = eRunStatus.END;
              }
              for (var _i2 = _this3._symbolList.length - 1; _i2 >= 0; _i2--) {
                var _symbol3 = _this3._symbolList[_i2];
                if (!_symbol3.doRunning(offset)) {
                  _this3._symbolList.splice(_i2, 1);
                  _symbol3.node.destroyFromParent();
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
            arrPro.push(symbol.doEffect(0.5));
            //            // arrPro.push(symbol.doEffect(Hjc_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Hjc_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        }
        //    // // static catCount = 0;
        //    // doCatNumCollect(collectType = 0) {
        //    //     let arrPro = [];
        //    //     for (let i = 0; i < this._symbolList.length; i++) {
        //    //         let symbol = this._symbolList[i];
        //    //         if (symbol.checkCollect()) {
        //    //             arrPro.push(symbol.doCatNumCollect(Hjc_symbol.catCount * 0.35, collectType));
        //    //             Hjc_symbol.catCount++;
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doClear = /*#__PURE__*/
        function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator4, _step4, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        // Hjc_symbol.catCount = 0;
                  Hjc_symbol.rewardCount = 0;
                  arrPro = [];
                  for (_iterator4 = _createForOfIteratorHelperLoose(this._symbolList); !(_step4 = _iterator4()).done;) {
                    symbol = _step4.value;
                    if (symbol.itemInfo.IsReward) {
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
        }() //    // async doWildChange() {
        //    //     Hjc_symbol.catCount = 0;
        //    //     Hjc_symbol.rewardCount = 0;
        //    //     let arrPro = [];
        //    //     for (const symbol of this._symbolList) {
        //    //         if (symbol.itemInfo.IsReward) {
        //    //             arrPro.push(symbol.doClear());
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doDrop = /*#__PURE__*/
        function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(nextReult) {
            var _nextResultInfoList, arrClear, arrCloud, iRow, symbolItem, i, _iRow, _curLength, arrPro, toLength, newIndex, _iRow2, _symbolItem, nextInfo;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  //        // this.isBreak = false;
                  _nextResultInfoList = this.getResult(nextReult);
                  arrClear = [false, false, false, false, false, false];
                  arrCloud = [false, false, false, false, false, false]; //        //remove
                  for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                    symbolItem = this._symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._symbolList.splice(iRow, 1);
                      this._curLength -= symbolItem.itemInfo.Length;
                      arrClear[iRow] = true;
                    }
                  }
                  i = 0;
                  for (_iRow = 0; _iRow < arrClear.length; _iRow++) {
                    arrClear[_iRow] ? arrCloud[i] = true : i++;
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  newIndex = 0;
                  _iRow2 = 0;
                case 11:
                  if (!(_iRow2 < _nextResultInfoList.length)) {
                    _context3.next = 30;
                    break;
                  }
                  _symbolItem = null;
                  if (!(_iRow2 < this._symbolList.length)) {
                    _context3.next = 19;
                    break;
                  }
                  _symbolItem = this._symbolList[_iRow2];
                  _symbolItem.itemInfo = _nextResultInfoList[_iRow2];
                  //                // newFloor += symbolItem.itemInfo.Length;

                  if (_symbolItem.isChange) {
                    _symbolItem.doEndChange(_symbolItem.itemInfo);
                  }
                  _context3.next = 25;
                  break;
                case 19:
                  nextInfo = _nextResultInfoList[_iRow2];
                  _symbolItem = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem) {
                    _context3.next = 23;
                    break;
                  }
                  return _context3.abrupt("continue", 27);
                case 23:
                  toLength += _symbolItem.itemInfo.Length;
                  newIndex++;
                case 25:
                  arrPro.push(_symbolItem.doDrop(_curLength, arrCloud[_iRow2], newIndex));
                  _curLength += _symbolItem.itemInfo.Length;
                case 27:
                  _iRow2++;
                  _context3.next = 11;
                  break;
                case 30:
                  return _context3.abrupt("return", Promise.all(arrPro));
                case 31:
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
        return Hjc_symbol;
      }(Component), _class3.rewardCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
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

System.register("chunks:///_virtual/Hjc_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8f5dbyzJV5IcIfsJ5fSBbEo", "Hjc_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_symbolEffectRoot = exports('default', (_dec = ccclass("HjcSymbolEffectRoot"), _dec2 = menu("game/HjcGame/Hjc_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_symbolEffectRoot, _Component);
        function Hjc_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Hjc_symbolEffectRoot.prototype;
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
        return Hjc_symbolEffectRoot;
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

System.register("chunks:///_virtual/Hjc_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcDef.ts', './Hjc_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UIOpacity, UITransform, instantiate, Sprite, Layout, Component, eSymbol, Hjc_symbolItem;
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
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      Layout = module.Layout;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Hjc_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "61fa3B4E4FByr/rsleGOBrO", "Hjc_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
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
      var Hjc_symbolInfo = exports('default', (_dec = ccclass("HjcSymbolInfo"), _dec2 = menu("game/HjcGame/Hjc_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_symbolInfo, _Component);
        function Hjc_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Hjc_symbolInfo.prototype;
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
            tween(_this2.Node_info.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
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
          this.Node_info.active = true;
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
          this.Node_item.getComponent(Hjc_symbolItem).initItem(symbol);
          this.Node_icon.active = true;

          // this.Node_info.getComponent(cc.UITransform).width = 303;
          // this.Node_info.getComponent(cc.UITransform).height = 142;

          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.getComponent(Hjc_symbolItem).Node_symbol.destroyFromParent();

                //                // this.Node_item.active = false;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                break;
              }
            case eSymbol.WILD:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.CUSTOM;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                this.Node_info.getComponent(UITransform).width = 375;
                this.Node_info.getComponent(UITransform).height = 210;
                this.Node_item.getComponent(UITransform).priority = 1;
                this.Node_icon.getComponent(UITransform).priority = 0;
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.Sym);
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[symbol.Length - 1];
                var arrRate = eRate[symbol.Sym - eSymbol.CAT];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
                break;
              }
          }
          this.Node_info.getComponent(Layout).updateLayout();
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        return Hjc_symbolInfo;
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

System.register("chunks:///_virtual/Hjc_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcModel.ts', './HjcDef.ts', './EventManager.ts', './HjcUtils.ts', './AutoChangeParent.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, UITransform, v3, Sprite, isValid, tween, UIOpacity, Tween, Component, HjcModel, eSymbol, eRunStatus, eZindex, eEvent, eSound, eConstDef, EventManager, HjcUtils, AutoChangeParent;
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
      v3 = module.v3;
      Sprite = module.Sprite;
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      HjcModel = module.HjcModel;
    }, function (module) {
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      AutoChangeParent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "19e99CqCANKaJsba4SZocOD", "Hjc_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_symbolItem = exports('default', (_dec = ccclass("HjcSymbolItem"), _dec2 = menu("game/HjcGame/Hjc_symbolItem"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_symbolItem, _Component);
        function Hjc_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this.tag = 0;
          _this.Node_symbolAniRoot = null;
          //    // onLoad () {}
          _this.Node_symbol = null;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          _this.isBreak = false;
          _this.isChange = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = Hjc_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
          if (this.itemInfo.Sym == eSymbol.SCATTER) {
            this.Node_symbol.destroyFromParent();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this.itemInfo.Sym == eSymbol.SCATTER) {
            this.Node_symbol.destroyFromParent();
          }
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
          var Node_center = this.node.parent.parent.parent; //Node_center
          this.Node_symbolAniRoot = Node_center.getChildByName("Node_effectRoot");
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          //        //test
          //        // this.node.opacity = this._isHorizontal ? 100 : 255;

          this.itemInfo = info;

          //        // if (!this._isHorizontal && this.itemInfo.Length > 1 && this.itemInfo.Rim != 0) {
          //        //     this.itemInfo.Rim = 2;
          //        // }
          this.updateSymbol(this.itemInfo.IsReward);
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.useTint = true;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = HjcUtils.instance.getSkeletonData("kuang_effect");
            itemSpine.setAnimation(0, "intro" + _this2.itemInfo.Length, false);
            itemSpine.addAnimation(0, "idle" + _this2.itemInfo.Length, true);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);

              //                // itemSpine.addAnimation(0, `end${this.itemInfo.Length}`, true);
              resolve();
            });
            var wPos = _this2.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var nPos = _this2.Node_symbolAniRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            newNode.position = nPos;
            _this2.Node_symbolAniRoot.addChild(newNode);
            if (_this2.itemInfo.Sym < eSymbol.CAT) {
              newNode.getComponent(UITransform).priority = 10;
              _this2.Node_symbol.getComponent(UITransform).priority = 5;
            } else {
              newNode.getComponent(UITransform).priority = 5;
              _this2.Node_symbol.getComponent(UITransform).priority = 10;
            }
            _this2._spineEffect_kuang = itemSpine;
          });
        };
        _proto.addEffectKuangLight = function addEffectKuangLight() {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = false;
            itemSpine.useTint = true;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = HjcUtils.instance.getSkeletonData("kuang_light");
            itemSpine.setAnimation(0, "changelight_lv" + _this3.itemInfo.Length, true);
            //            // //图标变化完成后
            //            // itemSpine.addAnimation(0, `lv${this.itemInfo.Length}`, true);
            resolve();
            newNode.getComponent(UITransform).priority = 0;

            //            // let wPos = this.node.convertToWorldSpaceAR(cc.v3(0));
            //            // let nPos = this.Node_symbolAniRoot.convertToNodeSpaceAR(wPos);
            //            // newNode.position = nPos;
            //            // this.Node_symbolAniRoot.addChild(newNode);
            _this3.node.addChild(newNode);
            _this3.Node_symbol.getComponent(UITransform).priority = 10;
            _this3._spineEffect_kuangLight = itemSpine;
          });
        };
        _proto.addCloundEffect = function addCloundEffect() {
          if (this._isHorizontal) {
            return;
          }
          var newNode = new Node();
          newNode.setPosition(newNode.position.x, -this.node.getComponent(UITransform).height / 2.0);
          var itemSpine = newNode.addComponent(sp.Skeleton);
          itemSpine.premultipliedAlpha = false;
          itemSpine.useTint = true;
          itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
          itemSpine.skeletonData = HjcUtils.instance.getSkeletonData("cloud");
          itemSpine.setAnimation(0, "animation", false);
          itemSpine.setCompleteListener(function () {
            itemSpine.setCompleteListener(null);
            newNode.destroyFromParent();
          });
          this.node.addChild(newNode);
        };
        _proto.updateIcon = function updateIcon(Sym, length, isSpine, isIdle) {
          var _this4 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          //        // if (isSpine) {
          //        //     let aa = 0;
          //        // }
          //        //test
          //        // isSpine = false;
          //        // isSpine = Sym < HjcDef.eSymbol.CAT ? true : isSpine;
          isSpine = Sym == eSymbol.WILD ? true : isSpine;
          //        //icon
          //        // this.Node_symbol.x = 0;
          //        // this.Node_symbol.y = 0;

          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = HjcUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this4.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this4.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;

              //                // if (itemSymbol == null) {
              //                //     gts.Debug.Log(`=updateIcon=Sym=${Sym}=length=${length}=`);
              //                // }

              //                // gts.Debug.Log(`=updateIcon=Sym=${Sym}=length=${length}=spriteFrame=${itemSymbol.name}`);
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = HjcUtils.instance.getSkeletonData(Sym, _this4._isHorizontal);
              var itemSpine = _this4.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this4.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, HjcUtils.instance.getSymbolAniName(Sym, length, isIdle, _this4._isHorizontal), true);
            });
          }

          //        //tag update
          this.Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.SCATTER:
              {
                //                // this.node.zIndex = this.node.zIndex > HjcDef.eZindex.icon_scatter ? this.node.zIndex : HjcDef.eZindex.icon_scatter;

                var addScatterlight = function addScatterlight(isUp) {
                  var newNode = new Node("Scatterlight");
                  newNode.active = true;
                  var itemSpine = newNode.addComponent(sp.Skeleton);
                  itemSpine.useTint = true;
                  itemSpine.premultipliedAlpha = false;
                  itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  itemSpine.skeletonData = HjcUtils.instance.getSkeletonData("scatterlight");
                  var ani = isUp ? "up" : "down";
                  itemSpine.setAnimation(0, ani, true);
                  var pos = length * 0.5 * eConstDef.cSymbolH;
                  newNode.setPosition(newNode.position.x, isUp ? pos : -pos);
                  _this4.Node_symbol.addChild(newNode);
                };

                //                //
                if (this._isHorizontal) {
                  addScatterlight(true);
                  addScatterlight(false);
                } else {
                  addScatterlight(true);
                  addScatterlight(false);
                }
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length, rim) {
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = HjcUtils.instance.getItemSymbolIconBox(Sym, length, rim);
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
            _Sprite_frame.getComponent(Sprite).spriteFrame = HjcUtils.instance.getItemSymbolIconFrame(rim, length);

            //            // gts.Debug.Log(`=updateFrame=Sym=rim=${rim}=spriteFrame=${Sprite_frame.getComponent(cc.Sprite).spriteFrame.name}`);
          }
        };

        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateBox(this.itemInfo.Sym, this.itemInfo.Length, this.itemInfo.Rim);
          this.updateFrame(this.itemInfo.Rim, this.itemInfo.Length);
          this.updateIcon(this.itemInfo.Sym, this.itemInfo.Length, isSpine, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                _zIndex = HjcModel.instance.specialStartCol > 0 ? eZindex.icon_scatterSPECIAL : eZindex.icon_scatter;
                this.Node_symbol.getComponent(UITransform).priority = eZindex.icon_scatter;
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
                _zIndex = HjcModel.instance.specialStartCol > 0 && this._iCol > HjcModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                this.doBindToUp();
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
          if (HjcModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
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
                switch (_this6.itemInfo.Sym) {
                  case eSymbol.WILD:
                  case eSymbol.SCATTER:
                    {
                      _this6.updateIcon(_this6.itemInfo.Sym, _this6.itemInfo.Length, true);
                      break;
                    }
                }
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
                switch (_this6.itemInfo.Sym) {
                  case eSymbol.WILD:
                  case eSymbol.SCATTER:
                    {
                      _this6.updateIcon(_this6.itemInfo.Sym, _this6.itemInfo.Length, true);
                      break;
                    }
                }
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
                _this7.scheduleOnce(resolve, 0.5);
                //                    // this.addEffectKuang().then(resolve);
              }, 0.0 + delay);
              //                // }
            } else {
              resolve();
            }
          });
        };
        _proto.doStartChange = function doStartChange(isWild) {
          var _this8 = this;
          if (isWild === void 0) {
            isWild = false;
          }
          if (!isWild) {
            this.isChange = true;
            HjcUtils.instance.playOneShot(eSound.symSprChange);
            tween(this.Node_symbol).repeatForever(tween(this.Node_symbol).delay(0.05).call(function () {
              var sym = Math.floor(Math.random() * eSymbol.Q) + 3;
              _this8.updateBox(sym, _this8.itemInfo.Length, _this8.itemInfo.Rim);
              _this8.updateIcon(sym, _this8.itemInfo.Length);
            })).start();
            return;
          }
          this.scheduleOnce(function () {
            _this8.updateIcon(eSymbol.WILD, _this8.itemInfo.Length);
          }, 0.15);
          if (this._spineEffect_kuangLight) {
            this._spineEffect_kuangLight.node.getComponent(UITransform).priority = 5;
            this._spineEffect_kuangLight.setAnimation(0, "lv" + this.itemInfo.Length, false);
            this._spineEffect_kuangLight.setCompleteListener(function () {
              _this8._spineEffect_kuangLight.setCompleteListener(null);
              _this8._spineEffect_kuangLight.node.destroyFromParent();
              _this8._spineEffect_kuangLight = null;
            });
          }
        };
        _proto.doEndChange = function doEndChange(newItemInfo) {
          var _this9 = this;
          if (this.isChange) {
            this.scheduleOnce(function () {
              Tween.stopAllByTarget(_this9.Node_symbol);
              _this9.scheduleOnce(function () {
                _this9.updateBox(newItemInfo.Sym, _this9.itemInfo.Length, _this9.itemInfo.Rim);
                _this9.updateIcon(newItemInfo.Sym, newItemInfo.Length);
              });
              _this9.node.getComponent(UITransform).priority = eZindex.icon;
              _this9.isChange = false;
              if (_this9._spineEffect_kuangLight) {
                _this9._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
                _this9._spineEffect_kuangLight.setAnimation(0, "lv" + _this9.itemInfo.Length, false);
                _this9._spineEffect_kuangLight.setCompleteListener(function () {
                  _this9._spineEffect_kuangLight.setCompleteListener(null);
                  _this9._spineEffect_kuangLight.node.destroyFromParent();
                  _this9._spineEffect_kuangLight = null;
                });
              }
            }, 0.25);
          }
        };
        _proto.doClear = function doClear() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            if (_this10.itemInfo.IsReward) {
              if (_this10.itemInfo.Rim != 0 && _this10.itemInfo.Sym != eSymbol.WILD) {
                //                    //变换
                if (_this10._spineEffect_kuang) {
                  //                        // this._spineEffect_kuang.setAnimation(0, `change${this.itemInfo.Length}`, false);
                  //                        // this._spineEffect_kuang.setCompleteListener(() => {
                  //                        //     this._spineEffect_kuang.setCompleteListener(null);
                  //                        //     this._spineEffect_kuang.node.removeFromParent();
                  //                        //     this._spineEffect_kuang = null;
                  //                        // });
                  _this10._spineEffect_kuang.node.destroyFromParent();
                  _this10._spineEffect_kuang = null;
                  _this10.scheduleOnce(function () {
                    //                            //开始转动
                    _this10.addEffectKuangLight();

                    //                            //替换图标
                    _this10.doStartChange(_this10.itemInfo.Rim == 2);

                    //                            //替换框
                    _this10.itemInfo.Rim = _this10.itemInfo.Rim == 2 ? 0 : 2;
                    _this10.updateFrame(_this10.itemInfo.Rim, _this10.itemInfo.Length);
                  }, 0.15);
                }
                resolve();
              } else {
                if (_this10._spineEffect_kuang) {
                  _this10._spineEffect_kuang.setAnimation(0, "end" + _this10.itemInfo.Length, false);
                  _this10._spineEffect_kuang.setCompleteListener(function () {
                    _this10._spineEffect_kuang.setCompleteListener(null);
                    _this10._spineEffect_kuang.node.destroyFromParent();
                    _this10._spineEffect_kuang = null;
                    _this10.node.getComponent(UIOpacity).opacity = 0;
                    resolve();
                  });
                }
                tween(_this10.node)
                //                        // .blink(3, 3)
                .to(0.05, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                })
                // .to(0.1, { opacity: 0 })
                .call(function () {
                  _this10.isClear = true;
                }).start();
                tween(_this10.node.getComponent(UIOpacity))

                //                        // .blink(3, 3)
                .delay(0.1).to(0.1, {
                  opacity: 0
                }).start();
              }
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp() {
          var _this11 = this;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                if (!this.Node_symbol.getComponent(AutoChangeParent)) {
                  HjcUtils.instance.playOneShot(eSound.scatter_show);
                  AutoChangeParent.Bind(this.Node_symbol, this.Node_symbolAniRoot, true).OnUpdateNotify(function (dt) {
                    if (_this11.node.parent) {
                      _this11.Node_symbol.getComponent(UIOpacity).opacity = _this11.node.getComponent(UIOpacity).opacity;
                      _this11.Node_symbol.active = _this11.node.active;
                      _this11.Node_symbol.scale = _this11.node.scale;
                    } else {
                      _this11.Node_symbol.destroy();
                      _this11.node.destroy();
                    }
                  }, this);
                }
                break;
              }
            case eSymbol.WILD:
              {
                HjcUtils.instance.playOneShot(eSound.wild_show);
                break;
              }
          }
        };
        _proto._doShake = function _doShake() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            _this12.scheduleOnce(function () {
              if (!_this12.isClear) {
                // this.node.runAction(cc.sequence(Hjc_shake.create(0.5, 1.25, 1.25), cc.callFunc(resolve, this)));

                tween(_this12.node).shake(0.5, 1.25, 1.25).call(resolve).start();
              } else {
                resolve();
              }
            }, 0.25);
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength, isCloud, newIndex) {
            var _this13 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (isCloud === void 0) {
                    isCloud = false;
                  }
                  if (newIndex === void 0) {
                    newIndex = 0;
                  }
                  //        // await this._doShake();
                  isCloud = isCloud || newIndex > 0;
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this13._isHorizontal ? _this13.node.getPosition().x : _this13.node.getPosition().y;
                    var toPos = 0;
                    if (_this13._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + _this13.itemInfo.Length / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + _this13.itemInfo.Length / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset <= 50) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    //            // let offset = this._isHorizontal ? dropLength * HjcDef.eConstDef.cSymbolW : dropLength * HjcDef.eConstDef.cSymbolH;

                    var duration = offset / dropSpeed;
                    _this13.scheduleOnce(function () {
                      HjcUtils.instance.playOneShot(eSound.drop_1);
                    }, duration);
                    var delayTimes = newIndex == 0 ? 0 : 0.2 + 0.05 * newIndex;
                    _this13._isHorizontal ? function () {
                      var pos_1 = _this13.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this13.node).delay(delayTimes).to(duration, {
                        position: v3(pos_1, _this13.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this13.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this13.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        switch (_this13.itemInfo.Sym) {
                          case eSymbol.WILD:
                          case eSymbol.SCATTER:
                            {
                              _this13.updateIcon(_this13.itemInfo.Sym, _this13.itemInfo.Length, true);
                              break;
                            }
                        }
                        _this13.doBindToUp();
                        if (isCloud) {
                          _this13.addCloundEffect();
                        }
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this13.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this13.node).delay(delayTimes).to(duration, {
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
                        switch (_this13.itemInfo.Sym) {
                          case eSymbol.WILD:
                          case eSymbol.SCATTER:
                            {
                              _this13.updateIcon(_this13.itemInfo.Sym, _this13.itemInfo.Length, true);
                              break;
                            }
                        }
                        _this13.doBindToUp();
                        if (isCloud) {
                          _this13.addCloundEffect();
                        }
                        resolve();
                      }).start();
                    }();
                  }));
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function doDrop(_x, _x2, _x3) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return Hjc_symbolItem;
      }(Component), _class2.dropIndex = 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Hjc_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HjcUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, HjcUtils;
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
      HjcUtils = module.HjcUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7c51esy2IxJ2bm2V1ZCuRBQ", "Hjc_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_winTip = exports('default', (_dec = ccclass("HjcWinTip"), _dec2 = menu("game/HjcGame/Hjc_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_winTip, _Component);
        function Hjc_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Hjc_winTip.prototype;
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
            _this2.Label_win.string = HjcUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1, 1)
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
            HjcUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${HjcUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
            HjcUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Hjc_winTip;
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

System.register("chunks:///_virtual/HjcCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './HjcModel.ts', './I18n.ts', './ViewManager.ts', './HjcDef.ts', './HjcUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, HjcModel, i18n, ViewManager, eProto, eEvent, eRunStatus, eSymbol, HjcUtils, Common;
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
      HjcModel = module.HjcModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "a442ciQB+ZJ84p+oibloivK", "HjcCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var HjcCtrl = exports('HjcCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(HjcCtrl, _GameDef$BaseCtrl);
        function HjcCtrl() {
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
          _this._model = HjcModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = HjcCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete HjcCtrl._instance;
          HjcCtrl._instance = null;
          HjcModel.destroy();
          HjcUtils.destroy();
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
          if (!HjcModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            HjcModel.instance.curTotalBet = HjcModel.instance.curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: HjcModel.instance.curBet * 1000,
              buyFree: true
            });
          } else {
            HjcModel.instance.curTotalBet = HjcModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: HjcModel.instance.curBet * 1000
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
            gameType: "slotGoldenCity"
          });
        }

        // /**
        //  *搏一搏
        //  * @param type string "count" && "times"
        //  */
        // reqBoYiBo(type: string) {
        //     HjcModel.instance.boType = type;
        //     NetManager.instance.sendOnlineData(HjcDef.eProto.HD_BoYiBo, { betAmount: HjcModel.instance.curBet * 1000, boType: type });
        // }

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
            RecordType: "slotGoldenCity"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(HjcDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: HjcModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotGoldenCity"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotGoldenCity",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotGoldenCity"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotGoldenCity",
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
              Common.showTip(i18n.errTip(data.Code), !HjcUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == HjcDef.eProto.HD_Enter || (data.Code == 402 && HjcModel.instance.gameState.GameNo != HjcModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(HjcDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (HjcModel.instance.isAuto) {
                HjcModel.instance.isAuto = false;
                EventManager.instance.emit(eEvent.onAutoClose);
              }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();

                // if (HjcModel.instance.gameStatus != HjcDef.eRunStatus.NONE) {
                //     return;
                // }
                HjcModel.instance.clearGameData();
                HjcModel.instance.gameInfo = data.Data;

                // for (const InitPosMsg of HjcModel.instance.gameInfo.InitPosMsg) {
                //     for (const info of InitPosMsg) {
                //         info.IsReward = false;
                //     }
                // }

                HjcModel.instance.curBet = Math.floor(HjcModel.instance.gameInfo.BetAmount / 1000);
                HjcModel.instance.totalFreeWin = HjcModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
                HjcModel.instance.totalFreeTimesBack = HjcModel.instance.gameInfo.FreeInfo.TotalCount;
                HjcModel.instance.totalFreeTimes = HjcModel.instance.gameInfo.FreeInfo.Count;
                HjcModel.instance.totalRate = HjcModel.instance.gameInfo.FreeInfo.Multiple;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                HjcModel.instance.betResult = data.Data;

                //test
                // HjcModel.instance.betResult = this.getResult().Data;

                this.isReqBet = false;

                //判断是否有2个胡
                HjcModel.instance.specialStartCol = 0;
                if (!HjcModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = HjcModel.instance.betResult.Res[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
                      var AllPosMsg = openResult.AllPosMsg[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            HjcModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==HjcModel.instance.specialStartCol==" + HjcModel.instance.specialStartCol);
                  // //specialStartCol test
                  // HjcModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);
                }

                HjcModel.instance.totalFreeTimes = HjcModel.instance.betResult.FreeInfo.Count;

                // //freeTest;
                // if (HjcModel.instance.totalFreeTimes > 0) {
                //     HjcModel.instance.totalFreeTimes--;
                // } else {
                //     HjcModel.instance.totalFreeTimes = 4; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==HjcModel.instance.totalFreeTimes==" + HjcModel.instance.totalFreeTimes);
                if (HjcModel.instance.freeStatus == eRunStatus.NONE) {
                  HjcModel.instance.curBalance -= HjcModel.instance.curTotalBet;
                }
                break;
              }
            // case HjcDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==Hjc=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (HjcModel.instance.curBalance > 0) {
                  HjcModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                HjcModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Hjc=pushWallet==" + _HD_Wallet.VndBalance);
                if (HjcModel.instance.curBalance > 0) {
                  HjcModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                HjcModel.instance.curBalance = _HD_Wallet.VndBalance;
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
            GameType: "slotGoldenCity",
            cmd: "slotGoldenCity/HD_Bet"
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
            // RewardPos: null,
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
        return HjcCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HjcDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e7601kAoDxBRJ7+7QgQ6s8b", "HjcDef", undefined);
      var cBundle = exports('cBundle', "HjcGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotGoldenCity/HD_info";
        eProto["HD_Bet"] = "slotGoldenCity/HD_Bet";
        eProto["HD_Leave"] = "slotGoldenCity/HD_Leave";
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
      var eZindex = exports('eZindex', {
        NONE: 0,
        icon: 1,
        icon_cat: 250,
        icon_scatter: 500,
        MASK: 1000,
        icon_scatterSPECIAL: 1001,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 4,
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 1.25,
        cSymbolW: 125,
        cSymbolH: 105,
        cSymbolStartX: -250,
        cSymbolStartY: -262.5,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200
      }); // cSpeedMax = 1000,
      // cSpeedMin = 800,
      // CSpeedStart = 500,
      // CSpeedAdd = 50,
      // CSpeedReduse = 50,
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
        MASK: 3,
        FISH: 4,
        BIRD: 5,
        FLOWER: 6,
        GREEN: 7,
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
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        numAdd: "sound/numAdd",
        free_winEffect: "sound/free_winEffect",
        drop_1: "sound/drop_1",
        nice_0: "sound/nice_0",
        nice_1: "sound/nice_1",
        startRun: "sound/startRun",
        running: "sound/running",
        freeEnd_0: "sound/freeEnd_0",
        freeEnd_1: "sound/freeEnd_1",
        bgNomal: "sound/new/bgm_nomal",
        bgFree: "sound/new/bgm_free",
        bigWin: "sound/new/bgm_bigwin_main",
        bigWinEnd: "sound/new/bgm_bigwin_end",
        clear_0: "sound/new/clear_0",
        clear_1: "sound/new/clear_1",
        scarret: "sound/new/scatter_running",
        scatter_show: "sound/new/scatter_show",
        wild_show: "sound/new/wild_show",
        symSprChange: "sound/new/symSprChange",
        quickStop: "sound/new/quick",
        rateChange: "sound/new/rateChange"
      }); //////////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HjcGame", ['./HjcCtrl.ts', './HjcDef.ts', './HjcModel.ts', './HjcScene.ts', './HjcUtils.ts', './HjcGameView.ts', './Hjc_ScrollView.ts', './Hjc_btnEffect.ts', './Hjc_buyReward.ts', './Hjc_helpTip.ts', './Hjc_history.ts', './Hjc_historyItem.ts', './Hjc_rank.ts', './Hjc_rankItem.ts', './Hjc_setAuto.ts', './Hjc_setBase.ts', './Hjc_shake.ts', './Hjc_symbol.ts', './Hjc_symbolEffectRoot.ts', './Hjc_symbolInfo.ts', './Hjc_symbolItem.ts', './Hjc_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/HjcGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './HjcDef.ts', './HjcModel.ts', './HjcCtrl.ts', './ViewManager.ts', './HjcUtils.ts', './Hjc_winTip.ts', './Hjc_symbol.ts', './I18n.ts', './Hjc_symbolInfo.ts', './Hjc_btnEffect.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Sprite, ParticleSystem2D, view, tween, v3, UITransform, instantiate, Tween, UIOpacity, Mask, Widget, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eZindex, eSound, eConstDef, eProto, HjcModel, HjcCtrl, ViewManager, HjcUtils, Hjc_winTip, Hjc_symbol, i18n, Hjc_symbolInfo, Hjc_btnEffect, Common, AudioManager;
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
      sp = module.sp;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      ParticleSystem2D = module.ParticleSystem2D;
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Mask = module.Mask;
      Widget = module.Widget;
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
      eProto = module.eProto;
    }, function (module) {
      HjcModel = module.HjcModel;
    }, function (module) {
      HjcCtrl = module.HjcCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Hjc_winTip = module.default;
    }, function (module) {
      Hjc_symbol = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Hjc_symbolInfo = module.default;
    }, function (module) {
      Hjc_btnEffect = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;
      cclegacy._RF.push({}, "d65ebZS+19JoquZKAvmeWqC", "HjcGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var HjcGameView = exports('default', (_dec = ccclass("HjcGameView"), _dec2 = menu("game/HjcGame/HjcGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Hjc_symbol), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(Sprite), _dec29 = property(Sprite), _dec30 = property(Sprite), _dec31 = property(Label), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Hjc_symbolInfo), _dec35 = property(Button), _dec36 = property(Label), _dec37 = property(ParticleSystem2D), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(HjcGameView, _GameDef$BaseView);
        function HjcGameView() {
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
          _initializerDefineProperty(_this, "Hjc_symbolList", _descriptor7, _assertThisInitialized(_this));
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
          //    // @property(cc.Node)
          //    // Label_catNum: cc.Node = null;
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrRoomSpFrame", _descriptor22, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // arrCenterSpFrame: cc.SpriteFrame[] = [];
          _initializerDefineProperty(_this, "arrTitle", _descriptor23, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // arrFishSpFrame: cc.SpriteFrame[] = [];
          _initializerDefineProperty(_this, "arrTipBgSpFrame", _descriptor24, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // arrDownSpFrame: cc.SpriteFrame[] = [];
          _initializerDefineProperty(_this, "arrRateSpFrame", _descriptor25, _assertThisInitialized(_this));
          //    // @property(cc.Sprite)
          //    // Node_down: cc.Sprite = null;
          _initializerDefineProperty(_this, "Node_roomBg", _descriptor26, _assertThisInitialized(_this));
          //    // @property(cc.Sprite)
          //    // Node_centerBg: cc.Sprite = null;
          //    // @property(cc.Sprite)
          //    // Node_fish: cc.Sprite = null;
          _initializerDefineProperty(_this, "Sprite_tipBg", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rateBg", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curRate", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor30, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Node_effect_freeLight: cc.Node = null;
          _initializerDefineProperty(_this, "Node_public", _descriptor31, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_shengzi: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Node_info", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "particle", _descriptor35, _assertThisInitialized(_this));
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          return _this;
        }
        var _proto = HjcGameView.prototype;
        //    // @property(cc.Button)
        //    // Button_times: cc.Button = null;
        //    // @property(cc.Button)
        //    // Button_rate: cc.Button = null;
        //    // @property(cc.Button)
        //    // Button_enterFree: cc.Button = null;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, HjcCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!HjcUtils.instance.isChangeOrientation()) {
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

          //        // EventManager.instance.on(HjcDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              HjcModel.instance.autoTimes = times;
              HjcModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(Hjc_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (HjcModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  HjcCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !HjcModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = HjcModel.instance.isAuto;
            HjcUtils.instance.updateLabel(_this2.Label_autoTimes, HjcModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            HjcModel.instance.autoTimes = 0;
            HjcModel.instance.isAuto = false;
            Common.setButtonEnableWithGray(_this2.Button_buy, true);
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(Hjc_btnEffect);
            btnRunEffect.switchAni();

            //                // HjcUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            HjcUtils.instance.updateLabel(_this2.Label_autoTimes, HjcModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          //        // EventManager.instance.off(HjcDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          HjcModel.instance.clearGameData();
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
              //                // HjcCtrl.instance.reEnterRoom();

              if (HjcModel.instance.isAuto && HjcCtrl.instance.isReqBet) {
                HjcCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseScore}_curIndex`, HjcModel.instance._curIndex_baseScore + 1);
          // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseRate}_curIndex`, HjcModel.instance._curIndex_baseRate + 1);
          // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseBet}_curIndex`, HjcModel.instance._curIndex_baseBet + 1);

          HjcModel.instance.curBet = (HjcModel.instance._curIndex_baseScore == 0 ? 0.1 : HjcModel.instance._curIndex_baseScore * 0.5) * (HjcModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          //        // let _curIndex_baseScore = cc.sys.localStorage.getItem(`${HjcDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = cc.sys.localStorage.getItem(`${HjcDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = cc.sys.localStorage.getItem(`${HjcDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          //        // HjcModel.instance.curBet = (_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // HjcModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // HjcModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // HjcModel.instance._curIndex_baseBet = _curIndex_baseBet;

          HjcUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.Hjc_symbolList.length; i++) {
            //            //     this.Hjc_symbolList[i].init();
            //            // }

            HjcCtrl.instance.reqEnterRoom();
            _this4.Node_mask_0.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          this.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Button_fast":
              {
                //                //快速停止
                HjcModel.instance.isQuickStop = !HjcModel.instance.isQuickStop;
                //                // HjcUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !HjcModel.instance.isQuickStop);

                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_auto":
              {
                if (!HjcModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", HjcUtils.instance.bundle, function () {}, function (prefab) {
                    var newNode = instantiate(prefab);
                    Common.transformSize(newNode);
                    ViewManager.instance.popNodeView(newNode, true);
                  }, true);
                } else {
                  this.Button_auto.interactable = true;
                }

                //                // HjcModel.instance.isAuto = !HjcModel.instance.isAuto;

                //                // if (HjcModel.instance.gameStatus == HjcDef.eRunStatus.NONE && HjcModel.instance.isAuto) {
                //                //     HjcCtrl.instance.reqBet();
                //                // }
                break;
              }
            case "Node_bigWinEffect":
              {
                var Label_totalWin = this.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                var Node_bigWinEffect = this.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                if (Node_bigWinEffect.animation != "lv" + this.curBigWinLevel + "_idle") {
                  Tween.stopAllByTarget(this.Node_bigWin);
                  Tween.stopAllByTarget(Label_totalWin.node);
                  Node_bigWinEffect.setAnimation(0, "lv" + this.curBigWinLevel + "_idle", true);
                  Label_totalWin.string = HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2) + "K";
                  this.scheduleOnce(function () {
                    _this5.Node_bigWin.active = false;
                    if (HjcModel.instance.totalFreeTimes > 0) {
                      HjcCtrl.instance.reqBet();
                    } else {
                      HjcModel.instance.freeStatus = eRunStatus.END;
                      _this5.doEndFree();
                    }
                  }, 2.0);
                }
                break;
              }
            case "Button_buy":
              {
                if (HjcModel.instance.gameStatus != eRunStatus.NONE || HjcModel.instance.isAuto) {
                  return;
                }
                var buyGold = HjcModel.instance.curBet * 50 * 1000;
                if (HjcModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !HjcUtils.instance.isChangeOrientation());
                  return;
                }
                Common.loadPopBuddle("prefab/Node_buyReward", HjcUtils.instance.bundle, function () {}, function (prefab) {
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
                HjcCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", HjcUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", HjcUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", HjcUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (HjcModel.instance.gameStatus != eRunStatus.NONE || HjcModel.instance.isAuto) {
                  return;
                }
                HjcModel.instance._curIndex_baseBet--;
                if (HjcModel.instance._curIndex_baseBet < 0) {
                  HjcModel.instance._curIndex_baseBet = 0;
                }
                HjcModel.instance._curIndex_baseScore = Math.floor(HjcModel.instance._curIndex_baseBet / 10);
                HjcModel.instance._curIndex_baseRate = HjcModel.instance._curIndex_baseBet % 10;
                HjcModel.instance.curBet = (HjcModel.instance._curIndex_baseScore == 0 ? 0.1 : HjcModel.instance._curIndex_baseScore * 0.5) * (HjcModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseScore}_curIndex`, HjcModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseRate}_curIndex`, HjcModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseBet}_curIndex`, HjcModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (HjcModel.instance.gameStatus != eRunStatus.NONE || HjcModel.instance.isAuto) {
                  return;
                }
                HjcModel.instance._curIndex_baseBet++;
                if (HjcModel.instance._curIndex_baseBet > 29) {
                  HjcModel.instance._curIndex_baseBet = 29;
                }
                HjcModel.instance._curIndex_baseScore = Math.floor(HjcModel.instance._curIndex_baseBet / 10);
                HjcModel.instance._curIndex_baseRate = HjcModel.instance._curIndex_baseBet % 10;
                HjcModel.instance.curBet = (HjcModel.instance._curIndex_baseScore == 0 ? 0.1 : HjcModel.instance._curIndex_baseScore * 0.5) * (HjcModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseScore}_curIndex`, HjcModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseRate}_curIndex`, HjcModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${HjcDef.cBundle}_${HjcDef.eAutoRateType.baseBet}_curIndex`, HjcModel.instance._curIndex_baseBet + 1);

                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (HjcModel.instance.isAuto) {
                  HjcModel.instance.isAuto = false;
                  HjcModel.instance.autoTimes = 0;
                  this.Button_auto.interactable = true;
                  this.Label_autoTimes.node.active = HjcModel.instance.isAuto;
                  HjcUtils.instance.updateLabel(this.Label_autoTimes, HjcModel.instance.autoTimes);
                  if (HjcModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(Hjc_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (HjcCtrl.instance.isReqBet) {
                  break;
                }
                if (HjcModel.instance.gameStatus == eRunStatus.NONE) {
                  //                    // event.target.getComponent(cc.Button).interactable = false;
                  //                    // HjcUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(5).call(function () {
                    if (!HjcModel.instance.isAuto) ;
                  }).start();
                  HjcCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (HjcModel.instance.gameStatus != eRunStatus.NONE || HjcModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", HjcUtils.instance.bundle, function () {}, function (help) {
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
            //            // case "Button_times": {
            //            //     this.Button_times.interactable = false;
            //            //     this.Button_rate.interactable = false;
            //            //     this.Button_enterFree.interactable = false;

            //            //     this.unschedule(this.doEnterFree);

            //            //     HjcCtrl.instance.reqBoYiBo("count");
            //            //     break;
            //            // }
            //            // case "Button_rate": {
            //            //     this.Button_times.interactable = false;
            //            //     this.Button_rate.interactable = false;
            //            //     this.Button_enterFree.interactable = false;

            //            //     this.unschedule(this.doEnterFree);

            //            //     event.target.getComponent(cc.Button).interactable = false;

            //            //     HjcCtrl.instance.reqBoYiBo("times");
            //            //     break;
            //            // }
            case "Button_exit":
              {
                this.hideFree();
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
            HjcUtils.instance.stopSound(eSound.scarret);
            var setCol = iCol + 1;
            if (setCol < this.Hjc_symbolList.length) {
              HjcUtils.instance.playOneShot(eSound.scarret);

              //                // this.Node_colEffect.zIndex = HjcDef.eZindex.SPECIAL - 2 * (iCol + 1) - 1;

              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 100;
              this.Node_colEffect.setPosition(this.Hjc_symbolList[iCol + 1].node.getPosition().x, this.Node_colEffect.position.y);
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
          if (HjcModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          if (HjcModel.instance.freeStatus == eRunStatus.NONE) {
            this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0]; //
            this.Node_helpTip.getComponent(UITransform).width = 674;
            this.Node_helpTip.getComponent(Mask).type = Mask.Type.SPRITE_STENCIL;
            if (HjcModel.instance.isAuto && HjcModel.instance.autoTimes > 0) {
              HjcModel.instance.autoTimes--;
              HjcUtils.instance.updateLabel(this.Label_autoTimes, HjcModel.instance.autoTimes);
            }
          }
          this.Node_info.node.active = false;
          this.Label_symRate.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          Common.setButtonEnableWithGray(this.Button_buy, false);
          this.Node_tipEffect.node.active = false;
          var Node_effect = this.Node_tipEffect.node.getChildByName("Node_effect");
          Node_effect.active = false;
          HjcModel.instance.curTotalWin = 0;
          if (HjcModel.instance.freeStatus == eRunStatus.NONE) {
            //            // this.clearCatNum();

            this.Label_win.string = "0.00";
            EventManager.instance.emit(eEvent.updateWin, 0);
          }
          if (HjcModel.instance.totalRate != 1 && HjcModel.instance.freeStatus == eRunStatus.NONE) {
            HjcModel.instance.totalRate = 1;
            tween(this.Label_curRate.node).to(0.25, {
              position: v3(this.Label_curRate.node.position.x, 120)
            }).call(function () {
              _this7.Label_curRate.node.setPosition(_this7.Label_curRate.node.position.x, -120);
              _this7.Label_curRate.string = "x" + HjcModel.instance.totalRate;
            }).to(0.25, {
              position: v3(this.Label_curRate.node.position.x, 20)
            }).call(function () {
              //                    // HjcUtils.instance.playSound(HjcDef.eSound.rateChange);
              //                    // let Node_boEffect = this.Sprite_rateBg.node.getChildByName("Node_boEffect").getComponent(sp.Skeleton);
              //                    // Node_boEffect.node.active = true;
              //                    // Node_boEffect.setAnimation(0, "small", false);
              //                    // Node_boEffect.setCompleteListener(() => {
              //                    //     Node_boEffect.setCompleteListener(null);
              //                    //     Node_boEffect.node.active = false;
              //                    // });
            }).to(0.05, {
              position: v3(this.Label_curRate.node.position.x, 5)
            }).start();
          }
          var children = this.Node_effectRoot.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var nodeChild = _step.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          //        // this.Node_effectRoot.removeAllChildren();

          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //            // HjcModel.instance.specialStartCol = 2;
                  arrPro = [];
                  for (i = 0; i < _this7.Hjc_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = HjcModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = HjcModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += HjcModel.instance.specialStartCol > 0 && i > HjcModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - HjcModel.instance.specialStartCol) : 0;
                    arrPro.push(_this7.Hjc_symbolList[i].doStart(startDelay, stopDelay));
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
          HjcModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "start" && !HjcModel.instance.isAuto && HjcModel.instance.freeStatus == eRunStatus.NONE) {
            this.Skeleton_run.setAnimation(0, "start", false);
            this.Skeleton_run.setCompleteListener(function () {
              _this7.Skeleton_run.setCompleteListener(null);
              if (!HjcModel.instance.isAuto) {
                _this7.Button_run.interactable = false;
                _this7.Button_run.node.emit("pauseEffect");
                _this7.Skeleton_run.setAnimation(0, "stop", true);
              }
            });
          }
          if (HjcModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (HjcModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + HjcModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            HjcUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this8 = this;
            var symRate, result, i, resultList, _loop, _i, delayStart, curTotalWin, com_Hjc_winTip, btnRunEffect, pos, doContinue, totalRate, Node_bigWinEffect;
            return _regeneratorRuntime().wrap(function _callee2$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  HjcModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_colEffect.active = false;
                    }).start();
                  }
                  symRate = 1;
                  result = HjcModel.instance.betResult.Res[0];
                  for (i = 0; i < result.AllPosMsg.length; i++) {
                    symRate *= result.AllPosMsg[i].length;
                  }
                  HjcUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                  HjcModel.instance.curTotalWin = 0;
                  resultList = HjcModel.instance.betResult.Res;
                  HjcModel.instance.specialStartCol = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, arrPro, _i2, _loop2, _curTotalWin, _i3, delay, Label_rate, Node_boEffect, _i4, _symRate, _i5;
                    return _regeneratorRuntime().wrap(function _loop$(_context3) {
                      while (1) switch (_context3.prev = _context3.next) {
                        case 0:
                          result = resultList[_i];
                          if (!(result.RewardMoney > 0)) {
                            _context3.next = 31;
                            break;
                          }
                          resultNext = resultList[_i + 1]; //                //
                          //                // for (let i = 0; i < this.Hjc_symbolList.length; i++) {
                          //                //     let Hjc_symbolList = this.Hjc_symbolList[i];
                          //                //     if (Hjc_symbolList.isHorizontal) {
                          //                //         await Hjc_symbolList.doCaiShenEffect();
                          //                //         break;
                          //                //     }
                          //                // }
                          _this8.scheduleOnce(function () {
                            _this8.showMask();
                            HjcUtils.instance.playOneShot(eSound.clear_0);
                          }, 0.5);

                          //                //doEffect
                          arrPro = [];
                          for (_i2 = 0; _i2 < _this8.Hjc_symbolList.length; _i2++) {
                            arrPro.push(_this8.Hjc_symbolList[_i2].doEffect());
                          }
                          _context3.next = 8;
                          return Promise.all(arrPro);
                        case 8:
                          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                            var winRate, isBigWin, Node_effect, _Node_effect, com_Hjc_winTip;
                            return _regeneratorRuntime().wrap(function _loop2$(_context2) {
                              while (1) switch (_context2.prev = _context2.next) {
                                case 0:
                                  HjcModel.instance.totalRate += HjcModel.instance.freeStatus == eRunStatus.NONE ? 1 : 2;
                                  _this8.Node_tipEffect.node.active = true;
                                  winRate = result.RewardMoney / (HjcModel.instance.curBet * 1000);
                                  isBigWin = false;
                                  if (HjcModel.instance.freeStatus == eRunStatus.NONE) {
                                    isBigWin = winRate > 10;
                                    if (isBigWin) {
                                      _this8.Sprite_tipBg.spriteFrame = _this8.arrTipBgSpFrame[1]; //
                                      //                            // this.Node_helpTip.width = 560; //624
                                      //                            // this.Node_helpTip.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

                                      //                            //显示得分 tip
                                      _this8.Node_tipEffect.setAnimation(0, "big_win", false);
                                      _this8.Node_tipEffect.addAnimation(0, "big_idle", true);
                                      Node_effect = _this8.Node_tipEffect.node.getChildByName("Node_effect");
                                      Node_effect.active = true;
                                      Node_effect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                      Node_effect.getComponent(sp.Skeleton).setCompleteListener(function () {
                                        Node_effect.getComponent(sp.Skeleton).setCompleteListener(null);
                                        Node_effect.active = false;
                                      });
                                    } else {
                                      //                            //显示得分 tip
                                      _this8.Node_tipEffect.setAnimation(0, "normal_win", false);
                                      _this8.Node_tipEffect.addAnimation(0, "normal_idle", true);
                                    }
                                  } else {
                                    //                        //显示得分 tip
                                    _this8.Node_tipEffect.setAnimation(0, "result_win", false);
                                    _this8.Node_tipEffect.addAnimation(0, "result_p", true);
                                    _Node_effect = _this8.Node_tipEffect.node.getChildByName("Node_effect");
                                    _Node_effect.active = true;
                                    _Node_effect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                    _Node_effect.getComponent(sp.Skeleton).setCompleteListener(function () {
                                      _Node_effect.getComponent(sp.Skeleton).setCompleteListener(null);
                                      _Node_effect.active = false;
                                    });
                                  }
                                  _this8.Node_helpTip.active = false;
                                  _this8.Node_winTip.active = true;
                                  com_Hjc_winTip = _this8.Node_winTip.getComponent(Hjc_winTip);
                                  com_Hjc_winTip.doShow(result.RewardMoney);
                                //                    // if (!this.Label_catNum.active) {
                                //                    //     com_Hjc_winTip.doShow(result.RewardMoney);
                                //                    // } else {
                                //                    //     com_Hjc_winTip.doShowRate(result.RewardMoney / result.ExtraOdd);
                                //                    // }
                                case 9:
                                case "end":
                                  return _context2.stop();
                              }
                            }, _loop2);
                          });
                        case 9:
                          return _context3.delegateYield(_loop2(), "t0", 10);
                        case 10:
                        case 11:
                          //                // gts.Debug.LogWarr("==Hjc_symbol.catCount==" + Hjc_symbol.catCount);
                          //                // Hjc_symbol.catCount = 0;

                          if (HjcModel.instance.freeStatus != eRunStatus.NONE) {
                            HjcModel.instance.totalFreeWin += result.RewardMoney;
                          } else {
                            HjcModel.instance.curTotalWin += result.RewardMoney;
                          }
                          _curTotalWin = HjcModel.instance.freeStatus != eRunStatus.NONE ? HjcModel.instance.totalFreeWin : HjcModel.instance.curTotalWin;
                          HjcUtils.instance.updateLabelAdd(_this8.Label_win, _curTotalWin, false, _curTotalWin - result.RewardMoney);
                          EventManager.instance.emit(eEvent.updateWin, _curTotalWin);
                          HjcUtils.instance.playOneShot(eSound.clear_1);
                          _this8.showMask(false);
                          arrPro = [];
                          for (_i3 = 0; _i3 < _this8.Hjc_symbolList.length; _i3++) {
                            arrPro.push(_this8.Hjc_symbolList[_i3].doClear());
                          }
                          _context3.next = 21;
                          return Promise.all(arrPro);
                        case 21:
                          //                //play sound
                          if (_i == 2) {
                            HjcUtils.instance.playOneShot(eSound.nice_0);
                          } else if (_i > 2) {
                            HjcUtils.instance.playOneShot(eSound.nice_1);
                          }
                          if (HjcModel.instance.totalRate > 1) {
                            delay = 0.0;
                            if (HjcModel.instance.totalRate > 2) {
                              delay = 0.5;
                              _this8.Node_rateEffect.active = true;
                              Label_rate = _this8.Node_rateEffect.getChildByName("Label_rate");
                              Label_rate.scale = v3(1.0, 1.0, 1);
                              Label_rate.getComponent(UIOpacity).opacity = 0;
                              Label_rate.getComponent(Label).string = "x" + HjcModel.instance.totalRate;
                              tween(Label_rate).to(0.4, {
                                scale: v3(3.0, 3.0, 1)
                              }).start();
                              tween(Label_rate.getComponent(UIOpacity)).to(0.4, {
                                opacity: 150
                              }).to(0.1, {
                                opacity: 0
                              }).start();
                              Node_boEffect = _this8.Node_rateEffect.getChildByName("Node_boEffect").getComponent(sp.Skeleton);
                              Node_boEffect.node.active = true;
                              Node_boEffect.setAnimation(0, "big", false);
                              Node_boEffect.setCompleteListener(function () {
                                Node_boEffect.setCompleteListener(null);
                                _this8.Node_rateEffect.active = false;
                              });
                            }
                            tween(_this8.Label_curRate.node).delay(delay).to(0.25, {
                              position: v3(_this8.Label_curRate.node.position.x, -120)
                            }).call(function () {
                              _this8.Label_curRate.node.setPosition(_this8.Label_curRate.node.position.x, 120);
                              _this8.Label_curRate.string = "x" + HjcModel.instance.totalRate;
                            }).to(0.25, {
                              position: v3(_this8.Label_curRate.node.position.x, -10)
                            }).call(function () {
                              HjcUtils.instance.playSound(eSound.rateChange);
                              var Node_boEffect = _this8.Sprite_rateBg.node.getChildByName("Node_boEffect").getComponent(sp.Skeleton);
                              Node_boEffect.node.active = true;
                              Node_boEffect.setAnimation(0, "small", false);
                              Node_boEffect.setCompleteListener(function () {
                                Node_boEffect.setCompleteListener(null);
                                Node_boEffect.node.active = false;
                              });
                            }).to(0.05, {
                              position: v3(_this8.Label_curRate.node.position.x, 5)
                            }).start();
                          }

                          //                //drop
                          arrPro = [];
                          for (_i4 = 0; _i4 < _this8.Hjc_symbolList.length; _i4++) {
                            arrPro.push(_this8.Hjc_symbolList[_i4].doDrop(resultNext));
                          }
                          _context3.next = 27;
                          return Promise.all(arrPro);
                        case 27:
                          gts.Debug.Log("==========doDrop========");
                          _symRate = 1;
                          for (_i5 = 0; _i5 < resultNext.AllPosMsg.length; _i5++) {
                            _symRate *= resultNext.AllPosMsg[_i5].length;
                          }
                          if (parseInt(_this8.Label_symRate.string) != _symRate) {
                            HjcUtils.instance.updateLabelNomal(_this8.Label_symRate, _symRate);
                          }

                        //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                        case 31:
                        case "end":
                          return _context3.stop();
                      }
                    }, _loop);
                  });
                  _i = 0;
                case 12:
                  if (!(_i < resultList.length)) {
                    _context4.next = 17;
                    break;
                  }
                  return _context4.delegateYield(_loop(), "t0", 14);
                case 14:
                  _i++;
                  _context4.next = 12;
                  break;
                case 17:
                  this.showMask(false);
                  delayStart = 0.25;
                  curTotalWin = HjcModel.instance.freeStatus != eRunStatus.NONE ? HjcModel.instance.totalFreeWin : HjcModel.instance.curTotalWin;
                  if (curTotalWin > 0) {
                    com_Hjc_winTip = this.Node_winTip.getComponent(Hjc_winTip);
                    com_Hjc_winTip.doShow(curTotalWin, true);
                    delayStart = 1.5;
                    if (HjcModel.instance.endBalance > 0) {
                      HjcModel.instance.curBalance = HjcModel.instance.endBalance;
                      HjcModel.instance.endBalance = 0;
                      this.updateGold();
                    }
                  } else if (HjcModel.instance.isQuickStop) {
                    HjcUtils.instance.playOneShot(eSound.quickStop);
                  }
                  HjcModel.instance.isAuto = HjcModel.instance.autoTimes > 0;
                  if (!HjcModel.instance.isAuto) {
                    Common.setButtonEnableWithGray(this.Button_buy, true);
                    this.Skeleton_run.setCompleteListener(null);
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.interactable = true;
                    this.Button_run.node.emit("resumeEffect");
                    btnRunEffect = this.Button_run.node.getComponent(Hjc_btnEffect);
                    btnRunEffect.switchAni();

                    //            // HjcUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    HjcUtils.instance.updateLabel(this.Label_autoTimes, HjcModel.instance.autoTimes);
                  }
                  HjcModel.instance.gameStatus = eRunStatus.NONE;
                  if (!this.Button_buy.node.active && HjcModel.instance.freeStatus == eRunStatus.NONE) {
                    pos = this.Button_buy.node.getPosition().y;
                    this.Button_buy.node.setPosition(this.Button_buy.node.position.x, this.Button_buy.node.position.y - 30);
                    this.Button_buy.node.getComponent(UIOpacity).opacity = 0;
                    this.Button_buy.node.active = true;
                    tween(this.Button_buy.node.getComponent(UIOpacity)).to(0.2, {
                      opacity: 255
                    }).start();
                    tween(this.Button_buy.node).to(0.2, {
                      position: v3(this.Button_buy.node.position.x, pos)
                    }).start();

                    //            // this.scaleCatNum();
                  }

                  //        //free and auto
                  if (HjcModel.instance.freeStatus != eRunStatus.NONE) {
                    doContinue = function doContinue() {
                      _this8.scheduleOnce(function () {
                        _this8.Node_bigWin.active = false;
                        if (HjcModel.instance.totalFreeTimes > 0) {
                          HjcCtrl.instance.reqBet();
                        } else {
                          HjcModel.instance.freeStatus = eRunStatus.END;
                          _this8.doEndFree();
                        }
                      }, delayStart);
                    };
                    totalRate = HjcModel.instance.curTotalWin / (HjcModel.instance.curBet * 1000); //            // //TEST
                    //            // totalRate = HjcModel.instance.curTotalWin > 0 ? Math.floor(Math.random() * 50 + 10) : 0;
                    if (totalRate >= 20) {
                      //                //大奖显示
                      this.Node_bigWin.parent = this.node;
                      this.Node_bigWin.getComponent(UITransform).priority = 52;
                      this.Node_bigWin.active = true;
                      this.Node_bigWin.scale = v3(0.5, 0.5, 1);
                      Node_bigWinEffect = this.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                      this.curBigWinLevel = totalRate < 35 ? 1 : totalRate < 50 ? 2 : 3;
                      Node_bigWinEffect.setAnimation(0, "lv" + this.curBigWinLevel + "_win", false);
                      Node_bigWinEffect.addAnimation(0, "lv" + this.curBigWinLevel + "_idle", true);
                      tween(this.Node_bigWin).to(0.1, {
                        scale: v3(1.2, 1.2, 1)
                      }, {
                        easing: "quadOut"
                      }).to(0.05, {
                        scale: v3(1.0, 1.0, 1.0)
                      }, {
                        easing: "quadIn"
                      }).call(function () {
                        HjcUtils.instance.playSound(eSound.bigWin);
                        var totalTime = _this8.curBigWinLevel * 5;
                        var dt = 0.05;
                        var updateTimes = totalTime / dt;
                        var Label_totalWin = _this8.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                        var destWin = HjcModel.instance.curTotalWin;
                        var disWin = Math.floor(HjcModel.instance.curTotalWin / updateTimes);
                        var curTotalWin = 0;
                        tween(Label_totalWin.node).repeatForever(
                        //                                // updateTimes + 1,
                        tween(Label_totalWin.node).delay(dt).call(function () {
                          curTotalWin += disWin;
                          if (curTotalWin > destWin) {
                            HjcUtils.instance.stopSound(eSound.bigWin);
                            HjcUtils.instance.playSound(eSound.bigWinEnd);
                            Tween.stopAllByTarget(Label_totalWin.node);
                            curTotalWin = destWin;
                            delayStart = 1.0;
                            doContinue();
                          }
                          Label_totalWin.string = HjcUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                        })).start();
                      }).start();
                    } else {
                      doContinue();
                    }
                  } else if (HjcModel.instance.totalFreeTimes > 0) {
                    this.showFree();
                  } else if (HjcModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      HjcCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 26:
                case "end":
                  return _context4.stop();
              }
            }, _callee2, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.hideFree = function hideFree() {
          var _this9 = this;
          this.unschedule(this.hideFree);

          //        // if (HjcModel.instance.freeStatus != HjcDef.eRunStatus.NONE) {
          HjcModel.instance.freeStatus = eRunStatus.NONE;
          HjcModel.instance.totalFreeTimes = 0;
          HjcModel.instance.totalRate = 1;
          this.Label_curRate.string = "x" + HjcModel.instance.totalRate;
          AudioManager.instance.resumeMusic();
          HjcUtils.instance.stopSound(eSound.free_winEffect);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this9.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;

            //                // let Sprite_frame = cc.find("Node_main/Sprite_frame", Node_enter);
            //                // Sprite_frame.active = false;

            var Node_end = _this9.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            var Node_freeInfo = _this9.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = false;
            _this9.Node_bigWin.active = false;
            HjcUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this9.Node_free.active = false;
            if (HjcModel.instance.isAuto) {
              _this9.scheduleOnce(function () {
                HjcCtrl.instance.reqBet();
              }, 0.25);
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this10 = this;
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!this.Node_free.active) {
            this.Node_free.active = true;
            var delayTime = isEnter ? 0 : 1.0;

            //            // this.Button_times.interactable = false;
            //            // this.Button_rate.interactable = false;
            //            // this.Button_enterFree.interactable = false;

            this.scheduleOnce(function () {
              HjcUtils.instance.playBgMusic(eSound.bgFree);
              if (isEnter) {
                _this10.doEnterFree();
              } else {
                _this10.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];

          //        //房子背景
          this.Node_roomBg.spriteFrame = this.arrRoomSpFrame[0];
          this.Sprite_rateBg.spriteFrame = this.arrRateSpFrame[0];
          var Node_mask = this.Sprite_rateBg.node.getChildByName("Node_mask").getComponent(Widget);
          Node_mask.updateAlignment();
          this.Label_curRate.fontSize = 72;

          //        //鱼
          //        // this.Node_fish.spriteFrame = this.arrFishSpFrame[0];

          //        //滚动提示BG
          this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0];

          //        //
          //        // this.Node_down.spriteFrame = this.arrDownSpFrame[0];

          //        //格子背景
          //        // this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[0];

          //        // this.Node_effect_freeLight.active = false;

          //        // this.clearCatNum();

          this.Label_symRate.font = HjcUtils.instance.getFontData("number5");
          this.Node_public.setPosition(this.Node_public.position.x, 236);

          //        // this.Node_helpTip.width = 624;
          //        // this.Node_helpTip.getComponent(cc.Mask).type = cc.Mask.Type.ELLIPSE;

          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Button_buy.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this11 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 0;

          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          Node_enter.getComponent(UIOpacity).opacity = 255;
          Node_enter.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          Node_enter.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          this.Label_win.string = "0.00";
          EventManager.instance.emit(eEvent.updateWin, 0);

          //        //免费次数
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + HjcModel.instance.totalFreeTimes;
          HjcModel.instance.totalFreeWin = 0;
          HjcModel.instance.totalRate = HjcModel.instance.totalRate > 2 ? HjcModel.instance.totalRate : 2;
          tween(this.Node_free.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).call(function () {
            //                // let Node_countDown = Node_enter.getChildByName("Node_countDown");
            //                // Node_countDown.active = true;
            //                // Node_countDown.opacity = 255;
            //                // let Label_tims = Node_countDown.getChildByName("Label_tims");

            var Button_enter = Node_enter.getChildByName("Button_enter");
            Button_enter.active = false;

            //                // let countTimes = 0;
            //                // cc.tween(Label_tims)
            //                //     .repeat(
            //                //         100,
            //                //         cc
            //                //             .tween(Label_tims)
            //                //             .delay(0.01)
            //                //             .call(() => {
            //                //                 countTimes++;
            //                //                 Label_tims.getComponent(cc.Label).string = `${countTimes}`;
            //                //             })
            //                //     )
            //                //     .delay(0.25)
            //                //     .call(() => {
            //                //         cc.tween(Node_countDown)
            //                //             .to(0.25, { opacity: 0 })
            //                //             .call(() => {
            //                //                 Node_countDown.active = false;
            //                //             })
            //                //             .start();

            //                //         Button_enter.active = true;
            //                //         Button_enter.opacity = 0;
            //                //         cc.tween(Button_enter)
            //                //             .to(0.25, { opacity: 255 })
            //                //             .call(() => {
            //                //                 this.scheduleOnce(this.doEnterFree, 3.0);
            //                //             })
            //                //             .start();
            //                //     })
            //                //     .start();

            Button_enter.active = true;
            Button_enter.getComponent(UIOpacity).opacity = 0;
            tween(Button_enter.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).call(function () {
              _this11.scheduleOnce(_this11.doEnterFree, 3.0);
            }).start();
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          if (HjcModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          HjcModel.instance.freeStatus = eRunStatus.RUNNING;
          this.unschedule(this.doEnterFree);

          //        //enter close
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            Node_enter.active = false;
          }).start();
          do {
            this.Node_info.node.active = false;
            //            //背景
            this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[1];
            //            //房子背景
            this.Node_roomBg.spriteFrame = this.arrRoomSpFrame[1];
            this.Sprite_rateBg.spriteFrame = this.arrRateSpFrame[1];
            var Node_mask = this.Sprite_rateBg.node.getChildByName("Node_mask").getComponent(Widget);
            Node_mask.updateAlignment();
            this.Label_curRate.fontSize = 110;
            this.Label_curRate.string = "x" + HjcModel.instance.totalRate;
            //            //鱼
            //            // this.Node_fish.spriteFrame = this.arrFishSpFrame[1];
            //            //滚动提示BG
            this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[1]; //
            //            // this.Node_down.spriteFrame = this.arrDownSpFrame[1];
            //            //格子背景
            //            // this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[1];
            //            // this.Node_effect_freeLight.active = true;
            //            // if (this.Label_catNum) {
            //            //     this.Label_catNum.active = false;
            //            // }

            //            // this.Node_helpTip.width = 560; //624
            //            // this.Node_helpTip.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

            this.Node_public.setPosition(this.Node_public.position.x, -3);
            this.Node_action.active = false;
            this.Node_menu.active = false;
            this.Button_menu.node.active = false;
            this.Button_run.node.active = false;
            this.Button_buy.node.active = false;
            this.Label_symRate.font = HjcUtils.instance.getFontData("number4");
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + HjcModel.instance.totalFreeTimes;
            var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
          } while (false);

          //        // let Node_freePartical = this.Node_free.getChildByName("Node_freePartical");
          //        // Node_freePartical.active = true;

          //        // this.setFreeCatNum();

          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            HjcCtrl.instance.reqBet();
          }, 2.0);

          //        // let doEnter = () => {
          //        //     this.Node_info.node.active = false;

          //        //     //背景
          //        //     this.node.getComponent(cc.Sprite).spriteFrame = this.arrBgSpFrame[1];

          //        //     //房子背景
          //        //     // this.Node_roomBg.spriteFrame = this.arrRoomSpFrame[1];

          //        //     //鱼
          //        //     // this.Node_fish.spriteFrame = this.arrFishSpFrame[1];

          //        //     //滚动提示BG
          //        //     this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[1]; //

          //        //     this.Node_down.spriteFrame = this.arrDownSpFrame[1];

          //        //     //格子背景
          //        //     this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[1];

          //        //     this.Node_effect_freeLight.active = true;

          //        //     if (this.Label_catNum) {
          //        //         this.Label_catNum.active = false;
          //        //     }

          //        //     // this.Node_helpTip.width = 560; //624
          //        //     // this.Node_helpTip.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

          //        //     this.Node_public.y = -17;
          //        //     this.Node_action.active = false;
          //        //     this.Node_menu.active = false;
          //        //     this.Button_menu.node.active = false;
          //        //     this.Button_run.node.active = false;
          //        //     this.Button_buy.node.active = false;

          //        //     this.Label_symRate.font = HjcUtils.instance.getFontData("golden_03");

          //        //     let Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
          //        //     Node_freeInfo.active = true;

          //        //     //免费次数
          //        //     let Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
          //        //     Label_freeTimes.active = true;
          //        //     Label_freeTimes.getComponent(cc.Label).string = `${HjcModel.instance.totalFreeTimes}`;

          //        //     let Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
          //        //     Sprite_title.getComponent(cc.Sprite).spriteFrame = this.arrTitle[0];

          //        //     this.setFreeCatNum();

          //        //     cc.audioEngine.resumeMusic();

          //        //     this.scheduleOnce(() => {
          //        //         HjcCtrl.instance.reqBet();
          //        //     }, 2.0);
          //        // };

          //        // let Node_enter = this.Node_free.getChildByName("Node_enter");
          //        // if (Node_enter.active) {
          //        //     HjcUtils.instance.playSound(HjcDef.eSound.zhanKai);

          //        //     this.scheduleOnce(doEnter, 2.5);
          //        // } else {
          //        //     doEnter();
          //        // }
        };

        _proto.doEndFree = function doEndFree() {
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          var Label_totalWin = Node_end.getChildByName("Label_totalWin");
          Label_totalWin.getComponent(Label).string = "";
          var endSpine = Node_end.getComponent(sp.Skeleton);
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);
          this.scheduleOnce(function () {
            //            //免费总得分
            Label_totalWin.scale = v3(1.0, 1.0, 1);
            HjcUtils.instance.updateLabelAdd(Label_totalWin.getComponent(Label), HjcModel.instance.totalFreeWin);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(this.setEndFree, 0.2);
          AudioManager.instance.pauseMusic();
          HjcUtils.instance.playSound(eSound.free_winEffect, true);
          this.Node_helpTip.active = false;
          this.Node_winTip.active = true;
          var com_Hjc_winTip = this.Node_winTip.getComponent(Hjc_winTip);
          com_Hjc_winTip.doShow(HjcModel.instance.totalFreeWin, true);

          //        //2.0秒后返回正常
          this.scheduleOnce(this.hideFree, 8);
        }
        //    // onCatNumMove(destPos = 260) {
        //    //     if (!this.Label_catNum.active || this.Label_catNum.y == destPos) {
        //    //         return;
        //    //     }
        //    //     cc.tween(this.Label_catNum).to(0.25, { y: destPos, scale: 1.0 }).start();
        //    // }
        //    // setFreeCatNum() {
        //    //     if (!this.Label_catNum.active) {
        //    //         this.Label_catNum.active = true;
        //    //     }
        //    //     this.Label_catNum.opacity = 0;
        //    //     cc.tween(this.Label_catNum).to(0.5, { opacity: 255 }).start();
        //    //     // this.Label_catNum.y = -270;
        //    //     // this.Label_catNum.scale = 0.5;
        //    //     this.Label_catNum.getComponent(cc.Label).string = `x${HjcModel.instance.totalRate}`;
        //    // }
        //    // doCatNumDrop() {
        //    //     return new Promise<void>((resolve, reject) => {
        //    //         if (this.Label_catNum.active) {
        //    //             let toPos = cc.v2(0, -70);
        //    //             cc.tween(this.Label_catNum)
        //    //                 .delay(0.5)
        //    //                 .to(0.05, { y: this.Label_catNum.y + 20 })
        //    //                 .to(0.25, { y: toPos.y, scale: 0.5 })
        //    //                 .call(resolve)
        //    //                 .to(0.25, { opacity: 0, scale: 1.5 })
        //    //                 .to(0.1, { scale: 0.5 })
        //    //                 .to(0.5, { opacity: 255, y: toPos.y - 170 }, { easing: "quadOut" })
        //    //                 .start();
        //    //         } else {
        //    //             resolve();
        //    //         }
        //    //     });
        //    // }
        //    // clearCatNum() {
        //    //     if (this.Label_catNum.active) {
        //    //         cc.tween(this.Label_catNum)
        //    //             .to(0.2, { opacity: 0 })
        //    //             .call(() => {
        //    //                 this.Label_catNum.active = false;
        //    //             })
        //    //             .start();
        //    //     }
        //    // }
        //    // scaleCatNum() {
        //    //     // if (this.Label_catNum.active) {
        //    //     //     cc.tween(this.Label_catNum)
        //    //     //         .to(0.2, { scale: this.Label_catNum.scale * 0.4, y: this.Label_catNum.y + 27 })
        //    //     //         .start();
        //    //     // }
        //    // }
        ;

        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(HjcModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            HjcUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                var AllPosMsg = HjcModel.instance.gameInfo.Res[HjcModel.instance.gameInfo.Res.length - 1].AllPosMsg;
                //                //横向
                var InitExtraPos = [];
                for (var i = 0; i < 4; i++) {
                  var InitPosMsg = AllPosMsg[i + 1];
                  var symbolInfo = InitPosMsg[InitPosMsg.length - 1];
                  //                    // if (symbolInfo.Sym == HjcDef.eSymbol.CAISHEN) {
                  //                    //     symbolInfo.Sym = Math.floor(Math.random() * HjcDef.eSymbol.Q) + 2;
                  //                    // }
                  InitExtraPos.push(symbolInfo);
                }
                this.Hjc_symbolList[0].init(InitExtraPos);

                //                //纵向
                for (var _i6 = 1; _i6 < this.Hjc_symbolList.length; _i6++) {
                  var _InitPosMsg = AllPosMsg[_i6 - 1];
                  this.Hjc_symbolList[_i6].init(_InitPosMsg);
                }
                this.Label_bet.string = HjcUtils.instance.numberFormat(HjcModel.instance.curBet, 2.0) + "K";
                var symRate = 1;
                for (var _i7 = 0; _i7 < AllPosMsg.length; _i7++) {
                  symRate *= AllPosMsg[_i7].length;
                }
                HjcUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                var totalWin = 0;
                var totalRate = 1;
                var resultList = HjcModel.instance.gameInfo.Res;
                for (var _i8 = 0; _i8 < resultList.length; _i8++) {
                  var result = resultList[_i8];
                  if (result.RewardMoney > 0) {
                    totalWin += result.RewardMoney;
                    totalRate += 1;
                  }
                }
                if (totalWin > 0) {
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  var com_Hjc_winTip = this.Node_winTip.getComponent(Hjc_winTip);
                  com_Hjc_winTip.doShow(totalWin, true);
                  HjcUtils.instance.updateLabelAdd(this.Label_win, totalWin);
                }
                if (HjcModel.instance.totalFreeTimes == 0) {
                  this.Label_curRate.string = "x" + totalRate;
                }
                if (HjcModel.instance.totalFreeTimes > 0) {
                  this.showFree(true);
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
                Tween.stopAllByTarget(this.Button_run.node);
                HjcUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                this.doStartRun();
                this.updateGold();
                break;
              }
            //            // case HjcDef.eProto.HD_BoYiBo: {
            //            //     this.doBoYiBoResult(data.win);
            //            //     break;
            //            // }

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
        return HjcGameView;
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Hjc_symbolList", [_dec9], {
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
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "arrRoomSpFrame", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "arrTipBgSpFrame", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "arrRateSpFrame", [_dec27], {
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
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tipBg", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rateBg", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Label_curRate", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "particle", [_dec37], {
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

System.register("chunks:///_virtual/HjcModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './HjcDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "3904eMFxLRO0JMo/jWQRRMa", "HjcModel", undefined);
      var HjcModel = exports('HjcModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(HjcModel, _GameDef$BaseSington);
        function HjcModel() {
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
          _this.autoTimes = 0;
          _this.selAutoIndex = 0;
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
          _this.boType = "count";
          return _this;
        }
        var _proto = HjcModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return HjcModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HjcScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './HjcDef.ts', './HjcUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, HjcUtils, Common;
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
      HjcUtils = module.HjcUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ba887MYJqBFNb63rPzcP/v2", "HjcScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var HjcScene = exports('default', (_dec = ccclass("HjcScene"), _dec2 = menu("game/HjcGame/HjcScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HjcScene, _Component);
        function HjcScene() {
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
        var _proto = HjcScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          HjcUtils.instance.bundle = assetManager.getBundle(cBundle);
          HjcUtils.instance.preLoad();
          HjcUtils.instance.playBgMusic();
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
            //            // if (!HjcUtils.instance.isChangeOrientation()) {
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
            HjcUtils.instance.bundle.load("prefab/HjcGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (HjcUtils.instance.isChangeOrientation()) {
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
        return HjcScene;
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

System.register("chunks:///_virtual/HjcUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './HjcDef.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b04fe6wGY1Mr6J8o8KBAlM8", "HjcUtils", undefined);
      var symbol_nomal_icon = ["icon_scatter",
      //SCATTER-0
      "icon_wild",
      //WILD-1
      "icon_gold",
      //CAT-2
      "icon_red",
      //MASK-3
      "icon_pink",
      //FISH-4
      "icon_purple",
      //BIRD-5
      "icon_blue",
      //FLOWER-6
      "icon_green",
      //GREEN-7
      "icon_A",
      //A-8
      "icon_K",
      //K-9
      "icon_Q",
      //Q-10
      "icon_J",
      //J-11
      "icon_10",
      //TEN-12
      "icon_scatter_02"];
      var symbol_aniName = ["icon_gold", "icon_red", "icon_pink", "icon_purple", "icon_blue", "icon_green", "icon_a", "icon_k", "icon_q", "icon_j", "icon_10"];
      var symbol_box = ["box_gold", "box_red", "box_pink", "box_purple", "box_blue", "box_green", "box_A", "box_K", "box_Q", "box_J", "box_10"];
      var HjcUtils = exports('HjcUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(HjcUtils, _GameDef$BaseSington);
        function HjcUtils() {
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
        var _proto = HjcUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/HjcGameView");
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
                  arrHLoad.push(this.asyncLoad("font/number4", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/number5", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  //        // arrHLoad.push(
                  //        //     this.asyncLoad("font/red_01", cc.Font, (err, font: cc.Font) => {
                  //        //         if (!err) {
                  //        //             this.arrFontData[font.name] = font;
                  //        //         }
                  //        //     })
                  //        // );
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
        _proto.playBgMusic = function playBgMusic(soundPath) {
          if (soundPath === void 0) {
            soundPath = eSound.bgNomal;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
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
          HjcUtils.instance.playSound(eSound.numAdd);
          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              HjcUtils.instance.stopSound(eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).to(0.2, {
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
          HjcUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              HjcUtils.instance.stopSound(eSound.numAdd);
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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, length) {
          if (length === void 0) {
            length = 1;
          }
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex];
            if (symbolIndex == eSymbol.SCATTER && length > 1) {
              symbol = symbol_nomal_icon[symbol_nomal_icon.length - 1];
            }
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length, rim) {
          if (length === void 0) {
            length = 0;
          }
          var symbol = symbol_box[symbolIndex - eSymbol.CAT] + "_0" + length;
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
          var symbol = rim == 1 ? "Base_Reel_Silver frame_02" : "Base_Reel_Gold frame_02";
          if (this.arrIconFrameSpriteFrame) {
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle, isHorizontal) {
          if (length === void 0) {
            length = 1;
          }
          var strAni = null;
          switch (symbolIndex) {
            case eSymbol.SCATTER:
              {
                strAni = length == 1 ? "idle1" : "idle2";
                break;
              }
            case eSymbol.WILD:
              {
                strAni = "lv" + length + "_idle";
                break;
              }
            default:
              {
                strAni = symbol_aniName[symbolIndex - eSymbol.CAT];
                break;
              }
          }
          if (!strAni) {
            return null;
          }
          //        // gts.Debug.Log("==getSymbolAniName=strAni=" + strAni);
          return strAni;
        };
        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index, isHorizontal) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = null;
          switch (index) {
            case eSymbol.SCATTER:
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
                strAni = "icon";
                break;
              }
          }

          //        // gts.Debug.Log("==getSkeletonData=strAni=" + strAni);
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return HjcUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/HjcGame', 'chunks:///_virtual/HjcGame'); 
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