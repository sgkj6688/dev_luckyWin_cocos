System.register("chunks:///_virtual/Mines_btnEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "864b9PblEZOia3j88WQz/+S", "Mines_btnEffect", undefined); // // Learn TypeScript:
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode;
      var DefaultAnimsEnum = Enum({
        "<None>": 0
      });
      var Mines_btnEffect = exports('default', (_dec = ccclass("MinesBtnEffect"), _dec2 = menu("game/MinesGame/Mines_btnEffect"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property({
        type: DefaultAnimsEnum,
        visible: function visible() {
          return !(this._skeletonData == null);
        }
      }), _dec(_class = _dec2(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mines_btnEffect, _Component);
        function Mines_btnEffect() {
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
        var _proto = Mines_btnEffect.prototype;
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

        _createClass(Mines_btnEffect, [{
          key: "skeletonData",
          get: function get() {
            return this._skeletonData;
          },
          set: function set(val) {
            this._skeletonData = val;
            // if (EDITOR && this._skeletonData) {
            //     setEnumAttr(this, "animation", this._getAnimEnum(this._skeletonData) || DefaultAnimsEnum);
            //     EDITOR.Utils.refreshSelectedInspector("node", this.node.uuid);
            // }
          }
        }]);

        return Mines_btnEffect;
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

System.register("chunks:///_virtual/Mines_record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './NetManager.ts', './MinesDef.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Common, NetManager, eProto, EventManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2a8a6izEQlA55f5Owexj4Rj", "Mines_record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mines_record = exports('default', (_dec = ccclass("Mines_record"), _dec2 = menu("game/MinesGame/Mines_record"), _dec3 = property(gts.List), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mines_record, _Component);
        function Mines_record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Mines_record.prototype;
        _proto.onLoad = function onLoad() {
          // Common.showWait();
          this.scheduleOnce(Common.closeWait, 3.0);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eProto.HD_QueryBetRecord, this.onRecvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eProto.HD_QueryBetRecord, this.onRecvData, this);
        };
        _proto.start = function start() {
          NetManager.instance.sendOnlineData(eProto.HD_QueryBetRecord, {
            Offset: 0,
            PageSize: 100,
            RecordType: "mines"
          });
        };
        _proto.onRecvData = function onRecvData(data) {
          switch (data.cmd) {
            case eProto.HD_QueryBetRecord:
              {
                if (data.Data.BetRecord) {
                  this.scrollView_content.setData(data.Data.BetRecord);
                  this.scrollView_content.refresh();
                }
                break;
              }
          }
        };
        return Mines_record;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
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

System.register("chunks:///_virtual/Mines_recordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "27c40XT6s5BTIf63LXZE01S", "Mines_recordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mines_recordItem = exports('default', (_dec = ccclass("Mines_recordItem"), _dec2 = menu("game/MinesGame/Mines_recordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mines_recordItem, _Component);
        function Mines_recordItem() {
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
          _this._gtItem = null;
          return _this;
        }
        var _proto = Mines_recordItem.prototype;
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
          var date = Common.getTimeFormat(tempData.CreateAt);
          this.Label_time.string = date.time;
          this.Label_date.string = date.date;
          this.Label_bet.string = "" + Common.ChangeMoneyFormat(tempData.BetAmount, 3);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyFormat(tempData.Income, 3);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
        };
        _createClass(Mines_recordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Mines_recordItem;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Mines_winTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MinesUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, SpriteFrame, Sprite, Tween, tween, v3, Component, MinesUtils;
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
      MinesUtils = module.MinesUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e72f5U+06hKup33j43RRKgc", "Mines_winTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Mines_winTip = exports('default', (_dec = ccclass("MinesWinTip"), _dec2 = menu("game/MinesGame/Mines_winTip"), _dec3 = property(Label), _dec4 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Mines_winTip, _Component);
        function Mines_winTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_win", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrSpriteFrame", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Mines_winTip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          var Node_title = this.node.getChildByName("Node_title").getComponent(Sprite);
          Node_title.spriteFrame = this.arrSpriteFrame[0];
        };
        _proto.onDisable = function onDisable() {
          Tween.stopAllByTarget(this.node);
        }
        //    // update (dt) {}
        ;

        _proto.doShowRate = function doShowRate(gold) {
          var _this2 = this;
          var Node_title = this.node.getChildByName("Node_title");
          Node_title.getComponent(Sprite).spriteFrame = this.arrSpriteFrame[0];
          tween(this.node).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            _this2.Label_win.string = MinesUtils.instance.numberFormat(gold / 1000, 2.0) + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
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
            MinesUtils.instance.updateLabelAdd(this.Label_win, gold);
          } else {
            tween(this.node).to(0.15, {
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              //                    // this.Label_win.string = `${MinesUtils.instance.numberFormat(gold / 1000, 2.0)}K`;

              var Node_title = _this3.node.getChildByName("Node_title").getComponent(Sprite);
              Node_title.spriteFrame = _this3.arrSpriteFrame[1];
            }).to(0.1, {
              scale: v3(1.0, 1.0, 1.0)
            }).start();
            MinesUtils.instance.updateLabelAdd(this.Label_win, gold);
          }
        };
        return Mines_winTip;
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

System.register("chunks:///_virtual/MinesCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './MinesDef.ts', './MinesModel.ts', './Common.ts', './ViewManager.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, sys, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eStatus, cBundle, MinesModel, Common, ViewManager, EventManager, ConfigManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eStatus = module.eStatus;
      cBundle = module.cBundle;
    }, function (module) {
      MinesModel = module.MinesModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aaea9u2capInrUG8XpU/r7q", "MinesCtrl", undefined);
      var MinesCtrl = exports('MinesCtrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(MinesCtrl, _GameDef$BaseCtrl);
        function MinesCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this.isReqBet = false;
          return _this;
        }
        var _proto = MinesCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete MinesCtrl._instance;
          MinesCtrl._instance = null;
          MinesModel.destroy();
        }
        //    //baseCtrl/////////////////////////////////////
        //    //#region baseCtrl
        ;

        _proto.initProto = function initProto() {
          //        //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          //        //注册网络监听--本游戏
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          //        //注册网络监听--大厅
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.off(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.reqStart = function reqStart(mineCount, betAmount) {
          if (MinesModel.instance.curBalance < betAmount) {
            Common.showTip(i18n.lang[10001], sys.isMobile);
            return false;
          }
          this.SendData(eProto.HD_Start, {
            mineCount: mineCount,
            betAmount: betAmount
          });
          return true;
        };
        _proto.reqOpen = function reqOpen(index) {
          this.isReqBet = true;
          this.SendData(eProto.HD_Open, {
            pos: index
          });
        };
        _proto.reqCashOut = function reqCashOut() {
          this.SendData(eProto.HD_CashOut, {});
        }

        //    /**请求抽水 */
        ;

        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "mines"
          });
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd != MinesDef.eProto.allBet && data.cmd != MinesDef.eProto.Bet) {
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "" && data.Code != 30009) {
              Common.showTip(strTip, sys.isMobile);
            }
            if (data.cmd == eProto.HD_Open) {
              this.isReqBet = false;
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_Enter:
              {
                MinesModel.instance.gameInfo = data.Data;
                MinesModel.instance.chipList = MinesModel.instance.gameInfo.coinList || MinesModel.instance.chipList;
                MinesModel.instance.gameInfo.betAmount = data.Data.betAmount == 0 ? MinesModel.instance.chipList[0] : data.Data.betAmount;
                MinesModel.instance.gameInfo.mineCount = data.Data.mineCount == 0 ? 3 : data.Data.mineCount;
                MinesModel.instance.gameStatus = MinesModel.instance.gameInfo.status || eStatus.none;
                MinesModel.instance.gameInfo.openIdx = MinesModel.instance.gameInfo.openIdx || [];
                break;
              }
            case eProto.HD_Start:
              {
                MinesModel.instance.gameInfo = data.Data;
                MinesModel.instance.gameStatus = MinesModel.instance.gameInfo.status || eStatus.none;
                break;
              }
            case eProto.HD_Open:
              {
                this.isReqBet = false;
                MinesModel.instance.gameInfo = data.Data;
                MinesModel.instance.gameStatus = MinesModel.instance.gameInfo.status || eStatus.none;
                break;
              }
            case eProto.HD_CashOut:
              {
                emitData = data.Data;
                MinesModel.instance.gameInfo = data.Data;
                MinesModel.instance.gameStatus = MinesModel.instance.gameInfo.status || eStatus.none;
                break;
              }
            case eProto.getPumping:
              {
                MinesModel.instance.nPummping = data.Data.Pumping;
                break;
              }

            //            //////////////////////////////////////////////////////
            //            //获取钱包-推送钱包-断线重连
            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Mines=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (MinesModel.instance.curBalance > 0) {
                  MinesModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                MinesModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Mines=pushWallet==" + _HD_Wallet.VndBalance);
                if (MinesModel.instance.curBalance > 0) {
                  MinesModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                MinesModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        }
        //    //#endregion
        //    //////////////////////////////////////////////////////////////////
        ;

        _proto.SendData = function SendData(msgid, data) {
          if (data === void 0) {
            data = {};
          }
          var log = "\u53D1\u9001\u6D88\u606F\uFF0C msgId:" + msgid + ", data:" + JSON.stringify(data);
          if (NetManager.instance._connect) {
            gts.Debug.Log("==SendData== " + log);
            NetManager.instance.sendOnlineData("" + msgid, data);
          } else {
            gts.Debug.Log("(FAILED): " + log);
          }
        };
        _createClass(MinesCtrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(cBundle);
          }
        }]);
        return MinesCtrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinesDef.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3d118l4zKdJo5PinmZD9HPO", "MinesDef", undefined);
      //gameDef moudle
      //猜纸牌
      var cBundle = exports('cBundle', "MinesGame");
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onUpdateRecord"] = "onUpdateRecord";
        return eEvent;
      }({}));
      var cLight = exports('cLight', 28);
      var eStatus = exports('eStatus', {
        none: "none",
        start: "inGame",
        //inGame
        result: "loss"
      });
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_Enter"] = "mines/HD_Enter";
        eProto["HD_Start"] = "mines/HD_Start";
        eProto["HD_Open"] = "mines/HD_Open";
        eProto["HD_CashOut"] = "mines/HD_CashOut";
        eProto["HD_history"] = "mines/HD_history";
        eProto["RECORD"] = "mines/HD_Record";
        eProto["HD_QueryBetRecord"] = "lobby/HD_QueryBetRecord";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        return eProto;
      }({})); //抽水
      var eTip = exports('eTip', /*#__PURE__*/function (eTip) {
        eTip[eTip["none"] = 0] = "none";
        eTip[eTip["auto"] = 1] = "auto";
        eTip[eTip["start"] = 2] = "start";
        eTip[eTip["all"] = 3] = "all";
        return eTip;
      }({}));
      /**音效 */
      var eSound = exports('eSound', /*#__PURE__*/function (eSound) {
        eSound["bg"] = "sound/bg";
        eSound["Boom"] = "sound/Boom";
        eSound["Hit"] = "sound/Hit";
        eSound["Start"] = "sound/Start";
        eSound["Win"] = "sound/Win";
        return eSound;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////////////////////////////
      /**钱包信息 */
      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"mines","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"mines/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinesGame", ['./MinesCtrl.ts', './MinesDef.ts', './MinesGameView.ts', './MinesModel.ts', './MinesScene.ts', './MinesUtils.ts', './Mines_btnEffect.ts', './Mines_record.ts', './Mines_recordItem.ts', './Mines_winTip.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MinesGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './DataManager.ts', './I18n.ts', './MinesDef.ts', './MinesModel.ts', './MinesCtrl.ts', './MinesUtils.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Node, Button, Label, Sprite, v3, instantiate, UIOpacity, UITransform, Tween, tween, sys, find, Toggle, GameDef, ConfigManager, EventManager, NetManager, ViewManager, Common, DataManager, UserKey, i18n, eProto, eTip, eSound, eStatus, eEvent, MinesModel, MinesCtrl, MinesUtils, GUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Node = module.Node;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Tween = module.Tween;
      tween = module.tween;
      sys = module.sys;
      find = module.find;
      Toggle = module.Toggle;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      eProto = module.eProto;
      eTip = module.eTip;
      eSound = module.eSound;
      eStatus = module.eStatus;
      eEvent = module.eEvent;
    }, function (module) {
      MinesModel = module.MinesModel;
    }, function (module) {
      MinesCtrl = module.MinesCtrl;
    }, function (module) {
      MinesUtils = module.MinesUtils;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;
      cclegacy._RF.push({}, "76361tOSSxCMayyyEpVGXe6", "MinesGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var MinesGameView = exports('default', (_dec = ccclass("MinesGameView"), _dec2 = menu("game/MinesGame/MinesGameView"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Label), _dec14 = property(Label), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Label), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Button), _dec21 = property(Button), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Sprite), _dec28 = property(Sprite), _dec29 = property(Button), _dec30 = property(Button), _dec31 = property(Button), _dec32 = property(Button), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(MinesGameView, _GameDef$BaseView);
        function MinesGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "gameTip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "avatar", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeleton_start", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "skeleton_auto", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_road", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gameNo", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bomb", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bet", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "listContent", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_RateItem", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_start", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_auto", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_stone", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_icon", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconTemp", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betBase", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_autoSet", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteBomb", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteBet", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_bombAdd", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_bombRedus", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_betAdd", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_betRedus", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoTip", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startTip", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_rounds", _descriptor33, _assertThisInitialized(_this));
          _this.isShowTip_auto = false;
          _this.isShowTip_start = false;
          return _this;
        }
        var _proto = MinesGameView.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, MinesCtrl.instance);
          this.initUIView();
          MinesUtils.instance.loadRes(function () {
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            NetManager.instance.sendOnlineData(eProto.HD_Enter, {});
          });
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          this.doClear();
          MinesModel.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);

          // // 删除数据
          // localStorage.removeItem("runTip_start");
          // localStorage.removeItem("runTip_auto");
        };

        _proto.start = function start() {
          Common.closeWait();
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.gameShow = function gameShow() {
          NetManager.instance.waitServiceSendData();

          // this.scheduleOnce(() => {
          //     Common.showLog("前台");

          //     if (NetManager.instance._connect == true) {
          //         this.doClear();
          //         this.unscheduleAllCallbacks();
          //         NetManager.instance.sendOnlineData(MinesDef.eProto.HD_Enter, {});
          //     }
          // }, 0.1);
        }
        ///////////////////////////////////////////////////////////////////
        ;

        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(MinesModel.instance.curBalance);
          if (strGold != this.labGold.string) {
            MinesUtils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.initUIView = function initUIView() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.labGold.string = Common.numFormat(gold);
          this.Label_win.string = "0";
          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
          var runTip_start = parseInt(localStorage.getItem(uid + "_runTip_start") || "0");
          var runTip_auto = parseInt(localStorage.getItem(uid + "_runTip_auto") || "0");
          this.isShowTip_start = runTip_start == 0 ? true : false;
          this.isShowTip_auto = runTip_auto == 0 ? true : false;
        };
        _proto.doClear = function doClear() {
          if (this.Node_icon.children.length > 0) {
            this.doResetStone();
            for (var _iterator = _createForOfIteratorHelperLoose(this.listContent.children), _step; !(_step = _iterator()).done;) {
              var childNode = _step.value;
              childNode.scale = v3(1.0, 1.0, 1.0);
              var aniCar = childNode.getChildByName("car").getComponent(sp.Skeleton);
              aniCar.setAnimation(0, "idle", true);
            }
            this.setRate(0);
            this.gameTip.node.active = false;
            var Label_win = this.gameTip.node.getChildByName("Label_win");
            Label_win.active = false;
            this.gold.node.active = false;
            MinesModel.instance.winLevel = 0;
            MinesUtils.instance.updateLabel(this.Label_win, 0);
            this.Label_gameNo.string = "No: " + MinesModel.instance.gameInfo.gameNo;
            this.avatar.setAnimation(0, "idle1", true);
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this2 = this;
          return new Promise(function (resolve, reject) {
            _this2.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        }

        //////////////////////////////////////////////////
        /**
         * 0：allHide 1:autoTip  2:startTip 3:showAll
         * @param tipCode
         */;
        _proto.showTipStart = function showTipStart(tipCode) {
          if (tipCode === void 0) {
            tipCode = eTip.none;
          }
          switch (tipCode) {
            case eTip.none:
              {
                this.autoTip.active = false;
                this.startTip.active = false;
                break;
              }
            case eTip.auto:
              {
                this.autoTip.active = this.isShowTip_start;
                this.startTip.active = false;
                break;
              }
            case eTip.start:
              {
                this.autoTip.active = false;
                this.startTip.active = this.isShowTip_start;
                break;
              }
            default:
              {
                this.autoTip.active = this.isShowTip_start;
                this.startTip.active = this.isShowTip_start;
                break;
              }
          }
        };
        _proto.showTipAuto = function showTipAuto(tipCode) {
          if (tipCode === void 0) {
            tipCode = eTip.none;
          }
          switch (tipCode) {
            case eTip.none:
              {
                this.autoTip.active = false;
                this.startTip.active = false;
                break;
              }
            case eTip.auto:
              {
                this.autoTip.active = this.isShowTip_auto;
                this.startTip.active = false;
                break;
              }
            case eTip.start:
              {
                this.autoTip.active = false;
                this.startTip.active = this.isShowTip_auto;
                break;
              }
            default:
              {
                this.autoTip.active = this.isShowTip_auto;
                this.startTip.active = this.isShowTip_auto;
                break;
              }
          }
        };
        _proto.doResetStone = function doResetStone() {
          this.Node_icon.destroyAllChildren();
          var itemTemp = this.Node_stone.getChildByName("Node_item_0");
          for (var i = 0; i < 25; i++) {
            var Node_item = this.Node_stone.getChildByName("Node_item_" + i);
            if (!Node_item) {
              Node_item = instantiate(itemTemp);
              Node_item.name = "Node_item_" + i;
              this.Node_stone.addChild(Node_item);
            }
            Node_item.active = true;
            Node_item.getComponent(Button).interactable = true;
            Node_item.getComponent(UIOpacity).opacity = 255;
            var aniTag = Math.floor(Math.random() * 3) + 1;
            Node_item.children[0].name = "stone_" + aniTag;
            var aniStone = Node_item.children[0].getComponent(sp.Skeleton);
            aniStone.setAnimation(0, "quite" + aniTag, true);
          }
        };
        _proto.setOpenResult = function setOpenResult(index, isWin) {
          var _this3 = this;
          if (isWin === void 0) {
            isWin = true;
          }
          return new Promise(function (resolve, reject) {
            var Node_item = _this3.Node_stone.getChildByName("Node_item_" + index);
            Node_item.getComponent(Button).interactable = false;
            _this3.scheduleOnce(function () {
              var newIcon = instantiate(_this3.iconTemp);
              newIcon.name = "icon_" + index;
              newIcon.active = true;
              newIcon.position = Node_item.position;
              _this3.Node_icon.addChild(newIcon);
              var aniIcon = newIcon.getComponent(sp.Skeleton);
              if (isWin) {
                aniIcon.setAnimation(0, "gold_intro", false);
                aniIcon.addAnimation(0, "gold_idle", true);
              } else {
                MinesUtils.instance.playOneShot(eSound.Boom);
                aniIcon.setAnimation(0, "bomb", false);
                aniIcon.setCompleteListener(function () {
                  aniIcon.setCompleteListener(null);
                });
              }
            }, 1.0);

            //

            var aniStone = Node_item.children[0].getComponent(sp.Skeleton);
            var aniTag = parseInt(Node_item.children[0].name.replace("stone_", ""));
            var hit = instantiate(aniStone.node);
            if (hit) {
              _this3.schedule(function () {
                MinesUtils.instance.playSound(eSound.Hit, false, null, false, 0.2);
              }, 0.25, 2);
              _this3.Node_effectRoot.addChild(hit);
              var wPos = aniStone.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
              hit.position = _this3.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(wPos);
              var hitAni = hit.getComponent(sp.Skeleton);
              hitAni.setAnimation(0, "hit", false);
              hitAni.setCompleteListener(function () {
                hit.destroyFromParent();
              });
            }
            aniStone.setAnimation(0, "stone" + aniTag, false);
            aniStone.setCompleteListener(function () {
              aniStone.setCompleteListener(null);
              Node_item.getComponent(UIOpacity).opacity = 0;
              return resolve(true);
            });
          });
        };
        _proto.initRate = function initRate() {
          var _this4 = this;
          if (MinesModel.instance.gameInfo.oddList) {
            this.listContent.destroyAllChildren();
            var rateList = MinesModel.instance.gameInfo.oddList["" + MinesModel.instance.gameInfo.mineCount];
            for (var i = 0; i < rateList.length; i++) {
              var newItem = instantiate(this.Node_RateItem);
              newItem.name = "item_" + i;
              this.listContent.addChild(newItem);
              newItem.active = true;
              var Label_rate = newItem.getChildByName("Label_rate").getComponent(Label);
              Label_rate.string = "x" + rateList[i];
            }
            if (this.listContent.children.length > 0) {
              this.listContent.children[0].scale = v3(1.2, 1.2, 1.2);
            }
            Tween.stopAllByTarget(this.Node_road);
            tween(this.Node_road).to(3, {
              position: v3(444, 0, 0)
            }).call(function () {
              _this4.Node_road.position = v3(-444, 0, 0);
            }).union().repeatForever().start();
          }
        };
        _proto.updateRate = function updateRate() {
          var _this5 = this;
          tween(this.listContent).to(0.4, {
            position: v3(-450 - this.listContent.getComponent(UITransform).width, 0, 0)
          }, {
            easing: "cubicIn"
          }).call(function () {
            if (MinesModel.instance.gameInfo.oddList) {
              _this5.listContent.destroyAllChildren();
              var rateList = MinesModel.instance.gameInfo.oddList["" + MinesModel.instance.gameInfo.mineCount];
              for (var i = 0; i < rateList.length; i++) {
                var newItem = instantiate(_this5.Node_RateItem);
                newItem.name = "item_" + i;
                _this5.listContent.addChild(newItem);
                newItem.active = true;
                var Label_rate = newItem.getChildByName("Label_rate").getComponent(Label);
                Label_rate.string = "x" + rateList[i];
              }
            }
          }).delay(0.1).call(function () {
            if (_this5.listContent.children.length > 0) {
              _this5.listContent.position = v3(450 + _this5.listContent.getComponent(UITransform).width, 0, 0);
              _this5.listContent.children[0].scale = v3(1.2, 1.2, 1.2);
            }
          }).to(0.4, {
            position: v3(-450, 0, 0)
          }, {
            easing: "cubicOut"
          }).start();
        };
        _proto.setRate = function setRate(index) {
          var _this6 = this;
          if (this.listContent.children.length == 0) {
            return;
          }
          if (index == 0) {
            var curItem = this.listContent.getChildByName("item_" + index);
            tween(curItem).to(0.4, {
              scale: v3(1.2, 1.2, 1.2)
            }).start();
            Tween.stopAllByTarget(this.listContent);
            tween(this.listContent).to(0.4, {
              position: v3(-450 - index * 140, 0, 0)
            }, {
              easing: "cubicOut"
            }).start();
          } else {
            var lastItem = this.listContent.getChildByName("item_" + (index - 1));
            var aniCar = lastItem.getChildByName("car").getComponent(sp.Skeleton);
            aniCar.setAnimation(0, "boom", false);
            aniCar.setCompleteListener(function () {
              aniCar.setCompleteListener(null);
              lastItem.scale = v3(0.0, 0.0, 0.0);
              var curItem = _this6.listContent.getChildByName("item_" + index);
              tween(curItem).to(0.4, {
                scale: v3(1.2, 1.2, 1.2)
              }).call(function () {
                lastItem.scale = v3(1.0, 1.0, 1.0);
                aniCar.setAnimation(0, "idle", true);
              }).start();
              Tween.stopAllByTarget(_this6.listContent);
              tween(_this6.listContent).to(0.4, {
                position: v3(-450 - index * 140, 0, 0)
              }, {
                easing: "cubicOut"
              }).start();
            });
          }
        };
        _proto.initBetBase = function initBetBase() {
          var Button_item_0 = this.Node_betBase.getChildByName("Button_item_0");
          for (var i = 0; i < MinesModel.instance.chipList.length; i++) {
            var Button_item = this.Node_betBase.getChildByName("Button_item_" + i);
            if (!Button_item) {
              Button_item = instantiate(Button_item_0);
              this.Node_betBase.addChild(Button_item);
            }
            var Label_num = Button_item.getChildByName("Label_num");
            Label_num.getComponent(Label).string = "" + Common.ChangeMoneyShow(MinesModel.instance.chipList[i], 3);
          }
        };
        _proto.onStoneClick = function onStoneClick(event) {
          if (this.Node_betBase.active) {
            this.Node_betBase.active = false;
          }
          var boxItem = event.target;
          var index = parseInt(boxItem.name.replace("Node_item_", ""));
          var btnboxItem = boxItem.getComponent(Button);
          if (!MinesModel.instance.isAuto) {
            if (MinesCtrl.instance.isReqBet || MinesModel.instance.gameStatus != eStatus.start) {
              return;
            }
            btnboxItem.interactable = false;
            MinesCtrl.instance.reqOpen(index);
            this.avatar.setAnimation(0, "hit", false);
            this.avatar.addAnimation(0, "idle" + (MinesModel.instance.winLevel == 0 ? 1 : MinesModel.instance.winLevel), true);
          } else if (MinesModel.instance.gameStatus == eStatus.none && !MinesModel.instance.isAutoRunning) {
            btnboxItem.interactable = false;
            if (boxItem.getChildByName("autoTag").active) {
              boxItem.getChildByName("autoTag").active = !boxItem.getChildByName("autoTag").active;
              for (var i = 0; i < MinesModel.instance.arrAutoTag.length; i++) {
                if (index == MinesModel.instance.arrAutoTag[i]) {
                  MinesModel.instance.arrAutoTag.splice(i, 1);
                  break;
                }
              }
              if (this.isShowTip_auto && MinesModel.instance.arrAutoTag.length == 0) {
                this.autoTip.active = true;
                this.startTip.active = false;
              }
            } else if (25 - MinesModel.instance.arrAutoTag.length > MinesModel.instance.gameInfo.mineCount) {
              boxItem.getChildByName("autoTag").active = !boxItem.getChildByName("autoTag").active;
              MinesModel.instance.arrAutoTag.push(index);
            } else {
              Common.showTip(i18n.lang[10065], sys.isMobile);
            }
            if (this.isShowTip_auto && MinesModel.instance.arrAutoTag.length > 0) {
              this.autoTip.active = false;
              this.startTip.active = true;
            }
          }
        };
        _proto.onBaseClick = function onBaseClick(event) {
          var Button_item = event.target;
          MinesModel.instance.baseBetIndex = parseInt(Button_item.name.replace("Button_item_", ""));
          MinesModel.instance.gameInfo.betAmount = MinesModel.instance.chipList[MinesModel.instance.baseBetIndex];
          var betAmount = GUtil.changeCurrency(MinesModel.instance.gameInfo.betAmount, DataManager.instance.currency, null);
          MinesUtils.instance.updateLabel(this.Label_bet, betAmount);
          this.Node_betBase.active = false;
          this.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
          this.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
        };
        _proto.doStartAuto = function doStartAuto() {
          if (MinesModel.instance.isAuto && MinesModel.instance.autoRounds > 0) {
            MinesModel.instance.autoRounds--;
            MinesModel.instance.isAutoRunning = true;
            MinesModel.instance.autoOpenIndex = 0;
            this.Label_rounds.node.active = true;
            MinesUtils.instance.updateLabel(this.Label_rounds, MinesModel.instance.autoRounds);
            MinesModel.instance.gameStatus = eStatus.start;
            if (!MinesCtrl.instance.reqStart(MinesModel.instance.gameInfo.mineCount, MinesModel.instance.gameInfo.betAmount)) {
              MinesModel.instance.isAuto = false;
              MinesModel.instance.isAutoRunning = false;
              MinesModel.instance.autoOpenIndex = 0;
              MinesModel.instance.gameStatus = eStatus.none;
              this.skeleton_auto.setAnimation(0, "auto_idle", true);
              this.skeleton_start.setAnimation(0, "start_idle", true);
              return;
            }
            if (this.skeleton_start.animation != "cash_idle") {
              this.skeleton_start.setAnimation(0, "start", false);
              this.skeleton_start.addAnimation(0, "cash_idle", true);
            }
          } else {
            MinesModel.instance.isAuto = false;
            MinesModel.instance.isAutoRunning = false;
            MinesModel.instance.autoOpenIndex = 0;
            MinesModel.instance.gameStatus = eStatus.none;
            this.skeleton_auto.setAnimation(0, "auto_idle", true);
            this.skeleton_start.setAnimation(0, "start_idle", true);
            this.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
            this.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
            this.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
            this.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
            this.spriteBomb.grayscale = false;
            this.spriteBet.grayscale = false;
            this.Label_rounds.node.active = false;
          }
        };
        _proto.onToggleClick = function onToggleClick(toggle) {
          if (this.Node_betBase.active) {
            this.Node_betBase.active = false;
          }
          if (toggle.isChecked) {
            var index = parseInt(toggle.node.name.replace("Toggle", "")) - 1;
            MinesModel.instance.autoRoundIndex = index;
            MinesModel.instance.autoRounds = MinesModel.instance.roundList[index];
            gts.Debug.Log("autoRounds" + MinesModel.instance.autoRounds);
          }
        }

        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this7 = this;
          if (event.target.name != "Button_betBase") {
            this.Node_betBase.active = false;
          }
          switch (event.target.name) {
            //返回
            case "node_bg":
            case "Button_menu":
              {
                //                // this.Node_action.active = !this.Node_action.active;
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "autoClose":
            case "autoMask":
              {
                this.Node_autoSet.active = false;
                break;
              }
            case "autoOk":
              {
                for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_stone.children), _step2; !(_step2 = _iterator2()).done;) {
                  var boxItem = _step2.value;
                  boxItem.getChildByName("autoTag").active = false;
                }
                this.Node_autoSet.active = false;
                this.doStartAuto();
                break;
              }
            case "Button_return":
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                //                // this.doMenuShow(false);
                break;
              }
            case "Button_record":
              {
                Common.loadPopBuddle("prefab/Node_record", MinesUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_rank":
              {
                Common.loadPopBuddle("prefab/Node_rank", MinesUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_set":
              {
                Common.loadPopBuddle("prefab/Node_set", MinesUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_path":
              {
                Common.loadPopBuddle("prefab/Node_path", MinesUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", MinesUtils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                // this.doMenuShow(false);
                break;
              }
            case "Button_bombAdd":
              {
                if (!MinesModel.instance.gameInfo || MinesModel.instance.gameStatus != eStatus.none || MinesModel.instance.gameInfo.mineCount >= 24) {
                  return;
                }
                MinesModel.instance.gameInfo.mineCount++;
                MinesUtils.instance.updateLabel(this.Label_bomb, MinesModel.instance.gameInfo.mineCount);
                this.updateRate();
                this.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
                this.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
                break;
              }
            case "Button_bombRedus":
              {
                if (!MinesModel.instance.gameInfo || MinesModel.instance.gameStatus != eStatus.none || MinesModel.instance.gameInfo.mineCount <= 3) {
                  return;
                }
                MinesModel.instance.gameInfo.mineCount--;
                MinesUtils.instance.updateLabel(this.Label_bomb, MinesModel.instance.gameInfo.mineCount);
                this.updateRate();
                this.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
                this.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
                break;
              }
            case "Button_betAdd":
              {
                if (!MinesModel.instance.gameInfo || MinesModel.instance.gameStatus != eStatus.none || MinesModel.instance.baseBetIndex >= MinesModel.instance.chipList.length - 1) {
                  return;
                }
                MinesModel.instance.baseBetIndex++;
                MinesModel.instance.gameInfo.betAmount = MinesModel.instance.chipList[MinesModel.instance.baseBetIndex];
                var betAmount = GUtil.changeCurrency(MinesModel.instance.gameInfo.betAmount, DataManager.instance.currency, null);
                MinesUtils.instance.updateLabel(this.Label_bet, betAmount);
                this.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
                this.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
                break;
              }
            case "Button_betRedus":
              {
                if (!MinesModel.instance.gameInfo || MinesModel.instance.gameStatus != eStatus.none || MinesModel.instance.baseBetIndex <= 0) {
                  return;
                }
                MinesModel.instance.baseBetIndex--;
                MinesModel.instance.gameInfo.betAmount = MinesModel.instance.chipList[MinesModel.instance.baseBetIndex];
                var _betAmount = GUtil.changeCurrency(MinesModel.instance.gameInfo.betAmount, DataManager.instance.currency, null);
                MinesUtils.instance.updateLabel(this.Label_bet, _betAmount);
                this.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
                this.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
                break;
              }
            case "Button_betBase":
              {
                if (!MinesModel.instance.gameInfo || MinesModel.instance.gameStatus != eStatus.none) {
                  return;
                }
                this.Node_betBase.active = !this.Node_betBase.active;
                break;
              }
            case "Button_start":
              {
                if (!MinesModel.instance.gameInfo) {
                  return;
                }
                if (MinesModel.instance.gameStatus == eStatus.none) {
                  if (MinesModel.instance.isAuto) {
                    if (MinesModel.instance.arrAutoTag.length == 0) {
                      //提示-设置挖矿位置
                      break;
                    }
                    //设置自动次数
                    this.Node_autoSet.active = true;
                    var index = MinesModel.instance.autoRoundIndex;
                    MinesModel.instance.autoRounds = MinesModel.instance.roundList[index];
                    var toggle = find("ToggleGroup/Toggle" + (index + 1), this.Node_autoSet);
                    toggle.getComponent(Toggle).isChecked = true;
                  } else {
                    if (!MinesCtrl.instance.reqStart(MinesModel.instance.gameInfo.mineCount, MinesModel.instance.gameInfo.betAmount)) {
                      return;
                    }
                    MinesModel.instance.gameStatus = eStatus.start;
                    this.skeleton_start.setAnimation(0, "start", false);
                    this.skeleton_start.addAnimation(0, "cash_idle", true);
                  }
                } else if (!MinesModel.instance.isAuto && MinesModel.instance.gameStatus == eStatus.start) {
                  if (MinesModel.instance.gameInfo.prizeAmount > 0) {
                    MinesCtrl.instance.reqCashOut();
                    this.skeleton_start.setAnimation(0, "cashout", false);
                    this.scheduleOnce(function () {
                      _this7.skeleton_start.setAnimation(0, "cash_idle", true);
                    }, 0.25);
                  }
                }
                break;
              }
            case "Button_auto":
              {
                if (!MinesModel.instance.gameInfo) {
                  return;
                }
                if (!MinesModel.instance.isAuto && MinesModel.instance.gameStatus != eStatus.none) {
                  return;
                }
                MinesModel.instance.isAuto = !MinesModel.instance.isAuto;
                this.skeleton_auto.setAnimation(0, MinesModel.instance.isAuto ? "stopauto_idle" : "auto_idle");
                if (!MinesModel.instance.isAuto) {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(this.Node_stone.children), _step3; !(_step3 = _iterator3()).done;) {
                    var _boxItem = _step3.value;
                    _boxItem.getChildByName("autoTag").active = false;
                  }
                  if (this.isShowTip_auto) {
                    this.autoTip.active = false;
                    this.startTip.active = this.isShowTip_start;
                  }
                  if (MinesModel.instance.gameStatus != eStatus.none) {
                    this.Button_auto.interactable = false;
                    Common.changeRenderGray(this.Button_auto.node, true);
                  }
                } else {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(MinesModel.instance.arrAutoTag), _step4; !(_step4 = _iterator4()).done;) {
                    var _index = _step4.value;
                    var _boxItem2 = this.Node_stone.children[_index];
                    _boxItem2.getChildByName("autoTag").active = true;
                  }
                  this.doClear();
                  if (this.isShowTip_auto) {
                    this.autoTip.active = true;
                    this.startTip.active = false;
                  }
                }
                break;
              }
          }
        };
        _proto.showAllStone = function showAllStone() {
          for (var index = 0; index < this.Node_stone.children.length; index++) {
            var Node_item = this.Node_stone.getChildByName("Node_item_" + index);
            if (Node_item.getComponent(Button).interactable) {
              Node_item.getComponent(Button).interactable = false;
              Node_item.getComponent(UIOpacity).opacity = 150;
              var newIcon = instantiate(this.iconTemp);
              newIcon.name = "icon_" + index;
              newIcon.active = true;
              newIcon.position = Node_item.position;
              this.Node_icon.addChild(newIcon);
              var aniIcon = newIcon.getComponent(sp.Skeleton);
              // aniIcon.color = color(133, 133, 133, 255);
              aniIcon.setAnimation(0, MinesModel.instance.gameInfo.posInfo[index] == 1 ? "gold_idle" : "bomb_idle", true);
            }
          }
        }

        //net update
        ;

        _proto.updateView = function updateView(event, data) {
          var _this8 = this;
          switch (event) {
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.gameShow();
                break;
              }
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            //////////////////////////////////////////
            case eProto.HD_Enter:
              {
                Common.closeWait();
                this.Label_win.string = Common.numFormat(MinesModel.instance.gameInfo.prizeAmount);
                MinesUtils.instance.updateLabel(this.Label_bomb, MinesModel.instance.gameInfo.mineCount);
                var betAmount = GUtil.changeCurrency(MinesModel.instance.gameInfo.betAmount, DataManager.instance.currency, null);
                MinesUtils.instance.updateLabel(this.Label_bet, betAmount);
                this.initBetBase();
                this.initRate();
                this.doResetStone();
                if (MinesModel.instance.gameStatus == eStatus.start) {
                  this.scheduleOnce(function () {
                    for (var _iterator5 = _createForOfIteratorHelperLoose(MinesModel.instance.gameInfo.openIdx), _step5; !(_step5 = _iterator5()).done;) {
                      var index = _step5.value;
                      var Node_item = _this8.Node_stone.getChildByName("Node_item_" + index);
                      Node_item.getComponent(Button).interactable = false;
                      Node_item.getComponent(UIOpacity).opacity = 0;
                      var newIcon = instantiate(_this8.iconTemp);
                      newIcon.name = "icon_" + index;
                      newIcon.active = true;
                      newIcon.position = Node_item.position;
                      _this8.Node_icon.addChild(newIcon);
                    }
                  });
                  this.setRate(MinesModel.instance.gameInfo.openIdx.length);
                  this.Label_gameNo.string = "No: " + MinesModel.instance.gameInfo.gameNo;
                  this.Button_auto.interactable = false;
                  Common.changeRenderGray(this.Button_auto.node, true);
                  this.Button_start.interactable = MinesModel.instance.gameInfo.prizeAmount > 0;
                  Common.changeRenderGray(this.Button_start.node, !this.Button_start.interactable);
                  this.Button_bombAdd.interactable = false;
                  this.Button_bombRedus.interactable = false;
                  this.Button_betAdd.interactable = false;
                  this.Button_betRedus.interactable = false;
                  this.spriteBomb.grayscale = true;
                  this.spriteBet.grayscale = true;
                  this.skeleton_start.setAnimation(0, "cash_idle", true);
                  if (MinesModel.instance.gameInfo.openIdx.length > 0) {
                    this.gold.node.active = true;
                    if (MinesModel.instance.gameInfo.openIdx.length < 3) {
                      this.gold.setAnimation(0, "lv0tolv1", false);
                      this.gold.addAnimation(0, "lv1idle", true);
                      MinesModel.instance.winLevel = 1;
                    } else if (MinesModel.instance.gameInfo.openIdx.length < 6) {
                      this.gold.setAnimation(0, "lv1tolv2", false);
                      this.gold.addAnimation(0, "lv2idle", true);
                      MinesModel.instance.winLevel = 2;
                    } else {
                      this.gold.setAnimation(0, "lv2tolv3", false);
                      this.gold.addAnimation(0, "lv3idle", true);
                      MinesModel.instance.winLevel = 3;
                    }
                  }
                  if (this.isShowTip_start) {
                    this.autoTip.active = true;
                    this.startTip.active = this.Button_start.interactable;
                  }
                } else {
                  this.skeleton_start.setAnimation(0, "start_idle", true);
                  if (this.isShowTip_start) {
                    this.autoTip.active = false;
                    this.startTip.active = true;
                  }
                  this.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
                  this.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
                  this.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
                  this.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
                }
                break;
              }
            case eProto.HD_Start:
              {
                this.doClear();
                MinesUtils.instance.updateLabel(this.Label_win, 0);
                this.Label_gameNo.string = "No: " + MinesModel.instance.gameInfo.gameNo;
                this.avatar.setAnimation(0, "idle1", true);
                if (!MinesModel.instance.isAutoRunning) {
                  this.Button_auto.interactable = false;
                  Common.changeRenderGray(this.Button_auto.node, true);
                  if (this.isShowTip_start) {
                    this.autoTip.active = true;
                    this.startTip.active = false;
                  }
                } else {
                  if (this.isShowTip_auto) {
                    this.autoTip.active = false;
                    this.startTip.active = false;
                  }
                }
                this.Button_start.interactable = false;
                Common.changeRenderGray(this.Button_start.node, true);
                this.Button_bombAdd.interactable = false;
                this.Button_bombRedus.interactable = false;
                this.Button_betAdd.interactable = false;
                this.Button_betRedus.interactable = false;
                this.spriteBomb.grayscale = true;
                this.spriteBet.grayscale = true;
                MinesUtils.instance.playOneShot(eSound.Start);
                this.gameTip.node.active = true;
                this.gameTip.setAnimation(0, "start", false);
                this.gameTip.setCompleteListener(function () {
                  _this8.gameTip.setCompleteListener(null);
                  _this8.gameTip.node.active = false;
                  if (MinesModel.instance.isAutoRunning) {
                    var openIndex = MinesModel.instance.arrAutoTag[MinesModel.instance.autoOpenIndex];
                    MinesCtrl.instance.reqOpen(openIndex);
                    MinesModel.instance.autoOpenIndex++;
                    _this8.avatar.setAnimation(0, "hit", false);
                    _this8.avatar.addAnimation(0, "idle" + (MinesModel.instance.winLevel == 0 ? 1 : MinesModel.instance.winLevel), true);
                  }
                });
                MinesModel.instance.curBalance -= MinesModel.instance.gameInfo.betAmount;
                this.updateGold();
                break;
              }
            case eProto.HD_Open:
              {
                var index = MinesModel.instance.gameInfo.openIdx[MinesModel.instance.gameInfo.openIdx.length - 1];
                var isWin = MinesModel.instance.gameStatus == eStatus.start;
                if (MinesModel.instance.isAutoRunning && isWin && MinesModel.instance.autoOpenIndex < MinesModel.instance.arrAutoTag.length) {
                  //自动-开
                  this.scheduleOnce(function () {
                    var openIndex = MinesModel.instance.arrAutoTag[MinesModel.instance.autoOpenIndex];
                    MinesCtrl.instance.reqOpen(openIndex);
                    MinesModel.instance.autoOpenIndex++;
                  }, 0.25);
                }
                this.Button_start.interactable = false;
                Common.changeRenderGray(this.Button_start.node, true);
                this.autoTip.active = false;
                this.startTip.active = false;
                var rateIndex = MinesModel.instance.gameInfo.openIdx.length;
                this.setOpenResult(index, isWin).then(function () {
                  if (!_this8.Button_start) {
                    return;
                  }
                  if (isWin) {
                    _this8.setRate(rateIndex);
                    MinesUtils.instance.updateLabel(_this8.Label_win, Common.numFormat(MinesModel.instance.gameInfo.prizeAmount));
                    var winLevel = Math.ceil(rateIndex / 3);
                    winLevel = winLevel > 3 ? 3 : winLevel;
                    if (MinesModel.instance.winLevel != winLevel) {
                      _this8.gold.node.active = true;
                      MinesModel.instance.winLevel = winLevel;
                      _this8.gold.setAnimation(0, "lv" + (winLevel - 1) + "tolv" + winLevel, false);
                      _this8.gold.addAnimation(0, "lv" + winLevel + "idle", true);
                    }
                    if (MinesModel.instance.isAutoRunning) {
                      _this8.Button_auto.interactable = true;
                      Common.changeRenderGray(_this8.Button_auto.node, false);
                      if (MinesModel.instance.autoOpenIndex >= MinesModel.instance.arrAutoTag.length) {
                        //自动-赢了
                        MinesCtrl.instance.reqCashOut();
                      }
                    } else {
                      if (MinesModel.instance.gameInfo.openIdx.length == 25 - MinesModel.instance.gameInfo.mineCount) {
                        //没有矿了 自动结算
                        MinesCtrl.instance.reqCashOut();
                      } else {
                        _this8.Button_start.interactable = true;
                        Common.changeRenderGray(_this8.Button_start.node, false);
                        if (_this8.isShowTip_start) {
                          _this8.autoTip.active = false;
                          _this8.startTip.active = true;
                        }
                      }
                    }
                  } else {
                    //踩雷了
                    _this8.Button_start.interactable = false;
                    Common.changeRenderGray(_this8.Button_start.node, true);
                    _this8.autoTip.active = false;
                    _this8.startTip.active = false;
                    _this8.gameTip.node.active = true;
                    _this8.gameTip.setAnimation(0, "lose", false);
                    _this8.gameTip.setCompleteListener(function () {
                      _this8.gameTip.setCompleteListener(null);
                      MinesUtils.instance.updateLabel(_this8.Label_win, 0);
                      _this8.Label_gameNo.string = "";
                      MinesModel.instance.gameStatus = eStatus.none;
                      _this8.skeleton_start.setAnimation(0, "cashout", false);
                      _this8.skeleton_start.addAnimation(0, "start_idle", true);
                      _this8.Button_start.interactable = true;
                      Common.changeRenderGray(_this8.Button_start.node, false);
                      _this8.Button_auto.interactable = true;
                      Common.changeRenderGray(_this8.Button_auto.node, false);
                      if (MinesModel.instance.isAutoRunning) {
                        if (_this8.isShowTip_auto) {
                          _this8.isShowTip_auto = false;
                          var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                          localStorage.setItem(uid + "_runTip_auto", "1");
                        }
                        _this8.doStartAuto();
                      } else {
                        if (_this8.isShowTip_start) {
                          _this8.isShowTip_start = false;
                          _this8.startTip.active = false;
                          var _uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                          localStorage.setItem(_uid + "_runTip_start", "1");
                        }
                        _this8.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
                        _this8.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
                        _this8.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
                        _this8.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
                        _this8.spriteBomb.grayscale = false;
                        _this8.spriteBet.grayscale = false;
                      }
                    });
                    _this8.avatar.setAnimation(0, "fail", false);
                    _this8.avatar.addAnimation(0, "idle" + MinesModel.instance.winLevel, true);
                    MinesUtils.instance.updateLabel(_this8.Label_win, 0);
                    _this8.showAllStone();
                  }
                });
                break;
              }
            case eProto.HD_CashOut:
              {
                this.avatar.setAnimation(0, "cash_out", false);
                this.avatar.addAnimation(0, "idle" + MinesModel.instance.winLevel, true);
                this.gold.setAnimation(0, "cash" + MinesModel.instance.winLevel, false);
                this.gold.setCompleteListener(function () {
                  _this8.gold.setCompleteListener(null);
                  _this8.gold.node.active = false;
                });
                var Label_win = this.gameTip.node.getChildByName("Label_win");
                Label_win.active = true;
                Label_win.getComponent(Label).string = "" + Common.numFormat(MinesModel.instance.gameInfo.prizeAmount);
                this.Button_start.interactable = false;
                Common.changeRenderGray(this.Button_start.node, true);
                if (this.isShowTip_start) {
                  this.autoTip.active = false;
                  this.startTip.active = false;
                }
                this.scheduleOnce(function () {
                  MinesUtils.instance.playOneShot(eSound.Win);
                  _this8.gameTip.node.active = true;
                  _this8.gameTip.setAnimation(0, "win", false);
                  _this8.gameTip.setCompleteListener(function () {
                    _this8.gameTip.setCompleteListener(null);
                    _this8.gameTip.node.active = false;
                    Label_win.active = false;
                    MinesModel.instance.gameStatus = eStatus.none;
                    _this8.Button_start.interactable = true;
                    Common.changeRenderGray(_this8.Button_start.node, false);
                    _this8.Button_auto.interactable = true;
                    Common.changeRenderGray(_this8.Button_auto.node, false);
                    if (MinesModel.instance.isAutoRunning) {
                      _this8.doStartAuto();
                      if (_this8.isShowTip_auto) {
                        _this8.isShowTip_auto = false;
                        var uid = DataManager.instance.getUserDataForKey(UserKey.OID);
                        localStorage.setItem(uid + "_runTip_auto", "1");
                      }
                    } else {
                      _this8.skeleton_start.setAnimation(0, "cashout", false);
                      _this8.skeleton_start.addAnimation(0, "start_idle", true);
                      _this8.Button_bombRedus.interactable = MinesModel.instance.gameInfo.mineCount > 3;
                      _this8.Button_bombAdd.interactable = MinesModel.instance.gameInfo.mineCount < 24;
                      _this8.Button_betAdd.interactable = MinesModel.instance.baseBetIndex < MinesModel.instance.chipList.length - 1;
                      _this8.Button_betRedus.interactable = MinesModel.instance.baseBetIndex > 0;
                      _this8.spriteBomb.grayscale = false;
                      _this8.spriteBet.grayscale = false;
                      if (_this8.isShowTip_start) {
                        _this8.isShowTip_start = false;
                        var _uid2 = DataManager.instance.getUserDataForKey(UserKey.OID);
                        localStorage.setItem(_uid2 + "_runTip_start", "1");
                      }
                    }
                  });
                  if (0 != MinesModel.instance.endBalance) {
                    MinesModel.instance.curBalance = MinesModel.instance.endBalance;
                    MinesModel.instance.endBalance = 0;
                    _this8.updateGold();
                  }
                  _this8.showAllStone();
                }, 1.0);
                break;
              }
          }
        };
        return MinesGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "gameTip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "skeleton_start", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "skeleton_auto", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_road", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Label_gameNo", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_bomb", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "listContent", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_RateItem", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Button_start", [_dec20], {
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
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_stone", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_icon", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "iconTemp", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "Node_betBase", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "Node_autoSet", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "spriteBomb", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "spriteBet", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Button_bombAdd", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "Button_bombRedus", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "Button_betAdd", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "Button_betRedus", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "autoTip", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "startTip", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "Label_rounds", [_dec35], {
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

System.register("chunks:///_virtual/MinesModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './MinesDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eStatus = module.eStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2a79fRajulM4rcySkPufFZh", "MinesModel", undefined);
      var MinesModel = exports('MinesModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MinesModel, _GameDef$BaseSington);
        function MinesModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    //抽水
          _this.nPummping = 0;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.chipList = [1000, 10000, 50000, 100000, 500000, 1000000, 5000000];
          _this.roundList = [3, 10, 25, 100, 200, 500];
          _this.gameInfo = null;
          _this.gameStatus = eStatus.none;
          _this.history = [];
          _this.baseBetIndex = 0;
          _this.winLevel = 0;
          _this.isAuto = false;
          _this.isAutoRunning = false;
          _this.autoRoundIndex = 0;
          _this.autoOpenIndex = 0;
          _this.autoRounds = 3;
          _this.arrAutoTag = [];
          /////////////////////////////////////////
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = MinesModel.prototype;
        _proto.clearGameData = function clearGameData() {};
        _createClass(MinesModel, [{
          key: "chatQueueList",
          get: function get() {
            return this._chatQueueList;
          },
          set: function set(chatQueueList) {
            this._chatQueueList = chatQueueList;
          }
        }, {
          key: "expressionQueueList",
          get: function get() {
            return this._expressionQueueList;
          },
          set: function set(expressionQueueList) {
            this._expressionQueueList = expressionQueueList;
          }
        }]);
        return MinesModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MinesScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './MinesDef.ts', './MinesUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, sys, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, MinesUtils, Common;
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
      sys = module.sys;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
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
      MinesUtils = module.MinesUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a41b8oElThHtIq9qgIITVff", "MinesScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MinesScene = exports('default', (_dec = ccclass("MinesScene"), _dec2 = menu("game/MinesGame/MinesScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MinesScene, _Component);
        function MinesScene() {
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
        var _proto = MinesScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          MinesUtils.instance.bundle = assetManager.getBundle(cBundle);
          MinesUtils.instance.preLoad();
          MinesUtils.instance.playBgMusic();
          this.onLoadGame();
        };
        _proto.start = function start() {
          // Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          if (sys.isMobile || sys.isNative) {
            ViewManager.instance.changeOrientationH(true);
          }
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            Common.transformSize(_this2._node_Game);
          }, 0.05);
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          // Common.showWait();
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
            // Common.showWait();
            MinesUtils.instance.bundle.load("prefab/MinesGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_game = prefab;
              _this3.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
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
            })
            // .call(() => {
            //     Common.closeWait();
            // })
            .start();

            // Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return MinesScene;
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

System.register("chunks:///_virtual/MinesUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './MinesDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, GameDef, AudioManager, eSound, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
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
      sys = module.sys;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      eSound = module.eSound;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "45e65FUsOpPLYgyr37fpOwT", "MinesUtils", undefined);
      var MinesUtils = exports('MinesUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(MinesUtils, _GameDef$BaseSington);
        function MinesUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          // arrSkeletonData: { [index: string]: sp.SkeletonData } = {};
          // arrFontData: { [index: string]: Font } = {};
          _this.arrSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = MinesUtils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/MinesGameView");
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
        _proto.loadRes = /*#__PURE__*/function () {
          var _loadRes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = []; // arrHLoad.push(
                  //     this.asyncLoadDir("textures/card", cc.SpriteFrame, (err, arrSpFrame: cc.SpriteFrame[]) => {
                  //         if (!err) {
                  //             for (const SpriteFrame of arrSpFrame) {
                  //                 this.arrSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //             }
                  //         }
                  //     })
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );
                  _context3.next = 3;
                  return Promise.all(arrHLoad);
                case 3:
                  if (cb) {
                    cb();
                  }
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadRes(_x7) {
            return _loadRes.apply(this, arguments);
          }
          return loadRes;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this4.bundle.load(path, Prefab, function (cur, total) {
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
            soundPath = eSound.bg;
          }
          AudioManager.instance.playGameMusicByPath(soundPath, this.bundle, true);
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb, isOneShot, duration) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          if (isOneShot === void 0) {
            isOneShot = true;
          }
          if (duration === void 0) {
            duration = 0;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this5.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop, isOneShot);
            _this5.soundIDList[soundPath] = soundID;
            if (duration > 0) {
              setTimeout(function () {
                _this5.soundIDList[soundPath] = null;
                delete _this5.soundIDList[soundPath];
                if (cb) {
                  cb();
                }
              }, duration * 1000);
            } else {
              AudioManager.instance.setFinishCallback(soundID, function () {
                _this5.soundIDList[soundPath] = null;
                delete _this5.soundIDList[soundPath];
                if (cb) {
                  cb();
                }
              });
            }
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
        _proto.numberFormatDI = function numberFormatDI(num, digits, isFloat) {
          if (isFloat === void 0) {
            isFloat = true;
          }
          var inter = Common.numFormatInt(num);
          var digit = isFloat ? this.numberFormatFloatD(num, digits) : this.numberFormatD(num, digits);
          return "" + inter + digit + "K";
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
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
          var _this6 = this;
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

          //        // MinesUtils.instance.playSound(MinesDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MinesUtils.instance.stopSound(MinesDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this6.numberFormatFloatD(curWin / 1000, 2.0) : _this6.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
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

          //        // MinesUtils.instance.playSound(MinesDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MinesUtils.instance.stopSound(MinesDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this7.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this7.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
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

          //        // MinesUtils.instance.playSound(MinesDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // MinesUtils.instance.stopSound(MinesDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this8.numberFormatFloat(curWin, 0) : "" + _this8.numberFormat(curWin, 0);
          })).delay(2.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        }
        //    //////////////////////////
        ;

        _proto.getCardFrame = function getCardFrame(cardData) {
          // let value = cardData % 13;
          // let color = Math.floor(cardData / 13);

          // let strFrame = `${MinesDef.strColor[color]}${MinesDef.strValue[value]}`;
          // if (this.arrSpriteFrame) {
          //     return this.arrSpriteFrame[strFrame];
          // }
          return null;
        }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     //        // if (isIdle) {
        //     //        //     return null;
        //     //        // }

        //     let strAni = [];
        //     // switch (symbolIndex) {
        //     //     case MinesDef.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case MinesDef.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case MinesDef.eSymbol.SpecialWild: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     default: {
        //     //         strAni.push(`${symbol_aniName[symbolIndex - 1]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     // }
        //     if (!strAni) {
        //         return null;
        //     }

        //     //        // gts.Debug.Log(`==getSymbolAniName=strAni=${strAni}=symbolIndex=${symbolIndex}`);
        //     return strAni;
        // }
        // getFontData(name) {
        //     if (!this.arrFontData) {
        //         return null;
        //     }

        //     return this.arrFontData[name];
        // }
        // getSkeletonData(index, isHorizontal = false) {
        //     if (!this.arrSkeletonData) {
        //         return null;
        //     }

        //     if (typeof index == "string") {
        //         return this.arrSkeletonData[index];
        //     }

        //     let strAni = "icon";
        //     let ret = this.arrSkeletonData[strAni];
        //     if (!ret) {
        //         return null;
        //     }
        //     return ret;
        // }
        ;

        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        }
        // getInitOpenNums() {
        //     let arrNUms = [
        //         [11, 8, 9, 1, 6, 5, 9, 8, 4, 8, 7, 1, 10, 10, 8],
        //         [9, 8, 6, 5, 4, 10, 1, 2, 11, 2, 4, 6, 11, 6, 4],
        //         [5, 8, 10, 4, 7, 8, 8, 7, 7, 6, 6, 5, 4, 11, 4],
        //         [4, 10, 5, 5, 9, 4, 11, 7, 10, 7, 4, 8, 7, 4, 11],
        //         [10, 8, 9, 2, 9, 10, 6, 5, 10, 8, 6, 6, 8, 2, 9],
        //     ];
        //     return arrNUms[Math.floor(Math.random() * arrNUms.length)];
        // }
        ;

        return MinesUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/MinesGame', 'chunks:///_virtual/MinesGame'); 
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