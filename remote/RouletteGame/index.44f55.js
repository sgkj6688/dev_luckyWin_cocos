System.register("chunks:///_virtual/label3D4.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
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
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "f862axETsdAdabV7B0R6fsJ", "label3D", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var mChipName = {
        X_100: 100,
        X_1K: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000
      };
      /**
       * 面额文字相对面片原始边长的最大宽、高。
       * 文字贴图整张铺在一个方形面片上：不按贴图比例调整时，字符多的面额（如 500K）会被横向压扁，
       * 字符少的（如 1K）又偏大。宽度上限略大于 1 是为了让长面额占满筹码内圈，高度上限让短面额不顶到内圈边缘。
       * 取值与 BlackJack 的筹码文字一致（在真机上对比后选定）。
       */
      var TEXT_MAX_WIDTH = 1.25;
      var TEXT_MAX_HEIGHT = 0.82;
      var label3D = exports('label3D', (_dec = ccclass("label3D"), _dec2 = property({
        type: Label
      }), _dec3 = property(), _dec4 = property({
        visible: false
      }), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
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
          // 已写入材质的文字贴图及其底层贴图；两者都未变化时无需每帧重设材质属性。
          _this.appliedTexture = null;
          _this.appliedGfxTexture = null;
          /** 需要跟随同一文字贴图的共享材质（下注区同面额筹码的标签面片），由创建方设置。 */
          _this.mirrorMaterial = null;
          /**
           * 面片调整前的原始边长，首次 fitText 时记录。序列化是为了让 instantiate 把它带到克隆体：
           * 克隆体的 start 会再调一次 fitText，必须仍按原始边长计算，不能在已调整的缩放上再乘一次。
           */
          _initializerDefineProperty(_this, "baseSide", _descriptor3, _assertThisInitialized(_this));
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
         * 只在运行时做：编辑器里改动缩放会被存进场景。下注筹码的克隆模板取自场景内筹码，沿用这里调整后的缩放。
         */;
        _proto.fitText = function fitText() {
          // 文字尺寸要等 Label 排版后才有，这里立即排一次；场景里存的尺寸是旧字样的。
          this.label.updateRenderData(true);
          var size = this.label.node.getComponent(UITransform).contentSize;
          if (!(size.width > 0 && size.height > 0)) return;
          var aspect = size.width / size.height;
          if (!(this.baseSide > 0)) this.baseSide = this.node.scale.x;
          var side = this.baseSide;
          var width = Math.min(TEXT_MAX_WIDTH * side, TEXT_MAX_HEIGHT * side * aspect);
          this.node.setScale(width, width / aspect, this.node.scale.z);
        };
        _proto.update = function update(deltaTime) {
          var _this$meshRender$mate, _this$mirrorMaterial;
          if (!this.node.parent.active) {
            return;
          }
          var spriteFrame = this.label.spriteFrame;
          var texture = spriteFrame == null ? void 0 : spriteFrame.texture;
          if (!texture) {
            return;
          }
          // Label 改字或重排时会在同一个 Texture2D 内重建底层贴图，材质绑定的仍是旧句柄，所以两者都要比较。
          var gfxTexture = texture.getGFXTexture();
          if (texture === this.appliedTexture && gfxTexture === this.appliedGfxTexture) {
            return;
          }
          this.meshRender = this.node.getComponent(MeshRenderer);
          (_this$meshRender$mate = this.meshRender.material) == null || _this$meshRender$mate.setProperty("mainTexture", texture);
          (_this$mirrorMaterial = this.mirrorMaterial) == null || _this$mirrorMaterial.setProperty("mainTexture", texture);
          this.appliedTexture = texture;
          this.appliedGfxTexture = gfxTexture;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "baseSide", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Roulette_area.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RouletteUtils.ts', './EventManager.ts', './RouletteDef.ts', './RouletteModel.ts', './Common.ts', './I18n.ts', './RouletteCtrl.ts', './label3D4.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Label, Node, Sprite, SpriteFrame, MeshRenderer, Camera, view, game, Game, director, Director, Tween, isValid, ParticleUtils, MeshCollider, tween, instantiate, v3, Animation, Component, Material, RouletteUtils, EventManager, eRunStatus, eEvent, eSound, RouletteModel, Common, i18n, RouletteCtrl, label3D;
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
      Label = module.Label;
      Node = module.Node;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      MeshRenderer = module.MeshRenderer;
      Camera = module.Camera;
      view = module.view;
      game = module.game;
      Game = module.Game;
      director = module.director;
      Director = module.Director;
      Tween = module.Tween;
      isValid = module.isValid;
      ParticleUtils = module.ParticleUtils;
      MeshCollider = module.MeshCollider;
      tween = module.tween;
      instantiate = module.instantiate;
      v3 = module.v3;
      Animation = module.Animation;
      Component = module.Component;
      Material = module.Material;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      RouletteCtrl = module.RouletteCtrl;
    }, function (module) {
      label3D = module.label3D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;
      cclegacy._RF.push({}, "0f626/GCfpARrXi0NhHPkcj", "Roulette_area", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var arrTier = [16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 33, 27];
      var arrOrphelins = [1, 20, 14, 31, 9, 6, 34, 17];
      var arrVoisins = [22, 18, 29, 7, 28, 19, 4, 21, 2, 25, 12, 35, 3, 26, 0, 32, 15];
      var arrZero = [12, 35, 3, 26, 0, 32, 15];
      var arrRed = [1, 14, 9, 18, 7, 12, 3, 32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16];
      var arrBlack = [20, 31, 22, 29, 28, 35, 26, 15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33];
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var chipListDef = {
        X_100: 100,
        X_1K: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000
      };

      // 每个面额最多保留的回收筹码数；超出部分销毁，避免一次超大注单让池永久占用内存。
      var CHIP_POOL_MAX = 200;
      // 下注桌面上筹码的缩放。原为 0.75，直径只有一格宽度的一半、面额难认；1.2 约占格宽的八成（真机确认）。
      // 同一位置的筹码是重叠摆放的，放大不影响叠放；再大会盖住相邻格子。
      var CHIP_SCALE = 1.2;
      var arrTexture = {
        X_100: "T_chouma_100_Base",
        X_1K: "T_chouma_1K_Base",
        X_10K: "T_chouma_10K_Base",
        X_50K: "T_chouma_50K_Base",
        X_100K: "T_chouma_100K_Base",
        X_500K: "T_chouma_500K_Base",
        X_1M: "T_chouma_1M_Base",
        X_5M: "T_chouma_5M_Base"
      };
      var Roulette_area = exports('Roulette_area', (_dec = ccclass("RouletteGame/Roulette_area"), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Sprite), _dec19 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Roulette_area, _Component);
        function Roulette_area() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_betRound", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_area_0", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_area_1", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_touchArea", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipTag", _descriptor5, _assertThisInitialized(_this));
          _this.selChip = null;
          _initializerDefineProperty(_this, "Node_chipRoot", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_lunpanchangjing", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_yaozhong", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "resultNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_win", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "idle", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "star", _descriptor12, _assertThisInitialized(_this));
          // @property(Node)
          // Node_win_quad_0: Node = null;
          // @property(Node)
          // Node_win_quad_other: Node = null;
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betDetail", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailItem", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "detailContent", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "betDetailTag", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnDetailSpr", _descriptor18, _assertThisInitialized(_this));
          // @property(Texture2D)
          // lightTexture_0: Texture2D = null;
          _this.arrBetAreaSpriteFrame = {};
          _this.arrChipSpriteFrame = {};
          _this.betRoundCamera = null;
          _this.betRoundTexture = null;
          _this.betRoundActive = false;
          // 点击开始到请求真正发出之间的窗口；与请求在途同样视为提交中。
          _this.startPending = false;
          // 最近一次承载开始动画的按钮节点，退出时据此停止动画。
          _this.startButton = null;
          // 非空表示正在批量下注，记录本批触达的区域；合并、明细、音效和余额通知推迟到批末各做一次。
          _this.betBatchAreas = null;
          _this.chipTemplates = {};
          _this.chipMaterials = [];
          // 按面额回收的筹码节点，不在场景树内。
          _this.chipPool = {};
          return _this;
        }
        var _proto = Roulette_area.prototype;
        /**
         * 本局进行中、开始已点击或下注请求在途/结果不确定时冻结筹码编辑和再次开始，
         * 保证本地筹码与已提交的下注一致，且同一局只提交一次。
         */
        _proto.isBetLocked = function isBetLocked() {
          return RouletteModel.instance.gameStatus != eRunStatus.NONE || this.startPending || RouletteCtrl.instance.isBetWaiting;
        }

        /**
         * 开始已点击但请求还没发出，或下注请求在途且仍可能等到回复。
         * 结果不确定不算在内：那一局不会再有开奖，等它的一方（提前起步的开奖镜头）应当放弃。
         */;
        _proto.isStartSubmitting = function isStartSubmitting() {
          return this.startPending || RouletteCtrl.instance.isReqBet && !RouletteCtrl.instance.betResultUnknown;
        };
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          RouletteUtils.instance.asyncLoadDir("model/betArea", SpriteFrame, function (err, arrSpriteFrame) {
            if (!err) {
              for (var _iterator = _createForOfIteratorHelperLoose(arrSpriteFrame), _step; !(_step = _iterator()).done;) {
                var _spriteFrame2 = _step.value;
                _this2.arrBetAreaSpriteFrame[_spriteFrame2.name] = _spriteFrame2;
              }
              var arrPos = [0, 32, 26, 3, 35, 24, 5, 10, 23, 8, 30, "tier", "orphelins", "voisins", "zero"];
              for (var _i = 0, _arrPos = arrPos; _i < _arrPos.length; _i++) {
                var pos = _arrPos[_i];
                var _spriteFrame = _this2.arrBetAreaSpriteFrame["" + pos];
                var nodeName = "Quad_" + pos;
                var _meshRender = _this2.Node_area_0.getChildByName(nodeName).getComponent(MeshRenderer);
                _meshRender.material.setProperty("mainTexture", _spriteFrame.texture);
              }

              //0
              var meshRender = _this2.Node_area_1.getChildByName("Quad_0").getComponent(MeshRenderer);
              var spriteFrame = _this2.arrBetAreaSpriteFrame["0-1"];
              meshRender.material.setProperty("mainTexture", spriteFrame.texture);

              //+-
              var Quad_add = _this2.node.getChildByName("Quad_add");
              var mRender = Quad_add.getComponent(MeshRenderer);
              var sprFrame = _this2.arrBetAreaSpriteFrame["+"];
              mRender.material.setProperty("mainTexture", sprFrame.texture);
              var Quad_redus = _this2.node.getChildByName("Quad_redus");
              mRender = Quad_redus.getComponent(MeshRenderer);
              sprFrame = _this2.arrBetAreaSpriteFrame["+"];
              mRender.material.setProperty("mainTexture", sprFrame.texture);

              // // //
              // mRender = this.Node_win_quad_0.getComponent(MeshRenderer);
              // sprFrame = this.arrBetAreaSpriteFrame[`0jin`];
              // mRender.material.setProperty("mainTexture", sprFrame.texture);

              // mRender = this.Node_win_quad_other.getComponent(MeshRenderer);
              // sprFrame = this.arrBetAreaSpriteFrame[`36jin`];
              // mRender.material.setProperty("mainTexture", sprFrame.texture);
            }
          });

          RouletteUtils.instance.asyncLoadDir("model/chipTexture", SpriteFrame, function (err, arrSpriteFrame) {
            if (!err) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step2; !(_step2 = _iterator2()).done;) {
                var _spriteFrame3 = _step2.value;
                _this2.arrChipSpriteFrame[_spriteFrame3.name] = _spriteFrame3;
              }
              var keys = Object.keys(arrTexture);
              for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
                var key = _keys[_i2];
                var chipNode = _this2.X_lunpanchangjing.getChildByName(key);
                if (chipNode) {
                  var spriteFrame = _this2.arrChipSpriteFrame[arrTexture[key]];
                  var meshRender = chipNode.getComponent(MeshRenderer);
                  meshRender.material.setProperty("mainTexture", spriteFrame.texture);
                }
              }
            }
          });
          RouletteModel.instance._betRound = parseInt(this.Label_betRound.string);

          // 默认选中 1K 面额；选中标记在场景里摆在 100 上，要一并移过来。
          this.selChip = this.X_lunpanchangjing.getChildByName("X_1K");
          this.chipTag.position = this.selChip.position;
          // let mRender = this.chipTag.getComponent(MeshRenderer);
          // if (mRender) {
          //     mRender.material.setProperty("emissive", color(5, 29, 127));
          // }
        };

        _proto.start = function start() {
          // 场景里的下注格初始都是启用的全透明面片；进场先统一置为未高亮（停用渲染），原因见 setQuadLight。
          for (var _i3 = 0, _arr = [this.Node_area_0, this.Node_area_1].concat(this.Node_touchArea.children); _i3 < _arr.length; _i3++) {
            var root = _arr[_i3];
            for (var _iterator3 = _createForOfIteratorHelperLoose(root.children), _step3; !(_step3 = _iterator3()).done;) {
              var quad = _step3.value;
              RouletteUtils.instance.setQuadLight(quad.getComponent(MeshRenderer), false);
            }
          }
        };
        _proto.onEnable = function onEnable() {
          var _this$betRoundTexture;
          this.betRoundActive = true;
          EventManager.instance.on(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.on(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.on(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.on(eEvent.onMouseClick, this.onMouseClick, this);

          // EventManager.instance.on(RouletteDef.eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.on(eEvent.onGameEnd, this.onGameEnd, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onExitRoom, this);
          this.betRoundCamera = this.Label_betRound.node.scene.getComponentsInChildren(Camera).find(function (camera) {
            return camera.node.name === "Camera_u3d";
          }) || null;
          this.betRoundTexture = this.betRoundCamera && this.betRoundCamera.targetTexture;
          (_this$betRoundTexture = this.betRoundTexture) == null || _this$betRoundTexture.on("resize", this.refreshBetRoundTexture, this);
          view.on("canvas-resize", this.refreshBetRoundTexture, this);
          game.on(Game.EVENT_SHOW, this.refreshBetRoundTexture, this);
          this.refreshBetRoundTexture();
        };
        _proto.onDisable = function onDisable() {
          var _this$betRoundTexture2;
          this.betRoundActive = false;
          EventManager.instance.off(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.off(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.off(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.off(eEvent.onMouseClick, this.onMouseClick, this);

          // EventManager.instance.off(RouletteDef.eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.off(eEvent.onGameEnd, this.onGameEnd, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onExitRoom, this);
          view.off("canvas-resize", this.refreshBetRoundTexture, this);
          game.off(Game.EVENT_SHOW, this.refreshBetRoundTexture, this);
          (_this$betRoundTexture2 = this.betRoundTexture) == null || _this$betRoundTexture2.off("resize", this.refreshBetRoundTexture, this);
          director.off(Director.EVENT_AFTER_DRAW, this.finishBetRoundDraw, this);
          this.finishBetRoundDraw();
          this.betRoundCamera = null;
          this.betRoundTexture = null;
        }

        // 离开房间到场景销毁之间仍有数帧；停掉自动续投定时器和开始、落珠动画，避免离开后继续下注或推进牌局。
        ;

        _proto.onExitRoom = function onExitRoom() {
          this.unscheduleAllCallbacks();
          if (this.startButton) Tween.stopAllByTarget(this.startButton);
          Tween.stopAllByTarget(this.X_yaozhong);
        };
        _proto.refreshBetRoundTexture = function refreshBetRoundTexture() {
          // enabledInHierarchy 要在 onEnable 返回后才生效，此处用显式生命周期状态允许首帧刷新。
          if (!this.betRoundActive || !isValid(this.node, true) || !isValid(this.betRoundCamera, true) || !this.betRoundTexture) return;
          // Label 的脏数据在本帧绘制前更新；绘制完成后停用离屏相机，保留 RT 中的文字。
          this.betRoundCamera.enabled = true;
          director.off(Director.EVENT_AFTER_DRAW, this.finishBetRoundDraw, this);
          director.once(Director.EVENT_AFTER_DRAW, this.finishBetRoundDraw, this);
        };
        _proto.finishBetRoundDraw = function finishBetRoundDraw() {
          if (isValid(this.betRoundCamera, true) && this.betRoundTexture) this.betRoundCamera.enabled = false;
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(target) {
          if (target.parent.name.match("Node_touchArea")) {
            if (target.parent.name.match("Node_touchArea_0") || target.parent.name.match("Node_touchArea_2")) {
              var arrNum = target.name.split("_");
              var iStart = parseInt(arrNum[1]);
              var isEnd = parseInt(arrNum[2]) + 1;
              for (var i = iStart; i < isEnd; i++) {
                var node = this.Node_area_1.getChildByName("Quad_" + i);
                this.showLight(node);
              }
            } else if (target.parent.name.match("Node_touchArea_3")) {
              switch (target.name) {
                case "Quad_0_1_2":
                case "Quad_0_2_3":
                  {
                    var _arrNum = target.name.split("_");
                    for (var _i4 = 1; _i4 < _arrNum.length; _i4++) {
                      var num = parseInt(_arrNum[_i4]);
                      var _node = this.Node_area_1.getChildByName("Quad_" + num);
                      this.showLight(_node);
                    }
                    break;
                  }
                default:
                  {
                    var _arrNum2 = target.name.split("_");
                    var _iStart = parseInt(_arrNum2[1]);
                    for (var _i5 = 0; _i5 < 2; _i5++) {
                      var _node2 = this.Node_area_1.getChildByName("Quad_" + (_iStart + _i5));
                      this.showLight(_node2);
                      _node2 = this.Node_area_1.getChildByName("Quad_" + (_iStart + _i5 + 3));
                      this.showLight(_node2);
                    }
                    break;
                  }
              }

              // let arrNum = target.name.split("_");
              // let iStart = parseInt(arrNum[1]);
              // let isEnd = parseInt(arrNum[2]) + 1;
              // for (let i = iStart; i < isEnd; i++) {
              //     let node = this.Node_area_1.getChildByName(`Quad_${i}`);
              //     this.showLight(node);
              // }
            } else if (target.parent.name.match("Node_touchArea_1")) {
              var _arrNum3 = target.name.split("_");
              var iNum_0 = parseInt(_arrNum3[1]);
              var iNum_1 = parseInt(_arrNum3[2]);
              var _node3 = this.Node_area_1.getChildByName("Quad_" + iNum_0);
              this.showLight(_node3);
              _node3 = this.Node_area_1.getChildByName("Quad_" + iNum_1);
              this.showLight(_node3);
            }
          } else if (target.parent.name.match("Node_area_1")) {
            switch (target.name) {
              case "Quad_even":
                {
                  for (var _i6 = 0; _i6 < 18; _i6++) {
                    var _index = 2 * _i6 + 2;
                    var _node4 = this.Node_area_1.getChildByName("Quad_" + _index);
                    this.showLight(_node4);
                  }
                  break;
                }
              case "Quad_odd":
                {
                  for (var _i7 = 0; _i7 < 18; _i7++) {
                    var _index2 = 2 * _i7 + 1;
                    var _node5 = this.Node_area_1.getChildByName("Quad_" + _index2);
                    this.showLight(_node5);
                  }
                  break;
                }
              case "Quad_red":
                {
                  for (var _i8 = 0, _arrRed = arrRed; _i8 < _arrRed.length; _i8++) {
                    var _num = _arrRed[_i8];
                    var _node6 = this.Node_area_1.getChildByName("Quad_" + _num);
                    this.showLight(_node6);
                  }
                  break;
                }
              case "Quad_black":
                {
                  for (var _i9 = 0, _arrBlack = arrBlack; _i9 < _arrBlack.length; _i9++) {
                    var _num2 = _arrBlack[_i9];
                    var _node7 = this.Node_area_1.getChildByName("Quad_" + _num2);
                    this.showLight(_node7);
                  }
                  break;
                }
              case "Quad_2to1_1":
              case "Quad_2to1_2":
              case "Quad_2to1_3":
                {
                  var _arrNum4 = target.name.split("_");
                  var _iStart2 = parseInt(_arrNum4[2]);
                  for (var _i10 = 0; _i10 < 12; _i10++) {
                    var _node8 = this.Node_area_1.getChildByName("Quad_" + (_iStart2 + 3 * _i10));
                    this.showLight(_node8);
                  }
                  break;
                }
              default:
                {
                  var _arrNum5 = target.name.split("_");
                  if (_arrNum5.length > 2) {
                    var _iStart3 = parseInt(_arrNum5[1]);
                    var _isEnd = parseInt(_arrNum5[2]) + 1;
                    for (var _i11 = _iStart3; _i11 < _isEnd; _i11++) {
                      var _node9 = this.Node_area_1.getChildByName("Quad_" + _i11);
                      this.showLight(_node9);
                    }
                  }
                  break;
                }
            }
          } else if (target.parent.name.match("Node_area_0")) {
            switch (target.name) {
              case "Quad_tier":
                {
                  for (var _i12 = 0, _arrTier = arrTier; _i12 < _arrTier.length; _i12++) {
                    var _num3 = _arrTier[_i12];
                    var _node10 = this.Node_area_0.getChildByName("Quad_" + _num3);
                    this.showLight(_node10);
                    _node10 = this.Node_area_1.getChildByName("Quad_" + _num3);
                    this.showLight(_node10);
                  }
                  break;
                }
              case "Quad_orphelins":
                {
                  for (var _i13 = 0, _arrOrphelins = arrOrphelins; _i13 < _arrOrphelins.length; _i13++) {
                    var _num4 = _arrOrphelins[_i13];
                    var _node11 = this.Node_area_0.getChildByName("Quad_" + _num4);
                    this.showLight(_node11);
                    _node11 = this.Node_area_1.getChildByName("Quad_" + _num4);
                    this.showLight(_node11);
                  }
                  break;
                }
              case "Quad_voisins":
                {
                  for (var _i14 = 0, _arrVoisins = arrVoisins; _i14 < _arrVoisins.length; _i14++) {
                    var _num5 = _arrVoisins[_i14];
                    var _node12 = this.Node_area_0.getChildByName("Quad_" + _num5);
                    this.showLight(_node12);
                    _node12 = this.Node_area_1.getChildByName("Quad_" + _num5);
                    this.showLight(_node12);
                  }
                  break;
                }
              case "Quad_zero":
                {
                  for (var _i15 = 0, _arrZero = arrZero; _i15 < _arrZero.length; _i15++) {
                    var _num6 = _arrZero[_i15];
                    var _node13 = this.Node_area_0.getChildByName("Quad_" + _num6);
                    this.showLight(_node13);
                    _node13 = this.Node_area_1.getChildByName("Quad_" + _num6);
                    this.showLight(_node13);
                  }
                  break;
                }
              default:
                {
                  var _arrNum6 = target.name.split("_");
                  var _num7 = parseInt(_arrNum6[1]);
                  for (var _i16 = 0; _i16 < arrIRound.length; _i16++) {
                    if (_num7 == arrIRound[_i16]) {
                      var _iStart4 = _i16 - RouletteModel.instance._betRound;
                      _iStart4 = _iStart4 < 0 ? _iStart4 + arrIRound.length : _iStart4;
                      for (var iIndex = 0; iIndex < 2 * RouletteModel.instance._betRound + 1; iIndex++) {
                        var iLeft = (_iStart4 + iIndex) % arrIRound.length;
                        var _node14 = this.Node_area_0.getChildByName("Quad_" + arrIRound[iLeft]);
                        this.showLight(_node14);
                        _node14 = this.Node_area_1.getChildByName("Quad_" + arrIRound[iLeft]);
                        this.showLight(_node14);
                      }
                      break;
                    }
                  }
                  break;
                }
            }
          }
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(target) {
          if (target.parent.name.match("Node_touchArea")) {
            if (target.parent.name.match("Node_touchArea_0") || target.parent.name.match("Node_touchArea_2")) {
              var arrNum = target.name.split("_");
              var iStart = parseInt(arrNum[1]);
              var isEnd = parseInt(arrNum[2]) + 1;
              for (var i = iStart; i < isEnd; i++) {
                var node = this.Node_area_1.getChildByName("Quad_" + i);
                this.showLight(node, false);
              }
            } else if (target.parent.name.match("Node_touchArea_3")) {
              switch (target.name) {
                case "Quad_0_1_2":
                case "Quad_0_2_3":
                  {
                    var _arrNum7 = target.name.split("_");
                    for (var _i17 = 1; _i17 < _arrNum7.length; _i17++) {
                      var num = parseInt(_arrNum7[_i17]);
                      var _node15 = this.Node_area_1.getChildByName("Quad_" + num);
                      this.showLight(_node15, false);
                    }
                    break;
                  }
                default:
                  {
                    gts.Debug.Log("==onMouseMoveOut=11=" + target.name);
                    var _arrNum8 = target.name.split("_");
                    var _iStart5 = parseInt(_arrNum8[1]);
                    for (var _i18 = 0; _i18 < 2; _i18++) {
                      var _node16 = this.Node_area_1.getChildByName("Quad_" + (_iStart5 + _i18));
                      this.showLight(_node16, false);
                      _node16 = this.Node_area_1.getChildByName("Quad_" + (_iStart5 + _i18 + 3));
                      this.showLight(_node16, false);
                    }
                    break;
                  }
              }

              // let arrNum = target.name.split("_");
              // let iStart = parseInt(arrNum[1]);
              // let isEnd = parseInt(arrNum[2]) + 1;
              // for (let i = iStart; i < isEnd; i++) {
              //     let node = this.Node_area_1.getChildByName(`Quad_${i}`);
              //     this.showLight(node, false);
              // }
            } else if (target.parent.name.match("Node_touchArea_1")) {
              var _arrNum9 = target.name.split("_");
              var iNum_0 = parseInt(_arrNum9[1]);
              var iNum_1 = parseInt(_arrNum9[2]);
              var _node17 = this.Node_area_1.getChildByName("Quad_" + iNum_0);
              this.showLight(_node17, false);
              _node17 = this.Node_area_1.getChildByName("Quad_" + iNum_1);
              this.showLight(_node17, false);
            }
          } else if (target.parent.name.match("Node_area_1")) {
            switch (target.name) {
              case "Quad_even":
                {
                  for (var _i19 = 0; _i19 < 18; _i19++) {
                    var _index3 = 2 * _i19 + 2;
                    var _node18 = this.Node_area_1.getChildByName("Quad_" + _index3);
                    this.showLight(_node18, false);
                  }
                  break;
                }
              case "Quad_odd":
                {
                  for (var _i20 = 0; _i20 < 18; _i20++) {
                    var _index4 = 2 * _i20 + 1;
                    var _node19 = this.Node_area_1.getChildByName("Quad_" + _index4);
                    this.showLight(_node19, false);
                  }
                  break;
                }
              case "Quad_red":
                {
                  for (var _i21 = 0, _arrRed2 = arrRed; _i21 < _arrRed2.length; _i21++) {
                    var _num8 = _arrRed2[_i21];
                    var _node20 = this.Node_area_1.getChildByName("Quad_" + _num8);
                    this.showLight(_node20, false);
                  }
                  break;
                }
              case "Quad_black":
                {
                  for (var _i22 = 0, _arrBlack2 = arrBlack; _i22 < _arrBlack2.length; _i22++) {
                    var _num9 = _arrBlack2[_i22];
                    var _node21 = this.Node_area_1.getChildByName("Quad_" + _num9);
                    this.showLight(_node21, false);
                  }
                  break;
                }
              case "Quad_2to1_1":
              case "Quad_2to1_2":
              case "Quad_2to1_3":
                {
                  var _arrNum10 = target.name.split("_");
                  var _iStart6 = parseInt(_arrNum10[2]);
                  for (var _i23 = 0; _i23 < 12; _i23++) {
                    var _node22 = this.Node_area_1.getChildByName("Quad_" + (_iStart6 + 3 * _i23));
                    this.showLight(_node22, false);
                  }
                  break;
                }
              default:
                {
                  var _arrNum11 = target.name.split("_");
                  if (_arrNum11.length > 2) {
                    var _iStart7 = parseInt(_arrNum11[1]);
                    var _isEnd2 = parseInt(_arrNum11[2]) + 1;
                    for (var _i24 = _iStart7; _i24 < _isEnd2; _i24++) {
                      var _node23 = this.Node_area_1.getChildByName("Quad_" + _i24);
                      this.showLight(_node23, false);
                    }
                  }
                  break;
                }
            }
          } else if (target.parent.name.match("Node_area_0")) {
            switch (target.name) {
              case "Quad_tier":
                {
                  for (var _i25 = 0, _arrTier2 = arrTier; _i25 < _arrTier2.length; _i25++) {
                    var _num10 = _arrTier2[_i25];
                    var _node24 = this.Node_area_0.getChildByName("Quad_" + _num10);
                    this.showLight(_node24, false);
                    _node24 = this.Node_area_1.getChildByName("Quad_" + _num10);
                    this.showLight(_node24, false);
                  }
                  break;
                }
              case "Quad_orphelins":
                {
                  for (var _i26 = 0, _arrOrphelins2 = arrOrphelins; _i26 < _arrOrphelins2.length; _i26++) {
                    var _num11 = _arrOrphelins2[_i26];
                    var _node25 = this.Node_area_0.getChildByName("Quad_" + _num11);
                    this.showLight(_node25, false);
                    _node25 = this.Node_area_1.getChildByName("Quad_" + _num11);
                    this.showLight(_node25, false);
                  }
                  break;
                }
              case "Quad_voisins":
                {
                  for (var _i27 = 0, _arrVoisins2 = arrVoisins; _i27 < _arrVoisins2.length; _i27++) {
                    var _num12 = _arrVoisins2[_i27];
                    var _node26 = this.Node_area_0.getChildByName("Quad_" + _num12);
                    this.showLight(_node26, false);
                    _node26 = this.Node_area_1.getChildByName("Quad_" + _num12);
                    this.showLight(_node26, false);
                  }
                  break;
                }
              case "Quad_zero":
                {
                  for (var _i28 = 0, _arrZero2 = arrZero; _i28 < _arrZero2.length; _i28++) {
                    var _num13 = _arrZero2[_i28];
                    var _node27 = this.Node_area_0.getChildByName("Quad_" + _num13);
                    this.showLight(_node27, false);
                    _node27 = this.Node_area_1.getChildByName("Quad_" + _num13);
                    this.showLight(_node27, false);
                  }
                  break;
                }
              default:
                {
                  var _arrNum12 = target.name.split("_");
                  var _num14 = parseInt(_arrNum12[1]);
                  for (var _i29 = 0; _i29 < arrIRound.length; _i29++) {
                    if (_num14 == arrIRound[_i29]) {
                      var _iStart8 = _i29 - RouletteModel.instance._betRound;
                      _iStart8 = _iStart8 < 0 ? _iStart8 + arrIRound.length : _iStart8;
                      for (var iIndex = 0; iIndex < 2 * RouletteModel.instance._betRound + 1; iIndex++) {
                        var iLeft = (_iStart8 + iIndex) % arrIRound.length;
                        var _node28 = this.Node_area_0.getChildByName("Quad_" + arrIRound[iLeft]);
                        this.showLight(_node28, false);
                        _node28 = this.Node_area_1.getChildByName("Quad_" + arrIRound[iLeft]);
                        this.showLight(_node28, false);
                      }
                      break;
                    }
                  }
                  break;
                }
            }
          }
        };
        _proto.onMouseDown = function onMouseDown(target) {
          switch (target.name) {
            case "X_quanzi":
              {
                if (this.isBetLocked()) {
                  return;
                }
                RouletteUtils.instance.playSound(eSound.Cancel);
                this.scheduleOnce(this.doClearBet, 3);
                break;
              }
          }
        };
        _proto.onMouseClick = function onMouseClick(target) {
          var _this3 = this;
          switch (target.name) {
            case "Quad_add":
              {
                RouletteModel.instance._betRound++;
                if (RouletteModel.instance._betRound > 18) {
                  RouletteModel.instance._betRound = 0;
                }
                this.Label_betRound.string = "" + RouletteModel.instance._betRound;
                this.refreshBetRoundTexture();
                RouletteUtils.instance.playSound(eSound.buttonClick);
                break;
              }
            case "Quad_redus":
              {
                RouletteModel.instance._betRound--;
                if (RouletteModel.instance._betRound < 0) {
                  RouletteModel.instance._betRound = 18;
                }
                this.Label_betRound.string = "" + RouletteModel.instance._betRound;
                this.refreshBetRoundTexture();
                RouletteUtils.instance.playSound(eSound.buttonClick);
                break;
              }
            case "X_quanzi":
              {
                //clear bet
                this.unschedule(this.doClearBet);
                if (this.isBetLocked()) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                RouletteUtils.instance.playSound(eSound.Cancel);
                var betInfo = RouletteModel.instance.betOrderList.pop();
                if (betInfo) {
                  this.returnBet(betInfo);
                } else if (this.Node_chipRoot.children.length > 0) {
                  this.recycleAllChips();
                  RouletteModel.instance.betOrderList = [];
                  RouletteModel.instance.betAreaList = {};
                  RouletteModel.instance.curTotalBet = 0;
                  this.detailContent.destroyAllChildren();
                }
                break;
              }
            case "X_kaishi1":
              {
                //2X
                if (this.isBetLocked()) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (RouletteModel.instance.betOrderBack.length == 0) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                RouletteUtils.instance.playSound(eSound.Double);
                this.betBatch(function () {
                  for (var _iterator4 = _createForOfIteratorHelperLoose(RouletteModel.instance.betOrderBack), _step4; !(_step4 = _iterator4()).done;) {
                    var _betInfo = _step4.value;
                    _this3.doBetChip(_betInfo.area, _betInfo.chip, _betInfo.pos);
                  }
                });
                break;
              }
            case "X_kaishi3":
              {
                //start run
                if (RouletteModel.instance.isTest) {
                  EventManager.instance.emit(eEvent.onTestClick);
                  return;
                }
                if (!RouletteModel.instance.gameInfo) {
                  return;
                }
                if (this.isBetLocked()) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (RouletteModel.instance.curTotalBet < RouletteModel.instance.gameInfo.TotalBetMin) {
                  var tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(RouletteModel.instance.gameInfo.TotalBetMin, 2));
                  Common.showTip(tip);
                  return;
                }
                if (RouletteModel.instance.curTotalBet > RouletteModel.instance.gameInfo.PosBetMax) {
                  var _tip = Common.strFormat(i18n.lang["10064"], Common.ChangeMoneyShow(RouletteModel.instance.gameInfo.PosBetMax, 2));
                  Common.showTip(_tip);
                  return;
                }
                this.star.active = true;
                ParticleUtils.play(this.star);
                this.idle.active = false;
                target.getComponent(MeshCollider).enabled = false;
                this.startPending = true;
                this.startButton = target;
                // 镜头不等下注回复，点击当下就推向转盘；请求没发出、被拒绝或结果不确定时由视图退回下注机位。
                EventManager.instance.emit(eEvent.onBetStart);
                tween(target).delay(0.5).call(function () {
                  // 先结束点击窗口再提交：reqBet 成功后由 isBetWaiting 接续锁定，失败则立即放开。
                  _this3.startPending = false;
                  if (RouletteCtrl.instance.reqBet(_this3.getBetInfo())) {
                    RouletteUtils.instance.playSound(eSound.Begin);
                  }
                }).delay(3.5).call(function () {
                  target.getComponent(MeshCollider).enabled = true;
                }).start();
                break;
              }
            case "X_100":
            case "X_1K":
            case "X_10K":
            case "X_50K":
            case "X_100K":
            case "X_500K":
            case "X_1M":
            case "X_5M":
              {
                RouletteUtils.instance.playSound(eSound.Coins);
                this.selChip = target;
                this.chipTag.position = this.selChip.position;
                // RouletteModel.instance.selChipInfo = {
                //     chip: target,
                //     num: chipList[target.name],
                // };
                break;
              }
            default:
              {
                if (this.isBetLocked()) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (target.parent.name.match("Node_area_0")) {
                  this.betBatch(function () {
                    return _this3.betOnWheelArea(target);
                  });
                } else {
                  this.doBetChip(target.parent.name + "#" + target.name, this.selChip.name, target.position);
                }
                break;
              }
          }
        }

        // 轮盘区（Node_area_0）的组合注和邻注：一次点击按规则拆成多笔下注。
        ;

        _proto.betOnWheelArea = function betOnWheelArea(target) {
          switch (target.name) {
            case "Quad_tier":
              {
                //分注
                var betPos = [[5, 8], [10, 11], [13, 16], [23, 24], [27, 30], [33, 36]];
                var Node_touchArea_1 = this.Node_touchArea.getChildByName("Node_touchArea_1");
                for (var _i30 = 0, _betPos = betPos; _i30 < _betPos.length; _i30++) {
                  var posInfo = _betPos[_i30];
                  var node = Node_touchArea_1.getChildByName("Quad_" + posInfo[0] + "_" + posInfo[1]);
                  this.doBetChip(node.parent.name + "#" + node.name, this.selChip.name, node.position);
                }
                break;
              }
            case "Quad_orphelins":
              {
                //直注1
                var _node29 = this.Node_area_1.getChildByName("Quad_" + 1);
                this.doBetChip(_node29.parent.name + "#" + _node29.name, this.selChip.name, _node29.position);

                //分注
                var _betPos2 = [[6, 9], [14, 17], [17, 20], [31, 34]];
                var _Node_touchArea_ = this.Node_touchArea.getChildByName("Node_touchArea_1");
                for (var _i31 = 0, _betPos3 = _betPos2; _i31 < _betPos3.length; _i31++) {
                  var _posInfo = _betPos3[_i31];
                  _node29 = _Node_touchArea_.getChildByName("Quad_" + _posInfo[0] + "_" + _posInfo[1]);
                  this.doBetChip(_node29.parent.name + "#" + _node29.name, this.selChip.name, _node29.position);
                }
                break;
              }
            case "Quad_voisins":
              {
                //0/2/3
                var Node_touchArea_3 = this.Node_touchArea.getChildByName("Node_touchArea_3");
                var _node30 = Node_touchArea_3.getChildByName("Quad_0_2_3");
                this.doBetChip(_node30.parent.name + "#" + _node30.name, this.selChip.name, _node30.position);
                this.doBetChip(_node30.parent.name + "#" + _node30.name, this.selChip.name, _node30.position);

                //分注
                var _betPos4 = [[4, 7], [12, 15], [18, 21], [19, 22], [32, 35]];
                var _Node_touchArea_2 = this.Node_touchArea.getChildByName("Node_touchArea_1");
                for (var _i32 = 0, _betPos5 = _betPos4; _i32 < _betPos5.length; _i32++) {
                  var _posInfo2 = _betPos5[_i32];
                  _node30 = _Node_touchArea_2.getChildByName("Quad_" + _posInfo2[0] + "_" + _posInfo2[1]);
                  this.doBetChip(_node30.parent.name + "#" + _node30.name, this.selChip.name, _node30.position);
                }

                //角注25/26/28/29
                _node30 = Node_touchArea_3.getChildByName("Quad_25");
                this.doBetChip(_node30.parent.name + "#" + _node30.name, this.selChip.name, _node30.position);
                this.doBetChip(_node30.parent.name + "#" + _node30.name, this.selChip.name, _node30.position);
                break;
              }
            case "Quad_zero":
              {
                //直注26
                var _node31 = this.Node_area_1.getChildByName("Quad_" + 26);
                this.doBetChip(_node31.parent.name + "#" + _node31.name, this.selChip.name, _node31.position);

                //分注
                var _betPos6 = [[0, 3], [12, 15], [32, 35]];
                var _Node_touchArea_3 = this.Node_touchArea.getChildByName("Node_touchArea_1");
                for (var _i33 = 0, _betPos7 = _betPos6; _i33 < _betPos7.length; _i33++) {
                  var _posInfo3 = _betPos7[_i33];
                  _node31 = _Node_touchArea_3.getChildByName("Quad_" + _posInfo3[0] + "_" + _posInfo3[1]);
                  this.doBetChip(_node31.parent.name + "#" + _node31.name, this.selChip.name, _node31.position);
                }
                break;
              }
            default:
              {
                var arrNum = target.name.split("_");
                var num = parseInt(arrNum[1]);
                for (var i = 0; i < arrIRound.length; i++) {
                  if (num == arrIRound[i]) {
                    var iStart = i - RouletteModel.instance._betRound;
                    iStart = iStart < 0 ? iStart + arrIRound.length : iStart;
                    for (var iIndex = 0; iIndex < 2 * RouletteModel.instance._betRound + 1; iIndex++) {
                      var iLeft = (iStart + iIndex) % arrIRound.length;
                      var _node32 = this.Node_area_1.getChildByName("Quad_" + arrIRound[iLeft]);
                      this.doBetChip(_node32.parent.name + "#" + _node32.name, this.selChip.name, _node32.position);
                    }
                    break;
                  }
                }
                break;
              }
          }
        };
        _proto.onBtnClick_betDetail = function onBtnClick_betDetail(event) {
          this.Node_betDetail.active = !this.Node_betDetail.active;
          this.betDetailTag.spriteFrame = this.btnDetailSpr[this.Node_betDetail.active ? 1 : 0];
          this.updateDetail();
        };
        _proto.doBetChip = function doBetChip(area, chip, pos) {
          if (RouletteModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise);
          }
          var betAmount = chipListDef[chip];
          if (RouletteModel.instance.curBalance < betAmount) {
            var getSmall = false;
            var keys = Object.keys(chipListDef);
            for (var i = keys.length - 1; i >= 0; i--) {
              var key = keys[i];
              betAmount = chipListDef[key];
              if (RouletteModel.instance.curBalance >= betAmount) {
                chip = key;

                // if (this.selChip) {
                //     let mRender = this.chipTag.getComponent(MeshRenderer);
                //     if (mRender) {
                //         mRender.material.setProperty("emissive", color(255, 255, 255));
                //     }
                // }

                this.selChip = this.selChip.parent.getChildByName(key);
                this.chipTag.position = this.selChip.position;

                // if (this.selChip) {
                //     let mRender = this.chipTag.getComponent(MeshRenderer);
                //     if (mRender) {
                //         mRender.material.setProperty("emissive", color(5, 29, 127));
                //     }
                // }

                getSmall = true;
                break;
              }
            }
            if (!getSmall) {
              Common.showTip(i18n.lang["10001"]);
              return;
            }
          }
          RouletteModel.instance.curTotalBet += betAmount;
          this.Label_totalBet.string = "$" + Common.ChangeMoneyShow(RouletteModel.instance.curTotalBet, 2);
          RouletteModel.instance.curBalance -= betAmount;
          if (!this.betBatchAreas) {
            EventManager.instance.emit(eEvent.onUpdateGold);
          }
          RouletteModel.instance.betOrderList.push({
            area: area,
            chip: chip,
            pos: pos
          });
          var newChip = this.createChip(chip, pos);
          RouletteModel.instance.betAreaList[area] = RouletteModel.instance.betAreaList[area] || [];
          RouletteModel.instance.betAreaList[area].push(newChip);
          if (this.betBatchAreas) {
            this.betBatchAreas.add(area);
            return;
          }

          //检测合并
          this.checkMerge(area);
          RouletteUtils.instance.playSound(eSound.Bet);
          this.updateDetail(area);
        };
        /**
         * 邻注、组合注、复投会在同一帧连续下多枚筹码。逐枚做合并检测、明细刷新、音效和余额动画会造成单帧卡顿；
         * 合并是按面额数量贪心进位，批末统一执行与逐枚执行的最终筹码组成一致。
         */
        _proto.betBatch = function betBatch(placeBets) {
          var _this4 = this;
          if (this.betBatchAreas) {
            placeBets();
            return;
          }
          var areas = this.betBatchAreas = new Set();
          try {
            placeBets();
          } finally {
            this.betBatchAreas = null;
            if (areas.size > 0) {
              areas.forEach(function (area) {
                _this4.checkMerge(area);
                _this4.updateDetail(area);
              });
              EventManager.instance.emit(eEvent.onUpdateGold);
              RouletteUtils.instance.playSound(eSound.Bet);
            }
          }
        };
        /**
         * 每个面额准备一次克隆模板，使同面额筹码共用材质，才能按 matChip/chipFont 的实例化合批。
         * 直接克隆场景里的筹码会让每枚筹码各建一个材质实例、各带一个面额 Label 及其贴图和每帧刷新。
         * 面额贴图或标签贴图尚未就绪时返回 null，由调用方按原方式创建。
         */
        _proto.getChipTemplate = function getChipTemplate(chip) {
          var _source$getComponentI,
            _this5 = this;
          var template = this.chipTemplates[chip];
          if (template) return template;
          var source = this.X_lunpanchangjing.getChildByName(chip);
          var chipFrame = this.arrChipSpriteFrame[arrTexture[chip]];
          var labelTexture = (_source$getComponentI = source.getComponentInChildren(Label)) == null || (_source$getComponentI = _source$getComponentI.spriteFrame) == null ? void 0 : _source$getComponentI.texture;
          if (!chipFrame || !labelTexture) return null;
          template = instantiate(source);
          var shareMaterial = function shareMaterial(render, texture) {
            var material = new Material();
            material.copy(render.getSharedMaterial(0));
            material.setProperty("mainTexture", texture);
            render.setSharedMaterial(material, 0);
            _this5.chipMaterials.push(material);
            return material;
          };
          shareMaterial(template.getComponent(MeshRenderer), chipFrame.texture);

          // 标签面片改用场景内同面额筹码已生成的文字贴图；模板不再保留 Label 和逐帧刷新。
          var label = template.getComponentInChildren(label3D);
          if (label) {
            var _template$getComponen;
            label.enabled = false;
            var labelMaterial = shareMaterial(label.getComponent(MeshRenderer), labelTexture);
            // 文字贴图重建后由场景内筹码的 label3D 同步刷新这份共享材质，否则桌上的标签会变空白。
            var sourceLabel = source.getComponentInChildren(label3D);
            if (sourceLabel) sourceLabel.mirrorMaterial = labelMaterial;
            var labelNode = (_template$getComponen = template.getComponentInChildren(Label)) == null ? void 0 : _template$getComponen.node;
            if (labelNode) {
              labelNode.removeFromParent();
              labelNode.destroy();
            }
          }
          this.chipTemplates[chip] = template;
          return template;
        };
        /**
         * 回收一枚不再显示的筹码。低端机上渲染组件首次激活每枚要数毫秒，清桌后销毁、下一局重建会让复投和自动续投整帧卡住；
         * 回收的节点保留已建好的渲染数据，再次入场只需挂回场景。池有上限，超出的直接销毁。
         */
        _proto.recycleChip = function recycleChip(chipNode) {
          // 已回收的节点没有父节点；中奖回收和随后的清桌可能先后触达同一枚。
          if (!isValid(chipNode, true) || !chipNode.parent) return;
          Tween.stopAllByTarget(chipNode);
          chipNode.removeFromParent();
          var pool = this.chipPool[chipNode.name] = this.chipPool[chipNode.name] || [];
          if (pool.length >= CHIP_POOL_MAX) {
            chipNode.destroy();
            return;
          }
          pool.push(chipNode);
        };
        _proto.recycleAllChips = function recycleAllChips() {
          for (var _iterator5 = _createForOfIteratorHelperLoose(this.Node_chipRoot.children.slice()), _step5; !(_step5 = _iterator5()).done;) {
            var chipNode = _step5.value;
            this.recycleChip(chipNode);
          }
        };
        _proto.createChip = function createChip(chip, pos) {
          var _this$chipPool$chip, _newChip$getComponent;
          var pooled = (_this$chipPool$chip = this.chipPool[chip]) == null ? void 0 : _this$chipPool$chip.pop();
          if (pooled) {
            pooled.scale = v3(CHIP_SCALE, CHIP_SCALE, CHIP_SCALE);
            pooled.position = pos;
            this.Node_chipRoot.addChild(pooled);
            return pooled;
          }
          var template = this.getChipTemplate(chip);
          var newChip = instantiate(template || this.X_lunpanchangjing.getChildByName(chip));
          if (!template) {
            // 面额贴图目录尚未加载完时先用材质自带贴图，不能让下注流程中途抛错。
            var sprFrame = this.arrChipSpriteFrame[arrTexture[chip]];
            if (sprFrame) newChip.getComponent(MeshRenderer).material.setProperty("mainTexture", sprFrame.texture);
          }

          // 下注区的筹码不参与射线点击；入场前标记销毁，激活时引擎会跳过它，不会创建物理形状。
          (_newChip$getComponent = newChip.getComponent(MeshCollider)) == null || _newChip$getComponent.destroy();
          newChip.scale = v3(CHIP_SCALE, CHIP_SCALE, CHIP_SCALE);
          newChip.position = pos;
          this.Node_chipRoot.addChild(newChip);
          return newChip;
        };
        _proto.onDestroy = function onDestroy() {
          // 模板和池内筹码不在场景树内、材质为运行时创建，都不会随场景自动释放。
          for (var _i34 = 0, _Object$keys = Object.keys(this.chipTemplates); _i34 < _Object$keys.length; _i34++) {
            var key = _Object$keys[_i34];
            this.chipTemplates[key].destroy();
          }
          this.chipTemplates = {};
          for (var _i35 = 0, _Object$keys2 = Object.keys(this.chipPool); _i35 < _Object$keys2.length; _i35++) {
            var _key2 = _Object$keys2[_i35];
            this.chipPool[_key2].forEach(function (chipNode) {
              return chipNode.destroy();
            });
          }
          this.chipPool = {};
          this.chipMaterials.forEach(function (material) {
            return material.destroy();
          });
          this.chipMaterials = [];
        }

        //检测合并
        ;

        _proto.checkMerge = function checkMerge(area) {
          var betAreaList = RouletteModel.instance.betAreaList[area];
          var areaList = {};
          var keys = Object.keys(betAreaList);
          for (var _i36 = 0, _keys2 = keys; _i36 < _keys2.length; _i36++) {
            var key = _keys2[_i36];
            var chip = betAreaList[key];
            areaList[chip.name] = areaList[chip.name] || [];
            areaList[chip.name].push(chip);
          }
          var chipKeys = Object.keys(chipListDef);
          for (var i = 0; i < chipKeys.length - 1; i++) {
            var _key3 = chipKeys[i];
            var nextKey = chipKeys[i + 1];
            if (!areaList[_key3]) {
              continue;
            }
            var max = Math.floor(chipListDef[nextKey] / chipListDef[_key3]);
            while (areaList[_key3].length >= max) {
              //去除max个小筹码
              var chipList = areaList[_key3];
              var chipPos = chipList[0].position;
              areaList[_key3].splice(0, max);
              for (var j = betAreaList.length - 1, delCounts = max; j >= 0 && delCounts > 0; j--) {
                var chipNode = betAreaList[j];
                if (chipNode.name == _key3) {
                  delCounts--;
                  this.recycleChip(chipNode);
                  betAreaList.splice(j, 1);
                }
              }

              //添加一个大筹码
              var newChip = this.createChip(nextKey, chipPos);
              areaList[nextKey] = areaList[nextKey] || [];
              areaList[nextKey].push(newChip);
              betAreaList.push(newChip);
            }
          }

          //reset pos
          keys = Object.keys(betAreaList);
          for (var _i37 = 0; _i37 < keys.length; _i37++) {
            var _key4 = keys[_i37];
            var _chip = betAreaList[_key4];
            _chip.position = v3(_chip.position.x, _i37 * 0.005, _chip.position.z);
          }
        };
        _proto.updateDetail = function updateDetail(area) {
          var _this6 = this;
          if (area === void 0) {
            area = null;
          }
          if (!this.Node_betDetail.active) {
            return;
          }
          var updateAreaInfo = function updateAreaInfo(areaKey) {
            var betAreaList = RouletteModel.instance.betAreaList[areaKey];
            var totalBet = 0;
            for (var _iterator6 = _createForOfIteratorHelperLoose(betAreaList), _step6; !(_step6 = _iterator6()).done;) {
              var chipNode = _step6.value;
              totalBet += chipListDef[chipNode.name];
            }
            var item = _this6.detailContent.getChildByName(areaKey);
            if (totalBet == 0) {
              if (item) {
                item.destroyFromParent();
              }
              return;
            }
            if (item) {
              var arrStr = item.getComponent(Label).string.split(":");
              item.getComponent(Label).string = arrStr[0] + ": " + Common.ChangeMoneyShow(totalBet, 2);
            } else {
              item = instantiate(_this6.detailItem);
              item.active = true;
              item.name = areaKey;
              _this6.detailContent.addChild(item);
              var arrAreaInfo = areaKey.split("#");
              var parentArea = arrAreaInfo[0];
              var nodeArea = arrAreaInfo[1];
              var strTag = null;
              if (parentArea.match("Node_touchArea")) {
                if (parentArea.match("Node_touchArea_0") || parentArea.match("Node_touchArea_2")) {
                  var arrNum = nodeArea.split("_");
                  var iStart = parseInt(arrNum[1]);
                  var isEnd = parseInt(arrNum[2]);
                  strTag = iStart + "-" + isEnd;
                } else if (parentArea.match("Node_touchArea_3")) {
                  switch (nodeArea) {
                    case "Quad_0_1_2":
                    case "Quad_0_2_3":
                      {
                        var _arrNum13 = nodeArea.split("_");
                        strTag = _arrNum13[1] + "/" + _arrNum13[2] + "/" + _arrNum13[3];
                        break;
                      }
                    default:
                      {
                        var _arrNum14 = nodeArea.split("_");
                        var _iStart9 = parseInt(_arrNum14[1]);
                        strTag = _iStart9 + "/" + (_iStart9 + 1) + "/" + (_iStart9 + 3) + "/" + (_iStart9 + 4);
                        break;
                      }
                  }
                } else if (parentArea.match("Node_touchArea_1")) {
                  var _arrNum15 = nodeArea.split("_");
                  strTag = _arrNum15[1] + "/" + _arrNum15[2];
                }
              } else if (parentArea.match("Node_area_1")) {
                switch (nodeArea) {
                  case "Quad_even":
                    {
                      strTag = "EVEN";
                      break;
                    }
                  case "Quad_odd":
                    {
                      strTag = "ODD";
                      break;
                    }
                  case "Quad_red":
                    {
                      strTag = "RED";
                      break;
                    }
                  case "Quad_black":
                    {
                      strTag = "BLACK";
                      break;
                    }
                  case "Quad_2to1_1":
                    {
                      strTag = "2to1_1_34";
                      break;
                    }
                  case "Quad_2to1_2":
                    {
                      strTag = "2to1_2_35";
                      break;
                    }
                  case "Quad_2to1_3":
                    {
                      strTag = "2to1_3_36";
                      break;
                    }
                  default:
                    {
                      var _arrNum16 = nodeArea.split("_");
                      if (_arrNum16.length > 2) {
                        strTag = _arrNum16[1] + "-" + _arrNum16[2];
                      } else {
                        var _arrNum17 = nodeArea.split("_");
                        var num = parseInt(_arrNum17[1]);
                        strTag = "" + num;
                      }
                      break;
                    }
                }
              }
              item.getComponent(Label).string = strTag + ": " + Common.ChangeMoneyShow(totalBet, 2);
            }
          };
          if (area) {
            updateAreaInfo(area);
          } else {
            var areaKeys = Object.keys(RouletteModel.instance.betAreaList);
            for (var _i38 = 0, _areaKeys = areaKeys; _i38 < _areaKeys.length; _i38++) {
              var areaKey = _areaKeys[_i38];
              updateAreaInfo(areaKey);
            }
          }
        };
        _proto.clearBet = function clearBet() {
          this.recycleAllChips();
          RouletteModel.instance.betOrderList = [];
          RouletteModel.instance.betAreaList = {};
          RouletteModel.instance.curTotalBet = 0;
          this.Label_totalBet.string = "0";
          EventManager.instance.emit(eEvent.onWaitCameraCruise);
          this.detailContent.destroyAllChildren();
        };
        _proto.doClearBet = function doClearBet() {
          if (this.isBetLocked()) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          RouletteUtils.instance.playSound(eSound.Cancel);
          RouletteModel.instance.curBalance += RouletteModel.instance.curTotalBet;
          EventManager.instance.emit(eEvent.onUpdateGold);
          this.clearBet();
        }

        //返回上一次下注
        ;

        _proto.returnBet = function returnBet(betInfo) {
          var _this7 = this;
          var betAreaList = RouletteModel.instance.betAreaList[betInfo.area];
          if (betAreaList.length == 0) {
            EventManager.instance.emit(eEvent.onWaitCameraCruise);
            return;
          }
          var betAmount = chipListDef[betInfo.chip];
          RouletteModel.instance.curTotalBet -= betAmount;
          RouletteModel.instance.curBalance += betAmount;
          EventManager.instance.emit(eEvent.onUpdateGold);
          this.Label_totalBet.string = RouletteModel.instance.curTotalBet > 0 ? "$" + Common.ChangeMoneyShow(RouletteModel.instance.curTotalBet, 2) : "0";
          var delChip = function delChip(chipName) {
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == chipName) {
                _this7.recycleChip(chipNode);
                betAreaList.splice(j, 1);
                return true;
              }
            }
            return false;
          };
          var breakChip = function breakChip(smallChip, bigChip) {
            //删除大筹码
            betAreaList = RouletteModel.instance.betAreaList[betInfo.area];
            var chipPos = betAreaList[0].position;
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == bigChip) {
                // 回收会把节点移出父节点，位置需先复制，不能保留对节点内部向量的引用。
                chipPos = chipNode.position.clone();
                _this7.recycleChip(chipNode);
                betAreaList.splice(j, 1);

                //拆解大筹码为max-1个小一阶筹码
                var max = Math.floor(chipListDef[bigChip] / chipListDef[smallChip]);
                for (var _j = 0; _j < max; _j++) {
                  //添加筹码
                  var newChip = _this7.createChip(smallChip, chipPos);
                  betAreaList.push(newChip);
                }
                return true;
              }
            }
            return false;
          };

          // if (!delChip(betInfo.chip)) {
          //     let chipKeys = Object.keys(chipListDef);
          //     for (let i = 0; i < chipKeys.length; i++) {
          //         let key = chipKeys[i];

          //         if (key == betInfo.chip) {
          //             let nextKey = chipKeys[i + 1];
          //             breakChip(key, nextKey);

          //             delChip(betInfo.chip);
          //             break;
          //         }
          //     }
          // }
          ///////////////////////////////////////////////////////
          while (!delChip(betInfo.chip)) {
            var chipKeys = Object.keys(chipListDef);
            for (var i = 0; i < chipKeys.length; i++) {
              var key = chipKeys[i];
              if (key == betInfo.chip) {
                var nextIndex = i + 1;
                var nextKey = chipKeys[nextIndex];
                while (nextIndex < chipKeys.length && !breakChip(key, nextKey)) {
                  key = chipKeys[nextIndex];
                  nextKey = chipKeys[++nextIndex];
                }
                break;
              }
            }
          }

          ///////////////////////////////////////////////////
          //reset pos
          var keys = Object.keys(betAreaList);
          for (var _i39 = 0; _i39 < keys.length; _i39++) {
            var _key5 = keys[_i39];
            var chip = betAreaList[_key5];
            chip.position = v3(chip.position.x, _i39 * 0.005, chip.position.z);
          }
          this.updateDetail(betInfo.area);
        };
        _proto.addBetChipInfo = function addBetChipInfo(num, arrNode) {
          RouletteModel.instance.betChipInfo["" + num] = RouletteModel.instance.betChipInfo["" + num] || [];
          RouletteModel.instance.betChipInfo["" + num] = RouletteModel.instance.betChipInfo["" + num].concat(arrNode);
        };
        _proto.getBetInfo = function getBetInfo() {
          /////////
          RouletteModel.instance.betChipInfo = {};
          /////
          RouletteModel.instance.betInfo = [];
          var totalAmount = 0;
          var areaKeys = Object.keys(RouletteModel.instance.betAreaList);
          for (var _i40 = 0, _areaKeys2 = areaKeys; _i40 < _areaKeys2.length; _i40++) {
            var areaKey = _areaKeys2[_i40];
            var objBet = {
              Pos: [],
              Amount: 0
            };
            var betAreaList = RouletteModel.instance.betAreaList[areaKey];
            for (var _iterator7 = _createForOfIteratorHelperLoose(betAreaList), _step7; !(_step7 = _iterator7()).done;) {
              var chipNode = _step7.value;
              objBet.Amount += chipListDef[chipNode.name];
            }
            if (objBet.Amount == 0) {
              continue;
            }
            var arrAreaInfo = areaKey.split("#");
            var parentArea = arrAreaInfo[0];
            var nodeArea = arrAreaInfo[1];
            if (parentArea.match("Node_touchArea")) {
              if (parentArea.match("Node_touchArea_0") || parentArea.match("Node_touchArea_2")) {
                var arrNum = nodeArea.split("_");
                var iStart = parseInt(arrNum[1]);
                var isEnd = parseInt(arrNum[2]) + 1;
                for (var i = iStart; i < isEnd; i++) {
                  objBet.Pos.push(i);
                  this.addBetChipInfo(i, betAreaList);
                }
              } else if (parentArea.match("Node_touchArea_3")) {
                switch (nodeArea) {
                  case "Quad_0_1_2":
                  case "Quad_0_2_3":
                    {
                      var _arrNum18 = nodeArea.split("_");
                      for (var _i41 = 1; _i41 < _arrNum18.length; _i41++) {
                        var num = parseInt(_arrNum18[_i41]);
                        objBet.Pos.push(num);
                        this.addBetChipInfo(num, betAreaList);
                      }
                      break;
                    }
                  default:
                    {
                      var _arrNum19 = nodeArea.split("_");
                      var _iStart10 = parseInt(_arrNum19[1]);
                      for (var _i42 = 0; _i42 < 2; _i42++) {
                        objBet.Pos.push(_iStart10 + _i42);
                        objBet.Pos.push(_iStart10 + _i42 + 3);
                        this.addBetChipInfo(_iStart10 + _i42, betAreaList);
                        this.addBetChipInfo(_iStart10 + _i42 + 3, betAreaList);
                      }
                      break;
                    }
                }

                // let arrNum = nodeArea.split("_");
                // let iStart = parseInt(arrNum[1]);
                // let isEnd = parseInt(arrNum[2]) + 1;
                // for (let i = iStart; i < isEnd; i++) {
                //     let node = this.Node_area_1.getChildByName(`Quad_${i}`);
                //     this.showLight(node);
                // }
              } else if (parentArea.match("Node_touchArea_1")) {
                var _arrNum20 = nodeArea.split("_");
                var iNum_0 = parseInt(_arrNum20[1]);
                var iNum_1 = parseInt(_arrNum20[2]);
                objBet.Pos.push(iNum_0);
                objBet.Pos.push(iNum_1);
                this.addBetChipInfo(iNum_0, betAreaList);
                this.addBetChipInfo(iNum_1, betAreaList);
              }
            } else if (parentArea.match("Node_area_1")) {
              switch (nodeArea) {
                case "Quad_even":
                  {
                    for (var _i43 = 0; _i43 < 18; _i43++) {
                      var _index5 = 2 * _i43 + 2;
                      objBet.Pos.push(_index5);
                      this.addBetChipInfo(_index5, betAreaList);
                    }
                    break;
                  }
                case "Quad_odd":
                  {
                    for (var _i44 = 0; _i44 < 18; _i44++) {
                      var _index6 = 2 * _i44 + 1;
                      objBet.Pos.push(_index6);
                      this.addBetChipInfo(_index6, betAreaList);
                    }
                    break;
                  }
                case "Quad_red":
                  {
                    for (var _i45 = 0, _arrRed3 = arrRed; _i45 < _arrRed3.length; _i45++) {
                      var _num15 = _arrRed3[_i45];
                      objBet.Pos.push(_num15);
                      this.addBetChipInfo(_num15, betAreaList);
                    }
                    break;
                  }
                case "Quad_black":
                  {
                    for (var _i46 = 0, _arrBlack3 = arrBlack; _i46 < _arrBlack3.length; _i46++) {
                      var _num16 = _arrBlack3[_i46];
                      objBet.Pos.push(_num16);
                      this.addBetChipInfo(_num16, betAreaList);
                    }
                    break;
                  }
                case "Quad_2to1_1":
                case "Quad_2to1_2":
                case "Quad_2to1_3":
                  {
                    var _arrNum21 = nodeArea.split("_");
                    var _iStart11 = parseInt(_arrNum21[2]);
                    for (var _i47 = 0; _i47 < 12; _i47++) {
                      objBet.Pos.push(_iStart11 + 3 * _i47);
                      this.addBetChipInfo(_iStart11 + 3 * _i47, betAreaList);
                    }
                    break;
                  }
                default:
                  {
                    var _arrNum22 = nodeArea.split("_");
                    if (_arrNum22.length > 2) {
                      var _iStart12 = parseInt(_arrNum22[1]);
                      var _isEnd3 = parseInt(_arrNum22[2]) + 1;
                      for (var _i48 = _iStart12; _i48 < _isEnd3; _i48++) {
                        objBet.Pos.push(_i48);
                        this.addBetChipInfo(_i48, betAreaList);
                      }
                    } else {
                      var _arrNum23 = nodeArea.split("_");
                      var _num17 = parseInt(_arrNum23[1]);
                      objBet.Pos.push(_num17);
                      this.addBetChipInfo(_num17, betAreaList);
                    }
                    break;
                  }
              }
            }
            RouletteModel.instance.betInfo.push(objBet);
            totalAmount += objBet.Amount;
          }
          return RouletteModel.instance.betInfo;
        };
        _proto.showLight = function showLight(node, isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          if (RouletteModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          RouletteUtils.instance.setQuadLight(node.getComponent(MeshRenderer), isShow);
        };
        _proto.onRunEnd = function onRunEnd() {
          var _this8 = this;
          var destNode = this.Node_area_1.getChildByName("Quad_" + RouletteModel.instance.betResult.OpenNum);
          var desPos = destNode.position;
          var startPos = this.X_yaozhong.position;
          var cpY = Math.random() * 0.3 + 1.2;
          tween(this.X_yaozhong).parallel(tween(this.X_yaozhong).to(0.25, {
            scale: v3(1.5, 1.5, 1.5)
          }), tween(this.X_yaozhong).bezierTo3(0.25, startPos, v3(startPos.x + Math.random() * 0.04, cpY, (startPos.z + desPos.z) / 2.0), v3(desPos.x - Math.random() * 0.04, cpY, (startPos.z + desPos.z) / 2.0), v3(desPos.x, startPos.y, desPos.z))).call(function () {
            var effectRoot = _this8.X_yaozhong.getChildByName("effectRoot");
            effectRoot.active = true;
            effectRoot.getComponent(Animation).play();
            // effectRoot.getComponent(Animation).once(Animation.EventType.FINISHED, () => {
            //     effectRoot.getComponent(Animation).stop();
            //     effectRoot.active = false;
            // });

            _this8.showWinArea(RouletteModel.instance.betResult.OpenNum);
            RouletteUtils.instance.playSound(eSound.Weight);
          }).start();

          // if (RouletteModel.instance.betResult.OpenNum == 0) {
          //     this.Node_win_quad_0.active = true;
          //     this.Node_win_quad_0.position = desPos;

          //     this.setWinEffect(this.Node_win_quad_0);
          //     // let startScale = v3(0.15, 0.4, 1);
          //     // tween(this.Node_win_quad_0)
          //     //     .to(0.75, { scale: v3(startScale.x * 1.1, startScale.y * 1.1, startScale.z) })
          //     //     .to(0.75, { scale: startScale })
          //     //     .union()
          //     //     .repeatForever()
          //     //     .start();
          // } else {
          //     this.Node_win_quad_other.active = true;
          //     this.Node_win_quad_other.position = desPos;

          //     this.setWinEffect(this.Node_win_quad_other);
          //     // let startScale = v3(0.14, 0.16, 1);
          //     // tween(this.Node_win_quad_other)
          //     //     .to(0.75, { scale: v3(startScale.x * 1.1, startScale.y * 1.1, startScale.z) })
          //     //     .to(0.75, { scale: startScale })
          //     //     .union()
          //     //     .repeatForever()
          //     //     .start();
          // }
        };

        _proto.onGameEnd = function onGameEnd() {
          var _this9 = this;
          this.X_yaozhong.position = v3(-0.188, 0.9, -0.971);
          this.X_yaozhong.scale = v3(1, 1, 1);
          this.clearWinEffect();
          this.idle.active = true;
          ParticleUtils.play(this.idle);
          this.star.active = false;
          var effectRoot = this.X_yaozhong.getChildByName("effectRoot");
          effectRoot.getComponent(Animation).stop();
          effectRoot.active = false;
          if (RouletteModel.instance.isAuto) {
            this.scheduleOnce(function () {
              _this9.betBatch(function () {
                for (var _iterator8 = _createForOfIteratorHelperLoose(RouletteModel.instance.betOrderBack), _step8; !(_step8 = _iterator8()).done;) {
                  var betInfo = _step8.value;
                  _this9.doBetChip(betInfo.area, betInfo.chip, betInfo.pos);
                }
              });
            }, 0.25);
            this.scheduleOnce(function () {
              //start run
              if (RouletteModel.instance.isTest) {
                EventManager.instance.emit(eEvent.onTestClick);
                return;
              }
              if (!RouletteModel.instance.gameInfo) {
                return;
              }
              if (RouletteModel.instance.gameStatus != eRunStatus.NONE) {
                Common.showTip(i18n.lang["10005"]);
                return;
              }
              if (RouletteModel.instance.curTotalBet < RouletteModel.instance.gameInfo.TotalBetMin) {
                var tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(RouletteModel.instance.gameInfo.TotalBetMin, 2));
                Common.showTip(tip);
                return;
              }
              if (RouletteModel.instance.curTotalBet > RouletteModel.instance.gameInfo.PosBetMax) {
                var _tip2 = Common.strFormat(i18n.lang["10064"], Common.ChangeMoneyShow(RouletteModel.instance.gameInfo.PosBetMax, 2));
                Common.showTip(_tip2);
                return;
              }
              RouletteUtils.instance.playSound(eSound.Begin);
              if (RouletteCtrl.instance.reqBet(_this9.getBetInfo())) {
                EventManager.instance.emit(eEvent.onBetStart);
              }
            }, 0.5);
          }
        };
        _proto.clearWinEffect = function clearWinEffect() {
          // for (let i = this.Node_win.children.length - 1; i > 1; i--) {
          //     this.Node_win.children[i].destroyFromParent();
          // }

          this.Node_win.destroyAllChildren();

          // // Tween.stopAllByTarget(this.Node_win_quad_other);
          // Tween.stopAllByTarget(this.Node_win_quad_0);
          // this.Node_win_quad_other.active = false;
          // this.Node_win_quad_0.active = false;
        };

        _proto.setWinEffect = function setWinEffect(node) {
          var startScale = v3(node.scale.x, node.scale.y, 1);
          tween(node).to(0.75, {
            scale: v3(startScale.x * 1.05, startScale.y * 1.05, startScale.z)
          }).to(0.75, {
            scale: startScale
          }).union().repeatForever().start();
        };
        _proto.showWinArea = function showWinArea(openNum) {
          var arrShowNode = [];
          if (RouletteModel.instance.betResult.OpenNum == 0) {
            arrShowNode.push({
              nodeName: "Quad_" + openNum,
              // scale: v3(0.17, 0.16, 1),
              tempName: "zero"
            });
          } else {
            arrShowNode.push({
              nodeName: "Quad_" + openNum,
              // scale: v3(0.17, 0.16, 1),
              tempName: "small"
            });
          }

          //////////////

          //单双
          if (openNum % 2 == 0) {
            arrShowNode.push({
              nodeName: "Quad_even",
              // scale: v3(0.35, 0.16, 1),
              tempName: "middle"
            });
          } else {
            arrShowNode.push({
              nodeName: "Quad_odd",
              // scale: v3(0.35, 0.16, 1),
              tempName: "middle"
            });
          }

          //红黑
          var isRed = false;
          for (var _i49 = 0, _arrRed4 = arrRed; _i49 < _arrRed4.length; _i49++) {
            var num = _arrRed4[_i49];
            if (num == openNum) {
              isRed = true;
              break;
            }
          }
          isRed ? arrShowNode.push({
            nodeName: "Quad_red",
            //   scale: v3(0.35, 0.16, 1),
            tempName: "middle"
          }) : arrShowNode.push({
            nodeName: "Quad_black",
            //   scale: v3(0.35, 0.16, 1),
            tempName: "middle"
          });

          //Quad_2to1_1
          var qNum = openNum % 3;
          qNum == 0 ? arrShowNode.push({
            nodeName: "Quad_2to1_3",
            //   scale: v3(0.13, 0.16, 1),
            tempName: "2to1"
          }) : qNum == 1 ? arrShowNode.push({
            nodeName: "Quad_2to1_1",
            //   scale: v3(0.13, 0.16, 1),
            tempName: "2to1"
          }) : arrShowNode.push({
            nodeName: "Quad_2to1_2",
            //   scale: v3(0.13, 0.16, 1),
            tempName: "2to1"
          });

          //
          if (openNum >= 1 && openNum <= 12) {
            arrShowNode.push({
              nodeName: "Quad_1_12",
              // scale: v3(0.7, 0.15, 1),
              tempName: "large"
            });
          } else if (openNum >= 13 && openNum <= 24) {
            arrShowNode.push({
              nodeName: "Quad_13_24",
              // scale: v3(0.7, 0.15, 1),
              tempName: "large"
            });
          } else if (openNum >= 25 && openNum <= 36) {
            arrShowNode.push({
              nodeName: "Quad_25_36",
              // scale: v3(0.7, 0.15, 1),
              tempName: "large"
            });
          }
          if (openNum >= 1 && openNum <= 18) {
            arrShowNode.push({
              nodeName: "Quad_1_18",
              // scale: v3(0.35, 0.16, 1),
              tempName: "middle"
            });
          } else if (openNum >= 19 && openNum <= 36) {
            arrShowNode.push({
              nodeName: "Quad_19_36",
              // scale: v3(0.35, 0.16, 1),
              tempName: "middle"
            });
          }
          for (var _i50 = 0, _arrShowNode = arrShowNode; _i50 < _arrShowNode.length; _i50++) {
            var info = _arrShowNode[_i50];
            var quadNode = this.Node_area_1.getChildByName(info.nodeName);
            var nodeTemp = this.resultNode.getChildByName(info.tempName);
            // let Node_win = this.Node_win_quad_0.parent;
            var newLight = instantiate(nodeTemp);
            // newLight.active = true;
            // newLight.scale = info.scale;
            newLight.position = quadNode.position;

            // let mRender = newLight.getComponent(MeshRenderer);
            // let sprFrame = this.arrBetAreaSpriteFrame[`36jin`];
            // mRender.material.setProperty("mainTexture", sprFrame.texture);

            this.Node_win.addChild(newLight);
            // this.setWinEffect(newLight);
          }
        };

        return Roulette_area;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_betRound", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_area_0", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Node_area_1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_touchArea", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chipTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_chipRoot", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "X_lunpanchangjing", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "X_yaozhong", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "resultNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_win", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "idle", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "star", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "Node_betDetail", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "detailItem", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "detailContent", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "betDetailTag", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "btnDetailSpr", [_dec19], {
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

System.register("chunks:///_virtual/RouletteBetRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RouletteModel.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, Label, v3, instantiate, UIRenderer, color, tween, v2, Component, RouletteModel, Common;
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
      Label = module.Label;
      v3 = module.v3;
      instantiate = module.instantiate;
      UIRenderer = module.UIRenderer;
      color = module.color;
      tween = module.tween;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
      cclegacy._RF.push({}, "524d7Ah7bNIt7RQbrKN8RNY", "RouletteBetRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RouletteBetRecord = exports('RouletteBetRecord', (_dec = ccclass("RouletteBetRecord"), _dec2 = menu("game/RouletteGame/RouletteBetRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteBetRecord, _Component);
        function RouletteBetRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_chip", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "chipItem", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "page", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "platform", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gameId", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "totalBet", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "win", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "reuslt", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_winTip", _descriptor10, _assertThisInitialized(_this));
          _this.pageIndex = 0;
          _this.wPos = 102;
          _this.hPos = 120;
          return _this;
        }
        var _proto = RouletteBetRecord.prototype;
        _proto.start = function start() {
          if (RouletteModel.instance.gameRecord) {
            this.pageIndex = RouletteModel.instance.gameRecord.length;
            this.updateRecord();
          }
        };
        _proto.onDestroy = function onDestroy() {
          RouletteModel.instance.comRouletteBetRecord = null;
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "next_btn":
              {
                if (this.pageIndex < RouletteModel.instance.gameRecord.length) {
                  this.pageIndex++;
                  this.updateRecord();
                }
                break;
              }
            case "before_btn":
              {
                if (this.pageIndex > 1) {
                  this.pageIndex--;
                  this.updateRecord();
                }
                break;
              }
          }
        };
        _proto.updateRecord = function updateRecord(isLast) {
          if (isLast === void 0) {
            isLast = false;
          }
          this.pageIndex = isLast ? RouletteModel.instance.gameRecord.length : this.pageIndex;
          this.page.string = "Page:" + this.pageIndex;
          if (this.pageIndex == 0) {
            this.Node_winTip.active = false;
            return;
          }
          this.Node_label.destroyAllChildren();
          this.Node_chip.destroyAllChildren();
          var recordInfo = RouletteModel.instance.gameRecord[this.pageIndex - 1];
          this.Node_winTip.active = true;
          var winPos = this.getBetPos([recordInfo.OpenNum]);
          this.Node_winTip.position = v3(winPos.x, winPos.y, 0);

          //
          this.platform.string = "";
          this.gameId.string = "" + recordInfo.GameNo;
          if (!recordInfo.BetArr) {
            return;
          }
          var totalBet = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(recordInfo.BetArr), _step; !(_step = _iterator()).done;) {
            var posInfo = _step.value;
            totalBet += posInfo.Amount;
            var newChip = instantiate(this.chipItem);
            var chipPos = this.getBetPos(posInfo.Pos);
            newChip.position = v3(chipPos.x, chipPos.y, 0);
            newChip.active = true;
            this.Node_chip.addChild(newChip);
            var Label_bet = newChip.getChildByName("Label_bet");
            Label_bet.getComponent(Label).string = Common.ChangeMoneyShow(posInfo.Amount, 2);
            Label_bet.parent = this.Node_label;
            Label_bet.position = v3(chipPos.x, chipPos.y, 0);
            // AutoChangeParent.Bind(Label_bet, this.Node_label, true);

            for (var _iterator2 = _createForOfIteratorHelperLoose(posInfo.Pos), _step2; !(_step2 = _iterator2()).done;) {
              var num = _step2.value;
              if (num == recordInfo.OpenNum) {
                newChip.getComponent(UIRenderer).color = color(255, 255, 0, 255);
                tween(newChip).to(0.25, {
                  scale: v3(1.1, 1.1, 1.1)
                }).to(0.25, {
                  scale: v3(1, 1, 1)
                }).union().repeatForever().start();
              }
            }
          }
          this.win.string = Common.ChangeMoneyShow(recordInfo.Reward, 2);
          var result = recordInfo.Reward - totalBet;
          this.reuslt.string = "" + Common.ChangeMoneyShow(result, 2);
          this.totalBet.string = Common.ChangeMoneyShow(totalBet, 2);
        };
        _proto.getBetPos = function getBetPos(arrBet) {
          var _this2 = this;
          arrBet.sort(function (a, b) {
            return a - b;
          });
          var getPos = function getPos(num) {
            var startPos = v2(-557, -7);
            var row = (num - 1) % 3;
            var col = Math.floor((num - 1) / 3);
            return v2(startPos.x + col * _this2.wPos, startPos.y + row * _this2.hPos);
          };
          var len = arrBet.length;
          switch (len) {
            case 1:
              {
                var num = arrBet[0];
                if (num == 0) {
                  return v2(-655, 112);
                }
                return getPos(num);
              }
            case 2:
              {
                if (arrBet[0] == 0) {
                  var startPos = v2(-609, -7);
                  var row = arrBet[1] - 1;
                  return v2(startPos.x, startPos.y + row * this.hPos);
                }
                var pos_0 = getPos(arrBet[0]);
                if (arrBet[1] - arrBet[0] == 1) {
                  return v2(pos_0.x, pos_0.y + this.hPos / 2);
                }
                return v2(pos_0.x + this.wPos / 2, pos_0.y);
              }
            case 3:
              {
                if (arrBet[0] == 0) {
                  var _startPos = v2(-609, 53);
                  var _row = arrBet[1] - 1;
                  return v2(_startPos.x, _startPos.y + _row * this.hPos);
                }
                var _pos_ = getPos(arrBet[0]);
                return v2(_pos_.x, _pos_.y - this.hPos / 2);
              }
            case 4:
              {
                if (arrBet[0] == 0) {
                  return v2(-609, -67);
                }
                var _pos_2 = getPos(arrBet[0]);
                return v2(_pos_2.x + this.wPos / 2, _pos_2.y + this.hPos / 2);
              }
            case 6:
              {
                var _pos_3 = getPos(arrBet[0]);
                return v2(_pos_3.x + this.wPos / 2, _pos_3.y - this.hPos / 2);
              }
            case 12:
              {
                if (arrBet[11] - arrBet[0] == 33) {
                  //1-34 2-35 3-36
                  var _startPos2 = v2(660, -7);
                  var _index = arrBet[0] - 1;
                  return v2(_startPos2.x, _startPos2.y + _index * this.hPos);
                }

                //1-12 13-24 25-36
                var _startPos3 = v2(-401, -127);
                var index = Math.floor(arrBet[0] / 12);
                return v2(_startPos3.x + this.wPos * 4 * index, _startPos3.y);
              }
            case 18:
              {
                //单双，红黑 1-18 19-36
                var _startPos4 = v2(-505, -240);
                if (arrBet[17] - arrBet[0] == 17) {
                  //1-18 19-36
                  return arrBet[0] == 1 ? _startPos4 : v2(_startPos4.x + 10 * this.wPos, _startPos4.y);
                } else if (arrBet[17] + arrBet[0] == 37) {
                  //红黑
                  return arrBet[0] == 1 ? v2(_startPos4.x + 4 * this.wPos, _startPos4.y) : v2(_startPos4.x + 6 * this.wPos, _startPos4.y);
                }

                //单双
                return arrBet[0] == 1 ? v2(_startPos4.x + 8 * this.wPos, _startPos4.y) : v2(_startPos4.x + 2 * this.wPos, _startPos4.y);
              }
          }
        };
        return RouletteBetRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_chip", [_dec3], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "chipItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "page", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "platform", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gameId", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "totalBet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "reuslt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Node_winTip", [_dec12], {
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

System.register("chunks:///_virtual/RouletteBtnCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './RouletteDef.ts', './RouletteModel.ts', './RouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, Color, Node, geometry, PhysicsSystem, MeshRenderer, sys, UIRenderer, Component, EventManager, eRunStatus, eEvent, RouletteModel, RouletteUtils;
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
      sys = module.sys;
      UIRenderer = module.UIRenderer;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "0f307b/CvdOMLlbLaUcpL6u", "RouletteBtnCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RouletteBtnCheck = exports('RouletteBtnCheck', (_dec = ccclass("RouletteBtnCheck"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteBtnCheck, _Component);
        function RouletteBtnCheck() {
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
        var _proto = RouletteBtnCheck.prototype;
        //press
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // this.canvas.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (RouletteModel.instance.isTest) {
            this.canvas.node.on(Node.EventType.MOUSE_UP, this.onMouseUp, this);
          } else {
            this.canvas.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
            this.canvas.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
          }
        };
        _proto.onDisable = function onDisable() {
          // this.canvas.node.off(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          if (RouletteModel.instance.isTest) {
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

          if (RouletteModel.instance.gameStatus == eRunStatus.NONE) {
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
              if (castCollider.node.name.match("X_jinshu") || castCollider.node.name == "X_lunpan" || castCollider.node.name == "X_lunpan2") {
                this.releaseCurButton();
                return;
              }
              this._cur_button = castCollider.node;

              // gts.Debug.Log(`==onMouseDown==${this._cur_button.name}`);

              if (this._cur_button.parent.name.match("Node_touchArea")) ;else if (this._cur_button.name.match("Quad_")) {
                RouletteUtils.instance.setQuadLight(this._cur_button.getComponent(MeshRenderer), true);
              } else {
                this.setButtonColor(this._cur_button, this._color3);
              }
              EventManager.instance.emit(eEvent.onMouseDown, this._cur_button);
            } else {
              this.releaseCurButton();
            }
          } else {
            this.releaseCurButton();
          }
        }

        // 本次按下未命中可点击对象时必须丢弃上一次的按钮；否则抬起时会对旧按钮重复触发点击（重复下注、撤销或复投）。
        ;

        _proto.releaseCurButton = function releaseCurButton() {
          if (!this._cur_button) return;
          this.onMouseMoveOut(this._cur_button);
          this._cur_button = null;
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(node) {
          gts.Debug.Log("=" + sys.now() + "=onMouseMoveIn==" + node.name);
          // node.position = v3(node.position.x, 0.0001, node.position.z);

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            RouletteUtils.instance.setQuadLight(node.getComponent(MeshRenderer), true);
          } else {
            this.setButtonColor(node, this._color3);
          }
          EventManager.instance.emit(eEvent.onMouseMoveIn, node);
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(node) {
          gts.Debug.Log(sys.now() + "==onMouseMoveOut==" + node.name);
          // node.position = v3(node.position.x, 0, node.position.z);

          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            RouletteUtils.instance.setQuadLight(node.getComponent(MeshRenderer), false);
          } else {
            this.setButtonColor(node, this._color1);
          }
          EventManager.instance.emit(eEvent.onMouseMoveOut, node);
        };
        _proto.onMouseClick = function onMouseClick(node) {
          if (node.parent.name.match("Node_touchArea")) ;else if (node.name.match("Quad_")) {
            RouletteUtils.instance.setQuadLight(node.getComponent(MeshRenderer), false);
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
        return RouletteBtnCheck;
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

System.register("chunks:///_virtual/RouletteCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      cclegacy._RF.push({}, "837faBryKhFC5N00KCCHZ6C", "RouletteCamera", undefined);
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
      var RouletteCamera = exports('RouletteCamera', (_dec = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteCamera, _Component);
        function RouletteCamera() {
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
        var _proto = RouletteCamera.prototype;
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
        return RouletteCamera;
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

System.register("chunks:///_virtual/RouletteCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './RouletteModel.ts', './I18n.ts', './ViewManager.ts', './RouletteDef.ts', './RouletteUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, RouletteModel, i18n, ViewManager, eProto, eRunStatus, RouletteUtils, Common;
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
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "65caf49IihFkZAhwlDgG9Nb", "RouletteCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var RouletteCtrl = exports('RouletteCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(RouletteCtrl, _GameDef$BaseCtrl);
        function RouletteCtrl() {
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
          /** 下注已发出但结果无法确认；保持锁定直到退出房间，不退款、不重发。 */
          _this.betResultUnknown = false;
          _this.betAttempt = 0;
          _this.disposed = false;
          // 已请求离开房间；场景销毁前残余的延时回调不得再发出下注。
          _this.leaving = false;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = RouletteModel.instance;
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = RouletteCtrl.prototype;
        _proto.destroy = function destroy() {
          this.disposed = true;
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete RouletteCtrl._instance;
          RouletteCtrl._instance = null;
          RouletteModel.destroy();
          RouletteUtils.destroy();
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
        /** 返回 true 仅表示请求已发出，不代表服务端下注成功。 */
        _proto.reqBet = function reqBet(betArr) {
          var _this2 = this;
          if (betArr === void 0) {
            betArr = null;
          }
          if (!RouletteModel.instance.gameInfo) {
            return false;
          }

          // 上一注在途、结果不确定或本局已开始时再次提交会造成重复扣款。
          if (this.disposed || this.leaving || this.isBetWaiting || RouletteModel.instance.gameStatus != eRunStatus.NONE) {
            return false;
          }
          if (RouletteModel.instance.curTotalBet < RouletteModel.instance.gameInfo.TotalBetMin) {
            var tip = Common.strFormat(i18n.lang["10063"], Common.ChangeMoneyShow(RouletteModel.instance.gameInfo.TotalBetMin, 2));
            Common.showTip(tip);
            return false;
          }

          // 未连接时 NetManager 不会发出请求，不能进入等待，否则再无回复可以解锁。
          if (!NetManager.instance._connect) {
            return false;
          }
          this.isReqBet = true;
          var attempt = ++this.betAttempt;
          var unknown = function unknown() {
            if (_this2.disposed || attempt !== _this2.betAttempt || !_this2.isReqBet || _this2.betResultUnknown) return;
            // 本地等待结束不能证明服务端未下注；保留锁，不退款、不重发。
            _this2.betResultUnknown = true;
            Common.showTip(i18n.lang.betResultUnknown);
          };
          gts.Debug.LogWarr("==reqBet==" + JSON.stringify(betArr));
          NetManager.instance.sendOnlineData(eProto.HD_Bet, {
            betMsg: JSON.stringify(betArr)
          }, function (response) {
            // 空回复和 302/401 不会进入协议广播，结果无法确认；其余回复仍走 onRecvData。
            if (!response || response.Code == 302 || response.Code == 401) unknown();
            // 30211（游客不可下注）由 NetManager.recvNetData 提示后直接丢弃，同样到不了 onRecvData；
            // 服务端已明确拒绝，在这里结束等待，否则本次进房期间无法再下注。
            else if (response.Code == 30211) _this2.isReqBet = false;
          }, unknown);
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          this.leaving = true;
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
        //     NetManager.instance.sendOnlineData(RouletteDef.eProto.HD_History, {
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

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          gts.Debug.LogWarr("==onRecvData==" + JSON.stringify(data));

          // 只接受当前在途下注的回复；重复、迟到或上一实例的回复不得重置球和结果。
          if (data.cmd === eProto.HD_Bet && (!this.isReqBet || this.betResultUnknown)) return;
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
                RouletteModel.instance.gameInfo = data.Data;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                RouletteModel.instance.betResult = data.Data;
                break;
              }
            case eProto.HD_History:
              {
                RouletteModel.instance.gameRecord = data.Data.history || [];
                RouletteModel.instance.gameRecord = RouletteModel.instance.gameRecord.reverse();
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
                gts.Debug.LogWarr("==Roulette=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (RouletteModel.instance.curBalance > 0) {
                  RouletteModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                RouletteModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==Roulette=pushWallet==" + _HD_Wallet.VndBalance);
                if (RouletteModel.instance.curBalance > 0) {
                  RouletteModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                RouletteModel.instance.curBalance = _HD_Wallet.VndBalance;
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
        _createClass(RouletteCtrl, [{
          key: "isBetWaiting",
          get: /** 下注请求在途或结果不确定；期间界面必须冻结筹码编辑和再次开始。 */
          function get() {
            return this.isReqBet || this.betResultUnknown;
          }
        }]);
        return RouletteCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RouletteDef.ts", ['cc'], function (exports) {
  var cclegacy, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ce33awbbK5B86pux4tS0SND", "RouletteDef", undefined);
      var cBundle = exports('cBundle', "RouletteGame");
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "zpVip/HD_info";
        eProto["HD_Bet"] = "zpVip/HD_Bet";
        eProto["HD_History"] = "zpVip/HD_History";
        eProto["HD_Leave"] = "zpVip/HD_Leave";
        eProto["HD_betRecord"] = "zpVip/HD_betRecord";
        eProto["Record"] = "lobby/HD_QueryBetRecord";
        eProto["HD_Rank"] = "lobby/HD_GetWinRankList";
        return eProto;
      }({}));
      var eZindex = exports('eZindex', {
        NONE: 0,
        MASK: 1000,
        SPECIAL: 2000
      });
      var eConstDef = exports('eConstDef', {
        cSymbolW: 192,
        cSymbolH: 180
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
        eEvent["onBetStart"] = "onBetStart";
        eEvent["onRunStart"] = "onRunStart";
        eEvent["onRunEnd"] = "onRunEnd";
        eEvent["onGameEnd"] = "onGameEnd";
        eEvent["onUpdateGold"] = "onUpdateGold";
        eEvent["onBetClick"] = "onBetClick";
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
        Bet: "sound/Bet",
        Cancel: "sound/Cancel",
        Coins: "sound/Coins",
        Double: "sound/Double",
        Reward: "sound/Reward",
        Roll: "sound/Roll",
        Win: "sound/Win",
        stop: "sound/Stop",
        Ball: "sound/Ball",
        Tap: "sound/Tap",
        Settle: "sound/Settle",
        buttonClick: "sound/buttonClick",
        betTip: "sound/betTip",
        Weight: "sound/Weight"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RouletteGame", ['./label3D4.ts', './RouletteCtrl.ts', './RouletteDef.ts', './RouletteModel.ts', './RouletteScene.ts', './RouletteUtils.ts', './RouletteBtnCheck.ts', './RouletteCamera.ts', './RouletteGameView.ts', './RouletteViewCtrl.ts', './Roulette_area.ts', './RouletteBetRecord.ts', './RouletteRecord.ts', './UIPlane.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RouletteGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RouletteDef.ts', './RouletteModel.ts', './RouletteCtrl.ts', './RouletteUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './DataManager.ts', './Roulette_area.ts', './RouletteRecord.ts', './GameRecordLayer.ts', './RouletteCamera.ts', './RouletteBetRecord.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, Node, Label, director, Camera, tween, Tween, instantiate, UIOpacity, Sprite, color, eProto, eEvent, eSound, eRunStatus, RouletteModel, RouletteCtrl, RouletteUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, DataManager, UserKey, Roulette_area, RouletteRecord, GameRecordLayer, RouletteCamera, RouletteBetRecord;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      v3 = module.v3;
      Node = module.Node;
      Label = module.Label;
      director = module.director;
      Camera = module.Camera;
      tween = module.tween;
      Tween = module.Tween;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      color = module.color;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eSound = module.eSound;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      RouletteCtrl = module.RouletteCtrl;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
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
      Roulette_area = module.Roulette_area;
    }, function (module) {
      RouletteRecord = module.default;
    }, function (module) {
      GameRecordLayer = module.default;
    }, function (module) {
      RouletteCamera = module.RouletteCamera;
    }, function (module) {
      RouletteBetRecord = module.RouletteBetRecord;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _class3;
      cclegacy._RF.push({}, "4a7cdLHvH5ILIzOo0T+S+Ll", "RouletteGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      //
      var cameraInfo = {
        enter_0: {
          position: v3(1, 3.452, 3.301),
          rotation: v3(-30, 15, 0)
        },
        enter_1: {
          position: v3(0, 2, 1.459),
          rotation: v3(-30, 0, 0)
        },
        bet: {
          position: v3(0.256, 2.252, -0.208),
          rotation: v3(-80, 0, 0)
        },
        run: {
          position: v3(-0.351, 2.431, 0.941),
          rotation: v3(-48.4, -7)
        },
        // 开奖机位：对准转盘中心、俯角 45 度、距离约 0.86。俯角原为 30 度，远端的格子被压扁、号码难认，
        // 所以绕转盘中心抬高 15 度；位置和角度要一起改，否则镜头会偏离转盘中心。
        runStart: {
          position: v3(-0.898, 1.61, 0.473),
          rotation: v3(-45, 0)
        }
      };
      var cameraCruise = [{
        position: v3(0, 2.4, 1.783),
        rotation: v3(-30, 0, 0)
      }, {
        position: v3(-0.92, 1.69, 0.85),
        rotation: v3(-30, 0, 0)
      }, {
        position: v3(0.92, 1.69, 0.85),
        rotation: v3(-30, 0, 0)
      }, {
        position: v3(1.988, 1.849, -0.109),
        rotation: v3(-30, 67, 0)
      }, {
        position: v3(-0.9, 2.065, 0.272),
        rotation: v3(-70, 0, 0)
      }, {
        position: v3(-1.906, 1.409, 0.088),
        rotation: v3(-10, -70, 0)
      }];
      var RouletteGameView = exports('default', (_dec = ccclass("RouletteGameView"), _dec2 = menu("game/RouletteGame/RouletteGameView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Roulette_area), _dec11 = property(RouletteRecord), _dec12 = property(Node), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(RouletteGameView, _GameDef$BaseView);
        function RouletteGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.MainCamera = null;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comRoulette_area", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comRouletteRecord", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_lunpanchangjing", _descriptor10, _assertThisInitialized(_this));
          // 非空表示本局中奖且尚未清桌，元素为正在回收的筹码；未中奖的局保持 null，不在清桌时套用暂存钱包值。
          _this.collectingChips = null;
          _this.runCameraTween = null;
          _this.runCameraStarted = false;
          // 本局镜头已起步
          _this.runCameraElapsed = 0;
          _this.runCameraArrived = false;
          // 第一段已走完
          _this.runResultArrived = false;
          _this.isCameraCruise = false;
          return _this;
        }
        var _proto = RouletteGameView.prototype;
        // createBetList = [];
        // _chipPool: NodePool;
        // _chip: chip;
        // _selectChip: Node = null;
        //#endregion chipList
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, RouletteCtrl.instance);
          this.MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          NetManager.instance.sendOnlineData(eProto.HD_info, {});
          NetManager.instance.sendOnlineData(eProto.HD_History, {
            size: 100
          });
          if (RouletteModel.instance.isTest) {
            this.MainCamera.node.getComponent(RouletteCamera).enabled = true;
          }
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.on(eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.on(eEvent.onBetStart, this.onBetStart, this);
          EventManager.instance.on(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.on(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.off(eEvent.onRunEnd, this.onRunEnd, this);
          EventManager.instance.off(eEvent.onBetStart, this.onBetStart, this);
          EventManager.instance.off(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.off(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
          RouletteModel.instance.clearGameData();
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          // this._chipPool.clear();
        }
        //#endregion baseInterface
        ////////////////////////////////////////////////////////////////////////////////
        ;

        _proto.start = function start() {
          var _this2 = this;
          //
          if (!RouletteModel.instance.isTest) {
            tween(this.MainCamera.node).delay(0.5).to(3.0, {
              position: cameraInfo.enter_1.position,
              eulerAngles: cameraInfo.enter_1.rotation
            }, {
              easing: "cubicOut"
            }).to(3.0, {
              position: cameraInfo.bet.position,
              eulerAngles: cameraInfo.bet.rotation
            }, {
              easing: "cubicOut"
            }).call(function () {
              _this2.showStartBetTip();
              _this2.doCameraCruise();
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

            // if (NetManager.instance._connect == true) {
            //     if (RouletteModel.instance.isAuto && RouletteCtrl.instance.isReqBet) {
            //         RouletteCtrl.instance.reqBet();
            //     }
            // }
          }, 0.1);
        }

        //////////////////////////////////////////////////////
        ;

        _proto.initSelfInfo = function initSelfInfo() {
          var head_id = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          Common.getHead(head_id, this.selfHead);
          Common.nickNameFormatL(this.selfName, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.ChangeMoneyShow(gold, 2);
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();
          RouletteUtils.instance.loadRes_icon(function () {
            // RouletteCtrl.instance.reqEnterRoom();
          });
        };
        _proto.onWaitCameraCruise = function onWaitCameraCruise() {
          this.doCameraCruise(true);
        };
        _proto.onStopCameraCruise = function onStopCameraCruise(reWait) {
          if (this.isCameraCruise) {
            this.doCameraCruise(false, reWait);
          }
        }

        //#endregion chip list;
        //////////////////////////////////////////////////
        //按钮事件回调
        ;

        _proto.onClickExit = function onClickExit() {
          // 退出不可撤销：场景销毁前先停掉仍会推进牌局的相机动画和定时器，其余组件经 onLoadHall 各自收口。
          Tween.stopAllByTarget(this.MainCamera.node);
          this.unscheduleAllCallbacks();
          RouletteCtrl.instance.reqExit();
          EventManager.instance.emit(eEvent.onLoadHall);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("zpVip");
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", RouletteUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("zpVip", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", RouletteUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", RouletteUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //////////////////////////////////////////////////////////
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "head":
              {
                RouletteModel.instance.isAuto = !RouletteModel.instance.isAuto;
                break;
              }
            case "Button_betRecord":
              {
                Common.loadPopBuddle("prefab/Node_betRecord", RouletteUtils.instance.bundle, function () {}, function (prefab) {
                  var viewNode = instantiate(prefab);
                  RouletteModel.instance.comRouletteBetRecord = viewNode.getComponent(RouletteBetRecord);
                  ViewManager.instance.popNodeView(viewNode, true);
                }, true);
                break;
              }
          }
        }

        /**
         *
         * @param event
         * @param betPos da:0 xiao:1 dan:2 shuang:3 点数：4-9
         */;
        _proto.onBetClick = function onBetClick() {
          //

          this.updateGold();
        };
        _proto.doAwait = function doAwait(delay) {
          var _this3 = this;
          return new Promise(function (resolve, reject) {
            _this3.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.showStartBetTip = function showStartBetTip() {
          RouletteUtils.instance.playSound(eSound.betTip);
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(2.0).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.doShowResult = function doShowResult() {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var betResult = RouletteModel.instance.betResult;
            gts.Debug.Log("==doShowResult==" + JSON.stringify(betResult));

            //加入记录
            RouletteModel.instance.gameRecord.push({
              GameNo: betResult.GameNo,
              OpenNum: betResult.OpenNum,
              Reward: betResult.Reward,
              BetArr: RouletteModel.instance.betInfo
            });
            _this4.comRouletteRecord.updateRecord();
            if (RouletteModel.instance.comRouletteBetRecord) {
              RouletteModel.instance.comRouletteBetRecord.updateRecord(true);
            }

            // EventManager.instance.emit(RouletteDef.eEvent.onUpdatePath, RouletteModel.instance.gameRecord);

            _this4.scheduleOnce(function () {
              RouletteModel.instance.gameStatus = eRunStatus.END;

              //showResult
              _this4.Node_result.active = true;
              var Node_win = _this4.Node_result.getChildByName("Node_win");
              Node_win.active = false;
              _this4.Node_result.getComponent(UIOpacity).opacity = 0;
              tween(_this4.Node_result.getComponent(UIOpacity)).to(0.25, {
                opacity: 255
              }).delay(4.5).to(0.25, {
                opacity: 0
              }).call(function () {
                _this4.Node_result.active = false;
                resolve();
              }).start();
              var getLNNum = RouletteUtils.instance.getLNNum(betResult.OpenNum);
              var midNum = betResult.OpenNum;
              var lastNum = getLNNum[0];
              var nextNum = getLNNum[1];
              var colorIndex_mid = RouletteUtils.instance.checkColor(midNum);
              var colorIndex_next = RouletteUtils.instance.checkColor(nextNum);
              var colorIndex_last = RouletteUtils.instance.checkColor(lastNum);
              var Sprite_mid = _this4.Node_result.getChildByName("Sprite_mid");
              var Sprite_next = _this4.Node_result.getChildByName("Sprite_next");
              var Sprite_last = _this4.Node_result.getChildByName("Sprite_last");
              Sprite_mid.getComponent(Sprite).color = colorIndex_mid == 1 ? color(0, 255, 0, 255) : colorIndex_mid == 2 ? color(255, 0, 0, 255) : color(0, 0, 0, 255);
              Sprite_next.getComponent(Sprite).color = colorIndex_next == 1 ? color(0, 255, 0, 255) : colorIndex_next == 2 ? color(255, 0, 0, 255) : color(0, 0, 0, 255);
              Sprite_last.getComponent(Sprite).color = colorIndex_last == 1 ? color(0, 255, 0, 255) : colorIndex_last == 2 ? color(255, 0, 0, 255) : color(0, 0, 0, 255);
              var Label_mid = _this4.Node_result.getChildByName("Label_mid");
              var Label_last = _this4.Node_result.getChildByName("Label_last");
              var Label_next = _this4.Node_result.getChildByName("Label_next");
              Label_mid.getComponent(Label).string = "" + midNum;
              Label_last.getComponent(Label).string = "" + lastNum;
              Label_next.getComponent(Label).string = "" + nextNum;

              //updateGold--showResult
              if (betResult.Reward > 0) {
                RouletteUtils.instance.playSound(eSound.Win);

                //collectChip
                _this4.collectingChips = [];
                _this4.scheduleOnce(_this4.doCollectChip, 3);
                Node_win.active = true;
                // let inter = Common.numFormatInt(betResult.Reward / 1000);
                // let digit = RouletteUtils.instance.numberFormatD(betResult.Reward / 1000, 2.0);
                _this4.Label_win.string = Common.ChangeMoneyShow(betResult.Reward, 2);
              } else {
                RouletteUtils.instance.playSound(eSound.betTip);
              }
            }, 0);
          });
        };
        // 中奖局把余额切换到服务端结算值（暂存在 endBalance）；钱包推送未到时不动，留待清桌前再试。
        _proto.applyWinBalance = function applyWinBalance() {
          if (!this.collectingChips || RouletteModel.instance.endBalance <= 0) return;
          RouletteModel.instance.curBalance = RouletteModel.instance.endBalance;
          RouletteModel.instance.endBalance = 0;
          this.updateGold();
        }

        /**
         * 清桌前结束中奖回收。筹码逐枚错开起飞，数量多时清桌会早于最后一枚落地，
         * 余额不能只等全部落地；被清掉的筹码先停动画，避免回调落在已销毁节点上。
         */;
        _proto.finishCollectChip = function finishCollectChip() {
          if (!this.collectingChips) return;
          this.unschedule(this.doCollectChip);
          for (var _iterator = _createForOfIteratorHelperLoose(this.collectingChips), _step; !(_step = _iterator()).done;) {
            var chipNode = _step.value;
            Tween.stopAllByTarget(chipNode);
          }
          this.applyWinBalance();
          this.collectingChips = null;
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var key = "" + RouletteModel.instance.betResult.OpenNum;
            var arrNode = RouletteModel.instance.betChipInfo[key] || [];
            var icounts = 0;
            var _loop = function _loop() {
              var chipNode = _step2.value;
              var destNode = _this5.X_lunpanchangjing.getChildByName(chipNode.name);
              if (destNode) {
                var _this5$collectingChip;
                var delay = icounts * 0.05;
                (_this5$collectingChip = _this5.collectingChips) == null || _this5$collectingChip.push(chipNode);
                tween(chipNode).sequence(tween(chipNode).delay(delay), _this5.doJump(chipNode, 0.5, destNode.worldPosition)).call(function () {
                  RouletteUtils.instance.playSound(eSound.Reward);
                  // 飞回的筹码交还下注区的筹码池复用。
                  _this5.comRoulette_area.recycleChip(chipNode);
                  icounts--;
                  if (icounts == 0) {
                    //更新金币--显示得分
                    _this5.applyWinBalance();
                  }
                }).start();
                icounts++;
              }
            };
            for (var _iterator2 = _createForOfIteratorHelperLoose(arrNode), _step2; !(_step2 = _iterator2()).done;) {
              _loop();
            }

            // 开奖号上没有可回收的筹码时不会有落地回调，直接结算。
            if (icounts == 0) {
              _this5.applyWinBalance();
            }
          });
        };
        _proto.doJump = function doJump(target, duration, toPos, hight) {
          if (hight === void 0) {
            hight = 0.4;
          }
          var startPos = target.worldPosition;
          var cpY = (startPos.y + toPos.y) / 2 + hight;
          return tween(target).bezierTo3W(duration, startPos, v3(startPos, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
            easing: "cubicOutIn"
          });
        };
        _proto.onRunEnd = /*#__PURE__*/function () {
          var _onRunEnd = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this6 = this;
            var isAuto;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // 两条收尾分支相隔数秒，必须基于同一次读取，否则中途切换自动模式会让收尾执行两次或一次都不执行。
                  isAuto = RouletteModel.instance.isAuto;
                  tween(this.MainCamera.node).delay(1).to(1.0, {
                    position: cameraInfo.bet.position,
                    eulerAngles: cameraInfo.bet.rotation
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this6.comRoulette_area.onRunEnd();
                    if (isAuto) {
                      _this6.scheduleOnce(function () {
                        RouletteModel.instance.gameStatus = eRunStatus.NONE;
                        _this6.finishCollectChip();
                        _this6.comRoulette_area.clearBet();
                        if (_this6.Node_result.active) {
                          tween(_this6.Node_result.getComponent(UIOpacity)).to(0.25, {
                            opacity: 0
                          }).call(function () {
                            _this6.Node_result.active = false;
                          }).start();
                        }
                        EventManager.instance.emit(eEvent.onGameEnd);
                      }, 2);
                    }
                  }).start();
                  _context.next = 4;
                  return this.doShowResult();
                case 4:
                  if (!isAuto) {
                    RouletteModel.instance.gameStatus = eRunStatus.NONE;
                    this.finishCollectChip();
                    this.comRoulette_area.clearBet();
                    EventManager.instance.emit(eEvent.onGameEnd);
                  }
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRunEnd() {
            return _onRunEnd.apply(this, arguments);
          }
          return onRunEnd;
        }();
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(RouletteModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            RouletteUtils.instance.updateLabel(this.selfGold, strGold);
          }
        }
        //    //net update
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_info:
              {
                this.initUIView();
                break;
              }
            case eProto.HD_Bet:
              {
                RouletteModel.instance.gameStatus = eRunStatus.START;
                RouletteModel.instance.betOrderBack = RouletteModel.instance.betOrderList.slice();

                // 镜头通常已在点击开始时起步（onBetStart）；这里登记“回复已到”，镜头到位后才开转。
                // 没有提前起步的入口从这里补上，时序与改动前一致。
                if (!this.runCameraStarted) this.onBetStart();
                this.runResultArrived = true;
                this.tryRunStart();

                // for (const childNode of this.Node_betRoot.children) {
                //     tween(childNode)
                //         .to(1.0, { scale: v3(0.75, 0.75, 0.75) })
                //         .start();
                // }

                this.updateGold();
                break;
              }
            case eProto.Record:
              {
                // this.updateGold();
                break;
              }
            case eProto.HD_History:
              {
                this.comRouletteRecord.updateRecord();
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
        }
        ////////////////////////////////////////////////////////////////////////////////
        // // 圆心
        // circleCenter: Vec2 = v2(0, 0.4);
        // // 半径
        // circleRadius: number = 250;
        // // 速度
        // speed: number = 10;
        // // 弧度
        // radian: number = 0;

        // circleMove(dt) {
        //     let circleRadius = this.circleRadius * Math.sin(this.radian);
        //     // 先计算弧度
        //     if (circleRadius < 2.5) {
        //         this.speed = -this.speed;
        //     }

        //     this.radian += dt * (this.speed / 100);
        //     let x = circleRadius * Math.cos(this.radian) + this.circleCenter.x;
        //     let z = circleRadius * Math.sin(this.radian) + this.circleCenter.y;
        //     this.MainCamera.node.position = v3(x, this.MainCamera.node.position.y, z);
        //     this.MainCamera.node.lookAt(v3(0, 0.9, 0.4), v3(0, 1, 0));
        // }

        ////////////////////////////////////////////////////////////////////////////////
        // 开奖镜头分两段：先推到 run 机位，再随开转推到 runStart 机位。
        // 第一段在点击开始时就起步，不等下注回复；开转和第二段必须等回复，因为开奖号由服务端给出。
        ;
        // 本局下注回复已到
        _proto.onBetStart = function onBetStart() {
          if (this.runCameraStarted) return;
          this.runCameraStarted = true;
          this.runCameraElapsed = 0;
          this.runCameraArrived = false;
          this.runResultArrived = false;
          this.runCameraTween = tween(this.MainCamera.node).to(RouletteGameView.RUN_CAMERA_SECONDS, {
            position: cameraInfo.run.position,
            eulerAngles: cameraInfo.run.rotation
          }, {
            easing: "cubicOut"
          }).start();
          this.schedule(this.watchRunCamera);
        }

        /**
         * 第一段是否走完按经过的时间判断，不依赖动画的结束回调：相机上的动画会被别处整体停掉
         * （巡航切换用 Tween.stopAllByTarget），回调一旦丢失这一局就永远不会开转。
         */;
        _proto.watchRunCamera = function watchRunCamera(dt) {
          if (!this.runCameraArrived) {
            this.runCameraElapsed += dt;
            this.runCameraArrived = this.runCameraElapsed >= RouletteGameView.RUN_CAMERA_SECONDS;
          }
          if (this.runResultArrived) {
            this.tryRunStart();
            return;
          }
          if (this.comRoulette_area.isStartSubmitting()) return;

          // 请求没发出、被服务端拒绝或结果无法确认：这一局不会开奖，镜头退回下注机位，否则会一直停在转盘上。
          this.unschedule(this.watchRunCamera);
          this.runCameraStarted = false;
          if (this.runCameraTween) this.runCameraTween.stop();
          this.runCameraTween = tween(this.MainCamera.node).to(1.0, {
            position: cameraInfo.bet.position,
            eulerAngles: cameraInfo.bet.rotation
          }, {
            easing: "cubicOut"
          }).start();
        };
        _proto.tryRunStart = function tryRunStart() {
          if (!this.runCameraArrived || !this.runResultArrived) return;
          this.unschedule(this.watchRunCamera);
          this.runCameraStarted = false;
          EventManager.instance.emit(eEvent.onRunStart);
          this.runCameraTween = tween(this.MainCamera.node).to(4, {
            position: cameraInfo.runStart.position,
            eulerAngles: cameraInfo.runStart.rotation
          }, {
            easing: "cubicInOut"
          }).start();
        };
        _proto.doCameraCruise = function doCameraCruise(isShow, reWait) {
          var _tween$delay;
          if (isShow === void 0) {
            isShow = true;
          }
          if (reWait === void 0) {
            reWait = false;
          }
          var delay = reWait ? 32 : 30;
          Tween.stopAllByTarget(this.MainCamera.node);
          if (!isShow) {
            this.isCameraCruise = false;
            tween(this.MainCamera.node).to(1.5, {
              position: cameraInfo.bet.position,
              eulerAngles: cameraInfo.bet.rotation
            }, {
              easing: "cubicOut"
            }).start();
            if (!reWait) {
              return;
            }
          }
          this.isCameraCruise = true;
          var arrTween = [];
          for (var _i = 0, _cameraCruise = cameraCruise; _i < _cameraCruise.length; _i++) {
            var info = _cameraCruise[_i];
            arrTween.push(tween(this.MainCamera.node).to(20, {
              position: info.position,
              eulerAngles: info.rotation
            }, {
              easing: "quadInOut"
            }).delay(1));
          }
          (_tween$delay = tween(this.MainCamera.node).delay(delay)).sequence.apply(_tween$delay, arrTween).repeatForever().start();
        };
        return RouletteGameView;
      }(GameDef.BaseView), _class3.RUN_CAMERA_SECONDS = 1.5, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec3], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "addScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Sprite_betTip", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec8], {
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
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "comRoulette_area", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "comRouletteRecord", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "X_lunpanchangjing", [_dec12], {
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

System.register("chunks:///_virtual/RouletteModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './RouletteDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7dc39STTPBIVp6zHxv/81WS", "RouletteModel", undefined);
      var RouletteModel = exports('RouletteModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RouletteModel, _GameDef$BaseSington);
        function RouletteModel() {
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
          // 历史请求可能失败或晚于首局结算；初值必须可追加，否则结算抛错后状态回不到可下注。
          _this.gameRecord = [];
          _this.winArea = [false, false, false, false, false, false, false, false, false, false];
          _this._betRound = 0;
          _this.comRouletteBetRecord = null;
          _this._betResult = null;
          return _this;
        }
        var _proto = RouletteModel.prototype;
        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {};
        _createClass(RouletteModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
          }
        }]);
        return RouletteModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RouletteRecord.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RouletteModel.ts', './RouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, instantiate, Label, color, Sprite, Component, RouletteModel, RouletteUtils;
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
      instantiate = module.instantiate;
      Label = module.Label;
      color = module.color;
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "79f73fcN9RMCrqE7+xNahRo", "RouletteRecord", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RouletteRecord = exports('default', (_dec = ccclass("RouletteRecord"), _dec2 = menu("game/Roulette/RouletteRecord"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteRecord, _Component);
        function RouletteRecord() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Node_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_item", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_none", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_hong", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_hui", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spriteFrame_lv", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = RouletteRecord.prototype;
        _proto.start = function start() {
          // for (let i = 0; i < 20; i++) {
          //     let node = this.Node_content.getChildByName(`Node_item_${i}`);
          //     if (!node) {
          //         node = instantiate(this.Node_item);
          //         node.name = `Node_item_${i}`;
          //         this.Node_content.addChild(node);
          //     }
          //     node.active = true;
          // }
        };
        _proto.updateRecord = function updateRecord() {
          var maxIndex = 20;
          var iStart = RouletteModel.instance.gameRecord.length > maxIndex ? RouletteModel.instance.gameRecord.length - maxIndex : 0;
          var recordData = RouletteModel.instance.gameRecord.slice(iStart);
          for (var i = 0; i < maxIndex; i++) {
            // for (let i = 0; i < recordData.length; i++) {
            var node = this.Node_content.children[i];
            if (!node) {
              node = instantiate(this.Node_item);
              node.name = "Node_item_" + i;
              this.Node_content.addChild(node);
              node.active = true;
            }
            var result = recordData[i];
            if (result) {
              var Sprite_tag = node.getChildByName("Sprite_tag");
              var Label_result = node.getChildByName("Label_result");
              Sprite_tag.active = i == recordData.length - 1 ? true : false;
              Label_result.active = true;
              Label_result.getComponent(Label).string = "" + result.OpenNum;
              var colorIndex = RouletteUtils.instance.checkColor(result.OpenNum);
              Label_result.getComponent(Label).color = colorIndex == 1 ? color(0, 255, 0, 255) : colorIndex == 2 ? color(255, 0, 0, 255) : color(255, 255, 255, 255);
              if (Sprite_tag.active) {
                Label_result.getComponent(Label).color = color(255, 255, 255, 255);
                Sprite_tag.getComponent(Sprite).spriteFrame = colorIndex == 1 ? this.spriteFrame_lv : colorIndex == 2 ? this.spriteFrame_hong : this.spriteFrame_hui;
              }
            }
          }
        };
        return RouletteRecord;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_none", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_hong", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_hui", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame_lv", [_dec8], {
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

System.register("chunks:///_virtual/RouletteScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './RouletteDef.ts', './RouletteUtils.ts', './Common.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, assetManager, director, isValid, view, Component, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, cBundle, eEvent, RouletteUtils, Common, RenderScaleWatcher;
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
      assetManager = module.assetManager;
      director = module.director;
      isValid = module.isValid;
      view = module.view;
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
      RouletteUtils = module.RouletteUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "76e02ycYy1DSL9tOqy+SkRG", "RouletteScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var RouletteScene = exports('default', (_dec = ccclass("RouletteScene"), _dec2 = menu("RouletteGame/RouletteScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteScene, _Component);
        function RouletteScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor2, _assertThisInitialized(_this));
          _this._node_Game = null;
          return _this;
        }
        var _proto = RouletteScene.prototype;
        _proto.onLoad = function onLoad() {
          NetManager.instance.waitServiceSendData();
          RouletteUtils.instance.bundle = assetManager.getBundle(cBundle);
          RouletteUtils.instance.preLoad();
          RouletteUtils.instance.playBgMusic();

          // this.onLoadGame();
        };

        _proto.start = function start() {
          // 低端机自动降分辨率由 ViewManager 挂载的 RenderScaleWatcher 负责。本场景进场后还要加载贴图和音效目录，
          // 期间帧率只有稳定值的几分之一；此时统计会先降档、因"无改善"被回退并永久停止（PDBM00 实测如此）。
          // 所以先暂停统计，等这些加载结束再开始。
          var scene = director.getScene();
          var watcher = scene ? scene.getComponentInChildren(RenderScaleWatcher) : null;
          if (!watcher) return;
          watcher.hold();
          RouletteUtils.instance.whenLoadsIdle(function () {
            if (isValid(watcher, true)) watcher.begin();
          });
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          // EventManager.instance.on(RouletteDef.eEvent.onLoadGame, this.onLoadGame, this);
        };

        _proto.onDisable = function onDisable() {
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          // EventManager.instance.off(RouletteDef.eEvent.onLoadGame, this.onLoadGame, this);

          AudioManager.instance.playBgMusic();
        };
        _proto.onResize = function onResize() {
          // let MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          // MainCamera.camera.resize(1920, 1080);
        };
        _proto.onLoadHall = function onLoadHall() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }

          //        //退到大厅
          Common.returnToHall(this, cBundle);
        }
        // onLoadGame() {
        //     console.time("bundle.onLoadGame");

        //     if (!this.prefab_game) {
        //         Common.showWait();
        //         RouletteUtils.instance.bundle.load(
        //             "prefab/RouletteGameView",
        //             Prefab,
        //             (cur, total) => {},
        //             (err, prefab: Prefab) => {
        //                 this.prefab_game = prefab;
        //                 this.showGame();
        //             }
        //         );
        //     } else {
        //         this.showGame();
        //     }
        // }
        // showGame() {
        //     if (this.prefab_game) {
        //         let fadeInTimes = 0;
        //         if (!this._node_Game) {
        //             this._node_Game = instantiate(this.prefab_game);
        //             this.node.addChild(this._node_Game);
        //             //                // this._node_Game.opacity = 0;
        //             fadeInTimes = 0.15;
        //         }

        //         this.onResize();

        //         tween(this._node_Game.getComponent(UIOpacity))
        //             .stop()
        //             .to(fadeInTimes, { opacity: 255 })
        //             .call(() => {
        //                 Common.closeWait();
        //             })
        //             .start();

        //         Common.closeWait();
        //         console.timeEnd("bundle.onLoadGame");
        //     }
        // }

        //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return RouletteScene;
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RouletteUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './RouletteDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, color, Material, Prefab, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, assetManager, GameDef, AudioManager, eSound, cBundle, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      color = module.color;
      Material = module.Material;
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
      eSound = module.eSound;
      cBundle = module.cBundle;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5b09a5b+btLTqXSIzaDmVwY", "RouletteUtils", undefined);
      var cRed = [1, 3, 5, 7, 9, 12, 16, 14, 18, 32, 19, 21, 25, 34, 27, 36, 30, 23];
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var RouletteUtils = exports('RouletteUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(RouletteUtils, _GameDef$BaseSington);
        function RouletteUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.quadLitOfBase = new Map();
          _this.quadBaseOfLit = new Map();
          // 进场阶段尚未完成的目录加载数，及等待它归零的回调。
          _this.pendingLoads = 0;
          _this.loadsIdleCallbacks = [];
          _this.soundIDList = {};
          _this.soundGeneration = 0;
          return _this;
        }
        RouletteUtils.destroy = function destroy() {
          // 高亮材质是运行时创建的，不随资源引用计数释放，需随单例一起销毁。
          var self = this._instance;
          if (self) {
            self.quadLitOfBase.forEach(function (material) {
              return material.destroy();
            });
            self.quadLitOfBase.clear();
            self.quadBaseOfLit.clear();
          }
          _GameDef$BaseSington.destroy.call(this);
        }

        /**
         * 下注格高亮。约 200 个格子共用开启实例化的 mQuad 材质，靠它合批；
         * 高亮只在原共享材质和一份全不透明的共享副本之间切换，不能取 material（会生成独立实例并永久退出合批）。
         * 已有独立实例的格子（带专属贴图）无法共享，仍改自身实例的颜色。
         * 未高亮的格子是全透明的，但只要渲染器启用就仍会逐像素参与混合；铺满桌面的两百个格子在填充率受限的
         * 低端 GPU 上是纯开销（PDBM00 下注视角实测约 35 帧对 38 帧），所以未高亮时直接停用渲染器。点击判定走碰撞体，不受影响。
         */;
        var _proto = RouletteUtils.prototype;
        _proto.setQuadLight = function setQuadLight(mRender, isShow) {
          if (!mRender) {
            return;
          }
          mRender.enabled = isShow;
          var shared = mRender.getSharedMaterial(0);
          if (!shared || mRender.getRenderMaterial(0) !== shared) {
            mRender.material.setProperty("mainColor", color(255, 255, 255, isShow ? 255 : 0));
            return;
          }
          var base = this.quadBaseOfLit.get(shared) || shared;
          var target = base;
          if (isShow) {
            target = this.quadLitOfBase.get(base);
            if (!target) {
              target = new Material();
              target.copy(base);
              target.setProperty("mainColor", color(255, 255, 255, 255));
              this.quadLitOfBase.set(base, target);
              this.quadBaseOfLit.set(target, base);
            }
          }
          if (shared !== target) {
            mRender.setSharedMaterial(target, 0);
          }
        };
        _proto.trackLoad = function trackLoad() {
          var _this2 = this;
          this.pendingLoads++;
          var finished = false;
          return function () {
            if (finished) return;
            finished = true;
            if (--_this2.pendingLoads > 0) return;
            var callbacks = _this2.loadsIdleCallbacks;
            _this2.loadsIdleCallbacks = [];
            callbacks.forEach(function (callback) {
              return callback();
            });
          };
        }

        /**
         * 进场的目录加载（预加载和下注区贴图）全部结束后回调；当前没有在途加载则立即回调。
         * 低端机上这些加载会持续占用主线程，期间帧率远低于稳定值，不能作为画质判断的依据。
         */;
        _proto.whenLoadsIdle = function whenLoadsIdle(callback) {
          if (this.pendingLoads <= 0) {
            callback();
            return;
          }
          this.loadsIdleCallbacks.push(callback);
        }

        //资源预加载
        ;

        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/RouletteGameView");
          this.bundle.preloadDir("prefab", this.trackLoad());
          this.bundle.preloadDir("sound", this.trackLoad());
        };
        _proto.asyncLoad = /*#__PURE__*/function () {
          var _asyncLoad = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(parth, type, onComplete) {
            var _this3 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  return _context.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.bundle.load(parth, type, function (error, assets) {
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
            var _this4 = this;
            var loadDone;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.bundle) {
                    this.bundle = assetManager.getBundle(cBundle);
                  }
                  loadDone = this.trackLoad();
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this4.bundle.loadDir(parth, type, function (error, assets) {
                      try {
                        onComplete(error, assets);
                      } finally {
                        loadDone();
                      }
                      error ? reject(false) : resolve(true);
                    });
                  }));
                case 3:
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
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            if (isshowWait) {
              Common.showWait();
            }
            _this5.bundle.load(path, Prefab, function (cur, total) {
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
        _proto.playBgMusic = function playBgMusic(soundPath) {
          if (soundPath === void 0) {
            soundPath = eSound.bgm;
          }
          AudioManager.instance.playBgMusic(soundPath, this.bundle, true);
          // audioEngine.setMusicVolume(0.75);
        };

        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this6 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          var generation = this.syncSoundGeneration();
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (!err) _this6.startSound(soundPath, audioClip, isLoop, cb, generation);
          });
        }

        /**
         * 与画面对点的音效（撞击、落地）用这个：片段已在包缓存里时当帧播出。
         * bundle.load 即使命中缓存，回调也要等到下一帧（真机 30 帧时实测晚约 35 毫秒），声音会比画面慢一拍。
         * 片段还没进缓存时退回 playSound；需要对点的片段应提前用 warmSound 预热。
         */;
        _proto.playSoundNow = function playSoundNow(soundPath) {
          var audioClip = this.bundle.get(soundPath, AudioClip);
          if (!audioClip) {
            this.playSound(soundPath);
            return;
          }
          this.startSound(soundPath, audioClip, false, null, this.syncSoundGeneration());
        }

        /** 把片段提前加载进包缓存，本身不发声。 */;
        _proto.warmSound = function warmSound(soundPath) {
          if (!this.bundle.get(soundPath, AudioClip)) {
            this.bundle.load(soundPath, AudioClip, function () {});
          }
        }

        // 全局清场（切后台、返回大厅）不触发结束回调；代次变化后旧的播放标记全部失效，否则同一音效再也播不出来。
        ;

        _proto.syncSoundGeneration = function syncSoundGeneration() {
          var generation = AudioManager.instance.effectGeneration;
          if (this.soundGeneration !== generation) {
            this.soundGeneration = generation;
            this.soundIDList = {};
          }
          return generation;
        };
        _proto.startSound = function startSound(soundPath, audioClip, isLoop, cb, generation) {
          var _this7 = this;
          // 清场之后才加载完成的音效属于旧场次，不能再启动（循环音无人停止）。
          if (AudioManager.instance.effectGeneration !== generation || this.soundIDList[soundPath]) {
            return;
          }
          var soundID = AudioManager.instance.playSound(audioClip, isLoop);
          this.soundIDList[soundPath] = soundID;
          AudioManager.instance.setFinishCallback(soundID, function () {
            _this7.soundIDList[soundPath] = null;
            delete _this7.soundIDList[soundPath];
            if (cb) {
              cb();
            }
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
          var _this8 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this8.numberFormatD(num, 2);
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
          var _this9 = this;
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

          //        // RouletteUtils.instance.playSound(RouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // RouletteUtils.instance.stopSound(RouletteDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this9.numberFormatFloatD(curWin / 1000, 2.0) : _this9.numberFormatD(curWin / 1000, 2.0);
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
          var _this10 = this;
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

          //        // RouletteUtils.instance.playSound(RouletteDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // RouletteUtils.instance.stopSound(RouletteDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this10.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this10.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this11 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // RouletteUtils.instance.playSound(RouletteDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // RouletteUtils.instance.stopSound(RouletteDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this11.numberFormatFloat(curWin, 0) : "" + _this11.numberFormat(curWin, 0);
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
        return RouletteUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RouletteViewCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './RouletteDef.ts', './RouletteModel.ts', './RouletteUtils.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Camera, Node, v2, v3, Tween, Vec3, tween, game, RigidBody, ERigidBodyType, Component, EventManager, eRunStatus, eEvent, eSound, RouletteModel, RouletteUtils;
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
      v2 = module.v2;
      v3 = module.v3;
      Tween = module.Tween;
      Vec3 = module.Vec3;
      tween = module.tween;
      game = module.game;
      RigidBody = module.RigidBody;
      ERigidBodyType = module.ERigidBodyType;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
      eSound = module.eSound;
    }, function (module) {
      RouletteModel = module.RouletteModel;
    }, function (module) {
      RouletteUtils = module.RouletteUtils;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;
      cclegacy._RF.push({}, "ae451mESDlH64LIPisIdxjJ", "RouletteViewCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var cDisAngle = 2 * Math.PI / arrIRound.length;
      // 球绕圈到开始寻位的时长（秒）。旧实现按帧耗时折算，60 帧设备约 4 秒、30 帧左右的低端机约 7 秒；
      // 统一取 7 秒：实机反馈 4 秒观感过短。
      var SPIN_SECONDS = 7;
      var RouletteViewCtrl = exports('RouletteViewCtrl', (_dec = ccclass("RouletteGame/RouletteViewCtrl"), _dec2 = property(Camera), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(RouletteViewCtrl, _Component);
        function RouletteViewCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "qiu", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "axisNode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_anchor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_dest_0", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_zhuanPan", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "X_lunpanjinshu", _descriptor7, _assertThisInitialized(_this));
          // update(deltaTime: number) {}
          ////////////////////////////////////////////////////////////////////////////////
          // 圆心
          _this.circleCenter = v2(-0.897136, -0.161146);
          // 半径
          _this.circleRadius = 0;
          // 速度
          _this.speed = 500;
          // 弧度
          _this.radian = 0;
          _this.axisSpeed = 0.74997;
          // endRun = false;
          // startCheckDir = false;
          _this.resultNum = -1;
          _this.runState = eRunStatus.NONE;
          _this.jumpDone = false;
          ////////////////////////////////////////////////////////////////////////////////
          // 新开奖演出
          //
          // 思路：球的每个落点都用“相对转盘的角度”描述，每帧按 0 号格当前所在的角度换算成世界坐标。
          // 落点随转盘一起转，不需要预测转盘之后转到哪里，所以任何帧率下都准确落进开奖格；
          // 弹几下、落在哪里由 show.routes 明确给出，不再依赖预测误差。
          _this.showPlan = null;
          _this.showTime = 0;
          return _this;
        }
        var _proto = RouletteViewCtrl.prototype;
        // @property(Node)
        // arrDice: Node[] = [];
        ////////////////////////////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.update = function update(dt) {
          // 按帧自转，每帧转 axisSpeed 度，转速随帧率变化。落球段的跳动观感是在这个转速下调出来的，
          // 不要改成按时间折算：实测那样转盘在低端机上快一倍，球的补跳也随之减少。
          // 新演出需要提前算出格子转到挡片前的时刻，转盘必须按时间匀速转。
          var show = RouletteViewCtrl.show;
          var step = show.enabled ? (this.axisSpeed > 0 ? 1 : -1) * show.wheelDegPerSec * dt : this.axisSpeed;
          var eulerAnglesY = (this.axisNode.eulerAngles.y + step) % 360;
          this.axisNode.eulerAngles = v3(this.axisNode.eulerAngles.x, eulerAnglesY, this.axisNode.eulerAngles.z);
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onTestClick, this.onTestClick, this);
          EventManager.instance.on(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onExitRoom, this);

          // for (const jinsu of this.X_lunpanjinshu) {
          //     jinsu.getComponent(MeshCollider).on("onCollisionEnter", this.onCollisionEnter, this);
          //     jinsu.getComponent(MeshCollider).on("onCollisionStay", this.onCollisionStay, this);
          //     jinsu.getComponent(MeshCollider).on("onCollisionExit", this.onCollisionExit, this);
          // }

          // this.X_zhuanPan.getComponent(MeshCollider).on("onCollisionEnter", this.onCollisionEnter, this);
          // this.X_zhuanPan.getComponent(MeshCollider).on("onCollisionStay", this.onCollisionStay, this);
          // this.X_zhuanPan.getComponent(MeshCollider).on("onCollisionExit", this.onCollisionExit, this);
        };

        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onTestClick, this.onTestClick, this);
          EventManager.instance.off(eEvent.onRunStart, this.onRunStart, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onExitRoom, this);

          // for (const jinsu of this.X_lunpanjinshu) {
          //     jinsu.getComponent(MeshCollider).off("onCollisionExit", this.onCollisionExit, this);
          //     jinsu.getComponent(MeshCollider).off("onCollisionEnter", this.onCollisionEnter, this);
          //     jinsu.getComponent(MeshCollider).off("onCollisionStay", this.onCollisionStay, this);
          // }

          // this.X_zhuanPan.getComponent(MeshCollider).off("onCollisionEnter", this.onCollisionEnter, this);
          // this.X_zhuanPan.getComponent(MeshCollider).off("onCollisionStay", this.onCollisionStay, this);
          // this.X_zhuanPan.getComponent(MeshCollider).off("onCollisionExit", this.onCollisionExit, this);
        }
        // selfCollider = {};
        // onCollisionStay(event: any) {
        //     // console.log(`=====onCollisionStay=other.name==${event.otherCollider.node.name}==`);
        //     // console.log(`=====onCollisionStay=selfCollider.name==${event.selfCollider.node.name}==`);
        //     if ("X_lunpan2" == event.selfCollider.node.name) {
        //         console.log(`=====onCollisionStay=selfCollider.name==${event.selfCollider.node.name}==`);

        //         return;
        //     }

        //     // let disLenth = Vec3.distance(event.otherCollider.node.worldPosition, event.selfCollider.node.worldPosition);
        //     // console.log(`=====onCollisionStay=disLenth==${disLenth}==`);

        //     // if (this.selfCollider[event.selfCollider.node.name]) {
        //     //     // let disLenth = Vec3.distance(event.otherCollider.node.worldPosition, event.selfCollider.node.worldPosition);
        //     //     // console.log(`=====onCollisionStay=disLenth==${disLenth}==`);
        //     //     this.selfCollider[event.selfCollider.node.name] = null;
        //     // }
        // }

        // onCollisionEnter(event: any) {
        //     // console.log(`=====onCollisionEnter=other.name==${event.otherCollider.node.name}==`);
        //     // console.log(`=====onCollisionEnter=selfCollider.name==${event.selfCollider.node.name}==`);
        //     let name: string = event.selfCollider.node.name;
        //     if ("X_lunpan2" == name || name.match("X_jinshu")) {
        //         console.log(`=====onCollisionEnter=selfCollider.name==${event.selfCollider.node.name}==`);
        //         if (this.jumpDone) {
        //             let dPos = this.getDestPos(this.resultNum, 0.1);
        //             let sPos = this.qiu.worldPosition;
        //             let sdLen = Vec3.distance(dPos, sPos);
        //             if (sdLen > 0.009) {
        //                 let qiuRdigidbody = this.qiu.getComponent(RigidBody);
        //                 qiuRdigidbody.type = ERigidBodyType.DYNAMIC;
        //                 let force = dPos;
        //                 force = force.subtract(sPos);
        //                 qiuRdigidbody.applyForce(v3(force.x * 100, sdLen * 100, force.z * 100));
        //             } else {
        //                 this.jumpDone = false;
        //             }
        //         }

        //         return;
        //     }

        //     // this.selfCollider[event.selfCollider.node.name] = event.selfCollider;
        // }

        // onCollisionExit(event: any) {
        //     // console.log(`=====onCollisionExit=other.name==${event.otherCollider.node.name}==`);
        //     // console.log(`=====onCollisionExit=selfCollider.name==${event.selfCollider.node.name}==`);
        //     if ("X_lunpan2" == event.selfCollider.node.name) {
        //         console.log(`=====onCollisionExit=selfCollider.name==${event.selfCollider.node.name}==`);
        //         return;
        //     }

        //     // this.selfCollider[event.selfCollider.node.name] = null;
        // }

        // 离开房间后停止球的运动调度和跳动动画，避免场景销毁前再触发开奖结束及其音效。
        ;

        _proto.onExitRoom = function onExitRoom() {
          this.unscheduleAllCallbacks();
          Tween.stopAllByTarget(this.qiu);
          this.showPlan = null;
        };
        _proto.onRunStart = /*#__PURE__*/function () {
          var _onRunStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  RouletteUtils.instance.playSound(eSound.Ball, true);
                  this.onTestClick();
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onRunStart() {
            return _onRunStart.apply(this, arguments);
          }
          return onRunStart;
        }();
        _proto.circleMove = function circleMove(dt) {
          var _this2 = this;
          dt = dt > 0.025 ? 0.025 : dt;
          switch (this.runState) {
            case eRunStatus.NONE:
              {
                if (this.resultNum > -1) {
                  this.qiu.worldPosition = this.getDestPos(this.resultNum);
                }
                break;
              }
            case eRunStatus.END:
              {
                this.runState = eRunStatus.NONE;
                if (game.deltaTime < 0.0333) {
                  this.unschedule(this.circleMove);
                }
                RouletteUtils.instance.stopSound(eSound.stop);
                var qiuRdigidbody = this.qiu.getComponent(RigidBody);
                qiuRdigidbody.clearState();
                this.qiu.worldPosition = this.getDestPos(this.resultNum);
                this.scheduleOnce(function () {
                  qiuRdigidbody.clearState();
                  _this2.qiu.worldPosition = _this2.getDestPos(_this2.resultNum);
                  qiuRdigidbody.type = ERigidBodyType.DYNAMIC;

                  // this.scheduleOnce(() => {
                  //     qiuRdigidbody.clearState();
                  //     this.qiu.worldPosition = this.getDestPos(this.resultNum);
                  // });

                  if (!RouletteModel.instance.isTest) {
                    EventManager.instance.emit(eEvent.onRunEnd);
                  }
                });
                break;
              }
            case eRunStatus.START:
              {
                this.radian += dt * (this.speed / 100);
                var x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
                var z = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
                this.qiu.position = v3(x, this.qiu.position.y, z);
                break;
              }
            case eRunStatus.SEACH:
              {
                this.radian += dt * (this.speed / 100);
                var _x = this.circleRadius * Math.cos(this.radian) + this.circleCenter.x;
                var _z = this.circleRadius * Math.sin(this.radian) + this.circleCenter.y;
                this.qiu.position = v3(_x, this.qiu.position.y, _z);
                if (this.checkDir(this.resultNum)) {
                  var destNode = this.getColliderNode();
                  if (destNode) {
                    RouletteUtils.instance.stopSound(eSound.Ball);
                    RouletteUtils.instance.playSound(eSound.stop);

                    // this.unschedule(this.circleMove);
                    this.runState = eRunStatus.SEACHEND;
                    var runType = Math.random();
                    var wDestPos = v3(destNode.worldPosition.x + Math.random() * 0.002 - 0.001, destNode.worldPosition.y, destNode.worldPosition.z + Math.random() * 0.002 - 0.001);
                    var duration = Vec3.distance(this.qiu.worldPosition, wDestPos) / 1.5;
                    if (runType < 0.5) {
                      ///1--
                      tween(this.qiu).to(duration, {
                        worldPosition: wDestPos
                      }).call(function () {
                        var jumpH = Math.random() * 0.075 + 0.1;
                        var speed = Math.random() * 0.2 + 0.75;
                        var jumpTimes = 0;
                        var dPos = _this2.getDestPos(_this2.resultNum);
                        var sPos = _this2.qiu.worldPosition;
                        var sdLen = Vec3.distance(dPos, sPos);
                        var maxJumpTimes = Math.floor(sdLen * 8);
                        if (maxJumpTimes > 3) {
                          maxJumpTimes = 3;
                        }
                        var doJump = function doJump() {
                          var destPos = _this2.getDestPos(_this2.resultNum);
                          var startPos = _this2.qiu.worldPosition;
                          var qDt = Vec3.distance(startPos, destPos) / speed;
                          if (jumpTimes == maxJumpTimes) {
                            destPos = _this2.getDestPos(_this2.resultNum, qDt);
                          } else {
                            // destPos = destPos.add(destNode.worldPosition).multiplyScalar(0.5);

                            if (jumpTimes % 2 == 0) {
                              destPos = destPos.add(destNode.worldPosition).multiplyScalar(0.5);
                            } else {
                              var posTemp = v3(0);
                              Vec3.add(posTemp, _this2.qiu.worldPosition, _this2.axisNode.worldPosition).multiplyScalar(0.5);
                              destPos = posTemp.add(_this2.qiu.worldPosition).multiplyScalar(0.5);
                            }
                            qDt = Vec3.distance(startPos, destPos) / speed;
                            jumpTimes++;
                          }

                          // speed = speed * 0.95;
                          jumpH = jumpH * 0.8;
                          _this2.doJump(_this2.qiu, qDt, destPos, jumpH).call(function () {
                            var destPos2 = _this2.getDestPos(_this2.resultNum);
                            var startPos2 = _this2.qiu.worldPosition;
                            var distance = Vec3.distance(startPos2, destPos2);
                            if (distance > 0.016) {
                              doJump();
                            } else {
                              _this2.runState = eRunStatus.END;
                              _this2.qiu.worldPosition = _this2.getDestPos(_this2.resultNum);
                            }
                          }).start();
                        };
                        doJump();
                      }).start();
                    } else {
                      ///2--
                      tween(this.qiu).to(duration, {
                        worldPosition: wDestPos
                      }).call(function () {
                        var jumpH = Math.random() * 0.05 + 0.1;
                        var speed = Math.random() * 0.2 + 0.75;
                        var doJump = function doJump() {
                          var destPos = _this2.getDestPos(_this2.resultNum);
                          var startPos = _this2.qiu.worldPosition;
                          var qDt = Vec3.distance(startPos, destPos) / speed;
                          destPos = _this2.getDestPos(_this2.resultNum, qDt);

                          // speed = speed * 0.95;
                          jumpH = jumpH * 0.5;
                          _this2.doJump(_this2.qiu, qDt, destPos, jumpH).call(function () {
                            var destPos2 = _this2.getDestPos(_this2.resultNum);
                            var startPos2 = _this2.qiu.worldPosition;
                            var distance = Vec3.distance(startPos2, destPos2);
                            if (distance > 0.016) {
                              doJump();
                            } else {
                              _this2.runState = eRunStatus.END;
                              RouletteUtils.instance.stopSound(eSound.stop);
                              _this2.qiu.worldPosition = _this2.getDestPos(_this2.resultNum);
                            }
                          }).start();
                        };
                        doJump();
                      }).start();
                    }
                  }
                }
                break;
              }
          }
        };
        _proto.doJump = function doJump(target, duration, toPos, hight, eType) {
          if (hight === void 0) {
            hight = 0.25;
          }
          var startPos = target.worldPosition;
          var len = Vec3.distance(toPos, startPos);
          var cpY = (startPos.y + toPos.y) / 2 + hight; //len * 0.5;
          return tween(target).bezierTo3W(duration, startPos, v3(startPos, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
            easing: "cubicOutIn"
          });
        };
        _proto.onTestClick = function onTestClick() {
          var _this3 = this;
          this.qiu.position = v3(-0.458, 1.03, -0.161); //v3(-0.458, 1.023, -0.161);
          this.qiu.eulerAngles = v3(-90, 0, 0);
          this.radian = 0;
          this.circleCenter = v2(this.axisNode.worldPosition.x, this.axisNode.worldPosition.z);
          this.circleRadius = Vec3.distance(this.qiu.worldPosition, v3(this.axisNode.worldPosition.x, this.qiu.worldPosition.y, this.axisNode.worldPosition.z));
          var qiuRdigidbody = this.qiu.getComponent(RigidBody);
          qiuRdigidbody.clearState();
          if (RouletteModel.instance.isTest) {
            this.resultNum = 0;
          } else {
            this.resultNum = RouletteModel.instance.betResult.OpenNum;
          }

          // this.jumpDone = false;
          qiuRdigidbody.type = ERigidBodyType.KINEMATIC;
          this.speed = -this.speed;
          this.axisSpeed = -this.axisSpeed;
          if (RouletteViewCtrl.show.enabled) {
            this.startShow();
            return;
          }
          this.schedule(this.circleMove);
          this.runState = eRunStatus.START;
          // this.endRun = false;
          // 旋转段固定时长。不能按启动这一帧的耗时折算：低帧率会成倍拉长，偶发卡帧可达数十秒。
          this.scheduleOnce(function () {
            _this3.runState = eRunStatus.SEACH;
            // this.startCheckDir = true;
          }, SPIN_SECONDS);
        };
        /** 0 号格此刻在世界坐标里的角度（绕转轴，x 轴为 0）。转盘转动时它随之变化。 */
        _proto.pocketZeroAngle = function pocketZeroAngle() {
          var dest = this.Node_dest_0.worldPosition;
          var axis = this.axisNode.worldPosition;
          return Math.atan2(dest.z - axis.z, dest.x - axis.x);
        };
        _proto.showPosition = function showPosition(angle, radius, y) {
          var axis = this.axisNode.worldPosition;
          return v3(axis.x + radius * Math.cos(angle), y, axis.z + radius * Math.sin(angle));
        }

        /** 把角度差折到 (-π, π]。 */;
        _proto.wrapAngle = function wrapAngle(angle) {
          var turn = 2 * Math.PI;
          angle = angle % turn;
          if (angle > Math.PI) angle -= turn;
          if (angle <= -Math.PI) angle += turn;
          return angle;
        }

        /** 绕圈阶段到时刻 t 为止转过的角度（未乘方向和微调系数）。角速度按 (1-t/T)² 从初速降到末速。 */;
        _proto.showOrbitAngle = function showOrbitAngle(t, total) {
          var show = RouletteViewCtrl.show;
          var left = 1 - t / total;
          return show.orbitSpeedEnd * t + (show.orbitSpeedStart - show.orbitSpeedEnd) * total * (1 - left * left * left) / 3;
        };
        _proto.startShow = function startShow() {
          var show = RouletteViewCtrl.show;
          var axis = this.axisNode.worldPosition;
          var ball = this.qiu.worldPosition;
          var dest = this.Node_dest_0.worldPosition;
          var dir = this.speed > 0 ? 1 : -1;
          var index = arrIRound.indexOf(this.resultNum);
          var turn = 2 * Math.PI;
          // 格子在世界坐标里的角速度。节点绕 Y 轴正向转时，水平面上的角度是减小的。
          var wheelRate = -(this.axisSpeed > 0 ? 1 : -1) * show.wheelDegPerSec * Math.PI / 180;
          var period = turn / Math.abs(wheelRate);
          var pocketZero = this.pocketZeroAngle();

          // 选一块挡片和一条路线：要求撞挡片的时刻，第一跳的落点格子正好转到挡片前方 firstHopArc 处。
          // 8 块挡片相隔 45 度，路线的第一落点又各不相同，时长范围内总能找到若干组合；找不到时取最接近范围中点的。
          var middle = (show.hitSecondsMin + show.hitSecondsMax) / 2;
          var fits = [];
          var nearest = null;
          for (var _iterator = _createForOfIteratorHelperLoose(this.X_lunpanjinshu), _step; !(_step = _iterator()).done;) {
            var node = _step.value;
            var hitAngle = Math.atan2(node.worldPosition.z - axis.z, node.worldPosition.x - axis.x);
            for (var _iterator2 = _createForOfIteratorHelperLoose(show.routes), _step2; !(_step2 = _iterator2()).done;) {
              var route = _step2.value;
              var firstLocal = cDisAngle * (index - dir * route[0].at);
              var time = (hitAngle + dir * show.firstHopArc - pocketZero - firstLocal) / wheelRate % period;
              if (time < 0) time += period;
              while (time < show.hitSecondsMin) time += period;
              var option = {
                time: time,
                node: node,
                route: route
              };
              if (time <= show.hitSecondsMax) fits.push(option);
              if (!nearest || Math.abs(time - middle) < Math.abs(nearest.time - middle)) nearest = option;
            }
          }
          var chosen = fits.length ? fits[Math.floor(Math.random() * fits.length)] : nearest;

          // 挡片节点的原点贴着盘面；球是爬上挡片顶面再弹起的，球心要高出“挡片高度 + 一个半径”。
          var hitPos = chosen.node.worldPosition;
          var hit = {
            angle: Math.atan2(hitPos.z - axis.z, hitPos.x - axis.x),
            radius: Math.hypot(hitPos.x - axis.x, hitPos.z - axis.z),
            y: hitPos.y + show.deflectorRise + show.ballRadius
          };
          // 绕圈转过的总角度，再微调到正好停在挡片的角度上（最多差半圈，对转速的影响在两成以内）。
          var startAngle = Math.atan2(ball.z - axis.z, ball.x - axis.x);
          var nominal = this.showOrbitAngle(chosen.time, chosen.time);
          var orbitScale = (nominal + this.wrapAngle(dir * (hit.angle - startAngle) - nominal)) / nominal;
          var pocketRadius = Math.hypot(dest.x - axis.x, dest.z - axis.z);
          var floorY = dest.y - show.floorDrop;
          var steps = [];
          var start = chosen.time;
          var hopCount = 0;
          for (var i = 0; i < chosen.route.length; i++) {
            var item = chosen.route[i];
            var last = i == chosen.route.length - 1;
            var roll = !!item.roll;
            var toRadius = pocketRadius;
            var toY = floorY;
            if (item.cone) {
              toRadius = pocketRadius * show.coneRadiusRatio;
              toY = floorY + show.coneRise;
            } else if (item.at % 1 != 0) {
              toY = floorY + show.ridgeHeight;
            } else if (!last) {
              // 中途落点在格槽里略微偏里或偏外，避免每一跳都落在同一圈上。
              toRadius = pocketRadius + (Math.random() - 0.5) * 0.012;
            }
            var level = Math.min(hopCount, show.hopSeconds.length - 1);
            steps.push({
              roll: roll,
              // 第一步的起点是挡片，换算成相对转盘的角度要等撞上那一帧才知道，届时再填。
              from: i == 0 ? 0 : steps[i - 1].to,
              to: cDisAngle * (index - dir * item.at),
              fromRadius: i == 0 ? hit.radius : steps[i - 1].toRadius,
              toRadius: toRadius,
              fromY: i == 0 ? hit.y : steps[i - 1].toY,
              toY: toY,
              start: start,
              seconds: (roll ? show.rollSeconds : show.hopSeconds[level]) * (0.88 + Math.random() * 0.24),
              height: roll ? 0 : show.hopHeights[level] * (0.85 + Math.random() * 0.3)
            });
            if (!roll) hopCount++;
            start += steps[i].seconds;
          }
          this.showPlan = {
            dir: dir,
            hitTime: chosen.time,
            orbitScale: orbitScale,
            startAngle: startAngle,
            trackRadius: Math.hypot(ball.x - axis.x, ball.z - axis.z),
            trackY: ball.y,
            hit: hit,
            pocketRadius: pocketRadius,
            floorY: floorY,
            restY: dest.y,
            steps: steps,
            settleStart: start,
            sounded: 0,
            settling: false
          };
          this.showTime = 0;
          // 撞击和落地声要当帧播出，开转时先把片段放进缓存（离撞挡片还有几秒）。
          RouletteUtils.instance.warmSound(eSound.Tap);
          RouletteUtils.instance.warmSound(eSound.Settle);
          this.runState = eRunStatus.START;
          this.unschedule(this.circleMove);
          this.schedule(this.showMove);
        }

        /** 每帧按已经过的时间直接算出球的位置；卡帧只会跳过中间画面，不会改变总时长和落点。 */;
        _proto.showMove = function showMove(dt) {
          var plan = this.showPlan;
          if (!plan) {
            this.unschedule(this.showMove);
            return;
          }
          var show = RouletteViewCtrl.show;
          this.showTime += dt;
          var t = this.showTime;
          if (t < plan.hitTime) {
            // 绕圈减速；最后 dropSeconds 内沿斜面加速滑向挡片。盘沿到挡片之间的斜面是直的，半径和高度按同一比例变化。
            var turned = this.showOrbitAngle(t, plan.hitTime);
            var angle = plan.startAngle + plan.dir * plan.orbitScale * turned;
            var drop = Math.max(0, (t - (plan.hitTime - show.dropSeconds)) / show.dropSeconds);
            var slide = drop * drop;
            // 快到挡片时沿它的斜面爬上顶面，否则球会直接压进挡片里。按“离挡片中心还剩多少弧长”折算，与帧率无关。
            var remain = plan.orbitScale * (this.showOrbitAngle(plan.hitTime, plan.hitTime) - turned) * plan.hit.radius;
            var climb = Math.min(1, Math.max(0, (show.climbStart - remain) / (show.climbStart - show.climbEnd)));
            var baseY = plan.hit.y - show.deflectorRise;
            this.qiu.worldPosition = this.showPosition(angle, plan.trackRadius + (plan.hit.radius - plan.trackRadius) * slide, plan.trackY + (baseY - plan.trackY) * slide + show.deflectorRise * climb);
            return;
          }
          var pocketZero = this.pocketZeroAngle();
          if (this.runState == eRunStatus.START) {
            // 撞上挡片：滚动声停下，响一声撞击。
            this.runState = eRunStatus.SEACHEND;
            RouletteUtils.instance.stopSound(eSound.Ball);
            RouletteUtils.instance.playSoundNow(eSound.Tap);
            // 取离落点最近的那一圈，球才会沿前进方向跳过去而不是绕远路。
            var first = plan.steps[0];
            first.from = first.to + this.wrapAngle(plan.hit.angle - pocketZero - first.to);
          }
          if (t < plan.settleStart) {
            var current = 0;
            for (var i = 0; i < plan.steps.length; i++) {
              if (t >= plan.steps[i].start) current = i;
            }
            // 每跳完一步响一声；滚过去的那一步没有落地声。一帧里跨过多步时只响一声。
            if (plan.sounded < current) {
              if (plan.steps.slice(plan.sounded, current).some(function (item) {
                return !item.roll;
              })) {
                RouletteUtils.instance.playSoundNow(eSound.Tap);
              }
              plan.sounded = current;
            }
            var step = plan.steps[current];
            var u = Math.min(1, (t - step.start) / step.seconds);
            // 跳：水平匀速、竖直抛物线；滚：贴着盘面，先慢后快再收住。
            var move = step.roll ? u * u * (3 - 2 * u) : u;
            var radius = step.fromRadius + (step.toRadius - step.fromRadius) * move;
            var y = step.fromY + (step.toY - step.fromY) * move + 4 * step.height * u * (1 - u);
            var edgeRadius = plan.pocketRadius * show.coneEdgeRatio;
            if (step.roll && step.fromRadius < edgeRadius && step.toRadius > edgeRadius) {
              // 从锥面滚回格槽：锥面是直的缓坡，到外沿才有一级台阶落进格槽。高度按这两段分别折算；
              // 整段线性的话，球在台阶前会陷进锥面里。
              var edgeY = plan.floorY + show.coneEdgeRise;
              y = radius < edgeRadius ? step.fromY + (edgeY - step.fromY) * (radius - step.fromRadius) / (edgeRadius - step.fromRadius) : edgeY + (step.toY - edgeY) * (radius - edgeRadius) / (step.toRadius - edgeRadius);
            }
            this.qiu.worldPosition = this.showPosition(pocketZero + step.from + (step.to - step.from) * move, radius, y);
            return;
          }
          if (!plan.settling) {
            plan.settling = true;
            if (!plan.steps[plan.steps.length - 1].roll) RouletteUtils.instance.playSoundNow(eSound.Tap);
            RouletteUtils.instance.playSoundNow(eSound.Settle);
          }
          var winAngle = plan.steps[plan.steps.length - 1].to;
          var v = (t - plan.settleStart) / show.settleSeconds;
          if (v < 1) {
            // 在两块隔板之间来回晃两个半周期，幅度按指数衰减并在结束时收到 0；球心同时从格底升到收尾位置的高度。
            var fade = Math.exp(-3.5 * v) * (1 - v);
            var swing = plan.dir * show.settleSwing * cDisAngle * fade * Math.sin(v * 5 * Math.PI);
            this.qiu.worldPosition = this.showPosition(pocketZero + winAngle + swing, plan.pocketRadius, plan.floorY + (plan.restY - plan.floorY) * v);
            return;
          }

          // 收尾交还给原实现的 END 分支：把球定在开奖格、切回物理并派发开奖结束。
          this.qiu.worldPosition = this.showPosition(pocketZero + winAngle, plan.pocketRadius, plan.restY);
          this.showPlan = null;
          this.unschedule(this.showMove);
          this.runState = eRunStatus.END;
          this.schedule(this.circleMove);
        };
        _proto.getDestPos = function getDestPos(num, delay) {
          if (delay === void 0) {
            delay = 0;
          }
          var wPos_dest_0 = this.Node_dest_0.worldPosition;
          var wPos_axis = this.axisNode.worldPosition;
          wPos_axis = v3(wPos_axis.x, wPos_dest_0.y, wPos_axis.z);
          var disLenth = Vec3.distance(wPos_dest_0, wPos_axis);
          for (var i = 0; i < arrIRound.length; i++) {
            if (num == arrIRound[i]) {
              // delay 秒后的预测偏移，沿用原公式（axisSpeed 直接当作弧度/秒）。它与 update 的实际转速并不一致，
              // 球因此先落偏再补跳进格子；这段补跳是开奖演出的一部分，不要"修正"成一步到位的精确落点。
              var angle = -cDisAngle * i + delay * this.axisSpeed;
              var wNumPos = v3(0);
              Vec3.subtract(wNumPos, wPos_dest_0, wPos_axis);
              wNumPos.normalize();
              var destWPos = v3(0);
              Vec3.rotateY(destWPos, wNumPos, v3(0), angle);
              destWPos = destWPos.multiplyScalar(disLenth).add(wPos_axis);
              // gts.Debug.Log(`=getDestPos=num=${num}=wPos=(${JSON.stringify(destWPos)})=`);

              return destWPos;
            }
          }
          return null;
        };
        _proto.checkDir = function checkDir(num) {
          if (num === void 0) {
            num = 0;
          }
          var linearVelocity = v3(0);
          this.qiu.getComponent(RigidBody).getLinearVelocity(linearVelocity);
          var wPos_dest_0 = this.Node_dest_0.worldPosition;
          var wPos_axis = this.axisNode.worldPosition;
          wPos_axis = v3(wPos_axis.x, wPos_dest_0.y, wPos_axis.z);
          var disLenth = Vec3.distance(wPos_dest_0, wPos_axis);
          var wNumPos = v3(0);
          for (var i = 0; i < arrIRound.length; i++) {
            if (num == arrIRound[i]) {
              var angle = -cDisAngle * i;
              Vec3.subtract(wNumPos, wPos_dest_0, wPos_axis);
              wNumPos.normalize();
              var numWPos = v3(0);
              Vec3.rotateY(numWPos, wNumPos, v3(0), angle);
              numWPos = numWPos.multiplyScalar(disLenth).add(wPos_axis);

              // 寻位阶段每帧执行：原样传参，不在这里拼字符串或序列化。
              gts.Debug.Log("=getDestPos=num=", num, "=wPos=", numWPos.x, numWPos.y, numWPos.z);
              var qdDir = numWPos.subtract(this.qiu.worldPosition);
              var vAngle = Vec3.angle(qdDir, linearVelocity);
              vAngle = vAngle * 180 / Math.PI;
              var deltaTime = game.deltaTime;
              var limitAngle = deltaTime > 0.05 ? 85 : 65;
              gts.Debug.Log("=getDestPos=vAngle=", vAngle, "=limitAngle=", limitAngle);
              if (vAngle < limitAngle) {
                return true;
              }
              return false;
            }
          }
          return false;
        };
        _proto.getColliderNode = function getColliderNode() {
          var linearVelocity = v3(0);
          this.qiu.getComponent(RigidBody).getLinearVelocity(linearVelocity);
          var minLen = 0;
          var minAngle = 0;
          var destNode = null;
          for (var _iterator3 = _createForOfIteratorHelperLoose(this.X_lunpanjinshu), _step3; !(_step3 = _iterator3()).done;) {
            var jinsuNode = _step3.value;
            var jsqPos = v3(jinsuNode.worldPosition.x, this.qiu.worldPosition.y, jinsuNode.worldPosition.z);
            var qdDir = jsqPos.subtract(this.qiu.worldPosition);
            var vAngle = Vec3.angle(qdDir, linearVelocity);
            vAngle = vAngle * 180 / Math.PI;
            var len = Vec3.distance(this.qiu.worldPosition, jsqPos);
            if (vAngle < 90 && (!destNode || len < minLen && vAngle < minAngle)) {
              minLen = len;
              minAngle = vAngle;
              destNode = jinsuNode;
            }
            gts.Debug.Log("=getColliderNode=", jinsuNode.name, "=vAngle=", vAngle, "=len=", len);
          }

          // this.scheduleOnce(() => {
          //     let mRender = destNode.getComponent(MeshRenderer);
          //     if (mRender) {
          //         mRender.material.setProperty("mainColor", color(5, 29, 127));
          //     }
          // });

          return destNode;
        };
        return RouletteViewCtrl;
      }(Component), _class3.show = {
        enabled: true,
        // 转盘自转速度（度/秒）。原实现按帧自转，低端机约 22 度/秒、60 帧设备约 45 度/秒；
        // 真机对比 22.5、33.75、39.4、45 四档后取 45，即原实现在 60 帧设备上的转速。
        wheelDegPerSec: 45,
        // 球绕圈的角速度（弧度/秒）：从 orbitSpeedStart 减到撞挡片时的 orbitSpeedEnd，先急后缓。
        orbitSpeedStart: 6.5,
        orbitSpeedEnd: 1.3,
        // 从开始到撞上挡片的时长范围。具体取值由“此刻哪块挡片正对开奖格”决定，所以每局略有不同。
        hitSecondsMin: 6,
        hitSecondsMax: 8,
        // 撞挡片前，球离开外圈沿斜面滑向挡片所用的时长。
        dropSeconds: 2,
        ballRadius: 0.0115,
        // 挡片顶面比盘面高出的高度，以及球沿挡片爬上顶面的那段路程（距挡片中心的弧长，从 climbStart 爬到 climbEnd）。
        // 真机按碰撞体实测：挡片高约 8 毫米；沿圆周方向长的那一类，顶面平台延伸到距中心约 15 毫米。
        deflectorRise: 0.0085,
        climbStart: 0.034,
        climbEnd: 0.015,
        // 撞挡片那一刻，第一跳的落点格子领先挡片的弧度（沿球的前进方向）。
        // 须随转盘转速一起调：第一跳约 0.5 秒，期间格子迎着球转过来约 0.39 弧度，余下约 0.3 弧度才是球在画面里
        // 向前走的距离；只提转速不调它，球撞上挡片后会几乎垂直掉进格子。
        firstHopArc: 0.69,
        // 落球路线。每一步的 at 是落点“距开奖格还差几格”（负数为越过，半格为落在隔板上），末步必须是 0；
        // cone 表示弹上盘心锥面，roll 表示这一步贴着盘面滚过去而不是跳。弹上锥面后的下一步必须是 roll。
        // 真机确认取“多跳几下”：每条路线至少 4 步。
        routes: [[{
          at: 5
        }, {
          at: 3
        }, {
          at: 1
        }, {
          at: 0.5
        }, {
          at: 0,
          roll: true
        }], [{
          at: 4
        }, {
          at: 2
        }, {
          at: -1
        }, {
          at: 0
        }], [{
          at: 5
        }, {
          at: 2,
          cone: true
        }, {
          at: 1,
          roll: true
        }, {
          at: 0
        }], [{
          at: 4
        }, {
          at: 2
        }, {
          at: 1
        }, {
          at: 0
        }], [{
          at: 3
        }, {
          at: 1.5
        }, {
          at: -1,
          cone: true
        }, {
          at: 0,
          roll: true
        }], [{
          at: 5
        }, {
          at: 2.5
        }, {
          at: 1
        }, {
          at: 0
        }]],
        // 第 n 跳的时长和高度，逐跳衰减；每一跳再各自随机浮动一成多，节奏才不呆板。
        hopSeconds: [0.5, 0.42, 0.34, 0.27, 0.22],
        hopHeights: [0.085, 0.06, 0.04, 0.026, 0.016],
        // 贴着盘面滚一步的时长。
        rollSeconds: 0.34,
        floorDrop: 0.0045,
        ridgeHeight: 0.009,
        // 弹上锥面时的落点：半径为格槽半径的这个比例，球心比格底高 coneRise。
        coneRadiusRatio: 0.7,
        coneRise: 0.011,
        // 锥面外沿（格槽内侧那级台阶）的半径比例，以及球心在台阶边上比格底高多少。真机按碰撞体实测：台阶高约 6 毫米。
        coneEdgeRatio: 0.92,
        coneEdgeRise: 0.0066,
        // 落进开奖格后在两块隔板之间来回晃动的时长，以及最大幅度（占一格宽度的比例）。
        settleSeconds: 0.9,
        settleSwing: 0.22
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "qiu", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "axisNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_anchor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Node_dest_0", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "X_zhuanPan", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "X_lunpanjinshu", [_dec8], {
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

System.register("chunks:///_virtual/UIPlane.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Camera, RenderTexture, view, UITransform, primitives, utils, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      MeshRenderer = module.MeshRenderer;
      Camera = module.Camera;
      RenderTexture = module.RenderTexture;
      view = module.view;
      UITransform = module.UITransform;
      primitives = module.primitives;
      utils = module.utils;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "0f18dJ8ExlJy4T1rAdtnTq1", "UIPlane", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var UIPlaneProfile = exports('default', (_dec4 = ccclass("UIPlaneProfile"), _dec5 = property(Node), _dec6 = property(MeshRenderer), _dec4(_class4 = (_class5 = function UIPlaneProfile() {
        _initializerDefineProperty(this, "targetNode", _descriptor3, this);
        _initializerDefineProperty(this, "plane", _descriptor4, this);
      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "targetNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "plane", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class5)) || _class4));
      var UIPlane = exports('UIPlane', (_dec = ccclass("UIPlane"), _dec2 = property(Camera), _dec3 = property([UIPlaneProfile]), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIPlane, _Component);
        function UIPlane() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "copyCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "UIPlaneProfiles", _descriptor2, _assertThisInitialized(_this));
          _this.rt = void 0;
          return _this;
        }
        var _proto = UIPlane.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          if (!this.copyCamera) return;
          this.copyCamera.node.active = true;
          this.rt = new RenderTexture();
          this.rt.reset({
            width: view.getVisibleSize().width,
            height: view.getVisibleSize().height
          });
          this.copyCamera.targetTexture = this.rt;
          this.copyRenderTex();
        };
        _proto.onDisable = function onDisable() {
          var _this$rt;
          if (!this.copyCamera) return;
          this.copyCamera.node.active = false;
          this.copyCamera.targetTexture = null;
          (_this$rt = this.rt) == null || _this$rt.destroy();
        };
        _proto.copyRenderTex = function copyRenderTex() {
          var _this2 = this;
          this.UIPlaneProfiles.forEach(function (v, i) {
            var targetNode = v.targetNode;
            var plane = v.plane;
            if (!targetNode || !plane) return;
            plane.material.setProperty("mainTexture", _this2.rt);
            var width = targetNode.getComponent(UITransform).width;
            var height = targetNode.getComponent(UITransform).height;
            var anchorPoint = targetNode.getComponent(UITransform).anchorPoint;
            var rtwidth = _this2.rt.width;
            var rtheight = _this2.rt.height;
            var worldPos = targetNode.getWorldPosition();
            worldPos.x -= width * anchorPoint.x;
            worldPos.y -= height * anchorPoint.y;
            var geometryPlane = primitives.plane();
            // const uv_l = worldPos.x / rtwidth;
            // const uv_b = worldPos.y / rtheight;
            // const uv_r = (worldPos.x + width) / rtwidth;
            // const uv_t = (worldPos.y + height) / rtheight;
            // geometryPlane.uvs = [uv_l, uv_b, uv_l, uv_t, uv_r, uv_t, uv_r, uv_b];
            // geometryPlane.uvs = [0, 0, 0, 1, uv_r, uv_t, uv_r, uv_b];
            plane.mesh = utils.MeshUtils.createMesh(geometryPlane, plane.mesh);
          });
        };
        return UIPlane;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "copyCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "UIPlaneProfiles", [_dec3], {
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
  r('virtual:///prerequisite-imports/RouletteGame', 'chunks:///_virtual/RouletteGame'); 
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