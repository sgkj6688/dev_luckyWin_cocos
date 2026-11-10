System.register("chunks:///_virtual/Lh2ChipRect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, tween, UIOpacity, isValid, Tween, Component, Common, MainManager;
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
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      isValid = module.isValid;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "777659uG3JCor/Dx8yhhLFj", "Lh2ChipRect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var Lhgame2ChipRect = exports('default', (_dec = ccclass("Lh2ChipRect"), _dec2 = menu("game/lhgame2/Lhgame2ChipRect"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lhgame2ChipRect, _Component);
        function Lhgame2ChipRect() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_otherChip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selfChip", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_otherChip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rate", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_hightLight", _descriptor5, _assertThisInitialized(_this));
          _this._selfChipCount = 0;
          _this._totalChipCount = 0;
          _this._pos = "0";
          return _this;
        }
        var _proto = Lhgame2ChipRect.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          gts.UI.OnClick(this.node, function () {
            EventManager.emit(ConfigManager.protocolLh.bet, _this2._pos);
          }, this);
          this.reset();
        };
        _proto.setPos = function setPos(pos) {
          this._pos = pos;
        };
        _proto.showHighLight = function showHighLight() {
          this.stopHighLight();
          this.node_hightLight.active = true;
          tween(this.node_hightLight.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.stopHighLight = function stopHighLight() {
          // 父组件销毁时子节点可能已销毁，不能仅凭引用非空访问组件。
          if (!isValid(this.node_hightLight, true)) return;
          var opacity = this.node_hightLight.getComponent(UIOpacity);
          if (opacity) {
            Tween.stopAllByTarget(opacity);
            if (isValid(opacity, true)) opacity.opacity = 255;
          }
          this.node_hightLight.active = false;
        };
        _proto.setTotalBet = function setTotalBet(count) {
          if (typeof count == "string") {
            count = parseInt(count);
          }
          this.txt_otherChip.string = Common.ChangeMoneyShow(count, 2);
          this._totalChipCount = count;
        };
        _proto.addTotalBet = function addTotalBet(count) {
          this._totalChipCount += count;
          this.setTotalBet(this._totalChipCount);
        };
        _proto.setSelfBet = function setSelfBet(count) {
          this.txt_selfChip.node.active = count > 0;
          this.txt_selfChip.string = Common.ChangeMoneyShow(count, 2);
          this._selfChipCount = count;
        };
        _proto.addSelfBet = function addSelfBet(count) {
          this._selfChipCount += count;
          this.setSelfBet(this._selfChipCount);
        };
        _proto.setRate = function setRate(str) {
          this.txt_rate.string = str;
        };
        _proto.reset = function reset() {
          this.setTotalBet(0);
          this.setSelfBet(0);
          this.stopHighLight();
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          this.stopHighLight();
        };
        _proto.onDestroy = function onDestroy() {
          this.stopHighLight();
        };
        _createClass(Lhgame2ChipRect, [{
          key: "pos",
          get: function get() {
            return this._pos;
          }
        }, {
          key: "selfBet",
          get: function get() {
            return this._selfChipCount;
          }
        }]);
        return Lhgame2ChipRect;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_otherChip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_selfChip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_otherChip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_rate", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_hightLight", [_dec7], {
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

System.register("chunks:///_virtual/Lh2ChipRectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Lh2ChipRect.ts', './LhGame2Proxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Component, Lhgame2ChipRect, LhGame2Proxy;
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
      Component = module.Component;
    }, function (module) {
      Lhgame2ChipRect = module.default;
    }, function (module) {
      LhGame2Proxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ca1b5L+3shK5bT5DueN3hju", "Lh2ChipRectMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Lhgame2ChipRectMgr = exports('default', (_dec = ccclass("Lh2ChipRectMgr"), _dec2 = menu("game/lhgame2/Lhgame2ChipRectMgr"), _dec3 = property(Lhgame2ChipRect), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lhgame2ChipRectMgr, _Component);
        function Lhgame2ChipRectMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "chipList", _descriptor, _assertThisInitialized(_this));
          _this.rectMap = {
            1: null,
            2: null,
            3: null
          };
          _this.lastBets = {
            "1": 0,
            "2": 0,
            "3": 0
          };
          return _this;
        }
        var _proto = Lhgame2ChipRectMgr.prototype;
        _proto.onLoad = function onLoad() {
          for (var i = 0; i < 3; i++) {
            var pos = "" + (i + 1);
            this.rectMap[pos] = this.chipList[i];
            this.chipList[i].setPos(pos);
          }
        };
        _proto.start = function start() {
          //        // this.scheduleOnce(() => {
          //        //     let contentEx = this.node.getComponent(ContentEx);
          //        //     if (contentEx) {
          //        //         contentEx.reload();
          //        //         contentEx.organize();
          //        //     }
          //        // });
        };
        _proto.updateTotalBet = function updateTotalBet(data) {
          for (var key in data) {
            if (this.rectMap[key]) {
              this.rectMap[key].setTotalBet(data[key]);
            }
          }
        };
        _proto.updateSelfBet = function updateSelfBet(data) {
          for (var key in data) {
            if (this.rectMap[key]) {
              this.rectMap[key].setSelfBet(data[key]);
            }
          }
        };
        _proto.showHighLight = function showHighLight(data) {
          if (this.rectMap[data]) {
            this.rectMap[data].showHighLight();
          }
        }
        //    //获得所有未中奖节点
        ;

        _proto.getReturnChipParents = function getReturnChipParents(data) {
          var nodes = [];
          for (var _iterator = _createForOfIteratorHelperLoose(this.chipList), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            var pos = i.pos;
            var has = false;
            if (data == pos) {
              has = true;
            }
            if (!has) nodes.push(i.node_otherChip);
          }
          return nodes;
        };
        _proto.getChipParent = function getChipParent(pos) {
          if (this.rectMap[pos]) {
            return this.rectMap[pos].node_otherChip;
          }
          return null;
        };
        _proto.setRate = function setRate() {
          //        // console.log(" SdGameProxy.oddList", SdGameProxy.oddList, this.rectMap);
          if (LhGame2Proxy.oddList) {
            var data = LhGame2Proxy.oddList;
            for (var key in data) {
              if (this.rectMap[key]) {
                var curRate = Math.floor(data[key] * 100 / 100) / 100;
                this.rectMap[key].setRate("" + curRate);
              }
            }
          }
        };
        _proto.addBetCount = function addBetCount(pos, bet, isSelf) {
          if (isSelf === void 0) {
            isSelf = false;
          }
          var chipRect = this.rectMap[pos];
          if (chipRect) {
            if (isSelf) {
              chipRect.addSelfBet(bet);
            }
            chipRect.addTotalBet(bet);
          }
        };
        _proto.rememberBet = function rememberBet() {
          var needUpdate = false;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.chipList), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            if (_i.selfBet > 0) {
              needUpdate = true;
              break;
            }
          }
          if (needUpdate) {
            for (var i = 0; i < 3; i++) {
              this.lastBets[i + 1] = this.chipList[i].selfBet;
            }
          }
        };
        _proto.reset = function reset() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.chipList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            i.reset();
          }
        };
        _proto.resetSelftBet = function resetSelftBet() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.chipList), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            i.setSelfBet(0);
          }
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _createClass(Lhgame2ChipRectMgr, [{
          key: "bets",
          get: function get() {
            var maps = {
              "1": this.rectMap["1"].selfBet,
              "2": this.rectMap["2"].selfBet,
              "3": this.rectMap["3"].selfBet
            };
            return maps;
          }
        }]);
        return Lhgame2ChipRectMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "chipList", [_dec3], {
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

System.register("chunks:///_virtual/Lh2Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhGame2Proxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, LhGame2Proxy;
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
      LhGame2Proxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "5a187kFXxBO1Z+D9iMipJVB", "Lh2Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Lh2Help = exports('default', (_dec = ccclass("Lh2Help"), _dec2 = menu("game/lhgame2/Lh2Help"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Lh2Help, _Component);
        function Lh2Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_odd1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_rates", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Lh2Help.prototype;
        _proto.onLoad = function onLoad() {
          //        // console.log("oddList", LhGame2Proxy.oddList);

          if (LhGame2Proxy.oddList) {
            for (var key in LhGame2Proxy.oddList) {
              var num = parseInt(key) - 1;
              this.txt_rates[num].string = "" + LhGame2Proxy.oddList[key] / 100;
            }
            if (LhGame2Proxy.oddList["1"]) {
              this.txt_odd1.string = "" + LhGame2Proxy.oddList["1"] / 100;
            }
            if (LhGame2Proxy.oddList["3"]) {
              this.txt_odd2.string = "" + LhGame2Proxy.oddList["3"] / 100;
            }
          }
        };
        return Lh2Help;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_odd1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_rates", [_dec5], {
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

System.register("chunks:///_virtual/LhGame2", ['./Lh2ChipRect.ts', './Lh2ChipRectMgr.ts', './Lh2Help.ts', './LhGame2Def.ts', './LhGame2Proxy.ts', './LhGame2Record.ts', './LhGame2Record2.ts', './LhPlayers2.ts', './LhRoom2.ts', './LhScene2.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LhGame2Def.ts", ['cc', './LhGame2Proxy.ts'], function (exports) {
  var cclegacy, sp, LhGame2Proxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sp = module.sp;
    }, function (module) {
      LhGame2Proxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e6195D91kBNTIj49JvKL72H", "LhGame2Def", undefined);
      var LhTableType = exports('LhTableType', /*#__PURE__*/function (LhTableType) {
        LhTableType[LhTableType["NORMAL"] = 1] = "NORMAL";
        LhTableType[LhTableType["MD5"] = 2] = "MD5";
        LhTableType[LhTableType["MD5_PRIZE"] = 3] = "MD5_PRIZE";
        return LhTableType;
      }({}));
      var LhGame2Def = exports('LhGame2Def', /*#__PURE__*/function () {
        function LhGame2Def() {}
        LhGame2Def.loadHeguanByType = function loadHeguanByType(node, tableId) {
          return new Promise(function (resolve, reject) {
            var name = "";
            var id = tableId.slice(2, 3);
            if (id == "0") {
              name = "spine/heguan15";
            } else if (id == "1") {
              name = "spine/heguan16";
            } else {
              name = "spine/heguan17";
            }
            var spine = node;
            var bundle = LhGame2Proxy.bundle;
            bundle.load(name, sp.SkeletonData, function (err, asset) {
              if (err) {
                reject();
                return;
              }
              spine.skeletonData = asset;
              resolve();
            });
          });
        };
        return LhGame2Def;
      }());
      LhGame2Def.MAX_CHIP_REWARD = 50;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhGame2Proxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "0ddd422bnlGXrMpf91jneOO", "LhGame2Proxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhGame2Event = exports('LhGame2Event', /*#__PURE__*/function (LhGame2Event) {
        LhGame2Event["ENTER_ROOM"] = "enterRoom";
        LhGame2Event["LEAVE_ROOM"] = "leaveRoom";
        LhGame2Event["UPDATE_PLAYER_LIST"] = "playerList";
        LhGame2Event["UPDATE_TABLE"] = "updateTable";
        LhGame2Event["UPDATE_USER_LIST"] = "userList";
        LhGame2Event["CHAT"] = "chat";
        LhGame2Event["BET"] = "doingBet";
        LhGame2Event["UPDATE_BET"] = "updateBet";
        LhGame2Event["UPDATE_STATE"] = "updateState";
        LhGame2Event["UPDATE_ROOM"] = "updateRoom";
        LhGame2Event["UPDATE_MY_INFO"] = "updateMyInfo";
        LhGame2Event["RESULT"] = "result";
        LhGame2Event["UPDATE_MD5"] = "updateMD5";
        LhGame2Event["UPDATE_HISTORY"] = "updateHistory";
        LhGame2Event["CHECKOUT"] = "checkout";
        return LhGame2Event;
      }({}));
      var LhGame2State = exports('LhGame2State', /*#__PURE__*/function (LhGame2State) {
        LhGame2State[LhGame2State["NORMAL"] = 0] = "NORMAL";
        LhGame2State[LhGame2State["START"] = 1] = "START";
        LhGame2State[LhGame2State["BET"] = 2] = "BET";
        LhGame2State[LhGame2State["RESULT"] = 3] = "RESULT";
        return LhGame2State;
      }({}));
      /**
       * 龙虎数据代理
       */
      var LhGame2ProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(LhGame2ProxyMgr, _ProxyBase);
        function LhGame2ProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          /**
           * 在座玩家列表
           */
          _this.playerList = void 0;
          _this.resultData = null;
          /**桌子列表 */
          _this.tableList = void 0;
          _this.oddList = null;
          //赔率
          /**房间内信息 */
          _this.roomInfo = void 0;
          _this.history = void 0;
          _this.playerCount = 0;
          _this.wsEvents = [ConfigManager.protocolLh2.getInfo, ConfigManager.protocolLh2.deskinfo, ConfigManager.protocolLh2.enterRoom, ConfigManager.protocolLh2.audoEnter, ConfigManager.protocolLh2.startGame, ConfigManager.protocolLh2.updatePlayerNum, ConfigManager.protocolLh2.getPlayerList, ConfigManager.protocolLh2.sendShortCut, ConfigManager.protocolLh2.doingBet, ConfigManager.protocolLh2.updateRoomStatus,
          // ConfigManager.protocolLh2.updatePlayerStatus,
          ConfigManager.protocolLh2.openResult, ConfigManager.protocolLh2.betInfo, ConfigManager.protocolLh2.exitRoom, ConfigManager.protocolLh2.md5Text, ConfigManager.protocolLh2.history, ConfigManager.protocolLh2.checkout];
          _this.gameState = LhGame2State.START;
          _this.gameEventID = null;
          _this.gameDownTime = 0;
          _this.betTime = 1;
          _this.BUNDLE = "LhGame2";
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
        var _proto = LhGame2ProxyMgr.prototype;
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
              this.emit(LhGame2Event.LEAVE_ROOM);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.protocolLh2.getInfo:
              if (!data.Data) {
                break;
              }
              this.tableList = data.Data;
              this.emit(LhGame2Event.UPDATE_TABLE);
              break;
            case ConfigManager.protocolLh2.audoEnter:
            case ConfigManager.protocolLh2.enterRoom:
              {
                var info = data.Data;
                this.oddList = info.odds;
                this.roomInfo = info;
                this.gameState = info.tableInfo.state;
                this.gameDownTime = info.tableInfo.countDown;
                this.betTime = info.tableInfo.betTime;
                this.playerCount = info.tableInfo.playNum;
                this.playerList = info.tableInfo.seatPlay;
                this.emit(LhGame2Event.ENTER_ROOM);
                break;
              }
            case ConfigManager.protocolLh2.startGame:
              {
                var _info = data.Data;
                this.oddList = _info.odds;
                this.roomInfo = _info;
                this.gameState = _info.tableInfo.state;
                this.gameDownTime = _info.tableInfo.countDown;
                this.playerCount = _info.tableInfo.playNum;
                this.playerList = _info.tableInfo.seatPlay;
                this.emit(LhGame2Event.UPDATE_ROOM);
                break;
              }
            case ConfigManager.protocolLh2.updateRoomStatus:
              {
                var _info2 = data.Data;
                this.gameState = _info2.tableState;
                this.gameEventID = _info2.eventID;
                this.gameDownTime = _info2.countDown;
                this.emit(LhGame2Event.UPDATE_STATE);
                break;
              }
            case ConfigManager.protocolLh2.updatePlayerNum:
              {
                var _info3 = data.Data;
                this.playerCount = _info3.playNum;
                this.playerList = _info3.seatPlay;
                this.emit(LhGame2Event.UPDATE_PLAYER_LIST, _info3);
                break;
              }
            case ConfigManager.protocolLh2.getPlayerList:
              {
                this.emit(LhGame2Event.UPDATE_USER_LIST, data.Data);
                break;
              }
            case ConfigManager.protocolLh2.exitRoom:
              {
                this.emit(LhGame2Event.LEAVE_ROOM);
                break;
              }
            case ConfigManager.protocolLh2.doingBet:
              {
                var _info4 = data.Data;
                this.emit(LhGame2Event.BET, _info4);
                break;
              }
            case ConfigManager.protocolLh2.betInfo:
              {
                var _info5 = data.Data;
                this.emit(LhGame2Event.UPDATE_BET, _info5);
                break;
              }
            case ConfigManager.protocolLh2.openResult:
              {
                var _info6 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.openNum = _info6.openNum;
                this.resultData.prizeResults = _info6.prizeResults;
                this.emit(LhGame2Event.RESULT, _info6);
                break;
              }
            case ConfigManager.protocolLh2.checkout:
              {
                var _info7 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.seatPrize = _info7.seatPrize;
                this.resultData.userPrize = _info7.userPrize;
                this.emit(LhGame2Event.CHECKOUT, _info7);
                break;
              }
            case ConfigManager.protocolLh2.md5Text:
              {
                var _info8 = data.Data;
                this.emit(LhGame2Event.UPDATE_MD5, _info8);
                break;
              }
            case ConfigManager.protocolLh2.history:
              {
                var _info9 = data.Data;
                this.history = _info9;
                this.emit(LhGame2Event.UPDATE_HISTORY, _info9);
                break;
              }
            case ConfigManager.protocolLh2.sendShortCut:
              {
                var _info10 = data.Data;
                this.emit(LhGame2Event.CHAT, _info10);
                break;
              }
          }
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          // if (LhGameProxy._curCountDown <= 3) {
          //     Common.showTip(i18n.lang.disableBet);
          //     return false;
          // }
          // NetManager.instance.sendOnlineData(LhGameProxy.serverID + "/" + ConfigManager.protocolLh2.doingBet.split("/")[1], {
          //     pos: pos,
          //     num: num,
          //     action: "HD_XiaZhu",
          // });
          // return true;
        };
        _createClass(LhGame2ProxyMgr, [{
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
        return LhGame2ProxyMgr;
      }(ProxyBase);
      var LhGame2Proxy = exports('default', new LhGame2ProxyMgr("LhGame2Proxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhGame2Record.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './LhGame2Proxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, ProgressBar, SpriteFrame, Node, Sprite, Component, ProxyMgr, LhGame2Proxy, LhGame2Event;
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
      ProgressBar = module.ProgressBar;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      LhGame2Proxy = module.default;
      LhGame2Event = module.LhGame2Event;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "54ec9XxPJNI07UJ4H0eOeHH", "LhGame2Record", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhGame2Record = exports('default', (_dec = ccclass("LhGame2Record"), _dec2 = menu("game/lhgame2/LhGame2Record"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(ProgressBar), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(SpriteFrame), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhGame2Record, _Component);
        function LhGame2Record() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "txt_hu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_long", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_ping", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pro_count", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_percentHu", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_percentLong", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrames", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_list", _descriptor8, _assertThisInitialized(_this));
          _this.list = [];
          return _this;
        }
        var _proto = LhGame2Record.prototype;
        _proto.onLoad = function onLoad() {
          for (var i = 0; i < 90; i++) {
            var node = this.createNode();
            this.node_list.addChild(node);
            node.active = false;
            this.list.push(node);
          }
        };
        _proto.start = function start() {
          LhGame2Proxy.on(LhGame2Event.UPDATE_HISTORY, this.onUpdate, this);
          var data = LhGame2Proxy.history;
          this.setData(data);
        };
        _proto.setData = function setData(data) {
          this.showHistory(data);
        };
        _proto.onUpdate = function onUpdate(data) {
          this.setData(data);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          ProxyMgr.close(this);
        };
        _proto.createNode = function createNode() {
          var node = new Node();
          node.addComponent(Sprite);
          return node;
        };
        _proto.showHistory = function showHistory(result) {
          if (!result || result.length == 0) {
            this.node_list.destroyAllChildren();
            return;
          }
          var tie = 0;
          var longwin = 0;
          var huwin = 0;
          var length = result.length;
          if (length > 90) {
            length = 90;
          }
          for (var i = 0; i < length; i++) {
            var item = result[length - 1 - i];
            var other = Math.floor(i / 15);
            var start = i;
            if (other % 2 == 0) {
              start = (other * 2 + 1) * 15 - 1 - i;
            }
            var child = this.list[start];
            child.active = true;
            child.getComponent(Sprite).spriteFrame = this.spriteFrames[parseInt(item) - 1];
            if (parseInt(item) == 1) {
              longwin++;
            } else if (parseInt(item) == 2) {
              huwin++;
            } else {
              tie++;
            }
          }
          this.txt_long.string = "" + longwin;
          this.txt_hu.string = "" + huwin;
          this.txt_ping.string = "" + tie;
          this.txt_percentHu.string = Math.round(100 * huwin / length) + "%";
          this.txt_percentLong.string = Math.round(100 * longwin / length) + "%";
          this.pro_count.progress = huwin / (huwin + longwin);
        }
        //    // update (dt) {}
        //    // onDestroy() {
        //    // }
        ;

        return LhGame2Record;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_hu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_long", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_ping", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pro_count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_percentHu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_percentLong", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrames", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_list", [_dec10], {
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

System.register("chunks:///_virtual/LhGame2Record2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, find, view, v3, Label, instantiate, color, Component, NetManager, Common, MainManager;
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
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4e99b5FrK5P4IPJw9ChRx3h", "LhGame2Record2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var GameRecordLayer = exports('default', (_dec = ccclass("LhGame2Record2"), _dec2 = menu("game/lhgame2/GameRecordLayer"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameRecordLayer, _Component);
        function GameRecordLayer() {
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
        var _proto = GameRecordLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.next_btn = find("Canvas/gameRecordLayer/bg/next_btn");
          this.before_btn = find("Canvas/gameRecordLayer/bg/before_btn");
        };
        _proto.start = function start() {
          var size = view.getVisibleSize();
          if (!Common.checkStandard()) {
            this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 6;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
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
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
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
          find("Canvas/gameRecordLayer/bg/content_bg/page").getComponent(Label).string = "Trang:" + this._curPage;
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

            //            // let bg = cc.find("bg", item);
            //            // bg.active = i % 2 == 1;

            var date = Common.getTimeFormat(sdata.CreateAt);
            //            // item.getChildByName("bg").active = i % 2 == 1;
            item.getChildByName("lbl_date").getComponent(Label).string = date.date;
            item.getChildByName("lbl_time").getComponent(Label).string = date.time;
            item.getChildByName("lbl_result").getComponent(Label).string = Common.numFormat(sdata.Income);
            if (sdata.Income > 0) {
              item.getChildByName("lbl_result").getComponent(Label).string = "+" + item.getChildByName("lbl_result").getComponent(Label).string;
            }
            item.getChildByName("lbl_result").getComponent(Label).color = sdata.Income > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
            item.getChildByName("lbl_bet").getComponent(Label).string = Common.numFormat(sdata.BetAmount);
            item.getChildByName("lbl_num").getComponent(Label).string = sdata.GameNo;

            //            //改为开奖结果
            var strResult = Common.getRecordResult(sdata);
            item.getChildByName("lbl_gold").getComponent(Label).string = sdata.GameType == "cardLieng" ? "-" : strResult;
            //            // let lbl_num = cc.find("lbl_num", item).getComponent(cc.Label); //期号
            //            // // lbl_num.string = tempData.GameNo;
            //            // lbl_num.string = Common.setGameNo(tempData.GameNo);

            //            // let lbl_gold = cc.find("lbl_gold", item).getComponent(cc.Label); //改为开奖结果
            //            // let strResult = Common.getRecordResult(tempData);
            //            // lbl_gold.string = this._gameType == "cardLieng" ? "-" : strResult;

            //            // let lbl_time = cc.find("lbl_time", item).getComponent(cc.Label); //下注时间
            //            // let lbl_date = cc.find("lbl_date", item).getComponent(cc.Label); //下注时间
            //            // let date = Common.getTimeFormat(tempData.CreateAt);
            //            // lbl_time.string = date.time;
            //            // lbl_date.string = date.date;

            //            // let lbl_bet = cc.find("lbl_bet", item).getComponent(cc.Label); //底注
            //            // lbl_bet.string = "" + Common.numFormat(tempData.BetAmount);

            //            // let lbl_result = cc.find("lbl_result", item).getComponent(cc.Label); //盈利
            //            // let str: string = "";
            //            // if (tempData.Income > 0) {
            //            //     str = "+" + Common.numFormat(tempData.Income);
            //            //     lbl_result.node.color = cc.color(255, 0, 0, 255);
            //            // } else if (tempData.Income <= 0) {
            //            //     str = "" + Common.numFormat(tempData.Income);
            //            //     lbl_result.node.color = cc.color(0x68, 0xf5, 0x01, 255);
            //            // }
            //            // lbl_result.string = str;
          }
        };

        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        return GameRecordLayer;
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

System.register("chunks:///_virtual/LhPlayers2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './LhGame2Proxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Label, Button, v2, Tween, find, Component, tween, v3, DataManager, UserKey, LhGame2Proxy, Common;
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
      Label = module.Label;
      Button = module.Button;
      v2 = module.v2;
      Tween = module.Tween;
      find = module.find;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      LhGame2Proxy = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "3a00975cQBDppEDbcI8qIV0", "LhPlayers2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhPlayers2 = exports('default', (_dec = ccclass("LhPlayers2"), _dec2 = menu("game/lhgame2/LhPlayers2"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhPlayers2, _Component);
        function LhPlayers2() {
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
        var _proto = LhPlayers2.prototype;
        //    ///////////////////////////////////////////////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.init();
        }
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
            seat_bg.getChildByName("number").getComponent(Label).string = (i + 1).toString();
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
          var deskPlayer = this.getDeskPlayerByPlayerList(LhGame2Proxy.playerList);

          //        // console.log("LhGameProxy.playerList", LhGameProxy.playerList);
          this.updateTablePlayer(deskPlayer);
        };
        _proto.showPlayers = function showPlayers() {
          var _this2 = this;
          var deskPlayer = this.getDeskPlayerByPlayerList(LhGame2Proxy.playerList);
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
                x: _this2.players[lastindex].position.x,
                y: _this2.players[lastindex].position.y
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
        return LhPlayers2;
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

System.register("chunks:///_virtual/LhRoom2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './UIClock.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './BlackWordProxy.ts', './ChipProxy.ts', './ChatProxy.ts', './ChipItem.ts', './ChipSmall.ts', './PlayerInfo.ts', './UserListLayer.ts', './Lh2ChipRectMgr.ts', './LhGame2Def.ts', './LhGame2Proxy.ts', './LhPlayers2.ts', './Common.ts', './LhGame2Record2.ts', './MainManager.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, _createClass, cclegacy, _decorator, Button, Node, Label, ScrollView, Prefab, SpriteFrame, AudioClip, SpriteAtlas, sp, isValid, instantiate, UITransform, NodePool, resources, error, find, v3, Sprite, Tween, tween, UIOpacity, Vec3, sys, AnimationClip, Animation, TweenSystem, Component, i18n, ProxyMgr, GUtil, UIClock, AudioManager, DataManager, UserProxyEvent, UserKey, NetManager, ViewManager, BlackWordProxy, ChipProxy, ChipEvent, ChipType, ChatProxy, ChatProxyEvent, ChipItem, ChipSmall, PlayerInfo, UserListLayer, Lhgame2ChipRectMgr, LhGame2Def, LhGame2Proxy, LhGame2State, LhGame2Event, LhPlayers2, Common, GameRecordLayer, MainManager, I18nLocal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      AudioClip = module.AudioClip;
      SpriteAtlas = module.SpriteAtlas;
      sp = module.sp;
      isValid = module.isValid;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      NodePool = module.NodePool;
      resources = module.resources;
      error = module.error;
      find = module.find;
      v3 = module.v3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Vec3 = module.Vec3;
      sys = module.sys;
      AnimationClip = module.AnimationClip;
      Animation = module.Animation;
      TweenSystem = module.TweenSystem;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      UIClock = module.default;
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
      ChipProxy = module.default;
      ChipEvent = module.ChipEvent;
      ChipType = module.ChipType;
    }, function (module) {
      ChatProxy = module.default;
      ChatProxyEvent = module.ChatProxyEvent;
    }, function (module) {
      ChipItem = module.default;
    }, function (module) {
      ChipSmall = module.default;
    }, function (module) {
      PlayerInfo = module.default;
    }, function (module) {
      UserListLayer = module.default;
    }, function (module) {
      Lhgame2ChipRectMgr = module.default;
    }, function (module) {
      LhGame2Def = module.LhGame2Def;
    }, function (module) {
      LhGame2Proxy = module.default;
      LhGame2State = module.LhGame2State;
      LhGame2Event = module.LhGame2Event;
    }, function (module) {
      LhPlayers2 = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GameRecordLayer = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25;
      cclegacy._RF.push({}, "e9e80MdzHBP/ZXxauH1FLPt", "LhRoom2", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhRoom2 = exports('default', (_dec = ccclass("LhRoom2"), _dec2 = menu("game/lhgame2/LhRoom2"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(ScrollView), _dec11 = property(Prefab), _dec12 = property(SpriteFrame), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(Node), _dec16 = property(SpriteAtlas), _dec17 = property(sp.Skeleton), _dec18 = property(Prefab), _dec19 = property(LhPlayers2), _dec20 = property(UIClock), _dec21 = property(Lhgame2ChipRectMgr), _dec22 = property(sp.Skeleton), _dec23 = property(sp.Skeleton), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhRoom2, _Component);
        function LhRoom2() {
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
          _initializerDefineProperty(_this, "scrollViewCM", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bigCM", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lhSp", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgMusic", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yxxSound", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "kajiang", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_vs", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_smallChip", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playersMgr", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clock", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipMgr", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_long", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_hu", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_card1Parent", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_card2Parent", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_card1", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_card2", _descriptor25, _assertThisInitialized(_this));
          _this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: []
          };
          //    /**[ztype:bet] 上一局下注记录 */
          _this.betselfLast = [0, 0, 0];
          //    /**[ztype:bet] 当前局下注记录 每局清零 */
          _this.betself = [0, 0, 0];
          //    /** 总下注*/
          _this.betTotal = [0, 0, 0];
          _this.betselfList = [];
          _this.betPublicList = [];
          //{item:,yzType:1}
          _this.createBetList = [];
          _this.useBetList = [];
          // 当前筹码类型
          _this._buddle = void 0;
          _this._chipPool = void 0;
          _this.chipPoolReady = false;
          _this.chipPoolLoading = false;
          _this.pendingChipBets = [];
          _this._curTablePlayer = null;
          //    // _curCountDown = 0;
          _this._curCountDown = 0;
          _this._curTotalTime = 0;
          _this.haveplay = false;
          _this.djsMId = void 0;
          _this._firstUpdate = true;
          _this._chip = void 0;
          _this._isReturnBack = false;
          _this._curTimes = 0;
          return _this;
        }
        var _proto = LhRoom2.prototype;
        _proto.onLoad = function onLoad() {
          this._buddle = LhGame2Proxy.bundle;
          this.initChipPool();
          this._isReturnBack = false;
          this.initEvent();
          this.initGame();
        };
        _proto.start = function start() {
          //        //添加聊天
          this.addChatView();
          this.initSelfInfo();
        };
        _proto.addChatView = function addChatView() {
          var _this2 = this;
          LhGame2Proxy.bundle.load("prefab/chatLayer", Prefab, function (err, prefab) {
            if (!isValid(_this2, true)) return;
            if (!err && prefab) {
              var Node_chat = instantiate(prefab);
              Node_chat.getComponent(UITransform).priority = 900;
              Node_chat.parent = _this2.node;
              Node_chat.emit("chatInit", "cardLhd2", "");
            }
          });
        };
        _proto.onDestroy = function onDestroy() {
          this.pendingChipBets = [];
          this._chipPool.clear();
        };
        _proto.getChipNode = function getChipNode(chipInfo) {
          if (this._chipPool.size() > 1) {
            return this._chipPool.get(chipInfo);
          }
          var item = this._chipPool.get(chipInfo);
          if (!item) {
            return null;
          }
          for (var i = 0; i < 10; i++) {
            var newNode = instantiate(item);
            this._chipPool.put(newNode);
          }
          return item;
        };
        _proto.initChipPool = function initChipPool() {
          var _this3 = this;
          if (this.chipPoolReady || this.chipPoolLoading) return;
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          this.chipPoolLoading = true;
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            if (!isValid(_this3, true)) return;
            _this3.chipPoolLoading = false;
            if (err || !prefab) {
              error("LhGame2 筹码资源加载失败", err);
              return;
            }
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              _this3._chipPool.put(newNode);
            }
            _this3.chipPoolReady = true;
            var pending = _this3.pendingChipBets;
            _this3.pendingChipBets = [];
            // 新快照和离开下注阶段都会清空旧请求；这里只补显示，不重复累加下注金额。
            if (LhGame2Proxy.gameState == LhGame2State.BET) {
              for (var _iterator = _createForOfIteratorHelperLoose(pending), _step; !(_step = _iterator()).done;) {
                var config = _step.value;
                _this3.betAni(_extends({}, config, {
                  needAni: false
                }));
              }
            }
          });
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.protocolLh2.bet, this.sendBet, this);

          //        // EventManager.instance.on(ConfigManager.instance.protocolLh2.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.on(ConfigManager.instance.protocolLh2.yxxHaveBet, this.sendBet, this);

          EventManager.on(ConfigManager.protocolLh2.btnPlayerInfo, this.showInfo, this);
          EventManager.on(ConfigManager.protocolLh2.btnPublicInfo, this.showAllPlayerInfo, this);
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连

          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_STATE, this.updateState, this);
          LhGame2Proxy.on(LhGame2Event.ENTER_ROOM, this.updateRoom, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_ROOM, this.updateRoom, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_PLAYER_LIST, this.updatePlayer, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_USER_LIST, this.showPublicInfoByPage, this);
          LhGame2Proxy.on(LhGame2Event.BET, this.doingBet, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_BET, this.updateBet, this);
          LhGame2Proxy.on(LhGame2Event.RESULT, this.showResult, this);
          LhGame2Proxy.on(LhGame2Event.CHECKOUT, this.checkOut, this);
          LhGame2Proxy.on(LhGame2Event.UPDATE_HISTORY, this.updatePath, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            _this4.showPlayerChat(data.msg);
          }, this);
          LhGame2Proxy.on(LhGame2Event.ENTER_ROOM, function () {
            NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.startGame, {});
          }, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            // if (LhGameProxy.gameState == LhGame2State.BET) {
            //     let gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            //     this.selfGold.string = Common.numFormat(gold);
            // }
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this4.selfGold.string = Common.numFormat(gold);
          }, this);
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            Common.showLog("前台");
            if (NetManager.instance._connect == true) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.enterRoom, {
                action: "HD_Enter",
                tableId: LhGame2Proxy.roomInfo.tableInfo.tableId
              });
            }
          }, 0.1);
        };
        _proto.showInfo = function showInfo(data) {
          if (data == "public") {
            //            //显示全部
            this.showAllPlayerInfo("show");
          } else {
            this.showDeskPlayerInfo(data);
          }
        };
        _proto.showPublicInfoByPage = function showPublicInfoByPage(data) {
          //        // let data: LhGameDef.HD_GetPlayerList = this._model.AllPlayerinfo;

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
          //        // GUtil.openUserList(list);

          Common.loadPopBuddle("prefab/userList", LhGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(UserListLayer).setData(list);
          }, true);
        };
        _proto.showAllPlayerInfo = function showAllPlayerInfo(data) {
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.getPlayerList, {});
        };
        _proto.onClickSelf = function onClickSelf() {
          var item = {
            head: DataManager.instance.getUserDataForKey(UserKey.AVATAR),
            gold: DataManager.instance.getUserDataForKey(UserKey.GOLD),
            name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME)
          };
          //        // GUtil.openPlayer(item);

          Common.loadPopBuddle("prefab/playerInfo", LhGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(PlayerInfo).setData(item);
          }, true);
        };
        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          var i = parseInt(data);
          var player = this.playersMgr.players[i - 1];
          var _loop = function _loop() {
            var user = _step3.value;
            if (user.userId == player.name) {
              var item = {
                head: user.avatar,
                gold: user.yxb,
                name: user.nickName
              };
              //                // GUtil.openPlayer(item);

              Common.loadPopBuddle("prefab/playerInfo", LhGame2Proxy.bundle, function () {}, function (prefab) {
                var node = instantiate(prefab);
                ViewManager.instance.popNodeView(node, true);
                node.getComponent(PlayerInfo).setData(item);
              }, true);
              return 1; // break
            }
          };

          for (var _iterator3 = _createForOfIteratorHelperLoose(LhGame2Proxy.playerList), _step3; !(_step3 = _iterator3()).done;) {
            if (_loop()) break;
          }
        };
        _proto.updateState = function updateState() {
          if (LhGame2Proxy.gameState != LhGame2State.BET) this.pendingChipBets = [];
          if (this.clock) {
            this.clock.hideTime = false;
            this.clock.Open(LhGame2Proxy.gameDownTime + 1);
          }
          switch (LhGame2Proxy.gameState) {
            case LhGame2State.START:
              this.clearAllRoom();
              this.clock.changeColor = false;
              this.fapai();
              break;
            case LhGame2State.BET:
              this.clock.changeColor = true;
              this._curCountDown = LhGame2Proxy.gameDownTime;
              this._curTotalTime = LhGame2Proxy.betTime;
              this.createCountDown();
              break;
            case LhGame2State.RESULT:
              this.clock.changeColor = false;
              this._curCountDown = 0;
              break;
          }
        };
        _proto.fapai = function fapai() {
          var _this5 = this;
          var self = this;
          AudioManager.instance.playOneShot(this.yxxSound[0]);
          var vs = find("gameLayer/vs", this.node);
          vs.active = true;
          this.spine_vs.setAnimation(0, "VS", false);
          this.spine_vs.setCompleteListener(function () {
            _this5.spine_vs.setCompleteListener(null);
            vs.active = false;
            AudioManager.instance.playOneShot(_this5.yxxSound[7]);
          });
          var card1 = this.node_card1;
          var card2 = this.node_card2;
          card1.active = false;
          card2.active = false;
          this.scheduleOnce(function () {
            AudioManager.instance.playOneShot(_this5.yxxSound[7]);
            card1.active = true;
            card1.scale = v3(0.8, 0.8, 1);
            card1.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame("back");
            card2.active = true;
            card2.scale = v3(0.8, 0.8, 1);
            card2.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame("back");
          }, 2);
        };
        _proto.backHall = function backHall() {
          if (this._isReturnBack) {
            return;
          }
          this._isReturnBack = true;
          //        // this.unscheduleAllCallbacks();
          ViewManager.instance.setGameData(null);
          AudioManager.instance.stopAll();
          LhGame2Proxy.emit(LhGame2Event.LEAVE_ROOM);
        };
        _proto.updatePlayer = function updatePlayer() {
          this.playersMgr.playerPublic.getChildByName("number").getComponent(Label).string = "" + LhGame2Proxy.playerCount;
          this.playersMgr.showPlayers();
        };
        _proto.updateRoom = function updateRoom() {
          ChipProxy.initChipList(LhGame2Proxy.roomInfo.baseScoreList);
          this.createChipsList();
          this.chipMgr.setRate();
          this.updatePlayer();
          var data = LhGame2Proxy.roomInfo;
          this.playersMgr.showPlayerCount();
          //        // this.chipMgr.resetSelftBet();
          if (LhGame2Proxy.gameState == LhGame2State.BET) {
            this.initBet();
            var list = data.tableInfo.betList;
            for (var _iterator4 = _createForOfIteratorHelperLoose(list), _step4; !(_step4 = _iterator4()).done;) {
              var bet = _step4.value;
              var json = JSON.parse(bet);
              this.betAni({
                id: json.userId,
                betType: json.betType,
                count: json.betAmount,
                needAni: false
              });
            }
          }
          this.chipMgr.reset();
          this.chipMgr.updateTotalBet(data.tableInfo.pos);
          this.chipMgr.updateSelfBet(data.userInfo.bets);
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.history, {
            tableId: data.tableInfo.tableId,
            size: "120"
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
          this.chipMgr.rememberBet();
          this.chipMgr.reset();
        };
        _proto.initBet = function initBet() {
          this.pendingChipBets = [];
          var keys = Object.keys(this.betList);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var i = _keys[_i];
            for (var j = 0; j < this.betList[i].length; j++) {
              var item = this.betList[i][j].item;
              if (item && item.parent) {
                Tween.stopAllByTarget(item);
                this._chipPool.put(item);
              }
            }
          }
          for (var _i2 = 0; _i2 < this.betselfList.length; _i2++) {
            var _item = this.betselfList[_i2].item;
            if (_item && _item.parent) {
              Tween.stopAllByTarget(_item);
              this._chipPool.put(_item);
            }
          }
          for (var _i3 = 0; _i3 < this.betPublicList.length; _i3++) {
            var _item2 = this.betPublicList[_i3].item;
            if (_item2 && _item2.parent) {
              Tween.stopAllByTarget(_item2);
              this._chipPool.put(_item2);
            }
          }
          for (var _i4 = 0; _i4 < this.createBetList.length; _i4++) {
            var _item3 = this.createBetList[_i4];
            if (_item3 && _item3.parent) {
              Tween.stopAllByTarget(_item3);
              this._chipPool.put(_item3);
            }
          }
          this.betList = {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: []
          };
          this.betselfList = [];
          this.betPublicList = []; //{item:,yzType:1}
          this.createBetList = [];
        };
        _proto.binkNode = function binkNode(node) {
          tween(node.getComponent(UIOpacity)).to(0.3, {
            opacity: 255
          }).to(0.3, {
            opacity: 0
          }).union().repeatForever().start();
        };
        _proto.showResultAni = function showResultAni() {
          var _this6 = this;
          var data = LhGame2Proxy.resultData;
          var nums = data.openNum;
          var type = LhGame2Proxy.roomInfo.tableInfo.tableType;
          //        // if (type != LhTableType.NORMAL) {
          //        //     let original = data.original;
          //        //     this.txt_md5.string = original;
          //        //     this.txt_md5Result.node.active = false;
          //        //     this.txt_md5Key.node.active = true;
          //        // }
          //        // for (let i = 0; i < 4; i++) {
          //        //     let num = nums[i];
          //        //     let index = parseInt(num) - 1;
          //        //     this.saList[i].getComponent(cc.Sprite).spriteFrame = this.saSpriteF[index];
          //        //     this.saList[i].active = true;
          //        //     let txt = this.saList[i].getChildByName("txt");
          //        //     txt.color = index == 0 ? cc.Color.WHITE : cc.Color.BLACK;
          //        // }

          this.chipMgr.showHighLight(LhGame2Proxy.resultData.prizeResults);
          var vs = find("gameLayer/vs", this.node);
          vs.active = true;
          if (LhGame2Proxy.resultData.prizeResults == 1) {
            this.spine_long.setAnimation(0, "long_win", false);
            this.spine_long.addAnimation(0, "long_win", false);
            this.spine_long.addAnimation(0, "long_idle", true);
            this.spine_vs.setAnimation(0, "long_win", false);
            AudioManager.instance.playOneShot(this.yxxSound[4]); // 第一阶段
          } else if (LhGame2Proxy.resultData.prizeResults == 2) {
            this.spine_hu.setAnimation(0, "hu_win", false);
            this.spine_hu.addAnimation(0, "hu_win", false);
            this.spine_hu.addAnimation(0, "hu_idle", true);
            this.spine_vs.setAnimation(0, "hu_win", false);
            AudioManager.instance.playOneShot(this.yxxSound[5]); // 第一阶段
          } else {
            this.spine_long.setAnimation(0, "long_win", false);
            this.spine_long.addAnimation(0, "long_idle", true);
            this.spine_hu.setAnimation(0, "hu_win", false);
            this.spine_hu.addAnimation(0, "hu_idle", true);
            this.spine_vs.setAnimation(0, "he_win", false);
          }
          this.spine_vs.setCompleteListener(function () {
            _this6.spine_vs.setCompleteListener(null);
            vs.active = false;
            AudioManager.instance.playOneShot(_this6.yxxSound[8]); // 第一阶段
          });
        };

        _proto.emitBet = function emitBet() {
          var _this7 = this;
          //        //shou cm 把没中的区域 筹码收集到庄家
          var nodes = this.chipMgr.getReturnChipParents(LhGame2Proxy.resultData.prizeResults);
          var _loop2 = function _loop2() {
            var player = nodes[i];
            // 超出动画上限的节点会立即移出父节点，遍历快照避免跳过相邻筹码。
            var nodeArr = player.children.slice();
            var pos = {
              xx: player.getComponent(UITransform).width / 2,
              yy: player.getComponent(UITransform).height / 2
            };
            var world = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var posren = player.getComponent(UITransform).convertToNodeSpaceAR(world);
            nodeArr.forEach(function (node, index) {
              if (index > LhGame2Def.MAX_CHIP_REWARD) {
                _this7._chipPool.put(node);
                return;
              }
              tween(node).to(0.3, {
                position: v3(pos.xx, pos.yy)
              }).to(0.3, {
                position: v3(pos.xx, pos.yy + index * 2)
              }).to(0.5, {
                position: posren
              }).call(function () {
                _this7._chipPool.put(node);
              }).start();
              tween(node.getComponent(UIOpacity)).delay(0.6).to(0.3, {
                opacity: 255
              }).start();
            });
          };
          for (var i = 0; i < nodes.length; i++) {
            _loop2();
          }
          //        ///////////////////////////
          this.scheduleOnce(function () {
            //            //发筹码 {item:CMnode,yztype:xzType} xzType：下注位置
            for (var _i5 = 0, _Object$entries = Object.entries(_this7.betList); _i5 < _Object$entries.length; _i5++) {
              var _Object$entries$_i = _Object$entries[_i5],
                _i6 = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              //                //玩家
              var num = 0;
              var _loop3 = function _loop3() {
                  //                    //区域
                  var obj = value[j];
                  var count = _this7.getNumBet(obj.yztype);
                  if (count > 0) {
                    num = num + 1;
                    if (num > LhGame2Def.MAX_CHIP_REWARD) {
                      _this7._chipPool.put(obj.item);
                      return 1; // continue
                    }
                    //                        //返还筹码
                    var yzpool = _this7.chipMgr.getChipParent(obj.yztype);
                    var player = _this7.playersMgr.players[parseInt(_i6) - 1];
                    var positionNode = player.getChildByName("img_1");
                    var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                    var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                    var worldren = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                    tween(obj.item).to(0.3, {
                      position: v3(posren.x, posren.y + (num - 1) * 2)
                    })
                    // .to(0.6 + num * 0.05, { opacity: 255 })
                    .delay(0.6 + num * 0.05).to(0.3, {
                      position: posren2
                    }).call(function () {
                      _this7._chipPool.put(obj.item);
                    }).start();
                    var maxCount = count > LhGame2Def.MAX_CHIP_REWARD ? LhGame2Def.MAX_CHIP_REWARD : count;
                    var _loop4 = function _loop4() {
                      if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                      var itemBet = _this7.getChipNode(obj.item.getComponent(ChipSmall).value);
                      yzpool.addChild(itemBet);
                      itemBet.position = posrento;
                      var positionNode = player.getChildByName("img_1");
                      var posX = positionNode.getPosition().x > 0 ? 40 * (m + 1) : -40 * (m + 1);
                      var world3 = positionNode.getComponent(UITransform).convertToWorldSpaceAR(v3(posX, 0));
                      //                            // let positionNode2 = player.getChildByName("img_" + (m + 2));
                      //                            // let world3 = positionNode2.convertToWorldSpaceAR(cc.v2(0,0));

                      var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                      _this7.createBetList.push(itemBet);
                      tween(itemBet).to(0.3, {
                        position: v3(posre3.x, posre3.y + (num - 1) * 2)
                      })
                      // .to(0.6 + num * 0.05, { opacity: 255 })
                      .delay(0.6 + num * 0.05).to(0.3, {
                        position: posren2
                      }).call(function () {
                        _this7._chipPool.put(itemBet);
                      }).start();
                    };
                    for (m = 0; m < maxCount; m++) {
                      if (_loop4()) continue;
                    }
                  }
                },
                m;
              for (var j = 0; j < value.length; j++) {
                if (_loop3()) continue;
              }
            }
            _this7.emitMyselfBet();
            _this7.emitPublicBet();
            _this7.backMoney();
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
        _proto.addScore = function addScore(parent, str) {
          this._buddle.load("prefab/addScore", function (err, assert) {
            var newNode = instantiate(assert);
            newNode.getChildByName("text").getComponent(Label).string = str;
            parent.addChild(newNode);
          });
          var light = find("seat_bg/head_light", parent);
          if (light) {
            light.active = true;
            tween(light).delay(2).call(function () {
              light.active = false;
            }).start();
          }
        };
        _proto.backMoney = function backMoney() {
          var _this8 = this;
          this.scheduleOnce(function () {
            if (LhGame2Proxy.resultData == null) {
              return;
            }
            for (var i = 0; i < _this8.playersMgr.players.length; i++) {
              var player = _this8.playersMgr.players[i];
              var uid = player.name;
              var data = LhGame2Proxy.resultData.seatPrize;
              for (var _iterator5 = _createForOfIteratorHelperLoose(data), _step5; !(_step5 = _iterator5()).done;) {
                var item = _step5.value;
                if (item.userId == uid) {
                  var add = item.prizeAmount;
                  if (add > 0) _this8.addScore(player, "+" + Common.ChangeMoneyShow(add, 2));
                  break;
                }
              }
            }
            if (LhGame2Proxy.resultData.userPrize.prizeAmount > 0) {
              var _player = _this8.playerself;
              var tips = _player.getChildByName("addScore");
              tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(LhGame2Proxy.resultData.userPrize.prizeAmount, 2);
              tips.active = true;
              var light = find("seat_bg/head_light", _player);
              if (light) {
                light.active = true;
                tween(light).delay(2).call(function () {
                  light.active = false;
                }).start();
              }
            }
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            _this8.selfGold.string = Common.numFormat(gold);
          }, 2);
        };
        _proto.emitMyselfBet = function emitMyselfBet() {
          var _this9 = this;
          var num = 0;
          var _loop5 = function _loop5() {
              var betInfo = _step6.value;
              var obj = betInfo;
              var count = _this9.getNumBet(betInfo.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > LhGame2Def.MAX_CHIP_REWARD) {
                  _this9._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this9.chipMgr.getChipParent(obj.yztype);
                var player = _this9.playerself;
                var positionNode = player.getChildByName("img_1");
                var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                tween(obj.item).to(0.3, {
                  position: v3(posren.x, posren.y + (num - 1) * 2)
                })
                // .to(0.6 + num * 0.05, { opacity: 255 })
                .delay(0.6 + num * 0.05).to(0.3, {
                  position: posren2
                }).call(function () {
                  _this9._chipPool.put(obj.item);
                }).start();
                var worldren = _this9.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > LhGame2Def.MAX_CHIP_REWARD ? LhGame2Def.MAX_CHIP_REWARD : count;
                var _loop6 = function _loop6() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this9.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  var positionNode2 = player.getChildByName("img_" + (m + 2));
                  var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                  var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                  _this9.createBetList.push(itemBet);
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
                    _this9._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop6()) continue;
                }
              }
            },
            m;
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.betselfList), _step6; !(_step6 = _iterator6()).done;) {
            if (_loop5()) continue;
          }
        };
        _proto.emitPublicBet = function emitPublicBet() {
          var _this10 = this;
          var num = 0;
          var _loop7 = function _loop7() {
              var betInfo = _step7.value;
              var obj = betInfo;
              var count = _this10.getNumBet(obj.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > LhGame2Def.MAX_CHIP_REWARD) {
                  _this10._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this10.chipMgr.getChipParent(obj.yztype);
                var player = _this10.playersMgr.playerPublic;
                var world = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                tween(obj.item).to(0.5, {
                  position: posren
                }).call(function () {
                  _this10._chipPool.put(obj.item);
                }).start();
                var worldren = _this10.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > LhGame2Def.MAX_CHIP_REWARD ? LhGame2Def.MAX_CHIP_REWARD : count;
                var _loop8 = function _loop8() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this10.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  _this10.createBetList.push(itemBet);
                  tween(itemBet).to(0.5, {
                    position: posren
                  }).call(function () {
                    _this10._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop8()) continue;
                }
              }
            },
            m;
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.betPublicList), _step7; !(_step7 = _iterator7()).done;) {
            if (_loop7()) continue;
          }
        };
        _proto.getNumBet = function getNumBet(yztype) {
          var count = 0;
          if (LhGame2Proxy.resultData.prizeResults == yztype) {
            count = count + 1;
          }
          return count;
        };
        _proto.isDajiang = function isDajiang() {
          //        // for (let PrizeResult of this._model.resultData.PrizeResults) {
          //        //     if (temp == null) {
          //        //         temp = PrizeResult;
          //        //     } else {
          //        //         if (temp != PrizeResult) {
          //        //             return false;
          //        //         }
          //        //     }
          //        // }
          return true;
        };
        _proto.wandong = function wandong() {
          var _this11 = this;
          this.kajiang.scale = v3(0, 0, 1);
          this.kajiang.getComponent(UIOpacity).opacity = 255;
          this.kajiang.active = true;
          tween(this.kajiang).to(0.5, {
            scale: v3(2, 2, 1)
          }).call(function () {
            _this11.kajiang.active = false;
          }).start();
          tween(this.kajiang.getComponent(UIOpacity)).delay(0.5).to(0.8, {
            opacity: 0
          }).start();
        };
        _proto.playResultSound = function playResultSound() {
          if (this.djsMId != null) ;
          AudioManager.instance.playSound(this.yxxSound[3], false); // 第一阶段
          //        // if (!this._model.resultData.IsPrizePool) {
          //        //     //不是大奖
          //        //     let self = this;
          //        //     this.scheduleOnce(() => {
          //        //         AudioManager.instance.playSound(self.sdSound[4], false); // 第2阶段
          //        //     }, 2.3);
          //        //     this.scheduleOnce(() => {
          //        //         AudioManager.instance.playSound(self.sdSound[5], false); // 第3阶段
          //        //     }, 4);
          //        // }
        };

        _proto.updatePath = function updatePath(data) {
          var pathLayer = find("gameLayer/zoushi", this.node);
          var count = 0;
          var len = data.length;
          if (len >= 11) {
            count = 0;
          } else {
            count = 11 - len;
          }
          var counts = [0, 0, 0];
          for (var i = 0; i < len; i++) {
            var name = "path" + (count + 1 + i);
            var item = pathLayer.getChildByName(name);
            if (item) {
              item.active = true;
              item.getComponent(Sprite).spriteFrame = this.lhSp[parseInt(data[i]) - 1];
              counts[parseInt(data[i]) - 1]++;
            }
          }
          for (var _i7 = 0; _i7 < 3; _i7++) {
            var _item4 = pathLayer.getChildByName("txt_count" + (_i7 + 1));
            if (_item4) {
              _item4.getComponent(Label).string = counts[_i7] + "";
            }
          }
        };
        _proto.checkOut = function checkOut() {
          var _this12 = this;
          this.scheduleOnce(function () {
            _this12.emitBet();
          }, 0.4);
        };
        _proto.showResult = function showResult() {
          //        // this.playResultSound();
          //        // this.showResultAni();
          //        // this.emitBet();
          this.scheduleOnce(function () {
            NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.history, {
              tableId: LhGame2Proxy.roomInfo.tableInfo.tableId,
              size: "120"
            });
          }, 1);
          this.wandong();
          var card1 = this.node_card1;
          var card2 = this.node_card2;
          var scalex1 = card1.scale.x;
          var scalex2 = card2.scale.x;
          var self = this;
          var result = JSON.parse(LhGame2Proxy.resultData.openNum);
          tween(card1).to(0.2, {
            scale: v3(-1, card1.scale.y, 1)
          }).call(function () {
            AudioManager.instance.playSound(self.yxxSound[6], false);
            card1.scale = v3(scalex1, card1.scale.y, 1);
            card1.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame(self.getCardName(result[1]));
          }).start();
          tween(card2).to(0.2, {
            scale: v3(-1, card1.scale.y, 1)
          }).call(function () {
            AudioManager.instance.playSound(self.yxxSound[6], false);
            card2.scale = v3(scalex2, card2.scale.y, 1);
            card2.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame(self.getCardName(result[2]));
          }).start();
          this.scheduleOnce(function () {
            if (LhGame2Proxy.resultData.prizeResults != 1) {
              var ani = LhGame2Proxy.resultData.prizeResults == 1 ? "left1" : "right1";
              // self.renAni.getComponent(sp.Skeleton).setAnimation(0, ani, false);
            }

            self.playResultSound();
            self.showResultAni();
            //            // self.emitBet();
            //            // if (LhGameProxy.resultData.ResultsRecord.Results.length > 0) {
            //            //     self.updatePath(LhGameProxy.resultData.ResultsRecord);
            //            // }
          }, 0.4);
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
          this.chipMgr.addBetCount(betType, count, true);
          AudioManager.instance.playSound(this.yxxSound[1], false);
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
          AudioManager.instance.playSound(this.yxxSound[1], false);
        };
        _proto.betAni = function betAni(config) {
          var _config$needAni;
          if (!this.chipPoolReady) {
            this.pendingChipBets.push(_extends({}, config));
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
          if (id == DataManager.instance.getUserDataForKey(UserKey.OID)) {
            var player = this.playerself;
            var worldPos = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            this.betselfList.push({
              item: CMnode,
              yztype: xzType
            });
          } else if (index >= 0) {
            var _player2 = this.playersMgr.players[index];
            var _worldPos = _player2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos);
            this.betList[index + 1].push({
              item: CMnode,
              yztype: xzType
            });
          } else {
            var _player3 = this.playersMgr.playerPublic;
            var _worldPos2 = _player3.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            startPos = aniPool.getComponent(UITransform).convertToNodeSpaceAR(_worldPos2);
            this.betPublicList.push({
              item: CMnode,
              yztype: xzType
            });
          }
          CMnode.position = v3(startPos.x, startPos.y);
          var x = Math.random() * aniPool.getComponent(UITransform).width - aniPool.getComponent(UITransform).width / 2;
          var y = Math.random() * aniPool.getComponent(UITransform).height - aniPool.getComponent(UITransform).height / 2;
          if (needAni) {
            tween(CMnode).delay(delay).to(0.5, {
              position: v3(x, y)
            }, {
              easing: "quadOut"
            }).start();
          } else {
            CMnode.setPosition(x, y);
          }
        };
        _proto.sendBet = function sendBet(data) {
          if (LhGame2Proxy.gameState != LhGame2State.BET) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          var pos = data;
          var num = "" + this._chip.count;
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.doingBet, {
            pos: pos,
            betAmount: num
          });
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != LhGame2Proxy.BUNDLE) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator8 = _createForOfIteratorHelperLoose(children), _step8; !(_step8 = _iterator8()).done;) {
            var child = _step8.value;
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
          var _this13 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator9 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step9; !(_step9 = _iterator9()).done;) {
            var i = _step9.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.scale = v3(0.8, 0.8, 1);
            _chip.getComponent(UITransform).width = 105;
            _chip.getComponent(UITransform).height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, LhGame2Proxy.BUNDLE);
          }
          for (var _iterator10 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step10; !(_step10 = _iterator10()).done;) {
            var _i8 = _step10.value;
            var has = false;
            for (var _iterator11 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step11; !(_step11 = _iterator11()).done;) {
              var j = _step11.value;
              if (j.count == _i8.count) {
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
            _chip2.getComponent(ChipItem).setData(_i8, ChipType.CHIP, LhGame2Proxy.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this13.scrollViewCM.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this13.scrollViewCM.scrollToLeft();
          });
        };
        _proto.getCardName = function getCardName(cardid) {
          var hutype = ["fang", "mei", "hong", "hei"];
          var huaidx = Math.ceil(cardid / 13) - 1;
          var value = cardid % 13;
          if (value == 0) {
            value = 13;
          }
          var cardName = hutype[huaidx] + value;
          return cardName;
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
            this.djsMId = AudioManager.instance.playSound(this.yxxSound[2], false);
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
          var _this14 = this;
          AudioManager.instance.playGameMusic(this.bgMusic, true); //播放背景音乐
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.startGame, {});
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
          I18nLocal.getLocalRes("LhGame2", this.lhSp[2].name).then(function (sprFrame) {
            _this14.lhSp[2] = sprFrame;
          });
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.selfGold.node.parent.getChildByName("Sprite_level");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
        };
        _proto.onClickLastBet = function onClickLastBet() {
          var _this15 = this;
          var bets = this.chipMgr.lastBets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.doingBet, {
                pos: i,
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this15.BtnLast, true);
          }).start();
          //        // this._netManager.sendOnlineData(LhGameProxy.serverID + "/" + this._configManager.protocolLh2.LastXZ.split("/")[1], { action: "HD_LastXiaZhu" });
        };

        _proto.onClickDoubleBet = function onClickDoubleBet() {
          var _this16 = this;
          var bets = this.chipMgr.bets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.doingBet, {
                pos: i,
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this16.BtnJiabei, true);
          }).start();
          //        // this._netManager.sendOnlineData(LhGameProxy.serverID + "/" + this._configManager.protocolLh2.DoubleXZ.split("/")[1], { action: "HD_DoubleXiaZhu" });
        };

        _proto.onClickExit = function onClickExit() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.exitRoom, {
            action: "HD_QuitTable"
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          //        // GUtil.openRecord("cardLhd2");
          Common.loadPopBuddle("prefab/gameRecordLayer", LhGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(GameRecordLayer).setGameType("cardLhd2");
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          Common.loadPopBuddle("prefab/settingLayer", LhGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/LhHelp2", LhGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/LhRecord2", this._buddle, function () {}, function (LhRecord) {
            var LhRecordLayer = instantiate(LhRecord);
            ViewManager.instance.popNodeView(LhRecordLayer, true);
          }, true);
        };
        _proto.onClickDiy = function onClickDiy() {
          GUtil.openDIYChip();
        };
        _proto.onDisable = function onDisable() {
          //        //button事件
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          //        // EventManager.instance.off(ConfigManager.instance.protocolLh2.yxxBetBtn, this.selectCM, this);
          EventManager.off(ConfigManager.protocolLh2.bet, this.sendBet, this);
          EventManager.off(ConfigManager.protocolLh2.btnPlayerInfo, this.showInfo, this);
          EventManager.off(ConfigManager.protocolLh2.btnPublicInfo, this.showAllPlayerInfo, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连

          ProxyMgr.close(this);
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          if (!data) return;
          if (data.GroupId != "cardLhd2") return;
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
              LhGame2Proxy.chatQueueList.push(data);
              this.showPublicChat(1);
            } else if (data.MsgType == 2) {
              LhGame2Proxy.expressionQueueList.push(data);
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
          var _this17 = this;
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
              _this17.loadLocalFrameAnim(data.Content, node_expression, function () {
                chatRoot.destroyFromParent();
              });
            }
          });
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this18 = this;
          if (nType == 1) {
            //            //文本
            if (LhGame2Proxy.chatQueueList.length < 1) return;
            var _loop9 = function _loop9() {
              var node_chat = find("seat_bg/node_chat" + i, _this18.playersMgr.playerPublic);
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && LhGame2Proxy.chatQueueList.length > 0) {
                node_chat.active = true;
                var data = LhGame2Proxy.chatQueueList.shift();
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                data.Content = BlackWordProxy.filter(data.Content);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 3 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 * i).to(0.2, {
                  scale: v3(-1, scale_y, 1)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this18.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 1; i < 4; ++i) {
              if (_loop9()) continue;
            }
          } else if (nType == 2) {
            if (!LhGame2Proxy.expressionQueueList || LhGame2Proxy.expressionQueueList.length < 1) return;
            var node_expression = find("seat_bg/node_expression", this.playersMgr.playerPublic);
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = LhGame2Proxy.expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this18.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this18.showPublicChat(2);
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
          var _this19 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this19.createAnim(sprFrmAry, aniName, item, callBack);
          });
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _createClass(LhRoom2, [{
          key: "isLastEnable",
          get: function get() {
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(this.BtnLast.node) > 0) {
              return false;
            }
            for (var index = 0; index < 3; index++) {
              if (this.betselfLast[index] > 0) {
                return true;
              }
            }
            return false;
          }
        }]);
        return LhRoom2;
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "scrollViewCM", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bigCM", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lhSp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "yxxSound", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "kajiang", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "spine_vs", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "prefab_smallChip", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "playersMgr", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "clock", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "chipMgr", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "spine_long", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "spine_hu", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_card1Parent", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_card2Parent", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_card1", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "node_card2", [_dec27], {
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

System.register("chunks:///_virtual/LhScene2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './LhGame2Proxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, NetManager, ViewManager, LhGame2Proxy, LhGame2Event, Common, MainManager;
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
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      LhGame2Proxy = module.default;
      LhGame2Event = module.LhGame2Event;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "9b42br+DKhKQ6ak3nUXb6q1", "LhScene2", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhScene2 = exports('default', (_dec = ccclass("LhScene2"), _dec2 = menu("game/lhgame2/LhScene2"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhScene2, _Component);
        function LhScene2() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_room", _descriptor, _assertThisInitialized(_this));
          _this.node_room = null;
          return _this;
        }
        var _proto = LhScene2.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh2.audoEnter, {});
          this.init();
          this.onEvent();
          this.createRoom();
        };
        _proto.start = function start() {
          this.preLoad();
        };
        _proto.preLoad = function preLoad() {

          //        // bundle.preload("prefab/LhRoom", cc.Prefab);
        };
        _proto.createRoom = function createRoom() {
          if (this.node_room) {
            return;
          }
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          this.node_room = node;

          //        // let bundle = LhGameProxy.bundle;
          //        // bundle.load<cc.Prefab>("prefab/LhRoom", (err, asset) => {
          //        //     let node = cc.instantiate(asset);
          //        //     this.node.addChild(node);
          //        //     this.node_room = node;
          //        // });
        };

        _proto.init = function init() {
          this.reset();
        };
        _proto.onEvent = function onEvent() {
          var _this2 = this;
          LhGame2Proxy.on(LhGame2Event.LEAVE_ROOM, function () {
            Common.returnToHall(_this2, LhGame2Proxy.BUNDLE);
          }, this);
        };
        _proto.reset = function reset() {};
        _proto.gameShow = function gameShow() {
          Common.closeWait();
          this.init();
          if (NetManager.instance.netState) {
            NetManager.instance.waitServiceSendData();
          }
        };
        _proto.disConnect = function disConnect() {
          Common.showWait();
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.onEnable = function onEnable() {
          LhGame2Proxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          LhGame2Proxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {
          LhGame2Proxy.targetOff(this);
        };
        return LhScene2;
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
  r('virtual:///prerequisite-imports/LhGame2', 'chunks:///_virtual/LhGame2'); 
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