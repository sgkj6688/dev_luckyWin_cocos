System.register("chunks:///_virtual/slotCocktailNightsDef.ts", ['cc', './slotCocktailNightsProxy.ts', './AudioManager.ts'], function (exports) {
  var cclegacy, AudioClip, slotCocktailNightsProxy, AudioManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      AudioClip = module.AudioClip;
    }, function (module) {
      slotCocktailNightsProxy = module.default;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5fd98L+AtpL/rmm9J4Jw1q7", "slotCocktailNightsDef", undefined);
      var slotCocktailNightsDef = exports('slotCocktailNightsDef', /*#__PURE__*/function () {
        function slotCocktailNightsDef() {}
        slotCocktailNightsDef.palyAudio = function palyAudio(name, call) {
          if (call === void 0) {
            call = null;
          }
          var bundle = slotCocktailNightsProxy.bundle;
          var path = "sound/" + name;
          //console.log(name)
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
        slotCocktailNightsDef.palyMusic = function palyMusic(name) {
          var bundle = slotCocktailNightsProxy.bundle;
          var path = "sound/" + name;
          bundle.load(path, AudioClip, function (err, audio) {
            AudioManager.instance.playGameMusic(audio, true);
          });
        };
        return slotCocktailNightsDef;
      }());
      slotCocktailNightsDef.audio = {
        prizeSmallwin: 'prizeSmallwin',
        //消除播放 done
        prizeSmallwinMultiplied: 'prizeSmallwinMultiplied',
        //有倍数相乘后再播放 done
        prizeInfobarTotalwin: 'prizeInfobarTotalwin',
        //总金额播放 done
        bgm_mg: 'bgm_mg',
        //普通模式背景音乐 done
        bgm_fs: 'bgm_fs',
        //特殊模式背景音乐 done
        spinStop: 'spinStop',
        //12345轴落下声音 done
        spinStopQuick: 'spinStopQuick',
        //快速模式落下后播放 done
        multiActivate: 'multiActivate',
        //倍数飞下来播放 done
        multiCombine: 'multiCombine',
        //倍数合起来播放 done
        symWildActivate: 'symWildActivate',
        //Wild找对应的倍数 done
        symWildSpawn: 'symWildSpawn',
        //变成wild done
        totalwinShine: 'totalwinShine',
        //总金额背景变化 done
        symScatter: 'symScatter',
        //界面Scatter播放动画声音 done
        heartbeat: 'heartbeat',
        //期待光效循环播放
        heartbeatNoise: 'heartbeatNoise',
        //期待光效播放 done
        heartbeatSlowdrop: 'heartbeatSlowdrop',
        //期待符号落下 done
        scatterWinHighlight: 'scatterWinHighlight',
        //中免费scatter一起播动画声 done
        fsWonTitle: 'fsWonTitle',
        //免费结束页按钮出现的时候播放 done
        prizeInfobarTotalwinMedMain: 'prizeInfobarTotalwinMedMain',
        //总奖声5倍以上声 done
        prizeInfobarTotalwinMedEnd: 'prizeInfobarTotalwinMedEnd',
        //总奖声5倍以上结束声 done
        fastspinStart: 'fastspinStart',
        //旋转光效按顺序播放这两个音效 done
        fastspinEnd: 'fastspinEnd',
        //旋转光效没进入成功 done
        shakerMove: 'shakerMove',
        //杯子移动（1个杯子一个） done
        shakerStop: 'shakerStop',
        //杯子移动（最后一个）done
        fsTrans: 'fsTrans',
        //进入免费初始页面 done
        uiStart: 'uiStart',
        //免费初始页 & 结束页 按钮 done
        bgm_bigwin_main: 'bgm_bigwin_main',
        //中大奖动画 done
        bgm_bigwin_end: 'bgm_bigwin_end',
        //中大奖结束动画 done
        bgm_totalwin_main: 'bgm_totalwin_main',
        //特殊模式总奖播放 done
        bgm_totalwin_end: 'bgm_totalwin_end',
        //特殊模式总奖结束播放 done
        featureBuyBtn: 'featureBuyBtn',
        //买免费弹出框 done
        featureBuyCancel: 'featureBuyCancel',
        //买免费cancel done
        featureBuyStart: 'featureBuyStart',
        //买免费 done
        spinBtn: 'spinBtn',
        //转动最开始播放 done
        uiInfo: 'uiInfo'
      };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotCocktailNightsGame", ['./slotCocktailNightsDef.ts', './slotCocktailNightsItem.ts', './slotCocktailNightsProxy.ts', './slotCocktailNightsRun.ts', './slotCocktailNightsScene.ts', './slotCocktailNightsView.ts', './slotCocktailNightsWindow.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/slotCocktailNightsItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotCocktailNightsProxy.ts', './slotCocktailNightsDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, sp, SpriteFrame, v3, UITransform, Sprite, UIOpacity, tween, Mask, Component, slotCocktailNightsProxy, slotCocktailNightsGameEvent, slotCocktailNightsDef;
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
      v3 = module.v3;
      UITransform = module.UITransform;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Mask = module.Mask;
      Component = module.Component;
    }, function (module) {
      slotCocktailNightsProxy = module.default;
      slotCocktailNightsGameEvent = module.slotCocktailNightsGameEvent;
    }, function (module) {
      slotCocktailNightsDef = module.slotCocktailNightsDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;
      cclegacy._RF.push({}, "08003VhqexGqaW5J+M3djKe", "slotCocktailNightsItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var slotCocktailNightsItem = exports('slotCocktailNightsItem', (_dec = ccclass("slotCocktailNightsItem"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(sp.Skeleton), _dec11 = property(sp.Skeleton), _dec12 = property(sp.Skeleton), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec15 = property(SpriteFrame), _dec16 = property(SpriteFrame), _dec17 = property(SpriteFrame), _dec18 = property(SpriteFrame), _dec19 = property(SpriteFrame), _dec20 = property(SpriteFrame), _dec21 = property(SpriteFrame), _dec22 = property(SpriteFrame), _dec23 = property(SpriteFrame), _dec24 = property(SpriteFrame), _dec25 = property(SpriteFrame), _dec26 = property(SpriteFrame), _dec27 = property(SpriteFrame), _dec28 = property(SpriteFrame), _dec29 = property(SpriteFrame), _dec30 = property(SpriteFrame), _dec31 = property(SpriteFrame), _dec32 = property(sp.SkeletonData), _dec33 = property(sp.SkeletonData), _dec34 = property(sp.SkeletonData), _dec35 = property(sp.SkeletonData), _dec36 = property(sp.SkeletonData), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotCocktailNightsItem, _Component);
        function slotCocktailNightsItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "icon", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBg", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatter", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterTop", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "scatterDown", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wild", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpine", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "winSpine", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildDownSpine", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildUpSpine", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wildSmoke", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListA", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurListA", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListB", _descriptor14, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurListB", _descriptor15, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListC", _descriptor16, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurListC", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListD", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurListD", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListPoker", _descriptor20, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconBlurListPoker", _descriptor21, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldList", _descriptor22, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListA", _descriptor23, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgBlurListA", _descriptor24, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListB", _descriptor25, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgBlurListB", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListC", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgBlurListC", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListD", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgBlurListD", _descriptor30, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineListA", _descriptor31, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineListB", _descriptor32, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineListC", _descriptor33, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpineListD", _descriptor34, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconSpinePokerList", _descriptor35, _assertThisInitialized(_this));
          _this._cardData = null;
          _this._parentIndex = 0;
          return _this;
        }
        var _proto = slotCocktailNightsItem.prototype;
        _proto.start = function start() {
          var _this2 = this;
          this.node.on(Node.EventType.TOUCH_END, function () {
            _this2.onClick();
          });
        }
        //{IsReward: false, Length: 4, Rim: 0, Sym: 11}
        //174  340 506 668
        ;

        _proto.initCard = function initCard(cardData, parentIndex, isClear) {
          var _this3 = this;
          if (isClear === void 0) {
            isClear = true;
          }
          this._cardData = cardData;
          this._parentIndex = parentIndex;
          this.iconBg.active = false;
          this.icon.active = false;
          this.scatter.node.active = false;
          this.wild.node.active = false;
          this.iconSpine.node.active = false;
          this.scatterTop.node.active = false;
          this.scatterDown.node.active = false;
          this.wildDownSpine.node.active = false;
          this.wildUpSpine.node.active = false;
          this.iconBg.setScale(v3(1, 1, 1));
          if (cardData.Sym == 0) {
            this.node.setScale(v3(0.7, 0.7, 1));
            //this.node.getComponent(cc.Mask).enabled = false
            if (cardData.Length == 1) {
              this.scatter.skeletonData = this.iconSpineListA[0];
              this.scatter.node.setScale(v3(1, 1, 1));
              this.node.getComponent(UITransform).height = 174;
            } else if (cardData.Length == 2) {
              this.scatter.skeletonData = this.iconSpineListB[0];
              this.scatter.node.setScale(v3(1, 0.99, 1));
              this.node.getComponent(UITransform).height = 340;
            } else if (cardData.Length == 3) {
              this.scatter.skeletonData = this.iconSpineListC[0];
              this.scatter.node.setScale(v3(1, 0.98, 1));
              this.node.getComponent(UITransform).height = 506;
            } else if (cardData.Length == 4) {
              this.scatter.skeletonData = this.iconSpineListD[0];
              this.scatter.node.setScale(v3(1, 0.97, 1));
              this.node.getComponent(UITransform).height = 668;
            }
            this.node.getComponent(UITransform).priority = 50;
            this.scatter.node.active = true;
            this.scheduleOnce(function () {
              _this3.scatter.setAnimation(0, "idle", true);
            }, 0.1);
          } else if (cardData.Sym == 1) {
            this.node.setScale(v3(0.7, 0.7, 1));
            //this.node.getComponent(cc.Mask).enabled = false
            this.wild.node.active = true;
            if (cardData.Length == 1) {
              this.wild.skeletonData = this.iconSpineListA[1];
              this.wild.node.setScale(v3(1, 1, 1));
              this.node.getComponent(UITransform).height = 174;
            } else if (cardData.Length == 2) {
              this.wild.skeletonData = this.iconSpineListB[1];
              this.wild.node.setScale(v3(1, 0.99, 1));
              this.node.getComponent(UITransform).height = 340;
            } else if (cardData.Length == 3) {
              this.wild.skeletonData = this.iconSpineListC[1];
              this.wild.node.setScale(v3(1, 0.98, 1));
              this.node.getComponent(UITransform).height = 506;
            } else if (cardData.Length == 4) {
              this.wild.skeletonData = this.iconSpineListD[1];
              this.wild.node.setScale(v3(1, 0.97, 1));
              this.node.getComponent(UITransform).height = 668;
            }
            this.node.getComponent(UITransform).priority = 50;
            this.scheduleOnce(function () {
              _this3.wild.setAnimation(0, "idle", true);
            }, 0.1);
          } else {
            //this.node.getComponent(cc.Mask).enabled = true
            if (cardData.Length == 1) {
              if (isClear) {
                this.node.setScale(v3(0.7, 0.7, 1));
                if (cardData.Sym < 8) {
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[0] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListA[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListA[cardData.Sym - 2];
                  if (cardData.Sym == 4) {
                    this.icon.setPosition(v3(0, -15));
                  } else if (cardData.Sym == 2) {
                    this.icon.setPosition(v3(0, 8));
                    this.icon.setScale(v3(1, 0.95, 1));
                  } else {
                    this.icon.setPosition(v3(0, 0));
                    this.icon.setScale(v3(1, 1, 1));
                  }
                } else {
                  this.icon.setPosition(v3(0, 0));
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[0] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListA[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListPoker[cardData.Sym - 8];
                }
              } else {
                this.node.setScale(v3(1.4, 1, 1));
                if (cardData.Sym < 8) {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListA[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListA[cardData.Sym - 2];
                } else {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListA[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListPoker[cardData.Sym - 8];
                }
              }
              this.node.getComponent(UITransform).height = 174;
              this.iconBg.getComponent(UITransform).height = 174;
              this.iconBg.setScale(v3(1, 0.98, 1));
            } else if (cardData.Length == 2) {
              if (isClear) {
                this.node.setScale(v3(0.7, 0.7, 1));
                if (cardData.Sym < 8) {
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[1] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListB[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListB[cardData.Sym - 2];
                  if (cardData.Sym == 4) {
                    this.icon.setPosition(v3(0, -30));
                  } else if (cardData.Sym == 5) {
                    this.icon.setPosition(v3(0, -30));
                  } else if (cardData.Sym == 6) {
                    this.icon.setPosition(v3(0, -10));
                  } else {
                    this.icon.setPosition(v3(0, 0));
                  }
                } else {
                  this.icon.setPosition(v3(0, 0));
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[1] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListB[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListPoker[cardData.Sym - 8];
                }
              } else {
                this.node.setScale(v3(1.4, 1, 1));
                if (cardData.Sym < 8) {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListB[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListB[cardData.Sym - 2];
                } else {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListB[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListPoker[cardData.Sym - 8];
                }
              }
              this.node.getComponent(UITransform).height = 340;
              this.iconBg.getComponent(UITransform).height = 340;
              this.iconBg.setScale(v3(1, 0.98, 1));
            } else if (cardData.Length == 3) {
              if (isClear) {
                this.node.setScale(v3(0.7, 0.7, 1));
                if (cardData.Sym < 8) {
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[2] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListC[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListC[cardData.Sym - 2];
                  if (cardData.Sym == 4) {
                    this.icon.setPosition(v3(0, -45));
                  } else if (cardData.Sym == 5) {
                    this.icon.setPosition(v3(0, -65));
                  } else if (cardData.Sym == 6) {
                    this.icon.setPosition(v3(0, -30));
                  } else {
                    this.icon.setPosition(v3(0, 0));
                  }
                } else {
                  this.icon.setPosition(v3(0, 0));
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[2] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListC[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListPoker[cardData.Sym - 8];
                }
              } else {
                this.node.setScale(v3(1.4, 1, 1));
                if (cardData.Sym < 8) {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListC[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListC[cardData.Sym - 2];
                } else {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListC[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListPoker[cardData.Sym - 8];
                }
              }
              this.node.getComponent(UITransform).height = 506;
              this.iconBg.getComponent(UITransform).height = 506;
              this.iconBg.setScale(v3(1, 0.98, 1));
            } else if (cardData.Length == 4) {
              if (isClear) {
                this.node.setScale(v3(0.7, 0.7, 1));
                if (cardData.Sym < 8) {
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[3] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListD[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListD[cardData.Sym - 2];
                  if (cardData.Sym == 4) {
                    this.icon.setPosition(v3(0, -115));
                  } else if (cardData.Sym == 5) {
                    this.icon.setPosition(v3(0, -125));
                  } else if (cardData.Sym == 6) {
                    this.icon.setPosition(v3(0, -40));
                  } else {
                    this.icon.setPosition(v3(0, 0));
                  }
                } else {
                  this.icon.setPosition(v3(0, 0));
                  cardData.Rim == 1 ? this.iconBg.getComponent(Sprite).spriteFrame = this.goldList[3] : this.iconBg.getComponent(Sprite).spriteFrame = this.bgListD[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconListPoker[cardData.Sym - 8];
                }
              } else {
                this.node.setScale(v3(1.4, 1, 1));
                if (cardData.Sym < 8) {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListD[cardData.Sym - 2];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListD[cardData.Sym - 2];
                } else {
                  this.iconBg.getComponent(Sprite).spriteFrame = this.bgBlurListD[6];
                  this.icon.getComponent(Sprite).spriteFrame = this.iconBlurListPoker[cardData.Sym - 8];
                }
              }
              this.node.getComponent(UITransform).height = 668;
              this.iconBg.getComponent(UITransform).height = 668;
              this.iconBg.setScale(v3(1, 0.98, 1));
            }
            this.node.getComponent(UITransform).priority = 1;
            this.iconBg.getComponent(UIOpacity).opacity = 255;
            this.iconBg.active = true;
            this.icon.active = true;
          }
        };
        _proto.showWin = function showWin(cardData, parentIndex, childIndex, lineNum) {
          var _this4 = this;
          if (parentIndex === void 0) {
            parentIndex = 0;
          }
          if (childIndex === void 0) {
            childIndex = 0;
          }
          if (lineNum === void 0) {
            lineNum = 0;
          }
          cardData.Sym == 1 ? this.node.getComponent(UITransform).priority = 102 : this.node.getComponent(UITransform).priority = 101;
          this.winSpine.node.active = true;
          cardData.Length == 1 ? this.winSpine.setAnimation(0, "lv1", false) : cardData.Length == 2 ? this.winSpine.setAnimation(0, "lv2", false) : cardData.Length == 3 ? this.winSpine.setAnimation(0, "lv3", false) : this.winSpine.setAnimation(0, "lv4", false);
          if (cardData.Sym != 0 && cardData.Sym != 1) {
            //this.wild.node.active = false
            this.scatter.node.active = false;
            this.icon.active = false;
            this.iconSpine.node.active = true;
            if (cardData.Length == 1) {
              if (cardData.Sym < 8) {
                this.iconSpine.skeletonData = this.iconSpineListA[cardData.Sym];
              } else {
                this.iconSpine.skeletonData = this.iconSpinePokerList[cardData.Sym - 8];
              }
            } else if (cardData.Length == 2) {
              if (cardData.Sym < 8) {
                this.iconSpine.skeletonData = this.iconSpineListB[cardData.Sym];
              } else {
                this.iconSpine.skeletonData = this.iconSpinePokerList[cardData.Sym - 8];
              }
            } else if (cardData.Length == 3) {
              if (cardData.Sym < 8) {
                this.iconSpine.skeletonData = this.iconSpineListB[cardData.Sym];
              } else {
                this.iconSpine.skeletonData = this.iconSpinePokerList[cardData.Sym - 8];
              }
            } else if (cardData.Length == 4) {
              if (cardData.Sym < 8) {
                this.iconSpine.skeletonData = this.iconSpineListB[cardData.Sym];
              } else {
                this.iconSpine.skeletonData = this.iconSpinePokerList[cardData.Sym - 8];
              }
            }
            this.iconSpine.node.setScale(v3(1.25, 1.25, 1));
            this.iconSpine.addAnimation(0, "spawn", false);
            this.iconSpine.setAnimation(0, "win", true);
            this.scheduleOnce(function () {
              tween(_this4.iconBg.getComponent(UIOpacity)).to(0.25, {
                opacity: 0
              }).call(function () {
                _this4.iconBg.active = false;
                //this.winSpine.node.active = false;
                _this4.iconSpine.node.active = false;
                _this4.iconSpine.node.setScale(v3(1, 1, 1));
              }).start();
              if (cardData.Rim == 1) {
                _this4.node.getComponent(Mask).enabled = false;
                _this4.wild.node.active = true;
                if (cardData.Length == 1) {
                  _this4.wild.skeletonData = _this4.iconSpineListA[1];
                  _this4.wild.node.setScale(v3(1, 1, 1));
                  _this4.node.getComponent(UITransform).height = 174;
                } else if (cardData.Length == 2) {
                  _this4.wild.skeletonData = _this4.iconSpineListB[1];
                  _this4.wild.node.setScale(v3(1, 0.99, 1));
                  _this4.node.getComponent(UITransform).height = 340;
                } else if (cardData.Length == 3) {
                  _this4.wild.skeletonData = _this4.iconSpineListC[1];
                  _this4.wild.node.setScale(v3(1, 0.98, 1));
                  _this4.node.getComponent(UITransform).height = 506;
                } else if (cardData.Length == 4) {
                  _this4.wild.skeletonData = _this4.iconSpineListD[1];
                  _this4.wild.node.setScale(v3(1, 0.97, 1));
                  _this4.node.getComponent(UITransform).height = 668;
                }
                _this4.node.getComponent(UITransform).priority = 10;
                _this4.wild.setAnimation(0, "awaken", false);
                _this4.wild.addAnimation(0, "idle", true);
              }
            }, 1);
          } else if (cardData.Sym == 1) {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.symWildSpawn);
            childIndex != lineNum - 1 ? this.wildDownSpine.node.active = true : "";
            childIndex != 0 ? this.wildUpSpine.node.active = true : "";
            this.wildDownSpine.node.setPosition(v3(0, -this.node.getComponent(UITransform).height / 2, 0));
            this.wildUpSpine.node.setPosition(v3(0, this.node.getComponent(UITransform).height / 2, 0));
            this.scheduleOnce(function () {
              _this4.wildSmoke.node.active = true;
              var move = -300 - _this4.node.getPosition().y;
              slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.WILDMOVE, {
                _parentIndex: parentIndex
              });
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.symWildActivate);
              tween(_this4.wildSmoke.node).to(0.4, {
                position: v3(0, move, 0)
              }).call(function () {
                _this4.wildSmoke.node.active = false;
              }).start();
            }, parentIndex / 5);
          }
        }
        //针对scatter展示尖角
        ;

        _proto.scatterItemShowTopAndDown = function scatterItemShowTopAndDown() {
          this.scatterTop.node.active = true;
          this.scatterDown.node.active = true;
        };
        _proto.scatteItemWin = function scatteItemWin() {
          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.symScatter);
          this.node.getComponent(UITransform).priority = 102;
          this.scatter.setAnimation(0, "win", true);
        }

        //针对scatter的恢复普通动画
        ;

        _proto.scatteItemWinToIdle = function scatteItemWinToIdle() {
          this.node.getComponent(UITransform).priority = 10;
          this.scatter.setAnimation(0, "idle", true);
        };
        _proto.onClick = function onClick() {
          slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.CLICK_ITEM, {
            _cardData: this._cardData,
            _parentIndex: this._parentIndex,
            pos: this.node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0))
          });
        };
        return slotCocktailNightsItem;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "iconBg", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scatter", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "scatterTop", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "scatterDown", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "wild", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconSpine", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "winSpine", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "wildDownSpine", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "wildUpSpine", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "wildSmoke", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "iconListA", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurListA", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "iconListB", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurListB", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "iconListC", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurListC", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "iconListD", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurListD", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "iconListPoker", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "iconBlurListPoker", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "goldList", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "bgListA", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bgBlurListA", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "bgListB", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "bgBlurListB", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "bgListC", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "bgBlurListC", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "bgListD", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "bgBlurListD", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineListA", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineListB", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineListC", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "iconSpineListD", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "iconSpinePokerList", [_dec36], {
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

System.register("chunks:///_virtual/slotCocktailNightsProxy.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './ProxyMgr.ts', './Common.ts', './MainManager.ts'], function (exports) {
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
      cclegacy._RF.push({}, "b5533hIcAVGdK2XmYOnOt7B", "slotCocktailNightsProxy", undefined);
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotCocktailNightsGameEvent = exports('slotCocktailNightsGameEvent', /*#__PURE__*/function (slotCocktailNightsGameEvent) {
        slotCocktailNightsGameEvent["ENTER_ROOM"] = "enterRoom";
        slotCocktailNightsGameEvent["LEAVE_ROOM"] = "leaveRoom";
        slotCocktailNightsGameEvent["UPDATE_CONFIG"] = "updateConfig";
        slotCocktailNightsGameEvent["UPDATE_BETLIST"] = "updateBetList";
        slotCocktailNightsGameEvent["CLOSE_BONUS"] = "closeBonus";
        slotCocktailNightsGameEvent["SELECT_BET"] = "selectBet";
        slotCocktailNightsGameEvent["START"] = "start";
        slotCocktailNightsGameEvent["CLICK_ITEM"] = "clickItem";
        slotCocktailNightsGameEvent["ERROR"] = "errorReturn";
        slotCocktailNightsGameEvent["END"] = "END";
        slotCocktailNightsGameEvent["SHOWNEXT"] = "showNext";
        slotCocktailNightsGameEvent["SHOWNEXTEND"] = "showNextEnd";
        slotCocktailNightsGameEvent["CHANGETOPODD"] = "changeTopOdd";
        slotCocktailNightsGameEvent["NOTICESHOWANI"] = "noticeShowAni";
        slotCocktailNightsGameEvent["NOTICEHIDEANI"] = "noticeHideAni";
        slotCocktailNightsGameEvent["CHANGETOPNUM"] = "changeTopNum";
        slotCocktailNightsGameEvent["WILDMOVE"] = "wildMove";
        return slotCocktailNightsGameEvent;
      }({}));
      var slotCocktailNightsProxyMgr = /*#__PURE__*/function (_ProxyBase) {
        _inheritsLoose(slotCocktailNightsProxyMgr, _ProxyBase);
        function slotCocktailNightsProxyMgr() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _ProxyBase.call.apply(_ProxyBase, [this].concat(args)) || this;
          _this.BUNDLE = "slotCocktailNightsGame";
          _this.wsEvents = [MainManager.instance.getConfigManager().ProtocolSlotCocktailNights.bet, MainManager.instance.getConfigManager().ProtocolSlotCocktailNights.info];
          _this.result = null;
          _this.betList = [0.1, 0.5, 1];
          _this.betMaxCount = 10;
          _this.betRate = 20;
          _this._curBetCount = 0;
          _this._curBetListIndex = 0;
          _this.freeTotalWin = 0;
          _this.a = 0;
          return _this;
        }
        var _proto = slotCocktailNightsProxyMgr.prototype;
        _proto.getBet = function getBet() {
          return this.betList[this._curBetListIndex] * (this._curBetCount + 1) * this.betRate * 1000;
        };
        _proto.setBet = function setBet(betListIndex, betCount) {
          this._curBetListIndex = betListIndex;
          this._curBetCount = betCount;
          this.emit(slotCocktailNightsGameEvent.SELECT_BET);
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
            if (data.cmd == ConfigManager.ProtocolSlotCocktailNights.bet) {
              this.emit(slotCocktailNightsGameEvent.ERROR);
            }
            return;
          }
          switch (data.cmd) {
            case ConfigManager.ProtocolSlotCocktailNights.info:
              {
                this.emit(slotCocktailNightsGameEvent.UPDATE_BETLIST, data.Data);
                break;
              }
            case ConfigManager.ProtocolSlotCocktailNights.bet:
              {
                this.result = data.Data;
                this.result.prizeAmount = 0;
                for (var i = 0; i < this.result.Res.length; i++) {
                  this.result.prizeAmount += this.result.Res[i].RewardMoney;
                }
                //console.log(this.result)
                console.log(JSON.stringify(this.result));
                this.emit(slotCocktailNightsGameEvent.START);
                break;
              }
          }
        };
        _createClass(slotCocktailNightsProxyMgr, [{
          key: "bundle",
          get: function get() {
            return assetManager.getBundle(this.BUNDLE);
          }
        }]);
        return slotCocktailNightsProxyMgr;
      }(ProxyBase);
      var slotCocktailNightsProxy = exports('default', new slotCocktailNightsProxyMgr("slotCocktailNightsProxy"));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/slotCocktailNightsRun.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './slotCocktailNightsItem.ts', './slotCocktailNightsProxy.ts', './slotCocktailNightsDef.ts', './AudioManager.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, sp, instantiate, v3, tween, UITransform, UIOpacity, Component, slotCocktailNightsItem, slotCocktailNightsProxy, slotCocktailNightsGameEvent, slotCocktailNightsDef, AudioManager;
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
      Component = module.Component;
    }, function (module) {
      slotCocktailNightsItem = module.slotCocktailNightsItem;
    }, function (module) {
      slotCocktailNightsProxy = module.default;
      slotCocktailNightsGameEvent = module.slotCocktailNightsGameEvent;
    }, function (module) {
      slotCocktailNightsDef = module.slotCocktailNightsDef;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;
      cclegacy._RF.push({}, "7c0610GmwhDyJbx/nZ4/b+V", "slotCocktailNightsRun", undefined);
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
      var slotCocktailNightsRun = exports('slotCocktailNightsRun', (_dec = ccclass("slotCocktailNightsRun"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(sp.Skeleton), _dec5 = property(sp.Skeleton), _dec6 = property(sp.Skeleton), _dec7 = property(sp.Skeleton), _dec8 = property(sp.Skeleton), _dec9 = property(sp.Skeleton), _dec10 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotCocktailNightsRun, _Component);
        function slotCocktailNightsRun() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "pre_card", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_mask", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "wait_light", _descriptor3, _assertThisInitialized(_this));
          //全部期待光效
          _initializerDefineProperty(_this, "light1", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light2", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light3", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light4", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "light5", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "lineMask", _descriptor9, _assertThisInitialized(_this));
          _this._dataList = [[], [], [], [], [], []];
          _this._positionX = [-310, -186, -62, 62, 186, 310];
          _this._positionY = [345, 230, 115, 0, -115, -230];
          //height:115
          _this._lengthList = [0, 0, 0, 0, 0, 0];
          //230 115 0 -115 -230
          _this._runType = "normal";
          _this._itemHeight = 115;
          _this._moveSteps = 100;
          _this._moveNormalSteps = [100, 100, 100, 100, 100, 100, 100];
          _this._state = CardState.NORMAL;
          _this._result = [[], [], [], [], [], []];
          _this._isGetResult = false;
          _this._showLineIndex = 0;
          _this._scatterNum = 0;
          _this._fixStep = [];
          _this._isToEnd = false;
          _this._normalGetResult = [false, false, false, false, false, false];
          _this._time1 = 0.05;
          _this._time2 = 0.1;
          _this._time3 = 0.15;
          _this._time4 = 0.2;
          _this._time5 = 0.25;
          _this._resultTime = [0.3, 0.6, 0.9, 1.2, 1.6, 1.9];
          //_resultTime = [0.2, 0.4, 0.6, 0.8, 1, 1.2];
          _this._getResultNum = 0;
          _this._totalResult = 0;
          _this._run_mask = null;
          _this._isChangeOdd = false;
          return _this;
        }
        var _proto = slotCocktailNightsRun.prototype;
        //是否有倍数变化
        _proto.start = function start() {
          this.node.removeAllChildren();
        }
        //runBox 580
        ;

        _proto.initPage = function initPage(data) {
          var _this2 = this;
          this._lengthList = [0, 0, 0, 0, 0, 0];
          if (data && data.length == 6) {
            data.map(function (item, index) {
              item.map(function (item1, index1) {
                var node = instantiate(_this2.pre_card);
                var com = node.getComponent(slotCocktailNightsItem);
                node.parent = _this2.node;
                com["cardData"] = item1;
                com.initCard(item1, index, true);
                _this2._dataList[index].push(com);
                var positionY = 0;
                if (index1 == 0) {
                  if (item1.Length == 1) {
                    positionY = 230;
                  } else if (item1.Length == 2) {
                    positionY = 172.5;
                  } else if (item1.Length == 3) {
                    positionY = 115;
                  } else if (item1.Length == 4) {
                    positionY = 57.5;
                  }
                } else {
                  positionY = 230 - 115 * _this2._lengthList[index] + 57.5 - item1.Length * 57.5;
                }
                node.setPosition(v3(_this2._positionX[index], positionY));
                //scatter展示尖角
                if (item1["Sym"] == 0 && item1["Length"] == 1) {
                  node.getComponent(slotCocktailNightsItem).scatterItemShowTopAndDown();
                }
                _this2._lengthList[index] += item1.Length;
              });
            });
          }
        };
        _proto.run = function run(type) {
          var _this3 = this;
          this._runType = type;
          this._lengthList = [0, 0, 0, 0, 0, 0];
          this._isChangeOdd = false;
          this._dataList.map(function (item, index) {
            item.map(function (item1, index1) {
              _this3._lengthList[index] += item1["cardData"]["Length"];
            });
          });
          //补充到六个
          this._dataList.map(function (item, index) {
            for (var i = 0; i < 6; i++) {
              if (item.length != 6) {
                var cardData = {
                  Sym: Math.floor(Math.random() * 11) + 2,
                  Rim: 0,
                  Length: 1
                };
                var newItem = instantiate(_this3.pre_card);
                var com = newItem.getComponent(slotCocktailNightsItem);
                newItem.parent = _this3.node;
                com["cardData"] = cardData;
                com.initCard(cardData, index, true);
                _this3._dataList[index].push(com);
                var positionY = 0;
                positionY = 230 - 115 * _this3._lengthList[index] + 57.5 - cardData.Length * 57.5;
                newItem.setPosition(v3(_this3._positionX[index], positionY));
                _this3._lengthList[index] += cardData.Length;
              }
            }
          });
          this.scheduleOnce(function () {
            _this3._runType == "normal" ? _this3.setState(CardState.RUNNORMAL) : ""; //this.setState(CardState.RUNFAST)
          }, 0.2);
        };
        _proto.getResult = function getResult(data, showLineIndex) {
          var _this4 = this;
          if (showLineIndex === void 0) {
            showLineIndex = 0;
          }
          this._fixStep = [[], [], [], [], [], []];
          this._totalResult = 0;
          this._showLineIndex = showLineIndex;
          data.map(function (item, index) {
            for (var i = 0; i < 6; i++) {
              if (!item[i]) {
                var cardData = {
                  Sym: Math.floor(Math.random() * 11) + 2,
                  Rim: 0,
                  Length: 1
                };
                data[index].push(cardData);
              } else {
                item[i]["isResult"] = "1";
                _this4._totalResult += 1;
              }
            }
          });
          this.scheduleOnce(function () {
            data.map(function (item, index) {
              for (var i = 0; i < 6; i++) {
                if (i == 0) {
                  var positionY = 0;
                  if (item[i].Length == 1) {
                    positionY = 230;
                  } else if (item[i].Length == 2) {
                    positionY = 172.5;
                  } else if (item[i].Length == 3) {
                    positionY = 115;
                  } else if (item[i].Length == 4) {
                    positionY = 57.5;
                  }
                  _this4._fixStep[index].push(positionY);
                }
                if (i < 5) {
                  _this4._fixStep[index].push(_this4._fixStep[index][i] - item[i].Length * _this4._itemHeight / 2 - item[i + 1].Length * _this4._itemHeight / 2);
                }
              }
            });
            _this4._result = data;
            _this4._isGetResult = true;
            _this4._runType == "fast" ? _this4.setState(CardState.RESULTFAST) : "";
            if (_this4._showLineIndex != 0) {
              _this4._resultTime.map(function (item, index) {
                if (index >= _this4._showLineIndex) {
                  _this4._resultTime[index] = item + (index + 3 - showLineIndex) / 2;
                }
              });
            }
          }, 0.1);
        };
        _proto.runOne = function runOne(currentIndex) {
          var _this5 = this;
          if (this._state == CardState.RUNNORMAL) {
            this._dataList[currentIndex].map(function (item1, index1) {
              if (item1.node.getPosition().y <= -(item1["cardData"]["Length"] * _this5._itemHeight / 2 + 230)) {
                if (_this5._isGetResult) {
                  _this5.setState(CardState.RESULTNORMAL);
                } else {
                  //随机重新生成卡片以及设置位置
                  var cardData = {
                    Sym: Math.floor(Math.random() * 11) + 2,
                    Rim: 0,
                    Length: 1
                  };
                  var lastIndex = index1 == 5 ? 0 : index1 + 1;
                  if (_this5._dataList[currentIndex][lastIndex]) {
                    var lastHeight = lastIndex == 0 ? _this5._dataList[currentIndex][lastIndex]["cardData"]["Length"] * _this5._itemHeight / 2 : -40;
                    var currentHeight = cardData.Length * _this5._itemHeight / 2;
                    item1.node.setPosition(_this5._positionX[currentIndex], _this5._dataList[currentIndex][lastIndex].node.getPosition().y + lastHeight + currentHeight);
                    item1["cardData"] = cardData;
                    //重新随机生成
                    item1.initCard(cardData, currentIndex, false);
                  }
                }
              } else {
                item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this5._moveSteps, 0));
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
                var cardData = _this6._result[currentIndex][index];
                var lastIndex = index == 5 ? 0 : index + 1;
                if (item.node.getPosition().y <= -(item["cardData"]["Length"] * _this6._itemHeight / 2 + 230)) {
                  if (_this6._dataList[currentIndex][lastIndex]) {
                    var lastHeight = _this6._dataList[currentIndex][lastIndex]["cardData"]["Length"] * _this6._itemHeight / 2;
                    var currentHeight = cardData.Length * _this6._itemHeight / 2;
                    item["cardData"] = cardData;
                    if (cardData["isResult"] == "1") {
                      _this6._getResultNum += 1;
                      cardData["isResult"] = "2";
                    }
                    var _positionY = 0;
                    index == 5 ? _positionY = _this6._dataList[currentIndex][lastIndex].node.getPosition().y + lastHeight + currentHeight : _positionY = _this6._dataList[currentIndex][lastIndex].node.getPosition().y + lastHeight + currentHeight - _this6._moveNormalSteps[currentIndex];
                    item.node.setPosition(_this6._positionX[currentIndex], _positionY);
                    // if (this._resultTime[currentIndex] >= 0.5) {
                    //     item.initCard(cardData, currentIndex, false);
                    // } else {
                    //     item.initCard(cardData, currentIndex, true);
                    // }
                    item.initCard(cardData, currentIndex, true);
                  }
                } else {
                  item.node.setPosition(v3(item.node.getPosition().x, item.node.getPosition().y - _this6._moveNormalSteps[currentIndex], 0));
                }
                if (index == _this6._dataList[currentIndex].length - 1 && _this6._resultTime[currentIndex] <= 0 && item.node.getPosition().y <= -(item["cardData"]["Length"] * _this6._itemHeight / 2 + 170)) {
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.spinStop);
                  _this6.hideLight(currentIndex);
                  _this6._normalGetResult[currentIndex] = true;
                  _this6._moveNormalSteps[currentIndex] = 0;
                  _this6._dataList[currentIndex].map(function (item, index) {
                    if (item && item["cardData"]) {
                      tween(item.node).to(0.04, {
                        position: v3(_this6._positionX[currentIndex], _this6._fixStep[currentIndex][index], 0)
                      }).by(0.02, {
                        position: v3(0, 12)
                      }).by(0.02, {
                        position: v3(0, -12)
                      }).by(0.02, {
                        position: v3(0, 5)
                      }).by(0.02, {
                        position: v3(0, -5)
                      }).call(function () {
                        //scatter展示尖角
                        if (item["cardData"] && item["cardData"]["Sym"] == 0 && item["cardData"]["Length"] == 1) {
                          item.node.getComponent(slotCocktailNightsItem).scatterItemShowTopAndDown();
                        }
                        if (currentIndex != 0) {
                          if (_this6._showLineIndex != 0 && _this6._showLineIndex <= currentIndex + 1) {
                            _this6.showLight(currentIndex + 1);
                            //获取当前以及当前之前的线的scatter
                            for (var i = 0; i < currentIndex + 1; i++) {
                              _this6._dataList[i].map(function (data) {
                                if (data["cardData"] && data["cardData"]["Sym"] == 0) {
                                  data.node.getComponent(slotCocktailNightsItem).scatteItemWin();
                                }
                              });
                            }
                          }
                        }
                      }).start();
                    }
                  });
                  slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.CHANGETOPNUM, {
                    index: currentIndex
                  });
                  //console.log(this._getResultNum, this._totalResult, currentIndex);
                  //if (currentIndex == 5 && this._getResultNum == this._totalResult) {
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
                      if (_this6._scatterNum < 4) {
                        _this6.scheduleOnce(function () {
                          _this6._dataList.map(function (data) {
                            data.map(function (data1) {
                              if (data1["cardData"] && data1["cardData"]["Sym"] == 0) {
                                data1.node.getComponent(slotCocktailNightsItem).scatteItemWinToIdle();
                              }
                            });
                          });
                        }, 0.2);
                      }
                      _this6.scheduleOnce(function () {
                        _this6.hideLight(4);
                        slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.NOTICEHIDEANI);
                        _this6.setState(CardState.END);
                      }, 0.8);
                    } else {
                      _this6.scheduleOnce(function () {
                        slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.NOTICEHIDEANI);
                        _this6.setState(CardState.END);
                      }, 0.1);
                    }
                  }
                }
              });
            }
          }
        };
        _proto.deleteItem = function deleteItem(arr) {
          var _this7 = this;
          if (!this._run_mask) {
            this._run_mask = instantiate(this.run_mask);
            this._run_mask.getComponent(UITransform).priority = 100;
            this._run_mask.name = "run_mask";
            this._run_mask.parent = this.node;
          }

          //this._run_mask.opacity = 0
          tween(this._run_mask.getComponent(UIOpacity)).to(0.1, {
            opacity: 150
          }).start();
          this._run_mask.active = true;
          arr.map(function (item, index) {
            if (item) {
              item.map(function (item1, index1) {
                if (_this7._dataList[item1.parentIndex] && _this7._dataList[item1.parentIndex][item1.childIndex]) {
                  _this7.scheduleOnce(function () {
                    var copyData = JSON.parse(JSON.stringify(_this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]));
                    _this7._dataList[item1.parentIndex][item1.childIndex].getComponent(slotCocktailNightsItem).showWin(copyData, item1.parentIndex, item1.childIndex, _this7._dataList[item1.parentIndex].length);
                    if (_this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]["Rim"] == 0 || _this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]["Sym"] == 0 || _this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]["Sym"] == 1) {
                      _this7._dataList[item1.parentIndex][item1.childIndex]["isDelete"] = true;
                    }
                    if (_this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]["Rim"] == 1) {
                      //this._dataList[item1.parentIndex][item1.childIndex]['cardData']['Rim'] = 0
                      _this7._dataList[item1.parentIndex][item1.childIndex]["cardData"]["Sym"] = 1;
                    }
                  }, index1 / 50);
                }
              });
            }
          });
          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwin);
          this.scheduleOnce(function () {
            //showWin整个动画时间
            _this7._run_mask.active = false;
            arr.map(function (item, index) {
              item.map(function (item1, index1) {
                if (_this7._dataList[item1.parentIndex] && _this7._dataList[item1.parentIndex][item1.childIndex] && _this7._dataList[item1.parentIndex][item1.childIndex]["isDelete"]) {
                  var node = _this7._dataList[item1.parentIndex][item1.childIndex].node;
                  node.destroyFromParent();
                }
              });
            });
            _this7._dataList.map(function (item, index) {
              for (var i = 0; i < item.length; i++) {
                if (item[i]["isDelete"]) {
                  item.splice(i, 1);
                  i--;
                }
              }
            });
            _this7.changePostionItem();
          }, 1.6);
        };
        _proto.changePostionItem = function changePostionItem() {
          var _this8 = this;
          this._lengthList = [0, 0, 0, 0, 0, 0];
          this._dataList.map(function (item, index) {
            for (var i = item.length - 1; i >= 0; i--) {
              var targetPositionY = 0;
              if (i == item.length - 1) {
                if (item[i]["cardData"]["Length"] == 1) {
                  targetPositionY = -230;
                } else if (item[i]["cardData"]["Length"] == 2) {
                  targetPositionY = -172.5;
                } else if (item[i]["cardData"]["Length"] == 3) {
                  targetPositionY = -115;
                } else if (item[i]["cardData"]["Length"] == 4) {
                  targetPositionY = -57.5;
                }
              } else {
                targetPositionY = -230 + 115 * _this8._lengthList[index] + item[i]["cardData"]["Length"] * 57.5 - 57.5;
              }
              _this8._lengthList[index] += item[i]["cardData"]["Length"];
              if (targetPositionY - 5 > item[i].node.getPosition().y || item[i].node.getPosition().y > targetPositionY + 5) {
                tween(item[i].node).delay(index / 10).to(0.1, {
                  position: v3(_this8._positionX[index], targetPositionY)
                }).by(0.04, {
                  position: v3(0, 12)
                }).by(0.04, {
                  position: v3(0, -12)
                }).by(0.02, {
                  position: v3(0, 5)
                }).by(0.02, {
                  position: v3(0, -5)
                }).start();
              }
            }
          });
          this.scheduleOnce(function () {
            slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.SHOWNEXT);
          }, this._isChangeOdd ? 0.5 : 0);
        }
        //中奖后新item渲染
        ;

        _proto.renderNewItem = function renderNewItem(result, scatterNum, isChangeOdd) {
          var _this9 = this;
          this._isChangeOdd = isChangeOdd;
          var needAddItemNum = 0; //有几竖需要补充新item
          this._lengthList = [0, 0, 0, 0, 0, 0];
          var oldItemNum = [0, 0, 0, 0, 0, 0];
          //计算旧的item总长度
          this._dataList.map(function (item, index) {
            if (item.length > 0) {
              item.map(function (item1, index1) {
                _this9._lengthList[index] += item1["cardData"]["Length"];
                oldItemNum[index]++;
              });
            }
          });

          //判断是否展示期待动画
          if (scatterNum >= 3) {
            if (!this._run_mask) {
              this._run_mask = instantiate(this.run_mask);
              this._run_mask.getComponent(UITransform).priority = 100;
              this._run_mask.name = "run_mask";
              this._run_mask.parent = this.node;
            }
            this._run_mask.active = true;
            this.wait_light.node.active = true;
            this.wait_light.setAnimation(0, "idle", true);
            slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.NOTICESHOWANI);
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.heartbeatNoise);
            //获取所有线的scatter
            this._dataList.map(function (data) {
              data.map(function (data1) {
                if (data1["cardData"] && data1["cardData"]["Sym"] == 0) {
                  data1.node.getComponent(slotCocktailNightsItem).scatteItemWin();
                }
              });
            });
          } else {
            if (this._run_mask) {
              this._run_mask.active = false;
            }
          }
          this.scheduleOnce(function () {
            if (scatterNum >= 3) {
              _this9.wait_light.node.active = false;
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.heartbeatSlowdrop);
              slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.NOTICEHIDEANI);
              if (_this9._run_mask) {
                _this9._run_mask.active = false;
              }

              //获取所有线的scatter
              _this9._dataList.map(function (data) {
                data.map(function (data1) {
                  if (data1["cardData"] && data1["cardData"]["Sym"] == 0) {
                    data1.node.getComponent(slotCocktailNightsItem).scatteItemWinToIdle();
                  }
                });
              });
            }

            //计算需要补充多少个新item
            _this9._lengthList.map(function (item, index) {
              if (item < 5) {
                needAddItemNum += 1;
                for (var i = 0; i < result[index].length; i++) {
                  if (_this9._lengthList[index] < 5) {
                    _this9._lengthList[index] += result[index][i]["Length"];
                    var node = instantiate(_this9.pre_card);
                    var com = node.getComponent(slotCocktailNightsItem);
                    com.node.active = false;
                    node.parent = _this9.node;
                    if (_this9._dataList[index].length == oldItemNum[index]) {
                      _this9._dataList[index].unshift(com);
                    } else {
                      _this9._dataList[index].splice(_this9._dataList[index].length - oldItemNum[index], 0, com);
                    }
                    com["cardData"] = result[index][i];
                  }
                }
              }
            });

            //计算补充item的初始位置
            _this9._dataList.map(function (item, index) {
              for (var i = item.length - 1; i >= 0; i--) {
                //新补充的第一个
                var positionY = 0;
                if (item[i]["cardData"].Length == 1) {
                  positionY = 230;
                } else if (item[i]["cardData"].Length == 2) {
                  positionY = 172.5;
                } else if (item[i]["cardData"].Length == 3) {
                  positionY = 115;
                } else if (item[i]["cardData"].Length == 4) {
                  positionY = 57.5;
                }
                if (i == item.length - oldItemNum[index] - 1) {
                  positionY = positionY + _this9._dataList[index][i]["cardData"]["Length"] * 115;
                  _this9._dataList[index][i].node.getComponent(slotCocktailNightsItem).initCard(_this9._dataList[index][i]["cardData"], index, true);
                  _this9._dataList[index][i].node.setPosition(v3(_this9._positionX[index], positionY));
                } else if (i < item.length - oldItemNum[index] - 1) {
                  positionY = _this9._dataList[index][i + 1].node.getPosition().y + _this9._dataList[index][i + 1]["cardData"]["Length"] * 57.5 + _this9._dataList[index][i]["cardData"]["Length"] * 57.5;
                  _this9._dataList[index][i].node.getComponent(slotCocktailNightsItem).initCard(_this9._dataList[index][i]["cardData"], index, true);
                  _this9._dataList[index][i].node.setPosition(v3(_this9._positionX[index], positionY));
                }
                _this9._dataList[index][i].node.active = true;
              }
            });
            //移动位置
            _this9.scheduleOnce(function () {
              _this9._lengthList = [0, 0, 0, 0, 0, 0];
              _this9._dataList.map(function (item, index) {
                var _loop = function _loop(i) {
                  var targetPositionY = 0;
                  if (i == item.length - 1) {
                    if (item[i]["cardData"]["Length"] == 1) {
                      targetPositionY = -230;
                    } else if (item[i]["cardData"]["Length"] == 2) {
                      targetPositionY = -172.5;
                    } else if (item[i]["cardData"]["Length"] == 3) {
                      targetPositionY = -115;
                    } else if (item[i]["cardData"]["Length"] == 4) {
                      targetPositionY = -57.5;
                    }
                  } else {
                    targetPositionY = -230 + 115 * _this9._lengthList[index] + item[i]["cardData"]["Length"] * 57.5 - 57.5;
                  }
                  _this9._lengthList[index] += item[i]["cardData"]["Length"];
                  if (item[i].node.getPosition().y != targetPositionY) {
                    tween(item[i].node).delay(needAddItemNum >= index ? index / 15 : 0).to(0.1, {
                      position: v3(_this9._positionX[index], targetPositionY)
                    }).by(0.04, {
                      position: v3(0, 12)
                    }).by(0.04, {
                      position: v3(0, -12)
                    }).by(0.02, {
                      position: v3(0, 5)
                    }).by(0.02, {
                      position: v3(0, -5)
                    }).call(function () {
                      //scatter展示尖角
                      if (item[i]["cardData"] && item[i]["cardData"]["Sym"] == 0 && item[i]["cardData"]["Length"] == 1) {
                        item[i].node.getComponent(slotCocktailNightsItem).scatterItemShowTopAndDown();
                      }
                    }).start();
                  }
                };
                for (var i = item.length - 1; i >= 0; i--) {
                  _loop(i);
                }
              });
              _this9.scheduleOnce(function () {
                slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.SHOWNEXTEND);
              }, needAddItemNum / 10 + 0.05);
            }, 0.1);
          }, scatterNum >= 3 ? 1.5 : 0);
        };
        _proto.setState = function setState(state) {
          this._state = state;
        };
        _proto.showLight = function showLight(index) {
          var _this10 = this;
          slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.NOTICESHOWANI);
          if (index == 1 && !this.light1.node.active) {
            this.light1.node.active = true;
            this.light1.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line1")) {
              this.node.getChildByName("line1").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var node = instantiate(this.lineMask);
              node.name = "line0";
              node.parent = this.node;
              node.setPosition(v3(this._positionX[0], 0));
              node.active = true;
              node.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node = instantiate(this.lineMask);
              _node.name = "line2";
              _node.parent = this.node;
              _node.setPosition(v3(this._positionX[2], 0));
              _node.active = true;
              _node.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node2 = instantiate(this.lineMask);
              _node2.name = "line3";
              _node2.parent = this.node;
              _node2.setPosition(v3(this._positionX[3], 0));
              _node2.active = true;
              _node2.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node3 = instantiate(this.lineMask);
              _node3.name = "line4";
              _node3.parent = this.node;
              _node3.setPosition(v3(this._positionX[4], 0));
              _node3.active = true;
              _node3.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node4 = instantiate(this.lineMask);
              _node4.name = "line5";
              _node4.parent = this.node;
              _node4.setPosition(v3(this._positionX[5], 0));
              _node4.active = true;
              _node4.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").active = true;
            }
          } else if (index == 2 && !this.light2.node.active) {
            this.light2.node.active = true;
            this.light2.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line2")) {
              this.node.getChildByName("line2").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node5 = instantiate(this.lineMask);
              _node5.name = "line0";
              _node5.parent = this.node;
              _node5.setPosition(v3(this._positionX[0], 0));
              _node5.active = true;
              _node5.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node6 = instantiate(this.lineMask);
              _node6.name = "line1";
              _node6.parent = this.node;
              _node6.setPosition(v3(this._positionX[1], 0));
              _node6.active = true;
              _node6.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node7 = instantiate(this.lineMask);
              _node7.name = "line3";
              _node7.parent = this.node;
              _node7.setPosition(v3(this._positionX[3], 0));
              _node7.active = true;
              _node7.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node8 = instantiate(this.lineMask);
              _node8.name = "line4";
              _node8.parent = this.node;
              _node8.setPosition(v3(this._positionX[4], 0));
              _node8.active = true;
              _node8.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node9 = instantiate(this.lineMask);
              _node9.name = "line5";
              _node9.parent = this.node;
              _node9.setPosition(v3(this._positionX[5], 0));
              _node9.active = true;
              _node9.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").active = true;
            }
          } else if (index == 3 && !this.light3.node.active) {
            this.light3.node.active = true;
            this.light3.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line3")) {
              this.node.getChildByName("line3").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node10 = instantiate(this.lineMask);
              _node10.name = "line0";
              _node10.parent = this.node;
              _node10.setPosition(v3(this._positionX[0], 0));
              _node10.active = true;
              _node10.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node11 = instantiate(this.lineMask);
              _node11.name = "line1";
              _node11.parent = this.node;
              _node11.setPosition(v3(this._positionX[1], 0));
              _node11.active = true;
              _node11.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node12 = instantiate(this.lineMask);
              _node12.name = "line2";
              _node12.parent = this.node;
              _node12.setPosition(v3(this._positionX[2], 0));
              _node12.active = true;
              _node12.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node13 = instantiate(this.lineMask);
              _node13.name = "line4";
              _node13.parent = this.node;
              _node13.setPosition(v3(this._positionX[4], 0));
              _node13.active = true;
              _node13.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node14 = instantiate(this.lineMask);
              _node14.name = "line5";
              _node14.parent = this.node;
              _node14.setPosition(v3(this._positionX[5], 0));
              _node14.active = true;
              _node14.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").active = true;
            }
          } else if (index == 4 && !this.light4.node.active) {
            this.light4.node.active = true;
            this.light4.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line4")) {
              this.node.getChildByName("line4").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node15 = instantiate(this.lineMask);
              _node15.name = "line0";
              _node15.parent = this.node;
              _node15.setPosition(v3(this._positionX[0], 0));
              _node15.active = true;
              _node15.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node16 = instantiate(this.lineMask);
              _node16.name = "line1";
              _node16.parent = this.node;
              _node16.setPosition(v3(this._positionX[1], 0));
              _node16.active = true;
              _node16.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node17 = instantiate(this.lineMask);
              _node17.name = "line2";
              _node17.parent = this.node;
              _node17.setPosition(v3(this._positionX[2], 0));
              _node17.active = true;
              _node17.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node18 = instantiate(this.lineMask);
              _node18.name = "line3";
              _node18.parent = this.node;
              _node18.setPosition(v3(this._positionX[3], 0));
              _node18.active = true;
              _node18.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line5")) {
              var _node19 = instantiate(this.lineMask);
              _node19.name = "line5";
              _node19.parent = this.node;
              _node19.setPosition(v3(this._positionX[5], 0));
              _node19.active = true;
              _node19.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line5").active = true;
            }
          } else if (index == 5 && !this.light5.node.active) {
            this.light5.node.active = true;
            this.light5.setAnimation(0, "animation", true);
            if (this.node.getChildByName("line5")) {
              this.node.getChildByName("line5").active = false;
            }
            if (!this.node.getChildByName("line0")) {
              var _node20 = instantiate(this.lineMask);
              _node20.name = "line0";
              _node20.parent = this.node;
              _node20.setPosition(v3(this._positionX[0], 0));
              _node20.active = true;
              _node20.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line0").active = true;
            }
            if (!this.node.getChildByName("line1")) {
              var _node21 = instantiate(this.lineMask);
              _node21.name = "line1";
              _node21.parent = this.node;
              _node21.setPosition(v3(this._positionX[1], 0));
              _node21.active = true;
              _node21.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line1").active = true;
            }
            if (!this.node.getChildByName("line2")) {
              var _node22 = instantiate(this.lineMask);
              _node22.name = "line2";
              _node22.parent = this.node;
              _node22.setPosition(v3(this._positionX[2], 0));
              _node22.active = true;
              _node22.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line2").active = true;
            }
            if (!this.node.getChildByName("line3")) {
              var _node23 = instantiate(this.lineMask);
              _node23.name = "line3";
              _node23.parent = this.node;
              _node23.setPosition(v3(this._positionX[3], 0));
              _node23.active = true;
              _node23.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line3").active = true;
            }
            if (!this.node.getChildByName("line4")) {
              var _node24 = instantiate(this.lineMask);
              _node24.name = "line4";
              _node24.parent = this.node;
              _node24.setPosition(v3(this._positionX[4], 0));
              _node24.active = true;
              _node24.getComponent(UITransform).priority = 50;
            } else {
              this.node.getChildByName("line4").active = true;
            }
          }
          var _audioId = 0;
          if (index <= 5) {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.fastspinStart, function (id) {
              _audioId = id;
              _this10.scheduleOnce(function () {
                AudioManager.instance.stopSound(_audioId);
              }, 1.2);
            });
          }
        };
        _proto.hideLight = function hideLight(index) {
          index == 1 ? this.light1.node.active = false : index == 2 ? this.light2.node.active = false : index == 3 ? this.light3.node.active = false : index == 4 ? this.light4.node.active = false : index == 5 ? this.light5.node.active = false : "";
        }

        //scatter获胜
        ;

        _proto.scatterWin = function scatterWin() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["Sym"] == 0) {
                item1.getComponent(slotCocktailNightsItem).scatteItemWin();
              }
            });
          });
        }

        //scatter收缩
        ;

        _proto.scatterNormal = function scatterNormal() {
          this._dataList.map(function (item) {
            item.map(function (item1) {
              if (item1["cardData"] && item1["cardData"]["Sym"] == 0) {
                item1.getComponent(slotCocktailNightsItem).scatteItemWinToIdle();
              }
            });
          });
        };
        _proto.update = function update(dt) {
          var _this11 = this;
          switch (this._state) {
            case CardState.RUNFAST:
              {
                this._dataList.map(function (item, index) {
                  item.map(function (item1, index1) {
                    if (_this11._isGetResult && _this11._state == CardState.RUNFAST) {
                      _this11.setState(CardState.RESULTFAST);
                    } else {
                      item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this11._moveSteps, 0));
                      if (item1.node.getPosition().y <= -(item1["cardData"]["Length"] * _this11._itemHeight / 2 + 230)) {
                        //随机重新生成卡片以及设置位置
                        var cardData = {
                          Sym: Math.floor(Math.random() * 11) + 2,
                          Rim: 0,
                          Length: 1
                        };
                        var lastIndex = index1 == 5 ? 0 : index1 + 1;
                        if (item[lastIndex]) {
                          var lastHeight = lastIndex == 0 ? item[lastIndex]["cardData"]["Length"] * _this11._itemHeight / 2 : -40;
                          var currentHeight = cardData.Length * _this11._itemHeight / 2;
                          item1.node.setPosition(_this11._positionX[index], item[lastIndex].node.getPosition().y + lastHeight + currentHeight);
                          item1["cardData"] = cardData;
                          //重新随机生成
                          item1.initCard(cardData, index, false);
                        }
                      }
                    }
                  });
                });
                break;
              }
            case CardState.RESULTFAST:
              {
                this._dataList.map(function (item, index) {
                  item.map(function (item1, index1) {
                    if (!_this11._isToEnd) {
                      var cardData = _this11._result[index][index1];
                      if (item1.node.getPosition().y <= -(item1["cardData"]["Length"] * _this11._itemHeight / 2 + 230)) {
                        var lastIndex = index1 == 5 ? 0 : index1 + 1;
                        if (item[lastIndex]) {
                          var lastHeight = item[lastIndex]["cardData"]["Length"] * _this11._itemHeight / 2;
                          var currentHeight = cardData.Length * _this11._itemHeight / 2;
                          if (lastIndex == 0) {
                            item1.node.setPosition(_this11._positionX[index], item[lastIndex].node.getPosition().y + lastHeight + currentHeight);
                          } else {
                            item1.node.setPosition(_this11._positionX[index], item[lastIndex].node.getPosition().y + lastHeight + currentHeight - _this11._moveSteps);
                          }
                          item1["cardData"] = cardData;
                          if (cardData["isResult"] == "1") {
                            _this11._getResultNum += 1;
                            cardData["isResult"] = "2";
                          }
                          item1.initCard(cardData, index, true);
                        }
                        if (_this11._getResultNum == _this11._totalResult && !_this11._isToEnd && _this11._state == CardState.RESULTFAST && index == 5 && index1 == 5) {
                          _this11._isToEnd = true;
                          _this11.setState(CardState.END);
                        }
                      } else {
                        item1.node.setPosition(v3(item1.node.getPosition().x, item1.node.getPosition().y - _this11._moveSteps, 0));
                      }
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
                console.log("end1");
                if (this._runType == "fast") {
                  this._dataList.map(function (item, index) {
                    var _loop2 = function _loop2() {
                      var item1 = item[i];
                      if (item1 && item1["cardData"]) {
                        tween(item1.node).to(0.04, {
                          position: v3(_this11._positionX[index], _this11._fixStep[index][i])
                        }).by(0.02, {
                          position: v3(0, 12)
                        }).by(0.02, {
                          position: v3(0, -12)
                        }).by(0.02, {
                          position: v3(0, 5)
                        }).by(0.02, {
                          position: v3(0, -5)
                        }).call(function () {
                          if (item1["cardData"] && item1["cardData"]["Sym"] == 0 && item1["cardData"]["Length"] == 1) {
                            item1.node.getComponent(slotCocktailNightsItem).scatterItemShowTopAndDown();
                          }
                        }).start();
                      }
                    };
                    for (var i = 0; i < item.length; i++) {
                      _loop2();
                    }
                  });
                  this.scheduleOnce(function () {
                    slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.CHANGETOPNUM, {
                      index: 5
                    });
                  }, 0.1);
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.spinStopQuick);
                }
                this._normalGetResult = [false, false, false, false, false, false];
                this._isGetResult = false;
                this._time1 = 0.05;
                this._time2 = 0.1;
                this._time3 = 0.15;
                this._time4 = 0.2;
                this._time5 = 0.25;
                this._resultTime = [0.3, 0.6, 0.9, 1.2, 1.6, 1.9];
                this._moveNormalSteps = [100, 100, 100, 100, 100, 100];
                this._lengthList = [0, 0, 0, 0, 0, 0];
                this._isGetResult = false;
                this._getResultNum = 0;
                this._isToEnd = false;
                //删除多余的item
                this.setState(CardState.NORMAL);
                slotCocktailNightsProxy.emit(slotCocktailNightsGameEvent.END);
                this.scheduleOnce(function () {
                  _this11._dataList.map(function (item, index) {
                    for (var i = 0; i < item.length; i++) {
                      var item1 = item[i];
                      if (item1 && item1["cardData"]) {
                        if (!item1["cardData"]["isResult"]) {
                          var node = item1.node;
                          node.destroyFromParent();
                          item.splice(i, 1);
                          i--;
                        } else {
                          item1["cardData"]["isResult"] = "1";
                        }
                      }
                    }
                  });
                }, 0.1);
                break;
              }
          }
        };
        return slotCocktailNightsRun;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pre_card", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "run_mask", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "wait_light", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "light1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "light2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "light3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "light4", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "light5", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lineMask", [_dec10], {
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

System.register("chunks:///_virtual/slotCocktailNightsScene.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './NetManager.ts', './ViewManager.ts', './Common.ts', './MainManager.ts', './slotCocktailNightsProxy.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, sys, v3, Component, NetManager, ViewManager, Common, MainManager, slotCocktailNightsProxy;
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
      slotCocktailNightsProxy = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "109d5nN2uJMQJciqkBGhk+B", "slotCocktailNightsScene", undefined);
      var ccclass = _decorator.ccclass,
        menu = _decorator.menu,
        property = _decorator.property;
      var ConfigManager = MainManager.instance.getConfigManager();
      var EventManager = MainManager.instance.getEventManager();
      var slotCocktailNightsScene = exports('default', (_dec = ccclass("slotCocktailNightsScene"), _dec2 = menu("game/slotCocktailNights/slotCocktailNightsScene"), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotCocktailNightsScene, _Component);
        function slotCocktailNightsScene() {
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
        var _proto = slotCocktailNightsScene.prototype;
        _proto.onLoad = function onLoad() {
          this.init();
        };
        _proto.start = function start() {
          // cc.assetManager.loadBundle('slotWildBountyShowdownGame', () => {
          //     let node = cc.instantiate(this.pre_room);
          //     console.log(node)
          //     if (!cc.sys.isMobile) {
          //         node.scale = cc.v3(750 / 1334, 750 / 1334, 1);
          //     } else {
          //         node.angle = 90;
          //     }
          //     this.node.addChild(node);
          // })

          var node = instantiate(this.pre_room);
          if (!sys.isMobile) {
            node.scale = v3(750 / 1334, 750 / 1334, 1);
          } else {
            node.angle = 90;
          }
          this.node.addChild(node);
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
          slotCocktailNightsProxy.registSocketEvent();
          EventManager.on(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.on(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.on(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolStone.betList, {});
        };
        _proto.onDisable = function onDisable() {
          slotCocktailNightsProxy.removeSocketEvent();
          EventManager.off(ConfigManager.eventTransform.gameShow, this.gameShow, this); //切到前台
          EventManager.off(ConfigManager.protocolHall.login, this.gameShow, this); //断线重连
          EventManager.off(ConfigManager.ButtonEvent.closePop, this.closePop, this);
          EventManager.on(ConfigManager.eventTransform.disConnect, this.disConnect, this);
        };
        _proto.onDestroy = function onDestroy() {};
        return slotCocktailNightsScene;
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

System.register("chunks:///_virtual/slotCocktailNightsView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './I18n.ts', './Common.ts', './ProxyMgr.ts', './ViewManager.ts', './slotCocktailNightsProxy.ts', './FortuneHistory.ts', './FortuneRank.ts', './DataManager.ts', './ScrollNumLabel.ts', './MainManager.ts', './NetManager.ts', './AddSpineEffect.ts', './AudioManager.ts', './FortuneSetAutobyBlue.ts', './FortuneSetBase.ts', './slotCocktailNightsRun.ts', './slotCocktailNightsWindow.ts', './slotCocktailNightsDef.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, SpriteFrame, sp, Label, instantiate, tween, v3, sys, UIOpacity, Mask, Sprite, Tween, UITransform, color, Color, Component, i18n, Common, ProxyMgr, ViewManager, slotCocktailNightsProxy, slotCocktailNightsGameEvent, FortuneHistory, FortuneRank, DataManager, UserKey, ScrollNumLabel, MainManager, NetManager, AddSpineEffect, AudioManager, FortuneSetAutoByBlue, FortuneSetBase, slotCocktailNightsRun, slotCocktailNightsWindow, slotCocktailNightsDef;
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
      SpriteFrame = module.SpriteFrame;
      sp = module.sp;
      Label = module.Label;
      instantiate = module.instantiate;
      tween = module.tween;
      v3 = module.v3;
      sys = module.sys;
      UIOpacity = module.UIOpacity;
      Mask = module.Mask;
      Sprite = module.Sprite;
      Tween = module.Tween;
      UITransform = module.UITransform;
      color = module.color;
      Color = module.Color;
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
      slotCocktailNightsProxy = module.default;
      slotCocktailNightsGameEvent = module.slotCocktailNightsGameEvent;
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
      FortuneSetAutoByBlue = module.default;
    }, function (module) {
      FortuneSetBase = module.default;
    }, function (module) {
      slotCocktailNightsRun = module.slotCocktailNightsRun;
    }, function (module) {
      slotCocktailNightsWindow = module.slotCocktailNightsWindow;
    }, function (module) {
      slotCocktailNightsDef = module.slotCocktailNightsDef;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64;
      cclegacy._RF.push({}, "8aa0fqNHKpN/ITIWQ5uLEC5", "slotCocktailNightsView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
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
      var BIG_WIN_TIME1 = 10;
      var BIG_WIN_TIME2 = 14;
      var BIG_WIN_TIME3 = 18;
      var slotCocktailNightsView = exports('slotCocktailNightsView', (_dec = ccclass("slotCocktailNightsView"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(SpriteFrame), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(sp.Skeleton), _dec13 = property(Node), _dec14 = property(SpriteFrame), _dec15 = property(Node), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec19 = property(Node), _dec20 = property(Node), _dec21 = property(sp.Skeleton), _dec22 = property(sp.Skeleton), _dec23 = property(Node), _dec24 = property(SpriteFrame), _dec25 = property(Node), _dec26 = property(Node), _dec27 = property(Node), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Node), _dec33 = property(SpriteFrame), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(ScrollNumLabel), _dec38 = property(Node), _dec39 = property(sp.Skeleton), _dec40 = property(ScrollNumLabel), _dec41 = property(Node), _dec42 = property(sp.Skeleton), _dec43 = property(Node), _dec44 = property(Node), _dec45 = property(Node), _dec46 = property(Node), _dec47 = property(sp.Skeleton), _dec48 = property(ScrollNumLabel), _dec49 = property(Node), _dec50 = property(Node), _dec51 = property(Node), _dec52 = property(Node), _dec53 = property(Node), _dec54 = property(Label), _dec55 = property(ScrollNumLabel), _dec56 = property(Label), _dec57 = property(Label), _dec58 = property(ScrollNumLabel), _dec59 = property(Label), _dec60 = property(Node), _dec61 = property(Node), _dec62 = property(Node), _dec63 = property(Node), _dec64 = property(sp.Skeleton), _dec65 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotCocktailNightsView, _Component);
        function slotCocktailNightsView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "prefab_windowItem", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cup_box", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cup_odd", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cup_odd_box", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cup_odd_line", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cup_odd_lineList", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "move_odd_box", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "move_odd", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "move_odd_spine_box", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "move_odd_spine", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBg_spine", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgList", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "windowMask2", _descriptor14, _assertThisInitialized(_this));
          //无图
          _initializerDefineProperty(_this, "windowMask1", _descriptor15, _assertThisInitialized(_this));
          //头部有图
          _initializerDefineProperty(_this, "windowMask3", _descriptor16, _assertThisInitialized(_this));
          //底部有图
          _initializerDefineProperty(_this, "topTotalNum", _descriptor17, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "normalBtn", _descriptor18, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moreBtn", _descriptor19, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "game_type", _descriptor20, _assertThisInitialized(_this));
          //普通/快速切换
          _initializerDefineProperty(_this, "notice_spine", _descriptor21, _assertThisInitialized(_this));
          //公告栏
          _initializerDefineProperty(_this, "notice_bg", _descriptor22, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_frames", _descriptor23, _assertThisInitialized(_this));
          //随机公告
          _initializerDefineProperty(_this, "notice_title", _descriptor24, _assertThisInitialized(_this));
          //普通公告内容
          _initializerDefineProperty(_this, "notice_scatter_waiting", _descriptor25, _assertThisInitialized(_this));
          //公告scatter
          _initializerDefineProperty(_this, "free_box_btn", _descriptor26, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_box", _descriptor27, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_box_cancel_btn", _descriptor28, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_box_submit_btn", _descriptor29, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "run_box", _descriptor30, _assertThisInitialized(_this));
          //转盘
          _initializerDefineProperty(_this, "run_box_bg", _descriptor31, _assertThisInitialized(_this));
          //转盘背景
          _initializerDefineProperty(_this, "run_box_frames", _descriptor32, _assertThisInitialized(_this));
          //转盘背景列表
          _initializerDefineProperty(_this, "window_run_mask", _descriptor33, _assertThisInitialized(_this));
          //转盘遮照层demo
          _initializerDefineProperty(_this, "one_win", _descriptor34, _assertThisInitialized(_this));
          //一次获取
          _initializerDefineProperty(_this, "all_win", _descriptor35, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "all_win_number", _descriptor36, _assertThisInitialized(_this));
          //全局获取
          _initializerDefineProperty(_this, "big_win_box", _descriptor37, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win", _descriptor38, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "big_win_txt", _descriptor39, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free", _descriptor40, _assertThisInitialized(_this));
          //免费模式初始页
          _initializerDefineProperty(_this, "enter_free_spine", _descriptor41, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_time", _descriptor42, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn", _descriptor43, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "enter_free_btn_name", _descriptor44, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end", _descriptor45, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_spine", _descriptor46, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_cash", _descriptor47, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn", _descriptor48, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_btn_name", _descriptor49, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "free_end_time", _descriptor50, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_normal", _descriptor51, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg_bot_free", _descriptor52, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_bet", _descriptor53, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_win", _descriptor54, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_gold", _descriptor55, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_betFree", _descriptor56, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_winFree", _descriptor57, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txt_goldFree", _descriptor58, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box", _descriptor59, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_last", _descriptor60, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_noLast", _descriptor61, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_free_box_time", _descriptor62, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "turn_start", _descriptor63, _assertThisInitialized(_this));
          //开始按钮
          _initializerDefineProperty(_this, "turn_auto_leftCount", _descriptor64, _assertThisInitialized(_this));
          //剩余自动模式
          _this._window = null;
          _this._bet = 0;
          _this._isMinBet = false;
          _this._auto = false;
          _this._lock = false;
          _this._runDelay = 0.1;
          _this._isFree = false;
          _this._freeLastTime = 0;
          _this._runTime = 0;
          _this._win_totalMoney = 0;
          //每局获取金额
          _this._noticeIndex = 0;
          _this._noticeDelay = 1;
          _this._current_index = 0;
          _this._one_win_totalCash = 0;
          _this._cal_current_result = {
            result: null,
            scatterNum: 0,
            showLineIndex: 0,
            win: [],
            isChangeOdd: false
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
          _this._testTime = 0;
          _this._audioId = null;
          _this._totalCashAudioId = null;
          _this._currentOdd = 0;
          _this._currentOddMoveList = [];
          // 需要移动的倍数集合
          _this._cupPosition = [{
            x: -265,
            y: 0
          }, {
            x: -140,
            y: 0
          }, {
            x: -15,
            y: 0
          }, {
            x: 110,
            y: 0
          }, {
            x: 265,
            y: 20
          }];
          _this._testNum = 0;
          _this.runTime = 0;
          return _this;
        }
        var _proto = slotCocktailNightsView.prototype;
        _proto.start = function start() {
          var _this2 = this;
          //大奖关闭
          this.big_win_box.on(Node.EventType.TOUCH_END, function () {
            if (!_this2._isEndBigWin) {
              //AudioManager.instance.stopSound(this._audioId);
              _this2.big_win_txt.reset(_this2._win_totalMoney);
              _this2._endBigTime = 2;
              _this2._isEndBigWin = true;
              //动画直接跳到对应的最终动画
              var aniname = "";
              var odd = _this2._win_totalMoney / _this2._bet;
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
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.bgm_bigwin_end, function (id) {
                _this2._audioId = id;
              });
            } else {
              _this2.clickHideBigWin();
            }
          });
          this.cup_odd_box.removeAllChildren();
          var node = instantiate(this.prefab_windowItem);
          this.node.addChild(node);
          this._window = node.getComponent(slotCocktailNightsWindow);
          node.active = false;
          this.init();
          this.windowMask2.on(Node.EventType.TOUCH_END, function () {
            _this2.hideWindow();
          });
          this.turn_start.node.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.spinBtn);
            _this2.clickStartGame();
          });

          //免费弹出框
          this.free_box_btn.on(Node.EventType.TOUCH_END, function () {
            if (_this2._isInitReadyIntoFree) return;
            if (_this2._lock) return;
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.featureBuyBtn);
            tween(_this2.free_box_btn).to(0.1, {
              scale: v3(1.1, 1.1, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).call(function () {
              _this2.free_box.getChildByName("cash").getComponent(Label).string = Common.numFormat(_this2._bet * 75 + "");
              _this2.free_box.active = true;
            }).start();
          });
          this.free_box_cancel_btn.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.featureBuyCancel);
            tween(_this2.free_box_cancel_btn).to(0.1, {
              scale: v3(1, 1, 1)
            }).call(function () {
              _this2.free_box.active = false;
              _this2.free_box_cancel_btn.setScale(v3(0.9, 0.9, 1));
            }).start();
          });
          this.free_box_submit_btn.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.featureBuyStart);
            tween(_this2.free_box_submit_btn).to(0.1, {
              scale: v3(1, 1, 1)
            }).call(function () {
              _this2.free_box.active = false;
              _this2.free_box_submit_btn.setScale(v3(0.9, 0.9, 1));
              _this2.preStart(true);
            }).start();
          });

          //免费初始页进入到免费模式
          this.enter_free_btn.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.uiStart);
            _this2.enterFreePage();
          });
          this.enter_free_btn_name.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.uiStart);
            _this2.enterFreePage();
          });

          //免费结束页进入到普通模式
          this.free_end_btn.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.uiStart);
            _this2.endNormal();
          });
          this.free_end_btn_name.on(Node.EventType.TOUCH_END, function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.uiStart);
            _this2.endNormal();
          });
        };
        _proto.update = function update(dt) {
          var _this3 = this;
          this.updateNotice(dt);

          //自动关闭大奖
          if (this.big_win_box.active && !this._isEndBigWin && this._win_totalMoney - 100 <= parseInt(this.big_win_txt.string.replace(/,/g, "")) && parseInt(this.big_win_txt.string.replace(/,/g, "")) <= this._win_totalMoney + 100) {
            this._isEndBigWin = true;
            this._endBigTime = 2;
            AudioManager.instance.stopSound(this._audioId);
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.bgm_bigwin_end, function (id) {
              _this3._audioId = id;
            });
          }

          //大奖结束
          if (this._endBigTime > 0) {
            this._endBigTime -= dt;
            if (this._endBigTime <= 0 && this.big_win_box.active && !this._isTrueBigWin) {
              this.big_win_txt.reset();
              this.big_win_box.active = false;
              // AudioManager.instance.stopSound(this._audioId);
              // this._audioId = null
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
                if (slotCocktailNightsProxy.result && !this._isGetResult) {
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
                if (this._auto || this._isFree) {
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
          NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotCocktailNights.info, {});
        };
        _proto.changeState = function changeState(state) {
          var _this4 = this;
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
                //预留run的end状态需要删除无用的item的时间
                this.scheduleOnce(function () {
                  _this4.clickStop();
                }, 0.2);
                break;
              }
            case RunState.SHOWNEXT:
              {
                this.showNext();
                break;
              }
            case RunState.SHOWNEXTEND:
              {
                if (slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"] > 0) {
                  this._win_totalMoney += slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"];
                  var addMoney = Math.floor(slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"] / slotCocktailNightsProxy.result["Res"][this._current_index]["ExtraOdd"]);
                  this.txt_win.string = Common.numFormat(parseInt(this.txt_win.string.replace(/,/g, "")) + addMoney + "");
                  if (this._isFree) {
                    slotCocktailNightsProxy.freeTotalWin += slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"];
                    this.txt_winFree.string = Common.numFormat(parseInt(this.txt_winFree.string.replace(/,/g, "")) + addMoney + "");
                  }
                  this.run_box.getComponent(slotCocktailNightsRun).deleteItem(this._cal_current_result.win);
                  this.changeTopCash();
                } else {
                  this.allEnd();
                }
                break;
              }
          }
        };
        _proto.initPage = function initPage(data) {
          var _this5 = this;
          if (data && data.Res) {
            var lastWin = 0;
            data.Res.map(function (item) {
              lastWin += item.RewardMoney;
            });
            this.txt_win.reset(lastWin);
            slotCocktailNightsProxy.result = data;
            this._cal_current_result.result = [];
            slotCocktailNightsProxy.result["Res"][slotCocktailNightsProxy.result["Res"].length - 1]["AllPosMsg"].map(function (item, index) {
              var newItem = [];
              for (var i = item.length - 1; i >= 0; i--) {
                newItem.push(item[i]);
              }
              _this5._cal_current_result.result.push(newItem);
            });
            this.run_box.getComponent(slotCocktailNightsRun).initPage(this._cal_current_result.result);
            this.changeTopNum(false, 5, true);
            this.cupInit(slotCocktailNightsProxy.result["Res"][slotCocktailNightsProxy.result["Res"].length - 1]["BottomMultiple"]);
            if (!this._isFree && data.FreeInfo.Count > 0) {
              this._isInitReadyIntoFree = true;
              this.txt_winFree.getComponent(Label).string = data.FreeInfo["TotalPrizeAmount"];
              slotCocktailNightsProxy.freeTotalWin = data.FreeInfo["TotalPrizeAmount"];
              this.enterFreeMode();
            } else {
              slotCocktailNightsDef.palyMusic(slotCocktailNightsDef.audio.bgm_mg);
            }
          } else {
            this._isError = true;
          }
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
        _proto.preStart = function preStart(isBuyFree) {
          if (isBuyFree === void 0) {
            isBuyFree = false;
          }
          if (this._lock) return;
          if (this._isError) return;
          if (this._isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (!this._isFree) {
            if (!isBuyFree && gold < this._bet) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            } else if (isBuyFree && gold < this._bet * 75) {
              Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
              this.setAuto(0);
              return;
            } else {
              !isBuyFree && this.updateGoldData(-this._bet);
              isBuyFree && this.updateGoldData(-this._bet * 75);
            }
          }
          if (this._isFree && this._freeLastTime > 0 || !this._isFree) {
            if (this._isFree) {
              this.setFreeCount(this._freeLastTime - 1);
            }
            this._lock = true;
            this.buyFreeColorChange();
            this.one_win.active = false;
            this.all_win.active = false;
            this.all_win_number.reset();
            this.notice_bg.active = true;
            this.notice_spine.setAnimation(0, "normal_idle", true);
            this.txt_win.reset();

            //判断是否需要重置倍数
            if (!this._isFree) {
              var isInit = false;
              this.cup_odd_box.children.map(function (item, index) {
                if (index != 4) {
                  if (item.getChildByName("odd").getComponent(Label).string != "x2") {
                    isInit = true;
                  }
                }
              });
              if (isInit) {
                this.endCupInit();
              }
            }
            slotCocktailNightsProxy.result = null;
            this.sendBet(isBuyFree);
            this._cal_current_result = {
              result: [[], [], [], [], [], []],
              scatterNum: 0,
              showLineIndex: 0,
              win: [],
              isChangeOdd: false
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
          this.changeTopNum(true);
          this.run_box.getComponent(slotCocktailNightsRun).run(this._runDelay != 0 || this._isFree ? "normal" : "fast");
        };
        _proto.clickRunning = function clickRunning() {
          var _this6 = this;
          this._isGetResult = true;
          this.calResult(function () {
            if (_this6._runDelay != 0 || _this6._isFree) {
              _this6.scheduleOnce(function () {
                _this6.run_box.getComponent(slotCocktailNightsRun).getResult(_this6._cal_current_result.result, _this6._cal_current_result.showLineIndex);
              }, 0.3);
            } else {
              //this.scheduleOnce(() => {
              _this6.run_box.getComponent(slotCocktailNightsRun).getResult(_this6._cal_current_result.result, 0);
              //}, 0.1)
            }
          });
        };

        _proto.clickStop = function clickStop() {
          //判断第一轮中奖结果
          if (slotCocktailNightsProxy.result && slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"] > 0) {
            this._win_totalMoney = slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"];
            this.txt_win.string = Common.numFormat(this._win_totalMoney + "");
            this.run_box.getComponent(slotCocktailNightsRun).deleteItem(this._cal_current_result.win);
            if (this._isFree) {
              slotCocktailNightsProxy.freeTotalWin += slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"];
              this.txt_winFree.string = Common.numFormat(slotCocktailNightsProxy.freeTotalWin + "");
            }
            this.changeTopCash();
            if (!this._isFree && !this._auto) {
              this.turn_start.setAnimation(0, "stop", true);
            }
          } else {
            this.allEnd();
          }
        };
        _proto.showNext = function showNext() {
          var _this7 = this;
          this._current_index += 1;
          this.calResult(function () {
            _this7.scheduleOnce(function () {
              _this7.run_box.getComponent(slotCocktailNightsRun).renderNewItem(_this7._cal_current_result.result, _this7._cal_current_result.scatterNum, _this7._cal_current_result.isChangeOdd);
            }, 0.2);
          });
        };
        _proto.allEnd = function allEnd(isBigWinEnd) {
          var _this8 = this;
          if (isBigWinEnd === void 0) {
            isBigWinEnd = false;
          }
          if (this._isFree && slotCocktailNightsProxy.result.FreeInfo.Count != this._freeLastTime) {
            this.setFreeCount(slotCocktailNightsProxy.result.FreeInfo.Count);
          }
          if (this._cal_current_result.scatterNum > 0 && this._cal_current_result.scatterNum < 3 && !this._isFree) {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.fastspinEnd);
          }
          this.startGameAni(false);
          if (isBigWinEnd) {
            if (this._win_totalMoney > 0) {
              this.changeTopTotalCash();
            }
            console.log("大奖动画结束");
            //大奖金额到达目标或点击大奖动画
            this.scheduleOnce(function () {
              _this8._isEndBigWin = false;
              _this8._win_totalMoney = 0;
              _this8._current_index = 0;
              _this8._cal_current_result = {
                result: null,
                scatterNum: 0,
                showLineIndex: 0,
                win: [],
                isChangeOdd: false
              };
              _this8.changeBtnActive(true);
              _this8.updateGoldData();
              if (!_this8._isFree && !_this8._auto) {
                _this8.turn_start.setAnimation(0, "idle", true);
              }
              if (!_this8._isFree && slotCocktailNightsProxy.result.FreeInfo.Count > 0) {
                slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.scatterWinHighlight);
                _this8.enterFreeMode();
              } else {
                if (_this8._isFree && slotCocktailNightsProxy.result.FreeInfo.Count == 0) {
                  //结束免费模式
                  _this8.scheduleOnce(function () {
                    _this8.endFree();
                  }, 0.3);
                } else {
                  _this8._lock = false;
                  _this8.buyFreeColorChange();
                  _this8.changeState(RunState.NORMAL);
                }
              }
            }, this._win_totalMoney / this._bet >= 5 ? 1 : 0.5);
          } else {
            //判断是否需要展示大奖动画
            var odd = this._win_totalMoney / this._bet;
            var aniname = "";
            if (odd >= 20 && odd < 30) {
              this.big_win_box.active = true;
              aniname = "bigwin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME1 * 30;
              this.big_win.setAnimation(0, aniname + "intro", false);
              this.big_win.addAnimation(0, aniname + "idle", true);
            }
            if (odd >= 30 && odd < 50) {
              this.big_win_box.active = true;
              aniname = "megawin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME2 * 30;
              this.big_win.setAnimation(0, "bigwin_intro", false);
              this.big_win.addAnimation(0, "bigwin_idle", false);
              this.big_win.addAnimation(0, aniname + "intro", false);
              this.big_win.addAnimation(0, aniname + "idle", true);
            }
            if (odd >= 50) {
              this.big_win_box.active = true;
              aniname = "superwin_";
              this.big_win_txt.stepCount = BIG_WIN_TIME3 * 30;
              this.big_win.setAnimation(0, "bigwin_intro", false);
              this.big_win.addAnimation(0, "bigwin_idle", false);
              this.big_win.addAnimation(0, "megawin_intro", false);
              this.big_win.addAnimation(0, "megawin_idle", false);
              this.big_win.addAnimation(0, aniname + "intro", false);
              this.big_win.addAnimation(0, aniname + "idle", true);
            }
            this.big_win_txt.string = Common.numFormat(this._win_totalMoney + "");

            //没中大奖结束该轮
            if (odd < 20) {
              var time = 0;
              //自动模式&免费模式=>金额转动到终点才进行下一轮
              //手动模式=》金额不需要转动到终点
              if (this._auto || this._isFree) {
                this._win_totalMoney > 0 && odd >= 5 ? time = 1.2 : this._win_totalMoney > 0 ? time = 0.5 : time = 0;
              } else {
                this._win_totalMoney > 0 ? time = 0.2 : time = 0;
              }
              console.log("结束，没有大奖");
              if (this._win_totalMoney > 0) {
                this.changeTopTotalCash();
              }
              this.scheduleOnce(function () {
                _this8._isEndBigWin = false;
                _this8._win_totalMoney = 0;
                _this8._current_index = 0;
                _this8._cal_current_result = {
                  result: null,
                  scatterNum: 0,
                  showLineIndex: 0,
                  win: [],
                  isChangeOdd: false
                };
                _this8.changeBtnActive(true);
                _this8.updateGoldData();
                if (!_this8._isFree && !_this8._auto) {
                  _this8.turn_start.setAnimation(0, "idle", true);
                }
                if (!_this8._isFree && slotCocktailNightsProxy.result.FreeInfo.Count > 0) {
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.scatterWinHighlight);
                  _this8.enterFreeMode();
                } else {
                  if (_this8._isFree && slotCocktailNightsProxy.result.FreeInfo.Count == 0) {
                    //结束免费模式
                    _this8.scheduleOnce(function () {
                      _this8.endFree();
                    }, 0.3);
                  } else {
                    _this8._lock = false;
                    _this8.buyFreeColorChange();
                    _this8.changeState(RunState.NORMAL);
                  }
                }
              }, time);
            } else {
              console.log("结束，播放大奖");
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.bgm_bigwin_main, function (id) {
                _this8._audioId = id;
              });
            }
          }
        };
        _proto.sendBet = function sendBet(isBuyFree) {
          if (isBuyFree) {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotCocktailNights.bet, {
              betAmount: Math.floor(this._bet),
              buyFree: true
            });
          } else {
            NetManager.instance.sendOnlineData(ConfigManager.ProtocolSlotCocktailNights.bet, {
              betAmount: Math.floor(this._bet)
            });
          }

          //多次倍数
          // slotCocktailNightsProxy.result = {
          //     BetAmount: 2000,
          //     FreeInfo: { BetAmount: 0, BottomMultiple: null, Count: 0, Multiple: 0, TotalCount: 0, TotalPrizeAmount: 0 },
          //     Res: [
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 3 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 9 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 2, Rim: 1, Sym: 10 },
          //                     { IsReward: true, Length: 3, Rim: 1, Sym: 9 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 1, Sym: 9 },
          //                     { IsReward: false, Length: 3, Rim: 1, Sym: 11 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 2, Rim: 1, Sym: 4 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 3 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 4 },
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                 ],
          //             ],
          //             BottomMultiple: [2, 2, 2, 2, 4],
          //             ExtraOdd: 1,
          //             RewardMoney: 1200,
          //             RewardMsg: { "9": [4, 2] },
          //         },
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 3 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 4 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 1, Sym: 10 },
          //                     { IsReward: true, Length: 3, Rim: 0, Sym: 1 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 0, Sym: 1 },
          //                     { IsReward: true, Length: 3, Rim: 1, Sym: 11 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: true, Length: 2, Rim: 1, Sym: 4 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 3 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 11 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 4 },
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                 ],
          //             ],
          //             BottomMultiple: [2, 2, 2, 2, 4],
          //             ExtraOdd: 4,
          //             RewardMoney: 29200,
          //             RewardMsg: { "3": [4, 1], "4": [5, 1], "10": [3, 2], "11": [4, 8] },
          //         },
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 3 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 4 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 3 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 0, Sym: 1 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 3, Rim: 0, Sym: 1 },
          //                     { IsReward: true, Length: 2, Rim: 1, Sym: 10 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 0, Sym: 1 },
          //                     { IsReward: true, Length: 3, Rim: 1, Sym: 10 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 5 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                 ],
          //             ],
          //             BottomMultiple: [2, 2, 4, 6, 8],
          //             ExtraOdd: 8,
          //             RewardMoney: 72800,
          //             RewardMsg: { "3": [4, 2], "4": [4, 1], "10": [4, 8] },
          //         },
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: true, Length: 1, Rim: 0, Sym: 3 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 5 },
          //                     { IsReward: true, Length: 2, Rim: 0, Sym: 3 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 2, Rim: 0, Sym: 1 },
          //                     { IsReward: false, Length: 3, Rim: 0, Sym: 12 },
          //                 ],
          //                 [
          //                     { IsReward: true, Length: 3, Rim: 0, Sym: 1 },
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 12 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 5 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                 ],
          //             ],
          //             BottomMultiple: [6, 8, 10, 12, 14],
          //             ExtraOdd: 18,
          //             RewardMoney: 45000,
          //             RewardMsg: { "3": [4, 1] },
          //         },
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 5 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 3, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 2, Rim: 1, Sym: 2 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 5 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 2 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                 ],
          //             ],
          //             BottomMultiple: [6, 12, 14, 16, 18],
          //             ExtraOdd: 0,
          //             RewardMoney: 0,
          //             RewardMsg: null,
          //         },
          //     ],
          //     prizeAmount: 148200,
          // };
          //大奖
          //slotCocktailNightsProxy.result = { "BetAmount": 2000, "FreeInfo": { "BetAmount": 0, "BottomMultiple": null, "Count": 0, "Multiple": 0, "TotalCount": 0, "TotalPrizeAmount": 0 }, "Res": [{ "AllPosMsg": [[{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 2 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 9 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 4 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 11 }], [{ "IsReward": true, "Length": 2, "Rim": 1, "Sym": 10 }, { "IsReward": false, "Length": 2, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }], [{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 3 }, { "IsReward": true, "Length": 3, "Rim": 1, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 4 }], [{ "IsReward": false, "Length": 3, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 9 }], [{ "IsReward": false, "Length": 2, "Rim": 1, "Sym": 9 }, { "IsReward": false, "Length": 3, "Rim": 1, "Sym": 10 }], [{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 6 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 9 }]], "BottomMultiple": [2, 2, 2, 2, 4], "ExtraOdd": 1, "RewardMoney": 100, "RewardMsg": { "10": [3, 1] } }, { "AllPosMsg": [[{ "IsReward": true, "Length": 1, "Rim": 0, "Sym": 2 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 9 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 4 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 11 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 3 }], [{ "IsReward": true, "Length": 2, "Rim": 0, "Sym": 1 }, { "IsReward": false, "Length": 2, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }], [{ "IsReward": true, "Length": 1, "Rim": 0, "Sym": 3 }, { "IsReward": true, "Length": 3, "Rim": 0, "Sym": 1 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 4 }], [{ "IsReward": false, "Length": 3, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 9 }], [{ "IsReward": true, "Length": 2, "Rim": 1, "Sym": 9 }, { "IsReward": false, "Length": 3, "Rim": 1, "Sym": 10 }], [{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 6 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": true, "Length": 1, "Rim": 0, "Sym": 9 }]], "BottomMultiple": [2, 2, 2, 2, 4], "ExtraOdd": 4, "RewardMoney": 40400, "RewardMsg": { "2": [3, 1], "3": [3, 2], "4": [3, 2], "9": [6, 1], "11": [3, 1] } }, { "AllPosMsg": [[{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 0 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 0 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 12 }], [{ "IsReward": false, "Length": 2, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 2, "Rim": 0, "Sym": 12 }], [{ "IsReward": false, "Length": 3, "Rim": 0, "Sym": 11 }, { "IsReward": false, "Length": 2, "Rim": 0, "Sym": 10 }], [{ "IsReward": false, "Length": 3, "Rim": 1, "Sym": 12 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }], [{ "IsReward": false, "Length": 2, "Rim": 0, "Sym": 1 }, { "IsReward": false, "Length": 3, "Rim": 1, "Sym": 10 }], [{ "IsReward": false, "Length": 1, "Rim": 0, "Sym": 8 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 6 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 10 }, { "IsReward": false, "Length": 1, "Rim": 0, "Sym": 5 }]], "BottomMultiple": [2, 2, 4, 6, 8], "ExtraOdd": 0, "RewardMoney": 0, "RewardMsg": null }], "prizeAmount": 40500 }
          //期待
          // slotCocktailNightsProxy.result = {
          //     BetAmount: 2000,
          //     FreeInfo: { BetAmount: 0, BottomMultiple: null, Count: 0, Multiple: 0, TotalCount: 0, TotalPrizeAmount: 0 },
          //     Res: [
          //         {
          //             AllPosMsg: [
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 0 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 0 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 3, Rim: 1, Sym: 8 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 0 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 8 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 4, Rim: 1, Sym: 10 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 10 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 3 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 9 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 2, Rim: 0, Sym: 0 },
          //                     { IsReward: false, Length: 2, Rim: 1, Sym: 4 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                 ],
          //                 [
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 11 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 5 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 6 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 12 },
          //                     { IsReward: false, Length: 1, Rim: 0, Sym: 9 },
          //                 ],
          //             ],
          //             BottomMultiple: [2, 2, 2, 2, 4],
          //             ExtraOdd: 1,
          //             RewardMoney: 0,
          //             RewardMsg: null,
          //         },
          //     ],
          //     prizeAmount: 3400,
          // };
        }
        //刚进入页面展示的倍数
        ;

        _proto.cupInit = function cupInit(BottomMultiple) {
          var _this9 = this;
          if (BottomMultiple.length == 5) {
            BottomMultiple.map(function (item, index) {
              var node = instantiate(_this9.cup_odd);
              node.active = true;
              node.getChildByName("spine").active = true;
              if (item == 2) {
                _this9.scheduleOnce(function () {
                  node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "normal_idle", true);
                });
              } else {
                _this9.scheduleOnce(function () {
                  node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "special_idle", true);
                });
              }
              node.getChildByName("odd").getComponent(Label).string = "x" + item;
              node.parent = _this9.cup_odd_box;
              node.setPosition(v3(_this9._cupPosition[index].x, _this9._cupPosition[index].y));
            });
          }
        }
        //倍数动画效果(slotCocktailNightsGameEvent.WILDMOVE触发)
        ;

        _proto.cupChange = function cupChange(index) {
          var _this10 = this;
          if (this._currentOddMoveList.indexOf(index - 1) == -1) {
            //同一轴出现多个wild处理
            this._currentOddMoveList.push(index - 1);
            var target = this.cup_odd_box.children[index - 1];
            if (target) {
              if (target.getChildByName("odd").getComponent(Label).string == "x2") {
                target.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "normal_win", false);
              } else {
                target.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "special_win", false);
              }
              target.getChildByName("odd").active = false;
            }

            //生成移动的倍数

            var moveOdd = instantiate(this.move_odd);
            moveOdd.parent = this.move_odd_box;
            moveOdd.active = true;
            moveOdd.getComponent(Label).string = target.getChildByName("odd").getComponent(Label).string;
            moveOdd.setPosition(v3(this._cupPosition[index - 1].x, 25));
            tween(moveOdd).to(0.2, {
              scale: v3(2, 2, 1)
            }).start();
            tween(moveOdd).by(0.2, {
              position: v3(0, 80, 0)
            }).call(function () {
              target.getChildByName("zha").active = true;
              target.getChildByName("zha").getComponent(sp.Skeleton).setAnimation(0, "boom", false);
              //等待爆炸效果
              _this10.scheduleOnce(function () {
                tween(target.getChildByName("spine").getComponent(sp.Skeleton).node.getComponent(UIOpacity)).to(0.2, {
                  opacity: 0
                }).start();
                if (slotCocktailNightsProxy.result["Res"][_this10._current_index]["ExtraOdd"] == parseInt(target.getChildByName("odd").getComponent(Label).string.replace("x", ""))) {
                  _this10.run_box.getComponent(Mask).enabled = true;
                  //只有一个倍数，可直接乘以金额
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                  var oddSpine = instantiate(_this10.move_odd_spine);
                  oddSpine.parent = _this10.move_odd_spine_box;
                  oddSpine.setPosition(v3(target.getPosition().x, target.getPosition().y, 0));
                  oddSpine.active = true;
                  oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                  tween(moveOdd).to(0.1, {
                    scale: v3(2.4, 2.4, 1)
                  }).delay(0.1).to(0.3, {
                    position: v3(0, _this10._isFree ? -180 : -200, 0)
                  }).call(function () {
                    slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                    tween(moveOdd).to(0.3, {
                      scale: v3(3, 3, 1)
                    }).start();
                    tween(moveOdd.getComponent(UIOpacity)).to(0.3, {
                      opacity: 0
                    }).call(function () {
                      //删除杯子节点
                      _this10.move_odd_box.children && _this10.move_odd_box.children.length > 0 ? _this10.move_odd_box.children[0].active = false : "";
                      target.active = false;
                      _this10.changeTopCashByOdd();
                    }).start();
                  }).start();
                } else {
                  //有多个倍数
                  _this10._currentOdd += parseInt(target.getChildByName("odd").getComponent(Label).string.replace("x", ""));
                  if (slotCocktailNightsProxy.result["Res"][_this10._current_index]["ExtraOdd"] == _this10._currentOdd) {
                    //倍数移动到中心点([0,1] | [0,2] |  [0,3] | [1,2] | [1,3] | [2,3] | [0,1,2] | [0,1,3] | [0,2,3] | [1,2,3] | [1,2,3,4])
                    if (_this10._currentOddMoveList.length == 4) {
                      _this10.run_box.getComponent(Mask).enabled = true;
                      //[1,2,3,4]
                      slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                      tween(_this10.move_odd_box.children[0]).by(0.1, {
                        position: v3(185, 0, 0)
                      }).start();
                      tween(_this10.move_odd_box.children[2]).by(0.1, {
                        position: v3(-60, 0, 0)
                      }).start();
                      tween(_this10.move_odd_box.children[3]).by(0.1, {
                        position: v3(-185, 0, 0)
                      }).start();
                      tween(_this10.move_odd_box.children[1]).by(0.1, {
                        position: v3(60, 0, 0)
                      }).call(function () {
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                        //删除第0个和第2个倍数(不要直接删除，会导致索引错乱)
                        _this10.cup_odd_box.children[0].active = false;
                        _this10.cup_odd_box.children[2].active = false;
                        _this10.cup_odd_box.children[3].active = false;
                        _this10.move_odd_box.children[0].active = false;
                        _this10.move_odd_box.children[2].active = false;
                        _this10.move_odd_box.children[3].active = false;
                        _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                        var oddSpine = instantiate(_this10.move_odd_spine);
                        oddSpine.parent = _this10.move_odd_spine_box;
                        oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                        oddSpine.active = true;
                        oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                        tween(_this10.move_odd_box.children[1]).to(0.1, {
                          scale: v3(2.4, 2.4, 1)
                        }).delay(0.1).to(0.3, {
                          position: v3(-50, _this10._isFree ? -180 : -200, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                          tween(_this10.move_odd_box.children[1]).to(0.3, {
                            scale: v3(3, 3, 1)
                          }).start();
                          tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                            opacity: 0
                          }).call(function () {
                            //删除杯子节点
                            _this10.cup_odd_box.children[1].active = false;
                            _this10.move_odd_box.children[1].active = false;
                            _this10.changeTopCashByOdd();
                          }).start();
                        }).start();
                      }).start();
                    } else if (_this10._currentOddMoveList.length == 3) {
                      if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(1) >= 0 && _this10._currentOddMoveList.indexOf(2) >= 0) {
                        //[0,1,2]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(125, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[2]).by(0.1, {
                          position: v3(-125, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第0个和第2个倍数(不要直接删除，会导致索引错乱)
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.cup_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[1].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(1) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        //[0,1,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(125, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[2]).by(0.1, {
                          position: v3(-250, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.cup_odd_box.children[3].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[1].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(2) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        // [0,2,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(250, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[2]).by(0.1, {
                          position: v3(-125, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.cup_odd_box.children[3].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[2].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(1) >= 0 && _this10._currentOddMoveList.indexOf(2) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        // [1,2,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(125, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[2]).by(0.1, {
                          position: v3(-125, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          _this10.cup_odd_box.children[1].active = false;
                          _this10.cup_odd_box.children[3].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[2].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      }
                    } else if (_this10._currentOddMoveList.length == 2) {
                      if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(1) >= 0) {
                        //[0,1]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(60, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-60, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第0个
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[1].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(2) >= 0) {
                        //[0,2]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(125, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-125, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第0个
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[2].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(0) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        //[0,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(185, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-185, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第0个
                          _this10.cup_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[3].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(1) >= 0 && _this10._currentOddMoveList.indexOf(2) >= 0) {
                        //[1,2]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(60, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-60, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第1个
                          _this10.cup_odd_box.children[1].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[2].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(1) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        //[1,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(125, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-125, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第1个
                          _this10.cup_odd_box.children[1].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[3].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      } else if (_this10._currentOddMoveList.indexOf(2) >= 0 && _this10._currentOddMoveList.indexOf(3) >= 0) {
                        //[2,3]
                        _this10.run_box.getComponent(Mask).enabled = true;
                        slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiActivate);
                        tween(_this10.move_odd_box.children[0]).by(0.1, {
                          position: v3(60, 0, 0)
                        }).start();
                        tween(_this10.move_odd_box.children[1]).by(0.1, {
                          position: v3(-60, 0, 0)
                        }).call(function () {
                          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.multiCombine);
                          //删除第1个
                          _this10.cup_odd_box.children[2].active = false;
                          _this10.move_odd_box.children[0].active = false;
                          _this10.move_odd_box.children[1].getComponent(Label).string = "x" + _this10._currentOdd;
                          var oddSpine = instantiate(_this10.move_odd_spine);
                          oddSpine.parent = _this10.move_odd_spine_box;
                          oddSpine.setPosition(v3(_this10.move_odd_box.children[1].getPosition().x, _this10.move_odd_box.children[1].getPosition().y, 0));
                          oddSpine.active = true;
                          oddSpine.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "intro", false);
                          tween(_this10.move_odd_box.children[1]).to(0.1, {
                            scale: v3(2.4, 2.4, 1)
                          }).delay(0.1).to(0.3, {
                            position: v3(-50, _this10._isFree ? -180 : -200, 0)
                          }).call(function () {
                            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeSmallwinMultiplied);
                            tween(_this10.move_odd_box.children[1]).to(0.3, {
                              scale: v3(3, 3, 1)
                            }).start();
                            tween(_this10.move_odd_box.children[1].getComponent(UIOpacity)).to(0.3, {
                              opacity: 0
                            }).call(function () {
                              //删除杯子节点
                              _this10.cup_odd_box.children[3].active = false;
                              _this10.move_odd_box.children[1].active = false;
                              _this10.changeTopCashByOdd();
                            }).start();
                          }).start();
                        }).start();
                      }
                    }
                  }
                }
              }, 0.5);
            }).start();
          }
        }
        //金额变化
        ;

        _proto.changeTopCash = function changeTopCash() {
          if (this.notice_bg.active) {
            this.notice_bg.active = false;
          }
          var current_odd = slotCocktailNightsProxy.result["Res"][this._current_index]["ExtraOdd"];
          if (current_odd == 1) {
            this.notice_spine.setAnimation(0, "normal_win", false);
            this.notice_spine.addAnimation(0, "normal_idle", true);
            this.one_win.setScale(v3(0, 0, 1));
            this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"] + "");
            this.one_win.active = true;
            tween(this.one_win).to(0.1, {
              scale: v3(1.3, 1.3)
            }).delay(0.1).to(0.1, {
              scale: v3(1.1, 1.1)
            }).start();

            //左下角金额到达最终目标
            this.txt_win.string = Common.numFormat(this._win_totalMoney + "");
            if (this._isFree) {
              this.txt_winFree.string = Common.numFormat(slotCocktailNightsProxy.freeTotalWin + "");
            }
          } else {
            //多倍的先展示一倍，剩下的由监听WILDMOVE事件触发
            var oneAddCash = Math.floor(slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"] / current_odd);
            this._one_win_totalCash = slotCocktailNightsProxy.result["Res"][this._current_index]["RewardMoney"];
            this.one_win.getChildByName("Sprite").getComponent(UIOpacity).opacity = 0;
            this.one_win.setScale(v3(0, 0, 1));
            this.notice_spine.setAnimation(0, "normal_win", false);
            this.notice_spine.addAnimation(0, "normal_idle", true);
            this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(oneAddCash + "");
            //未乘以倍数的金额展示
            this.run_box.getComponent(Mask).enabled = false;
            tween(this.one_win).to(0.1, {
              scale: v3(1.3, 1.3)
            }).delay(0.1).to(0.1, {
              scale: v3(1.1, 1.1)
            }).start();
          }
        }
        //倍数移动结束，金额乘以倍数
        ;

        _proto.changeTopCashByOdd = function changeTopCashByOdd() {
          var _this11 = this;
          //销毁需要删除的倍数杯子
          if (this._currentOddMoveList.length > 0) {
            this._currentOddMoveList.sort(function (a, b) {
              return b - a;
            });
            this._currentOddMoveList.map(function (item) {
              if (_this11.cup_odd_box.children[item]) {
                var target = _this11.cup_odd_box.children[item];
                target.destroyFromParent();
              }
            });
          }
          this._currentOdd = 0;
          this.move_odd_box.removeAllChildren();
          this.move_odd_spine_box.removeAllChildren();

          //金额增加
          this.one_win.setScale(v3(0, 0, 1));
          this.notice_spine.setAnimation(0, "normal_win", false);
          this.notice_spine.addAnimation(0, "normal_idle", true);
          this.one_win.getChildByName("Sprite").getComponent(UIOpacity).opacity = 255;
          this.one_win.getChildByName("number").getComponent(Label).string = Common.numFormat(this._one_win_totalCash + "");
          this.one_win.active = true;
          tween(this.one_win).to(0.1, {
            scale: v3(1.3, 1.3)
          }).delay(0.1).to(0.1, {
            scale: v3(1.1, 1.1)
          }).start();
          this.scheduleOnce(function () {
            //左下角金额到达最终目标
            _this11.txt_win.string = Common.numFormat(_this11._win_totalMoney + "");
            if (_this11._isFree) {
              _this11.txt_winFree.string = Common.numFormat(slotCocktailNightsProxy.freeTotalWin + "");
            }
            _this11._currentOddMoveList = [];

            //倍数移动结束 新增杯子
            if (_this11.cup_odd_box.children.length != 5) {
              _this11.cup_odd_box.children.map(function (item, index) {
                //旧杯子重新设置位置
                if (index != _this11.cup_odd_box.children.length - 1) {
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.shakerMove);
                  tween(item).to(0.2, {
                    position: v3(_this11._cupPosition[index].x, _this11._cupPosition[index].y)
                  }).start();
                } else {
                  slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.shakerMove);
                  var timer1 = function timer1() {
                    item.setPosition(v3(item.getPosition().x -= 2, item.getPosition().y += 8));
                    if (item.getPosition().y >= 80) {
                      _this11.unschedule(timer1);
                      _this11.schedule(timer2, 0.01);
                    }
                  };
                  var timer2 = function timer2() {
                    item.setPosition(v3(item.getPosition().x -= 2, item.getPosition().y -= 4));
                    if (item.getPosition().y >= 0) {
                      _this11.unschedule(timer2);
                      tween(item).to(0.2, {
                        position: v3(_this11._cupPosition[index].x, _this11._cupPosition[index].y)
                      }).call(function () {
                        //新增杯子
                        var addNum = 5 - _this11.cup_odd_box.children.length;
                        var _loop = function _loop() {
                          var node = instantiate(_this11.cup_odd);
                          if (slotCocktailNightsProxy.result["Res"][_this11._current_index]) {
                            var value = parseInt(_this11.cup_odd_box.children[_this11.cup_odd_box.children.length - 1].getChildByName("odd").getComponent(Label).string.replace(/x/g, "")) + 2;
                            node.active = true;
                            node.getChildByName("spine").active = true;
                            if (value == 2) {
                              _this11.scheduleOnce(function () {
                                node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "normal_idle", true);
                              });
                            } else {
                              _this11.scheduleOnce(function () {
                                node.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "special_idle", true);
                              });
                            }
                            node.getChildByName("odd").getComponent(Label).string = "x" + value;
                            node.parent = _this11.cup_odd_box;
                            node.setPosition(v3(350, 20));
                            var moveIndex = _this11.cup_odd_box.children.length - 1;
                            if (i == addNum - 1) {
                              _this11.scheduleOnce(function () {
                                slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.shakerStop);
                                tween(node).to(0.05, {
                                  position: v3(_this11._cupPosition[4].x, _this11._cupPosition[4].y)
                                }).start();
                              }, i / 2);
                            } else {
                              //分开移动
                              _this11.scheduleOnce(function () {
                                slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.shakerMove);
                                var timer3 = function timer3() {
                                  node.setPosition(v3(node.getPosition().x -= 2, node.getPosition().y += 8));
                                  if (node.getPosition().y >= 80) {
                                    _this11.unschedule(timer3);
                                    _this11.schedule(timer4, 0.01);
                                  }
                                };
                                var timer4 = function timer4(index) {
                                  node.setPosition(v3(node.getPosition().x -= 2, node.getPosition().y -= 4));
                                  if (node.getPosition().y >= 0) {
                                    _this11.unschedule(timer4);
                                    tween(node).to(0.1, {
                                      position: v3(_this11._cupPosition[moveIndex].x, _this11._cupPosition[moveIndex].y)
                                    }).start();
                                  }
                                };
                                tween(node).to(0.05, {
                                  position: v3(_this11._cupPosition[4].x, _this11._cupPosition[4].y)
                                }).start();
                                _this11.schedule(timer3, 0.01);
                              }, i / 3);
                            }
                          }
                        };
                        for (var i = 0; i < addNum; i++) {
                          _loop();
                        }
                      }).start();
                    }
                  };
                  _this11.schedule(timer1, 0.01);
                }
              });
            }
          }, this._currentOddMoveList.length > 0 ? 0.05 : 0);
        }

        //结束后杯子初始化
        ;

        _proto.endCupInit = function endCupInit() {
          this.cup_odd_box.children.map(function (item, index) {
            if (index != 4) {
              if (item.getChildByName("odd").getComponent(Label).string != "x2") {
                item.getChildByName("odd").getComponent(Label).string = "x2";
                tween(item.getChildByName("odd")).to(0.05, {
                  position: v3(0, 40, 0),
                  eulerAngles: v3(0, 0, -10)
                }).call(function () {
                  tween(item.getChildByName("odd")).to(0.05, {
                    position: v3(0, 40, 0),
                    eulerAngles: v3(0, 0, 0)
                  }).call(function () {
                    tween(item.getChildByName("odd")).to(0.05, {
                      position: v3(0, 40, 0),
                      eulerAngles: v3(0, 0, 10)
                    }).call(function () {
                      tween(item.getChildByName("odd")).to(0.05, {
                        position: v3(0, 40, 0),
                        eulerAngles: v3(0, 0, 0)
                      }).call(function () {
                        tween(item.getChildByName("odd")).to(0.05, {
                          position: v3(0, 40, 0),
                          eulerAngles: v3(0, 0, -10)
                        }).call(function () {
                          tween(item.getChildByName("odd")).to(0.05, {
                            position: v3(0, 25, 0),
                            eulerAngles: v3(0, 0, 0)
                          }).call(function () {}).start();
                        }).start();
                      }).start();
                    }).start();
                  }).start();
                }).start();
                item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "down_level", false);
                item.getChildByName("spine").getComponent(sp.Skeleton).addAnimation(0, "normal_idle", true);
              }
            } else {
              item.getChildByName("odd").getComponent(Label).string = "x4";
            }
          });
        }
        //头部获取总金额
        ;

        _proto.changeTopTotalCash = function changeTopTotalCash() {
          var _this12 = this;
          this._currentOdd = 0;
          this._currentOddMoveList = [];
          this.one_win.active = false;
          var odd = this._win_totalMoney / this._bet;
          if (odd <= 5) {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeInfobarTotalwin);
            this.all_win.getChildByName("number").getComponent(Label).string = Common.numFormat(this._win_totalMoney + "");
          } else {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeInfobarTotalwinMedMain, function (id) {
              _this12._totalCashAudioId = id;
            });
            this.all_win_number.string = Common.numFormat(this._win_totalMoney + "");
            this.scheduleOnce(function () {
              AudioManager.instance.stopSound(_this12._totalCashAudioId);
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.prizeInfobarTotalwinMedEnd);
            }, 0.5);
          }
          this.all_win.setScale(v3(0, 0, 1));
          this.all_win.active = true;
          this.changeAdBg(this._win_totalMoney);
          //金额
          tween(this.all_win).to(0.1, {
            scale: v3(1.3, 1.3, 1)
          }).delay(0.1).to(0.1, {
            scale: v3(1.1, 1.1, 1)
          }).start();
        }
        //广告栏背景动画变化
        ;

        _proto.changeAdBg = function changeAdBg(num) {
          var odd = num / this._bet;
          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.totalwinShine);
          if (odd <= 5) {
            this.notice_spine.setAnimation(0, "normal_win", false);
            this.notice_spine.addAnimation(0, "normal_idle", true);
          } else if (odd > 5 && odd < 60) {
            this.notice_spine.setAnimation(0, "bigwin_intro", false);
            this.notice_spine.setAnimation(0, "bigwin_win", false);
            this.notice_spine.addAnimation(0, "bigwin_idle", true);
          } else {
            this.notice_spine.setAnimation(0, "bigwin2_intro", false);
            this.notice_spine.addAnimation(0, "bigwin2_idle", true);
          }
        }
        //进入免费模式初始页
        ;

        _proto.enterFreeMode = function enterFreeMode() {
          var _this13 = this;
          this.run_box.getComponent(slotCocktailNightsRun).scatterWin();
          this.scheduleOnce(function () {
            _this13.run_box.getComponent(slotCocktailNightsRun).scatterNormal();
          }, 1.5);
          this.scheduleOnce(function () {
            slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.fsTrans);
            _this13.hideWindow();
            _this13._isInitReadyIntoFree = false;
            _this13._startFreeTime = 5;
            AudioManager.instance.stopAllEffect();
            // slotWildBanditoDef.palyAudio(slotWildBanditoDef.audio.fsTrans)
            slotCocktailNightsDef.palyMusic(slotCocktailNightsDef.audio.bgm_fs);
            _this13.enter_free_time.setScale(0, 0);
            _this13.enter_free_btn.setScale(0, 0);
            _this13.enter_free_btn_name.setScale(0, 0);
            _this13.enter_free_time.getComponent(Label).string = slotCocktailNightsProxy.result.FreeInfo.Count + "";

            //this.enter_free_btn_spine.node.setScale(0, 0)
            _this13.enter_free.active = true;
            _this13.enter_free_spine.node.active = true;
            _this13.enter_free_spine.setAnimation(0, "intro", false);
            _this13.enter_free_spine.setCompleteListener(function () {
              _this13.enter_free_spine.setCompleteListener(null);
              _this13.enter_free_spine.setAnimation(0, "idle", true);
            });
            //初始化杯子
            if (slotCocktailNightsProxy.result.FreeInfo.BottomMultiple && slotCocktailNightsProxy.result.FreeInfo.BottomMultiple.length == 5) {
              _this13.cup_odd_box.children.map(function (item, index) {
                item.getChildByName("odd").getComponent(Label).string = "x" + slotCocktailNightsProxy.result.FreeInfo.BottomMultiple[index];
                if (slotCocktailNightsProxy.result.FreeInfo.BottomMultiple[index] == 2) {
                  item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "normal_idle", true);
                } else {
                  item.getChildByName("spine").getComponent(sp.Skeleton).setAnimation(0, "special_idle", true);
                }
              });
            } else {
              _this13.endCupInit();
            }
            _this13.scheduleOnce(function () {
              tween(_this13.enter_free_btn).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
              tween(_this13.enter_free_time).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
              tween(_this13.enter_free_btn_name).to(0.2, {
                scale: v3(1, 1, 1)
              }).start();
              //cc.tween(this.enter_free_btn_spine.node).to(0.2, { scale: cc.v3(1.4, 1.4, 1) }).start()
            }, 0.2);
          }, 2);
        }
        //进入免费游戏
        ;

        _proto.enterFreePage = function enterFreePage() {
          var _this14 = this;
          this._startFreeTime = 0;
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[1];
          this.cup_odd_line.getComponent(Sprite).spriteFrame = this.cup_odd_lineList[1];
          this.enter_free.active = false;
          this.enter_free_spine.node.active = false;
          this.topBg_spine.setAnimation(0, "free_idle", true);
          this.cup_box.setPosition(v3(0, -265, 0));
          this.cup_box.getChildByName("bg").active = false;
          this.cup_box.getChildByName("bgTitle").active = false;
          this.bg_bot_normal.active = false;
          this.bg_bot_free.active = true;
          this.run_box_bg.getComponent(Sprite).spriteFrame = this.run_box_frames[1];
          this.turn_free_box.active = true;
          if (slotCocktailNightsProxy.result) {
            this.setFreeCount(slotCocktailNightsProxy.result.FreeInfo.Count);
          }
          this.scheduleOnce(function () {
            _this14.changeState(RunState.NORMAL);
            _this14._lock = false;
            _this14._isFree = true;
          }, 0.5);
        }
        //进入结束免费模式页面
        ;

        _proto.endFree = function endFree() {
          var _this15 = this;
          this.free_end_cash.reset(0);
          this.topBg.getComponent(Sprite).spriteFrame = this.bgList[0];
          this.cup_odd_line.getComponent(Sprite).spriteFrame = this.cup_odd_lineList[0];
          this.run_box_bg.getComponent(Sprite).spriteFrame = this.run_box_frames[0];
          this.topBg_spine.setAnimation(0, "normal_idle", true);
          this.free_end_time.getComponent(Label).string = slotCocktailNightsProxy.result.FreeInfo.TotalCount + "";
          this.free_end_time.setScale(v3(0, 0, 1));
          this.free_end_cash.node.setScale(v3(0, 0, 1));
          this.bg_bot_normal.active = true;
          this.bg_bot_free.active = false;
          this.turn_free_box.active = false;
          this.cup_box.setPosition(v3(0, -220, 0));
          this.cup_box.getChildByName("bg").active = true;
          this.cup_box.getChildByName("bgTitle").active = true;
          this._isFree = false;
          this.free_end.active = true;
          this.free_end_spine.node.active = true;
          this.free_end_spine.setAnimation(0, "intro", false);
          this.scheduleOnce(function () {
            tween(_this15.free_end_time).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
            tween(_this15.free_end_cash.node).to(0.3, {
              scale: v3(1, 1, 1)
            }).start();
          }, 0.2);
          this.free_end_spine.addAnimation(0, "idle", true);
          this.free_end_cash.string = Common.numFormat(slotCocktailNightsProxy.freeTotalWin + "");
          this.free_end_btn.setScale(0, 0);
          this.free_end_btn_name.setScale(0, 0);
          //this.free_end_btn_spine.node.setScale(0, 0)

          //头部金额设置成免费模式总金额
          this.all_win_number.reset(slotCocktailNightsProxy.freeTotalWin);

          //免费模式结束音乐
          slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.bgm_totalwin_main, function (id) {
            _this15._audioId = id;
            _this15.scheduleOnce(function () {
              AudioManager.instance.stopSound(id);
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.bgm_totalwin_end, function (id) {
                _this15._audioId = id;
              });
            }, 3);
          });
          this.scheduleOnce(function () {
            tween(_this15.free_end_cash.node).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
            tween(_this15.free_end_btn).to(0.2, {
              scale: v3(1, 1, 1)
            }).call(function () {
              slotCocktailNightsDef.palyAudio(slotCocktailNightsDef.audio.fsWonTitle);
              _this15._endFreeTime = 5;
            }).start();
            tween(_this15.free_end_btn_name).to(0.2, {
              scale: v3(1, 1, 1)
            }).start();
            // cc.tween(this.free_end_btn_spine.node).to(0.2, { scale: cc.v3(1.4, 1.4, 1) }).call(() => {
            //     this._endFreeTime = 5
            // }).start()
          }, 1.3);
        }
        //免费模式结束进入到普通模式
        ;

        _proto.endNormal = function endNormal() {
          if (slotCocktailNightsProxy.freeTotalWin > 0) {
            this.all_win.active = true;
            this.all_win_number.reset(slotCocktailNightsProxy.freeTotalWin);
            this.txt_win.reset(slotCocktailNightsProxy.freeTotalWin);
            this.notice_bg.active = false;
          } else {
            this.txt_win.reset(0);
            this.notice_bg.active = true;
            this.all_win.active = false;
          }
          this.txt_winFree.reset(0);

          // AudioManager.instance.stopAllEffect()
          // slotWildBanditoDef.palyMusic(slotWildBanditoDef.audio.bgm_mg);
          this.free_end.active = false;
          this._endFreeTime = 0;
          this._lock = false;
          this.buyFreeColorChange();
          this.changeState(RunState.NORMAL);
          slotCocktailNightsProxy.freeTotalWin = 0;
          this.startGameAni(false);
        }
        //点击直接结束大奖动画
        ;

        _proto.clickHideBigWin = function clickHideBigWin() {
          var _this16 = this;
          if (!this._isTrueBigWin) return;
          this._isTrueBigWin = true;
          this.big_win_txt.reset(this._win_totalMoney);
          this.scheduleOnce(function () {
            _this16.big_win_txt.reset();
            _this16.big_win_box.active = false;
            _this16.big_win.setAnimation(0, "", true);
            _this16.allEnd(true);

            // AudioManager.instance.stopSound(this._audioId);
            // this._audioId = null
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
        };
        _proto.calResult = function calResult(call) {
          var _this17 = this;
          this._cal_current_result.scatterNum = 0;
          this._cal_current_result.showLineIndex = 0;
          this._cal_current_result.result = [];
          this._cal_current_result.win = [];
          this._cal_current_result.isChangeOdd = false;
          var openNum = slotCocktailNightsProxy.result["Res"][this._current_index]["AllPosMsg"];
          openNum.map(function (item, index) {
            var newItem = [];
            for (var i = item.length - 1; i >= 0; i--) {
              newItem.push(item[i]);
            }
            _this17._cal_current_result.result.push(newItem);
          });

          //针对第一轮的每束的期待动画和全局的期待动画
          if (this._current_index == 0) {
            this._cal_current_result.result.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1.Sym == "0") {
                  _this17._cal_current_result.scatterNum += 1;
                  if (_this17._cal_current_result.scatterNum == 3) {
                    _this17._cal_current_result.showLineIndex = index + 1;
                  }
                }
                if (item1.IsReward) {
                  if (!_this17._cal_current_result.win[index]) _this17._cal_current_result.win[index] = [];
                  _this17._cal_current_result.win[index].push({
                    parentIndex: index,
                    childIndex: index1
                  });
                }
              });
            });
          } else {
            //不是第一轮，计算上一轮一共多少satter，确定这一轮是否展示全局期待动画
            this._cal_current_result.result.map(function (item, index) {
              item.map(function (item1, index1) {
                if (item1.IsReward) {
                  if (!_this17._cal_current_result.win[index]) _this17._cal_current_result.win[index] = [];
                  _this17._cal_current_result.win[index].push({
                    parentIndex: index,
                    childIndex: index1
                  });
                }
              });
            });
            slotCocktailNightsProxy.result["Res"][this._current_index - 1]["AllPosMsg"].map(function (item, index) {
              item.map(function (item1) {
                if (item1.Sym == "0") {
                  _this17._cal_current_result.scatterNum += 1;
                }
              });
            });
            if (slotCocktailNightsProxy.result["Res"][this._current_index]["ExtraOdd"] > slotCocktailNightsProxy.result["Res"][this._current_index - 1]["ExtraOdd"]) {
              this._cal_current_result.isChangeOdd = true;
            }
          }
          call && call();
        };
        _proto.changeTopNum = function changeTopNum(init, index, isFromLast) {
          if (init === void 0) {
            init = false;
          }
          if (index === void 0) {
            index = 0;
          }
          if (isFromLast === void 0) {
            isFromLast = false;
          }
          if (init) {
            this.topTotalNum.getComponent(Label).spacingX = 5;
            this.topTotalNum.setPosition(v3(-40, 5));
            this.topTotalNum.getComponent(Label).string = "....";
          } else {
            this.topTotalNum.getComponent(Label).spacingX = -5;
            this.topTotalNum.setPosition(v3(-40, 0));
            var _num = 1;
            if (isFromLast) {
              for (var i = 0; i <= index; i++) {
                _num *= slotCocktailNightsProxy.result["Res"][slotCocktailNightsProxy.result["Res"].length - 1]["AllPosMsg"][i].length;
              }
            } else {
              for (var _i = 0; _i <= index; _i++) {
                _num *= slotCocktailNightsProxy.result["Res"][this._current_index]["AllPosMsg"][_i].length;
              }
            }
            this.topTotalNum.getComponent(Label).string = _num + "";
          }
        }

        //事件监听
        ;

        _proto.initEvent = function initEvent() {
          var _this18 = this;
          //进入页面获取上次数据
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.UPDATE_BETLIST, this.initPage, this);
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.SELECT_BET, function (count) {
            _this18.updateSetData();
            Tween.stopAllByTarget(_this18.txt_bet.node);
            tween(_this18.txt_bet.node).to(0.1, {
              scale: v3(1.2, 1.2, 1)
            }).to(0.1, {
              scale: v3(1, 1, 1)
            }).start();
          }, this);

          //第一轮结束
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.END, function () {
            _this18.changeState(RunState.STOP);
          }, this);

          //中奖后号码补充
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.SHOWNEXT, function () {
            _this18.changeState(RunState.SHOWNEXT);
          }, this);

          //补充新一轮号码结束
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.SHOWNEXTEND, function () {
            _this18.changeState(RunState.SHOWNEXTEND);
          }, this);
          //头部数字变化
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.CHANGETOPNUM, function (data) {
            _this18.changeTopNum(false, data.index);
          }, this);

          //期待光线-》公告栏展示对应公告
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.NOTICESHOWANI, function () {
            if (!_this18.notice_scatter_waiting.active) {
              _this18.one_win.active = false;
              _this18.notice_bg.active = false;
              _this18.notice_scatter_waiting.active = true;
            }
          }, this);
          //隐藏期待光线-》公告栏隐藏对应公告
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.NOTICEHIDEANI, function () {
            if (_this18.notice_scatter_waiting.active) {
              _this18.notice_scatter_waiting.active = false;
              if (_this18._win_totalMoney > 0) {
                _this18.one_win.active = true;
              } else {
                _this18.notice_bg.active = true;
              }
            }
          }, this);

          //倍数变化
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.WILDMOVE, function (data) {
            _this18.cupChange(data._parentIndex);
          }, this);

          //转盘提示
          slotCocktailNightsProxy.on(slotCocktailNightsGameEvent.CLICK_ITEM, function (data) {
            if (_this18._isFree) return;
            if (_this18._auto) return;
            if (_this18._lock) return;
            _this18._window.node.scale = v3(1, 1, 1);
            _this18._window.node.active = true;
            _this18._window.showCard(data._cardData, data._parentIndex);
            _this18.windowMask1.active = true;
            _this18.windowMask2.active = true;
            _this18.windowMask3.active = true;
            var pos = data.pos;
            pos = _this18.node.getComponent(UITransform).convertToNodeSpaceAR(pos);
            if (data._cardData.Sym == 0 || data._cardData.Sym == 1) {
              if (data._parentIndex <= 2) {
                pos.x = pos.x + 130;
              } else {
                pos.x = pos.x - 130;
              }
            } else {
              if (data._parentIndex <= 2) {
                pos.x = pos.x + 90;
              } else {
                pos.x = pos.x - 90;
              }
            }
            _this18._window.node.setPosition(pos.x, pos.y);
          }, this);

          //修改下注金额
          EventManager.on(ConfigManager.eventTransform.setBet, this.setBet, this);
          EventManager.on(ConfigManager.eventTransform.setAuto, this.setAuto, this);
          EventManager.on(ConfigManager.eventTransform.setQuick, this.clickChangeQuick, this);
        }

        //购买免费按钮颜色状态修改
        ;

        _proto.buyFreeColorChange = function buyFreeColorChange() {
          if (this._auto || this._isFree || this._lock) {
            this.free_box_btn.getComponent(UIOpacity).opacity = 120;
          } else {
            this.free_box_btn.getComponent(UIOpacity).opacity = 255;
          }
        }

        //普通模式开启游戏按钮动画
        ;

        _proto.startGameAni = function startGameAni(isMove) {
          var _this19 = this;
          if (this._auto) return;
          if (this._isFree) return;
          if (isMove) {
            this.turn_start.setAnimation(0, "star", false);
            this.turn_start.setCompleteListener(function () {
              _this19.turn_start.setCompleteListener(null);
              if (!_this19._auto && !_this19._isFree && _this19._lock) {
                _this19.turn_start.setAnimation(0, "stop", true);
              } else if (!_this19._auto && !_this19._isFree && !_this19._lock) {
                _this19.turn_start.setAnimation(0, "idle", true);
              }
            });
          } else {
            this.turn_start.setAnimation(0, "idle", true);
          }
        }

        //隐藏介绍图
        ;

        _proto.hideWindow = function hideWindow() {
          this.windowMask1.active = false;
          this.windowMask2.active = false;
          this.windowMask3.active = false;
          this._window.hideCard();
        }

        //自动下单回调
        ;

        _proto.setAuto = function setAuto(times) {
          var _this20 = this;
          this._autoTimes = times;
          this.turn_auto_leftCount.string = "" + this._autoTimes;
          if (times > 0) {
            this.changeBtnActive(false);
            this._auto = true;
            this.turn_start.getComponent(AddSpineEffect).animation = "push";
            this.turn_start.setAnimation(0, "auto", true);
            this.scheduleOnce(function () {
              _this20.turn_start.setAnimation(0, "auto", true);
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
            if (slotCocktailNightsProxy.getBet() == 2000) {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
              this._isMinBet = true;
            } else {
              this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
              this._isMinBet = false;
            }
            if (slotCocktailNightsProxy.getBet() == 1000000) {
              this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 60;
            } else {
              this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
            }
            this.normalBtn.getChildByName("btn4").getComponent(UIOpacity).opacity = 255;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 60;
            this.normalBtn.getChildByName("btn4").getComponent(UIOpacity).opacity = 60;
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
          this._bet = slotCocktailNightsProxy.getBet();
          this.txt_bet.string = Common.numFormat(this._bet + "");
          this.txt_betFree.string = Common.numFormat(this._bet + "");
        }
        //更新下注金额
        ;

        _proto.setBet = function setBet(betListIndex, betCount) {
          slotCocktailNightsProxy.setBet(betListIndex, betCount);
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
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetBaseByBlue", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetBase).setData({
              _curBetListIndex: slotCocktailNightsProxy._curBetListIndex,
              _curBetCount: slotCocktailNightsProxy._curBetCount,
              betMaxCount: slotCocktailNightsProxy.betMaxCount,
              betList: slotCocktailNightsProxy.betList,
              betRate: slotCocktailNightsProxy.betRate
            });
          }, true);
        }
        //按钮减少下注金额
        ;

        _proto.clickDownBet = function clickDownBet() {
          if (this._isMinBet) return;
          if (this._auto) return;
          if (this._lock) return;
          slotCocktailNightsProxy._curBetCount--;
          if (slotCocktailNightsProxy._curBetCount < 0) {
            slotCocktailNightsProxy._curBetListIndex--;
            if (slotCocktailNightsProxy._curBetListIndex < 0) {
              slotCocktailNightsProxy._curBetListIndex++;
              slotCocktailNightsProxy._curBetCount++;
            } else {
              slotCocktailNightsProxy._curBetCount = slotCocktailNightsProxy.betMaxCount - 1;
              slotCocktailNightsProxy.setBet(slotCocktailNightsProxy._curBetListIndex, slotCocktailNightsProxy._curBetCount);
            }
          } else {
            slotCocktailNightsProxy.setBet(slotCocktailNightsProxy._curBetListIndex, slotCocktailNightsProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //按钮增加下注金额
        ;

        _proto.clickUpBet = function clickUpBet() {
          if (this._auto) return;
          if (this._lock) return;
          slotCocktailNightsProxy._curBetCount++;
          if (slotCocktailNightsProxy._curBetCount >= slotCocktailNightsProxy.betMaxCount) {
            slotCocktailNightsProxy._curBetListIndex++;
            if (slotCocktailNightsProxy._curBetListIndex >= slotCocktailNightsProxy.betList.length) {
              slotCocktailNightsProxy._curBetListIndex--;
              slotCocktailNightsProxy._curBetCount--;
            } else {
              slotCocktailNightsProxy._curBetCount = 0;
              slotCocktailNightsProxy.setBet(slotCocktailNightsProxy._curBetListIndex, slotCocktailNightsProxy._curBetCount);
            }
          } else {
            slotCocktailNightsProxy.setBet(slotCocktailNightsProxy._curBetListIndex, slotCocktailNightsProxy._curBetCount);
          }
          this.checkDownOrUpBet();
        }
        //确定下注金额是否可以减少/增加
        ;

        _proto.checkDownOrUpBet = function checkDownOrUpBet() {
          if (slotCocktailNightsProxy.getBet() == 2000) {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 60;
            this._isMinBet = true;
          } else {
            this.normalBtn.getChildByName("btn2").getComponent(UIOpacity).opacity = 255;
            this._isMinBet = false;
          }
          if (slotCocktailNightsProxy.getBet() == 1000000) {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 60;
          } else {
            this.normalBtn.getChildByName("btn3").getComponent(UIOpacity).opacity = 255;
          }
        }
        //展示自动下注弹出框
        ;

        _proto.clickShowAutoBet = function clickShowAutoBet() {
          var _this21 = this;
          if (this._lock) return;
          if (this._isInitReadyIntoFree) return;
          var gold = DataManager.instance.getUserDataForKey(UserKey.GOLD);
          if (gold < this._bet) {
            Common.showTip(i18n.lang.fishTip.gold, sys.isMobile);
            this.setAuto(0);
            return;
          }
          Common.loadPopPublic("prefab/fortuneCommon/FortuneSetAutoByBlue", function () {}, function (prefab) {
            var node = instantiate(prefab);
            ViewManager.instance.popNodeView(node, true);
            if (!sys.isMobile) {
              node.scale = v3(1080 / 1900, 1080 / 1900, 1);
            } else {
              node.angle = 90;
            }
            node.getComponent(FortuneSetAutoByBlue).setData({
              gold: parseInt(DataManager.instance.getUserDataForKey(UserKey.GOLD)),
              bet: _this21._bet,
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
          Common.returnToHall(this, slotCocktailNightsProxy.BUNDLE);
        }
        //展示规则
        ;

        _proto.clickShowRule = function clickShowRule() {
          if (this._isInitReadyIntoFree) return;
          Common.loadPopBuddle("prefab/slotCocktailNightsHelp", slotCocktailNightsProxy.bundle, function () {}, function (prefab) {
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
            node.getComponent(FortuneHistory).setGameType("slotCocktailNights");
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
            node.getComponent(FortuneRank).send("slotCocktailNights");
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

          //大奖金额变化
          // EventManager.off(ConfigManager.eventTransform.scrollNumberEvent, this.bigWinEnd, this);
        };

        return slotCocktailNightsView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefab_windowItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cup_box", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cup_odd", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cup_odd_box", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cup_odd_line", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "cup_odd_lineList", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "move_odd_box", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "move_odd", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "move_odd_spine_box", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "move_odd_spine", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "topBg_spine", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "topBg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgList", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "windowMask2", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "windowMask1", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "windowMask3", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "topTotalNum", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "normalBtn", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "moreBtn", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "game_type", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "notice_spine", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "notice_bg", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "notice_frames", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "notice_title", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "notice_scatter_waiting", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "free_box_btn", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "free_box", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "free_box_cancel_btn", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "free_box_submit_btn", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "run_box", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "run_box_bg", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "run_box_frames", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "window_run_mask", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "one_win", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "all_win", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "all_win_number", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "big_win_box", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "big_win", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "big_win_txt", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "enter_free", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_spine", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_time", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "enter_free_btn_name", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "free_end", [_dec46], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "free_end_spine", [_dec47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "free_end_cash", [_dec48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn", [_dec49], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "free_end_btn_name", [_dec50], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "free_end_time", [_dec51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot_normal", [_dec52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "bg_bot_free", [_dec53], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "txt_bet", [_dec54], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "txt_win", [_dec55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "txt_gold", [_dec56], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "txt_betFree", [_dec57], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "txt_winFree", [_dec58], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "txt_goldFree", [_dec59], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box", [_dec60], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_last", [_dec61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_noLast", [_dec62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor62 = _applyDecoratedDescriptor(_class2.prototype, "turn_free_box_time", [_dec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor63 = _applyDecoratedDescriptor(_class2.prototype, "turn_start", [_dec64], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor64 = _applyDecoratedDescriptor(_class2.prototype, "turn_auto_leftCount", [_dec65], {
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

System.register("chunks:///_virtual/slotCocktailNightsWindow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, SpriteFrame, v3, Sprite, UITransform, Label, Widget, Component;
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
      v3 = module.v3;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Label = module.Label;
      Widget = module.Widget;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "66bc6hbIopP1b+bQwOAF+tV", "slotCocktailNightsWindow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /*
      SCATTER BonusSymbol = 0
      WILD BonusSymbol = 1
      XO BonusSymbol = 2
      YAN BonusSymbol = 3
      BLUECOCKTAIL BonusSymbol = 4
      GREENCOCKTAIL BonusSymbol = 5
      TEA BonusSymbol = 6
      LEMONTEA BonusSymbol = 7
      A BonusSymbol = 8
      K BonusSymbol = 9
      Q BonusSymbol = 10
      J BonusSymbol = 11
      TEN BonusSymbol = 12
      */
      var content1 = "4 biểu tượng Scatter trở lên sẽ kích hoạt vòng quay miễn phí.";
      var content2 = "Biểu tượng Wild thay thế cho tất cả các biểu tượng trừ các biểu tượng Scatter.";
      var betList = [[80, 50, 40, 30], [60, 50, 25, 20], [40, 30, 25, 10], [30, 20, 15, 8], [15, 12, 10, 6], [15, 12, 10, 6], [10, 8, 6, 4], [10, 8, 6, 4], [4, 3, 2, 1], [4, 3, 2, 1], [4, 3, 2, 1]];
      var slotCocktailNightsWindow = exports('slotCocktailNightsWindow', (_dec = ccclass("slotCocktailNightsWindow"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec10 = property(SpriteFrame), _dec11 = property(SpriteFrame), _dec12 = property(SpriteFrame), _dec13 = property(SpriteFrame), _dec14 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(slotCocktailNightsWindow, _Component);
        function slotCocktailNightsWindow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "left", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "right", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "boxBgList", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListA", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListB", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListC", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListD", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "iconListPoker", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "goldList", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListA", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListB", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListC", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bgListD", _descriptor13, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = slotCocktailNightsWindow.prototype;
        _proto.start = function start() {};
        _proto.showCard = function showCard(data, postion) {
          this.node.setScale(v3(0.7, 0.7, 1));
          // console.log(data, postion, "position");
          if (postion <= 2) {
            this.left.active = true;
            this.right.active = false;
            this.cardDetail(data, "left");
          } else {
            this.left.active = false;
            this.right.active = true;
            this.cardDetail(data, "right");
          }
        };
        _proto.cardDetail = function cardDetail(data, postion) {
          var target = null;
          if (postion == "left") {
            target = this.left;
          } else {
            target = this.right;
          }
          var iconBg = target.getChildByName("iconBg");
          var icon = iconBg.getChildByName("icon");
          var content = target.getChildByName("content");
          var odd = target.getChildByName("odd");
          if (data.Length == 1) {
            postion == "left" ? this.left.getComponent(Sprite).spriteFrame = this.boxBgList[0] : this.right.getComponent(Sprite).spriteFrame = this.boxBgList[0];
            target.getComponent(UITransform).height = 230;
            if (data.Sym < 8) {
              if (data.Sym == 0 || data.Sym == 1) {
                iconBg.getComponent(Sprite).spriteFrame = "";
                data.Sym == 0 ? content.getComponent(Label).string = content1 : content.getComponent(Label).string = content2;
              } else {
                data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[0] : iconBg.getComponent(Sprite).spriteFrame = this.bgListA[data.Sym - 2];
              }
              icon.getComponent(Sprite).spriteFrame = this.iconListA[data.Sym];
            } else {
              data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[0] : iconBg.getComponent(Sprite).spriteFrame = this.bgListA[6];
              icon.getComponent(Sprite).spriteFrame = this.iconListPoker[data.Sym - 8];
            }
            if (data.Sym == 4) {
              icon.setPosition(v3(0, -15));
            } else {
              icon.setPosition(v3(0, 0));
            }
          } else if (data.Length == 2) {
            postion == "left" ? this.left.getComponent(Sprite).spriteFrame = this.boxBgList[1] : this.right.getComponent(Sprite).spriteFrame = this.boxBgList[1];
            target.getComponent(UITransform).height = 400;
            if (data.Sym < 8) {
              if (data.Sym == 0 || data.Sym == 1) {
                iconBg.getComponent(Sprite).spriteFrame = "";
                data.Sym == 0 ? content.getComponent(Label).string = content1 : content.getComponent(Label).string = content2;
              } else {
                data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[1] : iconBg.getComponent(Sprite).spriteFrame = this.bgListB[data.Sym - 2];
              }
              icon.getComponent(Sprite).spriteFrame = this.iconListB[data.Sym];
            } else {
              data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[1] : iconBg.getComponent(Sprite).spriteFrame = this.bgListB[6];
              icon.getComponent(Sprite).spriteFrame = this.iconListPoker[data.Sym - 8];
            }
            if (data.Sym == 4) {
              icon.setPosition(v3(0, -30));
            } else if (data.Sym == 5) {
              icon.setPosition(v3(0, -30));
            } else if (data.Sym == 6) {
              icon.setPosition(v3(0, -10));
            } else {
              icon.setPosition(v3(0, 0));
            }
          } else if (data.Length == 3) {
            postion == "left" ? this.left.getComponent(Sprite).spriteFrame = this.boxBgList[2] : this.right.getComponent(Sprite).spriteFrame = this.boxBgList[2];
            target.getComponent(UITransform).height = 580;
            if (data.Sym < 8) {
              if (data.Sym == 0 || data.Sym == 1) {
                iconBg.getComponent(Sprite).spriteFrame = "";
                data.Sym == 0 ? content.getComponent(Label).string = content1 : content.getComponent(Label).string = content2;
              } else {
                data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[2] : iconBg.getComponent(Sprite).spriteFrame = this.bgListC[data.Sym - 2];
              }
              icon.getComponent(Sprite).spriteFrame = this.iconListC[data.Sym];
            } else {
              data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[2] : iconBg.getComponent(Sprite).spriteFrame = this.bgListC[6];
              icon.getComponent(Sprite).spriteFrame = this.iconListPoker[data.Sym - 8];
            }
            if (data.Sym == 4) {
              icon.setPosition(v3(0, -45));
            } else if (data.Sym == 5) {
              icon.setPosition(v3(0, -75));
            } else if (data.Sym == 6) {
              icon.setPosition(v3(0, -30));
            } else {
              icon.setPosition(v3(0, 0));
            }
          } else if (data.Length == 4) {
            postion == "left" ? this.left.getComponent(Sprite).spriteFrame = this.boxBgList[3] : this.right.getComponent(Sprite).spriteFrame = this.boxBgList[3];
            target.getComponent(UITransform).height = 730;
            if (data.Sym < 8) {
              if (data.Sym == 0 || data.Sym == 1) {
                iconBg.getComponent(Sprite).spriteFrame = "";
                data.Sym == 0 ? content.getComponent(Label).string = content1 : content.getComponent(Label).string = content2;
              } else {
                data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[3] : iconBg.getComponent(Sprite).spriteFrame = this.bgListD[data.Sym - 2];
              }
              icon.getComponent(Sprite).spriteFrame = this.iconListD[data.Sym];
            } else {
              data.Rim == 1 ? iconBg.getComponent(Sprite).spriteFrame = this.goldList[3] : iconBg.getComponent(Sprite).spriteFrame = this.bgListD[6];
              icon.getComponent(Sprite).spriteFrame = this.iconListPoker[data.Sym - 8];
            }
            if (data.Sym == 4) {
              icon.setPosition(v3(0, -115));
            } else if (data.Sym == 5) {
              icon.setPosition(v3(0, -125));
            } else if (data.Sym == 6) {
              icon.setPosition(v3(0, -40));
            } else {
              icon.setPosition(v3(0, 0));
            }
          }
          icon.active = true;
          iconBg.active = true;
          target.getComponent(UITransform).width = 580;
          if (data.Sym == 0 || data.Sym == 1) {
            target.getComponent(UITransform).width = 580;
            postion == "left" ? iconBg.getComponent(Widget).left = 30 : iconBg.getComponent(Widget).right = 30;
            data.Sym == 0 ? content.getComponent(Label).string = content1 : content.getComponent(Label).string = content2;
            odd.active = false;
            content.active = true;
          } else {
            target.getComponent(UITransform).width = 450;
            postion == "left" ? iconBg.getComponent(Widget).left = 30 : iconBg.getComponent(Widget).right = 30;
            odd.getChildByName("num1").getComponent(Label).string = betList[data.Sym - 2][0];
            odd.getChildByName("num2").getComponent(Label).string = betList[data.Sym - 2][1];
            odd.getChildByName("num3").getComponent(Label).string = betList[data.Sym - 2][2];
            odd.getChildByName("num4").getComponent(Label).string = betList[data.Sym - 2][3];
            odd.active = true;
            content.active = false;
          }
        };
        _proto.hideCard = function hideCard() {
          this.node.active = false;
          this.node.setScale(v3(1, 1, 1));
        };
        return slotCocktailNightsWindow;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "left", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "right", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "boxBgList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iconListA", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconListB", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconListC", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "iconListD", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "iconListPoker", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "goldList", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bgListA", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "bgListB", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "bgListC", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "bgListD", [_dec14], {
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

(function(r) {
  r('virtual:///prerequisite-imports/slotCocktailNightsGame', 'chunks:///_virtual/slotCocktailNightsGame'); 
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