System.register("chunks:///_virtual/Stone2BetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './Stone2Proxy.ts', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, Common, StoneGame2Proxy, StoneGame2Event, ProxyMgr;
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
      Common = module.Common;
    }, function (module) {
      StoneGame2Proxy = module.default;
      StoneGame2Event = module.StoneGame2Event;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "38f9aIG5phFIbenUjLi/NPN", "Stone2BetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Stone2BetItem = exports('default', (_dec = ccclass("Stone2BetItem"), _dec2 = menu("game/StoneGame2/Stone2BetItem"), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2BetItem, _Component);
        function Stone2BetItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor2, _assertThisInitialized(_this));
          _this._count = 0;
          return _this;
        }
        var _proto = Stone2BetItem.prototype;
        _proto.onLoad = function onLoad() {
          StoneGame2Proxy.on(StoneGame2Event.SELECT_BET, this.onSelect, this);
        };
        _proto.onClickBet = function onClickBet() {
          StoneGame2Proxy.emit(StoneGame2Event.SELECT_BET, this._count);
        };
        _proto.setBet = function setBet(bet, useExp) {
          if (useExp === void 0) {
            useExp = false;
          }
          this._count = bet;
          var multiple = useExp ? 1.5 : 1;
          var count = bet * multiple;
          this.txt_bet.string = Common.ChangeMoneyFormat(count, 3);
        };
        _proto.onSelect = function onSelect(count) {
          this.node_light.active = count === this._count;
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return Stone2BetItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec3], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Stone2CardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Stone2Proxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, v3, tween, UITransform, Tween, Component, StoneGame2Proxy, StoneGame2Event;
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
      Sprite = module.Sprite;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      StoneGame2Proxy = module.default;
      StoneGame2Event = module.StoneGame2Event;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "2c0e0qxUnVDnKp07tGa9WFq", "Stone2CardAni", undefined);
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
      var Stone2CardAni = exports('default', (_dec = ccclass("Stone2CardAni"), _dec2 = menu("game/StoneGame2/Stone2CardAni"), _dec3 = property([Sprite]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2CardAni, _Component);
        function Stone2CardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "runningCard", _descriptor, _assertThisInitialized(_this));
          _this.stepHeight = 142;
          //数字高度
          _this.moveOut = 140;
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
          _this.cards = void 0;
          _this._useExp = false;
          return _this;
        }
        var _proto = Stone2CardAni.prototype;
        _proto.onLoad = function onLoad() {
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
          this.cards = data.cards;
        };
        _proto.initCard = function initCard(card) {
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < this.runningCard.length; i++) {
              var rand = card[i];
              this.runningCard[i].spriteFrame = this.cards[rand];
              this.runningCard[i].node.scale = v3(0, 0, 1);
              tween(this.runningCard[i].node).delay(0.1 * i).to(0.3, {
                scale: v3(1, 1, 1)
              }).start();
            }
          } else {
            var index = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              // this.randCard(i);
              if (this._index == 0) _i.spriteFrame = this.cards[0];else {
                _i.spriteFrame = this.cards[this._index + 4];
              }
              _i.node.scale = v3(0, 0, 1);
              tween(_i.node).delay(0.1 * index).to(0.3, {
                scale: v3(1, 1, 1)
              }).start();
              index++;
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
          var length = this.cards.length;
          // if (this._index == 3) {
          //     length -= 2;
          // }
          var rand = Math.floor(Math.random() * length);
          if (rand == length - 1 && this._useExp) {
            rand -= 1;
          } else if (rand == length - 2 && !this._useExp) {
            rand += 1;
          }
          node.spriteFrame = this.cards[rand];
        };
        _proto.resultCard = function resultCard(sprite) {
          if (this.leftResultCount > 0) {
            this.leftResultCount--;
            var result = this.result[this.leftResultCount];
            sprite.spriteFrame = this.cards[result];
            sprite.node.getComponent(UITransform).priority = this.leftResultCount;
          }
        };
        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          if (reConnect) {
            for (var i = 0; i < 3; i++) {
              this.runningCard[i + 1].spriteFrame = this.cards[cardValue[i]];
            }
          } else {
            this.result = cardValue;
            this._state = CardState.RESULT;
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
        _proto.useExp = function useExp() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            // this.randCard(i);

            if (this._index == 0) {
              i.spriteFrame = this.cards[0];
            } else {
              i.spriteFrame = this.cards[this._index + 4];
            }
          }
        };
        _proto.useSpecialExp = function useSpecialExp(use) {
          for (var i = 0; i < 3; i++) {
            var index = this.endIndex + i - 2;
            if (index < 0) {
              index = 5 + index;
            }
            if (use) {
              this.runningCard[index].spriteFrame = this.cards[i + 4];
            } else {
              this.runningCard[index].spriteFrame = this.cards[i * 3 + 1];
            }
          }
          this._useExp = use;
        };
        _proto.initPos = function initPos() {
          var startY = 142 * 2;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 142));
          }
        };
        _proto.run = function run(delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.show();
          this.initPos();
          this.delayTime = delayTime;
          this.moveStep = 60; //每帧移动步长
          this._state = CardState.DELAY;
          this.leftResultCount = 3;
          this.endNode = null;
        };
        _proto.update = function update(dt) {
          // 只读 position，避免滚动期间每帧调用 getPosition 创建临时向量。
          switch (this._state) {
            case CardState.DELAY:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this._state = CardState.RUN;
                }
                break;
              }
            case CardState.RUN:
              {
                var length = this.runningCard.length;
                for (var i = 0; i < length; i++) {
                  var node = this.runningCard[i].node;
                  var y = node.position.y - this.moveStep;
                  if (y < -(this.stepHeight + this.moveOut)) {
                    y += this.stepHeight * CARDCOUNT;
                    this.randCard(this.runningCard[i]);
                  }
                  node.setPosition(0, y);
                }
                break;
              }
            case CardState.RESULT:
              {
                this.moveStep -= 2;
                if (this.moveStep < 20) {
                  this.moveStep = 20;
                }
                var _length = this.runningCard.length;
                for (var _i2 = 0; _i2 < _length; _i2++) {
                  var _node = this.runningCard[_i2].node;
                  var _y = _node.position.y - this.moveStep;
                  if (_y < -(this.stepHeight + this.moveOut)) {
                    _y += this.stepHeight * CARDCOUNT;
                    this.resultCard(this.runningCard[_i2]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i2;
                    }
                  }
                  _node.setPosition(0, _y);
                  if (_node == this.endNode && _node.position.y <= -this.stepHeight - 5) {
                    this._state = CardState.END;
                    this.fixStep = _node.position.y + this.stepHeight;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                for (var _i3 = 0; _i3 < _length2; _i3++) {
                  var _node2 = this.runningCard[_i3].node;
                  var toY = _node2.position.y - this.fixStep;
                  tween(_node2).to(0.1, {
                    position: v3(_node2.position.x, toY)
                  }).start();
                }
                this._state = CardState.END_EMIT;
                this.delayTime = 0.0;
                break;
              }
            case CardState.END_EMIT:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this._state = CardState.NORMAL;
                  StoneGame2Proxy.emit(StoneGame2Event.FINISH_RUN_INDEX, this._index);
                }
                break;
              }
          }
        };
        return Stone2CardAni;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "runningCard", [_dec3], {
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

System.register("chunks:///_virtual/Stone2Def.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './Stone2Proxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, director, AudioClip, isValid, AudioManager, StoneGame2Proxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      AudioClip = module.AudioClip;
      isValid = module.isValid;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      StoneGame2Proxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ad4deuTv39HgIe6t4hYNRdT", "Stone2Def", undefined);
      var Stone2Def = exports('Stone2Def', /*#__PURE__*/function () {
        function Stone2Def() {}
        Stone2Def.playMultple = function playMultple(index) {
          var name = "Multiplier0";
          var b = Math.floor((index + 1) / 2);
          if (b > 0) {
            this.palyAudio(name + b);
          }
        };
        Stone2Def.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = StoneGame2Proxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            if (call) {
              var soundId = AudioManager.instance.playSound(audio);
              call(soundId);
            } else {
              AudioManager.instance.playOneShot(audio);
            }
          });
        };
        Stone2Def.palyMusic = function palyMusic(name) {
          var bundle = StoneGame2Proxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        Stone2Def.init = function init() {};
        Stone2Def.getRand = function getRand(i) {
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
        Stone2Def.randRusult = function randRusult(amount, add) {
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
        Stone2Def.getMultple = function getMultple() {
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
        Stone2Def.getMultipleIndex = function getMultipleIndex(per) {
          var index = per % 5;
          var b = Math.floor(per / 5);
          if (b > 0) {
            index += b + 3;
          }
          index -= 1;
          return index;
        };
        Stone2Def.checkPrize = function checkPrize(openNums) {
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
        return Stone2Def;
      }());
      Stone2Def.audio = {
        AWARD1: "Win",
        BG: "Mg_bgm",
        BG2: "Wheel_BGM",
        END: "Reel_Stop",
        TURN: "Reel_Start",
        WILD: "Wild_Stop",
        BIGWIN: "Big_Win",
        EXP: "Extra_Bet_On",
        WHEEL_START: "Wheel_Rotate",
        WHEEL_END: "Wheel_end",
        WHEEL_UP: "Wheel_Extra_UP",
        FLY: "Fly",
        DOUBLE: "Double",
        FLY_WIN: "DoubleShow_Lv2"
      };
      Stone2Def.tryGold = 100000000;
      Stone2Def.odds = [2, 5, 8, 10, 12, 15, 20, 25];
      Stone2Def.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      Stone2Def.lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      Stone2Def.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      Stone2Def.innerMultiples = [1000, 10, 1, 30, 5, 50, 200, 8, 100, 3, 20, 15];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Stone2Help.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, PageView, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      PageView = module.PageView;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a5c67oPX7BApbAbquEE3pbZ", "Stone2Help", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var Stone2Help = exports('default', (_dec = ccclass("Stone2Help"), _dec2 = menu("game/StoneGame2/Stone2Help"), _dec3 = property(PageView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2Help, _Component);
        function Stone2Help() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pageView", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Stone2Help.prototype;
        _proto.onClickLeft = function onClickLeft() {
          var index = this.pageView.getCurrentPageIndex();
          index--;
          if (index < 0) {
            index = 0;
          }
          this.pageView.scrollToPage(index, 0.3);
        };
        _proto.onClickRight = function onClickRight() {
          var index = this.pageView.getCurrentPageIndex();
          index++;
          if (index > 4) {
            index = 4;
          }
          this.pageView.scrollToPage(index, 0.3);
        };
        return Stone2Help;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pageView", [_dec3], {
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

System.register("chunks:///_virtual/Stone2Proxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, ConfigManager, EventManager, Common;
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
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a079deuyFhOHbvm4O9eiNqm", "Stone2Proxy", undefined);
      var StoneGame2Event = exports('StoneGame2Event', /*#__PURE__*/function (StoneGame2Event) {
        StoneGame2Event["ENTER_ROOM"] = "enterRoom";
        StoneGame2Event["LEAVE_ROOM"] = "leaveRoom";
        StoneGame2Event["UPDATE_CONFIG"] = "updateConfig";
        StoneGame2Event["UPDATE_BETLIST"] = "updateBetList";
        StoneGame2Event["CLOSE_BONUS"] = "closeBonus";
        StoneGame2Event["SELECT_BET"] = "selectBet";
        StoneGame2Event["START"] = "start";
        StoneGame2Event["WHEEL_END"] = "wheelEnd";
        StoneGame2Event["FINISH_RUN_INDEX"] = "FINISH_RUN_INDEX";
        return StoneGame2Event;
      }({}));

      /**
       * xiyou数据代理
       */
      var StoneGame2ProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(StoneGame2ProxyMgr, _ProxyBase);
        function StoneGame2ProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "StoneGame2";
          _this.wsEvents = [ConfigManager.instance.ProtocolStone2.bet, ConfigManager.instance.ProtocolStone2.betList];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [];
          return _this;
        }
        var _proto = StoneGame2ProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.changeBet = function changeBet(betScore) {
          var score = betScore;
          for (var i = 0; i < this.betList.length; i++) {
            if (betScore == this.betList[i]) {
              if (this.betList[i + 1]) {
                score = this.betList[i + 1];
              } else {
                score = this.betList[0];
              }
              break;
            }
          }
          return score;
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            EventManager.instance.on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.instance.off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.ProtocolStone2.betList:
              {
                this.betList = data.Data.betList;
                this.emit(StoneGame2Event.UPDATE_BETLIST);
                break;
              }
            case ConfigManager.instance.ProtocolStone2.bet:
              {
                this.result = data.Data;
                this.emit(StoneGame2Event.START);
              }
          }
        };
        _createClass(StoneGame2ProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return StoneGame2ProxyMgr;
      }(ProxyBase);
      var StoneGame2Proxy = exports('default', new StoneGame2ProxyMgr("StoneGame2Proxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Stone2Room.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Stone2BetItem.ts', './Common.ts', './Stone2Proxy.ts', './Stone2Def.ts', './Stone2CardAni.ts', './Stone2Wheel.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, sp, Node, Label, Sprite, Prefab, v2, instantiate, v3, tween, Tween, UIOpacity, Button, UITransform, Component, i18n, ProxyMgr, GUtil, AudioManager, ConfigManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Stone2BetItem, Common, StoneGame2Proxy, StoneGame2Event, Stone2Def, Stone2CardAni, Stone2Wheel, I18nLocal;
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
      sp = module.sp;
      Node = module.Node;
      Label = module.Label;
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      v2 = module.v2;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      Tween = module.Tween;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      UITransform = module.UITransform;
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
      ConfigManager = module.default;
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
      Stone2BetItem = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      StoneGame2Proxy = module.default;
      StoneGame2Event = module.StoneGame2Event;
    }, function (module) {
      Stone2Def = module.Stone2Def;
    }, function (module) {
      Stone2CardAni = module.default;
    }, function (module) {
      Stone2Wheel = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44;
      cclegacy._RF.push({}, "4b6a0buEZhOKqbICs3Wajj7", "Stone2Room", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RunState = {
        NORMAL: 0,
        START: 1,
        STOP: 2,
        AWARD: 3,
        AWARD_LINES: 4,
        BIG_WIN: 5,
        EXPANI: 6,
        WAIT: 7
      };
      var RUN_TIME = 1.3;
      var STOP_TIME = 1.5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 4;
      var BIG_WIN_TIME2 = 8;
      var BIG_WIN_TIME3 = 12;
      var LINE_TIME = 2;
      var EXPANI_TIME = 1.5;
      var WAIT_TIME = 1;
      var Stone2Room = exports('default', (_dec = ccclass("Stone2Room"), _dec2 = menu("game/StoneGame2/Stone2Room"), _dec3 = property(SpriteFrame), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(SpriteFrame), _dec7 = property(Stone2CardAni), _dec8 = property(Stone2CardAni), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(ScrollNumLabel), _dec12 = property(Label), _dec13 = property(sp.Skeleton), _dec14 = property(ScrollNumLabel), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(sp.Skeleton), _dec19 = property(Node), _dec20 = property(SpriteFrame), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(sp.Skeleton), _dec25 = property(Sprite), _dec26 = property(SpriteFrame), _dec27 = property(Prefab), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(ScrollNumLabel), _dec32 = property(sp.Skeleton), _dec33 = property(sp.Skeleton), _dec34 = property(Sprite), _dec35 = property(sp.Skeleton), _dec36 = property(sp.Skeleton), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Stone2Wheel), _dec40 = property(sp.Skeleton), _dec41 = property(Node), _dec42 = property(ScrollNumLabel), _dec43 = property(ScrollNumLabel), _dec44 = property(Sprite), _dec45 = property(SpriteFrame), _dec46 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2Room, _Component);
        function Stone2Room() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardSpriteFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multiSpines", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleSpriteFrames", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleLine", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_exp", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_expTip", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_exp", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betSelect", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_betUp", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_betUp", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betUpSpriteFrames", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_bet", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_expTipHelp", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_mult", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_spineWin", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_winBg", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_winLight", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_winNx", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nbEffect", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_logo", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_setting", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheel", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wheelExp", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wheelWinBg", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_wheelWin1", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_wheelWin2", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_multiple", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_multiples", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wheelMask", _descriptor44, _assertThisInitialized(_this));
          _this._runDelay = 0.2;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 1000;
          _this._auto = false;
          _this._try = false;
          //    // lines = [];
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this._useExp = false;
          //使用加成
          _this._showExp = false;
          _this.noticeIndex = 0;
          _this._logoTime = 0;
          _this._specialLock = false;
          _this._bigWinLock = false;
          _this.bigWinBgClickIndex = 0;
          _this._bigWinSoundId = 0;
          return _this;
        }
        var _proto = Stone2Room.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData(1000);
          this.wheel.onSelect(1000);
          this.clear();
          this.initEvent();
          this.updateBetlist();
        };
        _proto.init = function init() {
          this.spine_exp.setAnimation(0, "picture", true);
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
        };
        _proto.loadAni = function loadAni() {
          var _this2 = this;
          var _loop = function _loop(i) {
            _this2.aniLines[i].setData({
              index: i,
              cards: _this2.cardSpriteFrames
            });
            _this2.scheduleOnce(function () {
              _this2.aniLines[i].initCard();
            }, i * 0.1);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop(i);
          }
          this.multipleLine.setData({
            index: 3,
            cards: this.multipleSpriteFrames
          });
          this.scheduleOnce(function () {
            _this2.multipleLine.initCard();
            _this2.spine_bg.node.active = true;
            _this2.spine_bg.setAnimation(0, "animation", false);
            _this2.spine_bg.setCompleteListener(function () {
              _this2.spine_bg.setCompleteListener(null);
              _this2.spine_bg.node.active = false;
            });
          }, 0.3);
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
          this.multipleLine.show();
          this.spine_mult.setAnimation(0, "picture", true);
        };
        _proto.showSpine = function showSpine(index, result) {
          var child = this.node_spineParent.getChildByName("spine" + index);
          var skIndex = 0;
          var name = "idle";
          if (result > 4) {
            skIndex = 2;
            var names = ["idle_red", "idle_blue", "idle_green"];
            name = names[result - 5];
          } else if (result > 0) {
            skIndex = 1;
            var _names = ["idle_J", "idle_Q", "idle_K", "idle_A"];
            name = _names[result - 1];
          }
          if (child) {
            child.active = true;
            var spine = child.getComponent(sp.Skeleton);
            spine.skeletonData = this.spines[skIndex];
            spine.setAnimation(0, name, true);
          }
          //        //隐藏对应图片
          var a = Math.floor(index / 3);
          var b = index % 3;
          this.aniLines[b].hide(a);
        };
        _proto.showMultSpine = function showMultSpine(result) {};
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
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          StoneGame2Proxy.on(StoneGame2Event.UPDATE_BETLIST, this.updateBetlist, this);
          StoneGame2Proxy.on(StoneGame2Event.SELECT_BET, function (count) {
            _this3.node_betSelect.active = false;
            _this3.setData(count);
          }, this);
          StoneGame2Proxy.on(StoneGame2Event.START, function () {
            _this3.runStart();
          }, this);
          StoneGame2Proxy.on(StoneGame2Event.WHEEL_END, function () {
            _this3.showWheelWinEnd();
          }, this);
          StoneGame2Proxy.on(StoneGame2Event.FINISH_RUN_INDEX, function (index) {
            if (index == 3) {
              var multiple = Stone2Def.getMultipleIndex(StoneGame2Proxy.result.openResult.multiples[1]);
              Stone2Def.playMultple(multiple);
              _this3._lock = false;
              _this3.showResult();
            } else {
              var nums = StoneGame2Proxy.result.openResult.OpenNums;
              var rand1 = nums[index] - 1;
              var rand2 = nums[index + 3] - 1;
              var rand3 = nums[index + 6] - 1;
              if (rand1 == 0 || rand2 == 0 || rand3 == 0) {
                Stone2Def.palyAudio(Stone2Def.audio.WILD);
              }
            }
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          this.node_bets.destroyAllChildren();
          for (var _iterator3 = _createForOfIteratorHelperLoose(StoneGame2Proxy.betList), _step3; !(_step3 = _iterator3()).done;) {
            var bet = _step3.value;
            var node = instantiate(this.pre_bet);
            this.node_bets.addChild(node);
            node.getComponent(Stone2BetItem).setBet(bet, this._useExp);
            node.getComponent(Stone2BetItem).onSelect(this._bet);
          }
        };
        _proto.setData = function setData(betAmount) {
          if (betAmount) {
            this._bet = betAmount;
            var multiple = this._useExp ? 1.5 : 1;
            this.txt_bet.string = Common.numFormat(betAmount * multiple);
          } else {
            this.onClickTryGame();
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(Stone2Def.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used));
          }
        };
        _proto.onClickBg = function onClickBg() {
          if (this.node_betSelect.active) {
            this.node_betSelect.active = false;
          }
          if (this._showExp) {
            this.onClickExp();
          }
          if (this.node_expTipHelp.active) {
            this.node_expTipHelp.active = !this.node_expTipHelp.active;
          }
          this.node_setting.active = false;
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          this.node_setting.active = !this.node_setting.active;
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("slotGemstone2");
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("slotGemstone2");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Stone2Help", StoneGame2Proxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, StoneGame2Proxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (!this.checkReady()) return;
          this.node_betSelect.active = !this.node_betSelect.active;
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          //        // StoneGame2Proxy.auto = !StoneGame2Proxy.auto;
          this._auto = !this._auto;
          var spine = sender.target.getComponent(sp.Skeleton);
          if (this._auto) {
            spine.setAnimation(0, "on", true);
          } else {
            spine.setAnimation(0, "off", true);
            //            // spine.addAnimation(0, "idle", true);
          }

          if (this._state == RunState.AWARD_LINES && this._auto) {
            this.changeState(RunState.NORMAL);
          }
        };
        _proto.onClickQuick = function onClickQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.2;
          } else {
            this._runDelay = 0;
          }
        };
        _proto.onClickEXPCheck = function onClickEXPCheck(evt) {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT) {
            // evt.isChecked = !evt.isChecked;
            evt.setIsCheckedWithoutNotify(!evt.isChecked);
            return;
          }
          this.hideSpine();
          this._useExp = evt.isChecked;
          this.node_expTip.active = this._useExp;
          var multiple = this._useExp ? 1.5 : 1;
          this.txt_bet.string = Common.numFormat(this._bet * multiple);
          this.updateBetlist();
          this.node_spineMask.active = false;
          if (this._useExp) {
            this.useExp();
          } else {
            this.img_betUp.spriteFrame = this.betUpSpriteFrames[0];
            this.spine_exp.setAnimation(0, "picture", true);
          }
          this.wheel.exp = this._useExp;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.aniLines), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            i.useExp();
          }
          this.multipleLine.useSpecialExp(this._useExp);
        };
        _proto.useExp = function useExp() {
          var _this4 = this;
          this.wheelExp.node.active = true;
          this.wheelExp.setAnimation(0, "ExtraBet_Declare_L", false);
          this.changeState(RunState.EXPANI);
          Stone2Def.palyAudio(Stone2Def.audio.EXP);
          this.spine_exp.setAnimation(0, "fire", false);
          this.spine_exp.addAnimation(0, "idle", true);
          var spine = this.node_exp.getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation", false);
          this.node_expTip.scale = v3(0, 0, 1);
          tween(this.node_expTip).to(0.3, {
            scale: v3(0.6, 0.6, 1)
          }).to(0.1, {
            scale: v3(0.5, 0.5, 1)
          }).start();
          this.spine_betUp.node.active = true;
          this.spine_betUp.setAnimation(0, "animation", false);
          this.spine_betUp.setCompleteListener(function () {
            _this4.spine_betUp.setCompleteListener(null);
            _this4.spine_betUp.node.active = false;
            _this4.img_betUp.spriteFrame = _this4.betUpSpriteFrames[1];
          });

          // for (let i = 0; i < 9; i++) {
          //     let result = Math.floor(i / 3) + 5;
          //     showspine(i, result);
          // }

          var aniNames = ["10x_intro", "15x_intro", "NearWin"];
          var _loop2 = function _loop2(i) {
            var node = instantiate(_this4.sprite_winNx.node);
            node.getComponent(Sprite).spriteFrame = _this4.multipleSpriteFrames[4 + i];
            _this4.node.addChild(node);
            var x = Math.random() * 100;
            node.active = true;
            node.getComponent(UIOpacity).opacity = 150;
            var y = Math.random() * 100;
            node.setPosition(-500 + x, -188 + y);
            node.scale = v3(0, 0, 1);
            _this4.multipleLine.hide(i);
            tween(node).delay(i * 0.2).call(function () {
              tween(node.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).bezierTo(0.4, v2(0, 400 - 170 * i), v2(100, 100 - 170 * i), v2(332, 190 - 170 * i)).call(function () {
              var index = i;
              var child = _this4.node_spineParent.getChildByName("spineNX" + (index + 1));
              if (child) {
                var action = aniNames[i];
                child.active = true;
                var _spine2 = child.getComponent(sp.Skeleton);
                if (i == 2) {
                  var skeletonData = _this4._useExp ? _this4.multiSpines[2] : _this4.multiSpines[1];
                  _spine2.skeletonData = skeletonData;
                  _spine2.setAnimation(0, action, false);
                } else {
                  var _skeletonData = _this4.multiSpines[0];
                  _spine2.skeletonData = _skeletonData;
                  _spine2.setAnimation(0, "boom", false);
                  _spine2.addAnimation(0, action, false);
                }
              }
            }).call(function () {
              node.destroyFromParent();
            }).start();
          };
          for (var i = 0; i < 3; i++) {
            _loop2(i);
          }
          this.scheduleOnce(function () {
            _this4.nbEffect.node.active = true;
            _this4.nbEffect.setAnimation(0, "intro", false);
            _this4.nbEffect.setCompleteListener(function () {
              _this4.nbEffect.setCompleteListener(null);
              _this4.nbEffect.node.active = false;
            });
            _this4.spine_mult.setAnimation(0, "idle", false);
          }, 0.3);
        };
        _proto.onClickExp = function onClickExp() {
          this._showExp = !this._showExp;
          Tween.stopAllByTarget(this.node_exp);
          if (this._showExp) {
            tween(this.node_exp).to(0.5, {
              position: v3(-170, this.node_exp.position.y)
            }, {
              easing: "backOut"
            }).start();
          } else {
            tween(this.node_exp).to(0.5, {
              position: v3(-400, this.node_exp.position.y)
            }).start();
          }
        };
        _proto.onClickExpHelp = function onClickExpHelp() {
          this.node_expTipHelp.active = !this.node_expTipHelp.active;
        };
        _proto.checkReady = function checkReady() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD || this._specialLock || this._bigWinLock) return false;
          return true;
        };
        _proto.preStart = function preStart() {
          this.onClickBg();
          if (!this.checkReady()) return;
          if (this._lock) return;
          var multiple = this._useExp ? 1.5 : 1;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold);
            this._auto = false;
            return;
          }
          this.updateGold(-this._bet * multiple);
          this.clear();
          this.sendBet();
          this._state = RunState.START;
          this.changeBtnActive(false);
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };
        _proto.onClickStart = function onClickStart() {
          this.preStart();
        };
        _proto.runStart = function runStart() {
          Stone2Def.palyAudio(Stone2Def.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(0);
          }
          this.multipleLine.run(0);
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolStone2.bet, {
              betAmount: this._bet + "",
              addition: this._useExp
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.reset();
          this.txt_spineWin.reset();
          StoneGame2Proxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          this.spine_winBg.node.active = false;
          this.spine_winLight.node.active = false;
          this.txt_wheelWin1.reset();
          this.txt_wheelWin2.reset();
          this.wheel.clear();
          this.bigWinBgClickIndex = 0;
          this._bigWinLock = false;
          Tween.stopAllByTarget(this.sprite_winNx.node);
          this.sprite_winNx.node.active = false;
          this.node_wheelMask.active = false;
        };
        _proto.showResult = function showResult() {
          if (!StoneGame2Proxy.result) {
            return;
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          if (StoneGame2Proxy.result.openResult.isTurntable) {
            this._specialLock = true;
          }
          var per = this._useExp ? 1.5 : 1;
          var odd = StoneGame2Proxy.result.prizeAmount / this._bet / per;
          if (odd >= 5) {
            this._bigWinLock = true;
          }
          if (StoneGame2Proxy.result.prizeAmount > 0 || StoneGame2Proxy.result.openResult.isTurntable) {
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
                this._bigWinLock = false;
                var per = this._useExp ? 1.5 : 1;
                var odd = StoneGame2Proxy.result.prizeAmount / this._bet / per;
                var aniname = "bigwin_intro";
                var count = 180;
                if (odd >= 25) {
                  aniname = "superwin_intro";
                  count = 540;
                  this._runTime = BIG_WIN_TIME3;
                } else if (odd >= 15) {
                  aniname = "megawin_intro";
                  count = 360;
                  this._runTime = BIG_WIN_TIME2;
                }
                // let rate = cc.game.getFrameRate();
                // count = Math.round((count * rate) / 60);
                count = GUtil.changeCurrency(count, DataManager.instance.currency, null);
                this.txt_bigwin.stepCount = count;
                this.txt_bigwin.string = Common.numFormat(StoneGame2Proxy.result.prizeAmount);
                this.sp_bigWin.setAnimation(0, aniname, false);
                this.sp_bigWin.setCompleteListener(function () {
                  _this5.sp_bigWin.setCompleteListener(null);
                  _this5.node_bigwin.active = false;
                  _this5.txt_bigwin.reset();
                });
                Stone2Def.palyAudio(Stone2Def.audio.BIGWIN, function (id) {
                  // let time = 12;
                  // if (odd >= 25) {
                  // } else if (odd >= 15) {
                  //     time = 7.3;
                  // } else {
                  //     time = 2.5;
                  // }
                  // this.scheduleOnce(() => {
                  //     AudioManager.instance.stopSound(id);
                  // }, time);

                  _this5._bigWinSoundId = id;
                });
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.showAward();
                break;
              }
            case RunState.STOP:
              {
                this.onClickStop();
                break;
              }
            case RunState.START:
              {
                this.onClickStart();
                break;
              }
            case RunState.AWARD_LINES:
              {
                this._state = RunState.AWARD_LINES;
                this._runTime = LINE_TIME;
                this.showSignleLine();
                break;
              }
            case RunState.EXPANI:
              {
                this._state = RunState.EXPANI;
                this._runTime = EXPANI_TIME;
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
          if (StoneGame2Proxy.result.prizeAmount > 0) {
            Stone2Def.palyAudio(Stone2Def.audio.AWARD1);
          }
          this.changeBtnActive(true);
          if (StoneGame2Proxy.result.openResult.isTurntable) {
            this.showLines();
            this.showWheelWin();
          } else if (StoneGame2Proxy.result.prizeAmount) {
            this.showLines();
            this.showWin();
            this.updateGold();
            this.txt_win.string = Common.numFormat(StoneGame2Proxy.result.prizeAmount);
          }
        };
        _proto.showWheelWin = function showWheelWin() {
          var _this6 = this;
          this.txt_wheelWin1.string = Common.ChangeMoneyShow(StoneGame2Proxy.result.prizeAmount - StoneGame2Proxy.result.openResult.turntablePrize.prizeAmount, 3);
          this.node_wheelWinBg.active = true;
          this.node_wheelWinBg.scale = v3(0, 0, 0);
          tween(this.node_wheelWinBg).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).call(function () {
            _this6.wheel.setData(StoneGame2Proxy.result.openResult.turntablePrize);
            _this6.node_wheelMask.active = true;
            Stone2Def.palyMusic(Stone2Def.audio.BG2);
          }).start();
        };
        _proto.showWheelWinEnd = function showWheelWinEnd() {
          var _this7 = this;
          var turntablePrize = StoneGame2Proxy.result.openResult.turntablePrize;
          this.txt_wheelWin2.string = Common.ChangeMoneyShow(turntablePrize.prizeAmount / turntablePrize.edgeMultipleList[turntablePrize.prizeIndex], 3);
          this.node_wheelMask.active = false;
          var delayTime = 1;
          if (this._useExp) {
            var index = Stone2Def.getMultipleIndex(turntablePrize.edgeMultipleList[turntablePrize.prizeIndex]);
            if (index > 0) {
              delayTime = 3;
              var node = instantiate(this.sprite_multiple.node);
              node.getComponent(Sprite).spriteFrame = this.frame_multiples[index];
              node.active = true;
              node.parent = this.sprite_multiple.node.parent;
              // this.node.addChild(node);

              Stone2Def.palyAudio(Stone2Def.audio.DOUBLE);
              tween(node).to(0.2, {
                scale: v3(2, 2, 1)
              }).delay(1).call(function () {
                Stone2Def.palyAudio(Stone2Def.audio.FLY);
              }).to(0.5, {
                position: v3(120, 30)
              }).call(function () {
                node.destroyFromParent();
                _this7.txt_wheelWin2.string = Common.ChangeMoneyShow(turntablePrize.prizeAmount, 3);
                Stone2Def.palyAudio(Stone2Def.audio.FLY_WIN);
              }).start();
            }
          }
          tween(this.node_wheelWinBg).delay(delayTime).call(function () {
            _this7.spine_winLight.node.active = true;
            _this7.spine_winLight.setAnimation(0, "intro", false);
            _this7.spine_winLight.setCompleteListener(function () {
              _this7.spine_winLight.setCompleteListener(null);
              _this7.spine_winLight.node.active = false;
              var per = _this7._useExp ? 1.5 : 1;
              var odd = StoneGame2Proxy.result.prizeAmount / _this7._bet / per;
              if (odd >= 5) {
                _this7.changeState(RunState.BIG_WIN);
              }
            });
            var child = _this7.node_spineParent.getChildByName("spineNX2");
            if (child) {
              _this7.multipleLine.hide(1);
              var _index = StoneGame2Proxy.result.openResult.multiples[1];
              var spine = child.getComponent(sp.Skeleton);
              child.active = true;
              if (_index == -1) {
                var data = _this7._useExp ? _this7.multiSpines[2] : _this7.multiSpines[1];
                spine.skeletonData = data;
                // let action = `${index}x_idle`;
                spine.setAnimation(0, "Win", true);
              }
            }
          }).delay(1).to(0.2, {
            scale: v3(0, 0, 1)
          }).call(function () {
            _this7._specialLock = false;
            _this7.wheel.clear();
            _this7.txt_win.string = Common.numFormat(StoneGame2Proxy.result.prizeAmount);
            _this7.updateGold();
            Stone2Def.palyMusic(Stone2Def.audio.BG);
          }).start();
        };
        _proto.showWin = function showWin() {
          var _this8 = this;
          this.spine_winBg.node.active = true;
          this.spine_winBg.setAnimation(0, "intro", false);
          this.spine_winBg.addAnimation(0, "picture", true);
          var prizeAmount = StoneGame2Proxy.result.prizeAmount / StoneGame2Proxy.result.openResult.multiples[1];
          prizeAmount = GUtil.changeCurrency(prizeAmount, DataManager.instance.currency, null);
          this.txt_spineWin.string = prizeAmount + "";
          this.spine_winBg.setCompleteListener(function () {
            _this8.spine_winBg.setCompleteListener(null);
            if (StoneGame2Proxy.result.openResult.multiples[1] > 1) {
              Stone2Def.palyAudio(Stone2Def.audio.AWARD1);
              _this8.sprite_winNx.node.active = true;
              _this8.sprite_winNx.node.setPosition(332, _this8.sprite_winNx.node.position.y);
              _this8.sprite_winNx.node.getComponent(UIOpacity).opacity = 150;
              tween(_this8.sprite_winNx.node).to(0.5, {
                position: v3(0, _this8.sprite_winNx.node.position.y)
              }).call(function () {
                var cprizeAmount = GUtil.changeCurrency(StoneGame2Proxy.result.prizeAmount, DataManager.instance.currency, null);
                _this8.txt_spineWin.string = "" + cprizeAmount;
                _this8.sprite_winNx.node.active = false;
                _this8.spine_winLight.node.active = true;
                _this8.spine_winLight.setAnimation(0, "intro", false);
                _this8.spine_winLight.setCompleteListener(function () {
                  _this8.spine_winLight.setCompleteListener(null);
                  _this8.scheduleOnce(function () {
                    _this8.spine_winBg.node.active = false;
                  }, 1);
                  _this8.spine_winLight.node.active = false;
                  var per = _this8._useExp ? 1.5 : 1;
                  var odd = StoneGame2Proxy.result.prizeAmount / _this8._bet / per;
                  if (odd >= 5) {
                    _this8.changeState(RunState.BIG_WIN);
                  }

                  //                            // if()
                });
              }).start();
            } else {
              _this8.scheduleOnce(function () {
                _this8.spine_winBg.node.active = false;
                if (_this8._bigWinLock) {
                  _this8.changeState(RunState.BIG_WIN);
                }
              }, 1);
            }
          });
        };
        _proto.showLines = function showLines() {
          var _StoneGame2Proxy$resu;
          var prizeIdx = (_StoneGame2Proxy$resu = StoneGame2Proxy.result) == null ? void 0 : _StoneGame2Proxy$resu.prizeIdx;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = StoneGame2Proxy.result.openResult.OpenNums;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var i = 0; i < prizeIdx.length; i++) {
            var lines = prizeIdx[i];
            for (var j = 0; j < lines.length; j++) {
              var key = lines[j];
              var result = OpenNums[key] - 1;
              this.showSpine(key, result);
            }
          }
          var child = this.node_spineParent.getChildByName("spineNX2");
          if (child) {
            this.multipleLine.hide(1);
            var spine = child.getComponent(sp.Skeleton);
            child.active = true;
            var index = StoneGame2Proxy.result.openResult.multiples[1];
            if (index == -1) {
              var data = this._useExp ? this.multiSpines[2] : this.multiSpines[1];
              spine.skeletonData = data;
              // let action = `${index}x_idle`;
              spine.setAnimation(0, "Idle", true);
            } else {
              spine.skeletonData = this.multiSpines[0];
              var action = index + "x_idle";
              spine.setAnimation(0, action, true);
            }
          }
          this.spine_mult.setAnimation(0, "idle", true);
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {};
        _proto.hideLines = function hideLines() {
          //        // for (let lines of this.lines) {
          //        //     for (let node of lines) {
          //        //         node.active = false;
          //        //     }
          //        // }
        };
        _proto.onClickBigWin = function onClickBigWin() {
          // this.sp_bigWin.setCompleteListener(null);
          // this.node_bigwin.active = false;
          // this.changeState(RunState.NORMAL);
          // this.changeBtnActive(true);

          this.bigWinBgClickIndex++;
          if (this.bigWinBgClickIndex == 1) {
            var prizeAmount = GUtil.changeCurrency(StoneGame2Proxy.result.prizeAmount, DataManager.instance.currency, null);
            this.txt_bigwin.reset(prizeAmount);
          } else {
            // AudioManager.instance.stopSound(this._bigWinSoundId);
            // this.node_bigwin.active = false;
            // this.txt_bigwin.reset();
            // this.changeBtnActive(true);
            // AudioManager.instance.resumeMusic();
            this._runTime = 0;
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _this9 = this;
          if (!StoneGame2Proxy.result) {
            return;
          }
          if (this._state == RunState.START) {
            if (this._runTime > 1) {
              this._runTime -= 1;
              return;
            }
          } else {
            return;
          }
          if (this._lock) {
            return;
          }
          this._lock = true;
          this._state = RunState.STOP;
          this._runTime = STOP_TIME;
          var nums = StoneGame2Proxy.result.openResult.OpenNums;
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
          var multiples = StoneGame2Proxy.result.openResult.multiples;
          var arr = [];
          for (var _iterator5 = _createForOfIteratorHelperLoose(multiples), _step5; !(_step5 = _iterator5()).done;) {
            var _i = _step5.value;
            if (_i < 0) {
              if (this._useExp) {
                arr.push(6);
              } else {
                arr.push(7);
              }
            } else if (_i <= 3) {
              arr.push(_i - 1);
            } else {
              var t = Math.floor(_i / 5);
              t = t + 2;
              arr.push(t);
            }
          }
          this.sprite_winNx.spriteFrame = this.multipleSpriteFrames[arr[1]];
          Stone2Def.palyAudio(Stone2Def.audio.END);
          var hasGem = false;
          for (var _iterator6 = _createForOfIteratorHelperLoose(StoneGame2Proxy.result.prizeInfo), _step6; !(_step6 = _iterator6()).done;) {
            var _i2 = _step6.value;
            var PrizeNum = JSON.parse(_i2.PrizeNum);
            if (PrizeNum.Symbol > 5) {
              hasGem = true;
              break;
            }
          }
          var end = function end() {
            _this9.nbEffect.node.active = false;
            _this9.multipleLine.showResult(arr);
            // this.scheduleOnce(() => {
            //     this._lock = false;
            //     this.showResult();
            // }, 0.4);
          };

          if (hasGem) {
            this._runTime = STOP_TIME + 2;
            this.nbEffect.node.active = true;
            this.nbEffect.setAnimation(0, "quick", true);
            this.scheduleOnce(function () {
              end();
            }, 2);
          } else {
            this.scheduleOnce(function () {
              end();
            }, this._runDelay * 3);
          }
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          var button = this.node_start.getComponent(Button);
          button.interactable = b;
        }
        // updateNotice(dt: number) {
        //     this.notice_title.setPosition(this.notice_title.position.x - 1, this.notice_title.position.y);
        //     if (this.notice_title.getPosition().x < -this.notice_title.getComponent(cc.UITransform).width - 500) {
        //         this.changeNotice();
        //     }
        // }
        // changeNotice() {
        //     this.noticeIndex++;
        //     if (this.noticeIndex >= this.noticeFrames.length) {
        //         this.noticeIndex = 0;
        //     }
        //     this.notice_title.getComponent(cc.Sprite).spriteFrame = this.noticeFrames[this.noticeIndex];
        //     this.notice_title.setPosition(400, this.notice_title.position.y);
        // }
        ;

        _proto.showLogo = function showLogo() {
          this.node_logo.active = true;
          this.notice_title.active = false;
          this._logoTime = 2;
          var UIopacity = this.node_logo.getComponent(UIOpacity);
          UIopacity.opacity = 0;
          tween(UIopacity).to(0.8, {
            opacity: 255
          }).start();
        };
        _proto.updateNotice = function updateNotice(dt) {
          if (this.node_logo.active) {
            this._logoTime -= dt;
            if (this._logoTime < 0) {
              this.node_logo.active = false;
              this.notice_title.active = true;
              this.changeNotice();
            }
          } else {
            this.notice_title.setPosition(this.notice_title.position.x - 3, this.notice_title.position.y);
            if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width - 500) {
              this.changeNotice();
            }
          }
        };
        _proto.changeNotice = function changeNotice() {
          var _this10 = this;
          this.noticeIndex++;
          if (this.noticeIndex >= this.noticeFrames.length) {
            this.noticeIndex = 0;
          }
          if (this.noticeIndex % 3 == 0) {
            this.showLogo();
          }
          I18nLocal.getLocalRes(StoneGame2Proxy.BUNDLE, this.noticeFrames[this.noticeIndex].name).then(function (sprFrame) {
            _this10.notice_title.getComponent(Sprite).spriteFrame = sprFrame;
          });
          this.notice_title.setPosition(400, this.notice_title.position.y);
        };
        _proto.update = function update(dt) {
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (StoneGame2Proxy.result) {
                    this.changeState(RunState.STOP);
                  } else {
                    this._runTime = RUN_TIME;
                    this._errCount++;
                    if (this._errCount === 4) {
                      // 等待超时不代表下注失败；保留原请求，禁止重新发送扣款请求。
                      Common.showTip(i18n.lang.betResultUnknown);
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
                  this.changeState(RunState.NORMAL);
                  this.changeBtnActive(true);
                }
                break;
              }
            case RunState.BIG_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  // this._state = RunState.AWARD;

                  AudioManager.instance.stopSound(this._bigWinSoundId);
                  this.node_bigwin.active = false;
                  this.txt_bigwin.reset();
                  this._state = RunState.AWARD;
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._auto) {
                  this.onClickStart();
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
            case RunState.EXPANI:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
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
        };
        return Stone2Room;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardSpriteFrames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "multiSpines", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "multipleSpriteFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "aniLines", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "multipleLine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_exp", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_expTip", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "spine_exp", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "noticeFrames", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_betSelect", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "spine_betUp", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "img_betUp", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "betUpSpriteFrames", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "pre_bet", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_expTipHelp", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "spine_mult", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "txt_spineWin", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "spine_winBg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "spine_winLight", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "sprite_winNx", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "nbEffect", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_logo", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_setting", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "wheel", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "wheelExp", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "node_wheelWinBg", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "txt_wheelWin1", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "txt_wheelWin2", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "sprite_multiple", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "frame_multiples", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "node_wheelMask", [_dec46], {
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

System.register("chunks:///_virtual/Stone2Scene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './Stone2Def.ts', './Stone2Proxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, ConfigManager, EventManager, NetManager, ViewManager, Common, Stone2Def, StoneGame2Proxy;
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
      Stone2Def = module.Stone2Def;
    }, function (module) {
      StoneGame2Proxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cf2954ySKJCrbu++qfEvKnS", "Stone2Scene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var Stone2Scene = exports('default', (_dec = ccclass("Stone2Scene"), _dec2 = menu("game/StoneGame2/Stone2Scene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2Scene, _Component);
        function Stone2Scene() {
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
        var _proto = Stone2Scene.prototype;
        _proto.onLoad = function onLoad() {
          Stone2Def.init();
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
        };
        _proto.init = function init() {
          this.reset();
          Stone2Def.palyMusic(Stone2Def.audio.BG);
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
          StoneGame2Proxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolStone2.betList, {});
        };
        _proto.onDisable = function onDisable() {
          StoneGame2Proxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return Stone2Scene;
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

System.register("chunks:///_virtual/Stone2Wheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './Stone2Proxy.ts', './ProxyMgr.ts', './Stone2Def.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, SpriteFrame, Sprite, Label, sp, Component, tween, v3, Common, StoneGame2Proxy, StoneGame2Event, ProxyMgr, Stone2Def;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Label = module.Label;
      sp = module.sp;
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      StoneGame2Proxy = module.default;
      StoneGame2Event = module.StoneGame2Event;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      Stone2Def = module.Stone2Def;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "c9071JeDKhBL5lBXgyAmI6Q", "Stone2Wheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var State = {
        NORMAL: 0,
        CHECK: 1,
        SPEEDUP: 2,
        END: 3
      };
      var Stone2Wheel = exports('default', (_dec = ccclass("Stone2Wheel"), _dec2 = menu("game/StoneGame2/Stone2Wheel"), _dec3 = property(SpriteFrame), _dec4 = property(Sprite), _dec5 = property(Label), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Stone2Wheel, _Component);
        function Stone2Wheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "multFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_mults", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_mults", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_wheel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bottom", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_top", _descriptor6, _assertThisInitialized(_this));
          _this._speed = 5;
          _this._angle = 0;
          _this._data = void 0;
          _this._useExp = false;
          _this._count = 0;
          _this._state = State.NORMAL;
          _this.boneList = ["Bottom1_EX", "Bottom2_EX", "Bottom3_EX", "Bottom4_EX", "Bottom5_EX", "Bottom6_EX", "Bottom7_EX", "Bottom8_EX", "Bottom9_EX", "Bottom10_EX", "Bottom11_EX", "Bottom12_EX"];
          _this.bgList = ["wheel_BG_None", "wheel_BG_highpay"];
          return _this;
        }
        var _proto = Stone2Wheel.prototype;
        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          this.spine_wheel.setAnimation(0, "End", false);
          this.spine_bottom.setAnimation(0, "End", false);
          this.spine_top.setAnimation(0, "End", false);
          this.spine_wheel.setCompleteListener(function () {
            _this2.spine_wheel.setCompleteListener(null);
            _this2.node.setSiblingIndex(4);
            _this2.spine_wheel.node.angle = 0;
            _this2._angle = 0;
            _this2.node.setPosition(0, _this2.node.position.y);
            _this2.spine_wheel.setAnimation(0, "Declare", false);
            _this2.spine_bottom.setAnimation(0, "Declare", false);
            _this2.spine_top.setAnimation(0, "Declare", false);
            _this2._state = State.CHECK;
            _this2.spine_wheel.setCompleteListener(function () {
              _this2.spine_wheel.setCompleteListener(null);
              var delay = 0;
              if (_this2._useExp) {
                var _loop = function _loop(i) {
                  _this2.scheduleOnce(function () {
                    var per = data.edgeMultipleList[i];
                    if (per > 1) {
                      _this2.sprite_mults[i].node.active = true;
                      var index = per % 5;
                      var b = Math.floor(per / 5);
                      if (b > 0) {
                        index += b + 3;
                      }
                      index -= 1;
                      _this2.sprite_mults[i].spriteFrame = _this2.multFrames[index];
                      _this2.spine_wheel.setAttachment(_this2.boneList[i], _this2.bgList[1]);
                      tween(_this2.sprite_mults[i].node).to(0.1, {
                        scale: v3(1.5, 1.5, 1)
                      }).delay(0.1).to(0.1, {
                        scale: v3(1, 1, 1)
                      }).start();
                      Stone2Def.palyAudio(Stone2Def.audio.WHEEL_UP);
                    } else {
                      _this2.sprite_mults[i].node.active = false;
                    }
                  }, i * 0.2);
                  delay += 0.2;
                };
                for (var i = 0; i < 12; i++) {
                  _loop(i);
                }
              }
              _this2.scheduleOnce(function () {
                _this2._speed = 200;
                _this2._state = State.SPEEDUP;
                _this2.scheduleOnce(function () {
                  _this2._state = State.END;
                  Stone2Def.palyAudio(Stone2Def.audio.WHEEL_END);
                }, 4);
                _this2.spine_top.setAnimation(0, "Spin_Loop", true);
                Stone2Def.palyAudio(Stone2Def.audio.WHEEL_START);
              }, 1 + delay);
            });
          });
        };
        _proto.onLoad = function onLoad() {
          StoneGame2Proxy.on(StoneGame2Event.SELECT_BET, this.onSelect, this);
          for (var i = 0; i < 12; i++) {
            this.sprite_mults[i].node.active = false;
          }
        };
        _proto.onSelect = function onSelect(count) {
          this._count = count;
          for (var i = 0; i < 12; i++) {
            this.txt_mults[i].string = Common.ChangeMoneyShow(count * Stone2Def.innerMultiples[i], 3);
          }
        };
        _proto.moveToEnd = function moveToEnd() {
          var _this3 = this;
          // cc.tween(this.spine_wheel.node)
          //     .to(1, { angle: this._data.prizeIndex * 30 - 360 })
          //     .delay(1)
          //     .call(() => {
          //         this._angle = this._data.prizeIndex * 30 - 360;
          //         this.spine_wheel.setAnimation(0, "Win1", false);
          //         this.spine_bottom.setAnimation(0, "Win1", false);
          //         this.spine_top.setAnimation(0, "Win1", false);
          //         this.spine_wheel.setCompleteListener(() => {
          //             this.spine_wheel.setCompleteListener(null);

          //             this.spine_wheel.setAnimation(0, "Idle", false);
          //             this.spine_bottom.setAnimation(0, "Idle", false);
          //             this.spine_top.setAnimation(0, "Idle", false);
          //             this.node_mask.active = false;
          //             this.node.setSiblingIndex(1);

          //             this.node.setPosition(-564, this.node.position.y);

          //             StoneGame2Proxy.emit(StoneGame2Event.WHEEL_END);

          //             this._speed = 5;
          //             this._state = State.CHECK;
          //         });
          //     })
          //     .start();

          this._angle = this._data.prizeIndex * 30 - 360;
          this.spine_wheel.setAnimation(0, "Win1", false);
          this.spine_bottom.setAnimation(0, "Win1", false);
          this.spine_top.setAnimation(0, "Win1", false);
          this.spine_wheel.setCompleteListener(function () {
            _this3.spine_wheel.setCompleteListener(null);
            _this3.spine_wheel.setAnimation(0, "Reset_L", false);
            _this3.spine_wheel.addAnimation(0, "Idle", false);
            _this3.spine_bottom.setAnimation(0, "Reset_L", false);
            _this3.spine_bottom.addAnimation(0, "Idle", false);
            _this3.spine_top.setAnimation(0, "Reset_L", false);
            _this3.spine_top.addAnimation(0, "Idle", false);
            _this3.node.setSiblingIndex(1);
            _this3.node.setPosition(-564, _this3.node.position.y);
            StoneGame2Proxy.emit(StoneGame2Event.WHEEL_END);
            _this3._speed = 5;
            _this3._state = State.CHECK;
            _this3.showWin();
          });
        };
        _proto.showWin = function showWin() {
          this.spine_top.setAnimation(0, "Win_Loop", true);
        };
        _proto.clear = function clear() {
          for (var i = 0; i < 12; i++) {
            this.sprite_mults[i].node.active = false;
            this.spine_wheel.setAttachment(this.boneList[i], this.bgList[0]);
          }
          this._state = State.NORMAL;
          this.spine_top.setAnimation(0, "Idle", false);
        };
        _proto.update = function update(dt) {
          if (this._state != State.CHECK) {
            this._angle -= dt * this._speed;
            this.spine_wheel.node.angle = this._angle % 360;
            if (this._state == State.SPEEDUP) {
              this._speed += 2;
            }
            if (this._state == State.END) {
              if (this._speed > 100) {
                this._speed--;
              }
              // let angle = (this._angle - 90) % 360;
              if (Math.abs(this.spine_wheel.node.angle + this._data.prizeIndex * 30) < 10) {
                this._state = State.CHECK;
                this.spine_wheel.node.angle = this._data.prizeIndex * 30 - 360;
                this.moveToEnd();
              }
            }
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        _createClass(Stone2Wheel, [{
          key: "exp",
          set: function set(exp) {
            this._useExp = exp;
          }
        }]);
        return Stone2Wheel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "multFrames", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_mults", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_mults", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spine_wheel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spine_bottom", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spine_top", [_dec8], {
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

System.register("chunks:///_virtual/StoneGame2", ['./Stone2BetItem.ts', './Stone2CardAni.ts', './Stone2Def.ts', './Stone2Help.ts', './Stone2Proxy.ts', './Stone2Room.ts', './Stone2Scene.ts', './Stone2Wheel.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/StoneGame2', 'chunks:///_virtual/StoneGame2'); 
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