System.register("chunks:///_virtual/Rabbit_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "704d3TTcEFKDYPY9JVlnrdt", "Rabbit_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Rabbit_btnEffect = exports('default', (_dec = ccclass("RabbitBtnEffect"), _dec2 = menu("game/RabbitGame/Rabbit_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_btnEffect, _Component);
        function Rabbit_btnEffect() {
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
        var _proto = Rabbit_btnEffect.prototype;
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

        _createClass(Rabbit_btnEffect, [{
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

        return Rabbit_btnEffect;
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

System.register("chunks:///_virtual/Rabbit_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, UITransform, tween, v3, Component, RabbitModel, eRunStatus;
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
    }, function (module) {
      RabbitModel = module.RabbitModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9be83DUHhpJtqstmrF7QCLk", "Rabbit_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_helpTip = exports('default', (_dec = ccclass("RabbitHelpTip"), _dec2 = menu("game/RabbitGame/Rabbit_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_helpTip, _Component);
        function Rabbit_helpTip() {
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
        var _proto = Rabbit_helpTip.prototype;
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
          if (RabbitModel.instance.freeStatus == eRunStatus.NONE && this.curIndex == 0) {
            this.curIndex = 1;
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
              _this2.doShow();
            }).start();
          } else {
            this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
            tween(this.Sprite_tip.node).delay(1.0).call(function () {
              _this2.doShow();
            }).start();
          }
        };
        return Rabbit_helpTip;
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

System.register("chunks:///_virtual/Rabbit_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitCtrl.ts', './RabbitDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, RabbitCtrl, eProto, GameDef, Common;
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
      RabbitCtrl = module.RabbitCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ba777ewEOBJ6auTkp1VTAgi", "Rabbit_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Rabbit_history = exports('default', (_dec = ccclass("RabbitHistory"), _dec2 = menu("game/RabbitGame/Rabbit_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Rabbit_history, _GameDef$BaseView);
        function Rabbit_history() {
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
        var _proto = Rabbit_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, RabbitCtrl.instance);
          RabbitCtrl.instance.reqHistory();
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
          RabbitCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          RabbitCtrl.instance.reqHistory(start);
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
        return Rabbit_history;
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

System.register("chunks:///_virtual/Rabbit_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './RabbitUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, RabbitUtils, Common;
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
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c69784JtbJJzJRfpkn8q/l8", "Rabbit_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_historyItem = exports('default', (_dec = ccclass("RabbitHistoryItem"), _dec2 = menu("game/RabbitGame/Rabbit_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_historyItem, _Component);
        function Rabbit_historyItem() {
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
        var _proto = Rabbit_historyItem.prototype;
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
          this.Label_bet.string = RabbitUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + RabbitUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + RabbitUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Rabbit_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Rabbit_historyItem;
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

System.register("chunks:///_virtual/Rabbit_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitCtrl.ts', './RabbitDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, RabbitCtrl, eProto, GameDef, Common;
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
      RabbitCtrl = module.RabbitCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2155dugksJGEqnpN5h2VFYZ", "Rabbit_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Rabbit_rank = exports('default', (_dec = ccclass("RabbitRank"), _dec2 = menu("game/RabbitGame/Rabbit_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Rabbit_rank, _GameDef$BaseView);
        function Rabbit_rank() {
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
        var _proto = Rabbit_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, RabbitCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          RabbitCtrl.instance.reqRank();
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
        return Rabbit_rank;
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

System.register("chunks:///_virtual/Rabbit_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './RabbitUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, RabbitUtils;
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
      RabbitUtils = module.RabbitUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "a47f2N3+wNCL5dfAgqRqQpn", "Rabbit_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_rankItem = exports('default', (_dec = ccclass("RabbitRankItem"), _dec2 = menu("game/RabbitGame/Rabbit_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_rankItem, _Component);
        function Rabbit_rankItem() {
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
        var _proto = Rabbit_rankItem.prototype;
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
          this.Label_win.string = RabbitUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Rabbit_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Rabbit_rankItem;
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

System.register("chunks:///_virtual/Rabbit_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts', './RabbitUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, RabbitModel, eAutoRateType, eConstDef, eEvent, RabbitUtils, EventManager;
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
      RabbitModel = module.RabbitModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "dd77fhw0CFBu77aC34wQAgI", "Rabbit_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_ScrollView = exports('default', (_dec = ccclass("RabbitScrollView"), _dec2 = menu("game/RabbitGame/Rabbit_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_ScrollView, _Component);
        function Rabbit_ScrollView() {
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
        var _proto = Rabbit_ScrollView.prototype;
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
                this._curIndex = RabbitModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = RabbitModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = RabbitModel.instance._curIndex_baseBet;
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
                var num = index == 0 ? eConstDef.CBaseBet_0 : index == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2;
                var strNum = RabbitUtils.instance.numberFormat(num, 2);
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
                var _strNum = RabbitUtils.instance.numberFormat((baseScore == 0 ? eConstDef.CBaseBet_0 : baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (baseRate + 1) * eConstDef.CBaseRate, 2);
                gts.Debug.LogWarr("getDefaultValue=baseScore=" + baseScore + "==baseRate=" + (baseRate + 1) + "==strNum=" + _strNum + "=");
                //                // (baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);
                //                // let strNum = Math.floor((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20) + "K";
                return _strNum + "K";
              }
          }
        };
        return Rabbit_ScrollView;
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

System.register("chunks:///_virtual/Rabbit_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts', './ViewManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, RabbitModel, eEvent, ViewManager, EventManager, Common;
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
      RabbitModel = module.RabbitModel;
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
      cclegacy._RF.push({}, "1547brQCVNFx7qcE9B7m2DA", "Rabbit_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Rabbit_setAuto = exports('default', (_dec = ccclass("RabbitSetAuto"), _dec2 = menu("game/RabbitGame/Rabbit_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_setAuto, _Component);
        function Rabbit_setAuto() {
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
        var _proto = Rabbit_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
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
                  RabbitModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[RabbitModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = RabbitModel.instance.curBet * 1000 * times;
                  //                    // if (RabbitModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(RabbitModel.instance.curBalance / (RabbitModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(RabbitDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !RabbitUtils.instance.isChangeOrientation());
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
        return Rabbit_setAuto;
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

System.register("chunks:///_virtual/Rabbit_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts', './ViewManager.ts', './EventManager.ts', './RabbitUtils.ts', './Rabbit_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, RabbitModel, eEvent, eAutoRateType, ViewManager, EventManager, RabbitUtils, Rabbit_ScrollView, Common;
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
      RabbitModel = module.RabbitModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Rabbit_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "0664bt+jCVNOrCYnp7dwA3x", "Rabbit_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Rabbit_setBase = exports('default', (_dec = ccclass("RabbitSetBase"), _dec2 = menu("game/RabbitGame/Rabbit_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_setBase, _Component);
        function Rabbit_setBase() {
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
        var _proto = Rabbit_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(RabbitModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (RabbitModel.instance.curTotalWin > 0) {
            this.Label_win.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = RabbitModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = RabbitModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = RabbitModel.instance._curIndex_baseBet;
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
            if (RabbitModel.instance.curTotalWin > 0) {
              this.Label_win.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = RabbitModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            RabbitModel.instance.curTotalWin += disWin;
            if (RabbitModel.instance.curTotalWin > destWin) {
              RabbitModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Rabbit_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Rabbit_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Rabbit_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Rabbit_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Rabbit_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Rabbit_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Rabbit_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                RabbitModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                RabbitModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                RabbitModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Rabbit_setBase;
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

System.register("chunks:///_virtual/Rabbit_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import * as cc from "cc";
      cclegacy._RF.push({}, "acbd2+0JGFFjoeph/I7FgqD", "Rabbit_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rabbit_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts', './RabbitUtils.ts', './Rabbit_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, RabbitModel, eRunStatus, eSymbol, eConstDef, eSound, RabbitUtils, Rabbit_symbolItem;
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
      RabbitModel = module.RabbitModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Rabbit_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "79511dmJJlB6p4mlwx8HhGu", "Rabbit_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_symbol = exports('default', (_dec = ccclass("RabbitSymbol"), _dec2 = menu("game/RabbitGame/Rabbit_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_symbol, _Component);
        function Rabbit_symbol() {
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
          //    ///
          _this.itemTag = 0;
          _this._runStatus = eRunStatus.NONE;
          return _this;
        }
        var _proto = Rabbit_symbol.prototype;
        //    ///////////////////
        _proto.onLoad = function onLoad() {
          this._iCol = parseInt(this.node.name.replace("Node_symbol_", ""));
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
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
            var index = this._iCol + i * 3;
            if (index > 8) {
              index = 9;
            }
            itemInfo = openResult.openNums[index];
            if (itemInfo == null) {
              gts.Debug.Log("===itemInfo==null===");
            }
            _resultInfoList.push(itemInfo);
            _curLength += itemInfo.Length;
          }
          _resultInfoList = _resultInfoList.reverse();
          gts.Debug.Log("==getResult==" + JSON.stringify(_resultInfoList));
          return _resultInfoList;
        };
        _proto.addNewItem = function addNewItem(itemInfo, toLength) {
          var leftLength = this.maxIndex - this._curLength;
          if (leftLength <= 0) {
            return null;
          }
          if (!itemInfo) {
            itemInfo = {
              bonusSymbol: Math.floor(Math.random() * eSymbol.Radish) + 1,
              //RabbitDef.eSymbol.A,
              amount: 0,
              IsReward: false
            };
            if (RabbitModel.instance.freeStatus == eRunStatus.START) {
              itemInfo.bonusSymbol = eSymbol.Blank;
            } else if (RabbitModel.instance.freeStatus == eRunStatus.RUNNING) {
              var randSymbol = Math.floor(Math.random() * 10);
              itemInfo.bonusSymbol = randSymbol > 5 ? eSymbol.Special : eSymbol.Blank; //RabbitDef.eSymbol.A
              itemInfo.amount = Math.random() * 5000 + 1000;

              //                // gts.Debug.LogWarr("==randSymbol==" + randSymbol + "==itemInfo==" + JSON.stringify(itemInfo));
            }
          }

          var newItem = instantiate(this.Node_itemTemp);
          this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          var cSymbolStartY = this.maxIndex % 2 == 0 ? -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) : -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) - eConstDef.cSymbolH / 2;
          var offsetY = (toLength + 0.5) * eConstDef.cSymbolH;
          newItem.setPosition(this.node.getPosition().x, cSymbolStartY + offsetY);

          //        //
          var com = newItem.getComponent(Rabbit_symbolItem);
          com.initItem(itemInfo, this._iCol, this.maxIndex);
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
              RabbitModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(RabbitModel.instance.betResult.Res[0]);

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
                              RabbitUtils.instance.playOneShot(eSound.drop_1);
                            }, 0.15);
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol2 = _step2.value;
                              arrPro.push(_symbol2.doStop());
                            }
                            _context.next = 5;
                            return Promise.all(arrPro);
                          case 5:
                            _this3.unschedule(scheduleUpdate);
                            resolve();
                          case 7:
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
                offset = disLength * eConstDef.cSymbolH;
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
        _proto.doShowResultEffect = function doShowResultEffect(prizeIdx, isAll) {
          if (isAll === void 0) {
            isAll = false;
          }
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            var symIndex = this.maxIndex - Math.floor(prizeIdx / 3) - 1;
            if (!isAll) {
              symbol.doShowResultEffect(symIndex == i);
            } else if (symIndex == i) {
              symbol.doShowResultEffect(true);
              break;
            }
          }
        };
        _proto.doEffect = function doEffect() {
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            var delayTimes = symbol.itemInfo.IsReward ? this._iCol * 0.1 : 0;
            arrPro.push(symbol.doEffect(delayTimes));
            //            // arrPro.push(symbol.doEffect(Rabbit_symbol.rewardCount * 0.15));

            if (symbol.itemInfo.IsReward) {
              Rabbit_symbol.rewardCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doGoldCollect = function doGoldCollect(collectType) {
          if (collectType === void 0) {
            collectType = 0;
          }
          var arrPro = [];
          for (var i = 0; i < this._symbolList.length; i++) {
            var symbol = this._symbolList[i];
            if (symbol.itemInfo.bonusSymbol == eSymbol.Special) {
              arrPro.push(symbol.doGoldCollect(Rabbit_symbol.goldCount * 0.05, collectType));
              Rabbit_symbol.goldCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Rabbit_symbol.goldCount = 0;
                  Rabbit_symbol.rewardCount = 0;

                //        // let arrPro = [];
                //        // for (const symbol of this._symbolList) {
                //        //     if (symbol.itemInfo.IsReward) {
                //        //         arrPro.push(symbol.doClear());
                //        //     }
                //        // }

                //        // return Promise.all(arrPro);
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function doClear() {
            return _doClear.apply(this, arguments);
          }
          return doClear;
        }();
        return Rabbit_symbol;
      }(Component), _class3.rewardCount = 0, _class3.goldCount = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxIndex", [property], {
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

System.register("chunks:///_virtual/Rabbit_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "d929bXMlfVMfKZIhxMU75Oi", "Rabbit_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_symbolEffectRoot = exports('default', (_dec = ccclass("RabbitSymbolEffectRoot"), _dec2 = menu("game/RabbitGame/Rabbit_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_symbolEffectRoot, _Component);
        function Rabbit_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Rabbit_symbolEffectRoot.prototype;
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
        return Rabbit_symbolEffectRoot;
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

System.register("chunks:///_virtual/Rabbit_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitDef.ts', './Rabbit_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, tween, v3, instantiate, UITransform, Sprite, Label, sp, UIOpacity, Component, eSymbol, Rabbit_symbolItem;
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
      eSymbol = module.eSymbol;
    }, function (module) {
      Rabbit_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "97bf92pnGVHkpIXr3Zi4E4o", "Rabbit_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eRate = [200, 100, 50, 10, 5, 3, 2];
      var Rabbit_symbolInfo = exports('default', (_dec = ccclass("RabbitSymbolInfo"), _dec2 = menu("game/RabbitGame/Rabbit_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_symbolInfo, _Component);
        function Rabbit_symbolInfo() {
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
        var _proto = Rabbit_symbolInfo.prototype;
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
          if (this.Node_info.active || symbol.bonusSymbol == eSymbol.Blank) {
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
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_item.children), _step2; !(_step2 = _iterator2()).done;) {
            var _childNode = _step2.value;
            _childNode.name == "Node_symbol" ? _childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          newSymbol.scale = v3(symbol.bonusSymbol == eSymbol.Special ? 1.35 : 0.7, symbol.bonusSymbol == eSymbol.Special ? 1.35 : 0.7, 1);
          var symbolItem = this.Node_item.getComponent(Rabbit_symbolItem);
          symbolItem.itemInfo = symbol;
          switch (symbol.bonusSymbol) {
            case eSymbol.Special:
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
                var rate = symbol.bonusSymbol == eSymbol.WILD ? eRate[0] : eRate[symbol.bonusSymbol];
                var Label_rate = this.Node_icon.getChildByName("Label_rate_0").getComponent(Label);
                Label_rate.string = "" + rate;
                break;
              }
          }
          var itemSpine = newSymbol.getComponent(sp.Skeleton);
          if (itemSpine) {
            itemSpine.setAnimation(0, "spawn", false);
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
        return Rabbit_symbolInfo;
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

System.register("chunks:///_virtual/Rabbit_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitModel.ts', './RabbitDef.ts', './EventManager.ts', './RabbitUtils.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, sp, Sprite, Label, UITransform, tween, Node, v2, Vec2, UIOpacity, instantiate, Component, RabbitModel, eConstDef, eSymbol, eRunStatus, eZindex, eEvent, eSound, EventManager, RabbitUtils;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      sp = module.sp;
      Sprite = module.Sprite;
      Label = module.Label;
      UITransform = module.UITransform;
      tween = module.tween;
      Node = module.Node;
      v2 = module.v2;
      Vec2 = module.Vec2;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      RabbitModel = module.RabbitModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "17921Gq3sFKTpfEyPWmLyDP", "Rabbit_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_symbolItem = exports('default', (_dec = ccclass("RabbitSymbolItem"), _dec2 = menu("game/RabbitGame/Rabbit_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_symbolItem, _Component);
        function Rabbit_symbolItem() {
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
          _this.Node_symbolAniRoot = null;
          _this.Node_symbol = null;
          _this._spineEffect_kuang = null;
          _this.isBreak = false;
          return _this;
        }
        var _proto = Rabbit_symbolItem.prototype;
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

        _proto.initItem = function initItem(info, iCol, maxIndex) {
          if (iCol === void 0) {
            iCol = 0;
          }
          if (maxIndex === void 0) {
            maxIndex = 3;
          }
          if (iCol > -1 && maxIndex > 0) {
            this._iCol = iCol;
            this.cSymbolStartY = maxIndex % 2 == 0 ? -eConstDef.cSymbolH * Math.floor(maxIndex / 2) : -eConstDef.cSymbolH * Math.floor(maxIndex / 2) - eConstDef.cSymbolH / 2;
            var Node_center = this.node.parent.parent.parent; //Node_center
            this.Node_symbolAniRoot = Node_center.getChildByName("Node_effectRoot");
          }
          this.Node_symbol = this.node.getChildByName("Node_symbol");
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
          isSpine = Sym <= eSymbol.WILD && Sym != eSymbol.Blank ? true : false;
          var nomalScale = this.itemInfo.bonusSymbol == eSymbol.Special ? 1.35 : 0.6;
          var toScale = this.itemInfo.bonusSymbol == eSymbol.Special ? 1.45 : 0.7;
          this.Node_symbol.scale = v3(!isIdle ? toScale : nomalScale, !isIdle ? toScale : nomalScale, 1);
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = RabbitUtils.instance.getItemSymbolIcon(Sym);
              var itemSprite = _this2.Node_symbol.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this2.Node_symbol.addComponent(Sprite);
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
              var itemSymbol = RabbitUtils.instance.getSkeletonData(Sym);
              var itemSpine = _this2.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this2.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = false;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              if (Sym == eSymbol.WILD && !isIdle) {
                itemSpine.setAnimation(0, RabbitUtils.instance.getSymbolAniName(Sym, isIdle), false);
                itemSpine.addAnimation(0, "win_idle", true);
              } else {
                itemSpine.setAnimation(0, RabbitUtils.instance.getSymbolAniName(Sym, isIdle), isIdle && Sym != eSymbol.WILD ? false : true);
              }
            });
          }

          //        //tag update
          //        // this.Node_symbol.removeAllChildren();
          switch (Sym) {
            case eSymbol.Special:
              {
                var newNode = this.Node_symbol.getChildByName("amount");
                newNode.active = true;
                var label = newNode.getComponent(Label);
                var rate = this.itemInfo.amount / (RabbitModel.instance.curBet * 1000);
                if (rate <= 5) {
                  label.font = RabbitUtils.instance.getFontData("number2");
                } else if (rate <= 50) {
                  label.font = RabbitUtils.instance.getFontData("number4");
                } else {
                  label.font = RabbitUtils.instance.getFontData("number3");
                }
                label.string = RabbitUtils.instance.numberFormat(this.itemInfo.amount / 1000, 2) + "K";
                break;
              }
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
            case eSymbol.WILD:
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
          if (RabbitModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
          EventManager.instance.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          this.node.setPosition(this.node.position.x, this.node.position.y - offset);
          var posSide = -208 - 52 - 0.5 * 104;
          if (this.node.getPosition().y <= posSide) {
            ret = false;
          }
          return ret;
        };
        _proto.doStop = function doStop(offset) {
          var _this3 = this;
          if (offset === void 0) {
            offset = 0;
          }
          return new Promise(function (resolve, reject) {
            var pos_0 = _this3.node.getPosition().y + 10 + offset;
            var pos_1 = _this3.node.getPosition().y + offset;
            tween(_this3.node).to(0.15, {
              position: v3(_this3.node.position.x, pos_0)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this3.node.position.x, pos_1)
            }, {
              easing: "cubicIn"
            }).call(function () {
              _this3.updateIcon(_this3.itemInfo.bonusSymbol, true);
              _this3.updateZIndex(eRunStatus.STOP);
              resolve();
            }).start();
          });
        }
        //    //moveType:0-正常240， 1：-240（免费模式-本轮没中奖 但有猫
        ;

        _proto.doGoldMoveTo = function doGoldMoveTo(collectType) {
          var _this4 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            if (collectType == 0) {
              var newNode = new Node();
              newNode.addComponent(UITransform);
              newNode.getComponent(UITransform).priority = 1000;
              _this4.Node_symbol.addChild(newNode);
              var itemSpine = newNode.addComponent(sp.Skeleton);
              itemSpine.premultipliedAlpha = false;
              itemSpine.useTint = true;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = RabbitUtils.instance.getSkeletonData("kuang_effect");
              RabbitUtils.instance.playOneShot(eSound.luckFly);
              itemSpine.setAnimation(0, "fire", false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                newNode.destroyFromParent();

                //                    //添加光点
                var flyNode = new Node();
                var wPos = _this4.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var nPos = _this4.Node_symbolAniRoot.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                flyNode.position = nPos;
                _this4.Node_symbolAniRoot.addChild(flyNode);
                var cSpine = flyNode.addComponent(sp.Skeleton);
                cSpine.premultipliedAlpha = false;
                cSpine.useTint = true;
                cSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                cSpine.skeletonData = RabbitUtils.instance.getSkeletonData("fly_lizi");
                cSpine.setAnimation(0, "idle", true);

                //                    //doMove
                var startPos = v2(nPos.x, nPos.y);
                var endPos = collectType == 0 ? v2(-152, 477) : v2(0, -360);
                var duration = Vec2.distance(startPos, endPos) / 2500;
                //                    // duration = collectType == 1 ? (duration < 0.25 ? 0.25 : duration) : duration;
                //                    // duration = 1;
                tween(flyNode).to(0.1, {
                  scale: v3(2, 2, 1)
                }).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -10 : 10), (startPos.y + endPos.y) * 0.5), endPos).call(function () {
                  RabbitUtils.instance.playOneShot(eSound.luckReach);
                  EventManager.instance.emit(eEvent.onGoldCollect, collectType);
                  tween(flyNode.getComponent(UIOpacity)).to(0.2, {
                    opacity: 0
                  }).start();
                }).delay(0.7).call(function () {
                  flyNode.destroyFromParent();
                  resolve();
                }).start();
              });
            } else {
              var Node_root = _this4.node.parent.parent.parent.parent; //Node_root
              var amount = _this4.Node_symbol.getChildByName("amount");
              var _newNode = instantiate(amount);
              var wPos = amount.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              var nPos = Node_root.getComponent(UITransform).convertToNodeSpaceAR(wPos);
              _newNode.position = nPos;
              _newNode.scale = v3(1.45, 1.45, 1);
              Node_root.addChild(_newNode);
              amount.getComponent(UIOpacity).opacity = 150;

              //                //doMove
              var startPos = v2(nPos.x, nPos.y);
              var endPos = collectType == 0 ? v2(-152, 477) : v2(0, -360);
              var duration = Vec2.distance(startPos, endPos) / 800;
              //                // duration = collectType == 1 ? (duration < 0.25 ? 0.25 : duration) : duration;
              //                // duration = 1;
              tween(_newNode).delay(1.0).to(0.1, {
                scale: v3(2, 2, 1)
              }).call(function () {
                tween(_newNode.getComponent(UIOpacity)).to(duration, {
                  opacity: 80
                }).start();
              }).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -100 : 100), (startPos.y + endPos.y) * 0.5), endPos).call(function () {
                EventManager.instance.emit(eEvent.onGoldCollect, collectType, _this4.itemInfo.amount);
                tween(_newNode.getComponent(UIOpacity)).to(0.2, {
                  opacity: 0
                }).start();
              }).delay(0.7).call(function () {
                _newNode.destroyFromParent();
                resolve();
              }).start();
            }
          });
        };
        _proto.doGoldCollect = function doGoldCollect(delay, collectType) {
          var _this5 = this;
          if (collectType === void 0) {
            collectType = 0;
          }
          return new Promise(function (resolve, reject) {
            _this5.scheduleOnce(function () {
              _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return _this5.doGoldMoveTo(collectType);
                    case 2:
                      resolve();
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }))();
            }, delay);
          });
        };
        _proto.addEffectKuang = function addEffectKuang() {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            var newNode = new Node();
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            itemSpine.useTint = true;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = RabbitUtils.instance.getSkeletonData("kuang_effect");
            _this6.node.addChild(newNode);
            if (_this6.itemInfo.bonusSymbol == eSymbol.Special && RabbitModel.instance.freeStatus != eRunStatus.NONE) {
              newNode.getComponent(UITransform).priority = 5;
              _this6.Node_symbol.getComponent(UITransform).priority = 10;
              newNode.scale = v3(1.05, 1.05, 1);
              itemSpine.setAnimation(0, "normal", false);
              itemSpine.addAnimation(0, "free", true);
            } else {
              newNode.getComponent(UITransform).priority = 5;
              _this6.Node_symbol.getComponent(UITransform).priority = 10;
              newNode.scale = v3(1.1, 1.1, 1);
              itemSpine.setAnimation(0, "normal", true);
            }
            _this6._spineEffect_kuang = itemSpine;
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              resolve();
            });
          });
        };
        _proto.doShowResultEffect = function doShowResultEffect(isShow) {
          var _this7 = this;
          if (this._spineEffect_kuang) {
            this.scheduleOnce(function () {
              if (_this7.itemInfo.bonusSymbol == eSymbol.Special && RabbitModel.instance.freeStatus != eRunStatus.NONE) {
                _this7._spineEffect_kuang.setAnimation(0, "normal", false);
                _this7._spineEffect_kuang.addAnimation(0, "free", true);
              } else {
                _this7._spineEffect_kuang.setAnimation(0, "normal", true);
              }
              _this7._spineEffect_kuang.node.active = isShow;
              _this7.node.getComponent(UITransform).priority = isShow ? eZindex.iconWin : eZindex.icon;
              var nomalScale = _this7.itemInfo.bonusSymbol == eSymbol.Special ? 1.35 : 0.6;
              var toScale = _this7.itemInfo.bonusSymbol == eSymbol.Special ? 1.45 : 0.7;
              var delay = isShow ? 0.1 : 0;
              tween(_this7.Node_symbol).delay(delay).to(0.1, {
                scale: v3(isShow ? toScale : nomalScale, isShow ? toScale : nomalScale, 1)
              }).call(function () {
                var symAni = _this7.Node_symbol.getComponent(sp.Skeleton);
                if (symAni) {
                  symAni.paused = !isShow;
                }
              }).start();
            }, this._iCol * 0.1);
            this.node.getComponent(UITransform).priority = eZindex.icon;
          }
        };
        _proto.doEffect = function doEffect(delay) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            if (_this8.itemInfo.IsReward) {
              _this8.scheduleOnce(function () {
                _this8.addEffectKuang();
                _this8.scheduleOnce(function () {
                  _this8.updateSymbol(true, false);
                  resolve();
                }, 0.075);
              }, 0.0 + delay);
            } else {
              resolve();
            }
          });
        };
        _proto.doBindToUp = function doBindToUp() {
          switch (this.itemInfo.bonusSymbol) {
            case eSymbol.WILD:
              {
                RabbitUtils.instance.playOneShot(eSound.symWildSpawn);
                break;
              }
          }
        };
        return Rabbit_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Rabbit_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RabbitUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, RabbitUtils;
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
      RabbitUtils = module.RabbitUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d14adHalwBCy4kfnld7YNpV", "Rabbit_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Rabbit_winTip = exports('default', (_dec = ccclass("RabbitWinTip"), _dec2 = menu("game/RabbitGame/Rabbit_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Rabbit_winTip, _Component);
        function Rabbit_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Rabbit_winTip.prototype;
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
            _this2.Label_win.string = RabbitUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
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
            RabbitUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${RabbitUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
            RabbitUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Rabbit_winTip;
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

System.register("chunks:///_virtual/RabbitCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './RabbitModel.ts', './I18n.ts', './ViewManager.ts', './RabbitDef.ts', './RabbitUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, UserKey, DataManager, EventManager, NetManager, RabbitModel, i18n, ViewManager, eProto, eEvent, eRunStatus, RabbitUtils, Common;
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
      RabbitModel = module.RabbitModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "84abemdXnxIspWvRuOKN1IU", "RabbitCtrl", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RabbitCtrl = exports('RabbitCtrl', (_dec = ccclass("RabbitCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(RabbitCtrl, _GameDef$BaseCtrl);
        function RabbitCtrl() {
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
          _this._model = RabbitModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = RabbitCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete RabbitCtrl._instance;
          RabbitCtrl._instance = null;
          RabbitModel.destroy();
          RabbitUtils.destroy();
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
          var betGold = RabbitModel.instance.curBet * 1000;
          if (RabbitModel.instance.curBalance < betGold) {
            Common.showTip(i18n.lang[10001], !RabbitUtils.instance.isChangeOrientation());
            return;
          }
          this.isReqBet = true;
          var curBet = Math.floor(RabbitModel.instance.curBet);
          if (buyFree) {
            RabbitModel.instance.curTotalBet = curBet * 1000 * 50;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000,
              buyFree: true
            });
          } else {
            RabbitModel.instance.curTotalBet = curBet * 1000;
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000
            });
          }
        }
        //    /**请求排行榜 */
        ;

        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotFortuneRabbit"
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
            RecordType: "slotFortuneRabbit"
          });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          //        // NetManager.instance.sendOnlineData(RabbitDef.eProto.HD_info, { betAmount: RabbitModel.instance.curBet * 1000 });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.joinChat, {
            groupId: "slotFortuneRabbit"
          }); //加入聊天
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.getChatRecord, {
            groupId: "slotFortuneRabbit",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolChat.exitChat, {
            groupId: "slotFortuneRabbit"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = this._dataManager.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.instance.protocolChat.sendChat, {
            groupId: "slotFortuneRabbit",
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
              Common.showTip(i18n.errTip(data.Code), !RabbitUtils.instance.isChangeOrientation());
            }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (RabbitModel.instance.isAuto) {
                RabbitModel.instance.isAuto = false;
                EventManager.instance.emit(eEvent.onAutoClose);
              }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            //            // case RabbitDef.eProto.HD_info: {
            //            //     ViewManager.instance.closeWait();

            //            //     // if (RabbitModel.instance.gameStatus != RabbitDef.eRunStatus.NONE) {
            //            //     //     return;
            //            //     // }
            //            //     RabbitModel.instance.clearGameData();

            //            //     RabbitModel.instance.gameInfo = data.Data;

            //            //     for (const InitPosMsg of RabbitModel.instance.gameInfo.InitPosMsg) {
            //            //         for (const info of InitPosMsg) {
            //            //             info.IsReward = false;
            //            //         }
            //            //     }
            //            //     RabbitModel.instance.totalRate = RabbitModel.instance.gameInfo.FreeCount > 0 ? RabbitModel.instance.gameInfo.FreeTimes : 1;
            //            //     RabbitModel.instance.totalFreeTimes = RabbitModel.instance.gameInfo.FreeCount;
            //            //     break;
            //            // }
            //            // case RabbitDef.eProto.HD_Leave: {
            //            //     break;
            //            // }
            case eProto.HD_Bet:
              {
                RabbitModel.instance.betResult = data.Data;
                this.isReqBet = false;
                gts.Debug.LogWarr("==RabbitModel.instance.totalFreeTimes==" + RabbitModel.instance.totalFreeTimes);
                if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
                  RabbitModel.instance.curBalance -= RabbitModel.instance.curTotalBet;
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
                gts.Debug.LogWarr("==Rabbit=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (RabbitModel.instance.curBalance > 0) {
                  RabbitModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  break;
                }
                RabbitModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                emitData = {};
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Rabbit=pushWallet==" + _HD_Wallet.VndBalance);
                if (RabbitModel.instance.curBalance > 0) {
                  RabbitModel.instance.endBalance = _HD_Wallet.VndBalance;
                  break;
                }
                RabbitModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return RabbitCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RabbitDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3665cMLQJtNv44564vDyA9O", "RabbitDef", undefined);
      var cBundle = exports('cBundle', "RabbitGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Bet"] = "slotFortuneRabbit/HD_Bet";
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
        lineEffect: 1080,
        icon_scatterSPECIAL: 1090,
        iconWin: 1100,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSpecialDuration: 4,
        cStartDelay: 0.1,
        cQuickStopStartDelay: 0.005,
        cQuickStopDelay: 0.1,
        cStopDelay: 1.25,
        cSymbolW: 214,
        cSymbolH: 175,
        cSymbolStartX: -428,
        cSymbolStartY: -437.5,
        cSpeedMax: 3000,
        cSpeedMin: 1500,
        CSpeedStart: 2000,
        CSpeedAdd: 200,
        CSpeedReduse: 200,
        CBaseRate: 10,
        CBaseBet_0: 0.2,
        CBaseBet_1: 2,
        CBaseBet_2: 20
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

      // export const enum eRunType {
      //     NONE,
      //     SPECIAL,
      // }

      var eSymbol = exports('eSymbol', {
        NONE: 0,
        Ingot: 1,
        MoneyBag: 2,
        RedEnvelope: 3,
        CopperCoin: 4,
        Firecracker: 5,
        Radish: 6,
        Blank: 7,
        WILD: 8,
        Special: 9
      }); //特殊
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
        numAdd: "sound/numAdd",
        drop_1: "sound/drop_1",
        bgNomal: "sound/bgm_nomal",
        bgFree: "sound/bgm_free",
        bgFreeStart: "sound/bgFreeStart",
        bigWin: "sound/bigWin",
        bigwin_cheer: "sound/bigwin_cheer",
        bigWinEnd: "sound/bigWinEnd",
        payoutHighlight: "sound/general_extract/payoutHighlight",
        symWildSpawn: "sound/general_extract/symWildSpawn",
        spinBtn: "sound/general_extract/spinBtn",
        spinActiveLoop: "sound/general_extract/spinActiveLoop",
        luckFly: "sound/general_extract/luckFly",
        luckReach: "sound/general_extract/luckReach",
        teaseStart: "sound/general_extract/teaseStart",
        teaseFail: "sound/general_extract/teaseFail",
        teaseSuccess: "sound/general_extract/teaseSuccess",
        prizeSmallwin01: "sound/general_extract/prizeSmallwin01",
        prizeSmallwin02: "sound/general_extract/prizeSmallwin02",
        prizeSmallwin03: "sound/general_extract/prizeSmallwin03",
        voxMedwinA: "sound/general_extract/voxMedwinA",
        voxSmallwin01A: "sound/general_extract/voxSmallwin01A",
        voxSmallwin01B: "sound/general_extract/voxSmallwin01B",
        voxSmallwin01C: "sound/general_extract/voxSmallwin01C",
        voxSmallwin01D: "sound/general_extract/voxSmallwin01D",
        voxSmallwin02A: "sound/general_extract/voxSmallwin02A",
        voxSmallwin02B: "sound/general_extract/voxSmallwin02B",
        voxSmallwin03A: "sound/general_extract/voxSmallwin03A",
        fsWinReach01: "sound/general_extract/fsWinReach01",
        fsWinReach02: "sound/general_extract/fsWinReach02",
        fsWinReach03: "sound/general_extract/fsWinReach03",
        fsWinReach04: "sound/general_extract/fsWinReach04",
        fsWinReach05: "sound/general_extract/fsWinReach05",
        fsWinReach06: "sound/general_extract/fsWinReach06",
        fsWinReach07: "sound/general_extract/fsWinReach07",
        fsWinReach08: "sound/general_extract/fsWinReach08",
        fsWinReach09: "sound/general_extract/fsWinReach09",
        fsWinReach010: "sound/general_extract/fsWinReach010",
        fsSpin: "sound/general_extract/fsSpin",
        fsCashsymbolFly: "sound/general_extract/fsCashsymbolFly",
        fsWinFly: "sound/general_extract/fsWinFly"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RabbitGame", ['./RabbitCtrl.ts', './RabbitDef.ts', './RabbitModel.ts', './RabbitScene.ts', './RabbitUtils.ts', './RabbitGameView.ts', './Rabbit_ScrollView.ts', './Rabbit_btnEffect.ts', './Rabbit_helpTip.ts', './Rabbit_history.ts', './Rabbit_historyItem.ts', './Rabbit_rank.ts', './Rabbit_rankItem.ts', './Rabbit_setAuto.ts', './Rabbit_setBase.ts', './Rabbit_shake.ts', './Rabbit_symbol.ts', './Rabbit_symbolEffectRoot.ts', './Rabbit_symbolInfo.ts', './Rabbit_symbolItem.ts', './Rabbit_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RabbitGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './RabbitDef.ts', './RabbitModel.ts', './RabbitCtrl.ts', './ViewManager.ts', './RabbitUtils.ts', './Rabbit_winTip.ts', './Rabbit_symbol.ts', './Rabbit_symbolItem.ts', './I18n.ts', './Rabbit_symbolInfo.ts', './Rabbit_btnEffect.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Sprite, Prefab, view, tween, v3, UITransform, instantiate, Tween, UIOpacity, color, find, v2, macro, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, eConstDef, eZindex, eSound, eProto, eSymbol, RabbitModel, RabbitCtrl, ViewManager, RabbitUtils, Rabbit_winTip, Rabbit_symbol, Rabbit_symbolItem, i18n, Rabbit_symbolInfo, Rabbit_btnEffect, Common, AudioManager;
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
      Prefab = module.Prefab;
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      color = module.color;
      find = module.find;
      v2 = module.v2;
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
      eConstDef = module.eConstDef;
      eZindex = module.eZindex;
      eSound = module.eSound;
      eProto = module.eProto;
      eSymbol = module.eSymbol;
    }, function (module) {
      RabbitModel = module.RabbitModel;
    }, function (module) {
      RabbitCtrl = module.RabbitCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Rabbit_winTip = module.default;
    }, function (module) {
      Rabbit_symbol = module.default;
    }, function (module) {
      Rabbit_symbolItem = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Rabbit_symbolInfo = module.default;
    }, function (module) {
      Rabbit_btnEffect = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;
      cclegacy._RF.push({}, "ae9c6D4dZlDOqg/HQ3B5P5s", "RabbitGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var RabbitGameView = exports('default', (_dec = ccclass("RabbitGameView"), _dec2 = menu("game/RabbitGame/RabbitGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Rabbit_symbol), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(Sprite), _dec22 = property(Node), _dec23 = property(Rabbit_symbolInfo), _dec24 = property(Button), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(sp.Skeleton), _dec32 = property(sp.Skeleton), _dec33 = property(sp.Skeleton), _dec34 = property(Node), _dec35 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(RabbitGameView, _GameDef$BaseView);
        function RabbitGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          //    // @property(cc.Node)
          //    // Node_mask_0: cc.Node = null;
          _initializerDefineProperty(_this, "Node_mask_1_6", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Rabbit_symbolList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipEffect", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor14, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // Label_catNum: cc.Node = null;
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrReelBgSpFrame", _descriptor18, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // arrTipBgSpFrame: cc.SpriteFrame[] = [];
          _initializerDefineProperty(_this, "Sprite_reelBg", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineIndex_left", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineIndex_right", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineEffect", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineWin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rabbit", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_zp_light", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_zp_light_role", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_spin_light", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolList", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolItem", _descriptor33, _assertThisInitialized(_this));
          _this.arrBtnStatus = [];
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          _this.showIndex = 0;
          _this.collectTimes = 0;
          return _this;
        }
        var _proto = RabbitGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, RabbitCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!RabbitUtils.instance.isChangeOrientation()) {
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

          EventManager.instance.on(eEvent.onGoldCollect, this.onGoldCollect, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              RabbitModel.instance.autoTimes = times;
              RabbitModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(Rabbit_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (RabbitModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  RabbitCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !RabbitModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = RabbitModel.instance.isAuto;
            RabbitUtils.instance.updateLabel(_this2.Label_autoTimes, RabbitModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            RabbitModel.instance.autoTimes = 0;
            RabbitModel.instance.isAuto = false;
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(Rabbit_btnEffect);
            btnRunEffect.switchAni();

            //                // RabbitUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            RabbitUtils.instance.updateLabel(_this2.Label_autoTimes, RabbitModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onGoldCollect, this.onGoldCollect, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSymbolClick);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          RabbitModel.instance.clearGameData();
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
              //                // RabbitCtrl.instance.reEnterRoom();

              if (RabbitModel.instance.isAuto && RabbitCtrl.instance.isReqBet) {
                RabbitCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseScore}_curIndex`, RabbitModel.instance._curIndex_baseScore + 1);
          // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseRate}_curIndex`, RabbitModel.instance._curIndex_baseRate + 1);
          // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseBet}_curIndex`, RabbitModel.instance._curIndex_baseBet + 1);

          RabbitModel.instance.curBet = (RabbitModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : RabbitModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (RabbitModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          //        // let _curIndex_baseScore = cc.sys.localStorage.getItem(`${RabbitDef.eAutoRateType.baseScore}_curIndex`);
          //        // _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          //        // let _curIndex_baseRate = cc.sys.localStorage.getItem(`${RabbitDef.eAutoRateType.baseRate}_curIndex`);
          //        // _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          //        // let _curIndex_baseBet = cc.sys.localStorage.getItem(`${RabbitDef.eAutoRateType.baseBet}_curIndex`);
          //        // _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;

          //        // RabbitModel.instance._curIndex_baseScore = _curIndex_baseScore;
          //        // RabbitModel.instance._curIndex_baseRate = _curIndex_baseRate;
          //        // RabbitModel.instance._curIndex_baseBet = _curIndex_baseBet;

          RabbitModel.instance._curIndex_baseScore = 0;
          RabbitModel.instance._curIndex_baseRate = 0;
          RabbitModel.instance._curIndex_baseBet = 0;
          RabbitModel.instance.curBet = (RabbitModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : RabbitModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (RabbitModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          if (RabbitModel.instance._curIndex_baseBet >= 29) {
            RabbitModel.instance._curIndex_baseBet = 29;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
          } else if (RabbitModel.instance._curIndex_baseBet <= 0) {
            RabbitModel.instance._curIndex_baseBet = 0;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
          }
          RabbitUtils.instance.loadRes_icon(function () {
            if (_this4.Rabbit_symbolList) {
              //            //test
              for (var i = 0; i < _this4.Rabbit_symbolList.length; i++) {
                _this4.Rabbit_symbolList[i].init();
              }
              RabbitCtrl.instance.reqEnterRoom();

              //            // this.Node_mask_0.zIndex = RabbitDef.eZindex.MASK;
              _this4.Node_mask_1_6.getComponent(UITransform).priority = eZindex.MASK;
              _this4.Node_lineEffect.getComponent(UITransform).priority = eZindex.lineEffect;
            }
          });
          this.Label_bet.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curBet, 2.0) + "K";
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
                RabbitModel.instance.isQuickStop = !RabbitModel.instance.isQuickStop;
                //                // RabbitUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !RabbitModel.instance.isQuickStop);

                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!RabbitModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_auto":
              {
                if (!RabbitModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", RabbitUtils.instance.bundle, function () {}, function (prefab) {
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
                if (RabbitModel.instance.gameStatus != eRunStatus.NONE || RabbitModel.instance.isAuto) {
                  return;
                }
                var buyGold = RabbitModel.instance.curBet * 50 * 1000;
                if (RabbitModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !RabbitUtils.instance.isChangeOrientation());
                  return;
                }
                Common.loadPopBuddle("prefab/Node_buyReward", RabbitUtils.instance.bundle, function () {}, function (prefab) {
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
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_showRecord":
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", RabbitUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", RabbitUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", RabbitUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (RabbitModel.instance.gameStatus != eRunStatus.NONE || RabbitModel.instance.isAuto) {
                  return;
                }
                RabbitModel.instance._curIndex_baseBet--;
                if (RabbitModel.instance._curIndex_baseBet <= 0) {
                  RabbitModel.instance._curIndex_baseBet = 0;
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
                }
                RabbitModel.instance._curIndex_baseScore = Math.floor(RabbitModel.instance._curIndex_baseBet / 10);
                RabbitModel.instance._curIndex_baseRate = RabbitModel.instance._curIndex_baseBet % 10;
                RabbitModel.instance.curBet = (RabbitModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : RabbitModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (RabbitModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseScore}_curIndex`, RabbitModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseRate}_curIndex`, RabbitModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseBet}_curIndex`, RabbitModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (RabbitModel.instance.gameStatus != eRunStatus.NONE || RabbitModel.instance.isAuto) {
                  return;
                }
                RabbitModel.instance._curIndex_baseBet++;
                if (RabbitModel.instance._curIndex_baseBet >= 29) {
                  RabbitModel.instance._curIndex_baseBet > 29;
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
                }
                RabbitModel.instance._curIndex_baseScore = Math.floor(RabbitModel.instance._curIndex_baseBet / 10);
                RabbitModel.instance._curIndex_baseRate = RabbitModel.instance._curIndex_baseBet % 10;
                RabbitModel.instance.curBet = (RabbitModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : RabbitModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (RabbitModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = RabbitUtils.instance.numberFormat(RabbitModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();

                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseScore}_curIndex`, RabbitModel.instance._curIndex_baseScore + 1);
                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseRate}_curIndex`, RabbitModel.instance._curIndex_baseRate + 1);
                // cc.sys.localStorage.setItem(`${RabbitDef.cBundle}_${RabbitDef.eAutoRateType.baseBet}_curIndex`, RabbitModel.instance._curIndex_baseBet + 1);

                break;
              }
            case "Button_run":
              {
                if (RabbitModel.instance.isAuto) {
                  RabbitModel.instance.isAuto = false;
                  RabbitModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = RabbitModel.instance.isAuto;
                  RabbitUtils.instance.updateLabel(this.Label_autoTimes, RabbitModel.instance.autoTimes);
                  if (RabbitModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Button_auto.interactable = false;
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(Rabbit_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (RabbitCtrl.instance.isReqBet) {
                  break;
                }
                if (RabbitModel.instance.gameStatus == eRunStatus.NONE) {
                  RabbitCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (RabbitModel.instance.gameStatus != eRunStatus.NONE || RabbitModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", RabbitUtils.instance.bundle, function () {}, function (help) {
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
                this.hideFree();
              }
          }
        };
        _proto.hideLine = function hideLine() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_lineIndex_left.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            childNode.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_lineIndex_right.children), _step2; !(_step2 = _iterator2()).done;) {
            var _childNode = _step2.value;
            _childNode.active = false;
          }
          var _loop = function _loop() {
            var childNode = _step3.value;
            childNode.getComponent(sp.Skeleton).paused = true;
            tween(childNode.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).call(function () {
              childNode.active = false;
            }).start();
            //            // childNode.active = false;
          };

          for (var _iterator3 = _createForOfIteratorHelperLoose(this.Node_lineEffect.children), _step3; !(_step3 = _iterator3()).done;) {
            _loop();
          }
          var _loop2 = function _loop2() {
            var childNode = _step4.value;
            tween(childNode.getComponent(UIOpacity)).to(0.1, {
              opacity: 0
            }).call(function () {
              childNode.getComponent(Label).string = "";
              childNode.active = false;
            }).start();
            //            // childNode.active = false;
          };

          for (var _iterator4 = _createForOfIteratorHelperLoose(this.Node_lineWin.children), _step4; !(_step4 = _iterator4()).done;) {
            _loop2();
          }
        };
        _proto.showLine = function showLine(prizeIdx, winCount) {
          if (winCount === void 0) {
            winCount = 0;
          }
          var lineIndex = RabbitUtils.instance.getLine(prizeIdx);
          if (lineIndex) {
            gts.Debug.LogWarr("==showLine=lineIndex=" + lineIndex);
            var lineName = "Label_line_" + lineIndex;
            var Label_line_left = this.Node_lineIndex_left.getChildByName(lineName);
            Label_line_left.active = true;
            var Label_line_right = this.Node_lineIndex_right.getChildByName(lineName);
            Label_line_right.active = true;
            var Node_line_ = this.Node_lineEffect.getChildByName("Node_line_" + lineIndex);
            Node_line_.active = true;
            Tween.stopAllByTarget(Node_line_.getComponent(UIOpacity));
            Node_line_.getComponent(sp.Skeleton).paused = false;
            Node_line_.getComponent(sp.Skeleton).timeScale = Math.random() * 0.5 + 0.8;
            Node_line_.getComponent(UIOpacity).opacity = 0;
            tween(Node_line_.getComponent(UIOpacity)).stop().to(0.5, {
              opacity: 255
            }).start();
            var Label_line_ = this.Node_lineWin.getChildByName("Label_line_" + lineIndex);
            Tween.stopAllByTarget(Label_line_.getComponent(UIOpacity));
            if (winCount > 0) {
              Label_line_.getComponent(Label).string = RabbitUtils.instance.numberFormat(winCount / 1000, 2) + "K";
              Label_line_.active = true;
              Label_line_.getComponent(UIOpacity).opacity = 0;
              tween(Label_line_.getComponent(UIOpacity)).stop().to(0.25, {
                opacity: 255
              }).start();
            } else {
              Label_line_.active = false;
              return;
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
            }
            return;
          }
          //        //mask show
          if (!this.Node_mask_1_6.active) {
            this.Node_mask_1_6.active = true;
            this.Node_mask_1_6.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_mask_1_6.getComponent(UIOpacity)).stop().to(0.1, {
              opacity: 180
            }).start();
          }
        };
        _proto.doStartRun = function doStartRun() {
          var _this7 = this;
          if (RabbitModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          this.arrBtnStatus = [];
          var btn = this.Node_action.getChildByName("Button_redus").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: btn.interactable
          });
          btn.interactable = false;
          btn = this.Node_action.getChildByName("Button_add").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: btn.interactable
          });
          btn.interactable = false;
          btn = this.Node_action.getChildByName("Button_auto").getComponent(Button);
          this.arrBtnStatus.push({
            btn: btn,
            enable: btn.interactable
          });
          btn.interactable = false;
          this.Label_gold.color = color(255, 255, 255, 255);
          this.Label_bet.color = color(255, 255, 255, 255);
          this.Label_win.color = color(255, 255, 255, 255);
          RabbitModel.instance.totalRate = 0;
          if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
            this.scheduleOnce(function () {
              //                //滚动背景
              _this7.Sprite_reelBg.spriteFrame = _this7.arrReelBgSpFrame[0];
            }, 0.75);
            if (RabbitModel.instance.isAuto && RabbitModel.instance.autoTimes > 0) {
              RabbitModel.instance.autoTimes--;
              RabbitUtils.instance.updateLabel(this.Label_autoTimes, RabbitModel.instance.autoTimes);
            }
            this.Node_rabbit.node.active = true;
            var rAni = ["idle", "idle", "idle2", "idle", "idle3"];
            this.Node_rabbit.setAnimation(0, rAni[Math.floor(Math.random() * 5)], false);
            this.Node_rabbit.addAnimation(0, rAni[0], true);
            this.Node_zp_light.node.active = false;
            this.Node_zp_light_role.node.active = false;
          } else {
            RabbitModel.instance.totalFreeTimes--;
          }
          this.showMask(false);
          this.hideLine();
          this.Node_info.node.active = false;
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.isStopBigWin = false;
          RabbitModel.instance.curTotalWin = 0;
          this.Node_spin_light.node.active = true;
          if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
            this.Node_spin_light.setAnimation(0, "spin", false);
            this.Node_spin_light.setCompleteListener(function () {
              _this7.Node_spin_light.setCompleteListener(null);
              _this7.Node_spin_light.node.active = false;
            });
            this.Node_tipEffect.setAnimation(0, "normal_p", true);
          } else {
            this.Node_tipEffect.setAnimation(0, "bigwin_p", true);
            this.Node_spin_light.setAnimation(0, "free_spin", false);
            this.Node_spin_light.setCompleteListener(null);
          }
          this.collectTimes = 0;
          if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
            //            // this.clearCatNum();
            this.unschedule(this.showResultEffect);
          }
          this.Label_win.string = "0.00";
          EventManager.instance.emit(eEvent.updateWin, 0);
          var children = this.Node_effectRoot.children;
          for (var _iterator5 = _createForOfIteratorHelperLoose(children), _step5; !(_step5 = _iterator5()).done;) {
            var nodeChild = _step5.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.destroyFromParent();
            }
          }
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, startDelay, stopDelay, i, aniName, aniNameidle;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  startDelay = 0;
                  stopDelay = 0;
                  for (i = 0; i < _this7.Rabbit_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = RabbitModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = RabbitModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
                      if (RabbitModel.instance.specialStatues == 1) {
                        //                        //free
                        startDelay = i * eConstDef.cStartDelay;
                        stopDelay = 12;
                      } else if (RabbitModel.instance.specialStatues == 2) {
                        //                        //free
                        startDelay = i * eConstDef.cStartDelay;
                        stopDelay = eConstDef.cStopDelay + 2.75 + i * eConstDef.cStartDelay;
                      }
                    }
                    arrPro.push(_this7.Rabbit_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
                    aniName = RabbitModel.instance.specialStatues == 1 ? "free_success" : RabbitModel.instance.specialStatues == 2 ? "free_fail" : null;
                    aniNameidle = RabbitModel.instance.specialStatues == 1 ? "free_dile" : RabbitModel.instance.specialStatues == 2 ? "idle" : null;
                    if (aniName) {
                      _this7.scheduleOnce(function () {
                        _this7.Node_zp_light.node.active = true;
                        _this7.Node_zp_light.setCompleteListener(null);
                        _this7.Node_zp_light.setAnimation(0, aniName, false);
                        _this7.Node_zp_light.addAnimation(0, aniNameidle, true);
                        if (RabbitModel.instance.specialStatues == 1) {
                          _this7.Node_zp_light_role.node.active = true;
                          _this7.Node_zp_light_role.setAnimation(0, "free_success2", false);
                          _this7.Node_zp_light_role.setCompleteListener(function () {
                            _this7.Node_zp_light_role.setCompleteListener(null);
                            _this7.Node_zp_light_role.node.active = false;
                          });
                        }
                        var Node_root = _this7.node.getChildByName("Node_root");
                        var resetScale = RabbitModel.instance.specialStatues == 1 ? 0.85 : 1;
                        tween(Node_root).to(eConstDef.cStopDelay + 2.0, {
                          scale: v3(0.85, 0.85, 1)
                        }).call(function () {
                          if (RabbitModel.instance.specialStatues == 2) {
                            RabbitUtils.instance.playOneShot(eSound.teaseFail);
                            _this7.Node_rabbit.setAnimation(0, "tease_exit", false);
                            _this7.Node_rabbit.addAnimation(0, "idle", true);
                          } else {
                            RabbitUtils.instance.playOneShot(eSound.teaseSuccess);
                            _this7.showFree();
                            _this7.Node_rabbit.setAnimation(0, "freespin", false);
                            _this7.Node_rabbit.setCompleteListener(function () {
                              _this7.Node_rabbit.setCompleteListener(null);
                              _this7.Node_rabbit.node.active = false;
                            });
                          }
                        }).to(0.5, {
                          scale: v3(resetScale, resetScale, 1)
                        }).start();
                        RabbitUtils.instance.playOneShot(eSound.teaseStart);
                        _this7.Node_rabbit.setAnimation(0, "tease_start", false);
                        _this7.Node_rabbit.addAnimation(0, "tease_idle", true);
                      }, 0.5);
                    }
                  }
                  _context.next = 7;
                  return Promise.all(arrPro);
                case 7:
                  _this7.scheduleOnce(_this7.doRunEnd, 0);
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
          RabbitModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "start" && !RabbitModel.instance.isAuto && RabbitModel.instance.freeStatus == eRunStatus.NONE) {
            this.Skeleton_run.setAnimation(0, "start", false);
            this.Skeleton_run.setCompleteListener(function () {
              _this7.Skeleton_run.setCompleteListener(null);
              if (!RabbitModel.instance.isAuto) {
                _this7.Button_run.interactable = false;
                _this7.Button_run.node.emit("pauseEffect");
                _this7.Skeleton_run.setAnimation(0, "stop", true);
              }
            });
          }
          if (RabbitModel.instance.freeStatus == eRunStatus.RUNNING) {
            RabbitUtils.instance.playOneShot(eSound.fsSpin);
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (RabbitModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + RabbitModel.instance.totalFreeTimes;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
          } else {
            RabbitUtils.instance.playOneShot(eSound.spinBtn);
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
            var arrPro, i, result, _iterator6, _step6, prizeInfo, arrSound, randStart, randEnd, rAni, _arrPro, _i, rAni_win, rAni_idle, sound, com_Rabbit_winTip, _arrPro2, _i2, _i3, delayStart;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  RabbitModel.instance.gameStatus = eRunStatus.CLEAR;
                  RabbitModel.instance.curTotalWin = 0;

                  //        //collect Gold
                  if (!(RabbitModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context2.next = 9;
                    break;
                  }
                  if (!this.Node_rabbit.node.active) {
                    this.scheduleOnce(function () {
                      _this9.Node_rabbit.node.active = true;
                      _this9.Node_rabbit.setAnimation(0, "tease_exit", false);
                      _this9.Node_rabbit.addAnimation(0, "idle", true);
                    }, 0.35);
                  }
                  arrPro = [];
                  for (i = 0; i < this.Rabbit_symbolList.length; i++) {
                    arrPro.push(this.Rabbit_symbolList[i].doGoldCollect(0));
                  }
                  _context2.next = 9;
                  return Promise.all(arrPro);
                case 9:
                  result = RabbitModel.instance.betResult.Res[0];
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 44;
                    break;
                  }
                  //            //计算得分倍率
                  RabbitModel.instance.totalRate = result.prizeAmount / (RabbitModel.instance.curBet * 1000);
                  this.curBigWinLevel = RabbitModel.instance.totalRate < 20 ? 0 : RabbitModel.instance.totalRate < 50 ? 1 : 2;
                  if (!RabbitModel.instance.betResult.special) {
                    RabbitModel.instance.curTotalWin += result.prizeAmount;
                  }
                  if (!(Rabbit_symbol.goldCount == 0)) {
                    _context2.next = 17;
                    break;
                  }
                  _context2.next = 17;
                  return this.doAwait(0.25);
                case 17:
                  this.showMask();
                  if (RabbitModel.instance.freeStatus == eRunStatus.NONE) {
                    for (_iterator6 = _createForOfIteratorHelperLoose(result.prizeInfo); !(_step6 = _iterator6()).done;) {
                      prizeInfo = _step6.value;
                      if (prizeInfo.prizeIdx.length > 3) {
                        RabbitUtils.instance.playOneShot(eSound.voxMedwinA);
                      } else {
                        arrSound = [eSound.voxSmallwin01A, eSound.voxSmallwin01B, eSound.voxSmallwin01C, eSound.voxSmallwin01D, eSound.voxSmallwin02A, eSound.voxSmallwin02B, eSound.voxSmallwin03A];
                        randStart = RabbitModel.instance.totalRate <= 1 ? 0 : RabbitModel.instance.totalRate <= 2 ? 4 : 6;
                        randEnd = RabbitModel.instance.totalRate <= 1 ? 4 : RabbitModel.instance.totalRate <= 2 ? 2 : 1;
                        RabbitUtils.instance.playOneShot(arrSound[randStart + Math.floor(Math.random() * randEnd)]);
                        this.showLine(prizeInfo.prizeIdx);
                      }
                    }
                    rAni = ["win", "win2", "win3"];
                    this.Node_rabbit.node.active = true;
                    this.Node_rabbit.setAnimation(0, rAni[this.curBigWinLevel], false);
                    this.Node_rabbit.addAnimation(0, "idle", true);
                    this.Node_zp_light.node.active = true;
                    if (RabbitModel.instance.specialStatues != 1) {
                      this.Node_zp_light.setCompleteListener(null);
                      this.Node_zp_light.setAnimation(0, "win", true);
                    }
                  }

                  //            //doEffect
                  _arrPro = [];
                  for (_i = 0; _i < this.Rabbit_symbolList.length; _i++) {
                    _arrPro.push(this.Rabbit_symbolList[_i].doEffect());
                  }
                  _context2.next = 23;
                  return Promise.all(_arrPro);
                case 23:
                  if (!(RabbitModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context2.next = 39;
                    break;
                  }
                  _context2.next = 26;
                  return this.doShowBigWin(RabbitModel.instance.curTotalWin);
                case 26:
                  rAni_win = ["bigwin_win", "bigwin2_win", "bigwin2_win"];
                  rAni_idle = ["bigwin_idle", "bigwin2_idle", "bigwin2_idle"];
                  this.Node_tipEffect.setAnimation(0, rAni_win[this.curBigWinLevel], false);
                  this.Node_tipEffect.addAnimation(0, rAni_idle[this.curBigWinLevel], true);
                  sound = [eSound.prizeSmallwin01, eSound.prizeSmallwin02, eSound.prizeSmallwin03];
                  RabbitUtils.instance.playOneShot(sound[this.curBigWinLevel]);
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  com_Rabbit_winTip = this.Node_winTip.getComponent(Rabbit_winTip);
                  com_Rabbit_winTip.doShow(result.prizeAmount);
                  if (RabbitModel.instance.curTotalWin > 0) {
                    //                    //gengxin
                    RabbitUtils.instance.updateLabelAdd(this.Label_win, RabbitModel.instance.curTotalWin);
                    EventManager.instance.emit(eEvent.updateWin, RabbitModel.instance.curTotalWin);
                  }
                  _context2.next = 43;
                  break;
                case 39:
                  _arrPro2 = [];
                  for (_i2 = 0; _i2 < this.Rabbit_symbolList.length; _i2++) {
                    _arrPro2.push(this.Rabbit_symbolList[_i2].doGoldCollect(1));
                  }
                  _context2.next = 43;
                  return Promise.all(_arrPro2);
                case 43:
                  //            //

                  for (_i3 = 0; _i3 < this.Rabbit_symbolList.length; _i3++) {
                    this.Rabbit_symbolList[_i3].doClear();
                  }
                case 44:
                  if (RabbitModel.instance.freeStatus != eRunStatus.NONE) {
                    this.showMask(false);
                  } else if (RabbitModel.instance.endBalance != RabbitModel.instance.curBalance) {
                    RabbitModel.instance.curBalance = RabbitModel.instance.endBalance;
                    this.updateGold();
                  }
                  delayStart = 0.25;
                  if (RabbitModel.instance.curTotalWin > 0) {
                    delayStart = 1.0;
                  } else if (RabbitModel.instance.isQuickStop) {
                    RabbitUtils.instance.playOneShot(eSound.spinActiveLoop);
                  }
                  RabbitModel.instance.isAuto = RabbitModel.instance.autoTimes > 0;
                  if (!RabbitModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      _this9.Skeleton_run.setCompleteListener(null);
                      _this9.Skeleton_run.setAnimation(0, "idle", true);
                      _this9.Button_run.interactable = true;
                      _this9.Button_run.node.emit("resumeEffect");
                      var btnRunEffect = _this9.Button_run.node.getComponent(Rabbit_btnEffect);
                      btnRunEffect.switchAni();
                    }, 0);

                    //            // RabbitUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    RabbitUtils.instance.updateLabel(this.Label_autoTimes, RabbitModel.instance.autoTimes);
                  }
                  RabbitModel.instance.gameStatus = eRunStatus.NONE;
                  if (RabbitModel.instance.isAuto || RabbitModel.instance.freeStatus == eRunStatus.RUNNING) {
                    this.Label_gold.color = color(255, 255, 255, 255);
                    this.Label_bet.color = color(255, 255, 255, 255);
                    this.Label_win.color = color(255, 255, 255, 255);
                  } else {
                    this.Label_gold.color = color(150, 220, 255, 255);
                    this.Label_bet.color = color(150, 220, 255, 255);
                    this.Label_win.color = color(150, 220, 255, 255);
                  }
                  this.scheduleOnce(function () {
                    if (_this9.arrBtnStatus.length > 0) {
                      for (var _iterator7 = _createForOfIteratorHelperLoose(_this9.arrBtnStatus), _step7; !(_step7 = _iterator7()).done;) {
                        var obj = _step7.value;
                        obj.btn.interactable = obj.enable;
                      }
                    }
                    if (!RabbitModel.instance.isAuto) {
                      _this9.Button_auto.interactable = true;
                    }
                  },
                  // RabbitModel.instance.curTotalWin > 0 ? 1.5 : 0
                  RabbitModel.instance.curTotalWin > 0 ? RabbitModel.instance.isAuto ? 0.75 : 1.5 : 0);

                  //        //free and auto
                  if (!(RabbitModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 66;
                    break;
                  }
                  RabbitModel.instance.totalFreeWin += RabbitModel.instance.curTotalWin;
                  if (!(RabbitModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 58;
                    break;
                  }
                  this.scheduleOnce(function () {
                    _this9.Node_bigWin.active = false;
                    RabbitModel.instance.betResult.Res.splice(0, 1);
                    _this9.doStartRun();
                  }, delayStart);
                  _context2.next = 64;
                  break;
                case 58:
                  RabbitModel.instance.totalRate = RabbitModel.instance.totalFreeWin / (RabbitModel.instance.curBet * 1000);
                  this.curBigWinLevel = RabbitModel.instance.totalRate < 20 ? 0 : RabbitModel.instance.totalRate < 50 ? 1 : 2;

                  //                //大奖
                  _context2.next = 62;
                  return this.doShowBigWin(RabbitModel.instance.totalFreeWin);
                case 62:
                  RabbitModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 64:
                  _context2.next = 67;
                  break;
                case 66:
                  if (RabbitModel.instance.totalFreeTimes > 0) {
                    this.showFree();
                  } else if (RabbitModel.instance.isAuto) {
                    delayStart = 1.0;
                    this.scheduleOnce(function () {
                      RabbitCtrl.instance.reqBet();
                    }, delayStart);
                  } else if (result.prizeInfo.length > 0) {
                    this.showIndex = 0;
                    this.schedule(this.showResultEffect, 3.0, macro.REPEAT_FOREVER, 3.0);
                  }
                case 67:
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
          var _this10 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            var rate = destWin / (RabbitModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 20 && RabbitModel.instance.freeStatus == eRunStatus.NONE) {
              //                //30
              resolve();
              return;
            }
            _this10.scheduleOnce(function () {
              //                //大奖显示
              _this10.Node_bigWin.parent = _this10.node;
              _this10.Node_bigWin.getComponent(UITransform).priority = 52;
              _this10.Node_bigWin.active = true;
              _this10.Node_bigWin.scale = v3(0.5, 0.5, 1);
              var Node_bigWinEffect = _this10.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              Node_bigWinEffect.setAnimation(0, "bigwin_intro", false);
              Node_bigWinEffect.addAnimation(0, "bigwin_idle", true);
              tween(_this10.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1.21)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1.0, 1.0, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                RabbitUtils.instance.playSound(eSound.bigWin);
                RabbitUtils.instance.playSound(eSound.bigwin_cheer);
                var totalTime = (_this10.curBigWinLevel + 1) * 4;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var Label_totalWin = _this10.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                var disWin = Math.floor(destWin / updateTimes);
                var curTotalWin = 0;
                var curLevel = 0;
                tween(Label_totalWin.node).repeatForever(tween(Label_totalWin.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    RabbitUtils.instance.stopSound(eSound.bigWin);
                    RabbitUtils.instance.playSound(eSound.bigWinEnd);
                    Tween.stopAllByTarget(_this10.Node_bigWin);
                    Tween.stopAllByTarget(Label_totalWin.node);
                    curTotalWin = destWin;
                    tween(_this10.Node_bigWin).delay(delay).call(function () {
                      _this10.Node_bigWin.active = false;
                      resolve();
                    }).start();
                    Label_totalWin.string = RabbitUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(RabbitModel.instance.isAuto || RabbitModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                      Label_totalWin.string = RabbitUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                    } else {
                      Label_totalWin.string = RabbitUtils.instance.numberFormatFloat(curTotalWin / 1000, 2) + "K";
                    }
                  }
                  var rate = curTotalWin / (RabbitModel.instance.curBet * 1000);
                  var level = rate < 30 ? 0 : rate < 50 ? 1 : 2;
                  if (level != curLevel) {
                    curLevel = level;
                    var ani = ["bigwin", "megawin", "superwin"];
                    Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
                    Node_bigWinEffect.addAnimation(0, ani[level] + "_idle", true);
                  }
                  if (_this10.isStopBigWin) {
                    //                                            //点击停止
                    var _delay = 1.0;
                    var _ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (Node_bigWinEffect.animation != _ani[level]) {
                      Node_bigWinEffect.setAnimation(0, _ani[level], true);
                      _delay = 2.0;
                    }
                    doEnd(_delay);
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.showResultEffect = function showResultEffect() {
          var _this11 = this;
          this.hideLine();
          var doResultEffect = function doResultEffect(prizeIdx, isAll, winCounts) {
            if (isAll === void 0) {
              isAll = false;
            }
            if (winCounts === void 0) {
              winCounts = 0;
            }
            _this11.showLine(prizeIdx, winCounts);
            if (prizeIdx.length == 3) {
              for (var i = 0; i < 3; i++) {
                var symIndex = prizeIdx[i];
                _this11.Rabbit_symbolList[i].doShowResultEffect(symIndex, isAll);
              }
            }
          };
          this.showIndex++;
          var prizeInfo = RabbitModel.instance.betResult.Res[0].prizeInfo;
          if (this.showIndex == prizeInfo.length) {
            this.showIndex = -1;
            for (var _iterator8 = _createForOfIteratorHelperLoose(prizeInfo), _step8; !(_step8 = _iterator8()).done;) {
              var info = _step8.value;
              doResultEffect(info.prizeIdx, true);
            }
          } else {
            var _info = prizeInfo[this.showIndex];
            doResultEffect(_info.prizeIdx, false, _info.prizeAmount);
          }
        }
        //    ///////////////////////////////////////////////////////
        ;

        _proto.hideFree = function hideFree() {
          var _this12 = this;
          this.unschedule(this.hideFree);
          RabbitModel.instance.freeStatus = eRunStatus.NONE;
          RabbitModel.instance.totalFreeTimes = 0;
          AudioManager.instance.resumeMusic();
          //        // RabbitUtils.instance.stopSound(RabbitDef.eSound.free_winEffect);

          tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
            opacity: 0
          }).call(function () {
            var Node_freeInfo = _this12.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = false;
            var freeTitle = _this12.Node_free.getChildByName("Sprite_title");
            freeTitle.active = false;
            _this12.Node_bigWin.active = false;
            RabbitUtils.instance.playBgMusic();
          }).delay(0.5).call(function () {
            _this12.Node_free.active = false;
            if (RabbitModel.instance.isAuto) {
              _this12.scheduleOnce(function () {
                RabbitCtrl.instance.reqBet();
              }, 1.5);
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
            var delayTime = isEnter ? 0 : 1.5;
            if (!this.Node_zp_light.node.active) {
              this.Node_zp_light.node.active = true;
              this.Node_zp_light.setAnimation(0, "free_success", false);
              this.Node_zp_light.addAnimation(0, "free_idle", true);
            }
            this.scheduleOnce(function () {
              RabbitUtils.instance.playBgMusic(eSound.bgFree);
              if (isEnter) {
                _this13.doEnterFree();
              } else {
                _this13.setEnterFree();
              }
            }, delayTime);
          }
        };
        _proto.setEndFree = function setEndFree() {
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
        };
        _proto.addSymbolTemp = function addSymbolTemp() {
          var _this14 = this;
          var iCount = Math.floor(Math.random() + 2);
          for (var i = 0; i < iCount; i++) {
            this.scheduleOnce(function () {
              var newSym = instantiate(_this14.Node_symbolItem);
              newSym.scale = v3(0.5, 0.5, 1);
              var itemInfo = {
                bonusSymbol: eSymbol.Special,
                //RabbitDef.eSymbol.A,
                amount: Math.floor(Math.random() * 20 + 1) * 1000,
                IsReward: false
              };
              var com = newSym.getComponent(Rabbit_symbolItem);
              com.initItem(itemInfo, -1, 0);
              var randCol = Math.floor(Math.random() * 3);
              var symbolListNode = _this14.Rabbit_symbolList[randCol].node;
              var Node_tempRoot = find("Node_root/Node_symbolTempRoot", _this14.node);
              Node_tempRoot.addChild(newSym);
              var startPos = v2(0, 200);
              var endPos = v2(symbolListNode.getPosition().x, startPos.y - 50 - Math.floor(Math.random() * 200));
              var distance = 800;
              var duration = distance * 2 / eConstDef.cSpeedMax;
              tween(newSym).parallel(tween(newSym).to(0.2, {
                scale: v3(Math.random() * 0.3 + 1.2, Math.random() * 0.3 + 1.2, 1)
              }).to(0.2, {
                scale: v3(1, 1, 1)
              }), tween(newSym).bezierTo(0.375, startPos, v2((startPos.x + endPos.x) * 0.5, endPos.y), endPos)).to(duration, {
                position: v3(newSym.position.x, endPos.y - distance)
              }) //
              .removeSelf().start();
            }, Math.random() * 0.5 + 0.2);
          }
        };
        _proto.setEnterFree = function setEnterFree() {
          var _this15 = this;
          this.Node_free.active = true;
          this.Node_free.getComponent(UIOpacity).opacity = 0;
          RabbitModel.instance.totalFreeWin = 0;
          //        // RabbitModel.instance.totalRate = 2;

          this.unschedule(this.addSymbolTemp);
          this.schedule(this.addSymbolTemp, 0.3, macro.REPEAT_FOREVER, 0.6);
          tween(this.Node_free.getComponent(UIOpacity)).to(0.5, {
            opacity: 255
          }).delay(1.5).call(function () {
            RabbitModel.instance.freeStatus = eRunStatus.START;
            _this15.doEnterFree();
          }).delay(2.0).call(function () {
            _this15.unschedule(_this15.addSymbolTemp);
            RabbitModel.instance.totalFreeTimes = 7;
            var Node_freeInfo = _this15.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.getComponent(Label).string = "" + RabbitModel.instance.totalFreeTimes;
          }).start();
        };
        _proto.doEnterFree = function doEnterFree() {
          var _this16 = this;
          if (RabbitModel.instance.freeStatus > eRunStatus.START) {
            return;
          }
          this.unschedule(this.doEnterFree);
          this.scheduleOnce(function () {
            RabbitModel.instance.freeStatus = eRunStatus.RUNNING;
          }, 2.25);
          do {
            this.Node_info.node.active = false;
            this.Node_tipEffect.setAnimation(0, "bigwin_p", true);

            //            //滚动背景
            this.Sprite_reelBg.spriteFrame = this.arrReelBgSpFrame[1];
            this.Node_zp_light.node.active = true;
            this.Node_zp_light.setAnimation(0, "free_idle", true);
            var freeTitle = this.Node_free.getChildByName("Sprite_title");
            freeTitle.active = true;
            this.Node_menu.active = false;
            this.Node_action.active = false;
            this.Button_menu.node.active = false;
            this.Button_run.node.active = false;
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            Node_freeInfo.active = true;

            //            //免费次数
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + RabbitModel.instance.totalFreeTimes;
            var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
            Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
          } while (false);
          AudioManager.instance.resumeMusic();
          this.scheduleOnce(function () {
            _this16.doStartRun();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this17 = this;
          this.Node_zp_light.setAnimation(0, "free_end", false);
          this.Node_zp_light.setCompleteListener(null);
          this.Node_zp_light.setCompleteListener(function () {
            _this17.Node_zp_light.setCompleteListener(null);
            _this17.Node_zp_light.node.active = false;
          });
          var Node_root = this.node.getChildByName("Node_root");
          tween(Node_root).to(0.5, {
            scale: v3(1, 1, 1)
          }).call(function () {
            _this17.setEndFree();
            _this17.Node_rabbit.node.active = true;
            _this17.Node_rabbit.setAnimation(0, "respawn", false);
            _this17.Node_rabbit.addAnimation(0, "idle", true);
          }).start();

          //        //显示得分 tip
          this.scheduleOnce(function () {
            _this17.Node_tipEffect.node.active = true;
            _this17.Node_tipEffect.setAnimation(0, "bigwin2_win2", false);
            _this17.Node_tipEffect.addAnimation(0, "bigwin2_idle", true);
            _this17.Node_helpTip.active = false;
            _this17.Node_winTip.active = true;
            var com_Rabbit_winTip = _this17.Node_winTip.getComponent(Rabbit_winTip);
            com_Rabbit_winTip.doShow(RabbitModel.instance.totalFreeWin, true);
            RabbitUtils.instance.updateLabelAdd(_this17.Label_win, RabbitModel.instance.totalFreeWin);
            EventManager.instance.emit(eEvent.updateWin, RabbitModel.instance.totalFreeWin);
            // if (RabbitModel.instance.curTotalWin > 0) {
            //     //                //gengxin
            //     RabbitUtils.instance.updateLabelAdd(this.Label_win, RabbitModel.instance.totalFreeWin);
            //     EventManager.instance.emit(RabbitDef.eEvent.updateWin, RabbitModel.instance.totalFreeWin);
            // }

            if (RabbitModel.instance.endBalance != RabbitModel.instance.curBalance) {
              RabbitModel.instance.curBalance = RabbitModel.instance.endBalance;
              _this17.updateGold();
            }
          }, 0.75);
          AudioManager.instance.pauseMusic();
          //        // RabbitUtils.instance.playSound(RabbitDef.eSound.free_winEffect, true);

          this.hideFree();
        };
        _proto.onGoldCollect = function onGoldCollect(collectType, amount) {
          if (amount === void 0) {
            amount = 0;
          }
          this.collectTimes++;
          if (collectType == 0) {
            var rAni = ["vfx_collect_fx1", "vfx_collect_fx1_to_2", "vfx_collect_fx2_to_3"];
            if (this.collectTimes > 2) {
              this.collectTimes = 2;
            }
            this.Node_rabbit.setAnimation(0, "wild_collect", false);
            this.Node_rabbit.addAnimation(0, "idle", true);
            this.Node_rabbit.setAnimation(1, rAni[this.collectTimes], false);
            this.Node_rabbit.addAnimation(1, "vfx_lvl" + this.collectTimes, true);
          } else {
            var totalRate = RabbitModel.instance.curTotalWin / (RabbitModel.instance.curBet * 1000);
            var curBigWinLevel = totalRate < 20 ? 0 : RabbitModel.instance.totalRate < 50 ? 1 : 2;
            var rAni_win2 = ["bigwin_win", "bigwin2_win", "bigwin2_win"];
            var rAni_idle = ["bigwin_idle", "bigwin2_idle", "bigwin2_idle"];
            this.Node_tipEffect.node.active = true;

            //            //显示得分 tip
            this.Node_tipEffect.setAnimation(0, rAni_win2[curBigWinLevel], false);
            this.Node_tipEffect.addAnimation(0, rAni_idle[curBigWinLevel], true);
            var newNode = instantiate(this.Node_tipEffect.node);
            this.Node_tipEffect.node.parent.addChild(newNode);
            var newNodeAni = newNode.getComponent(sp.Skeleton);
            newNodeAni.setAnimation(0, "addup", false);
            newNodeAni.setCompleteListener(function () {
              newNodeAni.setCompleteListener(null);
              newNode.destroyFromParent();
            });
            var arrSound = [eSound.fsWinReach01, eSound.fsWinReach02, eSound.fsWinReach03, eSound.fsWinReach04, eSound.fsWinReach05, eSound.fsWinReach06, eSound.fsWinReach07, eSound.fsWinReach08, eSound.fsWinReach09, eSound.fsWinReach010];
            RabbitUtils.instance.playOneShot(arrSound[this.collectTimes - 1]);
            RabbitModel.instance.curTotalWin += amount;
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_Rabbit_winTip = this.Node_winTip.getComponent(Rabbit_winTip);
            com_Rabbit_winTip.doShow(RabbitModel.instance.curTotalWin);
            if (RabbitModel.instance.curTotalWin > 0) {
              //                //gengxin
              RabbitUtils.instance.updateLabelAdd(this.Label_win, RabbitModel.instance.curTotalWin);
              EventManager.instance.emit(eEvent.updateWin, RabbitModel.instance.curTotalWin);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(RabbitModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            RabbitUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            //            // case RabbitDef.eProto.HD_info: {
            //            //     //横向
            //            //     let InitExtraPos = [];
            //            //     for (let i = 0; i < 4; i++) {
            //            //         let InitPosMsg = RabbitModel.instance.gameInfo.InitPosMsg[i + 1];

            //            //         let symbolInfo = InitPosMsg[InitPosMsg.length - 1];
            //            //         // if (symbolInfo.Sym == RabbitDef.eSymbol.CAISHEN) {
            //            //         //     symbolInfo.Sym = Math.floor(Math.random() * RabbitDef.eSymbol.Q) + 2;
            //            //         // }
            //            //         InitExtraPos.push(symbolInfo);
            //            //     }
            //            //     this.Rabbit_symbolList[0].init(InitExtraPos);

            //            //     //纵向
            //            //     for (let i = 1; i < this.Rabbit_symbolList.length; i++) {
            //            //         let InitPosMsg = RabbitModel.instance.gameInfo.InitPosMsg[i - 1];
            //            //         this.Rabbit_symbolList[i].init(InitPosMsg);
            //            //     }
            //            //     if (RabbitModel.instance.totalFreeTimes > 0) {
            //            //         this.showFree(true);
            //            //     }

            //            //     break;
            //            // }

            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                //                // this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                RabbitUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
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
        return RabbitGameView;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Rabbit_symbolList", [_dec7], {
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
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_free", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "arrReelBgSpFrame", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_reelBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineIndex_left", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineIndex_right", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineEffect", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineWin", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_rabbit", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Node_zp_light", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Node_zp_light_role", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_spin_light", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolList", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolItem", [_dec35], {
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

System.register("chunks:///_virtual/RabbitModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './RabbitDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "70451k7QrBIb6AUkKhMSP4N", "RabbitModel", undefined);
      var RabbitModel = exports('RabbitModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RabbitModel, _GameDef$BaseSington);
        function RabbitModel() {
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
          //    // betResult: RabbitDef.IOpenResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeWin = 0;
          //    // specialStartCol = 0;
          _this.specialStatues = 0;
          //1:真 2：假
          _this.boType = "count";
          return _this;
        }
        var _proto = RabbitModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _createClass(RabbitModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(result) {
            //        // //test
            //        // result.special = true; //Math.random() > 0.98; //Math.random() > 0.98; //true; //

            if (!this._betResult) {
              this._betResult = {
                Res: [],
                special: false
              };
            }
            this._betResult.Res = [];
            this._betResult.special = result.special;
            if (result.special) {
              for (var _iterator = _createForOfIteratorHelperLoose(result.specialResp), _step; !(_step = _iterator()).done;) {
                var specialInfo = _step.value;
                var resultTemp = {
                  openNums: [],
                  prizeAmount: 0,
                  prizeInfo: null
                };
                resultTemp.openNums = specialInfo.specialOpenNums;
                resultTemp.prizeAmount = specialInfo.prizeAmount;
                for (var _iterator2 = _createForOfIteratorHelperLoose(resultTemp.openNums), _step2; !(_step2 = _iterator2()).done;) {
                  var openNums = _step2.value;
                  if (openNums.bonusSymbol == eSymbol.NONE) {
                    openNums.bonusSymbol = eSymbol.Blank;
                  } else if (openNums.bonusSymbol == eSymbol.Special) {
                    openNums.IsReward = true;
                  }

                  //                    // //test
                  //                    // if (Math.random() > 0.6) {
                  //                    //     openNums.bonusSymbol = RabbitDef.eSymbol.Special;
                  //                    //     openNums.amount = Math.random() * 5000 + 2000;
                  //                    //     openNums.IsReward = true;
                  //                    //     resultTemp.prizeAmount += openNums.amount;
                  //                    //     iCount++;
                  //                    // }
                }

                //                // //test
                //                // if (iCount < 5) {
                //                //     resultTemp.prizeAmount = 0;
                //                // }

                this._betResult.Res.unshift(resultTemp);
              }
              RabbitModel.instance.totalFreeTimes = result.specialResp.length;
              RabbitModel.instance.specialStatues = 1;
            } else {
              var _resultTemp = {
                openNums: [],
                prizeAmount: 0,
                prizeInfo: []
              };
              _resultTemp.openNums = result.openNums;
              _resultTemp.prizeAmount = result.prizeAmount;
              _resultTemp.prizeInfo = result.prizeInfo;
              if (result.prizeAmount > 0) {
                for (var _iterator3 = _createForOfIteratorHelperLoose(result.prizeInfo), _step3; !(_step3 = _iterator3()).done;) {
                  var prizeInfo = _step3.value;
                  _resultTemp.openNums[prizeInfo.prizeIdx[0]].IsReward = true;
                  _resultTemp.openNums[prizeInfo.prizeIdx[1]].IsReward = true;
                  _resultTemp.openNums[prizeInfo.prizeIdx[2]].IsReward = true;
                }
              }
              this._betResult.Res.unshift(_resultTemp);
              RabbitModel.instance.specialStatues = Math.floor(Math.random() * 10 + 2);
              RabbitModel.instance.totalFreeTimes = 0;
            }
          }
        }]);
        return RabbitModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RabbitScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './RabbitDef.ts', './RabbitUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, RabbitUtils, Common;
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
      RabbitUtils = module.RabbitUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a3cc7rHIxdOlp/UufKru8C5", "RabbitScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RabbitScene = exports('default', (_dec = ccclass("RabbitScene"), _dec2 = menu("game/RabbitGame/RabbitScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RabbitScene, _Component);
        function RabbitScene() {
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
        var _proto = RabbitScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          RabbitUtils.instance.bundle = assetManager.getBundle(cBundle);
          RabbitUtils.instance.preLoad();
          RabbitUtils.instance.playBgMusic();
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
            //            // if (!RabbitUtils.instance.isChangeOrientation()) {
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
            RabbitUtils.instance.bundle.load("prefab/RabbitGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (RabbitUtils.instance.isChangeOrientation()) {
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
        return RabbitScene;
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

System.register("chunks:///_virtual/RabbitUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './RabbitDef.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "99e0a0+lelBqYpSjL/ttzCz", "RabbitUtils", undefined);
      var symbol_nomal_icon = ["h_ingot",
      //元宝
      "h_packet",
      //钱袋
      "h_angbao",
      //红包
      "h_coins",
      //铜钱
      "h_firecracker",
      //爆竹
      "h_carrot",
      //萝卜
      "s_blank",
      //空白
      "s_wild",
      //任意
      "s_cash_blur" //特殊
      ];

      var symbol_aniData = ["icon_fa", "icon_bao", "icon_hb", "icon_jb", "icon_bp", "icon_lb", "", "s_wild", ""];
      var RabbitUtils = exports('RabbitUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RabbitUtils, _GameDef$BaseSington);
        function RabbitUtils() {
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
        var _proto = RabbitUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/RabbitGameView");
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
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          RabbitUtils.instance.playSound(eSound.numAdd);
          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              RabbitUtils.instance.stopSound(eSound.numAdd);
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
          RabbitUtils.instance.playSound(eSound.numAdd);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              RabbitUtils.instance.stopSound(eSound.numAdd);
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
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          var strAni = null;
          switch (symbolIndex) {
            case eSymbol.WILD:
              {
                strAni = isIdle ? "idle" : "win";
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
          gts.Debug.Log("==getSymbolAniName=strAni=" + strAni);
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
          //        // switch (index) {
          //        //     // case RabbitDef.eSymbol.SCATTER: {
          //        //     //     strAni = "icon_scatter";
          //        //     //     break;
          //        //     // }
          //        //     case RabbitDef.eSymbol.WILD: {
          //        //         strAni = "icon_wild";
          //        //         break;
          //        //     }
          //        //     default: {
          //        //         strAni = "icon";
          //        //         break;
          //        //     }
          //        // }

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
        return RabbitUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/RabbitGame', 'chunks:///_virtual/RabbitGame'); 
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