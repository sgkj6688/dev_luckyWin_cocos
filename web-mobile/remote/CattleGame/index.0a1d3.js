System.register("chunks:///_virtual/Cattle_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, sp, Node, Component, Class, MainManager;
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
      Class = module.Class;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "eb32cx8QAZEu6G+9nPaLkVN", "Cattle_btnEffect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var setEnumAttr = function setEnumAttr(obj, propName, enumDef) {
        //@ts-ignore
        Class.Attr.setClassAttr(obj, propName, "type", "Enum");
        //@ts-ignore
        Class.Attr.setClassAttr(obj, propName, "enumList", Enum.getList(enumDef));
      };
      var Cattle_btnEffect = exports('default', (_dec = ccclass("CattleBtnEffect"), _dec2 = menu("game/CattleGame/Cattle_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_btnEffect, _Component);
        function Cattle_btnEffect() {
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
        var _proto = Cattle_btnEffect.prototype;
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
          //        // change enum
          setEnumAttr(this, "_animation", animEnum || DefaultAnimsEnum);
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          if (this.Node_effect) {
            this.Node_effect.destroyFromParent();
            this.Node_effect = null;
          }
          EventManager.on("onMouseMoveIn" + this.node.name, function (event) {
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
          EventManager.on("onMouseMoveOut" + this.node.name, function (event) {
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
          EventManager.off("onMouseMoveIn" + this.node.name);
          EventManager.off("onMouseMoveOut" + this.node.name);
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

        _createClass(Cattle_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
          }
        }]);
        return Cattle_btnEffect;
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

System.register("chunks:///_virtual/Cattle_helpTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleModel.ts', './CattleDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Tween, UITransform, tween, v3, Component, CattleModel, eRunStatus;
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
      CattleModel = module.CattleModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a59a2SSffRBzbKmTXc9BhbU", "Cattle_helpTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Cattle_helpTip = exports('default', (_dec = ccclass("CattleHelpTip"), _dec2 = menu("game/CattleGame/Cattle_helpTip"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_helpTip, _Component);
        function Cattle_helpTip() {
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
        var _proto = Cattle_helpTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.doShow();
        };
        _proto.onDisable = function onDisable() {
          // this.Sprite_tip.node.getPosition().x = 0;
          this.Sprite_tip.node.setPosition(0, this.Sprite_tip.node.position.y);
          Tween.stopAllByTarget(this.Sprite_tip.node);
        };
        _proto.doShow = function doShow() {
          var _this2 = this;
          var len = this.arrSpriteFrame.length;
          this.curIndex = (this.curIndex + 1) % len;
          if (CattleModel.instance.freeStatus != eRunStatus.NONE) {
            this.curIndex = 0;
          } else if (this.curIndex == 0) {
            this.curIndex = 1;
          }
          this.Sprite_tip.spriteFrame = this.arrSpriteFrame[this.curIndex];
          if (this.Sprite_tip.node.getComponent(UITransform).width > this.node.getComponent(UITransform).width) {
            //            //
            var disX = (this.Sprite_tip.node.getComponent(UITransform).width - this.node.getComponent(UITransform).width) / 2.0 + 30;
            // this.Sprite_tip.node.getPosition().x = disX;

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
        return Cattle_helpTip;
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

System.register("chunks:///_virtual/Cattle_history.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './CattleCtrl.ts', './CattleDef.ts', './GameDef.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Common, CattleCtrl, eProto, GameDef;
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
      Common = module.Common;
    }, function (module) {
      CattleCtrl = module.CattleCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "98ad72TKOBMKobYQRgaEpmH", "Cattle_history", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Cattle_history = exports('default', (_dec = ccclass("CattleHistory"), _dec2 = menu("game/CattleGame/Cattle_history"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Cattle_history, _GameDef$BaseView);
        function Cattle_history() {
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
        var _proto = Cattle_history.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CattleCtrl.instance);
          CattleCtrl.instance.reqHistory();
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
          CattleCtrl.instance.reqHistory(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          CattleCtrl.instance.reqHistory(start);
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
        return Cattle_history;
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

System.register("chunks:///_virtual/Cattle_historyItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './CattleUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common, CattleUtils;
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
      Common = module.Common;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "19a9dGoabxLs79MFoDRa+Q3", "Cattle_historyItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Cattle_historyItem = exports('default', (_dec = ccclass("CattleHistoryItem"), _dec2 = menu("game/CattleGame/Cattle_historyItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_historyItem, _Component);
        function Cattle_historyItem() {
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
        var _proto = Cattle_historyItem.prototype;
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
          this.Label_bet.string = CattleUtils.instance.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + CattleUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + CattleUtils.instance.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(Cattle_historyItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Cattle_historyItem;
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

System.register("chunks:///_virtual/Cattle_rank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './CattleCtrl.ts', './CattleDef.ts', './GameDef.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Common, CattleCtrl, eProto, GameDef;
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
      Common = module.Common;
    }, function (module) {
      CattleCtrl = module.CattleCtrl;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      GameDef = module.GameDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "81873tYXk9LvIXP05EQWjep", "Cattle_rank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var Cattle_rank = exports('default', (_dec = ccclass("CattleRank"), _dec2 = menu("game/CattleGame/Cattle_rank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(Cattle_rank, _GameDef$BaseView);
        function Cattle_rank() {
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
        var _proto = Cattle_rank.prototype;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CattleCtrl.instance);
          Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
          CattleCtrl.instance.reqRank();
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
        return Cattle_rank;
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

System.register("chunks:///_virtual/Cattle_rankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './CattleUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, CattleUtils;
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
      CattleUtils = module.CattleUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "55363z+gS5G1r+VFuYKNOaU", "Cattle_rankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Cattle_rankItem = exports('default', (_dec = ccclass("CattleRankItem"), _dec2 = menu("game/CattleGame/Cattle_rankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_rankItem, _Component);
        function Cattle_rankItem() {
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
        var _proto = Cattle_rankItem.prototype;
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
          this.Label_win.string = CattleUtils.instance.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Cattle_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Cattle_rankItem;
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

System.register("chunks:///_virtual/Cattle_ScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleModel.ts', './CattleDef.ts', './CattleUtils.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, CattleModel, eAutoRateType, eConstDef, eEvent, CattleUtils, MainManager;
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
      CattleModel = module.CattleModel;
    }, function (module) {
      eAutoRateType = module.eAutoRateType;
      eConstDef = module.eConstDef;
      eEvent = module.eEvent;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8086dX2l5xHj4ZD+/OwvvXY", "Cattle_ScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Cattle_ScrollView = exports('default', (_dec = ccclass("CattleScrollView"), _dec2 = menu("game/CattleGame/Cattle_ScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_ScrollView, _Component);
        function Cattle_ScrollView() {
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
        var _proto = Cattle_ScrollView.prototype;
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
                this._curIndex = CattleModel.instance._curIndex_baseScore;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = CattleModel.instance._curIndex_baseRate;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = CattleModel.instance._curIndex_baseBet;
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
                  EventManager.emit(eEvent.onSetBase, _this2.type, _this2._curIndex);
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
                var strNum = CattleUtils.instance.numberFormat(num, 2);
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
                var _strNum = CattleUtils.instance.numberFormat((baseScore == 0 ? eConstDef.CBaseBet_0 : baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (baseRate + 1) * eConstDef.CBaseRate, 2);
                gts.Debug.LogWarr("getDefaultValue=baseScore=" + baseScore + "==baseRate=" + (baseRate + 1) + "==strNum=" + _strNum + "=");
                //                // (baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20, 2);
                //                // let strNum = Math.floor((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20) + "K";
                return _strNum + "K";
              }
          }
        };
        return Cattle_ScrollView;
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

System.register("chunks:///_virtual/Cattle_setAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleModel.ts', './CattleDef.ts', './ViewManager.ts', './Common.ts', './CattleUtils.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Button, Sprite, color, Component, CattleModel, eEvent, ViewManager, Common, CattleUtils, MainManager;
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
      Button = module.Button;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      CattleModel = module.CattleModel;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "39c26zNbB9FzJxewS2njQPX", "Cattle_setAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Cattle_setAuto = exports('default', (_dec = ccclass("CattleSetAuto"), _dec2 = menu("game/CattleGame/Cattle_setAuto"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_setAuto, _Component);
        function Cattle_setAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_ok", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Cattle_setAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(CattleModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (CattleModel.instance.curTotalWin > 0) {
            this.Label_win.string = CattleUtils.instance.numberFormat(CattleModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
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
                EventManager.emit(eEvent.onSetAuto, 0);
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  CattleModel.instance.selAutoIndex = parseInt(this.selNode.name.replace("Node_item_", ""));
                  var times = arrTimes[CattleModel.instance.selAutoIndex];
                  EventManager.emit(eEvent.onSetAuto, times);
                  //                    // let autoGold = CattleModel.instance.curBet * 1000 * times;
                  //                    // if (CattleModel.instance.curBalance < autoGold) {
                  //                    //     times = Math.floor(CattleModel.instance.curBalance / (CattleModel.instance.curBet * 1000));

                  //                    //     if (times > 0) {
                  //                    //         EventManager.instance.emit(CattleDef.eEvent.onSetAuto, times);
                  //                    //     } else {
                  //                    //         Common.showTip(i18n.lang[10001], !CattleUtils.instance.isChangeOrientation());
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
        return Cattle_setAuto;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec6], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cattle_setBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './CattleModel.ts', './CattleDef.ts', './ViewManager.ts', './CattleUtils.ts', './Cattle_ScrollView.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, tween, Component, Common, CattleModel, eEvent, eAutoRateType, ViewManager, CattleUtils, Cattle_ScrollView, MainManager;
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
      Common = module.Common;
    }, function (module) {
      CattleModel = module.CattleModel;
    }, function (module) {
      eEvent = module.eEvent;
      eAutoRateType = module.eAutoRateType;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      Cattle_ScrollView = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "2e8d57fUElBlLZc5HjZ8Y6w", "Cattle_setBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      // // @inspector("packages://autoproperty/inspector.js")
      var Cattle_setBase = exports('default', (_dec = ccclass("CattleSetBase"), _dec2 = menu("game/CattleGame/Cattle_setBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_setBase, _Component);
        function Cattle_setBase() {
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
        var _proto = Cattle_setBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(CattleModel.instance.curBalance);
          this.Label_gold.string = gold;
          if (CattleModel.instance.curTotalWin > 0) {
            this.Label_win.string = CattleUtils.instance.numberFormat(CattleModel.instance.curTotalWin / 1000, 2.0) + "K";
          } else {
            this.Label_win.string = "0.00";
          }
          this.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
          this._curIndex_baseScore = CattleModel.instance._curIndex_baseScore;
          this._curIndex_baseRate = CattleModel.instance._curIndex_baseRate;
          this._curIndex_baseBet = CattleModel.instance._curIndex_baseBet;
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(eEvent.onSetBase, this.onSetBase, this);
          EventManager.on(eEvent.updateWin, this.updateWin, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(eEvent.onSetBase, this.onSetBase, this);
          EventManager.off(eEvent.updateWin, this.updateWin, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {
          var _this2 = this;
          if (RewardMoney == 0) {
            if (CattleModel.instance.curTotalWin > 0) {
              this.Label_win.string = CattleUtils.instance.numberFormat(CattleModel.instance.curTotalWin / 1000, 2.0) + "K";
            } else {
              this.Label_win.string = "0.00";
            }
            return;
          }
          var destWin = CattleModel.instance.curTotalWin + RewardMoney;
          var disWin = RewardMoney / 10;
          tween(this.Label_win.node).repeat(11, tween(this.Label_win.node).delay(0.05).call(function () {
            CattleModel.instance.curTotalWin += disWin;
            if (CattleModel.instance.curTotalWin > destWin) {
              CattleModel.instance.curTotalWin = destWin;
            }
            _this2.Label_win.string = CattleUtils.instance.numberFormat(CattleModel.instance.curTotalWin / 1000, 2.0) + "K";
          })).start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Cattle_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(Cattle_ScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(Cattle_ScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(Cattle_ScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(Cattle_ScrollView).doReset();
                this.scrollView_baseRate.getComponent(Cattle_ScrollView).doReset();
                this.scrollView_baseBet.getComponent(Cattle_ScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                CattleModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                CattleModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                CattleModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                EventManager.emit(eEvent.updateBaseBet);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return Cattle_setBase;
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

System.register("chunks:///_virtual/Cattle_shake.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      // import * as cc from "cc";
      cclegacy._RF.push({}, "f4676vo3CVGPpYh+C8MdtDQ", "Cattle_shake", undefined);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cattle_symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleModel.ts', './CattleDef.ts', './CattleUtils.ts', './Cattle_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Prefab, instantiate, tween, v3, Component, CattleModel, eRunStatus, eConstDef, eSymbol, eSound, CattleUtils, Cattle_symbolItem;
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
      CattleModel = module.CattleModel;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eSound = module.eSound;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      Cattle_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3;
      cclegacy._RF.push({}, "46011P1qT1CGqh9IP5oh1g8", "Cattle_symbol", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Cattle_symbol = exports('default', (_dec = ccclass("CattleSymbol"), _dec2 = menu("game/CattleGame/Cattle_symbol"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_symbol, _Component);
        function Cattle_symbol() {
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
        var _proto = Cattle_symbol.prototype;
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
            if (openResult.openNums == null) {
              gts.Debug.Log("===openResult.openNums==null===");
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
              bonusSymbol: Math.floor(Math.random() * eSymbol.WILD) + 1,
              //CattleDef.eSymbol.A,
              IsReward: false
            };

            //            // if (CattleModel.instance.freeStatus == CattleDef.eRunStatus.START) {
            //            //     itemInfo.bonusSymbol = CattleDef.eSymbol.Blank;
            //            // } else if (CattleModel.instance.freeStatus == CattleDef.eRunStatus.RUNNING) {
            //            //     let randSymbol = Math.floor(Math.random() * 10);
            //            //     itemInfo.bonusSymbol = randSymbol > 5 ? CattleDef.eSymbol.Special : CattleDef.eSymbol.Blank; //CattleDef.eSymbol.A
            //            //     itemInfo.amount = Math.random() * 5000 + 1000;

            //            //     gts.Debug.LogWarr("==randSymbol==" + randSymbol + "==itemInfo==" + JSON.stringify(itemInfo));
            //            // }
          }

          var newItem = instantiate(this.Node_itemTemp);
          this.node.parent.addChild(newItem);
          toLength = toLength || this._curLength;

          //        //POSITON
          var cSymbolStartY = this.maxIndex % 2 == 0 ? -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) : -eConstDef.cSymbolH * Math.floor(this.maxIndex / 2) - eConstDef.cSymbolH / 2;
          var offsetY = (toLength + 0.5) * eConstDef.cSymbolH;
          newItem.setPosition(this.node.getPosition().x, cSymbolStartY + offsetY);

          //        //
          var com = newItem.getComponent(Cattle_symbolItem);
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
            // symbolNode.getPosition().y += 525;
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
              CattleModel.instance.isQuickStop ? function () {
                _this3._runStatus = eRunStatus.STOP;
                _this3._speed = 2500;
              }() : function () {
                _this3._runStatus = eRunStatus.STOPPING;
              }();
            }, stopDelay);

            //            //test
            _this3._resultInfoList = _this3.getResult(CattleModel.instance.betResult.Res[0]);

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
                      if (!CattleModel.instance.isQuickStop) {
                        CattleUtils.instance.playOneShot(eSound.spinStop);
                      }
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
                    if (CattleModel.instance.isQuickStop) {
                      CattleUtils.instance.playOneShot(eSound.spinStopQuick);
                    }
                    _this3._runStatus = eRunStatus.NONE;
                    _this3.scheduleOnce( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      var arrPro, _iterator2, _step2, _symbol2;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            arrPro = [];
                            for (_iterator2 = _createForOfIteratorHelperLoose(_this3._symbolList); !(_step2 = _iterator2()).done;) {
                              _symbol2 = _step2.value;
                              arrPro.push(_symbol2.doStop());
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
            //            // arrPro.push(symbol.doEffect(Cattle_symbol.rewardCount * 0.15));

            if (symbol.itemInfo.IsReward) {
              Cattle_symbol.rewardCount++;
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
            if (symbol.itemInfo.bonusSymbol == eSymbol.WILD) {
              arrPro.push(symbol.doGoldCollect(Cattle_symbol.goldCount * 0.05, collectType));
              Cattle_symbol.goldCount++;
            }
          }
          return Promise.all(arrPro);
        };
        _proto.doClear = /*#__PURE__*/function () {
          var _doClear = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  Cattle_symbol.goldCount = 0;
                  Cattle_symbol.rewardCount = 0;

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
        return Cattle_symbol;
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

System.register("chunks:///_virtual/Cattle_symbolEffectRoot.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleDef.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sp, Component, eEvent, MainManager;
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
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "66a85evhfpI+os7oeHhUKs5", "Cattle_symbolEffectRoot", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Cattle_symbolEffectRoot = exports('default', (_dec = ccclass("CattleSymbolEffectRoot"), _dec2 = menu("game/CattleGame/Cattle_symbolEffectRoot"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_symbolEffectRoot, _Component);
        function Cattle_symbolEffectRoot() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "prefab_symbolEffect", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Cattle_symbolEffectRoot.prototype;
        //    // onLoad () {}
        _proto.onEnable = function onEnable() {
          EventManager.on(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.on(eEvent.onDelEffect, this.onDelEffect, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(eEvent.onAddEffect, this.onAddEffect, this);
          EventManager.off(eEvent.onDelEffect, this.onDelEffect, this);
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
        return Cattle_symbolEffectRoot;
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

System.register("chunks:///_virtual/Cattle_symbolInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './CattleDef.ts', './Cattle_symbolItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, tween, v3, UIOpacity, instantiate, UITransform, Sprite, Label, Component, AutoChangeParent, eSymbol, Cattle_symbolItem;
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
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      eSymbol = module.eSymbol;
    }, function (module) {
      Cattle_symbolItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "cd06fUknBVI5K3vvm3pdM5m", "Cattle_symbolInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eRate = [200, 100, 50, 20, 10, 5, 3];
      var Cattle_symbolInfo = exports('default', (_dec = ccclass("CattleSymbolInfo"), _dec2 = menu("game/CattleGame/Cattle_symbolInfo"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_symbolInfo, _Component);
        function Cattle_symbolInfo() {
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
        var _proto = Cattle_symbolInfo.prototype;
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
          this.Node_icon.active = true;
          this.Node_info.active = true;
          this.Node_item.removeAllChildren();
          var newSymbol = instantiate(symbolNode);
          newSymbol.removeComponent(AutoChangeParent);
          newSymbol.position = v3(0);
          newSymbol.name = "Node_symbol";
          this.Node_item.addChild(newSymbol);
          //        // newSymbol.scale = symbol.bonusSymbol == CattleDef.eSymbol.WILD ? 1.1 : 0.7;

          var symbolItem = this.Node_item.getComponent(Cattle_symbolItem);
          symbolItem.itemInfo = symbol;
          switch (symbol.bonusSymbol) {
            case eSymbol.WILD:
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
          symbolItem.Node_symbol = newSymbol;
          symbolItem.updateIcon(symbol.bonusSymbol, true, false);

          //        // let itemSpine = newSymbol.getComponent(sp.Skeleton);
          //        // if (itemSpine) {
          //        //     itemSpine.setAnimation(
          //        //         0,
          //        //         CattleUtils.instance.getSymbolAniName(symbol.bonusSymbol, false),
          //        //         symbol.bonusSymbol == CattleDef.eSymbol.WILD ? true : false
          //        //     );
          //        // }

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
        return Cattle_symbolInfo;
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

System.register("chunks:///_virtual/Cattle_symbolItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleModel.ts', './CattleDef.ts', './CattleUtils.ts', './AutoChangeParent.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, sp, Sprite, UITransform, tween, Node, v2, Vec2, UIOpacity, instantiate, isValid, Component, CattleModel, eConstDef, eSymbol, eRunStatus, eZindex, eEvent, eSound, CattleUtils, AutoChangeParent, MainManager;
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
      UITransform = module.UITransform;
      tween = module.tween;
      Node = module.Node;
      v2 = module.v2;
      Vec2 = module.Vec2;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      CattleModel = module.CattleModel;
    }, function (module) {
      eConstDef = module.eConstDef;
      eSymbol = module.eSymbol;
      eRunStatus = module.eRunStatus;
      eZindex = module.eZindex;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "c4153em/uRNPag1DTmQWvLh", "Cattle_symbolItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Cattle_symbolItem = exports('default', (_dec = ccclass("CattleSymbolItem"), _dec2 = menu("game/CattleGame/Cattle_symbolItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_symbolItem, _Component);
        function Cattle_symbolItem() {
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
        var _proto = Cattle_symbolItem.prototype;
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
            this.Node_effectRoot = Node_center.getChildByName("Node_effectRoot");
          }
          this.Node_symbol = this.node.getChildByName("Node_symbol");
          if (CattleModel.instance.specialStartCol > 0 && this._iCol == CattleModel.instance.specialStartCol) {
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
          isSpine = !isIdle || this.itemInfo.bonusSymbol == eSymbol.WILD ? true : false;
          var nomalScale = this.itemInfo.bonusSymbol == eSymbol.WILD ? 0.7 : 0.7;
          var toScale = this.itemInfo.bonusSymbol == eSymbol.WILD ? 0.75 : 0.75;
          this.Node_symbol.scale = v3(!isIdle ? toScale : nomalScale, !isIdle ? toScale : nomalScale, 1);
          if (!isSpine) {
            var itemSpine = this.Node_symbol.getComponent(sp.Skeleton);
            if (itemSpine) {
              itemSpine.enabled = false;
              itemSpine.destroy();
            }
            this.scheduleOnce(function () {
              var itemSymbol = CattleUtils.instance.getItemSymbolIcon(Sym);
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
              var itemSymbol = CattleUtils.instance.getSkeletonData(Sym);
              var itemSpine = _this2.Node_symbol.getComponent(sp.Skeleton);
              if (!itemSpine) {
                itemSpine = _this2.Node_symbol.addComponent(sp.Skeleton);
              }
              itemSpine.premultipliedAlpha = true;
              //                // itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = itemSymbol;
              itemSpine.setAnimation(0, CattleUtils.instance.getSymbolAniName(Sym, isIdle), Sym == eSymbol.WILD ? true : !isIdle);
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
                _zIndex = CattleModel.instance.specialStartCol > 0 && this._iCol == CattleModel.instance.specialStartCol ? eZindex.SPECIAL - 2 * this._iCol : _zIndex;
                this.node.getComponent(UITransform).priority = _zIndex;
                break;
              }
            case eRunStatus.STOP:
              {
                this.node.getComponent(UITransform).priority = _zIndex;
                this.doBindToUp(CattleModel.instance.specialStartCol == -1 && this.itemInfo.IsReward);
                break;
              }
            case eRunStatus.CLEAR:
              {
                if (CattleModel.instance.freeStatus == eRunStatus.RUNNING) {
                  this.doBindToUp(this.itemInfo.IsReward);
                }
                this.node.getComponent(UITransform).priority = eZindex.iconWin;
                break;
              }
          }
        };
        _proto.onSymbolClick = function onSymbolClick() {
          if (CattleModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var pos = this.Node_symbol.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
          EventManager.emit(eEvent.onSymbolClick, this.itemInfo, this.Node_symbol, pos);
          CattleUtils.instance.playOneShot(eSound.uiInfo);
        };
        _proto.doRunning = function doRunning(offset) {
          var ret = true;
          // this.node.getPosition().y -= offset;
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
              if (_this3.itemInfo.bonusSymbol == eSymbol.WILD) {
                CattleUtils.instance.playOneShot(eSound.symWildSpawn);
              }
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
            CattleUtils.instance.playOneShot(eSound.symWildReach);
            if (collectType == 0) {
              var newNode = new Node();
              newNode.addComponent(UITransform);
              newNode.getComponent(UITransform).priority = 1000;
              _this4.Node_symbol.addChild(newNode);
              var itemSpine = newNode.addComponent(sp.Skeleton);
              itemSpine.premultipliedAlpha = false;
              itemSpine.useTint = true;
              itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
              itemSpine.skeletonData = CattleUtils.instance.getSkeletonData("kuang_effect");
              itemSpine.setAnimation(0, "wild_win", false);
              itemSpine.setCompleteListener(function () {
                itemSpine.setCompleteListener(null);
                newNode.destroyFromParent();

                //                    //添加光点
                var flyNode = new Node();
                var wPos = _this4.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                var nPos = _this4.Node_effectRoot.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(wPos);
                flyNode.position = nPos;
                _this4.Node_effectRoot.parent.parent.addChild(flyNode);
                var cSpine = flyNode.addComponent(sp.Skeleton);
                cSpine.premultipliedAlpha = false;
                cSpine.useTint = true;
                cSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                cSpine.skeletonData = CattleUtils.instance.getSkeletonData("fly_lizi");
                cSpine.setAnimation(0, "idle", true);

                //                    //doMove
                var startPos = v2(nPos.x, nPos.y);
                var endPos = collectType == 0 ? v2(225, -190) : v2(0, -100);
                var duration = Vec2.distance(startPos, endPos) / 2500;
                //                    // duration = collectType == 1 ? (duration < 0.25 ? 0.25 : duration) : duration;
                //                    // duration = 1;
                tween(flyNode).to(0.1, {
                  scale: v3(2, 2, 1)
                }).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -10 : 10), (startPos.y + endPos.y) * 0.5), endPos).call(function () {
                  CattleUtils.instance.playOneShot(eSound.voxWild);
                  EventManager.emit(eEvent.onGoldCollect, collectType);
                  tween(flyNode.getComponent(UIOpacity)).to(0.2, {
                    opacity: 0
                  }).start();
                }).delay(0.7).call(function () {
                  flyNode.destroyFromParent();
                  resolve();
                }).start();
              });
            } else {
              var Node_root = _this4.Node_effectRoot.parent.parent; //Node_root
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
              var endPos = collectType == 0 ? v2(225, -190) : v2(0, -100);
              var duration = Vec2.distance(startPos, endPos) / 800;
              //                // duration = collectType == 1 ? (duration < 0.25 ? 0.25 : duration) : duration;
              //                // duration = 1;
              tween(_newNode).delay(1.0).to(0.1, {
                scale: v3(2, 2, 1)
              }).parallel(tween(_newNode).call(function () {
                tween(_newNode.getComponent(UIOpacity)).to(duration, {
                  opacity: 80
                }).start();
              }), tween(_newNode).bezierTo(duration, startPos, v2(startPos.x + (startPos.x < 0 ? -100 : 100), (startPos.y + endPos.y) * 0.5), endPos)).call(function () {
                EventManager.emit(eEvent.onGoldCollect, collectType);
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
            var newNode = new Node("kuang_effect");
            newNode.scale = v3(1.0, 1.0, 1);
            var itemSpine = newNode.addComponent(sp.Skeleton);
            itemSpine.premultipliedAlpha = true;
            itemSpine.useTint = true;
            itemSpine.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            itemSpine.skeletonData = CattleUtils.instance.getSkeletonData("kuang_effect");
            itemSpine.setAnimation(0, "win", false);
            itemSpine.setCompleteListener(function () {
              itemSpine.setCompleteListener(null);
              itemSpine.setAnimation(0, "idle", true);
              resolve();
            });
            var wPos = _this6.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var nPos = _this6.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            newNode.position = nPos;
            _this6.Node_effectRoot.addChild(newNode);
            //            // this.node.addChild(newNode);

            if (_this6.itemInfo.bonusSymbol == eSymbol.WILD) {
              newNode.getComponent(UITransform).priority = 5;
              _this6.Node_symbol.getComponent(UITransform).priority = 10;
            } else {
              newNode.getComponent(UITransform).priority = 5;
              _this6.Node_symbol.getComponent(UITransform).priority = 10;
            }
            _this6._spineEffect_kuang = itemSpine;
          });
        };
        _proto.doShowResultEffect = function doShowResultEffect(isShow) {
          var _this7 = this;
          if (this._spineEffect_kuang) {
            this.scheduleOnce(function () {
              if (!isValid(_this7._spineEffect_kuang.node)) {
                return;
              }
              _this7._spineEffect_kuang.setAnimation(0, "win", false);
              _this7._spineEffect_kuang.addAnimation(0, "idle", true);
              _this7._spineEffect_kuang.node.active = isShow;
              _this7.node.getComponent(UITransform).priority = isShow ? eZindex.iconWin : eZindex.icon;
              var nomalScale = _this7.itemInfo.bonusSymbol == eSymbol.WILD ? 0.7 : 0.7;
              var toScale = _this7.itemInfo.bonusSymbol == eSymbol.WILD ? 0.75 : 0.75;
              var delay = isShow ? 0.1 : 0;
              tween(_this7.Node_symbol).delay(delay).to(0.1, {
                scale: v3(isShow ? toScale : nomalScale, isShow ? toScale : nomalScale, 1)
              }).call(function () {
                var symAni = _this7.Node_symbol.getComponent(sp.Skeleton);
                if (symAni) {
                  symAni.paused = !isShow;
                  if (_this7.itemInfo.IsReward) {
                    _this7.doBindToUp(isShow);
                  }
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
        _proto.doBindToUp = function doBindToUp(isBind) {
          var _this9 = this;
          if (isBind === void 0) {
            isBind = true;
          }
          var AutoChange = AutoChangeParent.Bind(this.Node_symbol, isBind ? this.Node_effectRoot : this.node, true).OnUpdateNotify(function (dt) {
            if (!_this9.node || !_this9.Node_symbol) {
              return;
            }
            if (_this9.node.parent) {
              _this9.Node_symbol.getComponent(UIOpacity).opacity = _this9.node.getComponent(UIOpacity).opacity;
              _this9.Node_symbol.active = _this9.node.active;
              _this9.Node_symbol.scale = v3(_this9.node.scale.x * _this9.Node_symbol.scale.x, _this9.node.scale.y * _this9.Node_symbol.scale.y, 1);
            } else {
              _this9.Node_symbol.destroy();
              _this9.node.destroy();
            }
          }, this);
          AutoChange.DoChange();
        };
        return Cattle_symbolItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Cattle_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CattleUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, CattleUtils;
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
      CattleUtils = module.CattleUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "da943nzM5xEVrR1m1SFNeFP", "Cattle_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Cattle_winTip = exports('default', (_dec = ccclass("CattleWinTip"), _dec2 = menu("game/CattleGame/Cattle_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Cattle_winTip, _Component);
        function Cattle_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Cattle_winTip.prototype;
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
            _this2.Label_win.string = "" + CattleUtils.instance.numberFormatFloat(gold / 1000, 2.0);
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
            CattleUtils.instance.updateLabelFormat(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              //                    // this.Label_win.string = `${CattleUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1)
            }).start();
            CattleUtils.instance.updateLabelFormat(this.Label_win, gold);
          }
        };
        return Cattle_winTip;
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

System.register("chunks:///_virtual/CattleCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './CattleModel.ts', './I18n.ts', './ViewManager.ts', './CattleDef.ts', './CattleUtils.ts', './Common.ts', './MainManager.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, CattleModel, i18n, ViewManager, eProto, eEvent, eRunStatus, CattleUtils, Common, MainManager, DataManager, UserKey;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      CattleModel = module.CattleModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fc5f1Gar6tERo2T0TRkaVZG", "CattleCtrl", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var NetManager = MainManager.instance.getNetManager();
      var CattleCtrl = exports('CattleCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(CattleCtrl, _GameDef$BaseCtrl);
        function CattleCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._model = null;
          //    /**
          //     * 请求下注
          //     * @param data
          //     */
          _this.isReqBet = false;
          _this._configManager = ConfigManager;
          _this._eventManager = EventManager;
          _this._netManager = NetManager;
          _this._model = CattleModel.instance;
          NetManager.waitServiceSendData();
          return _this;
        }
        var _proto = CattleCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete CattleCtrl._instance;
          CattleCtrl._instance = null;
          CattleModel.destroy();
          CattleUtils.destroy();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.on(value, this.onRecvData, this);
          }

          //        // //注册网络监听--大厅
          EventManager.on(ConfigManager.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.on(ConfigManager.protocolHall.getWallet, this.onRecvData, this);
          EventManager.on(ConfigManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //        //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.off(value, this.onRecvData, this);
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
          var curBet = Math.floor(CattleModel.instance.curBet);
          if (buyFree) {
            CattleModel.instance.curTotalBet = curBet * 1000 * 50;
            NetManager.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000,
              buyFree: true
            });
          } else {
            CattleModel.instance.curTotalBet = curBet * 1000;
            NetManager.sendOnlineData(eProto.HD_Bet, {
              betAmount: "" + curBet * 1000
            });
          }
        }
        //    /**请求排行榜 */
        ;

        _proto.reqRank = function reqRank(curPage) {
          NetManager.sendOnlineData(eProto.HD_Rank, {
            gameType: "slotFortuneOx"
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
          NetManager.sendOnlineData(eProto.HD_History, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "slotFortuneOx"
          });
        }
        //    /**请求进入房间 */
        ;

        _proto.reqEnterRoom = function reqEnterRoom() {
          //        // NetManager.instance.sendOnlineData(CattleDef.eProto.HD_info, { betAmount: CattleModel.instance.curBet * 1000 });
        };
        _proto.reqJoinChat = function reqJoinChat() {
          NetManager.sendOnlineData(ConfigManager.protocolChat.joinChat, {
            groupId: "slotFortuneOx"
          }); //加入聊天
          NetManager.sendOnlineData(ConfigManager.protocolChat.getChatRecord, {
            groupId: "slotFortuneOx",
            size: 20
          });
        };
        _proto.reqExitChat = function reqExitChat() {
          NetManager.sendOnlineData(ConfigManager.protocolChat.exitChat, {
            groupId: "slotFortuneOx"
          }); //退出出聊天室
        };

        _proto.reqSendChat = function reqSendChat(strContent) {
          var date = new Date();
          var msgid = DataManager.instance.getUserDataForKey(UserKey.OID) + date.getTime() + "";
          this._netManager.sendOnlineData(ConfigManager.protocolChat.sendChat, {
            groupId: "slotFortuneOx",
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
              Common.showTip(i18n.errTip(data.Code), !CattleUtils.instance.isChangeOrientation());
            }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
              if (CattleModel.instance.isAuto) {
                CattleModel.instance.isAuto = false;
                EventManager.emit(eEvent.onAutoClose);
              }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            //            // case CattleDef.eProto.HD_info: {
            //            //     ViewManager.instance.closeWait();

            //            //     // if (CattleModel.instance.gameStatus != CattleDef.eRunStatus.NONE) {
            //            //     //     return;
            //            //     // }
            //            //     CattleModel.instance.clearGameData();

            //            //     CattleModel.instance.gameInfo = data.Data;

            //            //     for (const InitPosMsg of CattleModel.instance.gameInfo.InitPosMsg) {
            //            //         for (const info of InitPosMsg) {
            //            //             info.IsReward = false;
            //            //         }
            //            //     }
            //            //     CattleModel.instance.totalRate = CattleModel.instance.gameInfo.FreeCount > 0 ? CattleModel.instance.gameInfo.FreeTimes : 1;
            //            //     CattleModel.instance.totalFreeTimes = CattleModel.instance.gameInfo.FreeCount;
            //            //     break;
            //            // }
            //            // case CattleDef.eProto.HD_Leave: {
            //            //     break;
            //            // }
            case eProto.HD_Bet:
              {
                CattleModel.instance.betResult = data.Data;
                this.isReqBet = false;
                gts.Debug.LogWarr("==CattleModel.instance.totalFreeTimes==" + CattleModel.instance.totalFreeTimes);
                if (CattleModel.instance.freeStatus == eRunStatus.NONE) {
                  CattleModel.instance.curBalance -= CattleModel.instance.curTotalBet;
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
            case ConfigManager.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Cattle=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (CattleModel.instance.curBalance > 0) {
                  CattleModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                CattleModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Cattle=pushWallet==" + _HD_Wallet.VndBalance);
                if (CattleModel.instance.curBalance > 0) {
                  CattleModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                CattleModel.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.protocolHall.login:
              {
                //                // 断线重连
                Common.closeWait();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return CattleCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CattleDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6e3dcQfU2NOgKu4ZiVKcO4k", "CattleDef", undefined);
      var cBundle = exports('cBundle', "CattleGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Bet"] = "slotFortuneOx/HD_Bet";
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

      var eSpecialType = exports('eSpecialType', {
        NONE: 0,
        SPECIAL: 1,
        NOMAL_10X: 2,
        SPECIALFaile: 3
      }); //特殊失败模式
      var eSymbol = exports('eSymbol', {
        NONE: 0,
        Ingot: 1,
        Box: 2,
        MoneyBag: 3,
        RedEnvelope: 4,
        Orange: 5,
        Firecracker: 6,
        WILD: 7
      }); //任意
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
        bgm_bigwin_end: "sound/bgm_bigwin_end",
        bgm_bigwin_main: "sound/bgm_bigwin_main",
        bgm_feature_intro: "sound/bgm_feature_intro",
        bgm_free: "sound/bgm_free",
        bgm_nomal: "sound/bgm_nomal",
        voxWin1: "sound/general_audio_extract/voxWin1",
        voxWin2: "sound/general_audio_extract/voxWin2",
        voxWin3: "sound/general_audio_extract/voxWin3",
        voxWild: "sound/general_audio_extract/voxWild",
        uiInfo: "sound/general_audio_extract/uiInfo",
        voxMedwin1: "sound/general_audio_extract/voxMedwin1",
        voxMedwin2: "sound/general_audio_extract/voxMedwin2",
        voxJump: "sound/general_audio_extract/voxJump",
        voxIdle: "sound/general_audio_extract/voxIdle",
        voxGoldWin: "sound/general_audio_extract/voxGoldWin",
        voxGoldQuit: "sound/general_audio_extract/voxGoldQuit",
        voxGoldIn: "sound/general_audio_extract/voxGoldIn",
        symWildSpawn: "sound/general_audio_extract/symWildSpawn",
        symWildReach: "sound/general_audio_extract/symWildReach",
        spinStop: "sound/general_audio_extract/spinStop",
        spinStopQuick: "sound/general_audio_extract/spinStopQuick",
        spinBtn: "sound/general_audio_extract/spinBtn",
        voxSmallwin02B: "sound/general_audio_extract/voxSmallwin02B",
        voxSmallwin03A: "sound/general_audio_extract/voxSmallwin03A",
        prizeWinHighlight: "sound/general_audio_extract/prizeWinHighlight",
        prizeSmallwin: "sound/general_audio_extract/prizeSmallwin",
        prizeMedwinMain: "sound/general_audio_extract/prizeMedwinMain",
        prizeMedwinEnd: "sound/general_audio_extract/prizeMedwinEnd",
        prizeBigwinBefore: "sound/general_audio_extract/prizeBigwinBefore",
        prizeBigwinAfter: "sound/general_audio_extract/prizeBigwinAfter",
        multiplierOut: "sound/general_audio_extract/multiplierOut",
        multiplierIn: "sound/general_audio_extract/multiplierIn",
        featureRespinZoom: "sound/general_audio_extract/featureRespinZoom",
        featureRespinTitle: "sound/general_audio_extract/featureRespinTitle",
        featureRespinReelStart: "sound/general_audio_extract/featureRespinReelStart",
        featureRespinQuit: "sound/general_audio_extract/featureRespinQuit",
        fastspinStart: "sound/general_audio_extract/fastspinStart"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CattleGame", ['./CattleCtrl.ts', './CattleDef.ts', './CattleModel.ts', './CattleScene.ts', './CattleUtils.ts', './CattleGameView.ts', './Cattle_ScrollView.ts', './Cattle_btnEffect.ts', './Cattle_helpTip.ts', './Cattle_history.ts', './Cattle_historyItem.ts', './Cattle_rank.ts', './Cattle_rankItem.ts', './Cattle_setAuto.ts', './Cattle_setBase.ts', './Cattle_shake.ts', './Cattle_symbol.ts', './Cattle_symbolEffectRoot.ts', './Cattle_symbolInfo.ts', './Cattle_symbolItem.ts', './Cattle_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CattleGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './NetManager.ts', './Common.ts', './CattleDef.ts', './CattleModel.ts', './CattleCtrl.ts', './ViewManager.ts', './CattleUtils.ts', './Cattle_winTip.ts', './Cattle_symbol.ts', './Cattle_symbolItem.ts', './I18n.ts', './Cattle_symbolInfo.ts', './Cattle_btnEffect.ts', './MainManager.ts', './AudioManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, sp, Label, SpriteFrame, Prefab, view, sys, tween, v3, Mask, instantiate, Tween, UIOpacity, color, find, v2, macro, GameDef, NetManager, Common, eEvent, eRunStatus, cBundle, eAutoRateType, eConstDef, eSound, eSpecialType, eProto, eSymbol, CattleModel, CattleCtrl, ViewManager, CattleUtils, Cattle_winTip, Cattle_symbol, Cattle_symbolItem, i18n, Cattle_symbolInfo, Cattle_btnEffect, MainManager, AudioManager;
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
      Mask = module.Mask;
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
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      cBundle = module.cBundle;
      eAutoRateType = module.eAutoRateType;
      eConstDef = module.eConstDef;
      eSound = module.eSound;
      eSpecialType = module.eSpecialType;
      eProto = module.eProto;
      eSymbol = module.eSymbol;
    }, function (module) {
      CattleModel = module.CattleModel;
    }, function (module) {
      CattleCtrl = module.CattleCtrl;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      Cattle_winTip = module.default;
    }, function (module) {
      Cattle_symbol = module.default;
    }, function (module) {
      Cattle_symbolItem = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Cattle_symbolInfo = module.default;
    }, function (module) {
      Cattle_btnEffect = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;
      cclegacy._RF.push({}, "94331e3Z0lH8rbOjosgp2/k", "CattleGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var CattleGameView = exports('default', (_dec = ccclass("CattleGameView"), _dec2 = menu("game/CattleGame/CattleGameView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Cattle_symbol), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Button), _dec11 = property(Button), _dec12 = property(sp.Skeleton), _dec13 = property(sp.Skeleton), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(Cattle_symbolInfo), _dec21 = property(Button), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(sp.Skeleton), _dec29 = property(Node), _dec30 = property(Prefab), _dec31 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(CattleGameView, _GameDef$BaseView);
        function CattleGameView() {
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
          _initializerDefineProperty(_this, "Cattle_symbolList", _descriptor5, _assertThisInitialized(_this));
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
          //    // @property(cc.SpriteFrame)
          //    // arrReelBgSpFrame: cc.SpriteFrame[] = [];
          //    // @property(cc.SpriteFrame)
          //    // arrTipBgSpFrame: cc.SpriteFrame[] = [];
          //    // @property(cc.Sprite)
          //    // Sprite_reelBg: cc.Sprite = null;
          _initializerDefineProperty(_this, "Node_public", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_info", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_autoTimes", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineIndex_left", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineIndex_right", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineEffect", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_lineWin", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_Cattle", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_zp_light", _descriptor26, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // Node_spin_light: sp.Skeleton = null;
          _initializerDefineProperty(_this, "Node_symbolList", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_symbolItem", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_reel_bg", _descriptor29, _assertThisInitialized(_this));
          _this.arrBtnStatus = [];
          _this.curBigWinLevel = 0;
          _this.curBigWnGold = 0;
          _this.isStopBigWin = false;
          _this.showIndex = 0;
          _this.collectTimes = 0;
          return _this;
        }
        var _proto = CattleGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, CattleCtrl.instance);
          this.initUIView();
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
          if (!CattleUtils.instance.isChangeOrientation()) {
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
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.on(eEvent.onGoldCollect, this.onGoldCollect, this);
          EventManager.on(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.on(eEvent.onSymbolClick, function (symbol, symbolNode, pos) {
            _this2.Node_info.node.active = true;
            _this2.Node_info.showSymbolInfo(symbol, symbolNode, pos);
          }, this);
          EventManager.on(eEvent.onSetAuto, function (times) {
            if (times && times > 0) {
              CattleModel.instance.autoTimes = times;
              CattleModel.instance.isAuto = true;
              _this2.Button_run.interactable = true;
              _this2.Button_run.node.emit("pauseEffect");
              var btnRunEffect = _this2.Button_run.node.getComponent(Cattle_btnEffect);
              btnRunEffect.switchAni("push2");
              _this2.Skeleton_run.setAnimation(0, "auto", true);
              if (CattleModel.instance.gameStatus == eRunStatus.NONE) {
                _this2.scheduleOnce(function () {
                  CattleCtrl.instance.reqBet();
                }, 0.5);
              }
            }
            _this2.Button_auto.interactable = !CattleModel.instance.isAuto;
            _this2.Label_autoTimes.node.active = CattleModel.instance.isAuto;
            CattleUtils.instance.updateLabel(_this2.Label_autoTimes, CattleModel.instance.autoTimes);
          }, this);
          EventManager.on(eEvent.onAutoClose, function (times) {
            CattleModel.instance.autoTimes = 0;
            CattleModel.instance.isAuto = false;
            _this2.Skeleton_run.setCompleteListener(null);
            _this2.Skeleton_run.setAnimation(0, "idle", true);
            _this2.Button_run.interactable = true;
            _this2.Button_run.node.emit("resumeEffect");
            var btnRunEffect = _this2.Button_run.node.getComponent(Cattle_btnEffect);
            btnRunEffect.switchAni();

            //                // CattleUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

            _this2.Button_auto.interactable = true;
            _this2.Label_autoTimes.node.active = false;
            CattleUtils.instance.updateLabel(_this2.Label_autoTimes, CattleModel.instance.autoTimes);
          }, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.off(eEvent.onGoldCollect, this.onGoldCollect, this);
          EventManager.off(eEvent.updateBaseBet, this.updateBaseBet, this);
          EventManager.off(eEvent.onSymbolClick);
          EventManager.off(eEvent.onSetAuto);
          EventManager.off(eEvent.onAutoClose);
          CattleModel.instance.clearGameData();
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
              //                // CattleCtrl.instance.reEnterRoom();

              if (CattleModel.instance.isAuto && CattleCtrl.instance.isReqBet) {
                CattleCtrl.instance.reqBet();
              }
            }
          }, 0.1);
        }
        //    ////////////////////////////////////////////////////
        ;

        _proto.updateBaseBet = function updateBaseBet() {
          var _this3 = this;
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", CattleModel.instance._curIndex_baseScore + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", CattleModel.instance._curIndex_baseRate + 1);
          sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", CattleModel.instance._curIndex_baseBet + 1);
          CattleModel.instance.curBet = (CattleModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : CattleModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (CattleModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          tween(this.Label_bet.node).to(0.1, {
            scale: v3(1.2, 1.2, 1)
          }).call(function () {
            _this3.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = CattleModel.instance._curIndex_baseBet > 0;
          this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = CattleModel.instance._curIndex_baseBet < 29;
        };
        _proto.initUIView = function initUIView() {
          var _this4 = this;
          var _curIndex_baseScore = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex");
          _curIndex_baseScore = _curIndex_baseScore == null ? 0 : _curIndex_baseScore - 1;
          var _curIndex_baseRate = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex");
          _curIndex_baseRate = _curIndex_baseRate == null ? 0 : _curIndex_baseRate - 1;
          var _curIndex_baseBet = sys.localStorage.getItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex");
          _curIndex_baseBet = _curIndex_baseBet == null ? 0 : _curIndex_baseBet - 1;
          CattleModel.instance._curIndex_baseScore = _curIndex_baseScore;
          CattleModel.instance._curIndex_baseRate = _curIndex_baseRate;
          CattleModel.instance._curIndex_baseBet = _curIndex_baseBet;
          CattleModel.instance.curBet = (CattleModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : CattleModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (CattleModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
          if (CattleModel.instance._curIndex_baseBet >= 29) {
            CattleModel.instance._curIndex_baseBet = 29;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
          } else if (CattleModel.instance._curIndex_baseBet <= 0) {
            CattleModel.instance._curIndex_baseBet = 0;
            this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
            this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
          }
          CattleUtils.instance.loadRes_icon(function () {
            //            //test
            if (_this4.Cattle_symbolList) {
              for (var i = 0; i < _this4.Cattle_symbolList.length; i++) {
                _this4.Cattle_symbolList[i].init();
              }
              CattleCtrl.instance.reqEnterRoom();
            }
          });
          this.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
          this.Label_win.string = "0.00";
          this.updateGold();
          this.Node_effectRoot.getComponent(Mask).alphaThreshold = 0;
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_fast":
              {
                //                //快速停止
                CattleModel.instance.isQuickStop = !CattleModel.instance.isQuickStop;
                //                // RabbitUtils.instance.setBtnBetGray(event.target.getChildByName("Background"), !RabbitModel.instance.isQuickStop);

                var btn_turbo = event.target.getChildByName("btn_turbo").getComponent(sp.Skeleton);
                if (!CattleModel.instance.isQuickStop) {
                  btn_turbo.setAnimation(0, "off", true);
                } else {
                  btn_turbo.setAnimation(0, "intro_on", false);
                  btn_turbo.addAnimation(0, "on", true);
                }
                break;
              }
            case "Button_auto":
              {
                if (!CattleModel.instance.isAuto) {
                  Common.loadPopBuddle("prefab/Node_setAuto", CattleUtils.instance.bundle, function () {}, function (prefab) {
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
                if (CattleModel.instance.gameStatus != eRunStatus.NONE || CattleModel.instance.isAuto) {
                  return;
                }
                var buyGold = CattleModel.instance.curBet * 50 * 1000;
                if (CattleModel.instance.curBalance < buyGold) {
                  Common.showTip(i18n.lang[10001], !CattleUtils.instance.isChangeOrientation());
                  return;
                }
                Common.loadPopBuddle("prefab/Node_buyReward", CattleUtils.instance.bundle, function () {}, function (prefab) {
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
                EventManager.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_record":
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_history", CattleUtils.instance.bundle, function () {}, function (help) {
                  var Node_history = instantiate(help);
                  Common.transformSize(Node_history);
                  ViewManager.instance.popNodeView(Node_history, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", CattleUtils.instance.bundle, function () {}, function (help) {
                  var Node_rank = instantiate(help);
                  Common.transformSize(Node_rank);
                  ViewManager.instance.popNodeView(Node_rank, true);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", CattleUtils.instance.bundle, function () {}, function (help) {
                  var helpLayer = instantiate(help);
                  Common.transformSize(helpLayer);
                  ViewManager.instance.popNodeView(helpLayer, true);
                }, true);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_redus":
              {
                if (CattleModel.instance.gameStatus != eRunStatus.NONE || CattleModel.instance.isAuto) {
                  return;
                }
                CattleModel.instance._curIndex_baseBet--;
                if (CattleModel.instance._curIndex_baseBet <= 0) {
                  CattleModel.instance._curIndex_baseBet = 0;
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = true;
                }
                CattleModel.instance._curIndex_baseScore = Math.floor(CattleModel.instance._curIndex_baseBet / 10);
                CattleModel.instance._curIndex_baseRate = CattleModel.instance._curIndex_baseBet % 10;
                CattleModel.instance.curBet = (CattleModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : CattleModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (CattleModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", CattleModel.instance._curIndex_baseScore + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", CattleModel.instance._curIndex_baseRate + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", CattleModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_add":
              {
                if (CattleModel.instance.gameStatus != eRunStatus.NONE || CattleModel.instance.isAuto) {
                  return;
                }
                CattleModel.instance._curIndex_baseBet++;
                if (CattleModel.instance._curIndex_baseBet >= 29) {
                  CattleModel.instance._curIndex_baseBet > 29;
                  this.Node_action.getChildByName("Button_add").getComponent(Button).interactable = false;
                } else {
                  this.Node_action.getChildByName("Button_redus").getComponent(Button).interactable = true;
                }
                CattleModel.instance._curIndex_baseScore = Math.floor(CattleModel.instance._curIndex_baseBet / 10);
                CattleModel.instance._curIndex_baseRate = CattleModel.instance._curIndex_baseBet % 10;
                CattleModel.instance.curBet = (CattleModel.instance._curIndex_baseScore == 0 ? eConstDef.CBaseBet_0 : CattleModel.instance._curIndex_baseScore == 1 ? eConstDef.CBaseBet_1 : eConstDef.CBaseBet_2) * (CattleModel.instance._curIndex_baseRate + 1) * eConstDef.CBaseRate;
                tween(this.Label_bet.node).to(0.1, {
                  scale: v3(1.2, 1.2, 1)
                }).call(function () {
                  _this5.Label_bet.string = CattleUtils.instance.numberFormat(CattleModel.instance.curBet, 2.0) + "K";
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).start();
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseScore + "_curIndex", CattleModel.instance._curIndex_baseScore + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseRate + "_curIndex", CattleModel.instance._curIndex_baseRate + 1);
                sys.localStorage.setItem(cBundle + "_" + eAutoRateType.baseBet + "_curIndex", CattleModel.instance._curIndex_baseBet + 1);
                break;
              }
            case "Button_run":
              {
                if (CattleModel.instance.isAuto) {
                  CattleModel.instance.isAuto = false;
                  CattleModel.instance.autoTimes = 0;
                  this.Label_autoTimes.node.active = CattleModel.instance.isAuto;
                  CattleUtils.instance.updateLabel(this.Label_autoTimes, CattleModel.instance.autoTimes);
                  if (CattleModel.instance.gameStatus = eRunStatus.NONE) {
                    this.Skeleton_run.setAnimation(0, "idle", true);
                    this.Button_run.node.emit("resumeEffect");
                    this.Button_auto.interactable = true;
                  } else {
                    this.Skeleton_run.addAnimation(0, "stop", true);
                    this.Button_run.interactable = false;
                    this.Button_run.node.emit("pauseEffect");
                    this.Button_auto.interactable = false;
                  }
                  var btnRunEffect = this.Button_run.node.getComponent(Cattle_btnEffect);
                  btnRunEffect.switchAni();
                  break;
                }
                if (CattleCtrl.instance.isReqBet) {
                  break;
                }
                if (CattleModel.instance.gameStatus == eRunStatus.NONE) {
                  var betGold = CattleModel.instance.curBet * 1000;
                  if (CattleModel.instance.curBalance < betGold) {
                    Common.showTip(i18n.lang[10001], !CattleUtils.instance.isChangeOrientation());
                    return;
                  }
                  CattleCtrl.instance.reqBet();
                }
                break;
              }
            case "Button_setBase":
              {
                if (CattleModel.instance.gameStatus != eRunStatus.NONE || CattleModel.instance.isAuto) {
                  return;
                }
                Common.loadPopBuddle("prefab/Node_setBase", CattleUtils.instance.bundle, function () {}, function (help) {
                  var setBase = instantiate(help);
                  Common.transformSize(setBase);
                  ViewManager.instance.popNodeView(setBase, true);
                }, true);
                break;
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
          var lineIndex = CattleUtils.instance.getLine(prizeIdx);
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
              Label_line_.getComponent(Label).string = CattleUtils.instance.numberFormat(winCount / 1000, 2) + "K";
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
          if (CattleModel.instance.gameStatus != eRunStatus.NONE) {
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
          CattleModel.instance.totalRate = 0;
          this.showMask(false);
          this.hideLine();
          this.Node_info.node.active = false;
          if (this.Node_winTip.active) {
            tween(this.Node_winTip).delay(0.5).call(function () {
              _this7.Node_helpTip.active = true;
              _this7.Node_winTip.active = false;
            }).start();
          }
          this.isStopBigWin = false;
          CattleModel.instance.curTotalWin = 0;
          this.collectTimes = 0;
          this.Label_win.string = "0.00";
          EventManager.emit(eEvent.updateWin, 0);
          CattleModel.instance.gameStatus = eRunStatus.RUNNING;
          if (this.Skeleton_run.animation != "star" && !CattleModel.instance.isAuto) {
            this.Skeleton_run.setAnimation(0, "star", false);
            this.Skeleton_run.setCompleteListener(function () {
              _this7.Skeleton_run.setCompleteListener(null);
              if (!CattleModel.instance.isAuto) {
                _this7.Button_run.interactable = false;
                _this7.Button_run.node.emit("pauseEffect");
                _this7.Skeleton_run.setAnimation(0, "stop", true);
              }
            });
          }
          if (CattleModel.instance.freeStatus == eRunStatus.RUNNING) {
            CattleUtils.instance.playOneShot(eSound.featureRespinReelStart);
            CattleModel.instance.totalFreeTimes--;
            this.Node_zp_light.node.active = true;
            tween(this.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            this.Node_zp_light.setAnimation(0, "free_spin", false);
            this.Node_zp_light.setCompleteListener(function () {
              _this7.Node_zp_light.setCompleteListener(null);
              _this7.Node_zp_light.node.active = false;
            });
          } else {
            this.Sprite_reel_bg.active = false;
            var Node_CattleBg = this.Node_Cattle.node.parent.getChildByName("Node_CattleBg");
            if (Node_CattleBg.active) {
              Node_CattleBg.active = false;
            }
            CattleUtils.instance.playOneShot(eSound.spinBtn);
            this.Node_tipEffect.setAnimation(0, "normal_idle", true);
            if (CattleModel.instance.isAuto && CattleModel.instance.autoTimes > 0) {
              CattleModel.instance.autoTimes--;
              CattleUtils.instance.updateLabel(this.Label_autoTimes, CattleModel.instance.autoTimes);
            }
            this.Node_Cattle.node.active = true;
            if (this.Node_Cattle.animation != "idle") {
              this.Node_Cattle.setAnimation(0, "idle", true);
              this.Node_Cattle.setAnimation(1, "fx_wild_collect", true);
            }
          }
          this.unschedule(this.showResultEffect);
          var children = this.Node_effectRoot.children;
          for (var _iterator5 = _createForOfIteratorHelperLoose(children), _step5; !(_step5 = _iterator5()).done;) {
            var nodeChild = _step5.value;
            if (nodeChild.name != "Node_symbol") {
              nodeChild.active = false;
              nodeChild.destroy();
            }
          }
          this.Node_effectRoot.getComponent(Mask).alphaThreshold = 1;
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, startDelay, stopDelay, i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  startDelay = 0;
                  stopDelay = 0;
                  for (i = 0; i < _this7.Cattle_symbolList.length; i++) {
                    //                // for (let i = 1; i < 2; i++) {
                    startDelay = CattleModel.instance.isQuickStop ? i * eConstDef.cQuickStopStartDelay : i * eConstDef.cStartDelay;
                    stopDelay = CattleModel.instance.isQuickStop ? eConstDef.cQuickStopDelay : eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                    if (CattleModel.instance.betResult.special) {
                      stopDelay = eConstDef.cStopDelay + 2.75 + i * eConstDef.cStartDelay;

                      //                    //free
                      if (CattleModel.instance.freeStatus == eRunStatus.NONE) {
                        startDelay = i * eConstDef.cStartDelay;
                        stopDelay = CattleModel.instance.specialStartCol == i ? stopDelay + 6 : stopDelay + 3;
                      } else {
                        startDelay = i * eConstDef.cStartDelay;
                        stopDelay = CattleModel.instance.specialStartCol == i ? stopDelay + 3 : stopDelay;
                      }
                    } else if (CattleModel.instance.specialStatues == eSpecialType.SPECIALFaile) {
                      //                    //free_fail
                      startDelay = i * eConstDef.cStartDelay;
                      stopDelay = eConstDef.cStopDelay + 2.75 + i * eConstDef.cStartDelay;
                    } else if (CattleModel.instance.specialStatues == eSpecialType.NOMAL_10X) {
                      //                    //NOMAL_10X
                      startDelay = i * eConstDef.cStartDelay;
                      stopDelay = eConstDef.cStopDelay + i * eConstDef.cStartDelay;
                      stopDelay = CattleModel.instance.specialStartCol == i ? stopDelay + 4 : stopDelay;
                    }
                    arrPro.push(_this7.Cattle_symbolList[i].doStart(startDelay, stopDelay));
                  }
                  if (CattleModel.instance.freeStatus == eRunStatus.NONE) {
                    if (CattleModel.instance.betResult.special || CattleModel.instance.specialStatues == eSpecialType.SPECIALFaile) {
                      CattleUtils.instance.playOneShot(eSound.voxGoldIn);
                      _this7.scheduleOnce(function () {
                        _this7.Node_Cattle.setAnimation(0, "rs_start", false);
                        _this7.Node_Cattle.addAnimation(0, "rs_idle", true);
                        _this7.Node_Cattle.setAnimation(1, "_purge", true);
                        var Node_freeEffect = _this7.Node_Cattle.node.parent.getChildByName("Node_freeEffect");
                        for (var _iterator6 = _createForOfIteratorHelperLoose(Node_freeEffect.children), _step6; !(_step6 = _iterator6()).done;) {
                          var childNode = _step6.value;
                          tween(childNode).to(eConstDef.cStopDelay + 2, {
                            position: v3(childNode.getPosition().x < 0 ? -318 : 321, childNode.position.y)
                          }).start();
                        }
                        if (CattleModel.instance.specialStatues == eSpecialType.SPECIALFaile) {
                          CattleUtils.instance.playOneShot(eSound.featureRespinZoom);
                        }
                        var Node_root = _this7.node.getChildByName("Node_root");
                        var toScale = CattleModel.instance.betResult.special ? 0.9 : 0.95;
                        var resetScale = CattleModel.instance.betResult.special ? 0.9 : 1;
                        tween(Node_root).to(eConstDef.cStopDelay + 2, {
                          scale: v3(toScale, toScale, 1)
                        }).call(function () {
                          if (CattleModel.instance.specialStatues == eSpecialType.SPECIALFaile) {
                            _this7.Node_Cattle.setAnimation(0, "idle2", false);
                            _this7.Node_Cattle.addAnimation(0, "idle", true);
                            _this7.Node_Cattle.setAnimation(1, "fx_wild_collect", true);
                            for (var _iterator7 = _createForOfIteratorHelperLoose(Node_freeEffect.children), _step7; !(_step7 = _iterator7()).done;) {
                              var childNode = _step7.value;
                              tween(childNode).to(0.5, {
                                position: v3(childNode.getPosition().x < 0 ? -600 : 600, childNode.position.y)
                              }).start();
                            }
                          } else if (CattleModel.instance.betResult.special) {
                            _this7.showFree();
                          }
                        }).to(0.5, {
                          scale: v3(resetScale, resetScale, 1)
                        }).start();

                        //                        // CattleUtils.instance.playSound(CattleDef.eSound.teaseStart);
                      }, 0.5);
                    } else if (!CattleModel.instance.betResult.special && CattleModel.instance.specialStatues == eSpecialType.NOMAL_10X) {
                      _this7.scheduleOnce(function () {
                        _this7.Node_Cattle.setAnimation(0, "rs_start", false);
                        _this7.Node_Cattle.addAnimation(0, "rs_idle", true);
                        _this7.Node_Cattle.setAnimation(1, "_purge", true);
                        var Node_CattleBg = _this7.Node_Cattle.node.parent.getChildByName("Node_CattleBg");
                        Node_CattleBg.active = true;
                        Node_CattleBg.scale = v3(0.0, 0.0, 1);
                        Node_CattleBg.getComponent(UIOpacity).opacity = 0;
                        tween(Node_CattleBg).to(0.5, {
                          scale: v3(1.0, 1.0, 1)
                        }).start();
                        tween(Node_CattleBg.getComponent(UIOpacity)).to(0.5, {
                          opacity: 255
                        }).start();
                        _this7.Node_zp_light.node.active = true;
                        tween(_this7.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
                          opacity: 255
                        }).start();
                        _this7.Node_zp_light.setAnimation(0, "3", true);
                        var Node_x10_light = _this7.Node_zp_light.node.parent.getChildByName("Node_x10_light").getComponent(sp.Skeleton);
                        Node_x10_light.node.active = true;
                        Node_x10_light.setAnimation(0, "idle", true);
                        var Node_freeMask = _this7.Node_effectRoot.parent.getChildByName("Node_freeMask");
                        Node_freeMask.active = true;
                        Node_freeMask.getComponent(UIOpacity).opacity = 0;
                        tween(Node_freeMask.getComponent(UIOpacity)).to(0.25, {
                          opacity: 150
                        }).start();
                        var Node_root = _this7.node.getChildByName("Node_root");
                        // Node_root.runAction(cc.sequence(Cattle_shake.create(5, 3, 3), cc.callFunc(null, this)));
                        tween(Node_root).shake(5, 3, 3).call(function () {
                          Node_root.position = v3(0);
                        }).start();
                        CattleUtils.instance.playOneShot(eSound.fastspinStart);
                      }, eConstDef.cStopDelay + 0.35);
                    }
                  } else {
                    _this7.scheduleOnce(function () {
                      _this7.Node_Cattle.setAnimation(0, "rs_idle", true);
                      _this7.Node_Cattle.setAnimation(1, "_purge", true);
                      _this7.showFree();
                    }, eConstDef.cStopDelay + 2);
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
            var arrPro, i, Node_freeMask, Node_root, result, arrSound, _iterator8, _step8, prizeInfo, rAni, _arrPro, _i, _Node_root, Node_x10_light, newLight, rAni_win, rAni_idle, com_Cattle_winTip, _i2, delayStart;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  gts.Debug.Log("======doRunEnd=======");
                  CattleModel.instance.gameStatus = eRunStatus.CLEAR;
                  CattleModel.instance.curTotalWin = 0;
                  this.Node_effectRoot.getComponent(Mask).alphaThreshold = 0;

                  //        //collect Gold
                  if (!(CattleModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context2.next = 9;
                    break;
                  }
                  arrPro = [];
                  for (i = 0; i < this.Cattle_symbolList.length; i++) {
                    arrPro.push(this.Cattle_symbolList[i].doGoldCollect(0));
                  }
                  _context2.next = 9;
                  return Promise.all(arrPro);
                case 9:
                  Node_freeMask = this.Node_effectRoot.parent.getChildByName("Node_freeMask");
                  if (!Node_freeMask.active) {
                    _context2.next = 18;
                    break;
                  }
                  tween(Node_freeMask.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    Node_freeMask.active = false;
                  }).start();
                  tween(this.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
                    opacity: 0
                  }).call(function () {
                    _this9.Node_zp_light.setCompleteListener(null);
                    _this9.Node_zp_light.node.active = false;
                    var Node_x10_light = _this9.Node_zp_light.node.parent.getChildByName("Node_x10_light").getComponent(sp.Skeleton);
                    Node_x10_light.node.active = false;
                  }).start();
                  Node_root = this.node.getChildByName("Node_root");
                  Tween.stopAllByTarget(Node_root);
                  Node_root.position = v3(0);
                  _context2.next = 18;
                  return this.doAwait(0.5);
                case 18:
                  result = CattleModel.instance.betResult.Res[0];
                  if (!(result.prizeAmount > 0)) {
                    _context2.next = 58;
                    break;
                  }
                  //            //计算得分倍率
                  CattleModel.instance.totalRate = result.prizeAmount / (CattleModel.instance.curBet * 1000);
                  this.curBigWinLevel = CattleModel.instance.totalRate < 20 ? 0 : CattleModel.instance.totalRate < 50 ? 1 : 2;
                  CattleModel.instance.curTotalWin += result.prizeAmount;

                  //            // if (Cattle_symbol.goldCount == 0) {
                  //            //     await this.doAwait(0.25);
                  //            // }

                  this.showMask();
                  if (CattleModel.instance.totalRate == 0) {
                    arrSound = [eSound.voxWin1, eSound.voxWin2, eSound.voxWin3];
                    CattleUtils.instance.playOneShot(arrSound[Math.floor(Math.random() * 3)]);
                  }
                  for (_iterator8 = _createForOfIteratorHelperLoose(result.prizeInfo); !(_step8 = _iterator8()).done;) {
                    prizeInfo = _step8.value;
                    if (prizeInfo.prizeIdx.length > 3) ;else {
                      //                    // let arrSound = [
                      //                    //     CattleDef.eSound.voxSmallwin01A,
                      //                    //     CattleDef.eSound.voxSmallwin01B,
                      //                    //     CattleDef.eSound.voxSmallwin01C,
                      //                    //     CattleDef.eSound.voxSmallwin01D,
                      //                    //     CattleDef.eSound.voxSmallwin02A,
                      //                    //     CattleDef.eSound.voxSmallwin02B,
                      //                    //     CattleDef.eSound.voxSmallwin03A,
                      //                    // ];
                      //                    // let randStart = CattleModel.instance.totalRate <= 1 ? 0 : CattleModel.instance.totalRate <= 2 ? 4 : 6;
                      //                    // let randEnd = CattleModel.instance.totalRate <= 1 ? 4 : CattleModel.instance.totalRate <= 2 ? 2 : 1;
                      //                    // CattleUtils.instance.playSound(arrSound[randStart + Math.floor(Math.random() * randEnd)]);

                      this.showLine(prizeInfo.prizeIdx);
                    }
                  }
                  rAni = ["win", "win2", "win3"];
                  this.Node_Cattle.node.active = true;
                  this.Node_Cattle.setAnimation(0, rAni[this.curBigWinLevel], false);
                  this.Node_Cattle.addAnimation(0, "idle", true);
                  if (!CattleModel.instance.betResult.special && !this.Node_Cattle.getCurrent(1)) {
                    this.Node_Cattle.setAnimation(1, "fx_wild_collect", true);
                  }

                  //            //doEffect
                  _arrPro = [];
                  for (_i = 0; _i < this.Cattle_symbolList.length; _i++) {
                    _arrPro.push(this.Cattle_symbolList[_i].doEffect());
                  }
                  _context2.next = 35;
                  return Promise.all(_arrPro);
                case 35:
                  if (!(CattleModel.instance.specialStatues == eSpecialType.NOMAL_10X)) {
                    _context2.next = 44;
                    break;
                  }
                  _Node_root = this.node.getChildByName("Node_root");
                  Node_x10_light = _Node_root.getChildByName("Node_x10_light");
                  newLight = instantiate(Node_x10_light);
                  _Node_root.addChild(newLight);
                  CattleUtils.instance.playOneShot(eSound.multiplierIn);
                  tween(newLight).to(0.25, {
                    scale: v3(1.0, 1.0, 1),
                    position: v3(newLight.position.x, 0)
                  }).delay(1.5).call(function () {
                    CattleUtils.instance.playOneShot(eSound.multiplierOut);
                  }).to(0.25, {
                    scale: v3(0.05, 0.05, 1),
                    position: v3(newLight.position.x, -186)
                  }).call(function () {
                    _this9.Node_tipEffect.setAnimation(0, "bigwin_win", false);
                    _this9.Node_tipEffect.addAnimation(0, "bigwin_idle", true);
                    _this9.Node_helpTip.active = false;
                    _this9.Node_winTip.active = true;
                    var com_Cattle_winTip = _this9.Node_winTip.getComponent(Cattle_winTip);
                    com_Cattle_winTip.doShowRate(10000);
                  }).removeSelf().start();
                  _context2.next = 44;
                  return this.doAwait(3.0);
                case 44:
                  if (!(CattleModel.instance.freeStatus == eRunStatus.NONE)) {
                    _context2.next = 57;
                    break;
                  }
                  _context2.next = 47;
                  return this.doShowBigWin(CattleModel.instance.curTotalWin);
                case 47:
                  rAni_win = ["bigwin_win", "bigwin2_win", "bigwin2_win"];
                  rAni_idle = ["bigwin_idle", "bigwin2_idle", "bigwin2_idle"];
                  this.Node_tipEffect.setAnimation(0, rAni_win[this.curBigWinLevel], false);
                  this.Node_tipEffect.addAnimation(0, rAni_idle[this.curBigWinLevel], true);
                  CattleUtils.instance.playOneShot(eSound.prizeSmallwin);
                  this.Node_helpTip.active = false;
                  this.Node_winTip.active = true;
                  com_Cattle_winTip = this.Node_winTip.getComponent(Cattle_winTip);
                  com_Cattle_winTip.doShow(result.prizeAmount);
                  if (CattleModel.instance.curTotalWin > 0) {
                    //                    //gengxin
                    CattleUtils.instance.updateLabelAdd(this.Label_win, CattleModel.instance.curTotalWin);
                    EventManager.emit(eEvent.updateWin, CattleModel.instance.curTotalWin);
                  }
                case 57:
                  //            //

                  for (_i2 = 0; _i2 < this.Cattle_symbolList.length; _i2++) {
                    this.Cattle_symbolList[_i2].doClear();
                  }
                case 58:
                  delayStart = 0.25;
                  if (CattleModel.instance.freeStatus == eRunStatus.NONE) {
                    if (CattleModel.instance.curTotalWin > 0) {
                      delayStart = 1.0;
                      if (CattleModel.instance.endBalance != CattleModel.instance.curBalance) {
                        CattleModel.instance.curBalance = CattleModel.instance.endBalance;
                        this.updateGold();
                      }
                    } else if (CattleModel.instance.isQuickStop) ;
                  }
                  CattleModel.instance.isAuto = CattleModel.instance.autoTimes > 0;
                  if (!CattleModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      _this9.Skeleton_run.setCompleteListener(null);
                      _this9.Skeleton_run.setAnimation(0, "idle", true);
                      _this9.Button_run.interactable = true;
                      _this9.Button_run.node.emit("resumeEffect");
                      var btnRunEffect = _this9.Button_run.node.getComponent(Cattle_btnEffect);
                      btnRunEffect.switchAni();
                    }, 0);

                    //            // CattleUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);

                    this.Button_auto.interactable = true;
                    this.Label_autoTimes.node.active = false;
                    CattleUtils.instance.updateLabel(this.Label_autoTimes, CattleModel.instance.autoTimes);
                  }
                  CattleModel.instance.gameStatus = eRunStatus.NONE;
                  if (CattleModel.instance.isAuto || CattleModel.instance.freeStatus == eRunStatus.RUNNING) {
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
                      for (var _iterator9 = _createForOfIteratorHelperLoose(_this9.arrBtnStatus), _step9; !(_step9 = _iterator9()).done;) {
                        var obj = _step9.value;
                        obj.btn.interactable = obj.enable;
                      }
                    }
                    if (!CattleModel.instance.isAuto) {
                      _this9.Button_auto.interactable = true;
                    }
                  }, CattleModel.instance.curTotalWin > 0 ? 0.5 : 0);

                  //        //free and auto
                  if (!(CattleModel.instance.freeStatus != eRunStatus.NONE)) {
                    _context2.next = 79;
                    break;
                  }
                  CattleModel.instance.totalFreeWin += CattleModel.instance.curTotalWin;
                  if (!(CattleModel.instance.totalFreeTimes > 0)) {
                    _context2.next = 71;
                    break;
                  }
                  this.scheduleOnce(function () {
                    _this9.Node_bigWin.active = false;
                    CattleModel.instance.betResult.Res.splice(0, 1);
                    _this9.doStartRun();
                  }, delayStart);
                  _context2.next = 77;
                  break;
                case 71:
                  CattleModel.instance.totalRate = CattleModel.instance.totalFreeWin / (CattleModel.instance.curBet * 1000);
                  this.curBigWinLevel = CattleModel.instance.totalRate < 20 ? 0 : CattleModel.instance.totalRate < 50 ? 1 : 2;

                  //                //大奖
                  _context2.next = 75;
                  return this.doShowBigWin(CattleModel.instance.totalFreeWin);
                case 75:
                  CattleModel.instance.freeStatus = eRunStatus.END;
                  this.doEndFree();
                case 77:
                  _context2.next = 80;
                  break;
                case 79:
                  if (CattleModel.instance.totalFreeTimes > 0) {
                    this.showFree();
                  } else if (CattleModel.instance.isAuto) {
                    delayStart = 1.0;
                    this.scheduleOnce(function () {
                      CattleCtrl.instance.reqBet();
                    }, delayStart);
                  }
                case 80:
                  if (result.prizeInfo.length > 0) {
                    this.showIndex = 0;
                    this.schedule(this.showResultEffect, 3.0, macro.REPEAT_FOREVER, 3.0);
                  }
                case 81:
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
            var rate = destWin / (CattleModel.instance.curBet * 1000);
            if (rate < 20) {
              //                //30
              resolve();
              return;
            }
            CattleUtils.instance.playSound(eSound.prizeBigwinBefore);
            _this10.scheduleOnce(function () {
              //                //大奖显示
              _this10.Node_bigWin.active = true;
              _this10.Node_bigWin.scale = v3(1.0, 1.0, 1);
              tween(_this10.Node_bigWin).to(0.1, {
                scale: v3(1.2, 1.2, 1)
              }, {
                easing: "quadOut"
              }).to(0.05, {
                scale: v3(1, 1, 1)
              }, {
                easing: "quadIn"
              }).call(function () {
                CattleUtils.instance.playSound(eSound.bgm_bigwin_main);
                var Node_bigWinEffect = _this10.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                Node_bigWinEffect.node.active = true;
                Node_bigWinEffect.setAnimation(0, "bigwin_intro", false);
                Node_bigWinEffect.addAnimation(0, "bigwin_idle", true);
                var Node_Cattle = _this10.Node_bigWin.getChildByName("Node_Cattle").getComponent(sp.Skeleton);
                Node_Cattle.node.active = true;
                Node_Cattle.setAnimation(0, "resg_spawn", false);
                Node_Cattle.addAnimation(0, "rsg_win_idle2", true);
                var Label_totalWin = _this10.Node_bigWin.getChildByName("Label_totalWin").getComponent(Label);
                Label_totalWin.string = "";
              }).delay(0.25).call(function () {
                var Node_bigWinEffect = _this10.Node_bigWin.getChildByName("Node_bigWinEffect").getComponent(sp.Skeleton);
                var Node_Cattle = _this10.Node_bigWin.getChildByName("Node_Cattle").getComponent(sp.Skeleton);
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
                      delay = 2.0;
                    }
                    CattleUtils.instance.stopSound(eSound.bgm_bigwin_main);
                    CattleUtils.instance.playSound(eSound.bgm_bigwin_end);
                    Tween.stopAllByTarget(_this10.Node_bigWin);
                    Tween.stopAllByTarget(Label_totalWin.node);
                    curTotalWin = destWin;
                    tween(_this10.Node_bigWin).delay(delay).call(function () {
                      _this10.Node_bigWin.active = false;
                      Node_bigWinEffect.node.active = true;
                      Node_Cattle.node.active = false;
                      resolve();
                    }).start();
                    Label_totalWin.string = CattleUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                  };
                  if (curTotalWin < destWin) {
                    curTotalWin += disWin;
                    if (curTotalWin >= destWin) {
                      curTotalWin = destWin;
                      if (Node_Cattle.animation != "rs_idle2") {
                        Node_Cattle.setAnimation(0, "rsg_win_exit2", false);
                        Node_Cattle.addAnimation(0, "rs_idle2", true);
                      }
                      if (CattleModel.instance.isAuto) {
                        doEnd();
                      }
                      Label_totalWin.string = CattleUtils.instance.numberFormat(curTotalWin / 1000, 2) + "K";
                    } else {
                      Label_totalWin.string = CattleUtils.instance.numberFormatFloat(curTotalWin / 1000, 2) + "K";
                    }
                  }
                  var rate = curTotalWin / (CattleModel.instance.curBet * 1000);
                  var level = rate < 30 ? 0 : rate < 50 ? 1 : 2;
                  if (level != curLevel) {
                    curLevel = level;
                    var ani = ["bigwin", "megawin", "superwin"];
                    Node_bigWinEffect.setAnimation(0, ani[level] + "_intro", false);
                    Node_bigWinEffect.addAnimation(0, ani[level] + "_idle", true);
                  }
                  if (_this10.isStopBigWin) {
                    //                                            //点击停止
                    var _delay = 2.0;
                    var _ani = ["bigwin_idle", "megawin_idle", "superwin_idle"];
                    if (Node_bigWinEffect.animation != _ani[_this10.curBigWinLevel]) {
                      Node_bigWinEffect.setAnimation(0, _ani[_this10.curBigWinLevel], true);
                      _delay = 2.0;
                    }
                    if (Node_Cattle.animation != "rs_idle2") {
                      Node_Cattle.setAnimation(0, "rsg_win_exit2", false);
                      Node_Cattle.addAnimation(0, "rs_idle2", true);
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
                _this11.Cattle_symbolList[i].doShowResultEffect(symIndex, isAll);
              }
            }
          };
          this.showIndex++;
          var prizeInfo = CattleModel.instance.betResult.Res[0].prizeInfo;
          if (this.showIndex == prizeInfo.length) {
            this.showIndex = -1;
            for (var _iterator10 = _createForOfIteratorHelperLoose(prizeInfo), _step10; !(_step10 = _iterator10()).done;) {
              var info = _step10.value;
              doResultEffect(info.prizeIdx, true);
            }
          } else {
            var _info = prizeInfo[this.showIndex];
            if (_info) {
              doResultEffect(_info.prizeIdx, false, _info.prizeAmount);
              CattleUtils.instance.playSound(eSound.prizeWinHighlight);
            }
          }
        }
        //    ///////////////////////////////////////////////////////
        ;

        _proto.hideFree = function hideFree() {
          CattleModel.instance.freeStatus = eRunStatus.NONE;
          CattleModel.instance.totalFreeTimes = 0;
          CattleModel.instance.totalFreeWin = 0;
          AudioManager.instance.resumeMusic();
          if (CattleModel.instance.isAuto) {
            this.scheduleOnce(function () {
              CattleCtrl.instance.reqBet();
            }, 1.0);
          }
        };
        _proto.showFree = function showFree() {
          var _this12 = this;
          if (CattleModel.instance.freeStatus == eRunStatus.NONE) {
            var Node_CattleBg = this.Node_Cattle.node.parent.getChildByName("Node_CattleBg");
            Node_CattleBg.active = true;
            Node_CattleBg.scale = v3(0.0, 0.0, 1);
            Node_CattleBg.getComponent(UIOpacity).opacity = 0;
            tween(Node_CattleBg.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).start();
            tween(Node_CattleBg).to(0.5, {
              scale: v3(1.0, 1.0, 1)
            }).start();
            CattleUtils.instance.playOneShot(eSound.voxJump);
            this.Node_Cattle.setAnimation(0, "dup", false);
            this.Node_Cattle.addAnimation(0, "rs_idle", true);
            this.Node_Cattle.setAnimation(1, "_purge", true);
            this.Node_zp_light.node.active = true;
            this.Node_zp_light.setAnimation(0, "x10_intro", false);
            this.Node_zp_light.node.getComponent(UIOpacity).opacity = 0;
            tween(this.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).start();
            this.Node_zp_light.setCompleteListener(function () {
              _this12.Node_zp_light.setCompleteListener(null);
              _this12.Node_zp_light.node.active = false;
            });
            this.Sprite_reel_bg.active = true;
            this.Sprite_reel_bg.getComponent(UIOpacity).opacity = 0;
            tween(this.Sprite_reel_bg.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
            var Node_root = this.node.getChildByName("Node_root");
            var Node_freeTitle = Node_root.getChildByName("Node_freeTitle");
            Node_freeTitle.active = true;
            Node_freeTitle.scale = v3(0.5, 0.5, 1);
            Node_freeTitle.getComponent(UIOpacity).opacity = 0;
            tween(Node_freeTitle.getComponent(UIOpacity)).to(0.25, {
              opacity: 255
            }).call(function () {}).start();
            tween(Node_freeTitle).to(0.25, {
              scale: v3(1.0, 1.0, 1)
            }).call(function () {
              CattleUtils.instance.playSound(eSound.featureRespinTitle);
            }).start();
            this.scheduleOnce(function () {
              _this12.Node_zp_light.node.active = true;
              _this12.Node_zp_light.node.getComponent(UIOpacity).opacity = 0;
              tween(_this12.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).start();
              _this12.Node_zp_light.setCompleteListener(null);
              _this12.Node_zp_light.addAnimation(0, "2", true);
              CattleUtils.instance.playOneShot(eSound.fastspinStart);
              var Node_x10_light = _this12.Node_zp_light.node.parent.getChildByName("Node_x10_light").getComponent(sp.Skeleton);
              Node_x10_light.node.active = true;
              Node_x10_light.setAnimation(0, "idle", true);
              var Node_freeMask = _this12.Node_effectRoot.parent.getChildByName("Node_freeMask");
              Node_freeMask.active = true;
              Node_freeMask.getComponent(UIOpacity).opacity = 0;
              tween(Node_freeMask.getComponent(UIOpacity)).to(0.25, {
                opacity: 150
              }).start();

              // Node_root.runAction(
              //     cc.sequence(
              //         Cattle_shake.create(5, 3, 3),
              //         cc.callFunc(() => {
              //             Node_root.position = cc.v3(0);
              //         }, this)
              //     )
              // );

              tween(Node_root).shake(5, 3, 3).call(function () {
                Node_root.position = v3(0);
              }).start();
              _this12.doEnterFree();
            }, 3.5);
          } else {
            this.scheduleOnce(function () {
              _this12.Node_zp_light.node.active = true;
              _this12.Node_zp_light.node.getComponent(UIOpacity).opacity = 0;
              tween(_this12.Node_zp_light.node.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).start();
              _this12.Node_zp_light.setCompleteListener(null);
              _this12.Node_zp_light.setAnimation(0, "2", true);
              var Node_x10_light = _this12.Node_zp_light.node.parent.getChildByName("Node_x10_light").getComponent(sp.Skeleton);
              Node_x10_light.node.active = true;
              Node_x10_light.setAnimation(0, "idle", true);
              var Node_freeMask = _this12.Node_effectRoot.parent.getChildByName("Node_freeMask");
              Node_freeMask.active = true;
              Node_freeMask.getComponent(UIOpacity).opacity = 0;
              tween(Node_freeMask.getComponent(UIOpacity)).to(0.25, {
                opacity: 150
              }).start();
              var Node_root = _this12.node.getChildByName("Node_root");
              // Node_root.runAction(
              //     cc.sequence(
              //         Cattle_shake.create(5, 3, 3),
              //         cc.callFunc(() => {
              //             Node_root.position = cc.v3(0);
              //         }, this)
              //     )
              // );
              tween(Node_root).shake(5, 3, 3).call(function () {
                Node_root.position = v3(0);
              }).start();
              CattleUtils.instance.playOneShot(eSound.fastspinStart);
            }, 1.5);
          }
        };
        _proto.addSymbolTemp = function addSymbolTemp() {
          var _this13 = this;
          var iCount = Math.floor(Math.random() + 2);
          for (var i = 0; i < iCount; i++) {
            this.scheduleOnce(function () {
              var newSym = instantiate(_this13.Node_symbolItem);
              newSym.scale = v3(0.5, 0.5, 1);
              var itemInfo = {
                bonusSymbol: eSymbol.WILD,
                //CattleDef.eSymbol.A,
                amount: Math.random() * 5000 + 2000,
                IsReward: false
              };
              var com = newSym.getComponent(Cattle_symbolItem);
              com.initItem(itemInfo, -1, 0);
              var randCol = Math.floor(Math.random() * 3);
              var symbolListNode = _this13.Cattle_symbolList[randCol].node;
              var Node_tempRoot = find("Node_root/Node_symbolTempRoot", _this13.node);
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
        _proto.doEnterFree = function doEnterFree() {
          var _this14 = this;
          if (CattleModel.instance.freeStatus > eRunStatus.START) {
            return;
          }
          this.scheduleOnce(function () {
            CattleModel.instance.freeStatus = eRunStatus.RUNNING;
          }, 2.25);
          CattleUtils.instance.playSound(eSound.bgm_feature_intro, false, function () {
            //     cc.audioEngine.resumeMusic();
            CattleUtils.instance.playBgMusic(eSound.bgm_free);
          });
          this.scheduleOnce(function () {
            _this14.doStartRun();
          }, 2.0);
        };
        _proto.doEndFree = function doEndFree() {
          var _this15 = this;
          var Node_root = this.node.getChildByName("Node_root");
          tween(Node_root).to(0.5, {
            scale: v3(1, 1, 1)
          }).call(function () {
            _this15.Node_Cattle.node.active = true;
          }).start();
          var Node_freeEffect = this.Node_Cattle.node.parent.getChildByName("Node_freeEffect");
          for (var _iterator11 = _createForOfIteratorHelperLoose(Node_freeEffect.children), _step11; !(_step11 = _iterator11()).done;) {
            var childNode = _step11.value;
            tween(childNode).to(0.5, {
              position: v3(childNode.getPosition().x < 0 ? -600 : 600, childNode.position.y)
            }).start();
          }
          var Node_freeTitle = Node_root.getChildByName("Node_freeTitle");
          tween(Node_freeTitle.getComponent(UIOpacity)).to(0.5, {
            opacity: 0
          }).call(function () {
            Node_freeTitle.active = false;
            CattleUtils.instance.playOneShot(eSound.voxGoldQuit);
          }).start();
          AudioManager.instance.pauseMusic();

          //        //特殊模式结束金牛发声
          CattleUtils.instance.playOneShot(eSound.voxGoldWin);

          //        //显示得分 tip
          this.scheduleOnce(function () {
            _this15.Node_tipEffect.node.active = true;
            var rAni_win = ["bigwin_win", "bigwin2_win", "bigwin2_win"];
            var rAni_idle = ["bigwin_idle", "bigwin2_idle", "bigwin2_idle"];
            _this15.Node_tipEffect.setAnimation(0, rAni_win[_this15.curBigWinLevel], false);
            _this15.Node_tipEffect.addAnimation(0, rAni_idle[_this15.curBigWinLevel], true);
            _this15.Node_helpTip.active = false;
            _this15.Node_winTip.active = true;
            var com_Cattle_winTip = _this15.Node_winTip.getComponent(Cattle_winTip);
            com_Cattle_winTip.doShow(CattleModel.instance.totalFreeWin, true);
            CattleUtils.instance.playSound(eSound.prizeBigwinAfter);
            if (CattleModel.instance.curTotalWin > 0) {
              //                //gengxin
              CattleUtils.instance.updateLabelAdd(_this15.Label_win, CattleModel.instance.totalFreeWin);
              EventManager.emit(eEvent.updateWin, CattleModel.instance.totalFreeWin);
            }
            if (CattleModel.instance.endBalance != CattleModel.instance.curBalance) {
              CattleModel.instance.curBalance = CattleModel.instance.endBalance;
              _this15.updateGold();
            }
            _this15.hideFree();
          }, 0.75);
        };
        _proto.onGoldCollect = function onGoldCollect(collectType, amount) {
          if (amount === void 0) {
            amount = 0;
          }
          this.collectTimes++;
          if (collectType == 0) {
            var rAni = ["fx_wild_collect", "fx_wild_collect2", "fx_wild_collect3"];
            var rAni_idle = ["fx_idle", "fx_idle2", "fx_idle3"];
            if (this.collectTimes > 2) {
              this.collectTimes = 2;
            }
            this.Node_Cattle.setAnimation(0, "wild_collect", false);
            this.Node_Cattle.addAnimation(0, "idle", true);
            this.Node_Cattle.setAnimation(1, rAni[this.collectTimes], false);
            this.Node_Cattle.addAnimation(1, rAni_idle[this.collectTimes], true);
          } else {
            var rAni_win2 = ["bigwin_win", "bigwin2_win", "bigwin2_win"];
            var _rAni_idle = ["bigwin_idle", "bigwin2_idle", "bigwin2_idle"];
            this.Node_tipEffect.node.active = true;

            //            //显示得分 tip
            this.Node_tipEffect.setAnimation(0, rAni_win2[this.curBigWinLevel], false);
            this.Node_tipEffect.addAnimation(0, _rAni_idle[this.curBigWinLevel], true);
            var newNode = instantiate(this.Node_tipEffect.node);
            this.Node_tipEffect.node.parent.addChild(newNode);
            var newNodeAni = newNode.getComponent(sp.Skeleton);
            newNodeAni.setAnimation(0, "addup", false);
            newNodeAni.setCompleteListener(function () {
              newNodeAni.setCompleteListener(null);
              newNode.destroyFromParent();
            });
            CattleModel.instance.curTotalWin += amount;
            this.Node_helpTip.active = false;
            this.Node_winTip.active = true;
            var com_Cattle_winTip = this.Node_winTip.getComponent(Cattle_winTip);
            com_Cattle_winTip.doShow(CattleModel.instance.curTotalWin);
            if (CattleModel.instance.curTotalWin > 0) {
              //                //gengxin
              CattleUtils.instance.updateLabelAdd(this.Label_win, CattleModel.instance.curTotalWin);
              EventManager.emit(eEvent.updateWin, CattleModel.instance.curTotalWin);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(CattleModel.instance.curBalance);
          if (strGold != this.Label_gold.string) {
            CattleUtils.instance.updateLabel(this.Label_gold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            //            // case CattleDef.eProto.HD_info: {
            //            //     //横向
            //            //     let InitExtraPos = [];
            //            //     for (let i = 0; i < 4; i++) {
            //            //         let InitPosMsg = CattleModel.instance.gameInfo.InitPosMsg[i + 1];

            //            //         let symbolInfo = InitPosMsg[InitPosMsg.length - 1];
            //            //         // if (symbolInfo.Sym == CattleDef.eSymbol.CAISHEN) {
            //            //         //     symbolInfo.Sym = Math.floor(Math.random() * CattleDef.eSymbol.Q) + 2;
            //            //         // }
            //            //         InitExtraPos.push(symbolInfo);
            //            //     }
            //            //     this.Cattle_symbolList[0].init(InitExtraPos);

            //            //     //纵向
            //            //     for (let i = 1; i < this.Cattle_symbolList.length; i++) {
            //            //         let InitPosMsg = CattleModel.instance.gameInfo.InitPosMsg[i - 1];
            //            //         this.Cattle_symbolList[i].init(InitPosMsg);
            //            //     }
            //            //     if (CattleModel.instance.totalFreeTimes > 0) {
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
                CattleUtils.instance.setBtnBetGray(this.Button_run.node.getChildByName("Background"), false);
                this.doStartRun();
                this.updateGold();
                break;
              }

            //            //////////////////////////////
            case ConfigManager.protocolHall.getWallet:
            case ConfigManager.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case ConfigManager.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.gameShow();
                break;
              }
          }
        };
        return CattleGameView;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Cattle_symbolList", [_dec7], {
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
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Button_auto", [_dec21], {
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
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineIndex_left", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineIndex_right", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineEffect", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_lineWin", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_Cattle", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "Node_zp_light", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolList", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Node_symbolItem", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_reel_bg", [_dec31], {
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

System.register("chunks:///_virtual/CattleModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './CattleDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, _createForOfIteratorHelperLoose, cclegacy, GameDef, eRunStatus, eSpecialType;
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
      eSpecialType = module.eSpecialType;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d38acy0nZhAsKniOPlWvJXr", "CattleModel", undefined);
      var CattleModel = exports('CattleModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CattleModel, _GameDef$BaseSington);
        function CattleModel() {
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
          //    // betResult: CattleDef.IOpenResult = null;
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
        var _proto = CattleModel.prototype;
        //    ////////////////////////////////////////////////////////////
        //    ////////////////////////////////
        //    /**
        //     * 退出房间  清理游戏数据
        //     */
        _proto.clearGameData = function clearGameData() {};
        _createClass(CattleModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(result) {
            //        // //test
            //        // result.special = true; //Math.random() > 0.98; //Math.random() > 0.98; //true; //

            this._betResult = {
              Res: [],
              special: result.special
            };
            if (result.special) {
              var times = Math.floor(Math.random() * 5) + 1;
              this.totalFreeTimes = times;
              for (var i = 0; i < times; i++) {
                var rTemp = {
                  openNums: [],
                  prizeAmount: 0,
                  prizeInfo: []
                };
                var symbol = [1, 2, 3, 4, 5, 6];
                var index = Math.floor(Math.random() * 5);
                var bonusSymbol = symbol[index];
                symbol.splice(index, 1);
                for (var j = 0; j < 10; j++) {
                  var jIndex = Math.floor(Math.random() * symbol.length);
                  rTemp.openNums[j] = {
                    bonusSymbol: j % 3 != 1 && j != 9 ? bonusSymbol : symbol[jIndex],
                    IsReward: false
                  };
                }
                this._betResult.Res.push(rTemp);
              }
            }

            //        //检测是否特殊
            var isSpecial = true;
            for (var _i = 0; _i < result.openNums.length; _i++) {
              if (_i % 3 != 2 && result.openNums[_i] != result.openNums[0]) {
                isSpecial = false;
              }
            }
            this.specialStartCol = result.special ? 1 : isSpecial ? 2 : -1;
            this.specialStatues = isSpecial ? eSpecialType.NOMAL_10X : result.special ? eSpecialType.SPECIAL : Math.floor(Math.random() * 10 + eSpecialType.SPECIALFaile);
            var resultTemp = {
              openNums: [],
              prizeAmount: 0,
              prizeInfo: []
            };
            for (var _i2 = 0; _i2 < result.openNums.length; _i2++) {
              resultTemp.openNums[_i2] = {
                bonusSymbol: result.openNums[_i2],
                IsReward: false
              };
            }
            resultTemp.prizeAmount = result.prizeAmount;
            resultTemp.prizeInfo = result.prizeInfo;
            if (result.prizeAmount > 0) {
              for (var _iterator = _createForOfIteratorHelperLoose(result.prizeInfo), _step; !(_step = _iterator()).done;) {
                var prizeInfo = _step.value;
                resultTemp.openNums[prizeInfo.prizeIdx[0]].IsReward = true;
                resultTemp.openNums[prizeInfo.prizeIdx[1]].IsReward = true;
                resultTemp.openNums[prizeInfo.prizeIdx[2]].IsReward = true;
              }
            }
            this._betResult.Res.push(resultTemp);
          }
        }]);
        return CattleModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CattleScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ViewManager.ts', './Common.ts', './CattleDef.ts', './CattleUtils.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, tween, UIOpacity, v3, Component, AudioManager, ViewManager, Common, cBundle, eEvent, CattleUtils, MainManager;
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
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
    }, function (module) {
      CattleUtils = module.CattleUtils;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "70396q0seNL95c2LHUCZr6J", "CattleScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DataManager = MainManager.instance.getDataManager();
      var NetManager = MainManager.instance.getNetManager();
      var CattleScene = exports('default', (_dec = ccclass("CattleScene"), _dec2 = menu("game/CattleGame/CattleScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CattleScene, _Component);
        function CattleScene() {
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
        var _proto = CattleScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.waitServiceSendData();
          CattleUtils.instance.bundle = assetManager.getBundle(cBundle);
          CattleUtils.instance.preLoad();
          CattleUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            //            // let orientation = cc.macro.ORIENTATION_LANDSCAPE;
            //            // let designResolution = cc.size(1334, 750);
            //            // let resolutionPolicy = cc.ResolutionPolicy.FIXED_HEIGHT;
            //            // if (!CattleUtils.instance.isChangeOrientation()) {
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
            CattleUtils.instance.bundle.load("prefab/CattleGameView", Prefab, function (cur, total) {}, function (err, prefab) {
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
              if (CattleUtils.instance.isChangeOrientation()) {
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
        return CattleScene;
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

System.register("chunks:///_virtual/CattleUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './Common.ts', './CattleDef.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, Tween, UIOpacity, sys, SpriteFrame, sp, Font, GameDef, AudioManager, Common, eSound, eSymbol;
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
      Common = module.Common;
    }, function (module) {
      eSound = module.eSound;
      eSymbol = module.eSymbol;
    }],
    execute: function () {
      cclegacy._RF.push({}, "17914QTscxHb5PkL/xHUOqV", "CattleUtils", undefined);
      var symbol_nomal_icon = ["h_ingot",
      //元宝
      "h_chest",
      //箱子
      "h_bag",
      //钱袋
      "h_packets",
      //红包
      "h_oranges",
      //桔子
      "h_crackers",
      //爆竹
      "s_wild" //任意
      ];

      var symbol_aniData = ["h_ingots_atlas_symbols", "h_chest_atlas_symbols", "h_bag_atlas_symbols", "h_packets_atlas_symbols", "h_oranges_atlas_symbols", "h_crackers_atlas_symbols", "s_wild_atlas_specials"];
      var CattleUtils = exports('CattleUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(CattleUtils, _GameDef$BaseSington);
        function CattleUtils() {
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
        var _proto = CattleUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/CattleGameView");
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
            soundPath = eSound.bgm_nomal;
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
          var _this8 = this;
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
            labelCom.string = isFloatFormat ? _this8.numberFormatFloat(nums / 1000, 2.0) + "K" : _this8.numberFormat(nums / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1)
          }).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat) {
          var _this9 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          CattleUtils.instance.playSound(eSound.prizeMedwinMain);
          Tween.stopAllByTarget(label.node);
          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              CattleUtils.instance.stopSound(eSound.prizeMedwinMain);
              CattleUtils.instance.playOneShot(eSound.prizeMedwinEnd);
              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this9.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this9.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).to(0.2, {
            opacity: 0
          }).call(function () {
            label.node.active = false;
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this10 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // CattleUtils.instance.playSound(CattleDef.eSound.numAdd);

          tween(label.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // CattleUtils.instance.stopSound(CattleDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node.getComponent(UIOpacity));
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this10.numberFormatFloat(curWin, 0) : "" + _this10.numberFormat(curWin, 0);
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
                strAni = isIdle ? "win_bg" : "win";
                break;
              }
            default:
              {
                strAni = isIdle ? "win_bg" : "win";
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
        _proto.getSkeletonData = function getSkeletonData(index) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = symbol_aniData[index - 1];
          //        // switch (index) {
          //        //     // case CattleDef.eSymbol.SCATTER: {
          //        //     //     strAni = "icon_scatter";
          //        //     //     break;
          //        //     // }
          //        //     case CattleDef.eSymbol.WILD: {
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
        return CattleUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/CattleGame', 'chunks:///_virtual/CattleGame'); 
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