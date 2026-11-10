System.register("chunks:///_virtual/first-person-camera4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "20bf1++WEdDnrxl1uD0T2XD", "first-person-camera", undefined);
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

System.register("chunks:///_virtual/SdVipDef.ts", ['cc', './SdVipProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, math, v3, director, AudioClip, isValid, SdVipProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      v3 = module.v3;
      director = module.director;
      AudioClip = module.AudioClip;
      isValid = module.isValid;
    }, function (module) {
      SdVipProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0900165FeNKOr4VMZmzc58K", "SdVipDef", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var SdVipDef = exports('SdVipDef', /*#__PURE__*/function () {
        function SdVipDef() {}
        SdVipDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          //        // console.log("palyAudio", name);
          var bundle = SdVipProxy.bundle;
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
        SdVipDef.palyMusic = function palyMusic(name) {
          var bundle = SdVipProxy.bundle;
          if (!bundle) return;
          var scene = director.getScene();
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            // 迟到的背景音乐不能在离开房间后覆盖大厅或其他游戏的音轨。
            if (err || !audio || !isValid(scene, true) || director.getScene() !== scene) return;
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return SdVipDef;
      }());
      SdVipDef.cameraInfo = {
        start: {
          position: v3(0, 5.66, 8.324),
          rotation: v3(-24.6, 0, 0)
        },
        bet: {
          position: v3(0, 2.37, 1.96),
          rotation: v3(-26.4, 0, 0)
        },
        open: {
          position: v3(0, 3, 1.13),
          rotation: v3(-54.75, 0.0, 0)
        },
        // open: { position: v3(0, 2, 1.35), rotation: v3(-26.4, 0, 0) },
        openNear: {
          position: v3(0, 2.012, 0.792),
          rotation: v3(-21.308, 0, 0)
        },
        look: {
          position: v3(0, 3, 1.13),
          rotation: v3(-54.75, 0.0, 0)
        }
      };
      SdVipDef.chipNumbers = [1000, 10000, 50000, 100000, 500000, 1000000, 5000000];
      SdVipDef.rects = [{
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
      SdVipDef.position = [{
        x: 0,
        z: 0
      }, {
        x: 0,
        z: 0
      }, {
        x: 0,
        z: -0.06
      }, {
        x: 0,
        z: -0.06
      }, {
        x: 0,
        z: -0.06
      }, {
        x: 0,
        z: -0.06
      }];
      SdVipDef.audio = {
        BG: "bgm",
        AWARD: "award",
        ADDBET: "addBet",
        RESULT: "result",
        WIN: "win",
        CHANGEBET: "changeBet",
        CANCEL: "cancel",
        WARNING: "warning",
        SHAKE: "shake"
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdVipGame", ['./SdVipDef.ts', './SdVipHallPath.ts', './SdVipHistory.ts', './SdVipHistoryItem.ts', './SdVipLookAround.ts', './SdVipProxy.ts', './SdVipScene.ts', './SdVipView.ts', './first-person-camera4.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SdVipHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ContentEx.ts', './SdVipProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Label, UIOpacity, UITransform, Sprite, isValid, Tween, tween, v3, v2, Component, ContentEx, SdVipProxy, SdVipGameEvent, ProxyMgr;
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
      Label = module.Label;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      isValid = module.isValid;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      ContentEx = module.default;
    }, function (module) {
      SdVipProxy = module.default;
      SdVipGameEvent = module.SdVipGameEvent;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "2409dmwCxpAe4F873ysNBI7", "SdVipHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_COL = 13;
      var MAX_ROW = 5;
      var SdVipHallPath = exports('default', (_dec = ccclass("SdVipHallPath"), _dec2 = menu("game/SdVipGame/SdVipHallPath"), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipHallPath, _Component);
        function SdVipHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_path", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor4, _assertThisInitialized(_this));
          _this._curData = void 0;
          // 路单显示节点按绘制顺序复用，最多 MAX_COL * MAX_ROW 个；始终挂在 node_path 下随其销毁。
          _this.pathItems = [];
          // 当前带脉冲动画的末尾节点；重绘前必须先停掉，否则 repeatForever 会一直占用 Tween 系统。
          _this.pulseItem = null;
          return _this;
        }
        var _proto = SdVipHallPath.prototype;
        _proto.createItem = function createItem(type) {
          var node = new Node();
          node.addComponent(UIOpacity);
          node.addComponent(UITransform);
          var sprite = node.addComponent(Sprite);
          sprite.spriteFrame = this.balls[type];
          return node;
        };
        _proto.onEnable = function onEnable() {
          SdVipProxy.on(SdVipGameEvent.RESULT, this.updatePath, this);
          SdVipProxy.on(SdVipGameEvent.HISTORY, this.updatePath, this);
        };
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.updatePath = function updatePath() {
          // this._curData = (DxVipModel.instance.gameRecord && DxVipModel.instance.gameRecord.slice()) || [];
          // if (this._curData.length > 100) {
          //     this._curData = this._curData.slice(0, 100);
          // }

          this._curData = SdVipProxy.history;
          this.drawPathLayer2();
        };
        _proto.onDisable = function onDisable() {
          // EventManager.instance.off(DxVipDef.eEvent.onUpdatePath, this.updatePath, this);
        };
        _proto.drawPathLayer2 = function drawPathLayer2() {
          var data = this._curData;
          if (isValid(this.pulseItem)) {
            Tween.stopAllByTarget(this.pulseItem);
            this.pulseItem.setScale(1, 1, 1);
          }
          this.pulseItem = null;
          var used = 0;
          var redata = data.slice().reverse();
          var row = 0;
          var col = 0;
          var tempNum = -1;
          var list = [];
          for (var i = 0; i < redata.length; i++) {
            var _result = redata[i].Dices[0] + redata[i].Dices[1] + redata[i].Dices[2] + redata[i].Dices[3];
            var item = {
              result: _result
            };
            item["index"] = _result % 2;
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
            list[col].push(item);
            tempNum = _result % 2;
          }
          var start = list.length - MAX_COL;
          if (start < 0) {
            start = 0;
          }
          var result = list.slice(start, list.length);
          var count1 = 0;
          var count2 = 0;
          var lastItem = null;
          for (var _i = 0; _i < result.length; _i++) {
            var _list = result[_i];
            for (var j = 0; j < _list.length; j++) {
              var _item = _list[j];
              var resultItem = this.pathItems[used];
              if (isValid(resultItem)) {
                resultItem.getComponent(Sprite).spriteFrame = this.balls[_item.index];
                resultItem.active = true;
              } else {
                resultItem = this.createItem(_item.index);
                this.node_path.addChild(resultItem);
                this.pathItems[used] = resultItem;
              }
              used++;
              if (_item.index == 0) {
                count1++;
              } else {
                count2++;
              }

              // itemL.getChildByName("num").getComponent(cc.Label).string = item.result + "";
              var pos = this.getPositionByRowCol(j, _i, this.node_path);
              //     itemL.getPosition().x = this.getPositionByRowCol(row, col, pathlist).x;
              //     itemL.getPosition().y = this.getPositionByRowCol(row, col, pathlist).y;
              resultItem.setPosition(pos.x, pos.y);
              lastItem = resultItem;
            }
          }

          // 历史变短或清空时隐藏多余节点，保留以便下次复用。
          for (var _i2 = used; _i2 < this.pathItems.length; _i2++) {
            if (isValid(this.pathItems[_i2])) this.pathItems[_i2].active = false;
          }
          if (lastItem) {
            this.pulseItem = lastItem;
            tween(lastItem).to(0.5, {
              scale: v3(0.8, 0.8, 1)
            }).to(0.5, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start();
          }
          this.txt_title1.string = "" + count1;
          this.txt_title2.string = "" + count2;
          var comp = this.node_path.getComponent(ContentEx);
          if (comp) {
            comp.reload();
            comp.organize();
          }
        };
        _proto.getPositionByRowCol = function getPositionByRowCol(row, col, itemBg) {
          var width = itemBg.getComponent(UITransform).width;
          var hight = itemBg.getComponent(UITransform).height;
          var perw = width / MAX_COL;
          var perh = hight / MAX_ROW;
          var x = perw / 2 + col * perw;
          var y = perh / 2 + (MAX_ROW - row - 1) * perh;
          return {
            x: x,
            y: y
          };
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
        return SdVipHallPath;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_path", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "balls", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec6], {
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

System.register("chunks:///_virtual/SdVipHistory.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './SdVipHistoryItem.ts', './SdVipProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, SpriteFrame, Label, ScrollView, Node, Prefab, UIOpacity, UITransform, Sprite, instantiate, Component, ProxyMgr, SdVipHistoryItem, SdVipProxy, SdVipGameEvent;
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
      SdVipHistoryItem = module.default;
    }, function (module) {
      SdVipProxy = module.default;
      SdVipGameEvent = module.SdVipGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "224f3K5PjpEa4PWzK+o4oiB", "SdVipHistory", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var MAX_ROW = 5;
      var SdVipHistory = exports('default', (_dec = ccclass("SdVipHistory"), _dec2 = menu("game/SdVipGame/SdVipHistory"), _dec3 = property(SpriteFrame), _dec4 = property(Label), _dec5 = property(ScrollView), _dec6 = property(ScrollView), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipHistory, _Component);
        function SdVipHistory() {
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
        var _proto = SdVipHistory.prototype;
        _proto.onLoad = function onLoad() {
          SdVipProxy.on(SdVipGameEvent.RESULT, this.onUpdate, this);
          SdVipProxy.on(SdVipGameEvent.HISTORY, this.onUpdate, this);
          SdVipProxy.on(SdVipGameEvent.CLICK_HIS_ITEM, this.onClickItem, this);
        };
        _proto.start = function start() {
          var data = SdVipProxy.history;
          this.setData(data, true);
          if (data.length > 0) SdVipProxy.emit(SdVipGameEvent.CLICK_HIS_ITEM, data.length - 1);
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
          var data = SdVipProxy.history;
          this.setData(data, false);
        }

        // removeAllChildren 只摘除不销毁，条目及其在 SdVipProxy 上的监听会一直存活；
        // 先摘除再销毁，避免帧末销毁前旧条目仍参与 Layout 排版。
        ;

        _proto.clearContent = function clearContent(content) {
          for (var _iterator = _createForOfIteratorHelperLoose(content.children.slice()), _step; !(_step = _iterator()).done;) {
            var child = _step.value;
            child.removeFromParent();
            child.destroy();
          }
        };
        _proto.updatePath1 = function updatePath1(data) {
          this.clearContent(this.scroll_ds.content);
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
          this.clearContent(this.scroll_his.content);
          for (var i = 0; i < data.length; i++) {
            var item = instantiate(this.prefab_his);
            this.scroll_his.content.addChild(item);
            item.getComponent(SdVipHistoryItem).setData(data[i], i);
          }
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        _proto.checkBtnShow = function checkBtnShow() {};
        return SdVipHistory;
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

System.register("chunks:///_virtual/SdVipHistoryItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ProxyMgr.ts', './SdVipProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Sprite, SpriteFrame, Component, ProxyMgr, SdVipProxy, SdVipGameEvent;
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
      SdVipProxy = module.default;
      SdVipGameEvent = module.SdVipGameEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "773372pg2dAgKj0q4XM/vnR", "SdVipHistoryItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var SdVipHistoryItem = exports('default', (_dec = ccclass("SdVipHistoryItem"), _dec2 = menu("game/SdVipGame/SdVipHistoryItem"), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipHistoryItem, _Component);
        function SdVipHistoryItem() {
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
        var _proto = SdVipHistoryItem.prototype;
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node_light.active = false;
          SdVipProxy.on(SdVipGameEvent.CLICK_HIS_ITEM, function (index) {
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
          SdVipProxy.emit(SdVipGameEvent.CLICK_HIS_ITEM, this._index);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return SdVipHistoryItem;
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

System.register("chunks:///_virtual/SdVipLookAround.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SdVipProxy.ts', './ProxyMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, math, _decorator, Vec2, Vec3, v3, Component, SdVipProxy, SdVipGameEvent, SdVipGameState, ProxyMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      SdVipProxy = module.default;
      SdVipGameEvent = module.SdVipGameEvent;
      SdVipGameState = module.SdVipGameState;
    }, function (module) {
      ProxyMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "80743hSy39OjrB8qHWrtzXQ", "SdVipLookAround", undefined);
      var Quat = math.Quat;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var v2_1 = new Vec2();
      var v2_2 = new Vec2();
      var v3_1 = new Vec3();
      var qt_1 = new Quat();
      var SdVipLookAround = exports('default', (_dec = ccclass("SdVipLookAround"), _dec2 = menu("game/SdVipGame/SdVipLookAround"), _dec3 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipLookAround, _Component);
        function SdVipLookAround() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "moveSpeed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeedShiftScale", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "damp", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rotateSpeed", _descriptor4, _assertThisInitialized(_this));
          _this._euler = new Vec3();
          _this._velocity = new Vec3();
          _this._position = new Vec3();
          _this._speedScale = 1;
          // 圆心
          _this.circleCenter = v3(0, 1.355, -0.532);
          // 半径
          _this.circleRadius = 5;
          // 速度
          _this.speed = 10;
          // 弧度
          _this.radian = 0;
          _this._state = void 0;
          /**
           *
           */
          _this.direction = 0;
          _this.zRotation = 1;
          _this.deltaZ = 1;
          _this.lastZ = 0;
          return _this;
        }
        var _proto = SdVipLookAround.prototype;
        _proto.onLoad = function onLoad() {
          this.initEvent();
          this.around();
        };
        _proto.initEvent = function initEvent() {
          SdVipProxy.on(SdVipGameEvent.CHANGE_STATE, this.changeState, this);
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
        };
        _proto.update = function update(dt) {
          if (this._state == SdVipGameState.LOOK) {
            if (this.node.position.y < 2.8) {
              this.direction = 1;
            } else if (this.node.position.y > 3.2) {
              this.direction = 0;
            }
            if (this.node.position.z < 2.6 && this.deltaZ < 0) {
              this.zRotation *= -1;
            }
            this.around();
            if (this.direction == 1) {
              this.goUp();
            }
            this.circleMove(dt);
          }
        };
        _proto.goUp = function goUp() {
          var delta = -0.05;
          Vec3.transformQuat(v3_1, Vec3.UNIT_Z, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this.node.position, v3_1, delta);
        };
        _proto.around = function around() {
          // LOOK 状态下每帧调用，复用已有向量。
          this._velocity.set(0.01 * this.zRotation, 0, 0);
        };
        _proto.circleMove = function circleMove(dt) {
          var t = Math.min(dt / this.damp, 1);
          // position
          Vec3.transformQuat(v3_1, this._velocity, this.node.rotation);
          Vec3.scaleAndAdd(this._position, this._position, v3_1, this.moveSpeed * this._speedScale);
          Vec3.lerp(v3_1, this.node.position, this._position, t);
          v3_1.normalize();
          Vec3.multiplyScalar(v3_1, v3_1, 5);
          this.node.setPosition(v3_1);
          // rotation
          Quat.fromEuler(qt_1, this._euler.x, this._euler.y, this._euler.z);
          Quat.slerp(qt_1, this.node.rotation, qt_1, t);
          this.node.setRotation(qt_1);
          this.node.lookAt(this.circleCenter, Vec3.UNIT_Y);
          this.deltaZ = this.node.position.z - this.lastZ;
          this.lastZ = this.node.position.z;
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return SdVipLookAround;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec3], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdVipProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "78a343iKBdJz7ywacqGWgNK", "SdVipProxy", undefined);
      var SdVipGameState = exports('SdVipGameState', /*#__PURE__*/function (SdVipGameState) {
        SdVipGameState[SdVipGameState["NORMAL"] = 0] = "NORMAL";
        SdVipGameState[SdVipGameState["START"] = 1] = "START";
        SdVipGameState[SdVipGameState["BET"] = 2] = "BET";
        SdVipGameState[SdVipGameState["RESULT"] = 3] = "RESULT";
        SdVipGameState[SdVipGameState["SHAKE"] = 4] = "SHAKE";
        SdVipGameState[SdVipGameState["SHAKE_START"] = 5] = "SHAKE_START";
        SdVipGameState[SdVipGameState["LOOK"] = 6] = "LOOK";
        SdVipGameState[SdVipGameState["CLEAR"] = 7] = "CLEAR";
        SdVipGameState[SdVipGameState["LOOK_BACK"] = 8] = "LOOK_BACK";
        return SdVipGameState;
      }({}));
      var SdVipGameEvent = exports('SdVipGameEvent', /*#__PURE__*/function (SdVipGameEvent) {
        SdVipGameEvent["TOUCH"] = "UItouch";
        SdVipGameEvent["HISTORY"] = "history";
        SdVipGameEvent["RESULT"] = "result";
        SdVipGameEvent["SHAKE"] = "shake";
        SdVipGameEvent["CHANGE_STATE"] = "changeState";
        SdVipGameEvent["BET_LAST"] = "betLast";
        SdVipGameEvent["BET_REVERT"] = "betRevert";
        SdVipGameEvent["CLICK_HIS_ITEM"] = "clickHisItem";
        SdVipGameEvent["ADD_BET"] = "addBet";
        SdVipGameEvent["CHANGE_TO_BET"] = "changeToBet";
        return SdVipGameEvent;
      }({}));

      /**
       * 色蝶数据代理
       */
      var SdVipProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(SdVipProxyMgr, _ProxyBase);
        function SdVipProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "SdVipGame";
          /** 进房拉取及本地保留的历史条数上限。 */
          _this.HISTORY_SIZE = 100;
          _this.history = [];
          _this.result = void 0;
          _this.lastBets = [];
          _this.nowBets = [];
          /** 已提交且本局尚未收尾；期间 nowBets 即提交快照，不允许加注、撤销或再次提交。 */
          _this.betWaiting = false;
          /** 本地等待已结束但服务端是否受理未知；保持锁定直到离开房间。 */
          _this.betUnknown = false;
          _this.betAttempt = 0;
          _this.cancelBetRequest = null;
          _this.owner = void 0;
          _this.wsEvents = [ConfigManager.instance.ProtocolSdVip.bet, ConfigManager.instance.ProtocolSdVip.history, ConfigManager.instance.ProtocolSdVip.info];
          return _this;
        }
        var _proto = SdVipProxyMgr.prototype;
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
          // 退出房间（resetBet）或换会话后，旧请求的任何回调都不得再改动状态。
          var current = function current() {
            return attempt === _this2.betAttempt && session === net.hallSession();
          };
          var answered = false;
          var unknown = function unknown() {
            if (!current() || !_this2.betWaiting || _this2.betUnknown) return;
            _this2.cancelBetRequest = null;
            _this2.betUnknown = true;
            Common.showTip(i18n.lang.betResultUnknown);
          };
          try {
            var cancel = net.sendOnlineData(ConfigManager.instance.ProtocolSdVip.bet, {
              betMsg: JSON.stringify(this.nowBets)
            }, function (response) {
              // 回复始终由本次调用消费（返回 false），不再走广播，避免重复开奖。
              if (answered || !current() || !_this2.betWaiting || _this2.betUnknown) return false;
              answered = true;
              _this2.cancelBetRequest = null;
              if (!response || response.Code == 302 || response.Code == 401) {
                unknown();
                return false;
              }
              if (response.Code && response.Code != 0) {
                _this2.betWaiting = false;
                Common.showTip(i18n.errTip(response.Code));
                // 通知界面按未提交状态刷新（恢复开始按钮提示动画）。
                _this2.emit(SdVipGameEvent.ADD_BET);
                return false;
              }
              var result = response.Data;
              // 只校验开奖动画依赖的 4 枚 0/1 结果；Reward 的线上类型没有协议声明可依据，
              // 这里不做严格校验，避免把合法结果误判为未知而锁死。
              if (!result || !Array.isArray(result.Dices) || result.Dices.length !== 4 || !result.Dices.every(function (dice) {
                return dice == 0 || dice == 1;
              })) {
                unknown();
                return false;
              }
              // 等待锁保留到 SdVipScene.clearBet，本局动画期间仍不可编辑筹码。
              _this2.result = result;
              _this2.history.unshift(result);
              // 与进房请求的条数一致，避免长时间游戏后历史弹窗条目无限增长。
              if (_this2.history.length > _this2.HISTORY_SIZE) _this2.history.length = _this2.HISTORY_SIZE;
              _this2.emit(SdVipGameEvent.SHAKE);
              return false;
            }, unknown);
            if (current() && this.betWaiting && !this.betUnknown) {
              this.cancelBetRequest = cancel || null;
            } else if (cancel) {
              cancel();
            }
          } catch (_) {
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
        };
        /**
         * 进房时调用。history、lastBets、result 挂在模块单例上，退出房间后仍然保留；
         * 同一账号重进时沿用（可立即显示路单和“重复上局”），账号或平台变化时必须丢弃。
         */
        _proto.enterRoom = function enterRoom() {
          var owner = NetManager.instance.hallOwner();
          if (this.owner === owner) return;
          this.owner = owner;
          this.history = [];
          this.lastBets = [];
          this.result = null;
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
        _proto.initRecv = function initRecv() {};
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code));
            if (data.Code == 30044) {
              this.emit(SdVipGameEvent.CHANGE_STATE, SdVipGameState.BET);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.instance.ProtocolSdVip.bet:
              {
                this.result = data.Data;
                this.history.unshift(data.Data);
                this.emit(SdVipGameEvent.SHAKE);
                break;
              }
            case ConfigManager.instance.ProtocolSdVip.history:
              {
                this.history = data.Data.history || [];
                this.emit(SdVipGameEvent.HISTORY);
                break;
              }
          }
        };
        _createClass(SdVipProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return SdVipProxyMgr;
      }(ProxyBase);
      var SdVipProxy = exports('default', new SdVipProxyMgr("SdVipProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SdVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SdVipDef.ts', './GUtil.ts', './SdVipProxy.ts', './ProxyMgr.ts', './NetManager.ts', './ConfigManager.ts', './ViewManager.ts', './EventManager.ts', './Common.ts', './I18n.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Camera, Prefab, RigidBody, Animation, Vec3, view, instantiate, tween, v2, v3, Tween, ParticleUtils, rect, Component, ERigidBodyType, PointToPointConstraint, SdVipDef, GUtil, SdVipProxy, SdVipGameState, SdVipGameEvent, ProxyMgr, NetManager, ConfigManager, ViewManager, EventManager, Common, i18n, DataManager, UserKey;
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
      RigidBody = module.RigidBody;
      Animation = module.Animation;
      Vec3 = module.Vec3;
      view = module.view;
      instantiate = module.instantiate;
      tween = module.tween;
      v2 = module.v2;
      v3 = module.v3;
      Tween = module.Tween;
      ParticleUtils = module.ParticleUtils;
      rect = module.rect;
      Component = module.Component;
      ERigidBodyType = module.ERigidBodyType;
      PointToPointConstraint = module.PointToPointConstraint;
    }, function (module) {
      SdVipDef = module.SdVipDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      SdVipProxy = module.default;
      SdVipGameState = module.SdVipGameState;
      SdVipGameEvent = module.SdVipGameEvent;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "0a05cpwOvBKWZ6OWQY2IZFq", "SdVipScene", undefined);
      var Quat = math.Quat;
      var MOVETIME = 120;
      // 每个下注区最多渲染的筹码数。堆叠高度到第 22 层封顶，之后的筹码原本全部叠在同一位置、
      // 互相遮挡却各占一次 draw call；超出后只替换顶层节点，注单仍逐笔记录。
      var CHIP_STACK_LIMIT = 22;
      // 收筹码时相邻两个筹码的起飞间隔上限，以及首末两个筹码起飞时刻的最大跨度。
      // clearBet 在结果展示后 3.5 秒执行，4 秒回到下注阶段；单个筹码飞行 0.3 秒，
      // 因此跨度不能超过 0.2 秒，否则上一局的筹码会在新一局下注时仍在桌面上飞。
      var CHIP_COLLECT_STAGGER = 0.05;
      var CHIP_COLLECT_SPREAD = 0.2;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var SdVipScene = exports('default', (_dec = ccclass("SdVipScene"), _dec2 = menu("game/SdVipGame/SdVipScene"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Camera), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(RigidBody), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Animation), _dec14 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipScene, _Component);
        function SdVipScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_lights", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chips", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameView", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dices", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipParent", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_chipOut", _descriptor8, _assertThisInitialized(_this));
          _this._posLights = [];
          _this._posChips = [];
          _initializerDefineProperty(_this, "highLights", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wan", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wanAni", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniResults", _descriptor12, _assertThisInitialized(_this));
          _this._selectChipIndex = -1;
          _this._state = void 0;
          _this.chipList = [[], [], [], [], [], []];
          _this._noBetTime = 0;
          _this._hasOutDices = [false, false, false, false];
          _this._dicePos = new Vec3();
          return _this;
        }
        var _proto = SdVipScene.prototype;
        _proto.onLoad = function onLoad() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.highLights), _step; !(_step = _iterator()).done;) {
            var i = _step.value;
            i.active = false;
          }
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.node_lights), _step2; !(_step2 = _iterator2()).done;) {
            var _i = _step2.value;
            _i.active = false;
          }
          SdVipProxy.enterRoom();
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolSdVip.history, {
            size: SdVipProxy.HISTORY_SIZE
          });
          NetManager.instance.sendOnlineData(ConfigManager.instance.ProtocolSdVip.info, {});
          this.initEvent();
          this.changeGameState(SdVipGameState.START);
          SdVipDef.palyMusic(SdVipDef.audio.BG);
          this.selectChip(0);
          this.wanAni.node.active = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.aniResults), _step3; !(_step3 = _iterator3()).done;) {
            var _i2 = _step3.value;
            this.light(_i2);
          }
        };
        _proto.initEvent = function initEvent() {
          SdVipProxy.on(SdVipGameEvent.TOUCH, this.checkClick, this);
          SdVipProxy.on(SdVipGameEvent.SHAKE, this.shake, this);
          SdVipProxy.on(SdVipGameEvent.BET_LAST, this.betLast, this);
          SdVipProxy.on(SdVipGameEvent.BET_REVERT, this.betRevert, this);
          SdVipProxy.on(SdVipGameEvent.CHANGE_TO_BET, this.changeToBet, this);
        };
        _proto.onEnable = function onEnable() {
          SdVipProxy.registSocketEvent();
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.on("canvas-resize", this.onResize, this);
        }

        // 点击区域由相机当前位姿换算，只有相机停在下注位姿时结果才有效。
        // 摇碗、开奖或巡视期间收到 canvas-resize 会算出错位的区域，
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
              var pos = _this2.mainCamera.convertToUINode(i.worldPosition, _this2.game);
              pos.x += win.width / 2;
              pos.y += win.height / 2;
              _this2._posLights.push(pos);
            }
            for (var _iterator5 = _createForOfIteratorHelperLoose(_this2.node_chips), _step5; !(_step5 = _iterator5()).done;) {
              var _i3 = _step5.value;
              var _pos = _this2.mainCamera.convertToUINode(_i3.worldPosition, _this2.game);
              _pos.x += win.width / 2;
              _pos.y += win.height / 2;
              _this2._posChips.push(_pos);
            }
          });
        };
        _proto.onDisable = function onDisable() {
          SdVipProxy.removeSocketEvent();
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          view.off("canvas-resize", this.onResize, this);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          SdVipProxy.resetBet();
        };
        _proto.start = function start() {
          var _this3 = this;
          var node = instantiate(this.gameView);
          this.game.addChild(node);
          this.mainCamera.node.position = SdVipDef.cameraInfo.start.position.clone();
          this.mainCamera.node.eulerAngles = SdVipDef.cameraInfo.start.rotation.clone();
          tween(this.mainCamera.node).delay(0.2).to(2, {
            position: SdVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: SdVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this3.onResize();
            _this3.changeGameState(SdVipGameState.BET);
          }).start();
        };
        _proto.getDistance = function getDistance(startPos, endPos) {
          var diff_x = startPos.x - endPos.x;
          var diff_z = startPos.z - endPos.z;
          var distance = Math.pow(diff_x * diff_x + diff_z * diff_z, 0.5);
          return distance;
        };
        _proto.checkDistance = function checkDistance() {
          var disArr = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
          for (var i = 0; i < disArr.length; i++) {
            var dice1 = this.dices[disArr[i][0]].node;
            var dice2 = this.dices[disArr[i][1]].node;
            if (this.getDistance(dice1.position, dice2.position) < 0.075) {
              // let z1 = dice1.position.z + 0.532;
              // let z2 = dice2.position.z + 0.532;
              // let y = 1.46;

              // if (z1 < 0 && z2 < 0) {
              //     if (z1 < z2 && z1 - 0.04 > -0.1) {
              //         dice1.setPosition(dice1.position.x, y, dice1.position.z - 0.04);
              //     } else if (z1 > z2 && z2 - 0.04 > -0.1) {
              //         dice2.setPosition(dice2.position.x, y, dice2.position.z - 0.04);
              //     } else {
              //         let x1 = dice1.position.x;
              //         let x2 = dice2.position.x;

              //         if (x1 < x2 && x1 - 0.04 > -0.1) {
              //             dice1.setPosition(dice1.position.x - 0.04, y, dice1.position.z);
              //         } else if (x1 > x2 && x2 - 0.04 > -0.1) {
              //             dice2.setPosition(dice2.position.x - 0.04, y, dice2.position.z);
              //         } else {
              //             dice1.setPosition(dice1.position.x - 0.02, y, dice1.position.z);
              //             dice2.setPosition(dice2.position.x + 0.02, y, dice2.position.z);
              //         }
              //     }
              // } else {
              //     if (z1 < z2 && z2 + 0.04 < 0.1) {
              //         dice2.setPosition(dice2.position.x, y, dice2.position.z + 0.04);
              //     } else if (z1 > z2 && z1 + 0.04 < 0.1) {
              //         dice1.setPosition(dice1.position.x, y, dice1.position.z + 0.04);
              //     } else {
              //         let x1 = dice1.position.x;
              //         let x2 = dice2.position.x;

              //         if (x1 > x2 && x1 + 0.04 < 0.1) {
              //             dice1.setPosition(dice1.position.x + 0.04, y, dice1.position.z);
              //         } else if (x1 < x2 && x2 + 0.04 < 0.1) {
              //             dice2.setPosition(dice2.position.x + 0.04, y, dice2.position.z);
              //         } else {
              //             dice1.setPosition(dice1.position.x - 0.02, y, dice1.position.z);
              //             dice2.setPosition(dice2.position.x + 0.02, y, dice2.position.z);
              //         }
              //     }
              // }
              // console.log("getDistance", disArr[i][0], disArr[i][1], dice1.position, dice2.position);
              var dis1 = this.getDistance(dice1.position, this.wan.position);
              var dis2 = this.getDistance(dice2.position, this.wan.position);

              // 同心时 normalize(0) 不会产生位移，按硬币索引给出碗内的确定方向。
              if (dis1 < 0.000001 && dis2 < 0.000001) {
                var angle = disArr[i][0] * Math.PI / 2;
                dice1.setPosition(this.wan.position.x + Math.cos(angle) * 0.12, 1.45, this.wan.position.z + Math.sin(angle) * 0.12);
                return true;
              }
              var moveDis = Math.random() * 0.04 + 0.04;
              if (dis1 < dis2) {
                if (dis2 < 0.16) {
                  var pos = v2(dice2.position.x - this.wan.position.x, dice2.position.z - this.wan.position.z);
                  pos = pos.normalize();
                  pos = pos.multiplyScalar(dis2 + moveDis);
                  pos.add(v2(this.wan.position.x, this.wan.position.z));
                  dice2.setPosition(pos.x, 1.45, pos.y);
                } else {
                  var _pos2 = v2(dice1.position.x - this.wan.position.x, dice1.position.z - this.wan.position.z);
                  _pos2 = _pos2.normalize();
                  _pos2 = _pos2.multiplyScalar(dis1 - moveDis);
                  _pos2.add(v2(this.wan.position.x, this.wan.position.z));
                  dice1.setPosition(_pos2.x, 1.45, _pos2.y);
                }
              } else {
                if (dis1 < 0.16) {
                  var _pos3 = v2(dice1.position.x - this.wan.position.x, dice1.position.z - this.wan.position.z);
                  _pos3 = _pos3.normalize();
                  _pos3 = _pos3.multiplyScalar(dis1 + moveDis);
                  _pos3.add(v2(this.wan.position.x, this.wan.position.z));
                  dice1.setPosition(_pos3.x, 1.45, _pos3.y);
                } else {
                  var _pos4 = v2(dice2.position.x - this.wan.position.x, dice2.position.z - this.wan.position.z);
                  _pos4 = _pos4.normalize();
                  _pos4 = _pos4.multiplyScalar(dis2 - moveDis);
                  _pos4.add(v2(this.wan.position.x, this.wan.position.z));
                  dice2.setPosition(_pos4.x, 1.45, _pos4.y);
                }
              }

              // console.log("getDistance2", dice1.position, dice2.position);

              return true;
            }
          }
          return false;
        };
        _proto.separateDices = function separateDices() {
          // 随机径向修正不保证收敛；预算耗尽后仅回退展示位置，不改服务端结果及翻面方向。
          for (var attempt = 0; attempt < 64; attempt++) {
            if (!this.checkDistance()) return;
          }
          for (var i = 0; i < this.dices.length; i++) {
            // 四角最小间距 0.12，大于重叠阈值 0.075，且仍在碗内。
            this.dices[i].node.setPosition(this.wan.position.x + (i % 2 ? 0.06 : -0.06), 1.45, this.wan.position.z + (i < 2 ? -0.06 : 0.06));
          }
        };
        _proto.shakeStart = function shakeStart() {
          var _this4 = this;
          this.changeGameState(SdVipGameState.SHAKE_START);
          for (var _iterator6 = _createForOfIteratorHelperLoose(this.dices), _step6; !(_step6 = _iterator6()).done;) {
            var i = _step6.value;
            if (this.getDistance(this.wan.position, i.node.position) > 0.25) {
              i.node.setPosition(0, i.node.position.y, -0.533);
            }
            i.wakeUp();
            i.applyForce(v3(0, 20, 0));
            i.angularDamping = 0.5;

            // i.node.setPosition(i.node.position.x, 1.37, i.node.position.z);
          }

          this.wan.active = true;
          this.wan.setPosition(this.wan.position.x, 1.355, this.wan.position.z);
          var pos = this.wan.position.clone();
          this.wanAni.node.active = true;
          this.wanAni.play();
          tween(this.wan).call(function () {
            SdVipDef.palyAudio(SdVipDef.audio.SHAKE);
          }).to(0.05, {
            position: v3(this.wan.position.x, pos.y + 0.08, this.wan.position.z)
          }).to(0.03, {
            position: v3(this.wan.position.x, pos.y, this.wan.position.z)
          }).union().repeat(20).call(function () {
            // this.wan.active = false;

            // this.wanAni.stop();

            _this4.wan.setPosition(_this4.wan.position.x, 1.32, _this4.wan.position.z);
            _this4.separateDices();
            var _loop = function _loop(i) {
              var rate = 1;
              if (SdVipProxy.result.Dices[i] == 1) {
                rate = -1;
              }
              var node = new Node();
              var body = node.addComponent(RigidBody);
              body.type = ERigidBodyType.STATIC;
              var position = _this4.dices[i].node.position.clone();
              // position.y += 0.02;
              if (position.y < 1.45) {
                position.y = 1.45;
              }
              node.position = position;
              node.parent = _this4.dices[i].node.parent;
              var point = _this4.dices[i].node.addComponent(PointToPointConstraint);
              point.connectedBody = node.getComponent(RigidBody);
              point.enableCollision = false;
              point.pivotA = v3(0, 0, 0.037 * rate);

              // this._pointList.push(node);
              _this4.dices[i].clearState();
              var angle = _this4.dices[i].node.eulerAngles.clone();
              angle.x = -90 * rate;
              if (angle.z > 30) {
                angle.z = 30;
                _this4.dices[i].setAngularVelocity(v3(0, 0, 0));
              } else if (angle.z < -30) {
                angle.z = -30;
                _this4.dices[i].setAngularVelocity(v3(0, 0, 0));
              }
              _this4.dices[i].node.eulerAngles = angle;
              var aniTime = 0.12;
              tween(node).delay(0.02).to(aniTime, {
                position: v3(node.position.x, 1.4, node.position.z)
              }).call(function () {
                point.destroy();
                node.removeFromParent();
                node.destroy();
              }).start();
              tween(_this4.dices[i].node).delay(aniTime - 0.1).to(0.1 + 0.02, {
                eulerAngles: angle
              }).call(function () {
                _this4.dices[i].clearState();
              }).start();
            };
            for (var i = 0; i < _this4.dices.length; i++) {
              _loop(i);
            }
            _this4.scheduleOnce(_this4.shakeEnd, 0.2);
          }).to(0.2, {
            position: v3(this.wan.position.x, 1.355, this.wan.position.z)
          }).start();
        };
        _proto.shake = function shake() {
          var _this5 = this;
          this.changeGameState(SdVipGameState.SHAKE);
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: SdVipDef.cameraInfo.openNear.position.clone(),
            eulerAngles: SdVipDef.cameraInfo.openNear.rotation.clone()
          }).call(function () {
            _this5.shakeStart();
          }).start();
        };
        _proto.shakeEnd = function shakeEnd() {
          var _this6 = this;
          tween(this.mainCamera.node).to(1, {
            position: SdVipDef.cameraInfo.open.position.clone(),
            eulerAngles: SdVipDef.cameraInfo.open.rotation.clone()
          }).call(function () {
            // this.shakeStart();
            _this6.showResult();
          }).start();
        };
        _proto.blink = function blink(node) {
          node.active = true;
          var ani = node.parent.getComponent(Animation);
          ani.play();
        };
        _proto.light = function light(node, show) {
          if (show === void 0) {
            show = false;
          }
          if (show) {
            node.active = true;
            ParticleUtils.play(node);
          } else {
            node.active = false;
            ParticleUtils.stop(node);
          }
        };
        _proto.showResult = function showResult() {
          var _this7 = this;
          this.changeGameState(SdVipGameState.RESULT);
          var num = 0;
          for (var _iterator7 = _createForOfIteratorHelperLoose(SdVipProxy.result.Dices), _step7; !(_step7 = _iterator7()).done;) {
            var i = _step7.value;
            num += i;
          }
          if (num == 0) {
            // this.node_lights[1].active = true;
            // this.node_lights[2].active = true;
            this.blink(this.node_lights[1]);
            this.blink(this.node_lights[2]);
            this.light(this.aniResults[1], true);
            this.light(this.aniResults[2], true);
          } else if (num == 1) {
            // this.node_lights[0].active = true;
            // this.node_lights[4].active = true;
            this.blink(this.node_lights[0]);
            this.blink(this.node_lights[4]);
            this.light(this.aniResults[0], true);
            this.light(this.aniResults[4], true);
          } else if (num == 2) {
            // this.node_lights[1].active = true;
            this.blink(this.node_lights[1]);
            this.light(this.aniResults[1], true);
          } else if (num == 3) {
            // this.node_lights[0].active = true;
            // this.node_lights[5].active = true;
            this.blink(this.node_lights[0]);
            this.blink(this.node_lights[5]);
            this.light(this.aniResults[0], true);
            this.light(this.aniResults[5], true);
          } else {
            // this.node_lights[1].active = true;
            // this.node_lights[3].active = true;
            this.blink(this.node_lights[1]);
            this.blink(this.node_lights[3]);
            this.light(this.aniResults[1], true);
            this.light(this.aniResults[3], true);
          }

          // for (let i of this.chipList) {
          //     for (let child of i) {
          //         tween(child)
          //             // .bezierTo3(
          //             //     1,
          //             //     child.position,
          //             //     v3(child.position.x, 2, child.position.z),
          //             //     v3(this.node_chipOut.position.x, 2, this.node_chipOut.position.z),
          //             //     this.node_chipOut.position
          //             // )
          //             .to(1, { position: this.node_chipOut.position })
          //             .start();
          //     }
          // }

          this.scheduleOnce(function () {
            _this7.clearBet();
          }, 3.5);
          this.scheduleOnce(function () {
            _this7.clear();
          }, 3);
          SdVipProxy.emit(SdVipGameEvent.RESULT);
        };
        _proto.clearBet = function clearBet() {
          var _this8 = this;
          var count = 0;
          var total = 0;
          for (var _iterator8 = _createForOfIteratorHelperLoose(this.chipList), _step8; !(_step8 = _iterator8()).done;) {
            var list = _step8.value;
            for (var _iterator10 = _createForOfIteratorHelperLoose(list), _step10; !(_step10 = _iterator10()).done;) {
              var child = _step10.value;
              if (child.chip) total++;
            }
          }
          // 筹码少时保持原有的逐个起飞节奏，多时等比压缩到固定跨度内。
          var stagger = total > 1 ? Math.min(CHIP_COLLECT_STAGGER, CHIP_COLLECT_SPREAD / (total - 1)) : 0;
          for (var _iterator9 = _createForOfIteratorHelperLoose(this.chipList), _step9; !(_step9 = _iterator9()).done;) {
            var _list = _step9.value;
            if (_list.length > 0) {
              var _loop2 = function _loop2() {
                var child = _list[i];
                var node = child.chip;
                // 超出显示上限的注单没有对应节点。
                if (!node) return 1; // continue
                var index = child.index;
                tween(node).delay(count * stagger).to(0.3, {
                  position: _this8.node_chips[index].position
                }).call(function () {
                  node.removeFromParent();
                  node.destroy();
                }).start();
                count++;
              };
              for (var i = _list.length - 1; i >= 0; i--) {
                if (_loop2()) continue;
              }
            }
            _list.length = 0;
          }
          SdVipProxy.lastBets = SdVipProxy.nowBets.slice();
          SdVipProxy.nowBets = [];
          SdVipProxy.finishBet();
        };
        _proto.clear = function clear() {
          var _this9 = this;
          this.changeGameState(SdVipGameState.CLEAR);
          this._noBetTime = 0;
          this._hasOutDices = [false, false, false, false];
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1, {
            position: SdVipDef.cameraInfo.bet.position.clone(),
            eulerAngles: SdVipDef.cameraInfo.bet.rotation.clone()
          }).call(function () {
            _this9.onResize();
            _this9.changeGameState(SdVipGameState.BET);
          }).start();
          for (var _iterator11 = _createForOfIteratorHelperLoose(this.node_lights), _step11; !(_step11 = _iterator11()).done;) {
            var i = _step11.value;
            Tween.stopAllByTarget(i);
            i.active = false;
          }
          for (var _iterator12 = _createForOfIteratorHelperLoose(this.aniResults), _step12; !(_step12 = _iterator12()).done;) {
            var _i4 = _step12.value;
            this.light(_i4);
          }
        };
        _proto.changeGameState = function changeGameState(state) {
          this._state = state;
          SdVipProxy.emit(SdVipGameEvent.CHANGE_STATE, this._state);
        };
        _proto.betLast = function betLast() {
          for (var _iterator13 = _createForOfIteratorHelperLoose(SdVipProxy.lastBets), _step13; !(_step13 = _iterator13()).done;) {
            var i = _step13.value;
            if (!this.checkBet(i.Pos)) {
              return;
            }
          }
          for (var _iterator14 = _createForOfIteratorHelperLoose(SdVipProxy.lastBets), _step14; !(_step14 = _iterator14()).done;) {
            var _i5 = _step14.value;
            var pos = _i5.Pos;
            var index = 0;
            var find = false;
            for (var j = 0; j < SdVipDef.chipNumbers.length; j++) {
              if (SdVipDef.chipNumbers[j] == _i5.Amount) {
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
          // 已提交的筹码即服务端注单快照，等待期间不可撤销。
          if (SdVipProxy.betWaiting) return;
          if (SdVipProxy.nowBets.length > 0) {
            // let info = SdVipProxy.nowBets.pop();
            SdVipProxy.nowBets.length = 0;
            for (var _iterator15 = _createForOfIteratorHelperLoose(this.chipList), _step15; !(_step15 = _iterator15()).done;) {
              var i = _step15.value;
              for (var _iterator16 = _createForOfIteratorHelperLoose(i), _step16; !(_step16 = _iterator16()).done;) {
                var child = _step16.value;
                var node = child.chip;
                if (!node) continue;
                node.removeFromParent();
                node.destroy();
              }
              i.length = 0;
            }
            SdVipProxy.emit(SdVipGameEvent.ADD_BET);
            SdVipDef.palyAudio(SdVipDef.audio.CANCEL);
          }
        };
        _proto.checkBet = function checkBet(position) {
          // if (this.chipList[position].length >= 20) {
          //     Common.showTip(i18n.t("diyFullTip", 20));
          //     return false;
          // }
          if (position == 1 && this.chipList[4].length > 0 && this.chipList[5].length > 0 || position == 4 && this.chipList[1].length > 0 && this.chipList[5].length > 0 || position == 5 && this.chipList[1].length > 0 && this.chipList[4].length > 0) {
            Common.showTip(i18n.errTip(30002));
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
          // 提交后冻结筹码：桌面、余额显示和“重复上局”必须与已提交注单一致。
          if (SdVipProxy.betWaiting) return;
          var allBet = 0;
          for (var _iterator17 = _createForOfIteratorHelperLoose(SdVipProxy.nowBets), _step17; !(_step17 = _iterator17()).done;) {
            var i = _step17.value;
            allBet += i.Amount;
          }
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          gold -= allBet;
          gold -= SdVipDef.chipNumbers[index];
          if (gold < 0) {
            Common.showTip(i18n.errTip("30003"));
            return;
          }
          this.node_lights[position].active = true;
          tween(this.node_lights[position]).delay(0.1).call(function () {
            _this10.node_lights[position].active = false;
          }).start();
          if (!this.checkBet(position)) {
            return;
          }
          var pos = this.node_lights[position].position.clone();
          pos.z += SdVipDef.position[position].z;
          var list = this.chipList[position];
          var chip = null;
          var len = Math.min(list.length, CHIP_STACK_LIMIT - 1);
          pos.y += len * 0.005;
          if (list.length >= CHIP_STACK_LIMIT) {
            // 同面额直接复用顶层；先清除旧记录的节点引用，保证撤销及收筹码只处理一次。
            var top = list[list.length - 1];
            if (top.chip) {
              if (top.index === index) {
                chip = top.chip;
                Tween.stopAllByTarget(chip);
                chip.position = this.node_chips[index].position;
              } else {
                top.chip.removeFromParent();
                top.chip.destroy();
              }
              top.chip = null;
            }
          }
          if (!chip) {
            chip = instantiate(this.node_chips[index]);
            this.chipParent.addChild(chip);
          }
          tween(chip).to(0.3, {
            position: pos
          }).start();
          this.chipList[position].push({
            chip: chip,
            index: index
          });
          SdVipProxy.nowBets.push({
            Pos: position,
            Amount: SdVipDef.chipNumbers[index]
          });
          SdVipProxy.emit(SdVipGameEvent.ADD_BET, {
            Pos: position,
            Amount: SdVipDef.chipNumbers[index]
          });
          SdVipDef.palyAudio(SdVipDef.audio.ADDBET);
        };
        _proto.changeToBet = function changeToBet() {
          var _this11 = this;
          if (this._state == SdVipGameState.LOOK) {
            this._noBetTime = 0;
            this.changeGameState(SdVipGameState.BET);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: SdVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: SdVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              // this.changeGameState(SdVipGameState.BET);
              _this11.onResize();
            }).start();
            return;
          }
        };
        _proto.checkClick = function checkClick(event) {
          var _this12 = this;
          this._noBetTime = 0;
          if (this._state == SdVipGameState.LOOK) {
            this._noBetTime = 0;
            // 先离开 LOOK：巡视脚本只在 LOOK 下驱动相机，否则会与回位动画同时写相机位置造成抖动。
            // 点击区域按下注位姿换算，相机到位前不能进入 BET，飞回途中的点击一律忽略。
            this.changeGameState(SdVipGameState.LOOK_BACK);
            Tween.stopAllByTarget(this.mainCamera.node);
            tween(this.mainCamera.node).to(1, {
              position: SdVipDef.cameraInfo.bet.position.clone(),
              eulerAngles: SdVipDef.cameraInfo.bet.rotation.clone()
            }).call(function () {
              _this12.onResize();
              _this12.changeGameState(SdVipGameState.BET);
            }).start();
            return;
          }
          if (this._state != SdVipGameState.BET) return;
          for (var i = 0; i < this._posLights.length; i++) {
            var size = SdVipDef.rects[i];
            var rect1 = rect(this._posLights[i].x - size.width / 2, this._posLights[i].y - size.height / 2, size.width, size.height);
            if (rect1.contains(event.getUILocation())) {
              // this.node_lights[i].active = true;
              // tween(this.node_lights[i])
              //     .delay(0.1)
              //     .call(() => {
              //         this.node_lights[i].active = false;
              //     })
              //     .start();
              // if (this._selectChipIndex >= 0) {
              //     let pos = this.node_lights[i].position.clone();
              //     pos.y += this.chipList[i].length * 0.015;
              //     let chip = instantiate(this.node_chips[this._selectChipIndex]);
              //     this.chipParent.addChild(chip);
              //     tween(chip).to(0.3, { position: pos }).start();
              //     this.chipList[i].push({ chip, index: this._selectChipIndex });
              //     SdVipProxy.nowBets.push({ Pos: i, Amount: SdVipDef.chipNumbers[this._selectChipIndex] });
              // }

              if (this._selectChipIndex >= 0) {
                this.addBet(i, this._selectChipIndex);
              } else {
                Common.showTip(i18n.lang.chipTip);
              }
            }
          }
          for (var _i6 = 0; _i6 < this._posChips.length; _i6++) {
            var dis = GUtil.GetDistance(this._posChips[_i6], event.getUILocation());
            if (dis < 50) {
              this.selectChip(_i6);
              // let position = this.node_chips[i].position.clone();
              // position.y += 0.02;
              // this.node_chips[i].position = position;

              SdVipDef.palyAudio(SdVipDef.audio.CHANGEBET);
            }
          }
        };
        _proto.selectChip = function selectChip(i) {
          this._selectChipIndex = i;
          var pos = this.node_chips[i].position.clone();
          for (var _iterator18 = _createForOfIteratorHelperLoose(this.highLights), _step18; !(_step18 = _iterator18()).done;) {
            var node = _step18.value;
            node.active = true;
            node.position = pos;
            pos.y += 0.05;
          }
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.update = function update(dt) {
          if (this._state == SdVipGameState.BET) {
            this._noBetTime += dt;
            if (this._noBetTime > MOVETIME) {
              this._noBetTime = 0;
              this.changeGameState(SdVipGameState.LOOK);
            }
          }

          // 每帧执行：复用同一个临时向量并用标量完成径向夹取，不在这里分配对象或打印日志。
          var wan = this.wan.position;
          var pos = this._dicePos;
          for (var i = 0; i < 4; i++) {
            var dice = this.dices[i];
            var needUpdate = false;
            var cur = dice.node.position;
            pos.set(cur);
            var dx = cur.x - wan.x;
            var dz = cur.z - wan.z;
            var dis = Math.sqrt(dx * dx + dz * dz);
            if (dis > 0.2) {
              var scale = 0.2 / dis;
              needUpdate = true;
              pos.x = wan.x + dx * scale;
              pos.z = wan.z + dz * scale;
              if (this._hasOutDices[i] && pos.y > 1.5) {
                pos.y = 1.5;
              }
              this._hasOutDices[i] = true;
            }
            if (pos.y < 1.373) {
              pos.y = 1.373;
              needUpdate = true;
            } else if (pos.y > 1.62) {
              pos.y = 1.62;
              needUpdate = true;
              if (this._hasOutDices[i]) {
                pos.y = 1.5;
              }
              this._hasOutDices[i] = true;
            }
            if (needUpdate) {
              // position 的 setter 会拷贝数值，可以安全地复用 pos。
              dice.node.position = pos;
            } else {
              this._hasOutDices[i] = false;
            }
          }

          // for (let i of this.dices) {
          //     let needUpdate = false;
          //     let pos = i.node.position.clone();
          //     let dis = this.getDistance(pos, this.wan.position);

          //     if (dis > 0.2) {
          //         let posN = v2(i.node.position.x - this.wan.position.x, i.node.position.z - this.wan.position.z);
          //         posN = posN.normalize();
          //         posN = posN.multiplyScalar(0.2);
          //         posN.add(v2(this.wan.position.x, this.wan.position.z));
          //         needUpdate = true;
          //         pos.x = posN.x;
          //         pos.z = posN.y;
          //         if (this._lastOutDice == i.node) {
          //             console.log("need fix dis");
          //             if (pos.y > 1.5) {
          //                 pos.y = 1.5;
          //             } else {
          //                 // pos.x = 0;
          //             }
          //         }
          //         this._lastOutDice = i.node;
          //     }
          //     if (pos.y < 1.373) {
          //         pos.y = 1.373;
          //         needUpdate = true;
          //     } else if (pos.y > 1.62) {
          //         pos.y = 1.62;
          //         needUpdate = true;
          //         this._lastOutDice = i.node;

          //         if (this._lastOutDice == i.node) {
          //             console.log("need fix y");
          //             pos.y = 1.5;
          //         }
          //     }

          //     if (needUpdate) {
          //         i.node.position = pos;
          //     } else {
          //         this._lastOutDice = null;
          //     }
          // }
        };

        return SdVipScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_lights", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_chips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gameView", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "dices", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "chipParent", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_chipOut", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wan", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "wanAni", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "aniResults", [_dec14], {
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

System.register("chunks:///_virtual/SdVipView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SdVipDef.ts', './SdVipProxy.ts', './Common.ts', './ViewManager.ts', './ProxyMgr.ts', './DataManager.ts', './GameRecordLayer.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, math, _decorator, Node, Label, SpriteFrame, Sprite, UIOpacity, tween, Tween, v3, ParticleUtils, instantiate, Component, SdVipDef, SdVipProxy, SdVipGameEvent, SdVipGameState, Common, ViewManager, ProxyMgr, DataManager, UserKey, GameRecordLayer, i18n;
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
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      v3 = module.v3;
      ParticleUtils = module.ParticleUtils;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      SdVipDef = module.SdVipDef;
    }, function (module) {
      SdVipProxy = module.default;
      SdVipGameEvent = module.SdVipGameEvent;
      SdVipGameState = module.SdVipGameState;
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20;
      cclegacy._RF.push({}, "19a3c/O+6BFA7sKs5hBL7/s", "SdVipView", undefined);
      var Vec2 = math.Vec2,
        Vec3 = math.Vec3,
        Quat = math.Quat;
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var SdVipView = exports('default', (_dec = ccclass("SdVipView"), _dec2 = menu("game/SdVipGame/SdVipView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(SpriteFrame), _dec7 = property(Node), _dec8 = property(Sprite), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Label), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Label), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SdVipView, _Component);
        function SdVipView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "frame_balls", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_result", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprite_balls", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lose", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_score", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_score", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betInfo", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_bets", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bets", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_betTip", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_totalBet", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_totalBet", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_start", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_btns", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_gold", _descriptor20, _assertThisInitialized(_this));
          _this._state = void 0;
          return _this;
        }
        var _proto = SdVipView.prototype;
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
          this.node_gold.active = false;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.node_betTip.getComponent(UIOpacity).opacity = 0;
          tween(this.node_betTip.getComponent(UIOpacity)).delay(2.2).to(0.2, {
            opacity: 255
          }).call(function () {
            SdVipDef.palyAudio(SdVipDef.audio.WARNING);
          }).delay(1).call(function () {
            _this2.node_betTip.active = false;
          }).start();
        };
        _proto.initEvent = function initEvent() {
          SdVipProxy.on(SdVipGameEvent.CHANGE_STATE, this.changeState, this);
          SdVipProxy.on(SdVipGameEvent.ADD_BET, this.addBet, this);
        };
        _proto.addBet = function addBet() {
          var betInfo = [0, 0, 0, 0, 0, 0];
          var allBet = 0;
          for (var _iterator2 = _createForOfIteratorHelperLoose(SdVipProxy.nowBets), _step2; !(_step2 = _iterator2()).done;) {
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
        };
        _proto.changeState = function changeState(state) {
          this._state = state;
          this.node_betInfo.active = false;
          this.node_totalBet.active = false;
          switch (state) {
            case SdVipGameState.SHAKE:
              {
                Tween.stopAllByTarget(this.node_btns);
                tween(this.node_btns).to(0.5, {
                  position: v3(this.node_btns.position.x, -740, this.node_btns.position.z)
                }).start();
                break;
              }
            case SdVipGameState.CLEAR:
              {
                Tween.stopAllByTarget(this.node_btns);
                tween(this.node_btns).to(0.5, {
                  position: v3(this.node_btns.position.x, -540, this.node_btns.position.z)
                }).start();
                break;
              }
            case SdVipGameState.RESULT:
              {
                this.showResult();
                break;
              }
            case SdVipGameState.BET:
              {
                this.node_result.active = false;
                this.node_betInfo.active = true;
                break;
              }
          }
        };
        _proto.showResult = function showResult() {
          SdVipDef.palyAudio(SdVipDef.audio.RESULT);
          this.node_result.active = true;
          for (var i = 0; i < 4; i++) {
            var frame = this.frame_balls[SdVipProxy.result.Dices[i]];
            this.sprite_balls[i].spriteFrame = frame;
          }
          this.txt_win.string = Common.ChangeMoneyFormat(SdVipProxy.result.Reward, 2);
          this.node_win.active = SdVipProxy.result.Reward > 0;
          this.node_lose.active = !(SdVipProxy.result.Reward > 0);
          this.node_score.active = SdVipProxy.result.Reward > 0;
          this.txt_score.string = Common.ChangeMoneyFormat(SdVipProxy.result.Reward, 2);
          if (SdVipProxy.result.Reward > 0) {
            this.node_gold.active = true;
            SdVipDef.palyAudio(SdVipDef.audio.WIN);
            ParticleUtils.play(this.node_gold);
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.node_bets), _step3; !(_step3 = _iterator3()).done;) {
            var _i2 = _step3.value;
            _i2.active = false;
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
          SdVipProxy.emit(SdVipGameEvent.TOUCH, event.touch);
        };
        _proto.touchCancel = function touchCancel(event) {};
        _proto.onClickExit = function onClickExit() {
          Common.returnToHall(this, SdVipProxy.BUNDLE);
        };
        _proto.onClickRecord = function onClickRecord() {
          // GUtil.openRecord("sdVip", 8);

          Common.loadPopBuddle("prefab/SdVipRecord", SdVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            node.getComponent(GameRecordLayer).setGameType("sdVip", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          Common.loadPopBuddle("prefab/SdVipSetting", SdVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/SdVipHelp", SdVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.onClickHistory = function onClickHistory() {
          Common.loadPopBuddle("prefab/SdVipHistory", SdVipProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
          }, true);
        };
        _proto.checkState = function checkState() {
          if (this._state == SdVipGameState.LOOK) {
            SdVipProxy.emit(SdVipGameEvent.CHANGE_TO_BET);
            return true;
          }
          if (this._state != SdVipGameState.BET) return false;
          return true;
        };
        _proto.onClickStart = function onClickStart() {
          if (!this.checkState()) return;
          if (SdVipProxy.nowBets.length == 0) {
            Common.showTip(i18n.lang[10011]);
            return;
          }

          // 等待与失败收口统一由 SdVipProxy.submitBet 负责；这里不再改本地 _state，
          // 否则请求失败时没有任何状态事件能把它改回 BET。
          if (!SdVipProxy.submitBet()) return;
          Tween.stopAllByTarget(this.node_start);
        };
        _proto.onClickLastBet = function onClickLastBet() {
          if (!this.checkState()) return;
          SdVipProxy.emit(SdVipGameEvent.BET_LAST);
        };
        _proto.onClickBetRevert = function onClickBetRevert() {
          SdVipProxy.emit(SdVipGameEvent.BET_REVERT);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
        };
        return SdVipView;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "frame_balls", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_result", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprite_balls", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_win", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_lose", [_dec10], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_score", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "txt_score", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_betInfo", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_bets", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txt_bets", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_betTip", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_totalBet", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_totalBet", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "node_start", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "node_btns", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "node_gold", [_dec22], {
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
  r('virtual:///prerequisite-imports/SdVipGame', 'chunks:///_virtual/SdVipGame'); 
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