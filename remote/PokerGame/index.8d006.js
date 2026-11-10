System.register("chunks:///_virtual/PokerBetItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './PokerProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Common, PokerGameProxy, PokerGameEvent;
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
      PokerGameProxy = module.default;
      PokerGameEvent = module.PokerGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "76be3SKyyZKsqdomcHCmJ4S", "PokerBetItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PokerBetItem = exports('default', (_dec = ccclass("PokerBetItem"), _dec2 = menu("game/PokerGame/PokerBetItem"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerBetItem, _Component);
        function PokerBetItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_bet", _descriptor, _assertThisInitialized(_this));
          _this._count = 0;
          return _this;
        }
        var _proto = PokerBetItem.prototype;
        _proto.onClickBet = function onClickBet() {
          PokerGameProxy.emit(PokerGameEvent.SELECT_BET, this._count);
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
        return PokerBetItem;
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

System.register("chunks:///_virtual/PokerCardAni.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerDef.ts', './PokerItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Prefab, Node, NodePool, instantiate, tween, v3, Component, PokerDef, PokerItem;
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
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      PokerDef = module.PokerDef;
    }, function (module) {
      PokerItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ef530iFBmNLzo7xUBwpuhrl", "PokerCardAni", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var POINTS = [280, 93, -93, -280];
      var PokerCardAni = exports('default', (_dec = ccclass("PokerCardAni"), _dec2 = menu("game/PokerGame/PokerCardAni"), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerCardAni, _Component);
        function PokerCardAni() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_poker", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_cards", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_anis", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_highLight", _descriptor4, _assertThisInitialized(_this));
          _this._index = void 0;
          _this.cards = void 0;
          _this._pokerPool = void 0;
          return _this;
        }
        var _proto = PokerCardAni.prototype;
        _proto.onLoad = function onLoad() {
          //        /** 初始化数据管理器 */
          this.initEvent();
          this._pokerPool = new NodePool(PokerItem);
          this.cards = [];
          for (var i = 0; i < 4; i++) {
            var node = instantiate(this.pre_poker);
            node.active = false;
            node.setPosition(node.position.x, POINTS[i]);
            this.node_cards.addChild(node);
            this.cards.push(node.getComponent(PokerItem));
          }
        };
        _proto.getPoker = function getPoker(data) {
          if (this._pokerPool.size() > 1) {
            return this._pokerPool.get(data);
          }
          var node = instantiate(this.pre_poker);
          node.getComponent(PokerItem).setData(data);
          return node;
        };
        _proto.setData = function setData(data) {
          this._index = data.index;
          //        // this.cards = data.cards;
        };

        _proto.initCard = function initCard(datas) {
          var _this2 = this;
          if (datas === void 0) {
            datas = [];
          }
          var _loop = function _loop(i) {
            var data = datas[i];
            if (!data) return 1; // continue
            if (data.type > 1 && data.isJoker) {
              _this2.cards[i].setData(data);
              _this2.cards[i].node.active = true;
            } else {
              var node = _this2.getPoker(data);
              _this2.node_anis.addChild(node);
              node.setPosition(node.position.x, 460);
              _this2.cards[i].setData(data);
              tween(node).delay((3 - i) * 0.05).to(0.2, {
                position: v3(node.position.x, POINTS[i])
              }).call(function () {
                _this2._pokerPool.put(node);
                _this2.cards[i].node.active = true;
              }).start();
            }
          };
          for (var i = 3; i >= 0; i--) {
            if (_loop(i)) continue;
          }
        };
        _proto.run = function run(datas, highLight) {
          var _this3 = this;
          if (datas === void 0) {
            datas = [];
          }
          if (highLight === void 0) {
            highLight = false;
          }
          tween(this.node_cards).to(0.2, {
            position: v3(this.node_cards.position.x, -720)
          }).call(function () {
            var children = _this3.node_cards.children;
            for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
              var child = _step.value;
              child.active = false;
            }
            _this3.initCard(datas);
            _this3.node_cards.setPosition(_this3.node_cards.position.x, 0);
          }).start();
          this.node_highLight.active = highLight;
          if (highLight) {
            this.scheduleOnce(function () {
              _this3.node_highLight.active = false;
            }, 0.5);
            PokerDef.palyAudio(PokerDef.audio.SCATTER_LIGHT);
          }
        };
        _proto.runNext = function runNext(datas) {
          if (datas === void 0) {
            datas = [];
          }
          var moveCount = 4;
          for (var i = 0; i < 4; i++) {
            if (this.cards[i].node.active) {
              datas[i] = null;
              moveCount--;
            }
          }
          this.initCard(datas);
          return moveCount;
        };
        _proto.initEvent = function initEvent() {};
        _proto.removeEvent = function removeEvent() {};
        _proto.onDestroy = function onDestroy() {
          this.removeEvent();
          this._pokerPool.clear();
        };
        _proto.show = function show() {};
        _proto.hide = function hide(index) {
          this.cards[index].node.active = false;
        };
        _proto.getCard = function getCard(index) {
          return this.cards[index].node;
        };
        _proto.changeToJoker = function changeToJoker(index) {
          this.cards[index].changeToJoker();
        };
        _proto.update = function update(dt) {};
        return PokerCardAni;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_poker", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_cards", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_anis", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_highLight", [_dec6], {
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

System.register("chunks:///_virtual/PokerDef.ts", ['cc', './AudioManager.ts', './PokerProxy.ts'], function (exports) {
  var cclegacy, AudioClip, AudioManager, PokerGameProxy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      PokerGameProxy = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0af77QGMfBCXri+PbzQ8Mwv", "PokerDef", undefined);
      var PokerDef = exports('PokerDef', /*#__PURE__*/function () {
        function PokerDef() {}
        PokerDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = PokerGameProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            var soundId = AudioManager.instance.playSound(audio);
            if (call) {
              call(soundId);
            }
          });
        };
        PokerDef.palyMusic = function palyMusic(name) {
          var bundle = PokerGameProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        PokerDef.init = function init() {};
        return PokerDef;
      }());
      PokerDef.audio = {
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
        WILD_TURN: "wildturn",
        BLING: "bling",
        SCATTER_LIGHT: "scatterLight",
        WILD_CLIP: "wildclip"
      };
      PokerDef.tryGold = 100;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerGame", ['./PokerBetItem.ts', './PokerCardAni.ts', './PokerDef.ts', './PokerHelp.ts', './PokerItem.ts', './PokerProxy.ts', './PokerRecord.ts', './PokerRecordItem.ts', './PokerRoom.ts', './PokerScene.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PokerHelp.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "13871NoI0xHw53qDYZxoudK", "PokerHelp", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PokerHelp = exports('default', (_dec = ccclass("PokerHelp"), _dec2 = menu("game/PokerGame/PokerHelp"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerHelp, _Component);
        function PokerHelp() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = PokerHelp.prototype;
        _proto.onClickClose = function onClickClose() {
          this.node.removeFromParent();
          this.node.destroy();
        };
        return PokerHelp;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './PokerDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Node, sp, SpriteFrame, isValid, Component, PokerDef;
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
      isValid = module.isValid;
      Component = module.Component;
    }, function (module) {
      PokerDef = module.PokerDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "916d4u2trZGZaXjGEZO64JO", "PokerItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var PokerItem = exports('default', (_dec = ccclass("PokerItem"), _dec2 = menu("game/PokerGame/PokerItem"), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Node), _dec6 = property(sp.Skeleton), _dec7 = property(SpriteFrame), _dec8 = property(sp.SkeletonData), _dec9 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerItem, _Component);
        function PokerItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconFrames", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spineDatas", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgFrames", _descriptor7, _assertThisInitialized(_this));
          _this._data = void 0;
          return _this;
        }
        var _proto = PokerItem.prototype;
        _proto.setData = function setData(data) {
          this._data = data;
          this.updateImg();
        };
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          if (this._data) {
            this.updateImg();
          }
        };
        _proto.reuse = function reuse(data) {
          data = data[0];
          this.node.active = true;
          this.setData(data);
        };
        _proto.unuse = function unuse() {
          this.node.active = false;
        };
        _proto.updateImg = function updateImg() {
          var _this2 = this;
          if (!isValid(this.node)) return;
          if (this._data.bonusSymbol == 1) {
            this.node_bg.active = false;
            this.spine.node.active = true;
            this.spine.skeletonData = this.spineDatas[1];
            this.scheduleOnce(function () {
              _this2.spine.setAnimation(0, "idle", true);
            });
          } else if (this._data.type > 1 && this._data.isJoker) {
            this.node_bg.active = true;
            this.spine.node.active = false;
            this.sprite_icon.spriteFrame = this.iconFrames[0];
            this.scheduleOnce(function () {
              var types = ["bluewild_", "redwild_"];
              var name = types[_this2._data.type - 3];
              if (_this2.spine.node) {
                _this2.node_bg.active = false;
                _this2.spine.node.active = true;
                var spine = _this2.spine;
                spine.skeletonData = _this2.spineDatas[2];
                spine.setAnimation(0, name + "fan", false);
                PokerDef.palyAudio(PokerDef.audio.WILD_TURN);
              }
            }, 0.3);
          } else if (this._data.type > 0) {
            this.node_bg.active = true;
            this.spine.node.active = true;
            this.sprite_bg.spriteFrame = this.bgFrames[1];
            this.sprite_icon.spriteFrame = this.iconFrames[this._data.bonusSymbol];
            this.spine.skeletonData = this.spineDatas[0];
            this.spine.setAnimation(0, "goldlight", false);
          } else {
            this.node_bg.active = true;
            this.spine.node.active = false;
            this.sprite_bg.spriteFrame = this.bgFrames[0];
            if (this._data.bonusSymbol) this.sprite_icon.spriteFrame = this.iconFrames[this._data.bonusSymbol];
          }
        };
        _proto.changeToJoker = function changeToJoker() {
          var name = "redwild_";
          if (this.spine.node) {
            this.node_bg.active = false;
            this.spine.node.active = true;
            var spine = this.spine;
            spine.skeletonData = this.spineDatas[2];
            this.scheduleOnce(function () {
              spine.setAnimation(0, name + "p", false);
            });
          }
        };
        return PokerItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_icon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spine", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconFrames", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spineDatas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bgFrames", [_dec9], {
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

System.register("chunks:///_virtual/PokerProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "e8411kuDyZOgJnjl8NBvOTL", "PokerProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var PokerGameEvent = exports('PokerGameEvent', /*#__PURE__*/function (PokerGameEvent) {
        PokerGameEvent["ENTER_ROOM"] = "enterRoom";
        PokerGameEvent["LEAVE_ROOM"] = "leaveRoom";
        PokerGameEvent["UPDATE_CONFIG"] = "updateConfig";
        PokerGameEvent["UPDATE_BETLIST"] = "updateBetList";
        PokerGameEvent["CLOSE_BONUS"] = "closeBonus";
        PokerGameEvent["SELECT_BET"] = "selectBet";
        PokerGameEvent["SEND_RESULT"] = "sendResult";
        return PokerGameEvent;
      }({}));

      /**
       * xiyou数据代理
       */
      var PokerGameProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(PokerGameProxyMgr, _ProxyBase);
        function PokerGameProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "PokerGame";
          _this.wsEvents = [ConfigManager.ProtocolPoker.bet, ConfigManager.ProtocolPoker.info];
          _this.auto = false;
          _this.result = null;
          _this.freeTotalWin = 0;
          _this.jackpotList = {};
          _this.betList = [];
          return _this;
        }
        var _proto = PokerGameProxyMgr.prototype;
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
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolPoker.info:
              {
                this.betList = data.Data.betList;
                this.emit(PokerGameEvent.UPDATE_BETLIST);
                if (data.Data.freeCount > 0) {
                  this.emit(PokerGameEvent.UPDATE_CONFIG, data.Data);
                }
                break;
              }
            case ConfigManager.ProtocolPoker.bet:
              {
                this.result = data.Data;
                this.emit(PokerGameEvent.SEND_RESULT);
              }
          }
        };
        _createClass(PokerGameProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return PokerGameProxyMgr;
      }(ProxyBase);
      var PokerGameProxy = exports('default', new PokerGameProxyMgr("PokerGameProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PokerRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "70a08U94YROTZmSOys3/PL2", "PokerRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var PokerRecord = exports('default', (_dec = ccclass("PokerRecord"), _dec2 = menu("game/PokerGame/PokerRecord"), _dec3 = property(gts.List), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRecord, _Component);
        function PokerRecord() {
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
          _this._gameType = "slotPoker";
          return _this;
        }
        var _proto = PokerRecord.prototype;
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
        return PokerRecord;
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

System.register("chunks:///_virtual/PokerRecordItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "93ebc5l299OOaoPypVwyTjl", "PokerRecordItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var FestivalRecordItem = exports('default', (_dec = ccclass("PokerRecordItem"), _dec2 = menu("game/FestivalGame/FestivalRecordItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          this.Label_bet.string = Common.ChangeMoneyShow(tempData.BetAmount, 3);
          var str = "";
          if (tempData.Income > 0) {
            str = "+" + Common.ChangeMoneyShow(tempData.Income, 3);
            this.Label_win.color = color(255, 0, 0, 255);
          } else if (tempData.Income <= 0) {
            str = "" + Common.ChangeMoneyShow(tempData.Income, 2);
            this.Label_win.color = color(0x68, 0xf5, 0x01, 255);
          }
          this.Label_win.string = str;
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

System.register("chunks:///_virtual/PokerRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './GUtil.ts', './AudioManager.ts', './DataManager.ts', './NetManager.ts', './ScrollNumLabel.ts', './PokerBetItem.ts', './PokerCardAni.ts', './PokerDef.ts', './PokerProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _extends, cclegacy, _decorator, sp, Label, Node, Prefab, instantiate, sys, UITransform, v3, UIOpacity, tween, Tween, Component, isValid, i18n, ProxyMgr, GUtil, AudioManager, DataManager, UserKey, NetManager, ScrollNumLabel, PokerBetItem, PokerCardAni, PokerDef, PokerGameProxy, PokerGameEvent, Common, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sp = module.sp;
      Label = module.Label;
      Node = module.Node;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      sys = module.sys;
      UITransform = module.UITransform;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
      isValid = module.isValid;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      PokerBetItem = module.default;
    }, function (module) {
      PokerCardAni = module.default;
    }, function (module) {
      PokerDef = module.PokerDef;
    }, function (module) {
      PokerGameProxy = module.default;
      PokerGameEvent = module.PokerGameEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;
      cclegacy._RF.push({}, "aa53816/91MSroc84syl1nr", "PokerRoom", undefined);
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
        BIG_WIN: 4,
        FREE_WIN: 5,
        WAIT: 6
      };
      var RUN_TIME = 0.8;
      var AWARD_TIME = 2;
      var WAIT_TIME = 1;
      var FREE_TIME = 15;
      var BIG_WIN_TIME1 = 4;
      var BIG_WIN_TIME2 = 8;
      var BIG_WIN_TIME3 = 12;
      var PokerRoom = exports('default', (_dec = ccclass("PokerRoom"), _dec2 = menu("game/PokerGame/PokerRoom"), _dec3 = property(sp.SkeletonData), _dec4 = property(PokerCardAni), _dec5 = property(Label), _dec6 = property(ScrollNumLabel), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(ScrollNumLabel), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Prefab), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(sp.Skeleton), _dec29 = property(ScrollNumLabel), _dec30 = property(Node), _dec31 = property(sp.Skeleton), _dec32 = property(sp.Skeleton), _dec33 = property(Label), _dec34 = property(Prefab), _dec35 = property(Node), _dec36 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerRoom, _Component);
        function PokerRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "spines", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniLines", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineMask", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_spineParent", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_menu", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_titleFree", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeCount", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_freeBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeTime", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_freeTimeSpin", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_freeEnd", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_total", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betSelect", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_bet", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_headNormal", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_headFree", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_perNormal", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_perFree", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_start", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_bigWin", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bigwin", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bigwin", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_fapai", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sp_combo", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_combo", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_joker", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_jokerParent", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pre_cardAni", _descriptor34, _assertThisInitialized(_this));
          _this._runDelay = 0.1;
          _this._runTime = RUN_TIME;
          _this._state = RunState.NORMAL;
          _this._lock = false;
          _this._bet = 0;
          _this._auto = false;
          _this._try = false;
          //    // lines = [];
          _this._showLineIndex = 0;
          _this._errCount = 0;
          _this._isFree = false;
          _this.freeLock = false;
          _this.freeTimeLeft = 0;
          //免费倒计时
          _this._runIndex = 0;
          _this._bigWinSoundId = 0;
          _this.betPending = false;
          _this.betAttempt = 0;
          _this.cancelBet = null;
          return _this;
        }
        var _proto = PokerRoom.prototype;
        _proto.onLoad = function onLoad() {
          this.setData(1000);
          this.init();
          this.clear();
          this.initEvent();
        };
        _proto.init = function init() {
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolPoker.info, {});
        };
        _proto.start = function start() {
          this.updateGold();
          this.changeBtnActive(true);
          this.loadAni();
        };
        _proto.loadAni = function loadAni() {
          var _this2 = this;
          this.aniLines = [];
          var posarr = [-292, -146, 0, 146, 292];
          for (var i = 0; i < 5; i++) {
            var node = instantiate(this.pre_cardAni);
            this.node_jokerParent.addChild(node);
            node.setPosition(posarr[i], node.position.y);
            this.aniLines.push(node.getComponent(PokerCardAni));
          }
          var _loop = function _loop(_i) {
            _this2.aniLines[_i].setData({
              index: _i
            });
            _this2.scheduleOnce(function () {
              _this2.aniLines[_i].initCard([{
                bonusSymbol: 2,
                type: 0
              }, {
                bonusSymbol: 2,
                type: 1
              }, {
                bonusSymbol: 2,
                type: 3,
                isJoker: true
              }, {
                bonusSymbol: 2,
                type: 4,
                isJoker: true
              }]);
            }, _i * 0.1);
          };
          for (var _i = 0; _i < this.aniLines.length; _i++) {
            _loop(_i);
          }
          PokerDef.palyAudio(PokerDef.audio.WILD);
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
        _proto.showSpine = function showSpine(index, result) {
          var child = this.node_spineParent.getChildByName("spine" + index);
          var skIndex = 2;
          var types = ["normal_idle", "gold_idle"];
          var icon = ["mh", "hx", "ht", "fk", "a", "k", "q", "j"];
          var name = "";
          if (result.bonusSymbol == 1) {
            if (child) {
              child.active = true;
              var spine = child.getComponent(sp.Skeleton);
              spine.skeletonData = this.spines[0];
              spine.setAnimation(0, "win", true);
            }
          } else if (result.type < 2) {
            name = icon[result.bonusSymbol - 2] + "_" + types[result.type];
            if (child) {
              child.active = true;
              var _spine = child.getComponent(sp.Skeleton);
              _spine.skeletonData = this.spines[skIndex];
              _spine.setAnimation(0, name, false);
              _spine.addAnimation(0, "end", false);
            }
          } else {
            skIndex = 1;
            var _types = ["bluewild_", "redwild_"];
            name = _types[result.type - 3];
            if (child) {
              child.active = true;
              var _spine2 = child.getComponent(sp.Skeleton);
              _spine2.skeletonData = this.spines[skIndex];
              _spine2.setAnimation(0, name + "idle", false);
            }
          }

          //        //隐藏对应图片
          var a = Math.floor(index / 5);
          var b = index % 5;
          this.aniLines[b].hide(a);
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          PokerGameProxy.on(PokerGameEvent.UPDATE_BETLIST, this.updateBetlist, this);
          PokerGameProxy.on(PokerGameEvent.UPDATE_CONFIG, function (data) {
            _this3.changeScene(true);
            var bet = data.freeBetAmount;
            _this3.txt_freeTimeSpin.string = "" + data.freeCount;
            _this3.txt_freeCount.string = "" + data.freeCount;
            _this3.setData(bet);
          }, this);
          PokerGameProxy.on(PokerGameEvent.SELECT_BET, function (count) {
            _this3.node_betSelect.active = false;
            _this3.setData(count);
          }, this);
          PokerGameProxy.on(PokerGameEvent.SEND_RESULT, function () {
            _this3.showResult();
          }, this);
        };
        _proto.updateBetlist = function updateBetlist() {
          this.node_bets.destroyAllChildren();
          for (var _iterator3 = _createForOfIteratorHelperLoose(PokerGameProxy.betList), _step3; !(_step3 = _iterator3()).done;) {
            var bet = _step3.value;
            var node = instantiate(this.pre_bet);
            this.node_bets.addChild(node);
            node.getComponent(PokerBetItem).setBet(bet);
          }
        };
        _proto.setData = function setData(betAmount) {
          if (this.betPending) return;
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
            this.txt_gold.string = Common.numFormat(PokerDef.tryGold + used);
          } else {
            this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          }
        };
        _proto.onClickBg = function onClickBg() {
          this.node_betSelect.active = false;
        };
        _proto.onClickSetting = function onClickSetting() {
          GUtil.openSetting();
        };
        _proto.onClickRecord = function onClickRecord() {
          var _this4 = this;
          Common.loadPopBuddle("prefab/PokerRecord", PokerGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            _this4.node.addChild(node);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          var _this5 = this;
          Common.loadPopBuddle("prefab/PokerHelp", PokerGameProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            _this5.node.addChild(node);
          }, true);
        };
        _proto.onClickBetList = function onClickBetList() {
          if (this._auto || this._isFree) {
            return;
          }
          this.node_betSelect.active = !this.node_betSelect.active;
        };
        _proto.onClickTryGame = function onClickTryGame() {
          this._try = true;
        };
        _proto.onClickAuto = function onClickAuto(sender) {
          PokerGameProxy.auto = !PokerGameProxy.auto;
          this._auto = !this._auto;
          this.onClickBg();
          var spine = sender.target.getComponent(sp.Skeleton);
          if (this._auto) {
            spine.setAnimation(0, "on", true);
          } else {
            spine.setAnimation(0, "off", true);
            //            // spine.addAnimation(0, "idle", true);
          }
        };

        _proto.onClickQuick = function onClickQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
          } else {
            this._runDelay = 0;
          }
        };
        _proto.onClickStart = function onClickStart() {
          if (this.freeLock) return;
          if (this._state == RunState.START || this._state == RunState.STOP) return;
          if (this._lock) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._try && gold < this._bet && !this._isFree) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this._auto = false;
            return;
          }
          PokerDef.palyAudio(PokerDef.audio.TURN);
          var multiple = 1;
          if (!this._isFree) this.updateGold(-this._bet * multiple);
          this.clear();
          this.changeBtnActive(false);
          this._state = RunState.START;
          this._runTime = RUN_TIME;
          this.sendBet();
        };
        _proto.sendBet = function sendBet() {
          var _this6 = this;
          if (this.betPending) return;
          this._errCount = 0;
          if (this._auto && !this._isFree) ;
          if (this._try) ;else {
            this.betPending = true;
            var attempt = ++this.betAttempt;
            var net = NetManager.instance;
            var session = net.hallSession();
            var finished = false;
            var current = function current() {
              return isValid(_this6, true) && attempt === _this6.betAttempt && session === net.hallSession();
            };
            var unknown = function unknown() {
              if (!current() || finished) return;
              finished = true;
              _this6.cancelBet = null;
              // 未确认结果不能证明服务端未扣注，保持锁定且不退款、不重发。
              _this6._auto = false;
              Common.showTip(i18n.lang.betResultUnknown, sys.isMobile);
            };
            try {
              var cancel = net.sendOnlineData(ConfigManager.ProtocolPoker.bet, {
                betAmount: this._bet + ""
              }, function (response) {
                if (!current() || finished) return false;
                if (!response || response.Code == 302 || response.Code == 401) {
                  unknown();
                  return false;
                }
                if (response.Code && response.Code != 0) {
                  finished = true;
                  _this6.betPending = false;
                  _this6.cancelBet = null;
                  _this6._auto = false;
                  _this6._state = RunState.NORMAL;
                  _this6.changeBtnActive(true);
                  _this6.updateGold();
                  Common.showTip(i18n.errTip(response.Code), sys.isMobile);
                  return false;
                }
                if (!response.Data || !Array.isArray(response.Data.openResult) || !response.Data.openResult.length) {
                  unknown();
                  return false;
                }
                finished = true;
                _this6.betPending = false;
                _this6.cancelBet = null;
                PokerGameProxy.recvData(_extends({}, response, {
                  cmd: ConfigManager.ProtocolPoker.bet
                }));
                return false;
              }, unknown);
              if (!finished) this.cancelBet = cancel || null;
            } catch (_) {
              unknown();
            }
          }
        };
        _proto.clear = function clear() {
          this.onClickBg();
          this.txt_total.node.active = false;
          this.txt_total.reset();
          this.txt_win.reset();
          this.txt_bigwin.reset();
          PokerGameProxy.result = null;
          this.hideLines();
          this.hideSpine();
          this._showLineIndex = 0;
          this._runIndex = 0;
          this.node_spineMask.active = false;
          this.showPerIndex(this._runIndex);
        };
        _proto.showPerIndex = function showPerIndex(index) {
          index = index > 3 ? 3 : index;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.node_perNormal), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            i.active = false;
          }
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.node_perFree), _step5; !(_step5 = _iterator5()).done;) {
            var _i2 = _step5.value;
            _i2.active = false;
          }
          this.node_perFree[index].active = true;
          this.node_perNormal[index].active = true;
        };
        _proto.getOpensByIndex = function getOpensByIndex(index) {
          var data = PokerGameProxy.result.openResult[index].openNums;
          var jokers = PokerGameProxy.result.openResult[index].joker;
          for (var _iterator6 = _createForOfIteratorHelperLoose(jokers), _step6; !(_step6 = _iterator6()).done;) {
            var item = _step6.value;
            data[item[0]]["isJoker"] = true;
          }
          for (var _iterator7 = _createForOfIteratorHelperLoose(data), _step7; !(_step7 = _iterator7()).done;) {
            var i = _step7.value;
            if (i.type == 3) {
              i["isJoker"] = true;
            }
          }
          return data;
        };
        _proto.showResult = function showResult() {
          var _this7 = this;
          if (!PokerGameProxy.result) {
            return;
          }
          var data = this.getOpensByIndex(0);
          var scatterCount = 0;
          var _loop2 = function _loop2(i) {
            var rand1 = data[i];
            var rand2 = data[i + 5];
            var rand3 = data[i + 10];
            var rand4 = data[i + 15];
            var highLight = false;
            if (scatterCount > 1) {
              highLight = true;
            }
            if (rand1.bonusSymbol == 1 || rand2.bonusSymbol == 1 || rand3.bonusSymbol == 1 || rand4.bonusSymbol == 1) {
              scatterCount++;
            }
            if (_this7._runDelay == 0) {
              _this7.sp_fapai[i].setAnimation(0, "idle", false);
              _this7.aniLines[i].run([rand1, rand2, rand3, rand4], highLight);
            } else {
              _this7.scheduleOnce(function () {
                _this7.sp_fapai[i].setAnimation(0, "idle", false);
                _this7.aniLines[i].run([rand1, rand2, rand3, rand4], highLight);
              }, i * _this7._runDelay);
            }
          };
          for (var i = 0; i < this.aniLines.length; i++) {
            _loop2(i);
          }
          this.scheduleOnce(this.runNext, 0.8 + this._runDelay * 4);

          //        // this.checkAward();
        };

        _proto.getJokerPosition = function getJokerPosition(fromIndex) {
          var a = Math.floor(fromIndex / 5);
          var b = fromIndex % 5;
          var node1 = this.aniLines[b].getCard(a);
          var p1 = node1.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0));
          var p = this.node_jokerParent.getComponent(UITransform).convertToNodeSpaceAR(p1);
          return p;
        };
        _proto.getJoker = function getJoker() {
          var node = instantiate(this.pre_joker);
          return node;
        };
        _proto.runJoker = function runJoker(jokers) {
          var _this8 = this;
          PokerDef.palyAudio(PokerDef.audio.WILD_CLIP);
          var _loop3 = function _loop3() {
            var item = _step8.value;
            if (item.length > 1) {
              var _loop4 = function _loop4(i) {
                var node = _this8.getJoker();
                var p1 = _this8.getJokerPosition(item[0]);
                var p2 = _this8.getJokerPosition(item[i]);
                _this8.node_jokerParent.addChild(node);
                node.setPosition(p1.x, p1.y);
                tween(node).to(0.2, {
                  position: v3(p2.x, p2.y)
                }).call(function () {
                  node.destroyFromParent();
                  var index = item[i];
                  var a = Math.floor(index / 5);
                  var b = index % 5;
                  _this8.aniLines[b].changeToJoker(a);
                }).start();
              };
              for (var i = 1; i < item.length; i++) {
                _loop4(i);
              }
            }
          };
          for (var _iterator8 = _createForOfIteratorHelperLoose(jokers), _step8; !(_step8 = _iterator8()).done;) {
            _loop3();
          }
        };
        _proto.runNext = function runNext() {
          var _this9 = this;
          var result = PokerGameProxy.result.openResult[this._runIndex];
          var nextTime = 1.6;
          var jokerTime = 0;
          if (result.joker && result.joker.length > 0) {
            jokerTime = 0.4;
            nextTime += jokerTime;
            this.runJoker(result.joker);
          }
          this.scheduleOnce(function () {
            _this9.showLines();
            _this9._runIndex++;
            if (PokerGameProxy.result.openResult.length <= _this9._runIndex) {
              _this9.checkAward();
            } else {
              _this9.scheduleOnce(function () {
                _this9.hideSpine();
                _this9.node_spineMask.active = false;
                var data = _this9.getOpensByIndex(_this9._runIndex);
                for (var i = 0; i < _this9.aniLines.length; i++) {
                  var rand1 = data[i];
                  var rand2 = data[i + 5];
                  var rand3 = data[i + 10];
                  var rand4 = data[i + 15];
                  var moveCount = _this9.aniLines[i].runNext([rand1, rand2, rand3, rand4]);
                  if (moveCount) {
                    _this9.sp_fapai[i].setAnimation(0, "idle", false);
                  }
                }
                _this9.scheduleOnce(_this9.runNext, 0.4 + _this9._runDelay * 4);
              }, nextTime);
            }
          }, jokerTime);
        };
        _proto.checkAward = function checkAward() {
          var _this10 = this;
          this.changeState(RunState.AWARD);
          if (PokerGameProxy.result.totalPrizeAmount > 0) {
            PokerGameProxy.freeTotalWin += this._isFree ? PokerGameProxy.result.totalPrizeAmount : 0;
          } else {
            this._runTime -= 1.2;
          }
          var result = PokerGameProxy.result.openResult[this._runIndex - 1];
          var openNums = result == null ? void 0 : result.openNums;
          if (openNums) {
            var scatterCount = 0;
            var scatters = [];
            for (var i = 0; i < openNums.length; i++) {
              if (openNums[i].bonusSymbol == 1) {
                scatterCount++;
                scatters.push(i);
              }
            }
            if (scatterCount >= 3) {
              for (var _iterator9 = _createForOfIteratorHelperLoose(scatters), _step9; !(_step9 = _iterator9()).done;) {
                var item = _step9.value;
                this.showSpine(item, {
                  bonusSymbol: 1
                });
              }
            }
          }
          if (PokerGameProxy.result.freeCount == 0) {
            if (this._isFree) {
              this.changeScene(false);
              this.Label_win.node.getComponent(UIOpacity).opacity = 255;
              var destWin = PokerGameProxy.freeTotalWin;
              var curWin = 0;
              var disWin = PokerGameProxy.freeTotalWin / 10;
              this.Node_freeEnd.active = true;
              tween(this.Label_win.node.getComponent(UIOpacity)).repeat(11, tween().delay(0.05).call(function () {
                curWin += disWin;
                if (curWin > destWin) {
                  curWin = destWin;
                }
                _this10.Label_win.string = Common.ChangeMoneyShow(curWin, 3);
              })).delay(2.0).to(0.2, {
                opacity: 0
              }).call(function () {
                _this10.Node_freeEnd.active = false;
                PokerGameProxy.freeTotalWin = 0;
              }).start();
            }
          } else {
            this.txt_freeCount.string = "" + PokerGameProxy.result.freeCount;
          }
          if (!PokerGameProxy.result.freePrize) {
            this.changeBtnActive(true);
          }
        };
        _proto.changeScene = function changeScene(isFree) {
          if (isFree === void 0) {
            isFree = false;
          }
          if (this._isFree == isFree) return;
          this._isFree = isFree;
          this.node_titleFree.active = isFree;
          this.node_headNormal.active = !isFree;
          this.node_headFree.active = isFree;
          if (isFree) {
            this.freeLock = true;
            this.freeTimeLeft = FREE_TIME;
            this.node_freeBg.active = true;
            this.freeTimeLeft = FREE_TIME;
          }
        };
        _proto.changeState = function changeState(state) {
          var _this11 = this;
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
                  _this11.showAward();
                }, 0.5);
                break;
              }
            case RunState.BIG_WIN:
              {
                this._state = RunState.BIG_WIN;
                this.node_bigwin.active = true;
                this._runTime = BIG_WIN_TIME1;
                var odd = PokerGameProxy.result.totalPrizeAmount / this._bet;
                var prizeAmount = PokerGameProxy.result.totalPrizeAmount;
                var aniname = "bigwin_intro";
                this.txt_bigwin.stepCount = 150;
                if (odd >= 50) {
                  aniname = "superwin_intro";
                  this.txt_bigwin.stepCount = 450;
                  this._runTime = BIG_WIN_TIME3;
                } else if (odd >= 35) {
                  aniname = "megawin_intro";
                  this.txt_bigwin.stepCount = 300;
                  this._runTime = BIG_WIN_TIME2;
                }
                this.txt_bigwin.string = Common.numFormat(prizeAmount);
                this.sp_bigWin.setAnimation(0, aniname, false);
                // this.sp_bigWin.setCompleteListener(() => {
                //     this.sp_bigWin.setCompleteListener(null);
                //     this.node_bigwin.active = false;
                //     this.txt_bigwin.reset();
                // });
                PokerDef.palyAudio(PokerDef.audio.BIGWIN, function (id) {
                  // let time = 12;
                  // if (odd >= 50) {
                  // } else if (odd >= 35) {
                  //     time = 7.3;
                  // } else {
                  //     time = 2.5;
                  // }
                  // this.scheduleOnce(() => {
                  //     AudioManager.instance.stopSound(id);
                  // }, time);
                  _this11._bigWinSoundId = id;
                });
                break;
              }
            case RunState.FREE_WIN:
              {
                if (PokerGameProxy.result.freePrize) {
                  this.showFreeLines();
                  this.changeScene(true);
                  this.txt_freeTimeSpin.string = "" + PokerGameProxy.result.freeCount;
                }
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
          this.txt_win.string = Common.numFormat(PokerGameProxy.result.totalPrizeAmount + "");
          if (PokerGameProxy.result.totalPrizeAmount > 0) {
            PokerDef.palyAudio(PokerDef.audio.AWARD1);
            var odd = PokerGameProxy.result.totalPrizeAmount / this._bet;
            if (odd >= 20) {
              this.changeState(RunState.BIG_WIN);
            }
          }
          this.updateGold();
          this.showPerIndex(0);
        };
        _proto.showWin = function showWin() {
          //        // this.spine_lion.setAnimation(0, "win", false);
          //        // this.spine_lion.addAnimation(0, "idle", true);
        };
        _proto.showLines = function showLines() {
          var _PokerGameProxy$resul,
            _this12 = this;
          var prizeInfo = (_PokerGameProxy$resul = PokerGameProxy.result) == null ? void 0 : _PokerGameProxy$resul.openResult[this._runIndex].prizeInfo;
          if (!prizeInfo || prizeInfo.length == 0) {
            return false;
          }
          PokerDef.palyAudio(PokerDef.audio.AWARD2);
          var openNums = PokerGameProxy.result.openResult[this._runIndex].openNums;
          this.hideSpine();
          this.node_spineMask.active = true;
          this.showPerIndex(this._runIndex);
          var amount = 0;
          for (var i = 0; i < prizeInfo.length; i++) {
            var lines = prizeInfo[i].prizeIdx;
            for (var j = 0; j < lines.length; j++) {
              var key = lines[j];
              var result = openNums[key];
              this.showSpine(key, result);
            }
            amount += prizeInfo[i].prizeAmount;
          }
          if (prizeInfo.length > 0) {
            this.scheduleOnce(function () {
              PokerDef.palyAudio(PokerDef.audio.BLING);
            }, 1.2);
          }
          this.sp_combo.node.active = true;
          this.sp_combo.setAnimation(0, "animation", false);
          this.sp_combo.setCompleteListener(function () {
            _this12.sp_combo.setCompleteListener(null);
            _this12.sp_combo.node.active = false;
          });
          this.txt_combo.string = "" + (this._runIndex + 1);
          this.txt_combo.node.getComponent(UIOpacity).opacity = 0;
          tween(this.txt_combo.node.getComponent(UIOpacity)).to(0.8, {
            opacity: 255
          }).start();
          this.txt_win.addScount(GUtil.changeCurrency(amount, DataManager.instance.currency, null));
          this.txt_total.node.active = true;
          this.txt_total.string = Common.numFormat(amount + "");
          Tween.stopAllByTarget(this.txt_total.node);
          tween(this.txt_total.node).delay(1.8).call(function () {
            _this12.txt_total.node.active = false;
            _this12.txt_total.reset();
          }).start();
          return true;
        };
        _proto.showFreeLines = function showFreeLines() {
          //        // let openNums = PokerGameProxy.result.openResult[0].openNums;
          //        // this.node_spineMask.active = true;
          //        // for (let i = 0; i < 15; i++) {
          //        //     if (openNums[i].bonusSymbol == 1) {
          //        //         this.showSpine(i, openNums[i].bonusSymbol - 1);
          //        //     }
          //        // }
        };
        _proto.hideLines = function hideLines() {};
        _proto.onClickBigWin = function onClickBigWin() {
          // this.sp_bigWin.setCompleteListener(null);
          // this.node_bigwin.active = false;
          // this.changeState(RunState.NORMAL);
          // this.changeBtnActive(true);
          this._runTime = 0;
        };
        _proto.onClickMenu = function onClickMenu() {
          this.node_betSelect.active = false;
          this.node_menu.active = !this.node_menu.active;
          this.node_btns.active = !this.node_menu.active;
        };
        _proto.onClickBack = function onClickBack() {
          Common.returnToHall(this, PokerGameProxy.BUNDLE);
        };
        _proto.onClickFree = function onClickFree() {
          this.node_freeBg.active = false;
          this.freeLock = false;
          this.changeState(RunState.NORMAL);
          this.changeBtnActive(true);
        };
        _proto.onClickStop = function onClickStop() {
          if (!PokerGameProxy.result) {
            return;
          }
        };
        _proto.changeBtnActive = function changeBtnActive(b) {
          var name = b ? "normal" : "idle";
          this.sp_start.setAnimation(0, name, true);
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
                  if (!PokerGameProxy.result) {
                    this._runTime = RUN_TIME;
                    this._errCount++;
                    // 等待超时由请求回调提示；丢包时绝不能再次提交下注。
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
                  if (PokerGameProxy.result.freePrize && !this._isFree) {
                    this.changeState(RunState.FREE_WIN);
                  } else {
                    this.changeState(RunState.NORMAL);
                  }
                }
                break;
              }
            case RunState.BIG_WIN:
              {
                this._runTime -= dt;
                if (this._runTime <= 0) {
                  // this.node_bigwin.active = false;
                  // this._state = RunState.NORMAL;
                  AudioManager.instance.stopSound(this._bigWinSoundId);
                  this.txt_bigwin.reset();
                  this.node_bigwin.active = false;
                  this.changeState(RunState.NORMAL);
                  this.changeBtnActive(true);
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
          this.betAttempt++;
          var cancel = this.cancelBet;
          this.cancelBet = null;
          if (cancel) cancel();
          ProxyMgr.close(this);
        };
        return PokerRoom;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_spineMask", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_spineParent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_menu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_titleFree", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeCount", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_freeBg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeTime", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txt_freeTimeSpin", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_freeEnd", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_total", [_dec19], {
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
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_betSelect", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "pre_bet", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_headNormal", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "node_headFree", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "node_perNormal", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_perFree", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sp_start", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "sp_bigWin", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "txt_bigwin", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_bigwin", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "sp_fapai", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "sp_combo", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "txt_combo", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "pre_joker", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "node_jokerParent", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "pre_cardAni", [_dec36], {
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

System.register("chunks:///_virtual/PokerScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './PokerDef.ts', './PokerProxy.ts', './Common.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, PokerDef, PokerGameProxy, Common, MainManager;
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
      PokerDef = module.PokerDef;
    }, function (module) {
      PokerGameProxy = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "17ddc1bnw5A26E4htCk0W29", "PokerScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var PokerScene = exports('default', (_dec = ccclass("PokerScene"), _dec2 = menu("game/PokerGame/PokerScene"), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PokerScene, _Component);
        function PokerScene() {
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
        var _proto = PokerScene.prototype;
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
          PokerDef.palyMusic(PokerDef.audio.BG);
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
          PokerGameProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolPoker.info, {});
        };
        _proto.onDisable = function onDisable() {
          PokerGameProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.off(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return PokerScene;
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
  r('virtual:///prerequisite-imports/PokerGame', 'chunks:///_virtual/PokerGame'); 
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