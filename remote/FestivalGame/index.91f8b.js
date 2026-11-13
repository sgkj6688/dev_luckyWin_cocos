System.register("chunks:///_virtual/FestivalBetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './FestivalProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Common, FestivalGameProxy, FestivalGameEvent;
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
      FestivalGameProxy = module.default;
      FestivalGameEvent = module.FestivalGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "7d0f060tRdHQ6b/OGLG7joF", "FestivalBetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FestivalBetItem = exports('default', (_dec = ccclass("FestivalBetItem"), _dec2 = menu("game/FestivalGame/FestivalBetItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalBetItem, _Component);
        function FestivalBetItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_bet", _descriptor, _assertThisInitialized(_this));
          _this._count = 0;
          return _this;
        }
        var _proto = FestivalBetItem.prototype;
        _proto.onClickBet = function onClickBet() {
          FestivalGameProxy.emit(FestivalGameEvent.SELECT_BET, this._count);
        };
        _proto.setBet = function setBet(bet, useExp) {
          if (useExp === void 0) {
            useExp = false;
          }
          this._count = bet;
          var multiple = useExp ? 1.5 : 1;
          var count = bet * multiple;
          this.txt_bet.string = Common.ChangeMoneyShow(count, 2);
        };
        return FestivalBetItem;
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

System.register("chunks:///_virtual/FestivalCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Sprite, v3, tween, UITransform, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "557f7adpUxPwb16aA+P2htI", "FestivalCardAni", undefined);
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
      var FestivalCardAni = exports('default', (_dec = ccclass("FestivalCardAni"), _dec2 = menu("game/FestivalGame/FestivalCardAni"), _dec3 = property([Sprite]), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalCardAni, _Component);
        function FestivalCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "runningCard", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "stepHeight", _descriptor2, _assertThisInitialized(_this));
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
          _this.endIndex = 3;
          _this.fixStep = void 0;
          _this._index = 0;
          _this.cards = void 0;
          return _this;
        }
        var _proto = FestivalCardAni.prototype;
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
          this.moveStep = 60; //每帧移动步长
          this._state = CardState.DELAY;
          this.leftResultCount = 3;
          this.endNode = null;
        };
        _proto.update = function update(dt) {
          var _this2 = this;
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
                  node.setPosition(0, node.position.y - this.moveStep);
                  if (node.position.y < -(this.stepHeight + this.moveOut)) {
                    node.setPosition(0, node.position.y + this.stepHeight * CARDCOUNT);
                    this.randCard(this.runningCard[i]);
                  }
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
                  _node.setPosition(0, _node.position.y - this.moveStep);
                  if (_node.position.y < -(this.stepHeight + this.moveOut)) {
                    _node.setPosition(0, _node.position.y + this.stepHeight * CARDCOUNT);
                    this.resultCard(this.runningCard[_i2]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i2;
                    }
                  }
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
                var finish = this.finishCallBack;
                var _loop = function _loop(_i3) {
                  var node = _this2.runningCard[_i3].node;
                  var toY = node.position.y - _this2.fixStep;
                  tween(node).to(0.1, {
                    position: v3(node.position.x, toY)
                  }).call(function () {
                    // 一列的回位动画全部结束后只通知一次，回调归属在启动时确定。
                    if (_i3 === _length2 - 1 && finish) finish();
                  }).start();
                };
                for (var _i3 = 0; _i3 < _length2; _i3++) {
                  _loop(_i3);
                }
                this._state = CardState.NORMAL;
                break;
              }
          }
        };
        return FestivalCardAni;
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
          return 140;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FestivalDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './FestivalProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, director, AudioClip, isValid, AudioManager, FestivalGameProxy;
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
      FestivalGameProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4aa6dWu0RhD86s+/bO5Ttzf", "FestivalDef", undefined);
      var FestivalDef = exports('FestivalDef', /*#__PURE__*/function () {
        function FestivalDef() {}
        FestivalDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = FestivalGameProxy.bundle;
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
        FestivalDef.palyMusic = function palyMusic(name) {
          var bundle = FestivalGameProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        FestivalDef.init = function init() {};
        FestivalDef.getRand = function getRand(i) {
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
        FestivalDef.randRusult = function randRusult(amount, add) {
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
            openNums: openNums,
            prizeInfo: prizeInfo,
            prizeAmount: prizeAmount,
            prizeIdx: lines
          };
          return result;
        };
        FestivalDef.getMultple = function getMultple() {
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
        FestivalDef.checkPrize = function checkPrize(openNums) {
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
            if (FestivalDef.odds[start - 1] && count == 3) {
              prize = {
                Odds: FestivalDef.odds[start - 1],
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
        return FestivalDef;
      }());
      FestivalDef.audio = {
        //        // CLICK: "click2",
        //        // CLICK2: "click3",
        AWARD1: "award1",
        AWARD2: "award2",
        BG: "bg",
        //        // BG2: "bg2",
        TURN: "turn",
        WILD: "wild"
        //        // BIGWIN: "bigWin",
        //        // EXP: "exp",
      };

      FestivalDef.tryGold = 100000000;
      FestivalDef.odds = [2, 5, 8, 10, 12, 15, 20, 25];
      FestivalDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      FestivalDef.lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2]];
      FestivalDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FestivalGame", ['./FestivalBetItem.ts', './FestivalCardAni.ts', './FestivalDef.ts', './FestivalGoldActionItem.ts', './FestivalHelp.ts', './FestivalProxy.ts', './FestivalRecord.ts', './FestivalRecordItem.ts', './FestivalRoom.ts', './FestivalScene.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FestivalGoldActionItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Tween, tween, v3, Label, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "b2435dnyUVJjb23FkF20fXF", "FestivalGoldActionItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FestivalGoldActionItem = exports('default', (_dec = ccclass("FestivalGoldActionItem"), _dec2 = menu("game/FestivalGame/FestivalGoldActionItem"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalGoldActionItem, _Component);
        function FestivalGoldActionItem() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = FestivalGoldActionItem.prototype;
        _proto.onLoad = function onLoad() {};
        _createClass(FestivalGoldActionItem, [{
          key: "active",
          set: function set(b) {
            this.node.active = b;
            if (b) {
              Tween.stopAllByTarget(this.node);
              tween(this.node).repeatForever(tween(this.node).to(0.2, {
                scale: v3(1.2, 1.2, 1)
              }).to(0.1, {
                scale: v3(1.0, 1.0, 1)
              }).delay(0.8).start()).start();
            }
          }
        }, {
          key: "string",
          set: function set(str) {
            this.node.getComponent(Label).string = str;
          }
        }]);
        return FestivalGoldActionItem;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FestivalHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "7bf18mbJ+xBu7RwfT8mpyA9", "FestivalHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var FestivalHelp = exports('default', (_dec = ccclass("FestivalHelp"), _dec2 = menu("game/FestivalGame/FestivalHelp"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalHelp, _Component);
        function FestivalHelp() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = FestivalHelp.prototype;
        _proto.onClickClose = function onClickClose() {
          this.node.removeFromParent();
          this.node.destroy();
        };
        return FestivalHelp;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FestivalProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "4c471oHHpdBNYSsIiHK8pJJ", "FestivalProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FestivalGameEvent = exports('FestivalGameEvent', /*#__PURE__*/function (FestivalGameEvent) {
        FestivalGameEvent["ENTER_ROOM"] = "enterRoom";
        FestivalGameEvent["LEAVE_ROOM"] = "leaveRoom";
        FestivalGameEvent["UPDATE_CONFIG"] = "updateConfig";
        FestivalGameEvent["UPDATE_BETLIST"] = "updateBetList";
        FestivalGameEvent["SELECT_BET"] = "selectBet";
        FestivalGameEvent["START"] = "start";
        return FestivalGameEvent;
      }({}));

      /**
       * xiyou数据代理
       */
      var FestivalGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(FestivalGameProxyMgr, _ProxyBase);
        function FestivalGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "FestivalGame";
          _this.wsEvents = [ConfigManager.ProtocolFestival.bet, ConfigManager.ProtocolFestival.info];
          _this.auto = false;
          _this.result = null;
          _this.freeTotalWin = 0;
          _this.jackpotList = {};
          _this.betList = [];
          return _this;
        }
        var _proto = FestivalGameProxyMgr.prototype;
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
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolFestival.info:
              {
                this.betList = data.Data.betList;
                this.emit(FestivalGameEvent.UPDATE_BETLIST);
                if (data.Data.freeCount > 0) {
                  this.emit(FestivalGameEvent.UPDATE_CONFIG, data.Data);
                }
                break;
              }
            case ConfigManager.ProtocolFestival.bet:
              {
                this.result = data.Data;
                this.emit(FestivalGameEvent.START);
              }
          }
        };
        _createClass(FestivalGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return FestivalGameProxyMgr;
      }(ProxyBase);
      var FestivalGameProxy = exports('default', new FestivalGameProxyMgr("FestivalGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FestivalRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, NetManager, MainManager;
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
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "a2de3ejKlhA2qmvV8lnjZ8Y", "FestivalRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FestivalRecord = exports('default', (_dec = ccclass("FestivalRecord"), _dec2 = menu("game/FestivalGame/FestivalRecord"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalRecord, _Component);
        function FestivalRecord() {
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
          _this._gameType = "slotSpringFestival";
          return _this;
        }
        var _proto = FestivalRecord.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
            Offset: 0,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onClickClose = function onClickClose() {
          this.node.removeFromParent();
          this.node.destroy();
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage--;
          if (this._curPage < 0) {
            this._curPage = 0;
          }
          var start = this._curPage * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage++;
          var start = this._curPage * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              var info = data.Data;
              if (!info || !info.BetRecord || info.BetRecord.length == 0) {
                this._curPage = this._lastPage;
                this.Button_next.active = false;
                return;
              }
              this.Button_last.active = this._curPage > 0;
              this.Button_next.active = info.NextPage;
              this.Label_curPage.string = "Trang:" + (this._curPage + 1);
              this.scrollView_content.setData(info.BetRecord);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.off(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        _proto.onEnable = function onEnable() {
          EventManager.on(ConfigManager.protocolHall.getRecord, this.recvData, this);
        };
        return FestivalRecord;
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

System.register("chunks:///_virtual/FestivalRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Label, UIOpacity, color, Component, AutoChangeParent, Common;
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
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "1526cWPWTRAd4NlD9MPuNab", "FestivalRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FestivalRecordItem = exports('default', (_dec = ccclass("FestivalRecordItem"), _dec2 = menu("game/FestivalGame/FestivalRecordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalRecordItem, _Component);
        function FestivalRecordItem() {
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
        var _proto = FestivalRecordItem.prototype;
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
          this.Label_bet.string = Common.ChangeMoneyShow(tempData.BetAmount, 2);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyShow(tempData.Income / 1000, 2);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyShow(tempData.Income / 1000, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str + "K";
        };
        _createClass(FestivalRecordItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return FestivalRecordItem;
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

System.register("chunks:///_virtual/FestivalRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './DataManager.ts', './NetManager.ts', './AudioManager.ts', './ScrollNumLabel.ts', './FestivalCardAni.ts', './FestivalDef.ts', './FestivalGoldActionItem.ts', './FestivalProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, sp, Label, Node, Button, Sprite, Toggle, isValid, AudioClip, instantiate, sys, UIOpacity, tween, Tween, Component, i18n, ProxyMgr, GUtil, DataManager, UserKey, NetManager, AudioManager, ScrollNumLabel, FestivalCardAni, FestivalDef, FestivalGoldActionItem, FestivalGameProxy, FestivalGameEvent, Common, MainManager;
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
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      Sprite = module.Sprite;
      Toggle = module.Toggle;
      isValid = module.isValid;
      AudioClip = module.AudioClip;
      instantiate = module.instantiate;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
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
      ScrollNumLabel = module.default;
    }, function (module) {
      FestivalCardAni = module.default;
    }, function (module) {
      FestivalDef = module.FestivalDef;
    }, function (module) {
      FestivalGoldActionItem = module.default;
    }, function (module) {
      FestivalGameProxy = module.default;
      FestivalGameEvent = module.FestivalGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28;
      cclegacy._RF.push({}, "eeacdUjkQJPB5yaIMfntsx0", "FestivalRoom", undefined);
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
        WAIT: 5
      };
      var RUN_TIME = 0.8;
      var STOP_TIME = 1;
      var AWARD_TIME = 2;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var FREE_TIME = 15;
      var FestivalRoom = exports('default', (_dec = ccclass("FestivalRoom"), _dec2 = menu("game/FestivalGame/FestivalRoom"), _dec3 = property(SpriteFrame), _dec4 = property(sp.SkeletonData), _dec5 = property(FestivalCardAni), _dec6 = property(sp.Skeleton), _dec7 = property(Label), _dec8 = property(ScrollNumLabel), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(sp.Skeleton), _dec13 = property(Node), _dec14 = property(FestivalGoldActionItem), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Button), _dec21 = property(Node), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Label), _dec25 = property(SpriteFrame), _dec26 = property(Sprite), _dec27 = property(Label), _dec28 = property(ScrollNumLabel), _dec29 = property(Node), _dec30 = property(Toggle), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalRoom, _Component);
        function FestivalRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardSpriteFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_start", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_lion", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_goldActions", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_autoCancel", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_autoBg", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_titleNormal", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_titleFree", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeCount", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_locks", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeBg", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeTime", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeEnd", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgs", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameBg", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_autoTimes", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_total", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betList", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle_menu", _descriptor28, _assertThisInitialized(_this));
          _this._runDelay = 0.2;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 0;
          _this._betIndex = 0;
          //投注挡位
          _this._auto = false;
          _this._try = false;
          //    // lines = [];
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this._autoTime = 0;
          //自动次数
          _this._isFree = false;
          _this.freeLock = false;
          _this.freeTimeLeft = 0;
          //免费倒计时
          _this.rollingSoundId = null;
          _this.rollingSoundVersion = 0;
          return _this;
        }
        var _proto = FestivalRoom.prototype;
        _proto.stopRollingSound = function stopRollingSound() {
          // 同时作废未完成的加载及旧轮次停牌回调，不能影响下一轮音效。
          this.rollingSoundVersion++;
          if (this.rollingSoundId != null) AudioManager.instance.stopSound(this.rollingSoundId);
          this.rollingSoundId = null;
        };
        _proto.playRollingSound = function playRollingSound() {
          var _this2 = this;
          this.stopRollingSound();
          var version = this.rollingSoundVersion;
          var pending = new Set(this.aniLines);
          var _loop = function _loop() {
            var line = _step.value;
            line.finishCallBack = function () {
              if (version !== _this2.rollingSoundVersion) return;
              pending["delete"](line);
              if (pending.size === 0) _this2.stopRollingSound();
            };
          };
          for (var _iterator = _createForOfIteratorHelperLoose(this.aniLines), _step; !(_step = _iterator()).done;) {
            _loop();
          }
          var bundle = FestivalGameProxy.bundle;
          if (!bundle || !pending.size || !isValid(this, true) || !this.enabledInHierarchy) return;
          bundle.load("sound/" + FestivalDef.audio.TURN, AudioClip, function (err, audio) {
            if (err || !audio || version !== _this2.rollingSoundVersion || !isValid(_this2, true) || !_this2.enabledInHierarchy) return;
            // 使用可停止音源，快速停牌后不必等待音频文件自然结束。
            _this2.rollingSoundId = AudioManager.instance.playSound(audio, false, false);
          });
        };
        _proto.onLoad = function onLoad() {
          this.init();
          this.clear();
          this.initEvent();
        };
        _proto.init = function init() {
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolFestival.info, {});
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
        };
        _proto.loadAni = function loadAni() {
          var _this3 = this;
          var _loop2 = function _loop2(i) {
            _this3.aniLines[i].setData({
              index: i,
              cards: _this3.cardSpriteFrames
            });
            _this3.scheduleOnce(function () {
              _this3.aniLines[i].initCard();
            }, i * 0.1);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop2(i);
          }
          FestivalDef.palyAudio(FestivalDef.audio.WILD);
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
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.node_goldActions), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            i.active = false;
          }
        };
        _proto.showSpine = function showSpine(index, result) {
          var child = this.node_spineParent.getChildByName("spine" + index);
          var skIndex = result;
          var name = "idle";
          if (result > 5) {
            skIndex = 3;
            var names = ["A_idle", "K_idle", "Q_idle", "J_idle"];
            name = names[result - 6];
          } else if (result > 1) {
            skIndex = 2;
            var _names = ["wang_idle", "fish_idle", "yuanbao_idle", "fu_idle"];
            name = _names[result - 2];
          }
          if (child) {
            child.active = true;
            var spine = child.getComponent(sp.Skeleton);
            spine.skeletonData = this.spines[skIndex];
            spine.setAnimation(0, name, true);
          }
          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          FestivalGameProxy.on(FestivalGameEvent.UPDATE_BETLIST, this.updateBetlist, this);
          FestivalGameProxy.on(FestivalGameEvent.UPDATE_CONFIG, function (data) {
            _this4.changeScene(true);
            var bet = data.freeBetAmount;
            _this4.txt_freeCount.string = "" + (13 - data.freeCount);
            for (var i = 0; i < FestivalGameProxy.betList.length; i++) {
              if (FestivalGameProxy.betList[i] == bet) {
                _this4._betIndex = i;
                _this4.setData(FestivalGameProxy.betList[_this4._betIndex]);
                break;
              }
            }
          }, this);
          FestivalGameProxy.on(FestivalGameEvent.SELECT_BET, function (count) {
            _this4.setData(count);
          }, this);
          FestivalGameProxy.on(FestivalGameEvent.START, function () {
            _this4.runStart();
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          var children = this.node_betList.children;
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var num = FestivalGameProxy.betList[i];
            child.active = !!num;
            child.name = "" + i;
            if (num) {
              var txt = child.getChildByName("txt_bet");
              txt.getComponent(Label).string = Common.ChangeMoneyShow(num, 2);
            }
          }
          this.setData(FestivalGameProxy.betList[this._betIndex]);
        };
        _proto.onClickSelectBet = function onClickSelectBet(sender) {
          this.node_betList.active = false;
          var index = parseInt(sender.target.name);
          if (FestivalGameProxy.betList[index]) {
            this._betIndex = index;
            this.setData(FestivalGameProxy.betList[this._betIndex]);
          }
        };
        _proto.setData = function setData(betAmount) {
          if (betAmount) {
            this._bet = betAmount;
            var multiple = 1;
            this.txt_bet.string = Common.numFormat(betAmount * multiple + "");
          } else {
            this.onClickTryGame();
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          if (this._try) {
            this.txt_gold.string = Common.numFormat(FestivalDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          }
        };
        _proto.onClickBg = function onClickBg() {
          this.node_betList.active = false;
          this.node_autoBg.active = false;
          this.toggle_menu.isChecked = false;
          this.node_menu.active = false;
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickRecord = function onClickRecord() {
          var _this5 = this;
          Common.loadPopBuddle("prefab/FestivalRecord", FestivalGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            _this5.node.addChild(node);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          var _this6 = this;
          Common.loadPopBuddle("prefab/FestivalHelp", FestivalGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            _this6.node.addChild(node);
          }, true);
        };
        _proto.onClickBetList = function onClickBetList() {
          if (this._auto || this._isFree) {
            return;
          }
          this.onClickBg();
          this.node_betList.active = true;
        };
        _proto.onClickChangeBet = function onClickChangeBet(evt, data) {
          if (data == "up") {
            this._betIndex++;
            if (this._betIndex >= FestivalGameProxy.betList.length) {
              this._betIndex = 0;
            }
          } else if (data = "down") {
            this._betIndex--;
            if (this._betIndex < 0) {
              this._betIndex = FestivalGameProxy.betList.length - 1;
            }
          }
          this.setData(FestivalGameProxy.betList[this._betIndex]);
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto() {
          //        // FestivalGameProxy.auto = !FestivalGameProxy.auto;
          //        // this._auto = !this._auto;
          //        // if (this._state == RunState.AWARD_LINES && this._auto) {
          //        //     this.changeState(RunState.NORMAL);
          //        // }
          this.onClickBg();
          if (this._auto) {
            this._auto = false;
            this.node_autoCancel.active = false;
            this.txt_autoTimes.string = "";
          } else {
            this.node_autoBg.active = true;
          }
        };
        _proto.onClickCloseAuto = function onClickCloseAuto() {
          this.node_autoBg.active = false;
        };
        _proto.onClickSelectAutoTimes = function onClickSelectAutoTimes(sender, data) {
          var time = parseInt(data);
          this._autoTime = time;
          this.txt_autoTimes.string = this._autoTime + "";
          this._auto = true;
          this.node_autoCancel.active = true;
          this.node_autoBg.active = false;
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
          if (this.freeLock) return;
          if (this._state == RunState.START || this._state == RunState.STOP) return;
          if (this._lock) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this._auto = false;
            return;
          }
          var multiple = 1;
          if (!this._isFree) this.updateGold(-this._bet * multiple);
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
            this.aniLines[i].run(0);
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._auto && !this._isFree) {
            this._autoTime--;
            this.txt_autoTimes.string = this._autoTime + "";
            if (this._autoTime <= 0) {
              this.onClickAuto();
            }
          }
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolFestival.bet, {
              betAmount: this._bet + ""
            });
          }
        };
        _proto.clear = function clear() {
          this.stopRollingSound();
          this.onClickBg();
          this.txt_total.node.active = false;
          this.txt_total.reset();
          this.txt_win.reset();
          FestivalGameProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
        };
        _proto.showResult = function showResult() {
          if (!FestivalGameProxy.result) {
            return;
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          var _this7 = this;
          if (FestivalGameProxy.result.prizeAmount > 0) {
            this.changeState(RunState.AWARD);
            FestivalGameProxy.freeTotalWin += this._isFree ? FestivalGameProxy.result.prizeAmount : 0;
          } else {
            this.changeState(RunState.WAIT);
          }
          if (FestivalGameProxy.result.freeCount == 0) {
            if (this._isFree) {
              this._isFree = false;
              this.node_titleNormal.active = true;
              this.node_titleFree.active = false;
              this.gameBg.getComponent(Sprite).spriteFrame = this.bgs[0];
              this.Node_freeEnd.active = true;
              this.Label_win.node.getComponent(UIOpacity).opacity = 255;
              var destWin = FestivalGameProxy.freeTotalWin;
              var curWin = 0;
              var disWin = FestivalGameProxy.freeTotalWin / 10;
              tween(this.Label_win.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.05).call(function () {
                curWin += disWin;
                if (curWin > destWin) {
                  curWin = destWin;
                }
                _this7.Label_win.string = Common.ChangeMoneyShow(curWin, 2);
              })).delay(2.0).to(0.2, {
                opacity: 0
              }).call(function () {
                _this7.Node_freeEnd.active = false;
                FestivalGameProxy.freeTotalWin = 0;
              }).start();
            }
          } else {
            this.txt_freeCount.string = "" + (13 - FestivalGameProxy.result.freeCount);
          }
          if (FestivalGameProxy.result.freePrize) {
            this.scheduleOnce(function () {
              _this7.showFreeLines();
              _this7.changeScene(true);
            }, 0.5);
          }
          if (!this._isFree) this.changeBtnActive(true);
        };
        _proto.changeScene = function changeScene(isFree) {
          var _this8 = this;
          if (isFree === void 0) {
            isFree = false;
          }
          if (this._isFree == isFree) return;
          this._isFree = isFree;
          this.node_titleNormal.active = !isFree;
          this.node_titleFree.active = isFree;
          if (isFree) {
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.scheduleOnce(function () {
              _this8.node_freeBg.active = true;
              _this8.freeTimeLeft = FREE_TIME;
              _this8.gameBg.spriteFrame = _this8.bgs[1];
            }, 2);
          } else {
            this.gameBg.getComponent(Sprite).spriteFrame = this.bgs[0];
          }
        };
        _proto.changeState = function changeState(state) {
          var _this9 = this;
          switch (state) {
            case RunState.NORMAL:
              {
                this._state = RunState.NORMAL;
                break;
              }
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this9.showAward();
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
            case RunState.WAIT:
              {
                this._state = RunState.WAIT;
                this._runTime = WAIT_TIME;
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          var _this10 = this;
          if (this._state != RunState.AWARD) return;
          this.txt_win.string = Common.numFormat(FestivalGameProxy.result.prizeAmount + "");
          this.txt_total.node.active = true;
          this.txt_total.string = Common.numFormat(FestivalGameProxy.result.prizeAmount + "");
          Tween.stopAllByTarget(this.txt_total.node);
          tween(this.txt_total.node).delay(1.8).call(function () {
            _this10.txt_total.node.active = false;
            _this10.txt_total.reset();
          }).start();
          if (FestivalGameProxy.result.prizeAmount > 0) {
            FestivalDef.palyAudio(FestivalDef.audio.AWARD1);
            FestivalDef.palyAudio(FestivalDef.audio.AWARD2);
          }
          this.updateGold();
          if (FestivalGameProxy.result.prizeAmount) {
            this.showLines();
            this.showWin();
          }
        };
        _proto.showWin = function showWin() {
          this.spine_lion.setAnimation(0, "win", false);
          this.spine_lion.addAnimation(0, "idle", true);
        };
        _proto.showLines = function showLines() {
          var _FestivalGameProxy$re;
          var prizeInfo = (_FestivalGameProxy$re = FestivalGameProxy.result) == null ? void 0 : _FestivalGameProxy$re.prizeInfo;
          if (!prizeInfo || prizeInfo.length == 0) return false;
          var openNums = FestivalGameProxy.result.openNums;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var i = 0; i < prizeInfo.length; i++) {
            var lines = prizeInfo[i].prizeIdx;
            for (var j = 0; j < lines.length; j++) {
              var key = lines[j];
              var result = openNums[key] - 1;
              this.showSpine(key, result);
            }
            var index = Math.floor(lines[0] / 5);
            this.node_goldActions[index].active = true;
            this.node_goldActions[index].string = Common.ChangeMoneyShow(prizeInfo[i].prizeAmount, 2);
          }
          return true;
        };
        _proto.showFreeLines = function showFreeLines() {
          var openNums = FestivalGameProxy.result.openNums;
          this.node_spineMask.active = true;
          for (var i = 0; i < 15; i++) {
            if (openNums[i] == 1) {
              this.showSpine(i, openNums[i] - 1);
            }
          }
        };
        _proto.showSignleLine = function showSignleLine() {
          var prizeInfo = FestivalGameProxy.result.prizeInfo;
          if (!prizeInfo || prizeInfo.length == 0) {
            this.changeState(RunState.NORMAL);
            return;
          }
          var index = this._showLineIndex % prizeInfo.length;
          this.hideLines();
          this.hideSpine();
          var openNums = FestivalGameProxy.result.openNums;
          var lines = prizeInfo[index].prizeIdx;
          for (var j = 0; j < lines.length; j++) {
            var _key2 = lines[j];
            var result = openNums[_key2] - 1;
            this.showSpine(_key2, result);
          }
          var key = Math.floor(lines[0] / 5);
          this.node_goldActions[key].active = true;
          this.node_goldActions[key].string = Common.ChangeMoneyShow(prizeInfo[index].prizeAmount, 2);
        };
        _proto.hideLines = function hideLines() {};
        _proto.onClickMenu = function onClickMenu(evt) {
          this.node_autoBg.active = false;
          this.node_betList.active = false;
          this.node_menu.active = evt.isChecked;
        };
        _proto.onClickBack = function onClickBack() {
          this.stopRollingSound();
          Common.returnToHall(this, FestivalGameProxy.BUNDLE);
        };
        _proto.onClickFree = function onClickFree() {
          this.node_freeBg.active = false;
          this.freeLock = false;
        };
        _proto.onClickStop = function onClickStop() {
          var _this11 = this;
          if (!FestivalGameProxy.result) {
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
          var nums = FestivalGameProxy.result.openNums;
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 5] - 1;
            var rand3 = nums[i + 10] - 1;
            var arr = [rand1, rand2, rand3];
            _this11.scheduleOnce(function () {
              _this11.aniLines[i].showResult(arr);
            }, _this11._runDelay * i);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          this.scheduleOnce(function () {
            _this11._lock = false;
            _this11.showResult();
          }, this._runDelay * 3 + 0.3);
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          var name = b ? "idle" : "spin";
          this.sp_start.setAnimation(0, name, true);
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.btn_locks), _step5; !(_step5 = _iterator5()).done;) {
            var button = _step5.value;
            button.interactable = b;
            Common.changeNodeEffect(button.target, !b);
          }
        };
        _proto.update = function update(dt) {
          if (this.freeLock) {
            this.freeTimeLeft -= dt;
            this.txt_freeTime.string = Math.ceil(this.freeTimeLeft) + "";
            if (this.freeTimeLeft <= 0) {
              this.onClickFree();
            }
          }
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (FestivalGameProxy.result) {
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
                  if (this._auto || this._isFree || FestivalGameProxy.result.freePrize) {
                    this.changeState(RunState.NORMAL);
                  } else {
                    this.changeState(RunState.AWARD_LINES);
                  }
                }
                break;
              }
            case RunState.NORMAL:
              {
                if (this._auto || this._isFree) {
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
        _proto.onDisable = function onDisable() {
          this.stopRollingSound();
        };
        _proto.onDestroy = function onDestroy() {
          this.stopRollingSound();
          ProxyMgr.close(this);
        };
        return FestivalRoom;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sp_start", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "spine_lion", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_goldActions", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_autoCancel", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_autoBg", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_titleNormal", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_titleFree", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeCount", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btn_locks", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_freeBg", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeTime", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeEnd", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bgs", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "gameBg", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "txt_autoTimes", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "txt_total", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_betList", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "toggle_menu", [_dec30], {
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

System.register("chunks:///_virtual/FestivalScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './FestivalDef.ts', './FestivalProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, FestivalDef, FestivalGameProxy, Common, MainManager;
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
      FestivalDef = module.FestivalDef;
    }, function (module) {
      FestivalGameProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b5d23cmrChLvJ/fxZGJeBS3", "FestivalScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var FestivalScene = exports('default', (_dec = ccclass("FestivalScene"), _dec2 = menu("game/FestivalGame/FestivalScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FestivalScene, _Component);
        function FestivalScene() {
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
        var _proto = FestivalScene.prototype;
        _proto.onLoad = function onLoad() {
          FestivalDef.init();
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
          FestivalDef.palyMusic(FestivalDef.audio.BG);
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
          FestivalGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          FestivalGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return FestivalScene;
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
  r('virtual:///prerequisite-imports/FestivalGame', 'chunks:///_virtual/FestivalGame'); 
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