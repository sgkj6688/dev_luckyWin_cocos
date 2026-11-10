System.register("chunks:///_virtual/slotEmojiRichesDef.ts", ['cc', './slotEmojiRichesProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, _decorator, AudioClip, slotEmojiRichesProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotEmojiRichesProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "e6c6b2ytKhAjrKnrC5UlTKe", "slotEmojiRichesDef", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotEmojiRichesDef = exports('slotEmojiRichesDef', (_dec = ccclass("slotEmojiRichesDef"), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function slotEmojiRichesDef() {}
        slotEmojiRichesDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotEmojiRichesProxy.bundle;
          var path = "sound/" + name;
          //console.log(name);
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
        slotEmojiRichesDef.palyMusic = function palyMusic(name) {
          var bundle = slotEmojiRichesProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotEmojiRichesDef;
      }(), _class2.audio = {
        bgm_mg: "bgm_mg",
        //普通模式背景音乐 done
        bgm_fs: "bgm_fs",
        //特殊模式背景音乐 done
        bgm_bigwin_main: "bgmBigwinMain",
        //中大奖动画 done
        bgm_bigwin_end: "bgmBigwinEnd",
        //中大奖结束动画 done
        bgm_totalwin_main: "bgmTotalwinMain",
        //特殊模式总奖播放 done
        bgm_totalwin_end: "bgmTotalwinEnd",
        //特殊模式总奖结束播放 done
        fastspinStart: "fastspinStart",
        //旋转光效按顺序播放这两个音效 done
        fastspinEnd: "fastspinEnd",
        //旋转光效没进入成功n done
        fsWonRemainingIncrease: "fsWonRemainingIncrease",
        //免费模式加载页点击 done
        fsWonTitle: "fsWonTitle",
        //免费结束页按钮出现的时候播放 done
        heartbeat: "heartbeat",
        //期待光效循环播放 done
        heartbeatNoise: "heartbeatNoise",
        //期待光效播放 done
        heartbeatSlowdrop: "heartbeatSlowdrop",
        //期待符号落下 done
        multiActivate: "multiActivate",
        //wild倍数飞上去播放 done
        multiExpandMultiple: "multiExpandMultiple",
        multiExpandSingle: "multiExpandSingle",
        //倍数相加变大 done
        multiFly: "multiFly",
        //倍数飞下来播放 done
        multiStackFrom: "multiStackFrom",
        //免费模式底部倍数飞上去 done
        multiStackSum: "multiStackSum",
        //倍数相加后和回到下面播放 done
        prizeMedwinEnd1: "prizeMedwinEnd1",
        //5倍以上中奖金额涨数字音效结束随机播放 done
        prizeMedwinEnd2: "prizeMedwinEnd2",
        //5倍以上中奖金额涨数字音效结束随机播放 done
        prizeMedwinEnd3: "prizeMedwinEnd3",
        //5倍以上中奖金额涨数字音效结束随机播放 done
        prizeMedwinMain: "prizeMedwinMain",
        //5倍以上中奖金额展示 done
        prizeSmallwin: "prizeSmallwin",
        //5倍以下中奖金额展示 done
        prizeSmallwinMultiplied: "prizeSmallwinMultiplied",
        //有倍数相乘后再播放
        prizeWinHighlight: "prizeWinHighlight",
        scatterWinHighlight: "scatterWinHighlight",
        //中免费scatter一起播动画声 done
        spinActiveLoop: "spinActiveLoop",
        //12345轴落下声音 done
        spinBtn: "spinBtn",
        //转动最开始播放 done
        spinStopQuick: "spinStopQuick",
        //快速模式落下后播放 done
        symCollapse: "symCollapse",
        symScatter: "symScatter",
        //界面Scatter动画时播放声音 done
        symShrink: "symShrink",
        //消失声 done
        symWildActivate: "symWildActivate",
        //Wild中奖变大
        symWildSpawn: "symWildSpawn",
        //变成wild
        symWinHighlightIdle: "symWinHighlightIdle",
        //一排一排闪下来的播放 done
        uiStart: "uiStart" //免费初始页 & 结束页 按钮 done
      }, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotEmojiRichesGame", ['./slotEmojiRichesDef.ts', './slotEmojiRichesItem.ts', './slotEmojiRichesProxy.ts', './slotEmojiRichesRun.ts', './slotEmojiRichesScene.ts', './slotEmojiRichesSetAuto.ts', './slotEmojiRichesSetBase.ts', './slotEmojiRichesView.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotEmojiRichesItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotEmojiRichesDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, sp, Sprite, v3, UITransform, UIOpacity, Component, slotEmojiRichesDef;
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
      sp = module.sp;
      Sprite = module.Sprite;
      v3 = module.v3;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Component = module.Component;
    }, function (module) {
      slotEmojiRichesDef = module.slotEmojiRichesDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;
      cclegacy._RF.push({}, "49415rd/Q5FhLXH90j/6MxA", "slotEmojiRichesItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;

      /*
      Like int = 1 //喜欢
      Cool int = 2 //酷
      Laugh int = 3 //笑
      Dog int = 4 //狗
      Bomb int = 5 //炸弹
      Beer int = 6 //啤酒
      Knife int = 7 //刀
      Shit int = 8 //便便
      Scatter int = 9
      Wild int = 10
      */
      var slotEmojiRichesItem = exports('slotEmojiRichesItem', (_dec = ccclass("slotEmojiRichesItem"), _dec2 = menu("game/slotEmojiRiches/slotEmojiRichesItem"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(SpriteFrame), _dec12 = property(sp.SkeletonData), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(Node), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesItem, _Component);
        function slotEmojiRichesItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winBgList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconList", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildBg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSpine", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "deleteSpine", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineList", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomLeftLine", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomRightLine", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topLeftLine", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topRightLine", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftLine", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightLine", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topLine", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomLine", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomRight", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomLeft", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topRight", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topLeft", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftStraight", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightStraight", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topStraight", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomStraight", _descriptor27, _assertThisInitialized(_this));
          _this._cardData = null;
          _this._parentIndex = 0;
          _this._childIndex = 0;
          _this._priority = 0;
          return _this;
        }
        var _proto = slotEmojiRichesItem.prototype;
        /*
        data:图标索引
        parentIndex:图标父节点
        childIndex:图标子节点
        isClear:使用清晰图还是模糊图
        isSetOpacity:是否降低透明度
        isInit:是否刚进入游戏
        */
        //普通模式 有中奖wild才会有背景
        //免费模式 wild都会有背景
        //任何模式下sactter都会有背景
        _proto.initCard = function initCard(data, parentIndex, childIndex, isClear, isSetOpacity, isInit) {
          if (isClear === void 0) {
            isClear = false;
          }
          if (isSetOpacity === void 0) {
            isSetOpacity = false;
          }
          if (isInit === void 0) {
            isInit = false;
          }
          if (data) {
            this.winBg.getComponent(Sprite).spriteFrame = this.winBgList[childIndex];
            this.winBg.active = false;
            this.wildBg.node.active = false;
            this.light.active = false;
            this._cardData = data;
            this._parentIndex = parentIndex;
            this._childIndex = childIndex;
            this.icon.scale = v3(1, 1, 1);
            this.iconSpine.node.setScale(v3(1, 1, 1));
            this.icon.active = false;
            this.iconSpine.node.active = false;
            this.winSpine.node.active = false;
            this.winSpine.node.setScale(v3(1, 1, 1));
            this.node.getComponent(UITransform).priority = 1;
            if (isClear) {
              if (!isInit && (data == 9 || data == 10)) {
                this.iconSpine.skeletonData = this.iconSpineList[data - 1];
                this.iconSpine.node.setScale(v3(0.67, 0.67, 1));
                this.iconSpine.node.active = true;
                this.iconSpine.setAnimation(0, "idle", true);
              } else if (isInit && data == 10) {
                this.icon.scale = v3(0.7, 0.7, 1);
                this.icon.getComponent(Sprite).spriteFrame = this.iconList[data - 1];
                this.icon.active = true;
              } else if (isInit && data == 9) {
                this.icon.scale = v3(0.7, 0.7, 1);
                this.icon.getComponent(Sprite).spriteFrame = this.iconList[data - 1];
                this.icon.active = true;
                this.showWinByWildAndScatter();
              } else {
                this.icon.scale = v3(0.72, 0.72, 1);
                this.icon.getComponent(Sprite).spriteFrame = this.iconList[data - 1];
                this.icon.active = true;
              }
            } else {
              this.icon.scale = v3(1.3, 1.3);
              this.icon.getComponent(Sprite).spriteFrame = this.iconBlurList[data - 1];
              this.icon.active = true;
            }
            if (isSetOpacity) {
              this.icon.getComponent(UIOpacity).opacity = 160;
            } else {
              this.icon.getComponent(UIOpacity).opacity = 255;
            }
          }
        };
        _proto.deleteItem = function deleteItem() {
          var _this2 = this;
          this.icon.setScale(v3(0.5, 0.5, 1));
          this.scheduleOnce(function () {
            _this2.icon.setScale(v3(0.25, 0.25, 1));
            _this2.deleteSpine.node.active = true;
            _this2.deleteSpine.setAnimation(0, "change", false);
            _this2.deleteSpine.setCompleteListener(function () {
              _this2.deleteSpine.setCompleteListener(null);
              _this2.deleteSpine.node.active = false;
            });
            _this2.scheduleOnce(function () {
              _this2.icon.setScale(v3(0, 0, 1));
            }, 0.1);
          }, 0.1);
        };
        _proto.winItem = function winItem() {
          if (this._cardData == 9 || this._cardData == 10) {
            this.node.getComponent(UITransform).priority = 102;
            this.iconSpine.setAnimation(0, "win_idle", true);
            if (!this.winSpine.node.active) {
              this.winSpine.node.active = true;
              this.winSpine.node.setScale(v3(0.72, 0.72, 1));
              this.winSpine.setAnimation(0, "win_idle", true);
            }
            if (this._cardData == 9) {
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.symScatter);
            }
          } else {
            this.icon.active = false;
            this.node.getComponent(UITransform).priority = 101;
            this.iconSpine.skeletonData = this.iconSpineList[this._cardData - 1];
            if (!this.winSpine.node.active) {
              this.winSpine.node.active = true;
              this.winSpine.node.setScale(v3(0.72, 0.72, 1));
              this.winSpine.setAnimation(0, "win_intro", false);
              this.winSpine.addAnimation(0, "win_idle", true);
              this.iconSpine.node.setScale(v3(0.68, 0.68, 1));
              this.iconSpine.node.active = true;
              this.iconSpine.setAnimation(0, "win", false);
              this.iconSpine.addAnimation(0, "win_idle", true);
            }
          }
        };
        _proto.keepItem = function keepItem() {
          this._cardData == 9 ? this.node.getComponent(UITransform).priority = 103 : this._cardData == 10 ? this.node.getComponent(UITransform).priority = 102 : this.node.getComponent(UITransform).priority = 101;
          if (this._cardData == 9 || this._cardData == 10) {
            this.iconSpine.setAnimation(0, "win_idle", true);
            if (!this.winSpine.node.active) {
              this.winSpine.node.active = true;
              this.winSpine.node.setScale(v3(0.72, 0.72, 1));
              this.winSpine.setAnimation(0, "win_idle", true);
            }
          }
        };
        _proto.resetItem = function resetItem() {
          this.icon.getComponent(UIOpacity).opacity = 255;
          this.icon.getComponent(Sprite).spriteFrame = this.iconList[this._cardData - 1];
        }
        //轮流展示效果
        ;

        _proto.turnShowItem = function turnShowItem() {
          if (this._cardData != 9 && this._cardData != 10) {
            this.winSpine.node.active = true;
            this.winSpine.setAnimation(0, "win_light", false);
            this.winSpine.addAnimation(0, "win_idle", true);
            this.iconSpine.setAnimation(0, "win", false);
            this.iconSpine.addAnimation(0, "win_idle", true);
          }
        }

        //隐藏获胜动画
        ;

        _proto.removeWinShow = function removeWinShow() {
          this.winSpine.node.active = false;
          this.winSpine.node.setScale(v3(1, 1, 1));
          this.wildBg.node.active = false;
          this.winBg.active = false;
          this.wildBg.node.setScale(v3(1, 1, 1));
          this.winBg.scale = v3(1, 1, 1);
          this.bottomLeftLine.active = false;
          this.bottomRightLine.active = false;
          this.topLeftLine.active = false;
          this.topRightLine.active = false;
          this.leftLine.active = false;
          this.rightLine.active = false;
          this.topLine.active = false;
          this.bottomLine.active = false;
          this.bottomRight.active = false;
          this.bottomLeft.active = false;
          this.topRight.active = false;
          this.topLeft.active = false;
          this.leftStraight.active = false;
          this.rightStraight.active = false;
          this.topStraight.active = false;
          this.bottomStraight.active = false;
          this.light.active = false;
        };
        _proto.wildWin = function wildWin() {
          this.node.getComponent(UITransform).priority = 102;
          this.winBg.active = true;
          this.winBg.scale = v3(0.795, 0.765, 1);
          if (!this.wildBg.node.active) {
            this.wildBg.node.active = true;
            this.wildBg.node.setScale(v3(0.8, 0.73, 1));
            if (this.wildBg.findAnimation("animation")) {
              this.wildBg.setAnimation(0, "animation", true);
            }
          }
          this.iconSpine.setAnimation(0, "win", false);
          this.iconSpine.addAnimation(0, "win_idle", true);
        };
        _proto.scatteWin = function scatteWin() {
          this.node.getComponent(UITransform).priority = 103;
          this.winBg.active = true;
          this.winBg.scale = v3(0.795, 0.765, 1);
          if (!this.wildBg.node.active) {
            this.wildBg.node.active = true;
            this.wildBg.node.setScale(v3(0.8, 0.73, 1));
            if (this.wildBg.findAnimation("animation")) {
              this.wildBg.setAnimation(0, "animation", true);
            }
          }
          if (this.iconSpine.findAnimation("win")) {
            this.iconSpine.setAnimation(0, "win", false);
            this.iconSpine.addAnimation(0, "win_idle", true);
          }
        };
        _proto.scatteIdle = function scatteIdle() {
          if (this.iconSpine.findAnimation("idle")) {
            this.iconSpine.setAnimation(0, "idle", true);
          }
        };
        _proto.showWinByWildAndScatter = function showWinByWildAndScatter() {
          this.winBg.active = true;
          if (this._cardData == 9) {
            this.node.getComponent(UITransform).priority = 103;
          }
          this.winBg.scale = v3(0.795, 0.765, 1);
          if (!this.wildBg.node.active) {
            this.wildBg.node.active = true;
            this.wildBg.node.setScale(v3(0.8, 0.73, 1));
            if (this.wildBg.findAnimation("animation")) {
              this.wildBg.setAnimation(0, "animation", true);
            }
          }
        };
        _proto.showWinByOther = function showWinByOther() {
          this.winBg.active = true;
          this.wildBg.node.active = false;
          this.winBg.scale = v3(0.795, 0.765, 1);
        };
        _proto.hideWinBg = function hideWinBg() {
          this.wildBg.node.setScale(v3(1, 1, 1));
          this.wildBg.node.active = false;
          this.wildBg.node.active = false;
          this.winBg.scale = v3(1, 1, 1);
        };
        _proto.setOneLine = function setOneLine(type, cardData) {
          this.winBg.active = true;
          if (cardData == 10 || cardData == 9) {
            this.wildBg.node.active = true;
            this.winBg.scale = v3(0.8, 0.78, 1);
            this.wildBg.node.setScale(v3(0.8, 0.73, 1));
            this.wildBg.setAnimation(0, "animation", true);
          } else {
            this.winBg.scale = v3(0.8, 0.78, 1);
            this.wildBg.node.setScale(v3(1, 1, 1));
            this.wildBg.node.active = false;
          }
          this.bottomLeftLine.active = false;
          this.bottomRightLine.active = false;
          this.topLeftLine.active = false;
          this.topRightLine.active = false;
          this.leftLine.active = false;
          this.rightLine.active = false;
          this.topLine.active = false;
          this.bottomLine.active = false;
          this.bottomRight.active = false;
          this.bottomLeft.active = false;
          this.topRight.active = false;
          this.topLeft.active = false;
          this.leftStraight.active = false;
          this.rightStraight.active = false;
          this.topStraight.active = false;
          this.bottomStraight.active = false;
          this.light.active = true;
          if (type == "left") {
            this.leftLine.active = true;
            this.leftStraight.active = true;
          } else if (type == "right") {
            this.rightLine.active = true;
            this.rightStraight.active = true;
          } else if (type == "top") {
            this.topLine.active = true;
            this.topStraight.active = true;
          } else if (type == "bottom") {
            this.bottomLine.active = true;
            this.bottomStraight.active = true;
          } else if (type == "topLeft") {
            //this.topLeftLine.active = true;
            this.leftLine.active = true;
            this.topLine.active = true;
            this.topStraight.active = true;
            this.leftStraight.active = true;
            //this.topLeft.active = true;
          } else if (type == "topRight") {
            //this.topRightLine.active = true;
            this.rightLine.active = true;
            this.topLine.active = true;
            this.topStraight.active = true;
            this.rightStraight.active = true;
            //this.topRight.active = true;
          } else if (type == "bottomLeft") {
            //this.bottomLeftLine.active = true;
            this.leftLine.active = true;
            this.bottomLine.active = true;
            this.bottomStraight.active = true;
            this.leftStraight.active = true;
            //this.bottomLeft.active = true;
          } else if (type == "bottomRight") {
            //this.bottomRightLine.active = true;
            this.rightLine.active = true;
            this.bottomLine.active = true;
            this.bottomStraight.active = true;
            this.rightStraight.active = true;
            //this.bottomRight.active = true;
          } else if (type == "topBottom") {
            this.topLine.active = true;
            this.bottomLine.active = true;
            this.topStraight.active = true;
            this.bottomStraight.active = true;
          } else if (type == "leftRight") {
            this.leftLine.active = true;
            this.rightLine.active = true;
            this.leftStraight.active = true;
            this.rightStraight.active = true;
          } else if (type == "topLeftBottom") {
            // this.bottomLeftLine.active = true;
            // this.topLeftLine.active = true;
            this.leftLine.active = true;
            this.topLine.active = true;
            this.bottomLine.active = true;
            this.leftStraight.active = true;
            this.topStraight.active = true;
            this.bottomStraight.active = true;
            // this.topLeft.active = true;
            // this.bottomLeft.active = true;
          } else if (type == "leftBottomRight") {
            // this.bottomLeftLine.active = true;
            // this.bottomRightLine.active = true;
            this.leftLine.active = true;
            this.rightLine.active = true;
            this.bottomLine.active = true;
            this.leftStraight.active = true;
            this.rightStraight.active = true;
            this.bottomStraight.active = true;
            // this.bottomLeft.active = true;
            // this.bottomRight.active = true;
          } else if (type == "bottomRightTop") {
            // this.bottomRightLine.active = true;
            // this.topRightLine.active = true;
            this.rightLine.active = true;
            this.topLine.active = true;
            this.bottomLine.active = true;
            this.rightStraight.active = true;
            this.topStraight.active = true;
            this.bottomStraight.active = true;
            // this.topRight.active = true;
            // this.bottomRight.active = true;
          } else if (type == "rightTopLeft") {
            // this.topLeftLine.active = true;
            // this.topRightLine.active = true;
            this.leftLine.active = true;
            this.rightLine.active = true;
            this.topLine.active = true;
            this.leftStraight.active = true;
            this.rightStraight.active = true;
            this.topStraight.active = true;
            // this.topLeft.active = true;
            // this.topRight.active = true;
          } else if (type == "all") {
            // this.bottomLeftLine.active = true;
            // this.bottomRightLine.active = true;
            // this.topLeftLine.active = true;
            // this.topRightLine.active = true;
            this.leftLine.active = true;
            this.rightLine.active = true;
            this.topLine.active = true;
            this.bottomLine.active = true;
            this.leftStraight.active = true;
            this.rightStraight.active = true;
            this.topStraight.active = true;
            this.bottomStraight.active = true;
            // this.bottomRight.active = true;
            // this.bottomLeft.active = true;
            // this.topRight.active = true;
            // this.topLeft.active = true;
          } else if (type == "none") {
            this.bottomLeftLine.active = false;
            this.bottomRightLine.active = false;
            this.topLeftLine.active = false;
            this.topRightLine.active = false;
            this.leftLine.active = false;
            this.rightLine.active = false;
            this.topLine.active = false;
            this.bottomLine.active = false;
            this.bottomRight.active = false;
            this.bottomLeft.active = false;
            this.topRight.active = false;
            this.topLeft.active = false;
            this.leftStraight.active = false;
            this.rightStraight.active = false;
            this.topStraight.active = false;
            this.bottomStraight.active = false;
          }
        };
        return slotEmojiRichesItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "winBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "winBgList", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wildBg", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "winSpine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSpine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "deleteSpine", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurList", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineList", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "light", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bottomLeftLine", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bottomRightLine", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "topLeftLine", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "topRightLine", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "leftLine", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "rightLine", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "topLine", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "bottomLine", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bottomRight", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "bottomLeft", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "topRight", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "topLeft", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "leftStraight", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "rightStraight", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "topStraight", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bottomStraight", [_dec29], {
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

System.register("chunks:///_virtual/slotEmojiRichesProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "eeba1unRgRB765zdD6BN/DO", "slotEmojiRichesProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotEmojiRichesGameEvent = exports('slotEmojiRichesGameEvent', /*#__PURE__*/function (slotEmojiRichesGameEvent) {
        slotEmojiRichesGameEvent["ENTER_ROOM"] = "enterRoom";
        slotEmojiRichesGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotEmojiRichesGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotEmojiRichesGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotEmojiRichesGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotEmojiRichesGameEvent["SELECT_BET"] = "selectBet";
        slotEmojiRichesGameEvent["START"] = "start";
        slotEmojiRichesGameEvent["CLICK_ITEM"] = "clickItem";
        slotEmojiRichesGameEvent["ERROR"] = "errorReturn";
        slotEmojiRichesGameEvent["END"] = "END";
        slotEmojiRichesGameEvent["SHOWNEXT"] = "showNext";
        slotEmojiRichesGameEvent["SHOWNEXTEND"] = "showNextEnd";
        slotEmojiRichesGameEvent["CHANGETOPODD"] = "changeTopOdd";
        slotEmojiRichesGameEvent["NOTICESHOWANI"] = "noticeShowAni";
        slotEmojiRichesGameEvent["NOTICEHIDEANI"] = "noticeHideAni";
        return slotEmojiRichesGameEvent;
      }({}));
      var slotEmojiRichesProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotEmojiRichesProxyMgr, _ProxyBase);
        function slotEmojiRichesProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotEmojiRichesGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotEmojiRiches.bet, MainManager.instance.getConfigManager().ProtocolSlotEmojiRiches.buyFree, MainManager.instance.getConfigManager().ProtocolSlotEmojiRiches.info];
          _this.result = null;
          _this.betList = [0.2, 2, 20];
          _this.betMaxCount = 10;
          _this.betRate = 10;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          _this.a = 0;
          return _this;
        }
        var _proto = slotEmojiRichesProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(slotEmojiRichesGameEvent.SELECT_BET);
        };
        _proto.setBetByCount = function setBetByCount(count) {
          for (var i = 0; i < this.betList.length; i++) {
            for (var j = 0; j < this.betMaxCount; j++) {
              var num = this.betList[i] * (j + 1) * this.betRate * 1000;
              if (num == count) {
                this.setBet(i, j);
              }
            }
          }
        };
        _proto.registSocketEvent = function registSocketEvent() {
          for (var _iterator = _createForOfIteratorHelperLoose(this.wsEvents), _step; !(_step = _iterator()).done;) {
            var event = _step.value;
            MainManager.instance.getEventManager().on(event, this.recvData, this);
          }
        };
        _proto.removeSocketEvent = function removeSocketEvent() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(this.wsEvents), _step2; !(_step2 = _iterator2()).done;) {
            var event = _step2.value;
            MainManager.instance.getEventManager().off(event, this.recvData, this);
          }
        };
        _proto.recvData = function recvData(data) {
          gts.Debug.Log("data", data);
          if (data.Code && data.Code != 0) {
            Common.showTip(i18n.errTip(data.Code), sys.isMobile);
            if (data.cmd == ConfigManager.ProtocolSlotEmojiRiches.bet) {
              this.emit(slotEmojiRichesGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotEmojiRiches.info:
              {
                this.emit(slotEmojiRichesGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotEmojiRiches.bet:
              {
                this.result = data.Data;
                // console.log(JSON.stringify(this.result));

                this.emit(slotEmojiRichesGameEvent.START);
                break;
              }
            case ConfigManager.ProtocolSlotEmojiRiches.buyFree:
              {
                this.result = data.Data;
                // console.log(JSON.stringify(this.result));

                this.emit(slotEmojiRichesGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotEmojiRichesProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotEmojiRichesProxyMgr;
      }(ProxyBase);
      var slotEmojiRichesProxy = exports('default', new slotEmojiRichesProxyMgr("slotEmojiRichesProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotEmojiRichesRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotEmojiRichesItem.ts', './slotEmojiRichesProxy.ts', './AudioManager.ts', './slotEmojiRichesDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, instantiate, v3, tween, UITransform, UIOpacity, Label, Component, slotEmojiRichesItem, slotEmojiRichesProxy, slotEmojiRichesGameEvent, AudioManager, slotEmojiRichesDef;
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
      Node = module.Node;
      sp = module.sp;
      instantiate = module.instantiate;
      v3 = module.v3;
      tween = module.tween;
      UITransform = module.UITransform;
      UIOpacity = module.UIOpacity;
      Label = module.Label;
      Component = module.Component;
    }, function (module) {
      slotEmojiRichesItem = module.slotEmojiRichesItem;
    }, function (module) {
      slotEmojiRichesProxy = module.default;
      slotEmojiRichesGameEvent = module.slotEmojiRichesGameEvent;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotEmojiRichesDef = module.slotEmojiRichesDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "b1ecd0AVs5ANp20g23inCVd", "slotEmojiRichesRun", undefined);
      //import { GPRoundBoxSprite } from "../../../script/tools/GPRoundBoxSprite";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CardState = {
        NORMAL: 0,
        DELAY: 1,
        RUNFAST: 2,
        RUNNORMAL: 3,
        RESULTFAST: 4,
        RESULTNORMAL: 5,
        END: 6,
        SHOWWIN: 7
      };
      var slotEmojiRichesRun = exports('slotEmojiRichesRun', (_dec = ccclass("slotEmojiRichesRun"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(sp.Skeleton), _dec12 = property(Node), _dec13 = property(sp.Skeleton), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesRun, _Component);
        function slotEmojiRichesRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveOdd", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_mask", _descriptor3, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "currentOdd", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "endOdd", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light6", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineMask", _descriptor11, _assertThisInitialized(_this));
          // @property(cc.Node)
          // winLight: cc.Node = null;
          // @property(cc.Prefab)
          // winLight_card: cc.Prefab = null;
          _initializerDefineProperty(_this, "wait_light", _descriptor12, _assertThisInitialized(_this));
          //全部期待光效
          _this._positionX = [-305, -183, -61, 61, 183, 305];
          //width:122
          _this._positionY = [441, 315, 189, 63, -63, -189, -315];
          //height:126
          //_positionY = [315, 189, 63, -63, -189, -315]; //height:126
          _this.lineMaskPostion = [-305, -183, -61, 61, 183, 305];
          _this._runType = "normal";
          _this._itemHeight = 126;
          _this._moveSteps = 100;
          _this._dataList = [[], [], [], [], [], []];
          _this._state = CardState.NORMAL;
          _this._result = [[], [], [], [], []];
          _this._isGetResult = false;
          _this._showLineIndex = 0;
          _this._scatterNum = 0;
          _this._normalGetResult = [false, false, false, false, false];
          _this._time1 = 0.05;
          _this._time2 = 0.1;
          _this._time3 = 0.15;
          _this._time4 = 0.2;
          _this._time5 = 0.25;
          _this._resultTime = [0.4, 0.6, 0.8, 1, 1.2, 1.4];
          //_resultTime = [0.4, 0.5, 0.7, 0.8, 0.9, 1];
          _this._moveNormalSteps = [100, 100, 100, 100, 100, 100];
          _this._run_mask = null;
          _this._getResultNum = 0;
          _this._prizeAmount = 0;
          _this._winHorizontalList = [];
          //获胜的横向列表索引
          _this._winShowIndex = 0;
          //获胜展示索引
          _this._winShowTime = 0;
          //获胜动画轮流展示时间
          _this._winShowIng = false;
          //获胜动画是否在展示
          _this._winShowBtn = true;
          //是否允许展示获胜动画
          _this._winStopTime = 0;
          return _this;
        }
        var _proto = slotEmojiRichesRun.prototype;
        //展示到最后一个停顿0.5s
        _proto.start = function start() {
          this.node.removeAllChildren();
        };
        _proto.initPage = function initPage(data) {
          var _this2 = this;
          if (data && data.length == 6) {
            //this.node.getComponent(cc.Mask).enabled = false;
            data.map(function (item, index) {
              item.map(function (item1, index1) {
                var node = instantiate(_this2.pre_card);
                var com = node.getComponent(slotEmojiRichesItem);
                node.parent = _this2.node;
                com["cardData"] = item1;
                com.initCard(item1, index, index1, true, false, true);
                if (item1 == 9) {
                  node.getComponent(slotEmojiRichesItem).showWinByWildAndScatter();
                }
                _this2._dataList[index].push(com);
                node.setPosition(v3(_this2._positionX[index], _this2._positionY[index1 + 1]));
              });
            });
          }
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.run = function run(type) {
          var _this3 = this;
          //this.node.getComponent(cc.Mask).enabled = true;
          this._winHorizontalList = [];
          this._winShowIndex = 0;
          this._winShowTime = 0;
          this._winShowIng = false;
          this._winShowBtn = true;
          this._runType = type;

          //每列补充一个
          this._dataList.map(function (item, index) {
            for (var i = 0; i < 7; i++) {
              if (item.length != 7) {
                var cardData = Math.floor(Math.random() * 7) + 1;
                var newItem = instantiate(_this3.pre_card);
                var com = newItem.getComponent(slotEmojiRichesItem);
                newItem.parent = _this3.node;
                com["cardData"] = cardData;
                com.initCard(cardData, index, i, true);
                _this3._dataList[index].unshift(com);
                newItem.setPosition(v3(_this3._positionX[index], _this3._positionY[0]));
              }
              item[i]["type"] = null;
              item[i]["lightType"] = null;
              item[i].getComponent(slotEmojiRichesItem).removeWinShow();
            }
          });
          this.scheduleOnce(function () {
            // console.log(
            //     this.node.getPosition().x,
            //     this.node.getPosition().y,
            //     this.node.getScale().x,
            //     this.node.getScale().y,
            //     "5-0",
            //     this._dataList[5][0].node.getPosition().x,
            //     this.node.getComponent(cc.UITransform).width,
            //     this.node.getComponent(cc.UITransform).height,
            //     "run"
            // );
            _this3._runType == "fast" ? "" : _this3.setState(CardState.RUNNORMAL);
          }, 0.2);
        };
        _proto.getResult = function getResult(data, showLineIndex, prizeAmount) {
          var _this4 = this;
          if (showLineIndex === void 0) {
            showLineIndex = 0;
          }
          this._result = data;
          this._showLineIndex = showLineIndex;
          this._prizeAmount = prizeAmount;
          if (this._showLineIndex != 0) {
            this._resultTime.map(function (item, index) {
              if (index >= _this4._showLineIndex && _this4._resultTime[index - 1]) {
                _this4._resultTime[index] = _this4._resultTime[index - 1] + 1.5;
              }
            });
          }
          this._isGetResult = true;
          this.scheduleOnce(function () {
            _this4._runType == "fast" ? _this4.setState(CardState.RESULTFAST) : "";
          }, 0.1);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this5 = this;
          if (this._state == CardState.RUNNORMAL) {
            this._dataList[currentIndex].map(function (item1, index1) {
              item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this5._moveSteps, 0));
              if (item1.node.getPosition().y <= -(330 + _this5._itemHeight / 2)) {
                if (_this5._isGetResult) {
                  _this5.setState(CardState.RESULTNORMAL);
                } else {
                  //随机重新生成卡片以及设置位置
                  var cardData = Math.floor(Math.random() * 7) + 1;
                  item1.node.setPosition(_this5._positionX[currentIndex], item1.node.getPosition().y + _this5._itemHeight * 7);
                  item1["cardData"] = cardData;
                  item1.initCard(cardData, currentIndex, index1, false);
                }
              }
            });
          }
        };
        _proto.resultOne = function resultOne(currentIndex) {
          var _this6 = this;
          if (!this._normalGetResult[currentIndex]) {
            this._moveNormalSteps[currentIndex] -= 10;
            if (this._moveNormalSteps[currentIndex] <= 60) {
              this._moveNormalSteps[currentIndex] = 60;
            }
            if (this._dataList[currentIndex]) {
              this._dataList[currentIndex].map(function (item, index) {
                item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this6._moveNormalSteps[currentIndex], 0));
                if (item.node.getPosition().y <= -(330 + _this6._itemHeight / 2)) {
                  var cardData = null;
                  if (index == 0) {
                    cardData = Math.floor(Math.random() * 7) + 1;
                  } else {
                    cardData = _this6._result[currentIndex][index - 1];
                  }
                  item.node.setPosition(_this6._positionX[currentIndex], item.node.getPosition().y + _this6._itemHeight * 7);
                  item["cardData"] = cardData;
                  //此时有7个item
                  if (_this6._resultTime[currentIndex] > 0.7) {
                    item.initCard(Math.floor(Math.random() * 7) + 1, currentIndex, index - 1, false);
                  } else {
                    item.initCard(cardData, currentIndex, index - 1, true);
                  }
                }
                if (index == _this6._dataList[currentIndex].length - 1 && _this6._resultTime[currentIndex] <= 0 && item.node.getPosition().y <= -250) {
                  slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.spinActiveLoop);
                  _this6._normalGetResult[currentIndex] = true;
                  _this6._moveNormalSteps[currentIndex] = 0;
                  _this6._dataList[currentIndex].map(function (item, index) {
                    if (item && item["cardData"]) {
                      tween(item.node).to(0.04, {
                        position: v3(_this6._positionX[currentIndex], _this6._positionY[index], 0)
                      }).by(0.02, {
                        position: v3(0, 8)
                      }).by(0.02, {
                        position: v3(0, -8)
                      }).by(0.02, {
                        position: v3(0, 5)
                      }).by(0.02, {
                        position: v3(0, -5)
                      }).call(function () {
                        // if (currentIndex != 0) {
                        if (_this6._showLineIndex != 0 && _this6._showLineIndex <= currentIndex + 1) {
                          //获取当前以及当前之前的线的scatter
                          for (var i = 0; i < currentIndex + 1; i++) {
                            _this6._dataList[i].map(function (_data, index1) {
                              if (_data["cardData"] && _data["cardData"] == 9) {
                                //此时一定有7个
                                _data.node.getComponent(slotEmojiRichesItem).scatteWin();
                              }
                            });
                          }
                          if (index == _this6._dataList[currentIndex].length - 1) {
                            _this6.lightOpacitySet();
                            _this6.scheduleOnce(function () {
                              _this6.hideLight(currentIndex);
                              _this6.scheduleOnce(function () {
                                _this6.showLight(currentIndex + 1);
                              }, 0.3);
                            }, 0.2);
                          }
                        }
                        // }
                      }).start();
                    }
                  });
                  if (currentIndex == 5) {
                    if (_this6._showLineIndex != 0) {
                      if (_this6.node.getChildByName("line0")) {
                        _this6.node.getChildByName("line0").active = false;
                      }
                      if (_this6.node.getChildByName("line1")) {
                        _this6.node.getChildByName("line1").active = false;
                      }
                      if (_this6.node.getChildByName("line2")) {
                        _this6.node.getChildByName("line2").active = false;
                      }
                      if (_this6.node.getChildByName("line3")) {
                        _this6.node.getChildByName("line3").active = false;
                      }
                      if (_this6.node.getChildByName("line4")) {
                        _this6.node.getChildByName("line4").active = false;
                      }
                      if (_this6.node.getChildByName("line5")) {
                        _this6.node.getChildByName("line5").active = false;
                      }
                      //获取所有线的scatter
                      if (_this6._scatterNum < 2) {
                        _this6.scheduleOnce(function () {
                          _this6._dataList.map(function (item) {
                            item.map(function (item1) {
                              if (item1["cardData"] && item1["cardData"] == 9) {
                                item1.node.getComponent(slotEmojiRichesItem).scatteIdle();
                              }
                            });
                          });
                        }, 0.2);
                      }
                      _this6.scheduleOnce(function () {
                        //this.hideLight(5);
                        _this6.setState(CardState.END);
                      }, 0.8);
                    } else {
                      _this6.scheduleOnce(function () {
                        _this6.setState(CardState.END);
                      }, 0.1);
                    }
                  }
                }
              });
            }
          }
        }
        //scatter获胜动画
        ;

        _proto.scatterWin = function scatterWin() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"] == 9) {
                item1.getComponent(slotEmojiRichesItem).scatteWin();
              }
            });
          });
        }
        //scatter正常状态
        ;

        _proto.scatteIdle = function scatteIdle() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"] == 9) {
                item1.getComponent(slotEmojiRichesItem).scatteIdle();
              }
            });
          });
        }

        //判断是消失还是获胜
        ;

        _proto.changeItem = function changeItem(data) {
          var _this7 = this;
          //this.node.getComponent(cc.Mask).enabled = true;

          // this._dataList.map((item, index) => {
          //     item.map((item1, index1) => {
          //         if (this._prizeAmount == 0) {
          //             if (item1["cardData"] != 9 && this.winLight.getChildByName(index + "-" + index1)) {
          //                 this.winLight.getChildByName(index + "-" + index1).active = false;
          //                 this.winLight.getChildByName(index + "-" + index1).getChildByName("light").active = true;
          //             }
          //         } else {
          //             if (item1["cardData"] != 9 && item1["cardData"] != 10 && this.winLight.getChildByName(index + "-" + index1)) {
          //                 this.winLight.getChildByName(index + "-" + index1).active = false;
          //                 this.winLight.getChildByName(index + "-" + index1).getChildByName("light").active = true;
          //             }
          //         }
          //     });
          // });

          if (!this.node.getChildByName("run_mask")) {
            this._run_mask = instantiate(this.run_mask);
            this._run_mask.getComponent(UITransform).priority = 99;
            this._run_mask.name = "run_mask";
            this._run_mask.parent = this.node;
          }
          this._run_mask.opacity = 0;
          this._run_mask.active = true;
          tween(this._run_mask.getComponent(UIOpacity)).to(0.1, {
            opacity: 100
          }).start();
          data.prizeIdx.map(function (item) {
            if (_this7._dataList[item.parentIndex][item.childIndex]) {
              _this7._dataList[item.parentIndex][item.childIndex]["type"] = "keep";
            }
          });
          data.prizeNum.map(function (item) {
            if (_this7._dataList[item.parentIndex][item.childIndex]) {
              //存储获胜索引
              if (_this7._winHorizontalList.indexOf(item.childIndex) < 0) {
                _this7._winHorizontalList.push(item.childIndex);
                _this7._winHorizontalList.sort();
              }
              _this7._winShowBtn = false;
              _this7._dataList[item.parentIndex][item.childIndex]["type"] = "win";
            }
          });
          //设置光
          for (var i in data.lineList) {
            if (this._dataList[data.lineList[i].parentIndex][data.lineList[i].childIndex]) {
              this.setLight(this._dataList[data.lineList[i].parentIndex][data.lineList[i].childIndex], data.lineList[i]);
            }
          }
          var isPlayDelete = false;
          var isPlayWin = false;
          var isWildWin = false;
          this.scheduleOnce(function () {
            _this7._dataList.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1["lightType"]) {
                  item1.setOneLine(item1["lightType"], item1["cardData"]);
                }
                if (item1["type"] == "win") {
                  if (item1["cardData"] == 10 && !isWildWin) {
                    slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.symWildActivate);
                  }
                  item1.node.getComponent(slotEmojiRichesItem).winItem();
                  if (item1["cardData"] == 9 || item1["cardData"] == 10) {
                    item1.showWinByWildAndScatter();
                  } else {
                    item1.showWinByOther();
                  }
                  if (!isPlayWin) {
                    isPlayWin = true;
                    slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.symWinHighlightIdle);
                  }
                } else if (item1["type"] == "keep") {
                  item1.node.getComponent(slotEmojiRichesItem).keepItem();
                  if (item1["cardData"] == 9 || item1["cardData"] == 10) {
                    item1.showWinByWildAndScatter();
                  } else {
                    item1.showWinByOther();
                  }
                } else {
                  item1["type"] = "delete";
                  item1.node.getComponent(slotEmojiRichesItem).deleteItem();
                  if (!isPlayDelete) {
                    isPlayDelete = true;
                    slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.symShrink);
                  }
                }
              });
            });
            _this7.scheduleOnce(function () {
              _this7._run_mask.active = false;
              slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.SHOWNEXT);
            }, 0.7);
          }, 0.2);
        };
        _proto.showLight = function showLight(index) {
          var _this8 = this;
          if (index == 1 && !this.light2.node.active) {
            this.light2.node.active = true;
            this.light2.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line1")) {
              this.node.getChildByName("line1").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line1").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var node = instantiate(this.lineMask);
              node.name = "line0";
              node.parent = this.node;
              node.setPosition(v3(this.lineMaskPostion[0], 0));
              node.active = true;
              node.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node = instantiate(this.lineMask);
              _node.name = "line2";
              _node.parent = this.node;
              _node.setPosition(v3(this.lineMaskPostion[2], 0));
              _node.active = true;
              _node.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node2 = instantiate(this.lineMask);
              _node2.name = "line3";
              _node2.parent = this.node;
              _node2.setPosition(v3(this.lineMaskPostion[3], 0));
              _node2.active = true;
              _node2.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node3 = instantiate(this.lineMask);
              _node3.name = "line4";
              _node3.parent = this.node;
              _node3.setPosition(v3(this.lineMaskPostion[4], 0));
              _node3.active = true;
              _node3.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node4 = instantiate(this.lineMask);
              _node4.name = "line5";
              _node4.parent = this.node;
              _node4.setPosition(v3(this.lineMaskPostion[5], 0));
              _node4.active = true;
              _node4.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line5").active = true;
            }
            var _audioId = 0;
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinStart, function (id) {
              _audioId = id;
              _this8.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId);
              }, 1.2);
            });
          } else if (index == 2 && !this.light3.node.active) {
            this.light3.node.active = true;
            this.light3.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line2")) {
              this.node.getChildByName("line2").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line2").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node5 = instantiate(this.lineMask);
              _node5.name = "line0";
              _node5.parent = this.node;
              _node5.setPosition(v3(this.lineMaskPostion[0], 0));
              _node5.active = true;
              _node5.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node6 = instantiate(this.lineMask);
              _node6.name = "line1";
              _node6.parent = this.node;
              _node6.setPosition(v3(this.lineMaskPostion[1], 0));
              _node6.active = true;
              _node6.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node7 = instantiate(this.lineMask);
              _node7.name = "line3";
              _node7.parent = this.node;
              _node7.setPosition(v3(this.lineMaskPostion[3], 0));
              _node7.active = true;
              _node7.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node8 = instantiate(this.lineMask);
              _node8.name = "line4";
              _node8.parent = this.node;
              _node8.setPosition(v3(this.lineMaskPostion[4], 0));
              _node8.active = true;
              _node8.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node9 = instantiate(this.lineMask);
              _node9.name = "line5";
              _node9.parent = this.node;
              _node9.setPosition(v3(this.lineMaskPostion[5], 0));
              _node9.active = true;
              _node9.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line5").active = true;
            }
            var _audioId2 = 0;
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinStart, function (id) {
              _audioId2 = id;
              _this8.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId2);
              }, 1.2);
            });
          } else if (index == 3 && !this.light4.node.active) {
            this.light4.node.active = true;
            this.light4.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line3")) {
              this.node.getChildByName("line3").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line3").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node10 = instantiate(this.lineMask);
              _node10.name = "line0";
              _node10.parent = this.node;
              _node10.setPosition(v3(this.lineMaskPostion[0], 0));
              _node10.active = true;
              _node10.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node11 = instantiate(this.lineMask);
              _node11.name = "line1";
              _node11.parent = this.node;
              _node11.setPosition(v3(this.lineMaskPostion[1], 0));
              _node11.active = true;
              _node11.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node12 = instantiate(this.lineMask);
              _node12.name = "line2";
              _node12.parent = this.node;
              _node12.setPosition(v3(this.lineMaskPostion[2], 0));
              _node12.active = true;
              _node12.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node13 = instantiate(this.lineMask);
              _node13.name = "line4";
              _node13.parent = this.node;
              _node13.setPosition(v3(this.lineMaskPostion[4], 0));
              _node13.active = true;
              _node13.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node14 = instantiate(this.lineMask);
              _node14.name = "line5";
              _node14.parent = this.node;
              _node14.setPosition(v3(this.lineMaskPostion[5], 0));
              _node14.active = true;
              _node14.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line5").active = true;
            }
            var _audioId3 = 0;
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinStart, function (id) {
              _audioId3 = id;
              _this8.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId3);
              }, 1.2);
            });
          } else if (index == 4 && !this.light5.node.active) {
            this.light5.node.active = true;
            this.light5.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line4")) {
              this.node.getChildByName("line4").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line4").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node15 = instantiate(this.lineMask);
              _node15.name = "line0";
              _node15.parent = this.node;
              _node15.setPosition(v3(this.lineMaskPostion[0], 0));
              _node15.active = true;
              _node15.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node16 = instantiate(this.lineMask);
              _node16.name = "line1";
              _node16.parent = this.node;
              _node16.setPosition(v3(this.lineMaskPostion[1], 0));
              _node16.active = true;
              _node16.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node17 = instantiate(this.lineMask);
              _node17.name = "line2";
              _node17.parent = this.node;
              _node17.setPosition(v3(this.lineMaskPostion[2], 0));
              _node17.active = true;
              _node17.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node18 = instantiate(this.lineMask);
              _node18.name = "line3";
              _node18.parent = this.node;
              _node18.setPosition(v3(this.lineMaskPostion[3], 0));
              _node18.active = true;
              _node18.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node19 = instantiate(this.lineMask);
              _node19.name = "line5";
              _node19.parent = this.node;
              _node19.setPosition(v3(this.lineMaskPostion[5], 0));
              _node19.active = true;
              _node19.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line5").active = true;
            }
            var _audioId4 = 0;
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinStart, function (id) {
              _audioId4 = id;
              _this8.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId4);
              }, 1.2);
            });
          } else if (index == 5 && !this.light6.node.active) {
            this.light6.node.active = true;
            this.light6.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line5")) {
              this.node.getChildByName("line5").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line5").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node20 = instantiate(this.lineMask);
              _node20.name = "line0";
              _node20.parent = this.node;
              _node20.setPosition(v3(this.lineMaskPostion[0], 0));
              _node20.active = true;
              _node20.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node21 = instantiate(this.lineMask);
              _node21.name = "line1";
              _node21.parent = this.node;
              _node21.setPosition(v3(this.lineMaskPostion[1], 0));
              _node21.active = true;
              _node21.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node22 = instantiate(this.lineMask);
              _node22.name = "line2";
              _node22.parent = this.node;
              _node22.setPosition(v3(this.lineMaskPostion[2], 0));
              _node22.active = true;
              _node22.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node23 = instantiate(this.lineMask);
              _node23.name = "line3";
              _node23.parent = this.node;
              _node23.setPosition(v3(this.lineMaskPostion[3], 0));
              _node23.active = true;
              _node23.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node24 = instantiate(this.lineMask);
              _node24.name = "line4";
              _node24.parent = this.node;
              _node24.setPosition(v3(this.lineMaskPostion[4], 0));
              _node24.active = true;
              _node24.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").getComponent(UIOpacity).opacity = 200;
              this.node.getChildByName("line4").active = true;
            }
            var _audioId5 = 0;
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinStart, function (id) {
              _audioId5 = id;
              _this8.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId5);
              }, 1.2);
            });
          }
        };
        _proto.hideLight = function hideLight(index) {
          index == 1 ? this.light2.node.active = false : index == 2 ? this.light3.node.active = false : index == 3 ? this.light4.node.active = false : index == 4 ? this.light5.node.active = false : index == 5 ? this.light6.node.active = false : "";
        }
        //期待状态下遮罩层透明度设置
        ;

        _proto.lightOpacitySet = function lightOpacitySet() {
          if (this.node.getChildByName("line0")) {
            tween(this.node.getChildByName("line0").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
          if (this.node.getChildByName("line1")) {
            tween(this.node.getChildByName("line1").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
          if (this.node.getChildByName("line2")) {
            tween(this.node.getChildByName("line2").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
          if (this.node.getChildByName("line3")) {
            tween(this.node.getChildByName("line3").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
          if (this.node.getChildByName("line4")) {
            tween(this.node.getChildByName("line4").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
          if (this.node.getChildByName("line5")) {
            tween(this.node.getChildByName("line5").getComponent(UIOpacity)).to(0.2, {
              opacity: 0
            }).start();
          }
        };
        _proto.setLight = function setLight(item, lightData) {
          if (lightData.left && !lightData.right && !lightData.top && !lightData.bottom) {
            item["lightType"] = "left";
          } else if (!lightData.left && lightData.right && !lightData.top && !lightData.bottom) {
            item["lightType"] = "right";
          } else if (!lightData.left && !lightData.right && lightData.top && !lightData.bottom) {
            item["lightType"] = "top";
          } else if (!lightData.left && !lightData.right && !lightData.top && lightData.bottom) {
            item["lightType"] = "bottom";
          } else if (lightData.left && !lightData.right && lightData.top && !lightData.bottom) {
            item["lightType"] = "topLeft";
          } else if (!lightData.left && lightData.right && lightData.top && !lightData.bottom) {
            item["lightType"] = "topRight";
          } else if (lightData.left && !lightData.right && !lightData.top && lightData.bottom) {
            item["lightType"] = "bottomLeft";
          } else if (!lightData.left && lightData.right && !lightData.top && lightData.bottom) {
            item["lightType"] = "bottomRight";
          } else if (!lightData.left && !lightData.right && lightData.top && lightData.bottom) {
            item["lightType"] = "topBottom";
          } else if (lightData.left && lightData.right && !lightData.top && !lightData.bottom) {
            item["lightType"] = "leftRight";
          } else if (lightData.left && !lightData.right && lightData.top && lightData.bottom) {
            item["lightType"] = "topLeftBottom";
          } else if (lightData.left && lightData.right && !lightData.top && lightData.bottom) {
            item["lightType"] = "leftBottomRight";
          } else if (!lightData.left && lightData.right && lightData.top && lightData.bottom) {
            item["lightType"] = "bottomRightTop";
          } else if (lightData.left && lightData.right && lightData.top && !lightData.bottom) {
            item["lightType"] = "rightTopLeft";
          } else if (lightData.left && lightData.right && lightData.top && lightData.bottom) {
            item["lightType"] = "all";
          } else if (!lightData.left && !lightData.right && !lightData.top && !lightData.bottom) {
            item["lightType"] = "none";
          }
        }
        //新图标展示
        ;

        _proto.renderNewItem = function renderNewItem(newResult) {
          var _this9 = this;
          this._scatterNum = newResult.scatterNum;
          if (this._scatterNum >= 2) {
            this._run_mask.active = true;
            this.wait_light.node.active = true;
            this.wait_light.setAnimation(0, "idle", true);
            slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.NOTICESHOWANI);
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.heartbeatNoise);

            //获取所有线的scatter
            this._dataList.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1["cardData"] && item1["cardData"] == 9) {
                  item1.node.getComponent(slotEmojiRichesItem).scatteWin();
                }
              });
            });
          }
          this.scheduleOnce(function () {
            _this9.wait_light.node.active = false;
            slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.NOTICEHIDEANI);
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.heartbeatSlowdrop);
            _this9._run_mask.active = false;

            //获取所有线的scatter
            _this9._dataList.map(function (item) {
              item.map(function (item1) {
                if (item1["cardData"] && item1["cardData"] == 9) {
                  item1.node.getComponent(slotEmojiRichesItem).scatteIdle();
                }
              });
            });
            //this.node.getComponent(cc.Mask).enabled = true;
            _this9._dataList.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1["type"] == "delete") {
                  var cardData = newResult.result[index][index1];
                  item1["cardData"] = cardData;
                  if (cardData == 9 || cardData == 10) {
                    item1.node.getComponent(slotEmojiRichesItem).initCard(cardData, index, index1, true);
                  } else {
                    item1.node.getComponent(slotEmojiRichesItem).initCard(cardData, index, index1, true, true);
                  }
                  item1.node.setPosition(v3(_this9._positionX[index], _this9._positionY[0] + 10));
                } else {
                  var _cardData = newResult.result[index][index1];
                  if (_cardData) {
                    item1["cardData"] = _cardData;
                  }
                }
              });
            });
            _this9.scheduleOnce(function () {
              _this9._dataList.map(function (item, index) {
                item.map(function (item1, index1) {
                  if (item1.node.getPosition().y != _this9._positionY[index1 + 1]) {
                    tween(item1.node).delay(_this9._runType == "fast" ? 0 : (5 - index) / 10 + (5 - index1) / 15).to(0.1, {
                      position: v3(_this9._positionX[index], _this9._positionY[index1 + 1])
                    }).by(0.02, {
                      position: v3(0, 8)
                    }).by(0.02, {
                      position: v3(0, -8)
                    }).by(0.02, {
                      position: v3(0, 5)
                    }).by(0.02, {
                      position: v3(0, -5)
                    }).call(function () {
                      if ((item1["cardData"] == 9 || item1["cardData"] == 10) && item1["type"] != "win") {
                        item1["type"] = "keep";
                        item1.showWinByWildAndScatter();
                      }
                    }).start();
                  }
                });
              });
              _this9._winShowBtn = true;
              _this9._winShowIndex = 0;
              _this9._winShowTime = 0;
              _this9._winShowIng = false;
              _this9.scheduleOnce(function () {
                //this.node.getComponent(cc.Mask).enabled = false;
                slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.SHOWNEXTEND);
              }, 0.8);
            }, 0.1);
          }, this._scatterNum >= 2 ? 1.5 : 0);
        }

        //中奖后重置item
        ;

        _proto.resetItem = function resetItem() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              item1.node.getComponent(slotEmojiRichesItem).resetItem();
            });
          });
        }
        //多倍数倍数移动
        ;

        _proto.wildMove = function wildMove(isFree) {
          var _this10 = this;
          var num = 0;
          this._dataList.map(function (item, index) {
            item.map(function (item1, index1) {
              if (item1["cardData"] == 10) {
                item1.node.getComponent(slotEmojiRichesItem).wildWin();
                var odd = instantiate(_this10.moveOdd);
                odd.getComponent(Label).spacingX = -20;
                odd.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y + 10, 0));
                odd.getComponent(UITransform).priority = 120;
                odd.name = "odd";
                odd.setScale(v3(0, 0, 1));
                odd.parent = _this10.node;
                odd.active = true;
                num += 2;
                tween(odd).to(0.2, {
                  scale: v3(1, 1, 1)
                }).delay(0.1).to(0.2, {
                  position: v3(0, 0, 0)
                }).call(function () {
                  odd.destroyFromParent();
                }).start();
              }
            });
          });
          if (!isFree) {
            this.scheduleOnce(function () {
              _this10.endOdd.getChildByName("odd").getComponent(Label).string = "x" + num;
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.multiExpandSingle);
              _this10.endOdd.setScale(v3(0, 0, 0));
              _this10.endOdd.getComponent(UIOpacity).opacity = 255;
              _this10.endOdd.active = true;
              tween(_this10.endOdd).to(0.2, {
                scale: v3(1, 1, 1)
              }).delay(0.3).call(function () {
                slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.multiFly);
              }).to(0.2, {
                position: v3(0, 20, 0)
              }).to(0.1, {
                scale: v3(1.5, 1.5, 1)
              }).call(function () {
                slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.multiStackSum);
                _this10.endOdd.setPosition(v3(0, 460, 0));
                _this10.endOdd.active = false;
                _this10.endOdd.getComponent(UIOpacity).opacity = 255;
              }).start();
              tween(_this10.endOdd.getComponent(UIOpacity)).delay(0.7).to(0.1, {
                opacity: 0
              }).start();
            }, 0.4);
          }
        };
        _proto.update = function update(dt) {
          var _this11 = this;
          if (this._winHorizontalList.length > 0 && this._winShowTime < 0.2 && this._winStopTime <= 0) {
            this._winShowTime += dt;
            if (!this._winShowIng && this._winShowBtn) {
              this._dataList.map(function (item) {
                item.map(function (item1, index1) {
                  if (item1["type"] == "win" && index1 == _this11._winHorizontalList[_this11._winShowIndex]) {
                    item1.node.getComponent(slotEmojiRichesItem).turnShowItem();
                  }
                });
              });
            }
            this._winShowIng = true;
            if (this._winShowTime >= 0.2) {
              if (this._winHorizontalList[this._winShowIndex + 1]) {
                this._winShowIndex += 1;
              } else {
                this._winShowIndex = 0;
                this._winStopTime = 0.5;
              }
              this._winShowIng = false;
              this._winShowTime = 0;
            }
          }
          if (this._winStopTime > 0) {
            this._winStopTime -= dt;
          }
          switch (this._state) {
            case CardState.RESULTFAST:
              {
                // console.log(
                //     this.node.getPosition().x,
                //     this.node.getPosition().y,
                //     this.node.getScale().x,
                //     this.node.getScale().y,
                //     "5-0",
                //     this._dataList[5][0].node.getPosition().x,
                //     this.node.getComponent(cc.UITransform).width,
                //     this.node.getComponent(cc.UITransform).height,
                //     "RESULTFAST"
                // );
                this._dataList.map(function (item, index) {
                  item.map(function (item1, index1) {
                    item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this11._moveSteps, 0));
                    if (item1.node.getPosition().y <= -(315 + _this11._itemHeight)) {
                      item1.node.setPosition(v3(_this11._positionX[index], item1.node.getPosition().y + _this11._itemHeight * _this11._dataList[index].length));
                      _this11._getResultNum += 1;
                      if (index1 != 0) {
                        item1["cardData"] = _this11._result[index][index1 - 1];
                        //此时有7个item
                        item1.initCard(item1["cardData"], index, index1 - 1, true);
                      }
                    }
                    if (index == 5 && index1 == 6 && item1.node.getPosition().y < -250 && _this11._getResultNum >= 42) {
                      _this11.setState(CardState.END);
                    }
                  });
                });
                break;
              }
            case CardState.RUNNORMAL:
              {
                this.runOne(0);
                this._time1 > 0 ? this._time1 -= dt : "";
                this._time2 > 0 ? this._time2 -= dt : "";
                this._time3 > 0 ? this._time3 -= dt : "";
                this._time4 > 0 ? this._time4 -= dt : "";
                this._time5 > 0 ? this._time5 -= dt : "";
                if (this._time1 <= 0) {
                  this.runOne(1);
                }
                if (this._time2 <= 0) {
                  this.runOne(2);
                }
                if (this._time3 <= 0) {
                  this.runOne(3);
                }
                if (this._time4 <= 0) {
                  this.runOne(4);
                }
                if (this._time5 <= 0) {
                  this.runOne(5);
                }
                break;
              }
            case CardState.RESULTNORMAL:
              {
                this.resultOne(0);
                this.resultOne(1);
                this.resultOne(2);
                this.resultOne(3);
                this.resultOne(4);
                this.resultOne(5);
                this._resultTime[0] > 0 ? this._resultTime[0] -= dt : "";
                this._resultTime[1] > 0 ? this._resultTime[1] -= dt : "";
                this._resultTime[2] > 0 ? this._resultTime[2] -= dt : "";
                this._resultTime[3] > 0 ? this._resultTime[3] -= dt : "";
                this._resultTime[4] > 0 ? this._resultTime[4] -= dt : "";
                this._resultTime[5] > 0 ? this._resultTime[5] -= dt : "";
                break;
              }
            case CardState.END:
              {
                if (this._runType == "fast") {
                  this._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (item1 && item1["cardData"]) {
                        tween(item1.node).to(0.04, {
                          position: v3(_this11._positionX[index], _this11._positionY[index1])
                        }).by(0.02, {
                          position: v3(0, 5)
                        }).by(0.02, {
                          position: v3(0, -5)
                        }).by(0.02, {
                          position: v3(0, 3)
                        }).by(0.02, {
                          position: v3(0, -3)
                        }).start();
                      }
                    });
                  });
                  slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.spinStopQuick);
                }
                // console.log(
                //     this.node.getPosition().x,
                //     this.node.getPosition().y,
                //     this.node.getScale().x,
                //     this.node.getScale().y,
                //     "5-0",
                //     this._dataList[5][0].node.getPosition().x,
                //     this.node.getComponent(cc.UITransform).width,
                //     this.node.getComponent(cc.UITransform).height,
                //     "END"
                // );

                this._normalGetResult = [false, false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.05;
                this._time2 = 0.1;
                this._time3 = 0.15;
                this._time4 = 0.2;
                this._time5 = 0.25;
                this._resultTime = [0.4, 0.6, 0.8, 1, 1.2, 1.4];
                this._isGetResult = false;
                this._getResultNum = 0;
                this.setState(CardState.NORMAL);
                slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.END);
                slotEmojiRichesProxy.emit(slotEmojiRichesGameEvent.NOTICEHIDEANI);
                this._dataList.map(function (item, index) {
                  var node = item[0].node;
                  node.destroyFromParent();
                  item.splice(0, 1);
                });
                //删除多余的
                this.scheduleOnce(function () {
                  //this.node.getComponent(cc.Mask).enabled = false;
                  _this11._dataList.map(function (item, index) {
                    item.map(function (item1, index1) {
                      if (_this11._prizeAmount > 0) {
                        if (item1["cardData"] && (item1["cardData"] == 9 || item1["cardData"] == 10)) {
                          item1.showWinByWildAndScatter();
                        }
                      } else {
                        if (item1["cardData"] && item1["cardData"] == 9) {
                          item1.showWinByWildAndScatter();
                        }
                      }
                    });
                  });
                }, 0.05);
                break;
              }
          }
        };
        return slotEmojiRichesRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveOdd", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "run_mask", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentOdd", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "endOdd", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "light3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "light4", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "light5", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "light6", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lineMask", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "wait_light", [_dec13], {
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

System.register("chunks:///_virtual/slotEmojiRichesScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './MainManager.ts', './slotEmojiRichesProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, assetManager, instantiate, sys, v3, Component, NetManager, ViewManager, Common, MainManager, slotEmojiRichesProxy;
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
      assetManager = module.assetManager;
      instantiate = module.instantiate;
      sys = module.sys;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      slotEmojiRichesProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "c7bbb6icf5DQ6epr1ilAHM4", "slotEmojiRichesScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotEmojiRichesScene = exports('default', (_dec = ccclass("slotEmojiRichesScene"), _dec2 = menu("game/slotEmojiRiches/slotEmojiRichesScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesScene, _Component);
        function slotEmojiRichesScene() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_room", _descriptor, _assertThisInitialized(_this));
          _this.node_desk = null;
          _this.node_room = null;
          return _this;
        }
        var _proto = slotEmojiRichesScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          var _this2 = this;
          assetManager.loadBundle("slotEmojiRichesGame", function () {
            var node = instantiate(_this2.pre_room);
            if (!sys.isMobile) {
              node.scale = v3(750 / 1334, 750 / 1334, 1);
            } else {
              node.angle = 90;
            }
            _this2.node.addChild(node);
          });
        };
        _proto.init = function init() {
          this.reset();
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
          slotEmojiRichesProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotEmojiRichesProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return slotEmojiRichesScene;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_room", [_dec3], {
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

System.register("chunks:///_virtual/slotEmojiRichesSetAuto.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Button, Label, Sprite, color, Component, ConfigManager, EventManager, ViewManager, Common;
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
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "a024fyaCKBMubGYfzc12qAq", "slotEmojiRichesSetAuto", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var slotEmojiRichesSetAuto = exports('default', (_dec = ccclass("slotEmojiRichesSetAuto"), _dec2 = menu("game/slotEmojiRiches/slotEmojiRichesSetAuto"), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesSetAuto, _Component);
        function slotEmojiRichesSetAuto() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.selNode = null;
          _initializerDefineProperty(_this, "contentRoot", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Button_ok", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotEmojiRichesSetAuto.prototype;
        //    ////////////////////
        _proto.onLoad = function onLoad() {
          Common.setButtonGray(this.Button_ok);
        };
        _proto.onEnable = function onEnable() {};
        _proto.onDisable = function onDisable() {};
        _proto.setData = function setData(data) {
          this.txt_gold.string = Common.numFormat(data.gold);
          this.txt_bet.string = Common.numFormat(data.bet);
          this.txt_win.string = Common.numFormat(data.win);
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            case "close":
              {
                ViewManager.instance.closePopView();
                break;
              }
            case "Button_ok":
              {
                if (this.selNode) {
                  var arrTimes = [10, 30, 50, 80, 1000];
                  var times = arrTimes[parseInt(this.selNode.name.replace("Node_item_", ""))];
                  EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setAuto, times);
                }
                ViewManager.instance.closePopView();
                break;
              }
            default:
              {
                if (this.selNode) {
                  this.selNode.getComponent(Sprite).color = color(255, 255, 255, 255);
                  this.selNode.getChildByName("Label_times").getComponent(Label).color = color(152, 152, 152, 255);
                }
                this.selNode = event.target;
                this.selNode.getComponent(Sprite).color = color(125, 125, 125, 255);
                this.selNode.getChildByName("Label_times").getComponent(Label).color = color(142, 203, 0, 255);
                this.Button_ok.interactable = true;
                Common.setButtonGray(this.Button_ok, false);
              }
          }
        };
        return slotEmojiRichesSetAuto;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentRoot", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Button_ok", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec6], {
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
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotEmojiRichesSetBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ConfigManager.ts', './DataManager.ts', './EventManager.ts', './ViewManager.ts', './Common.ts', './FortuneScrollView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Node, Component, ConfigManager, DataManager, UserKey, EventManager, ViewManager, Common, FortuneScrollView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
    }, function (module) {
      ConfigManager = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      EventManager = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      FortuneScrollView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "65d0fr/XXtCd49Mt36NOvTo", "slotEmojiRichesSetBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        inspector = _decorator.inspector;
      var eAutoRateType = Enum({
        baseScore: 0,
        baseRate: 1,
        basePay: 2,
        baseBet: 3
      });
      // // @inspector("packages://autoproperty/inspector.js")
      var slotEmojiRichesSetBase = exports('default', (_dec = ccclass("slotEmojiRichesSetBase"), _dec2 = menu("game/slotEmojiRiches/slotEmojiRichesSetBase"), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesSetBase, _Component);
        function slotEmojiRichesSetBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "Label_bet", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_gold", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "Label_win", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseScore", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseRate", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_basePay", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scrollView_baseBet", _descriptor7, _assertThisInitialized(_this));
          _this._curIndex_baseScore = 0;
          _this._curIndex_baseRate = 0;
          _this._curIndex_baseBet = 0;
          //    ////////////////////
          _this._data = void 0;
          return _this;
        }
        var _proto = slotEmojiRichesSetBase.prototype;
        _proto.onLoad = function onLoad() {
          var gold = Common.numFormat(DataManager.instance.getUserDataForKey(UserKey.GOLD));
          this.Label_gold.string = gold;
        };
        _proto.setData = function setData(data) {
          this._data = data;
          // console.log("this._data", this._data);
          this._curIndex_baseScore = data._curBetListIndex;
          this._curIndex_baseRate = data._curBetCount;
          this._curIndex_baseBet = data._curBetListIndex * data.betMaxCount + data._curBetCount;
          this.Label_bet.string = "" + Common.numFormat(data.betList[data._curBetListIndex] * (data._curBetCount + 1) * data.betRate * 1000);
          this.scrollView_baseScore.getComponent(FortuneScrollView).setData(data);
          this.scrollView_baseRate.getComponent(FortuneScrollView).setData(data);
          this.scrollView_basePay.getComponent(FortuneScrollView).setData(data);
          this.scrollView_baseBet.getComponent(FortuneScrollView).setData(data);
        };
        _proto.onEnable = function onEnable() {
          EventManager.getInstance().on(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.onDisable = function onDisable() {
          EventManager.getInstance().off(ConfigManager.getInstance().eventTransform.setBase, this.onSetBase, this);
        };
        _proto.updateWin = function updateWin(RewardMoney) {};
        _proto.onSetBase = function onSetBase(type, curIndex) {
          switch (type) {
            case eAutoRateType.baseScore:
              {
                this._curIndex_baseScore = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseRate:
              {
                this._curIndex_baseRate = curIndex;
                this._curIndex_baseBet = this._curIndex_baseScore * 10 + this._curIndex_baseRate;
                this.scrollView_baseBet.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseBet);
                break;
              }
            case eAutoRateType.baseBet:
              {
                this._curIndex_baseBet = curIndex;
                this._curIndex_baseRate = curIndex % 10;
                this._curIndex_baseScore = Math.floor(curIndex / 10);
                this.scrollView_baseScore.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseScore);
                this.scrollView_baseRate.getComponent(FortuneScrollView).setNewPos(this._curIndex_baseRate);
                break;
              }
          }
        }
        //    //按钮事件回调
        ;

        _proto.onBtnClick = function onBtnClick(event) {
          switch (event.target.name) {
            //            //
            case "Button_reset":
              {
                this._curIndex_baseBet = 0;
                this._curIndex_baseRate = 0;
                this._curIndex_baseScore = 0;
                this.scrollView_baseScore.getComponent(FortuneScrollView).doReset();
                this.scrollView_baseRate.getComponent(FortuneScrollView).doReset();
                this.scrollView_baseBet.getComponent(FortuneScrollView).doReset();
                break;
              }
            case "Button_ok":
              {
                EventManager.getInstance().emit(ConfigManager.getInstance().eventTransform.setBet, this._curIndex_baseScore, this._curIndex_baseRate);
                ViewManager.instance.closePopView();
                break;
              }
          }
        };
        return slotEmojiRichesSetBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Label_bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Label_gold", [_dec4], {
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseScore", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseRate", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_basePay", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "scrollView_baseBet", [_dec9], {
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

System.register("chunks:///_virtual/slotEmojiRichesView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ProxyMgr.ts', './ViewManager.ts', './slotEmojiRichesProxy.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './MainManager.ts', './NetManager.ts', './AddSpineEffect.ts', './AudioManager.ts', './slotEmojiRichesSetAuto.ts', './slotEmojiRichesSetBase.ts', './slotEmojiRichesRun.ts', './slotEmojiRichesDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, SpriteFrame, Label, UITransform, sys, UIOpacity, Sprite, tween, v3, Tween, color, Color, instantiate, Component, i18n, Common, ProxyMgr, ViewManager, slotEmojiRichesProxy, slotEmojiRichesGameEvent, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, MainManager, NetManager, AddSpineEffect, AudioManager, slotEmojiRichesSetAuto, slotEmojiRichesSetBase, slotEmojiRichesRun, slotEmojiRichesDef;
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
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      UITransform = module.UITransform;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      Sprite = module.Sprite;
      tween = module.tween;
      v3 = module.v3;
      Tween = module.Tween;
      color = module.color;
      Color = module.Color;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      i18n = module.default;
    }, function (module) {
      Common = module.Common;
    }, function (module) {
      ProxyMgr = module.default;
    }, function (module) {
      ViewManager = module.default;
    }, function (module) {
      slotEmojiRichesProxy = module.default;
      slotEmojiRichesGameEvent = module.slotEmojiRichesGameEvent;
    }, function (module) {
      FortuneHistory = module.default;
    }, function (module) {
      FortuneRank = module.default;
    }, function (module) {
      DataManager = module.default;
      UserKey = module.UserKey;
    }, function (module) {
      ScrollNumLabel = module.default;
    }, function (module) {
      MainManager = module.default;
    }, function (module) {
      NetManager = module.default;
    }, function (module) {
      AddSpineEffect = module.default;
    }, function (module) {
      AudioManager = module.default;
    }, function (module) {
      slotEmojiRichesSetAuto = module.default;
    }, function (module) {
      slotEmojiRichesSetBase = module.default;
    }, function (module) {
      slotEmojiRichesRun = module.slotEmojiRichesRun;
    }, function (module) {
      slotEmojiRichesDef = module.slotEmojiRichesDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47;
      cclegacy._RF.push({}, "cb0f4dTlRJANp91mKpD/USM", "slotEmojiRichesView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var RunState = {
        NORMAL: 0,
        START: 1,
        RUNNING: 2,
        STOP: 3,
        SHOWWIN: 4,
        BIGWIN: 5,
        FREEWIN: 6,
        SHOWNEXT: 7,
        FREEADD: 8,
        SHOWNEXTEND: 9,
        WAIT: 10
      };
      var GETDATA_TIME = 0.4;
      var BIG_WIN_TIME1 = 7;
      var BIG_WIN_TIME2 = 9;
      var BIG_WIN_TIME3 = 11;
      var slotEmojiRichesView = exports('slotEmojiRichesView', (_dec = ccclass("slotEmojiRichesView"), _dec2 = menu("game/slotEmojiRiches/slotEmojiRichesView"), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(sp.Skeleton), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(sp.Skeleton), _dec13 = property(Node), _dec14 = property(SpriteFrame), _dec15 = property(Label), _dec16 = property(ScrollNumLabel), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(ScrollNumLabel), _dec20 = property(Label), _dec21 = property(sp.Skeleton), _dec22 = property(Node), _dec23 = property(SpriteFrame), _dec24 = property(Node), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(sp.Skeleton), _dec28 = property(ScrollNumLabel), _dec29 = property(Node), _dec30 = property(sp.Skeleton), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(Node), _dec34 = property(sp.Skeleton), _dec35 = property(ScrollNumLabel), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(ScrollNumLabel), _dec40 = property(SpriteFrame), _dec41 = property(Node), _dec42 = property(SpriteFrame), _dec43 = property(sp.Skeleton), _dec44 = property(Label), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(Node), _dec48 = property(Node), _dec49 = property(Node), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotEmojiRichesView, _Component);
        function slotEmojiRichesView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "normalBtn", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game_type", _descriptor3, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "topBg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgList", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_normal", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_free", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_bg", _descriptor8, _assertThisInitialized(_this));
          //转盘
          _initializerDefineProperty(_this, "run_box", _descriptor9, _assertThisInitialized(_this));
          //转盘
          _initializerDefineProperty(_this, "run_spine", _descriptor10, _assertThisInitialized(_this));
          //转盘光效
          _initializerDefineProperty(_this, "window_run_mask", _descriptor11, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "run_box_bgList", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "notice_spine", _descriptor19, _assertThisInitialized(_this));
          //公告栏
          _initializerDefineProperty(_this, "notice_bg", _descriptor20, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_frames", _descriptor21, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_title", _descriptor22, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_scatter_waiting", _descriptor23, _assertThisInitialized(_this));
          //公告scatter
          _initializerDefineProperty(_this, "big_win_box", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_txt", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free", _descriptor27, _assertThisInitialized(_this));
          //免费模式初始页
          _initializerDefineProperty(_this, "enter_free_spine", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_time", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_spine", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_cash", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "one_win", _descriptor35, _assertThisInitialized(_this));
          //一次获取
          _initializerDefineProperty(_this, "all_win", _descriptor36, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "all_win_number", _descriptor37, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "all_win_frames", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "odd_box", _descriptor39, _assertThisInitialized(_this));
          //倍数栏
          _initializerDefineProperty(_this, "odd_box_bgList", _descriptor40, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_start", _descriptor41, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor42, _assertThisInitialized(_this));
          //剩余自动模式
          _initializerDefineProperty(_this, "turn_free_box", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_last", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_noLast", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_time", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "footSprite", _descriptor47, _assertThisInitialized(_this));
          _this._window = null;
          _this._bet = 0;
          _this._isMinBet = false;
          _this._auto = false;
          _this._lock = false;
          _this._runDelay = 0.1;
          _this._isFree = false;
          _this._freeLastTime = 0;
          _this._runTime = 0;
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._current_index = 0;
          _this._oddCurrentIndex = 0;
          //头部倍数当前转到哪里
          _this._cal_current_result = {
            result: null,
            scatterNum: 0,
            showLineIndex: 0,
            prizeIdx: [],
            prizeNum: [],
            prizeIdxList: [],
            prizeNumList: [],
            lineList: {}
          };
          _this._topData = [[], [], [], [], []];
          _this._isGetResult = false;
          _this._state = RunState.NORMAL;
          _this._autoTimes = 0;
          _this._isError = false;
          _this._isInitReadyIntoFree = false;
          _this._isEndBigWin = false;
          //是否已经点击到底金额终点
          _this._isTrueBigWin = false;
          //手动点击金额后会停留0.5秒展示最终金额,防止这0.5supdate的触发
          _this._endBigTime = 0;
          _this._endFreeTime = 0;
          _this._startFreeTime = 0;
          _this.lastTimeIsWin = false;
          //确定头部倍数是否需要归位
          _this._testTime = 0;
          _this._audioId = null;
          _this._totalCashAudioId = null;
          _this._getTime = 0;
          return _this;
        }
        var _proto = slotEmojiRichesView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          console.log("xxxx");
          this.init();
          this.turn_start.node.on(Node.EventType.TOUCH_END, function () {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.spinBtn);
            _this2.clickStartGame();
          });

          //大奖关闭
          this.big_win_box.on(Node.EventType.TOUCH_END, function () {
            if (!_this2._isEndBigWin) {
              //AudioManager.instance.stopSound(this._audioId);
              _this2.big_win_txt.reset(slotEmojiRichesProxy.result.prizeAmount);
              _this2._endBigTime = 2;
              _this2._isEndBigWin = true;
              //动画直接跳到对应的最终动画
              var aniname = "";
              var odd = slotEmojiRichesProxy.result.prizeAmount / _this2._bet;
              if (odd >= 20 && odd < 30) {
                aniname = "bigwin_";
              } else if (odd >= 30 && odd < 50) {
                aniname = "megawin_";
              } else if (odd >= 50) {
                aniname = "superwin_";
              }
              _this2.big_win.setAnimation(0, aniname + "idle", true);
              AudioManager.instance.stopSound(_this2._audioId);
              _this2._audioId = null;
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.bgm_bigwin_end, function (id) {
                _this2._audioId = id;
              });
            } else {
              _this2.clickHideBigWin();
            }
          });

          //免费初始页进入到免费模式
          this.enter_free_btn.on(Node.EventType.TOUCH_END, function () {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fsWonRemainingIncrease);
            _this2.enterFreePage();
          });

          //免费结束页进入到普通模式
          this.free_end_btn.on(Node.EventType.TOUCH_END, function () {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.uiStart);
            _this2.endNormal();
          });
        };
        _proto.update = function update(dt) {
          var _this3 = this;
          this.updateNotice(dt);

          //自动关闭大奖
          if (this.big_win_box.active && !this._isEndBigWin && slotEmojiRichesProxy.result.prizeAmount - 100 <= parseInt(this.big_win_txt.string.replace(/,/g, "")) && parseInt(this.big_win_txt.string.replace(/,/g, "")) <= slotEmojiRichesProxy.result.prizeAmount + 100) {
            this._isEndBigWin = true;
            this._endBigTime = 2;
            AudioManager.instance.stopSound(this._audioId);
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.bgm_bigwin_end, function (id) {
              _this3._audioId = id;
            });
          }

          //大奖结束
          if (this._endBigTime > 0) {
            this._endBigTime -= dt;
            if (this._endBigTime <= 0 && this.big_win_box.active && !this._isTrueBigWin) {
              this.big_win_txt.reset();
              this.big_win_box.active = false;
              this.allEnd(true);
            }
          }

          //免费加载页面
          if (this._startFreeTime > 0) {
            this._startFreeTime -= dt;
            if (this._startFreeTime <= 0 && this.enter_free.active) {
              this.enterFreePage();
            }
          }

          //免费结束页面
          if (this._endFreeTime > 0) {
            this._endFreeTime -= dt;
            if (this._endFreeTime <= 0 && this.free_end.active) {
              this.endNormal();
            }
          }
          switch (this._state) {
            case RunState.START:
              {
                this.changeState(RunState.RUNNING);
                break;
              }
            case RunState.RUNNING:
              {
                if (slotEmojiRichesProxy.result && !this._isGetResult) {
                  this.clickRunning();
                }
                break;
              }
            case RunState.STOP:
              {
                break;
              }
            case RunState.NORMAL:
              {
                if ((this._auto || this._isFree) && !this._isInitReadyIntoFree) {
                  this.preStart();
                }
                break;
              }
          }
        };
        _proto.init = function init() {
          this.normalBtn.active = true;
          this.moreBtn.active = false;
          this.changeBtnActive(true);
          this.initEvent();
          this.updateGoldData();
          this.updateSetData();
          this.checkDownOrUpBet();
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotEmojiRiches.info, {});
        };
        _proto.changeState = function changeState(state) {
          //console.log("state", state);
          this._state = state;
          switch (state) {
            case RunState.NORMAL:
              {
                break;
              }
            case RunState.START:
              {
                this.preStart();
                break;
              }
            case RunState.RUNNING:
              {
                this.clickRun();
                this.startGameAni(true);
                break;
              }
            case RunState.STOP:
              {
                this.clickStop();
                break;
              }
            case RunState.SHOWNEXT:
              {
                this.showNext();
                break;
              }
            case RunState.SHOWNEXTEND:
              {
                if (slotEmojiRichesProxy.result["OpenNums"][this._current_index + 1]) {
                  this.run_box.getComponent(slotEmojiRichesRun).changeItem(this._cal_current_result);
                } else {
                  this.startGameAni(false);
                  this.allEnd();
                }
                break;
              }
          }
        };
        _proto.initPage = function initPage(data) {
          var _this4 = this;
          if (data && data.OpenNums) {
            this.txt_win.reset(data.prizeAmount);
            slotEmojiRichesProxy.result = data;
            this._cal_current_result.result = [[], [], [], [], [], []];
            this.odd_box.getComponent(UITransform).priority = 1;
            this.notice_spine.node.getComponent(UITransform).priority = 2;
            slotEmojiRichesProxy.result["OpenNums"][slotEmojiRichesProxy.result["OpenNums"].length - 1]["openNum"].map(function (item, index) {
              if (index % 6 == 0) {
                _this4._cal_current_result.result[0].push(item);
              } else if (index % 6 == 1) {
                _this4._cal_current_result.result[1].push(item);
              } else if (index % 6 == 2) {
                _this4._cal_current_result.result[2].push(item);
              } else if (index % 6 == 3) {
                _this4._cal_current_result.result[3].push(item);
              } else if (index % 6 == 4) {
                _this4._cal_current_result.result[4].push(item);
              } else {
                _this4._cal_current_result.result[5].push(item);
              }
            });
            this.run_box.getComponent(slotEmojiRichesRun).initPage(this._cal_current_result.result);
            if (!this._isFree && data.freeInfo.surplusFreeCount > 0) {
              this._isInitReadyIntoFree = true;
              this.txt_winFree.getComponent(Label).string = Common.numFormat(data.freeInfo["totalPrizeAmount"] + "");
              this.txt_win.reset(data.prizeAmount);
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.scatterWinHighlight);
              //设置免费模式投注金额
              this._bet = data.betAmount;
              slotEmojiRichesProxy.setBetByCount(this._bet);
              this.txt_bet.string = Common.numFormat(this._bet + "");
              this.txt_betFree.string = Common.numFormat(this._bet + "");
              this.enterFreeMode();
            } else {
              slotEmojiRichesDef.palyMusic(slotEmojiRichesDef.audio.bgm_mg);
            }
          } else {
            this._isError = true;
          }
        };
        _proto.sendBet = function sendBet() {
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [],
          //             openNum: [6, 4, 4, 2, 5, 7, 8, 4, 9, 7, 1, 3, 5, 4, 8, 3, 3, 3, 2, 7, 2, 4, 6, 6, 2, 7, 2, 7, 2, 7, 6, 2, 1, 2, 1, 4],
          //             prizeNum: [],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 1,
          //     prizeAmount: 0,
          // };
          //一次期待;
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [],
          //             openNum: [9, 4, 4, 2, 5, 7, 9, 4, 6, 7, 1, 3, 5, 4, 8, 3, 3, 3, 2, 7, 2, 4, 6, 6, 2, 7, 2, 7, 2, 7, 6, 2, 1, 2, 1, 4],
          //             prizeNum: [],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 1,
          //     prizeAmount: 0,
          // };
          //头部期待;
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [0, 1, 20, 26, 32, 33, 15, 16, 22, 21],
          //             openNum: [9, 9, 1, 6, 8, 6, 7, 5, 3, 6, 6, 5, 6, 3, 7, 5, 10, 7, 8, 2, 5, 10, 5, 2, 5, 8, 5, 8, 7, 6, 4, 2, 5, 5, 6, 3],
          //             prizeNum: [{ idx: [22, 21, 20, 26, 32, 33, 15, 16], num: 5 }],
          //         },
          //         {
          //             fixedIdx: [0, 1, 32, 33, 15, 16, 9, 22, 21, 26, 20, 14],
          //             openNum: [9, 9, 4, 2, 5, 6, 4, 5, 4, 5, 7, 5, 2, 8, 5, 5, 10, 3, 3, 7, 5, 10, 5, 6, 5, 2, 5, 6, 4, 6, 8, 6, 5, 5, 3, 6],
          //             prizeNum: [{ idx: [26, 32, 9, 16, 22, 21, 20, 14, 33, 15], num: 5 }],
          //         },
          //         {
          //             fixedIdx: [0, 1, 20, 14, 32, 33, 15, 16, 9, 22, 21, 26, 2, 30],
          //             openNum: [9, 9, 10, 7, 1, 8, 3, 1, 3, 5, 8, 5, 4, 7, 5, 5, 10, 3, 6, 7, 5, 10, 5, 1, 4, 1, 5, 6, 8, 4, 10, 8, 5, 5, 2, 6],
          //             prizeNum: [{ idx: [15, 22, 20, 26, 33, 9, 16, 21, 14, 32], num: 5 }],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 8,
          //     prizeAmount: 16000,
          // };
          // if (this._getTime == 0) {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotEmojiRiches.buyFree, { betAmount: Math.floor(this._bet) + "" });
          // } else {
          //     NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotEmojiRiches.bet, { betAmount: Math.floor(this._bet) + "" });
          // }
          // this._getTime += 1;
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [9, 10, 16, 15, 22],
          //             openNum: [8, 4, 5, 5, 1, 3, 6, 5, 2, 7, 7, 3, 8, 6, 4, 7, 7, 6, 5, 2, 4, 4, 7, 8, 7, 6, 2, 2, 3, 2, 6, 7, 2, 3, 6, 4],
          //             prizeNum: [{ idx: [9, 10, 16, 15, 22], num: 7 }],
          //         },
          //         {
          //             fixedIdx: [9, 10, 16, 15, 22],
          //             openNum: [1, 5, 3, 3, 1, 8, 8, 6, 1, 7, 7, 5, 6, 4, 5, 7, 7, 8, 6, 7, 6, 3, 7, 1, 5, 3, 1, 8, 8, 1, 8, 1, 3, 1, 5, 3],
          //             prizeNum: [{ idx: [9, 10, 16, 15, 22], num: 7 }],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 1,
          //     prizeAmount: 400,
          // };
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotEmojiRiches.bet, {
            betAmount: Math.floor(this._bet) + ""
          });
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [10, 11, 17, 16, 4],
          //             openNum: [2, 7, 6, 6, 1, 7, 1, 7, 1, 8, 1, 1, 5, 7, 5, 4, 1, 1, 5, 3, 4, 1, 3, 8, 8, 3, 8, 4, 5, 6, 5, 1, 2, 7, 3, 3],
          //             prizeNum: [{ idx: [10, 11, 17, 16, 4], num: 1 }],
          //         },
          //         {
          //             fixedIdx: [16, 21, 20, 15, 22, 19, 10, 11, 17, 4],
          //             openNum: [2, 4, 4, 6, 1, 7, 7, 2, 1, 3, 1, 1, 4, 6, 3, 8, 1, 1, 1, 8, 8, 8, 8, 7, 7, 3, 7, 2, 5, 5, 4, 8, 5, 8, 6, 6],
          //             prizeNum: [
          //                 { idx: [4, 10, 11, 17, 16], num: 1 },
          //                 { idx: [15, 21, 22, 20, 19], num: 8 },
          //             ],
          //         },
          //         {
          //             fixedIdx: [15, 22, 19, 10, 11, 17, 4, 16, 21, 20],
          //             openNum: [5, 5, 3, 4, 1, 6, 7, 7, 5, 3, 1, 1, 6, 7, 3, 8, 1, 1, 7, 8, 8, 8, 8, 6, 7, 1, 6, 5, 5, 2, 5, 2, 6, 2, 3, 2],
          //             prizeNum: [
          //                 { idx: [4, 10, 11, 17, 16], num: 1 },
          //                 { idx: [15, 21, 22, 20, 19], num: 8 },
          //             ],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 1, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 1,
          //     prizeAmount: 20000,
          // };
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [9, 15, 14, 13, 19],
          //             openNum: [3, 8, 2, 5, 4, 3, 4, 8, 4, 1, 2, 6, 8, 1, 1, 1, 2, 5, 5, 1, 4, 4, 3, 2, 6, 5, 4, 6, 4, 2, 5, 4, 2, 5, 2, 1],
          //             prizeNum: [{ idx: [9, 15, 14, 13, 19], num: 1 }],
          //         },
          //         {
          //             fixedIdx: [19, 20, 32, 9, 15, 14, 13],
          //             openNum: [7, 7, 6, 6, 4, 7, 8, 3, 3, 1, 5, 8, 2, 1, 1, 1, 8, 7, 2, 1, 1, 3, 4, 5, 2, 7, 8, 7, 3, 6, 8, 8, 10, 5, 5, 4],
          //             prizeNum: [{ idx: [9, 15, 14, 13, 19, 20], num: 1 }],
          //         },
          //         {
          //             fixedIdx: [19, 20, 16, 15, 14, 32, 18, 24, 33, 9, 13],
          //             openNum: [3, 7, 3, 5, 4, 6, 3, 7, 7, 1, 4, 2, 2, 1, 1, 1, 10, 6, 1, 1, 1, 6, 3, 2, 10, 2, 7, 2, 1, 6, 4, 7, 10, 10, 3, 6],
          //             prizeNum: [{ idx: [9, 14, 19, 20, 18, 24, 15, 16, 13], num: 1 }],
          //         },
          //         {
          //             fixedIdx: [14, 19, 16, 15, 25, 32, 20, 13, 18, 24, 33, 12, 31, 34, 9],
          //             openNum: [4, 3, 5, 5, 3, 3, 2, 8, 4, 1, 6, 4, 10, 1, 1, 1, 10, 8, 1, 1, 1, 6, 2, 8, 10, 6, 2, 3, 7, 3, 4, 6, 10, 10, 6, 7],
          //             prizeNum: [
          //                 { idx: [18, 19, 9, 15, 14, 12, 16, 13, 20, 24], num: 1 },
          //                 { idx: [31, 32, 33, 34, 25, 24], num: 6 },
          //             ],
          //         },
          //         {
          //             fixedIdx: [13, 18, 24, 33, 12, 31, 34, 9, 27, 30, 26, 14, 19, 16, 15, 25, 32, 20],
          //             openNum: [3, 8, 8, 2, 7, 2, 8, 5, 5, 1, 4, 4, 10, 1, 1, 1, 10, 7, 1, 1, 1, 3, 7, 5, 10, 6, 6, 10, 5, 2, 6, 6, 10, 10, 6, 4],
          //             prizeNum: [
          //                 { idx: [12, 18, 24, 9, 15, 16, 14, 13, 19, 20], num: 1 },
          //                 { idx: [31, 24, 25, 26, 33, 34, 27, 32, 30], num: 6 },
          //             ],
          //         },
          //         {
          //             fixedIdx: [32, 25, 1, 20, 8, 2, 28, 34, 9, 13, 18, 24, 33, 12, 31, 26, 27, 30, 7, 22, 15, 14, 19, 16, 6],
          //             openNum: [8, 2, 9, 5, 3, 3, 2, 2, 2, 1, 4, 3, 10, 1, 1, 1, 10, 8, 1, 1, 1, 4, 5, 4, 10, 6, 6, 10, 5, 3, 6, 6, 10, 10, 6, 3],
          //             prizeNum: [
          //                 { idx: [1, 7, 8, 6, 12], num: 2 },
          //                 { idx: [9, 15, 16, 13, 20, 14, 12, 18, 19, 24], num: 1 },
          //                 { idx: [22, 16, 28, 27, 33, 32], num: 5 },
          //                 { idx: [32, 31, 26, 27, 34, 24, 25, 33, 30], num: 6 },
          //             ],
          //         },
          //         {
          //             fixedIdx: [15, 16, 6, 32, 0, 20, 34, 27, 22, 13, 24, 12, 14, 19, 10, 25, 1, 8, 2, 28, 31, 26, 30, 7, 9, 18, 33],
          //             openNum: [10, 2, 9, 7, 3, 7, 2, 2, 2, 1, 5, 8, 10, 1, 1, 1, 10, 8, 1, 1, 1, 3, 5, 3, 10, 6, 6, 10, 5, 2, 6, 6, 10, 10, 6, 8],
          //             prizeNum: [
          //                 { idx: [1, 0, 6, 7, 8, 12], num: 2 },
          //                 { idx: [16, 14, 13, 12, 24, 9, 15, 20, 18, 19], num: 1 },
          //                 { idx: [22, 28, 27, 33, 32, 10, 16], num: 5 },
          //                 { idx: [32, 25, 27, 33, 30, 24, 26, 34, 31], num: 6 },
          //             ],
          //         },
          //         {
          //             fixedIdx: [15, 16, 6, 32, 0, 20, 13, 24, 12, 34, 27, 22, 14, 19, 10, 25, 1, 8, 2, 28, 9, 18, 33, 31, 26, 30, 7],
          //             openNum: [10, 2, 9, 3, 4, 7, 2, 2, 2, 1, 5, 3, 10, 1, 1, 1, 10, 8, 1, 1, 1, 7, 5, 2, 10, 6, 6, 10, 5, 7, 6, 6, 10, 10, 6, 4],
          //             prizeNum: [
          //                 { idx: [8, 12, 1, 0, 6, 7], num: 2 },
          //                 { idx: [12, 19, 20, 9, 15, 16, 13, 14, 18, 24], num: 1 },
          //                 { idx: [22, 28, 27, 33, 32, 10, 16], num: 5 },
          //                 { idx: [25, 26, 32, 31, 30, 24, 27, 33, 34], num: 6 },
          //             ],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 14,
          //     prizeAmount: 140000,
          // };
          // slotEmojiRichesProxy.result = {
          //     OpenNums: [
          //         {
          //             fixedIdx: [16, 4, 5, 11, 10],
          //             openNum: [4, 1, 2, 6, 1, 1, 4, 2, 4, 3, 1, 1, 8, 4, 1, 5, 1, 2, 5, 6, 5, 6, 3, 4, 5, 7, 4, 8, 1, 4, 6, 8, 7, 8, 4, 2],
          //             prizeNum: [{ idx: [4, 5, 11, 10, 16], num: 1 }],
          //         },
          //         {
          //             fixedIdx: [13, 22, 4, 5, 11, 10, 16],
          //             openNum: [2, 6, 8, 7, 1, 1, 6, 1, 5, 8, 1, 1, 6, 10, 8, 6, 1, 8, 8, 1, 3, 7, 9, 6, 2, 7, 8, 6, 4, 4, 5, 1, 8, 5, 5, 4],
          //             prizeNum: [{ idx: [5, 11, 10, 16, 4], num: 1 }],
          //         },
          //     ],
          //     betAmount: 2000,
          //     freeInfo: { odds: 0, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //     freePrize: false,
          //     odds: 2,
          //     prizeAmount: 3200,
          // };
          // if (this._getTime == 0) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [8, 17, 26],
          //                 openNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 1],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 1, surplusFreeCount: 10, totalPrizeAmount: 0 },
          //         freePrize: true,
          //         odds: 1,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 1) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [],
          //                 openNum: [8, 5, 2, 6, 8, 5, 4, 8, 3, 7, 1, 5, 1, 5, 5, 7, 3, 1, 10, 2, 6, 8, 2, 3, 7, 6, 8, 5, 6, 1, 2, 3, 2, 6, 1, 4],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 2, surplusFreeCount: 9, totalPrizeAmount: 0 },
          //         freePrize: false,
          //         odds: 2,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 2) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             // {
          //             //     fixedIdx: [13, 33, 19, 14, 27, 9, 8, 7, 30, 25, 2, 18, 26, 32, 10, 15, 6, 20],
          //             //     openNum: [6, 4, 5, 2, 4, 3, 5, 5, 5, 5, 5, 7, 6, 5, 4, 5, 2, 5, 4, 4, 4, 2, 4, 6, 2, 4, 4, 4, 1, 2, 9, 7, 4, 4, 7, 5],
          //             //     prizeNum: [
          //             //         { idx: [6, 13, 2, 8, 9, 10, 15, 7], num: 5 },
          //             //         { idx: [27, 32, 20, 25, 26, 33, 14, 19, 18], num: 4 },
          //             //     ],
          //             // },
          //             // {
          //             //     fixedIdx: [22, 20, 26, 32, 10, 15, 6, 19, 13, 33, 12, 9, 14, 27, 18, 8, 7, 30, 25, 2],
          //             //     openNum: [3, 2, 5, 4, 2, 4, 5, 5, 5, 5, 5, 3, 4, 5, 4, 5, 3, 8, 4, 4, 4, 7, 9, 8, 1, 4, 4, 4, 8, 6, 9, 2, 4, 4, 8, 8],
          //             //     prizeNum: [
          //             //         { idx: [15, 7, 6, 13, 2, 8, 9, 10], num: 5 },
          //             //         { idx: [33, 32, 12, 18, 27, 26, 25, 19, 20, 14], num: 4 },
          //             //     ],
          //             // },
          //             // {
          //             //     fixedIdx: [22, 20, 26, 32, 10, 15, 6, 19, 13, 33, 12, 9, 14, 27, 1, 18, 8, 7, 30, 25, 2],
          //             //     openNum: [1, 5, 5, 1, 4, 7, 5, 5, 5, 5, 5, 3, 4, 5, 4, 5, 7, 7, 4, 4, 4, 8, 9, 2, 3, 4, 4, 4, 7, 3, 9, 7, 4, 4, 8, 4],
          //             //     prizeNum: [
          //             //         { idx: [15, 7, 1, 8, 9, 10, 2, 6, 13], num: 5 },
          //             //         { idx: [14, 27, 12, 20, 26, 33, 32, 25, 18, 19], num: 4 },
          //             //     ],
          //             // },
          //             {
          //                 fixedIdx: [9, 14, 27, 1, 2, 18, 8, 7, 30, 25, 6, 22, 21, 20, 26, 32, 10, 15, 19, 13, 33, 12, 16],
          //                 openNum: [2, 5, 5, 2, 6, 8, 5, 5, 5, 5, 5, 4, 4, 5, 4, 5, 5, 7, 4, 4, 4, 5, 9, 8, 1, 4, 4, 4, 1, 4, 9, 6, 4, 4, 2, 3],
          //                 prizeNum: [
          //                     { idx: [9, 15, 21, 7, 1, 8, 16, 6, 13, 2, 10], num: 5 },
          //                     { idx: [20, 14, 27, 32, 25, 12, 18, 19, 26, 33], num: 4 },
          //                 ],
          //             },
          //             {
          //                 fixedIdx: [2, 18, 8, 7, 30, 25, 6, 22, 21, 20, 26, 32, 10, 15, 3, 19, 13, 33, 12, 16, 9, 14, 27, 1, 11],
          //                 openNum: [3, 5, 5, 5, 8, 2, 5, 5, 5, 5, 5, 5, 4, 5, 4, 5, 5, 6, 4, 4, 4, 5, 9, 7, 8, 4, 4, 4, 5, 7, 9, 2, 4, 4, 5, 7],
          //                 prizeNum: [
          //                     { idx: [3, 15, 21, 8, 7, 6, 13, 1, 9, 10, 11, 16, 2], num: 5 },
          //                     { idx: [18, 19, 20, 26, 12, 14, 27, 33, 32, 25], num: 4 },
          //                 ],
          //             },
          //             {
          //                 fixedIdx: [6, 22, 21, 20, 26, 32, 10, 15, 3, 19, 13, 33, 12, 16, 9, 14, 27, 1, 11, 2, 18, 8, 7, 30, 25],
          //                 openNum: [8, 5, 5, 5, 2, 1, 5, 5, 5, 5, 5, 5, 4, 5, 4, 5, 5, 2, 4, 4, 4, 5, 9, 3, 3, 4, 4, 4, 8, 6, 9, 2, 4, 4, 5, 8],
          //                 prizeNum: [
          //                     { idx: [16, 8, 13, 21, 1, 2, 3, 9, 10, 11, 15, 7, 6], num: 5 },
          //                     { idx: [26, 18, 20, 14, 27, 33, 32, 25, 12, 19], num: 4 },
          //                 ],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 2, surplusFreeCount: 8, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 2,
          //         prizeAmount: 236000,
          //     };
          // } else if (this._getTime == 3) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [1],
          //                 openNum: [4, 10, 3, 3, 1, 7, 2, 5, 5, 1, 7, 4, 4, 3, 6, 4, 3, 6, 7, 6, 5, 4, 6, 6, 6, 7, 3, 7, 2, 1, 6, 3, 2, 6, 7, 7],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 2, surplusFreeCount: 7, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 2,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 4) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [10, 16],
          //                 openNum: [5, 3, 6, 3, 7, 7, 8, 5, 7, 8, 10, 5, 7, 2, 3, 3, 10, 5, 6, 7, 6, 4, 8, 1, 1, 4, 3, 3, 4, 4, 2, 8, 5, 6, 6, 5],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 6, surplusFreeCount: 6, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 6,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 5) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [14],
          //                 openNum: [5, 6, 2, 3, 7, 4, 8, 6, 1, 1, 1, 3, 1, 5, 10, 3, 2, 8, 3, 7, 4, 5, 2, 4, 4, 2, 4, 3, 4, 2, 1, 3, 1, 2, 3, 2],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 8, surplusFreeCount: 5, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 8,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 6) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [],
          //                 openNum: [8, 5, 4, 8, 2, 3, 2, 5, 3, 5, 5, 6, 4, 3, 6, 3, 4, 5, 3, 8, 7, 5, 7, 2, 4, 7, 6, 7, 5, 3, 5, 7, 1, 5, 2, 2],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 8, surplusFreeCount: 4, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 8,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 7) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [],
          //                 openNum: [7, 4, 3, 5, 8, 5, 4, 2, 3, 6, 8, 3, 7, 3, 4, 4, 1, 5, 3, 8, 7, 1, 1, 6, 8, 5, 6, 8, 4, 6, 8, 4, 5, 1, 2, 7],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 8, surplusFreeCount: 3, totalPrizeAmount: 6000 },
          //         freePrize: false,
          //         odds: 8,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 8) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [14, 8, 22, 5, 7, 32, 10, 20, 25, 29, 15, 11, 16, 13, 9, 30, 21, 17, 23, 26, 1, 12, 4, 31],
          //                 openNum: [6, 7, 5, 1, 7, 7, 4, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 3, 7, 7, 7, 7, 1, 7, 7, 3, 4, 7, 10, 7, 9, 3, 7, 1],
          //                 prizeNum: [{ idx: [4, 17, 16, 7, 10, 11, 5, 12, 23, 26, 1, 14, 22, 25, 31, 8, 15, 13, 20, 21, 29, 30, 9], num: 7 }],
          //             },
          //             {
          //                 fixedIdx: [14, 8, 5, 7, 32, 10, 20, 25, 29, 22, 15, 11, 16, 13, 9, 30, 17, 23, 26, 1, 12, 4, 31, 21, 28],
          //                 openNum: [8, 7, 1, 5, 7, 7, 8, 10, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 4, 7, 7, 5, 9, 7, 10, 7, 9, 3, 5, 8],
          //                 prizeNum: [{ idx: [9, 14, 29, 10, 5, 16, 20, 21, 26, 1, 4, 17, 15, 13, 12, 25, 30, 7, 8, 11, 22, 23, 31], num: 7 }],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 12, surplusFreeCount: 2, totalPrizeAmount: 174000 },
          //         freePrize: false,
          //         odds: 12,
          //         prizeAmount: 168000,
          //     };
          // } else if (this._getTime == 9) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [32, 9],
          //                 openNum: [5, 1, 2, 3, 1, 4, 5, 3, 4, 10, 8, 5, 2, 4, 8, 5, 3, 2, 8, 2, 8, 5, 5, 7, 1, 3, 7, 4, 4, 2, 6, 8, 9, 8, 8, 5],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 14, surplusFreeCount: 1, totalPrizeAmount: 174000 },
          //         freePrize: false,
          //         odds: 14,
          //         prizeAmount: 0,
          //     };
          // } else if (this._getTime == 10) {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [],
          //                 openNum: [2, 2, 6, 6, 3, 7, 5, 1, 6, 5, 8, 2, 7, 6, 2, 8, 4, 1, 3, 7, 3, 8, 1, 4, 3, 5, 4, 1, 5, 1, 4, 7, 1, 7, 3, 4],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 14, surplusFreeCount: 0, totalPrizeAmount: 174000 },
          //         freePrize: false,
          //         odds: 14,
          //         prizeAmount: 0,
          //     };
          // } else {
          //     slotEmojiRichesProxy.result = {
          //         OpenNums: [
          //             {
          //                 fixedIdx: [],
          //                 openNum: [4, 4, 5, 5, 6, 5, 1, 1, 5, 4, 7, 1, 8, 6, 3, 2, 8, 2, 3, 1, 3, 5, 4, 5, 5, 2, 4, 7, 2, 7, 8, 5, 7, 6, 8, 4],
          //                 prizeNum: [],
          //             },
          //         ],
          //         betAmount: 2000,
          //         freeInfo: { odds: 1, surplusFreeCount: 0, totalPrizeAmount: 0 },
          //         freePrize: false,
          //         odds: 1,
          //         prizeAmount: 0,
          //     };
          // }
          // this._getTime += 1;
        }

        //点击开始游戏按钮
        ;

        _proto.clickStartGame = function clickStartGame() {
          //当自动模式下点击开始按钮，切换成手动模式
          if (this._auto) {
            this.setAuto(0);
            return;
          }
          this.preStart();
        };
        _proto.preStart = function preStart() {
          if (this._lock) return;
          if (this._isError) return;
          if (this._isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._isFree) {
            if (gold < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            }
          }
          if (this._isFree && this._freeLastTime > 0 || !this._isFree) {
            if (this._isFree) {
              this.setFreeCount(this._freeLastTime - 1);
            } else {
              this.odd_box.getChildByName("odd").getComponent(Label).string = "x1";
              this.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 150;
              this.odd_box.getChildByName("spine").active = false;
              this.odd_box.getComponent(UITransform).priority = 1;
              this.notice_spine.node.getComponent(UITransform).priority = 2;
            }
            this._lock = true;
            this.all_win.getChildByName("Sprite").getComponent(Sprite).spriteFrame = this.all_win_frames[1];
            this.one_win.active = false;
            this.all_win.active = false;
            this.all_win_number.reset();
            this.notice_bg.active = true;
            this.notice_spine.setAnimation(0, "normal_idle", true);
            // if (this.txt_win.getComponent(cc.Label).string != "0") {
            //     this.notice_spine.setAnimation(0, "normal_win", true);
            //     this.notice_spine.addAnimation(0, "normal_idle", true);
            // } else {
            //     this.notice_spine.setAnimation(0, "normal_idle", true);
            // }

            this.txt_win.reset();
            slotEmojiRichesProxy.result = null;
            this.run_box.getComponent(slotEmojiRichesRun).resetItem();
            this.sendBet();
            this._cal_current_result = {
              result: [[], [], [], [], [], []],
              scatterNum: 0,
              showLineIndex: 0,
              prizeIdx: [],
              prizeNum: [],
              prizeIdxList: [],
              prizeNumList: [],
              lineList: {}
            };
            this._state = RunState.START;
            this._runTime = GETDATA_TIME;
          }
        };
        _proto.clickRun = function clickRun() {
          this._isTrueBigWin = false;
          this._isGetResult = false;
          this.checkAuto();
          this.changeBtnActive(false);
          this.run_box.getComponent(slotEmojiRichesRun).run(this._runDelay != 0 || this._isFree ? "normal" : "fast");
        };
        _proto.clickRunning = function clickRunning() {
          var _this5 = this;
          this._isGetResult = true;
          if (!this._isFree) {
            this.updateGoldData(-this._bet);
          }
          this.calResult(function () {
            if (_this5._runDelay != 0 || _this5._isFree) {
              _this5.scheduleOnce(function () {
                _this5.run_box.getComponent(slotEmojiRichesRun).getResult(_this5._cal_current_result.result, _this5._cal_current_result.showLineIndex, slotEmojiRichesProxy.result.prizeAmount);
              }, 0.3);
            } else {
              _this5.scheduleOnce(function () {
                _this5.run_box.getComponent(slotEmojiRichesRun).getResult(_this5._cal_current_result.result, 0, slotEmojiRichesProxy.result.prizeAmount);
              }, 0.1);
            }
          });
        };
        _proto.clickStop = function clickStop() {
          var _this6 = this;
          //判断第一轮中奖结果
          if (slotEmojiRichesProxy.result && slotEmojiRichesProxy.result["prizeAmount"] && slotEmojiRichesProxy.result["prizeAmount"] > 0) {
            this.startGameAni(false);
            this.scheduleOnce(function () {
              _this6.run_box.getComponent(slotEmojiRichesRun).changeItem(_this6._cal_current_result);
            }, 0.1);
            if (!this._isFree && !this._auto) {
              this.turn_start.setAnimation(0, "stop", true);
            }
          } else {
            this.startGameAni(false);
            this.allEnd();
          }
        };
        _proto.showNext = function showNext() {
          var _this7 = this;
          if (slotEmojiRichesProxy.result["OpenNums"][this._current_index + 1]) {
            this._current_index += 1;
            this.calResult(function () {
              _this7.scheduleOnce(function () {
                _this7.run_box.getComponent(slotEmojiRichesRun).renderNewItem(_this7._cal_current_result);
              }, 0.2);
            });
          } else {
            this.scheduleOnce(function () {
              _this7.run_box.getComponent(slotEmojiRichesRun).renderNewItem(_this7._cal_current_result);
            }, 0.2);
          }
        };
        _proto.allEnd = function allEnd(isBigWinEnd) {
          var _this8 = this;
          if (isBigWinEnd === void 0) {
            isBigWinEnd = false;
          }
          if (this._isFree && slotEmojiRichesProxy.result.freeInfo.surplusFreeCount != this._freeLastTime) {
            this.setFreeCount(slotEmojiRichesProxy.result.freeInfo.surplusFreeCount);
          }
          console.log("end");
          var winOdd = slotEmojiRichesProxy.result.prizeAmount / this._bet;
          if (this._cal_current_result.scatterNum > 0 && this._cal_current_result.scatterNum < 3 && !this._isFree) {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fastspinEnd);
          }
          //判断中奖金额以及是否有倍数
          if (slotEmojiRichesProxy.result.prizeAmount && slotEmojiRichesProxy.result.prizeAmount > 0) {
            this.notice_bg.active = false;
            this.notice_scatter_waiting.active = false;
          }
          //非免费只有中奖才获取wild
          //免费模式出现wild倍数就相加
          var current_odd = parseInt(this.odd_box.getChildByName("odd").getComponent(Label).string.replace(/x/g, ""));
          //出现倍数
          if (parseInt(this.odd_box.getChildByName("odd").getComponent(Label).string.replace(/x/g, "")) < slotEmojiRichesProxy.result.odds) {
            this.showCash();
          } else if (!this._isFree && slotEmojiRichesProxy.result.prizeAmount && slotEmojiRichesProxy.result.prizeAmount > 0 && current_odd == 1) {
            //非免费有中奖金额但是没有倍数
            this.all_win.setScale(0, 0, 1);
            this.all_win.active = true;
            tween(this.all_win).to(0.2, {
              scale: v3(1, 1, 1)
            }).call(function () {
              _this8.changeAdBg(winOdd);
            }).start();
            if (winOdd <= 5) {
              this.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
            } else {
              this.all_win_number.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
            }
            this.txt_win.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
          } else if (this._isFree && slotEmojiRichesProxy.result.prizeAmount && slotEmojiRichesProxy.result.prizeAmount > 0 && parseInt(this.odd_box.getChildByName("odd").getComponent(Label).string.replace(/x/g, "")) == slotEmojiRichesProxy.result.odds && !isBigWinEnd) {
            //免费有中奖金额但是没有倍数 && 不是大奖结束后的再次调用allend
            this.showCash();
          }
          this._isFree ? this.txt_winFree.string = Common.numFormat(slotEmojiRichesProxy.result.freeInfo["totalPrizeAmount"] + "") : "";
          if (!this._isFree && !this._auto) {
            this.turn_start.setAnimation(0, "idle", true);
          }
          if (isBigWinEnd) {
            console.log("大奖动画结束");
            this.changeAdBg(winOdd);
            //大奖金额到达目标或点击大奖动画
            this.scheduleOnce(function () {
              _this8._isEndBigWin = false;
              _this8._current_index = 0;
              _this8._cal_current_result = {
                result: null,
                scatterNum: 0,
                showLineIndex: 0,
                prizeIdx: [],
                prizeNum: [],
                prizeIdxList: [],
                prizeNumList: [],
                lineList: {}
              };
              _this8.changeBtnActive(true);
              _this8.updateGoldData();
              if (!_this8._isFree && !_this8._auto) {
                _this8.turn_start.setAnimation(0, "idle", true);
              }
              if (!_this8._isFree && slotEmojiRichesProxy.result.freeInfo.surplusFreeCount > 0) {
                _this8.enterFreeMode();
              } else {
                if (_this8._isFree && slotEmojiRichesProxy.result.freeInfo.surplusFreeCount == 0) {
                  //结束免费模式
                  _this8.scheduleOnce(function () {
                    _this8.endFree();
                  }, 0.3);
                } else {
                  _this8._lock = false;
                  _this8.changeState(RunState.NORMAL);
                }
              }
            }, 1);
          } else {
            //判断是否有倍数移动
            this.scheduleOnce(function () {
              //判断是否需要展示大奖动画
              var odd = slotEmojiRichesProxy.result.prizeAmount / _this8._bet;
              var aniname = "";
              if (odd >= 20 && odd < 30) {
                _this8.big_win_box.active = true;
                aniname = "bigwin_";
                _this8.big_win_txt.stepCount = BIG_WIN_TIME1 * 30;
                _this8.big_win.setAnimation(0, aniname + "intro", false);
                _this8.big_win.addAnimation(0, aniname + "idle", true);
              }
              if (odd >= 30 && odd < 50) {
                _this8.big_win_box.active = true;
                aniname = "megawin_";
                _this8.big_win_txt.stepCount = BIG_WIN_TIME2 * 30;
                _this8.big_win.setAnimation(0, aniname + "intro", false);
                _this8.big_win.addAnimation(0, aniname + "idle", true);
              }
              if (odd >= 50) {
                _this8.big_win_box.active = true;
                aniname = "superwin_";
                _this8.big_win_txt.stepCount = BIG_WIN_TIME3 * 30;
                _this8.big_win.setAnimation(0, aniname + "intro", false);
                _this8.big_win.addAnimation(0, aniname + "idle", true);
              }
              _this8.big_win_txt.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");

              //没中大奖结束该轮
              if (odd < 20) {
                var time = 0;
                //自动模式&免费模式=>金额转动到终点才进行下一轮
                //手动模式=》金额不需要转动到终点
                if (_this8._auto || _this8._isFree) {
                  slotEmojiRichesProxy.result.prizeAmount > 0 && odd >= 5 ? time = 1.2 : slotEmojiRichesProxy.result.prizeAmount > 0 ? time = 0.5 : time = 0;
                } else {
                  slotEmojiRichesProxy.result.prizeAmount > 0 ? time = 0.2 : time = 0;
                }
                console.log("结束，没有大奖");
                _this8.scheduleOnce(function () {
                  _this8._isEndBigWin = false;
                  _this8._current_index = 0;
                  _this8._cal_current_result = {
                    result: null,
                    scatterNum: 0,
                    showLineIndex: 0,
                    prizeIdx: [],
                    prizeNum: [],
                    prizeIdxList: [],
                    prizeNumList: [],
                    lineList: {}
                  };
                  _this8.changeBtnActive(true);
                  _this8.updateGoldData();
                  if (!_this8._isFree && !_this8._auto) {
                    _this8.turn_start.setAnimation(0, "idle", true);
                  }
                  if (!_this8._isFree && slotEmojiRichesProxy.result.freeInfo.surplusFreeCount > 0) {
                    _this8.enterFreeMode();
                  } else {
                    if (_this8._isFree && slotEmojiRichesProxy.result.freeInfo.surplusFreeCount == 0) {
                      //结束免费模式
                      _this8.scheduleOnce(function () {
                        _this8.endFree();
                      }, 0.3);
                    } else {
                      _this8._lock = false;
                      _this8.changeState(RunState.NORMAL);
                    }
                  }
                }, time);
              } else {
                console.log("结束，播放大奖");
                slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.bgm_bigwin_main, function (id) {
                  _this8._audioId = id;
                });
              }
            }, current_odd < slotEmojiRichesProxy.result.odds ? 1.5 : slotEmojiRichesProxy.result.prizeAmount > 0 ? 1 : 0.2);
          }
        }

        //金额展示
        ;

        _proto.showCash = function showCash() {
          var _this9 = this;
          var winOdd = slotEmojiRichesProxy.result.prizeAmount / this._bet;
          var currentOdd = parseInt(this.odd_box.getChildByName("odd").getComponent(Label).string.replace(/x/g, ""));
          //有倍数 && 有金额
          if (currentOdd != slotEmojiRichesProxy.result.odds && slotEmojiRichesProxy.result.prizeAmount > 0) {
            this.one_win.getChildByName("cash").getComponent(Label).string = Common.numFormat(Math.floor(slotEmojiRichesProxy.result.prizeAmount / slotEmojiRichesProxy.result.odds) + "");
            this.one_win.active = true;
          }

          // if (currentOdd == slotEmojiRichesProxy.result.odds && slotEmojiRichesProxy.result.prizeAmount > 0) {
          // }

          //转盘内所有的倍数相加
          currentOdd != slotEmojiRichesProxy.result.odds && this.run_box.getComponent(slotEmojiRichesRun).wildMove(this._isFree);
          slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.multiActivate);

          //免费模式下当前倍数也要去相加
          if (this._isFree) {
            this.odd_box.getChildByName("odd").setScale(v3(0.8, 0.8, 1));
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.multiStackFrom);
            if (slotEmojiRichesProxy.result && slotEmojiRichesProxy.result.prizeAmount > 0) {
              //有中奖（不管有没有倍数）
              tween(this.odd_box.getChildByName("odd")).to(0.4, {
                position: v3(0, 560, 0)
              }).call(function () {
                _this9.odd_box.getChildByName("odd").getComponent(Label).string = "x" + slotEmojiRichesProxy.result.odds;
                _this9.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 160;
                _this9.odd_box.getComponent(UITransform).priority = 10;
                _this9.odd_box.getChildByName("spine").setPosition(v3(0, 560, 0));
                _this9.odd_box.getChildByName("spine").setScale(v3(2, 2, 0));
                _this9.odd_box.getChildByName("spine").active = true;
                _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "change1", false);
                tween(_this9.odd_box.getChildByName("odd")).to(0.1, {
                  scale: v3(1.5, 1.5, 1)
                }).delay(0.3).call(function () {
                  _this9.odd_box.getChildByName("spine").active = false;
                  _this9.odd_box.getChildByName("spine").setScale(v3(1, 1, 0));
                  tween(_this9.odd_box.getChildByName("odd")).to(0.2, {
                    position: v3(-10, 100, 0)
                  }).call(function () {
                    tween(_this9.odd_box.getChildByName("odd")).to(0.2, {
                      scale: v3(2.5, 2.5, 1)
                    }).start();
                    tween(_this9.odd_box.getChildByName("odd").getComponent(UIOpacity)).to(0.1, {
                      opacity: 0
                    }).delay(0.1).call(function () {
                      _this9.odd_box.getChildByName("odd").setPosition(v3(-10, 0, 0));
                      _this9.odd_box.getChildByName("odd").setScale(v3(1, 1, 1));
                      _this9.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 255;
                      _this9.odd_box.getChildByName("spine").setPosition(v3(0, 0, 0));
                      _this9.odd_box.getChildByName("spine").active = true;
                      _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "change1", false);
                      _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(function () {
                        _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(null);
                      });
                      _this9.one_win.active = false;
                      _this9.all_win.setScale(0, 0, 1);
                      _this9.all_win.active = true;
                      tween(_this9.all_win).to(0.2, {
                        scale: v3(1, 1, 1)
                      }).call(function () {
                        _this9.changeAdBg(winOdd);
                      }).start();
                      if (winOdd <= 5) {
                        _this9.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
                      } else {
                        _this9.all_win_number.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
                      }
                      _this9.txt_win.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
                    }).start();
                  }).start();
                }).start();
                tween(_this9.odd_box.getChildByName("odd").getComponent(UIOpacity)).to(0.1, {
                  opacity: 255
                }).start();
              }).start();
            } else if (slotEmojiRichesProxy.result && slotEmojiRichesProxy.result.prizeAmount == 0) {
              //有倍数没中奖
              tween(this.odd_box.getChildByName("odd")).to(0.4, {
                position: v3(0, 560, 0)
              }).call(function () {
                _this9.odd_box.getChildByName("odd").getComponent(Label).string = "x" + slotEmojiRichesProxy.result.odds;
                _this9.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 160;
                _this9.odd_box.getComponent(UITransform).priority = 10;
                _this9.odd_box.getChildByName("spine").setPosition(v3(0, 560, 0));
                _this9.odd_box.getChildByName("spine").setScale(v3(2, 2, 0));
                _this9.odd_box.getChildByName("spine").active = true;
                _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "change1", false);
                tween(_this9.odd_box.getChildByName("odd")).to(0.1, {
                  scale: v3(2, 2, 1)
                }).delay(0.3).call(function () {
                  _this9.odd_box.getChildByName("spine").active = false;
                  _this9.odd_box.getChildByName("spine").setScale(v3(1, 1, 0));
                  tween(_this9.odd_box.getChildByName("odd")).to(0.2, {
                    position: v3(-10, 0, 0)
                  }).call(function () {
                    _this9.odd_box.getChildByName("spine").setPosition(v3(0, 0, 0));
                    _this9.odd_box.getChildByName("spine").active = true;
                    _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "change1", false);
                    _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(function () {
                      _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(null);
                    });
                  }).start();
                  tween(_this9.odd_box.getChildByName("odd")).to(0.2, {
                    scale: v3(1, 1, 1)
                  }).start();
                }).start();
                tween(_this9.odd_box.getChildByName("odd").getComponent(UIOpacity)).to(0.1, {
                  opacity: 255
                }).start();
              }).start();
            }
          } else {
            this.scheduleOnce(function () {
              //修改当前倍数
              if (currentOdd != slotEmojiRichesProxy.result.odds && !_this9._isFree) {
                _this9.odd_box.getChildByName("odd").getComponent(Label).string = "x" + slotEmojiRichesProxy.result.odds;
                _this9.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 255;
                _this9.odd_box.getChildByName("spine").active = true;
                _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "change1", false);
                _this9.odd_box.getComponent(UITransform).priority = 10;
                tween(_this9.odd_box.getChildByName("odd")).to(0.05, {
                  scale: v3(1.4, 1.4, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                }).start();
                tween(_this9.odd_box.getChildByName("spine")).to(0.05, {
                  scale: v3(1.4, 1.4, 1)
                }).to(0.05, {
                  scale: v3(1, 1, 1)
                }).start();
                _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(function () {
                  _this9.odd_box.getChildByName("spine").getComponent(sp.Skeleton).setCompleteListener(null);
                });
              }
              //有倍数不一定有中奖
              if (slotEmojiRichesProxy.result && slotEmojiRichesProxy.result.prizeAmount > 0) {
                _this9.one_win.active = false;
                _this9.all_win.setScale(0, 0, 1);
                _this9.all_win.active = true;
                tween(_this9.all_win).to(0.2, {
                  scale: v3(1, 1, 1)
                }).call(function () {
                  _this9.changeAdBg(winOdd);
                }).start();
                if (winOdd <= 5) {
                  _this9.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
                } else {
                  _this9.all_win_number.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
                }
                _this9.txt_win.string = Common.numFormat(slotEmojiRichesProxy.result.prizeAmount + "");
              }
            }, currentOdd != slotEmojiRichesProxy.result.odds ? 1.3 : 0);
          }
        }
        //广告栏背景动画变化
        ;

        _proto.changeAdBg = function changeAdBg(odd) {
          var _this10 = this;
          if (odd <= 5) {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.prizeSmallwin);
            this.notice_spine.setAnimation(0, "normal_xnchange", false);
            this.notice_spine.addAnimation(0, "normal_idle", true);
          } else if (odd > 5 && odd < 60) {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.prizeMedwinMain, function (id) {
              _this10._totalCashAudioId = id;
            });
            this.scheduleOnce(function () {
              AudioManager.instance.stopSound(_this10._totalCashAudioId);
              var random = Math.random();
              slotEmojiRichesDef.palyAudio(random < 0.3 ? slotEmojiRichesDef.audio.prizeMedwinEnd1 : random < 0.6 ? slotEmojiRichesDef.audio.prizeMedwinEnd2 : slotEmojiRichesDef.audio.prizeMedwinEnd3);
            }, 0.5);
            this.notice_spine.setAnimation(0, "bigwin_win", false);
            this.notice_spine.addAnimation(0, "bigwin_idle", true);
          } else {
            slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.prizeMedwinMain, function (id) {
              _this10._totalCashAudioId = id;
            });
            this.scheduleOnce(function () {
              AudioManager.instance.stopSound(_this10._totalCashAudioId);
              var random = Math.random();
              slotEmojiRichesDef.palyAudio(random < 0.3 ? slotEmojiRichesDef.audio.prizeMedwinEnd1 : random < 0.6 ? slotEmojiRichesDef.audio.prizeMedwinEnd2 : slotEmojiRichesDef.audio.prizeMedwinEnd3);
            }, 0.5);
            this.notice_spine.setAnimation(0, "bigwin2_win", false);
            this.notice_spine.addAnimation(0, "bigwin2_idle", true);
          }
        }

        //进入免费模式初始页
        ;

        _proto.enterFreeMode = function enterFreeMode() {
          var _this11 = this;
          this.run_box.getComponent(slotEmojiRichesRun).scatterWin();
          this.scheduleOnce(function () {
            _this11.run_box.getComponent(slotEmojiRichesRun).scatteIdle();
            _this11._startFreeTime = 5;
            AudioManager.instance.stopAllEffect();
            slotEmojiRichesDef.palyMusic(slotEmojiRichesDef.audio.bgm_fs);
            _this11.enter_free_time.setScale(0, 0);
            _this11.enter_free_btn.setScale(0, 0);
            _this11.enter_free_time.getComponent(Label).string = slotEmojiRichesProxy.result.freeInfo.surplusFreeCount + "";
            _this11.enter_free.active = true;
            _this11.enter_free_spine.node.active = true;
            _this11.enter_free_spine.setAnimation(0, "intro", false);
            _this11.enter_free_spine.setCompleteListener(function () {
              _this11.enter_free_spine.setCompleteListener(null);
              _this11.enter_free_spine.setAnimation(0, "idle", true);
            });
            _this11.scheduleOnce(function () {
              tween(_this11.enter_free_btn).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
              tween(_this11.enter_free_time).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
            }, 0.2);
          }, 2);
        }

        //进入免费游戏
        ;

        _proto.enterFreePage = function enterFreePage() {
          var _this12 = this;
          this._startFreeTime = 0;
          this.run_spine.setAnimation(0, "free", true);
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[1];
          this.run_bg.getComponent(Sprite).spriteFrame = this.run_box_bgList[1];
          this.odd_box.getChildByName("Sprite").getComponent(Sprite).spriteFrame = this.odd_box_bgList[1];
          this.odd_box.getChildByName("odd").getComponent(Label).string = "x" + slotEmojiRichesProxy.result.freeInfo.odds;
          this.footSprite.setPosition(v3(0, -620, 0));
          if (slotEmojiRichesProxy.result.freeInfo.odds > 1) {
            this.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 255;
            this.odd_box.getComponent(UITransform).priority = 10;
          } else {
            this.odd_box.getChildByName("odd").getComponent(UIOpacity).opacity = 150;
            this.odd_box.getComponent(UITransform).priority = 1;
          }
          this.enter_free.active = false;
          this.enter_free_spine.node.active = false;
          this.bg_bot_normal.active = false;
          this.bg_bot_free.active = true;
          this.turn_free_box.active = true;
          if (slotEmojiRichesProxy.result) {
            this.setFreeCount(slotEmojiRichesProxy.result.freeInfo.surplusFreeCount);
          }
          this.scheduleOnce(function () {
            _this12.changeState(RunState.NORMAL);
            _this12._isInitReadyIntoFree = false;
            _this12._lock = false;
            _this12._isFree = true;
          }, 0.5);
        }

        //进入结束免费模式页面
        ;

        _proto.endFree = function endFree() {
          var _this13 = this;
          this.free_end_cash.reset(0);
          this.run_spine.setAnimation(0, "normal", true);
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[0];
          this.run_bg.getComponent(Sprite).spriteFrame = this.run_box_bgList[0];
          this.odd_box.getChildByName("Sprite").getComponent(Sprite).spriteFrame = this.odd_box_bgList[0];
          this.footSprite.setPosition(v3(0, -640, 0));
          this.free_end_cash.node.setScale(v3(0, 0, 0));
          this.bg_bot_normal.active = true;
          this.bg_bot_free.active = false;
          this.turn_free_box.active = false;
          this._isFree = false;
          this.free_end.active = true;
          this.free_end_spine.node.active = true;
          this.free_end_spine.setAnimation(0, "intro", false);
          this.scheduleOnce(function () {
            tween(_this13.free_end_cash.node).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
          }, 0.2);
          this.free_end_spine.addAnimation(0, "idle", true);
          this.free_end_cash.string = Common.numFormat(slotEmojiRichesProxy.result.freeInfo.totalPrizeAmount + "");
          this.free_end_btn.setScale(0, 0);

          //头部金额设置成免费模式总金额
          this.changeAdBg(slotEmojiRichesProxy.result.freeInfo.totalPrizeAmount);
          this.all_win_number.reset(slotEmojiRichesProxy.result.freeInfo.totalPrizeAmount);

          //免费模式结束音乐
          slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.bgm_totalwin_main, function (id) {
            _this13._audioId = id;
            _this13.scheduleOnce(function () {
              AudioManager.instance.stopSound(id);
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.bgm_totalwin_end, function (id) {
                _this13._audioId = id;
              });
            }, 3);
          });
          this.scheduleOnce(function () {
            tween(_this13.free_end_cash.node).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
            tween(_this13.free_end_btn).to(0.2, {
              scale: v3(1, 1, 1)
            }).call(function () {
              slotEmojiRichesDef.palyAudio(slotEmojiRichesDef.audio.fsWonTitle);
              _this13._endFreeTime = 5;
            }).start();
          }, 1.3);
        }

        //免费模式结束进入到普通模式
        ;

        _proto.endNormal = function endNormal() {
          var _this14 = this;
          if (slotEmojiRichesProxy.result.freeInfo["totalPrizeAmount"] > 0) {
            this.txt_win.reset(slotEmojiRichesProxy.result.freeInfo["totalPrizeAmount"]);
            //免费模式结束展示总金额
            var odd = slotEmojiRichesProxy.result.freeInfo["totalPrizeAmount"] / this._bet;
            if (odd <= 5) {
              this.notice_spine.setAnimation(0, "normal_xnchange", false);
            } else if (odd > 5 && odd < 60) {
              this.notice_spine.setAnimation(0, "bigwin_xnchange", false);
            } else {
              this.notice_spine.setAnimation(0, "bigwin2_xnchange", false);
            }
            this.notice_bg.active = false;
            this.txt_winFree.reset(0);
            this.all_win.getChildByName("Sprite").getComponent(Sprite).spriteFrame = this.all_win_frames[0];
            this.all_win_number.getComponent(Label).string = Common.numFormat(slotEmojiRichesProxy.result.freeInfo["totalPrizeAmount"] + "");
            this.all_win.active = true;
          } else {
            this.txt_win.reset(0);
            this.all_win.active = false;
            this.one_win.active = false;
            this.notice_bg.active = true;
          }
          AudioManager.instance.stopAllEffect();
          slotEmojiRichesDef.palyMusic(slotEmojiRichesDef.audio.bgm_mg);
          this.free_end.active = false;
          this._endFreeTime = 0;
          this.scheduleOnce(function () {
            _this14._lock = false;
            _this14.changeState(RunState.NORMAL);
            _this14.startGameAni(false);
          }, 1);
        }

        //设置免费次数
        ;

        _proto.setFreeCount = function setFreeCount(count) {
          this._freeLastTime = count;
          if (this._freeLastTime >= 1) {
            this.turn_free_box_time.getComponent(Label).string = this._freeLastTime + "";
            this.turn_free_box_last.active = false;
            this.turn_free_box_noLast.active = true;
            this.turn_free_box_time.active = true;
          } else {
            this.turn_free_box_last.active = true;
            this.turn_free_box_noLast.active = false;
            this.turn_free_box_time.active = false;
          }
        }

        //点击直接结束大奖动画
        ;

        _proto.clickHideBigWin = function clickHideBigWin() {
          var _this15 = this;
          if (!this._isTrueBigWin) return;
          this._isTrueBigWin = true;
          this.big_win_txt.reset(slotEmojiRichesProxy.result.prizeAmount);
          this.scheduleOnce(function () {
            _this15.big_win_txt.reset();
            _this15.big_win_box.active = false;
            _this15.big_win.setAnimation(0, "", true);
            _this15.allEnd(true);
            console.log("clickHideBigWin");
          }, 1);
        };
        _proto.calResult = function calResult(call) {
          var _this16 = this;
          this._cal_current_result.scatterNum = 0;
          this._cal_current_result.showLineIndex = 0;
          this._cal_current_result.result = [[], [], [], [], [], []];
          var openNum = slotEmojiRichesProxy.result["OpenNums"][this._current_index]["openNum"];
          var prizeIdx = slotEmojiRichesProxy.result["OpenNums"][this._current_index]["fixedIdx"];
          var prizeNum = slotEmojiRichesProxy.result["OpenNums"][this._current_index]["prizeNum"];
          //针对第一轮的每束的期待动画和全局的期待动画
          if (this._current_index == 0) {
            openNum.map(function (item, index) {
              if (index % 6 == 0) {
                _this16._cal_current_result.result[0].push(item);
              } else if (index % 6 == 1) {
                _this16._cal_current_result.result[1].push(item);
              } else if (index % 6 == 2) {
                _this16._cal_current_result.result[2].push(item);
              } else if (index % 6 == 3) {
                _this16._cal_current_result.result[3].push(item);
              } else if (index % 6 == 4) {
                _this16._cal_current_result.result[4].push(item);
              } else {
                _this16._cal_current_result.result[5].push(item);
              }
            });
            this._cal_current_result.result.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1 == "9") {
                  _this16._cal_current_result.scatterNum += 1;
                  if (_this16._cal_current_result.scatterNum == 2) {
                    _this16._cal_current_result.showLineIndex = index + 1;
                  }
                }
              });
            });
          } else {
            openNum.map(function (item, index) {
              if (index % 6 == 0) {
                _this16._cal_current_result.result[0].push(item);
              } else if (index % 6 == 1) {
                _this16._cal_current_result.result[1].push(item);
              } else if (index % 6 == 2) {
                _this16._cal_current_result.result[2].push(item);
              } else if (index % 6 == 3) {
                _this16._cal_current_result.result[3].push(item);
              } else if (index % 6 == 4) {
                _this16._cal_current_result.result[4].push(item);
              } else {
                _this16._cal_current_result.result[5].push(item);
              }
            });
            //不是第一轮，计算上一轮一共多少satter，确定这一轮是否展示全局期待动画
            slotEmojiRichesProxy.result["OpenNums"][this._current_index - 1]["openNum"].map(function (item, index) {
              if (item == "9") {
                _this16._cal_current_result.scatterNum += 1;
              }
            });
          }
          this._cal_current_result.prizeIdx = [];
          this._cal_current_result.prizeNum = [];
          this._cal_current_result.prizeIdxList = [];
          this._cal_current_result.prizeNumList = [];
          this._cal_current_result.lineList = {};
          if (prizeNum) {
            prizeNum.map(function (item) {
              item.idx.map(function (item1) {
                var childIndex = 0,
                  parentIndex = 0;
                parentIndex = item1 % 6;
                childIndex = Math.floor(item1 / 6);
                _this16._cal_current_result.prizeNum.push({
                  parentIndex: parentIndex,
                  childIndex: childIndex,
                  item: item1
                });
                _this16._cal_current_result.prizeNumList.push(item1);
                // //计算中奖号码的光
                var lineList = {
                  index: item1,
                  childIndex: childIndex,
                  parentIndex: parentIndex,
                  left: false,
                  right: false,
                  top: false,
                  bottom: false
                };
                if (_this16._cal_current_result.lineList[item1]) {
                  lineList = _this16._cal_current_result.lineList[item1];
                }

                //计算当前item上下左右的中奖
                if (parentIndex == 0) {
                  //没有左边
                  lineList.left = true;
                  if (childIndex == 0) {
                    //0
                    lineList.top = true;
                    item.idx.indexOf(1) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(6) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (childIndex == 1) {
                    //6
                    item.idx.indexOf(0) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(12) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(7) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                  } else if (childIndex == 2) {
                    //12
                    item.idx.indexOf(6) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(18) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(13) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                  } else if (childIndex == 3) {
                    //18
                    item.idx.indexOf(12) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(24) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(19) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                  } else if (childIndex == 4) {
                    //24
                    item.idx.indexOf(18) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(30) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(25) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                  } else if (childIndex == 5) {
                    //30
                    lineList.bottom = true;
                    item.idx.indexOf(24) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(31) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                  }
                } else if (parentIndex == 5) {
                  //没有右边
                  lineList.right = true;
                  if (childIndex == 0) {
                    //5
                    lineList.top = true;
                    item.idx.indexOf(4) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(11) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (childIndex == 1) {
                    //11
                    item.idx.indexOf(5) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(17) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(10) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                  } else if (childIndex == 2) {
                    //17
                    item.idx.indexOf(11) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(23) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(16) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                  } else if (childIndex == 3) {
                    //23
                    item.idx.indexOf(17) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(29) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(22) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                  } else if (childIndex == 4) {
                    //29
                    item.idx.indexOf(23) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(35) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                    item.idx.indexOf(28) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                  } else if (childIndex == 5) {
                    //35
                    lineList.bottom = true;
                    item.idx.indexOf(29) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(34) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                  }
                } else if (childIndex == 0) {
                  //没有上边
                  lineList.top = true;
                  if (parentIndex == 1) {
                    //1
                    item.idx.indexOf(0) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(2) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(7) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 2) {
                    //2
                    item.idx.indexOf(1) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(3) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(8) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 3) {
                    //3
                    item.idx.indexOf(2) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(4) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(9) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 4) {
                    //4
                    item.idx.indexOf(3) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(5) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(10) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  }
                } else if (childIndex == 5) {
                  //没有下边
                  lineList.bottom = true;
                  if (parentIndex == 1) {
                    //31
                    item.idx.indexOf(30) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(32) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(25) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                  } else if (parentIndex == 2) {
                    //32
                    item.idx.indexOf(31) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(33) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(26) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                  } else if (parentIndex == 3) {
                    //33
                    item.idx.indexOf(32) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(34) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(27) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                  } else if (parentIndex == 4) {
                    //34
                    item.idx.indexOf(33) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(35) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(28) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                  }
                } else if (childIndex == 1) {
                  if (parentIndex == 1) {
                    //7
                    item.idx.indexOf(6) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(8) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(1) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(13) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 2) {
                    //8
                    item.idx.indexOf(7) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(9) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(2) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(14) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 3) {
                    //9
                    item.idx.indexOf(8) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(10) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(3) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(15) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 4) {
                    //10
                    item.idx.indexOf(9) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(11) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(4) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(16) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  }
                } else if (childIndex == 2) {
                  if (parentIndex == 1) {
                    //13
                    item.idx.indexOf(12) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(14) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(7) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(19) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 2) {
                    //14
                    item.idx.indexOf(13) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(15) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(8) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(20) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 3) {
                    //15
                    item.idx.indexOf(14) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(16) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(9) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(21) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 4) {
                    //16

                    item.idx.indexOf(15) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(17) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(10) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(22) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  }
                } else if (childIndex == 3) {
                  if (parentIndex == 1) {
                    //19
                    item.idx.indexOf(18) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(20) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(13) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(25) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 2) {
                    //20
                    item.idx.indexOf(19) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(21) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(14) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(26) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 3) {
                    //21
                    item.idx.indexOf(20) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(22) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(15) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(27) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 4) {
                    //22
                    item.idx.indexOf(21) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(23) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(16) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(28) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  }
                } else if (childIndex == 4) {
                  if (parentIndex == 1) {
                    //25
                    item.idx.indexOf(24) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(26) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(19) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(31) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 2) {
                    //26
                    item.idx.indexOf(25) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(27) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(20) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(32) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 3) {
                    //27
                    item.idx.indexOf(26) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(28) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(21) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(33) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  } else if (parentIndex == 4) {
                    //28
                    item.idx.indexOf(27) < 0 ? lineList.left = true : openNum[item1] != 10 ? lineList.left = false : "";
                    item.idx.indexOf(29) < 0 ? lineList.right = true : openNum[item1] != 10 ? lineList.right = false : "";
                    item.idx.indexOf(22) < 0 ? lineList.top = true : openNum[item1] != 10 ? lineList.top = false : "";
                    item.idx.indexOf(34) < 0 ? lineList.bottom = true : openNum[item1] != 10 ? lineList.bottom = false : "";
                  }
                }
                _this16._cal_current_result.lineList[item1] = lineList;
              });
            });
          }
          if (prizeIdx) {
            prizeIdx.map(function (item1) {
              var childIndex = 0,
                parentIndex = 0;
              if (_this16._cal_current_result.prizeNumList.indexOf(item1) == -1) {
                parentIndex = item1 % 6;
                childIndex = Math.floor(item1 / 6);
                _this16._cal_current_result.prizeIdx.push({
                  parentIndex: parentIndex,
                  childIndex: childIndex,
                  item: item1
                });
              }
            });
            this._cal_current_result.prizeIdxList = prizeIdx;
          }

          //删除重复的光
          this.scheduleOnce(function () {
            // for (let i in this._cal_current_result.lineList) {
            //     let data = this._cal_current_result.lineList;
            //     if (i == "5" || i == "11" || i == "17" || i == "23" || i == "29") {
            //         data[i].bottom == true && data[parseInt[i] + 6 + ""] && data[parseInt[i] + 6 + ""].top == true ? (data[parseInt[i] + ""].top = false) : "";
            //     } else if (i == "35") {
            //     } else {
            //         data[i].right == true && data[parseInt(i) + 1 + ""] && data[parseInt(i) + 1 + ""].left == true ? (data[i].right = false) : "";
            //         data[i].bottom == true && data[parseInt(i) + 6 + ""] && data[parseInt(i) + 6 + ""].top == true ? (data[i].bottom = false) : "";
            //     }
            // }
            //console.log(this._cal_current_result.lineList);
            call && call();
          }, 0.05);
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this17 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_start.setAnimation(0, "spin", false);
            this.turn_start.setCompleteListener(function () {
              _this17.turn_start.setCompleteListener(null);
              if (slotEmojiRichesProxy.result && slotEmojiRichesProxy.result.prizeAmount > 0) {
                _this17.turn_start.setAnimation(0, "stop", true);
              } else {
                if (_this17._lock) {
                  _this17.turn_start.timeScale = 200;
                } else {
                  _this17.turn_start.timeScale = 1;
                }
                _this17.turn_start.setAnimation(0, "idle", true);
              }
            });
          } else {
            this.turn_start.timeScale = 1;
            this.turn_start.setAnimation(0, "idle", true);
          }
        }

        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this18 = this;
          //进入页面获取上次数据
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.UPDATE_BETLIST, this.initPage, this);
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.SELECT_BET, function (count) {
            _this18.updateSetData();
            Tween.stopAllByTarget(_this18.txt_bet.node);
            tween(_this18.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //第一轮结束
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.END, function () {
            _this18.changeState(RunState.STOP);
          }, this);

          //中奖后号码补充
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.SHOWNEXT, function () {
            _this18.changeState(RunState.SHOWNEXT);
          }, this);

          //补充新一轮号码结束
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.SHOWNEXTEND, function () {
            _this18.changeState(RunState.SHOWNEXTEND);
          }, this);

          //期待光线-》公告栏展示对应公告
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.NOTICESHOWANI, function () {
            _this18.notice_bg.active = false;
            _this18.notice_scatter_waiting.active = true;
          }, this);
          //隐藏期待光线-》公告栏隐藏对应公告
          slotEmojiRichesProxy.on(slotEmojiRichesGameEvent.NOTICEHIDEANI, function () {
            _this18.notice_bg.active = true;
            _this18.notice_scatter_waiting.active = false;
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          //this.windowMask.active = false;
          this.window_run_mask.active = false;
          this._window.hideCard();
        }

        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          var _this19 = this;
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this.changeBtnActive(false);
            this._auto = true;
            this.turn_start.getComponent(AddSpineEffect).animation = "push2";
            this.turn_start.setAnimation(0, "auto", true);
            this.scheduleOnce(function () {
              _this19.turn_start.setAnimation(0, "auto", true);
            });
            this.turn_start.setAnimation(0, "auto", true);
          } else {
            this._auto = false;
            //this.changeBtnActive(false)
            this.turn_start.getComponent(AddSpineEffect).animation = "push";
            this.turn_start.setAnimation(0, "idle", true);
          }
          this.turn_auto_leftCount.node.active = this._auto;
        };
        _proto.checkAuto = function checkAuto() {
          if (this._isFree) return;
          if (this._auto) {
            this._autoTimes--;
            this.turn_auto_leftCount.string = "" + this._autoTimes;
            if (this._autoTimes <= 0) {
              this.setAuto(0);
            }
          }
        }

        //底部按钮和金额样式修改
        ;

        _proto.changeBtnActive = function changeBtnActive(b) {
          if (this._auto) {
            return;
          }
          if (b) {
            if (slotEmojiRichesProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 50;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            if (slotEmojiRichesProxy.getBet() == 1000000) {
              this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 50;
            } else {
              this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
            }
            this.normalBtn.getChildByName("btn4").getComponent(UIOpacity).opacity = 255;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 50;
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 50;
            this.normalBtn.getChildByName("btn4").getComponent(UIOpacity).opacity = 50;
          }
          if (b) {
            this.txt_bet.color = color().fromHEX("#86DCFF");
            this.txt_gold.color = color().fromHEX("#86DCFF");
            this.txt_win.getComponent(Label).color = color().fromHEX("#86DCFF");
          } else {
            this.txt_bet.color = Color.WHITE;
            this.txt_gold.color = Color.WHITE;
            this.txt_win.getComponent(Label).color = Color.WHITE;
          }
        }

        //获取总金额
        ;

        _proto.updateGoldData = function updateGoldData(used) {
          if (used === void 0) {
            used = 0;
          }
          this.txt_gold.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
          this.txt_goldFree.string = Common.numFormat(parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD) + used)) + "";
        }

        //获取下注金额
        ;

        _proto.updateSetData = function updateSetData() {
          this._bet = slotEmojiRichesProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet + "");
          this.txt_betFree.string = Common.numFormat(this._bet + "");
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          slotEmojiRichesProxy.setBet(betListIndex, betCount);
          this.checkDownOrUpBet();
        }
        //是否启动加速
        ;

        _proto.clickChangeQuick = function clickChangeQuick() {
          if (this._runDelay == 0) {
            this._runDelay = 0.1;
            this.game_type.setAnimation(0, "off", true);
          } else {
            this._runDelay = 0;
            this.game_type.setAnimation(0, "intro_on", false);
            this.game_type.addAnimation(0, "on", true);
          }
        }
        //展示下注金额
        ;

        _proto.clickShowBet = function clickShowBet() {
          if (this._lock) return;
          if (this._isInitReadyIntoFree) return;
          Common.loadPopBuddle("prefab/slotEmojiRichesSetBase", slotEmojiRichesProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(slotEmojiRichesSetBase).setData({
              _curBetListIndex: slotEmojiRichesProxy._curBetListIndex,
              _curBetCount: slotEmojiRichesProxy._curBetCount,
              betMaxCount: slotEmojiRichesProxy.betMaxCount,
              betList: slotEmojiRichesProxy.betList,
              betRate: slotEmojiRichesProxy.betRate
            });
          }, true);
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._lock) return;
          slotEmojiRichesProxy._curBetCount--;
          if (slotEmojiRichesProxy._curBetCount < 0) {
            slotEmojiRichesProxy._curBetListIndex--;
            if (slotEmojiRichesProxy._curBetListIndex < 0) {
              slotEmojiRichesProxy._curBetListIndex++;
              slotEmojiRichesProxy._curBetCount++;
            } else {
              slotEmojiRichesProxy._curBetCount = slotEmojiRichesProxy.betMaxCount - 1;
              slotEmojiRichesProxy.setBet(slotEmojiRichesProxy._curBetListIndex, slotEmojiRichesProxy._curBetCount);
            }
          } else {
            slotEmojiRichesProxy.setBet(slotEmojiRichesProxy._curBetListIndex, slotEmojiRichesProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._lock) return;
          slotEmojiRichesProxy._curBetCount++;
          if (slotEmojiRichesProxy._curBetCount >= slotEmojiRichesProxy.betMaxCount) {
            slotEmojiRichesProxy._curBetListIndex++;
            if (slotEmojiRichesProxy._curBetListIndex >= slotEmojiRichesProxy.betList.length) {
              slotEmojiRichesProxy._curBetListIndex--;
              slotEmojiRichesProxy._curBetCount--;
            } else {
              slotEmojiRichesProxy._curBetCount = 0;
              slotEmojiRichesProxy.setBet(slotEmojiRichesProxy._curBetListIndex, slotEmojiRichesProxy._curBetCount);
            }
          } else {
            slotEmojiRichesProxy.setBet(slotEmojiRichesProxy._curBetListIndex, slotEmojiRichesProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (slotEmojiRichesProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 120;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (slotEmojiRichesProxy.getBet() == 1000000) {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 120;
          } else {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
          }
        }
        //展示自动下注弹出框
        ;

        _proto.clickShowAutoBet = function clickShowAutoBet() {
          var _this20 = this;
          if (this._lock) return;
          if (this._isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          Common.loadPopBuddle("prefab/slotEmojiRichesSetAuto", slotEmojiRichesProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(slotEmojiRichesSetAuto).setData({
              gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
              bet: _this20._bet,
              win: 0
            });
          }, true);
        };
        _proto.onClickChangeBottomBtn = function onClickChangeBottomBtn() {
          if (this.normalBtn.active) {
            this.moreBtn.active = true;
            this.normalBtn.active = false;
          } else {
            this.moreBtn.active = false;
            this.normalBtn.active = true;
          }
        }
        //底部返回首页
        ;

        _proto.clickBottomBackHome = function clickBottomBackHome() {
          Common.returnToHall(this, slotEmojiRichesProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          if (this._isInitReadyIntoFree) return;
          Common.loadPopBuddle("prefab/slotEmojiRichesHelp", slotEmojiRichesProxy.bundle, function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.setScale(v3(1080 / 1900, 1080 / 1900, 1));
            } else {
              node.angle = 90;
            }
          }, true);
        }
        //展示历史记录
        ;

        _proto.clickShowHistory = function clickShowHistory() {
          if (this._isInitReadyIntoFree) return;
          if (this._lock) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneHistory", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneHistory).setGameType("slotEmojiRiches");
          }, true);
        }

        //展示排行榜
        ;

        _proto.clickShowRank = function clickShowRank() {
          if (this._isInitReadyIntoFree) return;
          Common.loadPopPublic("prefab/fortuneCommon/FortuneRank", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneRank).send("slotEmojiRiches");
          }, true);
        }
        //公告滚动
        ;

        _proto.updateNotice = function updateNotice(dt) {
          this._noticeDelay -= dt;
          if (this._noticeDelay < 0) this.notice_title.setPosition(this.notice_title.position.x - 1.5, this.notice_title.position.y);
          if (this.notice_title.getPosition().x < -this.notice_title.getComponent(UITransform).width / 2 - 233) {
            this.changeNotice();
          }
        }
        //公告
        ;

        _proto.changeNotice = function changeNotice() {
          this._noticeDelay = 2;
          this._noticeIndex++;
          if (this._noticeIndex >= this.notice_frames.length) {
            this._noticeIndex = 0;
          }
          this.notice_title.getComponent(Sprite).spriteFrame = this.notice_frames[this._noticeIndex];
          var x = this.notice_title.getComponent(UITransform).width / 2 > 233 ? this.notice_title.getComponent(UITransform).width / 2 - 233 : 0;
          this.notice_title.setPosition(x, this.notice_title.position.y);
        };
        _proto.onDestroy = function onDestroy() {
          ProxyMgr.close(this);
          EventManager.off(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.off(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
          EventManager.off(ConfigManager.eventTransform.setAuto, this.setAuto, this);
        };
        return slotEmojiRichesView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "normalBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moreBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "game_type", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "topBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bgList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot_normal", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot_free", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "run_bg", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "run_box", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "run_spine", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "window_run_mask", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "run_box_bgList", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "notice_spine", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "notice_scatter_waiting", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "big_win_box", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "enter_free", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_spine", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_time", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "free_end", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "free_end_spine", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "free_end_cash", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "one_win", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "all_win", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "all_win_number", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "all_win_frames", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "odd_box", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "odd_box_bgList", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_last", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_noLast", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_time", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "footSprite", [_dec49], {
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
  r('virtual:///prerequisite-imports/slotEmojiRichesGame', 'chunks:///_virtual/slotEmojiRichesGame'); 
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