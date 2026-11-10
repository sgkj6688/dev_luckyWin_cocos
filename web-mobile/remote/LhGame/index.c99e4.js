System.register("chunks:///_virtual/ButtonLhCm.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './Common.ts'], function (exports) {
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
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "8110dOHE2VNTL02RzAhGZfc", "ButtonLhCm", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ButtonLhCm = exports('default', (_dec = ccclass("ButtonLhCm"), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ButtonLhCm, _Component);
        function ButtonLhCm() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          _initializerDefineProperty(_this, "eventName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "eventType", _descriptor2, _assertThisInitialized(_this));
          _this._eventData = "";
          _this._index = 0;
          _this.isRuning = false;
          return _this;
        }
        var _proto = ButtonLhCm.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
        };
        _proto.start = function start() {};
        _proto.dispatchButtonEvent = function dispatchButtonEvent(event, eventData) {
          //        // this._mainManager.getAudioManager().playbuttonEffect();
          if (this._configManager[this.eventType][this.eventName]) {
            Common.showLog("相应事件" + this._configManager[this.eventType][this.eventName]);
            var self = this;
            if (this.isRuning == false) {
              this.isRuning = true;
              self._eventManager.dispatch(self._configManager[self.eventType][self.eventName], {
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

        return ButtonLhCm;
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhChipRect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Label, Node, tween, UIOpacity, Component, Common, MainManager;
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
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "7149cJggEtDh7XlAcTOAVA5", "LhChipRect", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhgameChipRect = exports('default', (_dec = ccclass("LhChipRect"), _dec2 = menu("game/lhgame/LhgameChipRect"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhgameChipRect, _Component);
        function LhgameChipRect() {
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
        var _proto = LhgameChipRect.prototype;
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
          this.txt_otherChip.node.active = count > 0;
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
          this.node_hightLight.active = false;
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _createClass(LhgameChipRect, [{
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
        return LhgameChipRect;
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

System.register("chunks:///_virtual/LhChipRectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhChipRect.ts', './LhGameProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Component, LhgameChipRect, LhGameProxy;
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
      LhgameChipRect = module.default;
    }, function (module) {
      LhGameProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5a302nHbuZDqo0s5U2G8BWD", "LhChipRectMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhgameChipRectMgr = exports('default', (_dec = ccclass("LhChipRectMgr"), _dec2 = menu("game/lhgame/LhgameChipRectMgr"), _dec3 = property(LhgameChipRect), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhgameChipRectMgr, _Component);
        function LhgameChipRectMgr() {
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
        var _proto = LhgameChipRectMgr.prototype;
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
          if (LhGameProxy.oddList) {
            var data = LhGameProxy.oddList;
            for (var key in data) {
              if (this.rectMap[key]) {
                var curRate = Math.floor(data[key] / 100);
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
        _createClass(LhgameChipRectMgr, [{
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
        return LhgameChipRectMgr;
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

System.register("chunks:///_virtual/LhDeskItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './LhGameDef.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, sp, SpriteFrame, Node, isValid, find, UITransform, Vec3, Sprite, Component, NetManager, LhGameDef, Common, MainManager;
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
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Node = module.Node;
      isValid = module.isValid;
      find = module.find;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      LhGameDef = module.LhGameDef;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
      cclegacy._RF.push({}, "cbf72ttYOBFYYodvJC1Al7a", "LhDeskItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ITEM_DIS = 22.8;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhGameDeskItem = exports('default', (_dec = ccclass("LhDeskItem"), _dec2 = menu("game/lhgame/LhGameDeskItem"), _dec3 = property(Label), _dec4 = property(sp.Skeleton), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhGameDeskItem, _Component);
        function LhGameDeskItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_player", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_heguan", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lhSp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lhSp2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_history", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_longwin", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_huwin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_tie", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_tableId", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bets", _descriptor11, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = LhGameDeskItem.prototype;
        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          this.txt_player.string = "" + data.playerNum;
          this.txt_bets.string = "Total Bets: " + Common.ChangeMoneyShow(parseInt(data.totalBet), 2);
          this.updateRecord(data.openNums);
          LhGameDef.loadHeguanByType(this.spine_heguan, data.tableId).then(function () {
            if (isValid(_this2.spine_heguan)) _this2.spine_heguan.setAnimation(0, "emoji", true);
          });
        };
        _proto.setNo = function setNo(num) {
          this.txt_tableId.string = "No." + num;
        };
        _proto.onClickEnter = function onClickEnter() {
          if (!this._data) {
            return;
          }
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.enterRoom, {
            action: "HD_Enter",
            tableId: this._data.tableId
          });
        };
        _proto.updateRecord = function updateRecord(result) {
          this.showHistory(result);
          var redata = [];
          var col = [];
          var lastRe = -1;
          for (var _i = 0; _i < result.length; _i++) {
            if (lastRe == -1) {
              if (parseInt(result[_i]) != 3) {
                col.push(result[_i]);
                lastRe = parseInt(result[_i]);
              }
            } else {
              if (col.length == 6 || lastRe != parseInt(result[_i]) && parseInt(result[_i]) != 3) {
                redata.push(col);
                col = [];
                if (parseInt(result[_i]) != 3) {
                  col.push(result[_i]);
                  lastRe = parseInt(result[_i]);
                } else {
                  lastRe = -1;
                }
              } else {
                if (parseInt(result[_i]) != 3) {
                  col.push(result[_i]);
                  lastRe = parseInt(result[_i]);
                }
              }
            }
          }
          redata.push(col);
          if (redata.length > 0) {
            var sortData = [];
            var colData = [];
            for (var m in redata) {
              for (var i = redata[m].length - 1; i >= 0; i--) {
                colData.push(redata[m][i]);
              }
              sortData.push(colData);
              colData = [];
            }
            var self = this;
            this.scheduleOnce(function () {
              self.showPathPic(sortData);
            });
          }
        };
        _proto.showPathPic = function showPathPic(data) {
          var layer = this.node_path;
          layer.removeAllChildren();
          if (data.length < 20) {
            var temp = find("path/temp1", this.node);
            var world = temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var startPos = layer.getComponent(UITransform).convertToNodeSpaceAR(world);
            for (var i = data.length - 1; i >= 0; i--) {
              for (var m in data[i]) {
                var item = this.createNode();
                //                    // item.scale = 0.9;
                item.getComponent(Sprite).spriteFrame = this.lhSp2[parseInt(data[i][m]) - 1];
                layer.addChild(item);
                item.setPosition(startPos.x + (data.length - 1 - i) * ITEM_DIS, startPos.y - parseInt(m) * ITEM_DIS);
              }
            }
          } else {
            var _temp = find("path/temp2", this.node);
            var _world = _temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var _startPos = layer.getComponent(UITransform).convertToNodeSpaceAR(_world);
            for (var _i2 in data) {
              if (parseInt(_i2) < 20) {
                for (var _m in data[_i2]) {
                  var _item = this.createNode();
                  //                        // item.scale = 0.9;
                  _item.getComponent(Sprite).spriteFrame = this.lhSp2[parseInt(data[_i2][_m]) - 1];
                  layer.addChild(_item);
                  _item.setPosition(_startPos.x - parseInt(_i2) * ITEM_DIS, _startPos.y - parseInt(_m) * ITEM_DIS);
                }
              }
            }
          }
        };
        _proto.createNode = function createNode() {
          var node = new Node();
          node.addComponent(Sprite);
          return node;
        };
        _proto.showHistory = function showHistory(result) {
          var pathLayer = this.node_history;
          var count = 0;
          var tie = 0;
          var longwin = 0;
          var huwin = 0;
          for (var i = 0; i < result.length; i++) {
            count = count + 1;
            if (count < 21) {
              pathLayer.getChildByName("item" + (20 - count + 1)).active = true;
              pathLayer.getChildByName("item" + (20 - count + 1)).getComponent(Sprite).spriteFrame = this.lhSp[parseInt(result[i]) - 1];
            }
            if (parseInt(result[i]) == 1) {
              longwin++;
            } else if (parseInt(result[i]) == 2) {
              huwin++;
            } else {
              tie++;
            }
          }
          this.txt_longwin.string = longwin + "";
          this.txt_huwin.string = huwin + "";
          this.txt_tie.string = tie + "";
          var all = longwin + huwin + tie;
          var longw = 240 * longwin / all;
          if (longw < 60) {
            longw = 60;
          }
          var huw = 240 - longw;
          var _long = find("long", this.node);
          var hu = find("hu", this.node);
          _long.getComponent(UITransform).width = longw;
          hu.getComponent(UITransform).width = huw;
          _long.getChildByName("per").getComponent(Label).string = Math.floor(longwin / all * 100) + "%";
          hu.getChildByName("per").getComponent(Label).string = Math.floor(huwin / all * 100) + "%";
          _long.getChildByName("per").setPosition(longw - 30, _long.getChildByName("per").position.y);
          _long.getChildByName("vs").setPosition(longw + 25, _long.getChildByName("vs").position.y);
          hu.getChildByName("per").setPosition(30 - huw, hu.getChildByName("per").position.y);
        };
        return LhGameDeskItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_heguan", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lhSp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lhSp2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_history", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_longwin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_huwin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_tie", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_tableId", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_bets", [_dec13], {
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

System.register("chunks:///_virtual/LhGame", ['./ButtonLhCm.ts', './LhChipRect.ts', './LhChipRectMgr.ts', './LhDeskItem.ts', './LhGameDef.ts', './LhGameProxy.ts', './LhGameRecord.ts', './LhHall.ts', './LhHelp.ts', './LhInfo.ts', './LhLoadingScene.ts', './LhPlayers.ts', './LhRoom.ts', './LhScene.ts', './LhshowMenu.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LhGameDef.ts", ['cc', './LhGameProxy.ts'], function (exports) {
  var cclegacy, sp, isValid, LhGameProxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sp = module.sp;
      isValid = module.isValid;
    }, function (module) {
      LhGameProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c2d21XAeThNg7/ZSPXe37Qv", "LhGameDef", undefined);
      var LhTableType = exports('LhTableType', /*#__PURE__*/function (LhTableType) {
        LhTableType[LhTableType["NORMAL"] = 1] = "NORMAL";
        LhTableType[LhTableType["MD5"] = 2] = "MD5";
        LhTableType[LhTableType["MD5_PRIZE"] = 3] = "MD5_PRIZE";
        return LhTableType;
      }({}));
      var LhGameDef = exports('LhGameDef', /*#__PURE__*/function () {
        function LhGameDef() {}
        LhGameDef.loadHeguanByType = function loadHeguanByType(node, tableId) {
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
            var bundle = LhGameProxy.bundle;
            bundle.load(name, sp.SkeletonData, function (err, asset) {
              if (err) {
                reject();
                return;
              }
              if (isValid(spine)) {
                spine.skeletonData = asset;
              }
              resolve();
            });
          });
        };
        return LhGameDef;
      }());
      LhGameDef.MAX_CHIP_REWARD = 50;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhGameProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "f8ebajv3udBSoeD3p/eFpPl", "LhGameProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhGameEvent = exports('LhGameEvent', /*#__PURE__*/function (LhGameEvent) {
        LhGameEvent["ENTER_ROOM"] = "enterRoom";
        LhGameEvent["LEAVE_ROOM"] = "leaveRoom";
        LhGameEvent["UPDATE_PLAYER_LIST"] = "playerList";
        LhGameEvent["UPDATE_TABLE"] = "updateTable";
        LhGameEvent["UPDATE_USER_LIST"] = "userList";
        LhGameEvent["CHAT"] = "chat";
        LhGameEvent["BET"] = "doingBet";
        LhGameEvent["UPDATE_BET"] = "updateBet";
        LhGameEvent["UPDATE_STATE"] = "updateState";
        LhGameEvent["UPDATE_ROOM"] = "updateRoom";
        LhGameEvent["UPDATE_MY_INFO"] = "updateMyInfo";
        LhGameEvent["RESULT"] = "result";
        LhGameEvent["UPDATE_MD5"] = "updateMD5";
        LhGameEvent["UPDATE_HISTORY"] = "updateHistory";
        LhGameEvent["CHECKOUT"] = "checkout";
        return LhGameEvent;
      }({}));
      var LhGameState = exports('LhGameState', /*#__PURE__*/function (LhGameState) {
        LhGameState[LhGameState["NORMAL"] = 0] = "NORMAL";
        LhGameState[LhGameState["START"] = 1] = "START";
        LhGameState[LhGameState["BET"] = 2] = "BET";
        LhGameState[LhGameState["RESULT"] = 3] = "RESULT";
        return LhGameState;
      }({}));
      /**
       * 龙虎数据代理
       */
      var LhGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(LhGameProxyMgr, _ProxyBase);
        function LhGameProxyMgr() {
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
          _this.wsEvents = [ConfigManager.protocolLh.getInfo, ConfigManager.protocolLh.deskinfo, ConfigManager.protocolLh.enterRoom, ConfigManager.protocolLh.audoEnter, ConfigManager.protocolLh.startGame, ConfigManager.protocolLh.updatePlayerNum, ConfigManager.protocolLh.getPlayerList, ConfigManager.protocolLh.sendShortCut, ConfigManager.protocolLh.doingBet, ConfigManager.protocolLh.updateRoomStatus,
          // ConfigManager.protocolLh.updatePlayerStatus,
          ConfigManager.protocolLh.openResult, ConfigManager.protocolLh.betInfo, ConfigManager.protocolLh.exitRoom, ConfigManager.protocolLh.md5Text, ConfigManager.protocolLh.history, ConfigManager.protocolLh.checkout];
          _this.gameState = LhGameState.START;
          _this.gameEventID = null;
          _this.gameDownTime = 0;
          _this.betTime = 1;
          _this.BUNDLE = "LhGame";
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
        var _proto = LhGameProxyMgr.prototype;
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
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            if (data.Code == 30009) {
              this.emit(LhGameEvent.LEAVE_ROOM);
            }
            return;
          }
          gts.Debug.Log("===onRecvData==", JSON.stringify(data));
          switch (data.cmd) {
            case ConfigManager.protocolLh.getInfo:
              if (!data.Data) {
                break;
              }
              this.tableList = data.Data;
              this.emit(LhGameEvent.UPDATE_TABLE);
              break;
            case ConfigManager.protocolLh.audoEnter:
            case ConfigManager.protocolLh.enterRoom:
              {
                var info = data.Data;
                this.oddList = info.odds;
                this.roomInfo = info;
                this.gameState = info.tableInfo.state;
                this.gameDownTime = info.tableInfo.countDown;
                this.betTime = info.tableInfo.betTime;
                this.playerCount = info.tableInfo.playNum;
                this.playerList = info.tableInfo.seatPlay;
                this.emit(LhGameEvent.ENTER_ROOM);
                break;
              }
            case ConfigManager.protocolLh.startGame:
              {
                var _info = data.Data;
                this.oddList = _info.odds;
                this.roomInfo = _info;
                this.gameState = _info.tableInfo.state;
                this.gameDownTime = _info.tableInfo.countDown;
                this.playerCount = _info.tableInfo.playNum;
                this.playerList = _info.tableInfo.seatPlay;
                this.emit(LhGameEvent.UPDATE_ROOM);
                break;
              }
            case ConfigManager.protocolLh.updateRoomStatus:
              {
                var _info2 = data.Data;
                this.gameState = _info2.tableState;
                this.gameEventID = _info2.eventID;
                this.gameDownTime = _info2.countDown;
                this.emit(LhGameEvent.UPDATE_STATE);
                break;
              }
            case ConfigManager.protocolLh.updatePlayerNum:
              {
                var _info3 = data.Data;
                this.playerCount = _info3.playNum;
                this.playerList = _info3.seatPlay;
                this.emit(LhGameEvent.UPDATE_PLAYER_LIST, _info3);
                break;
              }
            case ConfigManager.protocolLh.getPlayerList:
              {
                this.emit(LhGameEvent.UPDATE_USER_LIST, data.Data);
                break;
              }
            case ConfigManager.protocolLh.exitRoom:
              {
                this.emit(LhGameEvent.LEAVE_ROOM);
                break;
              }
            case ConfigManager.protocolLh.doingBet:
              {
                var _info4 = data.Data;
                this.emit(LhGameEvent.BET, _info4);
                break;
              }
            case ConfigManager.protocolLh.betInfo:
              {
                var _info5 = data.Data;
                this.emit(LhGameEvent.UPDATE_BET, _info5);
                break;
              }
            case ConfigManager.protocolLh.openResult:
              {
                var _info6 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.openNum = _info6.openNum;
                this.resultData.prizeResults = _info6.prizeResults;
                this.emit(LhGameEvent.RESULT, _info6);
                break;
              }
            case ConfigManager.protocolLh.checkout:
              {
                var _info7 = data.Data;
                if (!this.resultData) this.resultData = {};
                this.resultData.seatPrize = _info7.seatPrize;
                this.resultData.userPrize = _info7.userPrize;
                this.emit(LhGameEvent.CHECKOUT, _info7);
                break;
              }
            case ConfigManager.protocolLh.md5Text:
              {
                var _info8 = data.Data;
                this.emit(LhGameEvent.UPDATE_MD5, _info8);
                break;
              }
            case ConfigManager.protocolLh.history:
              {
                var _info9 = data.Data;
                this.history = _info9;
                this.emit(LhGameEvent.UPDATE_HISTORY, _info9);
                break;
              }
            case ConfigManager.protocolLh.sendShortCut:
              {
                var _info10 = data.Data;
                this.emit(LhGameEvent.CHAT, _info10);
                break;
              }
          }
        };
        _proto.sendDoingBet = function sendDoingBet(pos, num) {
          // if (LhGameProxy._curCountDown <= 3) {
          //     Common.showTip(i18n.lang.disableBet);
          //     return false;
          // }
          // NetManager.sendOnlineData(LhGameProxy.serverID + "/" + ConfigManager.protocolLh.doingBet.split("/")[1], {
          //     pos: pos,
          //     num: num,
          //     action: "HD_XiaZhu",
          // });
          // return true;
        };
        _createClass(LhGameProxyMgr, [{
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
        return LhGameProxyMgr;
      }(ProxyBase);
      var LhGameProxy = exports('default', new LhGameProxyMgr("LhGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhGameRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './LhGameProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Node, find, UITransform, Vec3, Sprite, Label, Widget, Component, ProxyMgr, LhGameProxy, LhGameEvent;
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
      Node = module.Node;
      find = module.find;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      Sprite = module.Sprite;
      Label = module.Label;
      Widget = module.Widget;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      LhGameProxy = module.default;
      LhGameEvent = module.LhGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "f5ea9BL2OxP8qpIpd7EMpg2", "LhGameRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ITEM_DIS = 32.5 + 15;
      var LhGameRecord = exports('default', (_dec = ccclass("LhGameRecord"), _dec2 = menu("game/lhgame/LhGameRecord"), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhGameRecord, _Component);
        function LhGameRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "lhSp", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lhSp2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_history", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LhGameRecord.prototype;
        _proto.start = function start() {
          LhGameProxy.on(LhGameEvent.UPDATE_HISTORY, this.onUpdate, this);
          var data = LhGameProxy.history;
          this.setData(data);
        };
        _proto.setData = function setData(data) {
          this.updateRecord(data);
        };
        _proto.onUpdate = function onUpdate(data) {
          this.setData(data);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {
          ProxyMgr.close(this);
        };
        _proto.updateRecord = function updateRecord(result) {
          this.showHistory(result);
          var redata = [];
          var col = [];
          var lastRe = -1;
          for (var _i = 0; _i < result.length; _i++) {
            if (lastRe == -1) {
              if (parseInt(result[_i]) != 3) {
                col.push(result[_i]);
                lastRe = parseInt(result[_i]);
              }
            } else {
              if (col.length == 6 || lastRe != parseInt(result[_i]) && parseInt(result[_i]) != 3) {
                redata.push(col);
                col = [];
                if (parseInt(result[_i]) != 3) {
                  col.push(result[_i]);
                  lastRe = parseInt(result[_i]);
                } else {
                  lastRe = -1;
                }
              } else {
                if (parseInt(result[_i]) != 3) {
                  col.push(result[_i]);
                  lastRe = parseInt(result[_i]);
                }
              }
            }
          }
          redata.push(col);
          if (redata.length > 0) {
            var sortData = [];
            var colData = [];
            for (var m in redata) {
              for (var i = redata[m].length - 1; i >= 0; i--) {
                colData.push(redata[m][i]);
              }
              sortData.push(colData);
              colData = [];
            }
            var self = this;
            this.scheduleOnce(function () {
              self.showPathPic(sortData);
            });
          }
        };
        _proto.showPathPic = function showPathPic(data) {
          var layer = this.node_path;
          layer.removeAllChildren();
          if (data.length < 20) {
            var temp = find("tip_bg/path/temp1", this.node);
            var world = temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var startPos = layer.getComponent(UITransform).convertToNodeSpaceAR(world);
            for (var i = data.length - 1; i >= 0; i--) {
              for (var m in data[i]) {
                var item = this.createNode();
                //                    // item.scale = 0.9;
                item.getComponent(Sprite).spriteFrame = this.lhSp2[parseInt(data[i][m]) - 1];
                layer.addChild(item);
                item.setPosition(startPos.x + (data.length - 1 - i) * ITEM_DIS, startPos.y - parseInt(m) * ITEM_DIS);
              }
            }
          } else {
            var _temp = find("tip_bg/path/temp2", this.node);
            var _world = _temp.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var _startPos = layer.getComponent(UITransform).convertToNodeSpaceAR(_world);
            for (var _i2 in data) {
              if (parseInt(_i2) < 20) {
                for (var _m in data[_i2]) {
                  var _item = this.createNode();
                  //                        // item.scale = 0.9;
                  _item.getComponent(Sprite).spriteFrame = this.lhSp2[parseInt(data[_i2][_m]) - 1];
                  layer.addChild(_item);
                  _item.setPosition(_startPos.x - parseInt(_i2) * ITEM_DIS, _startPos.y - parseInt(_m) * ITEM_DIS);
                }
              }
            }
          }
        };
        _proto.createNode = function createNode() {
          var node = new Node();
          node.addComponent(Sprite);
          return node;
        };
        _proto.showHistory = function showHistory(result) {
          var pathLayer = this.node_history;
          var count = 0;
          var tie = 0;
          var longwin = 0;
          var huwin = 0;
          for (var i = 0; i < result.length; i++) {
            count = count + 1;
            if (count < 21) {
              var name = "item" + (20 - count + 1);
              pathLayer.getChildByName(name).active = true;
              pathLayer.getChildByName(name).getComponent(Sprite).spriteFrame = this.lhSp[parseInt(result[i]) - 1];
            }
            if (parseInt(result[i]) == 1) {
              longwin++;
            } else if (parseInt(result[i]) == 2) {
              huwin++;
            } else {
              tie++;
            }
          }
          var all = longwin + huwin + tie;
          var longw = 1000 * longwin / all;
          var huw = 1000 - longw;
          var _long = find("tip_bg/long", this.node);
          var hu = find("tip_bg/hu", this.node);
          _long.getComponent(UITransform).width = longw;
          hu.getComponent(UITransform).width = huw;
          _long.getChildByName("per").getComponent(Label).string = Math.floor(longwin / all * 100) + "%";
          hu.getChildByName("per").getComponent(Label).string = Math.floor(huwin / all * 100) + "%";
          _long.getChildByName("per").getComponent(Widget).updateAlignment();
          _long.getChildByName("vs").getComponent(Widget).updateAlignment();
          hu.getChildByName("per").getComponent(Widget).updateAlignment();
        }
        //    // update (dt) {}
        //    // onDestroy() {
        //    // }
        ;

        return LhGameRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lhSp", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lhSp2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_history", [_dec6], {
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

System.register("chunks:///_virtual/LhHall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './LhDeskItem.ts', './LhGameProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, ScrollView, Prefab, instantiate, Component, i18n, ProxyMgr, GUtil, AudioManager, DataManager, UserKey, UserProxyEvent, NetManager, ViewManager, LhGameDeskItem, LhGameProxy, LhGameEvent, Common, MainManager;
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
      Sprite = module.Sprite;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
      UserProxyEvent = module.UserProxyEvent;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      LhGameDeskItem = module.default;
    }, function (module) {
      LhGameProxy = module.default;
      LhGameEvent = module.LhGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "6fde6knBVpJNq3I0GeCNuQn", "LhHall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FRESH_TIME = 5;
      var LhHall = exports('default', (_dec = ccclass("LhHall"), _dec2 = menu("game/lhgame/LhHall"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property(ScrollView), _dec7 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhHall, _Component);
        function LhHall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "userName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "userGold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "RoomScrollView", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemList", _descriptor5, _assertThisInitialized(_this));
          //    // @property(cc.SpriteFrame)
          //    // itemBg: cc.SpriteFrame[] = [];
          //    // @property(cc.Prefab)
          //    // item1: cc.Prefab = null;
          //    // @property(cc.Prefab)
          //    // item2: cc.Prefab = null;
          _this.freshTime = 0;
          _this._index = 0;
          return _this;
        }
        var _proto = LhHall.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          this.initEvent();
          this.initHall();
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.getInfo, {});
          AudioManager.instance.startBgMusic();
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
        };
        _proto.initHall = function initHall() {
          this.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          Common.nickNameFormatL(this.userName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          //        //头像
          Common.getHead(headiconName, this.head.node);
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.userGold.node.parent.getChildByName("Sprite_level");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
        };
        _proto.updateDesk = function updateDesk() {
          var children = this.RoomScrollView.content.children;
          var roomData = LhGameProxy.tableList;
          var length = roomData.length;
          var index = children.length - length;
          var cumstomCount = length;
          for (var i = 0; i < cumstomCount; i++) {
            var item = children[i];
            if (!item) {
              item = instantiate(this.itemList[0]);
              this.RoomScrollView.content.addChild(item);
              item.getPosition().x = 0;
            }
            var sc = item.getComponent(LhGameDeskItem);
            if (sc) {
              sc.setData(roomData[i]);
              sc.setNo(i + 1);
            }
          }
          if (index > 0) {
            var len = children.length;
            var left = len - index - 1;
            for (var _i = len - 1; _i > left; _i--) {
              children[_i].destroyFromParent();
            }
          }
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          //        //监听按钮事件 如：关闭弹窗
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);

          //        //传输事件
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          LhGameProxy.on(LhGameEvent.UPDATE_TABLE, this.updateDesk, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
            //                //获取钱包//推送钱包
            _this2.userGold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
          }, this);
        };
        _proto.backHall = function backHall() {
          Common.returnToHall(this, LhGameProxy.BUNDLE);
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("cardLhd");
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("cardLhd");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/LhHelp", LhGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickAutoEnter = function onClickAutoEnter() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.audoEnter, {});
        };
        _proto.onClickCreateRoom = function onClickCreateRoom() {
          Common.showTip(i18n.lang.devTip);
        };
        _proto.disconnect = function disconnect() {
          //        //断线
          Common.showNetTips();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              NetManager.instance.waitServiceSendData(); // 监听推送
              NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
            }
          }, 0.1);
        };
        _proto.onDisable = function onDisable() {
          //        //监听按钮事件 如：关闭弹窗
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);

          //        //传输事件
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //断线

          ProxyMgr.close(this);
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.update = function update(dt) {
          this.freshTime += dt;
          if (this.freshTime > FRESH_TIME) {
            NetManager.instance.sendOnlineData(ConfigManager.protocolLh.getInfo, {});
            this.freshTime = 0;
          }
        };
        return LhHall;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "userName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "userGold", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "RoomScrollView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemList", [_dec7], {
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

System.register("chunks:///_virtual/LhHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhGameProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component;
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
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "1de922+IfdOTJ/Sj+5b4gAl", "LhHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhHelp = exports('default', (_dec = ccclass("LhHelp"), _dec2 = menu("game/lhgame/LhHelp"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhHelp, _Component);
        function LhHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "rate_dragon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rate_tiger", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rate_tie", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LhHelp.prototype;
        _proto.start = function start() {};
        return LhHelp;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rate_dragon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rate_tiger", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rate_tie", [_dec5], {
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

System.register("chunks:///_virtual/LhInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Component, Common;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "50febdlEtxFHZnSASdIWONS", "LhInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhInfo = exports('default', (_dec = ccclass("LhInfo"), _dec2 = menu("game/lhgame/LhInfo"), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhInfo, _Component);
        function LhInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "nickName", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LhInfo.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _proto.setData = function setData(data) {
          this.nickName.string = data.nickName;
          this.txt_gold.string = Common.ChangeMoneyShow(data.yxb, 2);
          Common.getHead(data.avatar, this.head).then(function () {
            //            // let as = this.sprAvatar.getComponent(gts.AutoScale);
            //            // as.DoAutoScale();
            //            // let scale = 100 / this.head.node.getContentSize().width;
            //            // this.head.node.scale = scale;
          });
        };
        _proto.onClickHead = function onClickHead() {};
        return LhInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nickName", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
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

System.register("chunks:///_virtual/LhLoadingScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Slider, Label, assetManager, isValid, Component, MainManager, NetManager, ViewManager, Common, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      Label = module.Label;
      assetManager = module.assetManager;
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e369fmS135LDKwz74py0CQI", "LhLoadingScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LhLoadingScene = exports('default', (_dec = ccclass("LhLoadingScene"), _dec2 = property(Slider), _dec3 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhLoadingScene, _Component);
        function LhLoadingScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._mainManager = void 0;
          _this._viewManager = void 0;
          _this._audioManager = void 0;
          _this._eventManager = void 0;
          _this._configManager = void 0;
          _this._netManager = void 0;
          _this._buddle = void 0;
          _initializerDefineProperty(_this, "loding", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "per", _descriptor2, _assertThisInitialized(_this));
          // loading 阻止重复启动，loadAttempt 区分资源重试；不在正常 Scene 销毁时误伤成功收尾。
          _this.loading = false;
          _this.loadAttempt = 0;
          return _this;
        }
        var _proto = LhLoadingScene.prototype;
        _proto.onLoad = function onLoad() {
          this._mainManager = MainManager.getInstance();
          this._viewManager = this._mainManager.getViewManager();
          this._audioManager = this._mainManager.getAudioManager();
          this._eventManager = this._mainManager.getEventManager();
          this._configManager = this._mainManager.getConfigManager();
          this._netManager = this._mainManager.getNetManager();
          this._buddle = assetManager.getBundle("LhGame");
          this.loadingGame();
        };
        _proto.onEnable = function onEnable() {
          this._eventManager.on(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        };

        _proto.gameShow = function gameShow() {
          this._netManager.waitServiceSendData();
        };
        // 只负责从 loading Scene 进入真实游戏 Scene；错误提示确认仅重试本段资源，不重发游戏检查。
        _proto.loadingGame = function loadingGame() {
          var _this2 = this;
          if (this.loading || !isValid(this.node, true) || !this.node.activeInHierarchy || !this.enabled) return;
          this.loading = true;
          var attempt = ++this.loadAttempt;
          var owner = NetManager.instance.hallSession();
          // 成功激活会销毁 loading Scene，成功回调仅校验请求归属，其他阶段必须仍在现场。
          var current = function current(launched) {
            if (launched === void 0) {
              launched = false;
            }
            return attempt === _this2.loadAttempt && owner === NetManager.instance.hallSession() && (launched || isValid(_this2.node, true) && _this2.node.activeInHierarchy && _this2.enabled);
          };
          this.loding.progress = 0;
          this.per.string = "0%";
          ViewManager.instance.changeScene("LhScene", function (cur, total) {
            if (!current() || !(total > 0) || !isFinite(cur / total)) return;
            var percent = Math.min(0.99, Math.max(0, cur / total));
            _this2.loding.progress = percent;
            _this2.per.string = Math.floor(percent * 100) + "%";
          }, function (error) {
            if (!current(!error)) return;
            _this2.loading = false;
            if (!error) {
              _this2._eventManager.dispatch(_this2._configManager.eventTransform.enterUpdate, "cardLhd", 1);
              return;
            }
            _this2.loding.progress = 0;
            _this2.per.string = "0%";
            _this2._eventManager.dispatch(_this2._configManager.eventTransform.enterUpdateCancel);
            // 只由用户重试这一段资源加载，不重发进入游戏或资金请求。
            Common.showTipPop(i18n.lang.loadGameErr, function () {
              if (current()) _this2.loadingGame();
            }, null, current);
          }, false, current);
        };
        _proto.onDisable = function onDisable() {
          this._eventManager.off(this._configManager.eventTransform.gameShow, this.gameShow, this); //切到前台
        }
        //    // update (dt) {}
        ;

        return LhLoadingScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loding", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "per", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhPlayers.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './LhGameProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, instantiate, Label, Button, v2, Tween, Component, tween, v3, DataManager, UserKey, LhGameProxy, Common;
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
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      LhGameProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "18d6fK6tMNMp7Lhg8DX5mQM", "LhPlayers", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhPlayers = exports('default', (_dec = ccclass("LhPlayers"), _dec2 = menu("game/lhgame/LhPlayers"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhPlayers, _Component);
        function LhPlayers() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "players", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerPublic", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Prefab_seat", _descriptor3, _assertThisInitialized(_this));
          _this.otherUserCount = 7;
          _this._initPlayer = false;
          _this._isHundred = false;
          _this.playersPos = [];
          return _this;
        }
        var _proto = LhPlayers.prototype;
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
          var deskPlayer = this.getDeskPlayerByPlayerList(LhGameProxy.playerList);

          //        // console.log("LhGameProxy.playerList", LhGameProxy.playerList);
          this.updateTablePlayer(deskPlayer);
        };
        _proto.showPlayers = function showPlayers() {
          var _this2 = this;
          var deskPlayer = this.getDeskPlayerByPlayerList(LhGameProxy.playerList);
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
            var headNode = seat_bg.getChildByName("head");
            Common.getHead(redata[i].avatar, headNode);
            _player.name = redata[i].userId;
          }
        };
        return LhPlayers;
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

System.register("chunks:///_virtual/LhRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './UIClock.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './BlackWordProxy.ts', './ChipProxy.ts', './ChatProxy.ts', './ChipItem.ts', './ChipSmall.ts', './LhChipRectMgr.ts', './LhGameDef.ts', './LhGameProxy.ts', './LhPlayers.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Button, Node, Label, ScrollView, Prefab, SpriteFrame, AudioClip, SpriteAtlas, sp, instantiate, NodePool, resources, find, v3, Sprite, Tween, tween, UIOpacity, UITransform, Vec3, sys, isValid, AnimationClip, Animation, TweenSystem, Component, i18n, ProxyMgr, GUtil, UIClock, AudioManager, DataManager, UserProxyEvent, UserKey, NetManager, ViewManager, BlackWordProxy, ChipProxy, ChipEvent, ChipType, ChatProxy, ChatProxyEvent, ChipItem, ChipSmall, LhgameChipRectMgr, LhGameDef, LhGameProxy, LhGameEvent, LhGameState, LhPlayers, Common, MainManager;
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
      Button = module.Button;
      Node = module.Node;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      SpriteFrame = module.SpriteFrame;
      AudioClip = module.AudioClip;
      SpriteAtlas = module.SpriteAtlas;
      sp = module.sp;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
      resources = module.resources;
      find = module.find;
      v3 = module.v3;
      Sprite = module.Sprite;
      Tween = module.Tween;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      sys = module.sys;
      isValid = module.isValid;
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
      LhgameChipRectMgr = module.default;
    }, function (module) {
      LhGameDef = module.LhGameDef;
    }, function (module) {
      LhGameProxy = module.default;
      LhGameEvent = module.LhGameEvent;
      LhGameState = module.LhGameState;
    }, function (module) {
      LhPlayers = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "b9b4eMnPUxOJJBV0QSR72Ry", "LhRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhRoom = exports('default', (_dec = ccclass("LhRoom"), _dec2 = menu("game/lhgame/LhRoom"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(ScrollView), _dec11 = property(Prefab), _dec12 = property(SpriteFrame), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(Node), _dec16 = property(SpriteAtlas), _dec17 = property(sp.Skeleton), _dec18 = property(Prefab), _dec19 = property(LhPlayers), _dec20 = property(UIClock), _dec21 = property(sp.Skeleton), _dec22 = property(LhgameChipRectMgr), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhRoom, _Component);
        function LhRoom() {
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
          _initializerDefineProperty(_this, "spine_heguan", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipMgr", _descriptor20, _assertThisInitialized(_this));
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
        var _proto = LhRoom.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this._buddle = LhGameProxy.bundle;
          this.initChipPool();
          this._isReturnBack = false;
          this.initEvent();
          this.initGame();

          //        // LhGameDef.loadHeguanByType(this.spine_heguan, LhGameProxy.roomInfo.tableInfo.tableType, LhGameProxy.roomInfo.tableInfo.tableId).then(() => {
          //        //     this.spine_heguan.setAnimation(0, "idle", true);
          //        // });

          LhGameDef.loadHeguanByType(this.spine_heguan, LhGameProxy.roomInfo.tableInfo.tableId).then(function () {
            _this2.spine_heguan.setAnimation(0, "idle", true);
          });
        };
        _proto.start = function start() {
          //        //添加聊天
          ViewManager.instance.addChatView("cardLhd", this, LhGameProxy.roomInfo.tableInfo.tableId);

          //        // let helpPath = LhGameProxy.roomInfo.tableInfo.tableType == LhGameDef.SdTableType.NORMAL ? "prefab/SdHelp" : "prefab/SdRuleMD5";

          this.initSelfInfo();
          this.chipMgr.setRate();
          ChipProxy.initChipList(LhGameProxy.roomInfo.baseScoreList);
          this.createChipsList();
          //        // LhGameDef.loadIconByType(this.node_icon, LhGameProxy.roomInfo.tableInfo.tableType, LhGameProxy.roomInfo.tableInfo.tableId);
        };

        _proto.onDestroy = function onDestroy() {
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
          if (!this._chipPool) {
            this._chipPool = new NodePool(ChipSmall);
          }
          resources.load("prefab/public/chipSmall", Prefab, function (err, prefab) {
            for (var i = 0; i < 50; i++) {
              var newNode = instantiate(prefab);
              _this3._chipPool.put(newNode);
            }
          });
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          //        //button事件
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.protocolLh.bet, this.sendBet, this);

          //        // EventManager.instance.on(ConfigManager.instance.protocolLh.yxxBetBtn, this.selectCM, this);
          //        // EventManager.instance.on(ConfigManager.instance.protocolLh.yxxHaveBet, this.sendBet, this);

          EventManager.on(ConfigManager.protocolLh.btnPlayerInfo, this.showInfo, this);
          EventManager.on(ConfigManager.protocolLh.btnPublicInfo, this.showAllPlayerInfo, this);
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连

          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          ChipProxy.on(ChipEvent.SELECT_CHIP, this.selectCM, this);
          ChipProxy.on(ChipEvent.UPDATE_DIY_LIST, this.createChipsList, this);
          LhGameProxy.on(LhGameEvent.UPDATE_STATE, this.updateState, this);
          LhGameProxy.on(LhGameEvent.ENTER_ROOM, this.updateRoom, this);
          LhGameProxy.on(LhGameEvent.UPDATE_ROOM, this.updateRoom, this);
          LhGameProxy.on(LhGameEvent.UPDATE_PLAYER_LIST, this.updatePlayer, this);
          LhGameProxy.on(LhGameEvent.UPDATE_USER_LIST, this.showPublicInfoByPage, this);
          LhGameProxy.on(LhGameEvent.BET, this.doingBet, this);
          LhGameProxy.on(LhGameEvent.UPDATE_BET, this.updateBet, this);
          LhGameProxy.on(LhGameEvent.RESULT, this.showResult, this);
          LhGameProxy.on(LhGameEvent.CHECKOUT, this.checkOut, this);
          LhGameProxy.on(LhGameEvent.UPDATE_HISTORY, this.updatePath, this);
          ChatProxy.on(ChatProxyEvent.RECV_MSG, function (data) {
            _this4.showPlayerChat(data.msg);
          }, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, function () {
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
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh.enterRoom, {
                action: "HD_Enter",
                tableId: LhGameProxy.roomInfo.tableInfo.tableId
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
          for (var _iterator = _createForOfIteratorHelperLoose(data), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
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
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.getPlayerList, {});
        };
        _proto.onClickSelf = function onClickSelf() {
          var item = {
            head: DataManager.instance.getUserDataForKey(UserKey.AVATAR),
            gold: DataManager.instance.getUserDataForKey(UserKey.GOLD),
            name: DataManager.instance.getUserDataForKey(UserKey.NICKNAME)
          };
          GUtil.openPlayer(item);
        };
        _proto.showDeskPlayerInfo = function showDeskPlayerInfo(data) {
          var i = parseInt(data);
          var player = this.playersMgr.players[i - 1];
          for (var _iterator2 = _createForOfIteratorHelperLoose(LhGameProxy.playerList), _step2; !(_step2 = _iterator2()).done;) {
            var _user = _step2.value;
            if (_user.userId == player.name) {
              var item = {
                head: _user.avatar,
                gold: _user.yxb,
                name: _user.nickName
              };
              GUtil.openPlayer(item);
              break;
            }
          }
        };
        _proto.updateState = function updateState() {
          if (this.clock) {
            this.clock.hideTime = false;
            this.clock.Open(LhGameProxy.gameDownTime + 1);
          }
          switch (LhGameProxy.gameState) {
            case LhGameState.START:
              this.clearAllRoom();
              this.clock.changeColor = false;
              this.fapai();
              break;
            case LhGameState.BET:
              this.clock.changeColor = true;
              this._curCountDown = LhGameProxy.gameDownTime;
              this._curTotalTime = LhGameProxy.betTime;
              this.createCountDown();

              //                // this.renAni.getComponent(sp.Skeleton).setAnimation(0, "bet", false);
              //                // this.renAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);

              break;
            case LhGameState.RESULT:
              this.clock.changeColor = false;
              this._curCountDown = 0;
              break;
          }
        };
        _proto.fapai = function fapai() {
          var self = this;
          AudioManager.instance.playSound(this.yxxSound[0], false);
          var vs = find("gameLayer/vs", this.node);
          vs.active = true;
          this.spine_vs.timeScale = 1.5;
          this.spine_vs.node.scale = v3(1.1, 1.1, 1);
          this.spine_vs.setAnimation(0, "animation", false);
          var card1 = find("gameLayer/card1", this.node);
          var card2 = find("gameLayer/card2", this.node);
          card1.active = false;
          card2.active = false;
          this.scheduleOnce(function () {
            vs.active = false;
            AudioManager.instance.playSound(this.yxxSound[7], false);
            self.renAni.getComponent(sp.Skeleton).setAnimation(0, "fapai1", false);
          }, 1);
          this.scheduleOnce(function () {
            AudioManager.instance.playSound(this.yxxSound[7], false);
            var card1 = find("gameLayer/card1", this.node);
            card1.active = true;
            card1.scale = v3(0.45, 0.45, 1);
            card1.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame("back");
            self.renAni.getComponent(sp.Skeleton).setAnimation(0, "fapai4", false);
          }, 2);
          this.scheduleOnce(function () {
            var card2 = find("gameLayer/card2", this.node);
            card2.active = true;
            card2.scale = v3(0.45, 0.45, 1);
            card2.getComponent(Sprite).spriteFrame = self.cards.getSpriteFrame("back");
            self.renAni.getComponent(sp.Skeleton).setAnimation(0, "tangshou", false);
            self.renAni.getComponent(sp.Skeleton).addAnimation(0, "idle", true);
          }, 3);
        };
        _proto.backHall = function backHall() {
          if (this._isReturnBack) {
            return;
          }
          this._isReturnBack = true;
          //        // this.unscheduleAllCallbacks();
          ViewManager.instance.setGameData(null);
          AudioManager.instance.stopAll();
          LhGameProxy.emit(LhGameEvent.LEAVE_ROOM);
        };
        _proto.updatePlayer = function updatePlayer() {
          this.playersMgr.playerPublic.getChildByName("number").getComponent(Label).string = "" + LhGameProxy.playerCount;
          this.playersMgr.showPlayers();
        };
        _proto.updateRoom = function updateRoom() {
          var data = LhGameProxy.roomInfo;
          this.playersMgr.showPlayerCount();
          this.updatePlayer();

          //        // this.chipMgr.resetSelftBet();
          if (LhGameProxy.gameState == LhGameState.BET) {
            this.initBet();
            var list = data.tableInfo.betList;
            for (var _iterator3 = _createForOfIteratorHelperLoose(list), _step3; !(_step3 = _iterator3()).done;) {
              var bet = _step3.value;
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
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.history, {
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
          var data = LhGameProxy.resultData;
          var nums = data.openNum;
          var type = LhGameProxy.roomInfo.tableInfo.tableType;
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

          this.chipMgr.showHighLight(LhGameProxy.resultData.prizeResults);
        };
        _proto.emitBet = function emitBet() {
          var _this5 = this;
          //        //shou cm 把没中的区域 筹码收集到庄家
          var nodes = this.chipMgr.getReturnChipParents(LhGameProxy.resultData.prizeResults);
          var _loop = function _loop() {
            var player = nodes[i];
            var nodeArr = player.children;
            var pos = {
              xx: player.getComponent(UITransform).width / 2,
              yy: player.getComponent(UITransform).height / 2
            };
            var world = _this5.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
            var posren = player.getComponent(UITransform).convertToNodeSpaceAR(world);
            nodeArr.forEach(function (node, index) {
              if (index > LhGameDef.MAX_CHIP_REWARD) {
                _this5._chipPool.put(node);
                return;
              }
              tween(node).to(0.3, {
                position: v3(pos.xx, pos.yy)
              }).to(0.3, {
                position: v3(pos.xx, pos.yy + index * 2)
              }).to(0.5, {
                position: posren
              }).call(function () {
                _this5._chipPool.put(node);
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
            //            //发筹码 {item:CMnode,yztype:xzType} xzType：下注位置
            for (var _i5 = 0, _Object$entries = Object.entries(_this5.betList); _i5 < _Object$entries.length; _i5++) {
              var _Object$entries$_i = _Object$entries[_i5],
                _i6 = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              //                //玩家
              var num = 0;
              var _loop2 = function _loop2() {
                  //                    //区域
                  var obj = value[j];
                  var count = _this5.getNumBet(obj.yztype);
                  if (count > 0) {
                    num = num + 1;
                    if (num > LhGameDef.MAX_CHIP_REWARD) {
                      _this5._chipPool.put(obj.item);
                      return 1; // continue
                    }
                    //                        //返还筹码
                    var yzpool = _this5.chipMgr.getChipParent(obj.yztype);
                    var player = _this5.playersMgr.players[parseInt(_i6) - 1];
                    var positionNode = player.getChildByName("img_1");
                    var world = positionNode.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                    var world2 = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posren2 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world2);
                    var worldren = _this5.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                    var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                    tween(obj.item).to(0.3, {
                      position: v3(posren.x, posren.y + (num - 1) * 2)
                    })
                    // .to(0.6 + num * 0.05, { opacity: 255 })
                    .delay(0.6 + num * 0.05).to(0.3, {
                      position: posren2
                    }).call(function () {
                      _this5._chipPool.put(obj.item);
                    }).start();
                    var maxCount = count > LhGameDef.MAX_CHIP_REWARD ? LhGameDef.MAX_CHIP_REWARD : count;
                    var _loop3 = function _loop3() {
                      if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                      var itemBet = _this5.getChipNode(obj.item.getComponent(ChipSmall).value);
                      yzpool.addChild(itemBet);
                      itemBet.position = posrento;
                      var positionNode = player.getChildByName("img_1");
                      var posX = positionNode.getPosition().x > 0 ? 40 * (m + 1) : -40 * (m + 1);
                      var world3 = positionNode.getComponent(UITransform).convertToWorldSpaceAR(v3(posX, 0));
                      //                            // let positionNode2 = player.getChildByName("img_" + (m + 2));
                      //                            // let world3 = positionNode2.convertToWorldSpaceAR(cc.v2(0,0));

                      var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                      _this5.createBetList.push(itemBet);
                      tween(itemBet).to(0.3, {
                        position: v3(posre3.x, posre3.y + (num - 1) * 2)
                      })
                      // .to(0.6 + num * 0.05, { opacity: 255 })
                      .delay(0.6 + num * 0.05).to(0.3, {
                        position: posren2
                      }).call(function () {
                        _this5._chipPool.put(itemBet);
                      }).start();
                    };
                    for (m = 0; m < maxCount; m++) {
                      if (_loop3()) continue;
                    }
                  }
                },
                m;
              for (var j = 0; j < value.length; j++) {
                if (_loop2()) continue;
              }
            }
            _this5.emitMyselfBet();
            _this5.emitPublicBet();
            _this5.backMoney();
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
        };
        _proto.backMoney = function backMoney() {
          var _this6 = this;
          this.scheduleOnce(function () {
            if (LhGameProxy.resultData == null) {
              return;
            }
            for (var i = 0; i < _this6.playersMgr.players.length; i++) {
              var player = _this6.playersMgr.players[i];
              var uid = player.name;
              var data = LhGameProxy.resultData.seatPrize;
              for (var _iterator4 = _createForOfIteratorHelperLoose(data), _step4; !(_step4 = _iterator4()).done;) {
                var item = _step4.value;
                if (item.userId == uid) {
                  var add = item.prizeAmount;
                  if (add > 0) _this6.addScore(player, "+" + Common.ChangeMoneyShow(add, 2));
                  break;
                }
              }
            }
            if (LhGameProxy.resultData.userPrize.prizeAmount > 0) {
              var _player = _this6.playerself;
              var tips = _player.getChildByName("addScore");
              tips.getChildByName("text").getComponent(Label).string = "+" + Common.ChangeMoneyShow(LhGameProxy.resultData.userPrize.prizeAmount, 2);
              tips.active = true;
            }
            _this6.renAni.getComponent(sp.Skeleton).setAnimation(0, "xipai", false);
          }, 2);
        };
        _proto.emitMyselfBet = function emitMyselfBet() {
          var _this7 = this;
          var num = 0;
          var _loop4 = function _loop4() {
              var betInfo = _step5.value;
              var obj = betInfo;
              var count = _this7.getNumBet(betInfo.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > LhGameDef.MAX_CHIP_REWARD) {
                  _this7._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this7.chipMgr.getChipParent(obj.yztype);
                var player = _this7.playerself;
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
                  _this7._chipPool.put(obj.item);
                }).start();
                var worldren = _this7.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > LhGameDef.MAX_CHIP_REWARD ? LhGameDef.MAX_CHIP_REWARD : count;
                var _loop5 = function _loop5() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this7.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  var positionNode2 = player.getChildByName("img_" + (m + 2));
                  var world3 = positionNode2.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                  var posre3 = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world3);
                  _this7.createBetList.push(itemBet);
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
                    _this7._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop5()) continue;
                }
              }
            },
            m;
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.betselfList), _step5; !(_step5 = _iterator5()).done;) {
            if (_loop4()) continue;
          }
        };
        _proto.emitPublicBet = function emitPublicBet() {
          var _this8 = this;
          var num = 0;
          var _loop6 = function _loop6() {
              var betInfo = _step6.value;
              var obj = betInfo;
              var count = _this8.getNumBet(obj.yztype);
              if (count > 0) {
                num = num + 1;
                if (num > LhGameDef.MAX_CHIP_REWARD) {
                  _this8._chipPool.put(obj.item);
                  return 1; // continue
                }

                var yzpool = _this8.chipMgr.getChipParent(obj.yztype);
                var player = _this8.playersMgr.playerPublic;
                var world = player.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posren = yzpool.getComponent(UITransform).convertToNodeSpaceAR(world);
                tween(obj.item).to(0.5, {
                  position: posren
                }).call(function () {
                  _this8._chipPool.put(obj.item);
                }).start();
                var worldren = _this8.renAni.getComponent(UITransform).convertToWorldSpaceAR(new Vec3(0, 0));
                var posrento = yzpool.getComponent(UITransform).convertToNodeSpaceAR(worldren);
                var maxCount = count > LhGameDef.MAX_CHIP_REWARD ? LhGameDef.MAX_CHIP_REWARD : count;
                var _loop7 = function _loop7() {
                  if (!obj.item.getComponent(ChipSmall)) return 1; // continue
                  var itemBet = _this8.getChipNode(obj.item.getComponent(ChipSmall).value);
                  yzpool.addChild(itemBet);
                  itemBet.position = posrento;
                  _this8.createBetList.push(itemBet);
                  tween(itemBet).to(0.5, {
                    position: posren
                  }).call(function () {
                    _this8._chipPool.put(itemBet);
                  }).start();
                };
                for (m = 0; m < maxCount; m++) {
                  if (_loop7()) continue;
                }
              }
            },
            m;
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.betPublicList), _step6; !(_step6 = _iterator6()).done;) {
            if (_loop6()) continue;
          }
        };
        _proto.getNumBet = function getNumBet(yztype) {
          var count = 0;
          if (LhGameProxy.resultData.prizeResults == yztype) {
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
          var _this9 = this;
          this.kajiang.scale = v3(0, 0, 1);
          this.kajiang.getComponent(UIOpacity).opacity = 255;
          this.kajiang.active = true;
          tween(this.kajiang).to(0.5, {
            scale: v3(2, 2, 1)
          }).call(function () {
            _this9.kajiang.active = false;
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
          for (var i = 0; i < len; i++) {
            var name = "path" + (count + 1 + i);
            var item = pathLayer.getChildByName(name);
            if (item) {
              item.active = true;
              item.getComponent(Sprite).spriteFrame = this.lhSp[parseInt(data[i]) - 1];
            }
          }
        };
        _proto.checkOut = function checkOut() {
          var _this10 = this;
          this.scheduleOnce(function () {
            _this10.emitBet();
          }, 0.4);
        };
        _proto.showResult = function showResult() {
          //        // this.playResultSound();
          //        // this.showResultAni();
          //        // this.emitBet();
          this.scheduleOnce(function () {
            NetManager.instance.sendOnlineData(ConfigManager.protocolLh.history, {
              tableId: LhGameProxy.roomInfo.tableInfo.tableId,
              size: "120"
            });
          }, 1);
          this.wandong();
          var card1 = find("gameLayer/card1", this.node);
          var card2 = find("gameLayer/card2", this.node);
          var scalex1 = card1.scale.x;
          var scalex2 = card2.scale.x;
          var self = this;
          var result = JSON.parse(LhGameProxy.resultData.openNum);
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
            if (LhGameProxy.resultData.prizeResults != 1) {
              var ani = LhGameProxy.resultData.prizeResults == 1 ? "left1" : "right1";
              self.renAni.getComponent(sp.Skeleton).setAnimation(0, ani, false);
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
          var id = config.id;
          var xzType = config.betType;
          var xiazhuzhi = config.count;
          var delay = config.delay || 0;
          var needAni = config.needAni || true;
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
          var x = Math.random() * 200 + 30;
          var y = Math.random() * 50 + 10;
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
          if (LhGameProxy.gameState != LhGameState.BET) {
            Common.showTip(i18n.lang.disableBet);
            return;
          }
          var pos = data;
          var num = "" + this._chip.count;
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.doingBet, {
            pos: pos,
            betAmount: num
          });
        };
        _proto.selectCM = function selectCM(data, from) {
          if (from != LhGameProxy.BUNDLE) {
            return;
          }
          var children = this.scrollViewCM.content.children;
          for (var _iterator7 = _createForOfIteratorHelperLoose(children), _step7; !(_step7 = _iterator7()).done;) {
            var child = _step7.value;
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
          var _this11 = this;
          this.scrollViewCM.content.destroyAllChildren();
          var minChip = ChipProxy.chipList[0].count;
          for (var _iterator8 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step8; !(_step8 = _iterator8()).done;) {
            var i = _step8.value;
            if (i.count < minChip) {
              continue;
            }
            var _chip = instantiate(this.bigCM);
            this.scrollViewCM.content.addChild(_chip);
            _chip.scale = v3(0.8, 0.8, 1);
            _chip.getComponent(UITransform).width = 105;
            _chip.getComponent(UITransform).height = 105;
            _chip.getComponent(ChipItem).setData(i, ChipType.CHIP_DIY, LhGameProxy.BUNDLE);
          }
          for (var _iterator9 = _createForOfIteratorHelperLoose(ChipProxy.chipList), _step9; !(_step9 = _iterator9()).done;) {
            var _i7 = _step9.value;
            var has = false;
            for (var _iterator10 = _createForOfIteratorHelperLoose(ChipProxy.diyList), _step10; !(_step10 = _iterator10()).done;) {
              var j = _step10.value;
              if (j.count == _i7.count) {
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
            _chip2.getComponent(ChipItem).setData(_i7, ChipType.CHIP, LhGameProxy.BUNDLE);
          }
          this.scheduleOnce(function () {
            var child = _this11.scrollViewCM.content.children[0];
            child.getComponent(ChipItem).moveUp();
            _this11.scrollViewCM.scrollToLeft();
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
          AudioManager.instance.playGameMusic(this.bgMusic, true); //播放背景音乐
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.startGame, {});
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getWallet, {});
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.onClickLastBet = function onClickLastBet() {
          var _this12 = this;
          var bets = this.chipMgr.lastBets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh.doingBet, {
                pos: i,
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnLast, false);
          tween(this.BtnLast.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this12.BtnLast, true);
          }).start();
          //        // this._netManager.sendOnlineData(LhGameProxy.serverID + "/" + this._configManager.protocolLh.LastXZ.split("/")[1], { action: "HD_LastXiaZhu" });
        };

        _proto.onClickDoubleBet = function onClickDoubleBet() {
          var _this13 = this;
          var bets = this.chipMgr.bets;
          for (var i in bets) {
            if (bets[i] > 0) {
              NetManager.instance.sendOnlineData(ConfigManager.protocolLh.doingBet, {
                pos: i,
                betAmount: bets[i] + ""
              });
            }
          }
          Common.setButtonEnableWithGray(this.BtnJiabei, false);
          tween(this.BtnJiabei.node).delay(2).call(function () {
            Common.setButtonEnableWithGray(_this13.BtnJiabei, true);
          }).start();
          //        // this._netManager.sendOnlineData(LhGameProxy.serverID + "/" + this._configManager.protocolLh.DoubleXZ.split("/")[1], { action: "HD_DoubleXiaZhu" });
        };

        _proto.onClickExit = function onClickExit() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolLh.exitRoom, {
            action: "HD_QuitTable"
          });
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("cardLhd");
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/LhHelp", LhGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/LhRecord", this._buddle, function () {}, function (LhRecord) {
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
          //        // EventManager.instance.off(ConfigManager.instance.protocolLh.yxxBetBtn, this.selectCM, this);
          EventManager.off(ConfigManager.protocolLh.bet, this.sendBet, this);

          //        // EventManager.instance.off(ConfigManager.instance.protocolLh.SdplayerInfo, this.showInfo, this);
          //        // EventManager.instance.off(ConfigManager.instance.protocolLh.SdPublic, this.showAllPlayerInfo, this);

          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连

          ProxyMgr.close(this);
        };
        _proto.showPlayerChat = function showPlayerChat(data) {
          if (!data) return;
          if (data.GroupId != "cardLhd" + LhGameProxy.roomInfo.tableInfo.tableId) return;
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
              LhGameProxy.chatQueueList.push(data);
              this.showPublicChat(1);
            } else if (data.MsgType == 2) {
              LhGameProxy.expressionQueueList.push(data);
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
          var _this14 = this;
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
              _this14.loadLocalFrameAnim(data.Content, node_expression, function () {
                chatRoot.destroyFromParent();
              });
            }
          });
        };
        _proto.showPublicChat = function showPublicChat(nType) {
          var _this15 = this;
          if (nType == 1) {
            //            //文本
            if (LhGameProxy.chatQueueList.length < 1) return;
            var _loop8 = function _loop8() {
              var node_chat = find("seat_bg/node_chat" + i, _this15.playersMgr.playerPublic);
              if (!isValid(node_chat)) return 1; // continue
              if (!node_chat.active && LhGameProxy.chatQueueList.length > 0) {
                node_chat.active = true;
                var data = LhGameProxy.chatQueueList.shift();
                var lbl_chat = find("lbl_chat", node_chat).getComponent(Label);
                data.Content = BlackWordProxy.filter(data.Content);
                lbl_chat.string = data.Content;
                node_chat.scale = v3(0, 0, 1);
                var scale_y = i == 3 ? -1 : 1;
                tween(node_chat).stop().delay(0.1 * i).to(0.2, {
                  scale: v3(-1, scale_y, 1)
                }).delay(2.0).call(function () {
                  node_chat.active = false;
                  _this15.showPublicChat(1);
                }).start();
              }
            };
            for (var i = 1; i < 4; ++i) {
              if (_loop8()) continue;
            }
          } else if (nType == 2) {
            if (!LhGameProxy.expressionQueueList || LhGameProxy.expressionQueueList.length < 1) return;
            var node_expression = find("seat_bg/node_expression", this.playersMgr.playerPublic);
            if (!isValid(node_expression)) return;
            if (!node_expression.active) {
              node_expression.active = true;
              node_expression.scale = v3(0, 0, 1);
              var data = LhGameProxy.expressionQueueList.shift();
              tween(node_expression).stop().call(function () {
                _this15.loadLocalFrameAnim(data.Content, node_expression, function () {
                  node_expression.active = false;
                  _this15.showPublicChat(2);
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
          var _this16 = this;
          resources.load("chat/" + aniName, SpriteAtlas, function (err, sprAtlas) {
            var sprFrmAry = sprAtlas.getSpriteFrames();
            _this16.createAnim(sprFrmAry, aniName, item, callBack);
          });
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _createClass(LhRoom, [{
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
        return LhRoom;
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
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "spine_heguan", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "chipMgr", [_dec22], {
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

System.register("chunks:///_virtual/LhScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './LhGameProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, NetManager, ViewManager, LhGameProxy, LhGameEvent, Common, MainManager;
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
      LhGameProxy = module.default;
      LhGameEvent = module.LhGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3b1dfylibRK2rrJvqB/Rkr0", "LhScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var LhScene = exports('default', (_dec = ccclass("LhScene"), _dec2 = menu("game/lhgame/LhScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhScene, _Component);
        function LhScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_desk", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_room", _descriptor2, _assertThisInitialized(_this));
          _this.node_desk = null;
          _this.node_room = null;
          return _this;
        }
        var _proto = LhScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.onEvent();
          this.createDesk();
        };
        _proto.start = function start() {
          this.preLoad();
        };
        _proto.preLoad = function preLoad() {

          //        // bundle.preload("prefab/LhRoom", cc.Prefab);
        };
        _proto.createDesk = function createDesk() {
          if (this.node_desk) {
            return;
          }
          var node = instantiate(this.pre_desk);
          this.node.addChild(node);
          this.node_desk = node;
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
          LhGameProxy.on(LhGameEvent.ENTER_ROOM, function () {
            if (_this2.node_desk) {
              _this2.node_desk.removeFromParent();
              _this2.node_desk.destroy();
              _this2.node_desk = null;
            }
            _this2.createRoom();
          }, this);
          LhGameProxy.on(LhGameEvent.LEAVE_ROOM, function () {
            if (_this2.node_room) {
              _this2.node_room.removeFromParent();
              _this2.node_room.destroy();
              _this2.node_room = null;
            }
            _this2.createDesk();
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
          LhGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          LhGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return LhScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_desk", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec4], {
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

System.register("chunks:///_virtual/LhshowMenu.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, NodeEventType, UITransform, tween, v3, UIOpacity, Component;
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
      NodeEventType = module.NodeEventType;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "aecdea7xC1L5Z4a7zMp5Buo", "LhshowMenu", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var LhshowMenu = exports('default', (_dec = ccclass("LhshowMenu"), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhshowMenu, _Component);
        function LhshowMenu() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "BtnMenu", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgEvent", _descriptor2, _assertThisInitialized(_this));
          _this._orginx = void 0;
          return _this;
        }
        var _proto = LhshowMenu.prototype;
        _proto.onLoad = function onLoad() {
          this._orginx = this.node.getChildByName("bg").getPosition().x;
          this.bgEvent.on(NodeEventType.TOUCH_END, this.exitMenu, this);
        };
        _proto.onEnable = function onEnable() {
          var direx = this.node.getChildByName("bg").getComponent(UITransform).width;
          this.BtnMenu.active = false;
          tween(this.node.getChildByName("bg")).to(0.5, {
            position: v3(this._orginx + direx + 30, this.node.getChildByName("bg").position.y)
          }, {
            easing: "backOut"
          }).start();
        };
        _proto.exitMenu = function exitMenu() {
          var self = this;
          var direx = this.node.getChildByName("bg").getComponent(UITransform).width;
          tween(this.node.getChildByName("bg"))
          // .to(0.5, { x: this._orginx, opacity: 0 }, { easing: "backOut" })
          .to(0.5, {
            position: v3(this._orginx, this.node.getChildByName("bg").position.y)
          }, {
            easing: "backOut"
          }).call(function () {
            self.node.active = false;
            self.BtnMenu.active = true;
            self.node.getChildByName("bg").getComponent(UIOpacity).opacity = 255;
          }).start();
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return LhshowMenu;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BtnMenu", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bgEvent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/LhGame', 'chunks:///_virtual/LhGame'); 
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