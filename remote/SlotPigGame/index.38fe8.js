System.register("chunks:///_virtual/SlotPig_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b7093HrATxCs6UU57XpQkeC", "SlotPig_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var SlotPig_btnEffect = exports('default', (_dec = ccclass("SlotPigBtnEffect"), _dec2 = menu("game/SlotPigGame/SlotPig_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_btnEffect, _Component);
        function SlotPig_btnEffect() {
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
        var _proto = SlotPig_btnEffect.prototype;
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

        _createClass(SlotPig_btnEffect, [{
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

        return SlotPig_btnEffect;
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

System.register("chunks:///_virtual/SlotPig_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "cafbaaWCgNMSqo2U/5YM7kA", "SlotPig_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_helpTip = exports('default', (_dec = ccclass("SlotPigHelpTip"), _dec2 = menu("game/SlotPigGame/SlotPig_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_helpTip, _Component);
        function SlotPig_helpTip() {
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
        var _proto = SlotPig_helpTip.prototype;
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
            var duration = (this.Sprite_tip.node.getComponent(UITransform).width + 60) / 150;
            tween(this.Sprite_tip.node).delay(1.0).to(duration, {
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
        return SlotPig_helpTip;
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

System.register("chunks:///_virtual/SlotPig_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigCtrl.ts', './SlotPigDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SlotPigCtrl, eProto, GameDef, Common;
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
      SlotPigCtrl = module.SlotPigCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "df473dkB+pDnqakozIfyDKT", "SlotPig_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotPig_history = exports('default', (_dec = ccclass("SlotPigHistory"), _dec2 = menu("game/SlotPigGame/SlotPig_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotPig_history, _GameDef$BaseView);
        function SlotPig_history() {
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
        var _proto = SlotPig_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotPigCtrl.instance);
          SlotPigCtrl.instance.reqHistory();
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
          SlotPigCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          SlotPigCtrl.instance.reqHistory(start);
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
        return SlotPig_history;
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

System.register("chunks:///_virtual/SlotPig_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotPigUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, SlotPigUtils, Common;
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
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c5b3eM35dNH9K35acnO30m/", "SlotPig_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_historyItem = exports('default', (_dec = ccclass("SlotPigHistoryItem"), _dec2 = menu("game/SlotPigGame/SlotPig_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_historyItem, _Component);
        function SlotPig_historyItem() {
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
        var _proto = SlotPig_historyItem.prototype;
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
          this.Label_bet.string = SlotPigUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + SlotPigUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + SlotPigUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(SlotPig_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SlotPig_historyItem;
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

System.register("chunks:///_virtual/SlotPig_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigCtrl.ts', './SlotPigDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SlotPigCtrl, eProto, GameDef, Common;
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
      SlotPigCtrl = module.SlotPigCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fff9b/4iYRGpZw70tim+g4P", "SlotPig_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotPig_rank = exports('default', (_dec = ccclass("SlotPigRank"), _dec2 = menu("game/SlotPigGame/SlotPig_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotPig_rank, _GameDef$BaseView);
        function SlotPig_rank() {
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
        var _proto = SlotPig_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotPigCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          SlotPigCtrl.instance.reqRank();
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
        return SlotPig_rank;
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

System.register("chunks:///_virtual/SlotPig_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotPigUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, SlotPigUtils;
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
      SlotPigUtils = module.SlotPigUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "11fe1Nn+ihAdYwyu1GvfWCI", "SlotPig_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_rankItem = exports('default', (_dec = ccclass("SlotPigRankItem"), _dec2 = menu("game/SlotPigGame/SlotPig_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_rankItem, _Component);
        function SlotPig_rankItem() {
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
        var _proto = SlotPig_rankItem.prototype;
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
          this.Label_win.string = SlotPigUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(SlotPig_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SlotPig_rankItem;
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

System.register("chunks:///_virtual/SlotPig_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigModel.ts', './SlotPigDef.ts', './SlotPigUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, SlotPigModel, eAutoRateType, eConstDef, eEvent, SlotPigUtils, EventManager;
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
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "755582PNvNGA4tk5O+wjlpV", "SlotPig_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_ScrollView = exports('default', (_dec = ccclass("SlotPigScrollView"), _dec2 = menu("game/SlotPigGame/SlotPig_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_ScrollView, _Component);
        function SlotPig_ScrollView() {
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
        var _proto = SlotPig_ScrollView.prototype;
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
                this._curIndex = SlotPigModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = SlotPigModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = SlotPigModel.instance._curIndex_baseBet;
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
                var strNum = SlotPigUtils.instance.numberFormat(SlotPigUtils.instance.getBaseNum(index), 2);
                return strNum + "K";
              }
            case eAutoRateType.baseRate:
              {
                return "" + (index + 1);
              }
            case eAutoRateType.basePay:
              {
                return "" + (index + 1) * eConstDef.CBaseRate;
              }
            case eAutoRateType.baseBet:
              {
                var baseScore = Math.floor(index / 10);
                var baseRate = index % 10;
                var _strNum = SlotPigUtils.instance.numberFormat(SlotPigUtils.instance.getBaseNum(baseScore) * (baseRate + 1) * eConstDef.CBaseRate, 2);
                gts.Debug.LogWarr("getDefaultValue=baseScore=" + baseScore + "==baseRate=" + (baseRate + 1) + "==strNum=" + _strNum + "=");
                //                // (baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);
                //                // let strNum = Math.floor((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20) + "K";
                return _strNum + "K";
              }
          }
        };
        return SlotPig_ScrollView;
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

System.register("chunks:///_virtual/SlotPig_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigModel.ts', './SlotPigDef.ts', './ViewManager.ts', './EventManager.ts', './SlotPigUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Toggle, Button, Sprite, SpriteFrame, color, Component, SlotPigModel, eEvent, ViewManager, EventManager, SlotPigUtils, Common;
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
      Toggle = module.Toggle;
      Button = module.Button;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "82541WG6xFObrZ+PPhx1lY7", "SlotPig_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotPig_setAuto = exports('default', (_dec = ccclass("SlotPigSetAuto"), _dec2 = menu("game/SlotPigGame/SlotPig_setAuto"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Toggle), _dec7 = property(Button), _dec8 = property(Sprite), _dec9 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_setAuto, _Component);
        function SlotPig_setAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // @property(cc.Label)
          //    // Label_bet: cc.Label = null;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor2, _assertThisInitialized(_this));
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Toggle_quickly", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_ok", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_tag", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame_tag", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotPig_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(SlotPigModel.instance.curBalance);
          this.Label_gold.string = gold;
          this.Sprite_tag.spriteFrame = SlotPigModel.instance.isQuickStop ? this.arrSpriteFrame_tag[1] : this.arrSpriteFrame_tag[0];
          // SlotPigModel.instance.isQuickStop ? this.Toggle_quickly.check() : this.Toggle_quickly.uncheck();
          this.Toggle_quickly.isChecked = SlotPigModel.instance.isQuickStop;
          if (SlotPigModel.instance.curTotalWin > 0) {
            this.Label_win.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }

          //        // this.Label_bet.string = `${SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curBet, 2.0)}K`;
        };

        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //    //按钮事件回调
        ;

        _proto.onToggleClick = function onToggleClick(event) {
          switch (event.node.name) {
            case "Toggle_cancel":
              {
                SlotPigModel.instance.isQuickStop = false;
                break;
              }
            case "Toggle_quickly":
              {
                SlotPigModel.instance.isQuickStop = true;
                break;
              }
          }
          this.Sprite_tag.spriteFrame = SlotPigModel.instance.isQuickStop ? this.arrSpriteFrame_tag[1] : this.arrSpriteFrame_tag[0];
        }
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
                  SlotPigModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[SlotPigModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = SlotPigModel.instance.curBet * 1000 * times;
                  //                    // if (SlotPigModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(SlotPigModel.instance.curBalance / (SlotPigModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(SlotPigDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !SlotPigUtils.instance.isChangeOrientation());
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
              }
          }
        };
        return SlotPig_setAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Toggle_quickly", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_tag", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame_tag", [_dec9], {
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

System.register("chunks:///_virtual/SlotPig_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigModel.ts', './SlotPigDef.ts', './ViewManager.ts', './EventManager.ts', './SlotPigUtils.ts', './SlotPig_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, SlotPigModel, eEvent, eAutoRateType, ViewManager, EventManager, SlotPigUtils, SlotPig_ScrollView, Common;
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
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      SlotPig_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "5cda2odVN9PP6suLJ5n39iU", "SlotPig_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotPig_setBase = exports('default', (_dec = ccclass("SlotPigSetBase"), _dec2 = menu("game/SlotPigGame/SlotPig_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_setBase, _Component);
        function SlotPig_setBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // @property(cc.Label)
          //    // Label_bet: cc.Label = null;
          _initializerDefineProperty(_this, "Label_gold", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseScore", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseRate", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_basePay", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseBet", _descriptor6, _assertThisInitialized(_this));
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          return _this;
        }
        var _proto = SlotPig_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(SlotPigModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (SlotPigModel.instance.curTotalWin > 0) {
            this.Label_win.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          //        // this.Label_bet.string = `${SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curBet, 2.0)}K`;

          this._curIndex_baseScore = SlotPigModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = SlotPigModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = SlotPigModel.instance._curIndex_baseBet;
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
            if (SlotPigModel.instance.curTotalWin > 0) {
              this.Label_win.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = SlotPigModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            SlotPigModel.instance.curTotalWin += disWin;
            if (SlotPigModel.instance.curTotalWin > destWin) {
              SlotPigModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(SlotPig_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(SlotPig_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(SlotPig_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(SlotPig_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(SlotPig_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(SlotPig_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(SlotPig_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                SlotPigModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                SlotPigModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                SlotPigModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return SlotPig_setBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseRate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_basePay", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseBet", [_dec8], {
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

System.register("chunks:///_virtual/SlotPig_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import * as cc from "cc";
      cclegacy._RF.push({}, "c6c10RxN5dMRY7iMLrDS4/v", "SlotPig_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPig_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigModel.ts', './SlotPigDef.ts', './SlotPig_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, SlotPigModel, eConstDef, eRunStatus, eSymbol, SlotPig_symbolItem;
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
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      SlotPig_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "d755a7sVJNEJqwGaBXJi1Bd", "SlotPig_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_symbol = exports('default', (_dec = ccclass("SlotPigSymbol"), _dec2 = menu("game/SlotPigGame/SlotPig_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_symbol, _Component);
        function SlotPig_symbol() {
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
          _this._resultInfoList = [];
          _this.cSpeedMax = eConstDef.cSpeedMax;
          _this.cSpeedMin = eConstDef.cSpeedMin;
          _this.CSpeedStart = eConstDef.CSpeedStart;
          _this.CSpeedAdd = eConstDef.CSpeedAdd;
          _this.CSpeedReduse = eConstDef.CSpeedReduse;
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = SlotPig_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.getResult = function getResult(openResult) {
          var resultInfoList = [];
          var _curLength = 0;
          var openNums = openResult.openNums[this._iCol];
          for (var i = 0; i < this.maxIndex; i++) {
            var leftLength = this.maxIndex - _curLength;
            if (leftLength == 0) {
              break;
            }

            //            //获取结果
            var itemInfo = {
              bonusSymbol: openNums.bonusSymbol,
              IsReward: false
            };
            if (i != 2) {
              var maxSym = this._iCol == 1 ? eSymbol.Wild_5 : eSymbol.Firecrackers_3;
              var bonusSymbol = Math.floor(Math.random() * maxSym) + 1;
              while (bonusSymbol == itemInfo.bonusSymbol) {
                bonusSymbol = Math.floor(Math.random() * maxSym + 1);
              }
              itemInfo.bonusSymbol = itemInfo.bonusSymbol != eSymbol.Blank ? i == 1 || i == 3 ? eSymbol.Blank : bonusSymbol : i == 1 || i == 3 ? bonusSymbol : eSymbol.Blank;
            }
            itemInfo.IsReward = i != 2 ? false : openResult.prizeAmount > 0;
            resultInfoList.push(itemInfo);
            _curLength += 1;
          }
          resultInfoList = resultInfoList.reverse();
          gts.Debug.Log("==getResult==" + JSON.stringify(resultInfoList));
          return resultInfoList;
        };
        _proto.setSpeed = function setSpeed() {
          if (this._iCol == SlotPigModel.instance.specialStartCol) {
            this.cSpeedMax = eConstDef.cSpeedMax;
            this.cSpeedMin = eConstDef.cSpeedMin / 2.0;
            this.CSpeedStart = eConstDef.CSpeedStart;
            this.CSpeedAdd = eConstDef.CSpeedAdd;
            this.CSpeedReduse = eConstDef.CSpeedReduse / 3.0;
          } else {
            this.cSpeedMax = eConstDef.cSpeedMax;
            this.cSpeedMin = eConstDef.cSpeedMin;
            this.CSpeedStart = eConstDef.CSpeedStart;
            this.CSpeedAdd = eConstDef.CSpeedAdd;
            this.CSpeedReduse = eConstDef.CSpeedReduse;
          }
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          this.itemTag++;
          if (!itemInfo) {
            var randSym = this._iCol == 1 ? Math.floor(Math.random() * eSymbol.Wild_5) : Math.floor(Math.random() * eSymbol.Firecrackers_3);
            var lastItem = this.node.parent.getChildByName("symbol_col_" + this._iCol + "_tag_" + (this.itemTag - 1));
            var comLast = lastItem.getComponent(SlotPig_symbolItem);
            itemInfo = {
              bonusSymbol: comLast.itemInfo.bonusSymbol == eSymbol.Blank ? randSym + 1 : eSymbol.Blank,
              IsReward: false
            };

            //            // if (comLast.itemInfo.bonusSymbol == SlotPigDef.eSymbol.Blank) {
            //            //     gts.Debug.LogWarr(this._iCol + "=this._iCol=comLast==SlotPigDef.eSymbol.Blank=itemTag=" + (this.itemTag - 1));
            //            // }
          }

          var newItem = instantiate(this.Node_itemTemp);
          this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          var cSymbolStartY = this.maxIndex % 2 == 0 ? -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) : -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) - eConstDef.cSymbolH / 2;
          var offsetY = (toLength + 0.5) * eConstDef.cSymbolH;
          newItem.setPosition(this.node.getPosition().x, cSymbolStartY + offsetY);
          newItem.name = "symbol_col_" + this._iCol + "_tag_" + this.itemTag;
          //        //
          var com = newItem.getComponent(SlotPig_symbolItem);
          com.initItem(itemInfo, this._iCol, this.maxIndex);
          this._symbolList.push(com);
          this._curLength += 1;
          return com;
        };
        _proto.init = function init(itemInfoList) {
          var _this2 = this;
          this._curLength = 0;
          for (var i = 0; i < this.maxIndex; i++) {
            this.addNewItem(itemInfoList ? itemInfoList[i] : null);
          }
          for (var _i = 0; _i < this._symbolList.length; _i++) {
            var symbolNode = this._symbolList[_i].node;
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
            }).call(function () {
              for (var _iterator = _createForOfIteratorHelperLoose(_this2._symbolList), _step; !(_step = _iterator()).done;) {
                var comSymbol = _step.value;
                comSymbol.doBindToUp();
              }
            }).start();
          }
        };
        //0:none 1:startRun 2:running 3:stopping 4:end
        _proto.doRunning = function doRunning(startDelay, stopDelay) {
          var _this3 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this3.scheduleOnce(function () {
              SlotPigModel.instance.isQuickStop && _this3._iCol != SlotPigModel.instance.specialStartCol ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(SlotPigModel.instance.betResult.Res[0]);

            //            //
            _this3._runStatus = eRunStatus.START;
            _this3._speed = _this3.CSpeedStart;
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
                    _this3._speed += _this3.CSpeedAdd;
                    if (_this3._speed >= _this3.cSpeedMax) {
                      _this3._speed = _this3.cSpeedMax;
                      _this3._runStatus = eRunStatus.RUNNING;
                    }
                    break;
                  }
                case eRunStatus.STOPPING:
                  {
                    _this3._speed -= _this3.CSpeedReduse;
                    if (_this3._speed < _this3.cSpeedMin) {
                      _this3._speed = _this3.cSpeedMin;
                      _this3._runStatus = eRunStatus.STOP;
                      //                            // if (!SlotPigModel.instance.isQuickStop) {
                      //                            //     SlotPigUtils.instance.playSound(SlotPigDef.eSound.spinStop);
                      //                            // }
                    }

                    break;
                  }
                case eRunStatus.END:
                  {
                    var curLength = 0;
                    for (var i = _this3._symbolList.length - 1; i >= 0; i--) {
                      var symbol = _this3._symbolList[i];
                      curLength += 1;
                      if (curLength > _this3.maxIndex) {
                        var _symbol = _this3._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    //                        // if (SlotPigModel.instance.isQuickStop) {
                    //                        //     SlotPigUtils.instance.playSound(SlotPigDef.eSound.spinStopQuick);
                    //                        // }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol2 = _step2.value;
                              arrPro.push(_symbol2.doStop(30));
                            }
                            _context.next = 4;
                            return Promise.all(arrPro);
                          case 4:
                            _this3.unschedule(scheduleUpdate);
                            resolve();
                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })), 0);
                    return;
                  }
              }
              var offset = _this3._speed * 0.01667;
              var disLength = offset / eConstDef.cSymbolH;
              _this3._curLength -= disLength;
              var isSide = _this3._curLength <= _this3.maxIndex;
              if (_this3._resultInfoList.length == 0 && isSide) {
                //                    //stop run
                disLength -= _this3.maxIndex - _this3._curLength;
                offset = disLength * eConstDef.cSymbolH + 30;
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
                var lastItem = _this3.node.parent.getChildByName("symbol_col_" + _this3._iCol + "_tag_" + _this3.itemTag);
                if (_this3._runStatus == eRunStatus.STOP && _this3._resultInfoList.length > 0 && (_this3._resultInfoList.length != _this3.maxIndex || lastItem.getComponent(SlotPig_symbolItem).itemInfo.bonusSymbol == eSymbol.Blank && _this3._resultInfoList[0].bonusSymbol != eSymbol.Blank || lastItem.getComponent(SlotPig_symbolItem).itemInfo.bonusSymbol != eSymbol.Blank && _this3._resultInfoList[0].bonusSymbol == eSymbol.Blank)) {
                  _this3.addNewItem(_this3._resultInfoList.shift());
                } else {
                  _this3.addNewItem(null);
                }
              }
            };
            _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var arrPro, _iterator3, _step3, symbol;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    arrPro = [];
                    for (_iterator3 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step3 = _iterator3()).done;) {
                      symbol = _step3.value;
                      arrPro.push(symbol.doStart(30));
                    }
                    _context2.next = 4;
                    return Promise.all(arrPro);
                  case 4:
                    _this3.schedule(scheduleUpdate);
                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            })), startDelay);
          });
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            var delayTimes = 0; //symbol.itemInfo.IsReward ? this._iCol * 0.1 : 0;
            arrPro.push(symbol.doEffect(delayTimes));
            //            // arrPro.push(symbol.doEffect(SlotPig_symbol.rewardCount * 0.15));

            if (symbol.itemInfo.IsReward) {
              SlotPig_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  SlotPig_symbol.rewardCount = 0;
                case 1:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function doClear() {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        return SlotPig_symbol;
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

System.register("chunks:///_virtual/SlotPig_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "87e349/DAdP36imfFqU+7c6", "SlotPig_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_symbolEffectRoot = exports('default', (_dec = ccclass("SlotPigSymbolEffectRoot"), _dec2 = menu("game/SlotPigGame/SlotPig_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_symbolEffectRoot, _Component);
        function SlotPig_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotPig_symbolEffectRoot.prototype;
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
        return SlotPig_symbolEffectRoot;
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

System.register("chunks:///_virtual/SlotPig_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotPigDef.ts', './SlotPigUtils.ts', './SlotPig_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, tween, v3, instantiate, UITransform, Sprite, Label, sp, UIOpacity, Component, AutoChangeParent, eSymbol, SlotPigUtils, SlotPig_symbolItem;
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
      SpriteFrame = module.SpriteFrame;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Label = module.Label;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      SlotPig_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "e9c06KWXWtC74FywjbqEcN7", "SlotPig_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eRate = [200, 100, 50, 20, 10, 5, 3];
      var SlotPig_symbolInfo = exports('default', (_dec = ccclass("SlotPigSymbolInfo"), _dec2 = menu("game/SlotPigGame/SlotPig_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_symbolInfo, _Component);
        function SlotPig_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_special", _descriptor4, _assertThisInitialized(_this));
          //    // @property(cc.Label)
          //    // Label_hu: cc.Label = null;
          //    // @property(cc.Label)
          //    // Label_wild: cc.Label = null;
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotPig_symbolInfo.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.mask.on(Node.EventType.TOUCH_END, function () {
            _this2.mask.active = false;
            tween(_this2.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this2.Node_item.active = false;
              _this2.Node_info.active = false;
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
          var _this3 = this;
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
          this.Node_item.removeAllChildren();
          var newSymbol = instantiate(symbolNode);
          newSymbol.removeComponent(AutoChangeParent);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          newSymbol.on(Node.EventType.TOUCH_END, function () {
            _this3.mask.active = false;
            tween(_this3.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this3.Node_item.active = false;
              _this3.Node_info.active = false;
            }).start();
          }, this);
          this.Node_item.addChild(newSymbol);
          //        // newSymbol.scale = symbol.bonusSymbol == SlotPigDef.eSymbol.Wild ? 1.1 : 0.7;

          var symbolItem = this.Node_item.getComponent(SlotPig_symbolItem);
          symbolItem.itemInfo = symbol;
          switch (symbol.bonusSymbol) {
            case eSymbol.Wild:
              {
                this.Node_icon.active = false;
                this.Label_special.active = true;
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Label_special.getComponent(UITransform).priority = 1;
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.bonusSymbol);
                this.Node_item.getComponent(UITransform).priority = 0;
                this.Node_icon.getComponent(UITransform).priority = 1;
                this.Label_special.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;
                this.Node_info.getComponent(Sprite).sizeMode = Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                var rate = symbol.bonusSymbol == eSymbol.Wild ? eRate[0] : eRate[symbol.bonusSymbol];
                var Label_rate = this.Node_icon.getChildByName("Label_rate_0").getComponent(Label);
                Label_rate.string = "" + rate;
                break;
              }
          }
          var itemSpine = newSymbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, SlotPigUtils.instance.getSymbolAniName(symbol.bonusSymbol, false), symbol.bonusSymbol == eSymbol.Wild ? true : false);
          }
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos));
          pos.x = pos.x - this.Node_info.getComponent(UITransform).width / 2 < -372 ? pos.x + this.Node_info.getComponent(UITransform).width / 3.75 : pos.x + this.Node_info.getComponent(UITransform).width / 2 > 372 ? pos.x - this.Node_info.getComponent(UITransform).width / 3.75 : pos.x;
          this.Node_info.position = pos;
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        return SlotPig_symbolInfo;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_special", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "arrBgSpFrame", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec8], {
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

System.register("chunks:///_virtual/SlotPig_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigModel.ts', './SlotPigDef.ts', './EventManager.ts', './SlotPigUtils.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, sp, Sprite, tween, UITransform, Node, Component, SlotPigModel, eConstDef, eSymbol, eRunStatus, eZindex, eEvent, EventManager, SlotPigUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      sp = module.sp;
      Sprite = module.Sprite;
      tween = module.tween;
      UITransform = module.UITransform;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "3eba7kk5/VItblA95KETebc", "SlotPig_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_symbolItem = exports('default', (_dec = ccclass("SlotPigSymbolItem"), _dec2 = menu("game/SlotPigGame/SlotPig_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_symbolItem, _Component);
        function SlotPig_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this.itemInfo = null;
          _this._iCol = 0;
          _this.tag = 0;
          _this.cSymbolStartY = 0;
          _this.Node_effectRoot = null;
          _this.Node_symbol = null;
          _this._spineEffect_kuang = null;
          _this.isBreak = false;
          return _this;
        }
        var _proto = SlotPig_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          //        // this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          //        // this.node.off("click", this.onSymbolClick, this);
        };
        _proto.onDestroy = function onDestroy() {}
        //    ///
        ;

        _proto.initItem = function initItem(info, iCol, maxIndex, tag) {
          if (iCol === void 0) {
            iCol = 0;
          }
          if (maxIndex === void 0) {
            maxIndex = 3;
          }
          if (tag === void 0) {
            tag = 0;
          }
          this.tag = tag;
          if (iCol > -1 && maxIndex > 0) {
            this._iCol = iCol;
            this.cSymbolStartY = maxIndex % 2 == 0 ? -eConstDef.cSymbolH * Math.floor(maxIndex / 2) : -eConstDef.cSymbolH * Math.floor(maxIndex / 2) - eConstDef.cSymbolH / 2;
            var Node_center = this.node.parent.parent.parent; //Node_center
            this.Node_effectRoot = Node_center.getChildByName("Node_effectRoot");
          }
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          if (SlotPigModel.instance.specialStartCol > 0 && this._iCol == SlotPigModel.instance.specialStartCol) {
            this.doBindToUp();
          }
          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);
        };
        _proto.updateIcon = function updateIcon(Sym, isSpine, isIdle) {
          var _this2 = this;
          if (isSpine === void 0) {
            isSpine = true;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          isSpine = this.itemInfo.bonusSymbol >= eSymbol.Wild && this.itemInfo.bonusSymbol <= eSymbol.Wild_10 ? true : false;
          var nomalScale = this.itemInfo.bonusSymbol >= eSymbol.Wild && this.itemInfo.bonusSymbol <= eSymbol.Wild_10 ? 0.6 : 1;
          var toScale = this.itemInfo.bonusSymbol >= eSymbol.Wild && this.itemInfo.bonusSymbol <= eSymbol.Wild_10 ? 0.6 : 1;
          this.Node_symbol.scale = v3(!isIdle ? toScale : nomalScale, !isIdle ? toScale : nomalScale, 1);
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = SlotPigUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
              if (!isIdle) {
                tween(_this2.Node_symbol).repeatForever(tween(_this2.Node_symbol).to(0.25, {
                  scale: v3(0.8, 0.8, 1)
                }, {
                  easing: "backIn"
                }).to(0.25, {
                  scale: v3(1.2, 1.2, 1)
                }, {
                  easing: "backOut"
                }).to(0.5, {
                  scale: v3(1.0, 1.0, 1)
                }, {
                  easing: "sineIn"
                }).delay(0.5)).start();
              }

              //                // if (itemSymbol) {
              //                //     gts.Debug.Log(`=updateIcon=Sym=${Sym}=length=${length}=spriteFrame=${itemSymbol.name}`);
              //                // }
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = SlotPigUtils.instance.getSkeletonData(Sym);
              var itemSpine = _this2.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this2.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = true;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              if (isIdle) {
                itemSpine.setAnimation(0, SlotPigUtils.instance.getSymbolAniName(Sym, true), false);
              } else {
                itemSpine.setAnimation(0, SlotPigUtils.instance.getSymbolAniName(Sym, false, _this2.itemInfo.IsReward), false);
                itemSpine.addAnimation(0, SlotPigUtils.instance.getSymbolAniName(Sym, true), true);
              }
            });
          }
        };
        _proto.updateSymbol = function updateSymbol(isSpine, isIdle) {
          if (isSpine === void 0) {
            isSpine = false;
          }
          if (isIdle === void 0) {
            isIdle = true;
          }
          this.updateIcon(this.itemInfo.bonusSymbol, isSpine, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.bonusSymbol) {
            case eSymbol.Wild:
              {
                _zIndex = eZindex.icon_scatter;
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
                _zIndex = SlotPigModel.instance.specialStartCol > 0 && this._iCol == SlotPigModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                if (SlotPigModel.instance.specialStartCol == -1 && this.itemInfo.IsReward) {
                  this.doBindToUp();
                }
                break;
              }
            case eRunStatus.CLEAR:
              {
                if (SlotPigModel.instance.freeStatus == eRunStatus.RUNNING && this.itemInfo.IsReward) {
                  this.doBindToUp();
                }
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (SlotPigModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);

          //        // SlotPigUtils.instance.playSound(SlotPigDef.eSound.uiInfo);
        };

        _proto.doStart = function doStart(offset) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            var pos_0 = _this3.node.getPosition().y + offset;
            tween(_this3.node).to(0.15, {
              position: v3(_this3.node.position.x, pos_0)
            }, {
              easing: "cubicOut"
            }).call(function () {
              resolve();
            }).start();
          });
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          // this.node.getPosition().y -= offset;
          this.node.setPosition(this.node.position.x, this.node.position.y - offset);
          var posSide = eConstDef.cSymbolStartY;
          if (this.node.getPosition().y <= posSide) {
            ret = false;
          }
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this4 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            var pos_0 = _this4.node.getPosition().y + offset;
            if (!SlotPigModel.instance.isQuickStop || _this4._iCol == SlotPigModel.instance.specialStartCol) {
              var duration = _this4._iCol == SlotPigModel.instance.specialStartCol ? 1.0 : 0.5;
              tween(_this4.node).to(duration, {
                position: v3(_this4.node.position.x, pos_0)
              }, {
                easing: "elasticOut"
              }).call(function () {
                _this4.updateIcon(_this4.itemInfo.bonusSymbol, true);
                _this4.updateZIndex(eRunStatus.STOP);
              }).start();
            } else {
              tween(_this4.node).to(0.1, {
                position: v3(_this4.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).call(function () {
                _this4.updateIcon(_this4.itemInfo.bonusSymbol, true);
                _this4.updateZIndex(eRunStatus.STOP);
              }).start();
            }
            resolve();
          });
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node("kuang_effect");
            newNode.scale = v3(1.0, 1.0, 1);
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            //            // itemSpine.useTint = true;
            //            // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

            _this5.scheduleOnce(function () {
              itemSpine.skeletonData = SlotPigUtils.instance.getSkeletonData("kuang_effect");
              itemSpine.setAnimation(0, "intro", false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                itemSpine.setAnimation(0, "idle", true);
                resolve();
              });
            });

            //            // let wPos = this.node.convertToWorldSpaceAR(cc.v3(0));
            //            // let nPos = this.Node_effectRoot.convertToNodeSpaceAR(wPos);
            //            // newNode.position = nPos;
            //            // this.Node_effectRoot.addChild(newNode);
            _this5.node.addChild(newNode);
            if (_this5.itemInfo.bonusSymbol == eSymbol.Wild) {
              newNode.getComponent(UITransform).priority = 5;
              _this5.Node_symbol.getComponent(UITransform).priority = 10;
            } else {
              newNode.getComponent(UITransform).priority = 5;
              _this5.Node_symbol.getComponent(UITransform).priority = 10;
            }
            _this5._spineEffect_kuang = itemSpine;
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            if (_this6.itemInfo.IsReward) {
              _this6.scheduleOnce(function () {
                _this6.addEffectKuang();
                _this6.scheduleOnce(function () {
                  _this6.updateSymbol(true, false);
                  resolve();
                }, 0.05);
              }, delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp(isBind) {} //        // let AutoChange = AutoChangeParent.Bind(this.Node_symbol, isBind ? this.Node_effectRoot : this.node, true).OnUpdateNotify((dt: number) => {
        //        //     if (this.node.parent) {
        //        //         this.Node_symbol.opacity = this.node.opacity;
        //        //         this.Node_symbol.active = this.node.active;
        //        //         this.Node_symbol.scale = this.node.scale * this.Node_symbol.scale;
        //        //     } else {
        //        //         this.Node_symbol.destroy();
        //        //         this.node.destroy();
        //        //     }
        //        // }, this);
        //        // AutoChange.DoChange();
        ;

        return SlotPig_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPig_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotPigUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, SlotPigUtils;
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
      SlotPigUtils = module.SlotPigUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "136029v8G5H4K+2NDxvq6aK", "SlotPig_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotPig_winTip = exports('default', (_dec = ccclass("SlotPigWinTip"), _dec2 = menu("game/SlotPigGame/SlotPig_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPig_winTip, _Component);
        function SlotPig_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotPig_winTip.prototype;
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
            _this2.Label_win.string = "" + SlotPigUtils.instance.numberFormatFloat(gold / 1000, 2.0);
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
            SlotPigUtils.instance.updateLabelFormat(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
            SlotPigUtils.instance.updateLabelFormat(this.Label_win, gold);
          }
        };
        return SlotPig_winTip;
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

System.register("chunks:///_virtual/SlotPigCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './SlotPigModel.ts', './I18n.ts', './ViewManager.ts', './SlotPigDef.ts', './SlotPigUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, SlotPigModel, i18n, ViewManager, eProto, eEvent, eRunStatus, SlotPigUtils, Common;
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
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "e5aac8Yj1VNQYXkNfHoslKL", "SlotPigCtrl", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SlotPigCtrl = exports('SlotPigCtrl', (_dec = ccclass("SlotPigCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(SlotPigCtrl, _GameDef$BaseCtrl);
        function SlotPigCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          //    /**
          //     * 请求下注
          //     * @param data
          //     */
          _this.isReqBet = false;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = SlotPigModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = SlotPigCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete SlotPigCtrl._instance;
          SlotPigCtrl._instance = null;
          SlotPigModel.destroy();
          SlotPigUtils.destroy();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          //        // //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //        //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          //        // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.onRecvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.reqBet = function reqBet(buyFree) {
          if (buyFree === void 0) {
            buyFree = null;
          }
          this.isReqBet = true;
          var curBet = Math.floor(SlotPigModel.instance.curBet);
          if (buyFree) {
            SlotPigModel.instance.curTotalBet = curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000,
              buyFree: true
            });
          } else {
            SlotPigModel.instance.curTotalBet = curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000
            });
          }
        }
        //    /**请求排行榜 */
        ;

        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotPiggyGold"
          });
        }
        //    /**请求历史记录 */
        ;

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
            RecordType: "slotPiggyGold"
          });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          //        // NetManager.instance.sendOnlineData(SlotPigDef.eProto.HD_info, { betAmount: SlotPigModel.instance.curBet * 1000 });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotPiggyGold"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotPiggyGold",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotPiggyGold"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotPiggyGold",
            content: strContent,
            msgId: msgid
          });
        }
        //    //////////////////////////////////////////
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), !SlotPigUtils.instance.isChangeOrientation());
            }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (SlotPigModel.instance.isAuto) {
                SlotPigModel.instance.isAuto = false;
                EventManager.instance.emit(eEvent.onAutoClose);
              }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_Bet:
              {
                SlotPigModel.instance.betResult = data.Data;
                this.isReqBet = false;
                gts.Debug.LogWarr("==SlotPigModel.instance.totalFreeTimes==" + SlotPigModel.instance.totalFreeTimes);
                if (SlotPigModel.instance.freeStatus == eRunStatus.NONE || SlotPigModel.instance.freeStatus == eRunStatus.END) {
                  SlotPigModel.instance.curBalance -= SlotPigModel.instance.curTotalBet;
                }
                break;
              }
            case eProto.HD_History:
            case eProto.HD_Rank:
              {
                emitData = data.Data;
                break;
              }

            //            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==SlotPig=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (SlotPigModel.instance.curBalance > 0) {
                  SlotPigModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                SlotPigModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==SlotPig=pushWallet==" + _HD_Wallet.VndBalance);
                if (SlotPigModel.instance.curBalance > 0) {
                  SlotPigModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                SlotPigModel.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return SlotPigCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPigDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "dddc0QpvvpCHoufowUisIhj", "SlotPigDef", undefined);
      var cBundle = exports('cBundle', "SlotPigGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Bet"] = "slotPiggyGold/HD_Bet";
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
        lineEffect: 1080,
        icon_scatterSPECIAL: 1090,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 4,
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.05,
        cQuickStopDelay: 0.35,
        cStopDelay: 1.25,
        cSymbolW: 220,
        cSymbolH: 106,
        cSymbolStartX: -440,
        cSymbolStartY: -265,
        cSpeedMax: 3000,
        cSpeedMin: 1500,
        CSpeedStart: 2000,
        CSpeedAdd: 200,
        CSpeedReduse: 150,
        CBaseRate: 1,
        CBaseBet_0: 1,
        CBaseBet_1: 2,
        CBaseBet_2: 5,
        CBaseBet_3: 30,
        CBaseBet_4: 100
      }); // cSpeedMax = 400,
      // cSpeedMin = 100,
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

      // export const enum eRunType {
      //     NONE,
      //     SPECIAL,
      // }

      var eSpecialType = exports('eSpecialType', {
        NONE: 0,
        SPECIAL: 1,
        NOMAL_10X: 2,
        SPECIALFaile: 3
      }); //特殊失败模式
      var eSymbol = exports('eSymbol', {
        NONE: 0,
        PiggyBank: 1,
        Ingot: 2,
        Cabbage: 3,
        Firecrackers: 4,
        Firecrackers_2: 5,
        Firecrackers_3: 6,
        Wild: 7,
        Wild_2: 8,
        Wild_5: 9,
        Wild_10: 10,
        Blank: 11
      }); //空白
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        eEvent["onGoldCollect"] = "onGoldCollect";
        eEvent["onSymbolBreak"] = "onSymbolBreak";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgm_mg: "sound/bgm_mg",
        bgm_bigwin_cue: "sound/bgm_bigwin_cue",
        bgm_bigwin_firework: "sound/bgm_bigwin_firework",
        bgm_bigwin: "sound/bgm_bigwin",
        bgm_bigwin_end: "sound/bgm_bigwin_end",
        cha_afterbigwin: "sound/cha_afterbigwin",
        cha_prize_win_a: "sound/cha_prize_win_a",
        cha_prize_win_b: "sound/cha_prize_win_b",
        cha_prize_win_c: "sound/cha_prize_win_c",
        prize_win: "sound/prize_win",
        prize_win_end: "sound/prize_win_end",
        sym_wild_nowin: "sound/sym_wild_nowin",
        spin_reel: "sound/spin_reel",
        spin_reel_stop: "sound/spin_reel_stop",
        spin_reel_quickstop: "sound/spin_reel_quickstop",
        angpau_shiny: "sound/angpau_shiny",
        sym_wild_normal: "sound/sym_wild_normal",
        sym_wild_x2: "sound/sym_wild_x2",
        sym_wild_x5: "sound/sym_wild_x5",
        sym_wild_x10: "sound/sym_wild_x10",
        cha_inactive: "sound/cha_inactive",
        spin_btn: "sound/spin_btn",
        fs_fastspin: "sound/fs_fastspin"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPigGame", ['./SlotPigCtrl.ts', './SlotPigDef.ts', './SlotPigModel.ts', './SlotPigScene.ts', './SlotPigUtils.ts', './SlotPigGameView.ts', './SlotPig_ScrollView.ts', './SlotPig_btnEffect.ts', './SlotPig_helpTip.ts', './SlotPig_history.ts', './SlotPig_historyItem.ts', './SlotPig_rank.ts', './SlotPig_rankItem.ts', './SlotPig_setAuto.ts', './SlotPig_setBase.ts', './SlotPig_shake.ts', './SlotPig_symbol.ts', './SlotPig_symbolEffectRoot.ts', './SlotPig_symbolInfo.ts', './SlotPig_symbolItem.ts', './SlotPig_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotPigGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './SlotPigDef.ts', './SlotPigModel.ts', './SlotPigCtrl.ts', './ViewManager.ts', './SlotPigUtils.ts', './SlotPig_winTip.ts', './SlotPig_symbol.ts', './I18n.ts', './SlotPig_symbolInfo.ts', './SlotPig_btnEffect.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Prefab, view, sys, tween, v3, instantiate, UIOpacity, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, cBundle, eAutoRateType, eConstDef, eSymbol, eSound, eProto, SlotPigModel, SlotPigCtrl, ViewManager, SlotPigUtils, SlotPig_winTip, SlotPig_symbol, i18n, SlotPig_symbolInfo, SlotPig_btnEffect, Common;
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
      Prefab = module.Prefab;
      view = module.view;
      sys = module.sys;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
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
      cBundle = module.cBundle;
      eAutoRateType = module.eAutoRateType;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eProto = module.eProto;
    }, function (module) {
      SlotPigModel = module.SlotPigModel;
    }, function (module) {
      SlotPigCtrl = module.SlotPigCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      SlotPig_winTip = module.default;
    }, function (module) {
      SlotPig_symbol = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      SlotPig_symbolInfo = module.default;
    }, function (module) {
      SlotPig_btnEffect = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "a1209pwmONJYar7mLyat2ch", "SlotPigGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotPigGameView = exports('default', (_dec = ccclass("SlotPigGameView"), _dec2 = menu("game/SlotPigGame/SlotPigGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SlotPig_symbol), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(SlotPig_symbolInfo), _dec21 = property(Button), _dec22 = property(Label), _dec23 = property(sp.Skeleton), _dec24 = property(sp.Skeleton), _dec25 = property(Node), _dec26 = property(sp.Skeleton), _dec27 = property(Node), _dec28 = property(Prefab), _dec29 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotPigGameView, _GameDef$BaseView);
        function SlotPigGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SlotPig_symbolList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_setFastAuto", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_SlotPig", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_SlotPig_special", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_specialBg", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_special_quick", _descriptor24, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_zp_light: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Node_symbolList", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolItem", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor27, _assertThisInitialized(_this));
          _this.blinkIndex = 0;
          _this.isDoWildIconBLink = true;
          _this.arrBtnStatus = [];
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = SlotPigGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotPigCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!SlotPigUtils.instance.isChangeOrientation()) {
            var viewSize = view.getFrameSize();
            if (viewSize.width / viewSize.height > 750 / 1334) {
              // this.Node_action.getPosition().y += 15;
              // this.Node_menu.getPosition().y += 15;
              // this.Button_menu.node.getPosition().y += 15;
              // this.Button_run.node.getPosition().y += 15;
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

          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          //        // EventManager.instance.on(
          //        //     SlotPigDef.eEvent.onSymbolClick,
          //        //     (symbol?: SlotPigDef.IPosMsg, symbolNode?: cc.Node, pos?: cc.Vec3) => {
          //        //         this.Node_info.node.active = true;
          //        //         this.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          //        //     },
          //        //     this
          //        // );

          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              SlotPigModel.instance.autoTimes = times;
              SlotPigModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              //                    // let btnRunEffect = this.Button_run.node.getComponent(SlotPig_btnEffect);
              //                    // btnRunEffect.switchAni("push2");

              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (SlotPigModel.instance.gameStatus == eRunStatus.NONE || SlotPigModel.instance.gameStatus == eRunStatus.END) {
                _this2.scheduleOnce(function () {
                  SlotPigCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            var Background = _this2.Button_setFastAuto.node.getChildByName("Background");
            var checkmark = _this2.Button_setFastAuto.node.getChildByName("checkmark");
            Background.active = !SlotPigModel.instance.isQuickStop;
            checkmark.active = SlotPigModel.instance.isQuickStop;
            _this2.Button_setFastAuto.target = SlotPigModel.instance.isQuickStop ? checkmark : Background;
            _this2.Button_setFastAuto.interactable = !SlotPigModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = SlotPigModel.instance.isAuto;
            SlotPigUtils.instance.updateLabel(_this2.Label_autoTimes, SlotPigModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            SlotPigModel.instance.autoTimes = 0;
            SlotPigModel.instance.isAuto = false;
            if (_this2.arrBtnStatus.length > 0) {
              for (var _iterator = _createForOfIteratorHelperLoose(_this2.arrBtnStatus), _step; !(_step = _iterator()).done;) {
                var obj = _step.value;
                obj.btn.interactable = true;
              }
            }
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.node.emit("resumeEffect");
            _this2.Button_run.interactable = true;
            var btnRunEffect = _this2.Button_run.node.getComponent(SlotPig_btnEffect);
            btnRunEffect.switchAni();

            //                // SlotPigUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_setFastAuto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            SlotPigUtils.instance.updateLabel(_this2.Label_autoTimes, SlotPigModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          //        // EventManager.instance.off(SlotPigDef.eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          SlotPigModel.instance.clearGameData();
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
              //                // SlotPigCtrl.instance.reEnterRoom();

              if (SlotPigModel.instance.isAuto && SlotPigCtrl.instance.isReqBet) {
                SlotPigCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", SlotPigModel.instance._curIndex_baseScore + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", SlotPigModel.instance._curIndex_baseRate + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", SlotPigModel.instance._curIndex_baseBet + 1);
          SlotPigModel.instance.curBet = SlotPigUtils.instance.getBaseNum(SlotPigModel.instance._curIndex_baseScore) * (SlotPigModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          var _curIndex_baseScore = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex");
          _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          var _curIndex_baseRate = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex");
          _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          var _curIndex_baseBet = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex");
          _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;
          SlotPigModel.instance._curIndex_baseScore = _curIndex_baseScore;
          SlotPigModel.instance._curIndex_baseRate = _curIndex_baseRate;
          SlotPigModel.instance._curIndex_baseBet = _curIndex_baseBet;
          SlotPigModel.instance.curBet = SlotPigUtils.instance.getBaseNum(SlotPigModel.instance._curIndex_baseScore) * (SlotPigModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          if (SlotPigModel.instance._curIndex_baseBet >= 29) {
            SlotPigModel.instance._curIndex_baseBet = 29;
          } else if (SlotPigModel.instance._curIndex_baseBet <= 0) {
            SlotPigModel.instance._curIndex_baseBet = 0;
          }
          SlotPigUtils.instance.loadRes_icon(function () {
            if (_this4.SlotPig_symbolList) {
              //            //test
              var initList = [];
              var randBlank = Math.floor(Math.random() * 3);
              for (var i = 0; i < _this4.SlotPig_symbolList.length; i++) {
                var symList = [];
                for (var j = 0; j < 5; j++) {
                  var sym = null;
                  if (randBlank == i) {
                    sym = j == 1 || j == 3 ? Math.floor(Math.random() * eSymbol.Firecrackers_3 + 1) : eSymbol.Blank;
                  } else {
                    sym = j == 1 || j == 3 ? eSymbol.Blank : Math.floor(Math.random() * eSymbol.Firecrackers_3 + 1);
                  }
                  symList.push({
                    bonusSymbol: sym,
                    IsReward: false
                  });
                }
                _this4.SlotPig_symbolList[i].init(symList);
                initList.push(symList);
              }
              gts.Debug.LogWarr("==initList==" + JSON.stringify(initList));
              SlotPigCtrl.instance.reqEnterRoom();
            }

            //            // this.Node_mask_1_6.zIndex = SlotPigDef.eZindex.MASK;
          });

          this.Label_bet.string = SlotPigUtils.instance.numberFormat(SlotPigModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
          this.schedule(this.doWildIconBLink, 4.0);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_setFastAuto":
              {
                if (!SlotPigModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", SlotPigUtils.instance.bundle, function () {}, function (prefab) {
                    var newNode = instantiate(prefab);
                    Common.transformSize(newNode);
                    ViewManager.instance.popNodeView(newNode, true);
                  }, true);
                } else {
                  this.Button_setFastAuto.interactable = true;
                }
                break;
              }
            case "Node_bigWinEffect":
              {
                this.isStopBigWin = true;
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
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", SlotPigUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", SlotPigUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", SlotPigUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
            case "Button_run":
              {
                if (SlotPigModel.instance.isAuto) {
                  SlotPigModel.instance.isAuto = false;
                  SlotPigModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = SlotPigModel.instance.isAuto;
                  SlotPigUtils.instance.updateLabel(this.Label_autoTimes, SlotPigModel.instance.autoTimes);
                  if (SlotPigModel.instance.gameStatus == eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    //                        // this.Button_setFastAuto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");

                    //                        // this.Button_setFastAuto.interactable = false;
                  }

                  var btnRunEffect = this.Button_run.node.getComponent(SlotPig_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (SlotPigCtrl.instance.isReqBet) {
                  break;
                }
                if (SlotPigModel.instance.gameStatus == eRunStatus.NONE || SlotPigModel.instance.gameStatus == eRunStatus.END) {
                  var betGold = SlotPigModel.instance.curBet * 1000;
                  if (SlotPigModel.instance.curBalance < betGold) {
                    Common.showTip(i18n.lang[10001], !SlotPigUtils.instance.isChangeOrientation());
                    return;
                  }
                  SlotPigCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (SlotPigModel.instance.gameStatus != eRunStatus.NONE && SlotPigModel.instance.gameStatus != eRunStatus.END || SlotPigModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", SlotPigUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  Common.transformSize(setBase);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
              }
          }
        };
        _proto.showIconReBlink = function showIconReBlink(iShow) {
          if (iShow === void 0) {
            iShow = true;
          }
          if (!iShow) {
            for (var i = 0; i < 8; i++) {
              var _nodeIcon = this.Node_icon.getChildByName("Node_icon_" + i);
              _nodeIcon.getComponent(UIOpacity).opacity = 100;
            }
            var _Node_winTip = this.Node_icon.getChildByName("Node_winTip");
            if (_Node_winTip.active) {
              Tween.stopAllByTarget(_Node_winTip);
              _Node_winTip.active = false;
            }
            return;
          }
          var result = SlotPigModel.instance.betResult.Res[0];
          if (result.openNums[0].bonusSymbol != result.openNums[2].bonusSymbol) {
            return;
          }
          for (var _i = 0; _i < 8; _i++) {
            var _nodeIcon2 = this.Node_icon.getChildByName("Node_icon_" + _i);
            _nodeIcon2.getComponent(UIOpacity).opacity = 100;
          }
          var winIndex = result.openNums[0].bonusSymbol == eSymbol.Wild ? 0 : result.openNums[0].bonusSymbol;
          var nodeIcon = this.Node_icon.getChildByName("Node_icon_" + winIndex);
          nodeIcon.getComponent(UIOpacity).opacity = 255;
          var Node_winTip = this.Node_icon.getChildByName("Node_winTip");
          Node_winTip.active = true;
          Node_winTip.position = nodeIcon.position;
          tween(Node_winTip.getComponent(UIOpacity)).blink(2, 4).start();
        };
        _proto.showIcon = function showIcon(isWin) {
          if (isWin === void 0) {
            isWin = true;
          }
          for (var i = 0; i < 8; i++) {
            var nodeIcon = this.Node_icon.getChildByName("Node_icon_" + i);
            nodeIcon.getComponent(UIOpacity).opacity = isWin ? 100 : 255;
          }
          if (isWin) {
            var result = SlotPigModel.instance.betResult.Res[0];
            var winIndex = -1;
            var arrNums = [0, 0, 0, 0, 0, 0, 0, 0];
            for (var _iterator2 = _createForOfIteratorHelperLoose(result.openNums), _step2; !(_step2 = _iterator2()).done;) {
              var openNums = _step2.value;
              if (openNums.bonusSymbol < eSymbol.Wild) {
                arrNums[openNums.bonusSymbol]++;
              } else {
                for (var _i4 = 1; _i4 < arrNums.length; _i4++) {
                  arrNums[_i4]++;
                }
              }
            }
            if (arrNums[eSymbol.Wild] == 3) {
              winIndex = 0;
            } else {
              for (var _i2 = 1; _i2 < arrNums.length - 1; _i2++) {
                if (arrNums[_i2] >= 3) {
                  winIndex = _i2;
                  break;
                }
              }
              if (winIndex == -1 && arrNums[eSymbol.Firecrackers] + arrNums[eSymbol.Firecrackers_2] + arrNums[eSymbol.Firecrackers_3] >= 3) {
                winIndex = 7;
              }
            }
            gts.Debug.LogWarr("==showIcon.arrNums==" + JSON.stringify(arrNums));
            gts.Debug.LogWarr("==showIcon.winIndex==" + winIndex);
            var _nodeIcon3 = this.Node_icon.getChildByName("Node_icon_" + winIndex);
            _nodeIcon3.getComponent(UIOpacity).opacity = 255;
            var Node_winTip = this.Node_icon.getChildByName("Node_winTip");
            Node_winTip.active = true;
            Node_winTip.position = _nodeIcon3.position;
            Tween.stopAllByTarget(Node_winTip);
            if (result.openNums[1].bonusSymbol >= eSymbol.Wild) {
              var Node_winTip_pig = this.Node_icon.getChildByName("Node_winTip_pig");
              Node_winTip_pig.active = true;
              var winWildIndex = result.openNums[1].bonusSymbol - eSymbol.Wild;
              var Node_icon_wild = this.Node_icon.getChildByName("Node_icon_wild");
              var _loop = function _loop() {
                var nodeIcon = Node_icon_wild.getChildByName("Node_icon_" + _i3);
                Tween.stopAllByTarget(nodeIcon);
                if (winWildIndex == _i3) {
                  nodeIcon.active = true;
                  tween(nodeIcon.getComponent(UIOpacity)).to(0.2, {
                    opacity: 255
                  }).start();
                } else if (nodeIcon.active) {
                  tween(nodeIcon.getComponent(UIOpacity)).to(0.2, {
                    opacity: 0
                  }).call(function () {
                    nodeIcon.active = false;
                  }).start();
                }
              };
              for (var _i3 = 0; _i3 < 4; _i3++) {
                _loop();
              }
              Tween.stopAllByTarget(Node_icon_wild);
              tween(Node_icon_wild.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              this.isDoWildIconBLink = false;
              var arrSound = [eSound.sym_wild_normal, eSound.sym_wild_x2, eSound.sym_wild_x5, eSound.sym_wild_x10];
              SlotPigUtils.instance.playOneShot(arrSound[result.openNums[1].bonusSymbol - eSymbol.Wild]);
            }
          }
        };
        _proto.doWildIconBLink = function doWildIconBLink() {
          if (!this.isDoWildIconBLink) {
            return;
          }
          var Node_icon_wild = this.Node_icon.getChildByName("Node_icon_wild");

          //        // if (
          //        //     SlotPigModel.instance.gameStatus >= SlotPigDef.eRunStatus.CLEAR &&
          //        //     SlotPigModel.instance.betResult &&
          //        //     SlotPigModel.instance.betResult.Res[0].prizeAmount > 0 &&
          //        //     SlotPigModel.instance.betResult.Res[0].openNums[1].bonusSymbol >= SlotPigDef.eSymbol.Wild &&
          //        //     SlotPigModel.instance.betResult.Res[0].openNums[1].bonusSymbol <= SlotPigDef.eSymbol.Wild_10
          //        // ) {
          //        //     return;
          //        // }

          if (SlotPigModel.instance.gameStatus != eRunStatus.RUNNING) {
            var randAni = ["idle", "idle", "idle2", "idle", "idle", "idle3", "idle", "idle"];
            if (this.Node_SlotPig.node.active) {
              var index = Math.floor(Math.random() * randAni.length);
              if (this.Node_SlotPig.animation != randAni[index]) {
                if (randAni[index] == "idle3") {
                  SlotPigUtils.instance.playOneShot(eSound.cha_inactive);
                }
                this.Node_SlotPig.setAnimation(0, randAni[index], false);
                this.Node_SlotPig.addAnimation(0, "idle", true);
              }
            }
          }
          var nodeIcon = Node_icon_wild.getChildByName("Node_icon_" + this.blinkIndex);
          if (nodeIcon.active) {
            tween(nodeIcon.getComponent(UIOpacity)).to(1.5, {
              opacity: 0
            }).call(function () {
              nodeIcon.active = false;
            }).start();
          }
          this.blinkIndex = (this.blinkIndex + 1) % 4;
          var nodeIconNew = Node_icon_wild.getChildByName("Node_icon_" + this.blinkIndex);
          nodeIconNew.active = true;
          nodeIconNew.getComponent(UIOpacity).opacity = 0;
          tween(nodeIconNew.getComponent(UIOpacity)).to(1.5, {
            opacity: 255
          }).start();
        };
        _proto.showMask = function showMask(isShow) {} //        // if (!isShow) {
        //        //     if (this.Node_mask_1_6.active) {
        //        //         cc.tween(this.Node_mask_1_6)
        //        //             .stop()
        //        //             .to(0.2, { opacity: 0 })
        //        //             .call(() => {
        //        //                 this.Node_mask_1_6.active = false;
        //        //             })
        //        //             .start();
        //        //     }
        //        //     return;
        //        // }
        //        // //mask show
        //        // if (!this.Node_mask_1_6.active) {
        //        //     this.Node_mask_1_6.active = true;
        //        //     this.Node_mask_1_6.opacity = 0;
        //        //     cc.tween(this.Node_mask_1_6).stop().to(0.1, { opacity: 180 }).start();
        //        // }
        ;

        _proto.doStartRun = function doStartRun() {
          var _this5 = this;
          if (SlotPigModel.instance.gameStatus > eRunStatus.NONE && SlotPigModel.instance.gameStatus < eRunStatus.END) {
            return;
          }
          this.arrBtnStatus = [];
          var btn = this.Node_action.getChildByName("Button_setFastAuto").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: true
          });
          btn.interactable = false;
          btn = this.Node_action.getChildByName("Button_setBase").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: true
          });
          btn.interactable = false;
          btn = this.Node_action.parent.getChildByName("Button_menu").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: true
          });
          btn.interactable = false;
          this.isDoWildIconBLink = true;
          var Node_icon_wild = this.Node_icon.getChildByName("Node_icon_wild");
          Tween.stopAllByTarget(Node_icon_wild);
          tween(Node_icon_wild.getComponent(UIOpacity)).to(0.2, {
            opacity: 100
          }).start();

          //        // this.Label_gold.node.color = cc.color(255, 255, 255, 255);
          //        // this.Label_bet.node.color = cc.color(255, 255, 255, 255);
          //        // this.Label_win.node.color = cc.color(255, 255, 255, 255);

          SlotPigModel.instance.totalRate = 0;
          var Node_winTip = this.Node_icon.getChildByName("Node_winTip");
          Node_winTip.active = false;
          var Node_winTip_pig = this.Node_icon.getChildByName("Node_winTip_pig");
          Node_winTip_pig.active = false;
          this.showIcon(false);
          this.showMask(false);
          this.Node_info.node.active = false;
          if (this.Node_winTip.active) {
            tween(this.Node_winTip).delay(0.5).call(function () {
              _this5.Node_helpTip.active = true;
              _this5.Node_winTip.active = false;
            }).start();
          }
          if (!this.Node_SlotPig_special.node.active) {
            this.Node_SlotPig.node.active = true;
            if (this.Node_SlotPig.animation != "idle") {
              this.Node_SlotPig.setAnimation(0, "idle", true);
            }
          }
          this.Node_special_quick.node.active = false;
          var Node_bg_left = this.Node_specialBg.getChildByName("Node_bg_left");
          var Node_bg_right = this.Node_specialBg.getChildByName("Node_bg_right");
          var Node_bg_center = this.Node_specialBg.getChildByName("Node_bg_center");
          Node_bg_left.active = false;
          Node_bg_right.active = false;
          Node_bg_center.active = false;
          this.Node_specialBg.active = false;
          this.isStopBigWin = false;
          SlotPigModel.instance.curTotalWin = 0;
          this.Label_win.string = "";
          EventManager.instance.emit(eEvent.updateWin, 0);
          SlotPigModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "star" && !SlotPigModel.instance.isAuto) {
            this.Skeleton_run.setAnimation(0, "star", false);
            this.Skeleton_run.setCompleteListener(function () {
              _this5.Skeleton_run.setCompleteListener(null);
              if (!SlotPigModel.instance.isAuto) {
                _this5.Button_run.interactable = false;
                _this5.Button_run.node.emit("pauseEffect");
                _this5.Skeleton_run.setAnimation(0, "stop", true);
              }
            });
          }
          SlotPigUtils.instance.playOneShot(eSound.spin_btn);
          if (SlotPigModel.instance.isAuto && SlotPigModel.instance.autoTimes > 0) {
            SlotPigModel.instance.autoTimes--;
            SlotPigUtils.instance.updateLabel(this.Label_autoTimes, SlotPigModel.instance.autoTimes);
          }
          var children = this.Node_effectRoot.children;
          for (var _iterator3 = _createForOfIteratorHelperLoose(children), _step3; !(_step3 = _iterator3()).done;) {
            var nodeChild = _step3.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.active = false;
              nodeChild.destroy();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, startDelay, stopDelay, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  startDelay = 0;
                  stopDelay = 0;
                  for (i = 0; i < _this5.SlotPig_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopStartDelay : eConstDef.cStartDelay;
                    startDelay = i != 1 ? startDelay : 4 * startDelay;
                    stopDelay = SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopDelay + startDelay : eConstDef.cStopDelay + startDelay;
                    stopDelay = SlotPigModel.instance.specialStartCol == i ? SlotPigModel.instance.isQuickStop ? stopDelay + 1 : stopDelay + 3 : stopDelay;
                    _this5.SlotPig_symbolList[i].setSpeed();
                    arrPro.push(_this5.SlotPig_symbolList[i].doRunning(startDelay, stopDelay));
                  }
                  _this5.scheduleOnce(function () {
                    SlotPigUtils.instance.playSound(eSound.spin_reel, false);
                  }, SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopStartDelay + 0.1 : eConstDef.cStartDelay + 0.2);
                  _this5.scheduleOnce(function () {
                    SlotPigUtils.instance.stopSound(eSound.spin_reel);
                    if (SlotPigModel.instance.isQuickStop) {
                      SlotPigUtils.instance.stopSound(eSound.spin_reel_quickstop);
                    } else {
                      SlotPigUtils.instance.stopSound(eSound.spin_reel_stop);
                    }
                  }, SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopDelay + startDelay + 0.1 : eConstDef.cStopDelay + startDelay + 0.5);
                  if (SlotPigModel.instance.specialStartCol > -1) {
                    _this5.scheduleOnce(function () {
                      _this5.Node_SlotPig.setAnimation(0, "feature_win", false);
                      _this5.Node_SlotPig.addAnimation(0, "feature_idle", true);
                      _this5.scheduleOnce(function () {
                        _this5.Node_special_quick.node.active = true;
                        _this5.Node_special_quick.setAnimation(0, "intro", false);
                        _this5.Node_special_quick.addAnimation(0, "idle", true);
                      }, 0.2);
                      _this5.scheduleOnce(function () {
                        _this5.Node_specialBg.active = true;
                        var Node_bg_left = _this5.Node_specialBg.getChildByName("Node_bg_left").getComponent(sp.Skeleton);
                        Node_bg_left.node.active = true;
                        Node_bg_left.setAnimation(0, "left_spawn", false);
                        Node_bg_left.addAnimation(0, "left_idle", true);
                        var Node_bg_right = _this5.Node_specialBg.getChildByName("Node_bg_right").getComponent(sp.Skeleton);
                        Node_bg_right.node.active = true;
                        Node_bg_right.setAnimation(0, "right_spawn", false);
                        Node_bg_right.addAnimation(0, "right_idle", true);
                        _this5.showIconReBlink();
                      }, 0.75);
                      SlotPigUtils.instance.playOneShot(eSound.fs_fastspin);
                    }, SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopDelay + startDelay - 0.75 : eConstDef.cStopDelay + startDelay - 0.5);
                    _this5.scheduleOnce(function () {
                      var Node_bg_center = _this5.Node_specialBg.getChildByName("Node_bg_center");
                      Node_bg_center.active = true;
                      tween(Node_bg_center.getComponent(UIOpacity)).blink(2.0, 4).start();
                      SlotPigUtils.instance.playOneShot(eSound.angpau_shiny);
                      _this5.Node_special_quick.node.active = true;
                      _this5.Node_special_quick.setAnimation(0, "end", false);
                      _this5.Node_special_quick.setCompleteListener(function () {
                        _this5.Node_special_quick.setCompleteListener(null);
                        _this5.Node_special_quick.node.active = false;
                        var result = SlotPigModel.instance.betResult.Res[0];
                        if (result.prizeAmount == 0) {
                          Tween.stopAllByTarget(Node_bg_center);
                          Node_bg_center.active = false;
                          SlotPigUtils.instance.playSound(eSound.sym_wild_nowin);
                        }
                      });
                    }, SlotPigModel.instance.isQuickStop ? eConstDef.cQuickStopDelay + startDelay + 1 : eConstDef.cStopDelay + startDelay + 3);
                  }
                  _context.next = 9;
                  return Promise.all(arrPro);
                case 9:
                  _this5.scheduleOnce(_this5.doRunEnd, 0);
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        };
        _proto.doAwait = function doAwait(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this7 = this;
            var result, arrPro, i, winAni, arrSound, com_SlotPig_winTip, _i5, Node_icon_wild, delayStart;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  SlotPigModel.instance.gameStatus = eRunStatus.CLEAR;
                  SlotPigModel.instance.curTotalWin = 0;
                  result = SlotPigModel.instance.betResult.Res[0];
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 35;
                    break;
                  }
                  //            //计算得分倍率
                  SlotPigModel.instance.totalRate = result.prizeAmount / (SlotPigModel.instance.curBet * 1000);
                  this.curBigWinLevel = SlotPigModel.instance.totalRate < 20 ? 0 : SlotPigModel.instance.totalRate < 50 ? 1 : 2;
                  SlotPigModel.instance.curTotalWin += result.prizeAmount;
                  this.showMask();

                  //            // if (SlotPigModel.instance.totalRate == 0) {
                  //            //     let arrSound = [SlotPigDef.eSound.voxWin1, SlotPigDef.eSound.voxWin2, SlotPigDef.eSound.voxWin3];
                  //            //     SlotPigUtils.instance.playSound(arrSound[Math.floor(Math.random() * 3)]);
                  //            // }

                  //            //doEffect
                  arrPro = [];
                  for (i = 0; i < this.SlotPig_symbolList.length; i++) {
                    arrPro.push(this.SlotPig_symbolList[i].doEffect());
                  }
                  _context2.next = 13;
                  return Promise.all(arrPro);
                case 13:
                  if (SlotPigModel.instance.specialStartCol > -1) {
                    this.Node_SlotPig.setAnimation(0, "idle3", false);
                    this.Node_SlotPig.addAnimation(0, "idle", true);
                  }
                  this.showIcon();

                  //            //大奖
                  _context2.next = 17;
                  return this.doShowBigWin(SlotPigModel.instance.curTotalWin);
                case 17:
                  //            //猪庆祝动画
                  this.Node_SlotPig.node.active = false;
                  this.Node_SlotPig_special.node.active = true;
                  winAni = SlotPigModel.instance.totalRate < 20 ? "smallwin" : "bigwin";
                  this.Node_SlotPig_special.setAnimation(0, winAni, false);
                  this.Node_SlotPig_special.setCompleteListener(function () {
                    _this7.Node_SlotPig_special.setCompleteListener(null);
                    _this7.Node_SlotPig_special.node.active = false;
                    _this7.Node_SlotPig.node.active = true;
                    if (_this7.Node_SlotPig.animation != "idle") {
                      _this7.Node_SlotPig.setAnimation(0, "idle", true);
                    }
                  });
                  if (SlotPigModel.instance.totalRate < 20) {
                    arrSound = [eSound.cha_prize_win_a, eSound.cha_prize_win_b, eSound.cha_prize_win_c];
                    SlotPigUtils.instance.playOneShot(arrSound[Math.floor(Math.random() * arrSound.length)]);
                  } else {
                    SlotPigUtils.instance.playOneShot(eSound.cha_afterbigwin);
                  }

                  //            //显示得分 tip
                  this.Node_tipEffect.setAnimation(0, "win", false);
                  this.Node_tipEffect.addAnimation(0, "idle", true);
                  SlotPigUtils.instance.playSound(eSound.prize_win, false, function () {
                    SlotPigUtils.instance.playSound(eSound.prize_win_end);
                  });
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  this.Label_win.string = "";
                  com_SlotPig_winTip = this.Node_winTip.getComponent(SlotPig_winTip);
                  com_SlotPig_winTip.doShow(result.prizeAmount);
                  if (SlotPigModel.instance.curTotalWin > 0) {
                    //                //gengxin
                    tween(this.Node_winTip.getChildByName("Node_title")).to(0.1, {
                      scale: v3(1.3, 1.3, 1)
                    }).to(0.1, {
                      scale: v3(1.0, 1.0, 1)
                    }).start();
                    tween(this.Label_win.node).to(0.1, {
                      scale: v3(1.3, 1.3, 1)
                    }).to(0.1, {
                      scale: v3(1.0, 1.0, 1)
                    }).start();
                    SlotPigUtils.instance.updateLabel(this.Label_win, SlotPigModel.instance.curTotalWin);
                    EventManager.instance.emit(eEvent.updateWin, SlotPigModel.instance.curTotalWin);
                  }
                  for (_i5 = 0; _i5 < this.SlotPig_symbolList.length; _i5++) {
                    this.SlotPig_symbolList[_i5].doClear();
                  }
                  _context2.next = 40;
                  break;
                case 35:
                  Node_icon_wild = this.Node_icon.getChildByName("Node_icon_wild");
                  Tween.stopAllByTarget(Node_icon_wild);
                  tween(Node_icon_wild.getComponent(UIOpacity)).to(0.2, {
                    opacity: 255
                  }).start();
                  if (this.Node_SlotPig.animation != "idle") {
                    this.Node_SlotPig.setAnimation(0, "idle", true);
                  }
                  this.showIconReBlink(false);
                case 40:
                  delayStart = 0.25;
                  if (SlotPigModel.instance.curTotalWin > 0) {
                    delayStart = 1.0;
                    if (SlotPigModel.instance.endBalance != SlotPigModel.instance.curBalance) {
                      SlotPigModel.instance.curBalance = SlotPigModel.instance.endBalance;
                      this.updateGold();
                    }
                  }
                  SlotPigModel.instance.gameStatus = eRunStatus.END;
                  SlotPigModel.instance.isAuto = SlotPigModel.instance.autoTimes > 0;
                  if (SlotPigModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      SlotPigCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    this.scheduleOnce(function () {
                      _this7.Skeleton_run.setCompleteListener(null);
                      _this7.Skeleton_run.setAnimation(0, "idle", true);
                      _this7.Button_run.interactable = true;
                      _this7.Button_run.node.emit("resumeEffect");
                      var btnRunEffect = _this7.Button_run.node.getComponent(SlotPig_btnEffect);
                      btnRunEffect.switchAni();
                    }, SlotPigModel.instance.curTotalWin > 0 ? 1.0 : 0);
                    this.Label_autoTimes.node.active = false;
                    SlotPigUtils.instance.updateLabel(this.Label_autoTimes, SlotPigModel.instance.autoTimes);

                    //            // this.Label_gold.node.color = cc.color(150, 220, 255, 255);
                    //            // this.Label_bet.node.color = cc.color(150, 220, 255, 255);
                    //            // this.Label_win.node.color = cc.color(150, 220, 255, 255);
                  }

                  this.scheduleOnce(function () {
                    if (!SlotPigModel.instance.isAuto) {
                      if (_this7.arrBtnStatus.length > 0) {
                        for (var _iterator4 = _createForOfIteratorHelperLoose(_this7.arrBtnStatus), _step4; !(_step4 = _iterator4()).done;) {
                          var obj = _step4.value;
                          obj.btn.interactable = obj.enable;
                        }
                      }
                    }
                  }, SlotPigModel.instance.curTotalWin > 0 ? 0.5 : 0);
                case 46:
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
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this8 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (SlotPigModel.instance.curBet * 1000);
            if (rate < 20) {
              //                //30
              resolve();
              return;
            }
            SlotPigUtils.instance.playSound(eSound.bgm_bigwin_cue, false, function () {
              SlotPigUtils.instance.playSound(eSound.bgm_bigwin_firework, false);
            });
            _this8.scheduleOnce(function () {
              //                //大奖显示
              _this8.Node_bigWin.active = true;
              _this8.Node_bigWin.scale = v3(1.0, 1.0, 1);
              _this8.Node_bigWin.getComponent(UIOpacity).opacity = 0;
              var Label_totalWin = _this8.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
              Label_totalWin.string = "";
              tween(_this8.Node_bigWin.getComponent(UIOpacity)).to(0.1, {
                opacity: 255
              }).call(function () {
                SlotPigUtils.instance.playSound(eSound.bgm_bigwin);
                var Node_bigWinEffect = _this8.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                Node_bigWinEffect.node.active = true;
                Node_bigWinEffect.setAnimation(0, "bigwin_intro", false);
                Node_bigWinEffect.addAnimation(0, "bigwin_idle", true);
              }).call(function () {
                var Node_bigWinEffect = _this8.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                var totalTime = (_this8.curBigWinLevel + 1) * 4;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var Label_totalWin = _this8.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                var curLevel = 0;
                tween(Label_totalWin.node).repeatForever(tween(Label_totalWin.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 2.0;
                    }
                    SlotPigUtils.instance.stopSound(eSound.bgm_bigwin);
                    SlotPigUtils.instance.playSound(eSound.bgm_bigwin_end);
                    Tween.stopAllByTarget(_this8.Node_bigWin);
                    Tween.stopAllByTarget(Label_totalWin.node);
                    curTotalWin = destWin;
                    tween(_this8.Node_bigWin.getComponent(UIOpacity)).delay(delay).to(0.1, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_bigWin.active = false;
                      Node_bigWinEffect.node.active = true;
                      resolve();
                    }).start();
                    Label_totalWin.string = SlotPigUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;

                      //                                                // if (SlotPigModel.instance.isAuto) {
                      //                                                //     doEnd();
                      //                                                // }
                      doEnd(3.0);
                      Label_totalWin.string = SlotPigUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                    } else {
                      Label_totalWin.string = SlotPigUtils.instance.numberFormatFloat(curTotalWin / 1000, 2) + "K";
                    }
                  }
                  var rate = curTotalWin / (SlotPigModel.instance.curBet * 1000);
                  var level = rate < 30 ? 0 : rate < 50 ? 1 : 2;
                  if (level != curLevel) {
                    curLevel = level;
                    var ani = ["bigwin", "megawin", "superwin"];
                    Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
                    Node_bigWinEffect.addAnimation(0, ani[level] + "_idle", true);
                  }
                  if (_this8.isStopBigWin) {
                    //                                            //点击停止
                    var _delay = 2.0;
                    var _ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (Node_bigWinEffect.animation != _ani[_this8.curBigWinLevel]) {
                      Node_bigWinEffect.setAnimation(0, _ani[_this8.curBigWinLevel], true);
                      _delay = 2.0;
                    }
                    doEnd(_delay);
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(SlotPigModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            SlotPigUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                //                // this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                SlotPigUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
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
        return SlotPigGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_mask_1_6", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_helpTip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "SlotPig_symbolList", [_dec7], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipEffect", [_dec13], {
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
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_setFastAuto", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_SlotPig", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_SlotPig_special", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_specialBg", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_special_quick", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolList", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolItem", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec29], {
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

System.register("chunks:///_virtual/SlotPigModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './SlotPigDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eRunStatus, eSymbol;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }],
    execute: function () {
      cclegacy._RF.push({}, "38b87knHRxPPJ7m4aHXRp61", "SlotPigModel", undefined);
      var SlotPigModel = exports('SlotPigModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SlotPigModel, _GameDef$BaseSington);
        function SlotPigModel() {
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
          _this.totalRate = 0;
          _this._betResult = null;
          //    // betResult: SlotPigDef.IOpenResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeWin = 0;
          _this.specialStartCol = 0;
          _this.specialStatues = 0;
          //1:真 2：假
          _this.boType = "count";
          return _this;
        }
        var _proto = SlotPigModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _createClass(SlotPigModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(result) {
            //        //test
            //        // result.openNums[0] = SlotPigDef.eSymbol.Firecrackers;
            //        // result.openNums[1] = SlotPigDef.eSymbol.Ingot;
            //        // result.openNums[2] = SlotPigDef.eSymbol.Firecrackers;
            //        // result.prizeAmount = 0;

            //        // //test
            result.special = result.openNums[0] != eSymbol.Blank && result.openNums[0] == result.openNums[2]; //Math.random() > 0.98; //Math.random() > 0.98; //true; //

            this._betResult = {
              Res: [],
              special: result.special
            };
            this.specialStartCol = result.special ? 1 : -1;
            var resultTemp = {
              openNums: [],
              prizeAmount: 0
              //            // prizeInfo: [],
            };

            for (var i = 0; i < result.openNums.length; i++) {
              resultTemp.openNums[i] = {
                bonusSymbol: result.openNums[i],
                IsReward: result.prizeAmount > 0
              };
            }
            resultTemp.prizeAmount = result.prizeAmount;
            this._betResult.Res.push(resultTemp);
          }
        }]);
        return SlotPigModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotPigScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './SlotPigDef.ts', './SlotPigUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, SlotPigUtils, Common;
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
      SlotPigUtils = module.SlotPigUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "af875mfGSRM1Kjr8E60/LrK", "SlotPigScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotPigScene = exports('default', (_dec = ccclass("SlotPigScene"), _dec2 = menu("game/SlotPigGame/SlotPigScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotPigScene, _Component);
        function SlotPigScene() {
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
        var _proto = SlotPigScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          SlotPigUtils.instance.bundle = assetManager.getBundle(cBundle);
          SlotPigUtils.instance.preLoad();
          SlotPigUtils.instance.playBgMusic();
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
            //            // if (!SlotPigUtils.instance.isChangeOrientation()) {
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
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            SlotPigUtils.instance.bundle.load("prefab/SlotPigGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (SlotPigUtils.instance.isChangeOrientation()) {
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
        return SlotPigScene;
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

System.register("chunks:///_virtual/SlotPigUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './SlotPigDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, Tween, UIOpacity, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eSymbol, eSound, eConstDef, Common;
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
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      sys = module.sys;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Font = module.Font;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03f90yWVKNAYZmlvYZkBiCq", "SlotPigUtils", undefined);
      var symbol_nomal_icon = ["h_goldpig",
      //存钱罐
      "h_goldingot",
      //元宝
      "h_jed",
      //白菜
      "l_bar_01",
      //爆竹1
      "l_bar_02",
      //爆竹2
      "l_bar_03",
      //爆竹3
      "s_wild",
      //任意
      "s_multi_x2",
      //任意2倍
      "s_multi_x5",
      //任意5倍
      "s_multi_x10" //任意10倍
      ];

      var symbol_aniData = ["s_multi"];
      var SlotPigUtils = exports('SlotPigUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SlotPigUtils, _GameDef$BaseSington);
        function SlotPigUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.arrIconBoxSpriteFrame = {};
          _this.arrIconFrameSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = SlotPigUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/SlotPigGameView");
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
            var arrHLoad, arrFont, _i, _arrFont, fontPath;
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
                  arrFont = ["font/number2", "font/number3", "font/number4"];
                  for (_i = 0, _arrFont = arrFont; _i < _arrFont.length; _i++) {
                    fontPath = _arrFont[_i];
                    arrHLoad.push(this.asyncLoad(fontPath, Font, function (err, font) {
                      if (!err) {
                        _this4.arrFontData[font.name] = font;
                      }
                    }));
                  }
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
            soundPath = eSound.bgm_mg;
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
          for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
            var key = _keys[_i2];
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
        _proto.updateLabelFormat = function updateLabelFormat(label, nums, isFloatFormat) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          labelNode.active = true;
          Tween.stopAllByTarget(labelNode);
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            labelCom.string = isFloatFormat ? _this7.numberFormatFloat(nums / 1000, 2.0) + "K" : _this7.numberFormat(nums / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // SlotPigUtils.instance.playSound(SlotPigDef.eSound.prizeMedwinMain);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // SlotPigUtils.instance.stopSound(SlotPigDef.eSound.prizeMedwinMain);
              //                            // SlotPigUtils.instance.playSound(SlotPigDef.eSound.prizeMedwinEnd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).to(0.2, {
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
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // SlotPigUtils.instance.playSound(SlotPigDef.eSound.numAdd);

          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // SlotPigUtils.instance.stopSound(SlotPigDef.eSound.numAdd);

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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex) {
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex - 1];
            return this.arrIconSpriteFrame[symbol];
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
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle, isWin) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          if (isWin === void 0) {
            isWin = false;
          }
          var strAni = null;
          if (symbolIndex >= eSymbol.Wild && symbolIndex <= eSymbol.Wild_10) {
            var spawnAni = ["x1_spawn", "x2_spawn", "x5_spawn", "x10_spawn"];
            var idleAni = ["x1_idle", "x2_idle", "x5_idle", "x10_idle"];
            var winAni = ["x1_win", "x2_win", "x5_win", "x10_win"];
            var aniIndex = symbolIndex - eSymbol.Wild;
            strAni = isIdle ? idleAni[aniIndex] : isWin ? winAni[aniIndex] : spawnAni[aniIndex];
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
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = symbol_aniData[index - 1];
          if (index >= eSymbol.Wild && index <= eSymbol.Wild_10) {
            strAni = "s_multi";
          }
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
        _proto.getLine = function getLine(prizeIdx) {
          if (prizeIdx.length >= 5) {
            return null;
          }
          var lineIndex = {
            "0": {
              "1": {
                "2": 1
              },
              "4": {
                "2": 2,
                "5": 3
              }
            },
            "3": {
              "4": {
                "2": 4,
                "5": 5
              },
              "7": {
                "5": 6,
                "8": 7
              }
            },
            "6": {
              "7": {
                "5": 8,
                "8": 9
              },
              "9": {
                "8": 10
              }
            }
          };
          return lineIndex["" + prizeIdx[0]]["" + prizeIdx[1]]["" + prizeIdx[2]];
        };
        _proto.switchSymIndex = function switchSymIndex(idx) {
          return Math.floor(idx / 3);
        };
        _proto.getBaseNum = function getBaseNum(index) {
          var baseBet = [eConstDef.CBaseBet_0, eConstDef.CBaseBet_1, eConstDef.CBaseBet_2, eConstDef.CBaseBet_3, eConstDef.CBaseBet_4];
          return baseBet[index];
        };
        return SlotPigUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/SlotPigGame', 'chunks:///_virtual/SlotPigGame'); 
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