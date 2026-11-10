System.register("chunks:///_virtual/ButtoncardLhd3Cm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, Common, MainManager;
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
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d75f2dwWX9Hc7meI8YjSoHd", "ButtoncardLhd3Cm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var ButtoncardLhd3Cm = exports('default', (_dec = ccclass("ButtoncardLhd3Cm"), _dec2 = menu("game/cardLhd3game/ButtoncardLhd3Cm"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtoncardLhd3Cm, _Component);
        function ButtoncardLhd3Cm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _this._eventData = "";
          _this._index = 0;
          _this.isRuning = false;
          return _this;
        }
        var _proto = ButtoncardLhd3Cm.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // AudioManager.instance.playbuttonEffect();
          if (ConfigManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + ConfigManager[this.eventType][this.eventName]);
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              EventManager.dispatch(ConfigManager[self.eventType][self.eventName], {
                index: self._index
              });
              this.scheduleOnce(function () {
                self.isRuning = false;
              }, 0.5);
            } else {
              Common.showLog("button speed too fast");
            }
          } else {
            Common.showLog("事件类型" + this.eventName + "未注册");
          }
        };
        _proto.initAction = function initAction() {}
        //    // update (dt) {}
        ;

        return ButtoncardLhd3Cm;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "eventName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "事件类型";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "eventType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "ButtonEvent";
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3_path.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cardLhd3Model.ts', './cardLhd3Def.ts', './EventManager.ts', './cardLhd3Utils.ts', './cardLhd3_UIDishRoad.ts', './cardLhd3_UIBigRoad.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, cardLhd3Model, eEvent, EventManager, cardLhd3Utils, cardLhd3_UIDishRoad, cardLhd3_UIBigRoad;
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
      Component = module.Component;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      cardLhd3Utils = module.cardLhd3Utils;
    }, function (module) {
      cardLhd3_UIDishRoad = module.default;
    }, function (module) {
      cardLhd3_UIBigRoad = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "3e153x7GsRH/plncLyamYsM", "cardLhd3_path", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var cardLhd3_path = exports('default', (_dec = ccclass("cardLhd3_path"), _dec2 = menu("game/cardLhd3Game/cardLhd3_path"), _dec3 = property(Node), _dec4 = property(cardLhd3_UIDishRoad), _dec5 = property({
        displayName: "大路",
        type: cardLhd3_UIBigRoad
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3_path, _Component);
        function cardLhd3_path() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_progress", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiDishRoad", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiBigRoad", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = cardLhd3_path.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdatePath, this.updatePath, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdatePath, this.updatePath, this);
        };
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          var history = cardLhd3Model.instance.history.slice(0, 105);
          var Label_red = this.Node_progress.getChildByName("Label_red");
          var Label_black = this.Node_progress.getChildByName("Label_black");
          var percentRed = 0;
          for (var i = 0; i < history.length; i++) {
            var result = history[i];
            percentRed = result == 1 ? percentRed + 1 : percentRed;
          }
          var rate = Math.floor(percentRed * 10000 / history.length) / 100;
          Label_red.getComponent(Label).string = rate + "%";
          Label_black.getComponent(Label).string = 100 - rate + "%";

          /////////////////////////////////////////////////////////////////////////
          if (this.uiDishRoad) {
            this.uiDishRoad.UpdateUI();
          }
          cardLhd3Utils.instance.parseBigRoad();
          if (this.uiBigRoad) {
            this.uiBigRoad.UpdateUI();
          }
        };
        return cardLhd3_path;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_progress", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiDishRoad", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uiBigRoad", [_dec5], {
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

System.register("chunks:///_virtual/cardLhd3_UIBigRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cardLhd3Model.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Tween, v3, Sprite, tween, Component, cardLhd3Model;
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
      SpriteFrame = module.SpriteFrame;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "424ddS86UlPaYYQLrZI8eox", "cardLhd3_UIBigRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var cardLhd3_UIBigRoad = exports('default', (_dec = ccclass("cardLhd3_UIBigRoad"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3_UIBigRoad, _Component);
        function cardLhd3_UIBigRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemTemp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "content", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "imgs", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = cardLhd3_UIBigRoad.prototype;
        /////////////////////////////////////////
        //    // onLoad () {}
        _proto.start = function start() {};
        _proto.UpdateUI = function UpdateUI() {
          var rowNum = 6;
          var colNum = 20;
          var startPosX = 21;
          var startPosY = -21;
          var distanceX = 40;
          var distanceY = 40;
          var startCol = cardLhd3Model.instance.bigRoadMap.length > colNum ? cardLhd3Model.instance.bigRoadMap.length - colNum : 0;
          var history = cardLhd3Model.instance.bigRoadMap.slice(startCol);
          var iCount = 0;
          for (var iCol = 0; iCol < history.length; iCol++) {
            var arrValue = history[iCol];
            for (var iRow = 0; iRow < rowNum; iRow++) {
              var value = arrValue[iRow];
              if (value) {
                var newItem = this.content.getChildByName("Node_item_" + iCount);
                if (!newItem) {
                  newItem = instantiate(this.itemTemp);
                  newItem.name = "Node_item_" + iCount;
                  this.content.addChild(newItem);
                }
                Tween.stopAllByTarget(newItem);
                newItem.active = true;
                var pos = v3(startPosX + iCol * distanceX, startPosY - iRow * distanceY, 0);
                newItem.position = pos;
                newItem.getComponent(Sprite).spriteFrame = this.imgs[value - 1];
                iCount++;
              }
            }
          }
          var lastItem = this.content.children[this.content.children.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        return cardLhd3_UIBigRoad;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "imgs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3_UIDishRoad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cardLhd3Model.ts', './cardLhd3Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, instantiate, Tween, Sprite, tween, v3, Component, cardLhd3Model, cardLhd3Utils;
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
      instantiate = module.instantiate;
      Tween = module.Tween;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }, function (module) {
      cardLhd3Utils = module.cardLhd3Utils;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2ba47mUfWJOEIHFbnnEUdFq", "cardLhd3_UIDishRoad", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // import cardLhd3_UIDishRoadItem from "./cardLhd3_UIDishRoadItem";
      var cardLhd3_UIDishRoad = exports('default', (_dec = ccclass("cardLhd3_UIDishRoad"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3_UIDishRoad, _Component);
        function cardLhd3_UIDishRoad() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cloneTarget", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = cardLhd3_UIDishRoad.prototype;
        _proto.UpdateUI = function UpdateUI() {
          var startIndex = cardLhd3Model.instance.history.length > 48 ? cardLhd3Model.instance.history.length - 48 : 0;
          var history = cardLhd3Model.instance.history.slice(startIndex).reverse();
          for (var i = 0; i < history.length; i++) {
            var item = this.node.getChildByName("item_" + i);
            if (!item) {
              item = instantiate(this.cloneTarget);
              item.name = "item_" + i;
              this.node.addChild(item);
            }
            Tween.stopAllByTarget(item);
            item.active = true;
            var result = history[i];
            var sprName = result == 1 ? "diam_red" : result == 2 ? "diam_blue" : "diam_green";
            item.getComponent(Sprite).spriteFrame = cardLhd3Utils.instance.getSprFrame("" + sprName);
            Tween.stopAllByTarget(item);
            if (i == 0) {
              tween(item).to(0.3, {
                scale: v3(1.2, 1.2, 1.2)
              }).to(0.3, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          if (this.node.children.length > history.length) {
            for (var _i = history.length; _i < this.node.children.length; _i++) {
              var _item = this.node.getChildByName("item_" + _i);
              _item.active = false;
            }
          }
        };
        return cardLhd3_UIDishRoad;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cloneTarget", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3ChipObject.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cardLhd3Model.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, tween, Sprite, Component, cardLhd3Model;
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
      tween = module.tween;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a2351m7UX9ILJdIGUfInjt5", "cardLhd3ChipObject", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var chipObject = exports('default', (_dec = ccclass("cardLhd3ChipObject"), _dec2 = menu("game/cardLhd3game/chipObject"), _dec3 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(chipObject, _Component);
        function chipObject() {
          var _this;
          _this = _Component.call(this) || this;
          _initializerDefineProperty(_this, "smallCMArr", _descriptor, _assertThisInitialized(_this));
          _this._chipInfo = null;
          _this._chipInfo = null;
          return _this;
        }
        var _proto = chipObject.prototype;
        _proto.getchipInfo = function getchipInfo() {
          return this._chipInfo;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          //        //下注
          this.node.on("doBet", function (toPos) {
            tween(_this2.node).to(0.2, toPos, {
              easing: "quadOut"
            }).start();
          }, this);
        };
        _proto.start = function start() {};
        _proto.reuse = function reuse(info) {
          this.node.active = true;
          this._chipInfo = info;

          //        //
          var spritef = this.smallCMArr[cardLhd3Model.instance.chipList[info.value]];
          this.node.getComponent(Sprite).spriteFrame = spritef;
        };
        _proto.unuse = function unuse() {
          this._chipInfo = null;
          this.node.active = false;
        };
        return chipObject;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "smallCMArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3Ctrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './GameDef.ts', './DataManager.ts', './NetManager.ts', './cardLhd3Def.ts', './cardLhd3Model.ts', './Common.ts', './ViewManager.ts', './EventManager.ts', './ConfigManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, GameDef, DataManager, UserKey, NetManager, eProto, eEvent, cBundle, cardLhd3Model, Common, ViewManager, EventManager, ConfigManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      eEvent = module.eEvent;
      cBundle = module.cBundle;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
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
      cclegacy._RF.push({}, "01a492q8EVDRZ21QxVijqzC", "cardLhd3Ctrl", undefined);
      var cardLhd3Ctrl = exports('cardLhd3Ctrl', /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(cardLhd3Ctrl, _GameDef$BaseCtrl);
        function cardLhd3Ctrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          return _this;
        }
        var _proto = cardLhd3Ctrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete cardLhd3Ctrl._instance;
          cardLhd3Ctrl._instance = null;
          cardLhd3Model.destroy();
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
        _proto.reqBet = function reqBet(pos, betAmount) {
          if (!cardLhd3Model.instance.gameInfo) {
            return;
          }
          if (cardLhd3Model.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (cardLhd3Model.instance.myBetList[pos] + betAmount > cardLhd3Model.instance.PosMaxBet["" + (pos + 1)]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(cardLhd3Model.instance.PosMaxBet["" + (pos + 1)], 2)), sys.isMobile);
            return false;
          }
          this.isReqBet = true;
          this.SendData(eProto.HD_Bet, {
            pos: "" + (pos + 1),
            betAmount: "" + betAmount
          });
          return true;
        }

        //    /**请求抽水 */
        ;

        _proto.reqPumping = function reqPumping() {
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getPumping, {
            gameName: "cardLhd3"
          });
        };
        _proto.reqHistory = function reqHistory() {
          NetManager.instance.sendOnlineData(eProto.HD_history, {
            size: "105"
          });
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_leave);
        }
        //    //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // if (data.cmd != cardLhd3Def.eProto.allBet && data.cmd != cardLhd3Def.eProto.Bet) {
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          // }

          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();
            if (data.cmd == eProto.HD_enter) {
              EventManager.instance.emit(eEvent.onLoadHall);
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
              return;
            }

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            }
            if (data.cmd == eProto.HD_Bet) {
              this.isReqBet = false;
            }
            return;
          }

          //////////////////////////////////////////////////////
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_enter:
              {
                this.reqHistory();
                var enterInfo = data.Data;
                cardLhd3Model.instance.gameInfo = data.Data;
                cardLhd3Model.instance.chipList = enterInfo.baseScoreList;
                // cardLhd3Model.instance.gameNo = enterInfo.tableInfo.original;

                cardLhd3Model.instance.countDown = enterInfo.tableInfo.countDown;
                cardLhd3Model.instance.PlayerCount = enterInfo.tableInfo.playNum;
                if (enterInfo.userInfo.bets) {
                  for (var i = 0; i < 3; i++) {
                    cardLhd3Model.instance.myBetList[i] = enterInfo.userInfo.bets["" + (i + 1)] || 0;
                  }
                }
                if (enterInfo.tableInfo.pos) {
                  for (var _i3 = 0; _i3 < 3; _i3++) {
                    cardLhd3Model.instance.totalBetList[_i3] = parseFloat(enterInfo.tableInfo.pos["" + (_i3 + 1)]) || 0;
                  }
                }
                cardLhd3Model.instance.PlayerInfos = enterInfo.tableInfo.seatPlay;

                // cardLhd3Model.instance.result = enterInfo.tableInfo;

                cardLhd3Model.instance.gameStatus = enterInfo.tableInfo.state;
                var keys = Object.keys(enterInfo.odds);
                for (var _i4 = 0; _i4 < keys.length; _i4++) {
                  cardLhd3Model.instance.Rate[_i4] = enterInfo.odds[keys[_i4]];
                }
                break;
              }
            case eProto.HD_Bet:
              {
                emitData = data.Data;
                this.isReqBet = false;
                break;
              }
            case eProto.HD_BetList:
              {
                emitData = data.Data;
                break;
              }
            case eProto.updatePlayerNum:
              {
                cardLhd3Model.instance.PlayerCount = data.Data.playNum;
                cardLhd3Model.instance.PlayerInfos = data.Data.seatPlay;
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                cardLhd3Model.instance.gameStatus = data.Data.tableState;
                cardLhd3Model.instance.countDown = data.Data.countDown;
                cardLhd3Model.instance.gameNo = data.Data.eventID;
                break;
              }
            case eProto.HD_history:
              {
                cardLhd3Model.instance.history = [];
                for (var _iterator = _createForOfIteratorHelperLoose(data.Data), _step; !(_step = _iterator()).done;) {
                  var info = _step.value;
                  cardLhd3Model.instance.history.unshift(JSON.parse(info));
                }
                break;
              }
            case eProto.HD_OpenResult:
              {
                cardLhd3Model.instance.result = data.Data;
                cardLhd3Model.instance.history.push(cardLhd3Model.instance.result.prizeResults);
                break;
              }
            case eProto.HD_Checkout:
              {
                cardLhd3Model.instance.prize = data.Data;
                break;
              }
            case eProto.getPumping:
              {
                cardLhd3Model.instance.nPummping = data.Data.Pumping;
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
                gts.Debug.LogWarr("==cardLhd3=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (cardLhd3Model.instance.curBalance > 0) {
                  cardLhd3Model.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                cardLhd3Model.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==cardLhd3=pushWallet==" + _HD_Wallet.VndBalance);
                if (cardLhd3Model.instance.curBalance > 0) {
                  cardLhd3Model.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                cardLhd3Model.instance.curBalance = _HD_Wallet.VndBalance;
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
        _proto.getInfo = function getInfo() {
          // this.SendData(cardLhd3Def.eProto.getInfo, {});
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          if (cardLhd3Model.instance.countDown < 3) {
            Common.showTip(i18n.lang.disableBet, sys.isMobile);
            return false;
          }
          if (cardLhd3Model.instance.myBetList[pos] + num > cardLhd3Model.instance.PosMaxBet["" + pos]) {
            Common.showTip(i18n.lang[10064].replace("{0}", "" + Common.ChangeMoneyFormat(cardLhd3Model.instance.PosMaxBet["" + pos], 2)), sys.isMobile);
            return false;
          }
          this.isReqBet = true;
          this.SendData(eProto.HD_Bet, {
            pos: pos,
            amount: num,
            gameNo: cardLhd3Model.instance.gameNo
          });
          return true;
        };
        _proto.Send_ExitRoom = function Send_ExitRoom() {
          this.SendData(eProto.HD_leave);
        };
        _createClass(cardLhd3Ctrl, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(cBundle);
          }
        }]);
        return cardLhd3Ctrl;
      }(GameDef.BaseCtrl));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3Def.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "58145pWHcJKfoDimsbkzkA3", "cardLhd3Def", undefined);
      //gameDef moudle
      //红黑
      var cBundle = exports('cBundle', "cardLhd3Game");
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onUpdateRecord"] = "onUpdateRecord";
        eEvent["onUpdatePath"] = "onUpdatePath";
        return eEvent;
      }({}));
      var cLight = exports('cLight', 28);
      var eStatus = exports('eStatus', {
        none: 0,
        ready: 1,
        bet: 2,
        result: 3
      });
      var eCardType = exports('eCardType', {
        triple: 1,
        straightFlush: 2,
        flush: 3,
        straight: 4,
        pair: 5,
        highCard: 6
      }); //高牌
      var strCardType = exports('strCardType', ["Triple", "StraightFlush", "Flush", "Straight", "Pair", "HighCard"]);
      var strColor = exports('strColor', ["f", "m", "h", "t"]);
      var strValue = exports('strValue', ["a", "2", "3", "4", "5", "6", "7", "8", "9", "10", "j", "q", "k"]);
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["checkInRoom"] = "cardLhd3/HD_CheckPlayerInGame";
        eProto["HD_enter"] = "cardLhd3/HD_Enter";
        eProto["HD_leave"] = "cardLhd3/HD_QuitTable";
        eProto["HD_SwitchRoomState"] = "cardLhd3/HD_SwitchRoomState";
        eProto["HD_Bet"] = "cardLhd3/HD_Bet";
        eProto["HD_BetList"] = "cardLhd3/HD_BetList";
        eProto["updatePlayerNum"] = "cardLhd3/HD_UpdatePlayerNum";
        eProto["HD_Checkout"] = "cardLhd3/HD_Checkout";
        eProto["HD_OpenResult"] = "cardLhd3/HD_OpenResult";
        eProto["HD_history"] = "cardLhd3/HD_History";
        eProto["getPumping"] = "lobby/HD_GetPumping";
        return eProto;
      }({})); //抽水
      // //没什么用的
      // getPlayerList = "cardLhd3/HD_GetPlayerList", //获取玩家列表
      // startGame = "cardLhd3/HD_GetEnterData", //开始游戏 启动
      // deskinfo = "cardLhd3/HD_UpdateTableInfo", //桌子信息  （奖池  下注池  倒计时 房间状态）进来的时候
      // playerInfo = "cardLhd3/HD_UpdatePlayerList", //玩家信息变动
      // updatePlayerStatus = "cardLhd3/HD_UpdatePlayerInfo", //刷新玩家状态
      // getScoreList = "cardLhd3/HD_GetBaseScoreList", //获取挡位
      // audoEnter = "cardLhd3/HD_AutoEnter",
      // md5Text = "cardLhd3/HD_Md5Ciphertext",

      /**音效 */
      var eSound = exports('eSound', /*#__PURE__*/function (eSound) {
        eSound["bg"] = "sound/bg";
        eSound["bet"] = "sound/bet";
        eSound["countDown"] = "sound/countDown";
        eSound["warning"] = "sound/warning";
        eSound["collectChip"] = "sound/collectChip";
        eSound["tip"] = "sound/tip";
        eSound["coin"] = "sound/coin";
        eSound["timeUp"] = "sound/timeUp";
        eSound["flip"] = "sound/flip";
        eSound["chipIn"] = "sound/chipIn";
        eSound["startStop"] = "sound/startStop";
        eSound["longWin"] = "sound/longWin";
        eSound["tigerWin"] = "sound/tigerWin";
        eSound["tie"] = "sound/result2";
        eSound["vs"] = "sound/vs";
        return eSound;
      }({}));
      var eEffect = exports('eEffect', /*#__PURE__*/function (eEffect) {
        eEffect["PK"] = "PK";
        eEffect["startbet"] = "startbet";
        eEffect["stopbet"] = "stopbet";
        eEffect["dragonwin"] = "dragonwin";
        eEffect["tigerwin"] = "tigerwin";
        eEffect["tiewin"] = "tiewin";
        return eEffect;
      }({}));

      //ConfigManager 相关的event 涉及 ButtonInit 后续修改

      /////////////

      /////////////

      // cardLhd3Model.instance.myBetList = enterInfo.userInfo.bets;

      // type GamePlay struct {
      //     GameCode    string             bson:"GameCode"
      //     PrizeType   int                bson:"PrizeType"
      //     Name        string             bson:"Name"
      //     Odds        int64              bson:"Odds"
      //     MaxIssueBet int64              bson:"MaxIssueBet"
      // }
      /////////////////////////////////////
      /**钱包信息 */
      // ==recvData data==={"Data":{"UserID":"62496f2dc4ac29426adcb17e","XiaZhuPos":"6","XiaZhuV":482},"GameType":"cardLhd3","Action":"HD_XiaZhu","ErrMsg":"操作成功","Code":0,"cmd":"cardLhd3/HD_XiaZhu"}
      // builtin-2d-sprite (variant) : Failed to set property [texture], property not found.
      //注： 这个问题由 服务端发送的下注金额 引起，金额不在 CMList整数范围内
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3Game", ['./cardLhd3Ctrl.ts', './cardLhd3Def.ts', './cardLhd3GameView.ts', './cardLhd3Model.ts', './cardLhd3Scene.ts', './cardLhd3Utils.ts', './ButtoncardLhd3Cm.ts', './cardLhd3ChipObject.ts', './cardLhd3Help.ts', './cardLhd3Record.ts', './cardLhd3_UIBigRoad.ts', './cardLhd3_UIDishRoad.ts', './cardLhd3_path.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/cardLhd3GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './BtnArea.ts', './DataManager.ts', './I18n.ts', './cardLhd3Def.ts', './cardLhd3Model.ts', './cardLhd3Ctrl.ts', './cardLhd3Utils.ts', './ChipProxy.ts', './ChipItem.ts', './GUtil.ts', './ChipSmall.ts', './cardLhd3Record.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, ScrollView, Prefab, Button, Node, Label, Sprite, sp, sys, tween, find, instantiate, UITransform, v3, NodePool, resources, Tween, GameDef, ConfigManager, EventManager, NetManager, ViewManager, Common, BtnArea, DataManager, UserKey, i18n, eProto, eStatus, eSound, cBundle, eEvent, eEffect, cardLhd3Model, cardLhd3Ctrl, cardLhd3Utils, ChipProxy, ChipEvent, ChipType, ChipItem, GUtil, ChipSmall, cardLhd3Record;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      sp = module.sp;
      sys = module.sys;
      tween = module.tween;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      v3 = module.v3;
      NodePool = module.NodePool;
      resources = module.resources;
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
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BtnArea = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      eProto = module.eProto;
      eStatus = module.eStatus;
      eSound = module.eSound;
      cBundle = module.cBundle;
      eEvent = module.eEvent;
      eEffect = module.eEffect;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }, function (module) {
      cardLhd3Ctrl = module.cardLhd3Ctrl;
    }, function (module) {
      cardLhd3Utils = module.cardLhd3Utils;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      cardLhd3Record = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "c4ea6Pdh+RL/K6oEHO9guLC", "cardLhd3GameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // import RB_UIRecordItem from "./base/RB_UIRecordItem";
      var cardLhd3GameView = exports('default', (_dec = ccclass("cardLhd3GameView"), _dec2 = menu("game/cardLhd3Game/cardLhd3GameView"), _dec3 = property(ScrollView), _dec4 = property(Prefab), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Button), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Sprite), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Sprite), _dec17 = property(sp.Skeleton), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Prefab), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Prefab), _dec27 = property(sp.Skeleton), _dec28 = property(ScrollView), _dec29 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(cardLhd3GameView, _GameDef$BaseView);
        function cardLhd3GameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_x2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_again", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "areaBtnParent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_menu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labNickName", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labGold", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprAvatar", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_head", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_timer", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_timer", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tittle_prizeng", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "daojishi", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_public", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_deskPlayer", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betArea", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betChip", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_effectRoot", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardDragon", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_cardTiger", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betEffect", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_statusTip", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ScrollView_record", _descriptor26, _assertThisInitialized(_this));
          //   //
          _initializerDefineProperty(_this, "Node_chipTag", _descriptor27, _assertThisInitialized(_this));
          ///////chipList
          _this._chip = void 0;
          _this._chipPool = void 0;
          //    ////////////////////////////////////////////////////
          _this._area2btn = {};
          return _this;
        }
        var _proto = cardLhd3GameView.prototype;
        //
        //this._chipPool.put(chip);
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, cardLhd3Ctrl.instance);
          this.initUIView();
          this.initChipPool();
          cardLhd3Utils.instance.loadRes(function () {
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            NetManager.instance.sendOnlineData(eProto.HD_enter, {
              action: "HD_Enter",
              tableId: "1_0_"
            });
          });
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          this.BindAreaBtns();
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          ChipProxy.off(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.off(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          this.doClearChip();
          cardLhd3Model.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          if (this._chipPool) {
            this._chipPool.clear();
          }
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.gameShow = function gameShow() {
          var _this2 = this;
          NetManager.instance.waitServiceSendData();
          this.scheduleOnce(function () {
            Common.showLog("前台");
            if (NetManager.instance._connect == true) {
              _this2.doClearChip();
              _this2.unscheduleAllCallbacks();
              NetManager.instance.sendOnlineData(eProto.HD_enter, {});
            }
          }, 0.1);
        };
        _proto.BindAreaBtns = function BindAreaBtns() {
          var childs = this.areaBtnParent ? this.areaBtnParent.children : [];
          for (var i = 0; i < childs.length; ++i) {
            var c = childs[i];
            var ba = BtnArea.OnClicked(c, this.onClickBet, this);
            this._area2btn[c.name] = ba;
          }
        }
        //let keys = Object.keys(this._area2btn);
        // this.PlayAreaEff(keys, false);
        ;

        _proto.PlayAreaEff = function PlayAreaEff(keys, play) {
          for (var i = 0; i < keys.length; ++i) {
            var k = keys[i];
            var btn = this._area2btn[k];
            if (btn) {
              btn.PlayEff(play);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(cardLhd3Model.instance.curBalance);
          if (strGold != this.labGold.string) {
            cardLhd3Utils.instance.updateLabel(this.labGold, strGold);
          }
        };
        _proto.initUIView = function initUIView() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.sprAvatar);
          Common.nickNameFormatL(this.labNickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.labGold.string = Common.numFormat(gold);
        };
        _proto.onClickBet = function onClickBet(btn) {
          // if (this.cm_light.node.active) {
          //   this.cm_light.setAnimation(0, "intro_end", false);
          //   this.cm_light.setCompleteListener(() => {
          //     this.cm_light.setCompleteListener(null);

          //     this.cm_light.node.active = false;
          //   });
          //   tween(this.Node_btnGroup)
          //     .to(0.3, { scale: v3(0, 0, 0) }, { easing: "cubicIn" })
          //     .start();
          // }
          if (cardLhd3Model.instance.curBalance < cardLhd3Model.instance.curBet) {
            Common.showTip(i18n.lang[10001], sys.isMobile);
            return;
          }
          if (cardLhd3Model.instance.gameStatus && cardLhd3Model.instance.gameStatus == eStatus.bet && cardLhd3Model.instance.countDown > 3) {
            gts.Debug.Log("==OnClicked==" + btn.node.name);
            var pos = btn.node.name.replace("Node_area_", "");
            cardLhd3Ctrl.instance.reqBet(parseInt(pos), cardLhd3Model.instance.curBet);
            var betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
            var light = betArea.getChildByName("light");
            light.active = true;
            // let strAni_0 = ["dragon_light", "tiger_light", "tie_light"];
            var strAni_1 = ["dragon_durk", "tiger_durk", "tie_durk"];
            light.getComponent(sp.Skeleton).setAnimation(0, strAni_1[parseInt(pos)], false);
            // light.getComponent(sp.Skeleton).addAnimation(0, strAni_1[parseInt(pos)], true);
            tween(light).delay(0.2).call(function () {
              light.active = false;
            }).start();
          }
        };
        _proto.doSendStar = function doSendStar(pos) {
          var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + 0);
          var Node_star = find("Node_area_" + pos + "/Node_star", this.Node_betArea);
          var newStar = this.Node_effectRoot.getChildByName("newStar" + pos);
          if (newStar) {
            return;
          }
          newStar = instantiate(this.star);
          newStar.name = "newStar" + pos;
          newStar.getChildByName("lizi").active = true;
          this.Node_effectRoot.addChild(newStar);
          var startPos = Node_root.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          newStar.position = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          var toPos = Node_star.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
          toPos = this.Node_effectRoot.getComponent(UITransform).convertToNodeSpaceAR(toPos);
          cardLhd3Utils.instance.playOneShot(eSound.coin);
          tween(newStar).to(0.4, {
            position: toPos,
            scale: v3(0.5, 0.5, 0.5)
          }, {
            easing: "cubicOut"
          }).call(function () {
            newStar.getChildByName("lizi").active = false;
          }).start();
        };
        _proto.doSendChip = /*#__PURE__*/function () {
          var _doSendChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pos, betAmount, startNode) {
            var _this3 = this;
            var newChip, pBack, isMySelf, betArea, chipContent, Label_bet, totalBetList, startPos, posX, posY, toPos;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (startNode === void 0) {
                    startNode = null;
                  }
                  newChip = this.getChipNode(betAmount);
                  if (newChip) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  // newChip.name = `${betAmount}`;
                  if (startNode) {
                    pBack = startNode.position;
                    tween(startNode).shake(0.25, 3, 3).call(function () {
                      startNode.position = pBack;
                    }).start();
                  }
                  isMySelf = startNode == null;
                  betArea = this.Node_betArea.getChildByName("Node_area_" + pos);
                  chipContent = isMySelf ? betArea.getChildByName("Node_myChip") : betArea.getChildByName("Node_totalChip");
                  chipContent.addChild(newChip);
                  chipContent.active = true;
                  if (isMySelf) {
                    cardLhd3Model.instance.myTotalBet += betAmount;
                  }

                  //更新下注分数
                  Label_bet = isMySelf ? betArea.getChildByName("Label_myBet") : betArea.getChildByName("Label_totalBet");
                  Label_bet.active = true;
                  totalBetList = isMySelf ? cardLhd3Model.instance.myBetList[pos] : cardLhd3Model.instance.totalBetList[pos];
                  cardLhd3Utils.instance.updateLabel(Label_bet, "" + Common.ChangeMoneyFormat(totalBetList, 2));

                  //
                  startNode = startNode ? startNode : this.Node_public;
                  startPos = startNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
                  startPos = chipContent.getComponent(UITransform).convertToNodeSpaceAR(startPos);
                  newChip.position = startPos;
                  posX = Math.random() * 100 - 50;
                  posY = Math.random() * 100 - 50;
                  toPos = v3(posX, posY, 0);
                  tween(newChip).to(0.3, {
                    position: toPos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    cardLhd3Utils.instance.playSound(eSound.chipIn);
                    if (isMySelf) {
                      cardLhd3Utils.instance.playOneShot(eSound.chipIn);
                      var betEffect = instantiate(_this3.betEffect);
                      betEffect.position = toPos;
                      chipContent.addChild(betEffect);
                      var betEffectAni = betEffect.getComponent(sp.Skeleton);
                      betEffectAni.setAnimation(0, "idle", false);
                      betEffectAni.setCompleteListener(function () {
                        betEffectAni.setCompleteListener(null);
                        betEffect.destroyFromParent();
                      });
                    }
                  }).start();
                case 23:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doSendChip(_x, _x2, _x3) {
            return _doSendChip.apply(this, arguments);
          }
          return doSendChip;
        }();
        _proto.doClearChip = function doClearChip() {
          this.Node_statusTip.node.active = false;
          var headEffect = this.Node_head.getChildByName("headEffect");
          headEffect.active = false;
          var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", this.Node_head);
          Label_winAdd.parent.active = false;
          for (var i = 0; i < this.Node_deskPlayer.children.length; i++) {
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            var _headEffect = Node_headInfo.getChildByName("headEffect");
            _headEffect.active = false;
            var _Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", Node_headInfo);
            _Label_winAdd.parent.active = false;
          }
          //del node star
          this.Node_effectRoot.removeAllChildren();
          for (var _i = 0; _i < 3; _i++) {
            var betArea = this.Node_betArea.children[_i];
            var Node_myChip = betArea.getChildByName("Node_myChip");
            var Node_totalChip = betArea.getChildByName("Node_totalChip");
            Node_myChip.destroyAllChildren();
            Node_totalChip.destroyAllChildren();
            Node_myChip.active = false;
            Node_totalChip.active = false;

            //更新下注分数
            var Label_bet = betArea.getChildByName("Label_myBet");
            Label_bet.getComponent(Label).string = "";
            Label_bet.active = false;
            Label_bet = betArea.getChildByName("Label_totalBet");
            Label_bet.getComponent(Label).string = "";
            Label_bet.active = false;
            var light = betArea.getChildByName("light");
            // let strAni_1 = ["dragon_durk", "tiger_durk", "tie_durk"];
            // light.getComponent(sp.Skeleton).setAnimation(0, strAni_1[i], true);
            light.active = false;
          }
          if (cardLhd3Model.instance.myTotalBet > 0) {
            cardLhd3Model.instance.myBetListBack = cardLhd3Model.instance.myBetList.slice();
            cardLhd3Model.instance.myTotalBet = 0;
            cardLhd3Model.instance.myBetList = [0, 0, 0];
          }
          var isAgainEnable = false;
          for (var _iterator = _createForOfIteratorHelperLoose(cardLhd3Model.instance.myBetListBack), _step; !(_step = _iterator()).done;) {
            var amount = _step.value;
            if (amount > 0) {
              isAgainEnable = true;
              break;
            }
          }
          Common.setButtonEnableWithGray(this.Button_x2, false);
          Common.setButtonEnableWithGray(this.Button_again, isAgainEnable);
          cardLhd3Model.instance.totalBetList = [0, 0, 0];
        };
        _proto.mergeChip = function mergeChip(node) {
          while (node.children.length > 5) {
            var childNode = node.children.shift();
            childNode.destroy();
          }
          var i = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(node.children), _step2; !(_step2 = _iterator2()).done;) {
            var child = _step2.value;
            child.position = v3(0, (i - 1) * 5, 0);
            i++;
          }
        }
        //   betIntoPool(data) {
        //     if (cardLhd3Model.instance.gameStatus != cardLhd3Def.eStatus.bet || cardLhd3Model.instance.countDown <= 3) {
        //       Common.showTip(i18n.lang.disableBet);
        //       return;
        //     }

        //     // cardLhd3Utils.instance.playOneShot(cardLhd3Def.eSound.chipIn);

        //     let pos = parseInt(data);
        //     let amount = this._chip.count;
        //     if (cardLhd3Ctrl.instance.sendDoingBet(pos, amount)) {
        //       this.doSendChip(pos, amount);
        //     }
        //   }
        ;

        _proto.initChipPool = function initChipPool(finishCall) {
          var _this4 = this;
          if (finishCall === void 0) {
            finishCall = null;
          }
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              // newNode.scale = 0.8;
              _this4._chipPool.put(newNode);
            }
            if (finishCall) {
              finishCall();
            }
          });
        };
        _proto.getChipNode = function getChipNode(chipInfo, isSelf) {
          if (this._chipPool.size() > 1) {
            var node = this._chipPool.get(chipInfo);
            //            // node.scale = 0.8;
            return node;
          }
          var item = this._chipPool.get(chipInfo);
          if (item) {
            for (var i = 0; i < 10; i++) {
              var newNode = instantiate(item);
              //                // newNode.scale = 0.8;
              this._chipPool.put(newNode);
            }
          }
          return item;
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != cBundle) {
            return;
          }
          gts.Debug.Log("=====selectCM====" + JSON.stringify(data));
          var children = this.scrollViewCM.content.children;
          for (var _iterator3 = _createForOfIteratorHelperLoose(children), _step3; !(_step3 = _iterator3()).done;) {
            var child = _step3.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
                cardLhd3Model.instance.curBet = this._chip.count;
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        }
        //    /**
        //     * 创建下注筹码 按钮
        //     * @param data number[]
        //     */
        ;

        _proto.createChipsList = function createChipsList() {
          var _this5 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          var diyNums = 0;
          for (var _iterator4 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, cBundle);
            diyNums++;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step5; !(_step5 = _iterator5()).done;) {
            var _i2 = _step5.value;
            var has = false;
            for (var _iterator6 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step6; !(_step6 = _iterator6()).done;) {
              var j = _step6.value;
              if (j.count == _i2.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            //            // chip.scale = 0.8;
            //            // chip.width = 105;
            //            // chip.height = 105;
            _chip2.getComponent(ChipItem).setData(_i2, ChipType.CHIP, cBundle);
          }
          this.scheduleOnce(function () {
            var child = _this5.scrollViewCM.content.children[diyNums];
            child.getComponent(ChipItem).moveUp();
            _this5.scrollViewCM.scrollToLeft();
          });
        }
        //    ///////////////////////////////////////////////
        ;

        _proto.onClickLeft = function onClickLeft() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX + move;
          if (pos > 0) {
            pos = 0;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        };
        _proto.onClickRight = function onClickRight() {
          var node = this.scrollViewCM.content;
          var count = node.children.length;
          if (count <= 0) return;
          var width = node.getComponent(UITransform).width;
          var posX = this.scrollViewCM.content.getPosition().x;
          var move = width / count;
          var pos = posX - move;
          var max = this.scrollViewCM.node.getComponent(UITransform).width - width;
          if (pos < max) {
            pos = max;
          }
          Tween.stopAllByTarget(node);
          tween(node).to(0.2, {
            position: v3(pos, node.position.y)
          }).start();
        }
        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //返回
            case "node_bg":
              {
                this.Node_menu.active = false;
                break;
              }
            case "btnMenu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "btnClose":
              {
                cardLhd3Ctrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "btnRecord":
              {
                Common.loadPopBuddle("prefab/Node_record", cardLhd3Utils.instance.bundle, function () {}, function (prefab) {
                  var newNode = instantiate(prefab);
                  ViewManager.instance.popNodeView(newNode, true);
                  newNode.getComponent(cardLhd3Record).setGameType("cardLhd3", 8);
                  if (ViewManager.instance.isVerticalScene && sys.isMobile) {
                    newNode.angle = 90;
                  } else {
                    newNode.scale = v3(1080 / 1920, 1080 / 1920, 1);
                  }
                }, true);
                break;
              }
            case "btnHelp":
              {
                Common.loadPopBuddle("prefab/Node_help", cardLhd3Utils.instance.bundle, function () {}, function (prefab) {
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
            case "btnPath":
              {
                Common.loadPopBuddle("prefab/Node_path", cardLhd3Utils.instance.bundle, function () {}, function (prefab) {
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
            case "btnJiabei":
              {
                for (var pos = 0; pos < cardLhd3Model.instance.myBetList.length; pos++) {
                  var betAmount = cardLhd3Model.instance.myBetList[pos];
                  if (betAmount > 0) {
                    cardLhd3Ctrl.instance.reqBet(pos, betAmount);
                  }
                }
                break;
              }
            case "btnLast":
              {
                for (var _pos = 0; _pos < cardLhd3Model.instance.myBetListBack.length; _pos++) {
                  var _betAmount = cardLhd3Model.instance.myBetListBack[_pos];
                  if (_betAmount > 0) {
                    cardLhd3Ctrl.instance.reqBet(_pos, _betAmount);
                  }
                }
                break;
              }
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.initOdds = function initOdds() {
          for (var i = 0; i < 3; i++) {
            var betArea = this.Node_betArea.children[i];
            var Label_rate = betArea.getChildByName("Label_rate");
            Label_rate.getComponent(Label).string = "1:" + cardLhd3Model.instance.Rate[i] / 100;
          }
        };
        _proto.onUpdateDeskPlayer = function onUpdateDeskPlayer() {
          if (!cardLhd3Model.instance.PlayerInfos || cardLhd3Model.instance.PlayerInfos.length == 0) {
            return;
          }
          var Label_public = this.Node_public.getChildByName("Label_public");
          Label_public.getComponent(Label).string = "" + cardLhd3Model.instance.PlayerCount;
          cardLhd3Model.instance.firstUserID = cardLhd3Model.instance.PlayerInfos[0].userId;
          var seatPlayer = cardLhd3Model.instance.PlayerInfos.slice(0, 6);
          for (var i = 0; i < seatPlayer.length; i++) {
            var playerInfo = seatPlayer[i];
            var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", this.Node_deskPlayer);
            Node_headInfo.active = playerInfo != null;
            var Node_wait = find("Node_head_" + i + "/Node_wait", this.Node_deskPlayer);
            Node_wait.active = !Node_headInfo.active;
            if (playerInfo) {
              var head = find("mask/head", Node_headInfo);
              var Label_nickName = find("Sprite_nickNameBg/Label_nickName", Node_headInfo);
              var Label_gold = find("Sprite_nickNameBg/Label_gold", Node_headInfo);
              Common.getHead(playerInfo.avatar, head);
              Common.nickNameFormatL(Label_nickName, playerInfo.nickName);
              Label_gold.getComponent(Label).string = "+" + Common.numFormat(playerInfo.yxb);
            }
          }
        };
        _proto.updateRecord = function updateRecord() {
          var _this7 = this;
          var startIndex = cardLhd3Model.instance.history.length > 48 ? cardLhd3Model.instance.history.length - 48 : 0;
          var openResults = cardLhd3Model.instance.history.slice(startIndex);
          var Node_recordTemp = this.ScrollView_record.content.getChildByName("Node_item_0");
          for (var i = 0; i < openResults.length; i++) {
            var openNum = openResults[i];
            var newItem = this.ScrollView_record.content.getChildByName("Node_item_" + i);
            if (!newItem) {
              newItem = instantiate(Node_recordTemp);
              newItem.name = "Node_item_" + i;
              newItem.active = true;
              this.ScrollView_record.content.addChild(newItem);
            }
            Tween.stopAllByTarget(newItem);
            newItem.active = true;
            var sprName = openNum == 1 ? "diam_red" : openNum == 2 ? "diam_blue" : "diam_green";
            newItem.getComponent(Sprite).spriteFrame = cardLhd3Utils.instance.getSprFrame("" + sprName);
          }
          this.scheduleOnce(function () {
            _this7.ScrollView_record.scrollToBottomRight(0.1);
          }, 0.25);
          var lastItem = this.ScrollView_record.content.children[openResults.length - 1];
          tween(lastItem).to(0.3, {
            scale: v3(1.1, 1.1, 1.1)
          }).to(0.3, {
            scale: v3(1, 1, 1)
          }).union().repeatForever().start();
        };
        _proto.showCountDown = function showCountDown(isEnter) {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            // this.Label_timer.color = color(255, 237, 153, 255);

            if (cardLhd3Model.instance.gameStatus == eStatus.bet) {
              _this8.tittle_prizeng.spriteFrame = cardLhd3Utils.instance.getSprFrame("tittle_betting");
            } else {
              _this8.tittle_prizeng.spriteFrame = cardLhd3Utils.instance.getSprFrame("tittle_prizeng");
            }
            var countDown = cardLhd3Model.instance.countDown;
            Tween.stopAllByTarget(_this8.Node_timer);
            _this8.Label_timer.string = "" + countDown;
            tween(_this8.Node_timer).delay(1).call(function () {
              cardLhd3Model.instance.countDown--;
              if (cardLhd3Model.instance.gameStatus == eStatus.bet) {
                cardLhd3Model.instance.countDown > 3 ? cardLhd3Utils.instance.playOneShot(eSound.timeUp) : cardLhd3Model.instance.countDown > 0 ? cardLhd3Utils.instance.playOneShot(eSound.countDown) : cardLhd3Utils.instance.playOneShot(eSound.warning);
                if (cardLhd3Model.instance.countDown == 3) {
                  Common.setButtonEnableWithGray(_this8.Button_again, false);
                  Common.setButtonEnableWithGray(_this8.Button_x2, false);
                  cardLhd3Utils.instance.playOneShot(eSound.startStop);
                  _this8.showStatusTip(eEffect.stopbet);
                  //   }
                }

                if (cardLhd3Model.instance.countDown <= 3) {
                  _this8.Label_timer.node.active = false;
                  if (!_this8.daojishi.node.active) {
                    _this8.daojishi.node.active = true;
                    var strAni = cardLhd3Model.instance.countDown == 3 ? "321" : cardLhd3Model.instance.countDown == 2 ? "21" : "1";
                    _this8.daojishi.setAnimation(0, strAni, false);
                    _this8.daojishi.setCompleteListener(function () {
                      _this8.daojishi.setCompleteListener(null);
                      _this8.daojishi.node.active = false;
                      _this8.Label_timer.node.active = true;
                    });
                  }
                } else {
                  _this8.Label_timer.node.active = true;
                }
              } else {
                _this8.daojishi.node.active = false;
                _this8.Label_timer.node.active = true;
              }
              _this8.Label_timer.string = "" + cardLhd3Model.instance.countDown;
            }).union().repeat(countDown).call(resolve).start();
          });
        };
        _proto.doSendCards = function doSendCards() {
          //sp.Skeleton
          var cardAni_dragon = this.Node_cardDragon.getChildByName("Node_card").getComponent(sp.Skeleton);
          cardAni_dragon.setAnimation(0, "left_close", true);
          var car_light_dragon = this.Node_cardDragon.getChildByName("car_light");
          car_light_dragon.active = false;
          var cardAni_tiger = this.Node_cardTiger.getChildByName("Node_card").getComponent(sp.Skeleton);
          cardAni_tiger.setAnimation(0, "right_close", true);
          var car_light_tiger = this.Node_cardTiger.getChildByName("car_light");
          car_light_tiger.active = false;
        };
        _proto.doOpenCard = function doOpenCard() {
          var _this9 = this;
          return new Promise(function (resolve, reject) {
            var car_light_dragon = _this9.Node_cardDragon.getChildByName("car_light");
            car_light_dragon.active = false;
            var car_light_tiger = _this9.Node_cardTiger.getChildByName("car_light");
            car_light_tiger.active = false;
            cardLhd3Utils.instance.playOneShot(eSound.flip);
            var cardAni_dragon = _this9.Node_cardDragon.getChildByName("Node_card").getComponent(sp.Skeleton);
            var openNum = JSON.parse(cardLhd3Model.instance.result.openNum);
            cardAni_dragon.setSkin(cardLhd3Utils.instance.getCardName(openNum["1"]));
            // cardAni_dragon.invalidAnimationCache();
            _this9.scheduleOnce(function () {
              cardAni_dragon.setAnimation(0, "left_open", false);
              cardAni_dragon.addAnimation(0, "left_openidle", true);
            });
            var delayTimes = 0.75;
            _this9.scheduleOnce(function () {
              cardLhd3Utils.instance.playOneShot(eSound.flip);
              var openNum_1 = JSON.parse(cardLhd3Model.instance.result.openNum);
              var cardAni_tiger = _this9.Node_cardTiger.getChildByName("Node_card").getComponent(sp.Skeleton);
              cardAni_tiger.setSkin(cardLhd3Utils.instance.getCardName(openNum_1["2"]));
              // cardAni_tiger.invalidAnimationCache();
              _this9.scheduleOnce(function () {
                cardAni_tiger.setAnimation(0, "right_open", false);
                cardAni_tiger.addAnimation(0, "right_openidle", true);
              });
            }, delayTimes);
            _this9.scheduleOnce(resolve, delayTimes * 2);
          });
        };
        _proto.showCardLight = function showCardLight() {
          var _this10 = this;
          return new Promise(function (resolve, reject) {
            var car_light = _this10.Node_cardDragon.getChildByName("car_light");
            car_light.active = cardLhd3Model.instance.result.prizeResults == 1;
            var cardAni_tiger = _this10.Node_cardTiger.getChildByName("car_light");
            cardAni_tiger.active = cardLhd3Model.instance.result.prizeResults == 2;
          });
        };
        _proto.showWinEffect = function showWinEffect() {
          var _this11 = this;
          return new Promise(function (resolve, reject) {
            var strAni = "";
            if (cardLhd3Model.instance.result.prizeResults == 1) {
              cardLhd3Utils.instance.playOneShot(eSound.longWin);
              _this11.showStatusTip(eEffect.dragonwin);
              strAni = "dragon_light";
            } else if (cardLhd3Model.instance.result.prizeResults == 2) {
              cardLhd3Utils.instance.playOneShot(eSound.tigerWin);
              _this11.showStatusTip(eEffect.tigerwin);
              strAni = "tiger_light";
            } else {
              cardLhd3Utils.instance.playOneShot(eSound.tie);
              _this11.showStatusTip(eEffect.tiewin);
              strAni = "tie_light";
            }
            var Node_area = _this11.Node_betArea.getChildByName("Node_area_" + (cardLhd3Model.instance.result.prizeResults - 1));
            var light = Node_area.getChildByName("light");
            light.active = true;
            light.getComponent(sp.Skeleton).setAnimation(0, strAni, true);
            _this11.scheduleOnce(resolve, 3.0);
          });
        };
        _proto.showHeadEffect = function showHeadEffect() {
          var _this12 = this;
          return new Promise(function (resolve, reject) {
            if (!cardLhd3Model.instance.result || !cardLhd3Model.instance.prize) {
              return resolve;
            }
            cardLhd3Utils.instance.playOneShot(eSound.coin);
            if (cardLhd3Model.instance.prize.userPrize.prizeAmount > 0) {
              var headEffect = _this12.Node_head.getChildByName("headEffect");
              headEffect.active = true;
              headEffect.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
              var Label_winAdd = find("Sprite_Label_winAdd/Label_winAdd", _this12.Node_head);
              Label_winAdd.parent.active = true;
              Label_winAdd.getComponent(Label).string = "+" + Common.ChangeMoneyShow(cardLhd3Model.instance.prize.userPrize.prizeAmount, 2);
            }
            for (var i = 0; i < _this12.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this12.Node_deskPlayer);
              var playerInfo = cardLhd3Model.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator7 = _createForOfIteratorHelperLoose(cardLhd3Model.instance.prize.seatPrize), _step7; !(_step7 = _iterator7()).done;) {
                  var prizeInfo = _step7.value;
                  if (prizeInfo.userId == playerInfo.userId) {
                    var _headEffect2 = Node_headInfo.getChildByName("headEffect");
                    if (prizeInfo.yxb > 0) {
                      _headEffect2.active = true;
                      _headEffect2.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                      var _Label_winAdd2 = find("Sprite_Label_winAdd/Label_winAdd", Node_headInfo);
                      _Label_winAdd2.parent.active = true;
                      _Label_winAdd2.getComponent(Label).string = "+" + Common.ChangeMoneyShow(prizeInfo.prizeAmount, 2);
                    }
                    break;
                  }
                }
              }
            }
          });
        };
        _proto.initDeskChip = function initDeskChip() {
          for (var i = 0; i < 3; i++) {
            var myBet = cardLhd3Model.instance.myBetList[i];
            if (myBet > 0) {
              this.doSendChip(i, myBet);
            }
            var otherBet = cardLhd3Model.instance.totalBetList[i];
            if (otherBet > 0) {
              this.doSendChip(i, otherBet, this.Node_public);
            }
          }
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            if (!cardLhd3Model.instance.result || !cardLhd3Model.instance.prize || !cardLhd3Model.instance.PlayerInfos) {
              return resolve;
            }
            var wChipTagPos = _this13.Node_chipTag.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wWinPos_0 = _this13.Node_betArea.getChildByName("Node_area_" + (cardLhd3Model.instance.result.prizeResults - 1)).getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            var wToWinPos = [];
            if (cardLhd3Model.instance.prize.userPrize.prizeAmount > 0) {
              wToWinPos.push(_this13.Node_head.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
              _this13.scheduleOnce(function () {
                if (cardLhd3Model.instance.endBalance > 0) {
                  cardLhd3Model.instance.curBalance = cardLhd3Model.instance.endBalance;
                  cardLhd3Model.instance.endBalance = 0;
                  _this13.updateGold();
                }
              }, 3.25);
            }
            for (var i = 0; i < _this13.Node_deskPlayer.children.length; i++) {
              var Node_headInfo = find("Node_head_" + i + "/Node_headInfo", _this13.Node_deskPlayer);
              var playerInfo = cardLhd3Model.instance.PlayerInfos[i];
              if (playerInfo) {
                for (var _iterator8 = _createForOfIteratorHelperLoose(cardLhd3Model.instance.prize.seatPrize), _step8; !(_step8 = _iterator8()).done;) {
                  var prizeInfo = _step8.value;
                  if (prizeInfo.userId == playerInfo.userId && prizeInfo.prizeAmount > 0) {
                    wToWinPos.push(Node_headInfo.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
                    break;
                  }
                }
              }
            }
            wToWinPos.push(_this13.Node_public.getComponent(UITransform).convertToWorldSpaceAR(v3(0)));
            for (var _i3 = 0; _i3 < _this13.Node_betArea.children.length; _i3++) {
              var Node_area = _this13.Node_betArea.getChildByName("Node_area_" + _i3);
              var Node_myChip = Node_area.getChildByName("Node_myChip");
              var Node_totalChip = Node_area.getChildByName("Node_totalChip");
              for (var _iterator9 = _createForOfIteratorHelperLoose(Node_myChip.children), _step9; !(_step9 = _iterator9()).done;) {
                var nodeChip = _step9.value;
                var toPos_0 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var toPos_1 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0);
                var toPos_2 = Node_myChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i3 % wToWinPos.length]);
                tween(nodeChip).to(0.5, {
                  position: toPos_0
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: v3(toPos_1.x + 50 - Math.random() * 100, toPos_1.y + 25 - Math.random() * 50, toPos_1.z)
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: toPos_2
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
              for (var _iterator10 = _createForOfIteratorHelperLoose(Node_totalChip.children), _step10; !(_step10 = _iterator10()).done;) {
                var _nodeChip = _step10.value;
                var _toPos_ = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wChipTagPos);
                var _toPos_2 = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wWinPos_0);
                var _toPos_3 = Node_totalChip.getComponent(UITransform).convertToNodeSpaceAR(wToWinPos[_i3 % wToWinPos.length]);
                tween(_nodeChip).to(0.5, {
                  position: _toPos_
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: v3(_toPos_2.x + 50 - Math.random() * 100, _toPos_2.y + 25 - Math.random() * 50, _toPos_2.z)
                }, {
                  easing: "cubicOut"
                }).delay(1.0).to(0.5, {
                  position: _toPos_3
                }, {
                  easing: "cubicOut"
                }).destroySelf().start();
              }
            }
            cardLhd3Utils.instance.playOneShot(eSound.collectChip);
            _this13.scheduleOnce(function () {
              cardLhd3Utils.instance.playOneShot(eSound.collectChip);
            }, 1.5);
            _this13.scheduleOnce(function () {
              cardLhd3Utils.instance.playOneShot(eSound.collectChip);
            }, 3);
          });
        };
        _proto.doEnd = /*#__PURE__*/function () {
          var _doEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.doOpenCard();
                case 2:
                  this.showCardLight();
                  this.showWinEffect();
                  this.updateRecord();
                  EventManager.instance.emit(eEvent.onUpdatePath);
                  if (cardLhd3Model.instance.prize) {
                    this.showResult();
                  }
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doEnd() {
            return _doEnd.apply(this, arguments);
          }
          return doEnd;
        }();
        _proto.showResult = /*#__PURE__*/function () {
          var _showResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(!cardLhd3Model.instance.result || !cardLhd3Model.instance.prize)) {
                    _context3.next = 2;
                    break;
                  }
                  return _context3.abrupt("return");
                case 2:
                  this.doCollectChip();
                  this.scheduleOnce(this.showHeadEffect, 3.5);
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
          function showResult() {
            return _showResult.apply(this, arguments);
          }
          return showResult;
        }();
        _proto.showStatusTip = function showStatusTip(strName, isLoop) {
          var _this14 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          this.Node_statusTip.node.active = true;
          var skeletonData = cardLhd3Utils.instance.getSkeletonData(strName);
          this.Node_statusTip.skeletonData = skeletonData;
          this.Node_statusTip.premultipliedAlpha = false;
          this.scheduleOnce(function () {
            var aniName = strName == eEffect.dragonwin ? "animation" : "idle";
            _this14.Node_statusTip.setAnimation(0, aniName, isLoop);
            _this14.Node_statusTip.setCompleteListener(null);
            if (!isLoop) {
              _this14.Node_statusTip.setCompleteListener(function () {
                _this14.Node_statusTip.setCompleteListener(null);
                _this14.Node_statusTip.skeletonData = null;
                _this14.Node_statusTip.node.active = false;
              });
            }
          });
        }

        //net update
        ;

        _proto.updateView = function updateView(event, data) {
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
            case eProto.HD_enter:
              {
                Common.closeWait();
                Common.setButtonEnableWithGray(this.Button_again, false);
                Common.setButtonEnableWithGray(this.Button_x2, false);
                ChipProxy.initChipList(cardLhd3Model.instance.chipList);
                this.createChipsList();
                this.initOdds();
                this.onUpdateDeskPlayer();
                this.showCountDown(true);
                this.initDeskChip();
                switch (cardLhd3Model.instance.gameStatus) {
                  //下注
                  case eStatus.bet:
                    {
                      // //更新自己下注
                      // for (let i = 0; i < 3; i++) {
                      //   let BetAmount = cardLhd3Model.instance.myBetList[i];
                      //   if (BetAmount > 0) {
                      //     this.doSendChip(i, BetAmount);
                      //   }
                      // }

                      if (cardLhd3Model.instance.myTotalBet > 0) {
                        Common.setButtonEnableWithGray(this.Button_x2, true);
                      }
                      this.Label_timer.node.active = cardLhd3Model.instance.countDown > 3;
                      this.doSendCards();
                      break;
                    }
                }

                // this.Label_gameNo.string = `No: ${cardLhd3Model.instance.gameNo}`;
                break;
              }
            case eProto.HD_Bet:
              {
                cardLhd3Model.instance.curBalance -= parseInt(data.betAmount);
                this.updateGold();
                cardLhd3Model.instance.myBetList[parseInt(data.pos) - 1] = cardLhd3Model.instance.myBetList[parseInt(data.pos) - 1] || 0;
                cardLhd3Model.instance.myBetList[parseInt(data.pos) - 1] += parseInt(data.betAmount);
                this.doSendChip(parseInt(data.pos) - 1, parseInt(data.betAmount));
                if (cardLhd3Model.instance.gameStatus == eStatus.bet) {
                  Common.setButtonEnableWithGray(this.Button_x2, true);
                }
                break;
              }
            case eProto.HD_BetList:
              {
                var arrBetInfo = data;
                for (var _iterator11 = _createForOfIteratorHelperLoose(arrBetInfo), _step11; !(_step11 = _iterator11()).done;) {
                  var strInfo = _step11.value;
                  var betInfo = JSON.parse(strInfo);
                  var pos = betInfo.betType - 1;
                  if (cardLhd3Model.instance.PlayerInfos[0] && betInfo.userId == cardLhd3Model.instance.PlayerInfos[0].userId) {
                    this.doSendStar(pos);
                  }
                  cardLhd3Model.instance.totalBetList[pos] = cardLhd3Model.instance.totalBetList[pos] || 0;
                  cardLhd3Model.instance.totalBetList[pos] += betInfo.betAmount;
                  var isDeskPlayerBet = false;
                  var maxIndex = cardLhd3Model.instance.PlayerInfos.length > 6 ? 6 : cardLhd3Model.instance.PlayerInfos.length;
                  for (var i = 0; i < maxIndex; i++) {
                    var playerInfo = cardLhd3Model.instance.PlayerInfos[i];
                    if (betInfo.userId == playerInfo.userId) {
                      var Node_root = this.Node_deskPlayer.getChildByName("Node_head_" + i);
                      this.doSendChip(pos, betInfo.betAmount, Node_root);
                      isDeskPlayerBet = true;
                      break;
                    }
                  }
                  if (!isDeskPlayerBet) {
                    this.doSendChip(pos, betInfo.betAmount, this.Node_public);
                  }
                }
                break;
              }
            case eProto.updatePlayerNum:
              {
                this.onUpdateDeskPlayer();
                break;
              }
            case eProto.HD_SwitchRoomState:
              {
                switch (cardLhd3Model.instance.gameStatus) {
                  case eStatus.ready:
                    {
                      Common.setButtonEnableWithGray(this.Button_again, false);
                      Common.setButtonEnableWithGray(this.Button_x2, false);
                      this.doClearChip();
                      cardLhd3Utils.instance.playOneShot(eSound.vs);
                      this.showStatusTip(eEffect.PK);
                      this.doSendCards();
                      break;
                    }
                  case eStatus.bet:
                    {
                      cardLhd3Utils.instance.playOneShot(eSound.startStop);
                      this.showStatusTip(eEffect.startbet);
                      break;
                    }
                }
                this.showCountDown();
                break;
              }
            case eProto.HD_OpenResult:
              {
                this.doEnd();
                break;
              }
            case eProto.HD_history:
              {
                this.updateRecord();
                break;
              }
            case eProto.HD_leave:
              {
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
          }
        };
        return cardLhd3GameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_x2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Button_again", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "areaBtnParent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Button_menu", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "labNickName", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "labGold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprAvatar", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "Node_head", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_timer", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_timer", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "tittle_prizeng", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "daojishi", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_public", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_deskPlayer", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_betArea", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "betChip", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_effectRoot", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardDragon", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_cardTiger", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "betEffect", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "Node_statusTip", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "ScrollView_record", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "Node_chipTag", [_dec29], {
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

System.register("chunks:///_virtual/cardLhd3Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './cardLhd3Model.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, cardLhd3Model;
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
      Component = module.Component;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "36712tgYeBHeq0hsvZhixL8", "cardLhd3Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var cardLhd3Help = exports('cardLhd3Help', (_dec = ccclass("cardLhd3Help"), _dec2 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3Help, _Component);
        function cardLhd3Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "helpRate", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = cardLhd3Help.prototype;
        /////////////////////////////
        _proto.start = function start() {
          for (var i = 0; i < this.helpRate.children.length; i++) {
            var Label_rate = this.helpRate.children[i];
            Label_rate.getComponent(Label).string = "" + cardLhd3Model.instance.Rate[i] / 100;
          }
        };
        return cardLhd3Help;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "helpRate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3Model.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './cardLhd3Def.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f250dfb/i9LL6uPnKNyNRnE", "cardLhd3Model", undefined);
      var cardLhd3Model = exports('cardLhd3Model', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(cardLhd3Model, _GameDef$BaseSington);
        function cardLhd3Model() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          //    //抽水
          _this.nPummping = 0;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.curBet = 0;
          _this.countDown = 0;
          _this.chipList = [];
          _this.gameNo = null;
          _this.BetSecond = 0;
          _this.TotalSecond = 0;
          _this.gameStatus = eStatus.none;
          _this.gameInfo = null;
          _this.myBetList = [0, 0, 0];
          _this.totalBetList = [0, 0, 0];
          _this.myBetListBack = [0, 0, 0];
          _this.PosMaxBet = {};
          _this.history = [];
          _this.SendCards = [];
          _this.ShowCard = null;
          _this.SendCount = null;
          _this.Rate = [];
          _this.myTotalBet = 0;
          _this.result = null;
          _this.prize = null;
          _this.PlayerCount = 0;
          _this.PlayerInfos = null;
          _this.lightPos = 0;
          _this.firstUserID = "";
          ////////////////////////////
          _this.bigRoadMap = [];
          _this.bigEyeRoadMap = [];
          _this.smallRoadMap = [];
          _this.roachRoadMap = [];
          /////////////////////////////////////////
          //    //聊天列表-文本
          _this._chatQueueList = [];
          //    //聊天列表-表情
          _this._expressionQueueList = [];
          return _this;
        }
        var _proto = cardLhd3Model.prototype;
        _proto.clearGameData = function clearGameData() {
          this.myBetList = [0, 0, 0];
          this.totalBetList = [0, 0, 0];
          this.myBetListBack = [0, 0, 0];
        };
        _createClass(cardLhd3Model, [{
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
        return cardLhd3Model;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/cardLhd3Record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './EventManager.ts', './ConfigManager.ts', './NetManager.ts', './DataManager.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, find, view, v3, Label, instantiate, color, Component, Common, EventManager, ConfigManager, NetManager, DataManager, UserKey, i18n;
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
      find = module.find;
      view = module.view;
      v3 = module.v3;
      Label = module.Label;
      instantiate = module.instantiate;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fc7a3mMzGtDm75pqICjPoYP", "cardLhd3Record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var cardLhd3Record = exports('default', (_dec = ccclass("cardLhd3Record"), _dec2 = menu("cardLhd3Record"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3Record, _Component);
        function cardLhd3Record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item", _descriptor2, _assertThisInitialized(_this));
          _this._gameType = void 0;
          _this._curPage = 1;
          _this._pageSize = 6;
          _this._lastPage = 1;
          _this.next_btn = null;
          _this.before_btn = null;
          return _this;
        }
        var _proto = cardLhd3Record.prototype;
        _proto.onLoad = function onLoad() {
          this.next_btn = find("bg/next_btn", this.node);
          this.before_btn = find("bg/before_btn", this.node);
        };
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 8;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: 0,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.showRecordLayerByPage = function showRecordLayerByPage(data) {
          if (!data || !data.BetRecord || data.BetRecord.length == 0) {
            this._curPage = this._lastPage;
            this.next_btn.active = false;
            return;
          }
          find("bg/content_bg/page", this.node).getComponent(Label).string = "PAGE: " + this._curPage;
          this.before_btn.active = this._curPage != 1;
          this.next_btn.active = data.NextPage;
          gts.Debug.Log("=Record dataList=" + JSON.stringify(data));
          this.content.removeAllChildren();
          var dataList = data.BetRecord;
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.node_item);
            item.active = true;
            item.parent = this.content;
            var sdata = dataList[i];
            var date = Common.getTimeFormat(sdata.CreateAt);
            // item.getChildByName("bg").active = i % 2 == 1;

            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            item.getChildByName("winNum").getComponent(Label).string = Common.numFormat(sdata.Income);
            if (sdata.Income > 0) {
              item.getChildByName("winNum").getComponent(Label).string = "+" + item.getChildByName("winNum").getComponent(Label).string;
            }
            item.getChildByName("winNum").getComponent(Label).color = sdata.Income > 0 ? color("fc7070") : color("70FC92");
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.numFormat(sdata.BetAmount);

            //改为开奖结果
            var result = JSON.parse(sdata.GameResult);
            for (var _i = 0; _i < 2; _i++) {
              result["" + (_i + 1)] %= 13;
              if (result["" + (_i + 1)] == 0) {
                result["" + (_i + 1)] = 13;
              }
              result["" + (_i + 1)] = parseInt(result["" + (_i + 1)]);
            }
            item.getChildByName("result").getComponent(Label).string = result["1"] > result["2"] ? i18n.lang.gameResult["Long"] : result["1"] == result["2"] ? i18n.lang.gameResult["Hoa"] : i18n.lang.gameResult["Ho"];
            item.getChildByName("platform").getComponent(Label).string = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
            item.getChildByName("gameId").getComponent(Label).string = sdata.GameNo;
          }
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        return cardLhd3Record;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_item", [_dec4], {
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

System.register("chunks:///_virtual/cardLhd3Scene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './cardLhd3Def.ts', './ConfigManager.ts', './EventManager.ts', './cardLhd3Utils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, view, instantiate, UIOpacity, tween, Component, NetManager, ViewManager, Common, cBundle, eEvent, ConfigManager, EventManager, cardLhd3Utils;
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
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      cardLhd3Utils = module.cardLhd3Utils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c8720rtFnxMfqU/s5Uy9XMz", "cardLhd3Scene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var cardLhd3Scene = exports('default', (_dec = ccclass("cardLhd3Scene"), _dec2 = menu("game/cardLhd3game/cardLhd3Scene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(cardLhd3Scene, _Component);
        function cardLhd3Scene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_hall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor3, _assertThisInitialized(_this));
          _this._node_hall = null;
          _this._node_Game = null;
          return _this;
        }
        var _proto = cardLhd3Scene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          cardLhd3Utils.instance.bundle = assetManager.getBundle(cBundle);
          cardLhd3Utils.instance.preLoad();
          cardLhd3Utils.instance.playBgMusic();
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
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
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
        _proto.showHall = function showHall() {
          var _this3 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            tween(this._node_hall.getComponent(UIOpacity)).to(0.1, {
              opacity: 255
            }).call(function () {
              if (_this3.firstNode) {
                _this3.firstNode.removeFromParent();
                _this3.firstNode.destroy();
                _this3.firstNode = null;
              }
              if (_this3._node_Game) {
                _this3._node_Game.removeFromParent();
                _this3._node_Game.destroy();
                _this3._node_Game = null;
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadHall");
          }
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this4 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            cardLhd3Utils.instance.bundle.load("prefab/ui_game", Prefab, function (cur, total) {}, function (err, prefab) {
              _this4.prefab_game = prefab;
              _this4.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this5 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              this._node_Game.getComponent(UIOpacity).opacity = 0;
              fadeInTimes = 0.15;
            }
            this.onResize();
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this5._node_hall) {
                _this5._node_hall.removeFromParent();
                _this5._node_hall.destroy();
                _this5._node_hall = null;
              }
              Common.closeWait();
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return cardLhd3Scene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_hall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec5], {
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

System.register("chunks:///_virtual/cardLhd3Utils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './cardLhd3Def.ts', './Common.ts', './cardLhd3Model.ts', './DataManager.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, sys, SpriteFrame, sp, GameDef, AudioManager, eSound, strColor, strValue, Common, cardLhd3Model, DataManager, UserKey;
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
      strColor = module.strColor;
      strValue = module.strValue;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      cardLhd3Model = module.cardLhd3Model;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      cclegacy._RF.push({}, "18f3eUM/SdLvaQxRHk3ZPc3", "cardLhd3Utils", undefined);
      var cardLhd3Utils = exports('cardLhd3Utils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(cardLhd3Utils, _GameDef$BaseSington);
        function cardLhd3Utils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          //    //animationName:{icon_wild:{idle,boom},icon_hu:{idle,intro}}
          //    // icon_hu:{icon_fa:["faidle","fa"]}
          _this.arrSkeletonData = {};
          // arrFontData: { [index: string]: Font } = {};
          _this.arrSpriteFrame = {};
          _this.soundIDList = {};
          _this._myUID = null;
          return _this;
        }
        var _proto = cardLhd3Utils.prototype;
        //    // arrEffectSkeletonData: { [index: string]: sp.SkeletonData } = {};
        //    //资源预加载
        _proto.preLoad = function preLoad() {
          this.bundle.preload("prefab/cardLhd3GameView");
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
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = []; // arrHLoad.push(
                  //   this.asyncLoadDir("textures/card", cc.SpriteFrame, (err, arrSpFrame: cc.SpriteFrame[]) => {
                  //     if (!err) {
                  //       for (const SpriteFrame of arrSpFrame) {
                  //         this.arrSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //       }
                  //     }
                  //   }),
                  // );
                  // arrHLoad.push(
                  //   this.asyncLoadDir("textures/chip", cc.SpriteFrame, (err, arrSpFrame: cc.SpriteFrame[]) => {
                  //     if (!err) {
                  //       for (const SpriteFrame of arrSpFrame) {
                  //         this.arrSpriteFrame[SpriteFrame.name] = SpriteFrame;
                  //       }
                  //     }
                  //   }),
                  // );
                  arrHLoad.push(this.asyncLoadDir("textures/dynamic", SpriteFrame, function (err, arrSpFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpFrame), _step; !(_step = _iterator()).done;) {
                        var _SpriteFrame = _step.value;
                        _this4.arrSpriteFrame[_SpriteFrame.name] = _SpriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("spine/dynamic", sp.SkeletonData, function (err, arrSpineData) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpineData), _step2; !(_step2 = _iterator2()).done;) {
                        var spineData = _step2.value;
                        _this4.arrSkeletonData[spineData.name] = spineData;
                      }
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
          function loadRes(_x7) {
            return _loadRes.apply(this, arguments);
          }
          return loadRes;
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
            soundPath = eSound.bg;
          }
          AudioManager.instance.playGameMusicByPath(soundPath, this.bundle, true);
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

            // audioEngine.setEffectsVolume(1);
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
          var inter = Common.numFormat(num);
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

          //        // cardLhd3Utils.instance.playSound(cardLhd3Def.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // cardLhd3Utils.instance.stopSound(cardLhd3Def.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormat(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
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
          var _this8 = this;
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

          //        // cardLhd3Utils.instance.playSound(cardLhd3Def.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // cardLhd3Utils.instance.stopSound(cardLhd3Def.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
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

          //        // cardLhd3Utils.instance.playSound(cardLhd3Def.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // cardLhd3Utils.instance.stopSound(cardLhd3Def.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this9.numberFormatFloat(curWin, 0) : "" + _this9.numberFormat(curWin, 0);
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

        _proto.getCardName = function getCardName(vCard) {
          var color = Math.ceil(vCard / 13) - 1;
          var value = vCard % 13;
          value = value == 0 ? 13 : value;
          var strFrame = "" + strColor[color] + strValue[value - 1];
          return strFrame;
        };
        _proto.getCardFrame = function getCardFrame(vCard) {
          var color = vCard >> 4;
          var value = vCard & 0xf;
          var strFrame = "" + strColor[color - 1] + strValue[value - 2];
          if (this.arrSpriteFrame) {
            return this.arrSpriteFrame[strFrame];
          }
          return null;
        };
        _proto.getSprFrame = function getSprFrame(strName) {
          if (this.arrSpriteFrame) {
            return this.arrSpriteFrame[strName];
          }
          return null;
        }
        // getSymbolAniName(symbolIndex, isIdle: boolean = true) {
        //     //        // if (isIdle) {
        //     //        //     return null;
        //     //        // }

        //     let strAni = [];
        //     // switch (symbolIndex) {
        //     //     case cardLhd3Def.eSymbol.NONE: {
        //     //         let index = Math.floor(Math.random() * (symbol_aniName.length - 3) + 3);
        //     //         strAni.push(`${symbol_aniName[index]}_${isIdle ? "idle" : "win"}`);
        //     //         break;
        //     //     }
        //     //     case cardLhd3Def.eSymbol.SCATTER: {
        //     //         if (isIdle) {
        //     //             strAni.push(`free_idle`);
        //     //         } else {
        //     //             strAni.push(`free_intro`);
        //     //             strAni.push(`free_intro`);
        //     //         }
        //     //         break;
        //     //     }
        //     //     case cardLhd3Def.eSymbol.SpecialWild: {
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
        ;

        _proto.getSkeletonData = function getSkeletonData(strAni) {
          if (!this.arrSkeletonData) {
            return null;
          }
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        _proto.isMySelf = function isMySelf(uid) {
          if (!this._myUID) {
            this._myUID = DataManager.instance.getUserDataForKey(UserKey.OID);
          }
          return uid == this._myUID;
        }

        ///////////////////////////////////////////////////////////
        //path road
        ;

        _proto.parseBigRoad = function parseBigRoad() {
          var rowNum = 6;
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          cardLhd3Model.instance.bigRoadMap = [];
          var startIndex = cardLhd3Model.instance.history.length > 105 ? cardLhd3Model.instance.history.length - 105 : 0;
          var openResults = cardLhd3Model.instance.history.slice(startIndex);
          for (var i = 0; i < openResults.length; i++) {
            //big:red small:black
            var openNum = openResults[i];
            var isBig = openNum == 1 || openNum == 3;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!cardLhd3Model.instance.bigRoadMap[iCol_real + iCol_add] || !cardLhd3Model.instance.bigRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            cardLhd3Model.instance.bigRoadMap[iCol_real + iCol_add] = cardLhd3Model.instance.bigRoadMap[iCol_real + iCol_add] || [];
            cardLhd3Model.instance.bigRoadMap[iCol_real + iCol_add][iRow] = isBig ? 1 : 2;
            isBigBack = isBig;
          }

          // gts.Debug.Log(JSON.stringify(cardLhd3Model.instance.bigRoadMap));
        };

        _proto.parseBigEyeRoad = function parseBigEyeRoad() {
          var rowNum = 6;
          var bigEyeRecord = [];
          var bigRoadMap = cardLhd3Model.instance.bigRoadMap.slice();
          for (var iCol = 1; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 1 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow = startRow; _iRow < arrValue.length; _iRow++) {
              if (_iRow == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 2].length;
                num = 0;
                bigEyeRecord.push(len_0 == len_1 ? 1 : 2);

                // if (len_0 == len_1) {
                //     bigEyeRecord.push(1);
                //     num = 0;
                // } else {
                //     bigEyeRecord.push(num > 0 ? 1 : 2);
                //     num++;
                // }
              } else {
                var arrValue_1 = bigRoadMap[iCol - 1];
                if (arrValue_1[_iRow]) {
                  bigEyeRecord.push(1);
                  num = 0;
                } else {
                  bigEyeRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          cardLhd3Model.instance.bigEyeRoadMap = [];
          for (var i = 0; i < bigEyeRecord.length; i++) {
            //big:red small:black
            var value = bigEyeRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!cardLhd3Model.instance.bigEyeRoadMap[iCol_real + iCol_add] || !cardLhd3Model.instance.bigEyeRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            cardLhd3Model.instance.bigEyeRoadMap[iCol_real + iCol_add] = cardLhd3Model.instance.bigEyeRoadMap[iCol_real + iCol_add] || [];
            cardLhd3Model.instance.bigEyeRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        };
        _proto.parseSmallRoad = function parseSmallRoad() {
          var rowNum = 6;
          var smallRecord = [];
          var bigRoadMap = cardLhd3Model.instance.bigRoadMap.slice();
          for (var iCol = 2; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 2 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow2 = startRow; _iRow2 < arrValue.length; _iRow2++) {
              if (_iRow2 == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 3].length;
                num = 0;
                smallRecord.push(len_0 == len_1 ? 1 : 2);
              } else {
                var arrValue_1 = bigRoadMap[iCol - 2];
                if (arrValue_1[_iRow2]) {
                  smallRecord.push(1);
                  num = 0;
                } else {
                  smallRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          cardLhd3Model.instance.smallRoadMap = [];
          for (var i = 0; i < smallRecord.length; i++) {
            //big:red small:black
            var value = smallRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!cardLhd3Model.instance.smallRoadMap[iCol_real + iCol_add] || !cardLhd3Model.instance.smallRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            cardLhd3Model.instance.smallRoadMap[iCol_real + iCol_add] = cardLhd3Model.instance.smallRoadMap[iCol_real + iCol_add] || [];
            cardLhd3Model.instance.smallRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        }

        //小强路
        ;

        _proto.parseRoachRoad = function parseRoachRoad() {
          var rowNum = 6;
          var roachRecord = [];
          var bigRoadMap = cardLhd3Model.instance.bigRoadMap.slice();
          for (var iCol = 3; iCol < bigRoadMap.length; iCol++) {
            var startRow = iCol == 3 ? 1 : 0;
            var arrValue = bigRoadMap[iCol];
            var num = 0;
            for (var _iRow3 = startRow; _iRow3 < arrValue.length; _iRow3++) {
              if (_iRow3 == 0) {
                var len_0 = bigRoadMap[iCol - 1].length;
                var len_1 = bigRoadMap[iCol - 4].length;
                num = 0;
                roachRecord.push(len_0 == len_1 ? 1 : 2);
              } else {
                var arrValue_1 = bigRoadMap[iCol - 3];
                if (arrValue_1[_iRow3]) {
                  roachRecord.push(1);
                  num = 0;
                } else {
                  roachRecord.push(num > 0 ? 1 : 2);
                  num++;
                }
              }
            }
          }
          var isBigBack = false;
          var iCol_real = 0;
          var iCol_add = 0;
          var iRow = 0;
          cardLhd3Model.instance.roachRoadMap = [];
          for (var i = 0; i < roachRecord.length; i++) {
            //big:red small:black
            var value = roachRecord[i];
            var isBig = value == 1;
            if (i != 0) {
              if (isBigBack != isBig) {
                iRow = 0;
                iCol_real++;
                iCol_add = 0;
              } else if (iCol_add == 0 && iRow < rowNum - 1 && (!cardLhd3Model.instance.roachRoadMap[iCol_real + iCol_add] || !cardLhd3Model.instance.roachRoadMap[iCol_real + iCol_add][iRow + 1])) {
                iRow++;
              } else {
                iCol_add++;
              }
            }
            cardLhd3Model.instance.roachRoadMap[iCol_real + iCol_add] = cardLhd3Model.instance.roachRoadMap[iCol_real + iCol_add] || [];
            cardLhd3Model.instance.roachRoadMap[iCol_real + iCol_add][iRow] = value;
            isBigBack = isBig;
          }
        };
        return cardLhd3Utils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/cardLhd3Game', 'chunks:///_virtual/cardLhd3Game'); 
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