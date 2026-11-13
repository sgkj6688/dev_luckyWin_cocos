System.register("chunks:///_virtual/StoneBetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './StoneProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Common, StoneGameProxy, StoneGameEvent;
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
      Common = module.Common;
    }, function (module) {
      StoneGameProxy = module.default;
      StoneGameEvent = module.StoneGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "602e9oftRtHxrsj4Hvyzv2q", "StoneBetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var StoneBetItem = exports('default', (_dec = ccclass("StoneBetItem"), _dec2 = menu("game/StoneGame/StoneBetItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneBetItem, _Component);
        function StoneBetItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_bet", _descriptor, _assertThisInitialized(_this));
          _this._count = 0;
          return _this;
        }
        var _proto = StoneBetItem.prototype;
        _proto.onClickBet = function onClickBet() {
          StoneGameProxy.emit(StoneGameEvent.SELECT_BET, this._count);
        };
        _proto.setBet = function setBet(bet, useExp) {
          if (useExp === void 0) {
            useExp = false;
          }
          this._count = bet;
          var multiple = useExp ? 1.5 : 1;
          var count = bet * multiple;
          this.txt_bet.string = Common.ChangeMoneyShow(count, 3);
        };
        return StoneBetItem;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec3], {
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

System.register("chunks:///_virtual/StoneBonusLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './StoneDef.ts', './StoneProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, v3, tween, instantiate, Component, Common, StoneDef, StoneGameProxy, StoneGameEvent;
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
      StoneDef = module.StoneDef;
    }, function (module) {
      StoneGameProxy = module.default;
      StoneGameEvent = module.StoneGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "e0a7f5wuoZNwaJ/RF6wwmDD", "StoneBonusLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RUN_TIME = 15;
      var StoneBonusLayer = exports('default', (_dec = ccclass("StoneBonusLayer"), _dec2 = menu("game/StoneGame/StoneBonusLayer"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneBonusLayer, _Component);
        function StoneBonusLayer() {
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
        var _proto = StoneBonusLayer.prototype;
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
            StoneGameProxy.emit(StoneGameEvent.CLOSE_BONUS);
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
          StoneDef.palyAudio(StoneDef.audio.CLICK2);
          this.showAction(sender.target);
        };
        return StoneBonusLayer;
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

System.register("chunks:///_virtual/StoneCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StoneProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, v3, tween, UITransform, Tween, Component, StoneGameProxy, StoneGameEvent;
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
      StoneGameProxy = module.default;
      StoneGameEvent = module.StoneGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "79969CtHQRLaq+Ry/4dPHxK", "StoneCardAni", undefined);
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
      var StoneCardAni = exports('default', (_dec = ccclass("StoneCardAni"), _dec2 = menu("game/StoneGame/StoneCardAni"), _dec3 = property([Sprite]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneCardAni, _Component);
        function StoneCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "runningCard", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepHeight", _descriptor2, _assertThisInitialized(_this));
          //数字高度
          _this.moveOut = 150;
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
          return _this;
        }
        var _proto = StoneCardAni.prototype;
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
              this.randCard(_i);
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
          var rand = Math.floor(Math.random() * this.cards.length);
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
        _proto.initPos = function initPos() {
          var startY = 340;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(0, startY - i * 170));
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
                  if (_node == this.endNode && _y <= -this.stepHeight - 5) {
                    this._state = CardState.END;
                    this.fixStep = _y + this.stepHeight;
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
                  StoneGameProxy.emit(StoneGameEvent.FINISH_RUN_INDEX, this._index);
                }
                break;
              }
          }
        };
        return StoneCardAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "runningCard", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stepHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 170;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StoneDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './StoneProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, director, AudioClip, isValid, AudioManager, StoneGameProxy;
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
      StoneGameProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a160as4Iy9PZof0WNmW4cdD", "StoneDef", undefined);
      var StoneDef = exports('StoneDef', /*#__PURE__*/function () {
        function StoneDef() {}
        StoneDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = StoneGameProxy.bundle;
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
        StoneDef.palyMusic = function palyMusic(name) {
          var bundle = StoneGameProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        StoneDef.init = function init() {};
        StoneDef.getRand = function getRand(i) {
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
        StoneDef.randRusult = function randRusult(amount, add) {
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
        StoneDef.getMultple = function getMultple() {
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
        StoneDef.checkPrize = function checkPrize(openNums) {
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
            if (StoneDef.odds[start - 1] && count == 3) {
              prize = {
                Odds: StoneDef.odds[start - 1],
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
        return StoneDef;
      }());
      StoneDef.audio = {
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
        EXP: "exp"
      };
      StoneDef.tryGold = 100000000;
      StoneDef.odds = [2, 5, 8, 10, 12, 15, 20, 25];
      StoneDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      StoneDef.lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      StoneDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StoneGame", ['./StoneBetItem.ts', './StoneBonusLayer.ts', './StoneCardAni.ts', './StoneDef.ts', './StoneHelp.ts', './StoneProxy.ts', './StoneRoom.ts', './StoneScene.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/StoneHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "94c34O2qUpJHouSTLuPQUjx", "StoneHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var StoneHelp = exports('default', (_dec = ccclass("StoneHelp"), _dec2 = menu("game/StoneGame/StoneHelp"), _dec3 = property(PageView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneHelp, _Component);
        function StoneHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pageView", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = StoneHelp.prototype;
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
        return StoneHelp;
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

System.register("chunks:///_virtual/StoneProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "a8ec2klR/tMi5MYAqsQOB6i", "StoneProxy", undefined);
      var StoneGameEvent = exports('StoneGameEvent', /*#__PURE__*/function (StoneGameEvent) {
        StoneGameEvent["ENTER_ROOM"] = "enterRoom";
        StoneGameEvent["LEAVE_ROOM"] = "leaveRoom";
        StoneGameEvent["UPDATE_CONFIG"] = "updateConfig";
        StoneGameEvent["UPDATE_BETLIST"] = "updateBetList";
        StoneGameEvent["CLOSE_BONUS"] = "closeBonus";
        StoneGameEvent["SELECT_BET"] = "selectBet";
        StoneGameEvent["START"] = "start";
        StoneGameEvent["FINISH_RUN_INDEX"] = "FINISH_RUN_INDEX";
        return StoneGameEvent;
      }({}));

      /**
       * xiyou数据代理
       */
      var StoneGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(StoneGameProxyMgr, _ProxyBase);
        function StoneGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "StoneGame";
          _this.wsEvents = [ConfigManager.instance.ProtocolStone.bet, ConfigManager.instance.ProtocolStone.betList];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [];
          return _this;
        }
        var _proto = StoneGameProxyMgr.prototype;
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
          // console.log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.ProtocolStone.betList:
              {
                this.betList = data.Data.betList;
                this.emit(StoneGameEvent.UPDATE_BETLIST);
                break;
              }
            case ConfigManager.instance.ProtocolStone.bet:
              {
                this.result = data.Data;
                this.emit(StoneGameEvent.START);
              }
          }
        };
        _createClass(StoneGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return StoneGameProxyMgr;
      }(ProxyBase);
      var StoneGameProxy = exports('default', new StoneGameProxyMgr("StoneGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StoneRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './StoneBetItem.ts', './StoneCardAni.ts', './StoneDef.ts', './StoneProxy.ts', './Common.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, sp, Node, Label, Sprite, Prefab, v2, instantiate, v3, tween, Tween, UIOpacity, UITransform, Component, i18n, ProxyMgr, GUtil, AudioManager, ConfigManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, StoneBetItem, StoneCardAni, StoneDef, StoneGameProxy, StoneGameEvent, Common, I18nLocal;
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
      StoneBetItem = module.default;
    }, function (module) {
      StoneCardAni = module.default;
    }, function (module) {
      StoneDef = module.StoneDef;
    }, function (module) {
      StoneGameProxy = module.default;
      StoneGameEvent = module.StoneGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "00dd64piD9EuIj9BYAwcfF7", "StoneRoom", undefined);
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
      var StoneRoom = exports('default', (_dec = ccclass("StoneRoom"), _dec2 = menu("game/StoneGame/StoneRoom"), _dec3 = property(SpriteFrame), _dec4 = property(sp.SkeletonData), _dec5 = property(SpriteFrame), _dec6 = property(StoneCardAni), _dec7 = property(StoneCardAni), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(ScrollNumLabel), _dec12 = property(Label), _dec13 = property(sp.Skeleton), _dec14 = property(ScrollNumLabel), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(sp.Skeleton), _dec19 = property(Node), _dec20 = property(SpriteFrame), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(sp.Skeleton), _dec25 = property(Sprite), _dec26 = property(SpriteFrame), _dec27 = property(Prefab), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(ScrollNumLabel), _dec32 = property(sp.Skeleton), _dec33 = property(sp.Skeleton), _dec34 = property(Sprite), _dec35 = property(sp.Skeleton), _dec36 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneRoom, _Component);
        function StoneRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardSpriteFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleSpriteFrames", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "multipleLine", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_stop", _descriptor7, _assertThisInitialized(_this));
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
          return _this;
        }
        var _proto = StoneRoom.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData(1000);
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
          StoneDef.palyAudio(StoneDef.audio.WILD);
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
          StoneGameProxy.on(StoneGameEvent.UPDATE_BETLIST, this.updateBetlist, this);
          StoneGameProxy.on(StoneGameEvent.CLOSE_BONUS, function () {
            StoneDef.palyMusic(StoneDef.audio.BG);
            _this3.checkAward();
          }, this);
          StoneGameProxy.on(StoneGameEvent.SELECT_BET, function (count) {
            _this3.node_betSelect.active = false;
            _this3.setData(count);
          }, this);
          StoneGameProxy.on(StoneGameEvent.START, function () {
            _this3.runStart();
          }, this);
          StoneGameProxy.on(StoneGameEvent.FINISH_RUN_INDEX, function (index) {
            if (index == 3) {
              _this3._lock = false;
              _this3.showResult();
            }
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          this.node_bets.destroyAllChildren();
          for (var _iterator3 = _createForOfIteratorHelperLoose(StoneGameProxy.betList), _step3; !(_step3 = _iterator3()).done;) {
            var bet = _step3.value;
            var node = instantiate(this.pre_bet);
            this.node_bets.addChild(node);
            node.getComponent(StoneBetItem).setBet(bet, this._useExp);
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
            this.txt_gold.string = Common.numFormat(StoneDef.tryGold + used);
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
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickRecord = function onClickRecord() {
          GUtil.openRecord("slotGemstone");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/StoneHelp", StoneGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, StoneGameProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          this.node_betSelect.active = !this.node_betSelect.active;
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          //        // StoneGameProxy.auto = !StoneGameProxy.auto;
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
          this._useExp = evt.isChecked;
          this.node_expTip.active = this._useExp;
          var multiple = this._useExp ? 1.5 : 1;
          this.txt_bet.string = Common.numFormat(this._bet * multiple);
          this.updateBetlist();
          this.node_spineMask.active = false;
          if (this._useExp) {
            this.useExp();
          } else {
            if (!this.showLines()) {
              this.hideSpine();
            }
            this.img_betUp.spriteFrame = this.betUpSpriteFrames[0];
            this.spine_exp.setAnimation(0, "picture", true);
          }
        };
        _proto.useExp = function useExp() {
          var _this4 = this;
          var showspine = function showspine(index, result) {
            var child = _this4.node_spineParent.getChildByName("spine" + index);
            var skIndex = 0;
            var name = "picture";
            if (result > 4) {
              skIndex = 2;
              var names = ["p_red", "p_blue", "p_green"];
              name = names[result - 5];
            } else if (result > 0) {
              skIndex = 1;
              var _names2 = ["p_J", "p_Q", "p_K", "p_A"];
              name = _names2[result - 1];
            }

            //            //隐藏对应图片
            var a = Math.floor(index / 3);
            var b = index % 3;
            _this4.aniLines[b].hide(a);
            if (child) {
              child.active = true;
              var _spine = child.getComponent(sp.Skeleton);
              _spine.skeletonData = _this4.spines[skIndex];
              _spine.setAnimation(0, name, true);
              child.scale = v3(0, 0, 1);
              var delayTime = 0.1 * (a + b);
              tween(child).delay(delayTime).to(0.3, {
                scale: v3(1, 1, 1)
              }).start();
            }
          };
          this.changeState(RunState.EXPANI);
          StoneDef.palyAudio(StoneDef.audio.EXP);
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
          for (var i = 0; i < 9; i++) {
            var result = Math.floor(i / 3) + 5;
            showspine(i, result);
          }

          //        // for (let i = 0; i < 3; i++) {
          //        //     showNx(i, 15);
          //        // }
          var _loop2 = function _loop2(_i) {
            var node = instantiate(_this4.sprite_winNx.node);
            node.getComponent(Sprite).spriteFrame = _this4.multipleSpriteFrames[5];
            _this4.node.addChild(node);
            var x = Math.random() * 100;
            node.active = true;
            node.getComponent(UIOpacity).opacity = 150;
            var y = Math.random() * 100;
            node.setPosition(-500 + x, -188 + y);
            node.scale = v3(0, 0, 1);
            _this4.multipleLine.hide(_i);
            tween(node).delay(_i * 0.2).call(function () {
              tween(node.getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).bezierTo(0.4, v2(0, 400 - 170 * _i), v2(100, 100 - 170 * _i), v2(332, 190 - 170 * _i)).call(function () {
              //                    // showNx(i, 15);
              var index = _i;
              var result = 15;
              var child = _this4.node_spineParent.getChildByName("spineNX" + (index + 1));
              if (child) {
                var action = result + "x_intro";
                child.active = true;
                var _spine3 = child.getComponent(sp.Skeleton);
                _spine3.setAnimation(0, "boom", false);
                _spine3.addAnimation(0, action, false);
                _spine3.setCompleteListener(function () {
                  _spine3.setCompleteListener(null);
                });

                //                        // child.scale = 0;
                //                        // let delayTime = 0.1 * index + 0.2;
                //                        // cc.tween(child).delay(delayTime).to(0.3, { scale: 1 }).start();
              }
            }).call(function () {
              node.destroyFromParent();
            }).start();
          };
          for (var _i = 0; _i < 3; _i++) {
            _loop2(_i);
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
              position: v3(-470, this.node_exp.position.y)
            }).start();
          }
        };
        _proto.onClickExpHelp = function onClickExpHelp() {
          this.node_expTipHelp.active = !this.node_expTipHelp.active;
        };
        _proto.onClickStart = function onClickStart() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD) return;
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
          this._showExp = true;
          this.onClickExp();
          this.changeBtnActive(false);
          this.sendBet();
          this._state = RunState.START;
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };
        _proto.runStart = function runStart() {
          StoneDef.palyAudio(StoneDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(0);
          }
          this.multipleLine.run(0);
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) {
            StoneGameProxy.result = StoneDef.randRusult(this._bet);
          } else {
            NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolStone.bet, {
              betAmount: this._bet + "",
              addition: this._useExp
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.reset();
          this.txt_spineWin.reset();
          StoneGameProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          this.spine_winBg.node.active = false;
          this.spine_winLight.node.active = false;
        };
        _proto.showResult = function showResult() {
          if (!StoneGameProxy.result) {
            return;
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          if (StoneGameProxy.result.prizeAmount > 0) {
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
                var odd = 0;
                for (var _iterator4 = _createForOfIteratorHelperLoose(StoneGameProxy.result.prizeInfo), _step4; !(_step4 = _iterator4()).done;) {
                  var i = _step4.value;
                  odd += i.Odds;
                }
                var count = 180;
                odd *= StoneGameProxy.result.openResult.multiples[1];
                var aniname = "bigwin_intro";
                if (odd >= 150) {
                  aniname = "superwin_intro";
                  count = 540;
                  this._runTime = BIG_WIN_TIME3;
                } else if (odd >= 100) {
                  aniname = "megawin_intro";
                  count = 360;
                  this._runTime = BIG_WIN_TIME2;
                }
                count = GUtil.changeCurrency(count, DataManager.instance.currency, null);
                this.txt_bigwin.stepCount = count;
                this.txt_bigwin.string = Common.numFormat(StoneGameProxy.result.prizeAmount);
                this.sp_bigWin.setAnimation(0, aniname, false);
                this.sp_bigWin.setCompleteListener(function () {
                  _this5.sp_bigWin.setCompleteListener(null);
                  _this5.node_bigwin.active = false;
                  _this5.txt_bigwin.reset();
                });
                StoneDef.palyAudio(StoneDef.audio.BIGWIN, function (id) {
                  var time = 12;
                  if (odd >= 150) ;else if (odd >= 100) {
                    time = 7.3;
                  } else {
                    time = 2.5;
                  }
                  _this5.scheduleOnce(function () {
                    AudioManager.instance.stopSound(id);
                  }, time);
                });
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
          this.txt_win.string = Common.numFormat(StoneGameProxy.result.prizeAmount);
          if (StoneGameProxy.result.prizeAmount > 0) {
            StoneDef.palyAudio(StoneDef.audio.AWARD1);
          }
          this.changeBtnActive(true);
          this.updateGold();
          if (StoneGameProxy.result.prizeAmount) {
            this.showLines();
            this.showWin();
          }
        };
        _proto.showWin = function showWin() {
          var _this6 = this;
          this.spine_winBg.node.active = true;
          this.spine_winBg.setAnimation(0, "intro", false);
          this.spine_winBg.addAnimation(0, "picture", true);
          var prizeAmount = StoneGameProxy.result.prizeAmount / StoneGameProxy.result.openResult.multiples[1];
          prizeAmount = GUtil.changeCurrency(prizeAmount, DataManager.instance.currency, null);
          this.txt_spineWin.string = "" + prizeAmount;
          this.spine_winBg.setCompleteListener(function () {
            _this6.spine_winBg.setCompleteListener(null);
            if (StoneGameProxy.result.openResult.multiples[1] > 1) {
              StoneDef.palyAudio(StoneDef.audio.AWARD1);
              _this6.sprite_winNx.node.active = true;
              _this6.sprite_winNx.node.setPosition(332, _this6.sprite_winNx.node.position.y);
              _this6.sprite_winNx.node.getComponent(UIOpacity).opacity = 150;
              tween(_this6.sprite_winNx.node).to(0.5, {
                position: v3(0, _this6.sprite_winNx.node.position.y)
              }).call(function () {
                var cprizeAmount = GUtil.changeCurrency(StoneGameProxy.result.prizeAmount, DataManager.instance.currency, null);
                _this6.txt_spineWin.string = "" + cprizeAmount;
                _this6.sprite_winNx.node.active = false;
                _this6.spine_winLight.node.active = true;
                _this6.spine_winLight.setAnimation(0, "intro", false);
                _this6.spine_winLight.setCompleteListener(function () {
                  _this6.spine_winLight.setCompleteListener(null);
                  _this6.scheduleOnce(function () {
                    _this6.spine_winBg.node.active = false;
                  }, 1);
                  _this6.spine_winLight.node.active = false;
                  var odd = 0;
                  for (var _iterator5 = _createForOfIteratorHelperLoose(StoneGameProxy.result.prizeInfo), _step5; !(_step5 = _iterator5()).done;) {
                    var i = _step5.value;
                    odd += i.Odds;
                  }
                  odd *= StoneGameProxy.result.openResult.multiples[1];
                  if (odd >= 50) {
                    _this6.changeState(RunState.BIG_WIN);
                  }

                  //                            // if()
                });
              }).start();
            } else {
              _this6.scheduleOnce(function () {
                _this6.spine_winBg.node.active = false;
              }, 1);
            }
          });
        };
        _proto.showLines = function showLines() {
          var _StoneGameProxy$resul;
          var prizeIdx = (_StoneGameProxy$resul = StoneGameProxy.result) == null ? void 0 : _StoneGameProxy$resul.prizeIdx;
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = StoneGameProxy.result.openResult.OpenNums;
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
            var index = StoneGameProxy.result.openResult.multiples[1];
            var action = index + "x_idle";
            child.active = true;
            var spine = child.getComponent(sp.Skeleton);
            spine.setAnimation(0, action, true);
          }
          this.spine_mult.setAnimation(0, "idle", true);
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          //        // let prizeInfo = StoneGameProxy.result.prizeInfo;
          //        // if (!prizeInfo || prizeInfo.length == 0) {
          //        //     this.changeState(RunState.NORMAL);
          //        //     return;
          //        // }
          //        // let index = this._showLineIndex % prizeInfo.length;
          //        // let prize = prizeInfo[index];
          //        // let nums = JSON.parse(prizeInfo[index].PrizeNum);
          //        // this.hideLines();
          //        // let type = prize.PrizeType;
          //        // let lines = this.lines[type];
          //        // for (let j = 0; j < lines.length; j++) {
          //        //     let line = lines[j];
          //        //     line.active = true;
          //        // }
          //        // // this.txt_linewin.string = `${this._bet} x ${prize.Odds} = ${Common.numFormat(this._bet * prize.Odds)}`;
          //        // this.node_linewinBg.active = true;
          //        // let richtext = this.txt_linewin;
          //        // richtext.string =
          //        //     "<color=#6f4209>" +
          //        //     nums.Num +
          //        //     " " +
          //        //     "</c>" +
          //        //     "<img src=" +
          //        //     "'" +
          //        //     nums.Symbol +
          //        //     "'" +
          //        //     " width=26 height=26 align=center/>" +
          //        //     "<color=#6f4209>" +
          //        //     " trúng " +
          //        //     "=" +
          //        //     " " +
          //        //     Common.numFormat(this._bet) +
          //        //     " " +
          //        //     "x" +
          //        //     " " +
          //        //     Common.numFormat(prize.Odds) +
          //        //     " " +
          //        //     "=" +
          //        //     " " +
          //        //     Common.numFormat(this._bet * prize.Odds) +
          //        //     "</color>";
          //        // // this.txt_win.string = Common.numFormat(this._bet * prize.Odds);
          //        // let prizeIndex = StoneGameProxy.result.prizeIdx[index];
          //        // let OpenNums = StoneGameProxy.result.OpenNums;
          //        // this.hideSpine();
          //        // for (let i = 0; i < nums.Num; i++) {
          //        //     let key = prizeIndex[i];
          //        //     let result = OpenNums[key] - 1;
          //        //     this.showSpine(key, result);
          //        // }
          //        // // for (let i of prizeIndex) {
          //        // //     let result = OpenNums[i] - 1;
          //        // //     this.showSpine(i, result);
          //        // // }
        };
        _proto.hideLines = function hideLines() {
          //        // for (let lines of this.lines) {
          //        //     for (let node of lines) {
          //        //         node.active = false;
          //        //     }
          //        // }
        };
        _proto.onClickBigWin = function onClickBigWin() {
          this.sp_bigWin.setCompleteListener(null);
          this.node_bigwin.active = false;
          this.changeState(RunState.NORMAL);
          this.changeBtnActive(true);
        };
        _proto.onClickStop = function onClickStop() {
          var _this7 = this;
          if (!StoneGameProxy.result) {
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
          var nums = StoneGameProxy.result.openResult.OpenNums;
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 3] - 1;
            var rand3 = nums[i + 6] - 1;
            var arr = [rand1, rand2, rand3];
            _this7.scheduleOnce(function () {
              _this7.aniLines[i].showResult(arr);
            }, _this7._runDelay * i);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          var multiples = StoneGameProxy.result.openResult.multiples;
          var arr = [];
          for (var _iterator6 = _createForOfIteratorHelperLoose(multiples), _step6; !(_step6 = _iterator6()).done;) {
            var _i2 = _step6.value;
            if (_i2 <= 3) {
              arr.push(_i2 - 1);
            } else {
              var t = Math.floor(_i2 / 5);
              t = t + 2;
              arr.push(t);
            }
          }
          this.sprite_winNx.spriteFrame = this.multipleSpriteFrames[arr[1]];
          StoneDef.palyAudio(StoneDef.audio.END);
          var hasGem = false;
          for (var _iterator7 = _createForOfIteratorHelperLoose(StoneGameProxy.result.prizeInfo), _step7; !(_step7 = _iterator7()).done;) {
            var _i3 = _step7.value;
            var PrizeNum = JSON.parse(_i3.PrizeNum);
            if (PrizeNum.Symbol > 5) {
              hasGem = true;
              break;
            }
          }
          var end = function end() {
            _this7.nbEffect.node.active = false;
            _this7.multipleLine.showResult(arr);
            // this.scheduleOnce(() => {
            //     this._lock = false;
            //     this.showResult();
            // }, 0.6);
          };

          if (hasGem) {
            this._runTime = STOP_TIME + 2;
            this.nbEffect.node.active = true;
            this.nbEffect.setAnimation(0, "quick", true);
            this.scheduleOnce(function () {
              end();
            }, 2);
            StoneDef.palyAudio(StoneDef.audio.AWARD2);
          } else {
            this.scheduleOnce(function () {
              end();
            }, this._runDelay * 3);
          }
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          this.node_start.active = b;
          this.node_stop.active = !b;
        };
        _proto.updateNotice = function updateNotice(dt) {
          this.notice_title.setPosition(this.notice_title.position.x - 1, this.notice_title.position.y);
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width - 500) {
            this.changeNotice();
          }
        };
        _proto.changeNotice = function changeNotice() {
          var _this8 = this;
          this.noticeIndex++;
          if (this.noticeIndex >= this.noticeFrames.length) {
            this.noticeIndex = 0;
          }
          I18nLocal.getLocalRes(StoneGameProxy.BUNDLE, this.noticeFrames[this.noticeIndex].name).then(function (sprFrame) {
            _this8.notice_title.getComponent(Sprite).spriteFrame = sprFrame;
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
                  if (StoneGameProxy.result) {
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
                  this.updateGold();
                  this.changeState(RunState.NORMAL);
                  this.changeBtnActive(true);
                }
                break;
              }
            case RunState.BIG_WIN:
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
        return StoneRoom;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "multipleSpriteFrames", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniLines", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "multipleLine", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_stop", [_dec9], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/StoneScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './StoneDef.ts', './StoneProxy.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, ConfigManager, EventManager, NetManager, ViewManager, StoneDef, StoneGameProxy, Common;
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
      StoneDef = module.StoneDef;
    }, function (module) {
      StoneGameProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "2b161voxBZA0J/V5MA3ZjU0", "StoneScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var StoneScene = exports('default', (_dec = ccclass("StoneScene"), _dec2 = menu("game/StoneGame/StoneScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(StoneScene, _Component);
        function StoneScene() {
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
        var _proto = StoneScene.prototype;
        _proto.onLoad = function onLoad() {
          StoneDef.init();
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
        };
        _proto.init = function init() {
          this.reset();
          StoneDef.palyMusic(StoneDef.audio.BG);
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
          StoneGameProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          StoneGameProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return StoneScene;
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
  r('virtual:///prerequisite-imports/StoneGame', 'chunks:///_virtual/StoneGame'); 
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