System.register("chunks:///_virtual/XyBonusLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './XyDef.ts', './XygameProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, v3, tween, instantiate, Component, Common, XyDef, XyGameProxy, XyGameEvent;
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
      Label = module.Label;
      Node = module.Node;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      XyDef = module.XyDef;
    }, function (module) {
      XyGameProxy = module.default;
      XyGameEvent = module.XyGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "1ab59Ir+NhLgK/hT2KCuDyJ", "XyBonusLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RUN_TIME = 15;
      var XyBonusLayer = exports('default', (_dec = ccclass("XyBonusLayer"), _dec2 = menu("game/xygame/XyBonusLayer"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyBonusLayer, _Component);
        function XyBonusLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_time", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_tip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_total", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_total", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor6, _assertThisInitialized(_this));
          _this.timeIndex = RUN_TIME;
          _this._data = [];
          _this.selectIndex = 0;
          _this._totalWin = 0;
          return _this;
        }
        var _proto = XyBonusLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.schedule(this.updateTime, 1);
        };
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.updateTime = function updateTime() {
          this.timeIndex--;
          if (this.timeIndex < 0) {
            this.timeIndex = 0;
          }
          this.txt_time.string = this.timeIndex + " S";
          if (this.timeIndex <= 0) {
            //            // this._totalWin = 0;
            //            // for (let i of this._data) {
            //            //     this._totalWin += i;
            //            // }
            //            // this.txt_win.string = Common.numFormat(this._totalWin);
            //            // this.end();

            while (this.selectIndex < this._data.length) {
              for (var _iterator = _createForOfIteratorHelperLoose(this.btns), _step; !(_step = _iterator()).done;) {
                var i = _step.value;
                if (i.active) {
                  this.showAction(i);
                  break;
                }
              }
            }
          }
        };
        _proto.end = function end() {
          var _this2 = this;
          this.unschedule(this.updateTime);
          this.txt_total.string = this.txt_win.string;
          this.node_total.active = true;
          this.node_total.scale = v3(0, 0, 1);
          tween(this.node_total).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          this.scheduleOnce(function () {
            _this2.node.removeFromParent();
            _this2.node.destroy();
            XyGameProxy.emit(XyGameEvent.CLOSE_BONUS);
          }, 1);
        };
        _proto.showAction = function showAction(btnNode) {
          btnNode.active = false;
          if (this._data[this.selectIndex]) {
            var node = instantiate(this.node_tip);
            node.active = true;
            node.position = btnNode.position;
            node.parent = btnNode.parent;
            node.getComponent(Label).string = Common.numFormat(this._data[this.selectIndex]);
            tween(node).to(0.5, {
              position: v3(node.position.x, node.getPosition().y + 100)
            }).removeSelf().start();
            this._totalWin += this._data[this.selectIndex];
            this.txt_win.string = Common.numFormat(this._totalWin);
          } else {
            return;
          }
          this.selectIndex++;
          if (this.selectIndex >= this._data.length) {
            this.end();
          }
        };
        _proto.onClickSelect = function onClickSelect(sender) {
          XyDef.palyAudio(XyDef.audio.CLICK2);
          this.showAction(sender.target);
        };
        return XyBonusLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_tip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_total", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_total", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec8], {
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

System.register("chunks:///_virtual/XyCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, v3, tween, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "359f1nY6MNKhJ3cPI1gEqkh", "XyCardAni", undefined);
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
      var XyCardAni = exports('default', (_dec = ccclass("XyCardAni"), _dec2 = menu("game/xygame/XyCardAni"), _dec3 = property([Sprite]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyCardAni, _Component);
        function XyCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "runningCard", _descriptor, _assertThisInitialized(_this));
          _this.stepHeight = 155;
          //数字高度
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
          _this.endIndex = 0;
          _this.fixStep = void 0;
          _this._index = 0;
          _this.cards = void 0;
          return _this;
        }
        var _proto = XyCardAni.prototype;
        _proto.onLoad = function onLoad() {
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
          this.cards = data.cards;
          for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.node.scale = v3(0.9, 0.9, 1);
            this.randCard(i);
          }
        };
        _proto.start = function start() {};
        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
        }
        //    /**
        //     * 根据位置转换悟空 金蝉
        //     * @param cardNum
        //     * @returns
        //     */
        ;

        _proto.changeCardNumByIndex = function changeCardNumByIndex(cardNum) {
          var result = cardNum;
          if (this._index == 1) {
            if (cardNum == 14) {
              result = 12;
            } else if (cardNum == 13) {
              cardNum = 11;
            }
          } else if (this._index == 3) {
            if (cardNum == 12) {
              result = 14;
            } else if (cardNum == 13) {
              cardNum = 11;
            }
          } else {
            //            //其他条线不出现悟空 金蝉
            if (cardNum == 12 || cardNum == 14) {
              result = result - 1;
            }
          }
          return result;
        };
        _proto.randCard = function randCard(node) {
          var rand = Math.floor(Math.random() * 15);
          rand = this.changeCardNumByIndex(rand);
          node.spriteFrame = this.cards[rand];
        };
        _proto.resultCard = function resultCard(node) {
          if (this.leftResultCount > 0) {
            this.leftResultCount--;
            var result = this.changeCardNumByIndex(this.result[this.leftResultCount]);
            node.spriteFrame = this.cards[result];
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
        };
        _proto.hide = function hide(i) {
          var index = this.endIndex + i - 2;
          if (index < 0) {
            index = 5 + index;
          }
          this.runningCard[index].node.active = false;
        };
        _proto.run = function run(delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.show();
          this.delayTime = delayTime;
          this.moveStep = 50; //每帧移动步长
          this._state = CardState.DELAY;
          this.leftResultCount = 3;
          this.endNode = null;
        };
        _proto.update = function update(dt) {
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
                this.moveStep -= 1;
                if (this.moveStep < 20) {
                  this.moveStep = 20;
                }
                var _length = this.runningCard.length;
                for (var _i = 0; _i < _length; _i++) {
                  var _node = this.runningCard[_i].node;
                  _node.setPosition(0, _node.getPosition().y - this.moveStep);
                  if (_node.getPosition().y < -(this.stepHeight + this.moveOut)) {
                    _node.setPosition(0, _node.getPosition().y + this.stepHeight * CARDCOUNT);
                    this.resultCard(this.runningCard[_i]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i;
                    }
                  }
                  if (_node == this.endNode && _node.getPosition().y <= -this.stepHeight - 5) {
                    this._state = CardState.END;
                    this.fixStep = _node.getPosition().y + this.stepHeight;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                for (var _i2 = 0; _i2 < _length2; _i2++) {
                  var _node2 = this.runningCard[_i2].node;
                  var toY = _node2.getPosition().y - this.fixStep;
                  tween(_node2).to(0.1, {
                    position: v3(_node2.position.x, toY)
                  }).start();
                }
                this._state = CardState.NORMAL;
                break;
              }
          }
        };
        return XyCardAni;
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

System.register("chunks:///_virtual/XyDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './XygameProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, XyGameProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      XyGameProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48dfdkI3X5D4LO5P+DbwlBp", "XyDef", undefined);
      var XyDef = exports('XyDef', /*#__PURE__*/function () {
        function XyDef() {}
        XyDef.palyAudio = function palyAudio(name) {
          var bundle = XyGameProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playSound(audio);
          });
        };
        XyDef.palyMusic = function palyMusic(name) {
          var bundle = XyGameProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        XyDef.init = function init() {
          this.genarateRateLine(this.rates[0], this.rates[0], 50);
          this.genarateRateLine(this.rates[1], this.rates[1], 51, true);
          this.genarateRateLine(this.rates[2], this.rates[2], 48);
          this.genarateRateLine(this.rates[3], this.rates[3], 48, true);
          this.genarateRateLine(this.rates[4], this.rates[4], 25);
        };
        XyDef.genarateRateLine = function genarateRateLine(rates, config, count, wild) {
          if (wild === void 0) {
            wild = false;
          }
          var t = wild ? 3 : 1;
          for (var i = 0; i < config.length - 2; i++) {
            rates[i] = config[i] - count;
          }
          rates[12] = Math.round(count / t);
        };
        XyDef.getRand = function getRand(i) {
          //        // let rates = this.rates[i];
          //        // let alllength = 0;
          //        // for (let i of rates) {
          //        //     alllength += i;
          //        // }

          //        // let rand = Math.round(Math.random() * alllength);
          //        // for (let i = rates.length - 1; i >= 0; i--) {
          //        //     let left = rates[i];
          //        //     if (alllength - rand < left) {
          //        //         return i;
          //        //     }
          //        //     alllength -= left;
          //        // }

          return Math.floor(Math.random() * this.cardlines[i].length);
        };
        XyDef.randRusult = function randRusult(amount) {
          if (this.tryFreeCount > 0) {
            this.tryFreeCount--;
          } else {
            this.tryGold -= amount * 20;
          }
          var openNums = [];
          for (var i = 0; i < 5; i++) {
            openNums[i] = this.cardlines[i][this.getRand(i)];
            openNums[i + 5] = this.cardlines[i][this.getRand(i)];
            openNums[i + 10] = this.cardlines[i][this.getRand(i)];
          }
          var jackPotCount = 0;
          for (var _i = 0; _i < 15; _i++) {
            if (openNums[_i] == 13) {
              jackPotCount++;
            }
          }
          while (jackPotCount >= 3) {
            for (var _i2 = 0; _i2 < 5; _i2++) {
              openNums[_i2] = this.cardlines[_i2][this.getRand(_i2)];
              openNums[_i2 + 5] = this.cardlines[_i2][this.getRand(_i2)];
              openNums[_i2 + 10] = this.cardlines[_i2][this.getRand(_i2)];
            }
            jackPotCount = 0;
            for (var _i3 = 0; _i3 < 15; _i3++) {
              if (openNums[_i3] == 13) {
                jackPotCount++;
              }
            }
          }
          //        // openNums = [11, 13, 6, 8, 2, 10, 3, 8, 4, 1, 6, 5, 7, 1, 2];

          var bonusCount = 0;
          var freeCount = 0;
          for (var _i4 = 0, _openNums = openNums; _i4 < _openNums.length; _i4++) {
            var _i5 = _openNums[_i4];
            if (_i5 == 12) {
              bonusCount++;
            } else if (_i5 == 11) {
              freeCount++;
            }
          }
          var bonusAmount = [];
          var bonusPrize = false;
          var prizeAmount = 0;
          var _this$checkPrize = this.checkPrize(openNums),
            prizeInfo = _this$checkPrize.prizeInfo,
            lines = _this$checkPrize.lines;
          for (var _iterator = _createForOfIteratorHelperLoose(prizeInfo), _step; !(_step = _iterator()).done;) {
            var prize = _step.value;
            prizeAmount += prize.Odds * amount;
          }
          var freePrize = false;
          if (freeCount >= 3) {
            freePrize = true;
            freeCount += 2;
            this.tryFreeCount = freeCount;
          } else {
            freeCount = 0;
          }
          if (bonusCount >= 3) {
            bonusPrize = true;
            var bones = [15, 15, 15, 20, 25, 30];
            for (var _i6 = 0; _i6 < 3; _i6++) {
              var rand = bones[Math.floor(Math.random() * 6)];
              bonusAmount.push(rand * amount);
              prizeAmount += rand * amount;
            }
          }
          this.tryGold += prizeAmount;
          var result = {
            OpenNums: openNums,
            bonusPrize: bonusPrize,
            bonusAmount: bonusAmount,
            prizeInfo: prizeInfo,
            prizeAmount: prizeAmount,
            freeCount: this.tryFreeCount,
            freePrize: freePrize,
            prizeIdx: lines,
            jackPotAmount: 0,
            jackPotPrize: false
          };
          return result;
        };
        XyDef.checkPrize = function checkPrize(openNums) {
          var hasPrize = function hasPrize(result, PrizeType) {
            var prize = null;
            var count = 0;
            var start = result[count];
            while (start == 14 || start == 13) {
              count++;
              start = result[count];
            }
            count++;
            for (var i = count; i < 5; i++) {
              if (result[i] == start || result[i] == 13 || result[i] == 14) {
                count++;
              } else {
                break;
              }
            }
            if (XyDef.odds[start] && XyDef.odds[start][count]) {
              prize = {
                Odds: XyDef.odds[start][count],
                PrizeNum: "{\"Num\":" + count + ",\"Symbol\":" + start + "}",
                PrizeType: PrizeType
              };
            }
            return prize;
          };
          var prizeInfo = [];
          var lines = [];
          var special2 = false;
          if (openNums[1] == 13 || openNums[6] == 13 || openNums[11] == 13) {
            special2 = true;
          }
          var special4 = false;
          if (openNums[3] == 13 || openNums[8] == 13 || openNums[13] == 13) {
            special4 = true;
          }
          for (var i = 0; i < this.lines.length; i++) {
            var line = this.lines[i];
            var result = [];
            for (var _i7 = 0, len = line.length; _i7 < len; _i7++) {
              result[_i7] = openNums[line[_i7]];
              if (_i7 == 1 && special2 || _i7 == 3 && special4) {
                result[_i7] = 13;
              }
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
        return XyDef;
      }());
      XyDef.audio = {
        CLICK: "click2",
        CLICK2: "click3",
        AWARD1: "award",
        AWARD2: "award2",
        BG: "bg1",
        BG2: "bg2",
        END: "end",
        TURN: "turn",
        WILD: "wild",
        BIGWIN: "bigWin",
        JACKPOT: "jackpot"
      };
      XyDef.tryGold = 100000000;
      XyDef.tryFreeCount = 0;
      XyDef.odds = {
        1: {
          3: 5,
          4: 20,
          5: 50
        },
        2: {
          3: 5,
          4: 20,
          5: 50
        },
        3: {
          3: 5,
          4: 30,
          5: 150
        },
        4: {
          3: 5,
          4: 30,
          5: 150
        },
        5: {
          3: 10,
          4: 30,
          5: 150
        },
        6: {
          3: 20,
          4: 100,
          5: 250
        },
        7: {
          3: 20,
          4: 100,
          5: 250
        },
        8: {
          3: 30,
          4: 100,
          5: 400
        },
        9: {
          3: 30,
          4: 100,
          5: 400
        },
        10: {
          2: 2,
          3: 40,
          4: 200,
          5: 1000
        },
        11: {
          3: 40,
          4: 100,
          5: 200
        }
      };
      XyDef.rates = [[125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 20, 20], [125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 20, 20], [125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 20, 20], [125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 20, 20], [125, 125, 125, 125, 125, 125, 125, 125, 125, 125, 20, 20]];
      XyDef.lines = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [0, 6, 12, 8, 4], [10, 6, 2, 8, 14], [5, 1, 7, 3, 9], [5, 11, 7, 13, 9], [0, 6, 2, 8, 4], [10, 6, 12, 8, 14], [5, 1, 2, 3, 9], [5, 11, 12, 13, 9], [10, 11, 7, 13, 14], [0, 1, 7, 3, 4], [10, 6, 7, 8, 14], [0, 6, 7, 8, 4], [0, 11, 2, 13, 4], [10, 1, 12, 3, 14], [5, 6, 2, 8, 9], [5, 6, 12, 8, 9], [10, 11, 2, 13, 14]];
      XyDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XyDeskItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './XygameProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, tween, v3, Component, Common, XyGameProxy, XyGameEvent;
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
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      XyGameProxy = module.default;
      XyGameEvent = module.XyGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b9b0cv1WOZNsppqinj8n1kk", "XyDeskItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XyDeskItem = exports('default', (_dec = ccclass("XyDeskItem"), _dec2 = menu("game/xygame/XyDeskItem"), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyDeskItem, _Component);
        function XyDeskItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_score", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpot", _descriptor2, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = XyDeskItem.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          var _this2 = this;
          var randomTime = Math.random() * 2;
          var y = this.node.getPosition().y;
          this.scheduleOnce(function () {
            tween(_this2.node).repeatForever(tween(_this2.node).to(2, {
              position: v3(_this2.node.position.x, y + 10)
            }).to(2, {
              position: v3(_this2.node.position.x, y - 10)
            }).start()).start();
          }, randomTime);
        };
        _proto.setData = function setData(data) {
          this._data = data;
          if (data.score) {
            this.txt_score.string = Common.numFormat(data.score + "");
          }
          if (data.jackpot) {
            this.txt_jackpot.string = Common.numFormat(data.jackpot + "");
          }
        };
        _proto.onClick = function onClick() {
          var score = null;
          if (this._data) {
            score = this._data.score;
          }
          XyGameProxy.emit(XyGameEvent.ENTER_ROOM, score);
        };
        return XyDeskItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpot", [_dec4], {
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

System.register("chunks:///_virtual/XyGame", ['./XyBonusLayer.ts', './XyCardAni.ts', './XyDef.ts', './XyDeskItem.ts', './XyHall.ts', './XyHelp.ts', './XyRoom.ts', './XyScene.ts', './XygameProxy.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/XygameProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "91b4cRhxM9FKrPfXqCydP7F", "XygameProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var XyGameEvent = exports('XyGameEvent', /*#__PURE__*/function (XyGameEvent) {
        XyGameEvent["ENTER_ROOM"] = "enterRoom";
        XyGameEvent["LEAVE_ROOM"] = "leaveRoom";
        XyGameEvent["UPDATE_CONFIG"] = "updateConfig";
        XyGameEvent["UPDATE_BETLIST"] = "updateBetList";
        XyGameEvent["CLOSE_BONUS"] = "closeBonus";
        XyGameEvent["START"] = "start";
        return XyGameEvent;
      }({}));

      /**
       * xiyou数据代理
       */
      var XyGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(XyGameProxyMgr, _ProxyBase);
        function XyGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "XyGame";
          _this.wsEvents = [ConfigManager.ProtocolXy.getConfig, ConfigManager.ProtocolXy.bet, ConfigManager.ProtocolXy.betList, ConfigManager.ProtocolXy.jackpotList];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [];
          return _this;
        }
        var _proto = XyGameProxyMgr.prototype;
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
          // console.log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolXy.betList:
              {
                this.betList = data.Data;
                this.emit(XyGameEvent.UPDATE_BETLIST);
                break;
              }
            case ConfigManager.ProtocolXy.getConfig:
              {
                this.emit(XyGameEvent.UPDATE_CONFIG, data.Data);
                break;
              }
            case ConfigManager.ProtocolXy.bet:
              {
                this.result = data.Data;
                this.emit(XyGameEvent.START);
                break;
              }
            case ConfigManager.ProtocolXy.jackpotList:
              {
                this.jackpotList = data.Data;
                this.emit(XyGameEvent.UPDATE_BETLIST);
                break;
              }
          }
        };
        _createClass(XyGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return XyGameProxyMgr;
      }(ProxyBase);
      var XyGameProxy = exports('default', new XyGameProxyMgr("XyGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/XyHall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './XyDeskItem.ts', './XygameProxy.ts', './Common.ts', './NetManager.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component, ProxyMgr, XyDeskItem, XyGameProxy, XyGameEvent, Common, NetManager, MainManager;
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
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      XyDeskItem = module.default;
    }, function (module) {
      XyGameProxy = module.default;
      XyGameEvent = module.XyGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ffb61Vj1JxATo3iijbGDZt4", "XyHall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var XyHall = exports('default', (_dec = ccclass("XyHall"), _dec2 = menu("game/xygame/XyHall"), _dec3 = property(Node), _dec4 = property(XyDeskItem), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyHall, _Component);
        function XyHall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_desk", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "heroList", _descriptor2, _assertThisInitialized(_this));
          _this._configTime = 5;
          return _this;
        }
        var _proto = XyHall.prototype;
        _proto.onLoad = function onLoad() {
          XyGameProxy.on(XyGameEvent.UPDATE_BETLIST, this.initHeroList, this);
        };
        _proto.start = function start() {
          this.initHeroList();
        };
        _proto.initHeroList = function initHeroList() {
          for (var i = 1, len = this.heroList.length; i < len; i++) {
            var hero = this.heroList[i];
            var score = XyGameProxy.betList[i - 1];
            if (score) {
              var jackpot = XyGameProxy.jackpotList[score];
              hero.setData({
                index: i,
                score: score,
                jackpot: jackpot
              });
            }
          }
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, XyGameProxy.BUNDLE);
        };
        _proto.update = function update(dt) {
          this._configTime -= dt;
          if (this._configTime <= 0) {
            this._configTime = 5;
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.jackpotList);
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return XyHall;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_desk", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "heroList", [_dec4], {
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

System.register("chunks:///_virtual/XyHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "9e4ea9rUjdC5ZX6qxhH5evu", "XyHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var XyHelp = exports('default', (_dec = ccclass("XyHelp"), _dec2 = menu("game/xygame/XyHelp"), _dec3 = property(PageView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyHelp, _Component);
        function XyHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pageView", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = XyHelp.prototype;
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
        return XyHelp;
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

System.register("chunks:///_virtual/XyRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './DataManager.ts', './NetManager.ts', './AudioManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './XyBonusLayer.ts', './XyCardAni.ts', './XyDef.ts', './XygameProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, sp, Node, Label, RichText, Prefab, v2, v3, tween, instantiate, isValid, AudioClip, Component, UITransform, i18n, ProxyMgr, GUtil, DataManager, UserKey, NetManager, AudioManager, ViewManager, ScrollNumLabel, XyBonusLayer, XyCardAni, XyDef, XyGameProxy, XyGameEvent, Common, MainManager;
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
      RichText = module.RichText;
      Prefab = module.Prefab;
      v2 = module.v2;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      isValid = module.isValid;
      AudioClip = module.AudioClip;
      Component = module.Component;
      UITransform = module.UITransform;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      XyBonusLayer = module.default;
    }, function (module) {
      XyCardAni = module.default;
    }, function (module) {
      XyDef = module.XyDef;
    }, function (module) {
      XyGameProxy = module.default;
      XyGameEvent = module.XyGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "b24268qsnhFoq8Mw8HocjJn", "XyRoom", undefined);
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
        BONUS_AWARD: 5,
        BIG_WIN: 6,
        JACKPOT_WIN: 7
      };
      var RUN_TIME = 2.0;
      var STOP_TIME = 1;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME = 5;
      var LINE_TIME = 2;
      var XyRoom = exports('default', (_dec = ccclass("XyRoom"), _dec2 = menu("game/xygame/XyRoom"), _dec3 = property(SpriteFrame), _dec4 = property(sp.SkeletonData), _dec5 = property(XyCardAni), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(ScrollNumLabel), _dec11 = property(RichText), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(ScrollNumLabel), _dec15 = property(Node), _dec16 = property(Prefab), _dec17 = property(Node), _dec18 = property(sp.Skeleton), _dec19 = property(sp.Skeleton), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(Node), _dec29 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyRoom, _Component);
        function XyRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardSpriteFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_stop", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_use", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_linewin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_linewinBg", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpot", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lines", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_line", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_try", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bonusEnter", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_specials", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_free", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_free", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_fire", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_free", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_jackpot", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_jackpotWin", _descriptor27, _assertThisInitialized(_this));
          _this._runDelay = 0.2;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 1000;
          _this._auto = false;
          _this._try = false;
          _this.lines = [];
          _this._showLineIndex = 0;
          _this._hasSpecial2 = false;
          _this._hasSpecial4 = false;
          _this._errCount = 0;
          _this._configTime = 5;
          _this.rollingSoundId = null;
          _this.rollingSoundVersion = 0;
          return _this;
        }
        var _proto = XyRoom.prototype;
        _proto.onLoad = function onLoad() {
          this.setData(10000);
          this.hideSpine();
          this.hideSpecial();
          this.initEvent();
        };
        _proto.start = function start() {
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].setData({
              index: i,
              cards: this.cardSpriteFrames
            });
          }
          this.updateGold();
          this.initLines();
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.getConfig, {
            betAmount: this._bet + ""
          });
        };
        _proto.initLines = function initLines() {
          var _this2 = this;
          this.lines = [];
          var linepos = [v2(-390, 155), v2(-190, 155), v2(-0, 155), v2(190, 155), v2(390, 155), v2(-390, -0), v2(-190, -0), v2(-0, -0), v2(190, -0), v2(390, -0), v2(-390, -155), v2(-190, -155), v2(-0, -155), v2(190, -155), v2(390, -155)];
          var createNode = function createNode(start, end) {
            var node = instantiate(_this2.pre_line);
            _this2.node_lines.addChild(node);
            node.setPosition(start.x, start.y);
            node.getComponent(UITransform).anchorX = 0;
            var distance = GUtil.Distance(start.x, start.y, end.x, end.y);
            node.getComponent(UITransform).width = distance;
            node.angle = _this2.getAngle(start, end);
            node.active = false;
            return node;
          };
          for (var _iterator = _createForOfIteratorHelperLoose(XyDef.lines), _step; !(_step = _iterator()).done;) {
            var line = _step.value;
            var lines = [];
            var start = v2(-504, 26);
            for (var _iterator2 = _createForOfIteratorHelperLoose(line), _step2; !(_step2 = _iterator2()).done;) {
              var i = _step2.value;
              var pos = linepos[i];
              var _node = createNode(start, pos);
              lines.push(_node);
              start = pos;
            }
            var node = createNode(start, v2(504, 26));
            lines.push(node);
            this.lines.push(lines);
          }
        };
        _proto.hideSpecial = function hideSpecial() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_specials), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            i.active = false;
          }
        };
        _proto.showSpeCial = function showSpeCial(index) {
          XyDef.palyAudio(XyDef.audio.WILD);
          var node = this.node_specials[index];
          node.active = true;
          node.scale = v3(0, 0, 1);
          tween(node).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.hideSpine = function hideSpine() {
          var children = this.node_spineParent.children;
          for (var _iterator4 = _createForOfIteratorHelperLoose(children), _step4; !(_step4 = _iterator4()).done;) {
            var node = _step4.value;
            node.active = false;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.aniLines), _step5; !(_step5 = _iterator5()).done;) {
            var cardAni = _step5.value;
            cardAni.show();
          }
        };
        _proto.showSpine = function showSpine(index, result) {
          var child = this.node_spineParent.getChildByName("spine" + index);
          var name = "idle";
          if (result < 5) {
            var names = ["10", "J", "Q", "K", "A"];
            name = names[result];
          }
          result -= 4;
          if (result < 0) {
            result = 0;
          }
          if (child) {
            child.active = true;
            var spine = child.getComponent(sp.Skeleton);
            spine.skeletonData = this.spines[result];
            spine.setAnimation(0, name, true);
          }

          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
        };
        _proto.getAngle = function getAngle(start, end) {
          //        //根据朝向计算出夹角弧度

          var b = v2(end.x - start.x, end.y - start.y);
          var angle = v2(1, 0).signAngle(b);

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return degree;
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          XyGameProxy.on(XyGameEvent.UPDATE_CONFIG, this.updateConfig, this);
          XyGameProxy.on(XyGameEvent.CLOSE_BONUS, function () {
            XyDef.palyMusic(XyDef.audio.BG);
            _this3.checkAward();
          }, this);
          XyGameProxy.on(XyGameEvent.START, function () {
            _this3.runStart();
          }, this);
        };
        _proto.updateConfig = function updateConfig(data) {
          this.txt_jackpot.string = Common.numFormat(data.prizePool + "");
          if (data.freeCount > 0 && !this._try) {
            this.node_free.active = true;
            this.txt_free.string = "" + data.freeCount;
          }
        };
        _proto.setData = function setData(betAmount) {
          if (betAmount) {
            this._bet = betAmount;
            this.txt_bet.string = Common.numFormat(betAmount + "");
            this.txt_use.string = Common.ChangeMoneyShow(betAmount * 20, 2);
            this.node_try.active = false;
          } else {
            this.node_try.active = true;
            this.onClickTryGame();
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(XyDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          }
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("slotXy");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/XyHelp", XyGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          this.stopRollingSound();
          //        // NetManager.instance.sendOnlineData(ConfigManager.instance.protocolSd.exitRoom, { action: "HD_QuitTable" });
          XyGameProxy.emit(XyGameEvent.LEAVE_ROOM);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._try || this._auto || this.node_free.active) {
            return;
          }
          this._bet = XyGameProxy.changeBet(this._bet);
          this.txt_bet.string = Common.numFormat(this._bet + "");
          this.txt_use.string = Common.ChangeMoneyShow(this._bet * 20, 2);
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto() {
          //        // XyGameProxy.auto = !XyGameProxy.auto;
          this._auto = !this._auto;
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
        _proto.onClickStart = function onClickStart() {
          if (this._state == RunState.BONUS_AWARD) return;
          if (this._lock) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet * 20) {
            Common.showTip(i18n.lang.fishTip.gold);
            this._auto = false;
            return;
          }
          if (XyGameProxy.result && XyGameProxy.result.freeCount > 0) {
            this.updateGold(0);
          } else {
            this.updateGold(-this._bet * 20);
          }
          this.clear();
          this.changeBtnActive(false);
          this._state = RunState.START;
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
          this.sendBet();
        };
        _proto.runStart = function runStart() {
          this.playRollingSound();
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(i * this._runDelay);
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) {
            XyGameProxy.result = XyDef.randRusult(this._bet);
            this.runStart();
          } else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.bet, {
              betAmount: this._bet + ""
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.reset();
          XyGameProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this.hideSpecial();
          this._showLineIndex = 0;
          this.txt_linewin.string = "";
          this.node_linewinBg.active = false;
          this._hasSpecial2 = false;
          this._hasSpecial4 = false;
        };
        _proto.showResult = function showResult() {
          if (!XyGameProxy.result) {
            return;
          }
          if (XyGameProxy.result.bonusPrize) {
            this.changeState(RunState.BONUS_AWARD);
            return;
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          if (XyGameProxy.result.jackPotPrize) {
            this.changeState(RunState.JACKPOT_WIN);
          } else if (XyGameProxy.result.prizeAmount >= 5000000) {
            this.changeState(RunState.BIG_WIN);
          } else {
            this.changeState(RunState.AWARD);
          }
        };
        _proto.changeState = function changeState(state) {
          var _this4 = this;
          switch (state) {
            case RunState.NORMAL:
              {
                this._state = RunState.NORMAL;
                break;
              }
            case RunState.BONUS_AWARD:
              {
                this.showBonus();
                break;
              }
            case RunState.JACKPOT_WIN:
              {
                this._state = RunState.JACKPOT_WIN;
                this.node_jackpot.active = true;
                this.txt_jackpotWin.string = Common.numFormat(XyGameProxy.result.jackPotAmount + "");
                var spine = this.node_jackpot.getComponent(sp.Skeleton);
                spine.setAnimation(0, "intro", false);
                spine.setCompleteListener(function () {
                  spine.setCompleteListener(null);
                  _this4.node_jackpot.active = false;
                  _this4.changeState(RunState.AWARD);
                });
                XyDef.palyAudio(XyDef.audio.JACKPOT);
                break;
              }
            case RunState.BIG_WIN:
              {
                this._state = RunState.BIG_WIN;
                this.node_bigwin.active = true;
                this._runTime = BIG_WIN_TIME;
                this.txt_bigwin.string = Common.numFormat(XyGameProxy.result.prizeAmount);
                this.sp_bigWin.setAnimation(0, "intro", false);
                this.sp_bigWin.setCompleteListener(function () {
                  _this4.sp_bigWin.setCompleteListener(null);
                  _this4.node_bigwin.active = false;
                  _this4.changeState(RunState.AWARD);
                });
                XyDef.palyAudio(XyDef.audio.BIGWIN);
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this4.showAward();
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
          }
        };
        _proto.showAward = function showAward() {
          var _this5 = this;
          if (this._state != RunState.AWARD) return;
          if (this._hasSpecial2) {
            this.showSpeCial(0);
          }
          if (this._hasSpecial4) {
            this.showSpeCial(1);
          }
          this.txt_win.string = Common.numFormat(XyGameProxy.result.prizeAmount + "");
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.getConfig, {
            betAmount: this._bet + ""
          });
          if (XyGameProxy.result.freePrize) {
            this.spine_free.node.active = true;
            this.spine_free.setAnimation(0, "animation", false);
            this.spine_free.setCompleteListener(function () {
              _this5.spine_free.setCompleteListener(null);
              _this5.spine_free.node.active = false;
            });
            XyDef.palyAudio(XyDef.audio.AWARD2);
          } else {
            if (XyGameProxy.result.prizeAmount > 0) {
              XyDef.palyAudio(XyDef.audio.AWARD1);
            }
          }
          if (XyGameProxy.result.freeCount > 0) {
            this.node_free.active = true;
            this.txt_free.string = "" + XyGameProxy.result.freeCount;
          } else {
            this.node_free.active = false;
            this.spine_free.node.active = false;
          }
          this.updateGold();
          this.showLines();
        };
        _proto.showLines = function showLines() {
          //        // let colors = [cc.Color.RED, cc.Color.YELLOW, cc.Color.BLUE, cc.Color.GREEN];
          var prizeInfo = XyGameProxy.result.prizeInfo;
          if (!prizeInfo || prizeInfo.length == 0) return;
          var OpenNums = XyGameProxy.result.OpenNums;
          this.hideSpine();
          for (var i = 0; i < prizeInfo.length; i++) {
            var type = prizeInfo[i].PrizeType;
            var lines = this.lines[type];
            for (var j = 0; j < lines.length; j++) {
              var line = lines[j];
              line.active = true;
              //                // line.color = colors[index];

              var prizeIndex = XyGameProxy.result.prizeIdx[i];
              var nums = JSON.parse(prizeInfo[i].PrizeNum);
              for (var _i = 0; _i < nums.Num; _i++) {
                var key = prizeIndex[_i];
                var result = OpenNums[key] - 1;
                this.showSpine(key, result);
              }
            }
          }
        };
        _proto.showSignleLine = function showSignleLine() {
          var prizeInfo = XyGameProxy.result.prizeInfo;
          if (!prizeInfo || prizeInfo.length == 0) {
            this.changeState(RunState.NORMAL);
            return;
          }
          var index = this._showLineIndex % prizeInfo.length;
          var prize = prizeInfo[index];
          var nums = JSON.parse(prizeInfo[index].PrizeNum);
          this.hideLines();
          var type = prize.PrizeType;
          var lines = this.lines[type];
          for (var j = 0; j < lines.length; j++) {
            var line = lines[j];
            line.active = true;
          }

          //        // this.txt_linewin.string = `${this._bet} x ${prize.Odds} = ${Common.numFormat(this._bet * prize.Odds)}`;
          this.node_linewinBg.active = true;
          var richtext = this.txt_linewin;
          richtext.string = "<color=#6f4209>" + nums.Num + " " + "</c>" + "<img src=" + "'" + nums.Symbol + "'" + " width=26 height=26 align=center/>" + "<color=#6f4209>" + " trúng " + "=" + " " + Common.numFormat(this._bet) + " " + "x" + " " + Common.numFormat(prize.Odds) + " " + "=" + " " + Common.numFormat(this._bet * prize.Odds) + "</color>";
          //        // this.txt_win.string = Common.numFormat(this._bet * prize.Odds);

          var prizeIndex = XyGameProxy.result.prizeIdx[index];
          var OpenNums = XyGameProxy.result.OpenNums;
          this.hideSpine();
          for (var i = 0; i < nums.Num; i++) {
            var key = prizeIndex[i];
            var result = OpenNums[key] - 1;
            this.showSpine(key, result);
          }
          //        // for (let i of prizeIndex) {
          //        //     let result = OpenNums[i] - 1;
          //        //     this.showSpine(i, result);
          //        // }
        };

        _proto.hideLines = function hideLines() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.lines), _step6; !(_step6 = _iterator6()).done;) {
            var lines = _step6.value;
            for (var _iterator7 = _createForOfIteratorHelperLoose(lines), _step7; !(_step7 = _iterator7()).done;) {
              var node = _step7.value;
              node.active = false;
            }
          }
        };
        _proto.showBonus = function showBonus() {
          var _this6 = this;
          XyDef.palyMusic(XyDef.audio.BG2);
          this._state = RunState.BONUS_AWARD;
          Common.loadPopBuddle("prefab/XyBonusLayer", XyGameProxy.bundle, function () {}, function (prefab) {
            _this6.sp_bonusEnter.node.active = true;
            _this6.sp_bonusEnter.setAnimation(0, "animation", false);
            _this6.sp_bonusEnter.setCompleteListener(function () {
              _this6.sp_bonusEnter.setCompleteListener(null);
              _this6.sp_bonusEnter.node.active = false;
              var node = instantiate(prefab);
              _this6.node.addChild(node);
              node.getComponent(XyBonusLayer).setData(XyGameProxy.result.bonusAmount);
            });
          }, true);
        };
        _proto.onClickBigWin = function onClickBigWin() {
          this.sp_bigWin.setCompleteListener(null);
          this.node_bigwin.active = false;
          this.changeState(RunState.AWARD);
        };
        _proto.onClickStop = function onClickStop() {
          var _this7 = this;
          if (!XyGameProxy.result) {
            return;
          }
          if (this._state == RunState.START) {
            if (this._runTime > 1) {
              this._runTime -= 1;
              return;
            }
          }
          if (this._lock) {
            return;
          }
          this._lock = true;
          this._state = RunState.STOP;
          this._runTime = STOP_TIME;
          var nums = XyGameProxy.result.OpenNums;
          for (var i = 0; i < this.aniLines.length; i++) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 5] - 1;
            var rand3 = nums[i + 10] - 1;
            var arr = [rand1, rand2, rand3];
            this.aniLines[i].showResult(arr);
            if (i == 1 && (rand1 == 12 || rand2 == 12 || rand3 == 12)) {
              this._hasSpecial2 = true;
            } else if (i == 3 && (rand1 == 12 || rand2 == 12 || rand3 == 12)) {
              this._hasSpecial4 = true;
            }
          }
          this.stopRollingSound();
          XyDef.palyAudio(XyDef.audio.END);
          this.scheduleOnce(function () {
            _this7.changeBtnActive(true);
            _this7._lock = false;
            _this7.showResult();
          }, 0.3);
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          this.node_start.active = b;
          this.node_stop.active = !b;
        };
        _proto.update = function update(dt) {
          this.node_fire.angle -= 3;
          this._configTime -= dt;
          if (this._configTime <= 0) {
            this._configTime = 5;
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.getConfig, {
              betAmount: this._bet + ""
            });
          }
          switch (this._state) {
            case RunState.START:
              {
                this.node_fire.angle -= 20;
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (XyGameProxy.result) {
                    this.changeState(RunState.STOP);
                  } else {
                    this._runTime = RUN_TIME;
                    this._errCount++;
                    if (this._errCount > 3) {
                      console.log("retry");
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
                  this.changeState(RunState.AWARD);
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
          }
        };
        _proto.playRollingSound = function playRollingSound() {
          var _this8 = this;
          this.stopRollingSound();
          var version = this.rollingSoundVersion;
          var bundle = XyGameProxy.bundle;
          if (!bundle || !isValid(this, true) || !this.enabledInHierarchy) return;
          bundle.load("sound/" + XyDef.audio.TURN, AudioClip, function (err, clip) {
            // 退出、停转或开始下一次滚动后，旧加载结果不能重新播放。
            if (err || !clip || version !== _this8.rollingSoundVersion || !isValid(_this8, true) || !_this8.enabledInHierarchy) return;
            // 即使资源是短音效也使用可停止的音源，避免 one-shot 在离场后继续响。
            _this8.rollingSoundId = AudioManager.instance.playSound(clip, false, false);
          });
        };
        _proto.stopRollingSound = function stopRollingSound() {
          this.rollingSoundVersion++;
          if (this.rollingSoundId != null) {
            AudioManager.instance.stopSound(this.rollingSoundId);
            this.rollingSoundId = null;
          }
        };
        _proto.onDisable = function onDisable() {
          this.stopRollingSound();
        };
        _proto.onDestroy = function onDestroy() {
          this.stopRollingSound();
          ProxyMgr.close(this);
        };
        return XyRoom;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "aniLines", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_stop", [_dec7], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_use", [_dec9], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_linewin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_linewinBg", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpot", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_lines", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "pre_line", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_try", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "sp_bonusEnter", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec21], {
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
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_specials", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_free", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "txt_free", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_fire", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "spine_free", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_jackpot", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "txt_jackpotWin", [_dec29], {
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

System.register("chunks:///_virtual/XyScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './XyDef.ts', './XygameProxy.ts', './XyRoom.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, isValid, error, Component, NetManager, ViewManager, XyDef, XyGameProxy, XyGameEvent, XyRoom, Common, MainManager;
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
      isValid = module.isValid;
      error = module.error;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      XyDef = module.XyDef;
    }, function (module) {
      XyGameProxy = module.default;
      XyGameEvent = module.XyGameEvent;
    }, function (module) {
      XyRoom = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "cedb8XiVS9Ps4PINL0a93At", "XyScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var XyScene = exports('default', (_dec = ccclass("XyScene"), _dec2 = menu("game/xygame/XyScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(XyScene, _Component);
        function XyScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_desk", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_room", _descriptor2, _assertThisInitialized(_this));
          _this.node_desk = null;
          _this.node_room = null;
          _this.roomLoading = false;
          _this.roomVersion = 0;
          return _this;
        }
        var _proto = XyScene.prototype;
        _proto.onLoad = function onLoad() {
          XyDef.init();
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.betList);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolXy.jackpotList);
          this.init();
          this.createDesk();
        };
        _proto.start = function start() {
          this.preLoad();
        };
        _proto.preLoad = function preLoad() {
          var bundle = XyGameProxy.bundle;
          bundle.preload("prefab/XyRoom", Prefab);
        };
        _proto.createDesk = function createDesk() {
          if (this.node_desk) {
            return;
          }
          var node = instantiate(this.pre_desk);
          this.node.addChild(node);
          this.node_desk = node;
        };
        _proto.createRoom = function createRoom(score) {
          var _this2 = this;
          if (this.node_room || this.roomLoading) {
            return;
          }
          var bundle = XyGameProxy.bundle;
          this.roomLoading = true;
          var version = ++this.roomVersion;
          bundle.load("prefab/XyRoom", function (err, asset) {
            // 离场或更新请求后，旧回调不得重新创建房间。
            if (!isValid(_this2, true) || version !== _this2.roomVersion) return;
            _this2.roomLoading = false;
            if (err || !asset) {
              error("西游房间加载失败", err);
              _this2.createDesk();
              return;
            }
            var node = instantiate(asset);
            _this2.node_room = node;
            _this2.node.addChild(node);
            node.getComponent(XyRoom).setData(score);
          });
        };
        _proto.init = function init() {
          this.reset();
          XyDef.palyMusic(XyDef.audio.BG);
        };
        _proto.onEvent = function onEvent() {
          var _this3 = this;
          XyGameProxy.on(XyGameEvent.ENTER_ROOM, function (score) {
            if (_this3.node_desk) {
              _this3.node_desk.removeFromParent();
              _this3.node_desk.destroy();
              _this3.node_desk = null;
            }
            _this3.createRoom(score);
          }, this);
          XyGameProxy.on(XyGameEvent.LEAVE_ROOM, function () {
            _this3.roomVersion++;
            _this3.roomLoading = false;
            if (_this3.node_room) {
              _this3.node_room.removeFromParent();
              _this3.node_room.destroy();
              _this3.node_room = null;
            }
            _this3.createDesk();
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
          this.onEvent();
          if (!this.node_room && !this.node_desk) this.createDesk();
          XyGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          this.roomVersion++;
          this.roomLoading = false;
          XyGameProxy.targetOff(this);
          XyGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {
          XyGameProxy.targetOff(this);
        };
        return XyScene;
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

(function(r) {
  r('virtual:///prerequisite-imports/XyGame', 'chunks:///_virtual/XyGame'); 
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