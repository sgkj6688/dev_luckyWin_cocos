System.register("chunks:///_virtual/FortuneElephantCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneElephantRunItem.ts', './FortuneElephantProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, Tween, tween, Component, FortuneElephantRunItem, FortuneElephantProxy, FortuneElephantGameEvent;
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
      Prefab = module.Prefab;
      Node = module.Node;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      FortuneElephantRunItem = module.default;
    }, function (module) {
      FortuneElephantProxy = module.default;
      FortuneElephantGameEvent = module.FortuneElephantGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "0016eZp+4hDZIriEeNBZaAe", "FortuneElephantCardAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CARDCOUNT = 5;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULT: 3,
        END: 4,
        END_EMIT: 5
      };
      var FortuneElephantCardAni = exports('default', (_dec = ccclass("FortuneElephantCardAni"), _dec2 = menu("game/FortuneElephant/FortuneElephantCardAni"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantCardAni, _Component);
        function FortuneElephantCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepHeight", _descriptor3, _assertThisInitialized(_this));
          //数字高度
          _this.runningCard = [];
          _this.moveOut = 100;
          _this.delayTime = 0;
          //动画延迟
          _this.moveStep = 60;
          //每帧移动步长
          _this.finishCallBack = null;
          _this._state = CardState.NORMAL;
          _this.result = void 0;
          _this.leftResultCount = 3;
          _this.endNode = void 0;
          _this.endIndex = 3;
          _this.fixStep = void 0;
          _this._index = 0;
          return _this;
        }
        var _proto = FortuneElephantCardAni.prototype;
        _proto.onLoad = function onLoad() {
          var startY = 340;
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_card);
            this.node.addChild(node);
            // node.getPosition().y = startY - i * 170;
            node.setPosition(v3(0, startY - i * 170));
            var com = node.getComponent(FortuneElephantRunItem);
            this.runningCard.push(com);
          }
          this.node_light.active = false;
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startY = 340;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 170));
          }
        };
        _proto.initCard = function initCard(card) {
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < this.runningCard.length; i++) {
              var rand = card[i];
              this.runningCard[i].setCard(rand);
              //                // this.runningCard[i].node.scale = 0.65;
              //                // cc.tween(this.runningCard[i].node)
              //                //     .delay(0.1 * i)
              //                //     .to(0.3, { scale: 0.7 })
              //                //     .start();
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              this.randCard(_i);
              //                // i.node.scale = 0.65;
              //                // cc.tween(i.node)
              //                //     .delay(0.1 * index)
              //                //     .to(0.3, { scale: 0.7 })
              //                //     .start();
              //                // index++;
            }
          }
        };

        _proto.start = function start() {};
        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        };
        _proto.randCard = function randCard(node) {
          node.randCard();
        };
        _proto.resultCard = function resultCard(node) {
          if (this.leftResultCount > 0) {
            this.leftResultCount--;
            var result = this.result[this.leftResultCount];
            node.setCard(result);
            node.node.getComponent(UITransform).priority = this.leftResultCount;
          }
        };
        _proto.showLight = function showLight() {
          this.node_light.active = true;
        };
        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          if (reConnect) {
            for (var i = 0; i < 3; i++) {
              var index = this.endIndex + i - 2;
              if (index < 0) {
                index = 5 + index;
              }
              this.runningCard[index].setCard(cardValue[i]);
            }
          } else {
            this.result = cardValue;
            this.setState(CardState.RESULT);
          }
        };
        _proto.show = function show() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.runningCard), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            i.node.active = true;
          }
          this.initPos();
        };
        _proto.hide = function hide(i) {
          var index = this.endIndex + i - 2;
          if (index < 0) {
            index = 5 + index;
          }
          Tween.stopAllByTarget(this.runningCard[index].node);
          this.runningCard[index].node.active = false;
        };
        _proto.run = function run(delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.initPos();
          this.show();
          this.delayTime = delayTime;
          this.moveStep = 80; //每帧移动步长
          this.setState(CardState.DELAY);
          this.leftResultCount = 3;
          this.endNode = null;
        };
        _proto.setState = function setState(state) {
          this._state = state;
          if (state == CardState.RUN || state == CardState.RESULT) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
              var i = _step3.value;
              i.setState(state);
            }
          }
        };
        _proto.update = function update(dt) {
          switch (this._state) {
            case CardState.DELAY:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this.setState(CardState.RUN);
                }
                break;
              }
            case CardState.RUN:
              {
                var length = this.runningCard.length;
                for (var i = 0; i < length; i++) {
                  var node = this.runningCard[i].node;
                  node.setPosition(0, node.getPosition().y - this.moveStep);
                  if (node.getPosition().y < -(this.stepHeight + this.moveOut)) {
                    // node.getPosition().y += this.stepHeight * CARDCOUNT;
                    node.setPosition(0, node.getPosition().y + this.stepHeight * CARDCOUNT);
                    this.randCard(this.runningCard[i]);
                  }
                }
                break;
              }
            case CardState.RESULT:
              {
                this.moveStep -= 2;
                if (this.moveStep < 40) {
                  this.moveStep = 40;
                }
                var _length = this.runningCard.length;
                for (var _i2 = 0; _i2 < _length; _i2++) {
                  var _node = this.runningCard[_i2].node;
                  _node.setPosition(0, _node.getPosition().y - this.moveStep);
                  if (_node.getPosition().y < -(this.stepHeight + this.moveOut)) {
                    _node.setPosition(0, _node.getPosition().y + this.stepHeight * CARDCOUNT);
                    this.resultCard(this.runningCard[_i2]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i2;
                    }
                  }
                  if (_node == this.endNode && _node.getPosition().y <= -this.stepHeight - 5) {
                    this.setState(CardState.END);
                    this.fixStep = _node.getPosition().y + this.stepHeight;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                for (var _i3 = 0; _i3 < _length2; _i3++) {
                  var _node2 = this.runningCard[_i3].node;
                  var toY = _node2.getPosition().y - this.fixStep;
                  tween(_node2).to(0.1, {
                    position: v3(_node2.position.x, toY)
                  }).start();
                }
                this._state = CardState.END_EMIT;
                this.delayTime = 0.1;
                this.node_light.active = false;
                break;
              }
            case CardState.END_EMIT:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this._state = CardState.NORMAL;
                  FortuneElephantProxy.emit(FortuneElephantGameEvent.FINISH_RUN_INDEX, this._index);
                }
                break;
              }
          }
        };
        return FortuneElephantCardAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stepHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 215;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneElephantDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './FortuneElephantProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, FortuneElephantProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      FortuneElephantProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8e2d60v7TFGOaDegCH90oZJ", "FortuneElephantDef", undefined);
      var FortuneElephantDef = exports('FortuneElephantDef', /*#__PURE__*/function () {
        function FortuneElephantDef() {}
        FortuneElephantDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = FortuneElephantProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            if (err) {
              console.log(err);
            }
            if (call) {
              var soundId = AudioManager.instance.playSound(audio);
              call(soundId);
            } else {
              AudioManager.instance.playOneShot(audio);
            }
          });
        };
        FortuneElephantDef.palyMusic = function palyMusic(name) {
          var bundle = FortuneElephantProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        FortuneElephantDef.init = function init() {};
        FortuneElephantDef.getRand = function getRand(i) {
          var rates = this.rates[i];
          var alllength = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(rates), _step; !(_step = _iterator()).done;) {
            var _i2 = _step.value;
            alllength += _i2;
          }
          var rand = Math.round(Math.random() * alllength);
          for (var _i = rates.length - 1; _i >= 0; _i--) {
            var left = rates[_i];
            if (alllength - rand < left) {
              return _i;
            }
            alllength -= left;
          }
          return Math.floor(Math.random() * this.cardlines[i].length);
        };
        FortuneElephantDef.randRusult = function randRusult(amount, add) {
          if (add === void 0) {
            add = false;
          }
          var per = add ? 1.5 : 1;
          this.tryGold -= amount * per;
          var openNums = [];
          for (var i = 0; i < 3; i++) {
            openNums[i] = this.cardlines[i][this.getRand(i)];
            openNums[i + 3] = this.cardlines[i][this.getRand(i)];
            openNums[i + 6] = this.cardlines[i][this.getRand(i)];
          }
          var multiples = [this.getMultple(), this.getMultple(), this.getMultple()];
          var prizeAmount = 0;
          var _this$checkPrize = this.checkPrize(openNums),
            prizeInfo = _this$checkPrize.prizeInfo,
            lines = _this$checkPrize.lines;
          for (var _iterator2 = _createForOfIteratorHelperLoose(prizeInfo), _step2; !(_step2 = _iterator2()).done;) {
            var prize = _step2.value;
            prizeAmount += prize.Odds * amount / 5 * multiples[1];
          }
          this.tryGold += prizeAmount;
          var result = {
            openResult: {
              OpenNums: openNums,
              multiples: multiples
            },
            prizeInfo: prizeInfo,
            prizeAmount: prizeAmount,
            prizeIdx: lines
          };
          return result;
        };
        FortuneElephantDef.getMultple = function getMultple() {
          var multOdd = [1, 2, 3, 5, 10, 15];
          var multQuality = [30, 15, 10, 6, 3, 2];
          var rates = multQuality;
          var alllength = 0;
          for (var _i3 = 0, _rates = rates; _i3 < _rates.length; _i3++) {
            var i = _rates[_i3];
            alllength += i;
          }
          var multiple = 0;
          var rand = Math.round(Math.random() * alllength);
          for (var _i4 = rates.length - 1; _i4 >= 0; _i4--) {
            var left = rates[_i4];
            if (alllength - rand < left) {
              multiple = multOdd[_i4];
              break;
            }
            alllength -= left;
          }
          return multiple;
        };
        FortuneElephantDef.checkPrize = function checkPrize(openNums) {
          var hasPrize = function hasPrize(result, PrizeType) {
            var prize = null;
            var count = 0;
            var start = result[count];
            while (start == 1) {
              count++;
              start = result[count];
            }
            count++;
            for (var i = count; i < 3; i++) {
              if (result[i] == start || result[i] == 1) {
                count++;
              } else {
                break;
              }
            }
            if (this.odds[start - 1] && count == 3) {
              prize = {
                Odds: this.odds[start - 1],
                PrizeNum: "{\"Num\":" + count + ",\"Symbol\":" + start + "}",
                PrizeType: PrizeType
              };
            }
            return prize;
          };
          var prizeInfo = [];
          var lines = [];
          for (var i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            var result = [];
            for (var _i5 = 0, len = line.length; _i5 < len; _i5++) {
              result[_i5] = openNums[line[_i5]];
            }
            var prize = hasPrize(result, i);
            if (prize) {
              prizeInfo.push(prize);
              lines.push(line);
            }
          }
          return {
            prizeInfo: prizeInfo,
            lines: lines
          };
        };
        return FortuneElephantDef;
      }());
      FortuneElephantDef.ProtocolFortuneElephant = {
        bet: "slotGaneshaGold/HD_Bet",
        info: "slotGaneshaGold/HD_info"
      };
      FortuneElephantDef.audio = {
        AWARD1: "prize_small_win",
        BG: "bgm_mg",
        BG2: "bgm_fs",
        END: "spin_reel_stop_normal",
        QUICK_END: "spin_reel_stop_quick",
        TURN: "spin_btn",
        //        // WILD: "sym_wild",
        BIGWIN: "bigwin_music",
        //        // SINGLE_LINE: "prizePayoutIdle",
        COLLECT_WILD: "sym_wild",
        //        // COLLECT_WILD2: "voxWildCollect01",
        SHOW_WINDOW: "ui_btn_click",
        LINE5: "prize_5ofkind",
        SCATTER1: "sym_scatter",
        SCATTER2: "sym_scatter_to_fs",
        NUM_TO_INFO: "fs_multi_num_to_infoboard",
        MULTI_CHANGE: "fs_multi_change_central",
        NULTI_INCREASE: "fs_multibar_increase",
        NULTI_NEXT: "fs_multibar_nextlevel",
        FREE_WIN: "bgm_total_main"
      };
      FortuneElephantDef.tryGold = 100000000;
      FortuneElephantDef.odds = {
        2: [30, 60, 150],
        3: [20, 45, 90],
        4: [15, 30, 60],
        5: [10, 15, 45],
        6: [8, 10, 30],
        7: [8, 10, 30],
        8: [5, 8, 15],
        9: [5, 8, 15]
      };
      FortuneElephantDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      FortuneElephantDef.lines = [[3, 4, 5], [0, 1, 2], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      FortuneElephantDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneElephantGame", ['./FortuneElephantCardAni.ts', './FortuneElephantDef.ts', './FortuneElephantProxy.ts', './FortuneElephantRunItem.ts', './FortuneElephantScene.ts', './FortuneElephantSetAuto.ts', './FortuneElephantView.ts', './FortuneElephantWinItem.ts', './FortuneElephantWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FortuneElephantProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './MainManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, ProxyBase, MainManager, Common;
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
      ProxyBase = module.ProxyBase;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "651adAI3X1Mzp8N9pxlzg/B", "FortuneElephantProxy", undefined);
      // import { FortuneElephantDef } from "../../game/FortuneElephantGame/script/FortuneElephantDef";

      var FortuneElephantGameEvent = exports('FortuneElephantGameEvent', /*#__PURE__*/function (FortuneElephantGameEvent) {
        FortuneElephantGameEvent["ENTER_ROOM"] = "enterRoom";
        FortuneElephantGameEvent["LEAVE_ROOM"] = "leaveRoom";
        FortuneElephantGameEvent["UPDATE_CONFIG"] = "updateConfig";
        FortuneElephantGameEvent["UPDATE_BETLIST"] = "updateBetList";
        FortuneElephantGameEvent["CLOSE_BONUS"] = "closeBonus";
        FortuneElephantGameEvent["SELECT_BET"] = "selectBet";
        FortuneElephantGameEvent["START"] = "start";
        FortuneElephantGameEvent["CLICK_ITEM"] = "clickItem";
        FortuneElephantGameEvent["ERROR"] = "errorReturn";
        FortuneElephantGameEvent["FINISH_RUN_INDEX"] = "FINISH_RUN_INDEX";
        return FortuneElephantGameEvent;
      }({}));
      var FortuneElephantProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(FortuneElephantProxyMgr, _ProxyBase);
        function FortuneElephantProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "FortuneElephantGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolFortuneElephant.bet, MainManager.instance.getConfigManager().ProtocolFortuneElephant.info];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [0.05, 0.1, 1, 10];
          _this.betMaxCount = 10;
          _this.betRate = 30;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          return _this;
        }
        var _proto = FortuneElephantProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * 1000 * (this._curBetCount + 1) * this.betRate;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(FortuneElephantGameEvent.SELECT_BET);
        };
        _proto.setBetByCount = function setBetByCount(count) {
          for (var i = 0; i < this.betList.length; i++) {
            for (var j = 0; j < this.betMaxCount; j++) {
              var num = this.betList[i] * 1000 * (j + 1) * this.betRate;
              if (num == count) {
                this.setBet(i, j);
              }
            }
          }
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            MainManager.instance.getEventManager().on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            MainManager.instance.getEventManager().off(event, this.recvData, this);
          }
        };
        _proto.addLuckyData = function addLuckyData() {
          // let arr = this.result.LuckySymbolsArr;
          // let rand = Math.floor(Math.random() * 4) + 1;
          // let getList = function () {
          //     let list = [2, 3, 4, 5, 6, 7];
          //     let num1 = list.splice(Math.floor(Math.random() * list.length), 1);
          //     let num2 = list.splice(Math.floor(Math.random() * list.length), 1);
          //     return [num1[0], 1, num2[0], num1[0], 1, num2[0], num1[0], 1, num2[0]];
          // };
          // for (let i = 0; i < rand; i++) {
          //     let list = getList();
          //     arr.unshift(list);
          // }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == MainManager.instance.getConfigManager().ProtocolFortuneElephant.bet) {
              this.emit(FortuneElephantGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case MainManager.instance.getConfigManager().ProtocolFortuneElephant.info:
              {
                this.emit(FortuneElephantGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case MainManager.instance.getConfigManager().ProtocolFortuneElephant.bet:
              {
                this.result = data.Data;
                // this.result.Lucky = true;
                // this.result.LuckyMsg = {
                //     LuckySymbol: 6,
                //     SymbolsArr: [
                //         [6, 1, 6, 6, 1, 6, 1, 1, 6],
                //         [6, 1, 6, 6, 1, 6, 1, 1, 6],
                //     ],
                //     RewardLines: [
                //         [
                //             { Amount: 1000, Line: 0, Sym: 6 },
                //             { Amount: 1000, Line: 1, Sym: 6 },
                //             { Amount: 1000, Line: 2, Sym: 6 },
                //             { Amount: 1000, Line: 3, Sym: 6 },
                //             { Amount: 1000, Line: 4, Sym: 6 },
                //         ],
                //         [
                //             { Amount: 1000, Line: 0, Sym: 6 },
                //             { Amount: 1000, Line: 1, Sym: 6 },
                //             { Amount: 1000, Line: 2, Sym: 6 },
                //             { Amount: 1000, Line: 3, Sym: 6 },
                //             { Amount: 1000, Line: 4, Sym: 6 },
                //         ],
                //     ],
                // };
                // this.result.RewardMoney = 4000;
                // this.result.RewardLine = [
                //     { Amount: 1000, Line: 0, Sym: 6 },
                //     { Amount: 1000, Line: 1, Sym: 6 },
                //     { Amount: 1000, Line: 2, Sym: 6 },
                //     { Amount: 1000, Line: 3, Sym: 6 },
                //     { Amount: 1000, Line: 4, Sym: 6 },
                // ];
                // this.result.NormalSymbols = [6, 1, 6, 6, 1, 6, 1, 1, 6];
                this.emit(FortuneElephantGameEvent.START);
              }
          }
        };
        _createClass(FortuneElephantProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return FortuneElephantProxyMgr;
      }(ProxyBase);
      var FortuneElephantProxy = exports('default', new FortuneElephantProxyMgr("FortuneElephantProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneElephantRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneElephantProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, UITransform, v3, Component, FortuneElephantProxy, FortuneElephantGameEvent;
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
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      FortuneElephantProxy = module.default;
      FortuneElephantGameEvent = module.FortuneElephantGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "342edVCuxFGFKaVjF4cV1+5", "FortuneElephantRunItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULT: 3,
        END: 4
      };
      var FortuneElephantRunItem = exports('default', (_dec = ccclass("FortuneElephantRunItem"), _dec2 = menu("game/FortuneElephant/FortuneElephantRunItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantRunItem, _Component);
        function FortuneElephantRunItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_wild", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_fu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_normal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_blur", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal", _descriptor5, _assertThisInitialized(_this));
          _this._state = CardState.RESULT;
          _this._index = void 0;
          return _this;
        }
        var _proto = FortuneElephantRunItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node_wild.active = false;
          this.node_fu.active = false;
          this.node_normal.active = true;
        };
        _proto.setCard = function setCard(index) {
          this._index = index;
          if (index == 0) {
            this.node_wild.active = true;
            this.node_normal.active = false;
            this.node_fu.active = false;
          } else if (index == 1) {
            this.node_wild.active = false;
            this.node_normal.active = false;
            this.node_fu.active = true;
          } else {
            this.node_wild.active = false;
            this.node_normal.active = true;
            this.node_fu.active = false;
            if (this._state == CardState.RUN) {
              this.node_normal.getComponent(Sprite).spriteFrame = this.frame_blur[index];
            } else if (this._state == CardState.RESULT) {
              this.node_normal.getComponent(Sprite).spriteFrame = this.frame_normal[index];
            }
          }
        };
        _proto.randCard = function randCard() {
          //        // if (FortuneElephantProxy.result && FortuneElephantProxy.result.Lucky) {
          //        //     let nums = [FortuneElephantProxy.result.LuckyMsg.LuckySymbol, 0];
          //        //     let rand = Math.floor(Math.random() * nums.length);
          //        //     this.setCard(nums[rand]);
          //        // } else {
          //        //     let rand = Math.floor(Math.random() * 7);
          //        //     this.setCard(rand);
          //        // }
          var rand = Math.floor(Math.random() * 7);
          this.setCard(rand);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.onClick = function onClick() {
          FortuneElephantProxy.emit(FortuneElephantGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneElephantRunItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_fu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_normal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frame_blur", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal", [_dec7], {
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
      // import FortuneElephantProxy, { FortuneElephantGameEvent } from "./FortuneElephantProxy";
      //
      // const { ccclass, property, menu } = cc._decorator;
      // const CARDCOUNT = 5;
      //
      // const enum CardState {
      //     NORMAL,
      //     DELAY,
      //     RUN,
      //     RESULT,
      //     END,
      // }
      // @ccclass
      // @menu("game/FortuneElephant/FortuneElephantRunItem")
      // export default class FortuneElephantRunItem extends cc.Component {
      //     @property(cc.Node)
      //     node_wild: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_fu: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_normal: cc.Node = null;
      //
      //     @property(cc.SpriteFrame)
      //     frame_blur: cc.SpriteFrame[] = [];
      //
      //     @property(cc.SpriteFrame)
      //     frame_normal: cc.SpriteFrame[] = [];
      //
      //     _state: CardState = CardState.RESULT;
      //
      //     _index: number;
      //
      //     protected onLoad(): void {
      //         this.node_wild.active = false;
      //         this.node_fu.active = false;
      //         this.node_normal.active = true;
      //     }
      //     setCard(index: number) {
      //         this._index = index;
      //         if (index == 0) {
      //             this.node_wild.active = true;
      //             this.node_normal.active = false;
      //             this.node_fu.active = false;
      //         } else if (index == 1) {
      //             this.node_wild.active = false;
      //             this.node_normal.active = false;
      //             this.node_fu.active = true;
      //         } else {
      //             this.node_wild.active = false;
      //             this.node_normal.active = true;
      //             this.node_fu.active = false;
      //
      //             if (this._state == CardState.RUN) {
      //                 this.node_normal.getComponent(cc.Sprite).spriteFrame = this.frame_blur[index];
      //             } else if (this._state == CardState.RESULT) {
      //                 this.node_normal.getComponent(cc.Sprite).spriteFrame = this.frame_normal[index];
      //             }
      //         }
      //     }
      //
      //     randCard() {
      //         // if (FortuneElephantProxy.result && FortuneElephantProxy.result.Lucky) {
      //         //     let nums = [FortuneElephantProxy.result.LuckyMsg.LuckySymbol, 0];
      //         //     let rand = Math.floor(Math.random() * nums.length);
      //         //     this.setCard(nums[rand]);
      //         // } else {
      //         //     let rand = Math.floor(Math.random() * 7);
      //         //     this.setCard(rand);
      //         // }
      //         let rand = Math.floor(Math.random() * 7);
      //         this.setCard(rand);
      //     }
      //
      //     setState(state: number) {
      //         this._state = state;
      //     }
      //
      //     onClick() {
      //         FortuneElephantProxy.emit(FortuneElephantGameEvent.CLICK_ITEM, {
      //             index: this._index,
      //             pos: this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
      //         });
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneElephantScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './Common.ts', './FortuneElephantDef.ts', './FortuneElephantProxy.ts', './ViewManager.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, Common, FortuneElephantDef, FortuneElephantProxy, ViewManager, MainManager;
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
      sys = module.sys;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneElephantDef = module.FortuneElephantDef;
    }, function (module) {
      FortuneElephantProxy = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ef5c9LE0SRNZZlbQD1WCCn+", "FortuneElephantScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FortuneElephantScene = exports('default', (_dec = ccclass("FortuneElephantScene"), _dec2 = menu("game/FortuneElephant/FortuneElephantScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantScene, _Component);
        function FortuneElephantScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_room", _descriptor, _assertThisInitialized(_this));
          _this.node_desk = null;
          _this.node_room = null;
          return _this;
        }
        var _proto = FortuneElephantScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          if (!sys.isMobile) {
            node.setScale(v3(750 / 1334, 750 / 1334, 1));
          } else {
            node.angle = 90;
          }
        };
        _proto.init = function init() {
          this.reset();
          FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
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
          FortuneElephantProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          FortuneElephantProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return FortuneElephantScene;
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

System.register("chunks:///_virtual/FortuneElephantSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, ToggleContainer, Sprite, color, Component, ViewManager, Common, MainManager;
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
      Label = module.Label;
      ToggleContainer = module.ToggleContainer;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "0a7b8rsZ55KqryYk+ietEQp", "FortuneElephantSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneElephantSetAuto = exports('default', (_dec = ccclass("FortuneElephantSetAuto"), _dec2 = menu("game/FortuneElephant/FortuneElephantSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(ToggleContainer), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantSetAuto, _Component);
        function FortuneElephantSetAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // scrollView_list: cc.Node = null;
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          //    // @property(cc.Label)
          //    // txt_bet: cc.Label = null;
          _initializerDefineProperty(_this, "toggle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          _this._quick = void 0;
          return _this;
        }
        var _proto = FortuneElephantSetAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // this.selNode = this.contentRoot.getChildByName(`Node_item_0`);
          //        // this.selNode.color = cc.color(125, 125, 125, 255);
          //        // this.selNode.getChildByName("Label_times").color = cc.color(255, 152, 0, 255);
          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.setData = function setData(data) {
          //console.log("data", data);
          this.txt_gold.string = Common.numFormat(data.gold);
          //        // this.txt_bet.string = Common.numFormat(data.bet);
          this.txt_win.string = Common.numFormat(data.win);
          this._quick = data.isQuick;
          var toggles = this.toggle.toggleItems;
          toggles[0].isChecked = !data.isQuick;
          toggles[1].isChecked = data.isQuick;
        };
        _proto.onClickToggle = function onClickToggle(event) {
          this._quick = event.node.name == "1";
          EventManager.emit(ConfigManager.eventTransform.setQuick, this._quick);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                //                // EventManager.instance.emit(ConfigManager.instance.eventTransform.setAuto, 0);
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  var times = arrTimes[parseInt(this.selNode.name.replace("Node_item_", ""))];
                  EventManager.emit(ConfigManager.eventTransform.setAuto, times);
                } else {
                  EventManager.emit(ConfigManager.eventTransform.setAuto, 0);
                }
                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(255, 152, 0, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return FortuneElephantSetAuto;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
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

System.register("chunks:///_virtual/FortuneElephantView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Common.ts', './FortuneElephantCardAni.ts', './FortuneElephantDef.ts', './FortuneElephantProxy.ts', './FortuneElephantWinItem.ts', './FortuneElephantWindow.ts', './ClickbtnEffect.ts', './FortuneRank.ts', './FortuneHistory.ts', './FortuneSetBase.ts', './FortuneElephantSetAuto.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Label, Node, SpriteFrame, Prefab, Toggle, Sprite, Button, Font, instantiate, v3, UITransform, sys, Color, tween, v2, UIOpacity, Component, i18n, ProxyMgr, AudioManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Common, FortuneElephantCardAni, FortuneElephantDef, FortuneElephantProxy, FortuneElephantGameEvent, FortuneElephantWinItem, FortuneElephantWindow, ClickbtnEffect, FortuneRank, FortuneHistory, FortuneSetBase, FortuneElephantSetAuto, MainManager;
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
      sp = module.sp;
      Label = module.Label;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      Sprite = module.Sprite;
      Button = module.Button;
      Font = module.Font;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      Color = module.Color;
      tween = module.tween;
      v2 = module.v2;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneElephantCardAni = module.default;
    }, function (module) {
      FortuneElephantDef = module.FortuneElephantDef;
    }, function (module) {
      FortuneElephantProxy = module.default;
      FortuneElephantGameEvent = module.FortuneElephantGameEvent;
    }, function (module) {
      FortuneElephantWinItem = module.default;
    }, function (module) {
      FortuneElephantWindow = module.default;
    }, function (module) {
      ClickbtnEffect = module.default;
    }, function (module) {
      FortuneRank = module.default;
    }, function (module) {
      FortuneHistory = module.default;
    }, function (module) {
      FortuneSetBase = module.default;
    }, function (module) {
      FortuneElephantSetAuto = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51;
      cclegacy._RF.push({}, "34724rpooxHy6MYsdwXsgMs", "FortuneElephantView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var RunState = {
        NORMAL: 0,
        START: 1,
        STOP: 2,
        AWARD: 3,
        AWARD_LINES: 4,
        BIG_WIN: 5,
        SHOWGAIN: 6,
        SHOW_SPECIAL_START: 7,
        SHOW_SPECIAL_END: 8,
        SHOW_SPECIAL1: 9,
        SHOW_SPECIAL2: 10,
        SHOW_SPECIAL_GAIN: 11,
        SHOW_NEXT_GAIN: 12,
        WAIT: 13,
        FREE_WIN: 14
      };
      var RUN_TIME = 0.5;
      var STOP_TIME = 1.5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 14;
      var BIG_WIN_TIME2 = 16;
      var BIG_WIN_TIME3 = 18;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 2;
      var FREE_TIME = 7;
      var FortuneElephantView = exports('default', (_dec = ccclass("FortuneElephantView"), _dec2 = menu("game/FortuneElephant/FortuneElephantView"), _dec3 = property(FortuneElephantCardAni), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(Label), _dec7 = property(ScrollNumLabel), _dec8 = property(Label), _dec9 = property(sp.Skeleton), _dec10 = property(ScrollNumLabel), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(SpriteFrame), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(sp.Skeleton), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Prefab), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Label), _dec27 = property(Prefab), _dec28 = property(Label), _dec29 = property(Toggle), _dec30 = property(ClickbtnEffect), _dec31 = property(SpriteFrame), _dec32 = property(Sprite), _dec33 = property(sp.Skeleton), _dec34 = property(sp.Skeleton), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Label), _dec39 = property(Label), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Label), _dec43 = property(ScrollNumLabel), _dec44 = property(Label), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Button), _dec49 = property(Font), _dec50 = property(sp.Skeleton), _dec51 = property(Node), _dec52 = property(SpriteFrame), _dec53 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantView, _Component);
        function FortuneElephantView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniLines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_start", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_tiger", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_special", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gain", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_gain", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gain", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particle", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particleLight", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftCount", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_window", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_lineWin", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_auto", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor28, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // node_x10LightBall: cc.Node = null;
          //    // @property(sp.Skeleton)
          //    // spine_quick: sp.Skeleton = null;
          _initializerDefineProperty(_this, "frame_bgs", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_light", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_specialWildProcessBg", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_specialWildProcess", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_specialLight", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_specialWildRate", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_specialWildRateNext", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeBg", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeWinBg", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeCount", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeWin", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeLeft", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeLeft", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_down", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_line5", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fonts", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_winLight", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_ani", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_quick", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_quick", _descriptor51, _assertThisInitialized(_this));
          _this._runDelay = 0.1;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 1000;
          _this._auto = false;
          _this._autoTimes = 0;
          _this._try = false;
          //    // lines = [];
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this.noticeIndex = 0;
          _this.noticeDelay = 1;
          _this._window = void 0;
          _this.bigWinBgClickIndex = 0;
          _this._collectStar = 0;
          _this._isFree = false;
          _this.freeLock = false;
          _this.freeTimeLeft = 0;
          //免费倒计时
          _this.specialWidth = 0;
          _this._preOdd = 0;
          _this._nextOdd = 0;
          _this._preWildCount = 0;
          _this.wildArr = [];
          _this._isScatter = false;
          _this.scatterLine = 0;
          return _this;
        }
        var _proto = FortuneElephantView.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData();
          this.initEvent();
        };
        _proto.init = function init() {
          this.spine_tiger.setAnimation(0, "idle", true);
          this.node_specialWildProcessBg.active = false;
          FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
          var node = instantiate(this.prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(FortuneElephantWindow);
          node.active = false;
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolFortuneElephant.info, {});
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
          this.clear();

          //        // this.changeState(RunState.FAKE_LUCKY);
        };

        _proto.loadAni = function loadAni() {
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].setData({
              index: i
            });
            //            // this.scheduleOnce(() => {
            //            //     this.aniLines[i].initCard();
            //            // }, i * 0.1);
            this.aniLines[i].initCard();
          }
        };
        _proto.hideSpine = function hideSpine() {
          var children = this.node_spineParent.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            node.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.aniLines), _step2; !(_step2 = _iterator2()).done;) {
            var cardAni = _step2.value;
            cardAni.show();
          }
        };
        _proto.showSpine = function showSpine(index, result, isBig) {
          if (isBig === void 0) {
            isBig = false;
          }
          var child = this.node_spineParent.getChildByName("spine" + index);
          //        // let name = "idle";
          //        // if (result > 4) {
          //        //     skIndex = 2;
          //        //     let names = ["idle_red", "idle_blue", "idle_green"];
          //        //     name = names[result - 5];
          //        // } else if (result > 0) {
          //        //     skIndex = 1;
          //        //     let names = ["idle_J", "idle_Q", "idle_K", "idle_A"];
          //        //     name = names[result - 1];
          //        // }
          child.active = true;
          var item = child.getChildByName("item");
          if (!item) {
            item = instantiate(this.prefab_winItem);
            child.addChild(item);
            item.name = "item";
          }
          var winItem = item.getComponent(FortuneElephantWinItem);
          winItem.showResult(result, isBig);
          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
          return winItem;
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          FortuneElephantProxy.on(FortuneElephantGameEvent.UPDATE_BETLIST, this.updateInfo, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.CLOSE_BONUS, function () {
            FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
            _this2.checkAward();
          }, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.SELECT_BET, function (count) {
            //                // this.node_betSelect.active = false;
            _this2.setData();
          }, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.START, function () {
            _this2.runStart();
          }, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.ERROR, function () {
            _this2.changeState(RunState.NORMAL);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.onClickQuick, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.CLICK_ITEM, function (data) {
            if (_this2._auto) return;
            _this2._window.node.scale = v3(0.8, 0.8, 1);
            _this2._window.node.active = true;
            _this2._window.showIndex(data.index);
            var pos = data.pos;
            pos = _this2.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (pos.x > 190) {
              pos.x = 190;
            }
            if (pos.x < -190) {
              pos.x = -190;
            }
            _this2._window.node.setPosition(pos.x, pos.y);
            FortuneElephantDef.palyAudio(FortuneElephantDef.audio.SHOW_WINDOW);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          FortuneElephantProxy.on(FortuneElephantGameEvent.FINISH_RUN_INDEX, function (info) {
            if (_this2._isScatter) {
              if (info >= _this2.scatterLine) {
                var index = info + 1;
                if (_this2.aniLines[index]) {
                  _this2.aniLines[index].showLight();
                }
              }
              // this.showScatter();
            }

            if (info == 4) {
              _this2._lock = false;
              _this2.showResult();
            }
          }, this);
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          FortuneElephantProxy.setBet(betListIndex, betCount);
        };
        _proto.updateInfo = function updateInfo(data) {
          //        // this.node_bets.destroyAllChildren();
          //        // for (let bet of FortuneElephantProxy.betList) {
          //        //     let node = cc.instantiate(this.pre_bet);
          //        //     this.node_bets.addChild(node);
          //        //     // node.getComponent(FortuneElephantBetItem).setBet(bet);
          //        // }

          //        // betAmount

          if (data.surplusFreeCount > 0) {
            this.changeScene(true);
            this.showWildInfo(data);
            FortuneElephantProxy.setBetByCount(data.betAmount);
            this._preOdd = data.freeOdds;
            this._nextOdd = data.freeOdds;
            this._preWildCount = data.wildCount;
          }
        };
        _proto.setData = function setData() {
          this._bet = FortuneElephantProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.updateBetBtn(true);
        };
        _proto.updateBetBtn = function updateBetBtn(b) {
          if (this._auto) {
            b = false;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.btns), _step3; !(_step3 = _iterator3()).done;) {
            var btn = _step3.value;
            btn.interactable = b;
            Common.changeNodeEffect(btn.target, !b);
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(FortuneElephantDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          }
        };
        _proto.onClickBg = function onClickBg() {
          //        // if (this.node_betSelect.active) {
          //        //     this.node_betSelect.active = false;
          //        // }
          this._window.node.active = false;
        };
        _proto.onClickRank = function onClickRank() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneElephantRank",
          //        //     FortuneElephantProxy.bundle,
          //        //     () => {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);

          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }
          //        //     },
          //        //     true
          //        // );

          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotGaneshaGold");
          }, true);
        };
        _proto.onClickRecord = function onClickRecord() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneElephantHistory",
          //        //     FortuneElephantProxy.bundle,
          //        //     () => {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);

          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }
          //        //     },
          //        //     true
          //        // );

          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotGaneshaGold");
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/FortuneElephantHelp", FortuneElephantProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, FortuneElephantProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          Common.loadPopBuddle("prefab/FortuneElephantSetBase", FortuneElephantProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: FortuneElephantProxy._curBetListIndex,
              _curBetCount: FortuneElephantProxy._curBetCount,
              betMaxCount: FortuneElephantProxy.betMaxCount,
              betList: FortuneElephantProxy.betList,
              betRate: FortuneElephantProxy.betRate
            });
          }, true);

          //        // Common.loadPopPublic(
          //        //     "prefab/fortuneCommon/FortuneSetBase",
          //        //     function () {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);
          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }
          //        //         node.getComponent(FortuneSetBase).setData({
          //        //             _curBetListIndex: FortuneElephantProxy._curBetListIndex,
          //        //             _curBetCount: FortuneElephantProxy._curBetCount,
          //        //             betMaxCount: FortuneElephantProxy.betMaxCount,
          //        //             betList: FortuneElephantProxy.betList,
          //        //             betRate: FortuneElephantProxy.betRate,
          //        //         });
          //        //     },
          //        //     true
          //        // );
        };

        _proto.onClickBetUp = function onClickBetUp() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneElephantProxy._curBetCount++;
          if (FortuneElephantProxy._curBetCount >= FortuneElephantProxy.betMaxCount) {
            FortuneElephantProxy._curBetListIndex++;
            if (FortuneElephantProxy._curBetListIndex >= FortuneElephantProxy.betList.length) {
              FortuneElephantProxy._curBetListIndex--;
              FortuneElephantProxy._curBetCount--;
            } else {
              FortuneElephantProxy._curBetCount = 0;
              FortuneElephantProxy.setBet(FortuneElephantProxy._curBetListIndex, FortuneElephantProxy._curBetCount);
            }
          } else {
            FortuneElephantProxy.setBet(FortuneElephantProxy._curBetListIndex, FortuneElephantProxy._curBetCount);
          }
        };
        _proto.onClickBetDown = function onClickBetDown() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneElephantProxy._curBetCount--;
          if (FortuneElephantProxy._curBetCount < 0) {
            FortuneElephantProxy._curBetListIndex--;
            if (FortuneElephantProxy._curBetListIndex < 0) {
              FortuneElephantProxy._curBetListIndex++;
              FortuneElephantProxy._curBetCount++;
            } else {
              FortuneElephantProxy._curBetCount = FortuneElephantProxy.betMaxCount - 1;
              FortuneElephantProxy.setBet(FortuneElephantProxy._curBetListIndex, FortuneElephantProxy._curBetCount);
            }
          } else {
            FortuneElephantProxy.setBet(FortuneElephantProxy._curBetListIndex, FortuneElephantProxy._curBetCount);
          }
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          var _this3 = this;
          //        // FortuneElephantProxy.auto = !FortuneElephantProxy.auto;
          //        // if (this._auto) {
          //        //     this.setAuto(0);
          //        //     return;
          //        // }
          if (sender.isChecked) {
            sender.isChecked = false;
            return;
          }
          sender.isChecked = true;
          Common.loadPopBuddle("prefab/FortuneElephantSetAuto", FortuneElephantProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              // node.scale = cc.v3(750 / 1334, 750 / 1334, 1);
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
            var win = 0;
            if (FortuneElephantProxy.result) {
              win = FortuneElephantProxy.result.prizeAmount;
            }
            node.getComponent(FortuneElephantSetAuto).setData({
              gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
              bet: _this3._bet,
              win: win,
              isQuick: _this3._runDelay == 0
            });
          }, true);

          //        // Common.loadPopPublic(
          //        //     "prefab/fortuneCommon/FortuneSetAuto",
          //        //     function () {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);
          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }

          //        //         node.getComponent(FortuneSetAuto).setData({
          //        //             gold: parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD)),
          //        //             bet: this._bet,
          //        //             win: 0,
          //        //         });
          //        //     },
          //        //     true
          //        // );
        };

        _proto.setAuto = function setAuto(times) {
          this._autoTimes = times;
          this.txt_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this._auto = true;
            this.spine_start.setAnimation(0, "auto", true);
            this.btn_auto.isChecked = false;
            //            // this.clickEffect.switchAni("push2");

            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
          } else {
            this._auto = false;
            this.spine_start.setAnimation(0, "idle", true);
            this.btn_auto.isChecked = true;
            this.clickEffect.switchAni();
            //            // this.txt_bet.node.color = cc.color().fromHEX("#86DCFF");
            //            // this.txt_gold.node.color = cc.color().fromHEX("#86DCFF");
            //            // this.txt_win.node.color = cc.color().fromHEX("#86DCFF");
          }

          this.updateBetBtn(times == 0);
          this.txt_leftCount.node.active = this._auto;
          if (this._state == RunState.AWARD_LINES && this._auto) {
            this.changeState(RunState.NORMAL);
          }
        };
        _proto.checkAuto = function checkAuto() {
          if (this._auto) {
            this._autoTimes--;
            this.txt_leftCount.string = "" + this._autoTimes;
            if (this._autoTimes <= 0) {
              this.setAuto(0);
            }
          }
        };
        _proto.onClickFree = function onClickFree() {
          this.node_freeBg.active = false;
          this.freeLock = false;
          if (this._nextOdd == 0) this._nextOdd = 2;
          this.changeState(RunState.SHOW_SPECIAL_START);
        };
        _proto.onClickFreeWin = function onClickFreeWin() {
          this.node_freeWinBg.active = false;
          this.freeLock = false;
          this._preOdd = 0;
          this._nextOdd = 0;
          this._preWildCount = 0;
          this.wildArr = [];
          this._state = RunState.AWARD;
        };
        _proto.onClickQuick = function onClickQuick(b) {
          //        // if (this._runDelay == 0) {
          //        //     this._runDelay = 0.2;
          //        //     // this.spine_quick.setAnimation(0, "off", true);
          //        // } else {
          //        //     this._runDelay = 0;
          //        //     // this.spine_quick.setAnimation(0, "intro_on", false);
          //        //     // this.spine_quick.addAnimation(0, "on", true);
          //        // }
          if (b) {
            this._runDelay = 0;
            this.sprite_quick.spriteFrame = this.frame_quick[0];
          } else {
            this._runDelay = 0.2;
            this.sprite_quick.spriteFrame = this.frame_quick[1];
          }
        };
        _proto.checkReady = function checkReady() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD_LINES && this._state != RunState.SHOWGAIN) return false;
          return true;
        };
        _proto.onClickStart = function onClickStart() {
          if (this._auto) {
            this.setAuto(0);
            return;
          }
          this.preStart();
        };
        _proto.preStart = function preStart() {
          this.onClickBg();
          if (this.freeLock) return;
          if (!this.checkReady()) return;
          if (this._lock) return;
          var multiple = 1;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          if (!this._isFree) this.updateGold(-this._bet * multiple);
          this.clear();
          this.sendBet();
          this._state = RunState.START;
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };
        _proto.runStart = function runStart() {
          this.checkAuto();
          //        // this.spine_startLight.setAnimation(0, "spin", false);
          this.changeBtnActive(false);
          FortuneElephantDef.palyAudio(FortuneElephantDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(0);
          }
          if (this._runDelay == 0) {
            this._runTime = 0;
          }
          this.txt_freeLeft.string = "" + FortuneElephantProxy.result.surplusFreeCount;
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolFortuneElephant.bet, {
              betAmount: this._bet + ""
            });
          }
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          this.txt_win.reset();
          FortuneElephantProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          //        // this.spine_winBg.node.active = false;
          //        // this.spine_winLight.node.active = false;
          this.node_content.active = true;
          this.node_gain.active = false;
          this.spine_gain.setAnimation(0, "normal_idle", true);

          //        // this.node_10light.active = false;

          //        // this.spine_x10.node.active = false;
          this.node_line5.active = false;
          this.bigWinBgClickIndex = 0;
          this.changeSpecialNotice();
          this._isScatter = false;
          this.scatterLine = 0;
        };
        _proto.changeScene = function changeScene(isFree) {
          if (isFree === void 0) {
            isFree = false;
          }
          //        // console.trace();
          if (this._isFree == isFree) return;
          this._isFree = isFree;

          //        // this.node_titleNormal.active = !isFree;
          //        // this.node_titleFree.active = isFree;
          this.node_specialWildProcessBg.active = isFree;
          this.node_freeLeft.active = isFree;
          this.node_down.active = !isFree;
          if (isFree) {
            this.node_menu.active = false;
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.node_freeBg.active = true;
            this.sprite_bg.spriteFrame = this.frame_bgs[1];
            this.spine_bg.setAnimation(0, "free_idle", true);
            this.txt_specialWildRateNext.string = "*2";
            FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG2);
          } else {
            this.sprite_bg.getComponent(Sprite).spriteFrame = this.frame_bgs[0];
            this.spine_bg.setAnimation(0, "normal_idle", true);
            FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
          }
        };
        _proto.showResult = function showResult() {
          if (!FortuneElephantProxy.result) {
            return;
          }
          this.wildArr = [];
          if (this._isFree) {
            for (var i = 0; i < FortuneElephantProxy.result.openNums.length; i++) {
              if (FortuneElephantProxy.result.openNums[i] == 2) {
                this.wildArr.push(i);
              }
            }
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          var _this4 = this;
          if (FortuneElephantProxy.result.prizeAmount > 0) {
            if (!this._auto) this.spine_start.setAnimation(0, "stop", true);
            this.changeState(RunState.AWARD);
            FortuneElephantProxy.freeTotalWin += this._isFree ? FortuneElephantProxy.result.prizeAmount : 0;
          } else {
            this.changeState(RunState.WAIT);
            this.changeBtnActive(true);
            if (this.wildArr.length > 0 && this._isFree) {
              this.changeState(RunState.SHOW_SPECIAL1);
            } else if (FortuneElephantProxy.result.surplusFreeCount == 0) {
              if (this._isFree) {
                this.changeScene(false);
                this.changeState(RunState.FREE_WIN);
              }
            }
          }
          if (FortuneElephantProxy.result.freePrize) {
            this.scheduleOnce(function () {
              _this4.txt_freeCount.string = FortuneElephantProxy.result.surplusFreeCount + "";
              _this4.changeScene(true);
            }, 0.5);
          }
        };
        _proto.wildAni = function wildAni(arr) {
          var _this5 = this;
          var findCount = 0;
          var _loop = function _loop() {
            var i = _step4.value;
            var child = _this5.node_spineParent.getChildByName("spine" + i);
            if (child) {
              var item = _this5.showSpine(i, 1);
              item.showSpawn();
              var pos = child.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
              var pos1 = _this5.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
              var node = instantiate(_this5.node_particle);
              node.active = false;
              _this5.node_ani.addChild(node);
              node.setPosition(pos1.x, pos1.y);
              FortuneElephantDef.palyAudio(FortuneElephantDef.audio.NULTI_INCREASE);
              tween(node).delay((findCount - 1) * 0.2 + 0.2).call(function () {
                node.active = true;
                // GUtil.bezierTo(
                //     node,
                //     0.3,
                //     cc.v2(pos1.x, pos1.y),
                //     cc.v2(-0, (pos1.y + this.node_particle.getPosition().y) / 2),
                //     cc.v3(this.node_particle.getPosition().x + this.specialWidth, this.node_particle.getPosition().y),
                //     null
                // ).start();
              })
              //@ts-ignore
              .bezierTo(0.3, v2(pos1.x, pos1.y), v2(-0, (pos1.y + _this5.node_particle.getPosition().y) / 2), v2(_this5.node_particle.getPosition().x + _this5.specialWidth, _this5.node_particle.getPosition().y)).call(function () {
                node.destroyFromParent();
              }).start();
            }
            findCount++;
          };
          for (var _iterator4 = _createForOfIteratorHelperLoose(arr), _step4; !(_step4 = _iterator4()).done;) {
            _loop();
          }
        };
        _proto.changeState = function changeState(state) {
          var _this6 = this;
          //        // console.log("state", state);
          switch (state) {
            case RunState.NORMAL:
              {
                this._state = RunState.NORMAL;
                break;
              }
            case RunState.BIG_WIN:
              {
                this._state = RunState.BIG_WIN;
                this.node_bigwin.active = true;
                this._runTime = BIG_WIN_TIME1;
                var odd = FortuneElephantProxy.result.prizeAmount / this._bet;
                var aniname = "bigwin_";
                this.txt_bigwin.stepCount = BIG_WIN_TIME1 * 30;
                this.sp_bigWin.setAnimation(0, aniname + "intro", false);
                if (odd >= 30) {
                  aniname = "megawin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME2 * 30;
                  this._runTime = BIG_WIN_TIME2;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                if (odd >= 50) {
                  aniname = "superwin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME3 * 30;
                  this._runTime = BIG_WIN_TIME3;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                this.txt_bigwin.string = Common.numFormat(FortuneElephantProxy.result.prizeAmount);
                this.sp_bigWin.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this6.sp_bigWin.setCompleteListener(null);
                    _this6.sp_bigWin.setAnimation(0, aniname + "idle", true);
                    _this6.scheduleOnce(function () {
                      _this6.node_bigwin.active = false;
                      _this6.txt_bigwin.reset();
                    }, 4);
                  }
                });
                FortuneElephantDef.palyAudio(FortuneElephantDef.audio.BIGWIN, function (id) {
                  var time = BIG_WIN_TIME1;
                  if (odd >= 30) {
                    time = BIG_WIN_TIME2;
                  } else if (odd >= 50) {
                    time = BIG_WIN_TIME3;
                  } else {
                    time = BIG_WIN_TIME1;
                  }
                  _this6.scheduleOnce(function () {
                    AudioManager.instance.stopSound(id);
                  }, time);
                });
                break;
              }
            case RunState.SHOW_SPECIAL_START:
              {
                this._state = RunState.SHOW_SPECIAL_START;
                this.txt_specialWildRate.node.active = false;
                this.specialWidth = 286;
                var _spine = this.node_specialWildProcessBg.getComponent(sp.Skeleton);
                _spine.setAnimation(0, "intro", false);
                break;
              }
            case RunState.SHOW_SPECIAL_END:
              {
                this._state = RunState.SHOW_SPECIAL_END;
                var pos = [0, 100, 186, 286];
                this.specialWidth = pos[this._preWildCount];
                this.node_specialWildProcess.getComponent(UITransform).width = this.specialWidth;
                this.node_specialLight.setPosition(this.specialWidth, this.node_specialLight.position.y);
                this.txt_specialWildRate.node.active = true;
                this.txt_specialWildRate.string = "*" + this._nextOdd;
                this.txt_specialWildRate.node.scale = v3(0, 0, 1);
                //                // this.txt_specialWildRateNext.string = "*" + (this._nextOdd + 2);

                this.spine_light.setAnimation(0, "intro", false);
                this.spine_light.addAnimation(0, "idle", false);
                this.txt_specialWildRateNext.font = this.fonts[0];
                this.txt_specialWildRateNext.node.getComponent(UIOpacity).opacity = 0;
                tween(this.txt_specialWildRateNext.node.getComponent(UIOpacity)).to(0.3, {
                  opacity: 255
                }).delay(0.3).to(0.1, {
                  opacity: 0
                }).call(function () {
                  _this6.txt_specialWildRateNext.font = _this6.fonts[1];
                  _this6.txt_specialWildRateNext.string = "*" + (_this6._nextOdd + 2);
                }).to(0.3, {
                  opacity: 255
                }).start();
                this.node_specialLight.active = this.specialWidth != 0;
                if (this._preOdd == 0) {
                  this._preOdd = FortuneElephantProxy.result.freeOdds;
                  this._nextOdd = FortuneElephantProxy.result.freeOdds;
                }
                tween(this.txt_specialWildRate.node).to(0.5, {
                  scale: v3(1, 1, 1)
                }).call(function () {
                  _this6.changeState(RunState.NORMAL);
                }).start();
                break;
              }
            case RunState.SHOW_SPECIAL1:
              {
                this._state = RunState.SHOW_SPECIAL1;
                var min = this.wildArr.length < 3 - this._preWildCount ? this.wildArr.length : 3 - this._preWildCount;
                this.wildAni(this.wildArr.splice(0, min));
                var time = 0.5;
                this.scheduleOnce(function () {
                  _this6.changeState(RunState.SHOW_SPECIAL2);
                }, time);
                break;
              }
            case RunState.SHOW_SPECIAL2:
              {
                this._state = RunState.SHOW_SPECIAL2;
                var _pos = [0, 100, 186, 286];
                if (this._preOdd < FortuneElephantProxy.result.freeOdds) {
                  this._preWildCount = 3;
                  this.specialWidth = _pos[3];
                  this._nextOdd += 2;
                } else {
                  this.specialWidth = _pos[FortuneElephantProxy.result.wildCount];
                  this._preWildCount = FortuneElephantProxy.result.wildCount;
                }
                break;
              }
            case RunState.SHOW_SPECIAL_GAIN:
              {
                this._state = RunState.SHOW_SPECIAL_GAIN;
                if (this._preOdd != this._nextOdd) {
                  this.txt_specialWildRate.string = "*" + this._nextOdd;
                  this.txt_specialWildRate.node.scale = v3(0, 0, 1);
                  this.spine_light.setAnimation(0, "intro", false);
                  this.spine_light.addAnimation(0, "idle", false);
                  this._preOdd = this._nextOdd;
                  this._preWildCount = 0;
                  this.specialWidth = 0;
                  this.node_specialWildProcess.getComponent(UITransform).width = 0;
                  this.node_specialLight.setPosition(this.specialWidth, this.node_specialLight.position.y);
                  this.node_specialLight.active = false;
                  var _spine2 = this.node_specialWildProcessBg.getComponent(sp.Skeleton);
                  _spine2.setAnimation(0, "levelup", false);
                  FortuneElephantDef.palyAudio(FortuneElephantDef.audio.NULTI_NEXT);
                  this.txt_specialWildRateNext.font = this.fonts[0];
                  this.txt_specialWildRateNext.node.getComponent(UIOpacity).opacity = 0;
                  tween(this.txt_specialWildRateNext.node.getComponent(UIOpacity)).to(0.3, {
                    opacity: 255
                  }).delay(0.3).to(0.1, {
                    opacity: 0
                  }).call(function () {
                    _this6.txt_specialWildRateNext.font = _this6.fonts[1];
                    _this6.txt_specialWildRateNext.string = "*" + (_this6._nextOdd + 2);
                  }).to(0.3, {
                    opacity: 255
                  }).start();
                  tween(this.txt_specialWildRate.node).to(0.5, {
                    scale: v3(1, 1, 1)
                  }).call(function () {
                    FortuneElephantDef.palyAudio(FortuneElephantDef.audio.MULTI_CHANGE);
                    if (_this6.wildArr.length > 0) {
                      _this6.changeState(RunState.SHOW_SPECIAL1);
                    } else {
                      _this6.changeState(RunState.SHOW_NEXT_GAIN);
                    }
                  }).start();
                } else {
                  this._preOdd = FortuneElephantProxy.result.freeOdds;
                  this._nextOdd = FortuneElephantProxy.result.freeOdds;
                  this._preWildCount = FortuneElephantProxy.result.wildCount;
                  this.changeState(RunState.SHOW_NEXT_GAIN);
                }
                break;
              }
            case RunState.SHOW_NEXT_GAIN:
              {
                this._state = RunState.SHOW_NEXT_GAIN;
                this._runTime = GAIN_TIME;
                if (FortuneElephantProxy.result.prizeAmount) {
                  var node = instantiate(this.txt_specialWildRate.node);
                  this.node_ani.addChild(node);
                  node.setPosition(node.position.x, node.position.y + 260);
                  tween(node).delay(0.1).call(function () {
                    node.active = true;
                    FortuneElephantDef.palyAudio(FortuneElephantDef.audio.NUM_TO_INFO);
                  }).bezierTo(0.2, v2(node.getPosition().x, node.getPosition().y), v2(0, (node.getPosition().y + this.txt_gain.node.getPosition().y) / 2), v2(this.txt_gain.node.getPosition().x, this.txt_gain.node.getPosition().y + 200)).call(function () {
                    node.destroyFromParent();
                    _this6.txt_gain.string = Common.numFormat(FortuneElephantProxy.result.prizeAmount + "");
                    _this6.spine_gain.setAnimation(0, "bigwin_" + "win", false);
                    _this6.spine_gain.addAnimation(0, "bigwin_" + "idle", true);
                    _this6.spine_winLight.setAnimation(0, "light2", false);
                    if (FortuneElephantProxy.result.prizeAmount / _this6._bet >= 20) {
                      _this6.changeState(RunState.BIG_WIN);
                    } else {
                      _this6.scheduleOnce(function () {
                        _this6.showEnd();
                      }, 1);
                    }
                  }).start();
                } else {
                  this.showEnd();
                }
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._state = RunState.SHOWGAIN;
                this._runTime = GAIN_TIME;
                var bigWinName = "normal_";
                var _odd = FortuneElephantProxy.result.prizeAmount / this._bet;
                var aniName = "win";
                var lightName = "light1";
                if (_odd >= 10) {
                  bigWinName = "bigwin_";
                  lightName = "light2";
                  //                    // FortuneElephantDef.palyAudio(FortuneElephantDef.audio.TIGER_WIN3);
                } else if (_odd >= 5) {
                  bigWinName = "bigwin_";
                  lightName = "light2";
                  //                    // FortuneElephantDef.palyAudio(FortuneElephantDef.audio.TIGER_WIN2);
                } else ;
                var rand = Math.random();
                if (rand < 0.5) {
                  aniName = "win2";
                }
                this.spine_tiger.setAnimation(0, aniName, false);
                this.spine_tiger.addAnimation(0, "idle", true);
                this.spine_gain.setAnimation(0, bigWinName + "win", false);
                this.spine_gain.addAnimation(0, bigWinName + "idle", true);
                this.spine_winLight.setAnimation(0, lightName, false);
                //                // this.spine_gain.setAnimation(1, lightName, false);
                this.changeBtnActive(true);
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this6.showAward();
                }, 0.5);
                break;
              }
            case RunState.STOP:
              {
                this.onClickStop();
                break;
              }
            case RunState.START:
              {
                this.preStart();
                break;
              }
            case RunState.AWARD_LINES:
              {
                this._state = RunState.AWARD_LINES;
                this._runTime = LINE_TIME;
                this.showSignleLine();
                break;
              }
            case RunState.WAIT:
              {
                this._state = RunState.WAIT;
                this._runTime = WAIT_TIME;
                break;
              }
            case RunState.FREE_WIN:
              {
                this._state = RunState.FREE_WIN;
                this._runTime = FREE_TIME;
                this.scheduleOnce(function () {
                  _this6.node_freeWinBg.active = true;
                  _this6.txt_freeWin.reset();
                  _this6.txt_freeWin.string = Common.numFormat(FortuneElephantProxy.freeTotalWin);
                  FortuneElephantProxy.freeTotalWin = 0;
                  FortuneElephantDef.palyAudio(FortuneElephantDef.audio.FREE_WIN);
                }, 0.5);
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          this.txt_win.string = Common.numFormat(FortuneElephantProxy.result.prizeAmount + "");
          if (FortuneElephantProxy.result.prizeAmount > 0) {
            FortuneElephantDef.palyAudio(FortuneElephantDef.audio.AWARD1);
          }
          this.updateGold();
          if (FortuneElephantProxy.result.prizeAmount) {
            this.showLines();
            this.showWin(true);
          }
        };
        _proto.showEnd = function showEnd() {
          this._state = RunState.AWARD;
          if (FortuneElephantProxy.result.surplusFreeCount == 0) {
            if (this._isFree) {
              this.changeScene(false);
              this.changeState(RunState.FREE_WIN);
            }
          }
        };
        _proto.showWin = function showWin(fromNormal) {
          var _this7 = this;
          //        // this.spine_winBg.node.active = true;
          //        // this.spine_winBg.setAnimation(0, "intro", false);
          //        // this.spine_winBg.addAnimation(0, "picture", true);
          //        // this.txt_spineWin.string = "" + FortuneElephantProxy.result.prizeAmount / FortuneElephantProxy.result.openResult.multiples[1];
          //        // this.spine_winBg.setCompleteListener(() => {
          //        //     this.spine_winBg.setCompleteListener(null);
          //        //     this.scheduleOnce(() => {
          //        //         this.spine_winBg.node.active = false;
          //        //     }, 1);
          //        // });

          this.node_content.active = false;
          this.node_gain.active = true;
          tween(this.node_gain).to(0.01, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          this.txt_gain.string = Common.numFormat(FortuneElephantProxy.result.prizeAmount + "");
          if (this._isFree) {
            this.txt_gain.string = Common.numFormat(FortuneElephantProxy.result.prizeAmount / FortuneElephantProxy.result.freeOdds);
          }
          if (FortuneElephantProxy.result.prizeAmount / this._bet >= 20 && !this._isFree) {
            this.scheduleOnce(function () {
              _this7.changeState(RunState.BIG_WIN);
            }, 0.3);
          } else {
            this.changeState(RunState.SHOWGAIN);
          }

          //        // this.resetScales();
        };

        _proto.showWildInfo = function showWildInfo(info) {
          var pos = [0, 100, 186, 286];
          this.node_specialWildProcess.getComponent(UITransform).width = pos[info.wildCount];
          this.txt_specialWildRate.string = "*" + info.freeOdds;
          this.txt_freeCount.string = info.surplusFreeCount + "";
          this.txt_freeLeft.string = info.surplusFreeCount + "";
          // this.node_specialLight.getPosition().x = pos[info.wildCount];

          this.node_specialLight.setPosition(pos[info.wildCount], this.node_specialLight.position.y);
          this.node_specialLight.active = info.wildCount != 0;
        };
        _proto.showLines = function showLines() {
          var _FortuneElephantProxy,
            _this8 = this;
          var prizeIdx = (_FortuneElephantProxy = FortuneElephantProxy.result) == null ? void 0 : _FortuneElephantProxy.prizeInfo;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = FortuneElephantProxy.result.openNums;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var i = 0; i < prizeIdx.length; i++) {
            var info = prizeIdx[i];
            var lines = info.prizeIdx;
            var _loop2 = function _loop2() {
              var key = lines[j];
              var result = OpenNums[key] - 1;
              _this8.scheduleOnce(function () {
                _this8.showSpine(key, result);
              }, j * 0.1);
            };
            for (var j = 0; j < lines.length; j++) {
              _loop2();
            }
          }
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          //        // FortuneElephantDef.palyAudio(FortuneElephantDef.audio.SINGLE_LINE);
          this.hideLines();
          this.hideSpine();
          var nums = FortuneElephantProxy.result.openNums;
          var prizeIdx = FortuneElephantProxy.result.prizeInfo;
          if (prizeIdx) {
            var len = prizeIdx.length;
            var i = this._showLineIndex;
            this.node_line5.active = false;
            if (this._showLineIndex < len) {
              this.node_spineMask.active = true;
              var index = 0;
              var lines = prizeIdx[i].prizeIdx;
              var has5 = false;
              for (var j = 0; j < lines.length; j++) {
                var key = lines[j];
                var result = nums[key] - 1;
                this.showSpine(key, result);
                if (key == 7) {
                  index = 1;
                } else if (key == 12) {
                  index = 2;
                }
                if (key % 5 == 4) {
                  has5 = true;
                }
              }
              if (has5) {
                this.node_line5.active = true;
                FortuneElephantDef.palyAudio(FortuneElephantDef.audio.LINE5);
              }
              this.txt_lineWin.node.active = true;

              //                // let y = 750;
              //                // if (prizeIdx[i].Line == 1) {
              //                //     y = 960;
              //                // } else if (prizeIdx[i].Line == 2) {
              //                //     y = 540;
              //                // }
              var y = 860;
              if (index == 1) {
                y = 680;
              } else if (index == 2) {
                y = 520;
              }
              // this.txt_lineWin.node.getPosition().y = y;

              this.txt_lineWin.node.setPosition(this.txt_lineWin.node.position.x, y);
              this.txt_lineWin.string = Common.numFormat(prizeIdx[i].prizeAmount);
            } else {
              this._showLineIndex = -1;
              this.showLines();
            }
          }
        };
        _proto.hideLines = function hideLines() {
          this.txt_lineWin.node.active = false;
        };
        _proto.onClickMenu = function onClickMenu() {
          this.node_menu.active = !this.node_menu.active;
          //        // this.node_btns.active = !this.node_menu.active;
          this.node_down.active = !this.node_menu.active;
        };
        _proto.onClickBigWin = function onClickBigWin() {
          //        // this.sp_bigWin.setCompleteListener(null);
          //        // this.node_bigwin.active = false;
          //        // this.changeState(RunState.NORMAL);
          //        // this.changeBtnActive(true);
          this.bigWinBgClickIndex++;
          if (this.bigWinBgClickIndex == 1) {
            this.txt_bigwin.reset(FortuneElephantProxy.result.prizeAmount);
          } else {
            this.sp_bigWin.setCompleteListener(null);
            this.node_bigwin.active = false;
            this.txt_bigwin.reset();
            this._runTime = 0;
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _this9 = this;
          //        // console.log("onClickStop");
          if (!FortuneElephantProxy.result) {
            return;
          }

          //        // if (this._state == RunState.START) {
          //        //     if (this._runTime > 1) {
          //        //         this._runTime -= 1;
          //        //         return;
          //        //     }
          //        // } else {
          //        //     return;
          //        // }
          if (this._lock) {
            return;
          }
          this._lock = true;
          this._state = RunState.STOP;
          this._runTime = STOP_TIME;
          var nums = FortuneElephantProxy.result.openNums;
          var scatterCount = 0;
          var scatterTime = 0;
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + _this9.aniLines.length * 1] - 1;
            var rand3 = nums[i + _this9.aniLines.length * 2] - 1;
            var arr = [rand1, rand2, rand3];
            if (_this9._runDelay * i + scatterTime == 0) {
              _this9.aniLines[i].showResult(arr);
            } else {
              _this9.scheduleOnce(function () {
                _this9.aniLines[i].showResult(arr);
              }, _this9._runDelay * i + scatterTime);
            }
            if (rand1 == 0) {
              scatterCount++;
            }
            if (rand2 == 0) {
              scatterCount++;
            }
            if (rand3 == 0) {
              scatterCount++;
            }
            if (scatterCount >= 2 && _this9._runDelay != 0) {
              scatterTime += 1;
              // this.aniLines[i].showLight();
            }

            if (scatterCount >= 2 && !_this9._isScatter && _this9._runDelay != 0) {
              _this9._isScatter = true;
              _this9.scatterLine = i;
            }
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          if (this._runDelay == 0) {
            FortuneElephantDef.palyAudio(FortuneElephantDef.audio.QUICK_END);
          } else {
            FortuneElephantDef.palyAudio(FortuneElephantDef.audio.END);
          }
          this._runTime += scatterTime;
          // let end = () => {
          //     this._lock = false;
          //     this.showResult();
          // };
          // this.scheduleOnce(() => {
          //     end();
          // }, 0.2 + this._runDelay * 5 + scatterTime);
        };

        _proto.changeBtnActive = function changeBtnActive(b) {
          //        // this.node_start.active = b;
          //        // this.node_stop.active = !b;

          if (this._auto) {
            return;
          }
          this.updateBetBtn(b);
          if (b) ;else {
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
          }
          if (b) {
            this.spine_start.setAnimation(0, "idle", true);
          } else {
            this.spine_start.setAnimation(0, "start", true);
          }
        };
        _proto.updateNotice = function updateNotice(dt) {
          this.noticeDelay -= dt;
          if (this.noticeDelay < 0) this.notice_title.setPosition(this.notice_title.position.x - 1.5, this.notice_title.position.y);
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 * 0.8 - 375) {
            this.changeNotice();
          }
        };
        _proto.changeNotice = function changeNotice(lucky) {
          this.noticeDelay = 2;
          this.noticeIndex++;
          if (this.noticeIndex >= this.noticeFrames.length) {
            this.noticeIndex = 0;
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.noticeFrames[this.noticeIndex];
          var x = this.notice_title.getComponent(UITransform).width / 2 > 300 ? this.notice_title.getComponent(UITransform).width / 2 - 300 : 0;
          this.notice_title.setPosition(x, this.notice_title.position.y);
        };
        _proto.changeSpecialNotice = function changeSpecialNotice(b, index) {
          if (b === void 0) {
            b = false;
          }
          if (b) ;else {
            if (this.notice_title.active) {
              return;
            }
            this.notice_title.active = true;
            this.notice_special.active = false;
            this.changeNotice();
          }
        };
        _proto.update = function update(dt) {
          if (this.freeLock) {
            this.freeTimeLeft -= dt;
            //            // this.txt_freeTime.string = Math.ceil(this.freeTimeLeft) + "";
            if (this.freeTimeLeft <= 0) {
              this.onClickFree();
            }
          }
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (FortuneElephantProxy.result) {
                    this.changeState(RunState.STOP);
                  } else {
                    this._runTime = RUN_TIME;
                    this._errCount++;
                    if (this._errCount > 3) {
                      //                            // console.log("retry");
                      this.sendBet();
                    }
                  }
                }
                break;
              }
            case RunState.STOP:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.AWARD:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.updateGold();
                  this.changeBtnActive(true);
                  if (this._auto || this._isFree) {
                    this.changeState(RunState.NORMAL);
                  } else {
                    this.changeState(RunState.AWARD_LINES);
                  }
                }
                break;
              }
            case RunState.BIG_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (this._isFree) {
                    this.showEnd();
                  } else {
                    this.changeState(RunState.SHOWGAIN);
                  }
                }
                break;
              }
            case RunState.SHOW_SPECIAL_START:
              {
                if (this.node_specialWildProcess.getComponent(UITransform).width < this.specialWidth) {
                  this.node_specialWildProcess.getComponent(UITransform).width += 4;
                  this.node_specialLight.setPosition(this.node_specialLight.position.x + 4, this.node_specialLight.position.y);
                  this.node_specialLight.active = true;
                } else {
                  this.changeState(RunState.SHOW_SPECIAL_END);
                }
                break;
              }
            case RunState.SHOW_SPECIAL2:
              {
                if (this.node_specialWildProcess.getComponent(UITransform).width < this.specialWidth) {
                  this.node_specialWildProcess.getComponent(UITransform).width += 5;
                  this.node_specialLight.setPosition(this.node_specialLight.position.x + 5, this.node_specialLight.position.y);
                  this.node_specialLight.active = true;
                } else {
                  this.changeState(RunState.SHOW_SPECIAL_GAIN);
                }
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (this._isFree) {
                    if (this.wildArr.length > 0) {
                      this.changeState(RunState.SHOW_SPECIAL1);
                    } else {
                      this.changeState(RunState.SHOW_NEXT_GAIN);
                    }
                  } else {
                    this.showEnd();
                  }
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._auto || this._isFree) {
                  this.preStart();
                }
                break;
              }
            case RunState.AWARD_LINES:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this._runTime = LINE_TIME;
                  this._showLineIndex++;
                  this.showSignleLine();
                }
                break;
              }
            case RunState.WAIT:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.FREE_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.onClickFreeWin();
                }
                break;
              }
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          EventManager.off(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.off(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.off(ConfigManager.eventTransform.setQuick, this.onClickQuick, this);
        };
        return FortuneElephantView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniLines", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_start", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spine_tiger", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notice_special", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "noticeFrames", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_gain", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spine_gain", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_gain", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_particle", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_particleLight", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "prefab_winItem", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftCount", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "prefab_window", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "txt_lineWin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "btn_auto", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "spine_light", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "node_specialWildProcessBg", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "node_specialWildProcess", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_specialLight", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "txt_specialWildRate", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "txt_specialWildRateNext", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "node_freeBg", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "node_freeWinBg", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeCount", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeWin", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeLeft", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "node_freeLeft", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "node_down", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "node_line5", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "fonts", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "spine_winLight", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "node_ani", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "frame_quick", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "sprite_quick", [_dec53], {
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

System.register("chunks:///_virtual/FortuneElephantWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneElephantDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, sp, Label, Node, Component, FortuneElephantDef;
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
      sp = module.sp;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      FortuneElephantDef = module.FortuneElephantDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "7f9a7QxK51Aj7pKwZZN3pCC", "FortuneElephantWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneElephantWindow = exports('default', (_dec = ccclass("FortuneElephantWindow"), _dec2 = menu("game/FortuneElephant/FortuneElephantWindow"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(sp.Skeleton), _dec6 = property(sp.SkeletonData), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantWindow, _Component);
        function FortuneElephantWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sp_item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frames", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_normal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odds", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_odd", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wild", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor8, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FortuneElephantWindow.prototype;
        _proto.showIndex = function showIndex(index) {
          this.sp_item.spriteFrame = this.frames[index];
          this.node_odd.active = index > 1;
          this.node_wild.active = index == 1;
          this.node_scatter.active = index == 0;
          var odd = FortuneElephantDef.odds[index];
          //        // console.log("odds", odd);
          if (odd) {
            for (var i = 0; i < 3; i++) {
              this.txt_odds[i].string = odd[i] + "";
            }
          }
          if (index > 5) {
            this.spine_normal.node.active = false;
            this.sp_item.node.active = true;
          } else {
            this.spine_normal.skeletonData = this.spines[index];
            this.spine_normal.node.active = true;
            this.sp_item.node.active = false;
            this.spine_normal.setAnimation(0, "win", true);
          }
        };
        return FortuneElephantWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frames", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spine_normal", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_odds", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_odd", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_scatter", [_dec10], {
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
      // import { FortuneElephantDef } from "./FortuneElephantDef";
      // import FortuneElephantRunItem from "./FortuneElephantRunItem";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/FortuneElephant/FortuneElephantWindow")
      // export default class FortuneElephantWindow extends cc.Component {
      //     @property(cc.Sprite)
      //     sp_item: cc.Sprite = null;
      //
      //     @property(cc.SpriteFrame)
      //     frames: cc.SpriteFrame[] = [];
      //
      //     @property(sp.Skeleton)
      //     spine_normal: sp.Skeleton = null;
      //
      //     @property(sp.SkeletonData)
      //     spines: sp.SkeletonData[] = [];
      //
      //     @property(cc.Label)
      //     txt_odds: cc.Label[] = [];
      //
      //     @property(cc.Node)
      //     node_odd: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_wild: cc.Node = null;
      //
      //     @property(cc.Node)
      //     node_scatter: cc.Node = null;
      //
      //     showIndex(index: number) {
      //         // this.item.skeletonData = this.spines[index];
      //         // if (index == 0) {
      //         //     this.item.setAnimation(0, "idle", true);
      //         // } else {
      //         //     this.item.setAnimation(0, "win_idle", true);
      //         // }
      //
      //         this.sp_item.spriteFrame = this.frames[index];
      //
      //         this.node_odd.active = index > 1;
      //         this.node_wild.active = index == 1;
      //         this.node_scatter.active = index == 0;
      //
      //         let odd = FortuneElephantDef.odds[index];
      //         // console.log("odds", odd);
      //         if (odd) {
      //             for (let i = 0; i < 3; i++) {
      //                 this.txt_odds[i].string = odd[i] + "";
      //             }
      //         }
      //
      //         if (index > 5) {
      //             this.spine_normal.node.active = false;
      //             this.sp_item.node.active = true;
      //         } else {
      //             this.spine_normal.skeletonData = this.spines[index];
      //
      //             this.spine_normal.node.active = true;
      //             this.sp_item.node.active = false;
      //             this.spine_normal.setAnimation(0, "win", true);
      //         }
      //
      //         // this.txt_odd1.string = "" + odd;
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneElephantWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneElephantProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Sprite, SpriteFrame, UITransform, v3, Component, FortuneElephantProxy, FortuneElephantGameEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      FortuneElephantProxy = module.default;
      FortuneElephantGameEvent = module.FortuneElephantGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "e59ffsIBfZPzLOK3jCVQ1wk", "FortuneElephantWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneElephantWinItem = exports('default', (_dec = ccclass("FortuneElephantWinItem"), _dec2 = menu("game/FortuneElephant/FortuneElephantWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec6 = property(Sprite), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneElephantWinItem, _Component);
        function FortuneElephantWinItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_normal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_item", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frames", _descriptor5, _assertThisInitialized(_this));
          _this._index = void 0;
          return _this;
        }
        var _proto = FortuneElephantWinItem.prototype;
        _proto.showResult = function showResult(result, big) {
          this._index = result;
          this.spine_normal.skeletonData = this.spines[result];

          //        // if (big) {
          //        //     if (this._index == 0) {
          //        //         this.spine_normal.setAnimation(0, "idle", true);
          //        //     } else {
          //        //         this.spine_normal.setAnimation(0, "win_idle", true);
          //        //     }
          //        //     this.spine_bg.node.active = false;
          //        // } else {
          //        //     this.spine_normal.setAnimation(0, "win", false);
          //        //     this.spine_normal.addAnimation(0, "win_idle", true);
          //        //     this.spine_bg.node.active = true;
          //        // }
          this.spine_bg.node.active = result != 1;
          if (this.spine_bg.node.active) {
            this.spine_bg.setAnimation(0, "intro", false);
            this.spine_bg.addAnimation(0, "idle", true);
          }
          if (result > 5) {
            this.spine_normal.node.active = false;
            this.sp_item.node.active = true;
            this.sp_item.spriteFrame = this.frames[result - 6];
          } else {
            this.spine_normal.node.active = true;
            this.sp_item.node.active = false;
            this.spine_normal.setAnimation(0, "win", true);
          }
        };
        _proto.showSpawn = function showSpawn() {
          //        // this.spine_normal.setAnimation(0, "spawn", false);
          //        // this.spine_normal.addAnimation(0, "idle", true);
        };
        _proto.onClick = function onClick() {
          FortuneElephantProxy.emit(FortuneElephantGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneElephantWinItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_normal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_item", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frames", [_dec7], {
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
      // import FortuneElephantProxy, { FortuneElephantGameEvent } from "./FortuneElephantProxy";
      //
      // const { ccclass, property, menu } = cc._decorator;
      //
      // @ccclass
      // @menu("game/FortuneElephant/FortuneElephantWinItem")
      // export default class FortuneElephantWinItem extends cc.Component {
      //     @property(sp.Skeleton)
      //     spine_bg: sp.Skeleton = null;
      //
      //     @property(sp.Skeleton)
      //     spine_normal: sp.Skeleton = null;
      //
      //     @property(sp.SkeletonData)
      //     spines: sp.SkeletonData[] = [];
      //
      //     @property(cc.Sprite)
      //     sp_item: cc.Sprite = null;
      //
      //     @property(cc.SpriteFrame)
      //     frames: cc.SpriteFrame[] = [];
      //
      //     _index: number;
      //     showResult(result, big = false) {
      //         this._index = result;
      //
      //         this.spine_normal.skeletonData = this.spines[result];
      //         this.spine_bg.setAnimation(0, "intro", false);
      //         this.spine_bg.addAnimation(0, "idle", true);
      //
      //         // if (big) {
      //         //     if (this._index == 0) {
      //         //         this.spine_normal.setAnimation(0, "idle", true);
      //         //     } else {
      //         //         this.spine_normal.setAnimation(0, "win_idle", true);
      //         //     }
      //         //     this.spine_bg.node.active = false;
      //         // } else {
      //         //     this.spine_normal.setAnimation(0, "win", false);
      //         //     this.spine_normal.addAnimation(0, "win_idle", true);
      //         //     this.spine_bg.node.active = true;
      //         // }
      //         this.spine_bg.node.active = result != 1;
      //         if (result > 5) {
      //             this.spine_normal.node.active = false;
      //             this.sp_item.node.active = true;
      //             this.sp_item.spriteFrame = this.frames[result - 6];
      //         } else {
      //             this.spine_normal.node.active = true;
      //             this.sp_item.node.active = false;
      //             this.spine_normal.setAnimation(0, "win", true);
      //         }
      //     }
      //
      //     showSpawn() {
      //         // this.spine_normal.setAnimation(0, "spawn", false);
      //         // this.spine_normal.addAnimation(0, "idle", true);
      //     }
      //
      //     onClick() {
      //         FortuneElephantProxy.emit(FortuneElephantGameEvent.CLICK_ITEM, {
      //             index: this._index,
      //             pos: this.node.convertToWorldSpaceAR(cc.v2(0, 0)),
      //         });
      //     }
      // }
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/FortuneElephantGame', 'chunks:///_virtual/FortuneElephantGame'); 
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