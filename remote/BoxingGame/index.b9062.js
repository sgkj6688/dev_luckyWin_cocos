System.register("chunks:///_virtual/Boxing_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "5feaeWF8ZRBo7sTgMsA0+KK", "Boxing_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Boxing_btnEffect = exports('default', (_dec = ccclass("BoxingBtnEffect"), _dec2 = menu("game/BoxingGame/Boxing_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Boxing_btnEffect, _Component);
        function Boxing_btnEffect() {
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
        var _proto = Boxing_btnEffect.prototype;
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

        _createClass(Boxing_btnEffect, [{
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

        return Boxing_btnEffect;
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

System.register("chunks:///_virtual/Boxing_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoxingCtrl.ts', './BoxingDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, BoxingCtrl, eProto, GameDef, Common;
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
      BoxingCtrl = module.BoxingCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7854dCEYKlJeY/iv18do+dV", "Boxing_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Boxing_history = exports('default', (_dec = ccclass("BoxingHistory"), _dec2 = menu("game/BoxingGame/Boxing_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Boxing_history, _GameDef$BaseView);
        function Boxing_history() {
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
        var _proto = Boxing_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BoxingCtrl.instance);
          BoxingCtrl.instance.reqHistory();
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
          BoxingCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          BoxingCtrl.instance.reqHistory(start);
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
        return Boxing_history;
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

System.register("chunks:///_virtual/Boxing_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './BoxingUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, BoxingUtils, Common;
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
      BoxingUtils = module.BoxingUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "dd865/BQztMoJe01LUF3ZcO", "Boxing_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Boxing_historyItem = exports('default', (_dec = ccclass("BoxingHistoryItem"), _dec2 = menu("game/BoxingGame/Boxing_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Boxing_historyItem, _Component);
        function Boxing_historyItem() {
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
        var _proto = Boxing_historyItem.prototype;
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
          this.Label_bet.string = BoxingUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + BoxingUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + BoxingUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Boxing_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Boxing_historyItem;
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

System.register("chunks:///_virtual/Boxing_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './EventManager.ts', './BoxingModel.ts', './BoxingDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, v3, instantiate, Label, Toggle, UIOpacity, tween, sys, Component, DataManager, UserKey, EventManager, BoxingModel, eEvent;
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
      v3 = module.v3;
      instantiate = module.instantiate;
      Label = module.Label;
      Toggle = module.Toggle;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      sys = module.sys;
      Component = module.Component;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BoxingModel = module.BoxingModel;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6f06anIXHdBX71XWWIFOYNJ", "Boxing_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Boxing_setBase = exports('default', (_dec = ccclass("BoxingSetBase"), _dec2 = menu("game/BoxingGame/Boxing_setBase"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Boxing_setBase, _Component);
        function Boxing_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "toggleTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ToggleContainer", _descriptor2, _assertThisInitialized(_this));
          _this.firstSet = true;
          return _this;
        }
        var _proto = Boxing_setBase.prototype;
        _proto.onLoad = function onLoad() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          for (var i = 1; i < 15; i++) {
            var toggleTemp = instantiate(this.toggleTemp);
            toggleTemp.name = "" + i;
            toggleTemp.getChildByName("Label_score").getComponent(Label).string = BoxingModel.instance.gameInfo.betList[i] / 1000 + "K";
            this.ToggleContainer.addChild(toggleTemp);
          }
          var mask = this.node.getChildByName("mask");
          mask.on(Node.EventType.TOUCH_END, this.hide, this);
        };
        _proto.start = function start() {
          var baseBetIndex = BoxingModel.instance.getBaseIndex();
          var curToggle = this.ToggleContainer.getChildByName("" + baseBetIndex);
          curToggle.getComponent(Toggle).isChecked = true;
          this.firstSet = false;
        };
        _proto.onEnable = function onEnable() {
          this.node.scale = v3(this.node.scale.x, 0, 1);
          this.node.getComponent(UIOpacity).opacity = 0;
          tween(this.node).to(0.1, {
            scale: v3(this.node.scale.x, 1.3, 1)
          }, {
            easing: "quadOut"
          }).to(0.05, {
            scale: v3(this.node.scale.x, 1.25, 1)
          }, {
            easing: "quadIn"
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
        };
        _proto.hide = function hide() {
          var _this2 = this;
          tween(this.node).to(0.05, {
            scale: v3(this.node.scale.x, 1.3, 1)
          }, {
            easing: "quadOut"
          }).to(0.1, {
            scale: v3(this.node.scale.x, 0, 1)
          }, {
            easing: "quadIn"
          }).call(function () {
            _this2.node.active = false;
          }).start();
          tween(this.node.getComponent(UIOpacity)).to(0.1, {
            opacity: 0
          }).start();
        }
        //    // update (dt) {}
        ;

        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.firstSet) {
            return;
          }
          var iIndex = parseInt(toggle.node.name);
          gts.Debug.Log("==onToggleClick==baseScore==" + BoxingModel.instance.gameInfo.betList[iIndex]);
          BoxingModel.instance.curBet = BoxingModel.instance.gameInfo.betList[iIndex] / 1000;
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          sys.localStorage.setItem("boxing_baseBetGold" + uid, BoxingModel.instance.gameInfo.betList[iIndex]);
          EventManager.instance.emit(eEvent.updateBaseBet);
          this.hide();
        };
        return Boxing_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toggleTemp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ToggleContainer", [_dec4], {
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

System.register("chunks:///_virtual/Boxing_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoxingModel.ts', './BoxingDef.ts', './EventManager.ts', './BoxingUtils.ts', './Boxing_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, Component, BoxingModel, eRunStatus, eConstDef, eSymbol, eEvent, eSound, EventManager, BoxingUtils, Boxing_symbolItem;
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
      Component = module.Component;
    }, function (module) {
      BoxingModel = module.BoxingModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BoxingUtils = module.BoxingUtils;
    }, function (module) {
      Boxing_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "4ee501NgS5FzqUY+ha4tjpB", "Boxing_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Boxing_symbol = exports('default', (_dec = ccclass("BoxingSymbol"), _dec2 = menu("game/BoxingGame/Boxing_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Boxing_symbol, _Component);
        function Boxing_symbol() {
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
          _this._resultInfoList = [];
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Boxing_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.getResult = function getResult(openResult) {
          var _resultInfoList = [];
          for (var i = 0; i < this.maxIndex; i++) {
            //            //获取结果
            var itemInfo = openResult.openNums[this._iCol][i];
            _resultInfoList.push(itemInfo);
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
              Sym: Math.floor(Math.random() * eSymbol.J) + 1,
              //BoxingDef.eSymbol.A,
              IsReward: false
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (!this.isHorizontal) {
            var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.isHorizontal ? 0 : this.node.getPosition().x, eConstDef.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(Boxing_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol, leftLength);
          this._symbolList.push(com);
          this._curLength++;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          if (!itemInfoList) {
            var symbol = [eSymbol.RedPeople, eSymbol.RedFist, eSymbol.WILD, eSymbol.BlueFist, eSymbol.BluePeople];
            itemInfoList = [];
            for (var i = 0; i < 5; i++) {
              itemInfoList.push({
                Sym: symbol[this._iCol],
                IsReward: false
              });
            }
          }
          this._curLength = 0;
          for (var _i = 0; _i < this.maxIndex; _i++) {
            if (!this.addNewItem(itemInfoList[_i])) {
              break;
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
              BoxingModel.instance.isQuickStop ? function () {
                _this2._runStatus = eRunStatus.STOP;
                _this2._speed = 2500;
              }() : function () {
                _this2._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this2._resultInfoList = _this2.getResult(BoxingModel.instance.betResult.openResult[0]);

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
                      curLength++;
                      if (curLength > _this2.maxIndex) {
                        var symbol = _this2._symbolList.shift();
                        symbol.node.destroyFromParent();
                      }
                    }
                    _this2._curLength = _this2.maxIndex;
                    _this2._runStatus = eRunStatus.NONE;
                    _this2.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator, _step, _symbol;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this2.scheduleOnce(function () {
                              BoxingUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator = _createForOfIteratorHelperLoose(_this2._symbolList); !(_step = _iterator()).done;) {
                              _symbol = _step.value;
                              arrPro.push(_symbol.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (BoxingModel.instance.specialStartCol > 0 && _this2._iCol >= BoxingModel.instance.specialStartCol - 1) {
                              EventManager.instance.emit(eEvent.onSetMask, _this2._iCol);
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
              var offset = _this2._speed * 0.016667;
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
                var _symbol2 = _this2._symbolList[_i2];
                if (!_symbol2.doRunning(offset)) {
                  _this2._symbolList.splice(_i2, 1);
                  _symbol2.node.destroyFromParent();
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
          Boxing_symbol.clearCount = 0;
          Boxing_symbol.rewardCount++;
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            arrPro.push(symbol.doEffect(Boxing_symbol.rewardCount * 0.075));
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(nextReult) {
            var arrPro, _iterator2, _step2, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        // Boxing_symbol.catCount = 0;
                  Boxing_symbol.rewardCount = 0;
                  Boxing_symbol.clearCount++;
                  arrPro = [];
                  for (_iterator2 = _createForOfIteratorHelperLoose(this._symbolList); !(_step2 = _iterator2()).done;) {
                    symbol = _step2.value;
                    if (symbol.itemInfo.IsReward) {
                      arrPro.push(symbol.doClear(Boxing_symbol.clearCount * 0.1));
                    }
                  }
                  _context2.next = 6;
                  return Promise.all(arrPro);
                case 6:
                  return _context2.abrupt("return", this.doDrop(nextReult));
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doClear(_x) {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        _proto.doDrop = function doDrop(nextReult) {
          var _nextResultInfoList = this.getResult(nextReult);

          //        //remove
          for (var iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
            var symbolItem = this._symbolList[iRow];
            if (symbolItem.isClear) {
              symbolItem.node.destroyFromParent();
              this._symbolList.splice(iRow, 1);
              this._curLength--;
            }
          }

          //        //add and drop
          var _curLength = 0;
          var arrPro = [];
          var toLength = this.maxIndex;
          for (var _iRow = 0; _iRow < _nextResultInfoList.length; _iRow++) {
            var _symbolItem = null;
            if (_iRow < this._symbolList.length) {
              _symbolItem = this._symbolList[_iRow];
              _symbolItem.itemInfo = _nextResultInfoList[_iRow];
            } else {
              var nextInfo = _nextResultInfoList[_iRow];
              _symbolItem = this.addNewItem(nextInfo, toLength);
              toLength++;
            }
            arrPro.push(_symbolItem.doDrop(_curLength));
            _curLength++;
          }
          return Promise.all(arrPro);
        };
        return Boxing_symbol;
      }(Component), _class3.rewardCount = 0, _class3.clearCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isHorizontal", [property], {
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

System.register("chunks:///_virtual/Boxing_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BoxingModel.ts', './BoxingDef.ts', './BoxingUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, UITransform, sp, Sprite, tween, v3, Node, Component, BoxingModel, eZindex, eSymbol, eRunStatus, eSound, eConstDef, BoxingUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      sp = module.sp;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      BoxingModel = module.BoxingModel;
    }, function (module) {
      eZindex = module.eZindex;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      BoxingUtils = module.BoxingUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "b21865m/O1PeIUSTcLCeFAs", "Boxing_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Boxing_symbolItem = exports('default', (_dec = ccclass("BoxingSymbolItem"), _dec2 = menu("game/BoxingGame/Boxing_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Boxing_symbolItem, _Component);
        function Boxing_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._isHorizontal = false;
          _this._iCol = 0;
          _this._iRow = 0;
          _this.isClear = false;
          return _this;
        }
        var _proto = Boxing_symbolItem.prototype;
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

        _proto.initItem = function initItem(info, isHorizontal, iCol, iRow) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          if (iRow === void 0) {
            iRow = 0;
          }
          this._iCol = iCol;
          this._iRow = iRow;
          this._isHorizontal = isHorizontal;
          this.node.getComponent(UITransform).priority = iRow;

          //        //test
          //        // this.node.opacity = this._isHorizontal ? 100 : 255;

          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);
        };
        _proto.updateIcon = function updateIcon(Sym, isSpine, isIdle) {
          var _this2 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          return new Promise(function (resolve, reject) {
            isSpine = Sym < eSymbol.RedPeople ? true : isSpine;

            //            //icon
            var Node_symbol = _this2.node.getChildByName("Node_symbol");
            Node_symbol.setPosition(0, 0);
            if (!isSpine) {
              var itemSpine = Node_symbol.getComponent(sp.Skeleton);
              if (itemSpine) {
                itemSpine.enabled = false;
                itemSpine.destroy();
              }
              _this2.scheduleOnce(function () {
                var itemSymbol = BoxingUtils.instance.getItemSymbolIcon(Sym);
                var itemSprite = Node_symbol.getComponent(Sprite);
                if (!itemSprite) {
                  itemSprite = Node_symbol.addComponent(Sprite);
                }
                itemSprite.spriteFrame = itemSymbol;
                resolve();
              });
            } else {
              var itemSprite = Node_symbol.getComponent(Sprite);
              if (itemSprite) {
                itemSprite.enabled = false;
                itemSprite.destroy();
              }
              _this2.scheduleOnce(function () {
                var itemSymbol = BoxingUtils.instance.getSkeletonData(Sym);
                var itemSpine = Node_symbol.getComponent(sp.Skeleton);
                if (!itemSpine) {
                  itemSpine = Node_symbol.addComponent(sp.Skeleton);
                }
                itemSpine.premultipliedAlpha = false;
                itemSpine.skeletonData = itemSymbol;
                itemSpine.setAnimation(0, BoxingUtils.instance.getSymbolAniName(Sym, isIdle), false);
                itemSpine.setCompleteListener(function () {
                  resolve();
                });
              });
            }

            //            //tag update
            Node_symbol.removeAllChildren();
            switch (Sym) {
              case eSymbol.SCATTER:
                {
                  _this2.node.getComponent(UITransform).priority = _this2.node.getComponent(UITransform).priority > eZindex.icon_scatter ? _this2.node.getComponent(UITransform).priority : eZindex.icon_scatter;
                  break;
                }
              default:
                {
                  _this2.node.getComponent(UITransform).priority = _this2.node.getComponent(UITransform).priority > eZindex.icon_scatter ? _this2.node.getComponent(UITransform).priority : eZindex.icon;
                  break;
                }
            }
          });
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateIcon(this.itemInfo.Sym, isSpine, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
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
          var Node_symbol = this.node.getChildByName("Node_symbol");
          switch (runStatus) {
            case eRunStatus.RUNNING:
              {
                _zIndex = BoxingModel.instance.specialStartCol > 0 && this._iCol >= BoxingModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                Node_symbol.scale = v3(1.0, 1.0, 1);
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                Node_symbol.scale = v3(1.0, 1.0, 1);
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                if (this.itemInfo.Sym > eSymbol.BlueFist) {
                  tween(Node_symbol).to(0.1, {
                    scale: v3(1.2, 1.2, 1)
                  }).delay(0.5).to(0.1, {
                    scale: v3(1, 1, 1)
                  }).start();
                }
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (BoxingModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var Node_symbol = this.node.getChildByName("Node_symbol");
          var pos = Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
        };
        _proto.doRunning = function doRunning(offset) {
          var _this3 = this;
          var ret = true;
          this._isHorizontal ? function () {
            _this3.node.setPosition(_this3.node.position.x - offset, _this3.node.position.y);
            var posSide = -186 - 62.5 - 1 / 2 * 125;
            if (_this3.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this3.node.setPosition(_this3.node.position.x, _this3.node.position.y - offset);
            var posSide = -208 - 52 - 1 / 2 * 104;
            if (_this3.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this4 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            _this4._isHorizontal ? function () {
              var pos_0 = _this4.node.getPosition().x + 10 + offset;
              var pos_1 = _this4.node.getPosition().x + offset;
              tween(_this4.node).to(0.1, {
                position: v3(pos_0, _this4.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this4.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this4.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }() : function () {
              var pos_0 = _this4.node.getPosition().y + 10 + offset;
              var pos_1 = _this4.node.getPosition().y + offset;
              tween(_this4.node).to(0.1, {
                position: v3(_this4.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(_this4.node.position.x, pos_1)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this4.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (_this5.itemInfo.IsReward) {
              _this5.scheduleOnce(function () {
                _this5.updateIcon(_this5.itemInfo.Sym, true, false).then(function () {
                  _this5.scheduleOnce(resolve, 0.1);
                });
                _this5.updateZIndex(eRunStatus.CLEAR);
              }, 0.0 + delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doClear = function doClear(delayTime) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (_this6.itemInfo.IsReward) {
              if (_this6.itemInfo.Sym == eSymbol.SCATTER && BoxingModel.instance.freeStatus != eRunStatus.NONE) {
                resolve();
                return;
              }
              _this6.scheduleOnce(function () {
                var newNode = new Node();
                _this6.node.addChild(newNode);
                newNode.scale = v3(0.75, 0.75, 1);
                _this6.scheduleOnce(function () {
                  var boomSpine = newNode.addComponent(sp.Skeleton);
                  boomSpine.premultipliedAlpha = false;
                  boomSpine.timeScale = 1.1;
                  boomSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  boomSpine.skeletonData = BoxingUtils.instance.getSkeletonData("boom");
                  boomSpine.setAnimation(0, "idle", false);
                  boomSpine.setCompleteListener(function () {
                    boomSpine.setCompleteListener(null);
                    newNode.destroyFromParent();
                    //                            // this._spineEffect_kuang = null;

                    resolve();
                  });
                });
                var Node_symbol = _this6.node.getChildByName("Node_symbol");
                tween(Node_symbol).to(0.05, {
                  scale: v3(1.2, 1.2, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                })
                // .to(0.1, { opacity: 0 })
                .call(function () {
                  _this6.isClear = true;
                }).start();
              }, delayTime);
            } else {
              resolve();
            }
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength) {
            var _this7 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    var curPos = _this7._isHorizontal ? _this7.node.getPosition().x : _this7.node.getPosition().y;
                    var toPos = 0;
                    if (_this7._isHorizontal) {
                      //                //横向
                      var offsetX = (toLength + 1 / 2) * eConstDef.cSymbolW;
                      toPos = eConstDef.cSymbolStartX + offsetX;
                    } else {
                      var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
                      toPos = eConstDef.cSymbolStartY + offsetY;
                    }
                    var offset = curPos - toPos;
                    if (offset == 0) {
                      resolve();
                      return;
                    }
                    var dropSpeed = 1000;
                    var duration = offset / dropSpeed;
                    _this7.scheduleOnce(function () {
                      BoxingUtils.instance.playOneShot(eSound.drop_1);
                    }, duration);
                    _this7._isHorizontal ? function () {
                      var pos_1 = _this7.node.getPosition().x - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this7.node).to(duration, {
                        position: v3(pos_1, _this7.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_0, _this7.node.position.y)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(pos_1, _this7.node.position.y)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        resolve();
                      }).start();
                    }() : function () {
                      var pos_1 = _this7.node.getPosition().y - offset;
                      var pos_0 = pos_1 + 10;
                      tween(_this7.node).to(duration, {
                        position: v3(_this7.node.position.x, pos_1)
                      }, {
                        easing: "cubicOut"
                      }).to(0.05, {
                        position: v3(_this7.node.position.x, pos_0)
                      }, {
                        easing: "cubicIn"
                      }).to(0.05, {
                        position: v3(_this7.node.position.x, pos_1)
                      }, {
                        easing: "cubicIn"
                      }).call(function () {
                        resolve();
                      }).start();
                    }();
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function doDrop(_x) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return Boxing_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoxingCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './BoxingModel.ts', './I18n.ts', './ViewManager.ts', './BoxingDef.ts', './BoxingUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, BoxingModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, BoxingUtils, Common;
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
      BoxingModel = module.BoxingModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      BoxingUtils = module.BoxingUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "64d66p6eSlNWKEP4peWtpjm", "BoxingCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var BoxingCtrl = exports('BoxingCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(BoxingCtrl, _GameDef$BaseCtrl);
        function BoxingCtrl() {
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
          _this._model = BoxingModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = BoxingCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete BoxingCtrl._instance;
          BoxingCtrl._instance = null;
          BoxingModel.destroy();
          BoxingUtils.destroy();
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
          if (!BoxingModel.instance.gameInfo || this.isReqBet) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: "" + BoxingModel.instance.curBet * 1000
          });
          gts.Debug.LogWarr("==reqBet=============");
          // this.onRecvData(this.getResult());
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotBoxing"
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
            RecordType: "slotBoxing"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(BoxingDef.eProto.HD_info, { action: "HD_info", reEnter: true });
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
              Common.showTip(i18n.errTip(data.Code), !BoxingUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == BoxingDef.eProto.HD_Enter || (data.Code == 402 && BoxingModel.instance.gameState.GameNo != BoxingModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(BoxingDef.eEvent.onLoadHall);
            //     return;
            // }

            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();
                BoxingModel.instance.gameInfo = data.Data;
                while (BoxingModel.instance.gameInfo.betList.length < 15) {
                  BoxingModel.instance.gameInfo.betList.push(BoxingModel.instance.gameInfo.betList[BoxingModel.instance.gameInfo.betList.length - 1] * 2);
                }
                BoxingModel.instance.totalFreeTimes = BoxingModel.instance.gameInfo.freeCount;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                BoxingModel.instance.changeBetData(data.Data);

                //判断是否有2个胡
                BoxingModel.instance.specialStartCol = 0;
                if (!BoxingModel.instance.isQuickStop && BoxingModel.instance.freeStatus == eRunStatus.RUNNING) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = BoxingModel.instance.betResult.openResult[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < openResult.openNums.length - 1; iCol++) {
                      var AllPosMsg = openResult.openNums[iCol];
                      for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
                        var symbolInfo = AllPosMsg[iRow];
                        if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            BoxingModel.instance.specialStartCol = iCol;
                            return;
                          }
                        }
                      }
                    }
                  };
                  checkSpecialRun();
                  gts.Debug.LogWarr("==BoxingModel.instance.specialStartCol==" + BoxingModel.instance.specialStartCol);
                  // //specialStartCol test
                  // BoxingModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);
                }

                //test
                // BoxingModel.instance.specialStartCol = Math.random() > 0.75 ? Math.floor(Math.random() * 2 + 2) : 0;

                if (BoxingModel.instance.totalFreeTimes > 0) {
                  BoxingModel.instance.totalFreeTimes--;
                } else {
                  BoxingModel.instance.totalFreeTimes = BoxingModel.instance.betResult.freeCount;
                }
                BoxingModel.instance.addFreeTimes = 0;
                if (BoxingModel.instance.betResult.freeCount > BoxingModel.instance.totalFreeTimes) {
                  BoxingModel.instance.addFreeTimes = BoxingModel.instance.betResult.freeCount - BoxingModel.instance.totalFreeTimes;
                }

                // //freeTest;
                // if (BoxingModel.instance.totalFreeTimes > 0) {
                //     BoxingModel.instance.totalFreeTimes--;
                // } else {
                //     BoxingModel.instance.totalFreeTimes = Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==BoxingModel.instance.totalFreeTimes==" + BoxingModel.instance.totalFreeTimes);
                gts.Debug.LogWarr("==BoxingModel.instance.betResult.freeCount==" + BoxingModel.instance.betResult.freeCount);
                gts.Debug.LogWarr("==BoxingModel.instance.addFreeTimes==" + BoxingModel.instance.addFreeTimes);
                if (BoxingModel.instance.freeStatus == eRunStatus.NONE) {
                  BoxingModel.instance.curBalance -= BoxingModel.instance.curBet * 1000;
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
                gts.Debug.LogWarr("==Boxing=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (BoxingModel.instance.curBalance > 0) {
                  BoxingModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                BoxingModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Boxing=pushWallet==" + _HD_Wallet.VndBalance);
                if (BoxingModel.instance.curBalance > 0) {
                  BoxingModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                BoxingModel.instance.curBalance = _HD_Wallet.VndBalance;
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
              Sym: isFirst ? Math.floor(Math.random() * (eSymbol.J - 2)) + 2 : Math.floor(Math.random() * eSymbol.J) + 1,
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
        return BoxingCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoxingDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b6bb4vBU8lMK5tMErSAXicO", "BoxingDef", undefined);
      var cBundle = exports('cBundle', "BoxingGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotBoxing/HD_info";
        eProto["HD_Bet"] = "slotBoxing/HD_Bet";
        eProto["HD_Leave"] = "slotBoxing/HD_Leave";
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
        cSymbolW: 140,
        cSymbolH: 78,
        cSymbolStartX: -248.5,
        cSymbolStartY: -195,
        cSpeedMax: 4000,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 200,
        CSpeedReduse: 200
      });

      // export const baseScore = [1, 2, 3, 5, 8, 10, 20, 50, 100, 200, 300, 400, 500, 700, 1000];

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
        SCATTER: 1,
        WILD: 2,
        RedPeople: 3,
        BluePeople: 4,
        RedFist: 5,
        BlueFist: 6,
        RedShorts: 7,
        BlueShorts: 8,
        A: 9,
        K: 10,
        Q: 11,
        J: 12
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
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bg",
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
        free_winEffect: "sound/free_winEffect",
        ray: "sound/ray",
        addFree: "sound/addFree"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      // let a = {
      //     Action: "HD_Bet",
      //     Code: 0,
      //     Data: {
      //         freeCount: 0,
      //         freePrize: false,
      //         openResult: [
      //             {
      //                 openNums: [
      //                     11, 10, 22, 12, 11, //4
      //                     11, 22, 9, 10, 12, //9
      //                     22, 22, 22, 11, 11, //14
      //                     10, 22, 11, 11, 9, //19
      //                     22, 12, 22, 12, 12],//24
      //                 prizeInfo: [
      //                     { prizeAmount: 50000, prizeIdx: [10, 6, 12, 8, 14], prizeNum: 12 },
      //                     { prizeAmount: 100000, prizeIdx: [20, 11, 22, 13, 24], prizeNum: 9 },
      //                     { prizeAmount: 100000, prizeIdx: [20, 16, 22, 18, 24], prizeNum: 9 },
      //                     { prizeAmount: 100000, prizeIdx: [20, 11, 2, 13, 24], prizeNum: 9 },
      //                 ],
      //                 roundOdds: 1,
      //             },
      //             {
      //                 openNums: [
      //                     11, 11, 11, 12, 11,
      //                     10, 9, 9, 10, 12,
      //                      11, 9, 9, 11, 11,
      //                      11, 10, 12, 11, 9,
      //                      10, 12, 11, 12, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 100000, prizeIdx: [0, 1, 2, 3, 4], prizeNum: 11 },
      //                     { prizeAmount: 100000, prizeIdx: [10, 1, 2, 3, 14], prizeNum: 11 },
      //                     { prizeAmount: 100000, prizeIdx: [15, 1, 22, 3, 19], prizeNum: 11 },
      //                     { prizeAmount: 100000, prizeIdx: [0, 1, 22, 3, 4], prizeNum: 11 },
      //                     { prizeAmount: 100000, prizeIdx: [15, 1, 2, 3, 19], prizeNum: 11 },
      //                 ],
      //                 roundOdds: 2,
      //             },
      //             {
      //                 openNums: [12, 12, 9, 12, 11, 12, 9, 9, 10, 12, 9, 9, 9, 11, 11, 10, 10, 11, 11, 9, 10, 12, 12, 12, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 300000, prizeIdx: [10, 11, 12, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 300000, prizeIdx: [2, 10, 11, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 300000, prizeIdx: [10, 6, 12, 8, 14], prizeNum: 9 },
      //                     { prizeAmount: 300000, prizeIdx: [10, 6, 7, 8, 14], prizeNum: 9 },
      //                     { prizeAmount: 300000, prizeIdx: [10, 11, 7, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 300000, prizeIdx: [10, 6, 2, 8, 14], prizeNum: 9 },
      //                     { prizeAmount: 600000, prizeIdx: [0, 1, 22, 3, 4], prizeNum: 12 },
      //                     { prizeAmount: 1500000, prizeIdx: [5, 21, 22, 23, 9], prizeNum: 12 },
      //                     { prizeAmount: 1500000, prizeIdx: [5, 1, 22, 3, 9], prizeNum: 12 },
      //                 ],
      //                 roundOdds: 3,
      //             },
      //             {
      //                 openNums: [11, 11, 9, 10, 10, 10, 9, 12, 10, 11, 11, 11, 11, 11, 11, 10, 10, 10, 9, 9, 10, 10, 11, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 2500000, prizeIdx: [10, 11, 12, 13, 14], prizeNum: 11 },
      //                     { prizeAmount: 500000, prizeIdx: [15, 16, 17, 18, 19], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [20, 21, 17, 23, 24], prizeNum: 10 },
      //                     { prizeAmount: 2500000, prizeIdx: [10, 11, 22, 13, 14], prizeNum: 11 },
      //                     { prizeAmount: 500000, prizeIdx: [15, 21, 17, 23, 19], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [20, 16, 17, 18, 24], prizeNum: 10 },
      //                     { prizeAmount: 250000, prizeIdx: [10, 1, 12, 3, 14], prizeNum: 11 },
      //                     { prizeAmount: 1000000, prizeIdx: [0, 11, 12, 13, 4], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 1, 12, 3, 4], prizeNum: 11 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 16, 17, 18, 9], prizeNum: 10 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 1, 22, 3, 4], prizeNum: 11 },
      //                     { prizeAmount: 1000000, prizeIdx: [0, 11, 22, 13, 4], prizeNum: 11 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [12, 11, 9, 10, 10, 9, 10, 11, 12, 9, 11, 12, 12, 10, 11, 12, 12, 9, 9, 9, 12, 9, 12, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 250000, prizeIdx: [15, 11, 12, 13, 19], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 11, 12, 13, 4], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 11, 12, 13, 24], prizeNum: 12 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 21, 2, 23, 9], prizeNum: 9 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 11, 22, 13, 24], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 16, 22, 18, 24], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 16, 12, 18, 4], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 11, 22, 13, 4], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 16, 22, 18, 19], prizeNum: 12 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [10, 11, 11, 10, 10, 11, 10, 12, 12, 9, 12, 9, 11, 10, 11, 11, 9, 10, 9, 9, 11, 10, 9, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 250000, prizeIdx: [20, 1, 2, 3, 24], prizeNum: 11 },
      //                     { prizeAmount: 500000, prizeIdx: [0, 4, 21, 22, 23], prizeNum: 10 },
      //                     { prizeAmount: 250000, prizeIdx: [5, 1, 2, 3, 9], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 1, 12, 3, 19], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 1, 2, 3, 19], prizeNum: 11 },
      //                     { prizeAmount: 500000, prizeIdx: [0, 21, 17, 23, 4], prizeNum: 10 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [12, 12, 12, 10, 9, 12, 10, 10, 12, 9, 11, 9, 12, 10, 11, 12, 10, 12, 9, 9, 12, 9, 9, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 250000, prizeIdx: [0, 1, 2, 3, 4], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 1, 2, 3, 24], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 1, 17, 3, 19], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [5, 1, 2, 3, 9], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 1, 12, 3, 4], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 1, 12, 3, 19], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [15, 1, 2, 3, 19], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [5, 1, 17, 3, 9], prizeNum: 12 },
      //                     { prizeAmount: 250000, prizeIdx: [0, 1, 17, 3, 4], prizeNum: 12 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [12, 11, 10, 10, 9, 9, 10, 11, 12, 9, 9, 9, 11, 10, 11, 12, 10, 10, 9, 9, 11, 9, 9, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 500000, prizeIdx: [10, 11, 22, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 500000, prizeIdx: [10, 21, 22, 23, 14], prizeNum: 9 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 21, 22, 23, 9], prizeNum: 9 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [9, 11, 10, 10, 9, 10, 10, 11, 12, 9, 12, 10, 11, 10, 11, 12, 10, 12, 9, 9, 11, 10, 10, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 500000, prizeIdx: [5, 16, 2, 18, 9], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 21, 2, 23, 9], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 21, 22, 23, 9], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 6, 2, 8, 9], prizeNum: 10 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [12, 9, 10, 10, 9, 9, 11, 11, 12, 9, 12, 11, 11, 10, 11, 12, 10, 11, 9, 9, 11, 10, 12, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 250000, prizeIdx: [20, 6, 7, 8, 24], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 11, 12, 13, 24], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 6, 17, 8, 24], prizeNum: 11 },
      //                     { prizeAmount: 250000, prizeIdx: [20, 6, 12, 8, 24], prizeNum: 11 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [12, 11, 9, 10, 9, 9, 12, 12, 12, 9, 12, 9, 12, 10, 11, 11, 10, 10, 9, 9, 12, 10, 12, 11, 12],
      //                 prizeInfo: [
      //                     { prizeAmount: 250000, prizeIdx: [0, 6, 12, 18, 24], prizeNum: 12 },
      //                     { prizeAmount: 1000000, prizeIdx: [10, 6, 12, 8, 14], prizeNum: 12 },
      //                     { prizeAmount: 1000000, prizeIdx: [10, 6, 7, 8, 14], prizeNum: 12 },
      //                     { prizeAmount: 1000000, prizeIdx: [0, 6, 7, 8, 4], prizeNum: 12 },
      //                     { prizeAmount: 2500000, prizeIdx: [20, 6, 7, 8, 24], prizeNum: 12 },
      //                     { prizeAmount: 2500000, prizeIdx: [20, 6, 12, 8, 24], prizeNum: 12 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             {
      //                 openNums: [10, 11, 9, 12, 9, 10, 11, 9, 10, 9, 9, 9, 9, 10, 11, 10, 10, 10, 9, 12, 11, 10, 12, 11, 9],
      //                 prizeInfo: [
      //                     { prizeAmount: 500000, prizeIdx: [10, 11, 12, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 500000, prizeIdx: [15, 16, 17, 18, 19], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [2, 10, 11, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 500000, prizeIdx: [15, 21, 17, 23, 19], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [0, 16, 17, 18, 4], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [10, 11, 7, 13, 14], prizeNum: 9 },
      //                     { prizeAmount: 500000, prizeIdx: [5, 16, 17, 18, 9], prizeNum: 10 },
      //                     { prizeAmount: 500000, prizeIdx: [0, 21, 17, 23, 4], prizeNum: 10 },
      //                 ],
      //                 roundOdds: 5,
      //             },
      //             { openNums: [12, 11, 12, 12, 9, 12, 9, 10, 10, 9, 9, 10, 10, 10, 11, 11, 11, 10, 9, 12, 11, 11, 12, 11, 9], prizeInfo: [], roundOdds: 5 },
      //         ],
      //         totalPrizeAmount: 1000000,
      //     },
      //     ErrMsg: "Success",
      //     GameType: "slotBoxing",
      //     cmd: "slotBoxing/HD_Bet",
      // };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoxingGame", ['./BoxingCtrl.ts', './BoxingDef.ts', './BoxingModel.ts', './BoxingScene.ts', './BoxingUtils.ts', './BoxingGameView.ts', './Boxing_btnEffect.ts', './Boxing_history.ts', './Boxing_historyItem.ts', './Boxing_setBase.ts', './Boxing_symbol.ts', './Boxing_symbolItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BoxingGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './BoxingDef.ts', './BoxingModel.ts', './BoxingCtrl.ts', './ViewManager.ts', './BoxingUtils.ts', './Boxing_symbol.ts', './Boxing_setBase.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, view, tween, v3, UITransform, instantiate, UIOpacity, find, Sprite, Tween, v2, MotionStreak, sys, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, eEvent, eZindex, eRunStatus, eConstDef, eSound, eProto, BoxingModel, BoxingCtrl, ViewManager, BoxingUtils, Boxing_symbol, Boxing_setBase, Common, AudioManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      find = module.find;
      Sprite = module.Sprite;
      Tween = module.Tween;
      v2 = module.v2;
      MotionStreak = module.MotionStreak;
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
      eEvent = module.eEvent;
      eZindex = module.eZindex;
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eProto = module.eProto;
    }, function (module) {
      BoxingModel = module.BoxingModel;
    }, function (module) {
      BoxingCtrl = module.BoxingCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BoxingUtils = module.BoxingUtils;
    }, function (module) {
      Boxing_symbol = module.default;
    }, function (module) {
      Boxing_setBase = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;
      cclegacy._RF.push({}, "000feIcmkJEMLJeQnajmNQj", "BoxingGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var BoxingGameView = exports('default', (_dec = ccclass("BoxingGameView"), _dec2 = menu("game/BoxingGame/BoxingGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Boxing_symbol), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(sp.Skeleton), _dec19 = property(sp.Skeleton), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(sp.Skeleton), _dec24 = property(Label), _dec25 = property(SpriteFrame), _dec26 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BoxingGameView, _GameDef$BaseView);
        function BoxingGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Boxing_symbolList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_npc", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bgLight", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curWin", _descriptor15, _assertThisInitialized(_this));
          //    //bigWin
          _initializerDefineProperty(_this, "Node_bigWinNpc", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWinAni", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bigWin", _descriptor18, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_rate_frame", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeAdd", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_addFreeTimes", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_streak", _descriptor24, _assertThisInitialized(_this));
          _this.Node_setBase = null;
          _this._curFreeTimes = 0;
          _this._nodeRate = null;
          return _this;
        }
        var _proto = BoxingGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BoxingCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!BoxingUtils.instance.isChangeOrientation()) {
            var viewSize = view.getFrameSize();
            if (viewSize.width / viewSize.height > 750 / 1334) {
              this.Node_action.setPosition(this.Node_action.position.x, this.Node_action.position.y + 15);
              this.Node_menu.setPosition(this.Node_menu.position.x, this.Node_menu.position.y + 15);
              this.Button_menu.node.setPosition(this.Button_menu.node.position.x, this.Button_menu.node.position.y + 15);
              this.Button_run.node.setPosition(this.Button_run.node.position.x, this.Button_run.node.position.y + 15);
            }
          }
          if (!this.Node_streak) {
            this.Node_streak = this.Node_effectRoot.getChildByName("Node_trail");
          }
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
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
              if (BoxingModel.instance.isAuto && BoxingCtrl.instance.isReqBet) {
                BoxingCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this2 = this;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this2.Label_bet.string = BoxingUtils.instance.numberFormat(BoxingModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this3 = this;
          BoxingUtils.instance.loadRes_icon(function () {
            if (_this3.Boxing_symbolList) {
              //            //test
              for (var i = 0; i < _this3.Boxing_symbolList.length; i++) {
                _this3.Boxing_symbolList[i].init();
              }
              BoxingCtrl.instance.reqEnterRoom();
              _this3.Node_mask.getComponent(UITransform).priority = eZindex.MASK;
            }
          });
          this.Label_bet.string = BoxingUtils.instance.numberFormat(BoxingModel.instance.curBet, 2.0) + "K";
          this.updateGold();
        };
        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Button_fast":
              {
                //                //快速停止
                BoxingModel.instance.isQuickStop = !BoxingModel.instance.isQuickStop;
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this4 = this;
          switch (event.target.name) {
            case "Button_run":
              {
                //                // this.doStartRun();

                if (BoxingModel.instance.isAuto || BoxingCtrl.instance.isReqBet || BoxingModel.instance.totalFreeTimes > 0) {
                  break;
                }
                if (BoxingModel.instance.gameStatus == eRunStatus.NONE) {
                  this.Button_run.interactable = false;
                  tween(event.target).delay(5).call(function () {
                    if (!BoxingModel.instance.isAuto) {
                      _this4.Button_run.interactable = true;
                    }
                  }).start();
                  BoxingCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_auto":
              {
                if (BoxingModel.instance.totalFreeTimes > 0) {
                  return;
                }
                BoxingModel.instance.isAuto = !BoxingModel.instance.isAuto;
                var aniButton_auto = event.target.getChildByName("Background").getComponent(sp.Skeleton);
                BoxingModel.instance.isAuto ? aniButton_auto.setAnimation(0, "on", true) : aniButton_auto.setAnimation(0, "off", true);
                if (BoxingModel.instance.gameStatus == eRunStatus.NONE && BoxingModel.instance.isAuto) {
                  BoxingCtrl.instance.reqBet();
                }
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
                BoxingCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", BoxingUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", BoxingUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", BoxingUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_setBase":
              {
                if (BoxingModel.instance.gameStatus != eRunStatus.NONE || BoxingModel.instance.isAuto || BoxingModel.instance.totalFreeTimes > 0) {
                  return;
                }
                if (!this.Node_setBase) {
                  Common.loadPopBuddle("prefab/Node_setBase", BoxingUtils.instance.bundle, function () {}, function (prefab) {
                    _this4.Node_setBase = instantiate(prefab);
                    _this4.node.addChild(_this4.Node_setBase);
                  }, true);
                } else if (!this.Node_setBase.active) {
                  this.Node_setBase.active = true;
                } else {
                  this.Node_setBase.getComponent(Boxing_setBase).hide();
                }
                break;
              }
          }
        };
        _proto.onSetMask = function onSetMask(iCol) {
          if (BoxingModel.instance.specialStartCol == 0) {
            return;
          }
          if (!this.Node_mask.active) {
            this.Node_colEffect.active = true;
            this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
            this.Node_mask.active = true;
            this.Node_mask.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask.getComponent(UIOpacity)).to(0.2, {
              opacity: 180
            }).start();
            this.Skeleton_npc.setAnimation(0, "normal_quick", true);
          }
          var setCol = iCol + 1;
          if (setCol < this.Boxing_symbolList.length) {
            this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL - 2 * setCol - 1;
            //     this.Node_colEffect.getPosition().x = this.Boxing_symbolList[setCol].node.getPosition().x;
            this.Node_colEffect.setPosition(this.Boxing_symbolList[setCol].node.getPosition().x, this.Node_colEffect.position.y);
          } else {
            if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
              //                //免费模式
              this.Skeleton_npc.setAnimation(0, "free_idle", true);
            } else {
              //                //正常模式
              this.Skeleton_npc.setAnimation(0, "normal_idle", true);
            }
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this5 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            if (this.Node_mask.active) {
              tween(this.Node_mask.getComponent(UIOpacity)).stop().to(0.2, {
                opacity: 0
              }).call(function () {
                _this5.Node_mask.active = false;
              }).start();
            }
            return;
          }
          //        //mask show
          if (!this.Node_mask.active) {
            this.Node_mask.active = true;
            this.Node_mask.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask.getComponent(UIOpacity)).stop().to(0.2, {
              opacity: 180
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this6 = this;
          if (BoxingModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.Button_run.interactable = false;
          this.Button_run.node.active = true;
          var runSkeleton = this.Button_run.target.getComponent(sp.Skeleton);
          runSkeleton.setAnimation(0, "quay", false);
          runSkeleton.addAnimation(0, "idle", true);
          if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
            //            //免费模式
            this.Skeleton_npc.setAnimation(0, "free_idle", true);
          } else {
            //            //正常模式
            this.Skeleton_npc.setAnimation(0, "normal_idle", true);
            this.Node_bgLight.setAnimation(0, "normal", true);
          }
          BoxingModel.instance.curTotalWin = 0;
          if (BoxingModel.instance.freeStatus == eRunStatus.NONE) {
            BoxingModel.instance.totalRate = 0;
            this._curFreeTimes = 0;
            //            // this.clearCatNum();
          } else {
            this._curFreeTimes++;
            BoxingModel.instance.roundOdds = 1;
            this.doSetRate();
          }
          this.Label_curWin.node.active = false;
          this.Label_curWin.string = "0.00";
          this.Label_win.string = "0.00";
          EventManager.instance.emit(eEvent.updateWin, 0);
          this.Node_effectRoot.removeAllChildren();
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  for (i = 0; i < _this6.Boxing_symbolList.length; i++) {
                    startDelay = BoxingModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = BoxingModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += BoxingModel.instance.specialStartCol > 0 && i >= BoxingModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - BoxingModel.instance.specialStartCol + 1) : 0;
                    arrPro.push(_this6.Boxing_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 4;
                  return Promise.all(arrPro);
                case 4:
                  _this6.scheduleOnce(_this6.doRunEnd, 0);
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          BoxingModel.instance.gameStatus = eRunStatus.RUNNING;
          if (BoxingModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = find("Sprite_freeTimesBG/Label_freeTimes", Node_freeInfo);
            Label_freeTimes.getComponent(Label).string = "" + BoxingModel.instance.totalFreeTimes;
          } else {
            BoxingUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var resultList, _loop, i, delayStart, runSkeleton;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  BoxingModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this7.Node_colEffect.active = false;
                    }).start();
                  }
                  BoxingModel.instance.curTotalWin = 0;
                  resultList = BoxingModel.instance.betResult.openResult;
                  if (resultList.length > 1) {
                    //            //中奖
                    if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
                      //                //免费模式
                      this.Skeleton_npc.setAnimation(0, "free_win", false);
                      this.Skeleton_npc.addAnimation(0, "free_idle", true);
                    } else {
                      //                //正常模式
                      this.Skeleton_npc.setAnimation(0, "normal_win", false);
                      this.Skeleton_npc.addAnimation(0, "normal_idle", true);
                      this.Node_bgLight.setAnimation(0, "normal_win", true);
                    }
                  } else if (Math.random() > 0.75) {
                    if (BoxingModel.instance.freeStatus == eRunStatus.NONE) {
                      //                //正常模式
                      this.Skeleton_npc.setAnimation(0, "normal_result", false);
                      this.Skeleton_npc.addAnimation(0, "normal_idle", true);
                    }
                  }
                  BoxingModel.instance.specialStartCol = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, arrPro, _i, _i2;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          result = resultList[i];
                          if (!(result.prizeInfo.length > 0)) {
                            _context2.next = 19;
                            break;
                          }
                          resultNext = resultList[i + 1];
                          _this7.showMask();
                          _this7.scheduleOnce(function () {
                            _this7.Label_curWin.node.active = true;
                            _this7.Label_curWin.string = "0.00";
                            _this7.Label_curWin.node.scale = v3(0, 0, 1);
                            tween(_this7.Label_curWin.node).to(0.2, {
                              scale: v3(1, 1, 1)
                            }).start();
                            BoxingUtils.instance.updateLabelAdd(_this7.Label_curWin, result.RewardMoney, false, 0.1);
                          }, 0.25);
                          _this7.scheduleOnce(function () {
                            BoxingModel.instance.curTotalWin += result.RewardMoney;
                            _this7.Label_win.string = BoxingUtils.instance.numberFormat(BoxingModel.instance.curTotalWin / 1000, 2.0) + "K";
                            EventManager.instance.emit(eEvent.updateWin, BoxingModel.instance.curTotalWin);
                          }, 1.0);

                          //                //
                          if (BoxingModel.instance.freeStatus != eRunStatus.NONE && BoxingModel.instance.roundOdds != result.roundOdds) {
                            BoxingModel.instance.roundOdds = result.roundOdds;
                            _this7.doSetRate();
                          }

                          //                //doStreak
                          _this7.doStreak(result);
                          arrPro = [];
                          for (_i = 0; _i < _this7.Boxing_symbolList.length; _i++) {
                            arrPro.push(_this7.Boxing_symbolList[_i].doEffect());
                          }
                          _context2.next = 12;
                          return Promise.all(arrPro);
                        case 12:
                          _this7.showMask(false);

                          //                //clear
                          BoxingUtils.instance.playOneShot(eSound.clear);
                          arrPro = [];
                          for (_i2 = 0; _i2 < _this7.Boxing_symbolList.length; _i2++) {
                            arrPro.push(_this7.Boxing_symbolList[_i2].doClear(resultNext));
                          }
                          _context2.next = 18;
                          return Promise.all(arrPro);
                        case 18:
                          //                //play sound
                          if (i == 2) {
                            BoxingUtils.instance.playOneShot(eSound.nice_0);
                          } else if (i > 2) {
                            BoxingUtils.instance.playOneShot(eSound.nice_1);
                          }
                        case 19:
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
                  if (!(BoxingModel.instance.addFreeTimes > 0)) {
                    _context3.next = 18;
                    break;
                  }
                  _context3.next = 18;
                  return this.doAddFreeTimes();
                case 18:
                  delayStart = 0.25;
                  if (!(BoxingModel.instance.curTotalWin > 0)) {
                    _context3.next = 24;
                    break;
                  }
                  _context3.next = 22;
                  return this.doShowBigWin(BoxingModel.instance.curTotalWin);
                case 22:
                  delayStart = 1.0;
                  if (BoxingModel.instance.endBalance > 0) {
                    BoxingModel.instance.curBalance = BoxingModel.instance.endBalance;
                    BoxingModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                case 24:
                  if (!BoxingModel.instance.isAuto) {
                    this.Button_run.interactable = true;
                    this.Button_run.target.active = true;
                    runSkeleton = this.Button_run.target.getComponent(sp.Skeleton);
                    runSkeleton.setAnimation(0, "normal", true);
                  }
                  BoxingModel.instance.gameStatus = eRunStatus.NONE;

                  //        //free and auto
                  if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
                    BoxingModel.instance.totalFreeWin += BoxingModel.instance.curTotalWin;
                    this.scheduleOnce(function () {
                      if (BoxingModel.instance.totalFreeTimes > 0) {
                        BoxingCtrl.instance.reqBet();
                      } else {
                        BoxingModel.instance.freeStatus = eRunStatus.END;
                        _this7.doEndFree();
                      }
                    }, delayStart);
                  } else if (BoxingModel.instance.totalFreeTimes > 0) {
                    this.showFree(true);
                  } else if (BoxingModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      BoxingCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 27:
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
        _proto.showFree = function showFree(isShow) {
          var _this8 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
              BoxingModel.instance.freeStatus = eRunStatus.NONE;
              AudioManager.instance.resumeMusic();
              BoxingUtils.instance.stopSound(eSound.freeEnd_1);
              tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).call(function () {
                _this8.Node_free.active = false;
                var Node_enter = _this8.Node_free.getChildByName("Node_enter");
                Node_enter.active = false;
                var Node_end = _this8.Node_free.getChildByName("Node_end");
                Node_end.active = false;
                var Node_freeInfo = _this8.Node_free.getChildByName("Node_freeInfo");
                Node_freeInfo.active = false;
                _this8.setEndFree();
                if (BoxingModel.instance.isAuto) {
                  _this8.scheduleOnce(function () {
                    BoxingCtrl.instance.reqBet();
                  }, 0.25);
                }
              }).start();
            }
            return;
          }
          if (!this.Node_free.active) {
            this.scheduleOnce(function () {
              AudioManager.instance.pauseMusic();
              BoxingUtils.instance.playOneShot(eSound.startFree);
              _this8.setEnterFree();
            }, 1.0);
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
          this.Node_bgLight.setAnimation(0, "normal", true);
          this.Skeleton_npc.node.active = true;
          this.Skeleton_npc.setAnimation(0, "normal_idle", true);
          this.Node_action.active = true;
          this.Node_menu.active = false;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this9 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 0;
          BoxingModel.instance.totalFreeWin = 0;
          BoxingModel.instance.roundOdds = 1;
          this.doSetRate();
          tween(this.Node_free.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).call(function () {
            //                //背景
            _this9.node.getComponent(Sprite).spriteFrame = _this9.arrBgSpFrame[1];
            _this9.Node_bgLight.setAnimation(0, "free", true);
            _this9.Skeleton_npc.setAnimation(0, "free_idle", true);
            _this9.Skeleton_npc.node.active = false;

            //                //enter
            var Node_enter = _this9.Node_free.getChildByName("Node_enter");
            Node_enter.active = true;
            Node_enter.getComponent(UIOpacity).opacity = 255;
            var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + BoxingModel.instance.totalFreeTimes;
            var Node_enterAni = Node_enter.getChildByName("Node_enterAni").getComponent(sp.Skeleton);
            Node_enterAni.setAnimation(0, "idle", false);
            Node_enterAni.setCompleteListener(function () {
              Node_enterAni.setCompleteListener(null);
              _this9.doEnterFree();
            });
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          var _this10 = this;
          if (BoxingModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          BoxingModel.instance.freeStatus = eRunStatus.RUNNING;

          //        //enter close
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            _this10.Skeleton_npc.node.active = true;
            Node_enter.active = false;
            BoxingUtils.instance.stopSound(eSound.startFree);
          }).start();
          var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
          Node_freeInfo.active = true;

          //        //免费次数
          var Label_freeTimes = find("Sprite_freeTimesBG/Label_freeTimes", Node_freeInfo);
          Label_freeTimes.getComponent(Label).string = "" + BoxingModel.instance.totalFreeTimes;
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            BoxingCtrl.instance.reqBet();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this11 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          this.Skeleton_npc.node.active = false;

          //        //免费次数
          var Label_freeTimes = Node_end.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + this._curFreeTimes;
          this.scheduleOnce(function () {
            //            //免费总得分
            var Label_totalWin = Node_end.getChildByName("Label_totalWin");
            BoxingUtils.instance.updateLabelAdd(Label_totalWin.getComponent(Label), BoxingModel.instance.totalFreeWin);
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          AudioManager.instance.pauseMusic();
          BoxingUtils.instance.playSound(eSound.free_winEffect, true);

          //        //2.0秒后返回正常
          this.scheduleOnce(function () {
            BoxingUtils.instance.stopSound(eSound.free_winEffect);
            _this11.showFree(false);
          }, 5);
        };
        _proto.doSetRate = function doSetRate() {
          if (this._nodeRate) {
            this._nodeRate.active = false;
            this._nodeRate = null;
            this.Sprite_rate_frame.active = false;
          }
          if (BoxingModel.instance.roundOdds > 1) {
            this._nodeRate = find("Node_freeInfo/Node_rate/Sprite_rate_" + BoxingModel.instance.roundOdds, this.Node_free);
            this._nodeRate.active = true;
            this.Sprite_rate_frame.active = true;
            this.Sprite_rate_frame.position = this._nodeRate.position;
            tween(this.Sprite_rate_frame.getComponent(UIOpacity)).blink(1, 3).start();
          }
        };
        _proto.doAddFreeTimes = function doAddFreeTimes() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            //            //npc
            _this12.Skeleton_npc.setAnimation(0, "free_spinadd", false);
            _this12.Skeleton_npc.setCompleteListener(function () {
              _this12.Skeleton_npc.setCompleteListener(null);
              _this12.Skeleton_npc.setAnimation(0, "free_idle", true);
            });
            _this12.Node_freeAdd.node.active = true;
            _this12.Label_addFreeTimes.node.getComponent(UIOpacity).opacity = 0;
            _this12.Label_addFreeTimes.string = "" + BoxingModel.instance.addFreeTimes;
            tween(_this12.Label_addFreeTimes.node.getComponent(UIOpacity)).to(0.15, {
              opacity: 255
            }).start();
            _this12.scheduleOnce(function () {
              BoxingModel.instance.totalFreeTimes += BoxingModel.instance.addFreeTimes;
              BoxingModel.instance.addFreeTimes = 0;
              var Node_freeInfo = _this12.Node_free.getChildByName("Node_freeInfo");
              var Label_freeTimes = find("Sprite_freeTimesBG/Label_freeTimes", Node_freeInfo);
              BoxingUtils.instance.updateLabel(Label_freeTimes, BoxingModel.instance.totalFreeTimes);
            }, 0.5);
            _this12.scheduleOnce(function () {
              BoxingUtils.instance.playOneShot(eSound.addFree);
              _this12.Node_freeAdd.setAnimation(0, "idle", false);
              _this12.Node_freeAdd.setCompleteListener(function () {
                _this12.Node_freeAdd.setCompleteListener(null);
                _this12.Node_freeAdd.node.active = false;
                resolve();
              });
            }, 0.2);
          });
        };
        _proto.doShowBigWin = function doShowBigWin(totalWin) {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            var totalRate = totalWin / (BoxingModel.instance.curBet * 1000);
            if (totalRate < 20) {
              resolve();
              return;
            }
            _this13.Skeleton_npc.node.active = false;

            //            //大奖显示
            _this13.Node_bigWinNpc.node.active = true;
            _this13.Node_bigWinNpc.setAnimation(0, "bigwin", true);
            var lv = totalRate < 35 ? 0 : totalRate < 50 ? 1 : 2;
            var aniName = ["bigwin", "megawin", "superwin"];
            _this13.Node_bigWinAni.node.active = true;
            _this13.Node_bigWinAni.setAnimation(0, aniName[lv] + "_intro", false);
            _this13.Node_bigWinAni.addAnimation(0, aniName[lv] + "_idle", false);
            var totalTime = (lv + 1) * 2.0;
            var dt = 0.05;
            var updateTimes = totalTime / dt;
            var destWin = totalWin;
            var disWin = Math.floor(totalWin / updateTimes);
            var curTotalWin = 0;
            _this13.Label_bigWin.node.active = true;
            tween(_this13.Label_bigWin.node).repeatForever(tween(_this13.Label_bigWin.node).delay(dt).call(function () {
              curTotalWin += disWin;
              if (curTotalWin > destWin) {
                Tween.stopAllByTarget(_this13.Label_bigWin.node);
                curTotalWin = destWin;
                _this13.scheduleOnce(function () {
                  _this13.Skeleton_npc.node.active = true;
                  _this13.Node_bigWinNpc.node.active = false;
                  _this13.Label_bigWin.node.active = false;
                  _this13.Node_bigWinAni.node.active = false;
                  resolve();
                }, 1.0);
              }
              _this13.Label_bigWin.string = BoxingUtils.instance.numberFormat(curTotalWin / 1000, 2.0) + "K";
            })).start();
          });
        };
        _proto.doStreak = function doStreak(openResult) {
          var _this14 = this;
          return new Promise(function (resolve, reject) {
            if (openResult.prizeInfo.length == 0) {
              resolve();
              return;
            }
            var spaceX = 140;
            var spaceY = 78;
            var startX = -282;
            var startY = -157;
            BoxingUtils.instance.playOneShot(eSound.ray);
            for (var _iterator = _createForOfIteratorHelperLoose(openResult.prizeInfo), _step; !(_step = _iterator()).done;) {
              var _tween;
              var prizeInfo = _step.value;
              var pos = null;
              var posList = [];
              var vecList = [];
              for (var i = 0; i < prizeInfo.prizeIdx.length; i++) {
                var prizeIdx = prizeInfo.prizeIdx[i];
                var iCol = prizeIdx % 5;
                var iRow = 4 - Math.floor(prizeIdx / 5);
                if (i != iCol) {
                  gts.Debug.Log("======i != iCol===========");
                }
                vecList.push({
                  iCol: iCol,
                  iRow: iRow
                });
                pos = v2(startX + iCol * spaceX, startY + spaceY * iRow);
                posList.push(pos);
              }
              posList.push(v2(pos.x + spaceX, pos.y));
              gts.Debug.Log(JSON.stringify(vecList));
              var Node_streak = instantiate(_this14.Node_streak);
              var posStart = v2(posList[0].x - spaceX, posList[0].y);
              Node_streak.position = v3(posStart.x, posStart.y);
              Node_streak.getComponent(UITransform).priority = eZindex.SPECIAL;
              Node_streak.getComponent(MotionStreak).reset();
              Node_streak.active = true;
              _this14.Node_symbolRoot.addChild(Node_streak);
              var arrTw = [];
              for (var _i3 = 0; _i3 < posList.length; _i3++) {
                arrTw.push(tween(Node_streak).to(0.075, {
                  position: v3(posList[_i3].x, posList[_i3].y)
                }));
              }
              (_tween = tween(Node_streak)).sequence.apply(_tween, arrTw).delay(1.0).removeSelf().start();
            }
            resolve();
          });
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(BoxingModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            BoxingUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                //                //筹码列表
                var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                BoxingModel.instance.curBet = sys.localStorage.getItem("boxing_baseBetGold" + uid) || BoxingModel.instance.gameInfo.betList[0];
                BoxingModel.instance.curBet /= 1000;
                this.updateBaseBet();
                for (var i = 0; i < this.Boxing_symbolList.length; i++) {
                  this.Boxing_symbolList[i].init();
                }
                if (BoxingModel.instance.totalFreeTimes > 0) {
                  this.Button_run.interactable = false;
                  this.showFree(true);
                }
                break;
              }
            case eProto.HD_Bet:
              {
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
        return BoxingGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolRoot", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Boxing_symbolList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_action", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_npc", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_bgLight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_curWin", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWinNpc", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWinAni", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_bigWin", [_dec20], {
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
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rate_frame", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeAdd", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_addFreeTimes", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_streak", [_dec26], {
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

System.register("chunks:///_virtual/BoxingModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './BoxingDef.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, GameDef, eSymbol, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a8f10hK1W5JFKhQwTww0/H1", "BoxingModel", undefined);
      var BoxingModel = exports('BoxingModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BoxingModel, _GameDef$BaseSington);
        function BoxingModel() {
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
          _this.curTotalWin = 0;
          //    // curRate: number = 0;
          _this.totalRate = 0;
          _this.roundOdds = 0;
          _this.betResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.addFreeTimes = 0;
          _this.BetList = null;
          return _this;
        }
        var _proto = BoxingModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        _proto.getBaseIndex = function getBaseIndex() {
          for (var index = 0; index < BoxingModel.instance.gameInfo.betList.length; index++) {
            if (Math.floor(BoxingModel.instance.gameInfo.betList[index] / 1000) == BoxingModel.instance.curBet) {
              return index;
            }
          }
          return 0;
        };
        _proto.changeBetData = function changeBetData(recvData) {
          BoxingModel.instance.betResult = {
            openResult: null,
            freeCount: 0,
            freePrize: 0,
            totalPrizeAmount: 0
          };
          BoxingModel.instance.betResult.freeCount = recvData.freeCount;
          BoxingModel.instance.betResult.freePrize = recvData.freePrize;
          BoxingModel.instance.betResult.totalPrizeAmount = recvData.totalPrizeAmount;
          var openResultList = [];
          for (var i = 0; i < recvData.openResult.length; i++) {
            var openResult = recvData.openResult[i];
            var result = {
              openNums: [],
              prizeInfo: openResult.prizeInfo,
              roundOdds: openResult.roundOdds,
              RewardMoney: 0
            };

            //            //openNums
            for (var iCol = 0; iCol < 5; iCol++) {
              var retOpen = [];
              for (var iRow = 0; iRow < 5; iRow++) {
                //                    //0-20 1-15 2-10 3-5 4-0
                //                    //0-21 1-16 2-11 3-5 4-1
                var index = 20 - iRow * 5 + iCol;
                var itemInfo = {
                  Sym: openResult.openNums[index],
                  //                        // Length: 1,
                  //                        // Rim: 0,
                  IsReward: false
                };
                retOpen.push(itemInfo);
              }
              result.openNums.push(retOpen);
            }

            //            //prizeInfo
            if (openResult.prizeInfo.length > 0) {
              for (var _iterator = _createForOfIteratorHelperLoose(openResult.prizeInfo), _step; !(_step = _iterator()).done;) {
                var prizeInfo = _step.value;
                result.RewardMoney += prizeInfo.prizeAmount;
                for (var _iterator2 = _createForOfIteratorHelperLoose(prizeInfo.prizeIdx), _step2; !(_step2 = _iterator2()).done;) {
                  var prizeIdx = _step2.value;
                  if (openResult.openNums[prizeIdx] != prizeInfo.prizeNum && openResult.openNums[prizeIdx] != eSymbol.WILD) {
                    break;
                  }
                  var _iCol = prizeIdx % 5;
                  var _iRow = 4 - Math.floor(prizeIdx / 5);
                  result.openNums[_iCol][_iRow].IsReward = true;
                }
              }
            }
            openResultList.push(result);
          }
          BoxingModel.instance.betResult.openResult = openResultList;
        }
        //    // prizeIdx: [1, 2, 3, 20, 24],
        ;

        return BoxingModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BoxingScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BoxingDef.ts', './BoxingUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, BoxingUtils, Common;
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
      BoxingUtils = module.BoxingUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "25d7cz1lDZHsLQ/+F4c0DVq", "BoxingScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BoxingScene = exports('default', (_dec = ccclass("BoxingScene"), _dec2 = menu("game/BoxingGame/BoxingScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BoxingScene, _Component);
        function BoxingScene() {
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
        var _proto = BoxingScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          BoxingUtils.instance.bundle = assetManager.getBundle(cBundle);
          BoxingUtils.instance.preLoad();
          BoxingUtils.instance.playBgMusic();
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
            //            // if (!BoxingUtils.instance.isChangeOrientation()) {
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
          //     ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          // }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            BoxingUtils.instance.bundle.load("prefab/BoxingGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (BoxingUtils.instance.isChangeOrientation()) {
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
        return BoxingScene;
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

System.register("chunks:///_virtual/BoxingUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './BoxingDef.ts', './BoxingModel.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, GameDef, AudioManager, eSound, eSymbol, eRunStatus, BoxingModel, Common;
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
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      BoxingModel = module.BoxingModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5df66qaPqhAga2xG8NG6K5o", "BoxingUtils", undefined);
      var symbol_nomal_icon = ["symbol_11", "symbol_10", "symbol_9", "symbol_8", "symbol_7", "symbol_6", "symbol_5", "symbol_4", "symbol_3", "symbol_2", "symbol_1", "symbol_0", "symbol_12"];
      var symbol_spine_info = [{
        data: "icon_scatter",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon_wild",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon_redman",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon_blueman",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon_redhand",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon_bluehand",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }, {
        data: "icon",
        ani_win: ["red_idle", "blue_idle", "a_idle", "k_idle", "q_idle", "j_idle"],
        ani_idle: ["red_p", "blue_p", "a_p", "k_p", "q_p", "j_p"]
      }, {
        data: "icon_freespin",
        ani_win: ["idle"],
        ani_idle: ["p"]
      }];
      var BoxingUtils = exports('BoxingUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BoxingUtils, _GameDef$BaseSington);
        function BoxingUtils() {
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
          _this.soundIDList = {};
          return _this;
        }
        var _proto = BoxingUtils.prototype;
        //    // arrIconFrameSpriteFrame: { [index: string]: cc.SpriteFrame } = {};
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/BoxingGameView");
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
                  arrHLoad.push(this.asyncLoadDir("spine/icon", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpineData), _step2; !(_step2 = _iterator2()).done;) {
                        var spineData = _step2.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpineData), _step3; !(_step3 = _iterator3()).done;) {
                        var spineData = _step3.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
                    }
                  }));

                  //        // arrHLoad.push(
                  //        //     this.asyncLoad("font/red_01", cc.Font, (err, font: cc.Font) => {
                  //        //         if (!err) {
                  //        //             this.arrFontData[font.name] = font;
                  //        //         }
                  //        //     })
                  //        // );
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
            if (err) {
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
          var _this7 = this;
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this7.soundIDList[soundPath]) {
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
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, showTimes) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (showTimes === void 0) {
            showTimes = 0;
          }
          var destWin = nums;
          var curWin = label.string.length > 0 ? parseFloat(label.string) : 0;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              if (showTimes == 0) {
                Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              }
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(showTimes + 0.1).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this9 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = parseFloat(label.string);
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, isGold) {
          if (this.arrIconSpriteFrame) {
            if (symbolIndex == eSymbol.SCATTER && BoxingModel.instance.freeStatus != eRunStatus.NONE) {
              return this.arrIconSpriteFrame[symbol_nomal_icon[symbol_nomal_icon.length - 1]];
            }
            var symbol = symbol_nomal_icon[symbolIndex - 1];
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          var dataInfo = null; //symbolIndex < BoxingDef.eSymbol.RedShorts ? symbol_spine_info[symbolIndex - 1] : symbol_spine_info[BoxingDef.eSymbol.RedShorts - 1];
          if (symbolIndex < eSymbol.RedShorts) {
            dataInfo = symbol_spine_info[symbolIndex - 1];
            if (symbolIndex == eSymbol.SCATTER && BoxingModel.instance.freeStatus != eRunStatus.NONE) {
              dataInfo = symbol_spine_info[symbol_spine_info.length - 1];
            }
            return isIdle ? dataInfo.ani_idle[0] : dataInfo.ani_win[0];
          } else {
            dataInfo = symbol_spine_info[eSymbol.RedShorts - 1];
            return isIdle ? dataInfo.ani_idle[symbolIndex - eSymbol.RedShorts] : dataInfo.ani_win[symbolIndex - eSymbol.RedShorts];
          }
        };
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var dataInfo = index < eSymbol.RedShorts ? symbol_spine_info[index - 1] : symbol_spine_info[eSymbol.RedShorts - 1];
          if (index == eSymbol.SCATTER && BoxingModel.instance.freeStatus != eRunStatus.NONE) {
            dataInfo = symbol_spine_info[symbol_spine_info.length - 1];
          }
          return this.arrSkeletonData[dataInfo.data];
        };
        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        return BoxingUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/BoxingGame', 'chunks:///_virtual/BoxingGame'); 
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