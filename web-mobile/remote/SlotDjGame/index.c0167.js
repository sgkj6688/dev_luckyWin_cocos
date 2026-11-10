System.register("chunks:///_virtual/SlotDj_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "3eed7Z0FZhM15leJw3ekPrt", "SlotDj_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var SlotDj_btnEffect = exports('default', (_dec = ccclass("SlotDjBtnEffect"), _dec2 = menu("game/SlotDjGame/SlotDj_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_btnEffect, _Component);
        function SlotDj_btnEffect() {
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
        var _proto = SlotDj_btnEffect.prototype;
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

        _createClass(SlotDj_btnEffect, [{
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

        return SlotDj_btnEffect;
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

System.register("chunks:///_virtual/SlotDj_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "2defeo9LURBFpuIaCwIa5Xo", "SlotDj_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_helpTip = exports('default', (_dec = ccclass("SlotDjHelpTip"), _dec2 = menu("game/SlotDjGame/SlotDj_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_helpTip, _Component);
        function SlotDj_helpTip() {
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
        var _proto = SlotDj_helpTip.prototype;
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
            tween(this.Sprite_tip.node).delay(0.5).to(this.Sprite_tip.node.getComponent(UITransform).width / 100, {
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
        return SlotDj_helpTip;
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

System.register("chunks:///_virtual/SlotDj_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjCtrl.ts', './SlotDjDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, SlotDjCtrl, eProto, GameDef, Common;
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
      SlotDjCtrl = module.SlotDjCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "761afjWThBELZWVCOyc94vh", "SlotDj_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotDj_history = exports('default', (_dec = ccclass("SlotDjHistory"), _dec2 = menu("game/SlotDjGame/SlotDj_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotDj_history, _GameDef$BaseView);
        function SlotDj_history() {
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
        var _proto = SlotDj_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotDjCtrl.instance);
          SlotDjCtrl.instance.reqHistory();
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
          SlotDjCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          SlotDjCtrl.instance.reqHistory(start);
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
        return SlotDj_history;
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

System.register("chunks:///_virtual/SlotDj_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotDjUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, SlotDjUtils, Common;
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
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "74f07tM9xhHXbbN8QvtPsw3", "SlotDj_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_historyItem = exports('default', (_dec = ccclass("SlotDjHistoryItem"), _dec2 = menu("game/SlotDjGame/SlotDj_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_historyItem, _Component);
        function SlotDj_historyItem() {
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
        var _proto = SlotDj_historyItem.prototype;
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
          this.Label_bet.string = SlotDjUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + SlotDjUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + SlotDjUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(SlotDj_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SlotDj_historyItem;
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

System.register("chunks:///_virtual/SlotDj_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjCtrl.ts', './SlotDjDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SlotDjCtrl, eProto, GameDef, Common;
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
      SlotDjCtrl = module.SlotDjCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "69002tSiRVM1Lh1mVOnKzZX", "SlotDj_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotDj_rank = exports('default', (_dec = ccclass("SlotDjRank"), _dec2 = menu("game/SlotDjGame/SlotDj_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotDj_rank, _GameDef$BaseView);
        function SlotDj_rank() {
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
        var _proto = SlotDj_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotDjCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          SlotDjCtrl.instance.reqRank();
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
        return SlotDj_rank;
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

System.register("chunks:///_virtual/SlotDj_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotDjUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, SlotDjUtils;
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
      SlotDjUtils = module.SlotDjUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "17b4c0AdaRL8biiwqQeXDKj", "SlotDj_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_rankItem = exports('default', (_dec = ccclass("SlotDjRankItem"), _dec2 = menu("game/SlotDjGame/SlotDj_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_rankItem, _Component);
        function SlotDj_rankItem() {
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
        var _proto = SlotDj_rankItem.prototype;
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
          this.Label_win.string = SlotDjUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(SlotDj_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return SlotDj_rankItem;
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

System.register("chunks:///_virtual/SlotDj_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './SlotDjUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, SlotDjModel, eAutoRateType, eEvent, SlotDjUtils, EventManager;
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
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eEvent = module.eEvent;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1b7f04mRsNPBK+aSBx0SPO+", "SlotDj_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_ScrollView = exports('default', (_dec = ccclass("SlotDjScrollView"), _dec2 = menu("game/SlotDjGame/SlotDj_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_ScrollView, _Component);
        function SlotDj_ScrollView() {
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
        var _proto = SlotDj_ScrollView.prototype;
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
                this._curIndex = SlotDjModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = SlotDjModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = SlotDjModel.instance._curIndex_baseBet;
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
                var strNum = SlotDjUtils.instance.numberFormat(num, 2);
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
                var _strNum = SlotDjUtils.instance.numberFormat((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);

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
        return SlotDj_ScrollView;
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

System.register("chunks:///_virtual/SlotDj_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, SlotDjModel, eEvent, ViewManager, EventManager, Common;
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
      SlotDjModel = module.SlotDjModel;
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
      cclegacy._RF.push({}, "63ca89mJ2hAZ4LAeNkjqfxU", "SlotDj_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotDj_setAuto = exports('default', (_dec = ccclass("SlotDjSetAuto"), _dec2 = menu("game/SlotDjGame/SlotDj_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_setAuto, _Component);
        function SlotDj_setAuto() {
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
        var _proto = SlotDj_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // if (SlotDjModel.instance.selAutoIndex != -1) {
          //        //     this.selNode = this.contentRoot.getChildByName(`Node_item_${SlotDjModel.instance.selAutoIndex}`);
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
                  SlotDjModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[SlotDjModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = SlotDjModel.instance.curBet * 1000 * times;
                  //                    // if (SlotDjModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(SlotDjModel.instance.curBalance / (SlotDjModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(SlotDjDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !SlotDjUtils.instance.isChangeOrientation());
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
        return SlotDj_setAuto;
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

System.register("chunks:///_virtual/SlotDj_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './ViewManager.ts', './EventManager.ts', './SlotDjUtils.ts', './SlotDj_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, SlotDjModel, eEvent, eAutoRateType, ViewManager, EventManager, SlotDjUtils, SlotDj_ScrollView, Common;
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
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      SlotDj_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "59bf5vJeQhP+K4GCnuCl7Dz", "SlotDj_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotDj_setBase = exports('default', (_dec = ccclass("SlotDjSetBase"), _dec2 = menu("game/SlotDjGame/SlotDj_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_setBase, _Component);
        function SlotDj_setBase() {
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
        var _proto = SlotDj_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(SlotDjModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (SlotDjModel.instance.curTotalWin > 0) {
            this.Label_win.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = SlotDjModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = SlotDjModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = SlotDjModel.instance._curIndex_baseBet;
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
            if (SlotDjModel.instance.curTotalWin > 0) {
              this.Label_win.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = SlotDjModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            SlotDjModel.instance.curTotalWin += disWin;
            if (SlotDjModel.instance.curTotalWin > destWin) {
              SlotDjModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(SlotDj_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(SlotDj_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(SlotDj_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(SlotDj_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(SlotDj_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(SlotDj_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(SlotDj_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                SlotDjModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                SlotDjModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                SlotDjModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return SlotDj_setBase;
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

System.register("chunks:///_virtual/SlotDj_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // // // Learn TypeScript:
      cclegacy._RF.push({}, "0fc7c9lpStKoq1XIsHqKxu4", "SlotDj_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDj_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './EventManager.ts', './SlotDjUtils.ts', './SlotDj_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, sp, SlotDjModel, eConstDef, eRunStatus, eSymbol, eEvent, eSound, EventManager, SlotDjUtils, SlotDj_symbolItem;
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
      sp = module.sp;
    }, function (module) {
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      SlotDj_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "b7d97TEjSBJE7pj0SuRq3vY", "SlotDj_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_symbol = exports('default', (_dec = ccclass("SlotDjSymbol"), _dec2 = menu("game/SlotDjGame/SlotDj_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_symbol, _Component);
        function SlotDj_symbol() {
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
          _this.cSymbolStartY = eConstDef.cSymbolStartY;
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
          //    //         toLength = (pos - SlotDjDef.eConstDef.cSymbolStartX) / SlotDjDef.eConstDef.cSymbolW - length / 2;
          //    //     } else {
          //    //         toLength = (pos - SlotDjDef.eConstDef.cSymbolStartY) / SlotDjDef.eConstDef.cSymbolH - length / 2;
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
          //    //             let offsetX = (toLength + 1 / 2) * SlotDjDef.eConstDef.cSymbolW;
          //    //             newItem.x = SlotDjDef.eConstDef.cSymbolStartX + offsetX;
          //    //         } else {
          //    //             newItem.x = this.node.x;
          //    //             let offsetY = (toLength + 1 / 2) * SlotDjDef.eConstDef.cSymbolH;
          //    //             newItem.y = SlotDjDef.eConstDef.cSymbolStartY + offsetY;
          //    //         }
          //    //         //
          //    //         let itemInfo = {
          //    //             IsReward: this.isHorizontal ? true : false,
          //    //             Length: 1,
          //    //             Rim: 0,
          //    //             Sym: SlotDjDef.eSymbol.WILD,
          //    //         } as SlotDjDef.IPosMsg;
          //    //         let com = newItem.getComponent(SlotDj_symbolItem);
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
          _this.arrClear = [false, false, false, false, false, false];
          _this.arrCloud = [false, false, false, false, false, false];
          return _this;
        }
        var _proto = SlotDj_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
          if (this._iCol == 0 || this._iCol == 5) {
            this.cSymbolStartY += eConstDef.cSymbolH / 2.0;
          }
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.onEnable = function onEnable() {
          //        // EventManager.instance.on(SlotDjDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.onDisable = function onDisable() {
          //        // EventManager.instance.off(SlotDjDef.eEvent.onSymbolBreak + this._iCol, this.onSymbolBreak, this);
        };
        _proto.getResult = function getResult(openResult) {
          var sliceInfo = [[0, 4], [4, 9], [9, 14], [14, 19], [19, 24], [24, 28]][this._iCol];
          var resultInfoList = openResult.openNums.slice(sliceInfo[0], sliceInfo[1]).reverse();
          gts.Debug.Log("==getResult==" + JSON.stringify(resultInfoList));
          return resultInfoList;
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            var symbol = this.isHorizontal ? Math.floor(Math.random() * eSymbol.TEN) + 1 : Math.floor(Math.random() * eSymbol.TEN) + 1;
            itemInfo = {
              Sym: symbol,
              //SlotDjDef.eSymbol.A,
              IsReward: false,
              wildCount: 0
            };
          }
          var newItem = instantiate(this.Node_itemTemp);
          this.isHorizontal ? this.node.addChild(newItem) : this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          if (this.isHorizontal) {
            //            //横向
            var offsetX = (toLength + 1 / 2) * eConstDef.cSymbolW;
            newItem.setPosition(eConstDef.cSymbolStartX + offsetX, 0);
          } else {
            var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
            newItem.setPosition(this.node.getPosition().x, this.cSymbolStartY + offsetY);
          }

          //        //
          var com = newItem.getComponent(SlotDj_symbolItem);
          com.initItem(itemInfo, this.isHorizontal, this._iCol);
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
        _proto.doStart = function doStart(startDelay, stopDelay) {
          var _this3 = this;
          if (stopDelay === void 0) {
            stopDelay = 0;
          }
          return new Promise(function (resolve, reject) {
            //            //定时停止
            _this3.scheduleOnce(function () {
              SlotDjModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 5000;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //
            _this3._resultInfoList = _this3.getResult(SlotDjModel.instance.betResult.openResult[0]);

            //            //
            _this3._runStatus = eRunStatus.START;
            _this3._speed = SlotDjModel.instance.isQuickStop ? 4000 : eConstDef.CSpeedStart;
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
                      curLength += 1;
                      if (curLength > _this3.maxIndex) {
                        var _symbol = _this3._symbolList.shift();
                        _symbol.node.destroyFromParent();
                      }
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _this3.scheduleOnce(function () {
                              SlotDjUtils.instance.playOneShot(SlotDjModel.instance.isQuickStop ? eSound.reeslstopQuick : eSound.reeslstopNormal);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol2 = _step2.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            if (SlotDjModel.instance.specialStartCol > 0 && _this3._iCol >= SlotDjModel.instance.specialStartCol - 1) {
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
            //            // arrPro.push(symbol.doEffect(SlotDj_symbol.rewardCount * 0.075));
            if (symbol.itemInfo.IsReward) {
              SlotDj_symbol.rewardCount++;
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
        //    //             arrPro.push(symbol.doCatNumCollect(SlotDj_symbol.catCount * 0.35, collectType));
        //    //             SlotDj_symbol.catCount++;
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doClear = /*#__PURE__*/
        function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var arrPro, _iterator3, _step3, symbol;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        // SlotDj_symbol.catCount = 0;
                  SlotDj_symbol.rewardCount = 0;
                  arrPro = [];
                  _iterator3 = _createForOfIteratorHelperLoose(this._symbolList);
                case 3:
                  if ((_step3 = _iterator3()).done) {
                    _context2.next = 13;
                    break;
                  }
                  symbol = _step3.value;
                  if (symbol.itemInfo.IsReward) {
                    arrPro.push(symbol.doClear());
                  }
                  _context2.t0 = symbol.itemInfo.Sym;
                  _context2.next = _context2.t0 === eSymbol.WILD ? 9 : _context2.t0 === eSymbol.SCATTER ? 9 : 11;
                  break;
                case 9:
                  symbol.doBindToUp();
                  return _context2.abrupt("break", 11);
                case 11:
                  _context2.next = 3;
                  break;
                case 13:
                  return _context2.abrupt("return", Promise.all(arrPro));
                case 14:
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
        //    //     SlotDj_symbol.catCount = 0;
        //    //     SlotDj_symbol.rewardCount = 0;
        //    //     let arrPro = [];
        //    //     for (const symbol of this._symbolList) {
        //    //         if (symbol.itemInfo.IsReward) {
        //    //             arrPro.push(symbol.doClear());
        //    //         }
        //    //     }
        //    //     return Promise.all(arrPro);
        //    // }
        ;

        _proto.doScatterEffect = /*#__PURE__*/
        function () {
          var _doScatterEffect = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this4 = this;
            var _iterator4, _step4, symbol;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _iterator4 = _createForOfIteratorHelperLoose(this._symbolList);
                case 1:
                  if ((_step4 = _iterator4()).done) {
                    _context3.next = 13;
                    break;
                  }
                  symbol = _step4.value;
                  _context3.t0 = symbol.itemInfo.Sym;
                  _context3.next = _context3.t0 === eSymbol.SCATTER ? 6 : _context3.t0 === eSymbol.WILD ? 9 : 11;
                  break;
                case 6:
                  symbol.doBindToUp();
                  symbol.Scatterlight.getComponent(sp.Skeleton).setAnimation(0, "wait", true);
                  return _context3.abrupt("break", 11);
                case 9:
                  if (!symbol.isClear) {
                    symbol.doBindToUp(false);
                  }
                  return _context3.abrupt("break", 11);
                case 11:
                  _context3.next = 1;
                  break;
                case 13:
                  return _context3.abrupt("return", new Promise(function (resolve, reject) {
                    _this4.scheduleOnce(function () {
                      for (var _iterator5 = _createForOfIteratorHelperLoose(_this4._symbolList), _step5; !(_step5 = _iterator5()).done;) {
                        var symbol = _step5.value;
                        switch (symbol.itemInfo.Sym) {
                          case eSymbol.SCATTER:
                            {
                              symbol.Scatterlight.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                              break;
                            }
                          case eSymbol.WILD:
                            {
                              if (!symbol.isClear) {
                                symbol.doBindToUp();
                              }
                              break;
                            }
                        }
                      }
                      resolve();
                    }, 3.0);
                  }));
                case 14:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function doScatterEffect() {
            return _doScatterEffect.apply(this, arguments);
          }
          return doScatterEffect;
        }();
        _proto.doDropFront = /*#__PURE__*/function () {
          var _doDropFront = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(nextReult, dropDelay, isFront) {
            var _nextResultInfoList, _curLength, dropCounts, iRow, symbolItem, i, _iRow, arrPro, toLength, newIndex, _iRow2, _symbolItem, nextInfo;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  if (isFront === void 0) {
                    isFront = true;
                  }
                  //        // this.isBreak = false;
                  _nextResultInfoList = this.getResult(nextReult);
                  _curLength = 0;
                  dropCounts = 0;
                  if (isFront) {
                    this.arrClear = [false, false, false, false, false, false];
                    this.arrCloud = [false, false, false, false, false, false];
                    //            //remove
                    for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                      symbolItem = this._symbolList[iRow];
                      if (symbolItem.isClear) {
                        symbolItem.node.destroyFromParent();
                        this._symbolList.splice(iRow, 1);
                        this._curLength -= 1;
                        this.arrClear[iRow] = true;
                      }
                    }
                    i = 0;
                    for (_iRow = 0; _iRow < this.arrClear.length; _iRow++) {
                      this.arrClear[_iRow] ? this.arrCloud[i] = true : i++;
                    }
                  } else {
                    _curLength = this._symbolList.length;
                  }

                  //        //add and drop
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  newIndex = 0;
                  _iRow2 = 0;
                case 10:
                  if (!(_iRow2 < _nextResultInfoList.length)) {
                    _context4.next = 27;
                    break;
                  }
                  _symbolItem = null;
                  if (!isFront) {
                    _context4.next = 16;
                    break;
                  }
                  if (_iRow2 < this._symbolList.length) {
                    _symbolItem = this._symbolList[_iRow2];
                    _symbolItem.itemInfo = _nextResultInfoList[_iRow2];
                  }
                  _context4.next = 23;
                  break;
                case 16:
                  if (!(_iRow2 >= this._symbolList.length)) {
                    _context4.next = 23;
                    break;
                  }
                  nextInfo = _nextResultInfoList[_iRow2];
                  _symbolItem = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem) {
                    _context4.next = 21;
                    break;
                  }
                  return _context4.abrupt("continue", 24);
                case 21:
                  toLength += 1;
                  newIndex++;
                case 23:
                  //            // if (iRow < this._symbolList.length) {
                  //            //     symbolItem = this._symbolList[iRow];

                  //            //     symbolItem.itemInfo = _nextResultInfoList[iRow];
                  //            // } else {
                  //            //     let nextInfo = _nextResultInfoList[iRow];
                  //            //     symbolItem = this.addNewItem(nextInfo, toLength);
                  //            //     if (!symbolItem) {
                  //            //         continue;
                  //            //     }
                  //            //     toLength += 1;

                  //            //     newIndex++;
                  //            // }

                  if (_symbolItem) {
                    arrPro.push(_symbolItem.doDrop(_curLength, this.arrCloud[_iRow2], newIndex, dropDelay * dropCounts));
                    dropCounts++;
                    _curLength += 1;
                  }
                case 24:
                  _iRow2++;
                  _context4.next = 10;
                  break;
                case 27:
                  return _context4.abrupt("return", Promise.all(arrPro));
                case 28:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
          function doDropFront(_x, _x2, _x3) {
            return _doDropFront.apply(this, arguments);
          }
          return doDropFront;
        }();
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(nextReult, dropDelay) {
            var _nextResultInfoList, arrClear, arrCloud, iRow, symbolItem, i, _iRow3, _curLength, arrPro, toLength, newIndex, _iRow4, _symbolItem2, nextInfo;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  //        // this.isBreak = false;
                  _nextResultInfoList = this.getResult(nextReult);
                  arrClear = [false, false, false, false, false, false];
                  arrCloud = [false, false, false, false, false, false]; //        //remove
                  for (iRow = this._symbolList.length - 1; iRow >= 0; iRow--) {
                    symbolItem = this._symbolList[iRow];
                    if (symbolItem.isClear) {
                      symbolItem.node.destroyFromParent();
                      this._symbolList.splice(iRow, 1);
                      this._curLength -= 1;
                      arrClear[iRow] = true;
                    }
                  }
                  i = 0;
                  for (_iRow3 = 0; _iRow3 < arrClear.length; _iRow3++) {
                    arrClear[_iRow3] ? arrCloud[i] = true : i++;
                  }

                  //        //add and drop
                  _curLength = 0;
                  arrPro = [];
                  toLength = this.maxIndex; //        // let newFloor = 0;
                  newIndex = 0;
                  _iRow4 = 0;
                case 12:
                  if (!(_iRow4 < _nextResultInfoList.length)) {
                    _context5.next = 30;
                    break;
                  }
                  _symbolItem2 = null;
                  if (!(_iRow4 < this._symbolList.length)) {
                    _context5.next = 19;
                    break;
                  }
                  _symbolItem2 = this._symbolList[_iRow4];
                  _symbolItem2.itemInfo = _nextResultInfoList[_iRow4];

                  //                // if (symbolItem.isChange) {
                  //                //     symbolItem.doEndChange(symbolItem.itemInfo);
                  //                // }
                  _context5.next = 25;
                  break;
                case 19:
                  nextInfo = _nextResultInfoList[_iRow4];
                  _symbolItem2 = this.addNewItem(nextInfo, toLength);
                  if (_symbolItem2) {
                    _context5.next = 23;
                    break;
                  }
                  return _context5.abrupt("continue", 27);
                case 23:
                  toLength += 1;
                  newIndex++;
                case 25:
                  arrPro.push(_symbolItem2.doDrop(_curLength, arrCloud[_iRow4], newIndex, dropDelay));
                  _curLength += 1;
                case 27:
                  _iRow4++;
                  _context5.next = 12;
                  break;
                case 30:
                  return _context5.abrupt("return", Promise.all(arrPro));
                case 31:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
          function doDrop(_x4, _x5) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return SlotDj_symbol;
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

System.register("chunks:///_virtual/SlotDj_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "830e5qAA+tBdIuHGbgFc3Hg", "SlotDj_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_symbolEffectRoot = exports('default', (_dec = ccclass("SlotDjSymbolEffectRoot"), _dec2 = menu("game/SlotDjGame/SlotDj_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_symbolEffectRoot, _Component);
        function SlotDj_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotDj_symbolEffectRoot.prototype;
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
        return SlotDj_symbolEffectRoot;
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

System.register("chunks:///_virtual/SlotDj_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './SlotDjDef.ts', './SlotDj_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, SpriteFrame, tween, v3, UITransform, instantiate, Sprite, Layout, UIOpacity, Component, AutoChangeParent, eSymbol, SlotDj_symbolItem;
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
      Layout = module.Layout;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      SlotDj_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "e16a9yGM1BDIrmCC+wDOPce", "SlotDj_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
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
      [4, 6, 8, 10],
      //K
      [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]];
      var SlotDj_symbolInfo = exports('default', (_dec = ccclass("SlotDjSymbolInfo"), _dec2 = menu("game/SlotDjGame/SlotDj_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_symbolInfo, _Component);
        function SlotDj_symbolInfo() {
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
        var _proto = SlotDj_symbolInfo.prototype;
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
          pos = this.Node_info.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos));
          var halfW = this.Node_info.getComponent(UITransform).width / 2.0;
          pos.x = pos.x - halfW < -372 ? -372 + halfW : pos.x + halfW > 372 ? 372 - halfW : pos.x;
          this.Node_info.position = pos;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_item.children), _step2; !(_step2 = _iterator2()).done;) {
            var _childNode = _step2.value;
            _childNode.name == "Node_symbol" ? _childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.removeComponent(AutoChangeParent);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          newSymbol.on(Node.EventType.TOUCH_END, function () {
            _this3.mask.active = false;
            tween(_this3.Node_info).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.2, {
              scale: v3(0.5, 0.5, 1)
            }).call(function () {
              _this3.mask.active = false;
              _this3.Node_item.active = false;
              _this3.Node_info.active = false;
            }).start();
          }, this);

          //        // let fBg = this.Node_item.getComponent(cc.Sprite);
          //        // fBg.spriteFrame = SlotDjUtils.instance.getItemSymbolIconBox(symbol.Sym);

          //        // let symbolItem = this.Node_item.getComponent(SlotDj_symbolItem);
          //        // symbolItem.itemInfo = symbol;
          this.Node_item.getComponent(SlotDj_symbolItem).initItem(symbol);
          switch (symbol.Sym) {
            case eSymbol.SCATTER:
              {
                //                // this.Node_info.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                //                // this.Node_item.getComponent(SlotDj_symbolItem).Node_symbol.removeFromParent();
                //                // newSymbol.scale = 1;
                //                // this.Node_item.active = false;
                newSymbol.scale = v3(0.7, 0.7, 1);
                this.Node_icon.active = false;
                this.Label_hu.node.active = true;
                this.Label_wild.node.active = false;

                //                // this.Node_item.zIndex = 1;
                //                // this.Node_icon.zIndex = 0;

                this.Node_info.getComponent(Layout).paddingLeft = 23;
                this.Node_info.getComponent(Layout).paddingRight = 23;
                this.Node_info.getComponent(Layout).spacingX = 0;
                break;
              }
            case eSymbol.WILD:
              {
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                newSymbol.scale = v3(0.75, 0.75, 1);
                this.Node_icon.active = false;
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = true;

                //                // this.Node_item.zIndex = 0;
                //                // this.Label_wild.node.zIndex = 1;

                this.Node_info.getComponent(Layout).paddingLeft = 23;
                this.Node_info.getComponent(Layout).paddingRight = 35;
                this.Node_info.getComponent(Layout).spacingX = 10;
                break;
              }
            default:
              {
                gts.Debug.LogWarr("==symbol.Sym==" + symbol.Sym);
                //                // this.Node_item.zIndex = 1;
                //                // this.Node_icon.zIndex = 0;
                newSymbol.scale = v3(0.7, 0.7, 1);
                this.Label_hu.node.active = false;
                this.Label_wild.node.active = false;
                this.Node_icon.active = true;
                this.Node_item.active = true;

                //                // this.Node_info.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.TRIMMED;
                this.Node_info.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
                var arrRate = eRate[symbol.Sym - 1];
                for (var i = 0; i < 4; i++) {
                  var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
                  Label_rate.string = "" + arrRate[i];
                }
                this.Node_info.getComponent(Layout).paddingLeft = 50;
                this.Node_info.getComponent(Layout).paddingRight = 25;
                this.Node_info.getComponent(Layout).spacingX = -7;
                break;
              }
          }

          //        // symbolItem.Node_symbol = newSymbol;
          //        // symbolItem.updateIcon(symbol.Sym, true, false);

          this.Node_info.getComponent(Layout).updateLayout();
          this.Node_info.getComponent(UIOpacity).opacity = 255;
          this.Node_info.scale = v3(0.5, 0.5, 1);
          tween(this.Node_info).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        return SlotDj_symbolInfo;
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

System.register("chunks:///_virtual/SlotDj_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './EventManager.ts', './SlotDjUtils.ts', './AutoChangeParent.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, isValid, Node, v3, sp, UITransform, Sprite, Label, tween, UIOpacity, Component, SlotDjModel, eConstDef, eSymbol, eRunStatus, eZindex, eSound, eEvent, EventManager, SlotDjUtils, AutoChangeParent;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Node = module.Node;
      v3 = module.v3;
      sp = module.sp;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Label = module.Label;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      AutoChangeParent = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2;
      cclegacy._RF.push({}, "5f7f0wj3GFLEp9bf+Ag6cC6", "SlotDj_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_symbolItem = exports('default', (_dec = ccclass("SlotDjSymbolItem"), _dec2 = menu("game/SlotDjGame/SlotDj_symbolItem"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_symbolItem, _Component);
        function SlotDj_symbolItem() {
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
          _this.Node_symbol_winRoot = null;
          //    // onLoad () {}
          _this.Node_symbol = null;
          //    // update (dt) {}
          //    ///
          _this.cSymbolStartY = eConstDef.cSymbolStartY;
          _this._spineEffect_kuang = null;
          _this._spineEffect_kuangLight = null;
          _this.Scatterlight = null;
          _this.isBreak = false;
          _this.isClear = false;
          return _this;
        }
        var _proto = SlotDj_symbolItem.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
          if (isValid(this.Node_symbol)) {
            var wildIcon = this.Node_symbol.getChildByName("wildIcon");
            if (wildIcon) {
              wildIcon.destroyFromParent();
            }
            var wildCount = this.Node_symbol.getChildByName("wildCount");
            if (wildCount) {
              wildCount.destroyFromParent();
            }
            if (this.itemInfo.Sym == eSymbol.SCATTER) {
              if (this.Scatterlight) {
                this.Scatterlight.destroyFromParent();
              }
            }
            this.Node_symbol.destroy();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (isValid(this.Node_symbol)) {
            var wildIcon = this.Node_symbol.getChildByName("wildIcon");
            if (wildIcon) {
              wildIcon.destroyFromParent();
            }
            var wildCount = this.Node_symbol.getChildByName("wildCount");
            if (wildCount) {
              wildCount.destroyFromParent();
            }
            if (this.itemInfo.Sym == eSymbol.SCATTER) {
              if (this.Scatterlight) {
                this.Scatterlight.destroyFromParent();
              }
            }
            this.Node_symbol.destroy();
          }
        };
        _proto.initItem = function initItem(info, isHorizontal, iCol) {
          if (isHorizontal === void 0) {
            isHorizontal = false;
          }
          if (iCol === void 0) {
            iCol = 0;
          }
          this._iCol = iCol;
          this._isHorizontal = isHorizontal;
          if (this._iCol == 0 || this._iCol == 5) {
            this.cSymbolStartY += eConstDef.cSymbolH / 2.0;
          }
          var Node_center = this.node.parent.parent.parent; //Node_center
          this.Node_symbolAniRoot = Node_center.getChildByName("Node_effectRoot");

          //        // this.Node_symbolAniRoot = this.node.parent.parent;
          this.Node_symbol = this.node.getChildByName("Node_symbol");

          //        // Node_symbol_winRoot;

          this.itemInfo = info;
          this.updateSymbol(this.itemInfo.IsReward);

          //        // this.doBindToUp();
        };

        _proto.addEffectKuang = function addEffectKuang() {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            newNode.scale = v3(1.3, 1.3, 1);
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            //            // itemSpine.useTint = true;
            //            // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);

            _this2.scheduleOnce(function () {
              itemSpine.skeletonData = SlotDjUtils.instance.getSkeletonData("kuang_effect");
              itemSpine.setAnimation(0, "idle", false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                resolve();
              });
            });
            var wPos = _this2.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var nPos = _this2.Node_symbolAniRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            newNode.position = nPos;
            _this2.Node_symbolAniRoot.addChild(newNode);
            if (_this2.itemInfo.Sym >= eSymbol.SCATTER) {
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
            //            // itemSpine.useTint = true;
            //            // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = SlotDjUtils.instance.getSkeletonData("kuang_light");
            itemSpine.setAnimation(0, "changelight_lv" + 1, true);
            resolve();
            newNode.getComponent(UITransform).priority = 0;
            _this3.node.addChild(newNode);
            _this3.Node_symbol.getComponent(UITransform).priority = 10;
            _this3._spineEffect_kuangLight = itemSpine;
          });
        }
        //    //0:stop/drop 1:win
        ;

        _proto.setIconAni = function setIconAni(type) {
          var _this4 = this;
          if (type === void 0) {
            type = 0;
          }
          var Sym = this.itemInfo.Sym;
          var itemSprite = this.Node_symbol.getComponent(Sprite);
          if (itemSprite) {
            itemSprite.enabled = false;
            itemSprite.destroy();
          }
          this.scheduleOnce(function () {
            var itemSymbol = SlotDjUtils.instance.getSkeletonData(Sym, _this4._isHorizontal);
            var itemSpine = _this4.Node_symbol.getComponent(sp.Skeleton);
            if (!itemSpine) {
              itemSpine = _this4.Node_symbol.addComponent(sp.Skeleton);
              itemSpine.premultipliedAlpha = false;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
            }
            var aniName = type == 1 ? "win" : "spawn";
            itemSpine.setAnimation(0, aniName, false);
            switch (Sym) {
              case eSymbol.WILD:
              case eSymbol.SCATTER:
                {
                  itemSpine.addAnimation(0, "idle", true);
                  break;
                }
            }
          });
        };
        _proto.setWildNum = function setWildNum() {
          var wildCount = this.Node_symbol.getChildByName("wildCount");
          if (this.itemInfo.wildCount > 1) {
            if (!wildCount) {
              wildCount = new Node("wildCount");
              wildCount.scale = v3(1.4, 1.4, 1);
              this.Node_symbol.addChild(wildCount);
              var _label = wildCount.addComponent(Label);
              _label.font = SlotDjUtils.instance.getFontData("fs");
              _label.fontSize = 57;
            }
            var label = wildCount.getComponent(Label);
            label.string = "" + this.itemInfo.wildCount;
          } else {
            if (this.itemInfo.wildCount == 1) {
              var wildIcon = this.Node_symbol.getChildByName("wildIcon");
              if (!wildIcon) {
                wildIcon = new Node("wildIcon");
                wildIcon.setPosition(wildIcon.position.x, -40);
                this.Node_symbol.addChild(wildIcon);
                var sprIcon = wildIcon.addComponent(Sprite);
                sprIcon.spriteFrame = SlotDjUtils.instance.getItemSymbolIcon(this.itemInfo.Sym);
              }
            }
            if (wildCount) {
              wildCount.destroyFromParent();
            }
          }
        };
        _proto.updateIcon = function updateIcon(Sym, length, isSpine, isIdle) {
          var _this5 = this;
          if (isSpine === void 0) {
            isSpine = false;
          }
          isSpine = true; //Sym >= SlotDjDef.eSymbol.SCATTER ? true : isSpine;

          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = SlotDjUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this5.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this5.Node_symbol.addComponent(Sprite);
              }
              itemSprite.spriteFrame = itemSymbol;
            });
          } else {
            var itemSprite = this.Node_symbol.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.enabled = false;
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSpine = _this5.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this5.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.skeletonData = SlotDjUtils.instance.getSkeletonData(Sym, _this5._isHorizontal);
              itemSpine.premultipliedAlpha = true;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.setAnimation(0, "spawn", false);
              switch (Sym) {
                case eSymbol.WILD:
                case eSymbol.SCATTER:
                  {
                    itemSpine.addAnimation(0, "idle", true);
                    break;
                  }
              }
            });
          }

          //        //tag update
          this.Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.SCATTER:
              {
                break;
              }
            case eSymbol.WILD:
              {
                this.setWildNum();
                break;
              }
          }
        };
        _proto.updateBox = function updateBox(Sym, length, rim) {
          //        //box
          var fBg = this.node.getComponent(Sprite);
          fBg.spriteFrame = SlotDjUtils.instance.getItemSymbolIconBox(Sym, length, rim);
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
            _Sprite_frame.getComponent(Sprite).spriteFrame = SlotDjUtils.instance.getItemSymbolIconFrame(rim, length);

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
          this.updateBox(this.itemInfo.Sym, 1, 0);
          this.updateFrame(0, 1);
          this.updateIcon(this.itemInfo.Sym, 1, isSpine, isIdle);
          this.updateZIndex(isIdle ? eRunStatus.RUNNING : eRunStatus.CLEAR);
        };
        _proto.updateZIndex = function updateZIndex(runStatus) {
          var _zIndex = 0;
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                _zIndex = SlotDjModel.instance.specialStartCol > 0 ? eZindex.icon_scatterSPECIAL : eZindex.icon_scatter;
                this.Node_symbol.getComponent(UITransform).priority = eZindex.icon_scatter;

                //                // this.Node_symbol.scale = 0.68;
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
                _zIndex = SlotDjModel.instance.specialStartCol > 0 && this._iCol >= SlotDjModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                switch (this.itemInfo.Sym) {
                  case eSymbol.SCATTER:
                    {
                      SlotDjUtils.instance.playOneShot(eSound.symScatter);
                      break;
                    }
                  case eSymbol.WILD:
                    {
                      SlotDjUtils.instance.playOneShot(eSound.symWild);
                      break;
                    }
                }
                if (SlotDjModel.instance.specialStartCol == 0) {
                  this.doBindToUp();
                }
                break;
              }
            case eRunStatus.CLEAR:
              {
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                if (SlotDjModel.instance.specialStartCol > 0) {
                  this.doBindToUp();
                }
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (SlotDjModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var _this6 = this;
          var ret = true;
          this._isHorizontal ? function () {
            _this6.node.setPosition(_this6.node.position.x - offset, _this6.node.position.y);
            var posSide = -186 - 62.5 - 1 / 2 * 125;
            if (_this6.node.getPosition().x <= posSide) {
              ret = false;
            }
          }() : function () {
            _this6.node.setPosition(_this6.node.position.x, _this6.node.position.y - offset);
            var posSide = -208 - 52 - 1 / 2 * 104;
            if (_this6.node.getPosition().y <= posSide) {
              ret = false;
            }
          }();
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this7 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            _this7._isHorizontal ? function () {
              var pos_0 = _this7.node.getPosition().x + 10 + offset;
              var pos_1 = _this7.node.getPosition().x + offset;
              tween(_this7.node).to(0.15, {
                position: v3(pos_0, _this7.node.position.y)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(pos_1, _this7.node.position.y)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this7.setIconAni();
                _this7.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }() : function () {
              var pos_0 = _this7.node.getPosition().y + 10 + offset;
              var pos_1 = _this7.node.getPosition().y + offset;
              tween(_this7.node).to(0.15, {
                position: v3(_this7.node.position.x, pos_0)
              }, {
                easing: "cubicOut"
              }).to(0.05, {
                position: v3(_this7.node.position.x, pos_1)
              }, {
                easing: "cubicIn"
              }).call(function () {
                _this7.setIconAni();
                _this7.updateZIndex(eRunStatus.STOP);
                resolve();
              }).start();
            }();
          });
        };
        _proto.doEffect = function doEffect(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            switch (_this8.itemInfo.Sym) {
              case eSymbol.SCATTER:
                {
                  _this8.doBindToUp(false, _this8.Scatterlight);
                }
              case eSymbol.WILD:
                {
                  _this8.doBindToUp(false, _this8.Node_symbol);
                  break;
                }
            }
            if (_this8.itemInfo.IsReward) {
              _this8.setIconAni(1);
              _this8.updateZIndex(eRunStatus.CLEAR);
              _this8.addEffectKuang();
              _this8.scheduleOnce(function () {
                resolve();
              }, 1.25);
              //                // }
            } else {
              resolve();
            }
          });
        };
        _proto.doClear = function doClear() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            if (_this9.itemInfo.IsReward) {
              //                // if (this._spineEffect_kuang) {
              //                //     // this._spineEffect_kuang.setAnimation(0, `change${this.itemInfo.Length}`, false);
              //                //     // this._spineEffect_kuang.setCompleteListener(() => {
              //                //     //     this._spineEffect_kuang.setCompleteListener(null);
              //                //     //     this._spineEffect_kuang.node.removeFromParent();
              //                //     //     this._spineEffect_kuang = null;
              //                //     // });
              //                //     this._spineEffect_kuang.node.removeFromParent();
              //                //     this._spineEffect_kuang = null;
              //                // }

              if (_this9.itemInfo.Sym == eSymbol.WILD && _this9.itemInfo.wildCount > 1) {
                _this9.itemInfo.wildCount--;
                _this9.setIconAni(1);
                _this9.itemInfo.IsReward = false;
                _this9.scheduleOnce(function () {
                  _this9.setWildNum();
                }, 0.1);
                resolve();
              } else {
                tween(_this9.node.getComponent(UIOpacity))
                //                        // .blink(3, 3)
                //                        // .to(0.05, { scale: 1.05 })
                //                        // .to(0.05, { scale: 0.95 })
                .to(0.1, {
                  opacity: 0
                }).delay(0.25).call(function () {
                  _this9.isClear = true;
                  if (_this9._spineEffect_kuang) {
                    _this9._spineEffect_kuang.node.destroyFromParent();
                    _this9._spineEffect_kuang = null;
                  }
                  resolve();
                }).start();
              }
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp(isBind, node) {
          var _this10 = this;
          if (isBind === void 0) {
            isBind = true;
          }
          if (node === void 0) {
            node = this.Node_symbol;
          }
          if (!isBind) {
            if (!node) {
              node = this.Node_symbol;
            }
            node.parent = this.node;
            node.removeComponent(AutoChangeParent);
            node.position = v3(0);
            node.scale = v3(1, 1, 1);
            this.node.getComponent(UITransform).priority = eZindex.icon;
            if (node.name == "Scatterlight") {
              node.scale = v3(0.68, 0.68, 1);
            }
            return;
          }
          switch (this.itemInfo.Sym) {
            case eSymbol.SCATTER:
              {
                if (!this.Scatterlight) {
                  this.Scatterlight = new Node("Scatterlight");
                  this.Scatterlight.addComponent(UIOpacity);
                  this.Scatterlight.scale = v3(0.68, 0.68, 1);
                  this.Scatterlight.active = true;
                  this.node.addChild(this.Scatterlight);
                  var itemSpine = this.Scatterlight.addComponent(sp.Skeleton);
                  itemSpine.premultipliedAlpha = true;
                  itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  itemSpine.skeletonData = SlotDjUtils.instance.getSkeletonData("scatter_light");
                  //                    // itemSpine.setAnimation(0, "wait", false);
                  itemSpine.setAnimation(0, "idle", true);
                }
                if (!this.Scatterlight.getComponent(AutoChangeParent)) {
                  AutoChangeParent.Bind(this.Scatterlight, this.Node_symbolAniRoot, true).OnUpdateNotify(function (dt) {
                    if (_this10.node.parent) {
                      _this10.Scatterlight.getComponent(UIOpacity).opacity = _this10.node.getComponent(UIOpacity).opacity;
                      _this10.Scatterlight.active = _this10.node.active;
                      _this10.Scatterlight.scale = _this10.node.scale;
                    }
                    //                        // else {
                    //                        //     this.Scatterlight.removeFromParent();
                    //                        //     this.Scatterlight.destroy();
                    //                        //     this.Scatterlight = null;
                    //                        // }
                  }, this);
                }
                if (!this.Node_symbol.getComponent(AutoChangeParent)) {
                  this.Node_symbol.scale = this.node.scale;
                  AutoChangeParent.Bind(this.Node_symbol, this.Node_symbolAniRoot, true).OnUpdateNotify(function (dt) {
                    if (_this10.node.parent) {
                      _this10.Node_symbol.getComponent(UIOpacity).opacity = _this10.node.getComponent(UIOpacity).opacity;
                      _this10.Node_symbol.active = _this10.node.active;
                      _this10.Node_symbol.scale = _this10.node.scale;
                    }
                    //                        // else {
                    //                        //     this.Node_symbol.destroy();
                    //                        //     this.node.destroy();
                    //                        // }
                  }, this);
                }
                break;
              }
            case eSymbol.WILD:
              {
                if (!this.Node_symbol.getComponent(AutoChangeParent)) {
                  this.Node_symbol.scale = this.node.scale;
                  AutoChangeParent.Bind(this.Node_symbol, this.Node_symbolAniRoot, true).OnUpdateNotify(function (dt) {
                    if (_this10.node.parent) {
                      _this10.Node_symbol.getComponent(UIOpacity).opacity = _this10.node.getComponent(UIOpacity).opacity;
                      _this10.Node_symbol.active = _this10.node.active;
                      _this10.Node_symbol.scale = _this10.node.scale;
                    }
                    //                        // else {
                    //                        //     this.Node_symbol.destroy();
                    //                        //     this.node.destroy();
                    //                        // }
                  }, this);
                }
                break;
              }
          }
        };
        _proto._doShake = function _doShake() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            _this11.scheduleOnce(function () {
              if (!_this11.isClear) {
                tween(_this11.node).shake(0.5, 1.25, 1.25).call(function () {
                  resolve();
                }).start();
              } else {
                resolve();
              }
            }, 0.25);
          });
        };
        _proto.doDrop = /*#__PURE__*/function () {
          var _doDrop = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(toLength, isCloud, newIndex, dropDelay) {
            var _this12 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (newIndex === void 0) {
                    newIndex = 0;
                  }
                  if (dropDelay === void 0) {
                    dropDelay = 0;
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this12.scheduleOnce(function () {
                      var curPos = _this12._isHorizontal ? _this12.node.getPosition().x : _this12.node.getPosition().y;
                      var toPos = 0;
                      if (_this12._isHorizontal) {
                        //                    //横向
                        var offsetX = (toLength + 1 / 2) * eConstDef.cSymbolW;
                        toPos = eConstDef.cSymbolStartX + offsetX;
                      } else {
                        var offsetY = (toLength + 1 / 2) * eConstDef.cSymbolH;
                        toPos = _this12.cSymbolStartY + offsetY;
                      }
                      var offset = curPos - toPos;
                      if (offset <= 50) {
                        resolve();
                        return;
                      }
                      var dropSpeed = 1000;
                      var duration = offset / dropSpeed;
                      _this12.scheduleOnce(function () {
                        SlotDjUtils.instance.playOneShot(SlotDjModel.instance.isQuickStop ? eSound.reeslstopQuick : eSound.reeslstopNormal);
                      }, duration);
                      var delayTimes = newIndex == 0 ? 0 : 0.2 + 0.05 * newIndex;
                      _this12._isHorizontal ? function () {
                        var pos_1 = _this12.node.getPosition().x - offset;
                        var pos_0 = pos_1 + 10;
                        tween(_this12.node).delay(delayTimes).to(duration, {
                          position: v3(pos_1, _this12.node.position.y)
                        }, {
                          easing: "cubicOut"
                        }).to(0.05, {
                          position: v3(pos_0, _this12.node.position.y)
                        }, {
                          easing: "cubicOut"
                        }).to(0.05, {
                          position: v3(pos_1, _this12.node.position.y)
                        }, {
                          easing: "cubicIn"
                        }).call(function () {
                          _this12.doBindToUp();
                          _this12.setIconAni();
                          resolve();
                        }).start();
                      }() : function () {
                        var pos_1 = _this12.node.getPosition().y - offset;
                        var pos_0 = pos_1 + 10;
                        tween(_this12.node).delay(delayTimes).to(duration, {
                          position: v3(_this12.node.position.x, pos_1)
                        }, {
                          easing: "cubicOut"
                        }).to(0.05, {
                          position: v3(_this12.node.position.x, pos_0)
                        }, {
                          easing: "cubicIn"
                        }).to(0.05, {
                          position: v3(_this12.node.position.x, pos_1)
                        }, {
                          easing: "cubicIn"
                        }).call(function () {
                          _this12.doBindToUp();
                          _this12.setIconAni();
                          resolve();
                        }).start();
                      }();
                    }, dropDelay);
                  }));
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function doDrop(_x, _x2, _x3, _x4) {
            return _doDrop.apply(this, arguments);
          }
          return doDrop;
        }();
        return SlotDj_symbolItem;
      }(Component), _class2.dropIndex = 0, _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDj_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotDjModel.ts', './SlotDjDef.ts', './SlotDjUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, Layout, tween, v3, Component, SlotDjModel, eSound, SlotDjUtils, Common;
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
      Layout = module.Layout;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c9cc675CuVIW6r2yyCMq7sg", "SlotDj_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var SlotDj_winTip = exports('default', (_dec = ccclass("SlotDjWinTip"), _dec2 = menu("game/SlotDjGame/SlotDj_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDj_winTip, _Component);
        function SlotDj_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotDj_winTip.prototype;
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
          Node_title.active = false;
          this.Label_win.horizontalAlign = Label.HorizontalAlign.CENTER;
          this.node.getComponent(Layout).paddingLeft = 0;
          this.Label_win.string = "";
          tween(this.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            var inter = Common.numFormatInt(gold / 1000);
            var digit = SlotDjUtils.instance.numberFormatD(gold / 1000, 2.0);
            _this2.Label_win.string = "" + inter + digit + "k";
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
          this.Label_win.horizontalAlign = Label.HorizontalAlign.LEFT;
          this.node.getComponent(Layout).paddingLeft = 50;
          Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[isLast ? 1 : 0];
          this.Label_win.string = "";
          var rate = gold / (SlotDjModel.instance.curBet * 1000);
          if (isLast && rate > 5) {
            if (rate > 5) {
              SlotDjUtils.instance.playOneShot(eSound.prizeMedwinInfobarMain);
            } else {
              SlotDjUtils.instance.playOneShot(eSound.prizeMedwinInfobarEnd);
            }
            SlotDjUtils.instance.updateLabelAddNf(this.Label_win, gold);
          } else {
            SlotDjUtils.instance.playOneShot(eSound.prizeMultiwin);
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              var inter = Common.numFormatInt(gold / 1000);
              var digit = SlotDjUtils.instance.numberFormatD(gold / 1000, 2.0);
              _this3.Label_win.string = "" + inter + digit + "k";
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }
        };
        return SlotDj_winTip;
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

System.register("chunks:///_virtual/SlotDjCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './SlotDjModel.ts', './I18n.ts', './ViewManager.ts', './SlotDjDef.ts', './SlotDjUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, SlotDjModel, i18n, ViewManager, eProto, eEvent, eRunStatus, eSymbol, SlotDjUtils, Common;
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
      SlotDjModel = module.SlotDjModel;
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
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "52396g3anVOBrYvfAhMTPHZ", "SlotDjCtrl", undefined);
      var _cc$_decorator = _decorator,
        ccclass = _cc$_decorator.ccclass,
        property = _cc$_decorator.property;
      var SlotDjCtrl = exports('SlotDjCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(SlotDjCtrl, _GameDef$BaseCtrl);
        function SlotDjCtrl() {
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
          _this._model = SlotDjModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = SlotDjCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete SlotDjCtrl._instance;
          SlotDjCtrl._instance = null;
          SlotDjModel.destroy();
          SlotDjUtils.destroy();
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
          if (!SlotDjModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          if (buyFree) {
            SlotDjModel.instance.curTotalBet = SlotDjModel.instance.curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: SlotDjModel.instance.curBet * 1000,
              buyFree: true
            });
          } else {
            SlotDjModel.instance.curTotalBet = SlotDjModel.instance.curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + SlotDjModel.instance.curBet * 1000
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
            gameType: "slotRoosterRumble"
          });
        }

        // /**
        //  *搏一搏
        //  * @param type string "count" && "times"
        //  */
        // reqBoYiBo(type: string) {
        //     SlotDjModel.instance.boType = type;
        //     NetManager.instance.sendOnlineData(SlotDjDef.eProto.HD_BoYiBo, { betAmount: SlotDjModel.instance.curBet * 1000, boType: type });
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
            RecordType: "slotRoosterRumble"
          });
        }
        // /**重新进入 */
        // reEnterRoom() {
        //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //     NetManager.instance.sendOnlineData(SlotDjDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        // }

        /**请求进入房间 */;
        _proto.reqEnterRoom = function reqEnterRoom() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: SlotDjModel.instance.curBet * 1000
          });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotRoosterRumble"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotRoosterRumble",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotRoosterRumble"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotRoosterRumble",
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
              Common.showTip(i18n.errTip(data.Code), !SlotDjUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == SlotDjDef.eProto.HD_Enter || (data.Code == 402 && SlotDjModel.instance.gameState.GameNo != SlotDjModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(SlotDjDef.eEvent.onLoadHall);
            //     return;
            // }

            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (SlotDjModel.instance.isAuto) {
                SlotDjModel.instance.isAuto = false;
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

                // if (SlotDjModel.instance.gameStatus != SlotDjDef.eRunStatus.NONE) {
                //     return;
                // }
                SlotDjModel.instance.clearGameData();
                SlotDjModel.instance.gameInfo = data.Data;

                // for (const InitPosMsg of SlotDjModel.instance.gameInfo.InitPosMsg) {
                //     for (const info of InitPosMsg) {
                //         info.IsReward = false;
                //     }
                // }
                // SlotDjModel.instance.totalRate = SlotDjModel.instance.gameInfo.FreeCount > 0 ? SlotDjModel.instance.gameInfo.FreeTimes : 1;
                SlotDjModel.instance.totalFreeTimes = SlotDjModel.instance.gameInfo.surplusFreeCount;
                SlotDjModel.instance.totalFreeTimesBack = SlotDjModel.instance.gameInfo.freeCount;
                SlotDjModel.instance.totalFreeWin = SlotDjModel.instance.gameInfo.totalPrizeAmount;
                SlotDjModel.instance.totalRate = SlotDjModel.instance.gameInfo.roundOdds;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                SlotDjModel.instance.betResult = data.Data;

                //test
                // SlotDjModel.instance.betResult = this.getResult().Data;

                this.isReqBet = false;

                //判断是否有2个胡
                SlotDjModel.instance.specialStartCol = 0;
                if (!SlotDjModel.instance.isQuickStop) {
                  var openResult = SlotDjModel.instance.betResult.openResult[0];
                  SlotDjModel.instance.specialStartCol = SlotDjUtils.instance.checkScatter(openResult);

                  // //specialStartCol test
                  // SlotDjModel.instance.specialStartCol = Math.floor(Math.random() * 2 + 2);

                  gts.Debug.LogWarr("==SlotDjModel.instance.specialStartCol==" + SlotDjModel.instance.specialStartCol);
                }
                SlotDjModel.instance.totalFreeTimes = SlotDjModel.instance.betResult.freeCount;

                // //freeTest;
                // if (SlotDjModel.instance.totalFreeTimes > 0) {
                //     SlotDjModel.instance.totalFreeTimes--;
                // } else {
                //     SlotDjModel.instance.totalFreeTimes = 2; //Math.random() > 0.25 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==SlotDjModel.instance.totalFreeTimes==" + SlotDjModel.instance.totalFreeTimes);
                if (SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
                  SlotDjModel.instance.curBalance -= SlotDjModel.instance.curTotalBet;
                }
                break;
              }
            // case SlotDjDef.eProto.HD_BoYiBo:
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
                gts.Debug.LogWarr("==SlotDj=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (SlotDjModel.instance.curBalance > 0) {
                  SlotDjModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                SlotDjModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==SlotDj=pushWallet==" + _HD_Wallet.VndBalance);
                if (SlotDjModel.instance.curBalance > 0) {
                  SlotDjModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                SlotDjModel.instance.curBalance = _HD_Wallet.VndBalance;
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
          // let data = {
          //     Action: "HD_Bet",
          //     Code: 0,
          //     Data: {
          //         FreeCount: 0,
          //         Res: [],
          //     },
          //     ErrMsg: "Success",
          //     GameType: "slotRoosterRumble",
          //     cmd: "slotRoosterRumble/HD_Bet",
          // };
          // let Res = data.Data.Res;
          // let newResult = this.getRandReuslt();
          // Res.push(newResult);
          // while (newResult.RewardMoney > 0) {
          //     newResult = this.getRandReuslt(newResult);
          //     Res.push(newResult);
          // }
          // gts.Debug.LogWarr("==onRecvData=getResult=" + JSON.stringify(data));
          // return data;
        };
        _proto.getRandReuslt = function getRandReuslt(oldResult) {} // let openResult: SlotDjDef.IOpenResult = {
        //     AllPosMsg: [],
        //     ExtraOdd: 0,
        //     // ExtraPos: [],
        //     RewardMoney: 0,
        //     // RewardPos: null,
        // };
        // if (oldResult == null) {
        //     let ExtraPos = this.getRandSymbol(4);
        //     for (let i = 0; i < 6; i++) {
        //         let AllPosMsg = this.getRandSymbol(5, i == 0);
        //         if (i > 0 && i < 5) {
        //             AllPosMsg.push(ExtraPos[i - 1]);
        //         }
        //         openResult.AllPosMsg.push(AllPosMsg);
        //     }
        // }
        // let mapAllPosMsg = openResult.AllPosMsg;
        // let RewardPos = [];
        // let firstCol = mapAllPosMsg[0];
        // let getRewardPos = (symbol, col: number, arrPos: number[]) => {
        //     let allPosMsg = mapAllPosMsg[col];
        //     for (let iRow = 0; iRow < allPosMsg.length; iRow++) {
        //         let symbolInfo = allPosMsg[iRow];
        //         if (symbolInfo.Sym == SlotDjDef.eSymbol.WILD || symbolInfo.Sym == symbol) {
        //             symbolInfo.IsReward = true;
        //             let arrTemp = arrPos.slice();
        //             arrTemp.push(iRow);
        //             if (col + 1 < mapAllPosMsg.length) {
        //                 getRewardPos(symbol, col + 1, arrTemp);
        //             } else if (arrTemp.length > 2) {
        //                 RewardPos.push(arrTemp);
        //             }
        //         }
        //     }
        //     if (arrPos.length > 2) {
        //         RewardPos.push(arrPos);
        //     }
        // };
        // for (let iRow = 0; iRow < firstCol.length; iRow++) {
        //     getRewardPos(firstCol[iRow].Sym, 1, [iRow]);
        // }
        // gts.Debug.Log("===RewardPos===" + JSON.stringify(RewardPos));
        // if (RewardPos.length > 0) {
        //     // openResult.RewardPos = RewardPos;
        //     openResult.RewardMoney = 1000;
        // }
        // return openResult;
        ;

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
        return SlotDjCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDjDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6ec2cpyb1tOIJS+IsLMSLNh", "SlotDjDef", undefined);
      var cBundle = exports('cBundle', "SlotDjGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotRoosterRumble/HD_info";
        eProto["HD_Bet"] = "slotRoosterRumble/HD_Bet";
        eProto["HD_Leave"] = "slotRoosterRumble/HD_Leave";
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
        icon_scatterSPECIAL: 1001,
        iconWin: 1500,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 2,
        cStartDelay: 0.15,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 0.5,
        cSymbolW: 125,
        cSymbolH: 127,
        cSymbolStartX: -250,
        cSymbolStartY: -317.5,
        cSpeedMax: 3500,
        cSpeedMin: 2000,
        CSpeedStart: 2500,
        CSpeedAdd: 300,
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
        None: 0,
        PurpleChicken: 1,
        WhiteChicken: 2,
        Money: 3,
        Hand: 4,
        ChickenFeet: 5,
        Shoe: 6,
        A: 7,
        K: 8,
        Q: 9,
        J: 10,
        TEN: 11,
        NIGH: 12,
        SCATTER: 13,
        WILD: 14,
        Wild2: 15,
        Wild3: 16,
        Wild4: 17,
        Wild5: 18
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
        symSprChange: "sound/new/symSprChange",
        quickStop: "sound/new/quick",
        rateChange: "sound/new/rateChange",
        reeslstopNormal: "sound/new/reeslstopNormal",
        reeslstopQuick: "sound/new/reeslstopQuick",
        multiToInfobar: "sound/new/multiToInfobar",
        prizeMultiwin: "sound/new/prizeMultiwin",
        prizeMedwinInfobarMain: "sound/new/prizeMedwinInfobarMain",
        prizeMedwinInfobarEnd: "sound/new/prizeMedwinInfobarMain",
        prizeSmallwin: "sound/new/prizeSmallwin",
        symCollapsed: "sound/new/symCollapsed",
        prizeTotalwinInfobar: "sound/new/prizeTotalwinInfobar",
        symScatter: "sound/new/symScatter",
        symWild: "sound/new/symWild",
        heartbeatBounce: "sound/new/heartbeatBounce",
        heartbeatHeavyDrop: "sound/new/heartbeatHeavyDrop",
        fastspin: "sound/new/fastspin",
        symScatterWin: "sound/new/fastspin",
        fsLoading: "sound/new/fsLoading"
      }); //////////////////////////

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDjGame", ['./SlotDjCtrl.ts', './SlotDjDef.ts', './SlotDjModel.ts', './SlotDjScene.ts', './SlotDjUtils.ts', './SlotDjGameView.ts', './SlotDj_ScrollView.ts', './SlotDj_btnEffect.ts', './SlotDj_helpTip.ts', './SlotDj_history.ts', './SlotDj_historyItem.ts', './SlotDj_rank.ts', './SlotDj_rankItem.ts', './SlotDj_setAuto.ts', './SlotDj_setBase.ts', './SlotDj_shake.ts', './SlotDj_symbol.ts', './SlotDj_symbolEffectRoot.ts', './SlotDj_symbolInfo.ts', './SlotDj_symbolItem.ts', './SlotDj_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotDjGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './SlotDjDef.ts', './SlotDjModel.ts', './SlotDjCtrl.ts', './ViewManager.ts', './SlotDjUtils.ts', './SlotDj_winTip.ts', './SlotDj_symbol.ts', './SlotDj_symbolInfo.ts', './SlotDj_btnEffect.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Sprite, view, UIOpacity, tween, v3, UITransform, instantiate, color, Tween, GameDef, ConfigManager, EventManager, NetManager, eRunStatus, eEvent, eZindex, eSound, eConstDef, eProto, SlotDjModel, SlotDjCtrl, ViewManager, SlotDjUtils, SlotDj_winTip, SlotDj_symbol, SlotDj_symbolInfo, SlotDj_btnEffect, Common, AudioManager;
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
      view = module.view;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      color = module.color;
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
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
      eProto = module.eProto;
    }, function (module) {
      SlotDjModel = module.SlotDjModel;
    }, function (module) {
      SlotDjCtrl = module.SlotDjCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      SlotDj_winTip = module.default;
    }, function (module) {
      SlotDj_symbol = module.default;
    }, function (module) {
      SlotDj_symbolInfo = module.default;
    }, function (module) {
      SlotDj_btnEffect = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;
      cclegacy._RF.push({}, "5e69b7rUHpPMbdqY62E9Sfl", "SlotDjGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var SlotDjGameView = exports('default', (_dec = ccclass("SlotDjGameView"), _dec2 = menu("game/SlotDjGame/SlotDjGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SlotDj_symbol), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Button), _dec12 = property(Button), _dec13 = property(sp.Skeleton), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(sp.Skeleton), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(Sprite), _dec27 = property(Sprite), _dec28 = property(Label), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(SlotDj_symbolInfo), _dec32 = property(Label), _dec33 = property(sp.Skeleton), _dec34 = property(Node), _dec35 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(SlotDjGameView, _GameDef$BaseView);
        function SlotDjGameView() {
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
          _initializerDefineProperty(_this, "SlotDj_symbolList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_add", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_redus", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_symRate", _descriptor19, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrBgSpFrame", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_roomBg", _descriptor24, _assertThisInitialized(_this));
          //    // @property(cc.Sprite)
          //    // Sprite_tipBg: cc.Sprite = null;
          _initializerDefineProperty(_this, "Sprite_rateBg", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curRate", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_aniJi", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_startEffect", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigWin", _descriptor33, _assertThisInitialized(_this));
          _this.isFirstFree = false;
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = SlotDjGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, SlotDjCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!SlotDjUtils.instance.isChangeOrientation()) {
            var viewSize = view.getFrameSize();
            if (viewSize.width / viewSize.height > 750 / 1334) {
              this.Node_action.setPosition(this.Node_action.position.x, this.Node_action.position.y + 15);
              this.Node_menu.setPosition(this.Node_menu.position.x, this.Node_menu.position.y + 15);
              this.Button_menu.node.setPosition(this.Button_menu.node.position.x, this.Button_menu.node.position.y + 15);
              this.Button_run.node.setPosition(this.Button_run.node.position.x, this.Button_run.node.position.y + 15);
            }
          }
          this.schedule(this.randToAni, 2);
        };
        _proto.randToAni = function randToAni() {
          if (SlotDjModel.instance.gameStatus == eRunStatus.NONE) {
            var rand = Math.floor(Math.random() * 10 + 2);
            if (rand == 2 || rand == 3) {
              this.Node_aniJi.setAnimation(0, "idle" + rand, false);
              this.Node_aniJi.addAnimation(0, "idle", true);
            }
          }
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          //        // EventManager.instance.on(SlotDjDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              SlotDjModel.instance.autoTimes = times;
              SlotDjModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(SlotDj_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (SlotDjModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  SlotDjCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !SlotDjModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = SlotDjModel.instance.isAuto;
            SlotDjUtils.instance.updateLabel(_this2.Label_autoTimes, SlotDjModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            SlotDjModel.instance.autoTimes = 0;
            SlotDjModel.instance.isAuto = false;
            //                // this.Button_buy.interactable = true;

            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(SlotDj_btnEffect);
            btnRunEffect.switchAni();

            //                // SlotDjUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            SlotDjUtils.instance.updateLabel(_this2.Label_autoTimes, SlotDjModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);
          this.unschedule(this.randToAni);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          //        // EventManager.instance.off(SlotDjDef.eEvent.onCatNumMove, this.onCatNumMove, this);
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          SlotDjModel.instance.clearGameData();
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
              //                // SlotDjCtrl.instance.reEnterRoom();

              if (SlotDjModel.instance.isAuto && SlotDjCtrl.instance.isReqBet) {
                SlotDjCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseScore}_curIndex`, SlotDjModel.instance._curIndex_baseScore + 1);
          // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseRate}_curIndex`, SlotDjModel.instance._curIndex_baseRate + 1);
          // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseBet}_curIndex`, SlotDjModel.instance._curIndex_baseBet + 1);

          SlotDjModel.instance.curBet = (SlotDjModel.instance._curIndex_baseScore == 0 ? 0.1 : SlotDjModel.instance._curIndex_baseScore * 0.5) * (SlotDjModel.instance._curIndex_baseRate + 1) * 20;
          this.Button_redus.interactable = SlotDjModel.instance.curBet > 2;
          this.Button_add.interactable = SlotDjModel.instance.curBet < 200;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curBet, 2.0) + "k";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          SlotDjModel.instance._curIndex_baseScore = 0;
          SlotDjModel.instance._curIndex_baseRate = 0;
          SlotDjModel.instance._curIndex_baseBet = 0;
          SlotDjModel.instance.curBet = 2;
          this.Button_redus.interactable = SlotDjModel.instance.curBet > 2;
          this.Button_add.interactable = SlotDjModel.instance.curBet < 200;
          this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;

          //        // this.Node_colEffect.zIndex = SlotDjDef.eZindex.SPECIAL - 100;
          this.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
          SlotDjUtils.instance.loadRes_icon(function () {
            if (_this4.SlotDj_symbolList) {
              //            //test
              var symList = SlotDjUtils.instance.getInitList();
              for (var i = 0; i < _this4.SlotDj_symbolList.length; i++) {
                _this4.SlotDj_symbolList[i].init(symList[i]);
              }
              SlotDjCtrl.instance.reqEnterRoom();
            }
          });
          this.Label_bet.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curBet, 2.0) + "k";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    // onToggleClick(event) {
        //    //     switch (event.node.name) {
        //    //         case "Button_fast": {
        //    //             //快速停止
        //    //             SlotDjModel.instance.isQuickStop = !SlotDjModel.instance.isQuickStop;
        //    //             // SlotDjUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !SlotDjModel.instance.isQuickStop);
        //    //             break;
        //    //         }
        //    //     }
        //    // }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "btnWin":
              {
                Common.loadPopBuddle("prefab/Node_history", SlotDjUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_fast":
              {
                //                //快速停止
                SlotDjModel.instance.isQuickStop = !SlotDjModel.instance.isQuickStop;
                //                // SlotDjUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !SlotDjModel.instance.isQuickStop);

                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!SlotDjModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_auto":
              {
                if (!SlotDjModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", SlotDjUtils.instance.bundle, function () {}, function (prefab) {
                    var newNode = instantiate(prefab);
                    Common.transformSize(newNode);
                    ViewManager.instance.popNodeView(newNode, true);
                  }, true);
                } else {
                  this.Button_auto.interactable = true;
                }

                //                // SlotDjModel.instance.isAuto = !SlotDjModel.instance.isAuto;

                //                // if (SlotDjModel.instance.gameStatus == SlotDjDef.eRunStatus.NONE && SlotDjModel.instance.isAuto) {
                //                //     SlotDjCtrl.instance.reqBet();
                //                // }
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
                SlotDjCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", SlotDjUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", SlotDjUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", SlotDjUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (SlotDjModel.instance.gameStatus != eRunStatus.NONE || SlotDjModel.instance.isAuto) {
                  return;
                }
                SlotDjModel.instance._curIndex_baseBet--;
                if (SlotDjModel.instance._curIndex_baseBet < 0) {
                  SlotDjModel.instance._curIndex_baseBet = 0;
                }
                SlotDjModel.instance._curIndex_baseScore = Math.floor(SlotDjModel.instance._curIndex_baseBet / 10);
                SlotDjModel.instance._curIndex_baseRate = SlotDjModel.instance._curIndex_baseBet % 10;
                SlotDjModel.instance.curBet = (SlotDjModel.instance._curIndex_baseScore == 0 ? 0.1 : SlotDjModel.instance._curIndex_baseScore * 0.5) * (SlotDjModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curBet, 2.0) + "k";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseScore}_curIndex`, SlotDjModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseRate}_curIndex`, SlotDjModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseBet}_curIndex`, SlotDjModel.instance._curIndex_baseBet + 1);

                this.Button_redus.interactable = SlotDjModel.instance.curBet > 2;
                this.Button_add.interactable = SlotDjModel.instance.curBet < 200;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                break;
              }
            case "Button_add":
              {
                if (SlotDjModel.instance.gameStatus != eRunStatus.NONE || SlotDjModel.instance.isAuto) {
                  return;
                }
                SlotDjModel.instance._curIndex_baseBet++;
                if (SlotDjModel.instance._curIndex_baseBet > 29) {
                  SlotDjModel.instance._curIndex_baseBet = 29;
                }
                SlotDjModel.instance._curIndex_baseScore = Math.floor(SlotDjModel.instance._curIndex_baseBet / 10);
                SlotDjModel.instance._curIndex_baseRate = SlotDjModel.instance._curIndex_baseBet % 10;
                SlotDjModel.instance.curBet = (SlotDjModel.instance._curIndex_baseScore == 0 ? 0.1 : SlotDjModel.instance._curIndex_baseScore * 0.5) * (SlotDjModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.curBet, 2.0) + "k";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseScore}_curIndex`, SlotDjModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseRate}_curIndex`, SlotDjModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${SlotDjDef.cBundle}_${SlotDjDef.eAutoRateType.baseBet}_curIndex`, SlotDjModel.instance._curIndex_baseBet + 1);

                this.Button_redus.interactable = SlotDjModel.instance.curBet > 2;
                this.Button_add.interactable = SlotDjModel.instance.curBet < 200;
                this.Button_redus.node.getComponent(UIOpacity).opacity = this.Button_redus.interactable ? 255 : 100;
                this.Button_add.node.getComponent(UIOpacity).opacity = this.Button_add.interactable ? 255 : 100;
                break;
              }
            case "Button_run":
              {
                //                // this.doStartRun();
                if (SlotDjModel.instance.isAuto) {
                  SlotDjModel.instance.isAuto = false;
                  SlotDjModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = SlotDjModel.instance.isAuto;
                  SlotDjUtils.instance.updateLabel(this.Label_autoTimes, SlotDjModel.instance.autoTimes);
                  if (SlotDjModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(SlotDj_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (SlotDjCtrl.instance.isReqBet) {
                  break;
                }
                if (SlotDjModel.instance.gameStatus == eRunStatus.NONE) {
                  //                    // event.target.getComponent(cc.Button).interactable = false;
                  //                    // SlotDjUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), true);

                  tween(event.target).delay(5).call(function () {
                    if (!SlotDjModel.instance.isAuto) ;
                  }).start();
                  SlotDjCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (SlotDjModel.instance.gameStatus != eRunStatus.NONE || SlotDjModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", SlotDjUtils.instance.bundle, function () {}, function (help) {
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

            //            //     SlotDjCtrl.instance.reqBoYiBo("count");
            //            //     break;
            //            // }
            //            // case "Button_rate": {
            //            //     this.Button_times.interactable = false;
            //            //     this.Button_rate.interactable = false;
            //            //     this.Button_enterFree.interactable = false;

            //            //     this.unschedule(this.doEnterFree);

            //            //     event.target.getComponent(cc.Button).interactable = false;

            //            //     SlotDjCtrl.instance.reqBoYiBo("times");
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
          SlotDjUtils.instance.stopSound(eSound.fastspin);
          var setCol = iCol + 1;
          if (setCol < this.SlotDj_symbolList.length) {
            SlotDjUtils.instance.playOneShot(eSound.fastspin);
            var ani = setCol == 5 ? "short" : "long";
            if (this.Node_colEffect.getComponent(sp.Skeleton).animation != ani) {
              this.Node_colEffect.getComponent(sp.Skeleton).setAnimation(0, ani, true);
            }

            //            // this.Node_colEffect.zIndex = SlotDjDef.eZindex.SPECIAL - 2 * (iCol + 1) - 1;

            this.Node_colEffect.getComponent(UITransform).priority = eZindex.SPECIAL + 100;
            this.Node_colEffect.setPosition(this.SlotDj_symbolList[setCol].node.getPosition().x, this.Node_colEffect.position.y);
          }
        };
        _proto.showMask = function showMask(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            //            //mask hide
            //            // if (this.Node_mask_0.active) {
            //            //     cc.tween(this.Node_mask_0)
            //            //         .stop()
            //            //         .to(0.2, { opacity: 0 })
            //            //         .call(() => {
            //            //             this.Node_mask_0.active = false;
            //            //         })
            //            //         .start();
            //            // }
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
          //        // if (!this.Node_mask_0.active) {
          //        //     this.Node_mask_0.active = true;
          //        //     this.Node_mask_0.opacity = 0;
          //        //     cc.tween(this.Node_mask_0).stop().to(0.2, { opacity: 180 }).start();
          //        // }
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
          if (SlotDjModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.Button_auto.interactable = false;
          this.Button_add.interactable = false;
          this.Button_redus.interactable = false;
          if (SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
            if (SlotDjModel.instance.isAuto && SlotDjModel.instance.autoTimes > 0) {
              SlotDjModel.instance.autoTimes--;
              SlotDjUtils.instance.updateLabel(this.Label_autoTimes, SlotDjModel.instance.autoTimes);
            }
            if (SlotDjModel.instance.totalRate != 1) {
              SlotDjModel.instance.totalRate = 1;
              this.Label_curRate.node.getComponent(UIOpacity).opacity = 100;
              this.Label_curRate.string = "x" + SlotDjModel.instance.totalRate;
            }
            this.Label_win.string = "0.00";
          }
          this.Label_gold.color = color(255, 255, 255, 255);
          this.Label_bet.color = color(255, 255, 255, 255);
          this.Label_win.color = color(255, 255, 255, 255);
          this.Button_auto.node.getComponent(UIOpacity).opacity = 100;
          this.Button_add.node.getComponent(UIOpacity).opacity = 100;
          this.Button_redus.node.getComponent(UIOpacity).opacity = 100;
          this.Button_menu.node.getComponent(UIOpacity).opacity = 100;
          this.Node_info.node.active = false;
          //        // this.Label_symRate.string = "...";
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.Button_menu.interactable = false;
          //        // this.Button_buy.interactable = false;

          this.Node_tipEffect.node.active = false;
          SlotDjModel.instance.curTotalWin = 0;
          EventManager.instance.emit(eEvent.updateWin, 0);
          var children = this.Node_effectRoot.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var nodeChild = _step.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, i, startDelay, stopDelay;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (_this7.isFirstFree) {
                    _this7.showFreeWildEffect();
                  }
                  arrPro = [];
                  for (i = 0; i < _this7.SlotDj_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = SlotDjModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = SlotDjModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    stopDelay += SlotDjModel.instance.specialStartCol > 0 && i >= SlotDjModel.instance.specialStartCol ? eConstDef.cSpecialDuration * (i - SlotDjModel.instance.specialStartCol + 1) : 0;
                    stopDelay += _this7.isFirstFree ? 6 : 0;
                    arrPro.push(_this7.SlotDj_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  _context.next = 5;
                  return Promise.all(arrPro);
                case 5:
                  _this7.scheduleOnce(_this7.doRunEnd, 0);
                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          SlotDjModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "star" && !SlotDjModel.instance.isAuto && SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
            this.Skeleton_run.setAnimation(0, "star", true);
          }
          if (SlotDjModel.instance.freeStatus == eRunStatus.RUNNING) {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (SlotDjModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + SlotDjModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            SlotDjUtils.instance.playOneShot(eSound.startRun);
          }
        };
        _proto.showWinTip = function showWinTip(prizeAmount, isRate, isLast) {
          if (isRate === void 0) {
            isRate = false;
          }
          if (isLast === void 0) {
            isLast = false;
          }
          var winRate = prizeAmount / (SlotDjModel.instance.curBet * 1000);
          this.Node_winTip.active = true;
          var com_SlotDj_winTip = this.Node_winTip.getComponent(SlotDj_winTip);
          if (!isRate) {
            com_SlotDj_winTip.doShow(prizeAmount, isLast);
            if (!isLast) {
              var curTotalWin = SlotDjModel.instance.totalFreeWin;
              if (SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
                curTotalWin = SlotDjModel.instance.curTotalWin;
              }
              SlotDjUtils.instance.updateLabelAddNf(this.Label_win, curTotalWin, false, curTotalWin - prizeAmount);
              EventManager.instance.emit(eEvent.updateWin, curTotalWin);
            }
          } else {
            com_SlotDj_winTip.doShowRate(prizeAmount / SlotDjModel.instance.totalRate);
          }
          this.Node_tipEffect.node.active = true;
          if (winRate > 5) {
            //            //显示得分 tip
            this.Node_tipEffect.setAnimation(0, winRate < 60 ? "bigwin_win" : "bigwin2_win", false);
            this.Node_tipEffect.addAnimation(0, winRate < 60 ? "bigwin_idle" : "bigwin2_idle", true);
          } else {
            //            //显示得分 tip
            this.Node_tipEffect.setAnimation(0, "normal_win", false);
            this.Node_tipEffect.addAnimation(0, "normal_idle", true);
          }
        };
        _proto.showWinEffect = function showWinEffect(curRate, fCallBack, isJiPlay) {
          var _this8 = this;
          if (fCallBack === void 0) {
            fCallBack = null;
          }
          if (isJiPlay === void 0) {
            isJiPlay = true;
          }
          if (isJiPlay) {
            this.Node_aniJi.setAnimation(0, "clash", false);
            this.Node_aniJi.addAnimation(0, "idle", true);
            this.Node_rateEffect.active = true;
            var Node_boEffect = this.Node_rateEffect.getChildByName("Node_boEffect").getComponent(sp.Skeleton);
            Node_boEffect.node.active = true;
            Node_boEffect.setAnimation(0, "idle", false);
            Node_boEffect.setCompleteListener(function () {
              Node_boEffect.setCompleteListener(null);
              _this8.Node_rateEffect.active = false;
            });
          }
          var soundName = "sound/new/multiNumber0" + curRate % 5;
          SlotDjUtils.instance.playOneShot(soundName);
          if (curRate > 2) {
            //                        //倍率掉落
            var dropLabel = instantiate(this.Label_curRate.node);
            dropLabel.getComponent(UIOpacity).opacity = 100;
            dropLabel.setPosition(dropLabel.position.x, 22);
            this.Label_curRate.node.parent.addChild(dropLabel);
            dropLabel.getComponent(Label).string = "x" + SlotDjModel.instance.totalRate;
            tween(dropLabel).to(0.3, {
              position: v3(dropLabel.position.x, 22 - 148)
            }, {
              easing: "cubicOut"
            }).call(function () {
              tween(dropLabel.getComponent(UIOpacity)).to(0.05, {
                opacity: 0
              }).start();
            }).delay(0.05).call(function () {
              tween(_this8.Label_curRate.node).to(0.2, {
                scale: v3(1.5, 1.5, 1)
              }).call(function () {
                _this8.Label_curRate.string = "x" + curRate;
              }).to(0.25, {
                scale: v3(1, 1, 1)
              }).call(function () {
                if (fCallBack) {
                  fCallBack();
                }
              }).start();
              tween(_this8.Label_curRate.node.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }).removeSelf().start();
          } else {
            tween(this.Label_curRate.node).to(0.2, {
              scale: v3(1.5, 1.5, 1)
            }).call(function () {
              _this8.Label_curRate.string = "x" + curRate;
            }).to(0.25, {
              scale: v3(1, 1, 1)
            }).call(function () {
              if (fCallBack) {
                fCallBack();
              }
            }).start();
            tween(this.Label_curRate.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
          }
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this9 = this;
            var resultList, _loop, i, awaitDelay, delayStart, btnRunEffect;
            return _regeneratorRuntime().wrap(function _callee2$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  SlotDjModel.instance.gameStatus = eRunStatus.CLEAR;
                  //        // this.Button_run.interactable = false;

                  if (this.Node_colEffect.active) {
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this9.Node_colEffect.active = false;
                    }).start();
                  }
                  SlotDjModel.instance.curTotalWin = 0;
                  resultList = SlotDjModel.instance.betResult.openResult;
                  if (SlotDjModel.instance.betResult.totalPrizeAmount > 0 && !SlotDjModel.instance.isAuto && SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Skeleton_run.setAnimation(0, "stop", true);
                  }
                  SlotDjModel.instance.specialStartCol = 0;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, arrPro, _i, _i2, dropDelay, _i3, _i4, _i5, _i6, disRate, Node_boEffect, soundName, dropLabel;
                    return _regeneratorRuntime().wrap(function _loop$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          result = resultList[i];
                          if (!(result.prizeAmount > 0)) {
                            _context2.next = 58;
                            break;
                          }
                          resultNext = resultList[i + 1]; //                // this.scheduleOnce(() => {}, 0.5);
                          _this9.showMask();
                          SlotDjUtils.instance.playOneShot(eSound.prizeSmallwin);

                          //                //doEffect
                          arrPro = [];
                          for (_i = 0; _i < _this9.SlotDj_symbolList.length; _i++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i].doEffect());
                          }
                          _context2.next = 9;
                          return Promise.all(arrPro);
                        case 9:
                          SlotDjUtils.instance.playOneShot(eSound.symCollapsed);
                          _this9.showMask(false);
                          _this9.Node_helpTip.active = false;
                          SlotDjModel.instance.curTotalWin += result.prizeAmount;
                          if (SlotDjModel.instance.freeStatus != eRunStatus.NONE) {
                            SlotDjModel.instance.totalFreeWin += result.prizeAmount;
                          }
                          SlotDjUtils.instance.playOneShot(eSound.clear_1);
                          arrPro = [];
                          for (_i2 = 0; _i2 < _this9.SlotDj_symbolList.length; _i2++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i2].doClear());
                          }
                          _context2.next = 19;
                          return Promise.all(arrPro);
                        case 19:
                          dropDelay = 0;
                          if (!(SlotDjUtils.instance.checkScatter(result) != 0)) {
                            _context2.next = 41;
                            break;
                          }
                          //                    //drop
                          arrPro = [];
                          for (_i3 = 0; _i3 < _this9.SlotDj_symbolList.length; _i3++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i3].doDropFront(resultNext, 0, true));
                          }
                          _context2.next = 25;
                          return Promise.all(arrPro);
                        case 25:
                          //                    //
                          _this9.showMask(true);
                          SlotDjUtils.instance.playSound(eSound.heartbeatBounce, true);
                          arrPro = [];
                          for (_i4 = 0; _i4 < _this9.SlotDj_symbolList.length; _i4++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i4].doScatterEffect());
                          }
                          _context2.next = 31;
                          return Promise.all(arrPro);
                        case 31:
                          _this9.showMask(false);
                          SlotDjUtils.instance.stopSound(eSound.heartbeatBounce);
                          SlotDjUtils.instance.playSound(eSound.heartbeatHeavyDrop, false);
                          //                    //drop
                          dropDelay = 0.2;
                          arrPro = [];
                          for (_i5 = 0; _i5 < _this9.SlotDj_symbolList.length; _i5++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i5].doDropFront(resultNext, dropDelay, false));
                          }
                          _context2.next = 39;
                          return Promise.all(arrPro);
                        case 39:
                          _context2.next = 45;
                          break;
                        case 41:
                          //                    //drop
                          arrPro = [];
                          for (_i6 = 0; _i6 < _this9.SlotDj_symbolList.length; _i6++) {
                            arrPro.push(_this9.SlotDj_symbolList[_i6].doDrop(resultNext, dropDelay * _i6));
                          }
                          _context2.next = 45;
                          return Promise.all(arrPro);
                        case 45:
                          gts.Debug.Log("==========doDrop========");
                          _this9.showWinTip(result.prizeAmount, SlotDjModel.instance.totalRate > 1);
                          disRate = SlotDjModel.instance.freeStatus == eRunStatus.NONE ? 1 : 2; // SlotDjModel.instance.totalRate += disRate;
                          ///////////////////////////
                          _this9.Node_aniJi.setAnimation(0, "clash", false);
                          _this9.Node_aniJi.addAnimation(0, "idle", true);
                          _this9.Node_rateEffect.active = true;
                          Node_boEffect = _this9.Node_rateEffect.getChildByName("Node_boEffect").getComponent(sp.Skeleton);
                          Node_boEffect.node.active = true;
                          Node_boEffect.setAnimation(0, "idle", false);
                          Node_boEffect.setCompleteListener(function () {
                            Node_boEffect.setCompleteListener(null);
                            _this9.Node_rateEffect.active = false;
                          });
                          soundName = "sound/new/multiNumber0" + SlotDjModel.instance.totalRate % 5;
                          SlotDjUtils.instance.playOneShot(soundName);
                          if (SlotDjModel.instance.totalRate > 2) {
                            //                        //倍率掉落
                            dropLabel = instantiate(_this9.Label_curRate.node);
                            dropLabel.getComponent(UIOpacity).opacity = 100;
                            dropLabel.setPosition(dropLabel.position.x, 22);
                            _this9.Label_curRate.node.parent.addChild(dropLabel);
                            dropLabel.getComponent(Label).string = "x" + SlotDjModel.instance.totalRate;
                            tween(dropLabel).to(0.3, {
                              position: v3(dropLabel.position.x, 22 - 148)
                            }, {
                              easing: "cubicOut"
                            }).call(function () {
                              tween(dropLabel.getComponent(UIOpacity)).to(0.05, {
                                opacity: 0
                              }).start();
                            }).delay(0.05).call(function () {
                              tween(_this9.Label_curRate.node).to(0.2, {
                                scale: v3(1.5, 1.5, 1)
                              }).call(function () {
                                SlotDjModel.instance.totalRate += disRate;
                                _this9.Label_curRate.string = "x" + SlotDjModel.instance.totalRate;
                              }).to(0.25, {
                                scale: v3(1, 1, 1)
                              }).start();
                              tween(_this9.Label_curRate.node.getComponent(UIOpacity)).to(0.2, {
                                opacity: 255
                              }).start();
                            }).removeSelf().start();
                          } else {
                            tween(_this9.Label_curRate.node).to(0.2, {
                              scale: v3(1.5, 1.5, 1)
                            }).call(function () {
                              SlotDjModel.instance.totalRate += disRate;
                              _this9.Label_curRate.string = "x" + SlotDjModel.instance.totalRate;
                            }).to(0.25, {
                              scale: v3(1, 1, 1)
                            }).start();
                            tween(_this9.Label_curRate.node.getComponent(UIOpacity)).to(0.2, {
                              opacity: 255
                            }).start();
                          }

                        // this.showWinEffect(SlotDjModel.instance.totalRate, () => {
                        //     if (SlotDjModel.instance.totalRate > 2) {
                        //         //                        //倍率掉落
                        //         let dropLabel = cc.instantiate(this.Label_curRate.node);
                        //         dropLabel.getComponent(cc.UIOpacity).opacity = 100;
                        //         dropLabel.setPosition(dropLabel.position.x, 22);
                        //         this.Label_curRate.node.parent.addChild(dropLabel);

                        //         dropLabel.getComponent(cc.Label).string = `x${SlotDjModel.instance.totalRate}`;
                        //         cc.tween(dropLabel)
                        //             .to(0.3, { position: cc.v3(dropLabel.position.x, 22 - 148) }, { easing: "cubicOut" })
                        //             .call(() => {
                        //                 cc.tween(dropLabel.getComponent(cc.UIOpacity)).to(0.05, { opacity: 0 }).start();
                        //             })
                        //             .delay(0.05)
                        //             .call(() => {
                        //                 SlotDjUtils.instance.playOneShot(SlotDjDef.eSound.multiToInfobar);
                        //                 this.showWinTip(result.prizeAmount);
                        //             })
                        //             .removeSelf()
                        //             .start();
                        //     }
                        // });
                        case 58:
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
                  awaitDelay = 0;
                  if (SlotDjModel.instance.freeStatus == eRunStatus.NONE) {
                    awaitDelay = SlotDjModel.instance.totalRate > 2 ? 2.0 : 0;
                  } else {
                    awaitDelay = SlotDjModel.instance.totalRate > 4 ? 2.0 : 0;
                  }
                  _context3.next = 19;
                  return this.doAwait(awaitDelay);
                case 19:
                  delayStart = 0.25;
                  if (!(SlotDjModel.instance.curTotalWin > 0)) {
                    _context3.next = 29;
                    break;
                  }
                  _context3.next = 23;
                  return this.doShowBigWin(SlotDjModel.instance.curTotalWin);
                case 23:
                  SlotDjUtils.instance.playSound(eSound.prizeTotalwinInfobar);

                  //            // this.showWinEffect(SlotDjModel.instance.totalRate);
                  this.showWinTip(SlotDjModel.instance.curTotalWin, false, true);
                  delayStart = 1.5;
                  if (SlotDjModel.instance.endBalance > 0) {
                    SlotDjModel.instance.curBalance = SlotDjModel.instance.endBalance;
                    SlotDjModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                  _context3.next = 30;
                  break;
                case 29:
                  if (SlotDjModel.instance.isQuickStop) {
                    SlotDjUtils.instance.playOneShot(eSound.quickStop);
                  }
                case 30:
                  SlotDjModel.instance.isAuto = SlotDjModel.instance.autoTimes > 0;
                  if (!SlotDjModel.instance.isAuto) {
                    //            // this.Button_buy.interactable = true;

                    this.Skeleton_run.setCompleteListener(null);
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.interactable = true;
                    this.Button_run.node.emit("resumeEffect");
                    btnRunEffect = this.Button_run.node.getComponent(SlotDj_btnEffect);
                    btnRunEffect.switchAni();

                    //            // SlotDjUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    SlotDjUtils.instance.updateLabel(this.Label_autoTimes, SlotDjModel.instance.autoTimes);
                  }
                  SlotDjModel.instance.gameStatus = eRunStatus.NONE;

                  //        //free and auto
                  if (!(SlotDjModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context3.next = 38;
                    break;
                  }
                  this.Node_bigWin.active = false;
                  if (SlotDjModel.instance.totalFreeTimes > 0) {
                    this.scheduleOnce(function () {
                      SlotDjCtrl.instance.reqBet();
                    }, delayStart);
                  } else {
                    SlotDjModel.instance.freeStatus = eRunStatus.END;
                    this.doEndFree();
                  }
                  _context3.next = 46;
                  break;
                case 38:
                  if (!(SlotDjModel.instance.totalFreeTimes > 0)) {
                    _context3.next = 45;
                    break;
                  }
                  SlotDjUtils.instance.playOneShot(eSound.symScatterWin);
                  _context3.next = 42;
                  return this.doAwait(1.0);
                case 42:
                  this.showFree();
                  _context3.next = 46;
                  break;
                case 45:
                  if (SlotDjModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      SlotDjCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 46:
                  this.scheduleOnce(function () {
                    if (SlotDjModel.instance.isAuto || SlotDjModel.instance.freeStatus == eRunStatus.RUNNING) {
                      _this9.Label_gold.color = color(255, 255, 255, 255);
                      _this9.Label_bet.color = color(255, 255, 255, 255);
                      _this9.Label_win.color = color(255, 255, 255, 255);
                    } else {
                      _this9.Label_gold.color = color(150, 220, 255, 255);
                      _this9.Label_bet.color = color(150, 220, 255, 255);
                      _this9.Label_win.color = color(150, 220, 255, 255);
                      _this9.Button_menu.interactable = true;
                      _this9.Button_redus.interactable = SlotDjModel.instance.curBet > 2;
                      _this9.Button_add.interactable = SlotDjModel.instance.curBet < 200;
                      _this9.Button_auto.interactable = true;
                      _this9.Button_auto.node.getComponent(UIOpacity).opacity = 255;
                      _this9.Button_add.node.getComponent(UIOpacity).opacity = _this9.Button_add.interactable ? 255 : 100;
                      _this9.Button_redus.node.getComponent(UIOpacity).opacity = _this9.Button_redus.interactable ? 255 : 100;
                      _this9.Button_menu.node.getComponent(UIOpacity).opacity = 255;
                    }
                  }, SlotDjModel.instance.curTotalWin > 0 ? 0.25 : 0);
                case 47:
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
        _proto.doAwait = function doAwait(delay) {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            _this10.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this11 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (SlotDjModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 20) {
              //                //30
              resolve();
              return;
            }
            _this11.scheduleOnce(function () {
              //                //大奖显示
              _this11.Node_bigWin.parent = _this11.node;
              _this11.Node_bigWin.getComponent(UITransform).priority = 52;
              _this11.Node_bigWin.active = true;
              _this11.Node_bigWin.scale = v3(0.5, 0.5, 1);
              var Node_bigWinEffect = _this11.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 35 ? 0 : rate < 50 ? 1 : 2;
              var ani = ["bigwin", "megawin", "superwin"];
              var aniIdle = ["bigwin_idle", "megawin_idle", "superwin_idle"];
              var TrackEntry = Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
              Node_bigWinEffect.addAnimation(0, aniIdle[level], true);
              tween(_this11.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                SlotDjUtils.instance.playOneShot(eSound.bigWin);
                //                        // SlotDjUtils.instance.playSound(SlotDjDef.eSound.coin);
                //                        // let Label_totalWin = this.Node_bigWin.getChildByName("Label_totalWin").getComponent(cc.Label);
                var Label_totalWin = _this11.txt_bigWin;
                var totalTime = TrackEntry.animation.duration;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                tween(Label_totalWin.node).repeatForever(tween(Label_totalWin.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    var ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (_this11.isStopBigWin && Node_bigWinEffect.animation != ani[level]) {
                      Node_bigWinEffect.setAnimation(0, ani[level], true);
                      delay = 2.0;
                    }
                    SlotDjUtils.instance.stopSound(eSound.bigWin);
                    SlotDjUtils.instance.playSound(eSound.bigWinEnd);
                    Tween.stopAllByTarget(_this11.Node_bigWin);
                    Tween.stopAllByTarget(Label_totalWin.node);
                    curTotalWin = destWin;
                    tween(_this11.Node_bigWin).delay(delay).call(function () {
                      _this11.Node_bigWin.active = false;
                      _this11.isStopBigWin = false;
                      resolve();
                    }).start();
                    var inter = Common.numFormatInt(curTotalWin / 1000);
                    var digit = SlotDjUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                    Label_totalWin.string = "" + inter + digit + "k";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(SlotDjModel.instance.isAuto || SlotDjModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                      var inter = Common.numFormatInt(curTotalWin / 1000);
                      var digit = SlotDjUtils.instance.numberFormatD(curTotalWin / 1000, 2.0);
                      Label_totalWin.string = "" + inter + digit + "k";
                    } else {
                      var _inter = Common.numFormatInt(curTotalWin / 1000);
                      var _digit = SlotDjUtils.instance.numberFormatFloatD(curTotalWin / 1000, 2.0);
                      Label_totalWin.string = "" + _inter + _digit + "k";
                    }
                  }
                  if (_this11.isStopBigWin) {
                    //                                            //点击停止
                    doEnd();
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.hideFree = function hideFree() {
          var _this12 = this;
          this.unschedule(this.hideFree);

          //        // if (SlotDjModel.instance.freeStatus != SlotDjDef.eRunStatus.NONE) {
          SlotDjModel.instance.freeStatus = eRunStatus.NONE;
          SlotDjModel.instance.totalFreeTimes = 0;
          SlotDjModel.instance.totalRate = 1;
          this.Label_curRate.string = "x" + SlotDjModel.instance.totalRate;
          this.Label_curRate.node.getComponent(UIOpacity).opacity = 100;
          AudioManager.instance.resumeMusic();
          SlotDjUtils.instance.stopSound(eSound.free_winEffect);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_enter = _this12.Node_free.getChildByName("Node_enter");
            Node_enter.active = false;
            var Node_end = _this12.Node_free.getChildByName("Node_end");
            Node_end.active = false;
            var Node_freeInfo = _this12.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = false;
            _this12.Node_bigWin.active = false;
            SlotDjUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this12.Node_free.active = false;
            if (SlotDjModel.instance.isAuto) {
              _this12.scheduleOnce(function () {
                SlotDjCtrl.instance.reqBet();
              }, 0.25);
            }
          }).start();
        };
        _proto.showFree = function showFree(isEnter) {
          var _this13 = this;
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
              if (isEnter) {
                _this13.Label_win.string = SlotDjUtils.instance.numberFormat(SlotDjModel.instance.totalFreeWin / 1000, 2) + "k";
                _this13.doEnterFree();
              } else {
                SlotDjUtils.instance.playSound(eSound.fsLoading);
                _this13.Label_win.string = "0.00";
                SlotDjModel.instance.totalFreeTimesBack = SlotDjModel.instance.totalFreeTimes;
                _this13.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEndFree = function setEndFree() {
          //        //背景
          this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[0];
          this.Node_public.setPosition(this.Node_public.position.x, 209);
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this14 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 0;
          this.isFirstFree = true;
          //        //enter
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          Node_enter.getComponent(UIOpacity).opacity = 255;
          Node_enter.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          Node_enter.getComponent(sp.Skeleton).addAnimation(0, "idle", true);

          //        //免费次数
          var Label_freeTimes = Node_enter.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "" + SlotDjModel.instance.totalFreeTimes;
          SlotDjModel.instance.totalFreeWin = 0;
          SlotDjModel.instance.totalRate = 2;
          this.Label_curRate.node.getComponent(UIOpacity).opacity = SlotDjModel.instance.totalRate > 1 ? 255 : 100;
          tween(this.Node_free.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).call(function () {
            var Button_enter = Node_enter.getChildByName("Button_enter");
            Button_enter.active = false;
            Button_enter.active = true;
            Button_enter.getComponent(UIOpacity).opacity = 0;
            tween(Button_enter.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).call(function () {
              _this14.scheduleOnce(_this14.doEnterFree, 3.0);
            }).start();
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          if (SlotDjModel.instance.freeStatus != eRunStatus.NONE) {
            return;
          }
          SlotDjModel.instance.freeStatus = eRunStatus.RUNNING;
          this.Label_curRate.node.getComponent(UIOpacity).opacity = SlotDjModel.instance.totalRate > 1 ? 255 : 100;
          this.unschedule(this.doEnterFree);
          SlotDjUtils.instance.playBgMusic(eSound.bgFree);

          //        //enter close
          var Node_enter = this.Node_free.getChildByName("Node_enter");
          Node_enter.active = true;
          this.scheduleOnce(function () {
            Node_enter.getComponent(sp.Skeleton).setAnimation(0, "intro", false);
            Node_enter.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
            tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              Node_enter.active = false;
            }).start();
          });
          do {
            this.Node_info.node.active = false;
            //            //背景
            this.node.getComponent(Sprite).spriteFrame = this.arrBgSpFrame[1];
            this.Label_curRate.string = "x" + SlotDjModel.instance.totalRate;
            this.Node_public.setPosition(this.Node_public.position.x, -3);
            this.Node_action.active = false;
            this.Node_menu.active = false;
            this.Button_menu.node.active = false;
            this.Button_run.node.active = false;
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + SlotDjModel.instance.totalFreeTimes;
            var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
          } while (false);
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            SlotDjCtrl.instance.reqBet();
          }, 1.0);
        };
        _proto.addWildSymbol = function addWildSymbol() {
          var Node_symbolRoot = this.Node_startEffect.getChildByName("Node_symbolRoot");
          var Node_symbolItem = this.Node_startEffect.getChildByName("Node_symbolItem");
          var newSymbol = instantiate(Node_symbolItem);
          Node_symbolRoot.addChild(newSymbol);
          var posCol = Math.floor(Math.random() * 4) + 1;
          var toRow = Math.floor(Math.random() * (posCol == 0 || posCol == 5 ? 4 : 5));

          //        //SlotDjDef.eConstDef.cSymbolStartY+SlotDjDef.eConstDef.cSymbolH / 2.0;
          var startPosY = 127;
          var startPosX = posCol * 126 + 65;
          newSymbol.position = v3(startPosX, startPosY, 0);
          newSymbol.active = true;
          var toPosY_0 = posCol == 0 || posCol == 5 ? -toRow * 127 : -toRow * 127 + 127 / 2;
          var toPosY_1 = -762;
          tween(newSymbol).delay(Math.random() * 0.5).to(0.2, {
            position: v3(newSymbol.position.x, toPosY_0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newSymbol.getChildByName("bo").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
          }).delay(1.0).to(0.2, {
            position: v3(newSymbol.position.x, toPosY_1)
          }, {
            easing: "cubicIn"
          }).removeSelf().start();
        };
        _proto.showFreeWildEffect = function showFreeWildEffect(isShow) {
          var _this15 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          var Node_symbolRoot = this.Node_startEffect.getChildByName("Node_symbolRoot");
          if (!isShow) {
            Tween.stopAllByTarget(this.Node_startEffect);
            Node_symbolRoot.removeAllChildren();
            this.Node_startEffect.active = false;
            return;
          }
          this.Node_startEffect.active = true;
          tween(this.Node_startEffect).delay(0.5).repeat(3, tween(this.Node_startEffect).call(function () {
            var counts = Math.random() * 3 + 2;
            for (var i = 0; i < counts; i++) {
              _this15.addWildSymbol();
            }
          }).delay(1.5)).call(function () {
            _this15.isFirstFree = false;
            Node_symbolRoot.removeAllChildren();
            _this15.Node_startEffect.active = false;
          }).start();
        };
        _proto.doEndFree = function doEndFree() {
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          var Label_totalWin = Node_end.getChildByName("Label_totalWin");
          Label_totalWin.getComponent(Label).string = "";
          var Label_freeTimes = Node_end.getChildByName("Label_freeTimes");
          Label_freeTimes.getComponent(Label).string = "";
          var endSpine = Node_end.getComponent(sp.Skeleton);
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);
          this.scheduleOnce(function () {
            //            //免费总得分
            Label_totalWin.scale = v3(1.0, 1.0, 1);
            SlotDjUtils.instance.updateLabelAddNf(Label_totalWin.getComponent(Label), SlotDjModel.instance.totalFreeWin);
            Label_freeTimes.getComponent(Label).string = "" + SlotDjModel.instance.totalFreeTimesBack;
          }, 0.5);
          tween(Node_end.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(this.setEndFree, 0.2);
          AudioManager.instance.pauseMusic();
          SlotDjUtils.instance.playSound(eSound.free_winEffect, true);
          this.Node_helpTip.active = false;
          this.Node_winTip.active = true;
          var com_SlotDj_winTip = this.Node_winTip.getComponent(SlotDj_winTip);
          com_SlotDj_winTip.doShow(SlotDjModel.instance.totalFreeWin, true);

          //        //2.0秒后返回正常
          this.scheduleOnce(this.hideFree, 8);
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(SlotDjModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            SlotDjUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                if (SlotDjModel.instance.totalFreeTimes > 0) {
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
                SlotDjUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
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
        return SlotDjGameView;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "SlotDj_symbolList", [_dec8], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_add", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_redus", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipEffect", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_symRate", [_dec21], {
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
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_roomBg", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_rateBg", [_dec27], {
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
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec29], {
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
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_aniJi", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_startEffect", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigWin", [_dec35], {
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

System.register("chunks:///_virtual/SlotDjModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './SlotDjDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _createForOfIteratorHelperLoose, cclegacy, GameDef, eRunStatus, eSymbol;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5c2b8XT1kxCF6FjR/Yl5PIn", "SlotDjModel", undefined);
      var SlotDjModel = exports('SlotDjModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SlotDjModel, _GameDef$BaseSington);
        function SlotDjModel() {
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
          _this._betResult = null;
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
        var _proto = SlotDjModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _createClass(SlotDjModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(result) {
            //        // //test
            //        // result.special = true; //Math.random() > 0.98; //Math.random() > 0.98; //true; //

            this._betResult = {
              openResult: [],
              freeCount: result.freeCount,
              freePrize: result.freePrize,
              totalPrizeAmount: result.totalPrizeAmount
            };
            for (var i = 0; i < result.openResult.length; i++) {
              var openResult = result.openResult[i];
              var resultTemp = {
                openNums: [],
                prizeInfo: openResult.prizeInfo,
                roundOdds: openResult.roundOdds,
                prizeAmount: 0
              };

              //            //itemInfo
              for (var j = 0; j < openResult.openNums.length; j++) {
                var sym = openResult.openNums[j];
                resultTemp.openNums[j] = {
                  Sym: sym >= eSymbol.WILD ? eSymbol.WILD : sym,
                  IsReward: false,
                  wildCount: sym >= eSymbol.WILD ? sym - eSymbol.WILD + 1 : 0
                };
              }

              //            //prizeAmount
              for (var _iterator = _createForOfIteratorHelperLoose(openResult.prizeInfo), _step; !(_step = _iterator()).done;) {
                var prizeInfo = _step.value;
                resultTemp.prizeAmount += prizeInfo.prizeAmount;
                for (var _iterator2 = _createForOfIteratorHelperLoose(prizeInfo.prizeIdx), _step2; !(_step2 = _iterator2()).done;) {
                  var prizeIdx = _step2.value;
                  resultTemp.openNums[prizeIdx].IsReward = true;
                }
              }
              this._betResult.openResult.push(resultTemp);
            }
            gts.Debug.Log("==this._betResult=this._betResult=" + JSON.stringify(this._betResult));
          }
        }]);
        return SlotDjModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotDjScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './SlotDjDef.ts', './SlotDjUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, SlotDjUtils, Common;
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
      SlotDjUtils = module.SlotDjUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c82e6Wpy5RAvrqBI0TNJnRe", "SlotDjScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotDjScene = exports('default', (_dec = ccclass("SlotDjScene"), _dec2 = menu("game/SlotDjGame/SlotDjScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotDjScene, _Component);
        function SlotDjScene() {
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
        var _proto = SlotDjScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          SlotDjUtils.instance.bundle = assetManager.getBundle(cBundle);
          SlotDjUtils.instance.preLoad();
          SlotDjUtils.instance.playBgMusic();
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
            //            // if (!SlotDjUtils.instance.isChangeOrientation()) {
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
            SlotDjUtils.instance.bundle.load("prefab/SlotDjGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (SlotDjUtils.instance.isChangeOrientation()) {
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
        return SlotDjScene;
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

System.register("chunks:///_virtual/SlotDjUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './SlotDjDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, UIOpacity, Tween, tween, Node, Label, v3, sys, SpriteFrame, sp, Font, GameDef, AudioManager, eSound, eSymbol, Common;
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
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Node = module.Node;
      Label = module.Label;
      v3 = module.v3;
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
      cclegacy._RF.push({}, "47fadfdBOlHR6s2RvQJ5710", "SlotDjUtils", undefined);
      var symbol_nomal_icon = ["h_cockdark",
      //紫鸡
      "h_cockwhite",
      //白鸡
      "h_cash",
      //钱
      "h_hand",
      //手
      "h_claw",
      ///鸡爪
      "h_pouch",
      //鞋
      "l_a",
      //A-8
      "l_k",
      //K-9
      "l_q",
      //Q-10
      "l_j",
      //J-11
      "l_10",
      //TEN-12
      "l_9",
      //TEN-12
      "s_scatter",
      //SCATTER-0
      "s_wild" //WILD-1
      ];

      var symbol_aniDataName = ["h_cockdark_atlas_symbols", "h_cockwhite_atlas_symbols", "h_cash_atlas_symbols", "h_hand_atlas_symbols", "h_claw_atlas_symbols", "h_pouch_atlas_symbols", "l_a_atlas_symbols", "l_k_atlas_symbols", "l_q_atlas_symbols", "l_j_atlas_symbols", "l_10_atlas_symbols", "l_9_atlas_symbols", "s_scatter_atlas_specials", "s_wild_atlas_specials"];
      var SlotDjUtils = exports('SlotDjUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(SlotDjUtils, _GameDef$BaseSington);
        function SlotDjUtils() {
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
        var _proto = SlotDjUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/SlotDjGameView");
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
                  arrHLoad.push(this.asyncLoad("font/fs", Font, function (err, font) {
                    if (!err) {
                      _this4.arrFontData[font.name] = font;
                    }
                  }));
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
            if (!err && audioClip) {
              AudioManager.instance.playOneShot(audioClip);
            }
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

          //        // EmpireUtils.instance.playSound(EmpireDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // EmpireUtils.instance.stopSound(EmpireDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "k";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}k` : `${this.numberFormat(curWin / 1000, 2.0)}k`;
          })).delay(5.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
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
          SlotDjUtils.instance.playSound(eSound.numAdd);
          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              SlotDjUtils.instance.stopSound(eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "k" : _this8.numberFormat(curWin / 1000, 2.0) + "k";
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
          SlotDjUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              SlotDjUtils.instance.stopSound(eSound.numAdd);
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

        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, length) {
          if (this.arrIconSpriteFrame) {
            var symbol = symbol_nomal_icon[symbolIndex - 1];
            //            // if (symbolIndex == SlotDjDef.eSymbol.SCATTER && length > 1) {
            //            //     symbol = symbol_nomal_icon[symbol_nomal_icon.length - 1];
            //            // }
            return this.arrIconSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getItemSymbolIconBox = function getItemSymbolIconBox(symbolIndex, length, rim) {
          var strName = "";
          //        // if (symbolIndex == SlotDjDef.eSymbol.WILD) {
          //        //     strName = "s_wild_blank";
          //        // } else {
          //        //     strName = "l_block";
          //        // }

          if (symbolIndex != eSymbol.WILD) {
            strName = "l_block";
          }
          if (this.arrIconBoxSpriteFrame && strName.length > 0) {
            var ret = this.arrIconBoxSpriteFrame[strName];
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
          var symbol = rim == 1 ? "" : "frame";
          if (this.arrIconFrameSpriteFrame) {
            return this.arrIconFrameSpriteFrame[symbol];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, length, isIdle, isHorizontal) {
          //        // let strAni = null;
          //        // switch (symbolIndex) {
          //        //     case SlotDjDef.eSymbol.SCATTER: {
          //        //         strAni = length == 1 ? "idle1" : "idle2";
          //        //         break;
          //        //     }
          //        //     case SlotDjDef.eSymbol.WILD: {
          //        //         strAni = `lv${length}_idle`;
          //        //         break;
          //        //     }
          //        //     default: {
          //        //         strAni = symbol_aniName[symbolIndex - SlotDjDef.eSymbol.CAT];
          //        //         break;
          //        //     }
          //        // }
          //        // if (!strAni) {
          //        //     return null;
          //        // }
          //        // gts.Debug.Log("==getSymbolAniName=strAni=" + strAni);
          return "spawn";
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
          var strAni = symbol_aniDataName[index - 1];
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
        _proto.getInitList = function getInitList() {
          var firstList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          var retList = [];
          var symList = [];
          for (var i = 0; i < 4; i++) {
            var _index = Math.floor(Math.random() * firstList.length);
            symList.push({
              Sym: firstList[_index],
              IsReward: false,
              wildCount: 0
            });
            firstList.splice(_index, 1);
          }
          retList.push(symList);
          for (var _i2 = 1; _i2 < 6; _i2++) {
            var maxIndex = _i2 == 5 ? 4 : 5;
            symList = [];
            for (var _i3 = 0; _i3 < maxIndex; _i3++) {
              symList.push({
                Sym: firstList[Math.floor(Math.random() * firstList.length)],
                IsReward: false,
                wildCount: 0
              });
            }
            retList.push(symList);
          }
          gts.Debug.Log("==retList=retList=" + JSON.stringify(retList));
          return retList;
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        _proto.checkScatter = function checkScatter(openResult) {
          var iHuCounts = 0;
          var sliceInfo = [[0, 4], [4, 9], [9, 14], [14, 19], [19, 24], [24, 28]];
          for (var iCol = 0; iCol < sliceInfo.length - 1; iCol++) {
            var info = sliceInfo[iCol];
            var AllPosMsg = openResult.openNums.slice(info[0], info[1]);
            for (var iRow = 0; iRow < AllPosMsg.length; iRow++) {
              var symbolInfo = AllPosMsg[iRow];
              if (symbolInfo && symbolInfo.Sym == eSymbol.SCATTER) {
                iHuCounts++;
                if (iHuCounts > 1) {
                  return iCol + 1;
                }
              }
            }
          }
          return 0;
        };
        return SlotDjUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/SlotDjGame', 'chunks:///_virtual/SlotDjGame'); 
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