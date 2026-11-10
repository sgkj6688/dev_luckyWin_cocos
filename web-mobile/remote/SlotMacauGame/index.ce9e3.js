System.register("chunks:///_virtual/SlotMacauCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauRunItem.ts', './SlotMacauProxy.ts', './SlotMacauDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, tween, Tween, Component, SlotMacauRunItem, SlotMacauProxy, SlotMacauGameEvent, CardState;
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
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      SlotMacauRunItem = module.default;
    }, function (module) {
      SlotMacauProxy = module.default;
      SlotMacauGameEvent = module.SlotMacauGameEvent;
    }, function (module) {
      CardState = module.CardState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a3ed9jdBFdAEJ5pt6bawKGg", "SlotMacauCardAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CARDCOUNT = 9;
      var SlotMacauCardAni = exports('default', (_dec = ccclass("SlotMacauCardAni"), _dec2 = menu("game/SlotMacau/SlotMacauCardAni"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauCardAni, _Component);
        function SlotMacauCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_mask", _descriptor3, _assertThisInitialized(_this));
          _this.stepHeight = 111;
          //数字高度
          _this.runningCard = [];
          _this.moveOut = 180;
          _this.delayTime = 0;
          //动画延迟
          _this.moveStep = 60;
          //每帧移动步长
          _this.finishCallBack = null;
          _this._state = CardState.NORMAL;
          _this.result = void 0;
          _this.leftResultCount = 5;
          _this.endNode = void 0;
          _this.endIndex = 7;
          _this.fixStep = void 0;
          _this._index = 0;
          _this.next = void 0;
          _this._hideArr = [];
          _this._startPosArr = [];
          _this._lightTime = 0;
          _this._endPosArr = [];
          return _this;
        }
        var _proto = SlotMacauCardAni.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.init = function init() {
          var startY = 333 + 222;
          for (var i = 0; i < CARDCOUNT; i++) {
            var node = instantiate(this.pre_card);
            this.node.addChild(node);
            node.setPosition(v3(0, startY - i * 111));
            node.name = i + "";
            var com = node.getComponent(SlotMacauRunItem);
            this.runningCard.push(com);
          }
          this.node_light.active = false;
          this.node_light.getComponent(UITransform).priority = 8;
          this.node_mask.active = false;
          this.node_mask.getComponent(UITransform).priority = 7;
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startY = 333 + 222;
          for (var i = 0; i < CARDCOUNT; i++) {
            var index = (this.endIndex + i + 2) % CARDCOUNT;
            this.runningCard[index].node.setPosition(v3(0, startY - i * this.stepHeight));
          }
        };
        _proto.initCard = function initCard(card) {
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < this.runningCard.length; i++) {
              var rand = card[i];
              this.runningCard[i].setCard(rand, true);
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              // this.randCard(i);
              _i.initCard();
            }
          }
        };
        _proto.showScatter = function showScatter() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.runningCard), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            i.showScatter();
          }
        };
        _proto.hideScatter = function hideScatter() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            i.hideScatter();
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
            // node.node.getComponent(cc.UITransform).priority = this.leftResultCount;
          } else {
            if (this.next != null) {
              var _result = this.next;
              node.setCard(_result);
            }
          }
        };
        _proto.showLight = function showLight() {
          var _this2 = this;
          this.node_light.active = true;
          this.node_mask.active = false;
          this.moveStep = 100;
          this.scheduleOnce(function () {
            _this2.moveStep = 40;
          }, 0.6);
        };
        _proto.showMask = function showMask() {
          this.node_mask.active = true;
        };
        _proto.hideMask = function hideMask() {
          this.node_mask.active = false;
        };
        _proto.changeCount = function changeCount(cardValue, reverse) {
          if (reverse === void 0) {
            reverse = false;
          }
          var count = 1;
          var startNum = cardValue[0].num;
          var type = cardValue[0].type;
          for (var i = 1; i < cardValue.length; i++) {
            if (cardValue[i].num == startNum && (type > 0 || startNum > 13) && cardValue[i].type == type) {
              count++;
            } else {
              if (count > 1) {
                {
                  cardValue[i - 1].count = count;
                  var index = 1;
                  for (var j = i - 2; index < count; j--) {
                    cardValue[j].count = 0;
                    index++;
                  }
                  if (reverse) {
                    cardValue[i - 1].count = 0;
                    var _index = 1;
                    for (var _j = i - 2; _index < count; _j--) {
                      cardValue[_j].count = 0;
                      _index++;
                    }
                    cardValue[i - _index].count = count;
                  } else {
                    cardValue[i - 1].count = count;
                    var _index2 = 1;
                    for (var _j2 = i - 2; _index2 < count; _j2--) {
                      cardValue[_j2].count = 0;
                      _index2++;
                    }
                  }
                }
              }
              count = 1;
              startNum = cardValue[i].num;
              type = cardValue[i].type;
            }
          }
          if (count > 4) {
            if (reverse) {
              cardValue[0].count = 4;
              for (var _i2 = 1; _i2 < 4; _i2++) {
                cardValue[_i2].count = 0;
              }
            } else {
              for (var _i3 = 1; _i3 < cardValue.length; _i3++) {
                cardValue[_i3].count = 0;
              }
              cardValue[4].count = 4;
            }
          } else if (count > 1) {
            if (reverse) {
              var _i4 = 5;
              cardValue[_i4 - 1].count = 0;
              var _index3 = 1;
              for (var _j3 = _i4 - 2; _index3 < count; _j3--) {
                cardValue[_j3].count = 0;
                _index3++;
              }
              cardValue[_i4 - _index3].count = count;
            } else {
              var _i5 = 5;
              cardValue[_i5 - 1].count = count;
              var _index4 = 1;
              for (var _j4 = _i5 - 2; _index4 < count; _j4--) {
                cardValue[_j4].count = 0;
                _index4++;
              }
            }
          }
          return cardValue;
        };
        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          this.next = null;

          // this.changeCount(cardValue);
          if (reConnect) {
            for (var i = 0; i < CARDCOUNT; i++) {
              var index = this.endIndex + i - 2;
              if (index < 0) {
                index = CARDCOUNT + index;
              }
              this.runningCard[index].setCard(cardValue[i]);
            }
          } else {
            this.result = cardValue;
            this.setState(CardState.RESULT);
          }
        };
        _proto.showNext = function showNext(cardValue, delayTime) {
          if (delayTime === void 0) {
            delayTime = 0;
          }
          this._hideArr.sort();
          this._hideArr.reverse();
          this._startPosArr = [];

          // this.changeCount(cardValue, true);

          for (var _iterator4 = _createForOfIteratorHelperLoose(this.runningCard), _step4; !(_step4 = _iterator4()).done;) {
            var _i8 = _step4.value;
            this._startPosArr.push(_i8.node.getPosition().y);
          }

          //        //整体上移
          for (var t = 0; t < this._hideArr.length; t++) {
            var start = this._hideArr[t] + t;
            var count = 5 + start;
            for (var i = 0; i < count; i++) {
              var index = this.endIndex + start - 4;
              if (index < 0) {
                index = CARDCOUNT + index;
              }
              // this.runningCard[index].node.getPosition().y += this.stepHeight;
              this.runningCard[index].node.setPosition(v3(0, this.runningCard[index].node.getPosition().y + this.stepHeight));
              start--;
            }
          }
          for (var _i6 = 0; _i6 < cardValue.length; _i6++) {
            var _index5 = this.endIndex - _i6;
            if (_index5 < 0) {
              _index5 = CARDCOUNT + _index5;
            }
            this.runningCard[_index5].setCard(cardValue[_i6], true);
          }
          this.show();
          var hasMove = false;
          for (var _i7 = 0; _i7 < CARDCOUNT; _i7++) {
            var node = this.runningCard[_i7].node;
            //            // cc.tween(node).to(0.2, { y: this._startPosArr[i] }).start();
            if (node.getPosition().y != this._startPosArr[_i7]) {
              hasMove = true;
              tween(node).delay(delayTime).delay(0.3 - this._index * 0.08).to(0.6, {
                position: v3(node.position.x, this._startPosArr[_i7])
              }, {
                easing: "bounceOut"
              }).start();
            }
          }
          this._hideArr = [];
          return hasMove;
        };
        _proto.setNext = function setNext(cardValue) {
          this.next = cardValue;
        };
        _proto.show = function show() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.runningCard), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            i.node.active = true;
          }
        };
        _proto.hide = function hide(i) {
          var index = this.endIndex + i - 4;
          if (index < 0) {
            index = CARDCOUNT + index;
          }
          this.runningCard[index].node.position = v3(this.runningCard[index].node.position.x, this._endPosArr[index]);
          Tween.stopAllByTarget(this.runningCard[index].node);
          this.runningCard[index].node.active = false;
          var info = this.runningCard[index].info;
          if (info.count === undefined || info.count === null || info.type < 2 && info.num < 15) this._hideArr.push(i);
        };
        _proto.clear = function clear() {
          this.leftResultCount = 5;
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
            for (var _iterator6 = _createForOfIteratorHelperLoose(this.runningCard), _step6; !(_step6 = _iterator6()).done;) {
              var i = _step6.value;
              i.setState(state);
            }
          }
        };
        _proto.update = function update(dt) {
          var _this3 = this;
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
                  var y = node.getPosition().y;
                  y -= this.moveStep;
                  if (y < -(this.stepHeight * 2 + this.moveOut + this.runningCard[i].offY)) {
                    y += this.stepHeight * CARDCOUNT;
                    this.randCard(this.runningCard[i]);
                  }
                  node.setPosition(0, y);
                }
                break;
              }
            case CardState.RESULT:
              {
                if (this.node_light.active) {
                  this.moveStep -= 6;
                  if (this.moveStep > 30) {
                    this.moveStep = 30;
                  }
                  if (this.moveStep < 20) {
                    this.moveStep = 20;
                  }
                } else {
                  this.moveStep -= 2;
                  if (this.moveStep < 20) {
                    this.moveStep = 20;
                  }
                }
                var _length = this.runningCard.length;
                for (var _i9 = 0; _i9 < _length; _i9++) {
                  var _node = this.runningCard[_i9].node;
                  var _y = _node.getPosition().y;
                  _y -= this.moveStep;
                  if (_y < -(this.stepHeight * 2 + this.moveOut)) {
                    _y += this.stepHeight * CARDCOUNT;
                    this.resultCard(this.runningCard[_i9]);
                    if (this.leftResultCount == 4) {
                      this.endNode = _node;
                      this.endIndex = _i9;
                    }
                  }
                  _node.setPosition(0, _y);
                  if (_node == this.endNode && _y <= -this.stepHeight * 2 - 8) {
                    this.setState(CardState.END);
                    this.fixStep = _y + this.stepHeight * 2;
                    this.node_light.active = false;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                this._endPosArr = [];
                var _loop = function _loop() {
                  var node = _this3.runningCard[_i10].node;
                  var toY = node.getPosition().y - _this3.fixStep;
                  _this3._endPosArr.push(toY);
                  tween(node).to(0.05, {
                    position: v3(node.position.x, toY)
                  }).call(function () {
                    if (toY < -(_this3.stepHeight * 2 + 20)) {
                      toY += _this3.stepHeight * CARDCOUNT;
                      node.setPosition(0, toY);
                    }
                  }).start();
                };
                for (var _i10 = 0; _i10 < _length2; _i10++) {
                  _loop();
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
                  SlotMacauProxy.emit(SlotMacauGameEvent.FINISH_RUN_INDEX, this._index);
                }
                break;
              }
          }
        };
        return SlotMacauCardAni;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_mask", [_dec5], {
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

System.register("chunks:///_virtual/SlotMacauCardAniH.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauRunItem.ts', './SlotMacauCardAni.ts', './SlotMacauDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, tween, SlotMacauRunItem, SlotMacauCardAni, CardState;
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
    }, function (module) {
      SlotMacauRunItem = module.default;
    }, function (module) {
      SlotMacauCardAni = module.default;
    }, function (module) {
      CardState = module.CardState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "e84ffagSxdJUpSh2ogA025M", "SlotMacauCardAniH", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CARDCOUNT = 6;
      var SlotMacauCardAniH = exports('default', (_dec = ccclass("SlotMacauCardAniH"), _dec2 = menu("game/SlotMacau/SlotMacauCardAniH"), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_SlotMacauCardAni) {
        _inheritsLoose(SlotMacauCardAniH, _SlotMacauCardAni);
        function SlotMacauCardAniH() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SlotMacauCardAni.call.apply(_SlotMacauCardAni, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor2, _assertThisInitialized(_this));
          _this.stepHeight = 123;
          //数字高度
          //    // @property(cc.Node)
          //    // node_smoke: cc.Node = null;
          _this.runningCard = [];
          _this.moveOut = 20;
          _this.delayTime = 0;
          //动画延迟
          _this.moveStep = 60;
          //每帧移动步长
          _this.finishCallBack = null;
          _this.result = void 0;
          _this.leftResultCount = 4;
          _this.endNode = void 0;
          _this.endIndex = 4;
          _this.fixStep = void 0;
          _this._index = 0;
          _this.next = void 0;
          _this._hideArr = [];
          _this._startPosArr = [];
          _this._lightTime = 0;
          return _this;
        }
        var _proto = SlotMacauCardAniH.prototype;
        _proto.init = function init() {
          var startX = -(this.stepHeight * 5) / 2;
          for (var i = 0; i < CARDCOUNT; i++) {
            var node = instantiate(this.pre_card);
            node.name = "" + i;
            this.node.addChild(node);
            node.setPosition(v3(startX + i * this.stepHeight, 0));
            var com = node.getComponent(SlotMacauRunItem);
            this.runningCard.push(com);
          }
          this.node_light.active = false;
          this.node_light.getComponent(UITransform).priority = 8;
          this.node_mask.active = false;
          this.node_mask.getComponent(UITransform).priority = 7;
          this.initEvent();
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
        };
        _proto.initPos = function initPos() {
          var startX = -(this.stepHeight * 5) / 2;
          for (var i = 0; i < CARDCOUNT; i++) {
            var index = (this.endIndex + i + 2) % CARDCOUNT;
            this.runningCard[index].node.setPosition(v3(startX + i * this.stepHeight, 0));
          }
        };
        _proto.initCard = function initCard(card) {
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < this.runningCard.length; i++) {
              var rand = card[i];
              this.runningCard[i].setCard(rand, true);
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              // this.randCard(i);
              _i.initCard();
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
            // node.node.getComponent(cc.UITransform).priority = this.leftResultCount;
          } else {
            if (this.next != null) {
              var _result = this.next;
              node.setCard(_result);
            }
          }
        };
        _proto.showLight = function showLight() {};
        _proto.showResult = function showResult(cardValue, reConnect) {
          if (reConnect === void 0) {
            reConnect = false;
          }
          this.next = null;
          if (reConnect) {
            for (var i = 0; i < 4; i++) {
              var index = this.endIndex + i - 2;
              if (index < 0) {
                index = CARDCOUNT + index;
              }
              this.runningCard[index].setCard(cardValue[i]);
            }
          } else {
            this.result = cardValue;
            this.setState(CardState.RESULT);
          }
          this.node_light.active = false;
        };
        _proto.showNext = function showNext(cardValue, delayTime) {
          this._hideArr.sort();
          // this._hideArr.reverse();
          this._startPosArr = [];
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.runningCard), _step3; !(_step3 = _iterator3()).done;) {
            var _i4 = _step3.value;
            this._startPosArr.push(_i4.node.getPosition().x);
          }

          //        //整体上移
          for (var t = 0; t < this._hideArr.length; t++) {
            var start = this._hideArr[t] - t;
            var count = CARDCOUNT - start;
            for (var i = 0; i < count; i++) {
              var index = this.endIndex + start;
              if (index < 0) {
                index = CARDCOUNT + index;
              } else if (index > 5) {
                index -= CARDCOUNT;
              }
              this.runningCard[index].node.setPosition(v3(this.runningCard[index].node.getPosition().x + this.stepHeight, 0));
              start++;
            }
          }
          for (var _i2 = 0; _i2 < cardValue.length; _i2++) {
            var _index = this.endIndex + _i2;
            if (_index < 0) {
              _index = CARDCOUNT + _index;
            } else if (_index > 5) {
              _index -= CARDCOUNT;
            }
            this.runningCard[_index].setCard(cardValue[_i2], true);
          }
          this.show();
          for (var _i3 = 0; _i3 < CARDCOUNT; _i3++) {
            var node = this.runningCard[_i3].node;
            //            // cc.tween(node).to(0.2, { y: this._startPosArr[i] }).start();
            if (node.getPosition().x != this._startPosArr[_i3]) {
              tween(node).to(0.6, {
                position: v3(this._startPosArr[_i3], node.position.y)
              }, {
                easing: "bounceOut"
              }).start();
            }
          }
          this._hideArr = [];
          return true;
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
          var index = this.endIndex + i;
          if (index < 0) {
            index = CARDCOUNT + index;
          } else if (index > 5) {
            index -= CARDCOUNT;
          }
          // cc.Tween.stopAllByTarget(this.runningCard[index].node);

          this.runningCard[index].node.active = false;
          this._hideArr.push(i);
        };
        _proto.clear = function clear() {
          this.leftResultCount = 4;
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
                  var x = node.getPosition().x;
                  if (x < -(this.stepHeight * 3 / 2 + this.moveOut)) {
                    x += this.stepHeight * CARDCOUNT;
                    this.randCard(this.runningCard[i]);
                  }
                  x -= this.moveStep;
                  node.setPosition(x, 0);
                }
                break;
              }
            case CardState.RESULT:
              {
                // if (this.node_light.active) {
                //     this.moveStep -= 6;
                //     if (this.moveStep > 30) {
                //         this.moveStep = 30;
                //     }
                //     if (this.moveStep < 10) {
                //         this.moveStep = 10;
                //     }
                // } else {
                //     this.moveStep -= 2;
                //     if (this.moveStep < 40) {
                //         this.moveStep = 40;
                //     }
                // }
                var _length = this.runningCard.length;
                for (var _i5 = _length - 1; _i5 >= 0; _i5--) {
                  var _node = this.runningCard[_i5].node;
                  var _x = _node.getPosition().x;
                  if (_x < -(this.stepHeight * 3 / 2 + this.moveOut)) {
                    _x += this.stepHeight * CARDCOUNT;
                    this.resultCard(this.runningCard[_i5]);
                    if (this.leftResultCount == 3) {
                      this.endNode = _node;
                      this.endIndex = _i5;
                    }
                  }
                  _x -= this.moveStep;
                  _node.setPosition(_x, 0);
                  if (_node == this.endNode && _x <= -this.stepHeight * 3 / 2 - 8) {
                    this.setState(CardState.END);
                    this.fixStep = _x + this.stepHeight * 3 / 2;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                for (var _i6 = 0; _i6 < _length2; _i6++) {
                  var _node2 = this.runningCard[_i6].node;
                  var toX = _node2.getPosition().x - this.fixStep;
                  tween(_node2).to(0.02, {
                    position: v3(toX, 0)
                  }).start();
                }
                this.setState(CardState.NORMAL);
                break;
              }
          }
        };
        return SlotMacauCardAniH;
      }(SlotMacauCardAni), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec3], {
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

System.register("chunks:///_virtual/SlotMacauDef.ts", ['cc', './AudioManager.ts', './SlotMacauProxy.ts'], function (exports) {
  var cclegacy, AudioClip, AudioManager, SlotMacauProxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      SlotMacauProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d9db7KzIXdJpoHcR7vW8qfO", "SlotMacauDef", undefined);
      var CardState = exports('CardState', {
        NORMAL: 0,
        DELAY: 1,
        RUN: 2,
        RESULT: 3,
        END: 4,
        END_EMIT: 5
      });
      var SlotMacauDef = exports('SlotMacauDef', /*#__PURE__*/function () {
        function SlotMacauDef() {}
        SlotMacauDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = SlotMacauProxy.bundle;
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
        SlotMacauDef.palyMusic = function palyMusic(name) {
          var bundle = SlotMacauProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return SlotMacauDef;
      }());
      SlotMacauDef.audio = {
        AWARD1: "prizeSmallwin",
        BG: "bgm_mg",
        BG2: "bgm_fs",
        END: "spinActiveLoop",
        // QUICK_END: "spinStopQuick",
        TURN: "spinBtn",
        //        // WILD: "sym_wild",
        BIGWIN: "bgmBigwinMain",
        //        // SINGLE_LINE: "prizePayoutIdle",
        WILD: "symWild",
        SCATTER: "symScatter",
        //        // COLLECT_WILD2: "voxWildCollect01",
        //        // SHOW_WINDOW: "ui_btn_click",

        FREE_WIN: "bgmTotalwinMain",
        WINLINE: "prizeWinHighlight",
        TITLE: "fsWonTitle",
        HEIGHT_LIGHT_MAIN: "fastspinStart",
        HEARTBEAT: "heartbeat",
        MULT_FLY: "multiFly",
        symShrink: "symShrink"
      };
      SlotMacauDef.colors = ["0c3e75", "136a44", "713e81"];
      SlotMacauDef.odds = {
        1: [30, 40, 60, 80],
        2: [20, 25, 50, 70],
        3: [10, 25, 40, 60],
        4: [8, 15, 20, 30],
        5: [6, 10, 12, 15],
        6: [6, 10, 12, 15],
        7: [4, 6, 8, 10],
        8: [4, 6, 8, 10],
        9: [1, 2, 3, 4],
        10: [1, 2, 3, 4],
        11: [1, 2, 3, 4]
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMacauGame", ['./SlotMacauCardAni.ts', './SlotMacauCardAniH.ts', './SlotMacauDef.ts', './SlotMacauOddAni.ts', './SlotMacauProxy.ts', './SlotMacauRandItem.ts', './SlotMacauRunItem.ts', './SlotMacauRunItemBlock.ts', './SlotMacauRunItemTop.ts', './SlotMacauScene.ts', './SlotMacauSetAuto.ts', './SlotMacauView.ts', './SlotMacauWinItem.ts', './SlotMacauWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SlotMacauOddAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, tween, v3, v2, Component, SlotMacauDef;
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
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      SlotMacauDef = module.SlotMacauDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4a18dlQ6H1GW5C0/VH2tWmE", "SlotMacauOddAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauOddAni = exports('default', (_dec = ccclass("SlotMacauOddAni"), _dec2 = menu("game/SlotMacau/SlotMacauOddAni"), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauOddAni, _Component);
        function SlotMacauOddAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_odd1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd2", _descriptor2, _assertThisInitialized(_this));
          _this._odd = 0;
          return _this;
        }
        var _proto = SlotMacauOddAni.prototype;
        _proto.onLoad = function onLoad() {
          this.setOdd(0);
        };
        _proto.showAni = function showAni(func) {
          var _this2 = this;
          if (func === void 0) {
            func = null;
          }
          if (this._odd < 2) {
            if (func) {
              func();
            }
            return;
          }
          tween(this.txt_odd1.node).delay(1).to(0.3, {
            scale: v3(1.5, 1.5, 1)
          }).to(0.5, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.txt_odd2.node).delay(1).delay(0.3).to(0.5, {
            scale: v3(0.3, 0.3, 1)
          }).start();
          tween(this.txt_odd2.node).delay(1).to(0.3, {
            scale: v3(1.5, 1.5, 1)
          }).bezierTo(0.5, v2(100, 0), v2(100, 155), v2(0, 155)).call(function () {
            _this2.txt_odd2.node.scale = v3(0, 0, 1);
            if (func) {
              func();
            }
          }).start();
          SlotMacauDef.palyAudio(SlotMacauDef.audio.MULT_FLY);
        };
        _proto.showAniWithOdd = function showAniWithOdd(odd) {
          this.setOdd(odd);
          this.txt_odd2.node.setPosition(0, 0);
          tween(this.txt_odd1.node).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          tween(this.txt_odd2.node).to(0.2, {
            scale: v3(1.2, 1.2, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
        };
        _proto.setOdd = function setOdd(odd) {
          this._odd = odd;
          if (odd == 0) {
            this.node.active = false;
          } else {
            this.node.active = true;
          }
          this.txt_odd1.string = "x" + odd;
          this.txt_odd2.string = "x" + odd;
        };
        return SlotMacauOddAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_odd1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd2", [_dec4], {
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

System.register("chunks:///_virtual/SlotMacauProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "794ecGEQqRCub1FRT21ZsTS", "SlotMacauProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotMacauGameEvent = exports('SlotMacauGameEvent', /*#__PURE__*/function (SlotMacauGameEvent) {
        SlotMacauGameEvent["ENTER_ROOM"] = "enterRoom";
        SlotMacauGameEvent["LEAVE_ROOM"] = "leaveRoom";
        SlotMacauGameEvent["UPDATE_CONFIG"] = "updateConfig";
        SlotMacauGameEvent["UPDATE_BETLIST"] = "updateBetList";
        SlotMacauGameEvent["CLOSE_BONUS"] = "closeBonus";
        SlotMacauGameEvent["SELECT_BET"] = "selectBet";
        SlotMacauGameEvent["START"] = "start";
        SlotMacauGameEvent["CLICK_ITEM"] = "clickItem";
        SlotMacauGameEvent["ERROR"] = "errorReturn";
        SlotMacauGameEvent["SELECT_ODD"] = "selectOdd";
        SlotMacauGameEvent["FINISH_RUN_INDEX"] = "FINISH_RUN_INDEX";
        return SlotMacauGameEvent;
      }({}));
      var SlotMacauProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(SlotMacauProxyMgr, _ProxyBase);
        function SlotMacauProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "SlotMacauGame";
          _this.wsEvents = [ConfigManager.ProtocolSlotMacau.bet, ConfigManager.ProtocolSlotMacau.buyFree, ConfigManager.ProtocolSlotMacau.info];
          _this.auto = false;
          _this.result = null;
          _this.jackpotList = {};
          _this.betList = [0.1, 0.5, 1];
          _this.betMaxCount = 10;
          _this.betRate = 20;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          return _this;
        }
        var _proto = SlotMacauProxyMgr.prototype;
        _proto.init = function init() {};
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(SlotMacauGameEvent.SELECT_BET);
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
        _proto.initData = function initData(info) {
          var OpenNums = info.OpenNums;
          var lines = [0, 1, 1, 1, 1, 0, -3];
          for (var _iterator3 = _createForOfIteratorHelperLoose(OpenNums), _step3; !(_step3 = _iterator3()).done;) {
            var nums = _step3.value;
            var line = 1;
            if (!nums.openNum) break;
            for (var key = 0; key < nums.openNum.length; key++) {
              var openNum = nums.openNum[key];
              if (!openNum) break;
              var arr = [];
              line *= openNum.length + lines[key];
              for (var i = openNum.length - 1; i >= 0; i--) {
                var item = openNum[i];
                arr.unshift(item);
                if (item.count > 1) {
                  for (var j = 0; j < item.count - 1; j++) {
                    var _info = {
                      count: 0,
                      num: item.num,
                      remove: item.remove,
                      type: item.type
                    };
                    arr.unshift(_info);
                  }
                }
              }
              nums.openNum[key] = arr;
            }
            nums.lines = line;
          }
          return info;
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);

          //`{"Action":"HD_Bet","Code":0,"Data":{"OpenNums":[{"odds":1076,"openNum":[{"num":5,"type":0},{"num":11,"type":0},{"num":2,"type":0},{"num":7,"type":0},{"num":10,"type":0},{"num":4,"type":0},{"num":12,"type":0},{"num":3,"type":0},{"num":8,"type":0},{"num":4,"type":0},{"num":13,"type":0},{"num":4,"type":0},{"num":2,"type":0},{"num":5,"type":0},{"num":6,"type":0},{"num":5,"type":2},{"num":5,"type":2},{"num":10,"type":0},{"num":13,"type":0},{"num":1,"type":0},{"num":9,"type":0},{"num":3,"type":0},{"num":7,"type":0},{"num":6,"type":0},{"num":6,"type":0},{"num":10,"type":0},{"num":12,"type":0},{"num":13,"type":0},{"num":1,"type":0},{"num":11,"type":0},{"num":5,"type":0},{"num":3,"type":0},{"num":5,"type":0},{"num":4,"type":0}],"prizeAmount":22596000,"prizeIdx":[10,16,2,27,30,32,12,0,13,15,18]},{"odds":1076,"openNum":[{"num":1,"type":0},{"num":6,"type":0},{"num":11,"type":0},{"num":7,"type":0},{"num":10,"type":0},{"num":4,"type":0},{"num":7,"type":0},{"num":12,"type":0},{"num":3,"type":0},{"num":8,"type":0},{"num":4,"type":0},{"num":4,"type":0},{"num":4,"type":0},{"num":6,"type":0},{"num":6,"type":0},{"num":7,"type":3},{"num":7,"type":3},{"num":10,"type":0},{"num":9,"type":0},{"num":1,"type":0},{"num":9,"type":0},{"num":3,"type":0},{"num":7,"type":0},{"num":6,"type":0},{"num":9,"type":0},{"num":6,"type":0},{"num":10,"type":0},{"num":12,"type":0},{"num":1,"type":0},{"num":1,"type":0},{"num":8,"type":0},{"num":11,"type":0},{"num":3,"type":0},{"num":4,"type":0}],"prizeAmount":1938600,"prizeIdx":[22,3,6,15,16]},{"odds":1077,"openNum":[{"num":9,"type":0},{"num":1,"type":0},{"num":6,"type":0},{"num":11,"type":0},{"num":10,"type":0},{"num":4,"type":0},{"num":3,"type":0},{"num":12,"type":0},{"num":3,"type":0},{"num":8,"type":0},{"num":4,"type":0},{"num":4,"type":0},{"num":4,"type":0},{"num":6,"type":0},{"num":6,"type":0},{"num":15,"type":0},{"num":15,"type":0},{"num":10,"type":0},{"num":4,"type":0},{"num":9,"type":0},{"num":1,"type":0},{"num":9,"type":0},{"num":3,"type":0},{"num":6,"type":0},{"num":9,"type":0},{"num":6,"type":0},{"num":10,"type":0},{"num":12,"type":0},{"num":1,"type":0},{"num":1,"type":0},{"num":8,"type":0},{"num":11,"type":0},{"num":3,"type":0},{"num":4,"type":0}],"prizeAmount":0,"prizeIdx":[]}],"betAmount":3000,"freeInfo":{"odds":1078,"surplusFreeCount":149,"totalFreePrizeAmount":6262845450,"totalFreePrizeCount":948},"freePrize":false,"prizeAmount":24534600},"ErrMsg":"THAO TÁC THÀNH CÔNG","GameType":"slotDreamsofMacau","cmd":"slotDreamsofMacau/HD_Bet"}`
          //`{"Action":"HD_Bet","Code":0,"Data":{"OpenNums":[{"odds":1132,"openNum":[{"num":3,"type":0},{"num":7,"type":0},{"num":6,"type":0},{"num":11,"type":0},{"num":2,"type":0},{"num":4,"type":0},{"num":7,"type":0},{"num":5,"type":0},{"num":9,"type":0},{"num":4,"type":2},{"num":4,"type":2},{"num":13,"type":0},{"num":7,"type":0},{"num":6,"type":0},{"num":7,"type":0},{"num":1,"type":0},{"num":4,"type":0},{"num":1,"type":0},{"num":3,"type":0},{"num":9,"type":0},{"num":13,"type":2},{"num":13,"type":2},{"num":4,"type":0},{"num":4,"type":0},{"num":3,"type":0},{"num":9,"type":0},{"num":7,"type":0},{"num":13,"type":0},{"num":2,"type":0},{"num":8,"type":0},{"num":9,"type":0},{"num":6,"type":0},{"num":3,"type":0},{"num":7,"type":0}],"prizeAmount":20376000,"prizeIdx":[14,20,26,33,11,12,21,27,1,6]},{"odds":1132,"openNum":[{"num":6,"type":0},{"num":3,"type":0},{"num":6,"type":0},{"num":11,"type":0},{"num":2,"type":0},{"num":4,"type":0},{"num":12,"type":0},{"num":5,"type":0},{"num":9,"type":0},{"num":4,"type":2},{"num":4,"type":2},{"num":1,"type":0},{"num":7,"type":0},{"num":3,"type":0},{"num":6,"type":0},{"num":1,"type":0},{"num":4,"type":0},{"num":4,"type":0},{"num":3,"type":0},{"num":9,"type":0},{"num":11,"type":3},{"num":11,"type":3},{"num":4,"type":0},{"num":10,"type":0},{"num":12,"type":0},{"num":5,"type":0},{"num":3,"type":0},{"num":9,"type":0},{"num":2,"type":0},{"num":4,"type":0},{"num":8,"type":0},{"num":9,"type":0},{"num":6,"type":0},{"num":3,"type":0}],"prizeAmount":0,"prizeIdx":[]}],"betAmount":3000,"freeInfo":{"odds":1133,"surplusFreeCount":141,"totalFreePrizeAmount":7582350450,"totalFreePrizeCount":978},"freePrize":false,"prizeAmount":20376000},"ErrMsg":"THAO TÁC THÀNH CÔNG","GameType":"slotDreamsofMacau","cmd":"slotDreamsofMacau/HD_Bet"}`
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolSlotMacau.bet) {
              this.emit(SlotMacauGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotMacau.info:
              {
                this.result = this.initData(data.Data);
                this.emit(SlotMacauGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotMacau.buyFree:
              {
                // this.emit(SlotMacauGameEvent.SELECT_ODD, data.Data);
                this.result = this.initData(data.Data);
                this.emit(SlotMacauGameEvent.START);
                break;
              }
            case ConfigManager.ProtocolSlotMacau.bet:
              {
                // let info = JSON.parse(
                //     `{"Action":"HD_Bet","Code":0,"Data":{"OpenNums":[{"odds":1,"openNum":[[{"count":1,"num":10,"remove":false,"type":0},{"count":1,"num":4,"remove":false,"type":0},{"count":1,"num":7,"remove":false,"type":0},{"count":2,"num":5,"remove":true,"type":1}],[{"count":2,"num":8,"remove":false,"type":2},{"count":2,"num":1,"remove":false,"type":1},{"count":1,"num":6,"remove":false,"type":0}],[{"count":1,"num":6,"remove":false,"type":0},{"count":2,"num":6,"remove":false,"type":1},{"count":1,"num":9,"remove":false,"type":0},{"count":1,"num":8,"remove":false,"type":0}],[{"count":2,"num":5,"remove":true,"type":2},{"count":1,"num":2,"remove":false,"type":0},{"count":2,"num":5,"remove":true,"type":2}],[{"count":2,"num":8,"remove":false,"type":1},{"count":2,"num":5,"remove":true,"type":1},{"count":1,"num":12,"remove":false,"type":0}],[{"count":1,"num":2,"remove":false,"type":0},{"count":1,"num":1,"remove":false,"type":0},{"count":2,"num":7,"remove":false,"type":1},{"count":1,"num":8,"remove":false,"type":0}],[{"count":1,"num":5,"remove":true,"type":0},{"count":1,"num":13,"remove":true,"type":0},{"count":1,"num":5,"remove":true,"type":0},{"count":1,"num":10,"remove":false,"type":0}]],"prizeAmount":3600},{"odds":1,"openNum":[[{"count":1,"num":11,"remove":false,"type":0},{"count":1,"num":11,"remove":false,"type":0},{"count":1,"num":10,"remove":false,"type":0},{"count":1,"num":4,"remove":false,"type":0},{"count":1,"num":7,"remove":false,"type":0}],[{"count":2,"num":8,"remove":false,"type":2},{"count":2,"num":1,"remove":false,"type":1},{"count":1,"num":6,"remove":false,"type":0}],[{"count":1,"num":6,"remove":false,"type":0},{"count":2,"num":6,"remove":false,"type":1},{"count":1,"num":9,"remove":false,"type":0},{"count":1,"num":8,"remove":false,"type":0}],[{"count":2,"num":8,"remove":false,"type":3},{"count":1,"num":2,"remove":false,"type":0},{"count":2,"num":10,"remove":false,"type":3}],[{"count":1,"num":2,"remove":false,"type":0},{"count":1,"num":7,"remove":false,"type":0},{"count":2,"num":8,"remove":false,"type":1},{"count":1,"num":12,"remove":false,"type":0}],[{"count":1,"num":2,"remove":false,"type":0},{"count":1,"num":1,"remove":false,"type":0},{"count":2,"num":7,"remove":false,"type":1},{"count":1,"num":8,"remove":false,"type":0}],[{"count":1,"num":10,"remove":false,"type":0},{"count":1,"num":5,"remove":false,"type":0},{"count":1,"num":6,"remove":false,"type":0},{"count":1,"num":3,"remove":false,"type":0}]],"prizeAmount":0}],"betAmount":2000,"freeInfo":{"odds":0,"surplusFreeCount":0,"totalFreePrizeAmount":0,"totalFreePrizeCount":0},"freePrize":false,"prizeAmount":3600},"ErrMsg":"THAO TÁC THÀNH CÔNG","GameType":"slotDreamsofMacau","cmd":"slotDreamsofMacau/HD_Bet"}`
                // );
                // this.result = this.initData(info.Data);
                // console.log("info.Data", info.Data);

                this.result = this.initData(data.Data);
                this.emit(SlotMacauGameEvent.START);
              }
          }
        };
        _createClass(SlotMacauProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return SlotMacauProxyMgr;
      }(ProxyBase);
      var SlotMacauProxy = exports('default', new SlotMacauProxyMgr("SlotMacauProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotMacauRandItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, Tween, tween, Sprite, Component;
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
      SpriteFrame = module.SpriteFrame;
      Tween = module.Tween;
      tween = module.tween;
      Sprite = module.Sprite;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a91dbGB44FOIpGLZTU2AWuB", "SlotMacauRandItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauRandItem = exports('default', (_dec = ccclass("SlotMacauRandItem"), _dec2 = menu("game/SlotMacau/SlotMacauRandItem"), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauRandItem, _Component);
        function SlotMacauRandItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_normal", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal3", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal4", _descriptor5, _assertThisInitialized(_this));
          _this._index = void 0;
          _this._type = void 0;
          _this._count = 1;
          _this._info = void 0;
          _this._lastRandIndex = 0;
          return _this;
        }
        var _proto = SlotMacauRandItem.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.setCard = function setCard(info, end) {
          var _this2 = this;
          this._index = info.num - 1;
          this._info = info;
          var count = info.count > 1 ? info.count : 0;
          this.node_normal.active = false;
          var list = [];
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.node);
          {
            if (count == 4) {
              list = this.frame_normal4;
            } else if (count == 3) {
              list = this.frame_normal3;
            } else if (count == 2) {
              list = this.frame_normal2;
            } else {
              list = this.frame_normal;
            }
            this.schedule(function () {
              _this2.rand(list);
            }, 0.1, 5, 0.5);
            tween(this.node).delay(1.3).call(function () {
              _this2.node_normal.getComponent(Sprite).spriteFrame = list[_this2._index];
            }).start();
          }
        };
        _proto.rand = function rand(list) {
          this.node_normal.active = true;
          var index = Math.floor(Math.random() * list.length);
          while (index == this._lastRandIndex) {
            index = Math.floor(Math.random() * list.length);
          }
          this._lastRandIndex = index;
          this.node_normal.getComponent(Sprite).spriteFrame = list[index];
        };
        _createClass(SlotMacauRandItem, [{
          key: "info",
          get: function get() {
            return this._info;
          }
        }]);
        return SlotMacauRandItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_normal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal4", [_dec7], {
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

System.register("chunks:///_virtual/SlotMacauRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauDef.ts', './SlotMacauProxy.ts', './SlotMacauRunItemTop.ts', './SlotMacauRunItemBlock.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, SpriteFrame, sp, Sprite, UITransform, v3, Component, SlotMacauDef, SlotMacauProxy, SlotMacauGameEvent, SlotMacauRunItemTop, SlotMacauRunItemBlock;
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
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SlotMacauDef = module.SlotMacauDef;
    }, function (module) {
      SlotMacauProxy = module.default;
      SlotMacauGameEvent = module.SlotMacauGameEvent;
    }, function (module) {
      SlotMacauRunItemTop = module.default;
    }, function (module) {
      SlotMacauRunItemBlock = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "fd51cmGY6BMmK9YNlU5bHNr", "SlotMacauRunItem", undefined);
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
      var SlotMacauRunItem = exports('default', (_dec = ccclass("SlotMacauRunItem"), _dec2 = menu("game/SlotMacau/SlotMacauRunItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SlotMacauRunItemBlock), _dec13 = property(SlotMacauRunItemTop), _dec14 = property(sp.SkeletonData), _dec15 = property(sp.SkeletonData), _dec16 = property(SpriteFrame), _dec17 = property(Sprite), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauRunItem, _Component);
        function SlotMacauRunItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_parent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wild", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_normal", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_blur", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal3", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_normal4", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_black", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_top", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_wilds", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_scatters", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_hps", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_hp", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatterLight", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lightUp", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lightDown", _descriptor18, _assertThisInitialized(_this));
          _this._state = CardState.RESULT;
          _this._index = void 0;
          _this._type = void 0;
          _this._count = 1;
          _this._info = void 0;
          _this._offY = 0;
          return _this;
        }
        var _proto = SlotMacauRunItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node_wild.active = false;
          this.node_scatter.active = false;
          this.node_normal.active = true;
          this.node_top.node.active = false;
        };
        _proto.setCard = function setCard(info, end) {
          var _this2 = this;
          if (end === void 0) {
            end = true;
          }
          var index = info.num - 1;
          this._info = info;
          // let count = info.count > 1 ? info.count : 0;
          var count = info.count == 0 ? 0 : info.count || 1;
          this.sprite_hp.node.active = false;
          this.node_scatterLight.active = false;
          var list = this.frame_normal;
          if (index >= 12) {
            this.node_wild.active = true;
            this.node_normal.active = false;
            this.node_scatter.active = false;
            if (index > 12) {
              this.sprite_hp.node.active = true;
              this.sprite_hp.spriteFrame = this.frame_hps[index - 13];
              if (count) {
                this.node_wild.getComponent(sp.Skeleton).skeletonData = this.spine_wilds[count - 1];
              } else {
                this.node_wild.getComponent(sp.Skeleton).skeletonData = this.spine_wilds[0];
              }
            } else {
              if (count) {
                this.node_wild.getComponent(sp.Skeleton).skeletonData = this.spine_wilds[count - 1];
              } else {
                this.node_wild.getComponent(sp.Skeleton).skeletonData = this.spine_wilds[0];
              }
            }
            if (end && this._index != index) SlotMacauDef.palyAudio(SlotMacauDef.audio.WILD);
            // if (count > 0) this.node.getComponent(cc.UITransform).priority = 10;
          } else if (index == 11) {
            this.node_wild.active = false;
            this.node_normal.active = false;
            this.node_scatter.active = true;
            this.node_scatterLight.active = true;
            if (count > 1) {
              this.node_scatter.getComponent(sp.Skeleton).skeletonData = this.spine_scatters[1];
              this.node_lightUp.setPosition(0, 100);
              this.node_lightDown.setPosition(0, -100);
            } else {
              this.node_scatter.getComponent(sp.Skeleton).skeletonData = this.spine_scatters[0];
              this.node_lightUp.setPosition(0, 50);
              this.node_lightDown.setPosition(0, -50);
            }
            // console.log(" this.node_scatter.getComponent(sp.Skeleton)", this.node_scatter.getComponent(sp.Skeleton), info);

            this.scheduleOnce(function () {
              _this2.node_scatter.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            });
            if (end && this._index != index) SlotMacauDef.palyAudio(SlotMacauDef.audio.SCATTER);

            // this.node.setSiblingIndex(9);

            if (count > 0) this.node.getComponent(UITransform).priority = 10;
          } else {
            this.node_wild.active = false;
            this.node_normal.active = true;
            this.node_scatter.active = false;
            if (count > 1) {
              if (count == 2) {
                list = this.frame_normal2;
              } else if (count == 3 && this.frame_normal3[index]) {
                list = this.frame_normal3;
              } else if (count == 4 && this.frame_normal4[index]) {
                list = this.frame_normal4;
              } else {
                list = this.frame_normal2;
              }
            }
            this.node_normal.getComponent(Sprite).spriteFrame = list[index];
            this.node.getComponent(UITransform).priority = 2;
          }
          this._offY = 111 * (count - 1);
          this.node_parent.setPosition(0, 111 / 2 * (count - 1));
          this.node_parent.getComponent(UITransform).height = 111 * count;
          this.setParentActive(count > 0);
          this.node_black.setInfo(info);
          this._index = info.num - 1;
          if (end) {
            this.node_top.node.active = true;
            this.node_top.setType(info.type);
            this.node_top.setCount(count);
          } else {
            this.node_top.node.active = false;
          }
        };
        _proto.rand = function rand(list) {
          var index = Math.floor(Math.random() * 13);
          this.node_normal.getComponent(Sprite).spriteFrame = list[index];
        };
        _proto.setParentActive = function setParentActive(b) {
          this.node_parent.active = b;
        };
        _proto.randCard = function randCard() {
          var rand = Math.floor(Math.random() * 11) + 1;
          this.setCard({
            num: rand,
            type: 0,
            count: 1,
            remove: false
          }, false);
          this.node_normal.getComponent(Sprite).spriteFrame = this.frame_blur[rand - 1];
        };
        _proto.initCard = function initCard() {
          var rand = Math.floor(Math.random() * 11) + 1;
          this.setCard({
            num: rand,
            type: 0,
            count: 1,
            remove: false
          }, false);
          this.node_normal.getComponent(Sprite).spriteFrame = this.frame_normal[rand - 1];
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showScatter = function showScatter() {
          if (this._index == 11) {
            this.node_scatter.getComponent(sp.Skeleton).setAnimation(0, "win", true);
            this.node_scatterLight.active = true;
          }
        };
        _proto.hideScatter = function hideScatter() {
          // this.node_scatterLight.active = false;
        };
        _proto.onClick = function onClick() {
          SlotMacauProxy.emit(SlotMacauGameEvent.CLICK_ITEM, {
            info: this._info,
            pos: this.node_parent.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        _createClass(SlotMacauRunItem, [{
          key: "info",
          get: function get() {
            return this._info;
          }
        }, {
          key: "offY",
          get: function get() {
            return this._offY;
          }
        }]);
        return SlotMacauRunItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_parent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_wild", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_scatter", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_normal", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frame_blur", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal3", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "frame_normal4", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_black", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_top", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spine_wilds", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spine_scatters", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "frame_hps", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "sprite_hp", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_scatterLight", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_lightUp", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_lightDown", [_dec20], {
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

System.register("chunks:///_virtual/SlotMacauRunItemBlock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Color, Component;
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
      Color = module.Color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "d11d4DWghRBr5589m8G/ObL", "SlotMacauRunItemBlock", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauRunItemBlock = exports('default', (_dec = ccclass("SlotMacauRunItemBlock"), _dec2 = menu("game/SlotMacau/SlotMacauRunItemBlock"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauRunItemBlock, _Component);
        function SlotMacauRunItemBlock() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite_block", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_count1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_count2", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotMacauRunItemBlock.prototype;
        _proto.setInfo = function setInfo(info) {
          var frameList = [];
          this.sprite_block.color = new Color().fromHEX("#FFFFFF");
          if (info.num < 7) {
            frameList = this.frame_count2;
            var color = ["#E285FF", "#278EFF", "#44FFAD"];
            var num = Math.floor((info.num - 1) / 2);
            this.sprite_block.color = new Color().fromHEX(color[num]);
          } else if (info.num < 12) {
            frameList = this.frame_count1;
          } else {
            frameList = null;
          }
          if (frameList) {
            this.sprite_block.node.active = true;
            if (info.count) {
              this.sprite_block.spriteFrame = frameList[info.count - 1];
            } else {
              this.sprite_block.spriteFrame = frameList[0];
            }
          } else {
            this.sprite_block.node.active = false;
          }
        };
        return SlotMacauRunItemBlock;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_block", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame_count1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frame_count2", [_dec5], {
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

System.register("chunks:///_virtual/SlotMacauRunItemTop.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, UITransform, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "15b59MjkI9LMrtVh3+wz7gC", "SlotMacauRunItemTop", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauRunItemTop = exports('default', (_dec = ccclass("SlotMacauRunItemTop"), _dec2 = menu("game/SlotMacau/SlotMacauRunItemTop"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauRunItemTop, _Component);
        function SlotMacauRunItemTop() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_top1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_topMore1", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_topMore2", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_topMoreSide1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_topMoreSide2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_more", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_side", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_top1", _descriptor8, _assertThisInitialized(_this));
          _this._type = 0;
          _this._count = 1;
          return _this;
        }
        var _proto = SlotMacauRunItemTop.prototype;
        _proto.setType = function setType(type) {
          this._type = type;
          if (this._type == 0 || this._type == 1) {
            this.node.active = false;
          } else {
            this.node.active = true;
            this.node_top1.getComponent(Sprite).spriteFrame = this.frame_top1[type - 2];
            this.node_topMore1.getComponent(Sprite).spriteFrame = this.frame_more[type - 2];
            this.node_topMore2.getComponent(Sprite).spriteFrame = this.frame_more[type - 2];
            this.node_topMoreSide1.getComponent(Sprite).spriteFrame = this.frame_side[type - 2];
            this.node_topMoreSide2.getComponent(Sprite).spriteFrame = this.frame_side[type - 2];
          }
        };
        _proto.setCount = function setCount(count) {
          this._count = count;
          if (count > 1) {
            this.node_top1.active = false;
            this.node_topMore1.active = true;
            this.node_topMore2.active = true;
            this.node_topMoreSide1.active = true;
            this.node_topMoreSide2.active = true;
            this.node_topMore1.setPosition(0, 111 * count / 2 - 30);
            this.node_topMore2.setPosition(0, -(111 * count / 2 - 30));
            this.node_topMoreSide1.getComponent(UITransform).height = 111 * count;
            this.node_topMoreSide2.getComponent(UITransform).height = 111 * count;
          } else {
            this.node_top1.active = true;
            this.node_topMore1.active = false;
            this.node_topMore2.active = false;
            this.node_topMoreSide1.active = false;
            this.node_topMoreSide2.active = false;
          }
        };
        _proto.clear = function clear() {
          this._type = 0;
          this._count = 1;
        };
        return SlotMacauRunItemTop;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_top1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_topMore1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_topMore2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_topMoreSide1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_topMoreSide2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "frame_more", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "frame_side", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "frame_top1", [_dec10], {
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

System.register("chunks:///_virtual/SlotMacauScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './SlotMacauDef.ts', './SlotMacauProxy.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, SlotMacauDef, SlotMacauProxy, MainManager;
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
      SlotMacauDef = module.SlotMacauDef;
    }, function (module) {
      SlotMacauProxy = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "beaedTo2vZHFaH4nX08kLBQ", "SlotMacauScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotMacauScene = exports('default', (_dec = ccclass("SlotMacauScene"), _dec2 = menu("game/SlotMacau/SlotMacauScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauScene, _Component);
        function SlotMacauScene() {
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
        var _proto = SlotMacauScene.prototype;
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
          SlotMacauDef.palyMusic(SlotMacauDef.audio.BG);
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
          SlotMacauProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDisable = function onDisable() {
          SlotMacauProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return SlotMacauScene;
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

System.register("chunks:///_virtual/SlotMacauSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ViewManager.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "c9c70vJcy5DLqVmJcZoEP9H", "SlotMacauSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var SlotMacauSetAuto = exports('default', (_dec = ccclass("SlotMacauSetAuto"), _dec2 = menu("game/SlotMacau/SlotMacauSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(ToggleContainer), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauSetAuto, _Component);
        function SlotMacauSetAuto() {
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
        var _proto = SlotMacauSetAuto.prototype;
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
          // console.log("data", data);
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
        return SlotMacauSetAuto;
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

System.register("chunks:///_virtual/SlotMacauView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ViewManager.ts', './ScrollNumLabel.ts', './Common.ts', './SlotMacauCardAni.ts', './SlotMacauDef.ts', './SlotMacauProxy.ts', './SlotMacauWinItem.ts', './SlotMacauWindow.ts', './ClickbtnEffect.ts', './FortuneSetAuto.ts', './FortuneRank.ts', './FortuneHistory.ts', './FortuneSetBase.ts', './MainManager.ts', './SlotMacauOddAni.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sp, Button, Label, Node, SpriteFrame, Prefab, Toggle, Sprite, instantiate, Tween, tween, v3, UITransform, sys, Color, color, Component, i18n, ProxyMgr, AudioManager, DataManager, UserKey, NetManager, ViewManager, ScrollNumLabel, Common, SlotMacauCardAni, SlotMacauDef, SlotMacauProxy, SlotMacauGameEvent, SlotMacauWinItem, SlotMacauWindow, ClickbtnEffect, FortuneSetAuto, FortuneRank, FortuneHistory, FortuneSetBase, MainManager, SlotMacauOddAni;
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
      instantiate = module.instantiate;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UITransform = module.UITransform;
      sys = module.sys;
      Color = module.Color;
      color = module.color;
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
      SlotMacauCardAni = module.default;
    }, function (module) {
      SlotMacauDef = module.SlotMacauDef;
    }, function (module) {
      SlotMacauProxy = module.default;
      SlotMacauGameEvent = module.SlotMacauGameEvent;
    }, function (module) {
      SlotMacauWinItem = module.default;
    }, function (module) {
      SlotMacauWindow = module.default;
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
      SlotMacauOddAni = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64;
      cclegacy._RF.push({}, "092b4vWRYFPhqgHxi8r50Pp", "SlotMacauView", undefined);
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
        FREE_ADD: 10,
        ENTER_FREE: 11,
        FINISH_FREEANI: 12,
        LEAVE_FREE: 13,
        FREE_END: 14
      };
      var RUN_TIME = 0.8;
      var STOP_TIME = 1.5;
      var AWARD_TIME = 2;
      var BIG_WIN_TIME1 = 8;
      var BIG_WIN_TIME2 = 12;
      var BIG_WIN_TIME3 = 16;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 2;
      var FREE_TIME = 10;
      var FREE_WIN_TIME = 5;
      var SlotMacauView = exports('default', (_dec = ccclass("SlotMacauView"), _dec2 = menu("game/SlotMacau/SlotMacauView"), _dec3 = property(SlotMacauCardAni), _dec4 = property(sp.Skeleton), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Label), _dec8 = property(ScrollNumLabel), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(ScrollNumLabel), _dec12 = property(Label), _dec13 = property(sp.Skeleton), _dec14 = property(ScrollNumLabel), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(SpriteFrame), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(sp.Skeleton), _dec22 = property(Label), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(Prefab), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Label), _dec31 = property(Prefab), _dec32 = property(ScrollNumLabel), _dec33 = property(Toggle), _dec34 = property(ClickbtnEffect), _dec35 = property(SpriteFrame), _dec36 = property(Sprite), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(sp.Skeleton), _dec40 = property(ScrollNumLabel), _dec41 = property(Label), _dec42 = property(Node), _dec43 = property(Button), _dec44 = property(sp.Skeleton), _dec45 = property(sp.Skeleton), _dec46 = property(SlotMacauOddAni), _dec47 = property(Label), _dec48 = property(sp.Skeleton), _dec49 = property(Node), _dec50 = property(Label), _dec51 = property(Node), _dec52 = property(Label), _dec53 = property(Node), _dec54 = property(Label), _dec55 = property(sp.Skeleton), _dec56 = property(Node), _dec57 = property(Node), _dec58 = property(Node), _dec59 = property(Sprite), _dec60 = property(Sprite), _dec61 = property(Sprite), _dec62 = property(Sprite), _dec63 = property(SpriteFrame), _dec64 = property(SpriteFrame), _dec65 = property(Button), _dec66 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauView, _Component);
        function SlotMacauView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniLines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_start", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_add", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_reduce", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_title", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noticeFrames", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gain", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_content", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_tip", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gain", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gainTitle", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_totalGain", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalGain", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftCount", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_window", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_line", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_auto", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickEffect", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_bgs", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeBg", _descriptor35, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeWinBg", _descriptor36, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeWin", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeWin", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeLeft", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeLeft", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeBg", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_quick", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odd", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_selectCount", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_freeWinBtn", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeWinBtn", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_leftTime", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeAdd", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeAdd", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_buyFree", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_buyFree", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_light", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_free0", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_free1", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_buyFreeBtn", _descriptor56, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg1", _descriptor57, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg4", _descriptor58, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg2", _descriptor59, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_bg3", _descriptor60, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frames_bg1", _descriptor61, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frames_bg2", _descriptor62, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_checkFree", _descriptor63, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatterLight", _descriptor64, _assertThisInitialized(_this));
          _this._runDelay = 0.05;
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
          _this._freeCount = 0;
          _this._allFreeCount = 0;
          _this._oddType = 20;
          _this._odds = void 0;
          _this.lightTimeId = 0;
          _this._bigWinSoundId = 0;
          _this._isScatter = false;
          _this.scatterLine = 0;
          _this._totalWin = 0;
          _this._bigWinAniName = "bigwin_";
          return _this;
        }
        var _proto = SlotMacauView.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
          this.setData();
          this.clear();
          this.initEvent();
        };
        _proto.init = function init() {
          SlotMacauDef.palyMusic(SlotMacauDef.audio.BG);
          var node = instantiate(this.prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(SlotMacauWindow);
          node.active = false;
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotMacau.info, {});
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
        _proto.checkSpecialNext = function checkSpecialNext(col, row, used) {
          if (used === void 0) {
            used = 0;
          }
          var data = null;
          var prizeIdx = SlotMacauProxy.result.OpenNums[this._resultIndex].openNum[col];
          var nums = SlotMacauProxy.result.OpenNums[this._resultIndex + 1];
          if (nums) {
            var hasBingoCount = 0;
            for (var i = row + 1; i < 5; i++) {
              if (prizeIdx[i] && prizeIdx[i].remove) {
                // if (num) {
                //     if (prizeIdx[i].num == num) hasBingoCount++;
                // } else {
                //     num = prizeIdx[i].num;
                //     hasBingoCount++;
                // }
                hasBingoCount++;
              }
            }
            hasBingoCount -= used;
            if (nums.openNum[col][row + hasBingoCount].type > 2 || nums.openNum[col][row + hasBingoCount].num > 13) {
              data = nums.openNum[col][row + hasBingoCount];
            }
          }
          return data;
        };
        _proto.showSpine = function showSpine(col, row, result, used) {
          if (used === void 0) {
            used = 0;
          }
          var index = col * 5 + row;
          var child = this.node_spineParent.getChildByName("spine" + index);
          var hasSpecial = 0;
          if (result.count !== 0) {
            child.active = true;
            var item = child.getChildByName("item");
            if (!item) {
              item = instantiate(this.prefab_winItem);
              child.addChild(item);
              item.name = "item";
            }
            var specialNext = null;
            if (result.num > 14) {
              specialNext = {
                num: result.num - 1,
                type: result.type,
                count: result.count
              };
              hasSpecial = result.count;
            } else if (result.type > 2) {
              // let data = this.checkSpecialNext(col, row);
              // specialNext = {
              //     num: data.num,
              //     type: data.type,
              //     count: result.count,
              // };

              specialNext = {
                num: result.count + 13,
                type: 1,
                count: result.count
              };
              hasSpecial = result.count;

              // console.log("index", index, specialNext);
            } else if (result.type > 1) {
              var data = this.checkSpecialNext(col, row, used);
              if (data) {
                specialNext = {
                  num: data.num,
                  type: data.type,
                  count: result.count
                };
                hasSpecial = result.count;
              }
            }
            var winItem = item.getComponent(SlotMacauWinItem);
            winItem.showResult(result, specialNext);

            // if (!specialNext)
            //     cc.tween(child)
            //         .delay(1)
            //         .call(() => {
            //             // child.active = false;
            //         })
            //         .start();
          }

          this.aniLines[col].hide(row);

          // if (index < 5) {
          //     this.aniLines[1].hide(index);
          // } else if (index > 28) {
          //     this.aniLines[6].hide(index - 29);
          // } else {
          //     index = index - 5;
          //     let a = Math.floor(index / 6);
          //     let b = index % 6;
          //     if (b == 0) {
          //         this.aniLines[b].hide(a);
          //     } else {
          //         this.aniLines[a + 2].hide(b - 1);
          //     }
          // }

          return hasSpecial;
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          SlotMacauProxy.on(SlotMacauGameEvent.UPDATE_BETLIST, this.updateInfo, this);
          SlotMacauProxy.on(SlotMacauGameEvent.SELECT_BET, function (count) {
            //                // this.node_betSelect.active = false;
            _this2.setData();
            Tween.stopAllByTarget(_this2.txt_bet.node);
            tween(_this2.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);
          SlotMacauProxy.on(SlotMacauGameEvent.START, function () {
            _this2.runStart();
          }, this);
          SlotMacauProxy.on(SlotMacauGameEvent.ERROR, function () {
            _this2.changeState(RunState.NORMAL);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.onClickQuick, this);
          SlotMacauProxy.on(SlotMacauGameEvent.CLICK_ITEM, function (data) {
            if (!_this2.checkClick()) return;
            _this2._window.node.scale = v3(1, 1, 1);
            _this2._window.node.active = true;
            var pos = data.pos;
            pos = _this2.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            _this2._window.showInfo(data.info, pos);
          }, this);
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          SlotMacauProxy.on(SlotMacauGameEvent.SELECT_ODD, function (info) {
            //                // this.selectOdd(info);
            _this2._freeCount = info;
            _this2._allFreeCount = info;
            _this2.txt_selectCount.string = _this2._allFreeCount + "";
            _this2.setFreeCount(info);
            _this2.onClickFree();
          }, this);
          this.node_freeWinBtn.on(Node.EventType.MOUSE_ENTER, function () {
            _this2.spine_freeWinBtn.node.active = true;
            _this2.spine_freeWinBtn.setAnimation(0, "push", true);
          }, this);
          this.node_freeWinBtn.on(Node.EventType.MOUSE_LEAVE, function () {
            _this2.spine_freeWinBtn.node.active = false;
          }, this);
          SlotMacauProxy.on(SlotMacauGameEvent.FINISH_RUN_INDEX, function (info) {
            if (_this2._isScatter) {
              if (info >= _this2.scatterLine) {
                var index = info + 1;
                if (_this2.aniLines[index]) {
                  for (var _iterator3 = _createForOfIteratorHelperLoose(_this2.aniLines), _step3; !(_step3 = _iterator3()).done;) {
                    var i = _step3.value;
                    i.showMask();
                  }
                  _this2.aniLines[index].showLight();
                }
                _this2.node_content.active = false;
                _this2.spine_tip.setAnimation(0, "scatter_wait", true);

                // SlotMacauDef.palyAudio(SlotMacauDef.audio.HEIGHT_LIGHT);
                SlotMacauDef.palyAudio(SlotMacauDef.audio.HEARTBEAT);
              }
              _this2.showScatter();
            }
            if (info == 5) {
              _this2.hideScatter();
              for (var _iterator4 = _createForOfIteratorHelperLoose(_this2.aniLines), _step4; !(_step4 = _iterator4()).done;) {
                var _i = _step4.value;
                _i.hideMask();
              }
              _this2.spine_tip.setAnimation(0, "normal_idle", true);
              _this2.node_content.active = true;
              _this2._lock = false;
              _this2.showResult();
              if (_this2.lightTimeId) {
                AudioManager.instance.stopSound(_this2.lightTimeId);
              }
            }
          }, this);
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          SlotMacauProxy.setBet(betListIndex, betCount);
        };
        _proto.updateInfo = function updateInfo(data) {
          //        // this.node_bets.destroyAllChildren();
          //        // for (let bet of SlotMacauProxy.betList) {
          //        //     let node = cc.instantiate(this.pre_bet);
          //        //     this.node_bets.addChild(node);
          //        //     // node.getComponent(SlotMacauBetItem).setBet(bet);
          //        // }

          //        // betAmount
          if (data.freePrize) {
            // this.changeScene(true);
            this.changeState(RunState.ENTER_FREE);
            SlotMacauProxy.setBetByCount(data.betAmount);
          } else if (data.freeInfo.surplusFreeCount > 0) {
            //            // this.changeScene(true);
            this.showWildInfo(data);
            SlotMacauProxy.setBetByCount(data.betAmount);
            //            // this._preOdd = data.freeOdds;
            //            // this._nextOdd = data.freeOdds;
            //            // this._preWildCount = data.wildCount;
          }

          this._freeCount = data.freeInfo.surplusFreeCount;
          var nums = data.OpenNums[0].openNum;
          this.aniLines[6].showNext(nums[6]);
          for (var i = 0; i < this.aniLines.length - 1; i++) {
            if (i == this.aniLines.length - 1) ;
            // let arr = [nums[start + 0], nums[start + 1], nums[start + 2], nums[start + 3], nums[start + 4]];
            var arr = nums[i].slice();
            arr = arr.reverse();
            this.aniLines[i].showNext(arr);
          }
        };
        _proto.setData = function setData() {
          this._bet = SlotMacauProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
          this.txt_buyFree.string = Common.numFormat(this._bet * 75);
          this.updateBetBtn(true);
        };
        _proto.updateBetBtn = function updateBetBtn(b) {
          if (this._auto) {
            b = false;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.btns), _step5; !(_step5 = _iterator5()).done;) {
            var btn = _step5.value;
            btn.interactable = b;
            // Common.changeNodeEffect(btn.target, !b);
          }

          if (b) {
            this.btn_add.interactable = !(SlotMacauProxy._curBetListIndex == SlotMacauProxy.betList.length - 1 && SlotMacauProxy._curBetCount == SlotMacauProxy.betMaxCount - 1);
            this.btn_reduce.interactable = !(SlotMacauProxy._curBetListIndex == 0 && SlotMacauProxy._curBetCount == 0);
          }
        };
        _proto.updateGold = function updateGold(used) {
          if (used === void 0) {
            used = 0;
          }
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          this.txt_goldFree.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
        };
        _proto.onClickBg = function onClickBg() {
          this._window.node.active = false;
          this.node_buyFree.active = false;
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
            node.getComponent(FortuneRank).send("slotDreamsofMacau");
          }, true);
        };
        _proto.onClickRecord = function onClickRecord() {
          if (!this.checkClick()) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotDreamsofMacau");
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/SlotMacauHelp", SlotMacauProxy.bundle, function () {}, function (prefab) {
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
          Common.returnToHall(this, SlotMacauProxy.BUNDLE);
        };
        _proto.onClickChangeBet = function onClickChangeBet() {
          if (!this.checkClick()) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: SlotMacauProxy._curBetListIndex,
              _curBetCount: SlotMacauProxy._curBetCount,
              betMaxCount: SlotMacauProxy.betMaxCount,
              betList: SlotMacauProxy.betList,
              betRate: SlotMacauProxy.betRate
            });
          }, true);
        };
        _proto.onClickBetUp = function onClickBetUp() {
          if (!this.checkClick()) return;
          SlotMacauProxy._curBetCount++;
          if (SlotMacauProxy._curBetCount >= SlotMacauProxy.betMaxCount) {
            SlotMacauProxy._curBetListIndex++;
            if (SlotMacauProxy._curBetListIndex >= SlotMacauProxy.betList.length) {
              SlotMacauProxy._curBetListIndex--;
              SlotMacauProxy._curBetCount--;
            } else {
              SlotMacauProxy._curBetCount = 0;
              SlotMacauProxy.setBet(SlotMacauProxy._curBetListIndex, SlotMacauProxy._curBetCount);
            }
          } else {
            SlotMacauProxy.setBet(SlotMacauProxy._curBetListIndex, SlotMacauProxy._curBetCount);
          }
        };
        _proto.onClickBetDown = function onClickBetDown() {
          if (!this.checkClick()) return;
          SlotMacauProxy._curBetCount--;
          if (SlotMacauProxy._curBetCount < 0) {
            SlotMacauProxy._curBetListIndex--;
            if (SlotMacauProxy._curBetListIndex < 0) {
              SlotMacauProxy._curBetListIndex++;
              SlotMacauProxy._curBetCount++;
            } else {
              SlotMacauProxy._curBetCount = SlotMacauProxy.betMaxCount - 1;
              SlotMacauProxy.setBet(SlotMacauProxy._curBetListIndex, SlotMacauProxy._curBetCount);
            }
          } else {
            SlotMacauProxy.setBet(SlotMacauProxy._curBetListIndex, SlotMacauProxy._curBetCount);
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
            this.txt_betFree.color = Color.WHITE;
            this.txt_goldFree.color = Color.WHITE;
            this.txt_winFree.getComponent(Label).color = Color.WHITE;
            tween(this.node_buyFreeBtn).to(0.5, {
              position: v3(0, 200)
            }).start();
          } else {
            this._auto = false;
            this.spine_start.setAnimation(0, "idle", true);
            this.btn_auto.setIsCheckedWithoutNotify(true);
            this.clickEffect.switchAni();
            this.txt_bet.color = color().fromHEX("#86dcff");
            this.txt_gold.color = color().fromHEX("#86dcff");
            this.txt_winFree.getComponent(Label).color = color().fromHEX("#86dcff");
            this.txt_bet.color = color().fromHEX("#86dcff");
            this.txt_goldFree.color = color().fromHEX("#86dcff");
            this.txt_winFree.getComponent(Label).color = color().fromHEX("#86dcff");
            tween(this.node_buyFreeBtn).to(0.5, {
              position: v3(0, 55)
            }).start();
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
        _proto.checkClick = function checkClick() {
          if (this._isFree) return false;
          if (this._auto) return false;
          if (this.freeLock) return false;
          if (!this.checkReady()) return false;
          if (this._lock) return false;
          return true;
        };
        _proto.onClickBuyFree = function onClickBuyFree() {
          this.onClickBg();
          if (!this.checkClick()) return;
          var multiple = 75;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          if (!this._isFree) this.updateGold(-this._bet * multiple);
          this.clear();
          this._state = RunState.START;
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
          this.node_buyFree.active = false;
          this.changeBtnActive(true);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotMacau.buyFree, {
            betAmount: this._bet + ""
          });
        };
        _proto.onClickCancelFree = function onClickCancelFree() {
          this.node_buyFree.active = false;
          this.changeBtnActive(true);
        };
        _proto.onClickCheckFree = function onClickCheckFree() {
          if (!this.checkClick()) return;
          this.spine_start.setAnimation(0, "stop", true);
          this.node_buyFree.active = true;
        };
        _proto.onClickFree = function onClickFree() {
          this.node_freeBg.active = false;
          this.freeTimeLeft = 0;
          this.freeLock = false;
          this._state = RunState.AWARD;
        };
        _proto.onClickFreeWin = function onClickFreeWin() {
          var _this4 = this;
          this.spine_freeWinBtn.node.active = true;
          this.spine_freeWinBtn.setAnimation(0, "intro", false);
          this.changeBtnActive(true);
          this.spine_freeWin.setAnimation(0, "end", false);
          this.scheduleOnce(function () {
            _this4.node_freeWinBg.active = false;
            _this4.freeLock = false;
            _this4._state = RunState.AWARD;
            _this4._runTime = 1;
          }, 0.5);
        };
        _proto.onClickQuick = function onClickQuick(b) {
          if (this._runDelay == 0) {
            this._runDelay = 0.05;
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
          var _this5 = this;
          this.setFreeCount(this._freeCount - 1);
          if (this._freeCount < 0) {
            this._freeCount = 0;
          }
          if (!this._isFree) this.checkAuto();
          //        // this.spine_startLight.setAnimation(0, "spin", false);
          this.changeBtnActive(false);
          SlotMacauDef.palyAudio(SlotMacauDef.audio.TURN);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          this.aniLines[6].run(0);
          var _loop = function _loop(i) {
            if (_this5._runDelay == 0) {
              _this5.aniLines[i].run(0);
            } else {
              _this5.scheduleOnce(function () {
                _this5.aniLines[i].run(0);
              }, _this5._runDelay * i);
            }
            // this.aniLines[i].run(0);
          };

          for (var i = 0; i < this.aniLines.length - 1; i++) {
            _loop(i);
          }
          if (this._runDelay == 0) {
            this._runTime = 0.3;
          }
        };
        _proto.sendBet = function sendBet() {
          this._errCount = 0;
          if (this._try) ;else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotMacau.bet, {
              betAmount: this._bet + ""
            });
          }
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          this.txt_win.reset();
          //        // this.txt_winFree.reset();
          this.lightTimeId = 0;
          SlotMacauProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          this.node_content.active = true;
          this.node_gain.active = false;
          this.node_totalGain.active = false;
          this.txt_totalGain.string = "";
          this._resultIndex = 0;
          this.bigWinBgClickIndex = 0;
          this.changeSpecialNotice();
          this._isScatter = false;
          this.scatterLine = 0;
          this.spine_tip.setAnimation(0, "normal_idle", true);
          this._totalWin = 0;
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
          this.node_freeLeft.active = isFree;
          //        // this.node_down.active = !isFree;

          if (isFree) {
            this.showScatter();
            this._freeCount = SlotMacauProxy.result.freeInfo.surplusFreeCount;
            //            // this.node_menu.active = false;
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.node_freeBg.active = true;
            this.sprite_bg.spriteFrame = this.frame_bgs[1];
            this.spine_freeBg.clearTrack(0);
            this.spine_freeBg.setAnimation(0, "intro", false);
            this.spine_freeBg.addAnimation(0, "idle", true);
            SlotMacauDef.palyAudio(SlotMacauDef.audio.TITLE);
            this.spine_light.setAnimation(0, "free_idle", true);
            tween(this.node_buyFreeBtn).to(0.5, {
              position: v3(0, 200)
            }).start();
            this.txt_odd.setOdd(SlotMacauProxy.result.freeInfo.odds || 1);
            this.txt_leftTime.string = "" + this._freeCount;
            this.txt_selectCount.string = SlotMacauProxy.result.freeInfo.totalFreePrizeCount + "";
            this.sprite_bg1.spriteFrame = this.frames_bg1[1];
            this.sprite_bg4.spriteFrame = this.frames_bg1[1];
            this.sprite_bg2.spriteFrame = this.frames_bg2[1];
            this.sprite_bg3.spriteFrame = this.frames_bg2[1];
            SlotMacauDef.palyAudio(SlotMacauDef.audio.BG2);
          } else {
            this._allFreeCount = 0;
            this.sprite_bg.getComponent(Sprite).spriteFrame = this.frame_bgs[0];
            this.spine_light.setAnimation(0, "normal_idle", true);
            this.txt_odd.setOdd(0);
            if (!this._auto) tween(this.node_buyFreeBtn).to(0.5, {
              position: v3(0, 55)
            }).start();
            this.sprite_bg1.spriteFrame = this.frames_bg1[0];
            this.sprite_bg4.spriteFrame = this.frames_bg1[0];
            this.sprite_bg2.spriteFrame = this.frames_bg2[0];
            this.sprite_bg3.spriteFrame = this.frames_bg2[0];
            SlotMacauDef.palyAudio(SlotMacauDef.audio.BG);
          }
        };
        _proto.calLine = function calLine() {
          // let OpenNums = SlotMacauProxy.result.OpenNums[this._resultIndex].openNum;
          // let counts = [5, 6 + 5, 17, 23, 29, 34];
          // let realCounts = [5, 6, 6, 6, 6, 5];
          // let index = 0;
          // for (let i = 0; i < OpenNums.length; i++) {
          //     if (i == counts[index]) {
          //         index++;
          //     }
          //     if (i < counts[index]) {
          //         if (OpenNums[i].count == 0) realCounts[index]--;
          //     }
          // }

          // let count = 1;
          // for (let i of realCounts) {
          //     count *= i;
          // }

          var count = SlotMacauProxy.result.OpenNums[this._resultIndex].lines;
          this.txt_line.useFormal = false;
          this.txt_line.string = "" + count;
        };
        _proto.showResult = function showResult() {
          if (!SlotMacauProxy.result) {
            return;
          }
          if (this._isFree) ;
          this.calLine();
          this.checkAward();
        };
        _proto.checkAward = function checkAward() {
          //        // let prizeAmount = SlotMacauProxy.result.Res[this._resultIndex].RewardMoney;
          var prizeAmount = SlotMacauProxy.result.prizeAmount;
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
                var odd = SlotMacauProxy.result.prizeAmount / this._bet;
                var aniname = "bigwin_";
                this.txt_bigwin.stepCount = BIG_WIN_TIME1 * 30;
                this.sp_bigWin.setAnimation(0, aniname + "win", false);
                if (odd >= 30) {
                  aniname = "megawin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME2 * 30;
                  this._runTime = BIG_WIN_TIME2;
                  this.sp_bigWin.setAnimation(0, aniname + "win", false);
                }
                if (odd >= 50) {
                  aniname = "superwin_";
                  this.txt_bigwin.stepCount = BIG_WIN_TIME3 * 30;
                  this._runTime = BIG_WIN_TIME3;
                  this.sp_bigWin.setAnimation(0, aniname + "win", false);
                }
                this._bigWinAniName = aniname;
                this.txt_bigwin.string = Common.numFormat(SlotMacauProxy.result.prizeAmount);
                this.sp_bigWin.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this6.sp_bigWin.setCompleteListener(null);
                    _this6.sp_bigWin.setAnimation(0, aniname + "idle", true);
                    // this.scheduleOnce(() => {
                    //     this.node_bigwin.active = false;
                    //     this.txt_bigwin.reset();
                    // }, 4);
                  }
                });

                SlotMacauDef.palyAudio(SlotMacauDef.audio.BIGWIN, function (id) {
                  _this6._bigWinSoundId = id;
                });
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._state = RunState.SHOWGAIN;
                this._runTime = GAIN_TIME;
                this.scheduleOnce(function () {
                  _this6.txt_win.string = Common.numFormat(SlotMacauProxy.result.prizeAmount + "");
                  _this6.txt_winFree.string = Common.numFormat(SlotMacauProxy.result.freeInfo.totalFreePrizeAmount + "");
                });
                this.node_totalGain.active = true;
                tween(this.node_totalGain).to(0.2, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.2, {
                  scale: v3(1, 1, 1)
                }).start();
                this.node_gain.active = false;
                this.txt_totalGain.string = Common.numFormat(SlotMacauProxy.result.prizeAmount + "");
                this.changeBtnActive(true);
                var prize = SlotMacauProxy.result.prizeAmount;
                var _odd = prize / this._bet;
                var name = "normal";
                if (_odd >= 60) {
                  name = "bigwin2";
                } else if (_odd >= 5) {
                  name = "bigwin";
                }
                this.spine_tip.setAnimation(0, name + "_win", false);
                this.spine_tip.addAnimation(0, name + "_idle", true);
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
                  _this6.node_spineMask.active = false;
                }, 1);
                this.scheduleOnce(function () {
                  _this6.showNext();
                }, 1.6);
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
                if (!this._auto) this.spine_start.setAnimation(0, "stop", true);
                this.txt_freeWin.reset();
                SlotMacauProxy.freeTotalWin = SlotMacauProxy.result.freeInfo.totalFreePrizeAmount;
                this.txt_freeWin.string = Common.numFormat(SlotMacauProxy.freeTotalWin);
                this.node_content.active = false;
                this.node_totalGain.active = true;
                this.node_gain.active = false;
                this.txt_win.string = Common.numFormat(SlotMacauProxy.freeTotalWin + "");
                this.txt_totalGain.string = Common.numFormat(SlotMacauProxy.freeTotalWin + "");
                var _prize = SlotMacauProxy.freeTotalWin;
                var _odd2 = _prize / this._bet;
                var _name = "normal";
                if (_odd2 >= 60) {
                  _name = "bigwin2";
                } else if (_odd2 >= 5) {
                  _name = "bigwin";
                }
                this.spine_tip.setAnimation(0, _name + "_win", false);
                this.spine_tip.addAnimation(0, _name + "_idle", true);
                this.spine_freeWin.setAnimation(0, "intro", false);
                this.spine_freeWin.addAnimation(0, "idle", true);
                this.txt_winFree.reset();
                SlotMacauProxy.freeTotalWin = 0;
                SlotMacauDef.palyAudio(SlotMacauDef.audio.FREE_WIN);
                break;
              }
            case RunState.FREE_ADD:
              {
                this._state = RunState.FREE_ADD;
                this.txt_freeAdd.string = SlotMacauProxy.result.freeInfo.surplusFreeCount - this._freeCount + "";
                this._allFreeCount = SlotMacauProxy.result.freeInfo.totalFreePrizeCount;
                this.txt_selectCount.string = this._allFreeCount + "";
                this.node_freeAdd.active = true;
                tween(this.node_freeAdd).to(0.3, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).delay(1).call(function () {
                  _this6.node_freeAdd.active = false;
                  _this6._state = RunState.WAIT;
                }).start();
                this.setFreeCount(SlotMacauProxy.result.freeInfo.surplusFreeCount);
                break;
              }
            case RunState.ENTER_FREE:
              {
                this._state = RunState.ENTER_FREE;
                this.scheduleOnce(function () {
                  _this6.changeScene(true);
                }, 0.5);
                break;
              }
            case RunState.LEAVE_FREE:
              {
                this._state = RunState.LEAVE_FREE;
                this.changeScene(false);
                break;
              }
          }
        };
        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          //        // this.txt_win.string = Common.numFormat(SlotMacauProxy.result.prizeAmount + "");

          //        // this.txt_winFree.string = Common.numFormat(SlotMacauProxy.result.Res[this._resultIndex].RewardMoney);

          if (SlotMacauProxy.result.prizeAmount > 0) {
            SlotMacauDef.palyAudio(SlotMacauDef.audio.AWARD1);
          }
          if (SlotMacauProxy.result.prizeAmount) {
            this.showLines();
            this.showWin(true);
          }
        };
        _proto.checkScatter = function checkScatter() {
          var nums = SlotMacauProxy.result.OpenNums[this._resultIndex].openNum;
          var scatterCount = 0;
          for (var _iterator6 = _createForOfIteratorHelperLoose(nums), _step6; !(_step6 = _iterator6()).done;) {
            var list = _step6.value;
            for (var _iterator7 = _createForOfIteratorHelperLoose(list), _step7; !(_step7 = _iterator7()).done;) {
              var i = _step7.value;
              if (i.num == 12 && i.count > 0) {
                scatterCount++;
              }
            }
          }
          if (scatterCount >= 3) {
            this._isScatter = true;
          }
        };
        _proto.showNext = function showNext() {
          var _this7 = this;
          this.hideSpine();
          this._showLineIndex = 0;
          this.node_spineMask.active = false;
          var delayTime = 0;
          this.checkScatter();
          if (this._isScatter) {
            this.showScatter();
            for (var _iterator8 = _createForOfIteratorHelperLoose(this.aniLines), _step8; !(_step8 = _iterator8()).done;) {
              var i = _step8.value;
              i.showMask();
            }
            this.node_scatterLight.active = true;
            this.scheduleOnce(function () {
              for (var _iterator9 = _createForOfIteratorHelperLoose(_this7.aniLines), _step9; !(_step9 = _iterator9()).done;) {
                var i = _step9.value;
                i.hideMask();
              }
            }, 0.9);
            delayTime += 1;
          }
          this._resultIndex++;
          var index = this._resultIndex;
          var nums = SlotMacauProxy.result.OpenNums[index].openNum;
          this.aniLines[6].showNext(nums[6]);
          for (var _i2 = 0; _i2 < this.aniLines.length - 1; _i2++) {
            if (_i2 == this.aniLines.length - 1) ;
            // let arr = [nums[start + 0], nums[start + 1], nums[start + 2], nums[start + 3], nums[start + 4]];
            var arr = nums[_i2].slice();
            arr = arr.reverse();
            var hasMove = this.aniLines[_i2].showNext(arr, delayTime);
            if (hasMove && this._isScatter) {
              delayTime += 0.5;
            }
          }
          SlotMacauDef.palyAudio(SlotMacauDef.audio.END);
          delayTime += 1;
          var end = function end() {
            _this7.hideScatter();
            _this7._lock = false;
            _this7.showResult();
          };
          this.scheduleOnce(function () {
            end();
          }, delayTime);
        };
        _proto.showEnd = function showEnd() {
          this.updateGold();
          this.changeBtnActive(true);
          this._state = RunState.WAIT;
          if (SlotMacauProxy.result.freePrize) {
            if (this._isFree) {
              this.changeState(RunState.FREE_ADD);
              this.showScatter();
            } else {
              // this.changeScene(true);
              this.changeState(RunState.ENTER_FREE);
            }
            return;
          }
          this._freeCount = SlotMacauProxy.result.freeInfo.surplusFreeCount;
          if (this._freeCount == 0) {
            if (this._isFree) {
              // this.changeScene(false);
              this.changeState(RunState.LEAVE_FREE);
              this.changeState(RunState.FREE_WIN);
            }
          }
        };
        _proto.showScatter = function showScatter() {
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.aniLines), _step10; !(_step10 = _iterator10()).done;) {
            var i = _step10.value;
            i.showScatter();
          }
        };
        _proto.hideScatter = function hideScatter() {
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.aniLines), _step11; !(_step11 = _iterator11()).done;) {
            var i = _step11.value;
            i.hideScatter();
          }
          this.node_scatterLight.active = false;
        };
        _proto.showWin = function showWin(fromNormal) {
          var _this8 = this;
          //        // this.spine_winBg.node.active = true;
          //        // this.spine_winBg.setAnimation(0, "intro", false);
          //        // this.spine_winBg.addAnimation(0, "picture", true);
          //        // this.txt_spineWin.string = "" + SlotMacauProxy.result.prizeAmount / SlotMacauProxy.result.openResult.multiples[1];
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
          var num = SlotMacauProxy.result.OpenNums[this._resultIndex].prizeAmount;
          this._totalWin += num;
          if (num > 0) {
            if (this._isFree) {
              var odd = SlotMacauProxy.result.OpenNums[this._resultIndex].odds;
              this.txt_gain.string = Common.numFormat(num / odd);
              this.txt_odd.showAni(function () {
                _this8.txt_gain.string = Common.numFormat(num);
                _this8.txt_odd.showAniWithOdd(odd + 1);
                var name = "normal";
                if (odd >= 60) {
                  name = "bigwin2";
                } else if (odd >= 5) {
                  name = "bigwin";
                }
                _this8.spine_tip.setAnimation(0, name + "_win", false);
                _this8.spine_tip.addAnimation(0, name + "_idle", true);
              });
            } else {
              this.txt_gain.string = Common.numFormat(num);
            }
            this.txt_win.string = Common.numFormat(this._totalWin);
          }
          if (this._resultIndex < SlotMacauProxy.result.OpenNums.length - 1) {
            this.changeState(RunState.SHOW_NEXT);
            return;
          }
          if (SlotMacauProxy.result.prizeAmount / this._bet >= 20) {
            this.scheduleOnce(function () {
              _this8.changeState(RunState.BIG_WIN);
            }, 0.3);
          } else {
            this.changeState(RunState.SHOWGAIN);
          }
        };
        _proto.showWildInfo = function showWildInfo(info) {
          //        // this.txt_freeCount.string = info.FreeCount + "";
          this.txt_freeLeft.string = info.freeInfo.surplusFreeCount + "";
          //        // this.node_menu.active = false;

          this.txt_selectCount.string = SlotMacauProxy.result.freeInfo.totalFreePrizeCount + "";
          this.node_freeLeft.active = true;
          this._isFree = true;
          this.spine_light.setAnimation(0, "free_idle", true);
          this.txt_odd.setOdd(info.freeInfo.odds);
          tween(this.node_buyFreeBtn).to(0.5, {
            position: v3(0, 200)
          }).start();
          this._freeCount = info.freeInfo.surplusFreeCount;
          this.txt_leftTime.string = "" + this._freeCount;
          SlotMacauProxy.freeTotalWin = this._totalWin = info.freeInfo.totalFreePrizeAmount;
          this.txt_winFree.string = Common.numFormat(SlotMacauProxy.freeTotalWin + "");
          this.txt_win.string = Common.numFormat(this._totalWin);
          this.sprite_bg1.spriteFrame = this.frames_bg1[1];
          this.sprite_bg4.spriteFrame = this.frames_bg1[1];
          this.sprite_bg2.spriteFrame = this.frames_bg2[1];
          this.sprite_bg3.spriteFrame = this.frames_bg2[1];
        };
        _proto.setFreeCount = function setFreeCount(count) {
          this._freeCount = count;
          this.txt_freeLeft.string = count + "";
          this.node_free0.active = count == 0;
          this.node_free1.active = count > 0;
        };
        _proto.showLines = function showLines() {
          var prizeIdx = SlotMacauProxy.result.OpenNums[this._resultIndex];
          if (!prizeIdx || prizeIdx.prizeAmount == 0) return false;
          var OpenNums = SlotMacauProxy.result.OpenNums[this._resultIndex].openNum;
          this.hideSpine();
          this.node_spineMask.active = true;
          for (var i = 0; i < OpenNums.length; i++) {
            var lines = OpenNums[i];
            var used = 0;
            for (var j = lines.length - 1; j >= 0; j--) {
              var key = lines[j];
              if (key.remove) {
                var hasSpecial = this.showSpine(i, j, key, used);
                used += hasSpecial;
              }
            }
          }
          SlotMacauDef.palyAudio(SlotMacauDef.audio.WINLINE);
          return true;
        };
        _proto.showSignleLine = function showSignleLine() {};
        _proto.hideLines = function hideLines() {
          this.txt_line.resetWithString("....");
        };
        _proto.onClickMenu = function onClickMenu() {
          //        // this.node_menu.active = !this.node_menu.active;
          //        // this.node_btns.active = !this.node_menu.active;
          //        // this.node_down.active = !this.node_menu.active;
          this.node_menu.active = !this.node_menu.active;
          this.node_btns.active = !this.node_menu.active;
        };
        _proto.onClickBigWin = function onClickBigWin() {
          this.bigWinBgClickIndex++;
          if (this.bigWinBgClickIndex == 1) {
            this.txt_bigwin.reset(SlotMacauProxy.result.prizeAmount);
            this.sp_bigWin.setAnimation(0, this._bigWinAniName + "idle", true);
          } else {
            // this.sp_bigWin.setCompleteListener(null);
            // this.node_bigwin.active = false;
            // this.txt_bigwin.reset();
            this._runTime = 0;
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _this9 = this;
          //        // console.log("onClickStop");
          if (!SlotMacauProxy.result) {
            return;
          }
          if (this._lock) {
            return;
          }
          this._lock = true;
          this._state = RunState.STOP;
          this._runTime = STOP_TIME;
          var nums = SlotMacauProxy.result.OpenNums[0].openNum;
          var scatterCount = 0;
          var scatterTime = 0.0;
          var arr = nums[6].slice();
          arr = arr.reverse();
          this.aniLines[6].showResult(arr);
          this.scheduleOnce(function () {
            _this9.aniLines[6].showResult(arr);
          }, 0.01);
          for (var _iterator12 = _createForOfIteratorHelperLoose(arr), _step12; !(_step12 = _iterator12()).done;) {
            var _i3 = _step12.value;
            if (_i3.num == 12 && _i3.count > 0) {
              scatterCount++;
            }
          }
          var _loop2 = function _loop2(i) {
            var arr = nums[i].slice();
            for (var _iterator13 = _createForOfIteratorHelperLoose(arr), _step13; !(_step13 = _iterator13()).done;) {
              var _i4 = _step13.value;
              if (_i4.num == 12 && _i4.count > 0) {
                scatterCount++;
              }
            }
            if (scatterCount >= 3 && !_this9._isScatter && _this9._runDelay != 0) {
              _this9._isScatter = true;
              _this9.scatterLine = i;
            }
            _this9.scheduleOnce(function () {
              _this9.aniLines[i].showResult(arr);
            }, scatterTime + _this9._runDelay * i);
            if (scatterCount >= 3 && _this9._runDelay != 0) {
              scatterTime += 2;
              // this.aniLines[i].showLight(scatterTime);
              // SlotMacauDef.palyAudio(SlotMacauDef.audio.HEIGHT_LIGHT);
            }
          };

          for (var i = 0; i < this.aniLines.length - 1; i++) {
            _loop2(i);
          }

          // if (this._runDelay == 0) {
          //     SlotMacauDef.palyAudio(SlotMacauDef.audio.QUICK_END);
          // } else {
          //     SlotMacauDef.palyAudio(SlotMacauDef.audio.END);
          // }
          SlotMacauDef.palyAudio(SlotMacauDef.audio.END);
          this._runTime += scatterTime;
          var prizeAmount = SlotMacauProxy.result.prizeAmount;
          SlotMacauProxy.freeTotalWin += this._isFree ? prizeAmount : 0;
          if (scatterTime > 0) {
            SlotMacauDef.palyAudio(SlotMacauDef.audio.HEIGHT_LIGHT_MAIN, function (id) {
              _this9.lightTimeId = id;
            });
          }
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
            this.btn_checkFree.interactable = true;
          } else {
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
            this.txt_betFree.color = Color.WHITE;
            this.txt_goldFree.color = Color.WHITE;
            this.txt_winFree.getComponent(Label).color = Color.WHITE;
            this.btn_checkFree.interactable = false;
          }
          if (b) {
            this.spine_start.setAnimation(0, "idle", true);
          } else {
            this.spine_start.setAnimation(0, "spin", true);
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
            // this.txt_leftTime.string = Math.ceil(this.freeTimeLeft) + "";
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
                  if (SlotMacauProxy.result) {
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
                  // this.sp_bigWin.setAnimation(0, this._bigWinAniName + "end", false);
                  // this.sp_bigWin.setCompleteListener(() => {
                  //     this.sp_bigWin.setCompleteListener(null);
                  //     this.node_bigwin.active = false;
                  //     this.txt_bigwin.reset();

                  //     AudioManager.instance.stopSound(this._bigWinSoundId);
                  //     AudioManager.instance.resumeMusic();
                  //     this.changeState(RunState.SHOWGAIN);
                  // });

                  this.node_bigwin.active = false;
                  this.txt_bigwin.reset();
                  AudioManager.instance.stopSound(this._bigWinSoundId);
                  AudioManager.instance.resumeMusic();
                  this.changeState(RunState.SHOWGAIN);
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
          SlotMacauProxy.freeTotalWin = 0;
        };
        return SlotMacauView;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_add", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_reduce", [_dec6], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec12], {
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
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_gain", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "spine_tip", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "txt_gain", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_gainTitle", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_totalGain", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalGain", [_dec25], {
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
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "prefab_winItem", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftCount", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "prefab_window", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "txt_line", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "btn_auto", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "clickEffect", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_freeBg", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_freeWinBg", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeWin", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeWin", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeLeft", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "node_freeLeft", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeBg", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "txt_odd", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "txt_selectCount", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "spine_freeWinBtn", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "node_freeWinBtn", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "txt_leftTime", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "node_freeAdd", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeAdd", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "node_buyFree", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "txt_buyFree", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "spine_light", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "node_free0", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "node_free1", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "node_buyFreeBtn", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg1", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg4", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg2", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg3", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "frames_bg1", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "frames_bg2", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "btn_checkFree", [_dec65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "node_scatterLight", [_dec66], {
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

System.register("chunks:///_virtual/SlotMacauWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauDef.ts', './SlotMacauWinItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Node, UITransform, Component, SlotMacauDef, SlotMacauWinItem;
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
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      SlotMacauDef = module.SlotMacauDef;
    }, function (module) {
      SlotMacauWinItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "6b302xGpNlFL5i6EHUJklbO", "SlotMacauWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauWindow = exports('default', (_dec = ccclass("SlotMacauWindow"), _dec2 = menu("game/SlotMacau/SlotMacauWindow"), _dec3 = property(sp.SkeletonData), _dec4 = property(sp.SkeletonData), _dec5 = property(sp.SkeletonData), _dec6 = property(sp.SkeletonData), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(SlotMacauWinItem), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauWindow, _Component);
        function SlotMacauWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines3", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines4", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_odds", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_odd", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_wild", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_scatter", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_icon", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor10, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SlotMacauWindow.prototype;
        _proto.showIndex = function showIndex(index) {
          this.node_odd.active = index < 12;
          this.node_wild.active = index >= 13;
          this.node_scatter.active = index == 12;
          var odd = SlotMacauDef.odds[index];
          //        // console.log("odds", odd);
          if (odd) {
            for (var i = 0; i < 4; i++) {
              this.txt_odds[i].string = odd[i] + "";
            }
          }

          //        // this.txt_odd1.string = "" + odd;

          // SlotMacauDef.palyAudio(SlotMacauDef.windowAudio[index]);
        };

        _proto.showInfo = function showInfo(info, position) {
          var count = info.count || 1;
          this.showIndex(info.num);
          this.node.getComponent(UITransform).height = 111 * count + 20;
          var flag = position.x > 0 ? 1 : -1;
          if (info.num > 11) {
            this.node.getComponent(UITransform).width = 500;
            this.node_icon.setPosition(173 * flag, 0);
            this.node_wild.setPosition(-75 * flag, 0);
            this.node_scatter.setPosition(-75 * flag, 0);
            this.node.setPosition(position.x - (120 / 2 - 10 + 123) * flag, position.y);
          } else {
            this.node.getComponent(UITransform).width = 250;
            this.node_icon.setPosition(50 * flag, 0);
            this.node_odd.setPosition(-65 * flag, 0);
            this.node.setPosition(position.x - 50 * flag, position.y);
          }
          this.item.showWindow(info);
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
        };
        return SlotMacauWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spines", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spines2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spines3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spines4", [_dec6], {
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
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_icon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec12], {
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

System.register("chunks:///_virtual/SlotMacauWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SlotMacauProxy.ts', './SlotMacauRunItemBlock.ts', './SlotMacauRunItemTop.ts', './SlotMacauRandItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Node, SpriteFrame, Sprite, UITransform, Tween, tween, v3, Component, SlotMacauProxy, SlotMacauGameEvent, SlotMacauRunItemBlock, SlotMacauRunItemTop, SlotMacauRandItem;
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
      Node = module.Node;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SlotMacauProxy = module.default;
      SlotMacauGameEvent = module.SlotMacauGameEvent;
    }, function (module) {
      SlotMacauRunItemBlock = module.default;
    }, function (module) {
      SlotMacauRunItemTop = module.default;
    }, function (module) {
      SlotMacauRandItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "6cec3tdl8hBZJW7xK7EEE1e", "SlotMacauWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SlotMacauWinItem = exports('default', (_dec = ccclass("SlotMacauWinItem"), _dec2 = menu("game/SlotMacau/SlotMacauWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.SkeletonData), _dec7 = property(sp.SkeletonData), _dec8 = property(sp.SkeletonData), _dec9 = property(sp.SkeletonData), _dec10 = property(Node), _dec11 = property(SlotMacauRunItemBlock), _dec12 = property(SlotMacauRunItemTop), _dec13 = property(SpriteFrame), _dec14 = property(Sprite), _dec15 = property(Node), _dec16 = property(SlotMacauRandItem), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotMacauWinItem, _Component);
        function SlotMacauWinItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spine_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_wildLight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_normal", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spines4", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_parent", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_black", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_top", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_hps", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_hp", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_special", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "randItem", _descriptor14, _assertThisInitialized(_this));
          _this._index = void 0;
          _this._type = void 0;
          _this._count = 1;
          _this._info = void 0;
          _this._isWindow = false;
          return _this;
        }
        var _proto = SlotMacauWinItem.prototype;
        _proto.showResult = function showResult(info, specialNext, bgAni) {
          var _this2 = this;
          if (specialNext === void 0) {
            specialNext = null;
          }
          if (bgAni === void 0) {
            bgAni = true;
          }
          this.sprite_hp.node.active = false;
          this.spine_wildLight.node.active = false;
          this._index = info.num - 1;
          var count = info.count || 1;
          this._info = info;
          this.spine_normal.node.active = true;
          this.node_black.node.active = true;
          if (this._index > 12) {
            this.sprite_hp.node.active = true;
            this.sprite_hp.spriteFrame = this.frame_hps[this._index - 13];
            this._index = 12;
            if (info.count > 1 && info.num > 14) {
              this.spine_wildLight.node.active = true;
              this.spine_wildLight.setAnimation(0, "lv" + info.count, false);
            }
          }
          this.node_parent.setPosition(0, 111 / 2 * (count - 1));
          this.node_black.setInfo(info);
          this.node_top.node.active = true;
          this.node_top.setType(info.type);
          this.node_top.setCount(count);
          this.setParentActive(count > 0);
          this.node_parent.getComponent(UITransform).height = 111 * count;

          // this.spine_normal.skeletonData = this.spines[this._index];
          Tween.stopAllByTarget(this.spine_normal.node);
          if (count > 1) {
            if (count == 2) {
              this.spine_normal.skeletonData = this.spines2[this._index];
            } else if (count == 3 && this.spines3[this._index]) {
              this.spine_normal.skeletonData = this.spines3[this._index];
            } else if (count == 4 && this.spines4[this._index]) {
              this.spine_normal.skeletonData = this.spines4[this._index];
            } else {
              this.spine_normal.skeletonData = this.spines2[this._index];
            }
          } else {
            this.spine_normal.skeletonData = this.spines[this._index];
          }
          var name = "LV" + count + "_win";
          if (bgAni) this.spine_bg.setAnimation(0, name, false);
          this.scheduleOnce(function () {
            _this2.spine_normal.setAnimation(0, "win", false);
          });
          this.node_special.active = false;
          if (specialNext) {
            if (specialNext.num > 13) {
              // specialNext.count = count;
              tween(this.spine_normal.node).delay(0.8).call(function () {
                _this2.showResult(specialNext, null, false);
              }).start();
            } else {
              this.node_special.active = true;
              this.node_special.getComponent(sp.Skeleton).setAnimation(0, "LV" + count + "_change", false);
              // specialNext.count = count;
              this.randItem.setCard(specialNext);
              this.scheduleOnce(function () {
                _this2.node_top.setType(specialNext.type);
              }, 0.5);
            }
          } else {
            // this.node_special.active = false;
            // if (this._index < 13 && !this.sprite_hp.node.active)
            tween(this.spine_normal.node).delay(0.8).call(function () {
              _this2.spine_normal.node.active = false;
              _this2.node_black.node.active = false;
              _this2.sprite_hp.node.active = false;
            }).start();
          }
        };
        _proto.showWindow = function showWindow(info) {
          this.sprite_hp.node.active = false;
          this.spine_wildLight.node.active = false;
          this._index = info.num - 1;
          var count = info.count || 1;
          this._info = info;
          if (this._index > 12) {
            this.sprite_hp.node.active = true;
            this.sprite_hp.spriteFrame = this.frame_hps[this._index - 13];
            this._index = 12;
          }

          // this.node_parent.setPosition(0, (111 / 2) * (count - 1));
          this.node_black.setInfo(info);
          this.node_top.node.active = true;
          this.node_top.setType(info.type);
          this.node_top.setCount(count);
          // this.setParentActive(count > 0);
          this.node_parent.getComponent(UITransform).height = 111 * count;
          this.spine_normal.skeletonData = this.spines[this._index];
          if (count > 1) {
            if (count == 2) {
              this.spine_normal.skeletonData = this.spines2[this._index];
            } else if (count == 3 && this.spines3[this._index]) {
              this.spine_normal.skeletonData = this.spines3[this._index];
            } else if (count == 4 && this.spines4[this._index]) {
              this.spine_normal.skeletonData = this.spines4[this._index];
            } else {
              this.spine_normal.skeletonData = this.spines2[this._index];
            }
          } else {
            this.spine_normal.skeletonData = this.spines[this._index];
          }
          this.spine_normal.setAnimation(0, "win", false);
          this.node_special.active = false;
          this.spine_bg.node.active = false;
          this._isWindow = true;
        };
        _proto.setParentActive = function setParentActive(b) {
          this.node_parent.active = b;
        };
        _proto.onClick = function onClick() {
          if (this._isWindow) return;
          SlotMacauProxy.emit(SlotMacauGameEvent.CLICK_ITEM, {
            info: this._info,
            pos: this.node_parent.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return SlotMacauWinItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spine_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spine_wildLight", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spines2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spines3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spines4", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_parent", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_black", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_top", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "frame_hps", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprite_hp", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_special", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "randItem", [_dec16], {
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
  r('virtual:///prerequisite-imports/SlotMacauGame', 'chunks:///_virtual/SlotMacauGame'); 
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