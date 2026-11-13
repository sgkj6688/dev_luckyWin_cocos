System.register("chunks:///_virtual/BjlVip_deskArea.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipUtils.ts', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts', './Common.ts', './I18n.ts', './BjlVipCtrl.ts', './label3D.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Node, Label, Material, MeshRenderer, instantiate, MeshCollider, Tween, isValid, v3, color, tween, v4, ParticleUtils, Animation, Component, Vec3, BjlVipUtils, EventManager, arrTexture, LAYER_SHARP, eEvent, eRunStatus, eSound, chipListDef, arrSendCardInfo, cardTillingOffset, betAreaMap, arrBetAreaMap, BjlVipModel, Common, i18n, BjlVipCtrl, label3D;
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
      Node = module.Node;
      Label = module.Label;
      Material = module.Material;
      MeshRenderer = module.MeshRenderer;
      instantiate = module.instantiate;
      MeshCollider = module.MeshCollider;
      Tween = module.Tween;
      isValid = module.isValid;
      v3 = module.v3;
      color = module.color;
      tween = module.tween;
      v4 = module.v4;
      ParticleUtils = module.ParticleUtils;
      Animation = module.Animation;
      Component = module.Component;
      Vec3 = module.Vec3;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      arrTexture = module.arrTexture;
      LAYER_SHARP = module.LAYER_SHARP;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      eSound = module.eSound;
      chipListDef = module.chipListDef;
      arrSendCardInfo = module.arrSendCardInfo;
      cardTillingOffset = module.cardTillingOffset;
      betAreaMap = module.betAreaMap;
      arrBetAreaMap = module.arrBetAreaMap;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      label3D = module.label3D;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "ccdb3NZfsBNL5btJKj0Xi98", "BjlVip_deskArea", undefined);

      // 筹码预制结构里承载面额文字的子节点（label3D/Node_label3d.prefab 的根节点名）。
      var CHIP_LABEL_NODE = "Node_label3d";
      // 进桌后预热筹码池时，每帧用于新建筹码的时间上限（毫秒）。按耗时而不是个数限量：
      // 低端机上新建一个筹码的耗时是高端机的数倍，固定个数会让它在预热期间明显掉帧。
      var CHIP_PREWARM_BUDGET_MS = 4;
      // 最高面额没有更大的面额可合并，留存数量没有上限，预热这么多个。
      var CHIP_PREWARM_TOP = 4;
      // 托盘里筹码的放大倍数，以及为了放大后不互相挤压而把这一排横向拉开的倍数（以托盘中心为准）。
      // 低端机降到 0.75 渲染档后，原尺寸的筹码直径只有约 36 个屏幕像素，面额文字认不出来；
      // 实测放大到 1.5 倍后各面额都能读清，再大（1.7 倍）会压到下注区的边线。
      // 只影响托盘里的这一排；下注到桌面上的筹码大小不变（obtainBetChip 里固定缩放）。
      var TRAY_CHIP_SCALE = 1.5;
      var TRAY_CHIP_SPREAD = 1.2;
      // 预激活特效时把它临时下沉的距离（世界坐标，米）：沉到桌面和地板下面，被它们挡住看不见，但仍在视野内、仍然会被画出来。
      // 不能用缩小节点的办法：粒子发射到世界空间后不随节点缩放，实测缩到千分之一仍能看到一团粒子。
      // 也不能沉得太深：实测 1.5 米时一部分粒子已经落到视野外被剔除，不再绘制。
      var EFFECT_WARM_DROP = 0.8;
      // 预激活的特效要保持显示的时长（秒），之后还原并隐藏。按时长而不是帧数：
      // 粒子要先发射出来才会被画到，实测只显示两帧（约 50 毫秒）时还没有粒子，第一次绘制的开销没有被提前付掉。
      var EFFECT_WARM_TIME = 0.2;
      // 回收的筹码停放的位置（停放节点的本地坐标）：远在桌面下方，任何机位都看不到，引擎按视锥剔除后不会绘制。
      var CHIP_PARK_Y = -1000;
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      // const arrTier = [16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 33, 27];
      // const arrOrphelins = [1, 20, 14, 31, 9, 6, 34, 17];
      // const arrVoisins = [22, 18, 29, 7, 28, 19, 4, 21, 2, 25, 12, 35, 3, 26, 0, 32, 15];
      // const arrZero = [12, 35, 3, 26, 0, 32, 15];

      // const arrRed = [1, 14, 9, 18, 7, 12, 3, 32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16];
      // const arrBlack = [20, 31, 22, 29, 28, 35, 26, 15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33];

      // const arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];

      var BjlVip_deskArea = exports('BjlVip_deskArea', (_dec = ccclass("BjlVip_deskArea"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVip_deskArea, _Component);
        function BjlVip_deskArea() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selChip = null;
          // @property(Node)
          // X_lunpanchangjing: Node = null;
          // @property(Node)
          // X_yaozhong: Node = null;
          _initializerDefineProperty(_this, "Node_win_quad_0", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_win_quad_other", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_totalBet", _descriptor3, _assertThisInitialized(_this));
          // @property(Node)
          // Node_betDetail: Node = null;
          // @property(Node)
          // detailItem: Node = null;
          // @property(Node)
          // detailContent: Node = null;
          // @property(Sprite)
          // betDetailTag: Sprite = null;
          // @property(SpriteFrame)
          // btnDetailSpr: SpriteFrame[] = [];
          _this.Node_betArea = null;
          _this.Node_chipRoot = null;
          _this.Node_betChipRoot = null;
          _this.X_suliao1 = null;
          _this.X_puke = null;
          _this.X_fapaiqi = null;
          _this.chipTag = null;
          _this.Node_cardRoot = null;
          _this.cardTemp = null;
          _this.Node_aniRoot = null;
          _this.Node_vsEffect = null;
          // 下注筹码按面额共用的材质与节点池，键为面额节点名（X_100 等）。
          _this._chipMaterials = {};
          // 按面额回收备用的下注筹码。回收的节点不从场景摘下，而是挂在 _chipPark 下并移出视野：
          // 实测一次生成一批筹码（加倍、重复下注）时，卡顿的大头是节点重新挂进场景时引擎为每个渲染通道重做的准备工作，
          // 节点一直留在场景里就没有这一步。停放的节点不能放在 Node_betChipRoot 下，那里的子节点都被当作桌面上的筹码。
          _this._chipPools = {};
          _this._chipPark = null;
          // 同面额下注筹码共用的面额文字材质，贴图由托盘模板筹码上的 label3D 每帧同步。
          _this._chipLabelMaterials = {};
          // 还没预热的筹码面额，每项对应一个待新建的节点。
          _this._prewarmQueue = [];
          // 还没预激活的特效节点；_effectWarming 是正在预激活的那一个及其原始世界坐标、已显示的时长。
          _this._effectWarmQueue = [];
          _this._effectWarming = null;
          // 本桌的特效节点常驻场景，预激活过一次之后再进桌不需要重复。
          _this._effectWarmed = false;
          // 是否处在进桌的重负载阶段（已通知场景暂停帧率统计，结束时要通知恢复）。
          _this._warmBusy = false;
          // 相机是否已经飞到本桌（onLoadGame 之后、离桌之前）。清晰层只在这段时间使用。
          _this._arrived = false;
          // 桌内空闲巡航时相机离开了本桌的机位。
          _this._cameraAway = false;
          // 筹码原来所在的渲染层，退出清晰层时放回去。
          _this._chipLayer = 0;
          // 托盘筹码只放大一次：init 每次进桌都会执行，而缩放和位置是在场景原值上乘出来的。
          _this._trayEnlarged = false;
          return _this;
        }
        var _proto = BjlVip_deskArea.prototype;
        /**
         * 取某面额下注筹码共用的面额文字材质。
         * 同面额的文字完全相同，原先每个筹码各带一个 Label（各生成一张文字贴图）、一份材质实例，
         * 并各自每帧写一次材质。现在只保留托盘模板筹码的那一份 Label，由它把贴图同步到这份共用材质。
         * 同面额的文字面片共用这份材质和同一个内置面片网格，所以在这份复制出来的材质上打开实例化，合成一次绘制。
         * 文字仍是半透明混合（边缘和描边的抗锯齿依赖混合，不能改成不透明加镂空）：引擎把带混合的实例化批次
         * 排在不带混合的之后，文字仍在所有筹码本体之后绘制；文字不写深度，被上层筹码挡住的部分靠深度测试剔除。
         * 只改这份运行时材质，不改 chipFont.mtl：托盘模板筹码各有自己的材质实例，给资源加宏合不了批。
         */
        _proto.getChipLabelMaterial = function getChipLabelMaterial(chip, templateLabel) {
          var mat = this._chipLabelMaterials[chip];
          if (!mat) {
            mat = new Material();
            mat.copy(templateLabel.getComponent(MeshRenderer).sharedMaterial, {
              defines: {
                USE_INSTANCING: true
              }
            });
            this._chipLabelMaterials[chip] = mat;
            var driver = templateLabel.getComponent(label3D);
            if (driver) driver.sharedTarget = mat;
          }
          return mat;
        }

        // 新克隆的下注筹码：文字面片改用共用材质，去掉克隆体自带的 label3D 和 Label。只在创建时做一次。
        ;

        _proto.shareChipLabel = function shareChipLabel(chip, template, newChip) {
          var templateLabel = template.getChildByName(CHIP_LABEL_NODE);
          var chipLabel = newChip.getChildByName(CHIP_LABEL_NODE);
          if (!templateLabel || !chipLabel) return;
          chipLabel.getComponent(MeshRenderer).setSharedMaterial(this.getChipLabelMaterial(chip, templateLabel), 0);
          var driver = chipLabel.getComponent(label3D);
          if (driver) {
            // destroy 到帧末才生效，先停用，保证它不会在这一帧里创建自己的材质实例。
            driver.enabled = false;
            driver.destroy();
          }
          chipLabel.destroyAllChildren();
        }

        /**
         * 取某面额下注筹码共用的材质。
         * 筹码原始材质已开启 USE_INSTANCING，但逐个筹码取 .material 会各生成一份材质实例，
         * 实例之间不能合并绘制。每种面额只复制一份并写入面额贴图，同面额筹码共用后才能被引擎合批。
         * 托盘里的模板筹码仍用自己的材质实例（悬停高亮写在实例上），不受影响。
         */;
        _proto.getChipMaterial = function getChipMaterial(chip, template) {
          var mat = this._chipMaterials[chip];
          if (!mat) {
            mat = new Material();
            mat.copy(template.getComponent(MeshRenderer).sharedMaterial);
            var sprFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[chip]];
            mat.setProperty("mainTexture", sprFrame.texture);
            this._chipMaterials[chip] = mat;
          }
          return mat;
        }

        /**
         * 取一个下注筹码节点，优先复用池中节点；由调用方挂到 Node_betChipRoot（池中节点此前挂在停放节点下）。
         * 位置重置为模板位置，与原先 instantiate 出来的初始状态一致，飞行动画从托盘出发。
         * fresh 为 true 时跳过池直接新建，只给进桌预热用。
         */;
        _proto.obtainBetChip = function obtainBetChip(chip, fresh) {
          if (fresh === void 0) {
            fresh = false;
          }
          var template = this.Node_chipRoot.getChildByName(chip);
          var pool = this._chipPools[chip];
          var newChip = !fresh && pool && pool.length > 0 ? pool.pop() : null;
          if (!newChip) {
            newChip = instantiate(template);
            newChip.getComponent(MeshRenderer).setSharedMaterial(this.getChipMaterial(chip, template), 0);
            newChip.getComponent(MeshCollider).destroy();
            this.shareChipLabel(chip, template, newChip);
          }
          newChip.setPosition(template.position);
          newChip.setScale(0.75, 0.75, 0.75);
          return newChip;
        }

        /**
         * 回收下注筹码。节点会被复用，必须先停掉它身上的 Tween：
         * 原先靠销毁节点让未播完的飞行/收筹码动画及其回调失效，回池后节点仍有效，不停会在下次复用时继续执行。
         */;
        _proto.recycleBetChip = function recycleBetChip(chipNode) {
          // 已经停放的节点不能再入池：同一个节点在池里出现两次，之后会被两处同时取用。
          // 中奖筹码飞回后先被回收，但直到本局结束都还留在 betAreaList 里，这里挡住对它的重复回收。
          if (this._chipPark && chipNode.parent === this._chipPark) return;
          Tween.stopAllByTarget(chipNode);
          if (!this._chipPark) {
            this._chipPark = new Node("chipPark");
            // 停放的筹码和桌面筹码在同一个渲染层（可能是清晰层）；之后层的切换由 syncSharpLayer 统一处理。
            this._chipPark.layer = this.Node_betChipRoot.layer;
            // 与 Node_betChipRoot 同一个父节点，随下注区一起显示和隐藏。加在最后，不影响按下标取前 9 个下注区的代码。
            this.Node_betArea.addChild(this._chipPark);
          }
          chipNode.parent = this._chipPark;
          chipNode.setPosition(0, CHIP_PARK_Y, 0);
          var pool = this._chipPools[chipNode.name];
          if (!pool) {
            pool = this._chipPools[chipNode.name] = [];
          }
          pool.push(chipNode);
        }

        /**
         * 按当前状态把本桌的筹码放进或移出清晰层。
         * 低端机分层渲染时（BjlVipScene.setSceneRenderScale），3D 场景是低分辨率的，清晰层里的物体按原分辨率画。
         * 清晰层没有场景的深度，里面的物体不会被椅子、别的桌子挡住，所以只在相机对着本桌时才使用：
         * 选桌大厅的全景、进出桌的飞行途中、桌内空闲巡航时，筹码留在原来的层里。
         * 涉及托盘筹码（含选中光圈）、桌面筹码和停放的筹码；之后新克隆的筹码沿用模板所在的层。
         */;
        _proto.syncSharpLayer = function syncSharpLayer() {
          if (!this.Node_betChipRoot) return;
          if (!this._chipLayer) this._chipLayer = this.Node_betChipRoot.layer;
          var sharp = this._arrived && !this._cameraAway && BjlVipUtils.instance.sharpLayer;
          var layer = sharp ? LAYER_SHARP : this._chipLayer;
          if (this.Node_betChipRoot.layer == layer) return;
          var roots = [this.Node_chipRoot, this.Node_betChipRoot];
          if (this._chipPark) roots.push(this._chipPark);
          for (var _i = 0, _roots = roots; _i < _roots.length; _i++) {
            var root = _roots[_i];
            root.walk(function (node) {
              node.layer = layer;
            });
          }
        };
        _proto.onArrive = function onArrive() {
          this._arrived = true;
          this.syncSharpLayer();
        };
        _proto.onCameraAway = function onCameraAway(away) {
          this._cameraAway = away;
          this.syncSharpLayer();
        }

        /**
         * 进桌画面稳定后分帧预热筹码池。
         * 新建一个筹码（克隆加第一次挂进场景）比从池里取贵得多，“加倍”时一帧里建一批会明显卡一下，所以提前分帧建好。
         * 新建后直接回收：回收时挂到停放节点，第一次挂进场景的开销就在这里付掉，且停放位置在视野外。
         * 数量取每个面额在一个下注区里最多能留存个数的两倍（再多一个就合并成大一档；加倍时要再取同样多）。
         * 预热没做完就下注也没有问题：池里不够时照常新建。
         */;
        _proto.startChipPrewarm = function startChipPrewarm() {
          this._prewarmQueue.length = 0;
          var chipKeys = Object.keys(chipListDef);
          // 倒序入队、从队尾取：小面额先预热，它们最常用、留存数量也最多。
          for (var i = chipKeys.length - 1; i >= 0; i--) {
            var _chip = chipKeys[i];
            if (!this.Node_chipRoot.getChildByName(_chip)) continue;
            var next = chipKeys[i + 1];
            var count = next ? (Math.floor(chipListDef[next] / chipListDef[_chip]) - 1) * 2 : CHIP_PREWARM_TOP;
            for (var j = 0; j < count; j++) this._prewarmQueue.push(_chip);
          }
          this.unschedule(this.prewarmChipStep);
          this.schedule(this.prewarmChipStep, 0);
        };
        _proto.prewarmChipStep = function prewarmChipStep() {
          var start = performance.now();
          // 每帧至少建一个，保证预热总能做完。
          do {
            var _chip2 = this._prewarmQueue.pop();
            if (!_chip2) {
              this.unschedule(this.prewarmChipStep);
              this.startEffectWarm();
              return;
            }
            this.recycleBetChip(this.obtainBetChip(_chip2, true));
          } while (performance.now() - start < CHIP_PREWARM_BUDGET_MS);
        }

        /**
         * 筹码预热做完后，把本桌的 VS 特效和各下注区的中奖特效逐个预激活。
         * 这些粒子特效平时是隐藏的，第一次显示时要初始化每个粒子系统，这类粒子第一次被画出来时还有一次性的开销；
         * 实测低端机上本桌第一局会因此出现三个 90 到 135 毫秒的长帧。提前在进桌后的空闲里做掉。
         * 必须真的画出来才有效（实测同一帧内激活再关闭不起作用），所以临时沉到桌面下方显示一小段时间再还原。
         * 每次只处理一个，摊到多帧。
         */
        /**
         * 通知场景：进桌的重负载阶段开始或结束。
         * 从选桌起飞到相机到位、创建界面、预热筹码池、预激活特效，这几秒里帧率明显偏低，
         * 场景据此暂停降分辨率的帧率统计（见 BjlVipScene.onDeskWarm）。成对发出，重复结束无副作用。
         */;
        _proto.setWarmBusy = function setWarmBusy(busy) {
          if (this._warmBusy == busy) return;
          this._warmBusy = busy;
          EventManager.instance.emit(eEvent.onDeskWarm, busy);
        };
        _proto.startEffectWarm = function startEffectWarm() {
          if (this._effectWarmed) {
            this.setWarmBusy(false);
            return;
          }
          this._effectWarmed = true;
          this._effectWarmQueue = [this.Node_vsEffect].concat(this.Node_aniRoot.children);
          this.schedule(this.effectWarmStep, 0);
        };
        _proto.effectWarmStep = function effectWarmStep(dt) {
          var warming = this._effectWarming;
          if (warming) {
            warming.time += dt;
            if (warming.time < EFFECT_WARM_TIME) return;
            this.endEffectWarm();
            return;
          }
          var node = this._effectWarmQueue.shift();
          if (!node) {
            this.unschedule(this.effectWarmStep);
            this.setWarmBusy(false);
            return;
          }
          // 已经在显示的不碰（正常情况下不会出现：开局时预激活会被 stopEffectWarm 中止）。
          if (!isValid(node) || node.active) return;
          var position = node.worldPosition.clone();
          this._effectWarming = {
            node: node,
            position: position,
            time: 0
          };
          node.setWorldPosition(position.x, position.y - EFFECT_WARM_DROP, position.z);
          node.active = true;
        }

        // 还原正在预激活的那个特效：先隐藏再放回原位，保证它不会在桌面上露出来。
        ;

        _proto.endEffectWarm = function endEffectWarm() {
          var warming = this._effectWarming;
          if (!warming) return;
          this._effectWarming = null;
          if (isValid(warming.node)) {
            warming.node.active = false;
            warming.node.setWorldPosition(warming.position);
          }
        }

        /**
         * 中止特效预激活并还原。开局和离桌时必须调用：
         * 对局自己会显示这些特效，预激活还占着其中一个的话，它会停在桌面下方并很快被关掉。
         * 没做完就被中止的话，下次进桌重新来一遍（已经预激活过的那些再做一次开销很小）；
         * 这期间用到的特效按原来的方式在第一次显示时初始化。
         */;
        _proto.stopEffectWarm = function stopEffectWarm() {
          this.unschedule(this.effectWarmStep);
          if (this._effectWarming || this._effectWarmQueue.length > 0) this._effectWarmed = false;
          this._effectWarmQueue.length = 0;
          this.endEffectWarm();
          this.setWarmBusy(false);
        }

        // 放大托盘里的筹码并把这一排拉开；选中光圈跟着放大。必须在取 selChip 位置之前做：光圈和飞出的筹码都以模板位置为准。
        ;

        _proto.enlargeTrayChips = function enlargeTrayChips(chipNames) {
          if (this._trayEnlarged) return;
          this._trayEnlarged = true;
          for (var _iterator = _createForOfIteratorHelperLoose(chipNames), _step; !(_step = _iterator()).done;) {
            var name = _step.value;
            var chipNode = this.Node_chipRoot.getChildByName(name);
            if (!chipNode) continue;
            var scale = chipNode.scale;
            chipNode.setScale(scale.x * TRAY_CHIP_SCALE, scale.y * TRAY_CHIP_SCALE, scale.z * TRAY_CHIP_SCALE);
            var pos = chipNode.position;
            chipNode.setPosition(pos.x * TRAY_CHIP_SPREAD, pos.y, pos.z);
            // 点选靠物理射线打中筹码的网格碰撞体。碰撞体的形状不会随节点缩放自动更新（实测放大后可点范围
            // 仍是原来的大小，筹码之间出现点不中的缝隙），重新指定一次网格让它按新的缩放重建。
            var collider = chipNode.getComponent(MeshCollider);
            if (collider) {
              var mesh = collider.mesh;
              collider.mesh = null;
              collider.mesh = mesh;
            }
          }
          var tagScale = this.chipTag.scale;
          this.chipTag.setScale(tagScale.x * TRAY_CHIP_SCALE, tagScale.y * TRAY_CHIP_SCALE, tagScale.z * TRAY_CHIP_SCALE);
        };
        _proto.init = function init() {
          // Chip
          var keys = Object.keys(arrTexture);
          for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
            var key = _keys[_i2];
            var chipNode = this.Node_chipRoot.getChildByName(key);
            if (chipNode) {
              var spriteFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[key]];
              var meshRender = chipNode.getComponent(MeshRenderer);
              meshRender.material.setProperty("mainTexture", spriteFrame.texture);
            }
          }
          this.Node_aniRoot = this.node.getChildByName("Node_aniRoot");
          this.Node_vsEffect = this.node.getChildByName("vs");
          this.enlargeTrayChips(keys);

          // 默认选中 1K 面额。
          this.selChip = this.Node_chipRoot.getChildByName("X_1K");
          this.chipTag.active = true;
          this.chipTag.position = this.selChip.position;

          //betArea
          var arrPos = ["account_bg_04", "account_bg_04", "account_bg_05", "account_bg_03", "account_bg_03", "account_bg_01", "account_bg_02", "account_bg_02", "account_bg_01"];
          for (var i = 0; i < arrPos.length; i++) {
            var _meshRender = this.Node_betArea.children[i].getComponent(MeshRenderer);
            var _spriteFrame = BjlVipUtils.instance.arrBetAreaSpriteFrame[arrPos[i]];
            _meshRender.material.setProperty("mainTexture", _spriteFrame.texture);
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this.Node_betArea = this.node.getChildByName("Node_betArea");
          this.Node_betChipRoot = this.Node_betArea.getChildByName("Node_betChipRoot");
          this.Node_chipRoot = this.node.getChildByName("Node_chipRoot");
          this.Node_cardRoot = this.node.getChildByName("Node_cardRoot");
          this.cardTemp = this.Node_cardRoot.getChildByName("X_pukepai");
          this.X_suliao1 = this.node.getChildByName("X_suliao1");
          this.X_puke = this.node.getChildByName("X_puke");
          this.X_fapaiqi = this.node.getChildByName("X_fapaiqi");
          this.chipTag = this.Node_chipRoot.getChildByName("cm_light");
          EventManager.instance.on(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.on(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.on(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.on(eEvent.onMouseClick, this.onMouseClick, this);
          EventManager.instance.on(eEvent.onBtnClick, this.onBtnClick, this);
          EventManager.instance.on(eEvent.onGameStart, this.onGameStart, this);
          EventManager.instance.on(eEvent.onGameEnd, this.onGameEnd, this);
          // 进桌的相机动画结束时才预热，不和飞行动画抢帧时间。只有被选中的桌启用了本组件，会收到这个事件。
          EventManager.instance.on(eEvent.onLoadGame, this.startChipPrewarm, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onArrive, this);
          EventManager.instance.on(eEvent.onSharpLayer, this.syncSharpLayer, this);
          EventManager.instance.on(eEvent.onCameraAway, this.onCameraAway, this);
          this.doClearBet();
          this.Node_betArea.active = true;
          // 本组件只在选中这张桌时启用：进桌的相机动画从这里开始。
          this.setWarmBusy(true);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onMouseMoveIn, this.onMouseMoveIn, this);
          EventManager.instance.off(eEvent.onMouseMoveOut, this.onMouseMoveOut, this);
          EventManager.instance.off(eEvent.onMouseDown, this.onMouseDown, this);
          EventManager.instance.off(eEvent.onMouseClick, this.onMouseClick, this);
          EventManager.instance.off(eEvent.onBtnClick, this.onBtnClick, this);
          EventManager.instance.off(eEvent.onGameStart, this.onGameStart, this);
          EventManager.instance.off(eEvent.onGameEnd, this.onGameEnd, this);
          EventManager.instance.off(eEvent.onLoadGame, this.startChipPrewarm, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onArrive, this);
          EventManager.instance.off(eEvent.onSharpLayer, this.syncSharpLayer, this);
          EventManager.instance.off(eEvent.onCameraAway, this.onCameraAway, this);
          // 离桌的相机动画马上开始，筹码回到原来的层。
          this._arrived = false;
          this._cameraAway = false;
          this.syncSharpLayer();
          this.doClearBet();
          // 离桌后池内节点不再需要，销毁；再次进桌时重新预热。未做完的预热由下面的 unscheduleAllCallbacks 停掉。
          this._prewarmQueue.length = 0;
          this.stopEffectWarm();
          this._chipPools = {};
          if (this._chipPark) this._chipPark.destroyAllChildren();
          this.unscheduleAllCallbacks();
          this.chipTag.active = false;
          this.Node_betArea.active = false;
        };
        _proto.onDestroy = function onDestroy() {
          // 共用材质是运行时创建的，不随节点销毁，需要显式释放。
          for (var _chip3 in this._chipMaterials) {
            this._chipMaterials[_chip3].destroy();
          }
          this._chipMaterials = {};
          for (var _chip4 in this._chipLabelMaterials) {
            this._chipLabelMaterials[_chip4].destroy();
          }
          this._chipLabelMaterials = {};
        };
        _proto.onMouseMoveIn = function onMouseMoveIn(target) {
          // if (target.parent.name.match("Node_betArea")) {
          //     this.showLight(target);
          // }
        };
        _proto.onMouseMoveOut = function onMouseMoveOut(target) {
          // if (target.parent.name.match("Node_betArea")) {
          //     this.showLight(target, false);
          // }
        };
        _proto.onMouseDown = function onMouseDown(target) {
          // switch (target.name) {
          //     case "X_quanzi": {
          //         if (BjlVipModel.instance.gameStatus != BjlVipDef.eRunStatus.NONE) {
          //             return;
          //         }
          //         BjlVipUtils.instance.playSound(BjlVipDef.eSound.Cancel);
          //         this.scheduleOnce(this.doClearBet, 3);
          //         break;
          //     }
          // }
        };
        _proto.onMouseClick = function onMouseClick(target) {
          switch (target.name) {
            case "X_100":
            case "X_1K":
            case "X_10K":
            case "X_50K":
            case "X_100K":
            case "X_500K":
            case "X_1M":
            case "X_5M":
              {
                BjlVipUtils.instance.playSound(eSound.Coins);
                this.selChip = target;
                this.chipTag.position = this.selChip.position;
                break;
              }
            default:
              {
                // 下注请求已提交、尚无定论时，桌面筹码就是那笔注单，不能再加注。
                if (BjlVipCtrl.instance.isBetPending()) {
                  this.showBetPendingTip();
                  return;
                }
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (target.parent.name.match("Node_betArea")) {
                  var toPos = target.name == "Quad_play" || target.name == "Quad_bank" || target.name == "Quad_draw" ? v3(target.position.x, target.position.y, target.position.z - 0.03) : target.position;
                  BjlVipModel.instance.betPosList[target.parent.name + "#" + target.name] = target.position;
                  this.doBetChip(target.parent.name + "#" + target.name, this.selChip.name, target.position);
                }
                break;
              }
          }
        };
        _proto.showBetPendingTip = function showBetPendingTip() {
          Common.showTip(BjlVipCtrl.instance.betUnknown ? i18n.lang.betResultUnknown : i18n.lang["10005"]);
        }
        //tag==0:clear 1:last 2:double
        // case "btn_revocation":
        //     case "btn_betAgain":
        //     case "btn_double":
        ;

        _proto.onBtnClick = function onBtnClick(btnName) {
          // 同 onMouseClick：注单尚无定论时不能撤销、续押或加倍。
          if (BjlVipCtrl.instance.isBetPending()) {
            this.showBetPendingTip();
            return;
          }
          switch (btnName) {
            case "btn_revocation":
              {
                //clear bet
                // this.unschedule(this.doClearBet);

                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                this.doClearBet();
                if (this.Node_betChipRoot.children.length > 0) {
                  this.Node_betChipRoot.destroyAllChildren();
                  BjlVipModel.instance.betOrderList = {};
                  BjlVipModel.instance.betAreaList = {};
                  BjlVipModel.instance.curTotalBet = 0;

                  // this.detailContent.destroyAllChildren();
                }

                EventManager.instance.emit(eEvent.onBtnStatusUpdate, "btn_revocation");
                break;
              }
            case "btn_betAgain":
              {
                //last X
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                if (Object.keys(BjlVipModel.instance.betOrderBack).length == 0) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                gts.Debug.Log("===betOrderList====btn_betAgain=" + JSON.stringify(BjlVipModel.instance.betOrderList));
                gts.Debug.Log("===betOrderBack===btn_betAgain==" + JSON.stringify(BjlVipModel.instance.betOrderBack));
                var betOrderBackKeys = Object.keys(BjlVipModel.instance.betOrderBack);
                for (var _i3 = 0, _betOrderBackKeys = betOrderBackKeys; _i3 < _betOrderBackKeys.length; _i3++) {
                  var key = _betOrderBackKeys[_i3];
                  var arrBetInfo = BjlVipModel.instance.betOrderBack[key].slice();
                  for (var i = 0; i < arrBetInfo.length; i++) {
                    var betInfo = arrBetInfo[i];
                    this.doBetChip(key, betInfo.chip, betInfo.pos, i * 0.005);
                  }
                }
                break;
              }
            case "btn_double":
              {
                //2X
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  Common.showTip(i18n.lang["10005"]);
                  return;
                }
                var betOrderListKeys = Object.keys(BjlVipModel.instance.betOrderList);
                if (betOrderListKeys.length == 0) {
                  Common.showTip(i18n.lang["disableBet"]);
                  return;
                }
                BjlVipUtils.instance.playSound(eSound.Double);
                for (var _i4 = 0, _betOrderListKeys = betOrderListKeys; _i4 < _betOrderListKeys.length; _i4++) {
                  var _key2 = _betOrderListKeys[_i4];
                  var _arrBetInfo = BjlVipModel.instance.betOrderList[_key2].slice();
                  for (var _i5 = 0; _i5 < _arrBetInfo.length; _i5++) {
                    var _betInfo = _arrBetInfo[_i5];
                    this.doBetChip(_key2, _betInfo.chip, _betInfo.pos, _i5 * 0.005);
                  }
                }
                break;
              }
          }
        };
        _proto.doBetChip = /*#__PURE__*/function () {
          var _doBetChip = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(area, chip, pos, delay) {
            var _this2 = this;
            var betAmount, curTableInfo, arrAreaInfo, nodeArea, MaxIssueBet, tip, _tip, getSmall, keys, i, key, mRender, _mRender, addChipTemp, betAreaList, _keys2, newChip, duration;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (delay === void 0) {
                    delay = 0;
                  }
                  betAmount = chipListDef[chip]; //下注上限
                  curTableInfo = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex];
                  arrAreaInfo = area.split("#");
                  nodeArea = arrAreaInfo[1];
                  MaxIssueBet = curTableInfo.MaxIssueBet[betAreaMap[nodeArea] - 1];
                  if (!(nodeArea == "Quad_play" && BjlVipModel.instance.areaTotalBet["Quad_bank"] || nodeArea == "Quad_bank" && BjlVipModel.instance.areaTotalBet["Quad_play"])) {
                    _context.next = 10;
                    break;
                  }
                  tip = Common.strFormat(i18n.lang["10002"], MaxIssueBet, 2);
                  Common.showTip(tip);
                  return _context.abrupt("return");
                case 10:
                  if (!(BjlVipModel.instance.areaTotalBet[nodeArea] + betAmount > MaxIssueBet)) {
                    _context.next = 14;
                    break;
                  }
                  _tip = Common.strFormat(i18n.lang["10064"], MaxIssueBet, 2);
                  Common.showTip(_tip);
                  return _context.abrupt("return");
                case 14:
                  if (!BjlVipModel.instance.areaTotalBet[nodeArea]) {
                    BjlVipModel.instance.areaTotalBet[nodeArea] = 0;
                  }
                  if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
                    EventManager.instance.emit(eEvent.onStopCameraCruise);
                  }
                  if (!(BjlVipModel.instance.curBalance < betAmount)) {
                    _context.next = 37;
                    break;
                  }
                  getSmall = false;
                  keys = Object.keys(chipListDef);
                  i = keys.length - 1;
                case 20:
                  if (!(i >= 0)) {
                    _context.next = 34;
                    break;
                  }
                  key = keys[i];
                  betAmount = chipListDef[key];
                  if (!(BjlVipModel.instance.curBalance >= betAmount)) {
                    _context.next = 31;
                    break;
                  }
                  chip = key;
                  if (this.selChip) {
                    mRender = this.chipTag.getComponent(MeshRenderer);
                    if (mRender) {
                      mRender.material.setProperty("emissive", color(255, 255, 255));
                    }
                  }
                  this.selChip = this.selChip.parent.getChildByName(key);
                  this.chipTag.position = this.selChip.position;
                  if (this.selChip) {
                    _mRender = this.chipTag.getComponent(MeshRenderer);
                    if (_mRender) {
                      _mRender.material.setProperty("emissive", color(5, 29, 127));
                    }
                  }
                  getSmall = true;
                  return _context.abrupt("break", 34);
                case 31:
                  i--;
                  _context.next = 20;
                  break;
                case 34:
                  if (getSmall) {
                    _context.next = 37;
                    break;
                  }
                  Common.showTip(i18n.lang["10001"]);
                  return _context.abrupt("return");
                case 37:
                  BjlVipModel.instance.areaTotalBet[nodeArea] += betAmount;
                  BjlVipModel.instance.curTotalBet += betAmount;
                  // this.Label_totalBet.string = `$${Common.ChangeMoneyShow(BjlVipModel.instance.curTotalBet, 2)}`;

                  BjlVipModel.instance.curBalance -= betAmount;
                  EventManager.instance.emit(eEvent.onUpdateGold);
                  addChipTemp = this.Node_chipRoot.getChildByName(chip);
                  betAreaList = BjlVipModel.instance.betAreaList[area];
                  if (betAreaList) {
                    _keys2 = Object.keys(betAreaList);
                    pos = v3(pos.x, 0.212 + _keys2.length * 0.0025, pos.z);
                  }
                  newChip = this.obtainBetChip(chip); // newChip.position = pos;
                  this.Node_betChipRoot.addChild(newChip);
                  BjlVipModel.instance.betAreaList[area] = BjlVipModel.instance.betAreaList[area] || [];
                  BjlVipModel.instance.betAreaList[area].push(newChip);
                  duration = Vec3.distance(addChipTemp.position, pos) / 1;
                  tween(newChip).delay(delay).call(function () {
                    BjlVipUtils.instance.playSound(eSound.Bet);
                    EventManager.instance.emit(eEvent.onBtnStatusUpdate);
                  }).to(duration, {
                    position: pos
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    newChip.position = pos;

                    //检测合并
                    _this2.checkMerge(area, pos);
                  }).start();
                case 50:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function doBetChip(_x, _x2, _x3, _x4) {
            return _doBetChip.apply(this, arguments);
          }
          return doBetChip;
        }() //检测合并
        ;

        _proto.checkMerge = function checkMerge(area, toPos) {
          var betAreaList = BjlVipModel.instance.betAreaList[area];
          var areaList = {};
          var keys = Object.keys(betAreaList);
          for (var _i6 = 0, _keys3 = keys; _i6 < _keys3.length; _i6++) {
            var key = _keys3[_i6];
            var _chip5 = betAreaList[key];
            areaList[_chip5.name] = areaList[_chip5.name] || [];
            areaList[_chip5.name].push(_chip5);
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
              // 取副本：position 是节点内部坐标的引用，下面回收这个节点时它会被改成停放位置。
              var chipPos = chipList[0].position.clone();
              areaList[_key3].splice(0, max);
              for (var j = betAreaList.length - 1, delCounts = max; j >= 0 && delCounts > 0; j--) {
                var chipNode = betAreaList[j];
                if (chipNode.name == _key3) {
                  delCounts--;
                  this.recycleBetChip(chipNode);
                  betAreaList.splice(j, 1);
                }
              }

              //添加一个大筹码
              var newChip = this.obtainBetChip(nextKey);
              newChip.position = chipPos;
              this.Node_betChipRoot.addChild(newChip);
              areaList[nextKey] = areaList[nextKey] || [];
              areaList[nextKey].push(newChip);
              betAreaList.push(newChip);
            }
          }

          // BjlVipModel.instance.betOrderList[area] = [];
          //reset pos
          for (var _i7 = 0; _i7 < betAreaList.length; _i7++) {
            var _chip6 = betAreaList[_i7];
            // 每个筹码落地都会重排整个区，续押/加倍时调用次数与筹码数成正比，这里不再逐个新建 Vec3。
            _chip6.setPosition(toPos.x, 0.212 + _i7 * 0.0025, toPos.z);

            // BjlVipModel.instance.betOrderList[area].push({
            //     chip: chip.name,
            //     pos: v3(chip.position.x, chip.position.y, chip.position.z),
            // });
          }
        };

        _proto.clearBet = function clearBet() {
          if (BjlVipModel.instance.selectRoomIndex != -1) {
            EventManager.instance.emit(eEvent.onWaitCameraCruise);
          }
          for (var i = this.Node_betChipRoot.children.length - 1; i >= 0; i--) {
            this.recycleBetChip(this.Node_betChipRoot.children[i]);
          }
          for (var _i8 = this.Node_cardRoot.children.length - 1; _i8 > 0; _i8--) {
            this.Node_cardRoot.children[_i8].destroyFromParent();
          }
          BjlVipModel.instance.betOrderList = {};
          BjlVipModel.instance.betAreaList = {};
          BjlVipModel.instance.curTotalBet = 0;
          BjlVipModel.instance.areaTotalBet = {};
        };
        _proto.doClearBet = function doClearBet() {
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          BjlVipUtils.instance.playSound(eSound.Cancel);
          BjlVipModel.instance.curBalance += BjlVipModel.instance.curTotalBet;
          EventManager.instance.emit(eEvent.onUpdateGold);
          this.clearBet();
        }

        //返回上一次下注
        ;

        _proto.returnBet = function returnBet(betInfo) {
          var _this3 = this;
          var betAreaList = BjlVipModel.instance.betAreaList[betInfo.area];
          if (betAreaList.length == 0) {
            EventManager.instance.emit(eEvent.onWaitCameraCruise);
            return;
          }
          var betAmount = chipListDef[betInfo.chip];
          BjlVipModel.instance.curTotalBet -= betAmount;
          BjlVipModel.instance.curBalance += betAmount;
          EventManager.instance.emit(eEvent.onUpdateGold);

          // this.Label_totalBet.string = BjlVipModel.instance.curTotalBet > 0 ? `$${Common.ChangeMoneyShow(BjlVipModel.instance.curTotalBet, 2)}` : "0";

          var delChip = function delChip(chipName) {
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == chipName) {
                chipNode.destroyFromParent();
                betAreaList.splice(j, 1);
                return true;
              }
            }
            return false;
          };
          var breakChip = function breakChip(smallChip, bigChip) {
            //删除大筹码
            betAreaList = BjlVipModel.instance.betAreaList[betInfo.area];
            var chipPos = betAreaList[0].position;
            for (var j = betAreaList.length - 1; j >= 0; j--) {
              var chipNode = betAreaList[j];
              if (chipNode.name == bigChip) {
                chipPos = chipNode.position;
                chipNode.destroyFromParent();
                betAreaList.splice(j, 1);

                //拆解大筹码为max-1个小一阶筹码
                var max = Math.floor(chipListDef[bigChip] / chipListDef[smallChip]);
                for (var _j = 0; _j < max; _j++) {
                  //添加筹码
                  var addChipTemp = _this3.Node_chipRoot.getChildByName(smallChip);
                  var newChip = instantiate(addChipTemp);
                  var mRender = newChip.getComponent(MeshRenderer);
                  var sprFrame = BjlVipUtils.instance.arrChipSpriteFrame[arrTexture[newChip.name]];
                  mRender.material.setProperty("mainTexture", sprFrame.texture);
                  newChip.getComponent(MeshCollider).destroy();
                  newChip.scale = v3(0.75, 0.75, 0.75);
                  newChip.position = chipPos;
                  _this3.Node_betChipRoot.addChild(newChip);
                  betAreaList.push(newChip);
                }
                return true;
              }
            }
            return false;
          };

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
          for (var _i9 = 0; _i9 < keys.length; _i9++) {
            var _key4 = keys[_i9];
            var _chip7 = betAreaList[_key4];
            _chip7.position = v3(_chip7.position.x, _i9 * 0.005, _chip7.position.z);
          }
        };
        _proto.showLight = function showLight(node, isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            return;
          }
          var mRender = node.getComponent(MeshRenderer);
          if (mRender) {
            mRender.material.setProperty("mainColor", color(255, 255, 255, isShow ? 255 : 0));
          }
        };
        _proto.sendCard = function sendCard(cardIndex) {
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            var cardInfo = arrSendCardInfo;
            BjlVipUtils.instance.playOneShot(eSound.Card);
            var newCard = instantiate(_this4.cardTemp);
            newCard.active = true;
            newCard.name = "newCard_" + cardIndex;
            newCard.position = cardInfo[0].pos;
            newCard.eulerAngles = cardInfo[0].eulerAngles;
            newCard.scale = cardInfo[0].scale;
            _this4.Node_cardRoot.addChild(newCard);
            var toPos_0 = cardInfo[1].pos;
            var toEulerAngles_0 = cardInfo[1].eulerAngles;
            var toPos_1 = cardInfo[cardIndex + 2].pos;
            var toEulerAngles_1 = cardInfo[cardIndex + 2].eulerAngles;
            var scale_1 = cardInfo[cardIndex + 2].scale;
            var duration = 0.25; //Vec3.distance(toPos_0, toPos_1);

            tween(newCard).to(0.1, {
              position: toPos_0,
              eulerAngles: toEulerAngles_0
            }).parallel(tween(newCard).bezierTo3(duration, toPos_0, v3(toPos_0.x, (toPos_0.y + toPos_1.y) * 0.75, toPos_0.z), v3(toPos_1.x, (toPos_0.y + toPos_1.y) * 0.75, toPos_1.z), toPos_1), tween(newCard).to(duration, {
              eulerAngles: toEulerAngles_1,
              scale: scale_1
            })).call(function () {
              //onCard toPos End

              BjlVipUtils.instance.playOneShot(eSound.Card);
              resolve();
            }).start();
          });
        };
        _proto.flipCard = function flipCard(cardIndex) {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            //1-52
            var newCard = _this5.Node_cardRoot.getChildByName("newCard_" + cardIndex);
            //
            var arrData = cardIndex % 2 == 0 ? BjlVipModel.instance.betResult.playerCard : BjlVipModel.instance.betResult.bankerCard;
            var index = cardIndex % 2 == 0 ? cardIndex / 2 : (cardIndex - 1) / 2;
            var cardData = arrData[index];
            var cardType_num = (cardData - 1) % 13;
            var cardType_index = Math.floor((cardData - 1) / 13);

            //texture
            var spriteFrame = BjlVipUtils.instance.arrCardSpriteFrame["T_puke" + (cardType_index + 1) + "_Base"];
            var mNewCard = newCard.getComponent(MeshRenderer).material;
            mNewCard.setProperty("mainTexture", spriteFrame.texture);
            var cardOffset = cardTillingOffset[cardType_num];
            mNewCard.setProperty("tilingOffset", v4(1.0, 1.0, cardOffset.x, cardOffset.y));
            var pos = newCard.position;
            var eulerAngles = newCard.eulerAngles;
            BjlVipUtils.instance.playOneShot(eSound.Card);
            var duration = 0.2;
            tween(newCard).parallel(tween(newCard).to(duration, {
              position: v3(pos.x, pos.y * 1.25, pos.z)
            }, {
              easing: "cubicOut"
            }).to(duration, {
              position: v3(pos.x, pos.y, pos.z)
            }, {
              easing: "cubicIn"
            }), tween(newCard).to(duration * 2, {
              eulerAngles: v3(eulerAngles.x + 180, eulerAngles.y, eulerAngles.z)
            })).call(function () {
              //onCard toPos End

              BjlVipUtils.instance.playOneShot(eSound.Card);
              EventManager.instance.emit(eEvent.onFlipCard, cardIndex, cardType_num + 1);
              resolve();
            }).start();
          });
        };
        _proto.doAwait = function doAwait(delay) {
          var _this6 = this;
          return new Promise(function (resolve, reject) {
            _this6.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.onGameStart = /*#__PURE__*/function () {
          var _onGameStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var i, showNode, mRender, cardData, _i10, _i11;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  this.stopEffectWarm();
                  for (i = 0; i < 9; i++) {
                    showNode = this.Node_betArea.children[i];
                    Tween.stopAllByTarget(showNode);
                    mRender = showNode.getComponent(MeshRenderer);
                    if (mRender) {
                      mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
                    }
                  }
                  _context2.next = 4;
                  return this.doAwait(2);
                case 4:
                  //发牌0-3
                  cardData = [];
                  cardData[0] = BjlVipModel.instance.betResult.playerCard[0];
                  cardData[1] = BjlVipModel.instance.betResult.bankerCard[0];
                  cardData[2] = BjlVipModel.instance.betResult.playerCard[1];
                  cardData[3] = BjlVipModel.instance.betResult.bankerCard[1];
                  _i10 = 0;
                case 10:
                  if (!(_i10 < cardData.length)) {
                    _context2.next = 16;
                    break;
                  }
                  _context2.next = 13;
                  return this.sendCard(_i10);
                case 13:
                  _i10++;
                  _context2.next = 10;
                  break;
                case 16:
                  _i11 = 0;
                case 17:
                  if (!(_i11 < cardData.length)) {
                    _context2.next = 23;
                    break;
                  }
                  _context2.next = 20;
                  return this.flipCard(_i11);
                case 20:
                  _i11++;
                  _context2.next = 17;
                  break;
                case 23:
                  cardData = [];
                  //补牌4
                  if (!BjlVipModel.instance.betResult.playerCard[2]) {
                    _context2.next = 27;
                    break;
                  }
                  _context2.next = 27;
                  return this.sendCard(4);
                case 27:
                  if (!BjlVipModel.instance.betResult.playerCard[2]) {
                    _context2.next = 30;
                    break;
                  }
                  _context2.next = 30;
                  return this.flipCard(4);
                case 30:
                  if (!BjlVipModel.instance.betResult.bankerCard[2]) {
                    _context2.next = 33;
                    break;
                  }
                  _context2.next = 33;
                  return this.sendCard(5);
                case 33:
                  if (!BjlVipModel.instance.betResult.bankerCard[2]) {
                    _context2.next = 36;
                    break;
                  }
                  _context2.next = 36;
                  return this.flipCard(5);
                case 36:
                  this.Node_vsEffect.active = true;
                  ParticleUtils.play(this.Node_vsEffect.getChildByName("effect"));
                  BjlVipUtils.instance.playSound(eSound.VS);
                  _context2.next = 41;
                  return this.doAwait(0.5);
                case 41:
                  EventManager.instance.emit(eEvent.onShowResult);
                  this.showWinArea();

                  // await this.doAwait(0.5);

                  this.doCollectChip();
                  this.doCollectCard();
                case 45:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
          function onGameStart() {
            return _onGameStart.apply(this, arguments);
          }
          return onGameStart;
        }();
        _proto.onGameEnd = function onGameEnd() {
          this.clearBet();
          this.clearWinEffect();
          // 中奖区没有自己的筹码（如和局退注）或收筹码动画被上面的清桌打断时，
          // 收筹码回调不会回写余额，这里兜底。
          this.applyEndBalance();
          ParticleUtils.stop(this.Node_vsEffect.getChildByName("effect"));
          this.Node_vsEffect.active = false;
        }
        /**
         * 把房间内暂存的钱包余额（endBalance）回写为当前余额并刷新显示。
         * 下注阶段 curBalance 含本地未提交的扣减，钱包推送不能直接覆盖，所以只在本局结算后回写；
         * endBalance 为 0 表示没有待回写的值，重复调用无副作用。
         */;
        _proto.applyEndBalance = function applyEndBalance() {
          if (BjlVipModel.instance.endBalance > 0) {
            BjlVipModel.instance.curBalance = BjlVipModel.instance.endBalance;
            BjlVipModel.instance.endBalance = 0;
            EventManager.instance.emit(eEvent.onUpdateGold);
          }
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
        _proto.doCollectCard = function doCollectCard() {
          var _this7 = this;
          return new Promise(function (resolve, reject) {
            for (var i = _this7.Node_cardRoot.children.length - 1; i > 0; i--) {
              var nodeCard = _this7.Node_cardRoot.children[i];
              var pos = nodeCard.position;
              // let eulerAngles = nodeCard.eulerAngles;
              var startPos = v3(0, pos.y + 0.001 * i, pos.z);
              var toPos = v3(-0.46, 0.353 + 0.001 * i, -0.308);
              var cpY = (startPos.y + toPos.y) / 2 + 0.3;
              var duration = 0.75;
              tween(nodeCard).to(0.25, {
                position: startPos,
                eulerAngles: v3(90, 0, 0)
              }, {
                easing: "quadOut"
              }).bezierTo3(duration, startPos, v3(startPos.x, cpY, (startPos.z + toPos.z) / 2.0), v3(toPos.x, cpY, (startPos.z + toPos.z) / 2.0), toPos, {
                easing: "cubicOutIn"
              }).to(0.25, {
                position: v3(-0.46, 0.212, -0.308)
              }).destroySelf().start();
              tween(nodeCard).delay(0.25).to(duration, {
                scale: v3(1, 1, 1)
              }).start();
            }
          });
        };
        _proto.doCollectChip = function doCollectChip() {
          var _this8 = this;
          return new Promise(function (resolve, reject) {
            var _loop = function _loop() {
              var prizeType = _step2.value;
              var strArea = arrBetAreaMap[prizeType - 1];
              var areaKey = "Node_betArea#" + strArea;
              var betAreaList = BjlVipModel.instance.betAreaList[areaKey];
              if (betAreaList) {
                gts.Debug.Log("===doCollectChip====betAreaList==prizeType===" + (prizeType - 1));
                if (betAreaList.length > 0) {
                  var cm_result = _this8.Node_aniRoot.children[prizeType - 1];
                  cm_result.active = true;
                  var effect = cm_result.getChildByName("effect");
                  ParticleUtils.play(effect);
                }
                var icounts = 0;
                var _loop2 = function _loop2() {
                  var chipNode = _step3.value;
                  var destNode = _this8.Node_chipRoot.getChildByName(chipNode.name);
                  if (destNode) {
                    var delay = icounts * 0.05;
                    tween(chipNode).sequence(tween(chipNode).delay(delay), _this8.doJump(chipNode, 0.5, destNode.worldPosition)).call(function () {
                      BjlVipUtils.instance.playSound(eSound.Reward);
                      _this8.recycleBetChip(chipNode);
                      icounts--;
                      if (icounts == 0) {
                        //更新金币--显示得分
                        _this8.applyEndBalance();
                      }
                    }).start();
                    icounts++;
                  }
                };
                for (var _iterator3 = _createForOfIteratorHelperLoose(betAreaList), _step3; !(_step3 = _iterator3()).done;) {
                  _loop2();
                }
              }
            };
            for (var _iterator2 = _createForOfIteratorHelperLoose(BjlVipModel.instance.betResult.prizeType), _step2; !(_step2 = _iterator2()).done;) {
              _loop();
            }
          });
        };
        _proto.clearWinEffect = function clearWinEffect() {
          for (var i = 0; i < 9; i++) {
            var showNode = this.Node_betArea.children[i];
            var ani = showNode.getComponent(Animation);
            ani.stop();
            var mRender = showNode.getComponent(MeshRenderer);
            if (mRender) {
              mRender.material.setProperty("mainColor", color(255, 255, 255, 0));
            }
            var cm_result = this.Node_aniRoot.children[i];
            var effect = cm_result.getChildByName("effect");
            ParticleUtils.stop(effect);
            cm_result.active = false;
          }
        }
        // setWinEffect(node: Node) {
        //     let startScale = v3(node.scale.x, node.scale.y, 1);
        //     tween(node)
        //         .to(0.5, { scale: v3(startScale.x * 0.8, startScale.y * 0.8, startScale.z * 0.8) })
        //         .to(0.5, { scale: startScale })
        //         .union()
        //         .repeatForever()
        //         .start();
        // }
        ;

        _proto.showWinArea = function showWinArea() {
          for (var _iterator4 = _createForOfIteratorHelperLoose(BjlVipModel.instance.betResult.prizeType), _step4; !(_step4 = _iterator4()).done;) {
            var prizeType = _step4.value;
            var showNode = this.Node_betArea.children[prizeType - 1];
            showNode.getComponent(Animation).play();
          }
        };
        return BjlVip_deskArea;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Node_win_quad_0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_win_quad_other", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_totalBet", [_dec4], {
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

System.register("chunks:///_virtual/BjlVipBtnCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Camera, Canvas, Color, geometry, game, Node, director, PhysicsSystem, MeshRenderer, color, sys, UIRenderer, Component, EventManager, eRunStatus, eEvent, BjlVipModel;
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
      geometry = module.geometry;
      game = module.game;
      Node = module.Node;
      director = module.director;
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
      BjlVipModel = module.BjlVipModel;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "60a08m1yPJAJZANI4aKjdip", "BjlVipBtnCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipBtnCheck = exports('BjlVipBtnCheck', (_dec = ccclass("BjlVipBtnCheck"), _dec2 = property(Camera), _dec3 = property(Canvas), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipBtnCheck, _Component);
        function BjlVipBtnCheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "MainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "canvas", _descriptor2, _assertThisInitialized(_this));
          _this._cur_button = null;
          _this._color1 = Color.BLACK;
          _this._color2 = new Color(5, 29, 127);
          //on
          _this._color3 = new Color(50, 50, 127);
          //press
          // 鼠标移动与按下都要做射线检测，复用同一个 Ray，避免每个输入事件分配一次。
          _this._ray = new geometry.Ray();
          // 上一次处理鼠标移动的帧号。场景里有上百个 MeshCollider，高回报率鼠标一帧会触发多次移动事件，
          // 悬停高亮一帧更新一次即可。
          _this._moveFrame = -1;
          return _this;
        }
        var _proto = BjlVipBtnCheck.prototype;
        /**
         * 由触摸位置得到射线。
         * 低端机分层渲染时主相机画到一张比画布小的纹理上（BjlVipScene.setSceneRenderScale），
         * 相机按纹理尺寸换算屏幕坐标，触摸位置要先按同样的比例缩小，否则点到的位置会整体偏移。
         */
        _proto.screenRay = function screenRay(event, out) {
          var x = event.getLocationX();
          var y = event.getLocationY();
          var target = this.MainCamera.targetTexture;
          if (target) {
            var ratio = target.width / game.canvas.width;
            x *= ratio;
            y *= ratio;
          }
          this.MainCamera.screenPointToRay(x, y, out);
        };
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          // this.canvas.node.on(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.canvas.node.on(Node.EventType.TOUCH_END, this.onMouseUp, this);
          this.canvas.node.on(Node.EventType.TOUCH_START, this.onMouseDown, this);
        };
        _proto.onDisable = function onDisable() {
          // this.canvas.node.off(Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
          this.canvas.node.off(Node.EventType.TOUCH_END, this.onMouseUp, this);
          this.canvas.node.off(Node.EventType.TOUCH_START, this.onMouseDown, this);
        };
        _proto.onMouseMove = function onMouseMove(event) {
          var frame = director.getTotalFrames();
          if (frame === this._moveFrame) return;
          this._moveFrame = frame;
          var outRay = this._ray;
          this.screenRay(event, outRay);
          if (PhysicsSystem.instance.raycastClosest(outRay)) {
            // const raycastResult = PhysicsSystem.instance.raycastResults.find((v) => {
            //     // return v.collider.getComponent(MoveCameraOnButtonClick);
            //     return v;
            // });
            var raycastResult = PhysicsSystem.instance.raycastClosestResult;
            var castCollider = raycastResult.collider;
            if (castCollider) {
              if (
              // castCollider.node.name.match("X_jinshu") ||
              // castCollider.node.name == "X_lunpan2" ||
              castCollider.node == this._cur_button) {
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
              //moveOut
              this.onMouseMoveOut(this._cur_button);
              this._cur_button = null;
            }
          } else if (this._cur_button) {
            //moveOut
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

          if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
        };
        _proto.onMouseDown = function onMouseDown(event) {
          var outRay = this._ray;
          this.screenRay(event, outRay);
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

          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = true;
          } else if (node.name.match("Quad_")) {
            if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
              return;
            }
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

          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = false;
          } else if (node.name.match("Quad_")) {
            if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
              return;
            }
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
          if (node.name.match("X_zhuozi")) {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              return;
            }
            var Node_light = node.parent.getChildByName("Node_light");
            Node_light.active = false;
            var selectRoomIndex = parseInt(node.parent.name.replace("Node_desk_", ""));
            EventManager.instance.emit(eEvent.onSelectRoom, selectRoomIndex);
            return;
          } else if (node.name.match("Quad_")) {
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
        return BjlVipBtnCheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "MainCamera", [_dec2], {
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

System.register("chunks:///_virtual/BjlVipCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
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
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ba30eJ9QDFNjZLblIcC9Hlb", "BjlVipCamera", undefined);
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
      var BjlVipCamera = exports('BjlVipCamera', (_dec = ccclass("BjlVipCamera"), _dec2 = property({
        slide: true,
        range: [0.05, 0.5, 0.01]
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipCamera, _Component);
        function BjlVipCamera() {
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
        var _proto = BjlVipCamera.prototype;
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
        return BjlVipCamera;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damp", [_dec2], {
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

System.register("chunks:///_virtual/BjlVipCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './NetManager.ts', './BjlVipModel.ts', './I18n.ts', './ViewManager.ts', './BjlVipDef.ts', './BjlVipUtils.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, cclegacy, _decorator, GameDef, ConfigManager, DataManager, UserKey, EventManager, NetManager, BjlVipModel, i18n, ViewManager, eProto, eEvent, eRunStatus, BjlVipUtils, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
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
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      eProto = module.eProto;
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "67d399yoZpNfI/tZazxGuux", "BjlVipCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipCtrl = exports('BjlVipCtrl', ccclass(_class = /*#__PURE__*/function (_GameDef$BaseCtrl) {
        _inheritsLoose(BjlVipCtrl, _GameDef$BaseCtrl);
        function BjlVipCtrl() {
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
          // 下注请求已发出但没有拿到明确结果（超时、发出后的空回复、账号失效）。服务端可能已扣款开奖，
          // 所以保持锁定、不退款、不重发，直到拿到服务端的余额（钱包推送，或重连成功的登录回复）才以它为准解锁。
          _this.betUnknown = false;
          // 每次提交和每次重置都会递增；旧请求的回调据此作废，不能改动之后的状态。
          _this._betAttempt = 0;
          _this._configManager = ConfigManager.instance;
          _this._eventManager = EventManager.instance;
          _this._netManager = NetManager.instance;
          _this._dataManager = DataManager.instance;
          _this._model = BjlVipModel.instance;
          _this.seedBalance();
          NetManager.instance.waitServiceSendData();
          return _this;
        }
        var _proto = BjlVipCtrl.prototype;
        _proto.destroy = function destroy() {
          _GameDef$BaseCtrl.prototype.destroy.call(this);
          delete BjlVipCtrl._instance;
          BjlVipCtrl._instance = null;
          BjlVipModel.destroy();
          BjlVipUtils.destroy();
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
        _proto.reqHistory = function reqHistory() {
          NetManager.instance.sendOnlineData(eProto.HD_History, {});
        };
        _proto.reqRoomList = function reqRoomList() {
          NetManager.instance.sendOnlineData(eProto.HD_GetTableList, {});
        };
        /** 桌面注单已提交且尚无定论（等待回复或结果未知），此时不能加注、撤销、续押、加倍或再次提交。 */
        _proto.isBetPending = function isBetPending() {
          return this.isReqBet || this.betUnknown;
        }

        /** 离桌时调用：丢弃未完成的下注状态。结果未知的那一笔由钱包余额体现，这里主动拉一次钱包。 */;
        _proto.resetBetState = function resetBetState() {
          this._betAttempt++;
          this.isReqBet = false;
          if (this.betUnknown) {
            this.betUnknown = false;
            NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          }
        }

        // 进入游戏时余额还是“未知”(-1) 的话，先用平台缓存的余额。
        // 本游戏的钱包请求都不带回调，未连接、超时、空回复、错误码都收不到通知，余额会一直停在 -1，
        // 下注时被当成余额不足。平台缓存由登录回复、钱包回复和推送持续更新，是上次已知的服务端余额；
        // 之后的钱包回复仍按原规则覆盖或暂存。缓存可能过期，下注金额最终由服务端校验。
        // 只在 -1 时写入，不覆盖已经拿到的余额。
        ;

        _proto.seedBalance = function seedBalance() {
          if (BjlVipModel.instance.curBalance > -1) return;
          var cached = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          // 缓存缺失时读到 null，Number(null) 是 0，必须先排除，否则“未知”会被写成余额 0。
          if (cached == null || cached === "") return;
          // 平台其他位置按字符串读取这个值，这里统一转成数字再判断。
          var gold = Number(cached);
          if (isFinite(gold) && gold >= 0) BjlVipModel.instance.curBalance = gold;
        }

        // 结果未知期间收到钱包：以钱包余额为准解锁。
        // 桌面上仍是那笔结果未知的注单，服务端是否受理无法区分，统一撤下且不把本地扣减退回余额。
        ;

        _proto.resolveBetUnknown = function resolveBetUnknown(balance) {
          this.betUnknown = false;
          BjlVipModel.instance.endBalance = 0;
          EventManager.instance.emit(eEvent.onGameEnd);
          BjlVipModel.instance.curBalance = balance;
          EventManager.instance.emit(eEvent.onUpdateGold);
          // 按“桌面已清空”刷新按钮：有上一局注单时显示重复下注。
          EventManager.instance.emit(eEvent.onBtnStatusUpdate, "btn_revocation");
        };
        _proto.reqBet = function reqBet(betArr) {
          var _this2 = this;
          if (betArr === void 0) {
            betArr = null;
          }
          if (this.betUnknown) {
            Common.showTip(i18n.lang.betResultUnknown);
            return false;
          }
          // 一次 HD_Bet 即完成扣款并返回整局结果；回复未到前再次提交会重复下注并重复开局。
          if (this.isReqBet) {
            return false;
          }
          this.isReqBet = true;
          var attempt = ++this._betAttempt;
          // sendOnlineData 仍在调用栈内时为 true；此时到达的空回复只可能来自“未连接、未发送”的同步分支。
          var sending = true;
          var unknown = function unknown() {
            if (attempt !== _this2._betAttempt || !_this2.isReqBet) return;
            _this2.isReqBet = false;
            _this2.betUnknown = true;
            Common.showTip(i18n.lang.betResultUnknown);
            EventManager.instance.emit(eEvent.onBetAbort);
            // 解锁只靠之后到达的钱包；回复丢失而本局的钱包推送已先到时不会再有推送，这里主动拉一次。
            // 断线时这次请求不会发出，仍由重连后的登录回复解锁。
            try {
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
            } catch (_) {}
          };
          // 钱包推送在房间内只暂存到 endBalance，本局结束时回写。提交前暂存的值不含本局输赢，
          // 留到结算会把余额改回下注前，这里作废，只认提交之后收到的推送。
          BjlVipModel.instance.endBalance = 0;
          gts.Debug.LogWarr("==reqBet==" + JSON.stringify(betArr));
          try {
            NetManager.instance.sendOnlineData(eProto.HD_Bet, {
              table: "" + BjlVipModel.instance.selectRoomIndex,
              bet: betArr
            },
            // 空回复和 302/401 不会进入 onRecvData，在这里处理；
            // 不返回 false，成功回复和业务错误码仍走原有事件分发，在 onRecvData 里结束等待。
            function (response) {
              if (attempt !== _this2._betAttempt || !_this2.isReqBet) return;
              if (!response && sending) {
                // 点击时已断线，请求没有发出，确定未提交。
                _this2.isReqBet = false;
                Common.showTip(i18n.errTip(501));
                return;
              }
              if (!response || response.Code == 302 || response.Code == 401) unknown();
              // 30211（游客不可下注）由 NetManager.recvNetData 提示后直接丢弃，同样到不了 onRecvData；
              // 服务端已明确拒绝，在这里结束等待，否则桌内所有下注和退桌操作会一直被拦住。
              else if (response.Code == 30211) {
                _this2.isReqBet = false;
                EventManager.instance.emit(eEvent.onBetAbort);
              }
            },
            // 超时或会话取消。
            unknown);
            sending = false;
          } catch (_) {
            // 发送过程抛错时无法确定数据是否已写出，按结果未知处理。
            sending = false;
            unknown();
          }
          return true;
        }

        /**请求突出房间 */;
        _proto.reqExit = function reqExit() {
          NetManager.instance.sendOnlineData(eProto.HD_Leave, {});
        }

        /**请求排行榜 */;
        _proto.reqRank = function reqRank(curPage) {
          NetManager.instance.sendOnlineData(eProto.HD_Rank, {
            gameType: "bjl3d"
          });
        }

        // /**请求历史记录 */
        // reqHistory(offset = 0, pageSize = 13) {
        //     NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_History, {
        //         Offset: offset,
        //         PageSize: pageSize,
        //         RecordType: "bjl3d",
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
            RecordType: "bjl3d"
          });
        }

        //////////////////////////////////////////
        //网络消息接收
        ;

        _proto.onRecvData = function onRecvData(data) {
          // 日志关闭时参数仍会求值，这里不再序列化整个回包；完整内容在 NetManager 收包处已有日志。
          gts.Debug.LogWarr("==onRecvData==" + data.cmd);
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
                  // 界面在注单发出时已让镜头先行，被拒后需要退回。
                  EventManager.instance.emit(eEvent.onBetAbort);
                  break;
                }
            }
            return;
          }
          var emitData = {};
          switch (data.cmd) {
            case eProto.HD_GetTableList:
              {
                var gameInfo = data.Data;
                BjlVipModel.instance.tableList = [];
                for (var _iterator = _createForOfIteratorHelperLoose(gameInfo.tableInfo), _step; !(_step = _iterator()).done;) {
                  var deskInfo = _step.value;
                  var newInfo = {
                    cardNum: 0,
                    MaxIssueBet: [],
                    history: [],
                    table: "0"
                  };
                  newInfo.cardNum = deskInfo.cardNum;
                  newInfo.history = deskInfo.history.reverse();
                  newInfo.table = deskInfo.table;
                  var arrInde = [0, 1, 2, 3, 4, 20, 6, 12, 19];
                  for (var _i5 = 0, _arrInde = arrInde; _i5 < _arrInde.length; _i5++) {
                    var index = _arrInde[_i5];
                    newInfo.MaxIssueBet.push(gameInfo.gamePlay[index].MaxIssueBet);
                  }
                  BjlVipModel.instance.tableList.push(newInfo);
                }
                BjlVipModel.instance.winRate = [];
                //1-闲 2-庄 3-和 4-闲对子 5-庄对子
                for (var i = 0; i < 5; i++) {
                  BjlVipModel.instance.winRate[i] = gameInfo.gamePlay[i].Odds - 100;
                }

                //闲奖励
                var minRate = 0;
                var maxRate = 0;
                for (var _i3 = 5; _i3 < 12; _i3++) {
                  var odds = gameInfo.gamePlay[_i3].Odds - 100;
                  if (minRate == 0 || odds < minRate) {
                    minRate = odds;
                  }
                  if (maxRate == 0 || maxRate < odds) {
                    maxRate = odds;
                  }
                }
                BjlVipModel.instance.winRate[6] = [minRate, maxRate];

                //庄奖励
                minRate = 0;
                maxRate = 0;
                for (var _i4 = 12; _i4 < 19; _i4++) {
                  var _odds = gameInfo.gamePlay[_i4].Odds - 100;
                  if (minRate == 0 || _odds < minRate) {
                    minRate = _odds;
                  }
                  if (maxRate == 0 || maxRate < _odds) {
                    maxRate = _odds;
                  }
                }
                BjlVipModel.instance.winRate[7] = [minRate, maxRate];

                //完美对子
                BjlVipModel.instance.winRate[5] = [gameInfo.gamePlay[19].Odds - 100, gameInfo.gamePlay[20].Odds - 100];
                //任一对子
                BjlVipModel.instance.winRate[8] = gameInfo.gamePlay[21].Odds - 100;
                break;
              }
            case eProto.HD_Leave:
              {
                break;
              }
            case eProto.HD_Bet:
              {
                this.isReqBet = false;
                // 本局未结束时到达的下注回复不能再开一局。
                if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                  return;
                }
                BjlVipModel.instance.gameStatus = eRunStatus.START;
                BjlVipModel.instance.betResult = data.Data;
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
                // 成功码但没带钱包数据：按没收到处理，余额沿用现值。
                // 必须在下面的解锁判断之前返回，结果未知的锁只能由真实余额解除。
                if (!HD_Wallet || !HD_Wallet.wallet) return;
                //获取钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, HD_Wallet.wallet.VndBalance);
                gts.Debug.LogWarr("==BjlVip=getWallet==" + HD_Wallet.wallet.VndBalance);
                if (this.betUnknown) {
                  this.resolveBetUnknown(HD_Wallet.wallet.VndBalance);
                  break;
                }
                if (BjlVipModel.instance.selectRoomIndex != -1 && BjlVipModel.instance.curBalance > -1) {
                  BjlVipModel.instance.endBalance = HD_Wallet.wallet.VndBalance;
                  return;
                }
                BjlVipModel.instance.curBalance = HD_Wallet.wallet.VndBalance;
                break;
              }
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                var _HD_Wallet = data.Wallet;
                //推送钱包
                DataManager.instance.setUserDataForKey(UserKey.GOLD, _HD_Wallet.VndBalance);
                gts.Debug.LogWarr("==BjlVip=pushWallet==" + _HD_Wallet.VndBalance);
                if (this.betUnknown) {
                  this.resolveBetUnknown(_HD_Wallet.VndBalance);
                  emitData = {};
                  break;
                }
                if (BjlVipModel.instance.selectRoomIndex != -1 && BjlVipModel.instance.curBalance > -1) {
                  BjlVipModel.instance.endBalance = _HD_Wallet.VndBalance;
                  return;
                }
                BjlVipModel.instance.curBalance = _HD_Wallet.VndBalance;
                emitData = {};
                break;
              }
            case ConfigManager.instance.protocolHall.login:
              {
                // 断线重连
                Common.closeWait();
                // 重连成功后解除结果未知的锁定。登录回复自带钱包余额（NetManager 也用它更新大厅金额），
                // 直接以它为准，不依赖再发一次钱包请求成功；回复里没有钱包时才主动拉取，由钱包回复解锁。
                if (this.betUnknown) {
                  var wallet = data.Data && data.Data.wallet;
                  if (wallet && typeof wallet.VndBalance == "number") {
                    this.resolveBetUnknown(wallet.VndBalance);
                  } else {
                    NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
                  }
                }
                break;
              }
          }
          this.emitUpdateView(data.cmd, emitData);
        };
        return BjlVipCtrl;
      }(GameDef.BaseCtrl)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipDef.ts", ['cc'], function (exports) {
  var cclegacy, v3, Enum;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
      Enum = module.Enum;
    }],
    execute: function () {
      cclegacy._RF.push({}, "495e3pwmC9BX70Af+0+fa0a", "BjlVipDef", undefined);
      var cBundle = exports('cBundle', "BjlVipGame");
      //1-闲 2-庄 3-和 4-闲对子 5-庄对子 6-完美对子 7-闲奖励 8-庄奖励 9-任一对子
      var eProto = exports('eProto', /*#__PURE__*/function (eProto) {
        eProto["HD_info"] = "bjl3d/HD_info";
        eProto["HD_Bet"] = "bjl3d/HD_Bet";
        eProto["HD_History"] = "bjl3d/HD_History";
        eProto["HD_Leave"] = "bjl3d/HD_Leave";
        eProto["HD_betRecord"] = "bjl3d/HD_betRecord";
        eProto["HD_GetTableList"] = "bjl3d/HD_GetTableList";
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
      var chipListDef = exports('chipListDef', {
        X_100: 100,
        X_1K: 1000,
        X_10K: 10000,
        X_50K: 50000,
        X_100K: 100000,
        X_500K: 500000,
        X_1M: 1000000,
        X_5M: 5000000
      });
      var arrTexture = exports('arrTexture', {
        X_100: "T_chouma_100_Base",
        X_1K: "T_chouma_1K_Base",
        X_10K: "T_chouma_10K_Base",
        X_50K: "T_chouma_50K_Base",
        X_100K: "T_chouma_100K_Base",
        X_500K: "T_chouma_500K_Base",
        X_1M: "T_chouma_1M_Base",
        X_5M: "T_chouma_5M_Base"
      });
      var arrBetList = exports('arrBetList', [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000]);
      var betAreaMap = exports('betAreaMap', {
        Quad_play: 1,
        Quad_bank: 2,
        Quad_draw: 3,
        Quad_playPair: 4,
        Quad_bankPair: 5,
        Quad_perfectPair: 6,
        Quad_playReward: 7,
        Quad_bankReward: 8,
        Quad_anyPair: 9
      });
      var arrBetAreaMap = exports('arrBetAreaMap', ["Quad_play", "Quad_bank", "Quad_draw", "Quad_playPair", "Quad_bankPair", "Quad_perfectPair", "Quad_playReward", "Quad_bankReward", "Quad_anyPair"]);
      var cardTillingOffset = exports('cardTillingOffset', [{
        x: 0.0,
        y: 0.0
      },
      //A
      {
        x: 0.19,
        y: 0.0
      },
      //2
      {
        x: 0.385,
        y: 0.0
      },
      //3
      {
        x: 0.59,
        y: 0.0
      },
      //4

      {
        x: 0.0,
        y: 0.27
      },
      //5
      {
        x: 0.19,
        y: 0.27
      },
      //6
      {
        x: 0.385,
        y: 0.27
      },
      //7
      {
        x: 0.59,
        y: 0.27
      },
      //8
      {
        x: 0.79,
        y: 0.27
      },
      //9

      {
        x: 0.0,
        y: 0.555
      },
      //10
      {
        x: 0.19,
        y: 0.555
      },
      //J
      {
        x: 0.385,
        y: 0.555
      },
      //Q
      {
        x: 0.59,
        y: 0.555
      },
      //K

      {
        x: 0.79,
        y: 0.0
      } //back0.555
      ]);

      var arrCameraInfo = exports('arrCameraInfo', [
      //default
      {
        pos: v3(-7.62, 2.33, 2),
        eulerAngles: v3(-20, -55, 0)
      },
      //desk_0
      {
        pos: v3(-5.07, 1.05, -1.08),
        eulerAngles: v3(-44, 80, 0)
      },
      //desk_1
      {
        pos: v3(-3.81, 1.05, -3.71),
        eulerAngles: v3(-44, 50, 0)
      },
      //desk_2
      {
        pos: v3(-1.44, 1.05, -5.38),
        eulerAngles: v3(-44, 20, 0)
      },
      //desk_3
      {
        pos: v3(1.6, 1.05, -5.38),
        eulerAngles: v3(-44, -13, 0)
      },
      //desk_4
      {
        pos: v3(3.92, 1.05, -3.9),
        eulerAngles: v3(-44, -45, 0)
      },
      //desk_5
      {
        pos: v3(5.37, 1.05, -1.36),
        eulerAngles: v3(-44, -75, 0)
      }]);
      var arrCameraInfo_bet = exports('arrCameraInfo_bet', [
      //default
      {
        pos: v3(-7.62, 2.33, 2),
        eulerAngles: v3(-20, -55, 0)
      },
      //desk_0
      {
        pos: v3(-5.318, 1.377, -1.123),
        eulerAngles: v3(-60, 80, 0)
      },
      //desk_1
      {
        pos: v3(-4.005523, 1.377, -3.875254),
        eulerAngles: v3(-60, 50, 0)
      },
      //desk_2
      {
        pos: v3(-1.523746, 1.377, -5.611523),
        //pos: v3(-1.44, 1.05, -5.38),
        eulerAngles: v3(-60, 20, 0)
      },
      //desk_3
      {
        pos: v3(1.654738, 1.377, -5.625087),
        //pos: v3(1.6, 1.05, -5.38),
        eulerAngles: v3(-60, -13, 0)
      },
      //desk_4
      {
        pos: v3(4.099109, 1.377, -4.080328),
        //v3(3.92, 1.05, -3.9),
        eulerAngles: v3(-60, -45, 0)
      },
      //desk_5
      {
        pos: v3(5.609721, 1.377, -1.42413),
        //pos: v3(5.37, 1.05, -1.36),
        eulerAngles: v3(-60, -75, 0)
      }]);
      var arrDeskInfo = exports('arrDeskInfo', [{
        pos: v3(-5.88, 0.23, -1.58),
        eulerAngles: v3(-90, 0, 0)
      }, {
        pos: v3(-4.3, 0.23, -4.3),
        eulerAngles: v3(-90, -30, 0)
      }, {
        pos: v3(-1.58, 0.23, -5.88),
        eulerAngles: v3(-90, -60, 0)
      }, {
        pos: v3(1.58, 0.23, -5.88),
        eulerAngles: v3(-90, -90, 0)
      }, {
        pos: v3(4.3, 0.23, -4.3),
        eulerAngles: v3(-90, -120, 0)
      }, {
        pos: v3(5.88, 0.23, -1.58),
        eulerAngles: v3(-90, -150, 0)
      }]);
      var arrChipInfo = exports('arrChipInfo', [{
        pos: v3(0.35, -0.26, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, -0.2, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, -0.151958, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.394225, -0.098057, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.40812, -0.044157, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }, {
        pos: v3(0.35, 0.23, 0.22)
        // eulerAngles: v3(0, 0, 0),
      }]);

      // 分层渲染用到的两个渲染层。项目自定义层只用到 1 到 32，这两位没有被占用。
      // LAYER_SCENE_BLIT：铺满屏幕的那张“低分辨率 3D 场景”贴图，只给铺背景的相机看。
      // LAYER_SHARP：需要保持原分辨率的 3D 物体（已进桌那张桌的筹码），只给清晰层相机看。
      var LAYER_SHARP = exports('LAYER_SHARP', 1 << 6);
      var LAYER_SCENE_BLIT = exports('LAYER_SCENE_BLIT', 1 << 7);
      var arrSendCardInfo = exports('arrSendCardInfo', [
      // pos: v3(0.688, 0.25, -0.253),
      // pos: v3(0.696, 0.25, -0.255),
      {
        //pos_0
        pos: v3(0.6, 0.237, -0.23),
        eulerAngles: v3(-90, 15, 75),
        scale: v3(0.85, 0.85, 0.85)
      }, {
        //pos_1
        pos: v3(0.542, 0.212, -0.214),
        eulerAngles: v3(-90, 15, 0),
        scale: v3(0.85, 0.85, 0.85)
      }, {
        //player_0
        pos: v3(-0.325, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      },
      // 庄家前两张与闲家一样从左到右摆：先发、先翻的第一张在左边。
      {
        //banker_0
        pos: v3(0.233, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //player_1
        pos: v3(-0.218, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //banker_1
        pos: v3(0.34, 0.212, -0.095),
        eulerAngles: v3(-90, 0, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //player_2
        pos: v3(-0.453, 0.212, -0.075),
        eulerAngles: v3(-90, 90, 0),
        scale: v3(1.5, 1.5, 1.5)
      }, {
        //banker_2
        pos: v3(0.468, 0.212, -0.075),
        eulerAngles: v3(-90, -90, 0),
        scale: v3(1.5, 1.5, 1.5)
      }]);
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
        eEvent["onUpdateRecordList"] = "onUpdateRecordList";
        eEvent["onGameStart"] = "onGameStart";
        eEvent["onFlipCard"] = "onFlipCard";
        eEvent["onShowResult"] = "onShowResult";
        eEvent["onGameEnd"] = "onGameEnd";
        eEvent["onUpdateGold"] = "onUpdateGold";
        eEvent["onBetClick"] = "onBetClick";
        eEvent["onTestClick"] = "onTestClick";
        eEvent["onWaitCameraCruise"] = "onWaitCameraCruise";
        eEvent["onStopCameraCruise"] = "onStopCameraCruise";
        eEvent["onBetAbort"] = "onBetAbort";
        eEvent["onMouseMoveIn"] = "onMouseMoveIn";
        eEvent["onMouseMoveOut"] = "onMouseMoveOut";
        eEvent["onMouseDown"] = "onMouseDown";
        eEvent["onMouseClick"] = "onMouseClick";
        eEvent["onSelectRoom"] = "onSelectRoom";
        eEvent["onExitRoom"] = "onExitRoom";
        eEvent["onReturnBet"] = "onReturnBet";
        eEvent["onBtnClick"] = "onBtnClick";
        eEvent["onBtnStatusUpdate"] = "onBtnStatusUpdate";
        eEvent["RESULT"] = "onRESULT";
        eEvent["HISTORY"] = "onHISTORY";
        eEvent["onBetRateUpdate"] = "onBetRateUpdate";
        eEvent["onSharpLayer"] = "onSharpLayer";
        eEvent["onDeskWarm"] = "onDeskWarm";
        eEvent["onCameraAway"] = "onCameraAway";
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
        Win: "sound/Win",
        betTip: "sound/betTip",
        VS: "sound/VS",
        CoinsBoom: "sound/CoinsBoom",
        Result: "sound/Result",
        Card: "sound/Card"
      });

      /**排行榜 */

      /**聊天信息 */

      /**钱包信息 */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipGame", ['./label3D.ts', './BjlVipCtrl.ts', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVipScene.ts', './BjlVipUtils.ts', './BjlVipBtnCheck.ts', './BjlVipCamera.ts', './BjlVipGameView.ts', './BjlVipHallView.ts', './BjlVipViewCtrl.ts', './BjlVip_deskArea.ts', './BjlVipHallPath.ts', './BjlVipRoadItem.ts', './BjlVipSwitch.ts', './BjlVipSwitchItem.ts', './BjlVipUIPlane.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/BjlVipGameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVipCtrl.ts', './BjlVipUtils.ts', './GameDef.ts', './GUtil.ts', './NetManager.ts', './ConfigManager.ts', './EventManager.ts', './Common.ts', './ViewManager.ts', './DataManager.ts', './I18n.ts', './GameRecordLayer.ts', './BjlVipHallPath.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, v3, Node, Label, Button, SpriteFrame, director, Camera, Tween, find, UITransform, tween, instantiate, UIOpacity, Sprite, ParticleUtils, Vec3, eEvent, eRunStatus, arrCameraInfo_bet, arrCameraInfo, eSound, chipListDef, eProto, betAreaMap, BjlVipModel, BjlVipCtrl, BjlVipUtils, GameDef, GUtil, NetManager, ConfigManager, EventManager, Common, ViewManager, DataManager, UserKey, i18n, GameRecordLayer, BjlVipHallPath;
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
      Button = module.Button;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
      Camera = module.Camera;
      Tween = module.Tween;
      find = module.find;
      UITransform = module.UITransform;
      tween = module.tween;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      ParticleUtils = module.ParticleUtils;
      Vec3 = module.Vec3;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      arrCameraInfo_bet = module.arrCameraInfo_bet;
      arrCameraInfo = module.arrCameraInfo;
      eSound = module.eSound;
      chipListDef = module.chipListDef;
      eProto = module.eProto;
      betAreaMap = module.betAreaMap;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
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
      GameRecordLayer = module.default;
    }, function (module) {
      BjlVipHallPath = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;
      cclegacy._RF.push({}, "73b7fbEhWNHS759bUQo0H1s", "BjlVipGameView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 界面创建后隔这么久（秒）预激活结果面板。预激活本身会造成一个长帧（实测低端机约 135 毫秒），
      // 所以要放在相机刚到位、玩家还没开始操作的时候；实测放到 5 秒后会正好卡在玩家摆筹码的过程中。
      var RESULT_WARM_DELAY = 0.3;
      // 预激活时结果面板保持显示的时长（秒）：粒子要先发射出来才会被画到。
      var RESULT_WARM_TIME = 0.2;
      // 左上角菜单里四个按钮（退出、帮助、记录、设置）的点击范围，设计分辨率下的像素。
      // 原来是 80x80，在 20:9 的手机上只有约 4 毫米见方；点偏一点就落到背景上，而点背景会把菜单收起来，
      // 表现为“按钮不灵敏”。宽度取按钮间距（相邻按钮的范围正好相接），高度向上延伸到接近屏幕上沿。
      var MENU_BUTTON_HIT_WIDTH = 100;
      var MENU_BUTTON_HIT_HEIGHT = 150;
      // 预激活时把结果面板横向移出屏幕的距离（设计分辨率下的像素，远大于任何屏幕宽度）。
      var RESULT_WARM_OFFSET = 6000;

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
        runStart: {
          position: v3(-0.898, 1.431, 0.61),
          rotation: v3(-30, 0)
        }
      };
      var cameraCruise = [{
        position: v3(-4.7, 1.75, 1.7),
        rotation: v3(-20, 20, 0)
      }, {
        position: v3(0, 1.75, -2),
        rotation: v3(-20, 0, 0)
      }, {
        position: v3(4.7, 1.75, 1.7),
        rotation: v3(0, -20, 0)
      }];
      var BjlVipGameView = exports('default', (_dec = ccclass("BjlVipGameView"), _dec2 = menu("game/BjlVipGame/BjlVipGameView"), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(BjlVipHallPath), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Button), _dec13 = property(Button), _dec14 = property(Button), _dec15 = property(Button), _dec16 = property(SpriteFrame), _dec17 = property(Node), _dec18 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BjlVipGameView, _GameDef$BaseView);
        function BjlVipGameView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseView.call.apply(_GameDef$BaseView, [this].concat(args)) || this;
          _this.mainCamera = null;
          _initializerDefineProperty(_this, "selfHead", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfName", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "selfGold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "addScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Sprite_betTip", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "comBjlVipHallPath", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btns", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_resultPoint", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_result", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_revocation", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_start", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_betAgain", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btn_double", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrResultSpr", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betInfo", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_betRate", _descriptor16, _assertThisInitialized(_this));
          // 预激活期间结果面板原来的位置；非空表示正在预激活。
          _this._resultWarmPos = null;
          /** 注单发出后镜头已先行飞向发牌机位、开局回复尚未到达。 */
          _this.betCameraEarly = false;
          _this.playerPoint = 0;
          _this.bankerPoint = 0;
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
          //     this.mainCamera.node.position = v3(x, this.mainCamera.node.position.y, z);
          //     this.mainCamera.node.lookAt(v3(0, 0.9, 0.4), v3(0, 1, 0));
          // }
          _this.isCameraCruise = false;
          return _this;
        }
        var _proto = BjlVipGameView.prototype;
        // createBetList = [];
        // _chipPool: NodePool;
        // _chip: chip;
        // _selectChip: Node = null;
        //#endregion chipList
        ////////////////////////////////////////////////////////////////////////
        //#region baseInterface
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BjlVipCtrl.instance);
          this.mainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.on(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.on(eEvent.onFlipCard, this.onFlipCard, this);
          EventManager.instance.on(eEvent.onShowResult, this.onShowResult, this);
          EventManager.instance.on(eEvent.onBtnStatusUpdate, this.onBtnStatusUpdate, this);
          EventManager.instance.on(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.on(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
          EventManager.instance.on(eEvent.onBetAbort, this.abortBetCamera, this);
        };
        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线

          EventManager.instance.off(eEvent.onUpdateGold, this.updateGold, this);
          EventManager.instance.off(eEvent.onFlipCard, this.onFlipCard, this);
          EventManager.instance.off(eEvent.onShowResult, this.onShowResult, this);
          EventManager.instance.off(eEvent.onBtnStatusUpdate, this.onBtnStatusUpdate, this);
          EventManager.instance.off(eEvent.onWaitCameraCruise, this.onWaitCameraCruise, this);
          EventManager.instance.off(eEvent.onStopCameraCruise, this.onStopCameraCruise, this);
          EventManager.instance.off(eEvent.onBetAbort, this.abortBetCamera, this);
          BjlVipModel.instance.clearGameData();
          // 离桌后旧的下注回调不能再改状态；结果未知的锁定也随之解除（否则玩家会被困在下注界面之外仍无法下注）。
          BjlVipCtrl.instance.resetBetState();
          Tween.stopAllByTarget(this.mainCamera.node);
          this.betCameraEarly = false;
        };
        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
        }
        //#endregion baseInterface
        ////////////////////////////////////////////////////////////////////////////////
        ;

        _proto.start = function start() {
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
            //     if (BjlVipModel.instance.isAuto && BjlVipCtrl.instance.isReqBet) {
            //         BjlVipCtrl.instance.reqBet();
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
          // 与下注判断、updateGold 用同一个余额，避免进桌先显示平台缓存、第一次操作后跳成另一个数；
          // 余额仍未知(-1)时才退回平台缓存。
          var balance = BjlVipModel.instance.curBalance;
          var gold = balance > -1 ? balance : DataManager.instance.getUserDataForKey(UserKey.GOLD);
          this.selfGold.string = Common.numFormat(gold);
        };
        _proto.initUIView = function initUIView() {
          this.initSelfInfo();

          // NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_info, {});
          // NetManager.instance.sendOnlineData(BjlVipDef.eProto.HD_History, {
          //     size: 100,
          // });

          this.comBjlVipHallPath.updatePath();
          this.doCameraCruise();
          this.showStartBetTip();
          for (var i = 0; i < this.Node_betRate.children.length; i++) {
            var Label_rate = this.Node_betRate.children[i];
            switch (i) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 8:
                {
                  var winRate = BjlVipUtils.instance.numberFormat(BjlVipModel.instance.winRate[i] / 100, 2);
                  Label_rate.getComponent(Label).string = winRate + ":1";
                  break;
                }
              case 5:
              case 6:
              case 7:
                {
                  var arrRate = BjlVipModel.instance.winRate[i];
                  var minRate = BjlVipUtils.instance.numberFormat(arrRate[0] / 100, 2);
                  var maxRate = BjlVipUtils.instance.numberFormat(arrRate[1] / 100, 2);
                  Label_rate.getComponent(Label).string = minRate + "-" + maxRate + ":1";
                  break;
                }
            }
          }
          // 赔率文字由单独的相机渲染到纹理后贴在桌面上，该相机只在内容变化时工作，写完需要通知一次。
          EventManager.instance.emit(eEvent.onBetRateUpdate);
          this.scheduleOnce(this.warmResultPanel, RESULT_WARM_DELAY);
          this.enlargeMenuHitArea();
        }

        /**
         * 放大菜单按钮的点击范围，外观不变。
         * 菜单是公共预制体（多个游戏共用），这里只调整本界面里这一份实例：按钮节点自身没有图片（图标在子节点上），
         * 所在容器的自动排版是关闭的，改按钮节点的尺寸只影响点击判定。
         */;
        _proto.enlargeMenuHitArea = function enlargeMenuHitArea() {
          var buttons = find("Node_menu/node_action/buttons", this.node);
          if (!buttons) return;
          for (var _i = 0, _arr = ["btn_exit", "btn_help", "btn_records", "btn_settings"]; _i < _arr.length; _i++) {
            var name = _arr[_i];
            var button = buttons.getChildByName(name);
            var transform = button && button.getComponent(UITransform);
            if (transform) transform.setContentSize(MENU_BUTTON_HIT_WIDTH, MENU_BUTTON_HIT_HEIGHT);
          }
        };
        /**
         * 进桌后把结果面板和其中的赢钱特效预激活一次。
         * 两者平时是隐藏的，第一次显示时要初始化界面和粒子，这类粒子第一次被画出来时还有一次性的开销；
         * 实测低端机上进桌后第一次赢钱时会因此出现一个 85 到 108 毫秒的长帧。
         * 必须真的画出来才有效，所以把面板临时移到屏幕外显示一小段时间：界面节点不按屏幕范围剔除，
         * 移出去之后仍然会被绘制（实测绘制次数照常增加），但玩家看不到。
         */
        _proto.warmResultPanel = function warmResultPanel() {
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE || this.Node_result.active) return;
          var gold_boom = this.Node_result.getChildByName("gold_boom");
          if (!gold_boom) return;
          var pos = this.Node_result.position;
          this._resultWarmPos = pos.clone();
          this.Node_result.setPosition(pos.x + RESULT_WARM_OFFSET, pos.y, pos.z);
          this.Node_result.active = true;
          gold_boom.active = true;
          this.scheduleOnce(this.endResultWarm, RESULT_WARM_TIME);
        }

        // 结束结果面板的预激活：先隐藏再放回原位，保证它不会在屏幕上露出来。没有在预激活时调用无副作用。
        ;

        _proto.endResultWarm = function endResultWarm() {
          this.unschedule(this.warmResultPanel);
          this.unschedule(this.endResultWarm);
          if (!this._resultWarmPos) return;
          var gold_boom = this.Node_result.getChildByName("gold_boom");
          if (gold_boom) gold_boom.active = false;
          this.Node_result.active = false;
          this.Node_result.setPosition(this._resultWarmPos);
          this._resultWarmPos = null;
        };
        _proto.flyToDealPose = function flyToDealPose() {
          var cameraInfoBet = arrCameraInfo_bet[BjlVipModel.instance.selectRoomIndex + 1];
          tween(this.mainCamera.node).to(1.5, {
            position: cameraInfoBet.pos,
            eulerAngles: cameraInfoBet.eulerAngles
          }, {
            easing: "cubicOut"
          })
          // .call(() => {
          //     EventManager.instance.emit(BjlVipDef.eEvent.onGameStart);
          // })
          .start();
        }

        /**
         * 注单已发出：不等回复，镜头先飞向发牌机位，避免点击后画面静止一次请求往返的时间。
         * 只动镜头；路单、按钮栏和发牌都要等开局回复（doStartGame），被拒或结果未知时由 abortBetCamera 退回。
         * reqBet 返回后仍在等待才算真的发出：未连接或发送抛错已在 reqBet 内收口，镜头不能为它先动。
         */;
        _proto.startBetCamera = function startBetCamera() {
          if (!BjlVipCtrl.instance.isReqBet || this.betCameraEarly) return;
          this.betCameraEarly = true;
          // 各区下注金额是按本桌下注机位摆放的界面文字，镜头一离开就对不上（巡航离桌时同样先隐藏）。
          // 这里只隐藏不清空：开局后由 doStartGame 清空，被拒则在镜头回位后原样显示。
          this.Node_betInfo.active = false;
          // 与原来的开局流程一致，不停镜头上已有的 tween：桌面有注单时巡航早已停止（下注时 onStopCameraCruise）。
          this.flyToDealPose();
        }

        /** 已提交的注单不会开局：先行的镜头退回本桌下注机位。下注等待由 BjlVipCtrl 决定，这里不改。 */;
        _proto.abortBetCamera = function abortBetCamera() {
          var _this2 = this;
          if (!this.betCameraEarly) return;
          this.betCameraEarly = false;
          var cameraInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
          Tween.stopAllByTarget(this.mainCamera.node);
          tween(this.mainCamera.node).to(1.0, {
            position: cameraInfo.pos,
            eulerAngles: cameraInfo.eulerAngles
          }, {
            easing: "cubicOut"
          }).call(function () {
            // 回到下注机位后金额文字才对得上；结果未知的注单随后被钱包解锁撤下时会再刷新。
            _this2.Node_betInfo.active = BjlVipModel.instance.curTotalBet > 0;
          }).start();
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
          // 局中或下注回复未到时不允许退桌（BjlVipViewCtrl.onExitRoom 同样拦截）；
          // 先拦截再发 HD_Leave，否则服务端已离桌而界面仍停在桌内。
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE || BjlVipCtrl.instance.isReqBet) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          BjlVipCtrl.instance.reqExit();
          EventManager.instance.emit(eEvent.onExitRoom);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("bjl3d");
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("bjl3d", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //////////////////////////////////////////////////////////
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          var _this3 = this;
          switch (event.target.name) {
            case "btn_betAgain":
            case "btn_revocation":
            case "btn_double":
              {
                event.target.getComponent(Button).interactable = false;
                BjlVipModel.instance.getOrderList();

                //撤销//上次下注//双倍
                EventManager.instance.emit(eEvent.onBtnClick, event.target.name);
                break;
              }
            case "head":
              {
                BjlVipModel.instance.isAuto = !BjlVipModel.instance.isAuto;
                break;
              }
            case "btn_start":
              {
                this.btn_start.interactable = false;
                //start run
                tween(event.target).delay(1).call(function () {
                  _this3.btn_start.interactable = true;
                }).start();
                BjlVipModel.instance.getOrderList();
                if (BjlVipCtrl.instance.reqBet(this.getBetInfo())) {
                  BjlVipUtils.instance.playSound(eSound.Begin);
                  this.startBetCamera();
                }
                break;
              }
          }
        };
        _proto.getBetInfo = function getBetInfo() {
          /////////
          BjlVipModel.instance.betChipInfo = {};
          /////
          BjlVipModel.instance.betInfo = {};
          var areaKeys = Object.keys(BjlVipModel.instance.betAreaList);
          for (var _i2 = 0, _areaKeys = areaKeys; _i2 < _areaKeys.length; _i2++) {
            var areaKey = _areaKeys[_i2];
            var totalAmount = 0;
            var betAreaList = BjlVipModel.instance.betAreaList[areaKey];
            for (var _iterator = _createForOfIteratorHelperLoose(betAreaList), _step; !(_step = _iterator()).done;) {
              var chipNode = _step.value;
              totalAmount += chipListDef[chipNode.name];
            }
            if (totalAmount == 0) {
              continue;
            }
            var arrAreaInfo = areaKey.split("#");
            var nodeArea = arrAreaInfo[1];
            var betAreaIndex = betAreaMap[nodeArea];
            BjlVipModel.instance.betInfo["" + betAreaIndex] = "" + totalAmount;
            this.addBetChipInfo(betAreaIndex, betAreaList);
          }
          return BjlVipModel.instance.betInfo;
        };
        _proto.addBetChipInfo = function addBetChipInfo(num, arrNode) {
          BjlVipModel.instance.betChipInfo["" + num] = BjlVipModel.instance.betChipInfo["" + num] || [];
          BjlVipModel.instance.betChipInfo["" + num] = BjlVipModel.instance.betChipInfo["" + num].concat(arrNode);
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
          var _this4 = this;
          return new Promise(function (resolve, reject) {
            _this4.scheduleOnce(function () {
              resolve();
            }, delay);
          });
        };
        _proto.showStartBetTip = function showStartBetTip(delay) {
          if (delay === void 0) {
            delay = 2;
          }
          BjlVipUtils.instance.playSound(eSound.betTip);
          tween(this.Sprite_betTip.getComponent(UIOpacity)).to(0.2, {
            opacity: 255
          }).delay(delay).to(0.2, {
            opacity: 0
          }).start();
        };
        _proto.doShowResult = function doShowResult() {
          var _this5 = this;
          return new Promise(function (resolve, reject) {
            var betResult = BjlVipModel.instance.betResult;
            gts.Debug.Log("==doShowResult==" + JSON.stringify(betResult));
            BjlVipModel.instance.gameStatus = eRunStatus.END;

            //showResult
            _this5.Node_result.active = true;
            var result = betResult.playerPoints > betResult.bankerPoints ? 1 : betResult.playerPoints < betResult.bankerPoints ? 2 : 3;

            //加入记录
            BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history.push("" + result);
            _this5.comBjlVipHallPath.updatePath();
            BjlVipUtils.instance.playSound(eSound.Result);
            var MainForm = find("ing_heidi/MainForm", _this5.Node_result).getComponent(Sprite);
            MainForm.spriteFrame = _this5.arrResultSpr[result - 1];
            var Label_result = find("ing_heidi/MainForm/Label_result", _this5.Node_result).getComponent(Label);
            Label_result.string = result == 1 ? i18n.lang.gameResult.Player : result == 2 ? i18n.lang.gameResult.Banker : i18n.lang.gameResult.Tie;
            var resultTitle = find("ing_heidi/resultTitle", _this5.Node_result);
            var Label_win = find("ing_heidi/Label_win", _this5.Node_result).getComponent(Label);
            resultTitle.active = betResult.prizeAmount > 0;
            Label_win.node.active = betResult.prizeAmount > 0;
            if (betResult.prizeAmount > 0) {
              // let inter = Common.numFormatInt(betResult.prizeAmount / 1000);
              // let digit = BjlVipUtils.instance.numberFormatD(betResult.prizeAmount / 1000, 2.0);

              Label_win.string = Common.ChangeMoneyShow(betResult.prizeAmount, 2);

              // BjlVipUtils.instance.playSound(BjlVipDef.eSound.Win);

              _this5.scheduleOnce(function () {
                var gold_boom = _this5.Node_result.getChildByName("gold_boom");
                gold_boom.active = true;
                ParticleUtils.play(gold_boom.getChildByName("effect"));
                BjlVipUtils.instance.playSound(eSound.CoinsBoom);
              }, 1.0);
            }
            EventManager.instance.emit(eEvent.onUpdateRecordList);
            tween(_this5.comBjlVipHallPath.node).to(0.25, {
              position: v3(0, 0, 0)
            }).start();
            _this5.scheduleOnce(function () {
              var gold_boom = _this5.Node_result.getChildByName("gold_boom");
              ParticleUtils.stop(gold_boom.getChildByName("effect"));
              gold_boom.active = false;
              resolve();
            }, 3);
          });
        };
        _proto.onFlipCard = function onFlipCard(cardIndex, cardNum) {
          cardNum = cardNum >= 10 ? 10 : cardNum;
          this.Node_resultPoint.active = true;
          if (cardIndex % 2 == 0) {
            //闲家
            this.playerPoint = (this.playerPoint + cardNum) % 10;
            var Label_num = find("Sprite_palyer/Label_num", this.Node_resultPoint).getComponent(Label);
            Label_num.string = "" + this.playerPoint;
          } else {
            this.bankerPoint = (this.bankerPoint + cardNum) % 10;
            var _Label_num = find("Sprite_banker/Label_num", this.Node_resultPoint).getComponent(Label);
            _Label_num.string = "" + this.bankerPoint;
          }
        };
        _proto.onBtnStatusUpdate = function onBtnStatusUpdate(btnName) {
          if (btnName === void 0) {
            btnName = "default";
          }
          this.updateBetInfo();
          switch (btnName) {
            case "btn_revocation":
              {
                this.btn_double.interactable = false;
                this.btn_revocation.interactable = false;
                var isLastBet = Object.keys(BjlVipModel.instance.betOrderBack).length > 0;
                this.btn_betAgain.node.active = isLastBet;
                this.btn_betAgain.interactable = isLastBet;
                this.btn_start.node.active = !isLastBet;
                this.btn_start.interactable = false;
                break;
              }
            case "btn_betAgain":
              {
                break;
              }
            case "btn_double":
              {
                break;
              }
            case "btn_start":
              {
                break;
              }
            default:
              {
                var betAreaList = Object.keys(BjlVipModel.instance.betAreaList);
                var isBetDid = betAreaList.length > 0;
                this.btn_double.interactable = isBetDid;
                this.btn_revocation.interactable = isBetDid;
                this.btn_start.node.active = isBetDid;
                this.btn_start.interactable = isBetDid;
                this.btn_betAgain.node.active = false;
                break;
              }
          }
        };
        _proto.doStartGame = function doStartGame() {
          // 这一局自己会显示结果面板，预激活还占着的话面板会停在屏幕外。
          this.endResultWarm();
          if (BjlVipModel.instance.betResult.cutCard != 0) {
            //洗牌
            BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history = [];
            this.comBjlVipHallPath.updatePath();
            EventManager.instance.emit(eEvent.onUpdateRecordList);
          }
          EventManager.instance.emit(eEvent.onGameStart);
          BjlVipModel.instance.betOrderBack = {};
          var betOrderListKeys = Object.keys(BjlVipModel.instance.betOrderList);
          for (var _i3 = 0, _betOrderListKeys = betOrderListKeys; _i3 < _betOrderListKeys.length; _i3++) {
            var key = _betOrderListKeys[_i3];
            BjlVipModel.instance.betOrderBack[key] = BjlVipModel.instance.betOrderList[key].slice();
          }
          gts.Debug.Log("===betOrderList=====" + JSON.stringify(BjlVipModel.instance.betOrderList));
          gts.Debug.Log("===betOrderBack=====" + JSON.stringify(BjlVipModel.instance.betOrderBack));

          // 镜头通常已在注单发出时先行（startBetCamera），这里不重启飞行，否则总时长变长、速度跳变；
          // 没有先行的入口（如迟到的回复）仍从这里起飞，时序与原来一致。
          if (!this.betCameraEarly) this.flyToDealPose();
          this.betCameraEarly = false;
          tween(this.comBjlVipHallPath.node).to(0.25, {
            position: v3(0, 200, 0)
          }).start();
          tween(this.btns).to(0.25, {
            position: v3(0, -200, 0)
          }).start();
          this.updateGold();
          this.btn_double.interactable = false;
          this.btn_revocation.interactable = false;
          this.btn_betAgain.interactable = false;
          this.btn_start.interactable = false;
          this.playerPoint = 0;
          this.bankerPoint = 0;
          var Label_num = find("Sprite_palyer/Label_num", this.Node_resultPoint).getComponent(Label);
          Label_num.string = "" + this.playerPoint;
          Label_num = find("Sprite_banker/Label_num", this.Node_resultPoint).getComponent(Label);
          Label_num.string = "" + this.bankerPoint;
          this.updateBetInfo(false);
        };
        _proto.onShowResult = /*#__PURE__*/function () {
          var _onShowResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this6 = this;
            var cameraInfo, isLastBet;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  cameraInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
                  tween(this.mainCamera.node).to(1.5, {
                    position: cameraInfo.pos,
                    eulerAngles: cameraInfo.eulerAngles
                  }, {
                    easing: "cubicOut"
                  }).call(function () {
                    _this6.Node_resultPoint.active = false;
                  }).start();
                  _context.next = 4;
                  return this.doShowResult();
                case 4:
                  _context.next = 6;
                  return this.doAwait(0.5);
                case 6:
                  this.Node_result.active = false;
                  BjlVipModel.instance.gameStatus = eRunStatus.NONE;
                  EventManager.instance.emit(eEvent.onGameEnd);
                  isLastBet = Object.keys(BjlVipModel.instance.betOrderBack).length > 0;
                  this.btn_start.node.active = !isLastBet;
                  this.btn_betAgain.node.active = isLastBet;
                  this.btn_betAgain.interactable = isLastBet;
                  this.btn_start.interactable = false;
                  tween(this.btns).to(0.25, {
                    position: v3(0, 0, 0)
                  }).start();
                  if (BjlVipModel.instance.isAuto) {
                    this.scheduleOnce(function () {
                      //上次下注
                      EventManager.instance.emit(eEvent.onBtnClick, "btn_betAgain");
                    }, 1);
                    this.scheduleOnce(function () {
                      //start run
                      if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
                        Common.showTip(i18n.lang["10005"]);
                        return;
                      }

                      // 续押失败（余额不足、超限等）时桌面没有注单，不能向服务端提交空注单；同时退出自动模式。
                      var betInfo = _this6.getBetInfo();
                      if (Object.keys(betInfo).length == 0) {
                        BjlVipModel.instance.isAuto = false;
                        return;
                      }
                      // 自动续押没有经过按钮点击（那里会整理注单顺序），提交前在这里补上。
                      // 否则开局时用空的 betOrderList 覆盖 betOrderBack，下一局就没有可重复的注单，自动模式只跑一局就退出。
                      BjlVipModel.instance.getOrderList();
                      if (BjlVipCtrl.instance.reqBet(betInfo)) {
                        BjlVipUtils.instance.playSound(eSound.Begin);
                        _this6.startBetCamera();
                      }
                    }, 1.5);
                  } else {
                    this.showStartBetTip();
                  }
                case 16:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onShowResult() {
            return _onShowResult.apply(this, arguments);
          }
          return onShowResult;
        }();
        _proto.updateBetInfo = function updateBetInfo(isShow) {
          if (isShow === void 0) {
            isShow = true;
          }
          this.Node_betInfo.active = isShow;
          if (!isShow) {
            for (var _iterator2 = _createForOfIteratorHelperLoose(this.Node_betInfo.children), _step2; !(_step2 = _iterator2()).done;) {
              var childNode = _step2.value;
              childNode.getChildByName("Label_bet").getComponent(Label).string = "";
              childNode.active = false;
            }
            return;
          }
          var keys = Object.keys(betAreaMap);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var betAmount = BjlVipModel.instance.areaTotalBet[key] || 0;
            var betNode = this.Node_betInfo.getChildByName("bet_" + i);
            betNode.active = betAmount > 0;
            if (betNode.active) {
              var Label_bet = betNode.getChildByName("Label_bet");

              // let inter = Common.numFormatInt(betAmount / 1000);
              // let digit = BjlVipUtils.instance.numberFormatD(betAmount / 1000, 2);

              Label_bet.getComponent(Label).string = Common.ChangeMoneyShow(betAmount, 2);
            }
          }
        };
        _proto.updateGold = function updateGold() {
          var strGold = Common.numFormat(BjlVipModel.instance.curBalance);
          if (strGold != this.selfGold.string) {
            BjlVipUtils.instance.updateLabel(this.selfGold, strGold);
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
                this.doStartGame();
                break;
              }
            case eProto.Record:
              {
                // this.updateGold();
                break;
              }
            case eProto.HD_History:
              {
                // this.comBjlVipRecord.updateRecord();
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
        _proto.doCameraCruise = function doCameraCruise(isShow, reWait) {
          var _this7 = this;
          if (isShow === void 0) {
            isShow = true;
          }
          if (reWait === void 0) {
            reWait = false;
          }
          var delay = reWait ? 32 : 30;
          Tween.stopAllByTarget(this.mainCamera.node);
          if (!isShow) {
            //返回桌面
            this.isCameraCruise = false;
            var cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var startPos = this.mainCamera.node.position;
            var destPos = cameraDestInfo.pos;
            var duration = Vec3.distance(startPos, destPos) / 1.25;
            tween(this.mainCamera.node).to(0.25, {
              position: destPos,
              eulerAngles: cameraDestInfo.eulerAngles
            }, {
              easing: "cubicOut"
            }).call(function () {
              _this7.Node_betInfo.active = BjlVipModel.instance.curTotalBet > 0;
              EventManager.instance.emit(eEvent.onCameraAway, false);
            }).start();
            if (!reWait) {
              return;
            }
          }
          this.isCameraCruise = true;

          //拉到中间
          var destPos_0 = v3(0, 1.0, 0);
          tween(this.mainCamera.node).delay(delay).call(function () {
            _this7.Node_betInfo.active = false;
            // 相机要离开本桌的机位去环视房间了。桌面据此把筹码移出清晰层（清晰层不受场景遮挡，
            // 从别的角度看会画到椅子和其他桌子前面）；回到机位后再放回去。
            EventManager.instance.emit(eEvent.onCameraAway, true);
          }).to(15, {
            position: destPos_0,
            eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
          }, {
            easing: "cubicIn"
          }).call(function () {
            var _tween;
            var arrTween = [];
            for (var _i4 = 0, _cameraCruise = cameraCruise; _i4 < _cameraCruise.length; _i4++) {
              var info = _cameraCruise[_i4];
              arrTween.push(tween(_this7.mainCamera.node).to(20, {
                position: info.position,
                eulerAngles: info.rotation
              }, {
                easing: "quadInOut"
              }).delay(1));
            }
            (_tween = tween(_this7.mainCamera.node)).sequence.apply(_tween, arrTween).repeatForever().start();
          }).start();
        };
        return BjlVipGameView;
      }(GameDef.BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selfHead", [_dec3], {
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "comBjlVipHallPath", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btns", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_resultPoint", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "Node_result", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "btn_revocation", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "btn_start", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "btn_betAgain", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "btn_double", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "arrResultSpr", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "Node_betInfo", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "Node_betRate", [_dec18], {
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

System.register("chunks:///_virtual/BjlVipHallPath.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipRoadItem.ts', './EventManager.ts', './BjlVipModel.ts', './BjlVipDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Node, SpriteFrame, Label, Prefab, isValid, Tween, instantiate, Sprite, tween, v3, v2, Component, BjlVipRoadItem, EventManager, BjlVipModel, eEvent;
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
      isValid = module.isValid;
      Tween = module.Tween;
      instantiate = module.instantiate;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      v2 = module.v2;
      Component = module.Component;
    }, function (module) {
      BjlVipRoadItem = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      eEvent = module.eEvent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "c07d0I5KFBMIL7OD86+4I7I", "BjlVipHallPath", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipHallPath = exports('default', (_dec = ccclass("BjlVipHallPath"), _dec2 = menu("game/BjlVipGame/BjlVipHallPath"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Prefab), _dec11 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipHallPath, _Component);
        function BjlVipHallPath() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "node_path1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "node_path2", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "balls", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_strTag", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title1", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_title3", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_item", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemNum", _descriptor9, _assertThisInitialized(_this));
          _this._curPath1 = void 0;
          _this._curPath2 = void 0;
          // 路单格子按绘制顺序复用，不再每局销毁重建；节点始终挂在各自容器下，随容器销毁。
          // 数量上界：珠盘路 36 个，大路为可见的 18 列。
          _this._path1Items = [];
          _this._path2Items = [];
          // 当前带呼吸动画的最新一格；重绘前必须先停掉并复位缩放，
          // 否则节点被复用后 repeatForever 仍在跑，旧的一格会继续缩放。
          _this._pulse1 = null;
          _this._pulse2 = null;
          return _this;
        }
        var _proto = BjlVipHallPath.prototype;
        _proto.stopPulse = function stopPulse(node) {
          if (isValid(node)) {
            Tween.stopAllByTarget(node);
            node.setScale(1, 1, 1);
          }
        }

        // 历史变短（如洗牌）时隐藏多余格子，保留以便复用；隐藏的节点不参与 Layout 排版。
        ;

        _proto.hideUnused = function hideUnused(items, used) {
          for (var i = used; i < items.length; i++) {
            if (isValid(items[i])) items[i].active = false;
          }
        };
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.RESULT, this.addPath, this);
          EventManager.instance.on(eEvent.HISTORY, this.updatePath, this);
        };
        _proto.start = function start() {
          this.updatePath();
        };
        _proto.addPath = function addPath() {
          var history = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history;
          if (this._curPath1.length == 36) {
            this._curPath1 = this._curPath1.slice(0, 30);
          }
          this._curPath1.unshift(history[0]);
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.updatePath = function updatePath() {
          // this._curData = (DxVipModel.instance.gameRecord && DxVipModel.instance.gameRecord.slice()) || [];
          // if (this._curData.length > 100) {
          //     this._curData = this._curData.slice(0, 100);
          // }
          var history = BjlVipModel.instance.tableList[BjlVipModel.instance.selectRoomIndex].history;
          this._curPath1 = history.slice();
          this._curPath2 = history.slice();
          if (this._curPath1 && this._curPath1.length > 36) {
            this._curPath1 = this._curPath1.slice(this._curPath1.length - 36);
          }
          // if (this._curPath2 && this._curPath2.length > 36) {
          //     this._curPath2 = this._curPath2.slice(this._curPath2.length - 36);
          // }

          this._curPath1 = this._curPath1.reverse();
          this.drawPathLayer1();
          this.drawPathLayer2();
        };
        _proto.drawPathLayer1 = function drawPathLayer1() {
          if (!this._curPath1) return;
          this.stopPulse(this._pulse1);
          this._pulse1 = null;
          var used = 0;
          for (var i = this._curPath1.length - 1; i >= 0; i--) {
            var num = parseInt(this._curPath1[i]) - 1;
            var itemNum = this._path1Items[used];
            if (!isValid(itemNum)) {
              itemNum = instantiate(this.itemNum);
              this.node_path1.addChild(itemNum);
              this._path1Items[used] = itemNum;
            }
            used++;
            itemNum.active = true;
            var sprite = itemNum.getComponent(Sprite);
            sprite.spriteFrame = this.balls[num];
            if (i == 0) {
              this._pulse1 = itemNum;
              tween(itemNum).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          this.hideUnused(this._path1Items, used);
          var countMap = {};
          for (var j = this._curPath2.length - 1; j >= 0; j--) {
            var _num = parseInt(this._curPath2[j]) - 1;
            if (!countMap[_num]) {
              countMap[_num] = 0;
            }
            countMap[_num]++;
          }
          var arrTag = ["A", "B", "C", "D", "E", "F"];
          this.Label_strTag.string = "" + arrTag[BjlVipModel.instance.selectRoomIndex];
          this.txt_title1.string = countMap[1] || 0 + "";
          this.txt_title2.string = countMap[0] || 0 + "";
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
          if (!this._curPath2 || this._curPath2.length == 0) {
            // 洗牌后历史为空：清掉上一靴的大路，与珠盘路保持一致。
            this.stopPulse(this._pulse2);
            this._pulse2 = null;
            this.hideUnused(this._path2Items, 0);
            return;
          }
          var spaceX = 26.06;
          var spaceY = 26.9;
          var startX = 10.5;
          var startY = -10.5;
          var max_len = 18;
          var bigRoadDic = [];
          var isFirstTie = [];
          var info = this.parseBigRoadDatas(this._curPath2, bigRoadDic, isFirstTie);
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
          this.stopPulse(this._pulse2);
          this._pulse2 = null;
          var used = 0;
          for (var _i = 0; _i < info.length; _i++) {
            if (info[_i].x < startIndex) continue;
            var node = this._path2Items[used];
            if (!isValid(node)) {
              node = instantiate(this.prefab_item);
              this.node_path2.addChild(node);
              this._path2Items[used] = node;
            }
            used++;
            node.active = true;
            node.setPosition(startX + (info[_i].x - startIndex) * spaceX, startY - info[_i].y * spaceY);
            node.getComponent(BjlVipRoadItem).setData(info[_i]);
            info[_i].bigType;
            if (_i == info.length - 1) {
              this._pulse2 = node;
              tween(node).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          this.hideUnused(this._path2Items, used);
        };
        _proto.onDisable = function onDisable() {
          // 本组件随 GameView 预制体每次进桌新建，不注销会让 EventManager 一直持有已销毁的实例。
          EventManager.instance.off(eEvent.RESULT, this.addPath, this);
          EventManager.instance.off(eEvent.HISTORY, this.updatePath, this);
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
        return BjlVipHallPath;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_strTag", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "txt_title1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "txt_title2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "txt_title3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "prefab_item", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemNum", [_dec11], {
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

System.register("chunks:///_virtual/BjlVipHallView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './GUtil.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BjlVipCtrl.ts', './BjlVipDef.ts', './Common.ts', './BjlVipUtils.ts', './GameRecordLayer.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, instantiate, GameDef, GUtil, ConfigManager, EventManager, NetManager, ViewManager, BjlVipCtrl, cBundle, eProto, eEvent, Common, BjlVipUtils, GameRecordLayer;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      GUtil = module.default;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      cBundle = module.cBundle;
      eProto = module.eProto;
      eEvent = module.eEvent;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      GameRecordLayer = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class;
      cclegacy._RF.push({}, "f60672BTZZOCICb7UDXKaRq", "BjlVipHallView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      // // @inspector("packages://autoproperty/inspector.js")
      var BjlVipHallView = exports('default', (_dec = ccclass("BjlVipHallView"), _dec2 = menu("game/BjlVipGame/BjlVipHallView"), _dec(_class = _dec2(_class = /*#__PURE__*/function (_GameDef$BaseView) {
        _inheritsLoose(BjlVipHallView, _GameDef$BaseView);
        function BjlVipHallView() {
          return _GameDef$BaseView.apply(this, arguments) || this;
        }
        var _proto = BjlVipHallView.prototype;
        //    // @property(cc.Node)
        //    // Node_gameLogo: cc.Node = null;
        _proto.onLoad = function onLoad() {
          _GameDef$BaseView.prototype.onLoad.call(this, BjlVipCtrl.instance);
          NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
          BjlVipCtrl.instance.reqRoomList();
          BjlVipCtrl.instance.reqHistory();
        };
        _proto.onEnable = function onEnable() {
          _GameDef$BaseView.prototype.onEnable.call(this);

          //        //传输事件
          EventManager.instance.on(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.on(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDisable = function onDisable() {
          _GameDef$BaseView.prototype.onDisable.call(this);

          //        //传输事件
          EventManager.instance.off(ConfigManager.instance.eventTransform.disConnect, this.disconnect, this); //断线
          EventManager.instance.off(ConfigManager.instance.eventTransform.gameShow, this.gameShow, this); //断线
        };

        _proto.onDestroy = function onDestroy() {
          _GameDef$BaseView.prototype.onDestroy.call(this);
          this.unscheduleAllCallbacks();
        };
        _proto.start = function start() {
          // //        //玩家信息
          // this.Label_gold.string = "$" + Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)));
          // Common.nickNameFormatL(this.Label_name, DataManager.instance.getUserDataForKey(UserKey.NICKNAME));
          // let headiconName = DataManager.instance.getUserDataForKey(UserKey.AVATAR);
          // //        //头像
          // Common.getHead(headiconName, this.head.node);
          // let grade = DataManager.instance.getUserDataForKey(UserKey.GradeCode);
          // if (grade) {
          //     let Sprite_level = this.Label_gold.node.parent.getChildByName("Sprite_level");
          //     Common.setGradeCode(Sprite_level, parseInt(grade));
          // }
        }
        //    // update (dt) {}
        ;

        _proto.onBtnClick = function onBtnClick(event, eventData) {
          // // gts.Debug.Log("=onBtnClick=eventData=" + eventData);
          // switch (eventData) {
          //     case "BackHall": {
          //         Common.returnToHall(this, BjlVipDef.cBundle);
          //         break;
          //     }
          // }
        };
        _proto.disconnect = function disconnect() {
          //        //断线
          Common.showNetTips();
        };
        _proto.gameShow = function gameShow() {
          this.scheduleOnce(function () {
            if (NetManager.instance._connect == true) {
              NetManager.instance.waitServiceSendData(); // 监听推送
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.getWallet, {});
              NetManager.instance.sendOnlineData(ConfigManager.instance.protocolHall.hallInfo, {
                key: ["bannerArray", "lobbyNotice"]
              });
            }
          }, 0.1);
        }
        //////////////////////////////////////
        //按钮事件回调
        ;

        _proto.onClickExit = function onClickExit() {
          console.time("bundle.onLoadHall");
          Common.showWait();
          if (ViewManager.instance.miniLayer) {
            ViewManager.instance.miniLayer.getChildByName("miniGame").angle = 0;
          }

          //退到大厅
          Common.returnToHall(this, cBundle);
        };
        _proto.onClickRand = function onClickRand() {
          GUtil.openRank("bjl3d");
        };
        _proto.onClickRecord = function onClickRecord() {
          Common.loadPopBuddle("prefab/Node_record", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
            viewNode.getComponent(GameRecordLayer).setGameType("bjl3d", 6);
          }, true);
        };
        _proto.onClickSetting = function onClickSetting() {
          // GUtil.openSetting();
          Common.loadPopBuddle("prefab/Node_setting", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        };
        _proto.onClickHelp = function onClickHelp() {
          Common.loadPopBuddle("prefab/Node_help", BjlVipUtils.instance.bundle, function () {}, function (prefab) {
            var viewNode = instantiate(prefab);
            ViewManager.instance.popNodeView(viewNode, true);
          }, true);
        }
        //    ///////////////////////////////
        ;

        _proto.updateView = function updateView(event, data) {
          switch (event) {
            case eProto.HD_GetTableList:
              {
                EventManager.instance.emit(eEvent.onUpdateRecordList);
                break;
              }
            //            //////////////////////////////////
            case ConfigManager.instance.protocolHall.login:
              {
                //                //断线重连
                Common.closeNetTips();
                this.gameShow();
                break;
              }
            case ConfigManager.instance.protocolHall.getWallet:
            case ConfigManager.instance.protocolHall.pushWallet:
              {
                //                //获取钱包//推送钱包
                // this.Label_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD))) + "";
                break;
              }
          }
        };
        return BjlVipHallView;
      }(GameDef.BaseView)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipModel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './BjlVipDef.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, v3, GameDef, eRunStatus;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }, function (module) {
      GameDef = module.GameDef;
    }, function (module) {
      eRunStatus = module.eRunStatus;
    }],
    execute: function () {
      cclegacy._RF.push({}, "75aa17OAXhOdrCYjiq/Fz7E", "BjlVipModel", undefined);
      var BjlVipModel = exports('BjlVipModel', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BjlVipModel, _GameDef$BaseSington);
        function BjlVipModel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.curBalance = -1;
          _this.endBalance = 0;
          _this.isAuto = false;
          _this.isReady = false;
          _this.gameStatus = eRunStatus.NONE;
          _this.tableList = [];
          /**
           * 0-5
           */
          _this.selectRoomIndex = -1;
          _this.selectRoomStatus = 0;
          _this.areaTotalBet = {};
          _this.curTotalBet = 0;
          _this.betAreaList = {};
          // betOrderList: { area: string; chip: string; pos: Vec3 }[] = [];
          // betOrderBack: { area: string; chip: string; pos: Vec3 }[] = [];
          _this.betOrderList = {};
          _this.betOrderBack = {};
          _this.betPosList = {};
          _this.betChipInfo = {};
          _this.winRate = [];
          _this.betInfo = {};
          _this._betResult = null;
          return _this;
        }
        var _proto = BjlVipModel.prototype;
        ////////////////////////////////////////////////////////////
        ////////////////////////////////
        /**
         * 退出房间  清理游戏数据
         */
        _proto.clearGameData = function clearGameData() {
          this.selectRoomIndex = -1;
          this.curTotalBet = 0;
          this.betAreaList = {};
          this.betOrderList = {};
          this.betOrderBack = {};
          this.betChipInfo = {};
          this.betInfo = {};
          this.areaTotalBet = {};
          this.gameStatus = eRunStatus.NONE;
        };
        _proto.getOrderList = function getOrderList() {
          this.betOrderList = {};
          var betAreaListKeys = Object.keys(this.betAreaList);
          for (var _i = 0, _betAreaListKeys = betAreaListKeys; _i < _betAreaListKeys.length; _i++) {
            var area = _betAreaListKeys[_i];
            var arrBetInfo = this.betAreaList[area];
            var areaPos = BjlVipModel.instance.betPosList[area];
            this.betOrderList[area] = [];
            for (var i = 0; i < arrBetInfo.length; i++) {
              var chip = arrBetInfo[i];
              this.betOrderList[area].push({
                chip: chip.name,
                pos: v3(areaPos.x, 0.212 + i * 0.0025, areaPos.z)
              });
            }
          }
        };
        _createClass(BjlVipModel, [{
          key: "betResult",
          get: function get() {
            return this._betResult;
          },
          set: function set(_betResult) {
            this._betResult = _betResult;
          }
        }]);
        return BjlVipModel;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipRoadItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, Label, Node, Component;
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
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6539c7DpGdPJrAx2peEzxHR", "BjlVipRoadItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipRoadItem = exports('default', (_dec = ccclass("BjlVipRoadItem"), _dec2 = menu("game/BjlVipGame/BjlVipRoadItem"), _dec3 = property(Sprite), _dec4 = property(SpriteFrame), _dec5 = property(Label), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipRoadItem, _Component);
        function BjlVipRoadItem() {
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
        var _proto = BjlVipRoadItem.prototype;
        _proto.setData = function setData(data) {
          this.txt_count.string = data.bigTieCount + "";
          this.node_tie.active = data.bigTieCount > 0;
          this.sprite_bg.spriteFrame = this.frame_bgs[parseInt(data.bigType) - 1];
        };
        _proto.onDestroy = function onDestroy() {};
        return BjlVipRoadItem;
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

System.register("chunks:///_virtual/BjlVipScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts', './ConfigManager.ts', './EventManager.ts', './NetManager.ts', './ViewManager.ts', './BjlVipDef.ts', './BjlVipUtils.ts', './Common.ts', './RenderScaleWatcher.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Prefab, Camera, director, Director, isValid, Canvas, RenderTexture, game, UITransform, view, Sprite, SpriteFrame, EffectAsset, Material, Vec4, assetManager, instantiate, UIOpacity, tween, Component, MeshRenderer, AudioManager, ConfigManager, EventManager, NetManager, ViewManager, eEvent, LAYER_SCENE_BLIT, LAYER_SHARP, cBundle, BjlVipUtils, Common, RenderScaleWatcher;
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
      Camera = module.Camera;
      director = module.director;
      Director = module.Director;
      isValid = module.isValid;
      Canvas = module.Canvas;
      RenderTexture = module.RenderTexture;
      game = module.game;
      UITransform = module.UITransform;
      view = module.view;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      EffectAsset = module.EffectAsset;
      Material = module.Material;
      Vec4 = module.Vec4;
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
      MeshRenderer = module.MeshRenderer;
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
      eEvent = module.eEvent;
      LAYER_SCENE_BLIT = module.LAYER_SCENE_BLIT;
      LAYER_SHARP = module.LAYER_SHARP;
      cBundle = module.cBundle;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      RenderScaleWatcher = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4f26ev+yl9Ek55aIhfVmnZb", "BjlVipScene", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      // 赔率相机每次开启后保持渲染的时长（秒）：要覆盖 GameView 0.15 秒的淡入和 Label 生成贴图的那几帧。
      var BET_RATE_RENDER_TIME = 0.5;

      // 下面两张表是场景里铺满屏幕的大模型（路径相对 Node_sceneRoot）。它们用的是 FBX 内嵌的 PBR 材质，
      // 低端 GPU 的帧耗时基本花在这些模型的逐像素着色上；进场时去掉其中对画面没有可见贡献的两项计算。
      // 实测 MT6765/GE8320、0.75 渲染档：选桌大厅 29.5 帧到 38 帧，桌内 33.5 帧到 41.5 帧；
      // 剔除动画像素后与原画面逐像素对比，差异在噪声范围内。
      //
      // 不采样法线贴图的模型。地面和桌子绑定的法线贴图只有 1x1（等于没有）；墙和椅子的法线细节在游戏的机位下看不出来。
      // 美术若给这些模型换上需要体现的法线贴图，要把对应路径移出。
      var SCENE_NO_NORMAL_MAP_MODELS = ["T_baijiale/X_diban", "T_baijiale/Node_desk_0/X_zhuozi", "T_baijiale/Node_desk_1/X_zhuozi", "T_baijiale/Node_desk_2/X_zhuozi", "T_baijiale/Node_desk_3/X_zhuozi", "T_baijiale/Node_desk_4/X_zhuozi", "T_baijiale/Node_desk_5/X_zhuozi", "T_baijiale2/X_qiangbi", "T_baijiale/X_yizi"];
      // 反射探针改为单探针采样的模型。场景里只有一个反射探针，这些模型却配置成“多探针混合”，
      // 每个像素多做一次采样和混合，结果与只采样这一个探针相同。场景以后若增加探针并需要混合，要去掉这项。
      var SCENE_SINGLE_PROBE_MODELS = ["T_baijiale2/X_qiangbi", "T_baijiale/X_diban", "T_baijiale/X_yizi"];
      // 引擎 ReflectionProbeType.BAKED_CUBEMAP：只采样单个烘焙探针。该枚举没有从 cc 模块导出，这里写字面量。
      var REFLECTION_PROBE_BAKED_CUBEMAP = 1;
      var BjlVipScene = exports('default', (_dec = ccclass("BjlVipScene"), _dec2 = menu("game/BjlVipGame/BjlVipScene"), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipScene, _Component);
        function BjlVipScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.isUpdateView = false;
          _initializerDefineProperty(_this, "firstNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_hall", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_game", _descriptor3, _assertThisInitialized(_this));
          _this._node_hall = null;
          _this._node_Game = null;
          // Canvas/Camera_u3d：把 GameView 里 UI_3D 层的赔率文字渲染到 rt_bjlVip，各桌面的赔率面片显示这张纹理。
          _this._betRateCamera = null;
          _this._betRateStopPending = false;
          // 分层渲染的状态：比例小于 1 表示已开启；下面几个对象只在开启期间存在。
          _this._sceneScale = 1;
          _this._sceneTexture = null;
          _this._sceneBlit = null;
          _this._sceneSmoothMaterial = null;
          _this._sceneBlitCamera = null;
          _this._sharpCamera = null;
          _this._mainCamera = null;
          _this._mainVisibility = 0;
          _this._uiCamera = null;
          _this._uiVisibility = 0;
          return _this;
        }
        var _proto = BjlVipScene.prototype;
        /**
         * 让赔率相机重新渲染一小段时间后关闭。
         * 赔率只在进桌时写入一次，相机关闭后纹理保留最后一帧，不需要每帧重画 1920x1080 的纹理。
         * UI_3D 层内容变化的每个时机都必须调用：赔率写入、GameView 移除（需要把纹理清空）、画布尺寸变化。
         */
        _proto.refreshBetRate = function refreshBetRate() {
          if (!this._betRateCamera) {
            var cameraNode = this.node.getChildByName("Camera_u3d");
            this._betRateCamera = cameraNode && cameraNode.getComponent(Camera);
          }
          if (!this._betRateCamera) return;
          this._betRateCamera.enabled = true;
          this._betRateStopPending = false;
          this.unschedule(this.stopBetRateCamera);
          this.scheduleOnce(this.stopBetRateCamera, BET_RATE_RENDER_TIME);
        }
        // 计时结束的这一帧仍要画完再关：卡顿导致单帧 dt 很大时，淡入可能与计时在同一帧结束，
        // 直接关闭会把半透明的文字留在纹理里。
        ;

        _proto.stopBetRateCamera = function stopBetRateCamera() {
          this._betRateStopPending = true;
          director.once(Director.EVENT_AFTER_DRAW, this.onBetRateDrawn, this);
        };
        _proto.onBetRateDrawn = function onBetRateDrawn() {
          // 等待期间又有新的刷新请求时，由新请求负责关闭。
          if (!this._betRateStopPending) return;
          this._betRateStopPending = false;
          if (isValid(this._betRateCamera)) this._betRateCamera.enabled = false;
        }

        /**
         * 去掉场景大模型上对画面没有可见贡献的着色计算，所有设备都生效（见文件顶部两张表的说明）。
         * 只改各渲染器自己的材质实例和探针设置，不改 FBX 及其 meta，也不改共享的材质资源，离开场景后不留痕迹。
         * 桌子上的 I18nLocal 也通过 .material 取同一份实例来换当前语言的贴图，所以这里不能用 setSharedMaterial
         * 整个替换材质（会丢掉已换上的贴图）；两边改的是同一份实例的不同内容，先后顺序无关。
         * 放在 start：此时场景里所有渲染器都已启用，改动会立即生效；着色器重编的耗时落在进场加载期间。
         */;
        _proto.simplifySceneMaterials = function simplifySceneMaterials() {
          var root = director.getScene().getChildByName("Node_sceneRoot");
          var rendererOf = function rendererOf(path) {
            var node = root && root.getChildByPath(path);
            var renderer = node && node.getComponent(MeshRenderer);
            // 场景结构变了要能被发现，否则这项优化会悄悄失效。
            if (!renderer) console.warn("BjlVipScene: scene model not found", path);
            return renderer;
          };
          for (var _i = 0, _SCENE_NO_NORMAL_MAP_ = SCENE_NO_NORMAL_MAP_MODELS; _i < _SCENE_NO_NORMAL_MAP_.length; _i++) {
            var path = _SCENE_NO_NORMAL_MAP_[_i];
            var renderer = rendererOf(path);
            if (renderer) renderer.material.recompileShaders({
              USE_NORMAL_MAP: false
            });
          }
          for (var _i2 = 0, _SCENE_SINGLE_PROBE_M = SCENE_SINGLE_PROBE_MODELS; _i2 < _SCENE_SINGLE_PROBE_M.length; _i2++) {
            var _path = _SCENE_SINGLE_PROBE_M[_i2];
            var _renderer = rendererOf(_path);
            if (_renderer) _renderer.bakeSettings.reflectionProbe = REFLECTION_PROBE_BAKED_CUBEMAP;
          }
        };
        /**
         * 低端机降分辨率在本场景的做法（接管 RenderScaleWatcher 的默认做法，见其 scaleHandler）。
         * 默认做法把整块画布降到 0.75，筹码面额和界面文字一起变糊。这里只让主相机把 3D 场景画到一张按比例
         * 缩小的纹理上，画布保持原分辨率，叠放顺序是：
         *   主相机（3D 场景，进纹理）→ 铺背景相机（把纹理铺满屏幕）→ 清晰层相机（原分辨率画筹码）→ 界面相机。
         * 实测 MT6765/GE8320（含铺背景时的边缘平滑，见 applySceneSmooth）：选桌大厅 37 帧、桌内 37 到 38 帧，
         * 与整块画布降到 0.75 基本持平（38、40），而筹码和界面是原分辨率。
         * 清晰层相机不带场景的深度：放进清晰层的物体不会被低分辨率层里的东西挡住，所以只放已进桌那张桌的筹码
         * （见 BjlVip_deskArea.syncSharpLayer）。
         * scale 为 1 时还原。场景销毁过程中也会被调用一次，所以每一步都要判断对象是否还在。
         */
        _proto.setSceneRenderScale = function setSceneRenderScale(scale) {
          this.disableLayeredRender();
          if (scale < 1 && isValid(this.node)) this.enableLayeredRender(scale);
          BjlVipUtils.instance.sharpLayer = this._sceneScale < 1;
          EventManager.instance.emit(eEvent.onSharpLayer);
        };
        _proto.enableLayeredRender = function enableLayeredRender(scale) {
          var mainNode = director.getScene().getChildByName("Main Camera");
          var main = mainNode && mainNode.getComponent(Camera);
          var canvas = this.getComponent(Canvas);
          var ui = canvas && canvas.cameraComponent;
          if (!main || !ui) return;
          var texture = new RenderTexture();
          texture.reset({
            width: Math.round(game.canvas.width * scale),
            height: Math.round(game.canvas.height * scale)
          });

          // 铺背景：一张铺满可见区域的图，放在单独的层里，只有铺背景相机能看到。
          var blit = new Node("SceneBlit");
          blit.layer = LAYER_SCENE_BLIT;
          this.node.insertChild(blit, 0);
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
          mainNode.addChild(sharpCamera);
          var sharpCam = sharpCamera.addComponent(Camera);
          sharpCam.projection = main.projection;
          sharpCam.fov = main.fov;
          sharpCam.fovAxis = main.fovAxis;
          sharpCam.near = main.near;
          sharpCam.far = main.far;
          sharpCam.clearFlags = Camera.ClearFlag.DEPTH_ONLY;
          sharpCam.priority = main.priority + 2;
          sharpCam.visibility = LAYER_SHARP;
          this._mainCamera = main;
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
         * 铺背景时顺带做边缘平滑（materials/sceneSmooth.effect）。
         * 场景纹理没有抗锯齿：画布自带的多重采样只对直接画到画布上的东西有效，引擎的渲染纹理也开不了多重采样，
         * 不处理的话桌沿、地面线条都是台阶状的。
         * 着色器异步加载，加载完之前和加载失败时用引擎默认材质：有锯齿但画面正确。期间分层渲染可能已经关掉
         * 或重建（转屏），所以回调里要核对还是不是同一张纹理。
         */;
        _proto.applySceneSmooth = function applySceneSmooth(sprite, texture) {
          var _this2 = this;
          var bundle = BjlVipUtils.instance.bundle;
          if (!bundle) return;
          bundle.load("materials/sceneSmooth", EffectAsset, function (err, effect) {
            if (err || !effect || !isValid(sprite) || _this2._sceneTexture !== texture) return;
            var material = new Material();
            // SAMPLE_FROM_RT 之类的宏只对引擎默认材质自动设置，这里的着色器自己处理渲染纹理的上下翻转。
            material.initialize({
              effectAsset: effect
            });
            material.setProperty("texelSize", new Vec4(1 / texture.width, 1 / texture.height, 0, 0));
            sprite.customMaterial = material;
            _this2._sceneSmoothMaterial = material;
          });
        };
        _proto.disableLayeredRender = function disableLayeredRender() {
          if (this._sceneScale >= 1) return;
          this._sceneScale = 1;
          if (isValid(this._mainCamera)) {
            this._mainCamera.targetTexture = null;
            this._mainCamera.visibility = this._mainVisibility;
          }
          if (isValid(this._uiCamera)) this._uiCamera.visibility = this._uiVisibility;
          for (var _i3 = 0, _arr = [this._sceneBlit, this._sceneBlitCamera, this._sharpCamera]; _i3 < _arr.length; _i3++) {
            var node = _arr[_i3];
            if (isValid(node)) node.destroy();
          }
          if (this._sceneTexture) this._sceneTexture.destroy();
          if (this._sceneSmoothMaterial) this._sceneSmoothMaterial.destroy();
          this._sceneSmoothMaterial = null;
          this._mainCamera = this._uiCamera = null;
          this._sceneBlit = this._sceneBlitCamera = this._sharpCamera = null;
          this._sceneTexture = null;
        };
        _proto.start = function start() {
          var _this3 = this;
          this.simplifySceneMaterials();
          // 低端机自动降分辨率由 ViewManager 挂在本节点上的 RenderScaleWatcher 负责判断；本场景接管具体做法。
          // 本场景进场后还要加载贴图，等选桌大厅显示出来（showHall）再开始统计帧率。
          var watcher = this.getComponent(RenderScaleWatcher);
          if (watcher) watcher.scaleHandler = function (scale) {
            return _this3.setSceneRenderScale(scale);
          };
          if (watcher && !this._node_hall) watcher.hold();
        };
        _proto.onLoad = function onLoad() {
          var _this4 = this;
          NetManager.instance.waitServiceSendData();
          // 进场先渲染一次把纹理清空，之后相机保持关闭直到进桌。
          this.refreshBetRate();
          BjlVipUtils.instance.bundle = assetManager.getBundle(cBundle);
          BjlVipUtils.instance.preLoad();
          BjlVipUtils.instance.loadRes_icon(function () {
            _this4.onLoadHall();
          });
          BjlVipUtils.instance.playBgMusic();
          Common.showWait();
        };
        _proto.onEnable = function onEnable() {
          view.on("canvas-resize", this.onResize, this);
          EventManager.instance.on(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.on(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.on(eEvent.onLoadGame, this.onLoadGame, this);
          EventManager.instance.on(eEvent.onBetRateUpdate, this.refreshBetRate, this);
          EventManager.instance.on(eEvent.onDeskWarm, this.onDeskWarm, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onBetRateUpdate, this.refreshBetRate, this);
          EventManager.instance.off(eEvent.onDeskWarm, this.onDeskWarm, this);
          director.off(Director.EVENT_AFTER_DRAW, this.onBetRateDrawn, this);
          view.off("canvas-resize", this.onResize, this);
          EventManager.instance.off(ConfigManager.instance.ButtonEvent.closePop, this.closePop, this);
          EventManager.instance.off(eEvent.onLoadHall, this.onLoadHall, this);
          EventManager.instance.off(eEvent.onLoadGame, this.onLoadGame, this);
          AudioManager.instance.playBgMusic();
        };
        _proto.onDestroy = function onDestroy() {
          // 本组件先于后挂的 RenderScaleWatcher 销毁，引擎随后会把对象字段置空，
          // 等 watcher 回调还原时已拿不到场景纹理，所以要在这里先释放。
          this.disableLayeredRender();
        }
        /**
         * 进桌的重负载阶段不统计帧率（由桌面在阶段开始和结束时通知）。
         * 实测低端机在选桌大厅出现后几秒内就选桌时，降档后的评估窗口正好压在“创建界面加预热”上，
         * 帧率达不到“比降档前高 15%”的门槛，降档被判无效而回退，之后整场停在原分辨率。
         */;
        _proto.onDeskWarm = function onDeskWarm(busy) {
          var watcher = this.getComponent(RenderScaleWatcher);
          if (!watcher) return;
          if (busy) watcher.hold();else watcher.begin(1);
        };
        _proto.onResize = function onResize() {
          this.refreshBetRate();
          // 画布尺寸变了：纹理、铺背景的图和两台相机的尺寸都要跟着变，按当前比例重建。
          if (this._sceneScale < 1) this.setSceneRenderScale(this._sceneScale);
          // let MainCamera = director.getScene().getChildByName("Main Camera").getComponent(Camera);
          // MainCamera.camera.resize(1920, 1080);
        };

        _proto.onLoadHall = function onLoadHall() {
          var _this5 = this;
          console.time("bundle.onLoadHall");
          if (!this.prefab_hall) {
            BjlVipUtils.instance.bundle.load("prefab/BjlVipHall", Prefab, function (cur, total) {}, function (err, prefab) {
              _this5.prefab_hall = prefab;
              _this5.showHall();
            });
          } else {
            this.showHall();
          }
        };
        _proto.showHall = function showHall() {
          var _this6 = this;
          if (this.prefab_hall) {
            if (!this._node_hall) {
              this._node_hall = instantiate(this.prefab_hall);
              // this._node_hall.scale = v3(0.7, 0.7, 1);
              this.node.addChild(this._node_hall);
            }
            this._node_hall.getComponent(UIOpacity).opacity = 0;
            if (this._node_Game) {
              this._node_Game.removeFromParent();
              this._node_Game.destroy();
              this._node_Game = null;
              // 赔率文字随 GameView 移除，重新渲染把纹理清空，大厅里的桌面与原先一样不显示赔率。
              this.refreshBetRate();
            }
            tween(this._node_hall.getComponent(UIOpacity)).to(0.5, {
              opacity: 255
            }).call(function () {
              if (_this6.firstNode) {
                _this6.firstNode.removeFromParent();
                _this6.firstNode.destroy();
                _this6.firstNode = null;
              }
            }).start();
            Common.closeWait();
            BjlVipUtils.instance.hallReady = true;
            this.preloadGameView();
            // 选桌大厅显示出来后开始统计帧率（已降档或已停止时该调用无效）。
            var watcher = this.getComponent(RenderScaleWatcher);
            if (watcher) watcher.begin();
            console.timeEnd("bundle.onLoadHall");
          }
        }

        /**
         * 选桌大厅显示出来后就开始加载桌内界面的预制体，不等到进桌的相机动画结束。
         * 这个预制体依赖几十张贴图和字体，低端机上加载约 0.7 秒且期间掉帧；原先在相机到位后才开始加载，
         * 第一次进桌时界面要晚这么久才出现。放在这里是因为大厅刚显示、RenderScaleWatcher 还没开始统计帧率
         * （begin 有 1.5 秒延迟），加载造成的掉帧不会影响是否降分辨率的判断。
         * 加载没完成就进桌也没问题：onLoadGame 仍会自己发起加载，资源管理器对同一资源只加载一次。
         */;
        _proto.preloadGameView = function preloadGameView() {
          var _this7 = this;
          if (this.prefab_game) return;
          BjlVipUtils.instance.bundle.load("prefab/BjlVipGameView", Prefab, function (err, prefab) {
            if (!err && isValid(_this7) && !_this7.prefab_game) _this7.prefab_game = prefab;
          });
        };
        _proto.onLoadGame = function onLoadGame() {
          var _this8 = this;
          console.time("bundle.onLoadGame");
          if (!this.prefab_game) {
            BjlVipUtils.instance.bundle.load("prefab/BjlVipGameView", Prefab, function (cur, total) {}, function (err, prefab) {
              _this8.prefab_game = prefab;
              _this8.showGame();
            });
          } else {
            this.showGame();
          }
        };
        _proto.showGame = function showGame() {
          var _this9 = this;
          if (this.prefab_game) {
            var fadeInTimes = 0;
            if (!this._node_Game) {
              this._node_Game = instantiate(this.prefab_game);
              this.node.addChild(this._node_Game);
              //                // this._node_Game.opacity = 0;
              fadeInTimes = 0.15;
            }

            // this.onResize();
            if (this._node_hall) {
              this._node_hall.removeFromParent();
              this._node_hall.destroy();
              this._node_hall = null;
            }
            tween(this._node_Game.getComponent(UIOpacity)).stop().to(fadeInTimes, {
              opacity: 255
            }).call(function () {
              if (_this9._node_hall) {
                _this9._node_hall.removeFromParent();
                _this9._node_hall.destroy();
                _this9._node_hall = null;
              }
            }).start();
            console.timeEnd("bundle.onLoadGame");
          }
        }

        //PopView 关闭监听
        ;

        _proto.closePop = function closePop(data) {
          ViewManager.instance.closePopView();
        };
        return BjlVipScene;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "firstNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefab_hall", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "prefab_game", [_dec5], {
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

System.register("chunks:///_virtual/BjlVipSwitch.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BjlVipDef.ts', './BjlVipModel.ts', './EventManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, NodeEventType, view, UITransform, tween, v3, Component, eEvent, BjlVipModel, EventManager;
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
      NodeEventType = module.NodeEventType;
      view = module.view;
      UITransform = module.UITransform;
      tween = module.tween;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      eEvent = module.eEvent;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      EventManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "ed17akQRjFBJoc7OJOrVgfb", "BjlVipSwitch", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var BjlVipSwitch = exports('BjlVipSwitch', (_dec = ccclass("BjlVipSwitch"), _dec2 = menu("game/BjlVipGame/BjlVipSwitch"), _dec3 = property(gts.List), _dec4 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipSwitch, _Component);
        function BjlVipSwitch() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "scrollView_content", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mask", _descriptor2, _assertThisInitialized(_this));
          // @property(Node)
          // Node_chip: Node = null;
          // @property(Node)
          // Node_label: Node = null;
          // @property(Node)
          // chipItem: Node = null;
          // @property(Label)
          // page: Label = null;
          // @property(Label)
          // platform: Label = null;
          // @property(Label)
          // gameId: Label = null;
          // @property(Label)
          // totalBet: Label = null;
          // @property(Label)
          // win: Label = null;
          // @property(Label)
          // reuslt: Label = null;
          // @property(Node)
          // Node_winTip: Node = null;
          _this.firstStart = true;
          return _this;
        }
        var _proto = BjlVipSwitch.prototype;
        // onLoad() {}
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onUpdateRecordList, this.onUpdateRecordList, this);

          // this.mask.on(
          //     NodeEventType.TOUCH_END,
          //     () => {
          //         //收起
          //         this.doListAction(false);
          //     },
          //     this
          // );
        };

        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onUpdateRecordList, this.onUpdateRecordList, this);
          this.mask.off(NodeEventType.TOUCH_END);
        };
        _proto.start = function start() {};
        _proto.onDestroy = function onDestroy() {};
        _proto.doListAction = function doListAction(isSHow) {
          if (isSHow === void 0) {
            isSHow = true;
          }
          var ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
          if (isSHow && !ScrollView_pathList.active) {
            //展开

            ScrollView_pathList.active = true;
            this.onUpdateRecordList();
            var viewSize = view.getVisibleSize();
            var listWidth = ScrollView_pathList.getComponent(UITransform).width;
            tween(this.node).to(0.25, {
              position: v3(viewSize.width / 2 - listWidth, 0, 0)
            }, {
              easing: "cubicOut"
            }).start();
          } else if (!isSHow && ScrollView_pathList.active) {
            var _ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
            //收起
            var _viewSize = view.getVisibleSize();
            var _listWidth = _ScrollView_pathList.getComponent(UITransform).width;
            tween(this.node).to(0.25, {
              position: v3(_viewSize.width / 2, 0, 0)
            }, {
              easing: "cubicOut"
            }).call(function () {
              _ScrollView_pathList.active = false;
            }).start();
          }
        };
        _proto.onBtnClick = function onBtnClick(event) {
          var strName = event.target.name;
          switch (strName) {
            case "Button_Sceneswitch":
              {
                var ScrollView_pathList = this.node.getChildByName("ScrollView_pathList");
                if (!ScrollView_pathList.active) {
                  this.doListAction();
                } else {
                  this.doListAction(false);
                }
                break;
              }
          }
        };
        _proto.onUpdateRecordList = function onUpdateRecordList() {
          this.scrollView_content.setData(BjlVipModel.instance.tableList);
          this.scrollView_content.refresh();
          if (this.firstStart) {
            this.doListAction();
            this.firstStart = false;
          }
        };
        return BjlVipSwitch;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mask", [_dec4], {
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

System.register("chunks:///_virtual/BjlVipSwitchItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AutoChangeParent.ts', './Common.ts', './BjlVipDef.ts', './BjlVipRoadItem.ts', './BjlVipModel.ts', './EventManager.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, Label, Prefab, UIOpacity, Button, isValid, instantiate, tween, v3, Tween, Component, AutoChangeParent, Common, eRunStatus, eEvent, BjlVipRoadItem, BjlVipModel, EventManager, i18n;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Prefab = module.Prefab;
      UIOpacity = module.UIOpacity;
      Button = module.Button;
      isValid = module.isValid;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      AutoChangeParent = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      eRunStatus = module.eRunStatus;
      eEvent = module.eEvent;
    }, function (module) {
      BjlVipRoadItem = module.default;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "884aakpyDVNHpCeMwQH3x5X", "BjlVipSwitchItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var BjlVipSwitchItem = exports('default', (_dec = ccclass("BjlVipSwitchItem"), _dec2 = menu("game/BjlVipGame/BjlVipSwitchItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipSwitchItem, _Component);
        function BjlVipSwitchItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //    //
          _initializerDefineProperty(_this, "content_label", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_label", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_strTag", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_total", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_play", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_bank", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_draw", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_path", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "prefab_item", _descriptor9, _assertThisInitialized(_this));
          // 大路格子按绘制顺序复用（上界为可见的 18 列）。列表项本身会被 gts.List 回收并换绑其他桌的数据，
          // 滚动和每局刷新都会重绘，不再每次销毁重建。
          _this._pathItems = [];
          // 当前带呼吸动画的最新一格；重绘前先停掉并复位缩放，避免复用后旧的一格继续缩放。
          _this._pulseItem = null;
          _this._gtItem = null;
          return _this;
        }
        var _proto = BjlVipSwitchItem.prototype;
        //    // LIFE-CYCLE CALLBACKS:
        _proto.onLoad = function onLoad() {};
        _proto.onEnable = function onEnable() {
          this.node.active = true;
          this.Node_label.active = true;
          this.node.on("click", this.onItemClick, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off("click", this.onItemClick, this);
        };
        _proto.onItemClick = function onItemClick(event) {
          var tempData = this.item.data;
          var tableIndex = parseInt(tempData.table);
          if (BjlVipModel.instance.gameStatus == eRunStatus.NONE) {
            EventManager.instance.emit(eEvent.onStopCameraCruise, true);
          }
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex == tableIndex) {
            return;
          }
          if (BjlVipModel.instance.selectRoomStatus != 0) {
            return;
          }
          BjlVipModel.instance.selectRoomStatus = 1;
          this.scheduleOnce(function () {
            EventManager.instance.emit(eEvent.onSelectRoom, tableIndex);
          }, 0.3);
        };
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
          var arrTag = ["A", "B", "C", "D", "E", "F"];
          var tableIndex = parseInt(tempData.table);
          var curHistory = BjlVipModel.instance.tableList[tableIndex].history.slice();
          // if (curHistory && curHistory.length > 36) {
          //     curHistory = curHistory.slice(curHistory.length - 36);
          // }

          this.Label_strTag.string = "" + arrTag[tableIndex];
          this.Label_total.string = "" + curHistory.length;
          var play = 0;
          var bank = 0;
          var draw = 0;
          for (var _iterator = _createForOfIteratorHelperLoose(curHistory), _step; !(_step = _iterator()).done;) {
            var history = _step.value;
            history == 1 ? play++ : history == 2 ? bank++ : draw++;
          }
          this.Label_play.string = "" + play;
          this.Label_bank.string = "" + bank;
          this.Label_draw.string = "" + draw;
          this.drawPathLayer2(curHistory);
          if (BjlVipModel.instance.selectRoomIndex != -1 && tableIndex == BjlVipModel.instance.selectRoomIndex) {
            this.node.getComponent(Button).interactable = false;
          } else {
            this.node.getComponent(Button).interactable = true;
          }
        };
        _proto.drawPathLayer2 = function drawPathLayer2(history) {
          var curHistory = history.slice();
          if (!curHistory || curHistory.length == 0) {
            // 列表项会换绑到别的桌：这张桌没有历史时要清掉上一张桌留下的大路。
            this.hidePathItems(0);
            return;
          }
          var spaceX = 26.06;
          var spaceY = 26.9;
          var startX = 10.5;
          var startY = -10.5;
          var max_len = 18;
          var bigRoadDic = [];
          var isFirstTie = [];
          var info = this.parseBigRoadDatas(curHistory, bigRoadDic, isFirstTie);
          var startIndex = 0;
          if (info) {
            var x = 0;
            for (var _iterator2 = _createForOfIteratorHelperLoose(info), _step2; !(_step2 = _iterator2()).done;) {
              var i = _step2.value;
              if (i.x > x) {
                x = i.x;
              }
            }
            startIndex = x - max_len + 1;
            if (startIndex < 0) {
              startIndex = 0;
            }
          }
          this.stopPulse();
          var used = 0;
          for (var _i = 0; _i < info.length; _i++) {
            if (info[_i].x < startIndex) continue;
            var node = this._pathItems[used];
            if (!isValid(node)) {
              node = instantiate(this.prefab_item);
              this.Node_path.addChild(node);
              this._pathItems[used] = node;
            }
            used++;
            node.active = true;
            node.setPosition(startX + (info[_i].x - startIndex) * spaceX, startY - info[_i].y * spaceY);
            node.getComponent(BjlVipRoadItem).setData(info[_i]);
            if (!this.node.getComponent(Button).interactable && _i == info.length - 1) {
              this._pulseItem = node;
              tween(node).to(0.5, {
                scale: v3(0.8, 0.8, 0.8)
              }).to(0.5, {
                scale: v3(1, 1, 1)
              }).union().repeatForever().start();
            }
          }
          // 换绑到历史更短的桌时隐藏多余格子，保留以便复用。
          this.hidePathItems(used);
        };
        _proto.stopPulse = function stopPulse() {
          if (isValid(this._pulseItem)) {
            Tween.stopAllByTarget(this._pulseItem);
            this._pulseItem.setScale(1, 1, 1);
          }
          this._pulseItem = null;
        }

        // 隐藏第 used 个之后的格子；used 为 0 即清空，此时也要停掉呼吸动画。
        ;

        _proto.hidePathItems = function hidePathItems(used) {
          if (used == 0) this.stopPulse();
          for (var i = used; i < this._pathItems.length; i++) {
            if (isValid(this._pathItems[i])) this._pathItems[i].active = false;
          }
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
        _createClass(BjlVipSwitchItem, [{
          key: "item",
          get: function get() {
            if (!this._gtItem) {
              //@ts-ignore
              this._gtItem = this.getComponent(gts.ListItem);
            }
            return this._gtItem;
          }
        }]);
        return BjlVipSwitchItem;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Label_strTag", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Label_total", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Label_play", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Label_bank", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Label_draw", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "Node_path", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "prefab_item", [_dec11], {
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

System.register("chunks:///_virtual/BjlVipUIPlane.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, Node, MeshRenderer, Camera, RenderTexture, UITransform, primitives, utils, Component;
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
      UITransform = module.UITransform;
      primitives = module.primitives;
      utils = module.utils;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _dec4, _dec5, _dec6, _class4, _class5, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "ecd5cRigilDy6gRBLESyKAR", "BjlVipUIPlane", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        executeInEditMode = _decorator.executeInEditMode;
      var BjlVipUIPlaneProfile = exports('default', (_dec4 = ccclass("BjlVipUIPlaneProfile"), _dec5 = property(Node), _dec6 = property(MeshRenderer), _dec4(_class4 = (_class5 = function BjlVipUIPlaneProfile() {
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
      var BjlVipUIPlane = exports('BjlVipUIPlane', (_dec = ccclass("BjlVipUIPlane"), _dec2 = property(Camera), _dec3 = property([BjlVipUIPlaneProfile]), _dec(_class = executeInEditMode(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipUIPlane, _Component);
        function BjlVipUIPlane() {
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
        var _proto = BjlVipUIPlane.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          if (!this.copyCamera) return;
          this.copyCamera.node.active = true;
          this.rt = new RenderTexture();
          this.rt.reset({
            width: 1920,
            height: 1080
          });
          this.copyCamera.targetTexture = this.rt;
          this.UIPlaneProfiles[0].plane.material.setProperty("mainTexture", this.rt);

          // this.copyRenderTex();
          console.log("=========");
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
            var uv_l = worldPos.x / rtwidth;
            var uv_b = worldPos.y / rtheight;
            var uv_r = (worldPos.x + width) / rtwidth;
            var uv_t = (worldPos.y + height) / rtheight;
            geometryPlane.uvs = [uv_l, uv_b, uv_l, uv_t, uv_r, uv_t, uv_r, uv_b];
            geometryPlane.uvs = [0, 0, 0, 1, uv_r, uv_t, uv_r, uv_b];
            plane.mesh = utils.MeshUtils.createMesh(geometryPlane, plane.mesh);
          });
        };
        return BjlVipUIPlane;
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

System.register("chunks:///_virtual/BjlVipUtils.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameDef.ts', './AudioManager.ts', './BjlVipDef.ts', './Common.ts'], function (exports) {
  var _inheritsLoose, _asyncToGenerator, _regeneratorRuntime, _createForOfIteratorHelperLoose, cclegacy, Prefab, director, isValid, AudioClip, Node, Label, tween, v3, UIOpacity, Tween, UIRenderer, Button, sys, assetManager, SpriteFrame, GameDef, AudioManager, eSound, cBundle, Common;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      director = module.director;
      isValid = module.isValid;
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
      SpriteFrame = module.SpriteFrame;
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
      cclegacy._RF.push({}, "6b931KILqBA2KPRWHfgq4ah", "BjlVipUtils", undefined);
      var cRed = [1, 3, 5, 7, 9, 12, 16, 14, 18, 32, 19, 21, 25, 34, 27, 36, 30, 23];
      var arrIRound = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      var BjlVipUtils = exports('BjlVipUtils', /*#__PURE__*/function (_GameDef$BaseSington) {
        _inheritsLoose(BjlVipUtils, _GameDef$BaseSington);
        function BjlVipUtils() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _GameDef$BaseSington.call.apply(_GameDef$BaseSington, [this].concat(args)) || this;
          _this.bundle = null;
          _this.arrSkeletonData = {};
          _this.arrFontData = {};
          _this.arrIconSpriteFrame = {};
          _this.arrChipSpriteFrame = {};
          _this.arrBetAreaSpriteFrame = {};
          _this.arrCardSpriteFrame = {};
          // 选桌大厅显示出来后为 true：此时上面三张贴图表已加载完，大厅界面也已创建。
          // 选桌入口据此忽略过早的点击；贴图加载失败时大厅不会显示，保持 false。
          _this.hallReady = false;
          // 分层渲染是否开启（低端机降档后）：3D 场景画到低分辨率纹理，界面和清晰层保持原分辨率。
          // 由 BjlVipScene 维护；桌面据此决定是否把筹码放进清晰层。
          _this.sharpLayer = false;
          // 已加载的音效，避免每次播放都走一遍 bundle.load 的异步流程。只在本单例存活期间持有，
          // 不额外 addRef：资源的生命周期仍由 bundle 管理。
          _this._soundClips = {};
          // 各音效最近一次请求播放的帧号。续押、加倍时同一帧会有多个筹码落地，
          // 同一音效在一帧内叠加播放听不出区别，只保留第一次。
          _this._soundFrames = {};
          _this.soundIDList = {};
          return _this;
        }
        var _proto = BjlVipUtils.prototype;
        //资源预加载
        _proto.preLoad = function preLoad() {
          // this.bundle.preload("prefab/BjlVipGameView");
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
            var _this4 = this;
            var arrHLoad;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  arrHLoad = [];
                  arrHLoad.push(this.asyncLoadDir("model/chipTexture", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator = _createForOfIteratorHelperLoose(arrSpriteFrame), _step; !(_step = _iterator()).done;) {
                        var spriteFrame = _step.value;
                        _this4.arrChipSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("model/betArea", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator2 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step2; !(_step2 = _iterator2()).done;) {
                        var spriteFrame = _step2.value;
                        _this4.arrBetAreaSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));
                  arrHLoad.push(this.asyncLoadDir("model/cardTexture", SpriteFrame, function (err, arrSpriteFrame) {
                    if (!err) {
                      for (var _iterator3 = _createForOfIteratorHelperLoose(arrSpriteFrame), _step3; !(_step3 = _iterator3()).done;) {
                        var spriteFrame = _step3.value;
                        _this4.arrCardSpriteFrame[spriteFrame.name] = spriteFrame;
                      }
                    }
                  }));

                  // arrHLoad.push(
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
                  _context3.next = 6;
                  return Promise.all(arrHLoad);
                case 6:
                  if (cb) {
                    cb();
                  }
                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
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
        /**
         * 取音效后回调。同一帧内对同一音效的重复请求直接丢弃（不回调）；
         * 加载失败同样不回调，与原先的静默处理一致。
         */
        _proto.withSoundClip = function withSoundClip(soundPath, onClip) {
          var _this6 = this;
          var frame = director.getTotalFrames();
          if (this._soundFrames[soundPath] === frame) {
            return;
          }
          this._soundFrames[soundPath] = frame;
          var cached = this._soundClips[soundPath];
          if (isValid(cached)) {
            onClip(cached);
            return;
          }
          this.bundle.load(soundPath, AudioClip, function (err, audioClip) {
            if (err) {
              return;
            }
            _this6._soundClips[soundPath] = audioClip;
            onClip(audioClip);
          });
        };
        _proto.playOneShot = function playOneShot(soundPath, isLoop, cb) {
          var _this7 = this;
          this.withSoundClip(soundPath, function (audioClip) {
            if (_this7.soundIDList[soundPath]) {
              return;
            }
            AudioManager.instance.playOneShot(audioClip);
          });
        };
        _proto.playSound = function playSound(soundPath, isLoop, cb) {
          var _this8 = this;
          if (isLoop === void 0) {
            isLoop = false;
          }
          if (cb === void 0) {
            cb = null;
          }
          this.withSoundClip(soundPath, function (audioClip) {
            if (_this8.soundIDList[soundPath]) {
              return;
            }
            var soundID = AudioManager.instance.playSound(audioClip, isLoop);
            _this8.soundIDList[soundPath] = soundID;
            AudioManager.instance.setFinishCallback(soundID, function () {
              _this8.soundIDList[soundPath] = null;
              delete _this8.soundIDList[soundPath];
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
          var _this9 = this;
          var labelNode = label instanceof Node ? label : label.node;
          var labelCom = label instanceof Label ? label : label.getComponent(Label);
          if (!labelCom) {
            return;
          }
          tween(labelNode).to(0.1, {
            scale: v3(1.2, 1.2, 1.2)
          }).call(function () {
            var inter = Common.numFormatInt(num);
            var digit = _this9.numberFormatD(num, 2);
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

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            var inter = Common.numFormatInt(curWin / 1000);
            var digit = isFloatFormat ? _this10.numberFormatFloatD(curWin / 1000, 2.0) : _this10.numberFormatD(curWin / 1000, 2.0);
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
          var _this11 = this;
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

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          Tween.stopAllByTarget(label.node);
          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);
              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? _this11.numberFormatFloat(curWin / 1000, 2.0) + "K" : _this11.numberFormat(curWin / 1000, 2.0) + "K";
          })).delay(5.0).call(function () {
            tween(label.node.getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).call(function () {
              label.node.active = false;
            }).start();
          }).start();
        };
        _proto.updateLabelNomal = function updateLabelNomal(label, nums, isFloatFormat) {
          var _this12 = this;
          if (isFloatFormat === void 0) {
            isFloatFormat = false;
          }
          var destWin = nums;
          var curWin = 0;
          var disWin = nums / 10;
          label.node.active = true;
          label.node.getComponent(UIOpacity).opacity = 255;

          //        // BjlVipUtils.instance.playSound(BjlVipDef.eSound.numAdd);

          tween(label.node).repeat(11, tween(label.node).delay(0.075).call(function () {
            curWin += disWin;
            if (curWin > destWin) {
              //                            // BjlVipUtils.instance.stopSound(BjlVipDef.eSound.numAdd);

              Tween.stopAllByTarget(label.node);
              curWin = destWin;
            }
            label.string = isFloatFormat ? "" + _this12.numberFormatFloat(curWin, 0) : "" + _this12.numberFormat(curWin, 0);
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
        return BjlVipUtils;
      }(GameDef.BaseSington));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BjlVipViewCtrl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EventManager.ts', './BjlVipDef.ts', './BjlVipModel.ts', './BjlVipUtils.ts', './BjlVip_deskArea.ts', './BjlVipSwitch.ts', './BjlVipCtrl.ts', './Common.ts', './I18n.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Camera, Node, v2, tween, v3, Vec3, Tween, Component, EventManager, eEvent, eRunStatus, arrCameraInfo, BjlVipModel, BjlVipUtils, BjlVip_deskArea, BjlVipSwitch, BjlVipCtrl, Common, i18n;
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
      Camera = module.Camera;
      Node = module.Node;
      v2 = module.v2;
      tween = module.tween;
      v3 = module.v3;
      Vec3 = module.Vec3;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      eEvent = module.eEvent;
      eRunStatus = module.eRunStatus;
      arrCameraInfo = module.arrCameraInfo;
    }, function (module) {
      BjlVipModel = module.BjlVipModel;
    }, function (module) {
      BjlVipUtils = module.BjlVipUtils;
    }, function (module) {
      BjlVip_deskArea = module.BjlVip_deskArea;
    }, function (module) {
      BjlVipSwitch = module.BjlVipSwitch;
    }, function (module) {
      BjlVipCtrl = module.BjlVipCtrl;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      i18n = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "6f6830MSuhOw6ZbC788S7L8", "BjlVipViewCtrl", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var BjlVipViewCtrl = exports('BjlVipViewCtrl', (_dec = ccclass("BjlVipViewCtrl"), _dec2 = property(Camera), _dec3 = property(BjlVipSwitch), _dec4 = property(BjlVip_deskArea), _dec5 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BjlVipViewCtrl, _Component);
        function BjlVipViewCtrl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "mainCamera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_switch", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "arrDeskArea", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Node_tag", _descriptor4, _assertThisInitialized(_this));
          _this.curDeskArea = null;
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
          return _this;
        }
        var _proto = BjlVipViewCtrl.prototype;
        ////////////////////////////////////////////
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {
          tween(this.Node_tag).to(2, {
            position: v3(0, 0.5, 0)
          }).to(2, {
            position: v3(0, 0.25, 0)
          }).union().repeatForever().start();
        };
        _proto.update = function update(dt) {};
        _proto.onEnable = function onEnable() {
          EventManager.instance.on(eEvent.onExitRoom, this.onExitRoom, this);
          EventManager.instance.on(eEvent.onSelectRoom, this.onSelectRoom, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.instance.off(eEvent.onExitRoom, this.onExitRoom, this);
          EventManager.instance.off(eEvent.onSelectRoom, this.onSelectRoom, this);
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
        _proto.onExitRoom = function onExitRoom() {
          var _this2 = this;
          // 下注回复未到时 gameStatus 仍是 NONE；此时离桌，回复到达后状态会停在 START 且没有界面把它走完。
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE || BjlVipCtrl.instance.isReqBet) {
            Common.showTip(i18n.lang["10005"]);
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex != -1) {
            for (var _iterator = _createForOfIteratorHelperLoose(this.arrDeskArea), _step; !(_step = _iterator()).done;) {
              var deskArea = _step.value;
              deskArea.enabled = false;
            }
            BjlVipModel.instance.selectRoomIndex = -1;
          }
          var cameraDestInfo = arrCameraInfo[0];
          var startPos = this.mainCamera.node.position;
          var destPos_0 = v3(0, 1.0, 0);
          var duration_0 = 3; //Vec3.distance(startPos, destPos_0) / 1.25;

          var destPos_1 = cameraDestInfo.pos;
          var duration_1 = 1.75; //Vec3.distance(destPos_0, destPos_1) / 1.25;

          EventManager.instance.emit(eEvent.onLoadHall);
          tween(this.mainCamera.node).to(duration_0, {
            position: destPos_0,
            eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
          }, {
            easing: "quadOut"
          }).parallel(tween(this.mainCamera.node).bezierTo3(duration_1, destPos_0, v3(destPos_0.x, destPos_0.y + 0.5, 3), v3(destPos_1.x, destPos_1.y + 0.5, 3), destPos_1), tween(this.mainCamera.node).to(duration_1, {
            eulerAngles: cameraDestInfo.eulerAngles
          })).call(function () {
            BjlVipModel.instance.selectRoomStatus = 0;
            _this2.Node_tag.active = true;
          }).start();
        };
        _proto.onSelectRoom = function onSelectRoom(selectRoomIndex) {
          var _this3 = this;
          // 同 onExitRoom：下注回复未到时不能换桌。
          if (BjlVipModel.instance.gameStatus != eRunStatus.NONE || BjlVipCtrl.instance.isReqBet) {
            Common.showTip(i18n.lang["10005"]);
            // 列表入口点击时已把 selectRoomStatus 置 1，只有进桌动画结束才复位；这里不进桌，必须复位，否则列表再也点不动。
            BjlVipModel.instance.selectRoomStatus = 0;
            return;
          }
          if (BjlVipModel.instance.selectRoomIndex == selectRoomIndex) {
            return;
          }
          // 进桌要用贴图表（deskArea.init）和该桌的列表数据（路单、限红），未就绪就忽略这次点击。
          // 桌面的 3D 点选从场景加载起就能点，早于资源加载完成。
          // 必须在改写 selectRoomIndex、停相机动画之前返回：init 抛错后桌号留在新值、进桌动画不启动，所有选桌入口都会被挡住。
          if (!BjlVipUtils.instance.hallReady || !BjlVipModel.instance.tableList[selectRoomIndex]) {
            BjlVipModel.instance.selectRoomStatus = 0;
            return;
          }
          Tween.stopAllByTarget(this.mainCamera.node);
          if (BjlVipModel.instance.selectRoomIndex == -1) {
            BjlVipModel.instance.selectRoomIndex = selectRoomIndex;
            var _BjlVip_deskArea = this.arrDeskArea[BjlVipModel.instance.selectRoomIndex];
            _BjlVip_deskArea.enabled = true;
            _BjlVip_deskArea.init();
            var cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var startPos = this.mainCamera.node.position;
            var destPos = cameraDestInfo.pos;
            var duration = 3; //Vec3.distance(startPos, destPos) / 1.25;

            tween(this.mainCamera.node).parallel(tween(this.mainCamera.node).bezierTo3(duration, startPos, v3(startPos.x, startPos.y + 0.5, 3), v3(destPos.x, destPos.y + 0.5, 3), destPos), tween(this.mainCamera.node).to(duration, {
              eulerAngles: cameraDestInfo.eulerAngles
            }, {
              easing: "cubicIn"
            })).call(function () {
              BjlVipModel.instance.selectRoomStatus = 0;
              _this3.Node_tag.active = false;
              EventManager.instance.emit(eEvent.onLoadGame);
            }).start();
          } else {
            if (BjlVipModel.instance.selectRoomIndex != -1) {
              for (var _iterator2 = _createForOfIteratorHelperLoose(this.arrDeskArea), _step2; !(_step2 = _iterator2()).done;) {
                var deskArea = _step2.value;
                deskArea.enabled = false;
              }
              BjlVipCtrl.instance.reqExit();
              EventManager.instance.emit(eEvent.onLoadHall);
            }
            BjlVipModel.instance.selectRoomIndex = selectRoomIndex;
            var _BjlVip_deskArea2 = this.arrDeskArea[BjlVipModel.instance.selectRoomIndex];
            _BjlVip_deskArea2.enabled = true;
            _BjlVip_deskArea2.init();
            var _cameraDestInfo = arrCameraInfo[BjlVipModel.instance.selectRoomIndex + 1];
            var _startPos = v3(0, 1.0, 0);
            var duration_0 = 3; //Vec3.distance(this.mainCamera.node.position, startPos);
            var duration_1 = 2; //Vec3.distance(startPos, cameraDestInfo.pos) / 1.25;

            tween(this.mainCamera.node).to(duration_0, {
              position: _startPos,
              eulerAngles: v3(0, this.mainCamera.node.eulerAngles.y, 0)
            }, {
              easing: "cubicOut"
            }).to(duration_1, {
              position: _cameraDestInfo.pos,
              eulerAngles: _cameraDestInfo.eulerAngles
            }, {
              easing: "cubicIn"
            }).call(function () {
              BjlVipModel.instance.selectRoomStatus = 0;
              _this3.Node_tag.active = false;
              EventManager.instance.emit(eEvent.onLoadGame);
            }).start();
          }
          this.Node_switch.doListAction(false);
        };
        return BjlVipViewCtrl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Node_switch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "arrDeskArea", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Node_tag", [_dec5], {
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

System.register("chunks:///_virtual/label3D.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Common.ts'], function (exports) {
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
      cclegacy._RF.push({}, "27635ynjl9IWIvNlK1n2L9x", "label3D", undefined);
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
          // 可选：同面额下注筹码共用的文字材质（由 BjlVip_deskArea 设置在托盘模板筹码上）。
          // 下注筹码不再各带一个 Label，统一显示这里同步过去的贴图；未设置时本组件行为不变。
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
        };
        _proto.update = function update(deltaTime) {
          var _this$node$parent, _this$label;
          if (!((_this$node$parent = this.node.parent) != null && _this$node$parent.active)) {
            return;
          }
          var spriteFrame = (_this$label = this.label) == null ? void 0 : _this$label.spriteFrame;
          var texture = spriteFrame && spriteFrame.texture;
          if (!texture) return;

          // 每个筹码（含下注时克隆出的筹码）都挂有本组件，组件查找只做一次。
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
  r('virtual:///prerequisite-imports/BjlVipGame', 'chunks:///_virtual/BjlVipGame'); 
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