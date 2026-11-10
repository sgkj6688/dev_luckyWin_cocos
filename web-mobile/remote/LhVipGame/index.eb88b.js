System.register("chunks:///_virtual/first-person-camera3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "5f915S+Q5JA/JzHW4v3Cwo/", "first-person-camera", undefined);
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

System.register("chunks:///_virtual/label3D3.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "92421ShixVOe5EhmrhWcooO", "label3D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
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
          this.label.string = Common.ChangeMoneyShow(this.vLabel, 0);
          if (this.label.string.length == 1) {
            this.label.string = " " + this.label.string + " ";
          }
        };
        _proto.update = function update(deltaTime) {
          var _this$node$parent, _this$label;
          if (!((_this$node$parent = this.node.parent) != null && _this$node$parent.active)) {
            return;
          }
          var spriteFrame = (_this$label = this.label) == null ? void 0 : _this$label.spriteFrame;
          var texture = spriteFrame && spriteFrame.texture;
          if (!texture) return;
          if (!this.meshRender) this.meshRender = this.node.getComponent(MeshRenderer);
          var material = this.meshRender && this.meshRender.material;
          if (!material) return;
          // Label 刷新会在同一 Texture2D 内重建 GPU 纹理，不能仅按对象引用跳过绑定。
          // 首帧 GPU 纹理未就绪时绑定也可能被引擎忽略，需要后续帧继续同步。
          material.setProperty("mainTexture", texture);
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

System.register("chunks:///_virtual/LhVipCard.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "eac3ciGTrVKMJbJClGl9IjL", "LhVipCard", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhVipCard = exports('default', (_dec = ccclass("LhVipCard"), _dec2 = menu("game/LhVipGame/LhVipCard"), _dec3 = property(Mesh), _dec4 = property(MeshRenderer), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipCard, _Component);
        function LhVipCard() {
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
        var _proto = LhVipCard.prototype;
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
        return LhVipCard;
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

System.register("chunks:///_virtual/LhVipCardMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipDef.ts', './LhVipCard.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, LhVipDef, LhVipCard;
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
      LhVipDef = module.LhVipDef;
    }, function (module) {
      LhVipCard = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6a424twhfZD5IU+Kds/s+xN", "LhVipCardMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhVipCardMgr = exports('default', (_dec = ccclass("LhVipCardMgr"), _dec2 = menu("game/LhVipGame/LhVipCardMgr"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipCardMgr, _Component);
        function LhVipCardMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_cardList", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LhVipCardMgr.prototype;
        _proto.getCard = function getCard(card) {
          //方块
          // if (suit == "D") {
          //     type = 0;
          // } else if (suit == "C") {
          //     type = 3;
          // } else if (suit == "H") {
          //     type = 2;
          // } else {
          //     type = 1;
          // }
          var info = LhVipDef.getCardNumber(card);
          var node = null;
          node = instantiate(this.pre_cardList[info.type]);
          node.getComponent(LhVipCard).setCard(info.num);
          node.position = LhVipDef.cardInfo.start.position.clone();
          node.eulerAngles = LhVipDef.cardInfo.start.rotation.clone();
          return node;
        };
        _proto.sendCard = function sendCard(num) {};
        _proto.onDestroy = function onDestroy() {};
        return LhVipCardMgr;
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

System.register("chunks:///_virtual/LhVipDef.ts", ['cc', './LhVipProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, math, v3, AudioClip, LhVipProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      v3 = module.v3;
      AudioClip = module.AudioClip;
    }, function (module) {
      LhVipProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3709dQGP7FDooWrt4iD0lrM", "LhVipDef", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var LhVipDef = exports('LhVipDef', /*#__PURE__*/function () {
        function LhVipDef() {}
        LhVipDef.getCardNumber = function getCardNumber(card) {
          var type = Math.floor((card - 1) / 13);
          var num = (card - 1) % 13;
          return {
            type: type,
            num: num
          };
        };
        LhVipDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = LhVipProxy.bundle;
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
        LhVipDef.palyMusic = function palyMusic(name) {
          var bundle = LhVipProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return LhVipDef;
      }());
      /**
      *     
      龙红：F85454
      龙绿：319767
      虎黄：D79F3CFD
      虎绿：319767
      龙红底：FF4E4E
      虎黄底：FFC846
      */
      LhVipDef.cameraInfo = {
        start: {
          position: v3(0, 2, 3),
          rotation: v3(-24.6, 0, 0)
        },
        bet: {
          position: v3(0, 1.644, 1.295),
          rotation: v3(-44.264, 0, 0)
        },
        open: {
          position: v3(0, 1.8, 0.75),
          rotation: v3(-65, 0.0, 0)
        },
        // openNear: { position: v3(0, 1.8, 0.75), rotation: v3(-65, 0.0, 0) },

        openNear: {
          position: v3(0, 1.5, 1),
          rotation: v3(-50, 0.0, 0)
        },
        look: {
          position: v3(0, 3, 1.13),
          rotation: v3(-54.75, 0.0, 0)
        }
      };
      LhVipDef.cardInfo = {
        start: {
          position: v3(0.278, 0.714, -0.037),
          rotation: v3(-180.416, -160.017, -78.349)
        },
        out: {
          position: v3(0.248, 0.7, -0.026),
          rotation: v3(-180, -159.612, -1.545)
        },
        "long": {
          position: v3(-0.17, 0.7, 0),
          rotation: v3(-180, -180, 0)
        },
        hu: {
          position: v3(0.162, 0.7, 0),
          rotation: v3(-180, -180, 0)
        }
      };
      LhVipDef.chipNumbers = [1000, 10000, 50000, 100000, 500000, 1000000, 5000000];
      LhVipDef.rects = [{
        width: 800,
        height: 140
      }, {
        width: 800,
        height: 140
      }, {
        width: 360,
        height: 120
      }, {
        width: 360,
        height: 120
      }, {
        width: 360,
        height: 120
      }, {
        width: 360,
        height: 120
      }];
      LhVipDef.chipPosition = [v3(-0.427, 0.71, 0.341), v3(0.491, 0.71, 0.341), v3(0, 0.71, 0.3), v3(0, 0.71, 0.46)

      // {
      //     x: 0.491,
      //     z: 0.341,
      // },
      // {
      //     x: 0,
      //     z: 0.3,
      // },
      // {
      //     x: 0,
      //     z: 0.46,
      // },
      ];

      LhVipDef.txtPosition = [v3(-0.427, 0.71, 0.557), v3(0.491, 0.71, 0.557), v3(0, 0.71, 0.354), v3(0, 0.71, 0.548)
      // {
      //     x: -0.427,
      //     z: 0.557,
      // },
      // {
      //     x: 0.491,
      //     z: 0.557,
      // },
      // {
      //     x: 0,
      //     z: 0.354,
      // },
      // {
      //     x: 0,
      //     z: 0.548,
      // },
      ];

      LhVipDef.audio = {
        BG: "bgm",
        AWARD: "award",
        ADDBET: "addBet",
        RESULT: "result",
        WIN: "win",
        CHANGEBET: "changeBet",
        CANCEL: "cancel",
        WARNING: "warning",
        SHAKE: "shake",
        CARD: "card",
        TIGER: "Tiger",
        DRAGON: "Dragon"
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhVipGame", ['./LhVipCard.ts', './LhVipCardMgr.ts', './LhVipDef.ts', './LhVipHallPath.ts', './LhVipHistory.ts', './LhVipHistoryItem.ts', './LhVipLookAround.ts', './LhVipProxy.ts', './LhVipRoadItem.ts', './LhVipScene.ts', './LhVipView.ts', './first-person-camera3.ts', './label3D3.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/LhVipHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipProxy.ts', './ProxyMgr.ts', './LhVipRoadItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Label, Prefab, UIOpacity, UITransform, Sprite, instantiate, v2, Component, LhVipProxy, LhVipGameEvent, ProxyMgr, LhVipRoadItem;
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
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      LhVipRoadItem = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "45a18KcKvpF8qw+N8FN6yXb", "LhVipHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhVipHallPath = exports('default', (_dec = ccclass("LhVipHallPath"), _dec2 = menu("game/LhVipGame/LhVipHallPath"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipHallPath, _Component);
        function LhVipHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_path1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_item", _descriptor7, _assertThisInitialized(_this));
          _this._curPath1 = void 0;
          _this._curPath2 = void 0;
          return _this;
        }
        var _proto = LhVipHallPath.prototype;
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.onEnable = function onEnable() {
          LhVipProxy.on(LhVipGameEvent.RESULT, this.addPath, this);
          LhVipProxy.on(LhVipGameEvent.HISTORY, this.updatePath, this);
        };
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.addPath = function addPath() {
          var result = LhVipProxy.history[0];
          if (this._curPath1.length == 36) {
            this._curPath1 = this._curPath1.slice(0, 30);
          }
          this._curPath1.unshift(result);
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.updatePath = function updatePath() {
          // this._curData = (DxVipModel.instance.gameRecord && DxVipModel.instance.gameRecord.slice()) || [];
          // if (this._curData.length > 100) {
          //     this._curData = this._curData.slice(0, 100);
          // }

          this._curPath1 = LhVipProxy.history.slice();
          this._curPath2 = LhVipProxy.history.slice();

          // this._curPath2 = [
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "2",
          //     "2",
          //     "2",
          //     "2",
          //     "2",
          //     "2",
          //     "2",
          //     "2",
          //     "3",
          //     "3",
          //     "3",
          //     "3",
          //     "3",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          //     "1",
          // ];
          if (this._curPath1 && this._curPath1.length > 36) {
            this._curPath1 = this._curPath1.slice(0, 36);
          }
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          if (!this._curPath1) return;
          this.node_path1.destroyAllChildren();
          var countMap = {};
          // for (let i of this._curPath1) {
          //     let num = parseInt(i) - 1;
          //     if (!countMap[num]) {
          //         countMap[num] = 0;
          //     }
          //     countMap[num]++;
          //     let node = this.createItem(num);
          //     this.node_path1.addChild(node);
          // }

          for (var i = this._curPath1.length - 1; i >= 0; i--) {
            var num = parseInt(this._curPath1[i]) - 1;
            if (!countMap[num]) {
              countMap[num] = 0;
            }
            countMap[num]++;
            var node = this.createItem(num);
            this.node_path1.addChild(node);
          }
          this.txt_title1.string = countMap[0] || 0 + "";
          this.txt_title2.string = countMap[1] || 0 + "";
          var count1 = countMap[2] || 0;
          var count2 = countMap[3] || 0;
          this.txt_title3.string = count1 + count2 + "";
        };
        _proto.parseBigRoadDatas = function parseBigRoadDatas(sources, bigroadDic, isFirstTie) {
          var BP_ROW = 6;
          var result = [];
          var len = sources.length;
          var cellData = null;
          var realCol = 0; // 真实列数， 超过6个之后不另起一列，在最后一行往右累加， 该变量表示累加前的列数
          var first_is_tie = false;
          var row = 0;
          var col = 0;
          for (var i = 0; i < len; i++) {
            var str = sources[i];
            var curMaxRow = BP_ROW;
            if (i == 0) {
              if (str == "2") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else if (str == "1") {
                cellData = {
                  bigTieCount: 0
                };
                cellData.x = col = 0;
                cellData.y = row = 0;
                cellData.bigType = str;
                if (bigroadDic != null) {
                  bigroadDic["0_0"] = str;
                }
                result.push(cellData);
              } else {
                first_is_tie = true;
              }
            } else {
              if (str == "3" || str == "4") {
                if (cellData != null) {
                  cellData.bigTieCount++;
                  var bigTieCount = cellData.bigTieCount;
                  if (bigTieCount > 9) {
                    bigTieCount = 9;
                  }
                }
              } else {
                var newCellData = {
                  bigType: "",
                  realX: 0,
                  realY: 0,
                  x: 0,
                  y: 0,
                  bigTieCount: 0
                };
                newCellData.bigType = str;
                if (cellData && str == cellData.bigType) {
                  row++;
                  newCellData.realX = realCol;
                  newCellData.realY = row + (col - realCol);
                  if (row >= curMaxRow) {
                    row = curMaxRow - 1;
                    col++;
                  } else {
                    realCol = col;
                  }
                } else {
                  if (col != realCol) {
                    curMaxRow = row;
                  } else {
                    curMaxRow = BP_ROW;
                  }
                  row = 0;
                  col = realCol + 1;
                  realCol = realCol + 1;
                  newCellData.realX = col;
                  newCellData.realY = row;
                }

                // console.log("index", i, col, row, realCol, curMaxRow);

                newCellData.x = col;
                newCellData.y = row;
                if (first_is_tie) {
                  newCellData.x = col - 1;
                  newCellData.realX = realCol - 1;
                }
                for (var m = 0; m < result.length; m++) {
                  var tmpData = result[m];
                  if (tmpData.x == col && tmpData.y == row) {
                    newCellData.y = row - 1;
                    newCellData.x = col + 1;
                    if (first_is_tie) {
                      newCellData.x = col;
                    }
                    if (curMaxRow > tmpData.y) {
                      curMaxRow = tmpData.y;
                      if (row >= curMaxRow) {
                        row = curMaxRow - 1;
                        col++;

                        // console.log("调整", col, row);
                      }
                    }

                    break;
                  }
                }
                cellData = newCellData;
                if (bigroadDic != null) {
                  bigroadDic[cellData.realX + "_" + cellData.realY] = cellData.bigType;
                }
                result.push(cellData);
              }
            }
          }
          if (isFirstTie) {
            isFirstTie["isFirstTie"] = first_is_tie ? "true" : "false";
          }
          return result;
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          this._curPath2 = LhVipProxy.history.slice();
          if (!this._curPath2 || this._curPath2.length == 0) return;
          var spaceX = 26.06;
          var spaceY = 26.9;
          var startX = 10.5;
          var startY = -10.5;
          var max_len = 18;
          var data = this._curPath2.reverse();
          var bigRoadDic = [];
          var isFirstTie = [];
          var info = this.parseBigRoadDatas(data, bigRoadDic, isFirstTie);
          var startIndex = 0;
          if (info) {
            var x = 0;
            for (var _iterator = _createForOfIteratorHelperLoose(info), _step; !(_step = _iterator()).done;) {
              var i = _step.value;
              if (i.x > x) {
                x = i.x;
              }
            }
            startIndex = x - max_len + 1;
            if (startIndex < 0) {
              startIndex = 0;
            }
          }
          this.node_path2.destroyAllChildren();
          for (var _i = 0; _i < info.length; _i++) {
            if (info[_i].x < startIndex) continue;
            var node = instantiate(this.prefab_item);
            this.node_path2.addChild(node);
            node.setPosition(startX + (info[_i].x - startIndex) * spaceX, startY - info[_i].y * spaceY);
            node.getComponent(LhVipRoadItem).setData(info[_i]);
          }
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(DxVipDef.eEvent.onUpdatePath, this.updatePath, this);
        };
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
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return LhVipHallPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_path1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_path2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_title3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "prefab_item", [_dec9], {
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

System.register("chunks:///_virtual/LhVipHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './LhVipHistoryItem.ts', './LhVipProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Label, ScrollView, Node, Prefab, UIOpacity, UITransform, Sprite, instantiate, Component, ProxyMgr, LhVipHistoryItem, LhVipProxy, LhVipGameEvent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      ScrollView = module.ScrollView;
      Node = module.Node;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      LhVipHistoryItem = module.default;
    }, function (module) {
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "7a11ebS1EZM771qKAg0ta3K", "LhVipHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var LhVipHistory = exports('default', (_dec = ccclass("LhVipHistory"), _dec2 = menu("game/LhVipGame/LhVipHistory"), _dec3 = property(SpriteFrame), _dec4 = property(Label), _dec5 = property(ScrollView), _dec6 = property(ScrollView), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipHistory, _Component);
        function LhVipHistory() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "balls", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_issue", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_ds", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scroll_his", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_dsItem", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_his", _descriptor8, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._index = void 0;
          return _this;
        }
        var _proto = LhVipHistory.prototype;
        _proto.onLoad = function onLoad() {
          LhVipProxy.on(LhVipGameEvent.RESULT, this.onUpdate, this);
          LhVipProxy.on(LhVipGameEvent.HISTORY, this.onUpdate, this);
          LhVipProxy.on(LhVipGameEvent.CLICK_HIS_ITEM, this.onClickItem, this);
        };
        _proto.start = function start() {
          var data = LhVipProxy.history;
          this.setData(data, true);
          if (data.length > 0) LhVipProxy.emit(LhVipGameEvent.CLICK_HIS_ITEM, data.length - 1);
        };
        _proto.onClickItem = function onClickItem(index) {
          var len = this._data.length;
          index = len - index - 1;
          if (this._data[index]) {
            this._index = index;
            this.txt_issue.string = this._data[index].GameNo;
          }
        };
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.setData = function setData(data, fresh) {
          if (fresh === void 0) {
            fresh = true;
          }
          this._data = data;

          // for (let len = data.length, i = len - 1; i >= 0; i--) {
          //     let item = data[i];
          //     let json = JSON.parse(item) as sdgameProto.md5Nums;
          //     json.realNum = parseInt(json.num[0]) + parseInt(json.num[1]) + parseInt(json.num[2]) + parseInt(json.num[3]) - 4;
          //     this._data.push(json);
          // }

          this.updatePath1(this._data);
          var info = this._data.slice().reverse();
          this.updatePath2(info);
          if (fresh) {
            this.scroll_ds.scrollToRight();
            this.scroll_his.scrollToRight();
          }
        };
        _proto.onUpdate = function onUpdate() {
          var data = LhVipProxy.history;
          this.setData(data, false);
        };
        _proto.updatePath1 = function updatePath1(data) {
          this.scroll_ds.content.removeAllChildren();
          var redata = data.slice().reverse();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2] + redata[i].Dices[3];
            if (tempNum != -1) {
              if (_result % 2 == tempNum) {
                row++;
                if (row >= MAX_ROW) {
                  row = 0;
                  list[++col] = [];
                }
              } else {
                row = 0;
                list[++col] = [];
              }
            } else {
              row = 0;
              list[col] = [];
            }
            list[col].push(_result % 2);
            tempNum = _result % 2;
          }
          var result = list;
          var count1 = 0;
          var count2 = 0;
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            var item = instantiate(this.node_dsItem);
            this.scroll_ds.content.addChild(item);
            item.active = true;
            var num = _list[0];
            if (num == 0) {
              count1 += _list.length;
            } else {
              count2 += _list.length;
            }
            for (var _i2 = 0; _i2 < item.children.length; _i2++) {
              var node = item.children[_i2];
              node.getComponent(Sprite).spriteFrame = this.balls[num];
              if (_list.length > _i2) {
                node.active = true;
              } else {
                node.active = false;
              }
            }
          }
          this.txt_title1.string = "" + count1;
          this.txt_title2.string = "" + count2;
        };
        _proto.updatePath2 = function updatePath2(data) {
          this.scroll_his.content.removeAllChildren();
          for (var i = 0; i < data.length; i++) {
            var item = instantiate(this.prefab_his);
            this.scroll_his.content.addChild(item);
            item.getComponent(LhVipHistoryItem).setData(data[i], i);
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        _proto.checkBtnShow = function checkBtnShow() {};
        return LhVipHistory;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "txt_issue", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll_ds", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scroll_his", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_dsItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefab_his", [_dec10], {
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

System.register("chunks:///_virtual/LhVipHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './LhVipProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Component, ProxyMgr, LhVipProxy, LhVipGameEvent;
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
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "90f93lC+c5AlI60ViP1+WE9", "LhVipHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhVipHistoryItem = exports('default', (_dec = ccclass("LhVipHistoryItem"), _dec2 = menu("game/LhVipGame/LhVipHistoryItem"), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipHistoryItem, _Component);
        function LhVipHistoryItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_light", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_items", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor3, _assertThisInitialized(_this));
          _this._data = void 0;
          _this._index = void 0;
          return _this;
        }
        var _proto = LhVipHistoryItem.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node_light.active = false;
          LhVipProxy.on(LhVipGameEvent.CLICK_HIS_ITEM, function (index) {
            if (index == _this2._index) {
              _this2.node_light.active = true;
            } else {
              _this2.node_light.active = false;
            }
          }, this);
        };
        _proto.setData = function setData(data, index) {
          this._index = index;
          this._data = data;
          for (var i = 0; i < 4; i++) {
            this.sprite_items[i].spriteFrame = this.balls[parseInt(this._data.Dices[i])];
          }
        };
        _proto.onClick = function onClick() {
          this.node_light.active = false;
          LhVipProxy.emit(LhVipGameEvent.CLICK_HIS_ITEM, this._index);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return LhVipHistoryItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite_items", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec5], {
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

System.register("chunks:///_virtual/LhVipLookAround.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, math, _decorator, Vec3, v3, Component, LhVipProxy, LhVipGameEvent, LhVipGameState, ProxyMgr;
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
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
      LhVipGameState = module.LhVipGameState;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "c21f8s9gFxFXIryYN+wVG/c", "LhVipLookAround", undefined);
      var Quat = math.Quat;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var tempV3 = new Vec3();
      var MAX_DIS = 3;
      var MIN_DIS = 1.35;
      var LhVipLookAround = exports('default', (_dec = ccclass("LhVipLookAround"), _dec2 = menu("game/LhVipGame/LhVipLookAround"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipLookAround, _Component);
        function LhVipLookAround() {
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
          _this._look = v3(0, 0.9, 0.2);
          _this.posZ = 0.2;
          return _this;
        }
        var _proto = LhVipLookAround.prototype;
        _proto.onLoad = function onLoad() {
          this.initEvent();
        };
        _proto.initEvent = function initEvent() {
          LhVipProxy.on(LhVipGameEvent.CHANGE_STATE, this.changeState, this);
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
        };
        _proto.update = function update(dt) {
          if (this._state == LhVipGameState.LOOK) {
            this.circleMove(dt);
          }
        };
        _proto.goUp = function goUp() {};
        _proto.circleMove = function circleMove(dt) {
          this._rotateX += 0.04 * this.directX;
          this.posY += dt * this.directY * 0.06;
          this.posZ += dt * this.directY * 0.12;
          if (this.posZ < -0.8) {
            this.posZ = -0.8;
          } else if (this.posZ > 0.2) {
            this.posZ = 0.2;
          }
          this._distance += dt * this.directDis * 0.06;
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
          this._look.z = this.posZ;
          this.node.lookAt(this._look, v3(0, 1, 0));
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return LhVipLookAround;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhVipProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "3461cVdInlClYhxJutY5aec", "LhVipProxy", undefined);
      var LhVipGameState = exports('LhVipGameState', /*#__PURE__*/function (LhVipGameState) {
        LhVipGameState[LhVipGameState["NORMAL"] = 0] = "NORMAL";
        LhVipGameState[LhVipGameState["START"] = 1] = "START";
        LhVipGameState[LhVipGameState["BET"] = 2] = "BET";
        LhVipGameState[LhVipGameState["RESULT"] = 3] = "RESULT";
        LhVipGameState[LhVipGameState["SHAKE"] = 4] = "SHAKE";
        LhVipGameState[LhVipGameState["SHAKE_START"] = 5] = "SHAKE_START";
        LhVipGameState[LhVipGameState["LOOK"] = 6] = "LOOK";
        LhVipGameState[LhVipGameState["CLEAR"] = 7] = "CLEAR";
        return LhVipGameState;
      }({}));
      var LhVipGameEvent = exports('LhVipGameEvent', /*#__PURE__*/function (LhVipGameEvent) {
        LhVipGameEvent["TOUCH"] = "UItouch";
        LhVipGameEvent["HISTORY"] = "history";
        LhVipGameEvent["RESULT"] = "result";
        LhVipGameEvent["SHAKE"] = "shake";
        LhVipGameEvent["CHANGE_STATE"] = "changeState";
        LhVipGameEvent["BET_LAST"] = "betLast";
        LhVipGameEvent["BET_REVERT"] = "betRevert";
        LhVipGameEvent["BET_DOUBLE"] = "betDouble";
        LhVipGameEvent["CLICK_HIS_ITEM"] = "clickHisItem";
        LhVipGameEvent["ADD_BET"] = "addBet";
        LhVipGameEvent["CHANGE_TO_BET"] = "changeToBet";
        LhVipGameEvent["RESIZE"] = "resize";
        return LhVipGameEvent;
      }({}));

      /**
       * 龙虎vip数据代理
       */
      var LhVipProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(LhVipProxyMgr, _ProxyBase);
        function LhVipProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "LhVipGame";
          _this.history = [];
          _this.result = void 0;
          _this.lastBets = [];
          _this.nowBets = [];
          _this.info = void 0;
          _this.wsEvents = [ConfigManager.instance.ProtocolLhVip.bet, ConfigManager.instance.ProtocolLhVip.history, ConfigManager.instance.ProtocolLhVip.info];
          return _this;
        }
        var _proto = LhVipProxyMgr.prototype;
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
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            if (data.Code == 30044) {
              this.emit(LhVipGameEvent.CHANGE_STATE, LhVipGameState.BET);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.ProtocolLhVip.bet:
              {
                this.result = data.Data;
                this.history.unshift(data.Data.prizeType + "");
                this.emit(LhVipGameEvent.SHAKE);
                break;
              }
            case ConfigManager.instance.ProtocolLhVip.info:
              {
                this.history = data.Data.history;
                this.info = data.Data.gamePlay;
                this.emit(LhVipGameEvent.HISTORY);
                break;
              }
            case ConfigManager.instance.ProtocolLhVip.history:
              {
                this.history = data.Data.history || [];
                this.emit(LhVipGameEvent.HISTORY);
                break;
              }
          }
        };
        _createClass(LhVipProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return LhVipProxyMgr;
      }(ProxyBase);
      var LhVipProxy = exports('default', new LhVipProxyMgr("LhVipProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LhVipRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Label, Node, Component, ProxyMgr;
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
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "2b02aVymuJLRLJ1CwXVXo8E", "LhVipRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var LhVipRoadItem = exports('default', (_dec = ccclass("LhVipRoadItem"), _dec2 = menu("game/LhVipGame/LhVipRoadItem"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipRoadItem, _Component);
        function LhVipRoadItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "sprite_bg", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_bgs", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_count", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_tie", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = LhVipRoadItem.prototype;
        _proto.setData = function setData(data) {
          this.txt_count.string = data.bigTieCount + "";
          this.node_tie.active = data.bigTieCount > 0;
          this.sprite_bg.spriteFrame = this.frame_bgs[parseInt(data.bigType) - 1];
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return LhVipRoadItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite_bg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame_bgs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_count", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_tie", [_dec6], {
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

System.register("chunks:///_virtual/LhVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipDef.ts', './GUtil.ts', './LhVipProxy.ts', './ProxyMgr.ts', './NetManager.ts', './ConfigManager.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './DataManager.ts', './LhVipCardMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Camera, Prefab, view, instantiate, tween, v3, Tween, Animation, ParticleSystem, PhysicsSystem, Component, LhVipDef, GUtil, LhVipGameState, LhVipProxy, LhVipGameEvent, ProxyMgr, NetManager, ConfigManager, ViewManager, EventManager, Common, i18n, DataManager, UserKey, LhVipCardMgr;
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
      Camera = module.Camera;
      Prefab = module.Prefab;
      view = module.view;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      Animation = module.Animation;
      ParticleSystem = module.ParticleSystem;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }, function (module) {
      LhVipDef = module.LhVipDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      LhVipGameState = module.LhVipGameState;
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
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
      LhVipCardMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "071f1SKihlHE5S9J8Mf0nMj", "LhVipScene", undefined);
      var Quat = math.Quat;
      var MOVETIME = 120;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var LhVipScene = exports('default', (_dec = ccclass("LhVipScene"), _dec2 = menu("game/LhVipGame/LhVipScene"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Camera), _dec10 = property(Node), _dec11 = property(Prefab), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(LhVipCardMgr), _dec16 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipScene, _Component);
        function LhVipScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_lights", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_winLights", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_particleParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gold", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_blinks", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chips", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameView", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipParent", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chipOut", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "highLights", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cardMgr", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_center", _descriptor14, _assertThisInitialized(_this));
          _this._posCenter = null;
          _this._posLights = [];
          _this._posChips = [];
          _this._selectChipIndex = -1;
          _this._state = void 0;
          _this.chipList = [[], [], [], []];
          _this._noBetTime = 0;
          return _this;
        }
        var _proto = LhVipScene.prototype;
        _proto.onLoad = function onLoad() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.highLights), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node_lights), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            _i.active = false;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_winLights), _step3; !(_step3 = _iterator3()).done;) {
            var _i2 = _step3.value;
            _i2.active = false;
          }
          this.node_gold.active = false;
          this.initEvent();
          this.changeGameState(LhVipGameState.START);
          LhVipDef.palyMusic(LhVipDef.audio.BG);
          this.selectChip(0);
        };
        _proto.initEvent = function initEvent() {
          LhVipProxy.on(LhVipGameEvent.TOUCH, this.checkClick, this);
          LhVipProxy.on(LhVipGameEvent.SHAKE, this.shake, this);
          LhVipProxy.on(LhVipGameEvent.BET_LAST, this.betLast, this);
          LhVipProxy.on(LhVipGameEvent.BET_REVERT, this.betRevert, this);
          LhVipProxy.on(LhVipGameEvent.CHANGE_TO_BET, this.changeToBet, this);
          LhVipProxy.on(LhVipGameEvent.BET_DOUBLE, this.betDouble, this);
        };
        _proto.onEnable = function onEnable() {
          LhVipProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.on("canvas-resize", this.onResize, this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.history, {});
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.info, {});
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2._posLights = [];
            _this2._posChips = [];
            var win = view.getDesignResolutionSize();
            for (var _iterator4 = _createForOfIteratorHelperLoose(_this2.node_lights), _step4; !(_step4 = _iterator4()).done;) {
              var i = _step4.value;
              var _pos = _this2.mainCamera.convertToUINode(i.worldPosition, _this2.game);
              _pos.x += win.width / 2;
              _pos.y += win.height / 2;
              _this2._posLights.push(_pos);
            }
            for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.node_chips), _step5; !(_step5 = _iterator5()).done;) {
              var _i3 = _step5.value;
              var _pos2 = _this2.mainCamera.convertToUINode(_i3.worldPosition, _this2.game);
              _pos2.x += win.width / 2;
              _pos2.y += win.height / 2;
              _this2._posChips.push(_pos2);
            }
            var pos = _this2.mainCamera.convertToUINode(_this2.node_center.worldPosition, _this2.game);
            pos.x += win.width / 2;
            pos.y += win.height / 2;
            _this2._posCenter = pos;
            var txtList = [];
            for (var _iterator6 = _createForOfIteratorHelperLoose(LhVipDef.txtPosition), _step6; !(_step6 = _iterator6()).done;) {
              var _i4 = _step6.value;
              var _pos3 = _this2.mainCamera.convertToUINode(_i4, _this2.game);
              txtList.push(_pos3);
            }
            var chipList = [];
            for (var _iterator7 = _createForOfIteratorHelperLoose(LhVipDef.chipPosition), _step7; !(_step7 = _iterator7()).done;) {
              var _i5 = _step7.value;
              var _pos4 = _this2.mainCamera.convertToUINode(_i5, _this2.game);
              chipList.push(_pos4);
            }
            LhVipProxy.emit(LhVipGameEvent.RESIZE, {
              chipList: chipList,
              txtList: txtList
            });
          });
        };
        _proto.onDisable = function onDisable() {
          LhVipProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.off("canvas-resize", this.onResize, this);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          LhVipProxy.nowBets = [];
        };
        _proto.start = function start() {
          var _this3 = this;
          var node = instantiate(this.gameView);
          this.game.addChild(node);
          this.mainCamera.node.position = LhVipDef.cameraInfo.start.position.clone();
          this.mainCamera.node.eulerAngles = LhVipDef.cameraInfo.start.rotation.clone();
          tween(this.mainCamera.node).delay(0.2).to(2, {
            position: LhVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this3.onResize();
            _this3.changeGameState(LhVipGameState.BET);
          }).start();
        };
        _proto.getDistance = function getDistance(startPos, endPos) {
          var diff_x = startPos.x - endPos.x;
          var diff_z = startPos.z - endPos.z;
          var distance = Math.pow(diff_x * diff_x + diff_z * diff_z, 0.5);
          return distance;
        };
        _proto.shakeStart = function shakeStart() {
          this.changeGameState(LhVipGameState.SHAKE_START);
          this.sendCard();
        };
        _proto.sendCard = function sendCard() {
          var _this4 = this;
          var result = LhVipProxy.result.openNum;
          var card1 = this.cardMgr.getCard(result[0]);
          this.cardMgr.node.addChild(card1);
          LhVipDef.palyAudio(LhVipDef.audio.CARD);
          tween(card1).to(0.2, {
            position: LhVipDef.cardInfo.out.position,
            eulerAngles: LhVipDef.cardInfo.out.rotation
          }).to(0.3, {
            position: LhVipDef.cardInfo["long"].position,
            eulerAngles: LhVipDef.cardInfo["long"].rotation
          }).to(0.1, {
            position: v3(LhVipDef.cardInfo["long"].position.x, LhVipDef.cardInfo["long"].position.y + 0.05, LhVipDef.cardInfo["long"].position.z),
            eulerAngles: v3(LhVipDef.cardInfo["long"].rotation.x - 90, LhVipDef.cardInfo["long"].rotation.y, LhVipDef.cardInfo["long"].rotation.z)
          }).to(0.1, {
            position: v3(LhVipDef.cardInfo["long"].position.x, LhVipDef.cardInfo["long"].position.y, LhVipDef.cardInfo["long"].position.z),
            eulerAngles: v3(LhVipDef.cardInfo["long"].rotation.x - 180, LhVipDef.cardInfo["long"].rotation.y, LhVipDef.cardInfo["long"].rotation.z),
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            LhVipDef.palyAudio(LhVipDef.audio.CARD);
            var card2 = _this4.cardMgr.getCard(result[1]);
            _this4.cardMgr.node.addChild(card2);
            tween(card2).to(0.2, {
              position: LhVipDef.cardInfo.out.position,
              eulerAngles: LhVipDef.cardInfo.out.rotation
            }).to(0.3, {
              position: LhVipDef.cardInfo.hu.position,
              eulerAngles: LhVipDef.cardInfo.hu.rotation
            }).to(0.1, {
              position: v3(LhVipDef.cardInfo.hu.position.x, LhVipDef.cardInfo.hu.position.y + 0.06, LhVipDef.cardInfo.hu.position.z),
              eulerAngles: v3(LhVipDef.cardInfo.hu.rotation.x - 90, LhVipDef.cardInfo.hu.rotation.y, LhVipDef.cardInfo.hu.rotation.z)
            }).to(0.1, {
              position: v3(LhVipDef.cardInfo.hu.position.x, LhVipDef.cardInfo.hu.position.y, LhVipDef.cardInfo.hu.position.z),
              eulerAngles: v3(LhVipDef.cardInfo.hu.rotation.x - 180, LhVipDef.cardInfo.hu.rotation.y, LhVipDef.cardInfo.hu.rotation.z),
              scale: v3(1.2, 1.2, 1.2)
            }).call(function () {
              _this4.shakeEnd();
            }).start();
          }).start();
        };
        _proto.shake = function shake() {
          var _this5 = this;
          this.changeGameState(LhVipGameState.SHAKE);
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.openNear.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this5.shakeStart();
          }).start();
        };
        _proto.shakeEnd = function shakeEnd() {
          var _this6 = this;
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.open.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.open.rotation.clone()
          }).call(function () {
            // this.shakeStart();
            _this6.showResult();
          }).start();
        };
        _proto.blink = function blink(node, name) {
          if (name === void 0) {
            name = null;
          }
          node.active = true;
          var ani = node.getComponent(Animation);
          if (name) {
            ani.play(name);
          } else {
            ani.play();
          }
        };
        _proto.clearPoker = function clearPoker() {
          var index = 0;
          var _loop = function _loop() {
            var node = _step8.value;
            tween(node).delay(index * 0.1).to(0.2, {
              position: v3(0, 0.7 + index * 0.001, 0.076),
              eulerAngles: v3(-360, -180, 0)
            }).delay(0.5).to(0.3, {
              position: v3(-0.434, 0.85, -0.012),
              eulerAngles: v3(0, -23.129, 180),
              scale: v3(1, 1, 1)
            }).to(0.5, {
              position: v3(-0.434, 0.7, -0.012)
            }).call(function () {
              node.destroyFromParent();
            }).start();
            index++;
          };
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.cardMgr.node.children), _step8; !(_step8 = _iterator8()).done;) {
            _loop();
          }
        };
        _proto.showResult = function showResult() {
          var _this7 = this;
          this.changeGameState(LhVipGameState.RESULT);
          var num = LhVipProxy.result.prizeType - 1;
          if (num == 0 || num == 1) {
            this.blink(this.node_blinks[num]);
            this.blink(this.node_blinks[num + 4]);
            this.blink(this.node_blinks[num + 6], "aniGray2");
          } else if (num == 2) {
            this.blink(this.node_blinks[0], "aniGreen");
            this.blink(this.node_blinks[1], "aniGreen");
            this.blink(this.node_blinks[2], "aniGreen");
            this.blink(this.node_blinks[4], "aniGreen");
            this.blink(this.node_blinks[5], "aniGreen");
          } else {
            this.blink(this.node_blinks[0], "aniGreen");
            this.blink(this.node_blinks[1], "aniGreen");
            this.blink(this.node_blinks[2], "aniGreen");
            this.blink(this.node_blinks[3], "aniGreen");
            this.blink(this.node_blinks[4], "aniGreen");
            this.blink(this.node_blinks[5], "aniGreen");
          }

          // this.node_winLights[num].active = true;
          // this.node_winLights[num].getComponent(cc.ParticleSystem).play();

          var node = instantiate(this.node_winLights[num]);
          node.active = true;
          this.node_particleParent.addChild(node);
          node.getComponent(ParticleSystem).play();
          if (num == 3) {
            var _node = instantiate(this.node_winLights[2]);
            _node.active = true;
            this.node_particleParent.addChild(_node);
            _node.getComponent(ParticleSystem).play();
          }
          if (LhVipProxy.result.prizeAmount > 0) {
            this.scheduleOnce(function () {
              var node = instantiate(_this7.node_gold);
              node.active = true;
              _this7.node_particleParent.addChild(node);
              node.getComponent(ParticleSystem).play();
            }, 1);
          }
          this.scheduleOnce(function () {
            _this7.clearBet();
            _this7.clear();
          }, 4);
          this.scheduleOnce(function () {
            _this7.clearPoker();
          }, 3.5);
          LhVipProxy.emit(LhVipGameEvent.RESULT);
        };
        _proto.clearBet = function clearBet() {
          var _this8 = this;
          var listIndex = 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.chipList), _step9; !(_step9 = _iterator9()).done;) {
            var list = _step9.value;
            if (list.length > 0) {
              var _loop2 = function _loop2() {
                var child = list[i];
                var node = child.chip;
                var index = child.index;
                if (LhVipProxy.result && LhVipProxy.result.prizeType - 1 == listIndex) {
                  tween(node)
                  // .delay(count * 0.05)
                  .to(0.3, {
                    position: _this8.node_chips[index].position
                  }).call(function () {
                    node.removeFromParent();
                    node.destroy();
                  }).start();
                } else {
                  node.removeFromParent();
                  node.destroy();
                }
              };
              for (var i = list.length - 1; i >= 0; i--) {
                _loop2();
              }
            }
            listIndex++;
            list.length = 0;
          }
          LhVipProxy.lastBets = LhVipProxy.nowBets.slice();
          LhVipProxy.nowBets = [];
        };
        _proto.clear = function clear() {
          var _this9 = this;
          this.changeGameState(LhVipGameState.CLEAR);
          this._noBetTime = 0;
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this9.changeGameState(LhVipGameState.BET);
          }).start();

          // for (let i of this.node_blinks) {
          //     let ani = i.getComponent(cc.Animation);
          //     ani.play("aniNormal");
          // }
          for (var i = 0; i < 6; i++) {
            var ani = this.node_blinks[i].getComponent(Animation);
            ani.play("aniNormal");
          }
          for (var _i6 = 6; _i6 < 8; _i6++) {
            var _ani = this.node_blinks[_i6].getComponent(Animation);
            _ani.play("aniGray1");
          }
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.node_lights), _step10; !(_step10 = _iterator10()).done;) {
            var _i7 = _step10.value;
            Tween.stopAllByTarget(_i7);
            _i7.active = false;
          }
          this.node_particleParent.destroyAllChildren();
        };
        _proto.changeGameState = function changeGameState(state) {
          this._state = state;
          LhVipProxy.emit(LhVipGameEvent.CHANGE_STATE, this._state);
        };
        _proto.betLast = function betLast() {
          for (var _iterator11 = _createForOfIteratorHelperLoose(LhVipProxy.lastBets), _step11; !(_step11 = _iterator11()).done;) {
            var i = _step11.value;
            if (!this.checkBet(i.Pos)) {
              return;
            }
          }
          for (var _iterator12 = _createForOfIteratorHelperLoose(LhVipProxy.lastBets), _step12; !(_step12 = _iterator12()).done;) {
            var _i8 = _step12.value;
            var pos = _i8.Pos;
            var index = 0;
            var find = false;
            for (var j = 0; j < LhVipDef.chipNumbers.length; j++) {
              if (LhVipDef.chipNumbers[j] == _i8.Amount) {
                index = j;
                find = true;
                break;
              }
            }
            if (find) {
              this.addBet(pos, index);
            }
          }
        };
        _proto.betRevert = function betRevert() {
          if (LhVipProxy.nowBets.length > 0) {
            // let info = LhVipProxy.nowBets.pop();
            LhVipProxy.nowBets.length = 0;
            for (var _iterator13 = _createForOfIteratorHelperLoose(this.chipList), _step13; !(_step13 = _iterator13()).done;) {
              var i = _step13.value;
              for (var _iterator14 = _createForOfIteratorHelperLoose(i), _step14; !(_step14 = _iterator14()).done;) {
                var child = _step14.value;
                var node = child.chip;
                node.removeFromParent();
                node.destroy();
              }
              i.length = 0;
            }
            LhVipProxy.emit(LhVipGameEvent.ADD_BET);
            LhVipDef.palyAudio(LhVipDef.audio.CANCEL);
          }
        };
        _proto.betDouble = function betDouble() {
          var list = LhVipProxy.nowBets.slice();
          var countList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          if (list.length > 0) {
            for (var _iterator15 = _createForOfIteratorHelperLoose(list), _step15; !(_step15 = _iterator15()).done;) {
              var i = _step15.value;
              countList[i.Pos]++;
              if (countList[i.Pos] > 20) {
                continue;
              }
              this.addBetByInfo(i, countList[i.Pos] < 10);
            }
          }
        };
        _proto.addBetByInfo = function addBetByInfo(i, needChip) {
          var pos = i.Pos;
          var index = 0;
          var find = false;
          for (var j = 0; j < LhVipDef.chipNumbers.length; j++) {
            if (LhVipDef.chipNumbers[j] == i.Amount) {
              index = j;
              find = true;
              break;
            }
          }
          if (find) {
            return this.addBet(pos, index);
          }
          return false;
        };
        _proto.checkBet = function checkBet(position, gold) {
          if (gold === void 0) {
            gold = 0;
          }
          // if (this.chipList[position].length >= 20) {
          //     Common.showTip(i18n.t("diyFullTip", 20));
          //     return false;
          // }

          var allBet = 0;
          for (var _iterator16 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step16; !(_step16 = _iterator16()).done;) {
            var i = _step16.value;
            if (i.Pos == position) allBet += i.Amount;
          }

          //最大投注限制
          if (allBet + gold > LhVipProxy.info[position].MaxIssueBet) {
            // console.log("allBet + gold", allBet, gold, LhVipProxy.info[position].MaxIssueBet);
            Common.showTip(i18n.errTip(30044));
            return false;
          }
          if (position == 0 || position == 1) {
            var other = position == 0 ? 1 : 0;
            if (this.chipList[other].length > 0) {
              Common.showTip(i18n.errTip(30002));
              return false;
            }
          }
          return true;
        };
        _proto.addBet = function addBet(position, index) {
          var _this10 = this;
          // console.log("addBet", position);
          var allBet = 0;
          for (var _iterator17 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step17; !(_step17 = _iterator17()).done;) {
            var i = _step17.value;
            allBet += i.Amount;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          gold -= LhVipDef.chipNumbers[index];
          if (gold < 0) {
            Common.showTip(i18n.errTip("30003"));
            return;
          }
          this.node_lights[position].active = true;
          tween(this.node_lights[position]).delay(0.1).call(function () {
            _this10.node_lights[position].active = false;
          }).start();
          if (!this.checkBet(position, LhVipDef.chipNumbers[index])) {
            return;
          }
          var pos = this.node_lights[position].position.clone();
          // pos.z += LhVipDef.position[position].z;
          pos = LhVipDef.chipPosition[position].clone();
          var len = this.chipList[position].length > 5 ? 5 : this.chipList[position].length;
          pos.y += len * 0.005;
          var chip = instantiate(this.node_chips[index]);
          this.chipParent.addChild(chip);
          tween(chip).to(0.3, {
            position: pos
          }).call(function () {
            _this10.checkChipList(position);
          }).start();
          this.chipList[position].push({
            chip: chip,
            index: index
          });
          LhVipProxy.nowBets.push({
            Pos: position,
            Amount: LhVipDef.chipNumbers[index]
          });
          LhVipProxy.emit(LhVipGameEvent.ADD_BET, {
            Pos: position,
            Amount: LhVipDef.chipNumbers[index]
          });
          LhVipDef.palyAudio(LhVipDef.audio.ADDBET);
        };
        _proto.checkChipList = function checkChipList(posIndex) {
          var chipList = this.chipList[posIndex];
          if (chipList.length > 5) {
            for (var i = 4; i < chipList.length; i++) {
              chipList[i].chip.active = false;
            }
          }
        };
        _proto.changeToBet = function changeToBet() {
          var _this11 = this;
          if (this._state == LhVipGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(LhVipGameState.START);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: LhVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this11.changeGameState(LhVipGameState.BET);
            }).start();
            return;
          }

          // this.sendCard();
        };

        _proto.distanceToEllipse = function distanceToEllipse(x0, y0) {
          var h = this._posCenter.x,
            k = this._posCenter.y; // 椭圆中心坐标

          var a = 160,
            b = 90; // 椭圆的长轴和短轴半径
          var dx = x0 - h;
          var dy = y0 - k;
          var radiusSquared = a * a + b * b;
          var radius = Math.sqrt(radiusSquared); // 外接圆半径
          var distanceSquared = dx * dx + dy * dy;
          var distance = Math.sqrt(distanceSquared); // 点到圆心的距离
          return {
            distance: distance,
            isInside: distance <= radius,
            up: dy > 0
          };
        };
        _proto.checkClick = function checkClick(event) {
          var _this12 = this;
          this._noBetTime = 0;
          if (this._state == LhVipGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(LhVipGameState.START);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: LhVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this12.changeGameState(LhVipGameState.BET);
            }).start();
            return;
          }
          if (this._state != LhVipGameState.BET) return;
          // for (let i = 0; i < this._posLights.length; i++) {
          //     let size = LhVipDef.rects[i];
          //     let rect1 = rect(this._posLights[i].x - size.width / 2, this._posLights[i].y - size.height / 2, size.width, size.height);
          //     if (rect1.contains(event.getUILocation())) {
          //         if (this._selectChipIndex >= 0) {
          //             this.addBet(i, this._selectChipIndex);
          //         } else {
          //             Common.showTip(i18n.lang.chipTip);
          //         }
          //     }
          // }

          // if (dis < 200) {
          //     if (this._selectChipIndex >= 0) {
          //         this.addBet(i, this._selectChipIndex);
          //     } else {
          //         Common.showTip(i18n.lang.chipTip);
          //     }
          // }

          for (var i = 0; i < this._posChips.length; i++) {
            var dis = GUtil.GetDistance(this._posChips[i], event.getUILocation());
            if (dis < 50) {
              this.selectChip(i);
              // let position = this.node_chips[i].position.clone();
              // position.y += 0.02;
              // this.node_chips[i].position = position;

              LhVipDef.palyAudio(LhVipDef.audio.CHANGEBET);
              return;
            }
          }
          var ray = this.mainCamera.screenPointToRay(event.getLocation().x, event.getLocation().y);
          if (PhysicsSystem.instance.raycastClosest(ray)) {
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var isCircle = true;
            for (var _i9 = 0; _i9 < this.node_blinks.length; _i9++) {
              if (raycastResult.collider.node.parent == this.node_blinks[_i9]) {
                this.addBet(_i9, this._selectChipIndex);
                isCircle = false;
                break;
              }
            }
            if (isCircle) {
              var info = this.distanceToEllipse(event.getUILocation().x, event.getUILocation().y);
              if (info.up) {
                this.addBet(2, this._selectChipIndex);
              } else {
                this.addBet(3, this._selectChipIndex);
              }
            }
          }

          // let info = this.distanceToEllipse(event.getUILocation().x, event.getUILocation().y);
          // // console.log(info);

          // if (info.isInside) {
          //     if (info.up) {
          //         this.addBet(2, this._selectChipIndex);
          //     } else {
          //         this.addBet(3, this._selectChipIndex);
          //     }
          // } else {
          //     if (ray.d.x > 0 && ray.d.y > -0.77 && ray.d.y < -0.55) {
          //         this.addBet(1, this._selectChipIndex);
          //     } else {
          //         if (ray.d.y > -0.77 && ray.d.y < -0.55) this.addBet(0, this._selectChipIndex);
          //     }
          // }
        };

        _proto.selectChip = function selectChip(i) {
          this._selectChipIndex = i;
          var pos = this.node_chips[i].position.clone();
          for (var _iterator18 = _createForOfIteratorHelperLoose(this.highLights), _step18; !(_step18 = _iterator18()).done;) {
            var node = _step18.value;
            node.active = true;
            node.position = pos;
            pos.y += 0.001;
          }
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.update = function update(dt) {
          if (this._state == LhVipGameState.BET) {
            this._noBetTime += dt;
            if (this._noBetTime > MOVETIME) {
              this._noBetTime = 0;
              this.changeGameState(LhVipGameState.LOOK);
            }
          }
        };
        return LhVipScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_lights", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_winLights", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_particleParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_gold", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_blinks", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_chips", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chipParent", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_chipOut", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "highLights", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "cardMgr", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_center", [_dec16], {
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

System.register("chunks:///_virtual/LhVipView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipDef.ts', './LhVipProxy.ts', './NetManager.ts', './ConfigManager.ts', './Common.ts', './ViewManager.ts', './ProxyMgr.ts', './DataManager.ts', './GameRecordLayer.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Label, Button, SpriteFrame, Sprite, sp, UIOpacity, tween, Tween, v3, instantiate, Component, LhVipDef, LhVipProxy, LhVipGameEvent, LhVipGameState, NetManager, ConfigManager, Common, ViewManager, ProxyMgr, DataManager, UserKey, GameRecordLayer, i18n;
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
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      v3 = module.v3;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      LhVipDef = module.LhVipDef;
    }, function (module) {
      LhVipProxy = module.default;
      LhVipGameEvent = module.LhVipGameEvent;
      LhVipGameState = module.LhVipGameState;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      GameRecordLayer = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "47f78bOirlEwIRxUpqQkzt3", "LhVipView", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var LhVipView = exports('default', (_dec = ccclass("LhVipView"), _dec2 = menu("game/LhVipGame/LhVipView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Button), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(Sprite), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(sp.Skeleton), _dec24 = property(sp.Skeleton), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LhVipView, _Component);
        function LhVipView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_result", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betInfo", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bets", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betTip", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_totalBet", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBet", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betLast", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_betDouble", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_winBg", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_winTitle", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_winBg", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_resultTitle", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_vs", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spine_result", _descriptor22, _assertThisInitialized(_this));
          _this._state = void 0;
          return _this;
        }
        var _proto = LhVipView.prototype;
        _proto.onLoad = function onLoad() {
          this.node.on(Node.EventType.TOUCH_START, this.touchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.touchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.touchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
          this.initSelfInfo();
          this.initEvent();
          for (var _iterator = _createForOfIteratorHelperLoose(this.node_bets), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          this.node_betInfo.active = false;
          this.node_totalBet.active = false;
          this.node_result.active = false;
          this.spine_vs.node.active = false;
          this.spine_result.node.active = false;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node_betTip.getComponent(UIOpacity).opacity = 0;
          tween(this.node_betTip.getComponent(UIOpacity)).delay(2.2).to(0.2, {
            opacity: 255
          }).call(function () {
            LhVipDef.palyAudio(LhVipDef.audio.WARNING);
          }).delay(1).call(function () {
            _this2.node_betTip.active = false;
          }).start();
        };
        _proto.initEvent = function initEvent() {
          var _this3 = this;
          LhVipProxy.on(LhVipGameEvent.CHANGE_STATE, this.changeState, this);
          LhVipProxy.on(LhVipGameEvent.ADD_BET, this.addBet, this);
          LhVipProxy.on(LhVipGameEvent.RESIZE, function (info) {
            for (var i = 0; i < 4; i++) {
              _this3.node_bets[i].position = info.txtList[i];
            }
          }, this);
        };
        _proto.addBet = function addBet() {
          var betInfo = [0, 0, 0, 0];
          var allBet = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            betInfo[_i.Pos] += _i.Amount;
            allBet += _i.Amount;
          }
          for (var i = 0; i < betInfo.length; i++) {
            this.node_bets[i].active = betInfo[i] > 0;
            this.txt_bets[i].string = Common.ChangeMoneyFormat(betInfo[i], 2);
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          this.selfGold.string = Common.numFormat(gold);
          this.txt_totalBet.string = Common.ChangeMoneyFormat(allBet, 2);
          this.node_totalBet.active = allBet > 0;
          if (allBet > 0) {
            if (Tween.getRunningCount(this.node_start) == 0) {
              tween(this.node_start).to(0.3, {
                scale: v3(0.9, 0.9, 1)
              }).to(0.3, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          } else {
            Tween.stopAllByTarget(this.node_start);
          }
          this.btn_betDouble.interactable = LhVipProxy.nowBets.length > 0;
          if (LhVipProxy.lastBets.length > 0 && LhVipProxy.nowBets.length == 0) {
            this.node_betLast.active = true;
          } else {
            this.node_betLast.active = false;
          }
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
          this.node_betInfo.active = false;
          this.node_totalBet.active = false;
          switch (state) {
            case LhVipGameState.SHAKE:
              {
                Tween.stopAllByTarget(this.node_btns);
                tween(this.node_btns).to(0.5, {
                  position: v3(this.node_btns.position.x, -200, this.node_btns.position.z)
                }).start();
                Tween.stopAllByTarget(this.node_path);
                tween(this.node_path).to(0.5, {
                  position: v3(this.node_path.position.x, 91.5, this.node_path.position.z)
                }).start();
                break;
              }
            case LhVipGameState.CLEAR:
              {
                Tween.stopAllByTarget(this.node_btns);
                tween(this.node_btns).to(0.5, {
                  position: v3(this.node_btns.position.x, -0, this.node_btns.position.z)
                }).start();
                Tween.stopAllByTarget(this.node_path);
                tween(this.node_path).to(0.5, {
                  position: v3(this.node_path.position.x, -91.5, this.node_path.position.z)
                }).start();
                break;
              }
            case LhVipGameState.RESULT:
              {
                this.showResult();
                break;
              }
            case LhVipGameState.BET:
              {
                this.spine_result.node.active = false;
                this.spine_vs.node.active = false;
                this.node_result.active = false;
                this.node_betInfo.active = true;
                if (LhVipProxy.lastBets.length > 0 && LhVipProxy.nowBets.length == 0) {
                  this.node_betLast.active = true;
                } else {
                  this.node_betLast.active = false;
                }
                break;
              }
          }
        };
        _proto.showResult = function showResult() {
          var _this4 = this;
          LhVipDef.palyAudio(LhVipDef.audio.RESULT);
          this.node_result.active = true;

          // this.node_winTitle.active = LhVipProxy.result.prizeAmount > 0;
          this.txt_win.string = Common.ChangeMoneyFormat(LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount, 2);
          // this.txt_win.node.active = LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount > 0;

          // this.sprite_winBg.spriteFrame = this.frame_winBg[LhVipProxy.result.prizeType - 1];
          // this.txt_resultTitle.string = i18n.lang.lhvip.type[LhVipProxy.result.prizeType];

          if (LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount > 0) {
            this.scheduleOnce(function () {
              _this4.txt_win.node.active = true;
              _this4.spine_result.node.active = true;
              _this4.spine_result.setAnimation(0, "intro", false);
              _this4.spine_result.addAnimation(0, "idle", true);
            }, 1);
          } else {
            this.txt_win.node.active = false;
            this.spine_result.node.active = false;
          }
          this.scheduleOnce(function () {
            var names = ["dragonwin", "tiger", "hoa", "hoadonghoa"];
            _this4.spine_vs.node.active = true;
            _this4.spine_vs.setAnimation(0, names[LhVipProxy.result.prizeType - 1] + "_intro", false);
            _this4.spine_vs.addAnimation(0, names[LhVipProxy.result.prizeType - 1] + "_idle", true);
          }, 0.5);
          this.scheduleOnce(function () {
            if (LhVipProxy.result.prizeType == 1) {
              LhVipDef.palyAudio(LhVipDef.audio.DRAGON);
            } else if (LhVipProxy.result.prizeType == 2) {
              LhVipDef.palyAudio(LhVipDef.audio.TIGER);
            } else {
              LhVipDef.palyAudio(LhVipDef.audio.DRAGON);
              LhVipDef.palyAudio(LhVipDef.audio.TIGER);
            }
          }, 1);
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_bets), _step3; !(_step3 = _iterator3()).done;) {
            var i = _step3.value;
            i.active = false;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.touchStart = function touchStart(event) {};
        _proto.touchMove = function touchMove(event) {};
        _proto.touchEnd = function touchEnd(event) {
          LhVipProxy.emit(LhVipGameEvent.TOUCH, event.touch);
        };
        _proto.touchCancel = function touchCancel(event) {};
        _proto.onClickExit = function onClickExit() {
          Common.returnToHall(this, LhVipProxy.BUNDLE);
        };
        _proto.onClickRecord = function onClickRecord() {
          // GUtil.openRecord("LhVip", 8);

          Common.loadPopBuddle("prefab/LhVipRecord", LhVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(GameRecordLayer).setGameType("cardLhd3d", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          Common.loadPopBuddle("prefab/LhVipSetting", LhVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/LhVipHelp", LhVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/LhVipHistory", LhVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.checkState = function checkState() {
          if (this._state == LhVipGameState.LOOK) {
            LhVipProxy.emit(LhVipGameEvent.CHANGE_TO_BET);
            return true;
          }
          if (this._state != LhVipGameState.BET) return false;
          return true;
        };
        _proto.onClickStart = function onClickStart() {
          if (!this.checkState()) return;
          if (LhVipProxy.nowBets.length == 0) {
            Common.showTip(i18n.lang[10011]);
            return;
          }
          this._state = LhVipGameState.RESULT;
          Tween.stopAllByTarget(this.node_start);
          var betInfo = {};
          for (var _iterator4 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step4; !(_step4 = _iterator4()).done;) {
            var _i2 = _step4.value;
            if (!betInfo[_i2.Pos + 1]) {
              betInfo[_i2.Pos + 1] = 0;
            }
            betInfo[_i2.Pos + 1] += _i2.Amount;
          }
          for (var i in betInfo) {
            betInfo[i] = "" + betInfo[i];
          }
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.bet, {
            bet: betInfo
          });

          // NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.bet, {
          //     bet: {
          //         "1": "1000",
          //     },
          // });
          // LhVipProxy.emit(LhVipGameEvent.CHANGE_TO_BET);
        };

        _proto.onClickLastBet = function onClickLastBet() {
          if (!this.checkState()) return;
          LhVipProxy.emit(LhVipGameEvent.BET_LAST);
          this.node_betLast.active = false;
        };
        _proto.onClickBetRevert = function onClickBetRevert() {
          this.checkState();
          LhVipProxy.emit(LhVipGameEvent.BET_REVERT);
        };
        _proto.onClickBetDouble = function onClickBetDouble() {
          this.checkState();
          LhVipProxy.emit(LhVipGameEvent.BET_DOUBLE);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return LhVipView;
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
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_betInfo", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txt_bets", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_betTip", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_totalBet", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBet", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "node_betLast", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "btn_betDouble", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "frame_winBg", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_winTitle", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "sprite_winBg", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "txt_resultTitle", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "spine_vs", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "spine_result", [_dec24], {
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
  r('virtual:///prerequisite-imports/LhVipGame', 'chunks:///_virtual/LhVipGame'); 
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