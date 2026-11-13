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
  var cclegacy, math, v3, director, AudioClip, isValid, LhVipProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      v3 = module.v3;
      director = module.director;
      AudioClip = module.AudioClip;
      isValid = module.isValid;
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
          // 退出后 bundle 可能已释放；加载是异步的，回调时可能已离开房间或已执行 stopAllEffect。
          if (!bundle) return;
          var scene = director.getScene();
          var generation = AudioManager.instance.effectGeneration;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            if (err) {
              console.log(err);
            }
            if (err || !audio || AudioManager.instance.effectGeneration !== generation || !isValid(scene, true) || director.getScene() !== scene) return;
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
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 迟到的背景音乐不能在离开房间后覆盖大厅或其他游戏的音轨。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
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
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Label, Prefab, UIOpacity, UITransform, Sprite, isValid, instantiate, v2, Component, LhVipProxy, LhVipGameEvent, ProxyMgr, LhVipRoadItem;
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
      isValid = module.isValid;
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
          // 路单节点按绘制顺序复用，不再每局销毁重建；始终挂在各自容器下随其销毁。
          // 珠盘最多 36 个，大路最多 18 列可见结果，多余节点隐藏待下次复用。
          _this.path1Items = [];
          _this.path2Items = [];
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
          var used = 0;
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
            var node = this.path1Items[used];
            if (isValid(node)) {
              node.getComponent(Sprite).spriteFrame = this.balls[num];
              node.active = true;
            } else {
              node = this.createItem(num);
              this.node_path1.addChild(node);
              this.path1Items[used] = node;
            }
            used++;
          }
          for (var _i = used; _i < this.path1Items.length; _i++) {
            if (isValid(this.path1Items[_i])) this.path1Items[_i].active = false;
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
          var used = 0;
          for (var _i2 = 0; _i2 < info.length; _i2++) {
            if (info[_i2].x < startIndex) continue;
            var node = this.path2Items[used];
            if (isValid(node)) {
              node.active = true;
            } else {
              node = instantiate(this.prefab_item);
              this.node_path2.addChild(node);
              this.path2Items[used] = node;
            }
            used++;
            node.setPosition(startX + (info[_i2].x - startIndex) * spaceX, startY - info[_i2].y * spaceY);
            node.getComponent(LhVipRoadItem).setData(info[_i2]);
          }
          // 历史变短或清空时隐藏多余节点，保留以便下次复用。
          for (var _i3 = used; _i3 < this.path2Items.length; _i3++) {
            if (isValid(this.path2Items[_i3])) this.path2Items[_i3].active = false;
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
      // 巡视的水平旋转速度（度/秒）。原先每帧固定加 0.04 度，转速随帧率变化；2.4 是它在 60 帧下的速度，
      // 60 帧设备上的观感不变。
      var LOOK_ROTATE_SPEED = 2.4;
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
          // 与下面的高度、距离一样按时间推进，掉帧或帧率不同的设备上转速一致。
          this._rotateX += LOOK_ROTATE_SPEED * dt * this.directX;
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

          // 巡视期间每帧执行，复用模块级临时向量，不产生每帧分配。
          tempV3.set(x, y, z);
          tempV3.normalize();
          tempV3.multiplyScalar(this._distance);
          this.node.setPosition(tempV3);
          this._look.z = this.posZ;
          this.node.lookAt(this._look, Vec3.UP);
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

System.register("chunks:///_virtual/LhVipProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, assetManager, i18n, ProxyBase, ConfigManager, EventManager, NetManager, Common;
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
      NetManager = module.default;
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
        LhVipGameState[LhVipGameState["SHAKE_WAIT"] = 8] = "SHAKE_WAIT";
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
        LhVipGameEvent["BET_SENT"] = "betSent";
        LhVipGameEvent["BET_ABORT"] = "betAbort";
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
          /** 本地保留的开奖记录上限。路单最多显示 36 个结果和 18 列大路，超出部分只会拖慢每局重绘。 */
          _this.HISTORY_LIMIT = 200;
          /** 已提交且本局尚未收尾；期间 nowBets 即提交快照，不允许加注、撤销或再次提交。 */
          _this.betWaiting = false;
          /** 本地等待已结束但服务端是否受理未知；保持锁定直到离开房间。 */
          _this.betUnknown = false;
          _this.betAttempt = 0;
          _this.cancelBetRequest = null;
          _this.owner = void 0;
          _this.wsEvents = [ConfigManager.instance.ProtocolLhVip.bet, ConfigManager.instance.ProtocolLhVip.history, ConfigManager.instance.ProtocolLhVip.info];
          return _this;
        }
        var _proto = LhVipProxyMgr.prototype;
        /**
         * 提交当前筹码。返回 false 表示已有一笔在等待，本次未发送。
         * 明确拒绝（业务错误码）会解除等待；超时、断线、空回复、账号失效和结果格式异常
         * 都不能证明服务端未扣注，因此只提示核对，不退款、不重发、不解除锁定。
         */
        _proto.submitBet = function submitBet() {
          var _this2 = this;
          if (this.betWaiting) return false;
          var net = NetManager.instance;
          var session = net.hallSession();
          var attempt = ++this.betAttempt;
          this.betWaiting = true;
          this.betUnknown = false;
          // 协议按下注区汇总：键为下注区序号 + 1，金额为字符串。
          var bet = {};
          for (var _iterator = _createForOfIteratorHelperLoose(this.nowBets), _step; !(_step = _iterator()).done;) {
            var _i = _step.value;
            bet[_i.Pos + 1] = (bet[_i.Pos + 1] || 0) + _i.Amount;
          }
          for (var i in bet) {
            bet[i] = "" + bet[i];
          }
          // 退出房间（resetBet）或换会话后，旧请求的任何回调都不得再改动状态。
          var current = function current() {
            return attempt === _this2.betAttempt && session === net.hallSession();
          };
          var answered = false;
          // sendOnlineData 仍在调用栈内时为 true；此时到达的空回复只可能来自“未连接、未发送”的同步分支。
          var sending = true;
          var unknown = function unknown() {
            if (!current() || !_this2.betWaiting || _this2.betUnknown) return;
            _this2.cancelBetRequest = null;
            _this2.betUnknown = true;
            Common.showTip(i18n.lang.betResultUnknown);
            _this2.emit(LhVipGameEvent.BET_ABORT);
          };
          try {
            var cancel = net.sendOnlineData(ConfigManager.instance.ProtocolLhVip.bet, {
              bet: bet
            }, function (response) {
              // 回复始终由本次调用消费（返回 false），不再走广播，避免重复开奖。
              if (answered || !current() || !_this2.betWaiting || _this2.betUnknown) return false;
              answered = true;
              _this2.cancelBetRequest = null;
              if (!response && sending) {
                _this2.betWaiting = false;
                Common.showTip(i18n.errTip(501));
                _this2.emit(LhVipGameEvent.ADD_BET);
                return false;
              }
              if (!response || response.Code == 302 || response.Code == 401) {
                unknown();
                return false;
              }
              if (response.Code && response.Code != 0) {
                _this2.betWaiting = false;
                Common.showTip(i18n.errTip(response.Code));
                // 通知界面按未提交状态刷新（恢复开始按钮提示动画）。
                _this2.emit(LhVipGameEvent.ADD_BET);
                _this2.emit(LhVipGameEvent.BET_ABORT);
                return false;
              }
              var result = response.Data;
              // 只校验开奖动画依赖的字段：两张 1~52 的牌和 1~4 的开奖类型，
              // 否则发牌或结算动画会中途抛错，把本局卡在非下注状态。金额字段不做校验。
              var within = function within(value, max) {
                return +value >= 1 && +value <= max && Math.floor(+value) === +value;
              };
              if (!result || !Array.isArray(result.openNum) || result.openNum.length < 2 || !within(result.openNum[0], 52) || !within(result.openNum[1], 52) || !within(result.prizeType, 4)) {
                unknown();
                return false;
              }
              // 等待锁保留到 LhVipScene.clearBet，本局动画期间仍不可编辑筹码。
              _this2.result = result;
              _this2.history.unshift(result.prizeType + "");
              if (_this2.history.length > _this2.HISTORY_LIMIT) _this2.history.length = _this2.HISTORY_LIMIT;
              _this2.emit(LhVipGameEvent.SHAKE);
              return false;
            }, unknown);
            sending = false;
            if (current() && this.betWaiting && !this.betUnknown) {
              this.cancelBetRequest = cancel || null;
              // 必须在 sendOnlineData 返回之后才通知：未连接时的同步空回复已在上面解除等待，不会走到这里，
              // 相机也就不会为一笔没发出去的注单先动。
              if (!answered) this.emit(LhVipGameEvent.BET_SENT);
            } else if (cancel) {
              cancel();
            }
          } catch (_) {
            // 发送过程抛错时无法确定数据是否已写出，按结果未知处理。
            sending = false;
            unknown();
          }
          return true;
        }

        /** 本局正常收尾后解除等待；结果未知时不解除。 */;
        _proto.finishBet = function finishBet() {
          if (!this.betUnknown) this.betWaiting = false;
        }

        /** 离开房间：作废在途请求并清空本局下注状态，仅撤销本地监听，不代表服务端未受理。 */;
        _proto.resetBet = function resetBet() {
          this.betAttempt++;
          var cancel = this.cancelBetRequest;
          this.cancelBetRequest = null;
          if (cancel) cancel();
          this.betWaiting = false;
          this.betUnknown = false;
          this.nowBets = [];
        }

        /**
         * 进房时调用。history、lastBets、result、info 挂在模块单例上，退出房间后仍然保留；
         * 同一账号重进时沿用（可立即显示路单和“重复上局”），账号或平台变化时必须丢弃。
         */;
        _proto.enterRoom = function enterRoom() {
          var owner = NetManager.instance.hallOwner();
          if (this.owner === owner) return;
          this.owner = owner;
          this.history = [];
          this.lastBets = [];
          this.result = null;
          this.info = null;
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            EventManager.instance.on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.wsEvents), _step3; !(_step3 = _iterator3()).done;) {
            var event = _step3.value;
            EventManager.instance.off(event, this.recvData, this);
          }
        };
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            return;
          }
          switch (data.cmd) {
            // 下注回复由 submitBet 的请求回调独占消费，不经过这里。
            case ConfigManager.instance.ProtocolLhVip.info:
              {
                this.history = data.Data.history || [];
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

System.register("chunks:///_virtual/LhVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipDef.ts', './GUtil.ts', './LhVipProxy.ts', './ProxyMgr.ts', './NetManager.ts', './ConfigManager.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './DataManager.ts', './LhVipCardMgr.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Camera, Prefab, view, isValid, director, Canvas, RenderTexture, game, UITransform, Sprite, SpriteFrame, EffectAsset, Material, Vec4, MeshRenderer, instantiate, tween, v3, Tween, Animation, ParticleUtils, PhysicsSystem, Component, LhVipDef, GUtil, LhVipProxy, LhVipGameState, LhVipGameEvent, ProxyMgr, NetManager, ConfigManager, ViewManager, EventManager, Common, i18n, DataManager, UserKey, LhVipCardMgr, RenderScaleWatcher;
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
      isValid = module.isValid;
      director = module.director;
      Canvas = module.Canvas;
      RenderTexture = module.RenderTexture;
      game = module.game;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      EffectAsset = module.EffectAsset;
      Material = module.Material;
      Vec4 = module.Vec4;
      MeshRenderer = module.MeshRenderer;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      Animation = module.Animation;
      ParticleUtils = module.ParticleUtils;
      PhysicsSystem = module.PhysicsSystem;
      Component = module.Component;
    }, function (module) {
      LhVipDef = module.LhVipDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      LhVipProxy = module.default;
      LhVipGameState = module.LhVipGameState;
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
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "071f1SKihlHE5S9J8Mf0nMj", "LhVipScene", undefined);
      var Quat = math.Quat;
      var MOVETIME = 120;
      // 一个下注区最多保留的筹码节点数：超过 CHIP_STACK_FULL 笔后只显示前 CHIP_STACK_KEEP 个（见 checkChipList）。
      var CHIP_STACK_KEEP = 4;
      var CHIP_STACK_FULL = 5;
      // 每种面额最多留在池里待复用的筹码节点数，超出的直接销毁。
      // 四个下注区各显示至多 CHIP_STACK_FULL 个，同一面额同时在桌上的不会超过 20 个。
      var CHIP_POOL_LIMIT = 10;
      // 进场预热结算特效的起始时刻和间隔（秒）。进场相机动画共约 2.2 秒且期间不可下注，
      // 五个特效错开实例化，全部在动画结束前完成，避免集中在同一帧。
      var EFFECT_PREWARM_START = 0.3;
      var EFFECT_PREWARM_GAP = 0.35;
      // 低端机分层渲染（见 setSceneRenderScale）用到的两个渲染层，取引擎留给项目的自定义层里场景没用到的两个。
      // LAYER_SHARP：保持原分辨率的 3D 物体（筹码），只给清晰层相机看。
      // LAYER_SCENE_BLIT：铺满屏幕的那张“低分辨率 3D 场景”贴图，只给铺背景的相机看。
      var LAYER_SHARP = 1 << 6;
      var LAYER_SCENE_BLIT = 1 << 7;
      // 分层渲染时 3D 场景纹理相对画布的边长比例。RenderScaleWatcher 的档位是按“整块画布一起降”定的（最低 0.75），
      // 这里界面和筹码不跟着降，3D 层可以降得更低。
      // MT6765/GE8320 实测（下注静止）：整块画布 0.75 约 29 帧；分层后 0.67 约 47 帧，0.6 和 0.5 都约 51 帧。
      // 取 0.67：比 0.6 少约 4 帧，换桌面上印的赔率字更清楚。
      var SCENE_RENDER_SCALE = 0.67;
      // 本场景低于这个帧率就降档（RenderScaleWatcher 默认是 30）。MT6765/GE8320 上原生分辨率正好约 30 帧，
      // 卡在默认门槛上不会降；分层渲染后约 50 帧，而界面和筹码不变糊，所以门槛取在两者之间。
      var SCENE_RENDER_MIN_FPS = 45;
      // 关掉法线贴图的场景模型（场景根节点下的路径）。桌布和桌子占了下注视角的大部分像素，它们的法线贴图在
      // 画面上看不出差别（MT6765/GE8320 逐个开关截图对比），却要每个像素多采样一张贴图并做切线空间换算：
      // 分层渲染 0.67 下实测关掉桌布约 +1.6 帧、桌子约 +2 帧。墙面和龙虎雕像的法线贴图收益不到 1 帧，
      // 且巡视时浮雕细节看得见，保留。
      var SCENE_NO_NORMAL_MAP_MODELS = ["X_longhudou/X_zhuobu", "X_longhudou/X_zhuozi"];
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
          /** betSent 发起的先行飞行是否已到牌桌近景；发牌要等它与开奖结果都就绪。 */
          _this._cameraAtTable = false;
          _this.chipList = [[], [], [], []];
          // 结算特效按模板节点缓存一份实例，每局复用；始终挂在 node_particleParent 下随其销毁。
          _this.effectNodes = new Map();
          // 按面额下标存放已回收的筹码节点（隐藏但仍挂在 chipParent 下，随其销毁）。
          // 每个筹码自带金额 Label 和独立材质，低端机上实例化加首帧渲染要十几到几十毫秒，
          // 因此下注、撤销和清场都从池里取还，而不是每次销毁重建。
          _this.chipPools = [];
          _this._noBetTime = 0;
          // 分层渲染的状态：比例小于 1 表示已开启；下面几个对象只在开启期间存在。
          _this._sceneScale = 1;
          _this._sceneTexture = null;
          _this._sceneBlit = null;
          _this._sceneSmoothMaterial = null;
          _this._sceneBlitCamera = null;
          _this._sharpCamera = null;
          _this._mainVisibility = 0;
          _this._uiCamera = null;
          _this._uiVisibility = 0;
          // 筹码原本所在的渲染层；-1 表示还没记录。
          _this._chipLayer = -1;
          // 进场时场景配置的环境光类型；-1 表示还没记录。
          _this._sceneEnvLighting = -1;
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
          LhVipProxy.enterRoom();
          this.initEvent();
          this.changeGameState(LhVipGameState.START);
          LhVipDef.palyMusic(LhVipDef.audio.BG);
          this.selectChip(0);
        };
        _proto.initEvent = function initEvent() {
          LhVipProxy.on(LhVipGameEvent.TOUCH, this.checkClick, this);
          LhVipProxy.on(LhVipGameEvent.SHAKE, this.shake, this);
          LhVipProxy.on(LhVipGameEvent.BET_SENT, this.betSent, this);
          LhVipProxy.on(LhVipGameEvent.BET_ABORT, this.betAbort, this);
          LhVipProxy.on(LhVipGameEvent.BET_LAST, this.betLast, this);
          LhVipProxy.on(LhVipGameEvent.BET_REVERT, this.betRevert, this);
          LhVipProxy.on(LhVipGameEvent.CHANGE_TO_BET, this.changeToBet, this);
          LhVipProxy.on(LhVipGameEvent.BET_DOUBLE, this.betDouble, this);
        };
        _proto.onEnable = function onEnable() {
          LhVipProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          // 先重建场景纹理，再重算点击区域。
          view.on("canvas-resize", this.rebuildLayeredRender, this);
          view.on("canvas-resize", this.onResize, this);
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.history, {});
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolLhVip.info, {});
        }

        // 点击区域和下注金额标签由相机当前位姿换算，只有相机停在下注位姿时结果才有效。
        // 发牌、开奖或巡视期间收到 canvas-resize 会算出错位的区域，
        // 因此每次相机回到下注位姿后都要再调用一次。
        ;

        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2._posLights = [];
            _this2._posChips = [];
            var win = view.getDesignResolutionSize();
            for (var _iterator4 = _createForOfIteratorHelperLoose(_this2.node_lights), _step4; !(_step4 = _iterator4()).done;) {
              var i = _step4.value;
              var _pos = _this2.toGamePosition(i.worldPosition);
              _pos.x += win.width / 2;
              _pos.y += win.height / 2;
              _this2._posLights.push(_pos);
            }
            for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.node_chips), _step5; !(_step5 = _iterator5()).done;) {
              var _i3 = _step5.value;
              var _pos2 = _this2.toGamePosition(_i3.worldPosition);
              _pos2.x += win.width / 2;
              _pos2.y += win.height / 2;
              _this2._posChips.push(_pos2);
            }
            var pos = _this2.toGamePosition(_this2.node_center.worldPosition);
            pos.x += win.width / 2;
            pos.y += win.height / 2;
            _this2._posCenter = pos;
            var txtList = [];
            for (var _iterator6 = _createForOfIteratorHelperLoose(LhVipDef.txtPosition), _step6; !(_step6 = _iterator6()).done;) {
              var _i4 = _step6.value;
              var _pos3 = _this2.toGamePosition(_i4);
              txtList.push(_pos3);
            }
            var chipList = [];
            for (var _iterator7 = _createForOfIteratorHelperLoose(LhVipDef.chipPosition), _step7; !(_step7 = _iterator7()).done;) {
              var _i5 = _step7.value;
              var _pos4 = _this2.toGamePosition(_i5);
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
          view.off("canvas-resize", this.rebuildLayeredRender, this);
          view.off("canvas-resize", this.onResize, this);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          LhVipProxy.resetBet();
          // 本组件先于 Canvas 上的 RenderScaleWatcher 销毁，引擎随后会把对象字段置空，
          // 等 watcher 回调还原时已拿不到场景纹理，所以要在这里先释放。
          this.disableLayeredRender();
        };
        /**
         * 低端机降分辨率在本场景的做法（接管 RenderScaleWatcher 的默认做法，见其 scaleHandler），与 BjlVipScene 相同。
         * 默认做法把整块画布降到 0.75，界面文字和筹码面额一起变糊，帧率也只到 30 左右。这里只让主相机把 3D 场景
         * 画到一张缩小的纹理上，画布保持原分辨率，叠放顺序是：
         *   主相机（3D 场景，进纹理）→ 铺背景相机（把纹理铺满屏幕）→ 清晰层相机（原分辨率画筹码）→ 界面相机。
         * 清晰层相机不带场景的深度，放进清晰层的筹码不会被低分辨率层里的东西挡住；筹码盘和四个下注区上方
         * 没有会遮住筹码的物体，所以筹码整体放进清晰层。
         * scale 为 1 时还原。场景销毁过程中也会被调用一次，所以每一步都要判断对象是否还在。
         */
        _proto.setSceneRenderScale = function setSceneRenderScale(scale) {
          this.disableLayeredRender();
          if (scale < 1 && isValid(this.node)) this.enableLayeredRender(scale);
          this.syncChipLayer();
          this.syncLowTierLighting();
        };
        /**
         * 已降档（分层渲染开启）说明是低端机：环境光从环境贴图改为半球光，省掉每个像素的环境反射采样，
         * 降档被回退时恢复原配置。做法与 SpeedCarScene、BlackJackScene 相同。
         * MT6765/GE8320 分层渲染 0.67 下实测约 48 帧 -> 54 帧；代价是桌沿的金色反光变暗、墙面变黑，
         * 所以只在降档时生效，不降档的设备画面不变。
         * 本场景接管了降档做法，档位变化不会派发 canvas-resize，只通知到 setSceneRenderScale，所以挂在那里。
         * 场景销毁过程中也会被调用，取场景和天空盒时要判空。
         */
        _proto.syncLowTierLighting = function syncLowTierLighting() {
          var scene = director.getScene();
          var skybox = scene && scene.globals ? scene.globals.skybox : null;
          if (!skybox) return;
          if (this._sceneEnvLighting < 0) this._sceneEnvLighting = skybox.envLightingType;
          // 0 即 EnvironmentLightingType.HEMISPHERE_DIFFUSE，该枚举没有从 cc 导出。
          var envLighting = this._sceneScale < 1 ? 0 : this._sceneEnvLighting;
          // 值没变就不写：写入会触发全场景材质重编。
          if (skybox.envLightingType != envLighting) skybox.envLightingType = envLighting;
        };
        _proto.enableLayeredRender = function enableLayeredRender(scale) {
          var main = this.mainCamera;
          var canvas = isValid(this.game) ? this.game.getComponent(Canvas) : null;
          var ui = canvas && canvas.cameraComponent;
          if (!isValid(main) || !ui) return;
          var texture = new RenderTexture();
          texture.reset({
            width: Math.round(game.canvas.width * scale),
            height: Math.round(game.canvas.height * scale)
          });

          // 铺背景：一张铺满可见区域的图，放在单独的层里，只有铺背景相机能看到。
          var blit = new Node("SceneBlit");
          blit.layer = LAYER_SCENE_BLIT;
          this.game.insertChild(blit, 0);
          blit.addComponent(UITransform).setContentSize(view.getVisibleSize());
          var sprite = blit.addComponent(Sprite);
          sprite.sizeMode = Sprite.SizeMode.CUSTOM;
          var frame = new SpriteFrame();
          frame.texture = texture;
          sprite.spriteFrame = frame;
          this.applySceneSmooth(sprite, texture);

          // 新相机的绘制顺序排在主相机之后、界面相机之前。
          var blitCamera = new Node("SceneBlitCamera");
          ui.node.parent.addChild(blitCamera);
          blitCamera.setPosition(ui.node.position);
          var blitCam = blitCamera.addComponent(Camera);
          blitCam.projection = ui.projection;
          blitCam.orthoHeight = ui.orthoHeight;
          blitCam.near = ui.near;
          blitCam.far = ui.far;
          blitCam.clearFlags = Camera.ClearFlag.SOLID_COLOR;
          blitCam.priority = main.priority + 1;
          blitCam.visibility = LAYER_SCENE_BLIT;

          // 清晰层相机挂在主相机下面，位置和朝向始终与它一致；只清深度，画在铺好的背景上。
          var sharpCamera = new Node("SharpCamera");
          main.node.addChild(sharpCamera);
          var sharpCam = sharpCamera.addComponent(Camera);
          sharpCam.projection = main.projection;
          sharpCam.fov = main.fov;
          sharpCam.fovAxis = main.fovAxis;
          sharpCam.near = main.near;
          sharpCam.far = main.far;
          sharpCam.clearFlags = Camera.ClearFlag.DEPTH_ONLY;
          sharpCam.priority = main.priority + 2;
          sharpCam.visibility = LAYER_SHARP;
          this._mainVisibility = main.visibility;
          this._uiCamera = ui;
          this._uiVisibility = ui.visibility;
          main.visibility = main.visibility & ~LAYER_SHARP;
          ui.visibility = ui.visibility & ~LAYER_SCENE_BLIT;
          main.targetTexture = texture;
          this._sceneTexture = texture;
          this._sceneBlit = blit;
          this._sceneBlitCamera = blitCamera;
          this._sharpCamera = sharpCamera;
          this._sceneScale = scale;
        }

        /**
         * 铺背景时顺带做边缘平滑（shaders/sceneSmooth.effect，与 BjlVipGame 里的同名着色器内容相同，各 bundle 自带一份）。
         * 场景纹理没有抗锯齿，不处理的话桌沿是台阶状的。着色器异步加载，加载完之前和加载失败时用引擎默认材质：
         * 有锯齿但画面正确。期间分层渲染可能已经关掉或重建（转屏），所以回调里要核对还是不是同一张纹理。
         */;
        _proto.applySceneSmooth = function applySceneSmooth(sprite, texture) {
          var _this3 = this;
          var bundle = LhVipProxy.bundle;
          if (!bundle) return;
          bundle.load("shaders/sceneSmooth", EffectAsset, function (err, effect) {
            if (err || !effect || !isValid(sprite) || _this3._sceneTexture !== texture) return;
            var material = new Material();
            material.initialize({
              effectAsset: effect
            });
            material.setProperty("texelSize", new Vec4(1 / texture.width, 1 / texture.height, 0, 0));
            sprite.customMaterial = material;
            _this3._sceneSmoothMaterial = material;
          });
        };
        _proto.disableLayeredRender = function disableLayeredRender() {
          if (this._sceneScale >= 1) return;
          this._sceneScale = 1;
          if (isValid(this.mainCamera)) {
            this.mainCamera.targetTexture = null;
            this.mainCamera.visibility = this._mainVisibility;
          }
          if (isValid(this._uiCamera)) this._uiCamera.visibility = this._uiVisibility;
          for (var _i6 = 0, _arr = [this._sceneBlit, this._sceneBlitCamera, this._sharpCamera]; _i6 < _arr.length; _i6++) {
            var node = _arr[_i6];
            if (isValid(node)) node.destroy();
          }
          if (this._sceneTexture) this._sceneTexture.destroy();
          if (this._sceneSmoothMaterial) this._sceneSmoothMaterial.destroy();
          this._sceneSmoothMaterial = null;
          this._uiCamera = null;
          this._sceneBlit = this._sceneBlitCamera = this._sharpCamera = null;
          this._sceneTexture = null;
        }

        /**
         * 按分层渲染是否开启，把筹码盘上的模板和桌上、池里的筹码切到清晰层或切回原来的层。
         * 新筹码由模板实例化，自动带上模板当前的层。只改原本就在筹码层的节点：筹码下面生成面额贴图用的
         * Label 节点在界面层，不能动。
         */;
        _proto.syncChipLayer = function syncChipLayer() {
          var chips = (this.node_chips || []).concat(isValid(this.chipParent) ? this.chipParent.children : []);
          if (this._chipLayer < 0) {
            if (!isValid(chips[0])) return;
            this._chipLayer = chips[0].layer;
          }
          var from = this._sceneScale < 1 ? this._chipLayer : LAYER_SHARP;
          var to = this._sceneScale < 1 ? LAYER_SHARP : this._chipLayer;
          var walk = function walk(node) {
            if (node.layer === from) node.layer = to;
            node.children.forEach(walk);
          };
          for (var _iterator8 = _createForOfIteratorHelperLoose(chips), _step8; !(_step8 = _iterator8()).done;) {
            var chip = _step8.value;
            if (isValid(chip)) walk(chip);
          }
        }

        // 画布尺寸变化（转屏）后场景纹理要按新尺寸重建。
        ;

        _proto.rebuildLayeredRender = function rebuildLayeredRender() {
          if (this._sceneScale < 1) this.setSceneRenderScale(this._sceneScale);
        }

        /**
         * 分层渲染时主相机画到一张比画布小的纹理上，相机按纹理尺寸换算屏幕坐标。
         * 返回“纹理尺寸 / 画布尺寸”，未开启时为 1。触摸位置要乘它再求射线；
         * convertToUINode 的结果（相对画面中心的偏移）要除以它。
         */;
        _proto.sceneTargetRatio = function sceneTargetRatio() {
          var target = isValid(this.mainCamera) ? this.mainCamera.targetTexture : null;
          return target ? target.width / game.canvas.width : 1;
        }

        /** 世界坐标换算到界面根节点（居中、与屏幕对齐）下的坐标，分层渲染开启与否结果一致。 */;
        _proto.toGamePosition = function toGamePosition(world) {
          var pos = this.mainCamera.convertToUINode(world, this.game);
          var ratio = this.sceneTargetRatio();
          if (ratio !== 1) {
            pos.x /= ratio;
            pos.y /= ratio;
          }
          return pos;
        }

        /**
         * 去掉场景大模型上对画面没有可见贡献的着色计算，所有设备都生效（做法与 BjlVipScene 相同）。
         * 只改各渲染器自己的材质实例，不改 FBX 及其 meta，也不改共享的材质资源，离开场景后不留痕迹。
         * 放在 start：着色器重编的耗时落在进场动画期间。
         */;
        _proto.simplifySceneMaterials = function simplifySceneMaterials() {
          var scene = director.getScene();
          for (var _i7 = 0, _SCENE_NO_NORMAL_MAP_ = SCENE_NO_NORMAL_MAP_MODELS; _i7 < _SCENE_NO_NORMAL_MAP_.length; _i7++) {
            var path = _SCENE_NO_NORMAL_MAP_[_i7];
            var node = scene && scene.getChildByPath(path);
            var renderer = node && node.getComponent(MeshRenderer);
            // 场景结构变了要能被发现，否则这项优化会悄悄失效。
            if (!renderer) {
              console.warn("LhVipScene: scene model not found", path);
              continue;
            }
            renderer.material.recompileShaders({
              USE_NORMAL_MAP: false
            });
          }
        };
        _proto.start = function start() {
          var _this4 = this;
          var node = instantiate(this.gameView);
          this.game.addChild(node);
          this.prewarmEffects();
          this.simplifySceneMaterials();
          // 低端机自动降分辨率由 ViewManager 挂载的 RenderScaleWatcher 判断何时降、是否回退；本场景接管具体做法。
          var scene = director.getScene();
          var watcher = scene ? scene.getComponentInChildren(RenderScaleWatcher) : null;
          if (watcher) {
            watcher.scaleHandler = function (scale) {
              return _this4.setSceneRenderScale(scale < 1 ? SCENE_RENDER_SCALE : 1);
            };
            watcher.minFps = SCENE_RENDER_MIN_FPS;
          }
          this.mainCamera.node.position = LhVipDef.cameraInfo.start.position.clone();
          this.mainCamera.node.eulerAngles = LhVipDef.cameraInfo.start.rotation.clone();
          tween(this.mainCamera.node).delay(0.2).to(2, {
            position: LhVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this4.onResize();
            _this4.changeGameState(LhVipGameState.BET);
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
          var _this5 = this;
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
            var card2 = _this5.cardMgr.getCard(result[1]);
            _this5.cardMgr.node.addChild(card2);
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
              _this5.shakeEnd();
            }).start();
          }).start();
        }

        /**
         * 注单已发出：不等回复，相机先飞向牌桌近景，避免点击后画面静止一次请求往返的时间。
         * 此时还没有开奖结果，只动相机、不发牌（sendCard 要读本局 openNum）；
         * 回复到达后由 shake 接手，被拒或结果未知由 betAbort 飞回。
         * 这里不能提前进入 SHAKE：界面在 SHAKE 时收起按钮栏和路单，只有 CLEAR 会放回，被拒后它们会留在屏幕外。
         */;
        _proto.betSent = function betSent() {
          var _this6 = this;
          // 能提交的只有 BET，以及巡视中点“开始”时 changeToBet 刚切到的回位过渡 START；后者的回位飞行在下面被接管。
          if (this._state != LhVipGameState.BET && this._state != LhVipGameState.START) return;
          this._cameraAtTable = false;
          this.changeGameState(LhVipGameState.SHAKE_WAIT);
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.openNear.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this6._cameraAtTable = true;
            // 结果先于相机到达时，由这里开始发牌；否则停在近景等 shake。
            if (_this6._state == LhVipGameState.SHAKE) _this6.shakeStart();
          }).start();
        }

        /** 已发出的注单不会开奖：相机飞回下注位姿，到位后重新开放下注界面。等待锁由 LhVipProxy 决定，这里不改。 */;
        _proto.betAbort = function betAbort() {
          var _this7 = this;
          if (this._state != LhVipGameState.SHAKE_WAIT) return;
          this._noBetTime = 0;
          // 与巡视返回相同：点击区域按下注位姿换算，飞回途中用 START 过渡，不能处于 BET。
          this.changeGameState(LhVipGameState.START);
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this7.onResize();
            _this7.changeGameState(LhVipGameState.BET);
          }).start();
        };
        _proto.shake = function shake() {
          var _this8 = this;
          var early = this._state == LhVipGameState.SHAKE_WAIT;
          this.changeGameState(LhVipGameState.SHAKE);
          if (early) {
            // 相机已由 betSent 先行出发：不重启飞行（否则总时长变长、速度跳变），未到位时由飞行回调开始发牌。
            if (this._cameraAtTable) this.shakeStart();
            return;
          }
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.openNear.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this8.shakeStart();
          }).start();
        };
        _proto.shakeEnd = function shakeEnd() {
          var _this9 = this;
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.open.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.open.rotation.clone()
          }).call(function () {
            // this.shakeStart();
            _this9.showResult();
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
            var node = _step9.value;
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
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.cardMgr.node.children), _step9; !(_step9 = _iterator9()).done;) {
            _loop();
          }
        };
        _proto.showResult = function showResult() {
          var _this10 = this;
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

          this.playEffect(this.node_winLights[num]);
          if (num == 3) {
            this.playEffect(this.node_winLights[2]);
          }
          if (LhVipProxy.result.prizeAmount > 0) {
            this.scheduleOnce(function () {
              _this10.playEffect(_this10.node_gold);
            }, 1);
          }
          this.scheduleOnce(function () {
            _this10.clearBet();
            _this10.clear();
          }, 4);
          this.scheduleOnce(function () {
            _this10.clearPoker();
          }, 3.5);
          LhVipProxy.emit(LhVipGameEvent.RESULT);
        }

        /**
         * 播放一个结算特效。实例化粒子节点在低端机上要占用上百毫秒的一帧，
         * 因此每个模板只实例化一次，之后每局重新激活并从头播放；clear 时停止并隐藏。
         */;
        _proto.playEffect = function playEffect(template) {
          var node = this.effectNodes.get(template);
          if (!isValid(node)) {
            node = instantiate(template);
            this.node_particleParent.addChild(node);
            this.effectNodes.set(template, node);
          }
          node.active = true;
          // 激活只会重启 playOnAwake 的粒子，这里统一从头播放整棵子树。
          ParticleUtils.play(node);
        }

        /** 取一个指定面额的筹码节点，位置重置为筹码盘上的模板位置（飞入动画的起点）。 */;
        _proto.takeChip = function takeChip(index) {
          var pool = this.chipPools[index];
          while (pool && pool.length > 0) {
            var _chip = pool.pop();
            if (!isValid(_chip)) continue;
            _chip.setPosition(this.node_chips[index].position);
            _chip.active = true;
            return _chip;
          }
          var chip = instantiate(this.node_chips[index]);
          this.chipParent.addChild(chip);
          return chip;
        }

        /** 归还筹码节点。必须先停掉它身上的动画，否则旧的飞行回调会作用到下一次复用。 */;
        _proto.recycleChip = function recycleChip(chip, index) {
          Tween.stopAllByTarget(chip);
          var pool = this.chipPools[index] || (this.chipPools[index] = []);
          if (pool.length < CHIP_POOL_LIMIT) {
            chip.active = false;
            pool.push(chip);
          } else {
            chip.removeFromParent();
            chip.destroy();
          }
        }

        /**
         * 进场时把结算特效各实例化并渲染一帧，再停止隐藏。
         * 否则每种特效第一次中奖时都要在开奖那一帧实例化，低端机上会卡一百多毫秒。
         */;
        _proto.prewarmEffects = function prewarmEffects() {
          var _this11 = this;
          var templates = this.node_winLights.concat(this.node_gold);
          templates.forEach(function (template, i) {
            _this11.scheduleOnce(function () {
              if (!isValid(template) || _this11.effectNodes.has(template)) return;
              _this11.playEffect(template);
              // 留一帧让粒子缓冲和材质完成初始化，下一帧收起；
              // 只在仍处于进场阶段时收起，不能打断已经开始的结算特效。
              _this11.scheduleOnce(function () {
                var node = _this11.effectNodes.get(template);
                if (_this11._state != LhVipGameState.START || !isValid(node)) return;
                ParticleUtils.stop(node);
                node.active = false;
              }, 0);
            }, EFFECT_PREWARM_START + i * EFFECT_PREWARM_GAP);
          });
        };
        _proto.clearBet = function clearBet() {
          var _this12 = this;
          var listIndex = 0;
          for (var _iterator10 = _createForOfIteratorHelperLoose(this.chipList), _step10; !(_step10 = _iterator10()).done;) {
            var list = _step10.value;
            if (list.length > 0) {
              var _loop2 = function _loop2() {
                var child = list[i];
                var node = child.chip;
                // 超出显示层数或批量下注时只记注单的条目没有对应节点。
                if (!node) return 1; // continue
                var index = child.index;
                if (LhVipProxy.result && LhVipProxy.result.prizeType - 1 == listIndex) {
                  tween(node)
                  // .delay(count * 0.05)
                  .to(0.3, {
                    position: _this12.node_chips[index].position
                  }).call(function () {
                    _this12.recycleChip(node, index);
                  }).start();
                } else {
                  _this12.recycleChip(node, index);
                }
              };
              for (var i = list.length - 1; i >= 0; i--) {
                if (_loop2()) continue;
              }
            }
            listIndex++;
            list.length = 0;
          }
          LhVipProxy.lastBets = LhVipProxy.nowBets.slice();
          LhVipProxy.nowBets = [];
          LhVipProxy.finishBet();
        };
        _proto.clear = function clear() {
          var _this13 = this;
          this.changeGameState(LhVipGameState.CLEAR);
          this._noBetTime = 0;
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: LhVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this13.onResize();
            _this13.changeGameState(LhVipGameState.BET);
          }).start();

          // for (let i of this.node_blinks) {
          //     let ani = i.getComponent(cc.Animation);
          //     ani.play("aniNormal");
          // }
          for (var i = 0; i < 6; i++) {
            var ani = this.node_blinks[i].getComponent(Animation);
            ani.play("aniNormal");
          }
          for (var _i8 = 6; _i8 < 8; _i8++) {
            var _ani = this.node_blinks[_i8].getComponent(Animation);
            _ani.play("aniGray1");
          }
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.node_lights), _step11; !(_step11 = _iterator11()).done;) {
            var _i9 = _step11.value;
            Tween.stopAllByTarget(_i9);
            _i9.active = false;
          }

          // 特效节点留作下一局复用：先停止（同时清掉残留粒子）再隐藏，停止必须在节点仍激活时执行。
          for (var _iterator12 = _createForOfIteratorHelperLoose(this.node_particleParent.children), _step12; !(_step12 = _iterator12()).done;) {
            var node = _step12.value;
            ParticleUtils.stop(node);
            node.active = false;
          }
        };
        _proto.changeGameState = function changeGameState(state) {
          this._state = state;
          LhVipProxy.emit(LhVipGameEvent.CHANGE_STATE, this._state);
        };
        _proto.betLast = function betLast() {
          for (var _iterator13 = _createForOfIteratorHelperLoose(LhVipProxy.lastBets), _step13; !(_step13 = _iterator13()).done;) {
            var i = _step13.value;
            if (!this.checkBet(i.Pos)) {
              return;
            }
          }
          this.addBetBatch(LhVipProxy.lastBets);
        }

        /**
         * 按注单列表批量加注（重复上局、加倍）。
         * 某个下注区有一笔被余额或限额拒绝后，该区剩余注单不再尝试，其他区照常处理，
         * 避免同一帧重复弹出几十条相同提示；落注音效、界面刷新和下注区闪光整批只做一次，
         * 否则上百笔注单会在同一帧里触发上百次界面刷新。
         * 批量加注只生成落位后会保留的筹码节点：每个筹码自带金额 Label 和独立材质，
         * 低端机上实例化一个约十几毫秒，原先一次生成的多数节点落位后立即被 checkChipList 回收。
         */;
        _proto.addBetBatch = function addBetBatch(list, maxPerPos) {
          if (maxPerPos === void 0) {
            maxPerPos = Infinity;
          }
          var countList = [0, 0, 0, 0];
          var rejected = [false, false, false, false];
          var touched = [false, false, false, false];
          var added = false;
          // 各区本批计划加注后的总笔数，用来判断第 CHIP_STACK_FULL 笔是否会保留。
          var planned = this.chipList.map(function (chips) {
            return chips.length;
          });
          for (var _iterator14 = _createForOfIteratorHelperLoose(list), _step14; !(_step14 = _iterator14()).done;) {
            var i = _step14.value;
            planned[i.Pos]++;
          }
          for (var pos = 0; pos < planned.length; pos++) {
            planned[pos] = Math.min(planned[pos], this.chipList[pos].length + maxPerPos);
          }
          for (var _iterator15 = _createForOfIteratorHelperLoose(list), _step15; !(_step15 = _iterator15()).done;) {
            var _i10 = _step15.value;
            countList[_i10.Pos]++;
            if (rejected[_i10.Pos] || countList[_i10.Pos] > maxPerPos) {
              continue;
            }
            var have = this.chipList[_i10.Pos].length;
            var needChip = have < CHIP_STACK_KEEP || have < CHIP_STACK_FULL && planned[_i10.Pos] <= CHIP_STACK_FULL;
            var result = this.addBetByInfo(_i10, needChip, true);
            // null 表示面额不在筹码表中，沿用原行为跳过该笔。
            if (result === false) rejected[_i10.Pos] = true;
            if (result) {
              added = true;
              touched[_i10.Pos] = true;
            }
          }
          if (!added) return;
          for (var _pos5 = 0; _pos5 < touched.length; _pos5++) {
            if (touched[_pos5]) this.flashLight(_pos5);
          }
          LhVipProxy.emit(LhVipGameEvent.ADD_BET);
          LhVipDef.palyAudio(LhVipDef.audio.ADDBET);
        }

        /** 下注区闪一下，作为点击反馈。 */;
        _proto.flashLight = function flashLight(position) {
          var _this14 = this;
          this.node_lights[position].active = true;
          tween(this.node_lights[position]).delay(0.1).call(function () {
            _this14.node_lights[position].active = false;
          }).start();
        };
        _proto.betRevert = function betRevert() {
          // 已提交的筹码即服务端注单快照，等待期间不可撤销。
          if (LhVipProxy.betWaiting) return;
          if (LhVipProxy.nowBets.length > 0) {
            // let info = LhVipProxy.nowBets.pop();
            LhVipProxy.nowBets.length = 0;
            for (var _iterator16 = _createForOfIteratorHelperLoose(this.chipList), _step16; !(_step16 = _iterator16()).done;) {
              var i = _step16.value;
              for (var _iterator17 = _createForOfIteratorHelperLoose(i), _step17; !(_step17 = _iterator17()).done;) {
                var child = _step17.value;
                var node = child.chip;
                if (!node) continue;
                this.recycleChip(node, child.index);
              }
              i.length = 0;
            }
            LhVipProxy.emit(LhVipGameEvent.ADD_BET);
            LhVipDef.palyAudio(LhVipDef.audio.CANCEL);
          }
        };
        _proto.betDouble = function betDouble() {
          // 沿用原规则：每个下注区一次最多加倍前 20 笔。
          this.addBetBatch(LhVipProxy.nowBets.slice(), 20);
        }

        /** 返回 true/false 表示加注成功/被拒绝，null 表示面额不在筹码表中未处理。 */;
        _proto.addBetByInfo = function addBetByInfo(i, needChip, batch) {
          if (needChip === void 0) {
            needChip = true;
          }
          if (batch === void 0) {
            batch = false;
          }
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
            return this.addBet(pos, index, needChip, batch);
          }
          return null;
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
          for (var _iterator18 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step18; !(_step18 = _iterator18()).done;) {
            var i = _step18.value;
            if (i.Pos == position) allBet += i.Amount;
          }

          //最大投注限制
          // 限额配置未返回时不做本地拦截，由服务端下注校验兜底（超限返回 30044）。
          var limit = LhVipProxy.info && LhVipProxy.info[position];
          if (limit && allBet + gold > limit.MaxIssueBet) {
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
        }

        /**
         * 加一笔注。needChip 为 false 时只记注单不生成筹码节点；
         * batch 为 true 时不闪光、不通知界面、不播音效，由 addBetBatch 在整批结束后统一处理。
         * 返回是否加注成功。
         */;
        _proto.addBet = function addBet(position, index, needChip, batch) {
          var _this15 = this;
          if (needChip === void 0) {
            needChip = true;
          }
          if (batch === void 0) {
            batch = false;
          }
          // 提交后冻结筹码：桌面、余额显示和“重复上局”必须与已提交注单一致。
          if (LhVipProxy.betWaiting) return false;
          var allBet = 0;
          for (var _iterator19 = _createForOfIteratorHelperLoose(LhVipProxy.nowBets), _step19; !(_step19 = _iterator19()).done;) {
            var i = _step19.value;
            allBet += i.Amount;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          gold -= LhVipDef.chipNumbers[index];
          if (gold < 0) {
            Common.showTip(i18n.errTip("30003"));
            return false;
          }
          if (!batch) this.flashLight(position);
          if (!this.checkBet(position, LhVipDef.chipNumbers[index])) {
            return false;
          }
          var chip = null;
          if (needChip) {
            var pos = LhVipDef.chipPosition[position].clone();
            var len = this.chipList[position].length > CHIP_STACK_FULL ? CHIP_STACK_FULL : this.chipList[position].length;
            pos.y += len * 0.005;
            chip = this.takeChip(index);
            tween(chip).to(0.3, {
              position: pos
            }).call(function () {
              _this15.checkChipList(position);
            }).start();
          }
          this.chipList[position].push({
            chip: chip,
            index: index
          });
          LhVipProxy.nowBets.push({
            Pos: position,
            Amount: LhVipDef.chipNumbers[index]
          });
          if (!batch) {
            LhVipProxy.emit(LhVipGameEvent.ADD_BET, {
              Pos: position,
              Amount: LhVipDef.chipNumbers[index]
            });
            LhVipDef.palyAudio(LhVipDef.audio.ADDBET);
          }
          return true;
        }

        // 一个下注区超过 CHIP_STACK_FULL 笔后只保留前 CHIP_STACK_KEEP 个筹码可见（原有显示规则）。
        // 被隐藏的筹码此后不会再显示，回收到节点池而不是留在注单里，
        // 否则连续点击或加倍会让节点数随注单无限增长；注单条目保留，金额和互斥判断不受影响。
        ;

        _proto.checkChipList = function checkChipList(posIndex) {
          var chipList = this.chipList[posIndex];
          if (chipList.length > CHIP_STACK_FULL) {
            for (var i = CHIP_STACK_KEEP; i < chipList.length; i++) {
              var chip = chipList[i].chip;
              if (!chip) continue;
              chipList[i].chip = null;
              this.recycleChip(chip, chipList[i].index);
            }
          }
        };
        _proto.changeToBet = function changeToBet() {
          var _this16 = this;
          if (this._state == LhVipGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(LhVipGameState.START);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: LhVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this16.onResize();
              _this16.changeGameState(LhVipGameState.BET);
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
          var _this17 = this;
          this._noBetTime = 0;
          if (this._state == LhVipGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(LhVipGameState.START);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: LhVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: LhVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this17.onResize();
              _this17.changeGameState(LhVipGameState.BET);
            }).start();
            return;
          }
          if (this._state != LhVipGameState.BET) return;
          // onResize 延后一帧才算出点击区域；此前的点击没有可用坐标，直接忽略。
          if (!this._posCenter) return;
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
          var ratio = this.sceneTargetRatio();
          var ray = this.mainCamera.screenPointToRay(event.getLocation().x * ratio, event.getLocation().y * ratio);
          if (PhysicsSystem.instance.raycastClosest(ray)) {
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var isCircle = true;
            for (var _i11 = 0; _i11 < this.node_blinks.length; _i11++) {
              if (raycastResult.collider.node.parent == this.node_blinks[_i11]) {
                this.addBet(_i11, this._selectChipIndex);
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
          for (var _iterator20 = _createForOfIteratorHelperLoose(this.highLights), _step20; !(_step20 = _iterator20()).done;) {
            var node = _step20.value;
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

System.register("chunks:///_virtual/LhVipView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './LhVipDef.ts', './LhVipProxy.ts', './Common.ts', './ViewManager.ts', './ProxyMgr.ts', './DataManager.ts', './GameRecordLayer.ts', './I18n.ts', './I18nLocal.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Label, Button, SpriteFrame, Sprite, sp, UIOpacity, tween, isValid, Tween, v3, instantiate, Component, LhVipDef, LhVipProxy, LhVipGameEvent, LhVipGameState, Common, ViewManager, ProxyMgr, DataManager, UserKey, GameRecordLayer, i18n, I18nLocal;
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
      isValid = module.isValid;
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
    }, function (module) {
      I18nLocal = module.I18nLocal;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "47f78bOirlEwIRxUpqQkzt3", "LhVipView", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;

      /** 结算动画资源预热的起始时间和两个动画的间隔（秒）。排在 LhVipScene 的结算特效预热（约 3.5 秒结束）之后，避免长帧叠加。 */
      var RESULT_PREWARM_START = 4;
      var RESULT_PREWARM_GAP = 0.4;
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
          // 节点每次激活时，其上的 I18nLocal 都会在下一帧清空动画队列并按组件的 loop 重播当前动画，
          // showResult 排的“intro 一遍后接 idle”因此被替换。预制体里 loop 为 true 时 intro 会循环到结算结束，
          // 这里改为不循环：重播的 intro 只播一遍并停在最后一帧（idle 本身就是时长为 0 的定格）。
          this.spine_vs.loop = false;
          this.spine_result.loop = false;
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
          this.prewarmResult();
        }

        /**
         * 进场后提前加载并解析结算动画的骨骼数据，不激活节点。
         * 两个动画节点在 onLoad 就被隐藏，节点上的 I18nLocal 要到首次开奖激活时才加载当前语言的
         * 骨骼和图集，再连同预制体自带的数据各解析一次，这些开销都落在开奖的那几帧上。
         * 这里只让资源进缓存，不能改成“激活一帧再收起”：I18nLocal 换完数据后会延迟一帧重设动画，
         * 节点提前收起会让这次重设落到首局开奖上，把刚开始播放的动画清掉。
         */;
        _proto.prewarmResult = function prewarmResult() {
          var _this3 = this;
          [this.spine_vs, this.spine_result].forEach(function (spine, i) {
            _this3.scheduleOnce(function () {
              var base = spine && spine.skeletonData;
              // 已提交下注后不再预热，避免解析叠在发牌和开奖的帧上；首次开奖仍按原流程加载。
              if (!base || LhVipProxy.betWaiting) return;
              base.getRuntimeData(true);
              // 当前语言没有本地化版本或加载失败时返回空，实际播放的就是上面已解析的自带数据。
              I18nLocal.getLocalSkeletonData(LhVipProxy.BUNDLE, base.name).then(function (data) {
                if (!data || !isValid(_this3, true) || LhVipProxy.betWaiting) return;
                data.getRuntimeData(true);
              });
            }, RESULT_PREWARM_START + i * RESULT_PREWARM_GAP);
          });
        };
        _proto.initEvent = function initEvent() {
          var _this4 = this;
          LhVipProxy.on(LhVipGameEvent.CHANGE_STATE, this.changeState, this);
          LhVipProxy.on(LhVipGameEvent.ADD_BET, this.addBet, this);
          LhVipProxy.on(LhVipGameEvent.RESIZE, function (info) {
            for (var i = 0; i < 4; i++) {
              _this4.node_bets[i].position = info.txtList[i];
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

          // “开始”只在 BET 状态且没有未收尾的注单（含结果未知的锁定）时有效，其余时候不用提示动画引导点击。
          if (allBet > 0 && !LhVipProxy.betWaiting && this._state == LhVipGameState.BET) {
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
                // 每次状态切换都会先隐藏总下注；巡视返回时桌面上可能仍有未提交的筹码，
                // 需按当前注单重新刷新各区金额、总下注、余额和按钮。
                this.addBet();
                break;
              }
          }
        };
        _proto.showResult = function showResult() {
          var _this5 = this;
          LhVipDef.palyAudio(LhVipDef.audio.RESULT);
          this.node_result.active = true;

          // this.node_winTitle.active = LhVipProxy.result.prizeAmount > 0;
          this.txt_win.string = Common.ChangeMoneyFormat(LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount, 2);
          // this.txt_win.node.active = LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount > 0;

          // this.sprite_winBg.spriteFrame = this.frame_winBg[LhVipProxy.result.prizeType - 1];
          // this.txt_resultTitle.string = i18n.lang.lhvip.type[LhVipProxy.result.prizeType];

          if (LhVipProxy.result.prizeAmount + LhVipProxy.result.returnAmount > 0) {
            this.scheduleOnce(function () {
              _this5.txt_win.node.active = true;
              _this5.spine_result.node.active = true;
              _this5.spine_result.setAnimation(0, "intro", false);
              _this5.spine_result.addAnimation(0, "idle", true);
            }, 1);
          } else {
            this.txt_win.node.active = false;
            this.spine_result.node.active = false;
          }
          this.scheduleOnce(function () {
            var names = ["dragonwin", "tiger", "hoa", "hoadonghoa"];
            _this5.spine_vs.node.active = true;
            _this5.spine_vs.setAnimation(0, names[LhVipProxy.result.prizeType - 1] + "_intro", false);
            _this5.spine_vs.addAnimation(0, names[LhVipProxy.result.prizeType - 1] + "_idle", true);
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
          // 等待与失败收口统一由 LhVipProxy.submitBet 负责；这里不再改本地 _state，
          // 否则请求失败时没有任何状态事件能把它改回 BET。
          if (!LhVipProxy.submitBet()) return;
          Tween.stopAllByTarget(this.node_start);
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