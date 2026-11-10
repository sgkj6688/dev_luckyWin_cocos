System.register("chunks:///_virtual/FortuneTigerCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneTigerRunItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, v3, UITransform, tween, Component, FortuneTigerRunItem;
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
      FortuneTigerRunItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "9d0376fk21Af5P3WuoMFYDl", "FortuneTigerCardAni", undefined);
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
      var FortuneTigerCardAni = exports('default', (_dec = ccclass("FortuneTigerCardAni"), _dec2 = menu("game/FortuneTiger/FortuneTigerCardAni"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerCardAni, _Component);
        function FortuneTigerCardAni() {
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
        var _proto = FortuneTigerCardAni.prototype;
        _proto.onLoad = function onLoad() {
          var startY = 430;
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_card);
            this.node.addChild(node);
            node.setPosition(v3(0, startY - i * 215));
            var com = node.getComponent(FortuneTigerRunItem);
            this.runningCard.push(com);
          }
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startY = 430;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 215));
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
              this.runningCard[i].node.scale = v3(0.7, 0.7, 1);
              //                // cc.tween(this.runningCard[i].node)
              //                //     .delay(0.1 * i)
              //                //     .to(0.3, { scale: 0.7 })
              //                //     .start();
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              this.randCard(_i);
              _i.node.scale = v3(0.7, 0.7, 1);
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
        return FortuneTigerCardAni;
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

System.register("chunks:///_virtual/FortuneTigerDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './FortuneTigerProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, FortuneTigerProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      FortuneTigerProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "af8fbHDz6pMJLdI56yzoZcr", "FortuneTigerDef", undefined);
      var FortuneTigerDef = exports('FortuneTigerDef', /*#__PURE__*/function () {
        function FortuneTigerDef() {}
        FortuneTigerDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = FortuneTigerProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            if (call) {
              var soundId = AudioManager.instance.playSound(audio);
              call(soundId);
            } else {
              AudioManager.instance.playOneShot(audio);
            }
          });
        };
        FortuneTigerDef.palyMusic = function palyMusic(name) {
          var bundle = FortuneTigerProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        FortuneTigerDef.init = function init() {};
        FortuneTigerDef.getRand = function getRand(i) {
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
        FortuneTigerDef.randRusult = function randRusult(amount, add) {
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
        FortuneTigerDef.getMultple = function getMultple() {
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
        FortuneTigerDef.checkPrize = function checkPrize(openNums) {
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
        return FortuneTigerDef;
      }());
      FortuneTigerDef.audio = {
        AWARD1: "prizeSmalwin",
        AWARD2: "prizeWinFullscreen",
        BG: "bgm_mg",
        BG2: "bgm_mg_b",
        END: "spinStop",
        QUICK_END: "spinStopQuick",
        TURN: "spinBtn",
        WILD: "symWildSpawn",
        BIGWIN: "bgm_bigwin_main",
        TIGER_BIG_WIN: "voxRsWin",
        SINGLE_LINE: "prizePayoutIdle",
        COLLECT_WILD: "symWildHighlight",
        COLLECT_WILD2: "symWildReach",
        SHOW_WINDOW: "uiInfo",
        TIGER_WIN1: "voxSmallwin1a",
        TIGER_WIN2: "voxSmallwin1b",
        TIGER_WIN3: "voxSmallwin1c",
        LUCKY_WIN1: "voxSmallwin2a",
        LUCKY_WIN2: "voxSmallwin2b",
        FAKE_LUCKY: "voxZoExit",
        PRIZE_FULL: "prizeWinFullscreen"
      };
      FortuneTigerDef.tryGold = 100000000;
      FortuneTigerDef.odds = [250, 100, 25, 10, 8, 5, 3];
      FortuneTigerDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      FortuneTigerDef.lines = [[3, 4, 5], [0, 1, 2], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      FortuneTigerDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneTigerGame", ['./FortuneTigerCardAni.ts', './FortuneTigerDef.ts', './FortuneTigerHistory.ts', './FortuneTigerHistoryItem.ts', './FortuneTigerProxy.ts', './FortuneTigerRank.ts', './FortuneTigerRankItem.ts', './FortuneTigerRunItem.ts', './FortuneTigerScene.ts', './FortuneTigerScrollView.ts', './FortuneTigerSetAuto.ts', './FortuneTigerSetBase.ts', './FortuneTigerView.ts', './FortuneTigerWinItem.ts', './FortuneTigerWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FortuneTigerHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, NetManager, Common, MainManager;
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
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a419fOsJmVOZZbuNKS/LtCW", "FortuneTigerHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      // // @inspector("packages://autoproperty/inspector.js")
      var Hjc_history = exports('default', (_dec = ccclass("FortuneTigerHistory"), _dec2 = menu("game/FortuneTiger/FortuneTigerHistory"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_history, _Component);
        function Hjc_history() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_last", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor4, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          _this._pageSize = 13;
          _this._gameType = void 0;
          return _this;
        }
        var _proto = Hjc_history.prototype;
        _proto.onLoad = function onLoad() {
          Common.showWait();
          this.setGameType("slotFortuneTiger");
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          var start = this._curPage * this._pageSize;
          this.send(start);
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          this.send(start);
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 13;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          this.send();
        };
        _proto.send = function send(offset) {
          if (offset === void 0) {
            offset = 0;
          }
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
            Offset: offset,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              data = data.Data;
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
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        return Hjc_history;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
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

System.register("chunks:///_virtual/FortuneTigerHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './GUtil.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, GUtil, Common;
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
      GUtil = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "2ada8k9eN9OlITT92t/i/Wj", "FortuneTigerHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FortuneTigerHistoryItem = exports('default', (_dec = ccclass("FortuneTigerHistoryItem"), _dec2 = menu("game/FortuneTiger/FortuneTigerHistoryItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerHistoryItem, _Component);
        function FortuneTigerHistoryItem() {
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
        var _proto = FortuneTigerHistoryItem.prototype;
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
          this.Label_bet.string = GUtil.numberFormat(tempData.BetAmount / 1000, 2) + "K";
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + GUtil.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + GUtil.numberFormat(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(FortuneTigerHistoryItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FortuneTigerHistoryItem;
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

System.register("chunks:///_virtual/FortuneTigerProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b5fecSF72BG16H53lZk4Dbx", "FortuneTigerProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FortuneTigerGameEvent = exports('FortuneTigerGameEvent', /*#__PURE__*/function (FortuneTigerGameEvent) {
        FortuneTigerGameEvent["ENTER_ROOM"] = "enterRoom";
        FortuneTigerGameEvent["LEAVE_ROOM"] = "leaveRoom";
        FortuneTigerGameEvent["UPDATE_CONFIG"] = "updateConfig";
        FortuneTigerGameEvent["UPDATE_BETLIST"] = "updateBetList";
        FortuneTigerGameEvent["CLOSE_BONUS"] = "closeBonus";
        FortuneTigerGameEvent["SELECT_BET"] = "selectBet";
        FortuneTigerGameEvent["START"] = "start";
        FortuneTigerGameEvent["CLICK_ITEM"] = "clickItem";
        FortuneTigerGameEvent["ERROR"] = "errorReturn";
        return FortuneTigerGameEvent;
      }({}));
      var FortuneTigerProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(FortuneTigerProxyMgr, _ProxyBase);
        function FortuneTigerProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "FortuneTigerGame";
          _this.wsEvents = [ConfigManager.ProtocolFortuneTiger.bet, ConfigManager.ProtocolFortuneTiger.info];
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
        var _proto = FortuneTigerProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(FortuneTigerGameEvent.SELECT_BET);
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
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolFortuneTiger.bet) {
              this.emit(FortuneTigerGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolFortuneTiger.info:
              {
                this.betList = data.Data.betList;
                this.emit(FortuneTigerGameEvent.UPDATE_BETLIST);
                break;
              }
            case ConfigManager.ProtocolFortuneTiger.bet:
              {
                this.result = data.Data;
                // this.result.Lucky = true;
                // this.result.LuckyMsg = {
                //     LuckySymbol: 6,
                //     SymbolsArr: [
                //         [8, 8, 6, 8, 6, 1, 8, 1, 1],
                //         [1, 8, 8, 1, 8, 8, 6, 8, 8],
                //         [8, 8, 8, 8, 8, 8, 8, 8, 8],
                //     ],
                //     RewardLines: [
                //         null,
                //         [
                //             { Amount: 1000, Line: 0, Sym: 6 },
                //             { Amount: 1000, Line: 2, Sym: 6 },
                //             { Amount: 1000, Line: 3, Sym: 6 },
                //             { Amount: 1000, Line: 4, Sym: 6 },
                //         ],
                //         [
                //             { Amount: 1000, Line: 0, Sym: 6 },
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
                // this.result.NormalSymbols = [1, 8, 6, 1, 6, 1, 6, 1, 1];
                this.emit(FortuneTigerGameEvent.START);
              }
          }
        };
        _createClass(FortuneTigerProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return FortuneTigerProxyMgr;
      }(ProxyBase);
      var FortuneTigerProxy = exports('default', new FortuneTigerProxyMgr("FortuneTigerProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FortuneTigerRank.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, NetManager, Common, MainManager;
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
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e3febo4Y6JDhY5LrzF1kwnF", "FortuneTigerRank", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneTigerRank = exports('default', (_dec = ccclass("FortuneTigerRank"), _dec2 = menu("game/FortuneTiger/FortuneTigerRank"), _dec3 = property(gts.List), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerRank, _Component);
        function FortuneTigerRank() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPage", _descriptor2, _assertThisInitialized(_this));
          _this._curPage = 0;
          _this._totalPage = 0;
          _this._lastPage = 1;
          return _this;
        }
        var _proto = FortuneTigerRank.prototype;
        _proto.onLoad = function onLoad() {
          Common.showWait();
          this.send("slotFortuneTiger");
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.protocolHall.getRankData, this.recvData, this);
        };
        _proto.send = function send(type) {
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRankData, {
            gameType: type
          });
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.protocolHall.getRankData) {
            Common.closeWait();
            data = data.Data;
            //            //排行榜记录
            if (data.RankList) this.scrollView_content.setData(data.RankList);
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.protocolHall.getRankData, this.recvData, this);
        };
        return FortuneTigerRank;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
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

System.register("chunks:///_virtual/FortuneTigerRankItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './GUtil.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, SpriteFrame, UIOpacity, Component, AutoChangeParent, GUtil;
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
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "a1ab6VoVQ5BOKLXbwZcaLl6", "FortuneTigerRankItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var Hjc_rankItem = exports('default', (_dec = ccclass("FortuneTigerRankItem"), _dec2 = menu("game/FortuneTiger/FortuneTigerRankItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Sprite), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Hjc_rankItem, _Component);
        function Hjc_rankItem() {
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
        var _proto = Hjc_rankItem.prototype;
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
          this.Label_win.string = GUtil.numberFormat(tmpdata.Score / 1000, 2) + "K";
        };
        _createClass(Hjc_rankItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return Hjc_rankItem;
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

System.register("chunks:///_virtual/FortuneTigerRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneTigerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, UITransform, v3, Component, FortuneTigerProxy, FortuneTigerGameEvent;
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
      FortuneTigerProxy = module.default;
      FortuneTigerGameEvent = module.FortuneTigerGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "7c694CrDR9HermSyx9rWzlN", "FortuneTigerRunItem", undefined);
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
      var FortuneTigerRunItem = exports('default', (_dec = ccclass("FortuneTigerRunItem"), _dec2 = menu("game/FortuneTiger/FortuneTigerRunItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerRunItem, _Component);
        function FortuneTigerRunItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_wild", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_normal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_blur", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal", _descriptor4, _assertThisInitialized(_this));
          _this._state = CardState.RESULT;
          _this._index = void 0;
          return _this;
        }
        var _proto = FortuneTigerRunItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node_wild.active = false;
          this.node_normal.active = true;
        };
        _proto.setCard = function setCard(index) {
          this._index = index;
          if (index == 0) {
            this.node_wild.active = true;
            this.node_normal.active = false;
          } else {
            this.node_wild.active = false;
            this.node_normal.active = true;
            if (this._state == CardState.RUN) {
              this.node_normal.getComponent(Sprite).spriteFrame = this.frame_blur[index];
            } else if (this._state == CardState.RESULT) {
              this.node_normal.getComponent(Sprite).spriteFrame = this.frame_normal[index];
            }
          }
        };
        _proto.randCard = function randCard() {
          if (FortuneTigerProxy.result && FortuneTigerProxy.result.Lucky) {
            var nums = [FortuneTigerProxy.result.LuckyMsg.LuckySymbol, 0];
            var rand = Math.floor(Math.random() * nums.length);
            this.setCard(nums[rand]);
          } else {
            var _rand = Math.floor(Math.random() * 7);
            this.setCard(_rand);
          }
          //        // let rand = Math.floor(Math.random() * 7);
          //        // this.setCard(rand);
        };

        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.onClick = function onClick() {
          FortuneTigerProxy.emit(FortuneTigerGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneTigerRunItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_normal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frame_blur", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal", [_dec6], {
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

System.register("chunks:///_virtual/FortuneTigerScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './FortuneTigerDef.ts', './FortuneTigerProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, FortuneTigerDef, FortuneTigerProxy, MainManager;
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
      FortuneTigerDef = module.FortuneTigerDef;
    }, function (module) {
      FortuneTigerProxy = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "654343KMwhIHqtUnLTgA/9U", "FortuneTigerScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FortuneTigerScene = exports('default', (_dec = ccclass("FortuneTigerScene"), _dec2 = menu("game/FortuneTiger/FortuneTigerScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerScene, _Component);
        function FortuneTigerScene() {
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
        var _proto = FortuneTigerScene.prototype;
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
          FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG);
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
          FortuneTigerProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          FortuneTigerProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return FortuneTigerScene;
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

System.register("chunks:///_virtual/FortuneTigerScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './FortuneTigerProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, ScrollView, instantiate, Label, Component, UITransform, v3, UIOpacity, GUtil, FortuneTigerProxy, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Node = module.Node;
      ScrollView = module.ScrollView;
      instantiate = module.instantiate;
      Label = module.Label;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FortuneTigerProxy = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "fb1f1tmiKBKkIIekGqmitls", "FortuneTigerScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      var FortuneTigerScrollView = exports('default', (_dec = ccclass("FortuneTigerScrollView"), _dec2 = menu("game/FortuneTiger/FortuneTigerScrollView"), _dec3 = property({
        type: eAutoRateType
      }), _dec4 = property(), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerScrollView, _Component);
        function FortuneTigerScrollView() {
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
        var _proto = FortuneTigerScrollView.prototype;
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
                this._curIndex = FortuneTigerProxy._curBetListIndex;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = FortuneTigerProxy._curBetCount;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = FortuneTigerProxy._curBetListIndex * FortuneTigerProxy.betMaxCount + FortuneTigerProxy._curBetCount;
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
                  itemNode.scale = v3(1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height), 1 + 0.5 * (1 - Math.abs(curPos.y) / itemNode.getComponent(UITransform).height));
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
                  EventManager.emit(ConfigManager.eventTransform.setBase, _this2.type, _this2._curIndex);
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
                //                // let num = index == 0 ? 1 : index * 10;
                var num = FortuneTigerProxy.betList[index];
                var strNum = GUtil.numberFormat(num, 2);
                return strNum + "K";
              }
            case eAutoRateType.baseRate:
              {
                return "" + (index + 1);
              }
            case eAutoRateType.basePay:
              {
                return "" + (index + 1) * 5;
              }
            case eAutoRateType.baseBet:
              {
                var _num = Math.floor(index / 10);
                var baseScore = FortuneTigerProxy.betList[_num];
                var baseRate = index % 10;
                var _strNum = GUtil.numberFormat(baseScore * (baseRate + 1) * 5, 2);

                //                // let strNum = Math.floor((baseScore == 0 ? 0.1 : baseScore * 0.5) * (baseRate + 1) * 20) + "K";
                return _strNum + "K";
              }
          }
        };
        _proto.getValue = function getValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                //                // let num = index == 0 ? 1 : index * 10;
                var num = FortuneTigerProxy.betList[index];
                return num;
              }
            case eAutoRateType.baseRate:
              {
                return index + 1;
              }
            case eAutoRateType.basePay:
              {
                return (index + 1) * 5;
              }
            case eAutoRateType.baseBet:
              {
                var _num2 = Math.floor(index / 10);
                var baseScore = FortuneTigerProxy.betList[_num2];
                var baseRate = index % 10;
                return baseScore * (baseRate + 1) * 5;
              }
          }
        };
        return FortuneTigerScrollView;
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

System.register("chunks:///_virtual/FortuneTigerSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Sprite, color, Label, Component, ViewManager, MainManager, Common;
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
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2bf53Ae2t1JhYu1EVa3G5cp", "FortuneTigerSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneTigerSetAuto = exports('default', (_dec = ccclass("FortuneTigerSetAuto"), _dec2 = menu("game/FortuneTiger/FortuneTigerSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerSetAuto, _Component);
        function FortuneTigerSetAuto() {
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
          return _this;
        }
        var _proto = FortuneTigerSetAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          //        // this.selNode = this.contentRoot.getChildByName(`Node_item_0`);
          //        // this.selNode.color = cc.color(125, 125, 125, 255);
          //        // this.selNode.getChildByName("Label_times").color = cc.color(255, 152, 0, 255);
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
        return FortuneTigerSetAuto;
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

System.register("chunks:///_virtual/FortuneTigerSetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './DataManager.ts', './ViewManager.ts', './Common.ts', './FortuneTigerProxy.ts', './FortuneTigerScrollView.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Node, Component, GUtil, DataManager, UserKey, ViewManager, Common, FortuneTigerProxy, FortuneTigerScrollView, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneTigerProxy = module.default;
    }, function (module) {
      FortuneTigerScrollView = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "13a00Zign5HEKzrBU2P2yuU", "FortuneTigerSetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      // // @inspector("packages://autoproperty/inspector.js")
      var FortuneTigerSetBase = exports('default', (_dec = ccclass("FortuneTigerSetBase"), _dec2 = menu("game/FortuneTiger/FortuneTigerSetBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerSetBase, _Component);
        function FortuneTigerSetBase() {
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
        var _proto = FortuneTigerSetBase.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;

          //        // if (HjcModel.instance.curTotalWin > 0) {
          //        //     this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        // } else {
          //        //     this.Label_win.string = `0.00`;
          //        // }
          this.Label_bet.string = "" + GUtil.numberFormat(FortuneTigerProxy.getBet(), 2.0);
          this._curIndex_baseScore = FortuneTigerProxy._curBetListIndex;
          this._curIndex_baseRate = FortuneTigerProxy._curBetCount;
          this._curIndex_baseBet = FortuneTigerProxy._curBetListIndex * FortuneTigerProxy.betMaxCount + FortuneTigerProxy._curBetCount;
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.eventTransform.setBase, this.onSetBase, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.eventTransform.setBase, this.onSetBase, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {
          //        // if (RewardMoney == 0) {
          //        //     if (HjcModel.instance.curTotalWin > 0) {
          //        //         this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        //     } else {
          //        //         this.Label_win.string = `0.00`;
          //        //     }
          //        //     return;
          //        // }
          //        // let destWin = HjcModel.instance.curTotalWin + RewardMoney;
          //        // let disWin = RewardMoney / 10;
          //        // cc.tween(this.Label_win.node)
          //        //     .repeat(
          //        //         11,
          //        //         cc
          //        //             .tween(this.Label_win.node)
          //        //             .delay(0.05)
          //        //             .call(() => {
          //        //                 HjcModel.instance.curTotalWin += disWin;
          //        //                 if (HjcModel.instance.curTotalWin > destWin) {
          //        //                     HjcModel.instance.curTotalWin = destWin;
          //        //                 }
          //        //                 this.Label_win.string = `${HjcUtils.instance.numberFormat(HjcModel.instance.curTotalWin / 1000, 2.0)}K`;
          //        //             })
          //        //     )
          //        //     .start();
        };
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(FortuneTigerScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(FortuneTigerScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(FortuneTigerScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(FortuneTigerScrollView).setNewPos(this._curIndex_baseRate);
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
                this.scrollView_baseScore.getComponent(FortuneTigerScrollView).doReset();
                this.scrollView_baseRate.getComponent(FortuneTigerScrollView).doReset();
                this.scrollView_baseBet.getComponent(FortuneTigerScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                //                // HjcModel.instance._curIndex_baseScore = this._curIndex_baseScore;
                //                // HjcModel.instance._curIndex_baseRate = this._curIndex_baseRate;
                //                // HjcModel.instance._curIndex_baseBet = this._curIndex_baseBet;
                //                // EventManager.instance.emit(HjcDef.eEvent.updateBaseBet);
                FortuneTigerProxy.setBet(this._curIndex_baseScore, this._curIndex_baseRate);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return FortuneTigerSetBase;
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

System.register("chunks:///_virtual/FortuneTigerView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Common.ts', './FortuneTigerCardAni.ts', './FortuneTigerDef.ts', './FortuneTigerProxy.ts', './FortuneTigerWinItem.ts', './FortuneTigerWindow.ts', './ClickbtnEffect.ts', './FortuneTigerRunItem.ts', './FortuneSetAuto.ts', './FortuneHistory.ts', './FortuneRank.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Label, Node, SpriteFrame, Prefab, Toggle, Button, instantiate, v3, UITransform, sys, Color, color, tween, v2, Sprite, Tween, Component, i18n, ProxyMgr, AudioManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Common, FortuneTigerCardAni, FortuneTigerDef, FortuneTigerProxy, FortuneTigerGameEvent, FortuneTigerWinItem, FortuneTigerWindow, ClickbtnEffect, FortuneTigerRunItem, FortuneSetAuto, FortuneHistory, FortuneRank, MainManager;
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
      instantiate = module.instantiate;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      Color = module.Color;
      color = module.color;
      tween = module.tween;
      v2 = module.v2;
      Sprite = module.Sprite;
      Tween = module.Tween;
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
      FortuneTigerCardAni = module.default;
    }, function (module) {
      FortuneTigerDef = module.FortuneTigerDef;
    }, function (module) {
      FortuneTigerProxy = module.default;
      FortuneTigerGameEvent = module.FortuneTigerGameEvent;
    }, function (module) {
      FortuneTigerWinItem = module.default;
    }, function (module) {
      FortuneTigerWindow = module.default;
    }, function (module) {
      ClickbtnEffect = module.default;
    }, function (module) {
      FortuneTigerRunItem = module.default;
    }, function (module) {
      FortuneSetAuto = module.default;
    }, function (module) {
      FortuneHistory = module.default;
    }, function (module) {
      FortuneRank = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46;
      cclegacy._RF.push({}, "2f3c7JRRvFDoZSZ185X2cj/", "FortuneTigerView", undefined);
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
      var STOP_TIME = 1.5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 7;
      var BIG_WIN_TIME2 = 9;
      var BIG_WIN_TIME3 = 11;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 2;
      var FortuneTigerView = exports('default', (_dec = ccclass("FortuneTigerView"), _dec2 = menu("game/FortuneTiger/FortuneTigerView"), _dec3 = property(sp.SkeletonData), _dec4 = property(FortuneTigerCardAni), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(Label), _dec10 = property(ScrollNumLabel), _dec11 = property(Label), _dec12 = property(sp.Skeleton), _dec13 = property(ScrollNumLabel), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(FortuneTigerRunItem), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(sp.Skeleton), _dec23 = property(Label), _dec24 = property(FortuneTigerWinItem), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Prefab), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(sp.Skeleton), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Label), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Prefab), _dec41 = property(Label), _dec42 = property(Toggle), _dec43 = property(ClickbtnEffect), _dec44 = property(Node), _dec45 = property(SpriteFrame), _dec46 = property(sp.Skeleton), _dec47 = property(Button), _dec48 = property(Button), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerView, _Component);
        function FortuneTigerView() {
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
          _initializerDefineProperty(_this, "spine_tigerLight", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_special", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_item", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gain", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_gain", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gain", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "specialWin", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particle", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particleLight", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scale", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_10light", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_10light1", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_10light2", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_x10", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scaleUps", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftCount", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lights", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_nums", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_window", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_lineWin", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_auto", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_x10LightBall", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_lucky", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_quick", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_add", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_reduce", _descriptor46, _assertThisInitialized(_this));
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
        var _proto = FortuneTigerView.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData(1000);
          this.clear();
          this.initEvent();
          this.updateBetlist();
        };
        _proto.init = function init() {
          this.spine_tiger.setAnimation(0, "idle", true);
          FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG);
          var node = instantiate(this.prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(FortuneTigerWindow);
          node.active = false;
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
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
          this.scheduleOnce(function () {
            //            // this.spine_bg.node.active = true;
            //            // this.spine_bg.setAnimation(0, "animation", false);
            //            // this.spine_bg.setCompleteListener(() => {
            //            //     this.spine_bg.setCompleteListener(null);
            //            //     this.spine_bg.node.active = false;
            //            // });
          }, 0.3);
          FortuneTigerDef.palyAudio(FortuneTigerDef.audio.WILD);
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
          if (child) {
            child.active = true;
            var item = child.getChildByName("item");
            if (!item) {
              item = instantiate(this.prefab_winItem);
              child.addChild(item);
              item.name = "item";
            }
            item.getComponent(FortuneTigerWinItem).showResult(result, isBig);
          }
          //        //隐藏对应图片
          var a = Math.floor(index / 3);
          var b = index % 3;
          this.aniLines[b].hide(a);
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          FortuneTigerProxy.on(FortuneTigerGameEvent.UPDATE_BETLIST, this.updateBetlist, this);
          FortuneTigerProxy.on(FortuneTigerGameEvent.CLOSE_BONUS, function () {
            FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG);
            _this2.checkAward();
          }, this);
          FortuneTigerProxy.on(FortuneTigerGameEvent.SELECT_BET, function (count) {
            //                // this.node_betSelect.active = false;
            _this2.setData(count);
          }, this);
          FortuneTigerProxy.on(FortuneTigerGameEvent.START, function () {
            _this2.runStart();
          }, this);
          FortuneTigerProxy.on(FortuneTigerGameEvent.ERROR, function () {
            _this2.changeState(RunState.NORMAL);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          FortuneTigerProxy.on(FortuneTigerGameEvent.CLICK_ITEM, function (data) {
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
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.SHOW_WINDOW);
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          //        // this.node_bets.destroyAllChildren();
          //        // for (let bet of FortuneTigerProxy.betList) {
          //        //     let node = cc.instantiate(this.pre_bet);
          //        //     this.node_bets.addChild(node);
          //        //     // node.getComponent(FortuneTigerBetItem).setBet(bet);
          //        // }
        };
        _proto.setData = function setData(betAmount) {
          this._bet = FortuneTigerProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.btn_add.interactable = !(FortuneTigerProxy._curBetListIndex == FortuneTigerProxy.betList.length - 1 && FortuneTigerProxy._curBetCount == FortuneTigerProxy.betMaxCount - 1);
          this.btn_reduce.interactable = !(FortuneTigerProxy._curBetListIndex == 0 && FortuneTigerProxy._curBetCount == 0);
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(FortuneTigerDef.tryGold + used);
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
          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotFortuneTiger");
          }, true);
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotFortuneTiger");
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/FortuneTigerHelp", FortuneTigerProxy.bundle, function () {}, function (prefab) {
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
          Common.returnToHall(this, FortuneTigerProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          Common.loadPopBuddle("prefab/FortuneTigerSetBase", FortuneTigerProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
          }, true);
        };
        _proto.onClickBetUp = function onClickBetUp() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneTigerProxy._curBetCount++;
          if (FortuneTigerProxy._curBetCount >= FortuneTigerProxy.betMaxCount) {
            FortuneTigerProxy._curBetListIndex++;
            if (FortuneTigerProxy._curBetListIndex >= FortuneTigerProxy.betList.length) {
              FortuneTigerProxy._curBetListIndex--;
              FortuneTigerProxy._curBetCount--;
            } else {
              FortuneTigerProxy._curBetCount = 0;
              FortuneTigerProxy.setBet(FortuneTigerProxy._curBetListIndex, FortuneTigerProxy._curBetCount);
            }
          } else {
            FortuneTigerProxy.setBet(FortuneTigerProxy._curBetListIndex, FortuneTigerProxy._curBetCount);
          }
        };
        _proto.onClickBetDown = function onClickBetDown() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          FortuneTigerProxy._curBetCount--;
          if (FortuneTigerProxy._curBetCount < 0) {
            FortuneTigerProxy._curBetListIndex--;
            if (FortuneTigerProxy._curBetListIndex < 0) {
              FortuneTigerProxy._curBetListIndex++;
              FortuneTigerProxy._curBetCount++;
            } else {
              FortuneTigerProxy._curBetCount = FortuneTigerProxy.betMaxCount - 1;
              FortuneTigerProxy.setBet(FortuneTigerProxy._curBetListIndex, FortuneTigerProxy._curBetCount);
            }
          } else {
            FortuneTigerProxy.setBet(FortuneTigerProxy._curBetListIndex, FortuneTigerProxy._curBetCount);
          }
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          var _this3 = this;
          //        // FortuneTigerProxy.auto = !FortuneTigerProxy.auto;
          //        // if (this._auto) {
          //        //     this.setAuto(0);
          //        //     return;
          //        // }
          if (sender.isChecked) {
            sender.setIsCheckedWithoutNotify(false);
            return;
          }
          sender.setIsCheckedWithoutNotify(true);

          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneTigerSetAuto",
          //        //     FortuneTigerProxy.bundle,
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
          } else {
            this._auto = false;
            this.spine_start.setAnimation(0, "idle", true);
            this.btn_auto.setIsCheckedWithoutNotify(true);
            this.clickEffect.switchAni();
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
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
          this.spine_startLight.setAnimation(0, "idle", false);
          this.changeBtnActive(false);
          FortuneTigerDef.palyAudio(FortuneTigerDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(this._runDelay * 2);
          }
          if (FortuneTigerProxy.result.Lucky) {
            this.changeState(RunState.LUCKY);
          } else {
            if (this._collectStar > 20 && this._collectStar % 15 == 0) this.changeState(RunState.FAKE_LUCKY);
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolFortuneTiger.bet, {
              betAmount: this._bet
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.reset();
          FortuneTigerProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          //        // this.spine_winBg.node.active = false;
          //        // this.spine_winLight.node.active = false;
          this.node_content.active = true;
          this.node_gain.active = false;
          this.spine_gain.setAnimation(0, "normal_p", true);
          this.node_10light.active = false;
          this.node_10light1.active = false;
          this.node_10light2.active = false;
          this.spine_x10.node.active = false;
          this.bigWinBgClickIndex = 0;
          this.changeSpecialNotice();
        };
        _proto.showResult = function showResult() {
          var _this4 = this;
          if (!FortuneTigerProxy.result) {
            return;
          }
          var findCount = 0;
          var delay = 0.3;
          var _loop = function _loop() {
            if (FortuneTigerProxy.result.NormalSymbols[i] == 1) {
              findCount++;
              var child = _this4.node_spineParent.getChildByName("spine" + i);
              if (child) {
                var pos = child.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
                var pos1 = _this4.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
                var node = instantiate(_this4.node_particle);
                _this4.node.addChild(node);
                node.setPosition(pos1.x, pos1.y);
                node.active = false;
                FortuneTigerDef.palyAudio(FortuneTigerDef.audio.COLLECT_WILD);
                tween(node).delay(delay + (findCount - 1) * 0.2).call(function () {
                  node.active = true;
                  FortuneTigerDef.palyAudio(FortuneTigerDef.audio.COLLECT_WILD2);
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
                }).bezierTo(0.8, v2(-350, (pos1.y + _this4.node_particle.getPosition().y) / 2), v2((-350 + _this4.node_particle.getPosition().x) / 2, (pos1.y + _this4.node_particle.getPosition().y) / 2), v2(_this4.node_particle.getPosition().x, _this4.node_particle.getPosition().y)).call(function () {
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
          for (var i = 0; i < FortuneTigerProxy.result.NormalSymbols.length; i++) {
            _loop();
          }
          var time = 0;
          this._collectStar += findCount;
          if (findCount > 0) {
            time = 0.8;
          }
          this.scheduleOnce(function () {
            var name = "fx_idle";
            var nfx = "";
            if (_this4._collectStar > 20) {
              nfx = "3";
            } else if (findCount > 10) {
              nfx = "2";
            }
            _this4.spine_tigerLight.setAnimation(0, name + nfx, true);
            if (findCount > 0 && FortuneTigerProxy.result.RewardMoney == 0) {
              _this4.spine_tiger.setAnimation(0, "idle2", false);
              _this4.spine_tiger.addAnimation(0, "idle", true);
            }
            _this4.checkAward();
          }, time);
        };
        _proto.checkAward = function checkAward() {
          if (FortuneTigerProxy.result.RewardMoney > 0) {
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
                var odd = FortuneTigerProxy.result.RewardMoney / this._bet;
                var aniname = "bigwin_";
                this.txt_bigwin.stepCount = BIG_WIN_TIME1 * 40;
                this.sp_bigWin.setAnimation(0, aniname + "intro", false);
                if (odd >= 15) {
                  aniname = "megawin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME2 * 40;
                  this._runTime = BIG_WIN_TIME2;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                if (odd >= 20) {
                  aniname = "superwin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME3 * 40;
                  this._runTime = BIG_WIN_TIME3;
                  this.sp_bigWin.addAnimation(0, aniname + "intro", false);
                }
                this.txt_bigwin.string = Common.numFormat(FortuneTigerProxy.result.RewardMoney);
                this.sp_bigWin.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this5.sp_bigWin.setCompleteListener(null);
                    _this5.sp_bigWin.setAnimation(0, aniname + "idle", true);
                    _this5.scheduleOnce(function () {
                      _this5.node_bigwin.active = false;
                      _this5.txt_bigwin.reset();
                    }, 6);
                  }
                });
                FortuneTigerDef.palyAudio(FortuneTigerDef.audio.BIGWIN, function (id) {
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
                var _odd = FortuneTigerProxy.result.RewardMoney / this._bet;
                this.spine_tiger.setAnimation(0, "win", false);
                if (_odd >= 10) {
                  bigWinName = "big2_";
                  this.spine_tiger.setAnimation(0, "win2", false);
                  FortuneTigerDef.palyAudio(FortuneTigerDef.audio.TIGER_WIN3);
                } else if (_odd >= 5) {
                  bigWinName = "big1_";
                  this.spine_tiger.setAnimation(0, "win2", false);
                  FortuneTigerDef.palyAudio(FortuneTigerDef.audio.TIGER_WIN2);
                } else {
                  FortuneTigerDef.palyAudio(FortuneTigerDef.audio.TIGER_WIN1);
                }
                this.spine_tiger.addAnimation(0, "idle", true);
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
                this.spine_x10.node.active = true;
                this.spine_x10.setAnimation(0, "idle", false);
                this.spine_x10.node.setPosition(-196, 708);
                this.spine_x10.node.scale = v3(0.6, 0.6, 1);
                FortuneTigerDef.palyAudio(FortuneTigerDef.audio.PRIZE_FULL);
                tween(this.spine_x10.node).delay(0.3).to(0.6, {
                  position: v3(0, -200),
                  scale: v3(1, 1, 1)
                }).call(function () {
                  _this5.spine_x10.node.active = false;
                  _this5.spine_x10.node.setPosition(595, 0);
                  _this5.changeState(RunState.BIG_WIN);
                }).start();
                break;
              }
            case RunState.FAKE_LUCKY:
              {
                this._state = RunState.FAKE_LUCKY;
                FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG2);
                this.spine_tiger.setAnimation(0, "zo_idle", true);
                tween(this.node_scale).delay(1).to(0.8, {
                  scale: v3(0.9, 0.9, 1)
                }, {
                  easing: "quadOut"
                }).call(function () {
                  _this5.changeState(RunState.STOP);
                  _this5.resetScale();
                  _this5.spine_tiger.setAnimation(0, "zo_exit", false);
                  _this5.spine_tiger.addAnimation(0, "idle", true);
                  _this5._collectStar += 3;
                  FortuneTigerDef.palyAudio(FortuneTigerDef.audio.FAKE_LUCKY);
                }).start();
                for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_scaleUps), _step3; !(_step3 = _iterator3()).done;) {
                  var i = _step3.value;
                  tween(i).delay(1).to(1.5, {
                    scale: v3(1.1, 1.1, 1)
                  }, {
                    easing: "quadOut"
                  }).call(function () {}).start();
                }
                break;
              }
            case RunState.LUCKY:
              {
                this._state = RunState.LUCKY;
                FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG2);
                this.changeNotice(true);
                this.spine_tiger.setAnimation(0, "zo_idle", true);
                this.spine_x10.node.active = true;
                this.spine_x10.node.scale = v3(0.6, 0.6, 1);
                var names = ["yb", "ry", "fu", "hb", "bp", "jz"];
                this.spine_x10.setAnimation(0, "intro_" + names[FortuneTigerProxy.result.LuckyMsg.LuckySymbol - 2], false);
                this.spine_x10.setCompleteListener(function () {
                  _this5.spine_x10.setCompleteListener(null);
                  _this5.spine_x10.setAnimation(0, "idle", true);
                });
                this.scheduleOnce(function () {
                  for (var _i = 0; _i < 3; _i++) {
                    var node = instantiate(_this5.node_x10LightBall);
                    node.active = true;
                    node.parent = _this5.node_x10LightBall.parent;
                    var x = -260 + 260 * _i;
                    var y = 620;
                    tween(node)
                    //@ts-ignore
                    .bezierTo(0.6, v2(x, 1000), v2(x, y), v2(x, y)).removeSelf().start();
                  }
                }, 3);
                this.spine_tigerLight.node.active = false;
                tween(this.node_scale).delay(2).to(0.8, {
                  scale: v3(0.9, 0.9, 1)
                }, {
                  easing: "quadOut"
                }).call(function () {
                  _this5.spine_tiger.setAnimation(0, "rs_start", false);
                  _this5.spine_tiger.addAnimation(0, "rs_idle", true);
                  _this5.node_10light.active = true;
                  _this5.node_10light1.active = true;
                  _this5.node_10light2.active = true;
                  var spine = _this5.node_10light1.getComponent(sp.Skeleton);
                  spine.setAnimation(0, "intro", false);
                  spine.addAnimation(0, "idle", true);
                  _this5.scheduleOnce(function () {
                    _this5.stopByLucky(0);
                  }, 1.5);
                  _this5.changeSpecialNotice(true, FortuneTigerProxy.result.LuckyMsg.LuckySymbol - 1);
                }).start();
                for (var _iterator4 = _createForOfIteratorHelperLoose(this.node_scaleUps), _step4; !(_step4 = _iterator4()).done;) {
                  var _i2 = _step4.value;
                  tween(_i2).delay(2).to(1.5, {
                    scale: v3(1.1, 1.1, 1)
                  }, {
                    easing: "quadOut"
                  }).call(function () {}).start();
                }
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
          this.txt_win.string = Common.numFormat(FortuneTigerProxy.result.RewardMoney + "");
          if (FortuneTigerProxy.result.RewardMoney > 0) {
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.AWARD1);
          }
          this.updateGold();
          if (FortuneTigerProxy.result.RewardMoney) {
            this.showLines();
            this.showWin(true);
          }
        };
        _proto.resetScale = function resetScale() {
          var _this6 = this;
          tween(this.node_scale).delay(0.5).to(0.8, {
            scale: v3(1, 1, 1)
          }, {
            easing: "quadOut"
          }).call(function () {
            _this6.node_10light.active = false;
            _this6.node_10light1.active = false;
            _this6.node_10light2.active = false;
            //                // this.spine_tiger.setAnimation(0, "idle", true);
          }).start();
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.node_scaleUps), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            tween(i).to(1.5, {
              scale: v3(1, 1, 1)
            }, {
              easing: "quadOut"
            }).call(function () {}).start();
          }
        };
        _proto.showWin = function showWin(fromNormal) {
          var _this7 = this;
          if (fromNormal === void 0) {
            fromNormal = false;
          }
          //        // this.spine_winBg.node.active = true;
          //        // this.spine_winBg.setAnimation(0, "intro", false);
          //        // this.spine_winBg.addAnimation(0, "picture", true);
          //        // this.txt_spineWin.string = "" + FortuneTigerProxy.result.prizeAmount / FortuneTigerProxy.result.openResult.multiples[1];
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
          this.txt_gain.string = Common.numFormat(FortuneTigerProxy.result.RewardMoney + "");
          if (FortuneTigerProxy.result.RewardMoney / this._bet >= 10) {
            this.scheduleOnce(function () {
              if (fromNormal) {
                var lines = FortuneTigerProxy.result.RewardLine;
                var findCount = 0;
                for (var _iterator6 = _createForOfIteratorHelperLoose(lines), _step6; !(_step6 = _iterator6()).done;) {
                  var i = _step6.value;
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
          this.resetScale();
        };
        _proto.showLines = function showLines() {
          var _FortuneTigerProxy$re;
          var prizeIdx = (_FortuneTigerProxy$re = FortuneTigerProxy.result) == null ? void 0 : _FortuneTigerProxy$re.RewardLine;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = FortuneTigerProxy.result.NormalSymbols;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var i = 0; i < prizeIdx.length; i++) {
            var info = prizeIdx[i];
            var lines = FortuneTigerDef.lines[info.Line];
            this.node_lights[info.Line].active = true;
            this.node_nums[info.Line].active = true;
            this.node_nums[info.Line + 5].active = true;
            for (var j = 0; j < lines.length; j++) {
              var key = lines[j];
              var result = OpenNums[key] - 1;
              this.showSpine(key, result);
            }
          }
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          FortuneTigerDef.palyAudio(FortuneTigerDef.audio.SINGLE_LINE);
          this.hideLines();
          this.hideSpine();
          this.node_spineMask.active = true;
          var nums = FortuneTigerProxy.result.NormalSymbols;
          var prizeIdx = FortuneTigerProxy.result.RewardLine;
          if (prizeIdx) {
            var len = prizeIdx.length;
            var i = this._showLineIndex;
            if (this._showLineIndex < len) {
              var lines = FortuneTigerDef.lines[prizeIdx[i].Line];
              for (var j = 0; j < lines.length; j++) {
                var key = lines[j];
                var result = nums[key] - 1;
                this.node_lights[prizeIdx[i].Line].active = true;
                this.node_nums[prizeIdx[i].Line].active = true;
                this.node_nums[prizeIdx[i].Line + 5].active = true;
                this.showSpine(key, result);
              }
              this.txt_lineWin.node.active = true;
              var y = 250;
              if (prizeIdx[i].Line == 1) {
                y = 470;
              } else if (prizeIdx[i].Line == 2) {
                y = 30;
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
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.node_lights), _step7; !(_step7 = _iterator7()).done;) {
            var node = _step7.value;
            node.active = false;
          }
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.node_nums), _step8; !(_step8 = _iterator8()).done;) {
            var _node = _step8.value;
            _node.active = false;
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
            this.txt_bigwin.reset(FortuneTigerProxy.result.RewardMoney);
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
          if (!FortuneTigerProxy.result) {
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
          var nums = FortuneTigerProxy.result.NormalSymbols;
          var _loop2 = function _loop2(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 3] - 1;
            var rand3 = nums[i + 6] - 1;
            var arr = [rand1, rand2, rand3];
            _this8.scheduleOnce(function () {
              _this8.aniLines[i].showResult(arr);
            }, _this8._runDelay * i);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop2(i);
          }
          if (this._runDelay == 0) {
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.QUICK_END);
          } else {
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.END);
          }
          var end = function end() {
            _this8._lock = false;
            _this8.showResult();
          };
          this.scheduleOnce(function () {
            end();
          }, this._runDelay * 3);
        };
        _proto.stopByLucky = function stopByLucky(index) {
          var _this9 = this;
          this.node_spineMask.active = false;
          var nums = FortuneTigerProxy.result.LuckyMsg.SymbolsArr[index];
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 3] - 1;
            var rand3 = nums[i + 6] - 1;
            var arr = [rand1, rand2, rand3];
            _this9.scheduleOnce(function () {
              _this9.aniLines[i].showResult(arr);
            }, _this9._runDelay * i);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          if (this._runDelay == 0) {
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.QUICK_END);
          } else {
            FortuneTigerDef.palyAudio(FortuneTigerDef.audio.END);
          }
          var end = function end() {
            _this9.scheduleOnce(function () {
              _this9.showLuckyEnd(index);
            }, 0.5);
          };
          this.scheduleOnce(function () {
            end();
          }, this._runDelay * 3);
        };
        _proto.showLuckyEnd = function showLuckyEnd(index) {
          var _this10 = this;
          var nums = FortuneTigerProxy.result.LuckyMsg.SymbolsArr[index];
          var prizeIdx = FortuneTigerProxy.result.LuckyMsg.RewardLines[index];
          if (prizeIdx) {
            //            // this.hideSpine();

            for (var i = 0; i < prizeIdx.length; i++) {
              var lines = FortuneTigerDef.lines[prizeIdx[i].Line];
              for (var j = 0; j < lines.length; j++) {
                var key = lines[j];
                var result = nums[key] - 1;
                this.node_lights[prizeIdx[i].Line].active = true;
                this.node_nums[prizeIdx[i].Line].active = true;
                this.node_nums[prizeIdx[i].Line + 5].active = true;
              }
            }
          }
          for (var _i3 = 0; _i3 < nums.length; _i3++) {
            if (nums[_i3] - 1 != 7) this.showSpine(_i3, nums[_i3] - 1, true);
          }
          this.scheduleOnce(function () {
            if (FortuneTigerProxy.result.LuckyMsg.SymbolsArr[index + 1]) {
              for (var _i4 = 0; _i4 < _this10.aniLines.length; _i4++) {
                _this10.aniLines[_i4].run(0);
              }
              _this10.scheduleOnce(function () {
                _this10.stopByLucky(index + 1);
              }, 1.5);
            } else {
              _this10.spine_tiger.setAnimation(0, "rs_win", false);
              _this10.spine_tiger.addAnimation(0, "rs_win_idle", true);
              FortuneTigerDef.palyAudio(FortuneTigerDef.audio.TIGER_BIG_WIN);
              var _nums = FortuneTigerProxy.result.NormalSymbols;
              for (var _i5 = 0; _i5 < _this10.aniLines.length; _i5++) {
                var rand1 = _nums[_i5] - 1;
                var rand2 = _nums[_i5 + 3] - 1;
                var rand3 = _nums[_i5 + 6] - 1;
                var arr = [rand1, rand2, rand3];
                _this10.aniLines[_i5].showResult(arr, true);
              }
              _this10.node_spineMask.active = true;
              _this10.hideSpine();
              for (var _i6 = 0; _i6 < _nums.length; _i6++) {
                if (_nums[_i6] - 1 != 7) _this10.showSpine(_i6, _nums[_i6] - 1);
              }
              _this10._collectStar = 0;
              _this10.spine_tigerLight.node.active = true;
              if (FortuneTigerProxy.result.RewardLine.length == 5) {
                _this10.spine_x10.setAnimation(0, "end", false);
                _this10.specialWin.node.active = true;
                _this10.specialWin.showResult(FortuneTigerProxy.result.LuckyMsg.LuckySymbol - 1);
                FortuneTigerDef.palyAudio(FortuneTigerDef.audio.LUCKY_WIN2);
                tween(_this10.spine_x10.node).delay(0.5).to(0.3, {
                  position: v3(0, -200),
                  scale: v3(1, 1, 1)
                }).call(function () {
                  _this10.scheduleOnce(function () {
                    _this10.specialWin.node.active = false;
                    _this10.spine_x10.node.active = false;
                    _this10.spine_x10.node.setPosition(_this10.spine_x10.node.position.x, 595);
                    _this10._state = RunState.AWARD;
                    _this10._runTime = AWARD_TIME;
                    _this10.showWin();
                    FortuneTigerDef.palyMusic(FortuneTigerDef.audio.BG);
                  }, 1.5);
                }).start();
              } else {
                _this10.spine_x10.node.active = false;
                _this10._state = RunState.AWARD;
                _this10._runTime = AWARD_TIME;
                FortuneTigerDef.palyAudio(FortuneTigerDef.audio.LUCKY_WIN1);
                _this10.showWin();
              }
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
          } else {
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
          var x = this.notice_title.getComponent(UITransform).width / 2 > 300 ? this.notice_title.getComponent(UITransform).width / 2 - 300 : 0;
          this.notice_title.setPosition(x, this.notice_title.position.y);
        };
        _proto.changeSpecialNotice = function changeSpecialNotice(b, index) {
          var _this11 = this;
          if (b === void 0) {
            b = false;
          }
          if (index === void 0) {
            index = 0;
          }
          if (b) {
            this.notice_title.active = false;
            this.notice_special.active = true;
            Tween.stopAllByTarget(this.notice_special);
            this.notice_special.setPosition(0, this.notice_special.position.y);
            this.notice_item.setCard(index);
            tween(this.notice_special).repeatForever(tween(this.notice_special).delay(3).to(3, {
              position: v3(-720, this.notice_special.position.y)
            }).delay(0.5).call(function () {
              _this11.notice_special.getPosition().x = 0;
            }).start()).start();
          } else {
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
                  if (FortuneTigerProxy.result) {
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
          EventManager.off(ConfigManager.eventTransform.setAuto, this.setAuto, this);
        };
        return FortuneTigerView;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spine_tigerLight", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notice_special", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "noticeFrames", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "notice_item", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_gain", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "spine_gain", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "txt_gain", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "specialWin", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_particle", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "node_particleLight", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "prefab_winItem", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_scale", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_10light", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "node_10light1", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "node_10light2", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "spine_x10", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "node_scaleUps", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftCount", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_lights", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "node_nums", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "prefab_window", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "txt_lineWin", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "btn_auto", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "node_x10LightBall", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "frame_lucky", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "btn_add", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "btn_reduce", [_dec48], {
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

System.register("chunks:///_virtual/FortuneTigerWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneTigerDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Component, FortuneTigerDef;
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
      FortuneTigerDef = module.FortuneTigerDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "bfe71Jh8C1JnIuMlwfI3jtL", "FortuneTigerWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneTigerWindow = exports('default', (_dec = ccclass("FortuneTigerWindow"), _dec2 = menu("game/FortuneTiger/FortuneTigerWindow"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.Skeleton), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerWindow, _Component);
        function FortuneTigerWindow() {
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
        var _proto = FortuneTigerWindow.prototype;
        _proto.showIndex = function showIndex(index) {
          this.item.skeletonData = this.spines[index];
          if (index == 0) {
            this.item.setAnimation(0, "idle", true);
          } else {
            this.item.setAnimation(0, "win_idle", true);
          }
          var odd = FortuneTigerDef.odds[index];

          //        // this.txt_odd1.string = "" + odd;
          this.txt_odd2.string = "" + odd;
        };
        return FortuneTigerWindow;
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

System.register("chunks:///_virtual/FortuneTigerWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FortuneTigerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, UITransform, v3, Component, FortuneTigerProxy, FortuneTigerGameEvent;
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
      FortuneTigerProxy = module.default;
      FortuneTigerGameEvent = module.FortuneTigerGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "7f9cfBJw9lLA4fi55FVyDzu", "FortuneTigerWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FortuneTigerWinItem = exports('default', (_dec = ccclass("FortuneTigerWinItem"), _dec2 = menu("game/FortuneTiger/FortuneTigerWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FortuneTigerWinItem, _Component);
        function FortuneTigerWinItem() {
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
        var _proto = FortuneTigerWinItem.prototype;
        _proto.showResult = function showResult(result, big) {
          if (big === void 0) {
            big = false;
          }
          this._index = result;
          this.spine_normal.skeletonData = this.spines[result];
          this.spine_bg.setAnimation(0, "idle", true);
          if (big) {
            if (this._index == 0) {
              this.spine_normal.setAnimation(0, "idle", true);
            } else {
              this.spine_normal.setAnimation(0, "win_idle", true);
            }
            this.spine_bg.node.active = false;
          } else {
            this.spine_normal.setAnimation(0, "win", false);
            if (this._index == 0) {
              this.spine_normal.addAnimation(0, "idle", true);
            } else {
              this.spine_normal.addAnimation(0, "win_idle", true);
            }
            this.spine_bg.node.active = true;
          }
        };
        _proto.onClick = function onClick() {
          FortuneTigerProxy.emit(FortuneTigerGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return FortuneTigerWinItem;
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
  r('virtual:///prerequisite-imports/FortuneTigerGame', 'chunks:///_virtual/FortuneTigerGame'); 
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