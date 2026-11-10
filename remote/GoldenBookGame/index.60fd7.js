System.register("chunks:///_virtual/GoldenBookBetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './GoldenBookProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Component, Common, GoldenBookProxy, GoldenBookEvent, ProxyMgr;
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
      GoldenBookProxy = module.default;
      GoldenBookEvent = module.GoldenBookEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7f43aDAZABLeI/YRhATL0w8", "GoldenBookBetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookBetItem = exports('default', (_dec = ccclass("GoldenBookBetItem"), _dec2 = menu("game/GoldenBook/GoldenBookBetItem"), _dec3 = property(Label), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookBetItem, _Component);
        function GoldenBookBetItem() {
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
        var _proto = GoldenBookBetItem.prototype;
        _proto.onLoad = function onLoad() {
          GoldenBookProxy.on(GoldenBookEvent.SELECT_BET, this.onSelect, this);
        };
        _proto.onClickBet = function onClickBet() {
          GoldenBookProxy.emit(GoldenBookEvent.SELECT_BET, this._count);
        };
        _proto.setBet = function setBet(bet, useExp) {
          if (useExp === void 0) {
            useExp = false;
          }
          this._count = bet;
          var multiple = useExp ? 1.5 : 1;
          var count = bet * multiple;
          this.txt_bet.string = Common.ChangeMoneyFormat(count, 2);
        };
        _proto.onSelect = function onSelect(count) {
          this.node_light.active = count === this._count;
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return GoldenBookBetItem;
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

System.register("chunks:///_virtual/GoldenBookBonusLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './GoldenBookProxy.ts', './GoldenBookDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, v3, tween, instantiate, Component, Common, GoldenBookProxy, GoldenBookEvent, GoldenBookDef;
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
      GoldenBookProxy = module.default;
      GoldenBookEvent = module.GoldenBookEvent;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "c824bo6UGFEHKQgpfF52VaO", "GoldenBookBonusLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RUN_TIME = 15;
      var GoldenBookBonusLayer = exports('default', (_dec = ccclass("GoldenBookBonusLayer"), _dec2 = menu("game/GoldenBook/GoldenBookBonusLayer"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookBonusLayer, _Component);
        function GoldenBookBonusLayer() {
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
        var _proto = GoldenBookBonusLayer.prototype;
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
            GoldenBookProxy.emit(GoldenBookEvent.CLOSE_BONUS);
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
          GoldenBookDef.palyAudio(GoldenBookDef.audio.CLICK2);
          this.showAction(sender.target);
        };
        return GoldenBookBonusLayer;
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

System.register("chunks:///_virtual/GoldenBookCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoldenBookProxy.ts', './GoldenBookRunItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, instantiate, v3, tween, UITransform, Tween, Component, GoldenBookProxy, GoldenBookEvent, GoldenBookRunItem;
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
      tween = module.tween;
      UITransform = module.UITransform;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      GoldenBookProxy = module.default;
      GoldenBookEvent = module.GoldenBookEvent;
    }, function (module) {
      GoldenBookRunItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a23e54tFIRACroeZPap65Y3", "GoldenBookCardAni", undefined);
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
      var GoldenBookCardAni = exports('default', (_dec = ccclass("GoldenBookCardAni"), _dec2 = menu("game/GoldenBook/GoldenBookCardAni"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookCardAni, _Component);
        function GoldenBookCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_item", _descriptor, _assertThisInitialized(_this));
          _this.runningCard = [];
          _this.stepHeight = 142;
          //数字高度
          _this.moveOut = 80;
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
        var _proto = GoldenBookCardAni.prototype;
        _proto.onLoad = function onLoad() {
          //        /** 初始化数据管理器 */
          this.initEvent();
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_item);
            this.node.addChild(node);
            var sc = node.getComponent(GoldenBookRunItem);
            this.runningCard.push(sc);
          }
          this.initPos();
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
              this.runningCard[i].showResult(card);
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
          var rand = Math.floor(Math.random() * (this.cards.length - 2));
          // node.spriteFrame = this.cards[rand];
          node.setCard(rand);
        };
        _proto.resultCard = function resultCard(sprite) {
          if (this.leftResultCount > 0) {
            this.leftResultCount--;
            var result = this.result[this.leftResultCount];
            // sprite.spriteFrame = this.cards[result];

            sprite.showResult(result);
            sprite.node.getComponent(UITransform).priority = this.leftResultCount;
            if (result == 9) {
              // GoldenBookDef.playScatter(this._index);
              GoldenBookProxy.emit(GoldenBookEvent.PLAY_SCATTER);
            }
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
            this._state = CardState.RESULT;
          }
        };
        _proto.showScatter = function showScatter() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.runningCard), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            i.showScatter(this._index);
          }
        };
        _proto.hideScatter = function hideScatter() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            i.reset();
          }
        };
        _proto.show = function show() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.runningCard), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
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
        _proto.showWild = function showWild(i) {
          var index = this.endIndex + i - 2;
          if (index < 0) {
            index = 5 + index;
          }
          this.runningCard[index].showWild(i);
        };
        _proto.initPos = function initPos() {
          var startY = 284;
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
                this.moveStep -= 2;
                if (this.moveStep < 20) {
                  this.moveStep = 20;
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
                    this._state = CardState.END;
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
                break;
              }
            case CardState.END_EMIT:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this._state = CardState.NORMAL;
                  GoldenBookProxy.emit(GoldenBookEvent.FINISH_RUN_INDEX, this._index);
                }
                break;
              }
          }
        };
        return GoldenBookCardAni;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_item", [_dec3], {
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

System.register("chunks:///_virtual/GoldenBookDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './GoldenBookProxy.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, AudioClip, AudioManager, GoldenBookProxy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      GoldenBookProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "4e810YO37tNx5POURk0kTJj", "GoldenBookDef", undefined);
      var GoldenBookDef = exports('GoldenBookDef', /*#__PURE__*/function () {
        function GoldenBookDef() {}
        GoldenBookDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = GoldenBookProxy.bundle;
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
        GoldenBookDef.playScatter = function playScatter(index) {
          var audioName = "Scatter" + index;
          this.palyAudio(audioName);
        };
        GoldenBookDef.playLine = function playLine(index) {
          var num = index + 1;
          var audioName = "Link02_" + num;
          this.palyAudio(audioName);
        };
        GoldenBookDef.palyMusic = function palyMusic(name) {
          var bundle = GoldenBookProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        GoldenBookDef.init = function init() {};
        GoldenBookDef.getRand = function getRand(i) {
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
        GoldenBookDef.randRusult = function randRusult(amount, add) {
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
        GoldenBookDef.getMultple = function getMultple() {
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
        GoldenBookDef.checkPrize = function checkPrize(openNums) {
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
            if (GoldenBookDef.odds[start - 1] && count == 3) {
              prize = {
                Odds: GoldenBookDef.odds[start - 1],
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
        return GoldenBookDef;
      }());
      GoldenBookDef.audio = {
        CLICK: "click2",
        CLICK2: "click3",
        AWARD1: "Small_Win01",
        AWARD2: "award2",
        BG: "BGM_MG",
        BG2: "BGM_FG",
        END: "Reel_Stop",
        TURN: "Spin",
        WILD: "Wild_Extend",
        BIGWIN: "Big_Win",
        EXP: "Extra_Bet_On",
        BOOK1: "Book_Show",
        BOOK2: "Book_Show_Ex",
        LIGHT: "MG_NearWin",
        LINE: "Link01",
        SCATTER_BELL: "Scatter_Bell",
        SCATTER_FLY: "Scatter_Fly",
        SCATTER_ON: "Scatter_On",
        SCATTER_START: "Fg_Approach",
        FREE_END: "FG_End",
        FREE_SYMBOL: "Gold_Symol",
        FREE_ADD: "Get_Free",
        CHANGE_SYMBOL: "Change_Symbol"
      };
      GoldenBookDef.tryGold = 100000000;
      GoldenBookDef.odds = [2, 5, 8, 10, 12, 15, 20, 25];
      GoldenBookDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      GoldenBookDef.sysbolNames = [];
      GoldenBookDef.linesAninames = [1, 1, 1, 2, 3, 4, 4, 5, 7, 6];
      GoldenBookDef.attachNames = ["Symbol/Symbol_00", "Symbol/Symbol_01", "Symbol/Symbol_02", "Symbol/Symbol_03", "Symbol/Symbol_04", "Symbol/Symbol_05_A", "Symbol/Symbol_06_A", "Symbol/Symbol_07_A", "Symbol/Symbol_08_A"];
      GoldenBookDef.attachTempNames = ["Symbol/Symbol_00", "Symbol/Symbol_01", "Symbol/Symbol_02", "Symbol/Symbol_03", "Symbol/Symbol_04", "Symbol/Symbol_05", "Symbol/Symbol_06", "Symbol/Symbol_07", "Symbol/Symbol_08"];
      GoldenBookDef.lines = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [0, 6, 12, 8, 4], [10, 6, 2, 8, 14], [5, 1, 2, 3, 9], [5, 11, 12, 13, 9], [0, 1, 7, 13, 14], [10, 11, 7, 3, 4], [5, 11, 7, 3, 9]];
      GoldenBookDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoldenBookFreeAction.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoldenBookDef.ts', './GoldenBookProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Node, SpriteFrame, Sprite, tween, v3, UIOpacity, Component, GoldenBookDef, GoldenBookProxy, GoldenBookEvent;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }, function (module) {
      GoldenBookProxy = module.default;
      GoldenBookEvent = module.GoldenBookEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "8ee4doEn6hGjLVpNY0YSFxG", "GoldenBookFreeAction", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookFreeAction = exports('default', (_dec = ccclass("GoldenBookFreeAction"), _dec2 = menu("game/GoldenBook/GoldenBookFreeAction"), _dec3 = property(sp.Skeleton), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Sprite), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookFreeAction, _Component);
        function GoldenBookFreeAction() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_book", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_count", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_count2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatters", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_nums", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_num", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodes", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor8, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = GoldenBookFreeAction.prototype;
        _proto.onLoad = function onLoad() {
          this.node.active = false;
        };
        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          this.txt_count.string = "" + data.freeCount;
          this.txt_count2.string = "" + data.freeCount;
          this.node.active = true;
          var x = -346;
          var y = 142;
          var _loop = function _loop(i) {
            var index = data.positions[i];
            var a = Math.floor(index / 5);
            var b = index % 5;
            _this2.node_scatters[i].active = true;
            _this2.node_scatters[i].setPosition(x + b * 173, y - a * 142);
            tween(_this2.node_scatters[i]).to(1, {
              position: v3(0, 0)
            }).call(function () {
              _this2.node_scatters[i].active = false;
            }).start();
          };
          for (var i = 0; i < 3; i++) {
            _loop(i);
          }
          GoldenBookDef.palyAudio(GoldenBookDef.audio.SCATTER_FLY);
          GoldenBookDef.palyAudio(GoldenBookDef.audio.SCATTER_START);
          this.scheduleOnce(this.showBook, 1);
        };
        _proto.showBook = function showBook() {
          var _this3 = this;
          var data = this._data;
          this.node_light.active = true;
          this.spine_book.node.active = true;
          this.spine_book.setAttachment("Symbol_Seleted", GoldenBookDef.attachNames[data.icon1]);
          this.spine_book.setAttachment("Symbol_Seleted_Temp", GoldenBookDef.attachTempNames[data.icon1]);
          if (data.icon2 != null && data.icon2 != undefined) {
            this.spine_book.setAttachment("Symbol_EX2", GoldenBookDef.attachNames[data.icon2]);
            this.spine_book.setAttachment("Symbol_EX2_Temp", GoldenBookDef.attachTempNames[data.icon2]);
            this.spine_book.setAnimation(0, "ExBet_Start_H", false);
            this.sprite_num.spriteFrame = this.frame_nums[0];
            GoldenBookDef.palyAudio(GoldenBookDef.audio.BOOK2);
            tween(this.sprite_num.node).delay(5.2).call(function () {
              _this3.sprite_num.spriteFrame = _this3.frame_nums[1];
            }).to(0.2, {
              scale: v3(1.1, 1.1, 1)
            }).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
          } else {
            this.spine_book.setAnimation(0, "Start_H", false);
            this.sprite_num.spriteFrame = this.frame_nums[0];
            GoldenBookDef.palyAudio(GoldenBookDef.audio.BOOK1);
          }
          this.spine_book.setCompleteListener(function () {
            _this3.spine_book.setCompleteListener(null);
            if (data.icon2 != null && data.icon2 != undefined) {
              _this3.spine_book.setAnimation(0, "ExBet_End_H", false);
            } else {
              _this3.spine_book.setAnimation(0, "End_H", false);
            }
            _this3.node_light.active = false;
            GoldenBookProxy.emit(GoldenBookEvent.FINISH_FREEANI);
          });
        };
        _proto.update = function update(dt) {
          for (var i = 1; i < 4; i++) {
            var _slot = this.spine_book.findSlot("FG_De_Txt_R0" + i);
            if (_slot) {
              var a = _slot.color.a * 255;
              this.nodes[i].getComponent(UIOpacity).opacity = a;
            }
          }
          var slot = this.spine_book.findSlot("FG_De_Counts_Num_R");
          if (slot) {
            var _a = slot.color.a * 255;
            this.nodes[0].getComponent(UIOpacity).opacity = _a;
          }
        };
        return GoldenBookFreeAction;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_book", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_count2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_scatters", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frame_nums", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprite_num", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "nodes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec10], {
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

System.register("chunks:///_virtual/GoldenBookFreeEnd.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ScrollNumLabel.ts', './GoldenBookDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Component, Common, ScrollNumLabel, GoldenBookDef;
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
      Common = module.Common;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "bd493GlGp9FAoSMLspLZLUv", "GoldenBookFreeEnd", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookFreeEnd = exports('default', (_dec = ccclass("GoldenBookFreeEnd"), _dec2 = menu("game/GoldenBook/GoldenBookFreeEnd"), _dec3 = property(sp.Skeleton), _dec4 = property(Label), _dec5 = property(ScrollNumLabel), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookFreeEnd, _Component);
        function GoldenBookFreeEnd() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_ani", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_count", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GoldenBookFreeEnd.prototype;
        _proto.onLoad = function onLoad() {
          this.node.active = false;
        };
        _proto.setData = function setData(data) {
          var _this2 = this;
          this.node.active = true;
          this.txt_count.string = data.totalCount + "";
          this.txt_win.reset();
          this.txt_win.string = Common.numFormat(data.win + "");
          this.spine_ani.setAnimation(0, "Start", false);
          this.spine_ani.addAnimation(0, "Loop", false);
          this.spine_ani.addAnimation(0, "End", false);
          this.spine_ani.setCompleteListener(function (trackEntry) {
            var name = trackEntry.animation ? trackEntry.animation.name : "";
            if (name == "End") {
              _this2.spine_ani.setCompleteListener(null);
              _this2.node.active = false;
            }
          });
          GoldenBookDef.palyAudio(GoldenBookDef.audio.FREE_END);
        };
        return GoldenBookFreeEnd;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_ani", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_count", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec5], {
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

System.register("chunks:///_virtual/GoldenBookFreeTitle.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Node, Component;
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
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "7a325Nr4ldOv7PSYYntdEsk", "GoldenBookFreeTitle", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookFreeTitle = exports('default', (_dec = ccclass("GoldenBookFreeTitle"), _dec2 = menu("game/GoldenBook/GoldenBookFreeTitle"), _dec3 = property(Label), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookFreeTitle, _Component);
        function GoldenBookFreeTitle() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_freeLeftCount", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_icon1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_icon2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_icon2", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light2", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GoldenBookFreeTitle.prototype;
        _proto.onLoad = function onLoad() {
          this.node.active = false;
          this.node_light1.active = false;
          this.node_light2.active = false;
        };
        _proto.setData = function setData(data) {
          this.node.active = true;
          this.sprite_icon1.spriteFrame = data.icon1;
          this.txt_freeLeftCount.string = data.freeCount + "";
          if (data.icon2 != null && data.icon2 != undefined) {
            this.node_icon2.active = true;
            this.sprite_icon2.spriteFrame = data.icon2;
          } else {
            this.node_icon2.active = false;
          }
        };
        _proto.showLight = function showLight(index) {
          if (index == 1) {
            this.node_light1.active = true;
            this.node_light2.active = false;
          } else {
            this.node_light1.active = false;
            this.node_light2.active = true;
          }
        };
        _proto.hideLight = function hideLight() {
          this.node_light1.active = false;
          this.node_light2.active = false;
        };
        _proto.setCount = function setCount(count) {
          this.txt_freeLeftCount.string = count + "";
        };
        _proto.reduseCount = function reduseCount() {
          if (this.txt_freeLeftCount.string.length == 0) {
            return;
          }
          var num = parseInt(this.txt_freeLeftCount.string);
          if (num) {
            num--;
            this.txt_freeLeftCount.string = num + "";
          }
        };
        return GoldenBookFreeTitle;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_freeLeftCount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_icon1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprite_icon2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_icon2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_light1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_light2", [_dec8], {
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

System.register("chunks:///_virtual/GoldenBookGame", ['./GoldenBookBetItem.ts', './GoldenBookBonusLayer.ts', './GoldenBookCardAni.ts', './GoldenBookDef.ts', './GoldenBookFreeAction.ts', './GoldenBookFreeEnd.ts', './GoldenBookFreeTitle.ts', './GoldenBookHelp.ts', './GoldenBookProxy.ts', './GoldenBookRoom.ts', './GoldenBookRunItem.ts', './GoldenBookScene.ts', './GoldenBookSpineItem.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GoldenBookHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "90227ZjjUpMF7CmGPdvAfHx", "GoldenBookHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookHelp = exports('default', (_dec = ccclass("GoldenBookHelp"), _dec2 = menu("game/GoldenBook/GoldenBookHelp"), _dec3 = property(PageView), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookHelp, _Component);
        function GoldenBookHelp() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pageView", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = GoldenBookHelp.prototype;
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
        return GoldenBookHelp;
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

System.register("chunks:///_virtual/GoldenBookProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "1b3b5BkfXlMuI0njl7eDnhO", "GoldenBookProxy", undefined);
      var GoldenBookEvent = exports('GoldenBookEvent', /*#__PURE__*/function (GoldenBookEvent) {
        GoldenBookEvent["ENTER_ROOM"] = "enterRoom";
        GoldenBookEvent["LEAVE_ROOM"] = "leaveRoom";
        GoldenBookEvent["UPDATE_CONFIG"] = "updateConfig";
        GoldenBookEvent["UPDATE_BETLIST"] = "updateBetList";
        GoldenBookEvent["CLOSE_BONUS"] = "closeBonus";
        GoldenBookEvent["SELECT_BET"] = "selectBet";
        GoldenBookEvent["START"] = "start";
        GoldenBookEvent["FINISH_RUN_INDEX"] = "finishRunIndex";
        GoldenBookEvent["FINISH_FREEANI"] = "endFreeAni";
        GoldenBookEvent["PLAY_SCATTER"] = "playScatter";
        return GoldenBookEvent;
      }({}));

      /**
       * xiyou数据代理
       */
      var GoldenBookProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(GoldenBookProxyMgr, _ProxyBase);
        function GoldenBookProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "GoldenBookGame";
          _this.wsEvents = [ConfigManager.instance.ProtocolSlotGoldenBook.bet, ConfigManager.instance.ProtocolSlotGoldenBook.info];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [1000, 2000, 3000, 5000, 8000, 10000, 20000, 50000, 100000, 200000, 300000, 400000, 500000, 700000, 1000000];
          _this.onFree = false;
          return _this;
        }
        var _proto = GoldenBookProxyMgr.prototype;
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
        _proto.checkBonusIndex = function checkBonusIndex(index) {
          if (this.result) {
            if (this.onFree && this.result.freeInfo.scatterBonusSymbol) {
              for (var _iterator3 = _createForOfIteratorHelperLoose(this.result.freeInfo.scatterBonusSymbol), _step3; !(_step3 = _iterator3()).done;) {
                var symbol = _step3.value;
                if (symbol == index) {
                  return true;
                }
              }
            }
          }
          return false;
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.ProtocolSlotGoldenBook.bet:
              {
                this.result = data.Data;
                this.emit(GoldenBookEvent.START);
                break;
              }
            case ConfigManager.instance.ProtocolSlotGoldenBook.info:
              {
                this.result = data.Data;
                this.emit(GoldenBookEvent.ENTER_ROOM);
                break;
              }
          }
        };
        _createClass(GoldenBookProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return GoldenBookProxyMgr;
      }(ProxyBase);
      var GoldenBookProxy = exports('default', new GoldenBookProxyMgr("GoldenBookProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GoldenBookRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './AudioManager.ts', './ConfigManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './GoldenBookProxy.ts', './Common.ts', './GoldenBookCardAni.ts', './GoldenBookDef.ts', './GoldenBookBetItem.ts', './GoldenBookSpineItem.ts', './GoldenBookFreeTitle.ts', './GoldenBookFreeAction.ts', './GoldenBookFreeEnd.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Node, Label, sp, Sprite, Prefab, Toggle, instantiate, Tween, tween, v3, sys, Button, UIOpacity, UITransform, Component, i18n, ProxyMgr, GUtil, AudioManager, ConfigManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, GoldenBookProxy, GoldenBookEvent, Common, GoldenBookCardAni, GoldenBookDef, GoldenBookBetItem, GoldenBookSpineItem, GoldenBookFreeTitle, GoldenBookFreeAction, GoldenBookFreeEnd;
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
      Node = module.Node;
      Label = module.Label;
      sp = module.sp;
      Sprite = module.Sprite;
      Prefab = module.Prefab;
      Toggle = module.Toggle;
      instantiate = module.instantiate;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      sys = module.sys;
      Button = module.Button;
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
      GoldenBookProxy = module.default;
      GoldenBookEvent = module.GoldenBookEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GoldenBookCardAni = module.default;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }, function (module) {
      GoldenBookBetItem = module.default;
    }, function (module) {
      GoldenBookSpineItem = module.default;
    }, function (module) {
      GoldenBookFreeTitle = module.default;
    }, function (module) {
      GoldenBookFreeAction = module.default;
    }, function (module) {
      GoldenBookFreeEnd = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37;
      cclegacy._RF.push({}, "8dc1824CxlL/JK14xCyW1BJ", "GoldenBookRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RunState = {
        NORMAL: 0,
        START: 1,
        STOP: 2,
        AWARD: 3,
        AWARD_LINES: 4,
        AWARD_FREE: 5,
        BIG_WIN: 6,
        EXPANI: 7,
        WAIT: 8,
        SHOWGAIN: 9,
        ENTER_FREE: 10,
        FINISH_FREEANI: 11,
        LEAVE_FREE: 12,
        FREE_END: 13
      };
      var RUN_TIME = 1.3;
      var STOP_TIME = 5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 7;
      var BIG_WIN_TIME2 = 8 + 7;
      var BIG_WIN_TIME3 = 9 + 15;
      var LINE_TIME = 1.5;
      var EXPANI_TIME = 1.5;
      var WAIT_TIME = 1.5;
      var GoldenBookRoom = exports('default', (_dec = ccclass("GoldenBookRoom"), _dec2 = menu("game/GoldenBook/GoldenBookRoom"), _dec3 = property(SpriteFrame), _dec4 = property(GoldenBookCardAni), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(ScrollNumLabel), _dec8 = property(ScrollNumLabel), _dec9 = property(Label), _dec10 = property(sp.Skeleton), _dec11 = property(ScrollNumLabel), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(sp.Skeleton), _dec15 = property(sp.Skeleton), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(sp.Skeleton), _dec22 = property(Sprite), _dec23 = property(SpriteFrame), _dec24 = property(Prefab), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(Node), _dec29 = property(GoldenBookFreeTitle), _dec30 = property(Node), _dec31 = property(GoldenBookFreeAction), _dec32 = property(GoldenBookFreeEnd), _dec33 = property(SpriteFrame), _dec34 = property(Sprite), _dec35 = property(sp.Skeleton), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Toggle), _dec39 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookRoom, _Component);
        function GoldenBookRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cardSpriteFrames", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor3, _assertThisInitialized(_this));
          // @property(cc.Node)
          // node_stop: cc.Node = null;
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_TotalWin", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_exp", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_exp", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_expUp", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betSelect", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_betUp", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "img_betUp", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betUpSpriteFrames", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_bet", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_expTipHelp", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bg", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_line", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeTitle", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatterLight", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeAction", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "freeEnd", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frameBgs", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_auto", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_setting", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_logo", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toggle_exp", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_bgFree", _descriptor37, _assertThisInitialized(_this));
          _this._runDelay = 0.2;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 1000;
          _this._auto = false;
          _this._try = false;
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this._useExp = false;
          //使用加成
          _this._showExp = false;
          _this.noticeIndex = 0;
          _this._resultIndex = 0;
          _this._isFree = false;
          _this._wildList = [-1, -1, -1, -1, -1];
          _this._isScatter = false;
          _this.freeLock = false;
          _this._logoTime = 0;
          _this._bigWinSoundId = 0;
          _this.bigWinBgClickIndex = 0;
          _this.scatterCount = 0;
          return _this;
        }
        var _proto = GoldenBookRoom.prototype;
        _proto.onLoad = function onLoad() {
          this.setData(1000);
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].setData({
              index: i,
              cards: this.cardSpriteFrames
            });
          }
          this.updateBetlist();
          this.init();
          this.initEvent();

          // this.spine_betUp.setAttachment("Symbol_Seleted", "Symbol/Symbol_02");
        };

        _proto.init = function init() {
          this.spine_exp.setAnimation(0, "picture", true);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolSlotGoldenBook.info, {});
          GoldenBookDef.palyMusic(GoldenBookDef.audio.BG);
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
          this.clear();
        };
        _proto.loadAni = function loadAni() {
          this.spine_bg.setAnimation(0, "idle", true);
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
        _proto.hideSpineWithoutWild = function hideSpineWithoutWild() {
          // let children = this.node_spineParent.children;
          // for (let node of children) {
          //     let spine = node.getComponent(GoldenBookSpineItem);
          //     if (spine && spine.index == 10) {
          //         node.active = true;
          //     } else {
          //         node.active = false;
          //     }
          // }

          for (var i = 0; i < GoldenBookProxy.result.OpenNums[this._resultIndex].openNum.length; i++) {
            if (GoldenBookProxy.result.OpenNums[this._resultIndex].openNum[i] == 11) ;else {
              var child = this.node_spineParent.getChildByName("spine" + i);
              if (child) {
                child.active = false;
              }
            }
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.aniLines), _step3; !(_step3 = _iterator3()).done;) {
            var cardAni = _step3.value;
            cardAni.show();
          }
        };
        _proto.showScatter = function showScatter() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.aniLines), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            i.showScatter();
          }
          this.node_scatterLight.active = true;
          GoldenBookDef.palyAudio(GoldenBookDef.audio.LIGHT);
        };
        _proto.hideScatter = function hideScatter() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.aniLines), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            i.hideScatter();
          }
          this.node_scatterLight.active = false;
          if (GoldenBookProxy.result && GoldenBookProxy.result.freePrize) {
            GoldenBookDef.palyAudio(GoldenBookDef.audio.SCATTER_BELL);
          }
        };
        _proto.showWild = function showWild(ani) {
          if (ani === void 0) {
            ani = true;
          }
          var wildCount = 0;
          if (this._resultIndex == 0) {
            for (var i = 0; i < GoldenBookProxy.result.OpenNums[0].openNum.length; i++) {
              if (GoldenBookProxy.result.OpenNums[0].openNum[i] == 11) {
                wildCount++;
                if (ani) {
                  this.showSpine(i, 10);
                } else {
                  var a = Math.floor(i / 5);
                  var b = i % 5;
                  this.aniLines[b].hide(a);
                  var child = this.node_spineParent.getChildByName("spine" + i);
                  if (child) {
                    child.active = true;
                    var spine = child.getComponent(GoldenBookSpineItem);
                    spine.showWild(a);
                  }
                }
              }
            }
          }
          return wildCount;
        };
        _proto.showSpine = function showSpine(index, result) {
          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
          var child = this.node_spineParent.getChildByName("spine" + index);
          if (child) {
            child.active = true;
            var spine = child.getComponent(GoldenBookSpineItem);
            spine.setData(result, a, this._resultIndex != 0);
          }
        };
        _proto.showFreeSpine = function showFreeSpine(index, result) {
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
          var child = this.node_spineParent.getChildByName("spine" + index);
          if (child) {
            child.active = true;
            var spine = child.getComponent(GoldenBookSpineItem);
            spine.showFree(result);
          }
        };
        _proto.showFreeSpineEnd = function showFreeSpineEnd(index, result) {
          var b = index % 5;
          this.aniLines[b].show();
          var child = this.node_spineParent.getChildByName("spine" + index);
          if (child) {
            child.active = true;
            var spine = child.getComponent(GoldenBookSpineItem);
            spine.showFreeEnd(result);
          }
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          GoldenBookProxy.on(GoldenBookEvent.UPDATE_BETLIST, this.updateBetlist, this);
          GoldenBookProxy.on(GoldenBookEvent.SELECT_BET, function (count) {
            _this2.node_betSelect.active = false;
            _this2.setData(count);
          }, this);
          GoldenBookProxy.on(GoldenBookEvent.START, function () {
            _this2.runStart();
          }, this);
          GoldenBookProxy.on(GoldenBookEvent.FINISH_RUN_INDEX, function (index) {
            if (index == 2 && _this2._isScatter) {
              _this2.showScatter();
            }
            if (index == 4) {
              _this2.hideScatter();
              _this2._lock = false;
              _this2.showResult();
            }
          }, this);
          GoldenBookProxy.on(GoldenBookEvent.FINISH_FREEANI, function () {
            _this2.changeState(RunState.FINISH_FREEANI);
          }, this);
          GoldenBookProxy.on(GoldenBookEvent.ENTER_ROOM, function () {
            if (GoldenBookProxy.result.betAmount) {
              GoldenBookProxy.emit(GoldenBookEvent.SELECT_BET, GoldenBookProxy.result.betAmount);
              _this2.setData(GoldenBookProxy.result.betAmount);
              _this2.updateBetlist();
            }

            // if (GoldenBookProxy.result.ex) {
            //     // this._useExp = true;
            //     // let multiple = this._useExp ? 1.5 : 1;
            //     // this.txt_bet.string = Common.numFormat(this._bet * multiple + "");
            //     // this.updateBetlist();
            //     // this.useExp();

            //     this.toggle_exp.isChecked = true;
            // }
            if (GoldenBookProxy.result.OpenNums[_this2._resultIndex] && GoldenBookProxy.result.OpenNums[_this2._resultIndex].openNum.length > 0) {
              var nums = GoldenBookProxy.result.OpenNums[_this2._resultIndex].openNum;
              for (var i = 0; i < _this2.aniLines.length; i++) {
                var rand1 = nums[i] - 1;
                var rand2 = nums[i + 5] - 1;
                var rand3 = nums[i + 10] - 1;
                var arr = [rand1, rand2, rand3];
                _this2.aniLines[i].showResult(arr, true);
              }
              _this2.showWild(false);
            } else {
              for (var _i = 0; _i < _this2.aniLines.length; _i++) {
                var _rand = _i + 6;
                var _rand2 = _i + 6;
                var _rand3 = _i + 6;
                var _arr = [_rand, _rand2, _rand3];
                _this2.aniLines[_i].showResult(_arr, true);
              }
            }
            if (GoldenBookProxy.result.freePrize) {
              _this2.changeState(RunState.ENTER_FREE);
            } else if (GoldenBookProxy.result.freeInfo.surplusFreeCount > 0) {
              _this2._isFree = GoldenBookProxy.onFree = true;
              _this2.changeState(RunState.FINISH_FREEANI);
            }
          }, this);
          GoldenBookProxy.on(GoldenBookEvent.PLAY_SCATTER, function () {
            GoldenBookDef.playScatter(++_this2.scatterCount);
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          this.node_bets.destroyAllChildren();
          for (var _iterator6 = _createForOfIteratorHelperLoose(GoldenBookProxy.betList), _step6; !(_step6 = _iterator6()).done;) {
            var bet = _step6.value;
            var node = instantiate(this.pre_bet);
            this.node_bets.addChild(node);
            node.getComponent(GoldenBookBetItem).setBet(bet, this._useExp);
            node.getComponent(GoldenBookBetItem).onSelect(this._bet);
          }
        };
        _proto.setData = function setData(betAmount) {
          if (betAmount) {
            this._bet = betAmount;
            var multiple = this._useExp ? 1.5 : 1;
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
            this.txt_gold.string = Common.numFormat(GoldenBookDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
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
          GUtil.openRecord("slotGoldenBook");
        };
        _proto.onClickRank = function onClickRank() {
          GUtil.openRank("slotGoldenBook");
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/GoldenBookHelp", GoldenBookProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, GoldenBookProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (this._isFree || this._auto) return;
          this.node_betSelect.active = !this.node_betSelect.active;
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          //        // GoldenBookProxy.auto = !GoldenBookProxy.auto;
          this._auto = !this._auto;

          // let spine = sender.target.getComponent(sp.Skeleton);
          var spine = this.spine_auto;
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
          if (this._isFree || this._auto) {
            evt.setIsCheckedWithoutNotify(!evt.isChecked);
            return;
          }
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.SHOWGAIN && this._state != RunState.AWARD_LINES && this._state != RunState.AWARD) {
            // evt.isChecked = !evt.isChecked;
            evt.setIsCheckedWithoutNotify(!evt.isChecked);
            return;
          }
          this._useExp = evt.isChecked;
          var multiple = this._useExp ? 1.5 : 1;
          this.txt_bet.string = Common.numFormat(this._bet * multiple + "");
          this.updateBetlist();
          this.node_spineMask.active = false;
          if (this._useExp) {
            this.useExp();
          } else {
            // if (!this.showLines()) {
            //     this.hideSpine();
            // }
            this.img_betUp.spriteFrame = this.betUpSpriteFrames[0];
            this.spine_exp.setAnimation(0, "picture", true);
          }
        };
        _proto.useExp = function useExp() {
          var _this3 = this;
          this.changeState(RunState.EXPANI);
          GoldenBookDef.palyAudio(GoldenBookDef.audio.EXP);
          this.spine_exp.setAnimation(0, "fire", false);
          this.spine_exp.addAnimation(0, "idle", true);
          var spine = this.node_exp.getComponent(sp.Skeleton);
          spine.setAnimation(0, "animation", false);
          this.spine_betUp.node.active = true;
          this.spine_betUp.setAnimation(0, "animation", false);
          this.spine_betUp.setCompleteListener(function () {
            _this3.spine_betUp.setCompleteListener(null);
            _this3.spine_betUp.node.active = false;
            _this3.img_betUp.spriteFrame = _this3.betUpSpriteFrames[1];
          });
          this.spine_expUp.node.active = true;
          this.spine_expUp.setAnimation(0, "intro", false);
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
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD_LINES && this._state != RunState.SHOWGAIN) return false;
          return true;
        };
        _proto.preStart = function preStart() {
          this.onClickBg();
          if (this.freeLock) return;
          if (!this.checkReady()) return;
          if (this._lock) return;
          var multiple = this._useExp ? 1.5 : 1;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._isFree && gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.onClickAuto(null);
            return;
          }
          if (!this._isFree) this.updateGold(-this._bet * multiple);
          this.clear();
          this.sendBet();
          this._state = RunState.START;
          this.changeBtnActive(false);
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };
        _proto.onClickStart = function onClickStart() {
          if (this._auto) {
            this.onClickAuto(null);
            return;
          }
          this.preStart();

          // if (this._state != RunState.NORMAL && this._state != RunState.WAIT) return;
          // if (this._lock) return;
          // let multiple = this._useExp ? 1.5 : 1;
          // let gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          // if (!this._try && gold < this._bet * multiple) {
          //     Common.showTip(i18n.lang.fishTip.gold);
          //     this._auto = false;
          //     return;
          // }

          // this.updateGold(-this._bet * multiple);
          // this.clear();
          // this._showExp = true;
          // this.onClickExp();
          // this.changeBtnActive(false);
          // this.sendBet();

          // this._state = RunState.START;
          // this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        };

        _proto.runStart = function runStart() {
          GoldenBookDef.palyAudio(GoldenBookDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          for (var i = 0; i < this.aniLines.length; i++) {
            this.aniLines[i].run(0);
          }
          this.freeTitle.reduseCount();
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolSlotGoldenBook.bet, {
              betAmount: this._bet + "",
              ex: this._useExp
            });
          }
        };
        _proto.clear = function clear() {
          this.txt_win.clear();
          if (!this._isFree) {
            this.txt_TotalWin.reset();
          } else {
            // this.spine
            this.spine_bgFree.setAnimation(0, "idle", true);
          }
          GoldenBookProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this.freeTitle.hideLight();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          this._wildList = [-1, -1, -1, -1, -1];
          this._isScatter = false;
          this.node_scatterLight.active = false;
          this._resultIndex = 0;
          this.bigWinBgClickIndex = 0;
          this.scatterCount = 0;
          this.freeLock = false;
        };
        _proto.showResult = function showResult() {
          if (!GoldenBookProxy.result) {
            return;
          }
          if (GoldenBookProxy.result.freePrize && !this._isFree) {
            this.freeLock = true;
          }
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          var _this4 = this;
          var isWild = this.showWild(false);
          if (isWild) {
            GoldenBookDef.palyAudio(GoldenBookDef.audio.WILD);
          }
          if (GoldenBookProxy.result.OpenNums[this._resultIndex].prizeAmount > 0) {
            this.changeState(RunState.AWARD);
          } else {
            this.scheduleOnce(function () {
              _this4.showEnd();
            }, isWild ? 1.2 : 0);
          }
        };
        _proto.showEnd = function showEnd() {
          this.updateGold();
          this.changeBtnActive(true);
          this._state = RunState.AWARD_LINES;
          // this.changeState(RunState.AWARD_LINES);

          if (this._isFree) {
            if (this._resultIndex + 1 < GoldenBookProxy.result.OpenNums.length) {
              this.changeState(RunState.AWARD_FREE);
            } else {
              this.txt_TotalWin.string = Common.numFormat(GoldenBookProxy.result.freeInfo.totalFreePrizeAmount + "");
              if (GoldenBookProxy.result.freeInfo.surplusFreeCount <= 0) {
                this.changeState(RunState.LEAVE_FREE);
              } else {
                if (GoldenBookProxy.result.freePrize) {
                  GoldenBookDef.palyAudio(GoldenBookDef.audio.FREE_ADD);
                }
                this.preStart();
              }
            }
          } else {
            if (GoldenBookProxy.result.freePrize) {
              this.changeState(RunState.ENTER_FREE);
            } else if (this._auto) {
              this.preStart();
            }
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
                AudioManager.instance.pauseMusic();
                var odd = GoldenBookProxy.result.prizeAmount / GoldenBookProxy.result.betAmount;
                // for (let i of GoldenBookProxy.result.prizeInfo) {
                //     odd += i.Odds;
                // }
                // odd *= GoldenBookProxy.result.openResult.multiples[1];
                this.txt_win.clear();
                var aniname = "BigWin_";
                this.txt_bigwin.stepCount = BIG_WIN_TIME1 * 24;
                this.sp_bigWin.setAnimation(0, aniname + "Start", false);
                if (odd >= 25) {
                  aniname = "SuperWin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME3 * 24;
                  this._runTime = BIG_WIN_TIME3;
                  this.sp_bigWin.addAnimation(0, "MegaWin_" + "Start", false);
                  this.sp_bigWin.addAnimation(0, "SuperWin_" + "Start", false);
                } else if (odd >= 15) {
                  aniname = "MegaWin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME2 * 24;
                  this._runTime = BIG_WIN_TIME2;
                  this.sp_bigWin.addAnimation(0, "MegaWin_" + "Start", false);
                }
                this.txt_bigwin.string = Common.numFormat(GoldenBookProxy.result.prizeAmount);
                this.sp_bigWin.addAnimation(0, aniname + "End", false);

                // this.sp_bigWin.setCompleteListener(() => {
                //     this.sp_bigWin.setCompleteListener(null);
                //     this.node_bigwin.active = false;
                //     this.txt_bigwin.reset();
                // });
                GoldenBookDef.palyAudio(GoldenBookDef.audio.BIGWIN, function (id) {
                  _this5._bigWinSoundId = id;
                  // this.scheduleOnce(() => {
                  //     AudioManager.instance.stopSound(id);
                  //     this.node_bigwin.active = false;
                  //     this.txt_bigwin.reset();
                  //     AudioManager.instance.resumeMusic();
                  // }, this._runTime);
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
            case RunState.EXPANI:
              {
                this._state = RunState.EXPANI;
                this._runTime = EXPANI_TIME;
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._state = RunState.SHOWGAIN;
                this._runTime = WAIT_TIME;
                if (this._isFree) ;else {
                  this.txt_TotalWin.string = Common.numFormat(GoldenBookProxy.result.prizeAmount + "");
                }
                this.freeTitle.setCount(GoldenBookProxy.result.freeInfo.surplusFreeCount);
                break;
              }
            case RunState.WAIT:
              {
                this._state = RunState.WAIT;
                this._runTime = WAIT_TIME;
                break;
              }
            case RunState.ENTER_FREE:
              {
                this.hideSpine();
                this.node_spineMask.active = false;
                this.freeLock = false;

                // this.txt_win.node.active = true;
                // this.txt_win.string = this._bet * 2 + "";
                this.txt_win.clear();
                this._state = RunState.ENTER_FREE;
                this._isFree = GoldenBookProxy.onFree = true;
                var positions = [];
                for (var i = 0; i < GoldenBookProxy.result.OpenNums[0].openNum.length; i++) {
                  if (GoldenBookProxy.result.OpenNums[0].openNum[i] == 10) {
                    positions.push(i);
                    var a = Math.floor(i / 5);
                    var b = i % 5;
                    this.aniLines[b].hide(a);
                  }
                }
                var icon2 = GoldenBookProxy.result.freeInfo.scatterBonusSymbol[1] ? GoldenBookProxy.result.freeInfo.scatterBonusSymbol[1] - 1 : null;
                this.freeAction.setData({
                  freeCount: GoldenBookProxy.result.freeInfo.surplusFreeCount,
                  icon1: GoldenBookProxy.result.freeInfo.scatterBonusSymbol[0] - 1,
                  icon2: icon2,
                  positions: positions
                });
                this.showLogo();
                AudioManager.instance.pauseMusic();
                break;
              }
            case RunState.FINISH_FREEANI:
              {
                this._state = RunState.FINISH_FREEANI;
                this.sprite_bg.spriteFrame = this.frameBgs[1];
                this.spine_bgFree.node.active = true;
                var _icon = GoldenBookProxy.result.freeInfo.scatterBonusSymbol[1] ? this.cardSpriteFrames[GoldenBookProxy.result.freeInfo.scatterBonusSymbol[1] - 1] : null;
                this.freeTitle.setData({
                  freeCount: GoldenBookProxy.result.freeInfo.surplusFreeCount,
                  icon1: this.cardSpriteFrames[GoldenBookProxy.result.freeInfo.scatterBonusSymbol[0] - 1],
                  icon2: _icon
                });
                this.notice_title.active = false;
                this._runTime = 2;
                GoldenBookDef.palyMusic(GoldenBookDef.audio.BG2);
                this.hideSpine();
                break;
              }
            case RunState.LEAVE_FREE:
              {
                this._isFree = GoldenBookProxy.onFree = false;
                this._state = RunState.LEAVE_FREE;
                // this.sprite_bg.spriteFrame = this.frameBgs[0];
                // this.changeNotice();
                this.freeEnd.setData({
                  win: GoldenBookProxy.result.freeInfo.totalFreePrizeAmount,
                  totalCount: GoldenBookProxy.result.freeInfo.totalFreePrizeCount
                });
                this._runTime = 8;
                AudioManager.instance.pauseMusic();
                break;
              }
            case RunState.FREE_END:
              {
                this._isFree = GoldenBookProxy.onFree = false;
                this.sprite_bg.spriteFrame = this.frameBgs[0];
                this.spine_bgFree.node.active = false;
                this.changeNotice();
                this.freeEnd.node.active = false;
                this.freeTitle.node.active = false;
                this.notice_title.active = true;
                GoldenBookDef.palyMusic(GoldenBookDef.audio.BG);
                this.changeState(RunState.NORMAL);
                break;
              }
            case RunState.AWARD_FREE:
              {
                this._state = RunState.AWARD_FREE;
                this.hideLines();
                this.txt_win.clear();
                this.spine_bgFree.setAnimation(0, "win", true);
                this._resultIndex++;
                var result = GoldenBookProxy.result.OpenNums[this._resultIndex];
                if (result.prizeAmount > 0) {
                  this.freeTitle.showLight(this._resultIndex);
                  var openList = result.openNum;
                  var time = 0;
                  if (this._resultIndex == 2 && GoldenBookProxy.result.OpenNums[1].prizeAmount > 0) {
                    var info = GoldenBookProxy.result.OpenNums[1].openNum;
                    for (var _i2 = 0; _i2 < info.length; _i2++) {
                      if (info[_i2] == GoldenBookProxy.result.OpenNums[1].scatterBonusSymbol) {
                        this.showFreeSpineEnd(_i2, info[_i2] - 1);
                      }
                    }
                    time = 1;
                  } else {
                    this.hideSpine();
                  }
                  for (var _i3 = 0; _i3 < 5; _i3++) {
                    var _loop = function _loop() {
                      var index = _i3 + j * 5;
                      if (openList[index] == result.scatterBonusSymbol) {
                        _this5.scheduleOnce(function () {
                          _this5.showFreeSpine(index, openList[index] - 1);
                        }, time);
                        time += 0.2;
                      }
                    };
                    for (var j = 0; j < 3; j++) {
                      _loop();
                    }
                  }
                  this._runTime = time + 1;
                } else if (GoldenBookProxy.result.OpenNums[this._resultIndex + 1]) {
                  this.changeState(RunState.AWARD_FREE);
                } else {
                  this.changeState(RunState.SHOWGAIN);
                }
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          this.txt_win.node.active = true;
          this.txt_win.string = Common.numFormat(GoldenBookProxy.result.OpenNums[this._resultIndex].prizeAmount + "");
          if (GoldenBookProxy.result.prizeAmount > 0) {
            GoldenBookDef.palyAudio(GoldenBookDef.audio.AWARD1);
          }
          this.updateGold();
          if (GoldenBookProxy.result.prizeAmount) {
            this.showLines();
            this.showWin();
          }
        };
        _proto.showWin = function showWin() {
          var _this6 = this;
          var odd = GoldenBookProxy.result.OpenNums[this._resultIndex].prizeAmount / GoldenBookProxy.result.betAmount;
          if (odd >= 6 && !this._isFree) {
            this.scheduleOnce(function () {
              _this6.changeState(RunState.BIG_WIN);
            }, 0.3);
          } else {
            this.changeState(RunState.SHOWGAIN);
          }
        };
        _proto.showLines = function showLines() {
          var _this7 = this;
          if (!GoldenBookProxy.result) return false;
          var result = GoldenBookProxy.result.OpenNums[this._resultIndex];
          var prizeIdx = result.prizeNum;
          if (GoldenBookProxy.result.freePrize) {
            for (var i = 0; i < GoldenBookProxy.result.OpenNums[0].openNum.length; i++) {
              if (GoldenBookProxy.result.OpenNums[0].openNum[i] == 10) {
                this.showSpine(i, 9);
              }
            }
            GoldenBookDef.palyAudio(GoldenBookDef.audio.SCATTER_ON);
          }
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = result.openNum;
          this.hideSpineWithoutWild();
          this.node_spineMask.active = true;
          this.node_spineMask.setSiblingIndex(20);
          var _loop2 = function _loop2(_i4) {
            var lines = GoldenBookDef.lines[prizeIdx[_i4].PrizeType];
            var prize = prizeIdx[_i4].PrizeNum.split("*");
            var count = parseInt(prize[1]);
            var keys = [];
            if (result.scatterBonusSymbol) {
              for (var _iterator7 = _createForOfIteratorHelperLoose(lines), _step7; !(_step7 = _iterator7()).done;) {
                var pos = _step7.value;
                if (OpenNums[pos] == result.scatterBonusSymbol) {
                  keys.push(pos);
                }
              }
            } else {
              keys = lines;
            }
            for (var j = 0; j < count; j++) {
              var key = keys[j];
              var value = OpenNums[key] - 1;
              var wildIndex = key % 5;
              if (_this7._wildList[wildIndex] > -1 && !result.scatterBonusSymbol) {
                key = _this7._wildList[wildIndex] * 5 + wildIndex;
                _this7.showSpine(key, 10);
              } else {
                _this7.showSpine(key, value);
              }
            }
            _this7.scheduleOnce(function () {
              var child = _this7.node_line.getChildByName("node" + prizeIdx[_i4].PrizeType);
              if (child) {
                child.active = true;
                var spine = child.getChildByName("WinLine").getComponent(sp.Skeleton);
                spine.setAnimation(0, "line" + GoldenBookDef.linesAninames[prizeIdx[_i4].PrizeType], true);
                if (_this7._resultIndex == 0) {
                  GoldenBookDef.palyAudio(GoldenBookDef.audio.LINE);
                } else {
                  GoldenBookDef.playLine(_i4);
                }
              }
            }, _i4 * 0.1);
          };
          for (var _i4 = 0; _i4 < prizeIdx.length; _i4++) {
            _loop2(_i4);
          }
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {
          if (!GoldenBookProxy.result) return;
          var result = GoldenBookProxy.result.OpenNums[this._resultIndex];
          var prizeIdx = result.prizeNum;
          if (!prizeIdx || prizeIdx.length == 0) {
            this.changeState(RunState.NORMAL);
            return;
          }
          var OpenNums = result.openNum;
          this.hideLines();
          this.hideSpineWithoutWild();
          this.node_spineMask.active = true;
          this.node_spineMask.setSiblingIndex(20);
          var index = this._showLineIndex % prizeIdx.length;
          var info = prizeIdx[index];
          // this.txt_linewin.string = `${this._bet} x ${info.Odds} = ${Common.numFormat(this._bet * info.Odds)}`;

          var multiple = 1;
          var bet = this._bet * multiple;
          this.txt_win.node.active = true;
          this.txt_win.clear();
          // this.txt_win.string = Common.numFormat((bet * info.Odds) / 10);

          var lines = GoldenBookDef.lines[info.PrizeType];
          var keys = [];
          if (result.scatterBonusSymbol) {
            for (var _iterator8 = _createForOfIteratorHelperLoose(lines), _step8; !(_step8 = _iterator8()).done;) {
              var pos = _step8.value;
              if (OpenNums[pos] == result.scatterBonusSymbol) {
                keys.push(pos);
              }
            }
          } else {
            keys = lines;
          }
          var prize = info.PrizeNum.split("*");
          var count = parseInt(prize[1]);
          for (var j = 0; j < count; j++) {
            var key = keys[j];
            var _result = OpenNums[key] - 1;
            var wildIndex = key % 5;
            if (this._wildList[wildIndex] > -1) {
              key = this._wildList[wildIndex] * 5 + wildIndex;
              this.showSpine(key, 10);
            } else {
              this.showSpine(key, _result);
            }
          }
          var child = this.node_line.getChildByName("node" + info.PrizeType);
          if (child) {
            child.active = true;
            var spine = child.getChildByName("WinLine").getComponent(sp.Skeleton);
            spine.setAnimation(0, "line" + GoldenBookDef.linesAninames[info.PrizeType], true);
          }
        };
        _proto.hideLines = function hideLines() {
          var children = this.node_line.children;
          for (var _iterator9 = _createForOfIteratorHelperLoose(children), _step9; !(_step9 = _iterator9()).done;) {
            var node = _step9.value;
            node.active = false;
          }
        };
        _proto.onClickBigWin = function onClickBigWin() {
          this.bigWinBgClickIndex++;
          if (this.bigWinBgClickIndex == 1) {
            this.txt_bigwin.reset(GoldenBookProxy.result.prizeAmount);
            var odd = GoldenBookProxy.result.prizeAmount / GoldenBookProxy.result.betAmount;
            var aniname = "BigWin_";
            if (odd >= 25) {
              aniname = "SuperWin_";
            } else if (odd >= 15) {
              aniname = "MegaWin_";
            }
            this._runTime = 2;
            this.sp_bigWin.setAnimation(0, aniname + "End", false);
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
          var _this8 = this;
          if (!GoldenBookProxy.result) {
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
          var nums = GoldenBookProxy.result.OpenNums[this._resultIndex].openNum;
          var scatterCount = 0;
          var scatterTime = 0;
          var _loop3 = function _loop3(i) {
            var rand1 = nums[i] - 1;
            var rand2 = nums[i + 5] - 1;
            var rand3 = nums[i + 10] - 1;
            var arr = [rand1, rand2, rand3];
            var delaytime = _this8._runDelay * i;
            for (var j = 0; j < arr.length; j++) {
              if (arr[j] == 10) {
                _this8._wildList[i] = j;
              }
              if (arr[j] == 9) {
                scatterCount++;
              }
            }
            if (i < 4 && scatterCount >= 2 && _this8._runDelay > 0) {
              scatterTime = 2;
              _this8._isScatter = true;
            }
            if (i >= 4) {
              delaytime += scatterTime;
            }
            _this8.scheduleOnce(function () {
              _this8.aniLines[i].showResult(arr);
            }, delaytime);
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop3(i);
          }
          if (scatterTime > 0) {
            scatterTime += 0.5;
          }
          GoldenBookDef.palyAudio(GoldenBookDef.audio.END);

          // let end = () => {
          //     // this.scheduleOnce(() => {
          //     //     this._lock = false;
          //     //     this.showResult();
          //     // }, 0.4);
          //     this._lock = false;
          //     this.showResult();
          // };
          // this.scheduleOnce(() => {
          //     end();
          // }, this._runDelay * 5 + scatterTime + 0.5);
        };

        _proto.changeBtnActive = function changeBtnActive(b) {
          // this.node_start.active = b;
          // this.node_stop.active = !b;

          var button = this.node_start.getComponent(Button);
          button.interactable = b;
        };
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
              if (!this._isFree) this.notice_title.active = true;
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
          this.noticeIndex++;
          if (this.noticeIndex >= this.noticeFrames.length) {
            this.noticeIndex = 0;
          }
          if (this.noticeIndex % 3 == 0) {
            if (!this._isFree) this.showLogo();
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.noticeFrames[this.noticeIndex];
          this.notice_title.setPosition(400, this.notice_title.position.y);
        };
        _proto.update = function update(dt) {
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (GoldenBookProxy.result) {
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
                  this.showEnd();
                }
                break;
              }
            case RunState.BIG_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  AudioManager.instance.stopSound(this._bigWinSoundId);
                  this.node_bigwin.active = false;
                  this.txt_bigwin.reset();
                  AudioManager.instance.resumeMusic();
                  this.changeState(RunState.SHOWGAIN);
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
            case RunState.SHOWGAIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.showEnd();
                }
                break;
              }
            case RunState.FINISH_FREEANI:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
                  this.preStart();
                }
                break;
              }
            case RunState.AWARD_FREE:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.checkAward();
                }
                break;
              }
            case RunState.LEAVE_FREE:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.changeState(RunState.FREE_END);
                }
                break;
              }
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return GoldenBookRoom;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardSpriteFrames", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec5], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_TotalWin", [_dec8], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_exp", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spine_exp", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spine_expUp", [_dec15], {
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
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_betSelect", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "spine_betUp", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "img_betUp", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "betUpSpriteFrames", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "pre_bet", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_expTipHelp", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_line", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "freeTitle", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_scatterLight", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "freeAction", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "freeEnd", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "frameBgs", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "spine_auto", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "node_setting", [_dec36], {
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
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "toggle_exp", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "spine_bgFree", [_dec39], {
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

System.register("chunks:///_virtual/GoldenBookRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoldenBookProxy.ts', './GoldenBookDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, sp, SpriteFrame, Component, GoldenBookProxy, GoldenBookDef;
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
      Node = module.Node;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      GoldenBookProxy = module.default;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "9dd3ftlLBBLGKiyMQ1BQf5G", "GoldenBookRunItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookRunItem = exports('default', (_dec = ccclass("GoldenBookRunItem"), _dec2 = menu("game/GoldenBook/GoldenBookRunItem"), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookRunItem, _Component);
        function GoldenBookRunItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite_item", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_goldBg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_wild", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cards", _descriptor5, _assertThisInitialized(_this));
          _this._index = void 0;
          return _this;
        }
        var _proto = GoldenBookRunItem.prototype;
        _proto.setCard = function setCard(index) {
          this._index = index;
          this.sprite_item.spriteFrame = this.cards[index];
          var b = GoldenBookProxy.checkBonusIndex(index + 1);
          this.node_goldBg.active = b;
        };
        _proto.showResult = function showResult(index) {
          this._index = index;
          this.sprite_item.spriteFrame = this.cards[index];
          var b = GoldenBookProxy.checkBonusIndex(index + 1);
          this.node_goldBg.active = b;
          if (b) {
            GoldenBookDef.palyAudio(GoldenBookDef.audio.FREE_SYMBOL);
            var spine = this.node_goldBg.getComponent(sp.Skeleton);
            spine.setAnimation(0, "S_Win", false);
            spine.addAnimation(0, "S_Stop", false);
          }
        };
        _proto.showScatter = function showScatter(lineIndex) {
          if (this._index == 9) {
            this.sprite_item.node.active = false;
            this.node_scatter.active = true;
            this.node_goldBg.active = false;
            this.spine_wild.node.active = false;
          }
        };
        _proto.showWild = function showWild(aniPos) {
          var name = "Stop" + (aniPos + 1);
          this.spine_wild.node.active = true;
          this.spine_wild.setAnimation(0, name, false);
          this.spine_wild.node.setSiblingIndex(100);
        };
        _proto.reset = function reset() {
          this.sprite_item.node.active = true;
          this.node_scatter.active = false;
          this.spine_wild.node.active = false;
        };
        return GoldenBookRunItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_item", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_goldBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spine_wild", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cards", [_dec7], {
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

System.register("chunks:///_virtual/GoldenBookScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './GoldenBookProxy.ts', './Common.ts', './GoldenBookDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, ConfigManager, EventManager, NetManager, ViewManager, GoldenBookProxy, Common, GoldenBookDef;
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
      GoldenBookProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3a901HiF89Lyo8R5ZenKI8m", "GoldenBookScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var GoldenBookScene = exports('default', (_dec = ccclass("GoldenBookScene"), _dec2 = menu("game/GoldenBook/GoldenBookScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookScene, _Component);
        function GoldenBookScene() {
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
        var _proto = GoldenBookScene.prototype;
        _proto.onLoad = function onLoad() {
          GoldenBookDef.init();
          this.init();
        };
        _proto.start = function start() {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
        };
        _proto.init = function init() {
          this.reset();
          GoldenBookDef.palyMusic(GoldenBookDef.audio.BG);
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
          GoldenBookProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          GoldenBookProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.instance.off(ConfigManager.instance.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {
          GoldenBookProxy.onFree = false;
        };
        return GoldenBookScene;
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

System.register("chunks:///_virtual/GoldenBookSpineItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GoldenBookDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, sp, UIOpacity, Tween, tween, Component, GoldenBookDef;
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
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      tween = module.tween;
      Component = module.Component;
    }, function (module) {
      GoldenBookDef = module.GoldenBookDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "8c3b5Esl1xCdb+G6NDMWOg2", "GoldenBookSpineItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var GoldenBookSpineItem = exports('default', (_dec = ccclass("GoldenBookSpineItem"), _dec2 = menu("game/GoldenBook/GoldenBookSpineItem"), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GoldenBookSpineItem, _Component);
        function GoldenBookSpineItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_winBg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_symbol", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "symbols", _descriptor3, _assertThisInitialized(_this));
          _this._index = void 0;
          return _this;
        }
        var _proto = GoldenBookSpineItem.prototype;
        _proto.setData = function setData(index, aniPos, isFree) {
          if (aniPos === void 0) {
            aniPos = 0;
          }
          if (isFree === void 0) {
            isFree = false;
          }
          var node = this.spine_symbol.node;
          node.getComponent(UIOpacity).opacity = 255;
          this.node_winBg.active = false;
          this._index = index;
          this.spine_symbol.skeletonData = this.symbols[index];
          var skins = this.spine_symbol.skeletonData.getSkinsEnum();
          this.spine_symbol.setSkin(skins[0] + "");
          this.node.setSiblingIndex(21);
          if (index < 10) {
            this.spine_symbol.setAnimation(0, "Win", true);
          } else {
            // this.spine_symbol.setAnimation(0, name, false);
            this.spine_symbol.addAnimation(0, "Win" + (aniPos + 1), true);
            this.node.setSiblingIndex(100);
          }
          if (isFree) {
            this.node_winBg.active = true;
            var spine = this.node_winBg.getComponent(sp.Skeleton);
            spine.setAnimation(0, "S_Win", true);
          }
        };
        _proto.showWild = function showWild(aniPos) {
          if (aniPos === void 0) {
            aniPos = 0;
          }
          this._index = 10;
          var node = this.spine_symbol.node;
          node.getComponent(UIOpacity).opacity = 255;
          this.node_winBg.active = false;
          this.spine_symbol.skeletonData = this.symbols[10];
          var skins = this.spine_symbol.skeletonData.getSkinsEnum();
          this.spine_symbol.setSkin(skins[0] + "");
          var name = "Stop" + (aniPos + 1);
          this.spine_symbol.setAnimation(0, name, false);
          this.node.setSiblingIndex(14);
        };
        _proto.showFree = function showFree(index) {
          var node = this.spine_symbol.node;
          Tween.stopAllByTarget(node.getComponent(UIOpacity));
          node.getComponent(UIOpacity).opacity = 255;
          this._index = index;
          this.spine_symbol.skeletonData = this.symbols[index];
          var skins = this.spine_symbol.skeletonData.getSkinsEnum();
          this.spine_symbol.setSkin(skins[0] + "");
          this.spine_symbol.clearAnimations();
          this.node_winBg.active = true;
          var spine = this.node_winBg.getComponent(sp.Skeleton);
          spine.setAnimation(0, "S_Spread", false);
          spine.addAnimation(0, "S_Stop", false);
          GoldenBookDef.palyAudio(GoldenBookDef.audio.CHANGE_SYMBOL);
          this.node.setSiblingIndex(21);
        };
        _proto.showFreeEnd = function showFreeEnd(index) {
          this._index = index;
          this.spine_symbol.skeletonData = this.symbols[index];
          var skins = this.spine_symbol.skeletonData.getSkinsEnum();
          this.spine_symbol.setSkin(skins[0] + "");
          this.node_winBg.active = true;
          var spine = this.node_winBg.getComponent(sp.Skeleton);
          spine.setAnimation(0, "S_End", false);
          var node = this.spine_symbol.node;
          tween(node.getComponent(UIOpacity)).to(1, {
            opacity: 0
          }).start();
        };
        _createClass(GoldenBookSpineItem, [{
          key: "index",
          get: function get() {
            return this._index;
          }
        }]);
        return GoldenBookSpineItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_winBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_symbol", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "symbols", [_dec5], {
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
  r('virtual:///prerequisite-imports/GoldenBookGame', 'chunks:///_virtual/GoldenBookGame'); 
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