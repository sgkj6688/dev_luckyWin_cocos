System.register("chunks:///_virtual/SlotQueenCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotQueenRunItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, tween, Component, SlotQueenRunItem;
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
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      SlotQueenRunItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "381a54SeX9I64NSaxr/aBkG", "SlotQueenCardAni", undefined);
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
      var SlotQueenCardAni = exports('default', (_dec = ccclass("SlotQueenCardAni"), _dec2 = menu("game/SlotQueen/SlotQueenCardAni"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenCardAni, _Component);
        function SlotQueenCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepHeight", _descriptor3, _assertThisInitialized(_this));
          //数字高度
          //    // @property(cc.Node)
          //    // node_smoke: cc.Node = null;
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
          _this.next = void 0;
          _this._hideArr = [];
          _this._startPosArr = [];
          _this._lightTime = 0;
          return _this;
        }
        var _proto = SlotQueenCardAni.prototype;
        _proto.onLoad = function onLoad() {
          var startY = 286;
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_card);
            this.node.addChild(node);
            node.setPosition(v3(0, startY - i * 147));
            var com = node.getComponent(SlotQueenRunItem);
            this.runningCard.push(com);
          }
          this.node_light.active = false;
          this.node_light.getComponent(UITransform).priority = 8;
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startY = 286;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 147));
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

        _proto.showScatter = function showScatter() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.runningCard), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            i.showScatter();
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
          } else {
            if (this.next != null) {
              var _result = this.next;
              node.setCard(_result);
            }
          }
        };
        _proto.showLight = function showLight(time) {
          this._lightTime = time;
          this.node_light.active = true;
          //        // this.moveStep = 160;
        };

        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          this.next = null;
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
          this.node_light.active = false;
        };
        _proto.showNext = function showNext(cardValue, other) {
          if (other === void 0) {
            other = null;
          }
          this._hideArr.sort();
          this._hideArr.reverse();
          this._startPosArr = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
            var _i4 = _step3.value;
            this._startPosArr.push(_i4.node.getPosition().y);
          }

          //        //整体上移
          for (var t = 0; t < this._hideArr.length; t++) {
            var start = this._hideArr[t] + t;
            var count = 3 + start;
            for (var i = 0; i < count; i++) {
              var index = this.endIndex + start - 2;
              if (index < 0) {
                index = 5 + index;
              }
              // this.runningCard[index].node.getPosition().y += this.stepHeight;
              this.runningCard[index].node.setPosition(v3(0, this.runningCard[index].node.getPosition().y + this.stepHeight));
              start--;
            }
          }
          for (var _i2 = 0; _i2 < cardValue.length; _i2++) {
            var _index = this.endIndex - _i2;
            if (_index < 0) {
              _index = 5 + _index;
            }
            this.runningCard[_index].setCard(cardValue[_i2]);
          }

          //        //第二轮
          if (other != null) {
            var _index2 = this.endIndex - 3;
            if (_index2 < 0) {
              _index2 = 5 + _index2;
            }
            this.runningCard[_index2].setCard(other);
          }
          this.show();
          for (var _i3 = 0; _i3 < 5; _i3++) {
            var node = this.runningCard[_i3].node;
            //            // cc.tween(node).to(0.2, { y: this._startPosArr[i] }).start();
            if (node.getPosition().y != this._startPosArr[_i3]) {
              tween(node).delay(0.3 - this._index * 0.08)
              //                    // .to(0.2, { y: this._startPosArr[i] }, { easing: "cubicIn" })
              //                    // .call(() => {})
              //                    // .to(0.05, { y: this._startPosArr[i] + 20 }, { easing: "cubicIn" })
              //                    // .to(0.05, { y: this._startPosArr[i] }, { easing: "cubicIn" })
              .to(0.6, {
                position: v3(node.position.x, this._startPosArr[_i3])
              }, {
                easing: "bounceOut"
              }).start();
            }
          }
          this._hideArr = [];
        };
        _proto.setNext = function setNext(cardValue) {
          this.next = cardValue;
        };
        _proto.show = function show() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.runningCard), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
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
          this._hideArr.push(i);
        };
        _proto.clear = function clear() {
          this.leftResultCount = 3;
          this.endNode = null;
          this.moveStep = 80; //每帧移动步长
          this._hideArr = [];
        };
        _proto.run = function run(delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this.clear();
          this.initPos();
          this.show();
          this.delayTime = delayTime;
          this.setState(CardState.DELAY);
        };
        _proto.setState = function setState(state) {
          this._state = state;
          if (state == CardState.RUN || state == CardState.RESULT) {
            for (var _iterator5 = _createForOfIteratorHelperLoose(this.runningCard), _step5; !(_step5 = _iterator5()).done;) {
              var i = _step5.value;
              i.setState(state);
            }
          }
        };
        _proto.update = function update(dt) {
          //        // if (this.node_light.active) {
          //        //     this._lightTime -= dt;
          //        //     if (this._lightTime < 1.0) {
          //        //         this.moveStep -= 6;
          //        //     }
          //        // }
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
                //                // this.moveStep -= 2;
                //                // if (this.moveStep < 40) {
                //                //     this.moveStep = 40;
                //                // }

                if (this.node_light.active) {
                  this.moveStep -= 6;
                  if (this.moveStep > 30) {
                    this.moveStep = 30;
                  }
                  if (this.moveStep < 10) {
                    this.moveStep = 10;
                  }
                } else {
                  this.moveStep -= 2;
                  if (this.moveStep < 40) {
                    this.moveStep = 40;
                  }
                }
                var _length = this.runningCard.length;
                for (var _i5 = 0; _i5 < _length; _i5++) {
                  var _node = this.runningCard[_i5].node;
                  _node.setPosition(0, _node.getPosition().y - this.moveStep);
                  if (_node.getPosition().y < -(this.stepHeight + this.moveOut)) {
                    _node.setPosition(0, _node.getPosition().y + this.stepHeight * CARDCOUNT);
                    this.resultCard(this.runningCard[_i5]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i5;
                    }
                  }
                  if (_node == this.endNode && _node.getPosition().y <= -this.stepHeight - 8) {
                    this.setState(CardState.END);
                    this.fixStep = _node.getPosition().y + this.stepHeight + 8;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                for (var _i6 = 0; _i6 < _length2; _i6++) {
                  var _node2 = this.runningCard[_i6].node;
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
        return SlotQueenCardAni;
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
          return 145;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotQueenDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './SlotQueenProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, SlotQueenProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      SlotQueenProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0774AQjUlN3rEjAE8Er0GC", "SlotQueenDef", undefined);
      var SlotQueenDef = exports('SlotQueenDef', /*#__PURE__*/function () {
        function SlotQueenDef() {}
        SlotQueenDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = SlotQueenProxy.bundle;
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
        SlotQueenDef.palyMusic = function palyMusic(name) {
          var bundle = SlotQueenProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        SlotQueenDef.init = function init() {};
        SlotQueenDef.getRand = function getRand(i) {
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
        SlotQueenDef.randRusult = function randRusult(amount, add) {
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
        SlotQueenDef.getMultple = function getMultple() {
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
        SlotQueenDef.checkPrize = function checkPrize(openNums) {
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
        return SlotQueenDef;
      }());
      SlotQueenDef.audio = {
        AWARD1: "prizeWinLv1",
        BG: "bgm_mg",
        BG2: "bgm_fs",
        END: "spinStop1",
        QUICK_END: "spinStopQuick",
        TURN: "spinBtn",
        //        // WILD: "sym_wild",
        BIGWIN: "bgm_bigwin_main",
        //        // SINGLE_LINE: "prizePayoutIdle",
        WILD: "symWild",
        SCATTER: "symScatter",
        //        // COLLECT_WILD2: "voxWildCollect01",
        //        // SHOW_WINDOW: "ui_btn_click",
        TITLE: "bnSelTitle",
        SELECT: "bnSelSelect",
        MOVE: "bnSelCdTick",
        FREE_WIN: "bgm_totalwin_main",
        WINLINE: "prizeSymHighlight",
        MULTI_UP: "prizeMultiUp",
        MULTI_ENTER: "fsWheelPowerUp",
        FREE_COUNT: "fsWonRemainingIncrease",
        HEIGHT_LIGHT: "fastspinStart",
        HEIGHT_LIGHT_MAIN: "fastspinMain"
      };
      SlotQueenDef.windowAudio = ["uiInfoGirl", "uiInfoGun", "uiInfoCompass", "uiInfoMap", "uiInfoNormal", "uiInfoNormal", "uiInfoNormal", "uiInfoWild", "uiInfoScatter"];
      SlotQueenDef.tryGold = 100000000;
      SlotQueenDef.odds = {
        0: [50, 250, 2500],
        1: [20, 100, 1000],
        2: [15, 50, 500],
        3: [10, 25, 200],
        4: [5, 20, 100],
        5: [4, 15, 75],
        6: [3, 10, 50]
      };
      SlotQueenDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      SlotQueenDef.oddsType = {
        20: [1, 2, 3, 5],
        10: [3, 6, 9, 20],
        5: [6, 12, 18, 40]
      };
      SlotQueenDef.lines = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [0, 6, 12, 8, 4], [10, 6, 2, 8, 14], [0, 1, 7, 3, 4], [10, 11, 7, 13, 14], [5, 11, 12, 13, 9], [5, 1, 2, 3, 9], [0, 6, 7, 8, 4], [10, 6, 7, 8, 14], [5, 6, 2, 8, 9], [5, 6, 12, 8, 9], [5, 1, 7, 3, 9], [5, 11, 7, 13, 9], [0, 6, 2, 8, 4], [10, 6, 12, 8, 14], [0, 1, 7, 13, 14], [10, 11, 7, 3, 4], [0, 11, 2, 13, 4]];
      SlotQueenDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotQueenGame", ['./SlotQueenCardAni.ts', './SlotQueenDef.ts', './SlotQueenProxy.ts', './SlotQueenRunItem.ts', './SlotQueenScene.ts', './SlotQueenSetAuto.ts', './SlotQueenView.ts', './SlotQueenWinItem.ts', './SlotQueenWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotQueenProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "a0d04Jp7RlInKGC5UbW6czi", "SlotQueenProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotQueenGameEvent = exports('SlotQueenGameEvent', /*#__PURE__*/function (SlotQueenGameEvent) {
        SlotQueenGameEvent["ENTER_ROOM"] = "enterRoom";
        SlotQueenGameEvent["LEAVE_ROOM"] = "leaveRoom";
        SlotQueenGameEvent["UPDATE_CONFIG"] = "updateConfig";
        SlotQueenGameEvent["UPDATE_BETLIST"] = "updateBetList";
        SlotQueenGameEvent["CLOSE_BONUS"] = "closeBonus";
        SlotQueenGameEvent["SELECT_BET"] = "selectBet";
        SlotQueenGameEvent["START"] = "start";
        SlotQueenGameEvent["CLICK_ITEM"] = "clickItem";
        SlotQueenGameEvent["ERROR"] = "errorReturn";
        SlotQueenGameEvent["SELECT_ODD"] = "selectOdd";
        return SlotQueenGameEvent;
      }({}));
      var SlotQueenProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(SlotQueenProxyMgr, _ProxyBase);
        function SlotQueenProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "SlotQueenGame";
          _this.wsEvents = [ConfigManager.ProtocolSlotQueen.bet, ConfigManager.ProtocolSlotQueen.select, ConfigManager.ProtocolSlotQueen.info];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [0.1, 1, 5];
          _this.betMaxCount = 10;
          _this.betRate = 20;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          return _this;
        }
        var _proto = SlotQueenProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(SlotQueenGameEvent.SELECT_BET);
        };
        _proto.setBetByCount = function setBetByCount(count) {
          for (var i = 0; i < this.betList.length; i++) {
            for (var j = 0; j < this.betMaxCount; j++) {
              var num = this.betList[i] * (j + 1) * this.betRate * 1000;
              if (num == count) {
                this.setBet(i, j);
              }
            }
          }
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
            if (data.cmd == ConfigManager.ProtocolSlotQueen.bet) {
              this.emit(SlotQueenGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotQueen.info:
              {
                this.emit(SlotQueenGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotQueen.select:
              {
                this.emit(SlotQueenGameEvent.SELECT_ODD, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotQueen.bet:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var _iterator3 = _createForOfIteratorHelperLoose(this.result.Res), _step3; !(_step3 = _iterator3()).done;) {
                  var item = _step3.value;
                  this.result.prizeAmount += item.RewardMoney;
                }
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
                this.emit(SlotQueenGameEvent.START);
              }
          }
        };
        _createClass(SlotQueenProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return SlotQueenProxyMgr;
      }(ProxyBase);
      var SlotQueenProxy = exports('default', new SlotQueenProxyMgr("SlotQueenProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotQueenRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotQueenDef.ts', './SlotQueenProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, sp, Sprite, UITransform, v3, Component, SlotQueenDef, SlotQueenProxy, SlotQueenGameEvent;
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
      sp = module.sp;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SlotQueenDef = module.SlotQueenDef;
    }, function (module) {
      SlotQueenProxy = module.default;
      SlotQueenGameEvent = module.SlotQueenGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "5cc91U4ZLFDhaoij2E0u53P", "SlotQueenRunItem", undefined);
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
      var SlotQueenRunItem = exports('default', (_dec = ccclass("SlotQueenRunItem"), _dec2 = menu("game/SlotQueen/SlotQueenRunItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenRunItem, _Component);
        function SlotQueenRunItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_wild", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_normal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_blur", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal", _descriptor5, _assertThisInitialized(_this));
          _this._state = CardState.RESULT;
          _this._index = void 0;
          return _this;
        }
        var _proto = SlotQueenRunItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node_wild.active = false;
          this.node_scatter.active = false;
          this.node_normal.active = true;
        };
        _proto.setCard = function setCard(index, end) {
          if (end === void 0) {
            end = true;
          }
          this._index = index;
          if (index == 7) {
            this.node_wild.active = true;
            this.node_normal.active = false;
            this.node_scatter.active = false;
            if (end) SlotQueenDef.palyAudio(SlotQueenDef.audio.WILD);
          } else if (index == 8) {
            this.node_wild.active = false;
            this.node_normal.active = false;
            this.node_scatter.active = true;
            this.node_scatter.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            if (end) SlotQueenDef.palyAudio(SlotQueenDef.audio.SCATTER);
          } else {
            this.node_wild.active = false;
            this.node_normal.active = true;
            this.node_scatter.active = false;

            //            // if (this._state == CardState.RUN) {
            //            //     this.node_normal.getComponent(cc.Sprite).spriteFrame = this.frame_blur[index];
            //            // } else if (this._state == CardState.RESULT) {
            //            //     this.node_normal.getComponent(cc.Sprite).spriteFrame = this.frame_normal[index];
            //            // }
            this.node_normal.getComponent(Sprite).spriteFrame = this.frame_normal[index];
          }
        };
        _proto.randCard = function randCard() {
          //        // if (SlotQueenProxy.result && SlotQueenProxy.result.Lucky) {
          //        //     let nums = [SlotQueenProxy.result.LuckyMsg.LuckySymbol, 0];
          //        //     let rand = Math.floor(Math.random() * nums.length);
          //        //     this.setCard(nums[rand]);
          //        // } else {
          //        //     let rand = Math.floor(Math.random() * 7);
          //        //     this.setCard(rand);
          //        // }
          var rand = Math.floor(Math.random() * 9);
          this.setCard(rand, false);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showScatter = function showScatter() {
          if (this._index == 8) this.node_scatter.getComponent(sp.Skeleton).setAnimation(0, "win", true);
        };
        _proto.onClick = function onClick() {
          SlotQueenProxy.emit(SlotQueenGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return SlotQueenRunItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_scatter", [_dec4], {
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

System.register("chunks:///_virtual/SlotQueenScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './SlotQueenDef.ts', './SlotQueenProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, SlotQueenDef, SlotQueenProxy, MainManager;
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
      SlotQueenDef = module.SlotQueenDef;
    }, function (module) {
      SlotQueenProxy = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "70b87QYLRNChYT65cfwPiYC", "SlotQueenScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotQueenScene = exports('default', (_dec = ccclass("SlotQueenScene"), _dec2 = menu("game/SlotQueen/SlotQueenScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenScene, _Component);
        function SlotQueenScene() {
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
        var _proto = SlotQueenScene.prototype;
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
          SlotQueenDef.palyMusic(SlotQueenDef.audio.BG);
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
          SlotQueenProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          SlotQueenProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return SlotQueenScene;
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

System.register("chunks:///_virtual/SlotQueenSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "eb42b5DcjREZLnZ2kLXJLpJ", "SlotQueenSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotQueenSetAuto = exports('default', (_dec = ccclass("SlotQueenSetAuto"), _dec2 = menu("game/SlotQueen/SlotQueenSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(ToggleContainer), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenSetAuto, _Component);
        function SlotQueenSetAuto() {
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
        var _proto = SlotQueenSetAuto.prototype;
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
          console.log("data", data);
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
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(232, 98, 50, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return SlotQueenSetAuto;
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

System.register("chunks:///_virtual/SlotQueenView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Common.ts', './SlotQueenCardAni.ts', './SlotQueenDef.ts', './SlotQueenProxy.ts', './SlotQueenWinItem.ts', './SlotQueenWindow.ts', './ClickbtnEffect.ts', './FortuneSetAuto.ts', './FortuneRank.ts', './FortuneHistory.ts', './FortuneSetBase.ts', './MainManager.ts', './LineSprite.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Button, Label, Node, SpriteFrame, Prefab, Toggle, Sprite, Font, instantiate, Tween, tween, v3, UITransform, sys, Color, color, UIOpacity, Component, i18n, ProxyMgr, AudioManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Common, SlotQueenCardAni, SlotQueenDef, SlotQueenProxy, SlotQueenGameEvent, SlotQueenWinItem, SlotQueenWindow, ClickbtnEffect, FortuneSetAuto, FortuneRank, FortuneHistory, FortuneSetBase, MainManager, LineSprite;
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
      Button = module.Button;
      Label = module.Label;
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      Sprite = module.Sprite;
      Font = module.Font;
      instantiate = module.instantiate;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      Color = module.Color;
      color = module.color;
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
      SlotQueenCardAni = module.default;
    }, function (module) {
      SlotQueenDef = module.SlotQueenDef;
    }, function (module) {
      SlotQueenProxy = module.default;
      SlotQueenGameEvent = module.SlotQueenGameEvent;
    }, function (module) {
      SlotQueenWinItem = module.default;
    }, function (module) {
      SlotQueenWindow = module.default;
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
    }, function (module) {
      LineSprite = module.LineSprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62;
      cclegacy._RF.push({}, "43c83fJxjNMYKgiVSwR3Cm8", "SlotQueenView", undefined);
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
        WAIT: 7,
        FREE_WIN: 8,
        SHOW_NEXT: 9,
        FREE_ADD: 10
      };
      var RUN_TIME = 0.5;
      var STOP_TIME = 1.5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 8;
      var BIG_WIN_TIME2 = 10;
      var BIG_WIN_TIME3 = 12;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 2;
      var FREE_TIME = 30;
      var FREE_WIN_TIME = 5;
      var SlotQueenView = exports('default', (_dec = ccclass("SlotQueenView"), _dec2 = menu("game/SlotQueen/SlotQueenView"), _dec3 = property(SlotQueenCardAni), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec9 = property(ScrollNumLabel), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(ScrollNumLabel), _dec13 = property(Label), _dec14 = property(sp.Skeleton), _dec15 = property(ScrollNumLabel), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(sp.Skeleton), _dec23 = property(Label), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(ScrollNumLabel), _dec27 = property(Node), _dec28 = property(Prefab), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Label), _dec32 = property(Prefab), _dec33 = property(Label), _dec34 = property(Toggle), _dec35 = property(ClickbtnEffect), _dec36 = property(SpriteFrame), _dec37 = property(Sprite), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(sp.Skeleton), _dec41 = property(ScrollNumLabel), _dec42 = property(Label), _dec43 = property(Node), _dec44 = property(Button), _dec45 = property(Font), _dec46 = property(Label), _dec47 = property(sp.Skeleton), _dec48 = property(sp.Skeleton), _dec49 = property(sp.Skeleton), _dec50 = property(sp.Skeleton), _dec51 = property(Label), _dec52 = property(sp.Skeleton), _dec53 = property(sp.Skeleton), _dec54 = property(Node), _dec55 = property(Node), _dec56 = property(Node), _dec57 = property(Node), _dec58 = property(Label), _dec59 = property(sp.Skeleton), _dec60 = property(Node), _dec61 = property(Label), _dec62 = property(Label), _dec63 = property(Node), _dec64 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenView, _Component);
        function SlotQueenView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniLines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_start", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_tiger", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_add", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_reduce", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gain", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_gain", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gain", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gainTitle", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_totalGain", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalGain", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftCount", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_window", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_lineWin", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_auto", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor33, _assertThisInitialized(_this));
          //    // @property(cc.Node)
          //    // node_x10LightBall: cc.Node = null;
          //    // @property(sp.Skeleton)
          //    // spine_quick: sp.Skeleton = null;
          _initializerDefineProperty(_this, "frame_bgs", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeBg", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeWinBg", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeWin", _descriptor38, _assertThisInitialized(_this));
          //    // @property(cc.Label)
          //    // txt_freeCount: cc.Label = null;
          _initializerDefineProperty(_this, "txt_freeWin", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeLeft", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeLeft", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fonts", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odds", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_odds", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeBg", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeTop", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_quick", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_smokes", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeSelect", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item1", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item2", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item3", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lines", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selectCount", _descriptor56, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeWinBtn", _descriptor57, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeWinBtn", _descriptor58, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftTime", _descriptor59, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_oddTimes", _descriptor60, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeAdd", _descriptor61, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeAdd", _descriptor62, _assertThisInitialized(_this));
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
          _this._isFree = false;
          _this.freeLock = false;
          _this.freeTimeLeft = 0;
          //免费倒计时
          _this._resultIndex = 0;
          _this._hasBingoArr = [0, 0, 0, 0, 0];
          _this._freeCount = 0;
          _this._allFreeCount = 0;
          _this._oddType = 20;
          _this._odds = void 0;
          _this.lightTimeId = 0;
          return _this;
        }
        var _proto = SlotQueenView.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData();
          this.clear();
          this.initEvent();
        };
        _proto.init = function init() {
          this.spine_tiger.setAnimation(0, "idle_01", true);
          this.selectOdd(20);
          var children = this.node_lines.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          SlotQueenDef.palyMusic(SlotQueenDef.audio.BG);
          var node = instantiate(this.prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(SlotQueenWindow);
          node.active = false;
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotQueen.info, {});
          this.setGun(this._resultIndex);
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
          for (var _iterator2 = _createForOfIteratorHelperLoose(children), _step2; !(_step2 = _iterator2()).done;) {
            var node = _step2.value;
            node.active = false;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.aniLines), _step3; !(_step3 = _iterator3()).done;) {
            var cardAni = _step3.value;
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
          var winItem = item.getComponent(SlotQueenWinItem);
          winItem.showResult(result, isBig);
          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
          return winItem;
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          SlotQueenProxy.on(SlotQueenGameEvent.UPDATE_BETLIST, this.updateInfo, this);
          SlotQueenProxy.on(SlotQueenGameEvent.SELECT_BET, function (count) {
            //                // this.node_betSelect.active = false;
            _this2.setData();
            Tween.stopAllByTarget(_this2.txt_bet.node);
            tween(_this2.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);
          SlotQueenProxy.on(SlotQueenGameEvent.START, function () {
            _this2.runStart();
          }, this);
          SlotQueenProxy.on(SlotQueenGameEvent.ERROR, function () {
            _this2.changeState(RunState.NORMAL);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.onClickQuick, this);
          SlotQueenProxy.on(SlotQueenGameEvent.CLICK_ITEM, function (data) {
            if (_this2._auto) return;
            _this2._window.node.scale = v3(1, 1, 1);
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

            //                // SlotQueenDef.palyAudio(SlotQueenDef.audio.SHOW_WINDOW);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          SlotQueenProxy.on(SlotQueenGameEvent.SELECT_ODD, function (info) {
            //                // this.selectOdd(info);
            _this2._freeCount = info;
            _this2._allFreeCount = info;
            _this2.txt_selectCount.string = _this2._allFreeCount + "";
            _this2.setFreeCount(info);
            _this2.onClickFree();
          }, this);
          this.node_item1.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.spine_freeSelect.node.active = true;
            _this2.spine_freeSelect.setAnimation(0, "1_push", true);
            SlotQueenDef.palyAudio(SlotQueenDef.audio.MOVE);
          }, this);
          this.node_item1.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_freeSelect.node.active = false;
          }, this);
          this.node_item2.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.spine_freeSelect.node.active = true;
            _this2.spine_freeSelect.setAnimation(0, "2_push", true);
            SlotQueenDef.palyAudio(SlotQueenDef.audio.MOVE);
          }, this);
          this.node_item2.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_freeSelect.node.active = false;
          }, this);
          this.node_item3.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.spine_freeSelect.node.active = true;
            _this2.spine_freeSelect.setAnimation(0, "3_push", true);
            SlotQueenDef.palyAudio(SlotQueenDef.audio.MOVE);
          }, this);
          this.node_item3.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_freeSelect.node.active = false;
          }, this);
          this.node_freeWinBtn.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.spine_freeWinBtn.node.active = true;
            _this2.spine_freeWinBtn.setAnimation(0, "push", true);
          }, this);
          this.node_freeWinBtn.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_freeWinBtn.node.active = false;
          }, this);
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          SlotQueenProxy.setBet(betListIndex, betCount);
        };
        _proto.selectOdd = function selectOdd(type) {
          this._oddType = type;
          var odds = SlotQueenDef.oddsType[type];
          console.log("his._oddType ", type, odds);
          this._freeCount = type;
          this.txt_freeLeft.string = "" + this._freeCount;
          for (var i = 0; i < 4; i++) {
            this.txt_odds[i].string = "x" + odds[i];
          }
          this._odds = odds;
        };
        _proto.updateInfo = function updateInfo(data) {
          //        // this.node_bets.destroyAllChildren();
          //        // for (let bet of SlotQueenProxy.betList) {
          //        //     let node = cc.instantiate(this.pre_bet);
          //        //     this.node_bets.addChild(node);
          //        //     // node.getComponent(SlotQueenBetItem).setBet(bet);
          //        // }

          //        // betAmount
          if (data.WinFree) {
            this.changeScene(true, data.ScatterCount);
            SlotQueenProxy.setBetByCount(data.BetAmount);
          } else if (data.FreeCount > 0) {
            //            // this.changeScene(true);
            this.showWildInfo(data);
            SlotQueenProxy.setBetByCount(data.BetAmount);
            //            // this._preOdd = data.freeOdds;
            //            // this._nextOdd = data.freeOdds;
            //            // this._preWildCount = data.wildCount;
          }

          this._freeCount = data.FreeCount;
        };
        _proto.setData = function setData() {
          this._bet = SlotQueenProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
          this.updateBetBtn(true);
        };
        _proto.updateBetBtn = function updateBetBtn(b) {
          if (this._auto) {
            b = false;
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.btns), _step4; !(_step4 = _iterator4()).done;) {
            var btn = _step4.value;
            btn.interactable = b;
            // Common.changeNodeEffect(btn.target, !b);
          }

          if (b) {
            this.btn_add.interactable = !(SlotQueenProxy._curBetListIndex == SlotQueenProxy.betList.length - 1 && SlotQueenProxy._curBetCount == SlotQueenProxy.betMaxCount - 1);
            this.btn_reduce.interactable = !(SlotQueenProxy._curBetListIndex == 0 && SlotQueenProxy._curBetCount == 0);
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(SlotQueenDef.tryGold + used);
            this.txt_goldFree.string = Common.numFormat(SlotQueenDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
            this.txt_goldFree.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
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
          //        //     "prefab/SlotQueenRank",
          //        //     SlotQueenProxy.bundle,
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
            node.getComponent(FortuneRank).send("slotQueenOfBounty");
          }, true);
        };
        _proto.onClickRecord = function onClickRecord() {
          //        // Common.loadPopBuddle(
          //        //     "prefab/SlotQueenHistory",
          //        //     SlotQueenProxy.bundle,
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
            node.getComponent(FortuneHistory).setGameType("slotQueenOfBounty");
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/SlotQueenHelp", SlotQueenProxy.bundle, function () {}, function (prefab) {
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
          Common.returnToHall(this, SlotQueenProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          //        // Common.loadPopBuddle(
          //        //     "prefab/FortuneSetBase",
          //        //     SlotQueenProxy.bundle,
          //        //     () => {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);

          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }

          //        //         node.getComponent(FortuneSetBase).setData({
          //        //             _curBetListIndex: SlotQueenProxy._curBetListIndex,
          //        //             _curBetCount: SlotQueenProxy._curBetCount,
          //        //             betMaxCount: SlotQueenProxy.betMaxCount,
          //        //             betList: SlotQueenProxy.betList,
          //        //             betRate: SlotQueenProxy.betRate,
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
              _curBetListIndex: SlotQueenProxy._curBetListIndex,
              _curBetCount: SlotQueenProxy._curBetCount,
              betMaxCount: SlotQueenProxy.betMaxCount,
              betList: SlotQueenProxy.betList,
              betRate: SlotQueenProxy.betRate
            });
          }, true);
        };
        _proto.onClickBetUp = function onClickBetUp() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          SlotQueenProxy._curBetCount++;
          if (SlotQueenProxy._curBetCount >= SlotQueenProxy.betMaxCount) {
            SlotQueenProxy._curBetListIndex++;
            if (SlotQueenProxy._curBetListIndex >= SlotQueenProxy.betList.length) {
              SlotQueenProxy._curBetListIndex--;
              SlotQueenProxy._curBetCount--;
            } else {
              SlotQueenProxy._curBetCount = 0;
              SlotQueenProxy.setBet(SlotQueenProxy._curBetListIndex, SlotQueenProxy._curBetCount);
            }
          } else {
            SlotQueenProxy.setBet(SlotQueenProxy._curBetListIndex, SlotQueenProxy._curBetCount);
          }
        };
        _proto.onClickBetDown = function onClickBetDown() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          SlotQueenProxy._curBetCount--;
          if (SlotQueenProxy._curBetCount < 0) {
            SlotQueenProxy._curBetListIndex--;
            if (SlotQueenProxy._curBetListIndex < 0) {
              SlotQueenProxy._curBetListIndex++;
              SlotQueenProxy._curBetCount++;
            } else {
              SlotQueenProxy._curBetCount = SlotQueenProxy.betMaxCount - 1;
              SlotQueenProxy.setBet(SlotQueenProxy._curBetListIndex, SlotQueenProxy._curBetCount);
            }
          } else {
            SlotQueenProxy.setBet(SlotQueenProxy._curBetListIndex, SlotQueenProxy._curBetCount);
          }
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          var _this3 = this;
          //        // SlotQueenProxy.auto = !SlotQueenProxy.auto;
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
          //        //     "prefab/FortuneSetAuto",
          //        //     SlotQueenProxy.bundle,
          //        //     () => {},
          //        //     (prefab) => {
          //        //         let node = cc.instantiate(prefab);
          //        //         ViewManager.instance.popNodeView(node, true);
          //        //         if (!cc.sys.isMobile) {
          //        //             node.scale = 750 / 1334;
          //        //         } else {
          //        //             node.angle = 90;
          //        //         }

          //        //         let win = 0;
          //        //         if (SlotQueenProxy.result) {
          //        //             win = SlotQueenProxy.result.prizeAmount;
          //        //         }
          //        //         node.getComponent(FortuneSetAuto).setData({
          //        //             gold: parseInt(DataManager.instance.instance.getUserDataForKey(UserKey.GOLD)),
          //        //             bet: this._bet,
          //        //             win: win,
          //        //             isQuick: this._runDelay == 0,
          //        //         });
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
            //            // this.clickEffect.switchAni("push2");

            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
            this.txt_betFree.color = Color.WHITE;
            this.txt_goldFree.color = Color.WHITE;
            this.txt_winFree.getComponent(Label).color = Color.WHITE;
          } else {
            this._auto = false;
            this.spine_start.setAnimation(0, "idle", true);
            this.btn_auto.setIsCheckedWithoutNotify(true);
            this.clickEffect.switchAni();
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_winFree.getComponent(Label).color = color().fromHEX("#86DCFF");
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_goldFree.color = color().fromHEX("#86DCFF");
            this.txt_winFree.getComponent(Label).color = color().fromHEX("#86DCFF");
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
        _proto.onClickSelect = function onClickSelect(sender, data) {
          var _this4 = this;
          var type = parseInt(data);
          var info = {
            20: "1_intro",
            10: "2_intro",
            5: "3_intro"
          };
          this.spine_freeSelect.setAnimation(0, info[type], false);
          SlotQueenDef.palyAudio(SlotQueenDef.audio.SELECT);
          this.scheduleOnce(function () {
            _this4.selectOdd(type);
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotQueen.select, {
              freeKind: type
            });
          }, 0.5);
        };
        _proto.onClickFree = function onClickFree() {
          var _this5 = this;
          this.node_freeBg.active = false;
          this.aniGun();
          this.freeTimeLeft = 3;
          this.scheduleOnce(function () {
            _this5.freeLock = false;
          }, 2);
        };
        _proto.onClickFreeWin = function onClickFreeWin() {
          var _this6 = this;
          this.spine_freeWinBtn.node.active = true;
          this.spine_freeWinBtn.setAnimation(0, "intro", false);
          this.scheduleOnce(function () {
            _this6.node_freeWinBg.active = false;
            _this6.freeLock = false;
            _this6._state = RunState.AWARD;
            _this6._runTime = 1;
          }, 0.5);
        };
        _proto.onClickQuick = function onClickQuick(b) {
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
            this.spine_quick.setAnimation(0, "off", true);
          } else {
            this._runDelay = 0;
            this.spine_quick.setAnimation(0, "intro_on", false);
            this.spine_quick.addAnimation(0, "on", true);
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
          if (!this._try && gold < this._bet * multiple && !this._isFree) {
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
          var _this7 = this;
          this.setFreeCount(this._freeCount - 1);
          if (this._freeCount < 0) {
            this._freeCount = 0;
          }
          this.checkAuto();
          //        // this.spine_startLight.setAnimation(0, "spin", false);
          this.changeBtnActive(false);
          SlotQueenDef.palyAudio(SlotQueenDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          var _loop = function _loop(i) {
            if (_this7._runDelay == 0) {
              _this7.aniLines[i].run(0);
            } else {
              _this7.scheduleOnce(function () {
                _this7.aniLines[i].run(0);
              }, _this7._runDelay * i);
            }
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop(i);
          }
          if (this._runDelay == 0) {
            this._runTime = 0.1;
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotQueen.bet, {
              betAmount: this._bet
            });
          }
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          this.txt_win.reset();
          //        // this.txt_winFree.reset();
          this.lightTimeId = 0;
          SlotQueenProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          //        // this.spine_winBg.node.active = false;
          //        // this.spine_winLight.node.active = false;
          this.node_content.active = true;
          this.node_gain.active = false;
          this.node_totalGain.active = false;
          this.txt_totalGain.reset();
          this.spine_gain.setAnimation(0, "normal_idle", true);

          //        // this.node_10light.active = false;

          //        // this.spine_x10.node.active = false;
          this._resultIndex = 0;
          this._hasBingoArr = [0, 0, 0, 0, 0];
          this.bigWinBgClickIndex = 0;
          this.changeSpecialNotice();
        };
        _proto.setGun = function setGun(index, aniName) {
          if (aniName === void 0) {
            aniName = "_intro";
          }
          //        // console.log("setGun", index, this._resultIndex);
          if (this._resultIndex == 0 && index == 0) return;
          if (index > 0) {
            this.spine_tiger.setAnimation(0, "multiplier_up", false);
            this.spine_tiger.addAnimation(0, "idle_01", true);
          }
          if (index > 3) {
            index = 3;
          }
          var name = index + 1 + aniName;
          if (aniName != "_intro") {
            name = aniName + (index + 1);
          }
          for (var i = 0; i < 4; i++) {
            this.txt_odds[i].font = this.fonts[0];
            this.txt_odds[i].fontSize = 54;
            this.spine_odds[i].setAnimation(0, i + 1 + "_grey", false);
          }
          this.txt_odds[index].font = this.fonts[1];
          this.txt_odds[index].fontSize = 66;
          this.spine_odds[index].clearTrack(0);
          this.spine_odds[index].setAnimation(0, name, false);
          this.spine_odds[index].addAnimation(0, index + 1 + "_idle", false);
          if (index != 0) {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.MULTI_UP + index);
          }
        };
        _proto.aniGun = function aniGun() {
          var _this8 = this;
          for (var i = 0; i < 4; i++) {
            this.spine_odds[i].setAnimation(0, i + 1 + "_idle", false);
          }
          var _loop2 = function _loop2(_i) {
            _this8.scheduleOnce(function () {
              _this8.setGun(_i, "freeintro_");
            }, _i * 0.2);
          };
          for (var _i = 0; _i < 4; _i++) {
            _loop2(_i);
          }
          this.scheduleOnce(function () {
            for (var _i2 = 0; _i2 < 4; _i2++) {
              _this8.txt_odds[_i2].font = _this8.fonts[0];
              _this8.txt_odds[_i2].fontSize = 54;
              _this8.spine_odds[_i2].setAnimation(0, _i2 + 1 + "_grey", false);
            }
            _this8.txt_odds[0].font = _this8.fonts[1];
            _this8.txt_odds[0].fontSize = 66;
            _this8.spine_odds[0].clearTrack(0);
            _this8.spine_odds[0].setAnimation(0, 0 + 1 + "_intro", false);
            _this8.spine_odds[0].addAnimation(0, 0 + 1 + "_idle", false);
          }, 1);
          SlotQueenDef.palyAudio(SlotQueenDef.audio.MULTI_ENTER);
        };
        _proto.changeScene = function changeScene(isFree, count) {
          var _this9 = this;
          if (isFree === void 0) {
            isFree = false;
          }
          if (count === void 0) {
            count = 3;
          }
          //        // console.trace();
          if (this._isFree == isFree) return;
          this._isFree = isFree;

          //        // this.node_titleNormal.active = !isFree;
          //        // this.node_titleFree.active = isFree;
          this.node_freeLeft.active = isFree;
          //        // this.node_down.active = !isFree;

          if (isFree) {
            this.showScatter();
            this._freeCount = 20;
            //            // this.node_menu.active = false;
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.node_freeBg.active = true;
            this.sprite_bg.spriteFrame = this.frame_bgs[1];
            this.spine_freeBg.clearTrack(0);
            this.spine_freeBg.setAnimation(0, "intro", false);
            this.spine_freeBg.addAnimation(0, "idle", true);
            this.spine_freeTop.clearTrack(0);
            this.spine_freeTop.setAnimation(0, "intro", false);
            this.spine_freeTop.addAnimation(0, "idle", true);
            this.node_item1.active = false;
            this.node_item2.active = false;
            this.node_item3.active = false;
            this.scheduleOnce(function () {
              _this9.node_item1.active = true;
              _this9.node_item2.active = true;
              _this9.node_item3.active = true;
              _this9.spine_freeSelect.node.active = true;
              _this9.spine_freeSelect.setAnimation(0, "nopush", true);
            }, 1.5);
            var bases = [20, 10, 5];
            var counts = [4, 2, 1];
            var other = count - 3;
            for (var i = 0; i < 3; i++) {
              this.txt_oddTimes[i].string = bases[i] + counts[i] * other + "";
            }
            SlotQueenDef.palyAudio(SlotQueenDef.audio.TITLE);
          } else {
            this._allFreeCount = 0;
            this.node_item1.active = false;
            this.node_item2.active = false;
            this.node_item3.active = false;
            this.spine_freeSelect.node.active = false;
            this.sprite_bg.getComponent(Sprite).spriteFrame = this.frame_bgs[0];
            this.selectOdd(20);
          }
        };
        _proto.showResult = function showResult() {
          if (!SlotQueenProxy.result) {
            return;
          }
          if (this._isFree) ;
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          //        // let prizeAmount = SlotQueenProxy.result.Res[this._resultIndex].RewardMoney;
          var prizeAmount = SlotQueenProxy.result.prizeAmount;
          if (prizeAmount > 0) {
            if (!this._auto) this.spine_start.setAnimation(0, "stop", true);
            this.changeState(RunState.AWARD);
          } else {
            this.changeState(RunState.WAIT);
            this.changeBtnActive(true);
            this.showEnd();
          }
        };
        _proto.changeState = function changeState(state) {
          var _this10 = this;
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
                var odd = SlotQueenProxy.result.prizeAmount / this._bet;
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
                this.txt_bigwin.string = Common.numFormat(SlotQueenProxy.result.prizeAmount);
                this.sp_bigWin.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this10.sp_bigWin.setCompleteListener(null);
                    _this10.sp_bigWin.setAnimation(0, aniname + "idle", true);
                    _this10.scheduleOnce(function () {
                      _this10.node_bigwin.active = false;
                      _this10.txt_bigwin.reset();
                    }, 4);
                  }
                });
                SlotQueenDef.palyAudio(SlotQueenDef.audio.BIGWIN, function (id) {
                  var time = BIG_WIN_TIME1;
                  if (odd >= 30) {
                    time = BIG_WIN_TIME2;
                  } else if (odd >= 50) {
                    time = BIG_WIN_TIME3;
                  } else {
                    time = BIG_WIN_TIME1;
                  }
                  _this10.scheduleOnce(function () {
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
                var _odd = SlotQueenProxy.result.prizeAmount / this._bet;
                var aniName = "win_small";
                if (_odd >= 10) {
                  bigWinName = "bigwin2_";
                  //                    // SlotQueenDef.palyAudio(SlotQueenDef.audio.TIGER_WIN3);
                  aniName = "win_medium";
                } else if (_odd >= 5) {
                  bigWinName = "bigwin_";
                  //                    // SlotQueenDef.palyAudio(SlotQueenDef.audio.TIGER_WIN2);
                } else ;
                this.spine_tiger.setAnimation(0, aniName, false);
                this.spine_tiger.addAnimation(0, "idle_01", true);
                this.spine_gain.setAnimation(0, bigWinName + "win", false);
                this.spine_gain.addAnimation(0, bigWinName + "idle", true);
                //                // this.spine_gain.setAnimation(1, lightName, false);

                this.scheduleOnce(function () {
                  _this10.txt_win.string = Common.numFormat(SlotQueenProxy.result.prizeAmount + "");
                  _this10.txt_winFree.string = Common.numFormat(SlotQueenProxy.freeTotalWin + "");
                });
                this.node_totalGain.active = true;
                this.node_gain.active = false;
                this.txt_totalGain.string = Common.numFormat(SlotQueenProxy.result.prizeAmount + "");
                this.changeBtnActive(true);
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                // this.scheduleOnce(() => {
                //     this.showAward();
                // }, 0.5);
                this.showAward();
                break;
              }
            case RunState.SHOW_NEXT:
              {
                this._state = RunState.SHOW_NEXT;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this10.showNext();
                }, 1.8);
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
                this._runTime = FREE_WIN_TIME;
                this.node_freeWinBg.active = true;
                this.txt_freeWin.reset();
                this.txt_freeWin.string = Common.numFormat(SlotQueenProxy.freeTotalWin);
                this.spine_freeWin.setAnimation(0, "intro", false);
                this.spine_freeWin.addAnimation(0, "idle", true);
                this.txt_winFree.reset();
                SlotQueenProxy.freeTotalWin = 0;
                SlotQueenDef.palyAudio(SlotQueenDef.audio.FREE_WIN);
                break;
              }
            case RunState.FREE_ADD:
              {
                this._state = RunState.FREE_ADD;
                this.txt_freeAdd.string = SlotQueenProxy.result.FreeCount - this._freeCount + "";
                this._allFreeCount += SlotQueenProxy.result.FreeCount - this._freeCount;
                this.txt_selectCount.string = this._allFreeCount + "";
                this.node_freeAdd.active = true;
                tween(this.node_freeAdd).to(0.3, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).delay(1).call(function () {
                  _this10.node_freeAdd.active = false;
                  _this10._state = RunState.WAIT;
                }).start();
                this.setFreeCount(SlotQueenProxy.result.FreeCount);
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          //        // this.txt_win.string = Common.numFormat(SlotQueenProxy.result.prizeAmount + "");

          this.txt_win.string = Common.numFormat(SlotQueenProxy.result.Res[this._resultIndex].RewardMoney);
          //        // this.txt_winFree.string = Common.numFormat(SlotQueenProxy.result.Res[this._resultIndex].RewardMoney);

          if (SlotQueenProxy.result.prizeAmount > 0) {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.AWARD1);
          }
          if (SlotQueenProxy.result.prizeAmount) {
            this.showLines();
            this.showWin(true);
          }
        };
        _proto.showNext = function showNext() {
          var _this11 = this;
          this.showSmoke();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          this._resultIndex++;
          this.setGun(this._resultIndex);
          var index = this._resultIndex;
          var nums = SlotQueenProxy.result.Res[index].PosMsg;
          var next = null;
          if (SlotQueenProxy.result.Res[index + 1]) {
            next = SlotQueenProxy.result.Res[index + 1].PosMsg;
          }
          for (var i = 0; i < this.aniLines.length; i++) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + this.aniLines.length * 1] - 1;
            var rand3 = nums[i + this.aniLines.length * 2] - 1;
            var arr = [rand3, rand2, rand1];
            var nextCount = 0;
            if (SlotQueenProxy.result.Res[index].RewardPos) {
              for (var _iterator5 = _createForOfIteratorHelperLoose(SlotQueenProxy.result.Res[index].RewardPos), _step5; !(_step5 = _iterator5()).done;) {
                var item = _step5.value;
                if (item == i || item == i + this.aniLines.length * 1 || item == i + this.aniLines.length * 2) {
                  nextCount++;
                }
              }
            }
            var other = null;
            if (next && nextCount > 0) {
              var _rand = next[i] - 1;
              var _rand2 = next[i + this.aniLines.length * 1] - 1;
              var _rand3 = next[i + this.aniLines.length * 2] - 1;
              var arr2 = [_rand, _rand2, _rand3];
              other = arr2[nextCount - 1];
            }
            this.aniLines[i].showNext(arr, other);
            this._hasBingoArr[i] = nextCount;
          }
          if (this._runDelay == 0) {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.QUICK_END);
          } else {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.END);
          }
          var end = function end() {
            _this11._lock = false;
            _this11.showResult();
          };
          this.scheduleOnce(function () {
            end();
          }, 1);
        };
        _proto.showEnd = function showEnd() {
          this.updateGold();
          this.changeBtnActive(true);
          this._state = RunState.WAIT;
          if (SlotQueenProxy.result.WinFree) {
            if (this._isFree) {
              this.changeState(RunState.FREE_ADD);
              this.showScatter();
            } else {
              this.changeScene(true, SlotQueenProxy.result.ScatterCount);
            }
            return;
          }
          this._freeCount = SlotQueenProxy.result.FreeCount;
          if (this._freeCount == 0) {
            if (this._isFree) {
              this.changeScene(false);
              this.changeState(RunState.FREE_WIN);
            }
          }
        };
        _proto.showScatter = function showScatter() {
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.aniLines), _step6; !(_step6 = _iterator6()).done;) {
            var i = _step6.value;
            i.showScatter();
          }
        };
        _proto.showWin = function showWin(fromNormal) {
          var _this12 = this;
          //        // this.spine_winBg.node.active = true;
          //        // this.spine_winBg.setAnimation(0, "intro", false);
          //        // this.spine_winBg.addAnimation(0, "picture", true);
          //        // this.txt_spineWin.string = "" + SlotQueenProxy.result.prizeAmount / SlotQueenProxy.result.openResult.multiples[1];
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
          var num = SlotQueenProxy.result.Res[this._resultIndex].RewardMoney;
          if (this._resultIndex > 0 && num > 0) {
            var index = this._resultIndex;
            if (index > 3) {
              index = 3;
            }
            var odd = this._odds[index];
            var money = num / odd;
            this.txt_gain.string = Common.numFormat(money);
            this.node_gainTitle.active = false;
            this.txt_odd.node.active = true;
            this.txt_odd.string = "x" + odd;
            this.txt_odd.node.getComponent(UIOpacity).opacity = 0;
            this.txt_odd.node.scale = v3(1, 1, 1);
            var gun = this.spine_odds[index];
            gun.setAnimation(0, index + 1 + "_win", false);
            gun.addAnimation(0, index + 1 + "_idle", false);
            tween(this.txt_odd.node).delay(0.2).to(0.3, {
              scale: v3(2, 2, 1)
            }).call(function () {
              _this12.txt_odd.node.active = false;
              _this12.node_gainTitle.active = true;
              _this12.txt_gain.string = Common.numFormat(num);
            }).start();
            tween(this.txt_odd.node.getComponent(UIOpacity)).delay(0.2).to(0.3, {
              opacity: 255
            }).start();
          } else {
            this.txt_gain.string = Common.numFormat(num);
          }
          if (this._isFree) ;
          if (this._resultIndex < SlotQueenProxy.result.Res.length - 1) {
            this.changeState(RunState.SHOW_NEXT);
            this.spine_gain.setAnimation(0, "normal_" + "win", false);
            this.spine_gain.addAnimation(0, "normal_" + "idle", true);
            return;
          }
          if (SlotQueenProxy.result.prizeAmount / this._bet >= 20 && !this._isFree) {
            this.scheduleOnce(function () {
              _this12.changeState(RunState.BIG_WIN);
            }, 0.3);
          } else {
            this.changeState(RunState.SHOWGAIN);
          }
          this.scheduleOnce(function () {
            _this12.setGun(0);
          }, 0);
          //        // this.resetScales();
        };

        _proto.showWildInfo = function showWildInfo(info) {
          //        // this.txt_freeCount.string = info.FreeCount + "";
          this.txt_freeLeft.string = info.FreeCount + "";
          //        // this.node_menu.active = false;
          this.node_freeLeft.active = true;
          this._isFree = true;
          this.selectOdd(info.ExtraMultiple);
        };
        _proto.setFreeCount = function setFreeCount(count) {
          this._freeCount = count;
          this.txt_freeLeft.string = count + "";
          SlotQueenDef.palyAudio(SlotQueenDef.audio.FREE_COUNT);
        };
        _proto.showSmoke = function showSmoke() {
          var _loop3 = function _loop3() {
            var i = _step7.value;
            var rand = Math.floor(Math.random() * 3) + 1;
            i.node.active = true;
            i.clearTrack(0);
            i.setAnimation(0, rand + "", false);
            i.setCompleteListener(function () {
              i.setCompleteListener(null);
              i.node.active = false;
            });
          };
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.spine_smokes), _step7; !(_step7 = _iterator7()).done;) {
            _loop3();
          }
        };
        _proto.showLines = function showLines() {
          var _this13 = this;
          var prizeIdx = SlotQueenProxy.result.Res[this._resultIndex].RewardPos;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = SlotQueenProxy.result.Res[this._resultIndex].PosMsg;
          this.hideSpine();
          this.node_spineMask.active = true;

          //        // for (let i = 0; i < prizeIdx.length; i++) {
          //        //     let info = prizeIdx[i];
          //        //     let lines = info.prizeIdx;
          //        //     for (let j = 0; j < lines.length; j++) {
          //        //         let key = lines[j];
          //        //         let result = OpenNums[key] - 1;
          //        //         this.scheduleOnce(() => {
          //        //             this.showSpine(key, result);
          //        //         }, j * 0.1);
          //        //     }
          //        // }
          var lines = prizeIdx;
          for (var j = 0; j < lines.length; j++) {
            var key = lines[j];
            var result = OpenNums[key] - 1;
            this.showSpine(key, result);
          }
          var RewardLines = SlotQueenProxy.result.Res[this._resultIndex].RewardLines;
          var _loop4 = function _loop4() {
            var node = _this13.node_lines.getChildByName("line" + (parseInt(i) + 1));
            if (node) {
              node.active = true;
              var child = node.getChildByName("line");
              var lineSp = child.getComponent(LineSprite);
              if (child) {
                // child.getComponent(LineSprite).reset();
                lineSp.hide();
                lineSp.action();
              }
              _this13.scheduleOnce(function () {
                node.active = false;
              }, 1.5);
            }
          };
          for (var i in RewardLines) {
            _loop4();
          }

          //        // this.showSmoke();

          SlotQueenDef.palyAudio(SlotQueenDef.audio.WINLINE);
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          //        // this.hideLines();
          //        // this.hideSpine();
          //        // let nums = SlotQueenProxy.result.openNums;
          //        // let prizeIdx = SlotQueenProxy.result.prizeInfo;
          //        // if (prizeIdx) {
          //        //     let len = prizeIdx.length;
          //        //     let i = this._showLineIndex;
          //        //     if (this._showLineIndex < len) {
          //        //         this.node_spineMask.active = true;
          //        //         let index = 0;
          //        //         let lines = prizeIdx[i].prizeIdx;
          //        //         let has5 = false;
          //        //         for (let j = 0; j < lines.length; j++) {
          //        //             let key = lines[j];
          //        //             let result = nums[key] - 1;
          //        //             this.showSpine(key, result);
          //        //             if (key == 7) {
          //        //                 index = 1;
          //        //             } else if (key == 12) {
          //        //                 index = 2;
          //        //             }
          //        //             if (key % 5 == 4) {
          //        //                 has5 = true;
          //        //             }
          //        //         }
          //        //         if (has5) {
          //        //             SlotQueenDef.palyAudio(SlotQueenDef.audio.LINE5);
          //        //         }
          //        //         this.txt_lineWin.node.active = true;
          //        //         // let y = 750;
          //        //         // if (prizeIdx[i].Line == 1) {
          //        //         //     y = 960;
          //        //         // } else if (prizeIdx[i].Line == 2) {
          //        //         //     y = 540;
          //        //         // }
          //        //         let y = 860;
          //        //         if (index == 1) {
          //        //             y = 680;
          //        //         } else if (index == 2) {
          //        //             y = 520;
          //        //         }
          //        //         this.txt_lineWin.node.y = y;
          //        //         this.txt_lineWin.string = Common.numFormat(prizeIdx[i].prizeAmount);
          //        //     } else {
          //        //         this._showLineIndex = -1;
          //        //         this.showLines();
          //        //     }
          //        // }
        };
        _proto.hideLines = function hideLines() {
          this.txt_lineWin.node.active = false;
        };
        _proto.onClickMenu = function onClickMenu() {
          //        // this.node_menu.active = !this.node_menu.active;
          //        // this.node_btns.active = !this.node_menu.active;
          //        // this.node_down.active = !this.node_menu.active;
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
            this.txt_bigwin.reset(SlotQueenProxy.result.prizeAmount);
          } else {
            this.sp_bigWin.setCompleteListener(null);
            this.node_bigwin.active = false;
            this.txt_bigwin.reset();
            this._runTime = 0;
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _this14 = this;
          //        // console.log("onClickStop");
          if (!SlotQueenProxy.result) {
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
          var nums = SlotQueenProxy.result.Res[0].PosMsg;
          var next = null;
          if (SlotQueenProxy.result.Res[1]) {
            next = SlotQueenProxy.result.Res[1].PosMsg;
          }
          var scatterCount = 0;
          var scatterTime = 0;
          var _loop5 = function _loop5(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + _this14.aniLines.length * 1] - 1;
            var rand3 = nums[i + _this14.aniLines.length * 2] - 1;
            var arr = [rand1, rand2, rand3];
            if (SlotQueenProxy.result.Res[0].RewardPos) {
              for (var _iterator8 = _createForOfIteratorHelperLoose(SlotQueenProxy.result.Res[0].RewardPos), _step8; !(_step8 = _iterator8()).done;) {
                var item = _step8.value;
                if (item == i || item == i + _this14.aniLines.length * 1 || item == i + _this14.aniLines.length * 2) {
                  _this14._hasBingoArr[i]++;
                }
              }
            }
            _this14.scheduleOnce(function () {
              _this14.aniLines[i].showResult(arr);
              if (next && _this14._hasBingoArr[i] > 0) {
                var _rand4 = next[i] - 1;
                var _rand5 = next[i + _this14.aniLines.length * 1] - 1;
                var _rand6 = next[i + _this14.aniLines.length * 2] - 1;
                var _arr = [_rand4, _rand5, _rand6];
                _this14.aniLines[i].setNext(_arr[_this14._hasBingoArr[i] - 1]);
              }
            }, scatterTime);
            if (rand1 == 8) {
              scatterCount++;
            }
            if (rand2 == 8) {
              scatterCount++;
            }
            if (rand3 == 8) {
              scatterCount++;
            }
            if (scatterCount >= 2 && _this14._runDelay != 0) {
              scatterTime++;
              _this14.aniLines[i].showLight(scatterTime);
              SlotQueenDef.palyAudio(SlotQueenDef.audio.HEIGHT_LIGHT);
            }
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop5(i);
          }
          if (this._runDelay == 0) {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.QUICK_END);
          } else {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.END);
          }
          this._runTime += scatterTime;
          var prizeAmount = SlotQueenProxy.result.prizeAmount;
          SlotQueenProxy.freeTotalWin += this._isFree ? prizeAmount : 0;
          var end = function end() {
            _this14._lock = false;
            _this14.showResult();
            if (_this14.lightTimeId) {
              AudioManager.instance.stopSound(_this14.lightTimeId);
            }
          };
          if (scatterTime > 0) {
            SlotQueenDef.palyAudio(SlotQueenDef.audio.HEIGHT_LIGHT_MAIN, function (id) {
              _this14.lightTimeId = id;
            });
          }
          this.scheduleOnce(function () {
            end();
          }, 0.5 + scatterTime);
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          //        // this.node_start.active = b;
          //        // this.node_stop.active = !b;

          if (this._auto) {
            return;
          }
          this.updateBetBtn(b);
          if (b) {
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
            this.txt_betFree.color = color().fromHEX("#86DCFF");
            this.txt_goldFree.color = color().fromHEX("#86DCFF");
            this.txt_winFree.getComponent(Label).color = color().fromHEX("#86DCFF");
          } else {
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
            this.txt_betFree.color = Color.WHITE;
            this.txt_goldFree.color = Color.WHITE;
            this.txt_winFree.getComponent(Label).color = Color.WHITE;
          }
          if (b) {
            this.spine_start.setAnimation(0, "idle", true);
          } else {
            this.spine_start.setAnimation(0, "star", true);
          }
        };
        _proto.updateNotice = function updateNotice(dt) {
          this.noticeDelay -= dt;
          if (this.noticeDelay < 0) this.notice_title.setPosition(this.notice_title.position.x - 1.5, this.notice_title.position.y);
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 - 233) {
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
          var x = this.notice_title.getComponent(UITransform).width / 2 > 233 ? this.notice_title.getComponent(UITransform).width / 2 - 233 : 0;
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
            this.changeNotice();
          }
        };
        _proto.update = function update(dt) {
          if (this.freeLock) {
            this.freeTimeLeft -= dt;
            this.txt_leftTime.string = Math.ceil(this.freeTimeLeft) + "";
            if (this.freeTimeLeft <= 0) {
              this._freeCount = 10;
              this.onClickSelect(null, "10");
              this.onClickFree();
            }
          }
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (SlotQueenProxy.result) {
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
            case RunState.SHOWGAIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.showEnd();
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
        return SlotQueenView;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_add", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_reduce", [_dec7], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "noticeFrames", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
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
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_gainTitle", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_totalGain", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalGain", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec27], {
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
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftCount", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "prefab_window", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "txt_lineWin", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "btn_auto", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_freeBg", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "node_freeWinBg", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeWin", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeWin", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeLeft", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "node_freeLeft", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "fonts", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "txt_odds", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "spine_odds", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeBg", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeTop", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "spine_smokes", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeSelect", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "node_item1", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "node_item2", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "node_item3", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "node_lines", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "txt_selectCount", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeWinBtn", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "node_freeWinBtn", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftTime", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "txt_oddTimes", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "node_freeAdd", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeAdd", [_dec64], {
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

System.register("chunks:///_virtual/SlotQueenWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotQueenDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Node, Component, SlotQueenDef;
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
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      SlotQueenDef = module.SlotQueenDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d7c2dxE+HhGaocIvfNMH2gb", "SlotQueenWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotQueenWindow = exports('default', (_dec = ccclass("SlotQueenWindow"), _dec2 = menu("game/SlotQueen/SlotQueenWindow"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.SkeletonData), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenWindow, _Component);
        function SlotQueenWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_normal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odds", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_odd", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wild", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotQueenWindow.prototype;
        _proto.showIndex = function showIndex(index) {
          //        // this.item.skeletonData = this.spines[index];
          //        // if (index == 0) {
          //        //     this.item.setAnimation(0, "idle", true);
          //        // } else {
          //        //     this.item.setAnimation(0, "win_idle", true);
          //        // }

          this.node_odd.active = index < 7;
          this.node_wild.active = index == 7;
          this.node_scatter.active = index == 8;
          var odd = SlotQueenDef.odds[index];
          //        // console.log("odds", odd);
          if (odd) {
            for (var i = 0; i < 3; i++) {
              this.txt_odds[i].string = odd[i] + "";
            }
          }
          this.spine_normal.skeletonData = this.spines[index];
          this.spine_normal.node.active = true;
          this.spine_normal.setAnimation(0, "win", true);

          //        // this.txt_odd1.string = "" + odd;

          SlotQueenDef.palyAudio(SlotQueenDef.windowAudio[index]);
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
        };
        return SlotQueenWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_normal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_odds", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_odd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_scatter", [_dec8], {
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

System.register("chunks:///_virtual/SlotQueenWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotQueenProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, UITransform, v3, Component, SlotQueenProxy, SlotQueenGameEvent;
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
      SlotQueenProxy = module.default;
      SlotQueenGameEvent = module.SlotQueenGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "dc136NPHedJEokRwpmitlHS", "SlotQueenWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotQueenWinItem = exports('default', (_dec = ccclass("SlotQueenWinItem"), _dec2 = menu("game/SlotQueen/SlotQueenWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotQueenWinItem, _Component);
        function SlotQueenWinItem() {
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
        var _proto = SlotQueenWinItem.prototype;
        _proto.showResult = function showResult(result, big) {
          this._index = result;
          this.spine_normal.node.active = true;
          this.spine_normal.skeletonData = this.spines[result];
          this.spine_bg.addAnimation(0, "idle", true);

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
          this.spine_normal.setAnimation(0, "win", true);
          this.showSpawn();
        };
        _proto.showSpawn = function showSpawn() {
          var _this2 = this;
          //        // this.spine_normal.setAnimation(0, "spawn", false);
          //        // this.spine_normal.addAnimation(0, "idle", true);

          this.scheduleOnce(function () {
            _this2.spine_bg.setAnimation(0, "intro", false);
            _this2.spine_bg.setCompleteListener(function () {
              _this2.spine_bg.setCompleteListener(null);
              _this2.spine_normal.node.active = false;
              _this2.spine_bg.setAnimation(0, "end", false);
            });
          }, 0.3);
        };
        _proto.onClick = function onClick() {
          SlotQueenProxy.emit(SlotQueenGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return SlotQueenWinItem;
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
  r('virtual:///prerequisite-imports/SlotQueenGame', 'chunks:///_virtual/SlotQueenGame'); 
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