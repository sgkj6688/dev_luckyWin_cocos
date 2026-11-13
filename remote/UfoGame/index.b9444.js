System.register("chunks:///_virtual/UfoBall.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UfoDef.ts', './UfoModel.ts', './EventManager.ts', './UfoUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, color, Node, Label, v3, Collider, ParticleUtils, Animation, tween, MeshRenderer, RigidBody, Tween, isValid, Vec3, Component, eEvent, eSound, eConstDef, UfoModel, EventManager, UfoUtils;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      color = module.color;
      Node = module.Node;
      Label = module.Label;
      v3 = module.v3;
      Collider = module.Collider;
      ParticleUtils = module.ParticleUtils;
      Animation = module.Animation;
      tween = module.tween;
      MeshRenderer = module.MeshRenderer;
      RigidBody = module.RigidBody;
      Tween = module.Tween;
      isValid = module.isValid;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      UfoModel = module.UfoModel;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      UfoUtils = module.UfoUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "a927dkrFOxIwaJ3VZw1FUwk", "UfoBall", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 钉子被碰撞时的高亮颜色，下标为 ball - 1（绿/蓝/红）。
      var STEP_EMISSIVE = [color(0, 255, 0, 255), color(0, 190, 175, 255), color(255, 0, 0, 255)];
      var STEP_MAIN_COLOR = [color(150, 255, 150, 255), color(111, 111, 111, 255), color(255, 0, 0, 255)];
      var STEP_LIGHT_TAG = 0x55464f;
      var UfoBall = exports('UfoBall', (_dec = ccclass("UfoBall"), _dec2 = menu("game/UfoGame/UfoBall"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UfoBall, _Component);
        function UfoBall() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.prizeAmount = 0;
          _this.ballInfo = {
            ball: 0,
            floor: 0,
            oddNum: 0,
            prizeIdx: 0
          };
          _initializerDefineProperty(_this, "X_feidieww", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_boxRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _this.isNew = true;
          _this.isStay = false;
          _this.curFlooors = -1;
          return _this;
        }
        var _proto = UfoBall.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          this.node.position = v3(this.X_feidieww.position.x, this.node.position.y, this.node.position.z);
        };
        _proto.update = function update(deltaTime) {
          if (this.node.position.y < -1) {
            var totalW = eConstDef.disW * 9;
            var curDisW = totalW / (UfoModel.instance.curFloors + 1);
            var ballPosX = this.node.position.x + totalW / 2;
            var ballIndex = Math.floor(ballPosX / curDisW);
            if (ballIndex != this.ballInfo.prizeIdx) {
              gts.Debug.Log("==UfoBall===end=======ballIndex==" + ballIndex + "===this.ballInfo.prizeIdx==" + this.ballInfo.prizeIdx);
            }
            this.showResult();
            if (this.ballInfo.oddNum >= 10) {
              EventManager.instance.emit(eEvent.onBigWin, this.prizeAmount, true);
            } else if (this.ballInfo.oddNum > 1) {
              EventManager.instance.emit(eEvent.onBigWin, this.prizeAmount, false);
            }

            //更新金币--显示得分
            UfoModel.instance.curBalance += this.prizeAmount;
            UfoModel.instance.endBalance = 0;
            EventManager.instance.emit(eEvent.onUpdateGold, {
              ball: this.ballInfo.ball,
              prizeIdx: this.ballInfo.prizeIdx,
              prizeAmount: this.prizeAmount
            });
            UfoModel.instance.gameInfo.records.push({
              ball: this.ballInfo.ball,
              oddNum: this.ballInfo.oddNum
            });
            // 先出队再通知：界面据 betResult 是否为空决定能否恢复层数按钮。
            UfoModel.instance.betResult.pop();
            EventManager.instance.emit(eEvent.onUpdateRecord);
            this.node.destroyFromParent();
          }
        };
        _proto.onEnable = function onEnable() {
          this.node.getComponent(Collider).on("onTriggerEnter", this.onCollisionEnter, this);
          // this.node.getComponent(Collider).on("onTriggerStay", this.onCollisionStay, this);
          // this.node.getComponent(Collider).on("onTriggerExit", this.onCollisionExit, this);
        };

        _proto.onDisable = function onDisable() {
          this.node.getComponent(Collider).off("onTriggerEnter", this.onCollisionEnter, this);
          // this.node.getComponent(Collider).off("onTriggerStay", this.onCollisionStay, this);
          // this.node.getComponent(Collider).off("onTriggerExit", this.onCollisionExit, this);
        };

        _proto.showResult = function showResult() {
          var X_hezi = this.Node_boxRoot.getChildByName("X_hezi_" + this.ballInfo.prizeIdx);
          var arrStrName = ["X_lvse", "X_lanse", "X_hongse"];
          var arrWinName = ["small", "middle", "big"];
          var index = 0;
          if (this.ballInfo.prizeIdx == 0 || this.ballInfo.prizeIdx == this.Node_boxRoot.children.length - 1) {
            index = 2;
          } else if (this.ballInfo.oddNum > 1) {
            index = 1;
          }
          var win_light = X_hezi.getChildByName("win_light").getChildByName(arrWinName[index]);
          win_light.active = true;
          ParticleUtils.stop(win_light);
          ParticleUtils.play(win_light);
          var heZi = X_hezi.getChildByName(arrStrName[this.ballInfo.ball - 1]);
          heZi.getComponent(Animation).play();
          tween(X_hezi).delay(1.5).call(function () {
            // ParticleUtils.stop(win_light);
            // win_light.active = false;
            heZi.getComponent(Animation).stop();
            heZi.getComponent(MeshRenderer).material.setProperty("emissive", color(0, 0, 0, 255));
          }).start();
          if (this.ballInfo.oddNum <= 1) {
            UfoUtils.instance.playOneShot(eSound.Ball1);
          } else if (this.ballInfo.oddNum <= 2) {
            UfoUtils.instance.playOneShot(eSound.Ball2);
          } else if (this.ballInfo.oddNum <= 5) {
            UfoUtils.instance.playOneShot(eSound.Ball3);
          } else {
            UfoUtils.instance.playOneShot(eSound.Ball4);
          }
        };
        // onCollisionStay(event: any) {
        //     let AngularVelocity = v3(0);
        //     this.node.getComponent(RigidBody).getAngularVelocity(AngularVelocity);
        //     let LinearVelocity = v3(0);
        //     this.node.getComponent(RigidBody).getLinearVelocity(LinearVelocity);
        //     this.node.getComponent(RigidBody).clearForces();
        // }
        _proto.onCollisionEnter = function onCollisionEnter(event) {
          this.isStay = false;
          this.node.getComponent(RigidBody).clearForces();
          var isG = event.selfCollider.node.getComponent(RigidBody).useGravity;
          if (isG) {
            event.selfCollider.node.getComponent(RigidBody).useGravity = false;
            event.selfCollider.node.getComponent(RigidBody).clearState();
          }
          this.doBallJump(event.otherCollider.node, event.selfCollider.node.position.x > event.otherCollider.node.position.x);
        }

        // onCollisionExit(event: any) {
        //     this.isStay = false;

        //     let LinearVelocity = v3(0);
        //     this.node.getComponent(RigidBody).getLinearVelocity(LinearVelocity);

        //     let AngularVelocity = v3(0);
        //     this.node.getComponent(RigidBody).getAngularVelocity(AngularVelocity);

        //     this.node.getComponent(RigidBody).setAngularVelocity(v3(0, 0, 0));
        //     this.node.getComponent(RigidBody).clearForces();
        // }

        // nextStepIndex = -1;
        // nextStepFloor = -1;
        ;

        _proto.doBallJump = function doBallJump(stepNode, isRight) {
          var _this2 = this;
          if (this.curFlooors == -1) {
            this.node.getComponent(Collider).off("onTriggerEnter", this.onCollisionEnter, this);
          }
          UfoUtils.instance.playSound(eSound.Hit);

          // 钉子共用开启 USE_INSTANCING 的材质，读取 .material 会生成独立材质实例并让该钉子退出合批。
          // 高亮结束后换回共享材质（默认 emissive 黑、mainColor 白），否则被碰过的钉子会永久各占一次绘制。
          var stepRender = stepNode.getComponent(MeshRenderer);
          var mStep = stepRender.material;
          mStep.setProperty("emissive", STEP_EMISSIVE[this.ballInfo.ball - 1]);
          mStep.setProperty("mainColor", STEP_MAIN_COLOR[this.ballInfo.ball - 1]);

          // 只停同一钉子上一次的高亮计时，避免先到的计时提前熄灭后一个球的高亮；不影响钉子的入场位移缓动。
          Tween.stopAllByTag(STEP_LIGHT_TAG, stepNode);
          tween(stepNode).tag(STEP_LIGHT_TAG).delay(0.35).call(function () {
            if (isValid(stepRender)) {
              stepRender.setSharedMaterial(stepRender.sharedMaterial, 0);
            }
          }).start();
          var totalW = eConstDef.disW * 9;
          var curDisW = totalW / (UfoModel.instance.curFloors + 1);
          var totalH = eConstDef.disH * 7;
          var curDisH = totalH / (UfoModel.instance.curFloors - 1);
          var stepName = stepNode.name;
          var arrSplict = stepName.split("_");
          var stepFloor = parseInt(arrSplict[2]);
          var stepIndex = parseInt(arrSplict[3]);

          // if (stepFloor <= this.curFlooors) {
          //     return;
          // }

          var toPos = v3(0);
          var destPosX = this.ballInfo.prizeIdx * curDisW - totalW / 2 + curDisW / 2.0;
          if (this.curFlooors == -1) {
            stepIndex = isRight ? stepIndex + 1 : stepIndex;
          } else if (stepIndex == 0 || this.node.position.x < destPosX) {
            stepIndex = stepIndex + 1;
          }
          this.curFlooors = stepFloor;
          stepFloor = stepFloor + 1;
          var maxCounts = 3 + stepFloor;
          var halfIndex = maxCounts / 2;
          var posX = (stepIndex - halfIndex + 0.5) * curDisW;
          var posY = eConstDef.stepStartPos.y - stepFloor * curDisH;
          var dtX = Math.random() * 0.025 + 0.01;
          // dtX = sys.isNative ? 0 : (dtX * 8) / UfoModel.instance.curFloors;
          dtX = dtX * 8 / UfoModel.instance.curFloors;
          if (stepIndex == 0 || posX < destPosX) {
            posX += dtX;
          } else if (stepIndex == maxCounts - 1 || posX > destPosX) {
            posX -= dtX;
          }

          // posY = sys.isNative ? posY : posY + (0.1 * 8) / UfoModel.instance.curFloors;
          posY = posY + 0.1 * 8 / UfoModel.instance.curFloors;
          toPos = v3(posX, posY, this.node.position.z);
          var times = 0.41 - this.curFlooors * 0.0035;
          var jumpH = Math.random() * 0.1 + 0.15;
          var duration = times * jumpH / 0.25;

          // this.doJump(duration, toPos, (jumpH * 8) / UfoModel.instance.curFloors);

          // this.nextStepIndex = stepIndex;
          // this.nextStepFloor = stepFloor;

          var hight = jumpH * 8 / UfoModel.instance.curFloors;
          var startPos = this.node.position;
          var cpY = (startPos.y + toPos.y) / 2 + hight; //len * 0.5;

          Tween.stopAllByTarget(this.node);
          tween(this.node).bezierTo3(duration, startPos, v3(startPos.x, cpY, this.node.position.z), v3(toPos.x, cpY, this.node.position.z), toPos, {
            easing: "cubicOutIn"
          }).call(function () {
            var Node_stepRoot = stepNode.parent;
            var X_step_next = Node_stepRoot.getChildByName("X_step_" + stepFloor + "_" + stepIndex);
            if (X_step_next) {
              _this2.doBallJump(X_step_next, _this2.node.position.x > X_step_next.position.x);
            }
          }).start();
        };
        _proto.doJump = function doJump(duration, toPos, hight) {
          if (hight === void 0) {
            hight = 1;
          }
          var startPos = this.node.position;
          var len = Vec3.distance(toPos, startPos);
          var cpY = (startPos.y + toPos.y) / 2 + hight; //len * 0.5;

          Tween.stopAllByTarget(this.node);
          tween(this.node).bezierTo3(duration, startPos, v3(startPos.x, cpY, this.node.position.z), v3(toPos.x, cpY, this.node.position.z), toPos, {
            easing: "cubicOutIn"
          }).start();
        };
        return UfoBall;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "X_feidieww", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_boxRoot", [_dec4], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoBtnCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './UfoDef.ts', './UfoModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, Color, Node, geometry, PhysicsSystem, MeshRenderer, color, sys, UIRenderer, Component, EventManager, eRunStatus, eEvent, UfoModel;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Canvas = module.Canvas;
      Color = module.Color;
      Node = module.Node;
      geometry = module.geometry;
      PhysicsSystem = module.PhysicsSystem;
      MeshRenderer = module.MeshRenderer;
      color = module.color;
      sys = module.sys;
      UIRenderer = module.UIRenderer;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      UfoModel = module.UfoModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "890aer18hBFLZNa2HbG+Xta", "UfoBtnCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UfoBtnCheck = exports('UfoBtnCheck', (_dec = ccclass("UfoBtnCheck"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UfoBtnCheck, _Component);
        function UfoBtnCheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor2, _assertThisInitialized(_this));
          _this._cur_button = null;
          _this._color1 = Color.BLACK;
          _this._color2 = new Color(5, 29, 127);
          //on
          _this._color3 = new Color(50, 50, 127);
          return _this;
        }
        var _proto = UfoBtnCheck.prototype;
        //press
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // this.canvas.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (UfoModel.instance.isTest) {
            this.canvas.node.on(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            this.canvas.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
            this.canvas.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
          }
        };
        _proto.onDisable = function onDisable() {
          // this.canvas.node.off(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (UfoModel.instance.isTest) {
            this.canvas.node.off(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            this.canvas.node.off(Node.EventType.TOUCH_END, this.onMouseUp, this);
            this.canvas.node.off(Node.EventType.TOUCH_START, this.onMouseDown, this);
          }
        };
        _proto.onMouseMove = function onMouseMove(event) {
          var outRay = new geometry.Ray();
          this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     // return v.collider.getComponent(MoveCameraOnButtonClick);
            //     return v;
            // });
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var castCollider = raycastResult.collider;
            if (castCollider) {
              gts.Debug.Log("==onMouseMove=00000000000=castCollider=");
              if (castCollider.node.name.match("X_jinshu") || castCollider.node.name == "X_lunpan" || castCollider.node.name == "X_lunpan2" || castCollider.node == this._cur_button) {
                return;
              }
              if (this._cur_button) {
                //moveOut
                this.onMouseMoveOut(this._cur_button);
              }
              this._cur_button = castCollider.node;

              //moveIn
              this.onMouseMoveIn(this._cur_button);
            } else if (this._cur_button) {
              gts.Debug.Log("==onMouseMove=111111111111111=castCollider=");

              //moveOut
              this.onMouseMoveOut(this._cur_button);
              this._cur_button = null;
            }
          } else if (this._cur_button) {
            //moveOut
            gts.Debug.Log("==onMouseMove=2222222222=castCollider=");
            this.onMouseMoveOut(this._cur_button);
            this._cur_button = null;
          }
        };
        _proto.onMouseUp = function onMouseUp(event) {
          if (this._cur_button) {
            gts.Debug.Log("==onMouseUp==" + this._cur_button.name);

            //touchEnd
            this.onMouseClick(this._cur_button);

            // this._cur_button = null;
          }

          if (UfoModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
        };
        _proto.onMouseDown = function onMouseDown(event) {
          var outRay = new geometry.Ray();
          this.camera.screenPointToRay(event.getLocationX(), event.getLocationY(), outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     return v;
            // });

            var castCollider = raycastResult.collider;
            if (castCollider) {
              //|| castCollider.node == this._cur_button
              if (castCollider.node.name.match("X_jinshu") || castCollider.node.name == "X_lunpan" || castCollider.node.name == "X_lunpan2") return;
              this._cur_button = castCollider.node;

              // gts.Debug.Log(`==onMouseDown==${this._cur_button.name}`);

              if (this._cur_button.parent.name.match("Node_touchArea")) ;else if (this._cur_button.name.match("Quad_")) {
                var mRender = this._cur_button.getComponent(MeshRenderer);
                if (mRender) {
                  mRender.material.setProperty("mainColor", color(255, 255, 255, 255));
                }
              } else {
                this.setButtonColor(this._cur_button, this._color3);
              }
              EventManager.instance.emit(eEvent.onMouseDown, this._cur_button);
            }
          }
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(node) {
          gts.Debug.Log("=" + sys.now() + "=onMouseMoveIn==" + node.name);
          // node.position = v3(node.position.x, 0.0001, node.position.z);

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 255));
            }
          } else {
            this.setButtonColor(node, this._color3);
          }
          EventManager.instance.emit(eEvent.onMouseMoveIn, node);
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(node) {
          gts.Debug.Log(sys.now() + "==onMouseMoveOut==" + node.name);
          // node.position = v3(node.position.x, 0, node.position.z);

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
          } else {
            this.setButtonColor(node, this._color1);
          }
          EventManager.instance.emit(eEvent.onMouseMoveOut, node);
        };
        _proto.onMouseClick = function onMouseClick(node) {
          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            var mRender = node.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
          } else {
            this.setButtonColor(node, this._color1);
          }
          EventManager.instance.emit(eEvent.onMouseClick, node);
          gts.Debug.Log("==onMouseClick==" + node.name);
        };
        _proto.setButtonColor = function setButtonColor(node, color) {
          var renderCom = node.getComponent(UIRenderer);
          var mRender = node.getComponent(MeshRenderer);
          if (mRender) {
            mRender.material.setProperty("emissive", color);
            // gts.Debug.Log(`setButtonColor---${node.name}---`);
          } else if (renderCom) {
            renderCom.color = color;
          }
        };
        return UfoBtnCheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec3], {
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

System.register("chunks:///_virtual/UfoCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Vec2, Vec3, Quat, KeyCode, input, Input, game, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      Vec3 = module.Vec3;
      Quat = module.Quat;
      KeyCode = module.KeyCode;
      input = module.input;
      Input = module.Input;
      game = module.game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "527fd0LYvtEt5HIH4ozFyr8", "UfoCamera", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
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
      var UfoCamera = exports('UfoCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UfoCamera, _Component);
        function UfoCamera() {
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
          return _this;
        }
        var _proto = UfoCamera.prototype;
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
        };
        _proto.onMouseWheel = function onMouseWheel(e) {
          var delta = -e.getScrollY() * this.moveSpeed * 0.1; // delta is positive when scroll down
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
        _proto.onTouchStart = function onTouchStart(e) {
          if (game.canvas.requestPointerLock) {
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
        return UfoCamera;
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
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './UfoModel.ts', './I18n.ts', './ViewManager.ts', './UfoDef.ts', './UfoUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, UfoModel, i18n, ViewManager, eProto, eEvent, UfoUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      UfoModel = module.UfoModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      UfoUtils = module.UfoUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "563f0l8t8FN1IzPI2LSeBrq", "UfoCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UfoCtrl = exports('UfoCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(UfoCtrl, _GameDef$BaseCtrl);
        function UfoCtrl() {
          var _this;
          _this = _GameDef$BaseCtrl.call(this) || this;
          _this._configManager = void 0;
          _this._eventManager = void 0;
          _this._netManager = void 0;
          _this._dataManager = void 0;
          _this._model = null;
          /**
           * 请求下注
           * @param data
           */
          _this.isReqBet = false;
          /** 已发出但尚未回包的下注数；大于 0 时不允许调整层数。 */
          _this.pendingBets = 0;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = UfoModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = UfoCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete UfoCtrl._instance;
          UfoCtrl._instance = null;
          UfoModel.destroy();
          UfoUtils.destroy();
        };
        _proto.initProto = function initProto() {
          _GameDef$BaseCtrl.prototype.initProto.call(this);

          //注册网络监听--本游戏
          for (var _i = 0, _Object$entries = Object.entries(eProto); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
            EventManager.instance.on(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          EventManager.instance.on(ConfigManager.instance.protocolHall.login, this.onRecvData, this); //断线重连
          EventManager.instance.on(ConfigManager.instance.protocolHall.getWallet, this.onRecvData, this);
          EventManager.instance.on(ConfigManager.instance.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.removeProto = function removeProto() {
          _GameDef$BaseCtrl.prototype.removeProto.call(this);

          //注册网络监听--本游戏values
          for (var _i2 = 0, _Object$entries2 = Object.entries(eProto); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              key = _Object$entries2$_i[0],
              value = _Object$entries2$_i[1];
            EventManager.instance.off(value, this.onRecvData, this);
          }

          // //注册网络监听--大厅
          this._eventManager.off(this._configManager.protocolHall.login, this.onRecvData, this); //断线重连
          this._eventManager.off(this._configManager.protocolHall.getWallet, this.onRecvData, this);
          this._eventManager.off(this._configManager.protocolHall.pushWallet, this.onRecvData, this);
        };
        _proto.reqBet = function reqBet(floor, ball, betAmount) {
          var _this2 = this;
          if (floor === void 0) {
            floor = 8;
          }
          if (ball === void 0) {
            ball = 1;
          }
          if (betAmount === void 0) {
            betAmount = 1000;
          }
          if (!UfoModel.instance.gameInfo) {
            return false;
          }
          if (UfoModel.instance.curBet > UfoModel.instance.curBalance) {
            Common.showTip(i18n.lang["10001"]);
            return false;
          }
          if (UfoModel.instance.curBet < UfoModel.instance.gameInfo.minBet) {
            var tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(UfoModel.instance.gameInfo.minBet, 2));
            Common.showTip(tip);
            return false;
          }
          this.isReqBet = true;

          // 余额在发送前乐观扣减，必须按单次请求结算：未发出或服务端拒绝时原额退回，
          // 否则界面余额会一直偏低（游戏中 curBalance > 0 时钱包推送不会覆盖它）。
          // 超时/取消时服务端是否已处理未知，只结束本地等待，不退款。
          var model = UfoModel.instance;
          var settled = false;
          var refunded = false;
          var settle = function settle(refund) {
            // 离场后控制器已销毁，迟到的回调不能再访问单例（会重建出带脏余额的 UfoModel）。
            if (settled || UfoCtrl._instance !== _this2) {
              return false;
            }
            settled = true;
            _this2.pendingBets--;
            if (refund) {
              refunded = true;
              model.curBalance += betAmount;
            }
            _this2.isReqBet = _this2.pendingBets > 0;
            return true;
          };
          model.curBalance -= betAmount;
          this.pendingBets++;
          try {
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              floor: "" + floor,
              ball: "" + ball,
              betAmount: "" + betAmount
            }, function (response) {
              var isFail = !response || response.Code && response.Code != 0;
              if (settle(isFail) && isFail) {
                EventManager.instance.emit(eEvent.onBetFail);
              }
            }, function () {
              if (settle(false)) {
                EventManager.instance.emit(eEvent.onBetFail);
              }
            });
          } catch (error) {
            // 发送抛错时网络层不会再回调，本次下注未发出。
            settle(true);
            throw error;
          }

          // 断线时 sendOnlineData 会同步回调 null，本次下注并未发出。
          return !refunded;
        }
        /**请求突出房间 */;
        _proto.reqEnter = function reqEnter() {
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "zpVip"
          });
        }

        // /**请求历史记录 */
        // reqHistory(offset = 0, pageSize = 13) {
        //     NetManager.instance.sendOnlineData(UfoDef.eProto.HD_History, {
        //         Offset: offset,
        //         PageSize: pageSize,
        //         RecordType: "zpVip",
        //     });
        // }

        /**请求记录 */;
        _proto.reqRecord = function reqRecord(offset, pageSize) {
          if (offset === void 0) {
            offset = 0;
          }
          if (pageSize === void 0) {
            pageSize = 13;
          }
          NetManager.instance.sendOnlineData(eProto.Record, {
            Offset: offset,
            PageSize: pageSize,
            RecordType: "zpVip"
          });
        }
        /**请求记录 */;
        _proto.reqLayers = function reqLayers() {
          NetManager.instance.sendOnlineData(eProto.HD_FloorInfo, {
            floor: "" + UfoModel.instance.curFloors
          });
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));
          if (data.Code && data.Code != 0) {
            ViewManager.instance.closeWait();

            //提示错误
            var strTip = i18n.errTip(data.Code);
            if (strTip != "") {
              Common.showTip(i18n.errTip(data.Code));
            }
            switch (data.cmd) {
              case eProto.HD_Bet:
                {
                  this.isReqBet = false;
                  break;
                }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_info:
              {
                UfoModel.instance.gameInfo = data.Data;
                UfoModel.instance.gameInfo.records = UfoModel.instance.gameInfo.records || [];
                break;
              }
            case eProto.HD_FloorInfo:
              {
                UfoModel.instance.floorInfo = data.Data;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                emitData = data.Data;
                UfoModel.instance.betResult.push(data.Data);
                UfoModel.instance.ballList.push(data.Data);
                break;
              }
            case eProto.HD_History:
              {
                UfoModel.instance.gameRecord = data.Data.history || [];
                UfoModel.instance.gameRecord = UfoModel.instance.gameRecord.reverse();
                break;
              }
            case eProto.HD_Rank:
              {
                emitData = data.Data;
                break;
              }
            //hall////////////////////////////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
              {
                var HD_Wallet = data.Data;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==Ufo=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (UfoModel.instance.curBalance > 0) {
                  UfoModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                UfoModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Ufo=pushWallet==" + _HD_Wallet.VndBalance);
                if (UfoModel.instance.curBalance > 0) {
                  UfoModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                UfoModel.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                // 断线重连
                Common.closeWait();
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return UfoCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "195ceyLUBJKJoz8zWP6pUbr", "UfoDef", undefined);
      var cBundle = exports('cBundle', "UfoGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "plinko/HD_info";
        eProto["HD_Bet"] = "plinko/HD_Bet";
        eProto["HD_History"] = "plinko/HD_History";
        eProto["HD_Leave"] = "plinko/HD_Leave";
        eProto["HD_betRecord"] = "plinko/HD_betRecord";
        eProto["HD_FloorInfo"] = "plinko/HD_FloorInfo";
        eProto["Record"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eZindex = exports('eZindex', {
        NONE: 0,
        MASK: 1000,
        SPECIAL: 2000
      });
      var DISW = 0.38;
      var eConstDef = exports('eConstDef', {
        stepStartPos: v3(0, 1.4, 0),
        disW: DISW,
        disH: Math.sqrt(DISW * DISW * 0.75) //0.75  0.45
      });

      var arrBetList = exports('arrBetList', [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);
      var eRunStatus = exports('eRunStatus', {
        NONE: 0,
        START: 1,
        SEACH: 2,
        SEACHEND: 3,
        END: 4
      });
      var eRunType = exports('eRunType', {
        NONE: 0,
        SPECIAL: 1
      });
      var cRate = exports('cRate', {
        "2": {
          3: 50,
          4: 100,
          5: 150,
          6: 200
        }
      });
      var eAutoRateType = exports('eAutoRateType', Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      }));
      var eEvent = exports('eEvent', /*#__PURE__*/function (eEvent) {
        eEvent["onLoadHall"] = "onLoadHall";
        eEvent["onLoadGame"] = "onLoadGame";
        eEvent["onRunStart"] = "onRunStart";
        eEvent["onRunEnd"] = "onRunEnd";
        eEvent["onGameEnd"] = "onGameEnd";
        eEvent["onUpdateGold"] = "onUpdateGold";
        eEvent["onUpdatePath"] = "onUpdatePath";
        eEvent["onUpdateRecord"] = "onUpdateRecord";
        eEvent["onBigWin"] = "onBigWin";
        eEvent["onBetFail"] = "onBetFail";
        eEvent["onUpdateStep"] = "onUpdateStep";
        eEvent["onGmaeViewStart"] = "onGmaeViewStart";
        eEvent["onDoUFOFly"] = "onDoUFOFly";
        eEvent["onTestClick"] = "onTestClick";
        eEvent["onWaitCameraCruise"] = "onWaitCameraCruise";
        eEvent["onStopCameraCruise"] = "onStopCameraCruise";
        eEvent["onMouseMoveIn"] = "onMouseMoveIn";
        eEvent["onMouseMoveOut"] = "onMouseMoveOut";
        eEvent["onMouseDown"] = "onMouseDown";
        eEvent["onMouseClick"] = "onMouseClick";
        return eEvent;
      }({}));

      /**音效 */
      var eSound = exports('eSound', {
        bgm: "sound/BGM",
        Begin: "sound/Begin",
        Hit: "sound/Hit",
        Ball1: "sound/Ball1",
        Ball2: "sound/Ball2",
        Ball3: "sound/Ball3",
        Ball4: "sound/Ball4",
        Bigwin: "sound/Bigwin"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoGame", ['./UfoCtrl.ts', './UfoDef.ts', './UfoModel.ts', './UfoScene.ts', './UfoUtils.ts', './UfoBtnCheck.ts', './UfoCamera.ts', './UfoGameView.ts', './UfoViewCtrl.ts', './UIGameRecordLayer.ts', './UIHelpPumping.ts', './UIPlaneLight.ts', './UISettingLayer.ts', './UfoBall.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/UfoGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UfoDef.ts', './UfoModel.ts', './UfoCtrl.ts', './UfoUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './DataManager.ts', './I18n.ts', './UIGameRecordLayer.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Button, SpriteFrame, director, Camera, tween, color, instantiate, Sprite, UITransform, v3, Tween, sp, UIOpacity, find, sys, eEvent, eSound, eProto, UfoModel, UfoCtrl, UfoUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, DataManager, UserKey, i18n, UIGameRecordLayer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
      Camera = module.Camera;
      tween = module.tween;
      color = module.color;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      v3 = module.v3;
      Tween = module.Tween;
      sp = module.sp;
      UIOpacity = module.UIOpacity;
      find = module.find;
      sys = module.sys;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      eProto = module.eProto;
    }, function (module) {
      UfoModel = module.UfoModel;
    }, function (module) {
      UfoCtrl = module.UfoCtrl;
    }, function (module) {
      UfoUtils = module.UfoUtils;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      UIGameRecordLayer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
      cclegacy._RF.push({}, "6de7201SiZO74WDNylzXSF1", "UfoGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UfoGameView = exports('default', (_dec = ccclass("UfoGameView"), _dec2 = menu("game/UfoGame/UfoGameView"), _dec3 = property(Label), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(Button), _dec17 = property(Button), _dec18 = property(SpriteFrame), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(UfoGameView, _GameDef$BaseView);
        function UfoGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.MainCamera = null;
          // @property(Node)
          // selfHead: Node = null;
          // @property(Label)
          // selfName: Label = null;
          _initializerDefineProperty(_this, "selfGold", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_menu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_layer", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_baseScore", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Layout_betChip", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_floorInfo", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordRoot", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_play", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_addLayers", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_addBase", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_baseBet", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "recordBg", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_autoPlay", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_top", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_center", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_down", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_bigWin", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_prizeAmount", _descriptor22, _assertThisInitialized(_this));
          _this.curAutoIndex = 0;
          _this.lastRunTime = 0;
          return _this;
        }
        var _proto = UfoGameView.prototype;
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, UfoCtrl.instance);
          this.MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          this.Node_menu.active = false;
          EventManager.instance.on(eEvent.onGmaeViewStart, this.onGmaeViewStart, this);
          EventManager.instance.emit(eEvent.onDoUFOFly);
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.on(eEvent.onUpdateRecord, this.updateRecord, this);
          EventManager.instance.on(eEvent.onBigWin, this.onBigWin, this);
          EventManager.instance.on(eEvent.onBetFail, this.onBetFail, this);
          this.schedule(this.runEmitter, 0.1);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onUpdateRecord, this.updateRecord, this);
          EventManager.instance.off(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.off(eEvent.onBigWin, this.onBigWin, this);
          EventManager.instance.off(eEvent.onBetFail, this.onBetFail, this);
          EventManager.instance.off(eEvent.onGmaeViewStart, this.onGmaeViewStart, this);
          UfoModel.instance.clearGameData();
          this.unschedule(this.runEmitter);
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        }
        //#endregion baseInterface
        ////////////////////////////////////////////////////////////////////////////////
        ;

        _proto.start = function start() {
          var _this2 = this;
          //
          if (!UfoModel.instance.isTest) {
            tween(this.MainCamera.node).call(function () {
              _this2.showStartBetTip();
            }).start();
          }
          this.initUIView();
        };
        _proto.disconnect = function disconnect() {
          Common.showNetTips();
        };
        _proto.gameHide = function gameHide() {
          NetManager.instance.removeWaitServicePush();
        };
        _proto.gameShow = function gameShow() {
          NetManager.instance.waitServiceSendData();
          this.scheduleOnce(function () {
            Common.showLog("前台");
          }, 0.1);
        }

        //////////////////////////////////////////////////////
        ;

        _proto.initSelfInfo = function initSelfInfo() {
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();
          UfoUtils.instance.loadRes_icon(function () {
            UfoCtrl.instance.reqEnter();
            UfoCtrl.instance.reqLayers();
          });
        };
        _proto.onGameEnter = function onGameEnter() {
          for (var i = 0; i < 6; i++) {
            var Label_bet = this.Layout_betChip.children[i].getChildByName("Label_bet");
            Label_bet.getComponent(Label).string = "" + Common.ChangeMoneyShow(UfoModel.instance.gameInfo.betList[i], 0);
          }
          UfoModel.instance.curBaseIndex = 0;
          UfoModel.instance.curBet = UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
          this.Label_baseScore.string = "" + Common.numFormat(UfoModel.instance.curBet);

          //record
          this.updateRecord();
        };
        _proto.onUpdateFloorInfo = function onUpdateFloorInfo() {
          var _this3 = this;
          var scale = 728 / (728 + 82 * (UfoModel.instance.curFloors - 8));
          var arrColor = [color(255, 255, 255, 255), color(255, 255, 255, 255), color(255, 255, 255, 255)];
          for (var i = 0; i < 3; i++) {
            var Node_floorInfo = this.Node_floorInfo.getChildByName("Node_floorInfo_" + i);
            var temp = Node_floorInfo.getChildByName("Node_temp_" + 0);
            var infoList = UfoModel.instance.floorInfo["" + (i + 1)];
            for (var j = 0; j < infoList.length; j++) {
              var Node_temp = Node_floorInfo.getChildByName("Node_temp_" + j);
              if (!Node_temp) {
                Node_temp = instantiate(temp);
                Node_temp.name = "Node_temp_" + j;
                Node_floorInfo.addChild(Node_temp);
              }
              Node_temp.getComponent(Sprite).enabled = false;
              Node_temp.getComponent(UITransform).width = 72 * scale;
              var Label_win = Node_temp.getChildByName("Label_win");
              Label_win.getComponent(Label).string = "" + infoList[j];
              Label_win.getComponent(Label).color = arrColor[i];
              Label_win.getComponent(UITransform).width = 72 * scale;
            }
            var jMax = Node_floorInfo.children.length - infoList.length;
            for (var _j = 0; _j < jMax; _j++) {
              var _Node_temp = Node_floorInfo.children[infoList.length];
              _Node_temp.destroyFromParent();
            }
          }
          this.scheduleOnce(function () {
            var Node_floorInfo = _this3.Node_floorInfo.getChildByName("Node_floorInfo_" + 0);
            scale = 728 / Node_floorInfo.getComponent(UITransform).width;
            tween(_this3.Node_floorInfo).to(0.25, {
              scale: v3(scale, 1, 1)
            });
            _this3.Node_floorInfo.scale = v3(scale, 1, 1);
          });
          EventManager.instance.emit(eEvent.onUpdateStep);
        };
        _proto.onGmaeViewStart = function onGmaeViewStart() {
          var _this4 = this;
          tween(this.Node_down).to(0.5, {
            position: v3(0, -462, 0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            _this4.Node_center.active = true;
            // this.Node_down.getComponent(Widget).enabled = true;
          }).start();
          tween(this.Node_top).delay(1).to(0.5, {
            position: v3(0, 627, 0)
          }, {
            easing: "cubicOut"
          }).call(function () {
            // this.Node_top.getComponent(Widget).enabled = true;
          }).start();
        }
        /**
         * 层数只能在没有在途小球、没有待回包下注且未自动投注时调整，
         * 否则已下注小球的落点与当前钉子/盒子布局对不上。
         */;
        _proto.updateLayerButtons = function updateLayerButtons() {
          if (UfoModel.instance.betResult.length > 0 || UfoCtrl.instance.pendingBets > 0 || UfoModel.instance.isAuto) {
            return;
          }
          this.Button_addLayers[0].interactable = UfoModel.instance.curFloors < UfoModel.instance.maxFloors;
          this.Button_addLayers[1].interactable = UfoModel.instance.curFloors > UfoModel.instance.minFloors;
        };
        _proto.onBetFail = function onBetFail() {
          this.updateGold();
          this.updateLayerButtons();
        };
        _proto.updateRecord = function updateRecord() {
          this.updateLayerButtons();

          // 界面只展示最近 8 条，长时间自动投注时不保留更早的记录。
          var allRecords = UfoModel.instance.gameInfo.records;
          if (allRecords.length > 8) {
            allRecords.splice(0, allRecords.length - 8);
          }
          var Node_content = this.recordRoot.getChildByName("Node_content");
          var Node_item = this.recordRoot.getChildByName("Node_item");
          var index = 0;
          var records = UfoModel.instance.gameInfo.records.slice(UfoModel.instance.gameInfo.records.length > 8 ? UfoModel.instance.gameInfo.records.length - 8 : 0);
          for (var _iterator = _createForOfIteratorHelperLoose(records), _step; !(_step = _iterator()).done;) {
            var record = _step.value;
            var item = Node_content.getChildByName("Node_item_" + index);
            if (!item) {
              item = instantiate(Node_item);
              item.name = "Node_item_" + index;
              item.active = true;
              Node_content.addChild(item);
            }
            Tween.stopAllByTarget(item);
            // 上一条“最新”记录的呼吸缩放被中途停止，需复位。
            item.setScale(1, 1, 1);
            item.getChildByName("Sprite_tag").active = false;
            item.getComponent(Sprite).spriteFrame = this.recordBg[record.ball - 1];
            item.getChildByName("Label_result").getComponent(Label).string = "" + record.oddNum;
            index++;
          }
          var lastNode = Node_content.children[Node_content.children.length - 1];
          if (lastNode) {
            lastNode.getChildByName("Sprite_tag").active = true;
            tween(lastNode).to(0.5, {
              scale: v3(1.1, 1.1, 1.1)
            }).to(0.5, {
              scale: v3(1, 1, 1)
            }).union().repeatForever().start();
          }
        }

        //#endregion chip list;
        //////////////////////////////////////////////////
        ;

        _proto.onToggleClick = function onToggleClick(event) {
          var toggle = event;
          switch (event.node.name) {
            case "Toggle_notAuto":
              {
                if (!toggle.isChecked) {
                  break;
                }
                var ballIndex = {
                  Button_play_green: 1,
                  Button_play_blue: 2,
                  Button_play_red: 3
                };
                var aniName = ["green", "blue", "red"];
                for (var _iterator2 = _createForOfIteratorHelperLoose(this.Button_play), _step2; !(_step2 = _iterator2()).done;) {
                  var btn = _step2.value;
                  btn.interactable = true;
                  var btnIndex = ballIndex[btn.node.name] - 1;
                  var btnAni = btn.getComponent(sp.Skeleton);
                  btnAni.setAnimation(0, aniName[btnIndex] + "_idle", true);
                }
                this.Node_autoPlay.active = false;
                UfoModel.instance.isAuto = false;
                this.unschedule(this.doAutoPlay);
                this.updateLayerButtons();
                break;
              }
            case "Toggle_auto":
              {
                if (!toggle.isChecked) {
                  break;
                }
                for (var _iterator3 = _createForOfIteratorHelperLoose(this.Button_play), _step3; !(_step3 = _iterator3()).done;) {
                  var _btn2 = _step3.value;
                  _btn2.interactable = false;
                }
                this.Node_autoPlay.active = true;
                if (UfoModel.instance.autoBallList.length > 0 && !UfoModel.instance.isAuto) {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(this.Button_addLayers), _step4; !(_step4 = _iterator4()).done;) {
                    var _btn = _step4.value;
                    _btn.interactable = false;
                  }
                  UfoModel.instance.isAuto = true;
                  this.doAutoPlay();
                  this.schedule(this.doAutoPlay, 1);
                }
                break;
              }
            case "Toggle_auto_green":
            case "Toggle_auto_blue":
            case "Toggle_auto_red":
              {
                var _ballIndex = {
                  Toggle_auto_green: 1,
                  Toggle_auto_blue: 2,
                  Toggle_auto_red: 3
                };
                var _aniName = ["green", "blue", "red"];
                var _btnIndex = _ballIndex[event.node.name] - 1;
                var _btnAni = event.node.getComponent(sp.Skeleton);
                _btnAni.setAnimation(0, _aniName[_btnIndex] + "_click", false);
                if (toggle.isChecked) {
                  UfoModel.instance.autoBallList.push(_ballIndex[event.node.name]);
                  UfoModel.instance.autoBallList.sort(function (a, b) {
                    return a - b;
                  });
                  if (!UfoModel.instance.isAuto) {
                    UfoModel.instance.isAuto = true;
                    this.doAutoPlay();
                    this.schedule(this.doAutoPlay, 1);
                  }
                  this.scheduleOnce(function () {
                    _btnAni.setAnimation(0, _aniName[_btnIndex] + "_auto", true);
                  }, 0.25);
                } else {
                  for (var i = 0; i < UfoModel.instance.autoBallList.length; i++) {
                    if (UfoModel.instance.autoBallList[i] == _ballIndex[event.node.name]) {
                      UfoModel.instance.autoBallList.splice(i, 1);
                      break;
                    }
                  }
                  this.scheduleOnce(function () {
                    _btnAni.setAnimation(0, _aniName[_btnIndex] + "_idle", true);
                  }, 0.25);
                }
                if (UfoModel.instance.autoBallList.length > 0) {
                  for (var _iterator5 = _createForOfIteratorHelperLoose(this.Button_addLayers), _step5; !(_step5 = _iterator5()).done;) {
                    var _btn3 = _step5.value;
                    _btn3.interactable = false;
                  }
                }
                break;
              }
          }
        };
        _proto.doAutoPlay = function doAutoPlay() {
          var ballType = UfoModel.instance.autoBallList[this.curAutoIndex % UfoModel.instance.autoBallList.length];
          if (ballType && UfoCtrl.instance.reqBet(UfoModel.instance.curFloors, ballType, UfoModel.instance.curBet)) {
            this.updateGold();
            this.curAutoIndex++;
          } else {
            UfoModel.instance.isAuto = false;
            this.unschedule(this.doAutoPlay);
            this.updateLayerButtons();
          }
        }
        //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this5 = this;
          switch (event.target.name) {
            case "Button_menu":
              {
                this.Node_menu.active = !this.Node_menu.active;
                break;
              }
            case "Button_return":
              {
                UfoCtrl.instance.reqExit();
                EventManager.instance.emit(eEvent.onLoadHall);
                break;
              }
            case "Button_history":
              {
                Common.loadPopBuddle("prefab/Node_record", UfoUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  Common.transformSize(viewNode);
                  ViewManager.instance.popNodeView(viewNode, true);
                  viewNode.getComponent(UIGameRecordLayer).setGameType("plinko", 10);
                }, true);
                break;
              }
            case "Button_help":
              {
                Common.loadPopBuddle("prefab/Node_help", UfoUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  Common.transformSize(viewNode);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_set":
              {
                Common.loadPopBuddle("prefab/Node_setting", UfoUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  Common.transformSize(viewNode);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
            case "Button_rank":
              {
                GUtil.openRank("plinko");
                break;
              }

            //doStart
            case "Button_play_green":
            case "Button_play_blue":
            case "Button_play_red":
              {
                for (var _iterator6 = _createForOfIteratorHelperLoose(this.Button_addLayers), _step6; !(_step6 = _iterator6()).done;) {
                  var _btn4 = _step6.value;
                  _btn4.interactable = false;
                }
                var ballIndex = {
                  Button_play_green: 1,
                  Button_play_blue: 2,
                  Button_play_red: 3
                };
                var aniName = ["green", "blue", "red"];
                var btnIndex = ballIndex[event.target.name] - 1;
                var btnAni = this.Button_play[btnIndex].getComponent(sp.Skeleton);
                btnAni.setAnimation(0, aniName[btnIndex] + "_click", false);
                btnAni.addAnimation(0, aniName[btnIndex] + "_idle", true);
                if (UfoCtrl.instance.reqBet(UfoModel.instance.curFloors, ballIndex[event.target.name], UfoModel.instance.curBet)) {
                  this.updateGold();

                  // event.target.getComponent(Button).interactable = false;
                  for (var _iterator7 = _createForOfIteratorHelperLoose(this.Button_play), _step7; !(_step7 = _iterator7()).done;) {
                    var btn = _step7.value;
                    btn.interactable = false;
                  }
                  this.scheduleOnce(function () {
                    // event.target.getComponent(Button).interactable = true;
                    for (var _iterator8 = _createForOfIteratorHelperLoose(_this5.Button_play), _step8; !(_step8 = _iterator8()).done;) {
                      var btn = _step8.value;
                      btn.interactable = true;
                    }
                  }, 1);
                } else {
                  // 下注未发出时没有小球落地来恢复层数按钮。
                  this.updateLayerButtons();
                }
                break;
              }

            /////
            //addLayers
            case "Button_addLayers":
              {
                if (UfoModel.instance.betResult.length > 0 || UfoCtrl.instance.pendingBets > 0) {
                  return;
                }
                UfoModel.instance.curFloors++;
                if (UfoModel.instance.curFloors > UfoModel.instance.maxFloors) {
                  UfoModel.instance.curFloors = UfoModel.instance.maxFloors;
                }
                this.Label_layer.string = "" + UfoModel.instance.curFloors;
                UfoCtrl.instance.reqLayers();
                this.Button_addLayers[0].interactable = false;
                this.Button_addLayers[1].interactable = true;
                if (UfoModel.instance.curFloors == UfoModel.instance.maxFloors) {
                  return;
                }
                this.scheduleOnce(function () {
                  _this5.Button_addLayers[0].interactable = true;
                }, 0.25);
                break;
              }
            case "Button_redusLayers":
              {
                if (UfoModel.instance.betResult.length > 0 || UfoCtrl.instance.pendingBets > 0) {
                  return;
                }
                UfoModel.instance.curFloors--;
                if (UfoModel.instance.curFloors < UfoModel.instance.minFloors) {
                  UfoModel.instance.curFloors = UfoModel.instance.minFloors;
                }
                this.Label_layer.string = "" + UfoModel.instance.curFloors;
                UfoCtrl.instance.reqLayers();
                this.Button_addLayers[1].interactable = false;
                this.Button_addLayers[0].interactable = true;
                if (UfoModel.instance.curFloors == UfoModel.instance.minFloors) {
                  return;
                }
                this.scheduleOnce(function () {
                  _this5.Button_addLayers[1].interactable = true;
                }, 0.25);
                break;
              }

            //bet
            case "Button_baseBet_0":
            case "Button_baseBet_1":
            case "Button_baseBet_2":
            case "Button_baseBet_3":
            case "Button_baseBet_4":
            case "Button_baseBet_5":
              {
                UfoModel.instance.curBaseIndex = parseInt(event.target.name.replace("Button_baseBet_", ""));
                UfoModel.instance.curBet = UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                this.Label_baseScore.string = "" + Common.numFormat(UfoModel.instance.curBet);
                this.Button_addBase[0].interactable = UfoModel.instance.curBet < UfoModel.instance.gameInfo.maxBet;
                this.Button_addBase[1].interactable = false;
                break;
              }

            //addbaseBet
            case "Button_addBase":
              {
                var curBase = UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                var nextBet = UfoModel.instance.curBet + curBase;
                if (nextBet > UfoModel.instance.gameInfo.maxBet) {
                  var tip = Common.strFormat(i18n.lang["10064"], Common.ChangeMoneyShow(UfoModel.instance.gameInfo.maxBet, 2));
                  Common.showTip(tip);
                  return;
                } else if (nextBet == UfoModel.instance.gameInfo.maxBet) {
                  this.Button_addBase[0].interactable = false;
                }
                this.Button_addBase[1].interactable = true;
                UfoModel.instance.curBet += UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                this.Label_baseScore.string = "" + Common.numFormat(UfoModel.instance.curBet);
                break;
              }
            case "Button_redusBase":
              {
                var _curBase = UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                var _nextBet = UfoModel.instance.curBet - _curBase;
                if (_nextBet < UfoModel.instance.gameInfo.minBet) {
                  var _tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(UfoModel.instance.gameInfo.minBet, 2));
                  Common.showTip(_tip);
                  return;
                } else if (_nextBet == _curBase) {
                  this.Button_addBase[1].interactable = false;
                }
                this.Button_addBase[0].interactable = true;
                UfoModel.instance.curBet -= UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                if (UfoModel.instance.curBet < UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex]) {
                  UfoModel.instance.curBet = UfoModel.instance.gameInfo.betList[UfoModel.instance.curBaseIndex];
                }
                this.Label_baseScore.string = "" + Common.numFormat(UfoModel.instance.curBet);
                break;
              }
          }
        };
        _proto.doAwait = function doAwait(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.showStartBetTip = function showStartBetTip() {
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(2.0).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.onBigWin = function onBigWin(bigScore, isBig) {
          var _this7 = this;
          this.Node_bigWin.active = true;
          var Skeleton_win = this.Node_bigWin.getChildByName("Skeleton_win").getComponent(sp.Skeleton);
          var Label_win = this.Node_bigWin.getChildByName("Label_win");
          Label_win.getComponent(Label).string = "";
          UfoUtils.instance.updateLabelAdd(Label_win.getComponent(Label), bigScore);
          Label_win.active = isBig;
          UfoUtils.instance.playSound(eSound.Bigwin);
          Skeleton_win.setAnimation(0, isBig ? "bigwin" : "good", false);
          Skeleton_win.setCompleteListener(function () {
            Skeleton_win.setCompleteListener(null);
            _this7.Node_bigWin.active = false;
          });
        };
        _proto.updateGold = function updateGold(ballInfo) {
          if (ballInfo === void 0) {
            ballInfo = null;
          }
          var strGold = Common.numFormat(UfoModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            UfoUtils.instance.updateLabel(this.selfGold, strGold);
          }
          if (ballInfo && ballInfo.prizeAmount > 0) {
            var floorTemp = find("Node_floorInfo_" + (ballInfo.ball - 1) + "/Node_temp_" + ballInfo.prizeIdx, this.Node_floorInfo);
            var Node_prizeAmount = instantiate(this.Node_prizeAmount);
            this.Node_floorInfo.addChild(Node_prizeAmount);
            var wPos = floorTemp.getComponent(UITransform).convertToWorldSpaceAR(v3(0));
            wPos = this.Node_floorInfo.getComponent(UITransform).convertToNodeSpaceAR(wPos);
            Node_prizeAmount.position = v3(wPos.x, Node_prizeAmount.position.y, Node_prizeAmount.position.z);
            Node_prizeAmount.active = true;
            var Label_prizeAmount = Node_prizeAmount.getChildByName("Label_prizeAmount").getComponent(Label);
            Label_prizeAmount.string = UfoUtils.instance.numberFormat(ballInfo.prizeAmount / 1000, 2) + "K";
            var arrColor = [color(7, 208, 47, 255), color(38, 159, 233, 255), color(252, 11, 9, 255)];
            Label_prizeAmount.color = arrColor[ballInfo.ball - 1];
            tween(Node_prizeAmount).delay(0.5).parallel(tween(Node_prizeAmount).to(0.5, {
              position: v3(Node_prizeAmount.position.x, Node_prizeAmount.position.y + 200, Node_prizeAmount.position.z)
            }), tween(Node_prizeAmount.getComponent(UIOpacity)).to(0.5, {
              opacity: 0
            })).destroySelf().start();
          }
        };
        _proto.runEmitter = function runEmitter(dt) {
          if (UfoModel.instance.ballList.length == 0) {
            return;
          }
          var curTimes = (sys.now() - this.lastRunTime) / 1000;
          if (curTimes >= 1) {
            this.lastRunTime = sys.now();
            var betResult = UfoModel.instance.ballList.shift();
            EventManager.instance.emit(eEvent.onRunStart, betResult.openResult, betResult.prizeAmount);
          }
        }

        //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                this.onGameEnter();
                break;
              }
            case eProto.HD_FloorInfo:
              {
                this.onUpdateFloorInfo();
                break;
              }
            // case UfoDef.eProto.HD_Bet: {
            //     UfoModel.instance.gameStatus = UfoDef.eRunStatus.START;

            //     this.scheduleOnce(() => {
            //         let betResult = data;
            //         EventManager.instance.emit(UfoDef.eEvent.onRunStart, betResult.openResult, betResult.prizeAmount);
            //     }, UfoModel.instance.betResult.length - 1);

            //     break;
            // }
            case eProto.Record:
              {
                // this.updateGold();
                break;
              }
            case eProto.HD_History:
              {
                // this.comUfoRecord.updateRecord();
                break;
              }
            //////////////////////////////
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                this.updateGold();
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                Common.closeWait();
                this.gameShow();
                break;
              }
          }
        };
        return UfoGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfGold", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "addScore", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_betTip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_win", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_menu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_layer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Label_baseScore", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Layout_betChip", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_floorInfo", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "recordRoot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Button_play", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Button_addLayers", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Button_addBase", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Button_baseBet", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "recordBg", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "Node_autoPlay", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "Node_top", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "Node_center", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "Node_down", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "Node_bigWin", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "Node_prizeAmount", [_dec24], {
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

System.register("chunks:///_virtual/UfoModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './UfoDef.ts'], function (exports) {
  var _inheritsLoose, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0bd03Jy109ALbLdbb/yLnos", "UfoModel", undefined);
      var UfoModel = exports('UfoModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(UfoModel, _GameDef$BaseSington);
        function UfoModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = 0;
          _this.endBalance = 0;
          _this.isTest = false;
          _this.isAuto = false;
          _this.isReady = false;
          _this.gameStatus = eRunStatus.NONE;
          _this.gameInfo = null;
          _this.floorInfo = null;
          // curBet: number = 1;
          _this.curTotalBet = 0;
          // curTotalWin: number = 0;
          // totalBetList: { [index: string]: number } = {};
          // betList: { [index: string]: number[] } = {};
          _this.betAreaList = {};
          _this.betOrderList = [];
          _this.betOrderBack = [];
          _this.betChipInfo = {};
          _this.betInfo = [];
          _this.gameRecord = null;
          _this.winArea = [false, false, false, false, false, false, false, false, false, false];
          _this.autoBallList = [];
          _this._betRound = 0;
          _this.maxFloors = 16;
          _this.minFloors = 8;
          _this.curFloors = 8;
          _this.baseBetList = [1000, 5000, 10000, 50000, 100000, 500000];
          _this.curBaseIndex = 0;
          _this.curBet = 1000;
          _this.comUfoBetRecord = null;
          _this.betResult = [];
          _this.ballList = [];
          return _this;
        }
        var _proto = UfoModel.prototype;
        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {};
        return UfoModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './UfoDef.ts', './UfoUtils.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, AudioClip, Camera, view, Sprite, Rect, Size, UITransform, sys, gfx, assetManager, v3, instantiate, tween, UIOpacity, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, UfoUtils, Common;
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
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      Camera = module.Camera;
      view = module.view;
      Sprite = module.Sprite;
      Rect = module.Rect;
      Size = module.Size;
      UITransform = module.UITransform;
      sys = module.sys;
      gfx = module.gfx;
      assetManager = module.assetManager;
      v3 = module.v3;
      instantiate = module.instantiate;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      cBundle = module.cBundle;
      eEvent = module.eEvent;
    }, function (module) {
      UfoUtils = module.UfoUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "38479mhKEBP45tjANxugMF4", "UfoScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 移动端 3D 场景先渲染到纹理，再由旋转 90 度的 Sprite_scene 显示。以下是场景文件里两者的原始尺寸。
      var SCENE_RT_WIDTH = 1920;
      var SCENE_RT_HEIGHT = 1080;
      var SCENE_SPRITE_WIDTH = 2371.2;
      var SCENE_SPRITE_HEIGHT = 1334;
      var UfoScene = exports('default', (_dec = ccclass("UfoScene"), _dec2 = menu("game/UfoGame/UfoScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(AudioClip), _dec6 = property(Camera), _dec7 = property(Camera), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UfoScene, _Component);
        function UfoScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          _initializerDefineProperty(_this, "bgMusic", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mainCamera", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "uiCamera", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_scene", _descriptor6, _assertThisInitialized(_this));
          // 场景文件里主相机的垂直视野，首次适配时记录。
          _this._sceneFov = 0;
          return _this;
        }
        var _proto = UfoScene.prototype;
        /**
         * 让渲染纹理只覆盖屏幕上看得见的那部分。
         * Sprite_scene 比屏幕大得多：它旋转 90 度显示，宽 2371.2 对着只有 750 高的可见区域，
         * 原先 1920x1080 的纹理里只有中间约三分之一被显示，其余像素画了也看不见，低端机上帧率只有 20 出头。
         * 这里按可见比例同时收窄纹理和精灵：相机的垂直视野不变、宽高比随纹理变窄，画面与原先逐像素对应，清晰度不变。
         * 只在可见区域比精灵窄（宽度方向也被裁）时才需要按比例收窄垂直视野。
         */
        _proto.fitSceneTexture = function fitSceneTexture() {
          var rt = this.mainCamera.targetTexture;
          if (!rt) return;
          if (!this._sceneFov) this._sceneFov = this.mainCamera.fov;
          var visible = view.getVisibleSize();
          // 精灵的宽对应可见区域的高，精灵的高对应可见区域的宽。
          var u = Math.min(1, visible.height / SCENE_SPRITE_WIDTH);
          var v = Math.min(1, visible.width / SCENE_SPRITE_HEIGHT);
          var width = Math.ceil(SCENE_RT_WIDTH * u);
          var height = Math.ceil(SCENE_RT_HEIGHT * v);
          if (rt.width !== width || rt.height !== height) rt.resize(width, height);

          // 纹理尺寸变了，精灵帧的取样范围要跟着变，并重新赋值让精灵按新的帧生成顶点。
          var sprite = this.Sprite_scene.getComponent(Sprite);
          var frame = sprite.spriteFrame;
          frame.rect = new Rect(0, 0, width, height);
          frame.originalSize = new Size(width, height);
          sprite.spriteFrame = null;
          sprite.spriteFrame = frame;
          // 精灵尺寸按取整后的像素数换算，保证每个纹理像素在屏幕上的大小与原先完全一致。
          this.Sprite_scene.getComponent(UITransform).setContentSize(SCENE_SPRITE_WIDTH * width / SCENE_RT_WIDTH, SCENE_SPRITE_HEIGHT * height / SCENE_RT_HEIGHT);
          var half = Math.tan(this._sceneFov * Math.PI / 360) * (height / SCENE_RT_HEIGHT);
          this.mainCamera.fov = Math.atan(half) * 360 / Math.PI;
        };
        _proto.onLoad = function onLoad() {
          if (!sys.isMobile) {
            this.Sprite_scene.active = false;
            this.mainCamera.targetTexture = null;
          } else {
            this.Sprite_scene.active = true;
            this.Sprite_scene.angle = 90;
            this.fitSceneTexture();
            if (sys.isNative) {
              this.uiCamera.clearFlags = gfx.ClearFlagBit.COLOR;
            }
          }
          NetManager.instance.waitServiceSendData();
          UfoUtils.instance.bundle = assetManager.getBundle(cBundle);
          UfoUtils.instance.preLoad();
          AudioManager.instance.playGameMusic(this.bgMusic, true);
          this.onLoadGame();
        };
        _proto.start = function start() {
          if (sys.isMobile) {
            Common.showWait();
          }
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          if (sys.isMobile) this.fitSceneTexture();
          this.scheduleOnce(function () {
            //////////////////
            Common.transformSize(_this2._node_Game);
            if (!sys.isMobile) {
              _this2._node_Game.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              _this2._node_Game.angle = 90;
            }
          }, 0.05);
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          // if (ViewManager.instance.miniLayer) {
          //     ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          // }
          //        //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this3 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            Common.showWait();
            UfoUtils.instance.bundle.load("prefab/UfoGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this3.prefab_game = prefab;
              _this3.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this4 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }
            this.onResize();
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              Common.closeWait();
              if (UfoUtils.instance.isChangeOrientation()) {
                _this4._node_Game.scale = v3(750 / 1334, 750 / 1334, 1);
              }
            }).start();
            Common.closeWait();
            console.timeEnd("bundle.onLoadGame");
          }
        }
        //    //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return UfoScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiCamera", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_scene", [_dec8], {
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

System.register("chunks:///_virtual/UfoUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './UfoDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, assetManager, GameDef, AudioManager, cBundle, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      AudioClip = module.AudioClip;
      Node = module.Node;
      Label = module.Label;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      UIRenderer = module.UIRenderer;
      Button = module.Button;
      sys = module.sys;
      assetManager = module.assetManager;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      cBundle = module.cBundle;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9b30RD+XVJrK2UDoUJ+lyc", "UfoUtils", undefined);
      var cRed = [1, 3, 5, 7, 9, 12, 16, 14, 18, 32, 19, 21, 25, 34, 27, 36, 30, 23];
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var UfoUtils = exports('UfoUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(UfoUtils, _GameDef$BaseSington);
        function UfoUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = UfoUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/UfoGameView");
          this.bundle.preloadDir("prefab");
          this.bundle.preloadDir("sound");
        };
        _proto.asyncLoad = /*#__PURE__*/function () {
          var _asyncLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, type, onComplete) {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.bundle.load(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function asyncLoad(_x, _x2, _x3) {
            return _asyncLoad.apply(this, arguments);
          }
          return asyncLoad;
        }();
        _proto.asyncLoadDir = /*#__PURE__*/function () {
          var _asyncLoadDir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(parth, type, onComplete) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.bundle.loadDir(parth, type, function (error, assets) {
                      onComplete(error, assets);
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function asyncLoadDir(_x4, _x5, _x6) {
            return _asyncLoadDir.apply(this, arguments);
          }
          return asyncLoadDir;
        }();
        _proto.loadRes_icon = /*#__PURE__*/function () {
          var _loadRes_icon = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(cb) {
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = []; // arrHLoad.push(
                  //     this.asyncLoadDir("model/betArea", Texture2D, (err, arrTexture: Texture2D[]) => {
                  //         if (!err) {
                  //             for (const texture of arrTexture) {
                  //                 this.arrBetAreaTexture[texture.name] = texture;
                  //             }
                  //         }
                  //     })
                  // );
                  // arrHLoad.push(
                  //     this.asyncLoadDir("spine/effect/dynamic", sp.SkeletonData, (err, arrSpineData: sp.SkeletonData[]) => {
                  //         if (!err) {
                  //             for (const spineData of arrSpineData) {
                  //                 this.arrSkeletonData[spineData.name] = spineData;
                  //             }
                  //         }
                  //     })
                  // );
                  _context3.next = 3;
                  return Promise.all(arrHLoad);
                case 3:
                  if (cb) {
                    cb();
                  }
                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          function loadRes_icon(_x7) {
            return _loadRes_icon.apply(this, arguments);
          }
          return loadRes_icon;
        }();
        _proto.loadPopBuddle = function loadPopBuddle(path, callback1, callback2, isshowWait) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this4.bundle.load(path, Prefab, function (cur, total) {
              callback1(cur, total);
            }, function (err, GameLayer) {
              if (isshowWait) {
                Common.closeWait();
              }
              callback2(GameLayer);
              err ? reject(false) : resolve(true);
            });
          });
        };
        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
          });
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this5 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err || _this5.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this5.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this5.soundIDList[soundPath] = null;
              delete _this5.soundIDList[soundPath];
              if (cb) {
                cb();
              }
            });

            // audioEngine.setEffectsVolume(1);
          });
        };

        _proto.stopSound = function stopSound(soundPath) {
          var curSoundID = this.soundIDList[soundPath];
          if (curSoundID) {
            AudioManager.instance.stopSound(curSoundID);
            this.soundIDList[soundPath] = null;
            delete this.soundIDList[soundPath];
          }
        };
        _proto.stopAllSound = function stopAllSound() {
          var keys = Object.keys(this.soundIDList);
          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var key = _keys[_i];
            AudioManager.instance.stopSound(this.soundIDList[key]);
          }
        };
        _proto.updateLabelDI = function updateLabelDI(label, num) {
          var _this6 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this6.numberFormatD(num, 2);
            labelCom.string = "" + inter + digit + "K";
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.numberFormatDI = function numberFormatDI(num, digits, isFloat) {
          if (isFloat === void 0) {
            isFloat = true;
          }
          var inter = Common.numFormatInt(num);
          var digit = isFloat ? this.numberFormatFloatD(num, digits) : this.numberFormatD(num, digits);
          return "" + inter + digit + "K";
        };
        _proto.numberFormatD = function numberFormatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            return "";
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.numberFormatFloatD = function numberFormatFloatD(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            return ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
          }
          return "." + arrRate[1];
        };
        _proto.numberFormat = function numberFormat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          var digit = num - Math.floor(num);
          if (!arrRate[1] || digit < 1 / Math.pow(10, digits)) {
            rate = "" + arrRate[0];
          } else if (arrRate[1].length < digits) {
            //            // while (arrRate[1].length < digits) {
            //            //     arrRate[1] = arrRate[1].concat("0");
            //            // }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }

          //        // gts.Debug.Log("==numberFormat==" + rate);
          return rate;
        };
        _proto.numberFormatFloat = function numberFormatFloat(num, digits) {
          var rate = "" + num;
          var arrRate = rate.split(".");
          if (!arrRate[1]) {
            rate = arrRate[0] + ".00";
          } else if (arrRate[1].length < digits) {
            while (arrRate[1].length < digits) {
              arrRate[1] = arrRate[1].concat("0");
            }
            rate = arrRate[0] + "." + arrRate[1];
          } else if (arrRate[1].length > digits) {
            arrRate[1] = arrRate[1].substring(0, digits);
            rate = arrRate[0] + "." + arrRate[1];
          }
          return rate;
        };
        _proto.FxF = function FxF(f1, f2) {
          f1 += "";
          f2 += "";
          var arrF1 = f1.split(".");
          var arrF2 = f2.split(".");
          var f1Len = arrF1[1] ? arrF1[1].length : 0;
          var f2Len = arrF2[1] ? arrF2[1].length : 0;
          if (f1Len) {
            f1 = f1.replace(".", "");
          }
          if (f2Len) {
            f2 = f2.replace(".", "");
          }
          return f1 * f2 / Math.pow(10, f1Len + f2Len);
        };
        _proto.updateLabel = function updateLabel(label, num) {
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            labelCom.string = "" + num;
          }).to(0.1, {
            scale: v3(1.0, 1.0, 1.0)
          }).start();
        };
        _proto.updateLabelAddNf = function updateLabelAddNf(label, nums, isFloatFormat, curNums) {
          var _this7 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this7.numberFormatFloatD(curWin / 1000, 2.0) : _this7.numberFormatD(curWin / 1000, 2.0);
            label.string = "" + inter + digit + "K";
            //                        // label.string = isFloatFormat ? `${this.numberFormatFloat(curWin / 1000, 2.0)}K` : `${this.numberFormat(curWin / 1000, 2.0)}K`;
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelAdd = function updateLabelAdd(label, nums, isFloatFormat, curNums) {
          var _this8 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          if (curNums === void 0) {
            curNums = 0;
          }
          var destWin = nums;
          var curWin = curNums;
          var disWin = (nums - curWin) / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this8.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this8.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this9 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this9.numberFormatFloat(curWin, 0) : "" + _this9.numberFormat(curWin, 0);
          })).delay(2.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        }
        ////////////////////////////
        // getBetAreaTexture(num) {
        //     return this.arrBetAreaTexture[`${num}`];
        // }
        ;

        _proto.getFontData = function getFontData(name) {
          if (!this.arrFontData) {
            return null;
          }
          return this.arrFontData[name];
        };
        _proto.getSkeletonData = function getSkeletonData(index, isHorizontal) {
          if (!this.arrSkeletonData) {
            return null;
          }
          if (typeof index == "string") {
            return this.arrSkeletonData[index];
          }
          var strAni = "icon";
          var ret = this.arrSkeletonData[strAni];
          if (!ret) {
            return null;
          }
          return ret;
        };
        _proto.setBtnBetGray = function setBtnBetGray(btnNode, isGray) {
          var RenderComponent = btnNode.getComponent(UIRenderer);
          if (!RenderComponent) {
            return;
          }
          var parentNode = btnNode.parent.getComponent(Button);
          isGray ? RenderComponent.setMaterial(0, parentNode.grayMaterial) : RenderComponent.setMaterial(0, parentNode.normalMaterial);
        };
        _proto.isChangeOrientation = function isChangeOrientation() {
          return !sys.isMobile;
        };
        _proto.checkColor = function checkColor(result) {
          if (result == 0) {
            return 1;
          }
          for (var _i2 = 0, _cRed = cRed; _i2 < _cRed.length; _i2++) {
            var num = _cRed[_i2];
            if (result == num) {
              return 2;
            }
          }
          return 3;
        };
        _proto.getLNNum = function getLNNum(mid) {
          var midIndex = 0;
          for (var i = 0; i < arrIRound.length; i++) {
            if (arrIRound[i] == mid) {
              midIndex = i;
              break;
            }
          }
          var lastIndex = (midIndex + 36) % 37;
          var nextIndex = (midIndex + 1) % 37;
          return [arrIRound[lastIndex], arrIRound[nextIndex]];
        };
        return UfoUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UfoViewCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './UfoDef.ts', './UfoModel.ts', './UfoUtils.ts', './UfoBall.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, MeshRenderer, color, v3, tween, instantiate, Animation, ParticleUtils, Component, RigidBody, EventManager, eEvent, eSound, eConstDef, UfoModel, UfoUtils, UfoBall;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Camera = module.Camera;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      color = module.color;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Animation = module.Animation;
      ParticleUtils = module.ParticleUtils;
      Component = module.Component;
      RigidBody = module.RigidBody;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eSound = module.eSound;
      eConstDef = module.eConstDef;
    }, function (module) {
      UfoModel = module.UfoModel;
    }, function (module) {
      UfoUtils = module.UfoUtils;
    }, function (module) {
      UfoBall = module.UfoBall;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "16d6b6Oi5BAqbql/qhRZafC", "UfoViewCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UfoViewCtrl = exports('UfoViewCtrl', (_dec = ccclass("game/UfoGame/UfoViewCtrl"), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UfoViewCtrl, _Component);
        function UfoViewCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_stepRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_gunzi", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_ballRoot", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_hongseqiu", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_lanseqiu", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_lvseqiu", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_ufoRoot", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_feidieww", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_planeRoot", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_feidie", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_boxRoot", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_hezi", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Plane_light", _descriptor14, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UfoViewCtrl.prototype;
        ////////////////////////////////////////////
        _proto.onLoad = function onLoad() {
          this.X_hongseqiu.active = false;
          this.X_lanseqiu.active = false;
          this.X_lvseqiu.active = false;
        };
        _proto.start = function start() {
          this.X_feidie.getComponent(MeshRenderer).material.setProperty("mainColor", color(150, 150, 150, 255));
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.on(eEvent.onDoUFOFly, this.onDoUFOFly, this);
          EventManager.instance.on(eEvent.onUpdateStep, this.onUpdateStep, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onDoUFOFly, this.onDoUFOFly, this);
          EventManager.instance.off(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.off(eEvent.onUpdateStep, this.onUpdateStep, this);
          this.unschedule(this.doUFOFloat);
        };
        _proto.onDoUFOFly = function onDoUFOFly() {
          this.doUFOFly();
          this.doUFOFloat();
          this.schedule(this.doUFOFloat, 3);
        };
        _proto.doUFOFly = function doUFOFly() {
          var _this2 = this;
          var arrPos = [v3(-2.5, 3.5, 0.2), v3(0, 0, 0), v3(0, 2.8, 0)];
          var arrEulerAngles = [v3(0, 0, -12), v3(-25, 0, -12), v3(-7, 0, 0)];
          var arrScale = [v3(0.25, 0.25, 0.25), v3(1.5, 1.5, 1.5), v3(1, 1, 1)];
          this.Node_ufoRoot.position = arrPos[0];
          this.Node_ufoRoot.eulerAngles = arrEulerAngles[0];
          this.Node_ufoRoot.scale = arrScale[0];
          UfoUtils.instance.playSound(eSound.Begin);
          tween(this.Node_ufoRoot).parallel(tween(this.Node_ufoRoot).to(2, {
            scale: arrScale[1],
            eulerAngles: arrEulerAngles[1]
          }), tween(this.Node_ufoRoot).bezierTo3(2, arrPos[0], v3(arrPos[1].x + 2, arrPos[0].y, arrPos[0].z), v3(arrPos[1].x + 3, arrPos[1].y, arrPos[1].z), arrPos[1], {
            easing: "cubicOut"
          })).parallel(tween(this.Node_ufoRoot).to(1, {
            scale: arrScale[2],
            eulerAngles: arrEulerAngles[2]
          }), tween(this.Node_ufoRoot).bezierTo3(1, arrPos[1], v3(arrPos[1].x - 3, arrPos[1].y, arrPos[1].z), v3(arrPos[2].x - 2, arrPos[2].y, arrPos[2].z), arrPos[2], {
            easing: "cubicOut"
          })).call(function () {
            EventManager.instance.emit(eEvent.onGmaeViewStart);
          }).delay(0.5).call(function () {
            _this2.Node_planeRoot.active = true;
            _this2.Node_boxRoot.active = true;
            _this2.Node_stepRoot.active = true;
            for (var _iterator = _createForOfIteratorHelperLoose(_this2.Node_stepRoot.children), _step; !(_step = _iterator()).done;) {
              var child = _step.value;
              child.position = v3(child.position.x, child.position.y, -1.5);
            }
            for (var i = UfoModel.instance.curFloors - 1; i >= 0; i--) {
              var maxCounts = 3 + i;
              for (var j = 0; j < maxCounts; j++) {
                var X_step = _this2.Node_stepRoot.getChildByName("X_step_" + i + "_" + j);
                if (X_step) {
                  tween(X_step).delay(i * 0.1).to(0.1, {
                    position: v3(X_step.position.x, X_step.position.y, 0.1)
                  }).start();
                }
              }
            }
          }).start();
        };
        _proto.doUFOFloat = function doUFOFloat() {
          var toPos = v3(Math.random() * 0.3 - 0.15, Math.random() * 0.05 - 0.025, Math.random() * 0.3 - 0.15);
          tween(this.X_feidieww).parallel(tween(this.X_feidieww).by(3, {
            eulerAngles: v3(0, 360, 0)
          }), tween(this.X_feidieww).to(1.5, {
            position: toPos
          }).to(1.5, {
            position: v3(0, 0, 0)
          })).start();
        };
        _proto.onUpdateStep = function onUpdateStep() {
          var totalH = eConstDef.disH * 7;
          var totalW = eConstDef.disW * 9;
          var curDisH = totalH / (UfoModel.instance.curFloors - 1);
          var curDisW = totalW / (UfoModel.instance.curFloors + 1);
          var scale = 8 / UfoModel.instance.curFloors;
          gts.Debug.Log("=totalH=" + totalH + "==totalW=" + totalW + "==curDisH=" + curDisH + "==curDisW=" + curDisW + "=");
          for (var _i = 0; _i < UfoModel.instance.curFloors; _i++) {
            var _maxCounts = 3 + _i;
            var _halfIndex = _maxCounts / 2;
            for (var j = 0; j < _maxCounts; j++) {
              var X_step = this.Node_stepRoot.getChildByName("X_step_" + _i + "_" + j);
              if (!X_step) {
                X_step = instantiate(this.X_gunzi);
                X_step.active = true;
                X_step.name = "X_step_" + _i + "_" + j;
                this.Node_stepRoot.addChild(X_step);
              }
              var posX = (j - _halfIndex + 0.5) * curDisW;
              var posY = eConstDef.stepStartPos.y - _i * curDisH;
              X_step.position = v3(posX, posY, 0.1);
              X_step.scale = v3(scale, 1.25, scale);
            }
          }
          var i = UfoModel.instance.curFloors;
          var maxCounts = 3 + i;
          for (var _j = 0; _j < maxCounts; _j++) {
            var _X_step = this.Node_stepRoot.getChildByName("X_step_" + i + "_" + _j);
            if (_X_step) {
              _X_step.destroyFromParent();
            }
          }
          this.X_hongseqiu.scale = v3(scale, scale, scale);
          this.X_lanseqiu.scale = v3(scale, scale, scale);
          this.X_lvseqiu.scale = v3(scale, scale, scale);

          /////box
          var maxBoxs = UfoModel.instance.curFloors + 1;
          var halfIndex = maxBoxs / 2;
          for (var _j2 = 0; _j2 < maxBoxs; _j2++) {
            var X_hezi = this.Node_boxRoot.getChildByName("X_hezi_" + _j2);
            if (!X_hezi) {
              X_hezi = instantiate(this.X_hezi);
              X_hezi.active = true;
              X_hezi.name = "X_hezi_" + _j2;
              this.Node_boxRoot.addChild(X_hezi);
            }
            var _posX = (_j2 - halfIndex + 0.5) * curDisW;
            var _posY = -0.23;
            X_hezi.position = v3(_posX, _posY, 0.1);
            X_hezi.scale = v3(scale, scale, 1);
            for (var _iterator2 = _createForOfIteratorHelperLoose(X_hezi.children), _step2; !(_step2 = _iterator2()).done;) {
              var heZi = _step2.value;
              if (heZi.name != "win_light") {
                heZi.getComponent(Animation).stop();
                heZi.getComponent(MeshRenderer).material.setProperty("emissive", color(0, 0, 0, 255));
              } else {
                for (var _iterator3 = _createForOfIteratorHelperLoose(heZi.children), _step3; !(_step3 = _iterator3()).done;) {
                  var win = _step3.value;
                  ParticleUtils.stop(win);
                }
              }
            }
          }
          if (this.Node_boxRoot.children.length > maxBoxs) {
            for (var _j3 = maxBoxs; _j3 < this.Node_boxRoot.children.length; _j3++) {
              var _X_hezi = this.Node_boxRoot.getChildByName("X_hezi_" + _j3);
              if (_X_hezi) {
                _X_hezi.destroyFromParent();
              }
            }
          }

          //////////////
        };

        _proto.onRunStart = /*#__PURE__*/function () {
          var _onRunStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ballInfo, prizeAmount) {
            var nodeBall, newBall, scale, arrChildName, feidie_light;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  nodeBall = ballInfo.ball == 1 ? this.X_lvseqiu : ballInfo.ball == 2 ? this.X_lanseqiu : this.X_hongseqiu;
                  newBall = instantiate(nodeBall);
                  newBall.active = true;
                  newBall.getComponent(UfoBall).ballInfo = ballInfo;
                  newBall.getComponent(UfoBall).prizeAmount = prizeAmount;
                  this.Node_ballRoot.addChild(newBall);
                  scale = 8 / UfoModel.instance.curFloors;
                  newBall.scale = v3(scale, scale, scale);
                  newBall.getComponent(RigidBody).clearState();
                  newBall.position = v3(Math.random() * 0.15 - 0.15, 1.8, 0); //Math.random() * 0.15 - 0.15
                  newBall.getComponent(RigidBody).useGravity = true;
                  arrChildName = ["green", "blue", "red"];
                  feidie_light = this.X_feidieww.getChildByName("feidie_light").getChildByName(arrChildName[ballInfo.ball - 1]);
                  feidie_light.active = true;
                  ParticleUtils.stop(feidie_light);
                  ParticleUtils.play(feidie_light);

                // let arrColor = [color(109, 109, 109, 255), color(154, 219, 56, 255), color(54, 104, 94, 255), color(121, 28, 28, 255)];
                // this.Plane_light.getComponent(MeshRenderer).material.setProperty("color", arrColor[ballInfo.ball]);

                // Tween.stopAllByTarget(this.Plane_light);
                // tween(this.Plane_light)
                //     .delay(3)
                //     .call(() => {
                //         this.Plane_light.getComponent(MeshRenderer).material.setProperty("color", arrColor[0]);
                //     })
                //     .start();
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRunStart(_x, _x2) {
            return _onRunStart.apply(this, arguments);
          }
          return onRunStart;
        }();
        return UfoViewCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_stepRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "X_gunzi", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_ballRoot", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "X_hongseqiu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "X_lanseqiu", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "X_lvseqiu", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_ufoRoot", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "X_feidieww", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_planeRoot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "X_feidie", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "Node_boxRoot", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "X_hezi", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Plane_light", [_dec15], {
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

System.register("chunks:///_virtual/UIGameRecordLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, find, Label, instantiate, color, Component, NetManager, ConfigManager, EventManager, Common, DataManager, UserKey;
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
      find = module.find;
      Label = module.Label;
      instantiate = module.instantiate;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d9e87t79ZRHEr+sz5lHIWru", "UIGameRecordLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UIGameRecordLayer = exports('default', (_dec = ccclass("UIGameRecordLayer"), _dec2 = menu("game/UfoGame/UIGameRecordLayer"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIGameRecordLayer, _Component);
        function UIGameRecordLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_item", _descriptor2, _assertThisInitialized(_this));
          _this._gameType = void 0;
          _this._curPage = 1;
          _this._pageSize = 6;
          _this._lastPage = 1;
          _this.next_btn = null;
          _this.before_btn = null;
          return _this;
        }
        var _proto = UIGameRecordLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.next_btn = find("bg/next_btn", this.node);
          this.before_btn = find("bg/before_btn", this.node);
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        _proto.setGameType = function setGameType(gameType, pageSize) {
          if (pageSize === void 0) {
            pageSize = 8;
          }
          this._gameType = gameType;
          this._pageSize = pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: 0,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onBefore = function onBefore() {
          this._lastPage = this._curPage;

          //        //上一页
          this._curPage = this._curPage - 1;
          if (this._curPage < 1) {
            this._curPage = 1;
          }
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.onNext = function onNext() {
          this._lastPage = this._curPage;
          this._curPage = this._curPage + 1;
          var start = (this._curPage - 1) * this._pageSize;
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getRecord, {
            Offset: start,
            PageSize: this._pageSize,
            RecordType: this._gameType
          });
        };
        _proto.showRecordLayerByPage = function showRecordLayerByPage(data) {
          if (!data || !data.BetRecord || data.BetRecord.length == 0) {
            this._curPage = this._lastPage;
            this.next_btn.active = false;
            return;
          }
          find("bg/content_bg/page", this.node).getComponent(Label).string = "Trang:" + this._curPage;
          this.before_btn.active = this._curPage != 1;
          this.next_btn.active = data.NextPage;
          gts.Debug.Log("=Record dataList=" + JSON.stringify(data));
          this.content.removeAllChildren();
          var dataList = data.BetRecord;
          for (var i = 0; i < dataList.length; ++i) {
            var item = instantiate(this.node_item);
            item.active = true;
            item.parent = this.content;
            var sdata = dataList[i];
            var bg = find("bg", item);
            bg.active = i % 2 == 1;
            var date = Common.getTimeFormat(sdata.CreateAt);
            item.getChildByName("bg").active = i % 2 == 1;
            item.getChildByName("time_date").getComponent(Label).string = date.date;
            item.getChildByName("time_scond").getComponent(Label).string = date.time;
            item.getChildByName("winNum").getComponent(Label).string = Common.numFormat(sdata.Income);
            if (sdata.Income > 0) {
              item.getChildByName("winNum").getComponent(Label).string = "+" + item.getChildByName("winNum").getComponent(Label).string;
            }
            item.getChildByName("winNum").getComponent(Label).color = sdata.Income > 0 ? color(0xff, 0, 0, 255) : color(0x68, 0xf5, 0x01, 255);
            item.getChildByName("touzhu_num").getComponent(Label).string = Common.numFormat(sdata.BetAmount);

            //            //改为开奖结果
            var strResult = Common.getRecordResult(sdata);
            item.getChildByName("yue_num").getComponent(Label).string = sdata.GameType == "cardLieng" ? "-" : strResult;
            item.getChildByName("platform").getComponent(Label).string = DataManager.instance.getUserDataForKey(UserKey.PLATFORM) || "";
            item.getChildByName("gameId").getComponent(Label).string = sdata.GameNo;

            //            // let lbl_num = find("lbl_num", item).getComponent(Label); //期号
            //            // // lbl_num.string = tempData.GameNo;
            //            // lbl_num.string = Common.setGameNo(tempData.GameNo);

            //            // let lbl_gold = find("lbl_gold", item).getComponent(Label); //改为开奖结果
            //            // let strResult = Common.getRecordResult(tempData);
            //            // lbl_gold.string = this._gameType == "cardLieng" ? "-" : strResult;

            //            // let lbl_time = find("lbl_time", item).getComponent(Label); //下注时间
            //            // let lbl_date = find("lbl_date", item).getComponent(Label); //下注时间
            //            // let date = Common.getTimeFormat(tempData.CreateAt);
            //            // lbl_time.string = date.time;
            //            // lbl_date.string = date.date;

            //            // let lbl_bet = find("lbl_bet", item).getComponent(Label); //底注
            //            // lbl_bet.string = "" + Common.numFormat(tempData.BetAmount);

            //            // let lbl_result = find("lbl_result", item).getComponent(Label); //盈利
            //            // let str: string = "";
            //            // if (tempData.Income > 0) {
            //            //     str = "+" + Common.numFormat(tempData.Income);
            //            //     lbl_result.node.color = color(255, 0, 0, 255);
            //            // } else if (tempData.Income <= 0) {
            //            //     str = "" + Common.numFormat(tempData.Income);
            //            //     lbl_result.node.color = color(0x68, 0xf5, 0x01, 255);
            //            // }
            //            // lbl_result.string = str;
          }
        };

        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getRecord) {
            if (data.Data.RecordType == this._gameType) {
              this.showRecordLayerByPage(data.Data);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getRecord, this.recvData, this);
        };
        return UIGameRecordLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_item", [_dec4], {
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

System.register("chunks:///_virtual/UIHelpPumping.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, NetManager, ConfigManager, EventManager, i18n;
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
      NetManager = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "3d394XgpspBcaC9aCBZ79v5", "UIHelpPumping", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UIHelpPumping = exports('UIHelpPumping', (_dec = ccclass("UIHelpPumping"), _dec2 = menu("game/UfoGame/UIHelpPumping"), _dec3 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIHelpPumping, _Component);
        function UIHelpPumping() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameType", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIHelpPumping.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.sendOnlineData(ConfigManager.getInstance().protocolHall.getPumping, {
            gameName: this.gameType
          });

          // if (!Common.checkStandard()) {
          //     this.node.scale = v3(750 / 1080, 750 / 1080, 1);
          // }
        };

        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().protocolHall.getPumping, this.recvData, this);
        };
        _proto.recvData = function recvData(data) {
          if (data.cmd == ConfigManager.getInstance().protocolHall.getPumping) {
            // console.log("this.txt_content", data.Data);

            var title = i18n.getGameName(this.gameType);
            var num = data.Data.Pumping;
            var str = i18n.t("helpPumping", title, num);
            this.txt_content.string = str;
            if (!data.Data.Pumping) {
              this.txt_content.node.active = false;
            }
          }
        };
        return UIHelpPumping;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "gameType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIPlaneLight.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "fbd15NkeelD748fYzrvLuIh", "UIPlaneLight", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UIPlaneLight = exports('UIPlaneLight', (_dec = ccclass("UIPlaneLight"), _dec2 = menu("game/UfoGame/UIPlaneLight"), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIPlaneLight, _Component);
        function UIPlaneLight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cameraNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_feidieww", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIPlaneLight.prototype;
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          var pos = this.X_feidieww.position;
          this.node.setPosition(pos.x, pos.y - 5, pos.z);
        };
        return UIPlaneLight;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "X_feidieww", [_dec4], {
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

System.register("chunks:///_virtual/UISettingLayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UpdateManager.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Component, UpdateManager, AudioManager;
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
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      UpdateManager = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "27a4enY/9ZBD4Keite7+ZwF", "UISettingLayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var UISettingLayer = exports('default', (_dec = ccclass("UISettingLayer"), _dec2 = menu("game/UfoGame/UISettingLayer"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UISettingLayer, _Component);
        function UISettingLayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_musicOpen", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_musicClose", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_audioEffectOpen", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_audioEffectClose", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_version", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UISettingLayer.prototype;
        _proto.onLoad = function onLoad() {
          this.txt_version.string = UpdateManager.instance.getVersion();
          this.node_musicOpen.active = AudioManager.instance._soundMusic;
          this.node_musicClose.active = !AudioManager.instance._soundMusic;
          this.node_audioEffectOpen.active = AudioManager.instance._soundEffect;
          this.node_audioEffectClose.active = !AudioManager.instance._soundEffect;
        };
        _proto.onMusic = function onMusic() {
          AudioManager.instance.setMusicStatus(!AudioManager.instance._soundMusic);
          this.node_musicClose.active = !this.node_musicClose.active;
          this.node_musicOpen.active = !this.node_musicOpen.active;
        };
        _proto.onAudioEffect = function onAudioEffect() {
          AudioManager.instance.setSoundStatus(!AudioManager.instance._soundEffect);
          this.node_audioEffectOpen.active = !this.node_audioEffectOpen.active;
          this.node_audioEffectClose.active = !this.node_audioEffectClose.active;
        };
        return UISettingLayer;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_musicOpen", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_musicClose", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_audioEffectOpen", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_audioEffectClose", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_version", [_dec7], {
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
  r('virtual:///prerequisite-imports/UfoGame', 'chunks:///_virtual/UfoGame'); 
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