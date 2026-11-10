System.register("chunks:///_virtual/BlackJackCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Mesh, MeshRenderer, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Mesh = module.Mesh;
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "94ce8dZ5HNGNbzm1Bqn2ZZA", "BlackJackCard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BlackJackCard = exports('default', (_dec = ccclass("BlackJackCard"), _dec2 = menu("game/BlackJackGame/BlackJackCard"), _dec3 = property(Mesh), _dec4 = property(MeshRenderer), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackCard, _Component);
        function BlackJackCard() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "meshList", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "render", _descriptor2, _assertThisInitialized(_this));
          _this._cardNum = void 0;
          return _this;
        }
        var _proto = BlackJackCard.prototype;
        _proto.setCard = function setCard(num) {
          this._cardNum = num;
          var mesh = this.meshList[num];
          // this.render = mesh;
          this.render.mesh = mesh;
        };
        _proto.reuse = function reuse(arg) {
          var value = arg[0];
        };
        _proto.unuse = function unuse() {};
        return BlackJackCard;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "meshList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "render", [_dec4], {
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

System.register("chunks:///_virtual/BlackJackCardMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackCard.ts', './BlackJackDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, v3, Component, BlackJackCard, BlackJackDef;
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
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      BlackJackCard = module.default;
    }, function (module) {
      BlackJackDef = module.BlackJackDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "a9e791a8vlIxoE5X6L2yfz2", "BlackJackCardMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BlackJackCardMgr = exports('default', (_dec = ccclass("BlackJackCardMgr"), _dec2 = menu("game/BlackJackGame/BlackJackCardMgr"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackCardMgr, _Component);
        function BlackJackCardMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_cardList", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BlackJackCardMgr.prototype;
        _proto.getCard = function getCard(card, suit) {
          var type = 0;
          //方块
          if (suit == "D") {
            type = 0;
          } else if (suit == "C") {
            type = 3;
          } else if (suit == "H") {
            type = 2;
          } else {
            type = 1;
          }
          var num = BlackJackDef.getCardNumber(card);
          var node = null;
          node = instantiate(this.pre_cardList[type]);
          node.getComponent(BlackJackCard).setCard(num);
          node.setPosition(0.379, 0.952, -0.573);
          node.eulerAngles = v3(-180, 15, 0);
          return node;
        };
        _proto.sendCard = function sendCard(num) {};
        _proto.onDestroy = function onDestroy() {};
        return BlackJackCardMgr;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_cardList", [_dec3], {
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

System.register("chunks:///_virtual/BlackJackDef.ts", ['cc', './BlackJackProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, math, v3, AudioClip, BlackJackProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      v3 = module.v3;
      AudioClip = module.AudioClip;
    }, function (module) {
      BlackJackProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e5957g9NCZAWYP2i8xVUJ5B", "BlackJackDef", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var BlackJackDef = exports('BlackJackDef', /*#__PURE__*/function () {
        function BlackJackDef() {}
        BlackJackDef.getCardNumber = function getCardNumber(card) {
          var num = 0;
          if (card == "A") {
            num = 0;
          } else if (card == "J") {
            num = 10;
          } else if (card == "Q") {
            num = 11;
          } else if (card == "K") {
            num = 12;
          } else if (card == "*") {
            num = 13;
          } else {
            num = parseInt(card) - 1;
          }
          return num;
        };
        BlackJackDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = BlackJackProxy.bundle;
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
        BlackJackDef.palyMusic = function palyMusic(name) {
          var bundle = BlackJackProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return BlackJackDef;
      }());
      BlackJackDef.cameraInfo = {
        start: {
          position: v3(0, 3, 1.6),
          rotation: v3(-48, 0, 0)
        },
        // bet: { position: v3(0, 2.13, 1.38), rotation: v3(-30, -0.36, 0) },
        bet: {
          position: v3(0, 1.95, 0.53),
          rotation: v3(-53, 0, 0)
        },
        open: {
          position: v3(0, 1.8, 0.5),
          rotation: v3(-50, 0, 0)
        },
        openNear: {
          position: v3(0, 1.95, 0.53),
          rotation: v3(-53, 0, 0)
        },
        look: {
          position: v3(0, 3, 1.13),
          rotation: v3(-54.75, 0.0, 0)
        },
        1: {
          position: v3(1.1, 1.4, -0.2),
          rotation: v3(-38, 65, 0)
        },
        2: {
          position: v3(0.65, 1.44, 0.25),
          rotation: v3(-38, 32, 0)
        },
        3: {
          position: v3(0, 1.32, 0.27),
          rotation: v3(-38, 0, 0)
        },
        4: {
          position: v3(-0.65, 1.44, 0.25),
          rotation: v3(-38, -32, 0)
        },
        5: {
          position: v3(-1.1, 1.4, -0.2),
          rotation: v3(-38, -65, 0)
        }
      };
      BlackJackDef.chipNumbers = [1000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
      BlackJackDef.rects = [{
        width: 80,
        height: 140
      }, {
        width: 80,
        height: 140
      }, {
        width: 80,
        height: 120
      }, {
        width: 80,
        height: 120
      }, {
        width: 80,
        height: 120
      }, {
        width: 80,
        height: 120
      }];
      BlackJackDef.cardPostion = [{
        x: 0.628,
        z: -0.44
      }, {
        x: 0.369,
        z: -0.222
      }, {
        x: 0,
        z: -0.162
      }, {
        x: -0.37,
        z: -0.233
      }, {
        x: -0.626,
        z: -0.46
      }, {
        x: 0.628,
        z: -0.44
      }, {
        x: 0.369,
        z: -0.222
      }, {
        x: 0,
        z: -0.162
      }, {
        x: -0.37,
        z: -0.233
      }, {
        x: -0.626,
        z: -0.46
      }];
      BlackJackDef.betPosition = [v3(0.741, 0.913, -0.369), v3(0.423, 0.913, -0.105), v3(0, 0.913, -0.022), v3(-0.429, 0.913, -0.108), v3(-0.741, 0.913, -0.368), v3(0.701, 0.913, -0.314), v3(0.368, 0.913, -0.08), v3(-0.068, 0.913, -0.022), v3(-0.48, 0.913, -0.129), v3(-0.779, 0.913, -0.415), v3(0.78, 0.913, -0.435), v3(0.486, 0.913, -0.138), v3(0.068, 0.913, -0.022), v3(-0.361, 0.913, -0.08), v3(-0.701, 0.913, -0.314)];
      BlackJackDef.audio = {
        BG: "bgm",
        ADDBET: "bet",
        WIN: "win",
        CARD: "card",
        BJ: "blackjack"
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlackJackGame", ['./label3D2.ts', './BlackJackCard.ts', './BlackJackCardMgr.ts', './BlackJackDef.ts', './BlackJackLookAround.ts', './BlackJackPlayerBtns.ts', './BlackJackPlayerMgr.ts', './BlackJackProxy.ts', './BlackJackScene.ts', './BlackJackView.ts', './first-person-camera.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BlackJackLookAround.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, math, _decorator, Vec3, v3, Component, BlackJackProxy, BlackJackGameEvent, BlackJackGameState, ProxyMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      BlackJackProxy = module.default;
      BlackJackGameEvent = module.BlackJackGameEvent;
      BlackJackGameState = module.BlackJackGameState;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "a6deebt/VBLVb7CpIajF4dK", "BlackJackLookAround", undefined);
      var Quat = math.Quat;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var tempV3 = new Vec3();
      var MAX_DIS = 3;
      var MIN_DIS = 1.35;
      var BlackJackLookAround = exports('default', (_dec = ccclass("BlackJackLookAround"), _dec2 = menu("game/BlackJackGame/BlackJackLookAround"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackLookAround, _Component);
        function BlackJackLookAround() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._state = void 0;
          _this._rotateX = 20;
          _this.posY = 0;
          _this.directY = 1;
          _this.directX = 1;
          _this.directDis = 1;
          _this._distance = 1.35;
          _this._look = v3(0, 0.913, -0.755);
          return _this;
        }
        var _proto = BlackJackLookAround.prototype;
        _proto.onLoad = function onLoad() {
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          BlackJackProxy.on(BlackJackGameEvent.CHANGE_STATE, this.changeState, this);
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
        };
        _proto.update = function update(dt) {
          if (this._state == BlackJackGameState.LOOK) {
            this.circleMove(dt);
          }
        };
        _proto.goUp = function goUp() {};
        _proto.circleMove = function circleMove(dt) {
          this._rotateX += 0.1 * this.directX;
          this.posY += dt * this.directY * 0.12;
          this._distance += dt * this.directDis * 0.1;
          if (this.posY > 4) {
            this.posY = 4;
            this.directY = -1;
          } else if (this.posY < 2) {
            this.posY = 2;
            this.directY = 1;
          }
          if (this._rotateX > 65) {
            this._rotateX = 65;
            this.directX = -1;
          } else if (this._rotateX < -65) {
            this._rotateX = -65;
            this.directX = 1;
          }
          if (this._distance > MAX_DIS) {
            this._distance = MAX_DIS;
            this.directDis = -1;
          } else if (this._distance < MIN_DIS) {
            this._distance = MIN_DIS;
            this.directDis = 1;
          }
          var angle = this._rotateX / 180 * Math.PI;
          var x = 0 + this._distance * Math.sin(angle);
          var z = this._distance * Math.cos(angle);
          var y = this.posY;
          var pos = v3(x, y, z);
          pos.normalize();
          pos.multiplyScalar(this._distance);
          this.node.setPosition(pos);
          this.node.lookAt(this._look, v3(0, 1, 0));
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return BlackJackLookAround;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlackJackPlayerBtns.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackProxy.ts', './NetManager.ts', './DataManager.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component, BlackJackProxy, BlackJackGameEvent, BlackJackMsg, NetManager, DataManager, UserKey, Common, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      BlackJackProxy = module.default;
      BlackJackGameEvent = module.BlackJackGameEvent;
      BlackJackMsg = module.BlackJackMsg;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "44bb2qRTQJDHK3vbo1MvQmV", "BlackJackPlayerBtns", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BlackJackPlayerBtns = exports('default', (_dec = ccclass("BlackJackPlayerBtns"), _dec2 = menu("game/BlackJackGame/BlackJackPlayerBtns"), _dec3 = property(Button), _dec4 = property(Button), _dec5 = property(Button), _dec6 = property(Button), _dec7 = property(Button), _dec8 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackPlayerBtns, _Component);
        function BlackJackPlayerBtns() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btn_double", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_split", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_stand", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_hit", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_revert", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_revert", _descriptor6, _assertThisInitialized(_this));
          _this._info = void 0;
          return _this;
        }
        var _proto = BlackJackPlayerBtns.prototype;
        _proto.onEnable = function onEnable() {
          BlackJackProxy.on(BlackJackGameEvent.onBtnReset, this.reset, this);
        };
        _proto.onDisable = function onDisable() {
          BlackJackProxy.off(BlackJackGameEvent.onBtnReset, this.reset, this);
        };
        _proto.setInfo = function setInfo(info) {
          this._info = info;
          this.btn_double.interactable = this._info["double"] != 0;
          this.btn_split.interactable = this._info.split != 0;
          this.btn_stand.interactable = this._info.stand != 0;
          this.btn_hit.interactable = this._info.hit != 0;
          this.btn_revert.interactable = this._info.redemption != 0;
          this.txt_revert.string = Common.ChangeMoneyFormat(this._info.bet / 2, 2);
        };
        _proto.reset = function reset() {
          this.btn_double.interactable = false;
          this.btn_split.interactable = false;
          this.btn_stand.interactable = false;
          this.btn_hit.interactable = false;
          this.btn_revert.interactable = false;
        };
        _proto.onClickSplit = function onClickSplit() {
          var _BlackJackProxy$getNe = BlackJackProxy.getNextPlayer(),
            info = _BlackJackProxy$getNe.info,
            pos = _BlackJackProxy$getNe.pos;
          if (info) {
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            if (gold < info.bet) {
              Common.showTip(i18n.errTip("30003"));
              return;
            }

            // this.reset();
            NetManager.instance.sendOnlineData(BlackJackMsg.actionSplit, {
              pos: pos,
              handIndex: info.handIndex
            });
          }
        };
        _proto.onClickStop = function onClickStop() {
          var _BlackJackProxy$getNe2 = BlackJackProxy.getNextPlayer(),
            info = _BlackJackProxy$getNe2.info,
            pos = _BlackJackProxy$getNe2.pos;
          if (info) {
            // this.reset();
            NetManager.instance.sendOnlineData(BlackJackMsg.actionStand, {
              pos: pos,
              handIndex: info.handIndex
            });
          }
        };
        _proto.onClickHit = function onClickHit() {
          var _BlackJackProxy$getNe3 = BlackJackProxy.getNextPlayer(),
            info = _BlackJackProxy$getNe3.info,
            pos = _BlackJackProxy$getNe3.pos;
          if (info) {
            // this.reset();
            NetManager.instance.sendOnlineData(BlackJackMsg.actionHit, {
              pos: pos,
              handIndex: info.handIndex
            });
          }
        };
        _proto.onClickRevert = function onClickRevert() {
          var _BlackJackProxy$getNe4 = BlackJackProxy.getNextPlayer(),
            info = _BlackJackProxy$getNe4.info,
            pos = _BlackJackProxy$getNe4.pos;
          if (info) {
            // this.reset();
            NetManager.instance.sendOnlineData(BlackJackMsg.actionRedemption, {
              pos: pos,
              handIndex: info.handIndex
            });
          }
        };
        _proto.onClickDouble = function onClickDouble() {
          var _BlackJackProxy$getNe5 = BlackJackProxy.getNextPlayer(),
            info = _BlackJackProxy$getNe5.info,
            pos = _BlackJackProxy$getNe5.pos;
          if (info) {
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            if (gold < info.bet) {
              Common.showTip(i18n.errTip("30003"));
              return;
            }

            // this.reset();
            NetManager.instance.sendOnlineData(BlackJackMsg.actionDouble, {
              pos: pos,
              handIndex: info.handIndex
            });
          }
        };
        return BlackJackPlayerBtns;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btn_double", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btn_split", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btn_stand", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btn_hit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btn_revert", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_revert", [_dec8], {
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

System.register("chunks:///_virtual/BlackJackPlayerMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Component, tween, v3;
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
      Component = module.Component;
      tween = module.tween;
      v3 = module.v3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "30eb90OjJ1M87ymhkSiaDg7", "BlackJackPlayerMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BlackJackPlayerMgr = exports('default', (_dec = ccclass("BlackJackPlayerMgr"), _dec2 = menu("game/BlackJackGame/BlackJackPlayerMgr"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackPlayerMgr, _Component);
        function BlackJackPlayerMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "players", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_master", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = BlackJackPlayerMgr.prototype;
        _proto.addCard = function addCard(index, card) {
          this.players[index].addChild(card);
        };
        _proto.getChildLength = function getChildLength(i) {
          if (this.players[i]) {
            return this.players[i].children.length;
          }
          return 0;
        };
        _proto.getPlayer = function getPlayer(index) {
          return this.players[index];
        };
        _proto.getMaster = function getMaster() {
          return this.node_master;
        };
        _proto.addMasterCard = function addMasterCard(card) {
          this.node_master.addChild(card);
        };
        _proto.clear = function clear() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.players), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.destroyAllChildren();
            i.setPosition(0, i.position.y, i.position.z);
          }
          this.node_master.destroyAllChildren();
        };
        _proto.split = function split(pos) {
          var child = this.players[pos].children[0];
          child.parent = this.players[pos + 5];

          // this.players[pos].setPosition(0.02, this.players[pos].position.y, this.players[pos].position.z);
          // this.players[pos + 5].setPosition(-0.02, this.players[pos + 5].position.y, this.players[pos + 5].position.z);
        };

        _proto.clearCard = function clearCard() {
          var index = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.players), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            var _loop = function _loop() {
              var node = _step4.value;
              tween(node).delay(index * 0.1).to(0.2, {
                position: v3(0, 0.913 + index * 0.001, -0.4),
                eulerAngles: v3(0, 0, 0)
              }).delay(0.5).to(0.3, {
                position: v3(-0.77, 0.983, -0.75),
                eulerAngles: v3(0, 0, 180)
              }).to(0.5, {
                position: v3(-0.77, 0.913, -0.75)
              }).call(function () {
                node.destroyFromParent();
              }).start();
              index++;
            };
            for (var _iterator4 = _createForOfIteratorHelperLoose(i.children), _step4; !(_step4 = _iterator4()).done;) {
              _loop();
            }
          }
          var _loop2 = function _loop2() {
            var node = _step3.value;
            tween(node).delay(index * 0.1).to(0.2, {
              position: v3(0, 0.913 + index * 0.001, -0.4),
              eulerAngles: v3(0, 0, 0)
            }).delay(0.5).to(0.3, {
              position: v3(-0.77, 0.983, -0.75),
              eulerAngles: v3(0, 0, 180)
            }).to(0.5, {
              position: v3(-0.77, 0.913, -0.75)
            }).call(function () {
              node.destroyFromParent();
            }).start();
            index++;
          };
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_master.children), _step3; !(_step3 = _iterator3()).done;) {
            _loop2();
          }
        };
        _proto.onDestroy = function onDestroy() {};
        return BlackJackPlayerMgr;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "players", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_master", [_dec4], {
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

System.register("chunks:///_virtual/BlackJackProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './EventManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, EventManager, Common;
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
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7f22el3SCdF1K4q/YWfUL7C", "BlackJackProxy", undefined);
      var BlackJackGameState = exports('BlackJackGameState', /*#__PURE__*/function (BlackJackGameState) {
        BlackJackGameState[BlackJackGameState["NORMAL"] = 0] = "NORMAL";
        BlackJackGameState[BlackJackGameState["START"] = 1] = "START";
        BlackJackGameState[BlackJackGameState["BET"] = 2] = "BET";
        BlackJackGameState[BlackJackGameState["RESULT"] = 3] = "RESULT";
        BlackJackGameState[BlackJackGameState["SHAKE"] = 4] = "SHAKE";
        BlackJackGameState[BlackJackGameState["SHAKE_START"] = 5] = "SHAKE_START";
        BlackJackGameState[BlackJackGameState["LOOK"] = 6] = "LOOK";
        BlackJackGameState[BlackJackGameState["CLEAR"] = 7] = "CLEAR";
        BlackJackGameState[BlackJackGameState["INSURANCE"] = 8] = "INSURANCE";
        BlackJackGameState[BlackJackGameState["PLAYER"] = 9] = "PLAYER";
        BlackJackGameState[BlackJackGameState["MASTER"] = 10] = "MASTER";
        return BlackJackGameState;
      }({}));
      var BlackJackGameEvent = exports('BlackJackGameEvent', /*#__PURE__*/function (BlackJackGameEvent) {
        BlackJackGameEvent["TOUCH"] = "UItouch";
        BlackJackGameEvent["TOUCH_MOVE"] = "UItouchMove";
        BlackJackGameEvent["HISTORY"] = "history";
        BlackJackGameEvent["RESULT"] = "result";
        BlackJackGameEvent["SHAKE"] = "shake";
        BlackJackGameEvent["CHANGE_STATE"] = "changeState";
        BlackJackGameEvent["BET_LAST"] = "betLast";
        BlackJackGameEvent["BET_REVERT"] = "betRevert";
        BlackJackGameEvent["BET_DOUBLE"] = "betDouble";
        BlackJackGameEvent["CLICK_HIS_ITEM"] = "clickHisItem";
        BlackJackGameEvent["ADD_BET"] = "addBet";
        BlackJackGameEvent["CHANGE_TO_BET"] = "changeToBet";
        BlackJackGameEvent["START"] = "start";
        BlackJackGameEvent["ADD_CARD_TOPLAYER"] = "addCardToPlayer";
        BlackJackGameEvent["ADD_CARD_TOMASTER"] = "addCardToMaster";
        BlackJackGameEvent["RESIZE"] = "resize";
        BlackJackGameEvent["INSURANCE"] = "insurance";
        BlackJackGameEvent["DOUBLE"] = "double";
        BlackJackGameEvent["STAND"] = "stand";
        BlackJackGameEvent["SPLIT"] = "split";
        BlackJackGameEvent["HIT"] = "hit";
        BlackJackGameEvent["REDEMPTION"] = "redemption";
        BlackJackGameEvent["CONNECT"] = "connect";
        BlackJackGameEvent["onBtnReset"] = "onBtnReset";
        return BlackJackGameEvent;
      }({}));
      var BlackJackMsg = exports('BlackJackMsg', /*#__PURE__*/function (BlackJackMsg) {
        BlackJackMsg["actionRoundInfo"] = "blackJack/HD_RoundInfo";
        BlackJackMsg["actionDeal"] = "blackJack/HD_Deal";
        BlackJackMsg["actionStand"] = "blackJack/HD_Stand";
        BlackJackMsg["actionHit"] = "blackJack/HD_Hit";
        BlackJackMsg["actionSplit"] = "blackJack/HD_Split";
        BlackJackMsg["actionDouble"] = "blackJack/HD_Double";
        BlackJackMsg["actionInsurance"] = "blackJack/HD_Insurance";
        BlackJackMsg["actionRedemption"] = "blackJack/HD_Redemption";
        return BlackJackMsg;
      }({})); //赎回

      /**
       * 色蝶数据代理
       */
      var BlackJackProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(BlackJackProxyMgr, _ProxyBase);
        function BlackJackProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "BlackJackGame";
          _this.history = [];
          _this.result = void 0;
          _this.lastBets = [];
          _this.nowBets = [];
          _this.wsEvents = [BlackJackMsg.actionRoundInfo, BlackJackMsg.actionDeal, BlackJackMsg.actionStand, BlackJackMsg.actionHit, BlackJackMsg.actionSplit, BlackJackMsg.actionDouble, BlackJackMsg.actionInsurance, BlackJackMsg.actionRedemption];
          return _this;
        }
        var _proto = BlackJackProxyMgr.prototype;
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
        _proto.initRecv = function initRecv() {}

        //获取下一个操作对象
        ;

        _proto.getNextPlayer = function getNextPlayer() {
          if (this.result) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(this.result.player.seats), _step3; !(_step3 = _iterator3()).done;) {
              var i = _step3.value;
              for (var _iterator4 = _createForOfIteratorHelperLoose(i.hands), _step4; !(_step4 = _iterator4()).done;) {
                var _info = _step4.value;
                if (_info.handStatus == 1) {
                  return {
                    pos: i.pos,
                    info: _info
                  };
                }
              }
            }
          }
          return null;
        };
        _proto.getPlayer = function getPlayer(pos, handIndex) {
          if (this.result) {
            for (var _iterator5 = _createForOfIteratorHelperLoose(this.result.player.seats), _step5; !(_step5 = _iterator5()).done;) {
              var i = _step5.value;
              for (var _iterator6 = _createForOfIteratorHelperLoose(i.hands), _step6; !(_step6 = _iterator6()).done;) {
                var _info2 = _step6.value;
                if (i.pos == pos && _info2.handIndex == handIndex) {
                  return {
                    pos: i.pos,
                    info: _info2
                  };
                }
              }
            }
          }
          return null;
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            // NetManager.instance.sendOnlineData(BlackJackMsg.actionRoundInfo);
            return;
          }
          switch (data.cmd) {
            case BlackJackMsg.actionRoundInfo:
              {
                this.result = data.Data;
                if (this.result && this.result.roundStatus == 1) {
                  this.emit(BlackJackGameEvent.CONNECT);
                }
                break;
              }
            case BlackJackMsg.actionDeal:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.START);

                // if (BlackJackProxy.result.player.insurance.insuranceStatus == -1) {
                //     this.emit(BlackJackGameEvent.START);
                // } else {
                //     let info = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                //     for (let i of BlackJackProxy.nowBets) {
                //         info[i.Pos] += i.Amount;
                //     }

                //     // this._state = BlackJackGameState.RESULT;
                //     let seats = [];
                //     for (let i = 0; i < 5; i++) {
                //         if (info[i] > 0) {
                //             let betInfo = {
                //                 pos: i + 1 + "",
                //                 handIndex: "0",
                //                 bet: info[i] + "",
                //                 leftBet: info[i + 5] + "",
                //                 rightBet: info[i + 10] + "",
                //             };
                //             seats.push(betInfo);
                //         }
                //     }

                //     NetManager.instance.sendOnlineData(BlackJackMsg.actionDeal, {
                //         seats,
                //     });
                // }
                break;
              }
            case BlackJackMsg.actionStand:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.STAND);
                this.emit(BlackJackGameEvent.onBtnReset);
                break;
              }
            case BlackJackMsg.actionHit:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.HIT);
                this.emit(BlackJackGameEvent.onBtnReset);
                break;
              }
            case BlackJackMsg.actionSplit:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.SPLIT);
                this.emit(BlackJackGameEvent.onBtnReset);
                break;
              }
            case BlackJackMsg.actionDouble:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.DOUBLE);
                this.emit(BlackJackGameEvent.onBtnReset);
                break;
              }
            case BlackJackMsg.actionInsurance:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.INSURANCE);
                break;
              }
            case BlackJackMsg.actionRedemption:
              {
                this.result = data.Data;
                this.emit(BlackJackGameEvent.REDEMPTION);
                this.emit(BlackJackGameEvent.onBtnReset);
                break;
              }
          }
        };
        _createClass(BlackJackProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return BlackJackProxyMgr;
      }(ProxyBase);
      var BlackJackProxy = exports('default', new BlackJackProxyMgr("BlackJackProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BlackJackScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackDef.ts', './GUtil.ts', './BlackJackProxy.ts', './ProxyMgr.ts', './NetManager.ts', './ConfigManager.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './DataManager.ts', './BlackJackCardMgr.ts', './BlackJackView.ts', './BlackJackPlayerMgr.ts', './BlackJackCard.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Vec3, Node, Camera, Prefab, v3, tween, Animation, view, instantiate, Tween, isValid, rect, Component, BlackJackDef, GUtil, BlackJackMsg, BlackJackGameState, BlackJackProxy, BlackJackGameEvent, ProxyMgr, NetManager, ConfigManager, ViewManager, EventManager, Common, i18n, DataManager, UserKey, BlackJackCardMgr, BlackJackView, BlackJackPlayerMgr, BlackJackCard;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      _decorator = module._decorator;
      Vec3 = module.Vec3;
      Node = module.Node;
      Camera = module.Camera;
      Prefab = module.Prefab;
      v3 = module.v3;
      tween = module.tween;
      Animation = module.Animation;
      view = module.view;
      instantiate = module.instantiate;
      Tween = module.Tween;
      isValid = module.isValid;
      rect = module.rect;
      Component = module.Component;
    }, function (module) {
      BlackJackDef = module.BlackJackDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BlackJackMsg = module.BlackJackMsg;
      BlackJackGameState = module.BlackJackGameState;
      BlackJackProxy = module.default;
      BlackJackGameEvent = module.BlackJackGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      BlackJackCardMgr = module.default;
    }, function (module) {
      BlackJackView = module.default;
    }, function (module) {
      BlackJackPlayerMgr = module.default;
    }, function (module) {
      BlackJackCard = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "39d4d24sYdDaq5fB2VaAs0i", "BlackJackScene", undefined);
      var Quat = math.Quat;
      var MOVETIME = 120;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var tempPosition = new Vec3();
      var tempEuler = new Vec3();
      var BlackJackScene = exports('default', (_dec = ccclass("BlackJackScene"), _dec2 = menu("game/BlackJackGame/BlackJackScene"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Camera), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(BlackJackCardMgr), _dec13 = property(BlackJackPlayerMgr), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackScene, _Component);
        function BlackJackScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_bets", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_leftBets", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_rightBets", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chips", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameView", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipParent", _descriptor8, _assertThisInitialized(_this));
          _this._posLights = [];
          _this._posLeftLights = [];
          _this._posRightLights = [];
          _this._posChips = [];
          _initializerDefineProperty(_this, "highLights", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardMgr", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerMgr", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_doubleLight", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_splight1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_splight2", _descriptor14, _assertThisInitialized(_this));
          _this._selectChipIndex = -1;
          _this._state = void 0;
          _this.chipList = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
          _this._noBetTime = 0;
          _this._playerInfo = null;
          _this._view = void 0;
          _this.moveCameraLock = true;
          _this.cardPos = [];
          return _this;
        }
        var _proto = BlackJackScene.prototype;
        _proto.onLoad = function onLoad() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.highLights), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node_bets), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            _i.active = false;
          }
          this.initCardPos();
          NetManager.instance.sendOnlineData(BlackJackMsg.actionRoundInfo);

          // NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolBlackJack.info, {});

          // NetManager.instance.sendOnlineData(BlackJackMsg.actionDeal, {
          //     seats: [{ pos: "1", handIndex: "0", bet: "1000" }],
          // });

          this.initEvent();
          this.changeGameState(BlackJackGameState.START);
          BlackJackDef.palyMusic(BlackJackDef.audio.BG);
          this.selectChip(0);
        };
        _proto.initEvent = function initEvent() {
          var _this2 = this;
          BlackJackProxy.on(BlackJackGameEvent.TOUCH, this.checkClick, this);
          BlackJackProxy.on(BlackJackGameEvent.START, this.shake, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_LAST, this.betLast, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_REVERT, this.betRevert, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_DOUBLE, this.betDouble, this);
          BlackJackProxy.on(BlackJackGameEvent.CHANGE_TO_BET, this.changeToBet, this);
          BlackJackProxy.on(BlackJackGameEvent.TOUCH_MOVE, this.onResize, this);
          BlackJackProxy.on(BlackJackGameEvent.HIT, this.onHit, this);
          BlackJackProxy.on(BlackJackGameEvent.REDEMPTION, this.onRedemption, this);
          BlackJackProxy.on(BlackJackGameEvent.SPLIT, this.onSplit, this);
          BlackJackProxy.on(BlackJackGameEvent.DOUBLE, this.onDouble, this);
          BlackJackProxy.on(BlackJackGameEvent.STAND, this.checkNext, this);
          BlackJackProxy.on(BlackJackGameEvent.INSURANCE, function () {
            _this2._view.showInsurance();
            _this2.checkNext();
          }, this);
          BlackJackProxy.on(BlackJackGameEvent.CONNECT, function () {
            for (var _iterator3 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step3; !(_step3 = _iterator3()).done;) {
              var i = _step3.value;
              for (var _iterator4 = _createForOfIteratorHelperLoose(i.hands), _step4; !(_step4 = _iterator4()).done;) {
                var info = _step4.value;
                if (info.bet > 0) {
                  var _list2 = _this2.getBetList(info.bet);
                  for (var _iterator7 = _createForOfIteratorHelperLoose(_list2), _step7; !(_step7 = _iterator7()).done;) {
                    var _bet2 = _step7.value;
                    _this2.addBetByInfo({
                      Pos: i.pos - 1,
                      Amount: _bet2
                    });
                  }
                }
              }
              if (i.hands && i.hands.length == 2) {
                _this2.movePos(i.pos);
              }
              var left = i.leftBetArea;
              var right = i.rightBetArea;
              if (left.bet > 0) {
                var list = _this2.getBetList(left.bet);
                for (var _iterator5 = _createForOfIteratorHelperLoose(list), _step5; !(_step5 = _iterator5()).done;) {
                  var bet = _step5.value;
                  _this2.addBetByInfo({
                    Pos: i.pos - 1 + 5,
                    Amount: bet
                  });
                }
              }
              if (right.bet > 0) {
                // this.addBetByInfo({ Pos: i.pos - 1 + 10, Amount: right.bet });

                var _list = _this2.getBetList(right.bet);
                for (var _iterator6 = _createForOfIteratorHelperLoose(_list), _step6; !(_step6 = _iterator6()).done;) {
                  var _bet = _step6.value;
                  _this2.addBetByInfo({
                    Pos: i.pos - 1 + 10,
                    Amount: _bet
                  });
                }
              }
            }
            _this2.shake();
          }, this);
        };
        _proto.getBetList = function getBetList(bet) {
          var list = [];
          var min = -1;
          for (var j = 0; j < BlackJackDef.chipNumbers.length; j++) {
            if (BlackJackDef.chipNumbers[j] == bet) {
              list.push(bet);
              break;
            } else if (BlackJackDef.chipNumbers[j] > bet) {
              if (BlackJackDef.chipNumbers[j - 1]) {
                min = j - 1;
              }
              break;
            }
          }
          if (min > -1) {
            for (var i = min; i >= 0; i--) {
              var count1 = Math.floor(bet / BlackJackDef.chipNumbers[i]);
              bet = bet % BlackJackDef.chipNumbers[i];
              if (count1 > 0) {
                for (var _j = 0; _j < count1; _j++) {
                  list.push(BlackJackDef.chipNumbers[i]);
                }
              }
              if (bet == 0) {
                break;
              }
            }
          }
          return list;
        };
        _proto.onHit = function onHit() {
          var _this3 = this;
          var _BlackJackProxy$getPl = BlackJackProxy.getPlayer(this._playerInfo.pos, this._playerInfo.info.handIndex),
            info = _BlackJackProxy$getPl.info;
          if (info) {
            this.sendCardToPlayer(info.cards[info.cards.length - 1], this._playerInfo.pos + this._playerInfo.info.handIndex * 5, function () {
              _this3.checkNext();
            });
          }
        };
        _proto.onRedemption = function onRedemption() {
          var _BlackJackProxy$getPl2 = BlackJackProxy.getPlayer(this._playerInfo.pos, this._playerInfo.info.handIndex),
            info = _BlackJackProxy$getPl2.info;
          if (info) {
            this._view.showCardState(this._playerInfo.pos - 1 + this._playerInfo.info.handIndex * 5, 5);
          }
          this.checkNext();
        };
        _proto.movePos = function movePos(pos) {
          var point = v3(0, 0.913, -0.755);
          var radians = Math.atan(this.cardPos[pos - 1].x / (this.cardPos[pos - 1].z - point.z));
          var angle = radians * (180 / Math.PI);
          var distance = this.getDistance(point, this.cardPos[pos - 1]);
          var dis = (angle + 5) / 180 * Math.PI;
          var cos = Math.cos(dis);
          var sin = Math.sin(dis);
          this.cardPos[pos - 1].x = sin * distance;
          this.cardPos[pos - 1].z = cos * distance - 0.755;
          dis = (angle - 5) / 180 * Math.PI;
          cos = Math.cos(dis);
          sin = Math.sin(dis);
          this.cardPos[pos - 1 + 5].x = sin * distance;
          this.cardPos[pos - 1 + 5].z = cos * distance - 0.755;
          var player1 = this.playerMgr.getPlayer(pos - 1);
          for (var _iterator8 = _createForOfIteratorHelperLoose(player1.children), _step8; !(_step8 = _iterator8()).done;) {
            var i = _step8.value;
            // i.position = this.cardPos[pos - 1];

            i.position = this.cardPos[pos - 1];
            i.eulerAngles = v3(0, angle + 5, 0);
          }
          var player2 = this.playerMgr.getPlayer(pos - 1 + 5);
          for (var _iterator9 = _createForOfIteratorHelperLoose(player2.children), _step9; !(_step9 = _iterator9()).done;) {
            var _i2 = _step9.value;
            // i.position = this.cardPos[pos - 1 + 5];
            _i2.position = this.cardPos[pos - 1 + 5];
            _i2.eulerAngles = v3(0, angle - 5, 0);
          }
        };
        _proto.onSplit = function onSplit() {
          var _this4 = this;
          var pos = this._playerInfo.pos;
          this.playerMgr.split(pos - 1);
          var list = this.chipList[pos - 1].slice();
          for (var _iterator10 = _createForOfIteratorHelperLoose(list), _step10; !(_step10 = _iterator10()).done;) {
            var item = _step10.value;
            this.addBet(pos - 1, item.index, false);
          }
          this._view.doubleBetByPos(pos - 1);
          // this.cardPos[pos - 1].x += 0.05;
          // this.cardPos[pos - 1 + 5].x -= 0.05;

          var point = v3(0, 0.913, -0.755);
          var radians = Math.atan(this.cardPos[pos - 1].x / (this.cardPos[pos - 1].z - point.z));
          var angle = radians * (180 / Math.PI);
          var distance = this.getDistance(point, this.cardPos[pos - 1]);
          var dis = (angle + 5) / 180 * Math.PI;
          var cos = Math.cos(dis);
          var sin = Math.sin(dis);
          this.cardPos[pos - 1].x = sin * distance;
          this.cardPos[pos - 1].z = cos * distance - 0.755;
          dis = (angle - 5) / 180 * Math.PI;
          cos = Math.cos(dis);
          sin = Math.sin(dis);
          this.cardPos[pos - 1 + 5].x = sin * distance;
          this.cardPos[pos - 1 + 5].z = cos * distance - 0.755;
          var player1 = this.playerMgr.getPlayer(pos - 1);
          for (var _iterator11 = _createForOfIteratorHelperLoose(player1.children), _step11; !(_step11 = _iterator11()).done;) {
            var i = _step11.value;
            // i.position = this.cardPos[pos - 1];
            tween(i).to(0.2, {
              position: this.cardPos[pos - 1],
              eulerAngles: v3(0, angle + 5, 0)
            }).start();
          }
          var player2 = this.playerMgr.getPlayer(pos - 1 + 5);
          for (var _iterator12 = _createForOfIteratorHelperLoose(player2.children), _step12; !(_step12 = _iterator12()).done;) {
            var _i3 = _step12.value;
            // i.position = this.cardPos[pos - 1 + 5];
            tween(_i3).to(0.2, {
              position: this.cardPos[pos - 1 + 5],
              eulerAngles: v3(0, angle - 5, 0)
            }).start();
          }
          this.node_splight1.active = true;
          this.node_splight1.position = player2.children[0].position;
          this.node_splight1.eulerAngles = v3(0, angle, 0);
          tween(this.node_splight1).to(0.2, {
            eulerAngles: v3(0, angle - 5, 0)
          }).start();
          this.node_splight1.getComponent(Animation).play();
          this.node_splight2.active = true;
          this.node_splight2.position = player2.children[0].position;
          this.node_splight2.eulerAngles = v3(0, angle, -180);
          this.node_splight2.getComponent(Animation).play();
          tween(this.node_splight2).to(0.2, {
            eulerAngles: v3(0, angle + 5, -180)
          }).start();
          this.resizeCardPos();
          this.scheduleOnce(function () {
            _this4._view.split(pos);
            var _BlackJackProxy$getPl3 = BlackJackProxy.getPlayer(pos, 0),
              info = _BlackJackProxy$getPl3.info;
            _this4.sendCardToPlayer(info.cards[info.cards.length - 1], pos, function () {
              var _BlackJackProxy$getPl4 = BlackJackProxy.getPlayer(pos, 1),
                info = _BlackJackProxy$getPl4.info;
              _this4.sendCardToPlayer(info.cards[info.cards.length - 1], pos + 5, function () {
                _this4.checkNext();
              });
            });
          }, 0.2);
        };
        _proto.onDouble = function onDouble() {
          var _this5 = this;
          var _BlackJackProxy$getPl5 = BlackJackProxy.getPlayer(this._playerInfo.pos, this._playerInfo.info.handIndex),
            info = _BlackJackProxy$getPl5.info;
          var list = this.chipList[this._playerInfo.pos - 1].slice();
          for (var _iterator13 = _createForOfIteratorHelperLoose(list), _step13; !(_step13 = _iterator13()).done;) {
            var item = _step13.value;
            this.addBet(this._playerInfo.pos - 1, item.index, false);
          }
          this._view.doubleBetByPos(this._playerInfo.pos - 1);
          this.doubleLight(this._playerInfo.pos - 1);
          if (info) {
            this.sendCardToPlayer(info.cards[info.cards.length - 1], this._playerInfo.pos + this._playerInfo.info.handIndex * 5, function () {
              _this5.checkNext();
            }, true);
          }
        };
        _proto.showPlayer = function showPlayer() {
          var _this6 = this;
          var pos = this._playerInfo.pos;
          var cameraInfo = BlackJackDef.cameraInfo[pos];
          this.moveCameraLock = false;
          this._view.stopCardAni(this._playerInfo);
          tween(this.mainCamera.node).to(0.5, {
            position: cameraInfo.position.clone(),
            eulerAngles: cameraInfo.rotation.clone()
          }).delay(0.1).call(function () {
            _this6.moveCameraLock = true;
            _this6.changeGameState(BlackJackGameState.PLAYER);
            _this6._view.setPlayerInfo(_this6._playerInfo);
          }).start();
        };
        _proto.checkNext = function checkNext() {
          var _this7 = this;
          var info = BlackJackProxy.getNextPlayer();
          if (info) {
            this._playerInfo = info;
            this.showPlayer();
          } else {
            this.moveCameraLock = false;
            tween(this.mainCamera.node).to(0.5, {
              position: BlackJackDef.cameraInfo.open.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.open.rotation.clone()
            }).call(function () {
              _this7.moveCameraLock = true;
              _this7.changeGameState(BlackJackGameState.MASTER);
            }).start();
          }
        };
        _proto.onEnable = function onEnable() {
          BlackJackProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.on("canvas-resize", this.onResizeByWindow, this);
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (!this.moveCameraLock) {
            this.onResize();
          }
        };
        _proto.onResizeByWindow = function onResizeByWindow() {
          var _this8 = this;
          this.scheduleOnce(function () {
            _this8.onResize();
          });
        };
        _proto.onResize = function onResize() {
          this._posLights = [];
          this._posLeftLights = [];
          this._posRightLights = [];
          this._posChips = [];
          var win = view.getDesignResolutionSize();
          for (var _iterator14 = _createForOfIteratorHelperLoose(this.node_bets), _step14; !(_step14 = _iterator14()).done;) {
            var i = _step14.value;
            var pos = this.mainCamera.convertToUINode(i.worldPosition, this.game);
            pos.x += win.width / 2;
            pos.y += win.height / 2;
            this._posLights.push(pos);
          }
          for (var _iterator15 = _createForOfIteratorHelperLoose(this.node_leftBets), _step15; !(_step15 = _iterator15()).done;) {
            var _i4 = _step15.value;
            var _pos = this.mainCamera.convertToUINode(_i4.worldPosition, this.game);
            _pos.x += win.width / 2;
            _pos.y += win.height / 2;
            this._posLeftLights.push(_pos);
          }
          for (var _iterator16 = _createForOfIteratorHelperLoose(this.node_rightBets), _step16; !(_step16 = _iterator16()).done;) {
            var _i5 = _step16.value;
            var _pos2 = this.mainCamera.convertToUINode(_i5.worldPosition, this.game);
            _pos2.x += win.width / 2;
            _pos2.y += win.height / 2;
            this._posRightLights.push(_pos2);
          }
          for (var _iterator17 = _createForOfIteratorHelperLoose(this.node_chips), _step17; !(_step17 = _iterator17()).done;) {
            var _i6 = _step17.value;
            var _pos3 = this.mainCamera.convertToUINode(_i6.worldPosition, this.game);
            _pos3.x += win.width / 2;
            _pos3.y += win.height / 2;
            this._posChips.push(_pos3);
          }

          // let pos = this.mainCamera.convertToUINode(cc.v3(0, 0.913, -0.556), this.game);
          // BlackJackProxy.emit(BlackJackGameEvent.RESIZE, {
          //     posList: this._posLights,
          //     master: pos,
          // });

          this.resizeCardPos();
          this._noBetTime = 0;
        };
        _proto.resizeCardPos = function resizeCardPos() {
          var list = [];
          for (var _iterator18 = _createForOfIteratorHelperLoose(this.cardPos), _step18; !(_step18 = _iterator18()).done;) {
            var i = _step18.value;
            var _pos4 = this.mainCamera.convertToUINode(i, this.game);
            list.push(_pos4);
          }
          var txtList = [];
          for (var _iterator19 = _createForOfIteratorHelperLoose(BlackJackDef.betPosition), _step19; !(_step19 = _iterator19()).done;) {
            var _i7 = _step19.value;
            var _pos5 = this.mainCamera.convertToUINode(_i7, this.game);
            txtList.push(_pos5);
          }
          var pos = this.mainCamera.convertToUINode(v3(0, 0.913, -0.556), this.game);
          this._view.resize({
            posList: list,
            master: pos,
            txtList: txtList
          });
        };
        _proto.onDisable = function onDisable() {
          BlackJackProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.off("canvas-resize", this.onResizeByWindow, this);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          BlackJackProxy.nowBets = [];
        };
        _proto.start = function start() {
          var _this9 = this;
          var node = instantiate(this.gameView);
          this.game.addChild(node);
          this._view = node.getComponent(BlackJackView);
          this._view.setCamera(this.mainCamera.node);
          this.mainCamera.node.position = BlackJackDef.cameraInfo.start.position.clone();
          this.mainCamera.node.eulerAngles = BlackJackDef.cameraInfo.start.rotation.clone();
          tween(this.mainCamera.node).delay(0.2).to(2, {
            position: BlackJackDef.cameraInfo.bet.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this9.onResize();
            _this9.changeGameState(BlackJackGameState.BET);
          }).start();
        };
        _proto.getDistance = function getDistance(startPos, endPos) {
          var diff_x = startPos.x - endPos.x;
          var diff_z = startPos.z - endPos.z;
          var distance = Math.pow(diff_x * diff_x + diff_z * diff_z, 0.5);
          return distance;
        };
        _proto.shakeStart = function shakeStart() {
          this.changeGameState(BlackJackGameState.SHAKE_START);
          this.sendCard();
        };
        _proto.shake = function shake() {
          var _this10 = this;
          this.changeGameState(BlackJackGameState.SHAKE);
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.openNear.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this10.onResize();
            _this10.shakeStart();
          }).start();
        };
        _proto.blink = function blink(node) {
          node.active = true;
          var ani = node.getComponent(Animation);
          ani.play();
        };
        _proto.doubleLight = function doubleLight(index) {
          var node = this.node_bets[index];
          this.node_doubleLight.active = true;
          this.node_doubleLight.position = node.position;
          // this.node_doubleLight.eulerAngles = cc.v3(-90, 0, index * 30);
          var child = this.node_doubleLight.getChildByName("add_cm");
          child.active = true;
          child.eulerAngles = v3(-90, 120 - index * 30, 0);

          // let child = this.node_doubleLight;
          var ani = child.getComponent(Animation);
          ani.play();
        };
        _proto.splitLight = function splitLight(index) {};
        _proto.showResult = function showResult() {
          var _this11 = this;
          this.changeGameState(BlackJackGameState.RESULT);
          for (var _iterator20 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step20; !(_step20 = _iterator20()).done;) {
            var i = _step20.value;
            var prize = 0;
            for (var _iterator21 = _createForOfIteratorHelperLoose(i.hands), _step21; !(_step21 = _iterator21()).done;) {
              var _info = _step21.value;
              prize += _info.prize;
            }
            if (prize <= 0) {
              var list = this.chipList[i.pos - 1];
              for (var _iterator22 = _createForOfIteratorHelperLoose(list), _step22; !(_step22 = _iterator22()).done;) {
                var info = _step22.value;
                var node = info.chip;
                node.removeFromParent();
                node.destroy();
              }
              list.length = 0;
            }
          }
          this.scheduleOnce(function () {
            _this11.clear();
            _this11.clearBet();
          }, 3.5);
          this.scheduleOnce(function () {
            _this11.clearPoker();
          }, 3);
        };
        _proto.clearPoker = function clearPoker() {
          this.playerMgr.clearCard();
        };
        _proto.clearSpecialBet = function clearSpecialBet() {
          // for (let i = 5; i < this.chipList.length; i++) {
          //     let list = this.chipList[i];
          //     for (let info of list) {
          //         let node = info.chip;
          //         node.removeFromParent();
          //         node.destroy();
          //     }
          //     list.length = 0;
          // }

          for (var _iterator23 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step23; !(_step23 = _iterator23()).done;) {
            var i = _step23.value;
            var left = i.leftBetArea;
            var right = i.rightBetArea;
            var pos = i.pos - 1;
            if (left && left.prize > 0) ;else {
              var list = this.chipList[pos + 5];
              for (var _iterator24 = _createForOfIteratorHelperLoose(list), _step24; !(_step24 = _iterator24()).done;) {
                var info = _step24.value;
                var node = info.chip;
                node.removeFromParent();
                node.destroy();
              }
              list.length = 0;
              this._view.hideBetByPos(pos + 5);
            }
            if (right && right.prize > 0) ;else {
              var _list3 = this.chipList[pos + 10];
              for (var _iterator25 = _createForOfIteratorHelperLoose(_list3), _step25; !(_step25 = _iterator25()).done;) {
                var _info2 = _step25.value;
                var _node = _info2.chip;
                _node.removeFromParent();
                _node.destroy();
              }
              _list3.length = 0;
              this._view.hideBetByPos(pos + 10);
            }
          }
        };
        _proto.clearBet = function clearBet() {
          var _this12 = this;
          for (var _iterator26 = _createForOfIteratorHelperLoose(this.chipList), _step26; !(_step26 = _iterator26()).done;) {
            var list = _step26.value;
            if (list.length > 0) {
              var _loop = function _loop() {
                var child = list[i];
                var node = child.chip;
                var index = child.index;
                tween(node)
                // .delay(count * 0.05)
                .to(0.3, {
                  position: _this12.node_chips[index].position
                }).call(function () {
                  node.removeFromParent();
                  node.destroy();
                }).start();
              };
              for (var i = list.length - 1; i >= 0; i--) {
                _loop();
              }
            }
            list.length = 0;
          }
          BlackJackProxy.lastBets = BlackJackProxy.nowBets.slice();
          BlackJackProxy.nowBets = [];
        };
        _proto.clear = function clear() {
          var _this13 = this;
          this.changeGameState(BlackJackGameState.CLEAR);
          this._noBetTime = 0;
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.bet.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this13.onResize();
            _this13.changeGameState(BlackJackGameState.BET);
          }).start();
          for (var _iterator27 = _createForOfIteratorHelperLoose(this.node_bets), _step27; !(_step27 = _iterator27()).done;) {
            var i = _step27.value;
            Tween.stopAllByTarget(i);
            i.active = false;
          }
          if (BlackJackProxy.result) BlackJackProxy.result.roundStatus = -1;
          this.initCardPos();
        };
        _proto.initCardPos = function initCardPos() {
          this.cardPos = [];
          for (var _iterator28 = _createForOfIteratorHelperLoose(BlackJackDef.cardPostion), _step28; !(_step28 = _iterator28()).done;) {
            var i = _step28.value;
            var pos = v3(i.x, 0.913, i.z);
            this.cardPos.push(pos);
          }
        };
        _proto.checkMaster = function checkMaster() {
          var _this14 = this;
          var player = this.playerMgr.getMaster();
          var info = BlackJackProxy.result.dealer.hand;
          if (player.children.length < info.cards.length) {
            var card = info.cards[player.children.length];
            this.sendCardToMaster(card, false, function () {
              _this14.checkMaster();
            });
          } else {
            // this.changeGameState(BlackJackGameState.RESULT);
            this.moveCameraLock = false;
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.open.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.open.rotation.clone()
            }).call(function () {
              _this14.moveCameraLock = true;
              _this14.showResult();
            }).start();
          }
        };
        _proto.changeGameState = function changeGameState(state) {
          var _this15 = this;
          this._state = state;
          BlackJackProxy.emit(BlackJackGameEvent.CHANGE_STATE, this._state);
          this.hideBetLight();
          switch (state) {
            case BlackJackGameState.MASTER:
              {
                var info = BlackJackProxy.result.dealer.hand;
                var player = this.playerMgr.getMaster();
                var cards = info.cards;
                var node = player.children[1];
                node.getComponent(BlackJackCard).setCard(BlackJackDef.getCardNumber(cards[1].rank));
                tween(node).to(0.1, {
                  position: v3(0.015, 0.914, -0.556),
                  eulerAngles: v3(-180, 0, -180)
                }).call(function () {
                  node.eulerAngles = v3(0, 0, 0);
                  _this15._view.showMasterCard(cards[1].rank);
                  _this15.checkMaster();
                }).start();
                break;
              }
            case BlackJackGameState.BET:
              {
                this.checkBetLight();
                break;
              }
          }
        };
        _proto.hideBetLight = function hideBetLight() {
          for (var _iterator29 = _createForOfIteratorHelperLoose(this.node_bets), _step29; !(_step29 = _iterator29()).done;) {
            var i = _step29.value;
            Tween.stopAllByTarget(i);
            i.active = false;
          }
          for (var _iterator30 = _createForOfIteratorHelperLoose(this.node_leftBets), _step30; !(_step30 = _iterator30()).done;) {
            var _i8 = _step30.value;
            Tween.stopAllByTarget(_i8);
            _i8.active = false;
          }
          for (var _iterator31 = _createForOfIteratorHelperLoose(this.node_rightBets), _step31; !(_step31 = _iterator31()).done;) {
            var _i9 = _step31.value;
            Tween.stopAllByTarget(_i9);
            _i9.active = false;
          }
        };
        _proto.checkBetLight = function checkBetLight() {
          this.hideBetLight();
          for (var i = 0; i < 5; i++) {
            if (this.chipList[i].length > 0) {
              if (this.chipList[i + 5].length == 0) this.blink(this.node_leftBets[i]);
              if (this.chipList[i + 10].length == 0) this.blink(this.node_rightBets[i]);
            } else {
              this.blink(this.node_bets[i]);
            }
          }
        };
        _proto.betLast = function betLast() {
          var countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (var _iterator32 = _createForOfIteratorHelperLoose(BlackJackProxy.lastBets), _step32; !(_step32 = _iterator32()).done;) {
            var i = _step32.value;
            countList[i.Pos]++;
            this.addBetByInfo(i, countList[i.Pos] < 10);
          }
        };
        _proto.betRevert = function betRevert() {
          if (BlackJackProxy.nowBets.length > 0) {
            // let info = BlackJackProxy.nowBets.pop();
            BlackJackProxy.nowBets.length = 0;
            for (var _iterator33 = _createForOfIteratorHelperLoose(this.chipList), _step33; !(_step33 = _iterator33()).done;) {
              var i = _step33.value;
              for (var _iterator34 = _createForOfIteratorHelperLoose(i), _step34; !(_step34 = _iterator34()).done;) {
                var child = _step34.value;
                var node = child.chip;
                node.removeFromParent();
                node.destroy();
              }
              i.length = 0;
            }
            BlackJackProxy.emit(BlackJackGameEvent.ADD_BET);
            // BlackJackDef.palyAudio(BlackJackDef.audio.CANCEL);
            this.checkBetLight();
          }
        };
        _proto.betDouble = function betDouble() {
          var list = BlackJackProxy.nowBets.slice();
          var countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          if (list.length > 0) {
            for (var _iterator35 = _createForOfIteratorHelperLoose(list), _step35; !(_step35 = _iterator35()).done;) {
              var i = _step35.value;
              countList[i.Pos]++;
              if (countList[i.Pos] > 20) {
                continue;
              }
              if (!this.addBetByInfo(i, countList[i.Pos] < 10)) {
                break;
              }
            }
          }
        };
        _proto.addBetByInfo = function addBetByInfo(i, needChip) {
          if (needChip === void 0) {
            needChip = true;
          }
          var pos = i.Pos;
          var index = 0;
          var find = false;
          for (var j = 0; j < BlackJackDef.chipNumbers.length; j++) {
            if (BlackJackDef.chipNumbers[j] == i.Amount) {
              index = j;
              find = true;
              break;
            }
          }
          if (find) {
            return this.addBet(pos, index, true, needChip);
          }
          return false;
        };
        _proto.addBet = function addBet(posIndex, index, isFirst, needChip) {
          var _this16 = this;
          if (isFirst === void 0) {
            isFirst = true;
          }
          if (needChip === void 0) {
            needChip = true;
          }
          var position = posIndex % 5;
          var t = Math.floor(posIndex / 5);
          var node_bets = null;
          if (t == 0) {
            node_bets = this.node_bets;
          } else if (t == 1) {
            node_bets = this.node_leftBets;
          } else {
            node_bets = this.node_rightBets;
          }
          var allBet = 0;
          for (var _iterator36 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step36; !(_step36 = _iterator36()).done;) {
            var i = _step36.value;
            allBet += i.Amount;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          gold -= BlackJackDef.chipNumbers[index];
          if (isFirst && gold < 0) {
            Common.showTip(i18n.errTip("30003"));
            return false;
          }

          // index = this.checkMergeChip(posIndex, index);

          node_bets[position].active = true;
          tween(node_bets[position]).delay(0.1).call(function () {
            _this16.node_bets[position].active = false;
          }).start();
          if (needChip) {
            var pos = node_bets[position].position.clone();
            // pos.z += BlackJackDef.position[position].z;
            var len = this.chipList[posIndex].length > 10 ? 10 : this.chipList[posIndex].length;
            pos.y += len * 0.005;
            var chip = instantiate(this.node_chips[index]);
            var angle = this.getAngleByPos(position);
            chip.eulerAngles = v3(-90, angle, 0);
            this.chipParent.addChild(chip);
            tween(chip).to(0.3, {
              position: pos
            }).call(function () {
              _this16.checkChipList(posIndex);
            }).start();
            this.chipList[posIndex].push({
              chip: chip,
              index: index
            });
          }
          BlackJackDef.palyAudio(BlackJackDef.audio.ADDBET);
          if (isFirst) {
            BlackJackProxy.nowBets.push({
              Pos: posIndex,
              Amount: BlackJackDef.chipNumbers[index]
            });
            BlackJackProxy.emit(BlackJackGameEvent.ADD_BET, {
              Pos: posIndex,
              Amount: BlackJackDef.chipNumbers[index]
            });
            this.checkBetLight();
          }
          return true;
        };
        _proto.checkChipList = function checkChipList(posIndex) {
          var chipList = this.chipList[posIndex];
          if (chipList.length > 10) {
            for (var i = 9; i < chipList.length; i++) {
              chipList[i].chip.active = false;
            }
          }
        };
        _proto.checkMergeChip = function checkMergeChip(posIndex, chipIndex) {
          var mergeCounts = [10, 5, 2, 5, 2, 5, 2];
          var chipList = this.chipList[posIndex];
          // let chipInfo = chipList[chipList.length - 1];
          //不存在能合并
          if (!mergeCounts[chipIndex]) {
            return chipIndex;
          }
          var indexList = [];
          for (var i = 0; i < chipList.length; i++) {
            if (chipList[i].index == chipIndex) {
              indexList.push(i);
            }
          }
          var moveCount = mergeCounts[chipIndex] - 1;
          if (indexList.length >= moveCount) {
            var index = 0;
            for (var _i10 = indexList.length - 1; _i10 >= 0; _i10--) {
              chipList[indexList[_i10]].chip.removeFromParent();
              chipList[indexList[_i10]].chip.destroy();
              chipList.splice(indexList[_i10], 1);
              index++;
              if (index >= moveCount) {
                break;
              }
            }
            index = 0;
            for (var _i11 = BlackJackProxy.nowBets.length - 1; _i11 >= 0; _i11--) {
              if (BlackJackProxy.nowBets[_i11].Pos == posIndex && BlackJackProxy.nowBets[_i11].Amount == BlackJackDef.chipNumbers[chipIndex]) {
                BlackJackProxy.nowBets.splice(_i11, 1);
              }
              index++;
              if (index >= moveCount) {
                break;
              }
            }
            for (var _i12 = 0; _i12 < chipList.length; _i12++) {
              var node = chipList[_i12].chip;
              if (isValid(node)) node.setPosition(node.position.x, 0.913 + _i12 * 0.005, node.position.z);
            }
            return this.checkMergeChip(posIndex, ++chipIndex);
          }
          return chipIndex;
        };
        _proto.changeToBet = function changeToBet() {
          var _this17 = this;
          if (this._state == BlackJackGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(BlackJackGameState.BET);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.bet.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              // this.changeGameState(BlackJackGameState.BET);
              _this17.onResize();
            }).start();
            return;
          }
        }

        // protected lateUpdate(dt: number): void {
        //     const cameraPos = this.mainCamera.node.position;
        //     const nodePos = this.txt_lab.position;
        //     // 计算朝向
        //     const direction = cameraPos.subtract(nodePos).normalize();

        //     // 更新文本节点的朝向
        //     this.txt_lab.lookAt(cameraPos);
        // }
        ;

        _proto.sendCardToMaster = function sendCardToMaster(card, black, callback) {
          if (black === void 0) {
            black = false;
          }
          if (callback === void 0) {
            callback = null;
          }
          var node = this.cardMgr.getCard(card.rank, card.suit);
          // node.setPosition(0.418, 0.912, -0.668);
          node.setPosition(0.417, 0.913, -0.665);
          node.eulerAngles = v3(-180, 15, 0);
          // this.cardMgr.node.addChild(node);

          var angleX = black ? -180 : 0;
          var player = this.playerMgr.getMaster();
          var len = player.children.length;
          var dis = len > 1 ? 0.015 : 0.06;
          var x = 0 + len * dis;
          var z = -0.556;
          player.addChild(node);
          var y = 0.913 + len * 0.001;
          tween(node).to(0.03, {
            position: v3(0.372, 0.953, -0.626)
          }).to(0.3, {
            position: v3(x, y, z),
            eulerAngles: v3(angleX, 0, 0)
          }).call(function () {
            if (!black) {
              BlackJackProxy.emit(BlackJackGameEvent.ADD_CARD_TOMASTER, {
                card: card.rank
              });
            }
            if (callback) {
              callback();
            }
          }).start();
          BlackJackDef.palyAudio(BlackJackDef.audio.CARD);
        };
        _proto.getAngleByPos = function getAngleByPos(pos) {
          var point = v3(0, 0.913, -0.755);
          var radians = Math.atan(this.cardPos[pos].x / (this.cardPos[pos].z - point.z));
          var angle = radians * (180 / Math.PI);
          return angle;
        };
        _proto.sendCardToPlayer = function sendCardToPlayer(card, pos, callback, isDouble) {
          if (callback === void 0) {
            callback = null;
          }
          if (isDouble === void 0) {
            isDouble = false;
          }
          var point = v3(0, 0.913, -0.755);
          var node = this.cardMgr.getCard(card.rank, card.suit);
          // node.setPosition(0.418, 0.912, -0.668);
          node.setPosition(0.417, 0.913, -0.665);
          node.eulerAngles = v3(-180, 15, 0);
          // this.cardMgr.node.addChild(node);

          var player = this.playerMgr.getPlayer(pos - 1);
          var len = player.children.length;
          var x = this.cardPos[pos - 1].x;
          var z = this.cardPos[pos - 1].z;
          var angle = this.getAngleByPos(pos - 1);
          var tempPos = v3(x, 0.913, z);
          var angleStep = 1.4;
          var disStep = 0.04;
          player.addChild(node);
          var distance = this.getDistance(point, tempPos);
          var moveAngle = angleStep * len;
          if (isDouble) {
            moveAngle = 0;
            disStep = 0.07;
          }
          var dis = (angle + moveAngle) / 180 * Math.PI;
          var cos = Math.cos(dis);
          var sin = Math.sin(dis);
          var position = new Vec3();
          position.set(sin * distance, 0, cos * distance - 0.755);
          position = position.lerp(point, disStep * len);
          position.y = 0.913 + len * 0.001;
          tween(node).to(0.03, {
            position: v3(0.372, 0.953, -0.626)
          }).to(0.3, {
            position: position,
            eulerAngles: v3(0, angle, 0)
          }).call(function () {
            BlackJackProxy.emit(BlackJackGameEvent.ADD_CARD_TOPLAYER, {
              card: card.rank,
              pos: pos
            });
            if (callback) {
              callback();
            }
          }).start();
          BlackJackDef.palyAudio(BlackJackDef.audio.CARD);
        };
        _proto.sendCard = function sendCard() {
          var _this18 = this;
          var index = 0;
          for (var _iterator37 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step37; !(_step37 = _iterator37()).done;) {
            var i = _step37.value;
            var _loop2 = function _loop2() {
              var cards = _step39.value;
              var pos = i.pos;
              _this18.scheduleOnce(function () {
                _this18.sendCardToPlayer(cards.cards[0], pos + cards.handIndex * 5);
              }, index * 0.2);
              index++;
            };
            for (var _iterator39 = _createForOfIteratorHelperLoose(i.hands), _step39; !(_step39 = _iterator39()).done;) {
              _loop2();
            }
          }
          this.scheduleOnce(function () {
            _this18.sendCardToMaster(BlackJackProxy.result.dealer.hand.cards[0]);
          }, index * 0.2);
          index++;
          for (var _iterator38 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step38; !(_step38 = _iterator38()).done;) {
            var _i13 = _step38.value;
            var _loop3 = function _loop3() {
              var cards = _step40.value;
              var pos = _i13.pos;
              _this18.scheduleOnce(function () {
                _this18.sendCardToPlayer(cards.cards[1], pos + cards.handIndex * 5);
              }, index * 0.2);
              index++;
            };
            for (var _iterator40 = _createForOfIteratorHelperLoose(_i13.hands), _step40; !(_step40 = _iterator40()).done;) {
              _loop3();
            }
          }
          this.scheduleOnce(function () {
            _this18.sendCardToMaster(BlackJackProxy.result.dealer.hand.cards[1], true);
          }, index * 0.2);
          index++;
          this.scheduleOnce(function () {
            if (BlackJackProxy.result.player.insurance.insuranceStatus == -1) {
              _this18.changeGameState(BlackJackGameState.INSURANCE);
            } else {
              _this18.checkNext();
            }
            _this18.clearSpecialBet();
          }, index * 0.2);
        };
        _proto.checkClick = function checkClick(event) {
          var _this19 = this;
          this._noBetTime = 0;
          if (this._state == BlackJackGameState.LOOK) {
            this._noBetTime = 0;
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.bet.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this19.onResize();
              _this19.changeGameState(BlackJackGameState.BET);
            }).start();
            return;
          }
          if (this._state != BlackJackGameState.BET) return;
          for (var i = 0; i < this._posChips.length; i++) {
            var dis = GUtil.GetDistance(this._posChips[i], event.getUILocation());
            if (dis < 50) {
              this.selectChip(i);
              // let position = this.node_chips[i].position.clone();
              // position.y += 0.02;
              // this.node_chips[i].position = position;

              // BlackJackDef.palyAudio(BlackJackDef.audio.CHANGEBET);
            }
          }

          // let outRay = new cc.geometry.Ray();
          // this.mainCamera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          // console.log("outRay", outRay);

          for (var _i14 = 0; _i14 < this._posLights.length; _i14++) {
            var _dis = GUtil.GetDistance(this._posLights[_i14], event.getUILocation());
            if (_dis < 53) {
              if (this._selectChipIndex >= 0) {
                this.addBet(_i14, this._selectChipIndex);
                return;
              } else {
                Common.showTip(i18n.lang.chipTip);
                return;
              }
            }
          }
          for (var _i15 = 0; _i15 < this._posLeftLights.length; _i15++) {
            var size = BlackJackDef.rects[_i15];
            var rect1 = rect(this._posLeftLights[_i15].x - size.width / 2, this._posLeftLights[_i15].y - size.height / 2, size.width, size.height);
            if (rect1.contains(event.getUILocation())) {
              if (this._selectChipIndex >= 0) {
                if (this.chipList[_i15].length > 0) {
                  this.addBet(_i15 + 5, this._selectChipIndex);
                } else {
                  Common.showTip(i18n.lang.chipMainTip);
                }
                return;
              } else {
                Common.showTip(i18n.lang.chipTip);
                return;
              }
            }
          }
          for (var _i16 = 0; _i16 < this._posRightLights.length; _i16++) {
            var _size = BlackJackDef.rects[_i16];
            var _rect = rect(this._posRightLights[_i16].x - _size.width / 2, this._posRightLights[_i16].y - _size.height / 2, _size.width, _size.height);
            if (_rect.contains(event.getUILocation())) {
              if (this._selectChipIndex >= 0) {
                if (this.chipList[_i16].length > 0) {
                  this.addBet(_i16 + 10, this._selectChipIndex);
                } else {
                  Common.showTip(i18n.lang.chipMainTip);
                }
                return;
              } else {
                Common.showTip(i18n.lang.chipTip);
                return;
              }
            }
          }
        };
        _proto.selectChip = function selectChip(i) {
          this._selectChipIndex = i;
          var pos = this.node_chips[i].position.clone();
          for (var _iterator41 = _createForOfIteratorHelperLoose(this.highLights), _step41; !(_step41 = _iterator41()).done;) {
            var node = _step41.value;
            node.active = true;
            node.position = pos;
            pos.y += 0.001;
          }
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.update = function update(dt) {
          if (this._state == BlackJackGameState.BET) {
            this._noBetTime += dt;
            if (this._noBetTime > MOVETIME) {
              this._noBetTime = 0;
              this.changeGameState(BlackJackGameState.LOOK);
            }
          }
        };
        return BlackJackScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_leftBets", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_rightBets", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_chips", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "chipParent", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "highLights", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "cardMgr", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "playerMgr", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_doubleLight", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_splight1", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_splight2", [_dec16], {
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

System.register("chunks:///_virtual/BlackJackView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackDef.ts', './BlackJackProxy.ts', './NetManager.ts', './Common.ts', './ViewManager.ts', './ProxyMgr.ts', './DataManager.ts', './GameRecordLayer.ts', './I18n.ts', './BlackJackPlayerBtns.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Label, Button, SpriteFrame, Sprite, UIOpacity, tween, Tween, v3, sp, instantiate, Component, BlackJackDef, BlackJackProxy, BlackJackGameEvent, BlackJackGameState, BlackJackMsg, NetManager, Common, ViewManager, ProxyMgr, DataManager, UserProxyEvent, UserKey, GameRecordLayer, i18n, BlackJackPlayerBtns, I18nLocal;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      v3 = module.v3;
      sp = module.sp;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      BlackJackDef = module.BlackJackDef;
    }, function (module) {
      BlackJackProxy = module.default;
      BlackJackGameEvent = module.BlackJackGameEvent;
      BlackJackGameState = module.BlackJackGameState;
      BlackJackMsg = module.BlackJackMsg;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      DataManager = module.default;
      UserProxyEvent = module.UserProxyEvent;
      UserKey = module.UserKey;
    }, function (module) {
      GameRecordLayer = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      BlackJackPlayerBtns = module.default;
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "14a17mZ81dNgLtm6r/jNwOq", "BlackJackView", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var tempV3 = new Vec3();
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var BlackJackView = exports('default', (_dec = ccclass("BlackJackView"), _dec2 = menu("game/BlackJackGame/BlackJackView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Label), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Button), _dec17 = property(Node), _dec18 = property(Label), _dec19 = property(Node), _dec20 = property(Label), _dec21 = property(Node), _dec22 = property(BlackJackPlayerBtns), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Sprite), _dec28 = property(SpriteFrame), _dec29 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BlackJackView, _Component);
        function BlackJackView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_result", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betInfo", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bets", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betTip", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_totalBet", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBet", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betLast", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_betDouble", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_cardPoints", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_cardPoints", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_master", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_masterCard", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_selectInsurance", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerBtns", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bet", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_cardState", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_cardStates", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_insuranceProtects", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_insurance", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_insurances", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor27, _assertThisInitialized(_this));
          _this._state = void 0;
          _this._camera = void 0;
          _this._cameraRotation = 0;
          _this._tempRotation = 0;
          _this._cardList = [[], [], [], [], [], [], [], [], [], []];
          _this._hasSplits = [false, false, false, false, false, false, false, false, false, false];
          _this._masterCardList = [];
          _this.cardStates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          return _this;
        }
        var _proto = BlackJackView.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
          this.initSelfInfo();
          this.clear();
          this.initEvent();
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node_betTip.getComponent(UIOpacity).opacity = 0;
          tween(this.node_betTip.getComponent(UIOpacity)).delay(2.2).to(0.2, {
            opacity: 255
          }).call(function () {
            // BlackJackDef.palyAudio(BlackJackDef.audio.WARNING);
          }).delay(1).call(function () {
            _this2.node_betTip.active = false;
          }).start();

          // this.frame_insurances
          var _loop = function _loop(i) {
            I18nLocal.getLocalRes("BlackJackGame", _this2.frame_insurances[i].name).then(function (sprFrame) {
              _this2.frame_insurances[i] = sprFrame;
            });
          };
          for (var i = 0; i < this.frame_insurances.length; i++) {
            _loop(i);
          }
        };
        _proto.setCamera = function setCamera(node) {
          this._camera = node;
        };
        _proto.initEvent = function initEvent() {
          BlackJackProxy.on(BlackJackGameEvent.CHANGE_STATE, this.changeState, this);
          BlackJackProxy.on(BlackJackGameEvent.ADD_BET, this.addBet, this);
          BlackJackProxy.on(BlackJackGameEvent.ADD_CARD_TOPLAYER, this.addCard, this);
          BlackJackProxy.on(BlackJackGameEvent.ADD_CARD_TOMASTER, this.addCardToMaster, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, this.updateGold, this);
        };
        _proto.resize = function resize(info) {
          this.stopCardAni();
          var posList = info.posList;
          for (var i = 0; i < posList.length; i++) {
            if (this.node_cardPoints[i]) {
              this.node_cardPoints[i].setPosition(posList[i].x - 120, posList[i].y + 80);
            }

            // if (this.node_cardPoints[i + 5]) {
            //     this.node_cardPoints[i + 5].setPosition(posList[i].x - 60, posList[i].y - +80);
            // }

            if (this.sprite_cardStates[i]) {
              this.sprite_cardStates[i].setPosition(posList[i].x - 120, posList[i].y + 80);
            }

            // if (this.sprite_cardStates[i + 5]) {
            //     this.sprite_cardStates[i + 5].node.setPosition(posList[i].x - 60, posList[i].y + 80);
            // }
          }

          var txtList = info.txtList;
          for (var _i = 0; _i < txtList.length; _i++) {
            if (this.node_bets[_i]) {
              this.node_bets[_i].setPosition(txtList[_i].x, txtList[_i].y);
            }
          }
          this.node_master.setPosition(info.master.x - 80, info.master.y);
        };
        _proto.stopCardAni = function stopCardAni(data) {
          if (data === void 0) {
            data = null;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this.node_cardPoints), _step; !(_step = _iterator()).done;) {
            var _i2 = _step.value;
            Tween.stopAllByTarget(_i2);
          }
          if (data) {
            for (var i = 0; i < data.pos - 1; i++) {
              this.checkCard(i, true);
              this.checkCard(i + 5, true);
            }
            if (data.info.handIndex > 0) {
              this.checkCard(data.pos - 1, true);
            }
          }
        };
        _proto.setPlayerInfo = function setPlayerInfo(data) {
          this.playerBtns.setInfo(data.info);
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node_cardPoints), _step2; !(_step2 = _iterator2()).done;) {
            var i = _step2.value;
            Tween.stopAllByTarget(i);
          }
          var pos = data.pos + data.info.handIndex * 5 - 1;
          tween(this.node_cardPoints[pos]).to(0.8, {
            position: v3(this.node_cardPoints[pos].position.x, this.node_cardPoints[pos].position.y + 12)
          }).to(0.8, {
            position: v3(this.node_cardPoints[pos].position.x, this.node_cardPoints[pos].position.y - 12)
          }).union().repeatForever().start();
        };
        _proto.calMaster = function calMaster() {
          var str = "";
          var num = 0;
          var hasA = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this._masterCardList), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            var count = BlackJackDef.getCardNumber(i);
            if (count == 13) {
              count = 0;
            } else if (count > 9) {
              count = 9;
            }
            if (count == 0) {
              hasA = true;
            }
            num += count + 1;
          }
          str = num + "";
          if (num < 11 && hasA) {
            num += 10;
            // str += "/" + (num + 10);
            str = num + "";
          } else if (num == 11 && hasA) {
            str = "21";
          }
          this.txt_masterCard.string = str;
        };
        _proto.showMasterCard = function showMasterCard(num) {
          this._masterCardList[1] = num;
          this.calMaster();
        };
        _proto.addCardToMaster = function addCardToMaster(info) {
          this.node_master.active = true;
          this._masterCardList.push(info.card);
          this.calMaster();
        };
        _proto.addCard = function addCard(info) {
          var pos = info.pos - 1;
          this.node_cardPoints[pos].active = true;
          this._cardList[pos].push(info.card);
          this.checkCard(pos);
        };
        _proto.checkCard = function checkCard(pos, stop) {
          if (stop === void 0) {
            stop = false;
          }
          var str = "";
          var num = 0;
          var hasA = false;
          for (var _iterator4 = _createForOfIteratorHelperLoose(this._cardList[pos]), _step4; !(_step4 = _iterator4()).done;) {
            var i = _step4.value;
            var count = BlackJackDef.getCardNumber(i);
            if (count > 9) {
              count = 9;
            }
            if (count == 0) {
              hasA = true;
            }
            num += count + 1;
          }
          if (hasA && stop && num <= 11) {
            num += 10;
          }
          str = num + "";
          if (num < 11 && hasA) {
            str += "/" + (num + 10);
          } else if (num == 11 && hasA) {
            str = "21";
          }
          this.txt_cardPoints[pos].string = str;
          if (num > 21) {
            this.showCardState(pos, 2);
          } else if (num == 21 && this._cardList[pos].length == 2 && !this._hasSplits[pos]) {
            this.showCardState(pos, 6);
          }
        };
        _proto.split = function split(pos) {
          var card = this._cardList[pos - 1].pop();
          this.addCard({
            pos: pos + 5,
            card: card
          });
          this._hasSplits[pos - 1] = true;
          this._hasSplits[pos - 1 + 5] = true;
          this.checkCard(pos - 1);
        };
        _proto.hideBetByPos = function hideBetByPos(pos) {
          this.node_bets[pos].active = false;
        };
        _proto.doubleBetByPos = function doubleBetByPos(pos) {
          var betCount = 0;
          for (var _iterator5 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step5; !(_step5 = _iterator5()).done;) {
            var i = _step5.value;
            if (i.Pos == pos) {
              betCount += i.Amount;
            }
          }
          this.txt_bets[pos].string = Common.ChangeMoneyShow(betCount * 2, 2);
        };
        _proto.addBet = function addBet() {
          this.node_betInfo.active = true;
          var betInfo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var allBet = 0;
          for (var _iterator6 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step6; !(_step6 = _iterator6()).done;) {
            var _i3 = _step6.value;
            betInfo[_i3.Pos] += _i3.Amount;
            allBet += _i3.Amount;
          }
          for (var i = 0; i < betInfo.length; i++) {
            this.node_bets[i].active = betInfo[i] > 0;
            this.txt_bets[i].string = Common.ChangeMoneyShow(betInfo[i], 2);
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          this.selfGold.string = Common.numFormat(gold);
          // this.txt_totalBet.string = Common.ChangeMoneyFormat(allBet, 2);
          // this.node_totalBet.active = allBet > 0;
          // if (allBet > 0) {
          //     if (cc.Tween.getRunningCount(this.node_start) == 0) {
          //         cc.tween(this.node_start)
          //             .to(0.3, { scale: cc.v3(0.9, 0.9, 1) })
          //             .to(0.3, { scale: cc.v3(1, 1, 1) })
          //             .union()
          //             .repeatForever()
          //             .start();
          //     }
          // } else {
          //     cc.Tween.stopAllByTarget(this.node_start);
          // }

          this.btn_betDouble.interactable = BlackJackProxy.nowBets.length > 0;
          if (BlackJackProxy.lastBets.length > 0 && BlackJackProxy.nowBets.length == 0) {
            this.node_betLast.active = true;
          } else {
            this.node_betLast.active = false;
          }
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
          this.node_totalBet.active = false;
          this.node_selectInsurance.active = false;
          this.playerBtns.node.active = false;
          this.node_bet.active = false;
          switch (state) {
            case BlackJackGameState.SHAKE:
              {
                Tween.stopAllByTarget(this.node_btns);
                tween(this.node_btns).to(0.5, {
                  position: v3(this.node_btns.position.x, -740, this.node_btns.position.z)
                }).start();
                break;
              }
            case BlackJackGameState.CLEAR:
              {
                this.clear();
                break;
              }
            case BlackJackGameState.RESULT:
              {
                this.showResult();
                break;
              }
            case BlackJackGameState.LOOK:
              {
                this.node_betInfo.active = false;
                break;
              }
            case BlackJackGameState.BET:
              {
                this.node_betInfo.active = true;
                this.node_bet.active = true;
                if (BlackJackProxy.lastBets.length > 0 && BlackJackProxy.nowBets.length == 0) {
                  this.node_betLast.active = true;
                } else {
                  this.node_betLast.active = false;
                }
                break;
              }
            case BlackJackGameState.INSURANCE:
              {
                this.node_selectInsurance.active = true;
                break;
              }
            case BlackJackGameState.PLAYER:
              {
                this.playerBtns.node.active = true;
                this.playerBtns.reset();
                break;
              }
            case BlackJackGameState.MASTER:
              {
                this.stopCardAni({
                  pos: 6,
                  info: {}
                });
                break;
              }
          }
        };
        _proto.showCardState = function showCardState(pos, state) {
          if (this.cardStates[pos] == state + 1) {
            return;
          }
          this.cardStates[pos] = state + 1;
          var names = ["win", "lose", "burst", "push", "", "cashout", "bj"];
          this.node_cardPoints[pos].active = false;
          this.sprite_cardStates[pos].active = true;
          // this.sprite_cardStates[pos].spriteFrame = this.frame_cardState[state];
          var sp$1 = this.sprite_cardStates[pos].getComponent(sp.Skeleton);
          sp$1.setAnimation(0, names[state] + "_intro", false);
          sp$1.addAnimation(0, names[state] + "_idle", true);
          if (state == 6) {
            BlackJackDef.palyAudio(BlackJackDef.audio.BJ);
          }
        };
        _proto.showPlayerInsurance = function showPlayerInsurance(pos) {
          this.node_insuranceProtects[pos].active = true;
        };
        _proto.showInsurance = function showInsurance() {
          this.node_selectInsurance.active = false;
          this.sprite_insurance.node.active = true;
          if (BlackJackProxy.result.player.insurance.dealerIsBlackJack) {
            this.sprite_insurance.spriteFrame = this.frame_insurances[0];
          } else {
            this.sprite_insurance.spriteFrame = this.frame_insurances[1];
          }
          this.sprite_insurance.node.getComponent(UIOpacity).opacity = 255;
          tween(this.sprite_insurance.node.getComponent(UIOpacity)).delay(2).to(0.5, {
            opacity: 0
          }).start();
        };
        _proto.updateGold = function updateGold() {
          if (BlackJackProxy.result && BlackJackProxy.result.roundStatus != 0) {
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            this.selfGold.string = Common.numFormat(gold);
          }
        };
        _proto.showResult = function showResult() {
          if (BlackJackProxy.result.dealer.playerPrize > 0) BlackJackDef.palyAudio(BlackJackDef.audio.WIN);
          this.node_result.active = true;
          this.txt_win.string = Common.ChangeMoneyFormat(BlackJackProxy.result.dealer.playerPrize, 2);
          for (var _iterator7 = _createForOfIteratorHelperLoose(this.node_bets), _step7; !(_step7 = _iterator7()).done;) {
            var i = _step7.value;
            i.active = false;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
          for (var _iterator8 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step8; !(_step8 = _iterator8()).done;) {
            var _i4 = _step8.value;
            for (var _iterator9 = _createForOfIteratorHelperLoose(_i4.hands), _step9; !(_step9 = _iterator9()).done;) {
              var info = _step9.value;
              if (info.redemptionStatus == 1) {
                this.showCardState(_i4.pos - 1 + info.handIndex * 5, 5); // 投降输一半
              } else if (info.prize - info.bet > 0) {
                this.showCardState(_i4.pos - 1 + info.handIndex * 5, 0); //赢
              } else if (info.prize - info.bet == 0) {
                this.showCardState(_i4.pos - 1 + info.handIndex * 5, 3); //平
              } else {
                this.showCardState(_i4.pos - 1 + info.handIndex * 5, 1); //输
              }

              if (BlackJackProxy.result.player.insurance.dealerIsBlackJack && BlackJackProxy.result.player.insurance.insuranceStatus) {
                this.showPlayerInsurance(_i4.pos - 1);
              }
            }
          }
        };
        _proto.clear = function clear() {
          Tween.stopAllByTarget(this.node_btns);
          tween(this.node_btns).to(0.5, {
            position: v3(this.node_btns.position.x, -540, this.node_btns.position.z)
          }).start();
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.node_bets), _step10; !(_step10 = _iterator10()).done;) {
            var i = _step10.value;
            i.active = false;
          }
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.node_cardPoints), _step11; !(_step11 = _iterator11()).done;) {
            var _i5 = _step11.value;
            Tween.stopAllByTarget(_i5);
            _i5.active = false;
          }
          for (var _iterator12 = _createForOfIteratorHelperLoose(this.node_insuranceProtects), _step12; !(_step12 = _iterator12()).done;) {
            var _i6 = _step12.value;
            _i6.active = false;
          }
          for (var _iterator13 = _createForOfIteratorHelperLoose(this.sprite_cardStates), _step13; !(_step13 = _iterator13()).done;) {
            var _i7 = _step13.value;
            _i7.active = false;
          }
          this.node_betInfo.active = false;
          this.node_totalBet.active = false;
          this.node_master.active = false;
          this.node_selectInsurance.active = false;
          for (var _iterator14 = _createForOfIteratorHelperLoose(this._cardList), _step14; !(_step14 = _iterator14()).done;) {
            var _i8 = _step14.value;
            _i8.length = 0;
          }
          this._masterCardList.length = 0;
          this.node_result.active = false;
          this.sprite_insurance.node.active = false;
          this._hasSplits = [false, false, false, false, false, false, false, false, false, false];
          this.cardStates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.touchStart = function touchStart(event) {
          if (this._state != BlackJackGameState.BET) return;
          this._tempRotation = this._cameraRotation;
        };
        _proto.touchMove = function touchMove(event) {
          if (this._state != BlackJackGameState.BET) return;
          this._cameraRotation -= event.getDeltaX() / 8;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (Math.abs(this._cameraRotation - this._tempRotation) > 1) {
            BlackJackProxy.emit(BlackJackGameEvent.TOUCH_MOVE);
            if (this._cameraRotation > 65) {
              this._cameraRotation = 65;
            }
            if (this._cameraRotation < -65) {
              this._cameraRotation = -65;
            }
            var dis = this._cameraRotation / 180 * Math.PI;
            var cos = Math.cos(dis);
            var sin = Math.sin(dis);
            var pos = BlackJackDef.cameraInfo.bet.position;
            tempV3.set(sin * 1.28, pos.y, cos * 1.28 - 0.75);
            this._camera.setPosition(tempV3);
            tempV3.set(BlackJackDef.cameraInfo.bet.rotation.x, BlackJackDef.cameraInfo.bet.rotation.y + this._cameraRotation, BlackJackDef.cameraInfo.bet.rotation.z);
            this._camera.eulerAngles = tempV3;
          }
        };
        _proto.touchEnd = function touchEnd(event) {
          if (Math.abs(this._cameraRotation - this._tempRotation) > 1) ;else {
            BlackJackProxy.emit(BlackJackGameEvent.TOUCH, event.touch);
          }
          this._tempRotation = this._cameraRotation;
        };
        _proto.touchCancel = function touchCancel(event) {
          this._tempRotation = this._cameraRotation;
        };
        _proto.onClickExit = function onClickExit() {
          Common.returnToHall(this, BlackJackProxy.BUNDLE);
        };
        _proto.onClickRecord = function onClickRecord() {
          // GUtil.openRecord("BlackJack", 8);

          Common.loadPopBuddle("prefab/BlackJackRecord", BlackJackProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(GameRecordLayer).setGameType("blackJack", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          Common.loadPopBuddle("prefab/BlackJackSetting", BlackJackProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/BlackJackHelp", BlackJackProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/BlackJackHistory", BlackJackProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.checkState = function checkState() {
          if (this._state == BlackJackGameState.LOOK) {
            BlackJackProxy.emit(BlackJackGameEvent.CHANGE_TO_BET);
            return true;
          }
          if (this._state != BlackJackGameState.BET) return false;
          return true;
        };
        _proto.onClickStart = function onClickStart() {
          if (!this.checkState()) return;
          if (BlackJackProxy.nowBets.length == 0) {
            Common.showTip(i18n.lang[10011]);
            return;
          }

          // let betArr = [
          //     {
          //         Pos: 0,
          //         Amount: 200000,
          //     },
          // ];
          // NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolBlackJack.bet, { betMsg: JSON.stringify(BlackJackProxy.nowBets) });
          Tween.stopAllByTarget(this.node_start);
          var info = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (var _iterator15 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step15; !(_step15 = _iterator15()).done;) {
            var _i9 = _step15.value;
            info[_i9.Pos] += _i9.Amount;
          }
          this._state = BlackJackGameState.RESULT;
          var seats = [];
          for (var i = 0; i < 5; i++) {
            if (info[i] > 0) {
              var betInfo = {
                pos: i + 1 + "",
                handIndex: "0",
                bet: info[i] + "",
                leftBet: info[i + 5] + "",
                rightBet: info[i + 10] + ""
              };
              seats.push(betInfo);
            }
          }
          NetManager.instance.sendOnlineData(BlackJackMsg.actionDeal, {
            seats: seats
          });
        };
        _proto.onClickLastBet = function onClickLastBet() {
          if (!this.checkState()) return;
          BlackJackProxy.emit(BlackJackGameEvent.BET_LAST);
          this.node_betLast.active = false;
        };
        _proto.onClickBetRevert = function onClickBetRevert() {
          BlackJackProxy.emit(BlackJackGameEvent.BET_REVERT);
        };
        _proto.onClickBetDouble = function onClickBetDouble() {
          BlackJackProxy.emit(BlackJackGameEvent.BET_DOUBLE);
        };
        _proto.onClickSafe = function onClickSafe() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < BlackJackProxy.result.player.insurance.insuranceBetAmount) {
            Common.showTip(i18n.errTip("30003"));
            return;
          }
          this.node_selectInsurance.active = false;
          NetManager.instance.sendOnlineData(BlackJackMsg.actionInsurance, {
            insurance: "1"
          });
        };
        _proto.onClickSafeCancel = function onClickSafeCancel() {
          this.node_selectInsurance.active = false;
          NetManager.instance.sendOnlineData(BlackJackMsg.actionInsurance, {
            insurance: "0"
          });
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return BlackJackView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selfName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_result", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_betInfo", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_bets", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_betTip", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_totalBet", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBet", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_betLast", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "btn_betDouble", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_cardPoints", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txt_cardPoints", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_master", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txt_masterCard", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_selectInsurance", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "playerBtns", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "node_bet", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "frame_cardState", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "sprite_cardStates", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "node_insuranceProtects", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "sprite_insurance", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "frame_insurances", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec29], {
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

System.register("chunks:///_virtual/first-person-camera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, math, KeyCode, Node, input, Input, v3, game, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      math = module.math;
      KeyCode = module.KeyCode;
      Node = module.Node;
      input = module.input;
      Input = module.Input;
      v3 = module.v3;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "05c0bG6kUpEspwDyMd/MOMp", "first-person-camera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var KEYCODE = {
        W: "W".charCodeAt(0),
        S: "S".charCodeAt(0),
        A: "A".charCodeAt(0),
        D: "D".charCodeAt(0),
        Q: "Q".charCodeAt(0),
        E: "E".charCodeAt(0),
        SHIFT: KeyCode.SHIFT_LEFT
      };
      var FirstPersonCamera = exports('FirstPersonCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec2 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FirstPersonCamera, _Component);
        function FirstPersonCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_look", _descriptor5, _assertThisInitialized(_this));
          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          return _this;
        }
        var _proto = FirstPersonCamera.prototype;
        _proto.onLoad = function onLoad() {
          input.on(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
          Vec3.copy(this._euler, this.node.eulerAngles);
          Vec3.copy(this._position, this.node.position);
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
          input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        };
        _proto.update = function update(dt) {
          var t = Math.min(dt / this.damp, 1);
          // position
          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.position, this._position, t);
          this.node.setPosition(v3_1);
          // rotation
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setRotation(qt_1);
          if (this.node_look) {
            this.node.lookAt(this.node_look.position, v3(0, 1, 0));
            // console.log("distance ", Vec3.distance(this.node_look.position, this.node.position));
            // console.log(this.node.position);
            // console.log(this.node.eulerAngles);
          }
        };

        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.01; // delta is positive when scroll down
          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };
        _proto.onKeyDown = function onKeyDown(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = this.moveSpeedShiftScale;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z === 0) {
              v.z = -1;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z === 0) {
              v.z = 1;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x === 0) {
              v.x = -1;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x === 0) {
              v.x = 1;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y === 0) {
              v.y = -1;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y === 0) {
              v.y = 1;
            }
          }
        };
        _proto.onKeyUp = function onKeyUp(e) {
          var v = this._velocity;
          if (e.keyCode === KEYCODE.SHIFT) {
            this._speedScale = 1;
          } else if (e.keyCode === KEYCODE.W) {
            if (v.z < 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.S) {
            if (v.z > 0) {
              v.z = 0;
            }
          } else if (e.keyCode === KEYCODE.A) {
            if (v.x < 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.D) {
            if (v.x > 0) {
              v.x = 0;
            }
          } else if (e.keyCode === KEYCODE.Q) {
            if (v.y < 0) {
              v.y = 0;
            }
          } else if (e.keyCode === KEYCODE.E) {
            if (v.y > 0) {
              v.y = 0;
            }
          }
        };
        _proto.onTouchStart = function onTouchStart() {
          if (game.canvas["requestPointerLock"]) {
            game.canvas.requestPointerLock();
          }
        };
        _proto.onTouchMove = function onTouchMove(e) {
          e.getStartLocation(v2_1);
          if (v2_1.x > game.canvas.width * 0.4) {
            // rotation
            e.getDelta(v2_2);
            this._euler.y -= v2_2.x * this.rotateSpeed * 0.1;
            this._euler.x += v2_2.y * this.rotateSpeed * 0.1;
          } else {
            // position
            e.getLocation(v2_2);
            Vec2.subtract(v2_2, v2_2, v2_1);
            this._velocity.x = v2_2.x * 0.01;
            this._velocity.z = -v2_2.y * 0.01;
          }
        };
        _proto.onTouchEnd = function onTouchEnd(e) {
          if (document.exitPointerLock) {
            document.exitPointerLock();
          }
          e.getStartLocation(v2_1);
          if (v2_1.x < game.canvas.width * 0.4) {
            // position
            this._velocity.x = 0;
            this._velocity.z = 0;
          }
        };
        return FirstPersonCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeedShiftScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "rotateSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_look", [_dec2], {
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

System.register("chunks:///_virtual/label3D2.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, MeshRenderer, Component, Common;
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
      MeshRenderer = module.MeshRenderer;
      Component = module.Component;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "96fa8LVM5dP/Ijhtd5rDVbA", "label3D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var mChipName = {
        X_1k: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000,
        X_10M: 10000000
      };
      var label3D = exports('label3D', (_dec = ccclass("label3D"), _dec2 = property({
        type: Label
      }), _dec3 = property(), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(label3D, _Component);
        function label3D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "vLabel", _descriptor2, _assertThisInitialized(_this));
          _this.meshRender = null;
          return _this;
        }
        var _proto = label3D.prototype;
        _proto.start = function start() {
          this.vLabel = mChipName[this.node.parent.name];
          this.label.string = Common.ChangeMoneyShow(this.vLabel, 2);
          if (this.label.string.length == 1) {
            this.label.string = " " + this.label.string + " ";
          }
        };
        _proto.update = function update(deltaTime) {
          var _this$meshRender$mate;
          if (!this.node.parent.active) {
            return;
          }
          var spriteFrame = this.label.spriteFrame;
          var texture = spriteFrame.texture;
          this.meshRender = this.node.getComponent(MeshRenderer);
          (_this$meshRender$mate = this.meshRender.material) == null || _this$meshRender$mate.setProperty("mainTexture", texture);
        };
        return label3D;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1000;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/BlackJackGame', 'chunks:///_virtual/BlackJackGame'); 
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