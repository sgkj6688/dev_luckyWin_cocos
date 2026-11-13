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
  var cclegacy, math, v3, AudioClip, director, sys, assetManager, isValid, BlackJackProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      v3 = module.v3;
      AudioClip = module.AudioClip;
      director = module.director;
      sys = module.sys;
      assetManager = module.assetManager;
      isValid = module.isValid;
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
        }

        /**
         * 播放背景音乐。
         * 网页端按原生文件地址加载并指定 DOM Audio，由浏览器边下边播；经 bundle.load 加载时音轨会被整段解码常驻内存
         * （audioLoadMode 只对直接加载的那个文件生效，到不了 bundle 里的原生依赖）。
         * loadRemote 用相对地址时不会回调，必须转成绝对地址。流式加载失败时回退到 bundle 加载。
         */;
        BlackJackDef.palyMusic = function palyMusic(name) {
          var bundle = BlackJackProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          var play = function play(err, audio) {
            // 加载完成时可能已离开牌桌，迟到的音轨不能盖掉大厅或其他游戏的音乐。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          };
          var info = sys.isBrowser ? bundle.getInfoWithPath(path, AudioClip) : null;
          if (info) {
            var url = assetManager.utils.getUrlWithUuid(info.uuid, {
              isNative: true,
              nativeExt: ".mp3"
            });
            var options = {
              audioLoadMode: AudioClip.AudioType.DOM_AUDIO,
              ext: ".mp3"
            };
            assetManager.loadRemote(new URL(url, location.href).href, options, function (err, audio) {
              if (err || !audio) {
                bundle.load(path, AudioClip, play);
                return;
              }
              play(null, audio);
            });
            return;
          }
          bundle.load(path, AudioClip, play);
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

          // 巡视期间每帧执行，复用模块级临时向量避免分配。
          tempV3.set(x, y, z);
          tempV3.normalize();
          tempV3.multiplyScalar(this._distance);
          this.node.setPosition(tempV3);
          this.node.lookAt(this._look, Vec3.UP);
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

System.register("chunks:///_virtual/BlackJackPlayerBtns.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackProxy.ts', './DataManager.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Label, Component, BlackJackProxy, BlackJackGameEvent, BlackJackMsg, DataManager, UserKey, Common, i18n;
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
          BlackJackProxy.on(BlackJackGameEvent.REQUEST_FAIL, this.onRequestFail, this);
        };
        _proto.onDisable = function onDisable() {
          BlackJackProxy.off(BlackJackGameEvent.onBtnReset, this.reset, this);
          BlackJackProxy.off(BlackJackGameEvent.REQUEST_FAIL, this.onRequestFail, this);
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
        }

        /** 操作请求被拒绝时没有后续状态事件，按当前手牌的可用操作恢复按钮。 */;
        _proto.onRequestFail = function onRequestFail() {
          if (this._info) this.setInfo(this._info);
        }

        /**
         * 发送当前手牌的操作请求。
         * 发出后立即禁用全部按钮：响应返回前再次点击会被服务端当作下一次有效操作（如连续要两张牌）。
         * 成功由 onBtnReset 及后续 setInfo 接管，失败由 REQUEST_FAIL 恢复。
         * @param needBet 分牌、加倍需要再付一份本手下注，余额不足时只提示不发送
         */;
        _proto.sendAction = function sendAction(msg, needBet) {
          if (needBet === void 0) {
            needBet = false;
          }
          var next = BlackJackProxy.getNextPlayer();
          if (!next) return;
          var info = next.info,
            pos = next.pos;
          if (needBet) {
            var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
            if (gold < info.bet) {
              Common.showTip(i18n.errTip("30003"));
              return;
            }
          }
          this.reset();
          BlackJackProxy.request(msg, {
            pos: pos,
            handIndex: info.handIndex
          });
        };
        _proto.onClickSplit = function onClickSplit() {
          this.sendAction(BlackJackMsg.actionSplit, true);
        };
        _proto.onClickStop = function onClickStop() {
          this.sendAction(BlackJackMsg.actionStand);
        };
        _proto.onClickHit = function onClickHit() {
          this.sendAction(BlackJackMsg.actionHit);
        };
        _proto.onClickRevert = function onClickRevert() {
          this.sendAction(BlackJackMsg.actionRedemption);
        };
        _proto.onClickDouble = function onClickDouble() {
          this.sendAction(BlackJackMsg.actionDouble, true);
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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Tween, Component, tween, v3;
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
      Tween = module.Tween;
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
        }

        /**
         * 分牌：把第 2 张牌移到第 2 手的牌位。与服务端一致（第 0 手保留第 1 张，第 1 手拿第 2 张），
         * 否则两手的牌面和花色会与点数文字、服务端手牌对调。
         */;
        _proto.split = function split(pos) {
          var cards = this.players[pos].children;
          var child = cards[cards.length - 1];
          child.parent = this.players[pos + 5];

          // this.players[pos].setPosition(0.02, this.players[pos].position.y, this.players[pos].position.z);
          // this.players[pos + 5].setPosition(-0.02, this.players[pos + 5].position.y, this.players[pos + 5].position.z);
        }

        /**
         * 立即移除牌桌上的全部牌，不播动画。开局发牌前调用：
         * 发牌按牌堆的 children.length 计算摆放位置，而上一局的收牌动画（clearCard）
         * 牌多时会晚于下一局开始，残留的牌会让新牌错位。
         * 先 removeFromParent 再销毁，保证 children 在本帧内即为空。
         */;
        _proto.clearCardNow = function clearCardNow() {
          for (var _i = 0, _arr = [].concat(this.players, [this.node_master]); _i < _arr.length; _i++) {
            var parent = _arr[_i];
            for (var _iterator2 = _createForOfIteratorHelperLoose(parent.children.slice()), _step2; !(_step2 = _iterator2()).done;) {
              var node = _step2.value;
              Tween.stopAllByTarget(node);
              node.removeFromParent();
              node.destroy();
            }
          }
        };
        _proto.clearCard = function clearCard() {
          var index = 0;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.players), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            var _loop = function _loop() {
              var node = _step5.value;
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
            for (var _iterator5 = _createForOfIteratorHelperLoose(i.children), _step5; !(_step5 = _iterator5()).done;) {
              _loop();
            }
          }
          var _loop2 = function _loop2() {
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
          for (var _iterator4 = _createForOfIteratorHelperLoose(this.node_master.children), _step4; !(_step4 = _iterator4()).done;) {
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

System.register("chunks:///_virtual/BlackJackProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, EventManager, NetManager, Common;
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
      NetManager = module.default;
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
        BlackJackGameState[BlackJackGameState["SHAKE_WAIT"] = 11] = "SHAKE_WAIT";
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
        BlackJackGameEvent["REQUEST_FAIL"] = "requestFail";
        BlackJackGameEvent["RESYNC"] = "resync";
        BlackJackGameEvent["DEAL_SENT"] = "dealSent";
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

      /** 服务端 errCode.ActionNotFound：当前牌局状态下不接受该动作。 */
      var ACTION_NOT_FOUND = 10003;

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
          _this.owner = void 0;
          /** 进房代次。request() 的结局只对发起它的那一次进房生效，见 request()。 */
          _this.roomGen = 0;
          _this.wsEvents = [BlackJackMsg.actionRoundInfo, BlackJackMsg.actionDeal, BlackJackMsg.actionStand, BlackJackMsg.actionHit, BlackJackMsg.actionSplit, BlackJackMsg.actionDouble, BlackJackMsg.actionInsurance, BlackJackMsg.actionRedemption];
          return _this;
        }
        var _proto = BlackJackProxyMgr.prototype;
        /**
         * 进房时调用。result、lastBets 挂在模块单例上，退出房间后仍然保留；
         * 同一账号重进时沿用（“重复上局”可用），账号、平台或环境变化时必须丢弃，
         * 否则新账号会看到上个账号的牌局数据和下注记录。
         */
        _proto.enterRoom = function enterRoom() {
          this.roomGen++;
          var owner = NetManager.instance.hallOwner();
          if (this.owner === owner) return;
          this.owner = owner;
          this.result = null;
          this.lastBets = [];
          this.nowBets = [];
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
        _proto.initRecv = function initRecv() {}

        /**
         * 发送会锁定界面入口的请求（开始发牌、保险、手牌操作）。
         * 界面在发出时已锁定对应入口，只有成功回复才会带来后续状态事件；其余结局都必须通知界面解锁，
         * 否则只能退出重进。不能只依赖 recvData：断线、空回复、账号失效（302/401）和游客禁投（30211）
         * 在 NetManager 就已处理，不会分发到这里。
         *
         * 连接没断但本地牌局已落后于服务端时，解锁之外还要发出 RESYNC 让场景按服务端数据重进，
         * 否则玩家之后的每次操作都对不上：
         * - 超时：服务端可能已处理该请求，原样重试会重复操作（多要一张牌）；本方法不自动重发。
         * - ActionNotFound：服务端当前不接受这个动作（已有牌局时再发牌、保险已选过）。
         * - 操作成功但回复里没有座位：牌局已被服务端自动结算并删除，这次操作被当成一局空牌结算。
         *   这种回复必须在这里消费掉，不能交给 recvData 覆盖 result 后再驱动牌桌。
         * 断线和空回复不在此列，由重连后的 resync() 核对。
         *
         * 以上结局只通知发起请求的那一次进房：退出重进（或重进场景）后牌桌已按服务端数据重建，
         * 上一次进房里的请求迟到的超时或回复不能再解锁、重载或驱动新的牌桌。
         */;
        _proto.request = function request(cmd, data) {
          var _this2 = this;
          if (data === void 0) {
            data = {};
          }
          var gen = this.roomGen;
          var failed = false;
          var fail = function fail() {
            failed = true;
            if (gen === _this2.roomGen) _this2.emit(BlackJackGameEvent.REQUEST_FAIL, cmd);
          };
          var stale = function stale() {
            if (gen !== _this2.roomGen) return;
            fail();
            _this2.emit(BlackJackGameEvent.RESYNC);
          };
          NetManager.instance.sendOnlineData(cmd, data, function (res) {
            if (gen !== _this2.roomGen) return false;
            if (!res) return fail();
            if (res.Code && res.Code != 0) return res.Code == ACTION_NOT_FOUND ? stale() : fail();
            if (cmd != BlackJackMsg.actionDeal && !_this2.seatsOf(res.Data).length) {
              stale();
              return false;
            }
          }, function (reason) {
            return reason === "timeout" ? stale() : fail();
          });
          // 必须在 sendOnlineData 返回之后才通知：未连接时它不发送并同步回调空回复，上面已按失败收口，
          // 相机不能为一笔没发出去的请求先动。
          if (cmd == BlackJackMsg.actionDeal && !failed && gen === this.roomGen) this.emit(BlackJackGameEvent.DEAL_SENT);
        }

        /** 牌局里的座位列表；牌局或座位缺失（服务端空牌局里是 null）时为空数组。 */;
        _proto.seatsOf = function seatsOf(round) {
          return round && round.player && round.player.seats || [];
        }

        /**
         * 断线重连后核对牌局。断线期间回复可能丢失（服务端已发牌、已处理操作或已自动结算），
         * 本地牌局会落后于服务端，之后的操作对不上；不一致时发出 RESYNC，由场景重新进入并走进房恢复流程。
         * 一致时不做任何事，不打断正在进行的动画。
         * 调用前须确认业务登录已就绪，否则请求会被服务端按未登录拒绝。
         */;
        _proto.resync = function resync() {
          var _this3 = this;
          NetManager.instance.sendOnlineData(BlackJackMsg.actionRoundInfo, {}, function (res) {
            // 失败的回复交回原分发流程提示，不据此判断牌局。
            if (!res || res.Code && res.Code != 0) return;
            if (_this3.roundKey(res.Data) != _this3.roundKey(_this3.result)) _this3.emit(BlackJackGameEvent.RESYNC);
            // 消费本次回复：不能再走 recvData，否则会当作进房恢复，在现有牌桌上重复摆筹码、重复发牌。
            return false;
          });
        }

        /**
         * 牌局比对用的标识：未在进行中的牌局一律视为相同，进行中的按玩家各手牌、下注、保险和庄家牌数比较。
         * 庄家只比牌数不比牌面：暗牌在操作回复里是 "*"，在牌局查询里是真实牌面，按牌面比较会永远不相等。
         */;
        _proto.roundKey = function roundKey(round) {
          if (!round || round.roundStatus != 1) return "";
          var cards = round.dealer && round.dealer.hand && round.dealer.hand.cards;
          return JSON.stringify([round.player, cards ? cards.length : 0]);
        }

        //获取下一个操作对象
        ;

        _proto.getNextPlayer = function getNextPlayer() {
          if (this.result) {
            for (var _iterator3 = _createForOfIteratorHelperLoose(this.seatsOf(this.result)), _step3; !(_step3 = _iterator3()).done;) {
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
            for (var _iterator5 = _createForOfIteratorHelperLoose(this.seatsOf(this.result)), _step5; !(_step5 = _iterator5()).done;) {
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
            // 界面解锁由 request() 的回调统一通知，这里只负责提示。
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

System.register("chunks:///_virtual/BlackJackScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackDef.ts', './GUtil.ts', './BlackJackProxy.ts', './ProxyMgr.ts', './NetManager.ts', './ConfigManager.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './DataManager.ts', './BlackJackCardMgr.ts', './BlackJackView.ts', './BlackJackPlayerMgr.ts', './BlackJackCard.ts', './label3D2.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Vec3, Node, Camera, Prefab, director, gfx, MeshRenderer, Material, instantiate, Tween, v3, tween, Animation, view, ParticleSystem, isValid, rect, Component, BlackJackDef, GUtil, BlackJackProxy, BlackJackMsg, BlackJackGameState, BlackJackGameEvent, ProxyMgr, NetManager, ConfigManager, ViewManager, EventManager, Common, i18n, DataManager, UserKey, BlackJackCardMgr, BlackJackView, BlackJackPlayerMgr, BlackJackCard, label3D, RenderScaleWatcher;
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
      director = module.director;
      gfx = module.gfx;
      MeshRenderer = module.MeshRenderer;
      Material = module.Material;
      instantiate = module.instantiate;
      Tween = module.Tween;
      v3 = module.v3;
      tween = module.tween;
      Animation = module.Animation;
      view = module.view;
      ParticleSystem = module.ParticleSystem;
      isValid = module.isValid;
      rect = module.rect;
      Component = module.Component;
    }, function (module) {
      BlackJackDef = module.BlackJackDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      BlackJackProxy = module.default;
      BlackJackMsg = module.BlackJackMsg;
      BlackJackGameState = module.BlackJackGameState;
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
    }, function (module) {
      label3D = module.label3D;
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "39d4d24sYdDaq5fB2VaAs0i", "BlackJackScene", undefined);
      var Quat = math.Quat;
      var MOVETIME = 120;
      // 每个下注区最多渲染的筹码数。超出后新筹码替换顶层节点，保留落注动画和最新面额；
      // chipList 仍逐笔记录（加倍、分牌按条目复制，下注区亮灯按长度判断），只是超出的条目没有节点。
      var CHIP_STACK_LIMIT = 10;
      /** 托盘筹码下显示面额文字的子节点名。 */
      var CHIP_LABEL_NODE = "Node_label3d";
      /** 加倍特效的动画约 1.1 秒，金币和星星粒子的寿命最长 2 秒：动画结束后再留这么久才隐藏。 */
      var DOUBLE_FX_PARTICLE_TAIL = 1;
      /** 预建筹码每帧可用的时间。 */
      var CHIP_PREWARM_BUDGET_MS = 4;
      /** 回收的筹码停放的高度：远在视野之外，靠视锥剔除不参与绘制。 */
      var CHIP_PARK_Y = -1000;
      // 本场景低于这个帧率就降低渲染分辨率（RenderScaleWatcher 默认是 30）。MT6765/GE8320 下注静止实测：
      // 原生分辨率 32 到 45 帧，一直高于默认门槛所以从不降档；降到 0.75 约 53 到 55 帧，
      // 再加上降档后关掉环境反射（见 syncLowTierLighting）约 57 到 59 帧。门槛取在降档前后之间。
      // 降档没有明显提升的设备会被 RenderScaleWatcher 回退并不再尝试，所以调高只是多一次尝试。
      var RENDER_SCALE_MIN_FPS = 50;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;

      /** 庄家点数文字跟随的牌桌位置 */
      var MASTER_POINT_POS = new Vec3(0, 0.913, -0.556);
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
          /** 相机转动后点击判定点尚未重算。 */
          _this._hitPointsDirty = false;
          // resizeCardPos 的投影结果缓存，BlackJackView.resize 只在调用内读取，不持有引用。
          _this._uiCardPos = [];
          _this._uiBetTxtPos = [];
          _this._uiMasterPos = new Vec3();
          _this._resizeInfo = {
            posList: null,
            txtList: null,
            master: null
          };
          _initializerDefineProperty(_this, "highLights", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardMgr", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerMgr", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_doubleLight", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_splight1", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_splight2", _descriptor14, _assertThisInitialized(_this));
          _this._selectChipIndex = -1;
          _this._state = void 0;
          /** dealSent 发起的先行飞行是否已到牌桌近景；发牌要等它与发牌回复都就绪。 */
          _this._cameraAtTable = false;
          /** 先行飞行已因请求失败改为飞回下注位姿；此后迟到的发牌结果不能再等那次飞行的回调。 */
          _this._dealAborted = false;
          _this.chipList = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
          _this._noBetTime = 0;
          _this._playerInfo = null;
          _this._view = void 0;
          _this.moveCameraLock = true;
          /**
           * 运镜结束重新锁定后还需补算投影的帧数。
           * 投影用的是上一次渲染的相机矩阵，运镜最后一帧写入的机位要到下一帧才能算准；
           * 不补算时点数文字会停在落后一两帧的位置，直到下一次运镜。
           * showPlayer 不需要：它在锁定前有 0.1 秒停顿已经对齐，且之后的 resize 会打断当前手牌的浮动提示。
           */
          _this._reprojectFrames = 0;
          _this.cardPos = [];
          /** 取消“等待重连后业务登录就绪”的订阅 */
          _this._cancelLoginWait = null;
          _this._reloading = false;
          /** 运行时创建的筹码材质副本（本体和面额文字），离场时释放。 */
          _this._chipMaterials = [];
          /** 各面额下注筹码共用的文字材质，下标同 node_chips。 */
          _this._chipLabelMaterials = [];
          /** 回收待复用的下注筹码，按面额下标分组。 */
          _this._chipPools = [];
          /** 回收筹码的停放节点，见 recycleChip。 */
          _this._chipPark = null;
          _this._prewarmQueue = [];
          /** 各一次性特效节点待执行的隐藏回调，见 hideWhenFinished。 */
          _this._fxHide = new Map();
          /** 本场景是否已启动过筹码预建。 */
          _this._chipPrewarmed = false;
          /** 进场时场景配置的环境光类型；-1 表示还没记录。见 syncLowTierLighting。 */
          _this._sceneEnvLighting = -1;
          /** 批量下注的嵌套层数和期间是否有新增下注，见 batchBets。 */
          _this._betBatch = 0;
          _this._betBatchDirty = false;
          /** 当前牌局是进房时恢复的，且恢复出的下注额已含加倍或分牌，不等于玩家的原始下注。 */
          _this._restoredRound = false;
          return _this;
        }
        var _proto = BlackJackScene.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          for (var _iterator = _createForOfIteratorHelperLoose(this.highLights), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node_bets), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            _i.active = false;
          }
          this.initCardPos();
          BlackJackProxy.enterRoom();
          // 同账号重进时 result 仍是上次离开时的数据。若那是一局进行中的牌局，此刻牌桌并没有恢复它，必须丢弃：
          // 否则进房查询丢失后，重连核对会把它当作“本地已有该牌局”而判为一致，牌桌停在空白。
          if (BlackJackProxy.result && BlackJackProxy.result.roundStatus == 1) BlackJackProxy.result = null;
          // 断线重连途中进入（包括 onResync 触发的重载）时 socket 已连上但业务登录可能未完成，
          // 此时发出的请求会被服务端按未登录拒绝且不会重发，所以进房查询也要等登录就绪；已就绪时同步执行。
          this._cancelLoginWait = NetManager.instance.whenHallLoginReady(function () {
            _this2._cancelLoginWait = null;
            NetManager.instance.sendOnlineData(BlackJackMsg.actionRoundInfo);
          });

          // NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolBlackJack.info, {});

          // NetManager.instance.sendOnlineData(BlackJackMsg.actionDeal, {
          //     seats: [{ pos: "1", handIndex: "0", bet: "1000" }],
          // });

          this.initEvent();
          this.changeGameState(BlackJackGameState.START);
          BlackJackDef.palyMusic(BlackJackDef.audio.BG);
          this.enableChipInstancing();
          this.selectChip(0);
        }

        /**
         * 让同面额的筹码本体合并成一次实例化绘制。
         * 筹码材质是 FBX 内嵌的，没有开实例化；下注筹码由托盘筹码克隆而来、沿用它的共享材质，
         * 所以只需把托盘筹码的材质换成开了 USE_INSTANCING 的运行时副本（不改 FBX 的 meta）。
         * 设备不支持实例化时保持原样。副本不是资源，离场时要自行释放。
         */;
        _proto.enableChipInstancing = function enableChipInstancing() {
          if (!director.root.device.hasFeature(gfx.Feature.INSTANCED_ARRAYS)) return;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_chips), _step3; !(_step3 = _iterator3()).done;) {
            var node = _step3.value;
            var renderer = node.getComponent(MeshRenderer);
            if (!renderer) continue;
            var shared = renderer.sharedMaterials;
            for (var i = 0; i < shared.length; i++) {
              var source = shared[i];
              if (!source || this._chipMaterials.indexOf(source) >= 0) continue;
              var material = new Material();
              material.copy(source, {
                defines: {
                  USE_INSTANCING: true
                }
              });
              renderer.setSharedMaterial(material, i);
              this._chipMaterials.push(material);
            }
          }
        }

        /**
         * 某个面额的下注筹码共用的面额文字材质。
         * 每枚筹码各带一个 Label 时，各有一张文字贴图和一份材质实例，无法合批，还要每帧各写一次材质；
         * 改为同面额共用一份材质，贴图只由托盘筹码上的 label3D 同步过来（sharedTarget）。
         * chipFont.mtl 本身已开实例化，这里的副本同样带上，同面额的文字合成一次绘制。
         */;
        _proto.getChipLabelMaterial = function getChipLabelMaterial(index, templateLabel) {
          var material = this._chipLabelMaterials[index];
          if (!material) {
            material = new Material();
            material.copy(templateLabel.getComponent(MeshRenderer).sharedMaterial, {
              defines: {
                USE_INSTANCING: true
              }
            });
            this._chipLabelMaterials[index] = material;
            this._chipMaterials.push(material);
            var driver = templateLabel.getComponent(label3D);
            if (driver) driver.sharedTarget = material;
          }
          return material;
        }

        /** 新克隆的下注筹码改用共享的文字材质，并去掉它自带的 Label 和同步组件。 */;
        _proto.shareChipLabel = function shareChipLabel(index, chip) {
          var templateLabel = this.node_chips[index].getChildByName(CHIP_LABEL_NODE);
          var chipLabel = chip.getChildByName(CHIP_LABEL_NODE);
          if (!templateLabel || !chipLabel) return;
          chipLabel.getComponent(MeshRenderer).setSharedMaterial(this.getChipLabelMaterial(index, templateLabel), 0);
          var driver = chipLabel.getComponent(label3D);
          if (driver) {
            // destroy 到帧末才生效，先停用，保证它不会在这一帧里给自己生成材质实例。
            driver.enabled = false;
            driver.destroy();
          }
          chipLabel.destroyAllChildren();
        }

        /**
         * 取一枚指定面额的下注筹码：优先复用回收的，没有才克隆托盘筹码。
         * 返回的节点位于托盘筹码处，由调用方挂到 chipParent 并设置朝向和落点。
         * @param fresh 预热时为 true，强制新建
         */;
        _proto.obtainChip = function obtainChip(index, fresh) {
          if (fresh === void 0) {
            fresh = false;
          }
          var template = this.node_chips[index];
          var pool = this._chipPools[index];
          var chip = !fresh && pool && pool.length > 0 ? pool.pop() : null;
          if (!chip) {
            chip = instantiate(template);
            this.shareChipLabel(index, chip);
          }
          chip.setPosition(template.position);
          return chip;
        }

        /**
         * 回收一枚下注筹码，供同面额的下一次下注复用。
         * 回收的节点不从场景摘下，只挂到停放节点并移到远处：节点重新挂进场景时引擎要为每个渲染通道
         * 重做准备，批量下注（翻倍、重复上局、加倍、分牌）时这笔开销集中在一帧里。
         * 同一枚筹码可能被回收两次（结算时先收输家的，清桌时飞回动画结束再收），已停放的直接忽略。
         */;
        _proto.recycleChip = function recycleChip(chip, index) {
          if (!chip || !chip.isValid) return;
          if (this._chipPark && chip.parent === this._chipPark) return;
          Tween.stopAllByTarget(chip);
          if (!this._chipPark) {
            this._chipPark = new Node("chipPark");
            this.chipParent.parent.addChild(this._chipPark);
          }
          chip.parent = this._chipPark;
          chip.setPosition(0, CHIP_PARK_Y, 0);
          (this._chipPools[index] || (this._chipPools[index] = [])).push(chip);
        }

        /**
         * 进场运镜结束后分帧预建筹码，避免第一次批量下注时在一帧里集中克隆。
         * 每个面额预建到单个下注区的显示上限；每帧只用 CHIP_PREWARM_BUDGET_MS，至少建一枚。
         * 进房即恢复牌局时进场运镜会被发牌运镜打断，这时改在第一次清桌回到下注阶段时预建（见 clear）。
         */;
        _proto.startChipPrewarm = function startChipPrewarm() {
          this._chipPrewarmed = true;
          this._prewarmQueue.length = 0;
          for (var index = 0; index < this.node_chips.length; index++) {
            var have = this._chipPools[index] ? this._chipPools[index].length : 0;
            for (var i = have; i < CHIP_STACK_LIMIT; i++) this._prewarmQueue.push(index);
          }
          this.unschedule(this.prewarmChipStep);
          this.schedule(this.prewarmChipStep, 0);
        };
        _proto.prewarmChipStep = function prewarmChipStep() {
          var start = performance.now();
          do {
            var index = this._prewarmQueue.pop();
            if (index === undefined) {
              this.unschedule(this.prewarmChipStep);
              return;
            }
            this.recycleChip(this.obtainChip(index, true), index);
          } while (performance.now() - start < CHIP_PREWARM_BUDGET_MS);
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          BlackJackProxy.on(BlackJackGameEvent.TOUCH, this.checkClick, this);
          BlackJackProxy.on(BlackJackGameEvent.START, this.shake, this);
          BlackJackProxy.on(BlackJackGameEvent.DEAL_SENT, this.dealSent, this);
          BlackJackProxy.on(BlackJackGameEvent.REQUEST_FAIL, this.dealAbort, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_LAST, this.betLast, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_REVERT, this.betRevert, this);
          BlackJackProxy.on(BlackJackGameEvent.BET_DOUBLE, this.betDouble, this);
          BlackJackProxy.on(BlackJackGameEvent.CHANGE_TO_BET, this.changeToBet, this);
          BlackJackProxy.on(BlackJackGameEvent.TOUCH_MOVE, this.onCameraDrag, this);
          BlackJackProxy.on(BlackJackGameEvent.HIT, this.onHit, this);
          BlackJackProxy.on(BlackJackGameEvent.REDEMPTION, this.onRedemption, this);
          BlackJackProxy.on(BlackJackGameEvent.SPLIT, this.onSplit, this);
          BlackJackProxy.on(BlackJackGameEvent.RESYNC, this.onResync, this);
          BlackJackProxy.on(BlackJackGameEvent.DOUBLE, this.onDouble, this);
          BlackJackProxy.on(BlackJackGameEvent.STAND, this.checkNext, this);
          BlackJackProxy.on(BlackJackGameEvent.INSURANCE, function () {
            _this3._view.showInsurance();
            _this3.checkNext();
          }, this);
          BlackJackProxy.on(BlackJackGameEvent.CONNECT, function () {
            // 恢复进行中牌局的下注：这些金额在发牌（及加倍、分牌）时已由服务端扣款，
            // 本地金币已是扣款后的余额，不能再按下注阶段的规则校验余额，否则余额低于下注额时筹码恢复不全。
            // 只有加倍或分牌过的牌局，服务端每手的下注额才与玩家原始下注不同（见 clearBet）。
            _this3._restoredRound = BlackJackProxy.result.player.seats.some(function (seat) {
              return seat.hands.length == 2 || seat.hands.some(function (h) {
                return h.doubleStatus == 1;
              });
            });
            _this3.batchBets(function () {
              for (var _iterator4 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step4; !(_step4 = _iterator4()).done;) {
                var i = _step4.value;
                for (var _iterator5 = _createForOfIteratorHelperLoose(i.hands), _step5; !(_step5 = _iterator5()).done;) {
                  var info = _step5.value;
                  if (info.bet > 0) {
                    var _list2 = _this3.getBetList(info.bet);
                    for (var _iterator8 = _createForOfIteratorHelperLoose(_list2), _step8; !(_step8 = _iterator8()).done;) {
                      var _bet2 = _step8.value;
                      _this3.addBetByInfo({
                        Pos: i.pos - 1,
                        Amount: _bet2
                      }, true, true);
                    }
                  }
                }
                if (i.hands && i.hands.length == 2) {
                  _this3.movePos(i.pos);
                }
                var left = i.leftBetArea;
                var right = i.rightBetArea;
                if (left.bet > 0) {
                  var list = _this3.getBetList(left.bet);
                  for (var _iterator6 = _createForOfIteratorHelperLoose(list), _step6; !(_step6 = _iterator6()).done;) {
                    var bet = _step6.value;
                    _this3.addBetByInfo({
                      Pos: i.pos - 1 + 5,
                      Amount: bet
                    }, true, true);
                  }
                }
                if (right.bet > 0) {
                  // this.addBetByInfo({ Pos: i.pos - 1 + 10, Amount: right.bet });

                  var _list = _this3.getBetList(right.bet);
                  for (var _iterator7 = _createForOfIteratorHelperLoose(_list), _step7; !(_step7 = _iterator7()).done;) {
                    var _bet = _step7.value;
                    _this3.addBetByInfo({
                      Pos: i.pos - 1 + 10,
                      Amount: _bet
                    }, true, true);
                  }
                }
              }
            });
            _this3.shake();
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
          // 金额超过最大面额（如大额下注加倍后）时上面的循环找不到更大的面额，从最大面额开始分解，
          // 否则返回空列表，恢复牌局时该手没有筹码也没有下注记录。
          var last = BlackJackDef.chipNumbers.length - 1;
          if (list.length == 0 && min == -1 && bet > BlackJackDef.chipNumbers[last]) min = last;
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
          var _this4 = this;
          var _BlackJackProxy$getPl = BlackJackProxy.getPlayer(this._playerInfo.pos, this._playerInfo.info.handIndex),
            info = _BlackJackProxy$getPl.info;
          if (info) {
            this.sendCardToPlayer(info.cards[info.cards.length - 1], this._playerInfo.pos + this._playerInfo.info.handIndex * 5, function () {
              _this4.checkNext();
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
          for (var _iterator9 = _createForOfIteratorHelperLoose(player1.children), _step9; !(_step9 = _iterator9()).done;) {
            var i = _step9.value;
            // i.position = this.cardPos[pos - 1];

            i.position = this.cardPos[pos - 1];
            i.eulerAngles = v3(0, angle + 5, 0);
          }
          var player2 = this.playerMgr.getPlayer(pos - 1 + 5);
          for (var _iterator10 = _createForOfIteratorHelperLoose(player2.children), _step10; !(_step10 = _iterator10()).done;) {
            var _i2 = _step10.value;
            // i.position = this.cardPos[pos - 1 + 5];
            _i2.position = this.cardPos[pos - 1 + 5];
            _i2.eulerAngles = v3(0, angle - 5, 0);
          }
        };
        _proto.onSplit = function onSplit() {
          var _this5 = this;
          var pos = this._playerInfo.pos;
          this.playerMgr.split(pos - 1);
          var list = this.chipList[pos - 1].slice();
          for (var _iterator11 = _createForOfIteratorHelperLoose(list), _step11; !(_step11 = _iterator11()).done;) {
            var item = _step11.value;
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
          for (var _iterator12 = _createForOfIteratorHelperLoose(player1.children), _step12; !(_step12 = _iterator12()).done;) {
            var i = _step12.value;
            // i.position = this.cardPos[pos - 1];
            tween(i).to(0.2, {
              position: this.cardPos[pos - 1],
              eulerAngles: v3(0, angle + 5, 0)
            }).start();
          }
          var player2 = this.playerMgr.getPlayer(pos - 1 + 5);
          for (var _iterator13 = _createForOfIteratorHelperLoose(player2.children), _step13; !(_step13 = _iterator13()).done;) {
            var _i3 = _step13.value;
            // i.position = this.cardPos[pos - 1 + 5];
            tween(_i3).to(0.2, {
              position: this.cardPos[pos - 1 + 5],
              eulerAngles: v3(0, angle - 5, 0)
            }).start();
          }
          this.node_splight1.active = true;
          // 光效放在牌位基准点：分牌后第 1 手只剩第 1 张牌，它还停在基准点上（第 2 手那张带着叠放偏移）。
          this.node_splight1.position = player1.children[0].position;
          this.node_splight1.eulerAngles = v3(0, angle, 0);
          tween(this.node_splight1).to(0.2, {
            eulerAngles: v3(0, angle - 5, 0)
          }).start();
          this.node_splight1.getComponent(Animation).play();
          this.hideWhenFinished(this.node_splight1.getComponent(Animation), this.node_splight1);
          this.node_splight2.active = true;
          this.node_splight2.position = player1.children[0].position;
          this.node_splight2.eulerAngles = v3(0, angle, -180);
          this.node_splight2.getComponent(Animation).play();
          this.hideWhenFinished(this.node_splight2.getComponent(Animation), this.node_splight2);
          tween(this.node_splight2).to(0.2, {
            eulerAngles: v3(0, angle + 5, -180)
          }).start();
          this.resizeCardPos();
          this.scheduleOnce(function () {
            _this5._view.split(pos);
            var _BlackJackProxy$getPl3 = BlackJackProxy.getPlayer(pos, 0),
              info = _BlackJackProxy$getPl3.info;
            _this5.sendCardToPlayer(info.cards[info.cards.length - 1], pos, function () {
              var _BlackJackProxy$getPl4 = BlackJackProxy.getPlayer(pos, 1),
                info = _BlackJackProxy$getPl4.info;
              _this5.sendCardToPlayer(info.cards[info.cards.length - 1], pos + 5, function () {
                _this5.checkNext();
              });
            });
          }, 0.2);
        };
        _proto.onDouble = function onDouble() {
          var _this6 = this;
          var _BlackJackProxy$getPl5 = BlackJackProxy.getPlayer(this._playerInfo.pos, this._playerInfo.info.handIndex),
            info = _BlackJackProxy$getPl5.info;
          var list = this.chipList[this._playerInfo.pos - 1].slice();
          for (var _iterator14 = _createForOfIteratorHelperLoose(list), _step14; !(_step14 = _iterator14()).done;) {
            var item = _step14.value;
            this.addBet(this._playerInfo.pos - 1, item.index, false);
          }
          this._view.doubleBetByPos(this._playerInfo.pos - 1);
          this.doubleLight(this._playerInfo.pos - 1);
          if (info) {
            this.sendCardToPlayer(info.cards[info.cards.length - 1], this._playerInfo.pos + this._playerInfo.info.handIndex * 5, function () {
              _this6.checkNext();
            }, true);
          }
        };
        _proto.showPlayer = function showPlayer() {
          var _this7 = this;
          var pos = this._playerInfo.pos;
          var cameraInfo = BlackJackDef.cameraInfo[pos];
          this.moveCameraLock = false;
          this._view.stopCardAni(this._playerInfo);
          tween(this.mainCamera.node).to(0.5, {
            position: cameraInfo.position.clone(),
            eulerAngles: cameraInfo.rotation.clone()
          }).delay(0.1).call(function () {
            _this7.moveCameraLock = true;
            _this7.changeGameState(BlackJackGameState.PLAYER);
            _this7._view.setPlayerInfo(_this7._playerInfo);
          }).start();
        };
        _proto.checkNext = function checkNext() {
          var _this8 = this;
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
              _this8.moveCameraLock = true;
              _this8._reprojectFrames = 2;
              _this8.changeGameState(BlackJackGameState.MASTER);
            }).start();
          }
        };
        /**
         * socket 重连成功。此时业务登录尚未完成，要等登录就绪后才能请求牌局。
         */
        _proto.onReconnect = function onReconnect() {
          var _this9 = this;
          if (this._cancelLoginWait) this._cancelLoginWait();
          this._cancelLoginWait = NetManager.instance.whenHallLoginReady(function () {
            _this9._cancelLoginWait = null;
            BlackJackProxy.resync();
          });
        }

        /** 本地牌局与服务端不一致：重新加载本场景，由 onLoad 的进房流程按服务端数据恢复。 */;
        _proto.onResync = function onResync() {
          var _this10 = this;
          // 正在返回大厅时不重载：两个场景加载同时进行，本场景资源已在内存会先加载完，
          // 大厅随后因“已有场景在加载”而失败，这次退出就被吞掉了。
          if (this._reloading || !this.isValid || ViewManager.instance._isReturnning) return;
          this._reloading = true;
          var name = director.getScene().name;
          ViewManager.instance.changeScene(name, null, function (err) {
            // 加载失败时仍停留在旧场景，允许下一次重连再试。
            if (err) _this10._reloading = false;
          }, true,
          // 加载期间玩家已退出到大厅（本场景被替换或销毁）时放弃这次重载，不能把玩家拉回游戏。
          // 成功激活后本组件必然已销毁，此时只需放行收尾。
          function (launched) {
            if (launched === void 0) {
              launched = false;
            }
            return launched || _this10.isValid && !ViewManager.instance._isReturnning && director.getScene().name === name;
          });
        };
        _proto.onEnable = function onEnable() {
          BlackJackProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.eventTransform.reConnect, this.onReconnect, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.on("canvas-resize", this.onResizeByWindow, this);
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          // 这些运镜都发生在非下注阶段，只有跟随牌面的点数/下注文字需要逐帧跟随；
          // 下注区与筹码的点击坐标只在下注阶段使用，回到下注机位时由 onResize 统一重算。
          if (!this.moveCameraLock) {
            this.resizeCardPos();
          } else if (this._reprojectFrames > 0) {
            this._reprojectFrames--;
            this.resizeCardPos();
          }
        };
        _proto.onResizeByWindow = function onResizeByWindow() {
          var _this11 = this;
          this.scheduleOnce(function () {
            _this11.onResize();
          });
        }
        /**
         * 把世界坐标投影到 game 节点的本地坐标并写入 list[index]。
         * 运镜和拖拽期间每帧调用，复用 list 中已有的 Vec3，不产生分配。
         */;
        _proto.projectToUI = function projectToUI(world, list, index, offsetX, offsetY) {
          if (offsetX === void 0) {
            offsetX = 0;
          }
          if (offsetY === void 0) {
            offsetY = 0;
          }
          var out = list[index] || (list[index] = new Vec3());
          this.mainCamera.convertToUINode(world, this.game, out);
          out.x += offsetX;
          out.y += offsetY;
        }

        /**
         * 下注阶段拖拽转动相机时的重投影。每次投影都要查组件、分配对象并求一次逆矩阵，拖拽期间每帧执行，
         * 所以只算此时看得见的下注金额文字：点击判定点只在点击时读取，标记为过期，留到下一次点击再算；
         * 牌面点数和庄家点数在下注阶段不显示，下一次运镜会整体重算。
         */;
        _proto.onCameraDrag = function onCameraDrag() {
          this._hitPointsDirty = true;
          this.resizeCardPos(true);
          this._noBetTime = 0;
        };
        _proto.onResize = function onResize() {
          this.projectHitPoints();
          this.resizeCardPos();
          this._noBetTime = 0;
          this.syncLowTierLighting();
        }

        /**
         * 低端机上把环境光从“半球漫反射加环境贴图反射”改为只有半球漫反射。
         * 环境反射要对每个像素多采样一次环境贴图（PDBM00 实测每帧约 4 毫秒），去掉后光滑表面的反光变平，整体明暗不变。
         * 以渲染分辨率已被 RenderScaleWatcher 降档作为低端机的判据；降档无效被回退时恢复场景原配置。
         * 档位变化会派发 canvas-resize，所以挂在 onResize 里。
         */;
        _proto.syncLowTierLighting = function syncLowTierLighting() {
          var scene = director.getScene();
          var skybox = scene ? scene.globals.skybox : null;
          if (!skybox) return;
          if (this._sceneEnvLighting < 0) this._sceneEnvLighting = skybox.envLightingType;
          var watcher = scene.getComponentInChildren(RenderScaleWatcher);
          // 0 即 EnvironmentLightingType.HEMISPHERE_DIFFUSE，该枚举没有从 cc 导出。
          var envLighting = watcher && watcher.lowered ? 0 : this._sceneEnvLighting;
          if (skybox.envLightingType != envLighting) skybox.envLightingType = envLighting;
        }

        /** 重算下注区和托盘筹码的点击判定点。 */;
        _proto.projectHitPoints = function projectHitPoints() {
          this._hitPointsDirty = false;
          // 点击判定使用 getUILocation（原点在左下角），这里统一偏移半个设计分辨率。
          var win = view.getDesignResolutionSize();
          var halfW = win.width / 2;
          var halfH = win.height / 2;
          for (var i = 0; i < this.node_bets.length; i++) {
            this.projectToUI(this.node_bets[i].worldPosition, this._posLights, i, halfW, halfH);
          }
          for (var _i4 = 0; _i4 < this.node_leftBets.length; _i4++) {
            this.projectToUI(this.node_leftBets[_i4].worldPosition, this._posLeftLights, _i4, halfW, halfH);
          }
          for (var _i5 = 0; _i5 < this.node_rightBets.length; _i5++) {
            this.projectToUI(this.node_rightBets[_i5].worldPosition, this._posRightLights, _i5, halfW, halfH);
          }
          for (var _i6 = 0; _i6 < this.node_chips.length; _i6++) {
            this.projectToUI(this.node_chips[_i6].worldPosition, this._posChips, _i6, halfW, halfH);
          }
        }

        /**
         * 重算跟随 3D 位置的界面元素（牌面点数、下注金额文字、庄家点数）并交给界面摆放。
         * @param betTextOnly 只重算下注金额文字，其余沿用上一次的结果，见 onCameraDrag
         */;
        _proto.resizeCardPos = function resizeCardPos(betTextOnly) {
          if (betTextOnly === void 0) {
            betTextOnly = false;
          }
          if (!betTextOnly) {
            for (var i = 0; i < this.cardPos.length; i++) {
              this.projectToUI(this.cardPos[i], this._uiCardPos, i);
            }
            this.mainCamera.convertToUINode(MASTER_POINT_POS, this.game, this._uiMasterPos);
          }
          for (var _i7 = 0; _i7 < BlackJackDef.betPosition.length; _i7++) {
            this.projectToUI(BlackJackDef.betPosition[_i7], this._uiBetTxtPos, _i7);
          }
          this._resizeInfo.posList = this._uiCardPos;
          this._resizeInfo.txtList = this._uiBetTxtPos;
          this._resizeInfo.master = this._uiMasterPos;
          this._view.resize(this._resizeInfo);
        };
        _proto.onDisable = function onDisable() {
          BlackJackProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.eventTransform.reConnect, this.onReconnect, this);
          if (this._cancelLoginWait) {
            this._cancelLoginWait();
            this._cancelLoginWait = null;
          }
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.off("canvas-resize", this.onResizeByWindow, this);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          BlackJackProxy.nowBets = [];

          // 筹码的材质副本不是资源，不会随场景释放。
          for (var _iterator15 = _createForOfIteratorHelperLoose(this._chipMaterials), _step15; !(_step15 = _iterator15()).done;) {
            var material = _step15.value;
            material.destroy();
          }
          this._chipMaterials.length = 0;
          this._chipLabelMaterials.length = 0;
        };
        _proto.start = function start() {
          var _this12 = this;
          var node = instantiate(this.gameView);
          this.game.addChild(node);
          this._view = node.getComponent(BlackJackView);
          this._view.setCamera(this.mainCamera.node);

          // 低端机自动降分辨率由 ViewManager 挂载的 RenderScaleWatcher 负责，本场景只调高降档门槛。
          var scene = director.getScene();
          var watcher = scene ? scene.getComponentInChildren(RenderScaleWatcher) : null;
          if (watcher) watcher.minFps = RENDER_SCALE_MIN_FPS;
          this.mainCamera.node.position = BlackJackDef.cameraInfo.start.position.clone();
          this.mainCamera.node.eulerAngles = BlackJackDef.cameraInfo.start.rotation.clone();
          tween(this.mainCamera.node).delay(0.2).to(2, {
            position: BlackJackDef.cameraInfo.bet.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this12.onResize();
            _this12.changeGameState(BlackJackGameState.BET);
            _this12.startChipPrewarm();
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
        }

        /**
         * 发牌请求已发出：不等回复，先清掉上一局的牌并让相机飞向牌桌近景，避免点击后画面静止一次请求往返的时间。
         * 此时还没有牌局数据，不发牌；回复到达后由 shake 接手，请求失败由 dealAbort 飞回。
         * 用独立的 SHAKE_WAIT 而不是留在 BET：界面只在 BET 下允许拖拽相机，留在 BET 会与这次飞行同时写相机；
         * 也不能提前进入 SHAKE：界面在 SHAKE 时收起按钮栏，失败后回不来。
         */;
        _proto.dealSent = function dealSent() {
          var _this13 = this;
          if (this._state != BlackJackGameState.BET) return;
          this._cameraAtTable = false;
          this._dealAborted = false;
          this.changeGameState(BlackJackGameState.SHAKE_WAIT);
          // 上一局的牌可能还在收牌动画中，发牌前必须清空。
          this.playerMgr.clearCardNow();
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.openNear.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this13._cameraAtTable = true;
            _this13.onResize();
            // 回复先于相机到达时，由这里开始发牌；否则停在近景等 shake。
            if (_this13._state == BlackJackGameState.SHAKE) _this13.shakeStart();
          }).start();
        }

        /** 发牌请求失败（被拒、断线、超时）：相机飞回下注位姿，到位后重新开放下注。界面解锁由 BlackJackView.onRequestFail 负责。 */;
        _proto.dealAbort = function dealAbort(cmd) {
          var _this14 = this;
          if (cmd != BlackJackMsg.actionDeal || this._state != BlackJackGameState.SHAKE_WAIT || this._dealAborted) return;
          this._dealAborted = true;
          this._noBetTime = 0;
          // 飞回途中保持 SHAKE_WAIT：点击区域按下注位姿换算，相机到位前不能进入 BET。
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.bet.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this14.onResize();
            _this14.changeGameState(BlackJackGameState.BET);
          }).start();
        };
        _proto.shake = function shake() {
          var _this15 = this;
          // 先行飞行仍有效时不重启飞行（否则总时长变长、速度跳变），未到位时由飞行回调开始发牌。
          // 已改为飞回的不算：那次飞行的回调不会再来，按原流程重新飞向牌桌。
          var early = this._state == BlackJackGameState.SHAKE_WAIT && !this._dealAborted;
          this.changeGameState(BlackJackGameState.SHAKE);
          if (early) {
            if (this._cameraAtTable) this.shakeStart();
            return;
          }
          // 上一局的牌可能还在收牌动画中，发牌前必须清空。
          this.playerMgr.clearCardNow();
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.openNear.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this15.onResize();
            _this15.shakeStart();
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
          // 特效里的金币、星星粒子只在自身计时回到起点时爆发一次；节点隐藏再显示不会重置计时，
          // 不重新触发的话第二次加倍只会接着播上一次剩下的粒子。
          for (var _iterator16 = _createForOfIteratorHelperLoose(child.getComponentsInChildren(ParticleSystem)), _step16; !(_step16 = _iterator16()).done;) {
            var particle = _step16.value;
            particle.stop();
            particle.clear();
            particle.play();
          }
          var ani = child.getComponent(Animation);
          ani.play();
          this.hideWhenFinished(ani, this.node_doubleLight, DOUBLE_FX_PARTICLE_TAIL);
        }

        /**
         * 一次性特效播完后隐藏节点。
         * 这些特效的动画只播一次，结束时网格已透明，但节点仍然激活：网格照常提交绘制，
         * 预制体里循环的粒子也一直在模拟，直到离场。隐藏后下次播放由调用方重新激活。
         * @param linger 动画结束后再等多少秒才隐藏，用于寿命比动画长的粒子
         */;
        _proto.hideWhenFinished = function hideWhenFinished(ani, node, linger) {
          var _this16 = this;
          if (linger === void 0) {
            linger = 0;
          }
          // 上一次还没播完又被触发时，只保留这一次的监听和延时。
          ani.off(Animation.EventType.FINISHED);
          var pending = this._fxHide.get(node);
          if (pending) this.unschedule(pending);
          var hide = function hide() {
            node.active = false;
          };
          this._fxHide.set(node, hide);
          ani.once(Animation.EventType.FINISHED, function () {
            if (linger > 0) _this16.scheduleOnce(hide, linger);else hide();
          });
        }

        /** 选中筹码的光圈（含常驻的循环粒子）只在可以选筹码下注的阶段显示。 */;
        _proto.syncHighLights = function syncHighLights() {
          var show = this._selectChipIndex >= 0 && (this._state == BlackJackGameState.BET || this._state == BlackJackGameState.LOOK);
          for (var _iterator17 = _createForOfIteratorHelperLoose(this.highLights), _step17; !(_step17 = _iterator17()).done;) {
            var node = _step17.value;
            node.active = show;
          }
        };
        _proto.splitLight = function splitLight(index) {};
        _proto.showResult = function showResult() {
          var _this17 = this;
          this.changeGameState(BlackJackGameState.RESULT);
          for (var _iterator18 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step18; !(_step18 = _iterator18()).done;) {
            var i = _step18.value;
            var prize = 0;
            for (var _iterator19 = _createForOfIteratorHelperLoose(i.hands), _step19; !(_step19 = _iterator19()).done;) {
              var _info = _step19.value;
              prize += _info.prize;
            }
            if (prize <= 0) {
              var list = this.chipList[i.pos - 1];
              for (var _iterator20 = _createForOfIteratorHelperLoose(list), _step20; !(_step20 = _iterator20()).done;) {
                var info = _step20.value;
                var node = info.chip;
                // 超出显示上限的条目没有对应节点。
                if (!node) continue;
                this.recycleChip(node, info.index);
              }
              list.length = 0;
            }
          }
          this.scheduleOnce(function () {
            _this17.clear();
            _this17.clearBet();
          }, 3.5);
          this.scheduleOnce(function () {
            _this17.clearPoker();
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

          for (var _iterator21 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step21; !(_step21 = _iterator21()).done;) {
            var i = _step21.value;
            var left = i.leftBetArea;
            var right = i.rightBetArea;
            var pos = i.pos - 1;
            if (left && left.prize > 0) ;else {
              var list = this.chipList[pos + 5];
              for (var _iterator22 = _createForOfIteratorHelperLoose(list), _step22; !(_step22 = _iterator22()).done;) {
                var info = _step22.value;
                var node = info.chip;
                // 超出显示上限的条目没有对应节点。
                if (!node) continue;
                this.recycleChip(node, info.index);
              }
              list.length = 0;
              this._view.hideBetByPos(pos + 5);
            }
            if (right && right.prize > 0) ;else {
              var _list3 = this.chipList[pos + 10];
              for (var _iterator23 = _createForOfIteratorHelperLoose(_list3), _step23; !(_step23 = _iterator23()).done;) {
                var _info2 = _step23.value;
                var _node = _info2.chip;
                // 超出显示上限的条目没有对应节点。
                if (!_node) continue;
                this.recycleChip(_node, _info2.index);
              }
              _list3.length = 0;
              this._view.hideBetByPos(pos + 10);
            }
          }
        };
        _proto.clearBet = function clearBet() {
          var _this18 = this;
          for (var _iterator24 = _createForOfIteratorHelperLoose(this.chipList), _step24; !(_step24 = _iterator24()).done;) {
            var list = _step24.value;
            if (list.length > 0) {
              var _loop = function _loop() {
                var child = list[i];
                var node = child.chip;
                if (!node) return 1; // continue
                var index = child.index;
                tween(node)
                // .delay(count * 0.05)
                .to(0.3, {
                  position: _this18.node_chips[index].position
                }).call(function () {
                  _this18.recycleChip(node, index);
                }).start();
              };
              for (var i = list.length - 1; i >= 0; i--) {
                if (_loop()) continue;
              }
            }
            list.length = 0;
          }
          // “重复上局”只重放玩家自己下的注。恢复的牌局若加倍或分牌过，nowBets 来自服务端每手的下注额
          // （加倍后已翻倍、分牌后两手都记在原座位），记下来会让下一局多下一倍，保留更早的记录。
          if (!this._restoredRound) BlackJackProxy.lastBets = BlackJackProxy.nowBets.slice();
          this._restoredRound = false;
          BlackJackProxy.nowBets = [];
        };
        _proto.clear = function clear() {
          var _this19 = this;
          this.changeGameState(BlackJackGameState.CLEAR);
          this._noBetTime = 0;
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: BlackJackDef.cameraInfo.bet.position.clone(),
            eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this19.onResize();
            _this19.changeGameState(BlackJackGameState.BET);
            if (!_this19._chipPrewarmed) _this19.startChipPrewarm();
          }).start();
          for (var _iterator25 = _createForOfIteratorHelperLoose(this.node_bets), _step25; !(_step25 = _iterator25()).done;) {
            var i = _step25.value;
            Tween.stopAllByTarget(i);
            i.active = false;
          }
          if (BlackJackProxy.result) BlackJackProxy.result.roundStatus = -1;

          // 加倍、分牌特效正常由动画结束时隐藏；牌局在动画播完前结束时在这里兜底。
          this.node_doubleLight.active = false;
          this.node_splight1.active = false;
          this.node_splight2.active = false;
          this.initCardPos();
        };
        _proto.initCardPos = function initCardPos() {
          this.cardPos = [];
          for (var _iterator26 = _createForOfIteratorHelperLoose(BlackJackDef.cardPostion), _step26; !(_step26 = _iterator26()).done;) {
            var i = _step26.value;
            var pos = v3(i.x, 0.913, i.z);
            this.cardPos.push(pos);
          }
        };
        _proto.checkMaster = function checkMaster() {
          var _this20 = this;
          var player = this.playerMgr.getMaster();
          var info = BlackJackProxy.result.dealer.hand;
          if (player.children.length < info.cards.length) {
            var card = info.cards[player.children.length];
            this.sendCardToMaster(card, false, function () {
              _this20.checkMaster();
            });
          } else {
            // this.changeGameState(BlackJackGameState.RESULT);
            this.moveCameraLock = false;
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.open.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.open.rotation.clone()
            }).call(function () {
              _this20.moveCameraLock = true;
              _this20._reprojectFrames = 2;
              _this20.showResult();
            }).start();
          }
        };
        _proto.changeGameState = function changeGameState(state) {
          var _this21 = this;
          this._state = state;
          BlackJackProxy.emit(BlackJackGameEvent.CHANGE_STATE, this._state);
          this.syncHighLights();
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
                  _this21._view.showMasterCard(cards[1].rank);
                  _this21.checkMaster();
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
          for (var _iterator27 = _createForOfIteratorHelperLoose(this.node_bets), _step27; !(_step27 = _iterator27()).done;) {
            var i = _step27.value;
            Tween.stopAllByTarget(i);
            i.active = false;
          }
          for (var _iterator28 = _createForOfIteratorHelperLoose(this.node_leftBets), _step28; !(_step28 = _iterator28()).done;) {
            var _i8 = _step28.value;
            Tween.stopAllByTarget(_i8);
            _i8.active = false;
          }
          for (var _iterator29 = _createForOfIteratorHelperLoose(this.node_rightBets), _step29; !(_step29 = _iterator29()).done;) {
            var _i9 = _step29.value;
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
        }

        /**
         * 一次下多笔注（重复上局、翻倍、恢复牌局）时，界面刷新和下注区亮灯只在全部下完后做一次。
         * 这两步只取决于最终的下注记录；逐笔执行时每笔都要重播全部下注区的亮灯动画，几十笔集中在一帧里会卡住画面。
         */;
        _proto.batchBets = function batchBets(place) {
          this._betBatch++;
          try {
            place();
          } finally {
            this._betBatch--;
            if (this._betBatch == 0 && this._betBatchDirty) {
              this._betBatchDirty = false;
              BlackJackProxy.emit(BlackJackGameEvent.ADD_BET);
              this.checkBetLight();
            }
          }
        };
        _proto.betLast = function betLast() {
          var _this22 = this;
          var countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          this.batchBets(function () {
            for (var _iterator30 = _createForOfIteratorHelperLoose(BlackJackProxy.lastBets), _step30; !(_step30 = _iterator30()).done;) {
              var i = _step30.value;
              countList[i.Pos]++;
              _this22.addBetByInfo(i, countList[i.Pos] < 10);
            }
          });
        };
        _proto.betRevert = function betRevert() {
          if (BlackJackProxy.nowBets.length > 0) {
            // let info = BlackJackProxy.nowBets.pop();
            BlackJackProxy.nowBets.length = 0;
            for (var _iterator31 = _createForOfIteratorHelperLoose(this.chipList), _step31; !(_step31 = _iterator31()).done;) {
              var i = _step31.value;
              for (var _iterator32 = _createForOfIteratorHelperLoose(i), _step32; !(_step32 = _iterator32()).done;) {
                var child = _step32.value;
                var node = child.chip;
                if (!node) continue;
                this.recycleChip(node, child.index);
              }
              i.length = 0;
            }
            BlackJackProxy.emit(BlackJackGameEvent.ADD_BET);
            // BlackJackDef.palyAudio(BlackJackDef.audio.CANCEL);
            this.checkBetLight();
          }
        };
        _proto.betDouble = function betDouble() {
          var _this23 = this;
          var list = BlackJackProxy.nowBets.slice();
          var countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          if (list.length > 0) {
            this.batchBets(function () {
              for (var _iterator33 = _createForOfIteratorHelperLoose(list), _step33; !(_step33 = _iterator33()).done;) {
                var i = _step33.value;
                countList[i.Pos]++;
                if (countList[i.Pos] > 20) {
                  continue;
                }
                if (!_this23.addBetByInfo(i, countList[i.Pos] < 10)) {
                  break;
                }
              }
            });
          }
        }

        /** @param paid 该笔下注已由服务端扣款（恢复进行中的牌局），不做余额校验 */;
        _proto.addBetByInfo = function addBetByInfo(i, needChip, paid) {
          if (needChip === void 0) {
            needChip = true;
          }
          if (paid === void 0) {
            paid = false;
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
            return this.addBet(pos, index, true, needChip, paid);
          }
          return false;
        };
        _proto.addBet = function addBet(posIndex, index, isFirst, needChip, paid) {
          var _this24 = this;
          if (isFirst === void 0) {
            isFirst = true;
          }
          if (needChip === void 0) {
            needChip = true;
          }
          if (paid === void 0) {
            paid = false;
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
          for (var _iterator34 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step34; !(_step34 = _iterator34()).done;) {
            var i = _step34.value;
            allBet += i.Amount;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          gold -= BlackJackDef.chipNumbers[index];
          if (isFirst && !paid && gold < 0) {
            Common.showTip(i18n.errTip("30003"));
            return false;
          }

          // index = this.checkMergeChip(posIndex, index);

          node_bets[position].active = true;
          tween(node_bets[position]).delay(0.1).call(function () {
            _this24.node_bets[position].active = false;
          }).start();
          if (needChip) {
            var pos = node_bets[position].position.clone();
            // pos.z += BlackJackDef.position[position].z;
            var list = this.chipList[posIndex];
            var len = Math.min(list.length, CHIP_STACK_LIMIT - 1);
            pos.y += len * 0.005;
            if (list.length >= CHIP_STACK_LIMIT) {
              // 顶层节点让位给本次下注的面额；立即回收而不等新筹码落位，
              // 避免撤销或收筹码打断飞入动画时旧节点无人回收。
              var top = list[list.length - 1];
              if (top.chip) {
                this.recycleChip(top.chip, top.index);
                top.chip = null;
              }
            }
            var chip = this.obtainChip(index);
            var angle = this.getAngleByPos(position);
            chip.eulerAngles = v3(-90, angle, 0);
            this.chipParent.addChild(chip);
            tween(chip).to(0.3, {
              position: pos
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
            if (this._betBatch > 0) {
              this._betBatchDirty = true;
            } else {
              BlackJackProxy.emit(BlackJackGameEvent.ADD_BET, {
                Pos: posIndex,
                Amount: BlackJackDef.chipNumbers[index]
              });
              this.checkBetLight();
            }
          }
          return true;
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
          var _this25 = this;
          if (this._state == BlackJackGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(BlackJackGameState.BET);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.bet.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              // this.changeGameState(BlackJackGameState.BET);
              _this25.onResize();
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
          var _this26 = this;
          var index = 0;
          for (var _iterator35 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step35; !(_step35 = _iterator35()).done;) {
            var i = _step35.value;
            var _loop2 = function _loop2() {
              var cards = _step38.value;
              var pos = i.pos;
              _this26.scheduleOnce(function () {
                _this26.sendCardToPlayer(cards.cards[0], pos + cards.handIndex * 5);
              }, index * 0.2);
              index++;
            };
            for (var _iterator38 = _createForOfIteratorHelperLoose(i.hands), _step38; !(_step38 = _iterator38()).done;) {
              _loop2();
            }
          }
          this.scheduleOnce(function () {
            _this26.sendCardToMaster(BlackJackProxy.result.dealer.hand.cards[0]);
          }, index * 0.2);
          index++;
          for (var _iterator36 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step36; !(_step36 = _iterator36()).done;) {
            var _i13 = _step36.value;
            var _loop3 = function _loop3() {
              var cards = _step39.value;
              var pos = _i13.pos;
              _this26.scheduleOnce(function () {
                _this26.sendCardToPlayer(cards.cards[1], pos + cards.handIndex * 5);
              }, index * 0.2);
              index++;
            };
            for (var _iterator39 = _createForOfIteratorHelperLoose(_i13.hands), _step39; !(_step39 = _iterator39()).done;) {
              _loop3();
            }
          }
          this.scheduleOnce(function () {
            _this26.sendCardToMaster(BlackJackProxy.result.dealer.hand.cards[1], true);
          }, index * 0.2);
          index++;

          // 正常开局每手只有两张；断线重连回到进行中的牌局时，已要到的牌从第三张起补发，
          // 否则桌面牌数和点数都会少于服务端的实际手牌。
          for (var _iterator37 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step37; !(_step37 = _iterator37()).done;) {
            var _i14 = _step37.value;
            var _loop4 = function _loop4() {
              var cards = _step40.value;
              var pos = _i14.pos;
              var _loop5 = function _loop5(k) {
                _this26.scheduleOnce(function () {
                  _this26.sendCardToPlayer(cards.cards[k], pos + cards.handIndex * 5);
                }, index * 0.2);
                index++;
              };
              for (var k = 2; k < cards.cards.length; k++) {
                _loop5(k);
              }
            };
            for (var _iterator40 = _createForOfIteratorHelperLoose(_i14.hands), _step40; !(_step40 = _iterator40()).done;) {
              _loop4();
            }
          }
          this.scheduleOnce(function () {
            if (BlackJackProxy.result.player.insurance.insuranceStatus == -1) {
              _this26.changeGameState(BlackJackGameState.INSURANCE);
            } else {
              _this26.checkNext();
            }
            _this26.clearSpecialBet();
          }, index * 0.2);
        };
        _proto.checkClick = function checkClick(event) {
          var _this27 = this;
          this._noBetTime = 0;
          if (this._state == BlackJackGameState.LOOK) {
            this._noBetTime = 0;
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: BlackJackDef.cameraInfo.bet.position.clone(),
              eulerAngles: BlackJackDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this27.onResize();
              _this27.changeGameState(BlackJackGameState.BET);
            }).start();
            return;
          }
          if (this._state != BlackJackGameState.BET) return;

          // 拖拽期间没有重算判定点（见 onCameraDrag）。点击与上一次转动相机至少隔一帧，投影用的相机矩阵已是最新。
          if (this._hitPointsDirty) this.projectHitPoints();
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

          for (var _i15 = 0; _i15 < this._posLights.length; _i15++) {
            var _dis = GUtil.GetDistance(this._posLights[_i15], event.getUILocation());
            if (_dis < 53) {
              if (this._selectChipIndex >= 0) {
                this.addBet(_i15, this._selectChipIndex);
                return;
              } else {
                Common.showTip(i18n.lang.chipTip);
                return;
              }
            }
          }
          for (var _i16 = 0; _i16 < this._posLeftLights.length; _i16++) {
            var size = BlackJackDef.rects[_i16];
            var rect1 = rect(this._posLeftLights[_i16].x - size.width / 2, this._posLeftLights[_i16].y - size.height / 2, size.width, size.height);
            if (rect1.contains(event.getUILocation())) {
              if (this._selectChipIndex >= 0) {
                if (this.chipList[_i16].length > 0) {
                  this.addBet(_i16 + 5, this._selectChipIndex);
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
          for (var _i17 = 0; _i17 < this._posRightLights.length; _i17++) {
            var _size = BlackJackDef.rects[_i17];
            var _rect = rect(this._posRightLights[_i17].x - _size.width / 2, this._posRightLights[_i17].y - _size.height / 2, _size.width, _size.height);
            if (_rect.contains(event.getUILocation())) {
              if (this._selectChipIndex >= 0) {
                if (this.chipList[_i17].length > 0) {
                  this.addBet(_i17 + 10, this._selectChipIndex);
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
            node.position = pos;
            pos.y += 0.001;
          }
          this.syncHighLights();
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

System.register("chunks:///_virtual/BlackJackView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BlackJackDef.ts', './BlackJackProxy.ts', './Common.ts', './ViewManager.ts', './ProxyMgr.ts', './DataManager.ts', './GameRecordLayer.ts', './I18n.ts', './BlackJackPlayerBtns.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Label, Button, SpriteFrame, Sprite, UIOpacity, tween, Tween, v3, sp, instantiate, Component, BlackJackDef, BlackJackProxy, BlackJackGameEvent, BlackJackMsg, BlackJackGameState, Common, ViewManager, ProxyMgr, DataManager, UserProxyEvent, UserKey, GameRecordLayer, i18n, BlackJackPlayerBtns, I18nLocal;
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
      BlackJackMsg = module.BlackJackMsg;
      BlackJackGameState = module.BlackJackGameState;
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
          /**
           * 发牌请求已发出、尚未得到结果。期间桌上的注已提交，不能再下注、撤销、翻倍或重复提交。
           * 不能只靠 _state 表达：场景此时仍在下注阶段，它的空闲计时会把界面切到巡视状态并覆盖 _state。
           */
          _this._dealPending = false;
          _this._camera = void 0;
          _this._cameraRotation = 0;
          _this._tempRotation = 0;
          /** 最近一次已写入相机的拖拽角度，角度未变化时跳过相机写入与投影刷新 */
          _this._appliedRotation = 0;
          /** 相机写入后还需发出 TOUCH_MOVE（重新投影）的帧数 */
          _this._reprojectFrames = 0;
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
          BlackJackProxy.on(BlackJackGameEvent.REQUEST_FAIL, this.onRequestFail, this);
          DataManager.instance.on(UserProxyEvent.CHANGE_GOLD, this.updateGold, this);
        }

        /**
         * 请求没有得到成功回复（被拒绝、断线、超时）后解除本地锁定。
         * 开始发牌：onClickStart 为防连点已把 _state 置为 RESULT，失败时场景仍停在下注阶段，需还原为 BET；
         * 保险：点击后面板已隐藏，失败时仍处于保险阶段，需重新显示供玩家再次选择。
         */;
        _proto.onRequestFail = function onRequestFail(cmd) {
          if (cmd == BlackJackMsg.actionDeal) {
            this._dealPending = false;
            if (this._state == BlackJackGameState.RESULT && !this.node_result.active) {
              this._state = BlackJackGameState.BET;
            }
            // 等待期间到达的余额推送按“已扣款”显示；发牌没成功，桌上的注仍未扣款，改回“余额 − 已下注”。
            this.refreshGold();
          } else if (cmd == BlackJackMsg.actionInsurance) {
            if (this._state == BlackJackGameState.INSURANCE) {
              this.node_selectInsurance.active = true;
            }
          }
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
          this.refreshGold();
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
          // 发牌成功后场景会离开下注/巡视状态；这两个状态之间的切换，以及相机先行的 SHAKE_WAIT，都不代表请求有了结果。
          if (state != BlackJackGameState.BET && state != BlackJackGameState.LOOK && state != BlackJackGameState.SHAKE_WAIT) this._dealPending = false;
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
                // 进入下注阶段时相机总是回到正中机位，拖拽角度同步归零，
                // 否则下一次拖拽会从上一局残留的角度跳变。
                this._cameraRotation = 0;
                this._tempRotation = 0;
                this._appliedRotation = 0;
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
          // dealerIsBlackJack：1 庄家是 BlackJack；0 买了保险但不是；-1 没买且不是（牌局能继续即说明不是）。
          // frame_insurances 按预制体绑定顺序：[0]“庄家没有 21 点”，[1]“庄家已有 21 点”。
          var dealerHas21 = BlackJackProxy.result.player.insurance.dealerIsBlackJack === 1;
          this.sprite_insurance.spriteFrame = this.frame_insurances[dealerHas21 ? 1 : 0];
          this.sprite_insurance.node.getComponent(UIOpacity).opacity = 255;
          tween(this.sprite_insurance.node.getComponent(UIOpacity)).delay(2).to(0.5, {
            opacity: 0
          }).start();
        };
        _proto.updateGold = function updateGold() {
          // 牌局已结束但结算还没展示（庄家补牌动画期间）：派彩推送会先到，暂不刷新，避免提前暴露输赢，
          // 由 showResult 读取。下注和巡视阶段可能留着上一局已结束的数据（重进房间），不属于这种情况。
          // SHAKE_WAIT 是发牌回复到达前的等待，本局尚未开始，扣注的余额推送照常刷新。
          var betting = this._state == BlackJackGameState.BET || this._state == BlackJackGameState.LOOK || this._state == BlackJackGameState.SHAKE_WAIT;
          var result = BlackJackProxy.result;
          if (result && result.roundStatus == 0 && !this.node_result.active && !betting) return;
          this.refreshGold();
        }

        /**
         * 刷新余额显示。尚未扣款的只有下注阶段摆在桌上的注，显示“余额 − 本局已下注”；其余时候服务端都已扣款，直接显示余额：
         * 牌局进行中（含重连恢复的下注）、结算已展示（本局的注还留在 nowBets 里等清桌）、
         * 以及发牌请求等待期间（服务端在回复前就扣款并推送余额，推送可能先于回复到达）。
         */;
        _proto.refreshGold = function refreshGold() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          var running = BlackJackProxy.result && BlackJackProxy.result.roundStatus == 1;
          if (!running && !this.node_result.active && !this._dealPending) {
            for (var _iterator7 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step7; !(_step7 = _iterator7()).done;) {
              var i = _step7.value;
              gold -= i.Amount;
            }
          }
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.showResult = function showResult() {
          if (BlackJackProxy.result.dealer.playerPrize > 0) BlackJackDef.palyAudio(BlackJackDef.audio.WIN);
          this.node_result.active = true;
          this.txt_win.string = Common.ChangeMoneyFormat(BlackJackProxy.result.dealer.playerPrize, 2);
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.node_bets), _step8; !(_step8 = _iterator8()).done;) {
            var i = _step8.value;
            i.active = false;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
          for (var _iterator9 = _createForOfIteratorHelperLoose(BlackJackProxy.result.player.seats), _step9; !(_step9 = _iterator9()).done;) {
            var _i4 = _step9.value;
            for (var _iterator10 = _createForOfIteratorHelperLoose(_i4.hands), _step10; !(_step10 = _iterator10()).done;) {
              var info = _step10.value;
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
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.node_bets), _step11; !(_step11 = _iterator11()).done;) {
            var i = _step11.value;
            i.active = false;
          }
          for (var _iterator12 = _createForOfIteratorHelperLoose(this.node_cardPoints), _step12; !(_step12 = _iterator12()).done;) {
            var _i5 = _step12.value;
            Tween.stopAllByTarget(_i5);
            _i5.active = false;
          }
          for (var _iterator13 = _createForOfIteratorHelperLoose(this.node_insuranceProtects), _step13; !(_step13 = _iterator13()).done;) {
            var _i6 = _step13.value;
            _i6.active = false;
          }
          for (var _iterator14 = _createForOfIteratorHelperLoose(this.sprite_cardStates), _step14; !(_step14 = _iterator14()).done;) {
            var _i7 = _step14.value;
            _i7.active = false;
          }
          this.node_betInfo.active = false;
          this.node_totalBet.active = false;
          this.node_master.active = false;
          this.node_selectInsurance.active = false;
          for (var _iterator15 = _createForOfIteratorHelperLoose(this._cardList), _step15; !(_step15 = _iterator15()).done;) {
            var _i8 = _step15.value;
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
        }

        /**
         * 把拖拽角度写入相机，返回是否实际写入。
         * 手指按住不动或已到边界时角度不变，不重复写相机。
         */;
        _proto.syncCameraRotation = function syncCameraRotation() {
          if (this._cameraRotation > 65) {
            this._cameraRotation = 65;
          }
          if (this._cameraRotation < -65) {
            this._cameraRotation = -65;
          }
          if (this._cameraRotation == this._appliedRotation) return false;
          this._appliedRotation = this._cameraRotation;
          var dis = this._cameraRotation / 180 * Math.PI;
          var cos = Math.cos(dis);
          var sin = Math.sin(dis);
          var pos = BlackJackDef.cameraInfo.bet.position;
          tempV3.set(sin * 1.28, pos.y, cos * 1.28 - 0.75);
          this._camera.setPosition(tempV3);
          tempV3.set(BlackJackDef.cameraInfo.bet.rotation.x, BlackJackDef.cameraInfo.bet.rotation.y + this._cameraRotation, BlackJackDef.cameraInfo.bet.rotation.z);
          this._camera.eulerAngles = tempV3;
          // 投影用的是上一次渲染的相机矩阵，本帧写入的位置要到下一帧才能算准：
          // 本帧先按旧矩阵刷新一次保持跟手，下一帧再补一次，否则下注金额文字会停在落后一帧的位置。
          this._reprojectFrames = 2;
          return true;
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          if (Math.abs(this._cameraRotation - this._tempRotation) > 1) {
            this.syncCameraRotation();
          }

          // TOUCH_MOVE 会让场景重新投影下注金额文字并把点击判定点标记为过期，只在相机实际变化后发。
          if (this._reprojectFrames > 0) {
            this._reprojectFrames--;
            BlackJackProxy.emit(BlackJackGameEvent.TOUCH_MOVE);
          }
        };
        _proto.touchEnd = function touchEnd(event) {
          if (Math.abs(this._cameraRotation - this._tempRotation) > 1) {
            // 最后一段位移与松手可能落在同一帧内，lateUpdate 来不及处理，
            // 这里必须落到相机上，否则记录的角度与实际机位脱节，下一次拖拽会跳变。
            this.syncCameraRotation();
          } else if (!this._dealPending) {
            // 按下“开始”后场景仍在下注阶段，回复到达前再下的注不会发给服务端，却会留在桌上并记入“重复上局”。
            BlackJackProxy.emit(BlackJackGameEvent.TOUCH, event.touch);
          }
          this._tempRotation = this._cameraRotation;
        };
        _proto.touchCancel = function touchCancel(event) {
          if (Math.abs(this._cameraRotation - this._tempRotation) > 1) {
            this.syncCameraRotation();
          }
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
          if (this._dealPending) return false;
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
          for (var _iterator16 = _createForOfIteratorHelperLoose(BlackJackProxy.nowBets), _step16; !(_step16 = _iterator16()).done;) {
            var _i9 = _step16.value;
            info[_i9.Pos] += _i9.Amount;
          }
          this._state = BlackJackGameState.RESULT;
          this._dealPending = true;
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
          BlackJackProxy.request(BlackJackMsg.actionDeal, {
            seats: seats
          });
        };
        _proto.onClickLastBet = function onClickLastBet() {
          if (!this.checkState()) return;
          BlackJackProxy.emit(BlackJackGameEvent.BET_LAST);
          this.node_betLast.active = false;
        };
        _proto.onClickBetRevert = function onClickBetRevert() {
          // 发牌请求已发出时不能再改下注：撤销会清掉已提交的这一局的筹码和记录。
          if (!this.checkState()) return;
          BlackJackProxy.emit(BlackJackGameEvent.BET_REVERT);
        };
        _proto.onClickBetDouble = function onClickBetDouble() {
          if (!this.checkState()) return;
          BlackJackProxy.emit(BlackJackGameEvent.BET_DOUBLE);
        };
        _proto.onClickSafe = function onClickSafe() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < BlackJackProxy.result.player.insurance.insuranceBetAmount) {
            Common.showTip(i18n.errTip("30003"));
            return;
          }
          this.node_selectInsurance.active = false;
          BlackJackProxy.request(BlackJackMsg.actionInsurance, {
            insurance: "1"
          });
        };
        _proto.onClickSafeCancel = function onClickSafeCancel() {
          this.node_selectInsurance.active = false;
          BlackJackProxy.request(BlackJackMsg.actionInsurance, {
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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, UITransform, MeshRenderer, Component, Common;
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
      UITransform = module.UITransform;
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
      /**
       * 面额文字相对面片原始边长的最大宽、高。
       * 文字贴图整张铺在一个方形面片上：不按贴图比例调整时，字符多的面额（如 500K）会被横向压扁，
       * 字符少的（如 1K）又偏大。宽度上限略大于 1 是为了让长面额占满筹码内圈，高度上限让短面额不顶到内圈边缘。
       * 数值在真机上对比后选定。
       */
      var TEXT_MAX_WIDTH = 1.25;
      var TEXT_MAX_HEIGHT = 0.82;
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
          /**
           * 可选：同面额下注筹码共用的文字材质（由 BlackJackScene 设置在托盘筹码上）。
           * 下注筹码不再各带一个 Label，统一显示这里同步过去的贴图；未设置时本组件行为不变。
           */
          _this.sharedTarget = null;
          return _this;
        }
        var _proto = label3D.prototype;
        _proto.start = function start() {
          this.vLabel = mChipName[this.node.parent.name];
          this.label.string = Common.ChangeMoneyShow(this.vLabel, 2);
          if (this.label.string.length == 1) {
            this.label.string = " " + this.label.string + " ";
          }
          this.fitText();
        }

        /**
         * 按文字贴图的宽高比调整面片，保持字形不变形。
         * 只在运行时做：编辑器里改动缩放会被存进场景。下注筹码是托盘筹码的克隆，克隆时沿用这里调整后的缩放。
         */;
        _proto.fitText = function fitText() {
          // 文字尺寸要等 Label 排版后才有，这里立即排一次；场景里存的尺寸是旧字样的。
          this.label.updateRenderData(true);
          var size = this.label.node.getComponent(UITransform).contentSize;
          if (!(size.width > 0 && size.height > 0)) return;
          var aspect = size.width / size.height;
          var side = this.node.scale.x;
          var width = Math.min(TEXT_MAX_WIDTH * side, TEXT_MAX_HEIGHT * side * aspect);
          this.node.setScale(width, width / aspect, this.node.scale.z);
        };
        _proto.update = function update(deltaTime) {
          var _this$node$parent, _this$label;
          if (!((_this$node$parent = this.node.parent) != null && _this$node$parent.active)) {
            return;
          }
          var spriteFrame = (_this$label = this.label) == null ? void 0 : _this$label.spriteFrame;
          var texture = spriteFrame && spriteFrame.texture;
          if (!texture) return;

          // 每个筹码都挂有本组件，组件查找只做一次。
          if (!this.meshRender) this.meshRender = this.node.getComponent(MeshRenderer);
          var material = this.meshRender && this.meshRender.material;
          if (!material) return;
          // Label 刷新会在同一 Texture2D 内重建 GPU 纹理，首帧未就绪时绑定也可能被引擎忽略，
          // 因此绑定仍需每帧同步，不能按对象引用跳过。
          material.setProperty("mainTexture", texture);
          if (this.sharedTarget) this.sharedTarget.setProperty("mainTexture", texture);
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