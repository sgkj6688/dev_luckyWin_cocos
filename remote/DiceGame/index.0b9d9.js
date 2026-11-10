System.register("chunks:///_virtual/DiceButtonIndex.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, MainManager, Common;
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
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "f6586owXVBJ475VZmd2U5Uk", "DiceButtonIndex", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DiceButtonIndex = exports('default', (_dec = ccclass("DiceButtonIndex"), _dec2 = menu("game/dicegame/DiceButtonIndex"), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceButtonIndex, _Component);
        function DiceButtonIndex() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _this._index = 0;
          _this._serverId = void 0;
          _this._lock = false;
          _this.isRuning = false;
          return _this;
        }
        var _proto = DiceButtonIndex.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // AudioManager.instance.playbuttonEffect();
          if (ConfigManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + ConfigManager[this.eventType][this.eventName]);
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              this.scheduleOnce(function () {
                self.isRuning = false;
                EventManager.dispatch(ConfigManager[self.eventType][self.eventName], {
                  index: self._index,
                  serId: self._serverId,
                  lock: self._lock
                });
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

        return DiceButtonIndex;
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
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ConfigManager from "../../../script/manager/ConfigManager";
      // import EventManager from "../../../script/manager/EventManager";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/dicegame/DiceButtonIndex")
      // export default class DiceButtonIndex extends cc.Component {
      //     @property
      //     eventName: string = "事件类型";
      //     @property
      //     eventType: string = "ButtonEvent";
      //     _index: number = 0;
      //     _serverId;
      //     _lock = false;
      //     isRuning = false;
      //     onLoad() {}
      //     start() {}
      //     dispatchButtonEvent(event: cc.Event, eventData: any) {
      //         // AudioManager.instance.playbuttonEffect();
      //         if (ConfigManager.instance[this.eventType][this.eventName]) {
      //             Common.showLog("相应事件" + ConfigManager.instance[this.eventType][this.eventName]);
      //             let self = this;
      //             if (this.isRuning == false) {
      //                 this.isRuning = true;
      //                 this.scheduleOnce(function () {
      //                     self.isRuning = false;
      //                     EventManager.instance.dispatch(ConfigManager.instance[self.eventType][self.eventName], {
      //                         index: self._index,
      //                         serId: self._serverId,
      //                         lock: self._lock,
      //                     });
      //                 }, 0.5);
      //             } else {
      //                 Common.showLog("button speed too fast");
      //             }
      //         } else {
      //             Common.showLog("事件类型" + this.eventName + "未注册");
      //         }
      //     }
      //     initAction() {}
      //     // update (dt) {}
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceGame", ['./DiceButtonIndex.ts', './DiceGameChip.ts', './DiceGameChipRect.ts', './DiceGameDef.ts', './DiceGameHistory.ts', './DiceGamePath.ts', './DiceGamePlayers.ts', './DiceGameRule.ts', './DiceHall.ts', './DiceLayer.ts', './DiceProxy.ts', './DiceScene.ts', './DicegameChipRectMgr.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/DiceGameChip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ChipProxy.ts', './ScrollListDataItem.ts', './DiceProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Tween, Component, ChipProxy, ChipEvent, ScrollListDataItem, DiceGameProxy;
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
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
    }, function (module) {
      ScrollListDataItem = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7b519sDZBVGs6go8JbDxh69", "DiceGameChip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DiceGameChip = exports('default', (_dec = ccclass("DiceGameChip"), _dec2 = menu("game/dicegame/DiceGameChip"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(ScrollListDataItem), _dec6 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGameChip, _Component);
        function DiceGameChip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_chip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_eff", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dataItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipFrames", _descriptor4, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _this.data = void 0;
          _this.isUp = false;
          return _this;
        }
        var _proto = DiceGameChip.prototype;
        _proto.onLoad = function onLoad() {
          this.node_eff.active = false;
        };
        _proto.start = function start() {
          this.data = this.dataItem.getData();
        }
        //    // update (dt) {}
        ;

        _proto.onClick = function onClick() {
          this.moveUp(true);
        };
        _proto.moveUp = function moveUp(b) {
          if (b === void 0) {
            b = true;
          }
          Tween.stopAllByTarget(this.node_chip);
          this.isUp = b;
          if (this.isUp) {
            this.node_eff.active = true;
            ChipProxy.emit(ChipEvent.SELECT_CHIP, this.data, DiceGameProxy.BUNDLE);
          } else {
            this.node_eff.active = false;
          }
        };
        return DiceGameChip;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_chip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_eff", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dataItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chipFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import ChipProxy, { ChipEvent } from "../../../script/tools/ChipProxy";
      // import ScrollListDataItem from "../../../script/tools/ScrollListDataItem";
      // import DiceGameProxy from "./DiceProxy";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/dicegame/DiceGameChip")
      // export default class DiceGameChip extends cc.Component {
      //     @property(cc.Node)
      //     node_chip: cc.Node = null;
      //     @property(cc.Node)
      //     node_eff: cc.Node = null;
      //
      //     @property(ScrollListDataItem)
      //     dataItem: ScrollListDataItem = null;
      //
      //     @property(cc.SpriteFrame)
      //     chipFrames: cc.SpriteFrame[] = [];
      //     // LIFE-CYCLE CALLBACKS:
      //
      //     data;
      //
      //     isUp = false;
      //
      //     onLoad() {
      //         this.node_eff.active = false;
      //     }
      //
      //     start() {
      //         this.data = this.dataItem.getData();
      //     }
      //
      //     // update (dt) {}
      //
      //     onClick() {
      //         this.moveUp(true);
      //     }
      //
      //     moveUp(b = true) {
      //         this.node_chip.stopAllActions();
      //         this.isUp = b;
      //         if (this.isUp) {
      //             this.node_eff.active = true;
      //             ChipProxy.emit(ChipEvent.SELECT_CHIP, this.data, DiceGameProxy.BUNDLE);
      //         } else {
      //             this.node_eff.active = false;
      //         }
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceGameChipRect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentTypeEx.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, isValid, tween, UIOpacity, Tween, Component, ContentTypeEx, GameContentType, Common, MainManager;
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
      Label = module.Label;
      Node = module.Node;
      isValid = module.isValid;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      ContentTypeEx = module.default;
      GameContentType = module.GameContentType;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "8f201g8NddBaJ+F+1Kej1Hp", "DiceGameChipRect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DiceGameChipRect = exports('default', (_dec = ccclass("DiceGameChipRect"), _dec2 = menu("game/dicegame/DiceGameChipRect"), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGameChipRect, _Component);
        function DiceGameChipRect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_selfChip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_otherChip", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hightLight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chipSelfBg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBet", _descriptor6, _assertThisInitialized(_this));
          _this._selfChipCount = 0;
          _this._totalChipCount = 0;
          _initializerDefineProperty(_this, "_pos", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DiceGameChipRect.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          gts.UI.OnClick(this.node, function () {
            EventManager.emit(ConfigManager.protocolDice.yxxHaveBet, _this2._pos);
          }, this);
          if (this.txt_rate && this.txt_rate.node) {
            var typeRate = this.txt_rate.node.addComponent(ContentTypeEx);
            typeRate.mgrType = GameContentType.BG;
          }
          var typeChip = this.node_otherChip.addComponent(ContentTypeEx);
          typeChip.mgrType = GameContentType.SPRITE;
          var typeNodeSelf = this.node_chipSelfBg.addComponent(ContentTypeEx);
          typeNodeSelf.mgrType = GameContentType.LABEL;
          var typeTxtSelf = this.txt_selfChip.addComponent(ContentTypeEx);
          typeTxtSelf.mgrType = GameContentType.LABEL2;
          var node_hightLight = this.node_hightLight.addComponent(ContentTypeEx);
          node_hightLight.mgrType = GameContentType.TOP;
          this.reset();
        };
        _proto.showHighLight = function showHighLight() {
          this.stopHighLight();
          if (!isValid(this.node_hightLight, true)) return;
          this.node_hightLight.active = true;
          tween(this.node_hightLight.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.setTotalBet = function setTotalBet(count) {
          if (typeof count == "string") {
            count = parseInt(count);
          }
          this._totalChipCount = count;
          if (this.txt_totalBet) {
            this.txt_totalBet.string = Common.ChangeMoneyShow(count, 2);
          }
        };
        _proto.addTotalBet = function addTotalBet(count) {
          this._totalChipCount += count;
          this.setTotalBet(this._totalChipCount);
        };
        _proto.setSelfBet = function setSelfBet(count) {
          this.node_chipSelfBg.active = count > 0;
          this.txt_selfChip.node.active = count > 0;
          this.txt_selfChip.string = Common.ChangeMoneyShow(count, 2);
          this._selfChipCount = count;
        };
        _proto.addSelfBet = function addSelfBet(count) {
          this._selfChipCount += count;
          this.setSelfBet(this._selfChipCount);
        };
        _proto.setRate = function setRate(str) {
          if (this.txt_rate) this.txt_rate.string = str;
        };
        _proto.reset = function reset() {
          this.setTotalBet(0);
          this.setSelfBet(0);
          this.stopHighLight();
        };
        _proto.stopHighLight = function stopHighLight() {
          // 父组件销毁时，子节点可能已先销毁，不能再调用 getComponent。
          if (!isValid(this.node_hightLight, true)) return;
          var opacity = this.node_hightLight.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            if (isValid(opacity, true)) opacity.opacity = 255;
          }
          this.node_hightLight.active = false;
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.stopHighLight();
        };
        _proto.onDestroy = function onDestroy() {
          this.stopHighLight();
        };
        _createClass(DiceGameChipRect, [{
          key: "rectPos",
          get: function get() {
            return this._pos;
          },
          set: function set(pos) {
            this._pos = pos;
          }
        }, {
          key: "selfBet",
          get: function get() {
            return this._selfChipCount;
          }
        }]);
        return DiceGameChipRect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_selfChip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_otherChip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_hightLight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_chipSelfBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_rate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_pos", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rectPos", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "rectPos"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DicegameChipRectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentEx.ts', './DiceGameChipRect.ts', './DiceProxy.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Label, Component, ContentEx, DiceGameChipRect, DiceGameProxy, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      DiceGameChipRect = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a305dKO01tGb449dtNzWAlP", "DicegameChipRectMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DiceGameChipRectMgr = exports('default', (_dec = ccclass("DicegameChipRectMgr"), _dec2 = menu("game/dicegame/DiceGameChipRectMgr"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGameChipRectMgr, _Component);
        function DiceGameChipRectMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.rectMap = void 0;
          _initializerDefineProperty(_this, "txt_rate", _descriptor, _assertThisInitialized(_this));
          _this.chipList = [];
          _this.lastBets = {};
          return _this;
        }
        var _proto = DiceGameChipRectMgr.prototype;
        _proto.onLoad = function onLoad() {
          this.rectMap = new Map();
          var children = this.node.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            var rect = child.getComponent(DiceGameChipRect);
            var key = rect.rectPos;
            this.chipList.push(rect);
            this.rectMap.set(key, rect);
            this.lastBets[key] = 0;
          }
        };
        _proto.start = function start() {
          var _this2 = this;
          this.scheduleOnce(function () {
            var contentEx = _this2.node.getComponent(ContentEx);
            if (contentEx) {
              contentEx.reload();
              contentEx.organize();
            }
          });
        };
        _proto.updateTotalBet = function updateTotalBet(data) {
          for (var key in data) {
            if (this.rectMap.get(parseInt(key))) {
              this.rectMap.get(parseInt(key)).setTotalBet(data[key]);
            }
          }
        };
        _proto.updateSelfBet = function updateSelfBet(data) {
          for (var key in data) {
            if (this.rectMap.get(parseInt(key))) {
              this.rectMap.get(parseInt(key)).setSelfBet(data[key]);
            }
          }
        };
        _proto.showHighLight = function showHighLight(data) {
          for (var _iterator2 = _createForOfIteratorHelperLoose(data), _step2; !(_step2 = _iterator2()).done;) {
            var key = _step2.value;
            if (this.rectMap.get(key)) {
              this.rectMap.get(key).showHighLight();
            }
          }
        }
        //    //获得所有未中奖节点
        ;

        _proto.getReturnChipParents = function getReturnChipParents(data) {
          var nodes = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.chipList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            var pos = i.rectPos;
            var has = false;
            for (var _iterator4 = _createForOfIteratorHelperLoose(data), _step4; !(_step4 = _iterator4()).done;) {
              var key = _step4.value;
              if (key == pos) {
                has = true;
                break;
              }
            }
            if (!has) nodes.push(i.node_otherChip);
          }
          return nodes;
        };
        _proto.getChipParent = function getChipParent(pos) {
          pos = parseInt(pos);
          if (this.rectMap.get(pos)) {
            return this.rectMap.get(pos).node_otherChip;
          }
          return null;
        };
        _proto.setRate = function setRate() {
          //        // console.log(" DiceGameProxy.oddList", DiceGameProxy.oddList, this.rectMap);
          if (DiceGameProxy.oddList) {
            var data = DiceGameProxy.oddList;
            for (var t in data) {
              var key = parseInt(t);
              var rect = this.rectMap.get(key);
              if (rect) {
                var curRate = data[t].odds / 100;
                rect.setRate("1:" + curRate);
                if (key == 32) {
                  var rate = curRate;
                  var rateStr = i18n.t("txtRate", rate, rate + 1, rate + 2); //`1:${rate} KHI CÓ 1 VIÊN               1:${rate + 1} KHI CÓ 2 VIÊN               1:${rate + 2} KHI CÓ 3 VIÊN`;
                  this.txt_rate.string = rateStr;
                }
              }
            }
          }
        };
        _proto.rememberBet = function rememberBet() {
          var needUpdate = false;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.chipList), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            if (i.selfBet > 0) {
              needUpdate = true;
              break;
            }
          }
          if (needUpdate) {
            for (var t in this.lastBets) {
              var key = parseInt(t);
              this.lastBets[t] = this.rectMap.get(key).selfBet;
            }
          }
        };
        _proto.addBetCount = function addBetCount(pos, bet, isSelf) {
          if (isSelf === void 0) {
            isSelf = false;
          }
          pos = parseInt(pos);
          var chipRect = this.rectMap.get(pos);
          if (chipRect) {
            if (isSelf) {
              chipRect.addSelfBet(bet);
            }
            chipRect.addTotalBet(bet);
          }
        };
        _proto.reset = function reset() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.chipList), _step6; !(_step6 = _iterator6()).done;) {
            var i = _step6.value;
            i.reset();
          }
        };
        _proto.resetSelftBet = function resetSelftBet() {
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.chipList), _step7; !(_step7 = _iterator7()).done;) {
            var i = _step7.value;
            i.setSelfBet(0);
          }
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _createClass(DiceGameChipRectMgr, [{
          key: "bets",
          get: function get() {
            return this.rectMap;
          }
        }]);
        return DiceGameChipRectMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_rate", [_dec3], {
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

System.register("chunks:///_virtual/DiceGameDef.ts", ['cc', './DiceProxy.ts'], function (exports) {
  var cclegacy, Sprite, SpriteFrame, sp, DiceGameProxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
    }, function (module) {
      DiceGameProxy = module.default;
    }],
    execute: function () {
      exports({
        loadHeguanByType: loadHeguanByType,
        loadIconByType: loadIconByType,
        loadItemBgByType: loadItemBgByType
      });
      cclegacy._RF.push({}, "b78717cJipFzo6W+zYAJBmv", "DiceGameDef", undefined);

      /** 单双 */
      var MAX_CHIP_REWARD = exports('MAX_CHIP_REWARD', 50);
      var CMList = exports('CMList', {
        100: 0,
        200: 1,
        500: 2,
        1000: 3,
        2000: 4,
        5000: 5,
        10000: 6,
        20000: 7,
        50000: 8,
        100000: 9,
        200000: 10,
        500000: 11,
        1000000: 12,
        5000000: 13,
        10000000: 14
      });
      var DiceType = exports('DiceType', /*#__PURE__*/function (DiceType) {
        DiceType[DiceType["BIG_BetType"] = 1] = "BIG_BetType";
        DiceType[DiceType["SMALL_BetType"] = 2] = "SMALL_BetType";
        DiceType[DiceType["SINGLE_BetType"] = 3] = "SINGLE_BetType";
        DiceType[DiceType["DOUBLE_BetType"] = 4] = "DOUBLE_BetType";
        DiceType[DiceType["SUM4_BetType"] = 5] = "SUM4_BetType";
        DiceType[DiceType["SUM5_BetType"] = 6] = "SUM5_BetType";
        DiceType[DiceType["SUM6_BetType"] = 7] = "SUM6_BetType";
        DiceType[DiceType["SUM7_BetType"] = 8] = "SUM7_BetType";
        DiceType[DiceType["SUM8_BetType"] = 9] = "SUM8_BetType";
        DiceType[DiceType["SUM9_BetType"] = 10] = "SUM9_BetType";
        DiceType[DiceType["SUM10_BetType"] = 11] = "SUM10_BetType";
        DiceType[DiceType["SUM11_BetType"] = 12] = "SUM11_BetType";
        DiceType[DiceType["SUM12_BetType"] = 13] = "SUM12_BetType";
        DiceType[DiceType["SUM13_BetType"] = 14] = "SUM13_BetType";
        DiceType[DiceType["SUM14_BetType"] = 15] = "SUM14_BetType";
        DiceType[DiceType["SUM15_BetType"] = 16] = "SUM15_BetType";
        DiceType[DiceType["SUM16_BetType"] = 17] = "SUM16_BetType";
        DiceType[DiceType["SUM17_BetType"] = 18] = "SUM17_BetType";
        DiceType[DiceType["CONSISTENT_BetType"] = 19] = "CONSISTENT_BetType";
        DiceType[DiceType["CONSISTENT1_BetType"] = 20] = "CONSISTENT1_BetType";
        DiceType[DiceType["CONSISTENT2_BetType"] = 21] = "CONSISTENT2_BetType";
        DiceType[DiceType["CONSISTENT3_BetType"] = 22] = "CONSISTENT3_BetType";
        DiceType[DiceType["CONSISTENT4_BetType"] = 23] = "CONSISTENT4_BetType";
        DiceType[DiceType["CONSISTENT5_BetType"] = 24] = "CONSISTENT5_BetType";
        DiceType[DiceType["CONSISTENT6_BetType"] = 25] = "CONSISTENT6_BetType";
        DiceType[DiceType["PAIR1_BetType"] = 26] = "PAIR1_BetType";
        DiceType[DiceType["PAIR2_BetType"] = 27] = "PAIR2_BetType";
        DiceType[DiceType["PAIR3_BetType"] = 28] = "PAIR3_BetType";
        DiceType[DiceType["PAIR4_BetType"] = 29] = "PAIR4_BetType";
        DiceType[DiceType["PAIR5_BetType"] = 30] = "PAIR5_BetType";
        DiceType[DiceType["PAIR6_BetType"] = 31] = "PAIR6_BetType";
        DiceType[DiceType["MATCH_SINGLE_1_BetType"] = 32] = "MATCH_SINGLE_1_BetType";
        DiceType[DiceType["MATCH_SINGLE_2_BetType"] = 33] = "MATCH_SINGLE_2_BetType";
        DiceType[DiceType["MATCH_SINGLE_3_BetType"] = 34] = "MATCH_SINGLE_3_BetType";
        DiceType[DiceType["MATCH_SINGLE_4_BetType"] = 35] = "MATCH_SINGLE_4_BetType";
        DiceType[DiceType["MATCH_SINGLE_5_BetType"] = 36] = "MATCH_SINGLE_5_BetType";
        DiceType[DiceType["MATCH_SINGLE_6_BetType"] = 37] = "MATCH_SINGLE_6_BetType";
        DiceType[DiceType["MATCH_DOUBLE_1_2_BetType"] = 38] = "MATCH_DOUBLE_1_2_BetType";
        DiceType[DiceType["MATCH_DOUBLE_1_3_BetType"] = 39] = "MATCH_DOUBLE_1_3_BetType";
        DiceType[DiceType["MATCH_DOUBLE_1_4_BetType"] = 40] = "MATCH_DOUBLE_1_4_BetType";
        DiceType[DiceType["MATCH_DOUBLE_1_5_BetType"] = 41] = "MATCH_DOUBLE_1_5_BetType";
        DiceType[DiceType["MATCH_DOUBLE_1_6_BetType"] = 42] = "MATCH_DOUBLE_1_6_BetType";
        DiceType[DiceType["MATCH_DOUBLE_2_3_BetType"] = 43] = "MATCH_DOUBLE_2_3_BetType";
        DiceType[DiceType["MATCH_DOUBLE_2_4_BetType"] = 44] = "MATCH_DOUBLE_2_4_BetType";
        DiceType[DiceType["MATCH_DOUBLE_2_5_BetType"] = 45] = "MATCH_DOUBLE_2_5_BetType";
        DiceType[DiceType["MATCH_DOUBLE_2_6_BetType"] = 46] = "MATCH_DOUBLE_2_6_BetType";
        DiceType[DiceType["MATCH_DOUBLE_3_4_BetType"] = 47] = "MATCH_DOUBLE_3_4_BetType";
        DiceType[DiceType["MATCH_DOUBLE_3_5_BetType"] = 48] = "MATCH_DOUBLE_3_5_BetType";
        DiceType[DiceType["MATCH_DOUBLE_3_6_BetType"] = 49] = "MATCH_DOUBLE_3_6_BetType";
        DiceType[DiceType["MATCH_DOUBLE_4_5_BetType"] = 50] = "MATCH_DOUBLE_4_5_BetType";
        DiceType[DiceType["MATCH_DOUBLE_4_6_BetType"] = 51] = "MATCH_DOUBLE_4_6_BetType";
        DiceType[DiceType["MATCH_DOUBLE_5_6_BetType"] = 52] = "MATCH_DOUBLE_5_6_BetType";
        return DiceType;
      }({})); //双骰5-6
      var DiceTableType = exports('DiceTableType', /*#__PURE__*/function (DiceTableType) {
        DiceTableType[DiceTableType["NORMAL"] = 1] = "NORMAL";
        DiceTableType[DiceTableType["MD5"] = 2] = "MD5";
        DiceTableType[DiceTableType["MD5_PRIZE"] = 3] = "MD5_PRIZE";
        return DiceTableType;
      }({}));
      function loadItemBgByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "";
          switch (type) {
            case DiceTableType.NORMAL:
              name = "textures/hall/di_quy";
              break;
            case DiceTableType.MD5:
              var id = tableId.slice(2, 3);
              if (id == "0") {
                name = "textures/hall/di_ho";
              } else {
                name = "textures/hall/di_long";
              }
              break;
            case DiceTableType.MD5_PRIZE:
              name = "textures/hall/di_phung";
              break;
          }
          var bundle = DiceGameProxy.bundle;
          var icon = node instanceof Sprite ? node : node.getComponent(Sprite);
          bundle.load(name, SpriteFrame, function (err, asset) {
            if (err) {
              reject();
              return;
            }
            icon.spriteFrame = asset;
            resolve();
          });
        });
      }
      function loadIconByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "";
          switch (type) {
            case DiceTableType.NORMAL:
              name = "textures/game/gui";
              break;
            case DiceTableType.MD5:
              var id = tableId.slice(2, 3);
              if (id == "0") {
                name = "textures/game/hu";
              } else {
                name = "textures/game/long";
              }
              break;
            case DiceTableType.MD5_PRIZE:
              name = "textures/game/niao";
              break;
          }
          var bundle = DiceGameProxy.bundle;
          var icon = node instanceof Sprite ? node : node.getComponent(Sprite);
          bundle.load(name, SpriteFrame, function (err, asset) {
            if (err) {
              reject();
              return;
            }
            icon.spriteFrame = asset;
            resolve();
          });
        });
      }
      function loadHeguanByType(node, type, tableId) {
        return new Promise(function (resolve, reject) {
          var name = "";
          switch (type) {
            case DiceTableType.NORMAL:
              name = "spine/sexygirl1";
              break;
            case DiceTableType.MD5:
              var id = tableId.slice(2, 3);
              if (id == "0") {
                name = "spine/sexygirl2";
              } else {
                name = "spine/sexygirl3";
              }
              break;
            case DiceTableType.MD5_PRIZE:
              name = "spine/sexygirl4";
              break;
          }
          var spine = node;
          var bundle = DiceGameProxy.bundle;
          bundle.load(name, sp.SkeletonData, function (err, asset) {
            if (err) {
              reject();
              return;
            }
            spine.skeletonData = asset;
            resolve();
          });
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceGameHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ContentEx.ts', './DiceProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Label, instantiate, Sprite, v2, Component, UITransform, i18n, ProxyMgr, ContentEx, DiceGameProxy, DiceGameEvent;
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
      Label = module.Label;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      v2 = module.v2;
      Component = module.Component;
      UITransform = module.UITransform;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
      DiceGameEvent = module.DiceGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;
      cclegacy._RF.push({}, "38437wBKc1Lvb75O08qbaTq", "DiceGameHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DiceGameHistory = exports('default', (_dec = ccclass("DiceGameHistory"), _dec2 = menu("game/dicegame/DiceGameHistory"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGameHistory, _Component);
        function DiceGameHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labelItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colorLine", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemLines", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labelFrames", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path1", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path2", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path3", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path4", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_new", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_layer1", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_layer2", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_layer1", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_layer2", _descriptor15, _assertThisInitialized(_this));
          _this._curpage = true;
          return _this;
        }
        var _proto = DiceGameHistory.prototype;
        _proto.onLoad = function onLoad() {
          DiceGameProxy.on(DiceGameEvent.UPDATE_HISTORY, this.updateItems, this);
          this.updateItems();
        };
        _proto.onEnable = function onEnable() {};
        _proto.updateItems = function updateItems() {
          var _this2 = this;
          if (this._curpage) {
            this.node_layer1.active = true;
            this.node_layer2.active = false;
            this.drawCountLine();
            this.drawColorLine();
            this.scheduleOnce(function () {
              var content = _this2.node_path1.getComponent(ContentEx);
              if (content) {
                content.reload();
                content.organize();
              }
            });
          } else {
            this.node_layer1.active = false;
            this.node_layer2.active = true;
            this.draw100Line();
            this.draw100Item();
            this.scheduleOnce(function () {
              var content = _this2.node_path3.getComponent(ContentEx);
              if (content) {
                content.reload();
                content.organize();
              }
              content = _this2.node_path4.getComponent(ContentEx);
              if (content) {
                content.reload();
                content.organize();
              }
            });
          }
        };
        _proto.onClickNext = function onClickNext() {
          this._curpage = !this._curpage;
          this.updateItems();
        };
        _proto.drawCountLine = function drawCountLine() {
          var _this3 = this;
          this.node_path1.removeAllChildren();
          var width = 1074 / 20;
          var height = 162.5 / 5;
          var history = DiceGameProxy.history;
          var createLine = function createLine(index, h1, h2) {
            var line1 = instantiate(_this3.colorLine);
            _this3.node_path1.addChild(line1);
            line1.active = true;
            var distance = Math.sqrt(width * width + Math.abs((h1 - h2) * (h1 - h2)));
            line1.getComponent(UITransform).width = distance;
            line1.setPosition(index * width, h1);
            var angle = _this3.getAngle(v2(width * index, h1), v2(width * (index + 1), h2));
            line1.angle = -angle;
            line1.getComponent(Sprite).spriteFrame = _this3.itemLines[3];
            return line1;
          };
          if (history) {
            var length = history.length;
            if (length > 21) {
              length = 21;
            }
            var index = 0;
            for (var i = length - 1; i >= 0; i--) {
              var data = history[i];
              var nextData = history[i - 1];
              if (data && nextData) {
                var count1 = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
                var count2 = parseInt(nextData[0]) + parseInt(nextData[1]) + parseInt(nextData[2]);
                var h1 = height * count1 / 3 - height;
                var h2 = height * count2 / 3 - height;
                var line1 = createLine(index, h1, h2);
              }
              index++;
            }
            index = 0;
            for (var _i = length - 1; _i >= 0; _i--) {
              var _data = history[_i];
              if (_data) {
                var count = parseInt(_data[0]) + parseInt(_data[1]) + parseInt(_data[2]);
                var isB = false;
                if (parseInt(_data[0]) == parseInt(_data[1]) && parseInt(_data[0]) == parseInt(_data[2])) {
                  isB = true;
                }
                var frameIndex = 0;
                if (isB) {
                  frameIndex = 2;
                } else if (count > 10) {
                  frameIndex = 1;
                }
                var node = instantiate(this.labelItem);
                node.active = true;
                this.node_path1.addChild(node);
                node.setPosition(width * index, height * count / 3 - height);
                node.getComponent(Sprite).spriteFrame = this.labelFrames[frameIndex];
                node.getChildByName("number").getComponent(Label).string = "" + count;
                if (_i == 0) {
                  this.txt_new.string = i18n.lang.dice.result[frameIndex] + " (" + _data[0] + "/" + _data[1] + "/" + _data[2] + ")";
                }
              }
              index++;
            }
          }
        };
        _proto.drawColorLine = function drawColorLine() {
          var _this4 = this;
          this.node_path2.removeAllChildren();
          var width = 1074 / 20;
          var height = 162.5 / 5;
          var history = DiceGameProxy.history;
          var createLine = function createLine(index, curNum, nextNum, id) {
            var line1 = instantiate(_this4.colorLine);
            _this4.node_path2.addChild(line1);
            line1.active = true;
            var distance = Math.sqrt(width * width + Math.abs(curNum - nextNum) * height * (Math.abs(curNum - nextNum) * height));
            line1.getComponent(UITransform).width = distance;
            line1.setPosition(index * width, curNum * height);
            var angle = _this4.getAngle(v2(width * index, height * curNum), v2(width * (index + 1), height * nextNum));
            line1.angle = -angle;
            line1.getComponent(Sprite).spriteFrame = _this4.itemLines[id];
            return line1;
          };
          var createDice = function createDice(index, curNum, id) {
            var dice = instantiate(_this4.colorItem);
            dice.active = true;
            _this4.node_path2.addChild(dice);
            dice.setPosition(index * width, curNum * height);
            dice.getComponent(Sprite).spriteFrame = _this4.itemFrames[id];
          };
          if (history) {
            var length = history.length;
            if (length > 21) {
              length = 21;
            }
            var index = 0;
            for (var i = length - 1; i >= 0; i--) {
              var data = history[i];
              var nextData = history[i - 1];
              if (data && nextData) {
                var line1 = createLine(index, parseInt(data[0]) - 1, parseInt(nextData[0]) - 1, 0);
                var line2 = createLine(index, parseInt(data[1]) - 1, parseInt(nextData[1]) - 1, 1);
                var line3 = createLine(index, parseInt(data[2]) - 1, parseInt(nextData[2]) - 1, 2);
              }
              index++;
            }
            index = 0;
            for (var _i2 = length - 1; _i2 >= 0; _i2--) {
              var _data2 = history[_i2];
              if (_data2) {
                var dice1 = createDice(index, parseInt(_data2[0]) - 1, 0);
                var dice2 = createDice(index, parseInt(_data2[1]) - 1, 1);
                var dice3 = createDice(index, parseInt(_data2[2]) - 1, 2);
              }
              index++;
            }
          }
        };
        _proto.draw100Line = function draw100Line() {
          var startX = 440;
          var startY = 74;
          var itemWidth = 47.3;
          var itemHeight = 38;
          this.node_path3.removeAllChildren();
          var history = DiceGameProxy.history;
          if (history) {
            var length = history.length;
            if (length > 100) {
              length = 100;
            }
            var countArr = [0, 0, 0];
            for (var i = 0; i < length; i++) {
              var data = history[i];
              if (data) {
                var count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
                var isB = false;
                if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
                  isB = true;
                }
                var frameIndex = 0;
                if (isB) {
                  frameIndex = 2;
                } else if (count > 10) {
                  frameIndex = 1;
                }
                countArr[frameIndex]++;
                var node = instantiate(this.labelItem);
                node.active = true;
                this.node_path3.addChild(node);
                var index = Math.floor(i / 5);
                var x = startX - index * itemWidth;
                var y = startY - i % 5 * itemHeight;
                if (index % 2 == 1) {
                  y = startY + (i % 5 - 4) * itemHeight;
                }
                node.setPosition(x, y);
                node.getComponent(Sprite).spriteFrame = this.labelFrames[frameIndex];
                node.getChildByName("number").getComponent(Label).string = "" + count;
              }
            }
            for (var _i3 = 0; _i3 < 3; _i3++) {
              var str = i18n.lang.dice.result[_i3] + ":" + countArr[_i3];
              this.txt_layer1[_i3].string = str;
            }
          }
        };
        _proto.draw100Item = function draw100Item() {
          var startX = -474;
          var startY = 64;
          var itemWidth = 50;
          var itemHeight = 32;
          this.node_path4.removeAllChildren();
          var history = DiceGameProxy.history;
          var mapInfo = [];
          if (history) {
            var length = history.length;
            var data = history[0];
            var count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
            var isB = false;
            if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
              isB = true;
            }
            var frameIndex = 0;
            if (isB) {
              frameIndex = 2;
            } else if (count > 10) {
              frameIndex = 1;
            }
            var startIndex = frameIndex;
            var startMap = [];
            startMap.push(data);
            for (var i = 1; i < length; i++) {
              var _data3 = history[i];
              if (_data3) {
                var _count = parseInt(_data3[0]) + parseInt(_data3[1]) + parseInt(_data3[2]);
                var _isB = false;
                if (parseInt(_data3[0]) == parseInt(_data3[1]) && parseInt(_data3[0]) == parseInt(_data3[2])) {
                  _isB = true;
                }
                var _frameIndex = 0;
                if (_isB) {
                  _frameIndex = 2;
                } else if (_count > 10) {
                  _frameIndex = 1;
                }
                if (_frameIndex != startIndex) {
                  mapInfo.push(startMap);
                  startIndex = _frameIndex;
                  startMap = [];
                }
                startMap.push(_data3);
                if (mapInfo.length >= 19) {
                  break;
                }
              }
            }
            mapInfo.push(startMap);
          }
          var allCount = 0;
          var result = [];
          for (var _i4 = 0; _i4 < mapInfo.length; _i4++) {
            var _count2 = Math.floor((mapInfo[_i4].length - 1) / 5) + 1;
            allCount += _count2;
            if (allCount < 20) {
              result.push(mapInfo[_i4]);
            } else {
              var left = allCount - 20;
              if (left > 0) {
                var start = mapInfo[_i4].length - (_count2 - left) * 5;
                if (start < 0) {
                  start = 0;
                }
                var t = mapInfo[_i4].slice(start, mapInfo[_i4].length);
                result.push(t);
              } else {
                result.push(mapInfo[_i4]);
              }
              break;
            }
          }
          var itemIndex = 0;
          var countArr = [0, 0, 0];
          for (var j = result.length - 1; j >= 0; j--) {
            var item = result[j];
            for (var _i5 = 0; _i5 < item.length; _i5++) {
              var _data4 = item[item.length - 1 - _i5];
              var _count3 = parseInt(_data4[0]) + parseInt(_data4[1]) + parseInt(_data4[2]);
              var _isB2 = false;
              if (parseInt(_data4[0]) == parseInt(_data4[1]) && parseInt(_data4[0]) == parseInt(_data4[2])) {
                _isB2 = true;
              }
              var _frameIndex2 = 0;
              if (_isB2) {
                _frameIndex2 = 2;
              } else if (_count3 > 10) {
                _frameIndex2 = 1;
              }
              countArr[_frameIndex2]++;
              var node = instantiate(this.labelItem);
              node.active = true;
              this.node_path4.addChild(node);
              var index = Math.floor(_i5 / 5);
              var x = startX + (index + itemIndex) * itemWidth;
              var y = startY - _i5 % 5 * itemHeight;
              node.setPosition(x, y);
              node.getComponent(Sprite).spriteFrame = this.labelFrames[_frameIndex2];
              node.getChildByName("number").getComponent(Label).string = "" + _count3;
              if (_i5 == item.length - 1) {
                itemIndex += index + 1;
              }
            }
          }
          for (var _i6 = 0; _i6 < 3; _i6++) {
            var str = i18n.lang.dice.result[_i6] + ":" + countArr[_i6];
            this.txt_layer2[_i6].string = str;
          }
        };
        _proto.getAngle = function getAngle(start, end) {
          //        //计算出朝向
          var dx = end.x - start.x;
          var dy = end.y - start.y;
          var dir = v2(dx, dy);

          //        //根据朝向计算出夹角弧度
          var angle = dir.signAngle(v2(1, 0));

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return degree;
        };
        _proto.onDisable = function onDisable() {};
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return DiceGameHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "colorLine", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemLines", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labelFrames", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_path1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_path2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_path3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_path4", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_new", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_layer1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_layer2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txt_layer1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "txt_layer2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../../i18n/I18n";
      // import ProxyMgr from "../../../script/core/ProxyMgr";
      // import ContentEx from "../../../script/tools/ContentEx";
      // import DiceGameProxy, { DiceGameEvent } from "./DiceProxy";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // const MD5_HIS_COUNT = 18;
      //
      // @ccclass
      // @menu("game/dicegame/DiceGameHistory")
      // export default class DiceGameHistory extends cc.Component {
      //     @property(cc.Node)
      //     labelItem: cc.Node = null;
      //     @property(cc.Node)
      //     colorItem: cc.Node = null;
      //
      //     @property(cc.Node)
      //     colorLine: cc.Node = null;
      //
      //     @property(cc.SpriteFrame)
      //     itemFrames: cc.SpriteFrame[] = [];
      //
      //     @property(cc.SpriteFrame)
      //     itemLines: cc.SpriteFrame[] = [];
      //
      //     @property(cc.SpriteFrame)
      //     labelFrames: cc.SpriteFrame[] = [];
      //
      //     @property(cc.Node)
      //     node_path1: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_path2: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_path3: cc.Node = null;
      //     @property(cc.Node)
      //     node_path4: cc.Node = null;
      //
      //     @property(cc.Label)
      //     txt_new: cc.Label = null;
      //
      //     @property(cc.Node)
      //     node_layer1: cc.Node = null;
      //     @property(cc.Node)
      //     node_layer2: cc.Node = null;
      //
      //     @property(cc.Label)
      //     txt_layer1: cc.Label[] = [];
      //
      //     @property(cc.Label)
      //     txt_layer2: cc.Label[] = [];
      //
      //     _curpage = true;
      //
      //     onLoad(): void {
      //         DiceGameProxy.on(DiceGameEvent.UPDATE_HISTORY, this.updateItems, this);
      //         this.updateItems();
      //     }
      //
      //     protected onEnable(): void {}
      //
      //     updateItems() {
      //         if (this._curpage) {
      //             this.node_layer1.active = true;
      //             this.node_layer2.active = false;
      //             this.drawCountLine();
      //             this.drawColorLine();
      //
      //             this.scheduleOnce(() => {
      //                 let content = this.node_path1.getComponent(ContentEx);
      //                 if (content) {
      //                     content.reload();
      //                     content.organize();
      //                 }
      //             });
      //         } else {
      //             this.node_layer1.active = false;
      //             this.node_layer2.active = true;
      //             this.draw100Line();
      //             this.draw100Item();
      //
      //             this.scheduleOnce(() => {
      //                 let content = this.node_path3.getComponent(ContentEx);
      //                 if (content) {
      //                     content.reload();
      //                     content.organize();
      //                 }
      //
      //                 content = this.node_path4.getComponent(ContentEx);
      //                 if (content) {
      //                     content.reload();
      //                     content.organize();
      //                 }
      //             });
      //         }
      //     }
      //
      //     onClickNext() {
      //         this._curpage = !this._curpage;
      //         this.updateItems();
      //     }
      //
      //     drawCountLine() {
      //         this.node_path1.removeAllChildren();
      //         let width = 1074 / 20;
      //         let height = 162.5 / 5;
      //         let history = DiceGameProxy.history;
      //
      //         let createLine = (index, h1, h2) => {
      //             let line1 = cc.instantiate(this.colorLine);
      //             this.node_path1.addChild(line1);
      //             line1.active = true;
      //             let distance = Math.sqrt(width * width + Math.abs((h1 - h2) * (h1 - h2)));
      //             line1.width = distance;
      //             line1.x = index * width;
      //             line1.y = h1;
      //             let angle = this.getAngle(cc.v2(width * index, h1), cc.v2(width * (index + 1), h2));
      //             line1.angle = -angle;
      //             line1.getComponent(cc.Sprite).spriteFrame = this.itemLines[3];
      //             return line1;
      //         };
      //         if (history) {
      //             let length = history.length;
      //             if (length > 21) {
      //                 length = 21;
      //             }
      //             let index = 0;
      //             for (let i = length - 1; i >= 0; i--) {
      //                 let data = history[i];
      //                 let nextData = history[i - 1];
      //                 if (data && nextData) {
      //                     let count1 = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                     let count2 = parseInt(nextData[0]) + parseInt(nextData[1]) + parseInt(nextData[2]);
      //                     let h1 = (height * count1) / 3 - height;
      //                     let h2 = (height * count2) / 3 - height;
      //                     let line1 = createLine(index, h1, h2);
      //                 }
      //                 index++;
      //             }
      //
      //             index = 0;
      //
      //             for (let i = length - 1; i >= 0; i--) {
      //                 let data = history[i];
      //                 if (data) {
      //                     let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                     let isB = false;
      //                     if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                         isB = true;
      //                     }
      //
      //                     let frameIndex = 0;
      //                     if (isB) {
      //                         frameIndex = 2;
      //                     } else if (count > 10) {
      //                         frameIndex = 1;
      //                     }
      //
      //                     let node = cc.instantiate(this.labelItem);
      //                     node.active = true;
      //                     this.node_path1.addChild(node);
      //                     node.x = width * index;
      //                     node.y = (height * count) / 3 - height;
      //
      //                     node.getComponent(cc.Sprite).spriteFrame = this.labelFrames[frameIndex];
      //                     node.getChildByName("number").getComponent(cc.Label).string = "" + count;
      //
      //                     if (i == 0) {
      //                         this.txt_new.string = `${i18n.lang.dice.result[frameIndex]} (${data[0]}/${data[1]}/${data[2]})`;
      //                     }
      //                 }
      //                 index++;
      //             }
      //         }
      //     }
      //
      //     drawColorLine() {
      //         this.node_path2.removeAllChildren();
      //         let width = 1074 / 20;
      //         let height = 162.5 / 5;
      //
      //         let history = DiceGameProxy.history;
      //
      //         let createLine = (index, curNum, nextNum, id) => {
      //             let line1 = cc.instantiate(this.colorLine);
      //             this.node_path2.addChild(line1);
      //             line1.active = true;
      //             let distance = Math.sqrt(width * width + Math.abs(curNum - nextNum) * height * (Math.abs(curNum - nextNum) * height));
      //             line1.width = distance;
      //             line1.x = index * width;
      //             line1.y = curNum * height;
      //             let angle = this.getAngle(cc.v2(width * index, height * curNum), cc.v2(width * (index + 1), height * nextNum));
      //             line1.angle = -angle;
      //             line1.getComponent(cc.Sprite).spriteFrame = this.itemLines[id];
      //             return line1;
      //         };
      //
      //         let createDice = (index, curNum, id) => {
      //             let dice = cc.instantiate(this.colorItem);
      //             dice.active = true;
      //             this.node_path2.addChild(dice);
      //             dice.x = index * width;
      //             dice.y = curNum * height;
      //             dice.getComponent(cc.Sprite).spriteFrame = this.itemFrames[id];
      //         };
      //         if (history) {
      //             let length = history.length;
      //             if (length > 21) {
      //                 length = 21;
      //             }
      //             let index = 0;
      //             for (let i = length - 1; i >= 0; i--) {
      //                 let data = history[i];
      //                 let nextData = history[i - 1];
      //                 if (data && nextData) {
      //                     let line1 = createLine(index, parseInt(data[0]) - 1, parseInt(nextData[0]) - 1, 0);
      //                     let line2 = createLine(index, parseInt(data[1]) - 1, parseInt(nextData[1]) - 1, 1);
      //                     let line3 = createLine(index, parseInt(data[2]) - 1, parseInt(nextData[2]) - 1, 2);
      //                 }
      //                 index++;
      //             }
      //
      //             index = 0;
      //             for (let i = length - 1; i >= 0; i--) {
      //                 let data = history[i];
      //                 if (data) {
      //                     let dice1 = createDice(index, parseInt(data[0]) - 1, 0);
      //                     let dice2 = createDice(index, parseInt(data[1]) - 1, 1);
      //                     let dice3 = createDice(index, parseInt(data[2]) - 1, 2);
      //                 }
      //                 index++;
      //             }
      //         }
      //     }
      //
      //     draw100Line() {
      //         let startX = 440;
      //         let startY = 74;
      //         let itemWidth = 47.3;
      //         let itemHeight = 38;
      //         this.node_path3.removeAllChildren();
      //         let history = DiceGameProxy.history;
      //         if (history) {
      //             let length = history.length;
      //             if (length > 100) {
      //                 length = 100;
      //             }
      //             let countArr = [0, 0, 0];
      //             for (let i = 0; i < length; i++) {
      //                 let data = history[i];
      //                 if (data) {
      //                     let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                     let isB = false;
      //                     if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                         isB = true;
      //                     }
      //
      //                     let frameIndex = 0;
      //                     if (isB) {
      //                         frameIndex = 2;
      //                     } else if (count > 10) {
      //                         frameIndex = 1;
      //                     }
      //                     countArr[frameIndex]++;
      //
      //                     let node = cc.instantiate(this.labelItem);
      //                     node.active = true;
      //                     this.node_path3.addChild(node);
      //
      //                     let index = Math.floor(i / 5);
      //                     let x = startX - index * itemWidth;
      //                     node.x = x;
      //                     let y = startY - (i % 5) * itemHeight;
      //                     if (index % 2 == 1) {
      //                         y = startY + ((i % 5) - 4) * itemHeight;
      //                     }
      //                     node.y = y;
      //                     node.getComponent(cc.Sprite).spriteFrame = this.labelFrames[frameIndex];
      //                     node.getChildByName("number").getComponent(cc.Label).string = "" + count;
      //                 }
      //             }
      //
      //             for (let i = 0; i < 3; i++) {
      //                 let str = `${i18n.lang.dice.result[i]}:${countArr[i]}`;
      //                 this.txt_layer1[i].string = str;
      //             }
      //         }
      //     }
      //
      //     draw100Item() {
      //         let startX = -474;
      //         let startY = 64;
      //         let itemWidth = 50;
      //         let itemHeight = 32;
      //         this.node_path4.removeAllChildren();
      //         let history = DiceGameProxy.history;
      //         let mapInfo = [];
      //
      //         if (history) {
      //             let length = history.length;
      //             let data = history[0];
      //             let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //             let isB = false;
      //             if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                 isB = true;
      //             }
      //             let frameIndex = 0;
      //             if (isB) {
      //                 frameIndex = 2;
      //             } else if (count > 10) {
      //                 frameIndex = 1;
      //             }
      //
      //             let startIndex = frameIndex;
      //             let startMap = [];
      //             startMap.push(data);
      //             for (let i = 1; i < length; i++) {
      //                 let data = history[i];
      //                 if (data) {
      //                     let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                     let isB = false;
      //                     if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                         isB = true;
      //                     }
      //                     let frameIndex = 0;
      //                     if (isB) {
      //                         frameIndex = 2;
      //                     } else if (count > 10) {
      //                         frameIndex = 1;
      //                     }
      //                     if (frameIndex != startIndex) {
      //                         mapInfo.push(startMap);
      //                         startIndex = frameIndex;
      //                         startMap = [];
      //                     }
      //                     startMap.push(data);
      //                     if (mapInfo.length >= 19) {
      //                         break;
      //                     }
      //                 }
      //             }
      //             mapInfo.push(startMap);
      //         }
      //
      //         let allCount = 0;
      //
      //         let result = [];
      //         for (let i = 0; i < mapInfo.length; i++) {
      //             let count = Math.floor((mapInfo[i].length - 1) / 5) + 1;
      //             allCount += count;
      //             if (allCount < 20) {
      //                 result.push(mapInfo[i]);
      //             } else {
      //                 let left = allCount - 20;
      //                 if (left > 0) {
      //                     let start = mapInfo[i].length - (count - left) * 5;
      //                     if (start < 0) {
      //                         start = 0;
      //                     }
      //                     let t = mapInfo[i].slice(start, mapInfo[i].length);
      //                     result.push(t);
      //                 } else {
      //                     result.push(mapInfo[i]);
      //                 }
      //
      //                 break;
      //             }
      //         }
      //
      //         let itemIndex = 0;
      //         let countArr = [0, 0, 0];
      //         for (let j = result.length - 1; j >= 0; j--) {
      //             let item = result[j];
      //             for (let i = 0; i < item.length; i++) {
      //                 let data = item[item.length - 1 - i];
      //                 let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                 let isB = false;
      //                 if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                     isB = true;
      //                 }
      //
      //                 let frameIndex = 0;
      //                 if (isB) {
      //                     frameIndex = 2;
      //                 } else if (count > 10) {
      //                     frameIndex = 1;
      //                 }
      //                 countArr[frameIndex]++;
      //
      //                 let node = cc.instantiate(this.labelItem);
      //                 node.active = true;
      //                 this.node_path4.addChild(node);
      //
      //                 let index = Math.floor(i / 5);
      //                 let x = startX + (index + itemIndex) * itemWidth;
      //                 node.x = x;
      //                 let y = startY - (i % 5) * itemHeight;
      //
      //                 node.y = y;
      //                 node.getComponent(cc.Sprite).spriteFrame = this.labelFrames[frameIndex];
      //                 node.getChildByName("number").getComponent(cc.Label).string = "" + count;
      //
      //                 if (i == item.length - 1) {
      //                     itemIndex += index + 1;
      //                 }
      //             }
      //         }
      //         for (let i = 0; i < 3; i++) {
      //             let str = `${i18n.lang.dice.result[i]}:${countArr[i]}`;
      //             this.txt_layer2[i].string = str;
      //         }
      //     }
      //
      //     getAngle(start, end) {
      //         //计算出朝向
      //         let dx = end.x - start.x;
      //         let dy = end.y - start.y;
      //         var dir = cc.v2(dx, dy);
      //
      //         //根据朝向计算出夹角弧度
      //         var angle = dir.signAngle(cc.v2(1, 0));
      //
      //         //将弧度转换为欧拉角
      //         var degree = (angle / Math.PI) * 180;
      //
      //         return degree;
      //     }
      //
      //     onDisable() {}
      //     protected onDestroy(): void {
      //         ProxyMgr.close(this);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceGamePath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './DiceProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Sprite, Label, v3, Tween, tween, Component, i18n, ProxyMgr, DiceGameProxy, DiceGameEvent;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      v3 = module.v3;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
      DiceGameEvent = module.DiceGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4fe70gsd2pN/YLdHWykLS9Z", "DiceGamePath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DicePath = exports('default', (_dec = ccclass("DiceGamePath"), _dec2 = menu("game/dicegame/DicePath"), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(SpriteFrame), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DicePath, _Component);
        function DicePath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "items", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dices", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "diceFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_result", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DicePath.prototype;
        _proto.onLoad = function onLoad() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.items), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.node.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.dices), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            _i.node.active = false;
          }
          DiceGameProxy.on(DiceGameEvent.UPDATE_HISTORY, this.updateItems, this);
        };
        _proto.updateItems = function updateItems() {
          var history = DiceGameProxy.history;
          if (history) {
            var length = history.length;
            if (length > 15) {
              length = 15;
            }
            var index = 0;
            for (var i = length - 1; i >= 0; i--) {
              var data = history[i];
              if (data) {
                this.items[index].node.active = true;
                this.items[index].node.scale = v3(1, 1, 1);
                Tween.stopAllByTarget(this.items[index].node);
                var count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
                var isB = false;
                if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
                  isB = true;
                }
                var frameIndex = 0;
                if (isB) {
                  frameIndex = 2;
                } else if (count > 10) {
                  frameIndex = 1;
                }
                this.items[index].spriteFrame = this.itemFrames[frameIndex];
                if (i == 0) {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(this.dices), _step3; !(_step3 = _iterator3()).done;) {
                    var _i2 = _step3.value;
                    _i2.node.active = true;
                    _i2.node.scale = v3(0, 0);
                    tween(_i2.node).to(0.5, {
                      scale: v3(1, 1, 1)
                    }).start();
                  }
                  this.txt_result.string = count + "/" + i18n.lang.dice.result[frameIndex];
                  this.dices[0].spriteFrame = this.diceFrames[parseInt(data[0]) - 1];
                  this.dices[1].spriteFrame = this.diceFrames[parseInt(data[1]) - 1];
                  this.dices[2].spriteFrame = this.diceFrames[parseInt(data[2]) - 1];
                  tween(this.items[index].node).repeatForever(tween().to(0.3, {
                    scale: v3(0.6, 0.6, 1)
                  }).to(0.3, {
                    scale: v3(1.1, 1.1, 1)
                  })).start();
                }
              }
              index++;
            }
          }
        };
        _proto.updateResult = function updateResult(result) {};
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return DicePath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemFrames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dices", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "diceFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_result", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import i18n from "../../../i18n/I18n";
      // import ProxyMgr from "../../../script/core/ProxyMgr";
      // import DiceGameProxy, { DiceGameEvent } from "./DiceProxy";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/dicegame/DicePath")
      // export default class DicePath extends cc.Component {
      //     @property(cc.SpriteFrame)
      //     itemFrames: cc.SpriteFrame[] = [];
      //
      //     @property(cc.Sprite)
      //     items: cc.Sprite[] = [];
      //
      //     @property(cc.Sprite)
      //     dices: cc.Sprite[] = [];
      //
      //     @property(cc.SpriteFrame)
      //     diceFrames: cc.SpriteFrame[] = [];
      //
      //     @property(cc.Label)
      //     txt_result: cc.Label = null;
      //
      //     protected onLoad(): void {
      //         for (let i of this.items) {
      //             i.node.active = false;
      //         }
      //
      //         for (let i of this.dices) {
      //             i.node.active = false;
      //         }
      //
      //         DiceGameProxy.on(DiceGameEvent.UPDATE_HISTORY, this.updateItems, this);
      //     }
      //
      //     updateItems() {
      //         let history = DiceGameProxy.history;
      //         if (history) {
      //             let length = history.length;
      //             if (length > 15) {
      //                 length = 15;
      //             }
      //             let index = 0;
      //             for (let i = length - 1; i >= 0; i--) {
      //                 let data = history[i];
      //                 if (data) {
      //                     this.items[index].node.active = true;
      //                     this.items[index].node.scale = 1;
      //                     this.items[index].node.stopAllActions();
      //
      //                     let count = parseInt(data[0]) + parseInt(data[1]) + parseInt(data[2]);
      //                     let isB = false;
      //                     if (parseInt(data[0]) == parseInt(data[1]) && parseInt(data[0]) == parseInt(data[2])) {
      //                         isB = true;
      //                     }
      //
      //                     let frameIndex = 0;
      //                     if (isB) {
      //                         frameIndex = 2;
      //                     } else if (count > 10) {
      //                         frameIndex = 1;
      //                     }
      //                     this.items[index].spriteFrame = this.itemFrames[frameIndex];
      //
      //                     if (i == 0) {
      //                         for (let i of this.dices) {
      //                             i.node.active = true;
      //                             i.node.scale = 0;
      //                             cc.tween(i.node).to(0.5, { scale: 1 }).start();
      //                         }
      //                         this.txt_result.string = `${count}/${i18n.lang.dice.result[frameIndex]}`;
      //                         this.dices[0].spriteFrame = this.diceFrames[parseInt(data[0]) - 1];
      //                         this.dices[1].spriteFrame = this.diceFrames[parseInt(data[1]) - 1];
      //                         this.dices[2].spriteFrame = this.diceFrames[parseInt(data[2]) - 1];
      //                         cc.tween(this.items[index].node)
      //                             .repeatForever(cc.tween().to(0.3, { scale: 0.6 }).to(0.3, { scale: 1.1 }))
      //                             .start();
      //                     }
      //                 }
      //                 index++;
      //             }
      //         }
      //     }
      //
      //     updateResult(result) {}
      //
      //     protected onDestroy(): void {
      //         ProxyMgr.close(this);
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceGamePlayers.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './Common.ts', './DiceProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, find, Label, Button, v2, Tween, Component, tween, v3, DataManager, UserKey, Common, DiceGameProxy;
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
      instantiate = module.instantiate;
      find = module.find;
      Label = module.Label;
      Button = module.Button;
      v2 = module.v2;
      Tween = module.Tween;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DiceGameProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "01bb4kMGklDvpoUx+uTXOwN", "DiceGamePlayers", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DiceGamePlayers = exports('default', (_dec = ccclass("DiceGamePlayers"), _dec2 = menu("game/dicegame/DiceGamePlayers"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGamePlayers, _Component);
        function DiceGamePlayers() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "players", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPublic", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_seat", _descriptor3, _assertThisInitialized(_this));
          _this.otherUserCount = 6;
          _this._initPlayer = false;
          _this._isHundred = false;
          _this.playersPos = [];
          return _this;
        }
        var _proto = DiceGamePlayers.prototype;
        //    ///////////////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.init = function init() {
          this.playerPublic.active = false;
          this.playersPos = [];
          for (var i = 0; i < this.players.length; i++) {
            var player = this.players[i];
            player.active = true;
            player.getChildByName("unseat").active = true;
            var seat_bg = instantiate(this.Prefab_seat);
            seat_bg.active = false;
            find("rank_bg/number", seat_bg).getComponent(Label).string = (i + 1).toString();
            var clickEvent = seat_bg.getComponent(Button).clickEvents[0];
            clickEvent.customEventData = (i + 1).toString();
            player.addChild(seat_bg);
            this.playersPos.push(v2(player.getPosition().x, player.getPosition().y));
          }
        };
        _proto.showPlayerCount = function showPlayerCount() {
          if (this._initPlayer) {
            return;
          }
          this._initPlayer = true;
          this.playerPublic.active = true;
          var deskPlayer = this.getDeskPlayerByPlayerList(DiceGameProxy.playerList);
          this.updateTablePlayer(deskPlayer);
        };
        _proto.showPlayers = function showPlayers() {
          var _this2 = this;
          var deskPlayer = this.getDeskPlayerByPlayerList(DiceGameProxy.playerList);
          var posArr = [];
          for (var i = 0; i < this.otherUserCount; i++) {
            Tween.stopAllByTarget(this.players[i]);
            var pos = {
              x: this.playersPos[i].x,
              y: this.playersPos[i].y
            };
            posArr.push(pos);
          }
          var _loop = function _loop() {
            var lastindex = _this2.getLastIndexById(deskPlayer[i].userId);
            var poscur = posArr[i];
            var curplayer = _this2.players[i];
            var startpos;
            if (lastindex == -1) {
              startpos = {
                x: _this2.playerPublic.getPosition().x,
                y: _this2.playerPublic.getPosition().y
              };
              curplayer.setPosition(startpos.x, startpos.y);
            } else {
              startpos = {
                x: _this2.players[lastindex].getPosition().x,
                y: _this2.players[lastindex].getPosition().y
              };
              curplayer.setPosition(startpos.x, startpos.y);
            }
            tween(curplayer).to(0.1, {
              position: v3(poscur.x, poscur.y)
            }).call(function () {
              curplayer.setPosition(poscur.x, poscur.y);
            }).start();
          };
          for (var i = 0; i < deskPlayer.length; i++) {
            _loop();
          }
          this.updateTablePlayer(deskPlayer);
        };
        _proto.getDeskPlayerByPlayerList = function getDeskPlayerByPlayerList(data) {
          var redata = [];
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].userId != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == this.otherUserCount) {
              break;
            }
          }
          return redata;
        };
        _proto.getLastIndexById = function getLastIndexById(id) {
          var index = -1;
          for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].name == id) {
              index = i;
              break;
            }
          }
          return index;
        };
        _proto.updateTablePlayer = function updateTablePlayer(data) {
          var redata;
          redata = data || [];
          for (var i = 0; i < this.otherUserCount; i++) {
            var player = this.players[i];
            player.active = true;
            player.getChildByName("unseat").active = true;
            player.getChildByName("seat_bg").active = false;
          }
          for (var i = 0; i < redata.length; i++) {
            var _player = this.players[i];
            _player.getChildByName("unseat").active = false;
            _player.getChildByName("seat_bg").active = true;
            var seat_bg = _player.getChildByName("seat_bg");
            Common.nickNameFormatL(seat_bg.getChildByName("label_name"), redata[i].nickName);
            seat_bg.getChildByName("label_gold").getComponent(Label).string = Common.ChangeMoneyShow(redata[i].yxb, 2);
            var headNode = find("mask/head", seat_bg);
            Common.getHead(redata[i].avatar, headNode);
            _player.name = redata[i].userId;
          }
        };
        return DiceGamePlayers;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerPublic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Prefab_seat", [_dec5], {
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

System.register("chunks:///_virtual/DiceGameRule.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PlatformMgr.ts', './DiceProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, PlatformMgr, DiceGameProxy, Common;
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
      PlatformMgr = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "796f7hro+pMQbYJivlh8Pfh", "DiceGameRule", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var DiceGameRule = exports('default', (_dec = ccclass("DiceGameRule"), _dec2 = menu("game/dicegame/DiceGameRule"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceGameRule, _Component);
        function DiceGameRule() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_content1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_next", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_parent", _descriptor4, _assertThisInitialized(_this));
          _this.index = 0;
          return _this;
        }
        var _proto = DiceGameRule.prototype;
        _proto.onLoad = function onLoad() {
          this.showContent();
          var ids = [1, 3, 5, 6, 7, 8, 9, 10, 11, 32, 26, 19, 20, 38];
          for (var _i = 0, _ids = ids; _i < _ids.length; _i++) {
            var id = _ids[_i];
            var txt_bet = this.txt_parent.getChildByName("txt_bet" + id).getComponent(Label);
            var txt_rate = this.txt_parent.getChildByName("txt_rate" + id).getComponent(Label);
            var txt_left = this.txt_parent.getChildByName("txt_rateLeft" + id);
            if (DiceGameProxy.oddList[id]) {
              txt_bet.string = Common.ChangeMoneyShow(DiceGameProxy.oddList[id].maxIssueBet, 2);
              txt_rate.string = DiceGameProxy.oddList[id].odds / 100 + "";
              if (txt_left) {
                txt_left.getComponent(Label).string = DiceGameProxy.oddList[id].odds / 100 + "";
                if (id == 32) {
                  this.txt_parent.getChildByName("txt_rateLeft" + id + "_2").getComponent(Label).string = DiceGameProxy.oddList[id].odds / 100 + 1 + "";
                  this.txt_parent.getChildByName("txt_rateLeft" + id + "_3").getComponent(Label).string = DiceGameProxy.oddList[id].odds / 100 + 2 + "";
                }
              }
            }
          }
        };
        _proto.onClickUrl = function onClickUrl() {
          PlatformMgr.p.openUrl("https://md5.services/");
        };
        _proto.onClickNext = function onClickNext() {
          this.index += 1;
          if (this.index > 1) {
            this.index = 0;
          }
          this.showContent();
        };
        _proto.showType = function showType(index) {
          if (index === void 0) {
            index = 0;
          }
          this.index = index;
          this.showContent();
          if (index == 0) this.node_next.active = false;
        };
        _proto.showContent = function showContent() {
          this.node_content1.active = this.index == 0;
          this.node_content2.active = this.index != 0;
        };
        return DiceGameRule;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_content1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_parent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // import PlatformMgr from "../../../script/platform/PlatformMgr";
      // import DiceGameProxy from "./DiceProxy";
      // import { Common } from "../../../script/tools/Common";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/dicegame/DiceGameRule")
      // export default class DiceGameRule extends cc.Component {
      //     @property(cc.Node)
      //     node_content1: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_content2: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_next: cc.Node = null;
      //
      //     @property(cc.Node)
      //     txt_parent: cc.Node = null;
      //
      //     index = 0;
      //
      //     onLoad() {
      //         this.showContent();
      //
      //         let ids = [1, 3, 5, 6, 7, 8, 9, 10, 11, 32, 26, 19, 20, 38];
      //         for (let id of ids) {
      //             let txt_bet = this.txt_parent.getChildByName(`txt_bet${id}`).getComponent(cc.Label);
      //             let txt_rate = this.txt_parent.getChildByName(`txt_rate${id}`).getComponent(cc.Label);
      //
      //             let txt_left = this.txt_parent.getChildByName(`txt_rateLeft${id}`);
      //             if (DiceGameProxy.oddList[id]) {
      //                 txt_bet.string = Common.ChangeMoneyShow(DiceGameProxy.oddList[id].maxIssueBet, 2);
      //                 txt_rate.string = DiceGameProxy.oddList[id].odds / 100 + "";
      //
      //                 if (txt_left) {
      //                     txt_left.getComponent(cc.Label).string = DiceGameProxy.oddList[id].odds / 100 + "";
      //
      //                     if (id == 32) {
      //                         this.txt_parent.getChildByName(`txt_rateLeft${id}_2`).getComponent(cc.Label).string = DiceGameProxy.oddList[id].odds / 100 + 1 + "";
      //                         this.txt_parent.getChildByName(`txt_rateLeft${id}_3`).getComponent(cc.Label).string = DiceGameProxy.oddList[id].odds / 100 + 2 + "";
      //                     }
      //                 }
      //             }
      //         }
      //     }
      //
      //     onClickUrl() {
      //         PlatformMgr.p.openUrl("https://md5.services/");
      //     }
      //
      //     onClickNext() {
      //         this.index += 1;
      //         if (this.index > 1) {
      //             this.index = 0;
      //         }
      //         this.showContent();
      //     }
      //
      //     showType(index = 0) {
      //         this.index = index;
      //         this.showContent();
      //         if (index == 0) this.node_next.active = false;
      //     }
      //
      //     showContent() {
      //         this.node_content1.active = this.index == 0;
      //         this.node_content2.active = this.index != 0;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceHall.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b0664xt3TZMfKNl6Vu3+NcO", "DiceHall", undefined); // // import i18n from "../../../i18n/I18n";
      // // import AudioManager from "../../../script/manager/AudioManager";
      // // import ConfigManager from "../../../script/manager/ConfigManager";
      // // import DataManager, { UserKey, UserProxyEvent } from "../../../script/manager/DataManager";
      // // import EventManager from "../../../script/manager/EventManager";
      // // import NetManager from "../../../script/manager/NetManager";
      // // import ViewManager from "../../../script/manager/ViewManager";
      // // import { Common } from "../../../script/tools/Common";
      // // import ProxyMgr from "../../../script/core/ProxyMgr";
      // // import GUtil from "../../../script/gts/GUtil";
      // // import SdgameAddRoom from "./DiceGameAddRoom";
      // // import SdGameDeskItem from "./DiceGameDeskItems";
      // // import DiceGameProxy, { DiceGameEvent } from "./DiceProxy";
      // // const FRESH_TIME = 5;
      // // const { ccclass, property, menu } = cc._decorator;
      // // @ccclass
      // // @menu("game/dicegame/SdHall")
      // export default class SdHall extends Component {
      ////     @property(cc.Label)
      ////     userName: cc.Label = null;
      ////     @property(cc.Label)
      ////     userGold: cc.Label = null;
      ////     @property(cc.Sprite)
      ////     head: cc.Sprite = null;
      ////     @property(cc.ScrollView)
      ////     RoomScrollView: cc.ScrollView = null;
      ////     @property(cc.Prefab)
      ////     itemList: cc.Prefab[] = [];
      ////     @property(cc.SpriteFrame)
      ////     itemBg: cc.SpriteFrame[] = [];
      ////     // @property(cc.Prefab)
      ////     // item1: cc.Prefab = null;
      ////     // @property(cc.Prefab)
      ////     // item2: cc.Prefab = null;
      ////     freshTime = 0;
      ////     _index = 0;
      ////     onLoad() {
      ////         NetManager.instance.waitServiceSendData();
      ////         this.initEvent();
      ////         this.initHall();
      ////         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.getInfo, {});
      ////         AudioManager.instance.startBgMusic();
      ////         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
      ////     }
      ////     initHall() {
      ////         this.userGold.string = Common.numFormat(parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD))) + "";
      ////         Common.nickNameFormatL(this.userName, DataManager.instance.instance.getUserDataForKey(UserKey.NICKNAME));
      ////         let headiconName = DataManager.instance.instance.getUserDataForKey(UserKey.AVATAR);
      ////         //头像
      ////         Common.getHead(headiconName, this.head.node);
      ////     }
      ////     updateDesk() {
      ////         let children = this.RoomScrollView.content.children;
      ////         let roomData = DiceGameProxy.tableList;
      ////         let length = roomData.length;
      ////         let index = children.length - length;
      ////         let cumstomCount = length;
      ////         for (let i = 0; i < cumstomCount; i++) {
      ////             let item = children[i];
      ////             if (!item) {
      ////                 item = cc.instantiate(this.itemList[0]);
      ////                 this.RoomScrollView.content.addChild(item);
      ////                 item.x = 0;
      ////             }
      ////             // item.getChildByName("gold_limit").getComponent(cc.Label).string = Common.ChangeMoneyShow(roomData[i].MinEnterTable, 2);
      ////             let sc = item.getComponent(SdGameDeskItem);
      ////             if (sc) {
      ////                 sc.setData(roomData[i]);
      ////                 // sc.setBg(this.itemBg[i]);
      ////             }
      ////         }
      ////         if (index > 0) {
      ////             let len = children.length;
      ////             let left = len - index - 1;
      ////             for (let i = len - 1; i > left; i--) {
      ////                 children[i].removeFromParent();
      ////             }
      ////         }
      ////     }
      ////     initEvent() {
      ////         //监听按钮事件 如：关闭弹窗
      ////         EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
      ////         //传输事件
      ////         EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
      ////         EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
      ////         EventManager.instance.on(ConfigManager.instance.protocolSd.joinRoom, this.joinRoom, this);
      ////         DiceGameProxy.on(DiceGameEvent.UPDATE_TABLE, this.updateDesk, this);
      ////         DataManager.instance.instance.on(
      ////             UserProxyEvent.CHANGE_GOLD,
      ////             () => {
      ////                 //获取钱包//推送钱包
      ////                 this.userGold.string = Common.numFormat(parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD))) + "";
      ////             },
      ////             this
      ////         );
      ////     }
      ////     joinRoom(data) {
      ////         if (data.lock) {
      ////             let bundle = DiceGameProxy.bundle;
      ////             Common.loadPopBuddle(
      ////                 "prefab/SdAddRoom",
      ////                 bundle,
      ////                 () => {},
      ////                 (prefab) => {
      ////                     let node = cc.instantiate(prefab);
      ////                     ViewManager.instance.popNodeView(node, true);
      ////                     node.getComponent(SdgameAddRoom).setData(data);
      ////                 },
      ////                 true
      ////             );
      ////             return;
      ////         }
      ////         let tableid;
      ////         if (typeof data.index == "undefined") {
      ////             tableid = DiceGameProxy.tableList[0].tableId;
      ////         } else {
      ////             tableid = data.index + "";
      ////         }
      ////         // Common.showWait();
      ////         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.enterRoom, { action: "HD_Enter", tableId: tableid });
      ////     }
      ////     backHall() {
      ////         Common.returnToHall(this, DiceGameProxy.BUNDLE);
      ////     }
      ////     onClickRecord() {
      ////         GUtil.openRecord("sd");
      ////     }
      ////     onClickRank() {
      ////         GUtil.openRank("sd");
      ////     }
      ////     onClickHelp() {
      ////         Common.loadPopBuddle(
      ////             "prefab/SdRuleMD5",
      ////             DiceGameProxy.bundle,
      ////             () => {},
      ////             (prefab) => {
      ////                 let node = cc.instantiate(prefab);
      ////                 ViewManager.instance.popNodeView(node, true);
      ////             },
      ////             true
      ////         );
      ////     }
      ////     onClickAutoEnter() {
      ////         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.audoEnter, {});
      ////     }
      ////     onClickCreateRoom() {
      ////         Common.showTip(i18n.lang.devTip);
      ////         return;
      ////         let bundle = DiceGameProxy.bundle;
      ////         Common.loadPopBuddle(
      ////             "prefab/SdCreateRoom",
      ////             bundle,
      ////             () => {},
      ////             (prefab) => {
      ////                 let node = cc.instantiate(prefab);
      ////                 ViewManager.instance.popNodeView(node, true);
      ////             },
      ////             true
      ////         );
      ////     }
      ////     disconnect() {
      ////         //断线
      ////         Common.showNetTips();
      ////     }
      ////     gameShow() {
      ////         //后台切到前台
      ////         let self = this;
      ////         this.scheduleOnce(function () {
      ////             if (NetManager.instance._connect == true) {
      ////                 NetManager.instance.waitServiceSendData(); // 监听推送
      ////                 NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
      ////             }
      ////         }, 0.1);
      ////     }
      ////     onDisable() {
      ////         //监听按钮事件 如：关闭弹窗
      ////         EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
      ////         //传输事件
      ////         EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
      ////         EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
      ////         EventManager.instance.off(ConfigManager.instance.protocolSd.joinRoom, this.joinRoom, this);
      ////         ProxyMgr.close(this);
      ////     }
      ////     protected onDestroy(): void {}
      ////     closePop(data: any) {
      ////         ViewManager.instance.closePopView();
      ////     }
      ////     protected update(dt: number): void {
      ////         this.freshTime += dt;
      ////         if (this.freshTime > FRESH_TIME) {
      ////             NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.getInfo, {});
      ////             this.freshTime = 0;
      ////         }
      ////     }
      //// }
      /**
       * 注意：已把原脚本注释，由于脚本变动过大，转换的时候可能有遗落，需要自行手动转换
       */
      // // import i18n from "../../../i18n/I18n";
      // // import AudioManager from "../../../script/manager/AudioManager";
      // // import ConfigManager from "../../../script/manager/ConfigManager";
      // // import DataManager, { UserKey, UserProxyEvent } from "../../../script/manager/DataManager";
      // // import EventManager from "../../../script/manager/EventManager";
      // // import NetManager from "../../../script/manager/NetManager";
      // // import ViewManager from "../../../script/manager/ViewManager";
      // // import { Common } from "../../../script/tools/Common";
      //
      // // import ProxyMgr from "../../../script/core/ProxyMgr";
      // // import GUtil from "../../../script/gts/GUtil";
      // // import SdgameAddRoom from "./DiceGameAddRoom";
      // // import SdGameDeskItem from "./DiceGameDeskItems";
      // // import DiceGameProxy, { DiceGameEvent } from "./DiceProxy";
      // // const FRESH_TIME = 5;
      // // const { ccclass, property, menu } = cc._decorator;
      //
      // // @ccclass
      // // @menu("game/dicegame/SdHall")
      // // export default class SdHall extends cc.Component {
      // //     @property(cc.Label)
      // //     userName: cc.Label = null;
      //
      // //     @property(cc.Label)
      // //     userGold: cc.Label = null;
      //
      // //     @property(cc.Sprite)
      // //     head: cc.Sprite = null;
      //
      // //     @property(cc.ScrollView)
      // //     RoomScrollView: cc.ScrollView = null;
      //
      // //     @property(cc.Prefab)
      // //     itemList: cc.Prefab[] = [];
      //
      // //     @property(cc.SpriteFrame)
      // //     itemBg: cc.SpriteFrame[] = [];
      //
      // //     // @property(cc.Prefab)
      // //     // item1: cc.Prefab = null;
      // //     // @property(cc.Prefab)
      // //     // item2: cc.Prefab = null;
      // //     freshTime = 0;
      //
      // //     _index = 0;
      // //     onLoad() {
      // //         NetManager.instance.waitServiceSendData();
      // //         this.initEvent();
      // //         this.initHall();
      // //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.getInfo, {});
      //
      // //         AudioManager.instance.startBgMusic();
      // //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
      // //     }
      // //     initHall() {
      // //         this.userGold.string = Common.numFormat(parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD))) + "";
      // //         Common.nickNameFormatL(this.userName, DataManager.instance.instance.getUserDataForKey(UserKey.NICKNAME));
      // //         let headiconName = DataManager.instance.instance.getUserDataForKey(UserKey.AVATAR);
      // //         //头像
      // //         Common.getHead(headiconName, this.head.node);
      // //     }
      //
      // //     updateDesk() {
      // //         let children = this.RoomScrollView.content.children;
      // //         let roomData = DiceGameProxy.tableList;
      // //         let length = roomData.length;
      // //         let index = children.length - length;
      //
      // //         let cumstomCount = length;
      // //         for (let i = 0; i < cumstomCount; i++) {
      // //             let item = children[i];
      // //             if (!item) {
      // //                 item = cc.instantiate(this.itemList[0]);
      // //                 this.RoomScrollView.content.addChild(item);
      // //                 item.x = 0;
      // //             }
      // //             // item.getChildByName("gold_limit").getComponent(cc.Label).string = Common.ChangeMoneyShow(roomData[i].MinEnterTable, 2);
      // //             let sc = item.getComponent(SdGameDeskItem);
      // //             if (sc) {
      // //                 sc.setData(roomData[i]);
      // //                 // sc.setBg(this.itemBg[i]);
      // //             }
      // //         }
      //
      // //         if (index > 0) {
      // //             let len = children.length;
      // //             let left = len - index - 1;
      // //             for (let i = len - 1; i > left; i--) {
      // //                 children[i].removeFromParent();
      // //             }
      // //         }
      // //     }
      // //     initEvent() {
      // //         //监听按钮事件 如：关闭弹窗
      // //         EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
      //
      // //         //传输事件
      // //         EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
      // //         EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
      //
      // //         EventManager.instance.on(ConfigManager.instance.protocolSd.joinRoom, this.joinRoom, this);
      //
      // //         DiceGameProxy.on(DiceGameEvent.UPDATE_TABLE, this.updateDesk, this);
      //
      // //         DataManager.instance.instance.on(
      // //             UserProxyEvent.CHANGE_GOLD,
      // //             () => {
      // //                 //获取钱包//推送钱包
      // //                 this.userGold.string = Common.numFormat(parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD))) + "";
      // //             },
      // //             this
      // //         );
      // //     }
      //
      // //     joinRoom(data) {
      // //         if (data.lock) {
      // //             let bundle = DiceGameProxy.bundle;
      //
      // //             Common.loadPopBuddle(
      // //                 "prefab/SdAddRoom",
      // //                 bundle,
      // //                 () => {},
      // //                 (prefab) => {
      // //                     let node = cc.instantiate(prefab);
      // //                     ViewManager.instance.popNodeView(node, true);
      // //                     node.getComponent(SdgameAddRoom).setData(data);
      // //                 },
      // //                 true
      // //             );
      // //             return;
      // //         }
      // //         let tableid;
      // //         if (typeof data.index == "undefined") {
      // //             tableid = DiceGameProxy.tableList[0].tableId;
      // //         } else {
      // //             tableid = data.index + "";
      // //         }
      // //         // Common.showWait();
      // //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.enterRoom, { action: "HD_Enter", tableId: tableid });
      // //     }
      //
      // //     backHall() {
      // //         Common.returnToHall(this, DiceGameProxy.BUNDLE);
      // //     }
      //
      // //     onClickRecord() {
      // //         GUtil.openRecord("sd");
      // //     }
      //
      // //     onClickRank() {
      // //         GUtil.openRank("sd");
      // //     }
      //
      // //     onClickHelp() {
      // //         Common.loadPopBuddle(
      // //             "prefab/SdRuleMD5",
      // //             DiceGameProxy.bundle,
      // //             () => {},
      // //             (prefab) => {
      // //                 let node = cc.instantiate(prefab);
      // //                 ViewManager.instance.popNodeView(node, true);
      // //             },
      // //             true
      // //         );
      // //     }
      //
      // //     onClickAutoEnter() {
      // //         NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.audoEnter, {});
      // //     }
      //
      // //     onClickCreateRoom() {
      // //         Common.showTip(i18n.lang.devTip);
      // //         return;
      // //         let bundle = DiceGameProxy.bundle;
      // //         Common.loadPopBuddle(
      // //             "prefab/SdCreateRoom",
      // //             bundle,
      // //             () => {},
      // //             (prefab) => {
      // //                 let node = cc.instantiate(prefab);
      // //                 ViewManager.instance.popNodeView(node, true);
      // //             },
      // //             true
      // //         );
      // //     }
      //
      // //     disconnect() {
      // //         //断线
      // //         Common.showNetTips();
      // //     }
      // //     gameShow() {
      // //         //后台切到前台
      // //         let self = this;
      // //         this.scheduleOnce(function () {
      // //             if (NetManager.instance._connect == true) {
      // //                 NetManager.instance.waitServiceSendData(); // 监听推送
      // //                 NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
      // //             }
      // //         }, 0.1);
      // //     }
      //
      // //     onDisable() {
      // //         //监听按钮事件 如：关闭弹窗
      // //         EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
      //
      // //         //传输事件
      // //         EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
      // //         EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
      //
      // //         EventManager.instance.off(ConfigManager.instance.protocolSd.joinRoom, this.joinRoom, this);
      //
      // //         ProxyMgr.close(this);
      // //     }
      //
      // //     protected onDestroy(): void {}
      // //     closePop(data: any) {
      // //         ViewManager.instance.closePopView();
      // //     }
      //
      // //     protected update(dt: number): void {
      // //         this.freshTime += dt;
      // //         if (this.freshTime > FRESH_TIME) {
      // //             NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.getInfo, {});
      // //             this.freshTime = 0;
      // //         }
      // //     }
      // // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './BlackWordProxy.ts', './Common.ts', './ProxyMgr.ts', './GUtil.ts', './UIClock.ts', './PlatformMgr.ts', './ChipProxy.ts', './ChipSmall.ts', './DicegameChipRectMgr.ts', './DiceGameDef.ts', './ChatProxy.ts', './ChipItem.ts', './DiceGamePlayers.ts', './DiceProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, Button, Node, Label, SpriteFrame, ScrollView, Prefab, AudioClip, v3, instantiate, NodePool, resources, isValid, error, sp, Tween, UIOpacity, tween, Sprite, find, UITransform, Vec3, sys, AnimationClip, Animation, SpriteAtlas, Component, AudioManager, DataManager, UserProxyEvent, UserKey, NetManager, ViewManager, BlackWordProxy, Common, ProxyMgr, GUtil, UIClock, PlatformMgr, ChipProxy, ChipEvent, ChipType, ChipSmall, DiceGameChipRectMgr, DiceTableType, MAX_CHIP_REWARD, ChatProxy, ChatProxyEvent, ChipItem, DiceGamePlayers, DiceGameProxy, DiceGameState, DiceGameEvent, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      v3 = module.v3;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      isValid = module.isValid;
      error = module.error;
      sp = module.sp;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Sprite = module.Sprite;
      find = module.find;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      sys = module.sys;
      AnimationClip = module.AnimationClip;
      Animation = module.Animation;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BlackWordProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIClock = module.default;
    }, function (module) {
      PlatformMgr = module.default;
    }, function (module) {
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      DiceGameChipRectMgr = module.default;
    }, function (module) {
      DiceTableType = module.DiceTableType;
      MAX_CHIP_REWARD = module.MAX_CHIP_REWARD;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      DiceGamePlayers = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
      DiceGameState = module.DiceGameState;
      DiceGameEvent = module.DiceGameEvent;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "ad93biWO/NC96qRe1vlkQeA", "DiceLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DiceLayer = exports('default', (_dec = ccclass("DiceLayer"), _dec2 = menu("game/dicegame/DiceLayer"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(ScrollView), _dec15 = property(Prefab), _dec16 = property(AudioClip), _dec17 = property(AudioClip), _dec18 = property(DiceGameChipRectMgr), _dec19 = property(UIClock), _dec20 = property(Node), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(DiceGamePlayers), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceLayer, _Component);
        function DiceLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BtnLast", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "BtnJiabei", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfHead", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerself", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "renAni", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wanAni", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wankong", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saList", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "saSpriteF", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "DiceSound", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipMgr", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_md5Bg", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_md5", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gameId", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBet", _descriptor21, _assertThisInitialized(_this));
          //    // @property(sp.Skeleton)
          //    // spine_heguan: sp.Skeleton = null;
          _initializerDefineProperty(_this, "playersMgr", _descriptor22, _assertThisInitialized(_this));
          //    //桌面玩家的 下注列表
          _this.betList = {
            1: [],
            //第一个玩家
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: []
          };
          _this.betselfList = [];
          _this.betPublicList = [];
          //{item:,yzType:1}
          _this.createBetList = [];
          _this._buddle = void 0;
          _this._curCountDown = 0;
          _this._curTotalTime = 0;
          _this.haveplay = false;
          _this.djsMId = null;
          _this._chipPool = void 0;
          _this.chipPoolReady = false;
          _this.chipPoolLoading = false;
          _this.pendingChipBets = [];
          _this._isReturnBack = false;
          _this._chip = void 0;
          _this.waitList = [];
          _this._curTimes = 0;
          return _this;
        }
        var _proto = DiceLayer.prototype;
        _proto.onLoad = function onLoad() {
          this._buddle = DiceGameProxy.bundle;
          this.initChipPool();
          this._isReturnBack = false;
          this.initEvent();
          this.initGame();

          //        // DiceGameDef.loadHeguanByType(this.spine_heguan, DiceGameProxy.roomInfo.tableInfo.tableType, DiceGameProxy.roomInfo.tableInfo.tableId).then(() => {
          //        //     this.spine_heguan.setAnimation(0, "idle", true);
          //        // });
        };

        _proto.start = function start() {
          //        //添加聊天
          ViewManager.instance.addChatView("dice", this);

          //        // let helpPath = DiceGameProxy.roomInfo.tableInfo.tableType == DiceGameDef.DiceTableType.NORMAL ? "prefab/DiceHelp" : "prefab/DiceRuleMD5";

          this.initSelfInfo();
        };
        _proto.onDestroy = function onDestroy() {
          var _this$_chipPool;
          this.pendingChipBets = [];
          (_this$_chipPool = this._chipPool) == null || _this$_chipPool.clear();
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
          if (this._chipPool.size() > 1) {
            var _item = this._chipPool.get(chipInfo);
            _item.scale = v3(0.6, 0.6, 1);
            return _item;
          }
          var item = this._chipPool.get(chipInfo);
          if (!item) {
            return null;
          }
          for (var i = 0; i < 10; i++) {
            var newNode = instantiate(item);
            this._chipPool.put(newNode);
          }
          item.scale = v3(0.6, 0.6, 1);
          return item;
        };
        _proto.initChipPool = function initChipPool() {
          var _this2 = this;
          if (this.chipPoolReady || this.chipPoolLoading) return;
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          this.chipPoolLoading = true;
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            if (!isValid(_this2, true)) return;
            _this2.chipPoolLoading = false;
            if (err || !prefab) {
              error("DiceGame 筹码加载失败", err);
              return;
            }
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              _this2._chipPool.put(newNode);
            }
            _this2.chipPoolReady = true;
            var pending = _this2.pendingChipBets;
            _this2.pendingChipBets = [];
            // 金额已由协议更新，资源就绪仅恢复本轮筹码显示。
            if (DiceGameProxy.gameState == DiceGameState.BET) {
              for (var _iterator = _createForOfIteratorHelperLoose(pending), _step; !(_step = _iterator()).done;) {
                var config = _step.value;
                _this2.betAni(_extends({}, config, {
                  needAni: false
                }));
              }
            }
          });
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        // EventManager.on(ConfigManager.protocolDice.yxxBetBtn, this.selectCM, this);
          EventManager.on(ConfigManager.protocolDice.yxxHaveBet, this.sendBet, this);
          EventManager.on(ConfigManager.protocolDice.DiceplayerInfo, this.showInfo, this);
          EventManager.on(ConfigManager.protocolDice.DicePublic, this.showAllPlayerInfo, this);
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_STATE, this.updateState, this);
          DiceGameProxy.on(DiceGameEvent.ENTER_ROOM, function () {
            _this3.initGame();
            _this3.updateRoom();
          }, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_ROOM, this.updateRoom, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_PLAYER_LIST, this.updatePlayer, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_USER_LIST, this.showPublicInfoByPage, this);
          DiceGameProxy.on(DiceGameEvent.BET, this.doingBet, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_BET, this.updateBet, this);
          DiceGameProxy.on(DiceGameEvent.RESULT, this.showResult, this);
          DiceGameProxy.on(DiceGameEvent.CHECKOUT, this.checkOut, this);
          DiceGameProxy.on(DiceGameEvent.UPDATE_MD5, this.resetMD5, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            _this3.showPlayerChat(data.msg);
          }, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            // if (DiceGameProxy.gameState == DiceGameState.BET) {
            //     let gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            //     this.selfGold.string = Common.numFormat(gold);
            // }

            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this3.selfGold.string = Common.numFormat(gold);
          }, this);
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {};
        _proto.showInfo = function showInfo(data) {
          if (data == "public") {
            //            //显示全部
            this.showAllPlayerInfo("show");
          } else {
            this.showDeskPlayerInfo(data);
          }
        };
        _proto.showPublicInfoByPage = function showPublicInfoByPage(data) {
          //        // let data: DiceGameDef.HD_GetPlayerList = this._model.AllPlayerinfo;

          var list = [];
          for (var _iterator2 = _createForOfIteratorHelperLoose(data), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            var item = {
              head: i.avatar,
              gold: i.yxb,
              name: i.nickName
            };
            list.push(item);
          }
          GUtil.openUserList(list);
        };
        _proto.showAllPlayerInfo = function showAllPlayerInfo(data) {
          NetManager.instance.sendOnlineData(ConfigManager.protocolDice.getPlayerList, {});
        };
        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          if (data == "self") {
            var item = {
              head: DataManager.instance.getUserDataForKey(UserKey.AVATAR),
              gold: DataManager.instance.getUserDataForKey(UserKey.GOLD),
              name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME)
            };
            GUtil.openPlayer(item);
          } else {
            var i = parseInt(data);
            var player = this.playersMgr.players[i - 1];
            for (var _iterator3 = _createForOfIteratorHelperLoose(DiceGameProxy.playerList), _step3; !(_step3 = _iterator3()).done;) {
              var _user = _step3.value;
              if (_user.userId == player.name) {
                var _item2 = {
                  head: _user.avatar,
                  gold: _user.yxb,
                  name: _user.nickName
                };
                GUtil.openPlayer(_item2);
                break;
              }
            }
            //            // let user =
            //            // this.showPlayerInfo(this._model.curTablePlayer[i - 1]);
          }
        };

        _proto.updateState = function updateState() {
          if (DiceGameProxy.gameState != DiceGameState.BET) {
            this.pendingChipBets = [];
            this.waitList = [];
            this.unschedule(this.updateBetAni);
          }
          if (this.clock) {
            this.clock.hideTime = false;
            this.clock.Open(DiceGameProxy.gameDownTime + 1);
          }
          this.txt_gameId.string = DiceGameProxy.gameEventID;
          switch (DiceGameProxy.gameState) {
            case DiceGameState.START:
              this.clearAllRoom();
              this.clock.changeColor = false;
              this.wanAni.active = true;
              AudioManager.instance.playSound(this.DiceSound[0], false);
              this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "star", false);
              this.wanAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
              //                // this.wankong.getComponent(sp.Skeleton).setAnimation(0, "finish", false);
              //                // this.wankong.getComponent(sp.Skeleton).addAnimation(0, "idle", true);

              break;
            case DiceGameState.BET:
              this.clock.changeColor = true;
              this._curCountDown = DiceGameProxy.gameDownTime;
              this._curTotalTime = DiceGameProxy.betTime;
              this.createCountDown();
              break;
            case DiceGameState.RESULT:
              this.clock.changeColor = false;
              this._curCountDown = 0;
              break;
          }
        };
        _proto.backHall = function backHall() {
          if (this._isReturnBack) {
            return;
          }
          this._isReturnBack = true;
          //        // this.unscheduleAllCallbacks();
          ViewManager.instance.setGameData(null);
          AudioManager.instance.stopAll();
          DiceGameProxy.emit(DiceGameEvent.LEAVE_ROOM);
        };
        _proto.updatePlayer = function updatePlayer(data) {
          this.playersMgr.playerPublic.getChildByName("number").getComponent(Label).string = "" + data.playNum;
          this.playersMgr.showPlayers();
        };
        _proto.waitBetAni = function waitBetAni(config) {
          this.waitList.push(config);
        };
        _proto.updateBetAni = function updateBetAni() {
          if (this.waitList.length > 0) {
            var list = this.waitList.splice(0, 10);
            for (var _iterator4 = _createForOfIteratorHelperLoose(list), _step4; !(_step4 = _iterator4()).done;) {
              var i = _step4.value;
              this.betAni(i);
            }
          } else {
            this.unschedule(this.updateBetAni);
          }
        };
        _proto.updateRoom = function updateRoom() {
          this.waitList = [];
          ChipProxy.initChipList(DiceGameProxy.roomInfo.baseScoreList);
          this.chipMgr.setRate();
          this.createChipsList();
          this.txt_gameId.string = DiceGameProxy.gameEventID;
          var data = DiceGameProxy.roomInfo;
          this.playersMgr.showPlayerCount();
          //        // this.chipMgr.resetSelftBet();
          if (DiceGameProxy.gameState == DiceGameState.BET) {
            this.initBet();
            var list = data.tableInfo.betList;
            if (list) {
              for (var _type in list) {
                var bets = list[_type];
                var ownRemaining = Number(data.userInfo.bets[_type] || 0);
                for (var _iterator5 = _createForOfIteratorHelperLoose(bets), _step5; !(_step5 = _iterator5()).done;) {
                  var bet = _step5.value;
                  // 快照筹码没有用户 ID，扣除个人总额后只恢复公共部分。
                  var own = Math.min(ownRemaining, Number(bet));
                  ownRemaining -= own;
                  var other = Number(bet) - own;
                  if (other <= 0) continue;
                  this.waitBetAni({
                    id: "",
                    betType: _type,
                    count: other,
                    needAni: false
                  });
                }
              }
              //                // for (let bet of list) {
              //                //     let json = JSON.parse(bet);
              //                //     this.betAni({
              //                //         id: json.userId,
              //                //         betType: json.betType,
              //                //         count: json.betAmount,
              //                //         needAni: false,
              //                //     });
              //                // }
            }
            // 个人筹码由权威个人下注恢复，不能用同额公共筹码猜测归属。
            for (var _type2 in data.userInfo.bets) {
              var count = Number(data.userInfo.bets[_type2]);
              if (count > 0) this.waitBetAni({
                id: DataManager.instance.getUserDataForKey(UserKey.OID),
                betType: _type2,
                count: count,
                needAni: false
              });
            }
            this.schedule(this.updateBetAni);
          }
          this.chipMgr.reset();
          this.chipMgr.updateTotalBet(data.tableInfo.pos);
          this.chipMgr.updateSelfBet(data.userInfo.bets);
          var total = 0;
          for (var key in data.userInfo.bets) {
            var _bet = data.userInfo.bets[key];
            total += _bet;
          }
          this.txt_totalBet.string = Common.ChangeMoneyShow(total, 2);
          var type = DiceGameProxy.roomInfo.tableInfo.tableType;
          //        // switch (type) {
          //        //     case DiceGameDef.DiceTableType.NORMAL:
          //        //         this.node_md5Bg.active = false;
          //        //         break;
          //        //     case DiceGameDef.DiceTableType.MD5:
          //        //         this.node_md5Bg.active = true;

          //        //         break;
          //        //     case DiceGameDef.DiceTableType.MD5_PRIZE:
          //        //         this.node_md5Bg.active = true;
          //        //         break;
          //        // }
          this.txt_md5.string = data.tableInfo.ciphertext;
          NetManager.instance.sendOnlineData(ConfigManager.protocolDice.history, {
            tableId: data.tableInfo.tableId,
            size: "100"
          });
          this.updateState();
        };
        _proto.clearRoom = function clearRoom() {
          this._curCountDown = 0;
          this.unschedule(this.showCountDown);
        };
        _proto.clearAllRoom = function clearAllRoom() {
          this._curCountDown = 0;
          this.unschedule(this.showCountDown);
          this.initGameData();
        };
        _proto.initGameData = function initGameData() {
          this.initBet();
          //        // this.wanAni.active = true;
          this.wankong.active = false;
          //        // this._IDiceyxxbg.resetStatus();
          this.chipMgr.rememberBet();
          this.chipMgr.reset();

          //        // this._model.resultData = null;

          for (var _iterator6 = _createForOfIteratorHelperLoose(this.saList), _step6; !(_step6 = _iterator6()).done;) {
            var i = _step6.value;
            i.active = false;
          }
        };
        _proto.initBet = function initBet() {
          this.pendingChipBets = [];
          this.waitList = [];
          this.unschedule(this.updateBetAni);
          var keys = Object.keys(this.betList);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var i = _keys[_i];
            for (var j = 0; j < this.betList[i].length; j++) {
              var item = this.betList[i][j].item;
              if (item && item.parent) {
                Tween.stopAllByTarget(item);
                var opacity = item.getComponent(UIOpacity);
                if (opacity) Tween.stopAllByTarget(opacity);
                this._chipPool.put(item);
              }
            }
          }
          for (var _i2 = 0; _i2 < this.betselfList.length; _i2++) {
            var _item3 = this.betselfList[_i2].item;
            if (_item3 && _item3.parent) {
              Tween.stopAllByTarget(_item3);
              var _opacity = _item3.getComponent(UIOpacity);
              if (_opacity) Tween.stopAllByTarget(_opacity);
              this._chipPool.put(_item3);
            }
          }
          for (var _i3 = 0; _i3 < this.betPublicList.length; _i3++) {
            var _item4 = this.betPublicList[_i3].item;
            if (_item4 && _item4.parent) {
              Tween.stopAllByTarget(_item4);
              var _opacity2 = _item4.getComponent(UIOpacity);
              if (_opacity2) Tween.stopAllByTarget(_opacity2);
              this._chipPool.put(_item4);
            }
          }
          for (var _i4 = 0; _i4 < this.createBetList.length; _i4++) {
            var _item5 = this.createBetList[_i4];
            if (_item5 && _item5.parent) {
              Tween.stopAllByTarget(_item5);
              var _opacity3 = _item5.getComponent(UIOpacity);
              if (_opacity3) Tween.stopAllByTarget(_opacity3);
              this._chipPool.put(_item5);
            }
          }
          this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: []
          };
          this.betselfList = [];
          this.betPublicList = []; //{item:,yzType:1}
          this.createBetList = [];
          this.txt_totalBet.string = "0";
          while (this._chipPool.size() > 1000) {
            //@ts-ignore
            var node = this._chipPool._pool.pop();
            node.destroy();
          }
        };
        _proto.binkNode = function binkNode(node) {
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.showResultAni = function showResultAni() {
          var data = DiceGameProxy.resultData;
          var nums = data.openResult.openNum;
          var type = DiceGameProxy.roomInfo.tableInfo.tableType;
          if (type != DiceTableType.NORMAL) {
            var original = data.openResult.original;
            this.txt_md5.string = original;
          }
          for (var i = 0; i < 3; i++) {
            var num = nums[i];
            var index = parseInt(num) - 1;
            this.saList[i].getComponent(Sprite).spriteFrame = this.saSpriteF[index];
            this.saList[i].active = true;
            //            // let txt = this.saList[i].getChildByName("txt");
            //            // txt.color = index == 0 ? cc.Color.WHITE : cc.Color.BLACK;
          }

          this.chipMgr.showHighLight(DiceGameProxy.resultData.prizeResults);
        };
        _proto.emitBet = function emitBet() {
          var _this4 = this;
          //        //shou cm 把没中的区域 筹码收集到庄家
          var nodes = this.chipMgr.getReturnChipParents(DiceGameProxy.resultData.prizeResults);
          var _loop = function _loop() {
            var player = nodes[i];
            // put 会立即修改 children，必须遍历快照以免漏回收。
            var nodeArr = player.children.slice();
            var pos = {
              xx: player.getComponent(UITransform).width / 2,
              yy: player.getComponent(UITransform).height / 2
            };
            var world = _this4.renAni.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
            var posren = player.getComponent(UITransform).convertToNodeSpaceAR(world);
            nodeArr.forEach(function (node, index) {
              if (index > MAX_CHIP_REWARD) {
                _this4._chipPool.put(node);
                return;
              }
              tween(node).to(0.3, {
                position: v3(pos.xx, pos.yy)
              }).to(0.3, {
                position: v3(pos.xx, pos.yy + index * 2)
              }).to(0.5, {
                position: posren
              }).call(function () {
                _this4._chipPool.put(node);
              }).start();
              tween(node.getComponent(UIOpacity)).delay(0.6).to(0.3, {
                opacity: 255
              }).start();
            });
          };
          for (var i = 0; i < nodes.length; i++) {
            _loop();
          }
          //        ///////////////////////////
          this.scheduleOnce(function () {
            for (var i = 0; i < _this4.playersMgr.players.length; i++) {
              var player = _this4.playersMgr.players[i];
              var uid = player.name;
              var data = DiceGameProxy.resultData.seatPrize;
              if (data) {
                for (var _iterator7 = _createForOfIteratorHelperLoose(data), _step7; !(_step7 = _iterator7()).done;) {
                  var item = _step7.value;
                  if (item.userId == uid) {
                    var bets = item.prizeInfo;
                    if (bets) {
                      for (var key in bets) {
                        var value = bets[key];
                        var num = 0;
                        var m = 0;
                        var chips = _this4.getChipValue(value);
                        var _loop2 = function _loop2() {
                          var chip = _step8.value;
                          //                                        //返还筹码
                          var yzpool = _this4.chipMgr.getChipParent(key);
                          var positionNode = player.getChildByName("img_1");
                          var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                          var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                          var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                          var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                          //                                        // cc.tween(obj.item)
                          //                                        //     .to(0.3, { x: posren.x, y: posren.y + (num - 1) * 2 })
                          //                                        //     .to(0.6 + num * 0.05, { opacity: 255 })
                          //                                        //     .to(0.3, { x: posren2.x, y: posren2.y })
                          //                                        //     .call(() => {
                          //                                        //         this._chipPool.put(obj.item);
                          //                                        //     })
                          //                                        //     .start();
                          //                                        //补偿 中奖
                          var worldren = _this4.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                          var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                          var itemBet = _this4.getChipNode(chip);
                          yzpool.addChild(itemBet);
                          itemBet.position = posrento;
                          var posX = positionNode.getPosition().x > 0 ? 40 * (m + 1) : -40 * (m + 1);
                          var world3 = positionNode.getComponent(UITransform).convertToWorldSpaceAR(v3(posX, 0));
                          //                                        // let positionNode2 = player.getChildByName("img_" + (m + 2));
                          //                                        // let world3 = positionNode2.convertToWorldSpaceAR(cc.v2(0,0));
                          var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                          _this4.createBetList.push(itemBet);
                          tween(itemBet).to(0.3, {
                            position: v3(posre3.x, posre3.y + (num - 1) * 2)
                          })
                          // .to(0.6 + num * 0.05, { opacity: 255 })
                          .delay(0.6 + num * 0.05).to(0.3, {
                            position: posren2
                          }).call(function () {
                            _this4._chipPool.put(itemBet);
                          }).start();
                          m++;
                          num++;
                        };
                        for (var _iterator8 = _createForOfIteratorHelperLoose(chips), _step8; !(_step8 = _iterator8()).done;) {
                          _loop2();
                        }
                      }
                    }
                    break;
                  }
                }
              }
            }
            _this4.emitMyselfBet();
            _this4.emitPublicBet();
            _this4.backMoney();
          }, 1.6);
        };
        _proto.getDeskPlayerByID = function getDeskPlayerByID(data) {
          var redata = [];
          if (data == null) {
            return redata;
          }
          if (data.length == 0) {
            return redata;
          }
          var curData = data;
          for (var i = 0; i < curData.length; i++) {
            if (curData[i].UserID != DataManager.instance.getUserDataForKey(UserKey.OID)) {
              redata.push(curData[i]);
            }
            if (redata.length == this.playersMgr.otherUserCount) {
              break;
            }
          }
          return redata;
        };
        _proto.getChipValue = function getChipValue(value) {
          var chips = [50000000, 10000000, 5000000, 1000000, 500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
          var result = [];
          var startValue = value;
          var startIndex = 0;
          for (var i = startIndex; i < chips.length; i++) {
            var item = chips[i];
            if (startValue >= i) {
              var count = Math.floor(startValue / item);
              for (var _i5 = 0; _i5 < count; _i5++) {
                result.push(item);
              }
              startValue -= count * item;
            }
          }
          if (startValue > 0) {
            result.push(startValue);
          }
          return result;
        };
        _proto.addScore = function addScore(parent, str) {
          this._buddle.load("prefab/addScore", function (err, assert) {
            var newNode = instantiate(assert);
            newNode.getChildByName("text").getComponent(Label).string = str;
            parent.addChild(newNode);
          });
        };
        _proto.backMoney = function backMoney() {
          var _this5 = this;
          this.scheduleOnce(function () {
            if (DiceGameProxy.resultData == null) {
              return;
            }
            for (var i = 0; i < _this5.playersMgr.players.length; i++) {
              var player = _this5.playersMgr.players[i];
              var uid = player.name;
              var data = DiceGameProxy.resultData.seatPrize;
              if (data) {
                for (var _iterator9 = _createForOfIteratorHelperLoose(data), _step9; !(_step9 = _iterator9()).done;) {
                  var item = _step9.value;
                  if (item.userId == uid) {
                    var add = item.prizeAmount;
                    if (add > 0) _this5.addScore(player, "+" + Common.ChangeMoneyShow(add, 2));
                    break;
                  }
                }
              }
            }
            if (DiceGameProxy.resultData.userPrize.prizeAmount > 0) {
              var _player = _this5.playerself;
              var tips = _player.getChildByName("addScore");
              tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(DiceGameProxy.resultData.userPrize.prizeAmount, 2);
              tips.active = true;
            }
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this5.selfGold.string = Common.numFormat(gold);
          }, 1);
        };
        _proto.emitMyselfBet = function emitMyselfBet() {
          var _this6 = this;
          var num = 0;
          var _loop3 = function _loop3() {
              var betInfo = _step10.value;
              var obj = betInfo;
              var count = _this6.getNumBet(betInfo.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > MAX_CHIP_REWARD) {
                  _this6._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this6.chipMgr.getChipParent(obj.yztype);
                var player = _this6.playerself;
                var positionNode = player.getChildByName("img_1");
                var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                // cc.tween(obj.item)
                //     .to(0.3, { x: posren.getPosition().x, y: posren.getPosition().y + (num - 1) * 2 })
                //     .to(0.6 + num * 0.05, { opacity: 255 })
                //     .to(0.3, { x: posren2.getPosition().x, y: posren2.getPosition().y })
                //     .call(() => {
                //         this._chipPool.put(obj.item);
                //     })
                //     .start();

                tween(obj.item).to(0.3, {
                  position: v3(posren.x, posren.y + (num - 1) * 2)
                })
                // .to(0.6 + num * 0.05, { opacity: 255 })
                .delay(0.6 + num * 0.05).to(0.3, {
                  position: posren2
                }).call(function () {
                  _this6._chipPool.put(obj.item);
                }).start();
                var worldren = _this6.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                var _loop4 = function _loop4() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this6.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  var positionNode2 = player.getChildByName("img_" + (m + 2));
                  var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                  var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                  _this6.createBetList.push(itemBet);
                  // cc.tween(itemBet)
                  //     .to(0.3, { x: posre3.getPosition().x, y: posre3.getPosition().y + (num - 1) * 2 })
                  //     .to(0.6 + num * 0.05, { opacity: 255 })
                  //     .to(0.3, { x: posren2.getPosition().x, y: posren2.getPosition().y })
                  //     .call(() => {
                  //         this._chipPool.put(itemBet);
                  //     })
                  //     .start();

                  tween(itemBet).to(0.3, {
                    position: v3(posre3.x, posre3.y + (num - 1) * 2)
                  })
                  // .to(0.6 + num * 0.05, { opacity: 255 })
                  .delay(0.6 + num * 0.05).to(0.3, {
                    position: posren2
                  }).call(function () {
                    _this6._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop4()) continue;
                }
              }
            },
            m;
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.betselfList), _step10; !(_step10 = _iterator10()).done;) {
            if (_loop3()) continue;
          }
        };
        _proto.emitPublicBet = function emitPublicBet() {
          var _this7 = this;
          var num = 0;
          var _loop5 = function _loop5() {
              var betInfo = _step11.value;
              var obj = betInfo;
              var count = _this7.getNumBet(obj.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > MAX_CHIP_REWARD) {
                  _this7._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this7.chipMgr.getChipParent(obj.yztype);
                var player = _this7.playersMgr.playerPublic;
                var world = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                tween(obj.item).to(0.5, {
                  position: posren
                }).call(function () {
                  _this7._chipPool.put(obj.item);
                }).start();
                var worldren = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > MAX_CHIP_REWARD ? MAX_CHIP_REWARD : count;
                var _loop6 = function _loop6() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this7.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  _this7.createBetList.push(itemBet);
                  tween(itemBet).to(0.5, {
                    position: posren
                  }).call(function () {
                    _this7._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop6()) continue;
                }
              }
            },
            m;
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.betPublicList), _step11; !(_step11 = _iterator11()).done;) {
            if (_loop5()) continue;
          }
        };
        _proto.getNumBet = function getNumBet(yztype) {
          var count = 0;
          for (var _iterator12 = _createForOfIteratorHelperLoose(DiceGameProxy.resultData.prizeResults), _step12; !(_step12 = _iterator12()).done;) {
            var PrizeResult = _step12.value;
            if (PrizeResult == yztype) {
              count = count + 1;
            }
          }
          return count;
        };
        _proto.wandong = function wandong() {
          //        // this.wanAni.active = false;
          this.wankong.active = true;
          this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "finish", false);
          //        // this.wanAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          this.wankong.getComponent(sp.Skeleton).setAnimation(0, "start", false);
          this.wankong.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
        };
        _proto.playResultSound = function playResultSound() {
          if (this.djsMId != null) ;
          AudioManager.instance.playSound(this.DiceSound[3], false); // 第一阶段
        };

        _proto.resetMD5 = function resetMD5(text) {
          this.txt_md5.string = text;
        };
        _proto.checkOut = function checkOut() {
          var _this8 = this;
          this.scheduleOnce(function () {
            _this8.emitBet();
          }, 1.5);
        };
        _proto.showResult = function showResult() {
          var _this9 = this;
          this.wandong();
          this.scheduleOnce(function () {
            _this9.playResultSound();
            _this9.showResultAni();
            NetManager.instance.sendOnlineData(ConfigManager.protocolDice.history, {
              tableId: DiceGameProxy.roomInfo.tableInfo.tableId,
              size: "100"
            });
          }, 1.3);
        };
        _proto.showBigJiangResult = function showBigJiangResult() {
          var dajiangLayer = find("Canvas/dajiangLayer");
          dajiangLayer.active = true;
          dajiangLayer.getChildByName("score").active = false;
          var dajiangani = dajiangLayer.getChildByName("teixao").getComponent(sp.Skeleton);
          dajiangani.setAnimation(0, "dalogo1", false);
          dajiangani.addAnimation(0, "dalogo2", true);
          this.scheduleOnce(function () {
            var dajiangLayer1 = find("Canvas/dajiangLayer");
            dajiangLayer1.getChildByName("score").active = true;
            //            // dajiangLayer1.getChildByName("score").getComponent(cc.Label).string = Common.numFormat(this._model.resultData.TotalBackYxb);
          }, 0.5);
        }
        //    /**
        //     * 自己下注
        //     * @param data
        //     */
        ;

        _proto.doingBet = function doingBet(data) {
          var betType = data.pos;
          var count = parseInt(data.betAmount);
          this.betAni({
            id: DataManager.instance.getUserDataForKey(UserKey.OID),
            betType: betType,
            count: count
          });
          AudioManager.instance.playSound(this.DiceSound[1], false);
          this.chipMgr.addBetCount(betType, count, true);
          var bets = this.chipMgr.bets;
          var total = 0;
          bets.forEach(function (rect, key) {
            total += rect.selfBet;
          });
          this.txt_totalBet.string = Common.ChangeMoneyShow(total, 2);
        }
        //    /**
        //     * 同步下注信息
        //     * @param data
        //     */
        ;

        _proto.updateBet = function updateBet(data) {
          for (var i = 0, length = data.length; i < length; i++) {
            var item = data[i];
            var info = JSON.parse(item);
            var id = info.userId;
            var betType = info.betType;
            var count = info.betAmount;
            if (id == DataManager.instance.getUserDataForKey(UserKey.OID)) {
              continue;
            }
            var delay = 0;
            this.betAni({
              id: id,
              betType: betType,
              count: count,
              delay: delay
            });
            this.chipMgr.addBetCount(betType, count, false);
          }
          AudioManager.instance.playSound(this.DiceSound[1], false);
        };
        _proto.betAni = function betAni(config) {
          var _config$needAni;
          if (!this.chipPoolReady) {
            this.pendingChipBets.push(config);
            this.initChipPool();
            return;
          }
          var id = config.id;
          var xzType = config.betType;
          var xiazhuzhi = config.count;
          var delay = config.delay || 0;
          var needAni = (_config$needAni = config.needAni) != null ? _config$needAni : true;
          var startPos;
          var index = this.playersMgr.getLastIndexById(id);
          if (index == -2) {
            return;
          }
          var aniPool = this.chipMgr.getChipParent(xzType);
          var CMnode = this.getChipNode(xiazhuzhi);
          if (!CMnode) {
            return;
          }
          aniPool.addChild(CMnode);
          var list = null;
          if (id == DataManager.instance.getUserDataForKey(UserKey.OID)) {
            var player = find("player_self", this.node);
            var worldPos = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            // this.betselfList.push({ item: CMnode, yztype: xzType });
            list = this.betselfList;
          } else if (index >= 0) {
            var _player2 = this.playersMgr.players[index];
            var _worldPos = _player2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos);
            // this.betList[index + 1].push({ item: CMnode, yztype: xzType });
            list = this.betList[index + 1];
          } else {
            var _player3 = this.playersMgr.playerPublic;
            var _worldPos2 = _player3.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos2);
            // this.betPublicList.push({ item: CMnode, yztype: xzType });
            list = this.betPublicList;
          }
          CMnode.position = startPos;
          var len = aniPool.children.length;
          var y = len * 3;
          y = y > 30 ? 30 : y;

          // 上限按归属和下注区计算，公共筹码不能挤掉自己的结算筹码。
          var owned = list.filter(function (bet) {
            return bet.yztype == xzType && bet.item.parent;
          });
          if (owned.length >= 10) {
            owned[owned.length - 1].item.getComponent(ChipSmall).setValue(xiazhuzhi);
            this._chipPool.put(CMnode);
            return;
          }
          list.push({
            item: CMnode,
            yztype: xzType
          });
          if (needAni) {
            tween(CMnode).delay(delay).to(0.5, {
              position: v3(0, y)
            }, {
              easing: "quadOut"
            }).start();
          } else {
            CMnode.setPosition(0, y);
          }
        };
        _proto.sendBet = function sendBet(data) {
          //        // if (!this.djsProgress.node.active) {
          //        //     Common.showTip(i18n.lang.disableBet);
          //        //     return;
          //        // }
          var pos = "" + data;
          var num = "" + this._chip.count;
          NetManager.instance.sendOnlineData(ConfigManager.protocolDice.doingBet, {
            pos: pos,
            betAmount: num
          });
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != DiceGameProxy.BUNDLE) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator13 = _createForOfIteratorHelperLoose(children), _step13; !(_step13 = _iterator13()).done;) {
            var child = _step13.value;
            var chipitem = child.getComponent(ChipItem);
            if (chipitem) {
              if (chipitem.data == data) {
                this._chip = data;
              } else {
                chipitem.moveUp(false);
              }
            }
          }
        };
        _proto.createChipsList = function createChipsList() {
          var _this10 = this;
          this.scrollViewCM.content.destroyAllChildren();
          //        // let minChip = ChipProxy.chipList[0].count || 0;
          for (var _iterator14 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step14; !(_step14 = _iterator14()).done;) {
            var i = _step14.value;
            //            // if (i.count < minChip) {
            //            //     continue;
            //            // }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.scale = v3(0.8, 0.8, 1);
            _chip.getComponent(UITransform).width = 105;
            _chip.getComponent(UITransform).height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, DiceGameProxy.BUNDLE);
          }
          for (var _iterator15 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step15; !(_step15 = _iterator15()).done;) {
            var _i6 = _step15.value;
            var has = false;
            for (var _iterator17 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step17; !(_step17 = _iterator17()).done;) {
              var j = _step17.value;
              if (j.count == _i6.count) {
                has = true;
                break;
              }
            }
            if (has) {
              continue;
            }
            var _chip2 = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip2);
            _chip2.scale = v3(0.8, 0.8, 1);
            _chip2.getComponent(UITransform).width = 105;
            _chip2.getComponent(UITransform).height = 105;
            _chip2.getComponent(ChipItem).setData(_i6, ChipType.CHIP, DiceGameProxy.BUNDLE);
          }
          var data = [];
          data = data.concat(ChipProxy.diyList);
          for (var _iterator16 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step16; !(_step16 = _iterator16()).done;) {
            var _i7 = _step16.value;
            var _has = false;
            for (var _iterator18 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step18; !(_step18 = _iterator18()).done;) {
              var _j = _step18.value;
              if (_j.count == _i7.count) {
                _has = true;
                break;
              }
            }
            if (_has) {
              continue;
            }
            data.push(_i7);
          }

          //        // this.scrollViewCM.getComponent(ScrollList).init(data);

          this.scheduleOnce(function () {
            var child = _this10.scrollViewCM.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this10.scrollViewCM.scrollToLeft();
          });
        };
        _proto.createCountDown = function createCountDown() {
          var per = this._curCountDown / this._curTotalTime;
          this._curTimes = sys.now();
          this.schedule(this.showCountDown, 0.1);
        };
        _proto.showCountDown = function showCountDown() {
          var now = sys.now();
          this._curCountDown -= (now - this._curTimes) / 1000.0;
          this._curTimes = now;
          if (this._curCountDown <= 3 && this.haveplay == false) {
            //            //倒计时音效
            this.haveplay = true;
            this.djsMId = AudioManager.instance.playSound(this.DiceSound[2], false);
            ViewManager.instance.showCountDownTip(this.node, Math.round(this._curCountDown), "idle3", 25);
          }
          if (this._curCountDown < 0.000001) {
            this._curCountDown = 0;
          }
          if (this._curCountDown < 0.000001) {
            this.haveplay = false;
            // cc.audioEngine.stopEffect(this.djsMId);
            this.unschedule(this.showCountDown);
          }
        };
        _proto.initGame = function initGame() {
          this.wanAni.active = true;
          this.wanAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
          this.wankong.active = false;
          for (var _iterator19 = _createForOfIteratorHelperLoose(this.saList), _step19; !(_step19 = _iterator19()).done;) {
            var i = _step19.value;
            i.active = false;
          }
          AudioManager.instance.playGameMusic(this.bgMusic, true); //播放背景音乐
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.onClickExit = function onClickExit() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolDice.exitRoom, {
            action: "HD_QuitTable"
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("dice");
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/DiceRule", DiceGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            //                // node.getComponent(DicegameRuleMD5).showType(1);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/DiceHistory", DiceGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);

            //                // node.getComponent(DicegameHistory).setData(DiceGameProxy.history, DiceGameProxy.roomInfo.tableInfo.tableType);
          }, true);
        };
        _proto.onClickCopy = function onClickCopy() {
          PlatformMgr.p.copyToClipBoard(this.txt_md5.string);
        };
        _proto.onClickLastBet = function onClickLastBet() {
          var _this11 = this;
          var bets = this.chipMgr.lastBets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolDice.doingBet, {
                pos: i + "",
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this11.BtnLast, true);
          }).start();
        };
        _proto.onClickDoubleBet = function onClickDoubleBet() {
          var _this12 = this;
          var bets = this.chipMgr.bets;
          bets.forEach(function (rect, key) {
            if (rect.selfBet > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolDice.doingBet, {
                pos: rect.rectPos + "",
                betAmount: rect.selfBet + ""
              });
            }
          });

          // this.BtnJiabei.interactable = false;
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            // this.BtnJiabei.interactable = true;
            Common.setButtonEnableWithGray(_this12.BtnJiabei, true);
          }).start();
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.onDisable = function onDisable() {
          this.pendingChipBets = [];
          this.waitList = [];
          this.unschedule(this.updateBetAni);
          //        //button事件
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        // EventManager.off(ConfigManager.protocolDice.yxxBetBtn, this.selectCM, this);
          EventManager.off(ConfigManager.protocolDice.yxxHaveBet, this.sendBet, this);
          EventManager.off(ConfigManager.protocolDice.DiceplayerInfo, this.showInfo, this);
          EventManager.off(ConfigManager.protocolDice.DicePublic, this.showAllPlayerInfo, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台

          ProxyMgr.close(this);
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          if (!data) return;
          if (data.GroupId != "dice") return;
          var currPlayer = null;
          var scale_x = 1;
          var userID = DataManager.instance.getUserDataForKey(UserKey.OID);
          var isSelf = data.FromUserId == userID;
          if (isSelf) {
            currPlayer = this.playerself;
            this.addMyChat(currPlayer, data, scale_x);
            return;
          }
          for (var i = 0; i < this.playersMgr.players.length; i++) {
            var player = this.playersMgr.players[i];
            if (data.FromUserId == player.name) {
              currPlayer = player;
              scale_x = player.getPosition().x > 0 ? -1 : 1;
              break;
            }
          }
          if (currPlayer && isValid(currPlayer)) {
            this.addChat(currPlayer, data, scale_x);
          } else {
            if (data.MsgType == 1) {
              DiceGameProxy.chatQueueList.push(data);
              this.showPublicChat(1);
            } else if (data.MsgType == 2) {
              DiceGameProxy.expressionQueueList.push(data);
              this.showPublicChat(2);
            }
          }
        };
        _proto.addMyChat = function addMyChat(chatRoot, data, scaleX) {
          var node_chat = find("seat_bg/node_chat", chatRoot);
          node_chat.active = data.MsgType == 1;
          var node_expression = find("seat_bg/node_expression", chatRoot);
          node_expression.active = !node_chat.active;
          if (data.MsgType == 1) {
            //            //文字
            var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
            data.Content = BlackWordProxy.filter(data.Content);
            lbl_chat.string = data.Content;
            node_chat.setPosition(node_chat.position.x * scaleX, node_chat.position.y);
            node_chat.scale = v3(0, 0, 1);
            lbl_chat.node.scale = v3(scaleX, lbl_chat.node.scale.y, 1);
            tween(node_chat).stop().to(0.2, {
              scale: v3(scaleX, 1, 1)
            }).delay(2.0).call(function () {
              node_chat.active = false;
            }).start();
          } else {
            this.loadLocalFrameAnim(data.Content, node_expression, function () {
              node_expression.active = false;
            });
          }
        };
        _proto.addChat = function addChat(parent, data, scaleX) {
          var _this13 = this;
          this._buddle.load("prefab/Node_chat", function (err, prefab) {
            if (err) {
              return;
            }
            var chatRoot = instantiate(prefab);
            parent.addChild(chatRoot);
            if (data.MsgType == 1) {
              //                //文字
              var node_chat = chatRoot.getChildByName("node_chat");
              node_chat.active = true;
              var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
              data.Content = BlackWordProxy.filter(data.Content);
              lbl_chat.string = data.Content;
              node_chat.active = true;
              node_chat.setPosition(node_chat.position.x * scaleX, node_chat.position.y);
              node_chat.scale = v3(0, 0, 1);
              lbl_chat.node.scale = v3(scaleX, lbl_chat.node.scale.y, 1);
              tween(node_chat).stop().to(0.2, {
                scale: v3(scaleX, 1, 1)
              }).delay(2.0).call(function () {
                chatRoot.destroyFromParent();
              }).start();
            } else {
              var node_expression = chatRoot.getChildByName("node_expression");
              node_expression.active = true;
              _this13.loadLocalFrameAnim(data.Content, node_expression, function () {
                chatRoot.destroyFromParent();
              });
            }
          });
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this14 = this;
          if (nType == 1) {
            //            //文本
            if (DiceGameProxy.chatQueueList.length < 1) return;
            var _loop7 = function _loop7() {
              var node_chat = find("seat_bg/node_chat" + i, _this14.playersMgr.playerPublic);
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && DiceGameProxy.chatQueueList.length > 0) {
                node_chat.active = true;
                var data = DiceGameProxy.chatQueueList.shift();
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                data.Content = BlackWordProxy.filter(data.Content);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 3 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 * i).to(0.2, {
                  scale: v3(-1, scale_y, 1)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this14.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 1; i < 4; ++i) {
              if (_loop7()) continue;
            }
          } else if (nType == 2) {
            if (!DiceGameProxy.expressionQueueList || DiceGameProxy.expressionQueueList.length < 1) return;
            var node_expression = find("seat_bg/node_expression", this.playersMgr.playerPublic);
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = DiceGameProxy.expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this14.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this14.showPublicChat(2);
                });
              }).to(0.5, {
                scale: v3(1.3, 1.3, 1)
              }).start();
            }
          }
        };
        _proto.createAnim = function createAnim(frames, aniName, item, callBack) {
          var clip = AnimationClip.createWithSpriteFrames(frames, frames.length);
          clip.name = "" + aniName;
          clip.speed = 0.8;
          clip.sample = 24;
          // clip.wrapMode = cc.WrapMode.Normal;
          var sprite = item.getComponent(Sprite);
          if (frames[0]) {
            sprite.spriteFrame = frames[0];
          }
          var ani = item.addComponent(Animation);
          ani.addClip(clip);
          ani.play("" + aniName);
          var state = ani.getState("" + aniName);
          state.repeatCount = 2;
          ani.on(Animation.EventType.FINISHED, function () {
            item.active = false;
            if (callBack) {
              sprite.spriteFrame = null;
              callBack();
            }
          }, this);
        };
        _proto.loadLocalFrameAnim = function loadLocalFrameAnim(aniName, item, callBack) {
          var _this15 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this15.createAnim(sprFrmAry, aniName, item, callBack);
          });
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        }
        //    // update (dt) {}
        ;

        return DiceLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BtnLast", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BtnJiabei", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "playerself", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "renAni", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "wanAni", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "wankong", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "saList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "saSpriteF", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "DiceSound", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "chipMgr", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_md5Bg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_md5", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_gameId", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBet", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "playersMgr", [_dec24], {
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

System.register("chunks:///_virtual/DiceProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, Common, MainManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      assetManager = module.assetManager;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyBase = module.ProxyBase;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5778AegCREdrcEsq2AfpR0", "DiceProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DiceGameEvent = exports('DiceGameEvent', /*#__PURE__*/function (DiceGameEvent) {
        DiceGameEvent["ENTER_ROOM"] = "enterRoom";
        DiceGameEvent["LEAVE_ROOM"] = "leaveRoom";
        DiceGameEvent["UPDATE_PLAYER_LIST"] = "playerList";
        DiceGameEvent["UPDATE_TABLE"] = "updateTable";
        DiceGameEvent["UPDATE_USER_LIST"] = "userList";
        DiceGameEvent["CHAT"] = "chat";
        DiceGameEvent["BET"] = "doingBet";
        DiceGameEvent["UPDATE_BET"] = "updateBet";
        DiceGameEvent["UPDATE_STATE"] = "updateState";
        DiceGameEvent["UPDATE_ROOM"] = "updateRoom";
        DiceGameEvent["UPDATE_MY_INFO"] = "updateMyInfo";
        DiceGameEvent["RESULT"] = "result";
        DiceGameEvent["UPDATE_MD5"] = "updateMD5";
        DiceGameEvent["UPDATE_HISTORY"] = "updateHistory";
        DiceGameEvent["CHECKOUT"] = "checkout";
        return DiceGameEvent;
      }({}));
      var DiceGameState = exports('DiceGameState', /*#__PURE__*/function (DiceGameState) {
        DiceGameState[DiceGameState["NORMAL"] = 0] = "NORMAL";
        DiceGameState[DiceGameState["START"] = 1] = "START";
        DiceGameState[DiceGameState["BET"] = 2] = "BET";
        DiceGameState[DiceGameState["RESULT"] = 3] = "RESULT";
        return DiceGameState;
      }({}));
      /**
       * 骰宝数据代理
       */
      var DiceGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(DiceGameProxyMgr, _ProxyBase);
        function DiceGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          /**
           * 在座玩家列表
           */
          _this.playerList = [];
          _this.resultData = null;
          /**桌子列表 */
          _this.tableList = void 0;
          _this.oddList = null;
          //赔率
          /**房间内信息 */
          _this.roomInfo = void 0;
          _this.history = void 0;
          _this.playerCount = 0;
          _this.wsEvents = [ConfigManager.protocolDice.getInfo, ConfigManager.protocolDice.deskinfo, ConfigManager.protocolDice.enterRoom, ConfigManager.protocolDice.audoEnter, ConfigManager.protocolDice.startGame, ConfigManager.protocolDice.updatePlayerNum, ConfigManager.protocolDice.getPlayerList, ConfigManager.protocolDice.sendShortCut, ConfigManager.protocolDice.doingBet, ConfigManager.protocolDice.updateRoomStatus, ConfigManager.protocolDice.openResult, ConfigManager.protocolDice.betInfo, ConfigManager.protocolDice.exitRoom, ConfigManager.protocolDice.md5Text, ConfigManager.protocolDice.history, ConfigManager.protocolDice.checkout];
          _this.gameState = DiceGameState.NORMAL;
          _this.gameEventID = null;
          _this.gameDownTime = 0;
          _this.betTime = 1;
          _this.BUNDLE = "DiceGame";
          //聊天列表-文本
          _this._chatQueueList = [];
          //聊天列表-表情
          _this._expressionQueueList = [];
          /**
           * 所有用户列表
           */
          _this.userList = [];
          return _this;
        }
        var _proto = DiceGameProxyMgr.prototype;
        _proto.init = function init() {
          this.initRecv();
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.off(event, this.recvData, this);
          }
        };
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          // console.log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            if (data.Code == 30009) {
              this.emit(DiceGameEvent.LEAVE_ROOM);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.protocolDice.getInfo:
              if (!data.Data) {
                break;
              }
              this.tableList = data.Data;
              this.emit(DiceGameEvent.UPDATE_TABLE);
              break;
            case ConfigManager.protocolDice.audoEnter:
            case ConfigManager.protocolDice.enterRoom:
              {
                var info = data.Data;
                this.oddList = info.odds;
                this.roomInfo = info;
                this.gameState = info.tableInfo.state;
                this.gameDownTime = info.tableInfo.countDown;
                this.betTime = info.tableInfo.betTime;
                this.playerCount = info.tableInfo.playNum;
                this.playerList = info.tableInfo.seatPlay;
                this.gameEventID = info.tableInfo.issue;
                this.emit(DiceGameEvent.ENTER_ROOM);
                break;
              }
            case ConfigManager.protocolDice.startGame:
              {
                var _info = data.Data;
                this.oddList = _info.odds;
                this.roomInfo = _info;
                this.gameState = _info.tableInfo.state;
                this.gameDownTime = _info.tableInfo.countDown;
                this.playerCount = _info.tableInfo.playNum;
                this.playerList = _info.tableInfo.seatPlay;
                this.emit(DiceGameEvent.UPDATE_ROOM);
                break;
              }
            case ConfigManager.protocolDice.updateRoomStatus:
              {
                var _info2 = data.Data;
                this.gameState = _info2.tableState;
                this.gameEventID = _info2.eventID;
                this.gameDownTime = _info2.countDown;
                this.emit(DiceGameEvent.UPDATE_STATE);
                break;
              }
            case ConfigManager.protocolDice.updatePlayerNum:
              {
                var _info3 = data.Data;
                this.playerCount = _info3.playNum;
                this.playerList = _info3.seatPlay;
                this.emit(DiceGameEvent.UPDATE_PLAYER_LIST, _info3);
                break;
              }
            case ConfigManager.protocolDice.getPlayerList:
              {
                this.emit(DiceGameEvent.UPDATE_USER_LIST, data.Data);
                break;
              }
            case ConfigManager.protocolDice.exitRoom:
              {
                this.emit(DiceGameEvent.LEAVE_ROOM);
                break;
              }
            case ConfigManager.protocolDice.doingBet:
              {
                var _info4 = data.Data;
                this.emit(DiceGameEvent.BET, _info4);
                break;
              }
            case ConfigManager.protocolDice.betInfo:
              {
                var _info5 = data.Data;
                this.emit(DiceGameEvent.UPDATE_BET, _info5);
                break;
              }
            case ConfigManager.protocolDice.openResult:
              {
                var _info6 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.openResult = _info6.openResult;
                this.resultData.prizeResults = _info6.prizeResults;
                this.emit(DiceGameEvent.RESULT, _info6);
                break;
              }
            case ConfigManager.protocolDice.checkout:
              {
                var _info7 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.seatPrize = _info7.seatPrize;
                this.resultData.userPrize = _info7.userPrize;
                this.emit(DiceGameEvent.CHECKOUT, _info7);
                break;
              }
            case ConfigManager.protocolDice.md5Text:
              {
                var _info8 = data.Data;
                this.emit(DiceGameEvent.UPDATE_MD5, _info8);
                break;
              }
            case ConfigManager.protocolDice.history:
              {
                var _info9 = data.Data;
                this.history = _info9;
                this.emit(DiceGameEvent.UPDATE_HISTORY, _info9);
                break;
              }
            case ConfigManager.protocolDice.sendShortCut:
              {
                var _info10 = data.Data;
                this.emit(DiceGameEvent.CHAT, _info10);
                break;
              }
          }
        };
        _createClass(DiceGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }, {
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
        return DiceGameProxyMgr;
      }(ProxyBase);
      var DiceGameProxy = exports('default', new DiceGameProxyMgr("DiceGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DiceScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './DiceProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, isValid, error, instantiate, Component, NetManager, ViewManager, DiceGameProxy, DiceGameEvent, Common, MainManager;
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
      isValid = module.isValid;
      error = module.error;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      DiceGameProxy = module.default;
      DiceGameEvent = module.DiceGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "706dbeoAStO1JCopJXIEmIj", "DiceScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var DiceScene = exports('default', (_dec = ccclass("DiceScene"), _dec2 = menu("game/dicegame/DiceScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DiceScene, _Component);
        function DiceScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // @property(cc.Prefab)
          //    // pre_desk: cc.Prefab = null;
          _initializerDefineProperty(_this, "pre_room", _descriptor, _assertThisInitialized(_this));
          _this.node_desk = null;
          _this.node_room = null;
          _this.roomLoadVersion = 0;
          _this.roomLoading = false;
          return _this;
        }
        var _proto = DiceScene.prototype;
        _proto.onLoad = function onLoad() {
          // this.init();
          this.createRoom();
        };
        _proto.createDesk = function createDesk() {
          // if (this.node_desk) {
          //     return;
          // }
          // let node = cc.instantiate(this.pre_desk);
          // this.node.addChild(node);
          // this.node_desk = node;
        };
        _proto.createRoom = function createRoom() {
          var _this2 = this;
          if (this.node_room || this.roomLoading) {
            return;
          }
          var bundle = DiceGameProxy.bundle;
          this.roomLoading = true;
          var version = ++this.roomLoadVersion;
          bundle.load("prefab/DiceGame", function (err, asset) {
            // 离开或禁用场景后，旧加载请求不能再创建房间或发送入房协议。
            if (!isValid(_this2, true) || version !== _this2.roomLoadVersion) return;
            _this2.roomLoading = false;
            if (err || !asset) {
              error("DiceGame 房间加载失败", err);
              return;
            }
            var node = instantiate(asset);
            _this2.node_room = node;
            _this2.node.addChild(node);
            NetManager.instance.sendOnlineData(ConfigManager.protocolDice.enterRoom, {});
          });
        }
        //   init() {
        //     this.reset();
        //   }
        ;

        _proto.onEvent = function onEvent() {
          var _this3 = this;
          DiceGameProxy.on(DiceGameEvent.ENTER_ROOM, function () {
            // if (this.node_desk) {
            //   this.node_desk.removeFromParent();
            //   this.node_desk.destroy();
            //   this.node_desk = null;
            // }
            _this3.createRoom();
          }, this);
          DiceGameProxy.on(DiceGameEvent.LEAVE_ROOM, function () {
            _this3.roomLoadVersion++;
            _this3.roomLoading = false;
            DiceGameProxy.targetOff(_this3);
            console.time("bundle.onLoadHall");
            Common.showWait();
            //        //退到大厅
            Common.returnToHall(_this3, "DiceGame");
          }, this);
        }
        //   reset(): void {}
        ;

        _proto.gameShow = function gameShow() {
          Common.closeWait();
          // this.init();
          if (NetManager.instance.netState) {
            NetManager.instance.waitServiceSendData();
          }
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
              NetManager.instance.sendOnlineData(ConfigManager.protocolDice.enterRoom, {
                action: "HD_Enter",
                tableId: DiceGameProxy.roomInfo.tableInfo.tableId
              });
            }
          });
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.onEnable = function onEnable() {
          this.onEvent();
          this.createRoom();
          DiceGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          this.roomLoadVersion++;
          this.roomLoading = false;
          DiceGameProxy.targetOff(this);
          DiceGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {
          DiceGameProxy.targetOff(this);
        };
        return DiceScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec3], {
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

(function(r) {
  r('virtual:///prerequisite-imports/DiceGame', 'chunks:///_virtual/DiceGame'); 
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