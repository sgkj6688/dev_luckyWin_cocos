System.register("chunks:///_virtual/Mjhl_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7f4c7VDr0tKEZvo7jNVPGWo", "Mjhl_btnEffect", undefined);
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
      var Mjhl_btnEffect = exports('default', (_dec = ccclass("MjhlBtnEffect"), _dec2 = menu("game/MjhlGame/Mjhl_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_btnEffect, _Component);
        function Mjhl_btnEffect() {
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
        var _proto = Mjhl_btnEffect.prototype;
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

        _createClass(Mjhl_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return Mjhl_btnEffect;
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

System.register("chunks:///_virtual/Mjhl_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "5a6afh2YMRBybVd0w0j/Uf/", "Mjhl_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_helpTip = exports('default', (_dec = ccclass("UiHelpTip"), _dec2 = menu("game/MjhlGame/Mjhl_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_helpTip, _Component);
        function Mjhl_helpTip() {
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
        var _proto = Mjhl_helpTip.prototype;
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
          this.curIndex = (this.curIndex + Math.floor(Math.random() * this.arrSpriteFrame.length)) % this.arrSpriteFrame.length;
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.parent.getComponent(UITransform).width) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.parent.getComponent(UITransform).width) / 2.0 + 20;
            this.Sprite_tip.node.setPosition(disX, this.Sprite_tip.node.position.y);
            var toX = disX - this.Sprite_tip.node.getComponent(UITransform).width - 40;
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
        return Mjhl_helpTip;
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

System.register("chunks:///_virtual/Mjhl_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlCtrl.ts', './MjhlDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, MjhlCtrl, eProto, GameDef, Common;
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
      MjhlCtrl = module.MjhlCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "b14e4XMQnhPIJjjkncScya9", "Mjhl_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Mjhl_history = exports('default', (_dec = ccclass("UiHistory"), _dec2 = menu("game/MjhlGame/Mjhl_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Mjhl_history, _GameDef$BaseView);
        function Mjhl_history() {
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
        var _proto = Mjhl_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MjhlCtrl.instance);
          MjhlCtrl.instance.reqHistory();
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
          MjhlCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          MjhlCtrl.instance.reqHistory(start);
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
        return Mjhl_history;
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

System.register("chunks:///_virtual/Mjhl_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './MjhlUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, MjhlUtils, Common;
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
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "9a545Tnb8pA/KjqTxaD3bii", "Mjhl_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_historyItem = exports('default', (_dec = ccclass("UiHistoryItem"), _dec2 = menu("game/MjhlGame/Mjhl_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_historyItem, _Component);
        function Mjhl_historyItem() {
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
        var _proto = Mjhl_historyItem.prototype;
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
          this.Label_bet.string = MjhlUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + MjhlUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + MjhlUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Mjhl_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Mjhl_historyItem;
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

System.register("chunks:///_virtual/Mjhl_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlCtrl.ts', './MjhlDef.ts', './GameDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, MjhlCtrl, eProto, GameDef, Common;
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
      MjhlCtrl = module.MjhlCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7fcbdtwJgBBhZYBw6q5RoeX", "Mjhl_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Mjhl_rank = exports('default', (_dec = ccclass("UiRank"), _dec2 = menu("game/MjhlGame/Mjhl_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Mjhl_rank, _GameDef$BaseView);
        function Mjhl_rank() {
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
        var _proto = Mjhl_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MjhlCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          MjhlCtrl.instance.reqRank();
        };
        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_Rank:
              {
                Common.closeWait();

                //                // this.Label_curPage.string = `${this._curPage}/${this._totalPage}`;

                if (data.RankList) {
                  this.scrollView_content.setData(data.RankList);
                }
                break;
              }
          }
        };
        return Mjhl_rank;
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

System.register("chunks:///_virtual/Mjhl_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './MjhlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, MjhlUtils;
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
      MjhlUtils = module.MjhlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "fcd3473B+tGCKTurESlExeE", "Mjhl_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_rankItem = exports('default', (_dec = ccclass("UiRankItem"), _dec2 = menu("game/MjhlGame/Mjhl_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_rankItem, _Component);
        function Mjhl_rankItem() {
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
        var _proto = Mjhl_rankItem.prototype;
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
          this.Label_win.string = MjhlUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Mjhl_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Mjhl_rankItem;
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

System.register("chunks:///_virtual/Mjhl_rate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlDef.ts', './MjhlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Prefab, Sprite, Node, Component, instantiate, sp, find, tween, UIOpacity, v3, eSound, MjhlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Sprite = module.Sprite;
      Node = module.Node;
      Component = module.Component;
      instantiate = module.instantiate;
      sp = module.sp;
      find = module.find;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      v3 = module.v3;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "60e1cfyBrNKJ6ezUVnAzfLe", "Mjhl_rate", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_rate = exports('default', (_dec = ccclass("UiRate"), _dec2 = menu("game/MjhlGame/Mjhl_rate"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Prefab), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(Sprite), _dec13 = property(Sprite), _dec14 = property(Sprite), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_rate, _Component);
        function Mjhl_rate() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // arrIconSpriteFrame: { [index: string]: cc.SpriteFrame } = {};
          _initializerDefineProperty(_this, "spriteFrame_bgNomal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_bgFree", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_longNormal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_longFree", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_rateNormal", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_rateFree", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_lightNormal", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_lightFree", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_longLeft", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_longRight", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rate", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bglight", _descriptor14, _assertThisInitialized(_this));
          _this.isFree = false;
          return _this;
        }
        var _proto = Mjhl_rate.prototype;
        //    ///
        _proto.onLoad = function onLoad() {
          // MjhlUtils.instance.asyncLoadDir("textures/rateIcon", cc.SpriteFrame, (err, arrSpFrame: cc.SpriteFrame[]) => {
          //     if (!err) {
          //         for (const SpriteFrame of arrSpFrame) {
          //             this.arrIconSpriteFrame[SpriteFrame.name] = SpriteFrame;
          //         }
          //     }
          // });
          // this.changeStatus();
        };
        _proto.changeStatus = function changeStatus(isFree) {
          var _this2 = this;
          if (isFree === void 0) {
            isFree = false;
          }
          this.isFree = isFree;
          var arrFrame_rate = null;
          var arrFrame_light = null;
          if (!isFree) {
            arrFrame_rate = this.spriteFrame_rateNormal;
            arrFrame_light = this.spriteFrame_lightNormal;
            this.Sprite_bg.spriteFrame = this.spriteFrame_bgNomal;
            this.Sprite_longLeft.spriteFrame = this.spriteFrame_longNormal[0];
            this.Sprite_longRight.spriteFrame = this.spriteFrame_longNormal[1];
            this.free_bglight.active = false;
          } else {
            arrFrame_rate = this.spriteFrame_rateFree;
            arrFrame_light = this.spriteFrame_lightFree;
            this.Sprite_bg.spriteFrame = this.spriteFrame_bgFree;
            this.Sprite_longLeft.spriteFrame = this.spriteFrame_longFree[0];
            this.Sprite_longRight.spriteFrame = this.spriteFrame_longFree[1];
            this.free_bglight.active = true;
          }
          MjhlUtils.instance.playSound(eSound.fsMulti);
          var _loop = function _loop(i) {
            _this2.scheduleOnce(function () {
              var Sprite_rate = _this2.Node_rate.getChildByName("Sprite_rate_" + i);
              var Node_rateEffect = instantiate(_this2.Node_rateEffect);
              Node_rateEffect.position = Sprite_rate.position;
              _this2.Node_rate.addChild(Node_rateEffect);
              var skeleton = Node_rateEffect.getComponent(sp.Skeleton);
              skeleton.setAnimation(0, "animation", false);
              skeleton.setCompleteListener(function () {
                Node_rateEffect.destroyFromParent();
                Sprite_rate.getComponent(Sprite).spriteFrame = arrFrame_rate[i];
                var Sprite_light = Sprite_rate.getChildByName("Sprite_light");
                Sprite_light.getComponent(Sprite).spriteFrame = arrFrame_light[i];
              });
            }, i * 0.25);
          };
          for (var i = 0; i < 4; i++) {
            _loop(i);
          }
        };
        _proto.doLight = function doLight(index) {
          var _this3 = this;
          var _loop2 = function _loop2() {
            var Sprite_rate = _this3.Node_rate.getChildByName("Sprite_rate_" + i);
            var Sprite_light = find("Sprite_light", Sprite_rate);
            Sprite_light.active = i == index;
            if (Sprite_light.active && index != 0) {
              var arrSound = [eSound.multiActivate2, eSound.multiActivate3, eSound.multiActivate5];
              MjhlUtils.instance.playSound(arrSound[index - 1]);
              var Node_rateEffect = instantiate(_this3.Node_rateEffect);
              Sprite_light.addChild(Node_rateEffect);
              var skeleton = Node_rateEffect.getComponent(sp.Skeleton);
              skeleton.setAnimation(0, "animation", false);
              skeleton.setCompleteListener(function () {
                Node_rateEffect.destroyFromParent();
              });
              tween(Sprite_rate).parallel(tween(Sprite_rate).call(function () {
                var Node_rateEffect_1 = instantiate(_this3.Node_rateEffect);
                Sprite_rate.addChild(Node_rateEffect_1);
                Node_rateEffect_1.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                Node_rateEffect_1.getComponent(sp.Skeleton).setCompleteListener(function () {
                  Node_rateEffect_1.destroyFromParent();
                });
              }), tween(Sprite_rate).call(function () {
                tween(Sprite_rate.getComponent(UIOpacity)).to(0.2, {
                  opacity: 255
                }).start();
              }).to(0.2, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.1, {
                scale: v3(1, 1, 1)
              })).call(function () {
                var arrSound = [eSound.X2, eSound.X3, eSound.X5];
                if (_this3.isFree) {
                  arrSound = [eSound.X4, eSound.X6, eSound.X10];
                }
                MjhlUtils.instance.playSound(arrSound[index - 1]);
              }).start();
            }
          };
          for (var i = 0; i < 4; i++) {
            _loop2();
          }
        };
        return Mjhl_rate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_bgNomal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_bgFree", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_longNormal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_longFree", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_rateNormal", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_rateFree", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_lightNormal", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_lightFree", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_longLeft", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_longRight", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Node_rate", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "free_bglight", [_dec16], {
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

System.register("chunks:///_virtual/Mjhl_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlModel.ts', './MjhlDef.ts', './MjhlUtils.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, MjhlModel, eAutoRateType, cBaseScore, eEvent, MjhlUtils, EventManager;
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
      MjhlModel = module.MjhlModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      cBaseScore = module.cBaseScore;
      eEvent = module.eEvent;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "bfadcw23zFBFJciNz2CLLI7", "Mjhl_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_ScrollView = exports('default', (_dec = ccclass("UiScrollView"), _dec2 = menu("game/MjhlGame/Mjhl_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_ScrollView, _Component);
        function Mjhl_ScrollView() {
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
        var _proto = Mjhl_ScrollView.prototype;
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
                this._curIndex = MjhlModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = MjhlModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = MjhlModel.instance._curIndex_baseBet;
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
                var num = cBaseScore[index]; //index == 0 ? 0.1 : index * 0.5;
                var strNum = MjhlUtils.instance.numberFormat(num, 2);
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
                var _strNum = MjhlUtils.instance.numberFormat(cBaseScore[baseScore] * (baseRate + 1) * 20, 2);
                return _strNum + "K";
              }
          }
        };
        _proto.getValue = function getValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                return cBaseScore[index]; // index == 0 ? 0.1 : index * 0.5;
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
        return Mjhl_ScrollView;
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

System.register("chunks:///_virtual/Mjhl_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlModel.ts', './MjhlDef.ts', './ViewManager.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, MjhlModel, eEvent, ViewManager, EventManager;
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
      MjhlModel = module.MjhlModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fbe5cx6nWlBIafST5M7grRc", "Mjhl_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Mjhl_setAuto = exports('default', (_dec = ccclass("MjhlSetAuto"), _dec2 = menu("game/MjhlGame/Mjhl_setAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_setAuto, _Component);
        function Mjhl_setAuto() {
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
        var _proto = Mjhl_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          // Common.setButtonGray(this.Button_ok);
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
                  MjhlModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[MjhlModel.instance.selAutoIndex];
                  EventManager.instance.emit(eEvent.onSetAuto, times);
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
                // Common.setButtonGray(this.Button_ok, false);
              }
          }
        };

        return Mjhl_setAuto;
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

System.register("chunks:///_virtual/Mjhl_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlModel.ts', './MjhlDef.ts', './ViewManager.ts', './EventManager.ts', './MjhlUtils.ts', './Mjhl_ScrollView.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, MjhlModel, eEvent, eAutoRateType, ViewManager, EventManager, MjhlUtils, Mjhl_ScrollView, Common;
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
      MjhlModel = module.MjhlModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Mjhl_ScrollView = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "819baTViBRNc4ye4WM9Z9wS", "Mjhl_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Mjhl_setBase = exports('default', (_dec = ccclass("UiSetBase"), _dec2 = menu("game/MjhlGame/Mjhl_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_setBase, _Component);
        function Mjhl_setBase() {
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
        var _proto = Mjhl_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(MjhlModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (MjhlModel.instance.curTotalWin > 0) {
            this.Label_win.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = MjhlModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = MjhlModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = MjhlModel.instance._curIndex_baseBet;
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
            if (MjhlModel.instance.curTotalWin > 0) {
              this.Label_win.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = MjhlModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            MjhlModel.instance.curTotalWin += disWin;
            if (MjhlModel.instance.curTotalWin > destWin) {
              MjhlModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Mjhl_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Mjhl_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Mjhl_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Mjhl_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Mjhl_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Mjhl_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Mjhl_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                MjhlModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                MjhlModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                MjhlModel.instance._curIndex_baseBet = this._curIndex_baseBet;

                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseScore}_curIndex`, MjhlModel.instance._curIndex_baseScore + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseRate}_curIndex`, MjhlModel.instance._curIndex_baseRate + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseBet}_curIndex`, MjhlModel.instance._curIndex_baseBet + 1);

                EventManager.instance.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Mjhl_setBase;
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

System.register("chunks:///_virtual/Mjhl_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlModel.ts', './MjhlDef.ts', './EventManager.ts', './MjhlUtils.ts', './Mjhl_symbolItem.ts', './Mjhl_rate.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, UIOpacity, tween, sp, Component, MjhlModel, eEvent, eSound, eRunStatus, eSymbol, eRunType, EventManager, MjhlUtils, Mjhl_symbolItem, Mjhl_rate;
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
      Node = module.Node;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      sp = module.sp;
      Component = module.Component;
    }, function (module) {
      MjhlModel = module.MjhlModel;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eRunType = module.eRunType;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Mjhl_symbolItem = module.default;
    }, function (module) {
      Mjhl_rate = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "643f7l6/wJPMrOLjRf0Ciaj", "Mjhl_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;

      // const maxRow = 6;
      var maxCol = 5;
      var cCounts = [7, 7, 7, 7, 7];
      var Mjhl_symbol = exports('default', (_dec = ccclass("UiSymbol"), _dec2 = menu("game/MjhlGame/Mjhl_symbol"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Mjhl_rate), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_symbol, _Component);
        function Mjhl_symbol() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Prefab_symbolItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateEffect", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Mjhl_rate", _descriptor5, _assertThisInitialized(_this));
          //    // @property(Node)
          //    // Sprite_light: Node[] = [];
          //    // @property(Node)
          //    // Sprite_light_free: Node[] = [];
          _this.itemList = [];
          return _this;
        }
        var _proto = Mjhl_symbol.prototype;
        //    // start() {}
        //    // update (dt) {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSetMask, this.onSetMask, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSetMask, this.onSetMask, this);
        };
        _proto.initSymbol = function initSymbol() {
          for (var col = maxCol - 1; col >= 0; col--) {
            this.itemList[col] = [];
            var maxRow = cCounts[col];
            for (var row = 0; row < maxRow; row++) {
              var Node_symbolItem = instantiate(this.Prefab_symbolItem);
              var com_Mjhl_symbolItem = Node_symbolItem.getComponent(Mjhl_symbolItem);
              com_Mjhl_symbolItem.init(row, col);
              this.node.addChild(Node_symbolItem);
              this.itemList[col].push(Node_symbolItem);
            }
          }
        }
        //    // isInit: boolean = false;
        ;

        _proto.initSymbolIcon = function initSymbolIcon(symbolList) {
          //        // if (this.isInit) {
          //        //     return;
          //        // }
          //        // this.isInit = true;

          for (var col = 0; col < maxCol; col++) {
            var maxRow = cCounts[col];
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var symbolItem = itemNode.getComponent(Mjhl_symbolItem);
              var symbol = row == 0 ? null : symbolList[col][row - 1];
              symbolItem.initSymbolIcon(symbol ? symbol.Sym : null, symbol ? symbol.IsGold : null);
            }
          }
        };
        _proto.showFreeCoolEffect = function showFreeCoolEffect() {
          var arrStartPos = [v3(-400, 450, 0), v3(350, 400, 0), v3(-300, 350, 0), v3(400, 350, 0), v3(-350, 300, 0)];
          var arrToPos = [v3(0, 420, 0), v3(0, 210, 0), v3(0, 0, 0), v3(0, -210, 0), v3(0, -420, 0)];
          for (var i = 0; i < 5; i++) {
            var newItem = instantiate(this.Prefab_symbolItem);
            this.node.addChild(newItem);
            var symbolItem = newItem.getComponent(Mjhl_symbolItem);
            symbolItem.updateSymbol(null, true);
            newItem.getComponent(UITransform).priority = 100000 + i;
            newItem.position = arrStartPos[i];
            newItem.getComponent(UIOpacity).opacity = 0;
            tween(newItem.getComponent(UIOpacity)).delay(i * 0.1).to(0.25, {
              opacity: 255
            }).start();
            var toPos_0 = arrToPos[i];
            var toPos_1 = v3(toPos_0.x, toPos_0.y - 1200);
            tween(newItem).delay(i * 0.1 + 0.25).to(0.5, {
              position: toPos_0
            }).start();
            tween(newItem).delay(1.5).to(0.5, {
              position: toPos_1
            }).destroySelf().start();
          }
        };
        _proto.onSetMask = function onSetMask(index, posX) {
          if (this.Node_colEffect.getPosition().x != posX || !this.Node_colEffect.active) {
            if (!this.mask.active) {
              this.mask.active = true;
              this.mask.getComponent(UIOpacity).opacity = 0;
              tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                opacity: 180
              }).start();
            }
            this.mask.getComponent(UITransform).priority = 5000;
            this.mask.getComponent(UITransform).width = 63 + index * 189;
            MjhlModel.instance.curSpecialCol = index;
            if (!this.Node_colEffect.active) {
              this.Node_colEffect.active = true;
              var skeleton = this.Node_colEffect.getComponent(sp.Skeleton);
              skeleton.setAnimation(0, "normal_idle", true);
              this.Node_colEffect.getComponent(UIOpacity).opacity = 0;
              tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }
            this.Node_colEffect.getComponent(UITransform).priority = 6000;
            this.Node_colEffect.setPosition(posX, this.Node_colEffect.position.y);
            MjhlUtils.instance.playSound(eSound.fastspinStart);
          }
        };
        _proto.doRunning = function doRunning(col, specialIndex) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            var delayTimes = MjhlModel.instance.isQuickStop && MjhlModel.instance.freeStatus == eRunStatus.NONE ? 0 : 0.15 * col;
            var run = function run() {
              var maxRow = cCounts[col];
              for (var row = 0; row < maxRow; row++) {
                var itemNode = _this2.itemList[col][row];
                var com_Mjhl_symbolItem = itemNode.getComponent(Mjhl_symbolItem);
                var runType = specialIndex >= 0 ? eRunType.SPECIAL : eRunType.NONE; //SPECIAL
                com_Mjhl_symbolItem.initRun(runType, specialIndex);
                com_Mjhl_symbolItem.doStartRun().then(resolve);
              }
            };
            // if (delayTimes == 0) {
            //     return run();
            // } else {
            //     this.scheduleOnce(() => {
            //         return run();
            //     }, delayTimes);
            // }
            _this2.scheduleOnce(function () {
              return run();
            }, delayTimes);
          });
        };
        _proto.doStartRun = function doStartRun() {
          var _this3 = this;
          EventManager.instance.emit(eEvent.onSymbolClick);
          if (MjhlModel.instance.gameStatus == eRunStatus.RUNNING) {
            //            //do quickStop
            for (var col = 0; col < maxCol; col++) {
              var maxRow = cCounts[col];
              for (var row = 0; row < maxRow; row++) {
                var itemNode = this.itemList[col][row];
                var com_Mjhl_symbolItem = itemNode.getComponent(Mjhl_symbolItem);
                com_Mjhl_symbolItem.quickStop();
              }
            }
          } else if (MjhlModel.instance.gameStatus == eRunStatus.NONE) {
            this.Mjhl_rate.doLight(0);
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var arrPro, specialStartCol, specialIndex, _col;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    arrPro = [];
                    specialStartCol = MjhlModel.instance.specialStartCol;
                    specialIndex = -1;
                    for (_col = 0; _col < maxCol; _col++) {
                      specialIndex = specialStartCol > 0 && _col >= specialStartCol ? specialIndex + 1 : -1;
                      arrPro.push(_this3.doRunning(_col, specialIndex));
                    }
                    _context.next = 6;
                    return Promise.all(arrPro);
                  case 6:
                    MjhlModel.instance.gameStatus = eRunStatus.STOPPING;
                    EventManager.instance.emit(eEvent.onRunStop);
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
        }

        // doEffect(RewardPos: number[][]) {
        //     let itemNodeList: { [index: string]: Mjhl_symbolItem } = {};
        //     for (const arrPos of RewardPos) {
        //         for (let iCol = 0; iCol < arrPos.length; iCol++) {
        //             let iRow = arrPos[iCol] + 1;
        //             let itemNode = this.itemList[iCol][iRow];
        //             itemNodeList[itemNode.name] = itemNode.getComponent(Mjhl_symbolItem);
        //         }
        //     }

        //     let arrPro = [];
        //     for (const [key, Mjhl_symbolItem] of Object.entries(itemNodeList)) {
        //         arrPro.push(Mjhl_symbolItem.doClear());
        //     }

        //     return Promise.all(arrPro);
        // }
        ;

        _proto.doClear = function doClear(RewardPos) {
          var itemNodeList = {};
          for (var _iterator = _createForOfIteratorHelperLoose(RewardPos), _step; !(_step = _iterator()).done;) {
            var arrPos = _step.value;
            for (var iCol = 0; iCol < arrPos.length; iCol++) {
              var iRow = arrPos[iCol] + 1;
              var itemNode = this.itemList[iCol][iRow];
              itemNodeList[itemNode.name] = itemNode.getComponent(Mjhl_symbolItem);
            }
          }
          var arrPro = [];
          for (var _i = 0, _Object$entries = Object.entries(itemNodeList); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              _Mjhl_symbolItem = _Object$entries$_i[1];
            arrPro.push(_Mjhl_symbolItem.doClear());
          }
          return Promise.all(arrPro);
        };
        _proto.doDrop = function doDrop(AllPosMsg) {
          //        //reset pos
          for (var iCol = 0; iCol < maxCol; iCol++) {
            var itemListTemp = this.itemList[iCol].slice();
            var delCounts = 0;
            var maxRow = cCounts[iCol];
            for (var iRow = maxRow - 1; iRow >= 0; iRow--) {
              var itemNode = itemListTemp[iRow];
              var com_Mjhl_symbolItem = itemNode.getComponent(Mjhl_symbolItem);
              if (com_Mjhl_symbolItem.isClear) {
                itemListTemp.splice(iRow, 1);
                itemListTemp.push(itemNode);
                delCounts++;
                com_Mjhl_symbolItem.doReset(maxRow - 1 + delCounts);
              }
            }
            this.itemList[iCol] = itemListTemp;
          }

          //        //drop
          var arrDrop = [];
          for (var _iCol = 0; _iCol < maxCol; _iCol++) {
            var _maxRow = cCounts[_iCol];
            for (var _iRow = 1; _iRow < _maxRow; _iRow++) {
              var _itemNode = this.itemList[_iCol][_iRow];
              var _com_Mjhl_symbolItem = _itemNode.getComponent(Mjhl_symbolItem);
              arrDrop.push(_com_Mjhl_symbolItem.doDrop(_iRow, AllPosMsg[_iCol][_iRow - 1]));
            }
          }
          return Promise.all(arrDrop);
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(RewardPos, AllPosMsg, index) {
            var _this4 = this;
            var bAll, _iterator2, _step2, posInfo;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  //        //
                  index = index < 4 ? index : 3;

                  //        //mask
                  this.mask.active = true;
                  this.mask.getComponent(UITransform).priority = 5000;
                  this.mask.getComponent(UIOpacity).opacity = 0;
                  tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                    opacity: 180
                  }).delay(0.8).to(0.2, {
                    opacity: 0
                  }).call(function () {
                    _this4.mask.active = false;
                    _this4.mask.getComponent(UITransform).width = 0;
                  }).start();
                  this.mask.getComponent(UITransform).width = this.node.getComponent(UITransform).width * 10 / 7;
                  this.setScatterIndex();

                  //判断全中
                  bAll = 0x0;
                  for (_iterator2 = _createForOfIteratorHelperLoose(RewardPos); !(_step2 = _iterator2()).done;) {
                    posInfo = _step2.value;
                    bAll |= 0x1 << posInfo[0] + 1;
                  }
                  if (bAll & 0x1111) {
                    MjhlUtils.instance.playSound(Math.random() > 0.5 ? eSound.Quanzhong1 : eSound.Quanzhong2);
                  }
                  _context2.next = 12;
                  return this.doClear(RewardPos);
                case 12:
                  this.Mjhl_rate.doLight(index);
                  return _context2.abrupt("return", this.doDrop(AllPosMsg));
                case 14:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd(_x, _x2, _x3) {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.setScatterIndex = function setScatterIndex(isEnd) {
          if (isEnd === void 0) {
            isEnd = true;
          }
          for (var col = 0; col < maxCol; col++) {
            var maxRow = cCounts[col];
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Mjhl_symbolItem = itemNode.getComponent(Mjhl_symbolItem);
              if (com_Mjhl_symbolItem.symbolIndex == eSymbol.SCATTER) {
                com_Mjhl_symbolItem.setZIndex(isEnd ? 0 : 30000);
              }
            }
          }
        };
        _proto.doScatterEffect = function doScatterEffect() {
          for (var col = 0; col < maxCol; col++) {
            var maxRow = cCounts[col];
            for (var row = 0; row < maxRow; row++) {
              var itemNode = this.itemList[col][row];
              var com_Mjhl_symbolItem = itemNode.getComponent(Mjhl_symbolItem);
              if (com_Mjhl_symbolItem.symbolIndex == eSymbol.SCATTER) {
                MjhlUtils.instance.playSound(eSound.fsTrans);
                com_Mjhl_symbolItem.doScatterEffect();
              }
            }
          }
        };
        return Mjhl_symbol;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Prefab_symbolItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateEffect", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Mjhl_rate", [_dec7], {
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

System.register("chunks:///_virtual/Mjhl_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlDef.ts', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "6d3ee9+0RpGJomvFDbjIax/", "Mjhl_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_symbolEffectRoot = exports('default', (_dec = ccclass("UiSymbolEffectRoot"), _dec2 = menu("game/MjhlGame/Mjhl_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_symbolEffectRoot, _Component);
        function Mjhl_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Mjhl_symbolEffectRoot.prototype;
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
          effect.setAnimation(0, "idle", false);
          effect.setCompleteListener(function () {
            effect.node.destroyFromParent();
          });
        };
        _proto.onDelEffect = function onDelEffect(iRow, iCol) {
          var delNode = this.node.getChildByName("symbolEffect_" + iRow + "_" + iCol);
          if (delNode) {
            delNode.destroyFromParent();
          }
        };
        return Mjhl_symbolEffectRoot;
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

System.register("chunks:///_virtual/Mjhl_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlDef.ts', './EventManager.ts', './MjhlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, tween, v3, instantiate, UITransform, sp, UIOpacity, Component, eEvent, eSymbol, EventManager, MjhlUtils;
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
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eSymbol = module.eSymbol;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "dffe64grFhGyp2880KvpJ1L", "Mjhl_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // (FA = 1),
      // //     (ZHONG = 2),
      // //     (BAIBAN = 3),
      // //     (BAWAN = 4),
      // //     (WUTONG = 5),
      // //     (WUTIAO = 6),
      // //     (ERTONG = 7),
      // //     (ERTIAO = 8),
      // //     (WILD = 9),
      // //     (SCATTER = 10),
      var eRate = [[10, 25, 50], [8, 20, 40], [6, 15, 30], [5, 10, 15], [3, 5, 12], [3, 5, 12], [1, 3, 6], [2, 4, 10], [1, 3, 6]];
      var Mjhl_symbolInfo = exports('default', (_dec = ccclass("UiSymbolInfo"), _dec2 = menu("game/MjhlGame/Mjhl_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_symbolInfo, _Component);
        function Mjhl_symbolInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_info", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_rateInfo", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_hu", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Mjhl_symbolInfo.prototype;
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
              var newSymbol = _this2.Node_info.getChildByName("symbolNode");
              if (newSymbol) {
                newSymbol.destroyFromParent();
              }
              _this2.Node_info.active = false;
            }).start();
          }, this);
        }
        //    ///
        ;

        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onSymbolClick, this.showSymbolInfo, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onSymbolClick, this.showSymbolInfo, this);
          this.mask.off("click", null, this);
        };
        _proto.showSymbolInfo = function showSymbolInfo(symbol, symbolNode, pos) {
          if (!symbolNode) {
            this.mask.active = false;
            var _newSymbol = this.Node_info.getChildByName("symbolNode");
            if (_newSymbol) {
              _newSymbol.destroyFromParent();
            }
            this.Node_info.active = false;
            return;
          }
          this.mask.active = true;
          this.Node_info.active = true;
          this.Node_info.position = pos;
          for (var _iterator = _createForOfIteratorHelperLoose(this.Node_info.children), _step; !(_step = _iterator()).done;) {
            var childNode = _step.value;
            childNode.name == "symbolNode" ? childNode.destroyFromParent() : null;
          }
          var newSymbol = instantiate(symbolNode);
          newSymbol.name = "symbolNode";
          this.Node_info.addChild(newSymbol);
          newSymbol.getComponent(UITransform).priority = 0;
          this.Node_rateInfo.getComponent(UITransform).priority = 1;
          if (symbol < eSymbol.WILD) {
            this.Label_hu.node.active = false;
            this.Label_wild.node.active = false;
            this.Node_icon.active = true;
            var arrRate = eRate[symbol - 1];
            for (var i = 0; i < 3; i++) {
              var Label_rate = this.Node_icon.getChildByName("Label_rate_" + i).getComponent(Label);
              Label_rate.string = "" + arrRate[i];
            }
          } else {
            this.Node_icon.active = false;
            this.Label_hu.node.active = symbol == eSymbol.SCATTER;
            this.Label_wild.node.active = symbol == eSymbol.WILD;
            var itemSpine = newSymbol.getChildByName("Node_icon").getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.premultipliedAlpha = false;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.setAnimation(0, MjhlUtils.instance.getSymbolAniName(symbol, false), true);
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
        return Mjhl_symbolInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_info", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_rateInfo", [_dec4], {
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

System.register("chunks:///_virtual/Mjhl_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlModel.ts', './MjhlDef.ts', './EventManager.ts', './MjhlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, v3, UITransform, tween, sys, sp, UIOpacity, Sprite, Component, MjhlModel, eRunType, eRunStatus, eSymbol, eSound, eEvent, EventManager, MjhlUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      sys = module.sys;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      MjhlModel = module.MjhlModel;
    }, function (module) {
      eRunType = module.eRunType;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "7737dplzq5H2JMojH/8JM8V", "Mjhl_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var maxRow = 7;
      var maxCol = 5;
      var startY = -630;
      var startX = -378;
      var spaceX = 189;
      var spaceY = 210;
      var aSpeed = 50.0;
      var rSpeed = -75;
      var cLastSpeed = 300;
      var maxSpeed = 4000;
      var minPosY = -630;
      var cSpineZindex = 10000;
      var cSpecialZindex = 20000;
      var cRounds = 4;
      var Mjhl_symbolItem = exports('default', (_dec = ccclass("UiSymbolItem"), _dec2 = menu("game/MjhlGame/Mjhl_symbolItem"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_symbolItem, _Component);
        function Mjhl_symbolItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_symbol", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor2, _assertThisInitialized(_this));
          ////////////////////////////////////////
          _this.isSpine = false;
          _this.curSpeed = 0;
          _this.curAspeed = 0;
          _this.curRspeed = 0;
          _this.totalY = 0;
          _this.stopPosY = 0;
          _this.itemIndex = 0;
          _this.iRow = 0;
          _this.iCol = 0;
          _this.maxRow = maxRow;
          _this.spaceH = spaceY * _this.maxRow;
          _this.lastSpeed = cLastSpeed;
          _this.minPosY = minPosY;
          _this.startY = startY;
          _this.cSpaceH = 1260;
          // 210 * 6;
          _this.isSpecialRunning = false;
          _this.symbolIndex = 0;
          _this.isGold = false;
          _this._runType = eRunType.NONE;
          _this._rounds = 0;
          _this._specialIndex = -1;
          _this.status = 0;
          _this.specialSpaceH = 0;
          _this.isClear = false;
          _this.isReset = false;
          _this.curIndex = 0;
          return _this;
        }
        var _proto = Mjhl_symbolItem.prototype;
        //    /////////////////////////////////////////////////
        //    // onLoad() {}
        //    // start() {}
        _proto.onEnable = function onEnable() {
          this.node.on("click", this.onSymbolClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onSymbolClick, this);
        };
        _proto.init = function init(iRow, iCol) {
          if (iCol == 0 || iCol == 4) {
            this.minPosY = -635;
            this.startY = -530;
            this.maxRow = 7;
          } else {
            this.minPosY = -635;
            this.startY = -630;
            this.maxRow = 7;
          }
          this.cSpaceH = spaceY * this.maxRow;
          //起始坐标
          var symbolPosX = startX + spaceX * iCol;
          var symbolPosY = this.startY + spaceY * iRow;
          this.node.position = v3(symbolPosX, symbolPosY);
          this.node.name = "Node_symbolItem_" + iCol + "_" + iRow;
          this.iRow = iRow;
          this.iCol = iCol;
          var itemIndex = (5 - iCol) * 10 + (9 - iRow);
          this.node.getComponent(UITransform).priority = itemIndex;
          this.itemIndex = itemIndex;
          this.curIndex = itemIndex;
          this.stopPosY = symbolPosY;
          Mjhl_symbolItem.playEndTag[this.iCol] = false;
        };
        _proto.initSymbolIcon = function initSymbolIcon(symbol, isGold) {
          var _this2 = this;
          this.updateSymbol(symbol, isGold);
          var delayTimes = this.iCol * 0.15;
          this.node.setPosition(this.node.position.x, 450 + this.iRow * spaceY);
          tween(this.node).delay(delayTimes).to(0.25, {
            position: v3(this.node.position.x, this.stopPosY - 35)
          }, {
            easing: "cubicIn"
          }).call(function () {
            if (!Mjhl_symbolItem.playEndTag[_this2.iCol]) {
              Mjhl_symbolItem.playEndTag[_this2.iCol] = true;
            }
          }).to(0.05, {
            position: v3(this.node.position.x, this.stopPosY + 20)
          }, {
            easing: "cubicIn"
          }).to(0.03, {
            position: v3(this.node.position.x, this.stopPosY)
          }, {
            easing: "cubicIn"
          }).start();
        };
        _proto.initRun = function initRun(_runType, _specialIndex) {
          this._runType = _runType;
          this._rounds = cRounds;
          this._specialIndex = _specialIndex;
          this.curRspeed = rSpeed;
          Mjhl_symbolItem.playEndTag[this.iCol] = false;
        };
        _proto.doStartRun = /*#__PURE__*/function () {
          var _doStartRun = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  gts.Debug.Log("=doStartRun=tween(this.node)=" + sys.now() + ("==this.iCol==" + this.iCol));
                  _context.next = 3;
                  return this.doStartMove();
                case 3:
                  _context.next = 5;
                  return this.doRunning();
                case 5:
                  _context.next = 7;
                  return this.doStopping();
                case 7:
                  return _context.abrupt("return", this.doEnd());
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doStartRun() {
            return _doStartRun.apply(this, arguments);
          }
          return doStartRun;
        }();
        _proto.quickStop = function quickStop() {
          if (this.totalY > this.cSpaceH + 35) {
            this.curSpeed = maxSpeed;
            this.curAspeed = 500;
            var leftY = (this.totalY - 35) % this.cSpaceH;
            this.totalY = this.cSpaceH + 35 + leftY;
            this.spaceH = this.cSpaceH;
          }
        };
        _proto.doStartMove = function doStartMove() {
          var _this3 = this;
          // gts.Debug.Log("=doStartMove=" + sys.now() + `==this.iCol==${this.iCol}`);
          this.status = eRunStatus.NONE;
          return new Promise(function (resolve, reject) {
            tween(_this3.node).to(0.1, {
              position: v3(_this3.node.getPosition().x, _this3.node.getPosition().y + 35)
            }, {
              easing: "cubicOut"
            }).call(function () {
              _this3.Node_symbol.scale = v3(1, 1, 1);
              _this3.node.getComponent(UITransform).priority = _this3.itemIndex;
              _this3.isSpecialRunning = false;
              if (MjhlModel.instance.isFreeSpecial) {
                var disRounds = 18 + 0; //(this.iCol == 4 ? 1 : 0);
                _this3._rounds = _this3._rounds;
                _this3.curAspeed = 0;
                _this3.curSpeed = 0;
                _this3.totalY = _this3.cSpaceH * (_this3._rounds + disRounds);
                _this3.spaceH = _this3.cSpaceH;
                _this3.lastSpeed = cLastSpeed;
                resolve();
                return;
              } else {
                var isQuickStop = MjhlModel.instance.freeStatus != eRunStatus.NONE ? false : MjhlModel.instance.isQuickStop;
                _this3._rounds = isQuickStop ? 1 : _this3._rounds;
                _this3.curAspeed = isQuickStop ? 500 : 0;
                _this3.curSpeed = isQuickStop ? maxSpeed : 0;
              }
              if (_this3._runType == eRunType.SPECIAL) {
                var arrRounds = [12, 24, 36, 58];
                var _disRounds = arrRounds[_this3._specialIndex];
                var rounds = _this3._rounds;
                _this3._rounds = rounds + _disRounds;
                _this3.totalY = _this3.cSpaceH * _disRounds + 35;
                _this3.spaceH = _this3.cSpaceH * (_disRounds - 4);
                _this3.specialSpaceH = _this3.totalY;
                // this.lastSpeed = cLastSpeed * 3;

                _this3.lastSpeed = 200;
                _this3.curRspeed = -25;

                // gts.Debug.Log(`==this._specialIndex==${this._specialIndex}`);
              } else {
                var _disRounds2 = 0; //this.iCol == 4 ? 1 : 0; //this.iCol * 1;

                _this3.totalY = _this3.cSpaceH * (_this3._rounds + _disRounds2) + 35;
                _this3.spaceH = _this3.cSpaceH;
                _this3.lastSpeed = cLastSpeed;
              }
              resolve();
            }).start();
          });
        };
        _proto.doRunning = function doRunning() {
          var _this4 = this;
          this.status = eRunStatus.RUNNING;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              dt = 0.01667;
              if (_this4.curSpeed < maxSpeed) {
                _this4.curAspeed += aSpeed;
                _this4.curSpeed += _this4.curAspeed;
              }
              var curDis = _this4.curSpeed * dt;

              //                //update posY
              _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y - curDis);
              if (_this4.node.getPosition().y <= _this4.minPosY) {
                _this4.node.setPosition(_this4.node.position.x, _this4.node.position.y + _this4.cSpaceH);

                //                    //随机替换图片
                _this4.updateSymbol();
              }
              _this4.totalY -= curDis;
              if (MjhlModel.instance.isFreeSpecial && _this4.iCol == 2) {
                _this4.node.scale = v3(1.05, 1.05, 1.05);
              }
              if (_this4.totalY < _this4.spaceH) {
                _this4.unschedule(scheduleUpdate);
                resolve();
              }
            };
            _this4.schedule(scheduleUpdate);
          });
        };
        _proto.doStopping = function doStopping() {
          var _this5 = this;
          this.status = eRunStatus.STOPPING;
          return new Promise(function (resolve, reject) {
            var scheduleUpdate = function scheduleUpdate(dt) {
              dt = 0.01667;
              if (_this5._runType != eRunType.SPECIAL) {
                _this5.curAspeed = _this5.curAspeed < _this5.curRspeed ? _this5.curAspeed : _this5.curAspeed + _this5.curRspeed;
                _this5.curSpeed += _this5.curAspeed;
                if (_this5.curSpeed < _this5.lastSpeed) {
                  _this5.curSpeed = _this5.lastSpeed;
                }
              } else {
                if (MjhlModel.instance.curSpecialCol == _this5.iCol && _this5.totalY < _this5.cSpaceH * 3.0) {
                  // this.curAspeed = this.curAspeed < this.curRspeed ? this.curAspeed : this.curAspeed + this.curRspeed;
                  _this5.curSpeed -= 40;
                  if (_this5.curSpeed < 300) {
                    _this5.curSpeed = 300;
                  }
                }
              }
              var curDis = _this5.curSpeed * dt;
              _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y - curDis);
              _this5.totalY -= curDis;
              if (_this5.totalY <= 0) {
                _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y);
                _this5.updateSymbol(_this5.symbolIndex, _this5.isGold);
                _this5.unschedule(scheduleUpdate);
                if (MjhlModel.instance.specialStartCol > 0 && _this5.iCol >= MjhlModel.instance.specialStartCol - 1 && !_this5.isSpecialRunning && _this5.iCol < maxCol - 1) {
                  _this5.scheduleOnce(function () {
                    EventManager.instance.emit(eEvent.onSetMask, _this5.iCol + 1, _this5.node.getPosition().x + spaceX);
                  }, 0.5);
                  _this5.isSpecialRunning = false;
                  _this5.node.scale = v3(1, 1, 1);
                  _this5.updateZIndex();
                }
                resolve();
              } else if (_this5.node.getPosition().y <= _this5.minPosY) {
                _this5.node.setPosition(_this5.node.position.x, _this5.node.position.y + _this5.cSpaceH);

                //将图片替换为正确图片
                if (_this5.iRow == 0) {
                  _this5.updateSymbol(null, true);
                } else {
                  var reuslt = MjhlModel.instance.betResult.Res[0];
                  var posMsg = reuslt.AllPosMsg[_this5.iCol];
                  var info = posMsg && posMsg[_this5.iRow - 1] ? posMsg[_this5.iRow - 1] : null;
                  _this5.updateSymbol(info ? info.Sym : null, info ? info.IsGold : null);
                }
              }
            };
            _this5.schedule(scheduleUpdate);
          });
        };
        _proto.doEnd = function doEnd() {
          var _this6 = this;
          this.status = eRunStatus.END;
          return new Promise(function (resolve, reject) {
            var delayTimes = _this6._runType == eRunType.SPECIAL ? 0.2 : 0;
            if (!Mjhl_symbolItem.playEndTag[_this6.iCol]) {
              Mjhl_symbolItem.playEndTag[_this6.iCol] = true;
            }

            // this.updateSymbol(this.symbolIndex, this.isGold, true);

            gts.Debug.Log("=doEnd=" + sys.now() + ("==this.iCol==" + _this6.iCol));
            tween(_this6.node).to(0.1, {
              position: v3(_this6.node.position.x, _this6.stopPosY + 35)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              position: v3(_this6.node.position.x, _this6.stopPosY)
            }, {
              easing: "cubicIn"
            }).to(delayTimes, {
              scale: v3(1.0, 1.0, 1)
            }).call(function () {
              _this6.isSpecialRunning = false;
              _this6.updateZIndex();
              switch (_this6.symbolIndex) {
                case eSymbol.SCATTER:
                  {
                    _this6.node.getComponent(UITransform).priority = _this6.node.getComponent(UITransform).priority + cSpecialZindex;
                    var itemSpine = _this6.Node_icon.getComponent(sp.Skeleton);
                    itemSpine.setAnimation(0, "scatter_intro", false);
                    itemSpine.addAnimation(0, "scatter_idle", true);
                    MjhlUtils.instance.playSound(eSound.symScatter, false);
                    break;
                  }
              }
              MjhlUtils.instance.playSound(eSound.spinActiveLoop, false);
              resolve();
            }).start();
          });
        };
        _proto.playWinSound = function playWinSound() {
          var mSound = {
            9: eSound.erTiao,
            8: eSound.sanTong,
            7: eSound.erTong,
            6: eSound.wuTiao,
            5: eSound.wuTong,
            4: eSound.baWan,
            3: eSound.baiBan,
            2: eSound.hongZhong
          };
          MjhlUtils.instance.playSound(mSound["" + this.symbolIndex]);
        };
        _proto.doClear = function doClear() {
          var _this7 = this;
          this.status = eRunStatus.CLEAR;
          return new Promise(function (resolve, reject) {
            _this7.node.getComponent(UITransform).priority = _this7.node.getComponent(UITransform).priority + cSpineZindex;
            _this7.updateSymbol(_this7.symbolIndex, _this7.isGold, true);
            Mjhl_symbolItem.playEndTag[_this7.iCol] = false;
            EventManager.instance.emit(eEvent.onAddEffect, _this7.iRow, _this7.iCol, _this7.node.position);
            _this7.scheduleOnce(function () {
              _this7.playWinSound();
              var itemSpine = _this7.Node_icon.getComponent(sp.Skeleton);
              if (itemSpine && itemSpine.skeletonData.name != "icon_hu") {
                itemSpine.setAnimation(0, MjhlUtils.instance.getSymbolAniName(_this7.symbolIndex, _this7.isGold, false), false);
                itemSpine.setCompleteListener(function () {
                  itemSpine.setCompleteListener(null);
                  if (!_this7.isGold) {
                    _this7.Node_symbol.getComponent(UIOpacity).opacity = 0;
                    _this7.isClear = true;
                  } else {
                    MjhlUtils.instance.playSound(eSound.symWildSpawn, false);
                    _this7.updateSymbol(eSymbol.WILD, false, true);
                  }
                  resolve();
                });
              } else {
                resolve();
              }
            }, 0.2);
          });
        };
        _proto.doReset = function doReset(posRow) {
          this.isReset = true;
          this.node.setPosition(this.node.position.x, this.startY + spaceY * posRow);
        };
        _proto.doDrop = function doDrop(toRow, symbol) {
          var _this8 = this;
          this.status = eRunStatus.DROP;
          return new Promise(function (resolve, reject) {
            _this8.iRow = toRow;
            var itemIndex = (5 - _this8.iCol) * 10 + (9 - _this8.iRow);
            _this8.itemIndex = itemIndex;
            _this8.curIndex = itemIndex;
            var toPosY = _this8.startY + spaceY * toRow;
            _this8.stopPosY = toPosY;
            _this8.node.name = "Node_symbolItem_" + _this8.iCol + "_" + _this8.iRow;
            _this8.isClear = false;
            _this8.node.getComponent(UITransform).priority = itemIndex;
            if (toPosY < _this8.node.getPosition().y) {
              _this8.Node_symbol.getComponent(UIOpacity).opacity = 255;
              _this8.updateSymbol(symbol ? symbol.Sym : null, symbol ? symbol.IsGold : null);
              var delayTime = Math.abs(toPosY - _this8.node.getPosition().y) / 1000;
              tween(_this8.node).to(delayTime, {
                position: v3(_this8.node.position.x, toPosY)
              }, {
                easing: "cubicIn"
              }).call(function () {
                if (!Mjhl_symbolItem.playEndTag[_this8.iCol]) {
                  Mjhl_symbolItem.playEndTag[_this8.iCol] = true;
                }
              }).to(0.05, {
                position: v3(_this8.node.position.x, toPosY + 20)
              }, {
                easing: "cubicIn"
              }).to(0.05, {
                position: v3(_this8.node.position.x, toPosY)
              }, {
                easing: "cubicIn"
              }).call(function () {
                if (_this8.isReset) {
                  switch (_this8.symbolIndex) {
                    case eSymbol.SCATTER:
                      {
                        var itemSpine = _this8.Node_icon.getComponent(sp.Skeleton);
                        itemSpine.setAnimation(0, "scatter_intro", false);
                        itemSpine.addAnimation(0, "scatter_idle", true);
                        MjhlUtils.instance.playSound(eSound.symScatter, false);
                        break;
                      }
                  }
                }
                _this8.isReset = false;
                resolve();
              }).start();
            } else {
              resolve();
            }
          });
        };
        _proto.updateSymbol = function updateSymbol(symbolIndex, isGold, isSpine) {
          var _this9 = this;
          if (isGold === void 0) {
            isGold = null;
          }
          if (isSpine === void 0) {
            isSpine = false;
          }
          this.symbolIndex = symbolIndex || Math.floor(Math.random() * 9 + 1);
          this.isGold = isGold != null ? isGold : this.iCol == 0 || this.iCol == 4 ? false : Math.random() > 0.9;
          if (this.status == eRunStatus.RUNNING && MjhlModel.instance.freeStatus != eRunStatus.NONE && this.iCol == 2) {
            this.isGold = true;
          }

          // if (!symbolIndex && this.symbolIndex == MjhlDef.eSymbol.WILD) {
          //     this.symbolIndex = Math.floor(Math.random() * 8 + 1);
          // }

          if (this.symbolIndex >= eSymbol.WILD) {
            this.isGold = false;
          }
          isSpine = this.symbolIndex < eSymbol.WILD ? isSpine : true;
          if (!isSpine) {
            var itemSpine = this.Node_icon.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.destroy();
            }
            var isRunning = this.status == eRunStatus.RUNNING;
            if (MjhlModel.instance.freeStatus != eRunStatus.NONE && this.iCol == 2) {
              isRunning = false;
            }
            this.Node_symbol.getComponent(Sprite).spriteFrame = MjhlUtils.instance.getItemSymbolBox(isRunning, this.isGold);
            if (isRunning) {
              this.Node_symbol.getComponent(UITransform).width = 189;
              this.Node_symbol.getComponent(UITransform).height = 300;
            } else {
              this.Node_symbol.getComponent(UITransform).width = 189;
              this.Node_symbol.getComponent(UITransform).height = 224;
            }
            this.scheduleOnce(function () {
              var itemSymbol = MjhlUtils.instance.getItemSymbolIcon(_this9.symbolIndex, isRunning);
              var itemSprite = _this9.Node_icon.getComponent(Sprite);
              if (!itemSprite) {
                itemSprite = _this9.Node_icon.addComponent(Sprite);
              }
              if (isRunning) {
                itemSprite.sizeMode = Sprite.SizeMode.CUSTOM;
                _this9.Node_icon.getComponent(UITransform).width = 189;
                _this9.Node_icon.getComponent(UITransform).height = 224;
              } else {
                itemSprite.sizeMode = Sprite.SizeMode.TRIMMED;
              }
              itemSprite.spriteFrame = itemSymbol;
            });
            this.updateZIndex();
          } else {
            this.Node_symbol.getComponent(Sprite).spriteFrame = null;
            var itemSprite = this.Node_icon.getComponent(Sprite);
            if (itemSprite) {
              itemSprite.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = MjhlUtils.instance.getItemSymbolSpine(_this9.symbolIndex, _this9.isGold);
              var itemSpine = _this9.Node_icon.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this9.Node_icon.addComponent(sp.Skeleton);
              }

              // itemSpine.premultipliedAlpha = false;
              itemSpine.skeletonData = itemSymbol;
              var strAni = MjhlUtils.instance.getSymbolAniName(_this9.symbolIndex, _this9.isGold);
              itemSpine.setAnimation(0, strAni, true);
            });
            this.updateZIndex(cSpineZindex);
          }
        };
        _proto.updateZIndex = function updateZIndex(addIndex) {
          if (addIndex === void 0) {
            addIndex = 0;
          }
          this.curIndex = (5 - this.iCol) * 10 + (9 - this.iRow);
          if (addIndex > 0) {
            this.curIndex += addIndex;
          }
          this.node.getComponent(UITransform).priority = this.isSpecialRunning || this.status == eRunStatus.RUNNING && MjhlModel.instance.isFreeSpecial && this.iCol == 2 ? cSpecialZindex + this.curIndex : this.curIndex;
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (MjhlModel.instance.isAuto || MjhlModel.instance.gameStatus != eRunStatus.NONE || this.iRow == 0 || this.iRow == this.maxRow - 1) {
            return;
          }
          MjhlUtils.instance.playOneShot(eSound.slider_effect);
          var posX = this.iCol < 2 ? this.node.getPosition().x + 85 : this.iCol > 2 ? this.node.getPosition().x - 85 : this.node.getPosition().x;
          var pos = v3(posX, this.node.getPosition().y);
          EventManager.instance.emit(eEvent.onSymbolClick, this.symbolIndex, this.Node_symbol, pos);
        };
        _proto.setZIndex = function setZIndex(addIndex) {
          this.curIndex = (5 - this.iCol) * 10 + (9 - this.iRow);
          if (addIndex > 0) {
            this.curIndex += addIndex;
          }
          this.node.getComponent(UITransform).priority = this.curIndex;
        };
        _proto.doScatterEffect = function doScatterEffect() {
          var itemSpine = this.Node_icon.getComponent(sp.Skeleton);
          itemSpine.setAnimation(0, "scatter_intro", false);
          itemSpine.addAnimation(0, "scatter_idle", true);
        };
        return Mjhl_symbolItem;
      }(Component), _class3.playEndTag = [false, false, false, false, false], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_symbol", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec4], {
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

System.register("chunks:///_virtual/Mjhl_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MjhlUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Label, SpriteFrame, sp, tween, Component, MjhlUtils;
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
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "55b1euHSyRNloGd44JAl0aO", "Mjhl_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mjhl_winTip = exports('default', (_dec = ccclass("UiWinTip"), _dec2 = menu("game/MjhlGame/Mjhl_winTip"), _dec3 = property(Sprite), _dec4 = property(Label), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mjhl_winTip, _Component);
        function Mjhl_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Sprite_title", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Mjhl_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {}
        //    // update (dt) {}
        ;

        _proto.doShow = function doShow(gold, isLast) {
          var _this2 = this;
          if (isLast === void 0) {
            isLast = false;
          }
          this.Sprite_title.spriteFrame = isLast ? this.arrSpriteFrame[1] : this.arrSpriteFrame[0];
          if (!isLast) {
            var Node_effect_base = this.node.getChildByName("Node_effect_base").getComponent(sp.Skeleton);
            Node_effect_base.setAnimation(0, "animation", false);
            var Node_effect_coin = this.node.getChildByName("Node_effect_coin").getComponent(sp.Skeleton);
            Node_effect_coin.setAnimation(0, "idle", false);
            var destWin = gold;
            var disWin = gold / 10;
            var curTotalWin = 0;
            tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
              curTotalWin += disWin;
              if (curTotalWin > destWin) {
                curTotalWin = destWin;
              }
              _this2.Label_win.string = MjhlUtils.instance.numFormat(curTotalWin / 1000, 2.0);
            })).start();
          } else {
            this.Label_win.string = MjhlUtils.instance.numFormat(gold / 1000, 2.0);
          }
        };
        return Mjhl_winTip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Sprite_title", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrSpriteFrame", [_dec5], {
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

System.register("chunks:///_virtual/MjhlCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './MjhlModel.ts', './I18n.ts', './ViewManager.ts', './MjhlDef.ts', './MjhlUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, MjhlModel, i18n, ViewManager, eProto, eRunStatus, eSymbol, MjhlUtils, Common;
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
      MjhlModel = module.MjhlModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
      eSymbol = module.eSymbol;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8c93cX0Wb5H74pqc9YATe5l", "MjhlCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MjhlCtrl = exports('MjhlCtrl', (_dec = ccclass("MjhlCtrl"), _dec(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(MjhlCtrl, _GameDef$BaseCtrl);
        function MjhlCtrl() {
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
          _this._model = MjhlModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = MjhlCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete MjhlCtrl._instance;
          MjhlCtrl._instance = null;
          MjhlModel.destroy();
          MjhlUtils.destroy();
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
        _proto.reqBet = function reqBet() {
          if (!MjhlModel.instance.gameInfo) {
            return;
          }
          this.isReqBet = true;
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betAmount: MjhlModel.instance.curBet * 1000
          });
        }
        //    /**请求突出房间 */ b;
        ;

        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }
        //    /**请求排行榜 */
        ;

        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotMahjongWays2"
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
            RecordType: "slotMahjongWays2"
          });
        }
        //    // /**重新进入 */
        //    // reEnterRoom() {
        //    //     NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        //    //     NetManager.instance.sendOnlineData(MjhlDef.eProto.HD_info, { action: "HD_info", reEnter: true });
        //    // }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom(betAmount) {
          if (betAmount === void 0) {
            betAmount = 2000;
          }
          NetManager.instance.sendOnlineData(eProto.HD_info, {
            betAmount: betAmount
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
              Common.showTip(i18n.errTip(data.Code), !MjhlUtils.instance.isChangeOrientation());
            }
            // if (data.cmd == MjhlDef.eProto.HD_Enter || (data.Code == 402 && MjhlModel.instance.gameState.GameNo != MjhlModel.instance._myBetGameNO)) {
            //     //退出到大厅
            //     EventManager.instance.emit(MjhlDef.eEvent.onLoadHall);
            //     return;
            // }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                ViewManager.instance.closeWait();
                MjhlModel.instance.clearGameData();
                MjhlModel.instance.gameInfo = data.Data;
                MjhlModel.instance.curBet = MjhlModel.instance.gameInfo.BetAmount / 1000;
                MjhlModel.instance.totalFreeTimesBack = MjhlModel.instance.gameInfo.FreeInfo.TotalCount;
                MjhlModel.instance.totalFreeWin = MjhlModel.instance.gameInfo.FreeInfo.TotalPrizeAmount;
                MjhlModel.instance.totalFreeTimes = MjhlModel.instance.gameInfo.FreeInfo.Count;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                var info = data.Data;
                MjhlModel.instance.betResult = {
                  Res: info.Res,
                  FreeCount: info.FreeInfo.Count
                };
                this.isReqBet = false;
                //                //判断是否有2个胡
                MjhlModel.instance.specialStartCol = 0;
                if (!MjhlModel.instance.isQuickStop) {
                  var checkSpecialRun = function checkSpecialRun() {
                    var openResult = MjhlModel.instance.betResult.Res[0];
                    var iHuCounts = 0;
                    for (var iCol = 0; iCol < 5; iCol++) {
                      var maxRow = iCol == 0 || iCol == 4 ? 4 : 5;
                      for (var iRow = 0; iRow < maxRow; iRow++) {
                        if (openResult.AllPosMsg[iCol][iRow].Sym == eSymbol.SCATTER) {
                          iHuCounts++;
                          if (iHuCounts > 1) {
                            MjhlModel.instance.specialStartCol = iCol + 1;
                            return;
                          }
                        }
                      }
                    }
                  };
                  if (MjhlModel.instance.freeStatus == eRunStatus.NONE) {
                    checkSpecialRun();

                    //specialStartCol test
                    // MjhlModel.instance.specialStartCol = 1;
                  }
                }

                MjhlModel.instance.totalFreeTimes = MjhlModel.instance.betResult.FreeCount;
                // freeTest;
                // if (MjhlModel.instance.totalFreeTimes > 0) {
                //     MjhlModel.instance.totalFreeTimes--;
                // } else {
                //     MjhlModel.instance.totalFreeTimes = 12; //Math.random() > 0.75 ? Math.floor(Math.random() * 7 + 3) : 0;
                // }

                gts.Debug.LogWarr("==MjhlModel.instance.totalFreeTimes==" + MjhlModel.instance.totalFreeTimes);
                if (MjhlModel.instance.freeStatus == eRunStatus.NONE) {
                  MjhlModel.instance.curBalance -= MjhlModel.instance.curBet * 1000;
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
                gts.Debug.LogWarr("==Mjhl=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (MjhlModel.instance.curBalance > 0) {
                  MjhlModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                MjhlModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Mjhl=pushWallet==" + _HD_Wallet.VndBalance);
                if (MjhlModel.instance.curBalance > 0) {
                  MjhlModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                MjhlModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        return MjhlCtrl;
      }(GameDef.BaseCtrl)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MjhlDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2f32a6ihX1DpqrX472c3/l9", "MjhlDef", undefined);
      var cBundle = exports('cBundle', "MjhlGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "slotMahjongWays2/HD_info";
        eProto["HD_Bet"] = "slotMahjongWays2/HD_Bet";
        eProto["HD_Leave"] = "slotMahjongWays2/HD_Leave";
        eProto["HD_History"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        RUNNING: 1,
        STOPPING: 2,
        END: 3,
        CLEAR: 4,
        DROP: 5
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var cBaseScore = exports('cBaseScore', [0.1, 0.5, 2.5]);
      var eSymbol = exports('eSymbol', {
        FA: 1,
        ZHONG: 2,
        BAIBAN: 3,
        BAWAN: 4,
        WUTONG: 5,
        WUTIAO: 6,
        ERTONG: 7,
        SANTONG: 8,
        ERTIAO: 9,
        WILD: 10,
        SCATTER: 11
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
        eEvent["onRunStop"] = "onRunStop";
        eEvent["onSetMask"] = "onSetMask";
        eEvent["onSetAuto"] = "onSetAuto";
        eEvent["onAutoClose"] = "onAutoClose";
        eEvent["onSetBase"] = "onSetBase";
        eEvent["updateBaseBet"] = "updateBaseBet";
        eEvent["updateWin"] = "updateWin";
        eEvent["onAddEffect"] = "onAddEffect";
        eEvent["onDelEffect"] = "onDelEffect";
        eEvent["onSymbolClick"] = "onSymbolClick";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bg: "sound/bgm_mg",
        freeBg: "sound/bgm_fs",
        slider_effect: "sound/slider_effect",
        bgmBigwinEnd: "sound/bgmBigwinEnd",
        bgmBigwinMain: "sound/bgmBigwinMain",
        bgmTotalwinMain: "sound/bgmTotalwinMain",
        bgmTotalwinEnd: "sound/bgmTotalwinEnd",
        fastspinStart: "sound/fastspinStart",
        fsTrans: "sound/fsTrans",
        fsWonTitle: "sound/fsWonTitle",
        fslong: "sound/fslong",
        fsMulti: "sound/fsMulti",
        prizeSmallwin: "sound/prizeSmallwin",
        prizeSmallwinTotal: "sound/prizeSmallwinTotal",
        spinActiveLoop: "sound/spinActiveLoop",
        spinBtn: "sound/spinBtn",
        symScatter: "sound/symScatter",
        symShrink: "sound/symShrink",
        symWildSpawn: "sound/symWildSpawn",
        multiActivate2: "sound/multiActivate2",
        multiActivate3: "sound/multiActivate3",
        multiActivate5: "sound/multiActivate5",
        Quanzhong1: "sound/quanzhong1",
        Quanzhong2: "sound/quanzhong2",
        X2: "sound/x2",
        X3: "sound/x3",
        X4: "sound/x4",
        X5: "sound/x5",
        X6: "sound/x6",
        X10: "sound/x10",
        erTiao: "sound/2tiao",
        sanTong: "sound/3tong",
        erTong: "sound/2tong",
        wuTong: "sound/5tong",
        wuTiao: "sound/5tiao",
        baWan: "sound/8wan",
        baiBan: "sound/baiban",
        hongZhong: "sound/hongzhong"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MjhlGame", ['./MjhlCtrl.ts', './MjhlDef.ts', './MjhlModel.ts', './MjhlScene.ts', './MjhlUtils.ts', './MjhlGameView.ts', './Mjhl_ScrollView.ts', './Mjhl_btnEffect.ts', './Mjhl_helpTip.ts', './Mjhl_history.ts', './Mjhl_historyItem.ts', './Mjhl_rank.ts', './Mjhl_rankItem.ts', './Mjhl_rate.ts', './Mjhl_setAuto.ts', './Mjhl_setBase.ts', './Mjhl_symbol.ts', './Mjhl_symbolEffectRoot.ts', './Mjhl_symbolInfo.ts', './Mjhl_symbolItem.ts', './Mjhl_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MjhlGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './MjhlDef.ts', './MjhlModel.ts', './MjhlCtrl.ts', './ViewManager.ts', './MjhlUtils.ts', './Mjhl_symbol.ts', './Mjhl_winTip.ts', './Mjhl_rate.ts', './Common.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, sp, Button, Label, Sprite, SpriteFrame, view, tween, v3, instantiate, UIOpacity, UITransform, color, Tween, GameDef, ConfigManager, EventManager, NetManager, eEvent, eRunStatus, cBaseScore, eSound, eSymbol, eProto, MjhlModel, MjhlCtrl, ViewManager, MjhlUtils, Mjhl_symbol, Mjhl_winTip, Mjhl_rate, Common, AudioManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      sp = module.sp;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      view = module.view;
      tween = module.tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
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
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      cBaseScore = module.cBaseScore;
      eSound = module.eSound;
      eSymbol = module.eSymbol;
      eProto = module.eProto;
    }, function (module) {
      MjhlModel = module.MjhlModel;
    }, function (module) {
      MjhlCtrl = module.MjhlCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Mjhl_symbol = module.default;
    }, function (module) {
      Mjhl_winTip = module.default;
    }, function (module) {
      Mjhl_rate = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31;
      cclegacy._RF.push({}, "558bcSIW2pBbKolVmj9x7pg", "MjhlGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var MjhlGameView = exports('default', (_dec = ccclass("MjhlGameView"), _dec2 = menu("game/MjhlGame/MjhlGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(Mjhl_symbol), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Label), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(sp.Skeleton), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Label), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Label), _dec25 = property(Mjhl_rate), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Sprite), _dec29 = property(Sprite), _dec30 = property(SpriteFrame), _dec31 = property(SpriteFrame), _dec32 = property(SpriteFrame), _dec33 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(MjhlGameView, _GameDef$BaseView);
        function MjhlGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mask", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_colEffect", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeCool", _descriptor3, _assertThisInitialized(_this));
          // @property(Node)
          // Node_effectRoot: Node = null;
          _initializerDefineProperty(_this, "Node_helpTip", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tipBg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Mjhl_symbol", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_action", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_setBase", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_run", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Skeleton_run", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tip", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor19, _assertThisInitialized(_this));
          //    //free
          _initializerDefineProperty(_this, "Node_free", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalWin", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Mjhl_rate", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_freeBg", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg_up", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_bg_down", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SpriteFrame_bg_up", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "SpriteFrame_bg_down", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrTitle", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bg", _descriptor31, _assertThisInitialized(_this));
          _this.arrBtnStatus = [];
          _this.isStopBigWin = false;
          return _this;
        }
        var _proto = MjhlGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MjhlCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          if (!MjhlUtils.instance.isChangeOrientation()) {
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

          EventManager.instance.on(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              MjhlModel.instance.autoTimes = times;
              MjhlModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              // let btnRunEffect = this.Button_run.node.getComponent(Mjhl_btnEffect);
              // btnRunEffect.switchAni("push2");

              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (MjhlModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  MjhlCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !MjhlModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = MjhlModel.instance.isAuto;
            MjhlUtils.instance.updateLabel(_this2.Label_autoTimes, MjhlModel.instance.autoTimes);
          }, this);
          EventManager.instance.on(eEvent.onAutoClose, function (times) {
            MjhlModel.instance.autoTimes = 0;
            MjhlModel.instance.isAuto = false;
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");

            // let btnRunEffect = this.Button_run.node.getComponent(Mjhl_btnEffect);
            // btnRunEffect.switchAni();

            //                // MjhlUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            MjhlUtils.instance.updateLabel(_this2.Label_autoTimes, MjhlModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onRunStop, this.doRunEnd, this);
          EventManager.instance.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.instance.off(eEvent.onSetAuto);
          EventManager.instance.off(eEvent.onAutoClose);
          MjhlModel.instance.clearGameData();
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
              //                // MjhlCtrl.instance.reEnterRoom();

              if (MjhlModel.instance.isAuto && MjhlCtrl.instance.isReqBet) {
                MjhlCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseScore}_curIndex`, MjhlModel.instance._curIndex_baseScore + 1);
          // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseRate}_curIndex`, MjhlModel.instance._curIndex_baseRate + 1);
          // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseBet}_curIndex`, MjhlModel.instance._curIndex_baseBet + 1);

          if (MjhlModel.instance._curIndex_baseBet >= 29) {
            MjhlModel.instance._curIndex_baseBet = 29;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
          } else if (MjhlModel.instance._curIndex_baseBet > 0) {
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
          } else if (MjhlModel.instance._curIndex_baseBet <= 0) {
            MjhlModel.instance._curIndex_baseBet = 0;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
          }
          MjhlModel.instance.curBet = cBaseScore[MjhlModel.instance._curIndex_baseScore] * (MjhlModel.instance._curIndex_baseRate + 1) * 20;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          MjhlUtils.instance.loadRes_icon(function () {
            _this4.Mjhl_symbol.initSymbol();
            MjhlCtrl.instance.reqEnterRoom();
          });
          this.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
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
                MjhlCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", MjhlUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", MjhlUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                //                // GUtil.openRank("Mjhl");
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", MjhlUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                break;
              }
            case "Button_auto":
              {
                if (!MjhlModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", MjhlUtils.instance.bundle, function () {}, function (prefab) {
                    var newNode = instantiate(prefab);
                    Common.transformSize(newNode);
                    ViewManager.instance.popNodeView(newNode, true);
                  }, true);
                } else {
                  this.Button_auto.interactable = true;
                }
                break;
              }
            case "Button_fast":
              {
                //快速停止
                MjhlModel.instance.isQuickStop = !MjhlModel.instance.isQuickStop;
                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!MjhlModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_redus":
              {
                MjhlModel.instance._curIndex_baseBet--;
                if (MjhlModel.instance._curIndex_baseBet <= 0) {
                  MjhlModel.instance._curIndex_baseBet = 0;
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
                }
                MjhlModel.instance._curIndex_baseScore = Math.floor(MjhlModel.instance._curIndex_baseBet / 10);
                MjhlModel.instance._curIndex_baseRate = MjhlModel.instance._curIndex_baseBet % 10;
                MjhlModel.instance.curBet = cBaseScore[MjhlModel.instance._curIndex_baseScore] * (MjhlModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseScore}_curIndex`, MjhlModel.instance._curIndex_baseScore + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseRate}_curIndex`, MjhlModel.instance._curIndex_baseRate + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseBet}_curIndex`, MjhlModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                MjhlModel.instance._curIndex_baseBet++;
                if (MjhlModel.instance._curIndex_baseBet >= 29) {
                  MjhlModel.instance._curIndex_baseBet = 29;
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
                }
                MjhlModel.instance._curIndex_baseScore = Math.floor(MjhlModel.instance._curIndex_baseBet / 10);
                MjhlModel.instance._curIndex_baseRate = MjhlModel.instance._curIndex_baseBet % 10;
                MjhlModel.instance.curBet = cBaseScore[MjhlModel.instance._curIndex_baseScore] * (MjhlModel.instance._curIndex_baseRate + 1) * 20;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1.0, 1.0, 1)
                }).start();

                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseScore}_curIndex`, MjhlModel.instance._curIndex_baseScore + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseRate}_curIndex`, MjhlModel.instance._curIndex_baseRate + 1);
                // sys.localStorage.setItem(`${MjhlDef.cBundle}_${MjhlDef.eAutoRateType.baseBet}_curIndex`, MjhlModel.instance._curIndex_baseBet + 1);

                break;
              }
            case "Button_run":
              {
                ///////////////
                if (MjhlModel.instance.isAuto) {
                  MjhlModel.instance.isAuto = false;
                  MjhlModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = MjhlModel.instance.isAuto;
                  MjhlUtils.instance.updateLabel(this.Label_autoTimes, MjhlModel.instance.autoTimes);
                  if (MjhlModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Button_auto.interactable = false;
                  }

                  // let btnRunEffect = this.Button_run.node.getComponent(Mjhl_btnEffect);
                  // btnRunEffect.switchAni();

                  break;
                }
                if (MjhlCtrl.instance.isReqBet) {
                  break;
                }
                if (MjhlModel.instance.gameStatus == eRunStatus.NONE) {
                  MjhlCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                Common.loadPopBuddle("prefab/Node_setBase", MjhlUtils.instance.bundle, function () {}, function (help) {
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
        _proto.showFreeColEffect = function showFreeColEffect(isShow) {
          var _this6 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (!isShow) {
            MjhlUtils.instance.stopSound(eSound.fslong);
            tween(this.Node_freeCool.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              _this6.Node_freeCool.active = false;
            }).start();
            return;
          }
          MjhlUtils.instance.playSound(eSound.fslong, true);
          this.Node_freeCool.active = true;
          this.Node_freeCool.getComponent(UITransform).priority = 20000;
          var skeleton = this.Node_freeCool.getChildByName("Node_colEffect").getComponent(sp.Skeleton);
          skeleton.setAnimation(0, "free_intro", false);
          skeleton.setCompleteListener(function () {
            skeleton.setCompleteListener(null);
            skeleton.setAnimation(0, "free_idle", true);
            _this6.Node_freeCool.getComponent(UITransform).priority = 2000;
          });
          this.Node_freeCool.getComponent(UIOpacity).opacity = 0;
          tween(this.Node_freeCool.getComponent(UIOpacity)).to(0.1, {
            opacity: 255
          }).start();
          this.scheduleOnce(function () {
            _this6.Mjhl_symbol.showFreeCoolEffect();
          }, 0.5);
        };
        _proto.doStartRun = function doStartRun() {
          this.Node_helpTip.active = true;
          this.Node_winTip.active = false;
          this.isStopBigWin = false;
          EventManager.instance.emit(eEvent.updateWin, 0);
          this.Mjhl_symbol.doStartRun();
          var strAni = MjhlModel.instance.freeStatus == eRunStatus.NONE ? "free_normal" : "normal";
          this.Node_tipBg.setAnimation(0, strAni + "_idle", true);
          MjhlUtils.instance.playOneShot(eSound.spinBtn);
          if (MjhlModel.instance.freeStatus == eRunStatus.NONE) {
            this.Label_win.string = "0.00";
            if (!MjhlModel.instance.isAuto) {
              MjhlModel.instance.gameStatus = eRunStatus.RUNNING;
              if (this.Skeleton_run.animation != "spin") {
                this.Skeleton_run.setAnimation(0, "spin", true);
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
            } else if (MjhlModel.instance.autoTimes > 0) {
              MjhlModel.instance.autoTimes--;
              MjhlUtils.instance.updateLabel(this.Label_autoTimes, MjhlModel.instance.autoTimes);
            }
          } else {
            var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
            var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
            if (MjhlModel.instance.totalFreeTimes > 0) {
              Label_freeTimes.getComponent(Label).string = "" + MjhlModel.instance.totalFreeTimes;
              Label_freeTimes.active = true;
            } else {
              var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
              Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
              Label_freeTimes.active = false;
            }
            if (MjhlModel.instance.isFreeSpecial) {
              MjhlModel.instance.isFreeSpecial = true;
              this.showFreeColEffect();
            }
          }
          this.Label_gold.color = color(255, 255, 255, 255);
          this.Label_bet.color = color(255, 255, 255, 255);
          this.Label_win.color = color(255, 255, 255, 255);
        };
        _proto.doAwait = function doAwait(delay) {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            _this7.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.doRunEnd = /*#__PURE__*/function () {
          var _doRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this8 = this;
            var totalWin, resultList, _loop, i, delayStart, com_Mjhl_winTip;
            return _regeneratorRuntime().wrap(function _callee$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  MjhlModel.instance.gameStatus = eRunStatus.CLEAR;
                  this.Button_run.interactable = false;
                  if (this.Node_colEffect.active) {
                    MjhlUtils.instance.stopSound(eSound.fastspinStart);
                    tween(this.Node_colEffect.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.Node_colEffect.active = false;
                    }).start();
                  }
                  if (this.mask.active) {
                    tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.mask.active = false;
                      _this8.mask.getComponent(UITransform).width = 0;
                    }).start();
                  }
                  if (MjhlModel.instance.isFreeSpecial) {
                    MjhlModel.instance.isFreeSpecial = false;
                    this.showFreeColEffect(false);
                  }
                  totalWin = MjhlModel.instance.freeStatus != eRunStatus.NONE ? MjhlModel.instance.totalFreeWin : 0;
                  MjhlModel.instance.curTotalWin = 0;
                  _context2.next = 9;
                  return this.doAwait(0.5);
                case 9:
                  resultList = MjhlModel.instance.betResult.Res;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var result, resultNext, _com_Mjhl_winTip, destWin, disWin;
                    return _regeneratorRuntime().wrap(function _loop$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          result = resultList[i];
                          if (!(result.RewardMoney > 0)) {
                            _context.next = 17;
                            break;
                          }
                          resultNext = resultList[i + 1];
                          _this8.Node_helpTip.active = false;
                          _this8.Node_winTip.active = true;
                          _com_Mjhl_winTip = _this8.Node_winTip.getComponent(Mjhl_winTip);
                          _com_Mjhl_winTip.doShow(result.RewardMoney);
                          MjhlUtils.instance.playSound(eSound.prizeSmallwin);
                          _this8.showTipBgAni(result.RewardMoney);

                          //gengxin
                          MjhlModel.instance.curTotalWin += result.RewardMoney;
                          destWin = totalWin + result.RewardMoney;
                          disWin = result.RewardMoney / 10;
                          tween(_this8.Label_win.node).repeat(11, tween(_this8.Label_win.node).delay(0.05).call(function () {
                            totalWin += disWin;
                            if (totalWin > destWin) {
                              totalWin = destWin;
                            }
                            _this8.Label_win.string = MjhlUtils.instance.numFormat(totalWin / 1000, 2.0);
                          })).start();
                          EventManager.instance.emit(eEvent.updateWin, result.RewardMoney);
                          MjhlUtils.instance.playOneShot(eSound.symShrink);
                          _context.next = 17;
                          return _this8.Mjhl_symbol.doEnd(result.RewardPos, resultNext.AllPosMsg, i + 1);
                        case 17:
                        case "end":
                          return _context.stop();
                      }
                    }, _loop);
                  });
                  i = 0;
                case 12:
                  if (!(i < resultList.length)) {
                    _context2.next = 17;
                    break;
                  }
                  return _context2.delegateYield(_loop(), "t0", 14);
                case 14:
                  i++;
                  _context2.next = 12;
                  break;
                case 17:
                  this.Mjhl_symbol.setScatterIndex(false);
                  if (this.mask.active) {
                    tween(this.mask.getComponent(UIOpacity)).to(0.2, {
                      opacity: 0
                    }).call(function () {
                      _this8.mask.active = false;
                      _this8.mask.getComponent(UITransform).width = 0;
                    }).start();
                  }
                  delayStart = 0.25;
                  if (!(MjhlModel.instance.curTotalWin > 0)) {
                    _context2.next = 29;
                    break;
                  }
                  _context2.next = 23;
                  return this.doShowBigWin(MjhlModel.instance.curTotalWin);
                case 23:
                  com_Mjhl_winTip = this.Node_winTip.getComponent(Mjhl_winTip);
                  com_Mjhl_winTip.doShow(MjhlModel.instance.curTotalWin, true);
                  MjhlUtils.instance.playSound(eSound.prizeSmallwinTotal);
                  this.showTipBgAni(MjhlModel.instance.curTotalWin);
                  delayStart = 0.5;
                  if (MjhlModel.instance.endBalance > 0) {
                    MjhlModel.instance.curBalance = MjhlModel.instance.endBalance;
                    MjhlModel.instance.endBalance = 0;
                    this.updateGold();
                  }
                case 29:
                  MjhlModel.instance.isAuto = MjhlModel.instance.autoTimes > 0;
                  if (!MjhlModel.instance.isAuto) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    MjhlUtils.instance.updateLabel(this.Label_autoTimes, MjhlModel.instance.autoTimes);
                  }
                  this.Button_run.interactable = true;
                  MjhlUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                  MjhlModel.instance.gameStatus = eRunStatus.NONE;
                  this.scheduleOnce(function () {
                    if (_this8.arrBtnStatus.length > 0) {
                      for (var _iterator = _createForOfIteratorHelperLoose(_this8.arrBtnStatus), _step; !(_step = _iterator()).done;) {
                        var obj = _step.value;
                        obj.btn.interactable = obj.enable;
                      }
                    }
                  });

                  //        //free and auto
                  if (!(MjhlModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 40;
                    break;
                  }
                  MjhlModel.instance.totalFreeWin += MjhlModel.instance.curTotalWin;
                  this.scheduleOnce(function () {
                    _this8.Node_bigWin.active = false;
                    if (MjhlModel.instance.totalFreeTimes > 0) {
                      if (MjhlModel.instance.curTotalWin > 0) {
                        MjhlModel.instance.isFreeSpecial = true;
                      }
                      MjhlCtrl.instance.reqBet();
                    } else {
                      MjhlModel.instance.freeStatus = eRunStatus.END;
                      _this8.doEndFree();
                    }
                  }, delayStart);
                  _context2.next = 50;
                  break;
                case 40:
                  if (!(MjhlModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 49;
                    break;
                  }
                  this.Button_run.interactable = false;
                  MjhlModel.instance.isFreeSpecial = true;
                  this.Mjhl_symbol.doScatterEffect();
                  _context2.next = 46;
                  return this.doAwait(1.0);
                case 46:
                  this.showFree(true);
                  _context2.next = 50;
                  break;
                case 49:
                  if (MjhlModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      MjhlCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 50:
                  this.scheduleOnce(function () {
                    if (MjhlModel.instance.isAuto || MjhlModel.instance.freeStatus == eRunStatus.RUNNING) {
                      _this8.Label_gold.color = color(255, 255, 255, 255);
                      _this8.Label_bet.color = color(255, 255, 255, 255);
                      _this8.Label_win.color = color(255, 255, 255, 255);
                    } else {
                      _this8.Label_gold.color = color(150, 220, 255, 255);
                      _this8.Label_bet.color = color(150, 220, 255, 255);
                      _this8.Label_win.color = color(150, 220, 255, 255);
                    }
                  }, MjhlModel.instance.curTotalWin > 0 ? 0.25 : 0);
                case 51:
                case "end":
                  return _context2.stop();
              }
            }, _callee, this);
          }));
          function doRunEnd() {
            return _doRunEnd.apply(this, arguments);
          }
          return doRunEnd;
        }();
        _proto.showTipBgAni = function showTipBgAni(win) {
          if (win === void 0) {
            win = 0;
          }
          var rate = win / (MjhlModel.instance.curBet * 1000);
          if (rate < 5) {
            //nomal win
            var strAni = MjhlModel.instance.freeStatus == eRunStatus.NONE ? "free_normal" : "normal";
            this.Node_tipBg.setAnimation(0, strAni + "_win", false);
            this.Node_tipBg.addAnimation(0, strAni + "_idle", true);
          } else {
            //bigWin
            var _strAni = rate < 60 ? "bigwin1" : "bigwin2";
            var isNomal = MjhlModel.instance.freeStatus == eRunStatus.NONE;
            var intro = isNomal ? "intro1" : "intro2";
            this.Node_tipBg.setAnimation(0, _strAni + "_" + intro, false);
            this.Node_tipBg.addAnimation(0, _strAni + "_win", false);
            this.Node_tipBg.addAnimation(0, _strAni + "_idle", true);
          }
        };
        _proto.doShowBigWin = function doShowBigWin(destWin, delay) {
          var _this9 = this;
          if (delay === void 0) {
            delay = 0.5;
          }
          return new Promise(function (resolve, reject) {
            // destWin = MjhlModel.instance.curBet * 1000 * 40;
            var rate = destWin / (MjhlModel.instance.curBet * 1000);
            if (destWin <= 1 || rate < 20) {
              //                //30
              resolve();
              return;
            }
            _this9.scheduleOnce(function () {
              //                //大奖显示
              _this9.Node_bigWin.parent = _this9.node;
              _this9.Node_bigWin.getComponent(UITransform).priority = 52;
              _this9.Node_bigWin.active = true;
              _this9.Node_bigWin.scale = v3(0.5, 0.5, 1);
              var Node_bigWinEffect = _this9.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
              var level = rate < 35 ? 0 : rate < 50 ? 1 : 2;
              var ani = ["bigwin_win", "megawin_win", "superwin_win"];
              var aniIdle = ["bigwin_idle", "megawin_idle", "superwin_idle"];
              var TrackEntry = Node_bigWinEffect.setAnimation(0, "" + ani[level], false);
              Node_bigWinEffect.addAnimation(0, aniIdle[level], true);
              MjhlUtils.instance.playSound(eSound.bgmBigwinMain);
              tween(_this9.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                // MjhlUtils.instance.playOneShot(MjhlDef.eSound.bigWin);

                var totalTime = TrackEntry.animation.duration;
                var dt = 0.05;
                var updateTimes = totalTime / dt;
                var levelTimes = level == 1 ? totalTime * 0.42 / dt : level == 2 ? totalTime * 0.275 / dt : totalTime / dt;
                var levelWin = MjhlModel.instance.curBet * 1000 * 35;
                var changeDisWin = level > 1 ? true : false;
                var disWin = level > 0 ? Math.floor(levelWin / levelTimes) : destWin / updateTimes;
                var curTotalWin = 0;
                tween(_this9.Label_totalWin.node).repeatForever(tween(_this9.Label_totalWin.node).delay(dt).call(function () {
                  var doEnd = function doEnd(delay) {
                    if (delay === void 0) {
                      delay = 1.0;
                    }
                    var ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (_this9.isStopBigWin && Node_bigWinEffect.animation != ani[level]) {
                      Node_bigWinEffect.setAnimation(0, ani[level], true);
                      delay = 2.0;
                    }
                    MjhlUtils.instance.stopSound(eSound.bgmBigwinMain);
                    MjhlUtils.instance.playSound(eSound.bgmBigwinEnd);
                    // MjhlUtils.instance.stopSound(MjhlDef.eSound.bigWin);
                    // MjhlUtils.instance.playSound(MjhlDef.eSound.bigWinEnd);

                    Tween.stopAllByTarget(_this9.Node_bigWin);
                    Tween.stopAllByTarget(_this9.Label_totalWin.node);
                    curTotalWin = destWin;
                    tween(_this9.Node_bigWin).delay(delay).call(function () {
                      _this9.Node_bigWin.active = false;
                      _this9.isStopBigWin = false;
                      MjhlUtils.instance.stopSound(eSound.bgmBigwinEnd);
                      resolve();
                    }).start();
                    _this9.Label_totalWin.string = MjhlUtils.instance.numFormat(curTotalWin / 1000, 2.0);
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin > levelWin && changeDisWin) {
                      changeDisWin = false;
                      disWin = Math.floor(MjhlModel.instance.curBet * 1000 * 17 / levelTimes);
                    }
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      doEnd(MjhlModel.instance.isAuto || MjhlModel.instance.freeStatus == eRunStatus.NONE ? 2.0 : 4);
                    }
                    _this9.Label_totalWin.string = MjhlUtils.instance.numFormat(curTotalWin / 1000, 2.0);
                  }
                  if (_this9.isStopBigWin) {
                    //点击停止
                    doEnd();
                  }
                })).start();
              }).start();
            }, delay);
          });
        };
        _proto.showFree = function showFree(isShow, isEnter) {
          var _this10 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!isShow) {
            tween(this.Node_free.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              _this10.Node_free.active = false;
              var Node_enter = _this10.Node_free.getChildByName("Node_enter");
              Node_enter.active = false;
              var Node_end = _this10.Node_free.getChildByName("Node_end");
              Node_end.active = false;
              var Node_freeInfo = _this10.Node_free.getChildByName("Node_freeInfo");
              Node_freeInfo.active = false;
              MjhlUtils.instance.playBgMusic();

              //                    // this.Node_bg.active = true;
              //                    // this.Node_action.active = true;
              //                    // this.Node_menu.active = false;
              //                    // this.Button_menu.node.active = true;
              //                    // this.Button_run.node.active = true;

              if (MjhlModel.instance.isAuto) {
                _this10.scheduleOnce(function () {
                  MjhlCtrl.instance.reqBet();
                }, 0.25);
              }
            }).start();
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_Mjhl_winTip = this.Node_winTip.getComponent(Mjhl_winTip);
            com_Mjhl_winTip.doShow(MjhlModel.instance.totalFreeWin, true);
            this.Label_win.string = MjhlUtils.instance.numFormat(MjhlModel.instance.totalFreeWin / 1000, 2.0);
            MjhlUtils.instance.playSound(eSound.prizeSmallwinTotal);
            this.showTipBgAni(MjhlModel.instance.totalFreeWin);
            MjhlModel.instance.freeStatus = eRunStatus.NONE;
            return;
          }
          if (!this.Node_free.active) {
            this.scheduleOnce(function () {
              AudioManager.instance.pauseMusic();
              _this10.Node_action.active = false;
              _this10.Node_menu.active = false;
              _this10.Button_menu.node.active = false;
              _this10.Button_run.node.active = false;
              _this10.Node_free.active = true;
              var Node_enter = _this10.Node_free.getChildByName("Node_enter");
              Node_enter.active = !isEnter;
              if (!isEnter) {
                _this10.Node_free.getComponent(UIOpacity).opacity = 0;
                MjhlUtils.instance.playSound(eSound.fsWonTitle);
                //                    //enter
                var _Node_enter = _this10.Node_free.getChildByName("Node_enter");
                _Node_enter.getComponent(UIOpacity).opacity = 255;

                //                    //免费次数
                var Label_freeTimes = _Node_enter.getChildByName("Label_freeTimes");
                Label_freeTimes.getComponent(Label).string = "" + MjhlModel.instance.totalFreeTimes;
                MjhlModel.instance.totalFreeWin = 0;
                _this10.Node_helpTip.active = true;
                _this10.Node_winTip.active = false;
                _this10.Label_win.string = "0.00";
                tween(_this10.Node_free.getComponent(UIOpacity)).to(0.5, {
                  opacity: 255
                }).call(function () {
                  _this10.scheduleOnce(function () {
                    _this10.doEnterFree();
                  }, 1.0);
                }).start();
              } else {
                _this10.Node_free.getComponent(UIOpacity).opacity = 255;
                _this10.doEnterFree(isEnter);
              }
            }, 0.5);
          }
        };
        _proto.doEnterFree = function doEnterFree(isEnter) {
          if (isEnter === void 0) {
            isEnter = false;
          }
          if (!isEnter) {
            //            //enter close
            var Node_enter = this.Node_free.getChildByName("Node_enter");
            tween(Node_enter.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              Node_enter.active = false;
            }).start();
            this.Mjhl_rate.changeStatus(true);
          }
          MjhlUtils.instance.playBgMusic(eSound.freeBg);
          this.Node_bg.position = v3(0, -140, 0);
          this.Label_gold.node.position = v3(-230, -140, 0);
          this.Label_win.node.position = v3(273, -156, 0);
          this.Button_setBase.interactable = false;
          this.Button_setBase.node.position = v3(0, -123, 0);
          this.Sprite_bg.active = false;
          this.Sprite_freeBg.active = true;
          this.Sprite_bg_up.spriteFrame = this.SpriteFrame_bg_up[1];
          this.Sprite_bg_down.spriteFrame = this.SpriteFrame_bg_down[1];
          var Node_freeInfo = this.Node_free.getChildByName("Node_freeInfo");
          Node_freeInfo.active = true;
          var Label_freeTimes = Node_freeInfo.getChildByName("Label_freeTimes");
          var Sprite_title = Node_freeInfo.getChildByName("Sprite_title");
          if (MjhlModel.instance.totalFreeTimes > 0) {
            Label_freeTimes.active = true;
            Label_freeTimes.getComponent(Label).string = "" + MjhlModel.instance.totalFreeTimes;
            Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[0];
          } else {
            Sprite_title.getComponent(Sprite).spriteFrame = this.arrTitle[1];
            Label_freeTimes.active = false;
          }
          this.Node_tipBg.setAnimation(0, "normal_idle", true);
          AudioManager.instance.resumeMusic();
          if (MjhlModel.instance.freeStatus == eRunStatus.NONE) {
            MjhlModel.instance.freeStatus = eRunStatus.RUNNING;
            this.scheduleOnce(function () {
              MjhlCtrl.instance.reqBet();
            }, 0.5);
          }
        };
        _proto.doEndFree = function doEndFree() {
          var _this11 = this;
          //        //end
          var Node_end = this.Node_free.getChildByName("Node_end");
          Node_end.active = true;
          Node_end.getComponent(UIOpacity).opacity = 0;
          tween(Node_end.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).start();
          this.Node_bg.position = v3(0, 40, 0);
          this.Button_setBase.interactable = !MjhlModel.instance.isAuto;
          this.Label_gold.node.position = v3(-230, 40, 0);
          this.Button_setBase.interactable = true;
          this.Button_setBase.node.position = v3(0, 59, 0);
          this.Label_win.node.position = v3(273, 25, 0);
          var endSpine = Node_end.getComponent(sp.Skeleton);
          endSpine.setAnimation(0, "intro", false);
          endSpine.addAnimation(0, "idle", true);

          //        //免费总得分
          var Label_totalWin = Node_end.getChildByName("Label_totalWin");
          //        // Label_totalWin.getComponent(Label).string = `${MjhlModel.instance.totalFreeWin}K`;

          var destWin = MjhlModel.instance.totalFreeWin;
          var disWin = MjhlModel.instance.totalFreeWin / 10;
          var curTotalWin = 0;
          MjhlUtils.instance.playSound(eSound.bgmTotalwinMain);
          tween(Label_totalWin).repeat(11, tween(Label_totalWin).delay(0.05).call(function () {
            curTotalWin += disWin;
            if (curTotalWin > destWin) {
              curTotalWin = destWin;
            }
            Label_totalWin.getComponent(Label).string = MjhlUtils.instance.numFormat(curTotalWin / 1000, 2.0);
          })).call(function () {
            MjhlUtils.instance.stopSound(eSound.bgmTotalwinMain);
            MjhlUtils.instance.playSound(eSound.bgmTotalwinEnd);
          }).start();
          this.Node_action.active = true;
          this.Node_menu.active = false;
          this.Button_menu.node.active = true;
          this.Button_run.node.active = true;
          this.Sprite_bg.active = true;
          this.Sprite_freeBg.active = false;
          this.Sprite_bg_up.spriteFrame = this.SpriteFrame_bg_up[0];
          this.Sprite_bg_down.spriteFrame = this.SpriteFrame_bg_down[0];
          this.Node_tipBg.setAnimation(0, "free_normal_idle", true);

          //        //2.0秒后返回正常
          this.scheduleOnce(function () {
            _this11.Mjhl_rate.changeStatus(false);
            _this11.showFree(false);
          }, 4.75);
        };
        _proto.updateGold = function updateGold() {
          var _this12 = this;
          var strGold = Common.numFormat(MjhlModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            tween(this.Label_gold.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              _this12.Label_gold.string = strGold;
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
          }
        };
        _proto.initView = function initView() {
          MjhlModel.instance.curTotalWin = 0;
          var resultList = MjhlModel.instance.gameInfo.Res;
          var result = null;
          var rateIndex = 0;
          for (var i = 0; i < resultList.length; i++) {
            result = resultList[i];
            if (result.RewardMoney > 0) {
              rateIndex++;
              MjhlModel.instance.curTotalWin += result.RewardMoney;
            }
          }
          if (MjhlModel.instance.totalFreeTimes > 0) {
            this.Mjhl_rate.changeStatus(true);
            this.showFree(true, true);
          }
          var arrIndex = MjhlUtils.instance.getIndexByBaseBet(MjhlModel.instance.curBet);
          MjhlModel.instance._curIndex_baseScore = arrIndex[0];
          MjhlModel.instance._curIndex_baseRate = arrIndex[1];
          MjhlModel.instance._curIndex_baseBet = arrIndex[2];
          if (MjhlModel.instance._curIndex_baseBet <= 0) {
            MjhlModel.instance._curIndex_baseBet = 0;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
          } else {
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
          }
          this.Label_bet.string = MjhlUtils.instance.numberFormat(MjhlModel.instance.curBet, 2.0) + "K";
          if (MjhlModel.instance.curTotalWin > 0) {
            this.Mjhl_rate.doLight(rateIndex > 3 ? 3 : rateIndex);
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_Mjhl_winTip = this.Node_winTip.getComponent(Mjhl_winTip);
            com_Mjhl_winTip.doShow(MjhlModel.instance.curTotalWin, true);
            this.Label_win.string = MjhlUtils.instance.numFormat(MjhlModel.instance.curTotalWin / 1000, 2.0);
            EventManager.instance.emit(eEvent.updateWin, MjhlModel.instance.curTotalWin);
            this.showTipBgAni(MjhlModel.instance.curTotalWin);
          }
          var getFirstTag = localStorage.getItem("firstTag_mjhl");
          if (!getFirstTag) {
            var posMsg_1 = result.AllPosMsg[1];
            var posMsg_2 = result.AllPosMsg[2];
            var posMsg_3 = result.AllPosMsg[3];
            posMsg_1[1].Sym = eSymbol.BAIBAN;
            posMsg_1[2].Sym = eSymbol.SCATTER;
            posMsg_1[3].Sym = eSymbol.ZHONG;
            posMsg_1[1].IsGold = true;
            posMsg_1[2].IsGold = true;
            posMsg_1[3].IsGold = true;
            posMsg_2[1].Sym = eSymbol.WILD;
            posMsg_2[2].Sym = eSymbol.FA;
            posMsg_2[3].Sym = eSymbol.WILD;
            posMsg_2[1].IsGold = true;
            posMsg_2[2].IsGold = true;
            posMsg_2[3].IsGold = true;
            posMsg_3[1].Sym = eSymbol.BAIBAN;
            posMsg_3[2].Sym = eSymbol.SCATTER;
            posMsg_3[3].Sym = eSymbol.ZHONG;
            posMsg_3[1].IsGold = true;
            posMsg_3[2].IsGold = true;
            posMsg_3[3].IsGold = true;
            localStorage.setItem("firstTag_mjhl", "firstTag_mjhl");
          }
          this.Mjhl_symbol.initSymbolIcon(result.AllPosMsg);
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                this.initView();
                break;
              }
            case eProto.HD_History:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.Button_run.interactable = true;
                Tween.stopAllByTarget(this.Button_run.node);
                MjhlUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
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
        return MjhlGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeCool", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_tipBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Mjhl_symbol", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Button_setBase", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_autoTimes", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_run", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Skeleton_run", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_tip", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec21], {
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
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalWin", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Mjhl_rate", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_freeBg", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg_up", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_bg_down", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "SpriteFrame_bg_up", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "SpriteFrame_bg_down", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "arrTitle", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "Node_bg", [_dec33], {
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

System.register("chunks:///_virtual/MjhlModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './MjhlDef.ts'], function (exports) {
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
      cclegacy._RF.push({}, "8290czD2k5EMb+atkMnf/A9", "MjhlModel", undefined);
      var MjhlModel = exports('MjhlModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MjhlModel, _GameDef$BaseSington);
        function MjhlModel() {
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
          _this.betResult = null;
          //    //baseSet
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          _this.freeStatus = eRunStatus.NONE;
          _this.totalFreeTimes = 0;
          _this.totalFreeWin = 0;
          _this.totalFreeTimesBack = 0;
          _this.specialStartCol = 0;
          _this.curSpecialCol = 0;
          _this.selAutoIndex = 0;
          _this.autoTimes = 0;
          _this.isFreeSpecial = false;
          return _this;
        }
        var _proto = MjhlModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        return MjhlModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MjhlScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './MjhlDef.ts', './MjhlUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, MjhlUtils, Common;
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
      MjhlUtils = module.MjhlUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "6539cBRRQ9Fl7v3Ok+Ted6l", "MjhlScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MjhlScene = exports('default', (_dec = ccclass("MjhlScene"), _dec2 = menu("game/MjhlGame/MjhlScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MjhlScene, _Component);
        function MjhlScene() {
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
        var _proto = MjhlScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          MjhlUtils.instance.bundle = assetManager.getBundle(cBundle);
          MjhlUtils.instance.preLoad();
          MjhlUtils.instance.playBgMusic();
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
            //            // if (!MjhlUtils.instance.isChangeOrientation()) {
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
            MjhlUtils.instance.bundle.load("prefab/MjhlGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (MjhlUtils.instance.isChangeOrientation()) {
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
        return MjhlScene;
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

System.register("chunks:///_virtual/MjhlUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './MjhlDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, GameDef, AudioManager, eSymbol, eSound, cBaseScore, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
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
      eSymbol = module.eSymbol;
      eSound = module.eSound;
      cBaseScore = module.cBaseScore;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "28cdbYg+ppECpefsxZbSOVq", "MjhlUtils", undefined);
      var symbol_nomal_icon = ["icon_fa", "icon_zhong", "icon_baiban", "icon_8wan", "icon_5tong", "icon_5tiao", "icon_2tong", "icon_3tong", "icon_2tiao", "icon_wild", "icon_hu"];
      var symbol_dataName = ["icon", "icon_wild", "icon_hu"];
      var symbol_nomal_spine = ["fa_normal_", "zhong_normal_", "baiban_normal_", "8wan_normal_", "5tong_normal_", "5tiao_normal_", "2tong_normal_", "3tong_normal_", "2tiao_normal_", "wild", "scatter"];
      var symbol_gold_spine = ["fa_gold_", "zhong_gold_", "baiban_gold_", "8wan_gold_", "5tong_gold_", "5tiao_gold_", "2tong_gold_", "3tong_gold_", "2tiao_gold_"];
      var MjhlUtils = exports('MjhlUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MjhlUtils, _GameDef$BaseSington);
        function MjhlUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrIconSkeletonData = [];
          //0:icon, 1:icon_wild, 2:icon_hu
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = MjhlUtils.prototype;
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/MjhlGameView");
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
                  arrHLoad.push(this.asyncLoadDir("textures/item_icon", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrIconSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoad("spine/icon_effect/icon", sp.SkeletonData, function (err, spineData) {
                    if (!err) {
                      _this4.arrIconSkeletonData[spineData.name] = spineData;
                    }
                  }));
                  _context3.next = 5;
                  return Promise.all(arrHLoad);
                case 5:
                  if (cb) {
                    cb();
                  }
                case 6:
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
        _proto.playBgMusic = function playBgMusic(path) {
          if (path === void 0) {
            path = eSound.bg;
          }
          AudioManager.instance.playBgMusic(path, this.bundle, true);
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this5 = this;
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
            _this5.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this5.soundIDList[soundPath] = null;
              delete _this5.soundIDList[soundPath];
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
          var _this6 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          // MjhlUtils.instance.playSound(MjhlDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              // MjhlUtils.instance.stopSound(MjhlDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this6.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this6.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          // this.playSound(MjhlDef.eSound.numAdd);

          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              // MjhlUtils.instance.stopSound(MjhlDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this7.numberFormatFloat(curWin, 0) : "" + _this7.numberFormat(curWin, 0);
          })).delay(2.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.getItemSymbolBox = function getItemSymbolBox(isRunning, isGold) {
          if (isRunning === void 0) {
            isRunning = false;
          }
          if (isGold === void 0) {
            isGold = false;
          }
          if (this.arrIconSpriteFrame) {
            var strName = isGold ? "symbol_bg_gold" : "symbol_bg";
            strName = isRunning ? strName + "_blur" : strName;
            return this.arrIconSpriteFrame[strName];
          }
        };
        _proto.getItemSymbolIcon = function getItemSymbolIcon(symbolIndex, isRunning) {
          if (isRunning === void 0) {
            isRunning = false;
          }
          if (this.arrIconSpriteFrame) {
            var strName = symbol_nomal_icon[symbolIndex - 1];
            strName = isRunning ? strName + "_blur" : strName;
            return this.arrIconSpriteFrame[strName];
          }
        };
        _proto.getItemSymbolSpine = function getItemSymbolSpine(symbolIndex, isGold) {
          if (this.arrIconSkeletonData) {
            // let symbol = symbolIndex < MjhlDef.eSymbol.WILD ? 0 : symbolIndex == MjhlDef.eSymbol.WILD ? 1 : 2;
            var symbol = 0;
            return this.arrIconSkeletonData[symbol_dataName[symbol]];
          }
          return null;
        };
        _proto.getSymbolAniName = function getSymbolAniName(symbolIndex, isGold, isIdle) {
          if (isIdle === void 0) {
            isIdle = true;
          }
          switch (symbolIndex) {
            case eSymbol.WILD:
              {
                return isIdle ? "wild_idle" : "wild_win";
              }
            case eSymbol.SCATTER:
              {
                return isIdle ? "scatter_idle" : "scatter_intro";
              }
            default:
              {
                var iIndex = symbolIndex - 1;
                var rootName = isGold ? symbol_gold_spine[iIndex] : symbol_nomal_spine[iIndex];
                return isIdle ? rootName + "idle" : rootName + "win";
              }
          }
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          Common.changeNodeEffect(btnNode, isGray);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
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
        _proto.numFormat = function numFormat(num, digits) {
          var inter = Common.numFormatInt(num);
          var digit = this.numberFormatD(num, digits); //this.numberFormatFloatD(num, digits);
          return "" + inter + digit + "k";
        };
        return MjhlUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MjhlGame', 'chunks:///_virtual/MjhlGame'); 
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