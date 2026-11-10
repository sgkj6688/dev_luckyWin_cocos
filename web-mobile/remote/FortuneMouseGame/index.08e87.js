System.register("chunks:///_virtual/FortuneMouseCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneMouseRunItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, v3, UITransform, tween, Component, FortuneMouseRunItem;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      FortuneMouseRunItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "890fcASyJVNtqMwrfhY9Fyg", "FortuneMouseCardAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CARDCOUNT = 5;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULT: 3,
        END: 4
      };
      var FortuneMouseCardAni = exports('default', (_dec = ccclass("FortuneMouseCardAni"), _dec2 = menu("game/FortuneMouse/FortuneMouseCardAni"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseCardAni, _Component);
        function FortuneMouseCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepHeight", _descriptor2, _assertThisInitialized(_this));
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
        var _proto = FortuneMouseCardAni.prototype;
        _proto.onLoad = function onLoad() {
          var startY = 420;
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_card);
            this.node.addChild(node);
            node.setPosition(v3(0, startY - i * 210));
            var com = node.getComponent(FortuneMouseRunItem);
            this.runningCard.push(com);
          }
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startY = 420;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 210));
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
              this.runningCard[i].node.scale = v3(0.75, 0.75, 1);
              //                // cc.tween(this.runningCard[i].node)
              //                //     .delay(0.1 * i)
              //                //     .to(0.3, { scale: 0.7 })
              //                //     .start();
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              this.randCard(_i);
              _i.node.scale = v3(0.75, 0.75, 1);
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
        };
        _proto.hide = function hide(i) {
          var index = this.endIndex + i - 2;
          if (index < 0) {
            index = 5 + index;
          }
          // cc.Tween.stopAllByTarget(this.runningCard[index].node);
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
                this.setState(CardState.NORMAL);
                break;
              }
          }
        };
        return FortuneMouseCardAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stepHeight", [property], {
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

System.register("chunks:///_virtual/FortuneMouseDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './FortuneMouseProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, FortuneMouseProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      FortuneMouseProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "31406Bse/9Ot62sWpIW71vy", "FortuneMouseDef", undefined);
      var FortuneMouseDef = exports('FortuneMouseDef', /*#__PURE__*/function () {
        function FortuneMouseDef() {}
        FortuneMouseDef.playLookByIndex = function playLookByIndex(index) {
          var name = "voxRoofLook" + ("" + index).padStart(2, "0");
          //        // console.log("playLookByIndex", index, name);
          this.palyAudio(name);
        };
        FortuneMouseDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = FortuneMouseProxy.bundle;
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
        FortuneMouseDef.palyMusic = function palyMusic(name) {
          var bundle = FortuneMouseProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        FortuneMouseDef.init = function init() {};
        FortuneMouseDef.getRand = function getRand(i) {
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
        FortuneMouseDef.randRusult = function randRusult(amount, add) {
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
        FortuneMouseDef.getMultple = function getMultple() {
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
        FortuneMouseDef.checkPrize = function checkPrize(openNums) {
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
        return FortuneMouseDef;
      }());
      FortuneMouseDef.audio = {
        AWARD1: "prizeSmallwin",
        BG: "bgm_mg",
        BG2: "bgm_respin",
        END: "spinStop02",
        QUICK_END: "spinStopQuick",
        TURN: "spinBtn",
        WILD: "symWildSpawn",
        BIGWIN: "bgmBigwinMain",
        TIGER_BIG_WIN: "voxRoofLookSuper01",
        SINGLE_LINE: "prizePayoutIdle",
        COLLECT_WILD: "prizeSymWildCollect",
        COLLECT_WILD2: "voxWildCollect",
        SHOW_WINDOW: "uiPayout",
        TIGER_WIN1: "voxSmallwin02",
        TIGER_WIN2: "voxSmallwin03",
        TIGER_WIN3: "voxMedwin01",
        LUCKY_WIN1: "voxMedwin02",
        LUCKY_WIN2: "voxMedwin03",
        FAKE_LUCKY: "voxTease04",
        LOOK_LEFT: "voxRoofLook01",
        LOOK_RIGHT: "voxRoofLook02",
        TOP_ENTER: "voxMouseEnterTop",
        TOP_EXIT: "voxMouseExitTop",
        BOTTOM_EXIT: "voxMouseExitBottom2",
        LUCKY_IN: "fsIn",
        LUCKY_WILD: "fsReelActive",
        LUCKY_STOP1: "fsReelstop01",
        LUCKY_STOP2: "fsReelstop02",
        LUCKY_WILD_HIT: "fsWildHit0"
      };
      FortuneMouseDef.tryGold = 100000000;
      FortuneMouseDef.odds = [300, 100, 50, 30, 15, 5, 3];
      FortuneMouseDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      FortuneMouseDef.lines = [[3, 4, 5], [0, 1, 2], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      FortuneMouseDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneMouseGame", ['./FortuneMouseCardAni.ts', './FortuneMouseDef.ts', './FortuneMouseProxy.ts', './FortuneMouseRunItem.ts', './FortuneMouseScene.ts', './FortuneMouseView.ts', './FortuneMouseWinItem.ts', './FortuneMouseWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FortuneMouseProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, sys, assetManager, i18n, ProxyBase, Common, MainManager;
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
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "fe88b7buaVEuohdZY2Upu5J", "FortuneMouseProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FortuneMouseGameEvent = exports('FortuneMouseGameEvent', /*#__PURE__*/function (FortuneMouseGameEvent) {
        FortuneMouseGameEvent["ENTER_ROOM"] = "enterRoom";
        FortuneMouseGameEvent["LEAVE_ROOM"] = "leaveRoom";
        FortuneMouseGameEvent["UPDATE_CONFIG"] = "updateConfig";
        FortuneMouseGameEvent["UPDATE_BETLIST"] = "updateBetList";
        FortuneMouseGameEvent["CLOSE_BONUS"] = "closeBonus";
        FortuneMouseGameEvent["SELECT_BET"] = "selectBet";
        FortuneMouseGameEvent["START"] = "start";
        FortuneMouseGameEvent["CLICK_ITEM"] = "clickItem";
        FortuneMouseGameEvent["ERROR"] = "errorReturn";
        return FortuneMouseGameEvent;
      }({}));
      var FortuneMouseProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(FortuneMouseProxyMgr, _ProxyBase);
        function FortuneMouseProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "FortuneMouseGame";
          _this.wsEvents = [ConfigManager.ProtocolFortuneMouse.bet, ConfigManager.ProtocolFortuneMouse.info];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [0.2, 0.5, 1, 10, 100];
          _this.betMaxCount = 10;
          _this.betRate = 5;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          return _this;
        }
        var _proto = FortuneMouseProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(FortuneMouseGameEvent.SELECT_BET);
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
        _proto.addLuckyData = function addLuckyData() {
          var arr = this.result.LuckySymbolsArr;
          var rand = Math.floor(Math.random() * 4) + 1;
          var getList = function getList() {
            var list = [2, 3, 4, 5, 6, 7];
            var num1 = list.splice(Math.floor(Math.random() * list.length), 1);
            var num2 = list.splice(Math.floor(Math.random() * list.length), 1);
            return [num1[0], 1, num2[0], num1[0], 1, num2[0], num1[0], 1, num2[0]];
          };
          for (var i = 0; i < rand; i++) {
            var list = getList();
            arr.unshift(list);
          }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolFortuneMouse.bet) {
              this.emit(FortuneMouseGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolFortuneMouse.info:
              {
                this.betList = data.Data.betList;
                this.emit(FortuneMouseGameEvent.UPDATE_BETLIST);
                break;
              }
            case ConfigManager.ProtocolFortuneMouse.bet:
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
                this.emit(FortuneMouseGameEvent.START);
              }
          }
        };
        _createClass(FortuneMouseProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return FortuneMouseProxyMgr;
      }(ProxyBase);
      var FortuneMouseProxy = exports('default', new FortuneMouseProxyMgr("FortuneMouseProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneMouseRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneMouseProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, UITransform, v3, Component, FortuneMouseProxy, FortuneMouseGameEvent;
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
      FortuneMouseProxy = module.default;
      FortuneMouseGameEvent = module.FortuneMouseGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "14bccPydC9JU7BiXwQcYAUe", "FortuneMouseRunItem", undefined);
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
      var FortuneMouseRunItem = exports('default', (_dec = ccclass("FortuneMouseRunItem"), _dec2 = menu("game/FortuneMouse/FortuneMouseRunItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseRunItem, _Component);
        function FortuneMouseRunItem() {
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
        var _proto = FortuneMouseRunItem.prototype;
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
          //        // if (FortuneMouseProxy.result && FortuneMouseProxy.result.Lucky) {
          //        //     let nums = [FortuneMouseProxy.result.LuckyMsg.LuckySymbol, 0];
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
          FortuneMouseProxy.emit(FortuneMouseGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneMouseRunItem;
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
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneMouseScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './FortuneMouseDef.ts', './FortuneMouseProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, FortuneMouseDef, FortuneMouseProxy, MainManager;
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
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneMouseDef = module.FortuneMouseDef;
    }, function (module) {
      FortuneMouseProxy = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "f1b66lz+rFKf4UPQPmrZElT", "FortuneMouseScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FortuneMouseScene = exports('default', (_dec = ccclass("FortuneMouseScene"), _dec2 = menu("game/FortuneMouse/FortuneMouseScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseScene, _Component);
        function FortuneMouseScene() {
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
        var _proto = FortuneMouseScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          if (!sys.isMobile) {
            node.scale = v3(750 / 1334, 750 / 1334, 1);
          } else {
            node.angle = 90;
          }
          this.node.addChild(node);
        };
        _proto.init = function init() {
          this.reset();
          FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);
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
          FortuneMouseProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          FortuneMouseProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return FortuneMouseScene;
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

System.register("chunks:///_virtual/FortuneMouseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Common.ts', './FortuneMouseCardAni.ts', './FortuneMouseDef.ts', './FortuneMouseProxy.ts', './FortuneMouseWinItem.ts', './FortuneMouseWindow.ts', './ClickbtnEffect.ts', './FortuneSetAuto.ts', './FortuneRank.ts', './FortuneHistory.ts', './FortuneSetBase.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Label, Node, SpriteFrame, Prefab, Toggle, Button, Font, Sprite, instantiate, v3, UITransform, sys, Color, color, tween, Tween, Component, v2, i18n, ProxyMgr, AudioManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Common, FortuneMouseCardAni, FortuneMouseDef, FortuneMouseProxy, FortuneMouseGameEvent, FortuneMouseWinItem, FortuneMouseWindow, ClickbtnEffect, FortuneSetAuto, FortuneRank, FortuneHistory, FortuneSetBase, MainManager;
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
      Button = module.Button;
      Font = module.Font;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      Color = module.Color;
      color = module.color;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
      v2 = module.v2;
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
      FortuneMouseCardAni = module.default;
    }, function (module) {
      FortuneMouseDef = module.FortuneMouseDef;
    }, function (module) {
      FortuneMouseProxy = module.default;
      FortuneMouseGameEvent = module.FortuneMouseGameEvent;
    }, function (module) {
      FortuneMouseWinItem = module.default;
    }, function (module) {
      FortuneMouseWindow = module.default;
    }, function (module) {
      ClickbtnEffect = module.default;
    }, function (module) {
      FortuneSetAuto = module.default;
    }, function (module) {
      FortuneRank = module.default;
    }, function (module) {
      FortuneHistory = module.default;
    }, function (module) {
      FortuneSetBase = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49;
      cclegacy._RF.push({}, "b10ba33DwBC64IjsKMTgY0C", "FortuneMouseView", undefined);
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
        LUCKY: 7,
        SPECIAL: 8,
        FAKE_LUCKY: 9,
        WAIT: 10
      };
      var RUN_TIME = 0.5;
      var STOP_TIME = 2;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 10;
      var BIG_WIN_TIME2 = 12;
      var BIG_WIN_TIME3 = 14;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 2;
      var FortuneMouseView = exports('default', (_dec = ccclass("FortuneMouseView"), _dec2 = menu("game/FortuneMouse/FortuneMouseView"), _dec3 = property(sp.SkeletonData), _dec4 = property(FortuneMouseCardAni), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(Label), _dec9 = property(ScrollNumLabel), _dec10 = property(Label), _dec11 = property(sp.Skeleton), _dec12 = property(ScrollNumLabel), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(SpriteFrame), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(sp.Skeleton), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Prefab), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Label), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Prefab), _dec40 = property(Label), _dec41 = property(Toggle), _dec42 = property(ClickbtnEffect), _dec43 = property(SpriteFrame), _dec44 = property(sp.Skeleton), _dec45 = property(Button), _dec46 = property(Button), _dec47 = property(SpriteFrame), _dec48 = property(Font), _dec49 = property(Node), _dec50 = property(SpriteFrame), _dec51 = property(Sprite), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseView, _Component);
        function FortuneMouseView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_start", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_startLight", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_tiger", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_special", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gain", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_gain", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gain", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particle", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particleLight", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scale", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_10light", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scaleUps", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scaleBigs", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_moveLeft1", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_moveRight1", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_moveLeft2", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_moveRight2", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftCount", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lights", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_nums", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_window", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_lineWin", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_auto", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor40, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // node_x10LightBall: cc.Node = null;
          _initializerDefineProperty(_this, "frame_lucky", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_quick", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_add", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_reduce", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_lines", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "font_lines", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_luckyTxt", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_bgs", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg", _descriptor49, _assertThisInitialized(_this));
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
          return _this;
        }
        var _proto = FortuneMouseView.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData();
          this.clear();
          this.initEvent();
          this.updateBetlist();
        };
        _proto.init = function init() {
          this.spine_tiger.setAnimation(0, "idle", true);
          FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);
          var node = instantiate(this.prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(FortuneMouseWindow);
          node.active = false;
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();

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
          var winItem = item.getComponent(FortuneMouseWinItem);
          winItem.showResult(result, isBig);
          //        //隐藏对应图片
          var a = Math.floor(index / 3);
          var b = index % 3;
          this.aniLines[b].hide(a);
          return winItem;
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          FortuneMouseProxy.on(FortuneMouseGameEvent.UPDATE_BETLIST, this.updateBetlist, this);
          FortuneMouseProxy.on(FortuneMouseGameEvent.CLOSE_BONUS, function () {
            FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);
            _this2.checkAward();
          }, this);
          FortuneMouseProxy.on(FortuneMouseGameEvent.SELECT_BET, function (count) {
            //                // this.node_betSelect.active = false;
            _this2.setData();
          }, this);
          FortuneMouseProxy.on(FortuneMouseGameEvent.START, function () {
            _this2.runStart();
          }, this);
          FortuneMouseProxy.on(FortuneMouseGameEvent.ERROR, function () {
            _this2.changeState(RunState.NORMAL);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          FortuneMouseProxy.on(FortuneMouseGameEvent.CLICK_ITEM, function (data) {
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
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.SHOW_WINDOW);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          FortuneMouseProxy.setBet(betListIndex, betCount);
        };
        _proto.updateBetlist = function updateBetlist() {
          //        // this.node_bets.destroyAllChildren();
          //        // for (let bet of FortuneMouseProxy.betList) {
          //        //     let node = cc.instantiate(this.pre_bet);
          //        //     this.node_bets.addChild(node);
          //        //     // node.getComponent(FortuneMouseBetItem).setBet(bet);
          //        // }
        };
        _proto.setData = function setData() {
          this._bet = FortuneMouseProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.updateBetBtn();
        };
        _proto.updateBetBtn = function updateBetBtn() {
          this.btn_add.interactable = !(FortuneMouseProxy._curBetListIndex == FortuneMouseProxy.betList.length - 1 && FortuneMouseProxy._curBetCount == FortuneMouseProxy.betMaxCount - 1);
          this.btn_reduce.interactable = !(FortuneMouseProxy._curBetListIndex == 0 && FortuneMouseProxy._curBetCount == 0);
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(FortuneMouseDef.tryGold + used);
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
          //        //     "prefab/FortuneMouseRank",
          //        //     FortuneMouseProxy.bundle,
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
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotFortuneMouse");
          }, true);
        };
        _proto.onClickRecord = function onClickRecord() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneMouseHistory",
          //        //     FortuneMouseProxy.bundle,
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
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotFortuneMouse");
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/FortuneMouseHelp", FortuneMouseProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, FortuneMouseProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneMouseSetBase",
          //        //     FortuneMouseProxy.bundle,
          //        //     () => {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);

          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }

          //        //         node.getComponent(FortuneMouseSetBase).setData({
          //        //             _curBetListIndex: FortuneMouseProxy._curBetListIndex,
          //        //             _curBetCount: FortuneMouseProxy._curBetCount,
          //        //             betMaxCount: FortuneMouseProxy.betMaxCount,
          //        //             betList: FortuneMouseProxy.betList,
          //        //             betRate: FortuneMouseProxy.betRate,
          //        //         });
          //        //     },
          //        //     true
          //        // );

          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: FortuneMouseProxy._curBetListIndex,
              _curBetCount: FortuneMouseProxy._curBetCount,
              betMaxCount: FortuneMouseProxy.betMaxCount,
              betList: FortuneMouseProxy.betList,
              betRate: FortuneMouseProxy.betRate
            });
          }, true);
        };
        _proto.onClickBetUp = function onClickBetUp() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneMouseProxy._curBetCount++;
          if (FortuneMouseProxy._curBetCount >= FortuneMouseProxy.betMaxCount) {
            FortuneMouseProxy._curBetListIndex++;
            if (FortuneMouseProxy._curBetListIndex >= FortuneMouseProxy.betList.length) {
              FortuneMouseProxy._curBetListIndex--;
              FortuneMouseProxy._curBetCount--;
            } else {
              FortuneMouseProxy._curBetCount = 0;
              FortuneMouseProxy.setBet(FortuneMouseProxy._curBetListIndex, FortuneMouseProxy._curBetCount);
            }
          } else {
            FortuneMouseProxy.setBet(FortuneMouseProxy._curBetListIndex, FortuneMouseProxy._curBetCount);
          }
        };
        _proto.onClickBetDown = function onClickBetDown() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneMouseProxy._curBetCount--;
          if (FortuneMouseProxy._curBetCount < 0) {
            FortuneMouseProxy._curBetListIndex--;
            if (FortuneMouseProxy._curBetListIndex < 0) {
              FortuneMouseProxy._curBetListIndex++;
              FortuneMouseProxy._curBetCount++;
            } else {
              FortuneMouseProxy._curBetCount = FortuneMouseProxy.betMaxCount - 1;
              FortuneMouseProxy.setBet(FortuneMouseProxy._curBetListIndex, FortuneMouseProxy._curBetCount);
            }
          } else {
            FortuneMouseProxy.setBet(FortuneMouseProxy._curBetListIndex, FortuneMouseProxy._curBetCount);
          }
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          var _this3 = this;
          if (sender.isChecked) {
            sender.setIsCheckedWithoutNotify(false);
            return;
          }
          sender.setIsCheckedWithoutNotify(true);
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetAuto", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetAuto).setData({
              gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
              bet: _this3._bet,
              win: 0
            });
          }, true);
        };
        _proto.setAuto = function setAuto(times) {
          this._autoTimes = times;
          this.txt_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this._auto = true;
            this.spine_start.setAnimation(0, "auto", true);
            this.btn_auto.setIsCheckedWithoutNotify(false);
            this.clickEffect.switchAni("push2");
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
            this.btn_reduce.interactable = false;
            this.btn_add.interactable = false;
          } else {
            this._auto = false;
            this.spine_start.setAnimation(0, "idle", true);
            this.btn_auto.setIsCheckedWithoutNotify(true);
            this.clickEffect.switchAni();
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
            this.updateBetBtn();
          }
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
        _proto.onClickQuick = function onClickQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.2;
            this.spine_quick.setAnimation(0, "off", true);
          } else {
            this._runDelay = 0;
            this.spine_quick.setAnimation(0, "intro_on", false);
            this.spine_quick.addAnimation(0, "on", true);
          }
        };
        _proto.checkReady = function checkReady() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD_LINES) return false;
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
          if (!this.checkReady()) return;
          if (this._lock) return;
          var multiple = 1;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          this.updateGold(-this._bet * multiple);
          this.clear();
          this.sendBet();
          this._state = RunState.START;
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };
        _proto.runStart = function runStart() {
          this.checkAuto();
          this.spine_startLight.setAnimation(0, "spin", false);
          this.changeBtnActive(false);
          FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(0);
          }
          if (FortuneMouseProxy.result.Lucky) {
            FortuneMouseProxy.addLuckyData();
            this.changeState(RunState.LUCKY);
          } else {
            if (this._collectStar > 20 && this._collectStar % 15 == 0) this.changeState(RunState.FAKE_LUCKY);
          }
          if (this._runDelay == 0) {
            this._runTime = 0;
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolFortuneMouse.bet, {
              betAmount: this._bet
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.reset();
          FortuneMouseProxy.result = null;
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

          this.bigWinBgClickIndex = 0;
          this.changeSpecialNotice();
        };
        _proto.showResult = function showResult() {
          var _this4 = this;
          if (!FortuneMouseProxy.result) {
            return;
          }
          var findCount = 0;
          var delay = 0.3;
          var _loop = function _loop() {
            if (FortuneMouseProxy.result.NormalSymbols[i] == 1) {
              findCount++;
              var child = _this4.node_spineParent.getChildByName("spine" + i);
              if (child) {
                var item = _this4.showSpine(i, 0);
                item.showSpawn();
                var pos = child.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
                var pos1 = _this4.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
                var node = instantiate(_this4.node_particle);
                node.active = false;
                _this4.node.addChild(node);
                node.position = pos1;
                FortuneMouseDef.palyAudio(FortuneMouseDef.audio.COLLECT_WILD);
                tween(node).delay(delay + (findCount - 1) * 0.2).call(function () {
                  node.active = true;
                  var nodeLight = instantiate(_this4.node_particleLight);
                  _this4.node.addChild(nodeLight);
                  nodeLight.active = true;
                  nodeLight.position = pos1;
                  var spine = nodeLight.getComponent(sp.Skeleton);
                  spine.setAnimation(0, "idle", false);
                  spine.setCompleteListener(function () {
                    spine.setCompleteListener(null);
                    nodeLight.destroyFromParent();
                  });
                })
                //@ts-ignore
                .bezierTo(0.5, v2(pos1.x, pos1.y), v2(-0, (pos1.y + _this4.node_particle.getPosition().y) / 2), v2(_this4.node_particle.getPosition().x, _this4.node_particle.getPosition().y)).call(function () {
                  node.destroyFromParent();
                  var nodeLight = instantiate(_this4.node_particleLight);
                  _this4.node.addChild(nodeLight);
                  nodeLight.position = _this4.node_particle.position;
                  nodeLight.active = true;
                  var spine = nodeLight.getComponent(sp.Skeleton);
                  spine.setAnimation(0, "idle", false);
                  spine.setCompleteListener(function () {
                    spine.setCompleteListener(null);
                    nodeLight.destroyFromParent();
                  });
                }).start();
              }
            }
          };
          for (var i = 0; i < FortuneMouseProxy.result.NormalSymbols.length; i++) {
            _loop();
          }
          var time = 0;
          this._collectStar += findCount;
          if (findCount > 0) {
            this.spine_tiger.setAnimation(0, "idle3", false);
            time = 0.8;
          }
          this.scheduleOnce(function () {
            var nfx = "1";
            if (findCount > 2) {
              nfx = "3";
            } else if (findCount > 1) {
              nfx = "2";
            }
            //            // this.spine_tiger.setAnimation(1, name + nfx, false);
            if (findCount > 0) {
              _this4.spine_tiger.setAnimation(0, "wild", false);
              _this4.spine_tiger.addAnimation(0, "idle2", true);

              //                // this.spine_tiger.setAnimation(1, "fx_enterlevel" + nfx, false);
              _this4.spine_tiger.setAnimation(1, "fx_wild_level" + nfx, false);
              _this4.spine_tiger.addAnimation(1, "fx_level" + nfx, true);
              FortuneMouseDef.palyAudio(FortuneMouseDef.audio.COLLECT_WILD2 + 0 + nfx);
            }
            _this4.checkAward();
          }, time);
        };
        _proto.checkAward = function checkAward() {
          if (FortuneMouseProxy.result.RewardMoney > 0) {
            if (!this._auto) this.spine_start.setAnimation(0, "stop", true);
            this.changeState(RunState.AWARD);
          } else {
            this.changeState(RunState.WAIT);
            this.changeBtnActive(true);
          }
        };
        _proto.changeState = function changeState(state) {
          var _this5 = this;
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
                var odd = FortuneMouseProxy.result.RewardMoney / this._bet;
                var aniname = "bigwin_";
                this.txt_bigwin.stepCount = BIG_WIN_TIME1 * 40;
                this.sp_bigWin.setAnimation(0, aniname + "intro", false);
                if (odd >= 30) {
                  aniname = "megawin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME2 * 40;
                  this._runTime = BIG_WIN_TIME2;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                if (odd >= 50) {
                  aniname = "superwin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME3 * 40;
                  this._runTime = BIG_WIN_TIME3;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                this.txt_bigwin.string = Common.numFormat(FortuneMouseProxy.result.RewardMoney);
                this.sp_bigWin.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this5.sp_bigWin.setCompleteListener(null);
                    _this5.sp_bigWin.setAnimation(0, aniname + "idle", true);
                    _this5.scheduleOnce(function () {
                      _this5.node_bigwin.active = false;
                      _this5.txt_bigwin.reset();
                    }, 4);
                  }
                });
                FortuneMouseDef.palyAudio(FortuneMouseDef.audio.BIGWIN, function (id) {
                  var time = BIG_WIN_TIME1;
                  if (odd >= 15) {
                    time = BIG_WIN_TIME2;
                  } else if (odd >= 20) {
                    time = BIG_WIN_TIME3;
                  } else {
                    time = BIG_WIN_TIME1;
                  }
                  _this5.scheduleOnce(function () {
                    AudioManager.instance.stopSound(id);
                  }, time);
                });
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._state = RunState.SHOWGAIN;
                this._runTime = GAIN_TIME;
                var bigWinName = "normal_";
                var _odd = FortuneMouseProxy.result.RewardMoney / this._bet;
                var aniName = "small_win";
                if (_odd >= 10) {
                  bigWinName = "bigwin_";
                  aniName = "medium_win";
                  FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TIGER_WIN3);
                } else if (_odd >= 5) {
                  bigWinName = "bigwin_";
                  aniName = "medium_win";
                  FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TIGER_WIN2);
                } else {
                  FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TIGER_WIN1);
                }
                if (!FortuneMouseProxy.result.Lucky) {
                  this.spine_tiger.setAnimation(0, aniName, false);
                  this.spine_tiger.addAnimation(0, "idle", true);
                }
                this.spine_gain.setAnimation(0, bigWinName + "win", false);
                this.spine_gain.addAnimation(0, bigWinName + "idle", true);
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this5.showAward();
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
            case RunState.SPECIAL:
              {
                //                // this.spine_x10.node.active = true;
                //                // this.spine_x10.setAnimation(0, "idle", false);
                //                // this.spine_x10.node.x = -196;
                //                // this.spine_x10.node.y = 708;
                //                // this.spine_x10.node.scale = 0.6;
                //                // FortuneMouseDef.palyAudio(FortuneMouseDef.audio.PRIZE_FULL);
                //                // cc.tween(this.spine_x10.node)
                //                //     .delay(0.3)
                //                //     .to(0.6, { x: 0, y: -200, scale: 1 })
                //                //     .call(() => {
                //                //         this.spine_x10.node.active = false;
                //                //         this.spine_x10.node.y = 595;
                //                //         this.spine_x10.node.x = 0;
                //                //         this.changeState(RunState.BIG_WIN);
                //                //     })
                //                //     .start();

                break;
              }
            case RunState.FAKE_LUCKY:
              {
                this._state = RunState.FAKE_LUCKY;
                FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG2);
                this.spine_tiger.setAnimation(0, "zoom_idle", true);
                tween(this.node_scale).delay(1).to(1, {
                  scale: v3(0.9, 0.9, 1)
                }, {
                  easing: "quadOut"
                }).call(function () {
                  _this5.changeState(RunState.STOP);
                  _this5.resetScales();
                  _this5.spine_tiger.setAnimation(0, "zoom_exit", false);
                  _this5.spine_tiger.addAnimation(0, "idle", true);
                  _this5._collectStar += 3;
                  FortuneMouseDef.palyAudio(FortuneMouseDef.audio.FAKE_LUCKY);
                }).start();
                this.aniScales();
                break;
              }
            case RunState.LUCKY:
              {
                this._state = RunState.LUCKY;
                FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG2);
                FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_IN);
                this.changeNotice(true);
                this.spine_tiger.setAnimation(0, "zoom_start", true);
                this.spine_tiger.setAnimation(1, "fx_zoom_start", true);

                //                // this.spine_x10.node.active = true;
                //                // this.spine_x10.node.scale = 0.6;
                //                // let names = ["yb", "ry", "fu", "hb", "bp", "jz"];
                //                // this.spine_x10.setAnimation(0, "intro_" + names[FortuneMouseProxy.result.LuckyMsg.LuckySymbol - 2], false);
                //                // this.spine_x10.setCompleteListener(() => {
                //                //     this.spine_x10.setCompleteListener(null);
                //                //     this.spine_x10.setAnimation(0, "idle", true);
                //                // });

                tween(this.node_scale).delay(1.5).to(0.8, {
                  scale: v3(0.9, 0.9, 1)
                }, {
                  easing: "quadOut"
                }).call(function () {
                  _this5.spine_tiger.setAnimation(0, "exit", false);
                  _this5.spine_tiger.clearTrack(1);
                  FortuneMouseDef.palyAudio(FortuneMouseDef.audio.BOTTOM_EXIT);
                  _this5.spine_tiger.setCompleteListener(function () {
                    _this5.spine_tiger.setCompleteListener(null);
                    _this5.spine_tiger.node.setPosition(_this5.spine_tiger.node.position.x, 510);
                    _this5.spine_tiger.setAnimation(0, "top_enter", false);
                    _this5.spine_tiger.addAnimation(0, "top_idle", true);
                    _this5.aniLines[1].showResult([0, 0, 0]);
                    _this5.node_luckyTxt.active = true;
                    _this5.node_luckyTxt.scale = v3(0, 0, 1);
                    tween(_this5.node_luckyTxt).to(0.3, {
                      scale: v3(1.1, 1.1, 1)
                    }).to(0.2, {
                      scale: v3(0.9, 0.9, 1)
                    }).start();
                    var index = [7, 4, 1];
                    var _loop2 = function _loop2(i) {
                      _this5.scheduleOnce(function () {
                        _this5.showSpine(index[i], 0, true);
                        FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_WILD_HIT + (i + 1));
                      }, i * 0.4);
                    };
                    for (var i = 0; i < 3; i++) {
                      _loop2(i);
                    }
                    FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_WILD);
                    _this5.spine_startLight.setAnimation(0, "free_intro", false);
                    _this5.spine_startLight.addAnimation(0, "spin2", true);
                    _this5.sprite_bg.spriteFrame = _this5.frame_bgs[1];
                  });
                  _this5.scheduleOnce(function () {
                    _this5.spine_tiger.setAnimation(0, "top_excite_start", false);
                    FortuneMouseDef.playLookByIndex(1);
                    _this5.stopByLuckyLeft(0);
                  }, 1.5);
                }).start();
                this.aniScales();
                break;
              }
            case RunState.WAIT:
              {
                this._state = RunState.WAIT;
                this._runTime = WAIT_TIME;
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          this.txt_win.string = Common.numFormat(FortuneMouseProxy.result.RewardMoney + "");
          if (FortuneMouseProxy.result.RewardMoney > 0) {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.AWARD1);
          }
          this.updateGold();
          if (FortuneMouseProxy.result.RewardMoney) {
            this.showLines();
            this.showWin(true);
          }
        };
        _proto.aniScales = function aniScales() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_scaleUps), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            Tween.stopAllByTarget(i);
            tween(i).delay(1).to(2, {
              scale: v3(1, 1, 1)
            }, {
              easing: "quadOut"
            }).call(function () {}).start();
          }

          //        // for (let i of this.node_scaleBigs) {
          //        //     i.stopAllActions();
          //        //     cc.tween(i)
          //        //         .delay(2)
          //        //         .to(6, { scale: 1.3 }, { easing: "quadOut" })
          //        //         .call(() => {})
          //        //         .start();
          //        // }
          Tween.stopAllByTarget(this.node_moveLeft1);
          tween(this.node_moveLeft1).delay(1).to(1, {
            position: v3(-400, this.node_moveLeft1.position.y)
          }).start();
          Tween.stopAllByTarget(this.node_moveRight1);
          tween(this.node_moveRight1).delay(1).to(1, {
            position: v3(400, this.node_moveRight1.position.y)
          }).start();
          Tween.stopAllByTarget(this.node_moveLeft2);
          tween(this.node_moveLeft2).delay(1).to(2, {
            position: v3(-1000, this.node_moveLeft2.position.y)
          }).start();
          Tween.stopAllByTarget(this.node_moveRight2);
          tween(this.node_moveRight2).delay(1).to(2, {
            position: v3(1000, this.node_moveRight2.position.y)
          }).start();
        };
        _proto.resetScales = function resetScales() {
          var _this6 = this;
          var time = 0;
          if (FortuneMouseProxy.result && FortuneMouseProxy.result.Lucky) {
            this._runTime = 3;
            time = 1;
            this.spine_tiger.setAnimation(0, "top_exit", false);
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TOP_EXIT);
            this.spine_tiger.setCompleteListener(function () {
              _this6.spine_tiger.setCompleteListener(null);
              _this6.spine_tiger.node.setPosition(_this6.spine_tiger.node.position.x, -375);
              _this6.spine_tiger.setAnimation(0, "enter", false);
              _this6.spine_tiger.addAnimation(0, "idle", true);
            });
            this.sprite_bg.spriteFrame = this.frame_bgs[0];
          }
          this.node_luckyTxt.active = false;
          this.scheduleOnce(function () {
            tween(_this6.node_scale).delay(0.5).to(1.2, {
              scale: v3(1, 1, 1)
            }, {
              easing: "quadOut"
            }).call(function () {
              //                    // this.node_10light.active = false;
              //                    // this.spine_tiger.setAnimation(0, "idle", true);
            }).start();
            for (var _iterator4 = _createForOfIteratorHelperLoose(_this6.node_scaleUps), _step4; !(_step4 = _iterator4()).done;) {
              var i = _step4.value;
              Tween.stopAllByTarget(i);
              tween(i).to(2, {
                position: v3(i.position.x, 0),
                scale: v3(1.5, 1.5, 1)
              }, {
                easing: "quadOut"
              }).call(function () {}).start();
            }

            //            // for (let i of this.node_scaleBigs) {
            //            //     i.stopAllActions();

            //            //     cc.tween(i)
            //            //         .to(2, { scale: 1 }, { easing: "quadOut" })
            //            //         .call(() => {})
            //            //         .start();
            //            // }

            Tween.stopAllByTarget(_this6.node_moveLeft1);
            tween(_this6.node_moveLeft1).delay(1).to(1, {
              position: v3(-360, _this6.node_moveLeft1.position.y)
            }).start();
            Tween.stopAllByTarget(_this6.node_moveRight1);
            tween(_this6.node_moveRight1).delay(1).to(1, {
              position: v3(360, _this6.node_moveRight1.position.y)
            }).start();
            Tween.stopAllByTarget(_this6.node_moveLeft2);
            tween(_this6.node_moveLeft2).delay(1).to(2, {
              position: v3(-375, _this6.node_moveLeft2.position.y)
            }).start();
            Tween.stopAllByTarget(_this6.node_moveRight2);
            tween(_this6.node_moveRight2).delay(1).to(2, {
              position: v3(375, _this6.node_moveRight2.position.y)
            }).start();
          }, time);
        };
        _proto.showWin = function showWin(fromNormal) {
          var _this7 = this;
          if (fromNormal === void 0) {
            fromNormal = false;
          }
          //        // this.spine_winBg.node.active = true;
          //        // this.spine_winBg.setAnimation(0, "intro", false);
          //        // this.spine_winBg.addAnimation(0, "picture", true);
          //        // this.txt_spineWin.string = "" + FortuneMouseProxy.result.prizeAmount / FortuneMouseProxy.result.openResult.multiples[1];
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
          this.txt_gain.string = Common.numFormat(FortuneMouseProxy.result.RewardMoney + "");
          if (FortuneMouseProxy.result.RewardMoney / this._bet >= 20) {
            this.scheduleOnce(function () {
              if (fromNormal) {
                var lines = FortuneMouseProxy.result.RewardLine;
                var findCount = 0;
                for (var _iterator5 = _createForOfIteratorHelperLoose(lines), _step5; !(_step5 = _iterator5()).done;) {
                  var i = _step5.value;
                  if (i.Line == 0 || i.Line == 1 || i.Line == 2) {
                    findCount++;
                  }
                }
                if (findCount == 3) {
                  _this7.changeState(RunState.SPECIAL);
                  return;
                }
              }
              _this7.changeState(RunState.BIG_WIN);
            }, 0.3);
          } else {
            this.changeState(RunState.SHOWGAIN);
          }

          //        // this.resetScales();
        };

        _proto.showLines = function showLines() {
          var _FortuneMouseProxy$re;
          var prizeIdx = (_FortuneMouseProxy$re = FortuneMouseProxy.result) == null ? void 0 : _FortuneMouseProxy$re.RewardLine;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = FortuneMouseProxy.result.NormalSymbols;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.node_nums), _step6; !(_step6 = _iterator6()).done;) {
            var _i = _step6.value;
            _i.getComponent(Sprite).spriteFrame = this.frame_lines[2];
            _i.getChildByName("num").getComponent(Label).font = this.font_lines[0];
          }
          for (var i = 0; i < prizeIdx.length; i++) {
            var info = prizeIdx[i];
            var lines = FortuneMouseDef.lines[info.Line];
            this.node_lights[info.Line].active = true;
            this.node_nums[info.Line].getComponent(Sprite).spriteFrame = this.frame_lines[0];
            this.node_nums[info.Line + 5].getComponent(Sprite).spriteFrame = this.frame_lines[0];
            this.node_nums[info.Line].getChildByName("num").getComponent(Label).font = this.font_lines[1];
            this.node_nums[info.Line + 5].getChildByName("num").getComponent(Label).font = this.font_lines[1];
            for (var j = 0; j < lines.length; j++) {
              var key = lines[j];
              var result = OpenNums[key] - 1;
              this.showSpine(key, result);
            }
          }
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          FortuneMouseDef.palyAudio(FortuneMouseDef.audio.SINGLE_LINE);
          this.hideLines();
          this.hideSpine();
          this.node_spineMask.active = true;
          var nums = FortuneMouseProxy.result.NormalSymbols;
          var prizeIdx = FortuneMouseProxy.result.RewardLine;
          if (prizeIdx) {
            var len = prizeIdx.length;
            var i = this._showLineIndex;
            for (var _iterator7 = _createForOfIteratorHelperLoose(this.node_nums), _step7; !(_step7 = _iterator7()).done;) {
              var _i2 = _step7.value;
              _i2.getComponent(Sprite).spriteFrame = this.frame_lines[2];
              _i2.getChildByName("num").getComponent(Label).font = this.font_lines[0];
            }
            if (this._showLineIndex < len) {
              var lines = FortuneMouseDef.lines[prizeIdx[i].Line];
              for (var j = 0; j < lines.length; j++) {
                var key = lines[j];
                var result = nums[key] - 1;
                this.node_lights[prizeIdx[i].Line].active = true;
                this.node_nums[prizeIdx[i].Line].getComponent(Sprite).spriteFrame = this.frame_lines[0];
                this.node_nums[prizeIdx[i].Line + 5].getComponent(Sprite).spriteFrame = this.frame_lines[0];
                this.node_nums[prizeIdx[i].Line].getChildByName("num").getComponent(Label).font = this.font_lines[1];
                this.node_nums[prizeIdx[i].Line + 5].getChildByName("num").getComponent(Label).font = this.font_lines[1];
                this.showSpine(key, result);
              }
              this.txt_lineWin.node.active = true;
              var y = 750;
              if (prizeIdx[i].Line == 1) {
                y = 960;
              } else if (prizeIdx[i].Line == 2) {
                y = 540;
              }
              this.txt_lineWin.node.setPosition(this.txt_lineWin.node.position.x, y);
              this.txt_lineWin.string = Common.numFormat(prizeIdx[i].Amount);
            } else {
              this._showLineIndex = -1;
              this.showLines();
            }
          }
        };
        _proto.hideLines = function hideLines() {
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.node_lights), _step8; !(_step8 = _iterator8()).done;) {
            var node = _step8.value;
            node.active = false;
          }

          //        // for (let node of this.node_nums) {
          //        //     node.active = false;
          //        // }
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.node_nums), _step9; !(_step9 = _iterator9()).done;) {
            var i = _step9.value;
            i.getComponent(Sprite).spriteFrame = this.frame_lines[1];
            i.getChildByName("num").getComponent(Label).font = this.font_lines[1];
          }
          this.txt_lineWin.node.active = false;
        };
        _proto.onClickMenu = function onClickMenu() {
          this.node_menu.active = !this.node_menu.active;
          this.node_btns.active = !this.node_menu.active;
        };
        _proto.onClickBigWin = function onClickBigWin() {
          //        // this.sp_bigWin.setCompleteListener(null);
          //        // this.node_bigwin.active = false;
          //        // this.changeState(RunState.NORMAL);
          //        // this.changeBtnActive(true);
          this.bigWinBgClickIndex++;
          if (this.bigWinBgClickIndex == 1) {
            this.txt_bigwin.reset(FortuneMouseProxy.result.RewardMoney);
          } else {
            this.sp_bigWin.setCompleteListener(null);
            this.node_bigwin.active = false;
            this.txt_bigwin.reset();
            this.changeState(RunState.SHOWGAIN);
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _this8 = this;
          //        // console.log("onClickStop");
          if (!FortuneMouseProxy.result) {
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
          var nums = FortuneMouseProxy.result.NormalSymbols;
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 3] - 1;
            var rand3 = nums[i + 6] - 1;
            var arr = [rand1, rand2, rand3];
            _this8.scheduleOnce(function () {
              _this8.aniLines[i].showResult(arr);
            }, _this8._runDelay * i);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          if (this._runDelay == 0) {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.QUICK_END);
          } else {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.END);
          }
          var end = function end() {
            _this8._lock = false;
            _this8.showResult();
          };
          this.scheduleOnce(function () {
            end();
          }, 0.2 + this._runDelay * 3);
        };
        _proto.stopByLuckyLeft = function stopByLuckyLeft(index) {
          var _this9 = this;
          this.node_spineMask.active = false;
          var nums = FortuneMouseProxy.result.LuckySymbolsArr[index];
          var rand1 = nums[0] - 1;
          var rand2 = nums[0 + 3] - 1;
          var rand3 = nums[0 + 6] - 1;
          var arr = [rand1, rand2, rand3];
          this.aniLines[0].showResult(arr);
          if (this._runDelay == 0) {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.QUICK_END);
          } else {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.END);
          }
          this.scheduleOnce(function () {
            _this9.spine_tiger.setAnimation(0, "top_excite_turnR", false);
            _this9.spine_tiger.addAnimation(0, "top_excite_lookR", false);
            FortuneMouseDef.playLookByIndex((index + 1) * 2);
            _this9.scheduleOnce(function () {
              _this9.stopByLuckyRight(index);
            }, 1.5);
          }, 0.5);
          FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_STOP1);
        };
        _proto.stopByLuckyRight = function stopByLuckyRight(index) {
          var _this10 = this;
          FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_STOP2);
          this.node_spineMask.active = false;
          var nums = FortuneMouseProxy.result.LuckySymbolsArr[index];
          var rand1 = nums[2] - 1;
          var rand2 = nums[2 + 3] - 1;
          var rand3 = nums[2 + 6] - 1;
          var arr = [rand1, rand2, rand3];
          this.aniLines[2].showResult(arr);
          if (this._runDelay == 0) {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.QUICK_END);
          } else {
            FortuneMouseDef.palyAudio(FortuneMouseDef.audio.END);
          }
          this.scheduleOnce(function () {
            _this10.showLuckyEnd(index);
          }, 0.5);
        };
        _proto.showLuckyEnd = function showLuckyEnd(index) {
          var _this11 = this;
          var nums = FortuneMouseProxy.result.LuckySymbolsArr[index];
          //        // let prizeIdx = FortuneMouseProxy.result.LuckyMsg.RewardLines[index];
          //        // if (prizeIdx) {
          //        //     // this.hideSpine();
          //        //     for (let i = 0; i < prizeIdx.length; i++) {
          //        //         let lines = FortuneMouseDef.lines[prizeIdx[i].Line];
          //        //         for (let j = 0; j < lines.length; j++) {
          //        //             let key = lines[j];
          //        //             let result = nums[key] - 1;
          //        //             this.node_lights[prizeIdx[i].Line].active = true;
          //        //             this.node_nums[prizeIdx[i].Line].active = true;
          //        //             this.node_nums[prizeIdx[i].Line + 5].active = true;
          //        //         }
          //        //     }
          //        // }
          //        // for (let i = 0; i < nums.length; i++) {
          //        //     if (nums[i] - 1 != 7) this.showSpine(i, nums[i] - 1, true);
          //        // }

          this.scheduleOnce(function () {
            if (FortuneMouseProxy.result.LuckySymbolsArr[index + 1]) {
              _this11.spine_tiger.setAnimation(0, "top_excite_turnL", false);
              _this11.spine_tiger.addAnimation(0, "top_excite_lookL", false);
              FortuneMouseDef.playLookByIndex((index + 1) * 2 + 1);
              for (var i = 0; i < 2; i++) {
                _this11.aniLines[i * 2].run(0);
              }
              _this11.scheduleOnce(function () {
                _this11.stopByLuckyLeft(index + 1);
              }, 1.5);
              _this11.spine_startLight.setAnimation(0, "free_spin", false);
            } else {
              _this11.spine_tiger.setAnimation(0, "top_idle", true);
              FortuneMouseDef.palyAudio(FortuneMouseDef.audio.TIGER_BIG_WIN);
              var _nums = FortuneMouseProxy.result.NormalSymbols;
              for (var _i3 = 0; _i3 < _this11.aniLines.length; _i3++) {
                var rand1 = _nums[_i3] - 1;
                var rand2 = _nums[_i3 + 3] - 1;
                var rand3 = _nums[_i3 + 6] - 1;
                var arr = [rand1, rand2, rand3];
                _this11.aniLines[_i3].showResult(arr, true);
              }

              //                // let prizeIdx = FortuneMouseProxy.result?.RewardLine;
              //                // if (!prizeIdx || prizeIdx.length == 0) return false;
              //                // let OpenNums = FortuneMouseProxy.result.NormalSymbols;
              //                // this.hideSpine();
              //                // this.node_spineMask.active = true;

              //                // for (let i = 0; i < prizeIdx.length; i++) {
              //                //     let info = prizeIdx[i];
              //                //     let lines = FortuneMouseDef.lines[info.Line];
              //                //     for (let j = 0; j < lines.length; j++) {
              //                //         let key = lines[j];
              //                //         let result = OpenNums[key] - 1;
              //                //         this.showSpine(key, result);
              //                //     }
              //                // }
              //                // for (let i = 0; i < nums.length; i++) {
              //                //     if (nums[i] - 1 != 7) this.showSpine(i, nums[i] - 1);
              //                // }
              _this11._collectStar = 0;
              if (FortuneMouseProxy.result.RewardLine.length == 5) {
                //                    // this.spine_x10.setAnimation(0, "end", false);
                //                    // FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_WIN2);
                //                    // cc.tween(this.spine_x10.node)
                //                    //     .delay(0.5)
                //                    //     .to(0.3, { x: 0, y: -200, scale: 1 })
                //                    //     .call(() => {
                //                    //         this.scheduleOnce(() => {
                //                    //             this.spine_x10.node.active = false;
                //                    //             this.spine_x10.node.y = 595;
                //                    //             this._state = RunState.AWARD;
                //                    //             this._runTime = AWARD_TIME;
                //                    //             this.showWin();
                //                    //             FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);
                //                    //         }, 1.5);
                //                    //     })
                //                    //     .start();
                FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_WIN2);
                FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);

                //                    // this._state = RunState.AWARD;
                //                    // this._runTime = AWARD_TIME;
                //                    // this.showWin();
              } else {
                //                    // this.spine_x10.node.active = false;

                FortuneMouseDef.palyAudio(FortuneMouseDef.audio.LUCKY_WIN1);
                FortuneMouseDef.palyMusic(FortuneMouseDef.audio.BG);

                //                    // this._state = RunState.AWARD;
                //                    // this._runTime = AWARD_TIME;
                //                    // this.showWin();
              }

              _this11.changeState(RunState.AWARD);
            }
          }, 1);
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          //        // this.node_start.active = b;
          //        // this.node_stop.active = !b;

          if (this._auto) {
            return;
          }
          if (b) {
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
            this.updateBetBtn();
          } else {
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
            this.btn_add.interactable = false;
            this.btn_reduce.interactable = false;
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
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 - 375) {
            this.changeNotice();
          }
        };
        _proto.changeNotice = function changeNotice(lucky) {
          if (lucky === void 0) {
            lucky = false;
          }
          if (lucky) {
            this.notice_title.getComponent(Sprite).spriteFrame = this.frame_lucky;
            this.notice_title.setPosition(v3(0, this.notice_title.position.y));
            this.noticeDelay = 10;
            return;
          }
          this.noticeDelay = 2;
          this.noticeIndex++;
          if (this.noticeIndex >= this.noticeFrames.length) {
            this.noticeIndex = 0;
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.noticeFrames[this.noticeIndex];
          var x = this.notice_title.getComponent(UITransform).width / 2 > 240 ? this.notice_title.getComponent(UITransform).width / 2 - 240 : 0;
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
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (FortuneMouseProxy.result) {
                    this.changeState(RunState.STOP);
                  } else {
                    this._runTime = RUN_TIME;
                    this._errCount++;
                    if (this._errCount > 3) {
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
                  if (this._auto) {
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
                  this.changeState(RunState.SHOWGAIN);
                }
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.resetScales();
                  this._state = RunState.AWARD;
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._auto) {
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
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          EventManager.off(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.off(ConfigManager.eventTransform.setAuto, this.setAuto, this);
        };
        return FortuneMouseView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "aniLines", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spine_start", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spine_startLight", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine_tiger", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "notice_special", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "noticeFrames", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_gain", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "spine_gain", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_gain", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_particle", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_particleLight", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "prefab_winItem", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_scale", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "node_10light", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_scaleUps", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_scaleBigs", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_moveLeft1", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "node_moveRight1", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "node_moveLeft2", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "node_moveRight2", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftCount", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_lights", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_nums", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "prefab_window", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "txt_lineWin", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "btn_auto", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "frame_lucky", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "btn_add", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "btn_reduce", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "frame_lines", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "font_lines", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "node_luckyTxt", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec51], {
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

System.register("chunks:///_virtual/FortuneMouseWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneMouseDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Component, FortuneMouseDef;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      FortuneMouseDef = module.FortuneMouseDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0faefeV3x5NYb9mE8r6j6Ii", "FortuneMouseWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneMouseWindow = exports('default', (_dec = ccclass("FortuneMouseWindow"), _dec2 = menu("game/FortuneMouse/FortuneMouseWindow"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.Skeleton), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseWindow, _Component);
        function FortuneMouseWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd2", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FortuneMouseWindow.prototype;
        _proto.showIndex = function showIndex(index) {
          this.item.skeletonData = this.spines[index];
          if (index == 0) {
            this.item.setAnimation(0, "idle", true);
          } else {
            this.item.setAnimation(0, "win_idle", true);
          }
          var odd = FortuneMouseDef.odds[index];

          //        // this.txt_odd1.string = "" + odd;
          this.txt_odd2.string = "" + odd;
        };
        return FortuneMouseWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd2", [_dec6], {
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

System.register("chunks:///_virtual/FortuneMouseWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneMouseProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, UITransform, v3, Component, FortuneMouseProxy, FortuneMouseGameEvent;
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
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      FortuneMouseProxy = module.default;
      FortuneMouseGameEvent = module.FortuneMouseGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "52dccT2VIVLKKsS67MAPf5V", "FortuneMouseWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneMouseWinItem = exports('default', (_dec = ccclass("FortuneMouseWinItem"), _dec2 = menu("game/FortuneMouse/FortuneMouseWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneMouseWinItem, _Component);
        function FortuneMouseWinItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_normal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor3, _assertThisInitialized(_this));
          _this._index = void 0;
          return _this;
        }
        var _proto = FortuneMouseWinItem.prototype;
        _proto.showResult = function showResult(result, big) {
          if (big === void 0) {
            big = false;
          }
          this._index = result;
          this.spine_normal.skeletonData = this.spines[result];
          this.spine_bg.setAnimation(0, "win", false);
          this.spine_bg.addAnimation(0, "idle", true);
          if (big) {
            if (this._index == 0) {
              this.spine_normal.setAnimation(0, "idle", true);
            } else {
              this.spine_normal.setAnimation(0, "win_idle", true);
            }
            this.spine_bg.node.active = false;
          } else {
            this.spine_normal.setAnimation(0, "win", false);
            this.spine_normal.addAnimation(0, "win_idle", true);
            this.spine_bg.node.active = true;
          }
        };
        _proto.showSpawn = function showSpawn() {
          this.spine_normal.setAnimation(0, "spawn", false);
          this.spine_normal.addAnimation(0, "idle", true);
        };
        _proto.onClick = function onClick() {
          FortuneMouseProxy.emit(FortuneMouseGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneMouseWinItem;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/FortuneMouseGame', 'chunks:///_virtual/FortuneMouseGame'); 
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