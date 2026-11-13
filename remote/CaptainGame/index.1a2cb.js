System.register("chunks:///_virtual/CaptainBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts', './CaptainScrollView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Node, Component, GUtil, ConfigManager, DataManager, UserKey, EventManager, ViewManager, Common, CaptainScrollView;
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
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      CaptainScrollView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "56c5cgzTatJC6k5AH6odR8Z", "CaptainBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      var CaptainBase = exports('default', (_dec = ccclass("CaptainBase"), _dec2 = menu("game/Captain/CaptainBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainBase, _Component);
        function CaptainBase() {
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
          //    ////////////////////
          _this._data = void 0;
          return _this;
        }
        var _proto = CaptainBase.prototype;
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;
        };
        _proto.setData = function setData(data) {
          this._data = data;
          //console.log("this._data", this._data);
          this._curIndex_baseScore = data._curBetListIndex;
          this._curIndex_baseRate = data._curBetCount;
          this._curIndex_baseBet = data._curBetListIndex * data.betMaxCount + data._curBetCount;
          this.Label_bet.string = "" + GUtil.numberFormat(data.betList[data._curBetListIndex] * (data._curBetCount + 1) * data.betRate * 1000, 2.0);
          this.scrollView_baseScore.getComponent(CaptainScrollView).setData(data);
          this.scrollView_baseRate.getComponent(CaptainScrollView).setData(data);
          this.scrollView_basePay.getComponent(CaptainScrollView).setData(data);
          this.scrollView_baseBet.getComponent(CaptainScrollView).setData(data);
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {};
        _proto.onSetBase = function onSetBase(type, curIndex) {
          //        // console.log("type", type, curIndex);
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(CaptainScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(CaptainScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(CaptainScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(CaptainScrollView).setNewPos(this._curIndex_baseRate);
                break;
              }
          }
        }
        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "Button_reset":
              {
                this._curIndex_baseBet = 0;
                this._curIndex_baseRate = 0;
                this._curIndex_baseScore = 0;
                this.scrollView_baseScore.getComponent(CaptainScrollView).doReset();
                this.scrollView_baseRate.getComponent(CaptainScrollView).doReset();
                this.scrollView_baseBet.getComponent(CaptainScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBet, this._curIndex_baseScore, this._curIndex_baseRate);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return CaptainBase;
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

System.register("chunks:///_virtual/CaptainCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CaptainRunItem.ts', './CaptainProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, instantiate, v3, UITransform, tween, Component, CaptainRunItem, CaptainProxy, CaptainGameEvent;
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
      CaptainRunItem = module.default;
    }, function (module) {
      CaptainProxy = module.default;
      CaptainGameEvent = module.CaptainGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "59abcVurnJGsZQ/hG70HVLA", "CaptainCardAni", undefined);
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
      var CaptainCardAni = exports('default', (_dec = ccclass("CaptainCardAni"), _dec2 = menu('game/Captain/CaptainCardAni'), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainCardAni, _Component);
        function CaptainCardAni() {
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
          //每一竖五个图片的CaptainRunItem的集合
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
          _this._scatteNum = 0;
          _this._xList = [-294, -147, 0, 147, 294];
          _this.priority = 90;
          return _this;
        }
        var _proto = CaptainCardAni.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.setData = function setData(data) {
          this._index = data.index;
          var startY = 294;
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_card);
            this.node.parent.addChild(node);
            node.setPosition(v3(this._xList[this._index], startY - i * 147));
            var com = node.getComponent(CaptainRunItem);
            this.runningCard.push(com);
          }
          this.node_light.active = false;
          this.node_light.getComponent(UITransform).priority = 8;
          //        /** 初始化数据管理器 */
          this.initEvent();
        };
        _proto.initPos = function initPos() {
          var startY = 294;
          for (var i = 0; i < 5; i++) {
            var index = (this.endIndex + i + 2) % 5;
            this.runningCard[index].node.setPosition(v3(this._xList[this._index], startY - i * 147));
          }
        };
        _proto.initCard = function initCard(card) {
          if (card === void 0) {
            card = null;
          }
          if (card) {
            for (var i = 0; i < this.runningCard.length; i++) {
              var rand = card[i];
              this.runningCard[i].setCard(rand, false, false, true);
              if (this.runningCard[i].node.getComponent(CaptainRunItem)._index == 0 || this.runningCard[i].node.getComponent(CaptainRunItem)._index == 7 || this.runningCard[i].node.getComponent(CaptainRunItem)._index == 8) {
                this.runningCard[i].node.getComponent(UITransform).priority = 100 + i;
              } else {
                this.runningCard[i].node.getComponent(UITransform).priority = 0;
              }
            }
          } else {
            for (var _iterator = _createForOfIteratorHelperLoose(this.runningCard), _step; !(_step = _iterator()).done;) {
              var _i = _step.value;
              this.randCard(_i);
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
            node.setCard(result, true, true);
          } else {
            if (this.next != null) {
              var _result = this.next;
              node.setCard(_result, true, true);
            }
          }
        };
        _proto.getLightStatue = function getLightStatue() {
          return this.node_light.active;
        };
        _proto.showLight = function showLight() {
          //this._lightTime = time;
          this.node_light.active = true;
          //        // this.moveStep = 160;
        }
        //将某一竖的开奖结果赋值给this.result执行CardState.RESULT（调用resultCard方法）
        ;

        _proto.showResult = function showResult(cardValue, reConnect, _scatteNum) {
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
              this.runningCard[index].setCard(cardValue[i], true, true);
            }
          } else {
            this.result = cardValue;
            this.setState(CardState.RESULT);
          }
          this._scatteNum = _scatteNum;
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

          //整体上移
          for (var t = 0; t < this._hideArr.length; t++) {
            var start = this._hideArr[t] + t;
            var count = 3 + start;
            for (var i = 0; i < count; i++) {
              var index = this.endIndex + start - 2;
              if (index < 0) {
                index = 5 + index;
              }
              this.runningCard[index].node.setPosition(v3(this._xList[this._index], this.runningCard[index].node.getPosition().y + this.stepHeight));
              start--;
            }
          }
          for (var _i2 = 0; _i2 < cardValue.length; _i2++) {
            var _index = this.endIndex - _i2;
            if (_index < 0) {
              _index = 5 + _index;
            }
            this.runningCard[_index].setCard(cardValue[_i2], false, true);
          }

          //第二轮
          if (other != null) {
            var _index2 = this.endIndex - 3;
            if (_index2 < 0) {
              _index2 = 5 + _index2;
            }
            this.runningCard[_index2].setCard(other, false, true);
          }
          this.show();
          for (var _i3 = 0; _i3 < 5; _i3++) {
            var node = this.runningCard[_i3].node;
            if (node.getPosition().y != this._startPosArr[_i3]) {
              if (node.getComponent(CaptainRunItem)._index == 0 || node.getComponent(CaptainRunItem)._index == 7 || node.getComponent(CaptainRunItem)._index == 8) {
                node.getComponent(UITransform).priority = this.priority + _i3;
              } else {
                node.getComponent(UITransform).priority = 0;
              }
              tween(node).delay(0.3 - this._index * 0.08).to(0.6, {
                position: v3(node.position.x, this._startPosArr[_i3])
              }, {
                easing: "bounceOut"
              }).start();
            }
          }
          CaptainProxy.emit(CaptainGameEvent.SHOW_SMOKE);
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
          var _this2 = this;
          // 只读 position，避免滚动期间每帧调用 getPosition 创建临时向量。
          switch (this._state) {
            case CardState.DELAY:
              {
                this.delayTime -= dt;
                if (this.delayTime <= 0) {
                  this.setState(CardState.RUN);
                }
                break;
              }
            //每一竖五个图片滚动
            case CardState.RUN:
              {
                var length = this.runningCard.length;
                for (var i = 0; i < length; i++) {
                  var node = this.runningCard[i].node;
                  node.setPosition(this._xList[this._index], node.position.y - this.moveStep);
                  if (node.position.y < -(this.stepHeight + this.moveOut)) {
                    node.setPosition(this._xList[this._index], node.position.y + this.stepHeight * CARDCOUNT);
                    //当某个图片滚动超过页面，重新随机生成且设置初始位置
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
                for (var _i5 = 0; _i5 < _length; _i5++) {
                  var _node = this.runningCard[_i5].node;
                  _node.setPosition(this._xList[this._index], _node.position.y - this.moveStep);
                  if (_node.position.y < -(this.stepHeight + this.moveOut)) {
                    _node.setPosition(this._xList[this._index], _node.position.y + this.stepHeight * CARDCOUNT);
                    this.resultCard(this.runningCard[_i5]);
                    if (this.leftResultCount == 2) {
                      this.endNode = _node;
                      this.endIndex = _i5;
                    }
                  }
                  if (_node == this.endNode && _node.position.y <= -this.stepHeight - 14) {
                    this.setState(CardState.END);
                    this.fixStep = _node.position.y + this.stepHeight + 14;
                  }
                }
                break;
              }
            case CardState.END:
              {
                var _length2 = this.runningCard.length;
                var _loop = function _loop(_i6) {
                  var node = _this2.runningCard[_i6].node;
                  var toY = node.position.y - _this2.fixStep + 12;
                  tween(node).to(0.01, {
                    position: v3(node.position.x, toY)
                  }).call(function () {
                    _this2.node_light.active = false;
                    if (node.getComponent(CaptainRunItem)._index == 0 || node.getComponent(CaptainRunItem)._index == 7 || node.getComponent(CaptainRunItem)._index == 8) {
                      node.getComponent(UITransform).priority = 100 + _i6;
                    } else {
                      node.getComponent(UITransform).priority = 0;
                    }
                    if (_this2._scatteNum >= 2) {
                      CaptainProxy.emit(CaptainGameEvent.SHOW_LIGHT, {
                        index: _this2._index + 1
                      });
                    }
                  }).start();
                };
                for (var _i6 = 0; _i6 < _length2; _i6++) {
                  _loop(_i6);
                }
                this.setState(CardState.NORMAL);
                break;
              }
          }
        };
        return CaptainCardAni;
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
          return 147;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptainDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CaptainProxy.ts', './AudioManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, director, AudioClip, isValid, CaptainProxy, AudioManager;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      AudioClip = module.AudioClip;
      isValid = module.isValid;
    }, function (module) {
      CaptainProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7d82fq9XSRF8Zr3sZej8qLv", "CaptainDef", undefined);
      var CaptainDef = exports('CaptainDef', /*#__PURE__*/function () {
        function CaptainDef() {}
        CaptainDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = CaptainProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
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
        CaptainDef.palyMusic = function palyMusic(name) {
          var bundle = CaptainProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 离场后的旧音频不能覆盖新场景音乐或重新发声。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        CaptainDef.init = function init() {};
        CaptainDef.getRand = function getRand(i) {
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
        CaptainDef.randRusult = function randRusult(amount, add) {
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
        CaptainDef.getMultple = function getMultple() {
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
        CaptainDef.checkPrize = function checkPrize(openNums) {
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
        return CaptainDef;
      }());
      CaptainDef.audio = {
        winStart: "prizeWinStart",
        //消除播放
        bgmMg: "bgm_mg",
        //普通模式背景音乐
        bgmBonus: "bgm_bonus",
        //特殊模式背景音乐
        LevelUp1: 'multiplierLevelUp1',
        //变成下个倍数
        LevelUp2: 'multiplierLevelUp1',
        //变成下下个倍数
        LevelUp3: 'multiplierLevelUp2',
        //变成下下下个倍数
        spinBtn: 'spinBtn',
        //转动按钮最开始播放
        spinReelQuickstop: 'spinReelQuickstop',
        //快速模式落下后播放
        symbolWild: 'symbolWild',
        //界面Wild播放动画声音
        symbolScatter: 'symbolScatter',
        //界面Scatter播放动画声音
        voxMgSmall01: 'voxMgSmall01',
        //角色打动木轮发声播放 x1->x2
        voxMgSmall02: 'voxMgSmall02',
        //角色打动木轮发声播放 x2->x3
        voxMgBig01: 'voxMgBig01',
        //角色打动木轮发声播放 x3->x5
        voxMgBig02: 'voxMgBig01',
        //角色打动木轮发声播放 x5
        voxBonusSmall01: 'voxBonusSmall01',
        //角色打动木轮发声播放 x3->6
        voxBonusSmall02: 'voxBonusSmall02',
        //角色打动木轮发声播放 x6->x9
        voxBonusBig01: 'voxBonusBig01',
        //角色打动木轮发声播放 x9->x15
        voxBonusBig02: 'voxBonusBig02',
        //角色打动木轮发声播放 x15
        woodenWheel: 'woodenWheel',
        //木轮转动声
        prizeWinMultiply: 'prizeWinMultiply',
        //倍数和中奖金额相乘播放
        prizeTotalWin: 'prizeTotalWin',
        //变成这个总金额播放
        prizeWinStart: 'prizeWinStart',
        //中奖声5倍以下
        prizeMediumWinCounting: 'prizeMediumWinCounting',
        //总奖声5倍以上声
        prizeMediumWinCountingEnd: 'prizeMediumWinCountingEnd',
        //总奖声5倍以上结束声
        fsStart: 'fsStart',
        //转盘出现scatter的旋转光效
        fsNoWin: 'fsNoWin',
        //旋转光效没进入成功
        freespinWon: 'freespinWon',
        //Scatter确定3个以上落好播放
        fsGet: 'fsGet',
        //光期待的时候播放
        symbolFallSingleA: 'symbolFallSingleA',
        //期待的时候符号按顺序落下
        symbolFallSingleB: 'symbolFallSingleB',
        //期待的时候符号按顺序落下
        symbolFallSingleC: 'symbolFallSingleC',
        //期待的时候符号按顺序落下
        transEnterBonus: 'transEnterBonus',
        //进入免费模式开始页面
        freespinStartBtn: 'freespinStartBtn',
        //免费模式开始页面点击按钮
        freespinWheelPowerUp: 'freespinWheelPowerUp',
        //免费模式进入游戏初始化转盘转动
        freespinRemaining: 'freespinRemaining',
        //免费模式剩余次数变化
        bgmBigwin: 'bgm_bigwin',
        //中大奖动画
        bgmBigwinEnd: 'bgm_bigwin_end',
        //中大奖结束动画
        bgmTotalwin: 'bgm_totalwin',
        //特殊模式总奖播放
        bgmTotalwinEnd: 'bgm_totalwin_end' //特殊模式总奖结束播放
        //payoutClick:'payoutClick'
      };

      CaptainDef.tryGold = 100000000;
      CaptainDef.odds = {
        0: [50, 250, 2500],
        1: [20, 100, 1000],
        2: [15, 50, 500],
        3: [10, 25, 200],
        4: [5, 20, 100],
        5: [4, 15, 75],
        6: [3, 10, 50]
      };
      CaptainDef.rates = [[8, 8, 8, 8, 8, 8, 8, 44], [8, 8, 8, 8, 8, 8, 8, 44], [300, 120, 75, 60, 50, 40, 30, 24]];
      CaptainDef.oddsType = {
        normal: [1, 2, 3, 5],
        free: [3, 6, 9, 15]
      };
      CaptainDef.lines = [[5, 6, 7, 8, 9], [0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [0, 6, 12, 8, 4], [10, 6, 2, 8, 14], [0, 1, 7, 3, 4], [10, 11, 7, 13, 14], [5, 11, 12, 13, 9], [5, 1, 2, 3, 9], [0, 6, 7, 8, 4], [10, 6, 7, 8, 14], [5, 6, 2, 8, 9], [5, 6, 12, 8, 9], [5, 1, 7, 3, 9], [5, 11, 7, 13, 9], [0, 6, 2, 8, 4], [10, 6, 12, 8, 14], [0, 1, 7, 13, 14], [10, 11, 7, 3, 4], [0, 11, 2, 13, 4]];
      CaptainDef.cardlines = [[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6, 7, 8]];
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptainGame", ['./CaptainBase.ts', './CaptainCardAni.ts', './CaptainDef.ts', './CaptainProxy.ts', './CaptainRunItem.ts', './CaptainScene.ts', './CaptainView.ts', './CaptainWinItem.ts', './CaptainWindow.ts', './CaptainScrollView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/CaptainProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "6935arpMcxL1bI3SEc7OSsh", "CaptainProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var CaptainGameEvent = exports('CaptainGameEvent', /*#__PURE__*/function (CaptainGameEvent) {
        CaptainGameEvent["ENTER_ROOM"] = "enterRoom";
        CaptainGameEvent["LEAVE_ROOM"] = "leaveRoom";
        CaptainGameEvent["UPDATE_CONFIG"] = "updateConfig";
        CaptainGameEvent["UPDATE_BETLIST"] = "updateBetList";
        CaptainGameEvent["CLOSE_BONUS"] = "closeBonus";
        CaptainGameEvent["SELECT_BET"] = "selectBet";
        CaptainGameEvent["START"] = "start";
        CaptainGameEvent["CLICK_ITEM"] = "clickItem";
        CaptainGameEvent["ERROR"] = "errorReturn";
        CaptainGameEvent["SHOW_LIGHT"] = "showLight";
        CaptainGameEvent["SHOW_SMOKE"] = "showSmoke";
        return CaptainGameEvent;
      }({}));
      var CaptainProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(CaptainProxyMgr, _ProxyBase);
        function CaptainProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "CaptainGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotCaptain.bet, MainManager.instance.getConfigManager().ProtocolSlotCaptain.info];
          _this.result = null;
          _this.betList = [0.1, 1, 5];
          _this.betMaxCount = 10;
          _this.betRate = 20;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          _this.testNo = 0;
          return _this;
        }
        var _proto = CaptainProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(CaptainGameEvent.SELECT_BET);
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
            MainManager.instance.getEventManager().on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            MainManager.instance.getEventManager().off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolSlotCaptain.bet) {
              this.emit(CaptainGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotCaptain.info:
              {
                //data.Data.FreeInfo.Count = 10
                this.emit(CaptainGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotCaptain.bet:
              {
                // if (this.testNo == 4) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 3,
                //             Multiple: 1,
                //             TotalCount: 0,
                //             TotalPrizeAmount: 10650,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //             RewardLines: { 5: 3, 12: 3, 17: 4 },
                //             RewardMoney: 400,
                //             RewardPos: [0, 6, 12]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                //     this.testNo -= 1
                // } else if (this.testNo == 2 || this.testNo == 3) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: this.testNo,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // } else {
                //     this.testNo -= 1
                //     this.result = {
                //         FreeInfo: {
                //             Count: this.testNo,
                //             Multiple: 1,
                //             TotalCount: 0,
                //             TotalPrizeAmount: 10650,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //             RewardLines: { 5: 3, 12: 3, 17: 4 },
                //             RewardMoney: 400,
                //             RewardPos: [0, 6, 12],
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }

                //大奖
                // this.result = {
                //     FreeInfo: {
                //         Count: 1,
                //         Multiple: 1,
                //         TotalCount: 0,
                //         TotalPrizeAmount: 10650,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
                //         RewardLines: { 5: 3, 12: 3, 17: 4 },
                //         RewardMoney: 45000,
                //         RewardPos: [0, 6, 12]
                //     }, {
                //         ExtraOdd: 1,
                //         PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                // this.result = {
                //     FreeInfo: {
                //         Count: 0,
                //         Multiple: 1,
                //         TotalCount: 0,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [3, 1, 2, 4, 5, 7, 1, 5, 7, 4, 3, 1, 1, 2, 3],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                //进入免费模式
                // if (this.testNo == 0) {
                //     // this.result = {
                //     //     FreeInfo: {
                //     //         Count: 2,
                //     //         Multiple: 1,
                //     //         TotalCount: 0,
                //     //     },
                //     //     Res: [{
                //     //         ExtraOdd: 1,
                //     //         PosMsg: [4, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //     //         RewardLines: { 5: 3 },
                //     //         RewardMoney: 300,
                //     //         RewardPos: [0]
                //     //     }, {
                //     //         ExtraOdd: 1,
                //     //         PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //     //         RewardLines: null,
                //     //         RewardMoney: 0,
                //     //         RewardPos: null
                //     //     },]
                //     // }

                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }

                //     this.testNo = 1
                // }
                // else if (this.testNo == 1) {
                //     this.testNo = 2
                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [9, 3, 3, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }
                // else {
                //     this.result = data.Data;
                // }

                this.result = data.Data;

                // if (this.testNo == 0) {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 2,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [7, 1, 1, 1, 3, 6, 6, 7, 9, 3, 5, 7, 6, 5, 9],
                //             RewardLines: { 12: 3 },
                //             RewardMoney: 1500,
                //             RewardPos: [12, 5, 6]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [3, 1, 2, 1, 3, 7, 1, 1, 9, 3, 5, 7, 7, 5, 9],
                //             RewardLines: { 7: 3 },
                //             RewardMoney: 600,
                //             RewardPos: [5, 11, 12]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [6, 6, 6, 1, 3, 3, 1, 2, 9, 3, 5, 1, 1, 5, 9],
                //             RewardLines: { 1: 3 },
                //             RewardMoney: 1200,
                //             RewardPos: [1, 2, 0]
                //         }, {
                //             ExtraOdd: 1,
                //             PosMsg: [7, 4, 9, 1, 3, 3, 1, 2, 9, 3, 5, 1, 1, 5, 9],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         }]
                //     }
                //     this.testNo = 1
                // } else {
                //     this.result = {
                //         FreeInfo: {
                //             Count: 0,
                //             Multiple: 1,
                //             TotalCount: 0,
                //         },
                //         Res: [{
                //             ExtraOdd: 1,
                //             PosMsg: [3, 1, 2, 4, 5, 7, 1, 5, 7, 4, 3, 1, 1, 2, 3],
                //             RewardLines: null,
                //             RewardMoney: 0,
                //             RewardPos: null
                //         },]
                //     }
                // }

                //层级有问题
                // this.result = {
                //     FreeInfo: {
                //         Count: 0,
                //         Multiple: 1,
                //         TotalCount: 0,
                //     },
                //     Res: [{
                //         ExtraOdd: 1,
                //         PosMsg: [9, 2, 1, 7, 4, 5, 5, 5, 4, 4, 7, 3, 1, 1, 6],
                //         RewardLines: { 15: 3, 19: 3 },
                //         RewardMoney: 500,
                //         RewardPos: [5, 6, 7]
                //     }, {
                //         ExtraOdd: 1,
                //         PosMsg: [7, 6, 8, 7, 4, 9, 2, 1, 4, 4, 7, 3, 1, 1, 6],
                //         RewardLines: null,
                //         RewardMoney: 0,
                //         RewardPos: null
                //     },]
                // }

                this.result.prizeAmount = 0;
                //count--
                for (var _iterator3 = _createForOfIteratorHelperLoose(this.result.Res), _step3; !(_step3 = _iterator3()).done;) {
                  var item = _step3.value;
                  this.result.prizeAmount += item.RewardMoney;
                }
                this.emit(CaptainGameEvent.START);
              }
          }
        };
        _createClass(CaptainProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return CaptainProxyMgr;
      }(ProxyBase);
      var CaptainProxy = exports('default', new CaptainProxyMgr("CaptainProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptainRunItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CaptainDef.ts', './CaptainProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Node, SpriteFrame, Sprite, UITransform, v3, Component, CaptainDef, CaptainProxy, CaptainGameEvent;
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
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      CaptainDef = module.CaptainDef;
    }, function (module) {
      CaptainProxy = module.default;
      CaptainGameEvent = module.CaptainGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "31933N29KFONaN1/ooddCPx", "CaptainRunItem", undefined);
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
      /*
      CAPTAIN BonusSymbol = 1
      BACKSIDE BonusSymbol = 2
      COMPASS BonusSymbol = 3
      POTION BonusSymbol = 4
      A BonusSymbol = 5
      K BonusSymbol = 6
      Q BonusSymbol = 7
      WILD BonusSymbol = 8
      SCATTER BonusSymbol = 9
      */
      var CaptainRunItem = exports('default', (_dec = ccclass("CaptainRunItem"), _dec2 = menu('game/Captain/CaptainRunItem'), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(Node), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainRunItem, _Component);
        function CaptainRunItem() {
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
        var _proto = CaptainRunItem.prototype;
        _proto.onLoad = function onLoad() {
          this.node_wild.node.active = false;
          this.node_scatter.node.active = false;
          this.node_normal.active = true;
        };
        _proto.setCard = function setCard(index, end, isNew, init) {
          var _this2 = this;
          if (end === void 0) {
            end = true;
          }
          this._index = index;
          if (index == 7) {
            this.node_wild.node.active = true;
            this.node_normal.active = false;
            this.node_scatter.node.active = false;
            this.scheduleOnce(function () {
              if (end) {
                CaptainDef.palyAudio(CaptainDef.audio.symbolWild);
                _this2.node_wild.setAnimation(0, 'spawn', false);
                _this2.node_wild.setCompleteListener(function () {
                  _this2.node_wild.setCompleteListener(null);
                  _this2.node_wild.setAnimation(0, 'idle', true);
                });
              }
            }, 0.05);
          } else if (index == 8) {
            this.node_wild.node.active = false;
            this.node_normal.active = false;
            this.node_scatter.node.active = true;
            this.node_scatter.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
            this.scheduleOnce(function () {
              if (end) {
                CaptainDef.palyAudio(CaptainDef.audio.symbolScatter);
                _this2.node_scatter.setAnimation(0, 'spawn', false);
                _this2.node_scatter.setCompleteListener(function () {
                  _this2.node_scatter.setCompleteListener(null);
                  _this2.node_scatter.setAnimation(0, 'idle', true);
                });
              }
            }, 0.05);
          } else {
            this.node_wild.node.active = false;
            this.node_normal.active = true;
            this.node_scatter.node.active = false;
            this.node_normal.getComponent(Sprite).spriteFrame = this.frame_normal[index];
          }
        };
        _proto.randCard = function randCard() {
          var rand = Math.floor(Math.random() * 9);
          if (rand == 7) rand = 1;
          this.setCard(rand, false);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showScatter = function showScatter() {
          var _this3 = this;
          if (this._index == 8) {
            this.node_scatter.setAnimation(0, 'win', false);
            this.node_scatter.setCompleteListener(function () {
              _this3.node_scatter.setCompleteListener(null);
              _this3.node_scatter.setAnimation(0, 'idle', true);
            });
          }
        };
        _proto.onClick = function onClick() {
          CaptainProxy.emit(CaptainGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return CaptainRunItem;
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

System.register("chunks:///_virtual/CaptainScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './ViewManager.ts', './MainManager.ts', './CaptainProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, Common, ViewManager, MainManager, CaptainProxy;
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
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      CaptainProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6abe0QB0kdL6LrU69ipA83X", "CaptainScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var CaptainScene = exports('default', (_dec = ccclass("CaptainScene"), _dec2 = menu("game/Captain/CaptainScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainScene, _Component);
        function CaptainScene() {
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
        var _proto = CaptainScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          //cc.assetManager.loadBundle('CaptainGame', () => {
          var node = instantiate(this.pre_room);
          this.node.addChild(node);
          if (!sys.isMobile) {
            node.setScale(v3(750 / 1334, 750 / 1334, 1));
          } else {
            node.angle = 90;
          }
          //})
        };

        _proto.init = function init() {
          // FortuneElephantDef.palyMusic(FortuneElephantDef.audio.BG);
        };
        _proto.reset = function reset() {};
        _proto.gameShow = function gameShow() {
          Common.closeWait();
          this.init();
          // if (NetManager.instance.netState) {
          //     NetManager.instance.waitServiceSendData();
          // }
        };

        _proto.disConnect = function disConnect() {
          // Common.showWait();
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.onEnable = function onEnable() {
          CaptainProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          // NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };

        _proto.onDisable = function onDisable() {
          CaptainProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return CaptainScene;
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

System.register("chunks:///_virtual/CaptainScrollView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GUtil.ts', './ConfigManager.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Node, instantiate, Label, ScrollView, Component, UITransform, v3, UIOpacity, GUtil, ConfigManager, EventManager;
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
      instantiate = module.instantiate;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Component = module.Component;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "9e1eaWBko5JVb1kCowWcjAC", "CaptainScrollView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      var CaptainScrollView = exports('default', (_dec = ccclass("CaptainScrollView"), _dec2 = property({
        type: eAutoRateType
      }), _dec3 = property(), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(CaptainScrollView, _cc$Component);
        function CaptainScrollView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemCounts", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "item", _descriptor3, _assertThisInitialized(_this));
          _this._ScrollViewView = null;
          _this._curIndex = 0;
          _this._maxIndex = 0;
          _this._hTouch = null;
          _this._isLongTouch = false;
          _this._data = void 0;
          _this.isSetNew = false;
          return _this;
        }
        var _proto = CaptainScrollView.prototype;
        //    // protected onEnable(): void {}
        _proto.onDisable = function onDisable() {
          this.unscheduleAllCallbacks();
          if (this._hTouch) {
            clearTimeout(this._hTouch);
          }
        };
        _proto.setData = function setData(data) {
          var _this2 = this;
          this._data = data;
          // setData 会重复调用，只解除本组件的旧监听，避免一次滚动触发多次下注参数更新。
          this._ScrollViewView.node.targetOff(this);

          //        //init
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex = data._curBetListIndex;
                this.itemCounts = data.betList.length;
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex = data._curBetCount;
                this.itemCounts = data.betMaxCount;
                break;
              }
            case eAutoRateType.basePay:
              {
                this._curIndex = 0;
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex = data._curBetListIndex * data.betMaxCount + data._curBetCount;
                this.itemCounts = data.betMaxCount * data.betList.length;
                break;
              }
          }
          this._maxIndex = Math.max(0, this.itemCounts - 1);
          for (var i = this.itemCounts; i < this._ScrollViewView.content.children.length; i++) {
            this._ScrollViewView.content.children[i].active = false;
          }
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
              if (!itemNode.active) continue;
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
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBase, _this2.type, _this2._curIndex);
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
        _proto.onLoad = function onLoad() {
          this._ScrollViewView = this.node.getComponent(ScrollView);
        };
        _proto.start = function start() {
          var _this3 = this;
          // 初始定位跟随组件调度；单档位时使用零偏移，不能除以零。
          //        //滚动到指定位置
          this.scheduleOnce(function () {
            if (_this3._ScrollViewView) {
              _this3._ScrollViewView.scrollToPercentVertical(_this3._maxIndex > 0 ? (_this3._maxIndex - _this3._curIndex) / _this3._maxIndex : 0, 0.0001);
            }
          }, 0.3);
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
            _this4._ScrollViewView.scrollToPercentVertical(_this4._maxIndex > 0 ? (_this4._maxIndex - _this4._curIndex) / _this4._maxIndex : 0, 0.1);
          }, delay);
        };
        _proto.setNewPos = function setNewPos(_curIndex) {
          if (this._curIndex != _curIndex) {
            this._curIndex = _curIndex;
            this.isSetNew = true;
            this._ScrollViewView.scrollToPercentVertical(this._maxIndex > 0 ? (this._maxIndex - this._curIndex) / this._maxIndex : 0, 0.1);
          }
        };
        _proto.doReset = function doReset() {
          this._curIndex = 0;
          this._ScrollViewView.scrollToPercentVertical(this._maxIndex > 0 ? (this._maxIndex - this._curIndex) / this._maxIndex : 0, 0.0001);
        };
        _proto.getDefaultValue = function getDefaultValue(index) {
          switch (this.type) {
            case eAutoRateType.baseScore:
              {
                //                // let num = index == 0 ? 1 : index * 10;
                var num = this._data.betList[index];
                var strNum = GUtil.numberFormat(num, 2);
                return strNum + "K";
              }
            case eAutoRateType.baseRate:
              {
                return "" + (index + 1);
              }
            case eAutoRateType.basePay:
              {
                return "" + (index + 1) * this._data.betRate;
              }
            case eAutoRateType.baseBet:
              {
                var _num = Math.floor(index / this._data.betMaxCount);
                var baseScore = this._data.betList[_num];
                var baseRate = index % this._data.betMaxCount;
                var _strNum = GUtil.numberFormat(baseScore * (baseRate + 1) * this._data.betRate, 2);

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
                var num = this._data.betList[index];
                return num;
              }
            case eAutoRateType.baseRate:
              {
                return index + 1;
              }
            case eAutoRateType.basePay:
              {
                return (index + 1) * this._data.betRate;
              }
            case eAutoRateType.baseBet:
              {
                var _num2 = Math.floor(index / this._data.betMaxCount);
                var baseScore = this._data.betList[_num2];
                var baseRate = index % this._data.betMaxCount;
                return baseScore * (baseRate + 1) * this._data.betRate;
              }
          }
        };
        return CaptainScrollView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return eAutoRateType.baseScore;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemCounts", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CaptainView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ViewManager.ts', './ScrollNumLabel.ts', './DataManager.ts', './CaptainProxy.ts', './ProxyMgr.ts', './MainManager.ts', './FortuneSetBase.ts', './FortuneHistory.ts', './FortuneRank.ts', './FortuneSetAuto.ts', './NetManager.ts', './CaptainWindow.ts', './CaptainCardAni.ts', './CaptainWinItem.ts', './CaptainDef.ts', './LineSprite.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Prefab, sp, Label, SpriteFrame, v3, tween, instantiate, Sprite, UIOpacity, sys, Tween, UITransform, color, Color, Component, i18n, Common, ViewManager, ScrollNumLabel, DataManager, UserKey, CaptainProxy, CaptainGameEvent, ProxyMgr, MainManager, FortuneSetBase, FortuneHistory, FortuneRank, FortuneSetAuto, NetManager, CaptainWindow, CaptainCardAni, CaptainWinItem, CaptainDef, LineSprite, AudioManager;
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
      Node = module.Node;
      Prefab = module.Prefab;
      sp = module.sp;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      sys = module.sys;
      Tween = module.Tween;
      UITransform = module.UITransform;
      color = module.color;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      CaptainProxy = module.default;
      CaptainGameEvent = module.CaptainGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      FortuneSetBase = module.default;
    }, function (module) {
      FortuneHistory = module.default;
    }, function (module) {
      FortuneRank = module.default;
    }, function (module) {
      FortuneSetAuto = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      CaptainWindow = module.default;
    }, function (module) {
      CaptainCardAni = module.default;
    }, function (module) {
      CaptainWinItem = module.default;
    }, function (module) {
      CaptainDef = module.CaptainDef;
    }, function (module) {
      LineSprite = module.LineSprite;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52;
      cclegacy._RF.push({}, "73164qaqJZLgqKBgnKDOyqy", "CaptainView", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
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
        SHOWGAIN: 6,
        WAIT: 7,
        FREE_WIN: 8,
        SHOW_NEXT: 9,
        FREE_ADD: 10
      }; //10
      var RUN_TIME = 0.5;
      var STOP_TIME = 0.5;
      var AWARD_TIME = 1;
      var BIG_WIN_TIME1 = 8;
      var BIG_WIN_TIME2 = 10;
      var BIG_WIN_TIME3 = 12;
      var LINE_TIME = 2;
      var WAIT_TIME = 1;
      var GAIN_TIME = 1.5;
      var FREE_TIME = 12;
      var FREE_WIN_TIME = 5;
      var CaptainView = exports('CaptainView', (_dec = ccclass("CaptainView"), _dec2 = menu("game/Captain/CaptainView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(sp.Skeleton), _dec7 = property(Node), _dec8 = property(sp.Skeleton), _dec9 = property(Label), _dec10 = property(ScrollNumLabel), _dec11 = property(Label), _dec12 = property(SpriteFrame), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(ScrollNumLabel), _dec19 = property(Label), _dec20 = property(sp.Skeleton), _dec21 = property(SpriteFrame), _dec22 = property(Node), _dec23 = property(Prefab), _dec24 = property(Node), _dec25 = property(CaptainCardAni), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(sp.Skeleton), _dec29 = property(sp.Skeleton), _dec30 = property(sp.Skeleton), _dec31 = property(Label), _dec32 = property(sp.Skeleton), _dec33 = property(Node), _dec34 = property(sp.Skeleton), _dec35 = property(ScrollNumLabel), _dec36 = property(Node), _dec37 = property(sp.Skeleton), _dec38 = property(Label), _dec39 = property(Node), _dec40 = property(sp.Skeleton), _dec41 = property(ScrollNumLabel), _dec42 = property(Node), _dec43 = property(Node), _dec44 = property(sp.Skeleton), _dec45 = property(ScrollNumLabel), _dec46 = property(Label), _dec47 = property(ScrollNumLabel), _dec48 = property(Label), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(sp.Skeleton), _dec52 = property(Node), _dec53 = property(Label), _dec54 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainView, _Component);
        function CaptainView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "normal_btnBox", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "more_btnBox", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_winItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "captain", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "ruber", _descriptor5, _assertThisInitialized(_this));
          //倍数转盘父节点
          _initializerDefineProperty(_this, "ruberBg", _descriptor6, _assertThisInitialized(_this));
          //倍数转盘背景动画
          _initializerDefineProperty(_this, "txt_bet", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_frames", _descriptor10, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_content", _descriptor11, _assertThisInitialized(_this));
          //公告位置父节点
          _initializerDefineProperty(_this, "notice_title", _descriptor12, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_gain_one", _descriptor13, _assertThisInitialized(_this));
          //公告中奖金额父节点
          _initializerDefineProperty(_this, "notice_gain_one_txt", _descriptor14, _assertThisInitialized(_this));
          //公告中奖金额
          _initializerDefineProperty(_this, "notice_gain_all", _descriptor15, _assertThisInitialized(_this));
          //公告中奖金额父节点
          _initializerDefineProperty(_this, "notice_gain_all_txt", _descriptor16, _assertThisInitialized(_this));
          //公告中奖金额
          _initializerDefineProperty(_this, "notice_txt_odds", _descriptor17, _assertThisInitialized(_this));
          //中奖倍数
          _initializerDefineProperty(_this, "notice_bg", _descriptor18, _assertThisInitialized(_this));
          //公告背景效果
          _initializerDefineProperty(_this, "turn_bg_list", _descriptor19, _assertThisInitialized(_this));
          //转盘背景集合
          _initializerDefineProperty(_this, "turn_bg", _descriptor20, _assertThisInitialized(_this));
          //转盘背景
          _initializerDefineProperty(_this, "turn_prefab_window", _descriptor21, _assertThisInitialized(_this));
          //介绍图
          _initializerDefineProperty(_this, "turn_node_line", _descriptor22, _assertThisInitialized(_this));
          //中奖线父节点
          _initializerDefineProperty(_this, "turn_aniLines", _descriptor23, _assertThisInitialized(_this));
          //转盘每一竖
          _initializerDefineProperty(_this, "turn_node_spineParent", _descriptor24, _assertThisInitialized(_this));
          //转盘每一格父节点集合
          _initializerDefineProperty(_this, "turn_node_spineMask", _descriptor25, _assertThisInitialized(_this));
          //转盘遮罩层
          _initializerDefineProperty(_this, "turn_spine_start", _descriptor26, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_spine_smokes", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_spine_smokes1", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor29, _assertThisInitialized(_this));
          //自动模式剩余次数
          _initializerDefineProperty(_this, "turn_bottomIntro", _descriptor30, _assertThisInitialized(_this));
          //中奖效果
          _initializerDefineProperty(_this, "bigwin_bg", _descriptor31, _assertThisInitialized(_this));
          // 大奖背景
          _initializerDefineProperty(_this, "bigwin_sp", _descriptor32, _assertThisInitialized(_this));
          //大奖动画
          _initializerDefineProperty(_this, "bigwin_txt", _descriptor33, _assertThisInitialized(_this));
          //大奖金额
          _initializerDefineProperty(_this, "free_start", _descriptor34, _assertThisInitialized(_this));
          //免费模式加载页
          _initializerDefineProperty(_this, "free_start_intro", _descriptor35, _assertThisInitialized(_this));
          //免费模式效果页面
          _initializerDefineProperty(_this, "free_start_time", _descriptor36, _assertThisInitialized(_this));
          //免费模式次数
          _initializerDefineProperty(_this, "free_win", _descriptor37, _assertThisInitialized(_this));
          //免费模式赢得总金额页面
          _initializerDefineProperty(_this, "free_win_intro", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_winTxt", _descriptor39, _assertThisInitialized(_this));
          //免费模式赢得金额
          _initializerDefineProperty(_this, "free_winBtn", _descriptor40, _assertThisInitialized(_this));
          //免费模式赢得金额返回按钮
          _initializerDefineProperty(_this, "free_bottom", _descriptor41, _assertThisInitialized(_this));
          //免费模式底部
          _initializerDefineProperty(_this, "free_bottom_introl", _descriptor42, _assertThisInitialized(_this));
          //免费模式按钮效果
          _initializerDefineProperty(_this, "free_bottom_time", _descriptor43, _assertThisInitialized(_this));
          //免费模式底部次数
          _initializerDefineProperty(_this, "txt_betFree", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_bg", _descriptor47, _assertThisInitialized(_this));
          //免费模式背景
          _initializerDefineProperty(_this, "free_bg1", _descriptor48, _assertThisInitialized(_this));
          //免费模式背景
          _initializerDefineProperty(_this, "free_captain", _descriptor49, _assertThisInitialized(_this));
          //免费模式下船长
          _initializerDefineProperty(_this, "free_add", _descriptor50, _assertThisInitialized(_this));
          //免费模式增加免费次数背景
          _initializerDefineProperty(_this, "free_add_time", _descriptor51, _assertThisInitialized(_this));
          //免费模式增加免费次数
          _initializerDefineProperty(_this, "spine_quick", _descriptor52, _assertThisInitialized(_this));
          //-----
          _this._runDelay = 0.1;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._isMinBet = true;
          _this._bet = 2000;
          _this._auto = false;
          _this._autoTimes = 0;
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._window = void 0;
          //bigWinBgClickIndex = 0;
          _this._isFree = false;
          _this.freeLock = false;
          _this.freeTimeLeft = 0;
          //免费倒计时
          _this._resultIndex = 0;
          _this._freeCount = 0;
          _this._oddType = 20;
          _this._odds = void 0;
          _this._hasChangeSpeed = false;
          //进入免费模式只能是普通速度，免费模式完成后，恢复之前速度模式
          _this._scatteNum = 0;
          _this._isFromAutoToFree = false;
          _this._audioId = 0;
          _this._isEndBigWin = false;
          return _this;
        }
        var _proto = CaptainView.prototype;
        // 是否提前结束大奖背景
        _proto.start = function start() {
          var _this2 = this;
          this._init();
          this.updateGoldData();
          this.updateSetData();
          this.initEvent();
          this.checkDownOrUpBet();

          //点击页面任何地方隐藏介绍图
          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2.clickHideWindow();
          });

          //关闭大奖页面
          this.bigwin_bg.on(Node.EventType.TOUCH_END, function () {
            if (!_this2._isEndBigWin) {
              AudioManager.instance.stopSound(_this2._audioId);
              _this2.bigwin_txt.reset(CaptainProxy.result.prizeAmount);
              _this2._runTime = 8;
              CaptainDef.palyAudio(CaptainDef.audio.bgmBigwinEnd);
              _this2._isEndBigWin = true;
            } else {
              _this2.hideBigWin();
            }
          });

          //免费结算页面
          this.free_win.on(Node.EventType.TOUCH_END, function () {
            if (!_this2.free_winBtn.active) {
              _this2.free_winTxt.reset(CaptainProxy.freeTotalWin);
              _this2.free_winBtn.setScale(v3(0.2, 0.2, 1));
              _this2.free_winBtn.active = true;
              tween(_this2.free_winBtn).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
            }
          });

          // this.scheduleOnce(() => {
          //     this.changeScene(true, 1)
          // }, 3)
        };

        _proto.checkReady = function checkReady() {
          if (this._state != RunState.NORMAL && this._state != RunState.WAIT && this._state != RunState.AWARD_LINES) return false;
          return true;
        };
        _proto._init = function _init() {
          this.normal_btnBox.active = true;
          this.more_btnBox.active = false;
          this.turn_bottomIntro.node.active = false;
          var children = this.turn_node_line.children;
          for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          var node = instantiate(this.turn_prefab_window);
          this.node.addChild(node);
          this._window = node.getComponent(CaptainWindow);
          node.active = false;

          //接口
          //this.updateInfo(null)
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotCaptain.info, {});
        };
        _proto.update = function update(dt) {
          if (this.freeLock) {
            this.freeTimeLeft -= dt;
            if (this.freeTimeLeft <= 0 && !this.free_win.active) {
              //从免费模式首页进入到游戏
              this.onClickEnterFreeScreen();
            } else if (this.freeTimeLeft <= 0 && this.free_win.active) {
              //从免费模式结束页进入到普通模式
              CaptainProxy.freeTotalWin = 0;
              this.checkDownOrUpBet();
              this.changeScene(false, 0, true);
            }
          }
          this.updateNotice(dt);
          switch (this._state) {
            case RunState.START:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  if (CaptainProxy.result) {
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
                //update RunState.START判断中this.changeState(RunState.STOP)不会执行到下面if中
                //因为在不到_runTime的时间内 checkAward会将状态转变成 AWARD 或者 WAIT
                if (this._runTime <= 0) {
                  this.changeState(RunState.NORMAL);
                }
                break;
              }
            case RunState.AWARD:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  this.updateGoldData();
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
                  AudioManager.instance.stopAllEffect();
                  this.bigwin_bg.active = false;
                  this._isEndBigWin = false;
                  this.bigwin_txt.reset();
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
                if (this._auto && !this._isFree && CaptainProxy.result && CaptainProxy.result.FreeInfo.Count > 0 && !this._isFromAutoToFree) {
                  this._isFromAutoToFree = true;
                  this.changeState(RunState.WAIT);
                } else if (this._auto || this._isFree) {
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

            // case RunState.FREE_WIN: {
            //     this._runTime -= dt;
            //     if (this._runTime <= 0) {
            //     }
            //     break;
            // }
          }
        };

        _proto.changeState = function changeState(state) {
          var _this3 = this;
          //console.log("state", state);
          switch (state) {
            case RunState.NORMAL:
              {
                this._state = RunState.NORMAL;
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
            case RunState.AWARD:
              {
                this._state = RunState.AWARD;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this3.showAward();
                }, 0.5);
                break;
              }
            case RunState.AWARD_LINES:
              {
                this._state = RunState.AWARD_LINES;
                this._runTime = LINE_TIME;
                break;
              }
            case RunState.WAIT:
              {
                this._state = RunState.WAIT;
                this._runTime = WAIT_TIME;
                break;
              }
            case RunState.SHOW_NEXT:
              {
                this._state = RunState.SHOW_NEXT;
                this._runTime = AWARD_TIME;
                this.scheduleOnce(function () {
                  _this3.showNext();
                }, 1.8);
                break;
              }
            case RunState.BIG_WIN:
              {
                this._state = RunState.BIG_WIN;
                this.bigwin_bg.active = true;
                this._runTime = BIG_WIN_TIME1;
                var odd = CaptainProxy.result.prizeAmount / this._bet;
                var aniname = "bigwin_";
                this.bigwin_txt.stepCount = BIG_WIN_TIME1 * 30;
                this.bigwin_sp.setAnimation(0, aniname + "intro", false);
                if (odd >= 30) {
                  aniname = "megawin_";
                  this.bigwin_txt.stepCount = BIG_WIN_TIME2 * 30;
                  this._runTime = BIG_WIN_TIME2;
                  this.bigwin_sp.addAnimation(0, aniname + "intro", false);
                }
                if (odd >= 50) {
                  aniname = "superwin_";
                  this.bigwin_txt.stepCount = BIG_WIN_TIME3 * 30;
                  this._runTime = BIG_WIN_TIME3;
                  this.bigwin_sp.addAnimation(0, aniname + "intro", false);
                }
                this.bigwin_txt.string = Common.numFormat(CaptainProxy.result.prizeAmount);
                this.bigwin_sp.setCompleteListener(function (trackEntry) {
                  var name = trackEntry.animation ? trackEntry.animation.name : "";
                  if (name.startsWith(aniname)) {
                    _this3.bigwin_sp.setCompleteListener(null);
                    _this3.bigwin_sp.setAnimation(0, aniname + "idle", true);
                  }
                });
                CaptainDef.palyAudio(CaptainDef.audio.bgmBigwin, function (id) {
                  _this3._audioId = id;
                });
                break;
              }
            case RunState.SHOWGAIN:
              {
                this._state = RunState.SHOWGAIN;
                this._runTime = GAIN_TIME;
                var bigWinName = "normal_";
                var _odd = CaptainProxy.result.prizeAmount / this._bet;
                if (_odd >= 60) {
                  bigWinName = "bigwin2_";
                  //aniName = "win_medium";
                } else if (_odd >= 5) {
                  bigWinName = "bigwin_";
                }
                this.notice_bg.setAnimation(0, bigWinName + "win", false);
                this.notice_bg.addAnimation(0, bigWinName + "idle", true);
                break;
              }
            case RunState.FREE_WIN:
              {
                this._state = RunState.FREE_WIN;
                this.free_winTxt.reset();
                this._runTime = FREE_WIN_TIME;
                this.free_bottom.active = false;
                this.turn_spine_start.node.active = true; //开始按钮 
                this.free_winBtn.active = false;
                this.free_win.active = true;
                this.freeLock = true;
                this.clickHideWindow();
                this.free_winTxt.stepCount = 60; //1s结束
                this.free_winTxt.string = Common.numFormat(CaptainProxy.freeTotalWin);
                this.txt_win.string = Common.numFormat(CaptainProxy.freeTotalWin);
                this.scheduleOnce(function () {
                  if (!_this3.free_winBtn.active) {
                    _this3.free_winBtn.setScale(v3(0.2, 0.2, 1));
                    _this3.free_winBtn.active = true;
                    tween(_this3.free_winBtn).to(0.2, {
                      scale: v3(1, 1, 1)
                    }).start();
                  }
                }, 1);
                this.free_win_intro.setAnimation(0, "intro", false);
                this.free_win_intro.addAnimation(0, "idle", true);

                //this.txt_win.reset();
                this.txt_winFree.reset();
                CaptainDef.palyAudio(CaptainDef.audio.bgmTotalwin, function (id) {
                  _this3._audioId = id;
                  _this3.scheduleOnce(function () {
                    AudioManager.instance.stopSound(id);
                    CaptainDef.palyAudio(CaptainDef.audio.bgmTotalwinEnd, function (id) {
                      _this3._audioId = id;
                    });
                  }, 2);
                });
                break;
              }
            case RunState.FREE_ADD:
              {
                this._state = RunState.FREE_ADD;
                this.free_add_time.string = CaptainProxy.result.FreeInfo.Count - this._freeCount + "";
                this.free_add.active = true;
                tween(this.free_add).to(0.3, {
                  scale: v3(1.1, 1.1, 1)
                }).to(0.1, {
                  scale: v3(1, 1, 1)
                }).delay(1).call(function () {
                  _this3.free_add.active = false;
                  _this3._state = RunState.WAIT;
                }).start();
                this.setFreeCount(CaptainProxy.result.FreeInfo.Count);
                break;
              }
          }
        };
        _proto.changeScene = function changeScene(isEnter, freeCount, isToHome) {
          var _this4 = this;
          if (isEnter === void 0) {
            isEnter = true;
          }
          if (freeCount === void 0) {
            freeCount = 0;
          }
          if (isToHome === void 0) {
            isToHome = false;
          }
          if (isEnter) {
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.free_bg.active = true;
            this.free_bg1.active = true;
            this.captain.node.active = false;
            this.free_captain.node.active = true;
            this.free_start.active = true;
            this.clickHideWindow();

            //修改转盘背景
            this.turn_bg.getComponent(Sprite).spriteFrame = this.turn_bg_list[1];

            //有问题
            AudioManager.instance.stopAllEffect();
            CaptainDef.palyAudio(CaptainDef.audio.transEnterBonus);
            this.free_start.getChildByName("free_time").active = false;
            this.free_start.getChildByName("start").active = false;
            this.free_start_intro.setAnimation(0, "intro", false);
            this.scheduleOnce(function () {
              _this4.free_start_intro.setAnimation(0, "idle", true);
              _this4.free_start.getChildByName("free_time").active = true;
              _this4.free_start.getChildByName("start").active = true;
              _this4._freeCount = freeCount;
              _this4.ruber.getChildByName("normal").active = false;
              _this4.ruber.getChildByName("free").active = true;
              tween(_this4.free_start_time.node).by(0.05, {
                position: v3(0, 20)
              }).call(function () {
                _this4.free_start_time.string = Common.numFormat(_this4._freeCount + "");
                tween(_this4.free_start_time.node).by(0.05, {
                  position: v3(0, -20)
                }).start();
              }).start();
              _this4.free_winTxt.string = Common.numFormat(_this4._freeCount + "");
              _this4.normal_btnBox.getChildByName("more").active = false;
              _this4.more_btnBox.getChildByName("more").active = false;
            }, 0.8);
          } else {
            //修改转盘背景
            this.turn_bg.getComponent(Sprite).spriteFrame = this.turn_bg_list[0];
            this.freeLock = false;
            this.free_bg.active = false;
            this.free_bg1.active = false;
            this.captain.node.active = true;
            this.free_captain.node.active = false;
            this.free_start.active = false;
            this._freeCount = freeCount;
            this.ruber.getChildByName("normal").active = true;
            this.ruber.getChildByName("free").active = false;
            this.free_winTxt.string = Common.numFormat(this._freeCount + "");
            this._isFree = false;
            this.free_win.active = false;
            this.free_bottom.active = false;
            this.turn_spine_start.node.active = true; //开始按钮 
            this.normal_btnBox.getChildByName("more").active = true;
            this.more_btnBox.getChildByName("more").active = true;
            if (isToHome) {
              CaptainDef.palyMusic(CaptainDef.audio.bgmMg);
              this._odds = CaptainDef.oddsType['normal'];
              this.initGun();
              this.changeState(RunState.NORMAL);
            }
          }
        }
        //获奖图标动画
        ;

        _proto.getWinIconAnim = function getWinIconAnim() {
          this.turn_node_spineMask.active = false;
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            var rand = Math.random();
            if (rand < 0.5) {
              tween(this.turn_aniLines[i].node).by(0.1, {
                position: v3(3, 0, 0)
              }).by(0.1, {
                position: v3(-3, 0, 0)
              }).by(0.1, {
                position: v3(0, 3, 0)
              }).by(0.1, {
                position: v3(0, -3, 0)
              }).by(0.1, {
                position: v3(-3, 0, 0)
              }).by(0.1, {
                position: v3(3, 0, 0)
              }).by(0.1, {
                position: v3(0, -3, 0)
              }).by(0.1, {
                position: v3(0, 3, 0)
              }).by(0.1, {
                position: v3(0, 0, 0)
              }).start();
            } else {
              tween(this.turn_aniLines[i].node).by(0.1, {
                position: v3(0, 3, 0)
              }).by(0.1, {
                position: v3(0, -3, 0)
              }).by(0.1, {
                position: v3(3, 0, 0)
              }).by(0.1, {
                position: v3(-3, 0, 0)
              }).by(0.1, {
                position: v3(0, -3, 0)
              }).by(0.1, {
                position: v3(0, 3, 0)
              }).by(0.1, {
                position: v3(-3, 0, 0)
              }).by(0.1, {
                position: v3(3, 0, 0)
              }).start();
            }
          }
        }

        //设置免费次数
        ;

        _proto.setFreeCount = function setFreeCount(count) {
          var _this5 = this;
          this._freeCount = count;
          //console.log(count, "count");
          CaptainDef.palyAudio(CaptainDef.audio.freespinRemaining);
          if (this._freeCount >= 1) {
            //if (this._freeCount != CaptainProxy.result.FreeInfo.Count) {
            tween(this.free_bottom_time.node).by(0.1, {
              position: v3(0, 20, 0)
            }).by(0.1, {
              position: v3(0, -20, 0)
            }).start();
            tween(this.free_bottom_time.node).to(0.1, {
              scale: v3(1.2, 1.2, 1.2)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
            if (this.free_bottom.active) {
              this.free_bottom_introl.node.active = true;
              this.free_bottom_introl.setAnimation(0, "spin", false);
              this.free_bottom_introl.setCompleteListener(function (trackEntry) {
                _this5.free_bottom_introl.setCompleteListener(null);
                _this5.free_bottom_introl.setAnimation(0, "idle", true);
              });
            }

            //}
            this.free_bottom.getChildByName("node_lastOne").active = false;
            this.free_bottom.getChildByName("node_notLastOne").active = true;
            this.free_bottom_time.string = Common.numFormat(this._freeCount + "");
          } else {
            this.free_bottom.getChildByName("node_notLastOne").active = false;
            this.free_bottom.getChildByName("node_lastOne").active = true;
          }
        }
        //免费模式进入到转盘
        ;

        _proto.onClickEnterFreeScreen = function onClickEnterFreeScreen() {
          var _this6 = this;
          this.free_start.active = false;
          this.free_bottom.active = true;
          this.turn_spine_start.node.active = false;
          this.changeState(RunState.WAIT);
          this._runTime = 1.2;
          this._isFree = true;
          CaptainDef.palyMusic(CaptainDef.audio.bgmBonus);
          CaptainDef.palyAudio(CaptainDef.audio.freespinStartBtn);
          AudioManager.instance.stopAllEffect();
          this._audioId = 0;
          this.scheduleOnce(function () {
            CaptainDef.palyAudio(CaptainDef.audio.freespinWheelPowerUp);
          }, 0.1);
          this._odds = CaptainDef.oddsType['free'];
          this.freeLock = false;
          this.freeTimeLeft = FREE_TIME;
          this.ruberBg.setAnimation(0, "free_lv1_fall", false);
          this.free_captain.setAnimation(0, "spawn", false);
          tween(this.ruber).to(0.5, {
            scale: v3(1.2, 1.2, 1.2)
          }).to(0.5, {
            scale: v3(1, 1, 1)
          }).start();
          this.ruber.getChildByName("free").children.map(function (item) {
            item.active = false;
          });
          //转盘切换动画处理

          this.ruber.getChildByName("free").getChildByName("x1").active = true;
          this.scheduleOnce(function () {
            _this6.ruber.getChildByName("free").getChildByName("x2").active = true;
            _this6.scheduleOnce(function () {
              _this6.ruber.getChildByName("free").getChildByName("x3").active = true;
              _this6.scheduleOnce(function () {
                _this6.ruber.getChildByName("free").getChildByName("x5").active = true;
                _this6.scheduleOnce(function () {
                  _this6.ruber.getChildByName("free").getChildByName("x2").active = false;
                  _this6.ruber.getChildByName("free").getChildByName("x3").active = false;
                  _this6.ruber.getChildByName("free").getChildByName("x5").active = false;
                  _this6.ruber.getChildByName("free").getChildByName("x2_off").active = true;
                  _this6.ruber.getChildByName("free").getChildByName("x3_off").active = true;
                  _this6.ruber.getChildByName("free").getChildByName("x5_off").active = true;
                }, 0.2);
              }, 0.2);
            }, 0.2);
          }, 0.2);
          this.scheduleOnce(function () {
            _this6.changeState(RunState.NORMAL);
            _this6.free_captain.setAnimation(0, "idle", true);
          }, 1.5);
          if (this._freeCount >= 1) {
            this.free_bottom.getChildByName("node_notLastOne").active = true;
            this.free_bottom.getChildByName("node_lastOne").active = false;
            this.free_bottom_time.string = Common.numFormat(this._freeCount + "");
          } else {
            this.free_bottom.getChildByName("node_notLastOne").active = false;
            this.free_bottom.getChildByName("node_lastOne").active = true;
          }
        }

        //免费模式结算页返回普通模式
        ;

        _proto.onClickEnterNormalScreen = function onClickEnterNormalScreen() {
          var _this7 = this;
          this._isFromAutoToFree = false;
          AudioManager.instance.stopAllEffect();
          this._audioId = 0;
          this.free_winTxt.reset(CaptainProxy.freeTotalWin);
          CaptainProxy.freeTotalWin = 0;
          this.scheduleOnce(function () {
            _this7.checkDownOrUpBet();
            _this7.changeScene(false, 0, true);
          }, 1);
        }

        //初始化转盘
        ;

        _proto.loadAni = function loadAni(data) {
          if (data.Res && data.Res.length > 0) {
            var pos = data.Res[data.Res.length - 1].PosMsg;
            var newPos = [[Math.floor(Math.random() * 9), pos[0] - 1, pos[5] - 1, pos[10] - 1, Math.floor(Math.random() * 9)], [Math.floor(Math.random() * 9), pos[1] - 1, pos[6] - 1, pos[11] - 1, Math.floor(Math.random() * 9)], [Math.floor(Math.random() * 9), pos[2] - 1, pos[7] - 1, pos[12] - 1, Math.floor(Math.random() * 9)], [Math.floor(Math.random() * 9), pos[3] - 1, pos[8] - 1, pos[13] - 1, Math.floor(Math.random() * 9)], [Math.floor(Math.random() * 9), pos[4] - 1, pos[9] - 1, pos[14] - 1, Math.floor(Math.random() * 9)]];
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              this.turn_aniLines[i].setData({
                index: i
              });
              this.turn_aniLines[i].initCard(newPos[i]);
            }
          } else {
            for (var _i = 0; _i < this.turn_aniLines.length; _i++) {
              this.turn_aniLines[_i].setData({
                index: _i
              });
              this.turn_aniLines[_i].initCard();
            }
          }
          // for (let i = 0; i < this.turn_aniLines.length; i++) {
          //     this.turn_aniLines[i].setData({ index: i });
          //     this.turn_aniLines[i].initCard();
          // }
        }

        //点击开始游戏按钮
        ;

        _proto.clickStartGame = function clickStartGame() {
          //当自动模式下点击开始按钮，切换成手动模式
          if (this._auto) {
            this.setAuto(0);
            if (CaptainProxy.getBet() == 2000) {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
              this._isMinBet = true;
            } else {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
            this.normal_btnBox.getChildByName("btn4").getComponent(UIOpacity).opacity = 255;
            return;
          }
          this.preStart();
        }
        //开始游戏校验（初始化页面 & 请求开奖结果）
        ;

        _proto.preStart = function preStart() {
          this.clickHideWindow();
          if (this.freeLock) return;
          if (!this.checkReady()) return;
          if (this._lock) return;
          var multiple = 1;
          //接口
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet * multiple) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          if (!this._isFree) this.updateGoldData(-this._bet * multiple);
          this.clear();
          CaptainDef.palyAudio(CaptainDef.audio.spinBtn);
          this.startGameAni(true);
          this.sendBet();
          this._state = RunState.START;

          //接口
          this._runTime = RUN_TIME + 60 * 60 * 60 * 24 * 30 * 30;
        }
        //转盘转动
        ;

        _proto.runStart = function runStart() {
          var _this8 = this;
          this._auto || this._isFree ? GAIN_TIME = 1.5 : GAIN_TIME = 0.2;
          this.setFreeCount(this._freeCount - 1);
          if (this._freeCount < 0) {
            this._freeCount = 0;
          }
          this.checkAuto();
          this.changeBtnActive(false);
          this._scatteNum = 0;
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          var _loop = function _loop(i) {
            _this8.scheduleOnce(function () {
              _this8.turn_aniLines[i].run(0);
            }, _this8._runDelay * i);
          };
          for (var i = 0; i < this.turn_aniLines.length; i++) {
            _loop(i);
          }
          if (this._runDelay == 0) {
            this._runTime = 0.1;
          }
        }
        //转盘停止，计算中奖
        ;

        _proto.onClickStop = function onClickStop() {
          var _this9 = this;
          if (!CaptainProxy.result) {
            return;
          }
          if (this._lock) {
            return;
          }
          this._lock = true;
          if (this._runDelay == 0) CaptainDef.palyAudio(CaptainDef.audio.spinReelQuickstop);
          this._state = RunState.STOP;
          this._runTime = STOP_TIME;
          var nums = CaptainProxy.result.Res[0].PosMsg;
          var scatterTime = 0.2;
          if (this._runDelay == 0) {
            var _loop2 = function _loop2(i) {
              var rand1 = nums[i] - 1;
              var rand2 = nums[i + _this9.turn_aniLines.length * 1] - 1;
              var rand3 = nums[i + _this9.turn_aniLines.length * 2] - 1;
              //转盘每一竖中间三个的号码索引
              var arr = [rand1, rand2, rand3];
              if (rand1 == 8) {
                _this9._scatteNum++;
              }
              if (rand2 == 8) {
                _this9._scatteNum++;
              }
              if (rand3 == 8) {
                _this9._scatteNum++;
              }
              _this9.scheduleOnce(function () {
                _this9.turn_aniLines[i].showResult(arr, false, 0); //获取每一竖的接口开奖结果，供this.turn_aniLines渲染
              }, scatterTime);
            };
            for (var i = 0; i < this.turn_aniLines.length; i++) {
              _loop2(i);
            }
            this._runTime += scatterTime;
            var prizeAmount = CaptainProxy.result.prizeAmount;
            CaptainProxy.freeTotalWin += this._isFree ? prizeAmount : 0;
            var end = function end() {
              _this9.showResult();
            };
            this.scheduleOnce(function () {
              end();
            }, 0.5 + scatterTime);
          } else {
            var totalScatteNum = [0, 0, 0, 0, 0];
            var time = 0;
            for (var _i2 = 0; _i2 < this.turn_aniLines.length; _i2++) {
              var rand1 = nums[_i2] - 1;
              var rand2 = nums[_i2 + this.turn_aniLines.length * 1] - 1;
              var rand3 = nums[_i2 + this.turn_aniLines.length * 2] - 1;
              if (rand1 == 8) {
                this._scatteNum++;
              }
              if (rand2 == 8) {
                this._scatteNum++;
              }
              if (rand3 == 8) {
                this._scatteNum++;
              }
              totalScatteNum[_i2] = this._scatteNum;
              if (this._scatteNum >= 2 && this._runDelay != 0) {
                scatterTime++;
              }
            }
            var _loop3 = function _loop3(_i3) {
              var rand1 = nums[_i3] - 1;
              var rand2 = nums[_i3 + _this9.turn_aniLines.length * 1] - 1;
              var rand3 = nums[_i3 + _this9.turn_aniLines.length * 2] - 1;
              //转盘每一竖中间三个的号码索引
              var arr = [rand1, rand2, rand3];
              _this9.scheduleOnce(function () {
                _this9.turn_aniLines[_i3].showResult(arr, false, totalScatteNum[_i3]); //获取每一竖的接口开奖结果，供this.turn_aniLines渲染
              }, time);
              if (totalScatteNum[_i3] >= 2) time++;
            };
            for (var _i3 = 0; _i3 < this.turn_aniLines.length; _i3++) {
              _loop3(_i3);
            }
            this._runTime += scatterTime;
            var _prizeAmount = CaptainProxy.result.prizeAmount;
            CaptainProxy.freeTotalWin += this._isFree ? _prizeAmount : 0;
            var _end = function _end() {
              _this9.showResult();
            };
            this.scheduleOnce(function () {
              _end();
            }, 0.5 + scatterTime);
          }
        };
        _proto.showResult = function showResult() {
          if (!CaptainProxy.result) {
            return;
          }
          this.checkAward();
        }
        //判断中奖情况，未中奖状态为WAIT，执行showEnd，中奖状态为AWARD
        ;

        _proto.checkAward = function checkAward() {
          var prizeAmount = CaptainProxy.result.prizeAmount;
          if (prizeAmount > 0) {
            this.changeState(RunState.AWARD);
          } else {
            //修改按钮动画
            this.startGameAni(false);
            this.changeState(RunState.WAIT);
            this.changeBtnActive(true);
            this.showEnd();
          }
        }
        //判断是否进入免费模式
        ;

        _proto.showEnd = function showEnd() {
          var _this10 = this;
          this.updateGoldData();
          this.changeBtnActive(true);
          this._state = RunState.WAIT;
          if (this._scatteNum > 1 && this._scatteNum < 3 && !this._isFree) {
            CaptainDef.palyAudio(CaptainDef.audio.fsNoWin);
          } else if (this._scatteNum >= 3 && !this._isFree) {
            CaptainDef.palyAudio(CaptainDef.audio.freespinWon);
          }

          //判断免费模式下是否还中免费模式
          if (CaptainProxy.result.FreeInfo.Count) {
            if (this._isFree && this._freeCount < CaptainProxy.result.FreeInfo.Count) {
              //鸟的动画效果
              for (var i = 0; i < this.turn_aniLines.length; i++) {
                this.turn_aniLines[i].showScatter();
              }
              this.changeState(RunState.FREE_ADD);
              this._lock = false;
            } else if (!this._isFree) {
              if (this._runDelay == 0) {
                this._hasChangeSpeed = true;
                this._runDelay = 0.1;
              }
              //鸟的动画效果
              for (var _i4 = 0; _i4 < this.turn_aniLines.length; _i4++) {
                this.turn_aniLines[_i4].showScatter();
              }
              this.scheduleOnce(function () {
                _this10.changeScene(true, CaptainProxy.result.FreeInfo.Count);
                _this10._lock = false;
              }, 1);
            } else {
              this._lock = false;
            }
            this._freeCount = CaptainProxy.result.FreeInfo.Count;
            return;
          } else {
            this._lock = false;
          }
          //判断是否结束免费模式
          if (this._freeCount <= 0) {
            if (this._isFree) {
              if (this._hasChangeSpeed) {
                this._hasChangeSpeed = false;
                this._runDelay = 0;
              }
              this.scheduleOnce(function () {
                _this10.changeScene(false);
                _this10.changeState(RunState.FREE_WIN);
              }, 0.5);
            }
          }
        }
        //中奖后再次执行下一轮开奖
        ;

        _proto.showNext = function showNext() {
          var _this11 = this;
          if (this._scatteNum > 1) {
            this.turn_bottomIntro.node.active = true;
            this.turn_bottomIntro.setAnimation(0, "animation", false);
            CaptainDef.palyAudio(CaptainDef.audio.fsGet);
            this.scheduleOnce(function () {
              _this11.turn_bottomIntro.node.active = false;
            }, 1.5);
          }
          this.hideSpine();
          this._showLineIndex = 0;
          this.turn_node_spineMask.active = false;
          this.getWinIconAnim();

          //this.scheduleOnce(() => {
          this._resultIndex++;
          this.aniGun();
          var index = this._resultIndex;
          var nums = CaptainProxy.result.Res[index].PosMsg;
          var next = null;

          //第一次在onClickStop函数中添加
          this._scatteNum = 0;
          for (var i = 0; i < CaptainProxy.result.Res[this._resultIndex].PosMsg.length; i++) {
            if (CaptainProxy.result.Res[this._resultIndex].PosMsg[i] == 9) {
              this._scatteNum++;
            }
          }
          if (CaptainProxy.result.Res[index + 1]) {
            next = CaptainProxy.result.Res[index + 1].PosMsg;
          }
          for (var _i5 = 0; _i5 < this.turn_aniLines.length; _i5++) {
            var rand1 = nums[_i5] - 1;
            var rand2 = nums[_i5 + this.turn_aniLines.length * 1] - 1;
            var rand3 = nums[_i5 + this.turn_aniLines.length * 2] - 1;
            var arr = [rand3, rand2, rand1];
            var nextCount = 0;
            if (CaptainProxy.result.Res[index].RewardPos) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(CaptainProxy.result.Res[index].RewardPos), _step2; !(_step2 = _iterator2()).done;) {
                var item = _step2.value;
                if (item == _i5 || item == _i5 + this.turn_aniLines.length * 1 || item == _i5 + this.turn_aniLines.length * 2) {
                  nextCount++;
                }
              }
            }
            var other = null;
            if (next && nextCount > 0) {
              var _rand = next[_i5] - 1;
              var _rand2 = next[_i5 + this.turn_aniLines.length * 1] - 1;
              var _rand3 = next[_i5 + this.turn_aniLines.length * 2] - 1;
              var arr2 = [_rand, _rand2, _rand3];
              other = arr2[nextCount - 1];
            }
            this.turn_aniLines[_i5].showNext(arr, other);
          }

          // if (this._runDelay == 0) {
          //     CaptainDef.palyAudio(CaptainDef.audio.QUICK_END);
          // } else {
          //     CaptainDef.palyAudio(CaptainDef.audio.END);
          // }

          var end = function end() {
            _this11.showResult();
          };
          this.scheduleOnce(function () {
            //修改按钮动画
            _this11.startGameAni(false);
            end();
          }, 0.8);
        }
        //展示中奖划线效果以及执行showWin
        ;

        _proto.showAward = function showAward() {
          if (this._state != RunState.AWARD) return;
          this.txt_win.string = Common.numFormat(CaptainProxy.result.Res[this._resultIndex].RewardMoney);
          if (CaptainProxy.result.prizeAmount > 0) ;
          if (CaptainProxy.result.prizeAmount) {
            this.showLines();
            this.showWin();
          }
        }
        //计算金额变化，中奖效果（SHOWGAIN）以及判断是否执行（SHOW_NEXT）
        ;

        _proto.showWin = function showWin() {
          var _this12 = this;
          this.notice_content.active = false; //关闭普通公告
          this.notice_gain_one.active = true; //展示中奖金额
          tween(this.notice_gain_one).to(0.01, {
            scale: v3(0.9, 0.9, 1)
          }).to(0.2, {
            scale: v3(1.1, 1.1, 1)
          }).to(0.1, {
            scale: v3(1, 1, 1)
          }).start();
          var num = CaptainProxy.result.Res[this._resultIndex].RewardMoney;
          if (this._resultIndex > 0 && num > 0 || num > 0 && this._isFree) {
            var index = this._resultIndex;
            if (index > 3) {
              index = 3;
            }
            var odd = this._odds[index];
            var money = num / odd;
            this.notice_gain_one_txt.string = Common.numFormat(money);
            this.notice_txt_odds.node.active = true;
            this.notice_txt_odds.string = "x" + odd;
            this.notice_txt_odds.node.getComponent(UIOpacity).opacity = 0;
            this.notice_txt_odds.node.scale = v3(1, 1, 1);
            CaptainDef.palyAudio(CaptainDef.audio.prizeWinMultiply);
            tween(this.notice_txt_odds.node).to(0.8, {
              scale: v3(2, 2, 1)
            }).call(function () {
              _this12.notice_txt_odds.node.active = false;
              CaptainDef.palyAudio(CaptainDef.audio.prizeWinStart);
              _this12.notice_gain_one_txt.string = Common.numFormat(num);
            }).start();
            tween(this.notice_txt_odds.node.getComponent(UIOpacity)).to(0.8, {
              opacity: 180
            }).start();
          } else if (num > 0) {
            CaptainDef.palyAudio(CaptainDef.audio.prizeWinStart);
            this.notice_gain_one_txt.string = Common.numFormat(num);
          }
          if (this._resultIndex < CaptainProxy.result.Res.length - 1) {
            this.changeState(RunState.SHOW_NEXT);
            this.notice_bg.setAnimation(0, "normal_win", false);
            this.notice_bg.addAnimation(0, "normal_idle", true);
            return;
          }
          //若还有中奖信息，则不往下执行

          //普通中奖还是中大奖

          this.scheduleOnce(function () {
            _this12.notice_gain_all.active = true;
            _this12.notice_gain_one.active = false;
            if (CaptainProxy.result.prizeAmount / _this12._bet < 5) {
              CaptainDef.palyAudio(CaptainDef.audio.prizeTotalWin);
              _this12.txt_win.string = Common.numFormat(CaptainProxy.result.prizeAmount + "");
              _this12.notice_gain_all_txt.string = Common.numFormat(CaptainProxy.result.prizeAmount + "");
              _this12.txt_winFree.string = Common.numFormat(CaptainProxy.freeTotalWin + "");
            } else {
              _this12.txt_win.stepCount = 60;
              _this12.txt_winFree.stepCount = 60;
              CaptainDef.palyAudio(CaptainDef.audio.prizeMediumWinCounting);
              _this12.txt_win.string = Common.numFormat(CaptainProxy.result.prizeAmount + "");
              _this12.notice_gain_all_txt.string = Common.numFormat(CaptainProxy.result.prizeAmount + "");
              _this12.txt_winFree.string = Common.numFormat(CaptainProxy.freeTotalWin + "");
              _this12.scheduleOnce(function () {
                _this12.txt_win.stepCount = 30;
                _this12.txt_winFree.stepCount = 30;
                CaptainDef.palyAudio(CaptainDef.audio.prizeMediumWinCountingEnd);
              }, 1);
            }
            if (CaptainProxy.result.prizeAmount / _this12._bet >= 20) {
              _this12.scheduleOnce(function () {
                _this12.changeState(RunState.BIG_WIN);
              }, 0.3);
            } else {
              _this12.changeState(RunState.SHOWGAIN);
            }
            _this12.initGun();
          }, num > 0 ? 0.3 : 0.2);
        };
        _proto.showSmoke = function showSmoke(data) {
          var _this13 = this;
          var _loop4 = function _loop4(i) {
            _this13.turn_spine_smokes[data[i]].node.active = true;
            _this13.turn_spine_smokes[data[i]].clearTrack(0);
            _this13.turn_spine_smokes[data[i]].setAnimation(0, "1", false);
            _this13.turn_spine_smokes[data[i]].setCompleteListener(function () {
              _this13.turn_spine_smokes[data[i]].setCompleteListener(null);
              _this13.turn_spine_smokes[data[i]].node.active = false;
            });
            _this13.turn_spine_smokes1[data[i]].node.active = true;
            _this13.turn_spine_smokes1[data[i]].clearTrack(0);
            _this13.turn_spine_smokes1[data[i]].setAnimation(0, "1", false);
            _this13.turn_spine_smokes1[data[i]].setCompleteListener(function () {
              _this13.turn_spine_smokes1[data[i]].setCompleteListener(null);
              _this13.turn_spine_smokes1[data[i]].node.active = false;
            });
          };
          for (var i = 0; i < data.length; i++) {
            _loop4(i);
          }
        }
        //隐藏winItem，显示转盘普通图片
        ;

        _proto.hideSpine = function hideSpine() {
          var children = this.turn_node_spineParent.children;
          for (var _iterator3 = _createForOfIteratorHelperLoose(children), _step3; !(_step3 = _iterator3()).done;) {
            var node = _step3.value;
            node.active = false;
          }
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.turn_aniLines), _step4; !(_step4 = _iterator4()).done;) {
            var cardAni = _step4.value;
            cardAni.show();
          }
        }
        //显示winItem，隐藏转盘普通图片(turn_node_spineParent下分别放置winItem)
        ;

        _proto.showSpine = function showSpine(index, result, isBig) {
          if (isBig === void 0) {
            isBig = false;
          }
          var child = this.turn_node_spineParent.getChildByName("spine" + index);
          child.active = true;
          var item = child.getChildByName("item");
          if (!item) {
            item = instantiate(this.prefab_winItem);
            child.addChild(item);
            item.name = "item";
          }
          var winItem = item.getComponent(CaptainWinItem);
          winItem.showResult(result, isBig);
          //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.turn_aniLines[b].hide(a);
          return winItem;
        };
        _proto.hideBigWin = function hideBigWin() {
          if (this._state == RunState.BIG_WIN) {
            //在update中关闭大奖状态
            this._runTime = 0.5;
          }
        };
        _proto.showLines = function showLines() {
          var _this14 = this;
          var prizeIdx = CaptainProxy.result.Res[this._resultIndex].RewardPos;
          //let prizeIdx = [5, 1, 2]
          //let prizeIdx = [0, 1, 7, 3]
          if (!prizeIdx || prizeIdx.length == 0) return false;
          var OpenNums = CaptainProxy.result.Res[this._resultIndex].PosMsg;
          // let OpenNums = [7, 4, 4, 3, 6, 4, 1, 7, 6, 6, 2, 3, 10, 5, 3]
          // let OpenNums = [6, 6, 3, 6, 1, 5, 7, 6, 6, 3, 6, 3, 3, 3, 5]
          this.hideSpine();
          //this.turn_node_spineMask.active = true;

          var lines = prizeIdx;
          CaptainDef.palyAudio(CaptainDef.audio.prizeWinStart);
          for (var j = 0; j < lines.length; j++) {
            var key = lines[j];
            var result = OpenNums[key] - 1;
            this.showSpine(key, result);
          }
          var RewardLines = CaptainProxy.result.Res[this._resultIndex].RewardLines;
          //let RewardLines = { 8: 3 }
          //let RewardLines = { 5: 4, 17: 3 }
          //展示中奖线条效果图
          var _loop5 = function _loop5() {
            var node = _this14.turn_node_line.getChildByName("line" + (parseInt(i) + 1));
            if (node) {
              node.active = true;
              var child = node.getChildByName("line");
              var lineSp = child.getComponent(LineSprite);
              if (child) {
                lineSp.hide();
                lineSp.action();
              }
              _this14.scheduleOnce(function () {
                node.active = false;
              }, 1.25);
            }
          };
          for (var i in RewardLines) {
            _loop5();
          }
          return true;
        };
        _proto.hideLines = function hideLines() {
          //this.txt_lineWin.node.active = false;
        }

        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          CaptainProxy.setBet(betListIndex, betCount);
          this.checkDownOrUpBet();
        };
        _proto.updateInfo = function updateInfo(data) {
          // data =
          // {
          //     FreeInfo: {
          //         Count: 0,
          //         Multiple: 1,
          //         TotalCount: 0,
          //         TotalPrizeAmount: 10650,
          //     },
          //     Res: [{
          //         ExtraOdd: 1,
          //         PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
          //         RewardLines: { 5: 3, 12: 3, 17: 4 },
          //         RewardMoney: 400,
          //         RewardPos: [0, 6, 12]
          //     }]
          // }
          if (data.FreeInfo && data.FreeInfo.Count > 0) {
            this.changeScene(true, data.FreeInfo.Count);
            this._odds = CaptainDef.oddsType['free'];
          } else {
            CaptainDef.palyMusic(CaptainDef.audio.bgmMg);
            this.changeScene(false);
            this._odds = CaptainDef.oddsType['normal'];
          }
          this.loadAni(data);
        }
        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this15 = this;
          //进入页面获取上次数据
          CaptainProxy.on(CaptainGameEvent.UPDATE_BETLIST, this.updateInfo, this);
          CaptainProxy.on(CaptainGameEvent.SELECT_BET, function (count) {
            _this15.updateSetData();
            Tween.stopAllByTarget(_this15.txt_bet.node);
            tween(_this15.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //转盘动画
          CaptainProxy.on(CaptainGameEvent.START, function (data) {
            _this15.runStart();
          }, this);

          ////出现大于等于两个小鸟之后的效果 展示光线
          CaptainProxy.on(CaptainGameEvent.SHOW_LIGHT, function (data) {
            if (_this15.turn_aniLines[data.index]) {
              if (_this15._runDelay != 0 && !_this15.turn_aniLines[data.index].getLightStatue()) {
                CaptainDef.palyAudio(CaptainDef.audio.fsStart);
                _this15.turn_aniLines[data.index].showLight();
              }
            }
          }, this);

          //转盘冒烟效果
          CaptainProxy.on(CaptainGameEvent.SHOW_SMOKE, function () {
            var RewardPos = CaptainProxy.result.Res[_this15._resultIndex - 1] ? CaptainProxy.result.Res[_this15._resultIndex - 1].RewardPos : null;
            var smokeList = [];
            if (RewardPos) {
              var cache = [[], [], [], [], []];
              RewardPos.map(function (item) {
                cache[item % 5].push(item);
              });
              cache.map(function (item) {
                if (item.length > 0) {
                  item.sort();
                  smokeList.push(item[item.length - 1]);
                }
              });
            }
            _this15.scheduleOnce(function () {
              _this15.showSmoke(smokeList);
            }, 0.3);
          }, this);

          //转盘提示
          CaptainProxy.on(CaptainGameEvent.CLICK_ITEM, function (data) {
            if (_this15._isFree) return;
            if (_this15._auto) return;
            if (_this15._lock) return;
            _this15._window.node.scale = v3(1, 1, 1);
            _this15._window.node.active = true;
            _this15._window.showIndex(data.index);
            _this15.turn_node_spineMask.active = true;
            var pos = data.pos;
            pos = _this15.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (pos.x > 190) {
              pos.x = 190;
            }
            if (pos.x < -190) {
              pos.x = -190;
            }
            _this15._window.node.setPosition(pos.x, pos.y);
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);

          //大奖金额变化
          EventManager.on(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        }

        //金额到达终点
        ;

        _proto.bigWinEnd = function bigWinEnd() {
          if (this.bigwin_bg.active && !this._isEndBigWin && CaptainProxy.result.prizeAmount - 200 <= parseInt(this.bigwin_txt.string.replace(/,/g, '')) && parseInt(this.bigwin_txt.string.replace(/,/g, '')) <= CaptainProxy.result.prizeAmount + 200) {
            AudioManager.instance.stopSound(this._audioId);
            this._isEndBigWin = true;
            this._runTime = 8;
            CaptainDef.palyAudio(CaptainDef.audio.bgmBigwinEnd);
          }
        };
        _proto.initGun = function initGun() {
          var _this16 = this;
          if (this._isFree) {
            this.ruberBg.setAnimation(0, "free_lv1_fall", false);
            this.scheduleOnce(function () {
              _this16.ruber.getChildByName("free").children.map(function (item) {
                item.active = false;
              });
              _this16.ruber.getChildByName("free").getChildByName("x1").active = true;
              _this16.ruber.getChildByName("free").getChildByName("x2_off").active = true;
              _this16.ruber.getChildByName("free").getChildByName("x3_off").active = true;
              _this16.ruber.getChildByName("free").getChildByName("x5_off").active = true;
              _this16.ruberBg.setAnimation(0, "free_lv1_light", false);
            }, 0.2);
          } else {
            this.ruberBg.setAnimation(0, "normal_lv1_fall", false);
            this.scheduleOnce(function () {
              _this16.ruber.getChildByName("normal").children.map(function (item) {
                item.active = false;
              });
              _this16.ruber.getChildByName("normal").getChildByName("x1").active = true;
              _this16.ruber.getChildByName("normal").getChildByName("x2_off").active = true;
              _this16.ruber.getChildByName("normal").getChildByName("x3_off").active = true;
              _this16.ruber.getChildByName("normal").getChildByName("x5_off").active = true;
              _this16.ruberBg.setAnimation(0, "normal_lv1_light", false);
            }, 0.2);
          }
        }
        //船长倍数效果展示
        ;

        _proto.aniGun = function aniGun() {
          var _this17 = this;
          CaptainDef.palyAudio(CaptainDef.audio.woodenWheel);
          if (this._isFree) {
            if (this._resultIndex == 1) {
              CaptainDef.palyAudio(CaptainDef.audio.voxBonusSmall01);
            } else if (this._resultIndex == 2) {
              CaptainDef.palyAudio(CaptainDef.audio.voxBonusSmall01);
            } else if (this._resultIndex == 3) {
              CaptainDef.palyAudio(CaptainDef.audio.voxBonusBig01);
            } else {
              CaptainDef.palyAudio(CaptainDef.audio.voxBonusBig02);
            }
            this.free_captain.setAnimation(0, "win1", false);
            this.free_captain.addAnimation(0, "idle", true);
          } else {
            if (this._resultIndex == 1) {
              CaptainDef.palyAudio(CaptainDef.audio.voxMgSmall01);
            } else if (this._resultIndex == 2) {
              CaptainDef.palyAudio(CaptainDef.audio.voxMgSmall02);
            } else if (this._resultIndex == 3) {
              CaptainDef.palyAudio(CaptainDef.audio.voxMgBig01);
            } else {
              CaptainDef.palyAudio(CaptainDef.audio.voxMgBig02);
            }
            this.captain.setAnimation(0, "win1", false);
            this.captain.addAnimation(0, "idle", true);
          }
          this.scheduleOnce(function () {
            if (_this17._isFree) {
              //this.free_captain.setAnimation(0, "idle", true);

              _this17.ruber.getChildByName("free").children.map(function (item) {
                item.active = false;
              });
              if (_this17._resultIndex == 1) {
                _this17.ruberBg.setAnimation(0, "free_lv2_up", false);
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp1);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "free_lv2_light", false);
                  _this17.ruber.getChildByName("free").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x2").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x3_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x5_off").active = true;
                }, 0.2);
              } else if (_this17._resultIndex == 2) {
                _this17.ruberBg.setAnimation(0, "free_lv3_up", false);
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp2);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "free_lv3_light", false);
                  _this17.ruber.getChildByName("free").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x2_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x3").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x5_off").active = true;
                }, 0.2);
              } else {
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp3);
                _this17.ruberBg.setAnimation(0, "free_lv4_up", false);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "free_lv4_light", false);
                  _this17.ruber.getChildByName("free").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x2_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x3_off").active = true;
                  _this17.ruber.getChildByName("free").getChildByName("x5").active = true;
                }, 0.2);
              }
            } else {
              //this.captain.setAnimation(0, "idle", true);

              _this17.ruber.getChildByName("normal").children.map(function (item) {
                item.active = false;
              });
              if (_this17._resultIndex == 1) {
                _this17.ruberBg.setAnimation(0, "normal_lv2_up", false);
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp1);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "normal_lv2_light", false);
                  _this17.ruber.getChildByName("normal").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x2").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x3_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x5_off").active = true;
                }, 0.2);
              } else if (_this17._resultIndex == 2) {
                _this17.ruberBg.setAnimation(0, "normal_lv3_up", false);
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp2);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "normal_lv3_light", false);
                  _this17.ruber.getChildByName("normal").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x2_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x3").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x5_off").active = true;
                }, 0.2);
              } else {
                _this17.ruberBg.setAnimation(0, "normal_lv4_up", false);
                CaptainDef.palyAudio(CaptainDef.audio.LevelUp3);
                _this17.scheduleOnce(function () {
                  _this17.ruberBg.setAnimation(0, "normal_lv4_light", false);
                  _this17.ruber.getChildByName("normal").getChildByName("x1_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x2_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x3_off").active = true;
                  _this17.ruber.getChildByName("normal").getChildByName("x5").active = true;
                }, 0.2);
              }
            }
          }, 0);
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          this.txt_win.reset();
          CaptainProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this.turn_node_spineMask.active = false;
          this.notice_content.active = true;
          this.notice_gain_all.active = false;
          this.notice_gain_one.active = false;
          // this.node_totalGain.active = false;
          this.notice_gain_all_txt.reset();
          this.notice_bg.setAnimation(0, "normal_idle", true);
          this._resultIndex = 0;

          // this.bigWinBgClickIndex = 0;
          // //this.changeSpecialNotice();
        }
        //下单接口调用
        ;

        _proto.sendBet = function sendBet() {
          // CaptainProxy.result = {
          //     FreeInfo: {
          //         Count: 0,
          //         Multiple: 1,
          //         TotalCount: 0,
          //     },
          //     Res: [{
          //         ExtraOdd: 1,
          //         PosMsg: [9, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 9, 5, 9, 2],
          //         RewardLines: null,
          //         RewardMoney: 0,
          //         RewardPos: null
          //     },]
          // }
          // CaptainProxy.result = {
          //     FreeInfo: {
          //         Count: 0,
          //         Multiple: 1,
          //         TotalCount: 0,
          //         TotalPrizeAmount: 10650,
          //     },
          //     Res: [{
          //         ExtraOdd: 1,
          //         PosMsg: [6, 4, 5, 5, 6, 5, 6, 5, 5, 3, 7, 1, 8, 5, 2],
          //         RewardLines: { 5: 3, 12: 3, 17: 4 },
          //         RewardMoney: 3400,
          //         RewardPos: [0, 6, 12]
          //     }, {
          //         ExtraOdd: 1,
          //         PosMsg: [7, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
          //         RewardLines: { 5: 3, 12: 3, 17: 4 },
          //         RewardMoney: 2000,
          //         RewardPos: [0]
          //     }, {
          //         ExtraOdd: 1,
          //         PosMsg: [3, 3, 4, 5, 6, 5, 4, 5, 5, 3, 7, 1, 5, 5, 2],
          //         RewardLines: null,
          //         RewardMoney: 0,
          //         RewardPos: null
          //     },]
          // }
          // CaptainProxy.result.prizeAmount = 0;
          // for (let item of CaptainProxy.result.Res) {
          //     CaptainProxy.result.prizeAmount += item.RewardMoney;
          // }
          // this.runStart();

          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotCaptain.bet, {
            betAmount: this._bet
          });
        }

        //底部按钮和金额样式修改
        ;

        _proto.changeBtnActive = function changeBtnActive(b) {
          if (this._auto) {
            return;
          }
          if (b) {
            //this.normal_btnBox.getChildByName("btn1").getComponent(cc.UIOpacity).opacity = 255;
            if (CaptainProxy.getBet() == 2000) {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
              this._isMinBet = true;
            } else {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
            this.normal_btnBox.getChildByName("btn4").getComponent(UIOpacity).opacity = 255;
          } else {
            //this.normal_btnBox.getChildByName("btn1").getComponent(cc.UIOpacity).opacity = 100;
            this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 100;
            this.normal_btnBox.getChildByName("btn4").getComponent(UIOpacity).opacity = 100;
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
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this18 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_spine_start.setAnimation(0, "star", false);
            this.scheduleOnce(function () {
              if (CaptainProxy.result) {
                if (CaptainProxy.result.prizeAmount > 0) {
                  _this18.turn_spine_start.addAnimation(0, "stop", true);
                } else {
                  _this18.turn_spine_start.addAnimation(0, "idle", true);
                }
              }
            }, 0.6);
          } else {
            //this.turn_spine_start.setAnimation(0, "idle", true);
            this.scheduleOnce(function () {
              _this18.turn_spine_start.setAnimation(0, "idle", true);
            }, GAIN_TIME + 0.1);
          }
        }

        //公告滚动
        ;

        _proto.updateNotice = function updateNotice(dt) {
          this._noticeDelay -= dt;
          if (this._noticeDelay < 0) this.notice_title.setPosition(this.notice_title.position.x - 1.5, this.notice_title.position.y);
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 - 233) {
            this.changeNotice();
          }
        }
        //公告
        ;

        _proto.changeNotice = function changeNotice() {
          this._noticeDelay = 2;
          this._noticeIndex++;
          if (this._noticeIndex >= this.notice_frames.length) {
            this._noticeIndex = 0;
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.notice_frames[this._noticeIndex];
          var x = this.notice_title.getComponent(UITransform).width / 2 > 233 ? this.notice_title.getComponent(UITransform).width / 2 - 233 : 0;
          this.notice_title.setPosition(x, this.notice_title.position.y);
        }

        //隐藏icon提示
        ;

        _proto.clickHideWindow = function clickHideWindow() {
          this.turn_node_spineMask.active = false;
          this._window.onClick();
        }

        //获取总金额
        ;

        _proto.updateGoldData = function updateGoldData(used) {
          if (used === void 0) {
            used = 0;
          }
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          this.txt_goldFree.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
        }

        //获取下注金额
        ;

        _proto.updateSetData = function updateSetData() {
          this._bet = CaptainProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet);
          this.txt_betFree.string = Common.numFormat(this._bet);
          //this.updateBetBtn(true);
        }

        //是否启动加速
        ;

        _proto.clickChangeQuick = function clickChangeQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
            this.spine_quick.setAnimation(0, "off", true);
          } else {
            this._runDelay = 0;
            this.spine_quick.setAnimation(0, "intro_on", false);
            this.spine_quick.addAnimation(0, "on", true);
          }
        }

        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (!this.checkReady()) return;
          CaptainProxy._curBetCount--;
          if (CaptainProxy._curBetCount < 0) {
            CaptainProxy._curBetListIndex--;
            if (CaptainProxy._curBetListIndex < 0) {
              CaptainProxy._curBetListIndex++;
              CaptainProxy._curBetCount++;
            } else {
              CaptainProxy._curBetCount = CaptainProxy.betMaxCount - 1;
              CaptainProxy.setBet(CaptainProxy._curBetListIndex, CaptainProxy._curBetCount);
            }
          } else {
            CaptainProxy.setBet(CaptainProxy._curBetListIndex, CaptainProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          CaptainProxy._curBetCount++;
          if (CaptainProxy._curBetCount >= CaptainProxy.betMaxCount) {
            CaptainProxy._curBetListIndex++;
            if (CaptainProxy._curBetListIndex >= CaptainProxy.betList.length) {
              CaptainProxy._curBetListIndex--;
              CaptainProxy._curBetCount--;
            } else {
              CaptainProxy._curBetCount = 0;
              CaptainProxy.setBet(CaptainProxy._curBetListIndex, CaptainProxy._curBetCount);
            }
          } else {
            CaptainProxy.setBet(CaptainProxy._curBetListIndex, CaptainProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (CaptainProxy.getBet() == 2000) {
            this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
            this._isMinBet = true;
          } else {
            this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (CaptainProxy.getBet() == 1000000) {
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 100;
          } else {
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
          }
        }

        //展示自动下注弹出框
        ;

        _proto.clickShowAutoBet = function clickShowAutoBet(sender) {
          var _this19 = this;
          if (this._auto) return;
          if (this._lock) return;
          if (sender.isChecked) {
            sender.isChecked = false;
            return;
          }
          sender.isChecked = true;
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
              bet: _this19._bet,
              win: 0
            });
          }, true);
        }
        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this._auto = true;
            this.turn_spine_start.setAnimation(0, "auto", true);
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
          } else {
            this._auto = false;
            this.turn_spine_start.setAnimation(0, "idle", true);
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
          }
          //this.updateBetBtn(times == 0);

          this.turn_auto_leftCount.node.active = this._auto;
          if (this._state == RunState.AWARD_LINES && this._auto) {
            this.changeState(RunState.NORMAL);
          }
        };
        _proto.checkAuto = function checkAuto() {
          if (this._isFree) return;
          if (this.freeLock) return;
          if (this._auto) {
            this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 100;
            this.normal_btnBox.getChildByName("btn4").getComponent(UIOpacity).opacity = 100;
            this._autoTimes--;
            this.turn_auto_leftCount.string = "" + this._autoTimes;
            if (this._autoTimes <= 0) {
              this.setAuto(0);
            }
          } else {
            if (CaptainProxy.getBet() == 2000) {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 100;
              this._isMinBet = true;
            } else {
              this.normal_btnBox.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            this.normal_btnBox.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
            this.normal_btnBox.getChildByName("btn4").getComponent(UIOpacity).opacity = 255;
          }
        }

        //展示下注金额
        ;

        _proto.clickShowBet = function clickShowBet() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBase", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: CaptainProxy._curBetListIndex,
              _curBetCount: CaptainProxy._curBetCount,
              betMaxCount: CaptainProxy.betMaxCount,
              betList: CaptainProxy.betList,
              betRate: CaptainProxy.betRate
            });
          }, true);
        }

        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          Common.loadPopBuddle("prefab/CaptainHelp", CaptainProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(750 / 1334, 750 / 1334, 1));
            } else {
              node.angle = 90;
            }
          }, true);
        }
        //展示历史记录
        ;

        _proto.clickShowHistory = function clickShowHistory() {
          if (this._auto) return;
          if (!this.checkReady()) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotCaptainBounty");
          }, true);
          // Common.loadPopBuddle(
          //     "prefab/CaptainHistory",
          //     CaptainProxy.bundle,
          //     () => { },
          //     (prefab) => {
          //         let node = cc.instantiate(prefab);
          //         ViewManager.instance.popNodeView(node, true);

          //         if (!cc.sys.isMobile) {
          //             node.setScale(v3(750 / 1334, 750 / 1334, 1));
          //         } else {
          //             node.angle = 90;
          //         }
          //     },
          //     true
          // );
        }

        //展示排行榜
        ;

        _proto.clickShowRank = function clickShowRank() {
          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotCaptainBounty");
          }, true);
          // Common.loadPopBuddle(
          //     "prefab/CaptainRank",
          //     CaptainProxy.bundle,
          //     () => { },
          //     (prefab) => {
          //         let node = cc.instantiate(prefab);
          //         ViewManager.instance.popNodeView(node, true);

          //         if (!cc.sys.isMobile) {
          //             node.setScale(v3(750 / 1334, 750 / 1334, 1));
          //         } else {
          //             node.angle = 90;
          //         }
          //     },
          //     true
          // );
        }

        //底部展示更多按钮
        ;

        _proto.clickBottomShowMoreBtn = function clickBottomShowMoreBtn() {
          this.normal_btnBox.active = false;
          this.more_btnBox.active = true;
        }
        //底部隐藏更多按钮
        ;

        _proto.clickBottomHideMoreBtn = function clickBottomHideMoreBtn() {
          this.normal_btnBox.active = true;
          this.more_btnBox.active = false;
        }
        //底部返回首页
        ;

        _proto.clickBottomBackHome = function clickBottomBackHome() {
          Common.returnToHall(this, CaptainProxy.BUNDLE);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          EventManager.off(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.off(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.off(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
          EventManager.off(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        };
        return CaptainView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normal_btnBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "more_btnBox", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab_winItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "captain", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ruber", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ruberBg", [_dec8], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "notice_content", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "notice_gain_one", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "notice_gain_one_txt", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "notice_gain_all", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "notice_gain_all_txt", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "notice_txt_odds", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "turn_bg_list", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "turn_bg", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "turn_prefab_window", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "turn_node_line", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "turn_aniLines", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "turn_node_spineParent", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "turn_node_spineMask", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "turn_spine_start", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "turn_spine_smokes", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "turn_spine_smokes1", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "turn_bottomIntro", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "bigwin_bg", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "bigwin_sp", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "bigwin_txt", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "free_start", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "free_start_intro", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "free_start_time", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "free_win", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "free_win_intro", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "free_winTxt", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "free_winBtn", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom_introl", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "free_bottom_time", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "free_bg", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "free_bg1", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "free_captain", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "free_add", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "free_add_time", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "spine_quick", [_dec54], {
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

System.register("chunks:///_virtual/CaptainWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CaptainDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Label, Node, Component, CaptainDef;
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
      CaptainDef = module.CaptainDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "8cc5cv8P5xFlJLlFiFJNZtF", "CaptainWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CaptainWindow = exports('default', (_dec = ccclass("CaptainWindow"), _dec2 = menu("game/Captain/CaptainWindow"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.SkeletonData), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainWindow, _Component);
        function CaptainWindow() {
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
        var _proto = CaptainWindow.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2.onClick();
          });
        };
        _proto.showIndex = function showIndex(index) {
          this.node_odd.active = index < 7;
          this.node_wild.active = index == 7;
          this.node_scatter.active = index == 8;
          var odd = CaptainDef.odds[index];
          if (odd) {
            for (var i = 0; i < 3; i++) {
              this.txt_odds[i].string = odd[i] + "";
            }
          }
          this.spine_normal.skeletonData = this.spines[index];
          this.spine_normal.node.active = true;
          if (index == 7 || index == 8) {
            this.spine_normal.setAnimation(0, "idle", true);
          } else {
            this.spine_normal.setAnimation(0, "<None>", false);
          }
        };
        _proto.onClick = function onClick() {
          this.node.active = false;
        };
        return CaptainWindow;
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

System.register("chunks:///_virtual/CaptainWinItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './CaptainProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, UITransform, v3, Component, CaptainProxy, CaptainGameEvent;
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
      CaptainProxy = module.default;
      CaptainGameEvent = module.CaptainGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "cec796lvcdDDK39aL5wFOpk", "CaptainWinItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var CaptainWinItem = exports('default', (_dec = ccclass("CaptainWinItem"), _dec2 = menu("game/Captain/CaptainWinItem"), _dec3 = property(sp.Skeleton), _dec4 = property(sp.Skeleton), _dec5 = property(sp.SkeletonData), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CaptainWinItem, _Component);
        function CaptainWinItem() {
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
        var _proto = CaptainWinItem.prototype;
        _proto.onLoad = function onLoad() {
          //this.spine_bg.node.active = false
        };
        _proto.showResult = function showResult(result, big) {
          this._index = result;
          this.spine_normal.node.active = true;
          this.spine_normal.skeletonData = this.spines[result];
          this.spine_bg.addAnimation(0, "idle", true);
          this.spine_normal.setAnimation(0, "win", true);
          this.showSpawn();
        };
        _proto.showSpawn = function showSpawn() {
          var _this2 = this;
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
          CaptainProxy.emit(CaptainGameEvent.CLICK_ITEM, {
            index: this._index,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return CaptainWinItem;
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
  r('virtual:///prerequisite-imports/CaptainGame', 'chunks:///_virtual/CaptainGame'); 
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