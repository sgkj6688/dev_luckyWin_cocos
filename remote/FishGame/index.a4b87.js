System.register("chunks:///_virtual/aniClip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _createClass, _initializerDefineProperty, cclegacy, _decorator;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _createClass = module.createClass;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "04637968JpIsrYw9oRhVbZ8", "aniClip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AniClip = exports('AniClip', (_dec = ccclass("AniClip"), _dec2 = property({
        visible: function visible() {
          if (this.loopPlay != this._isLoop) {
            this._isLoop = this.loopPlay;
            this.oncePlay = this.loopPlay;
          }
          return true;
        }
      }), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function AniClip() {
          _initializerDefineProperty(this, "clipName", _descriptor, this);
          _initializerDefineProperty(this, "startFrame", _descriptor2, this);
          this._startTime = null;
          _initializerDefineProperty(this, "endFrame", _descriptor3, this);
          this._endTime = null;
          _initializerDefineProperty(this, "oncePlay", _descriptor4, this);
          this._isLoop = false;
          _initializerDefineProperty(this, "loopPlay", _descriptor5, this);
        }
        var _proto = AniClip.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {}

        //    // update (dt) {}
        ;

        _createClass(AniClip, [{
          key: "startTime",
          get: function get() {
            return this._startTime ? this._startTime : this._startTime = this.startFrame * 1000 / 30;
          }
        }, {
          key: "endTime",
          get: function get() {
            return this._endTime ? this._endTime : this._endTime = this.endFrame * 1000 / 30;
          }
        }]);
        return AniClip;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "clipName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startFrame", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "endFrame", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "oncePlay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "loopPlay", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AnimationSet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './aniClip.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Light, SkeletalAnimation, Component, AniClip;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Light = module.Light;
      SkeletalAnimation = module.SkeletalAnimation;
      Component = module.Component;
    }, function (module) {
      AniClip = module.AniClip;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "d1c5da4JrpBW4X9zAziuKYr", "AnimationSet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        executeInEditMode = _decorator.executeInEditMode,
        playOnFocus = _decorator.playOnFocus,
        disallowMultiple = _decorator.disallowMultiple;
      var AnimationSet = exports('default', (_dec = ccclass("AnimationSet"), _dec2 = menu("game/fishGame/AnimationSet"), _dec3 = property(), _dec4 = property([AniClip]), _dec(_class = _dec2(_class = executeInEditMode(_class = playOnFocus(_class = disallowMultiple(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(AnimationSet, _Component);
        function AnimationSet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "totalTime", _descriptor, _assertThisInitialized(_this));
          //    // @property()
          //    // totalFrame: number = 0;
          _initializerDefineProperty(_this, "arrAniClip", _descriptor2, _assertThisInitialized(_this));
          _this._playOnLoad = false;
          return _this;
        }
        var _proto = AnimationSet.prototype;
        _proto.onLoad = function onLoad() {
          {
            this.node.removeComponent(Light);
          }
          this.getTotalTimes();

          // let mat = this.node.getChildByName("body").getComponent(SkinnedMeshRenderer).getSharedMaterial(0);
          // mat.setProperty("offSet", Math.random() * 512 + 64, 0);
        };

        _proto.getTotalTimes = function getTotalTimes() {
          var _SkeletonAnimation = this.node.getComponent(SkeletalAnimation);
          if (_SkeletonAnimation && _SkeletonAnimation.defaultClip) {
            this.totalTime = _SkeletonAnimation.defaultClip.duration * 1000;
          }
        };
        _proto.start = function start() {
          this.getTotalTimes();
        };
        _proto.update = function update(dt) {};
        _proto.playSwim = function playSwim() {
          var _this3 = this;
          var doPlay = function doPlay() {
            var aniClip = _this3.arrAniClip[0];
            var _SkeletonAnimation = _this3.node.getComponent(SkeletalAnimation);
            _SkeletonAnimation.getState(aniClip.clipName).time = aniClip.startTime / 1000;
            _SkeletonAnimation.play(aniClip.clipName);
            _this3.scheduleOnce(function () {
              if (!_SkeletonAnimation) {
                return;
              }
              _SkeletonAnimation.stop();
              doPlay();
            }, (aniClip.endTime - aniClip.startTime) / 1000);
          };
          doPlay();
        };
        return AnimationSet;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "totalTime", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "arrAniClip", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class) || _class) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CameraFit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, view, Vec3, Component;
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
      view = module.view;
      Vec3 = module.Vec3;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "60029/6N9hLHqN45GO/91BQ", "CameraFit", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CameraFit = exports('CameraFit', (_dec = ccclass("CameraFit"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CameraFit, _Component);
        function CameraFit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cameraComponent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvasComponent", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = CameraFit.prototype;
        _proto.onLoad = function onLoad() {
          this.onResizeCamera();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResizeCamera, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResizeCamera, this);
        };
        _proto.onResizeCamera = function onResizeCamera() {
          var _this2 = this;
          this.scheduleOnce(function () {
            if (_this2.cameraComponent && _this2.canvasComponent) {
              var size = view.getVisibleSize();
              _this2.cameraComponent.orthoHeight = size.height / 2;
              var _worldPos = new Vec3();
              _this2.canvasComponent.node.getWorldPosition(_worldPos);
              _this2.cameraComponent.node.setWorldPosition(_worldPos.x, _worldPos.y, 1000);
            }
          }, 0.1);
        };
        return CameraFit;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cameraComponent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "canvasComponent", [_dec3], {
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

System.register("chunks:///_virtual/ColliderNotify.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishBullet.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, BoxCollider2D, Contact2DType, Component, FishBullet;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      BoxCollider2D = module.BoxCollider2D;
      Contact2DType = module.Contact2DType;
      Component = module.Component;
    }, function (module) {
      FishBullet = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "041e6A1fOdLa6aABmoOI8cG", "ColliderNotify", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ColliderNotify = exports('default', (_dec = ccclass("ColliderNotify"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ColliderNotify, _Component);
        function ColliderNotify() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._notify = function () {};
          _this._bindFish = null;
          return _this;
        }
        var _proto = ColliderNotify.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        _proto.start = function start() {
          this.node.getComponent(BoxCollider2D).on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter, this);
        };
        _proto.SetNotify = function SetNotify(cb, caller) {
          this._notify = cb ? caller ? cb.bind(caller) : cb : function () {};
        };
        _proto.BindFish = function BindFish(fish) {
          this._bindFish = fish;
        };
        //    // update (dt) {}
        //    /**
        //     * 当碰撞产生的时候调用
        //     * other 产生碰撞的另一个碰撞组件
        //     * self  产生碰撞的自身的碰撞组件
        //     */
        _proto.onCollisionEnter = function onCollisionEnter(self, other) {
          this._notify(self, other);
          other.node.getComponent(FishBullet).onCollisionEnter(other, self);
        };
        _createClass(ColliderNotify, [{
          key: "fid",
          get: function get() {
            return this._bindFish ? this._bindFish.fid : 0;
          }
        }, {
          key: "fish",
          get: function get() {
            return this._bindFish;
          }
        }]);
        return ColliderNotify;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffWaterWave_plane.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, MeshRenderer, Vec4, UITransform, v3, Component, size;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      MeshRenderer = module.MeshRenderer;
      Vec4 = module.Vec4;
      UITransform = module.UITransform;
      v3 = module.v3;
      Component = module.Component;
      size = module.size;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "c7e6b10Y4hO34lAlpD5i1Jy", "EffWaterWave_plane", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var EffWaterWave = exports('default', (_dec = requireComponent(MeshRenderer), _dec2 = property({
        displayName: "水平波动值",
        range: [5, 30]
      }), _dec3 = property({
        displayName: "垂直波动值",
        range: [5, 30]
      }), _dec4 = property({
        displayName: "纹理尺寸"
      }), _dec5 = property({
        type: MeshRenderer,
        visible: true
      }), ccclass(_class = _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EffWaterWave, _Component);
        function EffWaterWave() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "xrange", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yrange", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureSize", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_meshRenderer", _descriptor4, _assertThisInitialized(_this));
          _this.frameW = 0;
          _this.frameH = 0;
          return _this;
        }
        var _proto = EffWaterWave.prototype;
        // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          var mat = null;
          mat = this._meshRenderer.getSharedMaterial(0);

          // gts.Debug.LogInfo(`材质：${mat.name}`);
          mat.setProperty("xrange", this.xrange, 0);
          mat.setProperty("yrange", this.yrange, 0);
          if (this.textureSize.width > 0 && this.textureSize.height > 0) {
            mat.setProperty("resolution", new Vec4(this.textureSize.width, this.textureSize.height, 0, 0), 0);
          }
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.update = function update(dt) {
          var frameW = this.node.parent.getComponent(UITransform).width;
          var frameH = this.node.parent.getComponent(UITransform).height;
          if (frameW != this.frameW || frameH != this.frameH) {
            this.node.scale = v3(frameW * 0.1, this.node.scale.y, frameH * 0.1);
            this.frameW = frameW;
            this.frameH = frameH;
          }
        }

        // update (dt) {}
        ;

        return EffWaterWave;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xrange", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yrange", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "textureSize", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return size(0, 0);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_meshRenderer", [_dec5], {
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

System.register("chunks:///_virtual/EffWaterWave.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Vec4, Component, size;
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
      Sprite = module.Sprite;
      Vec4 = module.Vec4;
      Component = module.Component;
      size = module.size;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "2ecf5sMFWpNoZ2uNcQwhUoq", "EffWaterWave", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var EffWaterWave = exports('default', (_dec = ccclass("EffWaterWave"), _dec2 = requireComponent(Sprite), _dec3 = property({
        displayName: "水平波动值",
        range: [5, 30]
      }), _dec4 = property({
        displayName: "垂直波动值",
        range: [5, 30]
      }), _dec5 = property({
        displayName: "纹理尺寸"
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EffWaterWave, _Component);
        function EffWaterWave() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "xrange", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "yrange", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "textureSize", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = EffWaterWave.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          var mat = null;
          var spr = this.getComponent(Sprite);
          if (spr) {
            mat = spr.getMaterial(0);
          }

          //        // gts.Debug.LogInfo(`材质：${mat.name}`);
          if (mat.name.startsWith("water_wave")) {
            mat.setProperty("xrange", this.xrange);
            mat.setProperty("yrange", this.yrange);
            if (this.textureSize.width > 0 && this.textureSize.height > 0) {
              mat.setProperty("resolution", new Vec4(this.textureSize.width, this.textureSize.height, 0, 0));
            }
          }
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        _createClass(EffWaterWave, [{
          key: "sprFrame",
          get: function get() {
            return this.getComponent(Sprite).spriteFrame;
          }
        }]);
        return EffWaterWave;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xrange", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "yrange", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "textureSize", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return size(0, 0);
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Fish_specialTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './AutoEventNode.ts', './FishDef.ts', './FishDataMgr.ts', './FishSound.ts', './FishMsgSender.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, Font, Label, UITransform, tween, UIOpacity, isValid, v3, Common, AutoEventNode, FishDef, FishDataMgr, FishSound, FishMsgSender;
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
      Font = module.Font;
      Label = module.Label;
      UITransform = module.UITransform;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      isValid = module.isValid;
      v3 = module.v3;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      FishMsgSender = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "5ffe5V1v2BDuIOiPyykMQ3z", "Fish_specialTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Fish_specialTip = exports('default', (_dec = ccclass("FishSpecialTip"), _dec2 = property({
        displayName: "spine动画组件",
        type: sp.Skeleton,
        visible: true
      }), _dec3 = property(Font), _dec4 = property(Font), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(Fish_specialTip, _AutoEventNode);
        function Fish_specialTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "_skeleton", _descriptor, _assertThisInitialized(_this));
          _this._uid = null;
          _this.killType = null;
          _initializerDefineProperty(_this, "font3", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "font4", _descriptor3, _assertThisInitialized(_this));
          _this._totalGold = 0;
          return _this;
        }
        var _proto = Fish_specialTip.prototype;
        _proto.onload = function onload() {
          var Label_gold = this.node.getChildByName("Label_gold");
          Label_gold.active = false;
          Label_gold.getComponent(Label).string = "";
        };
        _proto.onDisable = function onDisable() {
          this.offEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN + this._uid);
          this.offEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + this._uid);
        };
        _proto.start = function start() {
          var _this2 = this;
          this._totalGold = 0;

          //        // gts.Debug.Log("========spine动画组件=========");
          if (!this._skeleton) {
            this._skeleton = this.node.getComponent(sp.Skeleton);
          }
          this.OnEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN + this._uid, function (data) {
            //                // gts.Debug.Log("========this._fishType + 101=========" + this._fishType);
            var killType = data[1];
            if (!killType || _this2.killType != killType) {
              //                    // gts.Debug.Log("========this.killType=========" + this.killType);
              return;
            }

            //                // gts.Debug.Log("===ON_SPECIALTIP_TAKEWIN===" + JSON.stringify(data[0]));

            _this2._totalGold += data[0];

            //                //
            Fish_specialTip._zIndex++;
            _this2.node.getComponent(UITransform).priority = Fish_specialTip._zIndex;
            FishSound.PlaySound(FishDef.Sound.COINS_COUNTING);
            var sGold = Common.numFormat("" + _this2._totalGold);
            var Label_gold = _this2.node.getChildByName("Label_gold");
            Label_gold.active = true;
            Label_gold.getComponent(Label).string = "+" + sGold;
          }, this);
          this.OnEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + this._uid, function (data) {
            if (!data) {
              _this2.scheduleOnce(function () {
                if (_this2._uid == FishDataMgr.myUid) {
                  _this2.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
                }
                tween(_this2.node.getComponent(UIOpacity)).to(0.25, {
                  opacity: 0
                }).call(function () {
                  _this2.node.removeFromParent();
                }).start();
              });
              return;
            }
            var killType = data[1];
            if (!killType || _this2.killType != killType) {
              return;
            }

            //                // gts.Debug.Log("===ON_SPECIALTIP_TAKEWIN_END=+gold==" + JSON.stringify(data[0]));

            _this2._totalGold += data[0];

            //                // gts.Debug.Log("===ON_SPECIALTIP_TAKEWIN_END=+totalGold==" + JSON.stringify(this._totalGold));

            Fish_specialTip._zIndex++;
            _this2.node.getComponent(UITransform).priority = Fish_specialTip._zIndex;
            FishSound.PlaySound(FishDef.Sound.COINS_COUNTING);
            var sGold = Common.numFormat("" + _this2._totalGold);
            var Label_gold = _this2.node.getChildByName("Label_gold");
            Label_gold.active = true;
            Label_gold.getComponent(Label).string = "+" + sGold;
            if (_this2._uid == FishDataMgr.myUid) {
              _this2.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
              if (killType == FishDef.KillType.lunZhou) {
                FishMsgSender.Send_openLunZhou();
              }
            }
            _this2.scheduleOnce(function () {
              if (isValid(_this2.node)) {
                tween(_this2.node.getComponent(UIOpacity)).to(0.25, {
                  opacity: 0
                }).call(function () {
                  _this2.node.removeFromParent();
                }).start();
              }
            }, 1.5);
          }, this);
        };
        _proto.playIntro = function playIntro(uid, toPos, fishType, callback) {
          var _this3 = this;
          var soundPath = null;
          var strRoot = "";
          switch (fishType) {
            case FishDef.FishType.zhaDanXie:
              {
                soundPath = FishDef.Sound.BOMB_INTRO;
                strRoot = "baozha_";
                break;
              }
            case FishDef.FishType.dianZhuanXie:
              {
                soundPath = FishDef.Sound.DRILL_INTRO;
                strRoot = "zuantou_";
                break;
              }
            case FishDef.FishType.lunZhouXie:
              {
                soundPath = FishDef.Sound.JELLYFISH_INTRO;
                strRoot = "lunpan_";
                break;
              }
            case FishDef.FishType.shanDianShuiMu:
              {
                soundPath = FishDef.Sound.JELLYFISH_INTRO;
                strRoot = "dianshansm_";
                break;
              }
            case FishDef.FishType.leiSheXie:
              {
                soundPath = FishDef.Sound.LASER_INTRO;
                strRoot = "jiguang_";
                break;
              }
          }
          if (soundPath) {
            FishSound.PlaySound(soundPath);
          }
          this._uid = uid;
          this.killType = FishDataMgr.getKillType(fishType);
          if (fishType != FishDef.FishType.leiTingHuoPao) {
            this.scheduleOnce(function () {
              if (isValid(_this3.node)) {
                _this3.node.removeFromParent();
              }
            }, 30);
          }
          toPos.y = toPos.y > 0 ? toPos.y - 60 : toPos.y + 60;

          //        // gts.Debug.Log("====playIntro====this._fishType + 101=========" + this._fishType);

          if (FishDataMgr.myUid === uid) {
            if (fishType == FishDef.FishType.lunZhouXie) {
              this.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, true);
            }
            this._skeleton.setAnimation(0, strRoot + "intro", false);
            this._skeleton.setCompleteListener(function () {
              _this3._skeleton.setCompleteListener(null);
              _this3._skeleton.setAnimation(0, strRoot + "wait", true);
              tween(_this3.node).parallel(tween(_this3.node).to(0.25, {
                scale: _this3.node.scale.multiplyScalar(1)
              }), tween(_this3.node).to(0.5, {
                position: v3(toPos.x, toPos.y, 0)
              })).call(function () {
                if (callback) {
                  _this3.setFont();
                  callback();
                }
              }).start();
            });
          } else {
            this._skeleton.setAnimation(0, strRoot + "intro", false);
            this._skeleton.setAnimation(0, strRoot + "wait", true);
            this.node.position = v3(toPos.x, toPos.y, 0);
            if (callback) {
              this.setFont();
              callback();
            }
          }
        };
        _proto.setFont = function setFont() {
          var Label_gold = this.node.getChildByName("Label_gold");
          Label_gold.active = true;
          Label_gold.getComponent(Label).font = this._uid == FishDataMgr.myUid ? this.font3 : this.font4;
        };
        return Fish_specialTip;
      }(AutoEventNode), _class3._zIndex = 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "font3", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "font4", [_dec4], {
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

System.register("chunks:///_virtual/FishBullet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './ColliderNotify.ts', './FishDataMgr.ts', './FishDef.ts', './FishSound.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Enum, CCInteger, BoxCollider2D, Sprite, UIOpacity, Tween, UIRenderer, color, v3, tween, find, instantiate, sp, v2, UITransform, view, isValid, AutoEventNode, GUtil, ColliderNotify, FishDataMgr, FishDef, FishSound;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      CCInteger = module.CCInteger;
      BoxCollider2D = module.BoxCollider2D;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      UIRenderer = module.UIRenderer;
      color = module.color;
      v3 = module.v3;
      tween = module.tween;
      find = module.find;
      instantiate = module.instantiate;
      sp = module.sp;
      v2 = module.v2;
      UITransform = module.UITransform;
      view = module.view;
      isValid = module.isValid;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ColliderNotify = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishSound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "43b73hKGN9IHJxrZsF5J78W", "FishBullet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var speed = 1500;
      var speed_drill = 2000;
      var FishBullet = exports('default', (_dec = ccclass("FishBullet"), _dec2 = property({
        type: Enum(FishDef.CannonType),
        visible: true
      }), _dec3 = property({
        displayName: "钻头碰撞次数",
        visible: function visible() {
          return this._bulletType === FishDef.CannonType.special_dianZhuan;
        },
        type: CCInteger
      }), _dec4 = property({
        type: BoxCollider2D,
        visible: true
      }), _dec5 = property({
        type: Sprite,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishBullet, _AutoEventNode);
        function FishBullet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_bulletType", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_collider", _descriptor2, _assertThisInitialized(_this));
          _this._sprite = null;
          _this.isEnable = false;
          //    //
          _this._active = false;
          //    //解决突然切换瞄准点 子弹转向
          _this._curLock = null;
          //    // public counts: number = 0;
          _this.bid = void 0;
          _this.uid = void 0;
          _this.mult = void 0;
          _this.btkt = void 0;
          _this.bulletInfo = void 0;
          _this.lock = void 0;
          _this.lockFid = 0;
          _this.bulletAtlas = new Map();
          _this.holdGold = 0;
          _this.isTrace = false;
          _this.lastLockPos = null;
          _initializerDefineProperty(_this, "_spr", _descriptor3, _assertThisInitialized(_this));
          _this.isRotateCollids_drill = -1;
          return _this;
        }
        var _proto = FishBullet.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.OnEvent(FishDef.Event.ON_CATCH_TO_BULLET + this.bid, function (msg) {
            //            // this.counts++;
            //            // gts.Debug.Log(`#FishGame fishBullet 玩家捕获成功: ${JSON.stringify(msg)}`+this.counts);
            if (msg.fishID === _this2.lockFid) {
              _this2.lockFid = 0;
              _this2.lock = null;
            }
          });

          // this.collider.on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter, this);
        };

        _proto.collider_enable = function collider_enable(value) {
          if (this.collider) {
            this.collider.enabled = value;
          }
        };
        _proto.reuse = function reuse(msg) {
          var _this3 = this;
          msg = msg[0] || msg;
          this.isRotateCollids_drill = -1;
          this.node.getComponent(UIOpacity).opacity = FishDataMgr.myUid == msg.uid ? 255 : 125;
          if (msg.bulletType == FishDef.CannonType.special_dianZhuan) {
            this.node.getComponent(UIOpacity).opacity = 255;

            //            // find("Node_trail", this.node).active = true;
            var bullet = this.node.getChildByName("bullet");
            bullet.active = true;
            Tween.stopAllByTarget(bullet);
            bullet.angle = 270;
            bullet.getComponent(UIRenderer).color = color(255, 255, 255, 255);
            var Node_trail = this.node.getChildByName("Node_trail");
            Node_trail.setScale(v3(1.0, Node_trail.scale.y, 1));
            Node_trail.active = true;
            Node_trail.getComponent(UIOpacity).opacity = 0;
            tween(Node_trail.getComponent(UIOpacity)).to(1.0, {
              opacity: 255
            }).start();

            //            //定时旋转
            this.scheduleOnce(function () {
              _this3.doDrillRotate();
            }, 9);
          }
          this.lastLockPos = null;
          this.isTrace = false;
          this.lockFid = 0;
          this.lock = null;
          this._curLock = null;
          this.isEnable = true;
          this._active = true;
          this.uid = msg.uid;
          this.holdGold = msg.bulletGolds;
          this.node.scale = v3(1.0, 1.0, 1);

          //        // if (msg.bulletType === FishDef.CannonType.special_leiTingHuoPao) {
          //        //     this.node.scale = 1.5;
          //        // }

          this.bulType = msg.bulletType;
          this.node.angle = msg.offset + 90;
          this.collider_enable(true);

          //        //限制子弹数
          if (this.uid == FishDataMgr.myUid) {
            FishDataMgr._bullets++;
          }
        };
        _proto.doDrillRotate = function doDrillRotate() {
          //        //隐藏拖尾
          var Node_trail = this.node.getChildByName("Node_trail");
          Node_trail.active = false;

          //        //开始旋转
          var bullet = this.node.getChildByName("bullet");
          this.isRotateCollids_drill = 0;
          bullet.getComponent(UIRenderer).color = color(255, 0, 0, 255);
          tween(bullet).repeatForever(tween(bullet).to(2.0, {
            angle: 360
          })).start();
        };
        _proto.drillBomb = function drillBomb() {
          var _this4 = this;
          find("Node_trail", this.node).active = false;
          find("bullet", this.node).active = false;

          //        // let effect = find("effect", this.node);
          //        // effect.scale = 1;
          return new Promise(function (resolve, reject) {
            //            //爆炸
            var prefab = FishDataMgr.resHolder ? FishDataMgr.resHolder.getPrefabByName("Node_bomb") : null;
            if (prefab) {
              //                // gts.Debug.Log("开火发射--炸弹动效");
              FishSound.PlaySound(FishDef.Sound.BOMB_EFFECT);
              var tempBomb = instantiate(prefab);
              tempBomb.position = _this4.node.position;
              _this4.node.parent.addChild(tempBomb);
              tween(tempBomb).delay(0).call(function () {
                var spine = tempBomb.getComponent(sp.Skeleton);
                spine.setAnimation(0, "bomb_effect", false);
                spine.setCompleteListener(function () {
                  spine.setCompleteListener(null);
                  spine.node.destroyFromParent();
                });
              }).start();

              // this.node.getComponent(UIOpacity).opacity = 0;

              //                //请求群杀
              if (FishDataMgr.myUid == _this4.uid) {
                _this4.EmitEvent(FishDef.Event.ON_SCREEN_SHOCK);
                var pos = GUtil.Pos_L2W_V2(_this4.node);
                _this4.EmitEvent(FishDef.Event.ON_SPECIAL_CATCH_CALLBACK, {
                  fishType: FishDef.FishType.dianZhuanXie,
                  pos: pos
                });

                //                    //通知换炮
                _this4.EmitEvent(FishDef.Event.ON_SWITCH_TO_NOMAL_CANNON + _this4.uid);
              }
              resolve(true);
            }
          });
        };
        _proto.unuse = function unuse() {
          var Node_trail = this.node.getChildByName("Node_trail");
          if (Node_trail) {
            //            // gts.Debug.Log("====special_dianZhuan===-unuse-===");
            Node_trail.active = false;
          }
          this.lastLockPos = null;
          this._active = false;
          this.collider_enable(false);
          this.lockFid = 0;
          this.lock = null;
          this._curLock = null;
          this.isEnable = false;

          //        //限制子弹数
          if (this.uid && this.uid == FishDataMgr.myUid) {
            FishDataMgr._bullets--;
            //            // gts.Debug.Log("====FishDataMgr._bullets===--==="+FishDataMgr._bullets);
          }
        };

        _proto.SetLock = function SetLock(lock) {
          //        //! 钻头炮不允许追踪
          if (this._bulletType != FishDef.CannonType.special_dianZhuan) {
            this.collider_enable(lock ? false : true);
            this.lock = lock;
            this.lockFid = lock ? lock.fid : 0;
            this.isTrace = lock ? true : false;
            if (lock) {
              this._curLock = lock.curLock;
            }

            //            // gts.Debug.Log("====FishDataMgr.curLockFishID====SetLock==this.buID="+this.bid);
          }
        }
        //    /**
        //     * 当碰撞产生的时候调用
        //     * other 产生碰撞的另一个碰撞组件
        //     * self  产生碰撞的自身的碰撞组件
        //     */
        ;

        _proto.onCollisionEnter = function onCollisionEnter(self, other) {
          //        // gts.Debug.Log('on collision enter, 碰');
          //        //! 鱼潮中不碰撞
          if (FishDataMgr.ins.isSwitchScene) {
            return;
          }
          if (!this.collider || !this.collider.enabled) {
            return;
          }
          var cn = other.getComponent(ColliderNotify);
          if (cn.fish.state == FishDef.State.CATCHED || cn.fish.state == FishDef.State.DIE) {
            return;
          }
          var dis = other.size.y / 3;
          var pos = this.node.getPosition();
          var ang = this.node.angle;
          var end = FishDef.Util.GetDestination(v2(pos.x, pos.y), ang, dis);

          //        //! 请求捕获
          this.OnCrash(end, cn ? cn.fish : null);

          //        // gts.Debug.LogWarr("=bullet==onCollisionEnter====" + cn.fish.fishTypeId + "=bid==" + this.bid);
        };

        _proto.OnCrash = function OnCrash(pos, fishObj) {
          if (!this._active) {
            return;
          }
          FishDataMgr.EmitEvent(FishDef.Event.CREATE_FISHNET, {
            pos: pos,
            bullet: this,
            fishObj: fishObj
          });

          //        //! 回收 - 普通子弹才回收
          if (this._bulletType != FishDef.CannonType.special_dianZhuan) {
            this.doRecycle();
          }
          if (fishObj) {
            fishObj.OnHit();
          }
        };
        _proto.RecycleDrill = /*#__PURE__*/function () {
          var _RecycleDrill = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //        //钻头弹开始漂移--爆炸
                  if (this.bulType == FishDef.CannonType.special_dianZhuan) ;
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function RecycleDrill() {
            return _RecycleDrill.apply(this, arguments);
          }
          return RecycleDrill;
        }();
        _proto.doRecycle = /*#__PURE__*/function () {
          var _doRecycle = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this._active = false;
                  this.collider_enable(false);
                  if (FishDataMgr.resHolder) {
                    FishDataMgr.resHolder.RecycleNodeToPool(this.node);
                  }
                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function doRecycle() {
            return _doRecycle.apply(this, arguments);
          }
          return doRecycle;
        }();
        _proto.ReBound = function ReBound(dt, ang, end) {
          var _this5 = this;
          if (this._bulletType == FishDef.CannonType.special_dianZhuan && ang != this.node.angle && this.isRotateCollids_drill > -1) {
            this.isRotateCollids_drill++;

            //            // gts.Debug.Log("====this.isRotateCollids_drill===" + this.isRotateCollids_drill);
            if (this.isRotateCollids_drill > FishDef.DrillMaxCollids) {
              //                //移到中间
              tween(this.node).stop().to(0.5, {
                position: v3(0, 0, 0)
              }).to(0.25, {
                scale: this.node.scale.multiplyScalar(1.5)
              }).call(function () {
                //                        //爆炸
                _this5.drillBomb().then(function () {
                  _this5.doRecycle();
                });
              }).start();
            }
          }

          //        //旋转
          this.node.angle = ang;
          //        //移动
          this.node.setPosition(v3(end.x, end.y, end.z));
        };
        _proto.Trace = function Trace(dt) {
          if (!this.lock) {
            return;
          }
          this.lastLockPos = this.lock.node.getPosition();
          if (this._curLock) {
            //            //子弹追踪瞄准点
            var lockPos = this._curLock.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            this.lastLockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(lockPos);
          }
          var pos = this.node.getPosition();
          var distance = FishDef.Util.GetDistance(v2(pos.x, pos.y), v2(this.lastLockPos.x, this.lastLockPos.y));
          if (distance < 30) {
            //            //! 请求捕获
            this.lock.ReqCatch(this);
            this.OnCrash(v2(pos.x, pos.y), this.lock);
            return;
          }
          var angle = FishDef.Util.GetAngle(v2(pos.x, pos.y), v2(this.lastLockPos.x, this.lastLockPos.y));
          this.node.angle = angle;
          var move = this.useSpd * dt;
          var endPos = FishDef.Util.GetDestination(v2(pos.x, pos.y), angle, move);
          this.node.setPosition(v3(endPos.x, endPos.y, 0));
        };
        _proto.update = function update(dt) {
          if (!this._active || this._bulletType == FishDef.CannonType.special_dianZhuan && this.isRotateCollids_drill > FishDef.DrillMaxCollids) {
            return;
          }
          var pos = this.node.getPosition();
          var dis = this.useSpd * dt;
          var ang = this.node.angle;
          var end = GUtil.GetDestination(v2(pos.x, pos.y), ang, dis);

          //子弹越界反弹
          var height = view.getVisibleSize().height;
          var width = view.getVisibleSize().width;
          var isBounce = false;
          if (end.x > width / 2) {
            end.x = width / 2;
            ang = 180 - ang;
            isBounce = true;
          } else if (end.x < -width / 2) {
            end.x = -width / 2;
            ang = 180 - ang;
            isBounce = true;
          }
          if (end.y > height / 2) {
            end.y = height / 2;
            ang = -ang;
            isBounce = true;
          } else if (end.y < -height / 2) {
            end.y = -height / 2;
            ang = -ang;
            isBounce = true;
          }
          if (this.isTrace && (isBounce || !this.lock || !isValid(this.lock) || this.lock.state != FishDef.State.ALIVE)) {
            this.isTrace = false;
            this.collider.enabled = true;
            this.lockFid = 0;
            if (this.lock) {
              this.lock.switchLock();
            }
            this.lock = null;
          }

          //        //! 普通子弹才可以跟
          if (FishDef.CannonType.special_dianZhuan != this._bulletType && this.isTrace) {
            this.Trace(dt);
          } else {
            this.ReBound(dt, ang, end);
          }

          //        // if (!FishDataMgr.winRect.contains(v2(this.node.x, this.node.y))) {
          //        //     // this.doRecycle();

          //        //     gts.Debug.Log(`=doRecycle=bidList=${this.bid}`);
          //        //     return;
          //        // }
        };

        _createClass(FishBullet, [{
          key: "bulType",
          get: function get() {
            return this._bulletType;
          },
          set: function set(type) {
            this._bulletType = type;
          }
        }, {
          key: "collider",
          get: function get() {
            if (!this._collider) {
              var tmpnd = find("bullet", this.node);
              this._collider = tmpnd ? tmpnd.getComponent(BoxCollider2D) : null;
            }
            return this._collider;
          }
        }, {
          key: "bulletSprite",
          get: function get() {
            if (!this._sprite) {
              var tmpnd = find("bullet", this.node);
              this._sprite = tmpnd ? tmpnd.getComponent(Sprite) : null;
            }
            return this._sprite;
          }
        }, {
          key: "spr",
          get: function get() {
            return this._spr;
          }
        }, {
          key: "useSpd",
          get: function get() {
            var rSpeed = this._bulletType === FishDef.CannonType.special_dianZhuan ? speed_drill : speed;
            if (this.isRotateCollids_drill > -1) {
              rSpeed *= 0.75;
            }
            return rSpeed;
          }
        }]);
        return FishBullet;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_bulletType", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return FishDef.CannonType.nomal_1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bulType", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "bulType"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_collider", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_spr", [_dec5], {
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

System.register("chunks:///_virtual/FishBulletMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishBullet.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, find, UITransform, Sprite, AutoEventNode, GUtil, FishDataMgr, FishDef, FishBullet;
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
      v3 = module.v3;
      find = module.find;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishBullet = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "d4d513irTdA5YkER0LZJkI6", "FishBulletMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishBulletMgr = exports('default', (_dec = ccclass("FishBulletMgr"), _dec2 = property({
        type: Node,
        displayName: "渔网父节点"
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishBulletMgr, _AutoEventNode);
        function FishBulletMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "parentOfNet", _descriptor, _assertThisInitialized(_this));
          _this._isAllLoaded = false;
          _this._resHolder = null;
          _this._defaultBulletName = "bullet_0_0";
          _this._drillBulletName = "bullet_drill";
          _this._uid2Drills = {};
          return _this;
        }
        var _proto = FishBulletMgr.prototype;
        _proto.AllLoaded = function AllLoaded() {
          this._isAllLoaded = true;
        };
        _proto.Init = function Init(poolOpt) {
          this._resHolder = poolOpt;
        };
        _proto.AddDrillBullet = function AddDrillBullet(bullet, uid) {
          var arr = this._uid2Drills[uid];
          if (!arr) {
            arr = [];
            this._uid2Drills[uid] = arr;
          }
          arr.push(bullet);
        };
        _proto.ClearDrillBullet = function ClearDrillBullet(uid) {
          var arr = this._uid2Drills[uid];
          for (var i = 0; arr && i < arr.length; ++i) {
            var tmpnode = arr[i];
            tmpnode.RecycleDrill();
          }
          this._uid2Drills[uid] = [];

          //        // this.EmitEvent(FishDef.Event.ON_BULLET_DRILL_FINISHED, uid);
        };

        _proto.onLoad = function onLoad() {
          var _this2 = this;
          FishBulletMgr._ins = this;
          this.OnEvent(FishDef.Event.DO_SEND_BULLET, this.DoSendBullet);
          this.OnEvent(FishDef.Event.CREATE_FISHNET, this.AddFishNet);

          //        //! 玩家换炮
          this.OnEvent(FishDef.MsgID.S2C_EXCHANGE_CANNON, function (reMsg) {
            var msg = reMsg.Data;
            if (reMsg.Code && reMsg.Code != 0 || !msg) {
              return;
            }
            if (msg.cannonType !== FishDef.CannonType.special_dianZhuan) {
              _this2.ClearDrillBullet(msg.uid);
            }
          });

          //        //! 玩家离开--清理钻头弹
          this.OnEvent(FishDef.MsgID.S2C_PLAYER_LEAVE, function (reData) {
            var msg = reData.Data;
            if (msg) {
              _this2.ClearDrillBullet(msg.uid);
            }
          });
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          FishBulletMgr._ins = null;
        };
        _proto.start = function start() {};
        _proto.AddFishNet = function AddFishNet(data) {
          var _this3 = this;
          if (!data || !data.pos) {
            return;
          }
          var bulComm = data && data.bullet ? data.bullet.getComponent(FishBullet) : null;
          if (bulComm.bulType == FishDef.CannonType.special_leiTingHuoPao) {
            //            //爆炸
            var netObj = this._resHolder ? this._resHolder.GetObjFromPool(FishDef.POOL_TYPE.NET_FIREGUN, data.bullet.uid) : null;
            if (netObj) {
              var parent = this.parentOfNet ? this.parentOfNet : this.node;
              netObj.setPosition(v3(data.pos.x, data.pos.y, 0));
              netObj.parent = parent;
            }
            return;
          } else if (bulComm.bulType === FishDef.CannonType.special_dianZhuan) {
            var _netObj = this._resHolder ? this._resHolder.GetObjFromPool(FishDef.POOL_TYPE.NET_DRILL, data.bullet.uid) : null;
            if (_netObj) {
              var _parent = this.parentOfNet ? this.parentOfNet : this.node;
              //                // netObj.setPosition(data.pos);
              //                // netObj.parent = parent;

              var touchNode = find("rotate_node/touchNode", data.fishObj.node);
              if (!touchNode) {
                _netObj.setPosition(v3(0, 0, 0));
                _netObj.parent = data.fishObj.node ? data.fishObj.node : _parent;
                _netObj.scale = v3((data.fishObj.body.getComponent(UITransform).width / _netObj.getComponent(UITransform).width + data.fishObj.body.getComponent(UITransform).height / _netObj.getComponent(UITransform).height) / 2, (data.fishObj.body.getComponent(UITransform).width / _netObj.getComponent(UITransform).width + data.fishObj.body.getComponent(UITransform).height / _netObj.getComponent(UITransform).height) / 2, 1);
                _netObj.getComponent(UITransform).priority = 1001;
              } else {
                _netObj.setPosition(v3(0, 0, 0));
                _netObj.parent = touchNode;
                _netObj.scale = v3((touchNode.getComponent(UITransform).width / _netObj.getComponent(UITransform).width + touchNode.getComponent(UITransform).height / _netObj.getComponent(UITransform).height) / 2 + 0.04, (touchNode.getComponent(UITransform).width / _netObj.getComponent(UITransform).width + touchNode.getComponent(UITransform).height / _netObj.getComponent(UITransform).height) / 2 + 0.04, 1);
                _netObj.getComponent(UITransform).priority = 1001;
              }
            }
            return;
          }
          var lv = FishDataMgr.BulletLvWithPrice(bulComm.holdGold);
          var addNet = function addNet(nPos) {
            var netObj = _this3._resHolder ? _this3._resHolder.GetObjFromPool(FishDef.POOL_TYPE.NET, data.bullet) : null;
            if (!netObj) {
              gts.Debug.LogErr("#FishGame \u5B9E\u4F8B\u5316\u6E14\u7F51\u5931\u8D25");
              return;
            }
            netObj.setPosition(v3(nPos.x, nPos.y, 0));
            var parent = _this3.parentOfNet ? _this3.parentOfNet : _this3.node;
            netObj.parent = parent;
            netObj.getComponent(UITransform).priority = 1002;
            if (!_this3._resHolder) {
              gts.Debug.LogErr("Error:FishBulletMgr AddFishNet \u9519\u8BEF, _poolOpt is nil");
              return;
            }
            var img = _this3._resHolder ? _this3._resHolder.NetSprFrame({
              lv: lv
            }) : null;
            if (img) {
              var spt = netObj.getComponent(Sprite);
              if (spt) {
                spt.spriteFrame = img;
              }
            }
          };
          addNet(data.pos);
        };
        _proto.DoSendBullet = function DoSendBullet(data) {
          if (!data) {
            gts.Debug.LogErr("Error:FishBulletMgr DoSendBullet \u9519\u8BEF, data is nil");
            return;
          }
          if (!this._resHolder) {
            gts.Debug.LogErr("Error:FishBulletMgr DoSendBullet \u9519\u8BEF, _poolOpt is nil");
            return;
          }
          var isDrill = data.data.bulletType === FishDef.CannonType.special_dianZhuan ? true : false;
          var name = isDrill ? this._drillBulletName : this._defaultBulletName;
          var bullet = this._resHolder.GetObjFromPool(name, data.data);
          if (!bullet) {
            gts.Debug.LogErr("Error:FishBulletMgr DoSendBullet \u9519\u8BEF, \u5B9E\u4F8B\u5316\u5B50\u5F39\u5931\u8D25");
            return;
          }
          this.node.addChild(bullet);
          var localPos = GUtil.Pos_W2L(data.pos, this.node);
          bullet.setPosition(localPos);
          bullet.getComponent(UITransform).priority = isDrill ? 100 : 1000;
          var img = null;
          if (data.data.bulletType === FishDef.CannonType.special_leiTingHuoPao) {
            img = this._resHolder ? this._resHolder.BulletSprFrame({
              price: 0,
              lv: 7
            }) : null;
          } else if (!isDrill) {
            img = this._resHolder ? this._resHolder.BulletSprFrame({
              price: data.data.bulletGolds
            }) : null;
          }
          var spt = bullet.getComponent(FishBullet);
          if (spt) {
            if (isDrill) {
              this.AddDrillBullet(spt, data.data.uid);
            }
            if (img) {
              spt.spr.spriteFrame = img;
            }
            gts.Debug.Log("\u5B50\u5F39id: " + data.data.bid);
            spt.bid = data.data.bid;
            spt.uid = data.data.uid;
            spt.holdGold = data.data.bulletGolds;
            spt.SetLock(data.lock);
          }

          //        // gts.Debug.Log(`实例化子弹: ${bullet.uuid}`);
        };

        _createClass(FishBulletMgr, [{
          key: "hndAllLoaded",
          get: function get() {
            return this.AllLoaded.bind(this);
          }
        }], [{
          key: "ins",
          get: function get() {
            return this._ins;
          }
        }]);
        return FishBulletMgr;
      }(AutoEventNode), _class3._ins = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "parentOfNet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishCfgMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDef.ts'], function (exports) {
  var _createClass, cclegacy, _decorator, JsonAsset, FishDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      JsonAsset = module.JsonAsset;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "eede1sSARdAmrq1zxrXkc5l", "FishCfgMgr", undefined);
      var ccclass = _decorator.ccclass;
      var FishCfgMgr = exports('default', (_dec = ccclass("FishCfgMgr"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function FishCfgMgr() {
          this._completed = {};
          this._paths = {};
        }
        var _proto = FishCfgMgr.prototype;
        _proto.Init = function Init(onLoaded, caller) {
          var _this = this;
          var cb = onLoaded ? caller ? onLoaded.bind(caller) : onLoaded : function () {};
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            cb(new Error("Fish Bundle is nil"));
          } else {
            //            //加载鱼线配置
            bundle.loadDir("cfgs/paths", JsonAsset, function (err, jsons) {
              for (var i = 0; jsons && i < jsons.length; ++i) {
                var tmpj = jsons[i];
                _this._paths[tmpj.name] = tmpj.json;
              }
              _this._completed[FishDef.CFG_TYPE.PATH] = true;
              if (_this.isDone) {
                cb(null);
              }
            });
          }
        };
        _createClass(FishCfgMgr, [{
          key: "paths",
          get: function get() {
            return this._paths;
          }
        }, {
          key: "isDone",
          get: function get() {
            var keys = Object.keys(FishDef.CFG_TYPE);
            for (var i = 0; i < keys.length; ++i) {
              var tmpval = FishDef.CFG_TYPE[keys[i]];
              if (!this._completed[tmpval]) {
                return false;
              }
            }

            //        // gts.Debug.LogInfo(`#FishGame 所有配置加载完成!`);

            return true;
          }
        }]);
        return FishCfgMgr;
      }(), _class2.isOpenDebug = false, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishCoin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDataMgr.ts', './FishDef.ts', './GUtil.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, SpriteAtlas, Sprite, v2, v3, UIOpacity, tween, view, Tween, Component, FishDataMgr, FishDef, GUtil;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
      v2 = module.v2;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      view = module.view;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      GUtil = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "27ebaNnOiRHKYXNsL74UEow", "FishCoin", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishCoin = exports('default', (_dec = ccclass("FishCoin"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishCoin, _Component);
        function FishCoin() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this._isSpecial = false;
          _this._onRecycled = null;
          _this._onMove = null;
          return _this;
        }
        var _proto = FishCoin.prototype;
        _proto.show = function show(isMy, endPos) {
          var _this2 = this;
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            return;
          }
          bundle.load("textures/fish_game", SpriteAtlas, function (err, atlas) {
            if (atlas) {
              if (isMy) {
                _this2.node.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("coins_coin_0");
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).frameNameFmt = "coins_coin_{0}";
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).defaultFrame = atlas.getSpriteFrame("coins_coin_0");
                //                    // FishSound.PlaySound(FishDef.Sound.COINS_APPEAR);
              } else {
                _this2.node.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("coins_coin_gray_0");
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).frameNameFmt = "coins_coin_gray_{0}";
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).defaultFrame = atlas.getSpriteFrame("coins_coin_gray_0");
              }
            }
            var rX = Math.abs(_this2.node.getPosition().x - endPos.x);
            var rY = Math.abs(_this2.node.getPosition().y - endPos.y);
            var bezier = [v2((_this2.node.getPosition().x + endPos.x) / 2, _this2.node.getPosition().y), v2(-(_this2.node.getPosition().x + endPos.x) / 2, endPos.y), endPos];
            if (rX > rY) {
              bezier = [v2(_this2.node.getPosition().x, (_this2.node.getPosition().y + endPos.y) / 2), v2(endPos.x, -(_this2.node.getPosition().y + endPos.y) / 2), endPos];
            }
            var bezierTo = GUtil.bezierTo(_this2.node, 0.6, bezier[0], bezier[1], v3(bezier[2].x, bezier[2].y, 0));
            if (!_this2._isSpecial) {
              var disY = 50;
              _this2.node.getPosition().y += disY;
              _this2.node.getComponent(UIOpacity).opacity = 0;
              tween(_this2.node.getComponent(UIOpacity)).by(0.2, {
                opacity: 255
              }, {
                easing: "quadIn"
              }).start();
              tween(_this2.node).by(0.2, {
                position: v3(0, -disY, 0)
              }, {
                easing: "quadIn"
              }).delay(Math.random() * 0.25 + 0.5).call(function () {
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).Play();
              }).delay(0.1).parallel(bezierTo, tween(_this2.node).to(1, {
                scale: v3(0.5, 0.5, 0.5)
              }), tween(_this2.node).call(_this2._onMove)).call(function () {
                tween(_this2.node.getComponent(UIOpacity)).by(0.2, {
                  opacity: 0
                }).call(function () {
                  FishDataMgr.resHolder.RecycleNodeToPool(_this2.node);
                }).start();
              }).start();
            } else {
              var visibleSize = view.getVisibleSize();
              var pWidth = 750 * visibleSize.width / visibleSize.height - 80;
              var pHeight = 750 - 100;
              var toPos = v2(pWidth / 2.0 - Math.random() * pWidth, pHeight / 2.0 - Math.random() * pHeight + 50);
              tween(_this2.node.getComponent(UIOpacity)).by(0.2, {
                opacity: 255
              }, {
                easing: "quadIn"
              }).start();
              tween(_this2.node).parallel(tween(_this2.node).to(0.2, {
                position: v3(toPos.x, toPos.y, 0)
              }), tween(_this2.node).to(0.2, {
                scale: v3(1.2, 1.2, 1.2)
              })).to(0.2, {
                scale: v3(1.0, 1.0, 1.0)
              }, {
                easing: "quadOut"
              }).delay(Math.random() * 0.25 + 0.5).call(function () {
                //@ts-ignore
                _this2.node.getComponent(gts.FrameAnimation).Play();
              }).delay(0.1).parallel(bezierTo, tween(_this2.node).to(1, {
                scale: v3(0.5, 0.5, 0.5)
              }), tween(_this2.node).call(_this2._onMove)).call(function () {
                tween(_this2.node.getComponent(UIOpacity)).by(0.2, {
                  opacity: 0
                }).call(function () {
                  FishDataMgr.resHolder.RecycleNodeToPool(_this2.node);
                }).start();
              }).start();
            }
          });
        };
        _proto.reuse = function reuse(data) {
          data = data[0] || data;
          var msg = data.msg;
          this._onRecycled = data.onRecycled ? data.onRecycled : null;
          this._onMove = data.onMove ? data.onMove : null;
          var pinfo = FishDataMgr.PlayerWithUid(msg.uid);
          var sid = pinfo ? pinfo.seat : -1;
          if (sid < 0) {
            FishDataMgr.resHolder.RecycleNodeToPool(this.node);
            return;
          }
          var endPos = data.endPos ? GUtil.Pos_W2L_V2(v3(data.endPos), this.node.parent) : FishDataMgr.ins.coinLocalPos[sid];
          var end = data.toPos ? data.toPos : endPos;
          if (!end) {
            end = FishDef.GlobalCoinPos[sid];
          }
          this._isSpecial = false;
          //@ts-ignore
          this.node.getComponent(gts.FrameAnimation).Stop(false);
          this.show(msg.uid == FishDataMgr.myUid, end);
        };
        _proto.unuse = function unuse() {
          Tween.stopAllByTarget(this.node);
          this.node.scale = v3(1, 1, 1);
        };
        return FishCoin;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishCoinMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishSound.ts', './FishCoin.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, v3, UITransform, Font, UIOpacity, v2, tween, Label, Common, AutoEventNode, GUtil, FishDataMgr, FishDef, FishSound, FishCoin;
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
      v3 = module.v3;
      UITransform = module.UITransform;
      Font = module.Font;
      UIOpacity = module.UIOpacity;
      v2 = module.v2;
      tween = module.tween;
      Label = module.Label;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      FishCoin = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3;
      cclegacy._RF.push({}, "3c5e71B08dIabOXto2GqohT", "FishCoinMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishCoinMgr = exports('default', (_dec = ccclass("FishCoinMgr"), _dec2 = property([Node]), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishCoinMgr, _AutoEventNode);
        function FishCoinMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _this._dstPos = {};
          _initializerDefineProperty(_this, "flags", _descriptor, _assertThisInitialized(_this));
          _this.arrFont = {};
          return _this;
        }
        var _proto = FishCoinMgr.prototype;
        //"fonts/font3" : "fonts/font4";
        _proto.Init = function Init() {
          var _this2 = this;
          this.FlushCoinPosMap();
          this.OnEvent(FishDef.Event.COIN_POS_FLUSHED, function () {
            for (var i = 0; i < _this2.flags.length; ++i) {
              var wpos = FishDataMgr.ins.GetCoinPos(i);
              var lpos = GUtil.Pos_W2L_V2(v3(wpos.x, wpos.y), _this2.node);
              _this2.flags[i].setPosition(v3(lpos.x, lpos.y, 0));
            }
            _this2.FlushCoinPosMap();
          });
        };
        _proto.FlushCoinPosMap = function FlushCoinPosMap() {
          var allPosMap = FishDataMgr.ins.allCoinPos;
          var allkeys = Object.keys(allPosMap);
          for (var i = 0; i < allkeys.length; ++i) {
            var idx = allkeys[i];
            var pos = allPosMap[idx];
            this._dstPos[idx] = GUtil.Pos_W2L_V2(pos, this.node);
          }
          FishDataMgr.ins.coinLocalPos = this._dstPos;
        }
        //    // LIFE-CYCLE CALLBACKS:
        ;

        _proto.onLoad = function onLoad() {
          var _this3 = this;
          if (!FishCoinMgr._ins) {
            FishCoinMgr._ins = this;
          } else {
            gts.Debug.LogErr("# \u9519\u8BEF\uFF1A\u591A\u4E2AFishCoinMgr \u5B9E\u4F8B\u5BF9\u8C61!");
          }
          this.node.getComponent(UITransform).priority = 1000;
          var arrPath = ["fonts/font3", "fonts/font4"];
          for (var _i = 0, _arrPath = arrPath; _i < _arrPath.length; _i++) {
            var path = _arrPath[_i];
            FishDef.Util.bundle.load(path, Font, function (err, font) {
              if (err) {
                gts.Debug.LogErr("" + err);
              } else {
                _this3.arrFont[font.name] = font;
              }
            });
          }
        };
        _proto.start = function start() {
          this.OnEvent(FishDef.Event.COINS_BOOM_NOMAL, this.AddCoins_nomal);
          this.OnEvent(FishDef.Event.COINS_BOOM_BIG, this.AddCoins_nomal);
          this.OnEvent(FishDef.Event.COINS_BOOM_SPECIAL, this.AddCoins_special);
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          if (FishCoinMgr._ins === this) {
            FishCoinMgr._ins = null;
          }
        }
        //    // update (dt) {}
        ;

        _proto.AddCoins_special = function AddCoins_special(data) {
          var _this4 = this;
          //        //爆出金币
          if (data.msg.uid == FishDataMgr.myUid) {
            FishSound.PlaySound(FishDef.Sound.COINS_APPEAR);
          }
          var pos = GUtil.Pos_W2L_V2(v3(data.pos.x, data.pos.y, 0), this.node);
          //        //确定金币点阵中心点 取list[2]
          var list = FishDef.Util.ins.GetPosListByNum(pos, 5);
          var startPos = list[2];
          var maxLength = data.odds < 40 ? 40 : data.odds > 50 ? 50 : data.odds;
          var counts = maxLength;
          var onCoinMove = function onCoinMove() {
            counts--;
            if (counts == 0) {
              FishSound.PlaySound(FishDef.Sound.COINS_RECIEVED);
              if (data.onCoinRecycled) {
                data.onCoinRecycled();
                _this4.EmitEvent(FishDef.Event.ON_PUSH_WALLET, null, true);
              }
            }
          };
          for (var i = 0; i < maxLength; i++) {
            var item = FishDataMgr.resHolder.GetObjFromPool(FishDef.POOL_TYPE.COIN, {
              msg: data.msg,
              onMove: onCoinMove,
              onRecycled: null
            });
            if (!item) {
              console.error("#154_025 金币实例无法获取");
              return;
            }
            item.setPosition(v3(startPos.x, startPos.y, 0));
            item.getComponent(UIOpacity).opacity = 50;
            item.scale = v3(0.25, 0.25, 1);
            item.getComponent(FishCoin)._isSpecial = true;
            this.node.addChild(item);
          }
        };
        _proto.AddCoins_nomal = function AddCoins_nomal(data) {
          var _this5 = this;
          //        // gts.Debug.Log("---OnEvent----AddCoins_nomal-")
          var pos = GUtil.Pos_W2L_V2(v3(data.pos.x, data.pos.y, 0), this.node);

          //        //确定金币点阵中心点 取list[2]
          var list = FishDef.Util.ins.GetPosListByNum(pos, 5);

          //        //金币点阵
          var posList = [v2(-43, -3), v2(-71, 10), v2(-21, 17), v2(-21, 51), v2(12, -1), v2(-25, -25)];
          if (data.msg.uid == FishDataMgr.myUid) {
            FishSound.PlaySound(FishDef.Sound.COINS_APPEAR);
          }
          var counts = 6;
          var onCoinMove = function onCoinMove() {
            counts--;
            if (counts == 0) {
              //                // gts.Debug.Log("-AddCoins_nomal--onCoinMove----counts==" + counts + "=fishID==" + data.msg.fishID);
              FishSound.PlaySound(FishDef.Sound.COINS_RECIEVED);
              if (data.onCoinRecycled) {
                data.onCoinRecycled();
                _this5.EmitEvent(FishDef.Event.ON_PUSH_WALLET, null, true);
              }
            }
          };
          var index = 0;
          var cf = function cf() {
            var disPos = posList[index++];
            var p = v3(list[2].x + disPos.x, list[0].y + disPos.y, 0);
            var item = FishDataMgr.resHolder.GetObjFromPool(FishDef.POOL_TYPE.COIN, {
              msg: data.msg,
              onMove: onCoinMove,
              onRecycled: null,
              // data.onCoinsRecycled,
              toPos: data.toPos ? _this5.node.getComponent(UITransform).convertToNodeSpaceAR(v3(data.toPos.x, data.toPos.y, 0)) : null
            });
            if (!item) {
              console.error("#154_025 金币实例无法获取");
              return;
            }
            item.setPosition(p);
            _this5.node.addChild(item);
          };
          cf();
          if (posList.length >= 1) {
            tween(this.node).repeat(posList.length - 1, tween(this.node).call(cf).delay(0.1)).start();
          }

          //        //金币数值//////////////
          if (!data.isBig) {
            var newGoldNode = new Node();
            newGoldNode.layer = this.node.layer;
            newGoldNode.addComponent(UITransform);
            newGoldNode.addComponent(UIOpacity).opacity = 255;
            var labelPos = v3(list[2].x - 25, list[0].y + 120, 0);
            newGoldNode.scale = v3(1.5, 1.5, 1.5);
            newGoldNode.setPosition(labelPos);
            var labelGold = newGoldNode.addComponent(Label);
            labelGold.isBold = true;
            labelGold.fontSize = 22;
            labelGold.font = data.msg.uid == FishDataMgr.myUid ? this.arrFont["font3"] : this.arrFont["font4"];
            var sGold = Common.numFormat("" + data.odds);
            labelGold.string = "+" + sGold;
            this.node.addChild(newGoldNode);
            newGoldNode.getComponent(UIOpacity).opacity = 0;
            tween(newGoldNode).delay(0.25).call(function () {
              tween(newGoldNode).to(0.25, {
                position: v3(labelPos.x, labelPos.y - 80, 0)
              }, {
                easing: "cubicOut"
              }).start();
              tween(newGoldNode.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }, {
                easing: "cubicOut"
              }).start();
            }).delay(0.25).to(0.1, {
              position: v3(labelPos.x, labelPos.y - 70, 0)
            }, {
              easing: "cubicIn"
            }).delay(1).call(function () {
              tween(newGoldNode.getComponent(UIOpacity)).to(0.25, {
                opacity: 0
              }, {
                easing: "cubicOut"
              }).start();
            }).delay(0.25).call(function () {
              var p = FishDataMgr.PlayerWithUid(data.msg.uid);
              if (p) {
                // gts.Debug.Log("-AddCoins_nomal--更新金币----==");
                //更新金币-显示
                _this5.EmitEvent(FishDef.Event.UPDATE_PLAYER_GOLD, p.seat);
              }
            }).removeSelf().start();
          }
        };
        _createClass(FishCoinMgr, null, [{
          key: "ins",
          get: function get() {
            return this._ins;
          }
        }]);
        return FishCoinMgr;
      }(AutoEventNode), _class3._ins = null, _class3), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "flags", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishConfig.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('FishCfg', void 0);
      cclegacy._RF.push({}, "2cec5gt3GtNM5I+qIZs6V9v", "FishConfig", undefined);
      //         /** //鱼的ID */
      //         /** //鱼的名字 */
      //         /** //奖励倍率 */
      //         //Reward: number,
      //         /** //击杀概率 万分比 */
      //         //KillPro: number,
      //         /** //最小奖励倍数*/
      //         /** //最大奖励倍数*/
      //         /** //最小击杀概率*/
      //         /** //最大击杀概率*/
      //         /** //生存时间周期 */
      //         /** // 0普通鱼, 1多发子弹, 2钻头导弹, 3轮盘, 4红包, 5BOSS */
      //         /** //两条同路径最小间隔时间 */
      //         /** 不要修正旋转角度 */
      //         /** 帮助界面里的缩放 */
      //         /** 在游戏i的缩放 */
      //         /** 普通鱼 */
      //         /** 特殊鱼 */
      //         /** 钻头子弹 */
      //     // export function DataWithID(id: string | number): IData {
      //     //     return FishCfg.data[id];
      //     // }
      //     //鱼动画 参数定义
      //     /** 默认游戏中的鱼缩放 */
      // import { _decorator } from "cc";
      var FishCfg;
      (function (_FishCfg) {
        var Type = {
          NOR_FISH: 0,
          SPE_FISH: 1,
          BUL_DRILL: 2
        };
        _FishCfg.Type = Type;
        var FrameDt = _FishCfg.FrameDt = 45 / 1000;
        var FrameStartIdx = _FishCfg.FrameStartIdx = 0;
        var StartID = _FishCfg.StartID = 101;
        var MaxZIndex = _FishCfg.MaxZIndex = 1000;
        var GScale = _FishCfg.GScale = 1.0;
        var data = _FishCfg.data = {
          101: {
            ID: 101,
            //鱼的类型
            Name: "海星",
            //鱼的名字
            RewardMin: 2,
            //最小奖励倍数
            RewardMax: 2,
            //最大奖励倍数
            KillProMin: 5000,
            //最小击杀概率
            KillProMax: 5000,
            //最大击杀概率
            Time: 25000,
            //生存时间周期
            FType: 0,
            // 0普通鱼, 1多发子弹, 2钻头导弹, 3轮盘, 4红包, 5BOSS
            Interval: 800 //两条同路径最小间隔时间
          },

          102: {
            ID: 102,
            Name: "小金鱼",
            RewardMin: 3,
            RewardMax: 3,
            KillProMin: 3333,
            KillProMax: 3333,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          103: {
            ID: 103,
            Name: "小金鱼",
            RewardMin: 4,
            RewardMax: 4,
            KillProMin: 2500,
            KillProMax: 2500,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          104: {
            ID: 104,
            Name: "小金鱼",
            RewardMin: 5,
            RewardMax: 5,
            KillProMin: 2000,
            KillProMax: 2000,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          105: {
            ID: 105,
            Name: "小金鱼",
            RewardMin: 6,
            RewardMax: 6,
            KillProMin: 1667,
            KillProMax: 1667,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          106: {
            ID: 106,
            Name: "比目鱼",
            RewardMin: 7,
            RewardMax: 7,
            KillProMin: 1429,
            KillProMax: 1429,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          107: {
            ID: 107,
            Name: "龙虾",
            RewardMin: 8,
            RewardMax: 8,
            KillProMin: 1250,
            KillProMax: 1250,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          108: {
            ID: 108,
            Name: "小金鱼",
            RewardMin: 9,
            RewardMax: 9,
            KillProMin: 1111,
            KillProMax: 1111,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          109: {
            ID: 109,
            Name: "小金鱼",
            RewardMin: 10,
            RewardMax: 10,
            KillProMin: 1000,
            KillProMax: 1000,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          110: {
            ID: 110,
            Name: "小金鱼",
            RewardMin: 12,
            RewardMax: 12,
            KillProMin: 833,
            KillProMax: 833,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          111: {
            ID: 111,
            Name: "小金鱼",
            RewardMin: 15,
            RewardMax: 15,
            KillProMin: 667,
            KillProMax: 667,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          112: {
            ID: 112,
            Name: "小金鱼",
            RewardMin: 18,
            RewardMax: 18,
            KillProMin: 556,
            KillProMax: 556,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          113: {
            ID: 113,
            Name: "小金鱼",
            RewardMin: 20,
            RewardMax: 20,
            KillProMin: 500,
            KillProMax: 500,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          114: {
            ID: 114,
            Name: "小金鱼",
            RewardMin: 25,
            RewardMax: 25,
            KillProMin: 400,
            KillProMax: 400,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          115: {
            ID: 115,
            Name: "小金鱼",
            RewardMin: 30,
            RewardMax: 30,
            KillProMin: 333,
            KillProMax: 333,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          116: {
            ID: 116,
            Name: "小金鱼",
            RewardMin: 40,
            RewardMax: 40,
            KillProMin: 250,
            KillProMax: 250,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          117: {
            ID: 117,
            Name: "小金鱼",
            RewardMin: 50,
            RewardMax: 50,
            KillProMin: 200,
            KillProMax: 200,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          118: {
            ID: 118,
            Name: "小金鱼",
            RewardMin: 30,
            RewardMax: 70,
            KillProMin: 143,
            KillProMax: 333,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          119: {
            ID: 119,
            Name: "小金鱼",
            RewardMin: 30,
            RewardMax: 70,
            KillProMin: 143,
            KillProMax: 333,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          120: {
            ID: 120,
            Name: "小金鱼",
            RewardMin: 40,
            RewardMax: 80,
            KillProMin: 125,
            KillProMax: 250,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          121: {
            ID: 121,
            Name: "小金鱼",
            RewardMin: 40,
            RewardMax: 90,
            KillProMin: 111,
            KillProMax: 250,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          122: {
            ID: 122,
            Name: "小金鱼",
            RewardMin: 50,
            RewardMax: 100,
            KillProMin: 100,
            KillProMax: 200,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          123: {
            ID: 123,
            Name: "小金鱼",
            RewardMin: 50,
            RewardMax: 100,
            KillProMin: 100,
            KillProMax: 200,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          124: {
            ID: 124,
            Name: "小金鱼",
            RewardMin: 60,
            RewardMax: 200,
            KillProMin: 50,
            KillProMax: 167,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          125: {
            ID: 125,
            Name: "黄金龙",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          126: {
            ID: 126,
            Name: "多宝鱼",
            RewardMin: 10,
            RewardMax: 30,
            KillProMin: 333,
            KillProMax: 1000,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          127: {
            ID: 127,
            Name: "鳐鱼",
            RewardMin: 10,
            RewardMax: 30,
            KillProMin: 333,
            KillProMax: 1000,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          128: {
            ID: 128,
            Name: "螃蟹",
            RewardMin: 11,
            RewardMax: 11,
            KillProMin: 909,
            KillProMax: 909,
            Time: 25000,
            FType: 0,
            Interval: 1200
          },
          201: {
            ID: 201,
            Name: "镭射蟹",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          202: {
            ID: 202,
            Name: "电钻蟹",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          203: {
            ID: 203,
            Name: "炸弹蟹",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          204: {
            ID: 204,
            Name: "轮轴蟹",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          205: {
            ID: 205,
            Name: "闪电水母",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          206: {
            ID: 206,
            Name: "雷霆火炮",
            RewardMin: 60,
            RewardMax: 888,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          207: {
            ID: 207,
            Name: "龙王献宝",
            RewardMin: 20,
            RewardMax: 200,
            KillProMin: 11,
            KillProMax: 167,
            Time: 25000,
            FType: 1,
            Interval: 1200
          },
          208: {
            ID: 208,
            Name: "海盗船",
            RewardMin: 10,
            RewardMax: 300,
            KillProMin: 33,
            KillProMax: 1000,
            Time: 25000,
            FType: 1,
            Interval: 1200
          }
        };
      })(FishCfg || (FishCfg = exports('FishCfg', {})));
      var Holder = exports('Holder', /*#__PURE__*/function () {
        function Holder() {}
        _createClass(Holder, null, [{
          key: "dataCount",
          get: function get() {
            if (this._dataCnt <= 0) {
              this._dataCnt = Object.keys(FishCfg.data).length;
            }
            return this._dataCnt;
          }
        }]);
        return Holder;
      }());
      Holder._dataCnt = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishDataMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataManager.ts', './FishDef.ts'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy, Vec2, sys, view, rect, v2, DataManager, UserKey, FishDef;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec2 = module.Vec2;
      sys = module.sys;
      view = module.view;
      rect = module.rect;
      v2 = module.v2;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bdb23Xrr6tCoYFvxfvPrxxE", "FishDataMgr", undefined);
      var FishDataMgr = exports('default', /*#__PURE__*/function () {
        function FishDataMgr() {
          //    //! 当前的资源管理器
          this._resHolder = null;
          //    //! 当前事件派发接口
          this._iEventHnd = null;
          //    //! 当前是否在切换场景
          this._switchScene = false;
          //    //! 配置管理器
          this._cfgMgr = null;
          //    //! 路径配置信息
          this._tidePathCfg = {};
          //    //! 玩家信息
          this._uid2player = {};
          this._seat2Player = {};
          //    //! 当前服务器时间
          this._serverTicket = 0;
          //    //! 玩家作为对应金币位置
          this._coinPosMap = {};
          //    //! 目标金币位置
          this._coinLocalPos = {};
          //    //! 自己uid
          this._myUid = DataManager.instance.getUserDataForKey(UserKey.OID);
          //    //! 是否处于自动开火状态
          this._fireAuto = false;
          //    // private _allowSendSpecial: boolean = false;
          //    // public static set allowSendSpecial(value: boolean) {
          //    //     if (this.ins) {
          //    //         this.ins._allowSendSpecial = value;
          //    //     }
          //    // }
          //    // public static get allowSendSpecial(): boolean {
          //    //     return this.ins ? this.ins._allowSendSpecial : false;
          //    // }
          //    //! 是否处于锁定屏蔽
          this._isLockMask = false;
          //    //! 是否处于开火锁定状态
          this._fireLocking = false;
          //    //! 当前锁定的鱼
          this._curlockFishId = 0;
          //    //! 当前锁定的鱼
          this._curlockFish = 0;
          //    //! 是否处于开火技能状态
          this._fireSkill = false;
        }
        //    /** 事件派发 */
        FishDataMgr.EmitEvent = function EmitEvent(event, data) {
          if (this.ins._iEventHnd) {
            this.ins._iEventHnd.EmitEvent(event, data);
          }
        };
        FishDataMgr.OnEvent = function OnEvent(event, cb, caller) {
          if (this.ins._iEventHnd) {
            return this.ins._iEventHnd.OnEvent(event, cb, caller);
          }
          return null;
        }
        //    //! 当前是否就绪
        ;

        FishDataMgr.Destory = function Destory() {
          if (this._ins) {
            this._ins.OnDestory();
            this._ins = null;
          }
          this._lastSelRoomInfo = null;
          //        //! 清理加载完成状态
          this._loadCompleted = false;
        };
        var _proto = FishDataMgr.prototype;
        _proto.SetIsSwitchScene = function SetIsSwitchScene(value) {
          this._switchScene = value;
        };
        FishDataMgr.getBIDBySeat = function getBIDBySeat(sid) {
          // 保留服务端协议使用的原 ID 生成方式；不再为日志保存跨房间累积的 ID 表。
          return sys.now();
        }
        // 捕获发送方仍调用此接口；ID 没有本地所有权记录，不需要额外清理。
        ;

        FishDataMgr.delBID = function delBID(bid) {}
        //    //! 转换座位号
        ;

        FishDataMgr.getLocalSeatBySeat = function getLocalSeatBySeat(sid) {
          if (this.isRotate) {
            return 3 - sid;
          }
          return sid;
        };
        FishDataMgr.getLocalSeatById = function getLocalSeatById(uid) {
          if (!this._ins) {
            return -1;
          }
          var usr = this._ins._uid2player[uid];
          if (!usr) {
            return -1;
          }
          if (this.isRotate) {
            return 3 - usr.seat;
          }
          return usr.seat;
        }
        //    /** 填充测试数据 */
        ;

        _proto.FillTestDatas = function FillTestDatas(myuid) {
          this._myUid = "" + myuid;
          //        // gts.Debug.Log(`填充测试数据, myUid:${this._myUid}`);
        };

        FishDataMgr.SetMyUid = function SetMyUid(myUid) {
          if (this.ins) {
            this.ins._myUid = myUid;
          }
        };
        _proto.Init = function Init() {
          //        // gts.Debug.Log(`捕鱼数据管理器初始化`);
          //        // console.trace(`捕鱼管理器初始化`);
        };
        _proto.OnDestory = function OnDestory() {
          //        // gts.Debug.Log(`捕鱼数据管理器销毁`);
        };
        _proto.SetCfgMgr = function SetCfgMgr(cfgMgr) {
          this._cfgMgr = cfgMgr;
        };
        FishDataMgr.GetPathWithId = function GetPathWithId(pathId) {
          if (!FishDataMgr.ins.cfgMgr) {
            return null;
          }
          return FishDataMgr.ins.cfgMgr.paths["" + pathId];
        };
        FishDataMgr.CacheTidePath = function CacheTidePath(cfg) {
          var outData = {};
          var dstSize = {
            w: 1334,
            h: 750
          };
          var srcSize = {
            w: 1280,
            h: 720
          };
          var offset = {
            x: dstSize.w / -2,
            y: dstSize.h / -2
          };
          var scalePt = {
            x: dstSize.w / srcSize.w,
            y: dstSize.h / srcSize.h
          };

          //        // this._tidePathJson = value;
          var allkeys = Object.keys(cfg);
          for (var i = 0; i < allkeys.length; ++i) {
            var pid = allkeys[i];
            var arr = cfg[pid];
            var pts = [];
            for (var idx = 0; idx < arr.length; ++idx) {
              var tmpPt = {
                x: arr[idx][0],
                y: arr[idx][1]
              };
              var dstPt = {
                x: (tmpPt.x + offset.x) * scalePt.x,
                y: (tmpPt.y + offset.y) * scalePt.y
              };
              pts.push(dstPt);
            }
            outData[pid] = pts;
          }

          //        // gts.Debug.Log(`# Save Tide Path Config`);
          return outData;
        };
        _proto.GetTidePathPoints = function GetTidePathPoints(pathId) {
          return this._tidePathCfg ? this._tidePathCfg[pathId] : null;
        };
        _proto.SetCoinPos = function SetCoinPos(seatid, pos) {
          this._coinPosMap[seatid] = pos;
        };
        _proto.GetCoinPos = function GetCoinPos(seatid) {
          var pos = this._coinPosMap[seatid];
          return pos ? pos : Vec2.ZERO;
        };
        FishDataMgr.TimeSync = function TimeSync(time) {
          var timeErr = time - this.ins._serverTicket;
          //        // gts.Debug.Log(`#FishGame 同步服务器时间, 时间差:${timeErr}, server time:${time}, local time:${Date.now()}`);
          //        // console.info("server time : [[[[[[", time, "]]]]]]");
          //        // console.info("local time  : [[[[[[", Date.now(), "]]]]]]");
          this.ins._serverTicket = time;
        };
        FishDataMgr.AddTime = function AddTime(dt) {
          this.ins._serverTicket += dt * 1000;
        };
        FishDataMgr.SetPlayer = function SetPlayer(player) {
          //        // gts.Debug.LogWarr(`#FishGame SetPlayer`);
          if (player && this.ins) {
            if (isNaN(player.drillCount) || undefined === player.drillCount || null === player.drillCount) {
              player.drillCount = 0;
            }
            this.ins._uid2player[player.uid] = player;
            this.ins._seat2Player[player.seat] = player;
          }
        };
        FishDataMgr.DelPlayer = function DelPlayer(uid) {
          if (this.ins) {
            var tmp = this.ins._uid2player[uid];
            if (tmp) {
              this.ins._seat2Player[tmp.seat] = undefined;
            }
            this.ins._uid2player[uid] = undefined;
          }
        }
        //    // public static DelPlayerBySeat(seat: number) {
        //    //     if (this.ins) {
        //    //         let tmp = this.ins._seat2Player[seat];
        //    //         if (tmp) {
        //    //             this.ins._seat2Player[tmp.seat] = undefined;
        //    //         }
        //    //     }
        //    // }
        ;

        FishDataMgr.PlayerWithSeat = function PlayerWithSeat(seat) {
          return this.ins ? this.ins._seat2Player[seat] : null;
        };
        FishDataMgr.PlayerWithUid = function PlayerWithUid(uid) {
          return this.ins ? this.ins._uid2player[uid] : null;
        };
        //    //! 判断是否为自己的信息
        FishDataMgr.isMyInfo = function isMyInfo(info) {
          if (!info) {
            return false;
          }
          return info.uid === this.myUid ? true : false;
        };
        FishDataMgr.addFireStatus = function addFireStatus(status) {
          if (!status || status == FishDef.FireStatus.NONE) {
            this._fireStatus = FishDef.FireStatus.NONE;
            return;
          }
          this._fireStatus |= status;
        };
        FishDataMgr.delFireStatus = function delFireStatus(status) {
          if (this._fireStatus & status) {
            this._fireStatus ^= status;
          }
        };
        FishDataMgr.isFire = function isFire() {
          //        // gts.Debug.Log("REQ_SEND_BULLET-------this._fireStatus==="+this._fireStatus);
          return this._fireStatus & 0xff;
        };
        FishDataMgr.isSatus = function isSatus(status) {
          return this._fireStatus & status;
        }
        //    ///////////////////////
        ;

        FishDataMgr.GetBulletPrice = function GetBulletPrice(cannonType) {
          var info = this.curRoomInfo;
          if (!info) {
            return -1;
          }
          var idx = cannonType - 1;
          if (idx >= 0 && idx < info.coins_arr.length) {
            return info.coins_arr[idx];
          }
          return -2;
        };
        FishDataMgr.BulletLvWithPrice = function BulletLvWithPrice(price) {
          var info = this.curRoomInfo;
          if (!info) {
            return 1;
          }
          var lv = -1;
          for (var i = 0; i < info.coins_arr.length && lv < 0; ++i) {
            if (info.coins_arr[i] === price) {
              lv = i;
              break;
            }
          }
          return lv < 0 ? 1 : lv;
        }
        //    /**
        //     * 获取击杀类型
        //     * @param fishType
        //     * @returns
        //     */
        ;

        FishDataMgr.getKillType = function getKillType(fishType) {
          var killType = FishDef.KillType.Nor;
          switch (fishType) {
            case FishDef.FishType.leiSheXie:
              {
                killType = FishDef.KillType.LEISHE;
                break;
              }
            case FishDef.FishType.zhaDanXie:
              {
                killType = FishDef.KillType.zhaDan;
                break;
              }
            case FishDef.FishType.dianZhuanXie:
              {
                killType = FishDef.KillType.DRILL;
                break;
              }
            case FishDef.FishType.shanDianShuiMu:
              {
                killType = FishDef.KillType.shanDian;
                break;
              }
            case FishDef.FishType.leiTingHuoPao:
              {
                killType = FishDef.KillType.FIREGUN;
                break;
              }
            case FishDef.FishType.huangJinFuDai:
              {
                killType = FishDef.KillType.huangJinFuDai;
                break;
              }
            case FishDef.FishType.lunZhouXie:
              {
                killType = FishDef.KillType.lunZhou;
                break;
              }
          }
          return killType;
        };
        _createClass(FishDataMgr, [{
          key: "isSwitchScene",
          get: function get() {
            return this._switchScene;
          }
          //    //! 是否翻转UI
        }, {
          key: "cfgMgr",
          get: function get() {
            return this._cfgMgr;
          }
        }, {
          key: "tidePathJson",
          set:
          //    // private _tidePathSet: { [key: string]: Array<number> } = {};
          function set(value) {
            this._tidePathCfg = FishDataMgr.CacheTidePath(value);
          }
        }, {
          key: "coinLocalPos",
          get: function get() {
            return this._coinLocalPos;
          },
          set: function set(value) {
            this._coinLocalPos = value;
          }
        }, {
          key: "allCoinPos",
          get: function get() {
            return this._coinPosMap;
          }
        }], [{
          key: "lastSelRoomId",
          get: function get() {
            return this._lastSelRoomInfo ? this._lastSelRoomInfo.room_id : "no_sel_room";
          }
          //    //! 获取当前房间信息
          ,

          set: function set(value) {
            if (this._lastSelRoomInfo) {
              return;
            }
            for (var _iterator = _createForOfIteratorHelperLoose(FishDef.Data.Rooms), _step; !(_step = _iterator()).done;) {
              var tmp = _step.value;
              if (tmp.room_id === value) {
                this._lastSelRoomInfo = tmp;
                break;
              }
            }
          }
        }, {
          key: "curRoomInfo",
          get: function get() {
            return this._lastSelRoomInfo;
          },
          set: function set(info) {
            this._lastSelRoomInfo = info;
          }
          //    // //! 当前配置信息
          //    // public _cfgHolder: FishCfg.Holder = null;
          //    // public get cfgHolder(): FishCfg.Holder {
          //    //     if (!this._cfgHolder) {
          //    //         this._cfgHolder = new FishCfg.Holder();
          //    //     }
          //    //     return this._cfgHolder;
          //    // }
        }, {
          key: "resHolder",
          get: function get() {
            return this.ins._resHolder;
          },
          set: function set(holder) {
            this.ins._resHolder = holder;
          }
        }, {
          key: "iEventHnd",
          get: function get() {
            return this.ins._iEventHnd;
          },
          set: function set(hnd) {
            this.ins._iEventHnd = hnd;
          }
        }, {
          key: "loadCompleted",
          get: function get() {
            return this._loadCompleted;
          },
          set: function set(value) {
            this._loadCompleted = value;
          }
        }, {
          key: "ins",
          get: function get() {
            if (!this._ins) {
              this._ins = new FishDataMgr();
              this._ins.Init();
            }
            return this._ins;
          }
        }, {
          key: "isRotate",
          get: function get() {
            var myInfo = this.myInfo;
            if (!myInfo) {
              return false;
            }
            return myInfo.seat >= 2 ? true : false;
          }
        }, {
          key: "serverTicket",
          get: function get() {
            return this.ins._serverTicket;
          }
        }, {
          key: "myUid",
          get: function get() {
            return this.ins ? this.ins._myUid : "";
          }
        }, {
          key: "winRect",
          get: function get() {
            var height = view.getVisibleSize().height > 750 ? view.getVisibleSize().height : 750;
            var width = view.getVisibleSize().width * (height / view.getVisibleSize().height);
            var winRect = rect(0, 0, width, height);
            winRect.center = v2(0, 0);
            return winRect;
          }
          //    //! 获取自己的信息
        }, {
          key: "myInfo",
          get: function get() {
            return this.ins ? this.ins._uid2player[this.myUid] : null;
          }
        }, {
          key: "playerCounts",
          get: function get() {
            return this.ins ? Object.keys(this.ins._uid2player).length : 0;
          }
        }, {
          key: "fireAuto",
          get:
          //    /** 是否处于自动开火状态 */
          function get() {
            return this.ins ? this.ins._fireAuto : false;
          },
          set:
          //    /** 是否处于自动开火状态 */
          function set(value) {
            if (this.ins) {
              this.ins._fireAuto = value;
            }
          }
        }, {
          key: "isLockMask",
          get: function get() {
            if (this.ins) {
              return this.ins._isLockMask;
            }
            return false;
          },
          set:
          //    /** 是否处于开火锁定状态 */
          function set(value) {
            if (this.ins) {
              this.ins._isLockMask = value;
            }
          }
        }, {
          key: "fireLocking",
          get:
          //    /** 是否处于开火锁定状态 */
          function get() {
            return this.ins ? this.ins._fireLocking : false;
          }
          //    //////////////! 开火状态
          ,

          set:
          //    /** 是否处于开火锁定状态 */
          function set(value) {
            if (this.ins) {
              this.ins._fireLocking = value;
              if (!value) {
                this.ins._curlockFishId = 0;
                FishDataMgr.myLockedFishTypeId = null;
              }
            }
          }
        }, {
          key: "fireStatus",
          set: function set(status) {
            if (!status || status == FishDef.FireStatus.NONE) {
              this._fireStatus = FishDef.FireStatus.NONE;
              return;
            }
            this._fireStatus ^= status;
          }
        }, {
          key: "curLockFishID",
          get: function get() {
            return this.ins._curlockFishId;
          },
          set: function set(value) {
            this.ins._curlockFishId = value;
          }
        }, {
          key: "curLockFish",
          get: function get() {
            return this.ins._curlockFish;
          },
          set: function set(fishObj) {
            this.ins._curlockFish = fishObj;
          }
        }, {
          key: "fireSkill",
          get:
          //    /** 是否处于开火技能状态 */
          function get() {
            return this.ins ? this.ins._fireSkill : false;
          },
          set:
          //    /** 是否处于开火技能状态 */
          function set(value) {
            if (this.ins) {
              this.ins._fireSkill = value;
            }
          }
        }]);
        return FishDataMgr;
      }());
      FishDataMgr.isInRoom = false;
      //    /** 最后选择的房间 */
      //    // private static _lastSelRoomId: string = '';
      FishDataMgr._lastSelRoomInfo = null;
      FishDataMgr.hSetFocusPos = null;
      FishDataMgr._loadCompleted = false;
      FishDataMgr._ins = null;
      FishDataMgr._bullets = 0;
      FishDataMgr._fireStatus = FishDef.FireStatus.NONE;
      FishDataMgr.myLockedFishTypeId = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishDef.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './DataManager.ts', './MainManager.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy, v2, Rect, view, assetManager, GameDef, DataManager, MainManager;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
      Rect = module.Rect;
      view = module.view;
      assetManager = module.assetManager;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      DataManager = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      exports('FishDef', void 0);
      cclegacy._RF.push({}, "7a9eaxAeeZBer/rG+M6Eu9i", "FishDef", undefined);
      var FishDef;
      (function (_FishDef) {
        var DEBUG_SKELETON_FISH = _FishDef.DEBUG_SKELETON_FISH = -1;
        var CONST_DEF = {
          bigFishOdds: 1
        };
        _FishDef.CONST_DEF = CONST_DEF;
        var BulletType = {
          Nor: 0,
          zhaDan: 97,
          shanDian: 98,
          LEISHE: 100,
          DRILL: 101,
          FIREGUN: 105
        };
        _FishDef.BulletType = BulletType;
        var KillType = {
          Nor: 0,
          zhaDan: 97,
          shanDian: 98,
          LEISHE: 100,
          DRILL: 101,
          lunZhou: 104,
          FIREGUN: 105,
          huangJinFuDai: 107
        };
        _FishDef.KillType = KillType;
        var DrillMaxCollids = _FishDef.DrillMaxCollids = 3;
        var CannonType = /*#__PURE__*/function (CannonType) {
          CannonType[CannonType["none"] = -1] = "none";
          CannonType[CannonType["nomal_1"] = 1] = "nomal_1";
          CannonType[CannonType["nomal_2"] = 2] = "nomal_2";
          CannonType[CannonType["nomal_3"] = 3] = "nomal_3";
          CannonType[CannonType["nomal_4"] = 4] = "nomal_4";
          CannonType[CannonType["nomal_5"] = 5] = "nomal_5";
          CannonType[CannonType["nomal_6"] = 6] = "nomal_6";
          CannonType[CannonType["special"] = 99] = "special";
          CannonType[CannonType["special_leiShe"] = 100] = "special_leiShe";
          CannonType[CannonType["special_dianZhuan"] = 101] = "special_dianZhuan";
          CannonType[CannonType["special_leiTingHuoPao"] = 105] = "special_leiTingHuoPao";
          return CannonType;
        }({}); //雷霆火炮
        _FishDef.CannonType = CannonType;
        var CannonStatus = {
          NONE: -1,
          NOMAL_LOAD: 1,
          SPECIAL_LOAD: 2,
          NOMAL_READY: 3,
          SPECIAL_READY: 4,
          SPECIAL_FIRE: 5,
          SPECIAL_FIREOVER: 6,
          NOMAL_UNLOAD: 7,
          SPECIAL_UNLOAD: 8
        };
        _FishDef.CannonStatus = CannonStatus;
        var FireStatus = {
          NONE: 0,
          NOMAL_FIRE: 1,
          LOCK_NOT_FIRE: 2,
          LOCK_FIRE: 4,
          AUTO_NOT_FIRE: 8,
          AUTO_FIRE: 16
        };
        _FishDef.FireStatus = FireStatus;
        var FishType = {
          small_102: 102,
          biMuYu: 106,
          longXia: 107,
          small_126: 126,
          small_127: 127,
          small_128: 128,
          bigMin: 118,
          big_122: 122,
          big_124: 124,
          big_jinLong: 157,
          bigMax: 125,
          special: 200,
          leiSheXie: 201,
          dianZhuanXie: 202,
          zhaDanXie: 203,
          lunZhouXie: 204,
          shanDianShuiMu: 205,
          leiTingHuoPao: 206,
          longWangXianBao: 207,
          huangJinFuDai: 208
        }; //海盗船
        _FishDef.FishType = FishType;
        var Sound = {
          BGM_SEL: "sound/intro_bg",
          BGM_SEL_ENTER: "sound/intro_btn_enter",
          WAVE: "sound/wave",
          FIRE_0: "sound/gun0",
          AIM: "sound/aim_btn_select",
          AUTO: "sound/auto_btn_select",
          REDUCE: "sound/reduce_btn_select",
          CHANGE_GUN: "sound/change_gun",
          BOMB_INTRO: "sound/bomb_intro",
          BOMB_EFFECT: "sound/bomb_effect",
          FIRESTORM_INTRO: "sound/firestorm_intro2",
          FIRESTORM_START: "sound/firestorm_fire_start",
          FIRESTORM_TAKEWIN: "sound/firestorm_takewin",
          FIRESTORM_HIT: "sound/firestorm_hit",
          COINS_APPEAR: "sound/coins_appear",
          COINS_RECIEVED: "sound/coins_recieved",
          COINS_COUNTING: "sound/coins_counting",
          DRILL_INTRO: "sound/drill_intro",
          DRILL_READY: "sound/drill_ready",
          DRILL_SCRAP: "sound/drill_scrap",
          JELLYFISH_INTRO: "sound/jellyfish_intro",
          JELLYFISH_EFFECT: "sound/jellyfish_effect",
          LASER_INTRO: "sound/laser_intro",
          LASER_EFFECT: "sound/laser_effect",
          REDPACKET_INTRO: "sound/spe_logo2",
          REDPACKET_CLICK: "sound/buble_pop_button",
          DOUBBLE_EFFECT: "sound/mediumfish_win"
        }; //暴击
        _FishDef.Sound = Sound;
        var State = {
          ALIVE: 0,
          CATCHED: 1,
          DIE: 2,
          exit: 3
        };
        _FishDef.State = State;
        var FishLayer = {
          subpedestal: 0,
          pedestal: 1,
          subbody: 2,
          body: 3,
          lock: 4
        };
        _FishDef.FishLayer = FishLayer;
        var POOL_TYPE = {
          BULLET: "bullet",
          FISH: "fish",
          skeletonFish: "skeletonFish",
          SHADOW: "shadow",
          NET: "net",
          NET_FIREGUN: "net_fireGun",
          NET_DRILL: "net_drill",
          COIN: "coin"
        };
        _FishDef.POOL_TYPE = POOL_TYPE;
        var NeedInit = {
          OBJECTS: "objects",
          CANNON_BODY: "cannon_body",
          CONFIGS: "configs"
        };
        _FishDef.NeedInit = NeedInit;
        var CFG_TYPE = /*#__PURE__*/function (CFG_TYPE) {
          CFG_TYPE["PATH"] = "path";
          return CFG_TYPE;
        }({});
        _FishDef.CFG_TYPE = CFG_TYPE;
        /**钱包信息 */
        var Event = {
          CONN_SERVER_SUCCEED: "fish_game_conn_svr_succeed",
          OPEN_HELPER: "fish_game_open_helper",
          SELECT_ROOM: "fish_game_select_room",
          LOAD_PROGRESS: "fish_game_load_progress",
          ENTER_GAME: "fish_game_enter",
          ENTER_GAME_COMPLETED: "fish_game_enter_completed",
          EXIT_GAME: "fish_game_exit",
          UPDATE_TOUCH_POS: "fish_game_update_touch_pos",
          REQ_SEND_BULLET: "fish_game_req_send_bullet",
          DO_SEND_BULLET: "fish_game_do_send_bullet",
          UPDATE_PLAYER_GOLD: "fish_game_update_player_gold",
          SET_PLAYER_INFO: "fish_game_set_player_info",
          RESET_PLAYER_INFO: "fish_game_reset_player_info",
          RECYCLE_FISH: "fish_game_recycle_fish",
          CREATE_FISHNET: "fish_game_create_fishnet",
          SYNC_FISH_GROUP: "fish_game_sync_fish_group",
          UPDATE_FISH_GROUP: "fish_game_update_fish_group",
          PLAYER_LOCK_FISH: "fish_game_player_lock_target",
          PLAYER_UPDATE_LOCK: "fish_game_player_update_lock",
          ON_FISH_CATCH_NOMAL: "on_fish_catch_nomal",
          ON_FISH_CATCH_BIG: "on_fish_catch_big",
          ON_FISH_CATCH_SPECIAL: "on_fish_catch_special",
          ON_SPECIAL_CATCH_CALLBACK: "on_special_catch_callback",
          ON_SCREEN_SHOCK: "on_screen_shock",
          ON_SPECIALTIP_TAKEWIN: "on_specialTip_takeWin",
          ON_SPECIALTIP_TAKEWIN_END: "on_specialTip_takeWin_end",
          ON_SPECIALTIP_WAIT: "on_specialTip_wait",
          COINS_BOOM_NOMAL: "fish_game_coins_boom_nomal",
          COINS_BOOM_BIG: "fish_game_coins_boom_big",
          COINS_BOOM_SPECIAL: "fish_game_coins_boom_special",
          CANNON_SPECIAL: "fish_game_cannon_special",
          CANNON_DIANZHUAN: "fish_game_cannon_dianZhuan",
          CANNON_LEISHE: "fish_game_cannon_leiShe",
          CANNON_LEITINGHUOPAO: "fish_game_cannon_leiTingHuoPao",
          SPECIAL_CANNON_FIRE: "fish_game_special_cannon_fire",
          SHOW_GOLD_TIP: "fish_game_show_gold_tip",
          EFFECT_LIGHTING: "fish_game_effect_lighting",
          EFFECT_BOMB: "fish_game_effect_bomb",
          EFFECT_LEISHE: "fish_game_effect_leiShe",
          EFFECT_REDPACKET: "fish_game_effect_redpacket",
          ON_CATCH_TO_BULLET: "fish_game_effect_on_catch_to_bullet",
          SWITCH_SCENE: "fish_game_swtich",
          UPDATE_UI_ROTATE: "fish_game_update_node_rotate",
          COIN_POS_FLUSHED: "fish_game_coin_pos_flushed",
          PLAYER_GET_CANNON_DRILL: "fish_game_player_get_cannon_drill",
          SET_PLAYER_VIEW_TIP: "fish_game_set_player_view_tip",
          SET_SCENE_INFO: "fish_game_set_scene_info",
          ON_FISH_EXIT: "fish_game_on_fis_exit",
          UPDATE_LOCK_ICON: "fish_game_player_aim_target",
          ON_NODE_SPEICAL_EVENT: "fish_game_on_node_special_event",
          ON_FISH_SWITCH_LOCKED_EVENT: "fish_game_on_switch_locked_event",
          ON_PUSH_WALLET: "fish_game_on_pushWallet",
          ON_PUSH_INCOME: "fish_game_on_pushIncome",
          ON_PUSH_TOTALWALLET: "fish_game_on_pushTotalWallet",
          ON_SKILL_STATUS: "fish_game_on_skillStatus",
          ON_SWITCH_TO_NOMAL_CANNON: "fish_game_on_switchToNomalCannon"
        };
        _FishDef.Event = Event;
        var Action = {
          SitDown: "SitDown",
          PlayerFire: "PlayerFire",
          KillFish: "KillFish",
          KillFishs: "SpecialKillFish",
          ChangeCannon: "ChangeCannon",
          PlayerLeave: "PlayerLeave",
          ChangeSeat: "ChangeSeat",
          OpenFuDai: "OpenFuDai",
          ChangeSkillStatus: "ChangeSkillStatus",
          OpenLunZhou: "OpenLunZhou"
        };
        _FishDef.Action = Action;
        var MsgID = {
          S2C_TIME_SYNC: "fish/TimeSync",
          S2C_PLAYER_ENTER: "fish/HD_playerEnter",
          S2C_PLAYER_LEAVE: "fish/HD_playerLeave",
          C2S_PLAYER_LEAVE: "fish/HD_playerLeave",
          C2S_ENTER_ROOM: "fish/HD_Enter",
          S2C_ENTER_ROOM: "fish/HD_Enter",
          C2S_FIRE: "fish/HD_playerFire",
          S2C_ON_FIRE: "fish/HD_playerFire",
          C2S_EXCHANGE_CANNON: "fish/HD_changeCannon",
          S2C_EXCHANGE_CANNON: "fish/HD_changeCannon",
          S2C_CREATE_FISHS: "fish/HD_fishGroup",
          C2S_CATCH_FISH: "fish/HD_killFish",
          S2C_CATCH_FISH: "fish/HD_killFish",
          S2C_FISH_TIDE_COME: "fish/HD_fishTideCome",
          S2C_FISH_TIDE_GROUP: "fish/HD_fishTide",
          C2S_KILL_FISHS: "fish/HD_specialKillFish",
          S2C_FISH_KILL_FISHS: "fish/HD_specialKillFish",
          C2S_REDPACKET_OPEN: "fish/HD_openFuDai",
          S2C_REDPACKET_OPEN: "fish/HD_openFuDai",
          HD_changeSkillStatus: "fish/HD_changeSkillStatus",
          HD_fishConfig: "fish/HD_fishConfig",
          HD_roomInfo: "fish/HD_roomInfo",
          S2C_LEITING_KILLFISH: "fish/HD_leiTingKillFish",
          C2S_HD_openLunZhou: "fish/HD_openLunZhou",
          HD_changeGolds: "fish/HD_changeGolds"
        };
        _FishDef.MsgID = MsgID;
        var eSkillStatus = /*#__PURE__*/function (eSkillStatus) {
          eSkillStatus[eSkillStatus["None"] = 0] = "None";
          eSkillStatus[eSkillStatus["Auto"] = 1] = "Auto";
          eSkillStatus[eSkillStatus["Lock"] = 2] = "Lock";
          return eSkillStatus;
        }({});
        _FishDef.eSkillStatus = eSkillStatus;
        var ROOM_LV = {
          LV1: "1",
          LV2: "2",
          LV3: "3"
        };
        _FishDef.ROOM_LV = ROOM_LV;
        var DEFAULT_FRAME_CNT = _FishDef.DEFAULT_FRAME_CNT = 30;
        var DEFAULT_START_IDX = _FishDef.DEFAULT_START_IDX = 1;
        var DEFUALT_DURATION = _FishDef.DEFUALT_DURATION = 1.5;
        var MAX_CANNON_TYPE = _FishDef.MAX_CANNON_TYPE = 6;
        var MIN_CANNON_TYPE = _FishDef.MIN_CANNON_TYPE = 1;
        var CANNON_BRILL = _FishDef.CANNON_BRILL = 101;
        var GlobalCoinPos = _FishDef.GlobalCoinPos = [v2(-585, -500), v2(407, -500), v2(-585, 500), v2(407, 500)];
        function DefaultFrameFmt(id) {
          var useId = Number(id) - 200;
          var sId = gts.Str.FmtStr("{0:M2}", useId);
          return "fish" + sId + "_{0:M2}";
        }
        _FishDef.DefaultFrameFmt = DefaultFrameFmt;
        var Util = /*#__PURE__*/function () {
          function Util() {
            //        //===================================================================
            //        //                              gird
            //        //===================================================================
            this.originVisible = view.getVisibleOrigin();
            this.sizeVisble = view.getVisibleSize();
            this.c_row_num = 21;
            this.c_col_num = 38;
            this.v_width = this.sizeVisble.width;
            this.v_hight = this.sizeVisble.height;
            this.width = this.v_width / this.c_col_num;
            this.hight = this.v_hight / this.c_row_num;
            //        // private row_min: number = 0;
            //        // private col_min: number = 0;
            //        // private row_max: number = this.row_min + this.c_row_num - 1;//min+num-1
            //        // private col_max: number = this.col_min + this.c_col_num - 1;//min+num-1
            this.extern_num = this.c_row_num >= this.c_col_num ? this.c_row_num : this.c_col_num;
            //max of row col num
            this.begin_row = -this.extern_num;
            //-extern_num
            this.begin_col = -this.extern_num;
            //-extern_num
            this.row_num = this.c_row_num + 2 * this.extern_num;
            //c_row_num + 2 * extern_num
            this.col_num = this.c_col_num + 2 * this.extern_num;
            //c_col_num + 2 * extern_num
            this.end_row = this.begin_row + this.row_num;
            this.end_col = this.begin_col + this.col_num;
            //        // private max_row: number = this.row_max + this.extern_num
            //        // private max_col: number = this.col_max + this.extern_num
            this.net_gird = new Map();
            //        //===================================================================
            //        //                              coin
            //        //===================================================================
            //        //  算法 金币掉落 金币最多20个金币 基准点 都是以左下方第一个
            //        //{base=v2(), other = {v2(), v2(),  v2()},boundary={l=1, r=2, t=3, b=4}}  格式
            this.gold_width = 48;
            this.gold_height = 48;
            this.drop_gold_tbl = new Map();
            this.drop_num_info = new Map([[1, 2], [2, 4], [3, 4], [4, 4], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 6], [12, 6], [13, 7], [14, 7], [15, 8], [16, 8], [17, 9], [18, 9], [19, 10], [20, 10]]);
          }
          Util.Init = function Init() {
            if (!this._ins) {
              this._ins = new Util();
              this._ins.init();
            }
            return this._ins;
          };
          Util.Clear = function Clear() {
            this._ins = null;
          };
          var _proto = Util.prototype;
          _proto.init = function init() {
            this.GenerateNetGird();
            this.CalculateDropGoldTblPos();
            this.CalculateDropGoldTblBoundary();
          };
          Util.LoadResInBundle = function LoadResInBundle(path, type, cb) {
            var bundle = this.bundle;
            if (!bundle) {
              if (cb) {
                cb(new Error("\u6CA1\u6709\u627E\u5230bundle"), null);
              }
            } else {
              bundle.load(path, type, cb);
            }
          }
          //        //通过初始位置和角度和距离，计算目标位置
          ;

          Util.GetDestination = function GetDestination(startPos, angle, distance) {
            var radian = angle / 180 * Math.PI;
            var diff_x = Math.cos(radian) * distance;
            var diff_y = Math.sin(radian) * distance;
            var x = startPos.x + diff_x;
            var y = startPos.y + diff_y;
            return v2(x, y);
          }
          //        //取两点间距离
          ;

          Util.GetDistance = function GetDistance(startPos, endPos) {
            var diff_x = startPos.x - endPos.x;
            var diff_y = startPos.y - endPos.y;
            var distance = Math.pow(diff_x * diff_x + diff_y * diff_y, 0.5);
            return distance;
          }
          //        //两点取角度
          ;

          Util.GetAngle = function GetAngle(start, end) {
            if (!start || !end) {
              return 0;
            }
            var diff_x = end.x - start.x;
            var diff_y = end.y - start.y;
            var abs_x = Math.abs(diff_x);
            var abs_y = Math.abs(diff_y);
            var qua = Math.sqrt(Math.pow(abs_x, 2) + Math.pow(abs_y, 2));
            var angle = Math.asin(abs_y / qua) / Math.PI * 180;
            if (diff_x > 0) {
              if (diff_y > 0) ;else if (diff_y < 0) {
                //                    //第四象限
                angle = 360 - angle;
              } else {
                //                    //x轴正半轴
                angle = 0;
              }
            } else if (diff_x < 0) {
              if (diff_y > 0) {
                //                    //第二象限
                angle = 180 - angle;
              } else if (diff_y < 0) {
                //                    //第三象限
                angle = 180 + angle;
              } else {
                //                    //x轴负半轴
                angle = 180;
              }
            } else {
              if (diff_y > 0) {
                //                    //y轴正半轴
                angle = 90;
              } else if (diff_y < 0) {
                //                    //y轴负半轴
                angle = 270;
              } else {
                //                    //原点
                angle = null;
              }
            }
            return angle;
          }
          //        //生成路径点阵
          ;

          _proto.GenerateNetGird = function GenerateNetGird() {
            var x = 0;
            var y = 0;
            for (var row = this.begin_row; row < this.end_row; ++row) {
              for (var col = this.begin_col; col < this.end_col; ++col) {
                x = this.originVisible.x + this.width * col;
                y = this.originVisible.y + this.hight * row;
                var gird = {
                  rect: new Rect(x, y, this.width, this.hight),
                  center_pos: v2(x + this.width / 2, y + this.hight / 2)
                };
                var gcol = this.net_gird.get(row);
                if (!gcol) {
                  gcol = new Map();
                  this.net_gird.set(row, gcol);
                }
                gcol.set(col, gird);
              }
            }
          };
          Util.RandNum = function RandNum(min, max) {
            var delta = max - min;
            return min + Math.round(Math.random() * delta);
          };
          Util.GetNumByOdds = function GetNumByOdds(odds) {
            var gold_ani_num = 1;
            if (odds < 2) {
              odds = 2;
            }
            if (odds >= 2 && odds <= 45) {
              gold_ani_num = Math.max(2, Math.ceil(odds / 4));
            } else if (odds > 45) {
              gold_ani_num = Math.max(12, Math.ceil(odds / 6));
            }
            if (gold_ani_num > 20) {
              gold_ani_num = 20;
            }
            return gold_ani_num;
          };
          _proto.GetPosListByNum = function GetPosListByNum(pos, num) {
            var t_drop_gold_tbl = this.drop_gold_tbl.get(num);
            if (!t_drop_gold_tbl) {
              console.error("金币配置出错,金币个数", num);
              return [];
            }
            return this.LimitEdge(pos, t_drop_gold_tbl);
          };
          _proto.LimitEdge = function LimitEdge(pos, drop_gird) {
            var _this = this;
            //            //一次校正
            pos = v2(pos.x + this.v_width / 2, pos.y + this.v_hight / 2);
            var b_pos = v2(pos.x, pos.y);
            var dx = pos.x - Math.abs(drop_gird.l);
            if (dx < 0) {
              b_pos.x = pos.x + Math.abs(dx);
            }
            var x = pos.x + drop_gird.r;
            if (x > this.v_width) {
              b_pos.x = pos.x - (x - this.v_width);
            }
            var dy = pos.y - Math.abs(drop_gird.b);
            if (dy < 0) {
              b_pos.y = pos.y + Math.abs(dy);
            }
            var y = pos.y + drop_gird.t;
            if (y > this.v_hight) {
              b_pos.y = pos.y - (y - this.v_hight);
            }
            var arr = [];
            drop_gird.base.forEach(function (v) {
              //                //二次校正
              arr.push(v2(b_pos.x + v.x - _this.v_width / 2, b_pos.y + v.y - _this.v_hight / 2));
            });
            return arr;
          };
          //        /**
          //         * 计算基础位置
          //         * @param num 每排金币个数
          //         */
          _proto.CalculateDropGoldBasePos = function CalculateDropGoldBasePos(num) {
            var base_pos = v2(0, 0);
            var loop_num = 0;
            if (num % 2 != 0) {
              loop_num = Math.floor(num / 2);
            } else if (num % 2 == 0) {
              base_pos = v2(-this.gold_width / 2, 0);
              loop_num = Math.floor(num / 2) - 1;
            }
            base_pos.x -= this.gold_width * loop_num;
            return base_pos;
          }
          //        /**
          //         * 计算其它位置
          //         * @param base_pos 基础位置
          //         * @param left_num 剩余个数
          //         * @param other_list 存储数组
          //         */
          ;

          _proto.CalculateDropGoldOtherPosList = function CalculateDropGoldOtherPosList(base_pos, left_num, other_list) {
            if (left_num <= 0) {
              return;
            }
            var pos = v2(base_pos.x, base_pos.y);
            for (var i = 0; i < left_num; ++i) {
              pos.x = pos.x + this.gold_width;
              other_list.push(pos);
            }
          }
          //        /**
          //         * 计算所有金币位置信息
          //         */
          ;

          _proto.CalculateDropGoldTblPos = function CalculateDropGoldTblPos() {
            for (var drop_gold_num = 1; drop_gold_num <= 20; ++drop_gold_num) {
              var t_one_drop_tbl = {
                base: [],
                l: 0,
                r: 0,
                t: 0,
                b: 0
              };
              var num1 = this.drop_num_info.get(drop_gold_num);
              if (!num1) {
                break;
              }
              var base_pos = this.CalculateDropGoldBasePos(num1);
              var left_num = num1 - 1;
              t_one_drop_tbl.base.push(base_pos);
              this.CalculateDropGoldOtherPosList(base_pos, left_num, t_one_drop_tbl.base);
              var num2 = drop_gold_num - num1;
              if (num2 > 0) {
                var base_pos2 = this.CalculateDropGoldBasePos(num2);
                base_pos2.y = base_pos2.y + this.gold_height;
                t_one_drop_tbl.base.push(base_pos2);
                left_num = num2 - 1;
                this.CalculateDropGoldOtherPosList(base_pos2, left_num, t_one_drop_tbl.base);
              }
              this.drop_gold_tbl.set(drop_gold_num, t_one_drop_tbl);
            }
          }
          //        /**
          //         * 计算边界
          //         * @param t_one 单个信息
          //         */
          ;

          _proto.GetDropTblPos_XY_MaxMinValue = function GetDropTblPos_XY_MaxMinValue(t_one) {
            var x_min = t_one.base[0].x;
            var x_max = t_one.base[0].x;
            var y_min = t_one.base[0].y;
            var y_max = t_one.base[0].y;
            for (var _iterator = _createForOfIteratorHelperLoose(t_one.base), _step; !(_step = _iterator()).done;) {
              var one = _step.value;
              if (x_min > one.x) {
                x_min = one.x;
              }
              if (x_max < one.x) {
                x_max = one.x;
              }
              if (y_min > one.y) {
                y_min = one.y;
              }
              if (y_max < one.y) {
                y_max = one.y;
              }
            }
            t_one.l = x_min - this.gold_width / 2;
            t_one.r = x_max + this.gold_width / 2;
            t_one.t = y_max + this.gold_height / 2;
            t_one.b = y_min - this.gold_height / 2;
          }
          //        /**
          //         * 计算所有金币边界信息
          //         */
          ;

          _proto.CalculateDropGoldTblBoundary = function CalculateDropGoldTblBoundary() {
            var _this2 = this;
            this.drop_gold_tbl.forEach(function (v) {
              _this2.GetDropTblPos_XY_MaxMinValue(v);
            });
          }
          //        //行列值转换坐标值 row,col => x,y
          ;

          _proto.GetXYFromRowCol = function GetXYFromRowCol(row, col) {
            var gird_row = Math.floor(row);
            var gird_col = Math.floor(col);
            var one_net_gird = this.net_gird.get(gird_row).get(gird_col);
            if (!one_net_gird) {
              return v2(0, 0);
            }
            this.sizeVisble = view.getVisibleSize();
            if (this.v_width != this.sizeVisble.width) {
              this.v_width = this.sizeVisble.width;
              this.v_hight = this.sizeVisble.height;
              this.width = this.v_width / this.c_col_num;
              this.hight = this.v_hight / this.c_row_num;
              this.init();
            }
            var x = one_net_gird.rect.x + (col - gird_col) * one_net_gird.rect.width - this.v_width / 2;
            var y = one_net_gird.rect.y + (row - gird_row) * one_net_gird.rect.height - this.v_hight / 2;
            return v2(x, y);
          };
          _createClass(Util, null, [{
            key: "ins",
            get: function get() {
              return this._ins;
            }
          }, {
            key: "viewMgr",
            get: function get() {
              var mMgr = MainManager.getInstance();
              var vMgr = mMgr ? mMgr.getViewManager() : null;
              return vMgr;
            }
          }, {
            key: "soundMgr",
            get: function get() {
              var mMgr = MainManager.getInstance();
              var sMgr = mMgr ? mMgr.getAudioManager() : null;
              return sMgr;
            }
          }, {
            key: "dataMgr",
            get: function get() {
              return DataManager;
            }
          }, {
            key: "bundle",
            get: function get() {
              //            // let mMgr = MainManager.getInstance();
              //            // let vMgr = mMgr ? mMgr.getViewManager() : null;
              //            // return vMgr ? assetManager.getBundle(GameDef.Game.FishGame) : null;
              return assetManager.getBundle(GameDef.Game.FishGame);
            }
          }]);
          return Util;
        }();
        Util._ins = null;
        _FishDef.Util = Util;
        var Data = /*#__PURE__*/function () {
          function Data() {}
          _createClass(Data, null, [{
            key: "Rooms",
            get: function get() {
              return [{
                room_id: FishDef.ROOM_LV.LV1,
                name: "欢乐厅",
                coins_arr: [100, 200, 300, 500, 800, 1000]
              }, {
                room_id: FishDef.ROOM_LV.LV2,
                name: "富豪厅",
                coins_arr: [1000, 2000, 3000, 5000, 8000, 10000]
              }, {
                room_id: FishDef.ROOM_LV.LV3,
                name: "财神厅",
                coins_arr: [10000, 20000, 30000, 50000, 80000, 100000]
              }];
            }
          }]);
          return Data;
        }();
        _FishDef.Data = Data;
      })(FishDef || (FishDef = exports('FishDef', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishEffectMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishLight.ts', './FishMyRedpacket.ts', './FishSound.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, v3, instantiate, view, v2, AutoEventNode, GUtil, FishDataMgr, FishDef, FishLight, FishMyRedpacket, FishSound;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      instantiate = module.instantiate;
      view = module.view;
      v2 = module.v2;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishLight = module.default;
    }, function (module) {
      FishMyRedpacket = module.default;
    }, function (module) {
      FishSound = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "8eaa9R9lhJNqrcTOI5dJVDh", "FishEffectMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishLightMgr = exports('default', (_dec = ccclass("FishEffectMgr"), _dec(_class = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishLightMgr, _AutoEventNode);
        function FishLightMgr() {
          return _AutoEventNode.apply(this, arguments) || this;
        }
        var _proto = FishLightMgr.prototype;
        _proto.onLoad = function onLoad() {
          var _this = this;
          this.OnEvent(FishDef.Event.EFFECT_LIGHTING, function (data) {
            var pos = GUtil.Pos_W2L_V2(v3(data.startPos.x, data.startPos.y), _this.node);
            var lightCounts = Math.floor(Math.random() * 5) + data.endPosList.length;
            if (lightCounts < 5) {
              lightCounts = 5;
            }
            var prefab = FishDataMgr.resHolder ? FishDataMgr.resHolder.getPrefabByName("Node_light") : null;
            if (prefab) {
              //                // gts.Debug.Log("开火发射--闪电动效");
              FishSound.PlaySound(FishDef.Sound.JELLYFISH_EFFECT);
              for (var i = 0; i < lightCounts; i++) {
                var tempLight = instantiate(prefab);
                _this.node.addChild(tempLight);
                var com = tempLight.getComponent(FishLight);
                var visibleSize = view.getVisibleSize();
                var pWidth = 750 * visibleSize.width / visibleSize.height - 80;
                var pHeight = 750 - 100;
                var endPos = null;
                if (i < data.endPosList.length) {
                  var ePos = data.endPosList[i];
                  endPos = GUtil.Pos_W2L_V2(v3(ePos.x, ePos.y), _this.node);
                } else {
                  endPos = v2(pWidth / 2.0 - Math.random() * pWidth, pHeight / 2.0 - Math.random() * pHeight + 50);
                }
                com.setLightAnimation(pos, endPos);
              }
            }
          });
          this.OnEvent(FishDef.Event.EFFECT_REDPACKET, function (msg) {
            var prefab = FishDataMgr.resHolder ? FishDataMgr.resHolder.getPrefabByName("Node_myRedpacket") : null;
            if (prefab) {
              var tempRedpacket = instantiate(prefab);
              var script = tempRedpacket.getComponent(FishMyRedpacket);
              script.setAnimation(msg);
              _this.node.addChild(tempRedpacket);
            }
          });
        };
        _proto.start = function start() {}
        //    // update (dt) {}
        ;

        return FishLightMgr;
      }(AutoEventNode)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishGame", ['./AnimationSet.ts', './CameraFit.ts', './ColliderNotify.ts', './UIDlgFishHelper.ts', './UIItemFishInfo.ts', './EffWaterWave.ts', './EffWaterWave_plane.ts', './FishConfig.ts', './FishDataMgr.ts', './FishDef.ts', './FishGameScene.ts', './FishBulletMgr.ts', './FishCfgMgr.ts', './FishCoinMgr.ts', './FishEffectMgr.ts', './FishObjMgr.ts', './FishPlayerMgr.ts', './UIFishGame.ts', './UIFishPlayer.ts', './UIFishSettings.ts', './FishMsgSender.ts', './FishPathCtrl.ts', './FishSound.ts', './NodeSizeListener.ts', './FishBullet.ts', './FishCoin.ts', './FishLight.ts', './FishMyRedpacket.ts', './FishNet.ts', './FishNet_drill.ts', './FishNet_fireGun.ts', './FishObj.ts', './FishObj_skeleton.ts', './FishObj_spine.ts', './FishWheel.ts', './Fish_specialTip.ts', './PathSys.ts', './FishUIBtnSelRoom.ts', './FishUISelRoom.ts', './ShowHideEvent.ts', './aniClip.ts', './pathTest.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/FishGameScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AutoEventNode.ts', './GUtil.ts', './AudioManager.ts', './NetManager.ts', './ViewManager.ts', './Common.ts', './FishConfig.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './FishSound.ts', './FishUISelRoom.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Prefab, view, find, ProgressBar, Tween, tween, isValid, v3, UIOpacity, instantiate, i18n, AutoEventNode, GUtil, AudioManager, NetManager, ViewManager, Common, FishCfg, FishDataMgr, FishDef, FishMsgSender, FishSound, FishUISelRoom, ConfigManager, DataManager, UserKey, EventManager;
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
      Prefab = module.Prefab;
      view = module.view;
      find = module.find;
      ProgressBar = module.ProgressBar;
      Tween = module.Tween;
      tween = module.tween;
      isValid = module.isValid;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      instantiate = module.instantiate;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      FishUISelRoom = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "52e87aPdcFOs5FYqWRzoSJz", "FishGameScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishGameScene = exports('default', (_dec = ccclass("FishGameScene"), _dec2 = property({
        displayName: "打印调试日志"
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishGameScene, _AutoEventNode);
        function FishGameScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "printDebugLog", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_enterLoading", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeSelRoom", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefabDlgHelper", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeTopUILayer", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeGameLayer", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labLoadingTip", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "disConnected_tip", _descriptor8, _assertThisInitialized(_this));
          _this._nodeFishGame = null;
          return _this;
        }
        var _proto = FishGameScene.prototype;
        _proto.onLoad = function onLoad() {
          var bundle = FishDef.Util.bundle;
          //        // bundle.preload("prefab/fish_game");
          bundle.preloadDir("prefab");
          ViewManager.instance.delMiniLayer();
          FishDef.Util.Init();
          if (!this.printDebugLog) {
            gts.Debug.enableLog = false;
          }
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
        };
        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
        };
        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        _proto.onResize = function onResize() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2.EmitEvent(FishDef.Event.UPDATE_UI_ROTATE);
          }, 0.1);
        };
        _proto.setLoadingProgress = function setLoadingProgress(progress, cb) {
          var _this3 = this;
          var ProgressBar_load = find("ProgressBar_load", this._enterLoading);
          if (!ProgressBar_load.active) {
            ProgressBar_load.active = true;
            ProgressBar_load.getComponent(ProgressBar).progress = 0;
          }
          if (progress > 0 && progress < 100) {
            var dis = progress / 100.0 - ProgressBar_load.getComponent(ProgressBar).progress;
            if (dis <= 0) {
              return;
            }
            Tween.stopAllByTarget(ProgressBar_load);
            tween(ProgressBar_load).repeat(Math.round(dis / 0.05), tween(ProgressBar_load).delay(0.05).call(function () {
              if (ProgressBar_load.getComponent(ProgressBar).progress < 1.0) {
                ProgressBar_load.getComponent(ProgressBar).progress += 0.05;
                if (cb && ProgressBar_load.getComponent(ProgressBar).progress > 0.9996) {
                  _this3.scheduleOnce(function () {
                    ProgressBar_load.active = false;
                    if (isValid(_this3._enterLoading)) {
                      var Label_loadingTip = find("Label_loadingTip", _this3._enterLoading);
                      if (isValid(Label_loadingTip)) {
                        Label_loadingTip.active = false;
                      }
                    }
                    cb();
                  }, 0.25);
                }
              }
            })).start();
          }
        };
        _proto.doLoadingTip = function doLoadingTip(isShow) {
          var _this4 = this;
          GUtil.NodeVisible(this._enterLoading, isShow);
          if (isShow) {
            var LoadingType = i18n.t("LoadingType");
            gts.UI.SetLab(this.labLoadingTip, LoadingType.LoadRes);
            var loadAni = this._enterLoading.getChildByName("ani");
            var winSize = view.getVisibleSize();
            loadAni.scale = v3(winSize.width / 1330 + 0.5, winSize.height / 755 + 0.5, loadAni.scale.z);
            var Label_loadingTip = find("Label_loadingTip", this._enterLoading);
            Label_loadingTip.active = true;
            var arrStrLoadingTip = i18n.t("strLoadingTip");
            gts.UI.SetLab(Label_loadingTip, arrStrLoadingTip[Math.floor(Math.random() * arrStrLoadingTip.length)]);
            tween(this._enterLoading).repeatForever(tween(this._enterLoading).delay(3.5).call(function () {
              var Label_loadingTip = find("Label_loadingTip", _this4._enterLoading);
              tween(Label_loadingTip.getComponent(UIOpacity)).to(0.5, {
                opacity: 0
              }).call(function () {
                var arrStrLoadingTip = i18n.t("strLoadingTip");
                gts.UI.SetLab(Label_loadingTip, arrStrLoadingTip[Math.floor(Math.random() * arrStrLoadingTip.length)]);
              }).to(0.5, {
                opacity: 255
              }).start();
            })).start();
            this.setLoadingProgress(Math.floor(Math.random() * 10 + 20));
          } else {
            var ProgressBar_load = find("ProgressBar_load", this._enterLoading);
            Tween.stopAllByTarget(ProgressBar_load);
            Tween.stopAllByTarget(this._enterLoading);
          }
        };
        _proto.reSendEnterRoom = function reSendEnterRoom() {
          if (FishDataMgr.lastSelRoomId) {
            FishMsgSender.Send_EnterRoom({
              tableType: FishDataMgr.lastSelRoomId
            });
          }
        };
        _proto.start = function start() {
          var _this5 = this;
          _AutoEventNode.prototype.start.call(this);
          AudioManager.instance.stopAll();

          //        //! 打开帮助界面
          this.OnEvent(FishDef.Event.OPEN_HELPER, function () {
            if (_this5.prefabDlgHelper) {
              var clone = instantiate(_this5.prefabDlgHelper);
              clone.parent = _this5.topUILayer;
            }
          });

          //        //! 进入游戏
          this.OnEvent(FishDef.Event.ENTER_GAME, this.DoEnterGame);
          this.OnEvent(FishDef.Event.SELECT_ROOM, function (info) {
            //            //! 选择房间开启loading，加载房间资源并进入房间
            //            // this.EmitEvent(FishDef.Event.ENTER_GAME);
            //            //! 保存最后选择的ID
            FishDataMgr.lastSelRoomId = info.room_id;

            //            //loading 加载提示
            _this5.doLoadingTip(true);
            //            // gts.Debug.Log("===进入游戏====SELECT_ROOM=====doLoadingTip=======");
            //            //
            _this5.DoEnterGame();
          });
          this.OnEvent(FishDef.Event.LOAD_PROGRESS, this.setLoadingProgress);
          this.OnEvent(FishDef.Event.EXIT_GAME, function () {
            _this5.DoExitGame();
          });
          this.OnEvent(FishDef.Event.ENTER_GAME_COMPLETED, function () {
            gts.UI.SetLab(_this5.labLoadingTip, i18n.t("LoadingType").EnterRoom);
            _this5.reSendEnterRoom();
            _this5.schedule(_this5.reSendEnterRoom, 2);
          });
          this.OnEvent(FishDef.MsgID.HD_fishConfig, function (data) {
            if (!data.Data) {
              return;
            }
            var msg = JSON.parse(data.Data);
            //            //设置配置文件
            if (msg) {
              for (var _i = 0, _Object$entries = Object.entries(msg); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _Object$entries[_i],
                  key = _Object$entries$_i[0],
                  cfgInfo = _Object$entries$_i[1];
                var cfgData = FishCfg.data[cfgInfo.ID];
                if (!cfgData) {
                  return;
                }
                cfgData.Name = cfgInfo.Name; //鱼的名字
                cfgData.RewardMin = cfgInfo.RewardMin; //最小奖励倍数
                cfgData.RewardMax = cfgInfo.RewardMax; //最大奖励倍数
                cfgData.KillProMin = cfgInfo.KillProMin; //最小击杀概率
                cfgData.KillProMax = cfgInfo.KillProMax; //最大击杀概率
                cfgData.Time = cfgInfo.Time; //生存时间周期
                cfgData.FType = cfgInfo.FType == 1 ? 1 : 0; // 0普通鱼, 1
                cfgData.Interval = cfgInfo.Interval; //两条同路径最小间隔时间
              }
            }
          });

          this.OnEvent(FishDef.MsgID.HD_roomInfo, function (data) {
            if (data.Code != 0) {
              gts.Debug.LogErr("===HD_roomInfo===data.Code===" + data.Code);

              //                //重新进入房间
              _this5.reSendEnterRoom();
              return;
            }
            //            //加载提示
            var msg = data.Data;

            //            // gts.Debug.Log("===游戏中重载====HD_roomInfo===data===" + JSON.stringify(data));

            //            //! 进入房间错误
            if (!msg || msg.serverTime < 0) {
              _this5.DoExitGame();
            } else {
              FishDataMgr.TimeSync(msg.serverTime);

              //                //将自己移到下标0
              for (var i = 0; msg.players && i < msg.players.length; ++i) {
                var player = msg.players[i];
                if (player.uid == FishDataMgr.myUid) {
                  var p0 = msg.players[0];
                  msg.players[i] = p0;
                  msg.players[0] = player;
                  break;
                }
              }
              _this5.EmitEvent(FishDef.Event.RESET_PLAYER_INFO);
              FishDataMgr.isLockMask = false;
              FishDataMgr.fireLocking = false;

              //                // this.scheduleOnce(() => {
              //                //     //初始化玩家
              //                //     for (let i = 0; msg.players && i < msg.players.length; ++i) {
              //                //         let player = msg.players[i];
              //                //         this.EmitEvent(FishDef.Event.SET_PLAYER_INFO, { localsid: player.seat, info: player });
              //                //     }

              //                //     //! 处理已存在的鱼
              //                //     this.EmitEvent(FishDef.Event.UPDATE_FISH_GROUP, msg.fishs, msg.serverTime);
              //                //     this.EmitEvent(FishDef.Event.UPDATE_UI_ROTATE);
              //                // }, 0.1);

              //                //初始化玩家
              for (var _i2 = 0; msg.players && _i2 < msg.players.length; ++_i2) {
                var _player = msg.players[_i2];
                _this5.EmitEvent(FishDef.Event.SET_PLAYER_INFO, {
                  localsid: _player.seat,
                  info: _player
                });
              }

              //                //! 处理已存在的鱼
              _this5.EmitEvent(FishDef.Event.UPDATE_FISH_GROUP, msg.fishs, msg.serverTime);
              _this5.scheduleOnce(function () {
                _this5.EmitEvent(FishDef.Event.UPDATE_UI_ROTATE);
              }, 0.1);
            }
          });
          this.OnEvent(FishDef.MsgID.S2C_ENTER_ROOM, function (data) {
            _this5.unschedule(_this5.reSendEnterRoom);
            if (data.Code != 0) {
              Common.showTip(i18n.errTip(data.Code));
              _this5.scheduleOnce(function () {
                if (_this5._enterLoading.active) {
                  _this5.doLoadingTip(false);
                }
                _this5.DoExitGame();
              }, 2.0);
              return;
            }

            //            //加载提示
            var msg = data.Data;
            gts.Debug.Log("===进入游戏====S2C_ENTER_ROOM===data===" + JSON.stringify(data));
            //            //! 进入房间错误
            if (!msg || msg.serverTime < 0) {
              _this5.DoExitGame();
            } else {
              if (null !== msg.myuid && undefined !== msg.myuid) {
                FishDataMgr.ins.FillTestDatas(msg.myuid);
              }
              FishDataMgr.TimeSync(msg.serverTime);

              //                //将自己移到下标0
              for (var i = 0; msg.players && i < msg.players.length; ++i) {
                var player = msg.players[i];
                if (player.uid == FishDataMgr.myUid) {
                  DataManager.instance.setUserDataForKey(UserKey.GOLD, player.wallet);
                  var p0 = msg.players[0];
                  msg.players[i] = p0;
                  msg.players[0] = player;
                  break;
                }
              }
              _this5.EmitEvent(FishDef.Event.RESET_PLAYER_INFO);
              FishDataMgr.isLockMask = false;
              FishDataMgr.fireLocking = false;

              //                //初始化玩家
              for (var _i3 = 0; msg.players && _i3 < msg.players.length; ++_i3) {
                var _player2 = msg.players[_i3];
                _this5.EmitEvent(FishDef.Event.SET_PLAYER_INFO, {
                  localsid: _player2.seat,
                  info: _player2
                });
              }

              //                //! 处理已存在的鱼
              _this5.EmitEvent(FishDef.Event.SYNC_FISH_GROUP, msg.fishs);
              _this5.scheduleOnce(function () {
                _this5.EmitEvent(FishDef.Event.UPDATE_UI_ROTATE);
              }, 0.1);
              _this5.setLoadingProgress(99.99, function () {
                _this5.EmitEvent(FishDef.Event.SET_SCENE_INFO, {
                  sceneID: msg.scene ? msg.scene : Math.floor(Math.random() * 5),
                  waveID: Math.floor(Math.random() * 4),
                  fCallBack: function fCallBack() {
                    _this5.doLoadingTip(false);
                  }
                });
              });
            }
          });
          this.OnDisConnected(function () {
            if (isValid(_this5.disConnected_tip)) {
              _this5.disConnected_tip.active = true;
            }
            _this5.scheduleOnce(function () {
              if (_this5.disConnected_tip.active) {
                _this5.EmitEvent(FishDef.Event.EXIT_GAME);
                if (_this5._enterLoading.active) {
                  _this5.doLoadingTip(false);
                }
              }
            }, 0);
          });
          this.OnRConnected(function () {
            NetManager.instance.waitServiceSendData();
            if (isValid(_this5.disConnected_tip)) {
              _this5.disConnected_tip.active = false;
            }
            if (_this5._enterLoading.active) {
              _this5.doLoadingTip(false);
            }
            _this5.EmitEvent(FishDef.Event.EXIT_GAME);
          });
          FishMsgSender.Send_fishConfig();
        };
        _proto.onClickDisConnectedBg = function onClickDisConnectedBg() {
          if (isValid(this.disConnected_tip)) {
            this.disConnected_tip.active = false;
          }
          if (this._enterLoading.active) {
            this.doLoadingTip(false);
          }
        }
        //    // update (dt) {}
        ;

        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          FishDef.Util.Clear();
        }
        //    //! 离开房间
        ;

        _proto.DoExitGame = function DoExitGame() {
          if (this._nodeFishGame) {
            FishSound.StopBGM();
            FishSound.PlayBGM(FishDef.Sound.BGM_SEL);
            this._nodeFishGame.removeFromParent();
            this._nodeFishGame.destroy();
            this._nodeFishGame = null;
            FishDataMgr.curRoomInfo = null;
            GUtil.NodeVisible(this.nodeSelRoom, true);
            var ui_layer = find("ui_layer", this.nodeSelRoom);
            if (isValid(ui_layer)) {
              var fishUIBtnSelRoom = ui_layer.getComponent(FishUISelRoom);
              if (isValid(fishUIBtnSelRoom)) {
                fishUIBtnSelRoom.UpdateSoundBtnFrame();
              }
            }
          }
        }
        //    //! 进入游戏
        ;

        _proto.DoEnterGame = function DoEnterGame() {
          var _this6 = this;
          if (!this.nodeGameLayer) {
            gts.Debug.LogErr("FishGameScene:DoEnterGame error, nodeGameLayer is null");
            return;
          }
          if (this._nodeFishGame) {
            gts.Debug.LogErr("FishGameScene:DoEnterGame error, \u5DF2\u7ECF\u5728\u6E38\u620F\u4E2D!!!");
            return;
          }
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            gts.Debug.LogErr("Error:FishGame bundle is nil");
            return;
          }
          bundle.load("prefab/fish_game", Prefab, function (finished, total) {}, function (err, assets) {
            if (err) {
              gts.Debug.LogErr("" + err);
            } else {
              var clone = instantiate(assets);
              clone.parent = _this6.nodeGameLayer;
              _this6._nodeFishGame = clone;
              GUtil.NodeVisible(_this6.nodeSelRoom, false);

              //                    // gts.Debug.Log("===进入游戏====DoEnterGame=====load--prefab/fish_game--=======");
            }
          });
        };

        _createClass(FishGameScene, [{
          key: "autoReListenMsg",
          get:
          //    // LIFE-CYCLE CALLBACKS:
          function get() {
            return true;
          }
        }, {
          key: "topUILayer",
          get: function get() {
            return this.nodeTopUILayer ? this.nodeTopUILayer : this.node;
          }
        }]);
        return FishGameScene;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "printDebugLog", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_enterLoading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeSelRoom", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "prefabDlgHelper", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "nodeTopUILayer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nodeGameLayer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labLoadingTip", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "disConnected_tip", [_dec9], {
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

System.register("chunks:///_virtual/FishLight.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishConfig.ts', './FishDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, v3, SpriteAtlas, UITransform, tween, v2, Component, FishCfg, FishDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      SpriteAtlas = module.SpriteAtlas;
      UITransform = module.UITransform;
      tween = module.tween;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "fe9b0uGIOVMDreExFLWuSaA", "FishLight", undefined);
      var ccclass = _decorator.ccclass;
      var FishLight = exports('default', (_dec = ccclass("FishLight"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishLight, _Component);
        function FishLight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this._ani = null;
          _this._curAniInfo = null;
          return _this;
        }
        var _proto = FishLight.prototype;
        _proto.setLightAnimation = function setLightAnimation(startPos, endPos) {
          var _this2 = this;
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            gts.Debug.LogErr("#FishGame \u64AD\u653E\u52A8\u753B\u5931\u8D25\uFF0C\u627E\u4E0D\u5230\u52A8\u753B\u7EC4\u4EF6");
            return;
          }

          //        //
          this.node.position = v3(startPos.x, startPos.y, 0);
          var atlasIndex = Math.floor(Math.random() * 4) + 1;
          var iFrameRoot = atlasIndex * 5;
          var fixedSID = gts.Str.FmtStr("SD_0{0:M2}", iFrameRoot);
          bundle.load("spine/effect/jellyfish_light/lighting_level_" + atlasIndex, SpriteAtlas, function (err, atlas) {
            _this2._curAniInfo = {
              atlas: atlas,
              frameCnt: atlas ? atlas.getSpriteFrames().length : 0,
              frameFmt: fixedSID + "_0{0:M2}",
              startIdx: 0,
              frameDt: FishCfg.FrameDt
            };
            _this2.PlayAni(_this2.ani);
            var length = _this2.getDistance(startPos, endPos);
            _this2.node.scale = v3(length / _this2.node.getComponent(UITransform).height, length / _this2.node.getComponent(UITransform).height, 1);
            if (_this2.node.scale.x > 2.5) {
              _this2.node.scale = v3(2.5, _this2.node.scale.y, 1);
            } else if (_this2.node.scale.x < 1) {
              _this2.node.scale = v3(1, _this2.node.scale.y, 1);
            }
            _this2.node.angle = _this2.getAngle(startPos, endPos) + 90;
            tween(_this2.node).delay(1.5).removeSelf().start();
          });
        }
        //    // 距离
        ;

        _proto.getDistance = function getDistance(start, end) {
          var pos = v2(start.x - end.x, start.y - end.y);
          var dis = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
          return dis;
        }
        //    // 角度
        ;

        _proto.getAngle = function getAngle(start, end) {
          //        //计算出朝向
          var dx = end.x - start.x;
          var dy = end.y - start.y;
          var dir = v2(dx, dy);

          //        //根据朝向计算出夹角弧度
          var angle = dir.signAngle(v2(1, 0));

          //        //将弧度转换为欧拉角
          var degree = angle / Math.PI * 180;
          return -degree;
        };
        _proto.PlayAni = function PlayAni(ani) {
          if (!ani || !this._curAniInfo) {
            return false;
          }
          ani.atlas = this._curAniInfo.atlas;
          ani.frameCnt = this._curAniInfo.frameCnt;
          ani.frameNameFmt = this._curAniInfo.frameFmt;
          ani.SetDurationType(gts.DurationType.SINGLE_FRAME);
          ani.duration = this._curAniInfo.frameDt;
          ani.startIdx = this._curAniInfo.startIdx;
          ani.Play(-1);
          return true;
        };
        _createClass(FishLight, [{
          key: "ani",
          get: function get() {
            if (!this._ani) {
              //@ts-ignore
              this._ani = this.node.getComponent(gts.FrameAnimation);
            }
            return this._ani;
          }
        }]);
        return FishLight;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishMsgSender.ts", ['cc', './GameDef.ts', './NetManager.ts', './FishDataMgr.ts', './FishDef.ts'], function (exports) {
  var cclegacy, GameDef, NetManager, FishDataMgr, FishDef;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0a226w5okFIPZsEKsTzpHW0", "FishMsgSender", undefined);
      var FishMsgSender = exports('default', /*#__PURE__*/function () {
        function FishMsgSender() {}
        FishMsgSender.SendData = function SendData(msgid, data) {
          //        // let log = `发送消息， msgId:${msgid}, data:${JSON.stringify(data)}`;
          NetManager.instance.sendOnlineData("" + msgid, data);
        };
        FishMsgSender.SendDataInSocketIO = function SendDataInSocketIO(msgid, data) {
          if (window["gtsio"]["SockIO"]) {
            window["gtsio"]["SockIO"].SendJson("" + msgid, data, GameDef.Game.FishGame, false);
          }
        }
        //    /** 请求进入房间 */
        ;

        FishMsgSender.Send_EnterRoom = function Send_EnterRoom(msg) {
          this.SendData(FishDef.MsgID.C2S_ENTER_ROOM, msg);
        };
        FishMsgSender.Send_FireReq = function Send_FireReq(msg) {
          msg.action = FishDef.Action.PlayerFire;
          this.SendData(FishDef.MsgID.C2S_FIRE, msg);
          FishMsgSender._fireNum++;
          gts.Debug.Log("# FishGame:\u8BF7\u6C42\u5F00\u706B FishMsgSender._fireNum" + FishMsgSender._fireNum + ", msg;" + JSON.stringify(msg));
        }
        //    /**
        //     * 请求鱼配置
        //     * @param msg
        //     */
        ;

        FishMsgSender.Send_fishConfig = function Send_fishConfig() {
          //        // return;

          //        // msg["action"] = FishDef.Action.KillFish;
          this.SendData(FishDef.MsgID.HD_fishConfig, {});
          //        // gts.Debug.Log(`# FishGame:请求鱼配置, msg;${JSON.stringify(msg)}`);
        }
        //    //HD_roomInfo
        //    /**
        //     * 请求房间信息
        //     * @param msg
        //     */
        ;

        FishMsgSender.Send_getRoomInfo = function Send_getRoomInfo() {
          //        // return;

          //        // msg["action"] = FishDef.Action.KillFish;
          this.SendData(FishDef.MsgID.HD_roomInfo, {});
          //        // gts.Debug.Log(`# FishGame:请求房间信息, msg`);
        }
        //    //! 请求换炮
        ;

        FishMsgSender.Send_ExchangeCannon = function Send_ExchangeCannon(msg) {
          msg.action = FishDef.Action.ChangeCannon;
          this.SendData(FishDef.MsgID.C2S_EXCHANGE_CANNON, msg);
        }
        //    //! 请求捕获
        ;

        FishMsgSender.Send_CachFish = function Send_CachFish(msg) {
          //        // return;

          msg["action"] = FishDef.Action.KillFish;
          this.SendData(FishDef.MsgID.C2S_CATCH_FISH, msg);
          gts.Debug.Log("# FishGame:\u8BF7\u6C42\u6355\u83B7, bid;" + msg.bid);
          FishDataMgr.delBID(msg.bid);
        }
        //    //! 请求群杀捕获
        ;

        FishMsgSender.Send_CachFishs = function Send_CachFishs(msg) {
          msg["action"] = FishDef.Action.KillFishs;
          this.SendData(FishDef.MsgID.C2S_KILL_FISHS, msg);
          //        // gts.Debug.Log(`# FishGame:请求群杀捕获, msg;${JSON.stringify(msg)}`);
        }
        //    //! 请求离开
        ;

        FishMsgSender.Send_Leave = function Send_Leave() {
          var msg = {
            action: "PlayerLeave"
          };
          this.SendData(FishDef.MsgID.C2S_PLAYER_LEAVE, msg);
          //        // gts.Debug.Log(`# FishGame:玩家发送离开, msg;${JSON.stringify(msg)}`);
        }
        //    //! 福袋点击 通知
        ;

        FishMsgSender.Send_RedPacketOpen = function Send_RedPacketOpen(msg) {
          msg["action"] = FishDef.Action.OpenFuDai;
          this.SendData(FishDef.MsgID.C2S_REDPACKET_OPEN, msg);
          //        // gts.Debug.Log(`==============福袋点击 通知============`);
        }
        //    //! 技能状态 通知
        ;

        FishMsgSender.Send_ChangeSkillStatus = function Send_ChangeSkillStatus(msg) {
          msg["action"] = FishDef.Action.ChangeSkillStatus;
          this.SendData(FishDef.MsgID.HD_changeSkillStatus, msg);
        }
        //    //! 轮轴点击 通知
        ;

        FishMsgSender.Send_openLunZhou = function Send_openLunZhou(msg) {
          if (msg === void 0) {
            msg = {};
          }
          msg["action"] = FishDef.Action.OpenLunZhou;
          this.SendData(FishDef.MsgID.C2S_HD_openLunZhou, msg);
          //        // gts.Debug.Log(`==============轮轴点击 通知============`);
        };

        return FishMsgSender;
      }());
      FishMsgSender._fireNum = 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishMyRedpacket.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishPlayerMgr.ts', './FishSound.ts', './I18n.ts', './FishMsgSender.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Font, sp, Button, v3, find, UIOpacity, tween, Label, RichText, Component, v2, Tween, Common, AutoEventNode, GUtil, FishDataMgr, FishDef, FishPlayerMgr, FishSound, i18n, FishMsgSender;
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
      Font = module.Font;
      sp = module.sp;
      Button = module.Button;
      v3 = module.v3;
      find = module.find;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Label = module.Label;
      RichText = module.RichText;
      Component = module.Component;
      v2 = module.v2;
      Tween = module.Tween;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishPlayerMgr = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      FishMsgSender = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "45bcfqITxVHs6QypaqPaoGZ", "FishMyRedpacket", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishMyRedpacket = exports('default', (_dec = ccclass("FishMyRedpacket"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property([Font]), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec8 = property([Button]), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishMyRedpacket, _Component);
        function FishMyRedpacket() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_skeleton", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_lbl", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lvFonts", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lbl_tip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_light", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "clickRedpacket", _descriptor7, _assertThisInitialized(_this));
          _this._fuDaiCount = [];
          _this.callback = void 0;
          _this._msg = void 0;
          _this._autoEvent = null;
          return _this;
        }
        var _proto = FishMyRedpacket.prototype;
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          //        // let skeleton = this.node.getComponent(sp.Skeleton);
          //        // skeleton.getComponent(sp.Skeleton).timeScale = 2.5; //打开动画加速2.5倍

          this.node_light.node.active = true;
          this.node_light.node.scale = v3(0.5, 0.5, 1);
          this.node_light.setAnimation(0, "animation", false);
          this.node_light.setCompleteListener(function () {
            _this2.node_light.setCompleteListener(null);
            _this2.node_light.node.active = false;
          });
          this.initRedpacketAni();
          this.clickRedpacket.forEach(function (element) {
            element.node.on(Node.EventType.MOUSE_MOVE, function (event) {
              FishDataMgr.hSetFocusPos(event.getLocation(), false);
            }, _this2);
            element.node.on(Node.EventType.TOUCH_MOVE, function (event) {
              FishDataMgr.hSetFocusPos(event.getLocation(), false);
            }, _this2);
            element.node.on(Node.EventType.TOUCH_END, function (event) {
              FishDataMgr.hSetFocusPos(event.getLocation(), false);
            }, _this2);
          });
        };
        //    //初始化福袋动画
        _proto.initRedpacketAni = function initRedpacketAni() {
          this.node_skeleton.active = true;
          for (var i = 1; i < this.node_skeleton.children.length + 1; ++i) {
            var btn_skeleton = find("btn_redpacket" + i, this.node_skeleton);
            btn_skeleton.scale = v3(0, 0, 1);
            btn_skeleton.getComponent(UIOpacity).opacity = 0;
            tween(btn_skeleton.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }, {
              easing: "cubicIn"
            }).start();
            tween(btn_skeleton).to(0.5, {
              scale: v3(1, 1, 1)
            }, {
              easing: "cubicIn"
            }).start();
          }
          this.countDown();
        };
        _proto.setAnimation = function setAnimation(msg) {
          this._msg = msg;
          this._fuDaiCount = msg.fuDaiRewardArr;
        }
        //    //点击福袋
        ;

        _proto.onClickRedpacket = function onClickRedpacket(event, customDdata) {
          var index = parseInt(customDdata);
          this.unschedule(this.callback);
          this.selectRedpacket(index);
          this.lbl_tip.active = false;
        }
        //    //选择福袋
        ;

        _proto.selectRedpacket = function selectRedpacket(index) {
          var _this3 = this;
          FishSound.PlaySound(FishDef.Sound.REDPACKET_CLICK);
          for (var i = 0; i < this.node_skeleton.children.length; ++i) {
            var btn_redpacket = this.node_skeleton.children[i];
            btn_redpacket.getComponent(Button).interactable = false;
          }
          var node_skeleton = find("btn_redpacket" + index + "/node_spine", this.node_skeleton);
          var skeleton = node_skeleton.getComponent(sp.Skeleton);
          skeleton.setAnimation(0, "select", false);
          skeleton.getComponent(sp.Skeleton).timeScale = 1;
          skeleton.getComponent(sp.Skeleton).setCompleteListener(function () {
            skeleton.getComponent(sp.Skeleton).setCompleteListener(null);
            node_skeleton.active = false;
            var win_node = find("lbl_redpacket" + index, _this3.node_lbl);
            win_node.active = true;
            var win_lbl = win_node.getComponent(Label);
            win_lbl.font = _this3.lvFonts[0];
            if (_this3._fuDaiCount[0]) {
              win_lbl.string = Common.numFormat("" + _this3._fuDaiCount[0]);
            }
            var temp = 0;
            var _loop = function _loop(_i) {
              if (_i == index) return 1; // continue
              var other_nodeskeleton = find("btn_redpacket" + _i + "/node_spine", _this3.node_skeleton);
              var other_skeleton = other_nodeskeleton.getComponent(sp.Skeleton);
              other_skeleton.setAnimation(0, "unselect", false);
              other_skeleton.getComponent(sp.Skeleton).timeScale = 1;
              other_skeleton.getComponent(sp.Skeleton).setCompleteListener(function () {
                other_skeleton.getComponent(sp.Skeleton).setCompleteListener(null);
                other_nodeskeleton.active = false;
                temp++;
                win_node = find("lbl_redpacket" + _i, _this3.node_lbl);
                win_node.active = true;
                var win_lbl = win_node.getComponent(Label);
                win_lbl.font = _this3.lvFonts[1];
                if (_this3._fuDaiCount[temp]) {
                  win_lbl.string = Common.numFormat("" + _this3._fuDaiCount[temp]);
                }
                var playerNode = FishPlayerMgr.ins.getPlayerNode(FishDataMgr.myUid);
                var pos = v2(0, 0);
                if (playerNode) {
                  var flip_node = find("playing/flip_node/head", playerNode.node);
                  pos = GUtil.Pos_L2W_V2(flip_node);
                  pos = GUtil.Pos_W2L_V2(v3(pos.x, pos.y), _this3.node.parent);
                  pos.y = pos.y > 0 ? pos.y - 100 : pos.y + 100;
                }
                if (temp == 1) {
                  tween(_this3.node).delay(0.5).call(function () {
                    FishSound.PlaySound(FishDef.Sound.DRILL_INTRO);
                    _this3.node_win.active = true;
                    var lbl_win = find("lbl_win", _this3.node_win);
                    lbl_win.scale = v3(0, 0, 1);
                    lbl_win.getComponent(UIOpacity).opacity = 0;
                    if (_this3._fuDaiCount[0]) {
                      lbl_win.getComponent(Label).string = Common.numFormat("" + _this3._fuDaiCount[0]);
                    }
                    tween(lbl_win.getComponent(UIOpacity)).to(0.5, {
                      opacity: 255
                    }).start();
                    tween(lbl_win).to(0.5, {
                      scale: v3(0.8, 0.8, 0.8)
                    }).start();
                    var spine = _this3.node_win.getComponent(sp.Skeleton);
                    spine.setAnimation(0, "enter_ch", false);
                    spine.addAnimation(0, "wait_ch", true);
                  }).delay(1.5).parallel(tween(_this3.node).to(0.4, {
                    position: v3(pos.x, pos.y, 0)
                  }, {
                    easing: "cubicIn"
                  }), tween(_this3.node).to(0.38, {
                    scale: v3(0, 0, 0)
                  }, {
                    easing: "cubicIn"
                  })).call(function () {
                    if (_this3._msg) {
                      _this3.recoveryCoin(_this3._msg);

                      //福袋开启 通知--服务端
                      FishMsgSender.Send_RedPacketOpen({
                        rewardNum: _this3._msg.rewardGolds
                      });
                    }
                    //启用特殊事件层
                    _this3.autoEvent.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
                    Tween.stopAllByTarget(_this3.node);
                    _this3.node.removeFromParent();
                    _this3.node.destroy();
                  }).start();
                }
              });
            };
            for (var _i = 1; _i < 6; ++_i) {
              if (_loop(_i)) continue;
            }
          });
        };
        _proto.recoveryCoin = function recoveryCoin(msg) {
          //        //生成金币提示
          var pos = GUtil.Pos_L2W_V2(this.node);
          var odds = msg.rewardGolds;
          var data = {
            msg: msg,
            pos: pos,
            odds: odds,
            onCoinRecycled: function onCoinRecycled() {}
          };
          this.autoEvent.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
        };
        _proto.countDown = function countDown() {
          var _this4 = this;
          var count = 13;
          this.callback = function () {
            if (count === 0) {
              _this4.unschedule(_this4.callback);
              _this4.selectRedpacket(1);
              _this4.lbl_tip.active = false;
              return;
            }
            count--;
            var lbl = find("rtx_tip", _this4.lbl_tip).getComponent(RichText);
            if (count < 11) {
              _this4.lbl_tip.active = true;
              lbl.string = Common.strFormat(i18n.lang.fishTip.fdTip, count);
            }
          };
          this.schedule(this.callback, 1);
        }
        //    // update (dt) {}
        ;

        _createClass(FishMyRedpacket, [{
          key: "autoEvent",
          get: function get() {
            if (!this._autoEvent) {
              this._autoEvent = AutoEventNode.BindNode(this.node);
            }
            return this._autoEvent;
          }
        }]);
        return FishMyRedpacket;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_lbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_win", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lvFonts", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_tip", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_light", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "clickRedpacket", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNet_drill.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDataMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, sp, UIOpacity, Component, FishDataMgr;
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
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      FishDataMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "37932IyhUNEkJLAsBsCMOEn", "FishNet_drill", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishNet_drill = exports('default', (_dec = ccclass("FishNetDrill"), _dec2 = property({
        displayName: "动画组件",
        type: sp.Skeleton,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishNet_drill, _Component);
        function FishNet_drill() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_ani", _descriptor, _assertThisInitialized(_this));
          _this.num = 0;
          return _this;
        }
        var _proto = FishNet_drill.prototype;
        _proto.start = function start() {};
        _proto.reuse = function reuse(uid) {
          uid = uid[0] || uid;
          this.node.getComponent(UIOpacity).opacity = FishDataMgr.myUid == uid ? 255 : 150;
          this.num = 0;
          this.setEffect();
        };
        _proto.setEffect = function setEffect() {
          var _this2 = this;
          this.scheduleOnce(function () {
            _this2._ani.setAnimation(0, "animation", true);
            _this2._ani.setCompleteListener(function () {
              _this2._ani.setCompleteListener(null);
              _this2.num++;
              //                // this.node.opacity = 255 / num;

              if (_this2.num > 3) {
                FishDataMgr.resHolder.RecycleNodeToPool(_this2.node);
              } else {
                _this2.setEffect();
              }
            });
          });
        };
        _proto.unuse = function unuse() {};
        return FishNet_drill;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ani", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNet_fireGun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDataMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, Component, FishDataMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      FishDataMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e9581sbGyNKgLcVZm0Yug/U", "FishNet_fireGun", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var NewClass = exports('default', (_dec = ccclass("FishNetFireGun"), _dec2 = property({
        displayName: "动画组件",
        type: gts.FrameAnimation,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NewClass, _Component);
        function NewClass() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_ani", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = NewClass.prototype;
        _proto.start = function start() {};
        _proto.reuse = function reuse(uid) {
          var _this2 = this;
          uid = uid[0] || uid;
          this.node.getComponent(UIOpacity).opacity = FishDataMgr.myUid == uid ? 255 : 150;
          this._ani.Play(1);
          this._ani.OnPlayCompletedNotify(function () {
            FishDataMgr.resHolder.RecycleNodeToPool(_this2.node);
          }, this);
        };
        _proto.unuse = function unuse() {};
        return NewClass;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_ani", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishNet.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDataMgr.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, UIOpacity, Component, FishDataMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      FishDataMgr = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "01e286ofIpJWq4+OxYakmrp", "FishNet", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishNet = exports('default', (_dec = ccclass("FishNet"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishNet, _Component);
        function FishNet() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.bid = void 0;
          _this.uid = void 0;
          _this.bType = void 0;
          return _this;
        }
        var _proto = FishNet.prototype;
        _proto.reuse = function reuse(bullet) {
          bullet = bullet[0] || bullet;
          this.bid = bullet.bid;
          this.uid = bullet.uid;
          this.bType = bullet.bulType;

          //        //
          this.node.getComponent(UIOpacity).opacity = FishDataMgr.myUid == this.uid ? 255 : 125;
          var frameCnt = [8, 11, 6, 10, 6, 6, 0, 6];
          if (frameCnt[this.bType - 1]) {
            this.PlayAni(frameCnt[this.bType - 1]);
          }
        };
        _proto.unuse = function unuse() {
          this.bid = 0;
          this.uid = "";
          this.bType = -1;
        };
        _proto.PlayAni = function PlayAni(frameCnt) {
          var _this2 = this;
          //@ts-ignore
          var ani = this.node.getComponent(gts.FrameAnimation);
          ani.frameCnt = frameCnt;
          ani.frameNameFmt = "fish_net_" + (this.bType - 1) + "_{0:M2}";
          ani.SetDurationType(gts.DurationType.SINGLE_FRAME);
          ani.duration = 0.03;
          ani.startIdx = 0;
          ani.Play(1);
          ani.OnPlayCompletedNotify(function () {
            FishDataMgr.resHolder.RecycleNodeToPool(_this2.node);
          }, this);
          return true;
        };
        return FishNet;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishObj_skeleton.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './ColliderNotify.ts', './FishConfig.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './PathSys.ts', './ShowHideEvent.ts', './FishBullet.ts', './MainManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, BoxCollider2D, Tween, tween, v3, UIOpacity, UITransform, v2, isValid, instantiate, Light, SkeletalAnimation, SkinnedMeshRenderer, Layers, MeshRenderer, color, AnimationClip, view, rect, Component, error, sys, AutoEventNode, GUtil, ColliderNotify, FishCfg, FishDataMgr, FishDef, FishMsgSender, FishPath, ShowHideEvent, FishBullet, MainManager;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      BoxCollider2D = module.BoxCollider2D;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      v2 = module.v2;
      isValid = module.isValid;
      instantiate = module.instantiate;
      Light = module.Light;
      SkeletalAnimation = module.SkeletalAnimation;
      SkinnedMeshRenderer = module.SkinnedMeshRenderer;
      Layers = module.Layers;
      MeshRenderer = module.MeshRenderer;
      color = module.color;
      AnimationClip = module.AnimationClip;
      view = module.view;
      rect = module.rect;
      Component = module.Component;
      error = module.error;
      sys = module.sys;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ColliderNotify = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishPath = module.FishPath;
    }, function (module) {
      ShowHideEvent = module.default;
    }, function (module) {
      FishBullet = module.default;
    }, function (module) {
      MainManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "75b8b6jLkVHAJn4zElgq9mb", "FishObj_skeleton", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var touchRectScale = {
        103: [0.5, 0.15],
        104: [0.5, 0.15],
        105: [1, 0.75],
        106: [0.75, 0.3],
        107: [0.5, 0.15],
        108: [0.5, 0.25],
        109: [0.5, 0.5],
        112: [1, 0.75],
        117: [0.8, 0.45],
        118: [2.0, 1.0],
        120: [0.35, 0.25],
        121: [0.35, 0.25],
        123: [1, 0.75],
        125: [2.75, 1.5],
        126: [0.75, 0.65],
        127: [1, 0.25]
      };
      var MAXDEPTH = 400;
      var MINDEPTH = 0;
      var DEPTH = MAXDEPTH - MINDEPTH;
      var DEPTHSMALL = MAXDEPTH / 2 - MINDEPTH;
      // //时间节点
      // // 扯旗鱼     普通游0-50       特殊游
      // // 灯笼鱼     普通游0-24       特殊游100-244
      // // 电鳗         普通游0-60      特殊游277-457
      // // 鲶鱼         普通游0-32      特殊游80-208
      // // 方鱼         普通游0-26      特殊游280-384
      // // 乌龟         普通游0-80      特殊游400-443
      // // 河豚         普通游0-90      特殊游100-280
      // // 剑鱼         普通游0-80      特殊游100-185
      // // 金枪鱼         普通游0-64      特殊游200-214
      // // 鲨鱼         普通游0-32     特殊游100-260
      // // 狮子鱼         普通游0-96      特殊游150-365
      // // 天使鱼         普通游0-16      特殊游30-46
      // // 小丑鱼         普通游0-54      特殊游80-242
      // // 小黄鱼         普通游0-80    特殊游
      // // 小绿鱼         普通游0-24      特殊游
      var FishObj_skeleton = exports('default', (_dec = ccclass("FishObjSkeleton"), _dec2 = property({
        displayName: "Fish配置ID"
      }), _dec3 = property({
        displayName: "旋转节点",
        type: Node,
        visible: true
      }), _dec4 = property({
        displayName: "选择节点角度",
        visible: true,
        type: Label
      }), _dec5 = property({
        displayName: "路径信息角度",
        visible: true,
        type: Label
      }), _dec6 = property({
        displayName: "body角度",
        visible: true,
        type: Label
      }), _dec7 = property({
        displayName: "碰撞组件",
        type: BoxCollider2D,
        visible: true
      }), _dec8 = property({
        type: ColliderNotify,
        visible: true
      }), _dec9 = property({
        type: Node,
        visible: true
      }), _dec10 = property({
        displayName: "击中时的颜色"
      }), _dec11 = property({
        type: Node,
        visible: true
      }), _dec12 = property({
        displayName: "默认移动速度:像素/秒"
      }), _dec13 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishObj_skeleton, _Component);
        function FishObj_skeleton() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fishTypeId", _descriptor, _assertThisInitialized(_this));
          //    // @property({ displayName: "动画组件", type: sp.Skeleton, visible: true })
          //    // private _ani: sp.Skeleton = null;
          //    // @property({ displayName: "body", type: Node, visible: true })
          _this._body = null;
          _this.bodyGeneration = 0;
          _initializerDefineProperty(_this, "_rotateNode", _descriptor2, _assertThisInitialized(_this));
          //    // @property({ displayName: "修正角度", visible: true })
          //    // private _fixAngle: boolean = false;
          _initializerDefineProperty(_this, "_labNdRotateAng", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_labInfoAngle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lab_body_angle", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_collider", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colliderNotify", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colOnHit", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_arrLock", _descriptor10, _assertThisInitialized(_this));
          _this._shEvent = null;
          //    //鱼属性
          _initializerDefineProperty(_this, "fMoveSpeed", _descriptor11, _assertThisInitialized(_this));
          //移动速度:像素/秒
          _this._moveDT = 0;
          //    //材质
          //    // @property({ type: SkinnedMeshRenderer, visible: true })
          _this._SkinnedMeshRenderer = null;
          //    // @property({ type: SkeletalAnimation, visible: true })
          _this._SkeletonAnimation = null;
          _initializerDefineProperty(_this, "_touchNode", _descriptor12, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    /** 唯一标识ID */
          _this._fid = 0;
          //    //! 鱼对象在服务器的创建时间
          _this._createTime = 0;
          _this._pathIdx = -1;
          _this._pathPos = null;
          _this.pathID = null;
          _this.OffsetX = 0;
          _this.OffsetY = 0;
          //    //! 当前状态
          _this._state = FishDef.State.DIE;
          _this._touchDisTimes = null;
          _this._fishMovingIntervalTime = -1;
          //鱼帧速率
          _this._autoEvent = null;
          _this._delayUpdate = -1;
          //    //!碰撞过的子弹
          _this._hasBid = new Set();
          //    //! 看上这鱼的玩家
          _this._lockers = new Set();
          _this._isVisible = false;
          //    //! 鱼潮路径系统
          _this._pathSys = null;
          _this._cfg = null;
          _this._moveSpd = 1;
          _this._moveTimes = 0;
          _this.liveTime = 0;
          _this.isNomal = true;
          _this.isHitColoring = false;
          return _this;
        }
        var _proto = FishObj_skeleton.prototype;
        //    //鱼潮开始前，退场--保持当前方向加速
        _proto.exitScene = function exitScene(exitSpeed) {
          if (exitSpeed === void 0) {
            exitSpeed = 750;
          }
          if (!this.isVisible) {
            Tween.stopAllByTarget(this.node);
            this.OnMoveFinished();
            return;
          }
          this._state = FishDef.State.exit;
          var angle = this._rotateNode.angle * Math.PI / 180;
          var disY = exitSpeed * Math.sin(angle);
          var disX = exitSpeed * Math.cos(angle);
          tween(this.node).repeatForever(tween(this.node).by(1.0, {
            position: v3(disX, disY, 0)
          })).start();
        };
        _proto.SetMoveSpd = function SetMoveSpd(spd) {} //        // gts.Debug.Log(`#FishGame 加速 ${spd} 倍`);
        ;

        _proto.reuse = /*#__PURE__*/function () {
          var _reuse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(msg) {
            var _this2 = this;
            var bodyGeneration, fishScale, sc, rotationX, rotationY, rotationZ, trs, scaleX, scaleY, pathPts;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  //        // gts.Debug.Log(`#FishGame 鱼对象复用`);
                  this.unuse();
                  bodyGeneration = this.bodyGeneration;
                  if (msg) {
                    _context.next = 4;
                    break;
                  }
                  return _context.abrupt("return");
                case 4:
                  //        // let arrType = [103, 104, 105, 106, 107, 108, 109, 112, 117, 118, 120, 121, 123, 125, 126, 127];
                  //        // msg.fishType = arrType[Math.floor(Math.random() * arrType.length)];
                  //        // msg.fishType = 103;
                  msg = msg[0] || msg;
                  this._fid = msg.fishID;
                  this.fishTypeId = "" + msg.fishType;
                  _context.next = 9;
                  return this.loadAnimation();
                case 9:
                  if (!(bodyGeneration !== this.bodyGeneration || !isValid(this.node, true) || !isValid(this._body, true))) {
                    _context.next = 11;
                    break;
                  }
                  return _context.abrupt("return");
                case 11:
                  this.scheduleOnce(function () {
                    if (bodyGeneration === _this2.bodyGeneration && isValid(_this2.node, true) && isValid(_this2._body, true)) _this2.playSwim();
                  });
                  if (this._colliderNotify) {
                    this._colliderNotify.SetNotify(this.OnCollisionEnter, this);
                    this._colliderNotify.BindFish(this);
                  }
                  this.pathID = msg.path;
                  this.liveTime = msg.liveTime;
                  this.fMoveSpeed = 37.5;
                  this._lock.position = v3(0, 0, 0);
                  this.setBodyColor(color(255, 255, 255, 255));
                  this._pathPos = FishDataMgr.GetPathWithId(msg.path);
                  this._cfg = FishCfg.data[msg.fishType];
                  this._createTime = msg.startTime;
                  this._state = FishDef.State.ALIVE;
                  this.collider.enabled = true;
                  this.node.scale = v3(1, 1, 1);
                  this.delayUpdate = (msg.startTime - FishDataMgr.serverTicket) / 1000;
                  this._moveTimes = (FishDataMgr.serverTicket - msg.startTime) / 1000;
                  this._moveDT = 0;
                  this._touchNode.on(Node.EventType.TOUCH_START, function (event) {
                    //                //判断是否双击
                    var isClicks = false;
                    do {
                      if (_this2._touchDisTimes && sys.now() - _this2._touchDisTimes < 500) {
                        //                        //双击鱼锁定
                        _this2._touchDisTimes = null;
                        isClicks = true;
                        break;
                      } else {
                        _this2._touchDisTimes = sys.now();
                      }
                    } while (false);
                    if (!FishDataMgr.isLockMask && (FishDataMgr.fireLocking || isClicks)) {
                      //                    //鱼锁定
                      FishDataMgr.fireLocking = true;
                      FishDataMgr.curLockFishID = _this2.fid;
                      if (_this2.autoEvent) {
                        _this2.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, _this2.fid);
                      }
                      event.propagationStopped = true;
                    }
                  }, this);

                  //        //边去
                  this.node.setPosition(-2000, -2000);
                  if (msg.fishType < FishDef.FishType.bigMin || msg.fishType == FishDef.FishType.small_126 || msg.fishType == FishDef.FishType.small_127 || msg.fishType == FishDef.FishType.small_128) {
                    this._body.position = v3(this._body.position.x, this._body.position.y, Math.random() * DEPTHSMALL + MINDEPTH);
                  } else {
                    this._body.position = v3(this._body.position.x, this._body.position.y, Math.random() * DEPTH + MINDEPTH);
                  }

                  //        // gts.Debug.Log("==this._body.z==" + this._body.z);

                  this.node.getComponent(UITransform).priority = this._body.position.z;
                  fishScale = this.fishScale ? this.fishScale : this._body.scale.x;
                  sc = this._body.position.z / DEPTH + 0.5;
                  rotationX = -90 * (msg.fishType == 103 ? -1 : 1);
                  rotationY = msg.fishType == 103 ? 0 : 180;
                  rotationZ = 180 * (FishDataMgr.isRotate ? 1 : -1);
                  this._body.eulerAngles = v3(rotationX, rotationY, rotationZ);
                  trs = touchRectScale[this.fishTypeId];
                  scaleX = trs ? trs[0] : 1.0;
                  scaleY = trs ? trs[1] : 1.0;
                  this._touchNode.scale = v3(sc * scaleX * fishScale, (sc - 0.1) * scaleY * fishScale, 1);
                  if (this._pathPos) {
                    this._fishMovingIntervalTime = msg.liveTime / 1000 / this._pathPos.len;
                    this._pathIdx = this.GetIdxByTime();

                    //            // this._labNdRotateAng.node.active = FishCfgMgr.isOpenDebug;
                    //            // this._labNdRotateAng.string = "_pathIdx==" + this._pathIdx;

                    if (this.delayUpdate > 0) {
                      this.scheduleOnce(function () {
                        _this2.update(-_this2.delayUpdate);
                      });
                    }
                  } else {
                    pathPts = FishDataMgr.ins.GetTidePathPoints(msg.path);
                    if (pathPts) {
                      this._moveSpd = 1.0; //1.25;
                      this.pathSys.SetData(pathPts, msg.liveTime).active = true;
                    }
                  }
                case 42:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function reuse(_x) {
            return _reuse.apply(this, arguments);
          }
          return reuse;
        }();
        _proto.unuse = function unuse() {
          this.bodyGeneration++;
          this.unscheduleAllCallbacks();
          if (this._body) {
            Tween.stopAllByTarget(this._body);
            this._body.removeFromParent();
            // 摘下节点只触发停用；销毁才能释放该身体的骨骼动画缓冲。destroy 在帧末生效。
            this._body.destroy();
            this._body = null;
          }
          this._SkeletonAnimation = null;
          this._SkinnedMeshRenderer = null;
          this._touchNode.off(Node.EventType.TOUCH_START);
          this._labNdRotateAng.node.active = false;
          this._labInfoAngle.node.active = false;
          this._fid = -1;
          this._pathIdx = 0;
          this._fishMovingIntervalTime = 0;
          this.isNomal = true;
          GUtil.NodeVisible(this._lock, false);
          this._state = FishDef.State.DIE;
          this.node.scale = v3(1.0, 1.0, 1);
          this.node.getComponent(UIOpacity).opacity = 255;
          this.isHitColoring = false;
          Tween.stopAllByTarget(this.node);
          this.bodyRotate = 0;
          this._hasBid.clear();
          this.pathSys.active = false;
        };
        _proto.BeLocked = function BeLocked(uid, locked) {
          if (locked) {
            //            // gts.Debug.Log("==if (locked)===BeLocked==fid==" + this.fid + "===uid====" + uid);
            GUtil.NodeVisible(this._lock, locked);
            //            // this._lock.zIndex = FishLayer.lock;
            this._lockers.add(uid);
            this._lock.scale = v3(5, 5, 1);
            this._lock.getComponent(UIOpacity).opacity = 0;
            tween(this._lock).to(0.2, {
              scale: v3(0.5, 0.5, 0.5)
            }, {
              easing: "cubicOut"
            }).delay(0.2).to(0.1, {
              scale: v3(1, 1, 1)
            }, {
              easing: "cubicIn"
            }).start();
            tween(this._lock.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }, {
              easing: "cubicOut"
            }).start();
            return;
          }

          //        // gts.Debug.Log("==delete===BeLocked==fid==" + this.fid + "===uid====" + uid);

          this._lockers["delete"](uid);
          if (this._lockers.size <= 0) {
            //            // gts.Debug.Log("==.size <= 0===BeLocked==fid==" + this.fid + "===uid====" + uid);
            GUtil.NodeVisible(this._lock, locked);
          }
        };
        _proto.switchLock = function switchLock() {
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
        };
        _proto.OnMoveFinished = function OnMoveFinished() {
          this._pathIdx = 0;
          this._state = FishDef.State.DIE;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          this.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, this._fid);
        };
        _proto.LogicUpdate = function LogicUpdate() {
          if (FishDataMgr.fireLocking && FishDataMgr.curLockFishID == 0 && FishDataMgr.myLockedFishTypeId && FishDataMgr.myLockedFishTypeId == this.fishTypeId && this.isVisible) {
            FishDataMgr.myLockedFishTypeId = null;
            FishDataMgr.curLockFishID = this.fid;
            FishDataMgr.fireLocking = true;
            this.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, this.fid);
          }
          if (!this._SkinnedMeshRenderer) {
            return;
          }

          // let meshNode = this._SkinnedMeshRenderer.node;
          // let camera: Camera = find("Canvas/sceneCamera", director.getScene()).getComponent(Camera);
          // let mPos = v3(0);
          // camera.convertToUINode(meshNode.getWorldPosition(), this._touchNode.parent, mPos);
          //
          // let tPosPos = this._touchNode.parent.getComponent(UITransform).convertToNodeSpaceAR(mPos);
          // this._touchNode.position = mPos;

          // let lPosPos = this._lock.parent.getComponent(UITransform).convertToNodeSpaceAR(mPos);
          // this.node.getChildByName("info_bg").position = lPosPos;

          //        //更新瞄准
          var wlockPos = this._arrLock[0].getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          var nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
          if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
            for (var i = 1; i < 5; i++) {
              wlockPos = this._arrLock[i].getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
              if (FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
                break;
              }
            }
          }
          this._lock.position = v3(this.node.getComponent(UITransform).convertToNodeSpaceAR(wlockPos));

          //        //显示信息
          //        // this._labNdRotateAng.node.active = FishCfg.isOpenDebug;
          //        // this._labInfoAngle.node.active = FishCfg.isOpenDebug;
          //        // this._lab_body_angle.node.active = FishCfg.isOpenDebug;
          //        // let leftTime = this.liveTime - (sys.now() - this._createTime);
          //        // this._labInfoAngle.string = `${leftTime}`;
        };

        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this._shEvent = ShowHideEvent.Bind(this.node);
          this._shEvent.OnEvent({
            cbShow: function cbShow(time) {
              //                // gts.Debug.LogInfo(`#FishGame FishObj 后台停留: ${time}`);
              _this3.scheduleOnce(function () {
                _this3.update(time / 1000);
              });
            },
            caller: this
          });
        };
        _proto.start = function start() {}
        //    //
        ;

        _proto.update = function update(dt) {
          var _this4 = this;
          switch (this._state) {
            case FishDef.State.DIE:
              {
                return;
              }
            case FishDef.State.exit:
              {
                //                //鱼潮前加速离场
                if (!this.isVisible) {
                  this._state = FishDef.State.DIE;
                  this.scheduleOnce(function () {
                    if (isValid(_this4.node)) {
                      Tween.stopAllByTarget(_this4.node);
                      _this4.OnMoveFinished();
                    }
                  }, 3.0);
                }
                this.LogicUpdate();
                break;
              }
            default:
              {
                if (!this.pathSys || !this.pathSys.active) {
                  //                    //常规路径
                  this._moveDT += dt * this.fMoveSpeed;
                  if (this._moveDT < 0) {
                    // this.node.getComponent(UIOpacity).opacity = 0;

                    //                        // gts.Debug.LogInfo(`# FishId:${this.fid} 延迟中: ${this._moveDT} this._moveDT: ${this._moveDT}`);
                    break;
                  } else if (this._moveDT < 1 || !this._pathPos) {
                    break;
                  }
                  var intDT = Math.floor(this._moveDT);
                  this._moveDT -= intDT;
                  this._pathIdx += intDT;
                  if (this._pathIdx >= this._pathPos.len) {
                    this.exitScene(100);
                    break;
                  }
                  var pos = FishDef.Util.ins.GetXYFromRowCol(this._pathPos.row[this._pathIdx], this._pathPos.col[this._pathIdx]);
                  var ang = this._pathPos.angle[this._pathIdx];
                  pos.x += this.OffsetX;
                  pos.y += this.OffsetY;
                  this.node.setPosition(pos.x, pos.y);
                  this.bodyRotate = ang;
                  this.node.getComponent(UIOpacity).opacity = 255;
                } else if (!this.pathSys.finished) {
                  //                    //鱼潮
                  var fixedDt = dt * this._moveSpd;
                  if (this.delayUpdate > 0) {
                    this.delayUpdate -= fixedDt;
                    //                        //延迟中的鱼不可见
                    // this.node.getComponent(UIOpacity).opacity = 0;
                    break;
                  }
                  var bodyGeneration = this.bodyGeneration;
                  var state = this._state;
                  var hasMoveTimes = this._moveTimes >= 0;
                  this.pathSys.Update(fixedDt + (hasMoveTimes ? this._moveTimes : 0));
                  // 路径结束会同步回收甚至复用鱼壳；旧帧不能继续写位置、时间或访问已释放的身体。
                  if (bodyGeneration !== this.bodyGeneration || state !== this._state || !isValid(this.node, true) || !isValid(this._body, true)) return;
                  if (hasMoveTimes) this._moveTimes = 0;
                  var info = this.pathSys.stepInfo;
                  var _pos = v2(info.v2.x + this.OffsetX, info.v2.y + this.OffsetY);
                  this.node.setPosition(_pos.x, _pos.y);
                  this.node.getComponent(UIOpacity).opacity = 255;
                  this.bodyRotate = info.angle + 180;
                }
                this.LogicUpdate();
                break;
              }
          }
        };
        _proto.loadAnimation = function loadAnimation() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            _this5.fMoveSpeed = 37.5;
            var fbxPrefab = FishDataMgr.resHolder.getFbxPrefab(_this5.fishTypeId);
            if (!fbxPrefab) {
              reject("fbxPrefab not find" + _this5.fishTypeId);
              return;
            }
            _this5._body = instantiate(fbxPrefab);
            _this5._rotateNode.addChild(_this5._body);
            if (_this5._body.getComponents(Light)) {
              _this5._body.removeComponent(Light);
              //                // gts.Debug.Log("this._body.removeComponent(Light)");
            }

            _this5._SkeletonAnimation = _this5._body.getComponent(SkeletalAnimation);
            _this5._SkinnedMeshRenderer = _this5._body.getChildByName("body").getComponent(SkinnedMeshRenderer);
            _this5._SkinnedMeshRenderer.node.layer = Layers.nameToLayer("fish3D");
            _this5._SkinnedMeshRenderer.shadowCastingMode = MeshRenderer.ShadowCastingMode.ON;
            resolve(true);
            //            //////////////////////////////////////////////////
          });
        }
        //    //获取当前时间的路径节点
        ;

        _proto.GetIdxByTime = function GetIdxByTime() {
          var delta = FishDataMgr.serverTicket - this._createTime;
          if (delta < 0) {
            return 0;
          }
          return Math.floor(delta / (this._fishMovingIntervalTime * 1000));
        };
        _proto.ReqCatchFish = function ReqCatchFish(bid, uid, bGold, bulType) {
          if (uid !== FishDataMgr.myUid || this._hasBid.has(bid)) {
            return;
          }
          this._hasBid.add(bid);
          var killType = FishDef.KillType.Nor;
          switch (bulType) {
            case FishDef.CannonType.special_dianZhuan:
              {
                killType = FishDef.KillType.DRILL;
                break;
              }
            case FishDef.CannonType.special_leiTingHuoPao:
              {
                killType = FishDef.KillType.FIREGUN;
                break;
              }
          }
          FishMsgSender.Send_CachFish({
            fishID: this._fid,
            uid: uid,
            golds: bGold,
            bid: bid,
            bulletType: bulType,
            killType: killType
          });
        };
        _proto.ReqCatch = function ReqCatch(combul) {
          if (-1 == this.fid || this._state == FishDef.State.DIE) {
            return;
          }
          this.ReqCatchFish(combul.bid, combul.uid, combul.holdGold, combul.bulType);
        }
        //    //! 鱼被捕获
        ;

        _proto.Die = function Die(msg) {
          var _this6 = this;
          if (this._state == FishDef.State.DIE) {
            return;
          }
          var eMgr = MainManager.getInstance().getEventManager();
          this._state = FishDef.State.DIE;
          GUtil.NodeVisible(this._lock, false);
          this.collider.enabled = false;
          //        //死亡时的节点层级调整
          this.node.getComponent(UITransform).priority = FishCfg.MaxZIndex;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          var fRecycle = function fRecycle() {
            _this6.scheduleOnce(function () {
              //                // this.StopAnimation();
              tween(_this6.node).to(0.25, {
                scale: v3(0.1, 0.1, 0.1)
              }).call(function () {
                if (_this6.autoEvent) {
                  _this6.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, _this6._fid);
                } else {
                  if (eMgr) {
                    eMgr.dispatch(FishDef.Event.RECYCLE_FISH, _this6._fid);
                  } else {
                    error("====this.autoEvent====eMgr======null");
                  }
                }
              }).start();
              // tween(this.node.getComponent(UIOpacity)).to(0.25, { opacity: 0 }).start();
            });
          };

          //        //! 更新玩家金幣
          if (msg) {
            //            //延迟回收
            var delayTimes = 1;
            this.scheduleOnce(fRecycle, delayTimes);
          } else {
            //            //立即回收
            fRecycle();
          }
        }
        //    /**
        //     * 当碰撞产生的时候调用
        //     * other 产生碰撞的另一个碰撞组件
        //     * self  产生碰撞的自身的碰撞组件
        //     */
        ;

        _proto.OnCollisionEnter = function OnCollisionEnter(self, other) {
          if (FishDataMgr.ins.isSwitchScene) {
            return;
          }
          var combul = other.node.getComponent(FishBullet);
          if (combul && (combul._bulletType == FishDef.CannonType.special_dianZhuan || combul.isEnable)) {
            combul.isEnable = false;
            this.ReqCatch(combul);

            //            // gts.Debug.LogWarr("==fish=onCollisionEnter==bid==" + combul.bid + "==fishID==" + this.fishTypeId);
          }
        };

        _proto.setBodyColor = function setBodyColor(color) {
          var _material = this._SkinnedMeshRenderer.material;
          if (_material) {
            _material.setProperty("mainColor", color, 0);
          }
        };
        _proto.OnHit = function OnHit() {
          var _this7 = this;
          if (!this.isHitColoring) {
            this.isHitColoring = true;
            this.setBodyColor(this.colOnHit);
            tween(this.node).delay(0.25).call(function () {
              _this7.isHitColoring = false;
              _this7.setBodyColor(color(255, 255, 255, 255));
            }).start();
          }
        }
        // playAni(name?: string, isLoop: boolean = true, finishCall?: Function) {
        //     this._SkeletonAnimation.getState(name).wrapMode = isLoop ? AnimationClip.WrapMode.Loop : AnimationClip.WrapMode.Normal;
        //     this._SkeletonAnimation.crossFade(name);
        // }
        ;

        _proto.playSwim = function playSwim() {
          this._SkeletonAnimation.defaultClip.wrapMode = AnimationClip.WrapMode.Loop;
          this._SkeletonAnimation.play();
        };
        _createClass(FishObj_skeleton, [{
          key: "lock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "curLock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "body",
          get: function get() {
            return this._body;
          }
        }, {
          key: "collider",
          get: function get() {
            return this._collider;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(state) {
            this._state = state;
          }
        }, {
          key: "autoEvent",
          get: function get() {
            if (!this._autoEvent) {
              this._autoEvent = AutoEventNode.BindNode(this.node);
            }
            return this._autoEvent;
          }
        }, {
          key: "delayUpdate",
          get: function get() {
            return this._delayUpdate;
          },
          set: function set(value) {
            this._delayUpdate = value;
            //        // if (this._delayUpdate > 1000) {
            //        //     gts.Debug.LogErr(`# 错误的延迟: ${this._delayUpdate}`);
            //        // }
          }
        }, {
          key: "lockers",
          get: function get() {
            return this._lockers;
          }
        }, {
          key: "isVisible",
          get: function get() {
            //        // var height = 750;
            //        // var width = winSize.width * (height / winSize.height);

            var height = view.getVisibleSize().height;
            var width = view.getVisibleSize().width;
            var winRect = rect(0, 0, width, height);
            winRect.center = v2(0, 0);
            var angJia = this._rotateNode.angle % 180 * Math.PI / 180;
            var w = Math.abs(this._body.getComponent(UITransform).width * this.fishScale);
            var h = Math.abs(this._body.getComponent(UITransform).height * this.fishScale);
            var disW = (w - h) * Math.sin(angJia);
            w += -disW;
            h += disW;
            var fishRect = rect(0, 0, w, h);
            fishRect.center = v2(this.node.getPosition().x, this.node.getPosition().y);
            this._isVisible = winRect.intersects(fishRect);
            return this._isVisible;
          }
        }, {
          key: "pathSys",
          get: function get() {
            if (!this._pathSys) {
              this._pathSys = FishPath.LineData.Alloc().OnFinishedNotify(this.OnMoveFinished, this);
            }
            return this._pathSys;
          }
        }, {
          key: "cfg",
          get: function get() {
            return this._cfg;
          }
        }, {
          key: "v_size",
          get: function get() {
            return view.getVisibleSize();
          }
        }, {
          key: "fid",
          get: function get() {
            return this._fid;
          }
        }, {
          key: "fishScale",
          get: function get() {
            return null;
          }
        }, {
          key: "bodyRotate",
          set: function set(value) {
            if (!this._cfg || !this._cfg.NoFixAngle) {
              if (this._rotateNode) {
                this._rotateNode.angle = value;
              }
            }
          }
        }]);
        return FishObj_skeleton;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishTypeId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rotateNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_labNdRotateAng", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_labInfoAngle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_lab_body_angle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_collider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_colliderNotify", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_lock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "colOnHit", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 0, 0, 255);
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_arrLock", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "fMoveSpeed", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 37.5;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_touchNode", [_dec13], {
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

System.register("chunks:///_virtual/FishObj_spine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './ColliderNotify.ts', './FishConfig.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './PathSys.ts', './ShowHideEvent.ts', './FishBullet.ts', './FishSound.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, sp, BoxCollider2D, Node, Tween, tween, v3, UIRenderer, color, Widget, UITransform, sys, UIOpacity, v2, isValid, find, view, rect, Component, AutoEventNode, GUtil, ColliderNotify, FishCfg, FishDataMgr, FishDef, FishMsgSender, FishPath, ShowHideEvent, FishBullet, FishSound;
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
      sp = module.sp;
      BoxCollider2D = module.BoxCollider2D;
      Node = module.Node;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      UIRenderer = module.UIRenderer;
      color = module.color;
      Widget = module.Widget;
      UITransform = module.UITransform;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      v2 = module.v2;
      isValid = module.isValid;
      find = module.find;
      view = module.view;
      rect = module.rect;
      Component = module.Component;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ColliderNotify = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishPath = module.FishPath;
    }, function (module) {
      ShowHideEvent = module.default;
    }, function (module) {
      FishBullet = module.default;
    }, function (module) {
      FishSound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "dc503FwsSNGTacKtGABGLUN", "FishObj_spine", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishObj_spine = exports('default', (_dec = ccclass("FishObjSpine"), _dec2 = property({
        displayName: "Fish配置ID"
      }), _dec3 = property({
        displayName: "动画组件",
        type: sp.Skeleton,
        visible: true
      }), _dec4 = property({
        displayName: "碰撞组件",
        type: BoxCollider2D,
        visible: true
      }), _dec5 = property({
        displayName: "body",
        type: Node,
        visible: true
      }), _dec6 = property({
        displayName: "旋转节点",
        type: Node,
        visible: true
      }), _dec7 = property({
        type: ColliderNotify,
        visible: true
      }), _dec8 = property({
        type: Node,
        visible: true
      }), _dec9 = property({
        displayName: "击中时的颜色"
      }), _dec10 = property({
        type: Node,
        visible: true
      }), _dec11 = property({
        type: Node,
        visible: true
      }), _dec12 = property({
        type: Node,
        visible: true
      }), _dec13 = property({
        type: Node,
        visible: true
      }), _dec14 = property({
        displayName: "默认移动速度:像素/秒"
      }), _dec15 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishObj_spine, _Component);
        function FishObj_spine() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fishTypeId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_ani", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_collider", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_body", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rotateNode", _descriptor5, _assertThisInitialized(_this));
          //    // @property({ displayName: "修正角度", visible: true })
          //    // private _fixAngle: boolean = false;
          //    // @property({ displayName: "选择节点角度", visible: true, type: Label })
          //    // private _labNdRotateAng: Label = null;
          //    // @property({ displayName: "路径信息角度", visible: true, type: Label })
          //    // private _labInfoAngle: Label = null;
          _initializerDefineProperty(_this, "_colliderNotify", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colOnHit", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_0", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_1", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_2", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_3", _descriptor12, _assertThisInitialized(_this));
          _this._shEvent = null;
          //    //鱼属性
          _initializerDefineProperty(_this, "fMoveSpeed", _descriptor13, _assertThisInitialized(_this));
          //移动速度:像素/秒
          _this._moveDT = 0;
          //    // LIFE-CYCLE CALLBACKS:
          //    /** 唯一标识ID */
          _this._fid = 0;
          //    //! 鱼对象在服务器的创建时间
          _this._createTime = 0;
          _this._pathIdx = -1;
          _this._pathPos = null;
          _this.pathID = null;
          _this.OffsetX = 0;
          _this.OffsetY = 0;
          //    //! 当前状态
          _this._state = FishDef.State.DIE;
          _this._touchDisTimes = null;
          _this._fishMovingIntervalTime = -1;
          //鱼帧速率
          _this._autoEvent = null;
          _this._delayUpdate = -1;
          //    //!碰撞过的子弹
          _this._hasBid = new Set();
          //    //! 看上这鱼的玩家
          _this._lockers = new Set();
          //    //! 阴影
          _initializerDefineProperty(_this, "_shadow", _descriptor14, _assertThisInitialized(_this));
          _this._isVisible = false;
          //    //! 鱼潮路径系统
          _this._pathSys = null;
          _this._cfg = null;
          _this._moveSpd = 1;
          _this._moveTimes = 0;
          //    //! 保存当前动画信息
          _this._curAniInfo = null;
          _this.isHitColoring = false;
          return _this;
        }
        var _proto = FishObj_spine.prototype;
        //    //鱼潮开始前，退场--保持当前方向加速
        _proto.exitScene = function exitScene(exitSpeed) {
          if (exitSpeed === void 0) {
            exitSpeed = 750;
          }
          if (!this.isVisible) {
            Tween.stopAllByTarget(this.node);
            this.OnMoveFinished();
            return;
          }
          this._state = FishDef.State.exit;
          var angle = this._rotateNode.angle * Math.PI / 180;
          var disY = exitSpeed * Math.sin(angle);
          var disX = exitSpeed * Math.cos(angle);
          tween(this.node).repeatForever(tween(this.node).by(1.0, {
            position: v3(disX, disY, 0)
          })).start();
        };
        _proto.SetMoveSpd = function SetMoveSpd(spd) {} //        // gts.Debug.Log(`#FishGame 加速 ${spd} 倍`);
        ;

        _proto.Load = function Load() {};
        _proto.reuse = function reuse(msg) {
          var _this2 = this;
          //        // gts.Debug.Log(`#FishGame 鱼对象复用`);
          this.unuse();
          if (!msg) {
            gts.Debug.LogWarr("#FishGame FishObj:reuse msg is nil");
            return;
          }
          msg = msg[0] || msg;
          if (this._colliderNotify) {
            this._colliderNotify.SetNotify(this.OnCollisionEnter, this);
            this._colliderNotify.BindFish(this);
          }
          this._lock.position = v3(0, 0, 0);
          this.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);
          if (this._lock_0) {
            this._lock_0.getComponent(Widget).isAbsoluteLeft = false;
            this._lock_0.getComponent(Widget).left = msg.fishType == FishDef.FishType.huangJinFuDai ? 0.05 : 0.177;
            this._lock_0.getComponent(Widget).updateAlignment();
          }
          if (this._lock_2) {
            this._lock_2.getComponent(Widget).updateAlignment();
          }
          if (this._lock_3) {
            this._lock_3.getComponent(Widget).updateAlignment();
          }
          this._lock_3.active = msg.fishType == FishDef.FishType.huangJinFuDai;
          this._pathPos = FishDataMgr.GetPathWithId(msg.path);
          this._cfg = FishCfg.data[msg.fishType];
          this._fid = msg.fishID;
          this.fishTypeId = "" + msg.fishType;
          this._createTime = msg.startTime;
          this._state = FishDef.State.ALIVE;
          this.collider.enabled = true;
          this.node.getComponent(UITransform).priority = -msg.fishType;
          this.node.scale = v3(1, 1, 1);
          this.delayUpdate = (msg.startTime - FishDataMgr.serverTicket) / 1000;
          this._moveTimes = (FishDataMgr.serverTicket - msg.startTime) / 1000;
          this._moveDT = 0;
          this._rotateNode.on(Node.EventType.TOUCH_START, function (event) {
            //                //判断是否双击
            var isClicks = false;
            do {
              if (_this2._touchDisTimes && sys.now() - _this2._touchDisTimes < 500) {
                //                        //双击鱼锁定
                _this2._touchDisTimes = null;
                isClicks = true;
                break;
              } else {
                _this2._touchDisTimes = sys.now();
              }
            } while (false);
            if (!FishDataMgr.isLockMask && (FishDataMgr.fireLocking || isClicks)) {
              //                    //鱼锁定
              FishDataMgr.fireLocking = true;
              FishDataMgr.curLockFishID = _this2.fid;
              if (_this2.autoEvent) {
                _this2.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, _this2.fid);
              }
              event.propagationStopped = true;
            }
          }, this);

          //        //边去
          this.node.setPosition(-2000, -2000);
          this.body.scale = v3(this.fishScale * -1, this.fishScale * (FishDataMgr.isRotate ? -1 : 1), 1);
          if (this._pathPos) {
            this._fishMovingIntervalTime = msg.liveTime / 1000 / this._pathPos.len;
            this._pathIdx = this.GetIdxByTime();
            if (this.delayUpdate > 0) {
              //                // gts.Debug.Log("--this.delayUpdate===" + this.delayUpdate);
              //                //》0 为延迟时间
              this.scheduleOnce(function () {
                _this2.update(-_this2.delayUpdate);
              });
            }
          } else {
            //            // gts.Debug.LogWarr(`# 常规路径没有数据，查找鱼潮路径, ${msg.path}`);
            var pathPts = FishDataMgr.ins.GetTidePathPoints(msg.path);
            if (pathPts) {
              this.pathSys.SetData(pathPts, msg.liveTime).active = true;
            } else {
              gts.Debug.LogErr("# \u627E\u4E0D\u5230\u4EFB\u4F55\u8DEF\u5F84\u4FE1\u606F: " + msg.path);
            }
          }
          if (parseInt(this.fishTypeId) != FishDef.FishType.huangJinFuDai) {
            //            //美人鱼
            this._rotateNode.getComponent(UITransform).width = 400;
            this._rotateNode.getComponent(UITransform).height = 200;
            this._rotateNode.getComponent(UITransform).anchorY = FishDataMgr.isRotate ? 0.6 : 0.4;
            this._rotateNode.getComponent(UITransform).anchorX = 0.57;

            //            // this.body.scaleX = pos.x < 0 ? -this.fishScale : this.fishScale;
          } else {
            //            //海盗船
            this._rotateNode.getComponent(UITransform).width = 250;
            this._rotateNode.getComponent(UITransform).height = 250;
            this._rotateNode.getComponent(UITransform).anchorY = FishDataMgr.isRotate ? 0.75 : 0.25;
            this._rotateNode.getComponent(UITransform).anchorX = 0.5;
            this.body.setScale(FishDataMgr.isRotate ? -Math.abs(this.body.scale.y) : Math.abs(this.body.scale.y), this.body.scale.y);
          }
          this.loadAnimation();
        };
        _proto.unuse = function unuse() {
          this._fid = -1;
          this._pathIdx = 0;
          this._fishMovingIntervalTime = 0;
          if (this.body) {
            this.body.active = true;
            this.body.angle = 0;
            this._rotateNode.off(Node.EventType.TOUCH_START);
            this.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);
          }
          GUtil.NodeVisible(this._lock, false);
          this._state = FishDef.State.DIE;
          this.node.scale = v3(1.0, 1.0, 1);
          this.node.getComponent(UIOpacity).opacity = 255;
          this.isHitColoring = false;
          Tween.stopAllByTarget(this.node);
          this.bodyRotate = 0;
          this._hasBid.clear();
          this._curAniInfo = null;
          //        //! 停止动画
          //        //! 回收影子
          if (this._shadow) {
            //@ts-ignore
            this._shadow.getComponent(gts.FrameAnimation).Stop(false);
          }
          this.pathSys.active = false;
        };
        _proto.BeLocked = function BeLocked(uid, locked) {
          if (locked) {
            //            // gts.Debug.Log("==if (locked)===BeLocked==fid==" + this.fid + "===uid====" + uid);
            GUtil.NodeVisible(this._lock, locked);
            //            // this._lock.zIndex = FishLayer.lock;
            this._lockers.add(uid);
            this._lock.scale = v3(5, 5, 1);
            this._lock.getComponent(UIOpacity).opacity = 0;
            tween(this._lock).to(0.2, {
              scale: v3(0.5, 0.5, 0.5)
            }, {
              easing: "cubicOut"
            }).delay(0.2).to(0.1, {
              scale: v3(1, 1, 1)
            }, {
              easing: "cubicIn"
            }).start();
            tween(this._lock.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }, {
              easing: "cubicOut"
            }).start();
            return;
          }

          //        // gts.Debug.Log("==delete===BeLocked==fid==" + this.fid + "===uid====" + uid);

          this._lockers["delete"](uid);
          if (this._lockers.size <= 0) {
            //            // gts.Debug.Log("==.size <= 0===BeLocked==fid==" + this.fid + "===uid====" + uid);
            GUtil.NodeVisible(this._lock, locked);
          }
        };
        _proto.switchLock = function switchLock() {
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
        };
        _proto.OnMoveFinished = function OnMoveFinished() {
          this._pathIdx = 0;
          this._state = FishDef.State.DIE;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          this.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, this._fid);
        };
        _proto.LogicUpdate = function LogicUpdate() {
          if (FishDataMgr.fireLocking && FishDataMgr.curLockFishID == 0 && FishDataMgr.myLockedFishTypeId && FishDataMgr.myLockedFishTypeId == this.fishTypeId && this.isVisible) {
            FishDataMgr.myLockedFishTypeId = null;
            FishDataMgr.curLockFishID = this.fid;
            FishDataMgr.fireLocking = true;
            this.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, this.fid);
          }
          if (this._shadow) {
            this._shadow.angle = this.body.angle + this._rotateNode.angle % 360;
            this._shadow.scale = this.body.scale;
          }

          //        // 三段瞄准
          if (parseInt(this.fishTypeId) >= FishDef.FishType.bigMin && this.node.parent) {
            var wlockPos = this._lock_1.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            var nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
            if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
              wlockPos = this._lock_0.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
              if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
                wlockPos = this._lock_2.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                if (this._lock_3.active) {
                  nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
                  if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
                    wlockPos = this._lock_3.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                  }
                }
              }
              this._lock.position = v3(this.node.getComponent(UITransform).convertToNodeSpaceAR(wlockPos));
            } else {
              this._lock.position = v3(0, 0, 0);
            }
          }

          //        // if (!this.isVisible && this._lockers && this._lockers.has(FishDataMgr.myUid)) {
          //        //     // this.BeLocked(FishDataMgr.myUid, false);
          //        //     // FishDataMgr.curLockFishID = 0;

          //        //     //自动锁定同类型鱼
          //        //     this.autoEvent.dispatch(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          //        // }
        };

        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this._shEvent = ShowHideEvent.Bind(this.node);
          this._shEvent.OnEvent({
            cbShow: function cbShow(time) {
              //                // gts.Debug.LogInfo(`#FishGame FishObj 后台停留: ${time}`);
              _this3.scheduleOnce(function () {
                _this3.update(time / 1000);
              });
            },
            caller: this
          });
        };
        _proto.start = function start() {}
        //    //
        ;

        _proto.update = function update(dt) {
          var _this4 = this;
          switch (this._state) {
            case FishDef.State.DIE:
              {
                break;
              }
            case FishDef.State.exit:
              {
                //                //鱼潮前加速离场
                if (!this.isVisible) {
                  this._state = FishDef.State.DIE;
                  this.scheduleOnce(function () {
                    if (isValid(_this4.node)) {
                      Tween.stopAllByTarget(_this4.node);
                      _this4.OnMoveFinished();
                    }
                  }, 3.0);
                }
                break;
              }
            default:
              {
                this._moveDT += dt * this.fMoveSpeed;
                if (this._moveDT < 0) {
                  // this.node.getComponent(UIOpacity).opacity = 0;

                  //                    // gts.Debug.LogInfo(`# FishId:${this.fid} 延迟中: ${this._moveDT} this._moveDT: ${this._moveDT}`);
                  break;
                } else if (this._moveDT < 1 || !this._pathPos) {
                  break;
                }
                var intDT = Math.floor(this._moveDT);
                this._moveDT -= intDT;
                this._pathIdx += intDT;
                if (this._pathIdx >= this._pathPos.len) {
                  this.exitScene(100);
                  break;
                }
                var pos = FishDef.Util.ins.GetXYFromRowCol(this._pathPos.row[this._pathIdx], this._pathPos.col[this._pathIdx]);
                this.node.setPosition(v3(pos.x, pos.y, 0));
                if (this.fishTypeId == "207") {
                  var ang = this._pathPos.angle[this._pathIdx];
                  this.bodyRotate = ang;
                }
                this.node.getComponent(UIOpacity).opacity = 255;
                this.LogicUpdate();
                break;
              }
          }
        };
        _proto.loadAnimation = function loadAnimation() {
          var _this5 = this;
          //        //! TODO: 阴影的加载
          //        ///////////////////////////////////////////////////////////
          this.fMoveSpeed = 37.5;
          var fishType = parseInt(this.fishTypeId);
          switch (fishType) {
            case FishDef.FishType.longWangXianBao:
              {
                this.node.getComponent(UITransform).priority = FishCfg.MaxZIndex;

                //                //! 播放动画
                var bundle = FishDef.Util.bundle;
                if (this.ani && bundle) {
                  //                    //body spine animation
                  bundle.load("spine/dragonking/BOSS", sp.SkeletonData, function (err, assets) {
                    if (!err && _this5.ani) {
                      _this5.ani.skeletonData = assets;
                      _this5.ani.setAnimation(0, "idle", true);
                      _this5.collider.size.x = 450;
                      _this5.collider.size.y = 150;
                      _this5.collider.offset = v2(25, 15);
                      if (_this5._lock_0) {
                        _this5._lock_0.getComponent(Widget).updateAlignment();
                      }
                      if (_this5._lock_2) {
                        _this5._lock_2.getComponent(Widget).updateAlignment();
                      }
                      if (_this5._lock_3) {
                        _this5._lock_3.getComponent(Widget).updateAlignment();
                      }
                    }
                  });
                }
                break;
              }
            case FishDef.FishType.huangJinFuDai:
              {
                this.node.getComponent(UITransform).priority = FishCfg.MaxZIndex;

                //                //影子
                this._shadow = this.node.getChildByName("shadow");
                this._shadow.getPosition().y = FishDataMgr.isRotate ? 125 : -125;

                //                //! 播放动画
                var _bundle = FishDef.Util.bundle;
                if (this.ani && _bundle) {
                  //                    //body spine animation
                  _bundle.load("spine/redpacket/redbag", sp.SkeletonData, function (err, assets) {
                    _this5.ani.skeletonData = assets;
                    _this5.ani.premultipliedAlpha = false;
                    _this5.ani.setAnimation(0, "swim", true);
                    _this5.collider.size.x = 220;
                    _this5.collider.size.y = 220;
                    _this5.collider.offset = v2(-8, 50);
                    if (_this5._lock_0) {
                      _this5._lock_0.getComponent(Widget).updateAlignment();
                    }
                    if (_this5._lock_2) {
                      _this5._lock_2.getComponent(Widget).updateAlignment();
                    }
                    if (_this5._lock_3) {
                      _this5._lock_3.getComponent(Widget).updateAlignment();
                    }
                  });
                }
                break;
              }
          }
          //        //////////////////////////////////////////////////
        }
        //    //获取当前时间的路径节点
        ;

        _proto.GetIdxByTime = function GetIdxByTime() {
          var delta = FishDataMgr.serverTicket - this._createTime;
          if (delta < 0) {
            return 0;
          }
          return Math.floor(delta / (this._fishMovingIntervalTime * 1000));
        };
        _proto.PlayAni = function PlayAni(ani) {
          if (!ani || !this._curAniInfo) {
            return false;
          }
          ani.atlas = this._curAniInfo.atlas;
          ani.frameCnt = this._curAniInfo.frameCnt;
          ani.frameNameFmt = this._curAniInfo.frameFmt;
          ani.SetDurationType(gts.DurationType.SINGLE_FRAME);
          ani.duration = this._curAniInfo.frameDt;
          ani.startIdx = this._curAniInfo.startIdx;
          ani.Play(-1);

          //@ts-ignore
          ani.node.getPosition().y = 40 * (FishDataMgr.isRotate ? 1 : -1);
          return true;
        };
        _proto.ReqCatchFish = function ReqCatchFish(bid, uid, bGold, bulType) {
          if (uid !== FishDataMgr.myUid || this._hasBid.has(bid)) {
            return;
          }
          this._hasBid.add(bid);
          var killType = FishDef.KillType.Nor;
          switch (bulType) {
            case FishDef.CannonType.special_dianZhuan:
              {
                killType = FishDef.KillType.DRILL;
                break;
              }
            case FishDef.CannonType.special_leiTingHuoPao:
              {
                killType = FishDef.KillType.FIREGUN;
                break;
              }
            //            // default: {
            //            //     killType = FishDataMgr.getKillType(parseInt(this.fishTypeId));
            //            //     break;
            //            // }
          }

          FishMsgSender.Send_CachFish({
            fishID: this._fid,
            uid: uid,
            golds: bGold,
            bid: bid,
            bulletType: bulType,
            killType: killType
          });
        };
        _proto.ReqCatch = function ReqCatch(combul) {
          if (-1 == this.fid || this._state == FishDef.State.DIE) {
            return;
          }
          this.ReqCatchFish(combul.bid, combul.uid, combul.holdGold, combul.bulType);
        }
        //    //! 鱼被捕获
        ;

        _proto.Die = function Die(msg) {
          var _this6 = this;
          if (this._state == FishDef.State.DIE) {
            return;
          }
          this._state = FishDef.State.DIE;
          GUtil.NodeVisible(this._lock, false);
          this.collider.enabled = false;
          //        //死亡时的节点层级调整
          this.node.getComponent(UITransform).priority = FishCfg.MaxZIndex;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          var fishType = parseInt(this.fishTypeId);
          if (msg.killType == FishDef.BulletType.FIREGUN) {
            //            //火炮捕获的

            tween(this.node).to(0.5, {
              scale: v3(0.5, 0.5, 0.5)
            }).call(function () {
              _this6.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, _this6._fid);
            }).start();
            // tween(this.node.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).start();

            return;
          }

          //        //回收鱼
          var recycleFish = function recycleFish() {
            var doRecy = function doRecy() {
              _this6.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, _this6._fid);
            };
            if (msg.uid == FishDataMgr.myUid) {
              doRecy();
            } else {
              tween(_this6.node).to(0.5, {
                scale: v3(0.5, 0.5, 0.5)
              }).call(doRecy).start();
              // tween(this.node.getComponent(UIOpacity)).to(0.5, { opacity: 0 }).start();
            }
          };

          if (msg.uid == FishDataMgr.myUid) {
            var _fishType = parseInt(this.fishTypeId);
            if (FishDef.FishType.huangJinFuDai == _fishType && msg.fishID == this._fid) {
              FishSound.PlaySound(FishDef.Sound.REDPACKET_INTRO);
              //                //启用特殊事件层
              this.autoEvent.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, true);

              //                // gts.Debug.Log("---this.node.getNumberOfRunningActions()==22222222---");
              tween(this.node).parallel(tween(this.node).to(0.3, {
                position: v3(0)
              }, {
                easing: "cubicIn"
              }), tween(this.node).to(0.3, {
                scale: v3(1.5, 1.5, 1.5)
              }, {
                easing: "cubicIn"
              })).delay(0.2).call(function () {
                //                            //添加开箱子动效
                _this6.autoEvent.EmitEvent(FishDef.Event.EFFECT_REDPACKET, msg);
                recycleFish();
              }).start();
              return;
            }
          } else {
            recycleFish();
          }
        }
        //    /**
        //     * 当碰撞产生的时候调用
        //     * other 产生碰撞的另一个碰撞组件
        //     * self  产生碰撞的自身的碰撞组件
        //     */
        ;

        _proto.OnCollisionEnter = function OnCollisionEnter(self, other) {
          if (FishDataMgr.ins.isSwitchScene) {
            return;
          }
          var combul = other.node.getComponent(FishBullet);
          if (combul && (combul._bulletType == FishDef.CannonType.special_dianZhuan || combul.isEnable)) {
            combul.isEnable = false;
            this.ReqCatch(combul);

            //            // gts.Debug.LogWarr("==fish=onCollisionEnter==bid==" + combul.bid + "==fishID==" + this.fishTypeId);
          }
        };

        _proto.OnHit = function OnHit() {
          var _this7 = this;
          if (!this.isHitColoring) {
            this.isHitColoring = true;
            this.body.getComponent(UIRenderer).color = this.colOnHit;
            tween(this.node).delay(0.25).call(function () {
              _this7.isHitColoring = false;
              _this7.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);
            }).start();
          }
        };
        _createClass(FishObj_spine, [{
          key: "lock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "curLock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "body",
          get: function get() {
            if (!this._body) {
              this._body = find("body", this.node);
            }
            return this._body;
          }
        }, {
          key: "ani",
          get: function get() {
            if (!this._ani) {
              this._ani = this.body ? this.body.getComponent(sp.Skeleton) : null;
            }
            return this._ani;
          }
        }, {
          key: "collider",
          get: function get() {
            if (!this._collider) {
              this._collider = this.getComponent(BoxCollider2D);
            }
            return this._collider;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(state) {
            this._state = state;
          }
        }, {
          key: "autoEvent",
          get: function get() {
            if (!this._autoEvent) {
              this._autoEvent = AutoEventNode.BindNode(this.node);
            }
            return this._autoEvent;
          }
        }, {
          key: "delayUpdate",
          get: function get() {
            return this._delayUpdate;
          },
          set: function set(value) {
            this._delayUpdate = value;
            //        // if (this._delayUpdate > 1000) {
            //        //     gts.Debug.LogErr(`# 错误的延迟: ${this._delayUpdate}`);
            //        // }
          }
        }, {
          key: "lockers",
          get: function get() {
            return this._lockers;
          }
        }, {
          key: "isVisible",
          get: function get() {
            //        // var height = 750;
            //        // var width = winSize.width * (height / winSize.height);

            var height = view.getVisibleSize().height;
            var width = view.getVisibleSize().width;
            var winRect = rect(0, 0, width, height);
            winRect.center = v2(0, 0);
            var angJia = this._rotateNode.angle % 180 * Math.PI / 180;
            var w = Math.abs(this._body.getComponent(UITransform).width * this.fishScale);
            var h = Math.abs(this._body.getComponent(UITransform).height * this.fishScale);
            var disW = (w - h) * Math.sin(angJia);
            w += -disW;
            h += disW;
            var fishRect = rect(0, 0, w, h);
            fishRect.center = v2(this.node.getPosition().x, this.node.getPosition().y);
            this._isVisible = winRect.intersects(fishRect);
            return this._isVisible;
          }
        }, {
          key: "pathSys",
          get: function get() {
            if (!this._pathSys) {
              this._pathSys = FishPath.LineData.Alloc().OnFinishedNotify(this.OnMoveFinished, this);
            }
            return this._pathSys;
          }
        }, {
          key: "cfg",
          get: function get() {
            return this._cfg;
          }
        }, {
          key: "v_size",
          get: function get() {
            return view.getVisibleSize();
          }
        }, {
          key: "fid",
          get: function get() {
            return this._fid;
          }
        }, {
          key: "fishScale",
          get: function get() {
            return this._cfg && this._cfg.GScale ? this._cfg.GScale : FishCfg.GScale;
          }
        }, {
          key: "bodyRotate",
          set: function set(value) {
            if (!this._cfg || !this._cfg.NoFixAngle) {
              if (this._rotateNode) {
                this._rotateNode.angle = value;
              }
            }
          }
        }]);
        return FishObj_spine;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishTypeId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_ani", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_collider", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_body", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_rotateNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_colliderNotify", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_lock", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "colOnHit", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 0, 0, 255);
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_lock_0", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_lock_1", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_lock_2", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_lock_3", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "fMoveSpeed", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_shadow", [_dec15], {
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

System.register("chunks:///_virtual/FishObj.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './ColliderNotify.ts', './FishConfig.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './PathSys.ts', './ShowHideEvent.ts', './FishBullet.ts', './FishSound.ts', './MainManager.ts', './FishCfgMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, BoxCollider2D, Node, Tween, tween, v3, Widget, UIRenderer, color, sys, UIOpacity, UITransform, v2, isValid, SpriteAtlas, find, view, rect, Component, error, instantiate, sp, AutoEventNode, GUtil, ColliderNotify, FishCfg, FishDataMgr, FishDef, FishMsgSender, FishPath, ShowHideEvent, FishBullet, FishSound, MainManager, FishCfgMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      BoxCollider2D = module.BoxCollider2D;
      Node = module.Node;
      Tween = module.Tween;
      tween = module.tween;
      v3 = module.v3;
      Widget = module.Widget;
      UIRenderer = module.UIRenderer;
      color = module.color;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      v2 = module.v2;
      isValid = module.isValid;
      SpriteAtlas = module.SpriteAtlas;
      find = module.find;
      view = module.view;
      rect = module.rect;
      Component = module.Component;
      error = module.error;
      instantiate = module.instantiate;
      sp = module.sp;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ColliderNotify = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishPath = module.FishPath;
    }, function (module) {
      ShowHideEvent = module.default;
    }, function (module) {
      FishBullet = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      FishCfgMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
      cclegacy._RF.push({}, "888ffDhKo1K5IxKvjhCi3ZU", "FishObj", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishObj = exports('default', (_dec = ccclass("FishObj"), _dec2 = property({
        displayName: "Fish配置ID"
      }), _dec3 = property({
        displayName: "角度文本",
        type: Label
      }), _dec4 = property({
        displayName: "动画组件",
        type: gts.FrameAnimation,
        visible: true
      }), _dec5 = property({
        displayName: "碰撞组件",
        type: BoxCollider2D,
        visible: true
      }), _dec6 = property({
        displayName: "body",
        type: Node,
        visible: true
      }), _dec7 = property({
        displayName: "旋转节点",
        type: Node,
        visible: true
      }), _dec8 = property({
        displayName: "选择节点角度",
        visible: true,
        type: Label
      }), _dec9 = property({
        displayName: "路径信息角度",
        visible: true,
        type: Label
      }), _dec10 = property({
        displayName: "body角度",
        visible: true,
        type: Label
      }), _dec11 = property({
        type: ColliderNotify,
        visible: true
      }), _dec12 = property({
        type: Node,
        visible: true
      }), _dec13 = property({
        displayName: "击中时的颜色"
      }), _dec14 = property({
        displayName: "默认移动速度:像素/秒"
      }), _dec15 = property({
        type: Node,
        visible: true
      }), _dec16 = property({
        type: Node,
        visible: true
      }), _dec17 = property({
        type: Node,
        visible: true
      }), _dec18 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishObj, _Component);
        function FishObj() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fishTypeId", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labAngle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_ani", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_collider", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_body", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rotateNode", _descriptor6, _assertThisInitialized(_this));
          //    // @property({ displayName: "修正角度", visible: true })
          //    // private _fixAngle: boolean = false;
          _initializerDefineProperty(_this, "_labNdRotateAng", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_labInfoAngle", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lab_body_angle", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colliderNotify", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "colOnHit", _descriptor12, _assertThisInitialized(_this));
          _this._shEvent = null;
          _this._moveSpd = 1;
          //    //鱼属性
          _initializerDefineProperty(_this, "fMoveSpeed", _descriptor13, _assertThisInitialized(_this));
          //移动速度:像素/秒
          _this._moveDT = 0;
          _initializerDefineProperty(_this, "_lock_0", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_1", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lock_2", _descriptor16, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    /** 唯一标识ID */
          _this._fid = 0;
          //    //! 鱼对象在服务器的创建时间
          _this._createTime = 0;
          _this._pathIdx = -1;
          _this._pathPos = null;
          _this._touchDisTimes = null;
          _this.pathID = null;
          //    //! 当前状态
          _this._state = FishDef.State.ALIVE;
          _this._fishMovingIntervalTime = -1;
          //鱼帧速率
          _this._autoEvent = null;
          _this._delayUpdate = -1;
          _this._moveTimes = 0;
          //    //!碰撞过的子弹
          _this._hasBid = new Set();
          //    //! 看上这鱼的玩家
          _this._lockers = new Set();
          //    //! 阴影
          _initializerDefineProperty(_this, "_shadow", _descriptor17, _assertThisInitialized(_this));
          _this._isVisible = false;
          //    //! 鱼潮路径系统
          _this._pathSys = null;
          _this._cfg = null;
          _this.OffsetX = 0;
          _this.OffsetY = 0;
          _this.liveTime = 0;
          //    //! 保存当前动画信息
          _this._curAniInfo = null;
          _this.isHitColoring = false;
          return _this;
        }
        var _proto = FishObj.prototype;
        //    //鱼潮开始前，退场--保持当前方向加速
        _proto.exitScene = function exitScene(exitSpeed) {
          if (exitSpeed === void 0) {
            exitSpeed = 750;
          }
          if (!this.isVisible) {
            Tween.stopAllByTarget(this.node);
            this.OnMoveFinished();
            return;
          }
          this._state = FishDef.State.exit;
          var angle = this._rotateNode.angle * Math.PI / 180;
          var disY = exitSpeed * Math.sin(angle);
          var disX = exitSpeed * Math.cos(angle);
          tween(this.node).repeatForever(tween(this.node).by(1.0, {
            position: v3(disX, disY, 0)
          })).start();
        };
        _proto.SetMoveSpd = function SetMoveSpd(spd) {
          if (spd === void 0) {
            spd = 15;
          }
          //        // gts.Debug.Log(`#FishGame 加速 ${spd} 倍`);
          this._moveSpd = spd;
        };
        _proto.Load = function Load() {};
        _proto.reuse = function reuse(msg) {
          var _this2 = this;
          //        // gts.Debug.Log(`#FishGame 鱼对象复用`);
          this.unuse();
          if (!msg) {
            gts.Debug.LogWarr("#FishGame FishObj:reuse msg is nil");
            return;
          }
          msg = msg[0] || msg;

          //        //
          //        // msg.path = "6011";
          //        // msg.path = `${Math.floor(Math.random() * 7 + 20001)}`;
          //        // msg.liveTime = 100000;
          //        // msg.fishType = 124;

          if (this._colliderNotify) {
            this._colliderNotify.SetNotify(this.OnCollisionEnter, this);
            this._colliderNotify.BindFish(this);
          }
          this._labNdRotateAng.node.active = FishCfgMgr.isOpenDebug;
          this._labInfoAngle.node.active = FishCfgMgr.isOpenDebug;
          this._lab_body_angle.node.active = FishCfgMgr.isOpenDebug;
          this._labNdRotateAng.string = "PID:" + msg.path;
          this._lab_body_angle.string = "LTimes:" + msg.liveTime;
          this.pathID = msg.path;
          this.liveTime = msg.liveTime;
          this.OffsetX = msg.OffsetX || 0;
          this.OffsetY = msg.OffsetY || 0;

          //        // gts.Debug.LogInfo(`# FishId:${this.fid} this._pathIdx: ${this._pathIdx} OffsetX: ${this.OffsetX} OffsetY: ${this.OffsetY}`);

          if (this._lock_0) {
            this._lock_0.getComponent(Widget).updateAlignment();
          }
          if (this._lock_2) {
            this._lock_2.getComponent(Widget).updateAlignment();
          }
          this._pathPos = FishDataMgr.GetPathWithId(msg.path);
          this._cfg = FishCfg.data[msg.fishType];
          this._fid = msg.fishID;
          this.fishTypeId = "" + msg.fishType;
          this._createTime = msg.startTime;
          this._state = FishDef.State.ALIVE;
          this.collider.enabled = true;
          //        // this.node.zIndex = FishCfg.MaxZIndex - msg.fishType;
          this.node.scale = v3(1, 1, 1);
          this.setLockPos();
          this.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);

          //        //延迟出现
          this._moveTimes = (FishDataMgr.serverTicket - msg.startTime) / 1000; //已运行时间
          this.delayUpdate = (msg.startTime - FishDataMgr.serverTicket) / 1000; //》0 延迟时间  《0已运行时间

          //        // this._labInfoAngle.node.active = true;
          //        // if (this.delayUpdate > 0) {
          //        //     gts.Debug.LogInfo(`# FishId:${msg.fishID}--# fishType:${msg.fishType} 延迟中: ${this.delayUpdate}`);

          //        //     this._labInfoAngle.string = "延迟" + this.delayUpdate;
          //        // } else {
          //        //     gts.Debug.LogInfo(`# FishId:${msg.fishID}--# fishType:${msg.fishType} 已运行: ${this._moveTimes}`);
          //        //     this._labInfoAngle.string = "已运行" + this._moveTimes;
          //        // }

          this._moveDT = 0;
          this.body.on(Node.EventType.TOUCH_START, function (event) {
            //                //判断是否双击
            var isClicks = false;
            do {
              if (_this2._touchDisTimes && sys.now() - _this2._touchDisTimes < 500) {
                _this2._touchDisTimes = null;
                isClicks = true;
              } else {
                _this2._touchDisTimes = sys.now();
              }
            } while (false);
            if (!FishDataMgr.isLockMask && (FishDataMgr.fireLocking || isClicks)) {
              //                    //鱼锁定
              FishDataMgr.fireLocking = true;
              FishDataMgr.curLockFishID = _this2.fid;
              if (_this2.autoEvent) {
                _this2.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, _this2.fid);
              }
              event.propagationStopped = true;
            }
          }, this);

          //        //边去
          this.node.setPosition(-2000, -2000, 0);
          this.body.scale = v3(this.fishScale * -1, this.fishScale * (FishDataMgr.isRotate ? -1 : 1), this.fishScale);
          if (this._pathPos) {
            this._fishMovingIntervalTime = msg.liveTime / 1000 / this._pathPos.len;
            this._pathIdx = this.GetIdxByTime();

            //            // this._labNdRotateAng.node.active = true;
            //            // this._labNdRotateAng.string = "_pathIdx==" + this._pathIdx;

            //            // gts.Debug.Log("--this._pathIdx===" + this._pathIdx);
            if (this.delayUpdate > 0) {
              //                // gts.Debug.Log("--this.delayUpdate===" + this.delayUpdate);
              //                //》0 为延迟时间
              this.scheduleOnce(function () {
                _this2.update(-_this2.delayUpdate);
              });
            }
          } else {
            var pathPts = FishDataMgr.ins.GetTidePathPoints(msg.path);
            if (pathPts) {
              this._moveSpd = 1.0; //1.25;
              this.pathSys.SetData(pathPts, msg.liveTime).active = true;

              //                // gts.Debug.LogInfo(`# FishId:${msg.fishID}--# fishType:${msg.fishType} 延迟中: ${this.delayUpdate}`);
              //                // gts.Debug.LogInfo(`# serverTicket:${FishDataMgr.serverTicket}`);

              //                // if (this.delayUpdate < 0) {
              //                //     this.pathSys.AddRunTime(this.delayUpdate * -1);
              //                // }
            } else {
              gts.Debug.LogErr("# \u627E\u4E0D\u5230\u4EFB\u4F55\u8DEF\u5F84\u4FE1\u606F: " + msg.path);
            }
          }

          //        //! 播放动画
          this.PlayAnimation();

          //        // let mat = this._body.getComponent(Sprite).getMaterial(0);
          //        // mat.setProperty("offSet", Math.random() * 64, 0);
        };

        _proto.unuse = function unuse() {
          this._labNdRotateAng.node.active = false;
          this._labInfoAngle.node.active = false;
          this.isHitColoring = false;
          Tween.stopAllByTarget(this.node);
          this._fid = -1;
          this._pathIdx = -1;
          this._fishMovingIntervalTime = 0;
          if (this.body) {
            this.body.active = true;
            this.body.angle = 0;
            this.body.off(Node.EventType.TOUCH_START);
            this.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);
            this.body.scale = v3(1, 1, 1);
          }
          this.lockers.clear();
          GUtil.NodeVisible(this._lock, false);
          this._state = FishDef.State.DIE;
          this.node.scale = v3(1.0, 1.0, 1);
          this.node.getComponent(UIOpacity).opacity = 255;
          this.bodyRotate = 0;
          this._hasBid.clear();
          this._curAniInfo = null;
          //        //! 停止动画
          //        //! 回收影子
          if (this._shadow) {
            //@ts-ignore
            this._shadow.getComponent(gts.FrameAnimation).Stop(false);
          }
          this._moveSpd = 1;
          this.pathSys.active = false;
          this.StopAnimation();
        };
        _proto.setLockPos = function setLockPos() {
          var lockPos = v3(0, 0, 0);
          switch (this.fishTypeId) {
            case "128":
            case "201":
              {
                lockPos = v3(0, -32, 0);
                break;
              }
            case "202":
              {
                lockPos = v3(40, -32, 0);
                break;
              }
            case "203":
              {
                lockPos = v3(-10, -32, 0);
                break;
              }
            case "204":
              {
                lockPos = v3(2, -32, 0);
                break;
              }
          }
          this._lock.position = lockPos;
        };
        _proto.BeLocked = function BeLocked(uid, locked) {
          if (locked) {
            //            // gts.Debug.Log("==if (locked)===BeLocked==fid==" + this.fid + "===uid====" + uid);

            GUtil.NodeVisible(this._lock, locked);
            this._lockers.add(uid);
            this.setLockPos();
            this._lock.scale = v3(5, 5, 1);
            this._lock.getComponent(UIOpacity).opacity = 0;
            tween(this._lock).to(0.2, {
              scale: v3(0.5, 0.5, 0.5)
            }, {
              easing: "cubicOut"
            }).delay(0.2).to(0.1, {
              scale: v3(1, 1, 1)
            }, {
              easing: "cubicIn"
            }).start();
            tween(this._lock.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }, {
              easing: "cubicOut"
            }).start();
            return;
          }

          //        // gts.Debug.Log("==delete===BeLocked==fid==" + this.fid + "===uid====" + uid);
          this._lockers["delete"](uid);
          if (this._lockers.size <= 0) {
            //            // gts.Debug.Log("==.size <= 0===BeLocked==fid==" + this.fid + "===uid====" + uid);
            GUtil.NodeVisible(this._lock, locked);
          }
        };
        _proto.switchLock = function switchLock() {
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
        };
        _proto.OnMoveFinished = function OnMoveFinished() {
          //        // gts.Debug.Log("OnMoveFinished 00000000 fid:" + this._fid);
          this._pathIdx = -1;
          this._state = FishDef.State.DIE;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          this.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, this._fid);
        };
        _proto.LogicUpdate = function LogicUpdate() {
          if (FishDataMgr.fireLocking && FishDataMgr.curLockFishID == 0 && FishDataMgr.myLockedFishTypeId && FishDataMgr.myLockedFishTypeId == this.fishTypeId && this.isVisible) {
            FishDataMgr.myLockedFishTypeId = null;
            FishDataMgr.curLockFishID = this.fid;
            FishDataMgr.fireLocking = true;
            this.autoEvent.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH, this.fid);
          }
          if (this._shadow) {
            this._shadow.angle = this.body.angle + this._rotateNode.angle % 360;
            this._shadow.scale = this.body.scale;
          }

          //        // 三段瞄准
          if (this._lock.active) {
            if (parseInt(this.fishTypeId) >= FishDef.FishType.bigMin && this.node.parent) {
              var wlockPos = this._lock_1.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              var nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
              if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
                wlockPos = this._lock_0.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                nlockPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos);
                if (!FishDataMgr.winRect.contains(v2(nlockPos.x, nlockPos.y))) {
                  wlockPos = this._lock_2.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                }
                this._lock.position = v3(this._lock.parent.getComponent(UITransform).convertToNodeSpaceAR(wlockPos));
              } else {
                this.setLockPos();
              }
            }

            //            // gts.Debug.LogInfo(`#this._lock.position: ${JSON.stringify(this._lock.position)}`);
          }

          //        // if (!this.isVisible && this._lockers && this._lockers.has(FishDataMgr.myUid)) {
          //        //     //自动锁定同类型鱼
          //        //     this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          //        // }
        };

        _proto.onLoad = function onLoad() {
          var _this3 = this;
          this._shEvent = ShowHideEvent.Bind(this.node);
          this._shEvent.OnEvent({
            cbShow: function cbShow(time) {
              //                // gts.Debug.LogInfo(`#FishGame FishObj 后台停留: ${time}`);
              _this3.scheduleOnce(function () {
                _this3.update(time / 1000);
              });
            },
            caller: this
          });
          this.collider.enabled = true;
        };
        _proto.UpdateCollider = function UpdateCollider() {
          var _this4 = this;
          if (!this.collider.enabled) {
            return;
          }
          this.scheduleOnce(function () {
            _this4.collider.size.x = _this4.body.getComponent(UITransform).width * 0.8;
            _this4.collider.size.y = _this4.body.getComponent(UITransform).height * 0.6;
          });
        }
        //    //
        ;

        _proto.update = function update(dt) {
          var _this5 = this;
          switch (this._state) {
            case FishDef.State.DIE:
              {
                break;
              }
            case FishDef.State.exit:
              {
                //                //鱼潮前加速离场
                if (!this.isVisible) {
                  this._state = FishDef.State.DIE;
                  this.scheduleOnce(function () {
                    if (isValid(_this5.node)) {
                      Tween.stopAllByTarget(_this5.node);
                      _this5.OnMoveFinished();
                    }
                  }, 3.0);
                }
                break;
              }
            default:
              {
                if (!this.pathSys || !this.pathSys.active) {
                  //                    //常规路径
                  this._moveDT += dt * this.fMoveSpeed;
                  if (this._moveDT < 0) {
                    // this.node.getComponent(UIOpacity).opacity = 0;

                    //                        // gts.Debug.LogInfo(`# FishId:${this.fid} 延迟中: ${this._moveDT} this._moveDT: ${this._moveDT}`);
                    break;
                  } else if (this._moveDT < 1 || !this._pathPos) {
                    break;
                  }
                  var intDT = Math.floor(this._moveDT);
                  this._moveDT -= intDT;
                  this._pathIdx += intDT;
                  if (this._pathIdx >= this._pathPos.len) {
                    this.exitScene(100);
                    break;
                  }
                  this._labNdRotateAng.node.active = FishCfgMgr.isOpenDebug;
                  this._labInfoAngle.node.active = FishCfgMgr.isOpenDebug;
                  this._lab_body_angle.node.active = FishCfgMgr.isOpenDebug;
                  var leftTime = this.liveTime - (sys.now() - this._createTime);
                  this._labInfoAngle.string = "" + leftTime;
                  var pos = FishDef.Util.ins.GetXYFromRowCol(this._pathPos.row[this._pathIdx], this._pathPos.col[this._pathIdx]);
                  var ang = this._pathPos.angle[this._pathIdx];
                  pos.x += this.OffsetX;
                  pos.y += this.OffsetY;
                  this.node.setPosition(v3(pos.x, pos.y, 0));
                  this.bodyRotate = ang;
                  this.node.getComponent(UIOpacity).opacity = 255;
                  this.LogicUpdate();
                } else if (!this.pathSys.finished) {
                  //                    //鱼潮
                  var fixedDt = dt * this._moveSpd;
                  if (this.delayUpdate > 0) {
                    this.delayUpdate -= fixedDt;
                    //                        //延迟中的鱼不可见
                    // this.node.getComponent(UIOpacity).opacity = 0;
                    break;
                  }
                  this._labNdRotateAng.node.active = FishCfgMgr.isOpenDebug;
                  this._labInfoAngle.node.active = FishCfgMgr.isOpenDebug;
                  this._lab_body_angle.node.active = FishCfgMgr.isOpenDebug;
                  var _leftTime = this.liveTime - (sys.now() - this._createTime);
                  this._labInfoAngle.string = "" + _leftTime;
                  if (this._moveTimes >= 0) {
                    this.pathSys.Update(fixedDt + this._moveTimes);
                    this._moveTimes = 0;
                  } else {
                    this.pathSys.Update(fixedDt);
                  }
                  var info = this.pathSys.stepInfo;
                  var _pos = v2(info.v2.x + this.OffsetX, info.v2.y + this.OffsetY);
                  this.node.setPosition(v3(_pos.x, _pos.y, 0));
                  this.node.getComponent(UIOpacity).opacity = 255;
                  this.bodyRotate = info.angle + 180;
                  this.LogicUpdate();
                }
                break;
              }
          }
        };
        _proto.AddShadow = function AddShadow() {
          //        //! TODO: 阴影的加载
          //        ///////////////////////////////////////////////////////////
          //        //设定鱼行进速度
          this.fMoveSpeed = 37.5;
          var fishType = parseInt(this.fishTypeId);
          switch (fishType) {
            case FishDef.FishType.bigMax:
              {
                //                //大金龙
                this.node.getComponent(UITransform).priority = 0;
                break;
              }
            case FishDef.FishType.biMuYu:
              {
                //                //比目鱼
                this.node.getComponent(UITransform).priority = -800;
                break;
              }
            case FishDef.FishType.longXia:
              {
                //                //龙虾
                this.fMoveSpeed *= 0.5;
                this.node.getComponent(UITransform).priority = -1000;
                break;
              }
            case FishDef.FishType.small_102:
              {
                this.body.scale = this.body.scale.multiplyScalar(0.75);
                break;
              }
            case FishDef.FishType.big_122:
              {
                this.body.scale = this.body.scale.multiplyScalar(1.6);
                break;
              }
            case FishDef.FishType.big_124:
              {
                this.body.scale = this.body.scale.multiplyScalar(0.85);
                break;
              }
            default:
              {
                if (fishType >= FishDef.FishType.leiSheXie && fishType != FishDef.FishType.shanDianShuiMu) {
                  this.fMoveSpeed *= 0.5;
                  this.node.getComponent(UITransform).priority = fishType > FishDef.FishType.longWangXianBao ? 1000 : -fishType;
                }
                break;
              }
          }

          //        //////////////////////////////////////////////////
          this._shadow.setPosition(-20, -20, -1);
          this._shadow.getComponent(UITransform).priority = -3000;
          this._shadow.active = false;
          //@ts-ignore
          // this.PlayAni(this._shadow.getComponent(gts.FrameAnimation));
        }
        //    //获取当前时间的路径节点
        ;

        _proto.GetIdxByTime = function GetIdxByTime() {
          var moveTimes = FishDataMgr.serverTicket - this._createTime;
          if (moveTimes < 0) {
            return 0;
          }
          return Math.floor(moveTimes / (this._fishMovingIntervalTime * 1000));
        };
        //    //! 播放动画
        _proto.PlayAnimation = function PlayAnimation() {
          var _this6 = this;
          //@ts-ignore
          if (!this.ani || !this.ani.enabled) {
            gts.Debug.LogErr("#FishGame \u64AD\u653E\u52A8\u753B\u5931\u8D25\uFF0C\u627E\u4E0D\u5230\u52A8\u753B\u7EC4\u4EF6");
            return;
          }
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            gts.Debug.LogErr("#FishGame \u64AD\u653E\u52A8\u753B\u5931\u8D25\uFF0C\u627E\u4E0D\u5230\u52A8\u753B\u7EC4\u4EF6");
            return;
          }
          var fixIDVal = -100;
          var fixedId = Number(this.fishTypeId) + fixIDVal;
          var atlasName = "f" + fixedId;
          var fixedSID = gts.Str.FmtStr("fish{0:M2}", fixedId);
          bundle.load("textures/fish/" + atlasName, SpriteAtlas, function (err, atlas) {
            _this6._curAniInfo = {
              atlas: atlas,
              frameCnt: atlas ? atlas.getSpriteFrames().length : 0,
              frameFmt: fixedSID + "_{0:M2}",
              startIdx: FishCfg.FrameStartIdx,
              frameDt: FishCfg.FrameDt
            };

            //            //鱼动画
            if (_this6.PlayAni(_this6.ani)) {
              _this6.UpdateCollider();
            }

            //            //鱼阴影动画
            //@ts-ignore
            // if (this._shadow) this.PlayAni(this._shadow.getComponent(gts.FrameAnimation));

            if (_this6._lock_0) {
              _this6._lock_0.getComponent(Widget).updateAlignment();
            }
            if (_this6._lock_2) {
              _this6._lock_2.getComponent(Widget).updateAlignment();
            }
          });
        };
        _proto.StopAnimation = function StopAnimation() {
          if (this.ani) {
            this.ani.Stop(false);
          }
        };
        _proto.PlayAni = function PlayAni(ani, loopCounts) {
          //@ts-ignore
          if (!ani || !ani.enabled || !this._curAniInfo) {
            return false;
          }
          ani.atlas = this._curAniInfo.atlas;
          ani.frameCnt = this._curAniInfo.frameCnt;
          ani.frameNameFmt = this._curAniInfo.frameFmt;
          ani.SetDurationType(gts.DurationType.SINGLE_FRAME);
          ani.duration = this._curAniInfo.frameDt;
          ani.startIdx = this._curAniInfo.startIdx;
          ani.Play(loopCounts ? loopCounts : -1);
          return true;
        };
        _proto.ReqCatchFish = function ReqCatchFish(bid, uid, bGold, bulType) {
          if (uid !== FishDataMgr.myUid || this._hasBid.has(bid)) {
            return;
          }
          this._hasBid.add(bid);
          var killType = FishDef.KillType.Nor;
          switch (bulType) {
            case FishDef.CannonType.special_dianZhuan:
              {
                killType = FishDef.KillType.DRILL;
                break;
              }
            case FishDef.CannonType.special_leiTingHuoPao:
              {
                killType = FishDef.KillType.FIREGUN;
                break;
              }
            //            // default: {
            //            //     killType = FishDataMgr.getKillType(parseInt(this.fishTypeId));
            //            //     break;
            //            // }
          }

          FishMsgSender.Send_CachFish({
            fishID: this._fid,
            uid: uid,
            golds: bGold,
            bid: bid,
            bulletType: bulType,
            killType: killType
          });
        };
        _proto.ReqCatch = function ReqCatch(combul) {
          if (-1 == this.fid || this._state == FishDef.State.DIE) {
            //            // gts.Debug.Log("=====ReqCatch======FishDef.State.DIE========");
            return;
          }

          //        // gts.Debug.Log("===============ReqCatch==============");
          this.ReqCatchFish(combul.bid, combul.uid, combul.holdGold, combul.bulType);
        }
        //    //! 鱼被捕获
        ;

        _proto.Die = function Die(msg) {
          var _this7 = this;
          if (this._state == FishDef.State.DIE) {
            return;
          }
          var eMgr = MainManager.getInstance().getEventManager();
          this._state = FishDef.State.DIE;
          GUtil.NodeVisible(this._lock, false);
          this.collider.enabled = false;
          //        //死亡时的节点层级调整
          this.node.getComponent(UITransform).priority = FishCfg.MaxZIndex;
          if (this.lockers && this.lockers.has(FishDataMgr.myUid)) {
            //            //自动锁定同类型鱼
            this.autoEvent.EmitEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, parseInt(this.fishTypeId));
          }
          if (this.ani) {
            var dt = this.ani.duration;
            this.ani.duration = dt / 4;
          }
          var fRecycle = function fRecycle() {
            _this7.scheduleOnce(function () {
              _this7.StopAnimation();

              // tween(this.node.getComponent(UIOpacity)).to(0.25, { opacity: 0 }).start();
              tween(_this7.node).to(0.25, {
                scale: v3(0.1, 0.1, 0.1)
              }).call(function () {
                if (_this7.autoEvent) {
                  _this7.autoEvent.EmitEvent(FishDef.Event.RECYCLE_FISH, _this7._fid);
                } else {
                  if (eMgr) {
                    eMgr.dispatch(FishDef.Event.RECYCLE_FISH, _this7._fid);
                  } else {
                    error("====this.autoEvent====eMgr======null");
                  }
                }
              }).start();
            });
          };

          //        //! 更新玩家金幣
          if (msg) {
            //            //延迟回收
            var delayTimes = 1;
            var fishType = parseInt(this.fishTypeId);
            if (!(fishType > FishDef.FishType.special && msg.killType == FishDef.BulletType.FIREGUN)) {
              switch (parseInt(this.fishTypeId)) {
                case FishDef.FishType.zhaDanXie:
                  {
                    //                        //捕获后的动效
                    this.playCatchAnimation(fRecycle, msg.uid);
                    return;
                  }
                case FishDef.FishType.shanDianShuiMu:
                  {
                    delayTimes = 4.25;
                    break;
                  }
              }
            }
            this.scheduleOnce(fRecycle, delayTimes);
          } else {
            //            //立即回收
            fRecycle();
          }
        }
        //    //捕获后动效 -- 如果有
        ;

        _proto.playCatchAnimation = /*#__PURE__*/
        function () {
          var _playCatchAnimation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(callBack, uid) {
            var _this8 = this;
            var atlasName, frameFmt, startIdx, frameDt, pro_0, pro_1;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!(!this.ani || !this.ani.enabled)) {
                    _context.next = 3;
                    break;
                  }
                  if (callBack) {
                    callBack();
                  }
                  return _context.abrupt("return");
                case 3:
                  _context.t0 = parseInt(this.fishTypeId);
                  _context.next = _context.t0 === FishDef.FishType.zhaDanXie ? 6 : 18;
                  break;
                case 6:
                  atlasName = "spine/effect/bombFishCatch/fishBombCatch";
                  frameFmt = "fish_102_catch_{0:M2}";
                  startIdx = 0;
                  frameDt = 150 / 1000;
                  pro_0 = function pro_0() {
                    return new Promise(function (resolve, reject) {
                      FishDef.Util.bundle.load(atlasName, SpriteAtlas, function (err, atlas) {
                        if (err) {
                          gts.Debug.LogErr("" + err);
                          reject(false);
                        } else {
                          _this8._curAniInfo = {
                            atlas: atlas,
                            frameCnt: atlas ? atlas.getSpriteFrames().length : 0,
                            frameFmt: frameFmt,
                            startIdx: startIdx,
                            frameDt: frameDt || FishCfg.FrameDt
                          };
                          _this8.PlayAni(_this8.ani, 1);
                          _this8.ani.OnPlayCompletedNotify(function () {
                            resolve(true);
                          }, _this8);
                        }
                      });
                    });
                  };
                  pro_1 = function pro_1() {
                    return new Promise(function (resolve, reject) {
                      //                        //爆炸
                      var prefab = FishDataMgr.resHolder ? FishDataMgr.resHolder.getPrefabByName("Node_bomb") : null;
                      if (prefab) {
                        if (uid == FishDataMgr.myUid) {
                          _this8.autoEvent.EmitEvent(FishDef.Event.ON_SCREEN_SHOCK);
                        }

                        //                            // gts.Debug.Log("开火发射--炸弹动效");
                        FishSound.PlaySound(FishDef.Sound.BOMB_EFFECT);
                        var tempBomb = instantiate(prefab);
                        tempBomb.position = _this8.node.position;
                        _this8.node.parent.addChild(tempBomb);

                        // this.node.getComponent(UIOpacity).opacity = 0;

                        var spine = tempBomb.getComponent(sp.Skeleton);
                        spine.setAnimation(0, "bomb_effect", false);
                        spine.setCompleteListener(function () {
                          spine.setCompleteListener(null);
                          tempBomb.removeFromParent();
                        });
                        resolve(true);
                      }
                    });
                  };
                  _context.next = 14;
                  return pro_0();
                case 14:
                  //                //
                  if (callBack) {
                    callBack();
                  }
                  _context.next = 17;
                  return pro_1();
                case 17:
                  return _context.abrupt("return");
                case 18:
                  if (callBack) {
                    callBack();
                  }
                  return _context.abrupt("return");
                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function playCatchAnimation(_x, _x2) {
            return _playCatchAnimation.apply(this, arguments);
          }
          return playCatchAnimation;
        }() //    /**
        //     * 当碰撞产生的时候调用
        //     * other 产生碰撞的另一个碰撞组件
        //     * self  产生碰撞的自身的碰撞组件
        //     */
        ;

        _proto.OnCollisionEnter = function OnCollisionEnter(self, other) {
          if (FishDataMgr.ins.isSwitchScene) {
            return;
          }
          var combul = other.node.getComponent(FishBullet);
          if (combul && (combul._bulletType == FishDef.CannonType.special_dianZhuan || combul.isEnable)) {
            combul.isEnable = false;
            this.ReqCatch(combul);
            gts.Debug.LogWarr("==fish=onCollisionEnter==bid==" + combul.bid + "==fishID==" + this.fishTypeId);
          }
        };
        _proto.OnHit = function OnHit() {
          var _this9 = this;
          if (!this.isHitColoring) {
            this.isHitColoring = true;
            this.body.getComponent(UIRenderer).color = this.colOnHit;
            tween(this.node).delay(0.25).call(function () {
              _this9.isHitColoring = false;
              _this9.body.getComponent(UIRenderer).color = color(255, 255, 255, 255);
            }).start();
          }
        };
        _createClass(FishObj, [{
          key: "lock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "curLock",
          get: function get() {
            return this._lock;
          }
        }, {
          key: "body",
          get: function get() {
            if (!this._body) {
              this._body = find("body", this.node);
            }
            return this._body;
          }
        }, {
          key: "ani",
          get: function get() {
            if (!this._ani) {
              //@ts-ignore
              this._ani = this.body ? this.body.getComponent(gts.FrameAnimation) : null;
            }
            return this._ani;
          }
        }, {
          key: "collider",
          get: function get() {
            if (!this._collider) {
              this._collider = this.getComponent(BoxCollider2D);
            }
            return this._collider;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          },
          set: function set(state) {
            this._state = state;
          }
        }, {
          key: "autoEvent",
          get: function get() {
            if (!this._autoEvent) {
              this._autoEvent = AutoEventNode.BindNode(this.node);
            }
            return this._autoEvent;
          }
        }, {
          key: "delayUpdate",
          get: function get() {
            return this._delayUpdate;
          },
          set: function set(value) {
            this._delayUpdate = value;
            if (this._delayUpdate > 1000) {
              gts.Debug.LogErr("# \u9519\u8BEF\u7684\u5EF6\u8FDF: " + this._delayUpdate);
            }
          }
        }, {
          key: "lockers",
          get: function get() {
            return this._lockers;
          }
        }, {
          key: "isVisible",
          get: function get() {
            var height = view.getVisibleSize().height;
            var width = view.getVisibleSize().width;
            var winRect = rect(0, 0, width, height);
            winRect.center = v2(0, 0);
            var angJia = this._rotateNode.angle % 180 * Math.PI / 180;
            var w = Math.abs(this._body.getComponent(UITransform).width * this.fishScale);
            var h = Math.abs(this._body.getComponent(UITransform).height * this.fishScale);
            var disW = (w - h) * Math.sin(angJia);
            w += -disW;
            h += disW;
            var fishRect = rect(0, 0, w, h);
            fishRect.center = v2(this.node.getPosition().x, this.node.getPosition().y);
            this._isVisible = winRect.intersects(fishRect);
            return this._isVisible;
          }
        }, {
          key: "pathSys",
          get: function get() {
            if (!this._pathSys) {
              this._pathSys = FishPath.LineData.Alloc().OnFinishedNotify(this.OnMoveFinished, this);
            }
            return this._pathSys;
          }
        }, {
          key: "cfg",
          get: function get() {
            return this._cfg;
          }
        }, {
          key: "v_size",
          get: function get() {
            return view.getVisibleSize();
          }
        }, {
          key: "fid",
          get: function get() {
            return this._fid;
          }
        }, {
          key: "fishScale",
          get: function get() {
            return this._cfg && this._cfg.GScale ? this._cfg.GScale : FishCfg.GScale;
          }
        }, {
          key: "bodyRotate",
          set: function set(value) {
            if (!this._cfg || !this._cfg.NoFixAngle) {
              if (this._rotateNode) {
                this._rotateNode.angle = value;
              }
            }
          }
        }]);
        return FishObj;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fishTypeId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labAngle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_ani", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_collider", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_body", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_rotateNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_labNdRotateAng", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_labInfoAngle", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_lab_body_angle", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_colliderNotify", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_lock", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "colOnHit", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return color(255, 0, 0, 255);
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "fMoveSpeed", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_lock_0", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_lock_1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_lock_2", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_shadow", [_dec18], {
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

System.register("chunks:///_virtual/FishObjMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishObj.ts', './FishObj_spine.ts', './FishMsgSender.ts', './FishObj_skeleton.ts', './I18n.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, view, UITransform, v3, Vec2, v2, instantiate, UIOpacity, sp, tween, Node, isValid, Prefab, AutoEventNode, GUtil, FishDataMgr, FishDef, FishObj, FishObj_spine, FishMsgSender, FishObj_skeleton, i18n;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      UITransform = module.UITransform;
      v3 = module.v3;
      Vec2 = module.Vec2;
      v2 = module.v2;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      sp = module.sp;
      tween = module.tween;
      Node = module.Node;
      isValid = module.isValid;
      Prefab = module.Prefab;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishObj = module.default;
    }, function (module) {
      FishObj_spine = module.default;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishObj_skeleton = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "42f0abmVSRN06uhP/V8b3+f", "FishObjMgr", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishObjMgr = exports('default', (_dec = ccclass("FishObjMgr"), _dec(_class = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishObjMgr, _AutoEventNode);
        function FishObjMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _this._isAllLoaded = false;
          _this._resHolder = null;
          //    // LIFE-CYCLE CALLBACKS:
          _this.loadingFishs = new Set();
          //    // private fishs: Map<number, any> = new Map<number, any>();
          _this.fishs = {};
          //    // private lockedFishs: Map<string, number> = new Map<string, number>();
          _this.myLockedFishID = null;
          _this.fishsNum = 0;
          return _this;
        }
        var _proto = FishObjMgr.prototype;
        _proto.AllLoaded = function AllLoaded() {
          this._isAllLoaded = true;
        };
        _proto.Init = function Init(poolOpt) {
          this._resHolder = poolOpt;
        };
        _proto.GetFishById = function GetFishById(fid) {
          //        // return this.fishs.get(fid);
          return this.fishs[fid];
        };
        _proto.onLoad = function onLoad() {
          this.registEvent();
        }
        //    // start() {}
        ;

        _proto.registEvent = function registEvent() {
          var _this2 = this;
          this.OnEvent(FishDef.MsgID.S2C_CREATE_FISHS, function (recvData) {
            var msg = recvData.Data;
            gts.Debug.Log("==S2C_CREATE_FISHS==" + JSON.stringify(recvData.Data));
            _this2.OnFishGroup(msg);
          });
          this.OnEvent(FishDef.MsgID.S2C_FISH_TIDE_GROUP, function (recvData) {
            gts.Debug.Log("==鱼潮信息==" + JSON.stringify(recvData.Data));
            _this2.scheduleOnce(function () {
              _this2.OnFishGroup(recvData.Data);
            }, 1.5);
          });
          this.OnEvent(FishDef.MsgID.S2C_TIME_SYNC, function (msg) {
            FishDataMgr.TimeSync(msg.time);
          });
          this.OnEvent(FishDef.MsgID.S2C_CATCH_FISH, function (data) {
            gts.Debug.Log("#FishGame fishObjMgr \u73A9\u5BB6\u6355\u83B7\u6210\u529F: " + JSON.stringify(data));
            if (data.Code != 0) {
              //                //Code=30009 同时击杀一条鱼  捕获失败
              gts.Debug.LogWarr("\u73A9\u5BB6\u6355\u83B7 ERR_CODE: " + data.Code);
              //    if (data.Code != 30009) {
              //        Common.showTip(i18n.errTip(data.Code));
              //    }
              return;
            }
            _this2.OnRecvFishCatch(data.Data);
          });
          this.OnEvent(FishDef.Event.ON_SPECIAL_CATCH_CALLBACK, this.OnSpecialCatchCallBack);
          this.OnEvent(FishDef.MsgID.S2C_FISH_KILL_FISHS, function (data) {
            gts.Debug.Log("#FishGame fishObjMgr \u73A9\u5BB6\u7FA4\u6740\u6355\u83B7\u6210\u529F: " + JSON.stringify(data));
            _this2.OnRecvFishsCatch(data.Data);
          });
          this.OnEvent(FishDef.Event.RECYCLE_FISH, this.RecycleFish);
          this.OnEvent(FishDef.Event.SYNC_FISH_GROUP, this.DoCreateFishs);
          this.OnEvent(FishDef.Event.UPDATE_FISH_GROUP, this.DoUpdateFishs);

          //        //切换场景
          this.OnEvent(FishDef.Event.SWITCH_SCENE, function (changed) {
            if (changed) {
              for (var _i = 0, _Object$values = Object.values(_this2.fishs); _i < _Object$values.length; _i++) {
                var value = _Object$values[_i];
                value.SetMoveSpd();
              }
            } else {
              for (var _i2 = 0, _Object$values2 = Object.values(_this2.fishs); _i2 < _Object$values2.length; _i2++) {
                var _value = _Object$values2[_i2];
                _value.SetMoveSpd(1);
              }
            }
          });

          //        //清场
          this.OnEvent(FishDef.Event.ON_FISH_EXIT, function () {
            for (var _i3 = 0, _Object$values3 = Object.values(_this2.fishs); _i3 < _Object$values3.length; _i3++) {
              var value = _Object$values3[_i3];
              if (value.state != FishDef.State.CATCHED) {
                value.exitScene();
              }
            }
          });

          //        //-->PLAYER_UPDATE_LOCK（更新玩家锁定状态和锁定信息）-->UPDATE_LOCK_ICON(更新--锁定按钮图标)
          this.OnEvent(FishDef.Event.PLAYER_LOCK_FISH, this.playerLockFish);

          //        //同类型锁定切换
          this.OnEvent(FishDef.Event.ON_FISH_SWITCH_LOCKED_EVENT, function (fishTypeId) {
            var isGet = false;
            if (fishTypeId <= FishDef.FishType.huangJinFuDai) {
              for (var _i4 = 0, _Object$values4 = Object.values(_this2.fishs); _i4 < _Object$values4.length; _i4++) {
                var fish = _Object$values4[_i4];
                if (isGet) {
                  return;
                }
                if (fish.state == FishDef.State.ALIVE && parseInt(fish.fishTypeId) == fishTypeId && fish.isVisible) {
                  //                        // gts.Debug.Log("==自动锁定==" + fishTypeId);
                  FishDataMgr.curLockFishID = fish.fid;
                  FishDataMgr.fireLocking = true;
                  _this2.playerLockFish(fish.fid);
                  isGet = true;
                }
              }
            }
            if (!isGet) {
              FishDataMgr.curLockFishID = 0;
              _this2.playerLockFish();
            }
          });
        }
        //    /**
        //     * LockFish event callBack
        //     * @param fid 锁定对象id ==null则取消锁定
        //     */
        ;

        _proto.playerLockFish = function playerLockFish(fid) {
          //        //释放已有的锁定对象
          if (this.myLockedFishID) {
            //            // var oldFish = this.fishs.get(this.myLockedFishID);
            var oldFish = this.fishs[this.myLockedFishID];
            if (oldFish) {
              this.myLockedFishID = null;
              oldFish.BeLocked(FishDataMgr.myUid, false);
              FishDataMgr.myLockedFishTypeId = oldFish.fishTypeId;
            }
          }
          var data = null;
          if (fid && fid > 0) {
            //            // var fish = this.fishs.get(fid);
            var fish = this.fishs[fid];
            if (fish) {
              FishDataMgr.myLockedFishTypeId = null;

              //                //设置新的锁定对象
              this.myLockedFishID = fid;
              fish.BeLocked(FishDataMgr.myUid, true);
              data = {
                uid: FishDataMgr.myUid,
                fid: fid,
                fish: fish
              };
            }
          }

          //        //更新玩家锁定状态和锁定信息
          this.EmitEvent(FishDef.Event.PLAYER_UPDATE_LOCK, data);
        };
        _proto.OnFishGroup = function OnFishGroup(msg) {
          //        //! 同步服务器时间
          if (undefined !== msg.serverTime && null !== msg.serverTime) {
            FishDataMgr.TimeSync(msg.serverTime);
          }
          //        //! 创建鱼
          if (msg.fishs) {
            //            // gts.Debug.LogInfo(`# DoCreateFishs==serverTime=:${msg.serverTime}`);
            this.DoCreateFishs(msg.fishs);
          }
        }
        //    //**击杀特殊鱼后的 事件处理-请求群杀...*/
        //    //data = {fishType: number, pos: Vec2, fishID?:number}
        ;

        _proto.OnSpecialCatchCallBack = function OnSpecialCatchCallBack(data) {
          var visibleSize = view.getVisibleSize();
          var pWidth = visibleSize.width / 2.0;
          var pHeight = visibleSize.height / 2.0;

          //        //获取全屏的小鱼
          var liveFishs = [];
          if (data.canPos) {
            var wCanPos = data.canPos;
            var fix = data.fix;
            var canAngle = data.canAngle;

            //            //镭射炮
            Object.values(this.fishs).forEach(function (FishObj, key) {
              var wPos = FishObj.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              var curAngle = GUtil.getAngle(wCanPos, wPos, fix);
              var disTans = Vec2.distance(wCanPos, v2(wPos.x, wPos.y));
              var disAngle = Math.abs(canAngle - curAngle);
              var angJia = disAngle * Math.PI / 180;
              var disR = disTans * Math.sin(angJia);
              var fishType = parseInt(FishObj.fishTypeId);
              if (disAngle < 60 && FishObj.state == FishDef.State.ALIVE && (fishType < FishDef.FishType.bigMin || fishType == FishDef.FishType.small_126 || fishType == FishDef.FishType.small_127 || fishType == FishDef.FishType.small_128) && Math.abs(disR) < 200) {
                liveFishs.push(FishObj.fid);
              }
              //                // phics.fill();
            });
          } else {
            var fishPos = data.pos;
            Object.values(this.fishs).forEach(function (FishObj, key) {
              var wPos = FishObj.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              var dis = GUtil.GetDistance(fishPos, v2(wPos.x, wPos.y));
              var fishType = parseInt(FishObj.fishTypeId);
              if (FishObj.state == FishDef.State.ALIVE && (fishType < FishDef.FishType.bigMin || fishType == FishDef.FishType.small_126 || fishType == FishDef.FishType.small_127 || fishType == FishDef.FishType.small_128) && Math.abs(FishObj.node.getPosition().x) < pWidth && Math.abs(FishObj.node.getPosition().y) < pHeight && dis < 450) {
                liveFishs.push(FishObj.fid);
              }
            });
          }

          //        // phics.fill();

          //        //请求群杀捕获
          FishMsgSender.Send_CachFishs({
            fishType: data.fishType,
            fishPosX: data.fishID || 0,
            //用作fishID
            fishPosY: 0,
            fishIDArr: liveFishs,
            killType: FishDataMgr.getKillType(data.fishType)
          });
        }
        //    //接收到群杀信息
        ;

        _proto.OnRecvFishsCatch = function OnRecvFishsCatch(msg) {
          var _this3 = this;
          gts.Debug.Log("==OnRecvFishCatch==接收到群杀信息=OnRecvFishsCatch===" + JSON.stringify(msg));
          if (!msg) {
            gts.Debug.LogErr("===OnRecvFishsCatch===msg===null  err");
            return;
          }

          //        //更新金币-数据
          var p = FishDataMgr.PlayerWithUid(msg.uid);
          if (p && msg.playerGolds) {
            //            // gts.Debug.Log("==更新金币==OnRecvFishsCatch====PlayerGolds++=====" + p.golds);
            p.golds = msg.playerGolds;
          }
          //        // gts.Debug.Log("==更新金币==OnRecvFishsCatch====msg.PlayerGolds++=====" + msg.PlayerGolds);

          var catchFishType = msg.fishType;
          var posList = [];
          var catchFishs = function catchFishs(fishNum) {
            msg.rewardInfos.some(function (fishInfo) {
              //                // var fishObj = this.fishs.get(fishInfo.fishID);
              var fishObj = _this3.fishs[fishInfo.fishID];
              if (fishObj) {
                fishObj.state = FishDef.State.CATCHED;
                fishObj.collider.enabled = false;

                //                    //金币POS
                var pos = GUtil.Pos_L2W_V2(fishObj.node);

                //                    //闪电Pos
                if (catchFishType == FishDef.FishType.shanDianShuiMu || catchFishType == FishDef.FishType.leiSheXie || catchFishType == FishDef.FishType.zhaDanXie || catchFishType == FishDef.FishType.dianZhuanXie) {
                  posList.push(GUtil.Pos_L2W_V2(fishObj.node)); //v2(fishObj.node.getPosition().x, fishObj.node.getPosition().y)
                }

                //                    //! TODO: 后续添加
                var fishType = parseInt(fishObj.fishTypeId);
                var odds = fishInfo.rewardGolds;

                //                    // gts.Debug.Log("==群杀信息==OnRecvFishsCatch====rewardGolds++=====" + fishInfo.rewardGolds);

                var toPosW = null;
                var Node_specialTip = _this3.node.parent.getChildByName("Node_specialTip" + msg.uid);
                if (Node_specialTip) {
                  toPosW = Node_specialTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                }
                var killMsg = {
                  //                        /**被击杀鱼的id*/
                  fishID: fishInfo.fishID,
                  //                        /**击杀获得的币值*/
                  rewardGolds: fishInfo.rewardGolds,
                  //                        /**玩家uid*/
                  uid: msg.uid,
                  //                        /**玩家金币*/
                  playerGolds: msg.playerGolds,
                  //                        /** 奖励倍数*/
                  rewardNum: fishInfo.rewardNum,
                  //                        //被击杀类型 0:普通 1-n 对应炮类型
                  killType: msg.killType
                };
                var data = {
                  msg: killMsg,
                  pos: pos,
                  odds: odds,
                  fishType: fishType,
                  toPos: toPosW,
                  onCoinRecycled: function onCoinRecycled() {
                    fishNum--;
                    //                            // gts.Debug.Log("==OnRecvFishsCatch==onCoinRecycled====fishNum=====" + fishNum);
                    if (fishNum == 0) {
                      //                                //显示金币总收入
                      _this3.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + msg.uid, [odds, FishDataMgr.getKillType(catchFishType)]);

                      //                                // gts.Debug.Log("-catchFishs--更新金币----==");
                      //                                //更新金币-显示
                      var _p = FishDataMgr.PlayerWithUid(msg.uid);
                      if (_p) {
                        _this3.EmitEvent(FishDef.Event.UPDATE_PLAYER_GOLD, _p.seat);
                      }
                      msg = null;
                    } else {
                      _this3.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN + msg.uid, [odds, FishDataMgr.getKillType(catchFishType)]);
                    }
                  }
                };
                if (fishType < FishDef.FishType.bigMin || fishType == FishDef.FishType.small_126 || fishType == FishDef.FishType.small_127 || fishType == FishDef.FishType.small_128) {
                  //                        //普通鱼
                  _this3.EmitEvent(FishDef.Event.ON_FISH_CATCH_NOMAL, data);
                  _this3.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
                  fishObj.Die(killMsg);
                }
              }
            });
          };
          if (msg.rewardInfos && msg.rewardInfos.length > 0) {
            catchFishs(msg.rewardInfos.length);
          }

          //        //闪电Pos
          if (catchFishType == FishDef.FishType.shanDianShuiMu) {
            //            //
            var killFishID = msg.fishPosX; //用作fishID
            var wPos = v3(0, 0, 0);
            wPos = this.fishs[killFishID].node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));

            //            //添加闪电动效
            this.EmitEvent(FishDef.Event.EFFECT_LIGHTING, {
              endPosList: posList,
              startPos: wPos
            });
            //            // gts.Debug.Log("-==OnRecvFishCatch==添加闪电动效====-添加闪电动效=");
            if (msg.uid == FishDataMgr.myUid) {
              this.EmitEvent(FishDef.Event.ON_SCREEN_SHOCK);
            }
          }
          //        // else if (catchFishType == FishDef.FishType.dianZhuanXie) {
          //        //     //通知换炮
          //        //     if (msg.Uid == FishDataMgr.myUid) {
          //        //         this.EmitEvent(FishDef.Event.ON_SWITCH_TO_NOMAL_CANNON + msg.Uid);
          //        //     }
          //        // }

          if (posList.length == 0) {
            //            //显示金币总收入
            this.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + msg.uid, [0, FishDataMgr.getKillType(catchFishType)]);
            //            // gts.Debug.Log("-==OnRecvFishCatch==接收到群杀信息====-显示金币总收入=posList.length==0=");
          }
        };

        _proto.OnRecvFishCatch = function OnRecvFishCatch(msg) {
          var _this4 = this;
          //        // var fish = this.fishs.get(msg.fishID);

          var fish = this.fishs[msg.fishID];
          if (!fish || fish.state == FishDef.State.CATCHED || fish.state == FishDef.State.DIE) {
            return;
          }
          this.EmitEvent(FishDef.Event.ON_CATCH_TO_BULLET + msg.bid, msg);
          if (!FishDataMgr.loadCompleted) {
            this.loadingFishs.forEach(function (fishInfo) {
              if (msg.fishID == fishInfo.fishID) {
                _this4.loadingFishs["delete"](fishInfo);
              }
            });
            return;
          }
          var fishType = parseInt(fish.fishTypeId); //202电钻 201镭射

          //        //火炮捕获特俗鱼
          if (fishType > FishDef.FishType.special && msg.killType == FishDef.BulletType.FIREGUN) {
            //            //掉落子弹胶囊Node_addBullet
            var pos = GUtil.Pos_L2W_V2(fish.node);
            var Node_addBullet = instantiate(this._resHolder.getPrefabByName("Node_addBullet"));
            Node_addBullet.name = "Node_addBullet_" + msg.uid + "_" + msg.fishID;
            Node_addBullet.position = v3(this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0)));
            Node_addBullet.getComponent(UIOpacity).opacity = 0;
            this.node.parent.addChild(Node_addBullet);
            this.scheduleOnce(function () {
              Node_addBullet.getComponent(UIOpacity).opacity = 255;
              var data = {
                msg: msg,
                pos: pos,
                odds: msg.rewardGolds,
                fishType: fishType
              };
              var Node_addBullet_sp = Node_addBullet.getComponent(sp.Skeleton);
              Node_addBullet_sp.setAnimation(0, "intro", false);
              Node_addBullet_sp.setCompleteListener(function () {
                Node_addBullet_sp.setCompleteListener(null);
                Node_addBullet_sp.setAnimation(0, "idle", true);
                tween(Node_addBullet).delay(1.0).call(function () {
                  _this4.EmitEvent(FishDef.Event.ON_FISH_CATCH_SPECIAL, data);
                }).start();
              });
            }, 1.0);
            if (fishType != FishDef.FishType.longWangXianBao) {
              fish.Die(msg);
            }
            return;
          }

          //        //更新金币-数据
          var p = FishDataMgr.PlayerWithUid(msg.uid);
          if (p && msg.playerGolds) {
            //            // gts.Debug.Log("==更新金币==OnRecvFishCatch====playerGolds++=====" + p.golds);
            p.golds = msg.playerGolds;
          }

          //        // gts.Debug.Log("==更新金币==OnRecvFishCatch====msg.playerGolds++=====" + msg.playerGolds);

          //        //! TODO: 后续添加
          var pos = GUtil.Pos_L2W_V2(fish.node);
          if (fishType != FishDef.FishType.longWangXianBao) {
            fish.state = FishDef.State.CATCHED;
            fish.collider.enabled = false;
          }
          var odds = msg.rewardGolds;

          //        // gts.Debug.Log("====OnRecvFishCatch====rewardGolds++=====" + msg.rewardGolds);

          var toPosW = null;
          var onCoinRecycled = null;
          var Node_specialTip = this.node.parent.getChildByName("Node_specialTip" + msg.uid);
          if (Node_specialTip && msg.killType > FishDef.BulletType.Nor) {
            toPosW = Node_specialTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            onCoinRecycled = function onCoinRecycled() {
              _this4.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN + msg.uid, [odds, msg.killType]);
            };
          }
          var data = {
            msg: msg,
            pos: pos,
            odds: msg.rewardGolds,
            fishType: fishType,
            toPos: toPosW,
            onCoinRecycled: onCoinRecycled
          };
          if (fishType > FishDef.FishType.special) {
            //            //特殊鱼
            if (fishType == FishDef.FishType.longWangXianBao) {
              //                //龙王
              if (FishDataMgr.myUid != msg.uid) {
                //                    //其他玩家
                this.EmitEvent(FishDef.Event.ON_FISH_CATCH_NOMAL, data);
                this.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
              } else {
                this.EmitEvent(FishDef.Event.ON_FISH_CATCH_SPECIAL, data);
              }
            } else {
              //                // gts.Debug.Log("---OnRecvFishCatch--ON_FISH_CATCH_SPECIAL---");
              this.EmitEvent(FishDef.Event.ON_FISH_CATCH_SPECIAL, data);
              fish.Die(msg);
            }
          } else if (fishType >= FishDef.FishType.bigMin && fishType <= FishDef.FishType.bigMax) {
            if (FishDataMgr.myUid == msg.uid) {
              //                //大鱼
              this.EmitEvent(FishDef.Event.ON_FISH_CATCH_BIG, data);
            } else {
              //                //其他玩家没有动效
              this.EmitEvent(FishDef.Event.ON_FISH_CATCH_NOMAL, data);
              this.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
            }
            fish.Die(msg);
          } else {
            //            //普通鱼
            this.EmitEvent(FishDef.Event.ON_FISH_CATCH_NOMAL, data);
            this.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
            fish.Die(msg);
          }
        };
        _proto.DoCreateFishs = function DoCreateFishs(fishs) {
          var _this5 = this;
          if (!this._isAllLoaded) {
            //            // gts.Debug.Log(`#FishGame: `);
            fishs.forEach(function (fish) {
              _this5.loadingFishs.add(fish);
            });
            return;
          }
          fishs.forEach(function (fish) {
            _this5.fishSpawn(fish, false);
          });
        };
        _proto.DoUpdateFishs = function DoUpdateFishs(fishs, serverTime) {
          var _this6 = this;
          if (undefined !== serverTime && null !== serverTime) {
            //            //! 同步服务器时间
            FishDataMgr.TimeSync(serverTime);
          }
          gts.Debug.Log("# DoCreateFishs==serverTime=:" + serverTime);
          var fishList = {};
          fishs.forEach(function (fish) {
            fishList[fish.fishID] = fish;
            _this6.fishSpawn(fish);
          });
          Object.values(this.fishs).forEach(function (comFish, key) {
            if (!fishList[comFish.fid]) {
              tween(comFish.node).delay(0.05).call(function () {
                _this6.RecycleFish(comFish.fid);
              }).start();
            }
          });
        };
        _proto.fishSpawn = function fishSpawn(msg, isNomal) {
          var _this7 = this;
          gts.Debug.LogWarr("add fish -- fishData:" + JSON.stringify(msg));
          if (msg.liveTime == 0) {
            //            //疑似服务端数据错误
            return;
          }

          //        // if (this.fishsNum > 2) {
          //        //     return;
          //        // }

          this.fishsNum++;
          var fishNode = this.node.getChildByName("fish_" + msg.fishID);
          if (fishNode) {
            return;
          }

          //        //计算时间
          var delta = FishDataMgr.serverTicket - msg.startTime;
          if (delta > msg.liveTime) {
            return;
          }

          //        ///////////////////////////////
          //        // let tmpFish = this._resHolder.GetObjFromPool(FishDef.POOL_TYPE.skeletonFish, msg);
          //        // if (!tmpFish) {
          //        //     gts.Debug.LogErr("#FishGame 鱼实例无法获取");
          //        //     return;
          //        // }
          //        // tmpFish.name = `fish_${msg.fishID}`;
          //        // this.node.addChild(tmpFish);

          //        // let com: FishObj_skeleton = tmpFish.getComponent(FishObj_skeleton);
          //        // com.isNomal = isNomal;
          //        // this.fishs[msg.fishID] = com;

          //        // return;
          //        //////////////////////////////////////////

          if (msg.fishType == FishDef.FishType.longWangXianBao) {
            // 每次事件只创建一份提示，异步回调只持有本次节点。
            var _newTip = new Node();
            _newTip.parent = this.node.parent;
            _newTip.scale = v3(this.node.getComponent(UITransform).width / 1997, this.node.getComponent(UITransform).height / 1129, 1);
            var _tipSkeleton = _newTip.addComponent(sp.Skeleton);
            FishDef.Util.bundle.load("I18n/" + i18n.LangKey + "/bosslaixi", sp.SkeletonData, function (err, skeletonData) {
              if (err || !skeletonData || !isValid(_this7.node, true) || !isValid(_newTip, true)) {
                if (isValid(_newTip, true)) _newTip.destroyFromParent();
                if (err) gts.Debug.LogErr("" + err);
              } else {
                _tipSkeleton.skeletonData = skeletonData;
                _tipSkeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                _tipSkeleton.loop = false;
                _tipSkeleton.premultipliedAlpha = false;
                _tipSkeleton.setCompleteListener(function () {
                  if (isValid(_newTip, true)) _newTip.destroyFromParent();
                });
                _tipSkeleton.setAnimation(0, "animation", false);
              }
            });
          }
          if (msg.fishType >= FishDef.FishType.longWangXianBao) {
            //            //
            FishDef.Util.bundle.load("prefab/common/spineFish", Prefab, function (finished, total) {}, function (err, assets) {
              if (!isValid(_this7.node, true)) return;
              if (err) {
                gts.Debug.LogErr("" + err);
              } else {
                var tmpFish = instantiate(assets);
                tmpFish.name = "fish_" + msg.fishID;
                _this7.node.addChild(tmpFish);
                var com = tmpFish.getComponent(FishObj_spine);
                com.reuse(msg);

                //                        // this.fishs.set(msg.fishID, com);
                _this7.fishs[msg.fishID] = com;
              }
            });
          } else {
            //            //fbx
            if (FishDataMgr.resHolder.getFbxPrefab(msg.fishType)) {
              var _tmpFish = this._resHolder.GetObjFromPool(FishDef.POOL_TYPE.skeletonFish, msg);
              if (!_tmpFish) {
                gts.Debug.LogErr("#FishGame 鱼实例无法获取");
                return;
              }
              _tmpFish.name = "fish_" + msg.fishID;
              this.node.addChild(_tmpFish);
              var _com = _tmpFish.getComponent(FishObj_skeleton);
              this.fishs[msg.fishID] = _com;
              return;
            }
            if (msg.fishType == FishDef.FishType.leiTingHuoPao) {
              //                //雷霆火炮提示
              var newTip = new Node();
              newTip.parent = this.node.parent;
              var tipSkeleton = newTip.addComponent(sp.Skeleton);
              FishDef.Util.bundle.load("I18n/" + i18n.LangKey + "/firestormbegan", sp.SkeletonData, function (err, assets) {
                if (err) {
                  gts.Debug.LogErr("" + err);
                } else {
                  tipSkeleton.skeletonData = assets;
                  tipSkeleton.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
                  tipSkeleton.loop = false;
                  tipSkeleton.premultipliedAlpha = false;
                  tipSkeleton.setAnimation(0, "intro", false);
                  tipSkeleton.setCompleteListener(function () {
                    newTip.destroyFromParent();
                  });
                }
              });
            }
            var tmpFish = this._resHolder.GetObjFromPool(FishDef.POOL_TYPE.FISH, msg);
            if (!tmpFish) {
              gts.Debug.LogErr("#FishGame 鱼实例无法获取");
              return;
            }
            tmpFish.name = "fish_" + msg.fishID;
            this.node.addChild(tmpFish);
            var com = tmpFish.getComponent(FishObj);
            com.AddShadow();

            //            // this.fishs.set(msg.fishID, com);
            this.fishs[msg.fishID] = com;
          }
        }
        //    //! 回收鱼对象
        ;

        _proto.RecycleFish = function RecycleFish(fid) {
          if (this.fishsNum > 0) {
            this.fishsNum--;
          }

          //        // gts.Debug.Log("RecycleFish fid:"+fid);
          //        // var oldFish = this.fishs.get(fid);
          var oldFish = this.fishs[fid];
          if (oldFish) {
            var fishType = parseInt(oldFish.fishTypeId);
            if (fishType >= FishDef.FishType.longWangXianBao) {
              //                //spine 回收
              oldFish.unuse();
              oldFish.node.removeFromParent();
            } else {
              this._resHolder.RecycleNodeToPool(oldFish.node);
            }

            //            // this.fishs.delete(fid);
            delete this.fishs[fid];
          }
        };
        _createClass(FishObjMgr, [{
          key: "hndAllLoaded",
          get: function get() {
            return this.AllLoaded.bind(this);
          }
        }]);
        return FishObjMgr;
      }(AutoEventNode)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishPathCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Component;
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
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6f002y8tTFKwry7hfElX360", "FishPathCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishPathCtrl = exports('default', (_dec = ccclass("FishPathCtrl"), _dec2 = property({
        displayName: "调试状态",
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishPathCtrl, _Component);
        function FishPathCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "_debug", _descriptor, _assertThisInitialized(_this));
          //    // private _points: FishDef.IPoint[] = [];
          //    // private _steps: FishDef.ISetpData[] = [];
          //    //! 总时间
          _this._totalTime = 0;
          _this._runTime = 0;
          _this._progress = 0;
          return _this;
        }
        var _proto = FishPathCtrl.prototype;
        //    // onLoad () {}
        _proto.start = function start() {}
        //    // update (dt) {}
        //    // public SetData(totalTime: number, points: { x: number, y: number }[]) {
        //    //     this._points = points;
        //    //     this._totalTime = totalTime;
        //    //     this._runTime = 0;
        //    //     this._progress = 0;
        //    //     // this.FlushPath();
        //    // }
        //    // protected FlushPath() {
        //    //     this._steps = [];
        //    //     for (let i = 1; i < this._points.length; ++i) {
        //    //         let pts = this._points[i-1];
        //    //         let pte = this._points[i];
        //    //     }
        //    // }
        ;

        _createClass(FishPathCtrl, [{
          key: "finished",
          get:
          //    //! 是否处于激活状态
          //    // private _alive: boolean = false;
          function get() {
            return this._progress >= 1 || this._runTime >= this._totalTime;
          }
        }, {
          key: "progress",
          get: function get() {
            return this._progress;
          },
          set: function set(value) {
            this._progress = value;
          }
        }, {
          key: "runtime",
          get: function get() {
            return this._runTime;
          },
          set: function set(value) {
            this._runTime = value;
          }
        }]);
        return FishPathCtrl;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_debug", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishPlayerMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './AutoEventNode.ts', './GUtil.ts', './DataManager.ts', './FishDataMgr.ts', './FishDef.ts', './UIFishPlayer.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, find, Vec2, i18n, AutoEventNode, GUtil, DataManager, UserKey, FishDataMgr, FishDef, UIFishPlayer, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      find = module.find;
      Vec2 = module.Vec2;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      UIFishPlayer = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "b4079TbkutFf5eZgZa00D7z", "FishPlayerMgr", undefined);
      var ccclass = _decorator.ccclass;
      var FishPlayerMgr = exports('default', (_dec = ccclass("FishPlayerMgr"), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishPlayerMgr, _AutoEventNode);
        function FishPlayerMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _this._players = null;
          //    // LIFE-CYCLE CALLBACKS:
          _this._holder = null;
          return _this;
        }
        var _proto = FishPlayerMgr.prototype;
        _proto.getPlayerNode = function getPlayerNode(uid) {
          if (!this._players) {
            return null;
          }
          for (var _iterator = _createForOfIteratorHelperLoose(this._players), _step; !(_step = _iterator()).done;) {
            var uiFishPlayer = _step.value;
            if (uiFishPlayer._player && uiFishPlayer._player.uid === uid) {
              return uiFishPlayer;
            }
          }
          return null;
        };
        _proto.resetSeat = function resetSeat() {
          for (var i = 0; i < 4; i++) {
            var uiFishPlayer = find("player_" + i, this.node).getComponent(UIFishPlayer);
            if (uiFishPlayer && uiFishPlayer._player) {
              FishDataMgr.DelPlayer(uiFishPlayer._player.uid);
              uiFishPlayer.SetData(null);
            }
          }
        };
        _proto.UpdateCoinPos = function UpdateCoinPos(node, idx) {
          var nd_coin = find("playing/flip_node/head/bg_coin/icon_coin", node);
          var coin_pos = nd_coin ? GUtil.Pos_L2W_V2(nd_coin) : Vec2.ZERO;
          FishDataMgr.ins.SetCoinPos(idx, coin_pos);
          //        // gts.Debug.Log(`# 金币位置[${FishDataMgr.myUid}]: ${idx}, ${JSON.stringify(coin_pos)}`);
        };

        _proto.Init = function Init(holder) {
          this._holder = holder;
          var arr = this.players;
          for (var i = 0; i < arr.length; ++i) {
            var tmp = arr[i];
            tmp.resHolder = holder;
          }
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          FishPlayerMgr._ins = this;
          this.OnEvent(FishDef.Event.ON_FISH_CATCH_NOMAL, function (data) {
            gts.Debug.Log("---OnEvent----COINS_BOOM---fishPlayerMgr-");
            var odds = data.odds;
            var num = FishDef.Util.GetNumByOdds(odds);
            _this2.getPlayerNode(data.msg.uid).OnCatchFish_nomal(data.msg, data.pos, num, data.fishType);
          });
          this.OnEvent(FishDef.Event.ON_FISH_CATCH_BIG, function (data) {
            gts.Debug.Log("---OnEvent----COINS_BOOM---fishPlayerMgr-");
            _this2.getPlayerNode(data.msg.uid).OnCatchFish_big(data);
          });
          this.OnEvent(FishDef.Event.ON_FISH_CATCH_SPECIAL, function (data) {
            gts.Debug.Log("---OnEvent----COINS_BOOM---fishPlayerMgr-");
            var odds = data.odds;
            var num = FishDef.Util.GetNumByOdds(odds);
            _this2.getPlayerNode(data.msg.uid).OnCatchFish_special(data.msg, data.pos, num, data.fishType);
          });
          this.OnEvent(FishDef.Event.SET_PLAYER_INFO, function (data) {
            FishDataMgr.SetPlayer(data.info);
            _this2.setInfo(data.info);
          });
          this.OnEvent(FishDef.Event.RESET_PLAYER_INFO, function () {
            _this2.resetSeat();
          });
          this.OnEvent(FishDef.Event.UPDATE_PLAYER_GOLD, function (seatid) {
            var data = FishDataMgr.PlayerWithSeat(seatid);
            _this2.updateHoldGold(data.seat);
          });
          this.OnEvent(FishDef.Event.UPDATE_UI_ROTATE, function () {
            for (var i = 0; i < _this2.players.length; ++i) {
              _this2.UpdateCoinPos(_this2.players[i].node, i);
            }
            _this2.EmitEvent(FishDef.Event.COIN_POS_FLUSHED);
          });

          //        //msg
          this.OnEvent(FishDef.MsgID.S2C_PLAYER_ENTER, function (reMsg) {
            var msg = reMsg.Data;
            //            //! 自己的消息不处理
            if (msg.uid === FishDataMgr.myUid) {
              return;
            }
            msg.head = msg.head || msg.headId;
            gts.Debug.Log("===玩家进入===S2C_PLAYER_ENTER===data===" + JSON.stringify(reMsg));

            //            //由于服务端可能没有通知 断线离开的玩家  此处判断先删除再添加
            var comPlayer = _this2.getPlayerNode(msg.uid);
            if (comPlayer) {
              FishDataMgr.DelPlayer(msg.uid);
              comPlayer.SetData(null);
            }

            //            //! 如果玩家数据中没有炮塔类型，则给最基础的炮塔类型
            if (!msg.cannonType) {
              msg.cannonType = FishDef.MIN_CANNON_TYPE;
            }
            FishDataMgr.SetPlayer(msg);
            _this2.setInfo(msg);
            _this2.scheduleOnce(function () {
              _this2.EmitEvent(FishDef.Event.UPDATE_UI_ROTATE);
            }, 0.1);
          });
          this.OnEvent(FishDef.MsgID.HD_changeSkillStatus, function (reMsg) {
            var msg = reMsg.Data;
            //            //! 自己的消息不处理
            if (reMsg.Code != 0 || msg.uid === FishDataMgr.myUid) {
              return;
            }
            var comPlayer = _this2.getPlayerNode(msg.uid);
            if (comPlayer) {
              comPlayer.setSkillStatus(msg.status);
            }
          });

          //        //! 通知玩家离开
          this.OnEvent(FishDef.MsgID.S2C_PLAYER_LEAVE, function (reData) {
            var msg = reData.Data;
            gts.Debug.LogWarr("=通知玩家离开=S2C_PLAYER_LEAVE.seat===" + JSON.stringify(msg));
            gts.Debug.LogWarr("=通知玩家离开=myUid===" + FishDataMgr.myUid);
            if (msg.uid === FishDataMgr.myUid) {
              _this2.EmitEvent(FishDef.Event.EXIT_GAME);
            } else {
              var comPlayer = _this2.getPlayerNode(msg.uid);
              if (comPlayer) {
                FishDataMgr.DelPlayer(msg.uid);
                comPlayer.SetData(null);
              }
            }
          });

          //        //msg 广播--收到其他玩家-福袋开启
          this.OnEvent(FishDef.MsgID.S2C_REDPACKET_OPEN, function (reMsg) {
            if (reMsg.Code != 0) {
              Common.showTip(i18n.errTip(reMsg.Code));
              return;
            }
            var msg = reMsg.Data;
            //            //! 自己的消息不处理
            if (msg.uid === FishDataMgr.myUid) {
              return;
            }

            //            //显示其他玩家福袋奖励
            var comPlayer = _this2.getPlayerNode(msg.uid);
            if (comPlayer) {
              comPlayer.showRedPacketReward(msg.rewardNum);
            }
          });

          //        //msg 广播--收到雷霆信息
          this.OnEvent(FishDef.MsgID.S2C_LEITING_KILLFISH, function (reMsg) {
            if (reMsg.Code != 0) {
              //                // showTip(i18n.errTip(reMsg.Code));
              return;
            }
            var msg = reMsg.Data;
            var comPlayer = _this2.getPlayerNode(msg.uid);
            if (comPlayer) {
              comPlayer.updateLeitingBullets(msg.leiTingBulletCount, msg.LastSecond);
            }
          });
          this.OnEvent(FishDef.MsgID.HD_changeGolds, function (reMsg) {
            if (reMsg.Code != 0) {
              //                // showTip(i18n.errTip(reMsg.Code));
              return;
            }
            gts.Debug.LogWarr("=HD_changeGolds=HD_changeGolds===" + JSON.stringify(reMsg));
            var msg = reMsg.Data;
            var comPlayer = _this2._players[FishDataMgr.myInfo.seat];
            comPlayer._player.income = msg.income;
            if (msg.golds != comPlayer._player.golds) {
              _this2.EmitEvent(FishDef.Event.ON_PUSH_WALLET, msg.golds, false);
              _this2.EmitEvent(FishDef.Event.ON_PUSH_INCOME, msg.income);
            }
            if (msg.wallet != 0) {
              comPlayer._player.wallet = msg.wallet;
              DataManager.instance.setUserDataForKey(UserKey.GOLD, msg.wallet);
              _this2.EmitEvent(FishDef.Event.ON_PUSH_TOTALWALLET, msg.wallet);
            }
          });
        };
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          FishPlayerMgr._ins = null;
        };
        _proto.setInfo = function setInfo(info) {
          if (info.seat < 0) {
            return;
          }
          gts.Debug.LogWarr("=setInfo=myInfo.seat===" + FishDataMgr.myInfo.seat);
          gts.Debug.LogWarr("=setInfo=info.seat===" + info.seat);
          var comPlayer = this._players[info.seat];
          if (comPlayer) {
            comPlayer.SetData(info);
          }
        };
        _proto.updateHoldGold = function updateHoldGold(seat) {
          if (seat < 0) {
            return;
          }

          //        // gts.Debug.LogWarr("=updateHoldGold=seat===" + seat);

          var comPlayer = this._players[seat];
          if (comPlayer) {
            comPlayer.UpdateHoldGold();
          }
        };
        _createClass(FishPlayerMgr, [{
          key: "_nodePlayers",
          get: function get() {
            return this.node;
          }
        }, {
          key: "players",
          get: function get() {
            if (!this._players) {
              this._players = [];
              var idx = 0;
              var node = find("player_" + idx, this._nodePlayers);
              while (node) {
                var player = node.getComponent(UIFishPlayer);
                if (player) {
                  player.atIdx = idx;
                  var data = FishDataMgr.PlayerWithSeat(idx);
                  player.SetData(data);
                }
                this._players.push(player);
                this.UpdateCoinPos(node, idx);
                idx += 1;
                node = find("player_" + idx, this._nodePlayers);
              }

              //            // gts.Debug.Log(`玩家数量: ${this._players.length}`);
              this.EmitEvent(FishDef.Event.COIN_POS_FLUSHED);
            }
            return this._players;
          }
        }], [{
          key: "ins",
          get: function get() {
            return this._ins;
          }
        }]);
        return FishPlayerMgr;
      }(AutoEventNode), _class2._ins = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishSound.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AutoEventNode.ts', './SoundMgr.ts', './MainManager.ts', './FishDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, GameDef, AutoEventNode, SoundMgr, MainManager, FishDef;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      SoundMgr = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "0cb31T0aqVCw5F86/mNeNOO", "FishSound", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishSound = exports('default', (_dec = ccclass("FishSound"), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishSound, _AutoEventNode);
        function FishSound() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          //    // LIFE-CYCLE CALLBACKS:
          _this._sMgr = null;
          //    //! 最后播放的_bgmurl
          _this._lastBgmUrl = "";
          _this._bgmPlaying = false;
          return _this;
        }
        var _proto = FishSound.prototype;
        _proto.onLoad = function onLoad() {
          if (FishSound._ins) {
            gts.Debug.LogErr("# FishSound \u9519\u8BEF\uFF0C\u591A\u4E2A\u5B9E\u4F8B\u5BF9\u8C61");
          } else {
            FishSound._ins = this;
          }
          this._sMgr = SoundMgr.Alloc(GameDef.Game.FishGame);
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {
          _AutoEventNode.prototype.onDestroy.call(this);
          this.StopSound(this._lastBgmUrl);
          var mMgr = MainManager.getInstance();
          var sMgr = mMgr ? mMgr.getAudioManager() : null;
          if (sMgr) {
            sMgr.stopAll();
            //            // sMgr.startBgMusic();
          }

          if (FishSound._ins === this) {
            FishSound._ins = null;
          }
        };
        FishSound.PlaySound = function PlaySound(name) {
          if (!FishSound._ins) {
            return;
          }
          FishSound._ins.PlaySound(name);
        };
        FishSound.PlayBGM = function PlayBGM(url) {
          if (!FishSound._ins) {
            return;
          }
          FishSound._ins.PlayBGM(url);
        };
        FishSound.StopBGM = function StopBGM() {
          if (!FishSound._ins) {
            return;
          }
          FishSound._ins.StopSound(FishSound._ins._lastBgmUrl);
          FishSound._ins._lastBgmUrl = "";
          FishSound._ins._bgmPlaying = false;
          //        // FishSound._ins._bgmPlaying = false;
        };

        _proto.PlayBGM = function PlayBGM(url) {
          if (this._bgmPlaying) {
            return;
          }
          if (url && url.length > 0) {
            if (this._lastBgmUrl !== url) {
              this.StopSound(this._lastBgmUrl);
            }
            this._lastBgmUrl = url;
          }
          if (this._lastBgmUrl.length === 0) {
            var idx = Math.floor(Math.random() * 1000) % 3;
            this._lastBgmUrl = "sound/main_bg" + idx;
          }
          FishDef.Util.soundMgr._Hallbg = false;
          FishDef.Util.soundMgr.playBgMusic(this._lastBgmUrl, FishDef.Util.bundle, true);
          // this._sMgr.PlaySound(this._lastBgmUrl, { bgm: true });

          this._bgmPlaying = !FishSound.bgmMute;
        };
        _proto.PlaySound = function PlaySound(url) {
          this._sMgr.PlaySound(url);
        };
        _proto.StopSound = function StopSound(url) {
          this._sMgr.StopSound(url);
        };
        _proto.OnMusicMuteChanged = function OnMusicMuteChanged() {
          if (FishSound.bgmMute) {
            this.StopSound(this._lastBgmUrl);
            this._bgmPlaying = false;
          } else {
            this.PlayBGM(null);
          }
        }
        //    // update (dt) {}
        ;

        _createClass(FishSound, null, [{
          key: "soundMute",
          get:
          //    /** 当前是否处于静音状态 */
          //    // protected _soundMute: boolean = false;
          //    /** 当前是否处于静音状态 */
          function get() {
            return FishDef.Util.soundMgr ? !FishDef.Util.soundMgr._soundEffect : true;
          }
          //    /** 当前是否处于静音状态 */
          ,

          set: function set(value) {
            if (FishDef.Util.soundMgr) {
              FishDef.Util.soundMgr.setSoundStatus(!value);
            }
          }
        }, {
          key: "bgmMute",
          get: function get() {
            return FishDef.Util.soundMgr ? !FishDef.Util.soundMgr._soundMusic : true;
          },
          set: function set(value) {
            if (FishDef.Util.soundMgr) {
              FishDef.Util.soundMgr.setMusicStatus(!value);
            }
            if (FishSound._ins) {
              FishSound._ins.OnMusicMuteChanged();
            }
          }
        }]);
        return FishSound;
      }(AutoEventNode), _class2._ins = null, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FishUIBtnSelRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './MainManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Label, instantiate, assetManager, Prefab, Component, GameDef, MainManager, Common;
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
      Sprite = module.Sprite;
      Label = module.Label;
      instantiate = module.instantiate;
      assetManager = module.assetManager;
      Prefab = module.Prefab;
      Component = module.Component;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "1fe623KDDtCg4F5rsYYa5Zy", "FishUIBtnSelRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishUIBtnSelRoom = exports('default', (_dec = ccclass("FishUIBtnSelRoom"), _dec2 = property(Node), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FishUIBtnSelRoom, _Component);
        function FishUIBtnSelRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "aniRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprCoinBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprCoin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprTitle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labCoinRange", _descriptor6, _assertThisInitialized(_this));
          _this._atIdx = -1;
          _this._info = null;
          _this._cbHnd = function () {};
          return _this;
        }
        var _proto = FishUIBtnSelRoom.prototype;
        _proto.SetData = function SetData(atlas, atIdx, aniPrefab, info, font) {
          this.SetSpr(this.sprCoin, atlas, "coin_range_" + atIdx);
          this.SetSpr(this.sprCoinBg, atlas, "coin_bg_" + atIdx);
          this.SetSpr(this.sprTitle, atlas, "title_" + atIdx);
          if (this.aniRoot) {
            if (aniPrefab) {
              var clone = instantiate(aniPrefab);
              clone.setParent(this.aniRoot);
            } else {
              this.LoadAniFromBundle(atIdx);
            }
          }
          this._atIdx = atIdx;
          this._info = info;
          var sRange = "";
          if (info) {
            if (info.coins_arr.length == 1) {
              sRange = Common.numFormat("" + info.coins_arr[0]); //`${info.coins_arr[0]}`
            } else {
              sRange = Common.numFormat("" + info.coins_arr[0]) + "-" + Common.numFormat("" + info.coins_arr[info.coins_arr.length - 1]); //`${info.coins_arr[0]}-${info.coins_arr[info.coins_arr.length - 1]}`;
            }
          }

          gts.UI.SetLab(this.labCoinRange, sRange, {
            font: font,
            color: null
          });
        };
        _proto.OnClick = function OnClick(cb, caller) {
          this._cbHnd = cb ? caller ? cb.bind(caller) : cb : function () {};
        };
        _proto.LoadAniFromBundle = function LoadAniFromBundle(atIdx) {
          var _this2 = this;
          var mgr = MainManager.getInstance();
          if (mgr) {
            var vmgr = mgr.getViewManager();
            if (vmgr) {
              var bundle = assetManager.getBundle(GameDef.Game.FishGame);
              if (bundle) {
                bundle.load("prefab/selRoomAni" + atIdx, Prefab, function (err, assets) {
                  if (assets) {
                    var cloneAni = instantiate(assets);
                    cloneAni.setParent(_this2.aniRoot);
                  }
                });
              } else {
                gts.Debug.LogErr("load bundle failed: " + GameDef.Game.FishGame);
              }
            }
          }
        };
        _proto.SetSpr = function SetSpr(spr, atlas, sprFrameName) {
          if (!spr || !atlas) {
            return;
          }
          var sprframe = atlas.getSpriteFrame(sprFrameName);
          spr.spriteFrame = sprframe;
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        _proto.start = function start() {
          var _this3 = this;
          gts.UI.OnClick(this.touchNode ? this.touchNode : this.node, function () {
            _this3._cbHnd(_this3);
          }, this);
        }
        //    // update (dt) {}
        ;

        _createClass(FishUIBtnSelRoom, [{
          key: "info",
          get: function get() {
            return this._info;
          }
        }]);
        return FishUIBtnSelRoom;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "aniRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprCoinBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprCoin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sprTitle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "touchNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "labCoinRange", [_dec7], {
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

System.register("chunks:///_virtual/FishUISelRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './Common.ts', './FishSound.ts', './FishDef.ts', './FishUIBtnSelRoom.ts', './MainManager.ts', './I18n.ts', './DataManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteAtlas, Prefab, Font, Label, SpriteFrame, Sprite, instantiate, find, v3, AutoEventNode, Common, FishSound, FishDef, FishUIBtnSelRoom, MainManager, i18n, DataManager, UserKey;
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
      SpriteAtlas = module.SpriteAtlas;
      Prefab = module.Prefab;
      Font = module.Font;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      instantiate = module.instantiate;
      find = module.find;
      v3 = module.v3;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishUIBtnSelRoom = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "8fd8c7r1rJNT6sKErffm0Qw", "FishUISelRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishUISelRoom = exports('default', (_dec = ccclass("FishUISelRoom"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteAtlas), _dec5 = property([Prefab]), _dec6 = property([Font]), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(SpriteFrame), _dec12 = property(Node), _dec13 = property(SpriteFrame), _dec14 = property(Sprite), _dec15 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishUISelRoom, _AutoEventNode);
        function FishUISelRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "copyObj", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "useAtlas", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "aniPrefabs", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lvFonts", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHome", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labCoin", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHelper", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSound", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprSoundMute", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMusic", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprMusicMute", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprHead", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nickName", _descriptor14, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    // onLoad () {}
          _this.sprSoundNor = null;
          _this.sprMusicNor = null;
          return _this;
        }
        var _proto = FishUISelRoom.prototype;
        _proto.UpdateBtnFrame = function UpdateBtnFrame(btnNode, value, frames) {
          var spr = btnNode ? btnNode.getComponent(Sprite) : null;
          if (spr) {
            spr.spriteFrame = value ? frames.mute : frames.nor;
          }
        };
        _proto.GetSprframe = function GetSprframe(node) {
          var spr = node ? node.getComponent(Sprite) : null;
          return spr ? spr.spriteFrame : null;
        };
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.OnEvent(MainManager.getInstance()._configManager.protocolHall.getWallet, function (data) {
            DataManager.instance.setUserDataForKey(UserKey.GOLD, data.Data.wallet.VndBalance);
            var coin = DataManager.instance.getUserDataForKey(UserKey.GOLD) + "";
            //            // gts.UI.SetLab(this.labCoin, Common.numFormat(coin));
            gts.UI.SetLab(_this2.labCoin, Common.ChangeMoneyShow(parseFloat(coin), 2));
            gts.Debug.Log("protocolHall.getWallet==" + JSON.stringify(data));
            _this2.EmitEvent(FishDef.Event.ON_PUSH_WALLET, data.Data.wallet.VndBalance);
          });
          this.OnEvent(MainManager.getInstance()._configManager.protocolHall.pushWallet, function (data) {
            DataManager.instance.setUserDataForKey(UserKey.GOLD, data.Wallet.VndBalance);
            var coin = DataManager.instance.getUserDataForKey(UserKey.GOLD) + "";
            //            // gts.UI.SetLab(this.labCoin, Common.numFormat(coin));
            gts.UI.SetLab(_this2.labCoin, Common.ChangeMoneyShow(parseFloat(coin), 2));
            gts.Debug.Log("protocolHall.pushWallet==" + JSON.stringify(data));
            _this2.EmitEvent(FishDef.Event.ON_PUSH_WALLET, data.Wallet.VndBalance);
          });
        };
        _proto.onDisable = function onDisable() {
          this.offEvent(MainManager.getInstance()._configManager.protocolHall.getWallet);
          this.offEvent(MainManager.getInstance()._configManager.protocolHall.pushWallet);
        };
        _proto.start = function start() {
          var _this3 = this;
          FishSound.StopBGM();
          FishSound.PlayBGM(FishDef.Sound.BGM_SEL);
          this.sprSoundNor = this.GetSprframe(this.btnSound);
          this.sprMusicNor = this.GetSprframe(this.btnMusic);
          this.CopyButtons();
          gts.UI.OnClick(this.btnHome, function () {
            //                // gts.Debug.Log(`on clicked home`);
            console.time("bundle.onLoadHall");
            Common.showWait();
            //        //退到大厅
            Common.returnToHall(_this3, "FishGame");
          }, this, 1);
          gts.UI.OnClick(this.btnSound, function () {
            FishSound.soundMute = !FishSound.soundMute;
            _this3.UpdateBtnFrame(_this3.btnSound, FishSound.soundMute, {
              nor: _this3.sprSoundNor,
              mute: _this3.sprSoundMute
            });
          }, this);
          gts.UI.OnClick(this.btnMusic, function () {
            FishSound.bgmMute = !FishSound.bgmMute;
            _this3.UpdateBtnFrame(_this3.btnMusic, FishSound.bgmMute, {
              nor: _this3.sprMusicNor,
              mute: _this3.sprMusicMute
            });
          }, this);
          gts.UI.OnClick(this.btnHelper, function () {
            _this3.EmitEvent(FishDef.Event.OPEN_HELPER);
          }, this);
          var coin = Number(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          var sCoin = Common.ChangeMoneyShow(coin, 2);
          gts.UI.SetLab(this.labCoin, "" + sCoin);

          //        //头像
          var headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(headiconName, this.sprHead.node);
          //        //昵称
          Common.nickNameFormatL(this.nickName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          if (grade) {
            var Sprite_level = this.nickName.node.parent.getChildByName("Sprite_level");
            Common.setGradeCode(Sprite_level, parseInt(grade));
          }
          this.UpdateSoundBtnFrame();
        };
        _proto.CopyButtons = function CopyButtons() {
          var _this4 = this;
          if (this.copyObj && this.btnParent) {
            this.copyObj.active = false;
            for (var i = 0; i < FishDef.Data.Rooms.length; ++i) {
              var data = FishDef.Data.Rooms[i];
              var tmp = instantiate(this.copyObj);
              tmp.active = true;
              tmp.parent = find("room_" + i, this.btnParent);
              tmp.setPosition(v3(0, 0, 0));
              var btnRoom = tmp.getComponent(FishUIBtnSelRoom);
              if (btnRoom) {
                var aniPrefab = i < this.aniPrefabs.length ? this.aniPrefabs[i] : null;
                btnRoom.SetData(this.useAtlas, i, aniPrefab, data, this.lvFonts[i]);
                btnRoom.OnClick(function (btn) {
                  //                        // gts.Debug.Log(`点击按钮：${btn.info.name}`);
                  var gold = Number(DataManager.instance.getUserDataForKey(UserKey.GOLD));
                  var info = btn.info;
                  if (gold < info.coins_arr[0]) {
                    Common.showTip(i18n.errTip(30003));
                    return;
                  }
                  _this4.EmitEvent(FishDef.Event.SELECT_ROOM, btn.info);
                  FishSound.PlaySound(FishDef.Sound.BGM_SEL_ENTER);
                }, this);
              }
            }
          }
        };
        _proto.UpdateSoundBtnFrame = function UpdateSoundBtnFrame() {
          this.UpdateBtnFrame(this.btnSound, FishSound.soundMute, {
            nor: this.sprSoundNor,
            mute: this.sprSoundMute
          });
          this.UpdateBtnFrame(this.btnMusic, FishSound.bgmMute, {
            nor: this.sprMusicNor,
            mute: this.sprMusicMute
          });
          MainManager.getInstance()._netManager.sendOnlineData(MainManager.getInstance()._configManager.protocolHall.getWallet, {});
        }
        //    // update (dt) {}
        ;

        return FishUISelRoom;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "copyObj", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "useAtlas", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "aniPrefabs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lvFonts", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnHome", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "labCoin", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnHelper", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "btnSound", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundMute", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btnMusic", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "sprMusicMute", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sprHead", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "nickName", [_dec15], {
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

System.register("chunks:///_virtual/FishWheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishSound.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, sp, UIOpacity, v3, tween, find, isValid, Label, Tween, UITransform, AutoEventNode, GUtil, FishDataMgr, FishDef, FishSound;
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
      v3 = module.v3;
      tween = module.tween;
      find = module.find;
      isValid = module.isValid;
      Label = module.Label;
      Tween = module.Tween;
      UITransform = module.UITransform;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishSound = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "af253m5jqlBW6OS78p//Ex8", "FishWheel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FishWheel = exports('default', (_dec = ccclass("FishWheel"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(FishWheel, _AutoEventNode);
        function FishWheel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_circle1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_circle2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_circle3", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_cursor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star_spine", _descriptor5, _assertThisInitialized(_this));
          _this._currPos = 0;
          _this._currCirle = 0;
          //0外盘 1中盘 2内盘
          _this._tipParent = void 0;
          _this._autoEvent = null;
          return _this;
        }
        var _proto = FishWheel.prototype;
        //    // onLoad () {}
        _proto.start = function start() {
          var _this2 = this;
          //        //! 玩家离开--清理钻头弹
          this.OnEvent(FishDef.MsgID.S2C_PLAYER_LEAVE, function (reData) {
            var msg = reData.Data;
            _this2.closeAni(msg);
          });
        };
        _proto.initData = function initData(pos, msg, isMyself, tipParent) {
          var _this3 = this;
          this._tipParent = tipParent;

          //        //初始化轮盘
          if (msg.lunZhou) {
            if (msg.lunZhou.firstArr) {
              this.initCircle(this.node_circle1, msg.lunZhou.firstArr, 0, msg.lunZhou.selectReward);
            }
            if (msg.lunZhou.secondArr) {
              this.initCircle(this.node_circle2, msg.lunZhou.secondArr, 1, msg.lunZhou.selectReward);
            }
            if (msg.lunZhou.thirdArr) {
              this.initCircle(this.node_circle3, msg.lunZhou.thirdArr, 2, msg.lunZhou.selectReward);
            }
          }
          FishSound.PlaySound(FishDef.Sound.DRILL_INTRO);
          this.node.getComponent(UIOpacity).opacity = 0;
          var scale = this.node.scale;
          this.node.scale = v3(scale.x * 0.1, scale.y * 0.1, 1);

          //展示动画
          //淡入+放大--回缩-停留
          tween(this.node.getComponent(UIOpacity)).to(0.5, {
            opacity: 255
          }, {
            easing: "quadOut"
          }).start();
          tween(this.node).to(0.5, {
            scale: v3(1.7, 1.7, 1.7)
          }, {
            easing: "quadOut"
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }, {
            easing: "quadOut"
          }).to(0.3, {
            scale: v3(1.5, 1.5, 1.5)
          }, {
            easing: "quadOut"
          }).delay(1.0).parallel(tween(this.node).to(0.5, {
            scale: v3(1.3, 1.3, 1.3)
          }, {
            easing: "quadOut"
          }), tween(this.node).to(0.5, {
            position: v3(pos.x, pos.y, 0)
          }, {
            easing: "quadOut"
          })).delay(0.5).call(function () {
            _this3.starAni(msg);
          }).start();
        };
        _proto.initCircle = function initCircle(circle, circleData, currCirle, selectReward) {
          for (var i = 0; i < circleData.length; i++) {
            var temp = find("lbl_reward" + (i + 1), circle);
            if (!isValid(temp)) continue;
            var lbl_reward = temp.getComponent(Label);
            if (circleData[i]) {
              lbl_reward.string = "\xD7" + circleData[i];
              if (selectReward == circleData[i]) {
                this._currPos = i;
                this._currCirle = currCirle;
              }
            }
          }
        };
        _proto.starAni = function starAni(msg) {
          var _this4 = this;
          FishSound.PlaySound(FishDef.Sound.DRILL_SCRAP);
          this.star_spine.node.active = true;
          this.star_spine.setAnimation(0, "pan", false);
          this.star_spine.setCompleteListener(function () {
            _this4.star_spine.setCompleteListener(null);
            _this4.rollWheel(msg);
            _this4.star_spine.node.active = false;
          });
        };
        _proto.rollWheel = function rollWheel(msg) {
          var _this5 = this;
          this.node_cursor.setAnimation(0, "da", true);
          this.node_circle1.angle = 0;
          Tween.stopAllByTarget(this.node_circle1);
          var offset_angle1 = this._currCirle == 0 ? 360 / 8 / 2 + this._currPos * 90 : -360 / 8 / 2;
          var angle_circle1 = 360 * 3 - offset_angle1;
          FishSound.PlaySound(FishDef.Sound.FIRESTORM_START);
          tween(this.node_circle1).delay(1.5).to(0.5, {
            angle: -angle_circle1
          }, {
            easing: "quadOut"
          }).delay(0.5).call(function () {
            var node_selectSpine1 = find("node_selectSpine", _this5.node_circle1);
            node_selectSpine1.angle = angle_circle1;
            var selectSpine1 = node_selectSpine1.getComponent(sp.Skeleton);
            if (_this5._currCirle == 0) {
              selectSpine1.setAnimation(0, "pange_jian", false);
              _this5.closeAni(msg);
              _this5.recoveryCoin(msg);
            } else {
              selectSpine1.setAnimation(0, "pange_jian", false);
              selectSpine1.setCompleteListener(function () {
                selectSpine1.setCompleteListener(null);
                _this5.node_cursor.setAnimation(0, "zhong_enter", false);
                _this5.node_cursor.addAnimation(0, "zhong_wait", true);
                _this5.node_circle2.angle = 0;
                Tween.stopAllByTarget(_this5.node_circle2);
                var add_angle = 0;
                if (_this5._currPos > 1) add_angle = 60;
                var offset_angle2 = _this5._currCirle == 1 ? _this5._currPos * 60 + add_angle : 120;
                var angle_circle2 = 360 * 2 + offset_angle2;
                FishSound.PlaySound(FishDef.Sound.FIRESTORM_START);
                tween(_this5.node_circle2).delay(1.5).to(0.5, {
                  angle: -angle_circle2
                }, {
                  easing: "quadOut"
                }).delay(0.5).call(function () {
                  var node_selectSpine2 = find("node_selectSpine", _this5.node_circle2);
                  node_selectSpine2.angle = angle_circle2;
                  var selectSpine2 = node_selectSpine2.getComponent(sp.Skeleton);
                  if (_this5._currCirle == 1) {
                    selectSpine2.setAnimation(0, "pange_jian", false);
                    _this5.closeAni(msg);
                    _this5.recoveryCoin(msg);
                  } else {
                    selectSpine2.setAnimation(0, "pange_jian", false);
                    selectSpine2.setCompleteListener(function () {
                      selectSpine2.setCompleteListener(null);
                      _this5.node_cursor.setAnimation(0, "xiao_enter", false);
                      _this5.node_cursor.addAnimation(0, "xiao_wait", true);
                      _this5.node_circle3.angle = 0;
                      Tween.stopAllByTarget(_this5.node_circle3);
                      var angle_circle3 = 360 * 2 + 360 / 3 / 2 + _this5._currPos * 120;
                      FishSound.PlaySound(FishDef.Sound.FIRESTORM_START);
                      tween(_this5.node_circle3).delay(1.5).to(0.5, {
                        angle: -angle_circle3
                      }, {
                        easing: "quadOut"
                      }).delay(0.5).call(function () {
                        var node_selectSpine3 = find("node_selectSpine", _this5.node_circle3);
                        node_selectSpine3.angle = angle_circle3;
                        var selectSpine3 = node_selectSpine3.getComponent(sp.Skeleton);
                        selectSpine3.setAnimation(0, "pange_jian", false);
                        _this5.closeAni(msg);
                        _this5.recoveryCoin(msg);
                      }).start();
                    });
                  }
                }).start();
              });
            }
          }).start();
        };
        _proto.recoveryCoin = function recoveryCoin(msg) {
          var _this6 = this;
          var pos = GUtil.Pos_L2W_V2(this.node);
          var odds = msg.rewardGolds;
          var toPosW = null;
          var onCoinRecycled = null;
          var Node_specialTip = this._tipParent.getChildByName("Node_specialTip" + msg.uid);
          if (Node_specialTip) {
            toPosW = Node_specialTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            onCoinRecycled = function onCoinRecycled() {
              var rewardGolds = msg.rewardGolds;
              _this6.autoEvent.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + msg.uid, [rewardGolds, FishDataMgr.getKillType(FishDef.FishType.lunZhouXie)]);
            };
          }
          var data = {
            msg: msg,
            pos: pos,
            odds: odds,
            toPos: toPosW,
            onCoinRecycled: onCoinRecycled
          };
          this.autoEvent.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
        };
        _proto.closeAni = function closeAni(msg) {
          if (msg.uid == FishDataMgr.myUid) {
            this.autoEvent.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
          }

          //展示动画
          tween(this.node).delay(1.5).to(0.5, {
            scale: v3(1.5, 1.5, 1.5)
          }, {
            easing: "quadOut"
          }).to(0.2, {
            scale: v3(1, 1, 1)
          }, {
            easing: "quadOut"
          }).to(0.3, {
            scale: v3(1.3, 1.3, 1.3)
          }, {
            easing: "quadOut"
          }).to(0.15, {
            scale: v3(0, 0, 0)
          }, {
            easing: "quadOut"
          }).removeSelf().start();
        };
        _createClass(FishWheel, [{
          key: "autoEvent",
          get: function get() {
            if (!this._autoEvent) {
              this._autoEvent = AutoEventNode.BindNode(this.node);
            }
            return this._autoEvent;
          }
        }]);
        return FishWheel;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_circle1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_circle2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_circle3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_cursor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "star_spine", [_dec6], {
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

System.register("chunks:///_virtual/NodeSizeListener.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "bd9dc7fArhBYK51hXjClqxN", "NodeSizeListener", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu;
      var NodeSizeListener = exports('default', (_dec = ccclass("NodeSizeListener"), _dec2 = menu("game/FishExt/NodeSizeListener"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(NodeSizeListener, _Component);
        function NodeSizeListener() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // update (dt) {}
          _this._notify = null;
          _this._caller = null;
          return _this;
        }
        var _proto = NodeSizeListener.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          this.node.on(Node.EventType.SIZE_CHANGED, function () {
            //                // gts.Debug.Log(`on size changed`);
            if (_this2._notify) {
              _this2._notify.call(_this2._caller, _this2);
            }
          }, this);
        };
        _proto.start = function start() {};
        _proto.OnSizeChanged = function OnSizeChanged(notify, caller) {
          this._notify = notify;
          this._caller = caller;
        };
        NodeSizeListener.OnNodeSizeChanged = function OnNodeSizeChanged(node, notify, caller) {
          if (!node) {
            return null;
          }
          var nsl = node.getComponent(NodeSizeListener);
          if (!nsl) {
            nsl = node.addComponent(NodeSizeListener);
          }
          nsl.OnSizeChanged(notify, caller);
          return nsl;
        };
        return NodeSizeListener;
      }(Component)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PathSys.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, v2;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v2 = module.v2;
    }],
    execute: function () {
      exports('FishPath', void 0);
      cclegacy._RF.push({}, "fb4c8IhuVFDjrXFHW/CALbP", "PathSys", undefined);
      var FishPath;
      (function (_FishPath) {
        var OutStepInfo = /*#__PURE__*/function () {
          function OutStepInfo(x, y, idx) {
            if (x === void 0) {
              x = 0;
            }
            if (y === void 0) {
              y = 0;
            }
            if (idx === void 0) {
              idx = 0;
            }
            this._x = 0;
            this._y = 0;
            this._idx = 0;
            this._angle = 0;
            this._v2 = v2(0);
            this._x = x;
            this._y = y;
            this._idx = idx;
          }
          var _proto = OutStepInfo.prototype;
          _proto.SetX = function SetX(x) {
            this._x = x;
          };
          _proto.SetY = function SetY(y) {
            this._y = y;
          };
          _proto.SetIdx = function SetIdx(idx) {
            this._idx = idx;
          };
          _proto.SetAngle = function SetAngle(angle) {
            this._angle = angle;
          };
          _createClass(OutStepInfo, [{
            key: "x",
            get: function get() {
              return this._x;
            }
          }, {
            key: "y",
            get: function get() {
              return this._y;
            }
          }, {
            key: "idx",
            get: function get() {
              return this._idx;
            }
          }, {
            key: "angle",
            get: function get() {
              return this._angle;
            }
          }, {
            key: "v2",
            get: function get() {
              this._v2.x = this.x;
              this._v2.y = this.y;
              return this._v2;
            }
          }]);
          return OutStepInfo;
        }();
        _FishPath.OutStepInfo = OutStepInfo;
        var StepData = /*#__PURE__*/function () {
          function StepData(pts, pte, diss, dise) {
            this._pts = null;
            this._pte = null;
            this._diss = 0;
            this._dise = 0;
            this._progs = 0;
            this._proge = 0;
            this._atIndex = -1;
            this._pts = pts;
            this._pte = pte;
            this._diss = diss;
            this._dise = dise;
          }
          var _proto2 = StepData.prototype;
          _proto2.GetPosWithGlobalProgress = function GetPosWithGlobalProgress(progress, outInfo) {
            var local = this.GlobalProgressToLoacal(progress);
            this.GetPosWithLocalProgress(local, outInfo);
          };
          _proto2.GetPosWithLocalProgress = function GetPosWithLocalProgress(progress, outInfo) {
            var errx = this._pte.x - this._pts.x;
            var erry = this._pte.y - this._pts.y;
            outInfo.SetX(this._pts.x + errx * progress);
            outInfo.SetY(this._pts.y + erry * progress);
          };
          _proto2.GlobalProgressToLoacal = function GlobalProgressToLoacal(progress) {
            if (progress <= this._progs) {
              return 0;
            } else if (progress >= this._proge) {
              return 1;
            } else {
              var err = this._proge - this.progs;
              var tmp = progress - this._progs;
              var localProgress = tmp / err;
              return localProgress;
            }
          };
          _createClass(StepData, [{
            key: "progs",
            get: function get() {
              return this._progs;
            }
          }, {
            key: "proge",
            get: function get() {
              return this._proge;
            }
          }, {
            key: "atIndex",
            set: function set(idx) {
              this._atIndex = idx;
            }
          }, {
            key: "totalDistance",
            set: function set(dis) {
              this._progs = this._diss / dis;
              this._proge = this._dise / dis;
              if (this.atIndex === 0 && this._progs > 0) {
                gts.Debug.LogWarr("# \u9519\u8BEF\u7684\u7D22\u5F15\u8D77\u59CB");
              }
              //            // gts.Debug.LogFormat("index:{2}, progs:{0} -> proge:{1}", this._progs, this._proge, this._atIndex);
            }
          }]);

          return StepData;
        }();
        _FishPath.StepData = StepData;
        var LineData = /*#__PURE__*/function () {
          LineData.Alloc = function Alloc() {
            var data = new LineData();
            data._id = this._globalId + 1;
            this._globalId += 1;
            return data;
          };
          var _proto3 = LineData.prototype;
          _proto3.Distance = function Distance(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
          }
          //        // private _line: Config.Line = null;
          ;

          function LineData() {
            this._points = new Array();
            this._distance = 0;
            this._steps = new Array();
            this._id = 0;
            this._onFinishedNotify = function () {};
            this._totalTime = 0;
            this._runTime = 0;
            this.outInfo = new OutStepInfo();
            this._finished = false;
            this._active = false;
            this._startIndex = 0;
            this._distance = 0;
          }
          _proto3.OnFinishedNotify = function OnFinishedNotify(onFinished, caller) {
            this._onFinishedNotify = onFinished ? caller ? onFinished.bind(caller) : onFinished : function () {};
            return this;
          };
          _proto3.SetPoints = function SetPoints(points, params) {
            this._points = [];
            if (params && params.offset && params.scale) {
              var offset = params.offset;
              var scalePt = params.scale;
              for (var i = 0; i < points.length; ++i) {
                var tmpPt = points[i];
                var pt = {
                  x: (tmpPt.x + offset.x) * scalePt.x,
                  y: (tmpPt.y + offset.y) * scalePt.y
                };
                this._points.push(pt);
              }
            } else {
              for (var _i = 0; _i < points.length; ++_i) {
                this._points.push(points[_i]);
              }
            }
            this.FlushPath();
          };
          _proto3.SetData = function SetData(points, totalTime, fixInfo) {
            this._totalTime = totalTime;
            this._finished = false;
            this._runTime = 0;
            this._startIndex = 0;
            this.SetPoints(points, fixInfo);
            //            // let spd = this._distance / totalTime;
            //            // this.moveTimeMS(spd);
            this.PosWithProgress(0);
            return this;
          }
          //        // public Clear() {
          //        //     this._totalTime = 0;
          //        //     this._runTime = 0;
          //        //     this._points.splice(0, this._points.length);
          //        //     this._steps.splice(0, this._steps.length);
          //        // }
          ;

          _proto3.AddRunTime = function AddRunTime(addTime) {
            this._runTime += addTime;
            return this;
          };
          _proto3.FlushPath = function FlushPath() {
            this._steps = [];
            this._distance = 0;
            for (var i = 1; i < this._points.length; ++i) {
              var pt1 = this._points[i - 1];
              var pt2 = this._points[i];
              var oldDis = this._distance;
              var dis = this.Distance(pt1.x, pt1.y, pt2.x, pt2.y);
              this._distance += dis;
              var stepData = new StepData(pt1, pt2, oldDis, this._distance);
              this._steps.push(stepData);
            }
            for (var _i2 = 0; _i2 < this._steps.length; ++_i2) {
              this._steps[_i2].atIndex = _i2;
              this._steps[_i2].totalDistance = this._distance;
            }
          };
          _proto3.moveTimeMS = function moveTimeMS(spd) {
            var timems = this._distance / spd;
            timems *= 1000;
            return timems;
          };
          _proto3.LookAt = function LookAt(curPt, nextPt) {
            if (!curPt || !nextPt || undefined === curPt.y || undefined === nextPt.y) {
              gts.Debug.Log("# undefine");
            }
            var angle = Math.atan2(curPt.y - nextPt.y, curPt.x - nextPt.x);
            var theta = angle * (180 / Math.PI);
            return theta;
          };
          _proto3.PosWithProgress = function PosWithProgress(progress, startIdx) {
            if (progress < 0) {
              progress = 0;
            } else if (progress > 1) {
              progress = 1;
            }
            var idx = 0;
            if (this._points.length === 2) {
              idx = 0;
            } else {
              idx = this.CheckStep(progress);
            }
            var data = this._steps[idx];
            data.GetPosWithGlobalProgress(progress, this.outInfo);

            //            // gts.Debug.Log(`#linedata: idx = ${idx}`);
            //            //Debug.LogFormat("progress:{2}, outx: {0}, outy: {1}", outInfo.x, outInfo.y, progress);
            if (idx < this._points.length - 1) {
              var angle = this.LookAt(this._points[idx], this._points[idx + 1]);
              this.outInfo.SetAngle(angle);
            }
            return this.outInfo;
          };
          _proto3.Update = function Update(dt, startIdx) {
            if (startIdx === void 0) {
              startIdx = 0;
            }
            if (this._finished || !this._active) {
              return;
            }
            this._runTime += dt * 1000;
            if (this._runTime >= this._totalTime) {
              this._runTime = this._totalTime;
              this._finished = true;
              this._onFinishedNotify(this);
            }
            var progress = this._runTime / this._totalTime;
            this.PosWithProgress(progress, startIdx);
          };
          //        //! 检查步骤
          _proto3.CheckStep = function CheckStep(progress, startIdx) {
            if (startIdx === void 0) {
              startIdx = 0;
            }
            var outIdx = -1;
            if (progress >= 1) {
              return this._steps.length - 1;
            } else if (progress <= 0) {
              return 0;
            }
            startIdx = this._startIndex;
            if (startIdx >= 0) {
              for (var i = startIdx; i < this._steps.length && outIdx < 0; ++i) {
                var data = this._steps[i];
                if (progress >= data.progs && progress < data.proge) {
                  outIdx = i;
                  this._startIndex = i;
                }
              }
            }
            if (outIdx < 0) {
              gts.Debug.LogWarr("# PathSys \u9519\u8BEF\u7684\u7D22\u5F15");
            }
            return outIdx;
          };
          _createClass(LineData, [{
            key: "id",
            get: function get() {
              return this._id;
            }
          }, {
            key: "active",
            get: function get() {
              return this._active;
            },
            set: function set(value) {
              this._active = value;
            }
          }, {
            key: "finished",
            get: function get() {
              return this._finished;
            }
          }, {
            key: "stepInfo",
            get: function get() {
              return this.outInfo;
            }
          }]);
          return LineData;
        }();
        LineData._globalId = 0;
        _FishPath.LineData = LineData;
      })(FishPath || (FishPath = exports('FishPath', {})));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/pathTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FishDataMgr.ts', './FishDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, EditBox, Graphics, color, Component, FishDataMgr, FishDef;
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
      EditBox = module.EditBox;
      Graphics = module.Graphics;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "1a3b6b+Ys9C6L2ypRrQsnB4", "pathTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var pathTest = exports('default', (_dec = ccclass("PathTest"), _dec2 = menu("game/fishGame/pathTest"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(EditBox), _dec7 = property(EditBox), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(pathTest, _Component);
        function pathTest() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_curPath", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_curPathTimes", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_next", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EditBox_start", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EditBox_moveSpeed", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_graphic", _descriptor6, _assertThisInitialized(_this));
          _this.curPathID = "1001";
          _this.curIndex = 0;
          _this.moveSpeed = null;
          return _this;
        }
        var _proto = pathTest.prototype;
        _proto.start = function start() {};
        _proto.getNextPath = function getNextPath() {
          var keys = Object.keys(FishDataMgr.ins.cfgMgr.paths);
          this.curIndex++;
          if (!(this.curIndex < keys.length)) {
            this.curIndex = 0;
          }
          this.curPathID = keys[this.curIndex];
        };
        _proto.getLastPath = function getLastPath() {
          var keys = Object.keys(FishDataMgr.ins.cfgMgr.paths);
          if (this.curIndex > 0) {
            this.curIndex--;
          } else {
            this.curIndex = keys.length - 1;
          }
          this.curPathID = keys[this.curIndex];
        };
        _proto.onBtnClick_next = function onBtnClick_next(event) {
          this.getNextPath();
          this.updatePath();
        };
        _proto.onBtnClick_last = function onBtnClick_last(event) {
          this.getLastPath();
          this.updatePath();
        };
        _proto.onEditEnd = function onEditEnd() {
          var strID = this.EditBox_start.string;
          var curIndex = null;
          var keys = Object.keys(FishDataMgr.ins.cfgMgr.paths);
          for (var index = 0; index < keys.length; index++) {
            if (keys[index] == strID) {
              curIndex = index;
              break;
            }
          }
          if (curIndex) {
            this.curIndex = curIndex;
            this.curPathID = strID;
            this.updatePath();
          }
        };
        _proto.onEditEnd_moveSpeed = function onEditEnd_moveSpeed() {
          this.moveSpeed = parseFloat(this.EditBox_moveSpeed.string);

          //        // let curIndex = null;
          //        // let keys = Object.keys(FishDataMgr.ins.cfgMgr.paths);
          //        // for (let index = 0; index < keys.length; index++) {
          //        //     if (keys[index] == strID) {
          //        //         curIndex = index;
          //        //         break;
          //        //     }
          //        // }

          //        // if (curIndex) {
          //        //     this.curIndex = curIndex;
          //        //     this.curPathID = strID;
          //        //     this.updatePath();
          //        // }
        };

        _proto.onEnable = function onEnable() {
          this.Label_curPath.string = "\u5F53\u524D\u8DEF\u5F84ID\uFF1A" + this.curPathID;

          //        //开始路线 图形
          this.startGraphic(this.curPathID);
        };
        _proto.onDisable = function onDisable() {
          //        //关闭路线 图形
          this.endGraphic();
        };
        _proto.updatePath = function updatePath() {
          this.Label_curPath.string = "\u5F53\u524D\u8DEF\u5F84ID\uFF1A" + this.curPathID;
          this.startGraphic(this.curPathID);
        };
        _proto.startGraphic = function startGraphic(pathIdenx) {
          if (!this.Node_graphic) {
            return;
          }
          var ctx = this.Node_graphic.getComponent(Graphics);
          var pathPos = FishDataMgr.GetPathWithId(pathIdenx);
          if (!pathPos) {
            return;
          }
          ctx.clear();
          for (var i = 0; i < pathPos.len; ++i) {
            var pos = FishDef.Util.ins.GetXYFromRowCol(pathPos.row[i], pathPos.col[i]);
            ctx.circle(pos.x, pos.y, 3);
            if (i < pathPos.len / 2.0) {
              ctx.fillColor = color(255, 0, 0, 255);
            } else {
              ctx.fillColor = color(255, 255, 0, 255);
            }
            ctx.fill();
          }
          if (this.moveSpeed) {
            var strTimes = pathPos.len / this.moveSpeed;
            this.Label_curPathTimes.string = "\u8DEF\u5F84\u65F6\u95F4\uFF1A" + strTimes;
          }
        };
        _proto.endGraphic = function endGraphic() {};
        return pathTest;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_curPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_curPathTimes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Button_next", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "EditBox_start", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "EditBox_moveSpeed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_graphic", [_dec8], {
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

System.register("chunks:///_virtual/ShowHideEvent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, game, Game, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      game = module.game;
      Game = module.Game;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "c70f98xZetEeo94bnk0Xlt3", "ShowHideEvent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShowHideEvent = exports('default', (_dec = ccclass("ShowHideEvent"), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(ShowHideEvent, _Component);
        function ShowHideEvent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    // update (dt) {}
          _this._cbHide = function () {};
          _this._cbShow = function () {};
          //    //!
          _this._backShowEventReged = false;
          _this._timestampOnHide = -1;
          return _this;
        }
        ShowHideEvent.Bind = function Bind(node) {
          return node.getComponent(ShowHideEvent) || node.addComponent(ShowHideEvent);
        }
        //    // LIFE-CYCLE CALLBACKS:
        //    // onLoad () {}
        ;

        var _proto = ShowHideEvent.prototype;
        _proto.start = function start() {};
        /**
        * 
        * @param params
         ``` 
         //! time 为后台停留时间，毫秒
         cbShow:(time:number)=>void
         ```
         */
        _proto.OnEvent = function OnEvent(params) {
          this.RegBackShowEvent();
          this._cbHide = params && params.cbHide ? params.caller ? params.cbHide.bind(params.caller) : params.cbHide : function () {};
          this._cbShow = params && params.cbShow ? params.caller ? params.cbShow.bind(params.caller) : params.cbShow : function () {};
        };
        _proto.RegBackShowEvent = function RegBackShowEvent() {
          if (this._backShowEventReged) {
            return;
          }
          this._backShowEventReged = true;
          game.on(Game.EVENT_HIDE, this.OnGameEventHide, this);
          game.on(Game.EVENT_SHOW, this.OnGameEventShow, this);
        };
        _proto.UnRegBackShowEvent = function UnRegBackShowEvent() {
          if (!this._backShowEventReged) {
            return;
          }
          game.off(Game.EVENT_HIDE, this.OnGameEventHide, this);
          game.off(Game.EVENT_SHOW, this.OnGameEventShow, this);
        };
        _proto.OnGameEventHide = function OnGameEventHide() {
          this._timestampOnHide = this.now_timestamp;
          this._cbHide();
        };
        _proto.OnGameEventShow = function OnGameEventShow() {
          if (this._timestampOnHide > 0) {
            var _time = this.now_timestamp - this._timestampOnHide;
            this._cbShow(_time);
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.UnRegBackShowEvent();
        };
        _createClass(ShowHideEvent, [{
          key: "now_timestamp",
          get: function get() {
            var stamp = 0;
            var d = new Date();
            stamp = d.getTime();
            return stamp;
          }
        }]);
        return ShowHideEvent;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIDlgFishHelper.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIDialog.ts', './FishConfig.ts', './FishDef.ts', './FishCfgMgr.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, RichText, find, sys, UIDialog, FishCfg, FishDef, FishCfgMgr, i18n;
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
      RichText = module.RichText;
      find = module.find;
      sys = module.sys;
    }, function (module) {
      UIDialog = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishCfgMgr = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "60385myuudLp5d5Prh/0bAu", "UIDlgFishHelper", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIDlgFishHelper = exports('default', (_dec = ccclass("UIDlgFishHelper"), _dec2 = property({
        type: Node,
        visible: true
      }), _dec3 = property({
        type: Node,
        visible: true
      }), _dec4 = property({
        type: gts.List,
        visible: true
      }), _dec5 = property(RichText), _dec(_class = (_class2 = /*#__PURE__*/function (_UIDialog) {
        _inheritsLoose(UIDlgFishHelper, _UIDialog);
        function UIDlgFishHelper() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _UIDialog.call.apply(_UIDialog, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_buttonsParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_pagesParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_fishList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label_reward", _descriptor4, _assertThisInitialized(_this));
          _this._dataArr = null;
          _this._touchDisTimes = null;
          _this.specialInfo = null;
          return _this;
        }
        var _proto = UIDlgFishHelper.prototype;
        _proto.onLoad = function onLoad() {
          _UIDialog.prototype.onLoad.call(this);
          this.specialInfo = i18n.lang.localLabel.fish.specialInfo;
        };
        _proto.start = function start() {
          var _this2 = this;
          _UIDialog.prototype.start.call(this);
          gts.UI.BindToggleContainer(this._buttonsParent, this._pagesParent, "toggle_{0}", "page_{0}", function (index) {
            //                // gts.Debug.Log(`on sel index: ${index}`);
          }, this);
          if (this._fishList) {
            this._fishList.setData(this.testDatas);
            // this._fishList.refresh();
          }

          //        //设置倍率
          for (var index = 0; index < this.label_reward.length - 1; index++) {
            var label = this.label_reward[index];
            var reward_Info = FishCfg.data["" + (201 + index)];
            var strReward = reward_Info.RewardMin == reward_Info.RewardMax ? "x" + reward_Info.RewardMin : "x" + reward_Info.RewardMin + "-" + reward_Info.RewardMax;
            label.string = this.specialInfo[index].replace("#reward", strReward);
            label.node.active = true;
          }
          do {
            //            //美人鱼
            var _label = this.label_reward[7];
            var _reward_Info = FishCfg.data["" + 208];
            var _strReward = " x<color=#fff434>" + _reward_Info.RewardMin + "</color>-<color=#fff434>" + _reward_Info.RewardMax + "</color>";
            _label.string = this.specialInfo[7].replace("#reward", _strReward);
            _label.node.active = true;
          } while (false);
          var Node_openTest = find("Node_openTest", this.node);
          Node_openTest.on(Node.EventType.TOUCH_START, function (event) {
            var touchPos = event.getLocation();
            if (!touchPos) {
              return;
            }
            //            //判断是否双击
            var isClicks = false;
            do {
              if (_this2._touchDisTimes && sys.now() - _this2._touchDisTimes < 500) {
                _this2._touchDisTimes = null;
                isClicks = true;
                break;
              } else {
                _this2._touchDisTimes = sys.now();
              }
            } while (false);
            if (isClicks) {
              FishCfgMgr.isOpenDebug = !FishCfgMgr.isOpenDebug;
              gts.Debug.enableLog = FishCfgMgr.isOpenDebug;
            }
          });
        };
        _createClass(UIDlgFishHelper, [{
          key: "testDatas",
          get: function get() {
            if (!this._dataArr) {
              this._dataArr = [];
              var tmpkeys = Object.keys(FishCfg.data);
              for (var i = 0; i < tmpkeys.length; ++i) {
                var tmpk = tmpkeys[i];
                var tmpdata = FishCfg.data[tmpk];
                if (tmpdata.FType === FishCfg.Type.NOR_FISH || tmpdata.ID < FishDef.FishType.leiSheXie) {
                  this._dataArr.push({
                    id: tmpk,
                    RewardMax: tmpdata.RewardMax
                  });
                }
              }
            }
            this._dataArr.sort(function (a, b) {
              return a["RewardMax"] - b["RewardMax"];
            });
            return this._dataArr;
          }
        }]);
        return UIDlgFishHelper;
      }(UIDialog), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_buttonsParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_pagesParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_fishList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label_reward", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIFishGame.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './FishDataMgr.ts', './FishDef.ts', './FishSound.ts', './FishBullet.ts', './FishCoin.ts', './FishNet.ts', './FishNet_fireGun.ts', './FishNet_drill.ts', './FishObj.ts', './FishBulletMgr.ts', './FishCfgMgr.ts', './FishCoinMgr.ts', './FishObjMgr.ts', './FishPlayerMgr.ts', './FishConfig.ts', './Common.ts', './UIFishSettings.ts', './ConfigManager.ts', './NetManager.ts', './FishMsgSender.ts', './FishObj_skeleton.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, SpriteAtlas, Sprite, Label, MeshRenderer, JsonAsset, v3, isValid, Prefab, sp, find, tween, UIOpacity, UITransform, Tween, sys, NodePool, instantiate, game, director, SpriteFrame, Animation, Graphics, color, AutoEventNode, GUtil, FishDataMgr, FishDef, FishSound, FishBullet, FishCoin, FishNet, NewClass, FishNet_drill, FishObj, FishBulletMgr, FishCfgMgr, FishCoinMgr, FishObjMgr, FishPlayerMgr, FishCfg, Common, UIFishSettings, ConfigManager, NetManager, FishMsgSender, FishObj_skeleton, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      SpriteAtlas = module.SpriteAtlas;
      Sprite = module.Sprite;
      Label = module.Label;
      MeshRenderer = module.MeshRenderer;
      JsonAsset = module.JsonAsset;
      v3 = module.v3;
      isValid = module.isValid;
      Prefab = module.Prefab;
      sp = module.sp;
      find = module.find;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Tween = module.Tween;
      sys = module.sys;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      game = module.game;
      director = module.director;
      SpriteFrame = module.SpriteFrame;
      Animation = module.Animation;
      Graphics = module.Graphics;
      color = module.color;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      FishBullet = module.default;
    }, function (module) {
      FishCoin = module.default;
    }, function (module) {
      FishNet = module.default;
    }, function (module) {
      NewClass = module.default;
    }, function (module) {
      FishNet_drill = module.default;
    }, function (module) {
      FishObj = module.default;
    }, function (module) {
      FishBulletMgr = module.default;
    }, function (module) {
      FishCfgMgr = module.default;
    }, function (module) {
      FishCoinMgr = module.default;
    }, function (module) {
      FishObjMgr = module.default;
    }, function (module) {
      FishPlayerMgr = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      UIFishSettings = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishObj_skeleton = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _class3;
      cclegacy._RF.push({}, "2c515lm6mlLhYcS/1KwztxY", "UIFishGame", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIFishGame = exports('default', (_dec = ccclass("UIFishGame"), _dec2 = property({
        type: [Node],
        visible: true
      }), _dec3 = property({
        type: UIFishSettings,
        visible: true
      }), _dec4 = property({
        type: FishPlayerMgr,
        visible: true
      }), _dec5 = property({
        type: FishCoinMgr,
        visible: true
      }), _dec6 = property({
        type: Node,
        visible: true
      }), _dec7 = property({
        type: Node,
        visible: true
      }), _dec8 = property({
        type: SpriteAtlas,
        visible: true
      }), _dec9 = property({
        type: SpriteAtlas,
        visible: true
      }), _dec10 = property({
        type: FishBulletMgr,
        visible: true
      }), _dec11 = property({
        type: FishObjMgr,
        visible: true
      }), _dec12 = property({
        type: Node,
        visible: true
      }), _dec13 = property({
        type: Node,
        visible: true
      }), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property([Node]), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property({
        displayName: "鱼潮动画化移动速度"
      }), _dec20 = property({
        type: Node,
        visible: true,
        displayName: "特殊事件响应层-屏蔽其他"
      }), _dec21 = property({
        type: Sprite,
        visible: true,
        displayName: "房间文字"
      }), _dec22 = property({
        type: Label,
        visible: true,
        displayName: "房间分值"
      }), _dec23 = property({
        type: MeshRenderer
      }), _dec24 = property({
        type: JsonAsset,
        visible: true
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UIFishGame, _AutoEventNode);
        function UIFishGame() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_needRotateNodes", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_uiSettins", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_playerMgr", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_coinMgr", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_touchNode", _descriptor5, _assertThisInitialized(_this));
          //    //fucos node
          _initializerDefineProperty(_this, "_touchFocus", _descriptor6, _assertThisInitialized(_this));
          //    // @property({ type: SpriteAtlas, visible: true })
          //    // _useAtlas: SpriteAtlas = null;
          _initializerDefineProperty(_this, "_gameAtlas", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_buttleNetAtlas", _descriptor8, _assertThisInitialized(_this));
          //    //! 子弹管理器
          _initializerDefineProperty(_this, "_bulletMgr", _descriptor9, _assertThisInitialized(_this));
          //    //! 鱼对象管理器
          _initializerDefineProperty(_this, "_fishMgr", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_btnAuto", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_btnLock", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wave", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_aniWave", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "grounds", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveTip", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "waveSpd", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_node_specialEvent", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_title_0", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lab_coin_range", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shadowsPlane", _descriptor22, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          //    //! 子弹发送间隔
          _this._fireRate = 0.15;
          //    //! 当前逝去间隔时间
          _this._fireTimer = 0;
          //    //! 是否切换场景
          _this._isSwitching = false;
          _this._touchDisTimes = null;
          //    //! 是否处于开火状态
          _this._fireState = false;
          //    // private _loadCompleted: {} = {};
          _this._cannonsPrefab = {};
          _this._fbxPrefab = {};
          _this._allNotifys = [];
          //    //! 配置管理器
          _this._cfgMgr = new FishCfgMgr();
          _this._curSceneID = 0;
          _this.disposed = false;
          _this.loadGeneration = 0;
          _this.backgroundGeneration = 0;
          _this.backgroundAsset = null;
          _this.pendingBackgrounds = new Set();
          // 尚未触发的换场景完成回调。请求被后一次换场景取代时，回调顺延给取代它的请求，
          // 否则进房那次的回调（关闭加载层）会被紧随其后的鱼潮换场景吞掉。
          _this.sceneCallbacks = [];
          _this.backgroundMaterial = null;
          _this.backgroundOpacity = null;
          _this.waveTipAnimation = null;
          //    //! 鱼潮路径配置
          _initializerDefineProperty(_this, "_tidePathCfg", _descriptor23, _assertThisInitialized(_this));
          //    //////implements IResHolder///////////////////////
          //    //! 对象池
          _this._allPools = {};
          _this._allPrefabs = {};
          _this._isLocked = false;
          //    //! 是否允许发射钻头炮 - 只有点击后才允许
          _this._allowSendDrill = false;
          _this._eventManager = cc["internal"]["eventManager"];
          _this._touchListener = void 0;
          _this._tmpPos = v3(0, 0, 0);
          return _this;
        }
        var _proto = UIFishGame.prototype;
        _proto.onEnable = function onEnable() {
          var _this2 = this;
          this.OnEvent(ConfigManager.instance.eventTransform.gameShow, function () {
            _this2.OnEventGameShow();
          });
        };
        _proto.OnEventGameShow = function OnEventGameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              FishMsgSender.Send_getRoomInfo();
            }
          }, 0);
        }
        //    //////implements IResHolder///////////////////////
        //    //! 获取炮身
        ;

        _proto.CannonBodyWithType = function CannonBodyWithType(cannonType, roomId) {
          if (cannonType > FishDef.CannonType.special) {
            switch (cannonType) {
              case FishDef.CannonType.special_leiTingHuoPao:
                {
                  return this._cannonsPrefab["cannon_lthp"];
                }
              case FishDef.CannonType.special_leiShe:
                {
                  return this._cannonsPrefab["cannon_jgp"];
                }
              case FishDef.CannonType.special_dianZhuan:
                {
                  return this._cannonsPrefab["cannon_dz"];
                }
            }
            return null;
          }
          return this._cannonsPrefab["cannon"];
        }
        //    //! 获取
        ;

        _proto.getFbxPrefab = function getFbxPrefab(fishID) {
          return this._fbxPrefab["" + fishID];
        }
        //    //! 获取精灵帧
        ;

        _proto.getSpriteFrameByName = function getSpriteFrameByName(spriteFrameName) {
          return this._gameAtlas ? this._gameAtlas.getSpriteFrame(spriteFrameName) : null;
        }
        //    //! 获取获取预制体
        ;

        _proto.getPrefabByName = function getPrefabByName(prefabName) {
          return this._allPrefabs[prefabName];
        }
        //    //! 获取子弹图片
        ;

        _proto.BulletSprFrame = function BulletSprFrame(params, roomId) {
          var lv = 0;
          if (params) {
            if (undefined !== params.lv && null !== params.lv) {
              lv = params.lv;
            } else if (undefined !== params.price && null !== params.price) {
              lv = FishDataMgr.BulletLvWithPrice(params.price);
            }
          }
          var frameName = "bullet_" + lv;
          //        // gts.Debug.Log(`# 子弹图片: ${frameName}`);
          var sprframe = this._buttleNetAtlas ? this._buttleNetAtlas.getSpriteFrame(frameName) : null;
          return sprframe;
        }
        //    //! 获取网子图片
        ;

        _proto.NetSprFrame = function NetSprFrame(params, roomId) {
          var lv = 0;
          if (params) {
            if (undefined !== params.lv && null !== params.lv) {
              lv = params.lv;
            } else if (undefined !== params.price && null !== params.price) {
              lv = FishDataMgr.BulletLvWithPrice(params.price);
            }
          }
          var useIdx = lv % 6;
          var frameName = "fish_net_" + useIdx + "_00";
          //        // gts.Debug.Log(`# 网子图片: ${frameName}`);
          var sprframe = this._buttleNetAtlas ? this._buttleNetAtlas.getSpriteFrame(frameName) : null;
          return sprframe;
        }
        //    //! 回收节点
        ;

        _proto.RecycleNodeToPool = function RecycleNodeToPool(node) {
          if (!node) {
            gts.Debug.LogWarr("#FishGame \u8282\u70B9\u56DE\u6536\u5931\u8D25, node is nill");
            return;
          }
          var ipo = node;
          var pool = this._allPools[ipo.upid];
          if (!pool) {
            gts.Debug.LogWarr("#FishGame \u8282\u70B9\u56DE\u6536\u5931\u8D25, \u6CA1\u6709\u627E\u5230\u5BF9\u8C61\u6C60 " + ipo.upid);
            return;
          }
          pool.put(node);

          //        // gts.Debug.Log(`PoolInfo-RecycleNodeToPool-${ipo.upid}-pool--counts`+pool.size())
        };

        _proto.GetObjFromPool = function GetObjFromPool(name, param) {
          var pool = this._allPools[name];
          if (!pool) {
            console.error("Error:FishGame \u4E0D\u5B58\u5728\u8BE5\u5BF9\u8C61\u6C60, name:" + name);
            return null;
          }
          if (pool.size() <= 0) {
            this.InitNodeToPool(name);
          }

          //        // gts.Debug.Log(`PoolInfo-GetObjFromPool-${name}-pool--counts` + pool.size());
          return pool.get(param);
        };
        _proto.loadPrefabs = function loadPrefabs(arrDir, onFinished) {
          var _this3 = this;
          if (this.disposed || !isValid(this.node, true)) return;
          var generation = ++this.loadGeneration;
          var current = function current() {
            return !_this3.disposed && generation === _this3.loadGeneration && isValid(_this3.node, true);
          };
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            return;
          }
          var oTotal = {};
          var oFinish = {};
          var curProgress = 0;
          var pro_loadPrefab = function pro_loadPrefab(resDir) {
            return new Promise(function (resolve, reject) {
              //                // gts.Debug.Log(`=loadPrefabs==resDir===${resDir}=startTimes=${sys.now()}`);
              bundle.loadDir("prefab/" + resDir, Prefab, function (finish, total, item) {
                if (!current()) return;
                oTotal[resDir] = total;
                oFinish[resDir] = finish;
                var allTotal = 0;
                var allFinish = 0;
                for (var _i = 0, _Object$entries = Object.entries(oTotal); _i < _Object$entries.length; _i++) {
                  var _Object$entries$_i = _Object$entries[_i],
                    _key2 = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];
                  allTotal += value;
                }
                for (var _i2 = 0, _Object$entries2 = Object.entries(oFinish); _i2 < _Object$entries2.length; _i2++) {
                  var _Object$entries2$_i = _Object$entries2[_i2],
                    _key3 = _Object$entries2$_i[0],
                    _value = _Object$entries2$_i[1];
                  allFinish += _value;
                }
                curProgress = 90 * (allFinish / allTotal);
                _this3.EmitEvent(FishDef.Event.LOAD_PROGRESS, curProgress);
              }, function (err, prefabs) {
                if (!current()) {
                  resolve(false);
                  return;
                }
                if (err) {
                  reject(false);
                  return;
                } else {
                  switch (resDir) {
                    case "cannons":
                      {
                        for (var _iterator = _createForOfIteratorHelperLoose(prefabs), _step; !(_step = _iterator()).done;) {
                          var pfb = _step.value;
                          _this3._cannonsPrefab[pfb.name] = pfb;
                        }

                        //                                    //! 初始化玩家管理器
                        if (_this3._playerMgr) {
                          _this3._playerMgr.Init(_this3);
                        }
                        if (_this3._coinMgr) {
                          _this3._coinMgr.Init();
                        }
                        break;
                      }
                    case "fbxPrefab":
                      {
                        for (var _iterator2 = _createForOfIteratorHelperLoose(prefabs), _step2; !(_step2 = _iterator2()).done;) {
                          var _pfb = _step2.value;
                          _this3._fbxPrefab[_pfb.name] = _pfb;
                        }
                        break;
                      }
                    default:
                      {
                        _this3.InitPoolWithPrefabs(prefabs, resDir);
                        break;
                      }
                  }
                  resolve(true);
                }
              });
            });
          };
          var pro_loadMgr = function pro_loadMgr() {
            return new Promise(function (resolve, reject) {
              if (_this3._bulletMgr) {
                _this3._allNotifys.push(_this3._bulletMgr.hndAllLoaded);
                _this3._bulletMgr.Init(_this3);
              }
              if (_this3._fishMgr) {
                _this3._allNotifys.push(_this3._fishMgr.hndAllLoaded);
                _this3._fishMgr.Init(_this3);
              }
              if (_this3._cfgMgr) {
                FishDataMgr.ins.SetCfgMgr(_this3._cfgMgr);
                _this3._cfgMgr.Init(function () {
                  resolve(true);
                }, _this3);
              }
            });
          };
          var preloadTipPro = function preloadTipPro() {
            return new Promise(function (resolve, reject) {
              var bundle = FishDef.Util.bundle;
              if (bundle) {
                bundle.preload("I18n/" + i18n.LangKey + "/firestormbegan", sp.SkeletonData, function (err, items) {
                  resolve(true);
                });
              }
            });
          };
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var arrPro, allPrefabs;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  arrPro = [];
                  arrDir.forEach(function (resDir) {
                    arrPro.push(pro_loadPrefab(resDir));
                  });
                  arrPro.push(pro_loadMgr());
                  arrPro.push(preloadTipPro());
                  _context.next = 6;
                  return Promise.all(arrPro);
                case 6:
                  allPrefabs = _context.sent;
                  if (current() && allPrefabs.length > 0) {
                    if (onFinished) {
                      onFinished();
                    }
                  }
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        };
        _proto.UpdateFlipUI = function UpdateFlipUI() {
          for (var i = 0; i < this._needRotateNodes.length; ++i) {
            GUtil.SetNodeAngle(this._needRotateNodes[i], FishDataMgr.isRotate ? 180 : 0);
          }
        };
        _proto.onLoad = function onLoad() {
          var _this4 = this;
          UIFishGame._ins = this;
          //        //! 翻转UI
          this.UpdateFlipUI();

          //        //! 播放背景音乐
          FishSound.StopBGM();
          FishSound.PlayBGM();

          //        /** 初始化捕鱼数据管理器 */
          FishDataMgr.ins.tidePathJson = this._tidePathCfg ? this._tidePathCfg.json : null;
          FishDataMgr.resHolder = this;
          FishDataMgr.iEventHnd = this;

          //        //////////////////////////////////////////////
          var arrDir = ["cannons", "common", "objects", "fbxPrefab"];
          this.loadPrefabs(arrDir, function () {
            _this4.enableCollision = true;
            FishDataMgr.loadCompleted = true;

            //! 通知所有模块加载完成
            for (var i = 0; i < _this4._allNotifys.length; ++i) {
              var notify = _this4._allNotifys[i];
              notify();
            }

            //            //! 标记全局加载完成
            _this4.EmitEvent(FishDef.Event.ENTER_GAME_COMPLETED);
          });
          //        //////////////////////////////////////////////
          //        //事件注册
          this.OnEvent(FishDef.Event.UPDATE_UI_ROTATE, this.UpdateFlipUI);
          var Node_uiTp_round = find("game_layer/ui_layer/Node_uiTp_round", this.node);
          var Node_textTip = find("Node_textTip", this.node);
          var Node_uiTp = find("Node_uiTp", this.node);
          Node_uiTp.getChildByName("Sprite_mask").on(Node.EventType.TOUCH_END, function () {
            tween(Node_uiTp.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).call(function () {
              Node_uiTp.destroyFromParent();
            }).start();
            tween(Node_uiTp_round.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).call(function () {
              Node_uiTp_round.destroyFromParent();
            }).start();
          }, this);
          Node_textTip.getChildByName("Sprite_mask").on(Node.EventType.TOUCH_END, function () {
            tween(Node_textTip.getComponent(UIOpacity)).to(0.25, {
              opacity: 0
            }).call(function () {
              Node_textTip.destroyFromParent();
            }).start();
          }, this);
          //        //注册事件--界面提示设置
          this.OnEvent(FishDef.Event.SET_PLAYER_VIEW_TIP, function (playerNode) {
            //            //缓动
            var isFirst = true; //sys.localStorage.getItem("isFirstEnter_fish") ? true : false;
            var pNodeX;
            {
              if (!Node_uiTp || !Node_uiTp.components || !Node_uiTp_round) {
                return;
              }
              Node_uiTp.active = true;
              Node_uiTp_round.active = true;
              var pNodeX = FishDataMgr.isRotate ? -1 : 1;
              var Node_round = find("Node_round", Node_uiTp_round);
              var rPos = find("playing/cannon", playerNode).getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              rPos = Node_uiTp.getComponent(UITransform).convertToNodeSpaceAR(rPos);
              Node_round.position = v3(pNodeX * rPos.x, Node_round.position.y, Node_round.position.z);
              var Label_tip = find("Label_tip", Node_uiTp_round);
              Label_tip.position = v3(pNodeX * rPos.x, Label_tip.position.y, Label_tip.position.z);
              Node_uiTp.getComponent(UIOpacity).opacity = 0;
              tween(Node_uiTp.getComponent(UIOpacity)).to(0.5, {
                opacity: 255
              }).start();
              Node_uiTp_round.getComponent(UIOpacity).opacity = 0;
              tween(Node_uiTp_round.getComponent(UIOpacity)).to(0.5, {
                opacity: 255
              }).start();
              var actionTimes = 1.25;
              var Sprite_menu = find("Node_menu/Sprite_menu", Node_uiTp);
              var startPos = Sprite_menu.getPosition().x;
              Tween.stopAllByTarget(Sprite_menu);
              tween(Sprite_menu).to(actionTimes, {
                position: v3(startPos - 50, Sprite_menu.position.y, 0)
              }).to(actionTimes, {
                position: v3(startPos, Sprite_menu.position.y, 0)
              }).union().repeatForever().start();
              var _Sprite_autoFire = find("Sprite_autoFire", Node_uiTp);
              startPos = _Sprite_autoFire.getPosition().y;
              Tween.stopAllByTarget(_Sprite_autoFire);
              tween(_Sprite_autoFire).to(actionTimes, {
                position: v3(_Sprite_autoFire.position.x, startPos + 50, 0)
              }).to(actionTimes, {
                position: v3(_Sprite_autoFire.position.x, startPos, 0)
              }).union().repeatForever().start();
              var _Sprite_lock = find("Sprite_lock", Node_uiTp);
              startPos = _Sprite_lock.getPosition().y;
              Tween.stopAllByTarget(_Sprite_lock);
              tween(_Sprite_lock).to(actionTimes, {
                position: v3(_Sprite_lock.position.x, startPos + 50, 0)
              }).to(actionTimes, {
                position: v3(_Sprite_lock.position.x, startPos, 0)
              }).union().repeatForever().start();

              //                //文字显示
              Label_tip = find("Label_tip", Sprite_menu);
              Label_tip.active = !isFirst;
              Label_tip = find("Label_tip", _Sprite_autoFire);
              Label_tip.active = !isFirst;
              Label_tip = find("Label_tip", _Sprite_lock);
              Label_tip.active = !isFirst;
            }
          });
          gts.UI.OnClick(this._btnAuto, function () {
            FishSound.PlaySound(FishDef.Sound.AUTO);
            _this4.setLock(false);
            _this4.setAuto(!FishDataMgr.fireAuto);
            _this4._touchFocus.active = false;
            if (!FishDataMgr.fireAuto) {
              _this4.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.None);
            } else {
              _this4.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.Auto);
            }
          }, this);
          gts.UI.OnClick(this._btnLock, function () {
            FishSound.PlaySound(FishDef.Sound.AIM);
            _this4.setLock(!FishDataMgr.fireLocking);
            _this4.setAuto(false);
            if (!FishDataMgr.fireLocking) {
              _this4._touchFocus.active = false;
              _this4.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.None);
            } else {
              if (sys.os == sys.OS.WINDOWS) {
                _this4._touchFocus.active = true;
                _this4._touchFocus.getComponent(sp.Skeleton).setAnimation(0, "idle1", true);
              }

              //                    // this.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.Lock);
            }
          }, this);
          this.OnEvent(FishDef.Event.PLAYER_GET_CANNON_DRILL, function (uid) {
            if (FishDataMgr.myUid === uid) {
              _this4.setAuto(false);
              _this4.setLock(false);
              _this4.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.None);
              if (!FishDataMgr.fireAuto) {
                if (_this4._touchFocus.active) {
                  _this4._touchFocus.active = false;
                }
              }
            }
          });

          //        //更新锁定按钮图标
          this.OnEvent(FishDef.Event.UPDATE_LOCK_ICON, function (fishTypeId) {
            if (FishDataMgr.fireLocking && FishDataMgr.curLockFishID == 0 && FishDataMgr.myLockedFishTypeId) {
              fishTypeId = "" + FishDataMgr.myLockedFishTypeId;
            }
            _this4.setLockIcon(fishTypeId);

            //            //取消自动
            if (FishDataMgr.fireAuto && fishTypeId) {
              _this4.setAuto(false);
            }
            var fSp = _this4._touchFocus.getComponent(sp.Skeleton);
            if (fSp.animation != "idle1") {
              fSp.setAnimation(0, "idle1", true);
            }
          });
        };
        _proto.setAuto = function setAuto(isAuto) {
          if (FishDataMgr.fireAuto == isAuto) {
            return;
          }
          FishDataMgr.fireAuto = isAuto;
          if (!FishDataMgr.fireAuto) {
            FishDataMgr.delFireStatus(FishDef.FireStatus.AUTO_FIRE);
          }
          var spSkeleton = this._btnAuto.getComponent(sp.Skeleton);
          if (isAuto) {
            spSkeleton.setAnimation(0, "zdsj_change", false);
            spSkeleton.addAnimation(0, "zdsj_idle", true);
          } else {
            spSkeleton.setAnimation(0, "zdsj_wait", true);
          }
        };
        _proto.setLock = function setLock(isLock) {
          if (FishDataMgr.fireLocking == isLock) {
            return;
          }
          FishDataMgr.fireLocking = isLock;
          this.setLockIcon();
          this.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH);
        };
        _proto.setLockIcon = function setLockIcon(fishTypeId) {
          //        //设置锁定 的 鱼 图标
          var spr_fish = find("spr_fish", this._btnLock);
          spr_fish.active = fishTypeId ? true : false;
          if (fishTypeId && this._gameAtlas) {
            var fixIDVal = (FishCfg.StartID - 1) * -1;
            var fixedId = Number(fishTypeId) + fixIDVal;
            spr_fish.getComponent(Sprite).spriteFrame = this._gameAtlas.getSpriteFrame("aim_" + fixedId);
          }
          if (this._isLocked == FishDataMgr.fireLocking) {
            return;
          }
          this._isLocked = FishDataMgr.fireLocking;
          var spSkeleton = this._btnLock.getComponent(sp.Skeleton);
          if (FishDataMgr.fireLocking) {
            spSkeleton.setAnimation(0, "mz_change", false);
            spSkeleton.addAnimation(0, "mz_idle", true);
            this.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.Lock);
          } else {
            spSkeleton.setAnimation(0, "mz_wait", true);
          }
        };
        _proto.InitPoolWithPrefabs = function InitPoolWithPrefabs(prefabs, flag) {
          if (!prefabs || prefabs.length === 0) {
            gts.Debug.LogErr(flag + ": No Res Loaded");
            return;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose(prefabs), _step3; !(_step3 = _iterator3()).done;) {
            var pfb = _step3.value;
            var tmpname = pfb.name;
            this._allPrefabs[tmpname] = pfb;
            //            //!  处理子弹预制体
            if (tmpname.startsWith(FishDef.POOL_TYPE.BULLET)) {
              this.InitNodeToPool(tmpname, FishBullet, pfb);
            }
            //            //! 鱼对象
            else if (tmpname.startsWith(FishDef.POOL_TYPE.FISH)) {
              this.InitNodeToPool(tmpname, FishObj, pfb);
            } else if (tmpname.startsWith(FishDef.POOL_TYPE.skeletonFish)) {
              this.InitNodeToPool(tmpname, FishObj_skeleton, pfb);
            }
            //            //! 渔网对象--雷霆火炮-爆炸
            else if (tmpname.startsWith(FishDef.POOL_TYPE.NET_FIREGUN)) {
              this.InitNodeToPool(tmpname, NewClass, pfb);
            }
            //            //! 渔网对象
            else if (tmpname.startsWith(FishDef.POOL_TYPE.NET_DRILL)) {
              this.InitNodeToPool(tmpname, FishNet_drill, pfb);
            } else if (tmpname.startsWith(FishDef.POOL_TYPE.NET)) {
              this.InitNodeToPool(tmpname, FishNet, pfb);
            }
            //            //! 金币对象
            else if (tmpname.startsWith(FishDef.POOL_TYPE.COIN)) {
              this.InitNodeToPool(tmpname, FishCoin, pfb);
            }
            //            // //! 未知类型
            //            // else {
            //            //     gts.Debug.LogWarr(`未知的prefab类型, name:${tmpname}`);
            //            // }
          }
        };

        _proto.InitNodeToPool = function InitNodeToPool(name, comp, prefab, count) {
          if (count === void 0) {
            count = 20;
          }
          var pool = this._allPools[name];
          if (!pool) {
            //@ts-ignore
            pool = new NodePool(comp);
            this._allPools[name] = pool;
          }
          if (!prefab) {
            prefab = this._allPrefabs[name];
            if (!prefab) {
              gts.Debug.LogErr("Error: \u6CA1\u6709\u627E\u5230\u9884\u5236\u5BF9\u8C61, name:" + name);
              return;
            }
          }
          for (var i = 0; i < count; ++i) {
            var unit = instantiate(prefab);
            if (!unit) {
              console.error("Error: \u5B9E\u4F8B\u5316\u5BF9\u8C61\u5931\u8D25, name:" + name);
              return;
            }
            var po = unit;
            po.upid = name;
            pool.put(po);
          }
        };
        _proto.testFPS = function testFPS() {
          game.setFrameRate(2);
          this.scheduleOnce(function () {
            game.setFrameRate(60);
          }, 1);
        };
        _proto.onTouchStart = function onTouchStart(touch) {
          touch.preventSwallow = true;
          gts.Debug.Log("touch start");
          //        //此处必须返回true（表示接触到了节点）,否则TOUCH_MOVE,TOUCH_END,TOUCH_CANCEL不触发。

          var touchPos = touch.getLocation();
          //        /////////////////new //////////////////////////////////////////
          if (!touchPos) {
            return;
          }
          gts.Debug.Log("_touchFocus==_touchNode--TOUCH_START");
          //        //判断是否双击
          var isClicks = false;
          do {
            if (this._touchDisTimes && sys.now() - this._touchDisTimes < 500) {
              this._touchDisTimes = null;
              isClicks = true;
              break;
            } else {
              this._touchDisTimes = sys.now();
            }
          } while (false);
          if (isClicks) {
            if (FishDataMgr.fireLocking) {
              //                //双击--切换到自动开火-取消锁定
              this.setLock(false);
              FishDataMgr.curLockFishID = 0;
            }
            this.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.None);
            //            // this._touchFocus.active = true;
          } else {
            //            //单击
            if (FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE)) {
              //                //! 如果自动状态则取消自动
              // this.setAuto(false);

              this.EmitEvent(FishDef.Event.ON_SKILL_STATUS + FishDataMgr.myInfo.uid, FishDef.eSkillStatus.None);

              // if (this._touchFocus.active) {
              //     this._touchFocus.active = false;
              //     // this._touchFocus.getComponent(UIOpacity).opacity = 0;
              //     // tween(this._touchFocus.getComponent(UIOpacity))
              //     //     .to(0.05, { opacity: 0 })
              //     //     .call(() => {
              //     //         this._touchFocus.active = false;
              //     //     })
              //     //     .start();
              // }
              director.getScene().renderScene.cameras[0].screenToWorld(this._tmpPos, v3(touchPos.x, touchPos.y, 0));
              //                //! 广播点击更新事件--炮台坐标
              this.EmitEvent(FishDef.Event.UPDATE_TOUCH_POS, this._tmpPos.clone());
              return;
            } else if (FishDataMgr.isSatus(FishDef.FireStatus.LOCK_FIRE)) {
              //                //! 如果鱼锁定则取消鱼锁定
              this.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH);
            }

            //            //显示瞄准
            if (!this._touchFocus.active) {
              this._touchFocus.active = true;
            }

            //            //如果开启自动--则进入自动状态
            if (FishDataMgr.fireAuto) {
              var fSp = this._touchFocus.getComponent(sp.Skeleton);
              if (fSp.animation != "idle2") {
                fSp.setAnimation(0, "idle2", true);
              }
              FishDataMgr.addFireStatus(FishDef.FireStatus.AUTO_FIRE);
            } else {
              if (!FishDataMgr.fireLocking) {
                //                    //开启锁定--则不能开火--必须锁定鱼才能开火
                //                    //没有开启锁定则 正常开火
                FishDataMgr.addFireStatus(FishDef.FireStatus.NOMAL_FIRE);
                var _fSp = this._touchFocus.getComponent(sp.Skeleton);
                if (_fSp.animation != "idle2") {
                  _fSp.setAnimation(0, "idle2", true);
                }
              }
            }

            //            // let touchNode: Node = null;
            //            // let wTPos = this._touchNode.convertToNodeSpaceAR(this._tmpPos);
            //            // this._touchNode.children.forEach((fishNode) => {
            //            //     let body = find("rotate_node/body", fishNode);
            //            //     let r = rect(0, 0, body.width, body.height);
            //            //     r.center = v2(fishNode.position);

            //            //     if (r.contains(v2(wTPos)) && (!touchNode || fishNode.zIndex > touchNode.zIndex)) {
            //            //         touchNode = body;
            //            //     }
            //            // });
            //            // if (touchNode) {
            //            //     touchNode.emit("_TOUCH_START");
            //            // }
          }

          director.getScene().renderScene.cameras[0].screenToWorld(this._tmpPos, v3(touchPos.x, touchPos.y, 0));
          // Camera.main.getScreenToWorldPoint(touchPos, this._tmpPos);
          //        //! 广播点击更新事件--炮台坐标
          this.EmitEvent(FishDef.Event.UPDATE_TOUCH_POS, this._tmpPos.clone());
          if (this._touchFocus.active) {
            var localpos = GUtil.Pos_W2L(this._tmpPos, this._touchFocus.parent);
            this._touchFocus.setPosition(localpos);
            if (FishDataMgr.isSatus(FishDef.FireStatus.NOMAL_FIRE)) {
              // this._touchFocus.getComponent(UIOpacity).opacity = 0;
              this._touchFocus.scale = v3(1.2, 1.2, 1);

              // tween(this._touchFocus.getComponent(UIOpacity)).to(0.1, { opacity: 255 }, { easing: "cubicInOut" }).start();
              tween(this._touchFocus).to(0.1, {
                scale: v3(1, 1, 1)
              }, {
                easing: "cubicInOut"
              }).start();
            }
          }
          //        /////////////////new //////////////////////////////////////////
          return true;
        };
        _proto.onTouchMoved = function onTouchMoved(touch) {
          gts.Debug.Log("touch move");
          var touchPos = touch.getLocation();
          if (!touchPos || !this._touchFocus) {
            return;
          }
          director.getScene().renderScene.cameras[0].screenToWorld(this._tmpPos, v3(touchPos.x, touchPos.y, 0));

          //        //更新瞄准
          if (!this._touchFocus.active && (FishDataMgr.fireLocking || FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE))) {
            this._touchFocus.active = true;

            // this._touchFocus.getComponent(UIOpacity).opacity = 0;
            this._touchFocus.scale = v3(1.2, 1.2, 1);

            // tween(this._touchFocus.getComponent(UIOpacity)).to(0.1, { opacity: 255 }, { easing: "cubicInOut" }).start();
            tween(this._touchFocus).to(0.1, {
              scale: v3(1, 1, 1)
            }, {
              easing: "cubicInOut"
            }).start();
          }
          if (this._touchFocus.active) {
            var localpos = GUtil.Pos_W2L(this._tmpPos, this._touchFocus.parent);
            this._touchFocus.setPosition(localpos);
            gts.Debug.Log("\u66F4\u65B0\u7784\u51C6");
          }
          if (FishDataMgr.isSatus(FishDef.FireStatus.LOCK_FIRE) && FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_leiShe && FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_dianZhuan || FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.NOMAL_READY && FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.SPECIAL_READY) {
            //            //锁定鱼后不更新炮台角度
            return;
          }

          //        //! 更新炮台角度
          this.EmitEvent(FishDef.Event.UPDATE_TOUCH_POS, this._tmpPos.clone());
        };
        _proto.onTouchEnded = function onTouchEnded(touch) {
          gts.Debug.Log("touch end");
          //        //! 设置发射状态
          this.fireState = false;
          FishDataMgr.delFireStatus(FishDef.FireStatus.NOMAL_FIRE);

          //        //镭射、电钻 发射
          if (FishDataMgr.myInfo && FishDataMgr.myInfo.cannonStatus == FishDef.CannonStatus.SPECIAL_READY && (FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_leiShe || FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_dianZhuan)) {
            this.EmitEvent(FishDef.Event.SPECIAL_CANNON_FIRE + FishDataMgr.myUid);
          }
          if (this._touchFocus.active && !FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE) && !FishDataMgr.fireLocking) {
            this._touchFocus.active = false;
            // tween(this._touchFocus.getComponent(UIOpacity))
            //     .to(0.1, { opacity: 0 })
            //     .call(() => {
            //         this._touchFocus.active = false;
            //     })
            //     .start();
          }
        };

        _proto.onTouchCancelled = function onTouchCancelled(touch) {
          gts.Debug.Log("touch cancel");
          gts.Debug.Log("_touchFocus==MOUSE_UP");

          //        //! 设置发射状态
          this.fireState = false;
          FishDataMgr.delFireStatus(FishDef.FireStatus.NOMAL_FIRE);

          //        //镭射、电钻 发射
          if (FishDataMgr.myInfo.cannonStatus == FishDef.CannonStatus.SPECIAL_READY && (FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_leiShe || FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_dianZhuan)) {
            this.EmitEvent(FishDef.Event.SPECIAL_CANNON_FIRE + FishDataMgr.myUid);
          }
          if (this._touchFocus.active && !FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE) && !FishDataMgr.fireLocking) {
            this._touchFocus.active = false;
            // tween(this._touchFocus.getComponent(UIOpacity))
            //     .to(0.1, { opacity: 0 })
            //     .call(() => {
            //         this._touchFocus.active = false;
            //     })
            //     .start();
          }
        };

        _proto.start = function start() {
          var _this5 = this;
          _AutoEventNode.prototype.start.call(this);

          //        // this.schedule(this.testFPS, 5.0, 100000);

          FishDataMgr.addFireStatus(FishDef.FireStatus.NONE);
          this.RegTouchEvents();
          GUtil.NodeVisible(this._touchFocus, false);

          //        //设置房间分值 FishDataMgr.lastSelRoomId coins_arr
          var coins_arr = FishDef.Data.Rooms[parseInt(FishDataMgr.lastSelRoomId) - 1].coins_arr;
          this._lab_coin_range.string = Common.numFormat("" + coins_arr[0]) + "-" + Common.numFormat("" + coins_arr[coins_arr.length - 1]);
          this._title_0.spriteFrame = this._gameAtlas.getSpriteFrame("tittle" + parseInt(FishDataMgr.lastSelRoomId));
          this.OnEvent(FishDef.Event.ON_SCREEN_SHOCK, function () {
            _this5.ScreenShock();
          });

          //        //! 倍数大于40，屏幕震动
          this.OnEvent(FishDef.Event.ON_SCREEN_SHOCK, function () {
            _this5.ScreenShock();
          });

          //        //! 场景替换
          this.OnEvent(FishDef.MsgID.S2C_FISH_TIDE_COME, function (data) {
            var msg = data.Data;
            //            // var msg: net.Imsg_fishing_change_scene_rep = evt.userData;
            //            // gts.Debug.Log("切换场景", msg.SceneID);

            _this5.waveCome();
            _this5.waveShow(msg.SceneID);
          });

          //        //! 设置场景
          this.OnEvent(FishDef.Event.SET_SCENE_INFO, this.setSceneInfo);
        };
        _proto.clearPendingBackgrounds = function clearPendingBackgrounds() {
          this.pendingBackgrounds.forEach(function (asset) {
            return asset.decRef();
          });
          this.pendingBackgrounds.clear();
        };
        _proto.setSceneInfo = function setSceneInfo(data) {
          var _this6 = this;
          if (this.disposed || !isValid(this.node, true)) return;
          var bundle = FishDef.Util.bundle;
          if (!bundle) {
            gts.Debug.LogErr("Error:FishGame bundle is nil");
            return;
          }
          var generation = ++this.backgroundGeneration;
          if (data.fCallBack) this.sceneCallbacks.push(data.fCallBack);
          var current = function current() {
            return !_this6.disposed && generation === _this6.backgroundGeneration && isValid(_this6.node, true);
          };
          if (this.backgroundOpacity) {
            Tween.stopAllByTarget(this.backgroundOpacity);
            this.backgroundOpacity.opacity = 255;
          }
          this.clearPendingBackgrounds();
          this._curSceneID = data.sceneID;
          bundle.load("textures/maps/map_" + (data.sceneID + 1) + "/spriteFrame", SpriteFrame, function (err, asset) {
            if (err || !asset) return;
            // 每个使用方只释放自己持有的引用，避免强制 bundle.release 误伤另一房间或共享纹理。
            asset.addRef();
            if (!current()) {
              asset.decRef();
              return;
            }
            _this6.pendingBackgrounds.add(asset);
            var background = find("background", _this6.node);
            var opacity = _this6.backgroundOpacity = background.getComponent(UIOpacity);
            tween(opacity).to(0.15, {
              opacity: 0
            }).call(function () {
              if (!current()) return;
              _this6.backgroundMaterial = _this6.shadowsPlane.material;
              _this6.backgroundMaterial.setProperty("mainTexture", asset.texture, 0);
              var previous = _this6.backgroundAsset;
              _this6.backgroundAsset = asset;
              _this6.pendingBackgrounds["delete"](asset);
              previous == null || previous.decRef();
              opacity.opacity = 0;
              var skeleton = _this6.Node_aniWave.getComponent(sp.Skeleton);
              data.waveID = data.sceneID % 4;
              var nextAnimation = "wave_" + (data.waveID + 1);
              skeleton.setMix(skeleton.animation, nextAnimation, 0.1);
              skeleton.setAnimation(0, nextAnimation, true);
            }).to(0.25, {
              opacity: 255
            }).call(function () {
              if (!current()) return;
              for (var _iterator4 = _createForOfIteratorHelperLoose(_this6.sceneCallbacks.splice(0)), _step4; !(_step4 = _iterator4()).done;) {
                var done = _step4.value;
                done();
              }
            }).start();
          });
        }
        //    //鱼潮动画
        ;

        _proto.waveShow = function waveShow(sceneID) {
          var _this7 = this;
          //        // gts.Debug.Log("鱼潮动画");
          if (!FishDataMgr.loadCompleted) {
            return;
          }
          this.mask.active = true;
          this.mask.getComponent(UITransform).width = 0;
          this.wave.active = true;
          //        // this.wave.x = -1160;

          //        //浪潮音效
          FishSound.PlaySound(FishDef.Sound.WAVE);

          //        //延迟到 海浪完全遮挡时切换
          this.scheduleOnce(function () {
            //            //切换场景
            var nextSceneID = sceneID ? sceneID : _this7._curSceneID + 1 > 5 ? 0 : _this7._curSceneID + 1;
            _this7.EmitEvent(FishDef.Event.SET_SCENE_INFO, {
              sceneID: nextSceneID,
              waveID: Math.floor(Math.random() * 4)
            });
          }, 2.0);
          var waveAni = this.wave.getChildByName("ani").getComponent(sp.Skeleton);
          waveAni.setAnimation(0, "animation", false);
          waveAni.setCompleteListener(function () {
            waveAni.setCompleteListener(null);
            //            //!TODO: 事件发送
            _this7.EmitEvent(FishDef.Event.SWITCH_SCENE, false);
            FishDataMgr.ins.SetIsSwitchScene(false);
            _this7._isSwitching = false;
            _this7.wave.active = false;
          });
        }
        //    //鱼潮提示
        ;

        _proto.waveCome = function waveCome() {
          if (this.disposed || !isValid(this.node, true)) return;
          //        // gts.Debug.Log("鱼潮来了1");
          this.waveTip.active = true;
          var ani = this.waveTip.getComponent(Animation);
          if (this.waveTipAnimation) {
            this.waveTipAnimation.off(Animation.EventType.FINISHED, this.onWaveTipFinished, this);
          }
          this.waveTipAnimation = ani;
          ani.once(Animation.EventType.FINISHED, this.onWaveTipFinished, this);
          ani.play();
          this._isSwitching = true;
          this.EmitEvent(FishDef.Event.SWITCH_SCENE, true);
          FishDataMgr.ins.SetIsSwitchScene(true);

          //        //清理鱼
          this.EmitEvent(FishDef.Event.ON_FISH_EXIT);
          if (FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_leiShe && FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_dianZhuan) {
            this.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
          }
        };
        _proto.onWaveTipFinished = function onWaveTipFinished() {
          if (!this.disposed && isValid(this.waveTip, true)) this.waveTip.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          var _this$backgroundAsset;
          // 先作废所有异步回调，再清理引用；bundle 已移除时也必须销毁脱离场景树的池节点。
          this.disposed = true;
          this.loadGeneration++;
          this.backgroundGeneration++;
          this.sceneCallbacks.length = 0;
          if (this.waveTipAnimation) {
            this.waveTipAnimation.off(Animation.EventType.FINISHED, this.onWaveTipFinished, this);
            this.waveTipAnimation = null;
          }
          if (this.backgroundOpacity) Tween.stopAllByTarget(this.backgroundOpacity);
          this.backgroundOpacity = null;
          if (isValid(this.backgroundMaterial, true)) this.backgroundMaterial.setProperty("mainTexture", null, 0);
          this.backgroundMaterial = null;
          this.clearPendingBackgrounds();
          (_this$backgroundAsset = this.backgroundAsset) == null || _this$backgroundAsset.decRef();
          this.backgroundAsset = null;
          _AutoEventNode.prototype.onDestroy.call(this);
          FishDataMgr.Destory();
          this.enableCollision = false;
          if (UIFishGame._ins === this) UIFishGame._ins = null;
          for (var _i3 = 0, _Object$values = Object.values(this._allPools); _i3 < _Object$values.length; _i3++) {
            var pool = _Object$values[_i3];
            pool.clear();
          }
          this._allPools = {};
          this._allPrefabs = {};
          this._cannonsPrefab = {};
          this._fbxPrefab = {};
          this._allNotifys.length = 0;
        };
        _proto.update = function update(dt) {
          this.UpdateFire(dt);
        };
        _proto.UpdateFire = function UpdateFire(dt) {
          //        //子弹发射定时器(不管怎么样，计时器还是要跑的)
          this._fireTimer += dt;
          if (!FishDataMgr.myInfo || !FishDataMgr.loadCompleted ||
          //加载完毕之前不刷新
          this._isSwitching ||
          //切换场景时不刷新
          this._fireTimer < this._fireRate ||
          //射速控制
          this._node_specialEvent.active || FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_leiShe ||
          //镭射炮不能开火
          FishDataMgr.myInfo.cannonType == FishDef.CannonType.special_dianZhuan ||
          //电钻炮不能开火
          !FishDataMgr.isFire()) {
            return;
          }

          //        //炮台状态 未就绪
          if (FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.NOMAL_READY && FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.SPECIAL_READY) {
            FishDataMgr.delFireStatus(FishDef.FireStatus.NOMAL_FIRE);
            return;
          }

          //        //自动发射 点击发射
          //        // gts.Debug.Log("REQ_SEND_BULLET-------");
          this.EmitEvent(FishDef.Event.REQ_SEND_BULLET, {
            uid: FishDataMgr.myUid,
            touch: true
          });
          this._fireTimer = 0;
        };
        _proto.SetFocusPos = function SetFocusPos(touchPos, visible) {
          if (!touchPos || !this._touchFocus) {
            return;
          }
          director.getScene().renderScene.cameras[0].screenToWorld(this._tmpPos, v3(touchPos.x, touchPos.y, 0));
          // Camera.main.getScreenToWorldPoint(touchPos, this._tmpPos);

          this._touchFocus.active = FishDataMgr.fireLocking ? true : visible;
          var localpos = GUtil.Pos_W2L(this._tmpPos, this._touchFocus.parent);
          this._touchFocus.setPosition(localpos);
          gts.Debug.Log("SetFocusPos---visible-=" + visible);
          if (FishDataMgr.myInfo && FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.NOMAL_READY && FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.SPECIAL_READY) {
            return;
          }

          //        //! 设置发射状态
          this.fireState = visible;

          //        //! 广播点击更新事件
          this.EmitEvent(FishDef.Event.UPDATE_TOUCH_POS, this._tmpPos.clone());
        };
        _proto.onMouseMove = function onMouseMove(event) {
          var touchPos = event.getLocation();
          if (!touchPos || !this._touchFocus) {
            return;
          }

          // Camera.main.getScreenToWorldPoint(touchPos, this._tmpPos);
          director.getScene().renderScene.cameras[0].screenToWorld(this._tmpPos, v3(touchPos.x, touchPos.y, 0));

          //                //更新瞄准
          if (FishDataMgr.fireLocking || FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE)) {
            this._touchFocus.active = true;
            this._touchFocus.getComponent(UIOpacity).opacity = 255;
            var localpos = GUtil.Pos_W2L(this._tmpPos, this._touchFocus.parent);
            this._touchFocus.setPosition(localpos);
          }
          if (FishDataMgr.isSatus(FishDef.FireStatus.LOCK_FIRE) && FishDataMgr.myInfo && FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_leiShe && FishDataMgr.myInfo.cannonType != FishDef.CannonType.special_dianZhuan || FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.NOMAL_READY && FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.SPECIAL_READY //炮台未就绪
          ) {
            //                    //锁定鱼后不更新炮台角度
            return;
          }

          //                //! 更新炮台角度
          this.EmitEvent(FishDef.Event.UPDATE_TOUCH_POS, this._tmpPos.clone());
        };
        _proto.RegTouchEvents = function RegTouchEvents() {
          var _this8 = this;
          if (!this._touchNode) {
            return;
          }
          FishDataMgr.hSetFocusPos = function (touchPos, visible) {
            _this8.SetFocusPos(touchPos, visible);
          };
          this._touchNode.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this._touchNode.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
          this._touchNode.on(Node.EventType.TOUCH_END, this.onTouchEnded, this);
          this._touchNode.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);
          this._touchNode.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this._touchNode.on(Node.EventType.MOUSE_UP, function (event) {
            gts.Debug.Log("_touchFocus==MOUSE_UP");

            // if (!this._touchNode.hasEventListener(Node.EventType.MOUSE_MOVE, this.onMouseMove, this)) {
            //     gts.Debug.Log(`_touchFocus==MOUSE_MOVE`);
            // }

            if (_this8._touchFocus.active && !FishDataMgr.isSatus(FishDef.FireStatus.AUTO_FIRE) && !FishDataMgr.fireLocking) {
              gts.Debug.Log("_touchFocus==TOUCH_END");
              _this8.fireState = false;
              FishDataMgr.delFireStatus(FishDef.FireStatus.NOMAL_FIRE);
              _this8._touchFocus.active = false;
              // tween(this._touchFocus.getComponent(UIOpacity))
              //     .to(0.1, { opacity: 0 })
              //     .call(() => {
              //         this.fireState = false;
              //         FishDataMgr.delFireStatus(FishDef.FireStatus.NOMAL_FIRE);
              //         this._touchFocus.active = false;
              //     })
              //     .start();
            }
          }, this);

          //        //特殊事件响应层
          do {
            this.OnEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, function (isActive) {
              //                //开启：福袋 轮轴 炸弹 闪电   不开启：镭射 电钻 雷霆火炮
              _this8._node_specialEvent.active = isActive;
            });
            this._node_specialEvent.on(Node.EventType.TOUCH_MOVE, function (event) {
              _this8.SetFocusPos(event.getLocation(), false);
            }, this);
            this._node_specialEvent.on(Node.EventType.TOUCH_START, function (event) {
              _this8.SetFocusPos(event.getLocation(), true);
            }, this);

            // this._node_specialEvent.on(
            //     Node.EventType.MOUSE_MOVE,
            //     (event) => {
            //         this.SetFocusPos(event.getLocation(), true);
            //     },
            //     this
            // );
          } while (false);
        }
        //    /**
        //     *
        //     * @param time 次数
        //     * @param range 幅度
        //     * @param duration 时长
        //     * @param direction 方向
        //     */
        ;

        _proto.ScreenShock = function ScreenShock(time, range, duration, direction) {
          var _tween;
          if (time === void 0) {
            time = 6;
          }
          if (range === void 0) {
            range = 18;
          }
          if (duration === void 0) {
            duration = 0.1;
          }
          //        // gts.Debug.Log("屏震");
          //        //创建动作序列数组
          var seq = [];

          //        //获得偏移系数
          var excursionX = FishDef.Util.RandNum(1, 10) > 5 ? 1 : -1;
          var excursionY = FishDef.Util.RandNum(1, 10) > 5 ? -1 : 1;
          if (!direction) {
            excursionX = (Math.random() * 0.5 + 0.5) * excursionX;
            excursionY = (Math.random() * 0.5 + 0.5) * excursionY;
          } else {
            excursionX = direction - 3 < 0 ? 0 : direction % 2 > 0 ? 1 : -1;
            excursionY = direction - 2 > 0 ? 0 : direction % 2 > 0 ? -1 : 1;
          }

          //        //根据方向调整位移量
          for (var i = 0; i < time; ++i) {
            seq.push(tween(this.node).to(duration / 2, {
              position: v3(excursionX * range, excursionY * range, 0)
            }));
            seq.push(tween(this.node).to(duration / 2, {
              position: v3(-excursionX * range, -excursionY * range, 0)
            }));
            //            //衰减
            range *= (time - 1 - i) / time;
          }

          //        //停掉其它动作
          Tween.stopAllByTarget(this.node);
          //        //复位
          this.node.setPosition(0, 0);
          //        //震动

          (_tween = tween(this.node)).sequence.apply(_tween, seq).start();
        };
        _proto.test = function test(pathIdenx) {
          var node;
          node = find("testPoint", this.node);
          if (!isValid(node)) {
            node = new Node();
            node.name = "testPoint";
            node.addComponent(Graphics);
            node.parent = this.node;
          }
          var ctx = node.getComponent(Graphics);
          var pathPos = FishDataMgr.GetPathWithId(pathIdenx);
          ctx.clear();
          for (var i = 0; i < pathPos.len; ++i) {
            var pos = FishDef.Util.ins.GetXYFromRowCol(pathPos.row[i], pathPos.col[i]);
            ctx.circle(pos.x, pos.y, 3);
            ctx.fillColor = color(255, 255, 0, 255);
          }
          ctx.fill();
        };
        _proto.onClickToggle_func = function onClickToggle_func(toggle) {
          var node = toggle.node;
          find("Background", node).active = !toggle.isChecked;
          find("checkmark", node).active = toggle.isChecked;
          var func_btns = node.parent.getChildByName("func_btns");
          if (toggle.isChecked) {
            //            //收起
            var toPos = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
            toPos = func_btns.getComponent(UITransform).convertToNodeSpaceAR(toPos);
            var children = func_btns.children;
            for (var _iterator5 = _createForOfIteratorHelperLoose(children), _step5; !(_step5 = _iterator5()).done;) {
              var child = _step5.value;
              tween(child).to(0.2, {
                position: v3(toPos)
              }).start();
              tween(child.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
            }

            //            // tween(func_btns)
            //            //     .to(0.25, { y: node.y - 60, opacity: 0 })
            //            //     .start();
          } else {
            //            //展示
            var btn_auto = func_btns.getChildByName("btn_auto");
            var btn_fucos = func_btns.getChildByName("btn_fucos");
            tween(btn_auto).to(0.2, {
              position: v3(-55, 0, 0)
            }).start();
            tween(btn_auto.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();
            tween(btn_fucos).to(0.2, {
              position: v3(55, 0, 0)
            }).start();
            tween(btn_fucos.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }).start();

            //            // tween(func_btns)
            //            //     .to(0.25, { y: node.y + 90, opacity: 255 })
            //            //     .start();
          }
        };

        _createClass(UIFishGame, [{
          key: "fireState",
          get: function get() {
            return this._fireState;
          },
          set: function set(value) {
            this._fireState = value;
          }
        }, {
          key: "cfgMgr",
          get: function get() {
            return this._cfgMgr;
          }
        }, {
          key: "enableCollision",
          set:
          //    //开启碰撞检测
          function set(value) {
            //        //====================================================
            //        //                    开启碰撞检测
            //        //====================================================
            // var manager = director.getCollisionManager();
            // manager.enabled = value;
          }
        }], [{
          key: "ins",
          get: function get() {
            return this._ins;
          }
        }]);
        return UIFishGame;
      }(AutoEventNode), _class3._ins = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_needRotateNodes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_uiSettins", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_playerMgr", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_coinMgr", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_touchNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_touchFocus", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_gameAtlas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_buttleNetAtlas", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_bulletMgr", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_fishMgr", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_btnAuto", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_btnLock", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "wave", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_aniWave", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "grounds", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "waveTip", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "waveSpd", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "_node_specialEvent", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "_title_0", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "_lab_coin_range", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "shadowsPlane", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "_tidePathCfg", [_dec24], {
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

System.register("chunks:///_virtual/UIFishPlayer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './GUtil.ts', './Common.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './FishSound.ts', './Fish_specialTip.ts', './FishWheel.ts', './I18n.ts', './FishObjMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, _createClass, cclegacy, _decorator, Node, Sprite, Font, Prefab, v3, sp, instantiate, find, UITransform, UIOpacity, tween, Label, Tween, isValid, v2, Vec2, TweenSystem, RichText, VerticalTextAlignment, AutoEventNode, GUtil, Common, FishDataMgr, FishDef, FishMsgSender, FishSound, Fish_specialTip, FishWheel, i18n, FishObjMgr;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Font = module.Font;
      Prefab = module.Prefab;
      v3 = module.v3;
      sp = module.sp;
      instantiate = module.instantiate;
      find = module.find;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Label = module.Label;
      Tween = module.Tween;
      isValid = module.isValid;
      v2 = module.v2;
      Vec2 = module.Vec2;
      TweenSystem = module.TweenSystem;
      RichText = module.RichText;
      VerticalTextAlignment = module.VerticalTextAlignment;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      Fish_specialTip = module.default;
    }, function (module) {
      FishWheel = module.default;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      FishObjMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "06d54humU5Clrhfsk9wWYqY", "UIFishPlayer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIFishPlayer = exports('default', (_dec = ccclass("UIFishPlayer"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Sprite), _dec8 = property({
        type: Font,
        displayName: "自己金币字体",
        visible: true
      }), _dec9 = property({
        type: Node,
        displayName: "火炮底座",
        visible: true
      }), _dec10 = property(Prefab), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UIFishPlayer, _AutoEventNode);
        function UIFishPlayer() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labsParent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "labsDstParent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "staticLabsParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cannon_effect_auto", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cannon_effect_lock", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "head", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_goldFont_myself", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_cannonBase", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefabGoldTip", _descriptor9, _assertThisInitialized(_this));
          _this._labCoin = null;
          _this._labUseCoin = null;
          _this._labNickName = null;
          _this.lab_inCome = null;
          _this.Sprite_line = null;
          _this.icon_coin = null;
          _this._ndPlaying = null;
          _this._ndEmpty = null;
          _this._ndCannon = null;
          _this._ndCannonBase = null;
          _this._ndFlipY = null;
          _this._flipYNodes = null;
          _this._btnAdd = null;
          _this._btnCut = null;
          _this._lnkNodes = [];
          _this._atIdx = -1;
          _this._resHolder = null;
          _this._cannonBody = null;
          _this._lastCannonType = FishDef.CannonType.none;
          //    //! 锁定的鱼
          _this.locked_fish = null;
          _this.locked_fid = 0;
          //    //! 使用的玩家数据
          _this._player = null;
          //    //大鱼展示的坐标
          _this.bigCatchIndex = 0;
          return _this;
        }
        var _proto = UIFishPlayer.prototype;
        _proto.setUILayout = function setUILayout() {
          if (this.isMySelf) {
            this.Sprite_line.active = true;
            this.lab_inCome.active = true;
            this.icon_coin.position = v3(65, -34, 0);
            this._labCoin.position = v3(182, 0, 0);
          } else {
            this.Sprite_line.active = false;
            this.lab_inCome.active = false;
            this.icon_coin.position = v3(75, -18, 0);
            this._labCoin.position = v3(182, -18, 0);
          }
        };
        _proto.updateInCome = function updateInCome(inCome) {
          // if (this.lab_inCome.active) {
          //     let labelInCome = this.lab_inCome.getComponent(Label);
          //     let strIncome = Common.numFormat(inCome);
          //     labelInCome.string = inCome > 0 ? `+${strIncome}` : `${strIncome}`;
          //     this.lab_inCome.getComponent(UIRenderer).color =
          //         inCome == 0 ? color(255, 255, 255, 255) : inCome > 0 ? color(255, 0, 0, 255) : color(0, 255, 0, 255);
          // }
        }
        //    /**
        //     * 设置玩家技能状态
        //     * @param skillStatus //0:NONE 1:auto自动等待 2:自动射击中 3:trace跟踪等待 4：trace跟踪射击中
        //     * @returns
        //     */
        ;

        _proto.setSkillStatus = function setSkillStatus(skillStatus) {
          if (!this._player) {
            return;
          }
          switch (skillStatus) {
            case FishDef.eSkillStatus.None:
              {
                this.cannon_effect_auto.active = false;
                this.cannon_effect_lock.active = false;
                break;
              }
            case FishDef.eSkillStatus.Auto:
              {
                this.cannon_effect_auto.active = true;
                this.cannon_effect_lock.active = false;
                var spSkeleton = this.cannon_effect_auto.getComponent(sp.Skeleton);
                spSkeleton.setAnimation(0, "intro", false);
                spSkeleton.addAnimation(0, "idle", true);
                break;
              }
            case FishDef.eSkillStatus.Lock:
              {
                this.cannon_effect_auto.active = false;
                this.cannon_effect_lock.active = true;
                var _spSkeleton = this.cannon_effect_lock.getComponent(sp.Skeleton);
                _spSkeleton.setAnimation(0, "intro", false);
                _spSkeleton.addAnimation(0, "idle", true);
                break;
              }
          }
          if (this.isMySelf) {
            FishMsgSender.Send_ChangeSkillStatus({
              status: skillStatus
            });
          }
          this._player.skillStatus = skillStatus;
        }
        //    /**
        //     * 获取指定路径的骨骼数据
        //     * @param filePath
        //     * @returns
        //     */
        ;

        _proto.getSkeletonData = function getSkeletonData(filePath) {
          return new Promise(function (resolve, reject) {
            var bundle = FishDef.Util.bundle;
            if (!bundle) {
              reject(null);
            }
            bundle.load(filePath, sp.SkeletonData, function (err, assets) {
              if (err) {
                reject(err);
              } else {
                resolve(assets);
              }
            });
          });
        };
        _proto.setSpecialCannon = function setSpecialCannon(specialType, BulletCount) {
          var _this2 = this;
          if (!specialType) {
            //            //普通炮
            var price = FishDataMgr.GetBulletPrice(this._player.cannonType);
            gts.UI.SetLab(this.labUseCoin, Common.ChangeMoneyShow(price, 2));
            this.DoExchangeCannonBody();
          } else {
            //            //已存在或者正在加载或者加载完成的
            var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
            if (Node_gunSpecial || this._player.cannonStatus == FishDef.CannonStatus.SPECIAL_LOAD || this._player.cannonStatus > FishDef.CannonStatus.NOMAL_READY) {
              return;
            }

            //            //设置特殊炮
            var prefab = this._resHolder ? this._resHolder.CannonBodyWithType(specialType) : null;
            if (prefab) {
              this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_LOAD;
              this._lastCannonType = this._player.cannonType;
              this._player.cannonType = specialType;
              if (this._cannonBody) {
                this._cannonBody.active = false;
              }
              var _Node_gunSpecial = instantiate(prefab);
              _Node_gunSpecial.name = "Node_gunSpecial" + this._player.uid;
              _Node_gunSpecial.scale = v3(1.0, 1.0, 1);
              _Node_gunSpecial.angle = 0;
              _Node_gunSpecial.setParent(this.ndCannon);
              var gunSpine = _Node_gunSpecial.getComponent(sp.Skeleton);
              gunSpine.setAnimation(0, "idle", true);
              switch (specialType) {
                case FishDef.CannonType.special_leiShe:
                  {
                    this.showCountDown(true, i18n.lang.localLabel.fish.countDownTip[0]);

                    //                        //发射范围
                    var _prefab = this._resHolder ? this._resHolder.getPrefabByName("Node_leiShe") : null;
                    if (_prefab) {
                      //                            //镭射动效
                      var tempEffect = instantiate(_prefab);
                      tempEffect.position = _Node_gunSpecial.getChildByName("Node_fire").position;
                      tempEffect.name = "tempEffect";
                      _Node_gunSpecial.addChild(tempEffect);
                      var effectSpine = tempEffect.getComponent(sp.Skeleton);
                      effectSpine.setAnimation(0, "ready", true);
                    }

                    //                        //展示
                    this.showSpecialTip(FishDef.FishType.leiSheXie);
                    this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
                    break;
                  }
                case FishDef.CannonType.special_dianZhuan:
                  {
                    this.showCountDown(true, i18n.lang.localLabel.fish.countDownTip[0]);

                    //                        //电钻瞄准
                    if (this._player.uid == FishDataMgr.myUid) {
                      var fireNode = find("Node_fire", _Node_gunSpecial);
                      fireNode.active = true;
                    }
                    this._player.drillCount = 1;

                    //                        //展示
                    this.showSpecialTip(FishDef.FishType.dianZhuanXie);
                    this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
                    break;
                  }
                case FishDef.CannonType.special_leiTingHuoPao:
                  {
                    this._player.bulletCount = BulletCount && BulletCount > 0 ? BulletCount : 0;
                    //                        //展示动画
                    this.loadTipPro().then(function (tipNode) {
                      var bg_coin = find("playing/flip_node/head/lab_nick_name", _this2.node);
                      var toPos = bg_coin.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                      toPos = _this2.node.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                      toPos.y = toPos.y > 0 ? toPos.y - 100 : toPos.y + 100;
                      tipNode.position = v3(toPos);

                      //                            //提示动画
                      tipNode.getComponent(UIOpacity).opacity = 255;
                      var tipNode_skeleton = tipNode.getComponent(sp.Skeleton);
                      tipNode_skeleton.setAnimation(0, "totalwin_wait", true);
                    });

                    //                        //火炮底座
                    this._cannonBase.active = true;
                    this._cannonBase.getComponent(UIOpacity).opacity = 0;
                    tween(this._cannonBase.getComponent(UIOpacity)).to(0.05, {
                      opacity: 255
                    }).call(function () {
                      var cbSp = _this2._cannonBase.getComponent(sp.Skeleton);
                      cbSp.setAnimation(0, "animation", true);
                      var Label_num = find("Label_num", _this2._cannonBase);
                      Label_num.active = true;
                      Label_num.getComponent(Label).string = "" + _this2._player.bulletCount;
                      Label_num.angle = _this2._cannonBase.angle;
                      Label_num.angle += FishDataMgr.isRotate ? -180 : 0;
                      var Label_num_times = find("Label_num_times", _this2._cannonBase);
                      Label_num_times.active = true;
                      Label_num_times.getComponent(Label).string = _this2._player.fireTimes + "s";
                      Label_num_times.angle = _this2._cannonBase.angle;
                      Label_num_times.angle += FishDataMgr.isRotate ? -180 : 0;
                      Tween.stopAllByTarget(Label_num_times);
                      tween(Label_num_times).repeatForever(tween(Label_num_times).delay(1.0).call(function () {
                        _this2._player.fireTimes--;

                        //                                                    // gts.Debug.Log(` this._player.fireTimes == ${this._player.fireTimes}==========`);

                        if (_this2._player.fireTimes == 0) {
                          Tween.stopAllByTarget(Label_num_times);
                          return;
                        }
                        Label_num_times.getComponent(Label).string = _this2._player.fireTimes + "s";
                      })).start();
                      _this2._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
                    });
                    break;
                  }
              }
            }
          }
        }

        /** 设置玩家数据 */;
        _proto.SetData = function SetData(player) {
          var _this3 = this;
          //空位
          this.empty = player ? false : true;

          //切换按钮
          GUtil.NodeVisible(this.btnAdd, player && player.uid === FishDataMgr.myUid);
          GUtil.NodeVisible(this.btnCut, player && player.uid === FishDataMgr.myUid);
          this._cannonBase.active = false;
          var isShowTip = !this._player && player ? true : false;
          var isChangeCannon = this._player && player && this._player.cannonType < FishDef.CannonType.special && this._player.cannonType != player.cannonType ? true : false;
          var isChangeToSpecial = player && (player.dianZuan && player.dianZuan.Status || player.leiShe || player.leiting && player.leiting.Status) ? true : false;
          var isSkillChange = !this._player ? true : player && this._player.skillStatus != player.skillStatus ? true : false;
          if (player) {
            if (this._player) {
              this._lastCannonType = player.cannonType;
              player.cannonType = this._player.cannonType;
              player.cannonStatus = this._player.cannonStatus;
              player.bulletCount = this._player.bulletCount;
              player.fireTimes = this._player.fireTimes || 0;
            } else {
              player.cannonStatus = FishDef.CannonStatus.NOMAL_READY;
              player.bulletCount = 0;
            }
            this._player = player;
            this._player.fireTimes = this._player.fireTimes || 0;

            //            //技能状态
            if (isSkillChange) {
              this.setSkillStatus(player.skillStatus);
            }

            //            //设置头像
            Common.getHead(player.head, this.head.node);
            this.updateInCome(player.income);

            //            //更新炮
            if (isChangeToSpecial) {
              var specialCannonType = player.leiting.Status ? FishDef.CannonType.special_leiTingHuoPao : player.dianZuan.Status ? FishDef.CannonType.special_dianZhuan : player.leiShe ? FishDef.CannonType.special_leiShe : player.cannonType;
              if (specialCannonType > FishDef.CannonType.special) {
                this.scheduleOnce(function () {
                  _this3.setSpecialCannon(specialCannonType, player.leiting.BulletCount);
                }, 0.5);
              }
            } else if (isChangeCannon) {
              this._lastCannonType = FishDef.CannonType.none;
              this.showCountDown(false);

              //                //设置特殊炮
              var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + player.uid);
              if (Node_gunSpecial) {
                Node_gunSpecial.destroyFromParent();
                this._cannonBase.active = false;
              }
              //                //分数牌
              var Node_specialTip = find("Node_specialTip" + this._player.uid, this.node.parent.parent);
              if (Node_specialTip) {
                Node_specialTip.destroyFromParent();
              }
              this.DoDisposeExchangeCannon(player.cannonType);
            } else {
              this._lastCannonType = FishDef.CannonType.none;

              //                //设置特殊炮
              var _Node_gunSpecial2 = this.ndCannon.getChildByName("Node_gunSpecial" + player.uid);
              if (_Node_gunSpecial2) {
                _Node_gunSpecial2.destroyFromParent();
                this._cannonBase.active = false;

                //                    //分数牌
                var Node_specialTip = find("Node_specialTip" + this._player.uid, this.node.parent.parent);
                if (Node_specialTip) {
                  Node_specialTip.destroyFromParent();
                }
                this.DoDisposeExchangeCannon(player.cannonType);
                this.showCountDown(false);
              }
            }
            if (!this.has(FishDef.Event.ON_SWITCH_TO_NOMAL_CANNON + player.uid)) {
              this.OnEvent(FishDef.Event.ON_SWITCH_TO_NOMAL_CANNON + player.uid, function () {
                _this3.scheduleOnce(function () {
                  if (_this3._player && isValid(_this3._player)) {
                    _this3.OnExchangeCannon(_this3._lastCannonType || _this3._player.cannonType);
                    _this3.DoDisposeExchangeCannon(_this3._lastCannonType || _this3._player.cannonType);
                  }
                }, 4);
              });
            }
            if (FishDataMgr.isMyInfo(player)) {
              gts.UI.SetLab(this.lab_inCome, Common.ChangeMoneyShow(player.wallet, 2));
              if (isChangeCannon && !isChangeToSpecial) {
                this.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
              }
              if (isShowTip) {
                //                    //设置提示界面
                this.EmitEvent(FishDef.Event.SET_PLAYER_VIEW_TIP, this.node);
              }

              //                //设置玩家技能状态
              if (!this.has(FishDef.Event.ON_SKILL_STATUS + player.uid)) {
                this.OnEvent(FishDef.Event.ON_SKILL_STATUS + player.uid, function (status) {
                  _this3.setSkillStatus(status);
                });
              }
              if (!this.has(FishDef.Event.ON_PUSH_WALLET)) {
                this.OnEvent(FishDef.Event.ON_PUSH_WALLET, function (playerGolds, isUpdate) {
                  if (isUpdate === void 0) {
                    isUpdate = true;
                  }
                  if (!_this3._player) {
                    return;
                  }
                  //                        // gts.Debug.Log("=更新金币=ON_PUSH_WALLET=前=UpdateUseGold=playerGolds==" + this._player.golds);
                  //                        // gts.Debug.Log("=更新金币=ON_PUSH_WALLET=后=UpdateUseGold=playerGolds==" + playerGolds);

                  _this3._player.golds = playerGolds || _this3._player.golds;
                  if (isUpdate) {
                    gts.UI.SetLab(_this3.labCoin, Common.numFormat(_this3._player.golds));
                  }
                  _this3.EmitEvent(FishDef.Event.ON_PUSH_INCOME, _this3._player.income);
                });
              }
              if (!this.has(FishDef.Event.ON_PUSH_TOTALWALLET)) {
                this.OnEvent(FishDef.Event.ON_PUSH_TOTALWALLET, function (wallet) {
                  if (!_this3._player) {
                    return;
                  }
                  _this3._player.wallet = wallet;
                  gts.UI.SetLab(_this3.lab_inCome, Common.ChangeMoneyShow(wallet, 2));
                });
              }
              if (!this.has(FishDef.Event.ON_PUSH_INCOME)) {
                this.OnEvent(FishDef.Event.ON_PUSH_INCOME, function (income) {
                  if (!_this3._player) {
                    return;
                  }
                  _this3._player.income = income;
                  _this3.updateInCome(_this3._player.income);
                });
              }
              if (!this.has(FishDef.Event.SHOW_GOLD_TIP + player.uid)) {
                this.OnEvent(FishDef.Event.SHOW_GOLD_TIP + player.uid, function () {
                  //                        // this.showGoldTip(`SỐ TIỀN TỐI THIỂU LÀ <color=#E9F902>${price}</color> giây `);
                  _this3.showGoldTip(i18n.lang.fishTip.gold);
                  return;
                });
              }
              if (!this.has(FishDef.Event.SPECIAL_CANNON_FIRE + player.uid)) {
                this.OnEvent(FishDef.Event.SPECIAL_CANNON_FIRE + player.uid, function (worldPos) {
                  if (!_this3._player || _this3._player.cannonType < FishDef.CannonType.special || FishDataMgr.myInfo.cannonStatus != FishDef.CannonStatus.SPECIAL_READY) {
                    return;
                  }
                  FishDataMgr.myInfo.cannonStatus = FishDef.CannonStatus.SPECIAL_FIRE;
                  var bid = FishDataMgr.getBIDBySeat(_this3._player.seat);
                  switch (_this3._player.cannonType) {
                    case FishDef.CannonType.special_leiShe:
                      {
                        _this3.showCountDown(false);
                        _this3.playSpecialFire(FishDef.CannonType.special_leiShe);

                        //                                // //gts.Debug.Log("---OnRecvFishCatch--special_leiShe--请求开火-");

                        //                                //请求开火
                        var ang = _this3.ndCannon.angle;
                        var canPos = GUtil.Pos_L2W(_this3._cannonBody.getChildByName("Node_fire"));
                        FishMsgSender.Send_FireReq({
                          cannonType: _this3._player.cannonType,
                          fishID: 0,
                          offset: ang,
                          bid: bid
                        });

                        //                                //请求群杀
                        _this3.EmitEvent(FishDef.Event.ON_SPECIAL_CATCH_CALLBACK, {
                          fishType: FishDef.FishType.leiSheXie,
                          pos: v2(0, 0),
                          canAngle: _this3.ndCannon.angle,
                          canPos: canPos,
                          //this.ndCannon.getComponent(UITransform).convertToWorldSpaceAR(v2(0, 0)),
                          fix: !FishDataMgr.isRotate ? 90 : -90
                        });
                        break;
                      }
                    case FishDef.CannonType.special_dianZhuan:
                      {
                        _this3.showCountDown(false);
                        _this3.playSpecialFire(FishDef.CannonType.special_dianZhuan);

                        //                                // //gts.Debug.Log("---OnRecvFishCatch--special_dianZhuan--请求开火-");

                        //                                //请求开火
                        var _ang = _this3.ndCannon.angle;
                        FishMsgSender.Send_FireReq({
                          cannonType: _this3._player.cannonType,
                          fishID: 0,
                          offset: _ang,
                          bid: bid
                        });
                        do {
                          //                                    //! 通知管理器执行
                          var pos = GUtil.Pos_L2W(_this3._cannonBody.getChildByName("Node_fire"));
                          if (!_this3._cannonBody.active) {
                            pos = GUtil.Pos_L2W(find("Node_gunSpecial" + _this3._player.uid + "/Node_fire", _this3.ndCannon));
                          }
                          var msg = {
                            //                                        /**玩家座位*/
                            uid: _this3._player.uid,
                            //                                        /**子弹偏移角度*/
                            offset: _ang,
                            //                                        /**玩家拥有金币*/
                            playerGolds: _this3._player.golds,
                            //                                        /**锁定鱼的id  默认为0*/
                            fishID: FishDataMgr.curLockFishID,
                            //                                        /** 子弹金币*/
                            bulletGolds: 0,
                            //                                        /** 子弹类型*/
                            bulletType: _this3._player.cannonType,
                            bid: bid
                          };
                          var lockFish = null;
                          if (FishDataMgr.curLockFishID > 0) {
                            var ui_layer = _this3.node.parent.parent;
                            var fishObjMgr = find("fishs", ui_layer).getComponent(FishObjMgr);
                            //@ts-ignore
                            lockFish = fishObjMgr.GetFishById(FishDataMgr.curLockFishID);
                          }

                          //                                    // //gts.Debug.Log("---OnRecvFishCatch--DO_SEND_BULLET---");
                          _this3.EmitEvent(FishDef.Event.DO_SEND_BULLET, {
                            pos: pos,
                            data: msg,
                            lock: lockFish
                          });
                        } while (false);

                        //                                //
                        break;
                      }
                  }
                });
              }
            }

            //            //昵称
            Common.nickNameFormatL(this.labNickName, player.name);
            //            // gts.Debug.LogWarr(`SetData UpdateHoldGold:---`);
            //            //金币
            this.UpdateHoldGold();
            //            //当前炮金额
            var tmpIdx = player.cannonType - 1;
            var roomInfo = FishDataMgr.curRoomInfo;
            var useCoin = tmpIdx >= 0 && tmpIdx < FishDef.MAX_CANNON_TYPE && roomInfo ? roomInfo.coins_arr[tmpIdx] : -1;
            if (useCoin > 0) {
              gts.UI.SetLab(this.labUseCoin, Common.ChangeMoneyShow(useCoin, 2));
            }
            if (!this._cannonBody) {
              //                //初始化炮台
              FishDataMgr._bullets = 0;

              //                //! 加载炮管
              var cannontype = this._lastCannonType > 0 ? this._lastCannonType : this._player.cannonType;
              this.LoadCannonBody(cannontype);
            }
          } else if (this._player) {
            this._lastCannonType = FishDef.CannonType.none;
            this.showCountDown(false);

            //            //设置特殊炮
            var _Node_gunSpecial3 = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
            if (_Node_gunSpecial3) {
              _Node_gunSpecial3.destroyFromParent();
              this._cannonBase.active = false;
            }
            if (this._cannonBody) {
              this._cannonBody.active = true;
            }

            //            //分数牌
            var Node_specialTip = find("Node_specialTip" + this._player.uid, this.node.parent.parent);
            if (Node_specialTip) {
              Node_specialTip.destroyFromParent();
            }
            this._player = player;
          }
          this.scheduleOnce(this.switchUI, 0.25);
        };
        _proto.showGoldTip = function showGoldTip(str) {
          //        //提示金币不足
          var goldTip = instantiate(this.prefabGoldTip);
          this.node.parent.parent.addChild(goldTip);
          var tipLabel = goldTip.getChildByName("Label_tip").getComponent(Label);
          tipLabel.string = str;
          var bg_coin = find("playing/flip_node/head/lab_nick_name", this.node);
          var coinPos = GUtil.Pos_L2W_V2(bg_coin);
          coinPos = GUtil.Pos_W2L_V2(v3(coinPos.x, coinPos.y, 0), goldTip.parent);
          goldTip.getPosition().y = coinPos.y + 100;
          goldTip.addComponent(UIOpacity).opacity = 0;
          tween(goldTip.getComponent(UIOpacity)).to(0.25, {
            opacity: 255
          }).delay(1.5).to(0.25, {
            opacity: 0
          }).start();
          tween(goldTip).delay(1.75).to(0.25, {
            position: v3(goldTip.getPosition().x, goldTip.getPosition().y + 200, 0)
          }).removeSelf().start();
        }
        //    // LIFE-CYCLE CALLBACKS:
        ;

        _proto.onLoad = function onLoad() {
          var _this4 = this;
          if (!this.lab_inCome) {
            this._labCoin = find("head/lab_coin", this.ndFlipY);
            this.icon_coin = find("head/bg_coin/icon_coin", this.ndFlipY);
            this.lab_inCome = find("head/lab_inCome", this.ndFlipY);
            this.Sprite_line = find("head/Sprite_line", this.ndFlipY);
          }
          gts.UI.OnClick(this.ndCannonBase, function () {}, this, 1);
          gts.UI.OnClick(this.btnAdd, function () {
            if (_this4._lastCannonType > 0) {
              return;
            }

            //                //! 请求换炮
            if (FishDataMgr.isMyInfo(_this4._player) && _this4.allowExchangeCannon) {
              var curRoomInfo = FishDataMgr.curRoomInfo;
              if (curRoomInfo) {
                var type = _this4._player.cannonType + 1 > FishDef.MAX_CANNON_TYPE ? FishDef.MIN_CANNON_TYPE : _this4._player.cannonType + 1;
                //                        // gts.Debug.Log(`+:当前选择炮:${type}`);
                _this4.OnExchangeCannon(type);
              }
            }
          }, this);
          gts.UI.OnClick(this.btnCut, function () {
            if (_this4._lastCannonType > 0) {
              return;
            }
            if (FishDataMgr.isMyInfo(_this4._player) && _this4.allowExchangeCannon) {
              var curRoomInfo = FishDataMgr.curRoomInfo;
              if (curRoomInfo) {
                var type = _this4._player.cannonType - 1 < FishDef.MIN_CANNON_TYPE ? FishDef.MAX_CANNON_TYPE : _this4._player.cannonType - 1;
                gts.Debug.Log("-:\u5F53\u524D\u9009\u62E9\u70AE:" + type);
                _this4.OnExchangeCannon(type);
              }
            }
          }, this);
          this.OnEvent(FishDef.Event.UPDATE_UI_ROTATE, this.switchUI, this);
        };
        _proto.switchUI = function switchUI() {
          var _this5 = this;
          GUtil.SetNodeAngle(this.ndEmpty, FishDataMgr.isRotate ? 180 : 0);
          if (FishDataMgr.isRotate && this._player) {
            this.ndFlipY.getChildByName("head").angle = -180;
            var bg_buttons = this.ndFlipY.getChildByName("bg_buttons");
            bg_buttons.scale = v3(-1, bg_buttons.scale.y, 1.0);
            var lab_use = find("lab_use", bg_buttons);
            lab_use.angle = -180;
            lab_use.scale = v3(-1, lab_use.scale.y, 1.0);
            this.scheduleOnce(function () {
              switch (_this5._player.seat) {
                case 0:
                  {
                    var head = _this5.ndFlipY.getChildByName("head");
                    head.position = v3(-32, head.position.y, head.position.z);
                    break;
                  }
                case 1:
                  {
                    var _head = _this5.ndFlipY.getChildByName("head");
                    _head.position = v3(210, _head.position.y, _head.position.z);
                    break;
                  }
                case 2:
                  {
                    var _head2 = _this5.ndFlipY.getChildByName("head");
                    _head2.position = v3(-32, _head2.position.y, _head2.position.z);
                    break;
                  }
                case 3:
                  {
                    var _head3 = _this5.ndFlipY.getChildByName("head");
                    _head3.position = v3(210, _head3.position.y, _head3.position.z);
                    break;
                  }
              }
            });
          }
          this.setUILayout();
        };
        _proto.OnExchangeCannon = function OnExchangeCannon(type) {
          var price = FishDataMgr.GetBulletPrice(type);
          FishMsgSender.Send_ExchangeCannon({
            uid: this._player.uid,
            cannonType: type,
            cannonGolds: price
          });
        };
        _proto.UpdateHoldGold = function UpdateHoldGold() {
          //        // gts.Debug.LogWarr(`player UpdateHoldGold:---this._player.golds==` + this._player.golds);
          gts.UI.SetLab(this.labCoin, Common.numFormat(this._player.golds));
        };
        _proto.start = function start() {
          var _this6 = this;
          GUtil.SetLabCacheMode(this.labCoin, Label.CacheMode.CHAR);
          GUtil.SetLabCacheMode(this.labNickName, Label.CacheMode.BITMAP);
          GUtil.SetLabCacheMode(this.labUseCoin, Label.CacheMode.CHAR);
          this._lnkNodes.push(this.labCoin);
          this._lnkNodes.push(this.labNickName);
          this._lnkNodes.push(this.labUseCoin);

          //        //! 监听
          this.OnEvent(FishDef.Event.UPDATE_TOUCH_POS, function (worldPos) {
            if (_this6._player && _this6._player.uid === FishDataMgr.myUid) {
              _this6.UpdateCannonAngle(null, worldPos);
            }
          });

          //        //! 请求开火发射子弹
          this.OnEvent(FishDef.Event.REQ_SEND_BULLET, function (data) {
            if (_this6._player && _this6._player.uid === data.uid) {
              _this6.UpdateCannonAngle();
              var price = FishDataMgr.GetBulletPrice(_this6._player.cannonType);
              if (price < 0) {
                price = 0;
              }
              if (_this6._player.cannonType < FishDef.CannonType.special) {
                if (!_this6._cannonBody.active) {
                  _this6._cannonBody.active = true;
                }

                //                    //限制子弹数
                if (FishDataMgr._bullets > 15) {
                  return;
                }

                //                    //检测金币
                if (_this6._player.golds < price) {
                  _this6.showGoldTip(i18n.lang.fishTip.gold);
                  return;
                }
                var Node_specialTip = _this6.node.parent.parent.getChildByName("Node_specialTip" + _this6._player.uid);
                if (Node_specialTip) {
                  return;
                }
              } else {
                //                    //机关炮子弹数量为0则 更换炮台
                if (_this6._player.cannonType === FishDef.CannonType.special_leiTingHuoPao && _this6._player.bulletCount <= 0) {
                  return;
                }
              }
              var bid = FishDataMgr.getBIDBySeat(_this6._player.seat);
              var ang = _this6.ndCannon.angle;
              //                //! TODO: 暂时没有锁定，FISH_ID使用0
              FishMsgSender.Send_FireReq({
                cannonType: _this6._player.cannonType,
                fishID: FishDataMgr.curLockFishID,
                offset: ang,
                bid: bid
              });
              _this6.PlayFireAni();
              do {
                //                    //! 通知管理器执行
                var pos = GUtil.Pos_L2W(_this6._cannonBody.getChildByName("Node_fire"));
                if (!_this6._cannonBody.active) {
                  pos = GUtil.Pos_L2W(find("Node_gunSpecial" + _this6._player.uid + "/Node_fire", _this6.ndCannon));
                }
                var msg = {
                  //                        /**玩家座位*/
                  uid: _this6._player.uid,
                  //                        /**子弹偏移角度*/
                  offset: ang,
                  //                        /**玩家拥有金币*/
                  playerGolds: price > 0 ? _this6._player.golds - price : _this6._player.golds,
                  //                        /**锁定鱼的id  默认为0*/
                  fishID: FishDataMgr.curLockFishID,
                  //                        /** 子弹金币*/
                  bulletGolds: price,
                  //                        /** 子弹类型*/
                  bulletType: _this6._player.cannonType,
                  bid: bid
                };
                var lockFish = null;
                if (msg.fishID > 0) {
                  var ui_layer = _this6.node.parent.parent;
                  var fishObjMgr = find("fishs", ui_layer).getComponent(FishObjMgr);
                  //@ts-ignore
                  lockFish = fishObjMgr.GetFishById(msg.fishID);
                }

                //                    // //gts.Debug.Log("---OnRecvFishCatch--DO_SEND_BULLET---");
                _this6.EmitEvent(FishDef.Event.DO_SEND_BULLET, {
                  pos: pos,
                  data: msg,
                  lock: lockFish
                });
                if (msg.bulletType < FishDef.CannonType.special && _this6._player.uid == FishDataMgr.myUid) {
                  FishSound.PlaySound(FishDef.Sound.FIRE_0);
                } else {
                  if (msg.bulletType === FishDef.CannonType.special_leiTingHuoPao) {
                    FishSound.PlaySound(FishDef.Sound.FIRESTORM_HIT);
                  }
                }
              } while (false);
            }
          });

          //        //! 服务器通知开火
          this.OnEvent(FishDef.MsgID.S2C_ON_FIRE, function (recvData) {
            gts.Debug.Log("S2C_ON_FIRE :---" + JSON.stringify(recvData));
            var msg = recvData.Data;
            if (!msg || !msg.uid) {
              gts.Debug.LogWarr("\u670D\u52A1\u5668\u901A\u77E5\u5F00\u706B error:---");
              if (recvData.Code == 30003) {
                _this6.showGoldTip(i18n.lang.fishTip.gold);
              }
              return;
            }

            //            // gts.Debug.LogWarr("==服务器通知开火===" + JSON.stringify(msg));

            if (_this6._player && _this6._player.uid === msg.uid) {
              if (recvData.Code != 0) {
                if (recvData.Code == 30003) {
                  _this6.showGoldTip(i18n.lang.fishTip.gold);

                  //                        //更新玩家金币
                  _this6._player.golds = msg.playerGolds;
                  _this6.UpdateHoldGold();
                }
                return;
              }

              //                //! 如果不是自己
              if (_this6._player.uid !== FishDataMgr.myUid) {
                _this6.ndCannon.angle = msg.offset;
                _this6.PlayFireAni(msg.bulletType);
              }
              if (msg.bulletType === FishDef.CannonType.special_leiShe) {
                //                    //镭射不发射子弹--电钻和雷霆火炮需要发射子弹
                return;
              }
              do {
                if (_this6._player.uid !== FishDataMgr.myUid) {
                  //                        //! 通知管理器执行
                  var pos = GUtil.Pos_L2W(_this6._cannonBody.getChildByName("Node_fire"));
                  if (!_this6._cannonBody.active) {
                    pos = GUtil.Pos_L2W(find("Node_gunSpecial" + _this6._player.uid + "/Node_fire", _this6.ndCannon));
                  }
                  var lockFish = null;
                  if (msg.fishID > 0) {
                    var ui_layer = _this6.node.parent.parent;
                    var fishObjMgr = find("fishs", ui_layer).getComponent(FishObjMgr);
                    //@ts-ignore
                    lockFish = fishObjMgr.GetFishById(msg.fishID);
                  }

                  //                        // //gts.Debug.Log("---OnRecvFishCatch--DO_SEND_BULLET---");
                  _this6.EmitEvent(FishDef.Event.DO_SEND_BULLET, {
                    pos: pos,
                    data: msg,
                    lock: lockFish
                  });
                  if (msg.bulletType < FishDef.CannonType.special && _this6._player.uid == FishDataMgr.myUid) {
                    FishSound.PlaySound(FishDef.Sound.FIRE_0);
                  } else {
                    if (msg.bulletType === FishDef.CannonType.special_leiTingHuoPao) {
                      FishSound.PlaySound(FishDef.Sound.FIRESTORM_HIT);
                    }
                  }
                }
              } while (false);

              //                //! 更新玩家数据
              _this6._player.golds = msg.playerGolds;

              //                // gts.Debug.Log(`服务器通知开火 msg.playerGolds:==` + msg.playerGolds);
              _this6.UpdateHoldGold();
            }
          });

          //        //! 玩家换炮
          this.OnEvent(FishDef.MsgID.S2C_EXCHANGE_CANNON, function (reMsg) {
            var msg = reMsg.Data;
            if (reMsg.Code && reMsg.Code != 0 || !msg) {
              return;
            }
            if (_this6._player && _this6._player.uid === msg.uid) {
              //                // gts.Debug.Log("==OnEvent==S2C_EXCHANGE_CANNON======" + JSON.stringify(msg));
              if (msg.cannonType < FishDef.CannonType.special) {
                //                    // gts.Debug.Log("====DoDisposeExchangeCannon======");
                _this6.DoDisposeExchangeCannon(msg.cannonType);
              } else {
                //                    // gts.Debug.Log("====loadSpecialCannon======");
                _this6.loadSpecialCannon(msg.cannonType);
              }
            }
          });

          //        //! 鱼被回收
          this.OnEvent(FishDef.Event.RECYCLE_FISH, function (fid) {
            if (fid === _this6.locked_fid) {
              _this6.LockFish();
            }
          });
          this.OnEvent(FishDef.Event.PLAYER_UPDATE_LOCK, function (data) {
            _this6.LockFish(data);
          });
        };
        _proto.DoDisposeExchangeCannon = function DoDisposeExchangeCannon(cannonType) {
          //        // gts.Debug.Log("=DoDisposeExchangeCannon===this._player.cannonType===" + this._player.cannonType);
          if (this._player.cannonType < FishDef.CannonType.special) {
            //            // gts.Debug.Log("=玩家普通炮=切换=");

            this._player.cannonType = cannonType;
            var price = FishDataMgr.GetBulletPrice(this._player.cannonType);
            gts.UI.SetLab(this.labUseCoin, Common.ChangeMoneyShow(price, 2));
            this.DoExchangeCannonBody();
          } else if (this._player.cannonType != FishDef.CannonType.special_leiShe) {
            this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_UNLOAD;
            //            // gts.Debug.Log("=玩家从特殊炮切回普通炮==");

            //            //玩家从特殊炮切回普通炮
            this.unLoadSpecialCannon(this._player.cannonType, cannonType);
          }
        };
        _proto.LockFish = function LockFish(data) {
          if (!this._player) {
            return;
          }

          //        //玩家释放锁定
          if (!data) {
            this.locked_fid = 0;
            this.locked_fish = null;
            this.EmitEvent(FishDef.Event.UPDATE_LOCK_ICON);
            if (FishDataMgr.myUid == this._player.uid) {
              FishDataMgr.delFireStatus(FishDef.FireStatus.LOCK_FIRE);
              var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
              var fnParent = this._cannonBody.active ? this._cannonBody : Node_gunSpecial;
              if (fnParent) {
                var fireNode = find("Node_fire_lock", fnParent);
                if (fireNode) {
                  fireNode.active = false;
                }
              }
            }
            return;
          }
          if (this._player.uid === data.uid) {
            if (FishDataMgr.myUid == this._player.uid) {
              if (data.fid > 0) {
                var _Node_gunSpecial4 = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
                var _fnParent = this._cannonBody.active ? this._cannonBody : _Node_gunSpecial4;
                if (_fnParent) {
                  var fireNode = find("Node_fire_lock", _fnParent);
                  if (fireNode) {
                    fireNode.active = true;
                  }
                }
                FishDataMgr.addFireStatus(FishDef.FireStatus.LOCK_FIRE);
              } else {
                FishDataMgr.delFireStatus(FishDef.FireStatus.LOCK_FIRE);
              }
            }
            if (data.fid > 0) {
              this.locked_fid = data.fid;
              this.locked_fish = data.fish;
            } else {
              this.EmitEvent(FishDef.Event.UPDATE_LOCK_ICON);
            }
            if (data.fish) {
              this.EmitEvent(FishDef.Event.UPDATE_LOCK_ICON, data.fish.fishTypeId);
            }
          }
        };
        _proto.showSpecialTip = function showSpecialTip(fishType, callBack) {
          var prefab = this._resHolder ? this._resHolder.getPrefabByName("Node_specialTip") : null;
          if (prefab) {
            var Node_specialTip = instantiate(prefab);
            Node_specialTip.name = "Node_specialTip" + this._player.uid;
            Node_specialTip.parent = this.node.parent.parent;
            Node_specialTip.getComponent(UITransform).priority = 900;

            //            // gts.Debug.Log(`=showSpecialTip=fishType==${fishType}=======`);

            var bg_coin = find("playing/flip_node/head/lab_nick_name", this.node);
            var toPos = GUtil.Pos_L2W_V2(bg_coin);
            toPos = GUtil.Pos_W2L_V2(v3(toPos.x, toPos.y, 0), Node_specialTip);
            toPos.y = toPos.y > 0 ? toPos.y - 50 : toPos.y + 50;
            var fish_specialTip = Node_specialTip.getComponent(Fish_specialTip);
            fish_specialTip.playIntro(this._player.uid, toPos, fishType, callBack);
          }
        };
        _proto.OnCatchFish_nomal = function OnCatchFish_nomal(msg, pos, num, fishType) {
          var _this7 = this;
          if (msg.killType == FishDef.KillType.FIREGUN) {
            this.scheduleOnce(function () {
              if (_this7._player && isValid(_this7._player)) {
                var Node_specialTip = find("Node_specialTip" + _this7._player.uid, _this7.node.parent.parent);
                if (Node_specialTip) {
                  Node_specialTip.emit(FishDef.Event.ON_SPECIALTIP_TAKEWIN, msg.rewardGolds);
                }
              }
            }, 0.5);
            //            //
          }

          if (this.locked_fish && msg.fishID == this.locked_fish.fid) {
            //            //解除锁定
            this.LockFish();
          }
        }
        //    //data: { msg: fishMsg.OnKill, pos: Vec2, odds: number, fishType:number }
        ;

        _proto.OnCatchFish_big = function OnCatchFish_big(data) {
          var _this8 = this;
          var msg = data.msg;
          if (msg.rewardGolds < 1) {
            gts.Debug.Log("=====msg.rewardGolds < 1=====");
            return;
          }
          var pos = data.pos;
          var odds = data.odds;
          var fishType = data.fishType;
          var num = FishDef.Util.GetNumByOdds(odds);
          if (msg.killType == FishDef.KillType.FIREGUN) {
            this.scheduleOnce(function () {
              if (_this8._player && isValid(_this8._player)) {
                var Node_specialTip = find("Node_specialTip" + _this8._player.uid, _this8.node.parent.parent);
                if (Node_specialTip) {
                  Node_specialTip.emit(FishDef.Event.ON_SPECIALTIP_TAKEWIN, odds);
                }
              }
            }, 0.5);
            //            //
          }

          //        ////////////////////**大鱼展示*/
          //        //震屏
          this.EmitEvent(FishDef.Event.ON_SCREEN_SHOCK);

          //        //获取坐标
          var head = find("playing/flip_node/head", this.node);
          var bg_coin = find("playing/flip_node/head/lab_nick_name", this.node);
          var newPos = GUtil.Pos_L2W_V2(bg_coin);
          newPos = GUtil.Pos_W2L_V2(v3(newPos.x, newPos.y), head);
          //        // newPos.x += bg_coin.width / 2.0;
          newPos.y = newPos.y > 0 ? newPos.y - 50 : newPos.y + 50;
          newPos.x = newPos.x + (150 * Math.floor(this.bigCatchIndex / 3) - 50);
          newPos.y += 100 * Math.floor(this.bigCatchIndex % 3) + 200;
          this.bigCatchIndex++;
          var toPosW = null;
          var Node_specialTip = this.node.parent.parent.getChildByName("Node_specialTip" + this._player.uid);
          if (Node_specialTip && msg.killType > FishDef.BulletType.Nor) {
            toPosW = Node_specialTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          }

          //        //展示
          var prefab = this._resHolder ? this._resHolder.getPrefabByName("Node_bigFishCelebration") : null;
          if (prefab) {
            var idx = Math.floor(Math.random() * 1000) % 9 + 1;
            var path = FishDef.Sound.DOUBBLE_EFFECT + ("" + idx);
            FishSound.PlaySound(path);
            var clone = instantiate(prefab);
            clone.parent = find("playing/flip_node/head", this.node);
            clone.position = v3(newPos.x, newPos.y, 0);
            clone.getComponent(UIOpacity).opacity = 0;
            clone.scale = v3(0, 0, 1);
            var spSkeleton = clone.getComponent(sp.Skeleton);
            spSkeleton.setAnimation(0, "catch_effect_" + (fishType - 101), true);
            //            // //gts.Debug.Log("OnCatchFish_big---" + `catch_effect_${fishType - 100 - 1}`);

            //            //设置金币数-
            var Label_gold = find("Label_gold", clone);
            Label_gold.active = true;
            Label_gold.getComponent(Label).isBold = true;
            Label_gold.getComponent(Label).font = this._goldFont_myself;
            var sGold = Common.numFormat("" + msg.rewardGolds);
            Label_gold.getComponent(Label).string = "+" + sGold;

            // let toY = fishType >= FishDef.FishType.bigMax ? -120 : -100;

            Label_gold.scale = v3(5.0, 5.0, 1);
            // Label_gold.position = v3(0, toY, 0);

            Label_gold.getComponent(UIOpacity).opacity = 0;
            tween(Label_gold.getComponent(UIOpacity)).to(0.05, {
              opacity: 255
            }, {
              easing: "cubicIn"
            }).start();
            tween(Label_gold).to(0.15, {
              scale: v3(1.0, 1.0, 1)
            }, {
              easing: "cubicIn"
            }).start();

            //            //展示动画
            tween(clone.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }, {
              easing: "cubicOut"
            }).delay(1.25).to(0.2, {
              opacity: 0
            }).start();
            tween(clone).to(0.2, {
              scale: v3(1.0, 1.1, 1)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              scale: v3(1.0, 1.0, 1)
            }, {
              easing: "cubicIn"
            }).call(function () {
              //                    //添加金币
              var wPos = clone.parent.getComponent(UITransform).convertToWorldSpaceAR(v3(newPos.x, newPos.y, 0));
              _this8.EmitEvent(FishDef.Event.COINS_BOOM_BIG, {
                msg: msg,
                pos: v2(wPos.x + 100, wPos.y + 75),
                odds: odds,
                isBig: true,
                toPos: toPosW,
                onCoinRecycled: function onCoinRecycled() {
                  //                            //更新玩家金币--大鱼
                  //                            // //gts.Debug.Log("更新玩家金币--大鱼");
                  _this8._player.golds = msg.playerGolds;
                  //                            // gts.Debug.Log("OnCatchFish_big--msg.playerGolds==" + msg.playerGolds);
                  _this8.UpdateHoldGold();
                }
              });
            }).delay(1.0).to(0.2, {
              scale: v3(1.0, 1.1, 1)
            }, {
              easing: "cubicOut"
            }).to(0.2, {
              scale: v3(1.0, 0.1, 1)
            }, {
              easing: "cubicIn"
            }).call(function () {
              _this8.bigCatchIndex--;
            }).removeSelf().start();
          }
          if (this.locked_fish && msg.fishID == this.locked_fish.fid) {
            //            //解除锁定
            this.LockFish();
          }
        };
        _proto.OnCatchFish_special = function OnCatchFish_special(msg, pos, num, fishType) {
          var _this9 = this;
          if (fishType > FishDef.FishType.special && msg.killType == FishDef.BulletType.FIREGUN) {
            //            //子弹胶囊 效果
            var Node_addBullet = this.node.parent.parent.getChildByName("Node_addBullet_" + msg.uid + "_" + msg.fishID);
            if (Node_addBullet && this._cannonBase.active) {
              var Label_num = find("Label_num", this._cannonBase);
              var endPos = Label_num.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              endPos = Node_addBullet.parent.getComponent(UITransform).convertToNodeSpaceAR(endPos);
              var rX = Math.abs(Node_addBullet.getPosition().x - endPos.x);
              var rY = Math.abs(Node_addBullet.getPosition().y - endPos.y);
              var bezier = [v2((Node_addBullet.getPosition().x + endPos.x) / 2, Node_addBullet.getPosition().y), v2(-(Node_addBullet.getPosition().x + endPos.x) / 2, endPos.y), endPos];
              if (rX > rY) {
                bezier = [v2(Node_addBullet.getPosition().x, (Node_addBullet.getPosition().y + endPos.y) / 2), v2(endPos.x, -(Node_addBullet.getPosition().y + endPos.y) / 2), endPos];
              }
              var times = 0.6;
              tween(Node_addBullet).parallel(GUtil.bezierTo(Node_addBullet, times, v2(bezier[0].x, bezier[0].y), v2(bezier[0].x, bezier[0].y), v3(bezier[0].x, bezier[0].y, 0)), tween(Node_addBullet).to(times, {
                scale: v3(0.5, 0.5, 1)
              })).call(function () {
                Node_addBullet.scale = v3(1.0, 1.0, 1);
                var Node_addBullet_sp = Node_addBullet.getComponent(sp.Skeleton);
                Node_addBullet_sp.setAnimation(0, "end", false);
                Node_addBullet_sp.setCompleteListener(function () {
                  Node_addBullet_sp.setCompleteListener(null);
                  Node_addBullet.destroyFromParent();
                });
              }).start();
            }
            return;
          }
          if (FishDef.FishType.longWangXianBao != fishType) {
            //            //解除锁定--自己的鱼
            if (this.locked_fish && msg.fishID == this.locked_fish.fid) {
              this.LockFish();
            }
          }
          if (this._player.cannonStatus != FishDef.CannonStatus.NOMAL_READY && (fishType == FishDef.FishType.leiTingHuoPao || fishType == FishDef.FishType.dianZhuanXie || fishType == FishDef.FishType.leiSheXie)) {
            //            //防止 三种特殊炮同事出现
            return;
          }
          var fOnCatch = function fOnCatch() {
            if (!_this9._player) {
              return;
            }
            //            // //gts.Debug.Log("---OnRecvFishCatch--fOnCatch---");
            var odds = msg.rewardGolds;
            switch (fishType) {
              case FishDef.FishType.zhaDanXie:
              case FishDef.FishType.shanDianShuiMu:
                {
                  if (_this9._player.uid == FishDataMgr.myUid) {
                    //                        //请求群杀
                    _this9.EmitEvent(FishDef.Event.ON_SPECIAL_CATCH_CALLBACK, {
                      fishType: fishType,
                      pos: pos,
                      fishID: msg.fishID
                    });
                  }
                  //                    // //gts.Debug.Log("---OnRecvFishCatch--请求群杀---");
                  break;
                }
              case FishDef.FishType.leiTingHuoPao:
                {
                  if (msg.leiTingBulletCount) {
                    _this9._player.bulletCount = msg.leiTingBulletCount;
                  }
                  if (msg.LeiTingLastSecond) {
                    _this9._player.fireTimes = msg.LeiTingLastSecond;
                  }
                }
              case FishDef.FishType.dianZhuanXie:
              case FishDef.FishType.leiSheXie:
                {
                  //                    //gts.Debug.Log("---OnRecvFishCatch--开始加载炮动画--");
                  //                    //开始加载炮动画
                  _this9.loadSpecialCannon(fishType - 101, pos);
                  break;
                }
              case FishDef.FishType.longWangXianBao:
                {
                  _this9.EmitEvent(FishDef.Event.ON_SCREEN_SHOCK);

                  //                    //更新玩家金币
                  if (msg.playerGolds) {
                    _this9._player.golds = msg.playerGolds;

                    //                        // gts.Debug.LogWarr(`longWangXianBao msg.playerGolds:==` + msg.playerGolds);
                  }

                  //                    //获取坐标
                  var head = find("playing/flip_node/head", _this9.node);
                  var bg_coin = find("playing/flip_node/head/lab_nick_name", _this9.node);
                  var newPos = GUtil.Pos_L2W_V2(bg_coin);
                  newPos = GUtil.Pos_W2L_V2(v3(newPos.x, newPos.y, 0), head);
                  //                    // newPos.x += bg_coin.width / 2.0;
                  newPos.y = newPos.y > 0 ? newPos.y - 50 : newPos.y + 50;
                  newPos.x = newPos.x + (150 * Math.floor(_this9.bigCatchIndex / 3) - 50);
                  newPos.y += 100 * Math.floor(_this9.bigCatchIndex % 3) + 200;
                  _this9.bigCatchIndex++;
                  var Node_specialTip = _this9.node.parent.parent.getChildByName("Node_specialTip" + _this9._player.uid);
                  if (Node_specialTip) {
                    Node_specialTip.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                  }

                  //                    //展示
                  var prefab = _this9._resHolder ? _this9._resHolder.getPrefabByName("Node_bigFishCelebration") : null;
                  if (prefab) {
                    var idx = Math.floor(Math.random() * 1000) % 9 + 1;
                    var path = FishDef.Sound.DOUBBLE_EFFECT + ("" + idx);
                    FishSound.PlaySound(path);
                    var clone = instantiate(prefab);
                    clone.parent = find("playing/flip_node/head", _this9.node);
                    clone.position = v3(newPos.x, newPos.y, 0);
                    clone.getComponent(UIOpacity).opacity = 0;
                    clone.scale = v3(0, 0, 1);
                    var spSkeleton = clone.getComponent(sp.Skeleton);
                    spSkeleton.setAnimation(0, "catch_effect_" + (fishType - 100 - 1), true);

                    //                        //设置金币数-
                    var Label_gold = find("Label_gold", clone);
                    Label_gold.active = true;
                    Label_gold.getComponent(Label).isBold = true;
                    Label_gold.getComponent(Label).font = _this9._goldFont_myself;
                    var sGold = Common.numFormat("" + msg.rewardGolds);
                    Label_gold.getComponent(Label).string = "+" + sGold;
                    Label_gold.scale = v3(5.0, 5.0, 1);
                    Label_gold.getPosition().y = -120;
                    tween(Label_gold.getComponent(UIOpacity)).to(0.05, {
                      opacity: 255
                    }, {
                      easing: "cubicIn"
                    }).start();
                    tween(Label_gold).to(0.15, {
                      scale: v3(1.0, 1.0, 1)
                    }, {
                      easing: "cubicIn"
                    }).start();
                    // //                        //展示动画
                    // var arrAction: FiniteTimeAction[] = [];
                    // //                        // //淡入+放大
                    // arrAction.push(spawn(fadeIn(0.2).easing(easeOut(2.0)), scaleTo(0.2, 1.1).easing(easeOut(2.0))));
                    // //                        //回缩
                    // arrAction.push(scaleTo(0.05, 1.0).easing(easeIn(2.0)));
                    // //                        //停留
                    // arrAction.push(delayTime(1.0));
                    // //                        //放大
                    // arrAction.push(scaleTo(0.05, 1.1).easing(easeOut(2.0)));
                    // //                        //淡出+缩小
                    // arrAction.push(spawn(fadeIn(0.2).easing(easeIn(2.0)), scaleTo(0.2, 0.1).easing(easeIn(2.0))));
                    // //                        //结束动画
                    // arrAction.push(
                    //     callFunc(() => {
                    //         this.bigCatchIndex--;
                    //     })
                    // );
                    // arrAction.push(removeSelf(true));

                    // clone.runAction(sequence(arrAction));

                    //            //展示动画
                    tween(clone.getComponent(UIOpacity)).to(0.2, {
                      opacity: 255
                    }, {
                      easing: "cubicOut"
                    }).delay(1.25).to(0.2, {
                      opacity: 0
                    }).start();
                    tween(clone).to(0.2, {
                      scale: v3(1.0, 1.1, 1)
                    }, {
                      easing: "cubicOut"
                    }).to(0.05, {
                      scale: v3(1.0, 1.0, 1)
                    }, {
                      easing: "cubicIn"
                    }).delay(1.0).to(0.2, {
                      scale: v3(1.0, 1.1, 1)
                    }, {
                      easing: "cubicOut"
                    }).to(0.2, {
                      scale: v3(1.0, 0.1, 1)
                    }, {
                      easing: "cubicIn"
                    }).call(function () {
                      _this9.bigCatchIndex--;
                    }).removeSelf().start();
                  }
                  _this9.EmitEvent(FishDef.Event.COINS_BOOM_SPECIAL, {
                    msg: msg,
                    pos: pos,
                    odds: odds
                  });
                  break;
                }
              case FishDef.FishType.huangJinFuDai:
                {
                  if (msg.uid == FishDataMgr.myUid) {
                    //                        //自己的在FishObj_spine处理
                    return;
                  }
                  break;
                }
              case FishDef.FishType.lunZhouXie:
                {
                  var _prefab2 = _this9._resHolder ? _this9._resHolder.getPrefabByName("Node_wheel") : null;
                  if (_prefab2) {
                    var _clone = instantiate(_prefab2);
                    var node_redbag = find("node_redbag", _this9.node);
                    _clone.parent = _this9.node.parent.parent; //node_redbag;
                    //                        // clone.angle = FishDataMgr.isRotate ? 180 : 0;
                    var startPos = GUtil.Pos_L2W_V2(_this9.node.parent);
                    startPos = GUtil.Pos_W2L_V2(v3(startPos.x, startPos.y, 0), _this9.node.parent.parent); //屏幕中间
                    _clone.position = v3(startPos.x, startPos.y, 0);
                    _clone.getComponent(UITransform).priority = 1000;
                    var toPos = node_redbag.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                    toPos = _clone.parent.getComponent(UITransform).convertToNodeSpaceAR(toPos);
                    var script = _clone.getComponent(FishWheel);
                    if (isValid(script)) {
                      script.initData(v2(toPos.x, toPos.y), msg, _this9.isMySelf, _this9.node.parent.parent);
                    }
                  }
                  break;
                }
            }
          };
          if (fishType < FishDef.FishType.leiTingHuoPao) {
            if (fishType == FishDef.FishType.leiSheXie || fishType == FishDef.FishType.dianZhuanXie) {
              //                //镭射蟹 提示和换炮同时出现
              this.showSpecialTip(fishType);
              fOnCatch();
              return;
            }

            //            //特殊鱼捕获提示
            this.showSpecialTip(fishType, fOnCatch);
          } else {
            fOnCatch();
          }
        }
        //    /**
        //     *
        //     * @param
        //     */
        ;

        _proto.updateLeitingBullets = function updateLeitingBullets(LeiTingBullets, LeiTingTimes) {
          //        // gts.Debug.Log(`火炮信息推送 LeiTingBullets:==` + LeiTingBullets);
          //        // gts.Debug.Log(`火炮信息推送 LeiTingTimes:==` + LeiTingTimes);

          this._player.bulletCount = LeiTingBullets;
          var Label_num = find("Label_num", this._cannonBase);
          Label_num.getComponent(Label).string = "" + this._player.bulletCount;
          if (!this._player.fireTimes) {
            this._player.fireTimes = LeiTingTimes;
          } else if (Math.abs(LeiTingTimes - this._player.fireTimes) > 2) {
            this._player.fireTimes = LeiTingTimes;
          }
          var Label_num_times = find("Label_num_times", this._cannonBase);
          Label_num_times.getComponent(Label).string = this._player.fireTimes + "s";
        }
        //    //其他玩家 奖励
        ;

        _proto.showRedPacketReward = function showRedPacketReward(reward) {
          var _this10 = this;
          var prefab = this._resHolder ? this._resHolder.getPrefabByName("Node_otherRedpacket") : null;
          if (prefab) {
            var clone = instantiate(prefab);
            var node_redbag = find("node_redbag", this.node);
            clone.parent = node_redbag;
            clone.angle = FishDataMgr.isRotate ? 180 : 0;
            var lab_nick_name = find("playing/flip_node/head/lab_nick_name", this.node);
            var newPos = GUtil.Pos_L2W_V2(lab_nick_name);
            newPos = GUtil.Pos_W2L_V2(v3(newPos.x, newPos.y, 0), node_redbag);
            newPos.y = newPos.y > 0 ? newPos.y - 135 : newPos.y + 135;
            clone.position = v3(newPos.x, newPos.y, 0);
            clone.getComponent(UIOpacity).opacity = 0;
            var scale = clone.scale;
            clone.scale = v3(scale.x * 0.1, scale.y * 0.1, 1);
            var spSkeleton = clone.getComponent(sp.Skeleton);
            spSkeleton.setAnimation(0, "win", false);
            tween(clone.getComponent(UIOpacity)).to(0.2, {
              opacity: 255
            }, {
              easing: "cubicOut"
            }).delay(1.25).to(0.2, {
              opacity: 0
            }).start();
            tween(clone).to(0.2, {
              scale: scale.multiplyScalar(1.1)
            }, {
              easing: "cubicOut"
            }).to(0.05, {
              scale: scale.multiplyScalar(1.0)
            }, {
              easing: "cubicIn"
            }).delay(1.0).call(function () {
              var node_win = find("node_win", clone);
              node_win.active = true;
              var spine = node_win.getComponent(sp.Skeleton);
              spine.setAnimation(0, "enter_other_ch", false);
              spine.addAnimation(0, "wait_other_ch", true);

              //                    //分数动画
              var lbl_win = find("lbl_win", node_win);
              lbl_win.active = true;
              lbl_win.scale = v3(0, 0, 1);
              lbl_win.getComponent(UIOpacity).opacity = 0;
              if (reward) {
                lbl_win.getComponent(Label).string = Common.numFormat("" + reward);
              }
              tween(lbl_win.getComponent(UIOpacity)).to(0.15, {
                opacity: 255
              }).start();
              tween(lbl_win).to(0.15, {
                scale: v3(1.0, 1.0, 1)
              }).start();
              if (_this10._player) {
                var data = {
                  msg: {
                    uid: _this10._player.uid,
                    rewardGolds: reward
                  },
                  pos: GUtil.Pos_L2W_V2(node_win),
                  odds: reward
                };
                _this10.EmitEvent(FishDef.Event.COINS_BOOM_NOMAL, data);
              }
            }).delay(3.0).removeSelf().start();
          }
        };
        //    // update (dt) {}
        //    //! 更新炮塔角度
        _proto.UpdateCannonAngle = function UpdateCannonAngle(eulerAngle, pos) {
          if (this.ndCannon) {
            var lastA,
              curA = this.ndCannon.angle;
            var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
            var fnParent = this._cannonBody.active ? this._cannonBody : Node_gunSpecial;
            if (fnParent) {
              var fireNode = find("Node_fire_lock", fnParent);
              if (fireNode) {
                fireNode.active = false;
              }
            }
            var fixval = !FishDataMgr.isRotate ? 90 : -90;
            if (pos) {
              curA = GUtil.LookAt(this.ndCannon, v3(pos), fixval);
            } else if (FishDataMgr.isSatus(FishDef.FireStatus.LOCK_FIRE) && this.locked_fid && this.locked_fish && this.locked_fish.fid == this.locked_fid) {
              var fpos = this.locked_fish.lock.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
              if (fireNode) {
                fireNode.active = this.isMySelf;
                if (fireNode.active) {
                  var fNodePos = fireNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
                  var cfDis = Vec2.distance(fpos, fNodePos);
                  fireNode.getComponent(UITransform).height = Math.floor(cfDis / 60) * 60;
                }
              }
              curA = GUtil.LookAt(this.ndCannon, fpos, fixval);
            }
            var cannon_di = this.ndCannon.getChildByName("cannon_di");
            if (TweenSystem.instance.ActionManager.getNumberOfRunningActionsInTarget(cannon_di) == 0) {
              var disA = curA > lastA ? 5 : -5;
              tween(cannon_di).to(0.5, {
                angle: disA
              }).to(1, {
                angle: -disA
              }).to(0.5, {
                angle: 0
              }).start();
            }
          }
        }
        //    //特殊炮开火
        ;

        _proto.playSpecialFire = function playSpecialFire(cannonType) {
          var _this11 = this;
          switch (cannonType) {
            case FishDef.CannonType.special_leiTingHuoPao:
              {
                //                //gts.Debug.Log("==OnRecvFishCatch==开火发射--雷霆火炮");
                var _Node_gunSpecial5 = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
                if (_Node_gunSpecial5) {
                  if (this._player.bulletCount <= 0) {
                    //                        // this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_UNLOAD;

                    //                        //玩家从特殊炮切回普通炮
                    this.unLoadSpecialCannon(this._player.cannonType, this._lastCannonType != FishDef.CannonType.none ? this._lastCannonType : FishDef.CannonType.none);
                    return;
                  }

                  //                    //gts.Debug.Log(`setAnimation =gun_= _shot===========`);
                  var gunSpine = _Node_gunSpecial5.getComponent(sp.Skeleton);
                  gunSpine.setAnimation(0, "fire", false);
                  gunSpine.addAnimation(0, "idle", true);
                }
                break;
              }
            case FishDef.CannonType.special_leiShe:
              {
                //                //开火发射--
                var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
                if (!Node_gunSpecial) {
                  return;
                }
                var gunSpine = Node_gunSpecial.getComponent(sp.Skeleton);
                gunSpine.setAnimation(0, "fire", false);
                gunSpine.addAnimation(0, "idle", true);
                var tempEffect = Node_gunSpecial.getChildByName("tempEffect");
                var effectSpine = tempEffect.getComponent(sp.Skeleton);
                effectSpine.setAnimation(0, "jgp", false);
                effectSpine.addAnimation(0, "ready", false);
                effectSpine.setCompleteListener(function () {
                  effectSpine.setCompleteListener(null);
                  if (tempEffect.getComponent(UIOpacity).opacity > 0) {
                    tempEffect.getComponent(UIOpacity).opacity = 0;
                  }
                  _this11._player.cannonStatus = FishDef.CannonStatus.SPECIAL_UNLOAD;
                  //                    // gts.Debug.Log("=玩家从特殊炮切回普通炮==");

                  //                    //玩家从特殊炮切回普通炮
                  _this11.unLoadSpecialCannon(_this11._player.cannonType, _this11._lastCannonType != FishDef.CannonType.none ? _this11._lastCannonType : FishDef.CannonType.none);
                });
                break;
              }
            case FishDef.CannonType.special_dianZhuan:
              {
                var Node_gunSpecial = find("Node_gunSpecial" + this._player.uid, this.ndCannon);
                if (!Node_gunSpecial) {
                  return;
                }
                Node_gunSpecial.getComponent(sp.Skeleton).setAnimation(0, "fire", true);
                tween(Node_gunSpecial.getComponent(UIOpacity)).to(0.1, {
                  opacity: 0
                }).start();

                //                //gts.Debug.Log("---OnRecvFishCatch--开火发射-电钻炮 射线---");

                //                //隐藏电钻炮 射线
                var fireNode = find("Node_fire", Node_gunSpecial);
                if (fireNode) {
                  fireNode.active = false;
                }
                break;
              }
          }
        }
        //    //显示原来的炮台
        ;

        _proto.fShowCannon = function fShowCannon(toCannonType) {
          var _this12 = this;
          //        // gts.Debug.Log(`==unLoadSpecialCannon=显示原来的炮台==${toCannonType}==`);
          this.ndCannon.active = true;
          tween(this.ndCannon).delay(0.1).call(function () {
            //                    // if (this._player.cannonType <= FishDef.CannonType.nomal_6) {
            _this12._cannonBody.active = true;
            _this12._cannonBody.getComponent(sp.Skeleton).setAnimation(0, "gun_" + toCannonType + "_ease_in", false);
            _this12._cannonBody.getComponent(sp.Skeleton).addAnimation(0, "gun_" + toCannonType + "_wait", true);
            _this12._cannonBody.getComponent(sp.Skeleton).setMix("gun_" + toCannonType + "_ease_in", "gun_" + toCannonType + "_wait", 0.2);
            //                    // }

            if (FishDataMgr.myUid == _this12._player.uid) {
              _this12.EmitEvent(FishDef.Event.ON_NODE_SPEICAL_EVENT, false);
            }
          }).delay(1).call(function () {
            _this12._player.cannonStatus = FishDef.CannonStatus.NOMAL_READY;
          }).start();
        }
        //    //退出当前炮台
        ;

        _proto.fExitCannon = function fExitCannon(cannonType) {
          var _this13 = this;
          return new Promise(function (resolve, reject) {
            var gunPos = GUtil.Pos_L2W_V2(_this13._cannonBody);
            gunPos = GUtil.Pos_W2L_V2(v3(gunPos.x, gunPos.y), _this13.node.parent.parent);
            var endAngle = FishDataMgr.isRotate ? -180 : 0;
            if (gunPos.y > 0) {
              endAngle = FishDataMgr.isRotate ? 0 : -180;
            }

            //            //特殊炮退出
            //            // gts.Debug.Log(`==unLoadSpecialCannon=特殊炮退出==${cannonType}==`);
            _this13.ndCannon.active = true;
            tween(_this13.ndCannon).delay(1.0).to(0.1, {
              angle: endAngle
            }).call(function () {
              var Node_gunSpecial = _this13.ndCannon.getChildByName("Node_gunSpecial" + _this13._player.uid);
              Node_gunSpecial.getComponent(sp.Skeleton).setAnimation(0, "end", false);
              Node_gunSpecial.getComponent(sp.Skeleton).setCompleteListener(function () {
                Node_gunSpecial.getComponent(sp.Skeleton).setCompleteListener(null);
                Node_gunSpecial.destroyFromParent();

                //                            // gts.Debug.Log("==unLoadSpecialCannon=特殊炮退出=11111111=");
                if (_this13._cannonBase.active) {
                  //                                //雷霆火炮-炮台底座退出
                  tween(_this13._cannonBase.getComponent(UIOpacity)).to(0.05, {
                    opacity: 0
                  }).call(function () {
                    find("Label_num", _this13._cannonBase).active = false;
                    find("Label_num_times", _this13._cannonBase).active = false;
                    _this13._cannonBase.active = false;
                    resolve();
                  }).start();
                } else {
                  resolve();
                }
              });
            }).start();
          });
        }
        //    //卸载特殊炮
        ;

        _proto.unLoadSpecialCannon = function unLoadSpecialCannon(cannonType, toCannonType) {
          var _this14 = this;
          var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
          if (!Node_gunSpecial) {
            //            // gts.Debug.Log("=returnreturnreturnreturn=unLoadSpecialCannon======");
            return;
          }
          if (FishDataMgr.myUid == this._player.uid) {
            FishDataMgr.isLockMask = false;
            this.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH);
          }
          this._player.cannonType = toCannonType;
          this._lastCannonType = FishDef.CannonType.none;
          var fUnload = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (!Node_gunSpecial) {
                      _context.next = 4;
                      break;
                    }
                    _context.next = 3;
                    return _this14.fExitCannon(cannonType);
                  case 3:
                    _this14.fShowCannon(toCannonType);
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function fUnload() {
              return _ref.apply(this, arguments);
            };
          }();
          if (cannonType == FishDef.CannonType.special_leiShe) {
            var tempEffect = Node_gunSpecial.getChildByName("tempEffect");
            tween(tempEffect.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
            fUnload();
          } else if (cannonType == FishDef.CannonType.special_dianZhuan) {
            fUnload();
            //            //显示金币总收入
            this.scheduleOnce(function () {
              if (_this14._player && isValid(_this14._player)) {
                _this14.EmitEvent(FishDef.Event.ON_SPECIALTIP_TAKEWIN_END + _this14._player.uid, [0, FishDef.KillType.DRILL]);
              }
            }, 2.0);
          } else if (cannonType == FishDef.CannonType.special_leiTingHuoPao) {
            //            //显示雷霆火炮的金币提示
            var showTishiNode = function showTishiNode() {
              return new Promise(function (resolve, reject) {
                var Node_specialTip = find("Node_specialTip" + _this14._player.uid, _this14.node.parent.parent);
                tween(Node_specialTip).delay(2.0).call(function () {
                  resolve();
                }).delay(0.25).removeSelf().start();
                tween(Node_specialTip.getComponent(UIOpacity)).delay(2.0).to(0.2, {
                  opacity: 0
                }).start();
              });
            };
            _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return showTishiNode();
                  case 2:
                    fUnload();
                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))();
          }
        };
        _proto.showCountDown = function showCountDown(isShow, strTip) {
          var _this15 = this;
          if (this._player && this._player.uid != FishDataMgr.myUid) {
            return;
          }
          var countDownTip = find("countDownTip", this.node.parent.parent.parent);
          if (!isShow) {
            if (isValid(countDownTip)) {
              Tween.stopAllByTarget(countDownTip);
              tween(countDownTip).delay(0.25).removeSelf().start();
              tween(countDownTip.getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
            }
            return;
          }
          if (!countDownTip) {
            countDownTip = new Node("countDownTip");
            countDownTip.addComponent(UIOpacity).opacity = 0;
            countDownTip.addComponent(UITransform).priority = 100000;
            countDownTip.setParent(this.node.parent.parent.parent);
            var bg_coin = find("playing/flip_node/head/bg_coin", this.node);
            var coinPos = GUtil.Pos_L2W_V2(bg_coin);
            coinPos = GUtil.Pos_W2L_V2(v3(coinPos.x, coinPos.y), countDownTip.parent);
            countDownTip.getPosition().y = coinPos.y + 100;
            var spBg = countDownTip.addComponent(Sprite);
            spBg.spriteFrame = this._resHolder.getSpriteFrameByName("redpack_tip");
            countDownTip.getComponent(UITransform).width = 1000;
            var NodeLabel = new Node("tipLabel");
            NodeLabel.addComponent(UITransform);
            var tipLabel = NodeLabel.addComponent(RichText);
            tipLabel.fontSize = 24;
            tipLabel.string = strTip + ("<color=#E9F902>" + 10 + "</color> " + i18n.lang.localLabel.fish.countDownTip[1] + " ");
            tipLabel.verticalAlign = VerticalTextAlignment.CENTER;
            countDownTip.addChild(NodeLabel);
            var countTimes = 10;
            tween(countDownTip.getComponent(UIOpacity)).delay(2.0).to(0.25, {
              opacity: 255
            }).call(function () {
              tween(countDownTip).repeat(10, tween(countDownTip).delay(1.0).call(function () {
                countTimes--;
                tipLabel.string = strTip + ("<color=#E9F902>" + countTimes + "</color> " + i18n.lang.localLabel.fish.countDownTip[1] + " ");
              })).call(function () {
                _this15.EmitEvent(FishDef.Event.SPECIAL_CANNON_FIRE + _this15._player.uid);
                tween(countDownTip.getComponent(UIOpacity)).to(0.2, {
                  opacity: 0
                }).start();
              }).delay(0.25).removeSelf().start();
            }).start();
          }
        }
        //    //load镭射炮
        ;

        _proto.loadSpecial_leiShe = function loadSpecial_leiShe(cannonType, pos) {
          var _this16 = this;
          var prefab = this._resHolder ? this._resHolder.CannonBodyWithType(cannonType) : null;
          if (prefab) {
            //            //gts.Debug.Log("loadSpecialCannon---切换到镭射炮");
            var startPos = this.node.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
            var Node_gunSpecial = instantiate(prefab);
            Node_gunSpecial.name = "Node_gunSpecial" + this._player.uid;
            Node_gunSpecial.scale = Node_gunSpecial.scale.multiplyScalar(0.5);
            Node_gunSpecial.setParent(this.node.parent.parent);
            Node_gunSpecial.position = v3(startPos);
            var gunPos = GUtil.Pos_L2W_V2(this._cannonBody);
            gunPos = GUtil.Pos_W2L_V2(v3(gunPos.x, gunPos.y), Node_gunSpecial.parent);
            var gunSpine = Node_gunSpecial.getComponent(sp.Skeleton);
            gunSpine.setAnimation(0, "idle", true);
            var toAngle = gunPos.y > 0 ? 180 : 0;
            var endAngle = FishDataMgr.isRotate ? -180 : 0;
            if (gunPos.y > 0) {
              endAngle = FishDataMgr.isRotate ? 0 : -180;
            }
            tween(Node_gunSpecial).delay(1.5).call(function () {
              //                        //回收原来的炮台
              _this16._cannonBody.active = true;
              tween(_this16.ndCannon).to(0.1, {
                angle: endAngle
              }).call(function () {
                _this16._cannonBody.getComponent(sp.Skeleton).setAnimation(0, "gun_" + _this16._lastCannonType + "_ease_out", false);
              }).start();
            }).parallel(tween(Node_gunSpecial).to(0.75, {
              position: v3(gunPos.x, gunPos.y)
            }), tween(Node_gunSpecial).to(0.75, {
              scale: v3(1.2, 1.2, 1)
            }), tween(Node_gunSpecial).to(0.5, {
              angle: toAngle
            })).call(function () {
              _this16._cannonBody.active = false;
              Node_gunSpecial.setParent(_this16.ndCannon);
              Node_gunSpecial.scale = v3(1.0, 1.0, 1);
              Node_gunSpecial.position = _this16._cannonBody.position;
              Node_gunSpecial.angle = 0;
              _this16._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
              _this16.showCountDown(true, i18n.lang.localLabel.fish.countDownTip[0]);

              //                        //发射范围
              var prefab = _this16._resHolder ? _this16._resHolder.getPrefabByName("Node_leiShe") : null;
              if (prefab) {
                //                            //镭射动效
                var tempEffect = instantiate(prefab);
                tempEffect.position = Node_gunSpecial.getChildByName("Node_fire").position;
                tempEffect.name = "tempEffect";
                Node_gunSpecial.addChild(tempEffect);
                var effectSpine = tempEffect.getComponent(sp.Skeleton);
                effectSpine.setAnimation(0, "ready", true);
              }
            }).start();
          }
        };
        _proto.loadSpecial_drill = function loadSpecial_drill(cannonType, pos) {
          var _this17 = this;
          var prefab = this._resHolder ? this._resHolder.CannonBodyWithType(cannonType) : null;
          if (prefab) {
            //            //gts.Debug.Log("loadSpecialCannon---切换到电钻炮");
            var startPos = this.node.parent.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos.x, pos.y, 0));
            var Node_gunSpecial = instantiate(prefab);
            Node_gunSpecial.name = "Node_gunSpecial" + this._player.uid;
            Node_gunSpecial.scale = Node_gunSpecial.scale.multiplyScalar(0.5);
            Node_gunSpecial.setParent(this.node.parent.parent);
            Node_gunSpecial.position = v3(startPos);
            var gunPos = GUtil.Pos_L2W_V2(this._cannonBody);
            gunPos = GUtil.Pos_W2L_V2(v3(gunPos.x, gunPos.y), Node_gunSpecial.parent);
            var gunSpine = Node_gunSpecial.getComponent(sp.Skeleton);
            gunSpine.setAnimation(0, "idle", true);
            var toAngle = gunPos.y > 0 ? 180 : 0;
            var endAngle = FishDataMgr.isRotate ? -180 : 0;
            if (gunPos.y > 0) {
              endAngle = FishDataMgr.isRotate ? 0 : -180;
            }
            tween(Node_gunSpecial).delay(2.5).call(function () {
              //                        //回收原来的炮台
              _this17._cannonBody.active = true;
              tween(_this17.ndCannon).to(0.1, {
                angle: endAngle
              }).call(function () {
                _this17._cannonBody.getComponent(sp.Skeleton).setAnimation(0, "gun_" + _this17._lastCannonType + "_ease_out", false);
              }).start();
            }).parallel(tween(Node_gunSpecial).to(0.75, {
              position: v3(gunPos.x, gunPos.y, 0)
            }), tween(Node_gunSpecial).to(0.75, {
              scale: v3(1.2, 1.2, 1)
            }), tween(Node_gunSpecial).to(0.5, {
              angle: toAngle
            })).call(function () {
              FishSound.PlaySound(FishDef.Sound.DRILL_READY);
              _this17._cannonBody.active = false;
              Node_gunSpecial.setParent(_this17.ndCannon);
              Node_gunSpecial.scale = v3(1, 1, 1);
              Node_gunSpecial.position = _this17._cannonBody.position;
              Node_gunSpecial.angle = 0;
              if (_this17._player.uid == FishDataMgr.myUid) {
                var fireNode = find("Node_fire", Node_gunSpecial);
                fireNode.active = true;
              }
              _this17._player.drillCount = 1;
              _this17._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
              _this17.showCountDown(true, i18n.lang.localLabel.fish.countDownTip[0]);
            }).start();
          }
        }
        //    /**
        //     * 加载雷霆火炮提示
        //     * @returns
        //     */
        ;

        _proto.loadTipPro = function loadTipPro() {
          var _this18 = this;
          return new Promise(function (resolve, reject) {
            var bundle = FishDef.Util.bundle;
            if (bundle) {
              bundle.load("I18n/" + i18n.LangKey + "/firestormbegan", sp.SkeletonData, function (err, assets) {
                if (err) {
                  reject(err);
                } else {
                  //                        //展示动画
                  var Node_specialTip = new Node("Node_specialTip" + _this18._player.uid);
                  Node_specialTip.setParent(_this18.node.parent.parent);
                  Node_specialTip.addComponent(UIOpacity).opacity = 0;
                  Node_specialTip.addComponent(UITransform);
                  var newGoldNode = new Node();
                  newGoldNode.addComponent(UITransform);
                  newGoldNode.parent = Node_specialTip;
                  newGoldNode.active = false;
                  newGoldNode.setPosition(v3(0, -20, 0));
                  var fontPath = FishDataMgr.myUid == _this18._player.uid ? "fonts/font3" : "fonts/font4";
                  FishDef.Util.bundle.load(fontPath, Font, function (err, font) {
                    if (err) {
                      reject(err);
                    } else {
                      var labelGold = newGoldNode.addComponent(Label);
                      labelGold.isBold = true;
                      labelGold.fontSize = 45 * Node_specialTip.scale.y;
                      labelGold.font = font;
                      labelGold.string = "";
                    }
                  });
                  var totalGold = 0;
                  Node_specialTip.off(FishDef.Event.ON_SPECIALTIP_TAKEWIN);
                  Node_specialTip.on(FishDef.Event.ON_SPECIALTIP_TAKEWIN, function (gold) {
                    FishSound.PlaySound(FishDef.Sound.COINS_COUNTING);

                    //                            // gts.Debug.LogWarr("=ON_SPECIALTIP_TAKEWIN=totalGold==" + totalGold);
                    gts.Debug.Log("-==火炮捕获====-ON_SPECIALTIP_TAKEWIN=rewardGolds=" + gold);
                    totalGold += gold;
                    var sGold = Common.numFormat("" + totalGold);
                    newGoldNode.active = true;
                    newGoldNode.getComponent(Label).string = "+" + sGold;
                  });
                  var spFirestorm = Node_specialTip.addComponent(sp.Skeleton);
                  spFirestorm.skeletonData = assets;
                  spFirestorm.premultipliedAlpha = false;
                  spFirestorm.loop = false;
                  resolve(Node_specialTip);
                }
              });
            }
          });
        }
        //    //加载雷霆火炮
        ;

        _proto.loadSpecial_leiTingHuoPao = function loadSpecial_leiTingHuoPao(cannonType) {
          var _this19 = this;
          //        //gts.Debug.Log("loadSpecialCannon---加载雷霆火炮");

          var loadGunPro = function loadGunPro() {
            return new Promise(function (resolve, reject) {
              var prefab = _this19._resHolder ? _this19._resHolder.CannonBodyWithType(cannonType) : null;
              if (prefab) {
                var Node_gunSpecial = instantiate(prefab);
                Node_gunSpecial.name = "Node_gunSpecial" + _this19._player.uid;
                Node_gunSpecial.scale = Node_gunSpecial.scale.multiplyScalar(0.1);
                Node_gunSpecial.getPosition().x = 0;
                Node_gunSpecial.getPosition().y = 0; //this.node.getPosition().y > 0 ? 100 : -50;

                Node_gunSpecial.setParent(_this19.node.parent.parent);
                resolve(Node_gunSpecial);
              }
            });
          };
          var aniPro = function aniPro(tipNode, gunNode) {
            //            //提示 移动到 金币上方
            do {
              var bg_coin = find("playing/flip_node", _this19.node); ///head/lab_nick_name
              var toPos_tip = bg_coin.parent.getComponent(UITransform).convertToWorldSpaceAR(bg_coin.position);
              toPos_tip = tipNode.parent.getComponent(UITransform).convertToNodeSpaceAR(toPos_tip);
              // toPos.x += bg_coin.getComponent(UITransform).width / 2.0;
              toPos_tip.y = toPos_tip.y > 0 ? toPos_tip.y - 180 : toPos_tip.y + 180;
              tipNode.setPosition(toPos_tip);

              //                //提示动画
              tipNode.getComponent(UIOpacity).opacity = 255;
              var tipNode_skeleton = tipNode.getComponent(sp.Skeleton);
              tipNode_skeleton.setAnimation(0, "star", false);
              tipNode_skeleton.addAnimation(0, "totalwin_wait", true);
            } while (false);

            //            //火炮动画
            FishSound.PlaySound(FishDef.Sound.FIRESTORM_INTRO);
            var gunSpine = gunNode.getComponent(sp.Skeleton);
            gunSpine.setAnimation(0, "idle", true); //提示 的入场

            var toPos = GUtil.Pos_L2W_V2(_this19._cannonBody);
            toPos = GUtil.Pos_W2L_V2(v3(toPos.x, toPos.y), gunNode.parent);
            var toAngle = toPos.y > 0 ? 180 : 0;
            var endAngle = FishDataMgr.isRotate ? -180 : 0;
            if (toPos.y > 0) {
              endAngle = FishDataMgr.isRotate ? 0 : -180;
            }
            gunNode.angle = -toAngle;
            tween(gunNode).to(0.25, {
              scale: v3(1.2, 1.2, 1)
            }).call(function () {
              gunSpine.setAnimation(0, "firebegan2", false); //提示 的入场
              gunSpine.addAnimation(0, "idle", true);
            }).delay(3.0).call(function () {
              FishSound.PlaySound(FishDef.Sound.FIRESTORM_START);
              //回收原来的炮台
              tween(_this19.ndCannon).to(0.1, {
                angle: endAngle
              }).call(function () {
                _this19._cannonBody.active = true;

                //                                            //gts.Debug.Log(`setAnimation == gun__ease_out===========`);
                _this19._cannonBody.getComponent(sp.Skeleton).setAnimation(0, "gun_" + _this19._lastCannonType + "_ease_out", false);
              });
            }).to(0.5, {
              position: v3(toPos.x, toPos.y, 0)
            }).call(function () {
              //                                //移动到炮台 切换父节点
              gunNode.setParent(_this19.ndCannon);
              gunNode.scale = v3(1.0, 1.0, 1);
              gunNode.position = _this19._cannonBody.position;
              _this19._cannonBody.active = false;
              gunNode.angle = 0;
              _this19._cannonBase.active = true;
              _this19._cannonBase.getComponent(UIOpacity).opacity = 0;
              tween(_this19._cannonBase.getComponent(UIOpacity)).to(0.05, {
                opacity: 255
              }).call(function () {
                var cbSp = _this19._cannonBase.getComponent(sp.Skeleton);
                cbSp.setAnimation(0, "animation", true);
                var Label_num = find("Label_num", _this19._cannonBase);
                Label_num.active = true;
                Label_num.getComponent(Label).string = "" + _this19._player.bulletCount;
                Label_num.angle = _this19._cannonBase.angle;
                Label_num.angle += FishDataMgr.isRotate ? -180 : 0;
                _this19._player.fireTimes -= 3;
                var Label_num_times = find("Label_num_times", _this19._cannonBase);
                Label_num_times.active = true;
                Label_num_times.getComponent(Label).string = _this19._player.fireTimes + "s";
                Label_num_times.angle = _this19._cannonBase.angle;
                Label_num_times.angle += FishDataMgr.isRotate ? -180 : 0;
                Tween.stopAllByTarget(Label_num_times);
                tween(Label_num_times).repeatForever(tween(Label_num_times).delay(1.0).call(function () {
                  _this19._player.fireTimes--;
                  //                                                            // gts.Debug.Log(` this._player.fireTimes == ${this._player.fireTimes}==========`);

                  if (_this19._player.fireTimes == 0) {
                    Tween.stopAllByTarget(Label_num_times);
                    return;
                  }
                  Label_num_times.getComponent(Label).string = _this19._player.fireTimes + "s";
                })).start();
                _this19._player.cannonStatus = FishDef.CannonStatus.SPECIAL_READY;
              }).start();
            }).start();
          };
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var tipNode, gunNode;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this19.loadTipPro();
                case 2:
                  tipNode = _context3.sent;
                  _context3.next = 5;
                  return loadGunPro();
                case 5:
                  gunNode = _context3.sent;
                  aniPro(tipNode, gunNode);
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }))();
        }
        //    //加载特殊炮
        ;

        _proto.loadSpecialCannon = function loadSpecialCannon(cannonType, pos) {
          var gunSpecialName = "Node_gunSpecial" + this._player.uid;
          if (this._player.cannonType == cannonType || this.ndCannon.getChildByName(gunSpecialName) || this.node.parent.parent.getChildByName(gunSpecialName) || this._player.cannonStatus != FishDef.CannonStatus.NOMAL_READY) {
            //            //防止同时加载多个特殊炮
            return;
          }
          this._player.cannonStatus = FishDef.CannonStatus.SPECIAL_LOAD;
          this._lastCannonType = this._player.cannonType;
          this._player.cannonType = cannonType;
          if (FishDataMgr.myUid == this._player.uid) {
            this.EmitEvent(FishDef.Event.PLAYER_LOCK_FISH);
            if (cannonType == FishDef.CannonType.special_leiShe || cannonType == FishDef.CannonType.special_dianZhuan) {
              FishDataMgr.isLockMask = true;
            }
          }
          switch (cannonType) {
            case FishDef.CannonType.special_leiShe:
              {
                //                //镭射炮
                this.loadSpecial_leiShe(cannonType, pos);
                break;
              }
            case FishDef.CannonType.special_leiTingHuoPao:
              {
                //                //雷霆火炮
                this.loadSpecial_leiTingHuoPao(cannonType);
                break;
              }
            case FishDef.CannonType.special_dianZhuan:
              {
                //                //电钻
                this.loadSpecial_drill(cannonType, pos);
                break;
              }
          }
        }
        //    //! 播放开火动画
        ;

        _proto.PlayFireAni = function PlayFireAni(bulletType) {
          bulletType = bulletType || this._player.cannonType;
          //        // //gts.Debug.Log("==OnRecvFishCatch==播放开火动画---");
          switch (bulletType) {
            case FishDef.CannonType.special_leiTingHuoPao:
            case FishDef.CannonType.special_leiShe:
            case FishDef.CannonType.special_dianZhuan:
              {
                //                // //gts.Debug.Log("---OnRecvFishCatch--playSpecialFire---");
                this.playSpecialFire(bulletType);
                break;
              }
            default:
              {
                var gunSpine = this._cannonBody.getComponent(sp.Skeleton);
                gunSpine.setAnimation(0, "gun_" + bulletType + "_shot", false);
                gunSpine.addAnimation(0, "gun_" + bulletType + "_wait", false);
                gunSpine.setMix("gun_" + bulletType + "_shot", "gun_" + bulletType + "_wait", 0.05);
                //                // gts.Debug.Log("=====DoExchangeCannonBody==gun_==_open=00====");
                break;
              }
          }
        }
        //    //换炮
        ;

        _proto.DoExchangeCannonBody = function DoExchangeCannonBody() {
          if (this._cannonBody) {
            this._cannonBody.active = true;
            var gunSpine = this._cannonBody.getComponent(sp.Skeleton);
            gts.Debug.Log("=====DoExchangeCannonBody==gun_==_open=====");
            var curAnimation = gunSpine.animation;
            gunSpine.setAnimation(0, "gun_" + this._player.cannonType + "_open", false);
            gunSpine.addAnimation(0, "gun_" + this._player.cannonType + "_wait", false);
            if (curAnimation != "") {
              gunSpine.setMix(curAnimation, "gun_" + this._player.cannonType + "_open", 0.05);
            }
            FishSound.PlaySound(FishDef.Sound.CHANGE_GUN);
            this._player.cannonStatus = FishDef.CannonStatus.NOMAL_READY;
          }
        };
        _proto.LoadCannonBody = function LoadCannonBody(cannonType) {
          //        // gts.Debug.Log("LoadCannonBody---切换到普通炮");
          var player = this._player;
          if (player) {
            var prefab = this._resHolder ? this._resHolder.CannonBodyWithType(cannonType) : null;
            if (prefab) {
              var clone = instantiate(prefab);
              clone.setParent(this.ndCannon);
              this._cannonBody = clone;
              var gunSpine = this._cannonBody.getComponent(sp.Skeleton);
              gunSpine.setAnimation(0, "gun_" + cannonType + "_open", false);
              gunSpine.addAnimation(0, "gun_" + cannonType + "_wait", false);
              gunSpine.setMix("gun_" + cannonType + "_open", "gun_" + cannonType + "_wait", 0.05);
              var Node_gunSpecial = this.ndCannon.getChildByName("Node_gunSpecial" + this._player.uid);
              if (Node_gunSpecial || this._player.cannonStatus == FishDef.CannonStatus.SPECIAL_LOAD || this._player.cannonStatus > FishDef.CannonStatus.NOMAL_READY) {
                this._cannonBody.active = false;
              } else {
                player.cannonStatus = FishDef.CannonStatus.NOMAL_READY;
              }
              this.ndCannon.angle = this.node.getPosition().y > 0 ? -180 : 0;
            }
          }
        };
        _createClass(UIFishPlayer, [{
          key: "ndPlaying",
          get: function get() {
            if (!this._ndPlaying) {
              this._ndPlaying = find("playing", this.node);
            }
            return this._ndPlaying;
          }
        }, {
          key: "ndFlipY",
          get: function get() {
            if (!this._ndFlipY) {
              this._ndFlipY = find("playing/flip_node", this.node);
            }
            return this._ndFlipY;
          }
        }, {
          key: "flipYNodes",
          get: function get() {
            if (!this._flipYNodes) {
              this._flipYNodes = [];
              this._flipYNodes.push(find("playing/flip_node"));
              this._flipYNodes.push(find("empty"));
            }
            return this._flipYNodes;
          }
        }, {
          key: "ndEmpty",
          get: function get() {
            if (!this._ndEmpty) {
              this._ndEmpty = find("empty", this.node);
            }
            return this._ndEmpty;
          }
        }, {
          key: "labCoin",
          get: function get() {
            if (!this._labCoin) {
              this._labCoin = find("head/lab_coin", this.ndFlipY);
            }
            return this._labCoin;
          }
        }, {
          key: "labUseCoin",
          get: function get() {
            if (!this._labUseCoin) {
              this._labUseCoin = find("bg_buttons/lab_use", this.ndFlipY);
            }
            return this._labUseCoin;
          }
        }, {
          key: "labNickName",
          get: function get() {
            if (!this._labNickName) {
              this._labNickName = find("head/lab_nick_name", this.ndFlipY);
            }
            return this._labNickName;
          }
        }, {
          key: "ndCannon",
          get: function get() {
            if (!this._ndCannon) {
              this._ndCannon = find("cannon", this.ndPlaying);
            }
            return this._ndCannon;
          }
        }, {
          key: "ndCannonBase",
          get: function get() {
            if (!this._ndCannonBase) {
              this._ndCannonBase = find("flip_node/cannon_base", this.ndPlaying);
            }
            return this._ndCannonBase;
          }
        }, {
          key: "btnAdd",
          get: function get() {
            if (!this._btnAdd) {
              this._btnAdd = find("bg_buttons/btn_add", this.ndFlipY);
            }
            return this._btnAdd;
          }
        }, {
          key: "btnCut",
          get: function get() {
            if (!this._btnCut) {
              this._btnCut = find("bg_buttons/btn_cut", this.ndFlipY);
            }
            return this._btnCut;
          }
        }, {
          key: "atIdx",
          get: function get() {
            return this._atIdx;
          },
          set: function set(value) {
            this._atIdx = value;
          }
        }, {
          key: "resHolder",
          set: function set(value) {
            this._resHolder = value;
          }
        }, {
          key: "isMySelf",
          get: function get() {
            return this._player ? this._player.uid == FishDataMgr.myUid : false;
          }
        }, {
          key: "allowExchangeCannon",
          get: function get() {
            var allow = false;
            if (this._player && this._player.cannonType < FishDef.CannonType.special) {
              allow = true;
            }
            return allow;
          }
        }, {
          key: "lnkNodesVisible",
          set: function set(value) {
            for (var i = 0; i < this._lnkNodes.length; ++i) {
              GUtil.NodeVisible(this._lnkNodes[i], value);
            }
          }
        }, {
          key: "empty",
          set: function set(value) {
            GUtil.NodeVisible(this.ndEmpty, value);
            GUtil.NodeVisible(this.ndPlaying, !value);
            this.lnkNodesVisible = !value;
          }
        }]);
        return UIFishPlayer;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labsParent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "labsDstParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "staticLabsParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cannon_effect_auto", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cannon_effect_lock", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "head", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_goldFont_myself", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_cannonBase", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefabGoldTip", [_dec10], {
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

System.register("chunks:///_virtual/UIFishSettings.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoEventNode.ts', './FishDataMgr.ts', './FishDef.ts', './FishMsgSender.ts', './FishSound.ts', './Common.ts', './I18n.ts', './FishCfgMgr.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, Sprite, Toggle, tween, v3, UIOpacity, AutoEventNode, FishDataMgr, FishDef, FishMsgSender, FishSound, Common, i18n, FishCfgMgr;
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
      Toggle = module.Toggle;
      tween = module.tween;
      v3 = module.v3;
      UIOpacity = module.UIOpacity;
    }, function (module) {
      AutoEventNode = module.default;
    }, function (module) {
      FishDataMgr = module.default;
    }, function (module) {
      FishDef = module.FishDef;
    }, function (module) {
      FishMsgSender = module.default;
    }, function (module) {
      FishSound = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      FishCfgMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "4207ckKnRpFP5zY32f0ttlV", "UIFishSettings", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIFishSettings = exports('default', (_dec = ccclass("UIFishSettings"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_AutoEventNode) {
        _inheritsLoose(UIFishSettings, _AutoEventNode);
        function UIFishSettings() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _AutoEventNode.call.apply(_AutoEventNode, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "btnSettings", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnExit", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSound", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnMusic", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnHelper", _descriptor5, _assertThisInitialized(_this));
          // @property({ displayName: "自动关闭时间" })
          // autoCloseTime: number = 6;
          // @property({ displayName: "动画时间" })
          // aniDuration: number = 0.2;
          _initializerDefineProperty(_this, "sprSoundMute", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sprMusicMute", _descriptor7, _assertThisInitialized(_this));
          //    // LIFE-CYCLE CALLBACKS:
          _initializerDefineProperty(_this, "mask", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "buttons", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_test", _descriptor10, _assertThisInitialized(_this));
          //    // onLoad () {}
          _this._visible = false;
          _this.sprSoundNor = null;
          _this.sprMusicNor = null;
          return _this;
        }
        var _proto = UIFishSettings.prototype;
        _proto.UpdateBtnFrame = function UpdateBtnFrame(btnNode, value, frames) {
          var spr = btnNode ? btnNode.getComponent(Sprite) : null;
          if (spr) {
            spr.spriteFrame = value ? frames.mute : frames.nor;
          }
        };
        _proto.GetSprframe = function GetSprframe(node) {
          var spr = node ? node.getComponent(Sprite) : null;
          return spr ? spr.spriteFrame : null;
        };
        _proto.start = function start() {
          var _this2 = this;
          this.mask.active = false;
          this.sprSoundNor = this.GetSprframe(this.btnSound);
          this.sprMusicNor = this.GetSprframe(this.btnMusic);
          gts.UI.OnClick(this.btnSettings, function () {
            _this2.SetUIVisible(!_this2._visible);
          }, this);
          this.mask.on("click", function () {
            _this2.SetUIVisible(false);
          });
          this.btnExit.on(Node.EventType.TOUCH_END, function () {
            if (FishDataMgr.isFire() || FishDataMgr.myInfo && FishDataMgr.myInfo.cannonType > FishDef.CannonType.special) {
              Common.showTip(i18n.lang.fishTip.noAway);
              return;
            }
            //                //! 发送离开消息
            FishMsgSender.Send_Leave();
            _this2.EmitEvent(FishDef.Event.EXIT_GAME);
          }, this);
          this.btnSound.on(Node.EventType.TOUCH_END, function () {
            FishSound.soundMute = !FishSound.soundMute;
            _this2.UpdateBtnFrame(_this2.btnSound, FishSound.soundMute, {
              nor: _this2.sprSoundNor,
              mute: _this2.sprSoundMute
            });
          }, this);
          this.btnMusic.on(Node.EventType.TOUCH_END, function () {
            FishSound.bgmMute = !FishSound.bgmMute;
            _this2.UpdateBtnFrame(_this2.btnMusic, FishSound.bgmMute, {
              nor: _this2.sprMusicNor,
              mute: _this2.sprMusicMute
            });
          }, this);
          this.btnHelper.on(Node.EventType.TOUCH_END, function () {
            _this2.EmitEvent(FishDef.Event.OPEN_HELPER);
          }, this);
          this.UpdateBtnFrame(this.btnSound, FishSound.soundMute, {
            nor: this.sprSoundNor,
            mute: this.sprSoundMute
          });
          this.UpdateBtnFrame(this.btnMusic, FishSound.bgmMute, {
            nor: this.sprMusicNor,
            mute: this.sprMusicMute
          });
        };
        _proto.SetUIVisible = function SetUIVisible(visible) {
          this._visible = visible;
          if (visible) {
            this.btnSettings.getComponent(Toggle).isChecked = true;
            this.mask.active = true;
            tween(this.node).to(0.15, {
              scale: v3(this.node.scale.x, 1.2, 1)
            }).to(0.05, {
              scale: v3(this.node.scale.x, 1, 1)
            }).start();
            this.buttons.active = true;
            tween(this.buttons.getComponent(UIOpacity)).stop().delay(0.2).to(0.1, {
              opacity: 255
            }).start();
          } else {
            this.btnSettings.getComponent(Toggle).isChecked = false;
            this.mask.active = false;
            tween(this.node).stop().to(0.05, {
              scale: v3(this.node.scale.x, 1.2, 1)
            }).to(0.15, {
              scale: v3(this.node.scale.x, 0, 1)
            }).start();
            tween(this.buttons.getComponent(UIOpacity)).stop().to(0.25, {
              opacity: 0
            }).start();
          }
          this.Node_test.active = visible && FishCfgMgr.isOpenDebug;
        };
        return UIFishSettings;
      }(AutoEventNode), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "btnSettings", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnExit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnSound", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnMusic", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "btnHelper", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sprSoundMute", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprMusicMute", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "buttons", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_test", [_dec11], {
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

System.register("chunks:///_virtual/UIItemFishInfo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './GUtil.ts', './FishConfig.ts', './FishDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, UIOpacity, Label, Prefab, instantiate, v3, SkinnedMeshRenderer, MeshRenderer, Light, SkeletalAnimation, SpriteAtlas, UITransform, Component, AutoChangeParent, GUtil, FishCfg, FishDef;
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
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      SkinnedMeshRenderer = module.SkinnedMeshRenderer;
      MeshRenderer = module.MeshRenderer;
      Light = module.Light;
      SkeletalAnimation = module.SkeletalAnimation;
      SpriteAtlas = module.SpriteAtlas;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      FishCfg = module.FishCfg;
    }, function (module) {
      FishDef = module.FishDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "606c8nTMi1OaZXB5m9VbYsh", "UIItemFishInfo", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIItemFishInfo = exports('default', (_dec = ccclass("UIItemFishInfo"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property({
        type: Node,
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIItemFishInfo, _Component);
        function UIItemFishInfo() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "labRate", _descriptor, _assertThisInitialized(_this));
          //    // @property(gts.FrameAnimation)
          _this.animation = null;
          _initializerDefineProperty(_this, "aniRoot", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeFishsParent", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nodeLabsParent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_animation", _descriptor5, _assertThisInitialized(_this));
          _this._gtItem = null;
          return _this;
        }
        var _proto = UIItemFishInfo.prototype;
        _proto.start = function start() {
          var _this2 = this;
          AutoChangeParent.Bind(this.aniRoot, this.nodeFishsParent, true).OnUpdateNotify(function (dt) {
            _this2.aniRoot.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
            _this2.labRate.getComponent(UIOpacity).opacity = _this2.node.getComponent(UIOpacity).opacity;
          }, this);
          AutoChangeParent.Bind(this.labRate, this.nodeLabsParent, true);
          if (this.item) {
            this.item.OnDataChangedNotify(function () {
              _this2.UpdateUI();
            }, this);
            this.item.OnHideNotify(function () {
              _this2.node.active = false;
            }, this);
            this.UpdateUI();
          }
          GUtil.SetLabCacheMode(this.labRate, Label.CacheMode.CHAR);
        };
        _proto.UpdateUI = function UpdateUI() {
          var tmpdata = this.item.data;
          //        //typeof tmpdata === "string" || typeof tmpdata === "number"

          this.node.active = true;
          this.node.getComponent(UIOpacity).opacity = 255;
          if (typeof tmpdata === "object") {
            var nId = Number(tmpdata.id);
            var data = FishCfg.data[nId];
            this.LoadAnimation(data);
            var strReward = data.RewardMin == data.RewardMax ? "x" + data.RewardMin : "x" + data.RewardMin + "-" + data.RewardMax;
            gts.UI.SetLab(this.labRate, data ? strReward : "Fish " + tmpdata);
          }
        };
        _proto.loadFbx = function loadFbx(fishID) {
          return new Promise(function (resolve, reject) {
            FishDef.Util.LoadResInBundle("prefab/fbxPrefab/" + fishID, Prefab, function (err, prefab) {
              if (err || !prefab) {
                reject(null);
                return;
              }
              resolve(prefab);
            });
          });
        };
        _proto.LoadAnimation = function LoadAnimation(data) {
          var _this3 = this;
          if (!data || !this.aniRoot) {
            gts.Debug.LogErr("UIItemFishInfo:LoadAnimation data is nil!!!");
            return;
          }
          var arrScale = {
            105: 10,
            108: 20,
            112: 8,
            113: 10,
            118: 8,
            120: 40,
            121: 40,
            123: 12,
            125: 7,
            126: 10
          };

          // gts.Debug.LogErr(`UIItemFishInfo:LoadAnimation ==`);
          this.loadFbx(data.ID).then(function (prefab) {
            var fishBody = instantiate(prefab);
            fishBody.position = v3(0, 40, 0);
            _this3.aniRoot.removeAllChildren();
            _this3.aniRoot.addChild(fishBody);
            var scale = arrScale["" + data.ID];
            scale = scale ? scale : 15;
            var rootNrode = fishBody.getChildByName("RootNode");
            rootNrode = rootNrode || fishBody;
            rootNrode.getChildByName("body").getComponent(SkinnedMeshRenderer).shadowCastingMode = MeshRenderer.ShadowCastingMode.OFF;
            var cLight = fishBody.getComponent(Light);
            if (cLight) {
              cLight.destroy();
            }
            fishBody.scale = v3(scale, scale, scale);
            var _SkeletonAnimation = fishBody.getComponent(SkeletalAnimation);
            if (_SkeletonAnimation) {
              _SkeletonAnimation.play();
            }
          }, function () {
            var arrScaleAni = {
              113: 0.75,
              114: 0.75,
              115: 0.75,
              128: 0.5
            };
            _this3.aniRoot.removeAllChildren();
            var newNode = instantiate(_this3._animation);
            //@ts-ignore
            _this3.node.getComponent(gts.FrameAnimation);
            //@ts-ignore
            _this3.animation = newNode.getComponent(gts.FrameAnimation);
            //@ts-ignore
            _this3.aniRoot.addChild(_this3.animation.node);
            //                // gts.Debug.Log(`fisi info:${JSON.stringify(data)}`);
            var scale = data && data.Scale ? data.Scale : 1;
            _this3.aniRoot.scale = v3(scale, scale, 1);
            //                //! 加载图集
            var fixedId = Number(data.ID) - FishCfg.StartID + 1;
            var atlasName = "f" + fixedId;
            var fixedSID = gts.Str.FmtStr("fish{0:M2}", fixedId);
            var atlasUrl = "textures/fish/" + atlasName;
            FishDef.Util.LoadResInBundle(atlasUrl, SpriteAtlas, function (err, atlas) {
              //                    // gts.Debug.LogInfo(`${err ? err : '加载图集完成:' + data.atlas}`);
              if (atlas) {
                _this3.animation.atlas = atlas;
                _this3.animation.frameCnt = atlas.getSpriteFrames().length;
                _this3.animation.frameNameFmt = fixedSID + "_{0:M2}", _this3.animation.duration = FishCfg.FrameDt;
                _this3.animation.startIdx = FishCfg.FrameStartIdx;
                _this3.animation.SetDurationType(gts.DurationType.SINGLE_FRAME);
                _this3.animation.Play(-1);

                //                        //大小调整
                var sprFrame = atlas.getSpriteFrame(fixedSID + "_00");
                if (arrScaleAni[data.ID]) {
                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).width = arrScaleAni[data.ID] * 200;
                  var scaleWH = sprFrame.rect.height / sprFrame.rect.width;

                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).height = scaleWH * _this3.animation.node.getComponent(UITransform).width;
                } else if (sprFrame.rect.height > 90 || sprFrame.rect.width > 130) {
                  var _scaleWH = sprFrame.rect.height / sprFrame.rect.width;
                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).width = 220;
                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).height = _scaleWH * _this3.animation.node.getComponent(UITransform).width;
                } else {
                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).width = sprFrame.rect.width;
                  //@ts-ignore
                  _this3.animation.node.getComponent(UITransform).height = sprFrame.rect.height;
                }
              }
            });
          });
        };
        _createClass(UIItemFishInfo, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return UIItemFishInfo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labRate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "aniRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nodeFishsParent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nodeLabsParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_animation", [_dec6], {
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

(function(r) {
  r('virtual:///prerequisite-imports/FishGame', 'chunks:///_virtual/FishGame'); 
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