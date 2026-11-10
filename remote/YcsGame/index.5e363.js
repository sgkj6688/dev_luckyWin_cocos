System.register("chunks:///_virtual/Ycs_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "6ef81QaqmROBJNoDJSCC9aF", "Ycs_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Ycs_btnEffect = exports('default', (_dec = ccclass("YcsBtnEffect"), _dec2 = menu("game/YcsGame/Ycs_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_btnEffect, _Component);
        function Ycs_btnEffect() {
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
        var _proto = Ycs_btnEffect.prototype;
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
          EventManager.instance.off("onMouseMoveIn" + this.node.name);
          EventManager.instance.off("onMouseMoveOut" + this.node.name);
        }
        //    // update (dt) {}
        ;

        _createClass(Ycs_btnEffect, [{
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

        return Ycs_btnEffect;
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

System.register("chunks:///_virtual/Ycs_buyReward.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './YcsCtrl.ts', './YcsModel.ts', './YcsUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, ViewManager, YcsCtrl, YcsModel, YcsUtils;
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
      YcsCtrl = module.YcsCtrl;
    }, function (module) {
      YcsModel = module.YcsModel;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "99992Z9CTJHWbDeq+aNgKsO", "Ycs_buyReward", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_buyReward = exports('default', (_dec = ccclass("YcsBuyReward"), _dec2 = menu("game/YcsGame/Ycs_buyReward"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_buyReward, _Component);
        function Ycs_buyReward() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Ycs_buyReward.prototype;
        _proto.onLoad = function onLoad() {
          this.Label_gold.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet * 50, 2.0) + "K";
        };
        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_cancel":
              {
                break;
              }
            case "Button_ok":
              {
                YcsCtrl.instance.reqBet(true);
                break;
              }
          }
          ViewManager.instance.closePopView(this.node);
        };
        return Ycs_buyReward;
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

System.register("chunks:///_virtual/Ycs_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "d41a3MjML5DJYD1XxKC70Sz", "Ycs_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_helpTip = exports('default', (_dec = ccclass("YcsHelpTip"), _dec2 = menu("game/YcsGame/Ycs_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_helpTip, _Component);
        function Ycs_helpTip() {
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
        var _proto = Ycs_helpTip.prototype;
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
        return Ycs_helpTip;
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

System.register("chunks:///_virtual/Ycs_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsCtrl.ts', './YcsDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, YcsCtrl, eProto, GameDef, Common;
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
      YcsCtrl = module.YcsCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7d4c8ITFz9A/ItTZYeN/rRL", "Ycs_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Ycs_history = exports('default', (_dec = ccclass("YcsHistory"), _dec2 = menu("game/YcsGame/Ycs_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Ycs_history, _GameDef$BaseView);
        function Ycs_history() {
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
        var _proto = Ycs_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, YcsCtrl.instance);
          YcsCtrl.instance.reqHistory();
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
          YcsCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          YcsCtrl.instance.reqHistory(start);
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
        return Ycs_history;
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

System.register("chunks:///_virtual/Ycs_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './YcsUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, YcsUtils, Common;
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
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "3a1e9c3n2hC04MF1NKiJO6x", "Ycs_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_historyItem = exports('default', (_dec = ccclass("YcsHistoryItem"), _dec2 = menu("game/YcsGame/Ycs_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_historyItem, _Component);
        function Ycs_historyItem() {
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
        var _proto = Ycs_historyItem.prototype;
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
          this.Label_bet.string = YcsUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + YcsUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + YcsUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Ycs_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Ycs_historyItem;
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

System.register("chunks:///_virtual/Ycs_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsCtrl.ts', './YcsDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, YcsCtrl, eProto, GameDef, Common;
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
      YcsCtrl = module.YcsCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2d94fhhSDpJeJlPpDDJf+e1", "Ycs_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Ycs_rank = exports('default', (_dec = ccclass("YcsRank"), _dec2 = menu("game/YcsGame/Ycs_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Ycs_rank, _GameDef$BaseView);
        function Ycs_rank() {
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
        var _proto = Ycs_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, YcsCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          YcsCtrl.instance.reqRank();
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
        return Ycs_rank;
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

System.register("chunks:///_virtual/Ycs_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './YcsUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, YcsUtils;
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
      YcsUtils = module.YcsUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "33505XqlSlKJ6lpDpH25L86", "Ycs_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_rankItem = exports('default', (_dec = ccclass("YcsRankItem"), _dec2 = menu("game/YcsGame/Ycs_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_rankItem, _Component);
        function Ycs_rankItem() {
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
        var _proto = Ycs_rankItem.prototype;
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
          this.Label_win.string = YcsUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Ycs_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Ycs_rankItem;
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

System.register("chunks:///_virtual/Ycs_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsModel.ts', './YcsDef.ts', './YcsUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, YcsModel, eAutoRateType, eEvent, YcsUtils, EventManager;
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
      YcsModel = module.YcsModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "698c2Pt5W5FPq/NY3qOJyml", "Ycs_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_ScrollView = exports('default', (_dec = ccclass("YcsScrollView"), _dec2 = menu("game/YcsGame/Ycs_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_ScrollView, _Component);
        function Ycs_ScrollView() {
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
        var _proto = Ycs_ScrollView.prototype;
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
                this._curIndex = YcsModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = YcsModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = YcsModel.instance._curIndex_baseBet;
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
                var strNum = YcsUtils.instance.numberFormat(num, 2);
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
                var _strNum = YcsUtils.instance.numberFormat((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);

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
        return Ycs_ScrollView;
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

System.register("chunks:///_virtual/Ycs_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsModel.ts', './YcsDef.ts', './ViewManager.ts', './EventManager.ts', './YcsUtils.ts', './Ycs_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, YcsModel, eEvent, eAutoRateType, ViewManager, EventManager, YcsUtils, Ycs_ScrollView, Common;
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
      YcsModel = module.YcsModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Ycs_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "26746b3zu5AgpgpH1k+Zhjo", "Ycs_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Ycs_setBase = exports('default', (_dec = ccclass("YcsSetBase"), _dec2 = menu("game/YcsGame/Ycs_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_setBase, _Component);
        function Ycs_setBase() {
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
        var _proto = Ycs_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(YcsModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (YcsModel.instance.curTotalWin > 0) {
            this.Label_win.string = YcsUtils.instance.numberFormat(YcsModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = YcsModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = YcsModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = YcsModel.instance._curIndex_baseBet;
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
            if (YcsModel.instance.curTotalWin > 0) {
              this.Label_win.string = YcsUtils.instance.numberFormat(YcsModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = YcsModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            YcsModel.instance.curTotalWin += disWin;
            if (YcsModel.instance.curTotalWin > destWin) {
              YcsModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = YcsUtils.instance.numberFormat(YcsModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Ycs_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Ycs_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Ycs_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Ycs_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Ycs_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Ycs_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Ycs_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                YcsModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                YcsModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                YcsModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Ycs_setBase;
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

System.register("chunks:///_virtual/Ycs_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "31025rWL1pEaKE8HbjAnYqx", "Ycs_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Ycs_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsModel.ts', './YcsDef.ts', './EventManager.ts', './YcsUtils.ts', './Ycs_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, YcsModel, eRunStatus, eEvent, eConstDef, eSymbol, eSound, EventManager, YcsUtils, Ycs_symbolItem;
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
      YcsModel = module.YcsModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Ycs_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "9b976khkEdAl57B1EB+ntVb", "Ycs_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_symbol = exports('default', (_dec = ccclass("YcsSymbol"), _dec2 = menu("game/YcsGame/Ycs_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_symbol, _Component);
        function Ycs_symbol() {
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
          _this.isBreak = false;
          _this._resultInfoList = [];
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Ycs_symbol.prototype;
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
          this.isBreak = true;
          var toLength = 0;
          if (this.isHorizontal) {
            //            //横向
            toLength = (pos - eConstDef.cSymbolStartX) / eConstDef.cSymbolW - length / 2;
          } else {
            toLength = (pos - eConstDef.cSymbolStartY) / eConstDef.cSymbolH - length / 2;
          }
          for (var _i = 0; _i < length; _i++) {
            var newItem = instantiate(this.Node_itemTemp);
            this.itemTag = (this.itemTag + 1) % 2000;
            newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
            this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);

            //            //POSITON
            if (this.isHorizontal) {
              //                //横向
              var offsetX = (toLength + 1 / 2) * eConstDef.cSymbolW;
              newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
            } else {
              var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
              newItem.setPosition(this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
            }

            //            //
            var itemInfo = {
              IsReward: this.isHorizontal ? true : false,
              Length: 1,
              Rim: 0,
              Sym: eSymbol.WILD
            };
            var com = newItem.getComponent(Ycs_symbolItem);
            com.initItem(itemInfo, this.isHorizontal, this._iCol);
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
              var InitPosMsg = openResult.AllPosMsg[i + 1];
              itemInfo = InitPosMsg[InitPosMsg.length - 1];
            } else {
              itemInfo = openResult.AllPosMsg[this._iCol - 1][i];
            }
            if (itemInfo.Sym == eSymbol.CAISHEN) {
              _curLength = 0;
              itemInfo.Length = 4;
              itemInfo.IsReward = true;
              _resultInfoList = [itemInfo];
              break;
            } else {
              _resultInfoList.push(itemInfo);
            }
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
            var symbol = this.isHorizontal ? Math.floor(Math.random() * eSymbol.CAISHEN) + 1 : Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              Sym: symbol,
              //YcsDef.eSymbol.A,
              Length: symLen,
              Rim: symLen > 1 ? Math.floor(Math.random() * 3) : 0,
              IsReward: false
            };
            itemInfo.Length = this.isHorizontal ? 1 : Math.floor(Math.random() * 4) + 1;
            if (this.isHorizontal && itemInfo.Sym == eSymbol.CAISHEN) {
              itemInfo.Length = 4;
              itemInfo.Rim = 0;
            } else if (!this.isHorizontal && itemInfo.Sym == eSymbol.WILD) {
              itemInfo.Length = 1;
            }
          }
          if (itemInfo.Sym == eSymbol.CAISHEN) ;
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
          var com = newItem.getComponent(Ycs_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
          this._symbolList.push(com);
          this.itemTag = (this.itemTag + 1) % 2000;
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          this._curLength += itemInfo.Length;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList[i]);
          }
          for (var _i2 = 0; _i2 < this._symbolList.length; _i2++) {
            var symbolNode = this._symbolList[_i2].node;
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
              YcsModel.instance.isQuickStop ? function () {
                _this2._runStatus = eRunStatus.STOP;
                _this2._speed = 2500;
              }() : function () {
                _this2._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this2._resultInfoList = _this2.getResult(YcsModel.instance.betResult.Res[0]);

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
                              YcsUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step = _iterator()).done;) {
                              _symbol2 = _step.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (YcsModel.instance.specialStartCol > 0 && (_this2._iCol == 0 || _this2._iCol >= YcsModel.instance.specialStartCol)) {
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
              _this2.schedule(scheduleUpdate);
            }, startDelay);
          });
        };
        _proto.doCaiShenEffect = function doCaiShenEffect() {
          return this._symbolList[0].doCaiShenEffect();
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(Ycs_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              Ycs_symbol.rewardCount++;
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
              arrPro.push(symbol.doCatNumCollect(Ycs_symbol.catCount * 0.35, collectType));
              Ycs_symbol.catCount++;
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
                  Ycs_symbol.catCount = 0;
                  Ycs_symbol.rewardCount = 0;
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
        }() //    // async doWildChange() {
        //    //     Ycs_symbol.catCount = 0;
        //    //     Ycs_symbol.rewardCount = 0;
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
            var _nextResultInfoList, iRow, symbolItem, _curLength, arrPro, toLength, _iRow, _symbolItem, nextInfo;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (this.isBreak) ;
                  this.isBreak = false;
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
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  _iRow = 0;
                case 8:
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
                  //                // newFloor += symbolItem.itemInfo.Length;

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
                  _context3.next = 8;
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
        return Ycs_symbol;
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

System.register("chunks:///_virtual/Ycs_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "84189pcwI9BCamc0OGOJUBJ", "Ycs_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_symbolEffectRoot = exports('default', (_dec = ccclass("YcsSymbolEffectRoot"), _dec2 = menu("game/YcsGame/Ycs_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_symbolEffectRoot, _Component);
        function Ycs_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Ycs_symbolEffectRoot.prototype;
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
        return Ycs_symbolEffectRoot;
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

System.register("chunks:///_virtual/Ycs_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsDef.ts', './Ycs_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UITransform, instantiate, Sprite, UIOpacity, Component, eSymbol, Ycs_symbolItem;
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
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Ycs_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "16853YBguhCIKlV2Ffl91Hl", "Ycs_symbolInfo", undefined);
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
      var Ycs_symbolInfo = exports('default', (_dec = ccclass("YcsSymbolInfo"), _dec2 = menu("game/YcsGame/Ycs_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_symbolInfo, _Component);
        function Ycs_symbolInfo() {
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
        var _proto = Ycs_symbolInfo.prototype;
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
          //        // EventManager.instance.on(YcsDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          this.mask.active = false;
          this.Node_item.active = false;
          this.Node_info.active = false;
          //        // EventManager.instance.off(YcsDef.eEvent.onSymbolClick, this.showSymbolInfo, this);
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
          this.Node_item.getComponent(Ycs_symbolItem).initItem(symbol);

          // this.Node_info.getComponent(cc.UITransform).width = 259;
          // this.Node_info.getComponent(cc.UITransform).height = 146;

          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[this.arrBgSpFrame.length - 1];
                this.Node_item.active = false;
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
                var arrRate = eRate[symbol.Sym - eSymbol.SHITOU];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
                break;
              }
          }
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        return Ycs_symbolInfo;
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

System.register("chunks:///_virtual/Ycs_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsModel.ts', './YcsDef.ts', './EventManager.ts', './YcsUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, sp, UITransform, Sprite, isValid, tween, UIOpacity, v3, v2, Vec2, Tween, Component, YcsModel, eSymbol, eRunStatus, eZindex, eEvent, eSound, eConstDef, EventManager, YcsUtils;
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
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
      v2 = module.v2;
      Vec2 = module.Vec2;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      YcsModel = module.YcsModel;
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
      YcsUtils = module.YcsUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "d823aNH0ilJxJpdI2FIdbuW", "Ycs_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_symbolItem = exports('default', (_dec = ccclass("YcsSymbolItem"), _dec2 = menu("game/YcsGame/Ycs_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_symbolItem, _Component);
        function Ycs_symbolItem() {
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
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          //    //moveType:0-正常240， 1：-240（免费模式-本轮没中奖 但有猫
          _this._spineEffect_catNum = null;
          _this.isChange = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = Ycs_symbolItem.prototype;
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
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = YcsUtils.instance.getSkeletonData("kuang_effect");
            itemSpine.setAnimation(0, "lv" + _this2.itemInfo.Length + "_intro", false);
            itemSpine.addAnimation(0, "lv" + _this2.itemInfo.Length + "_idle", true);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);

              //                // itemSpine.setAnimation(0, `lv${this.itemInfo.Length}_idle`, true);
              resolve();
            });
            _this2.node.addChild(newNode);
            var Node_symbol = _this2.node.getChildByName("Node_symbol");
            if (_this2.itemInfo.Sym < eSymbol.SHITOU) {
              newNode.getComponent(UITransform).priority = 10;
              Node_symbol.getComponent(UITransform).priority = 5;
            } else {
              newNode.getComponent(UITransform).priority = 5;
              Node_symbol.getComponent(UITransform).priority = 10;
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
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = YcsUtils.instance.getSkeletonData("kuang_light");
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
          //        //test
          //        // isSpine = false;
          isSpine = Sym < eSymbol.SHITOU || Sym == eSymbol.CAISHEN ? true : isSpine;

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
              var itemSymbol = YcsUtils.instance.getItemSymbolIcon(Sym);
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
              var itemSymbol = YcsUtils.instance.getSkeletonData(Sym, _this4._isHorizontal);
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, YcsUtils.instance.getSymbolAniName(Sym, length, isIdle, _this4._isHorizontal), true);
            });
          }

          //        //tag update
          Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.SCATTER:
              {
                //                // this.node.zIndex = this.node.zIndex > YcsDef.eZindex.icon_scatter ? this.node.zIndex : YcsDef.eZindex.icon_scatter;

                var addScatterlight = function addScatterlight(isUp) {
                  var newNode = new Node("newNode" + isUp);
                  newNode.active = true;
                  var itemSpine = newNode.addComponent(sp.Skeleton);
                  itemSpine.premultipliedAlpha = false;
                  itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  itemSpine.skeletonData = YcsUtils.instance.getSkeletonData("scatterlight");
                  var ani = isUp ? "up" : "down";
                  itemSpine.setAnimation(0, ani, true);
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
          }
        };
        _proto.updateBox = function updateBox(Sym, length, rim) {
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = YcsUtils.instance.getItemSymbolIconBox(Sym, length, rim);
          //        // if (fBg.spriteFrame) {
          //        //     gts.Debug.Log(`=updateBox=Sym=${Sym}=length=${length}=rim=${rim}=spriteFrame=${fBg.spriteFrame.name}`);
          //        // } else {
          //        //     gts.Debug.Log(`=updateBox=Sym=${Sym}=length=${length}=rim=${rim}=spriteFrame=null=`);
          //        // }

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
            _Sprite_frame.getComponent(Sprite).spriteFrame = YcsUtils.instance.getItemSymbolIconFrame(rim, length);

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
                _zIndex = eZindex.SPECIAL;
                break;
              }
            case eSymbol.CAISHEN:
              {
                _zIndex = eZindex.icon_scatter;
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
                _zIndex = YcsModel.instance.specialStartCol > 0 && this._iCol > YcsModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
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
          if (YcsModel.instance.gameStatus != eRunStatus.NONE) {
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
        _proto.doCaiShenEffect = function doCaiShenEffect() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            if (_this7.itemInfo.IsReward && _this7.itemInfo.Sym == eSymbol.CAISHEN) {
              var Node_symbol = _this7.node.getChildByName("Node_symbol");
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              itemSpine.setAnimation(0, YcsUtils.instance.getSymbolAniName(_this7.itemInfo.Sym, _this7.itemInfo.Length, false, _this7._isHorizontal), false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                _this7.scheduleOnce(function () {
                  resolve();
                  _this7.node.destroyFromParent();
                }, 1.0);
                _this7.itemInfo.IsReward = false;
                var Node_symbol = _this7.node.getChildByName("Node_symbol");
                Node_symbol.getComponent(UIOpacity).opacity = 0;
                var pos = _this7._isHorizontal ? _this7.node.getPosition().x : _this7.node.getPosition().y;
                EventManager.instance.emit(eEvent.onSymbolBreak + _this7._iCol, _this7.node.name, pos, _this7.itemInfo.Length);
              });
            } else {
              resolve();
            }
          });
        }
        //    // isBreak = false;
        ;

        _proto.doEffect = function doEffect(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            if (_this8.itemInfo.IsReward) {
              if (_this8.itemInfo.Length > 1 && _this8.itemInfo.Rim == 2) {
                //                    //分解为多个wild
                //                    // this.isBreak = true;
                _this8.itemInfo.IsReward = false;
                var Node_symbol = _this8.node.getChildByName("Node_symbol");
                Node_symbol.getComponent(UIOpacity).opacity = 0;

                //                    //添加WILD变换动画
                var newNode = new Node();
                _this8.node.addChild(newNode);
                var itemSymbol = YcsUtils.instance.getSkeletonData("shu_wild");
                var itemSpine = newNode.addComponent(sp.Skeleton);
                itemSpine.premultipliedAlpha = false;
                itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                itemSpine.skeletonData = itemSymbol;
                itemSpine.setAnimation(0, "lv" + _this8.itemInfo.Length, false);
                itemSpine.setCompleteListener(function () {
                  itemSpine.setCompleteListener(null);
                  newNode.destroyFromParent();
                  resolve();
                  _this8.node.getComponent(UIOpacity).opacity = 0;
                  tween(_this8.node).delay(0).removeSelf().start();
                  EventManager.instance.emit(eEvent.onSymbolBreak + _this8._iCol, _this8.node.name, _this8.node.getPosition().y, _this8.itemInfo.Length);
                });

                //                    // this.scheduleOnce(resolve, 0.25);
                _this8.updateZIndex(eRunStatus.CLEAR);
                _this8.scheduleOnce(function () {
                  _this8.addEffectKuang();
                }, 0.0 + delay);
              } else {
                _this8.updateSymbol(true, false);
                _this8.scheduleOnce(function () {
                  _this8.addEffectKuang();
                  _this8.scheduleOnce(resolve, 0.25);
                }, 0.0 + delay);
              }
            } else {
              resolve();
            }
          });
        };
        _proto.doCatNumMoveTo = function doCatNumMoveTo(collectType) {
          var _this9 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            var Node_symbol = _this9.node.getChildByName("Node_symbol");
            var catNum = Node_symbol.getChildByName("catNum");
            var root = _this9.node.parent.parent.parent.parent;
            var pos = catNum.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            pos = root.getComponent(UITransform).convertToNodeSpaceAR(pos);
            catNum.getComponent(UITransform).priority = 52;
            catNum.parent = root;
            catNum.position = v3(pos);
            _this9._spineEffect_catNum = catNum.getComponent(sp.Skeleton);
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
              _this9._spineEffect_catNum.setAnimation(0, "fly", true);
            }).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -150 : 150), (startPos.y + endPos.y) * 0.5), endPos).call(function () {
              _this9._spineEffect_catNum.node.destroyFromParent();
              _this9._spineEffect_catNum = null;
              EventManager.instance.emit(eEvent.onCatNumAdd, collectType);
              resolve();
            }).start();
          });
        };
        _proto.checkCollect = function checkCollect() {
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var catNum = Node_symbol.getChildByName("catNum");
          //        // return this.itemInfo.Sym == YcsDef.eSymbol.CAT && catNum && cc.isValid(catNum);
          return false;
        };
        _proto.doCatNumCollect = function doCatNumCollect(delay, collectType) {
          var _this10 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            _this10.scheduleOnce(function () {
              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this10.doCatNumMoveTo(collectType);
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
          var _this11 = this;
          if (isWild === void 0) {
            isWild = false;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          if (!isWild) {
            this.isChange = true;
            YcsUtils.instance.playOneShot(eSound.frameChange);
            tween(Node_symbol).repeatForever(tween(Node_symbol).delay(0.05).call(function () {
              var sym = Math.floor(Math.random() * eSymbol.Q) + 3;
              _this11.updateBox(sym, _this11.itemInfo.Length, _this11.itemInfo.Rim);
              _this11.updateIcon(sym, _this11.itemInfo.Length);
            })).start();
            return;
          }
        };
        _proto.doEndChange = function doEndChange(newItemInfo) {
          var _this12 = this;
          if (this.isChange) {
            this.scheduleOnce(function () {
              var Node_symbol = _this12.node.getChildByName("Node_symbol");
              Tween.stopAllByTarget(Node_symbol);
              _this12.scheduleOnce(function () {
                _this12.updateBox(newItemInfo.Sym, _this12.itemInfo.Length, _this12.itemInfo.Rim);
                _this12.updateIcon(newItemInfo.Sym, newItemInfo.Length);
              });
              _this12.node.getComponent(UITransform).priority = eZindex.icon;
              _this12.isChange = false;
              if (_this12._spineEffect_kuangLight) {
                _this12._spineEffect_kuangLight.node.getComponent(UITransform).priority = 20;
                _this12._spineEffect_kuangLight.setAnimation(0, "lv" + _this12.itemInfo.Length, false);
                _this12._spineEffect_kuangLight.setCompleteListener(function () {
                  _this12._spineEffect_kuangLight.setCompleteListener(null);
                  _this12._spineEffect_kuangLight.node.destroyFromParent();
                  _this12._spineEffect_kuangLight = null;
                });
              }
            }, 0.25);
          }
        };
        _proto.doClear = function doClear() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            if (_this13.itemInfo.IsReward) {
              if (_this13.itemInfo.Rim != 0 && _this13.itemInfo.Sym != eSymbol.WILD) {
                //                    //变换
                if (_this13._spineEffect_kuang) {
                  //                        // this._spineEffect_kuang.setAnimation(0, `change${this.itemInfo.Length}`, false);
                  //                        // this._spineEffect_kuang.setCompleteListener(() => {
                  //                        //     this._spineEffect_kuang.setCompleteListener(null);
                  //                        //     this._spineEffect_kuang.node.destroyFromParent();
                  //                        //     this._spineEffect_kuang = null;
                  //                        // });
                  _this13._spineEffect_kuang.node.destroyFromParent();
                  _this13._spineEffect_kuang = null;
                  _this13.scheduleOnce(function () {
                    //                            //开始转动
                    _this13.addEffectKuangLight();

                    //                            //替换图标
                    _this13.doStartChange(_this13.itemInfo.Rim == 2);

                    //                            //替换框
                    _this13.itemInfo.Rim = _this13.itemInfo.Rim == 2 ? 0 : 2;
                    _this13.updateFrame(_this13.itemInfo.Rim, _this13.itemInfo.Length);
                  }, 0.1);
                }
                resolve();
              } else {
                if (_this13._spineEffect_kuang) {
                  _this13._spineEffect_kuang.setAnimation(0, "lv" + _this13.itemInfo.Length + "_end", false);
                  _this13._spineEffect_kuang.setCompleteListener(function () {
                    _this13._spineEffect_kuang.setCompleteListener(null);
                    _this13._spineEffect_kuang.node.destroyFromParent();
                    _this13._spineEffect_kuang = null;
                    _this13.node.getComponent(UIOpacity).opacity = 0;
                    resolve();
                  });
                }
                var Node_symbol = _this13.node.getChildByName("Node_symbol");
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
                  _this13.isClear = true;
                }).start();
              }
            } else {
              resolve();
            }
          });
        };
        _proto._doShake = function _doShake() {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            _this14.scheduleOnce(function () {
              if (!_this14.isClear) {
                // this.node.runAction(cc.sequence(Ycs_shake.create(0.5, 1.25, 1.25), cc.callFunc(resolve, this)));
                tween(_this14.node).shake(0.5, 1.25, 1.25).call(function () {
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
            var _this15 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this._doShake();
                case 2:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this15._isHorizontal ? _this15.node.getPosition().x : _this15.node.getPosition().y;
                    var toPos = 0;
                    if (_this15._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + _this15.itemInfo.Length / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + _this15.itemInfo.Length / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset == 0) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    //            // let offset = this._isHorizontal ? dropLength * YcsDef.eConstDef.cSymbolW : dropLength * YcsDef.eConstDef.cSymbolH;

                    var duration = offset / dropSpeed;
                    _this15.scheduleOnce(function () {
                      YcsUtils.instance.playOneShot(eSound.drop_1);
                    }, duration);
                    _this15._isHorizontal ? function () {
                      var pos_1 = _this15.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this15.node).to(duration, {
                        position: v3(pos_1, _this15.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this15.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this15.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this15.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this15.node).to(duration, {
                        position: v3(_this15.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this15.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this15.node.position.x, pos_1)
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
        return Ycs_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Ycs_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './YcsUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, YcsUtils;
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
      YcsUtils = module.YcsUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0fa98gEG1pIHIXko+/GcZ31", "Ycs_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Ycs_winTip = exports('default', (_dec = ccclass("YcsWinTip"), _dec2 = menu("game/YcsGame/Ycs_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Ycs_winTip, _Component);
        function Ycs_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Ycs_winTip.prototype;
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
            _this2.Label_win.string = YcsUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            YcsUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${YcsUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
            YcsUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Ycs_winTip;
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

System.register("chunks:///_virtual/YcsCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './YcsModel.ts', './I18n.ts', './ViewManager.ts', './YcsDef.ts', './YcsUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, YcsModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, YcsUtils, Common;
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
      YcsModel = module.YcsModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "da12eVJIAhCAI6ssiwLJxUL", "YcsCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var YcsCtrl = exports('YcsCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(YcsCtrl, _GameDef$BaseCtrl);
        function YcsCtrl() {
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
          _this._model = YcsModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = YcsCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete YcsCtrl._instance;
          YcsCtrl._instance = null;
          YcsModel.destroy();
          YcsUtils.destroy();
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
          if (!YcsModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            YcsModel.instance.curTotalBet = YcsModel.instance.curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: YcsModel.instance.curBet * 1000,
              buyFree: true
            });
          } else {
            YcsModel.instance.curTotalBet = YcsModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: YcsModel.instance.curBet * 1000
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
            gameType: "slotGod"
          });
        }

        /**
         *搏一搏
         * @param type string "count" && "times"
         */;
        _proto.reqBoYiBo = function reqBoYiBo(type) {
          YcsModel.instance.boType = type;
          NetManager.instance.sendOnlineData(eProto.HD_BoYiBo, {
            betAmount: YcsModel.instance.curBet * 1000,
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
            RecordType: "slotGod"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(YcsDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: YcsModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotGod"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotGod",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotGod"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotGod",
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
              Common.showTip(i18n.errTip(data.Code), !YcsUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == YcsDef.eProto.HD_Enter || (data.Code == 402 && YcsModel.instance.gameState.GameNo != YcsModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(YcsDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();

                // if (YcsModel.instance.gameStatus != YcsDef.eRunStatus.NONE) {
                //     return;
                // }
                YcsModel.instance.clearGameData();
                YcsModel.instance.gameInfo = data.Data;
                YcsModel.instance.curBet = Math.round(YcsModel.instance.gameInfo.BetAmount / 1000);
                YcsModel.instance.totalFreeWin = YcsModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
                YcsModel.instance.totalFreeTimesBack = YcsModel.instance.gameInfo.FreeInfo.TotalCount;
                YcsModel.instance.totalFreeTimes = YcsModel.instance.gameInfo.FreeInfo.Count;
                YcsModel.instance.totalRate = YcsModel.instance.totalFreeTimes > 0 ? YcsModel.instance.gameInfo.FreeInfo.Multiple : 8;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                YcsModel.instance.betResult = data.Data;

                //test
                // YcsModel.instance.betResult = this.getResult().Data;

                this.isReqBet = false;

                //判断是否有2个胡
                YcsModel.instance.specialStartCol = 0;
                if (!YcsModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = YcsModel.instance.betResult.Res[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.AllPosMsg.length - 1; iCol++) {
                      var AllPosMsg = openResult.AllPosMsg[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            YcsModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==YcsModel.instance.specialStartCol==" + YcsModel.instance.specialStartCol);
                  // //specialStartCol test
                  // YcsModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);
                }

                YcsModel.instance.totalFreeTimes = YcsModel.instance.betResult.FreeInfo.Count;

                //freeTest;
                // YcsModel.instance.totalFreeTimes = 0;

                // //freeTest;
                // if (YcsModel.instance.totalFreeTimes > 0) {
                //     YcsModel.instance.totalFreeTimes--;
                // } else {
                //     YcsModel.instance.totalFreeTimes = 8; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==YcsModel.instance.totalFreeTimes==" + YcsModel.instance.totalFreeTimes);
                if (YcsModel.instance.freeStatus == eRunStatus.NONE) {
                  YcsModel.instance.curBalance -= YcsModel.instance.curTotalBet;
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
                gts.Debug.LogWarr("==Ycs=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (YcsModel.instance.curBalance > 0) {
                  YcsModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                YcsModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Ycs=pushWallet==" + _HD_Wallet.VndBalance);
                if (YcsModel.instance.curBalance > 0) {
                  YcsModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                YcsModel.instance.curBalance = _HD_Wallet.VndBalance;
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
            GameType: "slotGod",
            cmd: "slotGod/HD_Bet"
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
        return YcsCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YcsDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "cc3f2D9uyRDVaN7FHdSjUfi", "YcsDef", undefined);
      var cBundle = exports('cBundle', "YcsGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotGod/HD_info";
        eProto["HD_Bet"] = "slotGod/HD_Bet";
        eProto["HD_Leave"] = "slotGod/HD_Leave";
        eProto["HD_BoYiBo"] = "slotGod/HD_BoYiBo";
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
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 2,
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 1.25,
        cSymbolW: 120,
        cSymbolH: 108,
        cSymbolStartX: -240,
        cSymbolStartY: -270,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
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
        SCATTER: 0,
        WILD: 1,
        SHITOU: 2,
        CHANCHU: 3,
        JINLI: 4,
        HONGBAO: 5,
        LUO: 6,
        BIANPAO: 7,
        A: 8,
        K: 9,
        Q: 10,
        J: 11,
        TEN: 12,
        CAISHEN: 13
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
        bigWin: "sound/startFree",
        startRun: "sound/startRun",
        running: "sound/running",
        freeEnd_0: "sound/freeEnd_0",
        freeEnd_1: "sound/freeEnd_1",
        rateChange: "sound/rateChange",
        frameChange: "sound/frameChange",
        catNumAdd: "sound/catNumAdd",
        free_winEffect: "sound/free_winEffect",
        zhuanDong: "sound/zhuanDong",
        shuZiBianHua: "sound/shuZiBianHua",
        zhanKai: "sound/zhanKai",
        zhuanShibai: "sound/zhuanShibai"
      });

      // export interface IHD_info {
      //     FreeTimes: number;
      //     FreeCount: number;
      //     InitExtraPos: IPosMsg[];
      //     InitPosMsg: IPosMsg[][];
      // }
      /**排行榜 */
      /**聊天信息 */
      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YcsGame", ['./YcsCtrl.ts', './YcsDef.ts', './YcsModel.ts', './YcsScene.ts', './YcsUtils.ts', './YcsGameView.ts', './Ycs_ScrollView.ts', './Ycs_btnEffect.ts', './Ycs_buyReward.ts', './Ycs_helpTip.ts', './Ycs_history.ts', './Ycs_historyItem.ts', './Ycs_rank.ts', './Ycs_rankItem.ts', './Ycs_setBase.ts', './Ycs_shake.ts', './Ycs_symbol.ts', './Ycs_symbolEffectRoot.ts', './Ycs_symbolInfo.ts', './Ycs_symbolItem.ts', './Ycs_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/YcsGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './YcsDef.ts', './YcsModel.ts', './YcsCtrl.ts', './ViewManager.ts', './YcsUtils.ts', './Ycs_winTip.ts', './Ycs_symbol.ts', './I18n.ts', './Ycs_symbolInfo.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Sprite, view, tween, v3, UITransform, instantiate, UIOpacity, Mask, find, v2, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eZindex, eRunStatus, eSound, eConstDef, eProto, eSymbol, YcsModel, YcsCtrl, ViewManager, YcsUtils, Ycs_winTip, Ycs_symbol, i18n, Ycs_symbolInfo, Common, AudioManager;
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
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Mask = module.Mask;
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
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
      eSymbol = module.eSymbol;
    }, function (module) {
      YcsModel = module.YcsModel;
    }, function (module) {
      YcsCtrl = module.YcsCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Ycs_winTip = module.default;
    }, function (module) {
      Ycs_symbol = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Ycs_symbolInfo = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39;
      cclegacy._RF.push({}, "6f878filFFG/I+oWVsewVQ0", "YcsGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var YcsGameView = exports('default', (_dec = ccclass("YcsGameView"), _dec2 = menu("game/YcsGame/YcsGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Ycs_symbol), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(Button), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec30 = property(SpriteFrame), _dec31 = property(Sprite), _dec32 = property(Sprite), _dec33 = property(Sprite), _dec34 = property(Sprite), _dec35 = property(Sprite), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Ycs_symbolInfo), _dec39 = property(Button), _dec40 = property(Button), _dec41 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(YcsGameView, _GameDef$BaseView);
        function YcsGameView() {
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
          _initializerDefineProperty(_this, "Ycs_symbolList", _descriptor7, _assertThisInitialized(_this));
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
          _initializerDefineProperty(_this, "arrFishSpFrame", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTipBgSpFrame", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDownSpFrame", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_down", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_roomBg", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_centerBg", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_fish", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_tipBg", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effect_freeLight", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor35, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_shengzi: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Node_info", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_times", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_rate", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_enterFree", _descriptor39, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = YcsGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, YcsCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!YcsUtils.instance.isChangeOrientation()) {
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
          YcsModel.instance.clearGameData();
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
              //                // YcsCtrl.instance.reEnterRoom();

              if (YcsModel.instance.isAuto && YcsCtrl.instance.isReqBet) {
                YcsCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseScore}_curIndex`, YcsModel.instance._curIndex_baseScore + 1);
          // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseRate}_curIndex`, YcsModel.instance._curIndex_baseRate + 1);
          // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseBet}_curIndex`, YcsModel.instance._curIndex_baseBet + 1);

          YcsModel.instance.curBet = (YcsModel.instance._curIndex_baseScore == 0 ? 0.1 : YcsModel.instance._curIndex_baseScore * 0.5) * (YcsModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          //        // let _curIndex_baseScore = cc.sys.localStorage.getItem(`${YcsDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = cc.sys.localStorage.getItem(`${YcsDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = cc.sys.localStorage.getItem(`${YcsDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          //        // YcsModel.instance.curBet = (_curIndex_baseScore == 0 ? 0.1 : _curIndex_baseScore * 0.5) * (_curIndex_baseRate + 1) * 20;

          //        // YcsModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // YcsModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // YcsModel.instance._curIndex_baseBet = _curIndex_baseBet;

          this.Button_run.interactable = false;
          YcsUtils.instance.loadRes_icon(function () {
            //            //test
            //            // for (let i = 0; i < this.Ycs_symbolList.length; i++) {
            //            //     this.Ycs_symbolList[i].init();
            //            // }

            YcsCtrl.instance.reqEnterRoom();
            _this4.Node_mask_0.getComponent(UITransform).priority = eZindex.MASK;
            _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          });
          YcsModel.instance.curBet = 0.1;
          this.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Button_auto":
              {
                YcsModel.instance.isAuto = !YcsModel.instance.isAuto;
                this.Button_run.interactable = !YcsModel.instance.isAuto;
                //                // YcsUtils.instance.setBtnBetGray(this.Button_run.node, YcsModel.instance.isAuto);

                //                // this.doStartRun();

                if (YcsModel.instance.gameStatus == eRunStatus.NONE && YcsModel.instance.isAuto) {
                  YcsCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_fast":
              {
                //                //快速停止
                YcsModel.instance.isQuickStop = !YcsModel.instance.isQuickStop;
                //                // YcsUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !YcsModel.instance.isQuickStop);

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
                if (YcsModel.instance.gameStatus != eRunStatus.NONE || YcsModel.instance.isAuto) {
                  return;
                }
                var buyGold = YcsModel.instance.curBet * 50 * 1000;
                if (YcsModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !YcsUtils.instance.isChangeOrientation());
                  return;
                }
                Common.loadPopBuddle("prefab/Node_buyReward", YcsUtils.instance.bundle, function () {}, function (prefab) {
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
                YcsCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", YcsUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", YcsUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", YcsUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (YcsModel.instance.gameStatus != eRunStatus.NONE || YcsModel.instance.isAuto) {
                  return;
                }
                YcsModel.instance._curIndex_baseBet--;
                if (YcsModel.instance._curIndex_baseBet < 0) {
                  YcsModel.instance._curIndex_baseBet = 0;
                }
                YcsModel.instance._curIndex_baseScore = Math.floor(YcsModel.instance._curIndex_baseBet / 10);
                YcsModel.instance._curIndex_baseRate = YcsModel.instance._curIndex_baseBet % 10;
                YcsModel.instance.curBet = (YcsModel.instance._curIndex_baseScore == 0 ? 0.1 : YcsModel.instance._curIndex_baseScore * 0.5) * (YcsModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseScore}_curIndex`, YcsModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseRate}_curIndex`, YcsModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseBet}_curIndex`, YcsModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (YcsModel.instance.gameStatus != eRunStatus.NONE || YcsModel.instance.isAuto) {
                  return;
                }
                YcsModel.instance._curIndex_baseBet++;
                if (YcsModel.instance._curIndex_baseBet > 29) {
                  YcsModel.instance._curIndex_baseBet = 29;
                }
                YcsModel.instance._curIndex_baseScore = Math.floor(YcsModel.instance._curIndex_baseBet / 10);
                YcsModel.instance._curIndex_baseRate = YcsModel.instance._curIndex_baseBet % 10;
                YcsModel.instance.curBet = (YcsModel.instance._curIndex_baseScore == 0 ? 0.1 : YcsModel.instance._curIndex_baseScore * 0.5) * (YcsModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseScore}_curIndex`, YcsModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseRate}_curIndex`, YcsModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${YcsDef.cBundle}_${YcsDef.eAutoRateType.baseBet}_curIndex`, YcsModel.instance._curIndex_baseBet + 1);

                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();

                if (YcsModel.instance.isAuto) {
                  break;
                }
                if (YcsModel.instance.gameStatus == eRunStatus.NONE) {
                  event.target.getComponent(Button).interactable = false;
                  //                    // YcsUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(5).call(function () {
                    if (!YcsModel.instance.isAuto) {
                      event.target.getComponent(Button).interactable = true;
                      //                                // YcsUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), false);
                    }
                  }).start();
                  YcsCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (YcsModel.instance.gameStatus != eRunStatus.NONE || YcsModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", YcsUtils.instance.bundle, function () {}, function (help) {
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
            case "Button_times":
              {
                // this.Button_times.interactable = false;
                // this.Button_rate.interactable = false;
                // this.Button_enterFree.interactable = false;
                Common.setButtonEnableWithGray(this.Button_times, false);
                Common.setButtonEnableWithGray(this.Button_rate, false);
                Common.setButtonEnableWithGray(this.Button_enterFree, false);
                this.unschedule(this.doEnterFree);
                YcsCtrl.instance.reqBoYiBo("count");
                break;
              }
            case "Button_rate":
              {
                // this.Button_times.interactable = false;
                // this.Button_rate.interactable = false;
                // this.Button_enterFree.interactable = false;
                Common.setButtonEnableWithGray(this.Button_times, false);
                Common.setButtonEnableWithGray(this.Button_rate, false);
                Common.setButtonEnableWithGray(this.Button_enterFree, false);
                this.unschedule(this.doEnterFree);
                event.target.getComponent(Button).interactable = false;
                YcsCtrl.instance.reqBoYiBo("times");
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
            YcsUtils.instance.stopSound(eSound.scarret);
            var setCol = iCol + 1;
            if (setCol < this.Ycs_symbolList.length) {
              YcsUtils.instance.playOneShot(eSound.scarret);
              this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL - 2 * (iCol + 1 - 1);
              this.Node_colEffect.setPosition(this.Ycs_symbolList[iCol + 1].node.getPosition().x, this.Node_colEffect.position.y);
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
          if (YcsModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          if (YcsModel.instance.freeStatus == eRunStatus.NONE) {
            this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0]; //
            this.Node_helpTip.getComponent(UITransform).width = 624;
            this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_ELLIPSE;
          }
          this.Node_info.node.active = false;
          this.Label_symRate.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.Button_buy.interactable = false;
          this.Node_tipEffect.node.active = false;
          var Node_effect = this.Node_tipEffect.node.getChildByName("Node_effect");
          Node_effect.active = false;
          YcsModel.instance.curTotalWin = 0;
          if (YcsModel.instance.freeStatus == eRunStatus.NONE) {
            this.clearCatNum();
            this.Label_win.string = "0.00";
            EventManager.instance.emit(eEvent.updateWin, 0);
          }
          this.Node_effectRoot.removeAllChildren();
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //            // YcsModel.instance.specialStartCol = 2;
                  arrPro = [];
                  for (i = 0; i < _this7.Ycs_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = YcsModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = YcsModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += YcsModel.instance.specialStartCol > 0 && i > YcsModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - YcsModel.instance.specialStartCol) : 0;
                    arrPro.push(_this7.Ycs_symbolList[i].doStart(startDelay, stopDelay));
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
          YcsModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "start") {
            this.Skeleton_run.setAnimation(0, "start", false);
            this.Skeleton_run.addAnimation(0, "idle", true);
          }
          if (YcsModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (YcsModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + YcsModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            YcsUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this8 = this;
            var symRate, result, i, resultList, _i, _result, resultNext, _i2, Ycs_symbolList, arrPro, _i3, _i4, _loop, curTotalWin, _i5, _i6, _symRate, _i7, _arrPro, _i8, delayStart, com_Ycs_winTip, pos, doContinue, totalRate, Node_bigWinEffect, lv, Label_totalWin;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  YcsModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_colEffect.active = false;
                    }).start();
                  }
                  symRate = 1;
                  result = YcsModel.instance.betResult.Res[0];
                  for (i = 0; i < result.AllPosMsg.length; i++) {
                    symRate *= result.AllPosMsg[i].length;
                  }
                  YcsUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                  YcsModel.instance.specialStartCol = 0;
                  YcsModel.instance.curTotalWin = 0;
                  resultList = YcsModel.instance.betResult.Res;
                  _i = 0;
                case 11:
                  if (!(_i < resultList.length)) {
                    _context3.next = 71;
                    break;
                  }
                  _result = resultList[_i];
                  if (!(_result.RewardMoney > 0)) {
                    _context3.next = 62;
                    break;
                  }
                  resultNext = resultList[_i + 1]; //                //
                  YcsUtils.instance.playOneShot(eSound.clear_0);
                  _i2 = 0;
                case 17:
                  if (!(_i2 < this.Ycs_symbolList.length)) {
                    _context3.next = 26;
                    break;
                  }
                  Ycs_symbolList = this.Ycs_symbolList[_i2];
                  if (!Ycs_symbolList.isHorizontal) {
                    _context3.next = 23;
                    break;
                  }
                  _context3.next = 22;
                  return Ycs_symbolList.doCaiShenEffect();
                case 22:
                  return _context3.abrupt("break", 26);
                case 23:
                  _i2++;
                  _context3.next = 17;
                  break;
                case 26:
                  this.showMask();

                  //                //doEffect
                  arrPro = [];
                  for (_i3 = 0; _i3 < this.Ycs_symbolList.length; _i3++) {
                    arrPro.push(this.Ycs_symbolList[_i3].doEffect());
                  }
                  _context3.next = 31;
                  return Promise.all(arrPro);
                case 31:
                  //                //doCatNumCollect
                  //                //----start collect
                  arrPro = [];
                  for (_i4 = 0; _i4 < this.Ycs_symbolList.length; _i4++) {
                    arrPro.push(this.Ycs_symbolList[_i4].doCatNumCollect());
                  }
                  _context3.next = 35;
                  return Promise.all(arrPro);
                case 35:
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var winRate, isBigWin, Sprite_tipBg, isRedEffect, aniName, Node_effect, com_Ycs_winTip;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          winRate = _result.RewardMoney / (YcsModel.instance.curBet * 1000);
                          isBigWin = false;
                          if (YcsModel.instance.freeStatus == eRunStatus.NONE) {
                            isBigWin = winRate > 10;
                            if (isBigWin) {
                              _this8.Sprite_tipBg.spriteFrame = _this8.arrTipBgSpFrame[1]; //
                              _this8.Node_helpTip.getComponent(UITransform).width = 560; //624
                              _this8.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
                            }
                          }

                          //                    //显示得分 tip
                          Sprite_tipBg = _this8.Node_tipEffect.node.parent.getChildByName("Sprite_tipBg");
                          Sprite_tipBg.active = false;
                          _this8.Node_tipEffect.node.active = true;
                          isRedEffect = false;
                          if (!isRedEffect) {
                            aniName = YcsModel.instance.freeStatus != eRunStatus.NONE || isBigWin ? "red_win" : "green_win";
                            _this8.Node_tipEffect.setAnimation(0, aniName, false);
                            _this8.Node_tipEffect.setCompleteListener(function () {
                              _this8.Node_tipEffect.setCompleteListener(null);
                              _this8.Node_tipEffect.node.active = false;
                              Sprite_tipBg.active = true;
                            });
                            if (aniName == "red_win") {
                              Node_effect = _this8.Node_tipEffect.node.getChildByName("Node_effect");
                              Node_effect.active = true;
                              Node_effect.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                              Node_effect.getComponent(sp.Skeleton).setCompleteListener(function () {
                                Node_effect.getComponent(sp.Skeleton).setCompleteListener(null);
                                Node_effect.active = false;
                              });
                            }
                          }
                          _this8.Node_helpTip.active = false;
                          _this8.Node_winTip.active = true;
                          com_Ycs_winTip = _this8.Node_winTip.getComponent(Ycs_winTip);
                          if (!_this8.Label_catNum.active) {
                            com_Ycs_winTip.doShow(_result.RewardMoney);
                          } else {
                            com_Ycs_winTip.doShowRate(_result.RewardMoney / _result.ExtraOdd);
                          }
                        case 12:
                        case "end":
                          return _context2.stop();
                      }
                    }, _loop);
                  });
                case 36:
                  return _context3.delegateYield(_loop(), "t0", 37);
                case 37:
                case 38:
                  gts.Debug.LogWarr("==Ycs_symbol.catCount==" + Ycs_symbol.catCount);
                  Ycs_symbol.catCount = 0;
                  YcsModel.instance.curTotalWin += _result.RewardMoney;
                  if (YcsModel.instance.freeStatus != eRunStatus.NONE) {
                    YcsModel.instance.totalFreeWin += _result.RewardMoney;
                  }
                  curTotalWin = YcsModel.instance.freeStatus != eRunStatus.NONE ? YcsModel.instance.totalFreeWin : YcsModel.instance.curTotalWin; //                //gengxin
                  YcsUtils.instance.updateLabelAdd(this.Label_win, curTotalWin, false, curTotalWin - _result.RewardMoney);
                  EventManager.instance.emit(eEvent.updateWin, curTotalWin);
                  YcsUtils.instance.playOneShot(eSound["break"]);
                  this.showMask(false);
                  arrPro = [];
                  for (_i5 = 0; _i5 < this.Ycs_symbolList.length; _i5++) {
                    arrPro.push(this.Ycs_symbolList[_i5].doClear());
                  }
                  _context3.next = 51;
                  return Promise.all(arrPro);
                case 51:
                  //                //play sound
                  if (_i == 2) {
                    YcsUtils.instance.playOneShot(eSound.nice_0);
                  } else if (_i > 2) {
                    YcsUtils.instance.playOneShot(eSound.nice_1);
                  }

                  //                //drop
                  arrPro = [];
                  for (_i6 = 0; _i6 < this.Ycs_symbolList.length; _i6++) {
                    arrPro.push(this.Ycs_symbolList[_i6].doDrop(resultNext));
                  }
                  _context3.next = 56;
                  return Promise.all(arrPro);
                case 56:
                  gts.Debug.Log("==========doDrop========");
                  _symRate = 1;
                  for (_i7 = 0; _i7 < resultNext.AllPosMsg.length; _i7++) {
                    _symRate *= resultNext.AllPosMsg[_i7].length;
                  }
                  if (parseInt(this.Label_symRate.string) != _symRate) {
                    YcsUtils.instance.updateLabelNomal(this.Label_symRate, _symRate);
                  }

                  //                // gts.Debug.Log("=doEnd=" + i + "==" + "=result=" + JSON.stringify(result));
                  _context3.next = 68;
                  break;
                case 62:
                  if (!(YcsModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context3.next = 68;
                    break;
                  }
                  _arrPro = [];
                  for (_i8 = 0; _i8 < this.Ycs_symbolList.length; _i8++) {
                    _arrPro.push(this.Ycs_symbolList[_i8].doCatNumCollect(1));
                  }
                  _context3.next = 67;
                  return Promise.all(_arrPro);
                case 67:
                  Ycs_symbol.catCount = 0;
                case 68:
                  _i++;
                  _context3.next = 11;
                  break;
                case 71:
                  this.showMask(false);
                  delayStart = 0.25; // let curTotalWin = YcsModel.instance.freeStatus != YcsDef.eRunStatus.NONE ? YcsModel.instance.totalFreeWin : YcsModel.instance.curTotalWin;
                  if (YcsModel.instance.curTotalWin > 0) {
                    this.Node_helpTip.active = false;
                    this.Node_winTip.active = true;
                    com_Ycs_winTip = this.Node_winTip.getComponent(Ycs_winTip);
                    com_Ycs_winTip.doShow(YcsModel.instance.curTotalWin, true);
                    delayStart = 1.0;
                  }
                  if (YcsModel.instance.endBalance > 0) {
                    YcsModel.instance.curBalance = YcsModel.instance.endBalance;
                    YcsModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  if (!YcsModel.instance.isAuto) {
                    this.Button_buy.interactable = true;

                    //            // this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.interactable = true;

                    //            // YcsUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                  }

                  YcsModel.instance.gameStatus = eRunStatus.NONE;
                  if (!this.Button_buy.node.active && YcsModel.instance.freeStatus == eRunStatus.NONE) {
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
                  if (YcsModel.instance.freeStatus != eRunStatus.NONE) {
                    doContinue = function doContinue() {
                      _this8.scheduleOnce(function () {
                        _this8.Node_bigWin.active = false;
                        if (YcsModel.instance.totalFreeTimes > 0) {
                          YcsCtrl.instance.reqBet();
                        } else {
                          YcsModel.instance.freeStatus = eRunStatus.END;
                          _this8.doEndFree();
                        }
                      }, delayStart);
                    };
                    totalRate = YcsModel.instance.curTotalWin / (YcsModel.instance.curBet * 1000); //            // //TEST
                    //            // totalRate = YcsModel.instance.curTotalWin > 0 ? Math.floor(Math.random() * 50 + 10) : 0;
                    if (totalRate >= 20) {
                      //                //大奖显示
                      this.Node_bigWin.parent = this.node;
                      this.Node_bigWin.getComponent(UITransform).priority = 52;
                      this.Node_bigWin.active = true;
                      this.Node_bigWin.scale = v3(0.5, 0.5, 1);
                      Node_bigWinEffect = this.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                      lv = totalRate < 35 ? 1 : totalRate < 50 ? 2 : 3;
                      Node_bigWinEffect.setAnimation(0, "lv" + lv + "_win", false);
                      Node_bigWinEffect.addAnimation(0, "lv" + lv + "_idle", true);
                      Label_totalWin = this.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                      Label_totalWin.string = "";
                      tween(this.Node_bigWin).to(0.1, {
                        scale: v3(1.2, 1.2, 1)
                      }, {
                        easing: "quadOut"
                      }).to(0.05, {
                        scale: v3(1.0, 1.0, 1)
                      }, {
                        easing: "quadIn"
                      }).call(function () {
                        YcsUtils.instance.playSound(eSound.bigWin);
                        var totalTime = lv * 5;
                        var dt = 0.05;
                        var updateTimes = totalTime / dt;
                        var destWin = YcsModel.instance.curTotalWin;
                        var disWin = Math.floor(YcsModel.instance.curTotalWin / updateTimes);
                        var curTotalWin = 0;
                        tween(Label_totalWin.node).repeatForever(
                        //                                // updateTimes + 1,
                        tween(Label_totalWin.node).delay(dt).call(function () {
                          curTotalWin += disWin;
                          if (curTotalWin > destWin) {
                            YcsUtils.instance.stopSound(eSound.bigWin);
                            Tween.stopAllByTarget(Label_totalWin.node);
                            curTotalWin = destWin;
                            delayStart = 1.0;
                            doContinue();
                          }
                          Label_totalWin.string = YcsUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                        })).start();
                      }).start();
                    } else {
                      doContinue();
                    }
                  } else if (YcsModel.instance.totalFreeTimes > 0) {
                    this.showFree();
                  } else if (YcsModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //                // this.doStartRun();
                      YcsCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 79:
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
        _proto.hideFree = function hideFree() {
          var _this9 = this;
          this.unschedule(this.hideFree);

          //        // if (YcsModel.instance.freeStatus != YcsDef.eRunStatus.NONE) {
          YcsModel.instance.freeStatus = eRunStatus.NONE;
          YcsModel.instance.totalFreeTimes = 0;
          YcsModel.instance.totalRate = 8;
          AudioManager.instance.resumeMusic();
          YcsUtils.instance.stopSound(eSound.free_winEffect);
          YcsUtils.instance.stopSound(eSound.freeEnd_1);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this9.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;
            var Sprite_frame = find("Node_main/Sprite_frame", Node_enter);
            Sprite_frame.getComponent(UIOpacity).opacity = 255;
            Sprite_frame.active = false;
            var Node_end = _this9.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            var Node_freeInfo = _this9.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = false;
            _this9.Node_bigWin.active = false;
            if (YcsModel.instance.totalFreeWin > 0) {
              _this9.Node_helpTip.active = false;
              _this9.Node_winTip.active = true;
              var com_Ycs_winTip = _this9.Node_winTip.getComponent(Ycs_winTip);
              com_Ycs_winTip.doShow(YcsModel.instance.totalFreeWin, true);
            }
          }).delay(0.5).call(function () {
            _this9.Node_free.active = false;
            if (YcsModel.instance.isAuto) {
              _this9.scheduleOnce(function () {
                YcsCtrl.instance.reqBet();
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

            // this.Button_times.interactable = false;
            // this.Button_rate.interactable = false;
            // this.Button_enterFree.interactable = false;
            Common.setButtonEnableWithGray(this.Button_times, false);
            Common.setButtonEnableWithGray(this.Button_rate, false);
            Common.setButtonEnableWithGray(this.Button_enterFree, false);
            this.scheduleOnce(function () {
              // cc.audioEngine.pauseMusic();
              AudioManager.instance.pauseMusic();
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

          //        //鱼
          this.Node_fish.spriteFrame = this.arrFishSpFrame[0];

          //        //滚动提示BG
          this.Sprite_tipBg.spriteFrame = this.arrTipBgSpFrame[0];

          //        //
          this.Node_down.spriteFrame = this.arrDownSpFrame[0];

          //        //格子背景
          this.Node_centerBg.spriteFrame = this.arrCenterSpFrame[0];
          this.Node_effect_freeLight.active = false;
          this.clearCatNum();
          this.Label_symRate.font = YcsUtils.instance.getFontData("golden_04");
          this.Node_public.setPosition(this.Node_public.position.x, 236);
          this.Node_helpTip.getComponent(UITransform).width = 624;
          this.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_ELLIPSE;
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Button_buy.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this11 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 255;

          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          var Node_main = Node_enter.getChildByName("Node_main");
          Node_main.active = false;
          var Node_startTip = Node_enter.getChildByName("Node_startTip");
          Node_startTip.active = true;
          Node_startTip.getComponent(UIOpacity).opacity = 255;
          var Node_effect = Node_startTip.getChildByName("Node_effect");
          Node_effect.active = true;
          Node_effect.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          YcsUtils.instance.playSound(eSound.zhanKai);
          var Node_tipInfo = Node_startTip.getChildByName("Node_tipInfo");
          Node_tipInfo.active = true;
          Node_tipInfo.getComponent(UIOpacity).opacity = 0;
          tween(Node_tipInfo.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).start();
          var Label_scatterNum = Node_tipInfo.getChildByName("Label_scatterNum");
          Label_scatterNum.active = true;
          Label_scatterNum.getComponent(Label).string = "" + ((YcsModel.instance.totalFreeTimes - 8) / 2 + 4);
          var Label_times = Node_tipInfo.getChildByName("Label_freeTimes");
          Label_times.getComponent(Label).string = "" + YcsModel.instance.totalFreeTimes;
          var Label_rate = Node_tipInfo.getChildByName("Label_freeRate");
          Label_rate.getComponent(Label).string = "*" + YcsModel.instance.totalRate;
          YcsModel.instance.totalFreeWin = 0;
          tween(this.Node_free).delay(2.0).call(function () {
            tween(Node_startTip.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).call(function () {
              Node_startTip.active = false;
              YcsUtils.instance.playSound(eSound.zhanKai);
            }).start();
            Node_main.active = true;
            var Node_effect = Node_main.getChildByName("Node_effect");
            Node_effect.active = true;
            Node_effect.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
            Node_effect.getComponent(sp.Skeleton).setCompleteListener(function () {
              Node_effect.getComponent(sp.Skeleton).setCompleteListener(null);
              Node_effect.active = false;

              // this.Button_times.interactable = true;
              // this.Button_rate.interactable = true;
              // this.Button_enterFree.interactable = true;
              Common.setButtonEnableWithGray(_this11.Button_times, true);
              Common.setButtonEnableWithGray(_this11.Button_rate, true);
              Common.setButtonEnableWithGray(_this11.Button_enterFree, true);
            });
            _this11.scheduleOnce(function () {
              var Sprite_frame = Node_main.getChildByName("Sprite_frame");
              Sprite_frame.active = true;
              // cc.tween(Sprite_frame.getComponent(cc.UIOpacity)).delay(0.75).to(1.25, { opacity: 255 }).start();
              var Node_enter = _this11.Node_free.getChildByName("Node_enter");
              var Sprite_page = find("Node_main/Sprite_frame/Node_timesRoot/Sprite_page", Node_enter);
              Sprite_page.angle = 0;
              Sprite_page = find("Node_main/Sprite_frame/Node_rateRoot/Sprite_page", Node_enter);
              Sprite_page.angle = 0;
              var Sprite_ruler_times = find("Node_main/Sprite_frame/Node_timesRoot/Sprite_ruler", Node_enter);
              Sprite_ruler_times.angle = 20 * (YcsModel.instance.totalFreeTimes - 8) / 2;
              var Sprite_ruler_rate = find("Node_main/Sprite_frame/Node_rateRoot/Sprite_ruler", Node_enter);
              Sprite_ruler_rate.angle = 0 / 2;
              var Label_times = find("Node_timesRoot/Label_times", Sprite_frame);
              Label_times.getComponent(Label).string = "" + YcsModel.instance.totalFreeTimes;
              var Label_rate = find("Node_rateRoot/Label_rate", Sprite_frame);
              Label_rate.getComponent(Label).string = "*" + YcsModel.instance.totalRate;
            }, 0.75);
            _this11.scheduleOnce(_this11.doEnterFree, 60);
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          var _this12 = this;
          if (YcsModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          YcsModel.instance.freeStatus = eRunStatus.RUNNING;
          this.unschedule(this.doEnterFree);
          var doEnter = function doEnter() {
            _this12.Node_info.node.active = false;

            //            //背景
            _this12.node.getComponent(Sprite).spriteFrame = _this12.arrBgSpFrame[1];

            //            //房子背景
            _this12.Node_roomBg.spriteFrame = _this12.arrRoomSpFrame[1];

            //            //鱼
            _this12.Node_fish.spriteFrame = _this12.arrFishSpFrame[1];

            //            //滚动提示BG
            _this12.Sprite_tipBg.spriteFrame = _this12.arrTipBgSpFrame[1]; //

            _this12.Node_down.spriteFrame = _this12.arrDownSpFrame[1];

            //            //格子背景
            _this12.Node_centerBg.spriteFrame = _this12.arrCenterSpFrame[1];
            _this12.Node_effect_freeLight.active = true;
            if (_this12.Label_catNum) {
              _this12.Label_catNum.active = false;
            }
            _this12.Node_helpTip.getComponent(UITransform).width = 560; //624
            _this12.Node_helpTip.getComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            _this12.Node_public.setPosition(_this12.Node_public.position.x, -17);
            _this12.Node_action.active = false;
            _this12.Node_menu.active = false;
            _this12.Button_menu.node.active = false;
            _this12.Button_run.node.active = false;
            _this12.Button_buy.node.active = false;
            _this12.Label_symRate.font = YcsUtils.instance.getFontData("golden_03");
            var Node_freeInfo = _this12.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + YcsModel.instance.totalFreeTimes;
            var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = _this12.arrTitle[0];
            _this12.setFreeCatNum();
            AudioManager.instance.resumeMusic();
            _this12.scheduleOnce(function () {
              YcsCtrl.instance.reqBet();
            }, 2.0);
          };
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          if (Node_enter.active) {
            var Node_startTip = Node_enter.getChildByName("Node_startTip");
            Node_startTip.getComponent(UIOpacity).opacity = 255;
            Node_startTip.active = true;
            var Node_effect = Node_startTip.getChildByName("Node_effect");
            Node_effect.active = true;
            Node_effect.getComponent(sp.Skeleton).setAnimation(0, "end", false);
            var Node_tipInfo = Node_startTip.getChildByName("Node_tipInfo");
            Node_tipInfo.active = true;
            Node_tipInfo.getComponent(UIOpacity).opacity = 0;
            YcsUtils.instance.playSound(eSound.zhanKai);
            var Label_scatterNum = Node_tipInfo.getChildByName("Label_scatterNum");
            Label_scatterNum.active = false;
            tween(Node_tipInfo.getComponent(UIOpacity)).delay(0.5).to(0.5, {
              opacity: 255
            }).call(function () {
              var Label_times = Node_tipInfo.getChildByName("Label_freeTimes");
              Label_times.getComponent(Label).string = "" + YcsModel.instance.totalFreeTimes;
              var Label_rate = Node_tipInfo.getChildByName("Label_freeRate");
              Label_rate.getComponent(Label).string = "*" + YcsModel.instance.totalRate;
            }).start();
            tween(Node_startTip).delay(2.0).call(function () {
              Node_tipInfo.active = false;
              Node_effect.active = false;
              Node_startTip.active = false;
              var Node_main = Node_enter.getChildByName("Node_main");
              var Sprite_frame = Node_main.getChildByName("Sprite_frame");
              tween(Sprite_frame.getComponent(UIOpacity)).delay(0.5).to(0.5, {
                opacity: 0
              }).start();
              var Node_mainEffect = Node_main.getChildByName("Node_effect");
              Node_mainEffect.active = true;
              Node_mainEffect.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
              Node_mainEffect.getComponent(sp.Skeleton).setCompleteListener(function () {
                Node_mainEffect.getComponent(sp.Skeleton).setCompleteListener(null);
                Node_mainEffect.active = false;
                Sprite_frame.active = false;
                Node_main.active = false;
                Node_enter.active = false;
              });
              _this12.scheduleOnce(doEnter, 0.5);
            }).start();
          } else {
            doEnter();
          }
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
            YcsUtils.instance.updateLabelAdd(Label_totalWin.getComponent(Label), YcsModel.instance.totalFreeWin);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(this.setEndFree, 0.2);

          // cc.audioEngine.pauseMusic();
          AudioManager.instance.pauseMusic();
          YcsUtils.instance.playSound(eSound.free_winEffect, true);

          //        //2.0秒后返回正常
          this.scheduleOnce(this.hideFree, 8);
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
        _proto.setFreeCatNum = function setFreeCatNum() {
          if (!this.Label_catNum.active) {
            this.Label_catNum.active = true;
          }
          this.Label_catNum.getComponent(UIOpacity).opacity = 0;
          tween(this.Label_catNum.getComponent(UIOpacity)).to(0.5, {
            opacity: 255
          }).start();
          //        // this.Label_catNum.y = -270;
          //        // this.Label_catNum.scale = 0.5;
          this.Label_catNum.getComponent(Label).string = "*" + YcsModel.instance.totalRate;
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
              }).call(function () {
                resolve();
              }).call(function () {
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
          //        // if (this.Label_catNum.active) {
          //        //     cc.tween(this.Label_catNum)
          //        //         .to(0.2, { scale: this.Label_catNum.scale * 0.4, y: this.Label_catNum.y + 27 })
          //        //         .start();
          //        // }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(YcsModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            YcsUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        };
        _proto.doBoYiBoResult = function doBoYiBoResult(isWin) {
          var _this15 = this;
          if (isWin) {
            YcsModel.instance.boType == "count" ? YcsModel.instance.totalFreeTimes += 2 : YcsModel.instance.totalRate += 2;
          }

          //        //doRun
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          var Sprite_page = null;
          if (YcsModel.instance.boType == "count") {
            //            //次数
            Sprite_page = find("Node_main/Sprite_frame/Node_timesRoot/Sprite_page", Node_enter);
          } else {
            Sprite_page = find("Node_main/Sprite_frame/Node_rateRoot/Sprite_page", Node_enter);
          }
          Sprite_page.angle = Sprite_page.angle % 360;

          //        //中 223/502  不中 141-222退出
          var randAngle = isWin ? Math.floor(Math.random() * (502 - 224) + 224) : Math.floor(Math.random() * 80 + 142);
          var runAngle = Sprite_page.angle > randAngle ? 360 - Sprite_page.angle + randAngle : randAngle - Sprite_page.angle;
          runAngle += Math.floor(Math.random() * 2 + 3) * 360;
          YcsUtils.instance.playSound(eSound.zhuanDong, true);
          var dtTimes = runAngle / 360;
          tween(Sprite_page).to(dtTimes, {
            angle: runAngle + Sprite_page.angle
          }, {
            easing: "cubicInOut"
          }).call(function () {
            YcsUtils.instance.stopSound(eSound.zhuanDong);
            if (isWin) {
              //                    //更新次数
              if (YcsModel.instance.boType == "count") {
                var Label_times = find("Node_main/Sprite_frame/Node_timesRoot/Label_times", Node_enter);
                YcsUtils.instance.updateLabel(Label_times, YcsModel.instance.totalFreeTimes);
                var Sprite_ruler = find("Node_main/Sprite_frame/Node_timesRoot/Sprite_ruler", Node_enter);
                tween(Sprite_ruler).to(0.25, {
                  angle: Sprite_ruler.angle + 20
                }).start();
              } else {
                var Label_rate = find("Node_main/Sprite_frame/Node_rateRoot/Label_rate", Node_enter);
                YcsUtils.instance.updateLabel(Label_rate, "*" + YcsModel.instance.totalRate);
                var _Sprite_ruler = find("Node_main/Sprite_frame/Node_rateRoot/Sprite_ruler", Node_enter);
                tween(_Sprite_ruler).to(0.25, {
                  angle: _Sprite_ruler.angle - 20
                }).start();
              }

              // this.Button_times.interactable = YcsModel.instance.totalFreeTimes < 20;
              // this.Button_rate.interactable = YcsModel.instance.totalRate < 20;
              // this.Button_enterFree.interactable = true;
              Common.setButtonEnableWithGray(_this15.Button_times, YcsModel.instance.totalFreeTimes < 20);
              Common.setButtonEnableWithGray(_this15.Button_rate, YcsModel.instance.totalRate < 20);
              Common.setButtonEnableWithGray(_this15.Button_enterFree, true);
              YcsUtils.instance.playOneShot(eSound.shuZiBianHua);
              _this15.scheduleOnce(_this15.doEnterFree, 60);
            } else {
              YcsUtils.instance.playOneShot(eSound.zhuanShibai);
              var Node_resultTip = find("Node_main/Sprite_frame/Node_resultTip", Node_enter);
              Node_resultTip.active = true;
              Node_resultTip.getComponent(UIOpacity).opacity = 0;
              tween(Node_resultTip.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).delay(1.0).call(function () {
                Node_resultTip.active = false;
                _this15.hideFree();
              }).start();
            }
          }).start();
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this16 = this;
          switch (event) {
            case eProto.HD_info:
              {
                var AllPosMsg = YcsModel.instance.gameInfo.Res[YcsModel.instance.gameInfo.Res.length - 1].AllPosMsg;
                //                //横向
                var InitExtraPos = [];
                for (var i = 0; i < 4; i++) {
                  var InitPosMsg = AllPosMsg[i + 1];
                  var symbolInfo = InitPosMsg[InitPosMsg.length - 1];
                  if (symbolInfo.Sym == eSymbol.CAISHEN) {
                    symbolInfo.Sym = Math.floor(Math.random() * eSymbol.Q) + 2;
                  }
                  InitExtraPos.push(symbolInfo);
                }
                this.Ycs_symbolList[0].init(InitExtraPos);

                //                //纵向
                for (var _i9 = 1; _i9 < this.Ycs_symbolList.length; _i9++) {
                  var _InitPosMsg = AllPosMsg[_i9 - 1];
                  this.Ycs_symbolList[_i9].init(_InitPosMsg);
                }
                this.scheduleOnce(function () {
                  _this16.Button_run.interactable = true;
                }, 1.0);
                this.Label_bet.string = YcsUtils.instance.numberFormat(YcsModel.instance.curBet, 2.0) + "K";
                var symRate = 1;
                for (var _i10 = 0; _i10 < AllPosMsg.length; _i10++) {
                  symRate *= AllPosMsg[_i10].length;
                }
                YcsUtils.instance.updateLabelNomal(this.Label_symRate, symRate);
                var totalWin = 0;
                var resultList = YcsModel.instance.gameInfo.Res;
                for (var _i11 = 0; _i11 < resultList.length; _i11++) {
                  var result = resultList[_i11];
                  if (result.RewardMoney > 0) {
                    totalWin += result.RewardMoney;
                  }
                }
                if (totalWin > 0) {
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  var com_Ycs_winTip = this.Node_winTip.getComponent(Ycs_winTip);
                  com_Ycs_winTip.doShow(totalWin, true);
                  YcsUtils.instance.updateLabelAdd(this.Label_win, totalWin);
                }
                if (YcsModel.instance.totalFreeTimes > 0) {
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
                //                // cc.Tween.stopAllByTarget(this.Button_run.node);
                //                // YcsUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                this.doStartRun();
                this.updateGold();
                break;
              }
            case eProto.HD_BoYiBo:
              {
                this.doBoYiBoResult(data.win);
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
        return YcsGameView;
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Ycs_symbolList", [_dec9], {
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
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "arrFishSpFrame", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "arrTipBgSpFrame", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "arrDownSpFrame", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_down", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_roomBg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_centerBg", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_fish", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tipBg", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "Node_effect_freeLight", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "Button_times", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "Button_rate", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "Button_enterFree", [_dec41], {
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

System.register("chunks:///_virtual/YcsModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './YcsDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b6b81znFZBFyb6pgLDdzqOv", "YcsModel", undefined);
      var YcsModel = exports('YcsModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(YcsModel, _GameDef$BaseSington);
        function YcsModel() {
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
        var _proto = YcsModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return YcsModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YcsScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './YcsDef.ts', './YcsUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, YcsUtils, Common;
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
      YcsUtils = module.YcsUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e0624rxK91IR4gPsuOTnIq2", "YcsScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var YcsScene = exports('default', (_dec = ccclass("YcsScene"), _dec2 = menu("game/YcsGame/YcsScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(YcsScene, _Component);
        function YcsScene() {
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
        var _proto = YcsScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          YcsUtils.instance.bundle = assetManager.getBundle(cBundle);
          YcsUtils.instance.preLoad();
          YcsUtils.instance.playBgMusic();
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
            //            // if (!YcsUtils.instance.isChangeOrientation()) {
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
            YcsUtils.instance.bundle.load("prefab/YcsGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (YcsUtils.instance.isChangeOrientation()) {
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
        return YcsScene;
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

System.register("chunks:///_virtual/YcsUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './YcsDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, Sprite, sp, sys, SpriteFrame, Font, GameDef, AudioManager, eSound, eSymbol, Common;
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
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f1eccoif1dNOZK5lKkyL8iY", "YcsUtils", undefined);
      var symbol_nomal_icon = ["icon_scatter", "icon_wild", "icon_Lion", "icon_Toad", "icon_fish", "icon_Red_packet", "icon_gong", "icon_Bamboo", "icon_A", "icon_K", "icon_Q", "icon_J", "icon_10", "icon_scatter_02"];
      var symbol_aniName = ["icon_shizi", "icon_cancu", "icon_yu", "icon_hongbao", "icon_luo", "icon_bianpao", "icon_a", "icon_k", "icon_q", "icon_j", "icon_10"];
      var YcsUtils = exports('YcsUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(YcsUtils, _GameDef$BaseSington);
        function YcsUtils() {
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
        var _proto = YcsUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/YcsGameView");
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
                  arrHLoad.push(this.asyncLoad("font/golden_03", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("font/golden_04", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
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
          YcsUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              YcsUtils.instance.stopSound(eSound.numAdd);
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
          YcsUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              YcsUtils.instance.stopSound(eSound.numAdd);
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
          if (rim === void 0) {
            rim = 0;
          }
          var symbol = null;
          switch (symbolIndex) {
            case eSymbol.A:
            case eSymbol.K:
            case eSymbol.Q:
            case eSymbol.J:
            case eSymbol.TEN:
              {
                symbol = rim == 0 ? "box_yellow_0" + length : rim == 1 ? "box_yellow_silver_0" + length : "box_yellow_gold_0" + length;
                break;
              }
            case eSymbol.BIANPAO:
            case eSymbol.LUO:
              {
                symbol = rim == 0 ? "box_green_0" + length : rim == 1 ? "box_green_silver_0" + length : "box_green_gold_0" + length;
                break;
              }
            case eSymbol.HONGBAO:
            case eSymbol.JINLI:
              {
                symbol = rim == 0 ? "box_blue_0" + length : rim == 1 ? "box_blue_silver_0" + length : "box_blue_gold_0" + length;
                break;
              }
            case eSymbol.SHITOU:
            case eSymbol.CHANCHU:
              {
                symbol = rim == 0 ? "box_purple_0" + length : rim == 1 ? "box_purple_silver_0" + length : "box_purple_gold_0" + length;
                break;
              }
          }
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
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle, isHorizontal) {
          if (length === void 0) {
            length = 1;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          if (isHorizontal === void 0) {
            isHorizontal = false;
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
                if (length == 1) {
                  strAni = "idle"; //isIdle ? "idle" : "boom";
                } else if (isHorizontal) {
                  strAni = isIdle ? "idle" : "win";
                } else {
                  strAni = "lv" + length;
                }
                break;
              }
            case eSymbol.CAISHEN:
              {
                strAni = isIdle ? "idle" : "win";
                break;
              }
            default:
              {
                strAni = symbol_aniName[symbolIndex - eSymbol.SHITOU];
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
            case eSymbol.CAISHEN:
              {
                strAni = "heng_wild";
                break;
              }
            default:
              {
                strAni = index < eSymbol.A ? "icon2" : "icon";
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
        return YcsUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/YcsGame', 'chunks:///_virtual/YcsGame'); 
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